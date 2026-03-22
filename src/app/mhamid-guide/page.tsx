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
  Sunset,
  TreesIcon,
  Mountain,
  Coffee,
  MoonStar,
  Tent,
  Car,
  ShoppingBag,
  Users,
  ThermometerSun,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'M\'hamid El Ghizlane Guide 2026 | Gateway to Erg Chigaga & the Sahara',
  description:
    'Complete guide to M\'hamid El Ghizlane, Morocco. Gateway to Erg Chigaga\'s massive untouched dunes, camel treks, luxury desert camps, Monday souk, Draa Valley drive, and authentic Saharan experiences. Prices in MAD and insider tips.',
  keywords: [
    'mhamid morocco',
    'erg chigaga',
    'mhamid desert camp',
    'mhamid guide',
    'mhamid camel trek',
    'mhamid to erg chigaga',
    'mhamid el ghizlane',
    'mhamid sahara',
    'erg chigaga dunes',
    'mhamid desert tours',
    'mhamid monday souk',
    'mhamid kasbah',
    'draa valley',
    'mhamid stargazing',
    'mhamid nomads',
    'iriki lake morocco',
    'sahara desert morocco',
    'mhamid 2026',
  ],
  openGraph: {
    title: 'M\'hamid El Ghizlane Guide 2026 | Gateway to Erg Chigaga',
    description:
      'The complete guide to M\'hamid El Ghizlane: Erg Chigaga dunes, camel treks, desert camps, Monday souk, Draa Valley drive, nomadic encounters, and Saharan stargazing. Real prices in MAD.',
    url: `${BASE_URL}/mhamid-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-mhamid.webp`,
        width: 1200,
        height: 630,
        alt: 'Golden sand dunes of Erg Chigaga in the Sahara desert near M\'hamid El Ghizlane Morocco at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M\'hamid El Ghizlane Guide 2026 | Erg Chigaga & Sahara',
    description:
      'Erg Chigaga dunes, camel treks, luxury desert camps, Monday souk, nomadic encounters, and stargazing. Complete M\'hamid guide with real prices.',
    images: [`${BASE_URL}/images/hero-mhamid.webp`],
  },
  alternates: { canonical: `${BASE_URL}/mhamid-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/mhamid-guide`,
  name: 'M\'hamid El Ghizlane Guide 2026 | Gateway to Erg Chigaga & the Sahara',
  description:
    'Complete guide to M\'hamid El Ghizlane. Gateway to Erg Chigaga\'s massive dunes, camel treks, desert camps, and authentic Saharan experiences.',
  url: `${BASE_URL}/mhamid-guide`,
  image: `${BASE_URL}/images/hero-mhamid.webp`,
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
  mainEntityOfPage: `${BASE_URL}/mhamid-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'M\'hamid El Ghizlane',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'M\'hamid Guide', item: `${BASE_URL}/mhamid-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the difference between Erg Chigaga and Erg Chebbi?', acceptedAnswer: { '@type': 'Answer', text: 'Erg Chigaga (near M\'hamid) and Erg Chebbi (near Merzouga) are Morocco\'s two great sand seas. Erg Chigaga is larger, more remote, and far less visited — reaching it requires a 50 km off-road journey by 4x4 or a 2-3 day camel trek. Erg Chebbi is more accessible with a paved road and more tourist infrastructure. Erg Chigaga offers a wilder, more authentic Saharan experience with fewer crowds, while Erg Chebbi is easier to reach and has more accommodation options.' } },
    { '@type': 'Question', name: 'How do you get to Erg Chigaga from M\'hamid?', acceptedAnswer: { '@type': 'Answer', text: 'Erg Chigaga is about 50 km west of M\'hamid, accessible only by 4x4 vehicles or camel trek. A 4x4 journey takes 1.5-2 hours across desert piste (unpaved track). A camel trek takes 2-3 days with overnight camps. Most visitors book a package from M\'hamid that includes 4x4 transport, desert camp, meals, and activities. Prices start from 800 MAD per person for an overnight trip.' } },
    { '@type': 'Question', name: 'When is the best time to visit M\'hamid and Erg Chigaga?', acceptedAnswer: { '@type': 'Answer', text: 'October to April is ideal, with comfortable desert temperatures (15-28 degrees during the day). March and April bring the Taragalte Music Festival and spring temperatures. Summer (June to September) is extremely hot, often exceeding 45 degrees, making outdoor activities dangerous. Winter nights can be cold (near freezing), so bring warm layers for desert camping.' } },
    { '@type': 'Question', name: 'Is M\'hamid worth visiting or should I go to Merzouga instead?', acceptedAnswer: { '@type': 'Answer', text: 'M\'hamid offers a more authentic, less commercialized Saharan experience. If you want massive untouched dunes, nomadic encounters, and solitude, choose M\'hamid and Erg Chigaga. If you prefer easier access, more accommodation choices, and don\'t mind sharing the dunes with more tourists, Merzouga and Erg Chebbi is the better option. Both are spectacular — it depends on whether you prioritize remoteness or convenience.' } },
    { '@type': 'Question', name: 'What should I pack for a desert trip from M\'hamid?', acceptedAnswer: { '@type': 'Answer', text: 'Essential items: sunscreen (SPF 50+), sunglasses, wide-brimmed hat, scarf or cheche (desert turban), warm layers for cold nights, comfortable closed-toe shoes, headlamp or flashlight, reusable water bottle, camera with spare batteries (cold drains batteries), and basic toiletries. Desert camps provide blankets and mattresses, but a sleeping bag liner adds comfort in winter.' } },
    { '@type': 'Question', name: 'How do you get to M\'hamid El Ghizlane?', acceptedAnswer: { '@type': 'Answer', text: 'M\'hamid is 360 km south of Ouarzazate via the N9 through the Draa Valley (5-6 hours driving). The road passes through Agdz and Zagora. CTM and Supratours buses run from Marrakech to Zagora (from 180 MAD, 8-10 hours), and local transport connects Zagora to M\'hamid (from 30 MAD, 1.5 hours). Many travelers arrive as part of a multi-day tour from Marrakech or Ouarzazate.' } },
  ],
};

/* ===============================================================
   DATA: DESERT & DUNES
   =============================================================== */

const desertExperiences = [
  {
    name: 'Erg Chigaga Dunes',
    icon: Mountain,
    category: 'Natural Wonder',
    price: 'From 800 MAD (overnight trip)',
    duration: 'Minimum 1 night (2-3 days ideal)',
    bestTime: 'October to April',
    description:
      'Erg Chigaga is Morocco\'s largest sand sea and one of the most spectacular desert landscapes in the Sahara. Stretching over 40 km long and 15 km wide, these golden dunes rise up to 300 meters — taller than the Eiffel Tower. Unlike the more famous Erg Chebbi near Merzouga, Chigaga remains wonderfully wild and uncommercial. Reaching it requires a 50 km off-road journey from M\'hamid across hammada (rocky desert) and dried lake beds, which filters out casual visitors and preserves the sense of true wilderness. Standing atop the highest dune at sunset, with nothing but sand stretching to every horizon and the silence broken only by wind, is one of the most profound experiences Morocco offers. The dunes shift color through the day — pale gold at noon, deep amber at sunset, silver under moonlight, and rose-pink at dawn.',
    insiderTip:
      'Book a 2-night trip if possible. The first day\'s 4x4 journey across the desert is itself extraordinary, passing through hammada, dried lakes, and nomadic camps. Arriving at Chigaga for sunset on day one, spending a full day exploring the dunes, and watching sunrise on day two before returning gives the complete experience. One-night trips feel rushed. Ask your camp to drive you to the highest dune crest for sunset — the panorama is life-changing.',
  },
  {
    name: 'Camel Treks',
    icon: Compass,
    category: 'Desert Adventure',
    price: 'From 600 MAD per day',
    duration: '1-3 days',
    bestTime: 'October to April (mornings and late afternoons)',
    description:
      'A camel trek from M\'hamid to Erg Chigaga is the traditional way to reach the great dunes, following routes that nomads have used for centuries. The classic trek takes 2-3 days, spending nights at simple bivouac camps under the stars. The rhythm of camel travel is deeply meditative — the gentle swaying, the creak of leather, the vast silence of the desert broken only by hoofbeats in sand. Shorter options include sunset camel rides near M\'hamid (1-2 hours) or single-day treks to smaller dune fields. The longer treks pass through varied terrain — rocky hammada, acacia-dotted oases, dried river beds, and finally the towering dunes of Chigaga emerging on the horizon. Dromedary camels are remarkably gentle, and experienced guides handle all logistics including camp setup, cooking, and navigation.',
    insiderTip:
      'The 2-day trek is the sweet spot — long enough to settle into the desert rhythm without becoming saddle-sore. Wear loose trousers and bring a cushion or folded blanket for the saddle. Start early (before 8 AM) to cover distance before the midday heat. Your guide will provide a cheche (desert turban) — wear it for sun and sand protection. Tipping your guide and camel handler is customary (from 100-200 MAD per day).',
  },
  {
    name: 'Desert Camps',
    icon: Tent,
    category: 'Accommodation & Experience',
    price: 'From 500 MAD per person (basic) / From 2,000 MAD (luxury)',
    duration: '1-2 nights',
    bestTime: 'October to April',
    description:
      'Desert camps at Erg Chigaga range from simple nomadic bivouacs to full luxury glamping experiences, and the choice fundamentally shapes your Saharan experience. Basic camps offer traditional Berber tents with mattresses, shared facilities, and meals cooked over open fire — an authentic and affordable way to sleep under the stars. Mid-range camps add private tents with proper beds, solar-powered lighting, and seated dining areas. Luxury camps like Erg Chigaga Luxury Desert Camp offer palatial tents with real beds, hot showers, flush toilets, carpeted interiors, and gourmet meals — an improbable oasis of comfort in the middle of the Sahara. What all camps share is the magic of the setting: sunset from the dune crests, Berber music around the campfire, star-filled skies of impossible clarity, and sunrise painting the dunes gold.',
    insiderTip:
      'Luxury camps should be booked well in advance, especially for October to December and March to April. Basic camps can often be arranged on shorter notice through M\'hamid agencies. All camp prices typically include 4x4 transport from M\'hamid, dinner, breakfast, and sunset/sunrise dune walks. Bring a headlamp — camps have minimal lighting for stargazing. Even luxury camps get cold at night in winter (December-February), so pack warm layers.',
  },
];

/* ===============================================================
   DATA: TOWN & CULTURE
   =============================================================== */

const townCulture = [
  {
    name: 'Monday Souk & Market',
    icon: ShoppingBag,
    category: 'Cultural Experience',
    price: 'Free to browse',
    duration: '1-2 hours',
    bestTime: 'Monday morning (8 AM - 1 PM)',
    description:
      'The weekly Monday souk is the heartbeat of M\'hamid, transforming the dusty town center into a vibrant marketplace where desert communities converge. Nomadic and semi-nomadic families travel from camps across the region to trade, socialize, and stock up on supplies. The souk sprawls across several areas: livestock sections where camels, goats, and donkeys are bought and sold; produce stalls piled with dates, vegetables, and desert herbs; fabric merchants with bolts of indigo-dyed cloth and desert turbans; and household goods from cooking pots to rope. The atmosphere is authentic and largely untouched by tourism — this is a functioning desert market, not a souvenir bazaar. The human tapestry is extraordinary: Berber, Arab, Sahrawi, and sub-Saharan faces reflecting M\'hamid\'s position as a historic crossroads of trans-Saharan trade routes.',
    insiderTip:
      'Arrive early (before 9 AM) for the liveliest trading, especially the camel and livestock sections. The souk winds down by early afternoon. Bring cash — there are no card facilities. Photography is generally welcomed in the market areas but always ask before photographing individuals. The date stalls sell superb Medjool dates at local prices (from 30 MAD per kg). Buy a desert cheche turban (from 30-50 MAD) — you will need it for the dunes.',
  },
  {
    name: 'Old Kasbah of M\'hamid',
    icon: Landmark,
    category: 'Historical Heritage',
    price: 'Free',
    duration: '30-60 minutes',
    bestTime: 'Late afternoon (golden light)',
    description:
      'The crumbling kasbah at the heart of M\'hamid speaks to the town\'s centuries-old role as a trading post on the edge of the Sahara. Built from pisé (rammed earth), its eroding walls and collapsed towers have a haunting beauty, gradually returning to the desert dust from which they were formed. The kasbah once protected a thriving caravan stop where trans-Saharan traders rested before or after crossing the desert. Dates, gold, salt, and slaves were traded within its walls. Today, some sections are still inhabited, with families living alongside the ruins. The contrast between the old kasbah and the sparse modern town is a vivid illustration of how desert communities adapt and endure.',
    insiderTip:
      'Walk through respectfully — some areas are private residences. The late afternoon light turns the pisé walls a deep amber-gold that photographs beautifully against the clear desert sky. Combine with a walk through the adjacent palmery. Local children may offer to guide you for a small tip (from 10-20 MAD) — they often know hidden corners and rooftop viewpoints.',
  },
  {
    name: 'Oasis Palmery',
    icon: TreesIcon,
    category: 'Nature & Culture',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The palmery surrounding M\'hamid is a lush green miracle in the desert landscape, sustained by underground water from the dying Draa River. Thousands of date palms create shaded corridors where the temperature drops noticeably, the light filters green through the fronds, and the sounds of the desert are replaced by birdsong and the rustle of wind through palms. Walking through the palmery, you pass small irrigated garden plots where families grow vegetables, herbs, and henna. Donkeys carry loads along dusty paths, and the occasional well or spring pool provides a gathering point. The palmery represents the essential relationship between water and life in the Sahara — without it, M\'hamid could not exist. Unfortunately, the palmery has been shrinking as the Draa River receives less water upstream, making this living ecosystem both beautiful and fragile.',
    insiderTip:
      'Walk or cycle rather than driving. The palmery is a network of narrow paths best explored on foot. A local guide (from 100 MAD for an hour) can explain the irrigation systems and introduce you to farming families. The date harvest (October-November) is the most interesting time to visit. Look for the old khettara (underground irrigation channels) — engineering marvels that have sustained oasis life for centuries.',
  },
  {
    name: 'Nomadic Berber Encounters',
    icon: Users,
    category: 'Cultural Immersion',
    price: 'From 200 MAD (guided visit)',
    duration: '2-4 hours',
    bestTime: 'Morning',
    description:
      'The desert around M\'hamid is home to semi-nomadic Berber and Sahrawi families who maintain a traditional lifestyle increasingly rare in the modern world. Visiting a nomad camp — arranged through reputable guides and agencies in M\'hamid — offers a profound window into this way of life. Families live in low-profile dark tents (khaima) made from camel and goat hair, moving seasonally with their herds to find grazing. They will share mint tea prepared over an open fire, and often a simple meal of bread baked in sand and dates. The generosity and warmth of desert hospitality is legendary. These encounters are most authentic when arranged through local guides with genuine family connections, not as staged tourist performances.',
    insiderTip:
      'Ask your guide to take you to a camp where they have a personal connection — the encounter will be far more genuine than commercial "nomad visit" tours. Bring a gift: sugar, tea, cooking oil, or school supplies for children are deeply appreciated and more meaningful than money. Dress modestly. The conversation, even through translation, reveals perspectives on life, land, and freedom that challenge Western assumptions.',
  },
];

/* ===============================================================
   DATA: EXCURSIONS & NATURE
   =============================================================== */

const excursions = [
  {
    name: 'Iriki Lake (Dry Lake Bed)',
    icon: Compass,
    category: 'Natural Wonder',
    price: 'From 400 MAD (4x4 excursion)',
    duration: '3-4 hours',
    bestTime: 'Morning (for the best mirage effects)',
    description:
      'Lake Iriki is one of the most surreal landscapes in Morocco — a vast dry lake bed in the desert that was once a genuine lake fed by the Draa River. Today it is a flat, cracked expanse of white-crusted earth stretching to the horizon, creating extraordinary optical illusions and mirages. On hot days, the shimmering heat makes distant mountains appear to float above the lake surface. The scale is disorienting — you can walk for an hour in any direction with nothing to break the horizon. The dry lake bed sits within the Iriki National Park, and its edges are surrounded by small sand dunes and rocky desert. Reaching it requires a 4x4 and a knowledgeable guide, as there are no marked roads. The silence here is absolute — not even wind interrupts the void.',
    insiderTip:
      'Combine Iriki Lake with a trip to Erg Chigaga — many 4x4 routes pass through or near the lake bed. The morning is best for mirage photography. Bring plenty of water and sun protection — there is zero shade. The flat white surface makes an incredible photography backdrop. Ask your driver to stop at the lake\'s edge where small dunes meet the crusted surface for the most dramatic compositions.',
  },
  {
    name: 'Draa Valley Drive from Zagora',
    icon: Car,
    category: 'Scenic Drive',
    price: 'From 30 MAD (shared transport) / Free (own car)',
    duration: '1.5-2 hours',
    bestTime: 'Late afternoon (best light on kasbahs)',
    description:
      'The 95 km road from Zagora to M\'hamid follows the Draa River through one of Morocco\'s most beautiful valleys. The road passes through a string of oasis villages, each centered on a crumbling kasbah surrounded by date palms and irrigated fields. The landscape transitions dramatically as you drive south: the relatively green Draa Valley gradually yields to stony hammada, then to sand and scrub as the Sahara begins. Key stops include Tamegroute (famous for its green-glazed pottery and underground library of ancient Koranic manuscripts), the village of Tagounite, and the scattered kasbahs that punctuate the valley like sentinels. The drive itself is half the experience of reaching M\'hamid — the sense of the desert approaching, the settlements growing sparser, and the horizon expanding is deeply evocative.',
    insiderTip:
      'Stop in Tamegroute (30 km from Zagora) to visit the Nassiriya Zaouia and its library of 13th-century manuscripts, and to buy the distinctive green pottery (from 30 MAD for small pieces). The light is best in late afternoon when the kasbahs glow amber against the darkening sky. If driving yourself, fill up with fuel in Zagora — there are limited fuel stations between Zagora and M\'hamid.',
  },
  {
    name: 'Saharan Stargazing',
    icon: MoonStar,
    category: 'Night Experience',
    price: 'Free (included with most camps)',
    duration: '1-3 hours',
    bestTime: 'Year-round (new moon is best)',
    description:
      'The Sahara around M\'hamid and Erg Chigaga offers some of the darkest skies on Earth, with virtually zero light pollution for hundreds of kilometers. On a clear moonless night, the Milky Way arcs overhead in a luminous band so bright it casts shadows on the sand. Thousands of stars are visible to the naked eye — many travelers see shooting stars within minutes. The desert silence amplifies the experience: lying on a dune, gazing upward, with no sound but your own breathing, is transcendent. Some luxury camps offer guided stargazing with telescopes and knowledgeable guides who identify constellations, planets, and deep-sky objects. The winter months offer the clearest skies, while summer brings the Milky Way directly overhead but with hotter overnight temperatures.',
    insiderTip:
      'Check the lunar calendar before booking — plan for nights around the new moon for the darkest skies. Step away from camp lights (even candles and phone screens) and give your eyes 15-20 minutes to fully dark-adapt. Bring binoculars if you have them — they reveal far more detail in the Milky Way and star clusters than the naked eye. A simple star chart app (downloaded offline) helps identify what you are seeing. The pre-dawn hours (3-5 AM) often offer the clearest viewing.',
  },
];

/* ===============================================================
   DATA: PRACTICAL & BUDGET
   =============================================================== */

const budgetTips = [
  { tip: 'Group Desert Trips Save Money', icon: Users, description: 'Joining a group 4x4 trip to Erg Chigaga costs from 800-1,200 MAD per person including camp and meals. Private trips run from 2,000-3,000 MAD. Ask agencies to match you with other travelers.', savings: 'Save from 800-1,800 MAD vs. private' },
  { tip: 'Book in M\'hamid, Not Marrakech', icon: MapPin, description: 'Booking desert trips directly with M\'hamid agencies is significantly cheaper than through Marrakech tour operators, who add hefty commissions. A 2-day trip booked locally costs from 800 MAD vs. from 2,000 MAD via Marrakech.', savings: 'Save from 500-1,200 MAD per trip' },
  { tip: 'Basic Camps Are Authentic', icon: Tent, description: 'Basic nomadic bivouac camps (from 500 MAD per person) offer a more authentic experience than luxury camps (from 2,000 MAD). You still get the same dunes, sunset, stars, and Berber music — just with simpler facilities.', savings: 'Save from 1,500+ MAD per night' },
  { tip: 'Monday Souk for Supplies', icon: ShoppingBag, description: 'Stock up on snacks, dates, water, and desert essentials at the Monday souk. Local prices are far lower than tourist shop prices: dates from 30 MAD/kg, water from 5 MAD, cheche turbans from 30 MAD.', savings: 'Save from 50-100 MAD on supplies' },
  { tip: 'Shared Transport from Zagora', icon: Car, description: 'Shared grand taxis from Zagora to M\'hamid cost from 30-40 MAD per person. Private taxis charge from 300 MAD. The shared ride takes about 1.5 hours along the scenic Draa Valley road.', savings: 'Save from 250-260 MAD vs. private taxi' },
  { tip: 'Bring Your Own Warm Layers', icon: ThermometerSun, description: 'Desert nights are cold (near freezing in winter). Camps provide blankets but not sleeping bags. Bring warm layers from home rather than buying overpriced fleeces in tourist shops (from 200-400 MAD).', savings: 'Save from 200-400 MAD on gear' },
];

const insiderTips = [
  { tip: 'Sandstorm Season', icon: Wind, description: 'March to May brings occasional sandstorms (sirocco/chergui winds). These are rarely dangerous but reduce visibility and coat everything in fine sand. If caught, cover your face with a cheche and wait it out. Storms usually last a few hours.' },
  { tip: 'Water Is Precious', icon: AlertTriangle, description: 'Bring more water than you think you need — at least 3-4 liters per person per day in the desert. Dehydration happens faster than you realize. Camps provide water but carry emergency supplies on all excursions.' },
  { tip: 'Cash Only Economy', icon: CheckCircle, description: 'M\'hamid has very limited ATM access and no card payment facilities. Withdraw cash in Zagora or Ouarzazate before arriving. Budget at least from 1,500-2,000 MAD in cash for a 2-3 day stay including desert trip.' },
  { tip: 'The Taragalte Festival', icon: Sparkles, description: 'This annual music festival (usually October or November) brings Saharan and world musicians to perform in the desert near M\'hamid. It is an incredible experience combining music, culture, and desert camping. Book early.' },
  { tip: 'Respect Nomadic Privacy', icon: Heart, description: 'If you encounter nomadic camps while trekking, do not approach uninvited. Wait for an invitation or go with a guide who has a relationship with the family. Photographing people without permission is considered disrespectful.' },
  { tip: 'Phone Signal Disappears', icon: Globe, description: 'Mobile phone signal drops out once you leave M\'hamid and is non-existent at Erg Chigaga. Inform family of your plans before departing. Some camps have satellite phones for emergencies. Embrace the digital detox.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is the difference between Erg Chigaga and Erg Chebbi?', answer: 'Erg Chigaga (near M\'hamid) is larger, more remote, and far less visited than Erg Chebbi (near Merzouga). Reaching Chigaga requires a 50 km off-road journey, which filters out casual visitors. Erg Chebbi has a paved road right to its edge and more tourist infrastructure. Choose Chigaga for wilderness and solitude; choose Chebbi for convenience and more accommodation options. Both offer spectacular dunes.' },
  { question: 'How do you get to Erg Chigaga from M\'hamid?', answer: 'Erg Chigaga is about 50 km from M\'hamid, accessible only by 4x4 (1.5-2 hours) or camel trek (2-3 days). Most visitors book a package from M\'hamid agencies that includes 4x4 transport, desert camp, meals, and sunset/sunrise dune walks. Prices start from 800 MAD per person for an overnight group trip. Private trips cost from 2,000 MAD.' },
  { question: 'When is the best time to visit M\'hamid?', answer: 'October to April offers comfortable temperatures (15-28 degrees daytime). March-April brings the Taragalte Festival and spring wildflowers in the Draa Valley. Summer (June-September) is dangerously hot, often exceeding 45 degrees. Winter nights can reach near freezing, so pack warm layers for camping.' },
  { question: 'Is M\'hamid worth visiting or should I go to Merzouga?', answer: 'M\'hamid offers a more authentic, less commercialized experience with bigger, wilder dunes at Erg Chigaga. Merzouga is more accessible with more accommodation options. Choose M\'hamid if you want true desert wilderness and do not mind the extra effort to reach the dunes. Choose Merzouga for convenience and easier logistics.' },
  { question: 'What should I pack for a desert trip?', answer: 'Essentials: SPF 50+ sunscreen, sunglasses, wide-brimmed hat, cheche turban, warm layers for cold nights, closed-toe shoes, headlamp, reusable water bottle, camera with spare batteries, and basic toiletries. Camps provide mattresses and blankets. A sleeping bag liner adds warmth in winter.' },
  { question: 'How do you get to M\'hamid El Ghizlane?', answer: 'M\'hamid is 360 km south of Ouarzazate via the N9 through the Draa Valley (5-6 hours). CTM buses run from Marrakech to Zagora (from 180 MAD, 8-10 hours). From Zagora, shared grand taxis to M\'hamid cost from 30 MAD (1.5 hours). Many travelers visit as part of a multi-day tour from Marrakech.' },
  { question: 'Are there ATMs in M\'hamid?', answer: 'M\'hamid has very limited banking facilities. There may be one ATM but it is unreliable. Withdraw all the cash you need in Zagora or Ouarzazate before arriving. Budget at least from 1,500-2,000 MAD in cash for a 2-3 day stay.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/sahara-desert', icon: Mountain, title: 'Sahara Desert Guide', description: 'Everything you need to know about visiting the Moroccan Sahara.' },
  { href: '/morocco-stargazing', icon: MoonStar, title: 'Stargazing in Morocco', description: 'The best dark-sky locations and tips for observing the desert night sky.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, including the Draa Valley.' },
  { href: '/morocco-camping-guide', icon: Tent, title: 'Camping Guide', description: 'Camping in Morocco: gear, locations, wild camping rules, and desert tips.' },
  { href: '/budget-travel', icon: Lightbulb, title: 'Budget Travel Morocco', description: 'How to travel Morocco on a budget with real prices and money-saving strategies.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MhamidGuidePage() {
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
            backgroundImage: 'url(/images/hero-mhamid.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">M&apos;hamid Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete Destination Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            M&apos;hamid El Ghizlane
            <br className="hidden md:block" /> Gateway to the Sahara
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The last town before the desert begins. Your complete 2026 guide to Erg Chigaga&apos;s massive
            untouched dunes, camel treks, desert camps, and authentic Saharan experiences, with real prices and local tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Where the Road Ends and the Sahara Begins
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                M&apos;hamid El Ghizlane — &quot;the plain of gazelles&quot; — sits at the very end of the paved road
                in southeastern Morocco. Beyond this small, sun-baked town, there is nothing but the Sahara.
                For centuries, M&apos;hamid served as the last outpost on the trans-Saharan trade routes, a
                place where caravans loaded with gold, salt, and spices gathered before the perilous crossing
                to Timbuktu. Today, it is the gateway to Erg Chigaga, Morocco&apos;s largest and wildest sand
                sea — a place where tourism infrastructure gives way to genuine desert wilderness.
              </p>
              <p>
                While Merzouga and Erg Chebbi attract the majority of Morocco&apos;s desert tourists, M&apos;hamid
                and Erg Chigaga offer something increasingly rare: solitude, scale, and authenticity. The
                journey to Chigaga — 50 km of trackless desert navigated by 4x4 or camel — is itself an
                adventure. When you finally crest the last ridge and the dunes appear, rising 300 meters
                against the empty sky, the sense of arriving somewhere truly remote is overwhelming. At night,
                the absence of light pollution reveals a sky of impossible clarity, the Milky Way a luminous
                river from horizon to horizon.
              </p>
              <p>
                M&apos;hamid itself has its own quiet appeal. The Monday souk draws nomadic families from across
                the region. The crumbling kasbah speaks to centuries of Saharan trade. The palmery is a green
                miracle in the arid landscape. And the people — Berber, Arab, and Sahrawi — carry the
                hospitality and resilience of desert cultures in every interaction. This guide covers everything
                you need to plan a trip to M&apos;hamid and Erg Chigaga, from desert camps and camel treks to
                practical logistics and real prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 M&apos;hamid Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences that make M&apos;hamid one of Morocco&apos;s most unforgettable destinations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Erg Chigaga Dunes', price: 'From 800 MAD', time: '1-2 nights', category: 'Desert' },
              { rank: 2, name: 'Camel Trek to Chigaga', price: 'From 600 MAD/day', time: '2-3 days', category: 'Adventure' },
              { rank: 3, name: 'Saharan Stargazing', price: 'Free', time: '1-3 hours', category: 'Experience' },
              { rank: 4, name: 'Luxury Desert Camp', price: 'From 2,000 MAD', time: '1-2 nights', category: 'Glamping' },
              { rank: 5, name: 'Monday Souk', price: 'Free', time: '1-2 hours', category: 'Cultural' },
              { rank: 6, name: 'Nomadic Berber Visit', price: 'From 200 MAD', time: '2-4 hours', category: 'Cultural' },
              { rank: 7, name: 'Iriki Lake (Dry Lake Bed)', price: 'From 400 MAD', time: '3-4 hours', category: 'Nature' },
              { rank: 8, name: 'Old Kasbah', price: 'Free', time: '30-60 min', category: 'Heritage' },
              { rank: 9, name: 'Oasis Palmery Walk', price: 'Free', time: '1-2 hours', category: 'Nature' },
              { rank: 10, name: 'Draa Valley Drive', price: 'From 30 MAD', time: '1.5-2 hours', category: 'Scenic' },
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

      {/* -- Desert & Dunes -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert &amp; Dune Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Erg Chigaga is the crown jewel — Morocco&apos;s largest sand sea, wild, remote, and
            spectacularly untouched by mass tourism.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Desert trips should be booked in M&apos;hamid. October to April is the recommended season.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {desertExperiences.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Town & Culture -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Town &amp; Cultural Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            M&apos;hamid is more than a desert staging post. The town itself offers a window into
            Saharan life, ancient trade history, and nomadic culture.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Monday souk is the best time to experience local life. Guided nomadic visits should be arranged in advance.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {townCulture.map((item) => {
              const TownIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TownIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Excursions & Nature -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Excursions &amp; Natural Wonders
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the dunes — surreal dry lakes, scenic valley drives, and some of the darkest
            stargazing skies on Earth.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All off-road excursions require a 4x4 and experienced driver. Book through M&apos;hamid agencies.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {excursions.map((item) => {
              const ExcIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExcIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Budget Tips for M&apos;hamid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Smart strategies to experience the Sahara without overspending.
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
            Insider Tips for the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential knowledge for a safe, rewarding, and respectful desert experience.
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

      {/* -- Sample 3-Day Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 3-Day M&apos;hamid Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A day-by-day plan covering the essential M&apos;hamid and Erg Chigaga experience.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Arrive &amp; Explore M&apos;hamid
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning / Midday</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive in M&apos;hamid via the Draa Valley from Zagora, stopping in Tamegroute for green pottery
                      and ancient manuscripts (from 20 MAD entry). Settle into your guesthouse or hotel. If it is Monday,
                      explore the souk immediately — it winds down by early afternoon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk through the old kasbah and the palmery. Visit a local cafe for mint tea and chat with your
                      desert trip operator about logistics for the next day. Arrange a nomadic camp visit if time allows
                      (from 200 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Dinner at your guesthouse (most offer half-board from 100 MAD for dinner). Watch the sunset
                      from the rooftop terrace — even from town, the desert horizon turns extraordinary colors.
                      Early night before your desert departure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Erg Chigaga &amp; Desert Camp
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Depart M&apos;hamid by 4x4 (9-10 AM). The 1.5-2 hour journey crosses rocky hammada, dried lake
                      beds, and scattered acacia trees. Stop at Iriki Lake for photographs of the surreal dry lake bed
                      and its mirages. Continue to Erg Chigaga, arriving around noon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Settle into your desert camp. Lunch is served (included in package). Rest during the hottest
                      hours. Late afternoon, climb the highest dune for the panoramic view — the effort is
                      significant but the reward is one of Morocco&apos;s most spectacular vistas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Watch sunset from the dune crests — the colors are extraordinary. Dinner at camp with traditional
                      Berber tagine and bread baked in sand. Berber drumming and music around the campfire.
                      Stargazing under the darkest sky you may ever see. Sleep under the stars or in your tent.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 3: Sunrise &amp; Return
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Early Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Wake before dawn and climb a dune for sunrise. The dunes turn from grey-blue to rose-pink to
                      gold as the sun clears the horizon. Breakfast at camp. Savor a final walk in the dunes before
                      departure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Return Journey</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      4x4 return to M&apos;hamid (1.5-2 hours). Arrive by midday. Lunch in town, collect your
                      belongings, and either continue north through the Draa Valley or spend another night in M&apos;hamid.
                      Estimated total 3-day cost: from 1,500-4,000 MAD per person depending on camp level.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,200-1,800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Group trip, basic camp, guesthouse, local transport</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,500-4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private 4x4, mid-range camp, guided palmery walk, nomad visit</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 5,000-8,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Luxury desert camp, private camel trek, gourmet meals, private guide</p>
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
            Ready to Enter the Sahara?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the towering dunes of Erg Chigaga to Berber music under the stars, M&apos;hamid offers
            Morocco&apos;s most authentic and awe-inspiring desert experience. Start planning your journey today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sahara-desert"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Sahara Desert Guide
            </Link>
            <Link
              href="/morocco-stargazing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MoonStar className="w-5 h-5" />
              Stargazing Guide
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
