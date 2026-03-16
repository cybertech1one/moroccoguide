export interface AccommodationData {
  slug: string;
  name: string;
  citySlug: string;
  cityName: string;
  type: 'hotel' | 'riad' | 'hostel' | 'resort' | 'kasbah' | 'desert_camp' | 'guesthouse';
  starRating: number;
  description: string;
  priceFromMad: number;
  amenities: string[];
  image: string;
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
}

export const ACCOMMODATION_TYPES = [
  { id: 'hotel', label: 'Hotel' },
  { id: 'riad', label: 'Riad' },
  { id: 'hostel', label: 'Hostel' },
  { id: 'resort', label: 'Resort' },
  { id: 'kasbah', label: 'Kasbah' },
  { id: 'desert_camp', label: 'Desert Camp' },
  { id: 'guesthouse', label: 'Guesthouse' },
] as const;

export const accommodations: AccommodationData[] = [
  { slug: 'la-mamounia', name: 'La Mamounia', citySlug: 'marrakech', cityName: 'Marrakech', type: 'hotel', starRating: 5, description: 'Legendary palace hotel set within 8 hectares of gardens, a symbol of Moroccan luxury since 1923.', priceFromMad: 5500, amenities: ['Pool', 'Spa', 'Restaurant', 'Bar', 'Garden', 'Fitness', 'Concierge'], image: '/images/hero-riad-interior.webp', rating: 4.9, reviewCount: 3450, isFeatured: true },
  { slug: 'riad-yasmine', name: 'Riad Yasmine', citySlug: 'marrakech', cityName: 'Marrakech', type: 'riad', starRating: 4, description: 'Instagram-famous riad with a stunning turquoise plunge pool, rooftop terrace, and impeccable Moroccan design.', priceFromMad: 1200, amenities: ['Pool', 'Rooftop', 'Breakfast', 'WiFi', 'Air Conditioning'], image: '/images/hero-surfing.webp', rating: 4.7, reviewCount: 2890, isFeatured: true },
  { slug: 'royal-mansour', name: 'Royal Mansour', citySlug: 'marrakech', cityName: 'Marrakech', type: 'hotel', starRating: 5, description: 'Ultra-luxury hotel conceived by King Mohammed VI, featuring private riads connected by underground tunnels.', priceFromMad: 12000, amenities: ['Private Riad', 'Spa', 'Pool', 'Fine Dining', 'Butler Service', 'Hammam'], image: '/images/hero-riad-interior.webp', rating: 4.9, reviewCount: 1890, isFeatured: true },
  { slug: 'riad-fes', name: 'Riad Fes', citySlug: 'fes', cityName: 'Fes', type: 'riad', starRating: 5, description: 'Award-winning luxury riad in the heart of the Fes medina with a rooftop restaurant overlooking the old city.', priceFromMad: 3200, amenities: ['Pool', 'Spa', 'Restaurant', 'Rooftop', 'WiFi', 'Hammam'], image: '/images/hero-surfing.webp', rating: 4.8, reviewCount: 1560, isFeatured: true },
  { slug: 'dar-roumana', name: 'Dar Roumana', citySlug: 'fes', cityName: 'Fes', type: 'riad', starRating: 4, description: 'A beautifully restored riad known for its exceptional cooking classes and rooftop terrace views.', priceFromMad: 1800, amenities: ['Cooking Class', 'Rooftop', 'Breakfast', 'WiFi', 'Library'], image: '/images/hero-surfing.webp', rating: 4.7, reviewCount: 980, isFeatured: false },
  { slug: 'four-seasons-casablanca', name: 'Four Seasons Casablanca', citySlug: 'casablanca', cityName: 'Casablanca', type: 'hotel', starRating: 5, description: 'Elegant urban resort on the Corniche with ocean views, extensive gardens, and world-class dining.', priceFromMad: 4500, amenities: ['Pool', 'Beach Access', 'Spa', 'Fine Dining', 'Fitness', 'Kids Club'], image: '/images/hero-riad-interior.webp', rating: 4.8, reviewCount: 2340, isFeatured: true },
  { slug: 'sofitel-rabat', name: 'Sofitel Rabat Jardin des Roses', citySlug: 'rabat', cityName: 'Rabat', type: 'hotel', starRating: 5, description: 'Luxury hotel set within Andalusian-style gardens in the heart of Morocco\'s capital.', priceFromMad: 2800, amenities: ['Pool', 'Spa', 'Restaurant', 'Garden', 'WiFi', 'Fitness'], image: '/images/hero-riad-interior.webp', rating: 4.6, reviewCount: 1230, isFeatured: false },
  { slug: 'lina-ryad-spa', name: 'Lina Ryad & Spa', citySlug: 'chefchaouen', cityName: 'Chefchaouen', type: 'riad', starRating: 4, description: 'A stylish blue riad in the heart of Chefchaouen with a spa and panoramic mountain views from the terrace.', priceFromMad: 900, amenities: ['Spa', 'Terrace', 'Breakfast', 'WiFi', 'Mountain View'], image: '/images/hero-chefchaouen-drone.webp', rating: 4.6, reviewCount: 890, isFeatured: false },
  { slug: 'kasbah-tamadot', name: 'Kasbah Tamadot', citySlug: 'marrakech', cityName: 'Marrakech', type: 'kasbah', starRating: 5, description: 'Richard Branson\'s luxury retreat in the Atlas Mountains with stunning views and Berber-inspired design.', priceFromMad: 6000, amenities: ['Pool', 'Spa', 'Restaurant', 'Mountain Views', 'Tennis', 'Trekking'], image: '/images/hero-atlas.webp', rating: 4.9, reviewCount: 780, isFeatured: true },
  { slug: 'desert-luxury-camp', name: 'Sahara Luxury Desert Camp', citySlug: 'merzouga', cityName: 'Merzouga', type: 'desert_camp', starRating: 4, description: 'Luxury tented camp deep in the Erg Chebbi dunes with en-suite bathrooms, fine dining, and stargazing.', priceFromMad: 2500, amenities: ['Private Tent', 'En-Suite', 'Dinner', 'Camel Trek', 'Music', 'Stargazing'], image: '/images/hero-desert.webp', rating: 4.8, reviewCount: 1670, isFeatured: true },
  { slug: 'medina-social-club', name: 'Medina Social Club', citySlug: 'fes', cityName: 'Fes', type: 'hostel', starRating: 3, description: 'A vibrant hostel in the Fes medina popular with backpackers, featuring a rooftop terrace and social events.', priceFromMad: 150, amenities: ['Rooftop', 'Free WiFi', 'Breakfast', 'Shared Kitchen', 'Events'], image: '/images/hero-fes-tanneries.webp', rating: 4.4, reviewCount: 2340, isFeatured: false },
  { slug: 'hotel-essaouira-lodge', name: 'Essaouira Lodge', citySlug: 'essaouira', cityName: 'Essaouira', type: 'hotel', starRating: 4, description: 'Charming boutique hotel near the ramparts with ocean views and a renowned seafood restaurant.', priceFromMad: 1400, amenities: ['Restaurant', 'Ocean View', 'WiFi', 'Terrace', 'Breakfast'], image: '/images/hero-coastal.webp', rating: 4.5, reviewCount: 670, isFeatured: false },
  { slug: 'dar-ahlam', name: 'Dar Ahlam', citySlug: 'ouarzazate', cityName: 'Ouarzazate', type: 'kasbah', starRating: 5, description: 'A magical kasbah hotel in the Skoura oasis offering bespoke dining experiences and total privacy.', priceFromMad: 5000, amenities: ['Pool', 'Garden', 'Bespoke Dining', 'Spa', 'Library', 'Excursions'], image: '/images/hero-ait-benhaddou.webp', rating: 4.9, reviewCount: 450, isFeatured: true },
  { slug: 'el-fenn', name: 'El Fenn', citySlug: 'marrakech', cityName: 'Marrakech', type: 'riad', starRating: 5, description: 'A stylish boutique riad in the medina founded by Vanessa Branson, featuring contemporary art and three pools.', priceFromMad: 3500, amenities: ['3 Pools', 'Spa', 'Restaurant', 'Art Gallery', 'Library', 'Rooftop'], image: '/images/hero-surfing.webp', rating: 4.8, reviewCount: 1120, isFeatured: false },
  { slug: 'nord-pinus-tangier', name: 'Nord-Pinus Tangier', citySlug: 'tangier', cityName: 'Tangier', type: 'hotel', starRating: 4, description: 'A bohemian boutique hotel on the Grand Socco with eclectic vintage decor and medina views.', priceFromMad: 2200, amenities: ['Restaurant', 'Bar', 'WiFi', 'Terrace', 'Concierge'], image: '/images/hero-chefchaouen-drone.webp', rating: 4.5, reviewCount: 560, isFeatured: false },
  { slug: 'surf-maroc', name: 'Surf Maroc', citySlug: 'agadir', cityName: 'Agadir', type: 'guesthouse', starRating: 3, description: 'Popular surf camp and guesthouse in Taghazout village with rooftop terrace and ocean views.', priceFromMad: 400, amenities: ['Surf Lessons', 'Yoga', 'Rooftop', 'WiFi', 'Breakfast', 'Equipment'], image: '/images/hero-surfing.webp', rating: 4.6, reviewCount: 1890, isFeatured: false },
  { slug: 'atlas-kasbah', name: 'Atlas Kasbah Ecolodge', citySlug: 'agadir', cityName: 'Agadir', type: 'kasbah', starRating: 3, description: 'An eco-friendly kasbah lodge in the hills above Agadir with organic garden and panoramic views.', priceFromMad: 700, amenities: ['Pool', 'Organic Garden', 'Restaurant', 'Yoga', 'Mountain View', 'Eco Tours'], image: '/images/hero-marrakech.webp', rating: 4.4, reviewCount: 560, isFeatured: false },
  { slug: 'hostel-waka-waka', name: 'Waka Waka Hostel', citySlug: 'marrakech', cityName: 'Marrakech', type: 'hostel', starRating: 2, description: 'Budget-friendly hostel in the medina with a social rooftop, free walking tours, and vibrant atmosphere.', priceFromMad: 100, amenities: ['Free WiFi', 'Rooftop', 'Walking Tours', 'Shared Kitchen', 'Lockers'], image: '/images/hero-marrakech.webp', rating: 4.3, reviewCount: 3120, isFeatured: false },
  { slug: 'mazagan-beach-resort', name: 'Mazagan Beach & Golf Resort', citySlug: 'el-jadida', cityName: 'El Jadida', type: 'resort', starRating: 5, description: 'A massive Atlantic beachfront resort with golf course, casino, and family entertainment.', priceFromMad: 3000, amenities: ['Beach', 'Golf', 'Casino', 'Spa', 'Pool', 'Kids Club', 'Tennis'], image: '/images/hero-riad-interior.webp', rating: 4.5, reviewCount: 1780, isFeatured: false },
  { slug: 'ksar-ighnda', name: 'Ksar Ighnda', citySlug: 'ouarzazate', cityName: 'Ouarzazate', type: 'kasbah', starRating: 4, description: 'A beautifully restored kasbah near Ait Benhaddou with pool, gardens, and views of the Atlas Mountains.', priceFromMad: 1600, amenities: ['Pool', 'Restaurant', 'Garden', 'Mountain View', 'WiFi', 'Terrace'], image: '/images/hero-ait-benhaddou.webp', rating: 4.6, reviewCount: 670, isFeatured: false },
  { slug: 'hyatt-regency-casablanca', name: 'Hyatt Regency Casablanca', citySlug: 'casablanca', cityName: 'Casablanca', type: 'hotel', starRating: 5, description: 'Central luxury hotel in the heart of Casablanca with views of the Old Medina and the port.', priceFromMad: 2200, amenities: ['Pool', 'Spa', 'Restaurant', 'Bar', 'Fitness', 'Business Center'], image: '/images/hero-coastal.webp', rating: 4.5, reviewCount: 1890, isFeatured: false },
];

export function getAccommodationBySlug(slug: string): AccommodationData | undefined {
  return accommodations.find((a) => a.slug === slug);
}

export function getAccommodationsByCity(citySlug: string): AccommodationData[] {
  return accommodations.filter((a) => a.citySlug === citySlug);
}
