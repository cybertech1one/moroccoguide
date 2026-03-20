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
  Globe,
  Landmark,
  Sun,
  Compass,
  Camera,
  Tent,
  Droplets,
  Calendar,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Desert Oases 2026 | Skoura, Figuig, Draa Valley, Zagora & Palm Groves Guide',
  description:
    'Complete guide to Morocco desert oases. Explore Skoura palm groves, Figuig oasis, Draa Valley, Zagora, Todra Gorge, Tinghir, and Tata. Discover kasbahs, date farming, Berber villages, camel rides, and desert lodge stays.',
  keywords: [
    'morocco desert oasis',
    'oasis morocco',
    'draa valley',
    'todra gorge oasis',
    'zagora oasis',
    'morocco palm groves',
    'skoura oasis',
    'figuig oasis',
    'morocco kasbahs',
    'date farming morocco',
    'tinghir oasis',
    'tata oasis morocco',
    'dades valley oasis',
    'berber villages oasis',
    'desert lodges morocco',
    'khettara irrigation morocco',
    'morocco desert tours',
    'palm grove walks morocco',
    'camel rides oasis morocco',
    'oasis towns morocco',
  ],
  openGraph: {
    title: 'Morocco Desert Oases 2026 | Skoura, Figuig, Draa Valley, Zagora & Palm Groves Guide',
    description:
      'Discover the green jewels of the Sahara. Explore Skoura palm groves, Figuig oasis, Draa Valley, Zagora, Todra Gorge, and Tinghir with our complete Morocco oasis guide.',
    url: `${BASE_URL}/morocco-desert-oasis`,
    images: [
      {
        url: `${BASE_URL}/images/hero-desert.webp`,
        width: 1200,
        height: 630,
        alt: 'Lush palm groves surrounded by arid desert landscape in the Draa Valley of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Desert Oases 2026 | Palm Groves, Kasbahs & Desert Lodges',
    description:
      'Complete guide to Morocco desert oases. Skoura, Figuig, Draa Valley, Zagora, Todra Gorge, Tinghir, and Tata with activities, stays, and cultural experiences.',
    images: [`${BASE_URL}/images/hero-desert.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-desert-oasis` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-desert-oasis`,
  name: 'Morocco Desert Oases 2026 | Skoura, Figuig, Draa Valley, Zagora & Palm Groves Guide',
  description:
    'Complete guide to Morocco desert oases. Explore Skoura palm groves, Figuig oasis, Draa Valley, Zagora, Todra Gorge, Tinghir, and Tata. Discover kasbahs, date farming, Berber villages, and desert lodge stays.',
  url: `${BASE_URL}/morocco-desert-oasis`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-desert-oasis`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Desert Oases Guide', item: `${BASE_URL}/morocco-desert-oasis` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time to visit Morocco desert oases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Morocco desert oases is October to April when temperatures are pleasant, ranging from 15 to 28 degrees Celsius. Spring (March-April) is ideal for seeing palm groves at their greenest after winter rains. Avoid June to August when temperatures can exceed 45 degrees Celsius in the Draa Valley and Zagora. The date harvest in October is a particularly rewarding time to visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to the Draa Valley from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'From Marrakech, the Draa Valley is reached via the N9 road over the Tizi n\'Tichka pass. The drive to Ouarzazate takes about 4 hours, and continuing to Zagora adds another 2.5 hours. Shared grand taxis run from Ouarzazate to Zagora for from 80 MAD. CTM and Supratours buses also serve the route. Alternatively, private transfers from Marrakech to Zagora cost from 1,200 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Figuig oasis as a tourist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Figuig is open to tourists and is one of Morocco\'s most authentic and least-visited oases. Located in the far east near the Algerian border, it requires effort to reach but rewards with genuine hospitality and centuries-old palm groves. Local guesthouses offer accommodation from 250 MAD per night. A local guide (from 200 MAD per day) is recommended to navigate the seven historic ksour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a khettara and where can I see one in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A khettara is an ancient underground irrigation channel that uses gravity to transport water from mountain aquifers to oasis settlements, similar to Persian qanats. These ingenious systems have sustained Moroccan oases for over a thousand years. You can see functioning khettaras in the Tafilalet region near Erfoud, in Figuig, and around Tinghir. Some are still maintained by local communities using traditional methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are camel rides available at Morocco oases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, camel rides are widely available at most oasis towns. Zagora and the Draa Valley offer rides ranging from 1-hour sunset treks (from 150 MAD) to multi-day desert expeditions. Skoura and Tinghir also arrange camel excursions through palm groves. For an authentic experience, choose locally-run cooperatives that treat their animals well. Seasonal pricing may vary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for visiting Morocco desert oases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack lightweight, loose-fitting clothing in natural fabrics, a wide-brimmed hat, high-SPF sunscreen, sturdy walking shoes, and a headscarf or shemagh for wind and sand protection. Bring a reusable water bottle and aim to drink at least 3 liters daily. A light jacket is essential for cool desert evenings. Modest dress is appreciated in oasis villages, covering shoulders and knees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need to explore Morocco oases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minimum of 5 to 7 days allows you to explore the major oasis route from Ouarzazate through the Draa Valley to Zagora and back via Tinghir and the Todra Gorge. For a more thorough exploration including Skoura, Dades Valley, and detours to Tata or Figuig, plan 10 to 14 days. Many travelers combine oasis visits with a Sahara desert camp experience near Merzouga or M\'Hamid.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP OASES
   ═══════════════════════════════════════════════════════════════ */

const topOases = [
  {
    name: 'Skoura Oasis',
    icon: Landmark,
    image: '/images/hero-kasbahs.webp',
    region: 'Ouarzazate Province',
    description:
      'The Skoura palm grove stretches across 25 kilometers with over 700,000 date palms, making it one of the largest and most impressive oases in Morocco. Hidden among the palms are over 50 kasbahs, including the magnificent 17th-century Kasbah Amridil, featured on the Moroccan 50-dirham banknote. The oasis is fed by traditional seguia channels from the Daddes River and sustains crops of almonds, figs, olives, and roses alongside its famous dates.',
    highlights: ['Kasbah Amridil (on 50 MAD note)', 'Over 700,000 date palms', 'Bird watching paradise', 'Rose harvest in April-May'],
    bestTime: 'October to April (date harvest in October)',
    fromMarrakech: '4.5 hours via Tizi n\'Tichka pass',
  },
  {
    name: 'Figuig Oasis',
    icon: Gem,
    image: '/images/art-moroccan-riad-interior.webp',
    region: 'Oriental Region',
    description:
      'Morocco\'s easternmost oasis, Figuig sits in a natural basin surrounded by mountains near the Algerian border. Seven historic ksour (fortified villages) dot the palm grove, each with its own character and history. With over 200,000 date palms, Figuig has been a crossroads of trans-Saharan trade for centuries. The oasis remains remarkably authentic, with traditional water-sharing systems still governing palm grove irrigation.',
    highlights: ['Seven historic ksour', 'Traditional water-sharing customs', 'Trans-Saharan trade heritage', 'Least-visited major oasis'],
    bestTime: 'November to March (mild winters)',
    fromMarrakech: '10 hours (usually reached from Oujda, 6 hours)',
  },
  {
    name: 'Draa Valley',
    icon: Compass,
    image: '/images/hero-desert.webp',
    region: 'Draa-Tafilalet',
    description:
      'The Draa River carved Morocco\'s longest and most dramatic valley, stretching over 200 kilometers from Ouarzazate to the desert town of M\'Hamid. The valley floor is a ribbon of green amid barren mountains, with six distinct palm groves separated by rocky hamada desert. Ancient ksour and kasbahs line the route, and the valley produces some of Morocco\'s finest dates, particularly the prized Medjool variety.',
    highlights: ['200 km of palm-lined valley', 'Six distinct palm grove sections', 'Medjool date production', 'Ancient ksour along the route'],
    bestTime: 'October to April (date harvest October-November)',
    fromMarrakech: '5 hours to Agdz, 6.5 hours to Zagora',
  },
  {
    name: 'Zagora Oasis',
    icon: Sun,
    image: '/images/art-desert-stargazing.webp',
    region: 'Draa-Tafilalet',
    description:
      'Famous for its iconic roadside sign reading "Timbuktu 52 days" (by camel caravan), Zagora was once the last major settlement before the Sahara on the ancient trans-Saharan trade route. The oasis sprawls along the Draa River with dense palm groves, Berber villages, and a dramatic mountain backdrop. Jebel Zagora rises above town, offering sunrise hikes with panoramic views across the entire oasis and surrounding desert.',
    highlights: ['Gateway to Sahara desert camps', 'Jebel Zagora sunrise hike', 'Timbuktu 52 days sign', 'Amazigh pottery workshops'],
    bestTime: 'October to March (avoid extreme summer heat)',
    fromMarrakech: '6.5 hours via Ouarzazate',
  },
  {
    name: 'Tinghir & Todra Gorge',
    icon: Mountain,
    image: '/images/art-todra-gorge.webp',
    region: 'Draa-Tafilalet',
    description:
      'Tinghir sits at the mouth of the spectacular Todra Gorge, where 300-meter-high canyon walls narrow to just 10 meters apart. The town\'s palm grove, one of the most beautiful in Morocco, is a lush tapestry of date palms, olive trees, and irrigated gardens fed by springs flowing from the gorge. Walking through the terraced gardens with the Atlas Mountains as a backdrop is an unforgettable experience.',
    highlights: ['Todra Gorge (300m canyon walls)', 'Spectacular terraced palm grove', 'Rock climbing destination', 'Traditional silver jewelry market'],
    bestTime: 'March to May and September to November',
    fromMarrakech: '6 hours via Ouarzazate',
  },
  {
    name: 'Tata Oasis',
    icon: Star,
    image: '/images/art-berber-portrait.webp',
    region: 'Souss-Massa',
    description:
      'Tata is a hidden gem in the pre-Saharan Anti-Atlas region, far from the main tourist circuits. The oasis complex includes several smaller oases: Tata, Akka, Tissint, and Foum Zguid, each with distinctive character. Ancient rock engravings near Akka and Foum Chenna date back thousands of years, providing evidence of a once-green Sahara. The region is known for its Amazigh hospitality and traditional henna art.',
    highlights: ['Ancient rock engravings', 'Off-the-beaten-path location', 'Pre-Saharan landscapes', 'Traditional henna art traditions'],
    bestTime: 'November to March (can exceed 45 degrees Celsius in summer)',
    fromMarrakech: '7 hours via Taroudant',
  },
  {
    name: 'Dades Valley & Skoura to Boumalne',
    icon: Camera,
    image: '/images/hero-ouarzazate.webp',
    region: 'Draa-Tafilalet',
    description:
      'The Dades Valley connects Skoura to the Dades Gorge in a corridor of palm groves, rose gardens, and crumbling kasbahs. El Kelaa M\'Gouna is the center of Morocco\'s rose industry, hosting the annual Rose Festival each May. The Dades Gorge presents twisting roads, dramatic rock formations including the "monkey fingers," and Berber villages on cliffsides.',
    highlights: ['Rose Valley and May festival', 'Monkey Fingers rock formations', 'Kasbah-lined valley road', 'El Kelaa M\'Gouna rose products'],
    bestTime: 'April to May (rose harvest) and September to November',
    fromMarrakech: '5.5 hours via Ouarzazate',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const oasisActivities = [
  {
    name: 'Palm Grove Walks',
    icon: Compass,
    description:
      'Wander through ancient palm groves on shaded paths, discovering hidden kasbahs, irrigation channels, and Berber gardens. Skoura, Tinghir, and Figuig offer the most rewarding routes. Guided walks reveal the water management systems and agricultural practices that sustain these green islands in the desert.',
    price: 'Free independently; guided walks from 150 MAD',
    location: 'Skoura, Tinghir, Figuig, Draa Valley',
  },
  {
    name: 'Camel Trekking',
    icon: Sun,
    description:
      'Experience the oasis landscape as caravan traders did for centuries. Short sunset rides through palm groves or multi-day treks into the Sahara from Zagora or M\'Hamid. Experienced guides share stories of the ancient trade routes that connected these oases to Timbuktu.',
    price: 'From 150 MAD for 1 hour; from 800 MAD for overnight trek',
    location: 'Zagora, M\'Hamid, Draa Valley',
  },
  {
    name: 'Hiking & Gorge Exploration',
    icon: Mountain,
    description:
      'The oasis region offers dramatic hiking. Todra Gorge provides easy riverside walks and challenging rock climbing. Jebel Zagora offers a rewarding sunrise hike above the oasis. The Dades Gorge winds through spectacular rock formations. Spring and autumn bring ideal temperatures.',
    price: 'Free independently; guided hikes from 300 MAD per day',
    location: 'Todra Gorge, Jebel Zagora, Dades Gorge',
  },
  {
    name: 'Kayaking & River Activities',
    icon: Droplets,
    description:
      'When water levels allow (typically November to April), kayaking on Draa Valley reservoirs and El Mansour Eddahbi barrage near Ouarzazate offers a unique desert perspective. Some lodges arrange canoe trips through palm-fringed river sections. Check water conditions locally as they vary seasonally.',
    price: 'From 200 MAD for guided kayaking sessions',
    location: 'El Mansour Eddahbi, Draa River sections',
  },
  {
    name: 'Kasbah Visits & Heritage Tours',
    icon: Landmark,
    description:
      'Explore centuries-old kasbahs and ksour dotting every oasis. Kasbah Amridil in Skoura, the ksour of Figuig, Draa Valley fortified granaries, and Kasbah Tamnougalt near Agdz are all accessible. Many have been partially restored with guided tours explaining their history and architecture.',
    price: 'From 20 MAD entry; guided heritage tours from 200 MAD',
    location: 'Skoura, Figuig, Agdz, Tamnougalt, Tinghir',
  },
  {
    name: 'Stargazing in the Desert',
    icon: Sparkles,
    description:
      'The clear desert skies above Morocco\'s oases offer some of the best stargazing in the Northern Hemisphere. Minimal light pollution makes the Milky Way visible to the naked eye. Desert lodges near Zagora provide telescopes and guided astronomy sessions combining ancient Berber star navigation with modern astronomy.',
    price: 'Free from desert camps; guided sessions from 100 MAD',
    location: 'Zagora, M\'Hamid, Draa Valley desert camps',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    name: 'Restored Kasbahs & Riads',
    icon: Crown,
    description:
      'Stay in centuries-old kasbahs converted into atmospheric hotels. Thick earthen walls keep rooms cool in summer and warm in winter. Rooftop terraces offer views across palm groves. Properties range from simple family-run conversions to luxurious boutique hotels with pools, spas, and gourmet restaurants featuring local ingredients.',
    priceRange: 'From 400 MAD to 3,000 MAD per night',
    locations: 'Skoura, Ouarzazate, Tinghir, Agdz',
    highlights: ['Atmospheric mud-brick architecture', 'Rooftop palm grove views', 'Traditional Berber decor', 'Often includes dinner and breakfast'],
  },
  {
    name: 'Desert Lodges & Ecolodges',
    icon: Building,
    description:
      'Purpose-built lodges blending into the desert landscape using sustainable materials and solar power. Many are owned by local families. Ecolodges feature organic gardens, natural swimming pools, and cultural programs including cooking classes, henna workshops, and village visits.',
    priceRange: 'From 500 MAD to 2,500 MAD per night',
    locations: 'Draa Valley, Zagora, Dades Valley',
    highlights: ['Sustainable solar-powered design', 'Organic gardens and local food', 'Cultural activity programs', 'Natural swimming pools'],
  },
  {
    name: 'Desert Bivouacs & Camps',
    icon: Tent,
    description:
      'Traditional Berber-style tent camps in the desert beyond the oases. Standard camps use simple canvas tents with shared facilities, while luxury bivouacs offer private tents with real beds, en-suite bathrooms, and candlelit dining. Most are seasonal (October to April) and include meals, campfire music, and optional camel rides.',
    priceRange: 'From 250 MAD (standard) to 2,000 MAD (luxury) per night',
    locations: 'Zagora, M\'Hamid, Erg Chigaga',
    highlights: ['Saharan camping experience', 'Campfire music and stories', 'Included meals', 'Stargazing from your tent'],
  },
  {
    name: 'Community Guesthouses',
    icon: Heart,
    description:
      'Simple, welcoming homes in oasis villages where families offer rooms to visitors. Accommodation is basic but clean, with shared bathrooms and home-cooked meals that are often the highlight. Revenue stays directly in the community. These offer the most authentic cultural exchange and a chance to experience daily oasis life.',
    priceRange: 'From 150 MAD to 350 MAD per night (includes meals)',
    locations: 'Figuig, small Draa Valley villages, Tata region',
    highlights: ['Authentic home-cooked meals', 'Direct community support', 'Cultural exchange with families', 'Most affordable option'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const culturalExperiences = [
  {
    name: 'Date Harvest & Palm Grove Agriculture',
    icon: Sun,
    description:
      'Morocco\'s oases are sustained by date palms, with over 5 million trees across the country. The harvest season (October-November) is a communal event where families climb tall palms to cut heavy date clusters. Visitors during harvest can participate in picking, sorting, and tasting. Learn to distinguish varieties like Medjool (the "king of dates"), Boufeggous, Jihel, and Bouslikhene. Date-based products include syrup, jam, and the energy-rich date paste used by Berber travelers.',
    where: 'Draa Valley, Zagora, Skoura, Tinghir',
  },
  {
    name: 'Khettara: Ancient Underground Irrigation',
    icon: Droplets,
    description:
      'The khettara system is one of humanity\'s great engineering achievements. These underground channels, similar to Persian qanats, use gravity to transport water from mountain aquifers to oasis settlements across distances of up to 20 kilometers. Built and maintained communally for over a thousand years, some khettaras are still operational today. In the Tafilalet region near Erfoud, guided tours explain how these channels work and the communal water-sharing traditions that govern them.',
    where: 'Tafilalet (Erfoud/Rissani), Figuig, Tinghir region',
  },
  {
    name: 'Berber Village Life & Crafts',
    icon: Users,
    description:
      'Oasis villages preserve traditions that have adapted over centuries to the harsh but beautiful desert environment. Visit women\'s cooperatives producing carpets, pottery, and henna art. Watch blacksmiths forge tools using techniques passed down through generations. Learn about traditional mud-brick construction and the communal decision-making assemblies (jemaa) that still govern many villages. Markets in Zagora, Tinghir, and Rissani showcase local artisanship.',
    where: 'All oasis regions, especially Zagora, Tinghir, Rissani',
  },
  {
    name: 'Tamegroute: Green Pottery & Sufi Library',
    icon: BookOpen,
    description:
      'The village of Tamegroute, south of Zagora, is renowned for two treasures. First, its pottery workshops produce distinctive green-glazed ceramics using techniques and mineral glazes unchanged for centuries. Second, the Nassiriyya Zaouia houses one of Morocco\'s oldest libraries with Qurans, astronomical texts, and mathematical treatises dating to the 13th century, some written in gold ink on gazelle skin. A small entry fee supports preservation.',
    where: 'Tamegroute, 18 km south of Zagora',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const bestTimeData = [
  {
    season: 'Autumn (October - November)',
    icon: Award,
    rating: 'Peak Season',
    description:
      'The ideal time for oasis visits. The date harvest transforms villages into hives of activity. Temperatures cool to a pleasant 20 to 30 degrees Celsius during the day. Clear skies are perfect for photography and stargazing. Accommodations fill quickly, so book in advance.',
  },
  {
    season: 'Winter (December - February)',
    icon: Sparkles,
    rating: 'Excellent',
    description:
      'Crisp, sunny days with comfortable temperatures of 15 to 25 degrees Celsius. Cool evenings require warm layers. The driest period with minimal rainfall. Fewer tourists mean better prices and more intimate experiences. Some desert camps may close in January.',
  },
  {
    season: 'Spring (March - May)',
    icon: Droplets,
    rating: 'Excellent',
    description:
      'Palm groves are at their greenest after winter rains. Rose harvest in the Dades Valley (May) draws visitors. Temperatures begin to rise but remain manageable at 22 to 35 degrees Celsius. April is particularly beautiful with wildflowers across the desert.',
  },
  {
    season: 'Summer (June - September)',
    icon: Sun,
    rating: 'Hot Season',
    description:
      'Extreme heat reaches 40 to 48 degrees Celsius in the Draa Valley and Zagora. Only recommended for heat-tolerant travelers. If visiting, stay in air-conditioned accommodation, plan activities for early morning and evening only. Significant accommodation discounts available.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const gettingThere = [
  {
    from: 'From Marrakech',
    icon: MapPin,
    routes: [
      'N9 via Tizi n\'Tichka pass to Ouarzazate (4 hours), then continue to Skoura (30 min), Tinghir (2.5 hours), or Zagora (2.5 hours)',
      'CTM bus Marrakech to Ouarzazate from 90 MAD (4.5 hours), connections onward',
      'Private transfer to Ouarzazate from 1,000 MAD, to Zagora from 1,500 MAD',
    ],
  },
  {
    from: 'From Fes',
    icon: MapPin,
    routes: [
      'N13 via Midelt and Errachidia to Tinghir (8 hours) or Erfoud/Rissani (7 hours)',
      'CTM bus Fes to Errachidia from 120 MAD (7 hours)',
      'Grand taxis from Errachidia to Tinghir from 50 MAD',
    ],
  },
  {
    from: 'From Ouarzazate',
    icon: MapPin,
    routes: [
      'N10 east to Skoura (40 min), Boumalne Dades (1.5 hours), Tinghir (2.5 hours)',
      'N9 south to Agdz (1.5 hours), Zagora (3 hours), M\'Hamid (4.5 hours)',
      'Grand taxis to Zagora from 60 MAD, to Tinghir from 50 MAD',
    ],
  },
  {
    from: 'To Figuig',
    icon: MapPin,
    routes: [
      'Easiest from Oujda: N17 south (6 hours drive)',
      'CTM bus from Oujda to Figuig from 80 MAD',
      'From Errachidia via Bouarfa (5.5 hours, rough road sections)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KASBAH ARCHITECTURE
   ═══════════════════════════════════════════════════════════════ */

const kasbahArchitecture = [
  {
    name: 'Kasbah Amridil, Skoura',
    description:
      'One of the best-preserved kasbahs in Morocco, depicted on the 50-dirham banknote. This 17th-century fortress belonged to the powerful Nassiri family and features four corner towers, intricate geometric wall decorations, and a traditional garden. The family still maintains the kasbah and offers guided tours through its labyrinthine rooms, explaining centuries of family and regional history.',
    entry: 'From 30 MAD',
  },
  {
    name: 'Kasbah Tamnougalt, Agdz',
    description:
      'A sprawling fortified village at the gateway to the Draa Valley. The ksar dates to the 16th century and was once the seat of the Mezguita Berber tribe\'s governing council. Partially restored, it offers a fascinating walk through ancient streets, communal granaries, and rooftop viewpoints overlooking the entire Draa palm grove.',
    entry: 'From 20 MAD (guide from 50 MAD)',
  },
  {
    name: 'Ksour of Figuig',
    description:
      'Seven distinct ksour make up the Figuig oasis settlement, each historically governed by a different Amazigh tribe. The narrow alleys, covered passages, and shared courtyards reflect centuries of communal living adapted to desert conditions. Zenaga and Loudaghir are the most photogenic and best-preserved quarters.',
    entry: 'Free (local guide from 200 MAD recommended)',
  },
  {
    name: 'Kasbah des Cigognes, Tinghir',
    description:
      'Named for the storks that nest on its towers each spring, this kasbah overlooks the entrance to the Todra Gorge. The surrounding gardens and terraced orchards demonstrate how oasis architecture integrates with agricultural landscapes. The panoramic views from the upper terraces encompass the entire Tinghir palm grove.',
    entry: 'From 20 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDesertOasisPage() {
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
            <span className="text-white">Morocco Desert Oases Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Nature &amp; Desert
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Desert Oases:
            <br className="hidden md:block" /> Palm Groves, Kasbahs &amp; Hidden Valleys
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover the green jewels of the Sahara. From the vast Draa Valley to remote Figuig,
            Morocco&apos;s oases are living monuments to human ingenuity and nature&apos;s resilience.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Green Islands in a Sea of Sand: Morocco&apos;s Desert Oases
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Along the southern edges of the Atlas Mountains, where the fertile north yields to
                the vast Sahara, Morocco&apos;s oases emerge like emerald mirages against ochre
                desert. These are not mere watering holes but entire civilizations built over
                millennia by Amazigh (Berber) communities who mastered the art of coaxing life from
                the driest landscapes on Earth. Palm groves stretching for kilometers, fortified
                kasbahs rising from mud walls, and ancient irrigation channels threading underground
                testify to the ingenuity that created these havens.
              </p>
              <p>
                From the 200-kilometer ribbon of the Draa Valley to the remote palm groves of
                Figuig near the Algerian border, these oases offer landscapes of extraordinary
                beauty and cultural depth. Date palms provide not just fruit but shade, building
                material, and an entire ecosystem supporting agriculture and communities. The
                kasbahs and ksour that dot these valleys represent some of the finest earthen
                architecture in the world, while Berber villages keep alive traditions stretching
                back a thousand years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Oases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Oases to Explore in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven remarkable oasis regions, each with its own character, history, and landscapes waiting to be discovered.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {topOases.map((oasis) => {
              const OasisIcon = oasis.icon;
              return (
                <div key={oasis.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={oasis.image}
                      alt={`${oasis.name} palm grove landscape in the ${oasis.region} of Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <OasisIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {oasis.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium rounded bg-white/20 backdrop-blur-sm text-white">
                      {oasis.region}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{oasis.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {oasis.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-[var(--text-muted)]">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                        <span><strong>Best time:</strong> {oasis.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                        <span><strong>From Marrakech:</strong> {oasis.fromMarrakech}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Palm Groves & Date Farming ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Palm Groves &amp; Date Farming
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The date palm is the foundation of oasis life, providing food, shade, building materials, and an entire ecosystem.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is home to over 5 million date palms spread across its southern oases, producing
                an estimated 110,000 tonnes of dates annually. The date palm (Phoenix dactylifera) is the
                keystone species of the entire oasis ecosystem. Its canopy creates a microclimate 10 to 15
                degrees cooler than the surrounding desert, enabling cultivation of olives, almonds, figs,
                pomegranates, and vegetables beneath its shade in a traditional three-tier agricultural system.
              </p>
              <p>
                The Draa Valley and Tafilalet region produce the most renowned varieties. Medjool dates,
                the &quot;king of dates,&quot; are prized for their large size, caramel flavor, and soft
                texture. Boufeggous, Jihel, Bouskri, and Bouslikhene are other important varieties. The
                annual harvest in October-November is a communal celebration, with skilled climbers ascending
                palms up to 25 meters tall to cut heavy fruit clusters.
              </p>
              <p>
                Climate change and Bayoud disease have devastated some palm groves, reducing Morocco&apos;s
                date palm population by roughly two-thirds from its historical peak. Government and community
                programs are now replanting millions of disease-resistant palms, and sustainable tourism
                provides additional economic incentive to preserve these irreplaceable landscapes.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[var(--surface-muted)] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">5M+</p>
                <p className="text-xs text-[var(--text-muted)]">Date palms in Morocco</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">110K</p>
                <p className="text-xs text-[var(--text-muted)]">Tonnes of dates per year</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">100+</p>
                <p className="text-xs text-[var(--text-muted)]">Date palm varieties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kasbah Architecture ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kasbah Architecture in Oasis Towns
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fortified earthen architecture that has defined Morocco&apos;s oasis landscape for centuries.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {kasbahArchitecture.map((kasbah) => (
              <div key={kasbah.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Building className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {kasbah.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{kasbah.description}</p>
                    <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-semibold">
                      <DollarSign className="w-3 h-3" />
                      {kasbah.entry}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Things to Do in Morocco&apos;s Oases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Adventure, culture, and relaxation amid some of the most dramatic landscapes in North Africa.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season, provider, and group size.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oasisActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {activity.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{activity.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{activity.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay in Morocco&apos;s Oases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From restored kasbahs to desert bivouacs, accommodation options that immerse you in oasis life.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and may vary by season. Peak season (October-November) commands higher prices.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {accommodations.map((accom) => {
              const AccomIcon = accom.icon;
              return (
                <div key={accom.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AccomIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {accom.name}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                          {accom.priceRange}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{accom.description}</p>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {accom.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                        <span><strong>Where:</strong> {accom.locations}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco&apos;s Oases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your visit right makes all the difference in the desert. Here is what to expect each season.
          </p>

          <div className="space-y-6">
            {bestTimeData.map((period) => {
              const PeriodIcon = period.icon;
              return (
                <div key={period.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PeriodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {period.season}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded">
                          {period.rating}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{period.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Morocco&apos;s Oases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options from major cities to the oasis regions of southern Morocco.
          </p>

          <div className="space-y-6">
            {gettingThere.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.from} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RouteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {route.from}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {route.routes.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cultural Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Experiences in Oasis Villages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the landscapes, oasis villages offer rich cultural encounters rooted in centuries of Amazigh tradition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ExpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {exp.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{exp.description}</p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    <span><strong>Where:</strong> {exp.where}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Oasis Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential advice for a comfortable and respectful visit to Morocco&apos;s desert oases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Droplets, title: 'Stay Hydrated', text: 'Drink at least 3 liters of water daily in the desert climate. Carry a reusable bottle and water purification tablets. Bottled water is available in all oasis towns from 5 MAD per 1.5L. Avoid ice in drinks at smaller establishments.' },
              { icon: Sun, title: 'Sun Protection', text: 'Desert sun is intense year-round. Wear a wide-brimmed hat, apply SPF 50+ sunscreen regularly, and consider lightweight long-sleeved clothing. A shemagh (desert scarf) is useful for wind, sand, and sun protection. Purchase one locally from 30 MAD.' },
              { icon: ShieldCheck, title: 'Respect Water Resources', text: 'Water is precious in oasis communities. Take short showers, never waste water, and respect irrigation channels (seguias). Do not swim in or pollute irrigation water. Ask before using communal water sources.' },
              { icon: Camera, title: 'Photography Etiquette', text: 'Always ask permission before photographing people, especially women. Respect "no photo" requests at religious sites and private homes. Showing your photos to subjects is appreciated. A small tip (from 5-10 MAD) may be expected in tourist areas.' },
              { icon: Heart, title: 'Support Local Communities', text: 'Buy directly from artisans and cooperatives rather than intermediaries. Hire local guides who know the area and whose families benefit from tourism. Stay in locally-owned guesthouses and eat at family-run restaurants.' },
              { icon: Award, title: 'Environmental Responsibility', text: 'Carry out all trash, as waste management in remote oases is limited. Use reef-safe sunscreen if swimming. Stick to marked trails to avoid damaging fragile desert ecosystems. Support eco-lodges that practice sustainable tourism.' },
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
            Morocco&apos;s Oasis Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-desert.webp', alt: 'Vast palm grove oasis surrounded by desert terrain in the Draa Valley of Morocco', label: 'Draa Valley Palm Groves' },
              { src: '/images/hero-kasbahs.webp', alt: 'Ancient kasbah fortress rising above palm trees in the Skoura oasis of Morocco', label: 'Skoura Kasbah Architecture' },
              { src: '/images/art-desert-stargazing.webp', alt: 'Star-filled night sky above a desert oasis camp in southern Morocco', label: 'Desert Stargazing' },
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
                What is the best time to visit Morocco desert oases?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                October to April offers pleasant temperatures of 15 to 28 degrees Celsius. Spring (March-April) is ideal for green palm groves. The date harvest in October-November is particularly rewarding. Avoid June-August when temperatures exceed 45 degrees Celsius.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get to the Draa Valley from Marrakech?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Take the N9 over the Tizi n&apos;Tichka pass to Ouarzazate (4 hours), then continue to Zagora (2.5 hours more). Grand taxis from Ouarzazate to Zagora cost from 80 MAD. CTM buses also serve the route. Private transfers from Marrakech cost from 1,200 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Figuig oasis as a tourist?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Figuig is open to tourists and is one of Morocco&apos;s most authentic oases. Located near the Algerian border, it requires effort to reach but rewards with genuine hospitality. Guesthouses from 250 MAD per night. A local guide (from 200 MAD per day) is recommended.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a khettara and where can I see one?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A khettara is an ancient underground irrigation channel using gravity to transport water from mountain aquifers to oasis settlements. These systems have sustained oases for over a thousand years. See functioning khettaras in the Tafilalet region near Erfoud, Figuig, and Tinghir.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are camel rides available at Morocco oases?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, widely available. Zagora offers 1-hour sunset treks (from 150 MAD) to multi-day expeditions. Skoura and Tinghir arrange palm grove excursions. Choose locally-run cooperatives that treat animals well. Seasonal pricing may vary.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I pack for visiting desert oases?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Lightweight loose clothing, wide-brimmed hat, SPF 50+ sunscreen, sturdy walking shoes, and a shemagh for wind and sand. Bring a reusable water bottle and drink at least 3 liters daily. A light jacket is essential for cool evenings. Modest dress is appreciated in villages.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many days do I need to explore Morocco oases?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A minimum of 5 to 7 days covers the route from Ouarzazate through the Draa Valley to Zagora and back via Tinghir and Todra Gorge. For thorough exploration including Skoura, Dades Valley, Tata, or Figuig, plan 10 to 14 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the Amazigh heritage, traditions, crafts, and village experiences across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, trekking, and mountain experiences across the High, Middle, and Anti-Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-stargazing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Stargazing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Dark sky locations, desert astronomy, and the best spots for stargazing in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-camping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Camping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Desert camping, bivouacs, and outdoor accommodation across Morocco&apos;s landscapes.
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
            Ready to Explore Morocco&apos;s Desert Oases?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the vast palm groves of the Draa Valley to the hidden ksour of Figuig, Morocco&apos;s
            oases offer a journey through some of the most extraordinary landscapes and cultures
            in North Africa. Start planning your oasis adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-berber-culture"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Users className="w-5 h-5" />
              Explore Berber Culture
            </Link>
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
