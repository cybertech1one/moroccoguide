export interface RestaurantData {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  cuisineType: 'moroccan' | 'french' | 'mediterranean' | 'seafood' | 'street_food' | 'international' | 'fusion';
  priceRange: 1 | 2 | 3 | 4;
  description: string;
  specialties: string[];
  openingHours: string;
  image: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
}

export const CUISINE_TYPES = [
  { id: 'moroccan', label: 'Moroccan' },
  { id: 'french', label: 'French' },
  { id: 'mediterranean', label: 'Mediterranean' },
  { id: 'seafood', label: 'Seafood' },
  { id: 'street_food', label: 'Street Food' },
  { id: 'international', label: 'International' },
  { id: 'fusion', label: 'Fusion' },
] as const;

export const restaurants: RestaurantData[] = [
  { slug: 'le-jardin', name: 'Le Jardin', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 3, description: 'A lush garden restaurant hidden in the medina serving refined Moroccan cuisine amid tropical plants.', specialties: ['Tagine with Prunes', 'Pastilla', 'Fresh Juices'], openingHours: '12pm - 11pm', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.5, reviewCount: 2340, isFeatured: true },
  { slug: 'cafe-clock-fes', name: 'Cafe Clock', citySlug: 'fes', cityName: 'Fes', cuisineType: 'fusion', priceRange: 2, description: 'A cultural cafe in a restored medina house famous for its camel burger and traditional music nights.', specialties: ['Camel Burger', 'Moroccan Tapas', 'Date Milkshake'], openingHours: '9am - 10pm', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80', rating: 4.4, reviewCount: 3120, isFeatured: true },
  { slug: 'nomad', name: 'NOMAD', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'fusion', priceRange: 3, description: 'A trendy rooftop restaurant above the spice square offering modern Moroccan cuisine with panoramic medina views.', specialties: ['Lamb Shoulder', 'Zaalouk', 'Moroccan Salads'], openingHours: '12pm - 11pm', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.6, reviewCount: 2780, isFeatured: true },
  { slug: 'al-fassia', name: 'Al Fassia', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 3, description: 'Renowned women-run restaurant serving exquisite traditional Moroccan cuisine since 1987.', specialties: ['Lamb Tagine', 'Rfissa', 'Moroccan Pastries'], openingHours: '12pm - 2:30pm, 7:30pm - 11pm', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.7, reviewCount: 1890, isFeatured: true },
  { slug: 'la-sqala', name: 'La Sqala', citySlug: 'casablanca', cityName: 'Casablanca', cuisineType: 'moroccan', priceRange: 2, description: 'A charming garden restaurant set in an 18th-century bastion, famous for its traditional breakfasts and tagines.', specialties: ['Moroccan Breakfast', 'Tagine', 'Fresh Pastries'], openingHours: '8am - 11pm', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80', rating: 4.3, reviewCount: 2560, isFeatured: false },
  { slug: 'ricks-cafe', name: "Rick's Cafe", citySlug: 'casablanca', cityName: 'Casablanca', cuisineType: 'international', priceRange: 4, description: 'An homage to the classic film Casablanca, a piano bar restaurant in a restored riad with Art Deco styling.', specialties: ['Grilled Sea Bass', 'Beef Filet', 'Cocktails'], openingHours: '12pm - 3pm, 6:30pm - 1am', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80', rating: 4.2, reviewCount: 3450, isFeatured: true },
  { slug: 'dar-hatim', name: 'Dar Hatim', citySlug: 'fes', cityName: 'Fes', cuisineType: 'moroccan', priceRange: 2, description: 'An authentic family-run restaurant in the heart of the Fes medina offering home-cooked Fassi cuisine.', specialties: ['Fassi Tagine', 'Harira', 'Mechoui'], openingHours: '12pm - 10pm', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80', rating: 4.6, reviewCount: 890, isFeatured: false },
  { slug: 'jemaa-food-stalls', name: 'Jemaa el-Fnaa Food Stalls', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'street_food', priceRange: 1, description: 'The legendary open-air food market that transforms Jemaa el-Fnaa each evening into Morocco\'s greatest dining experience.', specialties: ['Grilled Meats', 'Snail Soup', 'Sheep Head', 'Fresh OJ'], openingHours: '6pm - midnight', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.5, reviewCount: 8920, isFeatured: true },
  { slug: 'le-foundouk', name: 'Le Foundouk', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'fusion', priceRange: 4, description: 'Upscale dining in a beautifully restored foundouk (caravanserai) with French-Moroccan fusion cuisine.', specialties: ['Duck Pastilla', 'Seafood Risotto', 'Chocolate Fondant'], openingHours: '7pm - midnight, closed Monday', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.5, reviewCount: 1560, isFeatured: false },
  { slug: 'essaouira-fish-grills', name: 'Port Fish Grills', citySlug: 'essaouira', cityName: 'Essaouira', cuisineType: 'seafood', priceRange: 1, description: 'A row of outdoor fish grill stalls in the harbor serving the freshest catch of the day at unbeatable prices.', specialties: ['Grilled Sardines', 'Shrimp', 'Mixed Fish Platter', 'Sea Urchin'], openingHours: '11am - 6pm', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80', rating: 4.6, reviewCount: 4560, isFeatured: true },
  { slug: 'dar-zellij', name: 'Dar Zellij', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 3, description: 'A palatial riad restaurant offering refined Moroccan cuisine in a setting of extraordinary zellige tilework.', specialties: ['Seven Vegetable Couscous', 'Pigeon Pastilla', 'Lamb Mrouzia'], openingHours: '7:30pm - 11pm', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.4, reviewCount: 1230, isFeatured: false },
  { slug: 'ocean-vagabond', name: 'Ocean Vagabond', citySlug: 'essaouira', cityName: 'Essaouira', cuisineType: 'mediterranean', priceRange: 2, description: 'A beachfront restaurant and surf shack serving fresh seafood and Mediterranean fare with ocean views.', specialties: ['Fish Tagine', 'Grilled Octopus', 'Beach Salads'], openingHours: '9am - 10pm', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80', rating: 4.3, reviewCount: 780, isFeatured: false },
  { slug: 'la-cuisine-de-lahlou', name: 'La Cuisine de Lahlou', citySlug: 'tangier', cityName: 'Tangier', cuisineType: 'moroccan', priceRange: 2, description: 'A tiny, authentic restaurant in the Tangier medina known for its exceptional home-style Moroccan cooking.', specialties: ['Fish Chermoula', 'Tagine Kefta', 'Moroccan Salads'], openingHours: '12pm - 10pm', image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80', rating: 4.7, reviewCount: 560, isFeatured: false },
  { slug: 'ruined-garden', name: 'The Ruined Garden', citySlug: 'fes', cityName: 'Fes', cuisineType: 'moroccan', priceRange: 2, description: 'A magical garden restaurant built in the ruins of a riad, offering seasonal Moroccan and Mediterranean food.', specialties: ['Seasonal Tagine', 'Moroccan Salads', 'Homemade Bread'], openingHours: '12pm - 10pm', image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80', rating: 4.6, reviewCount: 1340, isFeatured: true },
  { slug: 'dar-naji', name: 'Dar Naji', citySlug: 'tangier', cityName: 'Tangier', cuisineType: 'moroccan', priceRange: 2, description: 'An elegant medina restaurant overlooking the port, renowned for its traditional Tangerian cuisine and pastries.', specialties: ['Tangine Djaj', 'Pastilla', 'Moroccan Pastries'], openingHours: '12pm - 11pm', image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80', rating: 4.4, reviewCount: 780, isFeatured: false },
  { slug: 'cafe-des-epices', name: 'Cafe des Epices', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 2, description: 'A lively rooftop cafe overlooking the Rahba Kedima spice square, perfect for people-watching and light meals.', specialties: ['Mint Tea', 'Avocado Smoothie', 'Moroccan Sandwiches'], openingHours: '9am - 10pm', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.4, reviewCount: 3450, isFeatured: false },
  { slug: 'amal-center', name: 'Amal Women\'s Center', citySlug: 'marrakech', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 1, description: 'A social enterprise restaurant training disadvantaged women, serving excellent homestyle Moroccan food at great prices.', specialties: ['Daily Set Menu', 'Couscous Friday', 'Fresh Salads'], openingHours: '12pm - 4pm', image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80', rating: 4.6, reviewCount: 1890, isFeatured: false },
  { slug: 'basmane', name: 'Basmane', citySlug: 'chefchaouen', cityName: 'Chefchaouen', cuisineType: 'moroccan', priceRange: 2, description: 'A charming restaurant on the main square serving traditional Rif Mountain cuisine with terrace seating.', specialties: ['Goat Cheese Salad', 'Berber Tagine', 'Mountain Herbs Tea'], openingHours: '11am - 10pm', image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80', rating: 4.3, reviewCount: 670, isFeatured: false },
  { slug: 'dinarjat', name: 'Dinarjat', citySlug: 'rabat', cityName: 'Rabat', cuisineType: 'moroccan', priceRange: 3, description: 'A refined Moroccan restaurant in a 17th-century palace with live Andalusian music and traditional decor.', specialties: ['Mechoui', 'Royal Couscous', 'Pastilla'], openingHours: '12pm - 3pm, 7pm - 11pm', image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80', rating: 4.5, reviewCount: 560, isFeatured: false },
  { slug: 'chez-driss', name: 'Chez Driss', citySlug: 'essaouira', cityName: 'Essaouira', cuisineType: 'moroccan', priceRange: 1, description: 'A legendary local bakery and cafe famous for its pastries, fresh juices, and prime people-watching spot.', specialties: ['Almond Horn', 'Fresh Orange Juice', 'Moroccan Pastries'], openingHours: '7am - 9pm', image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80', rating: 4.3, reviewCount: 2340, isFeatured: false },
];

export function getRestaurantBySlug(slug: string): RestaurantData | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function getRestaurantsByCity(citySlug: string): RestaurantData[] {
  return restaurants.filter((r) => r.citySlug === citySlug);
}
