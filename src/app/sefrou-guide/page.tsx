import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  UtensilsCrossed,
  ShoppingBag,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Mountain,
  TreesIcon,
  Droplets,
  Users,
  Building,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Sefrou Guide 2026 | Cherry Festival, Mellah & Day Trip from Fes',
  description:
    'Complete guide to Sefrou, Morocco — the Cherry Capital and Little Jerusalem. Annual Cherry Festival, historic Jewish mellah, Bou Iblane waterfall, Kef al-Moumen caves, Thursday market, and easy day trip from Fes. Prices in MAD.',
  keywords: [
    'sefrou morocco',
    'sefrou cherry festival',
    'sefrou day trip fes',
    'sefrou mellah',
    'things to do sefrou',
    'sefrou guide',
    'sefrou jewish quarter',
    'sefrou waterfall',
    'sefrou market',
    'sefrou medina',
    'cherry festival morocco',
    'little jerusalem morocco',
    'sefrou kef al moumen',
    'sefrou olive groves',
    'sefrou travel guide',
    'sefrou 2026',
  ],
  openGraph: {
    title: 'Sefrou Guide 2026 | Cherry Festival, Mellah & Day Trip from Fes',
    description:
      'Discover Sefrou, Morocco — Cherry Capital and Little Jerusalem. Cherry Festival, historic mellah, waterfalls, caves, Thursday market, and olive groves. Complete guide with prices in MAD.',
    url: `${BASE_URL}/sefrou-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Sefrou, Morocco with its historic medina nestled in the foothills of the Middle Atlas Mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sefrou Guide 2026 | Cherry Capital of Morocco',
    description:
      'Cherry Festival, Jewish mellah, Bou Iblane waterfall, Kef al-Moumen caves, Thursday market, and day trip from Fes. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-fes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/sefrou-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/sefrou-guide`,
  name: 'Sefrou Guide 2026 | Cherry Festival, Mellah & Day Trip from Fes',
  description:
    'Complete guide to Sefrou, Morocco. Cherry Festival, historic Jewish mellah, Bou Iblane waterfall, caves, Thursday market, olive groves, and medieval medina.',
  url: `${BASE_URL}/sefrou-guide`,
  image: `${BASE_URL}/images/hero-fes.webp`,
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
  mainEntityOfPage: `${BASE_URL}/sefrou-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Sefrou',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Sefrou Guide', item: `${BASE_URL}/sefrou-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Sefrou known for?', acceptedAnswer: { '@type': 'Answer', text: 'Sefrou is known as the Cherry Capital of Morocco and historically as Little Jerusalem due to its large Jewish community. The town is famous for its annual Cherry Festival in June, its well-preserved Jewish mellah with Star of David carvings, the Bou Iblane waterfall, Kef al-Moumen caves, a lively Thursday souk, extensive olive groves, and its medieval medina bisected by Oued Aggai river.' } },
    { '@type': 'Question', name: 'How do I get from Fes to Sefrou?', acceptedAnswer: { '@type': 'Answer', text: 'Sefrou is just 28 km south of Fes. Grand taxis depart regularly from Place Batha or the southern taxi stand in Fes and cost from 15-20 MAD per person for the 30-40 minute journey. You can also take bus number 28 from Fes for about 10 MAD. A private taxi costs from 150-200 MAD each way. The road is well-paved and scenic.' } },
    { '@type': 'Question', name: 'When is the Sefrou Cherry Festival?', acceptedAnswer: { '@type': 'Answer', text: 'The Sefrou Cherry Festival (Fete des Cerises) takes place in mid-June each year, typically lasting 3 days. It features cherry queen pageants, traditional music, Berber folk dances, cherry tastings, parades through the medina, and a bustling market. The festival dates back to 1920, making it one of Morocco oldest festivals. Check locally for exact dates as they shift slightly each year.' } },
    { '@type': 'Question', name: 'Is Sefrou worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Sefrou offers a glimpse of authentic Morocco without the tourist crowds of Fes or Marrakech. The medieval medina, historic mellah, stunning waterfall, and weekly market provide a rich half-day or full-day experience. It is one of the best day trips from Fes and particularly rewarding during the Cherry Festival in June.' } },
    { '@type': 'Question', name: 'Can I visit Sefrou as a day trip from Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Sefrou is one of the easiest and most rewarding day trips from Fes. At just 28 km (30-40 minutes), you can comfortably explore the medina, mellah, waterfall, and market in a half day or combine with Bhalil village nearby for a full day. Thursday is the best day to visit for the weekly souk.' } },
    { '@type': 'Question', name: 'What happened to the Jewish community in Sefrou?', acceptedAnswer: { '@type': 'Answer', text: 'Sefrou once had one of Morocco largest Jewish communities, dating back centuries and earning it the nickname Little Jerusalem. At its peak, Jews made up nearly half the population. Most emigrated to Israel and France after 1948 and especially after 1967. The mellah (Jewish quarter) remains well-preserved with synagogue ruins, Hebrew inscriptions, and distinctive Star of David carvings on doorways.' } },
  ],
};

/* ===============================================================
   DATA: HISTORICAL & CULTURAL ATTRACTIONS
   =============================================================== */

const historicalAttractions = [
  {
    name: 'The Mellah (Jewish Quarter)',
    icon: Landmark,
    category: 'Historical Heritage',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'Sefrou mellah is one of the most evocative Jewish quarters remaining in Morocco. For centuries, Sefrou was home to one of the country largest Jewish communities, earning it the nickname "Little Jerusalem." The narrow alleys of the mellah preserve Star of David carvings above doorways, Hebrew inscriptions on crumbling walls, the ruins of several synagogues, and distinctive architectural features that set it apart from the Muslim medina. Balconied houses with interior courtyards recall a vanished world where Jewish and Muslim communities lived side by side, sharing festivals and commerce.',
    insiderTip:
      'Look carefully at doorways and lintels for the carved Star of David symbols — many are faded but still visible. The old synagogue on the main mellah street is partially accessible. Ask at the nearby shops for someone who knows the history — older residents remember the Jewish community and share stories generously. A local guide (from 100 MAD) can reveal details you would never find alone.',
  },
  {
    name: 'Sefrou Medina & Oued Aggai',
    icon: Globe,
    category: 'Cultural Heritage',
    price: 'Free',
    duration: '1.5-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The medieval medina of Sefrou is uniquely bisected by the Oued Aggai river, which tumbles through the center of town in a series of small cascades. Unlike the vast medinas of Fes and Marrakech, Sefrou medina is compact, manageable, and almost entirely free of tourist hustle. Stone bridges cross the river at several points, connecting the two halves of the old town. The ramparts and original gates — including Bab Merba and Bab Mkam — remain intact. Within, artisans work in dim workshops producing leather goods, woven baskets, and traditional clothing.',
    insiderTip:
      'Enter through Bab Merba for the most atmospheric approach. The riverside walk through the medina center is the highlight — the sound of rushing water between ancient walls is magical. The medina is small enough to explore without a guide. Look for the traditional tanneries near the river where hides are still processed using centuries-old methods. Early morning offers the best light for photography along the waterway.',
  },
  {
    name: 'Traditional Tanneries',
    icon: Sparkles,
    category: 'Living Heritage',
    price: 'Free (tip from 20 MAD appreciated)',
    duration: '30-45 minutes',
    bestTime: 'Morning (workers most active)',
    description:
      'While the Fes tanneries draw millions of visitors, Sefrou has its own small-scale traditional tanneries that operate without the crowds, entrance fees, or aggressive touts. Located near the river in the medina, these family-run workshops still process goat and sheep hides using time-honored methods — soaking in lime pits, scraping by hand, and dyeing with natural pigments. The scale is intimate, the process unchanged for centuries, and the welcome genuine.',
    insiderTip:
      'These are working tanneries, not tourist attractions, so approach with respect. The tanners are generally happy to show you around if you ask politely and offer a small tip (from 20-50 MAD). The smell is strong — locals suggest holding fresh mint near your nose. Morning is best when the tanners are actively working the hides. Bring a camera but ask permission first.',
  },
  {
    name: 'Lalla Rekia Shrine & Gardens',
    icon: Heart,
    category: 'Spiritual Heritage',
    price: 'Free (exterior only for non-Muslims)',
    duration: '20-30 minutes',
    bestTime: 'Any time',
    description:
      'This important local shrine, dedicated to a beloved female saint, sits amid pleasant gardens at the edge of the medina. While the interior is accessible only to Muslims, the surrounding gardens and courtyard provide a peaceful retreat with views over the valley. The annual moussem (pilgrimage festival) dedicated to Lalla Rekia draws worshippers from across the region and features traditional music, communal meals, and Sufi chanting.',
    insiderTip:
      'The gardens around the shrine are open to all visitors and offer excellent views and shade. If you visit during the moussem (typically in spring, dates vary), you will witness one of Morocco most authentic religious festivals. The nearby cemetery on the hillside is atmospheric and historically significant, with both Muslim and Jewish burial grounds reflecting the town interfaith heritage.',
  },
];

/* ===============================================================
   DATA: NATURE & OUTDOOR ATTRACTIONS
   =============================================================== */

const natureAttractions = [
  {
    name: 'Bou Iblane Waterfall (Cascades de Sefrou)',
    icon: Droplets,
    category: 'Natural Wonder',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Spring (March-May) for peak flow',
    description:
      'Just 2 km from the medina, the Bou Iblane waterfall is Sefrou most popular natural attraction. Fed by mountain springs from the Middle Atlas, the cascade tumbles over limestone rocks into a series of natural pools surrounded by lush greenery. In spring, when snowmelt swells the flow, the waterfall is at its most dramatic. The surrounding area has been developed into a pleasant park with walkways, benches, and picnic areas that fill with local families on weekends.',
    insiderTip:
      'Visit in spring (March-May) when the waterfall is at peak flow from Atlas snowmelt. Summer reduces the cascade to a trickle. The walk from the medina takes about 20 minutes along a pleasant road — no taxi needed. Pack a picnic and enjoy the riverside park. Swimming in the pools is possible but the water is cold. Weekdays are quieter than weekends when locals flock here.',
  },
  {
    name: 'Kef al-Moumen Caves',
    icon: Mountain,
    category: 'Natural Formation & Legend',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'These remarkable natural caves in the hills above Sefrou have been associated with local legend for centuries. According to tradition, seven holy men (the Sleepers) took refuge here, echoing the Islamic and Christian story of the Seven Sleepers. The cave system features several large chambers with natural light filtering through openings in the rock. Archaeological evidence suggests human habitation dating back thousands of years. The walk to the caves passes through olive groves with panoramic views of Sefrou and the Middle Atlas foothills.',
    insiderTip:
      'The caves are a 30-minute walk uphill from the edge of town — wear sturdy shoes. Bring a flashlight for the deeper chambers. There is no entrance fee or official infrastructure, so inform someone of your plans. The panoramic view of Sefrou from the cave entrance alone is worth the hike. Combine with a visit to the nearby olive groves. A local guide (from 100 MAD) can share the legends and ensure you find the right path.',
  },
  {
    name: 'Olive Groves & Orchards',
    icon: TreesIcon,
    category: 'Agricultural Heritage',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Spring or autumn',
    description:
      'Sefrou sits in a fertile valley renowned for its olive groves and cherry orchards. The surrounding countryside is carpeted with ancient olive trees, some centuries old, whose gnarled trunks and silver-green canopies create a landscape of extraordinary beauty. In spring, the cherry orchards burst into delicate white and pink blossoms, transforming the hillsides. The olive harvest in autumn (October-November) is a communal affair where families gather to hand-pick fruit destined for some of Morocco finest olive oil.',
    insiderTip:
      'Walk south from the medina along the Oued Aggai to enter the olive groves — a peaceful rural landscape minutes from town. In cherry season (May-June), roadside vendors sell fresh cherries for from 10-20 MAD per kilogram. During the olive harvest, locals are often happy to let visitors observe or even participate. The olive oil pressed in Sefrou is considered among Morocco best — buy directly from producers for from 60-80 MAD per liter.',
  },
  {
    name: 'Bhalil Village Day Extension',
    icon: Building,
    category: 'Troglodyte Heritage',
    price: 'Free (guided tour from 50 MAD)',
    duration: '1.5-2 hours',
    bestTime: 'Morning',
    description:
      'Just 5 km from Sefrou, the colorful hillside village of Bhalil is famous for its troglodyte cave houses — dwellings carved into the rock face that have been inhabited for centuries and remain lived-in homes today. The village cascades down a steep hill in a riot of pastel-painted facades. Some families welcome visitors into their cave homes to see how the natural rock forms the back walls and ceilings of otherwise conventional houses. Bhalil also has its own small medina, a zaouia (religious school), and a tradition of djellaba weaving.',
    insiderTip:
      'Combine Bhalil with Sefrou for a full day trip from Fes. A grand taxi from Sefrou to Bhalil costs from 10 MAD per person. Ask at the main square for a local guide — several families offer house tours for from 50 MAD that include tea and an explanation of cave dwelling life. The views from the top of the village over the valley are spectacular. Morning light is best for photography of the colorful facades.',
  },
];

/* ===============================================================
   DATA: MARKETS & FESTIVALS
   =============================================================== */

const marketsAndFestivals = [
  {
    name: 'Cherry Festival (Fete des Cerises)',
    icon: Calendar,
    category: 'Annual Festival',
    price: 'Free (food/activities from 10 MAD)',
    duration: 'Full day (3-day event)',
    bestTime: 'Mid-June (check dates locally)',
    description:
      'The Sefrou Cherry Festival is one of Morocco oldest and most beloved festivals, dating back to 1920 when it was established during the French protectorate era. Held each June when the cherry harvest peaks, this three-day celebration transforms the town into a joyous carnival. The centerpiece is the election of the Cherry Queen — a beauty pageant that draws contestants from across the region. Parades wind through the medina streets with traditional music, Berber folk dances (ahidous), fantasia horse charges, and cherry-decorated floats. Street vendors sell fresh cherries, cherry preserves, cherry juice, and cherry-flavored sweets.',
    insiderTip:
      'The festival typically falls in the second or third week of June — dates shift annually based on the harvest. Book accommodation in Fes well in advance as the festival draws large crowds. The Saturday parade is the highlight. Arrive early to secure a viewing spot along the main medina streets. Try the fresh cherry juice sold by vendors for from 10-15 MAD per glass. The evening concerts in the main square feature both traditional Berber and contemporary Moroccan music.',
  },
  {
    name: 'Thursday Souk (Weekly Market)',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free entry',
    duration: '1.5-2 hours',
    bestTime: 'Thursday morning (7 AM - 1 PM)',
    description:
      'Every Thursday, Sefrou hosts one of the region most vibrant weekly souks. Berber farmers and traders from the surrounding Middle Atlas villages descend on the town, setting up stalls that spill across the market grounds and into adjacent streets. The market is a sensory feast: pyramids of seasonal produce, fragrant spice mounds, handwoven textiles, live animals, household goods, medicinal herbs, and mounds of fresh olives. This is a genuine local market — prices are fair, haggling is expected but gentle, and tourists are a rare sight.',
    insiderTip:
      'Arrive early (before 9 AM) for the best selection and the most authentic atmosphere. The produce section is exceptional — cherries in season, olives, figs, walnuts, and herbs gathered from the mountains. The livestock area at the market edge is fascinating but can be confronting. Bring cash in small denominations. This is the best place to buy local olive oil (from 50 MAD per liter), mountain honey (from 80 MAD per jar), and handwoven Berber baskets (from 30 MAD).',
  },
  {
    name: 'Artisan Workshops & Cooperatives',
    icon: Sparkles,
    category: 'Craftsmanship',
    price: 'Free to visit',
    duration: '30-60 minutes',
    bestTime: 'Morning (workshops active)',
    description:
      'Sefrou medina retains a handful of traditional artisan workshops specializing in crafts that have largely disappeared from larger cities. Basket weavers produce intricate designs from locally harvested reeds and palm fronds. Leather workers craft babouche slippers and bags using hides from the local tanneries. Woodworkers turn olive and cedar wood into kitchen utensils and decorative objects. These are not tourist-oriented showrooms but genuine working workshops where craftspeople welcome curious visitors.',
    insiderTip:
      'The basket weavers near Bab Merba gate produce some of the finest traditional baskets in the Fes region — prices start from 30 MAD for small pieces and reach from 150 MAD for large decorative baskets. Buying directly from the artisan ensures fair pricing and supports the local economy. Ask to watch the weaving process — most craftspeople are happy to demonstrate.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Grand Taxi from Fes', icon: MapPin, description: 'A shared grand taxi from Fes to Sefrou costs from 15-20 MAD per person — one of the cheapest and easiest day trips from Fes. The journey takes 30-40 minutes.', savings: 'Save from 130-180 MAD vs. private taxi' },
  { tip: 'Free Attractions Everywhere', icon: Footprints, description: 'The medina, mellah, waterfall, caves, olive groves, and river walk are all free. The best experiences in Sefrou cost nothing — bring a picnic and enjoy.', savings: 'Free — most attractions cost nothing' },
  { tip: 'Thursday Souk for Bargains', icon: ShoppingBag, description: 'The weekly Thursday market offers the best prices for olives, olive oil, honey, spices, and handcrafts. Buy directly from producers at wholesale prices.', savings: 'Save from 30-50% vs. Fes medina prices' },
  { tip: 'Pack a Picnic', icon: UtensilsCrossed, description: 'Buy fresh bread (from 2 MAD), olives (from 10 MAD), cheese (from 15 MAD), and fruit at the market or medina shops. Eat at the waterfall park or olive groves.', savings: 'Save from 40-80 MAD vs. restaurant lunch' },
  { tip: 'Walk Between Sites', icon: Compass, description: 'Sefrou is compact — the medina, mellah, waterfall, and olive groves are all within walking distance. No taxis needed within town.', savings: 'Save from 30-60 MAD on local transport' },
  { tip: 'Buy Olive Oil Direct', icon: TreesIcon, description: 'Sefrou olive oil is among Morocco finest. Buy from producers at the Thursday souk (from 50 MAD/liter) vs. from 100-150 MAD in Fes tourist shops.', savings: 'Save from 50-100 MAD per liter' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Best Day to Visit', icon: Calendar, description: 'Thursday is ideal — the weekly souk is in full swing and the town buzzes with energy. If you want quiet exploration of the medina and mellah, visit any other weekday.' },
  { tip: 'Combine with Bhalil', icon: Building, description: 'Bhalil troglodyte village is just 5 km away. A Sefrou + Bhalil day trip from Fes covers two fascinating destinations that most tourists never visit.' },
  { tip: 'Cherry Season Timing', icon: Sun, description: 'Cherry season runs mid-May to late June. The Cherry Festival is in mid-June. Visit during this window for the freshest cherries, the most colorful town, and the festival atmosphere.' },
  { tip: 'Respect the Mellah', icon: Heart, description: 'The mellah is a historically sensitive site. Photograph respectfully, do not enter private homes without invitation, and be aware that some older residents have strong memories and emotions connected to the Jewish community departure.' },
  { tip: 'River Flash Floods', icon: AlertTriangle, description: 'The Oued Aggai river can rise suddenly during heavy rains, especially in autumn and spring. Stay clear of low-lying river areas during storms. The waterfall can also become dangerous in flood conditions.' },
  { tip: 'Local Guide Advantage', icon: Users, description: 'A local guide (from 100-150 MAD for half day) transforms the mellah and medina visit by sharing oral histories, pointing out hidden architectural details, and introducing you to artisan families.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Sefrou known for?', answer: 'Sefrou is known as the Cherry Capital of Morocco and historically as Little Jerusalem due to its large Jewish community. The town is famous for its Cherry Festival in June, its well-preserved Jewish mellah with Star of David carvings, the Bou Iblane waterfall, Kef al-Moumen caves, lively Thursday souk, extensive olive groves, and a medieval medina bisected by the Oued Aggai river.' },
  { question: 'How do I get from Fes to Sefrou?', answer: 'Sefrou is 28 km south of Fes. Grand taxis from Place Batha or the southern taxi stand cost from 15-20 MAD per person (30-40 minutes). Bus number 28 from Fes costs about 10 MAD. A private taxi costs from 150-200 MAD each way. The road is well-paved and scenic through olive groves.' },
  { question: 'When is the Sefrou Cherry Festival?', answer: 'The Cherry Festival (Fete des Cerises) takes place in mid-June each year, typically lasting 3 days. Dating back to 1920, it features cherry queen pageants, traditional music, Berber folk dances, parades, and cherry markets. Check locally for exact dates as they shift based on the harvest.' },
  { question: 'Is Sefrou worth visiting?', answer: 'Absolutely. Sefrou offers authentic Morocco without tourist crowds. The medieval medina, historic mellah, waterfall, and weekly market provide a rich half-day or full-day experience. It is one of the best and most accessible day trips from Fes, particularly rewarding during the Cherry Festival in June.' },
  { question: 'Can I visit the Jewish mellah in Sefrou?', answer: 'Yes, the mellah is open and accessible. While the Jewish community has almost entirely emigrated, the architectural heritage remains — Star of David carvings on doorways, synagogue ruins, Hebrew inscriptions, and the distinctive layout. A local guide helps identify details and shares oral histories.' },
  { question: 'What should I buy in Sefrou?', answer: 'Best purchases include fresh cherries in season (from 10-20 MAD/kg), local olive oil (from 50-80 MAD/liter), mountain honey (from 80 MAD/jar), handwoven baskets (from 30 MAD), and olives from the Thursday souk. Prices are significantly lower than Fes tourist markets.' },
  { question: 'Is there accommodation in Sefrou?', answer: 'Sefrou has a small number of guesthouses and riads, mostly simple but charming. However, most visitors stay in Fes and visit Sefrou as a day trip. If you want to experience the town at its quietest (early morning and evening), an overnight stay is rewarding. Expect from 300-600 MAD per night for a double room.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/fes', icon: MapPin, title: 'Fes City Guide', description: 'Complete guide to Fes: medina, tanneries, riads, and cultural treasures.' },
  { href: '/azrou-guide', icon: TreesIcon, title: 'Azrou Guide', description: 'Cedar forests, Barbary macaques, and Berber markets in the Middle Atlas.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to street food — the complete cuisine guide.' },
  { href: '/best-time', icon: Calendar, title: 'Best Time to Visit', description: 'Month-by-month guide to weather, festivals, and crowds across Morocco.' },
  { href: '/day-trips-from-fes', icon: Compass, title: 'Day Trips from Fes', description: 'The best excursions from Fes including Meknes, Volubilis, and Middle Atlas.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function SefrouGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-fes.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sefrou Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Sefrou: Cherry Capital
            <br className="hidden md:block" /> &amp; Little Jerusalem
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A medieval Moroccan town where rivers run through the medina, cherry orchards blanket the hills,
            and the echoes of a once-thriving Jewish community linger in carved stone doorways. Just 28 km from Fes.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Discovering Sefrou: Morocco&apos;s Hidden Gem
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Nestled in the foothills of the Middle Atlas Mountains, just 28 km south of Fes, Sefrou is
                one of Morocco oldest and most historically layered towns. Founded as a Berber settlement
                before the Arab conquest, it became a crucial stop on trans-Saharan trade routes and later
                gained fame as one of Morocco most important centers of Jewish life — earning the nickname
                &quot;Little Jerusalem&quot; for a community that at its peak comprised nearly half the town&apos;s population.
              </p>
              <p>
                Today, Sefrou is known as the Cherry Capital of Morocco, celebrated each June with a
                festival that dates back to 1920. But beyond the cherries lies a town of remarkable character:
                a medieval medina bisected by the rushing Oued Aggai river, a hauntingly beautiful Jewish
                mellah where Star of David carvings still adorn crumbling doorways, working tanneries that
                operate without tourist fanfare, a dramatic waterfall minutes from the town center, and caves
                steeped in ancient legend.
              </p>
              <p>
                Unlike the overwhelming medinas of Fes and Marrakech, Sefrou rewards the traveler who
                seeks authenticity over spectacle. There are no tour buses, no souvenir shops, no persistent
                touts. What you find instead is genuine Moroccan life: Berber farmers at the Thursday souk,
                artisans weaving baskets in dim workshops, families picnicking by the waterfall, and an
                atmosphere of timeless calm that larger cities have long since lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 10 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Sefrou Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences for your visit to Sefrou, whether a half-day trip or a full day of exploration.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Jewish Mellah (Little Jerusalem)', price: 'Free', time: '1-1.5 hours', category: 'Heritage' },
              { rank: 2, name: 'Cherry Festival (June)', price: 'Free', time: 'Full day', category: 'Festival' },
              { rank: 3, name: 'Bou Iblane Waterfall', price: 'Free', time: '1-2 hours', category: 'Nature' },
              { rank: 4, name: 'Thursday Weekly Souk', price: 'Free', time: '1.5-2 hours', category: 'Market' },
              { rank: 5, name: 'Medieval Medina & River Walk', price: 'Free', time: '1.5-2 hours', category: 'Cultural' },
              { rank: 6, name: 'Kef al-Moumen Caves', price: 'Free', time: '1-2 hours', category: 'Adventure' },
              { rank: 7, name: 'Olive Groves & Cherry Orchards', price: 'Free', time: '1-2 hours', category: 'Nature' },
              { rank: 8, name: 'Traditional Tanneries', price: 'From 20 MAD tip', time: '30-45 min', category: 'Craft' },
              { rank: 9, name: 'Artisan Workshops', price: 'Free', time: '30-60 min', category: 'Craftsmanship' },
              { rank: 10, name: 'Bhalil Cave Village (5 km)', price: 'From 50 MAD tour', time: '1.5-2 hours', category: 'Day Extension' },
            ].map((item) => (
              <div key={item.rank} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-[var(--color-accent)]">{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Ticket className="w-3 h-3" />
                      {item.price}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Historical & Cultural Attractions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historical &amp; Cultural Attractions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the echoes of a vanished Jewish community to a medieval medina bisected by a river,
            Sefrou history is written in stone, water, and memory.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most attractions are free. A local guide (from 100 MAD) greatly enriches the mellah visit.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {historicalAttractions.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {attraction.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {attraction.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {attraction.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {attraction.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Nature & Outdoor Attractions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature &amp; Outdoor Attractions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Waterfalls, ancient caves, olive groves, and a troglodyte village — the natural
            surroundings of Sefrou are as compelling as its history.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All natural attractions are free to visit. Wear sturdy shoes for the caves and hillside walks.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {natureAttractions.map((item) => {
              const NatIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <NatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Markets & Festivals -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Markets &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Cherry Festival, the Thursday souk, and artisan workshops bring Sefrou to life
            with color, commerce, and centuries-old tradition.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Thursday souk is the best day to visit. The Cherry Festival is mid-June annually.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {marketsAndFestivals.map((item) => {
              const MarketIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MarketIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Sefrou
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sefrou is one of the most budget-friendly destinations in Morocco — most attractions are free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Sefrou
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to make your Sefrou visit more rewarding and meaningful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample Day Trip Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Day Trip from Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical itinerary combining Sefrou and Bhalil for a full day of off-the-beaten-path exploration.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Medina, Mellah &amp; Market
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM - Depart Fes</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a grand taxi from Place Batha or the southern taxi stand (from 15-20 MAD per person, 30-40 minutes).
                      Arrive in Sefrou by 8:40 AM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM - Explore the Medina &amp; Mellah</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Enter through Bab Merba and walk the river-bisected medina. Cross to the mellah and look for Star of David
                      carvings, synagogue ruins, and Hebrew inscriptions. Visit the tanneries near the river. If it is Thursday,
                      the souk will be in full swing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Midday: Waterfall &amp; Lunch
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM - Bou Iblane Waterfall</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk 20 minutes from the medina to the Cascades de Sefrou. Enjoy the waterfall and surrounding park.
                      Bring a picnic or buy fresh bread and olives from the medina shops (from 15 MAD total).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM - Lunch in Sefrou</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Simple local restaurants near the market serve tagine (from 35 MAD), grilled meats (from 30 MAD),
                      and fresh salads. Or enjoy your picnic at the waterfall park.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Bhalil &amp; Return
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM - Bhalil Village</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a grand taxi to Bhalil (from 10 MAD, 10 minutes). Explore the colorful village, visit a
                      troglodyte cave home (from 50 MAD guided tour with tea), and climb to the hilltop viewpoint.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM - Return to Fes</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi from Bhalil or Sefrou back to Fes (from 15-20 MAD). Arrive in Fes by 5 PM with
                      time for evening exploring. Estimated total day cost: from 150-300 MAD per person.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring the Fes Region
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
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
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
            Ready to Discover Sefrou?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From cherry-laden orchards and ancient cave dwellings to a mellah echoing with centuries of history,
            Sefrou offers one of Morocco most authentic and rewarding day trips. Just 28 km from Fes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Fes City Guide
            </Link>
            <Link
              href="/azrou-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <TreesIcon className="w-5 h-5" />
              Azrou Guide
            </Link>
            <Link
              href="/day-trips-from-fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Day Trips from Fes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
