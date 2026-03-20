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
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Mountain,
  Sun,
  Globe,
  Landmark,
  Calendar,
  Compass,
  Camera,
  Tent,
  Utensils,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco 2 Week Itinerary 2026 | 14 Days Casablanca to Marrakech via Sahara',
  description:
    'The ultimate Morocco 2 week itinerary covering Casablanca, Chefchaouen, Fez, Sahara Desert, Todra Gorge, Marrakech, and Essaouira. Day-by-day plan with budget tips, transport advice, and customization options for 14 unforgettable days in Morocco.',
  keywords: [
    '2 weeks in morocco',
    'morocco 2 week itinerary',
    '14 days morocco',
    'two weeks morocco itinerary',
    'morocco 14 day itinerary',
    'morocco two week trip',
    'morocco itinerary 14 days',
    'best morocco itinerary',
    'morocco travel itinerary',
    'casablanca to marrakech itinerary',
    'morocco road trip 2 weeks',
    'morocco backpacking itinerary',
    'fez sahara marrakech itinerary',
    'chefchaouen fez desert marrakech',
    'morocco trip planning',
    'morocco holiday 2 weeks',
    'best 14 day morocco route',
  ],
  openGraph: {
    title: 'Morocco 2 Week Itinerary 2026 | 14 Days Casablanca to Marrakech via Sahara',
    description:
      'Day-by-day Morocco 2 week itinerary. Explore Casablanca, Chefchaouen, Fez, the Sahara Desert, gorges, Marrakech, and Essaouira in 14 unforgettable days.',
    url: `${BASE_URL}/morocco-2-week-itinerary`,
    images: [
      {
        url: `${BASE_URL}/images/hero-desert.webp`,
        width: 1200,
        height: 630,
        alt: 'Camel caravan crossing golden Sahara dunes at sunset in Merzouga Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 2 Week Itinerary 2026 | 14 Days Casablanca to Marrakech',
    description:
      'Complete 14-day Morocco itinerary with day-by-day guide, budget breakdown, and customization options. Casablanca, Chefchaouen, Fez, Sahara, Marrakech, and more.',
    images: [`${BASE_URL}/images/hero-desert.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-2-week-itinerary` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-2-week-itinerary`,
  name: 'Morocco 2 Week Itinerary 2026 | 14 Days Casablanca to Marrakech via Sahara',
  description:
    'Complete day-by-day Morocco 2 week itinerary covering Casablanca, Chefchaouen, Fez, Sahara Desert, Todra Gorge, Marrakech, and Essaouira with budget breakdown and customization options.',
  url: `${BASE_URL}/morocco-2-week-itinerary`,
  image: `${BASE_URL}/images/hero-desert.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-2-week-itinerary`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco 2-Week Itinerary', item: `${BASE_URL}/morocco-2-week-itinerary` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does 2 weeks in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget traveler can expect to spend from 8,000-12,000 MAD (approximately 800-1,200 USD) for 14 days, covering accommodation in hostels and riads, local food, public transport, and activities. Mid-range travelers typically spend from 15,000-25,000 MAD (1,500-2,500 USD) for comfortable riads, private transport, guided tours, and restaurant meals. Luxury travelers should budget from 35,000 MAD and above. Seasonal pricing can change, especially during peak periods like Christmas, Easter, and summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is 2 weeks enough for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two weeks is an excellent amount of time for Morocco. It allows you to cover the major highlights including imperial cities, the Sahara Desert, mountain landscapes, and coastal towns without rushing. You will have time for immersive experiences like a desert overnight camp, multi-day medina exploration, and relaxed evenings in riads. While you could spend months exploring Morocco, 14 days strikes the ideal balance between seeing the key destinations and savoring each place.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best month to visit Morocco for 2 weeks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for a 2-week Morocco trip are March to May and September to November. Spring brings wildflowers and comfortable temperatures across all regions. Autumn offers warm days, cooler evenings, and fewer crowds than summer. Avoid July-August when the Sahara and inland cities exceed 45 degrees Celsius. Winter (December-February) is pleasant for southern regions but cold in the mountains and north. Seasonal pricing can change during Ramadan and public holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for 2 weeks in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need a guide for the entire trip. Morocco is safe and navigable for independent travelers. However, hiring local guides is highly recommended for specific experiences: the Fez medina (from 300 MAD for a half-day), the Sahara Desert trek (included in most desert tours from 800 MAD), and Atlas Mountain hikes (from 350 MAD per day). Many travelers combine self-guided city exploration with guided excursions for the best experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I get between cities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has several transport options. CTM and Supratours buses are comfortable, reliable, and affordable (Marrakech to Fez from 200 MAD). The Al Boraq high-speed train connects Casablanca to Tangier in two hours. ONCF trains link Casablanca, Rabat, Meknes, and Fez. For the desert and mountain segments, shared or private transfers are common (Fez to Merzouga from 250 MAD shared, from 2,500 MAD private). Grand taxis handle shorter intercity routes. Renting a car gives maximum flexibility but requires confidence with Moroccan driving conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize this 2-week Morocco itinerary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. This itinerary is a framework you can adjust to your interests. Beach lovers can add extra days in Essaouira or Taghazout. Trekking enthusiasts can replace the Casablanca days with a 2-3 day Atlas Mountain trek from Imlil. History buffs can swap Chefchaouen for Meknes and Volubilis. If you prefer a slower pace, focus on fewer cities and spend 3-4 nights in each location rather than rushing through all destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo travelers spending 2 weeks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for solo travelers, including solo female travelers, though standard precautions apply. Stick to well-lit areas at night, ignore persistent touts, and use registered guides. The cities on this itinerary are all well-touristed and have good infrastructure. Solo travelers often find Morocco welcoming, with locals offering genuine hospitality. Riads and hostels are great places to meet other travelers. Keep valuables secure, use ATMs inside banks, and carry a copy of your passport.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: AT-A-GLANCE
   ═══════════════════════════════════════════════════════════════ */

const atAGlance = [
  { icon: Calendar, label: 'Duration', value: '14 days / 13 nights' },
  { icon: MapPin, label: 'Route', value: 'Casablanca to Marrakech (circular)' },
  { icon: Compass, label: 'Distance', value: 'Approx. 2,200 km total' },
  { icon: DollarSign, label: 'Budget', value: 'From 8,000 MAD (budget) to 25,000+ MAD (mid-range)' },
  { icon: Sun, label: 'Best Season', value: 'March-May & September-November' },
  { icon: Star, label: 'Highlights', value: 'Sahara, Fez medina, Chefchaouen, Marrakech' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY-BY-DAY ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const itineraryDays = [
  {
    days: 'Day 1-2',
    title: 'Casablanca & Rabat',
    icon: Building,
    location: 'Casablanca / Rabat',
    image: '/images/hero-casablanca.webp',
    description:
      'Arrive at Casablanca Mohammed V International Airport. Spend your first afternoon at the iconic Hassan II Mosque, one of the largest mosques in the world with its stunning oceanfront setting and 210-meter minaret. Stroll the Corniche promenade and explore the Art Deco architecture of the Habous Quarter. On Day 2, take the train to Rabat (one hour) to visit the Hassan Tower, the Mausoleum of Mohammed V, the Kasbah of the Udayas with its blue-and-white streets overlooking the Atlantic, and the Chellah necropolis with its Roman ruins and nesting storks.',
    highlights: ['Hassan II Mosque (from 130 MAD entry)', 'Rabat Kasbah of the Udayas', 'Chellah necropolis and Roman ruins', 'Art Deco architecture in Casablanca'],
    transport: 'Airport transfer from 200 MAD. Casablanca-Rabat train from 50 MAD (1 hour).',
    overnight: 'Casablanca riad or hotel. Budget from 250 MAD, mid-range from 500 MAD per night.',
  },
  {
    days: 'Day 3-4',
    title: 'Chefchaouen (The Blue City)',
    icon: Camera,
    location: 'Chefchaouen',
    image: '/images/hero-chefchaouen.webp',
    description:
      'Travel from Rabat to Chefchaouen by bus (approximately 4 hours via CTM). Arrive in the mesmerizing blue-painted medina nestled in the Rif Mountains. Spend the afternoon wandering the photogenic lanes of the old town, each corner revealing a new shade of blue. On Day 4, hike to the Spanish Mosque viewpoint for panoramic views over the town, explore the waterfalls at Ras el-Maa, visit the small kasbah museum in Place Outa el-Hammam, and browse artisan shops for locally made goat-cheese rounds, woven blankets, and leather goods.',
    highlights: ['Blue-painted medina streets', 'Spanish Mosque viewpoint hike', 'Ras el-Maa waterfalls', 'Local goat cheese and woven crafts'],
    transport: 'CTM bus Rabat to Chefchaouen from 100 MAD (4 hours).',
    overnight: 'Chefchaouen riad in the medina. Budget from 200 MAD, mid-range from 450 MAD per night.',
  },
  {
    days: 'Day 5',
    title: 'Travel to Fez',
    icon: Compass,
    location: 'Chefchaouen to Fez',
    image: '/images/hero-fez.webp',
    description:
      'Depart Chefchaouen in the morning for the scenic drive or bus ride to Fez (approximately 4 hours). The route winds through the Rif Mountains, passing small towns and agricultural valleys. Arrive in Fez by early afternoon and check into your riad in the ancient medina. Spend the rest of the day easing into the sensory feast of Fez el-Bali, the world&apos;s largest car-free urban area. Walk to the famous Bab Boujloud (Blue Gate) and enjoy dinner on a rooftop terrace overlooking the medina.',
    highlights: ['Scenic Rif Mountain drive', 'First walk through Fez el-Bali', 'Bab Boujloud (Blue Gate)', 'Rooftop dinner with medina views'],
    transport: 'CTM bus Chefchaouen to Fez from 75 MAD (4 hours). Private transfer from 800 MAD.',
    overnight: 'Fez medina riad. Budget from 200 MAD, mid-range from 600 MAD per night.',
  },
  {
    days: 'Day 6-7',
    title: 'Fez Medina Exploration',
    icon: Landmark,
    location: 'Fez',
    image: '/images/art-fez-tanneries.webp',
    description:
      'Dedicate two full days to exploring Fez, Morocco&apos;s spiritual and intellectual capital. On Day 6, hire a local guide (highly recommended) to navigate the 9,000-lane medina. Visit the Al-Qarawiyyin Mosque and University, founded in 859 AD and considered the world&apos;s oldest continually operating university. See the Chouara Tanneries from a terrace viewpoint, marvel at the Bou Inania Medersa&apos;s intricate zellige tilework, and explore the Nejjarine Museum of Wooden Arts. On Day 7, venture to the Jewish Quarter (Mellah), the Royal Palace gates, the potters&apos; district, and take a cooking class to learn the secrets of Fassi cuisine including pastilla and slow-cooked lamb tangia.',
    highlights: ['Chouara Tanneries viewpoint', 'Al-Qarawiyyin University (oldest in the world)', 'Bou Inania Medersa zellige tilework', 'Fassi cooking class from 350 MAD'],
    transport: 'Walking within the medina. Petit taxis for outer areas from 10 MAD.',
    overnight: 'Fez medina riad. Budget from 200 MAD, mid-range from 600 MAD per night.',
  },
  {
    days: 'Day 8',
    title: 'Middle Atlas to Merzouga',
    icon: Mountain,
    location: 'Fez to Merzouga',
    image: '/images/hero-atlas-mountains.webp',
    description:
      'Begin the spectacular journey south through the Middle Atlas Mountains toward the Sahara. Pass through Ifrane, the "Switzerland of Morocco" with its European-style architecture, and continue through cedar forests where Barbary macaques swing from the trees near Azrou. Cross the dramatic Tizi n&apos;Talghemt pass and descend through the Ziz Valley, a stunning palm-lined gorge carved deep into red rock. The landscape shifts from green mountains to arid desert as you approach Merzouga and the towering dunes of Erg Chebbi. This is a long travel day, best done with a shared or private transfer that includes photo stops.',
    highlights: ['Ifrane "Switzerland of Morocco"', 'Barbary macaques in Azrou cedar forest', 'Ziz Valley gorge and palm oasis', 'First glimpse of Erg Chebbi dunes'],
    transport: 'Shared transfer from 250 MAD. Private transfer from 2,500 MAD. Self-drive approx. 460 km (8-9 hours with stops).',
    overnight: 'Merzouga auberge at the edge of the dunes. Budget from 250 MAD, mid-range from 600 MAD per night.',
  },
  {
    days: 'Day 9',
    title: 'Sahara Desert Experience',
    icon: Tent,
    location: 'Erg Chebbi / Merzouga',
    image: '/images/hero-desert.webp',
    description:
      'The highlight of most Morocco trips. In the morning, explore the Merzouga area: visit a Gnaoua music village, see the seasonal Dayet Srji salt lake where flamingos gather, and learn about nomadic Berber life. In the late afternoon, mount a camel for the iconic trek into the Erg Chebbi dunes. Ride for approximately 90 minutes as the sun sets, painting the golden sand in shades of orange and crimson. Arrive at a desert bivouac camp for a traditional dinner under a canopy of stars more brilliant than you have ever seen. Berber musicians play drums and sing around the campfire. Sleep in a comfortable desert tent and wake before dawn to watch the sunrise from the top of a dune.',
    highlights: ['Camel trek into Erg Chebbi dunes', 'Desert bivouac under the stars', 'Berber drumming and campfire dinner', 'Sunrise from a Sahara dune summit'],
    transport: 'Camel trek and overnight camp from 800 MAD per person (includes dinner, tent, breakfast).',
    overnight: 'Desert bivouac camp. Included in camel trek package. Luxury camps from 1,500 MAD.',
  },
  {
    days: 'Day 10',
    title: 'Todra & Dades Gorges',
    icon: Gem,
    location: 'Merzouga to Dades Valley',
    image: '/images/hero-kasbahs.webp',
    description:
      'After a desert sunrise, return by camel to Merzouga and depart westward along the "Road of a Thousand Kasbahs." Stop at the Todra Gorge, where towering 300-meter canyon walls narrow to just 10 meters apart, creating a dramatic natural corridor popular with rock climbers. Walk along the river at the base of the gorge and take in the sheer scale. Continue to the Dades Valley, passing through the Valley of Roses (famous for its May rose harvest festival) and the "Monkey Fingers" rock formations. The Dades Gorge road winds through a spectacular landscape of kasbahs, almond orchards, and red-rock canyons.',
    highlights: ['Todra Gorge 300-meter canyon walls', 'Valley of Roses (harvest in May)', 'Monkey Fingers rock formations', 'Kasbah-lined Dades Valley road'],
    transport: 'Shared transfer from 200 MAD. Private transfer from 1,800 MAD. Self-drive approx. 300 km.',
    overnight: 'Dades Valley guesthouse or kasbah hotel. Budget from 200 MAD, mid-range from 500 MAD per night.',
  },
  {
    days: 'Day 11',
    title: 'Ouarzazate to Marrakech',
    icon: Compass,
    location: 'Dades Valley to Marrakech',
    image: '/images/hero-marrakech.webp',
    description:
      'Drive westward to Ouarzazate, the "Hollywood of Morocco" where countless films were shot. Visit the UNESCO World Heritage ksar of Ait Benhaddou, a spectacular fortified village of mud-brick buildings that has served as a backdrop for Gladiator, Game of Thrones, and Lawrence of Arabia. Explore the labyrinthine lanes and climb to the top for sweeping views. Continue over the High Atlas via the legendary Tizi n&apos;Tichka pass (2,260 meters), Morocco&apos;s highest paved road. The pass offers breathtaking views of terraced Berber villages, switchback roads, and snow-capped peaks before descending into the Haouz Plain and Marrakech.',
    highlights: ['Ait Benhaddou UNESCO World Heritage Site', 'Atlas Film Studios (from 50 MAD entry)', 'Tizi n&apos;Tichka pass at 2,260 meters', 'Dramatic High Atlas mountain crossing'],
    transport: 'Private transfer from 2,000 MAD. Shared transfer from 200 MAD. Self-drive approx. 350 km (6-7 hours with stops).',
    overnight: 'Marrakech riad in the medina. Budget from 250 MAD, mid-range from 700 MAD per night.',
  },
  {
    days: 'Day 12-13',
    title: 'Marrakech',
    icon: Star,
    location: 'Marrakech',
    image: '/images/hero-marrakech-souks.webp',
    description:
      'Two days to immerse yourself in the Red City. On Day 12, explore the famous Jemaa el-Fnaa square with its snake charmers, musicians, and food stalls. Wander the labyrinthine souks selling spices, leather, metalwork, and textiles. Visit the Bahia Palace, the Saadian Tombs, and the Ben Youssef Medersa. Relax in the serene Jardin Majorelle with its cobalt-blue buildings and the Yves Saint Laurent Museum next door. On Day 13, visit the Koutoubia Mosque (exterior), explore the Jewish Quarter Mellah, experience a traditional hammam spa (from 150 MAD), and take an evening food tour through the street stalls of Jemaa el-Fnaa. For shoppers, the souks offer everything from handwoven carpets to argan oil products.',
    highlights: ['Jemaa el-Fnaa square atmosphere', 'Jardin Majorelle and YSL Museum (from 150 MAD)', 'Bahia Palace and Saadian Tombs', 'Traditional hammam spa experience'],
    transport: 'Walking within the medina. Petit taxis for Gueliz and Majorelle from 15 MAD.',
    overnight: 'Marrakech riad. Budget from 250 MAD, mid-range from 700 MAD per night.',
  },
  {
    days: 'Day 14',
    title: 'Essaouira Day Trip or Departure',
    icon: Globe,
    location: 'Essaouira / Departure',
    image: '/images/hero-essaouira.webp',
    description:
      'For your final day, choose between a day trip to the coastal town of Essaouira or a relaxed departure day in Marrakech. Essaouira, approximately 2.5 hours from Marrakech, is a charming wind-swept port town with a UNESCO-listed medina, vibrant blue fishing boats, excellent seafood, and a laid-back Atlantic vibe that contrasts beautifully with Marrakech&apos;s intensity. Walk the ramparts, browse the art galleries, watch the seagulls circle the fish market, and enjoy a fresh seafood lunch on the harbor. Alternatively, spend your last morning in Marrakech shopping for souvenirs, revisiting favorite spots, or relaxing in your riad before departing from Marrakech Menara Airport.',
    highlights: ['Essaouira UNESCO medina and ramparts', 'Fresh seafood lunch on the harbor (from 60 MAD)', 'Blue fishing boats and art galleries', 'Or relaxed final morning in Marrakech'],
    transport: 'Supratours bus to Essaouira from 80 MAD (2.5 hours). Private transfer from 800 MAD.',
    overnight: 'Departure from Marrakech Menara Airport. Or extend with a night in Essaouira from 300 MAD.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  { category: 'Accommodation (13 nights)', budget: 'From 2,600 MAD', midRange: 'From 7,000 MAD', luxury: 'From 18,000 MAD', icon: Building },
  { category: 'Food & Drink', budget: 'From 1,400 MAD', midRange: 'From 3,500 MAD', luxury: 'From 7,000 MAD', icon: Utensils },
  { category: 'Transport (intercity)', budget: 'From 1,500 MAD', midRange: 'From 4,000 MAD', luxury: 'From 8,000 MAD', icon: Compass },
  { category: 'Activities & Entry Fees', budget: 'From 1,500 MAD', midRange: 'From 4,000 MAD', luxury: 'From 8,000 MAD', icon: Star },
  { category: 'Desert Camp (1 night)', budget: 'From 800 MAD', midRange: 'From 1,500 MAD', luxury: 'From 4,000 MAD', icon: Tent },
  { category: 'Shopping & Misc', budget: 'From 500 MAD', midRange: 'From 2,000 MAD', luxury: 'From 5,000 MAD', icon: Gem },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CUSTOMIZATION OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const customizations = [
  {
    title: 'Add Atlantic Coast',
    icon: Globe,
    description:
      'Extend your trip by 2-3 days to include more coastal time. Spend additional nights in Essaouira for surfing, windsurfing, and cooking classes. Or continue south to the surf town of Taghazout and the beach resorts near Agadir for sun-soaked relaxation after your inland adventures.',
    swap: 'Replace the Casablanca stay with a direct flight to Fez and add coast days at the end.',
  },
  {
    title: 'Add Atlas Trekking',
    icon: Mountain,
    description:
      'Replace the Casablanca/Rabat days with a 2-3 day guided trek from Imlil into the High Atlas. Summit Jebel Toubkal (4,167m), North Africa&apos;s highest peak, or take a gentler route through Berber villages in the Azzaden Valley. Spring and autumn offer the best trekking conditions.',
    swap: 'Fly into Marrakech, trek Days 1-3, then continue the itinerary from Chefchaouen on Day 4.',
  },
  {
    title: 'Focus on Imperial Cities',
    icon: Crown,
    description:
      'History enthusiasts can swap Chefchaouen for Meknes and the Roman ruins of Volubilis, adding a fourth imperial city to the itinerary. Meknes offers grand gates, the Heri es-Souani granaries, and fewer tourists than Fez or Marrakech. Volubilis has some of the best-preserved Roman mosaics in Africa.',
    swap: 'Replace Days 3-4 in Chefchaouen with Meknes (1 day) and Volubilis (half day).',
  },
  {
    title: 'Slow Travel Version',
    icon: Heart,
    description:
      'Prefer depth over breadth. Spend 3-4 nights in both Fez and Marrakech, skip Casablanca entirely, and add an extra night in the desert. This version reduces travel days, allowing for cooking classes, hammam visits, day trips, and simply soaking in the atmosphere of each city at a relaxed pace.',
    swap: 'Fly into Fez and out of Marrakech. Allocate 4 nights Fez, 2 nights desert, 4 nights Marrakech.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  { item: 'Layers for temperature swings (desert days are hot, nights are cold)', icon: Sun },
  { item: 'Comfortable walking shoes for cobblestone medinas and desert sand', icon: Compass },
  { item: 'Modest clothing covering shoulders and knees for cultural sites', icon: ShieldCheck },
  { item: 'Sunscreen, sunglasses, and a wide-brimmed hat for Sahara days', icon: Sun },
  { item: 'A headscarf or buff for desert wind and sand protection', icon: ShieldCheck },
  { item: 'Portable power bank and universal adapter (Morocco uses Type C/E plugs)', icon: Sparkles },
  { item: 'Cash in MAD for small towns and medina shops (ATMs available in cities)', icon: DollarSign },
  { item: 'A small daypack for day trips and excursions', icon: Compass },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Morocco2WeekItineraryPage() {
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
            backgroundImage: 'url(/images/hero-desert.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco 2-Week Itinerary</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Calendar className="w-4 h-4" />
            14-Day Itinerary
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco 2-Week Itinerary:
            <br className="hidden md:block" /> 14 Days from Casablanca to Marrakech
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The ultimate day-by-day guide to spending two weeks in Morocco.
            Imperial cities, blue medinas, Sahara dunes, mountain passes, and Atlantic coast.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why 2 Weeks Is the Perfect Amount of Time for Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a country that rewards those who take their time. With 14 days, you can
                experience the full spectrum of what makes this North African kingdom so extraordinary:
                the labyrinthine medinas of ancient imperial cities, the silence of the Sahara under a
                blanket of stars, the blue-washed lanes of mountain towns, and the salty Atlantic
                breeze of coastal ports. Two weeks strikes the ideal balance between covering Morocco&apos;s
                must-see highlights and having time to truly soak in each destination.
              </p>
              <p>
                This itinerary traces a grand loop from Casablanca through the northern Rif Mountains,
                east to the imperial city of Fez, south across the Middle Atlas into the Sahara Desert,
                west along the Road of a Thousand Kasbahs, over the High Atlas to Marrakech, and
                finishes with an optional coastal escape to Essaouira. It is designed for independent
                travelers, couples, and small groups who want a mix of culture, adventure, and
                relaxation without the constraints of a rigid group tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── At a Glance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Trip at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts for planning your 2-week Morocco adventure.
            Seasonal pricing can change during peak periods and holidays.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {atAGlance.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.label} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] ml-[52px]">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Route Map Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Your 14-Day Route Through Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A grand loop covering Morocco&apos;s northern mountains, eastern desert, southern gorges, and western coast.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {[
                { day: 'Days 1-2', place: 'Casablanca & Rabat', desc: 'Arrival, Hassan II Mosque, capital city exploration' },
                { day: 'Days 3-4', place: 'Chefchaouen', desc: 'Blue medina, Rif Mountain hikes, local crafts' },
                { day: 'Day 5', place: 'Travel to Fez', desc: 'Scenic drive through Rif Mountains' },
                { day: 'Days 6-7', place: 'Fez', desc: 'Medina exploration, tanneries, cooking class' },
                { day: 'Day 8', place: 'Middle Atlas to Merzouga', desc: 'Cedar forests, Ziz Valley, desert arrival' },
                { day: 'Day 9', place: 'Sahara Desert', desc: 'Camel trek, bivouac, stargazing, sunrise' },
                { day: 'Day 10', place: 'Todra & Dades Gorges', desc: 'Canyon walks, Valley of Roses, kasbahs' },
                { day: 'Day 11', place: 'Ouarzazate to Marrakech', desc: 'Ait Benhaddou, Tizi n\'Tichka pass' },
                { day: 'Days 12-13', place: 'Marrakech', desc: 'Souks, palaces, Majorelle Garden, hammam' },
                { day: 'Day 14', place: 'Essaouira or Departure', desc: 'Coastal day trip or final morning shopping' },
              ].map((stop, idx) => (
                <div key={stop.day} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    {idx < 9 && <div className="w-0.5 h-6 bg-[var(--color-accent)]/30 mt-1" />}
                  </div>
                  <div className="pb-2">
                    <p className="text-xs text-[var(--text-muted)] font-medium">{stop.day}</p>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {stop.place}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">{stop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Day-by-Day Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day-by-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A detailed guide for each day of your 14-day Morocco adventure.
            All prices are approximate and seasonal pricing can change.
          </p>
          <div className="space-y-8">
            {itineraryDays.map((day) => {
              const DayIcon = day.icon;
              return (
                <div key={day.days} className="card-moroccan overflow-hidden">
                  <div className="relative h-48 md:h-56">
                    <img
                      src={day.image}
                      alt={`${day.title} - Morocco 2 week itinerary ${day.days}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        {day.days}
                      </div>
                      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                        {day.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                      {day.location}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {day.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                          <Star className="w-3.5 h-3.5 inline-block text-[var(--color-gold)] mr-1" />
                          Highlights
                        </h4>
                        <ul className="space-y-1.5">
                          {day.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1">
                            <Compass className="w-3.5 h-3.5 inline-block text-[var(--color-accent)] mr-1" />
                            Transport
                          </h4>
                          <p className="text-xs text-[var(--text-secondary)]">{day.transport}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1">
                            <Building className="w-3.5 h-3.5 inline-block text-[var(--color-accent)] mr-1" />
                            Overnight
                          </h4>
                          <p className="text-xs text-[var(--text-secondary)]">{day.overnight}</p>
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

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            2-Week Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Estimated costs for 14 days in Morocco across three budget levels.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            All prices are in Moroccan Dirhams (MAD). Seasonal pricing can change, especially during
            peak travel periods like Christmas, Easter, and summer holidays.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--surface-muted)]">
                  <th className="text-left p-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Category
                  </th>
                  <th className="text-left p-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                    Budget
                  </th>
                  <th className="text-left p-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-gold)]">
                    Mid-Range
                  </th>
                  <th className="text-left p-4 text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Luxury
                  </th>
                </tr>
              </thead>
              <tbody>
                {budgetBreakdown.map((row) => {
                  const RowIcon = row.icon;
                  return (
                    <tr key={row.category} className="border-b border-[var(--border)]">
                      <td className="p-4 text-sm text-[var(--text-primary)]">
                        <div className="flex items-center gap-2">
                          <RowIcon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                          {row.category}
                        </div>
                      </td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">{row.budget}</td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">{row.midRange}</td>
                      <td className="p-4 text-sm text-[var(--text-secondary)]">{row.luxury}</td>
                    </tr>
                  );
                })}
                <tr className="bg-[var(--surface-muted)] font-bold">
                  <td className="p-4 text-sm text-[var(--text-primary)]">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      Estimated Total
                    </div>
                  </td>
                  <td className="p-4 text-sm text-[var(--color-accent)]">From 8,300 MAD</td>
                  <td className="p-4 text-sm text-[var(--color-gold)]">From 22,000 MAD</td>
                  <td className="p-4 text-sm text-[var(--text-primary)]">From 50,000 MAD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 card-moroccan p-5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div className="text-sm text-[var(--text-secondary)]">
                <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Money-Saving Tips
                </p>
                <p>
                  Book riads directly rather than through booking platforms to save 10-20%.
                  Eat at local restaurants where locals eat for meals from 30-50 MAD.
                  Use CTM and Supratours buses instead of private transfers.
                  Negotiate politely in souks and start at roughly 40% of the asking price.
                  Carry cash in small denominations as many places do not accept cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customization Options ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Customize Your Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            This itinerary is a flexible framework. Here are four ways to adapt it to your travel style.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customizations.map((opt) => {
              const OptIcon = opt.icon;
              return (
                <div key={opt.title} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                    <OptIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {opt.description}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] italic">
                    <ArrowRight className="w-3 h-3 inline-block mr-1" />
                    {opt.swap}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing Essentials ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Essentials for 2 Weeks in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your itinerary covers desert, mountains, coast, and cities. Pack smart for all climates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingEssentials.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                  <PackIcon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">{item.item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Your 2-Week Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential advice to make your two weeks in Morocco smooth and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: DollarSign, title: 'Currency & Payments', text: 'The Moroccan Dirham (MAD) is the local currency. ATMs are widely available in cities. Carry cash for medinas, small towns, and the desert. Credit cards are accepted at upscale hotels and restaurants. Notify your bank before travel.' },
              { icon: Globe, title: 'Language & Communication', text: 'Arabic and Tamazight are official languages. French is widely spoken. English is common in tourist areas but limited in rural regions. Download offline maps and a translation app. Local SIM cards with data cost from 30 MAD at airports.' },
              { icon: ShieldCheck, title: 'Safety & Health', text: 'Morocco is generally safe for tourists. Drink bottled water outside cities. Pharmacies are well-stocked and widely available. No special vaccinations required for most travelers. Travel insurance covering medical evacuation is strongly recommended.' },
              { icon: Award, title: 'Cultural Etiquette', text: 'Dress modestly, especially in rural areas and at religious sites. Ask before photographing people. Remove shoes when entering homes and some riads. The left hand is considered unclean; use your right hand for eating and greetings. Tipping (from 10-20 MAD) is customary for guides, waiters, and riad staff.' },
              { icon: Calendar, title: 'Ramadan Considerations', text: 'If your trip overlaps with Ramadan, some restaurants close during daytime hours. Tourist areas remain open, but be respectful by not eating or drinking publicly during fasting hours. Evenings come alive with iftar celebrations, offering a unique cultural experience.' },
              { icon: Compass, title: 'Booking & Planning Ahead', text: 'Book riads and desert camps at least 2-4 weeks in advance during peak season (March-May, September-November). Bus tickets can often be bought day-of, but reserve CTM seats online for popular routes. Domestic flights between Casablanca, Fez, and Marrakech are affordable if booked early.' },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Scenes from 14 Days in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-chefchaouen.webp', alt: 'Blue-painted streets of Chefchaouen medina in the Rif Mountains of Morocco', label: 'Chefchaouen Blue Medina' },
              { src: '/images/hero-desert.webp', alt: 'Camel caravan crossing golden Sahara sand dunes at sunset near Merzouga Morocco', label: 'Sahara Desert Camel Trek' },
              { src: '/images/hero-marrakech.webp', alt: 'Bustling Jemaa el-Fnaa square in Marrakech Morocco with food stalls and crowds at dusk', label: 'Marrakech Jemaa el-Fnaa' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does 2 weeks in Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A budget traveler can expect to spend from 8,000-12,000 MAD (approximately 800-1,200 USD) for 14 days,
                covering hostels, local food, public transport, and activities. Mid-range travelers typically spend
                from 15,000-25,000 MAD (1,500-2,500 USD) for comfortable riads, private transport, guided tours,
                and restaurant meals. Luxury travelers should budget from 35,000 MAD and above. Seasonal pricing
                can change, especially during peak periods.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is 2 weeks enough for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Two weeks is an excellent amount of time. It allows you to cover the major highlights including
                imperial cities, the Sahara Desert, mountain landscapes, and coastal towns without rushing.
                You will have time for immersive experiences like desert overnight camps, medina exploration,
                and relaxed evenings in riads. While you could spend months in Morocco, 14 days strikes
                the ideal balance.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best month to visit Morocco for 2 weeks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                March to May and September to November are ideal. Spring brings wildflowers and comfortable
                temperatures. Autumn offers warm days, cooler evenings, and fewer crowds. Avoid July-August
                when inland temperatures exceed 45 degrees Celsius. Winter is pleasant for southern regions
                but cold in the mountains and north. Seasonal pricing can change during Ramadan and holidays.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a guide for 2 weeks in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                You do not need a guide for the entire trip. Morocco is safe and navigable for independent
                travelers. However, hiring local guides is recommended for the Fez medina (from 300 MAD half-day),
                Sahara Desert treks (included in most desert tours from 800 MAD), and Atlas Mountain hikes
                (from 350 MAD per day). Many travelers combine self-guided exploration with guided excursions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How should I get between cities in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                CTM and Supratours buses are comfortable and affordable (Marrakech to Fez from 200 MAD).
                The Al Boraq high-speed train connects Casablanca to Tangier in two hours. ONCF trains
                link Casablanca, Rabat, Meknes, and Fez. For desert and mountain segments, shared or private
                transfers are common. Grand taxis handle shorter routes. Renting a car gives maximum flexibility
                but requires confidence with Moroccan driving conditions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I customize this 2-week Morocco itinerary?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. This itinerary is a flexible framework. Beach lovers can add days in Essaouira
                or Taghazout. Trekking enthusiasts can replace the Casablanca days with an Atlas Mountain
                trek from Imlil. History buffs can swap Chefchaouen for Meknes and Volubilis. For a slower
                pace, focus on fewer cities and spend 3-4 nights in each location.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo travelers spending 2 weeks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is generally safe for solo travelers, including solo female travelers. Stick to
                well-lit areas at night, ignore persistent touts, and use registered guides. The cities
                on this itinerary are all well-touristed with good infrastructure. Riads and hostels are
                great for meeting other travelers. Keep valuables secure, use ATMs inside banks, and
                carry a copy of your passport.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Morocco Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed tips on traveling Morocco on a budget, from cheap eats to affordable riads.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-desert" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about desert camps, camel treks, and stargazing in the Moroccan Sahara.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential tips and practical advice for first-time visitors to Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-time-visit-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Time to Visit
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month breakdown of weather, events, and crowds across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for 2 Unforgettable Weeks in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the blue streets of Chefchaouen to the golden dunes of the Sahara, your 14-day
            Moroccan adventure awaits. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-sahara-desert"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Tent className="w-5 h-5" />
              Explore the Sahara Desert
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
