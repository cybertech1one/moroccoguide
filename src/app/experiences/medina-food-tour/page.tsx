import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  UtensilsCrossed,
  Star,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Sun,
  Moon,
  Sunrise,
  Users,
  ArrowRight,
  Sparkles,
  Camera,
  ShieldCheck,
  Leaf,
  Flame,
  Heart,
  BookOpen,
  Info,
  ChefHat,
  Store,
  ThumbsUp,
  CircleDollarSign,
  Globe,
  Wheat,
  Apple,
  MessageCircleQuestion,
  ChevronDown,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Medina Food Tour | Authentic Moroccan Street Food & Culinary Walks',
  description:
    'Discover Morocco\'s best street food on a guided medina food tour. Explore Marrakech, Fes, and Casablanca\'s culinary treasures -- from sizzling b\'stilla and tangia to fresh msemen and snail soup. Complete guide with 15+ must-try dishes, prices in MAD, top operators, dietary tips, and spice market secrets.',
  keywords: [
    'Morocco food tour',
    'medina food tour Marrakech',
    'Moroccan street food guide',
    'Fes food tour',
    'Casablanca food tour',
    'Moroccan cuisine',
    'Jemaa el-Fna food stalls',
    'Moroccan spice market',
    'halal food Morocco',
    'Morocco cooking class',
    'Moroccan street food prices',
    'best food in Marrakech',
    'Morocco culinary experience',
    'medina walking tour food',
    'Moroccan food culture',
  ],
  openGraph: {
    title: 'Medina Food Tour - Authentic Moroccan Street Food & Culinary Walks',
    description:
      'Taste your way through Morocco\'s ancient medinas. A complete guide to the best street food, food tour operators, spice markets, and culinary traditions from Marrakech to Fes.',
    url: 'https://cityguide.ma/experiences/medina-food-tour',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan street food display in a medina market stall',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/experiences/medina-food-tour' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Medina Food Tour Experience',
  description:
    'Guided culinary walking tours through Morocco\'s historic medinas, featuring authentic street food tastings, spice market visits, and hands-on cooking experiences in Marrakech, Fes, and Casablanca.',
  url: 'https://cityguide.ma/experiences/medina-food-tour',
  image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=1200&h=630&fit=crop',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Marrakech',
    addressRegion: 'Marrakech-Safi',
    addressCountry: 'MA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6295,
    longitude: -7.9811,
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'MAD',
    lowPrice: 250,
    highPrice: 1200,
    offerCount: 6,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.8,
    reviewCount: 3620,
    bestRating: 5,
  },
  additionalType: 'https://schema.org/FoodEvent',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a medina food tour cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Guided medina food tours in Morocco typically cost between 250-1200 MAD ($25-120 USD) per person, depending on the duration, number of tastings, and whether a cooking class is included. Budget self-guided walks with street food tastings can be done for under 100 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan street food safe to eat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan street food is generally safe when you follow basic precautions: eat at busy stalls with high turnover, choose freshly cooked items, avoid pre-cut fruit and raw salads from street vendors, and drink bottled water. Guided food tours take you to vetted, hygienic vendors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there vegetarian and vegan options on Moroccan food tours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Moroccan cuisine features many naturally vegetarian and vegan dishes including zaalouk (eggplant salad), harira (lentil soup, often meat-free versions available), bissara (fava bean soup), msemen with honey, fresh seasonal fruits, and various olive and preserved lemon dishes. Most tour operators offer vegetarian-specific routes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of day for a food tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morning tours (9-12pm) are ideal for bakeries, breakfast foods, and spice markets. Evening tours (5-9pm) capture the energy of Jemaa el-Fna and night food stalls. Avoid midday (12-3pm) when many stalls close for the hottest hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I tip my food tour guide in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, tipping is customary. For a half-day food tour, 50-100 MAD per person is appropriate. For a full-day private tour, 100-200 MAD is standard. Tips are a significant part of guides\' income in Morocco.',
      },
    },
  ],
};

/* =====================================================================
   DATA
   ===================================================================== */

const streetFoods = [
  {
    name: 'Tangia Marrakchia',
    description:
      'The iconic bachelor\'s dish of Marrakech. Seasoned lamb or beef is slow-cooked overnight in a clay urn nestled in the embers of a hammam furnace. The result is meltingly tender meat with an intense, smoky depth that no oven can replicate. Traditionally prepared by men for Friday gatherings.',
    price: '40-60 MAD',
    where: 'Marrakech medina, especially near Jemaa el-Fna',
    dietary: 'Halal, gluten-free',
  },
  {
    name: 'B\'stilla (Pastilla)',
    description:
      'A magnificent layered pastry that encapsulates Morocco\'s culinary sophistication. Flaky warqa dough wraps around spiced pigeon or chicken, almonds, and eggs, dusted with cinnamon and powdered sugar. The interplay of sweet and savory defines Moroccan cuisine at its finest.',
    price: '20-40 MAD',
    where: 'Fes medina and Marrakech',
    dietary: 'Halal, contains nuts and eggs',
  },
  {
    name: 'Harira',
    description:
      'Morocco\'s beloved lentil and tomato soup, rich with chickpeas, fresh herbs, and often lamb. This is the quintessential Ramadan iftar dish, served at sunset to break the fast. Street vendors sell it year-round from steaming cauldrons, ladled into earthenware bowls.',
    price: '5-10 MAD',
    where: 'Every medina, street corners everywhere',
    dietary: 'Halal; vegetarian versions widely available',
  },
  {
    name: 'Msemen',
    description:
      'Square, flaky flatbread cooked on a flat griddle until golden and crispy on the outside, soft and layered within. Eaten plain with honey and butter for breakfast, or stuffed with spiced kefta, onions, and herbs for a heartier street snack. Watch the vendors stretch and fold the dough with mesmerizing skill.',
    price: '3-8 MAD',
    where: 'Street vendors throughout all medinas',
    dietary: 'Halal, vegetarian (plain version), vegan without butter',
  },
  {
    name: 'Tanjia-Style Lamb Mechoui',
    description:
      'Whole lamb slow-roasted in an underground clay oven for hours until the meat falls apart at the touch. Vendors display the glistening carcass and carve portions to order, served with cumin salt and fresh bread. The fat renders to a silky, smoky richness.',
    price: '30-50 MAD per portion',
    where: 'Mechoui Alley, Marrakech medina',
    dietary: 'Halal, gluten-free (without bread)',
  },
  {
    name: 'Snail Soup (Babbouche)',
    description:
      'An earthy, aromatic broth simmered with thyme, licorice root, caraway, and peppercorns, filled with dozens of small garden snails. Believed to have digestive and warming properties. The broth is the real star -- complex, herbaceous, and unlike anything else in Moroccan cuisine.',
    price: '5-10 MAD',
    where: 'Jemaa el-Fna, Marrakech; Fes medina',
    dietary: 'Halal, gluten-free',
  },
  {
    name: 'Sfenj (Moroccan Doughnuts)',
    description:
      'Light, airy rings of unsweetened fried dough, served piping hot from the fryer. Deceptively simple, the best sfenj have a delicate crunch outside and a cloud-like interior. Eaten plain, dipped in sugar, or drizzled with honey. The ultimate Moroccan breakfast street food.',
    price: '1-2 MAD each',
    where: 'Morning street vendors in every medina',
    dietary: 'Halal, vegan (most recipes)',
  },
  {
    name: 'Kefta Brochettes',
    description:
      'Spiced ground lamb or beef formed around metal skewers and grilled over charcoal until charred and juicy. Seasoned with cumin, paprika, onion, and fresh parsley. Served with bread, harissa, and a simple salad of tomatoes and onions. The smoke and sizzle draw you in from a block away.',
    price: '15-25 MAD',
    where: 'Grill stalls throughout all medinas',
    dietary: 'Halal',
  },
  {
    name: 'Zaalouk',
    description:
      'A smoky, garlicky salad of roasted eggplant and tomatoes, seasoned with cumin, paprika, and olive oil. Served warm or at room temperature with crusty khobz bread for dipping. One of Morocco\'s most beloved cooked salads and a staple of every meal.',
    price: '10-15 MAD',
    where: 'Restaurants and street food stalls',
    dietary: 'Halal, vegan, gluten-free',
  },
  {
    name: 'Bissara',
    description:
      'A thick, velvety soup of dried split fava beans, pureed to a smooth consistency and finished with a generous pour of olive oil, cumin, and paprika. This is the working-class breakfast of northern Morocco, hearty, nourishing, and deeply satisfying on cool medina mornings.',
    price: '5-8 MAD',
    where: 'Northern Morocco, especially Fes and Chefchaouen',
    dietary: 'Halal, vegan, gluten-free',
  },
  {
    name: 'Maakouda (Potato Fritters)',
    description:
      'Golden, crispy-coated potato cakes spiced with cumin and turmeric, deep-fried until crackling. Often tucked into a khobz sandwich with harissa and chopped salad. A beloved street snack that delivers maximum satisfaction for minimal dirhams.',
    price: '3-5 MAD',
    where: 'Street vendors, sandwich stalls',
    dietary: 'Halal, vegan (most recipes), gluten-free (without bread)',
  },
  {
    name: 'Khobz (Moroccan Bread)',
    description:
      'Round, dense, and slightly chewy, khobz is the backbone of every Moroccan meal. Baked fresh in communal wood-fired ovens each morning, the bread is used as a utensil to scoop tagines, salads, and soups. Follow the aroma of baking bread to find the neighborhood ferran (bakery).',
    price: '1.5-3 MAD per loaf',
    where: 'Neighborhood bakeries in every medina',
    dietary: 'Halal, vegan',
  },
  {
    name: 'Moroccan Mint Tea',
    description:
      'Gunpowder green tea brewed with generous bundles of fresh spearmint and sweetened liberally with sugar, poured from height to create a frothy top. More ritual than beverage, mint tea is Morocco\'s symbol of hospitality and the punctuation mark of every social interaction.',
    price: '5-15 MAD',
    where: 'Everywhere -- cafes, shops, homes, riads',
    dietary: 'Halal, vegan, gluten-free',
  },
  {
    name: 'Fresh Orange Juice',
    description:
      'Stalls piled high with pyramids of oranges press juice to order in front of you. Morocco\'s oranges are exceptionally sweet and aromatic, especially during the winter season. At Jemaa el-Fna, dozens of competing vendors line the square, creating a festival of citrus color.',
    price: '4-10 MAD',
    where: 'Jemaa el-Fna and all medina markets',
    dietary: 'Halal, vegan, gluten-free',
  },
  {
    name: 'Chebakia',
    description:
      'An intricate flower-shaped pastry of sesame-coated dough, deep-fried until crisp, then soaked in warm honey. Scented with orange blossom water, anise, and cinnamon, chebakia is the signature sweet of Ramadan but available year-round in medina pastry shops.',
    price: '5-15 MAD per piece',
    where: 'Pastry shops and Ramadan stalls',
    dietary: 'Halal, contains sesame and gluten',
  },
  {
    name: 'Briouat',
    description:
      'Crispy triangular or cigar-shaped pastries filled with spiced minced meat, cheese, or sweetened almond paste. The warqa dough wrapper shatters on first bite, giving way to intensely flavored fillings. Both savory and sweet versions are essential medina snacks.',
    price: '5-10 MAD each',
    where: 'Pastry shops and food stalls',
    dietary: 'Halal; vegetarian cheese and almond versions available',
  },
];

const itinerary = [
  {
    time: 'Morning Route (8:00 AM - 12:00 PM)',
    title: 'Bakeries, Breakfast & the Spice Souk',
    icon: Sunrise,
    stops: [
      {
        stop: 'Neighborhood Ferran (Bakery)',
        description:
          'Begin at a communal wood-fired bakery where locals bring their own dough to bake. Taste fresh khobz straight from the oven, still warm and fragrant, alongside baghrir (semolina pancakes) drizzled with honey and butter.',
      },
      {
        stop: 'Sfenj Cart',
        description:
          'Follow the aroma to a sfenj vendor frying Moroccan doughnuts in a cauldron of hot oil. Eat them within seconds of leaving the fryer -- the texture is incomparable when fresh. Pair with a glass of bissara from the neighboring stall.',
      },
      {
        stop: 'Olive & Pickle Souk',
        description:
          'Navigate the barrels of cured olives in every shade from green to deep purple. Sample varieties marinated in harissa, preserved lemons, garlic, or herbs. Learn to distinguish cured from brined and find your favorite for a take-home bag.',
      },
      {
        stop: 'Spice Souk (Rahba Kedima)',
        description:
          'Enter the aromatic heart of the medina. Pyramids of cumin, saffron, ras el hanout, and turmeric glow in shafts of sunlight. A knowledgeable guide teaches you to identify quality saffron, test cumin freshness, and understand the 20+ ingredients in ras el hanout.',
      },
    ],
  },
  {
    time: 'Afternoon Route (2:00 PM - 5:00 PM)',
    title: 'Hidden Stalls, Artisan Foods & Sweet Treats',
    icon: Sun,
    stops: [
      {
        stop: 'Mechoui Alley',
        description:
          'Tucked behind a nondescript doorway in the Marrakech medina, a row of vendors display whole roasted lambs. Watch the carver pull apart impossibly tender meat and serve it on a plate with cumin salt and bread. This is pure, elemental Moroccan food.',
      },
      {
        stop: 'Tangia Workshop',
        description:
          'Visit a tangia artisan who prepares the clay urns of seasoned meat each morning for delivery to the hammam furnace. Learn the centuries-old technique and taste a tangia that has been slow-cooking since dawn.',
      },
      {
        stop: 'Traditional Pastry Shop',
        description:
          'Step into a medina patisserie where artisans hand-shape chebakia, briouat, and gazelle horns (kaab el ghzal). Sample the flaky, honey-soaked creations alongside a glass of freshly brewed mint tea.',
      },
      {
        stop: 'Argan Oil Cooperative',
        description:
          'Meet the women who hand-crack and cold-press argan nuts into Morocco\'s liquid gold. Taste the difference between culinary argan oil (toasted, nutty, intense) and cosmetic-grade oil. Purchase directly from the cooperative.',
      },
    ],
  },
  {
    time: 'Evening Route (6:00 PM - 9:30 PM)',
    title: 'Night Market, Grills & the Jemaa el-Fna Feast',
    icon: Moon,
    stops: [
      {
        stop: 'Snail Soup Stand',
        description:
          'As the sun sets, the snail soup vendors set up their steaming cauldrons. Join the locals perched on stools around the cart, sipping the herbaceous broth and fishing out snails with a toothpick. An unmissable and deeply local experience.',
      },
      {
        stop: 'Jemaa el-Fna Food Stalls',
        description:
          'The famous square transforms into the world\'s largest open-air restaurant each evening. Navigate over 100 stalls offering grilled meats, seafood, harira, salads, and fresh juices. Your guide leads you to the best vendors and helps you order like a local.',
      },
      {
        stop: 'Kefta & Brochette Grill Row',
        description:
          'Sit down at a charcoal grill stall where flames lick skewers of lamb, chicken, and kefta. The smoke, the sizzle, the crush of diners -- this is Moroccan street food at its most theatrical and delicious.',
      },
      {
        stop: 'Rooftop Mint Tea Finale',
        description:
          'End the evening at a rooftop cafe overlooking the medina. Sip mint tea poured from height by a practiced hand, taste one final pastry, and reflect on a day of extraordinary flavors as the call to prayer echoes across the ancient city.',
      },
    ],
  },
];

const tourOperators = [
  {
    city: 'Marrakech',
    operators: [
      {
        name: 'Marrakech Food Tours',
        rating: 4.9,
        reviews: 1420,
        price: '450 MAD',
        duration: '4 hours',
        highlights: 'Jemaa el-Fna deep dive, 10+ tastings, spice market visit, small groups (max 8)',
        languages: 'English, French, Spanish',
      },
      {
        name: 'Taste of Marrakech',
        rating: 4.8,
        reviews: 980,
        price: '550 MAD',
        duration: '5 hours',
        highlights: 'Off-the-beaten-path stalls, local family kitchen visit, cooking demo included',
        languages: 'English, French',
      },
      {
        name: 'Medina Culinary Walks',
        rating: 4.7,
        reviews: 640,
        price: '350 MAD',
        duration: '3 hours',
        highlights: 'Budget-friendly, morning bakery focus, vegetarian route available',
        languages: 'English, French, Arabic',
      },
    ],
  },
  {
    city: 'Fes',
    operators: [
      {
        name: 'Fes Culinary Journey',
        rating: 4.9,
        reviews: 870,
        price: '500 MAD',
        duration: '5 hours',
        highlights: 'Oldest medina in the world, traditional Fassi cuisine, b\'stilla workshop',
        languages: 'English, French',
      },
      {
        name: 'A Taste of Fes',
        rating: 4.8,
        reviews: 520,
        price: '600 MAD',
        duration: '6 hours',
        highlights: 'Full-day experience, market shopping, cooking class, lunch included',
        languages: 'English, French, German',
      },
    ],
  },
  {
    city: 'Casablanca',
    operators: [
      {
        name: 'Casa Food Adventures',
        rating: 4.7,
        reviews: 380,
        price: '400 MAD',
        duration: '4 hours',
        highlights: 'Modern Moroccan cuisine, Central Market visit, seafood focus, Art Deco district',
        languages: 'English, French, Arabic',
      },
      {
        name: 'Casablanca Street Eats',
        rating: 4.6,
        reviews: 290,
        price: '300 MAD',
        duration: '3 hours',
        highlights: 'Habous Quarter, traditional pastries, affordable local spots',
        languages: 'English, French',
      },
    ],
  },
];

const spiceGuide = [
  {
    spice: 'Ras el Hanout',
    description:
      'Literally "head of the shop," this is the spice merchant\'s signature blend of 20-30 spices including cardamom, clove, cinnamon, cumin, coriander, nutmeg, and sometimes dried rosebuds. Every merchant has a proprietary recipe passed through generations.',
    price: '80-200 MAD/100g',
    tip: 'The best blends are complex and fragrant, not dominated by any single spice. Ask to smell before buying and compare several vendors.',
  },
  {
    spice: 'Saffron',
    description:
      'Morocco produces some of the world\'s finest saffron in the Taliouine region. Genuine saffron threads are deep crimson with a slightly bitter, hay-like aroma. When rubbed between wet fingers, real saffron releases a vivid golden-orange dye slowly.',
    price: '15-30 MAD/gram',
    tip: 'Beware of safflower or dyed corn silk sold as saffron. Genuine threads are uniform in color and never bright red or yellow. Buy from trusted vendors only.',
  },
  {
    spice: 'Cumin',
    description:
      'The backbone of Moroccan cooking, used in virtually every savory dish. Moroccan cumin is known for its warm, earthy intensity. Buy whole seeds and grind fresh for the most potent flavor.',
    price: '20-40 MAD/100g',
    tip: 'Fresh cumin seeds are olive-green to brown, fragrant when rubbed. Avoid pale, dusty seeds that have lost their essential oils.',
  },
  {
    spice: 'Turmeric',
    description:
      'Used for color and its earthy, peppery flavor in soups, rice, and marinades. Moroccan markets sell both whole rhizomes and ground powder. High-quality turmeric stains skin bright yellow on contact.',
    price: '15-30 MAD/100g',
    tip: 'Good turmeric powder is vivid orange-yellow and fragrant. Dull, pale powder may be adulterated with fillers.',
  },
  {
    spice: 'Dried Rosebuds',
    description:
      'Fragrant Damascena rose petals dried in the Dades Valley, used in ras el hanout, desserts, and the famous rose water. The Kelaat M\'gouna rose festival in May celebrates this aromatic treasure.',
    price: '30-60 MAD/50g',
    tip: 'Look for tightly closed buds with a deep pink color and strong, sweet fragrance. Loose, pale petals have lost their aroma.',
  },
];

const cookingClasses = [
  {
    name: 'La Maison Arabe Cooking Workshop',
    city: 'Marrakech',
    price: '800 MAD',
    duration: '4-5 hours',
    description:
      'One of the most respected cooking schools in Morocco. Classes include a guided market shopping trip to source ingredients, followed by hands-on preparation of a full Moroccan meal in a stunning riad kitchen. You learn tagine, couscous, and pastilla techniques.',
    includes: 'Market visit, ingredients, recipe booklet, full meal, mint tea ceremony',
  },
  {
    name: 'Palais Amani Cooking Class',
    city: 'Fes',
    price: '650 MAD',
    duration: '4 hours',
    description:
      'Set in a beautifully restored palace in the Fes medina. The class focuses on traditional Fassi cuisine, including the art of hand-rolling couscous and preparing the city\'s famous b\'stilla. Small groups ensure personalized instruction.',
    includes: 'Ingredients, recipe cards, full lunch, rooftop tea service',
  },
  {
    name: 'Amal Women\'s Training Center',
    city: 'Marrakech',
    price: '350 MAD',
    duration: '3 hours',
    description:
      'A social enterprise that trains disadvantaged women in the culinary arts. Your class fee directly supports their mission. The classes are warm, intimate, and focused on home-style Moroccan cooking that you can recreate in your own kitchen.',
    includes: 'Ingredients, recipe booklet, full meal, supporting a social cause',
  },
  {
    name: 'L\'Atelier Madada',
    city: 'Essaouira',
    price: '550 MAD',
    duration: '4 hours',
    description:
      'A coastal cooking experience focused on Essaouira\'s famous seafood traditions. Learn to prepare chermoula-marinated fish, seafood tagine, and the region\'s signature dishes using the freshest catch from the harbor market.',
    includes: 'Harbor market visit, ingredients, full seafood meal, wine pairing option',
  },
];

const foodSafetyTips = [
  {
    title: 'Choose Busy Stalls',
    description: 'High turnover means fresh food. If locals are lined up, the food is both safe and delicious. Avoid stalls with pre-cooked food sitting at room temperature.',
  },
  {
    title: 'Eat Freshly Cooked',
    description: 'Prioritize food cooked to order in front of you. Sizzling grills, fresh-from-the-fryer sfenj, and steaming harira are all safe bets. Avoid buffet-style displays.',
  },
  {
    title: 'Drink Bottled Water',
    description: 'Tap water in Morocco is treated but may cause stomach upset for visitors. Stick to sealed bottled water, hot tea (boiled), and freshly pressed juices from trusted stalls.',
  },
  {
    title: 'Wash or Peel Fruit',
    description: 'Buy whole fruits you can peel yourself (oranges, bananas). Avoid pre-cut fruit from street vendors. Reputable food tour guides carry hand sanitizer and wet wipes.',
  },
  {
    title: 'Ease In Gradually',
    description: 'Start with milder dishes on your first day and gradually introduce richer, spicier foods. Your digestive system will adapt. Carry basic anti-diarrheal medication as a precaution.',
  },
  {
    title: 'Communicate Allergies Clearly',
    description: 'Learn key Arabic phrases for your allergies or carry a printed allergy card. Most Moroccan food contains nuts, gluten, and dairy. Tour guides can help communicate dietary needs to vendors.',
  },
];

const seasonalSpecialties = [
  {
    season: 'Spring (March - May)',
    foods: 'Fresh fava beans (ful), artichoke tagine, herb-laden spring salads, wild asparagus, rose-flavored pastries during the M\'gouna Rose Festival in May',
    highlight: 'Rose Festival in the Dades Valley',
  },
  {
    season: 'Summer (June - August)',
    foods: 'Chilled avocado and almond milkshakes, watermelon juice, fig season begins, cold zaalouk salads, prickly pear cactus fruit (available at street carts)',
    highlight: 'Prickly pear season along roadsides',
  },
  {
    season: 'Autumn (September - November)',
    foods: 'Date harvest (especially from Zagora and Erfoud), pomegranate season, olive pressing season, fresh argan oil, quince tagine',
    highlight: 'Erfoud Date Festival in October',
  },
  {
    season: 'Winter (December - February)',
    foods: 'Peak orange season (sweetest juice), tangerine season, hearty harira and bissara soups, rfissa (festival chicken dish), preserved lemon making season',
    highlight: 'Sweetest oranges of the year',
  },
];

const ramadanTraditions = {
  title: 'Ramadan Food Traditions',
  description:
    'Ramadan transforms Morocco\'s food culture into something extraordinary. During the holy month, streets are quiet during the day, but the hours before iftar (sunset meal) buzz with preparation. The breaking of the fast follows a beloved ritual that has remained unchanged for centuries.',
  foods: [
    {
      name: 'Harira',
      role: 'The essential first course of every iftar meal. Rich, warming, and nourishing after a day of fasting.',
    },
    {
      name: 'Chebakia',
      role: 'The signature Ramadan pastry. Flower-shaped, deep-fried, and soaked in honey with sesame seeds.',
    },
    {
      name: 'Dates & Milk',
      role: 'Traditionally the very first food consumed at iftar, following the Prophet\'s example. Moroccan dates are exceptional.',
    },
    {
      name: 'Sellou (Sfouf)',
      role: 'A dense, energy-rich mixture of toasted flour, almonds, sesame, and honey. Provides sustained energy during fasting.',
    },
    {
      name: 'Briouat',
      role: 'Crispy pastry parcels in both sweet (almond) and savory (meat) versions, prepared in enormous quantities for Ramadan.',
    },
    {
      name: 'Rghaif & Msemen',
      role: 'Flaky, layered flatbreads prepared fresh each evening, served with honey, butter, or savory fillings.',
    },
  ],
  tip: 'Visiting during Ramadan offers a unique cultural experience, but most daytime food stalls are closed. Plan food tours for after iftar (sunset). The post-iftar night markets are magical and lively.',
};

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=600&q=80',
    alt: 'Colorful Moroccan tagine dishes at a medina food stall',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=80',
    alt: 'Pyramids of colorful spices in a Moroccan souk',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1567364816519-cbc9c4a1b8c6?w=400&q=80',
    alt: 'Fresh Moroccan mint tea being poured from height',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80',
    alt: 'Grilled kefta brochettes over charcoal flames',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?w=400&q=80',
    alt: 'Fresh orange juice stalls at Jemaa el-Fna',
    span: 'col-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
    alt: 'Traditional Moroccan bread at a medina bakery',
    span: 'col-span-2',
  },
];

const relatedExperiences = [
  {
    title: 'Moroccan Cooking Class',
    slug: '/experiences/moroccan-cooking-class',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=400&q=80',
    duration: '4-5 hours',
    price: 'From 300 MAD',
  },
  {
    title: 'Traditional Hammam Ritual',
    slug: '/experiences/hammam-ritual',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    duration: '1.5-2 hours',
    price: 'From 100 MAD',
  },
  {
    title: 'Sahara Desert Glamping',
    slug: '/experiences/sahara-glamping',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=400&q=80',
    duration: '1-3 nights',
    price: 'From $150/night',
  },
];

const faqs = [
  {
    question: 'How much does a medina food tour cost in Morocco?',
    answer:
      'Guided medina food tours typically cost between 250-1200 MAD ($25-120 USD) per person, depending on the duration, number of tastings included, and whether a cooking class is added. Budget self-guided walks sampling street food can be done for under 100 MAD if you know where to go.',
  },
  {
    question: 'Is Moroccan street food safe to eat?',
    answer:
      'Yes, Moroccan street food is generally safe when you follow basic precautions. Eat at busy stalls with high customer turnover, choose freshly cooked items prepared in front of you, avoid pre-cut raw fruit and uncooked salads from street vendors, and drink bottled or boiled water. Guided food tours take you to vetted, hygienic vendors with established reputations.',
  },
  {
    question: 'Are there vegetarian and vegan options?',
    answer:
      'Absolutely. Moroccan cuisine features many naturally vegetarian and vegan dishes including zaalouk (roasted eggplant salad), harira (lentil soup in meat-free versions), bissara (fava bean soup), msemen with honey, fresh seasonal fruits, and a wide variety of olive and preserved lemon dishes. Most tour operators offer vegetarian-specific routes on request.',
  },
  {
    question: 'What is the best time of day for a food tour?',
    answer:
      'Morning tours (8-12 AM) are ideal for bakeries, breakfast foods, and spice markets when they are freshest and least crowded. Evening tours (5-9:30 PM) capture the electric energy of Jemaa el-Fna and the night food stalls. Avoid midday (12-3 PM) when many stalls close during the hottest hours, especially in summer.',
  },
  {
    question: 'Should I tip my food tour guide?',
    answer:
      'Yes, tipping is customary and appreciated. For a half-day food tour, 50-100 MAD per person is appropriate. For a full-day private tour, 100-200 MAD per person is standard. Tips are a significant part of guides\' income in Morocco and reflect your satisfaction with the experience.',
  },
  {
    question: 'Can I do a food tour during Ramadan?',
    answer:
      'Yes, but with adjustments. Most daytime food stalls close during Ramadan as locals fast from dawn to sunset. Evening food tours after iftar (the sunset meal) are magical -- the markets come alive with special Ramadan dishes and festive energy. Many tour operators offer special Ramadan-themed evening tours.',
  },
  {
    question: 'How do I handle food allergies on a tour?',
    answer:
      'Inform your tour operator about allergies when booking. Common allergens in Moroccan food include nuts (almonds, peanuts), gluten (bread, pastries), dairy, and sesame. Carry a printed allergy card in Arabic and French. Reputable guides will communicate your needs to each vendor and suggest safe alternatives.',
  },
  {
    question: 'What should I wear on a medina food tour?',
    answer:
      'Wear comfortable walking shoes with good grip, as medina streets are narrow, uneven, and sometimes slippery. Dress modestly (covering shoulders and knees) out of respect for local culture. Bring a light layer for air-conditioned restaurants and a sun hat for outdoor market sections.',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MedinaFoodTourPage() {
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
      <section className="relative overflow-hidden bg-[#1A1814] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=1800&q=80"
            alt="Vibrant Moroccan food stalls in a medina with colorful tagines and spices"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/experiences" className="hover:text-white transition-colors">
              Experiences
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Medina Food Tour</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <UtensilsCrossed className="w-4 h-4 text-[#C4960C]" />
              Food &amp; Culture
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Medina Food Tour
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Taste your way through centuries of culinary heritage in Morocco&apos;s
              ancient medinas. From sizzling kefta on charcoal grills to honey-soaked
              chebakia in hidden pastry shops, every narrow alley reveals a new flavor.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#C4960C]">
                  250-1200
                </p>
                <p className="text-sm text-white/70">MAD / Person</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#C4960C]">
                  3-6
                </p>
                <p className="text-sm text-white/70">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#C4960C]">
                  4.8
                </p>
                <p className="text-sm text-white/70">Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[#C4960C]">
                  15+
                </p>
                <p className="text-sm text-white/70">Tastings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction & Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-6">
                  The Soul of Morocco Is on the Plate
                </h2>
                <div className="space-y-4 text-lg text-[#1A1814]/70 leading-relaxed">
                  <p>
                    Morocco&apos;s medinas are living, breathing culinary museums. Every twisted
                    alleyway, every sunlit courtyard, every smoke-filled grill station tells a story
                    that stretches back through Berber, Arab, Andalusian, and French influences to
                    create one of the world&apos;s most complex and rewarding food cultures. A medina
                    food tour is not merely a meal -- it is an immersion into the heart of Moroccan
                    identity.
                  </p>
                  <p>
                    The street food tradition in Morocco is ancient and deeply democratic. Kings and
                    laborers eat at the same stalls. The best harira in the city might come from a
                    woman ladling soup from a cart on an unnamed corner. The most extraordinary
                    mechoui might be found behind a doorway you would walk past a hundred times without
                    noticing. This is why a knowledgeable local guide transforms a walk through the
                    medina from a pleasant stroll into a revelatory journey through centuries of
                    culinary craft.
                  </p>
                  <p>
                    From the pre-dawn bakers pulling golden khobz from wood-fired ovens to the late-night
                    grill masters turning kefta skewers over glowing charcoal at Jemaa el-Fna,
                    Morocco&apos;s medinas feed millions of people every day with food that is fresh,
                    flavorful, and astonishingly affordable. A complete street food lunch that would
                    cost 200 MAD in a restaurant can be assembled for 30-40 MAD from the right
                    vendors -- and it will taste better.
                  </p>
                  <p>
                    Whether you join a guided tour or venture out on your own armed with this guide,
                    the medina food experience will reshape your understanding of Moroccan cuisine
                    and leave you with flavors that linger long after you have returned home.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814] mb-5">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CircleDollarSign className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1814] text-sm">Price Range</p>
                      <p className="text-sm text-[#1A1814]/60">250-1200 MAD ($25-120) per person for guided tours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1814] text-sm">Duration</p>
                      <p className="text-sm text-[#1A1814]/60">3-6 hours. Half-day most popular.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1814] text-sm">Best Time</p>
                      <p className="text-sm text-[#1A1814]/60">Morning (8-12) or evening (5-9). Year-round.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1814] text-sm">Cities</p>
                      <p className="text-sm text-[#1A1814]/60">Marrakech, Fes, Casablanca, Essaouira</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1814] text-sm">Group Size</p>
                      <p className="text-sm text-[#1A1814]/60">2-12 people. Private tours available.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-[#A0522D] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[#1A1814] text-sm">Dietary Options</p>
                      <p className="text-sm text-[#1A1814]/60">Halal, vegetarian, and vegan routes available</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#1A1814]/10">
                  <a
                    href="#tour-operators"
                    className="block w-full text-center px-6 py-3 bg-[#A0522D] text-white font-semibold rounded-lg hover:bg-[#8B4726] transition-colors"
                  >
                    View Tour Operators
                  </a>
                  <p className="text-xs text-[#1A1814]/40 text-center mt-3">
                    Book directly for the best rates and customization
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Food Tour Itinerary ── */}
      <section className="py-16 md:py-20 bg-[#1A1814]/[0.02] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-3">
              Your Culinary Journey
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              A Day of Flavors: Morning to Night
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              A comprehensive food tour spans three distinct routes, each capturing a different rhythm of the medina&apos;s
              culinary life. Follow one or combine all three for the ultimate experience.
            </p>
          </div>

          <div className="space-y-12">
            {itinerary.map((route) => (
              <div key={route.time} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center shrink-0">
                    <route.icon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#A0522D] uppercase tracking-wider">
                      {route.time}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1A1814]">
                      {route.title}
                    </h3>
                  </div>
                </div>
                <div className="space-y-0">
                  {route.stops.map((stop, index) => (
                    <div key={stop.stop} className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-[#C4960C]/10 flex items-center justify-center shrink-0 text-sm font-bold text-[#C4960C]">
                          {index + 1}
                        </div>
                        {index < route.stops.length - 1 && (
                          <div className="w-px flex-1 bg-[#1A1814]/10 my-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-bold text-[#1A1814] mb-1">{stop.stop}</h4>
                        <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                          {stop.description}
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

      {/* ── Must-Try Street Foods ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-3">
              The Essential Tastings
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              15+ Must-Try Moroccan Street Foods
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              From savory slow-cooked meats to flaky honey-soaked pastries, these are the dishes that define
              Morocco&apos;s extraordinary street food culture. Prices listed are typical street vendor rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {streetFoods.map((food) => (
              <div key={food.name} className="card-moroccan p-5 flex flex-col">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814]">
                    {food.name}
                  </h3>
                  <span className="shrink-0 ml-3 px-3 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C] text-sm font-bold">
                    {food.price}
                  </span>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-3 flex-1">
                  {food.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#1A1814]/50 pt-3 border-t border-[#1A1814]/10">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {food.where}
                  </span>
                  <span className="flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    {food.dietary}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tour Operators ── */}
      <section id="tour-operators" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-3">
              Trusted Guides
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Best Food Tour Operators
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              These highly-rated operators have been vetted for food quality, guide knowledge,
              safety standards, and authentic local connections. Book directly for the best rates.
            </p>
          </div>

          <div className="space-y-10">
            {tourOperators.map((city) => (
              <div key={city.city}>
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="w-5 h-5 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#1A1814]">
                    {city.city}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {city.operators.map((op) => (
                    <div key={op.name} className="card-moroccan p-5 flex flex-col">
                      <h4 className="font-bold text-[#1A1814] mb-2">{op.name}</h4>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < Math.floor(op.rating)
                                  ? 'text-[#C4960C] fill-[#C4960C]'
                                  : 'text-[#1A1814]/15'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-[#1A1814]">{op.rating}</span>
                        <span className="text-xs text-[#1A1814]/40">({op.reviews} reviews)</span>
                      </div>
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-[#1A1814]/60">
                          <DollarSign className="w-4 h-4 text-[#A0522D] shrink-0" />
                          <span>From <span className="font-semibold text-[#1A1814]">{op.price}</span> per person</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#1A1814]/60">
                          <Clock className="w-4 h-4 text-[#A0522D] shrink-0" />
                          <span>{op.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#1A1814]/60">
                          <Globe className="w-4 h-4 text-[#A0522D] shrink-0" />
                          <span>{op.languages}</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#1A1814]/50 leading-relaxed flex-1">
                        {op.highlights}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dietary Considerations ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Dietary Considerations
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              Morocco is one of the most accommodating destinations for diverse dietary needs,
              with deep traditions of halal, vegetarian, and naturally gluten-free cooking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] text-lg mb-3">
                Halal
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Morocco is a Muslim-majority country, so virtually all street food and restaurant food is
                halal by default. Meat is slaughtered according to Islamic guidelines. Alcohol is not served
                at street food stalls. Pork is extremely rare and clearly labeled when available in
                international hotels.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] text-lg mb-3">
                Vegetarian
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Moroccan cuisine has an extensive tradition of vegetable-based dishes. Zaalouk, taktouka,
                loubia (white bean stew), vegetable tagines, couscous with seven vegetables, and dozens of
                cooked salads are all naturally meat-free. Most tour operators offer dedicated vegetarian
                routes.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-[#A0522D]/10 flex items-center justify-center mx-auto mb-4">
                <Apple className="w-7 h-7 text-[#A0522D]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] text-lg mb-3">
                Vegan
              </h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                While not traditionally a vegan cuisine, many Moroccan dishes are naturally plant-based.
                Bissara, zaalouk, harira (meat-free versions), msemen (without butter), fruit juices, olives,
                and argan-oil-dressed salads are all vegan. Inform your guide in advance for a fully
                curated vegan route.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[#C4960C]">
            <div className="flex items-start gap-3">
              <Wheat className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#1A1814] mb-1">Gluten-Free Note</h4>
                <p className="text-sm text-[#1A1814]/60">
                  Bread is central to Moroccan dining, but many dishes are naturally gluten-free: grilled
                  meats, tagines (without bread), salads, soups like bissara and harira, and fruit. Couscous
                  contains gluten. Alert your guide to avoid bread-based and pastry items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Food Safety Tips
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              Moroccan street food is generally safe and hygienic, especially from established vendors.
              Follow these practical tips for a worry-free culinary adventure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {foodSafetyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#A0522D] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#1A1814] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Specialties & Ramadan ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-3">
              Taste the Seasons
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Seasonal Specialties
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              Morocco&apos;s food changes with the seasons. Each time of year brings unique ingredients,
              festivals, and dishes that make every visit a new culinary discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {seasonalSpecialties.map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#A0522D]" />
                  <h3 className="font-bold text-[#1A1814]">{s.season}</h3>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-3">{s.foods}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#C4960C]/10 text-[#C4960C] text-xs font-medium">
                  <Sparkles className="w-3 h-3" />
                  {s.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Ramadan Section */}
          <div className="card-moroccan p-6 md:p-8 border-2 border-[#C4960C]/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                <Moon className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1A1814]">
                {ramadanTraditions.title}
              </h3>
            </div>
            <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-5">
              {ramadanTraditions.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {ramadanTraditions.foods.map((food) => (
                <div key={food.name} className="flex items-start gap-2">
                  <Flame className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-[#1A1814]">{food.name}</p>
                    <p className="text-xs text-[#1A1814]/50">{food.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-[#C4960C]/5">
              <Info className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
              <p className="text-sm text-[#1A1814]/60">{ramadanTraditions.tip}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spice Market Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-3">
              The Aromatic Heart of the Medina
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Spice Market Guide
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              No medina food tour is complete without navigating the spice souk. Here is what to look for,
              how to identify quality, and what to bring home.
            </p>
          </div>

          <div className="space-y-4">
            {spiceGuide.map((spice) => (
              <div key={spice.spice} className="card-moroccan p-5 flex flex-col sm:flex-row gap-4">
                <div className="sm:w-48 shrink-0">
                  <h3 className="font-bold text-[#1A1814] mb-1">{spice.spice}</h3>
                  <p className="text-sm font-semibold text-[#C4960C]">{spice.price}</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-2">{spice.description}</p>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-[#A0522D]/5">
                    <ThumbsUp className="w-4 h-4 text-[#A0522D] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#1A1814]/50"><span className="font-semibold text-[#1A1814]/70">Quality tip:</span> {spice.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[#A0522D]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#A0522D] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[#1A1814] mb-1">Bargaining Advice</h4>
                <p className="text-sm text-[#1A1814]/60">
                  Bargaining is expected and part of the experience. Start by offering about 40-50% of the
                  asking price and negotiate from there. Buy from multiple vendors to compare quality. Fixed-price
                  shops exist and are fine, but you will pay a premium. Your food tour guide can recommend
                  honest vendors and help negotiate fair prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cooking Class Add-Ons ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-3">
              Extend Your Experience
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Cooking Class Add-Ons
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              Take the flavors home with you. Pair your food tour with a hands-on cooking class to
              master the techniques behind Morocco&apos;s most beloved dishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookingClasses.map((cls) => (
              <div key={cls.name} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <ChefHat className="w-5 h-5 text-[#A0522D]" />
                  <h3 className="font-bold text-[#1A1814]">{cls.name}</h3>
                </div>
                <div className="flex items-center gap-3 mb-3 text-sm text-[#1A1814]/50">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {cls.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {cls.duration}
                  </span>
                  <span className="font-semibold text-[#C4960C]">{cls.price}</span>
                </div>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed mb-4 flex-1">
                  {cls.description}
                </p>
                <div className="pt-3 border-t border-[#1A1814]/10">
                  <p className="text-xs text-[#1A1814]/50">
                    <span className="font-semibold text-[#1A1814]/70">Includes:</span> {cls.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <Camera className="w-5 h-5 text-[#A0522D]" />
              <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest">
                Visual Feast
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Flavors in Focus
            </h2>
            <p className="text-[#1A1814]/60 max-w-2xl mx-auto">
              A glimpse into the colors, textures, and energy of Morocco&apos;s medina food scene.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className={`relative overflow-hidden rounded-xl group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking & Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] text-center mb-4">
            Booking &amp; Practical Tips
          </h2>
          <p className="text-center text-[#1A1814]/60 max-w-2xl mx-auto mb-12">
            Everything you need to know to plan the perfect medina food tour experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814]">Book 2-3 Days Ahead</h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Popular operators fill up quickly, especially during peak season (October-April).
                Book at least 2-3 days in advance. For private tours, a week&apos;s notice is recommended.
                Most operators accept bookings via their website, email, or WhatsApp.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814]">Come Hungry</h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Food tours involve 10-15 tastings across 3-6 hours. Skip breakfast or lunch before your
                tour to make the most of every stop. Pace yourself -- guides understand if you need to
                pause between tastings. Carry a bottle of water.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Store className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814]">Bring Cash in MAD</h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Street food vendors and small medina shops accept cash only. Carry 200-300 MAD in small
                denominations (10, 20, 50 MAD notes) for tips, extra purchases, and spice market
                shopping. ATMs are available near all medina entrances.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814]">Photography Etiquette</h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Ask before photographing vendors and their food. Most are happy to pose once you have
                purchased something. Your guide can help navigate photography etiquette. The best food
                photos come from the golden hour light that filters into the medina corridors.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814]">Small Groups Are Better</h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Medina alleys are narrow and crowded. Tours with 8 or fewer participants allow better
                access to small stalls, more personal interaction with vendors, and easier navigation.
                Private tours for 2-4 people offer the best experience.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-bold text-[#1A1814]">Tipping Guide</h3>
              </div>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                Tip your guide 50-100 MAD per person for a half-day tour, 100-200 MAD for a full day.
                Round up small purchases at stalls. If a vendor lets you photograph their craft,
                buying a small item (5-10 MAD) is a thoughtful gesture of appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <MessageCircleQuestion className="w-5 h-5 text-[#A0522D]" />
              <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest">
                Common Questions
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="card-moroccan group">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-bold text-[#1A1814] text-sm md:text-base pr-4">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-[#A0522D] shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-[#1A1814]/60 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Experiences ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[#1A1814] mb-4">
              Related Experiences
            </h2>
            <p className="text-[#1A1814]/60">
              Combine your food tour with these other unforgettable Moroccan experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp) => (
              <Link
                key={exp.slug}
                href={exp.slug}
                className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[#1A1814]/40">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exp.duration}</span>
                    <span className="font-semibold text-[#A0522D]">{exp.price}</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#A0522D] group-hover:text-[#8B4726] transition-colors">
                    Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1814] text-white font-semibold rounded-lg hover:bg-[#1A1814]/80 transition-colors"
            >
              View All Experiences
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
