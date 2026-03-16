import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  DollarSign,
  CheckCircle,
  Hotel,
  Building2,
  Castle,
  Tent,
  Warehouse,
  Coffee,
  Waves,
  ArrowRight,
  Users,
  Compass,
  Heart,
  Backpack,
  Baby,
  Crown,
  AlertTriangle,
  Globe,
  CreditCard,
  Phone,
  Shield,
  Calendar,
  Info,
  BedDouble,
  Mountain,
  Sun,
  Sparkles,
} from 'lucide-react';
import AccommodationsClientSection from './AccommodationsClient';
import type { AccommodationItem } from './AccommodationsClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Where to Stay in Morocco | Hotels, Riads, Kasbahs & Desert Camps',
  description:
    'Find the perfect accommodation in Morocco. Luxury palace hotels, authentic riads, budget hostels, Atlas Mountain kasbahs, and Sahara desert camps. Verified listings with prices, amenities, and reviews.',
  keywords: [
    'Morocco hotels',
    'Morocco riads',
    'Marrakech accommodation',
    'Morocco kasbah',
    'desert camp Morocco',
    'Fes riad',
    'Morocco hostel',
    'where to stay Morocco',
    'Morocco resort',
    'Morocco Airbnb',
    'Morocco guesthouse',
    'budget Morocco',
    'luxury Morocco',
  ],
  openGraph: {
    title: 'Where to Stay in Morocco - CityGuide',
    description:
      'Browse 25+ hand-picked accommodations across Morocco. From luxury palaces to authentic riads and desert camps.',
    url: 'https://citytoursmorocco.com/accommodations',
    images: [
      {
        url: '/images/hero-riad-interior.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury riad courtyard with pool in Marrakech, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/accommodations' },
};

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATIONS DATA
   ═══════════════════════════════════════════════════════════════ */

const accommodations: AccommodationItem[] = [
  { name: 'La Mamounia', slug: 'la-mamounia', cityName: 'Marrakech', type: 'hotel', starRating: 5, description: 'Legendary palace hotel set within 8 hectares of lush gardens, a symbol of Moroccan luxury and hospitality since 1923. Winston Churchill called it the most beautiful place in the world.', priceFromMad: 5500, amenities: ['Pool', 'Spa', 'Restaurant', 'Bar', 'Garden', 'Fitness', 'Concierge'], image: '/images/hero-riad-interior.webp', rating: 4.9 },
  { name: 'Royal Mansour', slug: 'royal-mansour', cityName: 'Marrakech', type: 'hotel', starRating: 5, description: 'Ultra-luxury hotel conceived by King Mohammed VI, featuring private riads connected by underground tunnels. Each three-story riad is a masterpiece of Moroccan craftsmanship.', priceFromMad: 12000, amenities: ['Private Riad', 'Spa', 'Pool', 'Fine Dining', 'Butler Service', 'Hammam'], image: '/images/hero-riad-interior.webp', rating: 4.9 },
  { name: 'Riad Fes', slug: 'riad-fes', cityName: 'Fes', type: 'riad', starRating: 5, description: 'Award-winning luxury riad in the heart of the Fes medina with a rooftop restaurant overlooking the old city. Exquisite zellige, carved plaster, and painted cedar throughout.', priceFromMad: 3200, amenities: ['Pool', 'Spa', 'Restaurant', 'Rooftop', 'WiFi', 'Hammam'], image: '/images/hero-kasbahs.webp', rating: 4.8 },
  { name: 'Kasbah Tamadot', slug: 'kasbah-tamadot', cityName: 'Atlas Mountains', type: 'kasbah', starRating: 5, description: 'Richard Branson\'s luxury retreat in the Atlas Mountains near Asni village, with stunning valley views and Berber-inspired design. A base for mountain treks and cultural immersion.', priceFromMad: 6000, amenities: ['Pool', 'Spa', 'Restaurant', 'Mountain Views', 'Tennis', 'Trekking'], image: '/images/hero-atlas.webp', rating: 4.9 },
  { name: 'Scarabeo Camp', slug: 'scarabeo-camp', cityName: 'Agafay Desert', type: 'desert_camp', starRating: 4, description: 'A design-forward glamping experience in the Agafay stone desert just 40 minutes from Marrakech. Luxury tents with Atlas views, stargazing, and gourmet campfire dining.', priceFromMad: 3500, amenities: ['Luxury Tents', 'Dining', 'Stargazing', 'Camel Rides', 'Pool', 'Yoga'], image: '/images/hero-desert.webp', rating: 4.8 },
  { name: 'Lina Ryad & Spa', slug: 'lina-ryad-spa', cityName: 'Chefchaouen', type: 'riad', starRating: 4, description: 'A stylish blue riad in the heart of Chefchaouen with a spa and panoramic mountain views from the terrace. The perfect base for exploring the Blue Pearl.', priceFromMad: 900, amenities: ['Spa', 'Terrace', 'Breakfast', 'WiFi', 'Mountain View'], image: '/images/hero-chefchaouen.webp', rating: 4.6 },
  { name: 'Heure Bleue Palais', slug: 'heure-bleue-palais', cityName: 'Essaouira', type: 'hotel', starRating: 5, description: 'An elegant boutique palace hotel within the Essaouira medina walls, featuring a rooftop pool, cinema, and art collection. Named for the magical blue hour light of the coast.', priceFromMad: 2800, amenities: ['Rooftop Pool', 'Cinema', 'Spa', 'Restaurant', 'Art Gallery', 'WiFi'], image: '/images/hero-essaouira.webp', rating: 4.7 },
  { name: 'Four Seasons Casablanca', slug: 'four-seasons-casablanca', cityName: 'Casablanca', type: 'hotel', starRating: 5, description: 'Elegant urban resort on the Corniche with ocean views, extensive gardens, and world-class dining. A refined oasis in Morocco\'s bustling commercial capital.', priceFromMad: 4500, amenities: ['Pool', 'Beach Access', 'Spa', 'Fine Dining', 'Fitness', 'Kids Club'], image: '/images/hero-riad-interior.webp', rating: 4.8 },
  { name: 'Sofitel Rabat Jardin des Roses', slug: 'sofitel-rabat', cityName: 'Rabat', type: 'hotel', starRating: 5, description: 'Luxury hotel set within Andalusian-style gardens in the heart of Morocco\'s elegant capital. Close to the Hassan Tower, Kasbah Udayas, and royal landmarks.', priceFromMad: 2800, amenities: ['Pool', 'Spa', 'Restaurant', 'Garden', 'WiFi', 'Fitness'], image: '/images/hero-hassan-mosque.webp', rating: 4.6 },
  { name: 'El Fenn', slug: 'el-fenn', cityName: 'Marrakech', type: 'riad', starRating: 5, description: 'A stylish boutique riad in the medina founded by Vanessa Branson, featuring a contemporary art collection, three pools, and one of the best rooftop bars in the city.', priceFromMad: 3500, amenities: ['3 Pools', 'Spa', 'Restaurant', 'Art Gallery', 'Library', 'Rooftop Bar'], image: '/images/hero-kasbahs.webp', rating: 4.8 },
  { name: 'Dar Ahlam', slug: 'dar-ahlam', cityName: 'Ouarzazate', type: 'kasbah', starRating: 5, description: 'A magical kasbah hotel in the Skoura oasis offering bespoke surprise dining experiences and total privacy. Named "House of Dreams" and regarded as one of the world\'s most unique hotels.', priceFromMad: 5000, amenities: ['Pool', 'Garden', 'Bespoke Dining', 'Spa', 'Library', 'Excursions'], image: '/images/hero-sahara-sunrise.webp', rating: 4.9 },
  { name: 'Riad Kniza', slug: 'riad-kniza', cityName: 'Marrakech', type: 'riad', starRating: 4, description: 'An intimate 11-room riad steeped in antiques and Moroccan art, owned by a collector of traditional crafts. Each room is uniquely decorated with museum-quality pieces.', priceFromMad: 2200, amenities: ['Pool', 'Restaurant', 'Hammam', 'WiFi', 'Cooking Class'], image: '/images/hero-kasbahs.webp', rating: 4.7 },
  { name: 'Equity Point Hostel', slug: 'equity-point-marrakech', cityName: 'Marrakech', type: 'hostel', starRating: 2, description: 'A social backpacker hostel in a restored riad near Jemaa el-Fnaa with a rooftop terrace, plunge pool, and vibrant communal atmosphere. Excellent value in the heart of the action.', priceFromMad: 120, amenities: ['Plunge Pool', 'Rooftop', 'WiFi', 'Breakfast', 'Lockers', 'Tours'], image: '/images/hero-morocco.webp', rating: 4.3 },
  { name: 'Dakhla Attitude', slug: 'dakhla-attitude', cityName: 'Dakhla', type: 'resort', starRating: 4, description: 'A kitesurfing and adventure resort on the stunning Dakhla lagoon. Purpose-built for water sports enthusiasts with direct lagoon access, equipment rental, and expert instruction.', priceFromMad: 1800, amenities: ['Lagoon Access', 'Kite Equipment', 'Restaurant', 'Pool', 'Yoga', 'Spa'], image: '/images/hero-surfing.webp', rating: 4.7 },
  { name: 'Hotel & Spa des Gorges du Dades', slug: 'hotel-spa-gorges-dades', cityName: 'Dades Valley', type: 'hotel', starRating: 3, description: 'A charming hotel perched within the dramatic Dades Gorge, offering panoramic views of the canyon walls. An ideal base for hiking, rock climbing, and exploring the Valley of Roses.', priceFromMad: 600, amenities: ['Spa', 'Restaurant', 'Terrace', 'WiFi', 'Canyon Views', 'Trekking'], image: '/images/hero-sahara-sunrise.webp', rating: 4.4 },
  { name: 'Riad Myra', slug: 'riad-myra', cityName: 'Fes', type: 'riad', starRating: 4, description: 'A beautifully restored riad in the Fes medina with contemporary Moroccan design, a peaceful courtyard with fountain, and a terrace overlooking the city\'s minarets and rooftops.', priceFromMad: 1100, amenities: ['Rooftop', 'Breakfast', 'WiFi', 'Courtyard', 'Cooking Class', 'Hammam'], image: '/images/hero-fes.webp', rating: 4.6 },
  { name: 'Villa Mandarine', slug: 'villa-mandarine', cityName: 'Rabat', type: 'hotel', starRating: 4, description: 'A boutique villa hotel set within fragrant citrus groves in Rabat\'s Souissi neighborhood. A peaceful retreat with lush gardens, pool, and acclaimed restaurant.', priceFromMad: 1600, amenities: ['Pool', 'Garden', 'Restaurant', 'WiFi', 'Breakfast', 'Parking'], image: '/images/hero-hassan-mosque.webp', rating: 4.5 },
  { name: 'Riad Yasmine', slug: 'riad-yasmine', cityName: 'Marrakech', type: 'riad', starRating: 4, description: 'Instagram-famous riad with a stunning turquoise plunge pool surrounded by lush greenery. The rooftop terrace and impeccable Moroccan design make it a medina gem.', priceFromMad: 1200, amenities: ['Pool', 'Rooftop', 'Breakfast', 'WiFi', 'Air Conditioning'], image: '/images/hero-kasbahs.webp', rating: 4.7 },
  { name: 'Nord-Pinus Tangier', slug: 'nord-pinus-tangier', cityName: 'Tangier', type: 'hotel', starRating: 4, description: 'A bohemian boutique hotel on the Grand Socco with eclectic vintage decor, medina views, and the artistic spirit of Tangier\'s literary golden age.', priceFromMad: 2200, amenities: ['Restaurant', 'Bar', 'WiFi', 'Terrace', 'Concierge'], image: '/images/hero-tangier-kasbah.webp', rating: 4.5 },
  { name: 'Surf Maroc Taghazout', slug: 'surf-maroc', cityName: 'Agadir', type: 'guesthouse', starRating: 3, description: 'Popular surf camp and guesthouse in Taghazout village with rooftop yoga terrace and ocean views. Offers surf packages for all levels with experienced local instructors.', priceFromMad: 400, amenities: ['Surf Lessons', 'Yoga', 'Rooftop', 'WiFi', 'Breakfast', 'Equipment Rental'], image: '/images/hero-surfing.webp', rating: 4.6 },
  { name: 'Sahara Luxury Desert Camp', slug: 'sahara-luxury-camp', cityName: 'Merzouga', type: 'desert_camp', starRating: 4, description: 'Luxury tented camp deep in the Erg Chebbi dunes with en-suite bathrooms, gourmet dining, Gnawa music, and the most spectacular stargazing in Morocco.', priceFromMad: 2500, amenities: ['Private Tent', 'En-Suite', 'Dinner', 'Camel Trek', 'Music', 'Stargazing'], image: '/images/hero-desert.webp', rating: 4.8 },
  { name: 'Ksar Ighnda', slug: 'ksar-ighnda', cityName: 'Ouarzazate', type: 'kasbah', starRating: 4, description: 'A beautifully restored kasbah near Ait Benhaddou with a pool, terraced gardens, and views of the Atlas Mountains. Traditional Berber architecture with modern comforts.', priceFromMad: 1600, amenities: ['Pool', 'Restaurant', 'Garden', 'Mountain View', 'WiFi', 'Terrace'], image: '/images/hero-sahara-sunrise.webp', rating: 4.6 },
  { name: 'Mazagan Beach & Golf Resort', slug: 'mazagan-beach-resort', cityName: 'El Jadida', type: 'resort', starRating: 5, description: 'A massive Atlantic beachfront resort with an 18-hole golf course, casino, and family entertainment. The largest resort on the Moroccan coast with endless activities.', priceFromMad: 3000, amenities: ['Beach', 'Golf', 'Casino', 'Spa', 'Pool', 'Kids Club', 'Tennis'], image: '/images/hero-riad-interior.webp', rating: 4.5 },
  { name: 'Dar Roumana', slug: 'dar-roumana', cityName: 'Fes', type: 'riad', starRating: 4, description: 'A beautifully restored riad known for its exceptional cooking classes and rooftop terrace views of the Fes medina. Named after the pomegranate tree in its courtyard.', priceFromMad: 1800, amenities: ['Cooking Class', 'Rooftop', 'Breakfast', 'WiFi', 'Library'], image: '/images/hero-fes.webp', rating: 4.7 },
  { name: 'Atlas Kasbah Ecolodge', slug: 'atlas-kasbah-ecolodge', cityName: 'Agadir', type: 'kasbah', starRating: 3, description: 'An eco-friendly kasbah lodge in the hills above Agadir with an organic garden, panoramic views, and sustainable practices. A green retreat for conscious travelers.', priceFromMad: 700, amenities: ['Pool', 'Organic Garden', 'Restaurant', 'Yoga', 'Mountain View', 'Eco Tours'], image: '/images/hero-climbing.webp', rating: 4.4 },
];

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATION TYPES GUIDE
   ═══════════════════════════════════════════════════════════════ */

const accommodationTypes = [
  {
    type: 'Riads',
    icon: Building2,
    description: 'Traditional Moroccan houses built around a central courtyard, converted into boutique guesthouses. The quintessential Morocco accommodation experience.',
    priceRange: '300-6,000+ MAD/night',
    priceUSD: '$30-600+',
    bestCities: 'Marrakech, Fes, Essaouira, Chefchaouen',
    pros: ['Cultural immersion', 'Incredible breakfast', 'Personal hospitality', 'Unique architecture'],
    cons: ['Hard to find in the medina', 'No car access', 'Limited accessibility', 'Can be noisy'],
  },
  {
    type: 'Hotels',
    icon: Hotel,
    description: 'International and Moroccan hotel chains offering standardized comfort, from budget 2-stars to ultra-luxury 5-star palace hotels with world-class facilities.',
    priceRange: '400-15,000+ MAD/night',
    priceUSD: '$40-1,500+',
    bestCities: 'Marrakech, Casablanca, Rabat, Agadir, Tangier',
    pros: ['Reliable standards', 'Full facilities (pool, gym, spa)', '24/7 reception', 'Car parking'],
    cons: ['Less authentic', 'Impersonal', 'Often outside medina', 'More expensive for same quality'],
  },
  {
    type: 'Hostels',
    icon: Warehouse,
    description: 'Budget-friendly social accommodation, often in converted riads. Dormitory beds and private rooms available. Perfect for backpackers and solo travelers meeting others.',
    priceRange: '80-300 MAD/night',
    priceUSD: '$8-30',
    bestCities: 'Marrakech, Fes, Essaouira, Chefchaouen, Tangier',
    pros: ['Cheapest option', 'Social atmosphere', 'Often in great locations', 'Tours and activities organized'],
    cons: ['Shared bathrooms', 'Noise', 'Limited privacy', 'Varying cleanliness'],
  },
  {
    type: 'Desert Camps',
    icon: Tent,
    description: 'Tented camps in the Sahara dunes (Erg Chebbi near Merzouga, Erg Chigaga near M\'Hamid) and the Agafay stone desert. Ranges from basic bivouacs to luxury glamping.',
    priceRange: '200-5,000 MAD/night',
    priceUSD: '$20-500',
    bestCities: 'Merzouga, M\'Hamid, Agafay, Zagora',
    pros: ['Once-in-a-lifetime experience', 'Stargazing', 'Camel treks', 'Campfire dining'],
    cons: ['Remote locations', 'Extreme temperatures', 'Basic facilities at budget level', 'Sand in everything'],
  },
  {
    type: 'Kasbahs',
    icon: Castle,
    description: 'Fortified Berber strongholds in the Atlas Mountains and southern Morocco, restored as atmospheric hotels. Thick mud-brick walls, towers, and terraces with mountain views.',
    priceRange: '500-6,000+ MAD/night',
    priceUSD: '$50-600+',
    bestCities: 'Ouarzazate, Skoura, Dades Valley, Ait Benhaddou, Atlas Mountains',
    pros: ['Dramatic settings', 'Historic architecture', 'Mountain or desert views', 'Cultural heritage'],
    cons: ['Remote locations', 'Limited nearby dining', 'Can be cold in winter', 'Variable service quality'],
  },
  {
    type: 'Guesthouses',
    icon: Coffee,
    description: 'Family-run homes offering rooms to travelers, particularly in rural areas, mountain villages, and surf towns. Authentic local experience with home-cooked meals.',
    priceRange: '200-800 MAD/night',
    priceUSD: '$20-80',
    bestCities: 'Taghazout, Imlil, Todra Gorge, rural villages',
    pros: ['Authentic local experience', 'Home-cooked meals', 'Affordable', 'Off-the-beaten-path locations'],
    cons: ['Basic facilities', 'Language barriers possible', 'Remote locations', 'Unpredictable quality'],
  },
  {
    type: 'Airbnbs & Apartments',
    icon: BedDouble,
    description: 'Self-catering apartments and entire homes available through platforms like Airbnb. Popular for longer stays, families, and travelers who want kitchen access and independence.',
    priceRange: '300-3,000+ MAD/night',
    priceUSD: '$30-300+',
    bestCities: 'Marrakech, Casablanca, Essaouira, Tangier',
    pros: ['Kitchen access', 'Space for families', 'Independence', 'Often good value for groups'],
    cons: ['No breakfast or hospitality', 'Variable quality from photos', 'No on-site help', 'Cleaning fees add up'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PRICE GUIDE BY CITY
   ═══════════════════════════════════════════════════════════════ */

const priceByCity = [
  {
    city: 'Marrakech',
    budget: '120-500 MAD',
    midRange: '500-2,000 MAD',
    luxury: '2,000-15,000+ MAD',
    notes: 'The most expensive city. Riads range from 300 MAD to over 5,000 MAD. Palace hotels start at 4,000 MAD.',
  },
  {
    city: 'Fes',
    budget: '100-400 MAD',
    midRange: '400-1,800 MAD',
    luxury: '1,800-6,000 MAD',
    notes: 'Slightly cheaper than Marrakech with equally impressive riads. The medina riads here are often more historically significant.',
  },
  {
    city: 'Essaouira',
    budget: '150-400 MAD',
    midRange: '400-1,500 MAD',
    luxury: '1,500-5,500 MAD',
    notes: 'Smaller selection but excellent value. Wind keeps the town cool but also means beach resorts charge a premium.',
  },
  {
    city: 'Chefchaouen',
    budget: '100-350 MAD',
    midRange: '350-1,000 MAD',
    luxury: '1,000-3,000 MAD',
    notes: 'The cheapest imperial city for accommodation. Budget guesthouses start from 100 MAD. Even the best riad is under 3,000 MAD.',
  },
  {
    city: 'Casablanca',
    budget: '200-500 MAD',
    midRange: '500-2,000 MAD',
    luxury: '2,000-5,000 MAD',
    notes: 'Business-hotel dominated. Few riads. International chains offer consistent quality. Prices are on par with Marrakech.',
  },
  {
    city: 'Merzouga / Desert',
    budget: '200-500 MAD',
    midRange: '500-2,000 MAD',
    luxury: '2,000-5,000 MAD',
    notes: 'Desert camp prices usually include dinner, breakfast, and a camel trek. Budget camps are basic; luxury camps are extraordinary.',
  },
  {
    city: 'Atlas Mountains',
    budget: '150-400 MAD',
    midRange: '400-1,500 MAD',
    luxury: '1,500-6,000+ MAD',
    notes: 'Ranges from simple Berber guesthouses in Imlil to luxury kasbahs like Kasbah Tamadot. Half-board is common and recommended.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHERE TO STAY BY TRAVEL STYLE
   ═══════════════════════════════════════════════════════════════ */

const travelStyles = [
  {
    style: 'Luxury Traveler',
    icon: Crown,
    budget: '2,000-15,000+ MAD/night',
    description: 'Morocco is one of the world\'s best luxury destinations at a fraction of European or Asian prices. Palace hotels, boutique riads with private pools, hammam and spa, and bespoke dining experiences await.',
    recommendations: [
      'Royal Mansour or La Mamounia in Marrakech for palace grandeur',
      'Riad Fes or Palais Amani in Fes for historic luxury',
      'Dar Ahlam in Skoura for total seclusion and surprise dining',
      'Kasbah Tamadot in the Atlas Mountains for mountain luxury',
      'Scarabeo Camp in Agafay for design-forward glamping',
    ],
    tips: 'Book direct with a luxury travel advisor for complimentary upgrades and special experiences. Many luxury riads offer exclusive buyouts for groups.',
  },
  {
    style: 'Budget Backpacker',
    icon: Backpack,
    budget: '80-500 MAD/night',
    description: 'Morocco is extremely budget-friendly. Hostels in converted riads cost as little as 80 MAD for a dorm bed, and simple private rooms in family-run dars start at 200-300 MAD with breakfast included.',
    recommendations: [
      'Equity Point or Waka Waka hostel in Marrakech for social atmosphere',
      'Budget dars in Fes medina (under 300 MAD with breakfast)',
      'Surf hostels in Taghazout or Essaouira from 120 MAD',
      'Basic desert bivouacs in Merzouga from 200 MAD (includes dinner)',
      'Guesthouses in Chefchaouen from 100 MAD',
    ],
    tips: 'Negotiate prices for stays of 3+ nights. Eat at local restaurants (30-50 MAD for a full meal). The medina is free to explore. Travel by CTM or Supratours buses to save on transport.',
  },
  {
    style: 'Family Travelers',
    icon: Baby,
    budget: '600-3,000 MAD/night',
    description: 'Families need more space, childproofing, and flexibility. Hotels with pools, family suites, and kids\' clubs are often a better fit than intimate riads, though some larger riads welcome families warmly.',
    recommendations: [
      'Mazagan Beach & Golf Resort near El Jadida for beach and kids\' club',
      'Four Seasons Casablanca for urban family luxury',
      'Larger riads in Marrakech (ask for family rooms on upper floors)',
      'Beach resorts in Agadir with all-inclusive packages',
      'Kasbahs with pools for Atlas Mountain family adventures',
    ],
    tips: 'Book riads with pools and ask about child-friendly policies before booking. Many riads prefer adult guests. Consider self-catering Airbnbs for kitchen access and flexible meal times.',
  },
  {
    style: 'Solo Traveler',
    icon: Compass,
    budget: '120-1,200 MAD/night',
    description: 'Solo travelers thrive in Morocco. Hostels provide instant community, while small riads and guesthouses offer personal connections with hosts who help you navigate the country.',
    recommendations: [
      'Social hostels in Marrakech and Fes for meeting other travelers',
      'Small family dars where the host becomes your guide',
      'Surf camps in Taghazout for an active, social experience',
      'Guesthouses in Chefchaouen for peaceful solo time',
      'Group desert camps in Merzouga for shared Sahara experience',
    ],
    tips: 'Ask riads about single-room rates (often 30-40% less than doubles). Solo women travelers are warmly received but should choose riads with positive solo-female reviews. Riad hosts are invaluable for safety advice.',
  },
  {
    style: 'Romantic Getaway',
    icon: Heart,
    budget: '1,200-6,000 MAD/night',
    description: 'Morocco is deeply romantic. Candlelit riad courtyards, rooftop dinners under the stars, private hammam sessions, and desert camping create unforgettable couple experiences.',
    recommendations: [
      'Riad Yasmine in Marrakech for the iconic pool and rooftop',
      'Riad Laaroussa in Fes for palatial privacy',
      'Heure Bleue Palais in Essaouira for coastal romance',
      'Sahara luxury desert camp for stargazing in the dunes',
      'El Fenn in Marrakech for art, cocktails, and pools',
    ],
    tips: 'Book a suite with a private terrace. Request a candlelit dinner on the rooftop. Many luxury riads offer hammam-for-two packages. Honeymoon and anniversary packages are common.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BOOKING PLATFORMS COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const bookingPlatforms = [
  {
    name: 'Booking.com',
    icon: Globe,
    bestFor: 'Largest selection, verified reviews, free cancellation',
    coverage: 'Excellent - most riads and hotels listed',
    pricing: '10-15% higher than direct booking',
    cancellation: 'Free cancellation on most properties',
    pros: ['Widest selection of Moroccan properties', 'Verified guest reviews', 'Free cancellation options', 'Pay-at-property option', 'Genius loyalty discounts'],
    cons: ['Commission inflates riad prices', 'Photos can be outdated', 'Availability not always real-time'],
  },
  {
    name: 'Airbnb',
    icon: BedDouble,
    bestFor: 'Whole-riad rentals, apartments, unique stays',
    coverage: 'Good in major cities, limited in rural areas',
    pricing: 'Comparable to Booking.com after service fees',
    cancellation: 'Varies by host policy',
    pros: ['Whole-property rentals for groups', 'Direct host messaging', 'Experience add-ons', 'Kitchen-equipped apartments'],
    cons: ['Service fees add 10-15%', 'Quality inconsistency', 'Limited rural coverage', 'Less hotel-style service'],
  },
  {
    name: 'Direct Booking (WhatsApp/Email)',
    icon: Phone,
    bestFor: 'Best prices, personal relationship, room choice',
    coverage: 'Limited to riads with their own websites',
    pricing: '10-20% cheaper than platforms',
    cancellation: 'Negotiable, often flexible',
    pros: ['Best rates available', 'Guaranteed room preference', 'Personal relationship starts before arrival', 'Special requests easily accommodated'],
    cons: ['No cancellation protection', 'Payment may require wire transfer', 'No third-party accountability', 'Harder to compare options'],
  },
  {
    name: 'Specialist Travel Agencies',
    icon: Sparkles,
    bestFor: 'Multi-city itineraries, curated quality, on-ground support',
    coverage: 'Curated selection of vetted properties',
    pricing: '15-25% higher (agency markup)',
    cancellation: 'Agency terms apply',
    pros: ['Vetted quality assurance', 'Complete itinerary planning', 'On-ground support if issues arise', 'Access to exclusive properties'],
    cons: ['Premium pricing', 'Less flexibility', 'Limited to their portfolio', 'Booking changes can be slow'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Where to Stay in Morocco',
    url: 'https://citytoursmorocco.com/accommodations',
    numberOfItems: accommodations.length,
    itemListElement: accommodations.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'LodgingBusiness',
        name: a.name,
        description: a.description,
        url: `https://citytoursmorocco.com/accommodations/${a.slug}`,
        image: a.image,
        starRating: { '@type': 'Rating', ratingValue: a.starRating },
        priceRange: a.priceFromMad < 500 ? '$' : a.priceFromMad < 2000 ? '$$' : a.priceFromMad < 5000 ? '$$$' : '$$$$',
        address: { '@type': 'PostalAddress', addressLocality: a.cityName, addressCountry: 'MA' },
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function AccommodationsPage() {
  const uniqueCities = [...new Set(accommodations.map((a) => a.cityName))].sort();

  return (
    <>
      <JsonLd />

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Accommodations</li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-kasbahs.webp"
            alt="Traditional Moroccan riad courtyard with pool"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Rest &amp; Recharge
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where to Stay in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Sleep in a centuries-old medina riad, wake up in a Saharan desert camp, or relax at an Atlas Mountain kasbah. Morocco offers accommodations as extraordinary as the country itself.
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">{accommodations.length}+</p>
                <p className="text-sm text-white/70">Properties</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">7</p>
                <p className="text-sm text-white/70">Types</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">{uniqueCities.length}</p>
                <p className="text-sm text-white/70">Destinations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Overview of Accommodation Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Types of Accommodation in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
            Morocco offers an unusually diverse range of places to stay, from ancient medina riads to Saharan glamping tents. Each type delivers a fundamentally different experience, and many travelers choose several types across a single trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodationTypes.map((type) => (
              <div key={type.type} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <type.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{type.type}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{type.description}</p>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent-dark)]" />
                    <span className="font-semibold text-[var(--text-primary)]">{type.priceRange}</span>
                    <span className="text-[var(--text-muted)]">({type.priceUSD})</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{type.bestCities}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border-light)]">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-green)] mb-1.5">Pros</p>
                    {type.pros.map((pro) => (
                      <p key={pro} className="flex items-start gap-1 text-xs text-[var(--text-secondary)] mb-1">
                        <CheckCircle className="w-3 h-3 text-[var(--color-green)] mt-0.5 shrink-0" />
                        {pro}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1.5">Cons</p>
                    {type.cons.map((con) => (
                      <p key={con} className="flex items-start gap-1 text-xs text-[var(--text-muted)] mb-1">
                        <AlertTriangle className="w-3 h-3 text-[var(--text-muted)] mt-0.5 shrink-0" />
                        {con}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/riads"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
            >
              Read our complete guide to Moroccan riads <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Price Guide by City ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            Price Guide by City
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Average nightly rates across Morocco, from budget dormitories to luxury palaces. All prices are per room per night in Moroccan Dirhams (MAD). 10 MAD is approximately 1 USD.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr>
                  <th className="text-left p-4 text-white font-semibold text-sm border-b border-white/20">City / Region</th>
                  <th className="text-left p-4 text-white font-semibold text-sm border-b border-white/20">
                    <span className="inline-flex items-center gap-1">Budget</span>
                  </th>
                  <th className="text-left p-4 text-white font-semibold text-sm border-b border-white/20">Mid-Range</th>
                  <th className="text-left p-4 text-white font-semibold text-sm border-b border-white/20">Luxury</th>
                  <th className="text-left p-4 text-white font-semibold text-sm border-b border-white/20">Notes</th>
                </tr>
              </thead>
              <tbody>
                {priceByCity.map((row) => (
                  <tr key={row.city} className="border-b border-white/10">
                    <td className="p-4 text-white font-semibold text-sm">{row.city}</td>
                    <td className="p-4 text-white/80 text-sm">{row.budget}</td>
                    <td className="p-4 text-white/80 text-sm">{row.midRange}</td>
                    <td className="p-4 text-white/80 text-sm">{row.luxury}</td>
                    <td className="p-4 text-white/60 text-xs max-w-xs">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/50 text-xs mt-4">
            Prices are approximate and vary by season. Peak season (March-May, September-November) prices are 20-40% higher than low season.
          </p>
        </div>
      </section>

      {/* ── Where to Stay by Travel Style ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Stay by Travel Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your ideal accommodation depends on how you travel. Here are tailored recommendations for every type of visitor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {travelStyles.map((style) => (
              <div key={style.style} className="card-moroccan p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10">
                    <style.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{style.style}</h3>
                    <p className="text-sm text-[var(--color-accent-dark)] font-semibold">{style.budget}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{style.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">Top Recommendations</p>
                  <ul className="space-y-1.5">
                    {style.recommendations.map((rec) => (
                      <li key={rec} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                    <span><strong>Tip:</strong> {style.tips}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Platforms Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Booking Platforms Compared
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you book matters. Each platform has different strengths for Morocco accommodation. Here is an honest comparison.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {bookingPlatforms.map((platform) => (
              <div key={platform.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10">
                    <platform.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)]">{platform.name}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{platform.bestFor}</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2">
                    <p className="text-[var(--text-muted)] mb-0.5">Coverage</p>
                    <p className="text-[var(--text-primary)] font-semibold">{platform.coverage}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2">
                    <p className="text-[var(--text-muted)] mb-0.5">Pricing</p>
                    <p className="text-[var(--text-primary)] font-semibold">{platform.pricing}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-2">
                    <p className="text-[var(--text-muted)] mb-0.5">Cancellation</p>
                    <p className="text-[var(--text-primary)] font-semibold">{platform.cancellation}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-green)] mb-1.5">Strengths</p>
                    {platform.pros.map((pro) => (
                      <p key={pro} className="flex items-start gap-1 text-xs text-[var(--text-secondary)] mb-1">
                        <CheckCircle className="w-3 h-3 text-[var(--color-green)] mt-0.5 shrink-0" />
                        {pro}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1.5">Weaknesses</p>
                    {platform.cons.map((con) => (
                      <p key={con} className="flex items-start gap-1 text-xs text-[var(--text-muted)] mb-1">
                        <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                        {con}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card-moroccan p-6 max-w-3xl mx-auto mt-8">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">Our Recommendation</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Use Booking.com or Airbnb to research and compare properties using reviews and photos. Once you have found your ideal riad or hotel, check if they have their own website and contact them directly via WhatsApp or email for the best rate. This hybrid approach gives you the research benefits of platforms with the pricing benefits of direct booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essential Booking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to get the best value and avoid common mistakes when booking accommodation in Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: Calendar,
                title: 'Book 2-3 Months Ahead for Peak Season',
                text: 'March-May and September-November are peak periods. Popular riads in Marrakech and Fes sell out. Christmas, New Year, and Easter are also high demand. Low season (June-August) offers 20-40% discounts.',
              },
              {
                icon: Phone,
                title: 'Always Arrange Airport Transfer',
                text: 'Medina accommodations are in pedestrian-only zones. Your riad or hotel will send someone to meet you. Without a guide, finding your riad with luggage in the maze-like medina is extremely stressful for first-time visitors.',
              },
              {
                icon: Shield,
                title: 'Verify What Is Included',
                text: 'Most riads include breakfast, Wi-Fi, and sometimes airport transfer. Hotels may charge separately for each. Desert camps typically include dinner, breakfast, and a camel trek. Always confirm inclusions before booking.',
              },
              {
                icon: CreditCard,
                title: 'Cash Is King for Extras',
                text: 'While most accommodations accept credit cards for the room, tips, laundry, and extra meals are often cash-only. Budget 200-500 MAD in cash per day for incidentals depending on your travel style.',
              },
              {
                icon: Sun,
                title: 'Verify Air Conditioning in Summer',
                text: 'If visiting June-September, confirm AC in your specific room, not just common areas. Marrakech and Fes exceed 40-45C regularly. Essaouira and Chefchaouen are naturally cooler.',
              },
              {
                icon: Star,
                title: 'Read Reviews from the Last 6 Months',
                text: 'Moroccan accommodations change ownership and staff frequently. A stellar riad from 2023 may be different today. Focus on recent reviews and look for patterns in guest feedback.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex items-start gap-4">
                <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Browse All Listings (Client-Side Filterable) ── */}
      <section className="container-morocco py-12 md:py-16">
        <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
          Browse All Accommodations
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Filter by type, city, star rating, or price to find your perfect stay across Morocco.
        </p>
        <AccommodationsClientSection accommodations={accommodations} cities={uniqueCities} />
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Find Your Perfect Stay
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore our specialized guides for deeper recommendations on riads, city-specific stays, and travel planning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/riads"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Building2 className="w-4 h-4" /> Complete Riad Guide
            </Link>
            <Link
              href="/cities/marrakech"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Marrakech Guide
            </Link>
            <Link
              href="/desert"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
            >
              <Tent className="w-4 h-4" /> Desert Camps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
