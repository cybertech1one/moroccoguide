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
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Mountain,
  Music,
  Tent,
  Sunrise,
  Car,
  Users,
  Wind,
  Binoculars,
  MoonStar,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Merzouga Guide 2026 | Erg Chebbi Dunes & Sahara Desert Camps',
  description:
    'Complete guide to Merzouga, Morocco — gateway to Erg Chebbi, the Sahara tallest dunes. Camel trekking, luxury desert camps, sunrise dune climbs, sandboarding, 4x4 tours, Gnawa music in Khamlia, Lake Dayet Srji flamingos, and stargazing. Prices in MAD.',
  keywords: [
    'merzouga morocco',
    'erg chebbi',
    'merzouga desert camp',
    'merzouga camel ride',
    'merzouga guide',
    'sahara desert morocco merzouga',
    'merzouga things to do',
    'merzouga luxury camp',
    'erg chebbi dunes',
    'merzouga sandboarding',
    'merzouga 4x4 tour',
    'khamlia gnawa music',
    'merzouga stargazing',
    'merzouga sunrise',
    'merzouga sunset camel trek',
    'merzouga desert experience',
    'dayet srji flamingos',
    'merzouga fossil hunting',
    'sahara desert camp morocco',
    'merzouga travel guide 2026',
  ],
  openGraph: {
    title: 'Merzouga Guide 2026 | Erg Chebbi Dunes & Sahara Desert Camps',
    description:
      'Discover Merzouga, gateway to Erg Chebbi — Morocco tallest sand dunes. Camel treks, luxury desert camps, sandboarding, Gnawa music, flamingo lakes, and Sahara stargazing. Complete guide with prices.',
    url: `${BASE_URL}/merzouga-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-merzouga.webp`,
        width: 1200,
        height: 630,
        alt: 'Golden sand dunes of Erg Chebbi at sunrise near Merzouga with camel caravan silhouetted against the Sahara sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merzouga Guide 2026 | Sahara Desert Experience',
    description:
      'Erg Chebbi dunes, camel treks, desert camps, sandboarding, Gnawa music, stargazing, and flamingo lakes. Complete Merzouga guide with real prices.',
    images: [`${BASE_URL}/images/hero-merzouga.webp`],
  },
  alternates: { canonical: `${BASE_URL}/merzouga-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/merzouga-guide`,
  name: 'Merzouga Guide 2026 | Erg Chebbi Dunes & Sahara Desert Camps',
  description:
    'Complete guide to Merzouga, Morocco — gateway to Erg Chebbi and the Sahara. Camel trekking, desert camps, sandboarding, Gnawa music, and stargazing.',
  url: `${BASE_URL}/merzouga-guide`,
  image: `${BASE_URL}/images/hero-merzouga.webp`,
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
  mainEntityOfPage: `${BASE_URL}/merzouga-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Merzouga',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Merzouga Guide', item: `${BASE_URL}/merzouga-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Erg Chebbi?', acceptedAnswer: { '@type': 'Answer', text: 'Erg Chebbi is Morocco largest and most famous sand dune system, located near the village of Merzouga in the eastern Sahara. The dunes stretch about 22 km long and 5 km wide, rising to heights of 150 meters — the tallest in Morocco. Unlike the rocky hamada desert that covers most of the Moroccan Sahara, Erg Chebbi is a sea of pure golden-orange sand that changes color with the light. It is the most accessible major dune system in Morocco and a bucket-list destination for travelers.' } },
    { '@type': 'Question', name: 'How do I get to Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'Merzouga is about 560 km from Marrakech (8-9 hours by car), 360 km from Fes (7 hours), and 130 km from Errachidia (2 hours). Most travelers arrive via organized desert tours from Marrakech or Fes (typically 2-3 day tours). Independent travelers can fly to Errachidia airport and take a grand taxi (from 200 MAD), or drive. CTM buses run to Rissani (15 km away) with onward grand taxis to Merzouga (from 20 MAD).' } },
    { '@type': 'Question', name: 'What is the best time to visit Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'October to April offers the best weather. Summer (June-August) is brutally hot, often exceeding 45-50 degrees during the day, making dune activities dangerous. Spring (March-April) and autumn (October-November) are ideal with warm days (25-35 degrees) and cool nights. Winter (December-February) has pleasant days (18-25 degrees) but very cold nights (can drop below 0 degrees) — bring warm layers for desert camping.' } },
    { '@type': 'Question', name: 'How much does a desert camp cost in Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'Desert camps range from budget to ultra-luxury. Basic camps (shared tents, communal facilities) cost from 200-400 MAD per person including dinner and breakfast. Mid-range camps (private tents, en-suite toilets) cost from 500-1,000 MAD per person. Luxury camps (king beds, hot showers, multi-course dining) cost from 1,500-4,000 MAD per person. Most camps include sunset camel trek, dinner, overnight stay, and sunrise viewing. Book directly with camps for better rates than tour agencies.' } },
    { '@type': 'Question', name: 'Is camel trekking safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, camel trekking in Merzouga is safe and suitable for most people, including children and elderly travelers. The camels (actually dromedaries — single-humped) are well-trained and led by experienced handlers. The ride to desert camps typically takes 1-1.5 hours. Wear comfortable clothes and closed shoes. The movement can cause mild soreness — standing in the stirrups periodically helps. If you have back problems, a 4x4 transfer to camp is available as an alternative.' } },
    { '@type': 'Question', name: 'Can I sandboard at Erg Chebbi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, sandboarding is a popular activity at Erg Chebbi. Most desert camps provide basic sandboards. The experience is similar to snowboarding but slower, as sand creates more friction. The best dunes for sandboarding are the steeper faces near the camps. No prior experience is needed. It is most enjoyable in the morning when the sand is cooler and firmer. Some camps also offer sand-skiing.' } },
    { '@type': 'Question', name: 'What should I pack for Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'Essential items: sunscreen (SPF 50+), sunglasses, hat, light loose clothing for daytime, warm layers for cold desert nights (especially October-March), closed-toe shoes for camel riding, sandals for camp, headscarf/buff for wind and sand protection, camera with dust protection, phone charger/power bank (camps may have limited electricity), and a small flashlight. Leave heavy luggage at your hotel in Merzouga — camps have limited storage.' } },
  ],
};

/* ===============================================================
   DATA: DUNE EXPERIENCES
   =============================================================== */

const duneExperiences = [
  {
    name: 'Sunset Camel Trek to Desert Camp',
    icon: Compass,
    category: 'Signature Experience',
    price: 'From 200 MAD (included in most camp stays)',
    duration: '1-1.5 hours (trek) + overnight',
    bestTime: 'Late afternoon departure',
    description:
      'The sunset camel trek into Erg Chebbi is the quintessential Merzouga experience and one of Morocco most iconic moments. As the afternoon light turns golden, a caravan of dromedaries carries you from the village edge deep into the dunes. The landscape transforms from flat desert to towering sand mountains as you ride — the dunes of Erg Chebbi rising to 150 meters, their crests sharp against the sky. The camels follow ancient routes guided by experienced handlers, swaying gently across the sand. At the highest point, you dismount to watch the sunset paint the dunes in shades of amber, copper, and rose. The silence is absolute.',
    insiderTip:
      'The quality of the camel trek depends largely on the camp you choose. Budget camps use shorter routes; luxury camps take longer, more scenic paths. Ask for a calm, experienced camel. Bring a scarf to wrap around your face against wind and sand. The mounting and dismounting can be awkward — lean back when the camel rises (rear legs first). A 4x4 transfer is available if you cannot ride.',
  },
  {
    name: 'Sunrise Dune Climb',
    icon: Sunrise,
    category: 'Unmissable Experience',
    price: 'Free (from camp)',
    duration: '1-1.5 hours',
    bestTime: 'Before dawn (5-6 AM depending on season)',
    description:
      'Watching sunrise from the top of Erg Chebbi is a transformative experience. Your camp will wake you before dawn — step out of your tent into a world of stars, then climb the nearest high dune in the darkness. The ascent through soft sand is physically demanding but the reward is extraordinary: the first rays of sun turn the dunes from grey to gold to blazing orange in a matter of minutes. The shadows between the dune ridges create an ever-shifting pattern of light and dark. Below, the vast Sahara stretches to every horizon. The silence, the scale, and the beauty make this one of the most memorable moments in any Morocco journey.',
    insiderTip:
      'Wear closed shoes for the climb — the sand is cold at dawn in winter and soft underfoot. Climb the dune ridge rather than the face for easier footing. Bring your camera fully charged — the light changes rapidly and the photographic opportunities are extraordinary. Return to camp for breakfast after. Allow 30-45 minutes for the climb depending on the dune height.',
  },
  {
    name: 'Sandboarding',
    icon: Mountain,
    category: 'Adventure Activity',
    price: 'Free (at most camps) / From 50 MAD rental',
    duration: '1-2 hours',
    bestTime: 'Morning (cooler sand, better grip)',
    description:
      'Sandboarding on the dunes of Erg Chebbi is a thrilling way to experience the desert. Basic sandboards are available at most camps — essentially plywood or fibreglass boards waxed for speed on the sandy slopes. The steeper dune faces near the camps provide the best runs. While slower than snowboarding (sand creates significantly more friction), the experience of carving down a pristine dune face with the Sahara stretching around you is exhilarating. No experience is necessary — falls are cushioned by soft sand.',
    insiderTip:
      'Morning sessions are best — the sand is cooler, firmer, and provides better speed. Wax the board base before each run (camps provide wax). The steepest faces give the best rides but require a long climb back up. Protect your camera from sand. Some camps also offer sand-skiing on narrow boards. This activity is more fun than it looks — even experienced travelers are surprised by the rush.',
  },
  {
    name: 'Dune Sunset Viewpoint',
    icon: Sun,
    category: 'Scenic Experience',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon',
    description:
      'Even if you are not camping overnight, climbing the dunes near Merzouga village for sunset is essential. The dunes on the western edge of Erg Chebbi are accessible by foot from the village — a 20-30 minute climb brings you to a vantage point where the entire dune field spreads before you, turning from gold to deep orange to rose as the sun drops toward the horizon behind the village. The play of light and shadow across the sculpted sand is hypnotic. As darkness falls, the first stars appear with startling clarity.',
    insiderTip:
      'The dunes directly behind Hotel Yasmina and the Cafe des Dunes area offer the most accessible sunset viewpoints. Start climbing 45-60 minutes before sunset to reach a good height. Bring water. The descent in twilight is magical but bring a headlamp or phone light. This experience is free and available even if you are not staying at a desert camp.',
  },
];

/* ===============================================================
   DATA: DESERT CAMPS
   =============================================================== */

const desertCamps = [
  {
    name: 'Budget Desert Camps',
    icon: Tent,
    category: 'Budget Accommodation',
    price: 'From 200-400 MAD per person',
    duration: 'Overnight',
    bestTime: 'October-April',
    description:
      'Budget camps offer the essential desert overnight experience at an accessible price point. Accommodation is typically in shared Berber-style tents with mattresses, blankets, and pillows on the sand floor. Facilities are communal — shared washrooms with basic toilets. Dinner is a communal tagine or couscous cooked over fire, followed by drumming, singing, and stargazing. Breakfast of bread, jam, and coffee is included. The experience is authentic and social — you will share the camp with other travelers from around the world.',
    insiderTip:
      'Book directly with camps in Merzouga village for the best rates — tour agencies in Marrakech and Fes charge significant markups. Expect basic but clean conditions. Bring warm layers for cold nights (temperatures can drop below 5 degrees even in spring). Sleeping bags are sometimes provided but bringing your own liner adds comfort. The communal atmosphere often leads to memorable connections with fellow travelers.',
  },
  {
    name: 'Mid-Range Desert Camps',
    icon: Tent,
    category: 'Comfort Camping',
    price: 'From 500-1,000 MAD per person',
    duration: 'Overnight',
    bestTime: 'October-April',
    description:
      'Mid-range camps offer a significant upgrade in comfort while retaining the authentic desert atmosphere. Private tents with real beds, proper bedding, and sometimes en-suite basic bathrooms. Dinner is a multi-course Moroccan meal (soup, salad, tagine, dessert) served in a communal dining tent. Many mid-range camps have small generators for limited electricity and phone charging. The camp layout typically features a central fire pit area for evening entertainment — Gnawa music, drumming, and storytelling under the stars.',
    insiderTip:
      'The sweet spot for most travelers. You get privacy and comfort without the premium price of luxury camps. Ask about tent positioning — tents on the camp periphery offer better sunrise views and more privacy. Many mid-range camps can arrange private dinners on the dunes for special occasions (from 300 MAD extra). Check recent reviews for the camp condition.',
  },
  {
    name: 'Luxury Desert Camps',
    icon: Sparkles,
    category: 'Premium Experience',
    price: 'From 1,500-4,000 MAD per person',
    duration: 'Overnight',
    bestTime: 'October-April',
    description:
      'Luxury desert camps transform the Sahara overnight into a five-star experience. Spacious private tents feature king-size beds with high-thread-count linens, Berber carpets, proper furniture, and full en-suite bathrooms with hot showers and flushing toilets. Multi-course gourmet dinners are served with wine in elegant dining tents. Some camps feature swimming pools, spa services, and private dune excursions. The setting — surrounded by towering dunes under a canopy of stars — elevates the luxury to something no hotel can match.',
    insiderTip:
      'Top luxury camps include Erg Chebbi Luxury Camp, Desert Luxury Camp, and Merzouga Luxury Desert Camp (names vary — research current options). Book well in advance for peak season (October-November, March-April). The price typically includes everything: camel trek, dinner, overnight, breakfast, and sunrise. Some add private 4x4 tours and sandboarding. The experience is worth the splurge for a special occasion.',
  },
];

/* ===============================================================
   DATA: CULTURAL EXPERIENCES
   =============================================================== */

const culturalExperiences = [
  {
    name: 'Khamlia Gnawa Music Village',
    icon: Music,
    category: 'Cultural Heritage',
    price: 'Free (donations from 50 MAD appreciated)',
    duration: '1-1.5 hours',
    bestTime: 'Morning or afternoon',
    description:
      'The small village of Khamlia, 7 km south of Merzouga, is home to a community of Gnawa musicians — descendants of sub-Saharan Africans who were brought to Morocco centuries ago. The village is famous for its Gnawa music performances, which blend African rhythms, Berber melodies, and spiritual Sufi traditions into a hypnotic, trance-inducing sound. Visitors are welcomed into a simple performance space where the musicians play the guembri (three-stringed bass lute), metal castanets (qraqeb), and drums while singing in a blend of Arabic and sub-Saharan languages. The music is deeply moving and the welcome genuine.',
    insiderTip:
      'Performances are free but donations are expected and appreciated (from 50-100 MAD per person is appropriate). The musicians sell CDs and instruments — purchasing is a meaningful way to support the community. Khamlia is easily reached by taxi from Merzouga (from 30 MAD one-way) or included in most 4x4 desert tours. The experience is one of the most authentic cultural encounters in the Merzouga region.',
  },
  {
    name: 'Berber Nomad Encounters',
    icon: Users,
    category: 'Cultural Experience',
    price: 'From 100 MAD (via guide) / Free (chance encounters)',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Semi-nomadic Berber families still live in the desert around Erg Chebbi, moving seasonally with their goat herds between water sources and grazing areas. Some families welcome visitors to their desert camps — simple structures of woven fabric and branches — for mint tea and conversation. These encounters offer a profound glimpse into a way of life that has persisted in the Sahara for millennia. The hospitality is genuine, the tea sweet, and the simplicity of the desert existence humbling.',
    insiderTip:
      'These encounters are best arranged through your accommodation or a trusted local guide rather than approaching nomad camps independently. A guide ensures the visit is appropriate and respectful. Bring a small gift (sugar, tea, or bread from Merzouga is traditional). Take photographs only with permission. The experience is most meaningful when facilitated by someone who knows the families.',
  },
  {
    name: 'Fossil Hunting',
    icon: Eye,
    category: 'Geological Activity',
    price: 'Free (self-guided) / From 100 MAD (guided tour)',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'The desert around Merzouga is a geological treasure trove. The region was once covered by a shallow sea, and 350-million-year-old marine fossils are abundantly preserved in the rock formations. Trilobites, ammonites, orthoceras (straight-shelled cephalopods), and ancient sea lilies (crinoids) can be found exposed in the desert floor and rock outcrops. Local fossil shops in Merzouga and Rissani sell polished specimens and fossil-embedded objects (tables, sinks, decorative plates). A guided fossil tour to the best sites offers geological context.',
    insiderTip:
      'The area around the Mfis mines (east of Merzouga) is rich in fossils. Some hotel owners organize guided fossil excursions. When buying fossils in shops, be aware that some pieces are assembled from fragments or enhanced — ask for explanations of authenticity. Genuine trilobite fossils start from 50 MAD for small specimens. The black marble with white fossil inclusions is a Merzouga specialty.',
  },
  {
    name: 'Desert Stargazing',
    icon: MoonStar,
    category: 'Night Experience',
    price: 'Free (from camp) / From 200 MAD (guided session with telescope)',
    duration: '1-2 hours',
    bestTime: 'After 9 PM on clear nights',
    description:
      'The Sahara desert around Merzouga has some of the darkest skies in Morocco, far from any significant light pollution. On clear nights — which are most nights — the Milky Way arches across the entire sky in a luminous band visible to the naked eye. Thousands of stars, planets, and satellites are visible. The experience of lying on a warm dune after sunset, watching the sky slowly fill with light, is profoundly humbling. Some luxury camps offer guided stargazing sessions with telescopes and astronomical commentary.',
    insiderTip:
      'New moon periods offer the darkest skies and best stargazing. Download a star map app (Sky Map, Stellarium) before arriving — you will want to identify constellations. The best viewing is from the dune tops, away from camp lights. Bring a jacket — desert nights cool rapidly. October through March offers the clearest skies and the Milky Way core is particularly vivid in autumn.',
  },
];

/* ===============================================================
   DATA: ADVENTURE ACTIVITIES
   =============================================================== */

const adventureActivities = [
  {
    name: '4x4 Desert Safari',
    icon: Car,
    category: 'Adventure Tour',
    price: 'From 400 MAD per person (half day) / From 700 MAD (full day)',
    duration: 'Half day or full day',
    bestTime: 'Morning departure',
    description:
      'A 4x4 safari through the desert around Erg Chebbi covers terrain impossible to reach on foot or by camel. Experienced drivers navigate the rocky desert (hamada), dry riverbeds (oueds), and the dune edges in rugged vehicles. The standard circuit includes Khamlia village for Gnawa music, the Mfis mines (abandoned lead and zinc mines with dramatic galleries), nomad camps, fossil sites, oasis villages, and panoramic viewpoints overlooking the dune field. The driving itself — cresting dune ridges and sliding down sand faces — is an adrenaline rush.',
    insiderTip:
      'Half-day tours (3-4 hours) cover the essential stops. Full-day tours add more remote sites and lunch at a nomad camp. Book through your accommodation for fair prices — operators in the village offer competitive rates. Sit in the front for the best views and least bumpy ride. Bring a scarf for dust. The best operators explain the geology, ecology, and culture along the route.',
  },
  {
    name: 'Quad Biking / ATV Tours',
    icon: Wind,
    category: 'Adventure Activity',
    price: 'From 300 MAD per person (1 hour) / From 500 MAD (2 hours)',
    duration: '1-2 hours',
    bestTime: 'Late afternoon',
    description:
      'Quad biking across the desert landscape around Merzouga offers high-octane thrills with a side of stunning scenery. Tours typically depart in the late afternoon, riding across the flat hamada desert toward the dune edges and through desert villages. Some routes include sections on the dune periphery — riding the hard sand between the dune formations. The combination of speed, open landscape, and golden light makes this one of the most popular adventure activities in Merzouga.',
    insiderTip:
      'Wear closed shoes, long trousers, and a scarf to protect against dust. Helmets and goggles are provided. No experience is needed — a brief training session is given. Late afternoon tours catch the best light. Two-hour tours are more satisfying as they reach more interesting terrain. Prices are negotiable — compare rates between operators. Check that insurance is included.',
  },
  {
    name: 'Lake Dayet Srji (Seasonal Flamingos)',
    icon: Binoculars,
    category: 'Nature & Wildlife',
    price: 'Free / From 30 MAD by taxi',
    duration: '30 minutes - 1 hour',
    bestTime: 'February-May (when lake is filled)',
    description:
      'In wet winters and springs, the seasonal Lake Dayet Srji forms on the desert floor west of Merzouga — a surreal sheet of water in the Sahara. Even more remarkably, the lake attracts flocks of greater flamingos that stop during their migration between sub-Saharan Africa and southern Europe. The sight of pink flamingos wading in a desert lake with the golden dunes of Erg Chebbi rising behind them is one of Morocco most extraordinary natural spectacles. The lake also attracts other migratory birds, making it a birdwatcher paradise.',
    insiderTip:
      'The lake is seasonal and depends entirely on rainfall — in dry years it may not form at all. February to May offers the best chance of seeing flamingos. The lake is about 3 km west of Merzouga and accessible by a short taxi ride (from 30 MAD) or a 30-minute walk. Bring binoculars for birdwatching. The flamingos are skittish — keep your distance for the best observations and least disturbance.',
  },
  {
    name: 'Nearby Mine Exploration',
    icon: Mountain,
    category: 'Historical & Geological',
    price: 'From 50 MAD (included in 4x4 tours)',
    duration: '30-45 minutes',
    bestTime: 'Any time',
    description:
      'The abandoned mines east of Merzouga — primarily the Mfis lead, zinc, and baryte mines — offer a fascinating look at the region mining heritage. Closed since the mid-20th century, the mine galleries, tunnels, and infrastructure remain visible in the desert landscape. The mineral-rich geology that created these deposits also produced the region famous fossils. Some areas display striking mineral formations and colorful rock strata. The mines are typically included as a stop on 4x4 desert tours.',
    insiderTip:
      'The mines are not developed for tourism — exercise caution around old tunnels and shafts. Most 4x4 tour guides know the safe areas to explore. The geological interest is significant — the mineral veins are visible in the rock faces. Photography of the abandoned structures against the desert backdrop is compelling. The mines are about 15 km east of Merzouga on desert tracks.',
  },
];

/* ===============================================================
   DATA: PRACTICAL EXPERIENCES
   =============================================================== */

const practicalExperiences = [
  {
    name: 'Merzouga Village',
    icon: MapPin,
    category: 'Base Town',
    price: 'Free to explore',
    duration: '1-2 hours',
    bestTime: 'Any time',
    description:
      'Merzouga is a small desert village that exists primarily as the gateway to Erg Chebbi. A single main road lined with hotels, guesthouses, cafes, and tour operators runs parallel to the dune field. The village is modest but functional, with everything a traveler needs: accommodation from budget to luxury, restaurants serving Moroccan and international food, ATMs, pharmacies, and small shops selling desert essentials. The real attraction is the view — from almost anywhere in the village, the towering dunes of Erg Chebbi rise dramatically to the east, glowing orange in the morning and evening light.',
    insiderTip:
      'Stay in a hotel or riad on the eastern edge of the village for direct dune access and the best views. Many accommodations offer free sunset walks to the nearest dunes. The village has reliable WiFi at most hotels. Stock up on water and sunscreen here — prices are higher in the desert. The main street comes alive in the evening as travelers return from desert excursions.',
  },
  {
    name: 'Rissani Market Town',
    icon: Globe,
    category: 'Day Trip',
    price: 'Grand taxi from 20 MAD',
    duration: '2-3 hours',
    bestTime: 'Tuesday, Thursday, or Sunday (market days)',
    description:
      'Rissani, 35 km west of Merzouga, is the historic capital of the Tafilalet oasis and the ancestral home of Morocco ruling Alaouite dynasty. The town weekly souk (Tuesday, Thursday, Sunday) is one of the most authentic in southern Morocco — a vast, chaotic marketplace where Saharan traders, Berber farmers, and desert nomads buy and sell livestock, dates, spices, textiles, and household goods. The Alaouite Mausoleum (Moulay Ali Cherif) is an important pilgrimage site. The ruins of Sijilmassa, the medieval trans-Saharan trading city, are visible on the outskirts.',
    insiderTip:
      'The Rissani souk on market days is a sensory experience unlike any tourist market. Come hungry — the market has excellent street food including medfouna (Berber pizza, from 20 MAD), a Rissani specialty of stuffed flatbread. Grand taxis from Merzouga to Rissani run regularly (from 20 MAD, 30 minutes). The ruins of Sijilmassa are sparse but historically significant — this was once one of the richest cities in Africa.',
  },
  {
    name: 'Desert Cooking Class',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 200 MAD per person',
    duration: '2-3 hours',
    bestTime: 'Afternoon',
    description:
      'Several accommodations in Merzouga offer cooking classes focused on traditional Saharan cuisine. Learn to prepare dishes adapted to desert life — slow-cooked sand tagine (madfouna), Berber bread baked in the sand under embers, desert herb tea, and traditional couscous. The sand-cooking technique, where food is buried in hot sand and slow-cooked for hours, is unique to the Saharan Berber tradition. Classes are hands-on and typically conclude with eating what you have prepared, often in a desert setting.',
    insiderTip:
      'The sand-baked bread (khobz) is the highlight — watching dough transform in the desert sand is memorable. Book through your accommodation for the best value. The medfouna (Berber pizza) lesson is particularly popular. Classes often include a visit to a local garden or oasis to pick herbs. Group classes are cheaper; private sessions offer more hands-on time.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Book Camps Directly', icon: Tent, description: 'Contact desert camps directly via WhatsApp or email rather than booking through Marrakech/Fes tour agencies. Direct rates are typically 30-50% cheaper. Ask your Merzouga hotel to recommend camps.', savings: 'Save from 200-800 MAD vs. agency prices' },
  { tip: 'Share 4x4 Tours', icon: Car, description: 'Ask your accommodation to pair you with other travelers for 4x4 desert tours. Sharing a vehicle splits the cost significantly. Solo travelers can often join existing groups.', savings: 'Save from 200-400 MAD per person' },
  { tip: 'Free Dune Access', icon: Mountain, description: 'The dunes are public — you do not need a tour to climb them. Walk from the village edge to the nearest dunes (5-15 minutes) for sunset and sunrise. Free and magical.', savings: 'Free — save from 100-300 MAD' },
  { tip: 'Grand Taxi from Rissani', icon: MapPin, description: 'If arriving by bus, take the CTM or Supratours to Rissani (from 100 MAD from Fes), then a shared grand taxi to Merzouga (from 20 MAD). Much cheaper than private transfers.', savings: 'Save from 200-500 MAD vs. private transfer' },
  { tip: 'Budget Camp + Free Activities', icon: Heart, description: 'Combine a budget camp stay (from 200 MAD including dinner/breakfast/camel trek) with free activities: dune climbing, sunset viewing, village walking, and stargazing. A full Sahara experience for under 300 MAD.', savings: 'Full desert experience from 200 MAD' },
  { tip: 'Eat in Merzouga Village', icon: UtensilsCrossed, description: 'Village restaurants serve excellent tagines (from 40 MAD), pizzas (from 35 MAD), and Berber omelets (from 25 MAD). Much cheaper than dining at upscale hotel restaurants (from 100-200 MAD).', savings: 'Save from 50-150 MAD per meal' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Protect Your Electronics', icon: AlertTriangle, description: 'Sand infiltrates everything. Keep cameras and phones in ziplock bags when not in use. Use a lens cloth frequently. Power banks are essential — camp electricity is limited. Charge everything before entering the desert.' },
  { tip: 'Dress in Layers', icon: CheckCircle, description: 'Desert temperature swings are extreme — from 35+ degrees during the day to below 5 degrees at night (winter). Bring lightweight clothes for daytime and warm layers, a hat, and even gloves for night. Your camp will provide blankets but a sleeping bag liner adds comfort.' },
  { tip: 'Stay Hydrated', icon: Heart, description: 'The dry desert air dehydrates you faster than you realize. Drink at least 3-4 liters of water per day. Buy water in Merzouga village before heading to camp. Your accommodation will have bottled water available. Avoid alcohol before desert activities.' },
  { tip: 'Negotiate Everything', icon: Lightbulb, description: 'Prices for camel treks, 4x4 tours, and quad bikes are all negotiable in Merzouga. Get quotes from multiple operators. Low season (May-September) offers the best bargaining power. Your accommodation can often arrange better rates than street operators.' },
  { tip: 'Best Photography Strategy', icon: Camera, description: 'Sunrise offers the best dune photography — shadows are longest and the color most intense. Climb high for perspective. The blue hour after sunset produces stunning camp shots. Use a wide-angle lens for dune landscapes and a telephoto for caravan silhouettes.' },
  { tip: 'Leave Heavy Luggage Behind', icon: Compass, description: 'Desert camps have limited space. Leave suitcases at your Merzouga hotel (all will store luggage). Take only a small backpack to camp: toiletries, warm layers, camera, charger, and flashlight. Camels carry your bag but heavy loads are uncomfortable.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Erg Chebbi?', answer: 'Erg Chebbi is Morocco largest sand dune system near Merzouga in the eastern Sahara. The dunes stretch 22 km long and 5 km wide, rising to 150 meters — the tallest in Morocco. Unlike the rocky hamada desert, Erg Chebbi is pure golden-orange sand that changes color with the light.' },
  { question: 'How do I get to Merzouga?', answer: 'Merzouga is about 560 km from Marrakech (8-9 hours), 360 km from Fes (7 hours), and 130 km from Errachidia (2 hours). Most arrive via organized desert tours or drive independently. CTM buses run to Rissani (35 km away) with onward grand taxis to Merzouga (from 20 MAD).' },
  { question: 'What is the best time to visit Merzouga?', answer: 'October to April is ideal. Summer exceeds 45-50 degrees and is dangerous for outdoor activities. Spring (March-April) and autumn (October-November) are perfect with warm days and cool nights. Winter has pleasant days but very cold nights — bring warm layers for camping.' },
  { question: 'How much does a desert camp cost?', answer: 'Budget camps cost from 200-400 MAD per person (shared tents, communal facilities). Mid-range: from 500-1,000 MAD (private tents, en-suite). Luxury: from 1,500-4,000 MAD (king beds, hot showers, gourmet dining). Most include camel trek, dinner, and breakfast.' },
  { question: 'Is camel trekking safe?', answer: 'Yes, very safe and suitable for most ages. Camels are well-trained and handlers are experienced. The ride to camp takes 1-1.5 hours. Wear closed shoes and lean back when the camel rises. A 4x4 transfer is available as an alternative for those with mobility concerns.' },
  { question: 'Can I sandboard at Erg Chebbi?', answer: 'Yes, most camps provide basic sandboards free of charge. It is similar to snowboarding but slower. The steeper dune faces near camps provide the best runs. Morning is the best time when the sand is cooler and firmer. No experience is needed.' },
  { question: 'What should I pack for Merzouga?', answer: 'SPF 50+ sunscreen, sunglasses, hat, lightweight clothes, warm layers for cold nights, closed shoes, sandals for camp, headscarf for sand protection, camera with dust protection, power bank, and a flashlight. Leave heavy luggage at your hotel — take only a small backpack to camp.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/sahara-desert', icon: Sun, title: 'Sahara Desert Guide', description: 'Complete guide to Morocco desert experiences beyond Merzouga.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic routes through the desert, mountains, and coast.' },
  { href: '/morocco-3-days', icon: Calendar, title: 'Morocco in 3 Days', description: 'Quick itineraries including Sahara desert options.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Desert cuisine, sand tagine, and Berber cooking traditions.' },
  { href: '/best-time-visit-morocco', icon: Calendar, title: 'Best Time to Visit', description: 'Seasonal guide to planning desert visits and avoiding extreme heat.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MerzougaGuidePage() {
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
            backgroundImage: 'url(/images/hero-merzouga.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Merzouga Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sun className="w-4 h-4" />
            Gateway to the Sahara
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Merzouga Guide
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Gateway to Erg Chebbi, Morocco tallest and most majestic sand dunes.
            Camel treks, desert camps, Gnawa music, stargazing, and the silence of the Sahara.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Merzouga: Where the Sahara Begins
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                At the edge of a small desert village in eastern Morocco, the flat hamada gives way
                to something extraordinary — the towering dunes of Erg Chebbi, a sea of golden sand
                rising 150 meters into the blue Saharan sky. Merzouga exists because of these dunes,
                and the dunes deliver one of Morocco most transformative travel experiences: the
                chance to ride a camel into the Sahara, sleep under a canopy of stars, and watch the
                desert turn from silver to gold as the sun rises over Africa.
              </p>
              <p>
                But Merzouga offers more than dunes. In the nearby village of Khamlia, Gnawa musicians
                perform hypnotic spiritual music that blends African and Berber traditions. In wet
                seasons, the impossible sight of flamingos wading in a desert lake unfolds at Dayet
                Srji. Fossil hunters discover 350-million-year-old marine creatures preserved in the
                desert floor. And at night, the Sahara delivers some of the darkest, most star-filled
                skies accessible to travelers anywhere in the world.
              </p>
              <p>
                This guide covers everything you need to plan a Merzouga visit — from choosing the
                right desert camp and understanding camel trek options to finding Gnawa music, fossil
                sites, and the best dunes for sunrise and sunset. Each listing includes real 2026
                prices in MAD, practical logistics, and insider tips from people who know this desert
                intimately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 15 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 15 Things to Do in Merzouga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From sunset camel treks and luxury desert camps to Gnawa music and flamingo lakes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Sunset Camel Trek to Camp', price: 'From 200 MAD', time: '1-1.5 hours + overnight', category: 'Signature' },
              { rank: 2, name: 'Sunrise Dune Climb', price: 'Free (from camp)', time: '1-1.5 hours', category: 'Unmissable' },
              { rank: 3, name: 'Overnight Desert Camp', price: 'From 200 MAD', time: 'Overnight', category: 'Accommodation' },
              { rank: 4, name: 'Khamlia Gnawa Music', price: 'Donation from 50 MAD', time: '1-1.5 hours', category: 'Cultural' },
              { rank: 5, name: 'Sandboarding', price: 'Free at most camps', time: '1-2 hours', category: 'Adventure' },
              { rank: 6, name: '4x4 Desert Safari', price: 'From 400 MAD', time: 'Half or full day', category: 'Tour' },
              { rank: 7, name: 'Desert Stargazing', price: 'Free / From 200 MAD guided', time: '1-2 hours', category: 'Night' },
              { rank: 8, name: 'Quad Biking / ATV', price: 'From 300 MAD', time: '1-2 hours', category: 'Adventure' },
              { rank: 9, name: 'Lake Dayet Srji Flamingos', price: 'Free', time: '30 min - 1 hour', category: 'Wildlife' },
              { rank: 10, name: 'Berber Nomad Encounter', price: 'From 100 MAD', time: '30 min - 1 hour', category: 'Cultural' },
              { rank: 11, name: 'Fossil Hunting', price: 'Free / From 100 MAD guided', time: '1-2 hours', category: 'Geological' },
              { rank: 12, name: 'Rissani Market Town', price: 'From 20 MAD taxi', time: '2-3 hours', category: 'Day Trip' },
              { rank: 13, name: 'Desert Cooking Class', price: 'From 200 MAD', time: '2-3 hours', category: 'Culinary' },
              { rank: 14, name: 'Nearby Mine Exploration', price: 'From 50 MAD', time: '30-45 min', category: 'Historical' },
              { rank: 15, name: 'Dune Sunset Viewpoint', price: 'Free', time: '1-2 hours', category: 'Scenic' },
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

      {/* -- Dune Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dune Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The towering dunes of Erg Chebbi are the main event — from sunset camel treks
            and sunrise climbs to sandboarding and pure contemplation.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most dune activities are included with desert camp stays. Independent visitors can access dunes freely.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {duneExperiences.map((attraction) => {
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

      {/* -- Desert Camps -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Camps: Budget to Luxury
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Sleeping in the Sahara is the highlight of any Merzouga visit. Choose from basic Berber
            tents to five-star luxury camps with hot showers and gourmet dining.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most camp prices include sunset camel trek, dinner, overnight stay, and breakfast. Book directly for the best rates.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {desertCamps.map((item) => {
              const CampIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CampIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Cultural Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural &amp; Nature Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the dunes, Merzouga region offers Gnawa music, nomad encounters, ancient fossils,
            and some of the most spectacular stargazing on Earth.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Many cultural experiences can be combined in a 4x4 tour or arranged independently through your accommodation.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {culturalExperiences.map((item) => {
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

      {/* -- Adventure Activities -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adventure &amp; Exploration
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            4x4 safaris, quad biking, flamingo spotting, and the geological wonders of the Sahara.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Adventure activities are weather-dependent and may be cancelled in sandstorms. Most operate year-round except peak summer.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {adventureActivities.map((item) => {
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

      {/* -- Practical Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Village, Day Trips &amp; Food
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Merzouga village life, the historic market town of Rissani, and desert cooking traditions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Rissani market days are Tuesday, Thursday, and Sunday. The medfouna (Berber pizza) is a must-try.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {practicalExperiences.map((item) => {
              const PracIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PracIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Budget Tips for Merzouga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara experience does not have to break the bank. Smart planning can deliver an unforgettable desert night from 200 MAD.
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
            Insider Tips for Merzouga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Desert-specific knowledge that makes the difference between a good trip and a life-changing one.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Merzouga Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The classic Merzouga experience: arrive, explore, camp in the Sahara, and depart transformed.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Explore, Camel Trek &amp; Desert Camp
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning / Early Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive in Merzouga and check into your hotel. If time allows, take a 4x4 tour
                      (from 400 MAD) to Khamlia for Gnawa music, nomad camps, fossil sites, and the
                      Mfis mines. Alternatively, visit the seasonal Dayet Srji lake for flamingos
                      (February-May). Lunch in the village (tagine from 40 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Late Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Leave luggage at the hotel and take a small backpack for the overnight. Meet your
                      camel and handler. Sunset camel trek into Erg Chebbi (1-1.5 hours). Watch the
                      dunes turn from gold to amber to rose as the sun sets. Arrive at your desert camp
                      as darkness falls.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Multi-course dinner at camp (included with stay). Drumming and music around the
                      campfire. Climb a nearby dune for stargazing — the Milky Way is visible to the
                      naked eye. Sleep in your desert tent with the silence of the Sahara around you.
                      Estimated Day 1 cost: from 250-2,000 MAD (depending on camp level).
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
                  Day 2: Sunrise, Sandboarding &amp; Departure
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sunrise className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Pre-Dawn / Sunrise</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Wake before dawn (5-6 AM). Climb the nearest high dune in the darkness — the stars
                      overhead are extraordinary. Watch the sunrise paint the dunes gold from your perch
                      150 meters above the desert floor. One of the most unforgettable experiences in
                      Morocco. Descend for breakfast at camp.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sandboarding on the camp dunes (free at most camps). Camel ride back to Merzouga
                      village (included). Return to your hotel for a shower and luggage retrieval.
                      Optional: quad biking (from 300 MAD) or a cooking class (from 200 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      If staying longer: explore Rissani market (from 20 MAD taxi, market days Tue/Thu/Sun).
                      Try medfouna (Berber pizza, from 20 MAD). If departing: onward transport to Fes,
                      Marrakech, or Ouarzazate. Estimated Day 2 cost: from 100-500 MAD (excluding transport).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding transport to Merzouga)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 400-700 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Budget camp, free dune walks, village restaurants</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Mid-range camp, 4x4 tour, quad biking, Rissani day trip</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 3,000-6,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Luxury camp, private tours, gourmet dining, spa</p>
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
            Ready to Experience the Sahara?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From sunset camel treks and starlit desert camps to Gnawa music and flamingo lakes,
            Merzouga delivers one of Morocco most transformative experiences. The dunes are calling.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/sahara-desert"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Sun className="w-5 h-5" />
              Sahara Desert Guide
            </Link>
            <Link
              href="/morocco-road-trip-routes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Road Trip Routes
            </Link>
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Calendar className="w-5 h-5" />
              Best Time to Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
