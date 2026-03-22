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
  Waves,
  Mountain,
  Gem,
  Shield,
  Users,
  Car,
  Hammer,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Tiznit Guide 2026 | Silver Jewelry Capital & Anti-Atlas Gateway',
  description:
    'Complete guide to Tiznit, Morocco — the silver jewelry capital. Explore silver souks, Amazigh workshops, the walled medina with 5km ramparts, Ain Aqdim blue spring, Aglou Beach, and day trips to Tafraout and the Anti-Atlas mountains. Prices in MAD.',
  keywords: [
    'tiznit morocco',
    'tiznit silver jewelry',
    'tiznit medina',
    'tiznit souk',
    'tiznit guide',
    'tiznit to tafraout',
    'tiznit things to do',
    'tiznit ramparts',
    'ain aqdim tiznit',
    'tiznit anti atlas',
    'tiznit silver market',
    'tiznit artisans',
    'aglou beach tiznit',
    'tiznit morocco guide',
    'tiznit travel guide 2026',
    'tiznit amazigh heritage',
    'musee du patrimoine amazighe tiznit',
    'tiznit leather goods',
    'silver jewelry morocco',
    'anti atlas road trip',
  ],
  openGraph: {
    title: 'Tiznit Guide 2026 | Silver Jewelry Capital & Anti-Atlas Gateway',
    description:
      'Discover Tiznit, the silver jewelry capital of Morocco. Walled medina, Amazigh heritage, artisan workshops, Aglou Beach, and gateway to the Anti-Atlas. Complete guide with prices.',
    url: `${BASE_URL}/tiznit-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tiznit.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional silver jewelry artisan workshop in the old medina of Tiznit, Morocco with intricate Amazigh designs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiznit Guide 2026 | Silver Capital of Morocco',
    description:
      'Silver souks, walled medina, Ain Aqdim spring, Amazigh heritage, Aglou Beach, and Anti-Atlas day trips. Complete Tiznit guide with real prices.',
    images: [`${BASE_URL}/images/hero-tiznit.webp`],
  },
  alternates: { canonical: `${BASE_URL}/tiznit-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/tiznit-guide`,
  name: 'Tiznit Guide 2026 | Silver Jewelry Capital & Anti-Atlas Gateway',
  description:
    'Complete guide to Tiznit, Morocco — the silver jewelry capital. Explore silver souks, Amazigh workshops, the walled medina, Ain Aqdim spring, Aglou Beach, and day trips to the Anti-Atlas.',
  url: `${BASE_URL}/tiznit-guide`,
  image: `${BASE_URL}/images/hero-tiznit.webp`,
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
  mainEntityOfPage: `${BASE_URL}/tiznit-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Tiznit',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tiznit Guide', item: `${BASE_URL}/tiznit-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Tiznit known for?', acceptedAnswer: { '@type': 'Answer', text: 'Tiznit is renowned as the silver jewelry capital of Morocco. The city is home to hundreds of Amazigh (Berber) silversmiths who produce traditional fibulas, bracelets, rings, and necklaces using centuries-old techniques. The silver souk in the medina is the best place in Morocco to buy authentic handcrafted silver jewelry at fair prices.' } },
    { '@type': 'Question', name: 'How do I get to Tiznit?', acceptedAnswer: { '@type': 'Answer', text: 'Tiznit is 95 km south of Agadir (about 1.5 hours by car or bus). Regular CTM and Supratours buses connect Agadir to Tiznit (from 40 MAD). Grand taxis also run the route (from 35 MAD). The nearest airport is Agadir Al-Massira. From Marrakech, it is about 4.5 hours by bus (from 120 MAD).' } },
    { '@type': 'Question', name: 'How many days should I spend in Tiznit?', acceptedAnswer: { '@type': 'Answer', text: 'One to two days is ideal. Day 1: explore the medina, silver souk, Ain Aqdim spring, Great Mosque, and ramparts. Day 2: visit Aglou Beach (15 km), or take a day trip to Tafraout in the Anti-Atlas (about 2 hours). If you are interested in silver jewelry workshops, allow extra time for demonstrations and shopping.' } },
    { '@type': 'Question', name: 'Is Tiznit silver real silver?', acceptedAnswer: { '@type': 'Answer', text: 'Most traditional Tiznit jewelry is made from genuine silver, though purity varies. Look for hallmarks and buy from established workshops rather than random stalls. Reputable artisans will explain the silver content. Pure silver (925) pieces cost more; many traditional designs use 800-grade silver. Bargaining is expected but start respectfully.' } },
    { '@type': 'Question', name: 'Can I visit silver workshops in Tiznit?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, many silversmiths in the medina welcome visitors to watch them work. The Ensemble Artisanal (government-run craft center) offers fixed-price shopping and workshop demonstrations. Individual artisans in the silver souk area will often demonstrate techniques like engraving, filigree, and stone-setting. A small tip (from 20 MAD) is appreciated when watching private workshops.' } },
    { '@type': 'Question', name: 'What is the best time to visit Tiznit?', acceptedAnswer: { '@type': 'Answer', text: 'October to April offers the best weather with mild temperatures (18-25 degrees). Summer (June-August) can be very hot, often exceeding 40 degrees, though the coastal breeze from nearby Aglou Beach helps. The Thursday market is the main weekly souk. Ramadan timings affect shop hours.' } },
    { '@type': 'Question', name: 'Is Tiznit worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Tiznit offers an authentic Moroccan experience far from mass tourism. The silver souk is unmatched in Morocco, the walled medina is atmospheric yet easy to navigate, and the town serves as the perfect gateway to the stunning Anti-Atlas mountains and the remote southern coast. It pairs perfectly with Tafraout, Sidi Ifni, and Aglou Beach.' } },
  ],
};

/* ===============================================================
   DATA: SILVER & ARTISAN HERITAGE
   =============================================================== */

const silverAttractions = [
  {
    name: 'Silver Jewelry Souk',
    icon: Gem,
    category: 'Artisan Market',
    price: 'Free to browse / Jewelry from 50 MAD',
    duration: '1-3 hours',
    bestTime: 'Morning (9-12 AM)',
    description:
      'The heart of Tiznit and the reason most travelers come here. The silver souk occupies a dedicated quarter of the medina, with dozens of workshops and stalls displaying an extraordinary array of Amazigh jewelry. Fibulas (tizerzai) — the ornate clasps used to fasten traditional garments — are the signature piece, alongside heavy silver bracelets (isbg), anklets, necklaces strung with amber and coral beads, rings engraved with Amazigh geometric motifs, and elaborate headpieces. Each piece tells a story rooted in centuries of Amazigh symbolism — diamonds represent eyes, triangles symbolize femininity, and zigzag lines evoke water and fertility.',
    insiderTip:
      'Visit in the morning when silversmiths are actively working and the light is best for examining pieces. Prices are negotiable — start at roughly 40-50% of the asking price for tourist-oriented stalls, but in established workshops with marked prices, bargaining is more modest. Ask artisans to explain the symbolism of the designs; most are happy to share their heritage.',
  },
  {
    name: 'Silver Artisan Workshops',
    icon: Hammer,
    category: 'Cultural Experience',
    price: 'Free to watch / Tip from 20 MAD',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'Beyond the souk stalls, the real magic of Tiznit lies in the workshops where master silversmiths (maalems) practice their craft. Sitting cross-legged at low workbenches, they use techniques passed down through generations — hand-engraving intricate patterns with tiny chisels, creating delicate filigree from drawn silver wire, setting semiprecious stones, and applying niello (a black alloy inlay) to create contrast in the designs. Some families have been working silver in Tiznit for five or six generations. Watching a fibula take shape from a flat disc of silver is mesmerizing.',
    insiderTip:
      'The Ensemble Artisanal on the edge of the medina offers a more organized workshop experience with fixed prices. For a deeper experience, ask at your accommodation for a recommendation to a family workshop. Commissions are possible — a custom piece takes 1-3 days depending on complexity and costs from 200-2,000 MAD depending on weight and intricacy.',
  },
  {
    name: 'Ensemble Artisanal',
    icon: ShoppingBag,
    category: 'Government Craft Center',
    price: 'Free entry / Crafts from 30 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning or afternoon',
    description:
      'This government-operated craft center on the edge of the medina showcases the full range of Tiznit artisanal production. Silver jewelry is the star, but you will also find leather goods, woven textiles, carpets, and wooden items. The center exists to support local artisans and offer visitors fair, fixed prices — eliminating the need for haggling. Quality is guaranteed and each piece comes with a certificate of authenticity. It is an excellent place to compare styles and prices before diving into the souk.',
    insiderTip:
      'Use the Ensemble Artisanal as your price benchmark. Note the quality and pricing of pieces here, then compare with what you find in the souk. The center also has working demonstrations. Staff speak French and often some English. Credit cards are accepted here, unlike most souk stalls.',
  },
];

/* ===============================================================
   DATA: MEDINA & HISTORICAL SIGHTS
   =============================================================== */

const medinaAttractions = [
  {
    name: 'Old Medina & 5km Ramparts',
    icon: Shield,
    category: 'Historic Quarter',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning or late afternoon',
    description:
      'Tiznit medina is a relatively modern creation by Moroccan standards — it was established in 1882 by Sultan Hassan I as a military outpost to pacify the Souss region. Yet the 5-kilometer circuit of crenellated pisé ramparts, punctuated by square towers and eight historic gates (babs), gives it an ancient, fortress-like character. Inside, the low-rise streets are quieter and more manageable than Fes or Marrakech, making it perfect for unhurried exploration. The ochre and terracotta buildings, narrow alleys, and small neighborhood mosques create an authentically Moroccan atmosphere without the tourist-driven intensity of larger cities.',
    insiderTip:
      'Walk the full circuit of the ramparts — best done in the golden hour before sunset. Start at Bab Aglou (the southern gate) and follow the walls clockwise. The ramparts are not walkable on top but the perimeter path offers excellent views. Inside the medina, the absence of tourist crowds means genuine interactions with residents.',
  },
  {
    name: 'Ain Aqdim (Blue Spring)',
    icon: Waves,
    category: 'Natural & Sacred Site',
    price: 'Free',
    duration: '20-30 minutes',
    bestTime: 'Any time',
    description:
      'This natural spring in the heart of the medina is the reason Tiznit exists. According to legend, a holy woman named Lalla Tiznit discovered the spring, and the city grew around it. The source, housed in a small blue-tiled basin surrounded by a shaded square, still flows today and remains a sacred site for locals. The turquoise water against the blue tiles creates a serene, photogenic spot amid the ochre medina. A small adjacent mosque adds to the spiritual atmosphere. It is a quiet, contemplative place that connects you to the city origins.',
    insiderTip:
      'The spring is easy to miss — ask for "Ain Aqdim" or "la source bleue" and locals will point you in the right direction. It is located near the center of the medina. Respectful behavior is expected as it is a sacred site. The blue-tiled enclosure photographs beautifully in midday light when the tiles are most vivid.',
  },
  {
    name: 'Great Mosque of Tiznit',
    icon: Landmark,
    category: 'Religious Architecture',
    price: 'Free (exterior only, non-Muslims cannot enter)',
    duration: '15-20 minutes',
    bestTime: 'Morning',
    description:
      'The Great Mosque of Tiznit, built during Sultan Hassan I establishment of the city in 1882, features a distinctive minaret adorned with protruding wooden poles — the "toothpick" style characteristic of Souss-region mosques. This style, unique to southern Morocco, uses wooden beam ends jutting from the tower as permanent scaffolding for maintenance and to support nesting storks. The mosque sits at the spiritual heart of the medina and the surrounding square is a natural gathering place. While non-Muslims cannot enter, the exterior architecture is fascinating.',
    insiderTip:
      'The wooden-pole minaret style is particular to the Souss and Anti-Atlas region — you will see similar minarets in Taroudant and Tafraout. The best photographs are from the small square in front, where the minaret rises above the surrounding buildings. Look for stork nests on the protruding beams, especially in spring.',
  },
  {
    name: 'Mechouar (Parade Square)',
    icon: Globe,
    category: 'Historic Square',
    price: 'Free',
    duration: '15-20 minutes',
    bestTime: 'Any time',
    description:
      'The mechouar is a large open square historically used for military parades and gatherings during the days when Tiznit served as a garrison town for Sultan Hassan I. Framed by sections of the ramparts and overlooked by the old administrative buildings, the mechouar retains a sense of civic grandeur. Today it serves as a communal gathering space, car park, and the site of occasional festivals and events. The scale of the square underscores Tiznit military origins — this was a town built for control and order.',
    insiderTip:
      'The mechouar is best appreciated as part of a broader medina walk rather than a standalone visit. It provides excellent views of the ramparts from inside the walls. On market days and during festivals, the square comes alive with activity.',
  },
];

/* ===============================================================
   DATA: MUSEUM & CULTURE
   =============================================================== */

const culturalAttractions = [
  {
    name: 'Musée du Patrimoine Amazighe',
    icon: Landmark,
    category: 'Museum',
    price: 'From 10 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'This small but excellent museum dedicated to Amazigh (Berber) heritage is housed in a restored building within the medina. The collection showcases traditional Amazigh artifacts from the Souss and Anti-Atlas regions: jewelry (naturally featuring Tiznit silver), textiles, carpets, weapons, musical instruments, pottery, and domestic objects. Interpretive panels explain the symbolism behind the geometric patterns found in Amazigh art and the cultural significance of different jewelry pieces. The museum provides essential context for understanding the silver jewelry you will see in the souk.',
    insiderTip:
      'Visit this museum before going to the silver souk — the explanations of Amazigh symbolism will make your souk experience far richer. The museum is small and can be covered in under an hour. Labels are in Arabic and French. Photography is usually permitted.',
  },
  {
    name: 'Tiznit Leather Goods',
    icon: ShoppingBag,
    category: 'Traditional Craft',
    price: 'Babouches from 80 MAD / Bags from 150 MAD',
    duration: '30 minutes - 1 hour',
    bestTime: 'Morning',
    description:
      'While silver dominates Tiznit artisanal reputation, the city also produces excellent leather goods. The Souss region has a long leatherworking tradition and Tiznit workshops turn out handmade babouches (traditional slippers), belts, bags, wallets, and sandals. The leather is locally tanned and dyed, and the craftsmanship — particularly the embroidered and tooled babouches — rivals anything found in Fes or Marrakech at a fraction of the price. The main leather stalls are found in the souk near the silver quarter.',
    insiderTip:
      'Tiznit babouches are considered among the best in Morocco. The pointed-toe style of the Souss region is distinctive. Expect to pay from 80-200 MAD for a quality pair (much less than Marrakech). Check the stitching and sole attachment. Leather bags (from 150-500 MAD) are also excellent value.',
  },
  {
    name: 'Thursday Weekly Market',
    icon: Users,
    category: 'Local Market',
    price: 'Free entry',
    duration: '1-2 hours',
    bestTime: 'Thursday morning (8-12 PM)',
    description:
      'The weekly Thursday market transforms the area around the medina walls into a vast, bustling marketplace. Farmers, herders, and traders from surrounding villages and the Anti-Atlas mountains converge on Tiznit to sell produce, livestock, spices, household goods, clothing, and crafts. The market is overwhelmingly local — this is not a tourist event but the real commercial heartbeat of the region. Piles of seasonal vegetables, sacks of cumin and saffron, crates of live chickens, and bolts of fabric create a sensory overload.',
    insiderTip:
      'Arrive early (before 10 AM) for the best experience. The livestock section on the outskirts is fascinating. This is where you will find argan oil (from 80 MAD per liter), local honey (from 60 MAD), and dried herbs at genuine local prices. Very few tourists attend, so expect minimal English but maximum authenticity.',
  },
];

/* ===============================================================
   DATA: EXCURSIONS & NATURE
   =============================================================== */

const excursions = [
  {
    name: 'Aglou Beach',
    icon: Waves,
    category: 'Coastal Escape',
    price: 'Free / Grand taxi from 15 MAD',
    duration: 'Half day',
    bestTime: 'Morning or afternoon',
    description:
      'This wild Atlantic beach just 15 km northwest of Tiznit is a world away from the manicured resort beaches of Agadir. A long, broad stretch of golden sand backed by low cliffs, Aglou sees strong surf and consistent Atlantic swells. The beach is popular with local surfers and body-boarders. A small fishing village sits at the northern end, and cave dwellings carved into the cliffs (troglodyte houses) are visible along the shore. In summer, Moroccan families camp here. The seafood at the village restaurants is fresh and cheap.',
    insiderTip:
      'Grand taxis from Tiznit to Aglou cost from 15 MAD per person (shared). The beach has strong currents — swim with caution. The cave dwellings along the cliffs are worth exploring but watch your footing. For lunch, try the simple beach restaurants for fresh grilled fish (from 40 MAD). Bring water and sun protection as there is little shade.',
  },
  {
    name: 'Day Trip to Tafraout',
    icon: Mountain,
    category: 'Mountain Excursion',
    price: 'Grand taxi from 40 MAD / Rental car recommended',
    duration: 'Full day',
    bestTime: 'February-April (almond blossoms)',
    description:
      'The spectacular town of Tafraout, nestled in a valley of pink granite boulders in the Anti-Atlas mountains, is one of southern Morocco best-kept secrets. The drive from Tiznit (about 100 km, 2 hours) is itself an adventure — winding through the Anti-Atlas passes with views of terraced hillsides, Amazigh villages clinging to cliffs, and vast rocky landscapes. In Tafraout, explore the famous painted rocks (boulders painted blue by Belgian artist Jean Verame in 1984), the Lion Face rock formation, the almond groves (spectacular when blooming in February), and the beautiful Ameln Valley.',
    insiderTip:
      'A rental car gives the most flexibility for this trip. Grand taxis run from Tiznit but return options can be limited in the afternoon. The February almond blossom festival is the best time to visit. The Ameln Valley villages like Oumesnat offer homestay experiences. Stock up on almonds and argan oil at Tafraout prices (much cheaper than Marrakech).',
  },
  {
    name: 'Anti-Atlas Road Trip',
    icon: Car,
    category: 'Scenic Drive',
    price: 'Rental car from 300 MAD/day',
    duration: '1-3 days',
    bestTime: 'October-April',
    description:
      'Tiznit is the ideal base for exploring the Anti-Atlas — one of Morocco most spectacular and least-visited mountain ranges. Possible routes include: Tiznit to Tafraout via the Col du Kerdous (stunning mountain pass with a historic kasbah hotel), Tafraout to Igherm through the Ameln Valley, the circuit through the painted rocks and Afella-Ighir, or south toward Sidi Ifni along the coastal road. The Anti-Atlas landscape is unlike anywhere else in Morocco — eroded granite formations, palm-filled gorges, ancient agadirs (fortified granaries) perched on hilltops, and Amazigh villages seemingly carved from the rock.',
    insiderTip:
      'The roads in the Anti-Atlas are generally good tarmac but narrow and winding. A standard car is fine for the main routes. Allow extra time for the many photo stops. Fuel stations are infrequent — fill up in Tiznit before heading into the mountains. The Col du Kerdous pass offers one of the most dramatic viewpoints in southern Morocco.',
  },
];

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  { tip: 'Silver Souk Price Strategy', icon: Gem, description: 'Research silver prices per gram before visiting (roughly 8-15 MAD per gram for 800-grade silver). Weigh pieces on the jeweler scale to get a fair base price, then factor in craftsmanship. Avoids overpaying.', savings: 'Save from 30-50% vs. tourist prices' },
  { tip: 'Ensemble Artisanal for Benchmarking', icon: ShoppingBag, description: 'Visit the government craft center first to understand fair fixed prices. Use these as your reference when bargaining in the souk. Fixed prices are often close to what you can negotiate elsewhere.', savings: 'Avoid overpaying for crafts' },
  { tip: 'Eat in Local Restaurants', icon: UtensilsCrossed, description: 'Local eateries around the medina serve tagines (from 25-40 MAD), grilled meat plates (from 30 MAD), and sandwiches (from 15 MAD). Tourist-oriented restaurants charge from 80-150 MAD for the same dishes.', savings: 'Save from 40-100 MAD per meal' },
  { tip: 'Shared Grand Taxis', icon: Car, description: 'Shared grand taxis to Agadir (from 35 MAD), Aglou Beach (from 15 MAD), and Tafraout (from 40 MAD) are cheap and reliable. Private taxis cost 6x more. Wait for the taxi to fill or pay for extra seats.', savings: 'Save from 100-200 MAD vs. private' },
  { tip: 'Explore on Foot', icon: Footprints, description: 'The medina, ramparts, Ain Aqdim, Great Mosque, Mechouar, and all souks are walkable within minutes. No taxi or guide needed inside the walls. Tiznit compact size is a budget traveler dream.', savings: 'Free — the entire medina' },
  { tip: 'Buy Argan Oil at Source', icon: Heart, description: 'Argan oil from the Thursday market or local cooperatives costs from 60-100 MAD per liter. The same oil in Marrakech or Essaouira runs from 200-400 MAD. Stock up here.', savings: 'Save from 100-300 MAD per liter' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Silver Authentication', icon: Gem, description: 'Real silver has a slight weight and coolness to it. Ask the artisan to stamp or scratch-test the piece. Reputable workshops will show the silver content. Avoid pieces that look too shiny — real handworked silver has a matte, slightly warm patina.' },
  { tip: 'Learn Basic Tashelhit', icon: Globe, description: 'Tiznit is Amazigh-speaking (Tashelhit dialect). While Arabic and French work, a few Tashelhit words earn enormous goodwill: "azul" (hello), "tanmmirt" (thank you), "manzakin" (how are you). Locals light up when visitors try.' },
  { tip: 'Respect Workshop Etiquette', icon: CheckCircle, description: 'When visiting silver workshops, ask permission before photographing artisans at work. Do not touch tools or works in progress. A small purchase or tip (from 20 MAD) is the polite way to show appreciation for a demonstration.' },
  { tip: 'Tiznit as a Base', icon: MapPin, description: 'Tiznit is better positioned than Agadir for exploring the Anti-Atlas, Aglou Beach, Tafraout, and Sidi Ifni. Hotels are much cheaper too (from 150 MAD for a decent room). Consider basing yourself here for 2-3 nights.' },
  { tip: 'Heat Warning in Summer', icon: AlertTriangle, description: 'June through August temperatures regularly exceed 40 degrees in Tiznit. The medina offers shade but afternoons are brutal. Plan outdoor activities for early morning and evening. The coast at Aglou is significantly cooler.' },
  { tip: 'Best Photography Spots', icon: Camera, description: 'Top shots: the silver souk craftsmen at work (with permission), Ain Aqdim blue spring, the Great Mosque minaret with its wooden poles, the ramparts at golden hour, and the panoramic views from outside Bab Aglou.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is Tiznit known for?', answer: 'Tiznit is renowned as the silver jewelry capital of Morocco. The city is home to hundreds of Amazigh (Berber) silversmiths who produce traditional fibulas, bracelets, rings, and necklaces using centuries-old techniques. The silver souk in the medina is the best place in Morocco to buy authentic handcrafted silver jewelry at fair prices.' },
  { question: 'How do I get to Tiznit?', answer: 'Tiznit is 95 km south of Agadir (about 1.5 hours by car or bus). Regular CTM and Supratours buses connect Agadir to Tiznit (from 40 MAD). Grand taxis also run the route (from 35 MAD). The nearest airport is Agadir Al-Massira. From Marrakech, it is about 4.5 hours by bus (from 120 MAD).' },
  { question: 'How many days should I spend in Tiznit?', answer: 'One to two days is ideal. Day 1: explore the medina, silver souk, Ain Aqdim spring, Great Mosque, and ramparts. Day 2: visit Aglou Beach (15 km) or take a day trip to Tafraout in the Anti-Atlas (about 2 hours). If interested in silver workshops, allow extra time for demonstrations and shopping.' },
  { question: 'Is Tiznit silver real silver?', answer: 'Most traditional Tiznit jewelry is made from genuine silver, though purity varies. Look for hallmarks and buy from established workshops. Pure silver (925) pieces cost more; many traditional designs use 800-grade silver. The Ensemble Artisanal offers authenticated pieces with certificates.' },
  { question: 'Can I visit silver workshops in Tiznit?', answer: 'Yes, many silversmiths welcome visitors. The Ensemble Artisanal offers organized demonstrations. Individual artisans in the silver souk will often demonstrate techniques like engraving, filigree, and stone-setting. A small tip (from 20 MAD) is appreciated when watching private workshops.' },
  { question: 'What is the best time to visit Tiznit?', answer: 'October to April offers the best weather (18-25 degrees). Summer can exceed 40 degrees. February is ideal if combining with Tafraout for the almond blossom festival. Thursday is market day. Spring and autumn are perfect for Anti-Atlas road trips.' },
  { question: 'Is Tiznit worth visiting?', answer: 'Absolutely. Tiznit offers an authentic Moroccan experience far from mass tourism. The silver souk is unmatched in Morocco, the walled medina is atmospheric yet navigable, and the town serves as the perfect gateway to the Anti-Atlas mountains, Tafraout, Sidi Ifni, and the remote southern coast.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/agadir', icon: MapPin, title: 'Agadir City Guide', description: 'Beach resort gateway to the Souss region, just 1.5 hours from Tiznit.' },
  { href: '/sidi-ifni-guide', icon: Waves, title: 'Sidi Ifni Guide', description: 'Former Spanish enclave with art deco charm and Legzira Beach.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Tagines, couscous, street food and the flavors of southern Morocco.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'From Aglou wild surf to Essaouira wind and Dakhla kite paradise.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Road Trip Routes', description: 'Anti-Atlas circuits, coastal drives, and mountain passes.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TiznitGuidePage() {
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
            backgroundImage: 'url(/images/hero-tiznit.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tiznit Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Gem className="w-4 h-4" />
            Silver Capital of Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Tiznit Guide
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The silver jewelry capital of Morocco and gateway to the Anti-Atlas.
            Explore ancient ramparts, Amazigh artisan workshops, and one of the most authentic souks in the country.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Tiznit: Where Silver Tells Stories
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ninety-five kilometers south of Agadir, enclosed within 5 kilometers of Sultan-built
                ramparts, Tiznit is a small city with an outsized reputation. For centuries the Amazigh
                (Berber) people of the Souss and Anti-Atlas regions have crafted silver jewelry here —
                fibulas, bracelets, anklets, and rings adorned with geometric symbols that encode
                identity, protection, and belonging. Today, Tiznit remains the undisputed silver
                capital of Morocco, home to hundreds of silversmiths who keep these traditions alive in
                workshops that have changed little in generations.
              </p>
              <p>
                But Tiznit is more than silver. The walled medina, established by Sultan Hassan I in
                1882, is atmospheric and wonderfully free of the tourist intensity found in Fes or
                Marrakech. The sacred Ain Aqdim spring pulses blue in the city heart. The Great Mosque
                minaret bristles with the distinctive wooden poles of Souss architecture. And beyond the
                ramparts, the Anti-Atlas mountains rise — one of Morocco most spectacular yet least-
                visited landscapes, with pink granite valleys, almond orchards, and ancient Amazigh
                villages.
              </p>
              <p>
                This guide covers everything you need to experience Tiznit — from the silver souk and
                artisan workshops to day trips to Aglou Beach and Tafraout. Each listing includes real
                2026 prices in MAD and insider tips to help you get the most from this remarkable corner
                of Morocco.
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
            Top 12 Things to Do in Tiznit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From silver souks to Anti-Atlas adventures — the essential Tiznit experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Silver Jewelry Souk', price: 'Jewelry from 50 MAD', time: '1-3 hours', category: 'Artisan' },
              { rank: 2, name: 'Silver Artisan Workshops', price: 'Free / Tip from 20 MAD', time: '30 min - 1 hour', category: 'Cultural' },
              { rank: 3, name: 'Old Medina & Ramparts Walk', price: 'Free', time: '2-3 hours', category: 'Heritage' },
              { rank: 4, name: 'Ain Aqdim (Blue Spring)', price: 'Free', time: '20-30 min', category: 'Sacred Site' },
              { rank: 5, name: 'Great Mosque of Tiznit', price: 'Free (exterior)', time: '15-20 min', category: 'Architecture' },
              { rank: 6, name: 'Musée du Patrimoine Amazighe', price: 'From 10 MAD', time: '45 min - 1 hour', category: 'Museum' },
              { rank: 7, name: 'Ensemble Artisanal', price: 'Free entry', time: '45 min - 1 hour', category: 'Shopping' },
              { rank: 8, name: 'Thursday Weekly Market', price: 'Free', time: '1-2 hours', category: 'Local Market' },
              { rank: 9, name: 'Aglou Beach', price: 'From 15 MAD taxi', time: 'Half day', category: 'Beach' },
              { rank: 10, name: 'Day Trip to Tafraout', price: 'From 40 MAD taxi', time: 'Full day', category: 'Mountain' },
              { rank: 11, name: 'Anti-Atlas Road Trip', price: 'From 300 MAD/day car', time: '1-3 days', category: 'Adventure' },
              { rank: 12, name: 'Tiznit Leather Goods', price: 'Babouches from 80 MAD', time: '30 min - 1 hour', category: 'Shopping' },
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

      {/* -- Silver & Artisan Heritage -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Silver &amp; Artisan Heritage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tiznit silver tradition is the soul of the city. From souk stalls to family workshops,
            the craft of Amazigh silver jewelry lives here like nowhere else in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices. Jewelry prices depend on weight, silver purity, and craftsmanship.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {silverAttractions.map((attraction) => {
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

      {/* -- Medina & Historical Sights -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Historical Sights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tiznit walled medina combines garrison-town order with authentic Amazigh atmosphere —
            easier to navigate than Fes, more genuine than Marrakech.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All medina sights are walkable from each other. Allow 2-3 hours for a comprehensive visit.
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

      {/* -- Museum & Culture -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Museum, Markets &amp; Culture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Beyond the silver souk, Tiznit cultural life reveals the depth of Amazigh heritage
            and the rhythms of a genuine southern Moroccan market town.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Thursday market is the weekly highlight. Plan your visit to include a Thursday if possible.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {culturalAttractions.map((item) => {
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

      {/* -- Excursions & Nature -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Excursions &amp; Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tiznit is the gateway to wild Atlantic beaches, pink granite valleys, and the
            spectacular Anti-Atlas mountains.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            A rental car offers the most flexibility for day trips. Grand taxis are the budget option.
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for Tiznit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tiznit is already one of the most affordable destinations in Morocco. These tips stretch your budget even further.
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
            Insider Tips for Tiznit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to help you navigate the silver souk, connect with artisans, and make the most of your visit.
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
            Sample 2-Day Tiznit Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical plan covering the essential Tiznit experiences. Adjust based on your interests and pace.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Medina, Silver Souk &amp; Artisans
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Start at the Musée du Patrimoine Amazighe (from 10 MAD) to understand the symbolism behind
                      Amazigh silver jewelry. Then head to the silver souk to browse workshops and watch artisans
                      at work. Visit the Ensemble Artisanal for fixed-price benchmarking before serious shopping.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Lunch at a local restaurant near the medina (tagine from 30 MAD). Walk to Ain Aqdim (Blue
                      Spring) and the Great Mosque. Explore the medina alleys and leather stalls. Browse for
                      babouches (from 80 MAD) and leather goods.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk the 5km ramparts circuit during golden hour. Visit the Mechouar parade square.
                      Dinner at a local restaurant — grilled meat or fish (from 40 MAD). Estimated Day 1
                      cost: from 200-500 MAD (excluding jewelry purchases).
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
                  Day 2: Aglou Beach or Tafraout Day Trip
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option A: Aglou Beach (Half Day)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Grand taxi to Aglou Beach (from 15 MAD, 20 minutes). Explore the wild Atlantic shore,
                      cliff-side cave dwellings, and fishing village. Fresh grilled fish lunch (from 40 MAD).
                      Return to Tiznit for final souk shopping and the Thursday market (if timing aligns).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option B: Tafraout (Full Day)</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Early departure to Tafraout (grand taxi from 40 MAD or rental car, 2 hours). Explore
                      the painted rocks, Lion Face formation, and Ameln Valley villages. Lunch in Tafraout
                      (from 30 MAD). Stock up on almonds and argan oil. Return via the Col du Kerdous scenic pass.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Final dinner in Tiznit medina. Last-minute silver shopping. Estimated Day 2 cost:
                      from 150-400 MAD (Aglou) or from 200-500 MAD (Tafraout).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation and jewelry)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 300-600 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Local restaurants, shared taxis, free medina walks</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 600-1,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Tafraout day trip, museum visits, restaurant meals</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,200-2,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Rental car, Anti-Atlas road trip, silver purchases</p>
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
            Continue Exploring Southern Morocco
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
            Ready to Discover Tiznit?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From centuries-old silver workshops and sacred springs to wild Atlantic beaches and the
            pink granite valleys of the Anti-Atlas, Tiznit offers an authentic Morocco experience
            far from the crowds. Start planning your journey to the silver capital.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agadir"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Agadir Guide
            </Link>
            <Link
              href="/sidi-ifni-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Sidi Ifni Guide
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
