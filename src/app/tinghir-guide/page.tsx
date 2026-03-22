import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Wind,
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
  Car,
  Shield,
  Thermometer,
  Flower2,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Tinghir Guide 2026 | Todra Gorge, Palm Oasis & Rock Climbing',
  description:
    'Discover Tinghir, Morocco gateway to Todra Gorge. 300-meter canyon walls, world-class rock climbing, palm oasis walks, old Jewish mellah, carpet cooperatives, Dades Valley connections, Rose Valley, and the Monday souk. Complete 2026 guide with prices in MAD.',
  keywords: [
    'tinghir morocco',
    'todra gorge',
    'tinghir guide',
    'tinghir to todra gorge',
    'rock climbing todra',
    'tinghir oasis',
    'todra gorge rock climbing',
    'tinghir palm grove',
    'tinghir mellah',
    'dades valley',
    'boumalne dades',
    'rose valley morocco',
    'kelaat mgouna',
    'tinghir monday souk',
    'tinghir kasbah',
    'todra gorge canyon',
    'tinghir 2026',
  ],
  openGraph: {
    title: 'Complete Tinghir Guide 2026 | Todra Gorge, Palm Oasis & Rock Climbing',
    description:
      'The complete guide to Tinghir: Todra Gorge with 300m canyon walls, world-class rock climbing, palm oasis walks, old Jewish mellah, carpet cooperatives, Rose Valley, and Dades connections. Prices in MAD.',
    url: `${BASE_URL}/tinghir-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tinghir.webp`,
        width: 1200,
        height: 630,
        alt: 'The towering 300-meter canyon walls of Todra Gorge near Tinghir Morocco with a river flowing through the narrow passage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Tinghir Guide 2026 | Todra Gorge & Palm Oasis',
    description:
      'Todra Gorge 300m canyon walls, rock climbing, palm oasis walks, old mellah, carpet cooperatives, Rose Valley, Dades Valley. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-tinghir.webp`],
  },
  alternates: { canonical: `${BASE_URL}/tinghir-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/tinghir-guide`,
  name: 'Complete Tinghir Guide 2026 | Todra Gorge, Palm Oasis & Rock Climbing',
  description:
    'Discover Tinghir and Todra Gorge. 300-meter canyon walls, rock climbing, palm oasis walks, old mellah, carpet cooperatives, Rose Valley, and Dades Valley connections.',
  url: `${BASE_URL}/tinghir-guide`,
  image: `${BASE_URL}/images/hero-tinghir.webp`,
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
  mainEntityOfPage: `${BASE_URL}/tinghir-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Tinghir',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tinghir Guide', item: `${BASE_URL}/tinghir-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How far is Todra Gorge from Tinghir?', acceptedAnswer: { '@type': 'Answer', text: 'Todra Gorge is about 15 km north of Tinghir, roughly a 20-minute drive. The road follows the Todra River upstream through a narrowing palm-filled valley, with the canyon walls gradually closing in until you reach the dramatic narrows where the walls rise 300 meters on either side. Grand taxis from Tinghir to the gorge cost from 30-50 MAD per person shared, or you can drive yourself on well-paved road.' } },
    { '@type': 'Question', name: 'Is Todra Gorge worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Todra Gorge is one of the most spectacular natural formations in Morocco. The narrowest point is only 10 meters wide with sheer walls rising 300 meters overhead — the scale is jaw-dropping. It is free to visit, excellent for rock climbing (hundreds of bolted routes), and the palm oasis walk from Tinghir to the gorge is beautiful. Even non-climbers find the gorge deeply impressive. It is one of the highlights of any trip to southern Morocco.' } },
    { '@type': 'Question', name: 'Can you rock climb at Todra Gorge?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Todra Gorge is one of the best rock climbing destinations in Africa and among the finest limestone climbing areas in the world. There are over 300 bolted sport climbing routes ranging from beginner (French grade 4) to expert (8c). The main climbing walls face west, offering shade in the morning and sun in the afternoon. Several local operators offer guided climbing and equipment rental from 300 MAD per half day. The climbing season runs year-round, with spring and autumn being ideal.' } },
    { '@type': 'Question', name: 'What is the best time to visit Tinghir?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) and autumn (September to November) are ideal, with comfortable temperatures (18-30 degrees) and clear skies. The Rose Valley harvest in May is a highlight. Summer (June to August) is very hot (38-42 degrees) but the gorge provides natural shade and cool air. Winter is mild during the day (15-20 degrees) but cold at night. The Monday souk in Tinghir is worth timing your visit around.' } },
    { '@type': 'Question', name: 'How many days do you need for Tinghir?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal. Day 1: Todra Gorge visit and palm oasis walk. Day 2: old mellah, kasbah quarter, Monday souk (if timing allows), and carpet cooperatives. Day 3: day trip to Dades Valley/Boumalne Dades or the Rose Valley at Kelaat M\'Gouna. Rock climbers often spend a week or more. A single full day covers the gorge and Tinghir basics.' } },
    { '@type': 'Question', name: 'How do I get to Tinghir?', acceptedAnswer: { '@type': 'Answer', text: 'Tinghir is on the N10 highway between Errachidia (about 2 hours east) and Ouarzazate (about 3 hours west). CTM and Supratours buses connect Tinghir to major cities including Marrakech (about 8 hours), Ouarzazate, Errachidia, and Fes. Grand taxis serve nearby towns. The nearest airports are Ouarzazate and Errachidia, both with limited domestic flights. Most travelers arrive by road as part of a southern Morocco circuit.' } },
  ],
};

/* ===============================================================
   DATA: TODRA GORGE EXPERIENCES
   =============================================================== */

const todraExperiences = [
  {
    name: 'Todra Gorge Canyon Walk',
    icon: Mountain,
    category: 'Natural Wonder',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning (best light, fewer crowds)',
    description:
      'Todra Gorge is one of the most dramatic natural formations in Morocco and among the most spectacular canyons in the world. The Todra River has carved a narrow passage through the eastern High Atlas, creating a canyon where vertical limestone walls rise 300 meters on either side, narrowing at points to just 10 meters wide. Walking through the gorge is an overwhelming sensory experience — the sheer scale of the walls, the cool air channeled through the narrows, the river flowing over smooth stone, and the play of light and shadow on the orange and grey rock faces. The main narrows are easily accessible on foot from the road, making this one of Morocco most approachable natural wonders.',
    insiderTip:
      'Visit early morning (before 10 AM) when the gorge is most dramatic — morning light illuminates the east-facing walls while the west walls remain in deep shadow, creating stunning contrast. By midday, tour groups arrive and the parking area fills. Walk beyond the main narrows (most tourists stop after 100 meters) to find quieter stretches upstream where the river pools between boulders. The water is cold year-round and refreshing on hot days. A flashlight reveals interesting rock formations in small side canyons.',
  },
  {
    name: 'Rock Climbing at Todra Gorge',
    icon: Mountain,
    category: 'Adventure Sport',
    price: 'From 300 MAD (half-day guided with gear) / Free (own equipment)',
    duration: '3-8 hours',
    bestTime: 'Morning (east-facing walls in shade) / Year-round',
    description:
      'Todra Gorge is one of the premier rock climbing destinations in Africa and a world-class limestone sport climbing area. Over 300 bolted routes span the canyon walls, ranging from beginner-friendly French grade 4 (5.5 YDS) to expert-level 8c (5.14b). The rock is excellent quality limestone — compact, featured, and generally well-protected. The main climbing area is the Pilier du Couchant (Sunset Pillar), a massive wall directly opposite the main narrows. Other popular sectors include Petite Gorge, Mansour, and the walls upstream. The natural amphitheater of the gorge provides built-in shade and spectators, creating an amphitheater-like atmosphere for climbers.',
    insiderTip:
      'For beginners, several operators in the gorge offer guided climbing with equipment rental from 300 MAD per half day, including harness, shoes, rope, and instruction. Routes in the 4-5 range (French) are plentiful and the bolting is generally good. Experienced climbers should bring their own gear. The best climbing months are March to May and September to November — summer afternoons can be extremely hot on sun-exposed walls. The climbing community is friendly; local guides like Said and Hassan at the Todra Gorge climbing shops are knowledgeable and welcoming.',
  },
  {
    name: 'Palm Oasis Walk: Tinghir to Todra Gorge',
    icon: TreesIcon,
    category: 'Nature Walk',
    price: 'Free',
    duration: '3-5 hours (one way on foot)',
    bestTime: 'Morning',
    description:
      'The walk from Tinghir to Todra Gorge through the palm oasis is one of the most beautiful hikes in southern Morocco and a far more rewarding way to reach the gorge than driving. The path follows the Todra River upstream through a 15-km ribbon of date palms, irrigated gardens, and earthen villages. The valley gradually narrows, the walls closing in from open agricultural land to the tight embrace of the canyon. Along the way you pass through small settlements where traditional irrigation channels (khettara and seguias) distribute water to terraced gardens of mint, vegetables, and fruit trees growing beneath the palms. The soundtrack is birdsong, flowing water, and the rustle of palm fronds.',
    insiderTip:
      'The full walk takes 3-5 hours one way depending on your pace and how often you stop. The path is generally obvious but ask for directions at villages — locals are helpful. Bring water and sun protection. Start early in the morning for the coolest temperatures and best light. Take a grand taxi back from the gorge to Tinghir (from 30 MAD shared) to save your legs. An alternative is to hire a bicycle (from 50 MAD per day) for the palm oasis route — the path is relatively flat with a gentle uphill gradient.',
  },
];

/* ===============================================================
   DATA: HERITAGE & CULTURE
   =============================================================== */

const heritageCulture = [
  {
    name: 'Old Jewish Mellah of Tinghir',
    icon: Landmark,
    category: 'Historical Heritage',
    price: 'Free (guide tip from 50 MAD)',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Tinghir was home to one of the largest Jewish communities in southern Morocco until the mid-20th century, and the old mellah (Jewish quarter) remains one of the best-preserved in the country. The quarter occupies a distinct section of the old town, identifiable by its narrower lanes, different doorway styles, and the remains of a synagogue. At its peak, the Jewish community numbered in the thousands and played a vital role in the local economy as silversmiths, traders, and artisans. The mellah tells a story of centuries of peaceful coexistence between Jewish, Muslim, and Amazigh communities in the oasis towns of southern Morocco.',
    insiderTip:
      'Hiring a local guide (from 50-100 MAD) is essential for understanding the mellah — the architecture looks similar to the surrounding areas without context. A good guide will show you the former synagogue, explain the distinctive doorway carvings, and share stories of the community that lived here until the 1960s. The Jewish cemetery on the outskirts of town is also worth visiting. This is a respectful and educational experience that adds depth to understanding Morocco multicultural heritage.',
  },
  {
    name: 'Kasbah Quarter & Old Town',
    icon: Globe,
    category: 'Heritage Architecture',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Late afternoon (golden light)',
    description:
      'Tinghir&apos;s old town is a labyrinth of narrow lanes, high pise (rammed earth) walls, and traditional kasbah architecture that predates the modern town by centuries. The kasbah quarter sits on a hillside overlooking the palm oasis, its defensive walls and watchtowers a testament to the era when oasis towns needed protection from desert raiders and rival tribes. Walking through the quarter reveals hidden courtyards, elaborately carved doorways, and views over the palm groves to the Atlas Mountains beyond. Some sections are crumbling romantically, while others have been restored and converted to guesthouses.',
    insiderTip:
      'The best panoramic view of Tinghir and the palm oasis is from the rooftop terrace of one of the kasbah guesthouses — even if not staying, you can often visit for the price of a mint tea (from 15 MAD). Late afternoon light is magical on the earthen walls. The old town is compact and easy to explore without a guide, but the kasbah quarter can be disorienting — if lost, head downhill toward the main road. Ask locals about the old olive press and the communal bread oven, still in use.',
  },
  {
    name: 'Traditional Irrigation Systems (Khettara)',
    icon: Waves,
    category: 'Engineering Heritage',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'The palm oasis of Tinghir is sustained by one of the most remarkable irrigation systems in Morocco — a network of khettara (underground channels), seguias (open channels), and distribution points that have managed water in this arid landscape for centuries. The khettara system works on the qanat principle: gently sloping tunnels dug underground from water sources to agricultural land, using gravity alone to transport water without evaporation. On the surface, you see a line of well-like access shafts across the landscape. The seguias at ground level distribute water to individual gardens on a strictly timed rotation schedule that ensures fair access for all farmers.',
    insiderTip:
      'The best way to see the irrigation systems is during the palm oasis walk between Tinghir and Todra Gorge. Listen for the sound of running water in the seguias and watch for the small stone and earth channels that branch off to individual gardens. A knowledgeable local guide can explain the water distribution schedule — it is a complex communal system that has been managed democratically for centuries. The Musee des Sources (Museum of Springs) in the oasis, if open, provides excellent context.',
  },
  {
    name: 'Carpet Cooperatives',
    icon: Sparkles,
    category: 'Artisan Craft',
    price: 'Free to visit (carpets from 300 MAD)',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning or afternoon',
    description:
      'The Tinghir region is known for its distinctive Amazigh (Berber) carpets, woven by women from the surrounding mountain villages using techniques passed down through generations. Several cooperatives in and around Tinghir welcome visitors to watch the weaving process and learn about the symbolism woven into each carpet. The designs feature geometric patterns in bold reds, blacks, and creams — each motif representing elements from Amazigh cosmology: fertility symbols, protective eyes against evil, mountain and river patterns, and ancestral markers. Buying directly from cooperatives ensures fair prices for the weavers.',
    insiderTip:
      'Visit a cooperative rather than a roadside carpet shop — cooperatives pay the weavers directly and prices are more transparent. A good-quality handwoven Amazigh carpet starts from 300 MAD for a small piece and from 1,000-3,000 MAD for larger rugs. The weaving process for a single large carpet can take several months. Ask to see the natural dyes — pomegranate, henna, saffron, and indigo produce the traditional colors. The cooperatives are happy to explain the symbolism of patterns — every carpet tells a story.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & CONNECTIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Dades Valley & Boumalne Dades',
    icon: Mountain,
    category: 'Day Trip',
    price: 'From 20 MAD (grand taxi) / From 200 MAD (private car)',
    duration: 'Full day',
    bestTime: 'Morning start',
    description:
      'The Dades Valley, 50 km west of Tinghir, is Todra Gorge&apos;s twin canyon — equally dramatic but with a different character. The Dades Gorge features winding roads through red rock formations, the famous "Road of a Thousand Kasbahs" with crumbling fortified villages clinging to the valley walls, and bizarre rock formations known as "Monkey Fingers" (doigts de singes) at the valley&apos;s narrowest point. Boumalne Dades, the gateway town, sits at the confluence of the Dades and Mgoun rivers and offers excellent views, a lively souk, and several atmospheric kasbah hotels perched on the cliff edge.',
    insiderTip:
      'The Dades Gorge road narrows dramatically above Boumalne Dades, with hairpin bends and sheer drops — it is thrilling but not for nervous drivers. The "Monkey Fingers" rock formation (about 25 km up the gorge from Boumalne) is the visual highlight. Several kasbah hotels at the gorge entrance offer terrace lunches with stunning valley views (from 80 MAD for a tagine). Combine Dades with Todra for a "Gorge Loop" — one of the great driving circuits of southern Morocco. Grand taxi from Tinghir to Boumalne costs from 20 MAD shared.',
  },
  {
    name: 'Rose Valley & Kelaat M&apos;Gouna',
    icon: Flower2,
    category: 'Day Trip',
    price: 'From 15 MAD (grand taxi to Kelaat M&apos;Gouna)',
    duration: 'Half day to full day',
    bestTime: 'May (rose harvest) / Any time for valley views',
    description:
      'The Rose Valley (Vallee des Roses), centered on the town of Kelaat M&apos;Gouna about 55 km west of Tinghir, is Morocco&apos;s perfume capital. Each May, the valley explodes into color as millions of Damask roses bloom along the roadsides, in gardens, and on terraced hillsides. The annual Rose Festival (Festival des Roses) in mid-May draws thousands of visitors for a celebration of music, dance, and the coronation of a Rose Queen. Even outside the harvest season, rose cooperatives offer tours of their distilleries and sell rosewater, rose oil, cosmetics, and dried rosebuds. The landscape — red-rock gorges, green terraces, and snow-capped Atlas peaks — is magnificent year-round.',
    insiderTip:
      'If visiting in May, the Rose Festival is a riot of color and celebration — arrive early as accommodation fills quickly. The festival typically runs for three days in mid-May, centered in Kelaat M&apos;Gouna. Outside the harvest season, rose products are available year-round at cooperatives (rosewater from 30 MAD, rose oil from 100 MAD). The drive from Tinghir to Kelaat M&apos;Gouna along the N10 passes through dramatic scenery. Grand taxis cost from 15 MAD shared. For rose enthusiasts, the Bio Aroma cooperative offers excellent tours of their organic distillery.',
  },
  {
    name: 'Road to Errachidia via Tinjdad',
    icon: Car,
    category: 'Scenic Drive',
    price: 'From 25 MAD (grand taxi) / Fuel costs',
    duration: 'Half day (transit)',
    bestTime: 'Morning',
    description:
      'The road east from Tinghir to Errachidia (about 120 km, 2 hours) passes through some of the most evocative oasis landscapes in southern Morocco. The route follows the N10 through Tinjdad and its palm grove, past scattered ksour (fortified villages) and kasbah ruins, and through increasingly arid terrain as the Atlas Mountains recede behind you. This is the road that connects the "Gorge Country" around Tinghir with the "Desert Country" around Errachidia and the Ziz Valley. The journey itself is a highlight, not merely transit — every kilometer reveals new variations on the theme of human settlement in arid landscapes.',
    insiderTip:
      'Stop in Tinjdad (about 50 km east of Tinghir) for its palm grove walk and the Museum of Oasis if open. The landscapes between Tinjdad and Errachidia become increasingly stark and beautiful. This route connects naturally with the Ziz Valley and the road to Merzouga, making it part of the classic southern Morocco loop. Grand taxis from Tinghir to Errachidia cost from 25-40 MAD per person shared. If driving, there are fuel stations in Tinjdad and Goulmima.',
  },
];

/* ===============================================================
   DATA: MARKETS & LOCAL LIFE
   =============================================================== */

const marketsLife = [
  {
    name: 'Tinghir Monday Souk',
    icon: ShoppingBag,
    category: 'Weekly Market',
    price: 'Free to browse',
    duration: '1-2 hours',
    bestTime: 'Monday morning (8 AM - 12 PM)',
    description:
      'The Monday souk in Tinghir is one of the largest weekly markets in the region, drawing farmers, artisans, and traders from across the surrounding valleys and mountains. The souk sprawls across a large open area near the town center, divided into sections for produce, spices, livestock, textiles, household goods, and clothing. Amazigh women from mountain villages sell hand-loomed fabrics, embroidered cloths, and traditional medicines. The spice section is fragrant and colorful, with pyramids of cumin, paprika, ras el hanout, and local herbs. The livestock market, where sheep, goats, and donkeys change hands, is a window into rural Moroccan life that has barely changed in centuries.',
    insiderTip:
      'The souk is busiest between 8 AM and noon — arrive early for the best experience. The vegetable and fruit section has incredibly fresh produce at rock-bottom prices. Look for locally produced argan oil (from 100 MAD per liter) and dried herbs unique to the region. The textile section has handwoven Amazigh blankets and fabrics at far lower prices than tourist shops (from 100 MAD for a small blanket). Bring small bills and be prepared for friendly bargaining. The atmosphere is genuine and photogenic — ask before photographing individuals.',
  },
  {
    name: 'Tinghir Local Cuisine',
    icon: UtensilsCrossed,
    category: 'Food & Dining',
    price: 'From 30 MAD (local restaurant)',
    duration: '1-2 hours',
    bestTime: 'Lunch (12-3 PM) or dinner (7-9 PM)',
    description:
      'Tinghir&apos;s cuisine reflects its oasis setting and Amazigh heritage. The staples are tagine (slow-cooked stew with vegetables, olives, and preserved lemons, or with prunes and almonds), couscous (traditionally on Fridays), and trid (a layered pastry with chicken and lentils that is a regional specialty). The local dates, almonds, and walnuts from the palm oasis feature in desserts and pastries. Simple restaurants near the main street serve generous tagines from 30-40 MAD with fresh bread, salad, and mint tea. The more upscale kasbah restaurants offer refined versions of traditional dishes with stunning valley views.',
    insiderTip:
      'For the most authentic experience, eat at a small local restaurant (look for places busy with locals, not tourists). Tagine with vegetables and olives from 30 MAD, with meat from 40-50 MAD. The local almond pastries (available at bakeries, from 5 MAD each) are delicious. For a special meal, dine at a kasbah restaurant overlooking the oasis — tagines from 60-100 MAD but the setting is worth the premium. Ask about trid — it is rarely on tourist menus but widely loved locally.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Walk to Todra Gorge', icon: Footprints, description: 'The palm oasis walk from Tinghir to Todra Gorge (15 km) is free and one of the best hikes in southern Morocco. Take a grand taxi back (from 30 MAD shared) to save time and legs.', savings: 'Free — and more rewarding than driving' },
  { tip: 'Free Gorge Entry', icon: Mountain, description: 'Todra Gorge itself has no entrance fee — it is a public natural wonder. You only pay for parking (from 10 MAD) if driving, or a grand taxi if not walking.', savings: 'Free — no entrance fee required' },
  { tip: 'Buy Carpets at Cooperatives', icon: Sparkles, description: 'Buy directly from women weaving cooperatives (small pieces from 300 MAD) rather than tourist shops in Marrakech or Fes where identical carpets sell for 3-10x the price.', savings: 'Save from 200-2,000 MAD per carpet' },
  { tip: 'Shared Grand Taxis', icon: Car, description: 'Grand taxis from Tinghir to Boumalne Dades (from 20 MAD), to Errachidia (from 25 MAD), and to Kelaat M\'Gouna (from 15 MAD) are extremely affordable. Private hire costs 5-10x more.', savings: 'Save from 80-200 MAD per trip' },
  { tip: 'Monday Souk Shopping', icon: ShoppingBag, description: 'The Monday souk offers the lowest prices in the region for produce, spices, textiles, and household goods. Buy argan oil, spices, and handwoven fabrics here at local prices, not tourist markups.', savings: 'Save from 30-50% vs. tourist prices' },
  { tip: 'Kasbah Guesthouse Rooftop Tea', icon: Coffee, description: 'Instead of paying for a guided tour, visit a kasbah guesthouse for a rooftop mint tea (from 15 MAD). You get the panoramic view and the atmosphere for the price of a drink.', savings: 'Save from 100-200 MAD vs. guided tour' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Gorge Timing Matters', icon: Clock, description: 'Visit Todra Gorge early morning (before 10 AM) or late afternoon. Midday brings tour buses and the gorge loses its magical atmosphere. The morning light on the east walls and afternoon light on the west walls are equally spectacular but different.' },
  { tip: 'Climbing Season', icon: Mountain, description: 'Rock climbing at Todra is possible year-round but spring (March-May) and autumn (September-November) are ideal. Summer afternoons are too hot on sun-exposed walls. Winter mornings can be cold but afternoons are pleasant. The climbing community congregates in guesthouses near the gorge entrance.' },
  { tip: 'Flash Flood Awareness', icon: AlertTriangle, description: 'The gorge and river valley can flash flood after heavy rain, even if rain falls far upstream. Do not camp in the riverbed. If water levels rise suddenly, move to high ground immediately. Check weather conditions before entering the gorge, especially in spring and autumn.' },
  { tip: 'Photography Tips', icon: Camera, description: 'The gorge narrowest section photographs best with a wide-angle lens (14-24mm). For climbing photography, a 70-200mm lens captures detail on the walls. The palm oasis walk is best documented with a standard zoom. A polarizing filter cuts haze and enriches the blue sky against red rock.' },
  { tip: 'Respect Oasis Communities', icon: Heart, description: 'The palm oasis is private agricultural land. Stay on paths, do not pick fruit, and ask before entering gardens. Many families welcome visitors for tea if approached respectfully. A warm "salaam alaikum" and a genuine interest in their gardens opens many doors.' },
  { tip: 'Combine the Gorge Loop', icon: Compass, description: 'The classic "Gorge Loop" connects Tinghir (Todra Gorge) with Boumalne Dades (Dades Gorge) via a mountain road over the Atlas. In a rental car, the full loop is about 150 km and one of the most scenic drives in Morocco. Allow a full day.' },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  { question: 'How far is Todra Gorge from Tinghir?', answer: 'About 15 km or 20 minutes by car. Grand taxis from Tinghir cost from 30-50 MAD per person shared. The palm oasis walk from Tinghir to the gorge takes 3-5 hours and is one of the best hikes in southern Morocco. The road is paved the entire way.' },
  { question: 'Is Todra Gorge worth visiting?', answer: 'Absolutely. Todra Gorge is one of Morocco most spectacular natural formations — 300-meter vertical walls narrowing to just 10 meters wide. It is free to enter, excellent for rock climbing (300+ bolted routes), and the approach through the palm oasis is beautiful. It is a highlight of any southern Morocco trip.' },
  { question: 'Can you rock climb at Todra Gorge?', answer: 'Yes, Todra is a world-class sport climbing destination with over 300 bolted routes from French grade 4 to 8c. Several local operators offer guided climbing and gear rental from 300 MAD per half day. The limestone is excellent quality. Spring and autumn are the best seasons. The climbing community is welcoming to all levels.' },
  { question: 'What is the best time to visit Tinghir?', answer: 'Spring (March-May) and autumn (September-November) are ideal with comfortable temperatures. May brings the Rose Festival in nearby Kelaat M\'Gouna. Summer is very hot (38-42 degrees) but the gorge provides shade. Winter days are pleasant but nights are cold. The Monday souk is worth timing your visit around.' },
  { question: 'How many days do you need for Tinghir?', answer: 'Two to three days covers the highlights: Day 1 for Todra Gorge and the palm oasis walk, Day 2 for the old town, mellah, and carpet cooperatives, and Day 3 for a day trip to Dades Valley or Rose Valley. Rock climbers often stay a week or more. A single day covers the gorge basics.' },
  { question: 'How do I get to Tinghir?', answer: 'Tinghir is on the N10 between Errachidia (2 hours east) and Ouarzazate (3 hours west). CTM and Supratours buses connect to Marrakech (8 hours), Ouarzazate, Errachidia, and Fes. Grand taxis serve nearby towns. Most travelers arrive by road as part of a southern Morocco loop.' },
  { question: 'What is the Rose Valley near Tinghir?', answer: 'The Rose Valley (Vallee des Roses), centered on Kelaat M\'Gouna about 55 km west of Tinghir, is famous for its Damask rose plantations. The annual Rose Festival in mid-May is a major cultural event. Rose products (rosewater from 30 MAD, rose oil from 100 MAD) are available year-round at cooperatives. The valley scenery is magnificent.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/errachidia-guide', icon: Compass, title: 'Errachidia Guide', description: 'Ziz Gorge, Source Bleue de Meski, Tafilalet oasis, and the eastern road to Merzouga.' },
  { href: '/zagora-guide', icon: MapPin, title: 'Zagora Guide', description: 'Draa Valley, Tamegroute pottery, desert camps, and the road to M\'hamid.' },
  { href: '/sahara-desert', icon: Globe, title: 'Sahara Desert Guide', description: 'Complete guide to Erg Chebbi, Erg Chigaga, camel treks, and desert camps.' },
  { href: '/morocco-road-trip-routes', icon: Car, title: 'Road Trip Routes', description: 'Scenic driving routes including the Gorge Loop and Atlas crossings.' },
  { href: '/budget-travel', icon: Lightbulb, title: 'Morocco Budget Guide', description: 'How to travel Morocco on a budget with prices, tips, and strategies.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TinghirGuidePage() {
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
            backgroundImage: 'url(/images/hero-tinghir.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tinghir Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Tinghir
            <br className="hidden md:block" /> City Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Gateway to the towering walls of Todra Gorge, a world-class climbing destination, and one of
            Morocco&apos;s most beautiful palm oases. Your complete 2026 guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Tinghir: Palm Oasis at the Foot of the Atlas
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tinghir sits in the lap of the eastern High Atlas, at the point where the mountains
                begin their surrender to the Sahara. Above the town, the Todra River has carved one
                of the most dramatic canyons on Earth — Todra Gorge, where limestone walls rise 300
                meters straight up from the riverbed, narrowing at points to just 10 meters. Below,
                the river feeds a magnificent palm oasis that stretches for kilometers, a green ribbon
                of date palms, almond trees, and irrigated gardens sustained by ancient underground
                water channels called khettara.
              </p>
              <p>
                Tinghir itself is a working Amazigh (Berber) town rather than a tourist creation. Its
                old kasbah quarter climbs a hillside above the oasis, its lanes shadowed by high earthen
                walls. An old Jewish mellah testifies to centuries of multicultural coexistence. Weekly
                souks bring mountain and oasis communities together in an exchange of goods and gossip
                that has continued for generations. Carpet cooperatives preserve weaving traditions that
                encode Amazigh identity in every knot and pattern.
              </p>
              <p>
                This guide covers everything in the Tinghir region: the awe-inspiring Todra Gorge,
                world-class rock climbing, the palm oasis walk, the old mellah and kasbah quarter,
                traditional carpet cooperatives, the Monday souk, day trips to Dades Valley and Rose
                Valley, and practical information for making the most of this remarkable corner of
                southern Morocco.
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
            Top 10 Tinghir Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From towering canyon walls and world-class climbing to palm oasis walks and Amazigh
            carpet weaving traditions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Todra Gorge Canyon Walk', price: 'Free', time: '1-2 hours', category: 'Natural Wonder' },
              { rank: 2, name: 'Rock Climbing at Todra', price: 'From 300 MAD (guided)', time: '3-8 hours', category: 'Adventure' },
              { rank: 3, name: 'Palm Oasis Walk', price: 'Free', time: '3-5 hours', category: 'Nature Walk' },
              { rank: 4, name: 'Old Jewish Mellah', price: 'Free (tip from 50 MAD)', time: '45 min', category: 'Heritage' },
              { rank: 5, name: 'Kasbah Quarter & Old Town', price: 'Free', time: '1-1.5 hours', category: 'Architecture' },
              { rank: 6, name: 'Carpet Cooperatives', price: 'Free to visit', time: '30 min - 1 hour', category: 'Artisan' },
              { rank: 7, name: 'Monday Souk', price: 'Free', time: '1-2 hours', category: 'Market' },
              { rank: 8, name: 'Dades Valley Day Trip', price: 'From 20 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 9, name: 'Rose Valley (Kelaat M\'Gouna)', price: 'From 15 MAD', time: 'Half day', category: 'Day Trip' },
              { rank: 10, name: 'Khettara Irrigation Systems', price: 'Free', time: '1-2 hours', category: 'Heritage' },
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

      {/* -- Todra Gorge Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Todra Gorge &amp; Natural Wonders
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The towering 300-meter walls of Todra Gorge, world-class rock climbing, and the
            spectacular palm oasis walk from Tinghir.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Todra Gorge is 15 km from Tinghir. Visit early morning for the best experience and fewest crowds.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {todraExperiences.map((attraction) => {
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

      {/* -- Heritage & Culture -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Heritage &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            An old Jewish mellah, earthen kasbah quarters, ancient irrigation engineering, and
            Amazigh carpet weaving traditions that encode centuries of identity.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            A local guide (from 50 MAD tip) enriches heritage visits significantly. Cooperatives welcome drop-in visitors.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {heritageCulture.map((item) => {
              const HerIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HerIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Day Trips & Connections -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Connections
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tinghir is ideally positioned for day trips to the Dades Valley, Rose Valley, and the
            scenic road east to Errachidia.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Grand taxis connect Tinghir to all nearby towns at very affordable prices. The N10 highway is well-paved.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((item) => {
              const TripIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Markets & Local Life -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Markets &amp; Local Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The vibrant Monday souk and the authentic oasis cuisine of the Tinghir region.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Monday souk is the main market day. Local restaurants serve generous tagines from 30 MAD.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {marketsLife.map((item) => {
              const MktIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MktIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Tinghir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tinghir and Todra Gorge are already very affordable. These tips help you get the most value.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Tinghir
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential knowledge for getting the most out of Todra Gorge and the Tinghir oasis.
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

      {/* -- Sample 2-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Tinghir Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan for experiencing Todra Gorge, the palm oasis, and Tinghir&apos;s cultural heritage.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Todra Gorge &amp; Palm Oasis
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start early and walk from Tinghir to Todra Gorge through the palm oasis (15 km, 3-5 hours).
                      Follow the Todra River upstream through date palms and irrigated gardens. Alternatively,
                      take a grand taxi (from 30 MAD shared) and arrive before 10 AM to experience the gorge
                      before tour groups. Walk through the narrows, marveling at the 300-meter walls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      If interested in climbing, join a guided session (from 300 MAD half day with gear). If not,
                      explore upstream beyond the main narrows and watch the climbers on the walls. Lunch at a
                      gorge restaurant (tagine from 40 MAD). Take a grand taxi back to Tinghir. Visit a carpet
                      cooperative in the late afternoon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset from a kasbah rooftop terrace with mint tea (from 15 MAD). Dinner at a local
                      restaurant — tagine from 30 MAD or splurge at a kasbah restaurant with oasis views
                      (from 60 MAD). Rest well for tomorrow. Estimated Day 1 cost: from 100-400 MAD.
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
                  Day 2: Old Town, Mellah &amp; Dades Valley
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Explore Tinghir old town: the kasbah quarter, the Jewish mellah (with a local guide,
                      tip from 50 MAD), and the traditional khettara irrigation systems. If it is Monday, visit
                      the weekly souk for local produce, spices, and Amazigh textiles at the best prices in
                      the region.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Option A: Day trip to Dades Valley and Boumalne Dades (50 km west, grand taxi from 20 MAD).
                      See the &quot;Monkey Fingers&quot; rock formation and lunch at a kasbah restaurant with gorge
                      views. Option B: Drive to Rose Valley and Kelaat M&apos;Gouna (55 km, grand taxi from 15 MAD)
                      for rose cooperative visits and stunning Atlas scenery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Tinghir for a final evening. Walk through the palm oasis at sunset. Farewell
                      dinner with views. Tomorrow: continue east to Errachidia and the Sahara, or west to
                      Ouarzazate. Estimated Day 2 cost: from 100-300 MAD.
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 150-350 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free gorge, oasis walk, local food, shared taxis, souk shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-900 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Guided climbing, carpet shopping, Dades day trip, kasbah dining</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private guides, premium carpets, Rose Valley trip, restaurant dining</p>
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
            Continue Planning Your Southern Morocco Trip
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
            Ready to Explore Tinghir &amp; Todra Gorge?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the awe-inspiring 300-meter walls of Todra Gorge and world-class rock climbing to
            peaceful palm oasis walks and centuries-old weaving traditions, Tinghir is one of southern
            Morocco&apos;s great surprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/errachidia-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Errachidia &amp; Ziz Valley
            </Link>
            <Link
              href="/zagora-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Zagora &amp; Draa Valley
            </Link>
            <Link
              href="/morocco-road-trip-routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Car className="w-5 h-5" />
              Road Trip Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
