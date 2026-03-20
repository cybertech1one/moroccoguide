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
  Camera,
  HandHeart,
  ChefHat,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Cooking Experience 2026 | Hands-On Culinary Classes & Workshops',
  description:
    'Discover authentic Moroccan cooking experiences across Morocco. Hands-on tagine, couscous, pastilla, harira, and msemen workshops in Marrakech, Fes, Essaouira, and Chefchaouen. Market tours, riad classes, farm-to-table experiences, and street food workshops with prices and booking tips.',
  keywords: [
    'cooking class Morocco',
    'Moroccan cooking experience',
    'learn to cook Moroccan food',
    'Morocco cooking workshop',
    'tagine cooking class Morocco',
    'couscous cooking experience',
    'Marrakech cooking experience',
    'Fes cooking workshop',
    'Essaouira cooking class',
    'Chefchaouen cooking experience',
    'riad cooking class Morocco',
    'farm to table Morocco cooking',
    'street food workshop Morocco',
    'market tour cooking Morocco',
    'vegan cooking class Morocco',
    'gluten free cooking Morocco',
    'private cooking class Morocco',
    'Moroccan food workshop 2026',
    'pastilla cooking lesson',
    'preserved lemons Morocco',
  ],
  openGraph: {
    title: 'Moroccan Cooking Experience 2026 | Hands-On Culinary Workshops',
    description:
      'Immerse yourself in Moroccan cuisine with hands-on cooking experiences. Market tours, riad kitchens, farm-to-table days, and street food workshops across Morocco.',
    url: `${BASE_URL}/morocco-cooking-experience`,
    images: [
      {
        url: `${BASE_URL}/images/hero-cooking-class.webp`,
        width: 1200,
        height: 630,
        alt: 'Hands-on Moroccan cooking experience with fresh spices, tagine pots, and colorful ingredients in a traditional kitchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Cooking Experience 2026 | Learn Moroccan Cuisine',
    description:
      'Hands-on cooking experiences in Morocco. Tagine, couscous, pastilla workshops with market tours, riad classes, and farm-to-table days.',
    images: [`${BASE_URL}/images/hero-cooking-class.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-cooking-experience` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA -- TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-cooking-experience`,
  name: 'Moroccan Cooking Experience 2026 | Hands-On Culinary Classes & Workshops',
  description:
    'A comprehensive guide to Moroccan cooking experiences covering hands-on workshops, market-to-table classes, riad kitchens, farm-to-table days, street food workshops, dietary-friendly options, city-by-city recommendations, prices, and booking tips.',
  url: `${BASE_URL}/morocco-cooking-experience`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-cooking-experience`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Cooking Experience', item: `${BASE_URL}/morocco-cooking-experience` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA -- FAQPage
   ═══════════════════════════════════════════════════════════════ */

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes a Moroccan cooking experience different from a regular cooking class?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Moroccan cooking experience goes beyond the kitchen. It typically begins with a guided tour of a local souk where you shop for fresh ingredients with a chef, includes cultural context about the history of each dish, and ends with a shared meal in a beautiful riad courtyard. The experience integrates food, culture, and hospitality in a way that a standard cooking class does not.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a cooking experience in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group cooking experiences start from 300-500 MAD per person for a half-day session. Full-day market-to-table experiences cost from 600-1,200 MAD. Private riad cooking sessions start from 800-1,500 MAD. Farm-to-table day trips with transport cost from 700-1,500 MAD. Street food workshops start from 400 MAD. Prices may vary seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I join a cooking experience if I have dietary restrictions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most cooking schools in Morocco accommodate vegetarian, vegan, and gluten-free diets with advance notice. Moroccan cuisine has many naturally plant-based dishes including vegetable tagines, couscous with seven vegetables, zaalouk, bissara, and herb salads. Gluten-free options include tagines and salads that do not use flour-based thickeners. Inform the school when booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dishes will I learn to make during a Moroccan cooking experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most experiences teach 3-5 dishes. Common dishes include tagine (chicken with preserved lemons, lamb with prunes), hand-rolled couscous, Moroccan salads (zaalouk, taktouka), harira soup, msemen flatbread, and mint tea. Advanced classes cover pastilla, preserved lemons, and complex spice blends like ras el hanout. The specific menu depends on the school and your preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which city offers the best cooking experience in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech offers the widest selection and best value. Fes is the culinary capital with refined Fassi cuisine including pastilla and rfissa. Essaouira specializes in seafood-focused experiences. Chefchaouen provides intimate mountain cooking with Riffian specialties. Each city offers a unique perspective on Moroccan cuisine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need prior cooking experience to join?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No cooking experience is required. Moroccan cooking experiences are designed for all skill levels. Instructors walk you through every step, from chopping vegetables to assembling a tagine. The focus is on understanding flavors, learning traditional techniques, and enjoying the process rather than culinary expertise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a group or private cooking experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group experiences (4-10 people) are more affordable and social, ideal for solo travelers and those on a budget. Private sessions cost more but offer personalized menus, flexible scheduling, and dedicated attention from the chef. Couples and families often prefer private sessions. Book groups 2-3 days ahead and private sessions 1 week ahead during peak season.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to a Moroccan cooking experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear comfortable, loose-fitting clothes that you do not mind getting splashed with oil or sauce. Closed-toe shoes are recommended, especially for classes with market visits. Avoid long, flowing sleeves near hot stoves. Most schools provide aprons. Bring a camera, a small daypack, and cash (50-100 MAD) for market tips and spice purchases.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT YOU WILL LEARN
   ═══════════════════════════════════════════════════════════════ */

const dishesToLearn = [
  {
    name: 'Tagine',
    icon: CookingPot,
    description: 'Master the art of building a tagine from scratch. Learn to prepare the chermoula spice paste, layer aromatics and protein in the conical clay pot, and slow-cook until every ingredient melds into a rich, fragrant stew. Popular variations include chicken with preserved lemons and olives, and lamb with prunes and toasted almonds.',
    skills: ['Chermoula spice paste preparation', 'Clay pot layering technique', 'Slow-cooking temperature control', 'Garnishing and presentation'],
  },
  {
    name: 'Couscous',
    icon: Wheat,
    description: 'Forget instant couscous. In a Moroccan cooking experience, you learn to hand-roll semolina grains with water and olive oil, then steam them three times over a fragrant broth in a couscoussier. The result is impossibly light, fluffy grains served on a communal platter with seasonal vegetables and tender meat.',
    skills: ['Hand-rolling semolina grains', 'Triple-steaming in a couscoussier', 'Building the aromatic broth', 'Traditional communal plating'],
  },
  {
    name: 'Pastilla (B\'stilla)',
    icon: Award,
    description: 'The crown jewel of Fassi cuisine. Assemble layers of shredded pigeon or chicken, spiced egg filling, and toasted almond paste between sheets of paper-thin warqa pastry. Bake until golden, then dust with cinnamon and powdered sugar for the signature sweet-savory combination that defines Moroccan haute cuisine.',
    skills: ['Shredded meat filling preparation', 'Working with warqa pastry sheets', 'Multi-layer assembly technique', 'Cinnamon and sugar finishing'],
  },
  {
    name: 'Harira Soup',
    icon: Flame,
    description: 'Morocco\'s most comforting soup, traditionally served to break the fast during Ramadan. Build a rich tomato base with fresh herbs, simmer with lentils and chickpeas until tender, then thicken with the traditional tedouira technique. Aromatic, hearty, and deeply satisfying.',
    skills: ['Tomato base with fresh herbs', 'Timing lentils and chickpeas', 'Tedouira thickening technique', 'Seasoning with cinnamon and ginger'],
  },
  {
    name: 'Msemen Flatbread',
    icon: ChefHat,
    description: 'The square, layered flatbread served at every Moroccan breakfast table. Learn the distinctive technique of stretching dough paper-thin, folding it into layers, and pan-frying until crispy and golden. Serve drizzled with honey and butter or stuffed with spiced meat and vegetables.',
    skills: ['Dough preparation and resting', 'Stretching dough paper-thin', 'Square folding technique', 'Pan-frying to golden perfection'],
  },
  {
    name: 'Preserved Lemons',
    icon: Sun,
    description: 'The secret ingredient behind many of Morocco\'s most distinctive flavors. Learn how to salt, pack, and cure fresh lemons in their own juices with spices. While traditional preservation takes 30 days, you will learn the technique and take home a jar you started in class, plus quick-pickle methods for immediate use.',
    skills: ['Selecting and scoring lemons', 'Salt-packing and curing process', 'Quick-pickle method for immediate use', 'Using preserved lemons in tagines and salads'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF COOKING EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const experienceTypes = [
  {
    name: 'Market Tour + Cooking Experience',
    icon: ShoppingBasket,
    duration: '4-6 hours',
    description:
      'The most popular and immersive format. Begin at a local souk with your chef-guide who teaches you to navigate the spice stalls, select the freshest produce, choose quality meats, and haggle like a local. After filling your basket, return to the kitchen to transform your market haul into a multi-course Moroccan feast. The market component provides cultural context that elevates the entire cooking experience.',
    bestFor: 'First-time visitors who want the full cultural immersion',
    priceRange: 'From 450 MAD per person (group), from 1,000 MAD (private)',
    highlights: ['Guided souk navigation with a local chef', 'Learn to identify quality spices and produce', 'Cook 3-5 dishes with your market ingredients', 'Shared meal with mint tea ceremony', 'Recipe booklet to take home'],
  },
  {
    name: 'Riad Kitchen Experience',
    icon: Home,
    duration: '3-5 hours',
    description:
      'Cook in the intimate setting of a traditional Moroccan riad, often taught by the resident dada (family cook) whose recipes have been passed down through generations. The tiled courtyards, fountain-cooled kitchens, and rooftop terraces create an atmosphere that no cooking school can replicate. This is the closest you will get to cooking with a Moroccan family in their own home.',
    bestFor: 'Couples, luxury travelers, and those seeking authenticity',
    priceRange: 'From 500 MAD per person, from 1,500 MAD for private luxury riad sessions',
    highlights: ['Intimate kitchen with 2-6 participants', 'Personal instruction from a family dada', 'Cook in a historic riad setting', 'Dine on a rooftop terrace or courtyard', 'Customized menu based on your preferences'],
  },
  {
    name: 'Farm-to-Table Day Experience',
    icon: Leaf,
    duration: '6-8 hours',
    description:
      'Travel outside the city to an organic farm in the Atlas foothills or Ourika Valley. Pick your own herbs, vegetables, and fruits directly from the garden, then learn traditional Berber cooking techniques from a local family. The mountain setting, fresh air, and panoramic views make this the most memorable cooking experience Morocco offers. Includes round-trip transport.',
    bestFor: 'Nature lovers, eco-travelers, families, slow-travel enthusiasts',
    priceRange: 'From 700 MAD per person including transport, from 1,500 MAD private',
    highlights: ['Transport to an organic farm in the countryside', 'Garden tour and ingredient harvesting', 'Berber cooking over open fire or clay oven', 'Family-style lunch with mountain views', 'Tea ceremony and garden walk'],
  },
  {
    name: 'Street Food Workshop',
    icon: Store,
    duration: '3-4 hours',
    description:
      'A newer format gaining popularity in Marrakech and Fes. Instead of a formal kitchen, you learn to recreate Morocco\'s most beloved street foods: msemen, sfenj (Moroccan doughnuts), maakouda (potato fritters), snail soup, and brochettes. Classes take place in informal settings near food markets and offer a raw, unfiltered look at how ordinary Moroccans eat every day.',
    bestFor: 'Adventurous eaters, budget travelers, foodies seeking local flavors',
    priceRange: 'From 400 MAD per person (group), from 900 MAD (private)',
    highlights: ['Learn iconic Moroccan street foods', 'Cook in an informal, market-adjacent setting', 'Taste as you go through the food stalls', 'Small groups for hands-on participation', 'Insider knowledge of local food culture'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST EXPERIENCES BY CITY
   ═══════════════════════════════════════════════════════════════ */

const cityCookingExperiences = [
  {
    city: 'Marrakech',
    icon: Flame,
    tagline: 'The Widest Selection',
    description:
      'Marrakech offers more cooking experiences than any other Moroccan city. The competitive market means excellent value, with options ranging from budget-friendly group workshops near Jemaa el-Fna to exclusive private sessions in palatial riads. The medina souks provide an unmatched backdrop for market-to-table experiences. Most classes are available in English, French, and Arabic.',
    topExperiences: [
      { name: 'La Maison Arabe Workshop', focus: 'The original Marrakech cooking school since the 1990s. Elegant riad setting with professional dadas.', price: 'From 700 MAD' },
      { name: 'Amal Women\'s Center', focus: 'Social enterprise training disadvantaged women. Authentic instruction while supporting a meaningful cause.', price: 'From 350 MAD' },
      { name: 'Souk Cuisine Market Experience', focus: 'Starts at Rahba Kedima spice square. Small groups with English-speaking chefs.', price: 'From 450 MAD' },
      { name: 'Jnane Tamsna Farm Day', focus: 'Organic farm in the Palmeraie. Garden-to-plate cooking with aromatic herb harvesting.', price: 'From 900 MAD' },
    ],
  },
  {
    city: 'Fes',
    icon: Award,
    tagline: 'The Culinary Capital',
    description:
      'Fes is Morocco\'s gastronomic heart where 1,200 years of culinary tradition are taught in medina kitchens and palace riads. Cooking experiences here emphasize the refined Fassi cuisine: elaborate pastilla, delicate rfissa, complex tagine preparations, and multi-layered pastries. Classes tend to be more traditional and technique-focused than in Marrakech, with a strong emphasis on the history behind each dish.',
    topExperiences: [
      { name: 'Palais Amani Kitchen', focus: 'Luxury palace riad with Andalusian garden. Market tours begin on historic Talaa Kebira.', price: 'From 800 MAD' },
      { name: 'Cafe Clock Workshop', focus: 'Creative fusion of traditional Fassi and modern techniques. Known for the camel burger masterclass.', price: 'From 400 MAD' },
      { name: 'Dar Namir Family Kitchen', focus: 'Grandmother-led cooking in a medina home. Ancestral Fassi recipes passed down through generations.', price: 'From 450 MAD' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Compass,
    tagline: 'The Seafood Kitchen',
    description:
      'Essaouira\'s cooking experiences revolve around the Atlantic catch. Classes begin at the fishing port where the day\'s haul is displayed on ice, then move to a kitchen to prepare seafood tagines, fish with chermoula, and seafood pastilla. The relaxed coastal pace, ocean breeze, and intimate class sizes create a laid-back learning environment that is hard to find in the larger cities.',
    topExperiences: [
      { name: 'L\'Atelier de Madada', focus: 'Rooftop cooking school above the medina. Seafood-forward menu with chermoula and fish tagine.', price: 'From 550 MAD' },
      { name: 'Khmisa Home Cooking', focus: 'Intimate coastal cuisine experience. Small groups of 2-6 with a focus on Essaouira traditions.', price: 'From 400 MAD' },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Globe,
    tagline: 'The Mountain Kitchen',
    description:
      'Cooking experiences in the Blue City offer a distinct Riffian perspective with hearty mountain cuisine. Dishes feature local goat cheese, wild herbs foraged from the Rif Mountains, mountain honey, and Riffian couscous. The intimate scale of Chefchaouen means classes feel personal and unhurried. The blue-washed medina backdrop makes for spectacular food photography.',
    topExperiences: [
      { name: 'Lala Mesouda Kitchen', focus: 'Home cooking in the blue medina heart. Riffian mountain herb tagine and hand-rolled couscous.', price: 'From 350 MAD' },
      { name: 'Chef Hicham\'s Table', focus: 'Modern Moroccan with Riffian roots. Includes an organic garden walk before cooking.', price: 'From 400 MAD' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT A TYPICAL EXPERIENCE INCLUDES
   ═══════════════════════════════════════════════════════════════ */

const typicalInclusions = [
  { step: 'Market Visit', time: '1-1.5 hours', icon: ShoppingBasket, detail: 'Navigate the souk with your chef to select spices, vegetables, herbs, olives, and meats. Learn to identify quality ingredients, negotiate prices, and understand seasonal produce.' },
  { step: 'Kitchen Introduction', time: '15-20 minutes', icon: Sparkles, detail: 'Aprons on, hands washed. Your instructor introduces the day\'s menu, explains key Moroccan spices (cumin, paprika, saffron, ras el hanout), and demonstrates foundational techniques.' },
  { step: 'Hands-On Cooking', time: '2-3 hours', icon: CookingPot, detail: 'Prepare 3-5 dishes from scratch. Chop, season, assemble, and cook under your instructor\'s guidance. Everyone participates at every stage. No watching from the sidelines.' },
  { step: 'Eating Together', time: '45-60 minutes', icon: Users, detail: 'Sit down to enjoy everything you have cooked, served family-style with fresh bread and mint tea. This communal meal is the heart of Moroccan hospitality and the highlight of the experience.' },
  { step: 'Recipes to Take Home', time: '10 minutes', icon: BookOpen, detail: 'Receive a printed recipe booklet with every dish you prepared, including ingredient lists adapted for home kitchens. Some schools also provide a small spice pack or preserved lemon jar as a gift.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { type: 'Group Half-Day (3-4h)', marrakech: 'From 350 MAD', fes: 'From 400 MAD', essaouira: 'From 400 MAD', chefchaouen: 'From 350 MAD' },
  { type: 'Market + Cooking (4-6h)', marrakech: 'From 450 MAD', fes: 'From 500 MAD', essaouira: 'From 550 MAD', chefchaouen: 'From 400 MAD' },
  { type: 'Full-Day Experience (5-7h)', marrakech: 'From 600 MAD', fes: 'From 700 MAD', essaouira: 'From 650 MAD', chefchaouen: 'From 500 MAD' },
  { type: 'Private Riad Session', marrakech: 'From 800 MAD', fes: 'From 900 MAD', essaouira: 'From 700 MAD', chefchaouen: 'From 600 MAD' },
  { type: 'Farm-to-Table Day Trip', marrakech: 'From 700 MAD', fes: 'From 800 MAD', essaouira: 'From 750 MAD', chefchaouen: 'From 650 MAD' },
  { type: 'Street Food Workshop', marrakech: 'From 400 MAD', fes: 'From 350 MAD', essaouira: 'From 400 MAD', chefchaouen: 'From 300 MAD' },
  { type: 'Luxury Private Experience', marrakech: 'From 1,500 MAD', fes: 'From 1,500 MAD', essaouira: 'From 1,200 MAD', chefchaouen: 'From 1,000 MAD' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DIETARY RESTRICTIONS
   ═══════════════════════════════════════════════════════════════ */

const dietaryOptions = [
  {
    diet: 'Vegan Cooking Experiences',
    icon: Leaf,
    description: 'Moroccan cuisine is naturally rich in plant-based dishes. Vegan cooking experiences focus on vegetable tagines with preserved lemons and olives, couscous with seven vegetables, zaalouk, taktouka, bissara (fava bean soup), lentil harira, and herb salads dressed with argan oil. Most schools offer fully vegan menus with advance notice.',
    dishes: ['Vegetable tagine with preserved lemons', 'Couscous with seven vegetables', 'Zaalouk and taktouka salads', 'Bissara fava bean soup', 'Herb and orange blossom salads'],
  },
  {
    diet: 'Gluten-Free Cooking Experiences',
    icon: ShieldCheck,
    description: 'Many traditional Moroccan dishes are naturally gluten-free. Tagines, Moroccan salads, harira (when made without flour thickener), grilled meats, and most vegetable preparations contain no gluten. Schools can substitute msemen with rice-based alternatives and avoid couscous or offer a gluten-free grain. Inform the school when booking.',
    dishes: ['All tagine varieties', 'Moroccan salads and dips', 'Grilled brochettes and kefta', 'Rice-based side dishes', 'Mint tea and fruit desserts'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    tip: 'Group vs. Private: Choose Your Style',
    icon: Users,
    detail: 'Group experiences (4-10 people) are sociable and affordable. Private sessions (1-4 people) offer personalized menus and dedicated attention. Solo travelers benefit from group energy; couples and families often prefer private intimacy.',
  },
  {
    tip: 'Morning Classes Are Best for Market Visits',
    icon: Sun,
    detail: 'Markets are freshest and most vibrant in the morning (9-11 AM). If your experience includes a souk visit, book a morning slot. Evening classes skip the market but offer a more relaxed, dinner-focused atmosphere.',
  },
  {
    tip: 'Book Direct for Better Prices',
    icon: DollarSign,
    detail: 'Third-party platforms like GetYourGuide and Viator add 15-25% markup. Email the school directly or book through your riad for better rates and more flexibility with dates and menus.',
  },
  {
    tip: 'Reserve 2-3 Days Ahead in Peak Season',
    icon: CalendarDays,
    detail: 'October through April is peak tourist season. Popular experiences fill fast in Marrakech and Fes. Book group sessions 2-3 days ahead and private experiences 1 week ahead. Summer and shoulder season allow more spontaneity.',
  },
  {
    tip: 'Communicate Dietary Needs Early',
    icon: AlertTriangle,
    detail: 'All reputable schools accommodate vegetarian, vegan, gluten-free, and allergy-specific diets. Mention restrictions when booking, not on the day. This gives the chef time to plan a menu that showcases the best of Moroccan plant-based or allergen-free cooking.',
  },
  {
    tip: 'Read Reviews for Hands-On Participation',
    icon: Star,
    detail: 'The best cooking experiences have you doing the actual cooking, not just watching. Check recent reviews for mentions of hands-on involvement, group size, and instructor quality. Avoid demo-style classes unless specifically stated.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO WEAR & BRING
   ═══════════════════════════════════════════════════════════════ */

const whatToBring = [
  { item: 'Closed-toe comfortable shoes', icon: Shirt, reason: 'You will stand for 2-3 hours and may walk through a busy market. Closed shoes protect against oil splashes and uneven souk surfaces. Sandals are acceptable for riad-only classes.' },
  { item: 'Loose, breathable clothing', icon: Shirt, reason: 'Moroccan kitchens get warm. Avoid long, flowing sleeves near stoves and flames. All schools provide aprons, so do not worry about stains on your outfit.' },
  { item: 'Camera or smartphone', icon: Camera, reason: 'The market tour, colorful ingredients, and cooking process are extremely photogenic. Some schools photograph the experience for you, but your own shots capture personal moments. Ask permission before photographing market vendors.' },
  { item: 'Small daypack', icon: ShoppingBasket, reason: 'Carry the recipe booklet, spice gifts, and any market purchases. A small bag keeps your hands free during the cooking session and market walk.' },
  { item: 'Cash for extras (50-100 MAD)', icon: DollarSign, reason: 'Useful for tipping guides, buying extra spices at the market, or picking up souvenirs. Some schools include all costs, but small bills are always handy in the souk.' },
  { item: 'An empty stomach', icon: Utensils, reason: 'You will eat a full multi-course meal at the end. Skip breakfast or eat very lightly. The food you cook is consistently the best meal of the entire trip.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ (for rendering)
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What makes a Moroccan cooking experience different from a regular cooking class?',
    answer: 'A Moroccan cooking experience goes beyond the kitchen. It typically begins with a guided tour of a local souk where you shop for fresh ingredients with a chef, includes cultural context about the history of each dish, and ends with a shared meal in a beautiful riad courtyard or rooftop terrace. The experience integrates food, culture, and hospitality in a way that a standard cooking class does not.',
  },
  {
    question: 'How much does a cooking experience in Morocco cost?',
    answer: 'Group cooking experiences start from 300-500 MAD per person for a half-day session. Full-day market-to-table experiences cost from 600-1,200 MAD. Private riad cooking sessions start from 800-1,500 MAD. Farm-to-table day trips with transport cost from 700-1,500 MAD. Street food workshops start from 400 MAD. Prices may vary seasonally, with peak season (October-April) commanding higher rates.',
  },
  {
    question: 'Can I join a cooking experience if I have dietary restrictions?',
    answer: 'Yes. Most cooking schools accommodate vegetarian, vegan, and gluten-free diets with advance notice. Moroccan cuisine has many naturally plant-based and gluten-free dishes including vegetable tagines, couscous with seven vegetables, zaalouk, bissara, and herb salads. Inform the school when booking so they can prepare an appropriate menu.',
  },
  {
    question: 'What dishes will I learn to make during a Moroccan cooking experience?',
    answer: 'Most experiences teach 3-5 dishes. Common options include tagine (chicken with preserved lemons, lamb with prunes), hand-rolled couscous, Moroccan salads (zaalouk, taktouka), harira soup, msemen flatbread, and mint tea. Advanced sessions may cover pastilla, preserved lemons, and complex spice blends. The specific menu depends on the school and your preferences.',
  },
  {
    question: 'Which city offers the best cooking experience in Morocco?',
    answer: 'Marrakech offers the widest selection and best value with options from 350 MAD. Fes is the culinary capital with refined Fassi cuisine including pastilla and rfissa. Essaouira specializes in seafood-focused experiences. Chefchaouen provides intimate mountain cooking with Riffian specialties. Each city highlights a unique side of Moroccan cuisine.',
  },
  {
    question: 'Do I need prior cooking experience to join?',
    answer: 'No prior cooking experience is required. Moroccan cooking experiences are designed for all skill levels, from complete beginners to experienced home cooks. Instructors guide you through every step, from chopping vegetables to assembling a tagine. The focus is on learning traditional techniques and enjoying the process.',
  },
  {
    question: 'Should I book a group or private cooking experience?',
    answer: 'Group experiences (4-10 people) are more affordable and social, ideal for solo travelers and budget-conscious visitors. Private sessions cost more but offer personalized menus, flexible scheduling, and dedicated chef attention. Couples, families, and food enthusiasts often prefer private sessions. Book groups 2-3 days ahead and private sessions 1 week ahead during peak season.',
  },
  {
    question: 'What should I wear to a Moroccan cooking experience?',
    answer: 'Wear comfortable, loose-fitting clothes. Closed-toe shoes are recommended, especially for classes with market visits. Avoid long, flowing sleeves near hot stoves. Most schools provide aprons. Bring a camera, a small daypack for recipe booklets and gifts, and 50-100 MAD in cash for market tips and spice purchases.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCookingExperiencePage() {
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
            <span className="text-white">Moroccan Cooking Experience</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <ChefHat className="w-4 h-4" />
            Hands-On Culinary Experience
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            The Moroccan Cooking
            <br className="hidden md:block" /> Experience
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Immerse yourself in the flavors, aromas, and traditions of Moroccan cuisine.
            From souk to table, learn to cook tagine, couscous, pastilla, harira, and more
            with local chefs across Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              More Than a Cooking Class: A Cultural Immersion
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A Moroccan cooking experience is not just about learning recipes. It is about
                walking through a centuries-old souk with a local chef, selecting spices by smell
                and color, carrying your ingredients through narrow medina alleys, and
                transforming them into a feast in a tiled riad kitchen. It is about sitting down
                afterward to eat what you made, sharing the table with people from around the
                world, and understanding why Moroccans say that food is the truest form of
                hospitality.
              </p>
              <p>
                Whether you choose a market-to-table experience in Marrakech, a riad cooking
                session in Fes, a seafood workshop in Essaouira, or a farm-to-table day in the
                Atlas foothills, you will take home more than recipes. You will carry with you the
                technique of rolling couscous by hand, the scent of ras el hanout, and the memory
                of pouring mint tea from a height while your instructor smiles at your first
                attempt.
              </p>
              <p>
                This guide covers everything you need to plan your Moroccan cooking experience:
                the dishes you will learn, the types of experiences available, the best options in
                each city, what a typical session includes, how much to budget, options for
                dietary restrictions, and practical tips for booking, dressing, and preparing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What You Will Learn ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What You Will Learn to Cook
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the iconic tagine to the art of preserved lemons, these are the signature dishes
            and techniques taught in Moroccan cooking experiences.
          </p>

          <div className="space-y-6">
            {dishesToLearn.map((dish) => {
              const DishIcon = dish.icon;
              return (
                <div key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DishIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {dish.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{dish.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Key Skills You Will Learn</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                      {dish.skills.map((skill, i) => (
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

      {/* ── Types of Cooking Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CookingPot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Cooking Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From market adventures to mountain farm days, choose the format that matches your travel style and interests.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by season, group size, and specific school.
          </p>

          <div className="space-y-8">
            {experienceTypes.map((exp, index) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {exp.name}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mt-1">
                        <ExpIcon className="w-3 h-3" />
                        <span>{exp.priceRange}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{exp.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">What Is Included</h4>
                      <div className="space-y-1.5">
                        {exp.highlights.map((item, i) => (
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
                          <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {exp.bestFor}
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

      {/* ── Best Cooking Experiences by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Cooking Experiences by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city brings its own culinary personality. Here are the top cooking experiences across Morocco&apos;s four best food cities.
          </p>

          <div className="space-y-8">
            {cityCookingExperiences.map((cityData) => {
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
                      <span className="text-xs font-medium text-[var(--color-gold)]">{cityData.tagline}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-5">{cityData.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cityData.topExperiences.map((exp) => (
                      <div key={exp.name} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {exp.name}
                          </h4>
                          <span className="px-2 py-0.5 text-xs font-semibold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                            {exp.price}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">{exp.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What a Typical Experience Includes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What a Typical Experience Includes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the first market stall to the last cup of mint tea, here is exactly what happens during a full cooking experience.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {typicalInclusions.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.step}
                        </h3>
                        <span className="px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Price Guide by Type &amp; City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Compare cooking experience prices across Morocco&apos;s top food cities.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Peak season (October-April) and private sessions may cost more. Seasonal pricing can change.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Experience Type</div>
                <div className="p-3 px-4">Marrakech</div>
                <div className="p-3 px-4">Fes</div>
                <div className="p-3 px-4">Essaouira</div>
                <div className="p-3 px-4">Chefchaouen</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.type}
                  className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.type}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.marrakech}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.fes}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.essaouira}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.chefchaouen}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dietary Restrictions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cooking Experiences for Dietary Restrictions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan cuisine is naturally accommodating. Here is what vegan and gluten-free cooking experiences look like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dietaryOptions.map((option) => {
              const DietIcon = option.icon;
              return (
                <div key={option.diet} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DietIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {option.diet}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{option.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Popular Dishes</h4>
                    <div className="space-y-1.5">
                      {option.dishes.map((dish, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {dish}
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

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ThumbsUp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips for the Best Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Group vs. private, morning vs. evening, and other decisions that shape your cooking experience.
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

      {/* ── What to Wear & Bring ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear &amp; Bring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice so you arrive prepared, comfortable, and ready to cook.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatToBring.map((item) => {
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

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Moroccan Cooking Experiences
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
            <Link href="/cooking-classes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes Directory
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Browse all available cooking classes across Morocco with booking details and availability.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cooking-classes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <GraduationCap className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Classes Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to cooking schools, class types, detailed schedules, and the complete market shopping experience.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/cuisine" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Deep Dive
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the history, regional varieties, and cultural significance of Morocco&apos;s legendary culinary traditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Complete Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                50+ must-try Moroccan dishes, street food, dining etiquette, prices, and the best food cities.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-tours" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
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
            <Link href="/recipes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <CookingPot className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Recipes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Step-by-step recipes to recreate your favorite Moroccan dishes at home with authentic techniques.
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
            Ready for Your Moroccan Cooking Experience?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the spice-scented souks to the quiet kitchens of family riads, a cooking experience
            is the most rewarding thing you can do in Morocco. Roll up your sleeves, light the
            tagine, and bring the flavors of Morocco home with you.
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
            Cooking experiences from 300 MAD per person. Market-to-table from 450 MAD. Seasonal pricing may vary.
          </p>
        </div>
      </section>
    </>
  );
}
