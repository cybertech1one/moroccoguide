import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Star,
  MapPin,
  ChevronRight,
  Home,
  Clock,
  Utensils,
  Tag,
  CheckCircle,
  Navigation,
  ArrowRight,
  Sparkles,
  Music,
  TreePine,
  Eye,
  Users,
  Wine,
  Flame,
  ShieldCheck,
  Landmark,
  Camera,
  Lightbulb,
  Compass,
  Globe,
  DollarSign,
  Phone,
} from 'lucide-react'
import { generateStructuredData, truncate } from '@/lib/utils'

/* ================================================================
   RESTAURANT DATA
   ================================================================ */

interface Restaurant {
  slug: string
  name: string
  cuisine: string
  city: string
  priceRange: string
  description: string
  images: string[]
  rating: number
  reviewCount: number
  specialties: string[]
  highlights: string[]
  openingHours: string
  phone: string
  location: { address: string; lat: number; lng: number }
  features: string[]
  popularDishes: string[]
  dressCode: string
  tags: string[]
  tips: string[]
}

const restaurants: Restaurant[] = [
  {
    slug: 'nomad-marrakech',
    name: 'Nomad',
    cuisine: 'Modern Moroccan',
    city: 'Marrakech',
    priceRange: '$$$',
    description:
      'Nomad is one of Marrakech\'s most sought-after restaurants, perched above the Rahba Kedima spice square in the heart of the ancient medina. This trendy rooftop establishment has redefined Moroccan dining by applying modern culinary techniques and creative presentation to traditional recipes and locally sourced ingredients.\n\nThe three-story space features a ground-floor bar, a first-floor dining room with open kitchen, and the coveted rooftop terrace where diners enjoy panoramic views over the medina rooftops to the Atlas Mountains beyond. The design is contemporary and cool, with clean lines softened by Moroccan textiles and potted herbs.\n\nChef-owner Kamal Laftimi draws inspiration from Morocco\'s diverse culinary traditions, from Berber mountain cooking to coastal seafood, reinterpreting them with a modern sensibility. The lamb shoulder, slow-cooked for eight hours, has become one of Marrakech\'s most iconic dishes, while the selection of Moroccan salads showcases the country\'s extraordinary vegetable heritage.',
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 3245,
    specialties: ['Slow-Cooked Lamb Shoulder', 'Zaalouk with Goat Cheese', 'Modern Moroccan Salads', 'Rooftop Cocktails', 'Saffron Creme Brulee'],
    highlights: ['Rooftop terrace with Atlas Mountain views', 'Modern take on traditional Moroccan cuisine', 'Open kitchen concept', 'Award-winning cocktail menu'],
    openingHours: 'Daily 12:00 - 23:00',
    phone: '+212 524-381232',
    location: { address: '1 Derb Aarjan, Rahba Lakdima, Marrakech Medina', lat: 31.6315, lng: -7.9860 },
    features: ['Rooftop Terrace', 'Open Kitchen', 'Full Bar', 'Vegetarian Options'],
    popularDishes: ['Slow-Cooked Lamb Shoulder', 'Zaalouk with Goat Cheese', 'Carrot & Orange Salad', 'Harira Soup', 'Chicken Tagine with Preserved Lemon', 'Grilled Kefta Brochettes', 'Saffron Creme Brulee', 'Orange Blossom Panna Cotta', 'Nomad Signature Cocktail', 'Moroccan Mint Tea'],
    dressCode: 'Smart casual',
    tags: ['Rooftop', 'Modern Moroccan', 'Views', 'Trendy'],
    tips: ['Reserve a rooftop table at least 2-3 days in advance, especially for dinner', 'The lamb shoulder must be ordered for two people and it is worth every dirham', 'Arrive early for lunch to secure the best rooftop seats with mountain views', 'The cocktail menu is creative and worth exploring', 'Walk-ins are sometimes possible for lunch on weekdays'],
  },
  {
    slug: 'le-jardin',
    name: 'Le Jardin',
    cuisine: 'Mediterranean-Moroccan',
    city: 'Marrakech',
    priceRange: '$$$',
    description:
      'Le Jardin is a hidden oasis of tranquility in the heart of the Marrakech medina, a lush garden restaurant where diners are enveloped by tropical plants, climbing bougainvillea, and the gentle sound of birdsong. The restaurant occupies a beautifully restored riad courtyard that has been transformed into what feels like a secret botanical garden.\n\nThe menu artfully blends Mediterranean and Moroccan culinary traditions, with an emphasis on fresh, seasonal ingredients and lighter preparations that suit the garden setting. Dishes are colorful and beautifully plated, reflecting the vibrant surroundings. The fresh juices and smoothies, made from locally sourced fruits, are legendary among Marrakech visitors.\n\nBeyond the food, Le Jardin functions as a cultural space, hosting art exhibitions, book launches, and live music events. The upstairs gallery features rotating exhibitions by Moroccan and international artists, making a visit here a feast for all the senses. It is the perfect midday escape from the intensity of the souks.',
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.5,
    reviewCount: 2876,
    specialties: ['Tagine with Prunes & Almonds', 'Pastilla', 'Fresh Tropical Juices', 'Garden Salads', 'Orange Blossom Creme'],
    highlights: ['Secret garden atmosphere in the medina', 'Rotating art exhibitions upstairs', 'Live music and cultural events', 'Perfect medina escape for lunch'],
    openingHours: 'Daily 11:00 - 23:00',
    phone: '+212 524-378295',
    location: { address: '32 Souk Sidi Abdelaziz, Marrakech Medina', lat: 31.6310, lng: -7.9855 },
    features: ['Garden Setting', 'Art Gallery', 'Live Music', 'Vegetarian Friendly'],
    popularDishes: ['Tagine with Prunes & Almonds', 'Pastilla au Poulet', 'Grilled Sea Bass', 'Hummus & Flatbread', 'Beetroot & Goat Cheese Salad', 'Jardin Super Salad', 'Orange Blossom Creme', 'Tropical Smoothie', 'Mint Lemonade'],
    dressCode: 'Casual',
    tags: ['Garden', 'Art', 'Mediterranean', 'Peaceful'],
    tips: ['This is the perfect midday retreat when the souks become overwhelming', 'Check the upstairs gallery for current exhibitions before you leave', 'The fresh juices and smoothies are some of the best in Marrakech', 'Lunch is the ideal time to visit as the garden light is at its best', 'Ask about upcoming live music events which are often free for diners'],
  },
  {
    slug: 'cafe-clock',
    name: 'Cafe Clock',
    cuisine: 'Fusion',
    city: 'Fes',
    priceRange: '$$',
    description:
      'Cafe Clock is a cultural institution in the heart of the Fes medina, occupying a beautifully restored multi-story house that has become a gathering place for travelers, artists, and locals alike. Founded by British expat Mike Richardson, the cafe is famous for its camel burger, a dish that has become so iconic it practically serves as a rite of passage for visitors to Fes.\n\nBut Cafe Clock is far more than its famous burger. The venue operates as a vibrant cultural hub, hosting traditional Gnawa music sessions, storytelling evenings, Arabic calligraphy workshops, cooking classes, and art exhibitions. The rooftop terrace offers stunning views over the medina, and the multi-level interior is decorated with eclectic art and vintage Moroccan posters.\n\nThe menu is a creative fusion of Moroccan and international flavors, with dishes designed to be approachable for visitors while celebrating local ingredients. The date milkshake is addictive, the Moroccan tapas plates are perfect for sharing, and the weekend brunch has become a beloved Fes tradition. Cafe Clock also operates a branch in Marrakech, but the Fes original remains the essential experience.',
    images: [
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.4,
    reviewCount: 4123,
    specialties: ['Camel Burger', 'Date Milkshake', 'Moroccan Tapas', 'Weekend Brunch', 'Gnawa Music Nights'],
    highlights: ['The famous camel burger', 'Live Gnawa music sessions', 'Cultural workshops and events', 'Rooftop terrace with medina views'],
    openingHours: 'Daily 09:00 - 22:00',
    phone: '+212 535-637855',
    location: { address: '7 Derb El Magana, Talaa Kbira, Fes Medina', lat: 34.0637, lng: -4.9738 },
    features: ['Rooftop Terrace', 'Live Music', 'Cooking Classes', 'Cultural Workshops'],
    popularDishes: ['The Famous Camel Burger', 'Date Milkshake', 'Moroccan Tapas Plate', 'Chicken Tagine', 'Vegetable Couscous', 'Full Moroccan Breakfast', 'Eggs Berbere', 'Date & Walnut Cake', 'Spiced Coffee'],
    dressCode: 'Casual',
    tags: ['Cultural Hub', 'Fusion', 'Live Music', 'Iconic'],
    tips: ['The camel burger is a must-try even if you are hesitant about the concept', 'Check their weekly events calendar for Gnawa music and storytelling nights', 'The date milkshake is the best non-alcoholic drink in the medina', 'Arrive early for the weekend brunch as it fills up quickly', 'Sign up for a cooking class or calligraphy workshop for a deeper cultural experience'],
  },
  {
    slug: 'la-sqala',
    name: 'La Sqala',
    cuisine: 'Traditional Moroccan',
    city: 'Casablanca',
    priceRange: '$$',
    description:
      'La Sqala is a beloved Casablanca institution set within the gardens of an 18th-century Portuguese fortified bastion near the old medina. The restaurant has been welcoming guests for decades, and its combination of historic setting, generous portions, and authentic Moroccan cuisine has made it a favorite among locals and visitors alike.\n\nThe outdoor garden dining area, shaded by ancient fig trees and fragrant with jasmine, provides one of Casablanca\'s most charming settings for a meal. In the cooler months, the interior dining rooms, with their thick stone walls and Moroccan decor, offer a cozy alternative. The atmosphere is genuinely relaxed and unhurried, a rare quality in this fast-paced commercial city.\n\nLa Sqala is particularly renowned for its traditional Moroccan breakfast, an elaborate spread of msemen flatbreads, fresh pastries, amlou (almond-argan butter), honey, olive oil, and mint tea that draws long weekend queues. The lunch and dinner menu features generous tagines, perfectly grilled meats, and fresh salads, all prepared with recipes that have been refined over generations.',
    images: [
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.3,
    reviewCount: 3567,
    specialties: ['Traditional Moroccan Breakfast', 'Lamb Tagine', 'Fresh Pastries', 'Garden-fresh Salads', 'Mint Tea Ceremony'],
    highlights: ['18th-century fortified bastion setting', 'Famous Moroccan breakfast spread', 'Beautiful garden dining under fig trees', 'A Casablanca institution for decades'],
    openingHours: 'Daily 07:00 - 23:00',
    phone: '+212 522-260960',
    location: { address: 'Boulevard des Almohades, Ancienne Medina, Casablanca', lat: 33.6020, lng: -7.6180 },
    features: ['Garden Dining', 'Historic Setting', 'Breakfast Specialist', 'Family Friendly'],
    popularDishes: ['Traditional Moroccan Breakfast', 'Msemen & Honey', 'Lamb Tagine with Prunes', 'Grilled Chicken', 'Fish Chermoula', 'Briouats au Fromage', 'Pastilla au Lait', 'Mint Tea', 'Fresh Orange Juice'],
    dressCode: 'Casual',
    tags: ['Historic', 'Garden', 'Breakfast', 'Traditional'],
    tips: ['Come early for breakfast on weekends as queues form by 9:00', 'The garden seating is magical but can fill fast so request it when you arrive', 'The fortified bastion itself is worth a short walk around after your meal', 'Cash is preferred here though cards are increasingly accepted', 'Ask for the seasonal specials which are often the best dishes on the menu'],
  },
  {
    slug: 'al-fassia',
    name: 'Al Fassia',
    cuisine: 'Traditional Moroccan',
    city: 'Marrakech',
    priceRange: '$$$',
    description:
      'Al Fassia holds a unique and revered position in the Moroccan dining landscape as one of the country\'s finest traditional restaurants, and notably, one that has been entirely run by women since its founding in 1987. The restaurant is a celebration of the rich culinary heritage of Fes, brought to Marrakech by a team of talented women who have dedicated their careers to preserving and perfecting the art of Moroccan gastronomy.\n\nLocated in the Gueliz neighborhood, Al Fassia offers an elegant dining experience in a space adorned with traditional Moroccan textiles, zellige tilework, and soft ambient lighting. The atmosphere is warm, sophisticated, and genuinely welcoming, reflecting the personal touch of its all-female team.\n\nThe menu is a masterclass in traditional Moroccan cuisine, with dishes prepared from recipes that have been passed down through generations. The lamb tagine, slow-cooked until impossibly tender, is legendary. The pigeon pastilla, with its delicate layers of phyllo, spiced meat, and a dusting of cinnamon and powdered sugar, is a revelation. Every dish demonstrates the depth of skill and passion that has made Al Fassia a national treasure.',
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 2765,
    specialties: ['Lamb Tagine with Caramelized Onions', 'Pigeon Pastilla', 'Rfissa', 'Mechoui', 'Moroccan Pastries'],
    highlights: ['Entirely run by women since 1987', 'Among Morocco\'s finest traditional restaurants', 'Award-winning lamb tagine', 'Generations-old Fassi recipes'],
    openingHours: 'Mon-Sat 12:00 - 14:30, 19:00 - 23:00',
    phone: '+212 524-434060',
    location: { address: '55 Boulevard Zerktouni, Gueliz, Marrakech', lat: 31.6368, lng: -8.0078 },
    features: ['Women-Run', 'Fine Dining', 'Wine List', 'Private Dining Room'],
    popularDishes: ['Lamb with Caramelized Onions', 'Pigeon Pastilla', 'Rfissa', 'Mechoui', 'Couscous Royale', 'Chicken with Preserved Lemon', 'Kefta & Egg Tagine', 'Moroccan Pastry Selection', 'Harira Fassia'],
    dressCode: 'Smart casual',
    tags: ['Women-Run', 'Traditional', 'Award-winning', 'Fine Dining'],
    tips: ['Dinner reservations are essential, especially on weekends', 'The pigeon pastilla should not be missed, it is among the best in Morocco', 'Ask for the Moroccan wine pairing for a complete experience', 'The private dining room is available for special occasions', 'Closed on Sundays so plan your visit accordingly'],
  },
  {
    slug: 'ocean-vagabond',
    name: 'Ocean Vagabond',
    cuisine: 'Seafood',
    city: 'Essaouira',
    priceRange: '$$',
    description:
      'Ocean Vagabond is the quintessential Essaouira beach restaurant, a laid-back surf shack turned stylish dining destination set directly on the golden sand beach with unobstructed Atlantic Ocean views. The restaurant embodies the free-spirited coastal lifestyle that has made Essaouira a favorite among surfers, artists, and bohemian travelers from around the world.\n\nThe open-air terrace faces directly onto the beach, where kite surfers and windsurfers perform their acrobatics against the backdrop of Essaouira\'s historic Portuguese ramparts and the Ile de Mogador. The decor is effortlessly cool: weathered wood, nautical touches, and colorful Berber textiles create a space that feels both rustic and refined.\n\nThe menu celebrates Essaouira\'s extraordinary seafood heritage, with the daily catch arriving fresh from the harbor each morning. Grilled octopus, fish tagines, and shellfish platters are prepared simply to let the quality of the ingredients shine. Beyond seafood, the restaurant offers excellent salads, sandwiches, and smoothies that fuel the active beach lifestyle. It is the perfect spot for a long, lazy lunch between surf sessions.',
    images: [
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=1200&q=80',
    ],
    rating: 4.3,
    reviewCount: 1987,
    specialties: ['Grilled Octopus', 'Fish Tagine Essaouira-Style', 'Seafood Platter', 'Fresh Smoothies', 'Beach Salads'],
    highlights: ['Direct beachfront location', 'Daily fresh catch from the harbor', 'Kite surfer views from terrace', 'Bohemian beach-chic atmosphere'],
    openingHours: 'Daily 09:00 - 22:00',
    phone: '+212 524-783934',
    location: { address: 'Boulevard Mohammed V, Essaouira Beach', lat: 31.5050, lng: -9.7685 },
    features: ['Beachfront', 'Surf Culture', 'Outdoor Terrace', 'Kid Friendly'],
    popularDishes: ['Grilled Octopus', 'Fish Tagine Essaouira-Style', 'Grilled Catch of the Day', 'Seafood Platter for Two', 'Shrimp Avocado', 'Ocean Vagabond Salad', 'Fish & Chips', 'Fresh Smoothie'],
    dressCode: 'Beach casual',
    tags: ['Beachfront', 'Seafood', 'Surf', 'Casual'],
    tips: ['The wind picks up in the afternoon so the sheltered tables are prime real estate', 'Ask what the catch of the day is as it will be the freshest option', 'Essaouira can be cooler than expected so bring a light layer', 'Come for a late lunch to watch the kite surfers in action', 'The seafood platter for two is generous and the best way to sample everything'],
  },
  {
    slug: 'dar-hatim',
    name: 'Dar Hatim',
    cuisine: 'Home-style Moroccan',
    city: 'Fes',
    priceRange: '$$',
    description:
      'Dar Hatim is the ultimate home-cooking experience in the Fes medina, a family-run restaurant where the matriarch of the Hatim family and her daughters prepare an ever-changing set menu of authentic Fassi cuisine in their beautifully decorated home. Dining here is not simply eating at a restaurant; it is being welcomed into a Moroccan family.\n\nThe experience begins when you are met at the medina gate and guided through the labyrinthine streets to the family\'s traditional dar (house). Inside, the dining room features gorgeous zellige tilework, carved stucco, and painted wooden ceilings. You are seated at communal tables set with elegant Moroccan pottery and silverware.\n\nThe set menu, which changes daily based on what is fresh at the souk, typically includes five or six courses of traditional Fassi specialties. Dishes like rfissa (shredded pastry with lentils and chicken), pastilla, slow-cooked tagines, and elaborate desserts represent centuries of culinary knowledge passed down through the women of Fes. The food is extraordinary, and the warmth of the family\'s hospitality makes it an unforgettable experience.',
    images: [
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 1234,
    specialties: ['Multi-Course Set Menu', 'Rfissa', 'Fassi Pastilla', 'Slow-Cooked Tagines', 'Traditional Desserts'],
    highlights: ['Authentic home-cooking experience', 'Daily-changing set menu', 'Centuries-old Fassi recipes', 'Dining in a traditional family home'],
    openingHours: 'Daily 12:30 - 15:00, 19:30 - 22:00 (by reservation)',
    phone: '+212 535-741587',
    location: { address: '19 Derb Rcif, Fes Medina', lat: 34.0640, lng: -4.9720 },
    features: ['Home Cooking', 'Set Menu', 'Family-Run', 'Traditional Setting'],
    popularDishes: ['Multi-Course Set Menu', 'Seasonal Moroccan Salads', 'Harira Fassia', 'Pastilla au Pigeon', 'Tagine of the Day', 'Rfissa', 'Moroccan Pastry Selection', 'Mint Tea Ceremony', 'Almond Milk'],
    dressCode: 'Smart casual',
    tags: ['Home Cooking', 'Authentic', 'Family', 'Set Menu'],
    tips: ['Reservation is absolutely essential as space is very limited', 'Let the family know about dietary restrictions at least 24 hours in advance', 'Bring cash as this is not a place that takes cards', 'Come hungry as the set menu is generous with five to six courses', 'The family will meet you at the medina gate so confirm the meeting point'],
  },
  {
    slug: 'le-salama',
    name: 'Le Salama',
    cuisine: 'Moroccan Fine Dining',
    city: 'Marrakech',
    priceRange: '$$$$',
    description:
      'Le Salama is Marrakech\'s premier Moroccan fine dining destination, a spectacular multi-level palace restaurant located directly on the iconic Jemaa el-Fnaa square. The venue encompasses three distinct experiences: a ground-floor piano bar, an ornate first-floor dining room, and the legendary rooftop lounge with its unmatched views over the square\'s nightly carnival.\n\nThe interiors are nothing short of breathtaking. Every surface gleams with handcrafted zellige mosaic, carved cedar, and gilded plasterwork. Crystal chandeliers hang from painted ceilings, and the furniture is upholstered in the finest Moroccan fabrics. Dining at Le Salama feels like attending a feast at a royal palace.\n\nThe kitchen, led by a team of master chefs schooled in the traditions of Moroccan court cuisine, produces dishes of extraordinary refinement. The Royal Couscous, served on Fridays, is an elaborate ceremony of fluffy semolina, seven vegetables, and tender meats. The pastilla, encased in paper-thin warqa pastry, is among the best in the country. The evening experience, with live Andalusian music and the sounds of Jemaa el-Fnaa drifting up from below, is magical.',
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.4,
    reviewCount: 2345,
    specialties: ['Royal Couscous (Friday)', 'Pastilla Royale', 'Lamb Mechoui', 'Moroccan Court Cuisine', 'Rooftop Cocktails'],
    highlights: ['Directly overlooking Jemaa el-Fnaa', 'Three distinct dining experiences', 'Palace-level Moroccan craftsmanship', 'Live Andalusian music nightly'],
    openingHours: 'Daily 12:00 - 01:00',
    phone: '+212 524-391300',
    location: { address: '40 Rue des Banques, Jemaa el-Fnaa, Marrakech', lat: 31.6258, lng: -7.9891 },
    features: ['Rooftop Lounge', 'Piano Bar', 'Live Music', 'Jemaa el-Fnaa Views'],
    popularDishes: ['Pastilla Royale', 'Lamb Mechoui', 'Royal Couscous (Friday)', 'Tagine Royale', 'Whole Roasted Pigeon', 'Tanjia Marrakchia', 'Seffa with Almonds', 'Signature Cocktails', 'Royal Mint Tea'],
    dressCode: 'Smart elegant',
    tags: ['Fine Dining', 'Palace', 'Rooftop', 'Jemaa el-Fnaa'],
    tips: ['Book a rooftop table for Friday Royal Couscous as it is the signature experience', 'Start with cocktails at the piano bar before heading upstairs', 'The dress code is enforced so come prepared in smart attire', 'Evening is the best time to visit when the square below comes alive', 'The Jemaa el-Fnaa views from the rooftop are unmatched in all of Marrakech'],
  },
  {
    slug: 'rick-cafe',
    name: "Rick's Cafe",
    cuisine: 'International',
    city: 'Casablanca',
    priceRange: '$$$$',
    description:
      "Rick's Cafe is a loving tribute to the classic 1942 film Casablanca, brought to life by American businesswoman Kathy Kriger in a beautifully restored courtyard mansion on the Casablanca waterfront. While the film was actually shot entirely in Hollywood, Rick's Cafe has become a genuine Casablanca landmark, attracting film lovers, romantics, and curious travelers from around the world.\n\nThe interior faithfully recreates the Art Deco elegance of the film's fictional nightclub, with curved archways, brass railings, potted palms, and a central courtyard complete with a tinkling fountain. The grand piano is the centerpiece, and a live pianist performs classic standards every evening, creating an atmosphere of timeless glamour.\n\nThe menu is an international affair with Moroccan influences, featuring dishes like grilled sea bass, beef filet, and classic cocktails mixed by bartenders who take their craft seriously. While the food is good, the real draw is the atmosphere: sipping a cocktail in Rick's bar while the pianist plays \"As Time Goes By\" is one of Casablanca's most memorable experiences.",
    images: [
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.2,
    reviewCount: 5432,
    specialties: ['Grilled Sea Bass', 'Beef Filet', 'Classic Cocktails', 'Live Piano Music', 'Art Deco Atmosphere'],
    highlights: ['Homage to the classic Casablanca film', 'Live piano every evening', 'Art Deco interiors and courtyard', 'One of Morocco\'s most iconic restaurants'],
    openingHours: 'Daily 12:00 - 15:00, 18:30 - 01:00',
    phone: '+212 522-274207',
    location: { address: '248 Boulevard Sour Jdid, Place du Jardin Public, Casablanca', lat: 33.6040, lng: -7.6135 },
    features: ['Live Piano', 'Art Deco', 'Cocktail Bar', 'Courtyard'],
    popularDishes: ['Grilled Sea Bass', 'Beef Filet', 'Lamb Tagine', 'Tuna Tartare', 'Caesar Salad', 'Creme Brulee', "Rick's Gin & Tonic", 'Casablanca Sour', 'Classic Martini'],
    dressCode: 'Smart casual to elegant',
    tags: ['Cinematic', 'Piano Bar', 'Iconic', 'Art Deco'],
    tips: ['Dinner reservations are essential, especially on weekends', 'Request a courtyard table for the most atmospheric experience', 'The live piano starts around 20:00 so plan your dinner accordingly', 'Watch the film before you visit to fully appreciate the atmosphere', 'The cocktails are the star here so do not skip the bar experience'],
  },
  {
    slug: 'amal-center',
    name: "Amal Women's Training Center",
    cuisine: 'Moroccan',
    city: 'Marrakech',
    priceRange: '$',
    description:
      "The Amal Women's Training Center is one of Marrakech's most heartwarming dining experiences, a social enterprise restaurant that trains disadvantaged women in professional culinary skills while serving some of the most authentic and delicious home-style Moroccan food in the city. Every meal here directly supports women in gaining economic independence and culinary expertise.\n\nLocated in the modern Gueliz neighborhood, the restaurant occupies a bright, cheerful space decorated with colorful artwork and Moroccan textiles. The atmosphere is warm and communal, with an open kitchen where you can watch the women trainees preparing dishes under the guidance of experienced mentors.\n\nThe daily set menu changes to reflect what is fresh at the market, but the quality is consistently outstanding. The Friday couscous, a massive communal platter of fluffy semolina with seven vegetables and tender meat, has achieved legendary status among Marrakech's food cognoscenti. Fresh salads, home-baked bread, and beautifully prepared tagines represent Moroccan home cooking at its very best, at prices that make this one of the best-value meals in the city.",
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 2156,
    specialties: ['Friday Couscous', 'Daily Set Menu', 'Fresh Salads', 'Home-baked Bread', 'Seasonal Tagine'],
    highlights: ['Social enterprise supporting women', 'Best-value Moroccan food in Marrakech', 'Legendary Friday couscous', 'Open kitchen concept'],
    openingHours: 'Mon-Sat 12:00 - 15:30',
    phone: '+212 524-446896',
    location: { address: 'Rue Allal Ben Ahmed, Gueliz, Marrakech', lat: 31.6350, lng: -8.0105 },
    features: ['Social Enterprise', 'Open Kitchen', 'Community Impact', 'Lunch Only'],
    popularDishes: ['Three-Course Set Lunch', 'Friday Couscous', 'Tagine of the Day', 'Fresh Salad Trio', 'Harira Soup', 'Grilled Kefta', 'Homemade Cookies', 'Fresh Orange Juice', 'Mint Tea'],
    dressCode: 'Casual',
    tags: ['Social Enterprise', 'Women Empowerment', 'Budget', 'Authentic'],
    tips: ['Come on Friday for the legendary couscous which sells out fast', 'Lunch only so plan accordingly with your medina sightseeing schedule', 'Your meal directly supports women gaining independence through cooking skills', 'Arrive by 12:30 for the best selection before popular dishes run out', 'The set menu is the best value meal in Marrakech and changes daily'],
  },
  {
    slug: 'cafe-hafa',
    name: 'Cafe Hafa',
    cuisine: 'Cafe',
    city: 'Tangier',
    priceRange: '$',
    description:
      "Cafe Hafa is one of the most legendary cafes in all of Morocco, clinging to the cliff edge of Tangier's Marshan district with a series of terraced platforms that cascade down toward the Strait of Gibraltar. Since 1921, this unassuming clifftop cafe has been a gathering place for poets, artists, musicians, and dreamers drawn by its extraordinary location and timeless atmosphere.\n\nThe Rolling Stones, The Beatles, Paul Bowles, Tennessee Williams, and Jack Kerouac all sat on these very same terraces, sipping mint tea while gazing across the strait to Spain. The cafe has changed remarkably little since those days: simple blue tables and chairs, whitewashed walls, and no menu beyond mint tea and simple snacks. The simplicity is the point.\n\nWhat makes Cafe Hafa truly special is the view and the feeling. Sitting on the lowest terrace with a glass of sweet mint tea, watching the cargo ships traverse the strait while the sun sets over the Atlantic and the Mediterranean, is one of Morocco's most transcendent travel moments. This is not a place to eat; it is a place to simply be.",
    images: [
      'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.5,
    reviewCount: 3876,
    specialties: ['Mint Tea', 'Simple Snacks', 'Sunset Views', 'Literary History', 'Strait of Gibraltar Panorama'],
    highlights: ['Open since 1921', 'Visited by The Rolling Stones and The Beatles', 'Cascading cliff-edge terraces', 'Unmatched Strait of Gibraltar views'],
    openingHours: 'Daily 08:00 - 22:00',
    phone: '+212 539-946128',
    location: { address: 'Avenue Hafa, Marshan, Tangier', lat: 35.7900, lng: -5.8210 },
    features: ['Cliff-edge Terraces', 'Historic', 'Sunset Views', 'Literary Heritage'],
    popularDishes: ['Mint Tea', 'Coffee', 'Nous-Nous', 'Fresh Orange Juice', 'Msemen', 'Toasted Bread'],
    dressCode: 'Come as you are',
    tags: ['Historic', 'Clifftop', 'Literary', 'Sunset', 'Iconic'],
    tips: ['Come for sunset as it is one of the most magical moments in all of Morocco', 'The lower terraces have the best views but can be breezy', 'Bring cash as only mint tea and basic snacks are served', 'This is a place for atmosphere not fine dining so manage expectations', 'On clear days you can see Spain across the strait'],
  },
  {
    slug: 'chez-lamine',
    name: 'Chez Lamine Hadj Mustapha',
    cuisine: 'Street Food',
    city: 'Marrakech',
    priceRange: '$',
    description:
      "Chez Lamine Hadj Mustapha is the undisputed king of tangia in Marrakech, a legendary hole-in-the-wall restaurant that has been serving this slow-cooked delicacy since the 1960s. Tangia is Marrakech's signature dish, a clay pot filled with lamb or beef, spices, and preserved lemon, sealed with parchment paper and slow-cooked for hours in the embers of the local hammam's furnace.\n\nThe restaurant itself is wonderfully unpretentious: a simple counter, a few tables, and the tantalizing aroma of meat that has been slowly braising for eight to twelve hours. The staff are efficient and friendly, and the ritual of cracking open a sealed tangia pot to reveal the impossibly tender, fall-off-the-bone meat within never gets old, even for locals who have been coming for decades.\n\nChez Lamine is not just a restaurant; it is a living piece of Marrakech's culinary heritage. The tangia tradition is tied to the city's bachelor craftsmen, who would prepare their pots in the morning and drop them at the hammam to cook while they worked. Today, Chez Lamine keeps this tradition alive, producing what many consider the finest tangia in the city at prices that seem impossibly low.",
    images: [
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 3245,
    specialties: ['Lamb Tangia', 'Beef Tangia', 'Moroccan Bread', 'Mint Tea', 'Olives & Preserved Lemons'],
    highlights: ['Best tangia in Marrakech since the 1960s', 'Slow-cooked in hammam embers for 8+ hours', 'Authentic street food experience', 'Living piece of culinary heritage'],
    openingHours: 'Daily 11:00 - 22:00',
    phone: '+212 524-386017',
    location: { address: '26 Souk Ableuh, near Jemaa el-Fnaa, Marrakech Medina', lat: 31.6280, lng: -7.9885 },
    features: ['Street Food', 'Traditional Methods', 'Hole-in-the-Wall', 'No Frills'],
    popularDishes: ['Lamb Tangia', 'Beef Tangia', 'Mixed Tangia', 'Moroccan Bread', 'Olives & Preserved Lemons', 'Mixed Moroccan Salad', 'Mint Tea'],
    dressCode: 'Casual',
    tags: ['Street Food', 'Tangia', 'Legendary', 'Budget', 'Authentic'],
    tips: ['The lamb tangia is the signature order so do not leave without trying it', 'Come with cash only as cards are not accepted', 'The tangia is best at lunchtime when the pots have been cooking all morning', 'Eat with Moroccan bread as locals do for the authentic experience', 'This is genuine street food so expect a simple no-frills environment'],
  },
]

/* ================================================================
   HELPERS
   ================================================================ */

function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug)
}

const featureIcons: Record<string, React.ReactNode> = {
  'Rooftop Terrace': <Eye className="w-5 h-5" />,
  'Rooftop Lounge': <Eye className="w-5 h-5" />,
  'Cliff-edge Terraces': <Eye className="w-5 h-5" />,
  'Outdoor Terrace': <Eye className="w-5 h-5" />,
  'Open Kitchen': <Flame className="w-5 h-5" />,
  'Full Bar': <Wine className="w-5 h-5" />,
  'Cocktail Bar': <Wine className="w-5 h-5" />,
  'Wine List': <Wine className="w-5 h-5" />,
  'Vegetarian Options': <TreePine className="w-5 h-5" />,
  'Vegetarian Friendly': <TreePine className="w-5 h-5" />,
  'Garden Setting': <TreePine className="w-5 h-5" />,
  'Garden Dining': <TreePine className="w-5 h-5" />,
  'Art Gallery': <Sparkles className="w-5 h-5" />,
  'Art Deco': <Sparkles className="w-5 h-5" />,
  'Live Music': <Music className="w-5 h-5" />,
  'Live Piano': <Music className="w-5 h-5" />,
  'Piano Bar': <Music className="w-5 h-5" />,
  'Cultural Workshops': <Landmark className="w-5 h-5" />,
  'Cooking Classes': <Utensils className="w-5 h-5" />,
  'Beachfront': <Navigation className="w-5 h-5" />,
  'Surf Culture': <Navigation className="w-5 h-5" />,
  'Kid Friendly': <Users className="w-5 h-5" />,
  'Family Friendly': <Users className="w-5 h-5" />,
  'Women-Run': <Users className="w-5 h-5" />,
  'Fine Dining': <Star className="w-5 h-5" />,
  'Private Dining Room': <ShieldCheck className="w-5 h-5" />,
  'Jemaa el-Fnaa Views': <Eye className="w-5 h-5" />,
  'Home Cooking': <Flame className="w-5 h-5" />,
  'Set Menu': <Utensils className="w-5 h-5" />,
  'Family-Run': <Users className="w-5 h-5" />,
  'Traditional Setting': <Landmark className="w-5 h-5" />,
  'Social Enterprise': <Users className="w-5 h-5" />,
  'Community Impact': <Users className="w-5 h-5" />,
  'Lunch Only': <Clock className="w-5 h-5" />,
  'Historic': <Landmark className="w-5 h-5" />,
  'Sunset Views': <Eye className="w-5 h-5" />,
  'Literary Heritage': <Landmark className="w-5 h-5" />,
  'Historic Setting': <Landmark className="w-5 h-5" />,
  'Breakfast Specialist': <Utensils className="w-5 h-5" />,
  'Courtyard': <TreePine className="w-5 h-5" />,
  'Street Food': <Flame className="w-5 h-5" />,
  'Traditional Methods': <Flame className="w-5 h-5" />,
  'Hole-in-the-Wall': <Landmark className="w-5 h-5" />,
  'No Frills': <CheckCircle className="w-5 h-5" />,
}

/* ================================================================
   STAR RATING RENDERER
   ================================================================ */

function renderStars(rating: number) {
  const stars = []
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.3
  for (let i = 0; i < full; i++) {
    stars.push(
      <Star key={`f-${i}`} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />,
    )
  }
  if (hasHalf) {
    stars.push(
      <Star key="h" className="w-4 h-4 fill-[var(--color-accent)]/50 text-[var(--color-accent)]" />,
    )
  }
  const remaining = 5 - stars.length
  for (let i = 0; i < remaining; i++) {
    stars.push(
      <Star key={`e-${i}`} className="w-4 h-4 text-[var(--color-accent)]/30" />,
    )
  }
  return stars
}

/* ================================================================
   STATIC PARAMS + METADATA
   ================================================================ */

export function generateStaticParams() {
  return restaurants.map((r) => ({ slug: r.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const restaurant = getRestaurantBySlug(slug)
  if (!restaurant) return { title: 'Restaurant Not Found' }

  return {
    title: `${restaurant.name} - ${restaurant.cuisine} in ${restaurant.city} | CityGuide Morocco`,
    description: truncate(restaurant.description, 160),
    openGraph: {
      title: `${restaurant.name} - ${restaurant.city} | CityGuide`,
      description: truncate(restaurant.description, 200),
      images: [
        {
          url: restaurant.images[0],
          width: 1200,
          height: 630,
          alt: `${restaurant.name}, ${restaurant.city}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${restaurant.name} | CityGuide Morocco`,
      description: truncate(restaurant.description, 200),
      images: [restaurant.images[0]],
    },
    alternates: {
      canonical: `https://cityguide.ma/restaurants/${restaurant.slug}`,
    },
  }
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default async function RestaurantDetailPage({ params }: PageProps) {
  const { slug } = await params
  const restaurant = getRestaurantBySlug(slug)
  if (!restaurant) notFound()

  const descriptionParagraphs = restaurant.description.split('\n\n')

  /* -- JSON-LD Structured Data -- */

  const restaurantSchema = generateStructuredData('Restaurant', {
    name: restaurant.name,
    description: truncate(restaurant.description, 300),
    url: `https://cityguide.ma/restaurants/${restaurant.slug}`,
    image: restaurant.images,
    servesCuisine: restaurant.cuisine,
    address: {
      '@type': 'PostalAddress',
      streetAddress: restaurant.location.address,
      addressLocality: restaurant.city,
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: restaurant.location.lat,
      longitude: restaurant.location.lng,
    },
    priceRange: restaurant.priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: restaurant.rating,
      reviewCount: restaurant.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHours: restaurant.openingHours,
    telephone: restaurant.phone,
  })

  const breadcrumbSchema = generateStructuredData('BreadcrumbList', {
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://cityguide.ma',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Restaurants',
        item: 'https://cityguide.ma/restaurants',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: restaurant.name,
        item: `https://cityguide.ma/restaurants/${restaurant.slug}`,
      },
    ],
  })

  /* -- Determine related restaurants (same city or tags, different slug) -- */
  const relatedRestaurants = restaurants
    .filter(
      (r) =>
        r.slug !== restaurant.slug &&
        (r.city === restaurant.city || r.tags.some((tag) => restaurant.tags.includes(tag))),
    )
    .slice(0, 3)

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section
        className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex items-end"
        style={{
          backgroundImage: `url(${restaurant.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

        <div className="relative z-10 w-full container-morocco pb-12 pt-32">
          {/* Cuisine & Price badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Tag className="w-3.5 h-3.5" />
              {restaurant.cuisine}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/90 text-white text-xs font-semibold backdrop-blur-sm">
              <DollarSign className="w-3.5 h-3.5" />
              {restaurant.priceRange}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              {restaurant.city}, Morocco
            </span>
          </div>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            {restaurant.name}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              {renderStars(restaurant.rating)}
              <span className="text-white font-semibold ml-1">{restaurant.rating.toFixed(1)}</span>
            </div>
            <span className="text-white/70 text-sm">
              {restaurant.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5" />
              {restaurant.openingHours}
            </span>
            {restaurant.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BREADCRUMB
          ============================================================ */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href="/restaurants" className="hover:text-[var(--color-primary)] transition-colors">
                Restaurants
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">{restaurant.name}</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          IMAGE GALLERY
          ============================================================ */}
      <section className="bg-[var(--surface)]">
        <div className="container-morocco py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {restaurant.images.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${restaurant.name} - Photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {i === 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    <Camera className="w-3.5 h-3.5" />
                    {restaurant.images.length} Photos
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MAIN CONTENT + SIDEBAR
          ============================================================ */}
      <div className="bg-[var(--surface-muted)]">
        <div className="container-morocco py-10 lg:py-14">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">

            {/* -- MAIN CONTENT (~70%) -- */}
            <div className="w-full lg:w-[70%] space-y-12">

              {/* Description */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Eye className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    About {restaurant.name}
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <div className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed space-y-4">
                    {descriptionParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Specialties */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Utensils className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Specialties
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {restaurant.specialties.map((specialty) => (
                      <div key={specialty} className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] bg-[var(--surface-muted)]">
                        <Utensils className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] text-sm font-medium">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Highlights */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Highlights
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <ul className="space-y-4">
                    {restaurant.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Popular Dishes */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Popular Dishes
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {restaurant.popularDishes.map((dish) => (
                      <div key={dish} className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] bg-[var(--surface-muted)]">
                        <Utensils className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] text-sm">{dish}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Features Grid */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10">
                    <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Features
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {restaurant.features.map((feature) => (
                    <div
                      key={feature}
                      className="card-moroccan flex flex-col items-center gap-2 p-4 text-center"
                    >
                      <span className="text-[var(--color-primary)]">
                        {featureIcons[feature] || <Sparkles className="w-5 h-5" />}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Good to Know */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10">
                    <Lightbulb className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Good to Know
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <ul className="space-y-4">
                    {restaurant.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  {restaurant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              {/* Related Restaurants */}
              {relatedRestaurants.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                      <Compass className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                      Similar Restaurants
                    </h2>
                  </div>
                  <div className="zellige-border mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {relatedRestaurants.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/restaurants/${related.slug}`}
                        className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={related.images[0]}
                            alt={related.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                              {related.cuisine}
                            </span>
                          </div>
                          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                            <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                            <span className="text-white text-xs font-semibold">{related.rating}</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-[family-name:var(--font-display)] text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors mb-1">
                            {related.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {related.city}
                            </span>
                            <span className="font-semibold text-[var(--color-primary)]">{related.priceRange}</span>
                          </div>
                          <span className="text-xs text-[var(--color-primary)] flex items-center gap-1 mt-2">
                            View details <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* -- SIDEBAR (~30%) -- */}
            <aside className="w-full lg:w-[30%] space-y-6">

              {/* Info Card */}
              <div className="card-moroccan p-6 sticky top-24">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-2">
                  Visit {restaurant.name}
                </h3>

                {/* Price highlight */}
                <div className="bg-[var(--color-primary)]/10 rounded-lg p-4 mb-5">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Price Range</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">{restaurant.priceRange}</p>
                  <p className="text-xs text-[var(--text-muted)]">{restaurant.cuisine} in {restaurant.city}</p>
                </div>

                <div className="zellige-border mb-5" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Rating</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {renderStars(restaurant.rating)}
                        <span className="text-sm font-semibold text-[var(--text-primary)] ml-1">{restaurant.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{restaurant.reviewCount.toLocaleString()} reviews</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Opening Hours</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{restaurant.openingHours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Location</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{restaurant.location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Contact</p>
                      <a href={`tel:${restaurant.phone}`} className="text-sm text-[var(--text-primary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
                        {restaurant.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Dress Code</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{restaurant.dressCode}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 pt-6 border-t border-[var(--border-light)] space-y-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${restaurant.location.lat},${restaurant.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary)]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Compass className="w-4 h-4" />
                    Get Directions
                  </a>
                  <Link
                    href="/restaurants"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--surface-muted)] text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--surface-muted)]/80 transition-all border border-[var(--border)]"
                  >
                    <ArrowRight className="w-4 h-4" />
                    View All Restaurants
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="gradient-moroccan py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-white mb-4">
            Dine at {restaurant.name}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Experience {restaurant.cuisine.toLowerCase()} cuisine at its finest in {restaurant.city}. Contact the restaurant directly to make a reservation and discover why {restaurant.name} is a must-visit destination.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${restaurant.location.lat},${restaurant.location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Get Directions
            </a>
            <Link
              href="/restaurants"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-all backdrop-blur-sm border border-white/20"
            >
              <ArrowRight className="w-4 h-4" />
              Browse All Restaurants
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
