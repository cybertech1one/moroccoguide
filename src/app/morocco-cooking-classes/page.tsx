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
  Users,
  Award,
  BookOpen,
  Globe,
  Utensils,
  Flame,
  ChefHat,
  Leaf,
  Calendar,
  Package,
  Sprout,
  Gift,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Cooking Classes 2026 | Best Workshops in Marrakech, Fez, Essaouira & Chefchaouen',
  description:
    'Complete guide to Morocco\'s best cooking classes. Hands-on tagine, couscous, pastilla, msemen, and harira workshops in Marrakech, Fez, Essaouira, and Chefchaouen. Market tours, spice education, vegetarian options, farm-to-table experiences, and real 2026 prices.',
  keywords: [
    'morocco cooking class',
    'marrakech cooking class',
    'moroccan cooking workshop',
    'learn to cook tagine',
    'cooking class fez',
    'moroccan food class',
    'marrakech food tour',
    'souk cooking class',
    'moroccan cuisine workshop',
    'cooking school marrakech',
    'la maison arabe cooking',
    'amal center marrakech',
    'souk cuisine marrakech',
    'palais amani fez',
    'cafe clock fez cooking',
    'essaouira cooking class',
    'chefchaouen cooking class',
    'vegetarian moroccan cooking',
    'tagine cooking class',
    'couscous cooking class',
    'pastilla cooking workshop',
    'morocco culinary tour',
    'family cooking class morocco',
    'ras el hanout spice class',
    'moroccan spice guide',
    'farm to table morocco',
    'cooking riad morocco',
    'private cooking class morocco',
    'moroccan bread baking class',
    'harira soup recipe class',
  ],
  openGraph: {
    title: 'Morocco Cooking Classes 2026 | Best Workshops in Marrakech, Fez, Essaouira & Chefchaouen',
    description:
      'Hands-on Moroccan cooking classes with market tours, spice education, and authentic recipes. Tagine, couscous, pastilla, and more across four cities with real 2026 prices.',
    url: `${BASE_URL}/morocco-cooking-classes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-moroccan-cuisine.webp`,
        width: 1200,
        height: 630,
        alt: 'Hands preparing traditional Moroccan tagine with preserved lemons and olives in a cooking class kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Cooking Classes 2026 | Marrakech, Fez, Essaouira & Chefchaouen',
    description:
      'Best Moroccan cooking workshops with real prices. Learn tagine, couscous, pastilla from local chefs. Market tours, spice basics, and farm-to-table experiences included.',
    images: [`${BASE_URL}/images/hero-moroccan-cuisine.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-cooking-classes` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-cooking-classes`,
  name: 'Morocco Cooking Classes 2026 | Best Workshops in Marrakech, Fez, Essaouira & Chefchaouen',
  description:
    'Complete guide to the best cooking classes in Morocco. Hands-on workshops in Marrakech, Fez, Essaouira, and Chefchaouen with market tours, spice education, vegetarian options, farm-to-table experiences, and real prices for 2026.',
  url: `${BASE_URL}/morocco-cooking-classes`,
  image: `${BASE_URL}/images/hero-moroccan-cuisine.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-cooking-classes`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Cooking Classes', item: `${BASE_URL}/morocco-cooking-classes` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a cooking class in Marrakech cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group cooking classes in Marrakech range from 350 MAD to 850 MAD per person. Budget-friendly options like the Amal Women\'s Training Center start from 350 MAD, while premium experiences at La Maison Arabe cost from 850 MAD. Private classes run from 1,200 MAD to 2,500 MAD. Most prices include a market tour, ingredients, recipes to take home, and the meal you prepare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Moroccan cooking classes include a market tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most cooking classes in Morocco start with a guided tour of a local souk or market. You shop for spices, vegetables, meat, and bread alongside your instructor. The market tour typically lasts 30-60 minutes and is included in the class price. A few classes skip the market tour and source ingredients in advance for quality control.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there vegetarian or vegan Moroccan cooking classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Nearly every cooking school in Morocco accommodates vegetarian guests on request. Souk Cuisine in Marrakech runs dedicated vegetarian sessions. Moroccan cuisine has many naturally plant-based dishes: vegetable tagine, zaalouk (eggplant salad), bessara (fava bean soup), harira (can be made vegan), and couscous with seven vegetables. Let your school know at booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dishes will I learn to cook in a Moroccan cooking class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard half-day class covers 3-4 dishes. Common menus include chicken or lamb tagine with preserved lemons, hand-rolled couscous, Moroccan salads (zaalouk, taktouka), and mint tea. Full-day classes add pastilla, harira soup, msemen flatbread, or Moroccan pastries like gazelle horns. Some classes focus on bread-making or street food.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can children join cooking classes in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many schools welcome children aged 6 and up. Souk Cuisine, La Maison Arabe, and Palais Amani all accept families. Children enjoy kneading bread dough, rolling couscous, and assembling pastilla layers. Private family sessions work best because instructors adjust pace and tasks to younger hands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What spices will I learn about in a Moroccan cooking class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every class covers ras el hanout (Morocco\'s signature blend of 15-30 spices), cumin, saffron, paprika, turmeric, ginger, and cinnamon. You learn how to identify quality saffron, the difference between pre-ground and freshly ground cumin, and how Moroccan spice layering differs from other cuisines. Most classes include a spice-tasting session during the market tour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a cooking riad and should I stay in one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cooking riad is a traditional Moroccan guesthouse that offers daily cooking classes as part of your stay. Examples include Riad Monceau and Dar Moha in Marrakech. Staying in a cooking riad means you can join a class every day without traveling across the city. Prices start from 1,200 MAD per night including accommodation and a daily workshop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there farm-to-table cooking experiences outside the cities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several operators run farm-to-table cooking experiences in the Ourika Valley, Toubkal region, and Oualidia coast. You visit a working farm, pick herbs and vegetables, then cook with what you harvested. These day trips typically cost from 800 MAD to 1,500 MAD per person including transport, farm visit, class, and lunch. They offer a rural contrast to city-based classes.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: COOKING CLASSES BY CITY
   ═══════════════════════════════════════════════════════════════ */

const marrakechClasses = [
  {
    name: 'Amal Women\'s Training Center',
    instructor: 'Chef Nora Fitzgerald-Belkabir (founder) & rotating local women trainees',
    description:
      'A nonprofit restaurant and training program that teaches disadvantaged Moroccan women culinary skills. Classes run in a bright, open kitchen in Gueliz. You start at the nearby Marche Central, picking up spices and vegetables with your guide. Back at Amal, you prepare a three-course meal: typically a salad, tagine, and dessert. The atmosphere is relaxed and personal. All profits fund the training program, so your money directly supports local women.',
    dishes: ['Chicken tagine with preserved lemons', 'Moroccan salad trio', 'Orange-cinnamon dessert'],
    price: 'From 350 MAD per person (group)',
    duration: '4 hours (including market visit)',
    groupSize: '4-10 guests',
    rating: '4.8 on TripAdvisor (2,900+ reviews)',
    icon: Heart,
  },
  {
    name: 'La Maison Arabe',
    instructor: 'Dada (traditional family cook) supervised by Chef Mohammed',
    description:
      'Morocco\'s original cooking school, operating since 1999 inside a restored 1946 riad in the medina. The "dada" system pairs you with an experienced home cook who learned from her mother and grandmother. No market tour here; ingredients are pre-sourced for quality control. Classes take place in a traditional kitchen with zellige tile and copper cookware. The focus is precision: how to layer spices in a tagine, the exact steaming technique for couscous, the fold pattern for pastilla. You eat your creation in the riad\'s courtyard garden.',
    dishes: ['Lamb tagine with prunes and almonds', 'Hand-rolled couscous', 'Pastilla (pigeon or chicken)'],
    price: 'From 850 MAD per person (group), from 2,500 MAD private',
    duration: '3 hours',
    groupSize: '2-8 guests',
    rating: '4.7 on TripAdvisor (1,800+ reviews)',
    icon: Award,
  },
  {
    name: 'Souk Cuisine',
    instructor: 'Gemma van de Berg (Dutch-Moroccan founder) & Chef Khadija',
    description:
      'A medina-based school that starts every session deep inside the Mellah spice market. Gemma leads the market walk herself, explaining spice blends, haggling customs, and seasonal produce. The cooking happens on a rooftop terrace overlooking the Koutoubia minaret. Dedicated vegetarian sessions run twice a week. The style is hands-on and fast-paced: each person gets their own station and prepares every dish individually. Recipes are emailed after class in PDF format.',
    dishes: ['Vegetable or meat tagine', 'Zaalouk and taktouka salads', 'Msemen flatbread', 'Mint tea ceremony'],
    price: 'From 500 MAD per person (group), from 1,500 MAD private',
    duration: '5 hours (including 1-hour market tour)',
    groupSize: '4-12 guests',
    rating: '4.9 on TripAdvisor (3,200+ reviews)',
    icon: Star,
  },
] as const;

const fezClasses = [
  {
    name: 'Palais Amani Cooking School',
    instructor: 'Chef Ouafae & Chef Houda',
    description:
      'Set inside a restored 17th-century palace in the Fez medina, Palais Amani runs daily morning classes. The session begins with a walk through the Rcif souk, one of Fez\'s oldest food markets. Chef Ouafae explains how to identify quality saffron, when preserved lemons are ready, and why Fassi cuisine uses more sugar than other Moroccan regions. Back at the palace kitchen, you cook a four-dish menu that always includes the city\'s signature dish: pastilla. The final meal is served in the palace\'s Andalusian garden.',
    dishes: ['Pastilla (chicken and almond)', 'Fassi lamb tangia', 'Briouats (stuffed pastry)', 'Harira soup'],
    price: 'From 650 MAD per person (group), from 1,800 MAD private',
    duration: '4.5 hours',
    groupSize: '2-8 guests',
    rating: '4.8 on TripAdvisor (950+ reviews)',
    icon: Sparkles,
  },
  {
    name: 'Cafe Clock',
    instructor: 'Chef Ahmed & rotating guest cooks from the medina',
    description:
      'Cafe Clock runs casual, affordable cooking workshops from its restored townhouse near the Bou Inania medersa. The vibe is informal compared to palace settings. Ahmed teaches one signature dish per session, breaking it down step by step. The famous camel burger workshop draws the most attention, but bread-making classes (khobz, msemen, baghrir) and tagine sessions are the most educational. The cafe also hosts occasional "supper club" events where local grandmothers cook family recipes for a seated dinner.',
    dishes: ['Camel burger', 'Msemen and baghrir bread', 'Lamb tagine Fassi-style'],
    price: 'From 300 MAD per person (group)',
    duration: '2.5-3 hours',
    groupSize: '4-14 guests',
    rating: '4.6 on TripAdvisor (700+ reviews)',
    icon: Flame,
  },
] as const;

const essaouiraClasses = [
  {
    name: 'L\'Atelier Madada',
    instructor: 'Chef Mouna & Chef Fatima',
    description:
      'Run by the team behind Heure Bleue Palais hotel, L\'Atelier Madada occupies a whitewashed townhouse steps from the fishing port. Classes start at 9:30am with a walk through the port fish auction, where you pick the day\'s catch. Mouna teaches Souiri-style seafood: chermoula-marinated fish tagine, grilled sardines with cumin, and seafood pastilla. The afternoon session focuses on traditional dishes. The kitchen is compact and modern, and groups stay small. Transport from your riad is included.',
    dishes: ['Fish tagine with chermoula', 'Seafood pastilla', 'Grilled sardines with cumin', 'Moroccan cookies'],
    price: 'From 700 MAD per person (group), from 2,000 MAD private',
    duration: '4 hours',
    groupSize: '2-6 guests',
    rating: '4.9 on TripAdvisor (600+ reviews)',
    icon: Award,
  },
] as const;

const chefchaouenClasses = [
  {
    name: 'Lala Mesouda Cooking Class',
    instructor: 'Lala Mesouda & family members',
    description:
      'A family-run class in the heart of the blue medina. Lala Mesouda, a Riffian grandmother, teaches recipes from the mountainous north that you rarely find in Marrakech or Fez. The menu leans on goat cheese, fresh herbs from her rooftop garden, and seasonal mountain vegetables. No market tour here; ingredients come from her own suppliers in the souk. The kitchen is her actual home kitchen, and the meal is served on her family terrace overlooking the valley. Group sizes stay intimate, rarely exceeding four guests.',
    dishes: ['Rfissa (shredded msemen with chicken)', 'Mountain herb tagine with goat cheese', 'Riffian mint tea with wormwood'],
    price: 'From 400 MAD per person (group), from 1,000 MAD private',
    duration: '3.5 hours',
    groupSize: '2-4 guests',
    rating: '4.7 on Google Reviews (200+ reviews)',
    icon: Heart,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MOROCCAN SPICE ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const spiceEssentials = [
  {
    name: 'Ras el Hanout',
    arabic: 'Head of the Shop',
    description:
      'Morocco\'s signature blend of 15-30 spices: cardamom, clove, cinnamon, black pepper, nutmeg, turmeric, dried rose petals, and long pepper. Every merchant guards their own recipe. Buy from a specialist attarine, not a tourist stall. From 30 MAD for 100 grams.',
    icon: Sparkles,
  },
  {
    name: 'Cumin (Kamoun)',
    arabic: 'The backbone spice',
    description:
      'Appears in almost every savory Moroccan dish -- tagines, kefta, and harira. Moroccan cumin is earthier than Indian cumin due to drier growing conditions. Whole seeds are toasted and ground fresh by market vendors. From 10 MAD per jar. Buy small quantities; ground cumin loses potency within a month.',
    icon: Flame,
  },
  {
    name: 'Saffron (Za\'fran)',
    arabic: 'Red gold of Taliouine',
    description:
      'Nearly all Moroccan saffron comes from Taliouine in the Anti-Atlas. Genuine threads are deep crimson with no yellow tips and release color slowly in warm water. From 40 MAD per gram. Cheap saffron (under 20 MAD/gram) is almost certainly dyed safflower. In class, you learn to spot fakes.',
    icon: Star,
  },
  {
    name: 'Paprika & Cayenne',
    arabic: 'Felfel hlow & felfel har',
    description:
      'Sweet paprika gives tagines and chermoula their red color; cayenne adds heat. Moroccan cooks combine both in a single dish, adjusting the ratio to taste. Souk paprika is brighter than supermarket versions because it is freshly ground from locally dried peppers. From 8 MAD for 100 grams.',
    icon: Flame,
  },
  {
    name: 'Ginger & Turmeric',
    arabic: 'Skinjbir & kharkoum',
    description:
      'Dried ginger is used in nearly every tagine recipe. Turmeric adds golden color to rice, soups, and rubs. Together with cumin, these two form the base trio of Moroccan dry spice mixes. From 5 MAD for 50 grams at any souk stall.',
    icon: Leaf,
  },
  {
    name: 'Cinnamon (Qarfa)',
    arabic: 'The sweet spice',
    description:
      'Bridges savory and sweet: dusts pastilla, flavors lamb-prune tagines, and appears in tea blends. Moroccan cinnamon is mostly cassia, stronger than Ceylon. Whole sticks from 5 MAD each; ground from 15 MAD for 100 grams.',
    icon: Sparkles,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DISHES YOU'LL LEARN
   ═══════════════════════════════════════════════════════════════ */

const dishesYoullLearn = [
  {
    name: 'Tagine',
    icon: Flame,
    description:
      'The clay-pot dish that defines Moroccan cooking. You learn to build flavor in layers: onions and oil first, then spice paste (chermoula or ras el hanout), then protein, then slow-cooked vegetables and fruit. The conical lid traps steam and returns it to the dish. Chicken with preserved lemons and olives is the most common class recipe. Lamb with prunes and almonds runs a close second.',
    difficulty: 'Beginner-friendly',
  },
  {
    name: 'Couscous',
    icon: Utensils,
    description:
      'Hand-rolling couscous from scratch takes patience. You rub semolina flour with salted water in a wide gsaa bowl, breaking clumps between your palms until fine granules form. The couscous steams three separate times in a couscoussier, with oil and fluffing between rounds. Most classes pair it with a seven-vegetable stew. Friday couscous is sacred in Moroccan households, so learning this dish carries cultural weight.',
    difficulty: 'Intermediate',
  },
  {
    name: 'Pastilla (Bastilla)',
    icon: Sparkles,
    description:
      'A layered pie of warqa pastry, slow-cooked pigeon or chicken, almonds, eggs, and cinnamon-sugar dusting. The sweet-savory combination surprises first-time tasters. Making warqa from scratch is an advanced skill (thin dough tapped onto a hot surface), so most classes use pre-made sheets. You layer, fold, and bake. Fez claims pastilla as its own, and Palais Amani teaches the most traditional version.',
    difficulty: 'Intermediate-Advanced',
  },
  {
    name: 'Msemen & Baghrir',
    icon: BookOpen,
    description:
      'Msemen is a square, pan-fried flatbread folded in layers like a laminated dough. Baghrir (thousand-hole pancakes) use a fermented batter that creates tiny bubbles on one side. Both are breakfast staples served with honey and butter. Bread classes at Cafe Clock focus entirely on these two breads plus khobz (round oven bread). The technique is tactile and satisfying.',
    difficulty: 'Beginner-friendly',
  },
  {
    name: 'Harira Soup',
    icon: Heart,
    description:
      'The thick tomato-lentil-chickpea soup served every evening during Ramadan and year-round in homes and cafes. Each family guards its recipe. The base is tomato puree, onion, celery, and herbs. Lentils and chickpeas add body. A flour-and-water slurry called tadouira gives harira its distinctive silky texture. Most classes teach you to finish it with fresh lemon and chopped coriander.',
    difficulty: 'Beginner-friendly',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FARM-TO-TABLE EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const farmToTable = [
  {
    name: 'Ourika Valley Organic Farm',
    location: 'Ourika Valley, 45 min from Marrakech',
    description:
      'A family-run organic farm where you pick herbs, tomatoes, and peppers from the garden before cooking lunch in an outdoor kitchen with Atlas Mountain views. Spring brings fava beans and artichokes; autumn yields figs and pomegranates. A Berber grandmother leads the cooking.',
    price: 'From 900 MAD per person (including transport)',
    highlights: ['Herb garden harvesting', 'Atlas Mountain kitchen', 'Berber family-hosted', 'Seasonal menus'],
  },
  {
    name: 'Toubkal Herb & Tagine Day',
    location: 'Imlil village, High Atlas',
    description:
      'Walk with a local guide to terraced gardens at the foot of Jebel Toubkal, where families grow mint, thyme, and rosemary at altitude. Cook on a traditional wood-fired tagine brazier outside. Lunch on a rooftop terrace above the walnut groves.',
    price: 'From 800 MAD per person (including transport)',
    highlights: ['High Atlas setting', 'Wood-fired tagine', 'Herb education', 'Guided village walk'],
  },
  {
    name: 'Oualidia Oyster & Seafood Class',
    location: 'Oualidia lagoon, Atlantic coast',
    description:
      'Morocco\'s oyster capital. Visit the oyster beds, stop at the lagoon fish market, then cook chermoula-spiced fish, grilled oysters, and a seafood tagine at a guesthouse overlooking the Atlantic. About 3 hours from Marrakech.',
    price: 'From 1,500 MAD per person (including transport)',
    highlights: ['Oyster bed visit', 'Lagoon-fresh seafood', 'Atlantic coast setting', 'Full-day experience'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL TIPS
   ═══════════════════════════════════════════════════════════════ */

const practicalTips = [
  {
    icon: Calendar,
    title: 'Book 3-5 Days Ahead in Peak Season',
    text: 'March-May and September-November are busiest. Off-season, 1-2 days notice is usually enough. Email the school directly for the best rate rather than booking through aggregator sites.',
  },
  {
    icon: Clock,
    title: 'Morning Classes Are Best',
    text: 'Markets are freshest between 9am and 11am. Most schools schedule their market tour for morning. Afternoon classes skip the market or visit quieter stalls.',
  },
  {
    icon: Users,
    title: 'Private vs. Group Classes',
    text: 'Group classes: from 300 MAD to 850 MAD per person, mixed nationalities. Private classes: from 1,000 MAD to 2,500 MAD total, customizable menu and pace. Families of 3-4+ get better value with private sessions.',
  },
  {
    icon: Leaf,
    title: 'Vegetarian & Vegan Options',
    text: 'Souk Cuisine runs dedicated vegetarian sessions. Most schools swap meat tagine for vegetable tagine, add zaalouk, bessara, or stuffed peppers on request. Vegan requests require advance notice to avoid butter and honey.',
  },
  {
    icon: DollarSign,
    title: 'What Is Included in the Price',
    text: 'Market tour, all ingredients, apron, recipes (printed or emailed), mint tea, and the meal. Some schools add a spice kit or riad transfer. Tip from 50 MAD to 100 MAD if the class was excellent.',
  },
  {
    icon: ShieldCheck,
    title: 'Allergies & Dietary Needs',
    text: 'Nuts appear widely: almonds in pastilla, argan oil in amlou. Gluten is present in bread, couscous, and pastry. Inform the school at booking. Severe allergies should opt for a private session.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TAKING RECIPES HOME
   ═══════════════════════════════════════════════════════════════ */

const takingRecipesHome = [
  {
    title: 'Spices to Buy Before You Leave',
    icon: Package,
    text: 'Ras el hanout, cumin, saffron, dried ginger, and paprika travel well in sealed bags. Buy from a reputable attarine, not a tourist shop. Budget from 100 MAD to 200 MAD for a full set that lasts months.',
  },
  {
    title: 'Essential Equipment',
    icon: Utensils,
    text: 'A clay tagine pot is the most useful piece of equipment. Small tagines cost from 80 MAD; large ones from 150 MAD. Wrap in clothing for your suitcase. A gsaa bowl (from 50 MAD) and a couscoussier are also worth packing.',
  },
  {
    title: 'Recipe Sources',
    icon: BookOpen,
    text: 'Most schools email recipe PDFs after class. For deeper study: "Mourad: New Moroccan" by Mourad Lahlou, "Taste of Marrakesh" by Nargisse Benkabbou, or "Couscous and Other Good Food from Morocco" by Paula Wolfert.',
  },
  {
    title: 'Sourcing Ingredients at Home',
    icon: Globe,
    text: 'Preserved lemons: pack unwaxed lemons in salt in a jar and wait 30 days. Harissa, ras el hanout, and orange blossom water are available at Middle Eastern grocery stores. For saffron, order from Taliouine cooperatives online.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   RENDER HELPER: CLASS CARDS
   ═══════════════════════════════════════════════════════════════ */

function ClassCard({ cls, city }: { cls: { name: string; instructor: string; description: string; dishes: readonly string[]; price: string; duration: string; groupSize: string; rating: string; icon: React.ComponentType<{ className?: string }> }; city: string }) {
  const ClsIcon = cls.icon;
  return (
    <div className="card-moroccan p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
          <ClsIcon className="w-6 h-6 text-[var(--color-accent)]" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-1">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
              {cls.name}
            </h3>
            <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0">
              {cls.rating}
            </span>
          </div>
          <p className="text-xs text-[var(--text-muted)] mb-3">
            <strong>Instructor:</strong> {cls.instructor}
          </p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">{cls.description}</p>
          <div className="mb-4">
            <p className="text-xs font-semibold text-[var(--text-primary)] mb-1.5">Sample menu:</p>
            <div className="flex flex-wrap gap-2">
              {cls.dishes.map((dish) => (
                <span key={dish} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-0.5 rounded">
                  {dish}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
              {cls.price}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[var(--color-accent)]" />
              {cls.duration}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3 h-3 text-[var(--color-accent)]" />
              {cls.groupSize}
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
              {city}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCookingClassesPage() {
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-moroccan-cuisine.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Cooking Classes</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ChefHat className="w-4 h-4" />
            Culinary Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Cooking Classes:
            <br className="hidden md:block" /> Tagine, Couscous, Pastilla &amp; More
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Hands-on workshops in Marrakech, Fez, Essaouira, and Chefchaouen. Shop the souks with local chefs,
            master traditional spice techniques, and eat everything you cook.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Take a Cooking Class in Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan cuisine ranks among the world&apos;s most complex and satisfying food traditions.
                Tagine, couscous, pastilla, harira -- these dishes look simple on a restaurant plate, but
                each one relies on layered spice techniques passed down through generations of family cooks.
                A cooking class gives you access to those techniques in a way no cookbook or YouTube video can match.
              </p>
              <p>
                The best classes begin in the market. You walk through the souk with a local chef, selecting
                cumin, saffron, ras el hanout, preserved lemons, and seasonal produce. That market tour alone
                teaches more about Moroccan food culture than a week of eating out. Back in the kitchen, you
                prepare three to five dishes from scratch, then sit down and eat the results. Recipes go home
                with you, so the learning continues long after you leave Morocco.
              </p>
              <p>
                Prices start from 300 MAD for a group session at Cafe Clock in Fez and go up to 2,500 MAD for
                a private class at La Maison Arabe in Marrakech. Most fall in the 450-700 MAD range. For the
                quality of instruction, ingredients, and the meal included, cooking classes are among the
                best-value experiences in Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Marrakech Classes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s culinary capital has the widest selection of cooking schools, from nonprofit
            training kitchens to luxury riad experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices and may vary by season. Book directly with each school for current rates.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {marrakechClasses.map((cls) => (
              <ClassCard key={cls.name} cls={cls} city="Marrakech" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Fez Classes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fez Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fez is Morocco&apos;s gastronomic heart. Fassi cuisine is the most refined in the country,
            shaped by Andalusian, Arab, and Amazigh influences over 1,200 years.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {fezClasses.map((cls) => (
              <ClassCard key={cls.name} cls={cls} city="Fez" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Essaouira Classes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essaouira Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Atlantic seafood meets Moroccan spice. Essaouira&apos;s cooking scene revolves around the daily fish auction at the port.
          </p>

          <div className="max-w-4xl mx-auto">
            {essaouiraClasses.map((cls) => (
              <ClassCard key={cls.name} cls={cls} city="Essaouira" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Chefchaouen Classes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Chefchaouen Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The blue city offers intimate, home-style cooking with Riffian recipes you rarely encounter in southern Morocco.
          </p>

          <div className="max-w-4xl mx-auto">
            {chefchaouenClasses.map((cls) => (
              <ClassCard key={cls.name} cls={cls} city="Chefchaouen" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Moroccan Spice Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Spice Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every cooking class begins with spice education. These six spices define Moroccan cuisine.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {spiceEssentials.map((spice) => {
              const SpiceIcon = spice.icon;
              return (
                <div key={spice.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <SpiceIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spice.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] italic">{spice.arabic}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spice.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dishes You'll Learn ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ChefHat className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dishes You&apos;ll Learn to Cook
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From slow-simmered tagines to hand-rolled couscous, these are the core dishes taught across Morocco&apos;s cooking schools.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {dishesYoullLearn.map((dish) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DishIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dish.name}
                        </h3>
                        <span className="text-xs font-medium text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded">
                          {dish.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{dish.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How a Typical Class Works ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How a Typical Class Works
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most half-day Moroccan cooking classes follow this four-stage format.
          </p>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Market Tour (30-60 min)',
                text: 'Your instructor meets you at a souk entrance or picks you up from your riad. You walk through spice stalls, vegetable sellers, and butcher shops. The chef explains ras el hanout ingredients, how to spot quality saffron, and what is in season. You buy everything for the class.',
              },
              {
                step: '2',
                title: 'Prep & Mise en Place (30-45 min)',
                text: 'Wash and chop vegetables, measure spices, and prepare marinades. The instructor demonstrates knife skills and the logic behind each spice combination: cumin and paprika for tagines, cinnamon and ginger for pastilla, anise and sesame for bread.',
              },
              {
                step: '3',
                title: 'Cooking (1.5-2 hours)',
                text: 'Each participant works on their own dish. Tagines go on low heat; while they simmer, you prepare salads, bread, or pastry. The instructor circulates, corrects technique, and shares family food stories. The kitchen fills with cumin, coriander, and saffron.',
              },
              {
                step: '4',
                title: 'The Meal (45-60 min)',
                text: 'Sit down and eat everything you cooked. Mint tea is prepared ceremonially. The instructor joins the table, answering questions about food culture and sourcing ingredients at home. Recipes are emailed. Some schools give you spices to take with you.',
              },
            ].map((stage) => (
              <div key={stage.step} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm">{stage.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{stage.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cooking Riads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Home className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cooking Riads: Stay &amp; Cook
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Some riads build cooking into the accommodation itself, with daily classes throughout your stay.
          </p>

          <div className="space-y-6">
            {[
              {
                name: 'La Maison Arabe (Marrakech)',
                text: 'Morocco\'s original cooking riad. Guests book daily dada-led workshops without leaving the property. Overnight guests get priority booking and a discounted rate. Weekend pastry workshops also available.',
                price: 'From 2,800 MAD/night (room + daily class)',
                loc: 'Medina, Marrakech',
              },
              {
                name: 'Riad Monceau (Marrakech)',
                text: 'A boutique guesthouse near the Bahia Palace offering afternoon cooking sessions to overnight guests. Chef Khadija tailors each session to what you want to learn. Rooftop kitchen with medina views. Maximum 8 guests.',
                price: 'From 1,200 MAD/night (room + class)',
                loc: 'Kasbah, Marrakech',
              },
              {
                name: 'Palais Amani (Fez)',
                text: 'This restored palace doubles as one of Fez\'s best cooking schools. Overnight guests join the morning class at a reduced rate. Chef Ouafae picks fresh herbs from the Andalusian garden minutes before class.',
                price: 'From 1,800 MAD/night (room + class)',
                loc: 'Medina, Fez',
              },
            ].map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {riad.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{riad.text}</p>
                <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                    {riad.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    {riad.loc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Farm-to-Table Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sprout className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Farm-to-Table Cooking Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Step outside the cities and cook with ingredients you harvest yourself.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {farmToTable.map((exp) => (
              <div key={exp.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Sprout className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {exp.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.description}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                        {exp.price}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {exp.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips & Booking Advice ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips &amp; Practical Advice
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">Get the most out of your Moroccan cooking experience with these planning pointers.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Price Comparison
          </h2>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Starting prices per person for group classes. Private classes cost more. Seasonal pricing may apply.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/5">
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">School</th>
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">City</th>
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Group Price</th>
                    <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-primary)]">
                  {[
                    { school: 'Cafe Clock', city: 'Fez', price: 'From 300 MAD', duration: '2.5-3 hrs' },
                    { school: 'Amal Center', city: 'Marrakech', price: 'From 350 MAD', duration: '4 hrs' },
                    { school: 'Lala Mesouda', city: 'Chefchaouen', price: 'From 400 MAD', duration: '3.5 hrs' },
                    { school: 'Souk Cuisine', city: 'Marrakech', price: 'From 500 MAD', duration: '5 hrs' },
                    { school: 'Palais Amani', city: 'Fez', price: 'From 650 MAD', duration: '4.5 hrs' },
                    { school: 'L\'Atelier Madada', city: 'Essaouira', price: 'From 700 MAD', duration: '4 hrs' },
                    { school: 'La Maison Arabe', city: 'Marrakech', price: 'From 850 MAD', duration: '3 hrs' },
                  ].map((row) => (
                    <tr key={row.school} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-[var(--text-primary)]">{row.school}</td>
                      <td className="px-4 py-3 text-[var(--text-secondary)]">{row.city}</td>
                      <td className="px-4 py-3 text-[var(--color-accent)] font-semibold">{row.price}</td>
                      <td className="px-4 py-3 text-[var(--text-muted)]">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Taking Recipes Home ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gift className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Taking Recipes &amp; Skills Home
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The class ends, but the cooking continues. Here is how to recreate Moroccan dishes at home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {takingRecipesHome.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much does a cooking class in Marrakech cost?',
                a: 'Group classes range from 350 MAD to 850 MAD per person. The Amal Center starts from 350 MAD; La Maison Arabe from 850 MAD. Private classes run from 1,200 MAD to 2,500 MAD. Prices include a market tour, ingredients, recipes, and the meal.',
              },
              {
                q: 'Do Moroccan cooking classes include a market tour?',
                a: 'Most classes start with a 30-60 minute guided walk through a local souk. You shop for spices, vegetables, and meat alongside your instructor. La Maison Arabe is one exception; they pre-source ingredients and skip the market visit.',
              },
              {
                q: 'Are there vegetarian or vegan cooking classes?',
                a: 'Nearly every school accommodates vegetarian requests. Souk Cuisine runs dedicated vegetarian sessions twice a week. Moroccan cuisine has many plant-based dishes: vegetable tagine, zaalouk, bessara, harira, and couscous with seven vegetables. Notify at booking for vegan needs.',
              },
              {
                q: 'What dishes will I learn to cook?',
                a: 'A half-day class covers 3-4 dishes: tagine, Moroccan salads, and mint tea. Full-day classes add pastilla, harira, msemen, or gazelle horn pastries. Some schools offer bread-only or street food sessions.',
              },
              {
                q: 'Can children join cooking classes in Morocco?',
                a: 'Many schools welcome children aged 6 and up. Souk Cuisine, La Maison Arabe, and Palais Amani all accept families. Kids enjoy kneading bread, rolling couscous, and assembling pastilla. Book a private family session and mention ages when reserving.',
              },
              {
                q: 'What spices will I learn about in class?',
                a: 'Every class covers ras el hanout, cumin, saffron, paprika, turmeric, ginger, and cinnamon. You learn to identify quality saffron, the difference between pre-ground and fresh cumin, and how Moroccan spice layering works. Most classes include spice tasting during the market tour.',
              },
              {
                q: 'What is a cooking riad?',
                a: 'A traditional guesthouse offering daily cooking classes as part of your stay. La Maison Arabe and Riad Monceau in Marrakech, and Palais Amani in Fez are prime examples. You join a class every day without crossing the city. Prices start from 1,200 MAD per night including accommodation and workshop.',
              },
              {
                q: 'Are there farm-to-table experiences outside the cities?',
                a: 'Yes. Operators run farm-to-table cooking days in the Ourika Valley, Imlil (High Atlas), and Oualidia coast. You visit a farm, pick produce, then cook with what you harvested. Day trips cost from 800 MAD to 1,500 MAD per person including transport, farm visit, class, and lunch.',
              },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to Moroccan dishes, street food, regional specialties, and where to eat.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spice-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Spice Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into ras el hanout, saffron, cumin, and the spice blends that define Moroccan cuisine.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything to see, do, and eat in Morocco&apos;s most popular city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Culture &amp; Etiquette
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, social norms, and cultural tips for respectful travel in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Cook Like a Moroccan?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From market stalls to simmering tagines, a cooking class is one of the most memorable
            experiences Morocco offers. Book ahead, bring your appetite, and prepare to eat well.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Utensils className="w-5 h-5" />
              Explore Moroccan Cuisine
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Plan Your Marrakech Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
