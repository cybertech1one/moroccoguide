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
  Wind,
  Eye,
  Waves,
  TreesIcon,
  Mountain,
  MoonStar,
  Film,
  Clapperboard,
  Sunrise,
  Car,
  Thermometer,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Top 15+ Things to Do in Ouarzazate 2026 | Complete Guide',
  description:
    'Discover the best things to do in Ouarzazate in 2026. Atlas Studios, Ait Benhaddou, Taourirt Kasbah, Draa Valley, Skoura palmery, Dades Gorge, Todra Gorge, desert excursions, and more. Prices in MAD and insider tips.',
  keywords: [
    'things to do in Ouarzazate',
    'Ouarzazate attractions',
    'Atlas Studios',
    'Ait Benhaddou',
    'Ouarzazate Morocco guide',
    'Ouarzazate day trips',
    'what to do in Ouarzazate',
    'Ouarzazate activities',
    'Ouarzazate sightseeing',
    'Taourirt Kasbah',
    'Draa Valley',
    'Skoura palmery',
    'Dades Gorge',
    'Todra Gorge',
    'Fint Oasis',
    'CLA Studios Ouarzazate',
    'cinema museum Ouarzazate',
    'Tizi n Tichka pass',
    'Ouarzazate desert tours',
    'Ouarzazate 2026',
    'Ouarzazate travel guide',
  ],
  openGraph: {
    title: 'Top 15+ Things to Do in Ouarzazate 2026 | Complete Guide',
    description:
      'The complete guide to Ouarzazate activities and experiences. Atlas Studios, Ait Benhaddou, Taourirt Kasbah, Draa Valley, gorges, desert trips, and film locations with prices in MAD.',
    url: `${BASE_URL}/things-to-do-ouarzazate`,
    images: [
      {
        url: `${BASE_URL}/images/hero-ouarzazate.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Ouarzazate with Taourirt Kasbah and the Atlas Mountains in the background under clear Saharan skies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 15+ Things to Do in Ouarzazate 2026',
    description:
      'Atlas Studios, Ait Benhaddou, Taourirt Kasbah, Draa Valley, Skoura, Dades Gorge, Todra Gorge, desert excursions, and film locations. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-ouarzazate.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-ouarzazate` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-ouarzazate`,
  name: 'Top 15+ Things to Do in Ouarzazate 2026 | Complete Guide',
  description:
    'Discover the best things to do in Ouarzazate in 2026. From Atlas Studios and the UNESCO-listed Ait Benhaddou to dramatic gorges, hidden oases, and Sahara desert excursions.',
  url: `${BASE_URL}/things-to-do-ouarzazate`,
  image: `${BASE_URL}/images/hero-ouarzazate.webp`,
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
  mainEntityOfPage: `${BASE_URL}/things-to-do-ouarzazate`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Ouarzazate',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ouarzazate', item: `${BASE_URL}/ouarzazate` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-ouarzazate` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the top things to do in Ouarzazate?', acceptedAnswer: { '@type': 'Answer', text: 'The top things to do include visiting Atlas Studios (from 60 MAD), Ait Benhaddou UNESCO kasbah (from 10 MAD), Taourirt Kasbah (from 20 MAD), Fint Oasis (free), the Cinema Museum (from 30 MAD), CLA Studios, Skoura palmery and Amerhidil Kasbah, Dades Gorge, Todra Gorge, Draa Valley, Lake El Mansour Eddahbi, the Tizi n Tichka mountain pass, and Sahara desert excursions.' } },
    { '@type': 'Question', name: 'How many days do you need in Ouarzazate?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal. Day 1: Atlas Studios, Taourirt Kasbah, Cinema Museum, Fint Oasis. Day 2: Ait Benhaddou day trip and Skoura palmery. Day 3: Dades and Todra gorges or a desert excursion. One day covers the town itself, but the best attractions are day trips that require additional time.' } },
    { '@type': 'Question', name: 'Is Ouarzazate worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Ouarzazate is the gateway to southern Morocco and the Sahara, surrounded by extraordinary landscapes including ancient kasbahs, dramatic gorges, lush oases, and vast desert. The film studios where Gladiator, Game of Thrones, and Lawrence of Arabia were filmed are unique attractions. It serves as the perfect base for exploring the Draa Valley, Rose Valley, and organizing desert trips to the Sahara dunes.' } },
    { '@type': 'Question', name: 'How do I get from Marrakech to Ouarzazate?', acceptedAnswer: { '@type': 'Answer', text: 'The drive from Marrakech takes about 4-5 hours via the spectacular Tizi n Tichka pass (N9 road), crossing the High Atlas Mountains at 2,260 meters. CTM and Supratours buses run daily (from 80 MAD, 4-5 hours). Grand taxis are also available. There is a small airport with limited domestic flights. The mountain drive itself is one of Morocco most scenic routes.' } },
    { '@type': 'Question', name: 'What films were shot in Ouarzazate?', acceptedAnswer: { '@type': 'Answer', text: 'Ouarzazate has hosted hundreds of major film and TV productions. Notable titles include Gladiator (2000), Lawrence of Arabia (1962), Game of Thrones (HBO), The Mummy (1999), Kingdom of Heaven (2005), Babel (2006), Prince of Persia (2010), Ben-Hur (2016), and parts of the Bible TV series. Atlas Studios and CLA Studios remain active production facilities. Ait Benhaddou has appeared in dozens of films.' } },
    { '@type': 'Question', name: 'What is the best time to visit Ouarzazate?', acceptedAnswer: { '@type': 'Answer', text: 'March to May and September to November offer the best weather (20-30 degrees). Summer (June-August) is extremely hot (40+ degrees) making outdoor sightseeing uncomfortable, especially at the gorges and desert. Winter (December-February) is mild during the day (15-20 degrees) but cold at night. The Rose Festival in the nearby Dades Valley (May) is a cultural highlight.' } },
  ],
};

/* ===============================================================
   DATA: FILM & CINEMA ATTRACTIONS
   =============================================================== */

const filmAttractions = [
  {
    name: 'Atlas Studios',
    icon: Film,
    category: 'Film Studio & Museum',
    price: 'From 60 MAD',
    duration: '1.5-2 hours',
    bestTime: 'Morning',
    description:
      'Atlas Studios is the largest film studio in the world by acreage — a sprawling complex on the western outskirts of Ouarzazate where some of cinema most iconic scenes were filmed. Established in 1983, the studios have hosted productions including Gladiator (the Roman Senate set still stands), Kingdom of Heaven, The Mummy, Asterix and Obelix: Mission Cleopatra, Kundun, and parts of Game of Thrones. The guided tour takes you through vast outdoor sets — crumbling Egyptian temples, Roman amphitheaters, Tibetan monasteries, and medieval castles — all built from local materials against the dramatic backdrop of the Atlas Mountains. It is a surreal experience walking through the remnants of Hollywood blockbusters in the Moroccan desert.',
    insiderTip:
      'Take the guided tour (included in the entry fee) rather than wandering alone — the guides share excellent behind-the-scenes stories about the productions. The Gladiator set and the Egyptian temple are the highlights. Morning light is best for photography. The studio remains an active production facility, so some areas may be closed during filming. The on-site gift shop sells film memorabilia. Budget 1.5-2 hours.',
  },
  {
    name: 'CLA Studios (Cinema & Light Atlas)',
    icon: Clapperboard,
    category: 'Film Studio',
    price: 'From 50 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Morning or afternoon',
    description:
      'The second major studio complex in Ouarzazate, CLA Studios has hosted numerous international productions and offers a more intimate tour experience than Atlas Studios. Founded in 2004, the facility includes indoor soundstages and outdoor sets. Productions filmed here include parts of the Bible TV series, Sahara, and various international advertisements. The outdoor sets include ancient Egyptian, Tibetan, and Middle Eastern reconstructions. CLA is smaller than Atlas Studios but often less crowded, and the guides are more willing to let you explore and photograph at your own pace.',
    insiderTip:
      'CLA Studios is located on the road toward Ait Benhaddou, so combine it with a trip to the UNESCO kasbah. The studio is often less crowded than Atlas Studios, making it better for photography without other tourists in your shots. If you can only visit one studio, choose Atlas Studios for the scale and Gladiator sets. But film enthusiasts will enjoy both. Ask if any productions are currently shooting — you might glimpse active filmmaking.',
  },
  {
    name: 'Cinema Museum (Musee du Cinema)',
    icon: Film,
    category: 'Museum',
    price: 'From 30 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Midday (escape the heat)',
    description:
      'Located in the center of Ouarzazate near the Taourirt Kasbah, this small but fascinating museum celebrates the city century-long relationship with cinema. The collection includes original props, costumes, cameras, and behind-the-scenes photographs from major productions shot in the region. Displays cover the history of filmmaking in Ouarzazate from the earliest silent films through to modern blockbusters. A screening room shows clips from famous movies filmed in the area. For anyone interested in how this desert town became the Hollywood of Africa, the museum provides essential context.',
    insiderTip:
      'The museum is small enough to visit in under an hour and makes a good midday activity when the heat discourages outdoor exploration. The costume and prop displays are surprisingly detailed — you can see items from Gladiator, The Mummy, and Game of Thrones up close. The museum is walking distance from the Taourirt Kasbah, so combine both. Photography is permitted throughout.',
  },
];

/* ===============================================================
   DATA: KASBAHS & HERITAGE
   =============================================================== */

const kasbahHeritage = [
  {
    name: 'Ait Benhaddou (UNESCO)',
    icon: Landmark,
    category: 'UNESCO World Heritage',
    price: 'From 10 MAD (village) / Guide from 150 MAD',
    duration: '2-3 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Ait Benhaddou is the most spectacular ksar (fortified village) in Morocco and a UNESCO World Heritage Site since 1987. Rising dramatically from the banks of the Ounila River, 30 km northwest of Ouarzazate, this ancient fortified city of packed-earth and clay buildings cascades up a hillside crowned by a granary at its summit. The ksar has been continuously inhabited for centuries and still houses a small community. Its extraordinary visual appeal has made it one of the most filmed locations in the world — it has appeared in Gladiator, Game of Thrones (as Yunkai and Pentos), Lawrence of Arabia, The Mummy, Kingdom of Heaven, and dozens more. The walk to the top of the ksar rewards with panoramic views over the river valley and the distant Atlas Mountains.',
    insiderTip:
      'Visit in the morning or late afternoon for the best light — the warm amber glow on the earthen walls at golden hour is extraordinary. Cross the shallow river on stepping stones (or the new footbridge downstream) to reach the ksar entrance. The climb to the top takes 20-30 minutes and is steep — wear comfortable shoes. A local guide (from 150 MAD) enriches the visit enormously. Several families living in the ksar sell handicrafts and offer tea. The modern village across the river has good restaurants with terrace views of the ksar.',
  },
  {
    name: 'Taourirt Kasbah',
    icon: Landmark,
    category: 'Historic Fortress',
    price: 'From 20 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Standing in the center of Ouarzazate, the Taourirt Kasbah is a magnificent example of southern Moroccan clay architecture. Once the residence of the powerful Glaoui family — the feudal lords who controlled trade across the High Atlas passes — the kasbah is a labyrinth of rooms, corridors, towers, and courtyards built from rammed earth (pise). The complex once housed hundreds of people including the Glaoui family, their servants, and an entire community. The restored sections feature beautiful painted ceilings, carved stucco, and windows that frame views over the surrounding palmery and mountains. The exterior, with its crenellated towers and geometric patterns pressed into the mud walls, is iconic of the region.',
    insiderTip:
      'The kasbah is right in town, making it an easy first stop. The partially restored interior shows the contrast between the grand reception rooms and the simpler living quarters. Climb to the rooftop terraces for excellent views over Ouarzazate and the surrounding desert landscape. The light in the interior corridors creates beautiful photographic compositions. The adjacent artisan quarter sells local crafts including pottery, textiles, and silver jewelry.',
  },
  {
    name: 'Fint Oasis',
    icon: TreesIcon,
    category: 'Hidden Oasis',
    price: 'Free (transport from 150 MAD return)',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'Just 15 km south of Ouarzazate, the Fint Oasis is a hidden paradise that most tourists never discover. A lush palm grove nestled in a narrow valley between barren red and ochre hills, the contrast between the vivid green palms and the stark desert landscape is breathtaking. A small Berber village sits within the oasis, and the inhabitants maintain traditional irrigation channels (khettaras) that have sustained agriculture here for centuries. Walking through the palm groves, crossing small streams, and gazing up at the sculptural rock formations is an experience of genuine tranquility. The oasis has appeared in several films, including the 2005 TV production of The Ten Commandments.',
    insiderTip:
      'The road to Fint Oasis is unpaved for the last few kilometers — a 4x4 or sturdy car is recommended, though many regular cars manage carefully. Alternatively, hire a grand taxi from Ouarzazate (from 150 MAD return with waiting time). The oasis is small and can be explored in 1-2 hours. Bring water and snacks. A few families in the village offer tea and simple meals. Early morning is ideal for photography when the light pours into the valley. This is a genuine hidden gem.',
  },
  {
    name: 'Skoura Palmery & Kasbah Amerhidil',
    icon: Landmark,
    category: 'Palmery & Heritage',
    price: 'From 20 MAD (Kasbah entry)',
    duration: '3-4 hours',
    bestTime: 'Morning',
    description:
      'The Skoura palmery, 42 km east of Ouarzazate, is one of the most beautiful and extensive palm groves in Morocco. This vast oasis — fed by ancient irrigation channels from the Atlas Mountains — contains over 700,000 date palms sheltering orchards of almonds, olives, figs, and pomegranates. Dotted throughout the palmery are dozens of historic kasbahs, the finest being Kasbah Amerhidil, a spectacular 17th-century fortified palace that once appeared on the 50 MAD banknote. The kasbah interior features painted ceilings, traditional furnishings, and a museum of Berber cultural artifacts. Walking or cycling through the palmery on the shaded paths between towering palms is a magical experience.',
    insiderTip:
      'Rent a bicycle in Skoura village (from 50 MAD per day) to explore the palmery at your own pace — the shaded paths are flat and easy to ride. Kasbah Amerhidil is the must-see kasbah but several others are also visitable. Some luxury lodges in the palmery (like Dar Ahlam) offer garden tours even to non-guests. The palmery is stunning in autumn when the dates are being harvested. Combine with a stop at Kelaat M Gouna (Rose Valley) if driving east toward the gorges.',
  },
];

/* ===============================================================
   DATA: GORGES & NATURE
   =============================================================== */

const gorgesNature = [
  {
    name: 'Dades Gorge (Gorges du Dades)',
    icon: Mountain,
    category: 'Natural Wonder',
    price: 'Free (transport costs vary)',
    duration: 'Half to full day',
    bestTime: 'Morning',
    description:
      'The Dades Gorge, about 110 km east of Ouarzazate, is one of Morocco most spectacular natural formations. The Dades River has carved a deep, winding canyon through layers of red, orange, and pink limestone, creating dramatic cliff walls that tower hundreds of meters above the road. The most famous section — the "Road of a Thousand Kasbahs" — features extraordinary rock formations including the "monkey fingers" (strange tubular rock pillars) and a series of hairpin bends that corkscrew up the gorge walls. Small Berber villages cling to the cliff edges, and kasbahs dot the valley floor among almond and walnut orchards.',
    insiderTip:
      'The hairpin road section (about 25 km into the gorge) is spectacular but not for nervous drivers — consider hiring a local driver. The best viewpoints are from the hotels and auberges perched on the gorge rim — many welcome non-guests for lunch with views (from 80 MAD). Spring (March-April) when the almond trees bloom is extraordinarily beautiful. The gorge can be cold even when Ouarzazate is warm — bring a jacket. Combine with Todra Gorge for a full day loop.',
  },
  {
    name: 'Todra Gorge (Gorges du Todra)',
    icon: Mountain,
    category: 'Natural Wonder',
    price: 'Free',
    duration: 'Half to full day',
    bestTime: 'Late morning (when sunlight enters the gorge)',
    description:
      'Todra Gorge is the most dramatic canyon in Morocco — a narrow fault in the eastern High Atlas where 300-meter-high vertical limestone cliffs rise on either side of the Todra River, leaving a passage just 10 meters wide at the narrowest point. The scale is awe-inspiring. Located about 180 km east of Ouarzazate near the town of Tinghir, the gorge is a world-class rock climbing destination and a breathtaking sight for any visitor. The crystal-clear river runs through the gorge floor (drying to a trickle in summer), and small cafes and hotels line the base of the cliffs. Walking through the narrowest section, with the cliffs towering above and a strip of blue sky visible far overhead, is an unforgettable experience.',
    insiderTip:
      'The gorge is most dramatic when the sun reaches the floor — between 10 AM and 2 PM depending on the season. Morning mist sometimes fills the canyon, creating ethereal photography conditions. The walk from the parking area through the narrowest section takes about 30 minutes. Rock climbers come from around the world — watching them scale the vertical walls is mesmerizing. Hotels at the gorge entrance offer simple rooms (from 200 MAD) if you want to experience sunrise in the canyon.',
  },
  {
    name: 'Lake El Mansour Eddahbi',
    icon: Waves,
    category: 'Lake & Recreation',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon',
    description:
      'This large reservoir on the eastern edge of Ouarzazate was created by the El Mansour Eddahbi Dam on the Draa River, built in 1972 to provide irrigation for the Draa Valley below. When full, the lake is a striking sight — a vast expanse of deep blue water set against the arid ochre and red landscape of the pre-Saharan south. The contrast is surreal. The lake shores provide opportunities for peaceful walks, birdwatching (flamingos and waders visit seasonally), and enjoying sunset views with the Atlas Mountains reflected in the water. Several viewpoints along the road to Skoura offer panoramic perspectives.',
    insiderTip:
      'The lake level varies dramatically by season and year — it can be full and spectacular or reduced to a fraction of its size during drought. Check recent conditions before making it a priority. The sunset views from the eastern shore road are beautiful when the water level is adequate. Birdwatchers visit in spring and autumn for migratory species. The dam itself is visible from the road and gives a sense of the engineering scale.',
  },
  {
    name: 'Draa Valley',
    icon: TreesIcon,
    category: 'Valley & Oasis',
    price: 'Free (transport costs vary)',
    duration: 'Full day',
    bestTime: 'Any season',
    description:
      'The Draa Valley stretches over 200 km south from Ouarzazate toward the Sahara, following Morocco longest river through one of the most beautiful landscapes in North Africa. The valley is a ribbon of green — date palms, henna gardens, and Berber villages — threading between barren mountains and endless hamada (stony desert). The route passes through the town of Agdz, the kasbahs of Tamnougalt and Tissergate, and the oasis town of Zagora, famous for its sign reading "Timbuktu 52 Days" (by camel). The valley is the gateway to the Sahara and a classic Moroccan road trip route.',
    insiderTip:
      'The N9 road through the Draa Valley from Ouarzazate to Zagora (160 km, about 3 hours drive) is one of Morocco most scenic routes. Stop at the viewpoint above Agdz for a panoramic view of the valley stretching south. Tamnougalt kasbah is beautifully restored and offers guided tours (from 20 MAD). Zagora is the jumping-off point for desert excursions to the Sahara dunes of Erg Chigaga. The valley is beautiful in any season but especially atmospheric in spring when the palm groves are lush.',
  },
];

/* ===============================================================
   DATA: DESERT & ADVENTURE
   =============================================================== */

const desertAdventure = [
  {
    name: 'Sahara Desert Excursion',
    icon: Sunrise,
    category: 'Desert Adventure',
    price: 'From 800 MAD (1 night) to from 2,500 MAD (2 nights)',
    duration: '1-3 days',
    bestTime: 'October to April',
    description:
      'Ouarzazate is one of the two main gateways to the Moroccan Sahara (along with Errachidia). From here, organized excursions head south to the spectacular sand dunes of Erg Chigaga (via Zagora, about 5-6 hours) or southeast to the dunes of Merzouga/Erg Chebbi (via the gorges route, about 6-7 hours). The classic experience includes a camel ride to a desert camp, dinner under the stars, traditional Berber music around a campfire, and sunrise over the dunes. Options range from basic bivouac camps to luxury desert glamping with private tents, hot showers, and gourmet meals. The silence and starscape of the Sahara at night are among the most profound experiences Morocco offers.',
    insiderTip:
      'Erg Chigaga (from Ouarzazate via Zagora) offers bigger, more remote dunes with fewer tourists. Erg Chebbi (Merzouga) is more developed with more camp options. Book through your accommodation in Ouarzazate — hotels and riads work with trusted operators. A 2-night trip allows time to enjoy the desert rather than rushing. Avoid summer (June-August) when desert temperatures exceed 45 degrees. Bring layers — desert nights can be cold (5-10 degrees in winter). Full-moon nights are magical but obscure the stars.',
  },
  {
    name: 'Tizi n\'Tichka Mountain Pass',
    icon: Mountain,
    category: 'Scenic Drive',
    price: 'Free (self-drive) / From 500 MAD (private transfer)',
    duration: '3-4 hours (one way)',
    bestTime: 'Any season (check for winter snow)',
    description:
      'The Tizi n\'Tichka pass is the highest major mountain pass in North Africa at 2,260 meters, carrying the N9 road across the High Atlas between Marrakech and Ouarzazate. The drive is one of Morocco most spectacular journeys — climbing from the green foothills above Marrakech through Berber villages, terraced hillsides, and cedar forests, before cresting the pass and descending into the dramatic arid landscape of southern Morocco. The transition from lush north to desert south happens within a few kilometers at the summit. En route, the Telouet Kasbah (the former stronghold of the Glaoui warlords) makes an excellent detour.',
    insiderTip:
      'If driving yourself, allow 4-5 hours and start early. The road is well-maintained but winding with many switchbacks. Stop at the summit viewpoint for photographs. The detour to Telouet Kasbah (from 20 MAD entry) is about 6 km off the main road and well worth it — the interior tilework and painted ceilings are extraordinary despite the kasbah state of ruin. In winter (December-February), the pass can be closed by snow — check conditions before traveling. Fill your fuel tank in Marrakech or Ouarzazate.',
  },
  {
    name: 'Quad Biking & Desert Activities',
    icon: Wind,
    category: 'Adventure Sports',
    price: 'From 400 MAD (2-hour quad tour)',
    duration: '2-4 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The desert landscape surrounding Ouarzazate offers excellent terrain for adventure activities. Quad biking through the rocky desert and dried river beds is the most popular option, with operators offering guided tours ranging from 2 hours to full days. Routes pass through dramatic desert scenery, Berber villages, and along seasonal rivers. Other available activities include camel rides near the kasbahs (from 200 MAD per hour), sandboarding at nearby dune fields, mountain biking on desert trails, and 4x4 excursions to remote kasbahs and oases. The flat desert terrain and reliable sunshine make conditions ideal year-round except during the extreme heat of midsummer.',
    insiderTip:
      'Book quad and desert activities through your hotel or riad — they work with reliable operators and can negotiate better rates. Morning tours are cooler and have better light. Wear closed shoes, sunglasses, and a scarf to cover nose and mouth against dust. The desert behind the Atlas Studios is a popular quad route with excellent scenery. For camel rides, the area around Fint Oasis is more scenic than the roadside tourist offerings.',
  },
];

/* ===============================================================
   DATA: FOOD & PRACTICAL
   =============================================================== */

const foodPractical = [
  {
    name: 'Ouarzazate Restaurant Scene',
    icon: UtensilsCrossed,
    category: 'Dining',
    price: 'From 40 MAD (casual) to from 200 MAD (fine dining)',
    duration: '1-2 hours',
    bestTime: 'Lunch or dinner',
    description:
      'Ouarzazate dining scene reflects its position as a gateway town between the Atlas and the Sahara. Restaurants cluster along Avenue Mohammed V (the main boulevard) and around the central roundabout. The cuisine features southern Moroccan specialties including slow-cooked tagines with dates and almonds, mechoui (whole roasted lamb), trid (layered bread with chicken), and hearty harira soup. Many restaurants also serve international fare for the film crews and tourists. The town fresh juice stands are excellent, and the local dates and almonds — from the surrounding oases — are among the finest in Morocco.',
    insiderTip:
      'Restaurant Douyria and Chez Dimitri (one of Morocco oldest restaurants, opened 1928) are local institutions. For budget eating, the small restaurants near the central market serve enormous tagines from 40 MAD. The kasbah-style restaurants opposite Taourirt Kasbah offer good food with rooftop views. Try the local almond-stuffed dates (from 30 MAD per box) — they make excellent gifts. Many hotel restaurants are open to non-guests and serve fixed-price menus (from 100 MAD).',
  },
  {
    name: 'Souk & Shopping',
    icon: ShoppingBag,
    category: 'Shopping',
    price: 'Free to browse',
    duration: '1-1.5 hours',
    bestTime: 'Morning',
    description:
      'Ouarzazate is not primarily a shopping destination, but the artisan quarter near the Taourirt Kasbah and the municipal market offer authentic southern Moroccan crafts. Specialties include Berber silver jewelry (distinctive geometric designs from the Draa and Dades valleys), hand-woven carpets and kilims with the bold patterns of the south, pottery, leather goods, and rose products from the nearby Dades Valley. The Ensemble Artisanal (cooperative) near the center has fixed-price items and demonstrates traditional crafts including carpet weaving, stone carving, and metalwork.',
    insiderTip:
      'The Ensemble Artisanal is the best place for hassle-free, fixed-price shopping — watch craftspeople at work and buy directly. For negotiable-price shopping, the shops near Taourirt Kasbah have wider selections. Berber silver jewelry is the most distinctive purchase — each piece reflects tribal designs specific to this region. Rose water and rose cosmetics from the Dades Valley (from 30 MAD) make lightweight, fragrant souvenirs. Bargaining is expected in the medina shops but not at cooperatives.',
  },
  {
    name: 'Ouarzazate Evening & Stargazing',
    icon: MoonStar,
    category: 'Evening Experience',
    price: 'Free (independent) / From 200 MAD (organized)',
    duration: '2-3 hours',
    bestTime: 'After dark',
    description:
      'Ouarzazate sits at 1,160 meters altitude in one of the driest regions of Morocco, making it one of the best stargazing locations in the country. The Saharan sky, free from significant light pollution, reveals the Milky Way in stunning detail. Several hotels and tour operators offer organized stargazing sessions with telescopes and astronomical guides. Even without equipment, simply stepping outside the town and looking up provides a celestial display that city dwellers rarely experience. The town evening scene is low-key — cafes along Avenue Mohammed V, rooftop terraces with sunset views, and quiet strolls through the warm desert air.',
    insiderTip:
      'The best stargazing is during new moon phases — check the lunar calendar before your trip. Walk 1-2 km outside town for the darkest skies. Some luxury desert lodges (like Dar Ahlam near Skoura) offer astronomical telescopes and guides. The sunset from the rooftop terraces of restaurants near Taourirt Kasbah is beautiful — the mountains turn pink and purple. Evenings are surprisingly cool — bring a layer. The local cafe culture is friendly and welcoming.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Free Iconic Views', icon: Camera, description: 'Ait Benhaddou exterior views, Fint Oasis, Lake El Mansour Eddahbi, the Draa Valley, and all gorge viewpoints are free. The most dramatic scenery in southern Morocco costs nothing.', savings: 'Free — the best scenery' },
  { tip: 'Shared Transport to Day Trips', icon: Car, description: 'Grand taxis to Ait Benhaddou cost from 30 MAD per person shared vs. from 200 MAD for a private taxi. Ask your hotel to organize shared transport with other guests.', savings: 'Save from 170 MAD per trip' },
  { tip: 'Budget Tagines Over Tourist Restaurants', icon: UtensilsCrossed, description: 'Small local restaurants near the market serve huge tagines from 40 MAD. Tourist restaurants opposite the kasbah charge from 80-120 MAD for smaller portions.', savings: 'Save from 40-80 MAD per meal' },
  { tip: 'Skip One Studio', icon: Film, description: 'Atlas Studios and CLA Studios offer similar experiences. If budget is tight, choose Atlas Studios (from 60 MAD) for the Gladiator sets and skip CLA (from 50 MAD). Save from 50 MAD.', savings: 'Save from 50 MAD per person' },
  { tip: 'Bus Instead of Private Transfer', icon: Compass, description: 'CTM bus from Marrakech to Ouarzazate costs from 80 MAD. Private transfers charge from 500-1,000 MAD. The bus crosses the same spectacular Tizi n Tichka pass.', savings: 'Save from 420-920 MAD per person' },
  { tip: 'Negotiate Desert Packages', icon: Star, description: 'Desert excursion prices are highly negotiable, especially in low season. Compare prices from multiple operators. A 2-day trip can range from 800-2,500 MAD per person depending on luxury level.', savings: 'Save from 200-500 MAD by comparing' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Ouarzazate Is a Base, Not a Destination', icon: Compass, description: 'The best things to do are day trips from Ouarzazate — Ait Benhaddou, Skoura, Dades Gorge, Todra Gorge, Draa Valley, and the desert. Plan your time accordingly and choose a well-located hotel as your base.' },
  { tip: 'Heat Management Is Essential', icon: Thermometer, description: 'Southern Morocco is significantly hotter than the north. Plan outdoor activities for early morning or late afternoon. Midday (12-3 PM) is best spent in air-conditioned spaces, museums, or shaded cafes. Carry water always.' },
  { tip: 'Best Photography Light', icon: Camera, description: 'Ait Benhaddou glows amber at sunrise and sunset. The gorges are best when sunlight enters the narrow passages (late morning). Desert dunes are most photogenic at sunrise. Taourirt Kasbah is best in soft morning light.' },
  { tip: 'Hire a Local Driver for Day Trips', icon: Car, description: 'A local driver for a full day costs from 600-800 MAD and covers petrol. This is far cheaper than organized tours and gives you flexibility. Hotels can arrange reliable drivers. Specify your itinerary in advance.' },
  { tip: 'Altitude Matters', icon: Mountain, description: 'Ouarzazate sits at 1,160m, the gorges higher still. Nights can be cold year-round (5-15 degrees even in spring). The desert is colder at night than most expect. Pack layers regardless of season.' },
  { tip: 'Film Location Awareness', icon: Film, description: 'Many kasbahs and landscapes charge nothing yet were used in famous films. Ait Benhaddou (Gladiator, Game of Thrones), the Dades Road of Kasbahs, and the Draa Valley have all featured in major productions. Knowing the film connections adds a layer to every view.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the top things to do in Ouarzazate?', answer: 'The top things to do include Atlas Studios (from 60 MAD), Ait Benhaddou UNESCO kasbah (from 10 MAD), Taourirt Kasbah (from 20 MAD), Fint Oasis (free), Cinema Museum (from 30 MAD), CLA Studios (from 50 MAD), Skoura palmery and Kasbah Amerhidil (from 20 MAD), Dades Gorge (free), Todra Gorge (free), Draa Valley (free), Lake El Mansour Eddahbi (free), Sahara desert excursions (from 800 MAD), and the Tizi n Tichka mountain pass (free).' },
  { question: 'How many days do you need in Ouarzazate?', answer: 'Two to three days is ideal. Day 1: Atlas Studios, Taourirt Kasbah, Cinema Museum, Fint Oasis. Day 2: Ait Benhaddou and Skoura palmery. Day 3: Dades and Todra gorges or Draa Valley and desert excursion. One day covers the town, but the best experiences are day trips. A week allows exploration of all the surrounding attractions including a desert overnight.' },
  { question: 'How do I get from Marrakech to Ouarzazate?', answer: 'The drive takes 4-5 hours via the Tizi n Tichka pass (2,260m). CTM and Supratours buses run daily from 80 MAD. Grand taxis are available from 100 MAD per person shared. Private transfers cost from 500-1,000 MAD. Ouarzazate has a small airport with limited domestic flights. The mountain drive is one of Morocco most scenic routes.' },
  { question: 'What films were shot in Ouarzazate?', answer: 'Major productions include Gladiator, Lawrence of Arabia, Game of Thrones, The Mummy, Kingdom of Heaven, Babel, Prince of Persia, Ben-Hur, Asterix and Obelix, and parts of the Bible TV series. Atlas Studios and CLA Studios remain active. Ait Benhaddou alone has appeared in dozens of films and TV shows.' },
  { question: 'What is the best time to visit Ouarzazate?', answer: 'March to May and September to November (20-30 degrees). Summer is extremely hot (40+ degrees). Winter is mild by day (15-20 degrees) but cold at night. The Rose Festival in the nearby Dades Valley in May is a cultural highlight. For desert excursions, October to March is ideal.' },
  { question: 'Is Ouarzazate worth visiting?', answer: 'Absolutely. It is the gateway to southern Morocco with extraordinary surrounding attractions: Ait Benhaddou, the world largest film studios, dramatic gorges, hidden oases, ancient kasbahs, and the Sahara desert. The landscapes are among the most diverse and dramatic in Morocco. Plan at least 2-3 days to explore the region.' },
  { question: 'Can I visit Ait Benhaddou from Ouarzazate?', answer: 'Yes, Ait Benhaddou is just 30 km (30 minutes) northwest of Ouarzazate. Grand taxis cost from 30 MAD per person shared or from 200 MAD for the car. Many hotels arrange day trips. The village entry is from 10 MAD. Allow 2-3 hours for a thorough visit including the climb to the top. Combine with CLA Studios on the same road.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/ouarzazate', icon: MapPin, title: 'Ouarzazate City Guide', description: 'Complete guide to Ouarzazate: accommodation, transport, and planning your base camp.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, including the iconic Tizi n Tichka pass.' },
  { href: '/desert-tours', icon: Sunrise, title: 'Desert Tours Guide', description: 'Everything you need to know about Sahara desert excursions from camel rides to luxury camps.' },
  { href: '/atlas-mountains', icon: Mountain, title: 'Atlas Mountains Guide', description: 'Trekking, villages, and mountain passes in the High Atlas, Middle Atlas, and Anti-Atlas.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to southern specialties with dates and almonds.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function ThingsToDoOuarzazatePage() {
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
            backgroundImage: 'url(/images/hero-ouarzazate.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/ouarzazate" className="hover:text-white transition-colors">
              Ouarzazate
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Film className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top Things to Do
            <br className="hidden md:block" /> in Ouarzazate
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the world&apos;s largest film studios and a UNESCO kasbah to dramatic gorges, hidden oases, and the Sahara.
            Your complete 2026 guide to the Hollywood of Africa, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Ouarzazate: Gateway to the Sahara
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ouarzazate sits at the crossroads of everything that makes southern Morocco extraordinary.
                Behind you, the High Atlas Mountains rise like a wall separating the green north from the
                desert south. Ahead, the land opens into a vast canvas of ochre plains, palm-filled valleys,
                dramatic gorges, ancient kasbahs, and ultimately the endless sands of the Sahara. This
                small city at 1,160 meters elevation has earned its nickname — the Hollywood of Africa — by
                hosting hundreds of major film productions, from Lawrence of Arabia in 1962 to Game of
                Thrones and Gladiator. The largest film studios in the world are here, and the surrounding
                landscapes have doubled for ancient Egypt, Tibet, Rome, and countless fictional worlds.
              </p>
              <p>
                But cinema is only the beginning. Within day-trip distance lie Ait Benhaddou, the most
                spectacular fortified village in Morocco and a UNESCO World Heritage Site; the dramatic
                canyons of the Dades and Todra gorges; the vast Skoura palmery with its centuries-old
                kasbahs; the lush Draa Valley stretching toward the Sahara; and hidden oases like Fint,
                where green palms erupt from barren rock. Ouarzazate itself offers the imposing Taourirt
                Kasbah, engaging film museums, and some of the clearest night skies in the country.
              </p>
              <p>
                This guide covers 15+ of the best things to do in and around Ouarzazate, organized by
                category: film and cinema, kasbahs and heritage, gorges and nature, desert adventures,
                and food and practical information. Each includes real 2026 prices in MAD, logistics,
                and insider tips.
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
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Ouarzazate and its surroundings.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Ait Benhaddou (UNESCO)', price: 'From 10 MAD', time: '2-3 hours', category: 'UNESCO Heritage' },
              { rank: 2, name: 'Atlas Studios', price: 'From 60 MAD', time: '1.5-2 hours', category: 'Film Studio' },
              { rank: 3, name: 'Todra Gorge', price: 'Free', time: 'Half day', category: 'Natural Wonder' },
              { rank: 4, name: 'Dades Gorge', price: 'Free', time: 'Half day', category: 'Natural Wonder' },
              { rank: 5, name: 'Sahara Desert Excursion', price: 'From 800 MAD', time: '1-3 days', category: 'Desert Adventure' },
              { rank: 6, name: 'Taourirt Kasbah', price: 'From 20 MAD', time: '45 min - 1 hour', category: 'Historic Fortress' },
              { rank: 7, name: 'Skoura Palmery & Amerhidil Kasbah', price: 'From 20 MAD', time: '3-4 hours', category: 'Palmery' },
              { rank: 8, name: 'Fint Oasis', price: 'Free', time: '2-3 hours', category: 'Hidden Oasis' },
              { rank: 9, name: 'Draa Valley to Zagora', price: 'Free', time: 'Full day', category: 'Valley & Oasis' },
              { rank: 10, name: 'Tizi n\'Tichka Pass', price: 'Free', time: '3-4 hours', category: 'Scenic Drive' },
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

      {/* -- Film & Cinema -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Film className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Film &amp; Cinema
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ouarzazate has hosted hundreds of major film productions since the 1960s.
            Walk through the sets of Gladiator, Game of Thrones, and The Mummy.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Studios may close areas during active film productions.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {filmAttractions.map((attraction) => {
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

      {/* -- Kasbahs & Heritage -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kasbahs &amp; Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ancient fortified villages and kasbahs dot the landscape around Ouarzazate, from the
            UNESCO-listed Ait Benhaddou to hidden oases and vast palmeries.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Ait Benhaddou is 30 km from Ouarzazate. Skoura is 42 km east. Both are easy day trips.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {kasbahHeritage.map((item) => {
              const KasIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <KasIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Gorges & Nature -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gorges &amp; Nature
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Dramatic canyons, vast valleys, and serene lakes make the Ouarzazate region
            one of Morocco most diverse and spectacular natural areas.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The gorges are 110-180 km from Ouarzazate. A hired driver or rental car is recommended.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {gorgesNature.map((item) => {
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

      {/* -- Desert & Adventure -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert &amp; Adventure
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Sahara overnight excursions and spectacular mountain passes to quad
            biking and camel rides through the desert landscape.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Desert temperatures vary wildly — from 45+ degrees in summer days to 5 degrees on winter nights.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {desertAdventure.map((item) => {
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

      {/* -- Food & Practical -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Shopping &amp; Evening
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Southern Moroccan cuisine with dates and almonds, Berber crafts,
            and some of the clearest night skies in the country.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Avenue Mohammed V is the main dining and shopping strip. Hotels often welcome non-guests for meals.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodPractical.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Budget Tips for Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to stretch your budget further in southern Morocco.
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
            Insider Tips for Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that makes the difference between a good trip and an unforgettable one.
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
            Sample 3-Day Ouarzazate Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical day-by-day plan covering the essential experiences. Adjust based on your interests and pace.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Studios, Kasbah &amp; Oasis
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit Atlas Studios (from 60 MAD, 1.5-2 hours) — walk through the Gladiator,
                      Egyptian, and medieval sets. Continue to the Taourirt Kasbah (from 20 MAD, 45
                      minutes) in the city center. Explore the restored rooms and climb to the rooftop
                      for panoramic views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a restaurant near Taourirt Kasbah (from 50 MAD). Visit the Cinema Museum
                      (from 30 MAD, 45 minutes). Afternoon excursion to Fint Oasis (from 150 MAD taxi
                      return, 2 hours). Walk through the palm groves and enjoy tea with a local family.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset views from a rooftop restaurant (free with dinner). Dinner on Avenue Mohammed V
                      (from 60 MAD). Stargazing from outside the town or your hotel terrace. Estimated
                      Day 1 cost: from 350-600 MAD.
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
                  Day 2: Ait Benhaddou &amp; Skoura Palmery
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Early departure to Ait Benhaddou (30 km, 30 minutes). Cross the river and explore
                      the UNESCO ksar (from 10 MAD, 2-3 hours). Climb to the summit for panoramic views.
                      Optionally stop at CLA Studios on the same road (from 50 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a restaurant opposite Ait Benhaddou with terrace views (from 60 MAD).
                      Drive east to the Skoura palmery (42 km). Visit Kasbah Amerhidil (from 20 MAD).
                      Walk or cycle through the palm groves. Stop at Lake El Mansour Eddahbi on the
                      return for sunset views.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to Ouarzazate. Dinner at a local restaurant (from 50 MAD). Shopping for
                      crafts and souvenirs near Taourirt Kasbah. Estimated Day 2 cost: from 400-800 MAD
                      (including transport).
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
                  Day 3: Gorges or Desert Excursion
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option A: Dades &amp; Todra Gorges</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Full day driving the "Road of a Thousand Kasbahs" east through the Dades Gorge
                      (110 km) with its hairpin bends and monkey fingers rock formations. Continue to
                      Todra Gorge (180 km) for the 300-meter vertical cliffs. Lunch in the gorge (from
                      60 MAD). Return via a different route. Hire a driver (from 700 MAD for the day).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option B: Draa Valley &amp; Desert</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Drive south through the Draa Valley (N9 road) to Zagora (160 km, 3 hours). Stop
                      at Agdz viewpoint and Tamnougalt kasbah (from 20 MAD). Continue to Zagora for the
                      "Timbuktu 52 Days" sign. Begin a 1-2 night Sahara desert excursion (from 800 MAD)
                      or return to Ouarzazate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Estimated Day 3 Cost</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Gorge day trip: from 700-1,200 MAD (driver, meals, fuel). Draa Valley: from 500-900
                      MAD (transport, meals). Desert excursion: from 800-2,500 MAD (1-2 nights all-inclusive).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-1,800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Shared taxis, budget restaurants, free sites, one studio</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,500-4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private driver, all sites, restaurant meals, basic desert camp</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 5,000-10,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private 4x4 tours, luxury desert camp, fine dining, quad biking</p>
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
            Continue Planning Your Ouarzazate Trip
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
            Ready to Explore Ouarzazate?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Hollywood film sets and UNESCO kasbahs to 300-meter gorges, hidden oases, and Sahara sunrises,
            Ouarzazate is the gateway to Morocco most dramatic landscapes. Start planning your adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ouarzazate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Ouarzazate City Guide
            </Link>
            <Link
              href="/desert-tours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Sunrise className="w-5 h-5" />
              Desert Tours
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
