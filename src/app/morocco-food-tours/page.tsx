import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Utensils,
  Flame,
  Compass,
  Building,
  Award,
  BookOpen,
  Crown,
  Leaf,
  Route,
  Store,
  Coffee,
  Globe,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Food Tours 2026 | Best Guided & Self-Guided Culinary Experiences',
  description:
    'Complete guide to Morocco\'s best food tours. From guided medina food walks in Marrakech and Fes to self-guided street food routes. Must-try dishes, dietary tips, top food markets, and insider recommendations across all major cities.',
  keywords: [
    'Morocco food tours',
    'Marrakech food tour',
    'Fes food tour',
    'Moroccan street food',
    'Casablanca food tour',
    'Essaouira seafood tour',
    'Morocco culinary experience',
    'Moroccan cuisine guide',
    'Jemaa el-Fnaa food',
    'Morocco food markets',
    'halal food Morocco',
    'vegetarian food Morocco',
    'tagine Morocco',
    'couscous Morocco',
    'Moroccan cooking class',
    'Morocco food guide 2026',
    'best food in Morocco',
    'Morocco street food guide',
    'medina food walk',
    'Morocco culinary travel',
    'Moroccan food culture',
    'food tour prices Morocco',
  ],
  openGraph: {
    title: 'Morocco Food Tours 2026 | Best Guided & Self-Guided Culinary Experiences',
    description:
      'Discover Morocco\'s incredible food scene. Guided medina food walks from 350 MAD, self-guided routes, must-try dishes, and the best food markets across Marrakech, Fes, Casablanca, and Essaouira.',
    url: `${BASE_URL}/morocco-food-tours`,
    images: [
      {
        url: `${BASE_URL}/images/hero-food-tours.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan food spread with tagines, couscous, and fresh salads at a traditional Moroccan restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Food Tours 2026 | Best Culinary Experiences',
    description:
      'From guided medina food walks to self-guided street food routes. Complete guide to eating your way through Morocco with prices, tips, and must-try dishes.',
    images: [`${BASE_URL}/images/hero-food-tours.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-food-tours` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-food-tours`,
  name: 'Morocco Food Tours 2026 | Best Guided & Self-Guided Culinary Experiences',
  description:
    'Complete guide to Morocco\'s best food tours. Guided medina food walks, self-guided routes, must-try dishes, dietary tips, and top food markets across all major cities.',
  url: `${BASE_URL}/morocco-food-tours`,
  image: `${BASE_URL}/images/hero-food-tours.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-food-tours`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Food Tours', item: `${BASE_URL}/morocco-food-tours` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED FOOD TOURS
   ═══════════════════════════════════════════════════════════════ */

const foodTours = [
  {
    name: 'Marrakech Medina Food Walk',
    city: 'Marrakech',
    duration: '3.5 hours',
    price: 'From 450 MAD per person',
    icon: Flame,
    description:
      'The essential Marrakech food experience. Wind through the narrow alleys of the medina with a local guide, stopping at hidden stalls and family-run kitchens that tourists never find on their own. You will taste everything from slow-cooked tanjia pulled from underground clay ovens to freshly fried msemen drizzled with honey.',
    highlights: ['10+ food tastings', 'Small groups (max 10)', 'Local guide born in the medina', 'Visit spice souk'],
    includedDishes: ['Tanjia', 'Msemen with honey', 'Harira soup', 'Lamb mechoui', 'Fresh-squeezed orange juice', 'Moroccan pastries'],
    meetingPoint: 'Jemaa el-Fnaa, near Cafe de France',
    rating: 4.9,
  },
  {
    name: 'Fes Culinary Heritage Tour',
    city: 'Fes',
    duration: '4 hours',
    price: 'From 500 MAD per person',
    icon: Crown,
    description:
      'Fes is the culinary capital of Morocco, and this tour proves why. Descend into the world\'s oldest walled medina to discover Fassi cuisine, a tradition refined over 1,200 years. Your guide, a Fassi food historian, takes you through fondouks, bakeries, and spice merchants that have operated for centuries.',
    highlights: ['12+ tastings', 'Food historian guide', 'Visit a traditional bakery', 'Spice blending demonstration'],
    includedDishes: ['Pastilla (pigeon pie)', 'Rfissa', 'Fassi-style tagine', 'Sellou', 'Chebakia', 'Mint tea ceremony'],
    meetingPoint: 'Bab Boujloud (Blue Gate)',
    rating: 4.8,
  },
  {
    name: 'Casablanca Street Food Safari',
    city: 'Casablanca',
    duration: '3 hours',
    price: 'From 400 MAD per person',
    icon: Building,
    description:
      'Casablanca is Morocco\'s most cosmopolitan city, and its food scene reflects that diversity. This tour explores the Habous Quarter, Central Market, and local neighborhood eateries where office workers and families queue for the best sandwiches, grilled fish, and snails in the city.',
    highlights: ['8+ tastings', 'Art Deco architecture stops', 'Central Market visit', 'Off-the-tourist-path neighborhoods'],
    includedDishes: ['Bocadillos (Moroccan sandwiches)', 'Grilled sardines', 'Babouche (snails)', 'Maakouda (potato fritters)', 'Fresh pastries', 'Avocado smoothie'],
    meetingPoint: 'Place Mohammed V, near the fountain',
    rating: 4.7,
  },
  {
    name: 'Essaouira Seafood & Spice Trail',
    city: 'Essaouira',
    duration: '3 hours',
    price: 'From 400 MAD per person',
    icon: Compass,
    description:
      'Essaouira\'s fishing port is one of Morocco\'s great food spectacles. This tour starts at the harbor as the day\'s catch comes in, then follows the fish through the market to the open-air grills where it is cooked to order. You will also explore the medina\'s spice shops and argan oil cooperatives.',
    highlights: ['Fish market visit at harbor', 'Choose your own fish to grill', 'Argan oil tasting', 'Spice souk exploration'],
    includedDishes: ['Grilled sea bream', 'Shrimp skewers', 'Sardine chermoula', 'Sea urchin (seasonal)', 'Argan oil amlou dip', 'Seafood pastilla'],
    meetingPoint: 'Essaouira fishing port entrance',
    rating: 4.9,
  },
  {
    name: 'Marrakech Night Food Tour',
    city: 'Marrakech',
    duration: '2.5 hours',
    price: 'From 350 MAD per person',
    icon: Sparkles,
    description:
      'When the sun sets, Jemaa el-Fnaa transforms into the world\'s largest open-air restaurant. This evening tour navigates the smoke-filled maze of food stalls with a guide who knows every vendor by name. You will eat where the locals eat, not where the touts direct tourists.',
    highlights: ['Evening atmosphere', 'Jemaa el-Fnaa stalls', 'Guide knows vendors personally', 'Digestive mint tea included'],
    includedDishes: ['Lamb head soup', 'Grilled kefta', 'Fried eggplant with chermoula', 'Khobz with dips', 'Snails in broth', 'Chebakia with tea'],
    meetingPoint: 'Jemaa el-Fnaa, near the Koutoubia Mosque side',
    rating: 4.8,
  },
  {
    name: 'Chefchaouen Blue City Food Walk',
    city: 'Chefchaouen',
    duration: '2.5 hours',
    price: 'From 350 MAD per person',
    icon: Globe,
    description:
      'Chefchaouen\'s Riffian cuisine is distinct from the rest of Morocco, influenced by Andalusian and Berber traditions. This intimate walking tour through the blue-washed streets visits family kitchens, cheese makers, and the town\'s best bakery. The pace is relaxed, like the town itself.',
    highlights: ['Riffian cuisine specialty', 'Family kitchen visit', 'Local goat cheese tasting', 'Intimate small groups (max 6)'],
    includedDishes: ['Bissara (fava bean soup)', 'Riffian-style couscous', 'Fresh goat cheese with olive oil', 'Baghrir (thousand-hole pancakes)', 'Homemade bread from wood oven', 'Mountain herb tea'],
    meetingPoint: 'Place Outa el-Hammam',
    rating: 4.7,
  },
  {
    name: 'Meknes Imperial Food Discovery',
    city: 'Meknes',
    duration: '3 hours',
    price: 'From 380 MAD per person',
    icon: Award,
    description:
      'Often overlooked by tourists, Meknes has one of Morocco\'s most underrated food scenes. The medina\'s food stalls are almost exclusively patronized by locals, which means better quality and lower prices. This tour visits the olive souk, the honey market, and hole-in-the-wall restaurants serving dishes you will not find on any tourist menu.',
    highlights: ['Least touristy food tour', 'Olive and honey markets', 'Roman ruins of Volubilis add-on option', 'Authentic local prices'],
    includedDishes: ['Khlii (preserved meat)', 'Meknes olive varieties', 'Djaj m\'chermel (chicken tagine)', 'Kaab el-ghazal (gazelle horns)', 'Local wine tasting', 'Stuffed msemen'],
    meetingPoint: 'Bab Mansour gate',
    rating: 4.6,
  },
  {
    name: 'Tangier Cross-Cultural Food Tour',
    city: 'Tangier',
    duration: '3.5 hours',
    price: 'From 420 MAD per person',
    icon: Globe,
    description:
      'Tangier sits at the crossroads of Africa and Europe, and its cuisine reflects centuries of Spanish, French, and Moroccan influences. This tour traces the city\'s culinary history from the ancient medina to the Ville Nouvelle, sampling dishes that tell the story of Tangier\'s international past.',
    highlights: ['Cross-cultural culinary history', 'Medina and Ville Nouvelle', 'View of Spain across the strait', 'Multilingual guides'],
    includedDishes: ['Spanish-Moroccan tapas', 'Tangerine-infused dishes', 'Fresh anchovy fritters', 'Briouats (stuffed pastry)', 'Tangier-style mint tea', 'Sfinj (Moroccan doughnuts)'],
    meetingPoint: 'Grand Socco (Place du Grand 9 Avril)',
    rating: 4.7,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SELF-GUIDED FOOD ROUTES
   ═══════════════════════════════════════════════════════════════ */

const selfGuidedRoutes = [
  {
    name: 'Jemaa el-Fnaa Night Circuit',
    city: 'Marrakech',
    duration: '2-3 hours',
    distance: '1.5 km loop',
    icon: Flame,
    description:
      'Navigate the world\'s most famous food square like a local. Start at the orange juice carts on the north side, work your way through the snail vendors in the center, then hit the grilled meat stalls on the south end. Finish with pastries and tea at the edge of the square.',
    stops: [
      { name: 'Orange juice carts (north side)', dish: 'Fresh-squeezed orange juice', price: 'From 5 MAD' },
      { name: 'Snail vendors (center)', dish: 'Babouche (snails in spiced broth)', price: 'From 10 MAD' },
      { name: 'Stall 14 or Stall 1 (south side)', dish: 'Grilled lamb chops and kefta', price: 'From 40 MAD' },
      { name: 'Harira stands (west side)', dish: 'Harira soup with dates', price: 'From 10 MAD' },
      { name: 'Pastry vendors (edge of square)', dish: 'Chebakia and shebakia', price: 'From 15 MAD' },
    ],
    tips: 'Go after 7 PM when all stalls are open. Avoid touts who grab your arm. The best stalls are the ones where Moroccans are sitting. Budget from 100 MAD for a full circuit.',
  },
  {
    name: 'Fes Tala\'a Kebira Food Trail',
    city: 'Fes',
    duration: '2-3 hours',
    distance: '2 km (downhill)',
    icon: Crown,
    description:
      'The Tala\'a Kebira is the main artery of the Fes medina, running downhill from Bab Boujloud to the Kairaouine Mosque. Along its length you will pass bakeries, nut roasters, honey sellers, and some of the oldest food stalls in Morocco. Walk slowly and eat everything.',
    stops: [
      { name: 'Street bakeries near Bab Boujloud', dish: 'Khobz (fresh bread from wood ovens)', price: 'From 2 MAD' },
      { name: 'Nut roasters on Tala\'a Kebira', dish: 'Roasted almonds with salt or honey', price: 'From 15 MAD' },
      { name: 'Pastilla shops mid-way', dish: 'Pastilla au pigeon or pastilla au lait', price: 'From 25 MAD' },
      { name: 'Hole-in-the-wall near Medersa Attarine', dish: 'Bessara (fava bean soup)', price: 'From 5 MAD' },
      { name: 'Honey and dried fruit shops', dish: 'Atlas Mountain honey and dates', price: 'From 30 MAD' },
    ],
    tips: 'Start at Bab Boujloud and walk downhill. The bakeries fire up early, so morning is best for fresh bread. Bring small bills. Most vendors do not have change for 200 MAD notes.',
  },
  {
    name: 'Casablanca Art Deco District Eats',
    city: 'Casablanca',
    duration: '2-3 hours',
    distance: '3 km',
    icon: Building,
    description:
      'Combine architecture and eating in Casablanca\'s stunning Art Deco quarter. Starting from the Central Market, where locals buy the freshest produce and seafood, weave through the boulevards stopping at patisseries, juice bars, and the city\'s best sandwich shops.',
    stops: [
      { name: 'Marche Central (Central Market)', dish: 'Grilled seafood at market stalls', price: 'From 50 MAD' },
      { name: 'Patisserie Bennis Habous', dish: 'Cornes de gazelle and Moroccan pastries', price: 'From 20 MAD' },
      { name: 'Juice bars on Blvd Mohammed V', dish: 'Avocado and almond smoothie', price: 'From 15 MAD' },
      { name: 'Snack Amine (Habous Quarter)', dish: 'Bocadillo with kefta and egg', price: 'From 25 MAD' },
      { name: 'Rick\'s Cafe area', dish: 'Moroccan tea and pastries', price: 'From 40 MAD' },
    ],
    tips: 'The Central Market is best visited before noon when the seafood is freshest. Patisserie Bennis is a Casablanca institution. Get there early or the best pastries sell out.',
  },
  {
    name: 'Essaouira Port to Medina Trail',
    city: 'Essaouira',
    duration: '2 hours',
    distance: '1.5 km',
    icon: Compass,
    description:
      'Start at the fishing port where the morning catch is auctioned and grilled on the spot. Walk through the medina\'s narrow streets, stopping for argan oil tastings and local specialties. End at the ramparts with a sea-view tea break. This is Essaouira at its most authentic.',
    stops: [
      { name: 'Port fish grills', dish: 'Grilled sardines, prawns, or sea bream', price: 'From 40 MAD' },
      { name: 'Argan cooperative (medina)', dish: 'Amlou (argan, almond, honey dip)', price: 'From 20 MAD tasting' },
      { name: 'Bakery on Rue de la Skala', dish: 'Rghaif with honey', price: 'From 10 MAD' },
      { name: 'Spice shop near Place Moulay Hassan', dish: 'Ras el hanout blend to take home', price: 'From 30 MAD' },
      { name: 'Cafe by the ramparts', dish: 'Mint tea with ocean view', price: 'From 15 MAD' },
    ],
    tips: 'The port grills are best at lunchtime. Point at the fish you want and they will grill it for you. Prices are per plate, not per kilo. Negotiate before they start cooking.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MUST-TRY DISHES
   ═══════════════════════════════════════════════════════════════ */

const mustTryDishes = [
  {
    name: 'Tagine',
    icon: Flame,
    description:
      'Morocco\'s most iconic dish. Slow-cooked in a conical clay pot, tagines come in dozens of varieties. The most classic is lamb with prunes and almonds, but chicken with preserved lemons and olives is equally beloved. Every region has its signature version.',
    whereToBest: 'Marrakech and Fes medinas for the most traditional versions. Ask for "tagine beldi" (traditional style).',
    priceRange: 'From 40 MAD at street stalls, from 120 MAD at restaurants',
  },
  {
    name: 'Couscous',
    icon: Utensils,
    description:
      'Hand-rolled semolina steamed over a broth of vegetables and meat. Friday is couscous day in Morocco, when families gather for the weekly tradition. The best couscous is light and fluffy, each grain separate, topped with a rich vegetable stew and tender meat.',
    whereToBest: 'Any local restaurant on Friday. The best couscous is homemade, so riad lunches and cooking classes are ideal.',
    priceRange: 'From 35 MAD at local restaurants, from 100 MAD at tourist restaurants',
  },
  {
    name: 'Pastilla (B\'stilla)',
    icon: Crown,
    description:
      'A stunning sweet-and-savory pie that defines Fassi cuisine. Layers of flaky warqa pastry enclose a filling of shredded pigeon (or chicken), eggs, and almonds, dusted with cinnamon and powdered sugar. The contrast of flavors is extraordinary.',
    whereToBest: 'Fes is the birthplace and still the best place to eat it. Order at traditional restaurants or buy from medina pastilla shops.',
    priceRange: 'From 25 MAD for a slice, from 80 MAD for a whole pastilla',
  },
  {
    name: 'Tanjia',
    icon: Flame,
    description:
      'Marrakech\'s signature dish, not to be confused with tagine. Lamb or beef is seasoned with preserved lemons, saffron, and cumin, sealed in a clay urn, and slow-cooked for 8 hours in the embers of a public hammam furnace. The meat falls apart at the touch of a fork.',
    whereToBest: 'Exclusively Marrakech. Order from restaurants in the medina that prepare it traditionally in hammam furnaces.',
    priceRange: 'From 80 MAD per person (usually shared)',
  },
  {
    name: 'Harira',
    icon: Coffee,
    description:
      'A hearty tomato-based soup with lentils, chickpeas, vermicelli, and herbs. Traditionally the soup that breaks the fast during Ramadan, but served year-round at street stalls. Usually accompanied by dates and chebakia pastries. Deeply nourishing and comforting.',
    whereToBest: 'Street stalls across all cities, especially during Ramadan. The best harira is at humble roadside stalls.',
    priceRange: 'From 5 MAD at street stalls, from 30 MAD at restaurants',
  },
  {
    name: 'Mechoui',
    icon: Flame,
    description:
      'Whole lamb slow-roasted in an underground clay pit for hours until the meat is so tender it falls off the bone. Mechoui is typically a celebration dish served at weddings and festivals, but in Marrakech it is available daily from specialized stalls in the medina.',
    whereToBest: 'Mechoui Alley in the Marrakech medina, near Jemaa el-Fnaa. Point at the lamb and they will carve your portion.',
    priceRange: 'From 60 MAD for a generous portion with bread',
  },
  {
    name: 'Rfissa',
    icon: Utensils,
    description:
      'A celebratory dish of shredded msemen bread soaked in a rich lentil and chicken broth, flavored with fenugreek. Traditionally prepared for new mothers and served at birth celebrations. The combination of textures and the warmth of fenugreek make it deeply satisfying.',
    whereToBest: 'Fes is the home of rfissa. Many traditional restaurants serve it, but it is best experienced homemade during cooking classes.',
    priceRange: 'From 45 MAD at local restaurants, from 90 MAD at tourist restaurants',
  },
  {
    name: 'Msemen & Baghrir',
    icon: Coffee,
    description:
      'Morocco\'s beloved breakfast flatbreads. Msemen are square, layered, and pan-fried until crispy and golden, served with honey and butter. Baghrir are round, spongy pancakes with a thousand tiny holes that soak up honey. Both are best eaten fresh from the griddle.',
    whereToBest: 'Street vendors and bakeries every morning across all cities. From 2 MAD each. Look for the women making them fresh on griddles.',
    priceRange: 'From 2 MAD each at street vendors',
  },
  {
    name: 'Sardines (Grilled)',
    icon: Compass,
    description:
      'Morocco is the world\'s largest exporter of sardines, and nowhere are they fresher than at the coastal ports. In Essaouira and Agadir, sardines are grilled whole over charcoal with nothing more than salt, cumin, and a squeeze of lemon. Simple and magnificent.',
    whereToBest: 'Essaouira fishing port for the freshest, Agadir for the most variety. Also excellent in Casablanca\'s Central Market.',
    priceRange: 'From 20 MAD for a plate at port grills, from 50 MAD at restaurants',
  },
  {
    name: 'Mint Tea (Atay)',
    icon: Coffee,
    description:
      'More than a drink, Moroccan mint tea is a ritual of hospitality. Green gunpowder tea, fresh spearmint, and generous amounts of sugar are brewed in a silver teapot and poured from height to create a frothy top. Refusing a glass of tea is considered impolite.',
    whereToBest: 'Everywhere in Morocco. The experience matters more than the location. Accept every offer of tea you receive.',
    priceRange: 'From 5 MAD at street cafes, from 25 MAD at tourist cafes',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DIETARY INFORMATION
   ═══════════════════════════════════════════════════════════════ */

const dietaryInfo = [
  {
    type: 'Vegetarian',
    icon: Leaf,
    status: 'Good options available',
    description:
      'While Moroccan cuisine is traditionally meat-heavy, vegetarians have solid options. Vegetable tagines, couscous with seven vegetables, lentil harira, zaalouk (eggplant salad), briouats with cheese, and abundant fresh salads are widely available. Most restaurants can prepare vegetable-only versions of their dishes.',
    tips: [
      'Say "bla lhem" (without meat) when ordering',
      'Friday couscous with seven vegetables is entirely vegetarian',
      'Zaalouk, taktouka, and bakoula salads are always meat-free',
      'Bessara (fava bean soup) is a filling vegetarian street food',
      'Many tagines can be made with vegetables only on request',
    ],
  },
  {
    type: 'Vegan',
    icon: Leaf,
    status: 'Manageable with planning',
    description:
      'Vegan options require more effort but are achievable. Traditional Moroccan cooking uses butter (smen) and honey frequently, so you need to communicate clearly. Many vegetable dishes are naturally vegan if prepared without butter. Street food staples like bessara, fried potatoes, and fruit are safe bets.',
    tips: [
      'Say "bla lhem, bla hlib, bla beid" (no meat, no dairy, no eggs)',
      'Argan oil amlou without honey is a great vegan protein source',
      'Many Moroccan salads (cooked and raw) are naturally vegan',
      'Fresh fruit and nuts are abundant and affordable',
      'Some riads in Marrakech now offer dedicated vegan menus',
    ],
  },
  {
    type: 'Halal',
    icon: ShieldCheck,
    status: 'Standard throughout Morocco',
    description:
      'Morocco is a Muslim-majority country, and virtually all meat served is halal by default. There is no need to seek out halal-specific restaurants. The only exceptions are some international hotel restaurants that may serve imported non-halal products, but these are clearly labeled.',
    tips: [
      'All local restaurants serve halal meat as standard',
      'Alcohol is available at licensed restaurants and hotels',
      'During Ramadan, eating in public during daylight is culturally sensitive',
      'Pork is not served anywhere in traditional Moroccan cuisine',
      'International chain restaurants in Morocco also serve halal meat',
    ],
  },
  {
    type: 'Gluten-Free',
    icon: AlertTriangle,
    status: 'Challenging but possible',
    description:
      'Gluten-free eating in Morocco is the most challenging dietary restriction. Bread (khobz) is central to every meal, couscous is semolina, pastilla and briouats use wheat pastry, and harira contains vermicelli. However, tagines, grilled meats, salads, and rice dishes are naturally gluten-free.',
    tips: [
      'Tagines with meat and vegetables are naturally gluten-free',
      'Grilled meats (mechoui, kefta, brochettes) are safe',
      'All Moroccan salads and dips (zaalouk, taktouka) are gluten-free',
      'Say "andi hassasiya men l-qamh" (I have a wheat allergy)',
      'Carry a translated dietary card in Arabic and French',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST FOOD MARKETS
   ═══════════════════════════════════════════════════════════════ */

const foodMarkets = [
  {
    name: 'Jemaa el-Fnaa Food Stalls',
    city: 'Marrakech',
    icon: Flame,
    image: '/images/hero-jemaa-el-fnaa.webp',
    type: 'Open-Air Night Market',
    description:
      'The world\'s most famous open-air food market. Every evening, over 100 food stalls set up in the main square, serving everything from grilled meats and harira to snails and sheep heads. The smoke, the noise, the energy: there is nothing else like it on earth.',
    bestFor: 'Grilled meats, harira soup, snails, fresh orange juice',
    bestTime: 'After 6 PM when all stalls are fully operational',
    priceRange: 'From 10 MAD per dish',
  },
  {
    name: 'Marche Central (Central Market)',
    city: 'Casablanca',
    icon: Store,
    image: '/images/hero-casablanca-skyline.webp',
    type: 'Indoor Market',
    description:
      'Casablanca\'s historic Central Market is an Art Deco gem filled with the city\'s freshest seafood, produce, olives, and spices. The small restaurants inside the market grill fish to order at remarkably fair prices. This is where Casablancans shop and eat.',
    bestFor: 'Fresh seafood, grilled fish, olives, seasonal produce',
    bestTime: 'Morning to early afternoon, closed Sundays',
    priceRange: 'From 30 MAD for a grilled fish plate',
  },
  {
    name: 'Rahba Kedima (Spice Square)',
    city: 'Marrakech',
    icon: Sparkles,
    image: '/images/hero-marrakech-medina.webp',
    type: 'Historic Spice Market',
    description:
      'Just off the main medina thoroughfare, this centuries-old square is where Marrakech comes to buy spices, dried fruits, nuts, and traditional remedies. The aromas are intoxicating. Buy ras el hanout blended to order, sample local honeys, and pick up dried figs and dates.',
    bestFor: 'Ras el hanout, dried fruits, nuts, local honey, traditional remedies',
    bestTime: 'Morning to late afternoon, daily except Friday afternoon',
    priceRange: 'From 20 MAD for spice packets',
  },
  {
    name: 'Essaouira Fish Port Market',
    city: 'Essaouira',
    icon: Compass,
    image: '/images/hero-essaouira-ramparts.webp',
    type: 'Fish Market & Grill',
    description:
      'The most theatrical food market in Morocco. Watch the fishing boats unload, browse the catch laid out on ice, choose your fish, and hand it to the grillers who cook it on the spot with charcoal, salt, and cumin. You sit at communal tables overlooking the Atlantic.',
    bestFor: 'Fresh grilled fish, prawns, lobster, sardines, sea urchin (seasonal)',
    bestTime: 'Lunchtime (11 AM - 2 PM) when the catch is freshest',
    priceRange: 'From 40 MAD for a grilled fish plate',
  },
  {
    name: 'Fes Medina Food Souks',
    city: 'Fes',
    icon: Crown,
    image: '/images/hero-fes-medina.webp',
    type: 'Historic Medina Market',
    description:
      'The Fes medina contains the most extensive network of food souks in Morocco. Entire streets are dedicated to single ingredients: one for olives, one for honey, one for dried meats. The bakeries use wood-fired ovens that have not changed in centuries. Navigating without a guide is an adventure in itself.',
    bestFor: 'Fresh bread, pastilla, olives, preserved meats (khlii), honey, nuts',
    bestTime: 'Morning to early afternoon for the freshest goods',
    priceRange: 'From 5 MAD for bread, from 25 MAD for pastilla',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Guided food tour (group)', price: 'From 350 MAD', note: 'Per person, 2.5-4 hours, all tastings included' },
  { service: 'Private food tour', price: 'From 800 MAD', note: 'Per group, customizable route and duration' },
  { service: 'Cooking class with market visit', price: 'From 400 MAD', note: 'Half day, includes lunch you prepare' },
  { service: 'Street food meal', price: 'From 20 MAD', note: 'Soup, sandwich, or snack at a stall' },
  { service: 'Local restaurant meal', price: 'From 50 MAD', note: 'Tagine or couscous with bread and tea' },
  { service: 'Mid-range restaurant meal', price: 'From 120 MAD', note: 'Starter, main course, and dessert' },
  { service: 'Fine dining meal', price: 'From 300 MAD', note: 'Multi-course tasting menu at upscale riad' },
  { service: 'Fresh orange juice', price: 'From 5 MAD', note: 'Jemaa el-Fnaa and street stalls' },
  { service: 'Mint tea', price: 'From 5 MAD', note: 'Street cafes; from 20 MAD at tourist cafes' },
  { service: 'Bottled water (1.5L)', price: 'From 5 MAD', note: 'Essential, stay hydrated while walking' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD TOUR TIPS
   ═══════════════════════════════════════════════════════════════ */

const foodTourTips = [
  {
    title: 'Come Hungry',
    icon: Utensils,
    description:
      'Skip breakfast or lunch before a food tour. Guided tours include 8-12 tastings, and each one is generous. You will eat far more than you expect. Bring antacids if you have a sensitive stomach.',
  },
  {
    title: 'Carry Small Bills',
    icon: DollarSign,
    description:
      'Most food vendors deal in small amounts. Bring plenty of 5, 10, and 20 MAD notes. Many stalls cannot break 200 MAD. ATMs are plentiful in all cities.',
  },
  {
    title: 'Water Safety',
    icon: ShieldCheck,
    description:
      'Drink bottled water only. The tap water in Morocco is treated but can upset foreign stomachs. Ice in drinks at restaurants is generally made from purified water, but ask if uncertain.',
  },
  {
    title: 'Eat Where Locals Eat',
    icon: Users,
    description:
      'The golden rule of Moroccan street food: if the stall is full of Moroccans, the food is good and safe. High turnover means fresh food. Avoid empty tourist-facing stalls with English menus and photos.',
  },
  {
    title: 'Best Time for Street Food',
    icon: Clock,
    description:
      'Breakfast stalls operate from 7-10 AM. Lunch is served from noon to 2 PM. The best street food experience is at night, especially in Marrakech and Fes, when the evening food stalls open around 6 PM.',
  },
  {
    title: 'Bring Hand Sanitizer',
    icon: ShieldCheck,
    description:
      'Street food in Morocco is generally safe, but hand-washing facilities are limited. Carry hand sanitizer or wet wipes. Most food stalls will have a communal hand-washing station with soap.',
  },
  {
    title: 'Embrace the Adventure',
    icon: Sparkles,
    description:
      'Try everything at least once. Snails, sheep head, tanjia, sardines whole: these are the flavors that define Morocco. The dishes that look the most intimidating are often the most rewarding.',
  },
  {
    title: 'Book Tours Early',
    icon: BookOpen,
    description:
      'Popular food tours sell out, especially during peak season (October-April). Book at least 3 days in advance. Ramadan changes schedules dramatically, so check with tour operators.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Moroccan street food safe to eat?',
    answer:
      'Yes, Moroccan street food is generally safe if you follow basic precautions. Eat at stalls with high turnover where food is cooked fresh in front of you. Avoid pre-cooked food that has been sitting out, and drink bottled water. Most travelers experience no issues. If you have a very sensitive stomach, start with cooked foods and avoid raw salads at street stalls for the first day or two.',
  },
  {
    question: 'How much should I budget for food in Morocco?',
    answer:
      'Morocco offers excellent value for food. Budget travelers can eat well for from 100 MAD per day using street food and local restaurants. Mid-range travelers should budget from 250 MAD per day for a mix of local spots and nicer restaurants. A guided food tour adds from 350-500 MAD for a memorable experience. Fine dining starts from 300 MAD per meal.',
  },
  {
    question: 'Are food tours suitable for children?',
    answer:
      'Most guided food tours welcome children over 6 years old, and many offer reduced prices. The walking can be tiring for younger children (2-4 km through medina streets). Self-guided routes let you set your own pace. Moroccan food is generally mild, though some dishes use cumin and chili. Tour operators can adjust tastings for children on request.',
  },
  {
    question: 'When is the best time of year for a food tour?',
    answer:
      'Food tours operate year-round, but the best seasons are spring (March-May) and autumn (September-November) when temperatures are pleasant for walking and seasonal produce is at its peak. Summer (June-August) is very hot, making midday food walks uncomfortable. During Ramadan, daytime food options are limited, but the iftar (sunset) food experience is extraordinary.',
  },
  {
    question: 'Do I need to speak Arabic or French for self-guided food routes?',
    answer:
      'Not essential but helpful. Most food vendors in tourist areas speak basic English or French. For self-guided routes, learn a few key phrases: "bghit" (I want), "bezzaf" (too much/enough), "sh-hal?" (how much?), and "had shi zwin" (this is delicious). Pointing, smiling, and showing enthusiasm are universal languages that work perfectly.',
  },
  {
    question: 'Can I take a food tour during Ramadan?',
    answer:
      'Yes, but with significant differences. During Ramadan, most Moroccans fast from sunrise to sunset, so daytime street food options are very limited. Some guided tours shift to evening schedules, starting after iftar (sunset). The iftar experience itself is remarkable: streets come alive with food vendors, and the communal breaking of the fast is a cultural highlight. Check with tour operators for Ramadan-specific schedules.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFoodToursPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-food-tours.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Food Tours</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Utensils className="w-4 h-4" />
            Culinary Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Food Tours:
            <br className="hidden md:block" /> The Ultimate Culinary Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From guided medina food walks at from 350 MAD to self-guided street food adventures.
            Eat your way through the souks, markets, and hidden stalls of Morocco&apos;s greatest food cities.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Food Lover&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan cuisine is one of the world&apos;s great culinary traditions, shaped by Berber,
                Arab, Andalusian, and French influences over more than a thousand years. Every city has
                its own specialties, every family its own recipes, and every street stall its own secret
                spice blend.
              </p>
              <p>
                A food tour in Morocco is not just about eating. It is about navigating the labyrinthine
                medinas with someone who knows every hidden stall, understanding the stories behind each
                dish, and experiencing the warmth of Moroccan hospitality through its most universal
                language: food.
              </p>
              <p>
                Whether you join a guided tour with a local expert or follow one of our self-guided
                routes through the souks, you will discover flavors that no restaurant menu can capture.
                The best food in Morocco is on the streets, in the markets, and in the homes of the
                people who have been perfecting these recipes for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food Tour &amp; Dining Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for food tours, street food, and restaurant meals across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when tour prices may increase by 15-25%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Guided Food Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Guided Food Tours in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Expert-led culinary walking tours across Morocco&apos;s greatest food cities. All tastings included in the price.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season, group size, and availability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {foodTours.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TourIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tour.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {tour.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {tour.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                          {tour.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {tour.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tour.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tour.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Included Dishes</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {tour.includedDishes.map((dish, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-primary)]">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    <span className="font-medium">Meeting Point:</span> {tour.meetingPoint}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Self-Guided Food Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Self-Guided Food Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Prefer to explore at your own pace? These curated routes let you eat your way through Morocco&apos;s best food neighborhoods independently.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {selfGuidedRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RouteIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {route.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {route.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5" />
                          {route.distance}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-6">{route.description}</p>

                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">Route Stops</h4>
                  <div className="space-y-3 mb-6">
                    {route.stops.map((stop, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[var(--text-primary)]">{stop.name}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-[var(--text-secondary)]">{stop.dish}</span>
                            <span className="text-xs font-semibold text-[var(--color-accent)]">{stop.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-2 p-3 bg-white rounded-lg border border-[var(--border-primary)]">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tips:</span> {route.tips}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Must-Try Dishes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            10 Must-Try Moroccan Dishes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are the dishes that define Moroccan cuisine. Do not leave the country without trying every single one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mustTryDishes.map((dish, index) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {dish.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <DishIcon className="w-3 h-3" />
                        <span>{dish.priceRange}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{dish.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Where to eat it:</span> {dish.whereToBest}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dietary Information ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dietary Guide for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Whether you are vegetarian, vegan, halal-conscious, or gluten-free, here is what you need to know about eating in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dietaryInfo.map((diet) => {
              const DietIcon = diet.icon;
              return (
                <div key={diet.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <DietIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {diet.type}
                      </h3>
                      <span className="text-xs font-medium text-[var(--color-gold)]">{diet.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{diet.description}</p>
                  <div className="space-y-2">
                    {diet.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Food Markets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Store className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            5 Best Food Markets in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s food markets are destinations in themselves. These are the five you should not miss.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {foodMarkets.map((market) => {
              const MarketIcon = market.icon;
              return (
                <div key={market.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={market.image}
                      alt={`${market.name} food market in ${market.city}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <MarketIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {market.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs">
                      {market.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-sm text-[var(--text-muted)] mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      {market.city}
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{market.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <Utensils className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        <span><span className="font-semibold text-[var(--text-primary)]">Best for:</span> {market.bestFor}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        <span><span className="font-semibold text-[var(--text-primary)]">Best time:</span> {market.bestTime}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <DollarSign className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        <span><span className="font-semibold text-[var(--text-primary)]">Prices:</span> {market.priceRange}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food Tour Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Tips for Food Tours in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodTourTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/moroccan-cuisine" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into the flavors, techniques, and regional specialties of Morocco&apos;s culinary heritage.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cooking-classes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Learn to make tagine, couscous, and pastilla in hands-on cooking classes across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about Morocco&apos;s most vibrant city, from souks to riads.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
