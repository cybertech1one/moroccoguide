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
  Waves,
  Anchor,
  Sunset,
  TreesIcon,
  Coffee,
  Castle,
  Fish,
  BookOpen,
  Bird,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Larache Guide 2026 | Lixus Ruins, Spanish Heritage & Atlantic Coast',
  description:
    'Complete guide to Larache, Morocco in 2026. Explore Lixus archaeological site, Place de la Liberation, Kasbah de la Cigogne, Jean Genet grave, Ras R mel beach, Spanish colonial architecture, fishing port, and Moulay Bousselham day trips. Prices in MAD.',
  keywords: [
    'larache morocco',
    'lixus ruins',
    'larache guide',
    'larache beach',
    'things to do larache',
    'jean genet larache',
    'moulay bousselham day trip',
    'larache travel guide',
    'lixus archaeological site',
    'kasbah de la cigogne',
    'place de la liberation larache',
    'larache medina',
    'larache fishing port',
    'larache spanish architecture',
    'merja zerga lagoon',
    'larache 2026',
    'ras rmel beach larache',
    'larache morocco guide',
  ],
  openGraph: {
    title: 'Larache Guide 2026 | Lixus Ruins, Spanish Heritage & Atlantic Coast',
    description:
      'The complete guide to Larache, Morocco. Lixus archaeological ruins, Spanish colonial architecture, Jean Genet grave, Atlantic beaches, and Moulay Bousselham birdwatching with prices in MAD.',
    url: `${BASE_URL}/larache-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-larache.webp`,
        width: 1200,
        height: 630,
        alt: 'View of Larache town and the Loukkos river estuary with the Atlantic Ocean and ancient ruins of Lixus in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larache Guide 2026 | Lixus Ruins & Atlantic Coast',
    description:
      'Lixus pre-Roman ruins, Spanish colonial plaza, Jean Genet grave, Ras R mel beach, fishing port, and Moulay Bousselham birdwatching. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-larache.webp`],
  },
  alternates: { canonical: `${BASE_URL}/larache-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/larache-guide`,
  name: 'Larache Guide 2026 | Lixus Ruins, Spanish Heritage & Atlantic Coast',
  description:
    'Complete guide to Larache, Morocco. Lixus archaeological site, Spanish colonial heritage, Jean Genet grave, Atlantic beaches, fishing port, and Moulay Bousselham birdwatching.',
  url: `${BASE_URL}/larache-guide`,
  image: `${BASE_URL}/images/hero-larache.webp`,
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
  mainEntityOfPage: `${BASE_URL}/larache-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Larache',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Larache Guide', item: `${BASE_URL}/larache-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Larache known for?', acceptedAnswer: { '@type': 'Answer', text: 'Larache is known for the ancient ruins of Lixus (a pre-Roman and Roman archaeological site), its Spanish colonial heritage from the protectorate era (1912-1956), being the final resting place of French writer Jean Genet, its relaxed Atlantic atmosphere, fresh seafood, and proximity to the Merja Zerga lagoon for birdwatching. It is one of the most authentically untouristed towns on the Moroccan coast.' } },
    { '@type': 'Question', name: 'How do I get to Larache?', acceptedAnswer: { '@type': 'Answer', text: 'Larache is accessible by bus from Tangier (from 30 MAD, 2 hours via CTM or Supratours), Rabat (from 60 MAD, 3 hours), and Casablanca (from 100 MAD, 4.5 hours). Grand taxis run from Tangier and other northern cities. By car, Larache is on the N1 highway between Tangier and Rabat. There is no train station in Larache, but the nearest station is Ksar el-Kebir (30 km inland).' } },
    { '@type': 'Question', name: 'What are the Lixus ruins?', acceptedAnswer: { '@type': 'Answer', text: 'Lixus is one of the oldest continuously inhabited sites in Morocco, with occupation dating back to at least the 8th century BCE. Founded by the Phoenicians, it became an important Roman city famous for its garum (fermented fish sauce) production. The site includes Roman baths with mosaic floors, a theater-amphitheater, basilica ruins, and commanding views over the Loukkos river. Entry costs from 10 MAD and the site is located on a hill just 4 km north of Larache.' } },
    { '@type': 'Question', name: 'Is Larache worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, particularly for travelers seeking authentic, untouristed Morocco. Larache offers a fascinating blend of pre-Roman history (Lixus), Spanish colonial architecture, literary heritage (Jean Genet), fresh Atlantic seafood, and a genuinely sleepy, friendly atmosphere. It is an excellent base for visiting the Merja Zerga lagoon at Moulay Bousselham. Give it at least one full day or use it as a stopover between Tangier and Rabat.' } },
    { '@type': 'Question', name: 'Who was Jean Genet and why is he buried in Larache?', acceptedAnswer: { '@type': 'Answer', text: 'Jean Genet (1910-1986) was a celebrated French writer, poet, and playwright whose works include The Thief Journal, Our Lady of the Flowers, and The Balcony. Despite being one of the most important French-language writers of the 20th century, Genet chose to be buried in the old Spanish cemetery in Larache, a town he loved for its simplicity and distance from the Parisian literary world. His simple grave overlooking the Atlantic has become a literary pilgrimage site.' } },
    { '@type': 'Question', name: 'Can I visit Moulay Bousselham from Larache?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Moulay Bousselham is about 45 km south of Larache (45 minutes by car). The town sits on the Merja Zerga (Blue Lagoon), a Ramsar-listed wetland that is one of the most important birdwatching sites in North Africa. Flamingos, herons, spoonbills, and hundreds of migratory species visit. Local boatmen offer lagoon tours from 150-300 MAD per boat. Grand taxis from Larache cost from 20-30 MAD per person.' } },
    { '@type': 'Question', name: 'What is the best time to visit Larache?', acceptedAnswer: { '@type': 'Answer', text: 'April to October for the best weather (20-30 degrees) and beach conditions. For birdwatching at Merja Zerga, November to March is peak migration season with the most species present. Summer is warm and pleasant but can be windy. Larache never gets crowded, so any time of year works well for sightseeing.' } },
  ],
};

/* ===============================================================
   DATA: HISTORICAL & ARCHAEOLOGICAL
   =============================================================== */

const historicalAttractions = [
  {
    name: 'Lixus Archaeological Site',
    icon: Landmark,
    category: 'Archaeological Ruins',
    price: 'From 10 MAD',
    duration: '1.5-2 hours',
    bestTime: 'Morning (avoid midday heat)',
    description:
      'Perched on a hill overlooking the Loukkos river 4 km north of Larache, Lixus is one of the oldest and most important archaeological sites in Morocco. First settled by the Phoenicians around the 8th century BCE, it grew into a significant Carthaginian trading post before becoming a prosperous Roman city renowned across the Mediterranean for its garum — a fermented fish sauce that was the ketchup of the ancient world. According to legend, the Garden of the Hesperides where Hercules picked the golden apples was located here. The extensive ruins include a Roman theater-amphitheater (one of few in Morocco), thermal baths with partially preserved mosaic floors depicting the sea god Oceanus, the foundations of a basilica, garum production vats, and massive defensive walls. The hilltop location offers sweeping views across the river valley, farmland, and the Atlantic coast.',
    insiderTip:
      'Hire a local guide at the entrance (from 50-100 MAD) — the site is large and the ruins are not well-labeled, so a guide brings the stones to life with historical context. Wear sturdy shoes as the terrain is uneven. Bring water — there is no shade on the hilltop. The best photographs come from the upper acropolis looking down toward the river. To reach Lixus, take a petit taxi from Larache (from 15-20 MAD) or walk the 4 km along the river road — it is a pleasant walk with views.',
  },
  {
    name: 'Place de la Liberation (Old Plaza de Espana)',
    icon: Globe,
    category: 'Historic Square',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon or evening',
    description:
      'The central square of Larache is the finest example of Spanish colonial urban planning in Morocco. Originally called the Plaza de Espana during the Spanish protectorate (1912-1956), the square is flanked by elegant Spanish-style buildings with wrought-iron balconies, tiled facades, and arched arcades. The proportions are Mediterranean rather than Moroccan, giving Larache a character distinct from any other city in the country. Cafe terraces spill across the square, where locals gather for coffee, conversation, and evening promenades. The atmosphere is quintessentially southern Spanish — languid, social, and timeless. The square connects the new town to the medina, serving as the natural starting point for exploring Larache.',
    insiderTip:
      'The best time to experience the square is in the evening when families promenade and the cafe terraces fill up. Grab a table at one of the cafes along the arcade and order a cafe con leche (Spanish influence shows even in the coffee) for from 10-15 MAD. Study the building facades — the Spanish-era architecture includes beautiful tile details and ironwork that you will not find elsewhere in Morocco. The square is small enough to absorb in 30 minutes but atmospheric enough to linger for an hour.',
  },
  {
    name: 'Kasbah de la Cigogne (Stork Kasbah)',
    icon: Castle,
    category: 'Historical Fortress',
    price: 'Free (exterior) / From 10 MAD (if interior is open)',
    duration: '30-45 minutes',
    bestTime: 'Late afternoon',
    description:
      'The Kasbah de la Cigogne — named for the storks that nest on its towers — sits at the mouth of the Loukkos river where it meets the Atlantic. This 17th-century fortress was built by the Spanish during their occupation of Larache (1610-1689) and later modified by Moulay Ismail after Morocco recaptured the city. The kasbah walls and bastions command dramatic views of the river estuary, the ocean, and the coastline stretching north toward Tangier. Storks have made the kasbah their home, building enormous nests on the tower tops and walls — a photogenic sight that has given the fortress its popular name. The exterior and ramparts are freely accessible; the interior opens intermittently for exhibitions.',
    insiderTip:
      'The kasbah is at its most photogenic in the late afternoon when the setting sun lights up the stone walls and the storks are active on their nests. The viewpoint from the northwestern bastion overlooking the river mouth and Atlantic is exceptional. The storks are resident year-round but are most active in spring (March-June) when breeding. If the interior is closed, the rampart walk and views alone are worth the visit.',
  },
  {
    name: 'Jean Genet\'s Grave',
    icon: BookOpen,
    category: 'Literary Heritage',
    price: 'Free',
    duration: '20-30 minutes',
    bestTime: 'Morning',
    description:
      'The old Spanish cemetery of Larache is the final resting place of Jean Genet (1910-1986), one of the most important and controversial French writers of the 20th century. Author of The Thief&apos;s Journal, Our Lady of the Flowers, and The Balcony, Genet was a provocateur whose work explored themes of transgression, identity, and beauty in the margins of society. Despite his celebrity in Paris, he chose to be buried here — in a small, wind-swept cemetery overlooking the Atlantic in a town he loved for its simplicity and remove from the literary establishment. His grave is marked by a simple white headstone facing the ocean. For literature lovers, the pilgrimage to this spot is deeply moving — one of France greatest writers at rest in a quiet corner of Morocco.',
    insiderTip:
      'The cemetery is near the beach, south of the medina. Ask locals for "le cimetiere espagnol" or "la tombe de Genet" — everyone knows it. The gate may be locked; a caretaker can let you in (a small tip of from 10-20 MAD is appreciated). Genet grave is simple and unadorned, with a view of the sea. Bring something to read — sitting by his grave with one of his books is a fitting tribute. The cemetery itself, with its weathered Spanish-era graves, is atmospheric and worth exploring.',
  },
];

/* ===============================================================
   DATA: MEDINA & TOWN
   =============================================================== */

const medinaAttractions = [
  {
    name: 'Larache Medina Walk',
    icon: Footprints,
    category: 'Cultural Exploration',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The Larache medina is small, unhurried, and beautifully authentic. Entered from the Place de la Liberation, the old quarter occupies a compact hillside above the river and port. The streets are narrow but manageable, whitewashed with the occasional splash of blue — reminiscent of Asilah or Chefchaouen but without any tourism infrastructure. You will find traditional bakeries with wood-fired ovens, spice shops, fabric merchants, and small cafes where old men play cards. The medina architecture blends Moroccan and Andalusian styles, with some Spanish protectorate-era additions. The lack of tourist shops means this is an everyday working medina — people live, shop, and socialize here without a thought for visitors.',
    insiderTip:
      'Enter from Place de la Liberation and head downhill toward the port for a natural walking route. The medina is small enough that you cannot get seriously lost. Stop at a traditional bakery — the fresh-baked bread (khobz) costs from 1-2 MAD per loaf and is a window into daily Moroccan life. The medina connects to the fishing port at its lower end, making a natural combined walk. Photography is welcome, but ask before photographing people directly.',
  },
  {
    name: 'Spanish Colonial Architecture Walk',
    icon: Eye,
    category: 'Architectural Heritage',
    price: 'Free',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Larache was under Spanish protectorate control from 1912 to 1956, and the Spanish architectural legacy is more visible here than in almost any other Moroccan city except Tetouan. Beyond the Place de la Liberation, the new town features Spanish-style apartment buildings with wrought-iron balconies, tiled entryways, and Art Deco detailing. The former Spanish church (now converted), colonial government buildings, a cinema, and residential blocks line the main avenues. Walking through these streets feels more like a sleepy Andalusian town than a Moroccan city. The architecture tells the story of the protectorate era — a period that shaped northern Morocco in ways still visible today.',
    insiderTip:
      'Start at the Place de la Liberation and walk along the main avenue (Avenue Mohammed V) to see the finest colonial buildings. Look up at the balconies and facades — many retain their original tile work and ironwork. The former cinema building is particularly handsome. Ask at a cafe about any buildings with accessible interiors — some have tiled entryways and staircases that are beautiful examples of Spanish-Moroccan fusion. This architectural heritage is fragile — many buildings are in disrepair — making it important to see now.',
  },
  {
    name: 'Larache Fishing Port',
    icon: Anchor,
    category: 'Working Port',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning (7-10 AM)',
    description:
      'The fishing port at the mouth of the Loukkos river is the economic heart of Larache. In the morning, painted wooden boats return from night fishing in the Atlantic, and the day catch is unloaded, sorted, and sold at quayside auction. Sardines, anchovies, sole, sea bream, and octopus fill the crates. The atmosphere is energetic but unhurried — this is a small-town port rather than the industrial scale of Safi or Agadir. The port area has small grill restaurants where the morning catch is cooked and served immediately, and the boat-building yard where traditional wooden fishing boats are still constructed by hand is worth a look.',
    insiderTip:
      'The port is most active between 7-10 AM. The fish grill restaurants here serve the freshest possible seafood — a plate of grilled sardines or sole with bread and salad costs from 25-40 MAD. Watch for the boat-builders in the yard adjacent to the port — they construct wooden boats using traditional techniques. The port walk connects naturally with the medina above, and the views of the river mouth and Kasbah de la Cigogne from the quayside are excellent.',
  },
];

/* ===============================================================
   DATA: BEACH & NATURE
   =============================================================== */

const beachAttractions = [
  {
    name: 'Ras R\'mel Beach',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Morning to mid-afternoon',
    description:
      'Ras R&apos;mel (also written Ras Remel) is Larache main beach, a long crescent of golden sand stretching south from the mouth of the Loukkos river. The beach is wide and exposed to the Atlantic, with moderate to strong waves depending on conditions. In summer, it fills with local families and the atmosphere is welcoming and relaxed. The setting is beautiful — to the north, the Kasbah de la Cigogne and the river mouth frame the view; to the south, the sand stretches toward the dunes. Small seasonal beach cafes sell drinks and snacks. The swimming can be excellent but respect the Atlantic currents — swim where locals swim and pay attention to conditions.',
    insiderTip:
      'The beach is a 10-minute walk from the town center. The northern end near the river mouth is more sheltered; the southern end has bigger waves. Bring your own shade — umbrella rental is limited. The beach is wide enough that even on busy summer weekends there is plenty of space. For the best swimming, visit on calm days — the Atlantic here can be powerful. Sunset walks along the beach toward the dunes are beautiful.',
  },
  {
    name: 'Moulay Bousselham & Merja Zerga Lagoon',
    icon: Bird,
    category: 'Nature & Birdwatching Day Trip',
    price: 'From 20 MAD (grand taxi) / Boat tour from 150 MAD',
    duration: 'Half day - full day',
    bestTime: 'Early morning for birdwatching / November-March for migration',
    description:
      'Moulay Bousselham, 45 km south of Larache, sits on the shores of the Merja Zerga (Blue Lagoon) — a Ramsar-listed wetland and one of the most important birdwatching sites in all of North Africa. The brackish lagoon, fed by freshwater streams and connected to the Atlantic by a narrow channel, creates a rich ecosystem that attracts over 200 bird species. During winter migration (November-March), the lagoon hosts flamingos, spoonbills, herons, egrets, avocets, ospreys, and thousands of wading birds. Local boatmen offer guided lagoon tours in traditional wooden boats, navigating through reed beds and shallow channels to prime viewing spots. Beyond birdwatching, the town has a beautiful beach, a small fishing port, and the shrine of the saint Moulay Bousselham.',
    insiderTip:
      'For the best birdwatching, go early morning (ideally at dawn) when birds are most active. November to March is peak migration season with the most species. Arrange a boat tour at the lagoon edge — negotiate before boarding (from 150-300 MAD per boat, which seats 4-6 people). Bring binoculars if you have them. The beach at Moulay Bousselham is excellent and uncrowded. Grand taxis from Larache cost from 20-30 MAD per person. Combine birdwatching in the morning with beach time in the afternoon.',
  },
  {
    name: 'Loukkos River Estuary',
    icon: TreesIcon,
    category: 'Nature & Scenery',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Late afternoon',
    description:
      'The Loukkos river flows past Larache and empties into the Atlantic at the foot of the Kasbah de la Cigogne, creating a picturesque estuary that is one of the town defining natural features. The river banks are lush with vegetation, and the tidal flats at the estuary attract wading birds — herons, egrets, and sandpipers are commonly seen. The area where the river meets the ocean is dramatic, with competing currents creating interesting water patterns. Walking along the riverbank from town toward the mouth offers changing views of the kasbah, the port, the old town rising above, and the Atlantic beyond. In the late afternoon, the light on the water and the kasbah walls is particularly beautiful.',
    insiderTip:
      'The best viewpoint of the estuary is from the Kasbah de la Cigogne ramparts above. For a riverside walk, follow the path from the port along the north bank toward the river mouth. Fishermen cast lines from the banks in the evening — a peaceful scene. The estuary area can be muddy at low tide, so wear appropriate shoes. The birdlife is most active during low tide when the mudflats are exposed.',
  },
];

/* ===============================================================
   DATA: FOOD & CULTURE
   =============================================================== */

const foodCultureExperiences = [
  {
    name: 'Seafood at Port Restaurants',
    icon: Fish,
    category: 'Culinary Experience',
    price: 'From 25 MAD (grill stall) / From 60 MAD (restaurant)',
    duration: '1-2 hours',
    bestTime: 'Lunch',
    description:
      'Larache fishing port is small enough that the journey from ocean to plate is measured in minutes rather than hours. The grill stalls and small restaurants around the port serve the morning catch with minimal ceremony and maximum freshness. Sardines charcoal-grilled and served with bread, tomato salad, and harissa is the classic meal (from 25 MAD). For more variety, sit-down restaurants offer grilled sole, sea bream, calamari, and prawn platters at prices that reflect Larache status as a local, untouristed town. The Spanish influence appears in some preparations — fried fish (pescado frito style), seafood paella at certain restaurants, and the general emphasis on simple, high-quality ingredients.',
    insiderTip:
      'The grill stalls near the port are the cheapest and freshest option — from 25-40 MAD for a generous plate. For a proper sit-down meal, try the restaurants along the corniche south of the center (mains from 50-100 MAD). Ask for the catch of the day. The paella at some restaurants is surprisingly good — a direct legacy of the Spanish era. Seafood is best at lunch when the morning catch has just been prepared.',
  },
  {
    name: 'Cafe Culture on the Plaza',
    icon: Coffee,
    category: 'Local Experience',
    price: 'From 8 MAD (coffee) / From 10 MAD (mint tea)',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late afternoon or evening',
    description:
      'The cafe terraces on the Place de la Liberation are the social center of Larache. The Spanish protectorate legacy is visible in the cafe culture — coffee here is often ordered as "cafe con leche" (cafe au lait, Spanish style) rather than the standard Moroccan "nous-nous." The terraces face the handsome Spanish-era facades, and the rhythm of town life plays out before you: friends meeting after work, families on evening strolls, children playing in the square. There is no tourist atmosphere whatsoever — you are simply joining the daily ritual of a small Moroccan town. The pace is slow, the conversation is unhurried, and the feeling is one of genuine welcome.',
    insiderTip:
      'Order a cafe con leche (from 8-12 MAD) and a msemen or rghaif (Moroccan flatbread, from 3-5 MAD) for an affordable and authentic snack. The cafes on the south side of the square catch the afternoon sun. Evening (after 6 PM) is when the square comes alive with the promenade. This is one of the best people-watching experiences in northern Morocco — the Spanish-Moroccan cultural blend is unique and fascinating.',
  },
  {
    name: 'Larache Market (Souk)',
    icon: ShoppingBag,
    category: 'Local Market',
    price: 'Free (browsing)',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'The daily market in Larache is a thoroughly local affair with no tourist orientation whatsoever. Fresh produce, fish, meat, spices, olives, and household goods fill the stalls. The fruit and vegetable section is particularly impressive, with seasonal produce from the fertile Loukkos river valley — strawberries (Larache region is Morocco strawberry capital), oranges, tomatoes, and herbs. The spice stalls sell ras el hanout, cumin, paprika, and saffron at genuinely local prices. The market atmosphere is friendly and unhurried, and while haggling is expected, prices are already low.',
    insiderTip:
      'Visit in the morning for the best selection, especially at the fish section. The Larache region produces some of Morocco best strawberries — if visiting in spring (March-May), the berries are exceptional and cheap (from 10-15 MAD per kilogram). The spice stalls offer excellent value — stock up on ras el hanout and cumin. No one will hassle you here; it is a genuine local market where foreign visitors are a curiosity rather than a target.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Lixus Is Nearly Free', icon: Landmark, description: 'The extraordinary Lixus archaeological site costs just from 10 MAD entry. Comparable Roman ruins in other countries charge from 50-100 MAD equivalent. A local guide (from 50-100 MAD) brings the stones to life.', savings: 'World-class ruins from 10 MAD' },
  { tip: 'Port Seafood Is Unbeatable Value', icon: Fish, description: 'Grilled sardines or sole at port stalls cost from 25-40 MAD — a fraction of what you would pay in Tangier, Essaouira, or Agadir for identical quality and freshness.', savings: 'Save from 50-100 MAD per meal vs. tourist cities' },
  { tip: 'Walk Everything in Town', icon: Footprints, description: 'Larache is small enough to explore entirely on foot. The medina, plaza, port, kasbah, Jean Genet grave, and beach are all within a 20-minute walk of each other. No taxis needed in town.', savings: 'Free — save from 50-100 MAD on taxis' },
  { tip: 'Grand Taxi to Lixus', icon: MapPin, description: 'A petit taxi to Lixus costs from 15-20 MAD. Organized tours from Tangier including Lixus charge from 500-800 MAD per person. Take the bus to Larache and taxi to Lixus instead.', savings: 'Save from 400-700 MAD vs. organized tour' },
  { tip: 'Budget Accommodation', icon: Heart, description: 'Larache has simple, clean hotels and pensions from 150-250 MAD per night — a fraction of tourist city prices. The town is safe and friendly, making budget accommodation comfortable and worry-free.', savings: 'Save from 200-500 MAD per night vs. tourist cities' },
  { tip: 'Moulay Bousselham by Grand Taxi', icon: Bird, description: 'Grand taxi to Moulay Bousselham costs from 20-30 MAD per person. Organized birdwatching day trips from Tangier charge from 600-1000 MAD per person for the same experience.', savings: 'Save from 570-970 MAD vs. organized tour' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Larache Is the Real Morocco', icon: CheckCircle, description: 'This is not a tourist town. There are no touts, no hassle, no inflated prices. Larache rewards travelers who want to experience everyday Moroccan life in a beautiful coastal setting. Embrace the slow pace — it is the town greatest charm.' },
  { tip: 'The Spanish Legacy Is Unique', icon: Globe, description: 'Larache Spanish protectorate heritage makes it architecturally distinct from any other Moroccan city outside Tetouan. The plaza, the colonial buildings, even the cafe culture have a Mediterranean character that is surprising and delightful.' },
  { tip: 'Lixus Deserves More Time', icon: Landmark, description: 'Most visitors rush through Lixus in 30 minutes. Give it 1.5-2 hours with a guide. The site is large, the history is deep (Phoenician, Carthaginian, Roman), and the hilltop views are spectacular. It rivals Volubilis in significance if not in scale.' },
  { tip: 'Best Photography', icon: Camera, description: 'The Kasbah de la Cigogne with stork nests at golden hour is magical. Lixus ruins overlooking the river at sunrise are dramatic. The Spanish plaza in evening light is atmospheric. The port at dawn is raw and beautiful.' },
  { tip: 'Strawberry Season', icon: Sun, description: 'The Larache region is Morocco strawberry capital. Visit in spring (March-May) for extraordinary berries at the market — sweet, fragrant, and incredibly cheap (from 10-15 MAD per kilogram). The strawberry festival in April is a local highlight.' },
  { tip: 'Combine with Asilah and Tangier', icon: Compass, description: 'Larache sits between Tangier (80 km north) and Kenitra/Rabat (200 km south). Combine with Asilah (40 km north) for a two-town coastal day. The bus route Tangier-Asilah-Larache is easy and scenic.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Larache known for?', answer: 'Larache is known for the ancient Lixus archaeological site (pre-Roman and Roman ruins), its distinctive Spanish colonial heritage, being the burial place of French writer Jean Genet, fresh Atlantic seafood, and proximity to the Merja Zerga lagoon for birdwatching. It is one of the most authentically untouristed towns on the Moroccan coast.' },
  { question: 'How do I get to Larache?', answer: 'CTM and Supratours buses run from Tangier (from 30 MAD, 2 hours), Rabat (from 60 MAD, 3 hours), and Casablanca (from 100 MAD, 4.5 hours). Grand taxis serve northern cities. By car, Larache is on the N1 between Tangier and Rabat. The nearest train station is Ksar el-Kebir (30 km inland, from 15 MAD by grand taxi).' },
  { question: 'What are the Lixus ruins?', answer: 'Lixus is an ancient archaeological site on a hill 4 km north of Larache, continuously inhabited from the 8th century BCE. Founded by Phoenicians, it became a Roman city famous for garum (fish sauce) production. Ruins include a theater-amphitheater, Roman baths with mosaics, a basilica, and garum vats. Entry costs from 10 MAD.' },
  { question: 'Is Larache worth visiting?', answer: 'Yes, especially for travelers seeking authentic, untouristed Morocco. The combination of pre-Roman history (Lixus), Spanish colonial architecture, literary heritage (Jean Genet), fresh seafood, and the Merja Zerga birdwatching makes it uniquely rewarding. Give it at least one full day.' },
  { question: 'Who was Jean Genet and why is he buried in Larache?', answer: 'Jean Genet (1910-1986) was a celebrated French writer and playwright. Despite his fame in Paris, he chose to be buried in the old Spanish cemetery in Larache, a town he loved for its simplicity. His grave overlooking the Atlantic is a literary pilgrimage site.' },
  { question: 'Can I visit Moulay Bousselham from Larache?', answer: 'Yes, Moulay Bousselham is 45 km south (45 minutes by car). The Merja Zerga lagoon is a Ramsar-listed wetland with 200+ bird species. Boat tours cost from 150-300 MAD per boat. Grand taxis from Larache cost from 20-30 MAD per person. November-March is peak birdwatching season.' },
  { question: 'What is the best time to visit Larache?', answer: 'April to October for beach weather (20-30 degrees). November to March for birdwatching at Merja Zerga. Spring (March-May) is strawberry season in the region. Larache never gets crowded, so any time of year works for sightseeing.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/things-to-do-tangier', icon: Compass, title: 'Things to Do in Tangier', description: 'Kasbah Museum, Cap Spartel, Hercules Caves, Cafe Hafa, and more in Morocco gateway city.' },
  { href: '/asilah-guide', icon: MapPin, title: 'Asilah Guide', description: 'Whitewashed medina murals, Portuguese ramparts, and art festivals on the Atlantic coast.' },
  { href: '/birdwatching', icon: Bird, title: 'Birdwatching in Morocco', description: 'From Merja Zerga to the Souss-Massa and High Atlas — Morocco best birding sites.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function LaracheGuidePage() {
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
            backgroundImage: 'url(/images/hero-larache.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Larache Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Landmark className="w-4 h-4" />
            Ancient Ruins &amp; Spanish Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Larache
            <br className="hidden md:block" /> Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Pre-Roman ruins on a hilltop, Spanish colonial plazas, a legendary writer&apos;s grave overlooking the sea,
            and Atlantic coast life untouched by tourism. Your complete 2026 guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Larache: Where Ancient Ruins Meet the Spanish Soul of Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Larache is the kind of town that rewards the traveler willing to go beyond the obvious.
                Perched at the mouth of the Loukkos river on Morocco Atlantic coast, 80 km south of
                Tangier, this small city of around 125,000 people exists almost entirely outside the
                tourist circuit. There are no tour buses, no souvenir shops, no riad hotels marketed
                on Instagram. What there is, instead, is something increasingly rare in Morocco: an
                unfiltered, genuine experience of a coastal town where life unfolds at its own unhurried
                pace.
              </p>
              <p>
                Yet beneath this quiet surface lies extraordinary depth. Just 4 km north of town, the
                ruins of Lixus sprawl across a hilltop — one of the oldest continuously inhabited sites
                in Morocco, where Phoenicians traded, Romans produced their famous garum fish sauce, and
                ancient Greeks believed Hercules picked the golden apples of the Hesperides. In town,
                the legacy of the Spanish protectorate (1912-1956) has left an architectural imprint
                unlike anywhere else in Morocco: a central plaza flanked by Mediterranean-style buildings,
                cafe terraces where coffee is ordered as "cafe con leche," and wrought-iron balconies
                that could be in Cadiz or Sevilla.
              </p>
              <p>
                And then there is the literary pilgrimage. Jean Genet, one of France most celebrated
                and controversial writers, chose to be buried here — in the old Spanish cemetery overlooking
                the Atlantic, far from the Parisian literary world, in a town he loved for its simplicity
                and beauty. His grave has become a quiet place of homage for readers from around the world.
              </p>
              <p>
                This guide covers 13 essential attractions and experiences in and around Larache, organized
                by category: historical and archaeological, medina and town, beach and nature, and food and
                culture. Each includes real 2026 prices in MAD, practical logistics, and insider tips.
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
            Short on time? These are the ten experiences that define a visit to Larache.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Lixus Archaeological Site', price: 'From 10 MAD', time: '1.5-2 hours', category: 'Archaeology' },
              { rank: 2, name: 'Place de la Liberation', price: 'Free', time: '30 min - 1 hour', category: 'Heritage' },
              { rank: 3, name: 'Kasbah de la Cigogne', price: 'Free', time: '30-45 min', category: 'Fortress' },
              { rank: 4, name: 'Jean Genet\'s Grave', price: 'Free', time: '20-30 min', category: 'Literary' },
              { rank: 5, name: 'Moulay Bousselham & Merja Zerga', price: 'From 20 MAD', time: 'Half day', category: 'Nature' },
              { rank: 6, name: 'Seafood at the Port', price: 'From 25 MAD', time: '1 hour', category: 'Culinary' },
              { rank: 7, name: 'Ras R\'mel Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
              { rank: 8, name: 'Medina Walk', price: 'Free', time: '1-2 hours', category: 'Exploration' },
              { rank: 9, name: 'Spanish Architecture Walk', price: 'Free', time: '45 min', category: 'Architecture' },
              { rank: 10, name: 'Loukkos River Estuary', price: 'Free', time: '1-2 hours', category: 'Nature' },
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

      {/* -- Historical & Archaeological -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historical &amp; Archaeological
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Phoenician ruins and Spanish fortresses to a legendary writer&apos;s final resting place,
            Larache layers of history are its greatest treasure.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {historicalAttractions.map((attraction) => {
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

      {/* -- Medina & Town -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Town
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Larache compact medina and Spanish-influenced new town offer authentic exploration
            without a single tourist trap in sight.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Larache is small enough to explore entirely on foot. No taxis needed within the town.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {medinaAttractions.map((item) => {
              const MedIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <MedIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Beach & Nature -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach &amp; Nature
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Atlantic beaches and river estuaries to one of Africa premier birdwatching lagoons,
            Larache natural surroundings are exceptional.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach season runs May to October. Birdwatching at Merja Zerga is best November to March.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {beachAttractions.map((item) => {
              const BeachIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Food & Culture -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fresh Atlantic seafood, Spanish-influenced cafe culture, and a genuine local market
            make Larache a quietly excellent food destination.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices in Larache are genuinely local — no tourist inflation. Expect excellent value everywhere.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodCultureExperiences.map((item) => {
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Larache
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Larache is already one of Morocco most affordable destinations. These tips make it even more budget-friendly.
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
            Insider Tips for Larache
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

      {/* -- Sample 1-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 1-Day Larache Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan covering the essential Larache experiences in a single rich day.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Full Day: Ruins, Medina &amp; Coast
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning (8-12 PM)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start early with a visit to Lixus archaeological site (from 10 MAD, petit taxi
                      from 15 MAD). Spend 1.5-2 hours exploring the Roman ruins with a local guide
                      (from 50 MAD). Return to town and explore the Place de la Liberation — coffee
                      at a plaza cafe (from 8 MAD). Walk through the medina and down to the fishing
                      port.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon (12-5 PM)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Seafood lunch at the port grill stalls — grilled sardines or sole with bread
                      and salad (from 25-40 MAD). Walk to Jean Genet&apos;s grave in the old Spanish
                      cemetery. Continue to Ras R&apos;mel beach for swimming and relaxation (free).
                      Alternatively, take a grand taxi to Moulay Bousselham (from 20 MAD) for
                      birdwatching at Merja Zerga lagoon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit the Kasbah de la Cigogne for sunset views over the river mouth and
                      Atlantic (free). Walk the Spanish colonial architecture along the main
                      avenue. Evening cafe on the Place de la Liberation (from 10 MAD). Dinner
                      at a medina or corniche restaurant (from 50-100 MAD). Estimated day cost:
                      from 150-300 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 100-200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Lixus entry, port food, free walks, beach time</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 250-450 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Lixus with guide, restaurant meals, Moulay Bousselham trip</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Birdwatching Enthusiast</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 400-700 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Lixus guided, Merja Zerga boat tour, restaurant dining</p>
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
            Ready to Explore Larache?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Phoenician ruins on a windswept hilltop and Spanish colonial plazas to a literary
            legend&apos;s Atlantic grave and one of Africa finest birdwatching lagoons, Larache offers
            experiences that exist nowhere else in Morocco. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/things-to-do-tangier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Things to Do in Tangier
            </Link>
            <Link
              href="/asilah-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <MapPin className="w-5 h-5" />
              Asilah Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
