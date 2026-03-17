export interface Riad {
  slug: string
  name: string
  city: string
  neighborhood: string
  type: 'Riad' | 'Hotel' | 'Kasbah' | 'Dar' | 'Villa' | 'Eco-Lodge' | 'Desert Camp' | 'Boutique Hotel'
  priceRange: string
  description: string
  images: string[]
  rating: number
  reviewCount: number
  amenities: string[]
  highlights: string[]
  rooms: { type: string; price: string }[]
  location: { address: string; lat: number; lng: number }
  features: string[]
  bestFor: string[]
  checkIn: string
  checkOut: string
  tags: string[]
  tips: string[]
}

export const riads: Riad[] = [
  {
    slug: 'riad-fes-el-bali',
    name: 'Riad Fes El Bali',
    city: 'Fes',
    neighborhood: 'Fes El Bali Medina',
    type: 'Riad',
    priceRange: 'from 800 MAD (seasonal pricing applies)',
    description: 'A beautifully restored 17th-century riad in the heart of the Fes medina, featuring hand-carved cedar ceilings, zellige tilework, and a tranquil courtyard with a marble fountain.',
    images: ['/images/hero-fes-medina.webp', '/images/photo-fes-tanneries.webp'],
    rating: 4.8,
    reviewCount: 342,
    amenities: ['Free WiFi', 'Rooftop Terrace', 'Hammam', 'Airport Transfer', 'Breakfast Included', 'Air Conditioning'],
    highlights: ['Authentic 17th-century architecture', 'Walking distance to Bou Inania Madrasa', 'Traditional Moroccan breakfast on the rooftop'],
    rooms: [
      { type: 'Standard Double', price: 'from 800 MAD' },
      { type: 'Superior Suite', price: 'from 1,400 MAD' },
      { type: 'Royal Suite', price: 'from 2,000 MAD' },
    ],
    location: { address: 'Derb Bennis, Fes El Bali, Fes', lat: 34.0622, lng: -4.9735 },
    features: ['Courtyard', 'Fountain', 'Cedar Ceilings', 'Zellige Tilework'],
    bestFor: ['Couples', 'History Lovers', 'Cultural Immersion'],
    checkIn: '14:00',
    checkOut: '11:00',
    tags: ['medina', 'historic', 'luxury', 'romantic'],
    tips: ['Ask the staff to arrange a guided medina tour', 'Book the rooftop dinner for sunset views over the medina'],
  },
  {
    slug: 'riad-jardin-secret-marrakech',
    name: 'Riad Jardin Secret',
    city: 'Marrakech',
    neighborhood: 'Mouassine',
    type: 'Riad',
    priceRange: 'from 1,200 MAD (seasonal pricing applies)',
    description: 'A lush oasis hidden in the bustling Mouassine quarter. This riad features a stunning garden courtyard with orange trees, a heated pool, and exquisitely decorated suites.',
    images: ['/images/hero-marrakech.webp', '/images/photo-marrakech-medina.webp'],
    rating: 4.9,
    reviewCount: 518,
    amenities: ['Heated Pool', 'Spa', 'Rooftop Bar', 'Free WiFi', 'Concierge', 'Breakfast Included'],
    highlights: ['Heated pool in the courtyard', '5-minute walk to Jemaa el-Fnaa', 'Award-winning spa treatments'],
    rooms: [
      { type: 'Garden Room', price: 'from 1,200 MAD' },
      { type: 'Deluxe Suite', price: 'from 2,200 MAD' },
      { type: 'Jardin Suite', price: 'from 3,500 MAD' },
    ],
    location: { address: 'Rue Mouassine, Marrakech Medina', lat: 31.6315, lng: -7.9868 },
    features: ['Pool', 'Garden', 'Spa', 'Bar', 'Orange Trees'],
    bestFor: ['Luxury Travelers', 'Couples', 'Honeymooners'],
    checkIn: '15:00',
    checkOut: '12:00',
    tags: ['luxury', 'pool', 'spa', 'romantic', 'garden'],
    tips: ['Book a couples hammam session in advance', 'The rooftop bar has the best sunset cocktails in the medina'],
  },
  {
    slug: 'kasbah-tamadot-atlas',
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    neighborhood: 'Asni Valley',
    type: 'Kasbah',
    priceRange: 'from 3,000 MAD (seasonal pricing applies)',
    description: 'Sir Richard Branson\'s luxury retreat perched high in the Atlas Mountains with panoramic views of snow-capped peaks, Berber-inspired suites, and an infinity pool overlooking the valley.',
    images: ['/images/hero-atlas-mountains.webp', '/images/photo-atlas-village.webp'],
    rating: 4.9,
    reviewCount: 287,
    amenities: ['Infinity Pool', 'Spa', 'Tennis Court', 'Helicopter Transfer', 'Fine Dining', 'Mountain Guides'],
    highlights: ['Panoramic Atlas Mountain views', 'Infinity pool at 1,200m altitude', 'Guided treks to Berber villages'],
    rooms: [
      { type: 'Deluxe Room', price: 'from 3,000 MAD' },
      { type: 'Superior Suite', price: 'from 5,500 MAD' },
      { type: 'Berber Tent Suite', price: 'from 8,000 MAD' },
    ],
    location: { address: 'BP 67, Asni, Atlas Mountains', lat: 31.2507, lng: -7.9866 },
    features: ['Mountain Views', 'Infinity Pool', 'Tennis', 'Fine Dining'],
    bestFor: ['Luxury Travelers', 'Adventure Seekers', 'Wellness'],
    checkIn: '15:00',
    checkOut: '11:00',
    tags: ['luxury', 'mountains', 'views', 'wellness', 'adventure'],
    tips: ['Book the mountain trek with a local Berber guide', 'Visit in spring when the almond trees are in bloom'],
  },
  {
    slug: 'sahara-luxury-camp-merzouga',
    name: 'Sahara Luxury Desert Camp',
    city: 'Merzouga',
    neighborhood: 'Erg Chebbi',
    type: 'Desert Camp',
    priceRange: 'from 1,500 MAD (seasonal pricing applies)',
    description: 'A luxury glamping experience in the heart of the Erg Chebbi dunes. Each tent features handwoven Berber carpets, en-suite bathrooms, and private terraces for stargazing.',
    images: ['/images/hero-sahara-desert.webp', '/images/photo-desert-camp.webp'],
    rating: 4.7,
    reviewCount: 203,
    amenities: ['Private Terrace', 'En-Suite Bathroom', 'Camel Trek', 'Bonfire Dinner', 'Stargazing', '4x4 Transfer'],
    highlights: ['Sleep under Saharan stars', 'Sunrise camel trek over the dunes', 'Traditional Berber music and dinner by bonfire'],
    rooms: [
      { type: 'Standard Tent', price: 'from 1,500 MAD' },
      { type: 'Luxury Tent', price: 'from 2,500 MAD' },
      { type: 'Royal Tent', price: 'from 4,000 MAD' },
    ],
    location: { address: 'Erg Chebbi, Merzouga', lat: 31.0801, lng: -4.0131 },
    features: ['Desert Views', 'Stargazing', 'Camel Treks', 'Bonfire'],
    bestFor: ['Adventure Seekers', 'Couples', 'Photographers'],
    checkIn: '16:00',
    checkOut: '10:00',
    tags: ['desert', 'glamping', 'adventure', 'romantic', 'unique'],
    tips: ['Request the dune-top tent for the best sunrise views', 'Bring warm layers — desert nights drop below 10°C even in summer'],
  },
  {
    slug: 'dar-mogador-essaouira',
    name: 'Dar Mogador',
    city: 'Essaouira',
    neighborhood: 'Medina',
    type: 'Dar',
    priceRange: 'from 600 MAD (seasonal pricing applies)',
    description: 'A charming wind-swept dar steps from the Essaouira ramparts, blending Atlantic coastal vibes with traditional Moroccan craftsmanship. Features ocean-view terraces and fresh seafood breakfasts.',
    images: ['/images/hero-essaouira.webp', '/images/photo-essaouira-port.webp'],
    rating: 4.6,
    reviewCount: 178,
    amenities: ['Ocean View Terrace', 'Free WiFi', 'Breakfast Included', 'Surf Board Rental', 'Airport Transfer'],
    highlights: ['Ocean views from the rooftop', 'Fresh seafood breakfast daily', '2-minute walk to the beach'],
    rooms: [
      { type: 'Coastal Room', price: 'from 600 MAD' },
      { type: 'Ocean Suite', price: 'from 1,000 MAD' },
      { type: 'Mogador Suite', price: 'from 1,500 MAD' },
    ],
    location: { address: 'Rue Ibn Rochd, Essaouira Medina', lat: 31.5085, lng: -9.7595 },
    features: ['Ocean Views', 'Terrace', 'Surf Access', 'Seafood'],
    bestFor: ['Surfers', 'Beach Lovers', 'Budget Luxury'],
    checkIn: '14:00',
    checkOut: '11:00',
    tags: ['coastal', 'surfing', 'beach', 'relaxed', 'seafood'],
    tips: ['Book the ocean suite for incredible sunset views', 'Ask about surf lesson packages with local instructors'],
  },
  {
    slug: 'atlas-eco-lodge-imlil',
    name: 'Atlas Eco Lodge',
    city: 'Imlil',
    neighborhood: 'Toubkal Valley',
    type: 'Eco-Lodge',
    priceRange: 'from 400 MAD (seasonal pricing applies)',
    description: 'A sustainable mountain retreat at the gateway to Jebel Toubkal, Morocco\'s highest peak. Built with local stone and powered by solar energy, it offers authentic Berber hospitality.',
    images: ['/images/hero-atlas-mountains.webp', '/images/photo-mountain-trek.webp'],
    rating: 4.5,
    reviewCount: 156,
    amenities: ['Solar Powered', 'Organic Meals', 'Trekking Guides', 'Free WiFi', 'Mountain Views', 'Fireplace'],
    highlights: ['Gateway to Jebel Toubkal trek', '100% solar powered', 'Organic farm-to-table meals'],
    rooms: [
      { type: 'Mountain Room', price: 'from 400 MAD' },
      { type: 'Valley Suite', price: 'from 800 MAD' },
      { type: 'Toubkal Suite', price: 'from 1,200 MAD' },
    ],
    location: { address: 'Douar Imlil, Toubkal Valley', lat: 31.1372, lng: -7.9194 },
    features: ['Eco-Friendly', 'Mountain Views', 'Organic Food', 'Trekking Base'],
    bestFor: ['Trekkers', 'Eco-Travelers', 'Budget Travelers'],
    checkIn: '13:00',
    checkOut: '10:00',
    tags: ['eco', 'mountains', 'trekking', 'sustainable', 'budget'],
    tips: ['Book the Toubkal trek package for best value', 'Visit the weekly Berber market in nearby Asni on Saturdays'],
  },
];
