import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ChefHat,
  MapPin,
  Clock,
  Users,
  DollarSign,
  Star,
  Flame,
  ShoppingBasket,
  UtensilsCrossed,
  Leaf,
  BookOpen,
  Heart,
  Coffee,
  Sparkles,
  CheckCircle,
  Globe,
  CalendarDays,
  ArrowRight,
  CookingPot,
  Phone,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Moroccan Cooking Classes | Top 10 Schools, Recipes & Complete Guide',
  description:
    'The definitive guide to cooking classes in Morocco. Top 10 cooking schools in Marrakech, Fes, Essaouira, and beyond. Real school names, prices, what you will learn, market tour details, step-by-step class experience, booking tips, and authentic recipes to try at home.',
  keywords: [
    'morocco cooking class',
    'marrakech cooking class',
    'moroccan tagine recipe',
    'fes cooking school',
    'moroccan cuisine workshop',
    'learn moroccan cooking',
    'couscous class morocco',
    'moroccan spice guide',
    'la maison arabe cooking',
    'souk cuisine marrakech',
    'essaouira cooking class',
    'moroccan food experience',
    'moroccan pastry class',
    'mint tea ceremony morocco',
    'moroccan culinary tour',
    'amal center marrakech',
    'cafe clock cooking',
    'palais amani fes',
    'moroccan cooking recipes',
    'moroccan cooking at home',
    'best cooking class morocco',
    'moroccan market tour',
  ],
  openGraph: {
    title: 'Best Moroccan Cooking Classes | Top 10 Schools & Complete Guide',
    description:
      'Learn to cook authentic Moroccan dishes in traditional kitchens. Top 10 cooking schools with real names and prices, signature dishes, market tours, step-by-step guide, booking tips, and recipes to try at home.',
    url: 'https://citytoursmorocco.com/cooking-classes',
    images: [
      {
        url: '/images/photo-tagine-closeup.webp',
        width: 1200,
        height: 630,
        alt: 'Moroccan cooking class with traditional tagine pots and fresh spices',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/cooking-classes' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top 10 Moroccan Cooking Classes',
  description:
    'Comprehensive guide to the best cooking classes across Morocco, featuring top schools, signature dishes, market tours, and essential spice knowledge.',
  url: 'https://citytoursmorocco.com/cooking-classes',
  numberOfItems: 10,
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'LocalBusiness', name: 'La Maison Arabe', address: { '@type': 'PostalAddress', streetAddress: '1 Derb Assehbe, Bab Doukkala', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'LocalBusiness', name: 'Souk Cuisine', address: { '@type': 'PostalAddress', streetAddress: 'Derb Tahtah 14, Riad Zitoun Lakdim', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'LocalBusiness', name: 'Amal Women\'s Training Center', address: { '@type': 'PostalAddress', streetAddress: 'Rue Allal Ben Ahmed, Gueliz', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'LocalBusiness', name: 'Cafe Clock Fes', address: { '@type': 'PostalAddress', streetAddress: '7 Derb el Magana, Talaa Kbira', addressLocality: 'Fes', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 5, item: { '@type': 'LocalBusiness', name: 'Palais Amani', address: { '@type': 'PostalAddress', streetAddress: '12 Derb el Miter, Oued Zhoune', addressLocality: 'Fes', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 6, item: { '@type': 'LocalBusiness', name: 'Dar Namir', address: { '@type': 'PostalAddress', streetAddress: '5 Arsat Lmaach, Bab Doukkala', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 7, item: { '@type': 'LocalBusiness', name: 'L\'Atelier de Madada', address: { '@type': 'PostalAddress', streetAddress: '5 Rue Youssef el Fassi', addressLocality: 'Essaouira', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 8, item: { '@type': 'LocalBusiness', name: 'Khmissa Cooking', address: { '@type': 'PostalAddress', streetAddress: 'Rue Laalouj', addressLocality: 'Essaouira', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 9, item: { '@type': 'LocalBusiness', name: 'Ruined Garden Fes', address: { '@type': 'PostalAddress', streetAddress: '15 Derb Idrissy, Sidi Ahmed Chaoui', addressLocality: 'Fes', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 10, item: { '@type': 'LocalBusiness', name: 'Lina Ryad & Spa', address: { '@type': 'PostalAddress', streetAddress: 'Rue Ahmed Boukmakh', addressLocality: 'Chefchaouen', addressCountry: 'MA' } } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   TOP 10 COOKING SCHOOLS DATA
   ═══════════════════════════════════════════════════════════════ */

const cookingSchools = [
  {
    rank: 1,
    name: 'La Maison Arabe',
    city: 'Marrakech',
    address: '1 Derb Assehbe, Bab Doukkala, Marrakech 40000',
    description:
      'Morocco\'s original and most prestigious cooking school, established in 1946 by two French women who fell in love with Moroccan cuisine. Set in a gorgeous riad with lush courtyard gardens, classes are taught by traditional dadas (home cooks) who have spent decades perfecting family recipes passed down through generations. The experience begins with a guided market tour through the Bab Doukkala souk, where you shop for ingredients with your dada, learning to select the finest spices, freshest vegetables, and best-quality meats.',
    whatYoullLearn: [
      'Three-course Moroccan meal including tagine, couscous or pastilla, and Moroccan salads',
      'Traditional spice blending and the art of creating ras el hanout',
      'Bread making: khobz (round loaf) and msemen (layered flatbread)',
      'Mint tea ceremony with proper pouring technique',
      'Preserving lemons and making chermoula marinade',
    ],
    marketTour: 'Guided tour of the Bab Doukkala souk with your dada instructor. You visit the spice merchants, vegetable sellers, olive vendors, and the butcher, learning how to identify quality ingredients and negotiate prices. The tour is a cultural experience in itself, lasting approximately 45 minutes.',
    price: '700 - 1,200 MAD',
    duration: '4-5 hours (including market tour)',
    groupSize: '2-10 guests',
    rating: 5,
    bestFor: 'Classic experience, luxury setting, couples',
  },
  {
    rank: 2,
    name: 'Souk Cuisine',
    city: 'Marrakech',
    address: 'Derb Tahtah 14, Riad Zitoun Lakdim, Marrakech Medina',
    description:
      'Founded by Dutch-Moroccan food writer and cookbook author Gemma van de Sande, Souk Cuisine is widely regarded as one of the most authentic cooking experiences in Marrakech. The intimate setting in a traditional riad kitchen, combined with small group sizes and Gemma\'s encyclopedic knowledge of Moroccan food history, creates an experience that feels more like cooking with a friend than attending a class. The emphasis is on understanding the "why" behind each technique.',
    whatYoullLearn: [
      'Full three-course Moroccan meal from scratch',
      'Market navigation and ingredient selection at the Mellah spice souk',
      'Hand-rolling couscous: the traditional technique steamed three times',
      'Balancing the sweet-savory signature of Moroccan cuisine',
      'The art of layering flavors in a tagine (not just throwing everything in)',
    ],
    marketTour: 'Guided walking tour through the Mellah spice market and the old Jewish quarter. Gemma or her team explains the history of each area while you buy ingredients. You will visit the spice merchants, pickle sellers, and the artisanal olive oil shops. Expect colorful stories and cultural context alongside the shopping.',
    price: '500 - 800 MAD',
    duration: '4 hours (including market tour)',
    groupSize: '2-8 guests',
    rating: 5,
    bestFor: 'Food writing enthusiasts, intimate experience, solo travelers',
  },
  {
    rank: 3,
    name: "Amal Women's Training Center",
    city: 'Marrakech',
    address: 'Rue Allal Ben Ahmed, Gueliz, Marrakech',
    description:
      'A non-profit social enterprise that trains disadvantaged women in culinary arts and restaurant management, giving them the skills and confidence to achieve economic independence. Your cooking class fee directly funds this mission, making it one of the most meaningful food experiences in Morocco. The women who teach the classes have graduated from the Amal training program and cook with genuine passion and pride. The restaurant attached to the center serves outstanding Moroccan food daily.',
    whatYoullLearn: [
      'Traditional home-cooking techniques passed down by Moroccan mothers and grandmothers',
      'Tagine preparation: the patient art of slow-cooking',
      'Moroccan salad preparation: zaalouk, taktouka, carrot salad with cumin',
      'Bread making and the cultural significance of khobz in Moroccan life',
      'Dessert preparation: chebakia or briouats with almond filling',
    ],
    marketTour: 'Market tour available upon request. The standard class takes place in the Amal kitchen in Gueliz (the modern city), where instructors bring pre-selected, high-quality ingredients. Some classes include a visit to the local Gueliz market for produce.',
    price: '300 - 500 MAD',
    duration: '3 hours',
    groupSize: '4-12 guests',
    rating: 5,
    bestFor: 'Socially conscious travelers, budget-friendly, meaningful experience',
  },
  {
    rank: 4,
    name: 'Cafe Clock',
    city: 'Fes',
    address: '7 Derb el Magana, Talaa Kbira, Fes Medina',
    description:
      'The Fes branch of the beloved Cafe Clock cultural center, nestled in a restored riad in the heart of the world\'s largest car-free urban area. Cooking classes explore Fassi cuisine, which is considered Morocco\'s most refined and complex culinary tradition. The Fes medina setting is unbeatable -- you cook surrounded by centuries of history in a kitchen that overlooks the ancient city. The chefs are local Fassis who grew up in the medina and know every food tradition intimately.',
    whatYoullLearn: [
      'Fassi palace cuisine: pastilla bil djaj (chicken pastilla) or rfissa',
      'The complex spice blends that define Fes cooking (more saffron, more subtlety)',
      'Traditional Fassi salads and appetizers',
      'The art of making warqa pastry (the paper-thin sheets used in pastilla)',
      'Cultural context: why Fes is the gastronomic capital of Morocco',
    ],
    marketTour: 'The class includes a walking tour down the famous Talaa Kbira (the main artery of the Fes medina). You visit the Souk el-Attarine (spice and perfume souk), the olive merchants, and the neighborhood ferran (communal bread oven). The Fes medina market tour is more immersive than anywhere else in Morocco -- expect narrow lanes, ancient fondouks, and centuries-old shops.',
    price: '400 - 700 MAD',
    duration: '4 hours (including medina market tour)',
    groupSize: '4-10 guests',
    rating: 5,
    bestFor: 'Cultural immersion, Fassi cuisine, solo travelers',
  },
  {
    rank: 5,
    name: 'Palais Amani',
    city: 'Fes',
    address: '12 Derb el Miter, Oued Zhoune, Fes Medina',
    description:
      'A luxury riad and cooking school set in a meticulously restored 17th-century palace. Palais Amani offers the most premium cooking experience in Fes. Classes begin with a tour of their organic rooftop garden, where you pick herbs, vegetables, and edible flowers that you will cook with. The professional kitchen features stunning zellige tilework and copper pots. The head chef teaches refined Fassi recipes with a focus on technique and presentation that bridges tradition and contemporary fine dining.',
    whatYoullLearn: [
      'Refined Fassi tagine with seasonal ingredients from the rooftop garden',
      'Pastilla preparation from scratch, including making warqa pastry by hand',
      'Harira soup: the authentic Fassi version with tedouira thickener',
      'Moroccan pastry arts: kaab el ghazal (gazelle horns) and briouat bil louz',
      'Farm-to-table principles applied to Moroccan cooking',
    ],
    marketTour: 'The experience begins in the Palais Amani rooftop organic garden, where you harvest herbs (mint, cilantro, parsley, verbena), vegetables, and edible flowers. For the full experience, add the optional medina market tour through the Oued Zhoune quarter to the spice souk and back.',
    price: '800 - 1,500 MAD',
    duration: '5 hours (including garden tour)',
    groupSize: '2-8 guests',
    rating: 5,
    bestFor: 'Luxury experience, garden-to-table, serious food enthusiasts',
  },
  {
    rank: 6,
    name: 'Dar Namir',
    city: 'Marrakech',
    address: '5 Arsat Lmaach, Bab Doukkala, Marrakech Medina',
    description:
      'A beautifully intimate riad cooking experience run by a Moroccan-British couple who are passionate about preserving authentic home-cooking traditions. What sets Dar Namir apart is the deep dive into a single dish rather than rushing through multiple courses. You might spend three hours perfecting one tagine, understanding every decision point and variation. The riad itself is a stunning example of traditional Marrakchi architecture with a serene courtyard where you dine after cooking.',
    whatYoullLearn: [
      'Deep-dive into a single dish: tagine, couscous, or pastilla (your choice)',
      'The science behind Moroccan slow-cooking: why temperature and timing matter',
      'Spice identification and blending: create your own custom ras el hanout',
      'Preserved lemon making: a 30-day process explained and started in class',
      'The philosophy of Moroccan home cooking: patience, generosity, and love',
    ],
    marketTour: 'Optional market tour through the Bab Doukkala neighborhood souk. The host leads you through the local market (not the tourist-oriented souks) where real Marrakchi families shop. You visit the neighborhood ferran (communal oven) and learn about the daily rhythm of Moroccan home cooking.',
    price: '500 - 900 MAD',
    duration: '3-4 hours',
    groupSize: '2-6 guests',
    rating: 5,
    bestFor: 'Deep learning, perfectionists, couples, repeat visitors',
  },
  {
    rank: 7,
    name: "L'Atelier de Madada",
    city: 'Essaouira',
    address: '5 Rue Youssef el Fassi, Essaouira Medina',
    description:
      'Run by the team behind the acclaimed Madada Mogador boutique hotel and restaurant, this is Essaouira\'s premier cooking school. The coastal setting means the focus is on seafood: you learn to prepare exceptional chermoula-marinated fish, seafood pastilla with shrimp and vermicelli, and the classic Essaouira fish tagine. The morning begins at the fishing port, watching fishermen auction their catch and selecting the freshest fish for your class. The kitchen is modern and well-equipped, with ocean breezes and medina views.',
    whatYoullLearn: [
      'Seafood preparation: cleaning, filleting, and marinating fish Moroccan-style',
      'Chermoula: the essential Moroccan marinade for fish and seafood',
      'Fish tagine with potatoes, peppers, tomatoes, olives, and preserved lemons',
      'Seafood pastilla: the Essaouira coastal variation with shrimp and vermicelli',
      'Using culinary argan oil as a finishing element in Moroccan cooking',
    ],
    marketTour: 'The class starts at the Essaouira fishing port (Port de Peche) at 9 AM, where you watch the daily fish auction and choose your catch. You then walk through the medina to the spice merchants and vegetable sellers, learning about the coastal ingredients that define Essaouira cuisine. The port visit alone is worth the price of the class.',
    price: '600 - 1,000 MAD',
    duration: '4 hours (including port and market tour)',
    groupSize: '2-8 guests',
    rating: 5,
    bestFor: 'Seafood lovers, unique port experience, food photographers',
  },
  {
    rank: 8,
    name: 'Khmissa Cooking',
    city: 'Essaouira',
    address: 'Rue Laalouj, Essaouira Medina',
    description:
      'A family-run cooking experience in a traditional Essaouira home that feels nothing like a tourist operation. You cook alongside a local mother and daughter who share generations of coastal Moroccan recipes, family stories, and kitchen wisdom. The kitchen is a real family kitchen (not a showroom), and the recipes are the actual dishes this family cooks for themselves. Maximum six guests per class ensures genuine intimacy and connection. The chermoula-marinated fish and seafood pastilla are unforgettable.',
    whatYoullLearn: [
      'Authentic family recipes that have never been written down before',
      'Coastal Moroccan fish tagine with chermoula, the family\'s own version',
      'Moroccan bread: baking khobz in the traditional home method',
      'Seasonal salad spread: whatever is freshest at the market that morning',
      'Mint tea preparation with family hospitality rituals',
    ],
    marketTour: 'The mother accompanies you to her regular market vendors in the Essaouira medina. You see where a real Moroccan family buys its daily ingredients, meet the vendors by name, and experience the social dimension of Moroccan food shopping. The dynamic between the mother and her preferred merchants is a window into daily Moroccan life.',
    price: '400 - 700 MAD',
    duration: '3-4 hours (including market visit)',
    groupSize: '2-6 guests',
    rating: 5,
    bestFor: 'Authentic family experience, small groups, cultural depth',
  },
  {
    rank: 9,
    name: 'Ruined Garden',
    city: 'Fes',
    address: '15 Derb Idrissy, Sidi Ahmed Chaoui, Fes Medina',
    description:
      'One of Fes\'s most atmospheric restaurants, set in a partially ruined riad with a garden growing through the crumbling walls. The Ruined Garden offers cooking workshops that combine the romantic setting with serious Fassi culinary instruction. The British-Moroccan owner has spent years documenting Fassi family recipes, and the classes draw from this research. The food here is widely regarded as some of the best in the Fes medina, and the cooking class lets you learn the secrets behind the menu.',
    whatYoullLearn: [
      'Fassi tagine variations using seasonal, locally sourced ingredients',
      'The Ruined Garden\'s signature dishes: recipes refined over years of research',
      'Traditional Fassi pastry and dessert techniques',
      'The history and cultural context of Fassi palace cuisine',
      'Seasonal cooking: how Moroccan cuisine changes through the year',
    ],
    marketTour: 'Classes include a guided walk through the Sidi Ahmed Chaoui neighborhood of the Fes medina, one of the oldest residential quarters. You visit local shops and the neighborhood ferran (communal oven). The route passes through some of the most beautiful (and least touristic) parts of the medina.',
    price: '500 - 900 MAD',
    duration: '4 hours',
    groupSize: '2-8 guests',
    rating: 5,
    bestFor: 'Foodies, atmospheric setting, Fassi cuisine deep-dive',
  },
  {
    rank: 10,
    name: 'Lina Ryad & Spa',
    city: 'Chefchaouen',
    address: 'Rue Ahmed Boukmakh, Chefchaouen Medina',
    description:
      'Learn to cook in the heart of the Blue City, surrounded by the famous blue-washed walls and the cool mountain air of the Rif. This boutique riad offers intimate classes focusing on Riffian mountain cuisine, which is distinctly different from the cooking of the plains and coast. Dishes include unique preparations like bessara (thick fava bean soup), Riffian-style tagines with local mountain herbs, and traditional bread baked in a clay oven. The setting on a Chefchaouen rooftop with views of the blue medina is spectacular.',
    whatYoullLearn: [
      'Riffian mountain cuisine: dishes unique to the Rif region of northern Morocco',
      'Bessara (fava bean soup): the iconic dish of Chefchaouen',
      'Regional tagine variations with wild mountain herbs and local goat cheese',
      'Traditional Riffian bread baked in a clay oven',
      'The differences between northern, central, and southern Moroccan cooking',
    ],
    marketTour: 'Walking tour through the Chefchaouen medina to the local market where Riffian women sell mountain produce, fresh goat cheese (jben), wild herbs, and local honey. The Chefchaouen market is small and intimate, and the blue-washed setting makes it one of the most photogenic market tours in Morocco.',
    price: '350 - 600 MAD',
    duration: '3 hours (including market walk)',
    groupSize: '2-6 guests',
    rating: 4,
    bestFor: 'Off-the-beaten-path, mountain cuisine, photography, budget-friendly',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SIGNATURE DISHES DATA
   ═══════════════════════════════════════════════════════════════ */

const signatureDishes = [
  {
    name: 'Tagine',
    arabicName: 'طاجين',
    description:
      'The iconic slow-cooked stew named after the conical clay pot it is cooked in. You will learn to prepare lamb with prunes and almonds, chicken with preserved lemons and olives, and seasonal vegetable varieties. The secret is in the layering of spices and the patient, low-temperature cooking that melds flavors into something extraordinary. Most classes teach at least two tagine variations.',
    image: '/images/photo-tagine-closeup.webp',
    highlight: 'Learn 2-3 varieties in one class',
  },
  {
    name: 'Couscous',
    arabicName: 'كسكس',
    description:
      'Morocco\'s Friday dish, traditionally served after midday prayers. You will learn the art of hand-rolling semolina into perfect tiny grains, then steaming them three times over a fragrant vegetable or meat broth in a couscoussier. The process is meditative and the result is incomparably lighter and fluffier than any packaged couscous. The hand-rolling technique alone takes 30-45 minutes to learn properly.',
    image: '/images/hero-food.webp',
    highlight: 'Hand-rolled, steamed 3 times',
  },
  {
    name: 'Pastilla (B\'stilla)',
    arabicName: 'بسطيلة',
    description:
      'A masterpiece of Moroccan cuisine that perfectly balances sweet and savory. Layers of warqa pastry are filled with shredded pigeon or chicken cooked with saffron and ginger, almonds, cinnamon, and a dusting of powdered sugar. Originally from Fes, it is one of the most complex and rewarding dishes to learn. Making warqa pastry from scratch is the most impressive skill you will take home.',
    image: '/images/hero-food.webp',
    highlight: 'Sweet-savory masterpiece',
  },
  {
    name: 'Harira',
    arabicName: 'حريرة',
    description:
      'The beloved Ramadan soup that every Moroccan family prepares to break the fast each evening. A hearty, tomato-based soup with lentils, chickpeas, vermicelli, fresh herbs, and a complex spice blend. You will learn to achieve the perfect velvety texture using the traditional tedouira (flour and water thickener) and to balance the soup\'s signature harmony of warming spices.',
    image: '/images/hero-food.webp',
    highlight: 'Traditional Ramadan recipe',
  },
  {
    name: 'Msemen & Moroccan Breads',
    arabicName: 'مسمن وخبز',
    description:
      'Master the art of Moroccan bread-making. Msemen (square, layered flatbread) requires learning to stretch dough paper-thin and fold it with oil and semolina. Khobz (round bread) is kneaded and baked. Baghrir (thousand-hole pancakes) involves a thin semolina batter. These are the foundations of Moroccan home cooking -- bread appears at every single meal.',
    image: '/images/photo-moroccan-bread.webp',
    highlight: 'Msemen, khobz, baghrir techniques',
  },
  {
    name: 'Moroccan Salads',
    arabicName: 'سلطات مغربية',
    description:
      'Learn to prepare zaalouk (smoky eggplant and tomato), taktouka (roasted pepper and tomato), and the vibrant carrot salad with cumin and orange blossom water. Moroccan meals begin with an array of cooked salads (khlii) that showcase the freshness of seasonal produce and the subtlety of the spice cabinet. These are the easiest dishes to master and the most likely to become part of your regular cooking.',
    image: '/images/hero-food.webp',
    highlight: 'Zaalouk, taktouka, and more',
  },
  {
    name: 'Mint Tea Ceremony',
    arabicName: 'أتاي',
    description:
      'Far more than a drink, Moroccan mint tea (atay) is a ritual of hospitality and friendship. You will learn the precise proportions of Chinese gunpowder green tea, fresh spearmint (nana), and sugar. The art of pouring from height to create a foam. The etiquette of serving: always offer with the right hand, always serve three rounds. This is often the final lesson in a cooking class and the most memorable.',
    image: '/images/photo-mint-tea-pouring.webp',
    highlight: 'The art of pouring from height',
  },
  {
    name: 'Moroccan Pastries',
    arabicName: 'حلويات مغربية',
    description:
      'Master the art of chebakia (sesame-coated rose water cookies shaped into intricate flowers), kaab el ghazal (gazelle horns filled with almond paste and orange blossom water), briouat bil louz (crispy phyllo triangles with almond filling dipped in honey), and the rich, no-bake sellou. These are the jewels of Moroccan patisserie and the traditional accompaniments to mint tea.',
    image: '/images/hero-food.webp',
    highlight: 'Chebakia, gazelle horns, briouat',
  },
];

/* ═══════════════════════════════════════════════════════════════
   CLASS TYPES DATA
   ═══════════════════════════════════════════════════════════════ */

const classTypes = [
  {
    icon: Users,
    type: 'Group Class',
    price: '200 - 400 MAD',
    duration: '3-4 hours',
    description:
      'Join 6-12 other food enthusiasts for a sociable cooking experience. Typically includes a guided market visit where you buy ingredients, followed by hands-on cooking and a shared feast. Great for solo travelers and couples who enjoy meeting fellow food lovers.',
    includes: ['Market tour', '3-4 dishes', 'Recipe booklet', 'Shared meal'],
  },
  {
    icon: Star,
    type: 'Private Class',
    price: '600 - 1,200 MAD',
    duration: '4-5 hours',
    description:
      'Exclusive one-on-one (or couples/family) session with a dedicated chef. Choose your own menu, learn at your own pace, and enjoy personalized instruction. The chef adapts to your skill level and dietary preferences. Worth the premium for serious food enthusiasts.',
    includes: ['Personalized menu', 'Flexible pace', 'Dietary accommodations', 'Extra recipes'],
  },
  {
    icon: Leaf,
    type: 'Farm-to-Table',
    price: '800 - 1,500 MAD',
    duration: '5-7 hours',
    description:
      'A full-day immersive experience that starts at an organic farm or garden where you harvest herbs, vegetables, and fruits. You then cook a multi-course meal using only what you have picked. Available in the Ourika Valley near Marrakech, Ouirgane, and Essaouira.',
    includes: ['Farm/garden tour', 'Harvest experience', 'Full-day cooking', 'Organic feast'],
  },
  {
    icon: Heart,
    type: 'Riad Cooking',
    price: '400 - 800 MAD',
    duration: '3-4 hours',
    description:
      'Learn to cook in the intimate setting of a traditional Moroccan riad. The kitchen is often in the courtyard or on the rooftop terrace, with the cook being a local dada (household cook) who has perfected these recipes over decades. Small groups of 2-6 people ensure genuine interaction.',
    includes: ['Intimate setting', 'Traditional dada teacher', 'Courtyard dining', 'Authentic recipes'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   STEP-BY-STEP TYPICAL DAY DATA
   ═══════════════════════════════════════════════════════════════ */

const typicalDay = [
  {
    time: '9:00 AM',
    title: 'Welcome & Introduction',
    description: 'Arrive at the school or riad and be welcomed with a glass of fresh mint tea and traditional Moroccan pastries. Your chef introduces the day\'s menu, explains the history behind each dish you will prepare, and describes the ingredients you will be buying. You receive an apron and a recipe booklet.',
  },
  {
    time: '9:30 AM',
    title: 'Market Tour & Ingredient Shopping',
    description: 'Walk through the bustling souk with your chef. Learn to select the freshest vegetables by touch and smell, negotiate with spice merchants, choose the best cuts of meat from the butcher, and identify quality saffron from imitation. The market tour is a cultural immersion as much as a shopping trip -- your chef shares stories, explains local customs, and introduces you to their favorite vendors by name.',
  },
  {
    time: '10:30 AM',
    title: 'Spice Preparation & Blending',
    description: 'Back in the kitchen, wash your hands and set up your station. Learn to toast whole spices in a dry pan to release their essential oils, then grind them in a mortar and pestle. Blend your own ras el hanout or chermoula. Understand how each spice contributes to the final dish and why certain combinations work together. This is the knowledge that will transform your cooking at home.',
  },
  {
    time: '11:00 AM',
    title: 'Cooking Begins: Salads & Preparation',
    description: 'Start with the Moroccan salad spread: charring eggplant over a flame for zaalouk, roasting peppers for taktouka, preparing the carrot salad. While the salads cool, begin the main dish preparation: marinating meat, chopping onions, layering the tagine. Your chef demonstrates each technique, then you replicate it yourself. The pace is unhurried and there is always time for questions.',
  },
  {
    time: '11:45 AM',
    title: 'Main Dish Assembly & Slow Cooking',
    description: 'Assemble your tagine or begin hand-rolling couscous. The chef teaches you the layering technique for tagines (onions first, then meat, then vegetables, then liquid and spices). For couscous, learn the rolling motion with your palms and fingers, working semolina and water into tiny, uniform grains. Once assembled, the tagine goes on low heat and the couscous begins its first steaming.',
  },
  {
    time: '12:15 PM',
    title: 'Bread Baking & Pastry Making',
    description: 'While the tagine simmers, learn to make khobz (round Moroccan bread), msemen (layered flatbread), or baghrir (thousand-hole pancakes). Knead the dough, learn the stretching technique for msemen, and shape the bread. If pastries are on the menu, this is when you fill and shape chebakia, briouat, or kaab el ghazal. Many students say the bread-making is the most satisfying part of the class.',
  },
  {
    time: '1:00 PM',
    title: 'The Feast',
    description: 'Sit down to enjoy everything you have cooked, served family-style on a communal table in the courtyard, on the rooftop terrace, or in the dining room. The meal follows traditional Moroccan order: salads first, then bread, then the main tagine or couscous, then pastries and mint tea. Your chef joins you and shares stories of Moroccan food culture, family traditions, and cooking wisdom.',
  },
  {
    time: '2:00 PM',
    title: 'Mint Tea Ceremony & Farewell',
    description: 'Learn the art of Moroccan mint tea preparation: the precise ratio of gunpowder green tea, fresh spearmint, and sugar; the rinsing of the tea leaves; the high pour to create foam. Practice pouring yourself. Take home your printed recipes, your custom spice blend (if you made one), and the confidence to recreate these dishes in your own kitchen. Many schools also email digital recipe cards with photos.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PRICE COMPARISON DATA
   ═══════════════════════════════════════════════════════════════ */

const priceComparison = [
  { school: 'Amal Women\'s Training Center', city: 'Marrakech', groupPrice: '300-500 MAD', privatePrice: '600-800 MAD', marketTour: 'On request', duration: '3h' },
  { school: 'Cafe Clock Fes', city: 'Fes', groupPrice: '400-700 MAD', privatePrice: '800-1,200 MAD', marketTour: 'Included', duration: '4h' },
  { school: 'Lina Ryad & Spa', city: 'Chefchaouen', groupPrice: '350-600 MAD', privatePrice: '700-1,000 MAD', marketTour: 'Included', duration: '3h' },
  { school: 'Khmissa Cooking', city: 'Essaouira', groupPrice: '400-700 MAD', privatePrice: '800-1,200 MAD', marketTour: 'Included', duration: '3-4h' },
  { school: 'Souk Cuisine', city: 'Marrakech', groupPrice: '500-800 MAD', privatePrice: '1,000-1,500 MAD', marketTour: 'Included', duration: '4h' },
  { school: 'Dar Namir', city: 'Marrakech', groupPrice: '500-900 MAD', privatePrice: '1,000-1,500 MAD', marketTour: 'Optional', duration: '3-4h' },
  { school: 'Ruined Garden', city: 'Fes', groupPrice: '500-900 MAD', privatePrice: '1,000-1,500 MAD', marketTour: 'Included', duration: '4h' },
  { school: 'L\'Atelier de Madada', city: 'Essaouira', groupPrice: '600-1,000 MAD', privatePrice: '1,200-2,000 MAD', marketTour: 'Included (port)', duration: '4h' },
  { school: 'La Maison Arabe', city: 'Marrakech', groupPrice: '700-1,200 MAD', privatePrice: '1,500-2,500 MAD', marketTour: 'Included', duration: '4-5h' },
  { school: 'Palais Amani', city: 'Fes', groupPrice: '800-1,500 MAD', privatePrice: '2,000-3,000 MAD', marketTour: 'Garden + optional', duration: '5h' },
];

/* ═══════════════════════════════════════════════════════════════
   BOOKING TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book 1-2 Weeks in Advance',
    description: 'The best schools fill up quickly, especially in peak season (October-April). La Maison Arabe and Palais Amani often book out 2-3 weeks ahead. Smaller schools like Khmissa may only need a few days notice. Email or WhatsApp directly for the best availability.',
  },
  {
    title: 'Morning Classes Are Best',
    description: 'Almost all cooking classes run in the morning (9 AM - 2 PM) because the markets are freshest early, the light is best for the kitchen, and you eat your creations as a late lunch. Afternoon or evening classes exist but are less common and miss the market tour.',
  },
  {
    title: 'Communicate Dietary Needs Early',
    description: 'If you are vegetarian, vegan, gluten-free, or have allergies, inform the school when booking. Moroccan cooking is highly adaptable, and most schools can modify the menu. Vegetable tagines and couscous are always available. The further in advance you communicate, the better the adaptation.',
  },
  {
    title: 'Ask About Group Size',
    description: 'Classes range from 2 to 15 people. Smaller groups (2-6) offer more hands-on time and personal attention. If you want a truly intimate experience, book a private class or choose a school that caps groups at 6 (Khmissa, Dar Namir, Lina Ryad).',
  },
  {
    title: 'Book Directly for Better Prices',
    description: 'Many schools offer lower prices when you book directly (via email, WhatsApp, or their website) versus through booking platforms like Airbnb Experiences or GetYourGuide, which charge commissions. Direct booking also allows more flexibility with menus and timing.',
  },
  {
    title: 'Wear Comfortable, Closed-Toe Shoes',
    description: 'The market tour involves walking on uneven medina streets, and the kitchen can be warm. Wear comfortable shoes, bring a light layer, and leave valuables at your hotel. An apron is always provided.',
  },
  {
    title: 'Check What Is Included',
    description: 'Most classes include all ingredients, equipment, recipes, and the meal you cook. Some also include a spice gift, a recipe booklet, or a market shopping bag. Transport to and from the school is usually not included unless specified. Confirm before booking.',
  },
  {
    title: 'Combine with Other Experiences',
    description: 'Many schools can arrange add-ons: a hammam visit after class, a pottery workshop to make your own tagine pot, or a guided food tour of the medina. Ask when booking. Some schools also offer multi-day courses for deep learning.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RECIPES TO TRY AT HOME
   ═══════════════════════════════════════════════════════════════ */

const homeRecipes = [
  {
    name: 'Chicken Tagine with Preserved Lemons & Olives',
    arabicName: 'طاجين دجاج بالحامض والزيتون',
    difficulty: 'Beginner',
    prepTime: '20 minutes',
    cookTime: '1 hour 15 minutes',
    serves: '4',
    ingredients: [
      '1 whole chicken, cut into 8 pieces',
      '2 large onions, grated',
      '3 cloves garlic, minced',
      '1 tsp ground ginger',
      '1 tsp turmeric',
      'Pinch of saffron threads, crumbled',
      '1/2 tsp black pepper',
      '1/4 cup olive oil',
      '1 preserved lemon, quartered (rind only)',
      '1 cup cracked green olives',
      'Large bunch of fresh cilantro, chopped',
      'Large bunch of fresh parsley, chopped',
      '1 cup water',
      'Salt to taste',
    ],
    steps: [
      'In a tagine or heavy-bottomed pot, combine the grated onions, garlic, ginger, turmeric, saffron, pepper, olive oil, and half the cilantro and parsley. Mix well.',
      'Add the chicken pieces, turning to coat them thoroughly in the spice mixture. Let marinate for 30 minutes (or overnight in the refrigerator for deeper flavor).',
      'Add the water, bring to a gentle simmer, cover, and cook on low heat for 45 minutes, turning the chicken once halfway through.',
      'Add the preserved lemon quarters and olives. Continue cooking uncovered for 20-30 minutes until the sauce has reduced and thickened and the chicken is very tender.',
      'Garnish with remaining fresh cilantro and parsley. Serve directly from the tagine with crusty bread for dipping.',
    ],
    tips: 'The key is LOW heat and patience. Never boil a tagine. If you do not have preserved lemons, make them 30 days in advance (pack lemons in coarse salt in a jar) or substitute the juice and zest of 1 fresh lemon plus 1/2 tsp salt.',
  },
  {
    name: 'Zaalouk (Smoky Eggplant & Tomato Salad)',
    arabicName: 'زعلوك',
    difficulty: 'Beginner',
    prepTime: '10 minutes',
    cookTime: '30 minutes',
    serves: '4-6 as a side',
    ingredients: [
      '2 large eggplants',
      '4 ripe tomatoes, peeled and chopped (or 1 can crushed tomatoes)',
      '4 cloves garlic, minced',
      '1 tsp cumin',
      '1 tsp paprika',
      '1/2 tsp chili flakes (optional)',
      '1/4 cup olive oil (plus extra for drizzling)',
      'Juice of 1/2 lemon',
      'Salt and pepper to taste',
      'Fresh cilantro for garnish',
    ],
    steps: [
      'Char the eggplants: roast directly over a gas flame, turning frequently, until the skin is completely blackened and the flesh is soft (about 10-15 minutes). Alternatively, broil in the oven.',
      'Peel the charred skin under running water. Drain the eggplant flesh in a colander, pressing gently to remove excess water. Roughly chop.',
      'In a pan, heat olive oil over medium heat. Add garlic, cumin, and paprika, cooking for 30 seconds until fragrant.',
      'Add the chopped tomatoes and cook for 10 minutes until reduced to a thick sauce.',
      'Add the chopped eggplant and mash everything together with a fork until you reach a chunky, spreadable consistency. Cook for another 5-10 minutes.',
      'Season with salt, pepper, lemon juice, and chili flakes if using. Drizzle generously with olive oil and garnish with cilantro. Serve warm or at room temperature with bread.',
    ],
    tips: 'The smokiness comes from charring the eggplant directly over a flame. If you only have an electric stove, broil the eggplants in the oven as close to the element as possible, or use a kitchen torch. The more blackened the skin, the smokier the result.',
  },
  {
    name: 'Harira (Moroccan Ramadan Soup)',
    arabicName: 'حريرة',
    difficulty: 'Intermediate',
    prepTime: '15 minutes (plus overnight soaking for chickpeas)',
    cookTime: '1 hour 30 minutes',
    serves: '8-10',
    ingredients: [
      '200g dried chickpeas, soaked overnight (or 2 cans, drained)',
      '200g green or brown lentils',
      '250g lamb or beef, diced small',
      '2 large onions, finely diced',
      '4 large ripe tomatoes, grated (or 400g canned crushed tomatoes)',
      '2 tbsp tomato paste',
      '1 large bunch cilantro, finely chopped',
      '1 large bunch flat-leaf parsley, finely chopped',
      '1 tsp ginger',
      '1 tsp turmeric',
      '1 tsp cinnamon',
      '1/2 tsp black pepper',
      'Pinch of saffron',
      '80g vermicelli or angel hair pasta, broken',
      '2 tbsp flour mixed with 1 cup water (tedouira)',
      '2 tbsp butter',
      'Juice of 1 lemon',
      'Salt to taste',
      '2 liters water',
    ],
    steps: [
      'In a large pot, heat butter over medium heat. Add the diced meat and onions, cooking until the onions are soft and translucent, about 5 minutes.',
      'Add the grated tomatoes, tomato paste, ginger, turmeric, cinnamon, pepper, saffron, and half the cilantro and parsley. Cook for 5 minutes.',
      'Add the soaked and drained chickpeas, lentils, and water. Bring to a boil, then reduce to a simmer. Cover and cook for 1 hour until the chickpeas are tender.',
      'Add the vermicelli and cook for 5 minutes until soft.',
      'Slowly pour in the tedouira (flour-water mixture), stirring constantly to avoid lumps. This gives harira its signature velvety, slightly thick texture. Simmer for 10 more minutes.',
      'Add lemon juice, remaining cilantro and parsley, and salt to taste. The consistency should be thick but still pourable -- add water if too thick.',
      'Serve in deep bowls with a squeeze of lemon, a drizzle of olive oil, and dates on the side.',
    ],
    tips: 'The tedouira (flour-water thickener) is what separates authentic harira from ordinary lentil soup. Pour it in slowly while stirring to avoid lumps. Some families use a raw egg beaten into the tedouira for extra richness. Harira improves significantly the next day as flavors meld.',
  },
  {
    name: 'Msemen (Moroccan Layered Flatbread)',
    arabicName: 'مسمن',
    difficulty: 'Intermediate',
    prepTime: '30 minutes (plus 30 min resting)',
    cookTime: '20 minutes',
    serves: '8-10 pieces',
    ingredients: [
      '500g all-purpose flour',
      '100g fine semolina',
      '1 tsp salt',
      '1 tsp sugar',
      '1 tsp dry yeast',
      '300-350ml warm water',
      'Vegetable oil for stretching',
      'Softened butter or margarine for folding',
      'Extra semolina for dusting',
    ],
    steps: [
      'Mix the flour, semolina, salt, sugar, and yeast in a large bowl. Gradually add warm water, kneading until you have a smooth, slightly sticky dough. Knead for 8-10 minutes.',
      'Divide the dough into 8-10 balls. Oil each ball generously, place on an oiled tray, and rest for 30 minutes.',
      'Oil your work surface and your hands. Take one ball and press it flat. Using your fingertips, stretch the dough as thin as possible -- it should be nearly transparent. Work gently to avoid tearing.',
      'Spread a thin layer of softened butter over the surface and sprinkle lightly with semolina.',
      'Fold the edges toward the center to form a square: fold the left third in, then the right third over it, then the top third down and the bottom third up.',
      'Heat a flat griddle (maqla) or non-stick pan over medium heat. Cook the msemen for 2-3 minutes per side until golden brown and crispy with visible layers.',
      'Serve hot with honey and butter for breakfast, or stuffed with spiced meat, cheese, or vegetables as a snack.',
    ],
    tips: 'The secret to great msemen is in the stretching: the thinner you can get the dough, the more layers you will have. Oil your hands and surface liberally -- the dough should glide, not stick. Do not worry about small tears; they will disappear when folded. Practice makes perfect with msemen.',
  },
  {
    name: 'Mint Tea (Atay Nana)',
    arabicName: 'أتاي بالنعناع',
    difficulty: 'Beginner',
    prepTime: '5 minutes',
    cookTime: '5 minutes',
    serves: '4-6 glasses',
    ingredients: [
      '1 tablespoon Chinese gunpowder green tea',
      '1 large bunch fresh spearmint (nana), washed',
      '4-6 tablespoons sugar (adjust to taste)',
      '4 cups boiling water',
      'A Moroccan teapot (berrad) or any teapot',
    ],
    steps: [
      'Place the green tea in the teapot. Add a splash of boiling water, swirl for 10 seconds, then pour off this water (this rinses the tea and removes bitterness).',
      'Add the sugar and fresh mint to the teapot (stuff a generous amount of mint in -- Moroccans use much more than you think).',
      'Pour in the boiling water. Let steep for 3-4 minutes.',
      'Pour a glass of tea, then pour it back into the pot (this is called "rewah" and helps mix the sugar). Repeat 2-3 times.',
      'Pour the tea from a height of at least 30 centimeters (12 inches) into small glasses to aerate it and create a light foam on top.',
      'Serve immediately. Moroccan custom is to serve three rounds. Add extra mint and sugar for subsequent pots.',
    ],
    tips: 'The high pour is not just for show -- it aerates the tea and slightly cools it to the perfect drinking temperature. If you cannot find gunpowder green tea, any quality Chinese green tea works. In summer, Moroccans sometimes substitute mint with fresh wormwood (shiba) or lemon verbena (louiza) for variety.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SPICE GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const spiceGuide = [
  { name: 'Cumin (Kamoun / كمون)', description: 'The backbone of Moroccan cooking. Earthy, warm, and slightly nutty. Used in virtually every savory dish, from tagines to salads to grilled meats. Often placed on the table alongside salt as a condiment. Buy whole seeds and grind fresh for the most potent flavor.' },
  { name: 'Saffron (Zaafrane / زعفران)', description: 'The world\'s most expensive spice, cultivated in the Taliouine region of southern Morocco. Adds a golden color, floral aroma, and subtle honey-like flavor. Essential in chicken tagine with preserved lemons and in many seafood dishes. Real saffron costs 15-30 MAD per gram. If it is cheap, it is safflower.' },
  { name: 'Turmeric (Kharkoum / كركم)', description: 'Bright golden-yellow spice that adds warmth and a mild, earthy flavor. Used as a base in many spice blends and marinades. Morocco\'s affordable everyday alternative to saffron. Look for a vivid orange-yellow color and slightly bitter aroma.' },
  { name: 'Paprika (Felfla Hamra / فلفل أحمر)', description: 'Sweet red paprika made from sun-dried peppers. Adds a mild sweetness and vibrant red color to marinades, chermoula, and charmoula-marinated fish. Moroccan paprika is generally milder and sweeter than Spanish or Hungarian varieties.' },
  { name: 'Ginger (Skinjbir / زنجبيل)', description: 'Both fresh and ground ginger are essential. Ground ginger appears in virtually every tagine and spice blend. Fresh ginger is grated into harira soup and marinades. Dried ginger is more concentrated: use 1/2 tsp ground for 1 tbsp fresh.' },
  { name: 'Cinnamon (Karfa / قرفة)', description: 'Used in both savory and sweet dishes, which is a hallmark of Moroccan cuisine. Essential in pastilla, lamb tagine with prunes, and all Moroccan pastries. The sweet-spicy contrast it creates is one of the defining characteristics of the cuisine.' },
  { name: 'Ras el Hanout (رأس الحانوت)', description: 'Literally "head of the shop," this is the spice merchant\'s signature blend of 12-30 spices. No two blends are identical. Typically includes cardamom, nutmeg, mace, clove, long pepper, rose petals, lavender, and many more. Buy it freshly blended from a trusted merchant in the souk.' },
  { name: 'Preserved Lemons (L\'hamd Mrakad / الحامض المرقد)', description: 'Lemons preserved in salt and their own juice for at least 30 days. The rind becomes soft and intensely flavored. Essential in chicken tagine with olives, salads, and countless other dishes. A uniquely Moroccan ingredient that is simple to make at home.' },
  { name: 'Coriander (Kasbour / قزبر)', description: 'Both fresh leaves and ground seeds are indispensable. Fresh coriander (cilantro) is the most-used herb in Moroccan cuisine, while ground coriander seeds add a citrusy, floral note to tagines and chermoula. Buy whole seeds and grind as needed.' },
  { name: 'Orange Blossom Water (Ma Zhar / ماء الزهر)', description: 'Distilled from bitter orange blossoms. Adds a delicate floral perfume to pastries, salads, smoothies, and drinks. A few drops transform a simple fruit salad or yogurt into something distinctly Moroccan. Store in the refrigerator after opening.' },
];

/* ═══════════════════════════════════════════════════════════════
   TAKE HOME TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const takeHomeTips = [
  { title: 'Record Everything', description: 'Take photos and videos during the class, especially of your chef\'s hand movements. Moroccan cooking is often done by feel and intuition ("a handful of this, a pinch of that"), so written recipes cannot capture every nuance. A short video of your chef layering a tagine or stretching msemen dough is invaluable.' },
  { title: 'Buy Spices in the Souk', description: 'Purchase your spices from the medina souk immediately after class while the flavors are fresh in your mind. Ask your chef to recommend a trusted spice merchant. Buy whole spices whenever possible (they last months longer than ground) and bring a hand grinder. A full Moroccan spice set costs 100-200 MAD.' },
  { title: 'Invest in a Tagine Pot', description: 'A traditional clay tagine costs 80-200 MAD in any medina. For cooking at home, look for one that works on a stovetop (glazed, with a flat bottom). Many traditional unglazed ones are for serving only. A cast-iron tagine from Le Creuset or Emile Henry is the most practical option for Western stoves.' },
  { title: 'Make Preserved Lemons First', description: 'Preserved lemons take 30 days to cure and are the hardest Moroccan ingredient to replace. Make a jar as soon as you get home: pack halved lemons with coarse salt in a jar, press them down, seal, and wait. You will have them ready for your first tagine in a month.' },
  { title: 'Practice Within a Week', description: 'Cook at least one dish within a week of returning while the techniques are fresh. Start with something simple -- zaalouk or harira -- before attempting pastilla. Muscle memory fades quickly, especially for bread-making techniques like msemen.' },
  { title: 'Source Key Ingredients', description: 'Find a local Middle Eastern or North African grocery store for preserved lemons, orange blossom water, rose water, and specialty spices. Many are also available online. If you cannot find saffron, a combination of turmeric and a pinch of paprika provides a similar color (though not the same flavor).' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function CookingClassesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/photo-tagine-closeup.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Cooking Classes</span>
          </nav>
          <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
            Culinary Experiences
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Cooking Classes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Master the art of tagine, couscous, pastilla, and Morocco&apos;s legendary spice blends
            in hands-on classes taught by traditional home cooks and professional chefs. The top 10
            cooking schools, step-by-step guides, prices, and recipes to recreate at home.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Why Take a Cooking Class ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Take a Cooking Class in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccan cuisine is one of the world&apos;s great culinary traditions, a sophisticated
                fusion of Amazigh (Berber), Arab, Andalusian, and French influences refined over more
                than a thousand years. A cooking class is the single best way to immerse yourself in this
                extraordinary food culture, going far beyond what any restaurant meal can offer.
              </p>
              <p>
                When you cook with a Moroccan chef or traditional <em>dada</em> (home cook), you
                do not just learn recipes. You discover the stories behind the dishes, the cultural
                significance of Friday couscous, the artistry of a perfectly balanced ras el hanout
                blend, and the hospitality rituals woven into every meal. The market tour that begins
                most classes is itself a masterclass in Moroccan life -- navigating the narrow souk lanes,
                negotiating with spice merchants, and selecting the freshest ingredients by sight and touch.
              </p>
              <p>
                Best of all, you take these skills home. Long after your trip ends, you can recreate
                the flavors of Morocco in your own kitchen, transporting yourself back to a rooftop
                in Marrakech or a courtyard in Fes every time you lift the lid of a tagine. A cooking class
                is the souvenir that keeps giving.
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">300-1,500</p>
              <p className="text-xs text-[var(--text-secondary)]">MAD price range</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Clock className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">3-5</p>
              <p className="text-xs text-[var(--text-secondary)]">hours typical duration</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">3-4</p>
              <p className="text-xs text-[var(--text-secondary)]">dishes per class</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <ShoppingBasket className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">90%</p>
              <p className="text-xs text-[var(--text-secondary)]">include market tour</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mint Tea Image ── */}
      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/art-moroccan-mint-tea.webp" alt="Traditional Moroccan mint tea being poured from a silver teapot into ornate glasses, an essential part of every cooking class experience" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ── Signature Dishes You'll Learn ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CookingPot className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What You&apos;ll Learn: 8 Signature Dishes
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              These are the cornerstone dishes of Moroccan cuisine. Most cooking classes cover
              three to four of these in a single session, along with mint tea and bread.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {signatureDishes.map((dish, index) => (
              <div key={dish.name} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--color-primary)] text-sm font-semibold">
                      #{index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/90 text-white text-xs font-medium">
                      {dish.highlight}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {dish.name}
                    </h3>
                    <span className="text-sm text-[var(--color-accent)] font-medium">{dish.arabicName}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top 10 Cooking Schools ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ChefHat className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top 10 Cooking Schools in Morocco
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Personally researched cooking schools across five cities, from world-famous institutions
              to intimate family kitchens. Each includes what you will learn, market tour details, and prices.
            </p>
          </div>

          <div className="space-y-8">
            {cookingSchools.map((school) => (
              <div key={school.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full gradient-moroccan text-white font-bold text-sm">
                          {school.rank}
                        </span>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {school.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{school.city}</span>
                        <span className="text-[var(--text-muted)]">|</span>
                        <span className="text-xs">{school.address}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold">
                        <DollarSign className="w-4 h-4" />
                        {school.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Clock className="w-4 h-4" />
                        {school.duration}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < school.rating
                                ? 'text-[var(--color-accent)] fill-[var(--color-accent)]'
                                : 'text-[var(--border)]'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                    {school.description}
                  </p>

                  {/* Two columns: What You'll Learn + Market Tour */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm mb-3 flex items-center gap-2">
                        <CookingPot className="w-4 h-4 text-[var(--color-primary)]" />
                        What You&apos;ll Learn
                      </h4>
                      <ul className="space-y-2">
                        {school.whatYoullLearn.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm mb-3 flex items-center gap-2">
                        <ShoppingBasket className="w-4 h-4 text-[var(--color-accent)]" />
                        Market Tour
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {school.marketTour}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-[var(--border-light)]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-xs font-medium">
                      <Users className="w-3 h-3" />
                      {school.groupSize}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)]/5 text-[var(--color-accent)] text-xs font-medium">
                      <Star className="w-3 h-3" />
                      Best for: {school.bestFor}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <DollarSign className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Price Comparison
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Side-by-side comparison of all 10 schools, sorted from budget-friendly to premium.
              Prices are in Moroccan Dirhams (MAD). 10 MAD is approximately 1 USD / 0.90 EUR.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">School</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">City</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Group Price</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Private Price</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Market Tour</th>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {priceComparison.map((row, i) => (
                    <tr key={row.school} className={i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]/50'}>
                      <td className="p-4 font-medium text-[var(--text-primary)]">{row.school}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.city}</td>
                      <td className="p-4 text-[var(--color-primary)] font-semibold">{row.groupPrice}</td>
                      <td className="p-4 text-[var(--color-accent)] font-semibold">{row.privatePrice}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.marketTour}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Class Types & Formats ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Class Types &amp; Formats
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Four formats to suit every budget, schedule, and cooking ambition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classTypes.map((ct) => (
              <div key={ct.type} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <ct.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">{ct.type}</h3>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <span>{ct.price}</span>
                      <span>{ct.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {ct.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {ct.includes.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-xs font-medium"
                    >
                      <Sparkles className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect: Step by Step ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clock className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Expect: Step by Step
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the first sip of mint tea to the final recipe card, here is a detailed walkthrough
              of what a typical morning cooking class looks like.
            </p>
          </div>

          <div className="space-y-4">
            {typicalDay.map((step) => (
              <div key={step.time} className="card-moroccan p-6 flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full gradient-moroccan flex flex-col items-center justify-center">
                    <span className="text-white font-bold text-xs leading-tight">{step.time.split(' ')[0]}</span>
                    <span className="text-white/80 text-[10px]">{step.time.split(' ')[1]}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-[var(--color-accent-dark)]">{step.time}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Booking Tips
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical advice for booking the right class, getting the best value, and making the most
              of your cooking experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bookingTips.map((tip, i) => (
              <div key={tip.title} className="card-moroccan p-6 flex gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spice Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-orange-500/10 mb-4">
              <Flame className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Essential Moroccan Spice Guide
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ten spices, pastes, and flavoring agents you will encounter in every cooking class. Knowing
              these is the key to cooking authentic Moroccan food anywhere in the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spiceGuide.map((spice, index) => (
              <div key={spice.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-orange-600">{index + 1}</span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{spice.name}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {spice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recipes to Try at Home ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Recipes to Try at Home
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              Five authentic Moroccan recipes to practice in your own kitchen. These are the same dishes
              taught in Morocco&apos;s best cooking classes, adapted for home cooks with detailed
              instructions and tips.
            </p>
          </div>

          <div className="space-y-8">
            {homeRecipes.map((recipe) => (
              <div key={recipe.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Recipe Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                        {recipe.name}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-medium">{recipe.arabicName}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">
                        <Star className="w-3 h-3" />
                        {recipe.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">
                        <Clock className="w-3 h-3" />
                        Prep: {recipe.prepTime}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">
                        <Flame className="w-3 h-3" />
                        Cook: {recipe.cookTime}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-muted)] text-[var(--text-secondary)] font-medium">
                        <Users className="w-3 h-3" />
                        Serves {recipe.serves}
                      </span>
                    </div>
                  </div>

                  {/* Ingredients + Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Ingredients */}
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm mb-3 uppercase tracking-wide">
                        Ingredients
                      </h4>
                      <ul className="space-y-1.5">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <span className="text-[var(--color-primary)] mt-1 shrink-0">&bull;</span>
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Steps */}
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-[var(--text-primary)] text-sm mb-3 uppercase tracking-wide">
                        Instructions
                      </h4>
                      <ol className="space-y-3">
                        {recipe.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>

                      {/* Tips */}
                      <div className="mt-4 p-4 rounded-lg bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
                        <p className="text-sm text-[var(--text-secondary)]">
                          <span className="font-bold text-[var(--color-accent)]">Chef&apos;s Tip:</span>{' '}
                          {recipe.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Take Home Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Take It Home: Cooking Moroccan at Home
            </h2>
            <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto">
              How to keep the Moroccan culinary magic alive long after your trip ends. Practical tips
              for ingredients, equipment, and practice.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {takeHomeTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <ShoppingBasket className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Coffee className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Cook Like a Moroccan?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our complete Moroccan food guide, browse restaurants across the kingdom,
            or plan a culinary-focused itinerary with our trip planner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/food"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" /> Moroccan Food Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              <CalendarDays className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
