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
  Heart,
  Sparkles,
  AlertTriangle,
  Footprints,
  Eye,
  TreesIcon,
  Mountain,
  Coffee,
  Flower2,
  Palette,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Complete Guide to Tafraout 2026 | Painted Rocks, Ameln Valley & Anti-Atlas',
  description:
    'Discover Tafraout, Morocco in 2026. Painted rocks, Ameln Valley, almond blossom season, Napoleon Hat rock, Ait Mansour gorge, Anti-Atlas trekking, argan forests, and Berber culture. Prices in MAD.',
  keywords: [
    'tafraout morocco',
    'tafraout painted rocks',
    'tafraout guide',
    'ameln valley',
    'tafraout almond blossom',
    'anti atlas morocco',
    'tafraout travel guide',
    'napoleon hat tafraout',
    'ait mansour gorge',
    'agard oudad',
    'tafraout things to do',
    'tafraout hiking',
    'tafraout souk',
    'berber villages anti atlas',
    'tafraout 2026',
    'jean verame painted rocks',
  ],
  openGraph: {
    title: 'Complete Guide to Tafraout 2026 | Painted Rocks, Ameln Valley & Anti-Atlas',
    description:
      'Your complete guide to Tafraout: painted rocks, Ameln Valley villages, almond blossoms, Anti-Atlas trekking, Berber architecture, and traditional crafts. Real prices in MAD.',
    url: `${BASE_URL}/tafraout-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Pink granite boulders surrounding Tafraout village in the Anti-Atlas Mountains of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Tafraout 2026 | Morocco',
    description:
      'Painted rocks, Ameln Valley, almond blossoms, Anti-Atlas trekking, Napoleon Hat, argan forests, and Berber culture. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/tafraout-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/tafraout-guide`,
  name: 'Complete Guide to Tafraout 2026 | Painted Rocks, Ameln Valley & Anti-Atlas',
  description:
    'Discover Tafraout, a stunning Anti-Atlas village surrounded by pink granite boulders. Painted rocks, Ameln Valley, almond blossoms, traditional Berber architecture, and trekking.',
  url: `${BASE_URL}/tafraout-guide`,
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
  mainEntityOfPage: `${BASE_URL}/tafraout-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Tafraout',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tafraout Guide', item: `${BASE_URL}/tafraout-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Tafraout known for?', acceptedAnswer: { '@type': 'Answer', text: 'Tafraout is known for its stunning setting among pink granite boulders in the Anti-Atlas Mountains. Key attractions include the painted rocks (giant boulders painted blue and red by Belgian artist Jean Verame in 1984), the Ameln Valley with its traditional Berber villages, Napoleon Hat rock formation, almond blossom season in February, traditional Berber architecture, Ait Mansour gorge, argan forests, and the Wednesday souk. The town is also famous for its babouche (leather slipper) craftsmen.' } },
    { '@type': 'Question', name: 'When is almond blossom season in Tafraout?', acceptedAnswer: { '@type': 'Answer', text: 'Almond blossom season in Tafraout typically runs from late January to mid-March, with the peak usually in February. The exact timing varies each year depending on winter rainfall and temperatures. During this period, the Ameln Valley is transformed by thousands of almond trees bursting into pink and white blossoms against the red and pink granite rocks, creating one of Morocco most photogenic landscapes. An almond blossom festival is sometimes held in February.' } },
    { '@type': 'Question', name: 'How do you get to Tafraout?', acceptedAnswer: { '@type': 'Answer', text: 'Tafraout is approximately 180 km south of Agadir (3-4 hours by car through spectacular mountain passes) and 108 km southeast of Tiznit (2 hours). CTM buses run from Agadir (from 60 MAD) and grand taxis from Tiznit (from 40 MAD per seat). The nearest airport is Agadir Al Massira. The drive from Tiznit through the Anti-Atlas passes is one of Morocco most scenic routes. There is no train service.' } },
    { '@type': 'Question', name: 'What are the painted rocks of Tafraout?', acceptedAnswer: { '@type': 'Answer', text: 'The painted rocks are a land art installation created in 1984 by Belgian artist Jean Verame, who painted enormous granite boulders in bold shades of blue, red, violet, and black near Agard Oudad village, about 3 km south of Tafraout. The project used 18 tonnes of paint and was approved by King Hassan II. The colors have faded significantly over four decades but remain striking against the pink granite landscape. The site is free to visit.' } },
    { '@type': 'Question', name: 'What is the best time to visit Tafraout?', acceptedAnswer: { '@type': 'Answer', text: 'February to April is the ideal time, with almond blossoms (February to March), pleasant temperatures (15-25 degrees), and green landscapes. October to November is also excellent with warm days and cool nights. Summer is hot (above 35 degrees) but the altitude moderates temperatures compared to the lowlands. Winter (December to January) is cool, especially at night, but sunny and quiet with the lowest prices.' } },
    { '@type': 'Question', name: 'Is Tafraout worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Tafraout is one of Morocco most beautiful and least-touristed destinations. The surreal pink granite landscape, traditional Berber villages, painted rocks, and Ameln Valley offer a completely different Morocco experience from the imperial cities. During almond blossom season it is spectacular. The town is also a gateway to excellent Anti-Atlas hiking and authentic Berber culture. Budget two to three nights to explore properly.' } },
  ],
};

/* ===============================================================
   DATA: TOP ATTRACTIONS
   =============================================================== */

const topAttractions = [
  {
    name: 'Painted Rocks (Jean Verame)',
    icon: Palette,
    category: 'Land Art & Landmark',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'In 1984, Belgian artist Jean Verame transformed the granite boulder field near Agard Oudad village into one of the world most extraordinary land art installations. Using 18 tonnes of paint (reportedly a gift from the Moroccan government, with approval from King Hassan II), Verame painted enormous boulders in vivid shades of blue, red, violet, and black. The effect against the natural pink-orange granite was surreal, creating a landscape that seemed to belong to another planet. Four decades on, the colors have faded considerably, weathered by sun, wind, and rain, but the scale of the project remains awe-inspiring. Enormous boulders the size of houses bear traces of cobalt blue and crimson, scattered across a dramatic lunar landscape of granite formations. Walking among the painted rocks with the Anti-Atlas peaks rising all around is one of Morocco most unique experiences, a place where art and geology intersect in genuinely strange and wonderful ways.',
    insiderTip:
      'The painted rocks are approximately 3 km south of Tafraout near Agard Oudad village. You can walk (45 minutes from town) or take a taxi (from 30 MAD). The morning and late afternoon light brings out the remaining colors most vividly. Combine with a visit to Agard Oudad village and Napoleon Hat rock, which are in the same area. Bring water as there is no shade.',
  },
  {
    name: 'Ameln Valley & Villages',
    icon: Eye,
    category: 'Cultural Landscape',
    price: 'Free',
    duration: 'Half day - Full day',
    bestTime: 'Morning',
    description:
      'The Ameln Valley is the soul of the Tafraout region, a long valley running east-west below the imposing Jebel el-Kest massif (2,359 m). Along its length, 26 traditional Berber villages cling to the mountainside, their pink and ochre houses built from the same granite as the surrounding landscape, rising in tiers up the steep slopes. Each village has its own character, its own mosque minaret, its own terraced gardens of almond, walnut, and olive trees irrigated by ancient channels called seguias. The architecture is remarkable, with massive fortified granaries (agadirs) perched above several villages, once used to store grain, documents, and valuables safe from raiders. Walking through the Ameln Valley is like stepping into a medieval world where the rhythms of agriculture, seasons, and community life have changed little in centuries. The kindness and hospitality of the valley residents is legendary.',
    insiderTip:
      'The villages of Oumesnat and Ait Taleb are the most accessible on foot from Tafraout (30-60 minutes walk). Ask locally about visiting a traditional Berber house (a small tip of 20 MAD is appreciated). The valley is most beautiful during almond blossom season (February to March) when the terraces explode with pink and white flowers. For the best photography, morning light illuminates the villages against the mountain backdrop.',
  },
  {
    name: 'Napoleon\'s Hat (Le Chapeau de Napoleon)',
    icon: Mountain,
    category: 'Natural Formation',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon (golden light)',
    description:
      'This iconic rock formation near Agard Oudad village is one of Tafraout most photographed landmarks. A massive granite boulder sits atop a cone-shaped pedestal, its silhouette bearing an uncanny resemblance to Napoleon Bonaparte tricorn hat. The formation is the result of millions of years of differential erosion, where softer rock weathered away while the harder cap rock remained balanced on its narrow perch. Napoleon Hat stands prominently in the boulder field south of Tafraout, surrounded by other fantastically shaped granite formations that spark the imagination. The late afternoon sun turns the pink granite to deep amber and rose, creating a magical light show that photographers cherish. The entire Agard Oudad area is a geological wonderland, with balanced rocks, natural arches, and smooth granite domes sculpted by wind and time into otherworldly forms.',
    insiderTip:
      'Napoleon Hat is about 3 km from Tafraout, in the same area as the painted rocks. Visit both in a single excursion. The formation is best photographed from the southeast in late afternoon light. Climb carefully around the base (the rock is smooth and can be slippery) for different perspectives. The surrounding boulder field is worth exploring for its own dramatic formations.',
  },
  {
    name: 'Almond Blossom Season',
    icon: Flower2,
    category: 'Seasonal Natural Spectacle',
    price: 'Free',
    duration: 'Season: late January - mid-March',
    bestTime: 'February (peak bloom)',
    description:
      'Every year, usually beginning in late January and peaking in February, the Tafraout region undergoes one of Morocco most magical natural transformations. Thousands of almond trees across the Ameln Valley, on terraced hillsides, and throughout the surrounding countryside burst into bloom simultaneously, covering the landscape in clouds of delicate pink and white blossoms. Against the backdrop of pink granite boulders and the rugged Anti-Atlas peaks, the effect is extraordinarily beautiful and utterly unique to this region. The almond trees here are not ornamental plantings but working orchards, tended by Berber families for generations to produce almonds used in amlou (the local specialty of ground almonds, argan oil, and honey), pastries, and cosmetics. The blossom season transforms Tafraout from a quiet mountain village into a celebration, with a festival sometimes organized featuring music, dancing, and almond-based foods. Photographers and nature lovers travel from across Morocco and Europe for this brief but spectacular window.',
    insiderTip:
      'Exact bloom timing varies year to year depending on rainfall and temperature. Mid-February is usually the safest bet for peak bloom. The Ameln Valley villages offer the most concentrated blossoms. Book accommodation well in advance during blossom season as the town small hotel supply fills quickly. Try amlou (ground almonds with argan oil and honey, from 40 MAD per jar) fresh from local producers during your visit.',
  },
  {
    name: 'Agard Oudad Village',
    icon: Landmark,
    category: 'Traditional Berber Village',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'Agard Oudad is a quintessential Anti-Atlas Berber village perched among enormous pink granite boulders about 3 km south of Tafraout. The village seems to grow organically from the rock itself, with houses built from and between the boulders, their pink stone walls blending seamlessly with the natural formations. This is traditional Amazigh (Berber) architecture at its most harmonious, where human habitation and geology become indistinguishable. The village retains its traditional character with narrow pathways winding between houses, communal bread ovens, and the sound of goat bells drifting from nearby hillsides. Agard Oudad is also the gateway to the painted rocks and Napoleon Hat, making it a natural focal point for any Tafraout visit. The village cooperative sometimes sells locally made crafts including woven rugs, leather goods, and argan oil products.',
    insiderTip:
      'Be respectful when walking through the village, as this is a living community, not a museum. Ask permission before photographing residents. The path through the village to the painted rocks is well-worn and easy to follow. Look for the cooperative shop for quality local crafts at fair prices. The village cafe serves excellent mint tea with views of the boulder landscape.',
  },
  {
    name: 'Ait Mansour Gorge',
    icon: Mountain,
    category: 'Gorge & Oasis',
    price: 'Free',
    duration: 'Half day',
    bestTime: 'Morning',
    description:
      'The Ait Mansour gorge is one of the Anti-Atlas most spectacular natural features, a deep canyon carved through red and pink rock with a ribbon of green palm oasis along its floor. Located approximately 30 km south of Tafraout, the gorge can be approached by car or on foot, with the road winding down from the plateau into an ever-narrowing valley until towering cliff walls rise hundreds of meters on either side. The bottom of the gorge harbors date palms, almond trees, small irrigated gardens, and the occasional Berber settlement, creating a startling contrast between the lush green valley floor and the stark, sun-baked rock walls above. The drive through the gorge is an adventure in itself, with the road sometimes reduced to a single track between massive boulders and cliff faces. In spring, a stream runs through the gorge bottom, attracting birdlife and creating small pools. The isolation and dramatic scale of Ait Mansour gorge make it feel like a discovery, a hidden world tucked between folds of ancient rock.',
    insiderTip:
      'A 4x4 or sturdy vehicle is recommended, especially after rain when the road can be rough. The gorge is most impressive from mid-morning when sunlight penetrates the canyon. Bring a picnic and find a shaded spot under the palms. The road is circular, entering from one end and exiting the other, so you do not need to backtrack. Allow 3-4 hours for the full loop including stops.',
  },
];

/* ===============================================================
   DATA: HIKING & OUTDOOR
   =============================================================== */

const hikingOutdoor = [
  {
    name: 'Anti-Atlas Trekking',
    icon: Footprints,
    category: 'Multi-Day Trekking',
    difficulty: 'Moderate to Challenging',
    price: 'From 400 MAD/day (with guide)',
    description:
      'The Anti-Atlas Mountains around Tafraout offer some of Morocco finest trekking, through a landscape unlike anywhere else in the country. Routes wind through granite boulder fields, palm-filled gorges, traditional Berber villages, and arid mountain passes with vast views over the Saharan fringe. The terrain is generally drier and rockier than the High Atlas, with less altitude (peaks to 2,359 m on Jebel el-Kest) but equally dramatic scenery. Popular multi-day treks include the Ameln Valley circuit (2-3 days), the Jebel el-Kest traverse (3-4 days), and routes south to the oasis villages of the Ait Mansour gorge. Village-to-village trekking is possible, staying in simple guesthouses (gites) and experiencing traditional Berber hospitality along the way. The trails are quieter than High Atlas routes, and the sense of isolation and wildness is profound.',
    insiderTip:
      'Hire a local guide through your hotel or the Bureau des Guides in Tafraout (from 400 MAD per day). Guides know the trails, can arrange village stays, and bridge the language gap. The best trekking season is October to April; summer is too hot. Bring sun protection, a hat, and at least 2 liters of water per person per half day. Nights can be cold at altitude even when days are warm.',
  },
  {
    name: 'Argan Forest Walks',
    icon: TreesIcon,
    category: 'Nature Walk',
    difficulty: 'Easy to Moderate',
    price: 'Free',
    description:
      'The Anti-Atlas is one of the last strongholds of the argan tree (Argania spinosa), a UNESCO-protected species endemic to southern Morocco. These gnarled, thorny trees with their spreading canopies dot the hillsides around Tafraout and are a vital part of the local economy and ecology. Argan oil, pressed from the tree kernels, is used in cooking, cosmetics, and traditional medicine, and has become Morocco most famous export product. Walking through the argan forests, you may encounter goats climbing in the tree branches to eat the fruit, a sight that has become iconic of southern Morocco. Local women cooperatives process argan oil using traditional stone mills, and visits to these cooperatives offer insight into the painstaking production process. The forests are particularly beautiful in spring when the undergrowth is green and wildflowers bloom beneath the twisted argan trunks.',
    insiderTip:
      'Visit a women argan cooperative near Tafraout to see traditional oil production and buy directly (from 150 MAD per liter for cosmetic oil, from 80 MAD for culinary oil). The cooperatives offer fair prices and your purchase supports local women. The argan forests between Tafraout and Tiznit are the densest. Do not try to make goats climb trees for photos, as this practice can harm the animals.',
  },
];

/* ===============================================================
   DATA: FOOD & DRINK
   =============================================================== */

const foodDrink = [
  {
    name: 'Amlou (Almond & Argan Paste)',
    icon: UtensilsCrossed,
    category: 'Regional Specialty',
    price: 'From 40 MAD/jar',
    description:
      'Amlou is Tafraout signature dish and one of Morocco most delicious regional specialties. This rich, thick paste combines ground roasted almonds, locally pressed argan oil, and honey into an addictive spread that is served at breakfast with fresh bread and mint tea. The quality in Tafraout is exceptional because both the almonds and argan oil are produced locally from trees growing in the surrounding hills. Each family has its own recipe, with variations in the ratio of almonds to oil to honey, and some adding a touch of cinnamon or orange blossom water. Amlou is also sold as a gift item in jars, making it the perfect edible souvenir.',
    insiderTip:
      'Buy amlou from village women or cooperatives rather than tourist shops for the freshest product and best prices (from 40 MAD for a medium jar). The almond variety grown around Tafraout produces a particularly flavorful amlou. Try it on warm msemen bread for the quintessential Tafraout breakfast.',
  },
  {
    name: 'Berber Mountain Cuisine',
    icon: UtensilsCrossed,
    category: 'Traditional Cooking',
    price: 'From 35 MAD',
    description:
      'Tafraout cuisine reflects its Berber mountain heritage with simple, hearty dishes built around local ingredients. Tagines of goat or lamb with almonds and prunes are a regional specialty, slow-cooked over charcoal until the meat falls from the bone. Couscous with seven vegetables is the Friday staple, served in enormous communal platters. Tafraout is also known for its stone-ground wheat bread baked in communal ovens, its fresh goat cheese, and seasonal dishes that follow the agricultural calendar. During almond harvest, almond-based pastries and sweets appear in every cafe and home. Local restaurants in town serve honest, flavorful food at prices that seem almost impossibly low to visitors from Marrakech or Agadir.',
    insiderTip:
      'The small restaurants around the central square serve the most authentic food. Try tafarnout (a local flatbread cooked on hot stones, from 10 MAD). For the best tagine, look for restaurants with a few tables where locals eat, not the ones with English menus. A full meal with tagine, bread, and tea rarely exceeds from 50 MAD.',
  },
  {
    name: 'Cafe & Tea Culture',
    icon: Coffee,
    category: 'Cafes & Refreshments',
    price: 'From 5 MAD',
    description:
      'Tafraout cafe culture revolves around its central square, where terraced cafes offer views of the surrounding pink granite peaks. Mint tea (from 5 MAD) flows freely, and the pace of life slows to a gentle rhythm of conversation, people-watching, and mountain gazing. The cafes are male-dominated spaces during the day, but the atmosphere is relaxed and visitors of all genders are welcome. In addition to tea, cafes serve excellent Moroccan coffee (nous-nous, from 8 MAD), fresh-squeezed orange juice when available (from 5 MAD), and simple snacks. The evening promenade through the town center, with families strolling and children playing, is a lovely way to end each day in Tafraout.',
    insiderTip:
      'The cafes on the east side of the central square catch the morning sun and offer the best mountain views. Join the locals for the evening promenade and find a terrace seat for sunset over the granite peaks. Ask for berrad dyali (my teapot), ordering a personal pot of mint tea, for the most authentic experience.',
  },
];

/* ===============================================================
   DATA: SHOPPING & CRAFTS
   =============================================================== */

const shoppingCrafts = [
  {
    name: 'Wednesday Souk',
    icon: ShoppingBag,
    category: 'Weekly Market',
    price: 'Free entry (shopping from 10 MAD)',
    description:
      'Tafraout Wednesday souk is the region main market day, when Berber families descend from surrounding mountain villages to trade, shop, and socialize. The market fills a large open area on the edge of town with produce from the Anti-Atlas: almonds, argan nuts, olives, seasonal fruits and vegetables, honey, dried herbs, and spices. The livestock section buzzes with the trading of goats and sheep. Household goods, clothing, tools, and traditional crafts round out the offering. This is a thoroughly authentic market experience with virtually no tourist-oriented stalls, meaning genuine products at local prices.',
    insiderTip:
      'Arrive by 9 AM for the liveliest atmosphere. The almond and argan sections are the most interesting. Bring small bills as change can be scarce. The best deals on argan oil are from village women who press it at home (from 60 MAD per liter for culinary oil). The souk winds down by early afternoon.',
  },
  {
    name: 'Babouche Leather Craft',
    icon: Sparkles,
    category: 'Traditional Craft',
    price: 'From 80 MAD',
    description:
      'Tafraout has a long tradition of babouche (Moroccan leather slipper) craftsmanship, and the Tafraout babouche is considered one of the finest in Morocco. Local artisans cut, stitch, and decorate these iconic slippers by hand using locally tanned leather, producing babouches that are softer, more durable, and more elegantly finished than mass-produced versions found in Marrakech tourist souks. Traditional designs feature pointed toes for men and rounded toes for women, in colors ranging from classic golden yellow to deep red, green, and blue. Several small workshops in town allow visitors to watch the crafting process and buy directly from the maker.',
    insiderTip:
      'Buy babouches directly from craftsmen in Tafraout for the best quality and prices (from 80 MAD for basic pairs, from 150 MAD for decorated leather). Ask your hotel to recommend a reputable artisan. The quality difference between Tafraout babouches and Marrakech tourist market ones is immediately apparent in the leather softness and stitching precision.',
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
      'Tafraout is 180 km south of Agadir (3-4 hours by car through Tiznit and the Col du Kerdous pass) and 108 km from Tiznit (2 hours). CTM buses run from Agadir (from 60 MAD). Grand taxis from Tiznit cost from 40 MAD per seat. The nearest airport is Agadir Al Massira. The drive from Tiznit is one of Morocco most scenic routes, climbing through the Anti-Atlas with panoramic views at every turn. There is no train service.',
  },
  {
    icon: MapPin,
    title: 'Getting Around',
    content:
      'Tafraout town is small and walkable in 15 minutes. To reach the painted rocks, Napoleon Hat, and Agard Oudad, walk (45 minutes) or take a taxi (from 30 MAD). Exploring the Ameln Valley, Ait Mansour gorge, and surrounding villages requires a car or hired 4x4 with driver (from 600 MAD/day). Bicycles can be rented at some hotels (from 100 MAD/day) and are excellent for the Ameln Valley.',
  },
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    content:
      'February to April is peak season: almond blossoms, pleasant weather (15-25 degrees), and green landscapes. October to November is also excellent for trekking with warm days and cool nights. Summer is hot (above 35 degrees) but bearable in the shade. Winter is cool, especially at night (can drop to 5 degrees), but sunny and peaceful. Almond blossom peaks in February.',
  },
  {
    icon: AlertTriangle,
    title: 'Safety & Tips',
    content:
      'Tafraout is exceptionally safe and welcoming. French and Tachelhit (local Amazigh language) are spoken; English is very limited. ATMs are available in town but can run out of cash on market days, so bring extra. Bring warm clothing for evenings as mountain nights are cool. Mobile coverage is limited outside town. Respect local customs in this conservative, traditional community.',
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What is Tafraout known for?',
    answer:
      'Tafraout is known for its stunning setting among pink granite boulders in the Anti-Atlas Mountains. Key attractions include the painted rocks (Jean Verame, 1984), the Ameln Valley with its Berber villages, Napoleon Hat rock formation, almond blossom season (February), traditional Berber architecture, Ait Mansour gorge, argan forests, and handcrafted babouche leather slippers.',
  },
  {
    question: 'When is almond blossom season in Tafraout?',
    answer:
      'Almond blossom season typically runs from late January to mid-March, with the peak usually in February. The exact timing varies each year depending on winter rainfall and temperatures. The Ameln Valley is transformed by thousands of almond trees bursting into pink and white blossoms.',
  },
  {
    question: 'How do you get to Tafraout?',
    answer:
      'Tafraout is 180 km south of Agadir (3-4 hours by car) and 108 km from Tiznit (2 hours). CTM buses run from Agadir (from 60 MAD). Grand taxis from Tiznit cost from 40 MAD per seat. The nearest airport is Agadir Al Massira. There is no train service.',
  },
  {
    question: 'What are the painted rocks of Tafraout?',
    answer:
      'The painted rocks are a land art installation created in 1984 by Belgian artist Jean Verame, who painted enormous granite boulders in blue, red, violet, and black near Agard Oudad village. The colors have faded over four decades but remain striking. The site is free to visit.',
  },
  {
    question: 'What is the best time to visit Tafraout?',
    answer:
      'February to April is ideal with almond blossoms, pleasant temperatures, and green landscapes. October to November is also excellent for trekking. Summer is hot but bearable. Winter is cool, especially at night, but sunny and quiet.',
  },
  {
    question: 'Is Tafraout worth visiting?',
    answer:
      'Absolutely. Tafraout is one of Morocco most beautiful and least-touristed destinations. The surreal pink granite landscape, traditional Berber villages, painted rocks, and Ameln Valley offer a completely different Morocco experience. During almond blossom season it is spectacular. Budget two to three nights.',
  },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/tiznit-guide', icon: MapPin, title: 'Tiznit Guide', description: 'Silver jewelry capital and gateway to Tafraout and the Anti-Atlas mountains.' },
  { href: '/morocco-atlas-guide', icon: Mountain, title: 'Atlas Mountains Guide', description: 'Trekking, valleys, and Berber villages across the High, Middle, and Anti-Atlas.' },
  { href: '/agadir', icon: Sun, title: 'Agadir City Guide', description: 'Beach resort capital and gateway to the Souss Valley and Anti-Atlas.' },
  { href: '/argan-oil', icon: TreesIcon, title: 'Argan Oil Guide', description: 'Everything about Morocco liquid gold: cooperatives, uses, and where to buy.' },
  { href: '/berber-culture', icon: Heart, title: 'Berber Culture Guide', description: 'Amazigh heritage, traditions, festivals, and village life across Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TafraouttGuidePage() {
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
            <span className="text-white">Tafraout Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Complete Village Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Tafraout
            <br className="hidden md:block" /> Village Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A stunning Anti-Atlas village surrounded by pink granite boulders, where painted rocks
            glow in the desert sun, almond trees bloom against ancient mountains, and traditional
            Berber life endures. Your 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Tafraout: Morocco&apos;s Pink Granite Wonderland
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tafraout occupies one of the most extraordinary settings in all of Morocco. This small
                Amazigh (Berber) town of around 7,000 people sits in a high valley of the Anti-Atlas
                Mountains, completely encircled by enormous boulders of pink granite that glow like
                embers in the light of sunrise and sunset. The boulders are not merely scenic, they
                are surreal: balanced on impossibly narrow pedestals, stacked in gravity-defying towers,
                and sculpted by millions of years of erosion into shapes that suggest animals, faces,
                and fortresses. And then there are the ones that a Belgian artist painted electric blue.
              </p>
              <p>
                Tafraout is the heartland of the Ammeln tribe, one of the great Berber confederations
                of the Anti-Atlas. The Ammeln are renowned across Morocco as successful shopkeepers,
                with family-run grocery stores (known as &quot;Tafraout shops&quot;) found in virtually
                every Moroccan city. The wealth generated by this diaspora flows back to the homeland,
                visible in the well-maintained houses of the Ameln Valley villages and the town&apos;s
                surprisingly modern infrastructure. Yet Tafraout remains deeply traditional, with
                communal agricultural practices, seasonal festivals, and a way of life rooted in the
                rhythms of almond harvest, olive pressing, and goat herding that stretches back
                generations.
              </p>
              <p>
                This guide covers everything worth seeing and doing in and around Tafraout: the
                painted rocks and Napoleon&apos;s Hat, the Ameln Valley villages, almond blossom season,
                the Ait Mansour gorge, Anti-Atlas trekking, argan forests, the Wednesday souk, and
                the famous babouche leather craft. Each listing includes real 2026 prices in MAD,
                practical logistics, and tips from travelers who have fallen in love with this
                extraordinary corner of Morocco.
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
            Top 10 Tafraout Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The best reasons to make the journey to this remote Anti-Atlas gem.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Painted Rocks (Jean Verame)', price: 'Free', time: '1-2 hours', category: 'Land Art' },
              { rank: 2, name: 'Ameln Valley Villages', price: 'Free', time: 'Half day', category: 'Culture' },
              { rank: 3, name: 'Almond Blossom Season', price: 'Free', time: 'February', category: 'Nature' },
              { rank: 4, name: 'Napoleon Hat Rock', price: 'Free', time: '30 min - 1 hour', category: 'Geology' },
              { rank: 5, name: 'Ait Mansour Gorge', price: 'Free', time: 'Half day', category: 'Adventure' },
              { rank: 6, name: 'Anti-Atlas Trekking', price: 'From 400 MAD/day', time: '1-4 days', category: 'Trekking' },
              { rank: 7, name: 'Wednesday Souk', price: 'Free', time: '2-3 hours', category: 'Market' },
              { rank: 8, name: 'Agard Oudad Village', price: 'Free', time: '1-2 hours', category: 'Heritage' },
              { rank: 9, name: 'Argan Forest & Cooperatives', price: 'Free', time: '2-3 hours', category: 'Nature' },
              { rank: 10, name: 'Babouche Leather Craft', price: 'From 80 MAD', time: '1 hour', category: 'Craft' },
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
            From surreal painted boulders to ancient Berber villages and seasonal almond blossoms,
            Tafraout surprises with its diversity.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most attractions around Tafraout are free. Bring water and sun protection.
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

      {/* -- Hiking & Outdoor -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hiking &amp; Outdoor
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Anti-Atlas mountains offer magnificent trekking through one of Morocco most untouched landscapes.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {hikingOutdoor.map((hike) => {
              const HikeIcon = hike.icon;
              return (
                <div key={hike.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HikeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {hike.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {hike.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Mountain className="w-3.5 h-3.5" />
                          {hike.difficulty}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {hike.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {hike.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {hike.insiderTip}
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
            Amlou, mountain tagines, and cafe culture among the pink granite peaks.
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

      {/* -- Shopping & Crafts -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Crafts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Wednesday souk and traditional babouche leather craft define Tafraout artisanal heritage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {shoppingCrafts.map((item) => {
              const ShopIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShopIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
      <section className="py-16 md:py-20">
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Suggested 3-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to experience the best of Tafraout and its surroundings.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Painted Rocks, Napoleon Hat &amp; Agard Oudad
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      After breakfast with amlou and msemen (from 20 MAD at your guesthouse), walk or
                      taxi south to Agard Oudad village (3 km). Explore the traditional Berber
                      architecture and browse the village cooperative for crafts and argan oil. Continue
                      to the painted rocks and spend an hour wandering among Jean Verame giant canvases.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit Napoleon Hat rock formation nearby. Return to Tafraout for lunch at a
                      local restaurant (tagine from 35 MAD). Explore the town center, browse shops
                      for babouche slippers (from 80 MAD), and relax with mint tea on a cafe terrace
                      overlooking the granite peaks (from 5 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Watch the sunset transform the granite boulders from pink to deep amber from a
                      cafe terrace. Dinner at a local restaurant (from 40 MAD). Evening stroll through
                      the quiet streets. Estimated Day 1 cost: from 150-300 MAD.
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
                  Day 2: Ameln Valley &amp; Village Walks
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Set out early for the Ameln Valley. Walk to Oumesnat village (30 minutes from
                      Tafraout) and explore its traditional houses, mosque, and ancient granary. Continue
                      along the valley trail to Ait Taleb, passing through almond orchards and terraced
                      gardens. If visiting in February, the almond blossoms are at their peak along this route.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit an argan oil cooperative to see traditional pressing and taste fresh oil
                      (free, purchases from 80 MAD per liter). Return to Tafraout for a late lunch.
                      If it is Wednesday, explore the weekly souk for local produce, almonds, and crafts.
                      Rest and recharge with fresh juice (from 5 MAD) before the evening.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset from the eastern edge of town with views down the Ameln Valley. Dinner
                      featuring local specialties: goat tagine with almonds, tafarnout bread, and
                      amlou for dessert (from 50 MAD total). Estimated Day 2 cost: from 150-350 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 3: Ait Mansour Gorge or Tiznit Day Trip
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option A: Ait Mansour Gorge</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hire a car or 4x4 with driver (from 600 MAD/day) for the Ait Mansour gorge
                      circuit (30 km south). Drive through the dramatic canyon with its palm oases,
                      Berber settlements, and towering cliff walls. Stop for a picnic lunch among the
                      palms. Return via a different road for a complete loop. Allow 4-5 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option B: Tiznit Day Trip</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a grand taxi to Tiznit (from 40 MAD, 2 hours) and explore this walled city
                      famous for its silver jewelry souks. Browse silver workshops, visit the Great
                      Mosque and its distinctive minaret, and walk the city walls. Return to Tafraout
                      by afternoon. Day cost: from 150-300 MAD including transport and lunch.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 400-700 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Walking, street food, free attractions, public transport</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 800-1,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Taxis, restaurant meals, gorge excursion, craft shopping</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,800-3,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private car/guide, guided treks, restaurant dining, argan oil purchases</p>
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
            Ready to Explore Tafraout?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From surreal painted boulders and ancient Berber villages to almond-blossom valleys
            and Anti-Atlas gorges, Tafraout is Morocco at its most authentic and untouched.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tiznit-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Tiznit Guide
            </Link>
            <Link
              href="/morocco-atlas-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains
            </Link>
            <Link
              href="/berber-culture"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Heart className="w-5 h-5" />
              Berber Culture
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
