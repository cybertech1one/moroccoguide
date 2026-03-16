import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wallet,
  DollarSign,
  MapPin,
  Bed,
  Bus,
  UtensilsCrossed,
  Shield,
  AlertTriangle,
  Users,
  Clock,
  CheckCircle,
  Star,
  Coffee,
  Luggage,
  Compass,
  TrendingDown,
  Calculator,
  Lightbulb,
  HandCoins,
  Banknote,
  PiggyBank,
  Tent,
  Train,
  Plane,
  Footprints,
  Mountain,
  Camera,
  ShoppingBag,
  CreditCard,
  CalendarDays,
  Info,
  ArrowRight,
  CircleDollarSign,
  Building,
  Waves,
  TreePine,
  Sun,
  Utensils,
  Globe,
  Tag,
  BadgePercent,
  MessageCircleQuestion,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco on a Budget | Complete Money-Saving Travel Guide 2025',
  description:
    'How to travel Morocco cheaply without missing anything. Real prices in MAD, budget tiers from 200 MAD/day shoestring to 1500 MAD/day mid-range, haggling tips, city-by-city costs, and 20+ money-saving strategies.',
  keywords: [
    'morocco budget travel',
    'morocco on a budget',
    'cheap travel morocco',
    'morocco travel costs',
    'morocco prices',
    'morocco budget tips',
    'morocco haggling guide',
    'morocco cheap food',
    'morocco hostel prices',
    'morocco transport costs',
    'morocco backpacker budget',
    'morocco money saving tips',
    'morocco affordable travel',
    'morocco street food prices',
    'budget travel north africa',
  ],
  openGraph: {
    title: 'Morocco on a Budget | Complete Money-Saving Travel Guide 2025',
    description:
      'Travel Morocco well for less. Real prices, three budget tiers, city-by-city breakdowns, haggling guide, and 20+ money-saving tips from experienced travelers.',
    url: 'https://citytoursmorocco.com/budget-travel',
    images: [
      {
        url: '/images/hero-jemaa-elfnaa-night.webp',
        width: 1200,
        height: 630,
        alt: 'Colorful Morocco medina market with budget-friendly goods',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Morocco Budget Travel Guide',
  description:
    'A comprehensive guide to traveling Morocco on a budget, covering accommodation, food, transport, haggling, and city-by-city cost breakdowns with real prices in Moroccan Dirhams.',
  url: 'https://citytoursmorocco.com/budget-travel',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const budgetTiers = [
  {
    tier: 'Shoestring',
    range: '200 - 400 MAD/day',
    usd: '$20 - $40/day',
    icon: PiggyBank,
    color: 'var(--color-accent)',
    description:
      'The absolute minimum for a comfortable trip. Hostel dorms, street food only, walking everywhere, free activities. Requires discipline but is entirely achievable.',
    accommodation: 'Hostel dorms (80-150 MAD) or Couchsurfing (free)',
    food: 'Street food and market meals (60-100 MAD/day)',
    transport: 'Walking, shared grands taxis, local buses (20-50 MAD/day)',
    activities: 'Free activities: medina walks, beaches, hiking, mosque exteriors',
    bestFor: 'Backpackers, students, long-term travelers stretching their funds',
  },
  {
    tier: 'Budget Comfort',
    range: '400 - 800 MAD/day',
    usd: '$40 - $80/day',
    icon: Wallet,
    color: 'var(--color-gold)',
    description:
      'The sweet spot for most budget travelers. You eat well, sleep comfortably, and do not miss key experiences. This is where Morocco offers extraordinary value.',
    accommodation: 'Budget riads (200-400 MAD) or private hostel rooms (150-250 MAD)',
    food: 'Mix of street food and sit-down restaurants (100-200 MAD/day)',
    transport: 'CTM/Supratours buses, 2nd class trains, occasional taxis (50-150 MAD/day)',
    activities: 'Paid attractions, occasional guided tours (50-200 MAD/day)',
    bestFor: 'Couples, solo travelers wanting comfort, first-time visitors to Morocco',
  },
  {
    tier: 'Mid-Range',
    range: '800 - 1,500 MAD/day',
    usd: '$80 - $150/day',
    icon: Star,
    color: 'var(--color-primary)',
    description:
      'A very comfortable experience that would cost 3-4x more in Europe. Beautiful riads, excellent restaurants, private transport when needed. Morocco at its best without breaking the bank.',
    accommodation: 'Mid-range riads with breakfast (400-800 MAD) or boutique hotels',
    food: 'Restaurants for most meals, occasional splurge dinners (200-400 MAD/day)',
    transport: '1st class trains, private taxis, occasional car rental (100-300 MAD/day)',
    activities: 'All attractions, guided tours, cooking classes (100-400 MAD/day)',
    bestFor: 'Families, travelers wanting a treat, those with 1-2 weeks vacation time',
  },
];

const accommodationOptions = [
  {
    type: 'Hostel Dorms',
    priceRange: '80 - 150 MAD/night',
    usd: '$8 - $15',
    icon: Users,
    description:
      'Morocco has a growing network of excellent hostels, especially in Marrakech, Fes, Essaouira, and Chefchaouen. Most include free breakfast, WiFi, and rooftop terraces. Dorms typically have 4-8 beds with shared bathrooms.',
    tips: [
      'Book on Hostelworld or Booking.com for the best rates and reviews',
      'Many hostels include a traditional Moroccan breakfast (bread, jam, eggs, coffee)',
      'Rooftop terraces are common and perfect for socializing with other travelers',
      'Bring a padlock for lockers and earplugs for early morning calls to prayer',
      'Hostels in Marrakech medina can be hard to find - ask your host for directions via WhatsApp',
    ],
  },
  {
    type: 'Budget Riads',
    priceRange: '200 - 400 MAD/night',
    usd: '$20 - $40',
    icon: Building,
    description:
      'A riad is a traditional Moroccan guesthouse built around a central courtyard. Even budget riads offer a uniquely Moroccan experience with tiled courtyards, ornate doors, and home-cooked breakfast. This is the best value accommodation in Morocco.',
    tips: [
      'Always negotiate for stays of 3+ nights - most owners will give 10-20% off',
      'Breakfast is almost always included and is often the best meal of the day',
      'Book direct via WhatsApp after finding them on Booking.com for 10-15% savings',
      'Riads in side alleys off the main tourist paths are cheaper and quieter',
      'Ask about airport or bus station pickup - many riads offer free or cheap transfers',
    ],
  },
  {
    type: 'Couchsurfing',
    priceRange: 'Free',
    usd: '$0',
    icon: Users,
    description:
      'Couchsurfing is alive and well in Morocco. Many young Moroccans host travelers enthusiastically and love sharing their culture. It is the single best way to experience authentic Moroccan hospitality, home-cooked food, and local life.',
    tips: [
      'Create a detailed profile with photos and references before requesting hosts',
      'Moroccan hosts often insist on cooking for you - accept graciously, it is their culture',
      'Offer to bring tea, pastries, or fruit from the market as a thank-you gesture',
      'Be flexible with sleeping arrangements - you may sleep on a salon floor with blankets',
      'Female travelers should read host reviews carefully and consider female-only hosts',
    ],
  },
  {
    type: 'Camping',
    priceRange: 'Free - 50 MAD/night',
    usd: '$0 - $5',
    icon: Tent,
    description:
      'Wild camping is technically legal in Morocco outside of towns and private land. Established campgrounds exist near beaches, national parks, and trekking routes. Popular with overlanders and long-term budget travelers.',
    tips: [
      'Beach camping is common along the Atlantic coast south of Essaouira',
      'Mountain refuges in the High Atlas cost 50-100 MAD per night for trekkers',
      'Campgrounds near popular beaches charge 30-50 MAD per tent per night',
      'Always ask permission if camping near a village - locals are usually welcoming',
      'Bring a warm sleeping bag for mountains and desert - temperatures drop sharply at night',
    ],
  },
  {
    type: 'Airbnb & Apartments',
    priceRange: '150 - 500 MAD/night',
    usd: '$15 - $50',
    icon: Home,
    description:
      'Entire apartments on Airbnb can be excellent value for couples or small groups, especially for stays of a week or more. Having a kitchen saves significant money on food. Many listings are riad-style homes in the medina.',
    tips: [
      'Apartments with kitchens let you shop at local markets and cook, saving 50% on food',
      'Weekly and monthly discounts are common - always check for longer stay rates',
      'Shared between 2-4 travelers, apartments often beat hostel prices per person',
      'Look for listings in the Ville Nouvelle (new city) for modern amenities at lower prices',
      'Negotiate directly with hosts for stays over a week - most will offer a discount',
    ],
  },
  {
    type: 'Negotiate Longer Stays',
    priceRange: 'Save 15-30%',
    usd: 'Varies',
    icon: HandCoins,
    description:
      'The single most effective way to save on accommodation in Morocco is to negotiate rates for longer stays. Virtually every riad, guesthouse, and even some hostels will reduce their nightly rate if you commit to 3 or more nights.',
    tips: [
      'Ask directly: "What is the price for one week?" - the answer is almost always lower per night',
      'Off-season (June-August in inland cities) gives you the most negotiating power',
      'Offer to pay cash upfront for a better rate - card fees eat into owner profits',
      'If you love a place, ask about monthly rates - some riads drop to 100-150 MAD/night for a month',
      'Book one night first, then negotiate in person once you have met the owner',
    ],
  },
];

const streetFoodGuide = [
  {
    name: 'Msemen',
    description: 'Flaky, square-shaped flatbread served with honey, cheese, or Laughing Cow. The quintessential Moroccan breakfast item, found at every street corner in the morning.',
    price: '2 - 5 MAD',
    where: 'Street stalls and bakeries, especially mornings',
  },
  {
    name: 'Harira',
    description: 'Rich tomato and lentil soup with chickpeas, herbs, and a squeeze of lemon. Filling, nutritious, and served with dates and chebakia pastries during Ramadan.',
    price: '5 - 10 MAD',
    where: 'Street stalls and small restaurants, year-round',
  },
  {
    name: 'Bocadillo',
    description: 'A Moroccan baguette sandwich filled with tuna, sardines, kefta, or chicken with fries stuffed inside. The ultimate cheap, filling lunch found near every bus station.',
    price: '10 - 20 MAD',
    where: 'Sandwich shops near bus stations and medina entrances',
  },
  {
    name: 'Brochettes',
    description: 'Grilled meat skewers made with lamb, chicken, or kefta (minced beef), served with bread and harissa. A protein-packed meal for very little money.',
    price: '10 - 25 MAD',
    where: 'Grills in market areas and night food stalls',
  },
  {
    name: 'Sfenj',
    description: 'Moroccan donuts - light, airy rings of fried dough. Eaten plain or dipped in sugar. The perfect morning snack with a glass of mint tea.',
    price: '1 - 2 MAD each',
    where: 'Morning street stalls and bakeries throughout the country',
  },
  {
    name: 'Snail Soup (Babouche)',
    description: 'A uniquely Moroccan street snack. Small snails in a fragrant, peppery broth served in a bowl with toothpicks. Surprisingly delicious and a rite of passage for adventurous eaters.',
    price: '5 - 10 MAD',
    where: 'Jemaa el-Fnaa in Marrakech and Fes medina',
  },
  {
    name: 'Makouda',
    description: 'Deep-fried potato balls spiced with cumin and herbs. Often tucked into a baguette with harissa sauce for a cheap, satisfying snack.',
    price: '3 - 8 MAD',
    where: 'Street stalls in medinas and near bus stations',
  },
  {
    name: 'Bissara',
    description: 'Thick fava bean soup drizzled with olive oil and cumin. A hearty breakfast or lunch staple in northern Morocco, especially Chefchaouen and Fes.',
    price: '5 - 10 MAD',
    where: 'Small restaurants and street stalls, especially in the north',
  },
  {
    name: 'Fresh Orange Juice',
    description: 'Morocco is famous for its freshly squeezed orange juice. Stalls with pyramids of oranges line the streets. A glass of pure, fresh OJ costs almost nothing.',
    price: '5 - 10 MAD',
    where: 'Juice stalls in every city, especially Jemaa el-Fnaa and Fes medina',
  },
  {
    name: 'Khobz (Bread)',
    description: 'Round Moroccan bread baked in communal ovens. Every meal in Morocco starts with bread, and you can buy a fresh loaf for practically nothing.',
    price: '1 - 3 MAD',
    where: 'Bakeries (fran) in every neighborhood',
  },
];

const budgetRestaurants = [
  {
    name: 'Tagine (Chicken or Vegetable)',
    description: 'The iconic Moroccan dish, slow-cooked in a conical clay pot. Chicken with preserved lemons, vegetable with seasonal produce, or lamb with prunes and almonds.',
    price: '30 - 60 MAD',
    where: 'Local restaurants 2-3 streets away from tourist centers',
  },
  {
    name: 'Couscous Friday Special',
    description: 'Every Friday, Moroccan families and restaurants serve couscous with seven vegetables and meat. This is a cultural institution and budget travelers should always eat couscous on Fridays.',
    price: '25 - 50 MAD',
    where: 'Local restaurants on Fridays (the traditional couscous day)',
  },
  {
    name: 'Kefta Tagine with Egg',
    description: 'Spiced meatballs in tomato sauce with eggs cracked on top, served bubbling hot with bread. One of the cheapest and most satisfying restaurant meals in Morocco.',
    price: '25 - 45 MAD',
    where: 'Small restaurants throughout medinas',
  },
  {
    name: 'Fried Fish Platter',
    description: 'A generous plate of battered and fried sardines, shrimp, calamari, and sole. Coastal cities offer extraordinary fresh fish at prices that would be impossible in Europe.',
    price: '25 - 50 MAD',
    where: 'Essaouira harbor, Casablanca port area, Tangier fish market',
  },
  {
    name: 'Tanjia (Marrakech Specialty)',
    description: 'Slow-cooked meat in a clay urn, traditionally prepared by bachelors and cooked in the embers of a hammam furnace. Rich, tender, and unique to Marrakech.',
    price: '40 - 70 MAD',
    where: 'Local eateries in Marrakech medina - ask for "tanjia"',
  },
  {
    name: 'Pastilla',
    description: 'Flaky phyllo pastry filled with pigeon or chicken, almonds, and cinnamon. A sweet-savory masterpiece. The seafood version in Essaouira is equally impressive.',
    price: '30 - 60 MAD',
    where: 'Fes restaurants (the birthplace of pastilla) and Marrakech',
  },
];

const selfCateringTips = [
  {
    tip: 'Shop at local souks and markets',
    detail: 'Fresh fruit, vegetables, olives, cheese, and bread from market stalls cost a fraction of restaurant prices. A full bag of groceries for 2-3 meals costs 30-50 MAD.',
  },
  {
    tip: 'Buy bread daily from bakeries',
    detail: 'A fresh round loaf of khobz costs 1-3 MAD and is the foundation of every Moroccan meal. Buy it warm in the morning and pair with cheese, olives, and fruit.',
  },
  {
    tip: 'Stock up on olives, cheese, and fruit',
    detail: 'Moroccan olives (5-10 MAD per handful), Laughing Cow cheese (10 MAD), seasonal fruit (oranges, figs, dates at 5-15 MAD per kilo) make excellent picnic lunches.',
  },
  {
    tip: 'Cook at hostels with communal kitchens',
    detail: 'Many hostels have kitchens. Buy tagine ingredients at the souk (chicken, vegetables, spices) for 20-30 MAD and cook a meal that would cost 60+ MAD in a restaurant.',
  },
  {
    tip: 'Use your riad breakfast wisely',
    detail: 'Most riads include a generous breakfast of bread, jam, eggs, juice, and coffee. Eat well at breakfast, have a light market lunch, and save your restaurant budget for dinner.',
  },
  {
    tip: 'Drink mint tea instead of coffee',
    detail: 'Mint tea (atay) costs 5-10 MAD versus 15-30 MAD for espresso. It is the national drink, offered free in many shops, and a much more authentic Moroccan experience.',
  },
];

const transportOptions = [
  {
    mode: 'CTM & Supratours Buses',
    icon: Bus,
    cost: '50 - 200 MAD per trip',
    description:
      'The most reliable intercity buses in Morocco. CTM and Supratours (run by ONCF railway) have fixed schedules, air conditioning, assigned seats, and luggage storage. Book online or at stations 1-2 days ahead.',
    savings: [
      'Book at ctm.ma or supratours.ma 2+ days in advance for guaranteed seats',
      'Supratours buses connect directly to train stations - useful for destinations trains do not reach',
      'Luggage stored below at no extra charge, unlike some private bus companies',
      'Night buses save a hotel night: Marrakech to Fes overnight costs 180-220 MAD',
      'CTM buses have clean onboard toilets and stop for bathroom breaks on long routes',
    ],
  },
  {
    mode: 'Trains (ONCF)',
    icon: Train,
    cost: '80 - 200 MAD (2nd class)',
    description:
      'Morocco has a solid rail network connecting Tangier, Rabat, Casablanca, Marrakech, Fes, and Meknes. Second class is comfortable and budget-friendly. The Al Boraq high-speed train does Tangier to Casablanca in 2 hours 10 minutes.',
    savings: [
      'Second class is perfectly comfortable with assigned seats - save the 30-40% premium on first class',
      'Buy tickets at the station or oncf.ma - prices are fixed and the same everywhere',
      'Al Boraq high-speed train: Tangier to Casablanca in 2h10 vs 4h45 on conventional trains',
      'Marrakech to Fes by train takes 7 hours - consider the overnight bus instead to save a hotel night',
      'Student discounts available with a valid international student card (ISIC)',
    ],
  },
  {
    mode: 'Grands Taxis (Shared)',
    icon: Users,
    cost: '20 - 80 MAD per seat',
    description:
      'Shared Mercedes sedans running fixed routes between cities. They depart when full with 6 passengers. The cheapest intercity option and an authentic Moroccan experience. Cramped but fast.',
    savings: [
      'Always the cheapest way between nearby cities - Fes to Meknes is just 25-30 MAD',
      'Pay for 2 seats if you want the front seat to yourself - still cheaper than a bus',
      'No fixed schedule - they leave when full, which usually means minimal waiting during the day',
      'Depart from designated stations (ask locals for "station de grands taxis")',
      'Negotiate the price before getting in and have exact change ready',
    ],
  },
  {
    mode: 'City Buses & Trams',
    icon: Bus,
    cost: '4 - 7 MAD per ride',
    description:
      'Every major city has local bus networks. Extremely cheap but can be crowded. Casablanca has a modern tram system. Marrakech and Rabat have newer bus fleets with fixed routes.',
    savings: [
      'Casablanca tram costs 6 MAD per ride and covers all main areas including the Hassan II Mosque',
      'Pay the conductor on the bus - no need for a card or ticket in most cities',
      'Ask locals or your hostel which bus number goes to your destination',
      'Hold belongings close in crowded buses, especially during rush hour',
      'Marrakech bus line 1 connects the medina to Gueliz (new city) for 4 MAD',
    ],
  },
  {
    mode: 'Walking',
    icon: Footprints,
    cost: 'Free',
    description:
      'The best way to explore Moroccan cities. Medinas are car-free zones designed for walking. Most attractions within a city are within walking distance of each other. Save your transport budget for intercity travel.',
    savings: [
      'Medinas are compact and car-free - taxis are unnecessary inside the old city walls',
      'Walking lets you discover hidden gems, quiet squares, and local life that you miss in a taxi',
      'Download offline Google Maps before arriving - GPS works without data for navigation',
      'Wear comfortable shoes with good grip - medina streets are narrow, uneven, and sometimes slippery',
      'In Marrakech, you can walk from Jemaa el-Fnaa to Bahia Palace in 10 minutes',
    ],
  },
  {
    mode: 'Budget Flights from Europe',
    icon: Plane,
    cost: '200 - 400 MAD ($20-40) one-way',
    description:
      'Ryanair, EasyJet, and Transavia fly to Marrakech, Fes, Tangier, and other Moroccan cities from European hubs for remarkably low fares. Book 2-3 months ahead for the best prices.',
    savings: [
      'Ryanair flies London to Marrakech from 200 MAD ($20) if booked 2+ months ahead',
      'Carry-on only to avoid Ryanair checked bag fees of 200-400 MAD each way',
      'Fly into one city and out of another to avoid backtracking (e.g., arrive Marrakech, depart Fes)',
      'Tuesday and Wednesday flights are typically cheapest across all airlines',
      'Set Google Flights price alerts for your preferred routes to catch flash sales',
    ],
  },
];

const freeAndCheapActivities = [
  {
    category: 'Walking Medinas',
    icon: Footprints,
    cost: 'Free',
    description:
      'Every Moroccan city has an old walled medina with narrow alleyways, bustling souks, and centuries of history. You could spend days wandering and never run out of things to see.',
    activities: [
      'Marrakech medina and souks - the largest and most vibrant in Morocco',
      'Fes el-Bali - the world\'s largest car-free urban zone, a UNESCO World Heritage Site',
      'Chefchaouen - the famous blue-painted city in the Rif Mountains',
      'Essaouira medina - compact, artistic, and wrapped in 18th-century ramparts',
      'Tangier kasbah and medina - perched above the Strait of Gibraltar',
      'Tetouan medina - an often-overlooked UNESCO gem with Andalusian influences',
    ],
  },
  {
    category: 'Beaches',
    icon: Waves,
    cost: 'Free',
    description:
      'Morocco has over 1,800 km of Atlantic and Mediterranean coastline. Public beaches are free and range from wild surf breaks to calm swimming coves.',
    activities: [
      'Essaouira beach - wide, windy, and perfect for walking at sunset',
      'Legzira Beach near Sidi Ifni - dramatic red stone arches over the sand',
      'Taghazout - world-class surfing village north of Agadir',
      'Asilah - charming beach town with a painted medina',
      'Plage Blanche - one of Africa\'s longest beaches, near Guelmim',
      'Saidia - the "Blue Pearl" on the Mediterranean with calm, clear waters',
    ],
  },
  {
    category: 'Hiking',
    icon: Mountain,
    cost: 'Free (guide optional)',
    description:
      'Morocco offers world-class hiking from the High Atlas to the Rif Mountains to coastal cliffs. Many trails are free and accessible without a guide, though guides are recommended for serious mountain treks.',
    activities: [
      'Toubkal National Park - day hikes from Imlil into the High Atlas (guide recommended for summit)',
      'Akchour Waterfalls near Chefchaouen - a spectacular half-day hike (free)',
      'Ouzoud Falls - Morocco\'s tallest waterfalls, easy trails (10 MAD entry)',
      'Paradise Valley near Agadir - swim in natural rock pools (free)',
      'Dades and Todra Gorges - dramatic canyon walks in the south',
      'Rif Mountains from Chefchaouen - trails to the Spanish Mosque viewpoint (free)',
    ],
  },
  {
    category: 'Mosque Exteriors & Architecture',
    icon: Building,
    cost: 'Free',
    description:
      'Non-Muslims cannot enter most mosques in Morocco (the Hassan II Mosque in Casablanca is the notable exception), but the exteriors, gates, and surrounding gardens are architectural masterpieces worth visiting.',
    activities: [
      'Koutoubia Mosque and gardens in Marrakech - free to walk around',
      'Hassan Tower in Rabat - the unfinished 12th-century minaret with open plaza',
      'Bab Bou Jeloud (Blue Gate) in Fes - the iconic entrance to the medina',
      'Tin Mal Mosque in the High Atlas - rare non-Muslim accessible mosque (20 MAD)',
      'Mohammed V Mausoleum in Rabat - stunning tilework, free entry for all',
      'Madrasa Bou Inania in Fes - a former school open to visitors (20 MAD)',
    ],
  },
  {
    category: 'Parks & Gardens',
    icon: TreePine,
    cost: 'Free - 70 MAD',
    description:
      'Moroccan cities have beautiful public parks and gardens, many dating back centuries. They are perfect retreats from the intensity of the medinas.',
    activities: [
      'Menara Gardens in Marrakech - olive groves and a reflecting pool (free)',
      'Cyber Park in Marrakech - free WiFi, shaded paths, a peaceful escape (free)',
      'Jardin Jnan Sbil in Fes - a lush park just outside the medina walls (free)',
      'Andalusian Gardens in Rabat\'s Kasbah of the Udayas (free)',
      'Majorelle Garden in Marrakech - Yves Saint Laurent\'s garden (70 MAD, worth the splurge)',
      'Agdal Gardens in Marrakech - vast royal gardens open on Fridays and Sundays (free)',
    ],
  },
  {
    category: 'People-Watching & Squares',
    icon: Coffee,
    cost: 'Free - 15 MAD for tea',
    description:
      'Some of the best experiences in Morocco cost nothing. Sit in a cafe, order a mint tea for 10 MAD, and watch the world go by. This is how Moroccans spend their evenings and it is one of the finest pleasures of travel.',
    activities: [
      'Jemaa el-Fnaa in Marrakech - the world\'s greatest open-air theater, free to watch',
      'Petit Socco in Tangier - bohemian cafe culture where Kerouac and Bowles once sat',
      'Place Seffarine in Fes - metalworkers hammering copper in a medieval square',
      'Place Moulay Hassan in Essaouira - the social heart of the coastal town',
      'Rooftop cafes overlooking any medina - mint tea with a view for 10-15 MAD',
      'Sunset from the ramparts in Essaouira - spectacular and completely free',
    ],
  },
];

const hagglingGuide = {
  intro:
    'Haggling is not just expected in Moroccan souks, it is an integral part of the shopping experience. Sellers set initial prices 2-4x higher than what they expect to receive, and the negotiation process is a social ritual as much as a commercial transaction. Budget travelers who learn to haggle well will save hundreds of dirhams over a trip.',
  rules: [
    {
      rule: 'The 50-70% Rule',
      icon: BadgePercent,
      explanation:
        'Start your counter-offer at roughly 40-50% of the asking price. The final price should land somewhere between 50-70% of what was initially quoted. If the seller immediately accepts your first offer, you offered too much.',
    },
    {
      rule: 'Walk Away - The Most Powerful Move',
      icon: Footprints,
      explanation:
        'If you cannot reach a price you are happy with, politely say "la shukran" (no thank you) and start walking away. If the seller calls you back with a lower price, you have more negotiating room. If they let you go, you were already at their floor price.',
    },
    {
      rule: 'Show Interest, Not Desperation',
      icon: Lightbulb,
      explanation:
        'Browse casually and do not fixate on one item. If the seller knows you love something, your negotiating power drops. Pick up other items, compare shops, and let the seller work to close the deal.',
    },
    {
      rule: 'Know Approximate Values',
      icon: Calculator,
      explanation:
        'Research rough prices before shopping. Leather babouche slippers: 80-150 MAD. Small rug: 200-600 MAD. Argan oil (1 liter): 150-250 MAD. Ceramic tagine pot: 30-80 MAD. Knowing these ranges prevents you from overpaying even with haggling.',
    },
    {
      rule: 'Bundle Purchases',
      icon: ShoppingBag,
      explanation:
        'Buying multiple items from the same seller gives you leverage. "I will buy the slippers and the bag if you give me a good price for both." Sellers prefer volume sales and will discount more for larger purchases.',
    },
    {
      rule: 'Be Friendly and Have Fun',
      icon: Coffee,
      explanation:
        'Haggling in Morocco should be enjoyable, not adversarial. Smile, joke, accept the offer of mint tea. Sellers who like you will give better prices. If you feel stressed, you are taking it too seriously.',
    },
  ],
  doNotHaggle: [
    'Fixed-price shops (prix fixe) - many cooperatives and upscale shops have set prices, indicated by signs',
    'Supermarkets and pharmacies - prices are marked and non-negotiable',
    'Public transport fares - bus tickets and train tickets have fixed prices',
    'Restaurant bills - the menu price is the price (though tourist trap restaurants may try to inflate)',
    'Museum and attraction entrance fees - these are government-set prices',
    'Bread from bakeries - bread is a subsidized staple and costs 1-3 MAD everywhere',
  ],
};

const budgetByCity = [
  {
    city: 'Marrakech',
    level: 'Most Expensive',
    icon: Star,
    dailyBudget: '350 - 600 MAD',
    notes:
      'Morocco\'s most visited city has the highest prices. Tourist-area restaurants charge 2-3x local prices. Taxis try to overcharge. Jemaa el-Fnaa food stalls are expensive by Moroccan standards. The key is to eat and shop where locals do, a 5-minute walk from the main tourist areas.',
    tips: [
      'Eat lunch at a local restaurant in Bab Doukkala or Sidi Mimoun - same food, half the price',
      'Avoid restaurants on Jemaa el-Fnaa (overpriced) and the food stalls (aggressive + overpriced)',
      'Always insist on the taxi meter or negotiate the fare before getting in',
      'Buy souvenirs in Fes or Essaouira where identical items cost 30-50% less',
      'Bahia Palace (70 MAD) and Saadian Tombs (70 MAD) are the best-value paid attractions',
    ],
  },
  {
    city: 'Fes',
    level: 'Moderate',
    icon: Building,
    dailyBudget: '250 - 450 MAD',
    notes:
      'Fes is significantly cheaper than Marrakech despite being equally impressive. The medina is larger, the food is arguably better, and the tourist infrastructure is less aggressive. Accommodation and restaurant prices are 20-30% lower than Marrakech.',
    tips: [
      'The tannery viewing terraces are free if you buy mint tea (10-15 MAD) from the shops above',
      'Bou Inania Madrasa (20 MAD) is one of Morocco\'s finest buildings and a bargain',
      'Eat at local restaurants in Rcif or Ain Azliten for genuine Fassi food at local prices',
      'Get deliberately lost in the medina - the best discoveries come from unplanned wandering',
      'Merenid Tombs viewpoint at sunset is free and offers the best panorama of the city',
    ],
  },
  {
    city: 'Essaouira',
    level: 'Moderate',
    icon: Waves,
    dailyBudget: '250 - 450 MAD',
    notes:
      'A relaxed coastal town that is cheaper than Marrakech but slightly pricier than Fes. The compact medina means you walk everywhere. Fresh seafood at the harbor is outstanding value. The biggest expense is wind-related activities like surfing and kitesurfing.',
    tips: [
      'Fresh grilled fish at the harbor costs 25-50 MAD for a generous plate with bread and salad',
      'The entire medina, ramparts, and beach are free to explore',
      'Surf board rental at Sidi Kaouki is 100-150 MAD per day with lessons from 200 MAD',
      'Buy argan oil here or in Agadir - it is produced locally and costs less than in Marrakech',
      'The Gnaoua World Music Festival in June has many free outdoor performances',
    ],
  },
  {
    city: 'Chefchaouen',
    level: 'Budget-Friendly',
    icon: Camera,
    dailyBudget: '200 - 350 MAD',
    notes:
      'The blue city is one of Morocco\'s cheapest destinations. Accommodation, food, and activities are all very affordable. The town is small enough to walk everywhere and the main attraction (the blue streets themselves) is completely free.',
    tips: [
      'Budget riads and guesthouses start at 150-200 MAD for a private room with breakfast',
      'The hike to the Spanish Mosque for sunset is free and unmissable',
      'Akchour Waterfalls day trip costs just 30-50 MAD for shared transport',
      'Ras el-Maa waterfall on the edge of town is free and a lovely spot for a break',
      'Restaurants on the main plaza cost 10-20% more than those one street back',
    ],
  },
  {
    city: 'Rabat',
    level: 'Moderate',
    icon: Building,
    dailyBudget: '250 - 450 MAD',
    notes:
      'The capital city is often overlooked by tourists, which keeps prices reasonable. It has significant attractions, good transport links, and a relaxed atmosphere. The Kasbah of the Udayas is one of Morocco\'s most beautiful sights and it is free.',
    tips: [
      'Kasbah of the Udayas, Hassan Tower, and Mohammed V Mausoleum are all free',
      'The medina is smaller and less overwhelming than Marrakech or Fes, with fair fixed prices',
      'The Bouregreg river promenade is perfect for a sunset walk (free)',
      'Chellah ruins and gardens cost 70 MAD and are worth every dirham',
      'Rabat is a great base for day trips to Meknes and Volubilis by train (40-60 MAD each way)',
    ],
  },
  {
    city: 'Small Towns & Rural',
    level: 'Cheapest',
    icon: Mountain,
    dailyBudget: '150 - 300 MAD',
    notes:
      'Small towns like Moulay Idriss, Azrou, Ifrane, Taroudant, and Sefrou offer the cheapest travel in Morocco. Accommodation can be as low as 100 MAD, meals as low as 15-25 MAD, and the experiences (hiking, markets, local life) are entirely free.',
    tips: [
      'Moulay Idriss Zerhoun near Meknes has budget guesthouses from 100-150 MAD with breakfast',
      'Taroudant is called "Little Marrakech" but costs half as much',
      'Azrou and Ifrane in the Middle Atlas are cool retreats with very low prices',
      'Rural weekly souks (market days) are cultural experiences and everything is cheap',
      'Homestays in Berber villages cost 100-200 MAD including dinner and breakfast',
    ],
  },
];

const moneySavingTips = [
  {
    tip: 'Use ATMs, Not Exchange Bureaus',
    detail: 'ATMs give the best exchange rate. Withdraw larger amounts to minimize per-transaction fees. BMCE and Attijariwafa banks have the most widespread ATMs. Exchange bureaus in tourist areas charge 5-10% commissions.',
    icon: CreditCard,
  },
  {
    tip: 'Avoid Tourist Restaurants',
    detail: 'Restaurants facing main squares and tourist paths charge 50-100% more than identical places one or two streets away. Look for restaurants full of Moroccan families - that is where the food is best and cheapest.',
    icon: UtensilsCrossed,
  },
  {
    tip: 'Eat Where Locals Eat',
    detail: 'Follow the locals. If a small restaurant is packed with Moroccan workers at lunch, the food is good and cheap. Lunch specials at local restaurants (plat du jour) offer soup, tagine, bread, and tea for 30-50 MAD.',
    icon: Users,
  },
  {
    tip: 'Travel Off-Season',
    detail: 'Visiting in June-August (hot inland), November, or January-February means lower prices everywhere. Accommodation drops 20-40%, fewer crowds at attractions, and better haggling power in souks. The coast stays pleasant year-round.',
    icon: CalendarDays,
  },
  {
    tip: 'Carry Small Bills and Coins',
    detail: 'Break large bills at supermarkets or hotels. Taxi drivers, street vendors, and small shops often claim they have no change for 200 MAD notes. Carrying 10, 20, and 50 MAD bills makes every transaction smoother.',
    icon: Banknote,
  },
  {
    tip: 'Book Direct for Accommodation',
    detail: 'Find a riad on Booking.com, then contact them directly via WhatsApp to book. Most will offer 10-15% off the listed price since they avoid paying Booking.com\'s commission. Always negotiate for stays of 3+ nights.',
    icon: Bed,
  },
  {
    tip: 'Master the Mint Tea Culture',
    detail: 'Mint tea costs 5-10 MAD and is often served free in shops and riads. It is the social lubricant of Morocco. A glass of tea on a rooftop terrace with a view is one of the best experiences in the country, and it costs almost nothing.',
    icon: Coffee,
  },
  {
    tip: 'Walk Everywhere in Medinas',
    detail: 'Medinas are designed for walking. Taking a taxi to a medina destination is pointless since taxis cannot enter the narrow streets anyway. You will walk to the taxi drop-off point regardless, so save the fare and enjoy the journey.',
    icon: Footprints,
  },
  {
    tip: 'Share Desert Tours',
    detail: 'Never book a private desert tour. Shared 3-day Sahara tours from Marrakech cost 400-700 MAD per person versus 2,000-4,000 MAD for a private tour. Hostels organize group tours daily and the social experience is better anyway.',
    icon: Sun,
  },
  {
    tip: 'Buy a Local SIM Card Immediately',
    detail: 'A Moroccan SIM with 20GB data costs 50-100 MAD at the airport. This saves you from expensive international roaming and gives you Google Maps, WhatsApp for local communication, and the ability to check prices online before haggling.',
    icon: Globe,
  },
  {
    tip: 'Negotiate Grand Taxi Fares',
    detail: 'Shared grands taxis have standard per-seat fares but drivers sometimes try to charge tourists more. Ask another passenger or your hostel what the standard fare is for your route, then insist on paying the correct amount.',
    icon: HandCoins,
  },
  {
    tip: 'Skip the Guided Medina Tours',
    detail: 'Official guides charge 300-500 MAD per half day. Unless you specifically want historical commentary, the medinas are best explored on your own. Get lost, use Google Maps to find your way back, and discover things a guide would never show you.',
    icon: Compass,
  },
  {
    tip: 'Eat a Big Riad Breakfast',
    detail: 'Most riad stays include a generous breakfast. Eat well in the morning (bread, eggs, jam, fruit, juice, coffee) and you can skip lunch or have a light market snack for 10-20 MAD. This effectively gives you one free meal per day.',
    icon: Utensils,
  },
  {
    tip: 'Use the Petit Taxi Meter',
    detail: 'Always insist on the meter (compteur) before getting in a petit taxi. If the driver refuses, find another one. Meter rides cost 7-20 MAD in most cities. Without the meter, the same ride will be quoted at 30-50 MAD.',
    icon: Calculator,
  },
  {
    tip: 'Buy Spices at Regular Markets',
    detail: 'Tourist spice shops charge 50-100 MAD for small bags of cumin, ras el hanout, or saffron. The same spices at a regular market or supermarket cost 10-30 MAD. Marjane and Acima supermarkets have fixed, low prices on all spices.',
    icon: ShoppingBag,
  },
  {
    tip: 'Visit Free Attractions First',
    detail: 'Morocco is full of free experiences: medina walks, beaches, mosque exteriors, public parks, market browsing, mountain hikes. Do all the free things first and save your budget for the few paid attractions truly worth the entry fee.',
    icon: Tag,
  },
  {
    tip: 'Take Night Buses to Save a Hotel Night',
    detail: 'CTM and Supratours run overnight buses on major routes. The Marrakech to Fes night bus (180-220 MAD) saves you a hotel night worth 150-400 MAD. You arrive in the morning ready to explore.',
    icon: Clock,
  },
  {
    tip: 'Carry a Reusable Water Bottle',
    detail: 'Buying 1.5L water bottles (5-7 MAD each) adds up to 30-50 MAD per day. Many hostels and riads offer free filtered water refills. A reusable bottle with a filter saves money and reduces plastic waste.',
    icon: Waves,
  },
  {
    tip: 'Learn Basic French and Arabic Phrases',
    detail: 'Speaking even a few words of French or Darija (Moroccan Arabic) gets you better prices and warmer interactions. "Bshhal?" (how much?), "Ghali bezef" (too expensive), and "Merci" go a long way.',
    icon: Globe,
  },
  {
    tip: 'Compare Prices Before Buying',
    detail: 'Never buy from the first shop you visit. Walk through the entire souk, compare prices for similar items, and then return to buy. Prices for the same item can vary 50-100% between shops in the same medina.',
    icon: TrendingDown,
  },
];

const sevenDayBudgetItinerary = [
  {
    day: 1,
    city: 'Marrakech',
    activities: 'Arrive and check into hostel. Walk to Jemaa el-Fnaa (free). Explore the souks (free). Dinner at a local restaurant off the main square.',
    accommodation: 'Hostel dorm: 120 MAD',
    food: 'Street lunch 25 MAD + dinner 45 MAD = 70 MAD',
    transport: 'Airport to medina petit taxi: 70 MAD',
    activities_cost: 'Free',
    total: '260 MAD',
  },
  {
    day: 2,
    city: 'Marrakech',
    activities: 'Bahia Palace (70 MAD). Walk through the Mellah and spice market (free). Majorelle Garden (70 MAD). Sunset from a rooftop cafe (mint tea 15 MAD).',
    accommodation: 'Hostel dorm: 120 MAD',
    food: 'Riad breakfast (free) + market lunch 30 MAD + dinner 50 MAD = 80 MAD',
    transport: 'Walking: 0 MAD',
    activities_cost: '155 MAD',
    total: '355 MAD',
  },
  {
    day: 3,
    city: 'Essaouira',
    activities: 'Morning Supratours bus to Essaouira. Walk the ramparts (free). Fish lunch at the harbor. Beach walk. Evening medina exploration.',
    accommodation: 'Budget riad: 200 MAD',
    food: 'Breakfast (free) + fish lunch 35 MAD + dinner 50 MAD = 85 MAD',
    transport: 'Supratours bus: 80 MAD',
    activities_cost: 'Free',
    total: '365 MAD',
  },
  {
    day: 4,
    city: 'Essaouira',
    activities: 'Morning surf lesson (200 MAD) or free beach day. Lunch at the harbor. Afternoon art gallery walk (free). Sunset on the ramparts (free).',
    accommodation: 'Budget riad: 200 MAD',
    food: 'Breakfast (free) + lunch 40 MAD + dinner 50 MAD = 90 MAD',
    transport: 'Walking: 0 MAD',
    activities_cost: '200 MAD (surf) or 0 MAD (beach)',
    total: '490 MAD (with surf) or 290 MAD (without)',
  },
  {
    day: 5,
    city: 'Travel to Fes',
    activities: 'Morning bus to Marrakech, transfer to Fes (long travel day). Arrive evening. Quick medina walk and dinner near Bab Bou Jeloud.',
    accommodation: 'Hostel dorm: 100 MAD',
    food: 'Breakfast (free) + bus snacks 20 MAD + dinner 40 MAD = 60 MAD',
    transport: 'Essaouira to Fes bus: 220 MAD',
    activities_cost: 'Free',
    total: '380 MAD',
  },
  {
    day: 6,
    city: 'Fes',
    activities: 'Full day in Fes medina. Tanneries (free from shop rooftops). Bou Inania Madrasa (20 MAD). Merenid Tombs sunset (free). Dinner in medina.',
    accommodation: 'Hostel dorm: 100 MAD',
    food: 'Breakfast (free) + lunch 35 MAD + dinner 45 MAD = 80 MAD',
    transport: 'Walking: 0 MAD',
    activities_cost: '20 MAD',
    total: '200 MAD',
  },
  {
    day: 7,
    city: 'Fes / Departure',
    activities: 'Morning pottery quarter walk (free). Last souk shopping. Depart from Fes airport or continue journey.',
    accommodation: 'N/A (departure day)',
    food: 'Breakfast (free) + lunch 30 MAD = 30 MAD',
    transport: 'Taxi to airport: 50 MAD',
    activities_cost: 'Free',
    total: '80 MAD',
  },
];

const fourteenDayShoestringItinerary = [
  { days: '1-3', city: 'Marrakech', budget: '250-350 MAD/day', highlights: 'Free medina walks, Jemaa el-Fnaa people-watching, street food, one splurge on Bahia Palace (70 MAD). Cook at hostel one evening.' },
  { days: '4-5', city: 'Essaouira', budget: '200-300 MAD/day', highlights: 'Supratours bus (80 MAD). Free beach days, rampart walks, harbor fish lunch (35 MAD). Budget riad with breakfast.' },
  { days: '6-8', city: 'Fes', budget: '200-300 MAD/day', highlights: 'Bus or train from coast. Three full days in the medina (free). Tanneries, Bou Inania Madrasa (20 MAD). Cook at hostel.' },
  { days: '9-10', city: 'Chefchaouen', budget: '180-250 MAD/day', highlights: 'CTM bus from Fes (75 MAD). Photograph the blue streets (free). Hike to Spanish Mosque (free). Akchour Waterfalls day trip (30 MAD transport).' },
  { days: '11-12', city: 'Tangier', budget: '200-300 MAD/day', highlights: 'Bus from Chefchaouen (70 MAD). Kasbah and medina walk (free). Cafe Hafa tea (15 MAD). Cape Spartel excursion (shared taxi 30 MAD).' },
  { days: '13-14', city: 'Rabat', budget: '200-300 MAD/day', highlights: 'Train from Tangier (100-150 MAD). Kasbah of Udayas (free). Hassan Tower (free). Chellah ruins (70 MAD). Depart from Rabat or Casablanca.' },
];

const splurgeWorthySplurges = [
  {
    splurge: 'One Night in a Beautiful Riad',
    cost: '500 - 800 MAD',
    why: 'After days in hostel dorms, treat yourself to a stunning riad with tiled courtyard, rooftop terrace, and multi-course breakfast. The architecture alone is worth it. Fes has the best value luxury riads.',
  },
  {
    splurge: 'Sahara Desert Overnight',
    cost: '400 - 700 MAD (shared tour)',
    why: 'A night under the stars in the Sahara is a once-in-a-lifetime experience. Shared tours from Marrakech include transport, meals, camel ride, and desert camp. The sunrise over the dunes is unforgettable.',
  },
  {
    splurge: 'Traditional Hammam Experience',
    cost: '50 - 200 MAD',
    why: 'A local hammam (public bath) costs just 15-20 MAD plus 50 MAD for a scrub. Tourist hammams charge 150-300 MAD but offer a more comfortable experience. Either way, it is an essential Moroccan ritual.',
  },
  {
    splurge: 'Cooking Class',
    cost: '200 - 400 MAD',
    why: 'Learn to make tagine, couscous, and pastilla from a local chef. Most classes include a market visit and a full meal. You will recreate these dishes for years, making it the best investment of your trip.',
  },
  {
    splurge: 'Hassan II Mosque Interior Tour',
    cost: '130 MAD',
    why: 'The only major mosque in Morocco open to non-Muslims, and one of the largest in the world. The interior is breathtaking - hand-carved marble, cedarwood ceilings, and a retractable roof over the Atlantic Ocean.',
  },
  {
    splurge: 'Fresh Seafood Feast in Essaouira',
    cost: '100 - 200 MAD',
    why: 'Order the mixed grill plate at one of the harbor stalls: lobster, prawns, fish, calamari, and crab with bread and salad. In Europe, this meal costs 50-80 EUR. In Essaouira, it is 100-200 MAD.',
  },
];

const commonBudgetMistakes = [
  {
    mistake: 'Buying Souvenirs in Marrakech First',
    explanation: 'Marrakech has the highest souvenir prices in Morocco. The same leather bags, ceramics, and textiles cost 30-50% less in Fes, Essaouira, or Meknes. Shop in smaller cities and buy in Marrakech only if you will not visit elsewhere.',
    savings: 'Save 30-50% on souvenirs',
  },
  {
    mistake: 'Eating at Jemaa el-Fnaa Food Stalls',
    explanation: 'The famous night food market in Marrakech is an experience, but the food is overpriced, often reheated, and aggressively hawked. Locals do not eat here. Walk 5 minutes in any direction for better food at half the price.',
    savings: 'Save 30-60 MAD per meal',
  },
  {
    mistake: 'Paying for Unsolicited Help',
    explanation: 'Someone "helps" you find your riad or offers to guide you through the medina, then demands 50-100 MAD. Politely refuse unsolicited help with "la shukran" (no thank you). Use Google Maps offline for navigation.',
    savings: 'Save 50-100 MAD per incident',
  },
  {
    mistake: 'Using Airport Currency Exchange',
    explanation: 'Airport exchange rates in Casablanca and Marrakech are 5-10% worse than ATM rates. Withdraw cash from an ATM at the airport instead. BMCE and CIH bank ATMs are located in all arrival halls.',
    savings: 'Save 5-10% on all cash exchanged',
  },
  {
    mistake: 'Booking Private Tours Instead of Shared',
    explanation: 'Private desert tours, city tours, and day trips cost 3-5x more than shared options. Hostels organize group tours daily and the social experience is better. A shared 3-day Sahara tour costs 400-700 MAD versus 2,000-4,000 MAD private.',
    savings: 'Save 1,000-3,000 MAD per tour',
  },
  {
    mistake: 'Not Negotiating Accommodation Rates',
    explanation: 'Many travelers pay the listed rate without asking for a discount. In Morocco, almost everything is negotiable, including riad prices. Ask for a better rate, especially for stays of 3+ nights or during off-season months.',
    savings: 'Save 15-30% on accommodation',
  },
  {
    mistake: 'Taking Taxis for Short Distances',
    explanation: 'Tourists often take taxis for distances easily covered on foot. In Marrakech, the walk from Jemaa el-Fnaa to the Bahia Palace takes 10 minutes. A taxi for this would cost 15-20 MAD and take nearly as long due to traffic and medina access.',
    savings: 'Save 100-200 MAD/week in taxi fares',
  },
  {
    mistake: 'Buying Bottled Water Constantly',
    explanation: 'At 5-7 MAD per 1.5L bottle, 3-4 bottles daily adds up to 20-30 MAD per day (140-210 MAD per week). Carry a reusable bottle and refill at hostels, riads, or buy large 5L jugs for 8-10 MAD from shops.',
    savings: 'Save 100-150 MAD/week',
  },
  {
    mistake: 'Visiting Only Major Cities',
    explanation: 'Major cities are the most expensive places in Morocco. A detour to small towns like Moulay Idriss, Sefrou, Azrou, or Taroudant reveals a more authentic Morocco at dramatically lower prices. Daily costs drop 30-50% outside major tourist centers.',
    savings: 'Save 30-50% on daily costs',
  },
  {
    mistake: 'Not Eating the Plat du Jour',
    explanation: 'Most local restaurants offer a daily set meal (plat du jour) at lunch for 25-40 MAD that includes soup, a main course, bread, and sometimes dessert. Ordering a la carte at the same restaurant costs 50-80 MAD for the same volume of food.',
    savings: 'Save 20-40 MAD per lunch',
  },
];

const faqItems = [
  {
    question: 'How much money do I need per day in Morocco?',
    answer: 'For a comfortable budget trip, plan on 400-600 MAD ($40-60) per day. Shoestring travelers can manage on 200-300 MAD ($20-30) per day with hostel dorms and street food. Mid-range travelers spending 800-1,500 MAD ($80-150) per day will enjoy beautiful riads and excellent restaurants.',
  },
  {
    question: 'Is Morocco cheaper than Europe?',
    answer: 'Significantly. Morocco costs roughly 30-50% of what you would spend in Spain, France, or Italy. A meal that costs 15-20 EUR in Europe costs 30-50 MAD ($3-5) in Morocco. A night in a beautiful riad costs what a basic hotel room costs in Paris.',
  },
  {
    question: 'Should I bring cash or use cards in Morocco?',
    answer: 'Bring a debit card for ATM withdrawals and carry cash for daily expenses. Morocco is primarily a cash economy, especially in medinas, souks, and small restaurants. Credit cards are accepted at upscale hotels and restaurants but rarely elsewhere. Withdraw larger amounts at ATMs to minimize fees.',
  },
  {
    question: 'What is the best currency to bring to Morocco?',
    answer: 'Euros or US dollars are easiest to exchange, but using your debit card at Moroccan ATMs gives the best rate. Moroccan dirham (MAD) is a closed currency - you cannot buy it outside Morocco and you should exchange any remaining MAD before leaving.',
  },
  {
    question: 'Is tipping expected in Morocco?',
    answer: 'Small tips are customary. Round up taxi fares to the nearest 5 MAD. Leave 5-10 MAD for a cafe or simple meal, 10-20 MAD for a restaurant meal. Tip tour guides 20-50 MAD per person. Do not feel pressured to tip more than feels comfortable.',
  },
  {
    question: 'When is the cheapest time to visit Morocco?',
    answer: 'November through February (excluding Christmas/New Year) and June through August are the cheapest months. Summer is hot inland but the coast stays pleasant. Winter is mild in coastal and southern cities. Shoulder season (March-May, September-October) offers the best balance of weather and prices.',
  },
  {
    question: 'Can I haggle everywhere in Morocco?',
    answer: 'No. Haggling is expected in souks, markets, and with taxi drivers (when no meter is used). It is not done in restaurants, supermarkets, pharmacies, or fixed-price shops. When in doubt, look for a posted price - if there is one, it is fixed.',
  },
  {
    question: 'Is it safe to eat street food in Morocco?',
    answer: 'Yes, street food in Morocco is generally safe. Choose stalls that are busy with locals (high turnover means fresh food), that cook food to order in front of you, and that look reasonably clean. Avoid pre-cooked food that has been sitting out. Start with simple items like msemen, harira, and brochettes.',
  },
  {
    question: 'How much should I budget for a 2-week trip?',
    answer: 'For a comfortable 14-day budget trip covering 4-5 cities, plan on 5,000-8,000 MAD ($500-800) excluding international flights. Shoestring travelers can do it for 3,000-5,000 MAD ($300-500). This includes accommodation, food, intercity transport, and activities.',
  },
  {
    question: 'Are there any hidden costs to watch out for?',
    answer: 'Watch for: tourist tax at some hotels (25-35 MAD per night), ATM fees (20-30 MAD per withdrawal), tipping (50-100 MAD per day adds up), entrance fees to palaces and museums (20-130 MAD each), and the cost of saying "yes" to helpful strangers (50-200 MAD in unsolicited guide fees).',
  },
];

export default function BudgetTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-jemaa-elfnaa-night.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/tips" className="hover:text-white transition-colors">
              Travel Tips
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Budget Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wallet className="w-4 h-4" />
            Complete Budget Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco on a Budget: How to
            <br className="hidden md:block" /> Travel Well for Less
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco delivers extraordinary experiences at a fraction of European prices.
            From 200 MAD a day, you can explore ancient medinas, eat legendary food,
            and sleep in traditional riads. Here is how to do it right.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Incredible Value for Travelers
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the best-value travel destinations in the world.
                A country with millennia of history, jaw-dropping architecture, world-class
                cuisine, and landscapes ranging from Saharan dunes to snow-capped mountains
                and Atlantic surf breaks &mdash; all accessible for a fraction of what similar
                experiences cost in Europe, the Middle East, or even much of Southeast Asia.
              </p>
              <p>
                The numbers speak for themselves: a night in a traditional riad with hand-carved
                plasterwork and a tiled courtyard costs 200&ndash;400 MAD ($20&ndash;40). A tagine
                that took hours to prepare costs 30&ndash;60 MAD ($3&ndash;6). A bus between major
                cities costs 50&ndash;200 MAD ($5&ndash;20). The Moroccan dirham stretches
                incredibly far, and the quality of what you get for your money is consistently
                impressive.
              </p>
              <p>
                This guide breaks down every aspect of budget travel in Morocco with real,
                current prices in Moroccan dirhams. Whether you are a shoestring backpacker
                on 200 MAD a day or a comfort-seeking traveler on 1,500 MAD a day, you will
                find that Morocco rewards budget-conscious travelers with experiences that
                money simply cannot buy in wealthier countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Budget Tiers */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Three Budget Tiers for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choose your comfort level. All three offer authentic, memorable experiences.
            Morocco rewards every budget tier generously.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {budgetTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <Icon className="w-6 h-6" style={{ color: tier.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tier.tier}
                      </h3>
                      <div className="text-sm font-bold" style={{ color: tier.color }}>
                        {tier.range}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-1">{tier.usd}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Bed className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{tier.accommodation}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{tier.food}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Bus className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{tier.transport}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{tier.activities}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Star className="w-3 h-3 inline mr-1" />
                      Best for: {tier.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accommodation on a Budget */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation on a Budget
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From free Couchsurfing to beautiful budget riads, Morocco offers exceptional
            accommodation value. Even budget options feel special here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodationOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.type}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-primary)]">
                        {option.priceRange}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] ml-2">({option.usd})</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
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

      {/* Eating Cheap */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Eating Cheap in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan food is delicious and absurdly cheap. You can eat three full meals
            a day for 60&ndash;120 MAD ($6&ndash;12). Here is your complete guide.
          </p>

          {/* Street Food */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            Street Food Guide (20&ndash;50 MAD meals)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {streetFoodGuide.map((item) => (
              <div key={item.name} className="card-moroccan p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[var(--text-primary)]">{item.name}</h4>
                  <span className="text-sm font-bold text-[var(--color-primary)] whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-2">{item.description}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {item.where}
                </p>
              </div>
            ))}
          </div>

          {/* Budget Restaurants */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            Budget Restaurant Meals (30&ndash;80 MAD)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {budgetRestaurants.map((item) => (
              <div key={item.name} className="card-moroccan p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[var(--text-primary)]">{item.name}</h4>
                  <span className="text-sm font-bold text-[var(--color-primary)] whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-2">{item.description}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {item.where}
                </p>
              </div>
            ))}
          </div>

          {/* Self-Catering */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            Self-Catering and Market Shopping
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selfCateringTips.map((item) => (
              <div key={item.tip} className="card-moroccan p-4">
                <h4 className="font-bold text-[var(--text-primary)] mb-2">{item.tip}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Savings */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Savings
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting around Morocco is cheap by any standard. Here are all your options,
            ranked from cheapest to most convenient, with specific tips to save even more.
          </p>
          <div className="space-y-6">
            {transportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.mode} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:w-1/3">
                      <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {option.mode}
                        </h3>
                        <span className="text-sm font-bold text-[var(--color-primary)]">{option.cost}</span>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{option.description}</p>
                      <ul className="space-y-1.5">
                        {option.savings.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Free & Cheap Activities */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Free and Cheap Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Some of the best things in Morocco cost nothing. Walking ancient medinas,
            swimming at public beaches, hiking mountains, and people-watching in squares
            are all free and often more memorable than paid attractions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeAndCheapActivities.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {category.category}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-primary)]">{category.cost}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Haggling Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Essential Haggling Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-6">
            Haggling is a core skill for budget travelers in Morocco. Master these
            techniques and you will save hundreds of dirhams on your trip.
          </p>
          <div className="card-moroccan p-6 mb-8">
            <p className="text-[var(--text-secondary)] leading-relaxed">{hagglingGuide.intro}</p>
          </div>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            Six Rules of Moroccan Haggling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {hagglingGuide.rules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h4 className="font-bold text-[var(--text-primary)]">{rule.rule}</h4>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{rule.explanation}</p>
                </div>
              );
            })}
          </div>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            <AlertTriangle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
            When NOT to Haggle
          </h3>
          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {hagglingGuide.doNotHaggle.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <Info className="w-4 h-4 text-[var(--text-muted)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Budget by City */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Costs vary significantly between Moroccan cities. Marrakech is the most
            expensive, small towns the cheapest. Plan your route with budget in mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetByCity.map((city) => {
              const Icon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] font-medium">
                      {city.level}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-[var(--color-primary)] mb-3">
                    {city.dailyBudget}/day
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.notes}</p>
                  <ul className="space-y-2">
                    {city.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <Lightbulb className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
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

      {/* 20 Money-Saving Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <PiggyBank className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            20 Money-Saving Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical, tested strategies from experienced Morocco travelers. These tips
            can save you 30&ndash;50% on your overall trip costs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {moneySavingTips.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--surface-muted)] shrink-0">
                      <span className="text-xs font-bold text-[var(--color-primary)]">{index + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[var(--color-accent)]" />
                        <h3 className="font-bold text-sm text-[var(--text-primary)]">{item.tip}</h3>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample 7-Day Budget Itinerary */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Sample Budgets and Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real daily breakdowns so you know exactly what a budget trip to Morocco costs.
            All prices include accommodation, food, transport, and activities.
          </p>

          {/* 7-Day Budget */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            7-Day Budget Itinerary: Marrakech, Essaouira, and Fes
          </h3>
          <div className="space-y-4 mb-12">
            {sevenDayBudgetItinerary.map((day) => (
              <div key={day.day} className="card-moroccan p-5">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/6">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm">
                      D{day.day}
                    </div>
                    <div className="text-sm font-bold text-[var(--text-primary)] mt-1">{day.city}</div>
                  </div>
                  <div className="md:w-3/6">
                    <p className="text-sm text-[var(--text-secondary)]">{day.activities}</p>
                  </div>
                  <div className="md:w-2/6 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Accommodation:</span>
                      <span className="text-[var(--text-primary)] font-medium">{day.accommodation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Food:</span>
                      <span className="text-[var(--text-primary)] font-medium">{day.food}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Transport:</span>
                      <span className="text-[var(--text-primary)] font-medium">{day.transport}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Activities:</span>
                      <span className="text-[var(--text-primary)] font-medium">{day.activities_cost}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[var(--border-primary)]">
                      <span className="font-bold text-[var(--text-primary)]">Day Total:</span>
                      <span className="font-bold text-[var(--color-primary)]">{day.total}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="card-moroccan p-5 border-2 border-[var(--color-primary)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">7-Day Trip Total</h4>
                  <p className="text-sm text-[var(--text-muted)]">Excluding international flights</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)]">
                    2,130 - 2,330 MAD
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">approximately $210 - $230 USD</p>
                </div>
              </div>
            </div>
          </div>

          {/* 14-Day Shoestring */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            14-Day Shoestring Itinerary
          </h3>
          <div className="space-y-3 mb-12">
            {fourteenDayShoestringItinerary.map((segment) => (
              <div key={segment.days} className="card-moroccan p-4">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/6">
                    <span className="text-sm font-bold text-[var(--color-primary)]">Days {segment.days}</span>
                    <div className="text-sm font-bold text-[var(--text-primary)]">{segment.city}</div>
                  </div>
                  <div className="md:w-3/6">
                    <p className="text-sm text-[var(--text-secondary)]">{segment.highlights}</p>
                  </div>
                  <div className="md:w-2/6 text-right">
                    <span className="text-sm font-bold text-[var(--color-primary)]">{segment.budget}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="card-moroccan p-5 border-2 border-[var(--color-accent)]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-[var(--text-primary)]">14-Day Shoestring Total</h4>
                  <p className="text-sm text-[var(--text-muted)]">Hostel dorms, street food, public transport, free activities</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                    3,500 - 5,000 MAD
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">approximately $350 - $500 USD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Splurge-Worthy Splurges */}
          <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
            <Star className="w-6 h-6 inline-block text-[var(--color-gold)] mr-2" />
            Splurge-Worthy Splurges
          </h3>
          <p className="text-[var(--text-secondary)] mb-6">
            Even on a tight budget, some experiences are worth the extra dirhams.
            These splurges deliver outsized value and create lasting memories.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {splurgeWorthySplurges.map((item) => (
              <div key={item.splurge} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-[var(--text-primary)]">{item.splurge}</h4>
                  <span className="text-sm font-bold text-[var(--color-primary)] whitespace-nowrap ml-2">
                    {item.cost}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Budget Mistakes */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Common Budget Mistakes to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are the most common ways travelers waste money in Morocco.
            Avoid these mistakes and your budget will stretch significantly further.
          </p>
          <div className="space-y-4">
            {commonBudgetMistakes.map((item) => (
              <div key={item.mistake} className="card-moroccan p-5">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="md:w-1/3">
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.mistake}</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded-full">
                      <TrendingDown className="w-3 h-3" />
                      {item.savings}
                    </span>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-sm text-[var(--text-secondary)]">{item.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Quick Reference Cards */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calculator className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Reference Price Cards
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Save these price references to know instantly if you are getting a fair deal.
            All prices are what locals and experienced travelers pay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Food Prices */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <UtensilsCrossed className="w-5 h-5 text-[var(--color-accent)]" />
                Food Prices
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Mint tea</span><span className="font-bold text-[var(--text-primary)]">5-15 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Fresh OJ</span><span className="font-bold text-[var(--text-primary)]">5-10 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Bread loaf</span><span className="font-bold text-[var(--text-primary)]">1-3 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Street sandwich</span><span className="font-bold text-[var(--text-primary)]">10-20 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Tagine (local)</span><span className="font-bold text-[var(--text-primary)]">30-60 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Tagine (tourist)</span><span className="font-bold text-[var(--text-primary)]">60-120 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Water 1.5L</span><span className="font-bold text-[var(--text-primary)]">5-7 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Beer (bar)</span><span className="font-bold text-[var(--text-primary)]">25-40 MAD</span></li>
              </ul>
            </div>

            {/* Transport Prices */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Bus className="w-5 h-5 text-[var(--color-accent)]" />
                Transport Prices
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">City bus</span><span className="font-bold text-[var(--text-primary)]">4-7 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Petit taxi (city)</span><span className="font-bold text-[var(--text-primary)]">10-30 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Grand taxi seat</span><span className="font-bold text-[var(--text-primary)]">20-80 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">CTM bus</span><span className="font-bold text-[var(--text-primary)]">50-200 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Train (2nd class)</span><span className="font-bold text-[var(--text-primary)]">80-200 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Airport taxi</span><span className="font-bold text-[var(--text-primary)]">70-150 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Al Boraq HSR</span><span className="font-bold text-[var(--text-primary)]">150-200 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Casablanca tram</span><span className="font-bold text-[var(--text-primary)]">6 MAD</span></li>
              </ul>
            </div>

            {/* Accommodation Prices */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Bed className="w-5 h-5 text-[var(--color-accent)]" />
                Accommodation
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Hostel dorm</span><span className="font-bold text-[var(--text-primary)]">80-150 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Hostel private</span><span className="font-bold text-[var(--text-primary)]">150-250 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Budget riad</span><span className="font-bold text-[var(--text-primary)]">200-400 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Mid-range riad</span><span className="font-bold text-[var(--text-primary)]">400-800 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Airbnb (apt)</span><span className="font-bold text-[var(--text-primary)]">200-500 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Campground</span><span className="font-bold text-[var(--text-primary)]">30-50 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Mountain refuge</span><span className="font-bold text-[var(--text-primary)]">50-100 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Desert camp</span><span className="font-bold text-[var(--text-primary)]">200-400 MAD</span></li>
              </ul>
            </div>

            {/* Activity Prices */}
            <div className="card-moroccan p-5">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-[var(--color-accent)]" />
                Activities
              </h3>
              <ul className="space-y-2 text-xs">
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Museum entry</span><span className="font-bold text-[var(--text-primary)]">10-70 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Palace entry</span><span className="font-bold text-[var(--text-primary)]">50-70 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Hassan II tour</span><span className="font-bold text-[var(--text-primary)]">130 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Hammam (local)</span><span className="font-bold text-[var(--text-primary)]">15-20 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Cooking class</span><span className="font-bold text-[var(--text-primary)]">200-400 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Surf lesson</span><span className="font-bold text-[var(--text-primary)]">200-300 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">Desert tour (shared)</span><span className="font-bold text-[var(--text-primary)]">400-700 MAD</span></li>
                <li className="flex justify-between"><span className="text-[var(--text-secondary)]">SIM card + data</span><span className="font-bold text-[var(--text-primary)]">50-100 MAD</span></li>
              </ul>
            </div>
          </div>

          {/* Souvenir Price Guide */}
          <div className="mt-8">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6 text-center">
              <ShoppingBag className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Souvenir Fair Prices (After Haggling)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { item: 'Leather babouche slippers', price: '80-150 MAD' },
                { item: 'Small Berber rug', price: '200-600 MAD' },
                { item: 'Ceramic tagine pot', price: '30-80 MAD' },
                { item: 'Argan oil (1 liter)', price: '150-250 MAD' },
                { item: 'Leather bag', price: '150-400 MAD' },
                { item: 'Silver jewelry', price: '50-200 MAD' },
                { item: 'Ras el hanout (250g)', price: '15-30 MAD' },
                { item: 'Woven basket', price: '30-80 MAD' },
                { item: 'Thuya wood box', price: '50-150 MAD' },
                { item: 'Brass lantern', price: '100-300 MAD' },
                { item: 'Embroidered cushion', price: '60-150 MAD' },
                { item: 'Saffron (1 gram)', price: '30-50 MAD' },
              ].map((souvenir) => (
                <div key={souvenir.item} className="card-moroccan p-3 text-center">
                  <p className="text-xs text-[var(--text-secondary)] mb-1">{souvenir.item}</p>
                  <p className="text-sm font-bold text-[var(--color-primary)]">{souvenir.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Quick answers to the most common questions about traveling Morocco on a budget.
          </p>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Budget Morocco Trip?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Morocco proves that incredible travel does not require a big budget. With
            the knowledge in this guide, you can experience one of the world&apos;s most
            fascinating countries for $20&ndash;80 a day. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/backpacking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-[var(--color-primary)]/90 transition-colors font-medium"
            >
              <Luggage className="w-5 h-5" />
              Backpacking Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-medium"
            >
              <Compass className="w-5 h-5" />
              Sample Itineraries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-primary)] text-[var(--text-primary)] rounded-lg hover:bg-white transition-colors font-medium"
            >
              <Globe className="w-5 h-5" />
              First-Time Visitor Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Backpacking Morocco',
                description: 'Complete backpacker guide with hostel recommendations, routes, and safety tips for independent travelers.',
                href: '/backpacking',
                icon: Luggage,
              },
              {
                title: 'Street Food Guide',
                description: 'Every street food you need to try in Morocco, where to find it, what to pay, and how to eat safely.',
                href: '/food',
                icon: UtensilsCrossed,
              },
              {
                title: 'Transport Guide',
                description: 'Trains, buses, grands taxis, and everything else about getting around Morocco efficiently and cheaply.',
                href: '/transport',
                icon: Train,
              },
              {
                title: 'Money & Banking',
                description: 'ATMs, currency exchange, tipping customs, and everything about handling money in Morocco.',
                href: '/money',
                icon: CreditCard,
              },
            ].map((guide) => {
              const Icon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <Icon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}