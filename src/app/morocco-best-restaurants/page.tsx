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
  Sparkles,
  Globe,
  AlertTriangle,
  Eye,
  Waves,
  Coffee,
  MoonStar,
  Users,
  Wine,
  Award,
  Phone,
  CreditCard,
  Shirt,
  BookOpen,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: '25 Best Restaurants in Morocco 2026 | Ultimate Dining Guide',
  description:
    'Discover the 25 best restaurants in Morocco for 2026. From Marrakech and Fes to Casablanca, Tangier, Essaouira, and Rabat. Fine dining, traditional Moroccan cuisine, rooftop terraces, and hidden gems with prices, dress codes, and booking tips.',
  keywords: [
    'best restaurants morocco',
    'morocco food guide',
    'best restaurants marrakech',
    'best restaurants casablanca',
    'where to eat morocco 2026',
    'best restaurants fes',
    'best restaurants tangier',
    'best restaurants essaouira',
    'best restaurants rabat',
    'morocco fine dining',
    'nomad marrakech',
    'dar roumana fes',
    'rick cafe casablanca',
    'cafe hafa tangier',
    'morocco dining guide',
    'moroccan cuisine restaurants',
    'morocco restaurant prices',
    'best tagine morocco',
    'morocco foodie guide 2026',
  ],
  openGraph: {
    title: '25 Best Restaurants in Morocco 2026 | Ultimate Dining Guide',
    description:
      'The ultimate guide to dining in Morocco. 25 top restaurants across Marrakech, Fes, Casablanca, Tangier, Essaouira, Rabat, and Chefchaouen with real prices and insider tips.',
    url: `${BASE_URL}/morocco-best-restaurants`,
    images: [
      {
        url: `${BASE_URL}/images/hero-cuisine.webp`,
        width: 1200,
        height: 630,
        alt: 'Beautifully presented Moroccan dishes including tagine, couscous, and pastilla at a fine dining restaurant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '25 Best Restaurants in Morocco 2026',
    description:
      'Nomad, Dar Roumana, Rick Cafe, El Morocco Club, Ocean Vagabond, and 20 more. The ultimate Morocco restaurant guide with prices and booking tips.',
    images: [`${BASE_URL}/images/hero-cuisine.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-best-restaurants` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-best-restaurants`,
  name: '25 Best Restaurants in Morocco 2026 | Ultimate Dining Guide',
  description:
    'The definitive guide to the 25 best restaurants in Morocco for 2026, spanning Marrakech, Fes, Casablanca, Tangier, Essaouira, Rabat, and Chefchaouen.',
  url: `${BASE_URL}/morocco-best-restaurants`,
  image: `${BASE_URL}/images/hero-cuisine.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-best-restaurants`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Restaurants', item: `${BASE_URL}/morocco-best-restaurants` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the best restaurants in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The best restaurants in Morocco include Nomad and Al Fassia in Marrakech for rooftop dining and traditional cuisine, Dar Roumana and The Ruined Garden in Fes for refined Moroccan cooking, La Sqala and Le Cabestan in Casablanca for atmosphere and seafood, El Morocco Club in Tangier for jazz and cocktails, and Ocean Vagabond in Essaouira for beachfront dining. Prices range from 80 MAD for casual dining to 500+ MAD at fine dining establishments.' } },
    { '@type': 'Question', name: 'How much does a meal cost at a nice restaurant in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'At upscale restaurants in Morocco, expect to pay from 200-500 MAD per person for a full meal with drinks. Mid-range restaurants cost from 80-200 MAD per person. Traditional restaurants in the medina serve excellent meals from 50-100 MAD. Street food meals cost from 20-50 MAD. Fine dining establishments like Dar Yacout or KAOWA in Marrakech can reach from 600-1,000 MAD per person for a full experience.' } },
    { '@type': 'Question', name: 'Do I need to book restaurants in advance in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'For popular restaurants like Nomad, Al Fassia, Dar Roumana, Le Cabestan, and El Morocco Club, booking 1-3 days in advance is strongly recommended, especially during high season (March-May, September-November). Many upscale Moroccan restaurants accept bookings via phone, WhatsApp, or social media. Casual and mid-range restaurants generally do not require reservations except on Friday evenings and weekends.' } },
    { '@type': 'Question', name: 'What is the dress code at Moroccan restaurants?', acceptedAnswer: { '@type': 'Answer', text: 'Most Moroccan restaurants are relaxed about dress code. Smart casual is appropriate for upscale venues like Dar Yacout, KAOWA, Le Cabestan, and hotel restaurants. Avoid shorts, flip-flops, and beachwear at fine dining establishments. Traditional restaurants and casual eateries have no dress code. Some rooftop bars and nightlife-oriented restaurants prefer smart attire in the evening.' } },
    { '@type': 'Question', name: 'What should I order at a Moroccan restaurant?', acceptedAnswer: { '@type': 'Answer', text: 'Must-try dishes include tagine (slow-cooked stew, from 50 MAD), couscous (traditionally served on Fridays, from 60 MAD), pastilla (sweet and savory pigeon or seafood pie, from 70 MAD), mechoui (slow-roasted lamb, from 100 MAD), tanjia (Marrakech clay pot dish, from 80 MAD), and harira soup (from 10 MAD). For drinks, try fresh orange juice (from 8 MAD), mint tea (from 10 MAD), and avocado smoothies (from 15 MAD).' } },
    { '@type': 'Question', name: 'Is tipping expected at restaurants in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Tipping is customary but not mandatory in Morocco. At restaurants, 10-15% of the bill is standard for good service. At casual eateries, rounding up or leaving from 5-10 MAD is appreciated. At upscale restaurants, check if a service charge is included (some add 10%). Tip in cash even if paying by card, as tips added to card payments may not reach the staff.' } },
  ],
};

/* ===============================================================
   DATA: MARRAKECH RESTAURANTS
   =============================================================== */

const marrakechRestaurants = [
  {
    rank: 1,
    name: 'Nomad',
    icon: Star,
    city: 'Marrakech',
    cuisine: 'Modern Moroccan',
    priceRange: 'From 100-250 MAD per person',
    atmosphere: 'Rooftop terrace with medina views',
    mustTry: 'Lamb tagine with dates and walnuts, cauliflower steak, rooftop cocktails',
    dressCode: 'Smart casual',
    booking: 'Book 2-3 days ahead, especially for rooftop terrace at sunset',
    description:
      'Nomad has redefined dining in Marrakech medina. Perched above the spice square (Rahba Kedima) with a multi-level rooftop terrace offering panoramic views of the medina rooftops and minarets, it serves modern Moroccan cuisine that respects tradition while embracing innovation. The menu changes seasonally, featuring dishes like lamb tagine with dates and walnuts, roasted cauliflower steak with chermoula, and beautifully plated salads. The cocktail list is among the best in the medina. The design is contemporary — clean lines, natural materials, and open kitchens — creating a space that feels distinctly Moroccan yet thoroughly modern. Service is polished without being formal.',
    insiderTip:
      'Request the top terrace for sunset — the views of the Koutoubia minaret against the evening sky are extraordinary. Lunch is quieter and the light is beautiful for photography. The vegetarian options are genuinely excellent, not afterthoughts. Go early or late to avoid the peak rush between 13:00-14:00.',
  },
  {
    rank: 2,
    name: 'Al Fassia',
    icon: Award,
    city: 'Marrakech',
    cuisine: 'Traditional Moroccan (women-run)',
    priceRange: 'From 150-350 MAD per person',
    atmosphere: 'Elegant garden restaurant',
    mustTry: 'Lamb mechui, pastilla, seven-vegetable couscous',
    dressCode: 'Smart casual',
    booking: 'Book 1-2 days ahead, Friday lunch essential',
    description:
      'Al Fassia is a Marrakech legend and arguably the finest traditional Moroccan restaurant in the city. Run entirely by women — a rarity in Morocco — for over 35 years, it serves cuisine that represents the zenith of Moroccan home cooking elevated to restaurant perfection. The lamb mechoui (slow-roasted for 6+ hours) is transcendent, the pastilla is a masterclass in the sweet-savory balance that defines Moroccan cooking, and the Friday couscous is a pilgrimage-worthy experience. Set in a beautiful garden in the Gueliz neighborhood (with a second location in Aguedal), the atmosphere is refined without being stiff. The fact that it remains packed with Moroccan families alongside tourists is the ultimate endorsement.',
    insiderTip:
      'The Aguedal location has a garden setting and is slightly quieter. Order the mechoui — it is available daily and sells out, so order it at the start of your meal. The tasting menu (from 300 MAD) is excellent value for experiencing multiple dishes. Friday is couscous day and the restaurant is at its most vibrant.',
  },
  {
    rank: 3,
    name: 'Le Jardin',
    icon: Heart,
    city: 'Marrakech',
    cuisine: 'Moroccan-Mediterranean',
    priceRange: 'From 80-200 MAD per person',
    atmosphere: 'Secret garden in the medina',
    mustTry: 'Grilled catch of the day, mezze platter, mint lemonade',
    dressCode: 'Casual to smart casual',
    booking: 'Walk-in possible at lunch, book for dinner',
    description:
      'Hidden behind an unmarked door in the medina, Le Jardin is one of Marrakech most enchanting dining experiences. A lush tropical garden fills the courtyard — banana plants, bougainvillea, and towering bamboo create a green oasis in the heart of the city. The menu bridges Moroccan and Mediterranean traditions with grilled fish, generous salads, and well-executed tagines. The atmosphere is relaxed and bohemian, with tables scattered between the plants and lantern light in the evening. It serves as both restaurant and cafe, equally perfect for a long lunch or a romantic dinner. The boutique and art gallery in the same building are worth exploring.',
    insiderTip:
      'The garden is magical at dusk when the lanterns are lit. Arrive at 19:00 to secure a garden table without a reservation. The lunch menu is simpler and more affordable. The upstairs terrace offers a different perspective but the garden is the main event. Combined with a visit to the nearby Maison de la Photographie, it makes a perfect medina afternoon.',
  },
  {
    rank: 4,
    name: 'Dar Yacout',
    icon: Sparkles,
    city: 'Marrakech',
    cuisine: 'Traditional Moroccan fine dining',
    priceRange: 'From 500-800 MAD per person (set menu)',
    atmosphere: 'Palatial riad, multiple dining rooms, rooftop terrace',
    mustTry: 'Multi-course set menu — pastilla, mechoui, tagine, couscous, desserts',
    dressCode: 'Smart (no shorts or flip-flops)',
    booking: 'Book 3-5 days ahead, minimum',
    description:
      'Dar Yacout is the most celebrated fine dining experience in Marrakech — a multi-course extravaganza served in a palatial riad that was once the home of designer Bill Willis. The evening begins with cocktails on the rooftop terrace watching the sun set over the medina, followed by a procession of courses through multiple ornate dining rooms: salad platters, pastilla, lamb mechoui carved tableside, tagine, couscous, and a spectacular dessert spread. The interior is lavishly decorated with zellige tiles, carved plaster, and Berber rugs. This is dining as theater, and it has been perfecting the performance for decades.',
    insiderTip:
      'The price is steep but includes the entire multi-course experience with drinks. Arrive promptly at your reservation time for rooftop cocktails — the sunset is part of the experience. Wear smart attire. Go hungry — the quantity of food is staggering. If the budget allows only one splurge meal in Morocco, this is a strong contender.',
  },
  {
    rank: 5,
    name: 'KAOWA',
    icon: Star,
    city: 'Marrakech',
    cuisine: 'Contemporary Moroccan-fusion',
    priceRange: 'From 200-450 MAD per person',
    atmosphere: 'Stylish modern design, open kitchen',
    mustTry: 'Slow-cooked lamb shoulder, seafood bastilla, creative cocktails',
    dressCode: 'Smart casual to smart',
    booking: 'Book 2-3 days ahead',
    description:
      'KAOWA represents the new wave of Moroccan dining — a restaurant that takes traditional flavors and techniques and reinterprets them through a contemporary lens. Located in the Gueliz neighborhood, the space is architect-designed with clean lines, local materials, and an open kitchen that creates theater. The chef draws on seasonal Moroccan produce but applies international techniques: slow-cooked lamb shoulder with ras el hanout glaze, seafood bastilla deconstructed, and vegetable dishes that celebrate Morocco incredible produce. The cocktail program is inventive, using Moroccan ingredients like saffron, orange blossom, and argan. This is where the Marrakech creative class dines.',
    insiderTip:
      'The tasting menu (from 400 MAD with paired drinks) is the best way to experience the full range of the kitchen. Sit at the counter overlooking the open kitchen for the most interactive experience. The weekend brunch (from 200 MAD) is becoming a Gueliz institution. This is a restaurant that is still being discovered — go now before it becomes impossible to book.',
  },
];

/* ===============================================================
   DATA: FES RESTAURANTS
   =============================================================== */

const fesRestaurants = [
  {
    rank: 6,
    name: 'Dar Roumana',
    icon: Award,
    city: 'Fes',
    cuisine: 'Refined Moroccan-Mediterranean',
    priceRange: 'From 250-500 MAD per person',
    atmosphere: 'Intimate riad with courtyard dining',
    mustTry: 'Five-course tasting menu, lamb with prunes and almonds, lemon olive chicken',
    dressCode: 'Smart casual',
    booking: 'Essential — book 2-4 days ahead',
    description:
      'Dar Roumana is widely regarded as the finest restaurant in Fes, possibly in all of Morocco. Set in a beautifully restored riad in the heart of the Ziat neighborhood, it offers a five-course tasting menu that blends traditional Moroccan flavors with French technique. The kitchen, led by a team trained in Europe and Morocco, produces dishes of remarkable refinement — lamb slow-braised with honey, prunes, and almonds; chicken with preserved lemon and olives in a sauce of extraordinary depth; and desserts that celebrate Moroccan pastry traditions. The courtyard dining room, lit by candles and lanterns, is intimate and romantic. This is not a tourist restaurant — it is a destination.',
    insiderTip:
      'Book the five-course tasting menu (from 450 MAD) for the full experience. The wine list is carefully chosen. Request the courtyard table under the pomegranate tree. Dinner only (19:30 start). Combined with a stay at the riad itself (which has beautiful rooms), Dar Roumana becomes a complete Fes experience. Not suitable for children under 12.',
  },
  {
    rank: 7,
    name: 'Cafe Clock Fes',
    icon: Globe,
    city: 'Fes',
    cuisine: 'Cross-cultural Moroccan',
    priceRange: 'From 60-150 MAD per person',
    atmosphere: 'Multi-level medina house, rooftop terrace, cultural hub',
    mustTry: 'Camel burger, harira soup, Moroccan cooking classes',
    dressCode: 'Casual',
    booking: 'Walk-in, but book cooking classes in advance',
    description:
      'Cafe Clock is more than a restaurant — it is a cultural institution that has become central to the Fes medina experience. Spread across a rambling multi-level house near the Bou Inania Medersa, it serves a cross-cultural menu that brings together Moroccan, Middle Eastern, and international flavors. The famous camel burger (from 65 MAD) draws curiosity-seekers, but the real star is the kitchen traditional Moroccan dishes — the harira soup is among the best in the city, and the daily specials reflect market-fresh cooking. Beyond food, Cafe Clock hosts live Gnawa music on Sundays, Arabic calligraphy workshops, storytelling evenings, and cooking classes (from 350 MAD) that are among the best in Morocco.',
    insiderTip:
      'Go on Sunday evening for live Gnawa music — it transforms the rooftop into a magical space. The cooking classes sell out, so book via email or social media days ahead. For the best experience, arrive for a late lunch (after 14:00) and grab a rooftop table with views of the medina. The camel burger is genuinely good, not just a gimmick.',
  },
  {
    rank: 8,
    name: 'The Ruined Garden',
    icon: Heart,
    city: 'Fes',
    cuisine: 'Garden Moroccan',
    priceRange: 'From 80-180 MAD per person',
    atmosphere: 'Romantic walled garden in a restored ruin',
    mustTry: 'Seasonal salads, tagine of the day, homemade lemonade',
    dressCode: 'Casual',
    booking: 'Recommended, especially for lunch',
    description:
      'Built in the romantic ruins of a once-grand medina house, The Ruined Garden is one of the most atmospheric restaurants in Morocco. Crumbling mosaic walls frame an open-air garden where tables sit among fruit trees, trailing vines, and flowering plants. The menu is short, seasonal, and prepared with care — a daily tagine, fresh salads from the garden, homemade breads, and simple desserts. Nothing is overwrought; the ingredients speak for themselves. The service is warm and unhurried. This is the restaurant Fes visitors remember most fondly — not for extravagant cuisine but for the way the setting, food, and atmosphere create a genuinely peaceful moment in the intense medina.',
    insiderTip:
      'Lunch is the best time to visit when the garden is bathed in light. Book via their website or Instagram. The garden has limited seating (around 30 covers), so reservations are important in high season. The daily tagine is always excellent — trust the kitchen. The homemade lemonade with orange blossom water is perfect in summer. Cash preferred.',
  },
  {
    rank: 9,
    name: 'Palais Amani',
    icon: Sparkles,
    city: 'Fes',
    cuisine: 'Elegant Moroccan',
    priceRange: 'From 150-350 MAD per person',
    atmosphere: 'Palatial riad with Andalusian garden',
    mustTry: 'Lamb tangia, pastilla, tasting menu, garden cocktails',
    dressCode: 'Smart casual',
    booking: 'Book 1-2 days ahead',
    description:
      'Palais Amani is a palatial riad hotel near Bab Guissa whose restaurant is open to non-guests and has become one of the finest dining experiences in Fes. The setting is magnificent — a restored palace with an Andalusian garden, marble fountains, zellige-clad walls, and a rooftop terrace overlooking the medina. The kitchen produces elegant Moroccan cuisine: lamb tangia (Marrakech-style slow-cooked pot), seafood pastilla, and refined tagines with seasonal produce. The garden bar is one of the few places in the Fes medina where you can enjoy cocktails in a truly beautiful setting. The combination of architecture, cuisine, and ambiance makes Palais Amani a memorable splurge.',
    insiderTip:
      'The rooftop terrace at sunset is stunning — arrive at 18:00 for cocktails (from 80 MAD) before dinner. The tasting menu (from 300 MAD) showcases the kitchen range. The cooking classes held in the riad kitchen (from 500 MAD) are excellent and include a market visit. Even if not dining, the cocktail bar in the garden is worth a visit.',
  },
];

/* ===============================================================
   DATA: CASABLANCA RESTAURANTS
   =============================================================== */

const casablancaRestaurants = [
  {
    rank: 10,
    name: 'La Sqala',
    icon: Landmark,
    city: 'Casablanca',
    cuisine: 'Traditional Moroccan in a fortress garden',
    priceRange: 'From 80-200 MAD per person',
    atmosphere: 'Garden courtyard inside 18th-century fortress walls',
    mustTry: 'Moroccan breakfast spread, tagine, fresh juices',
    dressCode: 'Casual',
    booking: 'Walk-in, arrive early for breakfast',
    description:
      'La Sqala occupies the garden courtyard of an 18th-century Portuguese fortification near the medina, and it is one of the most charming restaurants in Casablanca. The setting is magical — orange trees, bougainvillea, and jasmine surround tables laid with white linen, while the fortress walls block the noise of the city. The Moroccan breakfast is legendary: a spread of msemen, baghrir, rghaif, eggs, olives, cheese, honey, amlou (almond butter), fresh juice, and mint tea that could feed a family (from 80 MAD for the full spread). Lunch and dinner feature well-prepared tagines, grilled meats, and salads. La Sqala is where Casablancais come for a long, lingering weekend breakfast.',
    insiderTip:
      'Come for the Moroccan breakfast — it is the best in Casablanca and possibly in all of Morocco. Arrive before 10:00 on weekends to secure a garden table. The artisanal shops inside the fortress walls sell quality ceramics, leather, and textiles at reasonable fixed prices. After breakfast, walk to the nearby old medina. The dinner menu is solid but breakfast is the star.',
  },
  {
    rank: 11,
    name: 'Rick&apos;s Cafe',
    icon: Music,
    city: 'Casablanca',
    cuisine: 'International-Moroccan',
    priceRange: 'From 200-400 MAD per person',
    atmosphere: 'Art-deco recreation of the film Casablanca',
    mustTry: 'Cocktails, Moroccan-French fusion dishes, Sunday jazz brunch',
    dressCode: 'Smart casual',
    booking: 'Book 1-3 days ahead, especially for dinner',
    description:
      'Inspired by the 1942 film Casablanca (which was never actually filmed here), Rick Cafe was opened in 2004 by a former American diplomat in a beautifully restored courtyard mansion overlooking the medina. The art-deco interior features a curved bar, a grand piano (played nightly), arched doorways, and vintage movie posters. The food is well-executed Moroccan-French fusion — think pastilla spring rolls, Atlantic seafood, and classic French desserts with Moroccan ingredients. The cocktails are the best in Casablanca. Yes, it is a tourist attraction, but it is done with such style and genuine affection for the film and the city that even locals appreciate it. The Sunday jazz brunch is a Casablanca institution.',
    insiderTip:
      'Book a balcony table overlooking the courtyard for the best atmosphere. The piano bar on the ground floor plays nightly — arrive around 20:30 for dinner and stay for the music. The Sunday jazz brunch (from 350 MAD) is excellent. The cocktails are genuinely well-crafted — try the Casablanca Sour. Say "Here is looking at you, kid" at least once.',
  },
  {
    rank: 12,
    name: 'Le Cabestan',
    icon: Waves,
    city: 'Casablanca',
    cuisine: 'French-Moroccan seafood',
    priceRange: 'From 250-500 MAD per person',
    atmosphere: 'Cliff-edge with panoramic Atlantic views',
    mustTry: 'Fresh oysters, grilled lobster, bouillabaisse, sunset cocktails',
    dressCode: 'Smart',
    booking: 'Essential — book 2-3 days ahead',
    description:
      'Le Cabestan commands one of the most dramatic dining positions in Morocco — perched on the rocky Atlantic coast with floor-to-ceiling windows and a terrace overlooking the crashing waves. The restaurant has been a Casablanca institution for decades, serving French-Moroccan seafood cuisine to the city elite. Fresh oysters, grilled lobster, seafood platters, and a bouillabaisse that draws comparisons to Marseille are the stars. The wine list is extensive, the service is formal and attentive, and the sunset views are mesmerizing. This is special-occasion dining in Casablanca — the place to celebrate or impress.',
    insiderTip:
      'Request a window table or terrace seat for the ocean views — this is non-negotiable. Come at sunset (around 18:30-19:00 depending on season) for the full dramatic effect. The seafood platter for two (from 600 MAD) is the signature order. The wine list includes excellent Moroccan wines from Guerrouane and Meknes regions. Dress smartly — this is where Casablanca dresses up.',
  },
  {
    rank: 13,
    name: 'Basmane',
    icon: UtensilsCrossed,
    city: 'Casablanca',
    cuisine: 'Contemporary Moroccan',
    priceRange: 'From 150-300 MAD per person',
    atmosphere: 'Modern design with traditional touches',
    mustTry: 'Modernized tagines, seasonal tasting menu, craft cocktails',
    dressCode: 'Smart casual',
    booking: 'Recommended',
    description:
      'Basmane is part of the new generation of Casablanca restaurants that are redefining what Moroccan cuisine can be. Located in the Maarif neighborhood, it combines a sleek modern interior with a menu that reimagines traditional recipes using contemporary techniques. The tasting menu changes with the seasons, and the chef sources directly from small producers and farms across Morocco. Tagines are deconstructed and reconstructed, pastilla becomes a crispy appetizer, and the desserts are works of art. The craft cocktail program uses Moroccan botanicals — saffron, orange blossom, rose — to create drinks that taste unmistakably of place. This is the Casablanca that food critics are writing about.',
    insiderTip:
      'The five-course tasting menu (from 280 MAD without wine, from 450 MAD with pairing) is the best way to experience the kitchen. Thursday and Friday evenings are liveliest. The bar area is excellent for solo diners. Follow their social media for special event dinners with guest chefs. This is one of the most exciting restaurants in Morocco right now.',
  },
];

/* ===============================================================
   DATA: TANGIER RESTAURANTS
   =============================================================== */

const tangierRestaurants = [
  {
    rank: 14,
    name: 'El Morocco Club',
    icon: Music,
    city: 'Tangier',
    cuisine: 'Moroccan-International with jazz',
    priceRange: 'From 150-350 MAD per person',
    atmosphere: 'Art-deco Kasbah mansion, live jazz, cocktail bar',
    mustTry: 'Cocktails, tapas, grilled seafood, live jazz experience',
    dressCode: 'Smart casual to smart',
    booking: 'Book 1-2 days ahead for dinner',
    description:
      'El Morocco Club is the jewel of Tangier nightlife and dining, occupying a stunning art-deco mansion in the Kasbah with a sophistication that channels the city legendary international past. The multi-level space includes a ground-floor cocktail bar with live jazz on weekends, a mezzanine dining room with intimate alcoves, and a rooftop terrace with views across the Strait of Gibraltar to Spain. The kitchen blends Moroccan and international cuisines — grilled seafood, elegant tapas, refined tagines — but the real draw is the atmosphere. The combination of the art-deco interiors, flickering candles, live music, and the ghost of Tangier bohemian past makes this an unforgettable evening.',
    insiderTip:
      'Reserve a mezzanine table for dinner — the alcoves feel like private dining rooms. Come on Friday or Saturday for live jazz (usually starting at 21:30). The cocktail list is Tangier best — try the Tangier Mule or the signature El Morocco cocktail. Start with drinks on the rooftop at sunset before moving to dinner. Dress up — this venue deserves it.',
  },
  {
    rank: 15,
    name: 'Cafe Hafa',
    icon: Coffee,
    city: 'Tangier',
    cuisine: 'Mint tea only',
    priceRange: 'From 15-25 MAD',
    atmosphere: 'Legendary cliff-edge terraces since 1921',
    mustTry: 'Mint tea with a view of the Strait of Gibraltar',
    dressCode: 'Casual',
    booking: 'No booking — arrive early',
    description:
      'Cafe Hafa is not technically a restaurant — it serves only mint tea and coffee — but no list of Morocco best dining experiences would be complete without it. Clinging to the cliff face overlooking the Strait of Gibraltar, this cafe has been in continuous operation since 1921. The Rolling Stones, the Beatles, Paul Bowles, William Burroughs, and Tennessee Williams all sat on these whitewashed terraces, sipping mint tea and watching ships pass between the Atlantic and Mediterranean. The cafe cascades down the hillside in a series of tiered terraces, each offering unobstructed views of Spain shimmering across the water. It is the most iconic cafe in Morocco and possibly in all of North Africa.',
    insiderTip:
      'Arrive 45 minutes before sunset and descend to the lower terraces for the best unobstructed views. The cafe is cash only. Mint tea costs from 15 MAD, coffee from 15 MAD. The lower terraces are quieter. Weekday mornings offer the most peaceful experience. Bring a book — this is a place for lingering, not rushing.',
  },
  {
    rank: 16,
    name: 'Dar Nour',
    icon: Eye,
    city: 'Tangier',
    cuisine: 'Traditional Moroccan with views',
    priceRange: 'From 120-280 MAD per person',
    atmosphere: 'Restored Kasbah house with panoramic terrace',
    mustTry: 'Fish tagine, seasonal couscous, terrace cocktails',
    dressCode: 'Smart casual',
    booking: 'Book 1-2 days ahead',
    description:
      'Dar Nour is a gem hidden in the Tangier Kasbah — a beautifully restored traditional house with a rooftop terrace that commands sweeping views of the port, the Strait, and the Spanish coast beyond. The restaurant is part of a boutique guesthouse and is open to non-guests for dinner. The menu is focused and seasonal, featuring the best of Moroccan cuisine prepared with fresh market ingredients. The fish tagine, made with the morning catch, is outstanding. The atmosphere is intimate — only a few tables on the terrace and a small dining room below — creating a private dinner party feel rather than a restaurant experience.',
    insiderTip:
      'Book the terrace table (there are only 3-4 of them) for sunset. The fish tagine changes daily depending on the catch — ask the staff what is freshest. The house aperitif (a local take on sangria) is delicious. If staying in Tangier for multiple nights, Dar Nour is where to splurge. The guesthouse rooms are also beautiful if you want the full experience.',
  },
];

/* ===============================================================
   DATA: ESSAOUIRA RESTAURANTS
   =============================================================== */

const essaouiraRestaurants = [
  {
    rank: 17,
    name: 'Ocean Vagabond',
    icon: Waves,
    city: 'Essaouira',
    cuisine: 'Beachfront international',
    priceRange: 'From 80-200 MAD per person',
    atmosphere: 'Directly on the beach, bohemian-chic',
    mustTry: 'Grilled fish, calamari, beach cocktails, sunset sessions',
    dressCode: 'Casual / beach',
    booking: 'Walk-in, arrive early for sunset tables',
    description:
      'Ocean Vagabond is Essaouira most beloved beach restaurant, sitting directly on the sand with the Atlantic waves crashing just meters from your table. The vibe is barefoot bohemian — surfers, artists, families, and travelers share long wooden tables under canvas canopies. The menu focuses on fresh seafood (grilled catch of the day, calamari, shrimp), salads, and burgers, all prepared simply and well. The drinks list includes good cocktails, cold beer, and fresh smoothies. When the wind drops (a rare treat in windswept Essaouira), the beach terrace is paradise. The sunset sessions, with the Mogador Island silhouetted against the evening sky, are legendary.',
    insiderTip:
      'Come for a long lunch or late afternoon — the light on the beach between 16:00-18:00 is extraordinary. The grilled catch of the day (from 90 MAD) with a side salad and fresh juice is the quintessential Essaouira meal. Bring a sweater — the beach wind picks up in the evening. The restaurant is south of the medina along the beach, about a 10-minute walk from the ramparts.',
  },
  {
    rank: 18,
    name: 'La Table by Madada',
    icon: Award,
    city: 'Essaouira',
    cuisine: 'Modern Moroccan-French',
    priceRange: 'From 150-350 MAD per person',
    atmosphere: 'Elegant medina dining, boutique hotel',
    mustTry: 'Seafood tasting menu, argan oil dishes, wine pairing',
    dressCode: 'Smart casual',
    booking: 'Book 1-2 days ahead',
    description:
      'La Table by Madada, the restaurant of the Madada Mogador hotel, has elevated Essaouira dining to new heights. Located in the medina with views to the harbor, it serves a refined menu that celebrates the Atlantic coast bounty — fresh fish, shellfish, and seasonal produce — prepared with French technique and Moroccan soul. The seafood tasting menu is a journey through the coast flavors: raw oysters, ceviche with chermoula, grilled lobster with argan oil, and traditional pastilla with a modern twist. The interior blends medina architecture with contemporary design. This is Essaouira dining at its most elegant.',
    insiderTip:
      'The three-course lunch (from 150 MAD) is exceptional value. The five-course dinner tasting menu with wine pairing (from 450 MAD) is a celebration. Request a harbor-view table. The argan oil used in the kitchen is sourced from a local cooperative — ask the chef about it. The hotel rooftop bar is worth a pre-dinner cocktail.',
  },
  {
    rank: 19,
    name: 'Taros',
    icon: Music,
    city: 'Essaouira',
    cuisine: 'Moroccan-International with live music',
    priceRange: 'From 100-250 MAD per person',
    atmosphere: 'Rooftop terrace overlooking the harbor and ramparts',
    mustTry: 'Grilled seafood platter, cocktails at sunset, live music evenings',
    dressCode: 'Casual to smart casual',
    booking: 'Recommended for weekend dinners',
    description:
      'Taros occupies a prime position on the harbor square with a multi-level space that includes a ground-floor bar, a restaurant floor, and a rooftop terrace with panoramic views of the harbor, ramparts, and ocean. The kitchen serves well-prepared Moroccan and international dishes — grilled seafood platters, tagines, steaks, and generous salads. But the real draw is the terrace, the cocktails, and the live music that transforms the evenings into a celebration of Essaouira bohemian spirit. Gnawa musicians, jazz combos, and singer-songwriters perform regularly. This is the social hub of Essaouira dining scene.',
    insiderTip:
      'The rooftop at sunset is one of the best views in Essaouira — arrive at 17:30 to secure a table. Check their social media for live music nights (usually Thursday-Saturday). The seafood platter for two (from 280 MAD) is generous. The cocktails are well-made and reasonably priced for a tourist hotspot. The ground-floor bar is good for a quick drink if the terrace is full.',
  },
];

/* ===============================================================
   DATA: RABAT & CHEFCHAOUEN RESTAURANTS
   =============================================================== */

const rabatChefRestaurants = [
  {
    rank: 20,
    name: 'Dar Zaki',
    icon: Star,
    city: 'Rabat',
    cuisine: 'Traditional Moroccan',
    priceRange: 'From 80-200 MAD per person',
    atmosphere: 'Restored riad near the medina',
    mustTry: 'Pastilla, lamb tagine with prunes, Friday couscous',
    dressCode: 'Smart casual',
    booking: 'Recommended, especially Fridays',
    description:
      'Dar Zaki is Rabat finest traditional Moroccan restaurant, set in a beautifully restored riad that combines authentic architecture with refined cuisine. The menu represents the best of Moroccan home cooking elevated to restaurant quality — the pastilla (sweet and savory pigeon pie) is a masterwork, the lamb tagine with prunes and almonds achieves the perfect balance of sweet and savory, and the Friday couscous is prepared with the care and attention that defines this weekly ritual. The dining room features zellige tiles, carved plaster, and candlelight. The clientele is largely Moroccan families and government officials, which speaks to the authenticity and quality of the food.',
    insiderTip:
      'Reserve for Friday lunch for the couscous experience (from 100 MAD). Order the pastilla as a starter — it is not always on the menu but the kitchen will prepare it with notice. The terrace is lovely on warm evenings. Dar Zaki is where Rabati families celebrate — the atmosphere on weekend evenings is festive and warm.',
  },
  {
    rank: 21,
    name: 'Le Dhow',
    icon: Compass,
    city: 'Rabat',
    cuisine: 'Moroccan-International on a boat',
    priceRange: 'From 120-300 MAD per person',
    atmosphere: 'Converted sailing vessel on the Bou Regreg river',
    mustTry: 'Grilled seafood, cocktails at sunset, river views',
    dressCode: 'Smart casual',
    booking: 'Essential for sunset tables',
    description:
      'Le Dhow is Rabat most unique dining experience — a converted traditional sailing vessel permanently moored on the Bou Regreg river between Rabat and Sale. The multi-level boat offers Moroccan and international cuisine with panoramic views of the Oudaias Kasbah, the medina, and the Sale skyline reflected in the river. At sunset, the experience becomes magical as the city lights begin to twinkle across the water. The menu spans grilled seafood, classic Moroccan dishes with contemporary presentation, pasta, steaks, and a strong cocktail and wine list. The upper deck is open-air in summer, creating a floating terrace unlike anything else in Morocco.',
    insiderTip:
      'Book a sunset table on the upper deck — this is non-negotiable for the full experience. The river views at dusk are breathtaking. The seafood is the strongest section of the menu. Cocktails (from 70 MAD) are well-prepared. After dinner, walk along the Bou Regreg marina promenade. The boat can sway slightly — not ideal for those prone to motion sensitivity.',
  },
  {
    rank: 22,
    name: 'Aladdin Restaurant',
    icon: MapPin,
    city: 'Chefchaouen',
    cuisine: 'Traditional Moroccan with terrace views',
    priceRange: 'From 50-120 MAD per person',
    atmosphere: 'Multi-level terrace overlooking the blue medina',
    mustTry: 'Kefta tagine, goat cheese salad, fresh juices, mint tea',
    dressCode: 'Casual',
    booking: 'Walk-in, arrive early for terrace',
    description:
      'Aladdin is Chefchaouen most popular restaurant, and for good reason — its multi-level terrace offers what might be the most photogenic dining view in Morocco. Tables overlook the tumbling blue-washed buildings of the medina, the surrounding Rif Mountains, and the Spanish Mosque on the hilltop above. The menu is straightforward traditional Moroccan — kefta tagine (spiced meatballs in tomato sauce with eggs), chicken tagine with preserved lemons, mixed salads, and fresh juices. The food is honest and satisfying rather than refined, but combined with the setting, it creates an experience greater than the sum of its parts. The terrace at golden hour is unforgettable.',
    insiderTip:
      'Arrive by 12:00 for lunch or 18:00 for dinner to secure a top-terrace table — the views sell themselves. The kefta tagine (from 50 MAD) is the signature dish and genuinely good. Fresh juice combinations (from 15 MAD) are excellent. The prices are very fair for Chefchaouen. Service can be slow when busy — order everything at once and enjoy the views while you wait.',
  },
  {
    rank: 23,
    name: 'Bab Ssour',
    icon: Heart,
    city: 'Chefchaouen',
    cuisine: 'Home-style Moroccan',
    priceRange: 'From 40-100 MAD per person',
    atmosphere: 'Cozy medina house, family-run',
    mustTry: 'Daily specials, rfissa, traditional bread with amlou',
    dressCode: 'Casual',
    booking: 'Walk-in',
    description:
      'Bab Ssour is the kind of restaurant that makes you feel like you have been invited into a Moroccan home. Run by a local family in a traditional medina house, it serves home-cooked Moroccan food that changes daily based on what is available at the market. The rfissa (shredded msemen with chicken and lentils in a spiced broth) is a Rif Mountain specialty rarely found in tourist restaurants. Portions are generous, prices are remarkably fair, and the warmth of the family running the kitchen is genuine. The small dining room, decorated with Chefchaouen blue paint and handwoven textiles, seats perhaps 20 people, creating an intimate atmosphere. This is the Morocco that travelers dream of finding.',
    insiderTip:
      'Ask for the daily special — it is always the best option. The rfissa (from 40 MAD) is exceptional and rarely this good outside a private home. Come for lunch when the kitchen is freshest. The bread with amlou (argan oil, almond, and honey paste) is addictive — order extra. Cash only. The family speaks some English and French.',
  },
];

/* ===============================================================
   DATA: MORE RESTAURANTS (24-25)
   =============================================================== */

const moreRestaurants = [
  {
    rank: 24,
    name: 'Le Saveur du Poisson',
    icon: UtensilsCrossed,
    city: 'Tangier',
    cuisine: 'Set seafood menu',
    priceRange: 'From 150-200 MAD per person (set menu)',
    atmosphere: 'Rustic medina house, no menu, no choices',
    mustTry: 'Everything — the entire multi-course fish feast',
    dressCode: 'Casual',
    booking: 'Walk-in',
    description:
      'Le Saveur du Poisson is one of the most unique dining experiences in Morocco. There is no menu, no choices, and no negotiation. You sit down in a tiny, rustic room in the medina, and the kitchen sends out a seemingly endless procession of fish courses: fish soup, fried sardines, grilled shrimp, baked fish with chermoula, fish tagine, and more. Each course arrives when the last is finished, and the quality is consistently excellent — this is the freshest Atlantic seafood prepared with skill and generosity. The price is fixed per person and includes everything. The experience is chaotic, charming, and utterly memorable.',
    insiderTip:
      'Come hungry — seriously hungry. The courses keep coming and the portions are generous. The restaurant is unmarked — ask locals for "Le Saveur du Poisson" near the Kasbah. Payment is cash only. Lunch is busier than dinner. Arrive around 12:30 or 19:30 for the best timing. This is not for those who want control over their meal — surrender to the experience.',
  },
  {
    rank: 25,
    name: 'Cafe Maure (Oudaias Kasbah)',
    icon: Coffee,
    city: 'Rabat',
    cuisine: 'Mint tea and pastries',
    priceRange: 'From 15-30 MAD',
    atmosphere: 'Open-air terrace overlooking the river and Atlantic',
    mustTry: 'Mint tea, almond pastries, fresh orange juice',
    dressCode: 'Casual',
    booking: 'No booking — arrive mid-afternoon',
    description:
      'Like Cafe Hafa in Tangier, Cafe Maure is less a restaurant than a state of mind. Perched at the edge of the Oudaias Kasbah in Rabat with views of the Bou Regreg river meeting the Atlantic, it serves mint tea, coffee, fresh juice, and traditional pastries on an open-air terrace shaded by reed canopies and jasmine. The setting is one of the most beautiful in Morocco — ancient fortress walls, the glittering river below, fishermen casting nets, and the Sale skyline in the distance. Time dissolves here. It is the perfect place to understand why the Moroccan afternoon tea ritual is central to the culture. Some experiences transcend food, and Cafe Maure is one of them.',
    insiderTip:
      'Visit between 16:00-17:00 for the best light and atmosphere. Walk through the Andalusian Garden to reach the cafe. Order a full pot of mint tea (from 15 MAD) and almond pastries (from 10 MAD). Stay through sunset if the weather is clear. Cash only. The cafe is at the end of the Oudaias Kasbah, past the garden — follow the path to the cliff edge.',
  },
];

/* ===============================================================
   DATA: DINING TIPS
   =============================================================== */

const diningTips = [
  { tip: 'Book Ahead for Fine Dining', icon: Phone, description: 'Popular restaurants like Nomad, Dar Roumana, Le Cabestan, and El Morocco Club fill up 2-3 days in advance, especially during high season (March-May, September-November). Book via phone, WhatsApp, or social media.' },
  { tip: 'Dress Code Awareness', icon: Shirt, description: 'Most Moroccan restaurants are relaxed about dress. Smart casual works everywhere. Avoid shorts and flip-flops at upscale venues. Some rooftop bars prefer smart attire in the evening.' },
  { tip: 'Tipping Culture', icon: CreditCard, description: 'Tip 10-15% at restaurants for good service. Round up at casual eateries. Check if service is included at upscale places. Always tip in cash even if paying by card.' },
  { tip: 'Friday Is Couscous Day', icon: Calendar, description: 'Traditional Moroccan restaurants serve special couscous on Fridays — this is the day to order it. Many restaurants are busier at Friday lunch as families dine out for the weekly ritual.' },
  { tip: 'Alcohol Availability', icon: Wine, description: 'Licensed restaurants in tourist areas serve alcohol. Traditional medina restaurants generally do not. Hotels always serve. Morocco produces excellent wines from the Meknes, Guerrouane, and Boulaouane regions.' },
  { tip: 'Seasonal Pricing Applies', icon: AlertTriangle, description: 'Prices at restaurants can fluctuate seasonally, especially at tourist-oriented venues. The prices listed here are starting prices and may be higher during peak season or for special items.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the best restaurants in Morocco?', answer: 'The top restaurants include Nomad and Al Fassia in Marrakech, Dar Roumana and The Ruined Garden in Fes, La Sqala and Le Cabestan in Casablanca, El Morocco Club in Tangier, Ocean Vagabond in Essaouira, and Dar Zaki in Rabat. Each offers a different facet of Moroccan cuisine, from traditional to contemporary.' },
  { question: 'How much does a nice restaurant meal cost in Morocco?', answer: 'Fine dining costs from 250-800 MAD per person. Mid-range restaurants charge from 80-200 MAD. Traditional medina restaurants serve excellent meals from 40-100 MAD. Street food costs from 15-50 MAD. Morocco offers exceptional value compared to European dining.' },
  { question: 'Do I need to book restaurants in advance?', answer: 'For popular spots like Nomad, Dar Roumana, Le Cabestan, and El Morocco Club, book 2-3 days ahead during high season. Casual restaurants and cafes are generally walk-in. Booking via WhatsApp is increasingly common. Friday lunches are always busier.' },
  { question: 'What is the dress code at Moroccan restaurants?', answer: 'Most restaurants are relaxed. Smart casual works everywhere. Avoid beachwear at upscale venues. Traditional restaurants have no dress code. Fine dining spots like Dar Yacout and Le Cabestan expect smart attire.' },
  { question: 'What should I order at a Moroccan restaurant?', answer: 'Must-try dishes: tagine (from 50 MAD), couscous on Fridays (from 60 MAD), pastilla (from 70 MAD), mechoui (from 100 MAD), tanjia in Marrakech (from 80 MAD), and harira soup (from 10 MAD). For drinks: mint tea (from 10 MAD), fresh orange juice (from 8 MAD), and Moroccan wine.' },
  { question: 'Is tipping expected at restaurants in Morocco?', answer: 'Yes, 10-15% is standard at restaurants. At casual places, round up or leave from 5-10 MAD. Check if service is included at upscale venues. Always tip in cash. Leaving no tip is considered disrespectful for good service.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Complete guide to Moroccan cuisine from tagine and couscous to street food.' },
  { href: '/morocco-best-cafes', icon: Coffee, title: 'Best Cafes in Morocco', description: 'From traditional mint tea spots to modern coffee shops across the kingdom.' },
  { href: '/rabat-local-guide', icon: MapPin, title: 'Rabat Local Guide', description: 'Explore Rabat like a local with hidden neighborhoods and food experiences.' },
  { href: '/morocco-budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to eat and travel well in Morocco without breaking the bank.' },
  { href: '/morocco-cuisine', icon: UtensilsCrossed, title: 'Moroccan Cuisine', description: 'Deep dive into the dishes, spices, and culinary traditions of Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoBestRestaurantsPage() {
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
            backgroundImage: 'url(/images/hero-cuisine.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Restaurants</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <UtensilsCrossed className="w-4 h-4" />
            Ultimate Dining Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            25 Best Restaurants
            <br className="hidden md:block" /> in Morocco 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From rooftop tagines in Marrakech and cliff-edge seafood in Casablanca to medina gardens
            in Fes and jazz lounges in Tangier. The definitive dining guide with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: A Culinary Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the great food countries of the world. Its cuisine — a complex tapestry
                of Berber, Arab, Andalusian, and French influences — has been refined over centuries into
                something genuinely extraordinary. From the slow-cooked tagines of Marrakech to the
                Atlantic seafood of Essaouira, from the refined pastilla of Fes to the cosmopolitan
                dining rooms of Casablanca, every city offers its own culinary identity.
              </p>
              <p>
                What has changed in recent years is the restaurant scene. A new generation of Moroccan
                chefs is reinterpreting traditional cuisine with contemporary technique, while established
                institutions continue to perfect recipes that have been handed down through generations.
                The result is a dining landscape of remarkable depth — you can eat a transcendent meal
                at a street stall for from 20 MAD or a multi-course feast in a palatial riad for from
                500 MAD, and both experiences will be unforgettable.
              </p>
              <p>
                This guide presents 25 restaurants across seven cities that represent the best of
                Moroccan dining in 2026. Each entry includes cuisine style, price range, atmosphere,
                dress code, booking advice, and the insider tips that make the difference between a
                good meal and a great one. Prices shown are starting prices and may vary by season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Marrakech Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech (5 Restaurants)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s culinary capital offers everything from rooftop modern Moroccan to palatial
            multi-course feasts in candlelit riads.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices per person. Seasonal pricing may apply.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {marrakechRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Atmosphere:</strong> {rest.atmosphere}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Must Try:</strong> {rest.mustTry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Booking:</strong> {rest.booking}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Fes Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fes (4 Restaurants)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s spiritual capital is home to some of the most refined cuisine in the country,
            served in gardens, riads, and cultural institutions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Fes restaurants tend to close earlier than Marrakech. Plan dinner reservations for 19:30-20:00.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {fesRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Atmosphere:</strong> {rest.atmosphere}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Must Try:</strong> {rest.mustTry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Booking:</strong> {rest.booking}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Casablanca Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Casablanca (4 Restaurants)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s economic capital brings cosmopolitan sophistication, Atlantic seafood,
            and some of the most innovative dining in the country.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Casablanca dining tends to be pricier than other cities. Budget from 200 MAD per person for upscale venues.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {casablancaRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Atmosphere:</strong> {rest.atmosphere}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Must Try:</strong> {rest.mustTry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Booking:</strong> {rest.booking}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Tangier Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tangier (3 Restaurants)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s gateway city between two continents delivers cosmopolitan dining, legendary cafes,
            and Kasbah atmosphere.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {tangierRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Atmosphere:</strong> {rest.atmosphere}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Must Try:</strong> {rest.mustTry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Booking:</strong> {rest.booking}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Essaouira Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essaouira (3 Restaurants)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlantic wind city delivers fresh seafood, bohemian atmosphere, and dining with ocean views.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {essaouiraRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Atmosphere:</strong> {rest.atmosphere}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Must Try:</strong> {rest.mustTry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Booking:</strong> {rest.booking}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Rabat & Chefchaouen Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rabat &amp; Chefchaouen (4 Restaurants)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The refined capital and the blue mountain town each offer distinctive dining experiences
            that reward the adventurous traveler.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {rabatChefRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-accent)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs text-[var(--text-muted)]">
                    <div className="flex items-start gap-2">
                      <Eye className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Atmosphere:</strong> {rest.atmosphere}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Must Try:</strong> {rest.mustTry}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span><strong>Booking:</strong> {rest.booking}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Bonus Picks Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Bonus Picks: Hidden Gems
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two extraordinary dining experiences that defy conventional restaurant categorization.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {moreRestaurants.map((rest) => {
              const RestIcon = rest.icon;
              return (
                <div key={rest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-[var(--color-gold)]">{rest.rank}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {rest.cuisine}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {rest.priceRange}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {rest.city}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {rest.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {rest.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Dining Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Essential Dining Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for navigating Morocco restaurant scene like a seasoned visitor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {diningTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
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
            Continue Your Culinary Journey
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
            Ready to Eat Your Way Through Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From rooftop tagines in Marrakech and cliff-edge seafood in Casablanca to medina gardens
            in Fes and jazz suppers in Tangier, Morocco dining scene is one of the richest in the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Morocco Food Guide
            </Link>
            <Link
              href="/morocco-best-cafes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Coffee className="w-5 h-5" />
              Best Cafes
            </Link>
            <Link
              href="/morocco-budget-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Lightbulb className="w-5 h-5" />
              Budget Travel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
