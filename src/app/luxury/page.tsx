import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Crown,
  Star,
  MapPin,
  UtensilsCrossed,
  Sparkles,
  Clock,
  Gem,
  Building2,
  Wine,
  Globe,
  Users,
  Camera,
  Plane,
  Train,
  ShoppingBag,
  DollarSign,
  Shield,
  Bath,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luxury Morocco | 5-Star Hotels, Private Tours & Exclusive Experiences',
  description:
    'Experience the finest Morocco has to offer. Royal Mansour, La Mamounia, Kasbah Tamadot, private desert camps, helicopter tours, and bespoke luxury itineraries.',
  keywords: [
    'luxury morocco',
    'royal mansour marrakech',
    'la mamounia',
    'luxury riad morocco',
    'private tours morocco',
    'luxury desert camp morocco',
    'morocco five star hotels',
    'kasbah tamadot',
    'amanjena marrakech',
    'luxury travel morocco',
    'morocco fine dining',
    'morocco helicopter tour',
    'morocco luxury shopping',
    'al boraq first class',
  ],
  openGraph: {
    title: 'Luxury Morocco | 5-Star Hotels, Private Tours & Exclusive Experiences',
    description:
      'Experience the finest Morocco has to offer. Palace hotels, private tours, and bespoke luxury experiences.',
    url: 'https://citytoursmorocco.com/luxury',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Luxury Moroccan palace hotel courtyard',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Luxury Travel in Morocco',
  description:
    'A guide to the finest luxury travel experiences in Morocco, including palace hotels, private tours, and exclusive experiences.',
  url: 'https://citytoursmorocco.com/luxury',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const luxuryHotels = [
  {
    name: 'Royal Mansour Marrakech',
    location: 'Marrakech',
    description:
      'Commissioned by King Mohammed VI, the Royal Mansour is Morocco\'s ultimate luxury hotel. Instead of rooms, guests stay in private three-story riads, each with a plunge pool, rooftop solarium, and personal butler. The underground spa is a subterranean palace of marble and gold. Service is telepathic -- staff move through hidden tunnels beneath the property.',
    highlights: ['Private 3-story riad suites', 'Michelin-level restaurants', 'Personal butler service', 'Underground luxury spa'],
    priceRange: 'From $1,200/night',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800',
    stars: 5,
  },
  {
    name: 'La Mamounia',
    location: 'Marrakech',
    description:
      'Winston Churchill\'s favorite hotel, La Mamounia has defined Moroccan luxury since 1929. Set within eight acres of century-old gardens, it blends Art Deco elegance with traditional Moroccan craftsmanship. The pool pavilion and gardens are legendary. Recently renovated suites feature hand-laid zellige tilework and original artwork.',
    highlights: ['Historic 1929 palace', 'Eight acres of gardens', 'Four restaurants including Italian', 'Iconic swimming pool'],
    priceRange: 'From $700/night',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Kasbah Tamadot',
    location: 'Atlas Mountains',
    description:
      'Sir Richard Branson\'s Moroccan retreat, perched in the foothills of the High Atlas with panoramic mountain views. Each room is individually designed with antiques collected from around the world. The infinity pool seems to float above the valley. Branson bought the property after a balloon trip over the Atlas.',
    highlights: ['Richard Branson\'s private retreat', 'Infinity pool with Atlas views', 'Berber tent spa', 'Mountain excursions'],
    priceRange: 'From $600/night',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Amanjena',
    location: 'Marrakech',
    description:
      'Aman Resorts\' Moroccan property is a serene oasis of rose-pink pavilions surrounding an ancient basin (or "jena" in Arabic). Minimalist luxury meets Moroccan architecture in spacious pavilions with private gardens, fireplaces, and outdoor dining areas. The silence and space here is remarkable for a property so close to the medina.',
    highlights: ['Aman-level service', 'Rose-pink pavilion suites', 'Ancient irrigation basin pool', 'Private garden dining'],
    priceRange: 'From $800/night',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e91a1e2?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Mandarin Oriental Marrakech',
    location: 'Marrakech',
    description:
      'Twenty hectares of gardens surround this contemporary take on Moroccan luxury. Freestanding villas each have their own private pool, garden, and outdoor living area. The spa, spread across 1,800 square meters, is one of Africa\'s finest. The property feels more like a private estate than a hotel.',
    highlights: ['Private-pool villas', '20 hectares of gardens', '1,800 sqm luxury spa', 'Atlas Mountain views'],
    priceRange: 'From $500/night',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800',
    stars: 5,
  },
  {
    name: 'La Sultana Marrakech',
    location: 'Marrakech',
    description:
      'Five interconnected riads forming a labyrinthine palace in the heart of the medina, steps from the Saadian Tombs. Twenty-eight unique rooms, each with its own personality. The rooftop pool overlooks the Koutoubia Mosque, and the hammam features heated marble beds beneath Moorish arches.',
    highlights: ['Five-riad medina palace', 'Rooftop pool with Koutoubia views', 'Private heated hammam', 'Steps from Saadian Tombs'],
    priceRange: 'From $400/night',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Riad Fes (Relais & Chateaux)',
    location: 'Fes',
    description:
      'The only Relais & Chateaux property in Fes, set in a restored 19th-century palace in the heart of the medina. Original zellige, carved stucco, and cedar ceilings have been meticulously preserved. The restaurant serves refined Fassi cuisine, and the rooftop terrace offers sweeping medina views.',
    highlights: ['Relais & Chateaux member', 'Restored 19th-century palace', 'Exceptional Fassi cuisine', 'Medina panoramic terrace'],
    priceRange: 'From $250/night',
    image: 'https://images.unsplash.com/photo-1545041552-c7bf3e2daaee?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Palais Faraj',
    location: 'Fes',
    description:
      'Perched on the edge of the Fes medina, Palais Faraj was built on the ruins of a historic citadel. The panoramic views from the infinity pool and restaurant are the finest in the city. Spacious suites feature traditional craftsmanship with modern comforts, and the spa uses local argan and rose products.',
    highlights: ['Best views in Fes', 'Infinity pool overlooking medina', 'Citadel history', 'Full-service spa'],
    priceRange: 'From $200/night',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Dar Ahlam',
    location: 'Skoura, Ouarzazate',
    description:
      'An ultra-exclusive maison d\'hotes in a restored kasbah surrounded by a 12-acre palm grove. With only a handful of suites, it operates more like a private house. There are no menus, no schedules, and no set dining locations -- every meal is a surprise, served wherever you wish. Named "House of Dreams" in Arabic.',
    highlights: ['Ultra-exclusive (limited suites)', 'No menus -- surprise dining', 'Restored kasbah in palm grove', 'Bespoke everything'],
    priceRange: 'From $500/night (all-inclusive)',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Mazagan Beach & Golf Resort',
    location: 'El Jadida',
    description:
      'A sprawling five-star beachfront resort on the Atlantic coast, designed around an 18-hole Gary Player golf course. The resort includes a casino, multiple pools, a kids\' club, and a spa. It is the closest Morocco comes to a Caribbean-style beach resort, with Moroccan flair.',
    highlights: ['Gary Player golf course', 'Beachfront Atlantic setting', 'Casino and nightlife', 'Full family resort'],
    priceRange: 'From $300/night',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Four Seasons Resort Marrakech',
    location: 'Marrakech',
    description:
      'Set on 16 acres of manicured gardens, the Four Seasons Marrakech offers the brand\'s signature consistency alongside genuine Moroccan character. Two pools, a Jean-Claude Biguine spa, and restaurants serving Moroccan and Mediterranean cuisine. Family-friendly but equally suited to couples.',
    highlights: ['16 acres of gardens', 'Two swimming pools', 'Jean-Claude Biguine spa', 'Four Seasons service standard'],
    priceRange: 'From $600/night',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800',
    stars: 5,
  },
  {
    name: 'La Sultana Oualidia',
    location: 'Oualidia',
    description:
      'Overlooking the tranquil Oualidia lagoon, this boutique gem offers suites with private terraces above turquoise waters. The restaurant serves what may be Morocco\'s freshest oysters, harvested from the lagoon below. A hidden paradise between Casablanca and Essaouira.',
    highlights: ['Lagoon-front suites', 'Fresh oyster restaurant', 'Remote Atlantic setting', 'Kayaking and boat trips'],
    priceRange: 'From $300/night',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Fairmont Royal Palm Marrakech',
    location: 'Marrakech',
    description:
      'A palatial resort on 231 hectares of olive and palm groves with views of the Atlas Mountains. Features an 18-hole golf course, a 3,500 sqm spa, and both villa and suite accommodation with private pools. The scale and grandeur are unmatched in Morocco.',
    highlights: ['231-hectare estate', '18-hole golf course', '3,500 sqm spa', 'Private pool villas'],
    priceRange: 'From $400/night',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800',
    stars: 5,
  },
  {
    name: 'Heure Bleue Palais',
    location: 'Essaouira',
    description:
      'Essaouira\'s finest address, this Relais & Chateaux hotel occupies a restored 18th-century mansion overlooking the ocean. A rooftop pool and terrace provide stunning Atlantic views. The cinema, library, and art gallery add layers of character. Rooms blend classic Mogador style with contemporary comfort.',
    highlights: ['Relais & Chateaux', 'Ocean-view rooftop pool', 'Private cinema', 'Art gallery on-site'],
    priceRange: 'From $200/night',
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=800',
    stars: 5,
  },
  {
    name: 'El Minzah Hotel',
    location: 'Tangier',
    description:
      'Tangier\'s grand dame, El Minzah has hosted writers, diplomats, and dignitaries since 1930. Recently restored to its former glory, the hotel blends Moorish elegance with Art Deco accents. The garden courtyard, Moroccan restaurant, and rooftop views of the Strait of Gibraltar are legendary.',
    highlights: ['1930s heritage hotel', 'Strait of Gibraltar views', 'Moorish-Art Deco style', 'Legendary guest history'],
    priceRange: 'From $180/night',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    stars: 5,
  },
];

const luxuryDesertCamps = [
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert (near Marrakech)',
    description:
      'Just 40 minutes from Marrakech, Scarabeo offers a luxury desert experience without the long drive to the Sahara. Stylish nomadic tents with vintage furnishings sit in the rocky Agafay desert with Atlas Mountain views. Each tent is uniquely decorated with Berber textiles and antiques.',
    priceRange: 'From $350/night',
    highlights: ['Close to Marrakech', 'Stylish vintage tents', 'Atlas views', 'Sundowner cocktails'],
  },
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi, Sahara',
    description:
      'Deep in the golden dunes of Erg Chebbi, this camp offers spacious suites with en-suite bathrooms, air conditioning, and private terraces facing the dunes. Private dining, camel treks, and stargazing are included. The tallest dunes in Morocco surround you.',
    priceRange: 'From $500/night',
    highlights: ['True Sahara location', 'En-suite luxury tents', 'Private camel treks', 'Gourmet dune dining'],
  },
  {
    name: 'Desert Luxury Camp Erg Chigaga',
    location: 'Erg Chigaga, Sahara',
    description:
      'The most remote and exclusive desert camp in Morocco, located in the vast Erg Chigaga dunes near Zagora. Reaching it requires a 4x4 adventure through the desert. Complete isolation and pristine dunes guarantee an unmatched experience. This is real Sahara immersion.',
    priceRange: 'From $600/night',
    highlights: ['Most remote camp', 'Complete isolation', 'Pristine dunes', '4x4 desert adventure access'],
  },
  {
    name: 'Inara Camp',
    location: 'Agafay Desert',
    description:
      'An elegant Agafay desert camp with private pool tents, fine dining, and sweeping Atlas panoramas. Closer to a boutique hotel than a traditional camp, yet still delivering the raw beauty of the desert landscape. Perfect for those who want desert without the distance.',
    priceRange: 'From $400/night',
    highlights: ['Private pool tents', 'Fine dining', 'Atlas panoramas', '40 min from Marrakech'],
  },
];

const fineDining = [
  {
    name: 'La Grande Table Marocaine',
    location: 'Royal Mansour, Marrakech',
    description: 'The pinnacle of Moroccan gastronomy. Chef Yannick Alleno reimagines traditional Moroccan cuisine with French technique. Multi-course tasting menus in an opulent setting with hand-painted ceilings.',
    cuisine: 'Modern Moroccan',
    priceRange: '$150 - $300 per person',
  },
  {
    name: 'La Grande Table Francaise',
    location: 'Royal Mansour, Marrakech',
    description: 'The Royal Mansour\'s French fine dining counterpart, also overseen by Yannick Alleno. Seasonal French cuisine with Moroccan ingredients in an Art Deco-inspired dining room.',
    cuisine: 'French-Moroccan Fusion',
    priceRange: '$120 - $250 per person',
  },
  {
    name: 'Le Marocain',
    location: 'La Mamounia, Marrakech',
    description: 'Classic Moroccan haute cuisine in La Mamounia\'s stunning dining room. Legendary pastilla, lamb mechoui, and Moroccan pastries prepared by master chefs. The setting alone is worth the visit.',
    cuisine: 'Traditional Moroccan',
    priceRange: '$100 - $200 per person',
  },
  {
    name: 'Dar Yacout',
    location: 'Marrakech Medina',
    description: 'A legendary riad restaurant where a multi-course feast unfolds across candlelit rooms and terraces. Reservations are essential and the experience is theatrical. Start with cocktails on the rooftop before descending into the feast.',
    cuisine: 'Traditional Moroccan feast',
    priceRange: '$80 - $120 per person',
  },
  {
    name: 'Nur',
    location: 'Fes Medina',
    description: 'Najat Kaanache\'s acclaimed restaurant redefines Moroccan cuisine with global techniques and local ingredients. Trained at elBulli, Noma, and Per Se, Chef Kaanache brings world-class technique to deeply Moroccan flavors.',
    cuisine: 'Contemporary Moroccan',
    priceRange: '$80 - $150 per person',
  },
  {
    name: 'Le Jardin',
    location: 'Marrakech Medina',
    description: 'Dining in a lush garden hidden within the medina. Serves refined Moroccan and Mediterranean cuisine in one of Marrakech\'s most beautiful settings. The perfect lunch spot between medina explorations.',
    cuisine: 'Moroccan-Mediterranean',
    priceRange: '$40 - $80 per person',
  },
  {
    name: 'Nomad',
    location: 'Marrakech Medina',
    description: 'Modern Moroccan cuisine on a multi-level terrace overlooking the spice market. Tangia, lamb burgers with harissa, and innovative cocktails. One of the city\'s most popular reservations.',
    cuisine: 'Modern Moroccan',
    priceRange: '$30 - $60 per person',
  },
  {
    name: 'El Morocco Club',
    location: 'Tangier',
    description: 'A glamorous restaurant-bar in the Tangier medina that channels the city\'s golden age of international intrigue. Jazz nights, creative cocktails, and refined Moroccan-international cuisine in a gorgeous Art Deco setting.',
    cuisine: 'Moroccan-International',
    priceRange: '$50 - $100 per person',
  },
  {
    name: 'Restaurant Numero 7',
    location: 'Fes Medina',
    description: 'A hidden gem in the Fes medina serving traditional Fassi cuisine refined over generations. Family recipes passed down through centuries, served in an intimate riad setting. Reservations are by phone only.',
    cuisine: 'Traditional Fassi',
    priceRange: '$40 - $80 per person',
  },
  {
    name: 'Taros',
    location: 'Essaouira',
    description: 'Essaouira\'s landmark rooftop restaurant overlooking the harbor and ramparts. Fresh seafood, Moroccan wines, and live music on weekends. Book a terrace table for sunset.',
    cuisine: 'Seafood & Moroccan',
    priceRange: '$30 - $60 per person',
  },
];

const exclusiveExperiences = [
  {
    icon: Building2,
    title: 'Private Palace Dinner',
    description:
      'Hire an entire palace for an evening. A private chef prepares a multi-course feast while traditional musicians and dancers perform. Palaces available include Dar El Bacha and El Badi in Marrakech. Minimum 24-hour notice required.',
    cost: '$1,000 - $5,000+',
  },
  {
    icon: Globe,
    title: 'Helicopter Tour of the Atlas',
    description:
      'Soar over the High Atlas Mountains, remote Berber villages, and the edge of the Sahara in a private helicopter. Land at a mountain lodge for a gourmet lunch before returning to Marrakech. Héli Maroc and Atlas Hélicoptères operate regular charter flights.',
    cost: '$2,000 - $5,000',
  },
  {
    icon: Camera,
    title: 'Private Yacht from Tangier or Essaouira',
    description:
      'Charter a luxury yacht along the Atlantic or Mediterranean coast. From Tangier, sail the Strait of Gibraltar with views of Spain. From Essaouira, cruise past the Mogador islands with seafood prepared onboard by a private chef.',
    cost: '$1,500 - $4,000 per day',
  },
  {
    icon: Sparkles,
    title: 'Private Hot Air Balloon',
    description:
      'A sunrise balloon flight over the Marrakech palm groves and Atlas foothills with Ciel d\'Afrique. Private basket ensures complete intimacy. Champagne breakfast on landing with panoramic views.',
    cost: '$600 - $1,200',
  },
  {
    icon: Users,
    title: 'Private Medina Tour with Historian',
    description:
      'A renowned Moroccan historian or art expert guides you through the hidden corners of Fes or Marrakech medina. Access private homes, active workshops, and spaces not open to the public. Some guides hold PhD-level expertise in Islamic art.',
    cost: '$300 - $800',
  },
  {
    icon: Wine,
    title: 'Moroccan Wine Tasting Experience',
    description:
      'Visit the emerging Moroccan wine regions around Meknes and the Atlas foothills. Private tastings at Domaine de la Zouina, Chateau Roslane, and Les Celliers de Meknes. Morocco\'s winemaking tradition dates back to Roman times.',
    cost: '$200 - $500',
  },
  {
    icon: UtensilsCrossed,
    title: 'Private Chef Experience',
    description:
      'Hire a private Moroccan chef for an evening or your entire stay. They shop the souks for ingredients, prepare a multi-course feast, and explain each dish\'s cultural significance. Available through most luxury hotels and via specialist agencies.',
    cost: '$300 - $1,000 per evening',
  },
  {
    icon: Bath,
    title: 'Royal Hammam Experience',
    description:
      'Book an entire traditional hammam for a private session. Black soap scrub, ghassoul clay, rose water, and argan oil massage. The Royal Mansour and La Sultana offer the most lavish hammam experiences in the country.',
    cost: '$200 - $600 per person',
  },
];

const privateTours = [
  {
    title: 'Private Guided City Tours',
    description: 'Expert English-speaking guides with deep historical knowledge. Skip lines at monuments, access hidden spots and private riads, and customize every minute of your itinerary. Available in all major cities.',
    cost: '$200 - $500/day',
  },
  {
    title: 'Luxury 4x4 Sahara Expedition',
    description: 'Travel in a luxury Land Cruiser or Range Rover with a private driver-guide. Custom route through kasbahs, oases, gorges, and desert landscapes at your own pace. Overnight in luxury camps.',
    cost: '$400 - $1,000/day',
  },
  {
    title: 'Private Atlas Trekking',
    description: 'Professional mountain guides lead custom treks with mule support, gourmet picnic lunches, and luxury camp or lodge accommodation along the route. Options from 1-day hikes to multi-day expeditions.',
    cost: '$300 - $800/day',
  },
  {
    title: 'Cultural Immersion Tours',
    description: 'Behind-the-scenes access to artisan workshops, private cooking lessons with renowned chefs, and invitations to local homes. Learn to make zellige tile, weave Berber carpets, or cook family recipes.',
    cost: '$250 - $600/day',
  },
];

const vipAirportServices = [
  {
    title: 'VIP Airport Meet & Greet',
    description: 'A personal assistant meets you at the aircraft door, escorts you through a dedicated immigration channel, and handles baggage while you relax in a VIP lounge. Available at Marrakech, Casablanca, and Fes airports.',
    cost: '$100 - $250 per person',
  },
  {
    title: 'Private Airport Transfer',
    description: 'Luxury Mercedes S-Class, BMW 7 Series, or Range Rover with English-speaking driver waiting at arrivals. Complimentary water, cold towels, and WiFi. Prebooked and confirmed.',
    cost: '$80 - $200 per transfer',
  },
  {
    title: 'Private Jet Charter',
    description: 'For ultimate flexibility, charter a private jet between Morocco\'s airports. Casablanca to Marrakech in 30 minutes, or Marrakech to the Sahara (Errachidia) in under an hour. Several operators serve Morocco.',
    cost: '$3,000 - $15,000 per flight',
  },
];

const luxuryTrain = {
  name: 'Al Boraq High-Speed Train -- First Class',
  description:
    'Morocco\'s Al Boraq is Africa\'s first high-speed train, connecting Tangier to Casablanca in 2 hours 10 minutes at speeds up to 320 km/h. First class offers spacious leather seats, power outlets, complimentary beverages, and a quiet, comfortable ride. The route passes through beautiful countryside and coastal scenery.',
  highlights: [
    'Tangier to Casablanca in 2h10 (vs. 4h45 by conventional train)',
    'First class: spacious leather reclining seats',
    'Complimentary beverages and snack service',
    'WiFi available onboard',
    'Connects to conventional trains to Marrakech, Fes, and Rabat',
  ],
  cost: 'First class: 300-400 MAD ($30-40). Business: 200-300 MAD ($20-30)',
  tip: 'Book at oncf.ma or at the station. First class sells out on Friday and Sunday evenings. The route follows the Atlantic coast -- sit on the left for ocean views heading south.',
};

const luxuryShopping = [
  {
    city: 'Marrakech',
    spots: [
      { name: '33 Rue Majorelle', description: 'Concept store near the Majorelle Garden selling curated Moroccan design, fashion, and homeware. High-end Moroccan craftsmanship at fixed prices.' },
      { name: 'Lalla by Mia', description: 'Contemporary Moroccan fashion and accessories. Leather bags, silk scarves, and jewelry designed in Marrakech with traditional techniques.' },
      { name: 'Ministero del Gusto', description: 'Housed in a stunning riad, this showroom displays museum-quality Moroccan antiques, textiles, and furniture. A treasure trove for serious collectors.' },
      { name: 'Souk Semmarine & Souk el Kebir', description: 'The main souk arteries for leather goods, ceramics, lanterns, and textiles. Haggling is expected -- start at 40-50% of the asking price.' },
      { name: 'Max & Jan', description: 'Belgian-Moroccan concept store in a renovated riad. Modern interpretations of Moroccan crafts, from ceramics to fashion.' },
    ],
  },
  {
    city: 'Casablanca',
    spots: [
      { name: 'Morocco Mall', description: 'North Africa\'s largest shopping mall with 600+ stores including Galeries Lafayette, Zara, and Moroccan designer boutiques. Also features an aquarium and IMAX cinema.' },
      { name: 'Anfa Place', description: 'Upscale shopping center in the Anfa district with international luxury brands, fine dining, and a premium cinema.' },
      { name: 'Habous Quarter', description: 'The "new medina" built in the 1930s combines French and Moroccan architecture. Excellent for olives, pastries, leather goods, and antiques at fair fixed prices.' },
    ],
  },
  {
    city: 'Fes',
    spots: [
      { name: 'Fes Tanneries', description: 'The famous Chouara Tannery produces some of the world\'s finest leather. Buy directly from artisans -- bags, jackets, and slippers at the source.' },
      { name: 'Fes Pottery Cooperative', description: 'Watch artisans hand-paint intricate geometric patterns on ceramics. Buy plates, bowls, and vases directly from the makers.' },
    ],
  },
];

const golfResorts = [
  {
    name: 'Royal Golf Marrakech',
    description: 'Founded in 1933, Morocco\'s oldest golf course was a favorite of Winston Churchill. The 27-hole course winds through olive, eucalyptus, and palm trees with Atlas Mountain views.',
    cost: 'Green fees from $80',
  },
  {
    name: 'Fairmont Royal Palm Golf & Country Club',
    description: 'An 18-hole championship course designed on 231 hectares with panoramic Atlas views. The clubhouse, pro shop, and practice facilities are world-class.',
    cost: 'Green fees from $120',
  },
  {
    name: 'Mazagan Golf Course (El Jadida)',
    description: 'An 18-hole Gary Player-designed links course along the Atlantic coast. Ocean breezes and dramatic seaside holes make this a memorable round.',
    cost: 'Green fees from $100',
  },
  {
    name: 'Michlifen Golf & Resort (Ifrane)',
    description: 'Set in the Middle Atlas mountains at 1,600m altitude, this Jack Nicklaus-designed course offers a unique mountain golf experience surrounded by cedar forests.',
    cost: 'Green fees from $90',
  },
];

const itinerary = [
  { day: 1, title: 'Arrive at Royal Mansour', desc: 'Private VIP airport transfer. Settle into your three-story riad suite. Afternoon spa treatment at the underground hammam. Evening private rooftop dinner overlooking the medina.', cost: '$1,500-2,500' },
  { day: 2, title: 'Marrakech Discovery', desc: 'Private historian-led medina tour with exclusive access to Bahia Palace private rooms. Lunch at Le Jardin. Afternoon at Majorelle Garden (VIP entrance). Evening feast at Dar Yacout.', cost: '$800-1,500' },
  { day: 3, title: 'Hot Air Balloon & Spa', desc: 'Sunrise private balloon flight with Ciel d\'Afrique ($400-600). Return for a full morning at the Royal Mansour spa. Afternoon shopping with a personal stylist guide. Dinner at La Grande Table Marocaine.', cost: '$1,200-2,200' },
  { day: 4, title: 'Atlas Mountains', desc: 'Private transfer to Kasbah Tamadot ($600/night). Stop at Berber village for private tea ceremony. Afternoon guided hike with gourmet picnic lunch. Evening fireside dinner with mountain views.', cost: '$1,000-1,800' },
  { day: 5, title: 'Kasbah Tamadot', desc: 'Morning at leisure by the infinity pool. Afternoon Berber cooking masterclass with the head chef. Visit to a women\'s cooperative. Sunset cocktails overlooking the Atlas range.', cost: '$800-1,400' },
  { day: 6, title: 'Sahara Journey', desc: 'Private helicopter ($3,000-5,000) or luxury 4x4 to the Sahara. Scenic stop at Ait Benhaddou. Arrive at luxury desert camp. Private sunset camel procession. Gourmet dune dinner under stars.', cost: '$1,500-5,500' },
  { day: 7, title: 'Sahara Experience', desc: 'Sunrise from your private terrace. Morning desert spa treatment. 4x4 dune exploration and sandboarding. Afternoon at leisure with Berber tea ceremony. Private stargazing dinner with astronomer.', cost: '$800-1,400' },
  { day: 8, title: 'Fes Transfer', desc: 'Private flight ($2,000-4,000) or luxury transfer to Fes. Check into Riad Fes Relais & Chateaux ($250-500/night). Afternoon at leisure exploring the medina. Evening dinner at Nur.', cost: '$1,000-3,000' },
  { day: 9, title: 'Fes Exploration', desc: 'Private art historian tour of Al Quaraouiyine, madrasas, and tanneries. Exclusive ceramic workshop. Lunch at a private palace. Afternoon at a traditional hammam. Farewell dinner at Restaurant Numero 7.', cost: '$800-1,500' },
  { day: 10, title: 'Departure', desc: 'Final morning breakfast on the rooftop terrace with panoramic medina views. Optional visit to the Merenid Tombs. Private VIP transfer to Fes airport.', cost: '$300-600' },
];

const conciergeServices = [
  'Airport VIP meet-and-greet with fast-track immigration at all major airports',
  'Private luxury vehicle with English-speaking driver for entire stay',
  'Restaurant reservations at Morocco\'s most exclusive establishments',
  'Personal shopping guide for souks and designer boutiques',
  'Private palace or riad rental for events, celebrations, or dinners',
  'Bespoke itinerary design by local luxury travel specialists',
  'On-call English-speaking concierge throughout your trip',
  'Private photography sessions at Morocco\'s most iconic locations',
  'Helicopter and private jet charter arrangements',
  'Advance spa and hammam bookings at top properties',
];

export default function LuxuryPage() {
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
              'url(https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Luxury</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4 text-[var(--color-accent)]" />
            Premium Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Luxury Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Palace hotels, private desert camps, bespoke tours, and exclusive experiences &mdash;
            discover Morocco&apos;s world-class luxury offerings.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Intro */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s World-Class Luxury
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has quietly become one of the world&apos;s premier luxury destinations. The
                kingdom boasts some of Africa&apos;s finest hotels, a culinary scene that rivals
                Paris and Tokyo, and a tradition of handcrafted artisanship that elevates every
                detail of the guest experience. When the King of Morocco personally commissions a
                hotel &mdash; as with the Royal Mansour &mdash; you know the standard is set
                extraordinarily high.
              </p>
              <p>
                What sets Moroccan luxury apart is its authenticity. This is not generic five-star
                hospitality transplanted from elsewhere. It is deeply rooted in centuries of Moroccan
                craftsmanship: hand-carved cedarwood, hand-laid zellige tilework, hand-woven Berber
                textiles, and a tradition of hospitality that predates the modern hotel industry
                by a thousand years. Every palace hotel, luxury riad, and desert camp tells a story
                of Moroccan culture and artistry.
              </p>
              <p>
                Despite its world-class quality, Moroccan luxury remains significantly more accessible
                than comparable experiences in Europe, the Caribbean, or the Maldives. A week at
                Morocco&apos;s finest hotels with private tours and exclusive dining costs roughly
                what three nights at top-tier European properties would run. The value is extraordinary:
                expect to spend $10,000-$20,000 for a week that would cost $30,000-$50,000 elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 15 Hotels */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 15 Luxury Hotels & Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s finest properties, each offering a unique expression of world-class luxury.
            From palace hotels in Marrakech to Atlantic coast retreats and mountain hideaways.
          </p>
          <div className="space-y-8">
            {luxuryHotels.map((hotel, index) => (
              <div
                key={hotel.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-2/5 relative h-64 md:h-auto min-h-[280px]">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full gradient-moroccan flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </span>
                    <div className="flex items-center gap-0.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      {Array.from({ length: hotel.stars }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                    {hotel.location}
                  </div>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {hotel.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.highlights.map((h) => (
                      <span key={h} className="tag tag-accent">{h}</span>
                    ))}
                  </div>
                  <div className="text-[var(--color-primary)] font-bold">{hotel.priceRange}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desert Camps */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Luxury Desert Camps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sleep under the stars in five-star comfort. Choose between the nearby Agafay desert
            or the true Sahara experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {luxuryDesertCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan p-6">
                <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                  {camp.location}
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {camp.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{camp.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {camp.highlights.map((h) => (
                    <span key={h} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="text-[var(--color-primary)] font-bold text-sm">{camp.priceRange}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Experiences */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Exclusive Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Once-in-a-lifetime moments available in Morocco, from private palace dinners
            to helicopter tours over the Atlas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exclusiveExperiences.map((exp) => (
              <div key={exp.title} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <exp.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{exp.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{exp.description}</p>
                  <span className="text-sm font-medium text-[var(--color-primary)]">{exp.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Airport & Luxury Train */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* VIP Airport */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-[var(--color-primary)]" />
                VIP Airport Services
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Arrive and depart in style with these premium airport services available at
                Morocco&apos;s major airports.
              </p>
              <div className="space-y-4">
                {vipAirportServices.map((service) => (
                  <div key={service.title} className="card-moroccan p-5">
                    <h3 className="font-bold text-[var(--text-primary)] mb-1">{service.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{service.description}</p>
                    <span className="text-sm font-medium text-[var(--color-primary)]">{service.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Luxury Train */}
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Train className="w-6 h-6 text-[var(--color-primary)]" />
                {luxuryTrain.name}
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                {luxuryTrain.description}
              </p>
              <div className="card-moroccan p-6">
                <ul className="space-y-3 mb-4">
                  {luxuryTrain.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Sparkles className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="text-sm font-medium text-[var(--color-primary)] mb-2">{luxuryTrain.cost}</div>
                <div className="flex items-start gap-2 text-sm bg-[var(--color-accent)]/5 p-3 rounded-lg">
                  <Crown className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span className="text-[var(--color-accent-dark)]">{luxuryTrain.tip}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fine Dining */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Fine Dining Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s culinary scene rivals the world&apos;s best. From Yannick Alleno at
            the Royal Mansour to Najat Kaanache in Fes, these restaurants represent the pinnacle
            of Moroccan gastronomy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fineDining.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="text-xs font-medium text-[var(--color-secondary)] mb-1">{restaurant.location}</div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{restaurant.name}</h3>
                <span className="tag tag-accent text-xs mb-3 inline-block">{restaurant.cuisine}</span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{restaurant.description}</p>
                <div className="text-sm font-medium text-[var(--color-primary)]">{restaurant.priceRange}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Shopping */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Luxury Shopping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From curated concept stores in Marrakech to North Africa&apos;s largest mall in
            Casablanca. Morocco offers unique luxury shopping that blends artisan tradition
            with contemporary design.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {luxuryShopping.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  {city.city}
                </h3>
                <div className="space-y-4">
                  {city.spots.map((spot) => (
                    <div key={spot.name} className="border-l-2 border-[var(--color-accent)]/30 pl-3">
                      <h4 className="font-bold text-sm text-[var(--text-primary)]">{spot.name}</h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{spot.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golf Resorts */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Championship Golf
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has emerged as a premier golf destination with courses designed by Gary Player,
            Jack Nicklaus, and other legends. Year-round sunshine and spectacular mountain
            backdrops make for unforgettable rounds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {golfResorts.map((course) => (
              <div key={course.name} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{course.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{course.description}</p>
                <span className="text-sm font-medium text-[var(--color-primary)]">{course.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Tours */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Private Guided Tours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privateTours.map((tour) => (
              <div key={tour.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{tour.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{tour.description}</p>
                <span className="text-sm font-medium text-[var(--color-primary)]">{tour.cost}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Week of Luxury Itinerary with Costs */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            A Week of Luxury: 10-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The ultimate luxury Morocco experience, from palace hotels to private desert camps,
            with estimated daily costs for two people.
          </p>
          <p className="text-center text-[var(--color-primary)] font-bold mb-12">
            <DollarSign className="w-5 h-5 inline-block mr-1" />
            Estimated total: $10,000 - $22,000 for two (excluding international flights)
          </p>
          <div className="space-y-4">
            {itinerary.map((day) => (
              <div key={day.day} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Day {day.day}</span>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{day.title}</h3>
                    <span className="text-xs font-medium text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded-full">
                      {day.cost}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Services */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Concierge Services
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Luxury travel in Morocco is made effortless with these available services.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-3">
              {conciergeServices.map((service) => (
                <div key={service} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <Sparkles className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Practical Tips for Luxury Travelers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--color-primary)]" />
                Book 3-6 Months Ahead
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s top properties have limited capacity. Royal Mansour has only 53
                riads, Dar Ahlam has fewer than 10 suites. During peak season (March-May,
                September-November), the best rooms sell out months in advance.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                Tipping Culture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Budget 200-400 MAD ($20-40) per day for tips. Hotel porters: 20-50 MAD. Restaurant
                servers: 10-15% of the bill. Private guides: 200-500 MAD per day. Drivers:
                100-200 MAD per day. Tips are expected and appreciated.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                Travel Insurance
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Always carry comprehensive travel insurance. Morocco&apos;s best private clinics
                are in Casablanca and Marrakech. Most luxury hotels have on-call doctors. For
                helicopter evacuation from remote areas, ensure your policy covers this.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Wine className="w-5 h-5 text-[var(--color-primary)]" />
                Alcohol Availability
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                All luxury hotels serve alcohol. Moroccan wine (from Meknes) is good and
                affordable at $8-$15 per glass. Imported wines and spirits are available but
                expensive. Outside hotels, licensed restaurants in major cities serve alcohol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Crown className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience Morocco in Style
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Begin planning your luxury Moroccan experience. Browse our curated recommendations
            and let us help you create the trip of a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/honeymoon"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Heart className="w-4 h-4" /> Honeymoon Guide
            </Link>
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Destinations
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
