import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  Sunset,
  Star,
  Camera,
  UtensilsCrossed,
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  Sparkles,
  Moon,
  Wine,
  Mountain,
  Plane,
  TreePalm,
  Bath,
  Gem,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Honeymoon in Morocco | Romantic Getaways & Luxury Experiences',
  description:
    'Plan the perfect honeymoon in Morocco. Discover romantic riads in Marrakech, luxury Sahara desert camps, coastal Essaouira escapes, and Atlas Mountain hideaways. Sample itineraries and budget guide included.',
  keywords: [
    'morocco honeymoon',
    'romantic morocco',
    'marrakech honeymoon',
    'sahara luxury camp',
    'morocco romantic getaway',
    'honeymoon riad',
    'morocco couples trip',
    'essaouira honeymoon',
    'atlas mountains honeymoon',
    'fes romantic hotel',
    'la mamounia honeymoon',
    'royal mansour couples',
    'morocco wedding honeymoon',
    'romantic desert camp morocco',
  ],
  openGraph: {
    title: 'Honeymoon in Morocco | Romantic Getaways & Luxury Experiences',
    description:
      'Plan the perfect honeymoon in Morocco. Romantic riads, desert camps, coastal escapes, and mountain hideaways.',
    url: 'https://citytoursmorocco.com/honeymoon',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548018560-c7196e91a1e2?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Romantic riad courtyard in Marrakech with rose petals',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Honeymoon in Morocco',
  description:
    'A comprehensive guide to planning a romantic honeymoon in Morocco, covering luxury riads, desert camps, and unforgettable experiences.',
  url: 'https://citytoursmorocco.com/honeymoon',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const romanticDestinations = [
  {
    name: 'Marrakech Medina',
    description:
      'Stay in a centuries-old riad with a private courtyard, plunge pool, and rooftop terrace overlooking the medina. Rose petals on the bed, candlelit dinners under the stars, and the distant call to prayer create an unforgettable atmosphere. Marrakech is Morocco\'s most popular honeymoon base and for good reason.',
    highlights: ['Private courtyard pools', 'Rooftop terrace dining', 'Traditional hammam for two', 'Rose petal turndown'],
    image: 'https://images.unsplash.com/photo-1548018560-c7196e91a1e2?q=80&w=800',
    priceRange: '$150 - $800/night',
  },
  {
    name: 'Sahara Desert (Erg Chebbi)',
    description:
      'Sleep under a blanket of stars in a luxury desert camp among the golden dunes of Erg Chebbi near Merzouga. Private tented suites with en-suite bathrooms, four-poster beds, and private dining in the dunes make this a once-in-a-lifetime experience. The silence of the desert at night is profoundly intimate.',
    highlights: ['Private luxury tents', 'Sunset camel trek', 'Stargazing from your terrace', 'Candlelit dune dinner'],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    priceRange: '$200 - $1,200/night',
  },
  {
    name: 'Essaouira Coast',
    description:
      'The windswept Atlantic coast town of Essaouira offers a laid-back, bohemian romance. Walk hand-in-hand along the ramparts at sunset, enjoy fresh seafood by the harbor, and explore art galleries in the charming medina. The cool ocean breeze is a welcome contrast to inland heat.',
    highlights: ['Beach sunset walks', 'Fresh seafood dinners', 'Boutique ocean-view riads', 'Art gallery hopping'],
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800',
    priceRange: '$80 - $400/night',
  },
  {
    name: 'Atlas Mountain Hideaways',
    description:
      'Escape to a kasbah or mountain lodge nestled in the High Atlas. Wake up to panoramic views of snow-capped peaks, take scenic hikes through Berber villages, and warm up by the fire with Moroccan mint tea. Kasbah Tamadot and Kasbah Bab Ourika offer exceptional mountain romance.',
    highlights: ['Mountain-view suites', 'Private hiking guides', 'Fireside evenings', 'Berber village visits'],
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800',
    priceRange: '$100 - $600/night',
  },
  {
    name: 'Fes Palace Hotels',
    description:
      'Fes offers some of Morocco\'s most exquisite palace hotels, converted from centuries-old mansions. Intricate zellige tilework, carved cedar ceilings, and marble fountains surround you as you sip tea in opulent courtyards. Riad Fes and Palais Faraj are standout choices.',
    highlights: ['UNESCO medina setting', 'Palace-style architecture', 'Gourmet Fassi cuisine', 'Private guided medina tours'],
    image: 'https://images.unsplash.com/photo-1545041552-c7bf3e2daaee?q=80&w=800',
    priceRange: '$120 - $700/night',
  },
  {
    name: 'Oualidia Lagoon',
    description:
      'This hidden Atlantic lagoon between Casablanca and Essaouira is Morocco\'s best-kept romantic secret. La Sultana Oualidia offers overwater suites above the calm turquoise lagoon. Famous for its oyster farms, the village is blissfully quiet and perfect for couples seeking seclusion.',
    highlights: ['Overwater suites', 'Fresh oyster tastings', 'Kayaking the lagoon', 'Secluded beach walks'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    priceRange: '$200 - $500/night',
  },
  {
    name: 'Chefchaouen',
    description:
      'The blue-washed mountain town of Chefchaouen is impossibly photogenic and deeply romantic. Wander blue-painted alleys hand-in-hand, watch the sunset from the Spanish Mosque hilltop, and stay in a charming guesthouse with Rif Mountain views. The pace of life here invites genuine relaxation.',
    highlights: ['Blue-painted medina', 'Mountain sunset views', 'Waterfall day trips', 'Artisan craft shopping'],
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
    priceRange: '$60 - $250/night',
  },
  {
    name: 'Dades Valley & Rose Valley',
    description:
      'The Valley of Roses near Kelaat M\'Gouna produces the rose water used in riads across Morocco. Visit during the rose harvest in April-May for fields of pink Damask roses. The dramatic Dades Gorge nearby offers canyon-edge kasbahs with extraordinary views.',
    highlights: ['Rose harvest season', 'Gorge-edge kasbahs', 'Rose water distilleries', 'Dramatic canyon scenery'],
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800',
    priceRange: '$60 - $300/night',
  },
  {
    name: 'Agafay Desert',
    description:
      'Just 40 minutes from Marrakech, the rocky Agafay desert offers a luxury desert experience without the long drive to the Sahara. Glamping camps like Scarabeo Camp and Inara Camp provide stylish tents with Atlas Mountain views, private pools, and candlelit dinners under vast skies.',
    highlights: ['Close to Marrakech', 'Luxury glamping', 'Atlas Mountain views', 'Private pool tents'],
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800',
    priceRange: '$250 - $800/night',
  },
  {
    name: 'Tangier & the Strait',
    description:
      'Where Africa meets Europe, Tangier has a long history of attracting artists and romantics. Watch cargo ships and ferries cross the Strait of Gibraltar from a cafe terrace, dine at the legendary El Morocco Club, and stay at the newly restored El Minzah Hotel or the intimate Dar Nour.',
    highlights: ['Strait of Gibraltar views', 'Legendary cafe culture', 'Art gallery scene', 'European-Moroccan fusion'],
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    priceRange: '$80 - $400/night',
  },
];

const luxuryRiadsForCouples = [
  {
    name: 'La Mamounia',
    location: 'Marrakech',
    description:
      'Winston Churchill\'s favorite hotel, La Mamounia has defined Moroccan luxury since 1929. Set within eight acres of century-old gardens, it blends Art Deco elegance with traditional Moroccan craftsmanship. Request a garden-view suite and arrange a private dinner in the olive grove.',
    priceRange: 'From $700/night',
    romanticPerk: 'Private garden dinner with traditional musicians',
  },
  {
    name: 'Royal Mansour',
    location: 'Marrakech',
    description:
      'Commissioned by King Mohammed VI, every guest stays in a private three-story riad with plunge pool, rooftop solarium, and personal butler. The underground spa is a subterranean palace. For honeymooners, the Royal Mansour arranges rose petal baths and private rooftop stargazing.',
    priceRange: 'From $1,200/night',
    romanticPerk: 'Rose petal bath and private rooftop dinner',
  },
  {
    name: 'Amanjena',
    location: 'Marrakech',
    description:
      'Aman Resorts\' Moroccan property is a serene oasis of rose-pink pavilions surrounding an ancient basin. Minimalist luxury meets Moroccan architecture in spacious pavilions with private gardens, fireplaces, and outdoor dining areas. The silence here is remarkable.',
    priceRange: 'From $800/night',
    romanticPerk: 'Couples pavilion with private garden and fireplace',
  },
  {
    name: 'Kasbah Tamadot',
    location: 'Atlas Mountains',
    description:
      'Sir Richard Branson\'s Moroccan retreat, perched in the High Atlas foothills with panoramic mountain views. Each room is individually designed with antiques from around the world. The infinity pool appears to float above the valley. A helicopter transfer from Marrakech adds drama.',
    priceRange: 'From $600/night',
    romanticPerk: 'Infinity pool with Atlas panorama and Berber tent spa',
  },
  {
    name: 'La Sultana Marrakech',
    location: 'Marrakech',
    description:
      'Five interconnected riads forming a labyrinthine palace in the heart of the medina, steps from the Saadian Tombs. The rooftop pool overlooks the Koutoubia Mosque. La Sultana\'s hammam is one of the most beautiful in the city, with marble archways and heated stone beds.',
    priceRange: 'From $400/night',
    romanticPerk: 'Private hammam suite and rooftop pool with mosque views',
  },
  {
    name: 'Riad Fes',
    location: 'Fes',
    description:
      'A Relais & Chateaux property in the heart of the Fes medina, Riad Fes combines centuries-old architecture with contemporary luxury. The restaurant serves exceptional Fassi cuisine, and the rooftop terrace offers sweeping views across the ancient city. An ideal base for exploring the world\'s largest car-free medina together.',
    priceRange: 'From $250/night',
    romanticPerk: 'Rooftop dinner with panoramic medina views',
  },
  {
    name: 'La Sultana Oualidia',
    location: 'Oualidia',
    description:
      'Perched above the tranquil Oualidia lagoon, this boutique hotel offers suites with private terraces overlooking turquoise waters. The restaurant serves the freshest oysters in Morocco, harvested from the lagoon below. Kayak together at sunrise or book a couple\'s spa treatment with ocean views.',
    priceRange: 'From $300/night',
    romanticPerk: 'Oyster tasting on the lagoon and overwater spa',
  },
  {
    name: 'Dar Ahlam',
    location: 'Skoura, Ouarzazate',
    description:
      'A restored kasbah turned into an ultra-exclusive maison d\'hotes with only a handful of suites, surrounded by a 12-acre palm grove. There are no menus and no schedules -- meals appear wherever you wish, whether in the garden, by the pool, or in the desert. Every moment is bespoke.',
    priceRange: 'From $500/night (all-inclusive)',
    romanticPerk: 'Surprise dinner locations -- garden, pool, or desert',
  },
];

const romanticExperiences = [
  {
    icon: UtensilsCrossed,
    title: 'Private Riad Dinner',
    description:
      'A multi-course Moroccan feast served in the candlelit courtyard of a private riad. Your personal chef prepares tagine, pastilla, and Moroccan pastries while a traditional musician plays oud in the background.',
    cost: '$80 - $200 per couple',
  },
  {
    icon: Sunset,
    title: 'Sunset Camel Trek',
    description:
      'Ride side by side on camels through the golden Sahara dunes as the sun paints the sky in shades of orange and pink. Arrive at a private camp for mint tea and dates as darkness falls.',
    cost: '$60 - $150 per couple',
  },
  {
    icon: Sparkles,
    title: 'Hot Air Balloon over Marrakech',
    description:
      'Float above the palm groves and Atlas foothills at sunrise in a private hot air balloon with Ciel d\'Afrique. Champagne breakfast on landing with panoramic views of Marrakech and the mountains.',
    cost: '$250 - $400 per couple',
  },
  {
    icon: Bath,
    title: 'Couples Hammam & Spa',
    description:
      'Experience a traditional Moroccan hammam together. Black soap scrub, rhassoul clay mask, and argan oil massage in a steam-filled marble room. Heritage Spa and Les Bains de Marrakech offer exceptional private suites.',
    cost: '$60 - $180 per couple',
  },
  {
    icon: Moon,
    title: 'Rooftop Dinner Under the Stars',
    description:
      'Dine on a private rooftop terrace overlooking the Marrakech medina or Fes skyline. Lanterns, fresh flowers, and a curated wine list accompany a five-course tasting menu. Many luxury riads arrange this with 24 hours notice.',
    cost: '$100 - $300 per couple',
  },
  {
    icon: Star,
    title: 'Private Desert Camp Night',
    description:
      'A private suite tent in the Sahara with Persian rugs, copper lanterns, and a four-poster bed. Includes private dinner in the dunes, Berber music, and stargazing with a telescope and guide.',
    cost: '$200 - $600 per couple',
  },
  {
    icon: MapPin,
    title: 'Boat Trip in Essaouira',
    description:
      'Charter a private wooden fishing boat along the Essaouira coast. Sail past the Mogador islands, spot dolphins, and enjoy a fresh-caught seafood lunch prepared onboard.',
    cost: '$80 - $200 per couple',
  },
  {
    icon: UtensilsCrossed,
    title: 'Couples Cooking Class',
    description:
      'Shop together in a vibrant souk for fresh spices and ingredients, then learn to prepare classic Moroccan dishes like tagine, couscous, and pastilla. La Maison Arabe in Marrakech runs highly regarded classes.',
    cost: '$40 - $100 per couple',
  },
  {
    icon: Camera,
    title: 'Professional Couples Photoshoot',
    description:
      'Hire a professional photographer to capture your honeymoon memories in Morocco\'s most photogenic settings -- the blue streets of Chefchaouen, the golden dunes of the Sahara, or a candlelit riad courtyard.',
    cost: '$150 - $400 per session',
  },
  {
    icon: Mountain,
    title: 'Sahara Stargazing',
    description:
      'The Sahara desert offers some of the clearest night skies on Earth. A private stargazing session with telescopes and a knowledgeable guide reveals the Milky Way in breathtaking detail. Many luxury camps include this.',
    cost: '$30 - $80 per couple',
  },
];

const itinerary7Day = [
  {
    day: 1,
    title: 'Arrival in Marrakech',
    description:
      'Arrive at Marrakech Menara Airport. Private transfer to your luxury riad in the medina. Settle in with welcome mint tea on the rooftop terrace. Evening caleche ride through the palm groves, followed by a candlelit dinner at your riad.',
  },
  {
    day: 2,
    title: 'Marrakech Exploration',
    description:
      'Morning couples hammam at Heritage Spa or Les Bains de Marrakech. Explore the Majorelle Garden and Bahia Palace hand-in-hand. Afternoon shopping in the souks for leather goods, ceramics, and spices. Sunset drinks at a rooftop bar overlooking the Koutoubia Mosque.',
  },
  {
    day: 3,
    title: 'Atlas Mountains Escape',
    description:
      'Private transfer to Kasbah Tamadot or a luxury lodge in the Ourika Valley. Stop at a Berber village for traditional tea ceremony. Afternoon scenic hike through walnut groves with mountain views. Return for a romantic fireplace dinner.',
  },
  {
    day: 4,
    title: 'Journey to the Desert',
    description:
      'Scenic drive through the Tizi n\'Tichka pass, stopping at Ait Benhaddou kasbah and the Dades Valley. Arrive at your luxury desert camp in Merzouga. Sunset camel trek into the Erg Chebbi dunes. Private dinner under the stars.',
  },
  {
    day: 5,
    title: 'Sahara Desert Day',
    description:
      'Watch the sunrise over the dunes from your tent terrace. Morning at leisure or take a 4x4 desert excursion. Afternoon relaxation with a desert spa treatment. Evening stargazing session and Berber music around the campfire.',
  },
  {
    day: 6,
    title: 'Essaouira Coastal Romance',
    description:
      'Fly or drive to Essaouira. Check into an ocean-view riad in the medina. Afternoon walk along the ramparts and explore the art galleries. Fresh seafood dinner at the harbor as the sun sets over the Atlantic.',
  },
  {
    day: 7,
    title: 'Final Day & Departure',
    description:
      'Leisurely breakfast at the riad. Optional boat trip along the coast or morning on the beach. Shopping for souvenirs in the medina. Transfer back to Marrakech for your departure flight, carrying memories that will last a lifetime.',
  },
];

const itinerary10Day = [
  {
    day: 1,
    title: 'Arrival in Marrakech',
    description:
      'Private airport transfer to La Mamounia or Royal Mansour. Welcome mint tea on the terrace. Evening stroll through the Jemaa el-Fnaa square to experience the energy. Return for a private dinner at your hotel.',
  },
  {
    day: 2,
    title: 'Marrakech Discovery',
    description:
      'Private guided tour of Bahia Palace, the Saadian Tombs, and the Mellah. Lunch at Le Jardin in the medina. Afternoon couples hammam at La Sultana. Evening rooftop dinner at Nomad restaurant.',
  },
  {
    day: 3,
    title: 'Hot Air Balloon & Agafay',
    description:
      'Pre-dawn transfer for a sunrise hot air balloon flight over the palm groves. Champagne landing breakfast. Transfer to Scarabeo Camp in the Agafay desert for an afternoon of relaxation. Candlelit dinner with Atlas Mountain views.',
  },
  {
    day: 4,
    title: 'Atlas Mountains',
    description:
      'Drive to Kasbah Tamadot in the High Atlas. Stop at Berber villages along the way for tea. Afternoon hike in the Imlil valley with mountain guide. Evening fireside dinner overlooking the peaks.',
  },
  {
    day: 5,
    title: 'Journey to the Sahara',
    description:
      'Scenic drive over Tizi n\'Tichka pass to Ait Benhaddou. Continue through the Dades Valley to your luxury camp in Merzouga. Sunset camel trek to the highest dunes. Private dinner under the stars.',
  },
  {
    day: 6,
    title: 'Desert Day',
    description:
      'Sunrise from the dunes. Morning at leisure -- read by the pool, enjoy a desert spa treatment, or take a 4x4 expedition. Afternoon sandboarding. Evening stargazing with a private guide and telescope.',
  },
  {
    day: 7,
    title: 'Desert to Fes',
    description:
      'Morning transfer through the Ziz Gorge and Middle Atlas cedar forests (watch for Barbary macaques). Arrive in Fes and check into Riad Fes or Palais Faraj. Evening dinner at Nur restaurant.',
  },
  {
    day: 8,
    title: 'Fes Exploration',
    description:
      'Private guided tour of the world\'s oldest university (Al Quaraouiyine), the tanneries, and the most beautiful madrasas. Lunch at a hidden palace restaurant. Afternoon ceramics workshop where you paint your own piece together.',
  },
  {
    day: 9,
    title: 'Essaouira Beach Day',
    description:
      'Morning flight or drive to Essaouira. Check into a boutique ocean-view riad. Walk the ramparts, explore galleries, and enjoy fresh oysters at the harbor. Sunset dinner at Taros restaurant overlooking the sea.',
  },
  {
    day: 10,
    title: 'Departure',
    description:
      'Final breakfast by the ocean. Optional morning boat trip or beach walk. Transfer back to Marrakech airport for departure, or extend your stay along the coast.',
  },
];

const itinerary14Day = [
  {
    day: '1-2',
    title: 'Marrakech (La Mamounia or Royal Mansour)',
    description:
      'Arrival and immersion. Private medina tour, couples hammam, Majorelle Garden, souk shopping with a personal guide. Dinner at Dar Yacout and La Grande Table Marocaine on consecutive evenings.',
  },
  {
    day: '3',
    title: 'Agafay Desert Glamping',
    description:
      'Morning hot air balloon flight. Transfer to a luxury Agafay camp for an afternoon of poolside relaxation. Sunset quad biking or horseback riding. Candlelit dinner under the desert sky.',
  },
  {
    day: '4-5',
    title: 'Atlas Mountains (Kasbah Tamadot)',
    description:
      'Two nights at Branson\'s retreat. Private guided trek to Berber villages, infinity pool afternoons, cooking class with Berber women, fireside dinners with Atlas panoramas.',
  },
  {
    day: '6-7',
    title: 'Sahara Desert (Luxury Camp)',
    description:
      'Scenic drive through Ait Benhaddou and the Valley of Roses. Two nights in a private luxury camp at Erg Chebbi. Camel trek, 4x4 dune adventure, stargazing, Berber music, and total desert immersion.',
  },
  {
    day: '8-9',
    title: 'Fes (Riad Fes)',
    description:
      'Transfer through the Middle Atlas. Two nights exploring the world\'s largest medieval city. Private historian guide, tannery visit, ceramics workshop, dinner at Nur and a palace restaurant.',
  },
  {
    day: '10',
    title: 'Chefchaouen',
    description:
      'Day trip or overnight in the blue city. Photograph the blue-washed streets, hike to the Spanish Mosque for sunset, and enjoy a relaxed dinner in the main square.',
  },
  {
    day: '11-12',
    title: 'Essaouira (La Sultana or Heure Bleue Palais)',
    description:
      'Coastal romance. Two nights by the Atlantic. Private boat trip, oyster tasting at Oualidia en route, rampart sunset walks, seafood feasts, and relaxed beach mornings.',
  },
  {
    day: '13-14',
    title: 'Return to Marrakech',
    description:
      'Final two days back in the Red City. Revisit favorite spots, final souk shopping, farewell dinner at a private palace. Departure on day 14 with a lifetime of memories.',
  },
];

const budgetTiers = [
  {
    tier: 'Budget Romantic',
    range: '$2,000 - $3,500',
    perNight: '~$300-500/day for two',
    description: 'Charming mid-range riads, shared group excursions, and local dining experiences.',
    includes: [
      'Boutique riads ($80-150/night)',
      'Shared desert camp experience',
      'Local restaurant dining',
      'Public transport + some taxis',
      'Self-guided city exploration',
    ],
  },
  {
    tier: 'Mid-Range Romance',
    range: '$3,500 - $6,000',
    perNight: '~$500-850/day for two',
    description: 'Upscale riads with pools, private excursions, and fine dining at top restaurants.',
    includes: [
      'Luxury riads with pools ($150-350/night)',
      'Semi-private desert camp',
      'Mix of fine dining and local gems',
      'Private transfers throughout',
      'Guided experiences and tours',
    ],
  },
  {
    tier: 'Luxury Honeymoon',
    range: '$6,000 - $10,000+',
    perNight: '~$850-1,400+/day for two',
    description: 'Five-star palace hotels, private everything, bespoke experiences, and Michelin-level dining.',
    includes: [
      'Palace hotels & top-tier riads ($400-800+/night)',
      'Private luxury desert camp',
      'Private chef & exclusive dining',
      'Luxury 4x4 with personal driver',
      'Hot air balloon, spa, and private tours',
    ],
  },
];

const budgetDetailedBreakdown = [
  { item: 'International flights (round trip, from Europe)', low: '$200-400', mid: '$400-800', high: '$800-2,000+' },
  { item: 'Accommodation (7 nights)', low: '$560-1,050', mid: '$1,050-2,450', high: '$2,800-5,600+' },
  { item: 'Internal transport', low: '$100-200', mid: '$200-500', high: '$500-2,000' },
  { item: 'Food & dining (7 days)', low: '$200-350', mid: '$350-700', high: '$700-2,100' },
  { item: 'Activities & experiences', low: '$150-400', mid: '$400-1,000', high: '$1,000-4,000' },
  { item: 'Shopping & souvenirs', low: '$50-150', mid: '$150-500', high: '$500-2,000+' },
];

const bestMonths = [
  { month: 'March - May', rating: 5, note: 'Perfect weather, gardens in bloom, Rose Valley harvest in April-May. Ideal for everything.' },
  { month: 'September - November', rating: 5, note: 'Warm days, cool evenings, fewer crowds than spring. October is particularly pleasant.' },
  { month: 'December - February', rating: 3, note: 'Cool but romantic, perfect for desert trips, snow in Atlas for a cozy mountain retreat.' },
  { month: 'June - August', rating: 2, note: 'Very hot in Marrakech (40C+) and desert. Great for Essaouira and Atlantic coast.' },
];

const romanceByCity = [
  {
    city: 'Marrakech',
    icon: Heart,
    highlights: [
      'La Mamounia or Royal Mansour for the ultimate palace stay',
      'Sunset drinks at the rooftop of La Sultana or Riad Yasmine',
      'Private dinner at Dar Yacout or La Grande Table Marocaine',
      'Couples hammam at Heritage Spa (Bab Doukkala)',
      'Caleche ride through the Menara Gardens at golden hour',
    ],
  },
  {
    city: 'Fes',
    icon: Star,
    highlights: [
      'Riad Fes or Palais Faraj for a medina palace experience',
      'Private tour of the world\'s oldest university',
      'Dinner at Nur -- Chef Najat Kaanache\'s acclaimed restaurant',
      'Paint ceramics together at a Fes pottery workshop',
      'Rooftop sunset overlooking the ancient medina',
    ],
  },
  {
    city: 'Essaouira',
    icon: Sunset,
    highlights: [
      'Heure Bleue Palais for an elegant coastal stay',
      'Watch sunset from the Skala ramparts together',
      'Fresh oysters and seafood at the harbor restaurants',
      'Private sailing trip past the Mogador islands',
      'Browse art galleries in the bohemian medina',
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    highlights: [
      'Lina Ryad & Spa for a blue city boutique stay',
      'Sunrise hike to the Spanish Mosque viewpoint',
      'Photograph each other in endless blue streets',
      'Day trip to Akchour waterfalls for a swim',
      'Leisurely mint tea on a quiet terrace',
    ],
  },
  {
    city: 'Ouarzazate & Desert',
    icon: Moon,
    highlights: [
      'Dar Ahlam in Skoura for bespoke luxury',
      'Luxury camp in Erg Chebbi for a Sahara night',
      'Sunrise camel ride over golden dunes',
      'Visit Ait Benhaddou -- the Game of Thrones kasbah',
      'Stargazing under the clearest skies on Earth',
    ],
  },
];

const weddingHoneymoonTips = [
  {
    title: 'Legal Requirements for Marrying in Morocco',
    description:
      'Non-Muslim foreigners can legally marry in Morocco, but the process requires significant paperwork: birth certificates, passport copies, certificate of celibacy from your embassy, and a medical certificate. Start the process at least 2-3 months before your planned date. Many couples choose a symbolic ceremony in Morocco and complete the legal paperwork at home.',
  },
  {
    title: 'Best Venues for a Morocco Wedding',
    description:
      'La Mamounia and Royal Mansour offer full wedding planning services. For something more intimate, rent a private palace like Dar Elma or Dar Soukaina in Marrakech. Kasbah Tamadot in the Atlas Mountains provides a dramatic mountain backdrop. Budget $10,000-$50,000+ depending on scale.',
  },
  {
    title: 'Combining Wedding + Honeymoon',
    description:
      'Many couples host a 3-day celebration in Marrakech (welcome dinner, ceremony day, farewell brunch) then depart for a honeymoon loop through the desert and coast. This lets guests experience Morocco while you continue on a private adventure afterward.',
  },
  {
    title: 'Moroccan Wedding Traditions',
    description:
      'Incorporate Moroccan elements into your celebration: a traditional Berber tent for the ceremony, Moroccan musicians playing Gnawa or Andalusian music, a henna night for the bride, and a multi-course Moroccan feast with pastilla, lamb mechoui, and traditional pastries.',
  },
  {
    title: 'Wedding Planners Specializing in Morocco',
    description:
      'Work with a Morocco-based wedding planner who knows local vendors. Agencies like Boutique Souk, MoroccanRomance, and several hotel-affiliated planners handle everything from paperwork to entertainment. Expect to pay $2,000-$5,000 for planning services alone.',
  },
];

export default function HoneymoonPage() {
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
              'url(/images/hero-honeymoon.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Honeymoon</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4 text-red-400" />
            Romance in Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Honeymoon in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From candlelit riads in ancient medinas to luxury camps under Saharan stars &mdash; Morocco
            is one of the world&apos;s most romantic honeymoon destinations.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Why Morocco */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Perfect for Honeymoons
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a land of extraordinary contrasts that seem designed for romance. Imagine waking
                up in a centuries-old riad where the only sound is the gentle splash of a courtyard fountain,
                then spending the evening dining under a canopy of stars in the Sahara desert. Few destinations
                on Earth offer such a dramatic range of unforgettable experiences in such a compact geography.
              </p>
              <p>
                The country&apos;s legendary hospitality means that honeymoon couples are treated like royalty
                everywhere they go. Riad owners scatter rose petals on your bed, desert camp hosts prepare
                private candlelit dinners on the dunes, and restaurant owners present you with complimentary
                pastries when they learn you are newlyweds. Morocco&apos;s culture of generosity and celebration
                makes every couple feel special.
              </p>
              <p>
                Beyond the romance, Morocco offers exceptional value. A luxury honeymoon here costs a fraction
                of comparable experiences in Europe or the Maldives, yet the quality of accommodation, food,
                and service rivals anywhere in the world. You can stay in a palace hotel, dine on gourmet
                Moroccan cuisine, and enjoy private guided tours for significantly less than in other
                top honeymoon destinations. A week-long luxury honeymoon in Morocco typically runs
                $6,000-$10,000 for two &mdash; compared to $15,000-$25,000 for the Maldives or Bora Bora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 10 Romantic Destinations */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top 10 Romantic Destinations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ten unforgettable settings for your Moroccan honeymoon, each offering a completely different
            romantic experience.
          </p>
          <div className="space-y-8">
            {romanticDestinations.map((dest, index) => (
              <div
                key={dest.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full gradient-moroccan flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--color-primary)] text-sm font-semibold">
                      {dest.priceRange}
                    </span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {dest.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-sm"
                      >
                        <Heart className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Riads for Couples */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Luxury Riads & Hotels for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hand-picked properties that go above and beyond for honeymooners, with special romantic
            perks that make all the difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {luxuryRiadsForCouples.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                  {riad.location}
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {riad.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {riad.description}
                </p>
                <div className="flex items-start gap-2 text-sm bg-[var(--color-primary)]/5 p-3 rounded-lg mb-3">
                  <Heart className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-primary)]">{riad.romanticPerk}</span>
                </div>
                <div className="text-[var(--color-primary)] font-bold text-sm">{riad.priceRange}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Romantic Experiences */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            10 Unforgettable Romantic Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Curated moments that will make your Moroccan honeymoon truly extraordinary.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {romanticExperiences.map((exp, index) => (
              <div key={exp.title} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--color-primary)]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <exp.icon className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="font-bold text-[var(--text-primary)]">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                    {exp.description}
                  </p>
                  <span className="text-xs font-medium text-[var(--color-accent-dark)]">
                    {exp.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Romance by City */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Romance by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Specific romantic recommendations for each Moroccan destination. Use this to
            customize your itinerary based on which cities you plan to visit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanceByCity.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <city.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {city.city}
                </h3>
                <ul className="space-y-2.5">
                  {city.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-Day Itinerary */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            7-Day Classic Honeymoon Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A perfectly paced week combining Marrakech magic, Atlas Mountain serenity,
            Sahara adventure, and coastal bliss. Estimated cost: $3,500-$7,000 for two.
          </p>
          <div className="space-y-4">
            {itinerary7Day.map((day) => (
              <div key={day.day} className="card-moroccan p-6 flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Day {day.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{day.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Day Itinerary */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            10-Day Extended Honeymoon Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For couples who want a deeper Morocco experience, adding Fes, the Agafay desert, and
            more time to simply be together. Estimated cost: $5,000-$12,000 for two.
          </p>
          <div className="space-y-4">
            {itinerary10Day.map((day) => (
              <div key={day.day} className="card-moroccan p-6 flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Day {day.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{day.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14-Day Itinerary */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            14-Day Grand Honeymoon Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The ultimate Morocco honeymoon covering every highlight. Two weeks gives you time to
            slow down and truly soak in each destination. Estimated cost: $8,000-$20,000+ for two.
          </p>
          <div className="space-y-4">
            {itinerary14Day.map((day) => (
              <div key={day.day} className="card-moroccan p-6 flex gap-5">
                <div className="flex-shrink-0 w-16 h-14 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Day {day.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{day.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Honeymoon Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers incredible value at every budget level. These estimates cover 7 nights
            for two people, including accommodation, meals, activities, and transport.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {budgetTiers.map((tier) => (
              <div key={tier.tier} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{tier.tier}</h3>
                <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)] mb-1">
                  {tier.range}
                </div>
                <div className="text-sm text-[var(--text-muted)] mb-3">{tier.perNight}</div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                <ul className="space-y-2 mt-auto">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Detailed Breakdown Table */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              Detailed Cost Breakdown (7 Nights, Two People)
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-4 text-sm font-bold text-[var(--text-primary)]">Expense</th>
                      <th className="text-center p-4 text-sm font-bold text-[var(--color-primary)]">Budget</th>
                      <th className="text-center p-4 text-sm font-bold text-[var(--color-primary)]">Mid-Range</th>
                      <th className="text-center p-4 text-sm font-bold text-[var(--color-primary)]">Luxury</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetDetailedBreakdown.map((row) => (
                      <tr key={row.item} className="border-t border-[var(--border)]">
                        <td className="p-4 text-sm text-[var(--text-secondary)]">{row.item}</td>
                        <td className="p-4 text-sm text-center text-[var(--text-secondary)]">{row.low}</td>
                        <td className="p-4 text-sm text-center text-[var(--text-secondary)]">{row.mid}</td>
                        <td className="p-4 text-sm text-center text-[var(--text-secondary)]">{row.high}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Best Time for a Morocco Honeymoon
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a year-round destination, but some seasons are more romantic than others.
          </p>
          <div className="space-y-4">
            {bestMonths.map((period) => (
              <div key={period.month} className="card-moroccan p-5 flex items-center gap-5">
                <div className="flex-shrink-0 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < period.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border)]'
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)]">{period.month}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{period.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 card-moroccan p-6">
            <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
              Pro Tip: The Sweet Spot
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              October is arguably the single best month for a Morocco honeymoon. The summer heat
              has broken, tourist crowds have thinned, the desert is comfortably warm, and hotels
              often offer shoulder-season rates. April is equally excellent, with the added bonus
              of the Rose Valley harvest and gardens in full bloom across Marrakech.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding + Honeymoon */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Wedding + Honeymoon in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is increasingly popular as a destination wedding location. Here is what you
            need to know about combining your wedding and honeymoon in the Kingdom.
          </p>
          <div className="space-y-6">
            {weddingHoneymoonTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Honeymoon Planning Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to make your Moroccan honeymoon run smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                Book Early
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s top riads and luxury camps have limited capacity. La Mamounia,
                Royal Mansour, and premium desert camps can sell out 3-6 months ahead during peak
                season (March-May, September-November). Book as early as possible.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[var(--color-primary)]" />
                Tell Them You Are Honeymooners
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moroccan hospitality culture means that announcing your honeymoon often results in
                complimentary upgrades, rose petals on the bed, welcome champagne, or a special
                dessert at dinner. Always mention it when booking and on arrival.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <TreePalm className="w-5 h-5 text-[var(--color-primary)]" />
                Do Not Over-Schedule
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The biggest mistake honeymooners make is trying to see everything. Morocco is meant
                to be savored. Build in free mornings to linger over breakfast, idle afternoons at
                the pool, and unplanned hours to simply wander together.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                Use a Morocco Travel Specialist
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                For a honeymoon, consider booking through a Morocco-specialist travel agency. They
                handle logistics, secure the best rooms, arrange private transfers, and troubleshoot
                any issues. The small markup (10-15%) is well worth the peace of mind.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Wine className="w-5 h-5 text-[var(--color-primary)]" />
                Alcohol & Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco is a Muslim country but alcohol is available in licensed hotels, restaurants,
                and bars. All luxury properties serve wine and cocktails. Moroccan wine from the
                Meknes region (Chateau Roslane, Domaine de la Zouina) is surprisingly good. Expect
                to pay $8-$15 for a glass of wine at a hotel bar.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                Tipping & Cash
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Carry small bills in Moroccan Dirhams for tips. Budget about 200-300 MAD ($20-30)
                per day for tips to guides, drivers, and hotel staff. Most luxury hotels accept
                credit cards, but the souks and smaller restaurants are cash-only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Wine className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Dream Honeymoon
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Let us help you create unforgettable memories in the Kingdom of Morocco. Explore our
            city guides, accommodation listings, and trip planning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
            </Link>
            <Link
              href="/luxury"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Gem className="w-4 h-4" /> Luxury Guide
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
