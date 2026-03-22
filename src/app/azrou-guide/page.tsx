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
  Coffee,
  TreesIcon,
  Snowflake,
  Users,
  Car,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Azrou Guide 2026 | Cedar Forests, Barbary Macaques & Berber Market',
  description:
    'Complete guide to Azrou, Morocco — cedar forests, Barbary macaques, legendary Tuesday market, Berber carpet cooperatives, skiing at Michlifen, and Aguelmam Azegza lake. Day trip from Fes or Ifrane. Prices in MAD.',
  keywords: [
    'azrou morocco',
    'azrou monkeys',
    'azrou cedar forest',
    'azrou market',
    'barbary macaques morocco',
    'azrou day trip',
    'azrou berber market',
    'cedre gouraud',
    'azrou guide',
    'azrou things to do',
    'middle atlas morocco',
    'azrou carpet cooperatives',
    'michlifen skiing',
    'aguelmam azegza',
    'azrou tuesday market',
    'azrou 2026',
  ],
  openGraph: {
    title: 'Azrou Guide 2026 | Cedar Forests, Barbary Macaques & Berber Market',
    description:
      'Discover Azrou, Morocco — Barbary macaques in ancient cedar forests, one of Morocco best Berber markets, carpet cooperatives, skiing, and mountain lakes. Complete guide with prices.',
    url: `${BASE_URL}/azrou-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the cedar forests and Middle Atlas Mountains near Azrou, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azrou Guide 2026 | Cedar Forests & Barbary Macaques',
    description:
      'Barbary macaques, ancient cedar forests, Tuesday Berber market, carpet cooperatives, skiing at Michlifen, and mountain lakes. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/azrou-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/azrou-guide`,
  name: 'Azrou Guide 2026 | Cedar Forests, Barbary Macaques & Berber Market',
  description:
    'Complete guide to Azrou, Morocco. Cedar forests, Barbary macaques, Tuesday Berber market, carpet cooperatives, skiing, and mountain lakes in the Middle Atlas.',
  url: `${BASE_URL}/azrou-guide`,
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
  mainEntityOfPage: `${BASE_URL}/azrou-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Azrou',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Azrou Guide', item: `${BASE_URL}/azrou-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where can I see Barbary macaques in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The most accessible place to see Barbary macaques in Morocco is in the cedar forests near Azrou, about 17 km south of town along the road to Midelt. The Cedre Gouraud forest area is the most popular viewing spot. The monkeys are semi-wild and accustomed to human presence, making sightings almost guaranteed. Visit in the morning for the most active behavior. Do not feed the monkeys — it harms their health and alters natural behavior.' } },
    { '@type': 'Question', name: 'Is the Azrou Tuesday market worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The Azrou Tuesday souk is considered one of the best Berber markets in Morocco. Amazigh (Berber) traders from across the Middle Atlas converge on the town, selling handwoven carpets, livestock, seasonal produce, mountain herbs, handcrafts, and household goods. It is an authentic, bustling market with minimal tourist presence and excellent prices. Arrive early (before 9 AM) for the best experience.' } },
    { '@type': 'Question', name: 'How do I get from Fes to Azrou?', acceptedAnswer: { '@type': 'Answer', text: 'Azrou is 78 km south of Fes (about 1.5 hours by car). Grand taxis from Fes cost from 35-45 MAD per person. CTM and other bus companies run regular services from Fes for from 30-40 MAD. You can also hire a private taxi (from 400-500 MAD one way). The road passes through Ifrane, making it easy to combine both towns. Driving is straightforward on well-maintained roads.' } },
    { '@type': 'Question', name: 'Can you ski in Morocco near Azrou?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Michlifen ski resort is just 20 km from Azrou (closer to Ifrane). The season typically runs from January to March when snow conditions permit. Facilities are basic compared to European resorts — expect simple lifts and rental equipment. Ski pass costs from 100-150 MAD per day. Jebel Hebri nearby also offers skiing. Snow is not guaranteed every year due to climate variability.' } },
    { '@type': 'Question', name: 'What is the Cedre Gouraud?', acceptedAnswer: { '@type': 'Answer', text: 'The Cedre Gouraud is a famous giant Atlas cedar tree in the forest south of Azrou, estimated to be over 800 years old. Standing over 40 meters tall with a massive girth, it was named after French General Henri Gouraud during the protectorate era. It is the most visited individual tree in Morocco and serves as the centerpiece of a popular forest picnic area. Barbary macaques frequently gather in the surrounding forest.' } },
    { '@type': 'Question', name: 'Is Azrou worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Azrou offers a completely different Morocco experience — cool mountain air, ancient cedar forests, Berber culture, and encounters with endangered Barbary macaques. The Tuesday market is one of Morocco most authentic souks. Combined with nearby Ifrane, it makes an excellent day trip from Fes or a refreshing stop on the route to the Sahara. In summer, the cool altitude (1250m) provides welcome relief from lowland heat.' } },
  ],
};

/* ===============================================================
   DATA: NATURE & WILDLIFE
   =============================================================== */

const natureAttractions = [
  {
    name: 'Barbary Macaque Encounters',
    icon: Eye,
    category: 'Wildlife Experience',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning (most active)',
    description:
      'The cedar forests south of Azrou are home to one of the most accessible populations of Barbary macaques (Macaca sylvanus) — the only primate species native to Africa found north of the Sahara and the only macaque living outside Asia. These endangered primates live in troops of 10-80 individuals among the ancient cedars, and along the forest road south of Azrou they have become accustomed to human visitors. Sightings are almost guaranteed. Watching mothers with infants, juveniles play-fighting, and dominant males patrolling their territory is a mesmerizing experience, set against the cathedral-like backdrop of towering cedar trees.',
    insiderTip:
      'The main viewing area is along the N13 road about 17 km south of Azrou in the Cedre Gouraud forest. Morning visits (before 10 AM) find the macaques most active and playful. Do NOT feed the monkeys — it causes dependency, aggression, and health problems. Keep food out of sight and watch your bags. Maintain a respectful distance and do not attempt to touch them. A telephoto lens or zoom is useful for photography without disturbing the animals.',
  },
  {
    name: 'Cedre Gouraud (Giant 800-Year-Old Cedar)',
    icon: TreesIcon,
    category: 'Natural Monument',
    price: 'Free',
    duration: '30-60 minutes',
    bestTime: 'Morning or afternoon',
    description:
      'The Cedre Gouraud is Morocco most famous tree — a colossal Atlas cedar (Cedrus atlantica) estimated to be over 800 years old, standing more than 40 meters tall with a trunk circumference exceeding 8 meters. Named after French General Henri Gouraud during the protectorate era, this ancient giant is the focal point of a pleasant forest clearing used as a picnic area by locals and visitors alike. The tree is a living reminder of the vast cedar forests that once covered much of the Middle Atlas before centuries of logging and overgrazing reduced them. Surrounding the Cedre Gouraud, the remaining forest of mature cedars creates an atmosphere of primeval grandeur.',
    insiderTip:
      'The tree is well-signposted along the N13 road south of Azrou. There is parking and a small vendor area nearby. The forest floor around the tree is perfect for a picnic. Combine the visit with Barbary macaque viewing — troops frequently pass through this area. The autumn colors (October-November) transform the surrounding oak and deciduous trees into a golden spectacle. Even in summer, bring a light jacket — the altitude (1600m+) keeps temperatures cool.',
  },
  {
    name: 'Cedar Forest Walks',
    icon: Compass,
    category: 'Nature & Hiking',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning',
    description:
      'The Atlas cedar forests surrounding Azrou are among the most magnificent in North Africa. These ancient woodlands — designated a UNESCO Biosphere Reserve — cover the middle slopes of the Middle Atlas at altitudes between 1,300 and 2,200 meters. The towering cedars, some reaching 50 meters, are interspersed with evergreen oaks, junipers, and wild cherry trees. The forest floor is carpeted with wildflowers in spring. Walking trails thread through the forest, offering encounters with diverse birdlife including the endangered Levaillant woodpecker, short-toed treecreeper, and coal tit.',
    insiderTip:
      'There are no formally marked hiking trails, so consider hiring a local guide (from 200 MAD for a half-day) for deeper forest exploration. The forest road south of Azrou toward Midelt is drivable and offers easy access to walking areas. Bring binoculars for birdwatching — the forests host over 200 bird species. Spring (April-May) brings wildflowers; autumn offers golden foliage. Always carry water and a warm layer regardless of season.',
  },
  {
    name: 'Aguelmam Azegza (Blue Lake)',
    icon: Mountain,
    category: 'Natural Wonder',
    price: 'Free',
    duration: '2-3 hours (including drive)',
    bestTime: 'Spring or early autumn',
    description:
      'Hidden in the Middle Atlas forests about 35 km southwest of Azrou, Aguelmam Azegza is a stunning natural lake whose name means "Blue Lake" in Tamazight. The lake occupies a volcanic crater surrounded by dense cedar and oak forest, and its waters shift between deep blue and emerald green depending on the light and season. It is one of the most beautiful natural landscapes in Morocco, yet remains almost unknown to international tourists. The surrounding forest is rich in birdlife and wildflowers, and the silence is broken only by birdsong and the wind in the cedars.',
    insiderTip:
      'A 4x4 or high-clearance vehicle is recommended for the final stretch of road, especially after rain. The lake is at its most beautiful in spring when snowmelt fills it to capacity and surrounding wildflowers bloom. Pack a picnic — there are no facilities. Swimming is possible but the water is cold. Combine with the Cedre Gouraud and macaque viewing for a full nature day. The lake is difficult to find without GPS or a local guide.',
  },
];

/* ===============================================================
   DATA: CULTURE & MARKETS
   =============================================================== */

const cultureAttractions = [
  {
    name: 'Tuesday Berber Market (Souk el-Had)',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free entry',
    duration: '2-3 hours',
    bestTime: 'Tuesday morning (7 AM - 1 PM)',
    description:
      'The Azrou Tuesday souk is legendary among travelers and consistently ranked as one of the best traditional markets in Morocco. Every Tuesday, Amazigh (Berber) traders from across the Middle Atlas mountains descend on the town with their goods. The market sprawls across a vast open-air area on the edge of town, divided into distinct sections: fresh produce piled in colorful pyramids, spice mountains, live livestock pens, handwoven carpets and rugs, hand-forged tools, medicinal herbs, wooden kitchen utensils, and piles of secondhand clothing. The atmosphere is electric — the sounds of bargaining, animal calls, and Tamazight conversation create an experience that feels timeless.',
    insiderTip:
      'Arrive between 7-9 AM for the best experience — by noon the market winds down. The carpet and rug section is exceptional: Middle Atlas Berber carpets with their distinctive geometric patterns are among Morocco finest, and prices here are significantly lower than Fes or Marrakech (small rugs from 300 MAD, medium from 800 MAD). The livestock area at the market edge is fascinating — sheep, goats, cattle, and occasionally donkeys change hands in rapid-fire negotiation. Bring cash in small bills.',
  },
  {
    name: 'Berber Carpet Cooperatives',
    icon: Sparkles,
    category: 'Artisan Heritage',
    price: 'Free to visit',
    duration: '1-1.5 hours',
    bestTime: 'Morning (weavers active)',
    description:
      'Azrou is a center for Middle Atlas Berber carpet weaving, a tradition passed down through generations of Amazigh women. Several cooperatives in and around the town welcome visitors to observe the weaving process, from the spinning and dyeing of raw wool to the intricate hand-knotting of geometric patterns. Each carpet tells a story through its symbols — diamonds represent femininity, zigzags signify water or life force, and specific color combinations identify the tribal origin. The cooperatives ensure fair wages for the weavers and offer carpets at fixed, transparent prices.',
    insiderTip:
      'The Cooperative Artisanale on the main road through town is the most established, with English-speaking staff who explain the weaving techniques and symbolism. Prices are fixed and fair — you are buying directly from the artisans without middlemen. A genuine hand-knotted Berber carpet takes 2-6 months to produce. Prices range from 500 MAD for small pieces to 5,000+ MAD for large, intricately knotted carpets. Shipping can be arranged. Visiting the cooperatives supports women economic empowerment in rural communities.',
  },
  {
    name: 'Azrou Old Medina & Rock',
    icon: Landmark,
    category: 'Cultural Heritage',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The small medina of Azrou clusters around the massive volcanic rock that gives the town its name ("azrou" means "rock" in Tamazight). This enormous boulder, sitting at the heart of town, is a geological curiosity and a symbol of Azrou identity. The medina streets are quiet and authentic — far from the intensity of Fes or Marrakech — with small shops selling everyday goods, traditional cafes where men play cards and drink mint tea, and a pleasant central square. The Kasbah district above the medina offers views over the town and the surrounding Middle Atlas forested hills.',
    insiderTip:
      'Climb to the viewpoint above the medina for panoramic views of the town and the Middle Atlas foothills. The main square is a pleasant spot for mint tea (from 10 MAD) and people-watching. The medina is compact and easy to navigate — spend an hour wandering before heading to the forest or market. Look for the cedar wood carving workshops in the medina — artisans create beautiful boxes, utensils, and decorative pieces from locally harvested cedar (from 50 MAD).',
  },
  {
    name: 'Ensemble Artisanal (Craft Center)',
    icon: Globe,
    category: 'Craftsmanship',
    price: 'Free to visit',
    duration: '30-60 minutes',
    bestTime: 'Morning',
    description:
      'The government-run Ensemble Artisanal on the main road through Azrou houses workshops and showrooms for local craftspeople specializing in cedar woodwork, stone carving, carpet weaving, and ironwork. Unlike the intense haggling of medina souks, the Ensemble Artisanal offers fixed prices displayed on items, making it a pressure-free shopping experience. The quality is generally high, as artisans are selected for their skill. Watching a master woodcarver transform a block of fragrant cedar into an intricate jewelry box is a highlight.',
    insiderTip:
      'Prices are fixed and clearly marked — no bargaining needed. The cedar woodwork is the standout: fragrant boxes (from 80 MAD), bowls (from 50 MAD), and decorative pieces make excellent, lightweight souvenirs. The stone carving workshops produce items from the local limestone and marble. Ask the artisans about their techniques — most are happy to demonstrate. Quality here is more consistent than at the Tuesday souk stalls, but prices may be marginally higher.',
  },
];

/* ===============================================================
   DATA: ADVENTURE & SEASONAL
   =============================================================== */

const adventureAttractions = [
  {
    name: 'Skiing at Michlifen & Jebel Hebri',
    icon: Snowflake,
    category: 'Winter Sport',
    price: 'From 100 MAD (day pass)',
    duration: 'Half day - full day',
    bestTime: 'January - March (snow dependent)',
    description:
      'Morocco has skiing, and the Michlifen resort near Azrou is one of the country two main ski areas (alongside Oukaimeden near Marrakech). Located about 20 km from Azrou and closer to Ifrane, Michlifen sits in a volcanic crater at 2,000 meters altitude. When winter brings sufficient snowfall, the slopes open with basic lifts serving gentle to moderate runs suitable for beginners and intermediates. Nearby Jebel Hebri (2,104m) offers additional slopes. The experience is modest compared to Alpine resorts, but skiing in Africa — with cedar forests and Berber villages in view — is wonderfully surreal.',
    insiderTip:
      'Snow is not guaranteed — check conditions locally before making the trip (December-March is the window). Equipment rental is available from from 150-200 MAD per day but quality is variable — bring your own if possible. The slopes are busiest on weekends when Moroccan families from Fes and Meknes arrive. Weekday skiing is quiet and uncrowded. Even without snow, the Michlifen crater area is beautiful for walking. Combine with Ifrane for a full mountain day.',
  },
  {
    name: 'Summer Mountain Escape',
    icon: Sun,
    category: 'Seasonal Experience',
    price: 'Free',
    duration: 'Multi-day recommended',
    bestTime: 'June - September',
    description:
      'At 1,250 meters altitude, Azrou offers blessed relief from the scorching summer heat of Morocco lowland cities. When Fes, Marrakech, and Meknes swelter at 40+ degrees, Azrou enjoys pleasant temperatures of 25-30 degrees with cool evenings dropping to 15-18 degrees. The cedar forests provide natural shade and fragrant air. Moroccan families have long used Azrou and the surrounding Middle Atlas as a summer escape, and the atmosphere in July-August is festive with picnicking families, forest walks, and evening promenades through the cool town center.',
    insiderTip:
      'Book accommodation early for July-August as Moroccan domestic tourists fill the town. Simple hotels start from 300 MAD per night, with guesthouses from 400 MAD. The evening temperature drop is significant — bring a sweater. The cedar forest is particularly magical in the golden late-afternoon light of summer. Fresh mountain spring water is available from roadside fountains throughout the area — bring a bottle to refill.',
  },
  {
    name: 'Day Trip from Fes or Ifrane',
    icon: Car,
    category: 'Day Trip',
    price: 'From 35 MAD (grand taxi from Fes)',
    duration: 'Full day',
    bestTime: 'Any season',
    description:
      'Azrou is perfectly positioned for a day trip from Fes (78 km, 1.5 hours) or a quick extension from nearby Ifrane (17 km, 20 minutes). A day trip typically combines the cedar forest and Barbary macaques with the Cedre Gouraud, the town medina, and — if timing is right — the legendary Tuesday market. The drive from Fes passes through the pleasant university town of Ifrane, making it natural to stop at both. For those heading to the Sahara via Midelt and Errachidia, Azrou is an ideal morning stop.',
    insiderTip:
      'If combining Azrou with Ifrane, start in Ifrane (visit the stone lion and lakeside park), then continue to Azrou for the forest and macaques, and return via a different route through the countryside. Grand taxis from Fes to Azrou cost from 35-45 MAD per person. For maximum flexibility, consider hiring a private driver for the day (from 800-1,200 MAD for a Fes-Ifrane-Azrou-Fes loop). Plan for a Tuesday visit to catch the market.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Grand Taxi from Fes', icon: MapPin, description: 'Shared grand taxis from Fes to Azrou cost from 35-45 MAD per person. The 1.5-hour journey is comfortable and scenic. Return taxis are equally easy to find from Azrou town center.', savings: 'Save from 350-450 MAD vs. private taxi' },
  { tip: 'Free Forest & Macaques', icon: TreesIcon, description: 'The cedar forest, Cedre Gouraud, Barbary macaque viewing, and forest walks are all completely free. The best wildlife experience in Morocco costs nothing.', savings: 'Free — best wildlife encounter in Morocco' },
  { tip: 'Tuesday Market Bargains', icon: ShoppingBag, description: 'Berber carpets at the Tuesday souk cost from 300-2,000 MAD — significantly less than Fes or Marrakech where similar pieces sell for 2-5x more through middlemen.', savings: 'Save from 50-70% on carpets vs. tourist shops' },
  { tip: 'Pack a Forest Picnic', icon: UtensilsCrossed, description: 'Buy fresh bread (from 2 MAD), cheese (from 15 MAD), olives (from 10 MAD), and fruit at the Azrou market. Picnic in the cedar forest clearings around the Cedre Gouraud.', savings: 'Save from 40-80 MAD vs. restaurant lunch' },
  { tip: 'Combine with Ifrane', icon: Compass, description: 'Ifrane is only 17 km from Azrou. A single grand taxi ride (from 7 MAD) connects the two towns, allowing you to visit both in one day trip from Fes.', savings: 'Two destinations for one trip' },
  { tip: 'Buy Cedar Wood Directly', icon: Sparkles, description: 'Cedar wood carvings from Azrou artisans start from 50 MAD — the same pieces in Fes or Marrakech souvenir shops cost from 150-300 MAD. Buy at the source.', savings: 'Save from 100-250 MAD per item' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Do Not Feed the Monkeys', icon: AlertTriangle, description: 'Feeding Barbary macaques is harmful — it causes dependency, aggression, and health problems. Keep food hidden and bags secured. Vendors selling peanuts near the forest should be discouraged. Observe from a respectful distance.' },
  { tip: 'Tuesday is the Day', icon: Calendar, description: 'If you can only visit Azrou one day, make it Tuesday. The weekly souk transforms the town into a buzzing center of Berber commerce and culture. The market starts early and winds down by 1 PM.' },
  { tip: 'Altitude Matters', icon: Mountain, description: 'At 1,250 meters, Azrou is noticeably cooler than Fes or Meknes. Summer evenings can be cool (15-18 degrees) and winter brings frost and occasional snow. Always bring a warm layer, even in summer.' },
  { tip: 'Forest Road Conditions', icon: Car, description: 'The main road through the cedar forest (N13 toward Midelt) is paved and excellent. Side roads into deeper forest can be rough, especially after rain. A 4x4 is needed for Aguelmam Azegza in wet conditions.' },
  { tip: 'Best Photography Light', icon: Camera, description: 'The cedar forest is best photographed in early morning or late afternoon when golden light filters through the canopy. The macaques are most active and photogenic in the morning. The Cedre Gouraud is best in afternoon side-light.' },
  { tip: 'Local Berber Hospitality', icon: Heart, description: 'Azrou is a predominantly Amazigh (Berber) town. The hospitality is genuine and warm. Learning a few words of Tamazight — "azul" (hello), "tanmirt" (thank you) — opens doors and earns broad smiles.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Where can I see Barbary macaques near Azrou?', answer: 'The most accessible viewing area is in the cedar forest along the N13 road about 17 km south of Azrou, near the Cedre Gouraud. Sightings are almost guaranteed. Morning visits offer the most active monkey behavior. Do not feed the macaques — it harms them and can lead to aggressive behavior.' },
  { question: 'Is the Azrou Tuesday market worth visiting?', answer: 'The Tuesday souk is one of the best Berber markets in Morocco. Amazigh traders from across the Middle Atlas sell carpets, livestock, produce, herbs, and handcrafts. It is authentic, bustling, and offers excellent prices. Arrive before 9 AM for the best experience; by noon it winds down.' },
  { question: 'How do I get from Fes to Azrou?', answer: 'Azrou is 78 km south of Fes (1.5 hours). Grand taxis from Fes cost from 35-45 MAD per person. CTM buses run for from 30-40 MAD. A private taxi costs from 400-500 MAD one way. The road passes through Ifrane, making it easy to combine both towns.' },
  { question: 'Can you ski in Morocco near Azrou?', answer: 'Yes, Michlifen ski resort is about 20 km from Azrou (closer to Ifrane). Season runs January-March, snow permitting. Day passes from 100-150 MAD. Facilities are basic — simple lifts and rental equipment. Snow is not guaranteed every year. Even without snow, the crater landscape is worth visiting.' },
  { question: 'What is the best time to visit Azrou?', answer: 'Spring (April-June) and autumn (September-November) offer the best weather for forest walks and macaque viewing. Summer (July-August) is a cool escape from lowland heat. Winter brings possible snow and ski conditions. The Tuesday market operates year-round. Each season offers a different atmosphere.' },
  { question: 'Is Azrou worth visiting?', answer: 'Absolutely. Azrou offers a different Morocco: cool mountain air, ancient forests, endangered primates, authentic Berber culture, and one of the country best markets. It combines perfectly with Ifrane as a day trip from Fes, or serves as an excellent stop on the route to the Sahara via Midelt.' },
  { question: 'Where can I buy authentic Berber carpets in Azrou?', answer: 'The Tuesday market has the best selection and prices for Middle Atlas Berber carpets (small pieces from 300 MAD). The Cooperative Artisanale and Ensemble Artisanal on the main road offer fixed-price options with quality assurance. Prices are significantly lower than Fes or Marrakech tourist shops.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/fes', icon: MapPin, title: 'Fes City Guide', description: 'Complete guide to Fes: medina, tanneries, riads, and cultural treasures.' },
  { href: '/sefrou-guide', icon: Landmark, title: 'Sefrou Guide', description: 'Cherry Capital and Little Jerusalem — day trip from Fes.' },
  { href: '/midelt-guide', icon: Mountain, title: 'Midelt Guide', description: 'Gateway between Middle and High Atlas, apple capital and mineral country.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, coast to mountains to desert.' },
  { href: '/best-time', icon: Calendar, title: 'Best Time to Visit', description: 'Month-by-month guide to weather, festivals, and crowds across Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function AzrouGuidePage() {
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
            <span className="text-white">Azrou Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <TreesIcon className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Azrou: Cedar Forests,
            <br className="hidden md:block" /> Monkeys &amp; Berber Soul
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Ancient cedar forests sheltering endangered Barbary macaques, one of Morocco most authentic Berber markets,
            and a cool mountain retreat in the heart of the Middle Atlas. Your complete 2026 guide with real prices.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Middle Atlas Heartland
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Perched at 1,250 meters in the Middle Atlas Mountains, Azrou is a small Berber town that
                punches far above its weight in natural wonders and cultural authenticity. Its name comes
                from the Tamazight word for &quot;rock&quot; — a reference to the massive volcanic boulder
                that anchors the town center — but it could just as easily refer to the bedrock of Amazigh
                identity that makes this place so compelling.
              </p>
              <p>
                The surrounding cedar forests are among the most magnificent in the Mediterranean world.
                These ancient woodlands, part of a UNESCO Biosphere Reserve, shelter the endangered Barbary
                macaque — the only primate found north of the Sahara and one of Morocco most charismatic
                wildlife encounters. The famous Cedre Gouraud, an 800-year-old giant, stands as a living
                monument to these forests&apos; ancient heritage.
              </p>
              <p>
                But Azrou is more than nature. Every Tuesday, the town hosts one of Morocco most celebrated
                Berber markets, where Amazigh traders from across the mountains converge with handwoven
                carpets, livestock, mountain herbs, and produce. The carpet cooperatives showcase the
                geometric artistry of Middle Atlas weaving traditions. In winter, nearby Michlifen offers
                the surreal experience of skiing in Africa. And year-round, Azrou&apos;s cool altitude and
                genuine Berber hospitality make it a refreshing counterpoint to the intensity of Morocco&apos;s
                imperial cities.
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
            Top 10 Azrou Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences for your visit to Azrou and the surrounding Middle Atlas.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Barbary Macaque Encounters', price: 'Free', time: '1-2 hours', category: 'Wildlife' },
              { rank: 2, name: 'Tuesday Berber Market', price: 'Free', time: '2-3 hours', category: 'Market' },
              { rank: 3, name: 'Cedre Gouraud (Giant Cedar)', price: 'Free', time: '30-60 min', category: 'Nature' },
              { rank: 4, name: 'Cedar Forest Walks', price: 'Free', time: '2-4 hours', category: 'Hiking' },
              { rank: 5, name: 'Berber Carpet Cooperatives', price: 'Free to visit', time: '1-1.5 hours', category: 'Artisan' },
              { rank: 6, name: 'Aguelmam Azegza Lake', price: 'Free', time: '2-3 hours', category: 'Nature' },
              { rank: 7, name: 'Azrou Medina & Rock', price: 'Free', time: '1-1.5 hours', category: 'Cultural' },
              { rank: 8, name: 'Ensemble Artisanal', price: 'Free', time: '30-60 min', category: 'Crafts' },
              { rank: 9, name: 'Skiing at Michlifen', price: 'From 100 MAD', time: 'Half day+', category: 'Winter Sport' },
              { rank: 10, name: 'Summer Mountain Escape', price: 'Free', time: 'Multi-day', category: 'Seasonal' },
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

      {/* -- Nature & Wildlife -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreesIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature &amp; Wildlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ancient cedar forests, endangered primates, and a hidden volcanic lake — the natural
            world around Azrou is extraordinary.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All natural attractions are free. Respect wildlife by not feeding macaques.
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

      {/* -- Culture & Markets -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; Markets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            One of Morocco finest Berber markets, artisan cooperatives preserving ancient weaving traditions,
            and a medina built around a volcanic rock.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Tuesday souk is the highlight — plan your visit around it if possible.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureAttractions.map((item) => {
              const CultIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Adventure & Seasonal -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adventure &amp; Seasonal Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From skiing in Africa to cool summer retreats, Azrou offers year-round experiences
            that surprise and delight.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Skiing is snow-dependent (January-March). Summer visits offer cool mountain relief.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {adventureAttractions.map((item) => {
              const AdvIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AdvIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Budget Tips for Azrou
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Azrou is incredibly affordable — the best experiences are free, and market prices are a fraction of tourist cities.
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
            Insider Tips for Azrou
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to enhance your Azrou experience and help protect this special place.
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
            Sample Day Trip: Fes to Ifrane &amp; Azrou
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A full day combining two Middle Atlas gems. Best on a Tuesday for the Azrou market.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Ifrane &amp; Cedar Forest
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 AM - Depart Fes</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi to Ifrane (from 25 MAD per person, 1 hour). Visit the stone lion sculpture,
                      lake, and enjoy the Swiss-village atmosphere. Coffee at a cafe (from 15 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">9:30 AM - Cedar Forest &amp; Macaques</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Taxi to the cedar forest south of Azrou (from 7 MAD Ifrane-Azrou, then local taxi from 50 MAD
                      to forest). Visit the Cedre Gouraud and observe the Barbary macaques. Walk the forest trails.
                      Pack a picnic for a forest lunch.
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
                  Afternoon: Azrou Town &amp; Market
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM - Azrou Medina &amp; Lunch</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Azrou town. Explore the medina, see the volcanic rock, and have lunch at a
                      local restaurant (tagine from 35 MAD). Visit the Ensemble Artisanal for cedar woodwork
                      and fixed-price crafts.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM - Tuesday Souk (if Tuesday)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Browse the legendary Berber market for carpets, produce, spices, and mountain herbs.
                      If not Tuesday, visit the carpet cooperatives instead (free). Buy olive oil, honey,
                      or a small carpet directly from artisans.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM - Return to Fes</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi back to Fes (from 35-45 MAD per person, 1.5 hours). Arrive by 5:30 PM.
                      Estimated total day cost: from 200-400 MAD per person (excluding purchases).
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
            Continue Exploring the Middle Atlas
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
            Ready to Explore Azrou?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From endangered primates in ancient forests to one of Morocco most authentic Berber markets,
            Azrou offers an experience unlike anywhere else. Just 1.5 hours from Fes.
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
              href="/sefrou-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Landmark className="w-5 h-5" />
              Sefrou Guide
            </Link>
            <Link
              href="/midelt-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Midelt Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
