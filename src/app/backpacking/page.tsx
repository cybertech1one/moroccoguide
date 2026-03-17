import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Backpack,
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
  Wifi,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Backpacking Morocco | Budget Travel Guide, Hostels & Routes',
  description:
    'The ultimate backpacking guide to Morocco. Budget breakdowns, best hostels, transport tips, 14-day route, free activities, safety advice, and how to avoid common scams.',
  keywords: [
    'backpacking morocco',
    'budget travel morocco',
    'morocco on a budget',
    'morocco hostels',
    'cheap travel morocco',
    'morocco backpacker route',
    'morocco budget tips',
    'morocco solo backpacking',
    'morocco transport guide',
    'morocco scams avoid',
    'morocco budget food',
    'morocco cheap eats',
    'morocco backpacker trail',
  ],
  openGraph: {
    title: 'Backpacking Morocco | Budget Travel Guide, Hostels & Routes',
    description:
      'The ultimate budget backpacking guide to Morocco with hostel tips, transport advice, and a 14-day route.',
    url: 'https://citytoursmorocco.com/backpacking',
    images: [
      {
        url: '/images/hero-chefchaouen-drone.webp',
        width: 1200,
        height: 630,
        alt: 'Backpacker in Chefchaouen blue medina Morocco',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Backpacking Morocco',
  description:
    'A comprehensive budget travel guide for backpackers visiting Morocco, covering accommodation, transport, safety, and routes.',
  url: 'https://citytoursmorocco.com/backpacking',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const budgetBreakdown = [
  {
    category: 'Accommodation',
    budget: '80 - 200 MAD',
    usd: '$8 - $20',
    details: 'Hostel dorm beds range from 80-150 MAD. Basic private rooms in guesthouses start at 150-200 MAD. Hostels often include breakfast.',
  },
  {
    category: 'Food',
    budget: '30 - 100 MAD/meal',
    usd: '$3 - $10',
    details: 'Street food meals cost 15-30 MAD. Local sit-down restaurants serve tagine with bread for 40-70 MAD. Splurge restaurants run 80-150 MAD.',
  },
  {
    category: 'Transport (City)',
    budget: '5 - 30 MAD',
    usd: '$0.50 - $3',
    details: 'Local buses cost 5-7 MAD. Petit taxis within cities cost 10-30 MAD. Walking is free and often the best way to explore.',
  },
  {
    category: 'Transport (Inter-city)',
    budget: '50 - 200 MAD',
    usd: '$5 - $20',
    details: 'CTM/Supratours buses range 50-200 MAD. Trains are 80-200 MAD (2nd class). Shared grands taxis are cheapest at 30-80 MAD.',
  },
  {
    category: 'Activities',
    budget: '0 - 200 MAD',
    usd: '$0 - $20',
    details: 'Many attractions are free or under 70 MAD. Museum entries range 10-70 MAD. Organized tours start at 150-300 MAD.',
  },
  {
    category: 'Daily Total',
    budget: '250 - 500 MAD',
    usd: '$25 - $50',
    details: 'A comfortable backpacker budget is 300-400 MAD per day ($30-40). Ultra-budget travelers can manage on 200-250 MAD ($20-25).',
  },
];

const budgetFoodGuide = [
  {
    type: 'Street Food Staples',
    items: [
      { name: 'Msemen (Moroccan flatbread)', price: '2-5 MAD', where: 'Street stalls everywhere, especially mornings' },
      { name: 'Harira (tomato-lentil soup)', price: '5-10 MAD', where: 'Street stalls and small restaurants, especially during Ramadan' },
      { name: 'Bocadillo (baguette sandwich)', price: '10-20 MAD', where: 'Sandwich shops near bus stations and medina entrances' },
      { name: 'Brochettes (grilled meat skewers)', price: '10-20 MAD', where: 'Jemaa el-Fnaa stalls, market areas in every city' },
      { name: 'Sfenj (Moroccan donuts)', price: '1-2 MAD each', where: 'Morning street stalls and bakeries' },
      { name: 'Snail soup (babouche)', price: '5-10 MAD', where: 'Jemaa el-Fnaa and Fes street stalls' },
    ],
  },
  {
    type: 'Cheap Restaurant Meals',
    items: [
      { name: 'Tagine (chicken or vegetable)', price: '30-50 MAD', where: 'Local restaurants away from tourist centers' },
      { name: 'Couscous Friday special', price: '25-40 MAD', where: 'Local restaurants on Fridays (traditional couscous day)' },
      { name: 'Kefta (meatball) tagine with egg', price: '25-45 MAD', where: 'Small restaurants throughout medinas' },
      { name: 'Tanjia (slow-cooked meat)', price: '40-60 MAD', where: 'Marrakech specialty -- ask at local eateries' },
      { name: 'Fried fish platter', price: '25-40 MAD', where: 'Essaouira harbor, Casablanca port area' },
      { name: 'Tajine de sardines', price: '20-35 MAD', where: 'Coastal cities -- Essaouira, Tangier, Safi' },
    ],
  },
  {
    type: 'Money-Saving Food Tips',
    items: [
      { name: 'Eat where locals eat', price: 'Save 30-50%', where: 'Walk 2-3 streets away from tourist areas for the same food at half the price' },
      { name: 'Buy from souks', price: '5-20 MAD', where: 'Fresh fruit, bread, olives, and cheese from market stalls make great picnic lunches' },
      { name: 'Cook at hostels', price: 'Save 50%+', where: 'Many hostels have communal kitchens. Buy ingredients at local markets.' },
      { name: 'Drink mint tea, not coffee', price: '5-10 MAD vs 15-30 MAD', where: 'Mint tea (atay) is the cheapest hot drink and offered free in many shops' },
      { name: 'Fill water bottles', price: 'Free', where: 'Many riads and hostels offer filtered water refills. Carry a reusable bottle.' },
      { name: 'Ask for the local menu', price: 'Save 20-40%', where: 'Tourist-facing restaurants often have a cheaper Arabic/French menu' },
    ],
  },
];

const hostels = [
  {
    city: 'Marrakech',
    hostels: [
      { name: 'Waka Waka Hostel', price: '100-150 MAD', note: 'Legendary social hostel in the medina. Rooftop terrace, free breakfast, nightly dinners. The place to meet other backpackers.' },
      { name: 'Hostel Kif Kif', price: '90-130 MAD', note: 'Colorful riad-style hostel with courtyard pool. Walking distance to Jemaa el-Fnaa. Excellent staff.' },
      { name: 'Equity Point Hostel', price: '120-170 MAD', note: 'Beautiful riad conversion with pool. More upscale hostel experience with a vibrant social scene.' },
      { name: 'Riad Layla Rouge', price: '80-120 MAD', note: 'Budget-friendly riad with dorm beds. Traditional architecture, quiet courtyard, and helpful owner who arranges tours.' },
    ],
  },
  {
    city: 'Fes',
    hostels: [
      { name: 'Funky Fes Hostel', price: '80-120 MAD', note: 'Inside the medina walls. Excellent rooftop views of the medina and surrounding hills. Offers Fassi cooking classes.' },
      { name: 'Dar Seffarine', price: '90-140 MAD', note: 'Traditional riad hostel near the famous Seffarine square. Quiet and authentic Fes experience.' },
      { name: 'Medina Social Club', price: '100-140 MAD', note: 'Social hostel with organized medina tours and group dinners. Helpful for navigating the famously confusing Fes medina.' },
    ],
  },
  {
    city: 'Chefchaouen',
    hostels: [
      { name: 'Hostel Flores', price: '80-110 MAD', note: 'Best budget option in the blue city. Terrace with mountain views. Blue-painted throughout, naturally.' },
      { name: 'Casa Perleta', price: '90-130 MAD', note: 'Friendly family-run hostel with home-cooked dinners available. Central location near the main square.' },
      { name: 'Asmaa Hostel', price: '70-100 MAD', note: 'One of the cheapest options in town. Basic but clean, with a nice terrace and kitchen access.' },
    ],
  },
  {
    city: 'Essaouira',
    hostels: [
      { name: 'The Salty Pelican', price: '90-120 MAD', note: 'Surfer-friendly hostel near the beach. Board storage and surf lessons arranged. Great rooftop vibes.' },
      { name: 'Hostel Essaouira', price: '80-110 MAD', note: 'Central medina location. Simple but clean with a great communal kitchen. Walking distance to everything.' },
      { name: 'Soul Kitchen Hostel', price: '100-140 MAD', note: 'Newer hostel with modern facilities. Excellent communal kitchen, fast WiFi, and organized group activities.' },
    ],
  },
  {
    city: 'Tangier',
    hostels: [
      { name: 'The Melting Pot', price: '90-130 MAD', note: 'Modern hostel in the new city. Co-working space, organized day trips, and a good bar scene.' },
      { name: 'Dar Nour (budget rooms)', price: '120-160 MAD', note: 'Guesthouse with some budget-friendly rooms in the kasbah. Incredible Strait of Gibraltar views.' },
    ],
  },
  {
    city: 'Rabat',
    hostels: [
      { name: 'Hostel Rabat', price: '80-120 MAD', note: 'Close to the medina and Kasbah of the Udayas. Clean, basic, and well-located for exploring the capital.' },
      { name: 'Riad Dar Al Batoul', price: '100-150 MAD', note: 'Budget riad in the medina with traditional Moroccan breakfast included. Quiet alternative to Marrakech.' },
    ],
  },
  {
    city: 'Merzouga (Sahara)',
    hostels: [
      { name: 'Hostel Merzouga', price: '70-100 MAD', note: 'Budget base for Sahara trips. Arranges shared desert tours at backpacker prices (250-400 MAD for overnight).' },
      { name: 'Riad Mamouche (dorms)', price: '100-130 MAD', note: 'Established Merzouga guesthouse with dormitory option. Pool, good restaurant, and reliable desert excursions.' },
    ],
  },
];

const transportGuide = [
  {
    mode: 'CTM & Supratours Buses',
    description: 'The most reliable intercity buses. CTM and Supratours (run by ONCF railway) have fixed schedules, air conditioning, and assigned seats. Book online or at stations.',
    tips: ['Book 1-2 days ahead for popular routes', 'Supratours connects to train stations', 'Luggage stored below at no extra charge', 'CTM website: ctm.ma -- booking in advance is recommended'],
    cost: '50 - 200 MAD per trip',
  },
  {
    mode: 'Trains (ONCF)',
    description: 'Morocco has a decent rail network connecting Tangier, Rabat, Casablanca, Marrakech, Fes, and Meknes. Second class is comfortable and budget-friendly. First class costs only 20-40% more.',
    tips: ['Buy tickets at the station or oncf.ma', '2nd class is perfectly fine and quite comfortable', 'Al Boraq high-speed train: Tangier-Casablanca in 2h10 (vs 4h45)', 'Marrakech-Fes: 7 hours by train, good overnight option'],
    cost: '80 - 200 MAD (2nd class)',
  },
  {
    mode: 'Grands Taxis (Shared)',
    description: 'Shared Mercedes sedans that run fixed routes between cities. They depart when full (6 passengers). Cheapest intercity option but can be cramped. An authentic Moroccan experience.',
    tips: ['Pay for 2 seats if you want the front seat to yourself', 'Depart from designated stations (ask locals)', 'No fixed schedule - they leave when full', 'Negotiate the price before getting in'],
    cost: '30 - 80 MAD per seat',
  },
  {
    mode: 'Petit Taxis',
    description: 'Small metered taxis for getting around within cities. Each city has a different color (red in Marrakech, blue in Rabat, beige in Fes). Insist the meter is running.',
    tips: ['Always insist on the meter (compteur)', 'Can share with other passengers heading the same direction', 'Have small bills ready - drivers rarely have change', 'Nighttime rates are 50% higher (normal and legal)'],
    cost: '10 - 30 MAD per ride',
  },
  {
    mode: 'Local City Buses',
    description: 'Every major city has local bus networks. They are extremely cheap but can be crowded and confusing for tourists. Marrakech and Casablanca have newer bus fleets. Casablanca also has a tram.',
    tips: ['Pay the fare to the conductor on the bus', 'Ask locals which bus number goes to your destination', 'Hold onto your belongings in crowded buses', 'Casablanca tram: 6 MAD per ride, covers main tourist areas'],
    cost: '4 - 7 MAD per ride',
  },
];

const transportSavings = [
  'Book CTM/Supratours buses online 2+ days ahead for guaranteed seats and avoid price hikes',
  'Use grands taxis for short intercity trips (under 2 hours) -- they are faster and cheaper than buses for these routes',
  'Marrakech to Essaouira: Supratours bus is 80 MAD and takes 3 hours. Much cheaper than a private taxi ($50+)',
  'Walk everywhere within medinas. They are car-free and compact. Taxis are unnecessary inside the old city walls',
  'Take the train between major cities instead of flying. Casablanca to Marrakech is only 100-140 MAD (2nd class, 3 hours)',
  'Negotiate taxi fares in advance for airport transfers. Marrakech airport to medina should be 70-100 MAD, not 200+',
  'The Al Boraq high-speed train from Tangier to Casablanca costs 150-200 MAD in 2nd class and takes just 2 hours',
  'Group up with other backpackers for desert tours. Shared 2-night Sahara trips cost 400-700 MAD per person from Marrakech',
];

const freeCheapThings = [
  {
    city: 'Marrakech',
    activities: [
      'Wander the Jemaa el-Fnaa square and watch street performers (free)',
      'Explore the colorful souks and practice haggling (free)',
      'Visit the Koutoubia Mosque exterior and gardens (free)',
      'Walk through the Mellah (Jewish quarter) and spice market (free)',
      'Bahia Palace (70 MAD) and Saadian Tombs (70 MAD)',
      'Majorelle Garden (70 MAD) -- worth the splurge',
      'Sunset from a rooftop cafe -- just buy a mint tea (10-15 MAD)',
    ],
  },
  {
    city: 'Fes',
    activities: [
      'Get lost in the world\'s largest car-free medina (free)',
      'Watch leather being dyed at Chouara Tannery from a shop rooftop (free with tea purchase)',
      'Visit the blue gate Bab Bou Jeloud (free)',
      'Explore the pottery cooperative in Fes el-Bali (free)',
      'Bou Inania Madrasa (20 MAD) -- stunning Islamic architecture',
      'Walk to the Merenid Tombs for panoramic views at sunset (free)',
    ],
  },
  {
    city: 'Chefchaouen',
    activities: [
      'Photograph the blue-washed streets endlessly (free)',
      'Hike to the Spanish Mosque viewpoint for sunset (free)',
      'Swim in the Ras el-Maa waterfall pools (free)',
      'Visit the kasbah and ethnographic museum (60 MAD)',
      'Hike the Rif Mountains trails from town (free)',
      'Day trip to Akchour waterfalls (transport 30-50 MAD, entry free)',
    ],
  },
  {
    city: 'Essaouira',
    activities: [
      'Walk the ramparts and watch the sunset (free)',
      'Explore the fishing harbor at catch time (free)',
      'Beach walk along the endless Atlantic coast (free)',
      'Browse art galleries in the medina (free)',
      'Visit the Skala de la Ville (free)',
      'Try surfing at Sidi Kaouki beach (board rental 100-150 MAD)',
    ],
  },
  {
    city: 'Rabat',
    activities: [
      'Explore the UNESCO Kasbah of the Udayas (free)',
      'Walk the Bouregreg river promenade (free)',
      'Hassan Tower and Mohammed V Mausoleum (free)',
      'Chellah ruins and gardens (70 MAD)',
      'Rabat Archaeological Museum (20 MAD)',
      'Beach at Plage des Nations (free, accessible by local bus)',
    ],
  },
  {
    city: 'Casablanca',
    activities: [
      'Hassan II Mosque exterior and seafront promenade (free)',
      'Hassan II Mosque interior tour (130 MAD -- worth it, one of the world\'s largest mosques)',
      'Explore the Art Deco architecture in the city center (free)',
      'Habous Quarter "new medina" (free to explore)',
      'La Corniche seaside boardwalk (free)',
    ],
  },
];

const safetyTips = [
  {
    icon: Shield,
    title: 'General Safety',
    tips: [
      'Morocco is generally safe for backpackers. Use common sense as in any country.',
      'Keep valuables in your hostel locker. Carry only what you need for the day.',
      'Avoid walking alone in medinas late at night, especially in unfamiliar areas.',
      'Trust your instincts. If a situation feels wrong, politely leave.',
      'Register your trip with your embassy\'s travel registration program.',
      'Save your accommodation\'s phone number and address in Arabic on your phone.',
    ],
  },
  {
    icon: Users,
    title: 'Solo & Female Travelers',
    tips: [
      'Female travelers may receive more attention. Dress modestly (shoulders/knees covered) to minimize this.',
      'Wearing a wedding ring, even if unmarried, can reduce unwanted attention.',
      'Stick to well-traveled areas and use reputable accommodation.',
      'Join group tours or hostel excursions for desert trips and trekking.',
      'Have your accommodation\'s phone number saved for emergencies or if lost in a medina.',
      'Morocco\'s medinas are safe during the day. Stick to main routes after dark.',
    ],
  },
];

const scams = [
  {
    scam: 'The Friendly Guide',
    description: 'Someone offers to "help" you find your riad or a specific shop, then demands payment. They may also lead you to shops where they earn commission.',
    avoidance: 'Politely decline and use Google Maps or ask your riad for directions via phone. Say "la shukran" (no thank you) firmly.',
  },
  {
    scam: 'Overpriced Taxis',
    description: 'Taxi drivers refuse to use the meter or claim it is broken, then charge 3-5x the normal rate.',
    avoidance: 'Always insist on the meter before getting in. If they refuse, find another taxi. Ask your hostel what the fare should be.',
  },
  {
    scam: 'Henna Ladies',
    description: 'Women in Jemaa el-Fnaa grab your hand and apply henna before you can refuse, then demand 200+ MAD.',
    avoidance: 'Keep your hands in your pockets when walking through the square. A firm "no" and walking away works.',
  },
  {
    scam: 'Carpet Shop Pressure',
    description: 'You are invited for "mint tea" which turns into a high-pressure carpet sales pitch.',
    avoidance: 'It is fine to look and drink tea, but never feel obligated to buy. Walk away if pressured. Bargaining starts at 50% of asking price.',
  },
  {
    scam: 'The "Closed" Mosque/Attraction',
    description: 'Someone tells you an attraction is closed today and offers to take you somewhere else (usually a shop).',
    avoidance: 'Verify directly by going to the attraction yourself. Opening hours are on Google Maps.',
  },
  {
    scam: 'Fake Leather/Spices',
    description: 'Sellers claim items are genuine leather or pure saffron when they are synthetic or mixed with other spices.',
    avoidance: 'For leather, burn a small fiber (real leather smells different). For saffron, buy from reputable spice shops, not street vendors. Real saffron costs 30-50 MAD per gram.',
  },
  {
    scam: 'Restaurant Menu Switch',
    description: 'You order from a menu with one price, then receive a bill with higher prices. Or no menu at all, and the price is inflated.',
    avoidance: 'Always ask for a menu with prices before ordering. Take a photo of the menu if prices seem reasonable. Avoid restaurants with no visible menu.',
  },
];

const route14Day = [
  { day: '1-2', city: 'Casablanca', desc: 'Arrive, visit Hassan II Mosque (130 MAD, interior tour), explore Habous Quarter and corniche. Take the train to Marrakech (100-140 MAD, 3 hours).', budget: '~500-700 MAD/day' },
  { day: '3-5', city: 'Marrakech', desc: 'Explore the medina, souks, and palaces. Join a hostel group for a day trip to Ouzoud Falls (200-300 MAD) or Atlas Mountains. Cook at the hostel one evening to save money.', budget: '~350-500 MAD/day' },
  { day: '6-7', city: 'Essaouira', desc: 'Supratours bus from Marrakech (80 MAD, 3 hours). Beach days, rampart walks, fresh seafood at the harbor (25-40 MAD for fried fish). Try surfing at Sidi Kaouki.', budget: '~300-450 MAD/day' },
  { day: '8', city: 'Travel to Fes', desc: 'Bus or train from Essaouira via Marrakech to Fes (200-300 MAD total). Long travel day. Evening arrival and first medina exploration.', budget: '~400-500 MAD (travel day)' },
  { day: '9-10', city: 'Fes', desc: 'Get lost in the world\'s largest medina. Visit tanneries, madrasas, and the blue gate. Take a cooking class (150-250 MAD) at your hostel. Eat at local restaurants in the medina.', budget: '~300-450 MAD/day' },
  { day: '11-12', city: 'Chefchaouen', desc: 'CTM bus from Fes (75 MAD, 4 hours). Photography walks through the blue streets, hike to Spanish Mosque for sunset. Day trip to Akchour waterfalls (shared taxi 30-50 MAD).', budget: '~250-400 MAD/day' },
  { day: '13', city: 'Tangier', desc: 'CTM bus from Chefchaouen (60-80 MAD, 3 hours). Explore the Kasbah, medina, and Cafe Hafa where the Rolling Stones once hung out. Walk the Corniche at sunset.', budget: '~300-450 MAD/day' },
  { day: '14', city: 'Departure', desc: 'Last morning in Tangier or travel to your next destination. Ferries to Spain depart from Tanger Med port (200-350 MAD). Or fly from Tangier airport.', budget: '~300-500 MAD' },
];

const alternativeRoutes = [
  {
    name: 'The Desert Loop (7-10 days)',
    description: 'For those who want to include the Sahara. Marrakech > Ait Benhaddou > Dades Gorge > Merzouga (Sahara) > Fes. The 3-day shared desert tour from Marrakech costs 400-700 MAD per person and includes transport, accommodation, meals, and a night in a desert camp.',
    stops: ['Marrakech (2 days)', 'Ait Benhaddou (pass through)', 'Dades Gorge (1 night)', 'Merzouga/Sahara (1-2 nights)', 'Fes (2-3 days)'],
  },
  {
    name: 'The Northern Circuit (7-10 days)',
    description: 'Focus on the north for easy access from Spain. Tangier > Chefchaouen > Fes > Meknes > Rabat. Perfect if entering from Europe via ferry. Meknes and Rabat are often overlooked but both have UNESCO sites and far fewer tourists.',
    stops: ['Tangier (1-2 days)', 'Chefchaouen (2 days)', 'Fes (2-3 days)', 'Meknes & Volubilis (1 day)', 'Rabat (1-2 days)'],
  },
  {
    name: 'The Surf & Coast (5-7 days)',
    description: 'Atlantic coast route for surfers and beach lovers. Essaouira > Taghazout > Agadir > Mirleft > Legzira. Morocco\'s Atlantic coast has world-class surf breaks and some of the cheapest beach living in the Mediterranean region.',
    stops: ['Essaouira (2 days)', 'Taghazout (2-3 days, surf village)', 'Agadir (1 day)', 'Mirleft & Legzira Beach (1-2 days)'],
  },
  {
    name: 'The Grand Tour (3-4 weeks)',
    description: 'See it all. Tangier > Chefchaouen > Fes > Merzouga > Ouarzazate > Marrakech > Essaouira > Rabat. Requires 3-4 weeks but covers every highlight. Budget about $700-$1,200 total for the full loop.',
    stops: ['Tangier (2 days)', 'Chefchaouen (2 days)', 'Fes (3 days)', 'Merzouga/Sahara (2 days)', 'Ouarzazate (1 day)', 'Marrakech (3 days)', 'Essaouira (2 days)', 'Rabat (2 days)'],
  },
];

const packingList = [
  '40-50L backpack (not a suitcase - medina streets are narrow and uneven)',
  'Padlock for hostel lockers',
  'Quick-dry towel (hostels may not provide them)',
  'Modest, lightweight clothing (cotton/linen is best)',
  'Comfortable walking shoes and flip-flops for hostels',
  'Headlamp or small flashlight (medina streets can be dark at night)',
  'Reusable water bottle with filter',
  'Earplugs and sleep mask (for hostel dorms and the call to prayer)',
  'Basic first-aid kit and any prescription medications',
  'Copies of passport and insurance documents',
  'Small daypack for daily excursions',
  'Power adapter (Morocco uses Type C/E European plugs)',
  'Sunscreen, sunhat, and sunglasses',
  'Scarf or shawl (for mosque areas, cold nights, or sun protection)',
];

const meetingTravelers = [
  {
    method: 'Hostels',
    description: 'Moroccan hostels are social hubs. Rooftop dinners, group excursions, and communal kitchens naturally bring travelers together. Waka Waka in Marrakech is legendary for its social scene.',
  },
  {
    method: 'Organized Tours',
    description: 'Join group desert tours, cooking classes, or day trips through your hostel. These 1-3 day shared experiences create instant friendships. Desert tours especially bond groups quickly.',
  },
  {
    method: 'Cafes & Terraces',
    description: 'Cafe culture is huge in Morocco. Rooftop cafes in medinas are natural meeting spots. Sit, order mint tea, and conversations happen organically.',
  },
  {
    method: 'Language Exchange',
    description: 'Many Moroccan students attend language cafes to practice English or French. These are great for meeting locals and fellow travelers simultaneously.',
  },
  {
    method: 'Digital Communities',
    description: 'Join Facebook groups like "Backpacking Morocco" and "Travel Morocco" or use apps like Couchsurfing hangouts and Hostelworld\'s social features to connect before you arrive.',
  },
];

const wifiConnectivity = [
  { tip: 'Buy a Moroccan SIM card at the airport (Maroc Telecom, Inwi, or Orange). A prepaid SIM with 20GB data costs about 100 MAD ($10).' },
  { tip: 'Most hostels and cafes have free WiFi, though speeds vary. Marrakech and Casablanca have the best connectivity.' },
  { tip: 'Maroc Telecom has the best coverage in rural areas and the desert. Essential for navigation in remote regions.' },
  { tip: 'WhatsApp is the main communication app in Morocco. Locals, hostels, and tour operators all use it.' },
  { tip: 'Download offline Google Maps for Morocco before you arrive. GPS works without data, but map tiles need to be preloaded.' },
];

const weeklyBudgetExamples = [
  {
    style: 'Ultra Budget',
    daily: '200-250 MAD ($20-25)',
    weekly: '$140-175',
    description: 'Dorm beds, street food only, walking everywhere, free activities, cooking at hostels. Possible but tight.',
  },
  {
    style: 'Comfortable Backpacker',
    daily: '300-400 MAD ($30-40)',
    weekly: '$210-280',
    description: 'Dorm or shared private rooms, mix of street food and restaurants, occasional bus rides, some paid activities.',
  },
  {
    style: 'Flashpacker',
    daily: '500-700 MAD ($50-70)',
    weekly: '$350-490',
    description: 'Private rooms in guesthouses, restaurants for most meals, taxis when needed, all the activities you want.',
  },
];

export default function BackpackingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-backpacking.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Backpacking</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Backpack className="w-4 h-4" />
            Budget Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Backpacking Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore the Kingdom on a shoestring. From $25 a day you can experience
            ancient medinas, Sahara dunes, blue cities, and legendary hospitality.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Why Backpack Morocco */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Top Backpacking Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of Africa, Europe, and the Arab world, offering a
                cultural richness that few countries can match. For backpackers, it delivers an
                extraordinary bang for your buck: ancient medinas to explore for free, delicious
                street food for a few dirhams, and comfortable hostel beds for under $15 a night.
              </p>
              <p>
                The country is compact enough to see the highlights in two weeks but diverse enough
                to keep you fascinated for months. In a single trip, you can surf Atlantic waves,
                trek the High Atlas, camp in the Sahara, wander the world&apos;s largest car-free
                urban area, and photograph the most photogenic blue city on Earth &mdash; all for
                less than a week in most European capitals.
              </p>
              <p>
                Morocco&apos;s backpacker infrastructure has matured significantly. A growing network
                of social hostels, reliable bus connections, and a well-worn traveler trail means
                you will always find fellow backpackers and helpful locals along the way. The
                country is also just a ferry ride from Spain, making it a natural extension of
                any European backpacking trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All prices in Moroccan Dirhams (MAD). 1 USD = approximately 10 MAD.
          </p>
          <div className="space-y-4 mb-12">
            {budgetBreakdown.map((item) => (
              <div key={item.category} className={`card-moroccan p-5 ${item.category === 'Daily Total' ? 'border-2 border-[var(--color-primary)]' : ''}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="md:w-1/4">
                    <h3 className="font-bold text-[var(--text-primary)]">{item.category}</h3>
                  </div>
                  <div className="md:w-1/4 flex gap-3">
                    <span className="text-[var(--color-primary)] font-bold">{item.budget}</span>
                    <span className="text-[var(--text-muted)] text-sm">({item.usd})</span>
                  </div>
                  <div className="md:w-2/4">
                    <p className="text-sm text-[var(--text-secondary)]">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Budget Examples */}
          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            Weekly Budget Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weeklyBudgetExamples.map((example) => (
              <div key={example.style} className="card-moroccan p-5 text-center">
                <h4 className="font-bold text-[var(--text-primary)] mb-1">{example.style}</h4>
                <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)] mb-1">
                  {example.weekly}/week
                </div>
                <div className="text-sm text-[var(--text-muted)] mb-3">{example.daily}/day</div>
                <p className="text-xs text-[var(--text-secondary)]">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Food Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Budget Food Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan food is delicious and cheap. Here is what to eat, what to pay, and where
            to find it. You can eat well on 50-80 MAD ($5-8) per day.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetFoodGuide.map((category) => (
              <div key={category.type} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                  {category.type}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="border-l-2 border-[var(--color-primary)]/30 pl-3">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">{item.name}</h4>
                        <span className="text-xs font-medium text-[var(--color-primary)]">{item.price}</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{item.where}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Hostels */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Best Hostels by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tried-and-tested hostels with good reviews, social vibes, and fair prices. Dorm
            bed prices listed per night.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hostels.map((cityHostels) => (
              <div key={cityHostels.city} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  {cityHostels.city}
                </h3>
                <div className="space-y-4">
                  {cityHostels.hostels.map((hostel) => (
                    <div key={hostel.name} className="border-l-2 border-[var(--color-primary)]/30 pl-3">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-sm text-[var(--text-primary)]">{hostel.name}</h4>
                        <span className="text-xs font-medium text-[var(--color-primary)]">{hostel.price}</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{hostel.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Guide */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-secondary)] mr-2" />
            Public Transport Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get around Morocco cheaply and comfortably.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {transportGuide.map((mode) => (
              <div key={mode.mode} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{mode.mode}</h3>
                <div className="text-sm font-medium text-[var(--color-primary)] mb-3">{mode.cost}</div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{mode.description}</p>
                <ul className="space-y-1.5">
                  {mode.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Transport Savings Tips */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
              Transport Savings Tips
            </h3>
            <div className="card-moroccan p-6">
              <ul className="space-y-3">
                {transportSavings.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Free/Cheap Things */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Free & Cheap Things to Do
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You do not need to spend much to have incredible experiences in Morocco.
            Most of the best experiences cost nothing at all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeCheapThings.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {city.city}
                </h3>
                <ul className="space-y-2">
                  {city.activities.map((activity) => (
                    <li key={activity} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Star className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-green)] mr-2" />
            Safety Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-[var(--color-green)]" />
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14-Day Route */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            14-Day Classic Backpacker Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The classic Morocco loop hitting all the highlights. Adjust based on your interests and pace.
          </p>
          <p className="text-center text-[var(--color-primary)] font-bold mb-12">
            <DollarSign className="w-5 h-5 inline-block mr-1" />
            Estimated total: $350 - $600 for 14 days (excluding international flights)
          </p>
          <div className="space-y-4">
            {route14Day.map((stop) => (
              <div key={stop.day} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-16 h-12 rounded-lg gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Day {stop.day}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{stop.city}</h3>
                    <span className="text-xs font-medium text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">
                      {stop.budget}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{stop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Routes */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Alternative Backpacker Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not everyone has two weeks. Here are routes optimized for different interests
            and time frames.
          </p>
          <div className="space-y-6">
            {alternativeRoutes.map((route) => (
              <div key={route.name} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{route.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{route.description}</p>
                <div className="flex flex-wrap gap-2">
                  {route.stops.map((stop) => (
                    <span
                      key={stop}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-xs font-medium"
                    >
                      <MapPin className="w-3 h-3" />
                      {stop}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Backpacker Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Pack light, travel far. Everything you need and nothing you don&apos;t.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {packingList.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WiFi & Connectivity */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            WiFi & Connectivity
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Stay connected on a budget. Morocco has surprisingly good mobile data coverage.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {wifiConnectivity.map((item) => (
                <div key={item.tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  {item.tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Scams */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Scams & How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is safe, but a few common tourist scams are worth knowing about.
            Being aware makes them easy to avoid.
          </p>
          <div className="space-y-4">
            {scams.map((scam) => (
              <div key={scam.scam} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{scam.scam}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{scam.description}</p>
                <div className="flex items-start gap-2 text-sm bg-[var(--color-green)]/5 p-3 rounded-lg">
                  <Shield className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-green-dark)]">{scam.avoidance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Travelers */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Meeting Other Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s backpacker community is friendly and social. Here is how to connect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetingTravelers.map((method) => (
              <div key={method.method} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{method.method}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides for Backpackers */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Guides for Budget Travelers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-train-routes', title: 'Train Routes', desc: 'Budget-friendly ONCF rail routes connecting all major cities.' },
              { href: '/morocco-shopping-guide', title: 'Shopping Guide', desc: 'Bargaining tips and fair prices so you never overpay in the souks.' },
              { href: '/morocco-safety-tips', title: 'Safety Tips', desc: 'Practical safety advice for backpackers in Morocco.' },
              { href: '/morocco-road-trip-routes', title: 'Road Trip Routes', desc: 'Share a rental with fellow travelers for 6 epic routes.' },
              { href: '/morocco-airports-guide', title: 'Airports Guide', desc: 'Find the cheapest airports and transfer options.' },
              { href: '/morocco-digital-nomad-guide', title: 'Digital Nomad', desc: 'Work remotely from Morocco — coworking spaces and costs.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Backpack className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Backpack Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore our detailed city guides, transport information, and budget tools
            to plan your backpacking adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Bus className="w-4 h-4" /> Transport Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
