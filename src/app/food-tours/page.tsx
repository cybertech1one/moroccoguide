import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Utensils, Star, Clock, DollarSign, Users, ChefHat, Coffee, ChevronRight, Info, Heart, Camera, Compass, ShoppingBag, Flame } from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* =================================================================
   SEO METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Best Morocco Food Tours 2025 | Marrakech, Fes, Casablanca & More',
  description:
    'The ultimate guide to food tours in Morocco. Guided tastings in Marrakech, Fes, Casablanca, Essaouira & Chefchaouen. Real operator names, prices in MAD, self-guided routes, cooking classes, spice guide, and dietary tips.',
  keywords: [
    'morocco food tour',
    'marrakech food tour',
    'fes food tour',
    'casablanca food tour',
    'essaouira food tour',
    'chefchaouen food tour',
    'morocco street food tour',
    'jemaa el fnaa food tour',
    'morocco cooking class',
    'morocco spice guide',
    'morocco culinary experience',
    'morocco food walk',
    'medina food tour',
    'morocco food tasting',
    'morocco vegetarian food',
    'morocco halal food',
    'morocco food guide',
    'moroccan cuisine tour',
    'tagine tasting morocco',
    'pastilla tasting fes',
  ],
  openGraph: {
    title: 'Best Morocco Food Tours | Marrakech, Fes, Casablanca & More',
    description:
      'Comprehensive guide to food tours across Morocco. Guided tastings, self-guided routes, cooking classes, spice buying guide, and dietary tips with real prices in MAD.',
    url: 'https://citytoursmorocco.com/food-tours',
    images: [
      {
        url: '/images/hero-food-tour.webp',
        width: 1200,
        height: 630,
        alt: 'Guided food tour through a Moroccan medina souk with spices and tagines - citytoursmorocco.com',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/food-tours' },
};

/* =================================================================
   JSON-LD STRUCTURED DATA (FAQ)
   ================================================================= */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a food tour in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Food tours in Morocco range from 150 MAD for a self-guided walk with street food tastings to 1,200 MAD for a premium private guided tour with multiple courses. The average guided group food tour costs from 300 MAD per person including tastings. Cooking class combos that include a market tour typically cost from 500 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best city in Morocco for a food tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech and Fes are the top two cities for food tours. Marrakech offers the most variety with the famous Jemaa el-Fnaa night food stalls, medina tasting trails, and numerous cooking class combos. Fes is considered the gastronomic capital with the oldest food stalls in the medina and refined Fassi palace cuisine. Essaouira is best for seafood tours and Casablanca for modern Moroccan dining.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is food safe on a Morocco food tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, food tours in Morocco are generally safe, especially with a reputable guide who knows which stalls maintain high hygiene standards. Look for stalls with high turnover (food is fresh), visible cooking (you can see it prepared), and local crowds (Moroccans know where the good, safe food is). Avoid pre-cut fruit and always drink bottled water. Most guided tours only visit trusted vendors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can vegetarians enjoy a food tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Moroccan cuisine offers extensive vegetarian options including zaalouk (eggplant dip), bessara (fava bean soup), vegetable tagines, msemen flatbread, harira soup (can be made without meat), Moroccan salads, fresh juices, and pastries. Most food tour operators offer vegetarian-specific routes. Veganism is harder but possible with advance notice.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear on a food tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear comfortable walking shoes with good grip (medina streets can be uneven and slippery), loose-fitting modest clothing that covers shoulders and knees, and bring a light scarf. Avoid open-toed sandals in busy souks. Bring a small bag for purchases but leave valuables at your hotel. Dress in layers as medina alleys can be cool even on warm days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a food tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book food tours through established platforms like GetYourGuide, Viator, or Airbnb Experiences, or directly with local operators like Marrakech Food Tours, Fes Cooking & Food Tours, and Plan-it Fez. Booking 2-3 days in advance is recommended during peak season (March-May, September-November). Many tours can be booked same-day during off-peak periods.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time of day is best for a food tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evening food tours (starting around 6-7 PM) are best in Marrakech for the Jemaa el-Fnaa experience. Morning tours (9-10 AM) are ideal in Fes and Essaouira when markets are freshest. Lunchtime tours work well in Casablanca for the Central Market area. Avoid midday tours in summer when temperatures peak and some stalls close.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a typical food tour last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most guided food tours last 3-4 hours and include 8-12 tastings. Half-day tours combining a cooking class and market tour run 4-5 hours. A full culinary immersion day with market tour, cooking class, and evening food walk can last 7-8 hours. Self-guided food walks typically take 2-3 hours depending on how many stops you make.',
      },
    },
  ],
};

/* =================================================================
   MARRAKECH FOOD TOURS DATA
   ================================================================= */

const marrakechTours = [
  {
    name: 'Jemaa el-Fnaa Evening Food Walk',
    duration: '3-4 hours',
    price: 'from 350 MAD',
    groupSize: '2-12',
    rating: 5,
    bestTime: 'Start at 6:30 PM (sunset)',
    description:
      'The quintessential Moroccan food tour experience. As the sun sets, the famous square transforms into the world\'s largest open-air restaurant with over 100 food stalls. A knowledgeable guide navigates you through the organized chaos, stopping at the best stalls for harira soup, grilled lamb chops, snail broth (babouche), fresh-squeezed orange juice, sheep head (for the adventurous), and sweet chebakia pastries. The atmosphere is electric with musicians, storytellers, and the smoke from dozens of grills.',
    highlights: [
      'Snail broth (babouche) from stall 14 -- a Marrakech institution since the 1970s',
      'Lamb mechoui pulled from the communal clay oven, served with cumin salt',
      'Fresh-squeezed orange juice at 4 MAD per glass from the famous juice row',
      'Grilled kefta (spiced minced meat) with fresh bread and harissa',
      'Sheep head (tete de mouton) -- adventurous tasters only',
      'Chebakia and sellou pastries from stall vendors circulating the square',
      'Moroccan donuts (sfenj) dipped in sugar, best eaten hot and fresh',
      'Harira soup served in small bowls with dates -- the traditional Ramadan starter',
    ],
  },
  {
    name: 'Medina Tasting Trail',
    duration: '3 hours',
    price: 'from 300 MAD',
    groupSize: '2-8',
    rating: 5,
    bestTime: 'Morning, 9:30 AM - 12:30 PM',
    description:
      'A daytime walking tour through the winding alleys of the Marrakech medina, stopping at hidden food gems that most tourists walk right past. This tour goes beyond the main square into the residential neighborhoods where Marrakchis actually eat. You visit a traditional bakery (ferran) where locals bring their bread to bake in the communal wood-fired oven, a neighborhood msemen stall where women hand-fold the layered flatbreads on a griddle, a tiny hole-in-the-wall serving the city\'s best tangia (the bachelor\'s tagine), and a hidden rooftop cafe with medina views.',
    highlights: [
      'Communal bakery (ferran) visit -- watch bread go in and come out of the wood oven',
      'Hand-folded msemen and meloui flatbreads from a street-side griddle stall',
      'Tangia -- the slow-cooked Marrakech specialty made in an urn-shaped clay pot',
      'Olive tasting at a medina olive merchant with 20+ varieties',
      'Freshly baked khobz (round bread) with amlou (argan oil, almond, and honey dip)',
      'Spice souk walkthrough with guided explanations of every spice',
      'Hidden rooftop cafe stop for mint tea overlooking the medina rooftops',
      'Seasonal fruit tasting from a local market stall',
    ],
  },
  {
    name: 'Cooking Class + Market Tour Combo',
    duration: '4-5 hours',
    price: 'from 500 MAD',
    groupSize: '2-10',
    rating: 5,
    bestTime: 'Morning, 9:00 AM start',
    description:
      'The most immersive food experience in Marrakech combines a guided souk shopping trip with a hands-on cooking class. You start at the Bab Doukkala or Mellah spice souk, shopping for ingredients with a local chef. Then you head to a traditional riad kitchen where you prepare a three-course Moroccan meal: salads, a tagine, and Moroccan pastries or mint tea. You sit down to eat everything you cooked in a beautiful courtyard setting. This is the best value food experience in Marrakech.',
    highlights: [
      'Guided market tour through the spice souk buying fresh ingredients',
      'Learn to prepare Moroccan salads: zaalouk, taktouka, and carrot-cumin',
      'Cook a chicken tagine with preserved lemons and olives from scratch',
      'Hand-roll couscous using the traditional three-steam technique',
      'Make msemen flatbread on a traditional griddle',
      'Prepare mint tea with the proper pouring ceremony',
      'Take home a printed recipe booklet and your own spice blend',
      'Enjoy your creations in a riad courtyard with fellow food lovers',
    ],
  },
];

/* =================================================================
   FES FOOD TOURS DATA
   ================================================================= */

const fesTours = [
  {
    name: 'Fes Medina Food Walk',
    duration: '3-4 hours',
    price: 'from 350 MAD',
    groupSize: '2-8',
    rating: 5,
    bestTime: 'Morning, 10:00 AM',
    description:
      'Navigate the labyrinthine streets of the Fes el-Bali medina -- the world\'s largest car-free urban area -- stopping at food stalls that have operated in the same location for centuries. Fes is Morocco\'s gastronomic capital, and this tour reveals why. The medina contains food vendors whose families have been selling the same specialties for five or six generations. You taste Fassi-style harira (thicker and more complex than the Marrakech version), aged smen (fermented butter used in couscous), fresh-baked bread from a 400-year-old communal oven, and the renowned Fes pastries.',
    highlights: [
      'Harira soup from a vendor whose family has served it since the 1800s',
      'Fresh bread from a communal oven (ferran) that has been firing for over 400 years',
      'Aged smen (fermented butter) tasting -- a Fassi delicacy aged up to 7 years',
      'Khlii (preserved dried meat) preparation demonstration',
      'Rfissa -- the celebratory Fassi dish of shredded msemen with lentil sauce and chicken',
      'Nougat and dried fruit from the Souk el-Attarine (spice and perfume souk)',
      'Fresh-pressed olive oil tasting from Meknes-region olives',
      'Traditional Fassi pastry shop visit for kaab el ghazal (gazelle horns)',
    ],
  },
  {
    name: 'Pastilla Tasting Experience',
    duration: '2-3 hours',
    price: 'from 250 MAD',
    groupSize: '2-6',
    rating: 5,
    bestTime: 'Afternoon, 2:00 PM',
    description:
      'A focused tour dedicated to Morocco\'s most iconic and complex dish: pastilla (b\'stilla). This sweet-and-savory masterpiece originated in Fes, and nowhere else in Morocco will you find it prepared with such refinement. The tour visits three different pastilla makers in the medina, each specializing in a different variety. You taste the traditional pigeon pastilla with almonds and cinnamon sugar, the seafood pastilla with shrimp and vermicelli, and a modern milk pastilla (pastilla au lait) dessert version. A warqa pastry-making demonstration shows the extraordinary skill of stretching dough paper-thin on an inverted hot pan.',
    highlights: [
      'Traditional pigeon pastilla -- the original Fassi palace recipe',
      'Seafood pastilla with shrimp, vermicelli, and Chinese noodles',
      'Dessert milk pastilla (pastilla au lait) with custard and almond cream',
      'Warqa pastry-making demonstration by a master craftsman',
      'History of pastilla from Andalusian origins to modern Fassi refinement',
      'Side tastings of Fassi salads and fresh juices',
    ],
  },
  {
    name: 'Jewish Quarter Food Heritage',
    duration: '2.5 hours',
    price: 'from 300 MAD',
    groupSize: '2-8',
    rating: 4,
    bestTime: 'Morning, 10:00 AM',
    description:
      'Explore the culinary legacy of the Mellah, the historic Jewish quarter of Fes. For centuries, Jewish and Muslim communities in Fes shared recipes, ingredients, and cooking techniques, creating a unique culinary cross-pollination. This tour visits the former Mellah market, explains the kosher influences on Fassi cooking, and tastes dishes that bridge both traditions. You try dafina (the Moroccan-Jewish Sabbath stew, cousin of Moroccan tangia), mahia-influenced preserves, and the sweet-savory flavor combinations that Jewish Fassi cooks perfected.',
    highlights: [
      'Mellah market walkthrough with historical context from a local guide',
      'Dafina tasting -- the Moroccan-Jewish Sabbath slow-cooked stew',
      'Sweet-and-savory pastry traditions shared between Jewish and Muslim cooks',
      'Preserved fruit and confiture traditions from the Mellah',
      'Visit to a traditional spice shop in the former Jewish quarter',
      'Cultural discussion of how food bridges communities in Fes',
    ],
  },
];

/* =================================================================
   CASABLANCA FOOD TOURS DATA
   ================================================================= */

const casablancaTours = [
  {
    name: 'Central Market (Marche Central) Food Tour',
    duration: '2.5-3 hours',
    price: 'from 300 MAD',
    groupSize: '2-10',
    rating: 4,
    bestTime: 'Morning, 9:00 AM - 12:00 PM',
    description:
      'Casablanca\'s iconic Central Market is the beating heart of the city\'s food scene. This Art Deco-era market hall, built during the French Protectorate period, houses dozens of stalls selling the freshest seafood, meats, spices, and produce in the city. The tour includes tastings of raw oysters shucked to order, freshly grilled sardines, spiced olives, seasonal fruits, and a sit-down lunch at one of the market\'s seafood restaurants where you choose your fish and have it prepared on the spot. The guide provides historical context about French colonial influence on Casablanca cuisine.',
    highlights: [
      'Fresh oysters shucked and served with lemon at the market counter',
      'Grilled sardines -- Casablanca\'s signature street food, seasoned with chermoula',
      'Spiced olive tasting with regional varieties from across Morocco',
      'Choose-your-own-fish lunch at a market seafood restaurant',
      'French-influenced patisserie stop for millefeuille and pain au chocolat',
      'Fresh juice bar with seasonal fruit combinations',
      'History of the Art Deco market building and French culinary influence',
    ],
  },
  {
    name: 'Casablanca Street Food by Night',
    duration: '3 hours',
    price: 'from 250 MAD',
    groupSize: '2-12',
    rating: 4,
    bestTime: 'Evening, 7:00 PM start',
    description:
      'After dark, Casablanca\'s street food scene comes alive in neighborhoods like Habous, Derb Sultan, and along Boulevard Mohammed V. This evening tour visits the local haunts that Casablancais (residents of Casablanca) frequent for late-night eating. You try bocadillos (the Moroccan sandwich, a legacy of Spanish influence), grilled meats from smoky street-side stalls, fresh seafood from mobile carts, and the famous Casa panini -- a pressed sandwich loaded with kefta, eggs, cheese, and harissa that is unique to this city.',
    highlights: [
      'Casa panini -- the iconic Casablanca street sandwich with kefta and egg',
      'Bocadillo -- the Moroccan-Spanish sandwich from the Habous quarter',
      'Late-night harira soup from a legendary Derb Sultan stall',
      'Grilled liver and heart skewers (boulfaf) from a charcoal grill vendor',
      'Sfenj (Moroccan donuts) from a late-night frying stall',
      'Avocado and almond milkshake from a juice vendor',
      'Walkthrough of the Habous quarter (New Medina) with Art Deco architecture',
    ],
  },
];

/* =================================================================
   ESSAOUIRA FOOD TOURS DATA
   ================================================================= */

const essaouiraTours = [
  {
    name: 'Fish Market to Table Experience',
    duration: '3-4 hours',
    price: 'from 350 MAD',
    groupSize: '2-8',
    rating: 5,
    bestTime: 'Morning, 9:00 AM (when boats return)',
    description:
      'Essaouira is Morocco\'s premier seafood destination, and this tour takes you from the fishing port to the plate. The morning starts at the Port de Peche, watching fishing boats unload their catch and the lively auction where restaurants and vendors bid on the freshest fish. Your guide helps you select your own fish and seafood, then you walk through the medina to the famous outdoor grills near the port where your selection is charcoal-grilled with chermoula marinade. The experience includes a visit to a traditional sardine-canning workshop and a coastal argan cooperative.',
    highlights: [
      'Fishing port visit to watch the morning catch and auction',
      'Select your own fish: sea bream, sole, shrimp, calamari, lobster',
      'Charcoal grill lunch at the famous port-side outdoor restaurants',
      'Chermoula marinade preparation demonstration',
      'Sardine-canning workshop visit in the old medina',
      'Fresh sea urchin tasting (seasonal, October through March)',
      'Walking tour of the medina fish market with vendor introductions',
      'Coastal views and fresh Atlantic air throughout the tour',
    ],
  },
  {
    name: 'Argan Oil Tasting Tour',
    duration: '2-3 hours',
    price: 'from 200 MAD',
    groupSize: '2-10',
    rating: 4,
    bestTime: 'Afternoon, 2:00 PM',
    description:
      'Argan oil is liquid gold and Essaouira is at the heart of argan country. This specialized tour visits a women\'s argan cooperative on the outskirts of the city where you see the entire production process: cracking the incredibly hard argan nuts, grinding the kernels, and pressing the oil. You taste the difference between culinary argan oil (roasted, nutty, deep amber) and cosmetic argan oil (raw, lighter), and learn to identify quality and fair prices. The tour includes an amlou tasting -- the irresistible Moroccan spread of argan oil, almonds, and honey.',
    highlights: [
      'Visit a women\'s argan cooperative and meet the producers',
      'Watch the traditional argan oil extraction process by hand',
      'Taste culinary vs. cosmetic argan oil and learn the differences',
      'Amlou tasting -- argan oil blended with roasted almonds and honey',
      'Learn fair prices to avoid tourist markup (culinary oil: from 250 MAD per liter)',
      'Support a social enterprise that empowers rural Amazigh women',
    ],
  },
];

/* =================================================================
   CHEFCHAOUEN FOOD EXPERIENCES DATA
   ================================================================= */

const chefchaouenExperiences = [
  {
    name: 'Blue City Food Walk',
    duration: '2.5 hours',
    price: 'from 200 MAD',
    groupSize: '2-8',
    rating: 4,
    bestTime: 'Morning, 10:00 AM',
    description:
      'Chefchaouen\'s food scene is distinct from the rest of Morocco, influenced by the Rif mountains and the town\'s Andalusian heritage. This walking tour through the blue-washed medina visits a bessara (fava bean soup) stall where the thick, olive oil-drizzled soup is a morning staple, a local bakery producing traditional Riffian bread, a goat cheese (jben) vendor selling fresh cheese made that morning in the mountains, and a honey merchant with wild thyme and lavender varieties from Rif beekeepers.',
    highlights: [
      'Bessara (fava bean soup) with cumin and olive oil -- the Chefchaouen breakfast',
      'Fresh jben (goat cheese) from Rif mountain herders',
      'Wild honey tasting: thyme, lavender, and wildflower varieties',
      'Traditional Riffian bread from a neighborhood bakery',
      'Ras el hanout variation unique to the Rif region',
      'Fresh mountain herb tea on a blue-walled rooftop terrace',
    ],
  },
  {
    name: 'Rif Mountain Cooking Experience',
    duration: '3-4 hours',
    price: 'from 350 MAD',
    groupSize: '2-6',
    rating: 4,
    bestTime: 'Morning, 9:30 AM',
    description:
      'Cook traditional Riffian mountain dishes in a family home in the Chefchaouen medina. Riffian cuisine uses wild herbs, fresh goat cheese, mountain honey, and hearty grains that reflect the rugged landscape. You prepare a full Riffian meal: bessara soup, a regional tagine with wild herbs and preserved meat, handmade bread baked in a clay oven, and mint tea with fresh mountain herbs. The family shares stories of Rif mountain life and Chefchaouen food traditions.',
    highlights: [
      'Cook in a traditional Riffian family home in the blue medina',
      'Prepare bessara from dried fava beans with the traditional method',
      'Regional tagine with mountain herbs and fresh jben cheese',
      'Handmade bread baked in a home clay oven',
      'Learn about Riffian food culture and mountain foraging traditions',
      'Take home recipes adapted for home kitchens',
    ],
  },
];

/* =================================================================
   FOOD TOUR OPERATORS DATA
   ================================================================= */

const tourOperators = [
  {
    name: 'Marrakech Food Tours',
    city: 'Marrakech',
    priceRange: 'from 350 MAD',
    website: 'marrakechfoodtours.com',
    tours: ['Evening Jemaa el-Fnaa walk', 'Morning medina trail', 'Cooking + market combo'],
    rating: 5,
    languages: 'English, French, Spanish',
    description: 'The most established food tour operator in Marrakech, run by a Moroccan-British team. All guides are certified, local, and deeply knowledgeable about Marrakchi cuisine. Groups are small (maximum 12) and tastings are generous.',
  },
  {
    name: 'Fes Cooking & Food Tours',
    city: 'Fes',
    priceRange: 'from 300 MAD',
    website: 'fescooking.com',
    tours: ['Fes Medina food walk', 'Pastilla experience', 'Jewish Quarter heritage tour'],
    rating: 5,
    languages: 'English, French, Arabic',
    description: 'Specialized in Fassi gastronomy with guides who have grown up in the medina. The pastilla tasting experience and Jewish Quarter food heritage tour are unique offerings not found with other operators.',
  },
  {
    name: 'Plan-it Fez',
    city: 'Fes',
    priceRange: 'from 400 MAD',
    website: 'plan-it-fez.com',
    tours: ['Fes street food walk', 'Market & cooking class', 'Full-day Fassi immersion'],
    rating: 5,
    languages: 'English, French',
    description: 'Run by Gail Leonard, an American food writer who has lived in Fes for over a decade. Her deep knowledge of Fassi cuisine and personal relationships with medina vendors create an unusually intimate experience.',
  },
  {
    name: 'Casablanca Food Tours',
    city: 'Casablanca',
    priceRange: 'from 250 MAD',
    website: 'casablancafoodtours.com',
    tours: ['Central Market morning tour', 'Street food by night', 'Habous quarter walk'],
    rating: 4,
    languages: 'English, French, Arabic',
    description: 'The premier food tour company in Casablanca, focusing on the city\'s unique blend of Moroccan, French, and Spanish culinary influences. Evening street food tours are their standout offering.',
  },
  {
    name: 'Essaouira Food & Culture',
    city: 'Essaouira',
    priceRange: 'from 200 MAD',
    website: 'essaouirafood.com',
    tours: ['Fish market to table', 'Argan oil tasting', 'Medina food walk'],
    rating: 5,
    languages: 'English, French',
    description: 'Coastal cuisine specialists who take advantage of Essaouira\'s incredible seafood and proximity to argan country. The fish market to table experience is one of the best food tours in all of Morocco.',
  },
  {
    name: 'Morocco Food Guide',
    city: 'Multiple cities',
    priceRange: 'from 400 MAD',
    website: 'moroccofoodguide.com',
    tours: ['Multi-city food odyssey', 'Custom food itineraries', 'Private chef experiences'],
    rating: 5,
    languages: 'English, French, Spanish, German',
    description: 'A nationwide operation offering food tours in Marrakech, Fes, Casablanca, Essaouira, Meknes, and Tangier. Their multi-city food odyssey packages are ideal for travelers spending 7-14 days in Morocco.',
  },
];

/* =================================================================
   SELF-GUIDED FOOD WALKING ROUTES DATA
   ================================================================= */

const selfGuidedRoutes = [
  {
    city: 'Marrakech',
    routeName: 'Jemaa el-Fnaa to Mellah Spice Loop',
    duration: '2-3 hours',
    distance: '2.5 km',
    budget: 'from 100 MAD for all tastings',
    stops: [
      { name: 'Orange juice row on Jemaa el-Fnaa', item: 'Fresh-squeezed orange juice (4 MAD)', note: 'Look for stalls squeezing to order, not pre-made' },
      { name: 'Stall 14 for snail broth (babouche)', item: 'Small bowl of snail soup (from 5 MAD)', note: 'The stall with the longest local queue' },
      { name: 'Grilled meat row (south side of square)', item: 'Mixed grill plate with bread (from 30 MAD)', note: 'Insist on a freshly grilled plate, not reheated' },
      { name: 'Rue Riad Zitoun el-Kedim heading south', item: 'Msemen from a street-side griddle stall (from 3 MAD)', note: 'Best eaten hot off the griddle with honey or cheese' },
      { name: 'Mellah Spice Souk (Place des Ferblantiers area)', item: 'Spice browsing and tasting', note: 'Compare prices at 3 stalls before buying' },
      { name: 'Bahia Palace area olive vendors', item: 'Mixed olives (from 10 MAD per portion)', note: 'Ask to taste before buying -- vendors expect it' },
      { name: 'Bab Mellah area bakeries', item: 'Chebakia pastry and almond briouats (from 5 MAD)', note: 'The neighborhood bakeries are cheaper than the souk' },
    ],
  },
  {
    city: 'Fes',
    routeName: 'Talaa Kbira Descent -- The Great Foodway',
    duration: '2-3 hours',
    distance: '2 km (all downhill)',
    budget: 'from 80 MAD for all tastings',
    stops: [
      { name: 'Bab Bou Jeloud (Blue Gate) entrance', item: 'Sfenj (donuts) from the stall on the right (from 2 MAD each)', note: 'Buy them hot from the oil -- best at 8-9 AM' },
      { name: 'First section of Talaa Kbira', item: 'Fresh nougat and dried fruit (from 10 MAD)', note: 'The nougat sellers are right after the Blue Gate' },
      { name: 'Neighborhood ferran (communal oven)', item: 'Watch bread going in and out of the wood oven (free)', note: 'A fascinating cultural experience -- tip the baker 5 MAD' },
      { name: 'Souk el-Attarine (spice and perfume souk)', item: 'Ras el hanout and saffron tasting (free with purchase)', note: 'Buy saffron here: from 15 MAD per gram for genuine threads' },
      { name: 'Pastilla shop near Medersa Bou Inania', item: 'Individual pastilla (from 15 MAD)', note: 'Ask for a pigeon pastilla if available -- the original variety' },
      { name: 'Olive merchants on lower Talaa Kbira', item: 'Olive tasting and purchase (from 10 MAD per portion)', note: 'Fes olives are different from Marrakech -- try the green cracked variety' },
      { name: 'Bottom of Talaa Kbira near Kairaouine Mosque', item: 'Harira soup (from 5 MAD) and fresh bread', note: 'The stalls here serve the medina workers -- authentic and cheap' },
    ],
  },
  {
    city: 'Essaouira',
    routeName: 'Port to Medina Seafood Trail',
    duration: '1.5-2 hours',
    distance: '1.5 km',
    budget: 'from 80 MAD for all tastings',
    stops: [
      { name: 'Port de Peche (fishing port) entrance', item: 'Watch the morning fish auction (free)', note: 'Best at 7-9 AM when boats return with the catch' },
      { name: 'Outdoor grill restaurants by the port', item: 'Grilled fish or mixed seafood platter (from 60 MAD)', note: 'Negotiate the price before sitting down -- ask for the day\'s catch' },
      { name: 'Medina entrance near Porte de la Marine', item: 'Sardine sandwich from a street vendor (from 10 MAD)', note: 'Essaouira\'s signature cheap eat -- fresh sardines in bread' },
      { name: 'Rue de la Skala food stalls', item: 'Moroccan salads and bread (from 15 MAD)', note: 'Small hole-in-the-wall stalls serving locals' },
      { name: 'Place Moulay Hassan juice vendors', item: 'Fresh juices and smoothies (from 10 MAD)', note: 'Try the avocado-almond milkshake -- an Essaouira specialty' },
      { name: 'Argan oil shop on Rue de la Skala', item: 'Amlou tasting and argan oil (free tasting, oil from 250 MAD/liter)', note: 'Taste the culinary oil on bread -- the flavor is unmistakable' },
    ],
  },
];

/* =================================================================
   COOKING CLASSES TOP 10 DATA
   ================================================================= */

const topCookingClasses = [
  { rank: 1, name: 'La Maison Arabe', city: 'Marrakech', price: 'from 700 MAD', specialty: 'Classic Moroccan three-course meal with market tour', bestFor: 'Luxury, iconic setting' },
  { rank: 2, name: 'Souk Cuisine', city: 'Marrakech', price: 'from 500 MAD', specialty: 'Intimate riad kitchen with food history focus', bestFor: 'Food enthusiasts, solo travelers' },
  { rank: 3, name: 'Amal Center', city: 'Marrakech', price: 'from 300 MAD', specialty: 'Non-profit training center with home-cooking focus', bestFor: 'Budget, social impact' },
  { rank: 4, name: 'Cafe Clock', city: 'Fes', price: 'from 400 MAD', specialty: 'Fassi palace cuisine in the heart of the medina', bestFor: 'Cultural depth, medina setting' },
  { rank: 5, name: 'Palais Amani', city: 'Fes', price: 'from 800 MAD', specialty: 'Garden-to-table with rooftop herb garden', bestFor: 'Luxury, serious cooks' },
  { rank: 6, name: 'Dar Namir', city: 'Marrakech', price: 'from 500 MAD', specialty: 'Deep-dive into a single dish', bestFor: 'Perfectionists, couples' },
  { rank: 7, name: "L'Atelier de Madada", city: 'Essaouira', price: 'from 600 MAD', specialty: 'Seafood cooking starting at the fishing port', bestFor: 'Seafood lovers, port experience' },
  { rank: 8, name: 'Khmissa Cooking', city: 'Essaouira', price: 'from 400 MAD', specialty: 'Family home cooking with mother-daughter team', bestFor: 'Authentic family experience' },
  { rank: 9, name: 'Ruined Garden', city: 'Fes', price: 'from 500 MAD', specialty: 'Atmospheric ruined riad with researched Fassi recipes', bestFor: 'Atmosphere, foodies' },
  { rank: 10, name: 'Lina Ryad & Spa', city: 'Chefchaouen', price: 'from 350 MAD', specialty: 'Riffian mountain cuisine with rooftop views', bestFor: 'Off-beat, mountain food' },
];

/* =================================================================
   SPICE GUIDE DATA
   ================================================================= */

const spiceGuide = [
  { name: 'Ras el Hanout', fairPrice: 'from 80 MAD per 100g', description: 'The iconic Moroccan spice blend meaning "head of the shop" -- each merchant\'s signature mix of 12-30 spices. Quality varies enormously. A good blend should be fragrant, complex, and never dusty or stale. Ask to smell before buying.', tip: 'Buy from a spice merchant, not a tourist souk stall. The tourist price can be 3x the local price.' },
  { name: 'Saffron', fairPrice: 'from 15 MAD per gram', description: 'Moroccan saffron is grown in the Taliouine region of the Anti-Atlas. Genuine saffron threads are deep red, slightly moist, and intensely fragrant. Imitation saffron (dyed safflower or corn silk) is common in tourist souks.', tip: 'Test by dropping a thread in warm water: real saffron releases color slowly and stays red. Fake saffron turns the water yellow immediately and the threads lose color.' },
  { name: 'Cumin (Kamoun)', fairPrice: 'from 20 MAD per 100g', description: 'Used in nearly every Moroccan savory dish. Moroccan cumin is slightly different from the Indian variety -- earthier and less sharp. Essential for tagines, harira, and as a table condiment alongside salt.', tip: 'Buy whole seeds and grind at home for the best flavor. Pre-ground cumin loses its aroma within weeks.' },
  { name: 'Turmeric (Kharkoum)', fairPrice: 'from 15 MAD per 100g', description: 'The golden spice used for color and a mild earthy flavor. Moroccan turmeric is used more subtly than in Indian cooking -- as a background note rather than a dominant flavor.', tip: 'Fresh turmeric root is available in some markets and is far more flavorful than dried. It stains everything yellow, so handle with care.' },
  { name: 'Cinnamon (Karfa)', fairPrice: 'from 30 MAD per 100g (sticks)', description: 'Used in both savory and sweet dishes, Moroccan cooking uses true Ceylon cinnamon (lighter, more delicate) rather than the stronger cassia variety common in the United States. Essential for pastilla and many tagines.', tip: 'Buy cinnamon sticks rather than ground. They last longer and you can grind as needed. Sticks should be thin-barked and fragrant.' },
  { name: 'Paprika (Felfla Hamra)', fairPrice: 'from 15 MAD per 100g', description: 'Moroccan paprika ranges from sweet to mildly hot. It provides the red color base for many tagines and sauces. Often combined with cumin and turmeric for the foundational Moroccan spice trio.', tip: 'The smoked variety (similar to Spanish pimenton) is less common in Morocco but increasingly available. The standard sweet paprika is what most recipes call for.' },
  { name: 'Ginger (Skinjbir)', fairPrice: 'from 20 MAD per 100g', description: 'Dried ground ginger is a cornerstone of Moroccan cuisine, used in tagines, couscous, pastilla, and pastries. It adds warmth without the sharpness of fresh ginger. Moroccan cooking uses dried ginger far more than fresh.', tip: 'Quality dried ginger should be light tan and intensely fragrant. Dark or clumpy ginger is old and has lost its potency.' },
  { name: 'Preserved Lemons (Hamd Marakad)', fairPrice: 'from 5 MAD each', description: 'Not a spice but an essential Moroccan ingredient. Whole lemons preserved in salt and their own juice for 30 days. The rind becomes soft, silky, and incredibly flavorful. Indispensable in chicken tagine with olives.', tip: 'The best preserved lemons are at least one month old. You use only the rind, not the flesh. One lemon goes a long way.' },
];

/* =================================================================
   DIETARY NEEDS DATA
   ================================================================= */

const dietaryInfo = [
  {
    type: 'Vegetarian',
    icon: Heart,
    ease: 'Easy',
    description: 'Morocco offers extensive vegetarian options. Moroccan salads (zaalouk, taktouka, carrot-cumin), vegetable tagines, couscous with seven vegetables, bessara (fava bean soup), lentil soup, harira (can be meatless), msemen flatbreads, and an incredible array of fresh fruits, nuts, and pastries are all vegetarian-friendly.',
    tips: [
      'Request a vegetable tagine -- most restaurants prepare them on request',
      'Moroccan salads served at the start of every meal are almost always vegetarian',
      'Bessara soup (fava beans) is a filling, protein-rich vegetarian staple',
      'Bread with amlou (argan oil, almond, honey spread) is a satisfying vegetarian snack',
      'Couscous with seven vegetables is the traditional Friday dish and always vegetarian',
      'Tell your food tour guide in advance and they will plan a vegetarian route',
    ],
  },
  {
    type: 'Vegan',
    icon: Compass,
    ease: 'Moderate',
    description: 'Veganism is not a traditional concept in Morocco, but many Moroccan dishes are naturally vegan. The challenge is dairy (butter is used in couscous, and honey appears in desserts). With advance notice, food tour operators and cooking classes can accommodate vegan diets.',
    tips: [
      'Vegetable tagines cooked with olive oil instead of butter are common',
      'Zaalouk, taktouka, and most cooked salads are naturally vegan',
      'Bessara soup is vegan (fava beans, olive oil, cumin, garlic)',
      'Fresh fruit, nuts, and dates are abundant and always vegan',
      'Say "bla hlib, bla zebda, bla asel" (no milk, no butter, no honey)',
      'Moroccan bread (khobz) is typically vegan -- made from flour, water, salt, yeast',
    ],
  },
  {
    type: 'Halal',
    icon: Star,
    ease: 'Not an issue',
    description: 'Morocco is a Muslim-majority country and virtually all food is halal by default. All meat is slaughtered according to Islamic law, alcohol is not used in cooking (though it is available in licensed restaurants and hotels), and pork is not served anywhere except in a handful of international hotel restaurants. Halal-conscious travelers will have zero issues in Morocco.',
    tips: [
      'All meat in Morocco is halal -- there is no need to ask or verify',
      'Alcohol is available in licensed restaurants and hotels but never in food preparation',
      'Pork is essentially nonexistent in Moroccan cuisine',
      'During Ramadan, eating in public during daylight is considered disrespectful',
      'Food tours during Ramadan shift to evening hours after iftar (breaking of fast)',
      'Street food is always halal without exception',
    ],
  },
  {
    type: 'Gluten-Free',
    icon: Info,
    ease: 'Challenging',
    description: 'This is the hardest dietary restriction in Morocco. Bread is the foundation of every Moroccan meal, couscous is semolina, pastilla uses wheat pastry, and many dishes use bread as a thickener. However, tagines without bread, grilled meats, salads, fruits, and nuts are naturally gluten-free.',
    tips: [
      'Tagines are naturally gluten-free (meat, vegetables, spices cooked in a clay pot)',
      'Grilled meats (mechoui, brochettes) are usually gluten-free',
      'Moroccan salads are gluten-free -- just skip the bread accompaniment',
      'Rice is available as a substitute for couscous at many restaurants',
      'Harira soup contains flour as a thickener -- avoid it',
      'Carry a translated card in Arabic and French explaining your allergy',
    ],
  },
];

/* =================================================================
   ETIQUETTE DATA
   ================================================================= */

const etiquetteTips = [
  { title: 'Eat with your right hand', description: 'In Moroccan culture, the left hand is considered unclean. When eating from shared dishes, always use your right hand. Utensils are provided in restaurants, but traditional eating with bread uses the right hand to scoop food.' },
  { title: 'Accept hospitality graciously', description: 'If a stall vendor offers you a taste, accept it with a smile and a thank you (shukran). Refusing food is considered impolite in Moroccan culture. You are not obligated to buy after tasting, but it is a gesture of goodwill.' },
  { title: 'Pace yourself on food tours', description: 'A typical food tour includes 8-12 tastings over 3-4 hours. Take small portions at each stop, especially at the beginning. The portions increase as the tour progresses, and you do not want to be full by stop number four.' },
  { title: 'Tipping on food tours', description: 'Tip your food tour guide from 50 MAD at the end of the tour. For cooking classes, from 50 MAD per person is appropriate. At individual food stalls, tipping is not expected but rounding up is appreciated. A 10 MAD tip at a bakery or ferran is generous.' },
  { title: 'Photography etiquette', description: 'Ask before photographing people, especially women and children. Photographing food is always welcome and vendors are usually proud to have their dishes photographed. Some stall owners may expect a small tip (from 5 MAD) for posing.' },
  { title: 'Dress modestly', description: 'Cover shoulders and knees, especially in the medina and near religious sites. Comfortable closed-toe shoes with good grip are essential for slippery medina streets. Bring a light scarf for entering areas near mosques.' },
  { title: 'Bargaining at food stalls', description: 'Prices at food stalls are generally fixed and low. Do not try to haggle over a 5 MAD bowl of soup. Bargaining is appropriate at spice shops and for larger purchases of dried goods, nuts, and argan oil.' },
  { title: 'Water and ice safety', description: 'Drink bottled water (Sidi Ali and Ain Saiss are the main Moroccan brands). Ice in restaurants is generally safe (made from purified water), but avoid ice from street vendors. Freshly squeezed juices are safe when squeezed in front of you.' },
];

/* =================================================================
   COMPONENT
   ================================================================= */

export default function FoodToursPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─────────────────────────────────────────────────────────
          SECTION 1 : HERO WITH BREADCRUMB
          ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img
          src="/images/hero-food-tour.webp"
          alt="Guided food tour through a bustling Moroccan medina souk with colorful spices and tagine pots - citytoursmorocco.com"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/food" className="hover:text-white transition-colors">Food</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white font-medium">Food Tours</span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Morocco Food Tours: The Complete Guide to Eating Your Way Across the Kingdom
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-8 leading-relaxed">
            From the smoky grills of Jemaa el-Fnaa to the ancient food stalls of the Fes medina,
            from Essaouira&apos;s fresh-off-the-boat seafood to Chefchaouen&apos;s mountain flavors --
            discover Morocco one bite at a time with guided tours, self-guided routes, and cooking classes.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#marrakech-tours" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#A0522D] font-semibold hover:bg-white/90 transition-colors">
              <MapPin className="w-4 h-4" /> Marrakech Tours
            </a>
            <a href="#fes-tours" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#A0522D] transition-colors">
              <Utensils className="w-4 h-4" /> Fes Tours
            </a>
            <a href="#cooking-classes" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#A0522D] transition-colors">
              <ChefHat className="w-4 h-4" /> Cooking Classes
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 2 : WHY TAKE A FOOD TOUR IN MOROCCO
          ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <Utensils className="w-4 h-4" /> Why Food Tours?
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Why Take a Food Tour in Morocco
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Morocco&apos;s cuisine is one of the world&apos;s great culinary traditions, but navigating the
              medina food scene on your own can be overwhelming. Here is why a guided food tour transforms your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: 'Navigate the Medina Like a Local',
                text: 'Morocco\'s medinas are labyrinths of narrow alleys where the best food is hidden in unmarked stalls, tiny doorways, and neighborhood bakeries that no guidebook lists. A local guide takes you past the tourist traps to the places where Moroccans actually eat -- the stalls with the longest queues of workers at lunchtime, the bakeries where bread emerges hot from wood-fired ovens, and the hidden courtyard restaurants with no signage.',
              },
              {
                icon: Info,
                title: 'Understand What You Are Eating',
                text: 'A knowledgeable guide explains the history, preparation, and cultural significance of every dish. Why is pastilla sweet and savory? What makes Fassi cuisine different from Marrakchi cooking? Why do Moroccans eat couscous on Fridays? Why is the communal bread oven the social center of a neighborhood? These stories transform a meal from sustenance into cultural understanding.',
              },
              {
                icon: DollarSign,
                title: 'Get Fair Prices and Generous Portions',
                text: 'Guides have established relationships with vendors, ensuring you pay local prices rather than tourist markup. They also know which stalls give the most generous portions, use the freshest ingredients, and maintain the highest hygiene standards. A guide\'s trusted vendor network means you eat better for less than you would on your own.',
              },
              {
                icon: Heart,
                title: 'Discover Dishes You Never Knew Existed',
                text: 'Beyond tagine and couscous lies a vast Moroccan culinary world that most visitors never discover: tangia (the slow-cooked bachelor\'s stew), rfissa (shredded msemen with lentil sauce), trid (a paper-thin pastry stew), khlii (preserved dried meat), and regional specialties like Essaouira\'s chermoula-grilled fish or Chefchaouen\'s bessara soup. A food tour is your gateway to the 90% of Moroccan cuisine that restaurants don\'t serve to tourists.',
              },
              {
                icon: Users,
                title: 'Food Safety and Comfort',
                text: 'Your guide steers you to stalls with high turnover (freshness), visible cooking (transparency), and local clientele (quality indicator). They handle ordering and communication in Darija (Moroccan Arabic), navigate dietary restrictions, and ensure that you are comfortable at every stop. For first-time visitors who might feel intimidated by the sensory overload of a busy souk, a guide is invaluable.',
              },
              {
                icon: Camera,
                title: 'Create Lasting Memories',
                text: 'Food tours are consistently rated among the top experiences by travelers to Morocco. The combination of incredible flavors, fascinating cultural insights, vibrant market atmospheres, and the social connection of eating together creates memories that last far longer than any museum visit. Many travelers say their food tour was the highlight of their entire Morocco trip.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10 mb-4">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#1A1814]/70 leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 3 : MARRAKECH FOOD TOURS
          ───────────────────────────────────────────────────────── */}
      <section id="marrakech-tours" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" /> Marrakech
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Marrakech Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              The Red City is Morocco&apos;s culinary playground. From the legendary night food stalls of
              Jemaa el-Fnaa to hidden medina bakeries and hands-on cooking classes, Marrakech offers
              the widest variety of food tour experiences in the country. Budget from 300 MAD per person.
            </p>
          </div>

          <div className="relative mb-10">
            <img
              src="/images/photo-tagine-chicken.webp"
              alt="Traditional Moroccan chicken tagine with preserved lemons and olives served in a clay pot in Marrakech - citytoursmorocco.com"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-8">
            {marrakechTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                      {tour.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Clock className="w-4 h-4 text-[#A0522D]" /> {tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <DollarSign className="w-4 h-4 text-[#C4960C]" /> {tour.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Users className="w-4 h-4 text-[#A0522D]" /> {tour.groupSize} people
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Star className="w-4 h-4 text-[#C4960C]" /> {tour.rating}/5
                      </span>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                      {tour.description}
                    </p>
                    <p className="text-sm text-[#A0522D] font-semibold mb-3">
                      <Clock className="w-3.5 h-3.5 inline mr-1" /> Best time: {tour.bestTime}
                    </p>
                  </div>
                  <div className="lg:w-80 bg-[#FAF8F5] rounded-xl p-5">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 text-sm uppercase tracking-wider">
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                          <Flame className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 4 : FES FOOD TOURS
          ───────────────────────────────────────────────────────── */}
      <section id="fes-tours" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" /> Fes
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Fes Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Fes is Morocco&apos;s undisputed gastronomic capital. The ancient medina -- a UNESCO World Heritage site --
              contains food stalls that have been operating for centuries, and the refined Fassi cuisine is considered
              the pinnacle of Moroccan cooking. Expect deeper historical context and more complex flavors than anywhere else.
            </p>
          </div>

          <div className="relative mb-10">
            <img
              src="/images/photo-pastilla-fes.webp"
              alt="Traditional Fassi pastilla with powdered sugar and cinnamon dusting served on an ornate Moroccan plate in Fes - citytoursmorocco.com"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-8">
            {fesTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                      {tour.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Clock className="w-4 h-4 text-[#A0522D]" /> {tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <DollarSign className="w-4 h-4 text-[#C4960C]" /> {tour.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Users className="w-4 h-4 text-[#A0522D]" /> {tour.groupSize} people
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Star className="w-4 h-4 text-[#C4960C]" /> {tour.rating}/5
                      </span>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                      {tour.description}
                    </p>
                    <p className="text-sm text-[#A0522D] font-semibold">
                      <Clock className="w-3.5 h-3.5 inline mr-1" /> Best time: {tour.bestTime}
                    </p>
                  </div>
                  <div className="lg:w-80 bg-[#EDE8E0] rounded-xl p-5">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 text-sm uppercase tracking-wider">
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                          <Flame className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 5 : CASABLANCA FOOD TOURS
          ───────────────────────────────────────────────────────── */}
      <section id="casablanca-tours" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" /> Casablanca
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Casablanca Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Morocco&apos;s largest city brings a cosmopolitan edge to Moroccan cuisine. French colonial influence,
              Spanish seafood traditions, and modern Moroccan fusion create a food scene unlike anywhere else in the kingdom.
              Casablanca is where tradition meets innovation on the plate.
            </p>
          </div>

          <div className="space-y-8">
            {casablancaTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                      {tour.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Clock className="w-4 h-4 text-[#A0522D]" /> {tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <DollarSign className="w-4 h-4 text-[#C4960C]" /> {tour.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Users className="w-4 h-4 text-[#A0522D]" /> {tour.groupSize} people
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Star className="w-4 h-4 text-[#C4960C]" /> {tour.rating}/5
                      </span>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                      {tour.description}
                    </p>
                    <p className="text-sm text-[#A0522D] font-semibold">
                      <Clock className="w-3.5 h-3.5 inline mr-1" /> Best time: {tour.bestTime}
                    </p>
                  </div>
                  <div className="lg:w-80 bg-[#FAF8F5] rounded-xl p-5">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 text-sm uppercase tracking-wider">
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                          <Flame className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 6 : ESSAOUIRA FOOD TOURS
          ───────────────────────────────────────────────────────── */}
      <section id="essaouira-tours" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" /> Essaouira
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Essaouira Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              The Wind City of the Atlantic coast is Morocco&apos;s seafood capital. Fresh-off-the-boat fish,
              charcoal-grilled at the port, argan oil from nearby cooperatives, and a relaxed coastal vibe
              make Essaouira a food lover&apos;s paradise that feels distinctly different from the inland cities.
            </p>
          </div>

          <div className="space-y-8">
            {essaouiraTours.map((tour) => (
              <div key={tour.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                      {tour.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Clock className="w-4 h-4 text-[#A0522D]" /> {tour.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <DollarSign className="w-4 h-4 text-[#C4960C]" /> {tour.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Users className="w-4 h-4 text-[#A0522D]" /> {tour.groupSize} people
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Star className="w-4 h-4 text-[#C4960C]" /> {tour.rating}/5
                      </span>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                      {tour.description}
                    </p>
                    <p className="text-sm text-[#A0522D] font-semibold">
                      <Clock className="w-3.5 h-3.5 inline mr-1" /> Best time: {tour.bestTime}
                    </p>
                  </div>
                  <div className="lg:w-80 bg-[#EDE8E0] rounded-xl p-5">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 text-sm uppercase tracking-wider">
                      Tour Highlights
                    </h4>
                    <ul className="space-y-2">
                      {tour.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                          <Flame className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 7 : CHEFCHAOUEN FOOD EXPERIENCES
          ───────────────────────────────────────────────────────── */}
      <section id="chefchaouen-tours" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <MapPin className="w-4 h-4" /> Chefchaouen
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Chefchaouen Food Experiences
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              The Blue Pearl of the Rif mountains offers a food experience completely unlike the rest of Morocco.
              Riffian mountain cuisine features fresh goat cheese, wild herbs, hearty fava bean soups, and
              flavors shaped by the cool mountain climate and Andalusian heritage of this enchanting town.
            </p>
          </div>

          <div className="space-y-8">
            {chefchaouenExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                      {exp.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Clock className="w-4 h-4 text-[#A0522D]" /> {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <DollarSign className="w-4 h-4 text-[#C4960C]" /> {exp.price}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Users className="w-4 h-4 text-[#A0522D]" /> {exp.groupSize} people
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                        <Star className="w-4 h-4 text-[#C4960C]" /> {exp.rating}/5
                      </span>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <p className="text-sm text-[#A0522D] font-semibold">
                      <Clock className="w-3.5 h-3.5 inline mr-1" /> Best time: {exp.bestTime}
                    </p>
                  </div>
                  <div className="lg:w-80 bg-[#FAF8F5] rounded-xl p-5">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 text-sm uppercase tracking-wider">
                      Experience Highlights
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                          <Flame className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 8 : TOP FOOD TOUR OPERATORS
          ───────────────────────────────────────────────────────── */}
      <section id="operators" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <Star className="w-4 h-4" /> Recommended Operators
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top Food Tour Operators in Morocco
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              These are the most reputable food tour companies operating across Morocco.
              All have been vetted for guide quality, food safety, portion generosity, and cultural knowledge.
              Prices listed are per person and include all tastings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tourOperators.map((op) => (
              <div key={op.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      {op.name}
                    </h3>
                    <p className="text-sm text-[#A0522D] font-medium">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" /> {op.city}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: op.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#C4960C] fill-[#C4960C]" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4">
                  {op.description}
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <span className="font-semibold text-[#1A1814]">Price range:</span>{' '}
                    <span className="text-[#C4960C] font-medium">{op.priceRange}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-[#1A1814]">Languages:</span>{' '}
                    <span className="text-[#1A1814]/70">{op.languages}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {op.tours.map((tour) => (
                    <span
                      key={tour}
                      className="text-xs px-3 py-1 rounded-full bg-[#A0522D]/10 text-[#A0522D] font-medium"
                    >
                      {tour}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 9 : SELF-GUIDED FOOD WALKING ROUTES
          ───────────────────────────────────────────────────────── */}
      <section id="self-guided" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <Compass className="w-4 h-4" /> DIY Routes
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Self-Guided Food Walking Routes
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Prefer to explore on your own? These detailed walking routes with specific streets,
              stall names, prices, and insider tips let you create your own food tour experience.
              Budget-friendly and flexible -- eat at your own pace.
            </p>
          </div>

          <div className="relative mb-10">
            <img
              src="/images/photo-spice-souk-display.webp"
              alt="Colorful spice display in a Moroccan souk with pyramids of cumin, turmeric, saffron, and ras el hanout - citytoursmorocco.com"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-10">
            {selfGuidedRoutes.map((route) => (
              <div key={route.routeName} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <span className="text-sm font-semibold text-[#A0522D] uppercase tracking-wider">
                      {route.city}
                    </span>
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                      {route.routeName}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3 md:mt-0 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                      <Clock className="w-4 h-4 text-[#A0522D]" /> {route.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                      <Compass className="w-4 h-4 text-[#A0522D]" /> {route.distance}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#1A1814]/70">
                      <DollarSign className="w-4 h-4 text-[#C4960C]" /> {route.budget}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {route.stops.map((stop, index) => (
                    <div key={stop.name} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#A0522D] text-white flex items-center justify-center text-sm font-bold shrink-0">
                          {index + 1}
                        </div>
                        {index < route.stops.length - 1 && (
                          <div className="w-0.5 flex-1 bg-[#A0522D]/20 mt-2" />
                        )}
                      </div>
                      <div className="pb-4">
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-1">
                          {stop.name}
                        </h4>
                        <p className="text-sm text-[#C4960C] font-medium mb-1">
                          {stop.item}
                        </p>
                        <p className="text-sm text-[#1A1814]/60 italic">
                          <Info className="w-3 h-3 inline mr-1" /> {stop.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 10 : COOKING CLASSES GUIDE
          ───────────────────────────────────────────────────────── */}
      <section id="cooking-classes" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <ChefHat className="w-4 h-4" /> Cooking Classes
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top 10 Cooking Classes Across Morocco
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              The best way to take Moroccan flavors home with you. These ten cooking schools offer
              hands-on classes with market tours, expert instruction, and recipes you will use for years.
              See our <Link href="/cooking-classes" className="text-[#A0522D] underline hover:no-underline">full cooking classes guide</Link> for detailed reviews.
            </p>
          </div>

          <div className="relative mb-10">
            <img
              src="/images/hero-cooking-class.webp"
              alt="Hands-on Moroccan cooking class in a traditional riad kitchen with tagine pots and fresh spices - citytoursmorocco.com"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="overflow-x-auto zellige-border rounded-xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#A0522D]/20 bg-[#EDE8E0]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">Rank</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">School</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">City</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">Price</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814] hidden md:table-cell">Specialty</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[#1A1814] hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {topCookingClasses.map((cls) => (
                  <tr key={cls.rank} className="border-b border-[#EDE8E0] hover:bg-[#EDE8E0]/50 transition-colors">
                    <td className="py-3 px-4">
                      <span className="w-7 h-7 inline-flex items-center justify-center rounded-full bg-[#A0522D] text-white text-xs font-bold">
                        {cls.rank}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#1A1814]">{cls.name}</td>
                    <td className="py-3 px-4 text-[#A0522D]">{cls.city}</td>
                    <td className="py-3 px-4 text-[#C4960C] font-medium">{cls.price}</td>
                    <td className="py-3 px-4 text-[#1A1814]/70 hidden md:table-cell">{cls.specialty}</td>
                    <td className="py-3 px-4 text-[#1A1814]/60 hidden lg:table-cell">{cls.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/cooking-classes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#A0522D] text-white font-semibold hover:bg-[#8B4726] transition-colors"
            >
              <ChefHat className="w-4 h-4" /> Read Full Cooking Classes Guide
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SECTION 11 : SPICE GUIDE
          ───────────────────────────────────────────────────────── */}
      <section id="spice-guide" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <ShoppingBag className="w-4 h-4" /> Spice Shopping
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Spice Guide: What to Buy and Fair Prices
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Every food tour passes through a spice souk, and you will be tempted to buy everything.
              This guide helps you identify quality spices, understand fair prices, and avoid common tourist traps.
              Armed with this knowledge, you will shop like a local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {spiceGuide.map((spice) => (
              <div key={spice.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                    {spice.name}
                  </h3>
                  <span className="text-sm text-[#C4960C] font-semibold whitespace-nowrap ml-3">
                    {spice.fairPrice}
                  </span>
                </div>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-3">
                  {spice.description}
                </p>
                <div className="bg-[#FAF8F5] rounded-lg p-3">
                  <p className="text-sm text-[#A0522D]">
                    <Info className="w-3.5 h-3.5 inline mr-1" />
                    <span className="font-semibold">Buying tip:</span> {spice.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 12 : DIETARY NEEDS
          ───────────────────────────────────────────────────────── */}
      <section id="dietary" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <Heart className="w-4 h-4" /> Dietary Guide
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Dietary Needs on Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Whether you are vegetarian, vegan, halal-conscious, or gluten-free, Morocco can accommodate you --
              with the right preparation. Here is an honest assessment of each dietary need and practical tips
              to ensure you eat well on your food tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dietaryInfo.map((diet) => {
              const Icon = diet.icon;
              return (
                <div key={diet.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-3 rounded-xl bg-[#A0522D]/10">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814]">
                        {diet.type}
                      </h3>
                      <span className={`text-xs font-bold uppercase tracking-wider ${
                        diet.ease === 'Easy' ? 'text-green-600' :
                        diet.ease === 'Moderate' ? 'text-yellow-600' :
                        diet.ease === 'Challenging' ? 'text-orange-600' :
                        'text-[#C4960C]'
                      }`}>
                        {diet.ease}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed mb-4">
                    {diet.description}
                  </p>
                  <ul className="space-y-2">
                    {diet.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-[#1A1814]/70">
                        <ChevronRight className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 13 : ETIQUETTE & WHAT TO WEAR
          ───────────────────────────────────────────────────────── */}
      <section id="etiquette" className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <Info className="w-4 h-4" /> Etiquette
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              What to Wear and Etiquette on Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              A few simple cultural guidelines will ensure you have the best possible experience on your
              Moroccan food tour. These tips cover dress code, eating customs, tipping, photography, and
              general food safety practices.
            </p>
          </div>

          <div className="relative mb-10">
            <img
              src="/images/photo-orange-juice-stall.webp"
              alt="Fresh orange juice stall in Marrakech Jemaa el-Fnaa square with stacked oranges and friendly vendor - citytoursmorocco.com"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {etiquetteTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                  {tip.title}
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* What to Bring Checklist */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-6 text-center">
              Essential Packing List for Food Tours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-[#A0522D] mb-3 text-sm uppercase tracking-wider">Clothing</h4>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Comfortable closed-toe walking shoes</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Modest clothing covering shoulders and knees</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Light layers (medina alleys can be cool)</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Light scarf for modesty near mosques</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#A0522D] mb-3 text-sm uppercase tracking-wider">Essentials</h4>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Small daypack or crossbody bag</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Bottled water (Sidi Ali or Ain Saiss)</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Hand sanitizer or wet wipes</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Cash in small denominations (MAD)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#A0522D] mb-3 text-sm uppercase tracking-wider">Nice to Have</h4>
                <ul className="space-y-2 text-sm text-[#1A1814]/70">
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Phone camera for food photography</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Notebook for recipes and vendor names</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Reusable bag for spice purchases</li>
                  <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-[#A0522D]" /> Antacid tablets (just in case)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 14 : FAQ WITH JSON-LD SCHEMA
          ───────────────────────────────────────────────────────── */}
      <section id="faq" className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A0522D]/10 text-[#A0522D] text-sm font-semibold mb-4">
              <Info className="w-4 h-4" /> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions About Morocco Food Tours
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-3xl mx-auto">
              Everything you need to know before booking a food tour in Morocco, from costs
              and safety to dietary accommodations and the best time to go.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {jsonLd.mainEntity.map((item) => (
              <div key={item.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3">
                  {item.name}
                </h3>
                <p className="text-[#1A1814]/70 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          FEATURED IMAGES GALLERY
          ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              A Taste of What Awaits You
            </h2>
            <p className="text-[#1A1814]/70 max-w-2xl mx-auto">
              From sizzling street stalls to vibrant spice pyramids, Morocco&apos;s food scene
              is a feast for all the senses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/photo-sfenj-donuts.webp"
                alt="Traditional Moroccan sfenj donuts freshly fried and dusted with sugar at a street stall - citytoursmorocco.com"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                Sfenj -- Moroccan Donuts
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/photo-spice-souk-display.webp"
                alt="Vibrant spice pyramids at a Moroccan souk displaying cumin turmeric and ras el hanout - citytoursmorocco.com"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                Spice Souk Treasures
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/images/photo-orange-juice-stall.webp"
                alt="Fresh orange juice being squeezed at a colorful Jemaa el-Fnaa stall in Marrakech - citytoursmorocco.com"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">
                Fresh-Squeezed Orange Juice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          CTA SECTION
          ───────────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Coffee className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Eat Your Way Through Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you choose a guided tour, a self-guided walk, or a cooking class, Morocco&apos;s
            food scene will be one of the most memorable parts of your journey. Start planning your
            culinary adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/food"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[#A0522D] font-semibold hover:bg-white/90 transition-colors"
            >
              <Utensils className="w-4 h-4" /> Moroccan Food Guide
            </Link>
            <Link
              href="/cooking-classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#A0522D] transition-colors"
            >
              <ChefHat className="w-4 h-4" /> Cooking Classes Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────
          SECTION 15 : EXPLORE MORE
          ───────────────────────────────────────────────────────── */}
      <ExploreMore currentCategory="food" currentHref="/food-tours" />
    </>
  );
}
