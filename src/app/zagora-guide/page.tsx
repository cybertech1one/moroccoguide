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
  Palette,
  BookOpen,
  Shield,
  Thermometer,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Zagora Guide 2026 | Draa Valley, Desert & Tamegroute',
  description:
    'Discover Zagora, Morocco gateway to the Sahara via the Draa Valley. The famous Timbuktu 52 Days sign, Draa palm groves, Erg Lihoudi dunes, Tamegroute pottery, Jebel Zagora hike, Amazrou mellah, M\'hamid el Ghizlane, and camel treks. Complete 2026 guide with prices in MAD.',
  keywords: [
    'zagora morocco',
    'draa valley',
    'zagora desert',
    'tamegroute pottery',
    'zagora guide',
    'zagora to m\'hamid',
    'tomboctou 52 jours',
    'erg lihoudi',
    'jebel zagora',
    'amazrou mellah',
    'zagora camel trek',
    'n\'kob kasbahs',
    'draa valley morocco',
    'zagora travel guide',
    'm\'hamid el ghizlane',
    'zagora oasis',
    'zagora 2026',
  ],
  openGraph: {
    title: 'Complete Zagora Guide 2026 | Draa Valley, Desert & Tamegroute',
    description:
      'The complete guide to Zagora: Draa Valley palm groves, Tamegroute green ceramics, Jebel Zagora sunset hike, Erg Lihoudi dunes, Amazrou Jewish quarter, and camel treks to the Sahara. Prices in MAD.',
    url: `${BASE_URL}/zagora-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-zagora.webp`,
        width: 1200,
        height: 630,
        alt: 'View of the Draa Valley palm groves stretching toward the Sahara with Jebel Zagora mountain in the background near Zagora Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Zagora Guide 2026 | Draa Valley & Sahara Gateway',
    description:
      'Draa Valley palms, Tamegroute pottery, Jebel Zagora sunset, Erg Lihoudi dunes, Amazrou mellah, and camel treks to M\'hamid. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-zagora.webp`],
  },
  alternates: { canonical: `${BASE_URL}/zagora-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/zagora-guide`,
  name: 'Complete Zagora Guide 2026 | Draa Valley, Desert & Tamegroute',
  description:
    'Discover Zagora and the Draa Valley. Tamegroute green ceramics, Jebel Zagora sunset, Erg Lihoudi dunes, Amazrou Jewish quarter, camel treks, and the road to M\'hamid.',
  url: `${BASE_URL}/zagora-guide`,
  image: `${BASE_URL}/images/hero-zagora.webp`,
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
  mainEntityOfPage: `${BASE_URL}/zagora-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Zagora',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Zagora Guide', item: `${BASE_URL}/zagora-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the famous sign in Zagora?', acceptedAnswer: { '@type': 'Answer', text: 'The famous "Tomboctou 52 Jours" (Timbuktu 52 Days) sign is Zagora most iconic landmark. Located at the entrance to the town, it marks the start of the ancient caravan route across the Sahara to Timbuktu in modern-day Mali. The "52 days" refers to the journey time by camel. The sign has become one of Morocco most photographed landmarks and symbolizes Zagora identity as a gateway to the Sahara.' } },
    { '@type': 'Question', name: 'Is Zagora worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Zagora is well worth visiting. It offers a different Sahara experience from the more touristy Merzouga. The Draa Valley palm groves are among the most beautiful in Morocco, Tamegroute green ceramics are unique, Jebel Zagora provides stunning sunset views, and the road south to M\'hamid leads to genuinely remote desert. Zagora is also less crowded and more affordable than the Merzouga route.' } },
    { '@type': 'Question', name: 'How far is Zagora from Ouarzazate?', acceptedAnswer: { '@type': 'Answer', text: 'Zagora is approximately 160 km (about 3 hours) southeast of Ouarzazate via the N9 highway. The drive follows the spectacular Draa Valley, passing through Agdz and the Tizi n\'Tinifift mountain pass. It is one of the most scenic drives in Morocco, with date palm oases, kasbahs, and dramatic desert landscapes throughout.' } },
    { '@type': 'Question', name: 'What is Tamegroute known for?', acceptedAnswer: { '@type': 'Answer', text: 'Tamegroute, 20 km south of Zagora, is famous for two things: its distinctive green-glazed ceramics, produced in traditional workshops using techniques unchanged for centuries, and its Koranic library, one of the oldest in the Sahara, containing rare manuscripts dating to the 11th century. The green pottery, colored by a copper-manganese glaze, is unique to Tamegroute and makes an excellent souvenir.' } },
    { '@type': 'Question', name: 'Can you do a camel trek from Zagora?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, camel treks from the Zagora area are popular and range from 1-hour sunset rides (from 150 MAD) to overnight desert camping experiences (from 400 MAD). Multi-day treks of 2-3 days head south toward M\'hamid el Ghizlane and the Erg Lihoudi or Erg Chigaga dunes. The Zagora/M\'hamid route offers a less commercial desert experience than Merzouga.' } },
    { '@type': 'Question', name: 'What is the best time to visit Zagora?', acceptedAnswer: { '@type': 'Answer', text: 'October to April is best. Zagora holds the record for Morocco highest recorded temperature (over 50 degrees Celsius), so summer (June to September) is extremely hot and not recommended. Spring (March-April) and autumn (October-November) offer pleasant temperatures (20-30 degrees) and the date palms are lush. The annual Moussem festival in October celebrates the date harvest.' } },
  ],
};

/* ===============================================================
   DATA: ICONIC LANDMARKS
   =============================================================== */

const iconicLandmarks = [
  {
    name: 'Tomboctou 52 Jours Sign',
    icon: Compass,
    category: 'Iconic Landmark',
    price: 'Free',
    duration: '15-30 minutes',
    bestTime: 'Morning (best light for photos)',
    description:
      'The famous "Tomboctou 52 Jours" (Timbuktu 52 Days) sign is the single most iconic image of Zagora and one of the most photographed landmarks in all of Morocco. Standing at the edge of town, the weathered directional sign points south-southeast across the Sahara toward Timbuktu in modern-day Mali, 1,576 km away. The "52 days" refers to the journey time by camel caravan — a route that was actively used for centuries to transport gold, salt, slaves, and goods across the desert. The sign encapsulates Zagora&apos;s romantic identity as the last outpost of civilization before the great emptiness of the Sahara.',
    insiderTip:
      'The sign is located on a small promontory at the southern edge of Zagora, near the main roundabout. Morning light is best for photography as the sign faces roughly south and is front-lit in the AM. There are often local vendors selling desert scarves and souvenirs nearby. The sign has been replaced several times — the current version is a replica of the original, but the spirit remains authentic.',
  },
  {
    name: 'Jebel Zagora Sunset Hike',
    icon: Mountain,
    category: 'Hiking & Viewpoint',
    price: 'Free',
    duration: '1.5-2.5 hours (round trip)',
    bestTime: 'Late afternoon (arrive summit 1 hour before sunset)',
    description:
      'Jebel Zagora (Mountain of Zagora) rises directly behind the town, a dark volcanic ridge that offers one of the most spectacular sunset viewpoints in southern Morocco. The hike to the summit follows a rough but manageable trail, climbing about 300 meters in elevation through rocky terrain. At the top, the ruins of an 11th-century Almoravid fortress crown the ridge. The reward is a 360-degree panorama: the entire Draa Valley stretching north and south in a ribbon of green palms, the town of Zagora below, and the vast emptiness of the hammada (rocky desert) extending toward the Sahara in every direction. At sunset, the light turns the landscape to molten gold.',
    insiderTip:
      'Start the hike about 1.5 hours before sunset to reach the summit comfortably. Bring a headlamp or phone flashlight for the descent in twilight. The trail starts from the eastern edge of town — ask at your hotel for directions. Bring at least 1 liter of water per person. The summit is windy so bring a light layer. The Almoravid ruins at the top are minimal but historically significant — this was one of the dynasty staging posts for their conquest of Morocco and Spain.',
  },
  {
    name: 'Draa Valley Palm Groves',
    icon: TreesIcon,
    category: 'Natural Landscape',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The Draa Valley is one of the great natural wonders of Morocco — a 200-km-long river of date palms, irrigated fields, and earthen villages snaking through an otherwise barren desert landscape from Ouarzazate to Zagora and beyond. The section around Zagora is particularly lush, with the Draa River (when it flows) nurturing an estimated 1.8 million date palms alongside almond, olive, and henna plantations. Walking through the palmerie is a sensory experience: the dappled shade, the sound of irrigation water in the seguias, the scent of mint growing wild, and the sight of women in brightly colored robes working in the gardens beneath the palms.',
    insiderTip:
      'The best walking route through the palm groves is from Zagora toward Amazrou (about 2 km). Follow the paths along the irrigation channels. Early morning is magical with mist and birdsong. The date harvest (October-November) is the most atmospheric time — families climb the palms and lower great bunches of dates on ropes. Ask permission before entering private gardens. A bicycle (rentable from some hotels, from 50 MAD per day) is an excellent way to explore further stretches of the valley.',
  },
];

/* ===============================================================
   DATA: CULTURAL HERITAGE
   =============================================================== */

const culturalHeritage = [
  {
    name: 'Tamegroute: Green Ceramics & Koranic Library',
    icon: Palette,
    category: 'Pottery & Heritage',
    price: 'Free (ceramics from 30 MAD to purchase)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'Tamegroute, a small village 20 km south of Zagora, is home to two treasures. First, the distinctive green-glazed pottery workshops, where artisans produce the iconic Tamegroute ceramics using techniques and kilns that have barely changed in centuries. The green color comes from a copper-manganese glaze that produces unique variations — no two pieces are exactly alike. The workshops are open to visitors and watching the potters at work is mesmerizing. Second, the Tamegroute Zaouia (religious complex) houses one of the oldest Koranic libraries in the Sahara, containing illuminated manuscripts, astronomical texts, and Qurans dating to the 11th century.',
    insiderTip:
      'Visit the pottery workshops first (they are on the main road, impossible to miss). You can watch the entire process from clay preparation to glazing to wood-fired kilns. Prices are very reasonable — small bowls from 30 MAD, larger platters from 80-150 MAD. The Koranic library requires modest dress and sometimes a small donation. The manuscripts are displayed in glass cases and the calligraphy is extraordinary. Combine Tamegroute with a drive further south to M&apos;hamid for a full day trip.',
  },
  {
    name: 'Amazrou Mellah (Jewish Quarter)',
    icon: Landmark,
    category: 'Historical Heritage',
    price: 'Free (guide tip from 50 MAD)',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Amazrou, a village within walking distance of Zagora across the palmerie, contains one of the best-preserved Jewish quarters (mellahs) in southern Morocco. Before the mid-20th century, Jewish communities were an integral part of oasis life throughout the Draa Valley, working as silversmiths, traders, and craftsmen. The Amazrou mellah features a narrow lane of homes with distinctive doorways (sometimes bearing carved Stars of David), a former synagogue, and a Jewish cemetery on the outskirts. A local guide from the village can unlock buildings and share the history of coexistence between Jewish, Muslim, and Amazigh communities.',
    insiderTip:
      'Hiring a local guide (from 50-100 MAD) is strongly recommended — they can access buildings that are otherwise locked and provide historical context. The walk from Zagora to Amazrou through the palm groves takes about 30 minutes and is beautiful in itself. The Jewish community departed mostly in the 1950s and 1960s for Israel, but their architectural legacy remains. This is a sensitive and respectful visit — your guide will set the appropriate tone.',
  },
  {
    name: 'N&apos;Kob: Village of 45 Kasbahs',
    icon: Landmark,
    category: 'Heritage Architecture',
    price: 'Free to explore',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The village of N&apos;Kob (also spelled Nkob), located about 70 km northeast of Zagora on the road toward Tinghir, is remarkable for its concentration of over 45 kasbahs clustered in a single oasis. These fortified tower-houses, built from pise (rammed earth), were the homes of prominent Amazigh families and represent one of the finest collections of traditional defensive architecture in Morocco. The kasbahs range from the crumbling to the carefully restored, their crenelated towers rising above the palm groves. Some have been converted to guesthouses, allowing visitors to sleep within centuries-old walls.',
    insiderTip:
      'N&apos;Kob is an excellent lunch stop if driving between Zagora and Tinghir/Todra Gorge. The Kasbah Baha Baha and Kasbah Meteorites offer good traditional lunches (from 60 MAD). Ask locally about visiting a kasbah interior — some families welcome visitors for a small tip (from 20 MAD). The setting with dozens of mud-brick towers against the mountain backdrop is magnificent for photography, especially in late afternoon light.',
  },
  {
    name: 'Ancient Kasbah Quarter of Zagora',
    icon: Globe,
    category: 'Heritage Walk',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon',
    description:
      'Zagora&apos;s old town contains remnants of its kasbah heritage — earthen tower-houses and defensive walls that once protected the settlement from desert raiders and rival tribes. While less dramatic than Ait Benhaddou or the kasbahs of N&apos;Kob, the old quarter offers an authentic glimpse into the layered history of a Draa Valley trading town. The narrow lanes between high pise walls are atmospheric and largely free of tourists. Some kasbahs have been renovated into boutique guesthouses and cultural centers, blending traditional architecture with modern comfort.',
    insiderTip:
      'Wander the old quarter in the late afternoon when the shadows are long and the heat has subsided. The contrast between the crumbling old kasbahs and the modern town center tells the story of urban change in southern Morocco. If staying at a kasbah guesthouse, ask the owners about the building history — many have fascinating stories spanning several generations.',
  },
];

/* ===============================================================
   DATA: DESERT EXPERIENCES
   =============================================================== */

const desertExperiences = [
  {
    name: 'Erg Lihoudi (Desert Dunes)',
    icon: Compass,
    category: 'Desert Experience',
    price: 'From 150 MAD (sunset camel ride) / From 400 MAD (overnight camp)',
    duration: '2 hours (sunset) to overnight',
    bestTime: 'Late afternoon / Overnight',
    description:
      'Erg Lihoudi is a collection of sand dunes located about 30 km south of Zagora, offering a more accessible and less touristy alternative to the Erg Chebbi dunes near Merzouga. While smaller in scale, Erg Lihoudi provides an authentic Saharan experience — golden sand dunes rising from the flat hammada, the silence of the desert, and skies filled with more stars than you have ever seen. Sunset camel rides traverse the dunes as the light shifts from gold to pink to purple, and overnight bivouac camps offer drumming, traditional dinner, and sleeping under the stars.',
    insiderTip:
      'Erg Lihoudi is ideal for travelers who want a desert taste without the long drive to Merzouga. Book through your hotel or riad in Zagora — prices for a sunset camel ride start from 150 MAD, overnight camping from 400 MAD. The dunes are smaller than Erg Chebbi but the experience is more intimate and less commercial. For bigger dunes, continue south to M&apos;hamid for access to Erg Chigaga.',
  },
  {
    name: 'M&apos;hamid el Ghizlane',
    icon: Compass,
    category: 'Desert Gateway',
    price: 'From 30 MAD (grand taxi from Zagora)',
    duration: 'Full day or overnight',
    bestTime: 'October to April',
    description:
      'M&apos;hamid el Ghizlane (M&apos;hamid of the Gazelles) is the last town before the Sahara truly takes over — beyond here, there is nothing but sand, rock, and sky until the borders of Algeria and Mauritania. Located 95 km south of Zagora, M&apos;hamid is the departure point for expeditions to the magnificent Erg Chigaga, a vast sea of towering dunes rivaling Erg Chebbi in scale but far more remote and less visited. The town itself has an end-of-the-road atmosphere that is evocative and haunting — the ruins of the old ksar, a Monday market that draws nomadic tribes, and a landscape that dissolves into the infinite.',
    insiderTip:
      'Grand taxis from Zagora to M&apos;hamid cost from 30 MAD shared (1.5 hours). To reach Erg Chigaga, you need a 4x4 or camel trek (50 km from M&apos;hamid). Multi-day tours from Zagora or M&apos;hamid to Erg Chigaga start from 800-1,500 MAD per person including meals, camel riding, and desert camp. The M&apos;hamid International Nomad Festival (usually March) brings music, dance, and nomadic culture. This is the Morocco that most tourists never see.',
  },
  {
    name: 'Camel Trekking from Zagora',
    icon: Footprints,
    category: 'Adventure Experience',
    price: 'From 150 MAD (1-hour ride) / From 800 MAD (multi-day trek)',
    duration: '1 hour to 3+ days',
    bestTime: 'October to April',
    description:
      'The Zagora region offers camel trekking experiences ranging from short sunset rides to multi-day expeditions deep into the Sahara. Short treks (1-2 hours) take you into the dunes of Erg Lihoudi for sunset. Overnight treks include a night at a desert bivouac camp with traditional dinner, Amazigh music, and stargazing. Multi-day treks (2-5 days) follow ancient caravan routes from Zagora or M&apos;hamid south toward Erg Chigaga, camping in nomad-style tents, visiting remote wells, and experiencing the vast silence and beauty of the true Sahara.',
    insiderTip:
      'Book through your accommodation in Zagora rather than tour agencies in Marrakech — you will pay significantly less and the money goes directly to local communities. Wear long trousers to prevent saddle rub, bring a scarf for sun and sand protection, and carry more water than you think you need. The best treks are the 2-day journeys from M&apos;hamid to Erg Chigaga — enough time to feel genuinely remote without excessive endurance. Bring warm layers for desert nights (temperatures drop dramatically).',
  },
];

/* ===============================================================
   DATA: MARKETS & FOOD
   =============================================================== */

const marketsFood = [
  {
    name: 'Zagora Wednesday & Sunday Souks',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free to browse',
    duration: '1-2 hours',
    bestTime: 'Wednesday or Sunday morning',
    description:
      'Zagora&apos;s weekly souks on Wednesday and Sunday are vibrant gatherings where the entire Draa Valley converges. Farmers bring dates, henna, olives, and seasonal produce from the oasis gardens. Amazigh women sell hand-loomed textiles, embroidered fabrics, and handwoven rugs. Men trade livestock at the edge of the market. Spice sellers display pyramids of cumin, saffron, and ras el hanout. This is a genuine working market rather than a tourist spectacle — a chance to experience the economic heartbeat of oasis life.',
    insiderTip:
      'Arrive before 9 AM when the market is most active. The livestock section is at the southern edge and is fascinating but can be confronting. Henna from the Draa Valley is considered among the finest in Morocco and makes an excellent lightweight souvenir (from 20 MAD for a cone). Dates are also a great buy here — ask for Mejhoul variety. Bring small bills and be prepared to bargain gently.',
  },
  {
    name: 'Zagora Food Scene',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 30 MAD (local meal)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Zagora cuisine reflects its oasis environment and Saharan proximity. Signature dishes include madfouna, the "Berber pizza" — a stuffed bread filled with meat, almonds, onions, and spices, baked in a traditional underground oven. Lamb and chicken tagines enriched with local dates and almonds are staples. The medfouna bread baked in hot sand is unique to this region. Fresh squeezed orange and date juice, and mint tea made with desert herbs, round out the experience. Several riads and restaurants offer traditional cooking classes where you can learn to prepare these dishes yourself.',
    insiderTip:
      'Ask specifically for madfouna at any local restaurant — it is the signature dish of the Zagora/Draa region and different from anything you will find elsewhere in Morocco. Portions are generous and from 40-60 MAD feeds two people. The restaurant Chez Ali near the center is well-regarded for traditional fare. Date milkshakes (from 15 MAD) from roadside vendors are a local treat, especially after the October harvest when dates are freshest.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Grand Taxi to Tamegroute', icon: Car, description: 'A shared grand taxi from Zagora to Tamegroute costs from 10-15 MAD per person (20 km). Private tours to Tamegroute charge from 200-400 MAD for the same trip.', savings: 'Save from 180-380 MAD per trip' },
  { tip: 'Skip Merzouga, Choose Erg Lihoudi', icon: Compass, description: 'Erg Lihoudi sunset camel rides from 150 MAD per person. Equivalent Merzouga experiences cost from 300-500 MAD, plus you save the longer drive and higher accommodation costs.', savings: 'Save from 150-350 MAD' },
  { tip: 'Buy Pottery at Source', icon: Palette, description: 'Buy Tamegroute green ceramics directly from the workshops — bowls from 30 MAD, platters from 80 MAD. The same pieces sell for 3-5x more in Marrakech and Fes shops.', savings: 'Save from 60-300% vs. city prices' },
  { tip: 'Walk to Amazrou', icon: Footprints, description: 'Walk from Zagora to Amazrou through the palm groves (30 minutes, free) rather than hiring a taxi (from 30 MAD) or joining a guided tour (from 150 MAD).', savings: 'Save from 30-150 MAD' },
  { tip: 'Camp in the Desert', icon: MoonStar, description: 'Basic desert bivouac camps near Zagora cost from 400 MAD per person including dinner, camel ride, and breakfast. Luxury desert camps near Merzouga charge from 1,500-3,000 MAD.', savings: 'Save from 1,000-2,500 MAD' },
  { tip: 'Eat Madfouna Locally', icon: UtensilsCrossed, description: 'Authentic madfouna at local restaurants costs from 40-60 MAD and feeds two. Tourist restaurants in Ouarzazate charge from 120-180 MAD for the same dish.', savings: 'Save from 60-120 MAD per meal' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Zagora Holds Heat Records', icon: Thermometer, description: 'Zagora has recorded temperatures above 50 degrees Celsius, making it one of the hottest places in Morocco. Summer visits (June-September) are brutally hot. Plan travel for October to April. If caught in summer, stay in air-conditioned accommodation and only explore in early morning or evening.' },
  { tip: 'The Draa River May Be Dry', icon: Waves, description: 'The Draa River south of Zagora often runs dry, especially in summer and drought years. The Mansour Eddahbi dam near Ouarzazate controls the flow. The palm groves survive on groundwater, but don not expect a flowing river year-round. When it does flow, the valley is spectacularly green.' },
  { tip: 'Negotiate Desert Trips Fairly', icon: CheckCircle, description: 'Desert excursions should be negotiated directly with local operators, not through intermediaries in Marrakech who add large commissions. A fair price for a sunset camel ride is from 150-200 MAD. Overnight camps from 400-600 MAD. Multi-day treks from 800-1,500 MAD per person per day.' },
  { tip: 'Photography Etiquette', icon: Camera, description: 'The Draa Valley communities are generally friendly but conservative. Always ask before photographing people, especially women. A warm greeting in Arabic or Amazigh goes a long way. Photographing the landscape, kasbahs, and pottery workshops is generally welcomed.' },
  { tip: 'Stock Supplies Before M\'hamid', icon: AlertTriangle, description: 'Zagora is the last town with proper shops, ATMs, and pharmacies before M\'hamid and the desert beyond. Stock up on water, snacks, sunscreen, and cash. M\'hamid has very limited facilities, and desert camps have none.' },
  { tip: 'Combine with Ouarzazate Drive', icon: Car, description: 'The N9 from Ouarzazate to Zagora (160 km, 3 hours) is one of Morocco most scenic drives. It crosses the Tizi n\'Tinifift pass and descends into the Draa Valley through Agdz. Do not rush this drive — stop at the kasbahs along the way.' },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  { question: 'What is the famous sign in Zagora?', answer: 'The "Tomboctou 52 Jours" (Timbuktu 52 Days) sign, pointing toward Timbuktu across the Sahara. It marks the start of the ancient camel caravan route and has become one of Morocco most photographed landmarks. It is located at the southern edge of Zagora near the main roundabout.' },
  { question: 'Is Zagora worth visiting?', answer: 'Absolutely. Zagora offers a different and more authentic Sahara gateway experience than Merzouga. The Draa Valley palm groves are stunning, Tamegroute pottery is unique, Jebel Zagora provides incredible sunset views, and the road south to M\'hamid leads to genuinely wild desert. It is also less crowded and more affordable.' },
  { question: 'How far is Zagora from Ouarzazate?', answer: 'About 160 km or 3 hours via the N9, one of Morocco most scenic highways. The road crosses the Tizi n\'Tinifift pass and follows the Draa Valley through Agdz. Well-paved throughout. CTM buses and grand taxis connect the two cities.' },
  { question: 'What is Tamegroute known for?', answer: 'Tamegroute (20 km south of Zagora) is famous for its green-glazed ceramics workshops, producing pottery with a distinctive copper-manganese glaze for centuries, and its Koranic library containing rare manuscripts dating to the 11th century. Both are open to visitors.' },
  { question: 'Can you do a camel trek from Zagora?', answer: 'Yes, options range from 1-hour sunset rides around Erg Lihoudi (from 150 MAD) to overnight bivouac camps (from 400 MAD) and multi-day treks to Erg Chigaga via M\'hamid (from 800 MAD per person per day). Book directly through your accommodation in Zagora for the best prices.' },
  { question: 'What is the best time to visit Zagora?', answer: 'October to April. Zagora is one of the hottest places in Morocco, regularly exceeding 45 degrees in summer. Spring and autumn offer comfortable temperatures (20-30 degrees). October brings the date harvest festival. Winter nights can be cold (5-10 degrees) but days are sunny and warm.' },
  { question: 'How do I get from Zagora to M\'hamid?', answer: 'M\'hamid is 95 km south of Zagora (about 1.5 hours). Grand taxis cost from 30 MAD per person shared. The paved road passes through Tamegroute and crosses increasingly barren terrain. Beyond M\'hamid, reaching Erg Chigaga requires a 4x4 or camel trek (50 km further).' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/sahara-desert', icon: Compass, title: 'Sahara Desert Guide', description: 'Complete guide to Morocco Sahara: Erg Chebbi, Erg Chigaga, camel treks, and desert camps.' },
  { href: '/ouarzazate', icon: MapPin, title: 'Ouarzazate Guide', description: 'Hollywood of Morocco, Ait Benhaddou, Atlas Film Studios, and the road south.' },
  { href: '/errachidia-guide', icon: Mountain, title: 'Errachidia Guide', description: 'Ziz Gorge, Source Bleue de Meski, Tafilalet oasis, and the eastern Sahara gateway.' },
  { href: '/tinghir-guide', icon: Landmark, title: 'Tinghir Guide', description: 'Todra Gorge, palm oasis walks, rock climbing, and Dades Valley connections.' },
  { href: '/morocco-road-trip-routes', icon: Car, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, including the Draa Valley N9.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ZagoraGuidePage() {
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
            backgroundImage: 'url(/images/hero-zagora.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Zagora Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Zagora
            <br className="hidden md:block" /> City Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Where the Draa Valley meets the Sahara. Timbuktu 52 days, green ceramics, palm oases,
            and the road to the end of the world. Your complete 2026 guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Zagora: The Last Oasis Before the Sahara
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Zagora lies at the southern end of Morocco&apos;s most beautiful river valley. The Draa, fed
                by snowmelt from the High Atlas, winds 200 km through a narrow corridor of date palms,
                fortified villages, and red-earth kasbahs before exhausting itself in the sands south of
                Zagora. For centuries, this was the final gathering point for camel caravans preparing
                to cross the Sahara — 52 days of desert to Timbuktu, the legendary trading city of gold
                and salt on the Niger River. The famous road sign still stands, pointing into the
                emptiness.
              </p>
              <p>
                Today, Zagora remains a place where the settled world meets the desert. To the north,
                the Draa Valley is a paradise of palm groves, where over a million date palms shade
                irrigated gardens of mint, henna, and cereals. To the south, the landscape dissolves
                into hammada (rocky desert) and eventually sand dunes — first the modest Erg Lihoudi,
                then the spectacular Erg Chigaga beyond M&apos;hamid el Ghizlane, the last town before
                nothingness.
              </p>
              <p>
                This guide covers everything in the Zagora region: the iconic Timbuktu sign, the Draa
                Valley&apos;s palm groves and kasbahs, the green ceramics of Tamegroute, the Jewish quarter
                of Amazrou, the village of 45 kasbahs at N&apos;Kob, Jebel Zagora&apos;s sunset hike, desert
                experiences from camel rides to multi-day treks, and practical information for making
                the most of this remote and rewarding corner of Morocco.
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
            Top 10 Zagora Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From iconic desert landmarks to ancient pottery workshops and palm oasis walks, these are
            the experiences that define a visit to Zagora.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Tomboctou 52 Jours Sign', price: 'Free', time: '15-30 min', category: 'Iconic' },
              { rank: 2, name: 'Draa Valley Palm Groves', price: 'Free', time: '2-4 hours', category: 'Nature' },
              { rank: 3, name: 'Jebel Zagora Sunset Hike', price: 'Free', time: '1.5-2.5 hours', category: 'Hiking' },
              { rank: 4, name: 'Tamegroute Green Ceramics', price: 'Free (entry)', time: '1-2 hours', category: 'Culture' },
              { rank: 5, name: 'Amazrou Jewish Quarter', price: 'Free (tip from 50 MAD)', time: '45 min', category: 'Heritage' },
              { rank: 6, name: 'Erg Lihoudi Sunset Camel Ride', price: 'From 150 MAD', time: '2 hours', category: 'Desert' },
              { rank: 7, name: 'M\'hamid el Ghizlane', price: 'From 30 MAD (taxi)', time: 'Full day', category: 'Adventure' },
              { rank: 8, name: 'N\'Kob: Village of 45 Kasbahs', price: 'Free', time: '1-2 hours', category: 'Heritage' },
              { rank: 9, name: 'Tamegroute Koranic Library', price: 'Free (donation)', time: '30 min', category: 'Heritage' },
              { rank: 10, name: 'Zagora Wednesday Souk', price: 'Free', time: '1-2 hours', category: 'Market' },
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

      {/* -- Iconic Landmarks -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Landmarks &amp; Nature
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the legendary Timbuktu sign to the sunset views from Jebel Zagora and the
            endless palm groves of the Draa Valley.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most landmarks are free to visit. Carry water and sun protection at all times.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {iconicLandmarks.map((attraction) => {
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

      {/* -- Cultural Heritage -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Heritage &amp; Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ancient pottery workshops, a centuries-old Koranic library, a Jewish quarter frozen in time,
            and some of the finest kasbah architecture in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            A small tip (from 50 MAD) for local guides at heritage sites is customary and helps support preservation.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {culturalHeritage.map((item) => {
              const CulIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CulIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Desert Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From sunset camel rides at Erg Lihoudi to multi-day expeditions into the vast emptiness
            beyond M&apos;hamid el Ghizlane.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Desert treks are best October to April. Book directly through local operators for the fairest prices.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {desertExperiences.map((item) => {
              const DesIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DesIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Markets & Food -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Markets &amp; Food
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Authentic weekly souks and the unique cuisine of the Draa Valley, including the legendary
            madfouna &quot;Berber pizza.&quot;
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Zagora souks are held Wednesday and Sunday. Restaurants serve lunch from noon to 3 PM and dinner from 7 PM.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {marketsFood.map((item) => {
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
            Budget Tips for Zagora
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Zagora is already one of Morocco&apos;s most affordable destinations. These tips help you save even more.
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
            Insider Tips for Zagora
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential local knowledge for navigating the Draa Valley and the road to the desert.
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
            Sample 2-Day Zagora Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan covering the Draa Valley&apos;s highlights, from palm oasis walks to desert sunsets.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Zagora, Tamegroute &amp; Sunset
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive in Zagora from Ouarzazate via the scenic N9 Draa Valley road. Photograph the iconic
                      &quot;Tomboctou 52 Jours&quot; sign. Walk from Zagora through the palm groves to Amazrou
                      and explore the old mellah (Jewish quarter) with a local guide (tip from 50 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a grand taxi to Tamegroute (from 10 MAD shared). Visit the green ceramics workshops
                      and the Koranic library. Buy pottery directly from the artisans (bowls from 30 MAD). Return
                      to Zagora for lunch — try madfouna (from 40 MAD) at a local restaurant.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hike Jebel Zagora for sunset — start 1.5 hours before sunset, bring water and a headlamp.
                      The panoramic views of the Draa Valley at golden hour are unforgettable. Dinner at your riad
                      or a local restaurant (tagine from 40 MAD). Estimated Day 1 cost: from 150-300 MAD.
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
                  Day 2: Desert, Dunes &amp; Desert Camp
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Option A: Take a grand taxi to M&apos;hamid el Ghizlane (from 30 MAD, 1.5 hours). Explore the
                      last town before the Sahara. Option B: Drive to N&apos;Kob (70 km) to see the village of 45
                      kasbahs. Both options offer unforgettable photography and a taste of remote desert life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Zagora and prepare for a sunset camel ride at Erg Lihoudi (from 150 MAD per
                      person). Ride into the dunes as the light softens and the temperature becomes comfortable.
                      Alternatively, join an overnight desert camp experience (from 400 MAD) with traditional
                      dinner and music under the stars.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      If camping: enjoy traditional Amazigh drumming and dinner in the desert. Sleep under a sky
                      blazing with stars. If returning: dinner in Zagora and rest before the onward journey.
                      Estimated Day 2 cost: from 200-600 MAD (depending on desert option).
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 250-500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Local food, shared taxis, free walks, no camel trek</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 700-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Camel ride, pottery shopping, restaurant meals, guided visits</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,500-3,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private 4x4, luxury desert camp, Erg Chigaga trek, N&apos;Kob visit</p>
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
            Continue Planning Your Draa Valley Adventure
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
            Ready to Explore Zagora &amp; the Draa Valley?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the legendary Timbuktu sign and green ceramics of Tamegroute to sunset camel rides
            and the vast silence of the Sahara, Zagora offers an authentic desert experience far from
            the tourist crowds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sahara-desert"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Sahara Desert Guide
            </Link>
            <Link
              href="/errachidia-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Errachidia &amp; Ziz Valley
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
