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
  Footprints,
  Eye,
  Waves,
  Anchor,
  Sunset,
  Coffee,
  Palette,
  BookOpen,
  Building,
  BedDouble,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Asilah Morocco Guide 2026 | Medina Murals, Beaches & Arts Festival',
  description:
    'Complete guide to Asilah, Morocco in 2026. Explore medina street art, Portuguese ramparts, Paradise Beach, seafood restaurants, the annual Asilah Arts Festival, and day trips. Prices in MAD and insider tips.',
  keywords: [
    'asilah morocco guide',
    'things to do in asilah',
    'asilah beach',
    'asilah medina',
    'asilah art festival',
    'asilah day trip from tangier',
    'asilah morocco',
    'asilah street art',
    'asilah ramparts',
    'paradise beach asilah',
    'asilah seafood',
    'asilah hotels',
    'asilah riad',
    'briech beach asilah',
    'asilah centre hassan ii',
    'asilah raissouli palace',
    'asilah hassan ii mosque',
    'asilah travel guide 2026',
    'asilah morocco what to do',
    'asilah festivals',
  ],
  openGraph: {
    title: 'Asilah Morocco Guide 2026 | Medina Murals, Beaches & Arts Festival',
    description:
      'Discover Asilah: whitewashed medina with vibrant murals, Portuguese ramparts, Paradise Beach, annual arts festival, fresh seafood, and Atlantic charm. Complete guide with prices.',
    url: `${BASE_URL}/asilah-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tangier.webp`,
        width: 1200,
        height: 630,
        alt: 'Whitewashed medina walls of Asilah painted with colorful murals along the Atlantic coast of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asilah Morocco Guide 2026 | Complete Travel Guide',
    description:
      'Medina murals, Portuguese ramparts, Paradise Beach, arts festival, fresh seafood. Complete Asilah guide with real prices and insider tips.',
    images: [`${BASE_URL}/images/hero-tangier.webp`],
  },
  alternates: { canonical: `${BASE_URL}/asilah-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/asilah-guide`,
  name: 'Asilah Morocco Guide 2026 | Medina Murals, Beaches & Arts Festival',
  description:
    'Complete guide to Asilah, Morocco. Explore the whitewashed medina with its famous street art murals, Portuguese ramparts, Paradise Beach, annual arts festival, and world-class seafood.',
  url: `${BASE_URL}/asilah-guide`,
  image: `${BASE_URL}/images/hero-tangier.webp`,
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
  mainEntityOfPage: `${BASE_URL}/asilah-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Asilah',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Asilah Guide', item: `${BASE_URL}/asilah-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Asilah worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Asilah is one of Morocco most photogenic towns with its whitewashed medina covered in vibrant murals, Portuguese-era ramparts overlooking the Atlantic, excellent beaches, and outstanding seafood. It is a popular day trip from Tangier (45 minutes by train) but deserves at least one overnight stay to experience the town at its most peaceful.' } },
    { '@type': 'Question', name: 'How do I get from Tangier to Asilah?', acceptedAnswer: { '@type': 'Answer', text: 'The easiest way is by ONCF train from Tangier Ville station (from 25 MAD, 45 minutes, multiple departures daily). Grand taxis from Tangier cost from 30 MAD per person shared. You can also drive — it is 46 km south on the N1 highway, about 45 minutes. CTM buses also run the route (from 20 MAD).' } },
    { '@type': 'Question', name: 'When is the Asilah Arts Festival?', acceptedAnswer: { '@type': 'Answer', text: 'The Asilah International Cultural Moussem typically takes place in August (sometimes late July). Founded in 1978, the festival features international artists painting murals on medina walls, live music, exhibitions, and cultural workshops. The exact dates vary each year — check local listings. Many murals remain on the walls year-round, making Asilah an open-air gallery at any time.' } },
    { '@type': 'Question', name: 'What is the best beach in Asilah?', acceptedAnswer: { '@type': 'Answer', text: 'Paradise Beach (Rmilat Beach) about 3 km south of town is the most beautiful, with golden sand and calm waters. The town beach near the ramparts is convenient but smaller. Briech Beach (Sidi Mghait) about 15 km south offers a wider, wilder Atlantic beach experience. Beach season runs June to September.' } },
    { '@type': 'Question', name: 'How many days do you need in Asilah?', acceptedAnswer: { '@type': 'Answer', text: 'A day trip from Tangier covers the medina murals, ramparts, and a seafood lunch. However, staying one or two nights lets you experience Asilah at its best — sunrise on the ramparts, evening promenades, and the slow coastal pace. During the August arts festival, plan at least 2 nights.' } },
    { '@type': 'Question', name: 'Where should I eat in Asilah?', acceptedAnswer: { '@type': 'Answer', text: 'The port area has several excellent seafood restaurants serving the day catch. Restaurant La Alcazaba and Restaurant Al Alba near the ramparts are popular. For budget eats, the medina stalls serve fresh grilled sardines (from 15 MAD) and msemen. The seafood bastilla at Port restaurants is a local specialty (from 60 MAD).' } },
  ],
};

/* ===============================================================
   DATA: MEDINA & CULTURAL SIGHTS
   =============================================================== */

const medinaAttractions = [
  {
    name: 'Medina Murals & Street Art',
    icon: Palette,
    category: 'Art & Culture',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning (best light for photos)',
    description:
      'Asilah medina is a living art gallery. Since the first International Cultural Moussem in 1978, artists from around the world have painted the whitewashed walls with vibrant murals — abstract compositions, calligraphic works, portraits, and scenes from Moroccan life. Each August, new murals replace old ones during the festival, while many year-round works have become permanent landmarks. The blue-and-white palette of the medina walls provides a stunning canvas, and every narrow alley reveals a new surprise. The murals transform what would be a charming-but-small medina into something genuinely extraordinary.',
    insiderTip:
      'The best murals concentrate along Rue Ibn Khaldoun and the alleys near the southern rampart wall. Morning light between 8-10 AM illuminates the walls beautifully. During the August festival, you can watch artists painting live. Some homeowners paint their own doors and walls with intricate designs — look for the handmade details that distinguish them from the festival murals.',
  },
  {
    name: 'Portuguese Ramparts & Sea Wall',
    icon: Landmark,
    category: 'Historic Fortification',
    price: 'Free',
    duration: '45 minutes - 1 hour',
    bestTime: 'Sunset',
    description:
      'The 15th-century Portuguese ramparts encircle the medina on three sides, with the Atlantic Ocean crashing against their western face. Built by King Alfonso V of Portugal after he captured Asilah in 1471, the walls were reinforced and expanded over the centuries by Spanish and Moroccan rulers. Walking the ramparts provides sweeping views of the Atlantic, the medina rooftops, and the coastline stretching south toward Larache. The western bastion, Borj al-Kamra (the Tower of the Chamber), is the most dramatic viewpoint, jutting out over the waves. At sunset, the rampart walk becomes magical as the Atlantic sky turns orange and pink.',
    insiderTip:
      'Access the ramparts from near Bab al-Homar gate. Walk clockwise for the best progression of views. The western wall at sunset is spectacular but also windy — bring a layer. The small terrace near Borj al-Kamra is the finest sunset spot in Asilah. On calm days, local fishermen cast lines from the rampart base.',
  },
  {
    name: 'Raissouli Palace (Palais de Raissouni)',
    icon: Building,
    category: 'Historic Palace',
    price: 'Free (exterior) / From 10 MAD (when open)',
    duration: '30-45 minutes',
    bestTime: 'Morning',
    description:
      'This elegant palace overlooking the sea was built in 1909 by Moulay Ahmed el-Raissouni, the infamous Berber bandit and governor who kidnapped the Greek-American businessman Ion Perdicaris in 1904, sparking an international incident with the United States. The palace blends traditional Moroccan architecture with Andalusian influences — arched galleries, a central courtyard, ornate tilework, and a terrace directly above the crashing Atlantic waves. It was built using forced labor and financed partly by ransom money. Today it is used for cultural exhibitions during the arts festival. The rooftop terrace offers one of the most dramatic ocean views on the entire Moroccan coast.',
    insiderTip:
      'The palace is not always open to the public outside the August festival period. When it is open, the rooftop terrace alone is worth the visit. Even if closed, the exterior and the adjacent ocean-facing terrace are accessible and stunning. Ask locally about current opening status — it opens sporadically for exhibitions and events.',
  },
  {
    name: 'Centre Hassan II des Rencontres Internationales',
    icon: BookOpen,
    category: 'Cultural Center',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning or afternoon',
    description:
      'This cultural center, established by King Hassan II in 1978 to anchor the annual arts festival, sits just outside the medina walls near Bab al-Homar. It hosts art exhibitions, conferences, workshops, and performances throughout the year, not just during the August moussem. The building itself is a fine example of modern Moroccan architecture with traditional elements. During the festival, it becomes the nerve center of Asilah cultural life, hosting the main exhibitions and roundtable discussions on art, politics, and African identity.',
    insiderTip:
      'Check the program at the entrance — even outside festival season, there are often free exhibitions of Moroccan and international art. The center has a small library with books on Moroccan art and history. It is a cool retreat on hot days. The garden area is pleasant for sitting.',
  },
  {
    name: 'Hassan II Mosque (Grand Mosque of Asilah)',
    icon: Landmark,
    category: 'Religious Heritage',
    price: 'Free (exterior only for non-Muslims)',
    duration: '15-20 minutes',
    bestTime: 'Morning',
    description:
      'Located within the medina near the Portuguese ramparts, the Grand Mosque of Asilah features a distinctive square minaret decorated with geometric tilework in the Moroccan-Andalusian style. While the interior is open only to Muslims, the exterior and the surrounding square are architecturally rewarding. The mosque courtyard and adjacent streets feature some of the medina most beautiful tilework and carved plaster details. The call to prayer echoing across the medina rooftops and bouncing off the Atlantic waves is one of Asilah most atmospheric moments.',
    insiderTip:
      'Photograph the minaret from the small square to the east for the best angle with the medina walls as backdrop. During prayer times the streets around the mosque are quieter — a respectful time to photograph the architecture without crowds. The zellige tilework on the minaret is among the finest in northern Morocco.',
  },
];

/* ===============================================================
   DATA: BEACHES & NATURE
   =============================================================== */

const beachAttractions = [
  {
    name: 'Paradise Beach (Rmilat Beach)',
    icon: Waves,
    category: 'Beach & Swimming',
    price: 'Free (sunbed from 30 MAD)',
    duration: '2-4 hours',
    bestTime: 'June to September',
    description:
      'About 3 km south of Asilah town center, Paradise Beach lives up to its name. A wide crescent of golden sand backed by low dunes and scrubby vegetation, with calm, clean Atlantic waters perfect for swimming. The beach is far less developed than Tangier or Agadir, giving it a genuinely relaxed feel. In summer, a few beach cafes set up umbrellas and serve drinks and light meals. The water is warmer here than on the exposed Atlantic coast further south, thanks to the sheltered bay position. Families, surfers, and travelers mix on the sand.',
    insiderTip:
      'Walk or take a petit taxi from Asilah center (from 15 MAD). The beach is quieter on weekdays and in the morning. Bring your own towel and supplies — facilities are basic outside peak summer. The southern end of the beach is less crowded. Swimming is generally safe but watch for currents on windy days. Sunset from Paradise Beach, looking back toward Asilah, is beautiful.',
  },
  {
    name: 'Town Beach (Plage Asilah)',
    icon: Anchor,
    category: 'Beach & Waterfront',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'The small town beach sits directly below the Portuguese ramparts, where the medina wall meets the Atlantic. It is a pocket beach — more atmospheric than expansive — with the dramatic backdrop of ancient fortification walls rising above the sand. Local children play in the shallows, fishermen mend nets, and the whole scene feels deeply authentic. The beach connects to the port area via a seafront walkway. At low tide, rock pools reveal starfish and sea anemones. At high tide, waves crash against the rampart base in spectacular fashion.',
    insiderTip:
      'This beach is best for atmosphere and photography rather than serious sunbathing — it is small and can be rocky in places. The views of the ramparts from the water level are extraordinary. Visit at low tide for the rock pools. The walkway connecting the beach to the port passes some excellent seafood restaurants — plan a post-beach lunch.',
  },
  {
    name: 'Briech Beach (Sidi Mghait)',
    icon: Wind,
    category: 'Beach & Nature',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Summer (June-September)',
    description:
      'About 15 km south of Asilah, Briech Beach is a vast, wild Atlantic beach stretching for kilometers. It is far less visited than Paradise Beach, offering a genuine sense of solitude and space. The sand is fine and golden, the waves bigger (making it popular with bodyboarders and surfers), and the landscape feels untouched. Sand dunes back the beach, and the surrounding area is dotted with argan trees. In summer, a few seasonal restaurants serve fresh seafood. This is the beach for travelers who want raw Atlantic beauty without development.',
    insiderTip:
      'You will need a car or grand taxi (from 80 MAD from Asilah) to reach Briech. The beach has minimal facilities — bring water, sunscreen, and food. The waves can be powerful; swim with caution and watch for rip currents. The northern end near the small village has the best access. It is spectacular for photography, especially with the afternoon light hitting the dunes.',
  },
];

/* ===============================================================
   DATA: FOOD & EXPERIENCES
   =============================================================== */

const foodExperiences = [
  {
    name: 'Seafood at the Port Restaurants',
    icon: UtensilsCrossed,
    category: 'Dining & Seafood',
    price: 'From 60 MAD (main course)',
    duration: '1-2 hours',
    bestTime: 'Lunch (freshest catch)',
    description:
      'Asilah fishing port supplies a cluster of excellent seafood restaurants with the freshest catch on the northern Moroccan coast. The fish arrives from the boats each morning and appears on plates by lunchtime. Grilled sardines, fried calamari, fish tagine, seafood bastilla (a flaky pastry filled with fish, shrimp, and vermicelli), and whole grilled sea bream are the specialties. Portions are generous and prices are reasonable by European standards. Several restaurants have terraces overlooking the port where you can watch the fishing boats come and go.',
    insiderTip:
      'Restaurant Al Alba and Restaurant Garcia are local favorites. Ask what was caught that morning and order that — it will be the freshest and best prepared. The seafood bastilla (from 60 MAD) is an Asilah specialty not widely found elsewhere. For the cheapest fresh fish, buy directly from the port market stalls and have them grill it on the spot (from 30 MAD). Lunch is better than dinner for the freshest fish — the fleet returns in the morning.',
  },
  {
    name: 'Medina Street Food & Cafes',
    icon: Coffee,
    category: 'Street Food & Cafes',
    price: 'From 10 MAD',
    duration: '1-2 hours',
    bestTime: 'Late morning or evening',
    description:
      'Asilah medina has a compact but delightful street food scene. Grilled sardine sandwiches (from 15 MAD) are the quintessential snack — seasoned with cumin and charmoula, served in fresh bread. Msemen flatbread with honey or cheese (from 5 MAD) is breakfast fuel. Fresh-squeezed orange juice stalls appear in season (from 5 MAD). Several small cafes within the medina serve excellent Moroccan mint tea in atmospheric settings with mural-covered walls. The area around the old market square has the best concentration of food stalls.',
    insiderTip:
      'For the best sardine sandwich in Asilah, look for the stalls near the medina entrance at Bab al-Homar — they are freshly grilled to order. Cafe Tanger inside the medina has good tea and views from the terrace. The evening promenade along Avenue Hassan II outside the medina is the social event of the day — join locals for an ice cream (from 10 MAD) and a stroll.',
  },
  {
    name: 'Asilah International Cultural Moussem (Arts Festival)',
    icon: Music,
    category: 'Cultural Festival',
    price: 'Free (most events)',
    duration: 'Multi-day (typically 2-3 weeks in August)',
    bestTime: 'August',
    description:
      'Founded in 1978 by former Asilah mayor Mohamed Benaissa, the International Cultural Moussem has transformed Asilah from a sleepy fishing town into one of the most important cultural destinations in Africa. Each August, international and Moroccan artists gather to paint new murals on the medina walls, replacing or refreshing the previous year artworks. The festival program includes live music, poetry readings, art exhibitions at Centre Hassan II, roundtable discussions on African and Arab culture, film screenings, and theatrical performances. It attracts artists, intellectuals, and tourists from around the world.',
    insiderTip:
      'Accommodation books up months in advance for the festival — reserve early. The most exciting days are when artists are actively painting murals — usually the first week. Most events are free but arrive early for popular performances. The festival energy transforms Asilah — the medina buzzes until late into the night. Even if you miss the festival, the murals remain year-round.',
  },
  {
    name: 'Evening Promenade & Avenue Hassan II',
    icon: Footprints,
    category: 'Local Experience',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Evening (7-10 PM)',
    description:
      'Every evening, Asilah comes alive with the traditional Moroccan promenade. Avenue Hassan II, the main boulevard connecting the new town to the medina, fills with families, couples, and groups of friends strolling, chatting, and stopping at ice cream shops and cafes. The atmosphere is convivial and welcoming. The promenade extends along the seafront corniche, where the Atlantic breeze keeps the evening cool. This is the authentic heart of Asilah social life — less performative than in larger cities, more genuinely communal.',
    insiderTip:
      'Join the promenade around 8 PM in summer (earlier in other seasons). Grab an ice cream from one of the parlors on Avenue Hassan II (from 10 MAD) and stroll toward the medina. The corniche walk toward the port is particularly pleasant. Café terraces along the avenue are perfect for people-watching. Friday and Saturday evenings are the liveliest.',
  },
];

/* ===============================================================
   DATA: DAY TRIPS & EXCURSIONS
   =============================================================== */

const dayTrips = [
  {
    name: 'Tangier Day Trip',
    icon: Compass,
    category: 'City Day Trip',
    price: 'From 25 MAD (train)',
    duration: 'Full day',
    description:
      'Tangier, just 45 minutes north by train, offers a perfect day trip from Asilah. Explore the atmospheric medina, visit the Kasbah Museum (from 20 MAD), wander to Petit Socco, lunch on street food, and catch sunset at the legendary Cafe Hafa overlooking the Strait of Gibraltar. The ONCF train runs multiple times daily (from 25 MAD). Grand taxis are also available (from 30 MAD shared). Return in the evening to Asilah peaceful calm — the contrast between vibrant Tangier and serene Asilah is part of the pleasure.',
    insiderTip:
      'Take the morning train to maximize your day in Tangier. Buy return tickets at Asilah station to avoid queues. The Tangier medina and Kasbah are walkable from Tangier Ville station. Cafe Hafa sunset is a must — bring cash (from 15 MAD for mint tea). Return on the last evening train to enjoy Asilah nighttime peace.',
  },
  {
    name: 'Larache & Lixus Ruins',
    icon: Landmark,
    category: 'Coastal Heritage',
    price: 'From 25 MAD (grand taxi)',
    duration: 'Half day',
    description:
      'Larache, 85 km south of Asilah, is a charming Spanish-colonial port town with its own whitewashed medina and a relaxed Atlantic atmosphere. The star attraction is the ancient Roman-Phoenician site of Lixus, dramatically perched on a hillside above the Loukkos River estuary just 4 km outside town. Lixus predates Volubilis and was one of the westernmost outposts of the Roman Empire. The ruins include a garum (fish sauce) factory, an amphitheater, a bath complex, and temple foundations. Larache town has excellent seafood restaurants and the Balcon de l Atlantique viewpoint.',
    insiderTip:
      'Grand taxis from Asilah to Larache cost from 25 MAD shared. Visit the Lixus ruins first (free entry, no fencing — explore freely but watch your step). Then descend to Larache for a seafood lunch at a port restaurant (from 50 MAD). The Spanish colonial architecture in the town center is worth a walk. Jean Genet, the French writer, is buried in the old Spanish cemetery overlooking the sea.',
  },
  {
    name: 'Moulay Bousselham Lagoon',
    icon: Eye,
    category: 'Nature & Birdwatching',
    price: 'From 40 MAD (transport)',
    duration: 'Half to full day',
    description:
      'The Merja Zerga (Blue Lagoon) at Moulay Bousselham, about 80 km south of Asilah, is one of Morocco most important wetlands and a Ramsar-designated site. The lagoon hosts flamingos, spoonbills, herons, terns, and during migration season (October-March), tens of thousands of wading birds and ducks. Boatmen offer lagoon tours to see the birds up close (from 150 MAD per boat). The fishing village of Moulay Bousselham has a wide sandy beach and a relaxed, authentic atmosphere far from tourist circuits.',
    insiderTip:
      'Hire a boat at the lagoon quay (from 150 MAD for 1-2 hours, negotiate). Early morning is best for birdwatching. Bring binoculars. The village beach is excellent for a swim after the lagoon tour. Simple but excellent seafood restaurants line the waterfront (from 50 MAD for a meal). This is deep Morocco — very few international tourists come here.',
  },
];

/* ===============================================================
   DATA: PRACTICAL INFO & ACCOMMODATION
   =============================================================== */

const practicalInfo = [
  { tip: 'Getting There from Tangier', icon: Compass, description: 'ONCF train from Tangier Ville station: from 25 MAD, 45 minutes, multiple daily. Grand taxi from Tangier: from 30 MAD shared. CTM bus: from 20 MAD. By car: 46 km south on the N1 motorway, about 45 minutes.' },
  { tip: 'Getting Around Asilah', icon: Footprints, description: 'Asilah is wonderfully walkable. The medina, port, town beach, and new town are all within 15 minutes on foot. For Paradise Beach (3 km), take a petit taxi (from 15 MAD) or walk along the coast. For Briech Beach, you need a taxi or car.' },
  { tip: 'Where to Stay', icon: BedDouble, description: 'Riads inside the medina offer the most atmospheric experience (from 400 MAD/night). Hotel Al Khaima near the beach is a mid-range option (from 600 MAD/night). Budget travelers find guesthouses from 200 MAD/night. During the August festival, book well in advance — prices increase.' },
  { tip: 'Best Time to Visit', icon: Calendar, description: 'June to September for beach weather and the August arts festival. April-May and October are pleasant with fewer crowds. Winter is mild (13-18 degrees) but rainy — the medina murals look beautiful in the rain. Avoid August weekends if you dislike crowds unless attending the festival.' },
  { tip: 'Money & Essentials', icon: ShoppingBag, description: 'ATMs are available on Avenue Hassan II and near the medina entrance. Most restaurants accept cash only. The weekly Thursday souk outside the medina is excellent for produce and household goods. Wi-Fi is available at most cafes and hotels.' },
  { tip: 'Safety & Etiquette', icon: CheckCircle, description: 'Asilah is very safe and tourist-friendly. Hassle is minimal compared to larger Moroccan cities. Dress modestly in the medina. Ask permission before photographing people. The locals are genuinely warm and accustomed to visitors. The evening promenade is a safe and enjoyable family activity.' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Morning Light for Photos', icon: Camera, description: 'The medina murals photograph best between 8-10 AM when soft morning light illuminates the whitewashed walls. The blue-and-white palette glows in this light. Return in the golden hour before sunset for the ramparts and port.' },
  { tip: 'Thursday Souk', icon: ShoppingBag, description: 'The weekly Thursday souk on the outskirts of town is where locals shop for fresh produce, spices, clothing, and household items. It is far more authentic (and cheaper) than any medina shop. Arrive early for the best selection.' },
  { tip: 'Respect the Murals', icon: Heart, description: 'The murals are Asilah cultural heritage. Do not touch, lean against, or deface them. Some visitors scratch their names into the artwork. Avoid contributing to this damage. Photograph freely but keep your distance from the painted surfaces.' },
  { tip: 'Off-Season Charm', icon: Sparkles, description: 'Asilah in the shoulder season (October-November, March-May) is hauntingly beautiful. The town empties of tourists, the light is extraordinary, and you will have the medina murals and ramparts largely to yourself. Seafood restaurants stay open year-round.' },
  { tip: 'Combine with Tangier', icon: Globe, description: 'Asilah works perfectly as a 1-2 night stay before or after Tangier. The contrast between buzzing Tangier and peaceful Asilah enriches both experiences. Many travelers fly into Tangier and spend their first or last night in Asilah.' },
  { tip: 'Watch the Sunset from the Ramparts', icon: Sunset, description: 'The western rampart wall offers one of Morocco finest sunset viewpoints. The sun drops directly into the Atlantic. Arrive 30 minutes early to secure a spot on the bastion near Borj al-Kamra. Bring a light jacket — the Atlantic breeze picks up at dusk.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Is Asilah worth visiting?', answer: 'Absolutely. Asilah is one of Morocco most charming coastal towns, with its whitewashed medina covered in world-class murals, Portuguese ramparts overlooking the Atlantic, excellent seafood, and a relaxed, welcoming atmosphere. It deserves at least a day trip from Tangier, though an overnight stay reveals its true character.' },
  { question: 'How do I get from Tangier to Asilah?', answer: 'ONCF train from Tangier Ville station takes 45 minutes and costs from 25 MAD. Grand taxis cost from 30 MAD shared per person. CTM bus costs from 20 MAD. By car, it is 46 km on the N1 highway, about 45 minutes.' },
  { question: 'When is the Asilah Arts Festival?', answer: 'The International Cultural Moussem typically takes place over 2-3 weeks in August (sometimes starting in late July). Artists paint new murals on medina walls, with concerts, exhibitions, and cultural events. Dates vary annually. Many murals remain visible year-round.' },
  { question: 'What is the best beach near Asilah?', answer: 'Paradise Beach (Rmilat Beach), about 3 km south of town, is the most popular with golden sand and calm waters. Briech Beach (15 km south) is wilder and more secluded. The town beach below the ramparts is small but atmospheric.' },
  { question: 'How many days do you need in Asilah?', answer: 'A day trip from Tangier covers the medina, murals, ramparts, and a seafood lunch. One overnight stay allows the sunset from the ramparts and the evening promenade. During the August festival, 2-3 nights are ideal. Asilah also makes an excellent base for exploring the region.' },
  { question: 'Where should I eat in Asilah?', answer: 'The port restaurants serve the freshest seafood — try Restaurant Al Alba or Restaurant Garcia (mains from 60 MAD). In the medina, stalls sell grilled sardine sandwiches (from 15 MAD). The seafood bastilla is a local specialty. Avenue Hassan II has cafes for mint tea and pastries.' },
  { question: 'Is Asilah safe?', answer: 'Asilah is one of the safest towns in Morocco for tourists. It is small, well-maintained, and the locals are friendly and accustomed to visitors. Hassle is minimal. Standard precautions apply — watch valuables in crowded areas. The evening promenade is a safe, family-friendly activity.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/tangier', icon: MapPin, title: 'Tangier City Guide', description: 'Complete guide to Tangier: neighborhoods, transport, accommodation, and planning.' },
  { href: '/things-to-do-tangier', icon: Compass, title: 'Things to Do in Tangier', description: 'Kasbah Museum, Cap Spartel, Hercules Caves, Cafe Hafa and more.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Sandy beaches, hidden coves, and surf breaks along the Atlantic and Mediterranean.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Tagine, couscous, seafood, street food — the complete cuisine guide.' },
  { href: '/budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to travel Morocco on a budget with tips for every region.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function AsilahGuidePage() {
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
            backgroundImage: 'url(/images/hero-tangier.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Asilah Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Palette className="w-4 h-4" />
            Complete City Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Asilah
            <br className="hidden md:block" /> Morocco Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The whitewashed coastal gem where Portuguese ramparts frame
            Atlantic sunsets and medina walls become living canvases of international art.
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
              The Art Town of the Atlantic
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Asilah is a small miracle. A fishing town of 30,000 people perched on the Atlantic
                coast 46 km south of Tangier, it has transformed itself into one of Morocco most
                important cultural destinations through the simple, radical act of painting its walls.
                Since 1978, when former mayor Mohamed Benaissa launched the International Cultural
                Moussem, artists from around the world have gathered each August to cover the
                medina whitewashed surfaces with vibrant murals, turning the entire old town into
                an open-air gallery.
              </p>
              <p>
                But Asilah is far more than its murals. The 15th-century Portuguese ramparts that
                encircle the medina are among the finest on the Moroccan coast, their massive stone
                walls rising directly above crashing Atlantic waves. The seafood, landed fresh each
                morning at the fishing port, is outstanding. Paradise Beach to the south offers
                golden sand and calm waters. And the town evening promenade along Avenue Hassan II
                is a masterclass in Moroccan social life — families strolling, ice cream in hand,
                in the soft Atlantic twilight.
              </p>
              <p>
                Most visitors experience Asilah as a day trip from Tangier, and while that works
                beautifully, spending a night or two reveals a different town entirely. The morning
                calm, when fishermen return with their catch and the medina alleys are empty of
                tourists, is when Asilah is at its most authentic. This guide covers everything
                you need to plan a visit — from the must-see murals and ramparts to the best
                beaches, restaurants, and practical logistics.
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
            Top 10 Things to Do in Asilah
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The essential experiences that define a visit to this enchanting Atlantic art town.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Medina Murals & Street Art Walk', price: 'Free', time: '1-2 hours', category: 'Art' },
              { rank: 2, name: 'Portuguese Ramparts at Sunset', price: 'Free', time: '45 min - 1 hour', category: 'Heritage' },
              { rank: 3, name: 'Paradise Beach', price: 'Free', time: '2-4 hours', category: 'Beach' },
              { rank: 4, name: 'Fresh Seafood at the Port', price: 'From 60 MAD', time: '1-2 hours', category: 'Dining' },
              { rank: 5, name: 'Raissouli Palace', price: 'Free / From 10 MAD', time: '30-45 min', category: 'History' },
              { rank: 6, name: 'Arts Festival (August)', price: 'Free', time: 'Multi-day', category: 'Festival' },
              { rank: 7, name: 'Evening Promenade', price: 'Free', time: '1-2 hours', category: 'Culture' },
              { rank: 8, name: 'Centre Hassan II Exhibitions', price: 'Free', time: '30 min - 1 hour', category: 'Art' },
              { rank: 9, name: 'Briech Beach', price: 'Free', time: '2-3 hours', category: 'Beach' },
              { rank: 10, name: 'Day Trip to Larache & Lixus', price: 'From 25 MAD', time: 'Half day', category: 'Day Trip' },
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

      {/* -- Medina & Cultural Sights -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Cultural Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From world-famous murals and Portuguese ramparts to a bandit palace and cultural exhibitions,
            Asilah medina packs extraordinary depth into a compact space.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina is small and walkable. Budget 2-3 hours to explore everything at a relaxed pace.
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

      {/* -- Beaches & Nature -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beaches &amp; Nature
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the sheltered golden sands of Paradise Beach to the wild Atlantic
            expanse of Briech, Asilah coast offers beaches for every taste.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach season runs June to September. Water temperatures range from 18 to 22 degrees Celsius.
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

      {/* -- Food & Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food, Culture &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the freshest Atlantic seafood and medina street food to the internationally
            acclaimed arts festival and the nightly promenade.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Asilah seafood is legendary — the port restaurants serve the catch of the day every lunchtime.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodExperiences.map((item) => {
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

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Asilah makes an excellent base for exploring the northern Atlantic coast,
            from Tangier to the ancient ruins of Lixus and the wetlands of Moulay Bousselham.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All day trips are easily accessible by grand taxi or public transport from Asilah.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((item) => {
              const TripIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* -- Practical Information -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Practical Information
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know for planning your visit to Asilah — transport, accommodation, timing, and essentials.
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Asilah
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to help you experience Asilah like more than a day-tripper.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Perfect Day in Asilah Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Whether on a day trip from Tangier or staying overnight, here is how to make the most of your time.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Medina &amp; Murals
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Arrive by train from Tangier (from 25 MAD, 45 minutes). Walk from the station to the medina
                    entrance at Bab al-Homar (10 minutes). Enter the medina and begin exploring the murals in
                    the morning light. Walk along Rue Ibn Khaldoun for the best concentration of artwork.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Visit Raissouli Palace if open (from 10 MAD). Walk the Portuguese ramparts for Atlantic
                    views. Check for exhibitions at Centre Hassan II (free). Stop for mint tea at a medina
                    cafe (from 10 MAD). Admire the Hassan II Mosque minaret and surrounding tilework.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Seafood &amp; Beach
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Lunch at a port restaurant — grilled fish, seafood bastilla, and fresh salad (from 80 MAD
                    for a full meal with drinks). Walk to Paradise Beach by taxi (from 15 MAD) or on foot
                    along the coast (30 minutes). Swim, sunbathe, and relax for 2-3 hours.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Return to town for the evening promenade along Avenue Hassan II (free). Grab an ice cream
                    (from 10 MAD) and join the locals strolling in the Atlantic breeze. Walk back to the
                    ramparts for sunset — the western bastion near Borj al-Kamra is the best viewpoint.
                    Estimated day cost: from 200-400 MAD (excluding transport from Tangier).
                  </p>
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
            Ready to Discover Asilah?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From medina murals and Portuguese ramparts to Paradise Beach and the freshest seafood on the
            Atlantic coast, Asilah is a jewel of northern Morocco waiting to be explored.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/tangier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Tangier City Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
            <Link
              href="/things-to-do-tangier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Things to Do in Tangier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
