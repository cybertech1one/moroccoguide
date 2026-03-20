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
  Award,
  BookOpen,
  Leaf,
  Store,
  Coffee,
  Globe,
  ThumbsUp,
  CookingPot,
  Sun,
  ShoppingBasket,
  Shirt,
  CalendarDays,
  GraduationCap,
  Wheat,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Cooking Classes Guide 2026 | Learn to Cook Moroccan Food',
  description:
    'The complete guide to cooking classes in Morocco. Learn to cook tagine, couscous, pastilla, and msemen with local chefs. Half-day, full-day, and market-to-table experiences in Marrakech, Fes, Essaouira, and beyond. Prices, booking tips, and top cooking schools.',
  keywords: [
    'Morocco cooking class',
    'Moroccan cooking experience',
    'cooking class Marrakech',
    'learn to cook Moroccan food',
    'Moroccan cooking school',
    'tagine cooking class',
    'couscous cooking class Morocco',
    'Marrakech cooking workshop',
    'Fes cooking class',
    'riad cooking class Morocco',
    'Moroccan food workshop',
    'farm to table Morocco',
    'market visit cooking Morocco',
    'pastilla cooking class',
    'msemen cooking lesson',
    'Moroccan cooking class prices',
    'best cooking class Morocco 2026',
    'hands-on Moroccan cooking',
    'Moroccan cooking for beginners',
    'cooking holiday Morocco',
  ],
  openGraph: {
    title: 'Morocco Cooking Classes Guide 2026 | Learn to Cook Moroccan Food',
    description:
      'Everything you need to know about cooking classes in Morocco. Top schools, class types, what you will learn, prices, and booking tips for the ultimate Moroccan culinary experience.',
    url: `${BASE_URL}/morocco-cooking-classes-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-cooking-class.webp`,
        width: 1200,
        height: 630,
        alt: 'Hands-on Moroccan cooking class with colorful tagine pots and fresh spices on a traditional kitchen table',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Cooking Classes Guide 2026 | Learn Moroccan Cuisine',
    description:
      'The complete guide to cooking classes in Morocco. Tagine, couscous, pastilla, and more. Prices, schools, and booking tips.',
    images: [`${BASE_URL}/images/hero-cooking-class.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-cooking-classes-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-cooking-classes-guide`,
  name: 'Morocco Cooking Classes Guide 2026 | Learn to Cook Moroccan Food',
  description:
    'The complete guide to cooking classes in Morocco covering class types, top cooking schools by city, dishes you will learn, market shopping experience, typical schedules, what to wear, booking tips, and prices.',
  url: `${BASE_URL}/morocco-cooking-classes-guide`,
  image: `${BASE_URL}/images/hero-cooking-class.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-cooking-classes-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Cooking Classes Guide', item: `${BASE_URL}/morocco-cooking-classes-guide` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQPage
   ═══════════════════════════════════════════════════════════════ */

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a cooking class in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooking class prices in Morocco vary by type and city. A half-day class costs from 350-600 MAD per person. A full-day class with market visit costs from 600-1,200 MAD. Private classes in a luxury riad start from 1,500 MAD. Group classes are cheaper, while private sessions offer more hands-on attention. Prices may vary seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dishes will I learn to cook in a Moroccan cooking class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Moroccan cooking classes teach you to prepare 3-5 dishes. The most common dishes include tagine (chicken, lamb, or vegetable), Moroccan salads (zaalouk, taktouka), couscous, pastilla (sweet and savory pie), msemen or baghrir flatbreads, harira soup, and mint tea preparation. Some advanced classes cover pastilla, rfissa, or traditional bread baking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need cooking experience to take a Moroccan cooking class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No prior cooking experience is needed. Moroccan cooking classes are designed for all skill levels, from complete beginners to experienced home cooks. Instructors guide you through every step, from preparing spice blends to assembling and cooking each dish. The classes focus on technique and tradition rather than speed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which city in Morocco has the best cooking classes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech has the widest selection of cooking classes and the most competitive prices. Fes is considered the culinary capital and offers classes focused on the refined Fassi cuisine. Essaouira is best for seafood-focused classes. Chefchaouen offers intimate mountain cooking with Riffian specialties. Each city provides a unique culinary perspective.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a Moroccan cooking class with market visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cooking class with market visit typically includes a guided tour of a local souk to buy fresh ingredients (spices, vegetables, meat, herbs), a hands-on cooking session preparing 3-5 dishes, the meal you cooked served with mint tea, a recipe booklet to take home, and sometimes a spice gift pack. The market tour usually lasts 1-1.5 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take a vegetarian or vegan cooking class in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most cooking schools in Morocco offer vegetarian and vegan options. Moroccan cuisine has many naturally plant-based dishes including vegetable tagines, couscous with seven vegetables, zaalouk, taktouka, bissara, and herb salads. Inform the school when booking so they can adjust the menu. Some schools specialize in plant-based Moroccan cooking.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical Moroccan cooking class last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A half-day cooking class lasts 3-4 hours including cooking and eating. A full-day class with market visit runs 5-7 hours. A market-to-table experience (market shopping plus cooking plus dining) takes 4-5 hours. Multi-day cooking retreats are also available, running 2-5 days with accommodation included.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a cooking class in advance or on arrival?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Booking in advance is recommended, especially during peak season (October-April) and for popular schools in Marrakech and Fes. Many classes have limited spots (4-10 people). Book at least 2-3 days ahead for group classes and 1 week ahead for private sessions. Your riad or hotel can often arrange last-minute bookings with partner schools.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF COOKING CLASSES
   ═══════════════════════════════════════════════════════════════ */

const classTypes = [
  {
    name: 'Half-Day Cooking Class',
    icon: Clock,
    duration: '3-4 hours',
    description:
      'The most popular format for visitors with limited time. You arrive at the cooking school, receive an introduction to Moroccan ingredients and spice blends, then prepare 3-4 dishes from scratch under the guidance of a local chef. The class ends with sitting down to eat everything you have cooked, accompanied by fresh bread and mint tea. Ideal for fitting into a packed Morocco itinerary without sacrificing depth.',
    bestFor: 'First-time visitors, families, travelers on tight schedules',
    priceRange: 'From 350 MAD per person (group), from 800 MAD per person (private)',
    includes: ['Hands-on cooking of 3-4 dishes', 'Spice introduction session', 'Lunch or dinner you prepared', 'Recipe booklet', 'Mint tea ceremony'],
  },
  {
    name: 'Full-Day Cooking Experience',
    icon: Sun,
    duration: '5-7 hours',
    description:
      'A deeper immersion into Moroccan cooking that typically begins with a guided visit to a local souk to select fresh ingredients, followed by a comprehensive cooking session where you prepare 4-6 dishes including appetizers, a main course, bread, and dessert. Full-day classes often include lessons on bread baking in a traditional clay oven and preparing mint tea the authentic way. The experience concludes with a leisurely meal in a beautifully set table.',
    bestFor: 'Serious food enthusiasts, couples seeking a memorable experience',
    priceRange: 'From 600 MAD per person (group), from 1,200 MAD per person (private)',
    includes: ['Market tour and ingredient shopping', 'Extended cooking session (4-6 dishes)', 'Bread baking lesson', 'Full meal with beverages', 'Recipe booklet and sometimes a spice gift pack'],
  },
  {
    name: 'Market Visit + Cooking Class',
    icon: ShoppingBasket,
    duration: '4-5 hours',
    description:
      'This format starts where all great Moroccan meals begin: at the souk. A local guide takes you through the bustling market to select vegetables, meats, spices, and herbs. You learn how to identify quality ingredients, negotiate prices, and understand the seasonal rhythms of Moroccan produce. After shopping, you head to the kitchen to transform your market purchases into a multi-course Moroccan feast. The market component adds cultural depth that a kitchen-only class cannot match.',
    bestFor: 'Travelers who want the full cultural immersion, photographers',
    priceRange: 'From 450 MAD per person (group), from 1,000 MAD per person (private)',
    includes: ['Guided market tour (1-1.5 hours)', 'Ingredient purchasing experience', 'Cooking session (3-4 dishes)', 'Lunch or dinner', 'Recipe booklet'],
  },
  {
    name: 'Riad-Based Private Class',
    icon: Home,
    duration: '3-5 hours',
    description:
      'Many traditional riads in Marrakech, Fes, and other cities offer cooking classes in their own kitchens, taught by their resident cook or dada (the traditional family cook). These classes take place in intimate, beautiful settings with tiled courtyards, fountain-cooled kitchens, and rooftop terraces for dining. The personal attention and the atmosphere of cooking in a genuine Moroccan home make this the most authentic experience available.',
    bestFor: 'Couples, luxury travelers, those seeking an intimate experience',
    priceRange: 'From 500 MAD per person, from 1,500 MAD for a private session at luxury riads',
    includes: ['Intimate kitchen setting', 'Personal instruction from the riad dada', 'Rooftop or courtyard dining', 'Customized menu options', 'Mint tea and Moroccan pastries'],
  },
  {
    name: 'Farm-to-Table Experience',
    icon: Leaf,
    duration: '6-8 hours',
    description:
      'The most immersive cooking experience Morocco offers. You visit an organic farm or countryside garden outside the city, often in the Atlas foothills or Ourika Valley near Marrakech, where you pick your own herbs, vegetables, and fruits directly from the earth. A local family then teaches you to cook traditional Berber and Moroccan dishes using only what you have harvested. The farm setting, fresh air, and mountain views create an unforgettable day that connects food, culture, and landscape.',
    bestFor: 'Nature lovers, eco-travelers, families with children, slow-travel advocates',
    priceRange: 'From 700 MAD per person including transport, from 1,500 MAD for private groups',
    includes: ['Transport to and from the farm', 'Garden tour and ingredient harvesting', 'Cooking session with local family', 'Traditional Berber lunch', 'Tea ceremony with mountain views'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP COOKING SCHOOLS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const cookingSchoolsByCity = [
  {
    city: 'Marrakech',
    icon: Flame,
    title: 'The Cooking Class Capital',
    description:
      'Marrakech has the widest selection of cooking classes in Morocco, ranging from budget-friendly group sessions to exclusive private experiences in luxury riads. The city\'s vibrant souks provide the perfect backdrop for market-to-table classes, and its competitive market means excellent value.',
    schools: [
      { name: 'La Maison Arabe', specialty: 'The original Marrakech cooking school, operating since the 1990s. Set in one of the city\'s most prestigious riads with classes taught by experienced dadas.', price: 'From 700 MAD' },
      { name: 'Amal Women\'s Training Center', specialty: 'A social enterprise that trains disadvantaged women in culinary arts. Classes support a meaningful cause while delivering authentic Moroccan cooking instruction.', price: 'From 350 MAD' },
      { name: 'Riad Monceau Cooking', specialty: 'Intimate riad-based classes with market tours through the Mellah. Known for hands-on pastilla and couscous sessions.', price: 'From 500 MAD' },
      { name: 'Souk Cuisine', specialty: 'Popular market-to-table experiences beginning at the Rahba Kedima spice square. English-speaking chefs and small group sizes.', price: 'From 450 MAD' },
    ],
  },
  {
    city: 'Fes',
    icon: Award,
    title: 'The Culinary Capital',
    description:
      'Fes is Morocco\'s gastronomic heart, and cooking classes here focus on the refined Fassi cuisine that has been perfected over 1,200 years. Classes in Fes tend to be more traditional, with an emphasis on complex dishes like pastilla, rfissa, and elaborate tagine preparations that are unique to the city.',
    schools: [
      { name: 'Palais Amani Cooking', specialty: 'Luxury palace-turned-riad offering classes in a stunning Andalusian garden setting. Market tours begin at the iconic Talaa Kebira street.', price: 'From 800 MAD' },
      { name: 'Cafe Clock Cooking Workshop', specialty: 'Known for creative fusion of traditional Fassi and modern techniques. Classes include a camel burger masterclass alongside traditional dishes.', price: 'From 400 MAD' },
      { name: 'Dar Namir Kitchen', specialty: 'Family-run cooking experiences in a medina home. The grandmother teaches ancestral Fassi recipes passed down through generations.', price: 'From 450 MAD' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Compass,
    title: 'The Seafood Kitchen',
    description:
      'Cooking classes in Essaouira revolve around the Atlantic catch. Classes often begin at the fishing port where the day\'s catch is displayed on ice, then move to a kitchen to prepare seafood tagines, grilled fish with chermoula, and seafood pastilla. The relaxed coastal atmosphere makes for a laid-back learning experience.',
    schools: [
      { name: 'L\'Atelier de Madada', specialty: 'Renowned cooking school above the medina with rooftop terrace dining. Seafood-forward menu with chermoula and fish tagine.', price: 'From 550 MAD' },
      { name: 'Khmisa Cooking', specialty: 'Intimate home-cooking experience focused on traditional Essaouira coastal cuisine. Small groups of 2-6 people.', price: 'From 400 MAD' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Globe,
    title: 'The Mountain Kitchen',
    description:
      'Cooking classes in the Blue City offer a distinct Riffian perspective. Classes here focus on hearty mountain cuisine including bissara, Riffian couscous, and dishes featuring local goat cheese, wild herbs, and mountain honey. The intimate scale and relaxed pace of Chefchaouen make classes feel like cooking with a Moroccan friend.',
    schools: [
      { name: 'Lala Mesouda Kitchen', specialty: 'Home cooking in the heart of the blue medina. Riffian specialties including mountain herb tagine and hand-rolled couscous.', price: 'From 350 MAD' },
      { name: 'Chef Hicham\'s Table', specialty: 'Modern Moroccan cooking with Riffian roots. Includes a walk through the organic garden before cooking.', price: 'From 400 MAD' },
    ],
  },
  {
    city: 'Ourika Valley (Atlas Mountains)',
    icon: Leaf,
    title: 'The Farm Experience',
    description:
      'Just 45 minutes from Marrakech, the Ourika Valley offers farm-to-table cooking experiences in a stunning mountain setting. Classes take place at family-run organic farms where you harvest your own ingredients, learn traditional Berber cooking techniques, and dine with panoramic Atlas views. These day trips combine cooking, culture, and nature.',
    schools: [
      { name: 'Berber Farmhouse Experience', specialty: 'Organic vegetable garden tour followed by traditional Berber tagine cooking over open fire. Includes bread baking in a clay oven.', price: 'From 700 MAD (including transport)' },
      { name: 'Atlas Mountain Cooking', specialty: 'Full-day experience with herb foraging, couscous rolling, and tagine preparation. Family-style lunch on a panoramic terrace.', price: 'From 800 MAD (including transport)' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DISHES YOU WILL LEARN
   ═══════════════════════════════════════════════════════════════ */

const dishesYouWillLearn = [
  {
    name: 'Tagine',
    icon: CookingPot,
    difficulty: 'Beginner',
    description:
      'The cornerstone of every cooking class. You will learn to layer aromatics, spices, and protein in the iconic conical clay pot and slow-cook over low heat. Most classes teach chicken tagine with preserved lemons and olives or lamb tagine with prunes and almonds. The key techniques are building the spice base (chermoula), arranging ingredients for even cooking, and managing the low-heat process.',
    whatYouLearn: ['Building a chermoula spice paste', 'Layering ingredients in the tagine pot', 'Slow-cooking techniques', 'Garnishing with toasted almonds and herbs'],
    timeInClass: '45-60 minutes prep, 1-2 hours cooking',
  },
  {
    name: 'Couscous',
    icon: Wheat,
    difficulty: 'Intermediate',
    description:
      'Authentic Moroccan couscous is hand-rolled and steamed, not boiled from a box. In a cooking class, you learn the traditional technique of rolling semolina grains by hand with water and olive oil, then steaming the couscous three times over a fragrant vegetable and meat broth in a couscoussier. The result is light, fluffy grains that are nothing like instant couscous.',
    whatYouLearn: ['Hand-rolling couscous grains', 'Triple-steaming technique in a couscoussier', 'Preparing the vegetable and meat broth', 'Fluffing and serving on a communal platter'],
    timeInClass: '30 minutes rolling, 1.5-2 hours steaming (in stages)',
  },
  {
    name: 'Pastilla (B\'stilla)',
    icon: Award,
    difficulty: 'Advanced',
    description:
      'The crown jewel of Fassi cuisine and the most challenging dish taught in Moroccan cooking classes. You will learn to prepare the shredded pigeon or chicken filling, the egg and herb layer, and the toasted almond and sugar layer, then assemble everything between sheets of warqa pastry (similar to phyllo but thinner). The pastilla is baked until golden and dusted with cinnamon and powdered sugar.',
    whatYouLearn: ['Preparing the shredded meat filling', 'Making the egg and herb layer', 'Working with warqa pastry sheets', 'Assembly, baking, and the signature cinnamon-sugar dusting'],
    timeInClass: '1.5-2 hours prep and assembly, 30 minutes baking',
  },
  {
    name: 'Msemen & Baghrir',
    icon: Flame,
    difficulty: 'Beginner',
    description:
      'These two flatbreads are breakfast staples across Morocco. Msemen is a square, layered flatbread that is folded and pan-fried until crispy and golden. Baghrir is a round, spongy pancake with a thousand tiny bubbles on its surface. Both are simple to make but require practice to get right. Most classes teach both so you can compare the textures.',
    whatYouLearn: ['Making the dough from semolina and flour', 'Stretching and folding technique for msemen', 'Achieving the signature bubbles in baghrir', 'Proper pan-frying on a griddle'],
    timeInClass: '30-45 minutes including cooking',
  },
  {
    name: 'Moroccan Salads',
    icon: Leaf,
    difficulty: 'Beginner',
    description:
      'A spread of small cooked salads is the opening act of every Moroccan meal. You will learn to prepare zaalouk (smoky eggplant and tomato salad), taktouka (roasted pepper and tomato salad), carrot salad with orange blossom and cinnamon, and a simple tomato and onion salad. The technique of balancing sweet, savory, and aromatic flavors is central to Moroccan cooking.',
    whatYouLearn: ['Charring and peeling vegetables', 'Balancing cumin, paprika, and olive oil', 'Orange blossom water in savory salads', 'Traditional plating and presentation'],
    timeInClass: '20-30 minutes per salad',
  },
  {
    name: 'Harira Soup',
    icon: CookingPot,
    difficulty: 'Beginner',
    description:
      'Morocco\'s most beloved soup is hearty, nourishing, and surprisingly simple to prepare. You will learn to build a tomato-based broth, add lentils and chickpeas, season with fresh herbs and spices, and thicken with a flour and water slurry called tedouira. Harira is traditionally the soup that breaks the fast during Ramadan.',
    whatYouLearn: ['Building a rich tomato base with fresh herbs', 'Timing lentils and chickpeas for perfect texture', 'The tedouira thickening technique', 'Serving with dates and chebakia (if in season)'],
    timeInClass: '20 minutes prep, 45-60 minutes simmering',
  },
  {
    name: 'Mint Tea Ceremony',
    icon: Coffee,
    difficulty: 'Beginner',
    description:
      'Every cooking class in Morocco ends (and often begins) with mint tea. You will learn the precise ritual: rinsing gunpowder green tea to remove bitterness, adding fresh spearmint and generous sugar, brewing to the right strength, and pouring from a dramatic height to create the signature froth. The tea ceremony is as much about hospitality as it is about taste.',
    whatYouLearn: ['Selecting and rinsing gunpowder green tea', 'Proper proportions of tea, mint, and sugar', 'The dramatic high-pour technique', 'Cultural significance and serving etiquette'],
    timeInClass: '15-20 minutes',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MARKET SHOPPING EXPERIENCE
   ═══════════════════════════════════════════════════════════════ */

const marketExperience = [
  {
    stop: 'Spice Souk',
    icon: Sparkles,
    description: 'Your guide introduces you to essential Moroccan spices: cumin, paprika, turmeric, ginger, saffron, and the signature ras el hanout blend. You learn to smell for quality, identify fresh versus stale spices, and understand which spice goes with which dish. Most schools let you pick your own spices to use in the class.',
    buyingTip: 'Good ras el hanout should smell complex and aromatic, not dusty. Ask to smell before buying.',
  },
  {
    stop: 'Vegetable Market',
    icon: Leaf,
    description: 'Selecting the freshest seasonal produce is the foundation of Moroccan cooking. Your guide teaches you to choose ripe tomatoes, firm eggplants, fragrant herbs (cilantro and flat-leaf parsley are essential), preserved lemons, and seasonal vegetables. You learn which vegetables are in season and how seasonality shapes Moroccan menus.',
    buyingTip: 'Moroccan flat-leaf parsley is different from European curly parsley. Look for large, dark green bunches.',
  },
  {
    stop: 'Butcher and Poultry',
    icon: Store,
    description: 'If your class includes a meat dish, you visit the butcher section where chicken, lamb, and beef are sold fresh. Your guide helps select the right cut: lamb shoulder for tagine, whole chicken for roasting, or kefta-grade minced lamb for meatball tagine. All meat in Morocco is halal.',
    buyingTip: 'For the best tagine, ask for lamb shoulder (ktef). It has the right fat-to-meat ratio for slow cooking.',
  },
  {
    stop: 'Olive and Preserved Foods',
    icon: Heart,
    description: 'Morocco produces extraordinary olives, and the olive stalls are a kaleidoscope of colors and flavors. You will taste different varieties and learn to identify preserved lemons, harissa paste, and smen (aged butter). These preserved ingredients are the backbone of Moroccan cooking and add depth that fresh ingredients alone cannot achieve.',
    buyingTip: 'Preserved lemons should be soft and uniformly colored. Avoid any that look dried out.',
  },
  {
    stop: 'Dry Goods and Nuts',
    icon: ShoppingBasket,
    description: 'The final stop covers almonds, dried fruits, honey, orange blossom water, and semolina for couscous. You learn the difference between cooking-grade and eating-grade almonds, and how to select the best dried apricots and prunes for tagines. Argan oil (both culinary and cosmetic grades) is also available here.',
    buyingTip: 'Culinary argan oil is darker and nuttier than cosmetic argan oil. Never heat it; use as a finishing oil.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPICAL CLASS SCHEDULE
   ═══════════════════════════════════════════════════════════════ */

const typicalSchedule = [
  { time: '9:00 AM', activity: 'Meet at the cooking school or hotel pickup', icon: Home },
  { time: '9:15 AM', activity: 'Guided market tour: spices, vegetables, meat, and olives', icon: ShoppingBasket },
  { time: '10:30 AM', activity: 'Arrive at the kitchen, aprons on, ingredient prep begins', icon: Utensils },
  { time: '10:45 AM', activity: 'Introduction to Moroccan spice blends and key techniques', icon: Sparkles },
  { time: '11:00 AM', activity: 'Prepare Moroccan salads and appetizers', icon: Leaf },
  { time: '11:30 AM', activity: 'Assemble and start cooking the main tagine or couscous', icon: CookingPot },
  { time: '12:00 PM', activity: 'Bread making: msemen or traditional khobz', icon: Wheat },
  { time: '12:30 PM', activity: 'Mint tea ceremony and preparation', icon: Coffee },
  { time: '1:00 PM', activity: 'Sit down and eat everything you cooked together', icon: Users },
  { time: '2:00 PM', activity: 'Receive recipe booklet, photos, and farewells', icon: BookOpen },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO WEAR & BRING
   ═══════════════════════════════════════════════════════════════ */

const whatToWear = [
  {
    item: 'Comfortable, closed-toe shoes',
    icon: Shirt,
    reason: 'You will stand for 2-3 hours and may walk through a market. Sandals are fine for riad classes but closed shoes are safer around hot stoves and oil splashes.',
  },
  {
    item: 'Loose, breathable clothing',
    icon: Shirt,
    reason: 'Moroccan kitchens can get warm, especially during summer. Avoid flowing sleeves that might catch on pot handles. Most schools provide aprons.',
  },
  {
    item: 'Camera or smartphone',
    icon: Star,
    reason: 'The market visit and cooking process are incredibly photogenic. Some schools take photos for you, but it is worth bringing your own. Ask permission before photographing market vendors.',
  },
  {
    item: 'Small daypack',
    icon: ShoppingBasket,
    reason: 'Useful for carrying the recipe booklet, any spice gifts, and market purchases. Some schools offer spice packs to take home.',
  },
  {
    item: 'Cash for market tips and extras',
    icon: DollarSign,
    reason: 'Bring from 50-100 MAD in small denominations for tipping market guides and buying extra spices. Some schools include all costs, but having cash is always smart.',
  },
  {
    item: 'Empty stomach',
    icon: Utensils,
    reason: 'You will eat a full multi-course meal at the end. Skip breakfast or eat lightly. The food you cook is always the best meal of your trip.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    tip: 'Book 2-3 days in advance during peak season',
    icon: CalendarDays,
    detail: 'October through April is peak tourist season. Popular classes fill up fast, especially in Marrakech and Fes. During Ramadan, class availability may be limited.',
  },
  {
    tip: 'Ask about group size before booking',
    icon: Users,
    detail: 'The best classes have 4-8 participants maximum. Larger groups (10-15) mean less hands-on time. Private classes guarantee the most personal attention.',
  },
  {
    tip: 'Mention dietary restrictions when booking',
    icon: AlertTriangle,
    detail: 'All schools can accommodate vegetarian, vegan, gluten-free, and allergy-specific requests with advance notice. Do not wait until arrival day.',
  },
  {
    tip: 'Book through the school directly for best prices',
    icon: DollarSign,
    detail: 'Booking platforms like GetYourGuide and Viator add 15-25% markup. Email the school directly or book through your riad for better rates and flexibility.',
  },
  {
    tip: 'Check if transport is included',
    icon: Compass,
    detail: 'Some classes include hotel or riad pickup. Farm-to-table experiences always include transport. If not included, ask the school for taxi directions or arrange through your accommodation.',
  },
  {
    tip: 'Read recent reviews, not just star ratings',
    icon: Star,
    detail: 'Look for reviews mentioning hands-on participation versus just watching. The best classes have you doing real cooking, not observing a demonstration.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { type: 'Half-Day Group Class (3-4h)', price: 'From 350-600 MAD', notes: 'Most popular format, 4-10 people' },
  { type: 'Full-Day with Market Visit (5-7h)', price: 'From 600-1,200 MAD', notes: 'Includes market shopping experience' },
  { type: 'Private Riad Class (3-5h)', price: 'From 800-1,500 MAD', notes: 'Intimate, 1-4 people, customized menu' },
  { type: 'Farm-to-Table Day Trip (6-8h)', price: 'From 700-1,500 MAD', notes: 'Includes transport and garden tour' },
  { type: 'Multi-Day Cooking Retreat (2-5 days)', price: 'From 3,000-8,000 MAD', notes: 'Accommodation, meals, and daily classes' },
  { type: 'Luxury Private Experience', price: 'From 1,500-3,000 MAD', notes: 'Palace riad, personal chef, wine pairing' },
  { type: 'Kids & Family Class (2-3h)', price: 'From 250-400 MAD per child', notes: 'Simplified menu, hands-on for kids 5+' },
  { type: 'Online Pre-Trip Class', price: 'From 200-400 MAD', notes: 'Virtual session to prepare before your trip' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a cooking class in Morocco cost?',
    answer:
      'Cooking class prices in Morocco vary by type and city. A half-day group class costs from 350-600 MAD per person. A full-day class with market visit costs from 600-1,200 MAD. Private classes in a luxury riad start from 1,500 MAD. Farm-to-table day trips including transport cost from 700-1,500 MAD. Prices may vary by season, with peak season (October-April) sometimes commanding higher rates.',
  },
  {
    question: 'What dishes will I learn to cook in a Moroccan cooking class?',
    answer:
      'Most Moroccan cooking classes teach you to prepare 3-5 dishes. The most common include chicken or lamb tagine, a selection of Moroccan salads (zaalouk and taktouka), couscous (sometimes hand-rolled), msemen or baghrir flatbreads, and mint tea. Advanced classes may cover pastilla, rfissa, or harira. Most schools allow you to choose from their menu when booking.',
  },
  {
    question: 'Do I need cooking experience to take a Moroccan cooking class?',
    answer:
      'No prior cooking experience is needed. Classes are designed for all levels, from complete beginners to experienced cooks. Instructors guide you through every step, from chopping vegetables to assembling a tagine. The focus is on learning traditional techniques and understanding Moroccan flavors rather than speed or culinary precision.',
  },
  {
    question: 'Which city in Morocco has the best cooking classes?',
    answer:
      'Marrakech has the most options and the best value. Fes is ideal for refined Fassi cuisine including pastilla and rfissa. Essaouira is the top choice for seafood-focused classes. Chefchaouen offers intimate mountain cooking with Riffian specialties. The Ourika Valley near Marrakech provides the best farm-to-table experiences.',
  },
  {
    question: 'What is included in a Moroccan cooking class with market visit?',
    answer:
      'A market-to-table class typically includes a guided tour of a local souk to buy fresh ingredients, a hands-on cooking session preparing 3-5 dishes, the meal you cooked served with mint tea, a recipe booklet, and sometimes a spice gift pack. Some classes also include hotel pickup and drop-off. The market tour lasts 1-1.5 hours and the cooking session 2-3 hours.',
  },
  {
    question: 'Can I take a vegetarian or vegan cooking class in Morocco?',
    answer:
      'Yes. Most cooking schools offer vegetarian and vegan options with advance notice. Moroccan cuisine has many naturally plant-based dishes: vegetable tagines, couscous with seven vegetables, zaalouk, taktouka, bissara, and herb salads. Some schools in Marrakech and Fes specialize in plant-based menus. Inform the school when booking so they can prepare accordingly.',
  },
  {
    question: 'How long does a typical Moroccan cooking class last?',
    answer:
      'A half-day class lasts 3-4 hours including cooking and eating. A full-day class with market visit runs 5-7 hours. Farm-to-table experiences take 6-8 hours including transport. Multi-day cooking retreats run 2-5 days with accommodation and daily sessions. Most travelers find the half-day format ideal for balancing cooking with sightseeing.',
  },
  {
    question: 'Should I book a cooking class in advance or on arrival?',
    answer:
      'Book in advance during peak season (October through April) and for popular schools. Many classes have limited spots of 4-10 people and fill up days ahead. Book at least 2-3 days before for group classes and 1 week ahead for private sessions. During summer and shoulder season, last-minute booking is often possible. Your riad can usually arrange a class with 24 hours notice.',
  },
  {
    question: 'Are cooking classes in Morocco suitable for children?',
    answer:
      'Yes, many cooking schools welcome children aged 5 and older. Some offer dedicated family classes with simplified recipes and kid-friendly activities like bread kneading and cookie decorating. Children enjoy the market visit and the hands-on nature of Moroccan cooking. Inform the school of your children\'s ages when booking so they can adapt the experience.',
  },
  {
    question: 'Can I recreate Moroccan dishes at home after the class?',
    answer:
      'Absolutely. Every cooking class provides a recipe booklet to take home. Many of the techniques are straightforward once you understand the spice combinations. You can find most Moroccan ingredients at international grocery stores or online. A tagine pot, ras el hanout, preserved lemons, and cumin are the essential investments. Some schools even sell spice kits for your home kitchen.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCookingClassesGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-cooking-class.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Cooking Classes Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <CookingPot className="w-4 h-4" />
            Complete Cooking Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Cooking Classes:
            <br className="hidden md:block" /> Learn to Cook Moroccan Food
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From tagine and couscous to pastilla and msemen. Everything you need to know about
            cooking classes in Morocco: types, top schools, prices, and booking tips for 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why a Cooking Class Is the Best Thing You Can Do in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A cooking class in Morocco is more than a cooking lesson. It is a doorway into
                Moroccan culture, history, and family life that no museum visit or guided tour
                can match. When you stand in a medina kitchen rolling couscous by hand with a
                Moroccan grandmother, or navigate the sensory overload of a spice souk with a
                local chef, you connect with Morocco in a way that changes how you experience
                the rest of your trip.
              </p>
              <p>
                Moroccan cuisine is one of the most celebrated in the world, built on centuries
                of Berber, Arab, Andalusian, and French influences. The techniques are ancient
                but accessible: slow-cooking tagines in conical clay pots, hand-rolling couscous
                grain by grain, folding layers of impossibly thin pastry for pastilla, and
                pouring mint tea from a silver pot held high above the glass. These are skills
                you can learn in a single class and carry home for a lifetime.
              </p>
              <p>
                This guide covers every type of cooking class available in Morocco, the top
                cooking schools in each city, the dishes you will learn to prepare, what the
                market shopping experience is like, a typical class schedule, what to wear,
                how to book, and how much to budget. Whether you are a complete beginner or
                an experienced cook, there is a Moroccan cooking class designed for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Cooking Classes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CookingPot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Cooking Classes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From quick half-day workshops to immersive farm-to-table day trips, choose the format that fits your schedule and style.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by season, group size, and specific school.
          </p>

          <div className="space-y-8">
            {classTypes.map((classType, index) => {
              const ClassIcon = classType.icon;
              return (
                <div key={classType.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {classType.name}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {classType.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mt-1">
                        <ClassIcon className="w-3 h-3" />
                        <span>{classType.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{classType.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">What Is Included</h4>
                      <div className="space-y-1.5">
                        {classType.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Users className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {classType.bestFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Cooking Schools by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Cooking Schools by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best cooking schools across Morocco, from Marrakech&apos;s bustling medina kitchens to Atlas Mountain farm experiences.
          </p>

          <div className="space-y-8">
            {cookingSchoolsByCity.map((cityData) => {
              const CityIcon = cityData.icon;
              return (
                <div key={cityData.city} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {cityData.city}
                      </h3>
                      <span className="text-xs font-medium text-[var(--color-gold)]">{cityData.title}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-5">{cityData.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cityData.schools.map((school) => (
                      <div key={school.name} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {school.name}
                          </h4>
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                            {school.price}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{school.specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What You Will Learn to Cook ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What You Will Learn to Cook
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The signature Moroccan dishes taught in cooking classes, from beginner-friendly flatbreads to the advanced art of pastilla.
          </p>

          <div className="space-y-6">
            {dishesYouWillLearn.map((dish) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DishIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dish.name}
                        </h3>
                        <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                          dish.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                          dish.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {dish.difficulty}
                        </span>
                      </div>
                      <span className="text-xs text-[var(--text-muted)]">{dish.timeInClass}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{dish.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Key Skills You Will Learn</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {dish.whatYouLearn.map((skill, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Market Shopping Experience ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBasket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Market Shopping Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best cooking classes begin at the souk. Here is what to expect during the guided market tour that transforms your class from good to unforgettable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketExperience.map((stop, index) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.stop} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">{index + 1}</span>
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {stop.stop}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{stop.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {stop.buyingTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Typical Class Schedule ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Typical Class Schedule
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Here is what a full-day cooking class with market visit looks like from start to finish.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {typicalSchedule.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.time} className="flex items-start gap-4">
                    <div className="w-20 shrink-0 text-right">
                      <span className="text-sm font-bold text-[var(--color-accent)]">{item.time}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] pt-1">{item.activity}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Wear & Bring ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear &amp; Bring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to make sure you are comfortable and prepared for your cooking class experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToWear.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ThumbsUp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips for the Best Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to find, evaluate, and book the right cooking class in Morocco to match your preferences and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cooking Class Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for different types of cooking classes across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Peak season (October-April) and private sessions may cost more. Seasonal pricing can change.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Class Type</div>
                <div className="p-3 px-4">Price Per Person</div>
                <div className="p-3 px-4">Notes</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.type}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.type}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Moroccan Cooking Classes
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Moroccan Food &amp; Cooking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/cooking-classes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes Directory
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Browse all available cooking classes across Morocco with direct booking links and real-time availability.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cuisine" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Deep Dive
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the history, techniques, and cultural significance behind Morocco&apos;s legendary culinary traditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Complete Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                50+ must-try Moroccan dishes, street food, dining etiquette, prices, and the best food cities in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-tours" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Guided Food Tours
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Guided and self-guided food tours across Morocco&apos;s greatest food cities with prices and booking tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/recipes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <CookingPot className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Recipes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Step-by-step recipes to recreate your favorite Moroccan dishes at home with authentic ingredients and techniques.
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
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Cook Like a Moroccan?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the bustling spice souks to the quiet kitchens of family riads, a cooking class is
            the most rewarding experience you can have in Morocco. Book your class, roll up your
            sleeves, and bring the flavors of Morocco home with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-white text-[var(--color-accent)] font-semibold hover:bg-white/90 transition-colors"
            >
              <CookingPot className="w-5 h-5" />
              Browse Cooking Classes
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Utensils className="w-5 h-5" />
              Explore Moroccan Food
            </Link>
          </div>
          <p className="text-sm text-white/60 mt-6">
            Cooking classes from 350 MAD per person. Market-to-table experiences from 450 MAD. Seasonal pricing may vary.
          </p>
        </div>
      </section>
    </>
  );
}
