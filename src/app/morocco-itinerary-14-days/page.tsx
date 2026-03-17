import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Sun,
  Sunset,
  Moon,
  Coins,
  Car,
  Train,
  UtensilsCrossed,
  Camera,
  Star,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Calendar,
  Wallet,
  Mountain,
  Compass,
  Luggage,
  Route,
  Globe,
  Waves,
  Building2,
  Plane,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: '14 Day Morocco Itinerary 2026: Grand Tour from Marrakech to Tangier | CityGuide',
  description:
    'The ultimate 14 day Morocco itinerary. Marrakech, Atlas Mountains, Sahara Desert, Fes, Chefchaouen, Tangier, Rabat, and Casablanca. Day-by-day plans with costs in MAD, transport, and accommodation tips.',
  keywords: [
    '14 day Morocco itinerary',
    '2 week Morocco itinerary',
    'Morocco grand tour',
    'Morocco 14 days',
    'two week Morocco trip',
    'Morocco itinerary 2026',
    'Marrakech to Tangier itinerary',
    'Morocco Chefchaouen itinerary',
    'Morocco complete itinerary',
    'best Morocco 2 week route',
    'Morocco itinerary with Chefchaouen',
    'Morocco north to south',
    'Morocco backpacking 2 weeks',
    'Morocco road trip 14 days',
  ],
  openGraph: {
    title: '14 Day Morocco Itinerary 2026: The Grand Tour',
    description:
      'Two weeks covering Marrakech, the Sahara, Fes, Chefchaouen, Tangier, Rabat, and Casablanca. Complete day-by-day guide with costs in MAD.',
    url: 'https://citytoursmorocco.com/morocco-itinerary-14-days',
    images: [
      {
        url: '/images/hero-chefchaouen-blue.webp',
        width: 1200,
        height: 630,
        alt: 'Blue streets of Chefchaouen medina with potted plants and painted doorways',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '14 Day Morocco Itinerary 2026: The Grand Tour',
    description: 'Two weeks of Morocco magic: desert, mountains, blue cities, and imperial capitals.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-itinerary-14-days' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristTrip',
      name: '14-Day Morocco Grand Tour',
      description: 'A comprehensive two-week Morocco itinerary from Marrakech to Casablanca via the Sahara, Fes, Chefchaouen, Tangier, and Rabat.',
      touristType: ['Cultural', 'Adventure', 'Sightseeing'],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
        { '@type': 'ListItem', position: 2, name: '14-Day Morocco Itinerary', item: 'https://citytoursmorocco.com/morocco-itinerary-14-days' },
      ],
    },
  ],
};

/* =====================================================================
   ITINERARY DATA
   ===================================================================== */

interface DayPlan {
  day: number;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  morning: string;
  afternoon: string;
  evening: string;
  transport: string;
  costBudget: string;
  costMid: string;
  costLux: string;
  tips: string[];
}

const days: DayPlan[] = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    location: 'Marrakech',
    image: '/images/hero-marrakech.webp',
    imageAlt: 'Marrakech skyline with Koutoubia Mosque at sunset',
    morning: 'Arrive at Menara Airport. Transfer to your medina riad (taxi: from 150 MAD, airport bus: 30 MAD). Check in, welcome mint tea.',
    afternoon: 'Gentle orientation walk through the Mouassine quarter. Browse without buying. Visit the Mouassine Fountain and the Photography Museum.',
    evening: 'Jemaa el-Fnaa at sunset. Street food stalls for dinner (grilled meats, fresh orange juice at 4 MAD, snail soup). Rooftop drinks at Grand Balcon du Cafe Glacier for square views.',
    transport: 'Airport taxi: from 150 MAD. Walking in the medina.',
    costBudget: '400 MAD', costMid: '800 MAD', costLux: '2,000 MAD',
    tips: ['Pre-arrange riad transfer to avoid taxi negotiation stress', 'Eat at the edges of Jemaa el-Fnaa where locals eat, not the tourist-facing center stalls'],
  },
  {
    day: 2,
    title: 'Marrakech Palaces & Gardens',
    location: 'Marrakech',
    image: '/images/hero-bahia-palace.webp',
    imageAlt: 'Bahia Palace courtyard with zellige tiles and carved plasterwork',
    morning: 'Bahia Palace (70 MAD) at opening (09:00) to avoid crowds. Then walk to the Saadian Tombs (70 MAD) for Andalusian funerary architecture.',
    afternoon: 'Taxi to Jardin Majorelle (150 MAD) and YSL Museum (100 MAD). Allow 2-3 hours total. Cool down with mint tea in the garden cafe.',
    evening: 'Moroccan cooking class (from 400 MAD, 3-4 hours including market visit). Eat what you cook for dinner. Alternatively: Al Fassia restaurant (mains from 120 MAD).',
    transport: 'Taxi to Majorelle: from 20 MAD. Walking otherwise.',
    costBudget: '500 MAD', costMid: '1,200 MAD', costLux: '3,000 MAD',
    tips: ['Book cooking class through your riad the day before', 'The Ben Youssef Madrasa is worth adding if time allows (50 MAD)'],
  },
  {
    day: 3,
    title: 'Marrakech Souks & Hammam',
    location: 'Marrakech',
    image: '/images/hero-souk-lamps.webp',
    imageAlt: 'Lantern shop in the Marrakech souks with hundreds of colored metal lamps',
    morning: 'Dedicated souk exploration morning. Visit the dyers\' souk, spice souk, leather souk, and lantern market. Now is the time to buy -- armed with two days of price reconnaissance.',
    afternoon: 'Hammam experience. Choose Heritage Spa (from 600 MAD luxury), Le Bain Bleu (from 250 MAD tourist), or a local hammam (from 10 MAD plus tayaba). The scrub and steam are deeply relaxing.',
    evening: 'Dinner at Nomad (modern Moroccan, from 150 MAD per person) or the Terrasse des Epices rooftop. Walk through the lamp-lit medina alleyways back to your riad.',
    transport: 'Walking.',
    costBudget: '300 MAD', costMid: '900 MAD', costLux: '2,500 MAD',
    tips: ['Haggling target: aim for 40-60% of the first asking price', 'Book hammam in advance, especially for Heritage Spa'],
  },
  {
    day: 4,
    title: 'Atlas Mountains & Ait Benhaddou',
    location: 'Atlas Mountains / Ait Benhaddou',
    image: '/images/hero-ait-benhaddou.webp',
    imageAlt: 'UNESCO-listed Ait Benhaddou kasbah with earthen towers against blue sky',
    morning: 'Depart Marrakech at 07:00. Cross the Tizi n\'Tichka pass (2,260m) with stunning Atlas Mountain views. Arrive at Ait Benhaddou by 10:30.',
    afternoon: 'Explore the UNESCO ksar on foot (1.5-2 hours). Cross the river and climb to the top for panoramic views. Continue to Ouarzazate for lunch. Visit Atlas Studios (50 MAD) if interested.',
    evening: 'Drive through the Valley of Roses and Dades Gorge to your guesthouse. Dinner at the guesthouse (set menu: from 80 MAD). The gorge is stunning in golden hour light.',
    transport: '3-day desert tour (shared: from 1,200 MAD total; private: from 2,500 MAD). ~350km today.',
    costBudget: '500 MAD', costMid: '900 MAD', costLux: '2,000 MAD',
    tips: ['The Tizi n\'Tichka pass can be cold even in summer', 'Ait Benhaddou is best in morning light for photography'],
  },
  {
    day: 5,
    title: 'Sahara Desert & Merzouga',
    location: 'Merzouga / Erg Chebbi',
    image: '/images/hero-sahara-sunrise.webp',
    imageAlt: 'Sahara Desert sunrise with golden dunes and a camel caravan silhouette',
    morning: 'Drive from Dades to Merzouga via Todra Gorge (30-minute stop to admire the 300m canyon). Arrive Merzouga by lunch. Rest during the hottest hours.',
    afternoon: 'Mount camels at 16:00-17:00 for the 1.5-hour trek into the Erg Chebbi dunes (up to 150m high). Watch sunset from the top of a dune.',
    evening: 'Dinner at desert camp around a communal table. Berber musicians, campfire, and extraordinary stargazing. Sleep in a tent under the Milky Way.',
    transport: 'Continued desert tour. Camel trek included.',
    costBudget: '400 MAD', costMid: '800 MAD', costLux: '3,000 MAD',
    tips: ['Luxury camps have real beds and en-suite bathrooms', 'Bring a scarf for the camel ride -- sand is relentless', 'Set your alarm for dawn to catch the sunrise from the dunes'],
  },
  {
    day: 6,
    title: 'Desert to Fes via Middle Atlas',
    location: 'Merzouga to Fes',
    image: '/images/hero-todra-gorge.webp',
    imageAlt: 'Towering red walls of Todra Gorge with a narrow river at the base',
    morning: 'Sahara sunrise, then return to Merzouga. Breakfast, shower, depart by 08:30. Drive north through the changing landscape from desert to cedar forest.',
    afternoon: 'Lunch stop in Midelt (from 40 MAD). Visit Azrou Cedar Forest for wild Barbary macaques. Brief stop in Ifrane, the "Switzerland of Morocco" at 1,650m altitude.',
    evening: 'Arrive Fes by 17:00-18:00. Check into your medina riad. Mint tea and rest. Dinner at Cafe Clock (camel burger: 85 MAD) or riad dinner (from 150 MAD).',
    transport: 'Continued desert tour. ~480km, 8-9 hours with stops.',
    costBudget: '400 MAD', costMid: '700 MAD', costLux: '1,800 MAD',
    tips: ['Longest driving day -- bring snacks and entertainment', 'Do not feed the monkeys at Azrou even if they approach you'],
  },
  {
    day: 7,
    title: 'Fes El-Bali Medina',
    location: 'Fes',
    image: '/images/hero-fes-tanneries.webp',
    imageAlt: 'Chouara tanneries in Fes with colorful dye vats',
    morning: 'Enter through Bab Boujloud. Visit Bou Inania Madrasa (30 MAD) and walk toward the Karaouine Mosque (exterior). Explore the metalwork and spice souks.',
    afternoon: 'Chouara Tanneries (view from leather shops, buy mint to hold). Nejjarine Museum of Wood Arts (60 MAD) for a quieter experience. Dar Batha Museum for Moroccan arts.',
    evening: 'Dinner at The Ruined Garden (from 100 MAD, magical garden setting) or Riad Fes restaurant for a splurge. Walk back through the lamp-lit medina alleyways.',
    transport: 'Walking only. Consider hiring a guide: from 300 MAD for half day.',
    costBudget: '350 MAD', costMid: '700 MAD', costLux: '1,500 MAD',
    tips: ['A guide is genuinely useful in Fes -- the medina has 9,000+ alleyways', 'Tannery smell is intense; the leather shops offer mint sprigs to help'],
  },
  {
    day: 8,
    title: 'Fes: Artisans & Ceramics',
    location: 'Fes',
    image: '/images/hero-ceramics.webp',
    imageAlt: 'Moroccan hand-painted ceramics in vibrant blue and white patterns',
    morning: 'Visit a Fes pottery workshop in the Ain Nokbi area. Watch artisans hand-paint the famous blue-and-white Fassi ceramics. Prices are fairer here than in the medina shops.',
    afternoon: 'Explore the mellah (Jewish quarter) and visit the Ibn Danan Synagogue. Walk to the Royal Palace gates (Dar al-Makhzen) for the impressive brass doors. Visit the Borj Nord hilltop for panoramic medina views.',
    evening: 'Dinner at Dar Roumana (one of the best gourmet experiences in Fes, booking essential) or a simpler meal at Cafe Clock. Pack for tomorrow\'s journey north.',
    transport: 'Taxi to pottery workshops: from 20 MAD. Walking otherwise.',
    costBudget: '300 MAD', costMid: '600 MAD', costLux: '1,200 MAD',
    tips: ['Buy ceramics at the workshop -- prices are 30-50% lower than medina shops', 'The Borj Nord viewpoint is best at golden hour'],
  },
  {
    day: 9,
    title: 'Fes to Chefchaouen',
    location: 'Chefchaouen',
    image: '/images/hero-chefchaouen-blue.webp',
    imageAlt: 'Blue-washed streets of Chefchaouen with potted plants and painted doorways',
    morning: 'Depart Fes early (07:00-08:00) for the 4-hour drive through the Rif Mountains to Chefchaouen. The scenic route passes through rolling farmland before climbing into the mountains.',
    afternoon: 'Arrive Chefchaouen by noon. Check into a medina riad (Chefchaouen riads are among the most affordable in Morocco: from 250 MAD). Lunch at Aladdin (terrace views, from 60 MAD). Explore the blue medina at leisure.',
    evening: 'Golden hour photography in the blue streets. Dinner at Casa Hassan (from 80 MAD) or Bab Ssour terrace. Watch the sunset from the Spanish Mosque hilltop (20-minute walk, free, spectacular views of the blue city).',
    transport: 'CTM bus Fes-Chefchaouen: 75 MAD, 4 hours. Private taxi: from 500 MAD. Grand taxi (shared): from 65 MAD per person.',
    costBudget: '300 MAD', costMid: '600 MAD', costLux: '1,200 MAD',
    tips: ['The CTM bus is comfortable and reliable for this route', 'The Spanish Mosque sunset is unmissable -- arrive 30 minutes before sunset'],
  },
  {
    day: 10,
    title: 'Chefchaouen & Akchour',
    location: 'Chefchaouen / Akchour',
    image: '/images/hero-chefchaouen-stairs.webp',
    imageAlt: 'Blue-painted stairway in Chefchaouen medina with cascading plants',
    morning: 'Early morning is the best time to photograph the blue streets without crowds. Visit Plaza Uta el-Hammam, the Kasbah museum (60 MAD), and browse the small craft shops for woven blankets and leather goods.',
    afternoon: 'Day trip to Akchour Waterfalls (30 minutes by taxi, 200 MAD round trip). Hike to the small waterfall (45 minutes) or the larger Cascade d\'Akchour (2.5 hours). The natural bridge en route is spectacular.',
    evening: 'Return to Chefchaouen for a final evening stroll. Dinner at Lala Mesouda (terrace dining, from 70 MAD). Enjoy the peaceful mountain-town atmosphere.',
    transport: 'Taxi to Akchour: 200 MAD round trip with waiting time. Walking in the medina.',
    costBudget: '250 MAD', costMid: '500 MAD', costLux: '1,000 MAD',
    tips: ['Wear proper hiking shoes for Akchour', 'The small waterfall is enough if you have limited time or fitness', 'Buy a woven Rif Mountains blanket as a souvenir -- quality is excellent and prices are fair'],
  },
  {
    day: 11,
    title: 'Chefchaouen to Tangier',
    location: 'Tangier',
    image: '/images/hero-tangier-bay.webp',
    imageAlt: 'Panoramic view of Tangier Bay with the port and white medina buildings',
    morning: 'Depart Chefchaouen for Tangier (3-3.5 hour drive through the Rif Mountains). Arrive by noon. Check into your hotel or riad in the medina or Ville Nouvelle.',
    afternoon: 'Explore the Tangier Kasbah and the Kasbah Museum (20 MAD) with views over the Strait of Gibraltar. Walk through the Petit Socco and Grand Socco. Visit the Caves of Hercules (10 MAD) if time allows (15 minutes by taxi).',
    evening: 'Dinner at El Morocco Club (upscale Moroccan-international, from 150 MAD) or the more casual Cafe Hafa for mint tea with ocean views (the favorite haunt of Paul Bowles, the Rolling Stones, and William Burroughs).',
    transport: 'CTM bus Chefchaouen-Tangier: from 60 MAD, 3 hours. Grand taxi: from 60 MAD per person.',
    costBudget: '350 MAD', costMid: '700 MAD', costLux: '1,500 MAD',
    tips: ['Tangier has a very different feel from southern Morocco -- more cosmopolitan and European-influenced', 'Cafe Hafa is about the views and atmosphere, not the food quality'],
  },
  {
    day: 12,
    title: 'Tangier to Rabat',
    location: 'Rabat',
    image: '/images/hero-rabat.webp',
    imageAlt: 'Kasbah of the Udayas in Rabat with blue and white streets overlooking the ocean',
    morning: 'Explore Tangier\'s art scene: visit the Tangier Contemporary Art Museum and the Cinematheque for Morocco\'s film heritage. Browse the Rue de la Liberte for European-style cafes and bookshops.',
    afternoon: 'Take the Al Boraq high-speed train from Tangier to Rabat (from 80 MAD, 1.5 hours -- Morocco\'s pride and joy). Arrive in the capital. Check into your riad or hotel in the medina.',
    evening: 'Walk through the Kasbah of the Udayas, a stunning blue-and-white quarter overlooking the Atlantic. Dinner at Dinarjat (traditional Moroccan fine dining in a palatial setting, from 200 MAD) or the more casual Le Dhow floating restaurant on the Bou Regreg river.',
    transport: 'Al Boraq train Tangier-Rabat: from 80 MAD, 1.5 hours. Taxi from Rabat station to medina: from 20 MAD.',
    costBudget: '350 MAD', costMid: '700 MAD', costLux: '1,500 MAD',
    tips: ['Book Al Boraq tickets online at oncf.ma for the best price', 'The Udayas Kasbah is best photographed in afternoon light'],
  },
  {
    day: 13,
    title: 'Rabat Exploration',
    location: 'Rabat',
    image: '/images/hero-rabat-kasbah.webp',
    imageAlt: 'Rabat Kasbah with historic stone walls and ocean views',
    morning: 'Visit the Hassan Tower and the Mausoleum of Mohammed V (free, guards in traditional costume). Then explore the Chellah necropolis (70 MAD), a hauntingly beautiful Roman-Islamic ruin with nesting storks.',
    afternoon: 'Visit the Mohammed VI Museum of Modern and Contemporary Art (40 MAD), Morocco\'s premier art museum. Browse the Rabat medina, which is calmer and more organized than Marrakech or Fes. Shop for leather goods and carpets at fair fixed prices.',
    evening: 'Walk along the Bou Regreg river promenade. Dinner in Agdal or Hassan neighborhoods for excellent Moroccan cuisine without tourist markup. Try Ty Potes for French-Moroccan fusion or Dar Zaki for traditional dishes.',
    transport: 'Tram within Rabat: 6 MAD per ride. Walking.',
    costBudget: '250 MAD', costMid: '600 MAD', costLux: '1,200 MAD',
    tips: ['Rabat is Morocco\'s cleanest and most orderly city -- a refreshing change after the intensity of Marrakech and Fes', 'The Chellah storks nest from February to July'],
  },
  {
    day: 14,
    title: 'Casablanca & Departure',
    location: 'Casablanca',
    image: '/images/hero-casablanca.webp',
    imageAlt: 'Hassan II Mosque in Casablanca with its towering minaret and ocean setting',
    morning: 'Train from Rabat to Casablanca (from 40 MAD, 50 minutes, frequent service). Visit the Hassan II Mosque (130 MAD guided tour), Morocco\'s most spectacular modern building with its 210m minaret and glass floor over the Atlantic.',
    afternoon: 'Walk through the Art Deco downtown along Boulevard Mohammed V. Lunch at Rick\'s Cafe (Casablanca film-themed, from 150 MAD) or La Sqala (in a fortified garden, from 80 MAD). Visit the Morocco Mall or the Corniche if time permits.',
    evening: 'Transfer to Mohammed V International Airport (CMN) for your departure flight. Airport is 30km south of the city (taxi: from 200 MAD, or train from Casa Voyageurs to Airport: 43 MAD).',
    transport: 'Train Rabat-Casa: from 40 MAD. Taxi to airport: from 200 MAD. Train to airport: 43 MAD.',
    costBudget: '400 MAD', costMid: '800 MAD', costLux: '2,000 MAD',
    tips: ['The Hassan II Mosque tour is worth every dirham -- do not skip it', 'Book an afternoon or evening flight to maximize your Casablanca time', 'The airport train from Casa Voyageurs is the cheapest and most reliable option'],
  },
];

/* =====================================================================
   BUDGET SUMMARY
   ===================================================================== */

const budgetSummary = [
  { category: 'Accommodation (14 nights)', budget: '4,500 MAD', mid: '11,000 MAD', luxury: '35,000 MAD' },
  { category: 'Food & Drinks', budget: '2,800 MAD', mid: '7,000 MAD', luxury: '14,000 MAD' },
  { category: 'Transport', budget: '3,000 MAD', mid: '5,500 MAD', luxury: '10,000 MAD' },
  { category: 'Activities & Entry', budget: '1,200 MAD', mid: '2,800 MAD', luxury: '6,000 MAD' },
  { category: 'Shopping', budget: '1,000 MAD', mid: '3,000 MAD', luxury: '8,000 MAD' },
  { category: 'Tips & Miscellaneous', budget: '500 MAD', mid: '1,700 MAD', luxury: '3,000 MAD' },
];

const budgetTotals = { budget: '~13,000 MAD', mid: '~31,000 MAD', luxury: '~76,000 MAD' };

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Calendar className="w-5 h-5" />, label: 'Duration', value: '14 Days', detail: '13 nights' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Cities', value: '8 Cities', detail: 'Complete circuit' },
  { icon: <Route className="w-5 h-5" />, label: 'Distance', value: '~2,200 km', detail: 'Full route' },
  { icon: <Wallet className="w-5 h-5" />, label: 'Budget', value: '13,000 MAD', detail: 'Minimum total' },
  { icon: <Train className="w-5 h-5" />, label: 'Transport', value: 'Mixed', detail: 'Bus, train, tour' },
  { icon: <Star className="w-5 h-5" />, label: 'Rating', value: 'Epic', detail: 'The complete Morocco' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function FourteenDayItineraryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Breadcrumb ---- */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">14-Day Itinerary</li>
        </ol>
      </nav>

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-chefchaouen-blue.webp"
            alt="Blue-washed streets of Chefchaouen in the Rif Mountains of Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Trip Planning
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              14-Day Morocco Grand Tour
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Two weeks covering the best of Morocco: imperial cities, Sahara Desert, blue streets of Chefchaouen, cosmopolitan Tangier, and the Atlantic coast. Day-by-day with costs in MAD.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ---- Quick Stats ---- */}
      <section className="container-morocco py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border-primary p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#A0522D] mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide">{stat.label}</p>
              <p className="font-[family-name:var(--font-heading)] font-bold text-lg text-text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Route Overview ---- */}
      <section className="container-morocco pb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-6">
            Why 14 Days?
          </h2>
          <div className="prose prose-lg text-text-secondary space-y-4">
            <p>
              Seven days in Morocco gives you Marrakech, the desert, and Fes. But two weeks unlocks the entire country:
              the blue city of Chefchaouen perched in the Rif Mountains, cosmopolitan Tangier on the Strait of Gibraltar,
              the quiet elegance of Rabat, and the modern energy of Casablanca.
            </p>
            <p>
              This itinerary is designed for a circular trip: fly into Marrakech, travel counter-clockwise through the country,
              and fly out of Casablanca. The route uses a combination of organized desert tours (days 4-6), intercity buses,
              Morocco\'s excellent high-speed trains, and city walking.
            </p>
            <p>
              For a shorter trip, see our{' '}
              <Link href="/morocco-itinerary-7-days" className="text-[#A0522D] underline hover:no-underline">7-day itinerary</Link>{' '}
              that covers Marrakech, the desert, and Fes.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Route Images ---- */}
      <section className="container-morocco pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: '/images/hero-marrakech.webp', label: 'Marrakech' },
            { src: '/images/hero-sahara-sunrise.webp', label: 'Sahara' },
            { src: '/images/hero-chefchaouen-streets.webp', label: 'Chefchaouen' },
            { src: '/images/hero-tangier-bay.webp', label: 'Tangier' },
            { src: '/images/hero-rabat.webp', label: 'Rabat' },
            { src: '/images/hero-casablanca.webp', label: 'Casablanca' },
            { src: '/images/hero-fes-tanneries.webp', label: 'Fes' },
            { src: '/images/hero-atlas.webp', label: 'Atlas' },
          ].map((img) => (
            <div key={img.label} className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src={img.src} alt={`${img.label}, Morocco`} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <p className="text-white font-[family-name:var(--font-heading)] font-bold text-xs">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Day-by-Day ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-10 text-center">
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-8">
            {days.map((day) => (
              <article key={day.day} className="bg-white rounded-xl border border-border-primary overflow-hidden" id={`day-${day.day}`}>
                <div className="relative h-40 md:h-52">
                  <img src={day.image} alt={day.imageAlt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-[#A0522D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Day {day.day}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-white mt-2">
                      {day.title}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {day.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                    <div className="bg-amber-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Sun className="w-3.5 h-3.5 text-amber-600" />
                        <span className="font-[family-name:var(--font-heading)] font-bold text-amber-800 text-xs">Morning</span>
                      </div>
                      <p className="text-xs text-amber-900/80 leading-relaxed">{day.morning}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Sunset className="w-3.5 h-3.5 text-orange-600" />
                        <span className="font-[family-name:var(--font-heading)] font-bold text-orange-800 text-xs">Afternoon</span>
                      </div>
                      <p className="text-xs text-orange-900/80 leading-relaxed">{day.afternoon}</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Moon className="w-3.5 h-3.5 text-indigo-600" />
                        <span className="font-[family-name:var(--font-heading)] font-bold text-indigo-800 text-xs">Evening</span>
                      </div>
                      <p className="text-xs text-indigo-900/80 leading-relaxed">{day.evening}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5 text-[#A0522D]" /> {day.transport}</span>
                  </div>

                  <div className="bg-[#FAF8F5] rounded-lg p-3 mb-3">
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span><span className="text-emerald-700 font-medium">Budget:</span> {day.costBudget}</span>
                      <span><span className="text-blue-700 font-medium">Mid:</span> {day.costMid}</span>
                      <span><span className="text-amber-700 font-medium">Luxury:</span> {day.costLux}</span>
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {day.tips.map((tip) => (
                      <li key={tip} className="text-xs text-text-secondary flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" /> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Budget Table ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          14-Day Budget Breakdown
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Per-person costs in MAD. Budget assumes shared transport and budget riads. Luxury assumes private vehicles, top-tier accommodation, and fine dining.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-xl border border-border-primary overflow-hidden">
            <thead className="bg-[#FAF8F5]">
              <tr>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-text-primary text-sm">Category</th>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-emerald-700 text-sm">Budget</th>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-blue-700 text-sm">Mid-Range</th>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-amber-700 text-sm">Luxury</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              {budgetSummary.map((row) => (
                <tr key={row.category}>
                  <td className="px-4 py-3 text-sm font-medium text-text-primary">{row.category}</td>
                  <td className="px-4 py-3 text-sm text-emerald-700">{row.budget}</td>
                  <td className="px-4 py-3 text-sm text-blue-700">{row.mid}</td>
                  <td className="px-4 py-3 text-sm text-amber-700">{row.luxury}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#FAF8F5] font-bold">
              <tr>
                <td className="px-4 py-3 text-sm text-text-primary">Total (14 Days)</td>
                <td className="px-4 py-3 text-sm text-emerald-700">{budgetTotals.budget}</td>
                <td className="px-4 py-3 text-sm text-blue-700">{budgetTotals.mid}</td>
                <td className="px-4 py-3 text-sm text-amber-700">{budgetTotals.luxury}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* ---- Transport Summary ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-8 text-center">
            Transport Between Cities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { route: 'Marrakech to Ait Benhaddou', method: 'Desert tour vehicle', cost: 'Part of 3-day tour', time: '4-5 hours' },
              { route: 'Desert to Fes', method: 'Desert tour vehicle', cost: 'Part of 3-day tour', time: '8-9 hours' },
              { route: 'Fes to Chefchaouen', method: 'CTM bus or grand taxi', cost: 'from 65 MAD', time: '4 hours' },
              { route: 'Chefchaouen to Tangier', method: 'CTM bus or grand taxi', cost: 'from 60 MAD', time: '3 hours' },
              { route: 'Tangier to Rabat', method: 'Al Boraq high-speed train', cost: 'from 80 MAD', time: '1.5 hours' },
              { route: 'Rabat to Casablanca', method: 'ONCF train', cost: 'from 40 MAD', time: '50 minutes' },
            ].map((t) => (
              <div key={t.route} className="bg-white rounded-xl border border-border-primary p-4">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary text-sm mb-2">{t.route}</h3>
                <div className="space-y-1 text-xs text-text-muted">
                  <p><span className="font-medium text-text-primary">Method:</span> {t.method}</p>
                  <p><span className="font-medium text-text-primary">Cost:</span> {t.cost}</p>
                  <p><span className="font-medium text-text-primary">Duration:</span> {t.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Related ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-8 text-center">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: '7-Day Morocco Itinerary', href: '/morocco-itinerary-7-days', desc: 'Shorter trip? Focus on Marrakech, desert, and Fes' },
            { title: 'Best Riads in Morocco', href: '/moroccan-riads', desc: 'Where to stay at every stop on this route' },
            { title: 'Morocco Train Guide', href: '/train-travel', desc: 'Detailed guide to Al Boraq and ONCF trains' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-white rounded-xl border border-border-primary p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-2 group-hover:text-[#A0522D] transition-colors flex items-center gap-2">
                {link.title} <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-text-secondary text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
