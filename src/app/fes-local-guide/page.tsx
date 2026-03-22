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
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Coffee,
  Building2,
  Users,
  Flame,
  DollarSign,
  Navigation,
  BookOpen,
  Hammer,
  Mountain,
  TreesIcon,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Fes Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
  description:
    'Discover Fes beyond the tanneries. Explore Fes el-Jdid, Ville Nouvelle, Rcif square, Ain Azliten, deep medina workshops, local bakeries, real tannery tips, Bou Inania crowd-free visits, Borj Nord viewpoint, and where Fassis actually eat. Complete insider guide with prices in MAD.',
  keywords: [
    'fes like a local',
    'fes hidden gems',
    'fes local food',
    'fes neighborhoods',
    'fes off beaten path',
    'fes medina tips',
    'fes el jdid',
    'rcif square fes',
    'fes tanneries without scam',
    'fes local restaurants',
    'bou inania madrasa fes',
    'borj nord fes',
    'fes pottery quarter',
    'talaa kebira fes',
    'fes bakeries fernatchi',
    'jnan sbil gardens fes',
    'fes insider guide 2026',
    'fes medina guide',
  ],
  openGraph: {
    title: 'Fes Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
    description:
      'Beyond the tanneries: explore Fes el-Jdid, Ville Nouvelle, Rcif square, deep medina workshops, local bakeries, Borj Nord viewpoint, and where Fassis actually eat. The complete local insider guide.',
    url: `${BASE_URL}/fes-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes.webp`,
        width: 1200,
        height: 630,
        alt: 'View over the Fes medina rooftops with minarets and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fes Like a Local 2026: Hidden Gems & Neighborhoods',
    description:
      'Beyond the tanneries: Fes el-Jdid, Rcif square, deep medina workshops, local bakeries, Borj Nord, and where Fassis eat. Complete insider guide.',
    images: [`${BASE_URL}/images/hero-fes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/fes-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/fes-local-guide`,
  name: 'Fes Like a Local 2026: Hidden Gems, Neighborhoods & Where Locals Eat',
  description:
    'Discover Fes beyond the tanneries. Explore Fes el-Jdid, Ville Nouvelle, Rcif square, Ain Azliten, deep medina workshops, real tannery tips, Borj Nord viewpoint, and where Fassis actually eat.',
  url: `${BASE_URL}/fes-local-guide`,
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
  mainEntityOfPage: `${BASE_URL}/fes-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Fes',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Fes', item: `${BASE_URL}/fes` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/fes-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Where do locals eat in Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Fassis eat at the food stalls around Rcif Square (harira from 5 MAD, fried fish from 15 MAD), hole-in-the-wall restaurants on Talaa Seghira (kefta tagine from 25 MAD), the mechoui stalls near Bab Boujloud (slow-roasted lamb by weight from 80 MAD per kilo), and local bakeries (fernatchi) for fresh bread and pastries (from 2 MAD). They avoid the tourist restaurants inside Bab Boujloud with multilingual menus and fixed tourist prices.' } },
    { '@type': 'Question', name: 'How do I visit the Fes tanneries without being scammed?', acceptedAnswer: { '@type': 'Answer', text: 'The most common scam is being led to a tannery viewing terrace by a "helpful local" who then demands a large fee or pressures you into buying leather. To avoid this: approach the Chouara Tannery via GPS on your phone (not following guides), enter the leather shops on the terrace independently (say la shukran to touts), and understand that a small mint sprig is free but a large guide fee is not obligatory. If you want a guided view, negotiate from 20-30 MAD before entering. The best viewing time is mid-morning when the vats are most colorful.' } },
    { '@type': 'Question', name: 'What are the hidden gems of Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Hidden gems include: Borj Nord fortress for the best medina panorama (from 20 MAD), Jnan Sbil gardens for a peaceful escape (free), the pottery quarter in Fes el-Bali for watching artisans work, Ain Azliten neighborhood for untouristy medina life, the Vieux Mechouar area of Fes el-Jdid, Rcif Square for authentic local food, and the fondouks off Talaa Kebira where metalworkers and weavers ply their trades.' } },
    { '@type': 'Question', name: 'Is Fes medina safe to walk alone?', acceptedAnswer: { '@type': 'Answer', text: 'The Fes medina is generally safe during daytime. The main arteries (Talaa Kebira and Talaa Seghira) are always busy and well-trafficked. Side alleys are quiet but not dangerous — locals live in them. At night, stick to the main routes and well-lit areas. The biggest risk is not safety but getting lost. Use Google Maps offline or Maps.me — GPS works surprisingly well even in the medina. Ignore anyone who says "the road is closed" — it is a common trick to redirect you to a shop.' } },
    { '@type': 'Question', name: 'When is the best time to visit Bou Inania Madrasa?', acceptedAnswer: { '@type': 'Answer', text: 'Visit Bou Inania Madrasa right at opening time (9 AM) or in the last hour before closing (typically 5 PM in summer, 4 PM in winter) to avoid tour groups. Mid-morning (10-11 AM) is the busiest with organized tours. The afternoon light (3-4 PM) creates beautiful shadows on the carved stucco. Entry costs from 20 MAD. Fridays are quieter as some tour groups skip it. The madrasa is one of the few religious buildings in Morocco open to non-Muslims.' } },
    { '@type': 'Question', name: 'What is the difference between Talaa Kebira and Talaa Seghira?', acceptedAnswer: { '@type': 'Answer', text: 'Talaa Kebira (Grand Talaa) and Talaa Seghira (Small Talaa) are the two main arteries descending from Bab Boujloud into the medina. Talaa Kebira is wider, more touristy, with more prominent shops and the Bou Inania Madrasa. Talaa Seghira is narrower, less touristy, with more local shops, cheaper food stalls, and a more authentic atmosphere. Both eventually converge near Ain Allou. For the local experience, take Talaa Seghira down and Talaa Kebira back up.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Fes el-Jdid (New Fes)',
    icon: Landmark,
    category: 'Royal Quarter',
    vibe: 'Spacious, royal, less touristy',
    description:
      'Despite its name meaning "New Fes," Fes el-Jdid was founded in 1276 by the Marinid dynasty — making it merely 750 years old compared to the 1,200-year-old Fes el-Bali. This is where the Royal Palace (Dar el-Makhzen) stands behind its famous golden doors — the most photographed doors in Morocco. The vast palace complex covers 80 hectares but is closed to the public; the ornate brass doors with their geometric patterns are the attraction. Behind the palace lies the Vieux Mechouar (Old Parade Ground), an enormous open square where the sultan once reviewed troops and held audiences. The Mellah (Jewish quarter) of Fes el-Jdid has a distinct character: wider streets, balconied houses, and the Habarim Cemetery with its rows of white tombs. The area is dramatically less visited than Fes el-Bali and offers a quieter, more reflective experience.',
    insiderTip:
      'The Royal Palace doors are best photographed in the morning when the brass catches the eastern sun. Walk through the Mellah to see the distinctive wooden balconies — unique to the Jewish quarters. The small market inside the Mellah gate has excellent dates, nuts, and dried fruits at local prices (from 20-40 MAD per kilo). The Vieux Mechouar is eerie and atmospheric in the late afternoon light.',
  },
  {
    name: 'Ville Nouvelle (Modern Fes)',
    icon: Building2,
    category: 'Modern District',
    vibe: 'Contemporary, cafe culture, relaxed',
    description:
      'The Ville Nouvelle is where Fassis actually live their modern lives. Built during the French Protectorate, this wide-boulevarded district centered on Avenue Hassan II has none of the medina intensity but all of its charm in a different register. This is where you find the best cafes (Cafe Crystal is a local institution), contemporary restaurants, patisseries, bookshops, and the daily rhythm of Moroccan city life without a single tout or souvenir shop. The Central Market (Marche Central) sells fresh produce, olives, spices, and dairy at local prices — a fraction of what medina shops charge tourists. Avenue Hassan II has excellent clothes shopping and is where Fassis go for the evening promenade (passeggiata). For visitors exhausted by the medina labyrinth, the Ville Nouvelle is a welcome breath of fresh air and perspective.',
    insiderTip:
      'Visit the Central Market in the morning for the freshest produce and to see Fassi daily life. Cafe Crystal on Avenue Hassan II is the place to sit and watch the world go by over a nous-nous coffee (from 8 MAD). The patisseries along Avenue Mohammed V sell excellent Moroccan pastries (cornes de gazelle, briouates) at from 3-5 MAD each — compare with from 15-20 MAD at medina tourist shops.',
  },
  {
    name: 'Rcif Square & Surrounds',
    icon: Users,
    category: 'Local Hub',
    vibe: 'Bustling, authentic, cheapest food',
    description:
      'If Bab Boujloud is the tourist entrance to the medina, Rcif Square is the local one. This bustling plaza at the eastern end of the medina is the real commercial heart of Fes el-Bali — a place where locals shop, eat, and commute. The food stalls here serve the cheapest and most authentic meals in the city: steaming bowls of harira (from 4-5 MAD), fried fish (from 10-15 MAD), sandwiches stuffed with kefta or liver (from 8-12 MAD), and fresh-squeezed juices (from 5 MAD). The vegetable market behind the square has produce at prices that would shock anyone used to the medina tourist shops. The Rcif Mosque, one of the oldest in the city, overlooks the chaos. From Rcif, you can enter the medina and walk uphill through completely untouristy neighborhoods, arriving at Bab Boujloud from the back — seeing the real medina life that the main tourist route misses entirely.',
    insiderTip:
      'Arrive at Rcif before 10 AM when the food stalls are freshest and the square is at its most energetic. The liver sandwiches (bocadillo de foie) are a Fes specialty — do not leave without trying one (from 10 MAD). Take a petit taxi from the Ville Nouvelle (from 10-15 MAD) to Rcif and walk uphill through the medina — this reverse approach avoids the Bab Boujloud tout gauntlet.',
  },
  {
    name: 'Ain Azliten Neighborhood',
    icon: Heart,
    category: 'Residential Medina',
    vibe: 'Quiet, residential, untouched',
    description:
      'The Ain Azliten district in the northwestern part of the medina is where tourists almost never venture — and where medina life continues exactly as it has for centuries. Named after one of the oldest water sources in the city, this neighborhood is a maze of narrow residential lanes where children play, women gossip from windows, and the only sounds are the call to prayer and the distant hum of artisan workshops. There are no shops aimed at tourists, no multilingual signs, no touts. The architecture is raw and authentic: crumbling rammed-earth walls, carved plaster doorways, tiny neighborhood mosques with green-tiled minarets. Walking here feels like stepping back in time. The Ain Azliten water source itself, one of dozens of public fountains scattered through the medina, is a gathering point where locals fill water jugs and chat.',
    insiderTip:
      'Navigate by GPS (Google Maps offline works) as there are no street signs. Greet locals with "salam alaykum" and you will be met with genuine warmth — visitors are rare here and appreciated. The neighborhood is best explored in the morning when residents are out and about. Do not photograph people without asking. Carry a few coins for the neighborhood children who may offer to show you around.',
  },
  {
    name: 'Bab Boujloud to Deep Medina',
    icon: Compass,
    category: 'Medina Core',
    vibe: 'Famous gate, then surprising depths',
    description:
      'Everyone enters the medina through the iconic blue-tiled Bab Boujloud gate, and most tourists turn immediately onto Talaa Kebira, the main commercial artery. But the real treasures lie off the main routes. From Bab Boujloud, take Talaa Seghira (the smaller, less touristy parallel street) to find cheaper food stalls, local bakeries, and small workshops. Continue past the tourist zone — roughly 10 minutes walk from Bab Boujloud — and the medina transforms. The shops shift from souvenirs to daily necessities: hardware, fabric, vegetables, household goods. The lanes narrow, the ceilings lower, and you enter the working heart of the world largest car-free urban area. This is where 150,000 people live, work, and worship in a medieval labyrinth that UNESCO designated as a World Heritage Site. The fondouks (historic caravanserais) off the main routes house metalworkers, weavers, and tanners working in conditions unchanged for centuries.',
    insiderTip:
      'The "10-minute rule" transforms your Fes experience: walk 10 minutes beyond where most tourists stop, and the prices drop 50-70%, the touts vanish, and the authentic medina reveals itself. The fondouks are public — peek through any open door to see artisans at work. The deep medina is safe during the day but carry your phone with GPS for navigation.',
  },
  {
    name: 'Pottery Quarter (Quartier des Potiers)',
    icon: Hammer,
    category: 'Artisan District',
    vibe: 'Creative, dusty, workshops',
    description:
      'The pottery quarter (Ain Nokbi area), perched on the hillside east of the medina, is where Fes famous blue-and-white ceramics are made. Unlike the polished shops in the medina that sell finished pieces at tourist prices, here you see the entire process: clay being dug, shaped on foot-powered wheels, dried in the sun, hand-painted with traditional geometric and floral patterns, and fired in traditional wood-burning kilns. The artisans welcome visitors and will explain each step. Prices here are wholesale — a decorative plate that costs from 200-400 MAD in the medina sells for from 50-100 MAD directly from the workshop. The quarter also has excellent views over the medina from above. Fes pottery is distinct: the signature blue-and-white uses cobalt glaze, while the polychrome style incorporates green, yellow, and brown.',
    insiderTip:
      'Take a petit taxi to the pottery quarter (from 20-30 MAD from Bab Boujloud). The large cooperative workshops are more commercial; look for the small family workshops along the side streets for the best prices and most authentic interaction. Ask to try painting a piece yourself — many artisans will let you (free or for a small tip). Shipping services are available for larger purchases (from 200-500 MAD to Europe).',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD SPOTS
   =============================================================== */

const localFoodSpots = [
  {
    name: 'Rcif Square Street Food',
    icon: UtensilsCrossed,
    category: 'Authentic Street Food',
    price: 'From 5-20 MAD per item',
    description:
      'Rcif Square is the local food capital of Fes. The stalls here serve steaming bowls of harira (from 4-5 MAD — the Fassi version is thicker and more lentil-heavy than elsewhere in Morocco), fried fish with cumin and salt (from 10-15 MAD for a generous portion), liver sandwiches (bocadillo de foie, from 8-12 MAD — a Fes obsession), kefta brochettes with bread (from 10-15 MAD), and fresh-squeezed orange and pomegranate juice (from 5 MAD). Unlike the Bab Boujloud tourist restaurants with their multilingual menus and from 80-120 MAD set meals, Rcif food is priced for the locals who eat there daily. The quality is higher because the turnover is massive — everything is cooked fresh. This is where taxi drivers, market workers, and medina residents fuel their day.',
    insiderTip:
      'Try the fried sardines (from 10 MAD) — Fes is only 200 km from the Atlantic and the fish arrives fresh daily. The bessara stalls (fava bean soup, from 3-5 MAD) are a winter morning staple — thick, warming, and drizzled with olive oil and cumin. Eat standing at the counter like the locals do. Point at what you want if language is a barrier — the vendors are friendly and patient.',
  },
  {
    name: 'Local Bakeries (Fernatchi)',
    icon: Flame,
    category: 'Neighborhood Bakeries',
    price: 'From 2-10 MAD',
    description:
      'The fernatchi (communal bakery) is the beating heart of every Fes neighborhood. Twice a day, locals bring their own dough to be baked in the wood-fired oven for from 1-2 MAD per loaf — the baker stamps each family mark on the dough so they can collect the right bread. The bakeries also sell their own khobz (round bread from 2-3 MAD), msemen (from 3 MAD), harcha (semolina griddle bread from 3-5 MAD), and seasonal pastries. During Ramadan, the fernatchi becomes the neighborhood social center, with families bringing elaborate dishes to be slow-cooked in the oven ashes. The smell of baking bread in the medina lanes is one of the most evocative sensory experiences in Fes — follow your nose to the nearest fernatchi.',
    insiderTip:
      'Visit a fernatchi between 11 AM and 1 PM when the lunch bread is being baked — the lanes fill with the most incredible aroma. Buy a fresh-from-the-oven khobz (from 2 MAD) and eat it immediately with olives and cheese from a neighborhood shop (from 15-20 MAD for a full picnic). Ask the baker if you can watch the oven — they usually agree and are proud of their work.',
  },
  {
    name: 'Mechoui at Bab Boujloud',
    icon: UtensilsCrossed,
    category: 'Slow-Roasted Lamb',
    price: 'From 80 MAD per kilo',
    description:
      'Just outside Bab Boujloud gate, the mechoui stalls are a Fes institution. Whole lambs are slow-roasted in traditional underground clay ovens until the meat falls off the bone. You buy mechoui by weight — from 80-120 MAD per kilo — and it is served on butcher paper with cumin, salt, and fresh bread. A generous portion for one person costs from 40-60 MAD. The stalls with the longest local queues have the best-cooked lamb. This is the same mechoui served at Moroccan weddings and celebrations — it is a festive dish made accessible as daily street food. The stalls are busiest on Fridays after mosque and during the evening hours.',
    insiderTip:
      'The mechoui is best at lunchtime when fresh lamb comes out of the oven. Ask for "mechoui b el-milh ou kamoun" (mechoui with salt and cumin). Point to the piece you want — shoulder is the most tender, ribs have the most flavor. Share a kilo between two people with bread and a salad from a nearby stall for a feast under from 60 MAD per person. The stall on the left as you face Bab Boujloud (looking from outside) is consistently excellent.',
  },
  {
    name: 'Local Restaurants Without Tourist Menus',
    icon: Heart,
    category: 'Authentic Dining',
    price: 'From 25-60 MAD',
    description:
      'The best restaurants in Fes have no English menus, no TripAdvisor stickers, and no touts outside. Restaurant Bouiyad, tucked in the medina near Ain Allou, serves massive tagines for from 25-35 MAD. Cafe Clock on Derb el-Magana offers its famous camel burger (from 65 MAD) in a beautifully restored riad — it is one of the few tourist-oriented spots that locals also frequent. Chez Rachid near Rcif has the best pastilla (pigeon pie) in the city at from 40-50 MAD — vs. from 120-180 MAD at rooftop tourist restaurants. The restaurants along Talaa Seghira serve daily plats du jour (dish of the day) for from 25-35 MAD: usually a tagine, couscous, or grilled meat with bread and salad. These places serve dozens of locals daily — the food quality is consistently high because their reputation depends on it.',
    insiderTip:
      'Look for restaurants with handwritten Arabic-only menus — these are local. Ask "shnou kayn lyoum?" (what is there today?) and eat whatever they have prepared fresh. Fassi cuisine is distinct from the rest of Morocco: richer, more refined, with more preserved lemons, saffron, and honey. The pastilla (bastilla) originated in Fes and is at its finest here.',
  },
];

/* ===============================================================
   DATA: LOCAL EXPERIENCES
   =============================================================== */

const localExperiences = [
  {
    name: 'The Real Tannery Experience',
    icon: Eye,
    category: 'Without the Scam',
    price: 'From 0-30 MAD',
    duration: '30-45 minutes',
    description:
      'The Chouara Tannery is the most visited sight in Fes — and the most scam-ridden. Self-appointed guides lurk at every approach, claiming to be locals who will show you the way for free, then demanding from 100-200 MAD or pressuring you to buy leather at inflated prices. Here is how to do it right: navigate to the tannery using your phone GPS (search "Chouara Tannery" on Google Maps). Enter one of the leather shops on the terrace level independently — they will let you view from their balcony in exchange for browsing their products (no obligation to buy). A small mint sprig offered at the door is free (to combat the smell). If you genuinely want a guide, negotiate from 20-30 MAD BEFORE entering. The best viewing time is mid-morning (10-11 AM) when the workers are actively dyeing in the stone vats and the colors are most vivid.',
    insiderTip:
      'The Sidi Moussa tannery is smaller and far less touristy than Chouara — ask a local for directions. The smell is intense (animal hides, pigeon droppings used in the tanning process, and chemical dyes). The mint helps but does not eliminate it. Visit on a clear day for the best light on the vats. If buying leather, negotiate hard — prices on the terrace shops are 2-3x higher than leather shops in the deep medina or Ville Nouvelle.',
  },
  {
    name: 'Bou Inania Madrasa Crowd-Free',
    icon: BookOpen,
    category: 'Architectural Masterpiece',
    price: 'From 20 MAD',
    duration: '30-45 minutes',
    description:
      'The Bou Inania Madrasa, built in 1351-1356 by the Marinid Sultan Abou Inan Faris, is one of the finest examples of Islamic architecture in the world. Its carved stucco, zellige tilework, and cedar muqarnas (honeycomb vaulting) are breathtaking. However, the experience is often ruined by large tour groups packed into the small courtyard from 10 AM to 2 PM. The solution is timing. Visit at opening (9 AM) when you may have the courtyard entirely to yourself. Alternatively, arrive in the last hour before closing when the afternoon light creates magical shadows on the carved surfaces. The silence of an empty Bou Inania, with only the sound of the courtyard fountain, is one of Fes most spiritual experiences. This is one of the few religious buildings in Morocco open to non-Muslims.',
    insiderTip:
      'The carved stucco and zellige on the second-floor level are even more intricate than the ground floor — look up. Friday mornings are often quieter as some tour groups skip the madrasa. The water clock (clepsydra) on the exterior wall above the street is a medieval engineering marvel — 13 windows with bronze bowls, though the mechanism no longer works. Photograph the zellige details from multiple angles — the geometric patterns shift dramatically with the light.',
  },
  {
    name: 'Borj Nord Viewpoint',
    icon: Mountain,
    category: 'Panoramic View',
    price: 'From 20 MAD',
    duration: '1-1.5 hours',
    description:
      'For the definitive view of Fes, climb to Borj Nord — a 16th-century Saadian fortress perched on the hill north of the medina. The panorama from here is staggering: the entire Fes el-Bali medina spreads below you like a vast bowl, a carpet of flat rooftops punctuated by mosque minarets and the green-tiled roofs of madrasas. You can see the Kairaouine Mosque (the oldest university in the world, founded 859 AD), the tanneries, and the mountains beyond. The fortress itself houses a weapons museum with a collection of arms spanning from medieval to colonial periods. The walk up from the medina takes about 20 minutes and passes through the Merinid Tombs — ruined 14th-century royal tombs that are themselves a worthwhile viewpoint. Sunset from Borj Nord is one of Fes most magnificent free spectacles.',
    insiderTip:
      'Take a petit taxi to Borj Nord (from 15-20 MAD) to avoid the steep walk up, then walk down through the Merinid Tombs area. The best photography light is in the late afternoon when the medina glows golden. The tombs area can be quiet and isolated — visit during daylight. Bring water for the walk. The museum inside is worth 20 minutes if you are interested in historical weapons.',
  },
  {
    name: 'Jnan Sbil Gardens',
    icon: TreesIcon,
    category: 'Urban Oasis',
    price: 'Free',
    duration: '1-1.5 hours',
    description:
      'When the medina maze becomes overwhelming (and it will), Jnan Sbil is the antidote. These 7.5-hectare royal gardens, dating from the 18th century, were restored and opened to the public in 2011. Shaded by enormous bamboo groves, palms, olive trees, and flowering shrubs, the gardens are where Fassis come to decompress. Wide pathways wind past fountains, ornamental lakes, and manicured hedges. Families picnic on the grass, couples stroll the pathways, and elderly men play cards on the benches. The gardens sit between Fes el-Bali and Fes el-Jdid — a perfect transition point between the two historic quarters. There is no entrance fee, no touts, no hassle — just shade, birdsong, and peace.',
    insiderTip:
      'Enter from the Bou Jeloud side (near Place Boujloud) for the most scenic approach. The large bamboo grove in the center of the gardens creates an almost tropical microclimate. The gardens are busiest on Friday afternoons and weekend mornings — visit on a weekday morning for maximum tranquility. Combine with visits to Bab Boujloud and Fes el-Jdid for a half-day route that avoids the medina labyrinth entirely.',
  },
  {
    name: 'Fondouks & Artisan Workshops',
    icon: Hammer,
    category: 'Living Heritage',
    price: 'Free to explore',
    duration: '1-2 hours',
    description:
      'The fondouks (caravanserais) of Fes are the hidden soul of the medina. These centuries-old buildings were originally inns for traveling merchants — two-story structures built around an open courtyard, with stables on the ground floor and rooms above. Today, many function as artisan workshops: metalworkers hammering copper trays, weavers operating hand looms, leather workers stitching bags, and woodcarvers creating intricate mashrabiya screens. The fondouks off Talaa Kebira and around Place Seffarine (the coppersmiths square) are the most active. Place Seffarine itself is mesmerizing — the rhythmic hammering of copper echoes off the stone walls as artisans shape enormous trays, teapots, and lanterns using techniques unchanged for centuries. You can watch, photograph (ask first), and buy directly from the craftspeople at workshop prices.',
    insiderTip:
      'Place Seffarine is the most atmospheric spot in the entire medina — sit at the tiny cafe on the square and watch the coppersmiths work over mint tea (from 8 MAD). The fondouks are public buildings — walk in through any open door. The ground-floor workshops are the most accessible. If you want to buy, negotiate from workshop prices (much lower than shop prices). Commission-based guides lead tourists to specific shops that pay them 30-50% commission — shopping independently saves that markup.',
  },
];

/* ===============================================================
   DATA: TALAA COMPARISON
   =============================================================== */

const talaaComparison = [
  { aspect: 'Width', kebira: 'Wider, more comfortable', seghira: 'Narrower, more intimate' },
  { aspect: 'Tourists', kebira: 'Higher tourist traffic', seghira: 'Significantly fewer tourists' },
  { aspect: 'Food Prices', kebira: 'From 40-80 MAD for meals', seghira: 'From 15-35 MAD for same quality' },
  { aspect: 'Key Sight', kebira: 'Bou Inania Madrasa', seghira: 'Local bakeries and workshops' },
  { aspect: 'Shopping', kebira: 'Tourist-oriented souvenir shops', seghira: 'Local goods and daily necessities' },
  { aspect: 'Atmosphere', kebira: 'Polished, commercial', seghira: 'Raw, authentic, everyday life' },
  { aspect: 'Touts', kebira: 'Frequent approaches from guides', seghira: 'Almost none' },
  { aspect: 'Our Pick', kebira: 'Use for Bou Inania and orientation', seghira: 'Take this for the real Fes experience' },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Eat at Rcif, Not Bab Boujloud', icon: UtensilsCrossed, description: 'Rcif Square food stalls serve harira from 4 MAD, sandwiches from 8 MAD. Tourist restaurants at Bab Boujloud charge from 60-120 MAD for set menus of similar food.', savings: 'Save from 40-100 MAD per meal' },
  { tip: 'Walk Down Talaa Seghira', icon: Footprints, description: 'Talaa Seghira has the same medina experience as Talaa Kebira with 50-70% lower prices on food and crafts. Same distance, far fewer touts.', savings: 'Save from 30-50% on food & shopping' },
  { tip: 'Self-Navigate the Tanneries', icon: Navigation, description: 'Use GPS to reach the tanneries independently instead of accepting "free" guides who demand from 100-200 MAD. View from leather shop terraces (free entry, no purchase required).', savings: 'Save from 100-200 MAD per visit' },
  { tip: 'Buy Pottery at the Source', icon: Hammer, description: 'Pottery quarter workshop prices: decorative plate from 50-100 MAD. Same plate in medina shops: from 200-400 MAD. Take a taxi (from 20 MAD) and buy direct.', savings: 'Save from 100-300 MAD per piece' },
  { tip: 'Bakery Picnics', icon: Flame, description: 'Fresh khobz bread from 2 MAD, olives from 10 MAD, cheese from 10 MAD, fruit from 5 MAD. A full picnic for from 30 MAD vs. from 80-120 MAD restaurant lunch.', savings: 'Save from 50-90 MAD per meal' },
  { tip: 'Free Jnan Sbil Gardens', icon: TreesIcon, description: 'Jnan Sbil gardens are free, peaceful, and beautiful. Tourist alternatives: rooftop restaurant drinks from 40-80 MAD for a "relaxing break."', savings: 'Free vs. from 40-80 MAD' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'The Road Is Never Closed', icon: AlertTriangle, description: 'The most common scam in Fes: someone tells you "this road is closed" and offers to guide you another way — to a shop. Roads in the medina are never closed except during rare construction. Keep walking. A firm "la shukran" (no thank you) is all you need.' },
  { tip: 'GPS Works in the Medina', icon: Navigation, description: 'Download Google Maps or Maps.me offline before entering. GPS works surprisingly well even in the deepest medina alleys. This eliminates the "lost tourist" vulnerability that touts exploit. Navigate to specific landmarks for orientation.' },
  { tip: 'Reverse the Tourist Route', icon: Compass, description: 'Enter the medina from Rcif (take a petit taxi from Ville Nouvelle, from 10-15 MAD) and walk uphill to Bab Boujloud. You see the authentic medina first and end at the tourist area — a much better experience than the reverse.' },
  { tip: 'Best Photography Times', icon: Camera, description: 'The medina narrow lanes have dramatic light from 7-9 AM and 4-6 PM when shafts of sunlight penetrate the passages. Midday light is flat and harsh. The tannery vats photograph best at 10-11 AM. Borj Nord panorama is finest at sunset.' },
  { tip: 'Fassi Hospitality', icon: Heart, description: 'Fassis are among the most generous people in Morocco. If you are genuinely lost (not targeted by a tout), ask a shopkeeper or family — they will walk you to your destination personally. A small gift of pastries (from 10-20 MAD) is always appreciated in return.' },
  { tip: 'Medina Mule Traffic', icon: CheckCircle, description: 'Donkeys and mules are the medina delivery vehicles. When you hear "balak! balak!" (watch out!) press flat against the wall immediately. Mules loaded with goods have right of way in the narrow lanes and their loads can bruise. Stay alert in tight passages.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'Where do locals eat in Fes?', answer: 'Rcif Square for harira (from 4 MAD), fried fish (from 10 MAD), and liver sandwiches (from 8 MAD). Talaa Seghira for tagines (from 25 MAD). Mechoui stalls outside Bab Boujloud (from 40 MAD per portion). Local bakeries for bread and pastries (from 2 MAD). Avoid tourist restaurants with multilingual menus near Bab Boujloud.' },
  { question: 'How do I visit the tanneries without being scammed?', answer: 'Navigate by GPS, ignore "helpful" guides, enter leather shops on the terrace independently, browse without purchase obligation. If you want a guide, negotiate from 20-30 MAD BEFORE entering. The mint sprig is free. Mid-morning offers the best colors in the vats.' },
  { question: 'What are the hidden gems of Fes?', answer: 'Borj Nord viewpoint (from 20 MAD), Jnan Sbil gardens (free), pottery quarter workshops, Ain Azliten residential neighborhood, Rcif Square food scene, Place Seffarine coppersmiths, Vieux Mechouar in Fes el-Jdid, and the fondouks off Talaa Kebira.' },
  { question: 'Is the Fes medina safe to walk alone?', answer: 'Safe during daytime on main routes and side alleys. Use GPS for navigation. At night, stick to main arteries (Talaa Kebira, Talaa Seghira) and well-lit areas. The biggest risk is not danger but getting lost. Ignore "the road is closed" claims — it is always a scam.' },
  { question: 'When should I visit Bou Inania Madrasa?', answer: 'At opening (9 AM) or in the last hour before closing for an empty courtyard. Mid-morning (10-11 AM) is busiest with tour groups. The afternoon light creates the most beautiful shadows on carved stucco. Entry from 20 MAD. Fridays are often quieter.' },
  { question: 'Talaa Kebira or Talaa Seghira?', answer: 'Take Talaa Seghira going down (cheaper food, fewer tourists, more authentic) and Talaa Kebira coming back up (wider, Bou Inania Madrasa, orientation). Talaa Seghira food prices are 50-70% lower. Both start at Bab Boujloud and converge near Ain Allou.' },
  { question: 'How do I get around Fes?', answer: 'Petit taxis (red, metered, from 7 MAD minimum) between Ville Nouvelle, medina gates, and outlying areas. Within the medina: walking only — no vehicles are permitted in Fes el-Bali. The medina has 9,400+ alleys but only a few main routes. GPS and the main arteries (Talaa Kebira/Seghira) keep you oriented.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/fes', icon: MapPin, title: 'Fes City Guide', description: 'Complete guide to Fes: accommodations, transport, attractions, and trip planning.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'From tagine and couscous to pastilla and street food specialties.' },
  { href: '/best-riads-morocco', icon: Heart, title: 'Best Riads in Morocco', description: 'Handpicked traditional riads in Fes, Marrakech, and beyond.' },
  { href: '/marrakech-local-guide', icon: Compass, title: 'Marrakech Like a Local', description: 'Hidden gems, local food, and authentic neighborhoods in Marrakech.' },
  { href: '/morocco-budget-travel', icon: DollarSign, title: 'Morocco Budget Travel', description: 'How to travel Morocco affordably without missing the best experiences.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function FesLocalGuidePage() {
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
            <Link href="/fes" className="hover:text-white transition-colors">
              Fes
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Local Insider Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Fes Like
            <br className="hidden md:block" /> a Local
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond the tanneries: hidden neighborhoods, where Fassis actually eat, tannery tips without
            the scams, artisan workshops, crowd-free madrasas, and the local knowledge that transforms
            a maze into a home. Your 2026 insider guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The World&apos;s Largest Car-Free Urban Area — Like a Fassi
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Fes el-Bali is the world largest car-free urban area — a medieval labyrinth of 9,400+
                alleys where 150,000 people live, work, and worship in conditions essentially unchanged
                since the 9th century. It is also one of the most intimidating cities for tourists.
                The maze-like streets, aggressive touts, tannery scams, and disorienting scale send
                many visitors fleeing to their riad after a single morning.
              </p>
              <p>
                But Fes, experienced like a Fassi, is an entirely different city. It is the thick
                harira at a Rcif Square stall for 5 dirhams, eaten standing at a counter shoulder-to-shoulder
                with taxi drivers. It is the rhythmic hammering of copper at Place Seffarine, where
                artisans work in a fondouk that has operated continuously for 600 years. It is the
                silence inside Bou Inania Madrasa at 9 AM, before the tour groups arrive, when the
                only sound is water falling in the courtyard fountain.
              </p>
              <p>
                This guide takes you into that Fes. We cover the neighborhoods tourists miss, the food
                spots where locals eat, how to experience the tanneries without being scammed, crowd-free
                timing for the great monuments, the artisan workshops where you can buy direct, and
                practical navigation tips that turn the world most confusing medina into something
                manageable and magical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top Local Experiences -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Local Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The experiences that separate travelers from tourists in Fes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Rcif Square Street Food', price: 'From 5 MAD', time: '30-60 min', category: 'Local Food' },
              { rank: 2, name: 'Bou Inania at 9 AM', price: 'From 20 MAD', time: '30-45 min', category: 'Architecture' },
              { rank: 3, name: 'Borj Nord Sunset Panorama', price: 'From 20 MAD', time: '1-1.5 hours', category: 'Views' },
              { rank: 4, name: 'Place Seffarine Coppersmiths', price: 'Free', time: '30-60 min', category: 'Artisan' },
              { rank: 5, name: 'Self-Navigated Tanneries', price: 'Free', time: '30-45 min', category: 'Landmark' },
              { rank: 6, name: 'Talaa Seghira Walk', price: 'Free', time: '1-2 hours', category: 'Exploration' },
              { rank: 7, name: 'Jnan Sbil Gardens', price: 'Free', time: '1-1.5 hours', category: 'Nature' },
              { rank: 8, name: 'Pottery Quarter Workshops', price: 'Free to browse', time: '1-2 hours', category: 'Shopping' },
              { rank: 9, name: 'Mechoui at Bab Boujloud', price: 'From 40 MAD', time: '30-45 min', category: 'Food' },
              { rank: 10, name: 'Fes el-Jdid & Royal Palace', price: 'Free', time: '1-2 hours', category: 'Heritage' },
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

      {/* -- Neighborhoods Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Neighborhoods Beyond the Tourist Trail
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Six districts that reveal the real Fes — from the royal quarter of Fes el-Jdid to the
            untouched residential lanes of Ain Azliten.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina is walkable; Ville Nouvelle and the pottery quarter are accessible by petit taxi (from 10-30 MAD).
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {neighborhoods.map((hood) => {
              const HoodIcon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {hood.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {hood.vibe}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {hood.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {hood.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Where Locals Eat -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where Fassis Actually Eat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Skip the tourist restaurants at Bab Boujloud. These are the places locals go for the
            finest Fassi cuisine at real prices.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person. Fassi cuisine is the most refined in Morocco — even street food here is exceptional.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localFoodSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {spot.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {spot.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {spot.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {spot.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {spot.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Local Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Authentic Local Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From scam-free tannery visits to crowd-free madrasas and panoramic viewpoints — the
            experiences that define the real Fes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These experiences are available year-round. Timing recommendations maximize your experience.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {exp.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {exp.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {exp.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {exp.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Talaa Kebira vs Talaa Seghira -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Talaa Kebira vs. Talaa Seghira
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The two main medina arteries compared — which should you take?
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4">
              {talaaComparison.map((row) => (
                <div key={row.aspect} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {row.aspect}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                      <Landmark className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-blue-800 mb-0.5">Talaa Kebira</p>
                        <p className="text-xs text-blue-700">{row.kebira}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                      <Footprints className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-green-800 mb-0.5">Talaa Seghira</p>
                        <p className="text-xs text-green-700">{row.seghira}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips: Save Like a Fassi
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How locals stretch their dirhams in Fes — and how you can too.
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
            Insider Tips for Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that turns the world most confusing medina into a rewarding adventure.
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

      {/* -- Sample Local Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Day in Fes Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this itinerary to experience Fes the way Fassis do — no tourist traps, no overpriced guides, just the living medina.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Rcif &amp; Deep Medina
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM - Breakfast at Rcif</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a petit taxi from Ville Nouvelle to Rcif Square (from 10-15 MAD). Breakfast on harira, msemen, and fresh juice at the street stalls (from 15-20 MAD total). Enter the medina from Rcif and walk uphill through the residential neighborhoods — this reverse approach shows you the authentic medina first.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM - Bou Inania Empty</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive at Bou Inania Madrasa right at opening (from 20 MAD). Experience the courtyard in near-silence before the tour groups arrive at 10 AM. Then explore the fondouks and workshops off Talaa Kebira — peek through open doors to watch artisans at work.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Tanneries, Gardens &amp; Fes el-Jdid
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM - Self-Guided Tanneries</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Navigate to Chouara Tannery by GPS, ignoring tout approaches. View from the leather shop terraces independently. Continue to Place Seffarine for the coppersmiths and mint tea at the tiny square cafe (from 8 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">1:00 PM - Lunch &amp; Gardens</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Mechoui lunch at the Bab Boujloud stalls (from 40-60 MAD). Then walk through Jnan Sbil gardens for a peaceful break (free). Continue to Fes el-Jdid to photograph the Royal Palace golden doors and explore the quiet Mellah quarter.
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
                  Evening: Borj Nord &amp; Local Dinner
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">5:00 PM - Sunset at Borj Nord</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a petit taxi to Borj Nord (from 15-20 MAD). Watch the sunset over the medina from the fortress — the most spectacular view in Fes. Walk down through the Merinid Tombs as the city lights come on below.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM - Local Dinner</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Dinner at a local restaurant on Talaa Seghira — tagine or couscous for from 25-40 MAD. Or return to Rcif for evening street food. Total day cost: from 150-250 MAD — a fraction of the tourist itinerary, with triple the authenticity.
                    </p>
                  </div>
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
            Continue Exploring Fes
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
            Ready to Explore the Real Fes?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Navigate the world largest medieval medina like a local — authentic food, real artisan workshops,
            scam-free tannery visits, and the hidden neighborhoods that most tourists never discover.
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
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Morocco Food Guide
            </Link>
            <Link
              href="/marrakech-local-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Compass className="w-5 h-5" />
              Marrakech Like a Local
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
