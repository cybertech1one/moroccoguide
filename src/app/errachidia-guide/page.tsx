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
  Droplets,
  Shield,
  Thermometer,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Errachidia Guide 2026 | Gateway to the Sahara & Ziz Valley',
  description:
    'Discover Errachidia, Morocco gateway to the Sahara. Explore the Ziz Gorge, Source Bleue de Meski, Tafilalet oasis, Tunnel du Legionnaire, Goulmima ksour, and the road to Merzouga. Complete 2026 guide with prices in MAD and local tips.',
  keywords: [
    'errachidia morocco',
    'ziz valley',
    'ziz gorge',
    'source bleue meski',
    'errachidia guide',
    'errachidia to merzouga',
    'tafilalet oasis',
    'tunnel du legionnaire',
    'goulmima morocco',
    'errachidia things to do',
    'ziz valley morocco',
    'meski natural spring',
    'errachidia travel guide',
    'aoufous souk',
    'tinjdad oasis',
    'errachidia sahara gateway',
    'errachidia 2026',
  ],
  openGraph: {
    title: 'Complete Errachidia Guide 2026 | Gateway to the Sahara & Ziz Valley',
    description:
      'The complete guide to Errachidia: Ziz Gorge panoramas, Source Bleue de Meski, Tafilalet palm groves, fortified ksour, and the road to Merzouga and the Sahara. Prices in MAD and insider tips.',
    url: `${BASE_URL}/errachidia-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-errachidia.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Ziz Valley and its palm-lined river cutting through red desert gorges near Errachidia Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Errachidia Guide 2026 | Ziz Valley & Sahara Gateway',
    description:
      'Ziz Gorge panoramas, Source Bleue de Meski, Tafilalet oasis, Tunnel du Legionnaire, fortified ksour, and the road to Merzouga. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-errachidia.webp`],
  },
  alternates: { canonical: `${BASE_URL}/errachidia-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/errachidia-guide`,
  name: 'Complete Errachidia Guide 2026 | Gateway to the Sahara & Ziz Valley',
  description:
    'Discover Errachidia, gateway to the Sahara. Explore the Ziz Gorge, Source Bleue de Meski, Tafilalet oasis, fortified ksour, and the road to Merzouga.',
  url: `${BASE_URL}/errachidia-guide`,
  image: `${BASE_URL}/images/hero-errachidia.webp`,
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
  mainEntityOfPage: `${BASE_URL}/errachidia-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Errachidia',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Errachidia Guide', item: `${BASE_URL}/errachidia-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Errachidia known for?', acceptedAnswer: { '@type': 'Answer', text: 'Errachidia is the gateway to the Sahara desert and the capital of the Draa-Tafilalet region. It is known for the spectacular Ziz Gorge and Ziz Valley, the Source Bleue de Meski natural spring, the vast Tafilalet oasis (the largest in Morocco), and as the main stopping point on the road from Fes or Midelt to Merzouga and the Erg Chebbi dunes.' } },
    { '@type': 'Question', name: 'How far is Errachidia from Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'Errachidia is approximately 130 km (about 2 hours by car) from Merzouga and the Erg Chebbi sand dunes. The road passes through Erfoud and Rissani, with good tarmac the entire way. Many travelers stop in Errachidia to explore the Ziz Valley before continuing to the desert.' } },
    { '@type': 'Question', name: 'Is Source Bleue de Meski worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Source Bleue de Meski is a beautiful natural spring and swimming hole set among palm trees, about 20 km south of Errachidia. The turquoise waters are fed by an underground spring and remain cool year-round. There is a campsite and picnic area on site. Entry costs from 10 MAD. It is a refreshing stop, especially in summer when temperatures exceed 40 degrees.' } },
    { '@type': 'Question', name: 'What is the best time to visit Errachidia?', acceptedAnswer: { '@type': 'Answer', text: 'The best months are October to April when temperatures are comfortable (15-28 degrees). Summers (June to August) are extremely hot, regularly exceeding 40 degrees. Spring (March-April) brings green palm groves and pleasant weather. The date harvest season in October is particularly atmospheric in the Tafilalet oasis.' } },
    { '@type': 'Question', name: 'Can you fly to Errachidia?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Errachidia has Moulay Ali Cherif Airport (ERH) with limited domestic flights, primarily from Casablanca via Royal Air Maroc. However, most travelers arrive by road from Fes (about 8 hours via Midelt and the Ziz Gorge on the N13), from Marrakech (about 9 hours via Ouarzazate), or from Meknes. CTM and Supratours buses serve Errachidia from major cities.' } },
    { '@type': 'Question', name: 'How many days do you need in Errachidia?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is sufficient to see the main sights. Day 1: Ziz Gorge panoramic viewpoint, Source Bleue de Meski, and the Errachidia market. Day 2: Tafilalet palm groves, Meski kasbah ruins, Aoufous, and optionally Goulmima or Tinjdad. Many travelers use Errachidia as a transit stop for one night en route to Merzouga.' } },
  ],
};

/* ===============================================================
   DATA: NATURAL WONDERS & GORGES
   =============================================================== */

const naturalWonders = [
  {
    name: 'Ziz Gorge Panoramic Viewpoint',
    icon: Mountain,
    category: 'Scenic Viewpoint',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning or late afternoon',
    description:
      'The Ziz Gorge is one of the most dramatic landscapes in all of Morocco. Driving south on the N13 from Midelt toward Errachidia, the road plunges into a canyon where the Ziz River has carved a deep gorge through red and ochre rock over millennia. The panoramic viewpoint, signposted along the highway, offers a staggering vista of the gorge below — the silver ribbon of the Ziz winding between sheer cliff walls, with palm groves clinging to the canyon floor hundreds of meters below. The scale is immense and photographs rarely do it justice.',
    insiderTip:
      'The main viewpoint is on the N13 about 25 km north of Errachidia. Pull over at the designated parking area. Late afternoon light turns the canyon walls deep amber and red — the most photogenic time. There are sometimes local vendors selling fossils and minerals at the viewpoint. The drive itself through the gorge is equally spectacular, so keep your camera accessible.',
  },
  {
    name: 'Ziz Valley Palm Groves',
    icon: TreesIcon,
    category: 'Natural Landscape',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning',
    description:
      'South of the gorge, the Ziz River valley opens into one of Morocco most magnificent oases. The Ziz Valley stretches for over 100 km, a green ribbon of date palms, olive trees, almond orchards, and irrigated fields cutting through the arid pre-Saharan landscape. Villages of red earthen architecture dot the valley, connected by footpaths along traditional irrigation channels called khettara. Walking through the palm groves at dawn, with mist rising from the irrigation channels and the sound of birdsong filling the air, is one of the most peaceful experiences in southern Morocco.',
    insiderTip:
      'The best stretches of the Ziz Valley for walking are between Errachidia and Erfoud. Stop at any village and ask if you can walk through the palmerie — locals are generally welcoming. The date harvest (October-November) is the most vibrant time, with families working among the palms. Bring water and sun protection as shade outside the groves is nonexistent.',
  },
  {
    name: 'Source Bleue de Meski',
    icon: Droplets,
    category: 'Natural Spring & Swimming',
    price: 'From 10 MAD',
    duration: '1-3 hours',
    bestTime: 'Morning (for swimming) / Any time for scenery',
    description:
      'Source Bleue de Meski is a natural spring oasis about 20 km south of Errachidia, where crystal-clear turquoise water bubbles up from underground into a series of pools surrounded by date palms and tamarisk trees. The water maintains a refreshing cool temperature year-round, making it a paradise in the scorching summer months. A stone-lined swimming pool has been built around the main spring, creating a natural lido that locals and travelers alike enjoy. Above the spring, the crumbling ruins of an old kasbah stand on the hillside, adding historical atmosphere to the natural beauty.',
    insiderTip:
      'Arrive early in the morning for the most tranquil experience — by midday on weekends and holidays it fills with local families. The campsite beside the spring is one of the most atmospheric in Morocco, set directly under the palms. Bring your own towel for swimming. The water is cold even in summer — refreshing but a shock at first. The ruins above are worth climbing for the view over the palmerie.',
  },
  {
    name: 'Tunnel du Legionnaire',
    icon: Mountain,
    category: 'Historical Landmark',
    price: 'Free',
    duration: '15-30 minutes',
    bestTime: 'Any time',
    description:
      'Carved through solid rock by the French Foreign Legion in the 1930s, the Tunnel du Legionnaire (Tunnel of the Legionnaire) is a remarkable feat of colonial-era engineering on the N13 between Midelt and Errachidia. The single-lane tunnel punches through a ridge of the Atlas Mountains, saving the road from a treacherous detour around the cliff face. Driving through it is a memorable experience — one moment you are in harsh mountain terrain, and the next the landscape opens dramatically into the beginning of the pre-Saharan south. A memorial plaque commemorates the legionnaires who built it.',
    insiderTip:
      'The tunnel is narrow and one direction has priority — watch for oncoming traffic and honk before entering. Stop at the small pullover on the southern side for photographs. The landscape transition here is striking: you are literally crossing from the Atlas mountain world into the Saharan world. Many tour groups rush past without stopping — take five minutes to appreciate the geography.',
  },
];

/* ===============================================================
   DATA: KASBAHS, KSOUR & HERITAGE
   =============================================================== */

const heritageAttractions = [
  {
    name: 'Meski Kasbah Ruins',
    icon: Landmark,
    category: 'Historical Ruins',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon (golden light)',
    description:
      'Perched on a rocky hillside above Source Bleue de Meski, the ruins of the old Meski kasbah are a haunting reminder of the region military and trading past. The crumbling watchtowers and earthen walls, built from local pise (rammed earth), were once part of a fortified settlement that controlled the Ziz Valley trade routes. Today the walls are slowly dissolving back into the landscape, but the remaining structures are photogenic against the backdrop of the palm grove below and the arid hills beyond. The climb to the ruins rewards with a panoramic view of the entire oasis.',
    insiderTip:
      'The path from Source Bleue de Meski to the kasbah is steep and rocky — wear sturdy shoes. Late afternoon light is best for photography, with the golden sun illuminating the red earth walls. The ruins are unguarded and free to explore, but be careful of unstable walls and loose stones. Combine with a swim at the spring below.',
  },
  {
    name: 'Goulmima Fortified Ksour',
    icon: Landmark,
    category: 'Heritage Architecture',
    price: 'Free (tip for local guide from 50 MAD)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'The town of Goulmima, about 45 km west of Errachidia on the N10, contains some of the most impressive and best-preserved fortified ksour (plural of ksar — fortified village) in southern Morocco. The old ksar of Goulmima is a remarkable labyrinth of covered passageways, internal courtyards, granary rooms, and defensive towers, all built from rammed earth and palm wood. Unlike the more famous Ait Benhaddou, Goulmima sees very few tourists, giving you an authentic and undisturbed glimpse into traditional Amazigh (Berber) communal architecture. Some families still live within the old walls.',
    insiderTip:
      'Ask at the entrance of the old ksar for a local guide — someone from the village who can unlock doors and explain the communal living arrangements. A tip of from 50-100 MAD is appropriate. The internal passageways are dark and cool, a stark contrast to the blazing outside. Photography inside is atmospheric but you will need a wide-angle lens and high ISO. Visit alongside nearby Tinjdad for a full day of oasis and ksar exploration.',
  },
  {
    name: 'Tinjdad Oasis & Ksar',
    icon: Globe,
    category: 'Oasis Village',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'Tinjdad, located about 65 km west of Errachidia on the N10, is a charming oasis town surrounded by dense palm groves and traditional earthen architecture. The old ksar of Tinjdad features the distinctive southern Moroccan construction — high rammed-earth walls, corner towers, and narrow internal streets designed for defense and shade. The surrounding palmerie is irrigated by an intricate system of seguias (irrigation channels) that have sustained agriculture here for centuries. Walking through the groves, past gardens of mint, henna, and vegetables growing under the palms, offers a window into the timeless oasis way of life.',
    insiderTip:
      'Tinjdad is on the main road between Errachidia and Tinghir/Todra Gorge, making it an easy stop on a through-journey. The Museum of Oasis (Musee des Oasis) near Tinjdad, if open, provides context on traditional oasis irrigation systems and daily life. The local souk on Mondays is worth timing your visit around. From Tinjdad, the Todra Gorge is only about 50 km further west.',
  },
  {
    name: 'Errachidia Military Heritage',
    icon: Shield,
    category: 'Historical Interest',
    price: 'Free (exterior viewing)',
    duration: '30 minutes',
    bestTime: 'Any time',
    description:
      'Errachidia (formerly known as Ksar es-Souk under French colonial rule) has a distinctive military character that sets it apart from other Moroccan oasis towns. The city was established as a French military garrison in the 1920s, and its grid-pattern layout of wide boulevards and administrative buildings reflects this heritage. The city was renamed after Moulay Rachid, the founder of the Alaouite dynasty, after independence. While the military buildings themselves are not open to tourists, the orderly French colonial architecture — unusual in this region of organic kasbahs and ksour — makes for an interesting contrast and a brief walking exploration.',
    insiderTip:
      'The colonial-era buildings are concentrated around Avenue Moulay Ali Cherif and the main boulevard. The contrast between the ordered French grid and the organic earthen architecture of nearby villages perfectly illustrates the cultural layering of southern Morocco. The city center has banks, ATMs, pharmacies, and a Carrefour supermarket — useful for stocking up before heading into the desert.',
  },
];

/* ===============================================================
   DATA: MARKETS & LOCAL LIFE
   =============================================================== */

const marketsAndLife = [
  {
    name: 'Errachidia Central Market',
    icon: ShoppingBag,
    category: 'Local Market',
    price: 'Free to browse',
    duration: '1-1.5 hours',
    bestTime: 'Morning (8 AM - 12 PM)',
    description:
      'The central market of Errachidia is a vibrant window into daily life in a southern Moroccan city. Unlike the tourist-oriented souks of Marrakech or Fes, this market serves the local population — farmers from the Ziz Valley, semi-nomadic families from the desert fringe, and city residents. Stalls overflow with locally grown dates (the Tafilalet is famous for its Mejhoul variety), olives, spices, fresh produce, and household goods. The meat and vegetable sections are lively and colorful, and the atmosphere is authentic and unhurried.',
    insiderTip:
      'The market is busiest in the morning, especially on market days. Look for Mejhoul dates — considered among the finest in the world, they are remarkably cheap here compared to export prices (from 40-80 MAD per kilo depending on quality). The spice section stocks desert herbs and traditional remedies. Bring small bills as vendors may not have change for large notes.',
  },
  {
    name: 'Aoufous Souk',
    icon: ShoppingBag,
    category: 'Weekly Market',
    price: 'Free to browse',
    duration: '1-2 hours',
    bestTime: 'Wednesday morning',
    description:
      'The village of Aoufous, about 30 km south of Errachidia on the road to Erfoud, holds a weekly souk that draws people from across the Ziz Valley and surrounding desert. This is a genuine rural market where Amazigh and Arab communities trade livestock, dates, grains, textiles, and household goods. The animal market section, where camels, goats, and sheep change hands, is particularly atmospheric. The souk represents a trading tradition that has continued in this valley for centuries, connecting oasis farmers with nomadic pastoralists.',
    insiderTip:
      'The Aoufous souk is held on Wednesdays. Arrive before 10 AM for the most activity — by midday the heat empties the market. The livestock section is at the edge of the souk and is fascinating to observe (ask before photographing people). Local women sell handwoven textiles and embroidered items that make excellent souvenirs. A grand taxi from Errachidia to Aoufous costs from 15-20 MAD per person shared.',
  },
];

/* ===============================================================
   DATA: GATEWAY TO THE DESERT
   =============================================================== */

const desertGateway = [
  {
    name: 'Road to Merzouga & Erg Chebbi',
    icon: Compass,
    category: 'Desert Gateway',
    price: 'Varies (transport from 100-300 MAD)',
    duration: 'Half day to full day (transit)',
    bestTime: 'October to April',
    description:
      'Errachidia is the main gateway for reaching Morocco most famous sand dunes. The road from Errachidia to Merzouga (about 130 km, 2 hours) passes through Erfoud and Rissani, two fascinating towns in their own right. Erfoud is the fossil capital of Morocco, with workshops where Devonian-era marine fossils are polished into tabletops, sinks, and decorative objects. Rissani is the cradle of the ruling Alaouite dynasty and home to a spectacular three-day souk. Beyond Rissani, the landscape becomes increasingly stark until the golden dunes of Erg Chebbi rise from the hammada like a mirage.',
    insiderTip:
      'If driving yourself, the road is well-paved the entire way. Stop in Erfoud to visit a fossil workshop (free entry, no obligation to buy). Rissani souk (Tuesday, Thursday, Sunday) is one of the most authentic in Morocco. The last 20 km before Merzouga are the most dramatic as the dunes come into view. Consider breaking the journey with a night in Errachidia and a night in Merzouga rather than rushing through.',
  },
  {
    name: 'Tafilalet Palm Groves',
    icon: TreesIcon,
    category: 'Oasis Landscape',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The Tafilalet is the largest oasis in Morocco and one of the largest in the world, covering over 1,300 square kilometers of palm groves, irrigated farmland, and scattered villages between Errachidia and Rissani. An estimated 1.5 million date palms grow here, and the date harvest in October and November is a major event. The oasis has sustained human settlement for millennia — the medieval trading city of Sijilmasa, once one of the wealthiest in Africa and the northern terminus of trans-Saharan gold routes, was located in the Tafilalet near present-day Rissani.',
    insiderTip:
      'The best way to experience the Tafilalet is to leave the main road and drive or walk along the smaller tracks between villages. The contrast between the lush green of the palmerie and the barren desert just beyond its edge is stark and beautiful. If visiting in October, ask locally about date festival celebrations. The Sijilmasa archaeological site near Rissani has limited visible ruins but immense historical significance — interpretive panels explain the city importance.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Sleep in Meski Campsite', icon: MoonStar, description: 'The campsite at Source Bleue de Meski offers pitches from 30-50 MAD per person under the palms. Bivouac rooms and basic bungalows are also available from 100 MAD. Beats any hotel for atmosphere.', savings: 'Save from 200-400 MAD vs. hotel' },
  { tip: 'Buy Dates Directly', icon: ShoppingBag, description: 'Buy Mejhoul dates directly from Tafilalet farmers or the Errachidia market from 40-80 MAD per kilo. Export-quality dates sell for 200-400 MAD per kilo in Marrakech tourist shops.', savings: 'Save from 100-300 MAD per kilo' },
  { tip: 'Shared Grand Taxis', icon: Car, description: 'Grand taxis between Errachidia, Erfoud, and Rissani cost from 25-40 MAD per person shared. Private hire for the same route costs from 200-300 MAD.', savings: 'Save from 150-250 MAD per trip' },
  { tip: 'Eat at Local Restaurants', icon: UtensilsCrossed, description: 'Local restaurants in Errachidia serve tagine with bread and tea from 30-50 MAD. Tourist restaurants in Merzouga charge from 80-150 MAD for similar food.', savings: 'Save from 50-100 MAD per meal' },
  { tip: 'Free Natural Attractions', icon: Mountain, description: 'The Ziz Gorge viewpoint, Ziz Valley walks, Tafilalet palm groves, and Goulmima ksour are all free. No entrance fees for the most spectacular sights in the region.', savings: 'Free — best views cost nothing' },
  { tip: 'Stock Up in Errachidia', icon: CheckCircle, description: 'Errachidia has supermarkets (Carrefour, Acima) with fixed prices. Buy water, snacks, and sunscreen here — prices in Merzouga and desert camps are marked up significantly.', savings: 'Save from 30-50% vs. desert prices' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Summer Heat Is Extreme', icon: Thermometer, description: 'Temperatures regularly exceed 42-45 degrees from June to August. If visiting in summer, plan activities for early morning and evening, carry abundant water, and ensure your accommodation has working air conditioning. Heat exhaustion is a real risk.' },
  { tip: 'Fill Up Your Fuel Tank', icon: Car, description: 'Errachidia is the last major city with multiple fuel stations before the desert. Fill up here — fuel becomes scarce and more expensive toward Merzouga. There are stations in Erfoud and Rissani but they can be busy or closed.' },
  { tip: 'ATM and Banking', icon: CheckCircle, description: 'Errachidia has banks and ATMs along the main avenue. Withdraw cash here as ATM availability diminishes significantly in Erfoud, Rissani, and Merzouga. Many desert camps and rural guesthouses are cash only.' },
  { tip: 'Best Photography Spots', icon: Camera, description: 'The Ziz Gorge viewpoint at golden hour, Source Bleue de Meski at dawn (reflections), Goulmima ksar interiors (bring a wide lens), and the Tafilalet palm groves at sunset. Carry a polarizing filter for the intense desert light.' },
  { tip: 'Respect in Villages', icon: Heart, description: 'Many villages in the Ziz Valley are conservative. Ask before photographing people, dress modestly, and greet locals with "salaam alaikum." A respectful approach opens doors to genuine hospitality — you may be invited for tea.' },
  { tip: 'Wind and Dust', icon: Wind, description: 'The region is prone to dust and sandstorms, especially in spring (March-April). Keep camera gear in sealed bags, wear sunglasses, and carry a scarf or buff to cover your face. Check conditions before driving if wind is strong.' },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  { question: 'What is Errachidia known for?', answer: 'Errachidia is the gateway to the Sahara and the capital of the Draa-Tafilalet region. It is known for the Ziz Gorge, the Ziz Valley oasis, Source Bleue de Meski natural spring, the vast Tafilalet palm groves (the largest oasis in Morocco), and as the primary stopping point between Fes/Midelt and Merzouga/Erg Chebbi dunes.' },
  { question: 'How far is Errachidia from Merzouga?', answer: 'About 130 km or 2 hours by car via Erfoud and Rissani. The road is well-paved throughout. Grand taxis and buses connect the towns. Many travelers spend a night in Errachidia exploring the Ziz Valley before continuing to the Sahara.' },
  { question: 'Is Source Bleue de Meski worth visiting?', answer: 'Absolutely. This natural spring and swimming hole set among palms is one of the most refreshing stops in southern Morocco, especially in summer. Entry from 10 MAD. The atmospheric campsite under the palms makes it worth an overnight stay. The kasbah ruins above offer panoramic views.' },
  { question: 'What is the best time to visit Errachidia?', answer: 'October to April is ideal. Spring (March-April) and autumn (October-November) offer the best balance of pleasant weather and green landscapes. Summer (June-August) is extremely hot (40 degrees and above). October date harvest season is especially atmospheric in the Tafilalet.' },
  { question: 'Can you fly to Errachidia?', answer: 'Yes, Errachidia has Moulay Ali Cherif Airport with limited flights from Casablanca via Royal Air Maroc. Most travelers arrive by road from Fes (about 8 hours), Meknes, or Marrakech (about 9 hours via Ouarzazate). CTM and Supratours buses serve Errachidia from all major cities.' },
  { question: 'How many days do you need in Errachidia?', answer: 'One to two days covers the main sights. Day 1: Ziz Gorge viewpoint, Source Bleue de Meski, and Errachidia market. Day 2: Tafilalet palm groves, Goulmima ksour, and Tinjdad. Many travelers use Errachidia as a one-night transit stop en route to Merzouga, but the area rewards a longer stay.' },
  { question: 'Is Errachidia safe for tourists?', answer: 'Yes, Errachidia is a calm, orderly city and very safe for tourists. It has a military and administrative character that makes it one of the quieter cities in southern Morocco. Standard travel precautions apply but violent crime is virtually unheard of. The people of the Ziz Valley are known for their hospitality.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/sahara-desert', icon: Compass, title: 'Sahara Desert Guide', description: 'Complete guide to Morocco Sahara: Erg Chebbi, Erg Chigaga, camel treks, and desert camps.' },
  { href: '/morocco-road-trip-routes', icon: Car, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, including the N13 Ziz Gorge route.' },
  { href: '/tinghir-guide', icon: Mountain, title: 'Tinghir Guide', description: 'Todra Gorge, palm oasis walks, rock climbing, and the gateway to the Dades Valley.' },
  { href: '/zagora-guide', icon: MapPin, title: 'Zagora Guide', description: 'Draa Valley, Tamegroute pottery, and the road to the Sahara via M\'hamid.' },
  { href: '/budget-travel', icon: Lightbulb, title: 'Morocco Budget Guide', description: 'How to travel Morocco on a budget with prices, tips, and money-saving strategies.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ErrachidiaGuidePage() {
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
            backgroundImage: 'url(/images/hero-errachidia.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Errachidia Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Errachidia
            <br className="hidden md:block" /> City Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Gateway to the Sahara, where the Ziz River carves through towering gorges into Morocco&apos;s
            greatest oasis. Your complete 2026 guide with real prices and local knowledge.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Errachidia: Where the Atlas Meets the Sahara
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Errachidia sits at one of Morocco&apos;s great geographical transitions. To the north, the
                High Atlas Mountains form a wall of rock and snow. To the south, the Sahara stretches
                endlessly toward sub-Saharan Africa. Between them, the Ziz River has carved a passage
                through the mountains — a spectacular gorge that opens into one of the largest oases on
                Earth. This is the Tafilalet, a vast sea of date palms that has sustained human
                civilization since antiquity, and Errachidia is its modern capital.
              </p>
              <p>
                Most travelers pass through Errachidia on the road from Fes or Midelt to the Saharan
                dunes of Merzouga. The N13 highway delivers one of Morocco&apos;s most dramatic driving
                experiences — through the Tunnel du Legionnaire, down into the Ziz Gorge, and out into
                the palm-filled valley. But those who rush through miss some of the south&apos;s most
                rewarding experiences: the turquoise swimming hole at Source Bleue de Meski, the
                labyrinthine fortified ksour of Goulmima, the vast Tafilalet palm groves where some of
                the world&apos;s finest dates grow, and the authentic markets where Amazigh and Arab
                communities have traded for centuries.
              </p>
              <p>
                This guide covers everything you need to know about Errachidia and its surroundings:
                natural wonders, heritage sites, markets, practical logistics, and the onward journey
                to the Sahara. Whether you are passing through or staying to explore, Errachidia
                deserves more than a fuel stop.
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
            Top 10 Errachidia Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential sights and experiences in and around Errachidia, from dramatic gorges to ancient oases.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Ziz Gorge Panoramic Viewpoint', price: 'Free', time: '30 min - 1 hour', category: 'Viewpoint' },
              { rank: 2, name: 'Source Bleue de Meski', price: 'From 10 MAD', time: '1-3 hours', category: 'Natural Spring' },
              { rank: 3, name: 'Tafilalet Palm Groves', price: 'Free', time: '2-3 hours', category: 'Oasis' },
              { rank: 4, name: 'Ziz Valley Walk', price: 'Free', time: '2-4 hours', category: 'Nature Walk' },
              { rank: 5, name: 'Goulmima Fortified Ksour', price: 'Free (tip from 50 MAD)', time: '1-2 hours', category: 'Heritage' },
              { rank: 6, name: 'Tunnel du Legionnaire', price: 'Free', time: '15-30 min', category: 'Landmark' },
              { rank: 7, name: 'Road to Merzouga via Erfoud', price: 'From 100 MAD', time: 'Half day', category: 'Desert Route' },
              { rank: 8, name: 'Errachidia Central Market', price: 'Free', time: '1-1.5 hours', category: 'Local Market' },
              { rank: 9, name: 'Meski Kasbah Ruins', price: 'Free', time: '30 min - 1 hour', category: 'Ruins' },
              { rank: 10, name: 'Tinjdad Oasis & Ksar', price: 'Free', time: '1-2 hours', category: 'Oasis Village' },
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

      {/* -- Natural Wonders & Gorges -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Natural Wonders &amp; Gorges
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the towering Ziz Gorge to the turquoise springs of Meski, the landscape around Errachidia
            is among the most dramatic in North Africa.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most natural attractions are free. Carry water, sunscreen, and wear sturdy footwear for exploration.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {naturalWonders.map((attraction) => {
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

      {/* -- Kasbahs, Ksour & Heritage -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kasbahs, Ksour &amp; Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The fortified villages and crumbling kasbahs of the Ziz Valley tell the story of centuries
            of oasis civilization, trade, and defense against desert raiders.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most heritage sites are free to explore. A small tip (from 50 MAD) for local guides is customary and appreciated.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {heritageAttractions.map((item) => {
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

      {/* -- Markets & Local Life -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Markets &amp; Local Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Authentic markets where Amazigh farmers, Arab traders, and semi-nomadic communities
            have exchanged goods for centuries.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Weekly souks follow a fixed schedule. The Errachidia central market operates daily.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {marketsAndLife.map((item) => {
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

      {/* -- Gateway to the Desert -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gateway to the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Errachidia is the launchpad for Morocco&apos;s most famous desert experiences. The road south
            leads to Erfoud, Rissani, and the golden dunes of Erg Chebbi.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The road from Errachidia to Merzouga is 130 km of well-paved highway. Allow 2 hours with stops.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {desertGateway.map((item) => {
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

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Errachidia
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Southern Morocco is already affordable, but these strategies help stretch your budget even further.
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
            Insider Tips for Errachidia
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical knowledge for navigating the gateway to the Sahara safely and enjoyably.
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
            Sample 2-Day Errachidia Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan for exploring the Ziz Valley and its surroundings before continuing to the Sahara.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Ziz Gorge, Meski &amp; Errachidia
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive via the N13 from Midelt, stopping at the Tunnel du Legionnaire and the Ziz Gorge
                      panoramic viewpoint. Take time to absorb the staggering views of the canyon and palm groves
                      below. Continue to Errachidia for breakfast at a local cafe (coffee and msemen from 15 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Drive 20 km south to Source Bleue de Meski. Swim in the natural spring pool, explore the
                      kasbah ruins on the hillside, and walk through the surrounding palm grove. Return to Errachidia
                      for a stroll through the central market — buy Mejhoul dates and spices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Dinner at a local restaurant — tagine with bread and salad from 40 MAD. Or camp at Source
                      Bleue de Meski under the palms (from 30 MAD per person) for an unforgettable night under
                      the stars. Estimated Day 1 cost: from 100-250 MAD.
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
                  Day 2: Ksour, Oasis &amp; Road to the Desert
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Drive west to Goulmima (45 km) to explore the fortified ksour. Hire a local guide (tip from
                      50 MAD) to navigate the labyrinthine covered passageways and learn about communal oasis life.
                      Continue to Tinjdad for a walk through its palmerie and old ksar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Errachidia and head south toward Merzouga. Stop in Erfoud to visit a fossil workshop
                      (free entry). Continue to Rissani to explore the souk (if Tuesday, Thursday, or Sunday).
                      Arrive at Merzouga in time to see the Erg Chebbi dunes glow at sunset.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Check into a desert camp or guesthouse in Merzouga. Optional: sunset camel trek into Erg
                      Chebbi (from 250 MAD per person). Dinner under the stars in a desert camp with traditional
                      music and drumming. Estimated Day 2 cost: from 200-500 MAD (excluding desert camp).
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 200-400 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Local food, shared taxis, free attractions, camping at Meski</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-1,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Rental car fuel, restaurant meals, guided ksar visits, fossil shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,200-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private driver, camel trek, luxury desert camp, guided tours</p>
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
            Continue Planning Your Desert Adventure
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
            Ready to Explore Errachidia &amp; the Ziz Valley?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the towering Ziz Gorge and turquoise springs of Meski to ancient fortified villages
            and the road to the Sahara, Errachidia is where the adventure south truly begins.
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
              href="/tinghir-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Tinghir &amp; Todra Gorge
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
