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
  Globe,
  AlertTriangle,
  Waves,
  TreesIcon,
  Mountain,
  Coffee,
  Droplets,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Guide to Beni Mellal 2026 | Ain Asserdoun, Bin el-Ouidane & Atlas',
  description:
    'Discover Beni Mellal, gateway to the Atlas Mountains in 2026. Ain Asserdoun springs, Kasbah Ras el-Ain, Bin el-Ouidane lake, Ouzoud Falls day trip, Tuesday souk, Atlas hiking, and olive groves. Prices in MAD.',
  keywords: [
    'beni mellal morocco',
    'ain asserdoun',
    'beni mellal guide',
    'bin el ouidane',
    'beni mellal things to do',
    'beni mellal atlas',
    'ouzoud falls day trip',
    'kasbah ras el ain',
    'beni mellal souk',
    'beni mellal travel guide',
    'tadla plain morocco',
    'cathedral rock beni mellal',
    'beni mellal olive groves',
    'afourer morocco',
    'azilal morocco',
    'beni mellal 2026',
  ],
  openGraph: {
    title: 'Complete Guide to Beni Mellal 2026 | Ain Asserdoun, Bin el-Ouidane & Atlas',
    description:
      'Your complete guide to Beni Mellal: Ain Asserdoun springs, Kasbah Ras el-Ain, Bin el-Ouidane dam, Ouzoud Falls, Atlas hiking, olive groves, and Tuesday souk. Real prices in MAD.',
    url: `${BASE_URL}/beni-mellal-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Beni Mellal with the Atlas Mountains rising behind the city and Ain Asserdoun springs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Beni Mellal 2026 | Morocco',
    description:
      'Ain Asserdoun springs, Bin el-Ouidane lake, Ouzoud Falls, Atlas hiking, olive groves, and authentic souks. Complete Beni Mellal guide with real prices.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/beni-mellal-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/beni-mellal-guide`,
  name: 'Complete Guide to Beni Mellal 2026 | Ain Asserdoun, Bin el-Ouidane & Atlas',
  description:
    'Discover Beni Mellal, gateway to the Atlas Mountains. Ain Asserdoun springs, Kasbah Ras el-Ain, Bin el-Ouidane dam lake, Ouzoud Falls, Atlas hiking, and Tadla plain agriculture.',
  url: `${BASE_URL}/beni-mellal-guide`,
  image: `${BASE_URL}/images/hero-atlas.webp`,
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
  mainEntityOfPage: `${BASE_URL}/beni-mellal-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Beni Mellal',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Beni Mellal Guide', item: `${BASE_URL}/beni-mellal-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Beni Mellal known for?', acceptedAnswer: { '@type': 'Answer', text: 'Beni Mellal is known as the gateway to the Atlas Mountains. Key attractions include Ain Asserdoun springs and gardens, the hilltop Kasbah Ras el-Ain fortress, Bin el-Ouidane dam and lake (popular for boating and swimming), proximity to Ouzoud Falls (110 km), the famous Tuesday souk, vast olive groves, and excellent Atlas Mountain hiking opportunities.' } },
    { '@type': 'Question', name: 'How far is Beni Mellal from Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Beni Mellal is approximately 210 km from Marrakech, about 2.5-3 hours by car or bus. CTM and Supratours buses run multiple daily services (from 70 MAD). The drive through the Tadla plain and Atlas foothills is scenic. Beni Mellal is also accessible from Casablanca (320 km, 3.5 hours) and Fes (350 km, 4 hours).' } },
    { '@type': 'Question', name: 'Is Bin el-Ouidane worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Bin el-Ouidane dam creates a spectacular turquoise lake set against the Atlas Mountains, about 50 km from Beni Mellal. The lake offers boating, kayaking, swimming, and fishing. Several lakeside restaurants serve fresh fish. The drive through the mountains to reach the lake is scenic and the area sees very few international tourists.' } },
    { '@type': 'Question', name: 'Can you visit Ouzoud Falls from Beni Mellal?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Ouzoud Falls is about 110 km (1.5-2 hours drive) from Beni Mellal via Azilal. The falls are 110 meters high, the tallest in North Africa, and are spectacular year-round. You can hire a grand taxi from Beni Mellal (from 400 MAD return for the car), take a bus to Azilal then a taxi, or join a day trip. Allow a full day for the excursion.' } },
    { '@type': 'Question', name: 'What is the best time to visit Beni Mellal?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) is ideal with wildflowers, flowing waterfalls, and pleasant temperatures. Autumn (September to November) is also excellent. Summer can be extremely hot on the plain (above 40 degrees) but cooler in the mountains. Winter is mild in the city but cold at altitude, with snow possible on Atlas passes above Bin el-Ouidane.' } },
    { '@type': 'Question', name: 'Is Beni Mellal worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Beni Mellal is an excellent destination for travelers seeking authentic Morocco away from tourist crowds. Ain Asserdoun springs, the Kasbah views, Bin el-Ouidane lake, and the Tuesday souk are genuinely impressive. As a base for Ouzoud Falls and Atlas hiking, it offers much better value than Marrakech. The city itself is a lively, welcoming Moroccan city where few tourists venture.' } },
  ],
};

/* ===============================================================
   DATA: TOP ATTRACTIONS
   =============================================================== */

const topAttractions = [
  {
    name: 'Ain Asserdoun Springs & Gardens',
    icon: Droplets,
    category: 'Natural Spring & Gardens',
    price: 'Free',
    duration: '1.5-2.5 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Ain Asserdoun is the crown jewel of Beni Mellal, a series of natural springs that cascade down the mountainside through terraced gardens into the city below. The name means "spring of the mule" in Amazigh, and water has gushed from these mountain sources for centuries, creating a lush oasis at the edge of the arid Tadla plain. The springs feed a network of channels and pools surrounded by fig trees, oleanders, pomegranates, and ancient olive trees. Stone staircases wind through the gardens, connecting peaceful shaded terraces where families picnic and children splash in the cool water. At the top of the garden complex, the water emerges from the rock face in a dramatic natural display, and the views over Beni Mellal and the vast Tadla plain stretching to the horizon are magnificent. In spring, when the water flow is strongest and wildflowers carpet the hillside, Ain Asserdoun is one of the most beautiful natural spots in Morocco.',
    insiderTip:
      'Visit in spring (March to May) when water flow peaks after winter rains. The gardens are terraced steeply, so wear comfortable shoes. Early morning is quietest; Friday and weekend afternoons see local families filling the gardens. Combine with Kasbah Ras el-Ain above, which is a short uphill walk from the top of the springs.',
  },
  {
    name: 'Kasbah Ras el-Ain',
    icon: Landmark,
    category: 'Historical Fortress',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'Perched on a rocky spur above the Ain Asserdoun springs, Kasbah Ras el-Ain (also called Kasbah Bel Kush) commands one of the finest panoramic views in the Middle Atlas region. This 17th-century fortress was built by Sultan Moulay Ismail as part of his vast network of kasbah strongholds across Morocco, designed to control the strategic passage between the Tadla plain and the Atlas Mountains. The kasbah is partially restored, with its thick defensive walls, watchtowers, and arched gateways still standing impressively against the mountain backdrop. From the ramparts, the view is breathtaking: the entire city of Beni Mellal spreads below, the Tadla plain extends to the north in a patchwork of farms and olive groves, and the Atlas Mountains rise behind in a wall of limestone peaks. The kasbah sits directly above the source of the Ain Asserdoun springs, and you can hear the water rushing below.',
    insiderTip:
      'The kasbah is a 15-minute steep walk uphill from the top of Ain Asserdoun gardens. Start at the kasbah and walk down through the springs to save your legs. The early morning light is best for photography, illuminating the plain while the mountains are still in shadow. Very few tourists visit, so you may have the fortress entirely to yourself.',
  },
  {
    name: 'Bin el-Ouidane Dam & Lake',
    icon: Waves,
    category: 'Lake & Outdoor Recreation',
    price: 'Free (boat rental from 100 MAD/hour)',
    duration: 'Half day - Full day',
    bestTime: 'Morning for calm water',
    description:
      'Bin el-Ouidane is one of Morocco most spectacular mountain lakes, created by a massive arch dam on the El Abid River approximately 50 km south of Beni Mellal. The dam, completed in 1953 and one of the highest in Africa at 133 meters, impounds a vast reservoir of startling turquoise water set against the brown and green Atlas Mountains. The lake stretches for over 30 km through winding mountain valleys, creating a landscape that feels more like a Swiss alpine lake than anything you would expect in Morocco. Boating, kayaking, swimming, and fishing are all popular activities, with several operators renting equipment at the lakeside villages. The drive from Beni Mellal through Afourer and up into the mountains is an attraction in itself, with spectacular hairpin turns and ever-expanding views. Lakeside restaurants serve fresh-caught fish (from 60 MAD) and tagines with views over the impossibly blue water.',
    insiderTip:
      'The lake is most dramatic after winter and spring rains when the water level is highest and the turquoise color most intense. Some sections are swimmable in summer but always check local conditions. The village of Bin el-Ouidane has basic accommodation if you want to overnight. Friday is market day in the area. Bring warm layers as it is noticeably cooler at the lake altitude than in Beni Mellal.',
  },
  {
    name: 'Beni Mellal Tuesday Souk',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free (shopping budget from 50 MAD)',
    duration: '2-3 hours',
    bestTime: 'Tuesday morning (7 AM - 1 PM)',
    description:
      'The Tuesday souk of Beni Mellal is one of the largest and most authentic weekly markets in central Morocco, drawing farmers, herders, and traders from across the Tadla plain and the Atlas Mountain villages. This is not a sanitized tourist market but a genuine working souk where the region agricultural bounty is on full display. Mountains of olives (Beni Mellal produces some of Morocco finest olive oil), seasonal fruits and vegetables, fragrant spices, dried herbs, livestock, household goods, clothing, and traditional tools fill acres of stalls and open-air sections. The atmosphere is electric with the sound of bargaining, the calls of vendors, and the organized chaos of a market that has operated in much the same way for centuries. For visitors, the souk offers exceptional value on olives, olive oil, spices, and handmade goods at local prices far below what you would pay in Marrakech or Fes.',
    insiderTip:
      'Arrive early (by 8 AM) for the freshest produce and best atmosphere. The olive section is the highlight, with dozens of varieties to taste and buy (from 20 MAD per kg). Bring your own bags. Olive oil sold by farmers in recycled bottles is fresh and cheap (from 40 MAD per liter). The livestock section at the rear of the market is fascinating but can be confronting. Local men may offer to guide you through the maze of stalls; a tip of 20 MAD is appreciated.',
  },
  {
    name: 'Cathedral Rock (Climbing)',
    icon: Mountain,
    category: 'Rock Climbing & Adventure',
    price: 'Free (guide from 300 MAD/day)',
    duration: 'Half day - Full day',
    bestTime: 'Morning (cooler temperatures)',
    description:
      'Cathedral Rock, a massive limestone cliff face near Beni Mellal, is one of Morocco premier rock climbing destinations. The cliff offers dozens of bolted routes ranging from beginner-friendly 5a grades to challenging 7c overhangs, spread across several sectors with evocative names. The rock quality is excellent, with compact limestone offering sharp holds and technical face climbing. The setting is spectacular, with routes looking out over the Tadla plain and the surrounding Atlas foothills. The climbing community here is growing, with both Moroccan and international climbers drawn by the quality routes, perfect winter weather, and lack of crowds compared to more famous climbing destinations. Even non-climbers will appreciate the dramatic rock formations and the hiking trails that wind through the base of the cliffs, offering close-up views of the sculpted limestone towers and caves.',
    insiderTip:
      'The climbing season runs October to May; summer is too hot. Bring your own gear as rental is limited. A local climbing guide is recommended for route-finding and safety (from 300 MAD per day). The approach hike takes 20-30 minutes. There is a small but welcoming climbing community in Beni Mellal who can advise on conditions and routes. Non-climbers can enjoy the hiking trails at the cliff base.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & EXCURSIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Ouzoud Falls (Cascades d\'Ouzoud)',
    icon: Droplets,
    category: 'Waterfall & Nature',
    distance: '110 km southwest (1.5-2 hours)',
    price: 'From 10 MAD (park entry)',
    description:
      'The Cascades d\'Ouzoud are the tallest and most spectacular waterfalls in North Africa, plunging 110 meters over red-orange cliffs into a series of natural pools in a lush canyon. The falls are surrounded by olive groves (Ouzoud means "olives" in Amazigh) and the spray creates perpetual rainbows in the sunlight. Barbary macaques inhabit the cliffs and valley, swinging through the trees and occasionally approaching visitors. Multiple viewpoints offer different perspectives on the falls, and a steep trail descends to the base where you can swim in the pools and take a small boat ride (from 20 MAD) through the mist at the falls base. The drive from Beni Mellal via Azilal passes through dramatic Atlas Mountain scenery with Berber villages perched on hillsides.',
    insiderTip:
      'Spring (March to May) offers the most powerful water flow. From Beni Mellal, hire a grand taxi to Azilal (from 30 MAD), then another to the falls (from 30 MAD), or negotiate a return trip from Beni Mellal (from 400 MAD for the car). The trail to the base of the falls is steep and can be slippery. Avoid the monkeys feeding habit and guard your bags. Pack a picnic or eat at the valley floor restaurants (tagine from 50 MAD).',
  },
  {
    name: 'Azilal & Afourer',
    icon: Mountain,
    category: 'Atlas Mountain Towns',
    distance: 'Afourer 30 km / Azilal 80 km',
    price: 'From 20 MAD (grand taxi)',
    description:
      'The mountain towns south of Beni Mellal offer a taste of Atlas life. Afourer, just 30 km south, sits at the entrance to the mountains with spectacular views and a pleasant market town atmosphere. Azilal, 80 km into the mountains, is the capital of Azilal Province and the gateway to Ouzoud Falls, the Ait Bouguemez valley (the "Happy Valley"), and some of Morocco best trekking territory. The road from Beni Mellal to Azilal is one of the most scenic drives in the Atlas, climbing through passes with views of snow-capped peaks and deep river gorges. Both towns have lively weekly souks (Afourer on Monday, Azilal on Thursday) where mountain produce and crafts are traded.',
    insiderTip:
      'Afourer is known for its citrus orchards, and roadside stands sell fresh oranges and clementines for almost nothing. Azilal has basic hotels and restaurants if you want to use it as a trekking base. The Ait Bouguemez valley beyond Azilal is one of Morocco most beautiful and untouched mountain valleys, worth at least 2-3 days of trekking.',
  },
  {
    name: 'Olive Grove Excursion',
    icon: TreesIcon,
    category: 'Agriculture & Culture',
    distance: '10-30 km around Beni Mellal',
    price: 'Free',
    description:
      'The Beni Mellal region is the heartland of Moroccan olive oil production, with vast groves of ancient olive trees spreading across the Tadla plain and climbing into the Atlas foothills. The Picholine and Haouzia olive varieties grown here produce some of Morocco finest olive oils, from delicate golden cold-pressed oils to rich, peppery traditional press oils. During the harvest season (November to January), the groves come alive with families hand-picking olives and loading donkeys for transport to the local presses. Outside harvest season, the silvery-green groves are peaceful places for walks and photography, with gnarled trees sometimes hundreds of years old creating atmospheric canopies.',
    insiderTip:
      'Visit during olive harvest (November to January) to watch the traditional process. Ask at your hotel about visiting a local olive press (maasra) to see oil being extracted and taste fresh-pressed oil. Buy directly from farms for the best quality and price (from 30 MAD per liter for traditional press oil). The groves east of the city toward Fquih Ben Salah are the most extensive.',
  },
];

/* ===============================================================
   DATA: FOOD & DRINK
   =============================================================== */

const foodDrink = [
  {
    name: 'Olive Oil & Olive Dishes',
    icon: UtensilsCrossed,
    category: 'Regional Specialty',
    price: 'From 30 MAD/liter (olive oil)',
    description:
      'Beni Mellal is the olive capital of Morocco, and olive oil is the backbone of local cuisine. Fresh-pressed olive oil is drizzled over everything from salads to tagines. Try amlou (a rich paste of argan oil, almonds, and honey), olive tagines with preserved lemons, and fresh bread dipped in just-pressed oil at the market. The Tuesday souk offers the best selection, with dozens of olive varieties from tiny wrinkled oil olives to plump green table olives. Olive oil quality varies widely; look for first cold-press (pression a froid) for the finest flavor.',
    insiderTip:
      'Buy olive oil at the Tuesday souk directly from farmers, not in shops. Taste before buying. The best oil is slightly bitter and peppery, with a clean green color. From 30 MAD per liter from farms, compared to from 80-120 MAD in Marrakech tourist shops.',
  },
  {
    name: 'Mountain & Plain Cuisine',
    icon: UtensilsCrossed,
    category: 'Traditional Cooking',
    price: 'From 30 MAD',
    description:
      'Beni Mellal cuisine blends the hearty mountain cooking of the Atlas with the agricultural abundance of the Tadla plain. Tagines here tend to be simple and generous, featuring local lamb, chicken, or beef with seasonal vegetables in rich olive oil sauces. Couscous is served every Friday, as across Morocco, but the Beni Mellal version is often enriched with seven vegetables and a particularly flavorful broth. Mountain specialties from the Azilal direction include tangia (slow-cooked meat in an earthenware jar), madfouna (a stuffed bread sometimes called Berber pizza), and fresh-caught river trout. Street food favorites include grilled lamb kebabs (from 15 MAD), harira soup (from 8 MAD), and sfenj (Moroccan doughnuts, from 2 MAD each).',
    insiderTip:
      'The small restaurants around the central souk serve the most authentic food at the lowest prices. Try trid, a local dish of chicken and shredded msemen pastry in a rich sauce (from 35 MAD). Restaurants near Ain Asserdoun gardens serve good tagines with a view (from 50 MAD).',
  },
  {
    name: 'Cafe & Tea Culture',
    icon: Coffee,
    category: 'Cafes & Refreshments',
    price: 'From 6 MAD',
    description:
      'Like all Moroccan cities, Beni Mellal runs on cafe culture. The main commercial streets are lined with terraces where men sip mint tea (from 6 MAD) and nous-nous (from 8 MAD) while watching the world go by. The cafes near Place de la Liberte are the social heart of the city, buzzing from morning coffee through evening tea. In summer, fresh-squeezed orange juice is a bargain (from 5 MAD for a large glass), and avocado smoothies (from 10 MAD) made with local fruit are refreshingly delicious. Moroccan pastries at local patisseries cost a fraction of tourist city prices, with cornes de gazelle, briwat, and chebakia from 3 MAD per piece.',
    insiderTip:
      'Join the locals at cafes near Place de la Liberte for the best people-watching. In summer, the fresh juice stands are an essential stop. Try jus d panache (a mixed fruit smoothie) for a refreshing treat. Evening cafe culture peaks after Maghrib prayer when families promenade through the city center.',
  },
];

/* ===============================================================
   DATA: PRACTICAL INFO
   =============================================================== */

const practicalTips = [
  {
    icon: Compass,
    title: 'Getting There',
    content:
      'Beni Mellal has no airport; the nearest is Marrakech Menara (210 km). CTM and Supratours buses run from Marrakech (from 70 MAD, 3 hours), Casablanca (from 90 MAD, 3.5 hours), and Fes (from 100 MAD, 4 hours). Grand taxis connect to surrounding towns. By car, the city is on the N8 highway linking Marrakech to Fes via the interior route. The drive from Marrakech through the Tadla plain is flat and fast.',
  },
  {
    icon: MapPin,
    title: 'Getting Around',
    content:
      'Beni Mellal city center is compact and walkable. Petit taxis (white with a green stripe) run within the city (from 5 MAD). Grand taxis are needed for Ain Asserdoun (from 10 MAD), Bin el-Ouidane (from 30 MAD per seat), and Ouzoud Falls (negotiate for the car). Having a car is highly recommended for exploring Bin el-Ouidane, Ouzoud, and the Atlas Mountains. Rental is available in the city from 300 MAD per day.',
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    content:
      'Spring (March to May) is optimal: waterfalls are at full flow, wildflowers bloom, and temperatures are pleasant (20-28 degrees). Autumn (September to November) is also excellent. Summer is extremely hot on the Tadla plain (regularly above 40 degrees) but the mountains and Bin el-Ouidane offer cooler relief. Winter is mild in the city (10-18 degrees) but cold at altitude, with possible snow on Atlas passes.',
  },
  {
    icon: AlertTriangle,
    title: 'Safety & Tips',
    content:
      'Beni Mellal is a safe, welcoming city that sees very few tourists. French and Darija are spoken; English is rare. Dress modestly, especially at the market. ATMs are available in the city center. Mountain roads to Bin el-Ouidane and beyond require careful driving with sharp bends. Cell phone coverage is limited in remote mountain areas. Bring cash for rural excursions as cards are not accepted outside the city.',
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What is Beni Mellal known for?',
    answer:
      'Beni Mellal is known as the gateway to the Atlas Mountains. Key attractions include Ain Asserdoun springs and gardens, the hilltop Kasbah Ras el-Ain fortress, Bin el-Ouidane dam and lake (popular for boating and swimming), proximity to Ouzoud Falls (110 km), the famous Tuesday souk, vast olive groves, and excellent Atlas Mountain hiking.',
  },
  {
    question: 'How far is Beni Mellal from Marrakech?',
    answer:
      'Beni Mellal is approximately 210 km from Marrakech, about 2.5-3 hours by car or bus. CTM and Supratours buses run multiple daily services (from 70 MAD). The drive through the Tadla plain and Atlas foothills is scenic.',
  },
  {
    question: 'Is Bin el-Ouidane worth visiting?',
    answer:
      'Absolutely. Bin el-Ouidane dam creates a spectacular turquoise lake set against the Atlas Mountains, about 50 km from Beni Mellal. The lake offers boating, kayaking, swimming, and fishing. Several lakeside restaurants serve fresh fish. The area sees very few international tourists.',
  },
  {
    question: 'Can you visit Ouzoud Falls from Beni Mellal?',
    answer:
      'Yes, Ouzoud Falls is about 110 km (1.5-2 hours drive) from Beni Mellal via Azilal. The falls are 110 meters high, the tallest in North Africa. Hire a grand taxi from Beni Mellal (from 400 MAD return for the car) or take a bus to Azilal then a taxi. Allow a full day.',
  },
  {
    question: 'What is the best time to visit Beni Mellal?',
    answer:
      'Spring (March to May) is ideal with wildflowers, flowing waterfalls, and pleasant temperatures. Autumn is also excellent. Summer can be extremely hot (above 40 degrees) on the plain. Winter is mild in the city but cold at mountain altitude.',
  },
  {
    question: 'Is Beni Mellal worth visiting?',
    answer:
      'Beni Mellal is an excellent destination for travelers seeking authentic Morocco. Ain Asserdoun springs, the Kasbah views, Bin el-Ouidane lake, and the Tuesday souk are genuinely impressive. As a base for Ouzoud Falls and Atlas hiking, it offers much better value than Marrakech.',
  },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-atlas-guide', icon: Mountain, title: 'Atlas Mountains Guide', description: 'Trekking, valleys, and Berber villages in the High Atlas, Middle Atlas, and Anti-Atlas.' },
  { href: '/bin-el-ouidane', icon: Waves, title: 'Bin el-Ouidane Guide', description: 'Complete guide to the stunning dam lake: boating, swimming, fishing, and lakeside dining.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to street food and regional specialties across Morocco.' },
  { href: '/climbing', icon: Mountain, title: 'Climbing in Morocco', description: 'Rock climbing destinations from Todra Gorge to Taghia and Cathedral Rock.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function BeniMellalGuidePage() {
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
            backgroundImage: 'url(/images/hero-atlas.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Beni Mellal Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Beni Mellal
            <br className="hidden md:block" /> City Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Gateway to the Atlas Mountains, where natural springs cascade through gardens,
            a turquoise dam lake mirrors snowy peaks, and olive groves stretch to the horizon.
            Your 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Beni Mellal: Where the Plains Meet the Peaks
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Beni Mellal sits at one of Morocco&apos;s most dramatic geographic transitions. To the
                north, the vast Tadla plain stretches flat and fertile as far as the eye can see, its
                farms and olive groves fed by an intricate web of irrigation channels dating back centuries.
                To the south, the Middle Atlas Mountains rise abruptly in a wall of limestone and cedar,
                their peaks dusted with snow in winter. The city of nearly 500,000 people occupies this
                meeting point, blessed with abundant water from the Atlas springs that burst from the
                mountainside at Ain Asserdoun.
              </p>
              <p>
                As the capital of the Beni Mellal-Khenifra region, this is a prosperous agricultural city
                that processes and trades the bounty of one of Morocco&apos;s most productive farming zones.
                Olives, citrus, wheat, sugar beets, and vegetables flow through its markets. Yet Beni Mellal
                is virtually unknown to international tourists, which means those who visit find genuine
                hospitality, rock-bottom prices, and attractions that rival the country&apos;s most famous
                destinations. Ain Asserdoun springs are as beautiful as any garden in Marrakech, Bin
                el-Ouidane lake is as stunning as any Alpine reservoir, and the Tuesday souk buzzes
                with an authenticity that the tourist markets of the imperial cities cannot match.
              </p>
              <p>
                This guide covers everything worth seeing in and around Beni Mellal: the springs and
                gardens of Ain Asserdoun, the commanding Kasbah Ras el-Ain, the turquoise waters of
                Bin el-Ouidane, day trips to Ouzoud Falls and Atlas mountain towns, rock climbing at
                Cathedral Rock, the legendary Tuesday souk, and the olive oil heartland. Each listing
                includes real 2026 prices in MAD, practical logistics, and tips from people who know
                this region intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Beni Mellal Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The best reasons to visit this underrated Atlas Mountain gateway.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Ain Asserdoun Springs', price: 'Free', time: '1.5-2.5 hours', category: 'Nature' },
              { rank: 2, name: 'Bin el-Ouidane Lake', price: 'Free', time: 'Half day', category: 'Lake' },
              { rank: 3, name: 'Ouzoud Falls Day Trip', price: 'From 10 MAD', time: 'Full day', category: 'Waterfall' },
              { rank: 4, name: 'Kasbah Ras el-Ain', price: 'Free', time: '1-1.5 hours', category: 'Heritage' },
              { rank: 5, name: 'Tuesday Souk', price: 'Free', time: '2-3 hours', category: 'Market' },
              { rank: 6, name: 'Cathedral Rock Climbing', price: 'Free', time: 'Half day', category: 'Adventure' },
              { rank: 7, name: 'Olive Grove Visit', price: 'Free', time: '2-3 hours', category: 'Agriculture' },
              { rank: 8, name: 'Azilal & Atlas Towns', price: 'From 20 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 9, name: 'Atlas Mountain Hiking', price: 'Free', time: 'Half day+', category: 'Trekking' },
              { rank: 10, name: 'Afourer Citrus Country', price: 'Free', time: '2-3 hours', category: 'Scenic' },
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

      {/* -- Top Attractions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Attractions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From mountain springs and ancient fortresses to turquoise lakes and championship
            climbing walls, Beni Mellal surprises at every turn.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Seasonal variations may apply.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {topAttractions.map((attraction) => {
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

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beni Mellal is perfectly positioned for exploring waterfalls, mountain towns, and olive country.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {trip.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {trip.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {trip.distance}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {trip.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {trip.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {trip.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Food & Drink -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Drink
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Olive oil, hearty mountain cuisine, and the freshest produce from the Tadla plain.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {foodDrink.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Practical Information -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {practicalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <TipIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Suggested Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Suggested 2-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to see the best of Beni Mellal and its surroundings in two days.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: City, Springs &amp; Kasbah
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at Kasbah Ras el-Ain for panoramic views over the city and Tadla plain.
                      Walk downhill through the Ain Asserdoun springs and gardens, enjoying the cascading
                      water and shaded terraces. Allow 2-3 hours for both sites. Stop for mint tea at a
                      garden cafe (from 8 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a local restaurant near the souk (tagine from 30 MAD). Explore the city
                      center and central market. If visiting on Tuesday, spend the afternoon at the
                      famous Tuesday souk. Otherwise, browse the permanent market for olives, olive oil,
                      and spices. Walk the main commercial streets and enjoy cafe culture (from 6 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Dinner at a restaurant near Place de la Liberte (from 40 MAD). Try local
                      specialties like trid or olive tagine. Evening promenade through the city center
                      with fresh juice (from 5 MAD) and pastries (from 3 MAD). Estimated Day 1 cost:
                      from 150-300 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Bin el-Ouidane or Ouzoud Falls
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option A: Bin el-Ouidane</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Drive or taxi to Bin el-Ouidane (50 km, 1 hour) via Afourer. Stop for citrus
                      at roadside stands. Explore the dam and walk along the lake. Rent a boat (from
                      100 MAD/hour) or swim in the turquoise waters. Lunch at a lakeside restaurant
                      (fish tagine from 60 MAD). Return via the scenic mountain road. Day cost: from
                      200-400 MAD.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option B: Ouzoud Falls</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Depart early for Ouzoud Falls (110 km, 1.5-2 hours via Azilal). Enter the park
                      (from 10 MAD) and descend to the base of the 110-meter falls. Swim in the natural
                      pools, take a boat ride through the mist (from 20 MAD), and watch Barbary macaques
                      in the trees. Lunch at a valley-floor restaurant (from 50 MAD). Return to Beni Mellal
                      by evening. Day cost: from 300-600 MAD including transport.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Public transport, street food, free attractions, city walks</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 600-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Taxi day trips, restaurant meals, boat rental, market shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private car/guide, both day trips, restaurant dining, olive oil shopping</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
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
            Ready to Explore Beni Mellal?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From cascading mountain springs and turquoise dam lakes to thundering waterfalls
            and olive groves stretching to the horizon, Beni Mellal is Morocco best-kept Atlas secret.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-atlas-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains Guide
            </Link>
            <Link
              href="/bin-el-ouidane"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Bin el-Ouidane
            </Link>
            <Link
              href="/morocco-road-trip-routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Road Trip Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
