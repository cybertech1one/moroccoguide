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
  Music,
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
  Shield,
  Binoculars,
  Tent,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Guide to Taza 2026 | Gateway to Tazzeka National Park',
  description:
    'Discover Taza, Morocco: ancient fortified medina, 12th-century Almohad Grand Mosque, Bab er-Rih panoramic views, Tazzeka National Park, Friouato Caves (deepest in Africa), Ras el-Ma waterfall, and more. Real prices in MAD and insider tips.',
  keywords: [
    'taza morocco',
    'taza guide',
    'tazzeka national park',
    'friouato caves',
    'things to do taza',
    'taza medina',
    'bab er-rih taza',
    'taza grand mosque',
    'friouato caves morocco',
    'jebel tazzeka',
    'dayat chiker',
    'ras el-ma waterfall',
    'taza travel guide',
    'eastern morocco guide',
    'taza attractions',
    'morocco off the beaten path',
  ],
  openGraph: {
    title: 'Complete Guide to Taza 2026 | Gateway to Tazzeka National Park',
    description:
      'Explore Taza: one of Morocco oldest fortified cities with a stunning medina, Almohad architecture, and gateway to Tazzeka National Park with Africa deepest caves.',
    url: `${BASE_URL}/taza-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Taza medina with the Rif and Middle Atlas mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Taza 2026 | Tazzeka National Park & Ancient Medina',
    description:
      'Ancient fortified medina, Almohad Grand Mosque, Bab er-Rih views, Friouato Caves, Tazzeka National Park. Complete Taza guide with real prices.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/taza-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/taza-guide`,
  name: 'Complete Guide to Taza 2026 | Gateway to Tazzeka National Park',
  description:
    'Discover Taza, Morocco: ancient fortified medina, Almohad Grand Mosque, Bab er-Rih panoramic views, Tazzeka National Park, Friouato Caves, and more.',
  url: `${BASE_URL}/taza-guide`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/taza-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Taza',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Taza Guide', item: `${BASE_URL}/taza-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Taza known for in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Taza is known for having one of the oldest medinas in Morocco, its strategic position as the Taza Gap between the Rif and Middle Atlas mountains, the 12th-century Almohad Grand Mosque, the panoramic Bab er-Rih (Gate of the Wind), and its proximity to Tazzeka National Park with the Friouato Caves — the deepest caves in Africa at 271 meters.' } },
    { '@type': 'Question', name: 'How deep are the Friouato Caves?', acceptedAnswer: { '@type': 'Answer', text: 'The Friouato Caves (Gouffre du Friouato) are the deepest caves in Africa, reaching a depth of 271 meters. The main chamber is accessed by descending 520 steps carved into the rock. Visitors can explore the upper sections with a local guide (from 100 MAD). Full spelunking expeditions to the deepest chambers require professional equipment and guides.' } },
    { '@type': 'Question', name: 'How do I get to Taza?', acceptedAnswer: { '@type': 'Answer', text: 'Taza is located on the main road and rail corridor between Fes (120 km west) and Oujda (220 km east). ONCF trains run multiple times daily from Fes (from 45 MAD, 2 hours) and from Oujda (from 75 MAD, 3.5 hours). CTM and Supratours buses also serve the city. The drive from Fes takes about 1.5 hours via the A2 motorway.' } },
    { '@type': 'Question', name: 'Is Tazzeka National Park worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Tazzeka National Park covers 137 square kilometers of oak and cedar forests, waterfalls, lakes, and dramatic caves. Highlights include the Friouato Caves, Ras el-Ma waterfall, Dayat Chiker lake, and the summit of Jebel Tazzeka at 1,980 meters with panoramic views. The park is excellent for hiking, caving, and birdwatching. Entry is free; cave guides cost from 100 MAD.' } },
    { '@type': 'Question', name: 'How many days do you need in Taza?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is ideal. Day 1: explore the medina, Grand Mosque exterior, Bab er-Rih, Andalusian Mosque, and the weekly souk. Day 2: full-day excursion to Tazzeka National Park including Friouato Caves, Ras el-Ma waterfall, Dayat Chiker, and optionally the Jebel Tazzeka summit. Taza also works as a day trip from Fes if you focus on the medina only.' } },
    { '@type': 'Question', name: 'What is the best time to visit Taza?', acceptedAnswer: { '@type': 'Answer', text: 'Spring (March to May) and autumn (September to November) are ideal with mild temperatures (15-25 degrees) perfect for hiking in Tazzeka National Park. Summer can be very hot (35+ degrees) in the medina. Winter brings cold temperatures and occasional snow on Jebel Tazzeka, which has its own beauty but limits some trails.' } },
  ],
};

/* ===============================================================
   DATA: MEDINA & HISTORICAL SIGHTS
   =============================================================== */

const medinaAttractions = [
  {
    name: 'Taza Medina (Old Town)',
    icon: Globe,
    category: 'Cultural Heritage',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'The medina of Taza is one of the oldest in Morocco, predating even those of Fes and Marrakech. Perched on a rocky escarpment overlooking the Taza Gap — the strategic corridor between the Rif Mountains to the north and the Middle Atlas to the south — this fortified city has been contested by every dynasty that sought to control Morocco. The Almohads, Merinids, and Alaouite sultans all fortified Taza before marching on Fes. Today the medina retains its medieval layout: narrow winding alleys of sun-baked stone, massive ramparts with bastions, carved wooden doors, and a quiet authenticity almost entirely free of tourism. Walking through Taza medina feels like stepping back centuries.',
    insiderTip:
      'Taza medina sees almost no tourists, so expect genuine local interactions and no aggressive touts. The northeastern ramparts offer spectacular views across the Taza Gap. The medina is compact enough to explore in 2-3 hours. Wear sturdy shoes — many alleys are cobbled and uneven.',
  },
  {
    name: 'Grand Mosque of Taza (Almohad Mosque)',
    icon: Landmark,
    category: 'Religious Heritage',
    price: 'Free (exterior only, non-Muslims)',
    duration: '20-30 minutes',
    bestTime: 'Morning light',
    description:
      'Built in 1135 by the Almohad dynasty, the Grand Mosque of Taza is one of the oldest and most historically significant mosques in Morocco. The Almohad Sultan Abd al-Mu\'min ordered its construction as Taza served as the dynasty\'s military base before conquering Fes and Marrakech. The mosque was later expanded by the Merinids, who added a magnificent bronze chandelier weighing several tons — one of the finest examples of medieval Moroccan metalwork. The minaret displays classic Almohad architectural proportions, and the exterior stonework shows nearly nine centuries of craftsmanship. Non-Muslims cannot enter, but the exterior and courtyard views are impressive.',
    insiderTip:
      'The best exterior views are from the small square to the south. The Merinid bronze chandelier inside is legendary among art historians — it features 514 oil lamps and is considered a masterpiece of medieval Moroccan metalwork. Ask locals about the mosque history; many are proud to share stories of their city Almohad heritage.',
  },
  {
    name: 'Bab er-Rih (Gate of the Wind)',
    icon: Wind,
    category: 'Historic Gateway & Viewpoint',
    price: 'Free',
    duration: '30-45 minutes',
    bestTime: 'Late afternoon (golden light)',
    description:
      'Bab er-Rih, the Gate of the Wind, is Taza most iconic landmark and one of the most dramatic viewpoints in eastern Morocco. This ancient gateway in the medina ramparts opens onto a precipitous cliff edge with jaw-dropping panoramic views across the Taza Gap, the endless plains stretching toward the Rif Mountains, and on clear days, the distant peaks of the Middle Atlas. The name comes from the powerful winds that funnel through the gap between the mountain ranges, and standing at this gate with the wind in your face and the vast landscape below is an unforgettable sensory experience.',
    insiderTip:
      'Visit in the late afternoon when the golden light illuminates the landscape below and the shadows create dramatic depth. Hold onto hats and loose items — the wind can be fierce, especially in winter and spring. This is arguably the best free viewpoint in all of eastern Morocco. Bring a jacket even on warm days.',
  },
  {
    name: 'Andalusian Mosque',
    icon: Landmark,
    category: 'Religious Heritage',
    price: 'Free (exterior only)',
    duration: '15-20 minutes',
    bestTime: 'Morning',
    description:
      'The Andalusian Mosque in Taza dates back to the 12th century and reflects the architectural influence of Muslim refugees who fled Al-Andalus (Islamic Spain) during the Reconquista. The mosque features elegant Andalusian-Moroccan architectural elements including horseshoe arches, geometric stucco patterns, and a beautifully proportioned minaret. While smaller than the Grand Mosque, the Andalusian Mosque holds particular historical significance as evidence of the cultural exchange between Islamic Spain and Morocco that enriched cities along the northern corridor.',
    insiderTip:
      'The mosque is located in the quieter eastern section of the medina. Combine your visit with a walk along the eastern ramparts for views toward the Rif Mountains. The surrounding streets have some of the most photogenic doorways and alleyways in the medina.',
  },
  {
    name: 'Weekly Souk (Thursday Market)',
    icon: ShoppingBag,
    category: 'Traditional Market',
    price: 'Free entry',
    duration: '1-2 hours',
    bestTime: 'Thursday morning (8 AM - 1 PM)',
    description:
      'Taza weekly souk is a major regional market that draws farmers, craftspeople, and traders from surrounding villages in the Rif foothills and Middle Atlas. Held every Thursday, the souk sprawls across a large open area near the medina and is organized by product: livestock, produce, spices, household goods, clothing, and handicrafts. This is a genuine working market, not a tourist affair — you will see Berber farmers negotiating over sheep, women selling hand-pressed olive oil, and stalls heaped with seasonal fruits and vegetables. The atmosphere is authentic, lively, and entirely local.',
    insiderTip:
      'Arrive early (before 9 AM) for the best atmosphere when farmers are unloading goods and the livestock section is most active. Bring cash in small denominations. The spice section is excellent for cumin, saffron, and dried herbs at prices far below tourist markets. Photography is welcome if you ask politely first.',
  },
];

/* ===============================================================
   DATA: TAZZEKA NATIONAL PARK ATTRACTIONS
   =============================================================== */

const parkAttractions = [
  {
    name: 'Friouato Caves (Gouffre du Friouato)',
    icon: Mountain,
    category: 'Natural Wonder & Caving',
    price: 'From 100 MAD (guide) / From 10 MAD (entry)',
    duration: '2-3 hours',
    bestTime: 'Morning (coolest temperatures)',
    description:
      'The Friouato Caves are the deepest caves in all of Africa, plunging 271 meters into the earth through a spectacular series of chambers, stalactites, and underground passages. The main entrance is a massive sinkhole, and visitors descend 520 carved steps into the first major chamber — a cathedral-sized cavern adorned with stalactites and stalagmites formed over millions of years. The acoustics are extraordinary, with every footstep and whisper amplified by the limestone walls. Only the upper chambers are accessible to casual visitors; the deepest sections require professional spelunking equipment and experienced guides. The temperature inside remains a constant 15-17 degrees year-round, providing welcome relief from summer heat.',
    insiderTip:
      'A local guide is essential — hire one at the cave entrance (from 100 MAD for a small group). Bring a powerful flashlight or headlamp as lighting inside is minimal. Wear sturdy shoes with good grip — the steps are damp and slippery. The descent and ascent of 520 steps requires reasonable fitness. Bring a light jacket as it is cool inside even in summer.',
  },
  {
    name: 'Ras el-Ma Waterfall',
    icon: Waves,
    category: 'Natural Beauty',
    price: 'Free',
    duration: '1-1.5 hours',
    bestTime: 'Spring (March-May, peak water flow)',
    description:
      'Ras el-Ma is a beautiful cascading waterfall set among lush vegetation in the foothills of the Middle Atlas within Tazzeka National Park. Fed by natural springs emerging from limestone aquifers, the waterfall tumbles over moss-covered rocks into crystal-clear pools surrounded by fig trees, oleanders, and dense Mediterranean scrub. The site has been a local gathering place for centuries — families picnic beside the pools, children swim in the shallower sections, and the sound of rushing water creates a serene natural soundtrack. In spring, when snowmelt swells the flow, Ras el-Ma is at its most dramatic.',
    insiderTip:
      'The waterfall is most impressive from February to May when winter rains and snowmelt ensure strong flow. By late summer it can slow to a trickle. The pools below the falls are swimmable — bring a towel and swimwear. Pack a picnic lunch to enjoy by the water. The surrounding area has easy walking trails through wildflower meadows in spring.',
  },
  {
    name: 'Jebel Tazzeka Summit (1,980 m)',
    icon: Mountain,
    category: 'Hiking & Panoramic Views',
    price: 'Free',
    duration: '3-5 hours (hike) / 1 hour (drive)',
    bestTime: 'Spring or autumn (clear skies)',
    description:
      'The summit of Jebel Tazzeka at 1,980 meters is the highest point in the national park and offers a 360-degree panorama that is one of the most spectacular in northern Morocco. From the top, you can see the Rif Mountains to the north, the Middle Atlas chain stretching south, the Taza Gap corridor, and on exceptionally clear days, the distant shimmer of the Mediterranean. The summit is accessible by a winding mountain road (suitable for 4x4 or sturdy car) or by a moderately challenging hiking trail through cork oak and cedar forests. The road itself is one of the most scenic drives in the region, with dramatic switchbacks and forest tunnels.',
    insiderTip:
      'The summit road is best driven in a 4x4, especially after rain when sections can be muddy. For hikers, start early in the morning to avoid afternoon heat and potential clouds that obscure views. Bring warm layers — the summit is significantly cooler than Taza city, and wind chill can be fierce. The cedar forests en route are home to Barbary macaques — keep food secured.',
  },
  {
    name: 'Dayat Chiker (Lake)',
    icon: Eye,
    category: 'Natural Landscape',
    price: 'Free',
    duration: '45 minutes - 1.5 hours',
    bestTime: 'Spring (when filled)',
    description:
      'Dayat Chiker is a seasonal lake — technically a polje, or karst depression — located about 18 km southeast of Taza on the edge of Tazzeka National Park. In wet years, the depression fills with water creating a serene lake surrounded by agricultural fields and low hills, attracting migratory birds and creating stunning reflections of the Middle Atlas peaks. In dry periods, the lakebed becomes a patchwork of green farmland. The landscape around Dayat Chiker shifts dramatically with the seasons, making it a fascinating study in how water shapes life in semi-arid Morocco. Birdwatchers visit for herons, coots, and occasionally flamingos during migration.',
    insiderTip:
      'The lake is most photogenic in late winter and spring (February-April) when water levels are highest and migratory birds are present. In summer and autumn, the lakebed may be dry. Combine with a visit to the Chiker Caves nearby for a full half-day excursion. Bring binoculars for birdwatching.',
  },
  {
    name: 'Chiker Caves',
    icon: Compass,
    category: 'Speleology & Adventure',
    price: 'From 50 MAD (local guide)',
    duration: '1-2 hours',
    bestTime: 'Year-round (constant cave temperature)',
    description:
      'The Chiker Caves, located near Dayat Chiker, are an extensive network of karst caverns that complement the more famous Friouato Caves. While less deep than Friouato, the Chiker system is notable for its horizontal passages, underground streams, and impressive formations of flowstone and draperies. The caves have been explored by speleological expeditions from Morocco and Europe, revealing a complex interconnected system that extends for several kilometers. For visitors, the accessible upper sections offer an atmospheric introduction to Morocco remarkable underground landscape without the demanding descent of Friouato.',
    insiderTip:
      'Less visited than Friouato, the Chiker Caves offer a quieter experience. Hire a local guide from the nearby village (from 50 MAD). Bring two light sources per person (headlamp plus backup) and wear clothes you do not mind getting dirty. The caves are cooler than the surface — bring a light layer. Not recommended for claustrophobic visitors.',
  },
  {
    name: 'Tazzeka National Park Circuit Drive',
    icon: Compass,
    category: 'Scenic Drive & Nature',
    price: 'Free (fuel costs only)',
    duration: '4-6 hours (full loop)',
    bestTime: 'Spring (April-May)',
    description:
      'The Tazzeka National Park scenic circuit is a roughly 76-kilometer loop road that connects all the major natural attractions in and around the park. Starting and ending at Taza, the route passes through cork oak and holm oak forests, climbs to the Jebel Tazzeka summit via dramatic switchbacks, descends past Ras el-Ma waterfall, passes the Friouato Caves, and loops back through the rolling agricultural landscape near Dayat Chiker. The drive offers continuously changing scenery — from dense Mediterranean forest to alpine peaks to open valleys — and is one of the finest scenic drives in eastern Morocco.',
    insiderTip:
      'The full circuit takes 4-6 hours including stops. A 4x4 is recommended but not essential in dry conditions — a standard car can manage if you skip the roughest summit section. Pack food and water as there are no restaurants along the route. Spring wildflowers (April-May) make the drive especially beautiful. Start early to have time for cave visits and waterfall stops.',
  },
  {
    name: 'Birdwatching in Tazzeka',
    icon: Binoculars,
    category: 'Wildlife & Nature',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Early morning, spring migration',
    description:
      'Tazzeka National Park is an underrated birdwatching destination, hosting over 80 recorded bird species across its diverse habitats of cedar forest, oak woodland, open scrub, and seasonal wetlands. Notable species include the Levaillant woodpecker, blue rock thrush, short-toed eagle, Bonelli eagle, Barbary partridge, and in the Dayat Chiker wetlands during migration, herons, egrets, and occasionally flamingos. The park varied elevations — from 500 to 1,980 meters — create distinct ecological zones, each with its own bird community. The relative absence of tourists means the birds are undisturbed and easier to observe.',
    insiderTip:
      'The best birdwatching areas are the cedar forests near the summit road (for woodpeckers, raptors, and forest birds), the open scrub near Friouato (for rock thrush and partridge), and Dayat Chiker (for waterbirds during migration). Bring quality binoculars and a field guide to North African birds. Early morning in spring offers the best sightings.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Free Medina Exploration', icon: Footprints, description: 'The entire medina, Bab er-Rih viewpoint, mosque exteriors, and rampart walks are completely free. Taza best attractions — the medina atmosphere and panoramic views — cost nothing.', savings: 'Free — the best of Taza' },
  { tip: 'Train from Fes Is Cheapest', icon: Compass, description: 'The ONCF train from Fes to Taza costs from 45 MAD (2 hours) — much cheaper than private transport or organized tours that charge from 500-800 MAD per person.', savings: 'Save from 455-755 MAD vs. tours' },
  { tip: 'Share a Grand Taxi to Tazzeka', icon: MapPin, description: 'A grand taxi for the Tazzeka circuit costs from 400-600 MAD for the whole car. Split between 4-6 travelers, that is from 70-150 MAD per person vs. organized tours at from 400+ MAD.', savings: 'Save from 250-330 MAD per person' },
  { tip: 'Pack Your Own Food for Tazzeka', icon: UtensilsCrossed, description: 'There are no restaurants in Tazzeka National Park. Buy supplies at Taza market — bread, olives, cheese, fruit — for from 20-30 MAD vs. relying on expensive hotel-packed lunches.', savings: 'Save from 50-100 MAD on park lunch' },
  { tip: 'Cave Guide Group Rates', icon: Mountain, description: 'Friouato cave guides charge from 100 MAD per group, not per person. Join other visitors at the entrance to share costs, reducing your share to from 20-30 MAD.', savings: 'Save from 70-80 MAD on guide fees' },
  { tip: 'Thursday Souk Deals', icon: ShoppingBag, description: 'Taza Thursday souk has some of the lowest prices in Morocco for spices, olives, and local products — no tourist markup. Saffron from 15 MAD per gram vs. from 50+ MAD in Marrakech.', savings: 'Save 50-70% vs. tourist souks' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Taza Is Two Cities', icon: CheckCircle, description: 'Taza has two distinct zones: the elevated old medina (Taza Haut) and the modern French-built lower town (Taza Bas). The medina has all the historical interest; the lower town has hotels, banks, and the train station. They are connected by a steep 2 km road.' },
  { tip: 'Limited Tourist Infrastructure', icon: AlertTriangle, description: 'Taza has very few tourist facilities — no official tourist office, limited English spoken, and few upscale restaurants. This is its charm. Bring cash (ATMs available in Taza Bas), basic French or Arabic phrases, and an adventurous spirit.' },
  { tip: 'Hire a Local for Tazzeka', icon: MapPin, description: 'While the park circuit road is drivable, a local guide-driver from Taza (from 400 MAD for a full day) knows the best stops, can access rougher tracks, and shares invaluable local knowledge about the caves, forests, and wildlife.' },
  { tip: 'Photography Paradise', icon: Camera, description: 'Taza and Tazzeka are incredibly photogenic and nearly tourist-free. Bab er-Rih views, the medina alleys, the Friouato sinkhole, Ras el-Ma waterfall, and the Jebel summit all offer stunning shots without crowds. Early morning light is best for the medina.' },
  { tip: 'Cave Preparation Is Essential', icon: Shield, description: 'The Friouato descent involves 520 slippery steps. Wear proper closed-toe shoes with grip, bring at least two light sources, and carry water. The cave temperature is 15-17 degrees year-round — bring layers. Not suitable for young children or those with mobility issues.' },
  { tip: 'Combine with Fes or Oujda', icon: Compass, description: 'Taza sits halfway between Fes and Oujda on the main east-west route. It works perfectly as a 1-2 night stop between these cities. The Fes-Taza-Oujda train corridor makes multi-city trips easy and affordable.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Taza known for in Morocco?', answer: 'Taza is known for having one of the oldest medinas in Morocco, its strategic Taza Gap location between the Rif and Middle Atlas mountains, the 12th-century Almohad Grand Mosque with its famous Merinid bronze chandelier, the panoramic Bab er-Rih (Gate of the Wind), and its proximity to Tazzeka National Park containing the Friouato Caves — the deepest caves in Africa at 271 meters.' },
  { question: 'How deep are the Friouato Caves?', answer: 'The Friouato Caves reach a depth of 271 meters, making them the deepest in Africa. The main chamber is accessed by descending 520 carved steps. Casual visitors can explore the upper sections with a local guide (from 100 MAD per group). The deepest chambers require professional spelunking equipment and experienced guides.' },
  { question: 'How do I get to Taza?', answer: 'Taza sits on the main Fes-Oujda corridor. ONCF trains run multiple times daily from Fes (from 45 MAD, 2 hours) and Oujda (from 75 MAD, 3.5 hours). CTM and Supratours buses also serve the route. By car, the A2 motorway connects Fes to Taza in about 1.5 hours. The train station is in Taza Bas (lower town), from where a petit taxi to the medina costs from 10 MAD.' },
  { question: 'Is Tazzeka National Park worth visiting?', answer: 'Absolutely. The park covers 137 square kilometers of forests, waterfalls, lakes, and Africa deepest caves. Highlights include Friouato Caves (from 10 MAD entry), Ras el-Ma waterfall (free), Dayat Chiker seasonal lake (free), and the Jebel Tazzeka summit at 1,980 meters. The park is excellent for hiking, caving, and birdwatching with almost no other tourists.' },
  { question: 'How many days do you need in Taza?', answer: 'One to two days is ideal. Day 1: explore the medina, Grand Mosque exterior, Bab er-Rih views, Andalusian Mosque, and the Thursday souk (if timing works). Day 2: full-day Tazzeka National Park circuit including Friouato Caves, Ras el-Ma waterfall, and optionally the Jebel Tazzeka summit. Taza also works as a medina-only day trip from Fes.' },
  { question: 'What is the best time to visit Taza?', answer: 'Spring (March-May) and autumn (September-November) are ideal with mild temperatures and clear skies. Spring is best for waterfalls, wildflowers, and birdwatching. Summer is very hot (35+ degrees) but the caves stay cool. Winter can bring snow to Jebel Tazzeka, limiting some trails but offering dramatic mountain scenery.' },
  { question: 'Is Taza safe for tourists?', answer: 'Taza is very safe. The city sees few tourists, so you will attract friendly curiosity rather than aggressive touts. Standard precautions apply: keep valuables secure, use official taxis, and avoid isolated areas at night. The medina is compact and easy to navigate. Locals are generally welcoming and helpful.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/fes-guide', icon: MapPin, title: 'Fes City Guide', description: 'Complete guide to Fes: the world largest car-free urban area and Morocco spiritual capital.' },
  { href: '/oujda-guide', icon: MapPin, title: 'Oujda Guide', description: 'Eastern Morocco capital with Algerian border culture, Rai music, and Saidia beach.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, including the Fes-Oujda eastern corridor.' },
  { href: '/morocco-budget-guide', icon: Lightbulb, title: 'Morocco Budget Guide', description: 'How to explore Morocco on a budget with prices, tips, and money-saving strategies.' },
  { href: '/backpacking', icon: Tent, title: 'Backpacking Morocco', description: 'Complete backpacking guide with hostel recommendations, routes, and budget tips.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TazaGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Taza Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Complete Guide
            <br className="hidden md:block" /> to Taza
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Ancient fortified medina, Almohad heritage, and the gateway to Tazzeka National Park
            with Africa&apos;s deepest caves. Your 2026 guide to Morocco&apos;s most underrated city.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Taza: The Fortress Between Two Mountain Ranges
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Taza occupies one of the most strategically important positions in all of North Africa.
                Perched on a rocky promontory overlooking the Taza Gap — the narrow corridor between
                the Rif Mountains and the Middle Atlas — this ancient fortified city has guarded the
                gateway between eastern and western Morocco for over a thousand years. Every dynasty
                that sought to conquer Morocco had to take Taza first, and the city ramparts, mosques,
                and medina bear witness to Almohad, Merinid, and Alaouite rule.
              </p>
              <p>
                Yet Taza remains virtually unknown to international tourism. Its medina, one of the
                oldest in the country, is free of souvenir shops and carpet touts. The panoramic
                Bab er-Rih (Gate of the Wind) offers views that rival any in Morocco. And just south
                of the city, Tazzeka National Park harbors the deepest caves in Africa, cascading
                waterfalls, seasonal lakes, and a summit that surveys the landscape from nearly
                2,000 meters.
              </p>
              <p>
                This guide covers everything you need to explore Taza: the historical medina with its
                12th-century Almohad Grand Mosque, the natural wonders of Tazzeka National Park
                including the Friouato Caves at 271 meters depth, practical transport and budget
                information, and insider tips for a city where genuine Moroccan hospitality flourishes
                far from the tourist trail.
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
            Top 12 Taza Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From ancient medina walls to Africa deepest caves, these define a visit to Taza and Tazzeka.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Friouato Caves (Deepest in Africa)', price: 'From 10 MAD + guide', time: '2-3 hours', category: 'Natural Wonder' },
              { rank: 2, name: 'Bab er-Rih Panoramic Views', price: 'Free', time: '30-45 min', category: 'Viewpoint' },
              { rank: 3, name: 'Taza Medina Walk', price: 'Free', time: '2-3 hours', category: 'Cultural Heritage' },
              { rank: 4, name: 'Grand Mosque (Almohad)', price: 'Free (exterior)', time: '20-30 min', category: 'Religious Heritage' },
              { rank: 5, name: 'Jebel Tazzeka Summit', price: 'Free', time: '3-5 hours', category: 'Hiking' },
              { rank: 6, name: 'Ras el-Ma Waterfall', price: 'Free', time: '1-1.5 hours', category: 'Nature' },
              { rank: 7, name: 'Tazzeka Park Circuit Drive', price: 'Free', time: '4-6 hours', category: 'Scenic Drive' },
              { rank: 8, name: 'Dayat Chiker Lake', price: 'Free', time: '45 min - 1.5 hr', category: 'Nature' },
              { rank: 9, name: 'Thursday Weekly Souk', price: 'Free entry', time: '1-2 hours', category: 'Market' },
              { rank: 10, name: 'Andalusian Mosque', price: 'Free (exterior)', time: '15-20 min', category: 'Heritage' },
              { rank: 11, name: 'Chiker Caves', price: 'From 50 MAD guide', time: '1-2 hours', category: 'Adventure' },
              { rank: 12, name: 'Birdwatching in Tazzeka', price: 'Free', time: '2-4 hours', category: 'Wildlife' },
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

      {/* -- Medina & Historical Sights -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Historical Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Taza ancient medina perches on a rocky escarpment, its Almohad-era walls guarding centuries
            of history in one of Morocco most authentic old towns.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina (Taza Haut) is 2 km uphill from the modern town (Taza Bas). A petit taxi costs from 10 MAD.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {medinaAttractions.map((attraction) => {
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

      {/* -- Tazzeka National Park -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tazzeka National Park
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A 137 sq km natural wonderland of caves, waterfalls, forests, and mountain summits
            just south of Taza — one of Morocco most underappreciated national parks.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Park entry is free. Cave guides charge from 50-100 MAD per group. A full circuit requires a car or hired taxi.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {parkAttractions.map((item) => {
              const ParkIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ParkIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Budget Tips for Taza
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Taza is already one of the cheapest destinations in Morocco. These tips stretch your dirham even further.
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
            Insider Tips for Taza
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential local knowledge for getting the most out of this off-the-beaten-path destination.
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
            Sample 2-Day Taza Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Day one for the medina and history, day two for the natural wonders of Tazzeka.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Taza Medina &amp; Historical Heritage
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a petit taxi from Taza Bas to the medina (from 10 MAD). Enter through the
                      main gate and explore the ancient alleys, visiting the Grand Mosque exterior and
                      admiring its Almohad minaret. Continue to the Andalusian Mosque. If it is Thursday,
                      spend time at the weekly souk for authentic local market culture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a local restaurant in the medina (from 30-50 MAD for a tagine). Walk the
                      northeastern ramparts to Bab er-Rih for the panoramic views across the Taza Gap.
                      Spend time here absorbing the landscape. Explore the quieter eastern medina alleys,
                      photographing doorways, arches, and the medina daily life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Taza Bas for dinner at a local restaurant (from 40-70 MAD). Stroll the
                      modern town boulevard and enjoy mint tea at a cafe. Prepare supplies for the next
                      day Tazzeka excursion — buy water, snacks, and fruit from the market. Estimated
                      Day 1 cost: from 100-200 MAD.
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
                  Day 2: Tazzeka National Park Circuit
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrange a grand taxi or hire a local driver (from 400-600 MAD for the full circuit).
                      Depart early for Friouato Caves — descend the 520 steps with a guide (from 100 MAD
                      per group) to explore Africa deepest cave system. Allow 2-3 hours for the cave visit.
                      Continue to Ras el-Ma waterfall for a refreshing stop and picnic lunch by the pools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Drive the scenic circuit road through cork oak forests, climbing toward the Jebel
                      Tazzeka summit road (1,980 m) for panoramic views of the Rif and Middle Atlas ranges.
                      Descend via the eastern route, stopping at Dayat Chiker seasonal lake if water
                      levels allow. Watch for Barbary macaques in the cedar forests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Taza by late afternoon. Farewell dinner in town (from 40-70 MAD). Catch
                      an evening train to Fes (from 45 MAD, 2 hours) or Oujda (from 75 MAD, 3.5 hours)
                      to continue your Morocco journey. Estimated Day 2 cost: from 200-400 MAD
                      (excluding transport to next city).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 250-450 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Local food, shared taxis, free medina walks, group cave guide</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-900 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private taxi for Tazzeka circuit, restaurant meals, cave exploration</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-1,800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private guide-driver, best restaurants, extended cave expedition</p>
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
            Ready to Explore Taza?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From one of Morocco oldest medinas to Africa deepest caves, Taza offers experiences
            you will not find anywhere else. Discover this hidden gem before the world catches on.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/fes-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Fes City Guide
            </Link>
            <Link
              href="/oujda-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Oujda Guide
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
