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
  Globe,
  Footprints,
  Eye,
  Mountain,
  Users,
  BedDouble,
  BookOpen,
  Leaf,
  Waypoints,
  Columns3,
  CircleDot,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Moulay Idriss Zerhoun Guide 2026 | Morocco Holy City & Volubilis',
  description:
    'Complete guide to Moulay Idriss Zerhoun, Morocco holiest town in 2026. Visit the Mausoleum of Moulay Idriss I, Grand Terrace viewpoint, unique cylindrical minaret, Volubilis Roman ruins, olive oil production, and mountain hiking.',
  keywords: [
    'moulay idriss morocco',
    'moulay idriss zerhoun guide',
    'volubilis from moulay idriss',
    'morocco holy city',
    'moulay idriss hotels',
    'moulay idriss mausoleum',
    'moulay idriss zerhoun',
    'moulay idriss overnight stay',
    'moulay idriss cylindrical minaret',
    'moulay idriss moussem',
    'volubilis roman ruins',
    'moulay idriss viewpoint',
    'moulay idriss olive oil',
    'moulay idriss hiking',
    'zerhoun mountain',
    'moulay idriss day trip meknes',
    'moulay idriss travel guide',
    'moulay idriss riad',
    'moulay idriss grand terrace',
    'moulay idriss restaurants',
  ],
  openGraph: {
    title: 'Moulay Idriss Zerhoun Guide 2026 | Morocco Holy City & Volubilis',
    description:
      'Discover Moulay Idriss Zerhoun: Morocco holiest town perched on twin hills above Volubilis Roman ruins. Mausoleum, Grand Terrace, unique minaret, olive oil, mountain hiking.',
    url: `${BASE_URL}/moulay-idriss-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes.webp`,
        width: 1200,
        height: 630,
        alt: 'The whitewashed town of Moulay Idriss Zerhoun cascading over twin green hills with the Zerhoun mountain rising behind',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moulay Idriss Zerhoun Guide 2026 | Morocco Holy City',
    description:
      'Mausoleum of Moulay Idriss I, Grand Terrace, cylindrical minaret, Volubilis ruins, olive oil, mountain hiking. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-fes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/moulay-idriss-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/moulay-idriss-guide`,
  name: 'Moulay Idriss Zerhoun Guide 2026 | Morocco Holy City & Volubilis',
  description:
    'Complete guide to Moulay Idriss Zerhoun, Morocco holiest town. Visit the Mausoleum, Grand Terrace viewpoint, cylindrical minaret, and the nearby Volubilis Roman ruins.',
  url: `${BASE_URL}/moulay-idriss-guide`,
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
  mainEntityOfPage: `${BASE_URL}/moulay-idriss-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Moulay Idriss Zerhoun',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Moulay Idriss Guide', item: `${BASE_URL}/moulay-idriss-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can non-Muslims visit Moulay Idriss?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Non-Muslims can freely visit the town, explore the streets, eat in restaurants, and stay overnight in riads and guesthouses. The only restriction is the Mausoleum of Moulay Idriss I itself — non-Muslims cannot enter the mausoleum or the adjacent Zaouia complex, though you can view the beautiful exterior, courtyard entrance, and green-tiled roof from nearby viewpoints. Until 2005, non-Muslims were not permitted to stay overnight; this restriction has been lifted and several excellent guesthouses now welcome all visitors.' } },
    { '@type': 'Question', name: 'How do I get from Meknes to Moulay Idriss?', acceptedAnswer: { '@type': 'Answer', text: 'Grand taxis from Meknes to Moulay Idriss Zerhoun depart from the Institut Agronomique station in Meknes and cost from 15 MAD per person shared (30 minutes). Return taxis leave from the main square in Moulay Idriss. Some travelers combine Moulay Idriss with Volubilis (5 km away) in a single day trip from Meknes or Fes. Buses are less frequent but also available.' } },
    { '@type': 'Question', name: 'Is Moulay Idriss worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely, especially if you want to experience a side of Morocco that most tourists never see. The town spiritual atmosphere, dramatic hillside setting, panoramic viewpoints, proximity to Volubilis Roman ruins, and emerging guesthouse scene make it one of Morocco most rewarding off-the-beaten-path destinations. An overnight stay is strongly recommended to experience the town after day-trippers leave.' } },
    { '@type': 'Question', name: 'How far is Volubilis from Moulay Idriss?', acceptedAnswer: { '@type': 'Answer', text: 'Volubilis is just 5 km from Moulay Idriss, a 10-minute drive or approximately 1-hour walk through olive groves. You can hire a petit taxi (from 20 MAD), walk the scenic road through the countryside, or arrange transport through your guesthouse. Many visitors stay in Moulay Idriss and walk to Volubilis in the morning for the best light on the ruins.' } },
    { '@type': 'Question', name: 'What is the annual moussem of Moulay Idriss?', acceptedAnswer: { '@type': 'Answer', text: 'The annual moussem (religious festival) of Moulay Idriss, typically held in August or September, is one of Morocco most important religious celebrations. Pilgrims from across the country gather to honor the founder of the first Moroccan dynasty. The festival features religious ceremonies, Sufi music, traditional fantasia (horseback displays), food markets, and a carnival atmosphere. Non-Muslims can observe the processions and celebrations in the town streets.' } },
    { '@type': 'Question', name: 'Where should I stay in Moulay Idriss?', acceptedAnswer: { '@type': 'Answer', text: 'Dar Zerhoune and Scorpion House are the most acclaimed guesthouses, offering panoramic terraces, excellent home-cooked meals, and knowledgeable hosts (from 500-800 MAD per night including breakfast). Simpler rooms are available from 300 MAD per night. Staying overnight is strongly recommended — the town transforms after day-trippers leave, and the sunset and sunrise views from the terraces are extraordinary.' } },
  ],
};

/* ===============================================================
   DATA: SACRED & CULTURAL SIGHTS
   =============================================================== */

const sacredSights = [
  {
    name: 'Mausoleum of Moulay Idriss I',
    icon: Landmark,
    category: 'Sacred Heritage',
    price: 'Free (exterior viewing only for non-Muslims)',
    duration: '30-45 minutes',
    bestTime: 'Morning',
    description:
      'The Mausoleum of Moulay Idriss I is the spiritual heart of Morocco. Moulay Idriss I (Idris ibn Abdallah), a great-grandson of the Prophet Muhammad, fled the Abbasid massacre in Arabia in 788 AD and found refuge in the Berber town of Walili (Volubilis). He united the local Berber tribes under Islam and founded the Idrisid dynasty — Morocco first Islamic dynasty and the seed from which the Moroccan nation grew. His tomb, rebuilt and embellished over the centuries by successive sultans, is the most revered pilgrimage site in Morocco. The mausoleum complex features exquisite zellige tilework, carved stucco, a green-tiled pyramidal roof, and a bronze-doored entrance that glows in the morning light.',
    insiderTip:
      'Non-Muslims cannot enter the mausoleum but can approach the entrance courtyard and observe through the doorway. The best view of the green-tiled roof and surrounding zaouia complex is from the Grand Terrace (see below). During the annual moussem, the area around the mausoleum fills with pilgrims and the spiritual intensity is palpable. Photograph respectfully — avoid pointing cameras directly at people praying.',
  },
  {
    name: 'Grand Terrace (Grande Terrasse)',
    icon: Eye,
    category: 'Panoramic Viewpoint',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Sunset or early morning',
    description:
      'The Grand Terrace is Moulay Idriss most spectacular viewpoint, offering a sweeping panorama over the town, the Zerhoun mountain, and the vast agricultural plain stretching toward Meknes and Volubilis. From here, the twin hills of Moulay Idriss are perfectly visible — the town cascading down both slopes in a tumble of whitewashed houses with the green-roofed mausoleum nestled between them. The view encompasses olive groves, farmland, distant mountains, and on clear days, the outlines of the Middle Atlas range. At sunset, the white walls turn pink and gold, and at dawn, mist often fills the valley below while the hilltop catches the first light.',
    insiderTip:
      'The terrace is on the eastern side of town, near the Khiber hill. Ask any local for directions — it is well known. Bring a camera with a wide-angle lens for the panoramic shot. Sunset is the most popular time but sunrise (if staying overnight) is equally stunning and completely empty. The call to prayer echoing across the valley from this vantage point is one of Morocco most moving sounds.',
  },
  {
    name: 'Cylindrical Minaret (Sidi Abdallah el-Hajjam)',
    icon: CircleDot,
    category: 'Architectural Rarity',
    price: 'Free (exterior only)',
    duration: '15-20 minutes',
    bestTime: 'Morning (best light)',
    description:
      'Morocco is famous for its square minarets — a defining feature of western Islamic architecture since the Almohad dynasty. The cylindrical minaret of the small Sidi Abdallah el-Hajjam mosque in Moulay Idriss is a remarkable exception and believed to be the only cylindrical minaret in Morocco. Built in the 19th century, it was inspired by or modeled after the spiral minarets of Samarra in Iraq. The minaret is decorated with green zellige tiles and Quranic inscriptions arranged in a band around its circumference. Its unusual form makes it an architectural curiosity and a subtle reminder of the broader Islamic world connections to this small Moroccan hilltown.',
    insiderTip:
      'The minaret is in the Tasga quarter on the western hill. Walk uphill from the main square — locals can point the way. It is easily missed if you are not looking for it. The best photograph shows the cylindrical form against the backdrop of the Zerhoun mountain. Visit in the morning when the green tiles catch the light. The surrounding neighborhood is quiet and residential — walk respectfully.',
  },
  {
    name: 'Town Walk: Medina Streets & Souks',
    icon: Footprints,
    category: 'Cultural Exploration',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Moulay Idriss is not a large medina — it is a compact hilltown where the streets wind steeply up and down between whitewashed houses, neighborhood mosques, and small shops. Walking these streets is an immersion into daily Moroccan life far removed from tourist circuits. Women bake bread in communal ovens, children play in doorways, men sit in tiny cafes, and the occasional donkey transports goods up the steep alleys. The town small souk near the main square sells fresh produce, olives, spices, and household goods. The whole town is genuinely living its traditional rhythms, not performing them for visitors.',
    insiderTip:
      'Start at the main square (Place Mohammed VI) and wander uphill in either direction. The town is small enough that you cannot get seriously lost — the twin hills and the mausoleum green roof serve as landmarks. The western hill (Tasga) is less visited and more atmospheric. Greet people with "as-salamu alaykum" and you will receive warm smiles. The steep streets are uneven — wear comfortable shoes with good grip.',
  },
];

/* ===============================================================
   DATA: VOLUBILIS & EXCURSIONS
   =============================================================== */

const excursions = [
  {
    name: 'Volubilis Roman Ruins',
    icon: Columns3,
    category: 'UNESCO World Heritage',
    price: 'From 70 MAD',
    duration: '2-3 hours',
    bestTime: 'Early morning (before tour buses)',
    description:
      'Just 5 km from Moulay Idriss, the UNESCO World Heritage site of Volubilis is the finest Roman archaeological site in Morocco and one of the best preserved in North Africa. Founded as a Berber settlement, Volubilis became a major Roman provincial capital in the 1st century AD, with a population of 20,000. The extensive ruins include the Capitoline Temple, Basilica, triumphal Arch of Caracalla, a remarkably intact olive press complex, and dozens of houses with their original mosaic floors — the mosaics of Orpheus, Diana, and the Labours of Hercules are masterpieces of Roman art. The site is set in rolling farmland with the Zerhoun mountains as backdrop, giving it a romantic, pastoral atmosphere.',
    insiderTip:
      'Arrive when the site opens (8:30 AM) or come late afternoon (4 PM) to avoid tour bus crowds that arrive midday from Fes and Meknes. Walking from Moulay Idriss takes about 1 hour through beautiful olive groves — the approach on foot is far more atmospheric than arriving by car. Hire a local guide at the entrance (from 120 MAD) — the stories behind the mosaics and ruins are fascinating. The House of Venus and the House of the Labours of Hercules have the best mosaics.',
  },
  {
    name: 'Walk from Moulay Idriss to Volubilis',
    icon: Waypoints,
    category: 'Scenic Walk',
    price: 'Free (plus Volubilis entry from 70 MAD)',
    duration: '1 hour (one way)',
    bestTime: 'Early morning',
    description:
      'The 5 km walk from Moulay Idriss to Volubilis through olive groves and farmland is one of the most pleasant short hikes in Morocco. The path follows the road but the traffic is minimal, and the landscape — ancient olive trees, grazing sheep, wildflowers in spring, and the Roman ruins gradually appearing on the hillside ahead — creates a sense of walking through centuries. The approach to Volubilis on foot, seeing the Arch of Caracalla and temple columns slowly emerge above the fields, is how travelers experienced the site for thousands of years. It is far more rewarding than driving.',
    insiderTip:
      'Start early morning (7:30 AM) to arrive at Volubilis when it opens and before the heat. Wear comfortable shoes and bring water. The route is gently downhill from Moulay Idriss to Volubilis. For the return, walk back uphill or take a petit taxi from the Volubilis car park (from 20 MAD). The walk is on or alongside the road — there is no separate trail, but traffic is light. Spring (March-May) is the most beautiful time with wildflowers carpeting the fields.',
  },
  {
    name: 'Zerhoun Mountain Hiking',
    icon: Mountain,
    category: 'Nature & Hiking',
    price: 'Free',
    duration: '3-5 hours',
    bestTime: 'Spring or autumn',
    description:
      'Jebel Zerhoun (1,118 meters) rises directly behind Moulay Idriss, and hiking its slopes offers panoramic views over the Saiss plain, Volubilis, and on clear days, the Middle Atlas mountains. The mountain is covered with olive groves, fig trees, and Mediterranean scrub, with wildflowers in spring. Several trails lead from the town up to the ridgeline, where ancient rock-cut tombs and the remains of Berber settlements dot the hillside. The hiking is moderate — steep in places but short distances. The views from the summit area encompass one of Morocco most historically significant landscapes, spanning from Roman Volubilis to Islamic Moulay Idriss to the distant Atlas mountains.',
    insiderTip:
      'Ask at your guesthouse for trail recommendations — Dar Zerhoune and Scorpion House can arrange guided hikes (from 200 MAD). The most popular route follows the ridge east from Moulay Idriss. Bring plenty of water, sun protection, and sturdy shoes. The trails are not marked but are well-known locally. Spring is the best season for wildflowers and comfortable temperatures. Start early to avoid midday heat.',
  },
];

/* ===============================================================
   DATA: FOOD, OLIVE OIL & LOCAL LIFE
   =============================================================== */

const localExperiences = [
  {
    name: 'Olive Oil Production & Tasting',
    icon: Leaf,
    category: 'Agricultural Heritage',
    price: 'Free / From 50 MAD (guided visit)',
    duration: '1-2 hours',
    bestTime: 'November-January (harvest season)',
    description:
      'The Zerhoun region is one of Morocco premier olive-growing areas, and olive oil production has been the economic backbone of Moulay Idriss for millennia — Volubilis was a major olive oil processing center for the Roman Empire. Today, small family-run olive presses (maasras) in and around Moulay Idriss continue producing oil using methods that have changed surprisingly little over 2,000 years. During the olive harvest (November-January), the entire town revolves around the pressing. Families bring their olives to communal presses, and the rich, green oil is a source of tremendous local pride. Several guesthouses arrange visits to working presses where you can taste fresh oil and learn about the production process.',
    insiderTip:
      'If visiting during olive harvest season (November-January), ask your guesthouse to arrange a press visit — the experience of tasting freshly pressed oil, still warm and intensely green, is extraordinary. Outside harvest season, guesthouses serve local olive oil with bread at every meal — try dipping fresh bread in olive oil with local herbs for breakfast. You can buy bottles of local olive oil (from 60 MAD per liter) from shops on the main square.',
  },
  {
    name: 'Local Cuisine & Guesthouse Dining',
    icon: UtensilsCrossed,
    category: 'Dining',
    price: 'From 30 MAD (cafe) / From 80 MAD (guesthouse dinner)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Moulay Idriss does not have a wide restaurant scene — this is part of its charm. The best meals are served at the guesthouses, where hosts prepare home-cooked Moroccan cuisine using local ingredients: tagines with Zerhoun olives and preserved lemons, couscous with seasonal vegetables from the surrounding farms, thick harira soup, and fresh-baked bread with local olive oil and honey. The town few cafes and simple restaurants around the main square serve honest, basic food — grilled meat, bean soup, fresh salads — at remarkably low prices. The cuisine is rustic, seasonal, and deeply rooted in the land.',
    insiderTip:
      'Book dinner at your guesthouse in advance — the home-cooked meals at Dar Zerhoune and Scorpion House are destination dining experiences (from 100-150 MAD for a multi-course meal). For a budget lunch, the cafes on the main square serve tagine or brochettes with bread and tea (from 30-50 MAD). Try the local nougat (nougatine) sold by street vendors — it is a Moulay Idriss specialty made with almonds and honey (from 10 MAD per piece). The Thursday souk has excellent fresh produce.',
  },
  {
    name: 'Annual Moussem Festival',
    icon: Users,
    category: 'Religious Festival',
    price: 'Free (to observe)',
    duration: 'Multi-day (August-September)',
    bestTime: 'Check dates annually',
    description:
      'The annual moussem (pilgrimage festival) of Moulay Idriss is one of Morocco most significant religious celebrations, drawing pilgrims from across the country to honor the founder of the first Moroccan dynasty. Held over several days typically in August or September (dates follow the Islamic calendar), the festival features Quran recitations at the mausoleum, Sufi dhikr ceremonies, traditional fantasia (horseback displays with synchronized gunfire), music performances, food markets, and a carnival atmosphere in the streets. The town population swells dramatically, with families camping in the surrounding fields. It is an extraordinary cultural spectacle — intense, devout, and joyful.',
    insiderTip:
      'Non-Muslims can freely observe the processions, fantasia, and street celebrations but should not attempt to enter the mausoleum or religious ceremonies. Accommodation books out well in advance — reserve weeks or months ahead. The fantasia is usually held on the plains below the town and is a thrilling spectacle. Respect the religious nature of the event — dress conservatively, avoid alcohol in public, and ask before photographing people. The energy and devotion are deeply moving even for secular visitors.',
  },
  {
    name: 'Sunset from Guesthouse Terraces',
    icon: Sun,
    category: 'Scenic Experience',
    price: 'Free (for guests) / From 30 MAD (mint tea at cafe)',
    duration: '1 hour',
    bestTime: 'Sunset',
    description:
      'The rooftop terraces of Moulay Idriss guesthouses offer some of the most spectacular sunset viewpoints in all of Morocco. As the sun drops behind the western hills, the whitewashed houses turn golden, the green-tiled mausoleum roof glows, and the Zerhoun mountain behind takes on deep purple shadows. The valley below fills with a warm amber light, and the call to prayer from the town mosques creates a soundtrack of extraordinary beauty. This is a moment of profound peace — the kind of experience that travelers remember long after the details of more famous sites have faded.',
    insiderTip:
      'Dar Zerhoune and Scorpion House have the most celebrated terraces. Even if not staying there, both occasionally welcome non-guests for mint tea (from 30 MAD) — ask politely. The main square cafes also offer sunset views but from a lower vantage point. Arrive 30 minutes before sunset to settle in. The combination of fading light, the muezzin call, and the view over this ancient spiritual town creates an experience that is uniquely Moulay Idriss.',
  },
];

/* ===============================================================
   DATA: PRACTICAL INFO
   =============================================================== */

const practicalInfo = [
  { tip: 'Getting There', icon: Compass, description: 'Grand taxi from Meknes: from 15 MAD shared (30 minutes) from the Institut Agronomique station. From Fes: grand taxi to Meknes (from 25 MAD) then change to Moulay Idriss taxi. Some travelers arrive via Volubilis. Private transport from Fes: from 500 MAD. No direct bus from Fes.' },
  { tip: 'Staying Overnight', icon: BedDouble, description: 'Until 2005, non-Muslims could not stay overnight. Now several excellent guesthouses welcome all visitors. Dar Zerhoune (from 600 MAD/night) and Scorpion House (from 500 MAD/night) are highly acclaimed. Budget rooms from 300 MAD/night. Book in advance as capacity is limited.' },
  { tip: 'Getting Around', icon: Footprints, description: 'Moulay Idriss is entirely walkable — the town is small. Streets are steep and sometimes stepped — wear comfortable shoes. For Volubilis, walk (1 hour), take a petit taxi (from 20 MAD), or arrange transport through your guesthouse. No need for a car within town.' },
  { tip: 'Best Time to Visit', icon: Calendar, description: 'Spring (March-May) for wildflowers and pleasant temperatures. Autumn (September-November) for olive harvest atmosphere. The annual moussem (August-September) is extraordinary but crowded. Winter is mild but can be rainy. Summer is hot — visit early morning and late afternoon.' },
  { tip: 'Respect & Etiquette', icon: Heart, description: 'Moulay Idriss is a holy town. Dress conservatively (cover shoulders and knees). Do not attempt to enter the mausoleum or mosque areas restricted to Muslims. Ask permission before photographing people. Alcohol is not sold in town. The atmosphere is spiritual — behave accordingly.' },
  { tip: 'Money & Essentials', icon: ShoppingBag, description: 'There are very few ATMs — bring cash from Meknes or Fes. Most transactions are cash only. The town has basic shops but no supermarkets. Bring any medications or specialty items you need. Wi-Fi is available at guesthouses. Mobile coverage is generally good.' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Stay Overnight', icon: Star, description: 'The single most important tip for Moulay Idriss. Day-trippers miss the town true character. After the last tour group leaves (around 4 PM), Moulay Idriss transforms into a peaceful, deeply atmospheric place. The sunset from a guesthouse terrace and the dawn light on the Zerhoun are unforgettable.' },
  { tip: 'Walk to Volubilis at Dawn', icon: Footprints, description: 'Start walking at first light (6:30-7 AM) through the olive groves to arrive at Volubilis as it opens. You will have the ruins almost entirely to yourself, the morning light on the mosaics is magical, and the walk back uphill to Moulay Idriss for lunch is a perfect morning.' },
  { tip: 'The Thursday Souk', icon: ShoppingBag, description: 'Thursday is market day. Farmers from the Zerhoun region bring fresh produce, olives, cheeses, herbs, and livestock. The souk is small but completely authentic — you will be the only tourist. It is a window into rural Moroccan life that few visitors experience.' },
  { tip: 'Photography Sensitivity', icon: Camera, description: 'Moulay Idriss is a spiritual place. Always ask before photographing people, especially near the mausoleum. Landscapes and architecture are fine. The best photo spots are the Grand Terrace, the view from the approach road, and the guesthouse terraces. Telephoto shots into the mausoleum courtyard are inappropriate.' },
  { tip: 'Learn the History', icon: BookOpen, description: 'Understanding who Moulay Idriss I was and why this town matters transforms the visit. He founded Morocco first Islamic dynasty in 789 AD, uniting Berber tribes and creating the political entity that became Morocco. This town is where the Moroccan nation began. Read about the Idrisid dynasty before visiting.' },
  { tip: 'Combine with Meknes & Fes', icon: Globe, description: 'Moulay Idriss is 30 km from Meknes and 60 km from Fes. The ideal itinerary is: morning at Volubilis, afternoon and overnight in Moulay Idriss, then continue to Meknes or Fes. Alternatively, base yourself in Meknes for a day trip including both Volubilis and Moulay Idriss.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Can non-Muslims visit Moulay Idriss?', answer: 'Yes. Non-Muslims can freely explore the town, dine in restaurants, and stay overnight in guesthouses. The only restriction is the Mausoleum of Moulay Idriss I — non-Muslims cannot enter the mausoleum or zaouia complex, though you can view the exterior and green-tiled roof from nearby viewpoints. The overnight restriction for non-Muslims was lifted around 2005.' },
  { question: 'How do I get from Meknes to Moulay Idriss?', answer: 'Grand taxis from Meknes Institut Agronomique station cost from 15 MAD per person shared (30 minutes). Return taxis depart from the main square in Moulay Idriss. Some visitors combine the trip with Volubilis. Private taxis cost from 150 MAD for the car.' },
  { question: 'Is Moulay Idriss worth visiting?', answer: 'Absolutely. It is one of Morocco most spiritually significant and visually stunning small towns. The hillside setting, panoramic viewpoints, proximity to Volubilis (5 km), emerging guesthouse scene, and the profound sense of being in the birthplace of the Moroccan nation make it one of the country most rewarding off-the-beaten-path destinations.' },
  { question: 'How far is Volubilis from Moulay Idriss?', answer: 'Just 5 km — a 10-minute drive or approximately 1-hour walk through olive groves. Petit taxis cost from 20 MAD. Walking is recommended for the scenic approach through the countryside. The route is gently downhill from Moulay Idriss to Volubilis.' },
  { question: 'What is the moussem of Moulay Idriss?', answer: 'The annual moussem is a major religious pilgrimage festival honoring the founder of the Idrisid dynasty. Held over several days in August or September, it features religious ceremonies, Sufi music, fantasia (horseback displays), food markets, and celebrations. Non-Muslims can observe the public festivities.' },
  { question: 'Where should I stay in Moulay Idriss?', answer: 'Dar Zerhoune and Scorpion House are the most acclaimed guesthouses (from 500-800 MAD/night including breakfast). Both have panoramic terraces and serve excellent home-cooked meals. Budget rooms are available from 300 MAD/night. Capacity is limited — book in advance.' },
  { question: 'How many days do you need in Moulay Idriss?', answer: 'One overnight stay is ideal. Arrive in the afternoon, explore the town and Grand Terrace, watch the sunset, enjoy a guesthouse dinner, walk to Volubilis at dawn the next morning, and depart by early afternoon. A day trip from Meknes or Fes is possible but misses the overnight magic.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/meknes', icon: MapPin, title: 'Meknes City Guide', description: 'The imperial city with Bab Mansour, granaries, and royal stables.' },
  { href: '/fes', icon: MapPin, title: 'Fes City Guide', description: 'The world largest car-free urban area with ancient medina, tanneries, and madrasas.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Tagine, couscous, olive oil, and regional Moroccan cuisines.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes including the Imperial Cities circuit.' },
  { href: '/first-time', icon: Globe, title: 'First Time in Morocco', description: 'Essential tips for first-time visitors to Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoulayIdrissGuidePage() {
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
            <span className="text-white">Moulay Idriss Zerhoun Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moulay Idriss
            <br className="hidden md:block" /> Zerhoun
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco holiest town, perched on twin hills above the Roman ruins of
            Volubilis. Where the Moroccan nation was born and spiritual peace still reigns.
            Your complete 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Birthplace of Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moulay Idriss Zerhoun is where Morocco began. In 789 AD, Idris ibn Abdallah — a
                descendant of the Prophet Muhammad fleeing political persecution in Arabia — arrived
                in the Berber lands near the Roman ruins of Volubilis. The local Awraba Berber tribe
                recognized his lineage and authority, pledged allegiance, and together they founded
                the Idrisid dynasty — the first Islamic dynasty of Morocco. The small town that grew
                around his tomb became the most sacred place in the country, and to this day, five
                pilgrimages to Moulay Idriss are considered the equivalent of one hajj to Mecca.
              </p>
              <p>
                The town cascades dramatically over two green hills — Khiber and Tasga — with the
                mausoleum of Moulay Idriss I nestled in the saddle between them. Whitewashed houses
                climb the steep slopes, their flat roofs creating a cascade of terraces that shimmer
                in the afternoon light. Below, the Zerhoun plain spreads toward the extensive Roman
                ruins of Volubilis, just 5 km away. The juxtaposition is extraordinary: a 2,000-year-old
                Roman city and the birthplace of the Moroccan Islamic nation, separated by a
                45-minute walk through olive groves.
              </p>
              <p>
                Until recently, non-Muslims could not stay overnight in Moulay Idriss. That
                restriction was lifted around 2005, and a handful of beautifully restored guesthouses
                now welcome travelers of all backgrounds. This change has revealed one of Morocco
                greatest hidden treasures — a town of profound spiritual atmosphere, stunning views,
                exceptional home-cooked food, and a pace of life that the modern world has barely
                touched. This guide covers everything you need to plan a visit, from the sacred
                sights and Volubilis excursion to where to stay and what to eat.
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
            Top 10 Things to Do in Moulay Idriss
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences in Morocco holiest and most historically significant small town.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Volubilis Roman Ruins', price: 'From 70 MAD', time: '2-3 hours', category: 'UNESCO' },
              { rank: 2, name: 'Grand Terrace Viewpoint', price: 'Free', time: '30 min - 1 hour', category: 'Views' },
              { rank: 3, name: 'Mausoleum of Moulay Idriss I', price: 'Free (exterior)', time: '30-45 min', category: 'Sacred' },
              { rank: 4, name: 'Walk to Volubilis via Olive Groves', price: 'Free', time: '1 hour one-way', category: 'Walking' },
              { rank: 5, name: 'Sunset from Guesthouse Terrace', price: 'Free / From 30 MAD', time: '1 hour', category: 'Experience' },
              { rank: 6, name: 'Cylindrical Minaret', price: 'Free', time: '15-20 min', category: 'Architecture' },
              { rank: 7, name: 'Olive Oil Tasting', price: 'Free / From 50 MAD', time: '1-2 hours', category: 'Food' },
              { rank: 8, name: 'Zerhoun Mountain Hike', price: 'Free', time: '3-5 hours', category: 'Hiking' },
              { rank: 9, name: 'Medina Streets & Souks', price: 'Free', time: '1-2 hours', category: 'Culture' },
              { rank: 10, name: 'Annual Moussem Festival', price: 'Free', time: 'Multi-day', category: 'Festival' },
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

      {/* -- Sacred & Cultural Sights -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sacred &amp; Cultural Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the most revered mausoleum in Morocco to panoramic viewpoints and
            the country only cylindrical minaret.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Non-Muslims are welcome throughout the town but cannot enter the Mausoleum interior or mosque prayer areas.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {sacredSights.map((item) => {
              const SightIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SightIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Volubilis & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Columns3 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Volubilis &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The UNESCO World Heritage Roman ruins of Volubilis are just 5 km away, and the
            Zerhoun mountains offer rewarding hiking trails.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Walking from Moulay Idriss to Volubilis through olive groves takes about 1 hour and is highly recommended.
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

      {/* -- Food, Olive Oil & Local Life -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Olive Oil &amp; Local Life
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From 2,000-year-old olive oil traditions and home-cooked guesthouse meals to
            one of Morocco most important religious festivals.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The best meals in Moulay Idriss are served at the guesthouses — book dinner in advance.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localExperiences.map((item) => {
              const ExpIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Practical Information -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Practical Information
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need for planning your visit to Morocco holiest town.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {practicalInfo.map((item) => {
              const PracIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PracIcon className="w-5 h-5 text-[var(--color-accent)]" />
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

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Moulay Idriss
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential knowledge to help you experience this sacred town with depth and respect.
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

      {/* -- Sample Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Perfect Overnight Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The ideal way to experience Moulay Idriss — arrive in the afternoon, stay overnight, and walk to Volubilis at dawn.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1 (Afternoon): Arrive &amp; Explore
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive by grand taxi from Meknes (from 15 MAD, 30 minutes). Check into your
                      guesthouse — Dar Zerhoune or Scorpion House (from 500 MAD/night). Drop bags and
                      begin exploring the town. Walk to the Mausoleum of Moulay Idriss I (exterior
                      viewing for non-Muslims). Find the cylindrical minaret in the Tasga quarter.
                      Wander the steep medina streets absorbing the holy atmosphere.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk to the Grand Terrace for sunset views over the town and Zerhoun valley (free).
                      Return to your guesthouse for a home-cooked dinner on the terrace — tagine with
                      local olives, fresh bread with local olive oil, seasonal salads, and mint tea
                      (from 100-150 MAD at guesthouse). Stargaze from the rooftop — with minimal light
                      pollution, the night sky here is extraordinary. Estimated Day 1 cost: from 200-400 MAD
                      (excluding accommodation).
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
                  Day 2 (Morning): Volubilis &amp; Departure
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Early Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Wake early and walk to Volubilis through the olive groves (5 km, 1 hour). Arrive
                      as the site opens (8:30 AM) to explore the Roman ruins in golden morning light with
                      minimal crowds. See the Capitoline Temple, Basilica, Arch of Caracalla, and the
                      stunning mosaic floors (from 70 MAD entry). Hire a local guide for the full story
                      (from 120 MAD). Budget 2-3 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Late Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a petit taxi back to Moulay Idriss (from 20 MAD). Enjoy a final breakfast at
                      your guesthouse with fresh bread, olive oil, local honey, and amlou. Pick up olive
                      oil or nougat from the main square shops. Depart by grand taxi to Meknes (from 15 MAD)
                      or onward to Fes. Estimated Day 2 cost: from 250-400 MAD (excluding accommodation).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Budget Summary (per person)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-700 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Budget guesthouse, cafe meals, walking to Volubilis, grand taxis</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfortable Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 900-1,400 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Quality guesthouse, guesthouse dining, Volubilis guide, olive oil purchases</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">With Guided Hike</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,200-1,800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Best guesthouse, all meals, Volubilis guide, Zerhoun hiking guide</p>
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
            Ready to Visit Moulay Idriss?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the sacred mausoleum and panoramic Grand Terrace to the Roman splendors of Volubilis
            and olive groves on the Zerhoun slopes, Moulay Idriss offers a Morocco experience
            that is profound, peaceful, and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/meknes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Meknes City Guide
            </Link>
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Fes City Guide
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
