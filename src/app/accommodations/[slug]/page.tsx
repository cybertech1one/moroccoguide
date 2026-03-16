import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Star,
  MapPin,
  ChevronRight,
  Home,
  Clock,
  Bed,
  Wifi,
  Waves,
  Sparkles,
  Utensils,
  Car,
  Wind,
  Coffee,
  Dumbbell,
  Bath,
  Tv,
  ShieldCheck,
  Phone,
  Users,
  Eye,
  Landmark,
  Tag,
  CheckCircle,
  CalendarDays,
  DoorOpen,
  DoorClosed,
  ScrollText,
  Navigation,
  ArrowRight,
  Camera,
  Lightbulb,
  Compass,
  Globe,
  DollarSign,
} from 'lucide-react'
import { generateStructuredData, truncate } from '@/lib/utils'

/* ================================================================
   ACCOMMODATION DATA
   ================================================================ */

interface Room {
  name: string
  description: string
}

interface Accommodation {
  slug: string
  name: string
  type: string
  city: string
  priceRange: string
  description: string
  images: string[]
  rating: number
  reviewCount: number
  amenities: string[]
  highlights: string[]
  rooms: Room[]
  phone: string
  location: { address: string; lat: number; lng: number }
  checkIn: string
  checkOut: string
  policies: string[]
  nearbyAttractions: string[]
  tags: string[]
  tips: string[]
}

const accommodations: Accommodation[] = [
  {
    slug: 'riad-yasmine',
    name: 'Riad Yasmine',
    type: 'Riad',
    city: 'Marrakech',
    priceRange: '$$',
    description:
      'Riad Yasmine is one of the most photographed riads in Marrakech, nestled deep within the winding alleyways of the ancient medina. Its iconic turquoise plunge pool, surrounded by lush tropical plants and intricate zellige tilework, has graced the pages of countless travel magazines and Instagram feeds worldwide.\n\nBeyond its visual splendor, this intimate guesthouse offers a genuinely warm Moroccan hospitality experience. Each of the beautifully appointed rooms features hand-carved cedar furniture, traditional tadelakt walls, and soft Berber textiles. The rooftop terrace provides sweeping views over the medina rooftops to the Atlas Mountains beyond.\n\nGuests can enjoy a lavish Moroccan breakfast served in the courtyard each morning, complete with fresh msemen flatbreads, amlou dip, seasonal fruits, and freshly squeezed orange juice. The riad also arranges private cooking classes, hammam experiences, and guided medina tours.',
    images: [
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 1243,
    amenities: ['Free WiFi', 'Plunge Pool', 'Rooftop Terrace', 'Breakfast Included', 'Air Conditioning', 'Airport Transfer', 'Cooking Classes', 'Hammam'],
    highlights: ['Iconic turquoise plunge pool', 'Authentic zellige tilework throughout', 'Panoramic rooftop terrace', 'Daily traditional Moroccan breakfast', 'Walking distance to Jemaa el-Fnaa'],
    rooms: [
      { name: 'Standard Double Room', description: 'Cozy room with traditional Moroccan decor, en-suite bathroom with tadelakt walls, and courtyard views.' },
      { name: 'Superior Suite', description: 'Spacious suite with separate sitting area, hand-carved cedar ceiling, and private balcony overlooking the pool.' },
      { name: 'Rooftop Suite', description: 'Premium top-floor suite with private terrace, outdoor seating, and panoramic views of the medina and Atlas Mountains.' },
    ],
    phone: '+212 524-389587',
    location: { address: '54 Derb El Aadi, Riad Laarouss, Marrakech Medina', lat: 31.6295, lng: -7.9811 },
    checkIn: '14:00',
    checkOut: '11:00',
    policies: ['Free cancellation up to 48 hours before check-in', 'Children welcome, extra bed available on request', 'No smoking inside rooms; smoking permitted on terrace'],
    nearbyAttractions: ['Jemaa el-Fnaa Square (8 min walk)', 'Bahia Palace (12 min walk)', 'Majorelle Garden (15 min by taxi)'],
    tags: ['Instagram-famous', 'Medina', 'Pool', 'Romantic'],
    tips: ['Book the Rooftop Suite early as it is the most requested room', 'Request a medina guide for your first arrival as GPS does not work well in the alleyways', 'Breakfast is served between 8:00 and 10:00 in the courtyard', 'Ask about their private cooking class schedule at least two days in advance', 'The pool is photogenic but small, best enjoyed in the early morning'],
  },
  {
    slug: 'la-mamounia',
    name: 'La Mamounia',
    type: 'Hotel',
    city: 'Marrakech',
    priceRange: '$$$$',
    description:
      'La Mamounia is a legendary palace hotel that has been the crown jewel of Moroccan hospitality since it first opened its doors in 1923. Set within eight hectares of breathtaking gardens originally planted in the 18th century for Prince Moulay Mamoun, the hotel seamlessly blends Art Deco grandeur with traditional Moroccan artistry.\n\nWinston Churchill famously called La Mamounia "the most beautiful place in the world," and the property has hosted royalty, heads of state, and Hollywood icons throughout its storied history. The interiors are a masterclass in Moroccan craftsmanship, with soaring zellige-clad archways, hand-painted ceilings, and acres of Italian marble.\n\nThe hotel features four world-class restaurants, a 27,000 square foot spa, three heated swimming pools, and impeccably maintained grounds that include citrus orchards, olive groves, and rose gardens. Every detail is designed to transport guests into a realm of timeless luxury.',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 3876,
    amenities: ['Free WiFi', 'Three Pools', 'Luxury Spa', 'Four Restaurants', 'Fitness Center', 'Concierge', 'Valet Parking', 'Butler Service', 'Tennis Courts', 'Gardens'],
    highlights: ['8 hectares of historic royal gardens', 'Churchill\'s favorite hotel', 'Award-winning 27,000 sq ft spa', 'Four world-class restaurants', 'Art Deco meets Moroccan palace design'],
    rooms: [
      { name: 'Superior Room', description: 'Elegant room with garden or pool views, marble bathroom, and refined Moroccan-Art Deco decor.' },
      { name: 'Executive Suite', description: 'Grand suite with separate living area, private terrace overlooking the gardens, and premium amenities.' },
      { name: 'Riad Suite', description: 'Private two-story riad within the hotel grounds with personal butler, private pool, and exclusive dining options.' },
    ],
    phone: '+212 524-388600',
    location: { address: 'Avenue Bab Jdid, Marrakech 40040', lat: 31.6198, lng: -7.9948 },
    checkIn: '15:00',
    checkOut: '12:00',
    policies: ['Free cancellation up to 72 hours before check-in', 'Children welcome with dedicated kids\' programs', 'Smart casual dress code in restaurants after 7 PM'],
    nearbyAttractions: ['Koutoubia Mosque (5 min walk)', 'Jemaa el-Fnaa Square (10 min walk)', 'Saadian Tombs (15 min walk)'],
    tags: ['Luxury', 'Palace', 'Historic', 'Gardens', 'Spa'],
    tips: ['Visit the gardens during golden hour for the most stunning photographs', 'The spa requires advance booking, especially for weekend treatments', 'L\'Italien restaurant is the most sought-after for dinner reservations', 'Request a garden-view room for the most atmospheric experience', 'Non-guests can visit the hotel bar if they dress smartly and make a reservation'],
  },
  {
    slug: 'riad-fes',
    name: 'Riad Fes',
    type: 'Riad',
    city: 'Fes',
    priceRange: '$$$',
    description:
      'Riad Fes is an award-winning luxury riad tucked into the heart of the ancient Fes medina, widely regarded as one of the finest boutique properties in all of Morocco. The riad masterfully combines centuries-old Moroccan architecture with contemporary luxury, creating an atmosphere of refined elegance within the labyrinthine streets of the world\'s largest car-free urban area.\n\nThe interiors are a showcase of Morocco\'s finest artisanal traditions: exquisite zellige mosaic tilework in geometric patterns, intricately carved plaster arabesques, and painted cedar ceilings that took master craftsmen years to complete. The central courtyard features a serene pool surrounded by orange trees and jasmine.\n\nThe rooftop restaurant offers one of the most spectacular dining experiences in Fes, with panoramic views over the medina\'s sea of minarets and rooftops while guests savor refined Fassi cuisine. The on-site spa features a traditional hammam and a range of treatments using locally sourced argan oil and rose water.',
    images: [
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 2156,
    amenities: ['Free WiFi', 'Courtyard Pool', 'Rooftop Restaurant', 'Hammam & Spa', 'Air Conditioning', 'Airport Transfer', 'Library', 'Cooking Classes'],
    highlights: ['Award-winning luxury riad', 'Rooftop dining with panoramic medina views', 'Masterwork zellige and carved plaster', 'Traditional hammam spa', 'Central Fes medina location'],
    rooms: [
      { name: 'Classic Room', description: 'Beautifully appointed room with traditional zellige bathroom, courtyard views, and handcrafted furnishings.' },
      { name: 'Prestige Suite', description: 'Spacious suite with lounge area, private terrace, and museum-quality Moroccan decorative arts.' },
      { name: 'Royal Suite', description: 'The finest suite with separate living room, fireplace, private rooftop terrace, and unparalleled medina views.' },
    ],
    phone: '+212 535-947610',
    location: { address: '5 Derb Ben Slimane, Zerbtana, Fes Medina', lat: 34.0628, lng: -4.9745 },
    checkIn: '14:00',
    checkOut: '12:00',
    policies: ['Free cancellation up to 48 hours before arrival', 'Not suitable for children under 12', 'Quiet hours from 22:00 to 08:00'],
    nearbyAttractions: ['Al-Qarawiyyin Mosque (7 min walk)', 'Bou Inania Madrasa (10 min walk)', 'Chouara Tanneries (15 min walk)'],
    tags: ['Luxury', 'Award-winning', 'Medina', 'Rooftop Dining'],
    tips: ['Arrange a riad guide for your first visit as the medina streets are extremely confusing', 'Book the rooftop dinner at sunset for the best views over the medina', 'Ask about their seasonal cooking class offerings using Fassi recipes', 'The hammam is most relaxing during the quieter morning hours', 'Download offline maps before arriving as mobile signal can be weak in the medina'],
  },
  {
    slug: 'kasbah-tamadot',
    name: 'Kasbah Tamadot',
    type: 'Boutique Hotel',
    city: 'Atlas Mountains',
    priceRange: '$$$$',
    description:
      'Kasbah Tamadot is Sir Richard Branson\'s extraordinary mountain retreat, perched high in the Atlas Mountains near the village of Asni, just an hour from Marrakech. Originally purchased by Branson\'s mother Eve during a balloon expedition, the property has been transformed into one of Morocco\'s most exclusive and enchanting boutique hotels.\n\nThe kasbah blends traditional Berber architecture with Branson\'s signature eclectic style. Each of the 28 rooms and suites is individually designed, featuring antiques collected from around the world alongside local Moroccan craftsmanship. The infinity pool appears to float above the dramatic valley below, framed by snow-capped peaks and terraced orchards.\n\nGuests can embark on guided treks through Berber villages, ride mules to remote mountain hamlets, take cooking classes in traditional Berber cuisine, or simply relax in the world-class spa while gazing at the ever-changing mountain panorama. The hotel also supports the local community through the Eve Branson Foundation.',
    images: [
      'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=1200&q=80',
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&q=80',
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 1567,
    amenities: ['Free WiFi', 'Infinity Pool', 'Luxury Spa', 'Restaurant', 'Tennis Court', 'Mountain Trekking', 'Cooking Classes', 'Mule Rides', 'Helicopter Pad', 'Library'],
    highlights: ['Sir Richard Branson\'s private retreat', 'Infinity pool with Atlas Mountain views', 'Individually designed rooms with global antiques', 'Guided Berber village treks', 'Eve Branson Foundation community projects'],
    rooms: [
      { name: 'Deluxe Room', description: 'Mountain-view room with Berber-inspired decor, private terrace, and luxury en-suite bathroom.' },
      { name: 'Master Suite', description: 'Expansive suite with separate sitting room, fireplace, and sweeping panoramic valley views.' },
      { name: 'Berber Tent Suite', description: 'Unique luxury tent accommodation on the grounds with heated floors, outdoor shower, and stargazing deck.' },
    ],
    phone: '+212 524-368200',
    location: { address: 'BP 67, Asni, Atlas Mountains 42152', lat: 31.2553, lng: -7.9869 },
    checkIn: '15:00',
    checkOut: '11:00',
    policies: ['Free cancellation up to 14 days before arrival', 'Children over 5 welcome; babysitting available', 'Helicopter transfers available from Marrakech'],
    nearbyAttractions: ['Asni Village (5 min drive)', 'Imlil & Toubkal trailhead (30 min drive)', 'Ourika Valley (45 min drive)'],
    tags: ['Luxury', 'Mountains', 'Exclusive', 'Trekking', 'Branson'],
    tips: ['The drive from Marrakech takes about an hour and the road is well-maintained', 'Bring layers as mountain temperatures drop significantly in the evening', 'The Berber Tent Suite should be booked months in advance during peak season', 'Guided village treks are best enjoyed early in the morning before the heat', 'Ask about the Eve Branson Foundation visit for a meaningful community experience'],
  },
  {
    slug: 'dar-ahlam',
    name: 'Dar Ahlam',
    type: 'Boutique Hotel',
    city: 'Ouarzazate',
    priceRange: '$$$$',
    description:
      'Dar Ahlam, meaning "House of Dreams" in Arabic, is one of the world\'s most extraordinary boutique hotels, hidden within the ancient Skoura palm oasis outside Ouarzazate. This meticulously restored 19th-century kasbah offers an experience that transcends conventional hospitality, where every moment is choreographed as a bespoke surprise.\n\nThere are no menus, no set dining times, and no reception desk. Instead, each stay is an immersive journey guided by an intuitive staff who anticipate your desires before you express them. Meals appear in unexpected locations: a candlelit dinner atop the kasbah towers, a picnic in a hidden rose garden, breakfast served in a palmerie grove as the morning light filters through the fronds.\n\nThe property features just 14 suites, each a masterpiece of Moroccan design with museum-quality antiques, hand-loomed textiles, and walls finished in luminous tadelakt. The gardens are an oasis within an oasis, with ancient olive trees, a heated pool, and secret courtyards fragrant with jasmine and orange blossom.',
    images: [
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&q=80',
      'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=1200&q=80',
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 876,
    amenities: ['Free WiFi', 'Heated Pool', 'Spa & Hammam', 'Bespoke Dining', 'Library', 'Gardens', 'Desert Excursions', 'Cooking Classes', 'Private Cinema', 'Yoga'],
    highlights: ['No menus - every meal is a surprise', 'Restored 19th-century kasbah', 'Only 14 suites for total privacy', 'Hidden within Skoura palm oasis', 'Named among world\'s most unique hotels'],
    rooms: [
      { name: 'Garden Suite', description: 'Ground-floor suite opening onto private gardens, with antique furnishings and a deep soaking tub.' },
      { name: 'Tower Suite', description: 'Upper-level suite in the kasbah tower with 360-degree views over the palm oasis and Atlas Mountains.' },
      { name: 'Maison Suite', description: 'Private two-bedroom house within the grounds, with personal garden, plunge pool, and dedicated staff.' },
    ],
    phone: '+212 524-852239',
    location: { address: 'Skoura Palm Oasis, Ouarzazate Province', lat: 31.0607, lng: -6.5537 },
    checkIn: '15:00',
    checkOut: '12:00',
    policies: ['Non-refundable deposit of 50% at booking', 'Adults only; not suitable for children under 16', 'All-inclusive rate covers meals, drinks, and excursions'],
    nearbyAttractions: ['Skoura Kasbah trail (walking distance)', 'Ait Benhaddou UNESCO site (45 min drive)', 'Valley of the Roses (1 hour drive)'],
    tags: ['Ultra-luxury', 'Kasbah', 'Oasis', 'Bespoke', 'Adults Only'],
    tips: ['Surrender to the experience and let the staff surprise you with meals and activities', 'Bring binoculars for birdwatching in the palm oasis as it is a major habitat', 'The all-inclusive rate means your wallet stays packed away for the entire stay', 'Pack sunscreen and a hat as the desert sun is intense even in winter', 'Request a stargazing experience for an unforgettable evening in the oasis'],
  },
  {
    slug: 'sahara-luxury-camp',
    name: 'Sahara Luxury Camp',
    type: 'Desert Camp',
    city: 'Merzouga',
    priceRange: '$$$',
    description:
      'The Sahara Luxury Camp offers an unforgettable glamping experience deep within the golden dunes of Erg Chebbi, Morocco\'s most spectacular sand sea near the village of Merzouga. Far from any light pollution, the camp sits beneath some of the clearest and most star-filled skies on the African continent.\n\nEach of the twelve luxury tents is spaciously appointed with handwoven Berber carpets, traditional lanterns, comfortable beds with premium linens, and a private en-suite bathroom with hot running water. The communal lounge tent features plush cushions and a central fire pit where guests gather for Gnawa music performances under the stars.\n\nThe experience begins with a sunset camel trek across the towering dunes, followed by a gourmet dinner of traditional Berber cuisine cooked in underground sand ovens. After dinner, guests stargaze with a guide who shares Berber astronomical traditions. Dawn brings the most magical moment: watching the first light paint the Saharan dunes in shades of amber, gold, and rose.',
    images: [
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
      'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&q=80',
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 2034,
    amenities: ['Private Tents', 'En-Suite Bathrooms', 'Camel Trek', 'Gourmet Dinner', 'Gnawa Music', 'Stargazing', 'Breakfast Included', 'Sand Boarding'],
    highlights: ['Deep in the Erg Chebbi dunes', 'Sunset camel trek included', 'Live Gnawa music under the stars', 'Spectacular Saharan stargazing', 'Traditional underground-cooked Berber feast'],
    rooms: [
      { name: 'Standard Luxury Tent', description: 'Spacious tent with double bed, Berber carpets, en-suite bathroom, and private terrace facing the dunes.' },
      { name: 'Premium Suite Tent', description: 'Upgraded tent with king bed, lounge area, outdoor shower, and unobstructed panoramic dune views.' },
      { name: 'Royal Saharan Tent', description: 'The finest tent with two rooms, private campfire area, telescope for stargazing, and personal guide.' },
    ],
    phone: '+212 535-577140',
    location: { address: 'Erg Chebbi Dunes, Merzouga, Errachidia Province', lat: 31.0982, lng: -3.9932 },
    checkIn: '16:00',
    checkOut: '09:00',
    policies: ['Full payment required 7 days before arrival', 'Not recommended for children under 6 due to camel trek', 'Camp is accessed by camel or 4x4 vehicle only'],
    nearbyAttractions: ['Merzouga village (30 min camel ride)', 'Khamlia Gnawa village (15 min drive)', 'Dayet Srji seasonal lake (20 min drive)'],
    tags: ['Desert', 'Glamping', 'Sahara', 'Stargazing', 'Adventure'],
    tips: ['Bring warm clothing as the desert gets surprisingly cold at night', 'Charge all your devices beforehand as electricity is from solar generators', 'The camel trek takes about 45 minutes and padding helps with comfort', 'Wake before dawn to see the sunrise paint the dunes in golden light', 'Pack a headlamp for navigating the camp after dark'],
  },
  {
    slug: 'hotel-nord-pinus',
    name: 'Hotel Nord-Pinus',
    type: 'Hotel',
    city: 'Tangier',
    priceRange: '$$$',
    description:
      'Hotel Nord-Pinus Tangier occupies a commanding position on the Grand Socco, the vibrant gateway between Tangier\'s ancient medina and the modern ville nouvelle. This bohemian boutique hotel channels the artistic spirit of Tangier\'s legendary literary golden age, when writers like Paul Bowles, William Burroughs, and Jack Kerouac roamed its streets.\n\nThe hotel is a visual feast of eclectic vintage decor: each room is uniquely styled with Moroccan antiques, global curiosities, tribal textiles, and contemporary photography. The aesthetic captures the cosmopolitan soul of Tangier, a city that has always existed at the crossroads of Africa and Europe, tradition and modernity.\n\nThe rooftop bar and restaurant offer one of Tangier\'s most coveted views, spanning from the medina rooftops to the port, the Strait of Gibraltar, and on clear days, the coast of Spain. It is the perfect perch to sip a cocktail while watching the sun set over two continents.',
    images: [
      'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
    ],
    rating: 4.5,
    reviewCount: 987,
    amenities: ['Free WiFi', 'Rooftop Bar', 'Restaurant', 'Concierge', 'Terrace', 'Library', 'Art Collection', 'Room Service'],
    highlights: ['Bohemian boutique style on the Grand Socco', 'Rooftop views of the Strait of Gibraltar', 'Channels Tangier\'s literary golden age', 'Eclectic vintage decor in every room', 'Gateway to the medina and Kasbah'],
    rooms: [
      { name: 'Classic Room', description: 'Individually styled room with vintage Moroccan furnishings, en-suite bathroom, and medina views.' },
      { name: 'Superior Room', description: 'Larger room with sitting area, curated art pieces, and views over the Grand Socco square.' },
      { name: 'Pinus Suite', description: 'The signature suite with separate lounge, private terrace, and panoramic views toward Spain.' },
    ],
    phone: '+212 539-336140',
    location: { address: '11 Place du Grand Socco, Tangier 90000', lat: 35.7847, lng: -5.8106 },
    checkIn: '15:00',
    checkOut: '11:00',
    policies: ['Free cancellation up to 48 hours before check-in', 'Children welcome; extra bed available', 'Pets allowed on request'],
    nearbyAttractions: ['Tangier Kasbah & Museum (5 min walk)', 'Petit Socco (8 min walk)', 'Cape Spartel (20 min drive)'],
    tags: ['Boutique', 'Artistic', 'Rooftop', 'Literary Heritage'],
    tips: ['The rooftop bar at sunset is unmissable for views of Spain across the strait', 'Ask the concierge about Paul Bowles walking tours of literary Tangier', 'The Grand Socco market outside is most vibrant in the morning', 'Request a room facing the medina for the most atmospheric views', 'Tangier can be windy so bring a light jacket even in summer'],
  },
  {
    slug: 'heure-bleue-palais',
    name: "L'Heure Bleue Palais",
    type: 'Boutique Hotel',
    city: 'Essaouira',
    priceRange: '$$$',
    description:
      "L'Heure Bleue Palais is an elegant boutique palace hotel nestled within the UNESCO-listed medina walls of Essaouira, the enchanting wind-swept coastal town on Morocco's Atlantic coast. Named after the magical \"blue hour\" light that bathes the town at dusk, this refined property is a haven of art, culture, and coastal sophistication.\n\nOriginally a grand private residence, the palais has been lovingly restored to showcase both its architectural heritage and a curated collection of Moroccan contemporary art. The interiors blend French colonial elegance with traditional Moroccan craftsmanship: soaring ceilings, ornate plasterwork, and beautiful zellige floors. A rooftop pool offers sweeping views over the medina and the Atlantic beyond.\n\nThe hotel also features a private cinema, a well-stocked library, and a refined restaurant serving fresh Atlantic seafood alongside classic Moroccan dishes. The spa incorporates local argan oil and ocean-inspired treatments that reflect Essaouira's unique maritime character.",
    images: [
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 1432,
    amenities: ['Free WiFi', 'Rooftop Pool', 'Spa & Hammam', 'Restaurant', 'Private Cinema', 'Art Gallery', 'Library', 'Air Conditioning'],
    highlights: ['Rooftop pool with Atlantic Ocean views', 'Private cinema and art gallery', 'UNESCO-listed medina location', "Named for Essaouira's magical blue hour", 'Argan oil spa treatments'],
    rooms: [
      { name: 'Comfort Room', description: 'Elegant room with period furnishings, en-suite bathroom, and views of the medina or courtyard.' },
      { name: 'Junior Suite', description: 'Spacious suite with lounge area, French colonial decor, and curated artwork.' },
      { name: 'Ocean Suite', description: 'Premium suite with private balcony, Atlantic Ocean views, and exclusive amenities.' },
    ],
    phone: '+212 524-783434',
    location: { address: '2 Rue Ibn Batouta, Essaouira Medina 44000', lat: 31.5085, lng: -9.7696 },
    checkIn: '15:00',
    checkOut: '12:00',
    policies: ['Free cancellation up to 72 hours before arrival', 'Children welcome with family-friendly amenities', 'Wind and kite surfing equipment storage available'],
    nearbyAttractions: ['Essaouira Ramparts (2 min walk)', 'Skala du Port (5 min walk)', 'Essaouira Beach (8 min walk)'],
    tags: ['Coastal', 'Art', 'Cinema', 'Palace', 'Romantic'],
    tips: ['Essaouira is known for strong Atlantic winds so pack layers', 'The private cinema can be reserved for a romantic evening', 'Visit the rooftop pool during blue hour for the experience that inspired the hotel name', 'The spa argan oil treatment is sourced from nearby cooperatives', 'Ask about combined tickets for local art galleries and the hotel gallery'],
  },
  {
    slug: 'equity-point-hostel',
    name: 'Equity Point Hostel',
    type: 'Hostel',
    city: 'Marrakech',
    priceRange: '$',
    description:
      "Equity Point Marrakech is a vibrant backpacker hostel housed in a beautifully restored traditional riad, just steps from the legendary Jemaa el-Fnaa square. The property proves that budget travel in Morocco doesn't mean sacrificing atmosphere or location, offering an unbeatable base for exploring the Red City.\n\nThe hostel centers around a classic riad courtyard with a refreshing plunge pool, surrounded by ornate archways and orange trees. The rooftop terrace is the social hub, with panoramic views over the medina and the Koutoubia Mosque minaret. It's where travelers from around the world gather to share stories over mint tea and plan adventures together.\n\nBoth private rooms and shared dormitories are available, all clean and well-maintained with Moroccan decorative touches. A generous breakfast buffet is included, and the hostel organizes daily walking tours, desert excursions, and pub crawls, making it easy to connect with fellow travelers.",
    images: [
      'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.3,
    reviewCount: 4521,
    amenities: ['Free WiFi', 'Plunge Pool', 'Rooftop Terrace', 'Breakfast Included', 'Lockers', 'Tour Desk', 'Common Kitchen', 'Laundry Service'],
    highlights: ['Steps from Jemaa el-Fnaa square', 'Restored riad with plunge pool', 'Social rooftop terrace', 'Free daily walking tours', 'Best value in the Marrakech medina'],
    rooms: [
      { name: '8-Bed Mixed Dormitory', description: 'Shared dorm with personal locker, reading light, privacy curtain, and shared bathroom.' },
      { name: '4-Bed Female Dormitory', description: 'Women-only dorm with enhanced privacy, personal storage, and shared bathroom facilities.' },
      { name: 'Private Double Room', description: 'En-suite private room with traditional Moroccan decor, double bed, and courtyard views.' },
    ],
    phone: '+212 524-442646',
    location: { address: '80 Derb El Hammam, Mouassine, Marrakech Medina', lat: 31.6312, lng: -7.9892 },
    checkIn: '13:00',
    checkOut: '10:00',
    policies: ['Free cancellation up to 24 hours before check-in', 'Minimum age 18 for dormitories', 'Quiet hours from 23:00 to 07:00 in dorm areas'],
    nearbyAttractions: ['Jemaa el-Fnaa Square (3 min walk)', 'Marrakech Museum (5 min walk)', 'Souks of Marrakech (1 min walk)'],
    tags: ['Budget', 'Backpacker', 'Social', 'Medina', 'Youth'],
    tips: ['Bring a padlock for the dorm lockers or buy one at reception', 'The free walking tour leaves at 10:00 every morning from the lobby', 'Book the private room early as they sell out fast in peak season', 'The rooftop terrace is the best place to meet other travelers', 'Download Maps.me offline maps for navigating the medina on foot'],
  },
  {
    slug: 'riad-kniza',
    name: 'Riad Kniza',
    type: 'Riad',
    city: 'Marrakech',
    priceRange: '$$$',
    description:
      "Riad Kniza is an intimate eleven-room jewel in the heart of the Marrakech medina, owned by one of Morocco's most distinguished collectors of traditional arts and antiques. Every corner of this remarkable property tells a story, with museum-quality Berber textiles, antique silver jewelry, rare ceramics, and vintage Moroccan photography creating an atmosphere that is equal parts gallery and guesthouse.\n\nEach room is uniquely decorated to reflect a different facet of Morocco's rich artistic heritage. Hand-carved cedar doors open onto spaces adorned with centuries-old kilim rugs, vintage brass lanterns, and original artworks. The courtyard, with its tinkling fountain and fragrant jasmine, provides a peaceful retreat from the vibrant souks just outside the door.\n\nThe riad's restaurant is renowned among food lovers for its exceptional traditional Moroccan cuisine, prepared by a team of talented local women cooks. Weekly cooking classes offer guests the chance to learn the secrets of dishes like pastilla, tagine, and preserved lemon chicken. The traditional hammam provides an authentic bathing experience with black soap and ghassoul clay.",
    images: [
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 1654,
    amenities: ['Free WiFi', 'Courtyard Pool', 'Restaurant', 'Traditional Hammam', 'Cooking Classes', 'Art Collection', 'Library', 'Airport Transfer'],
    highlights: ['Museum-quality Moroccan antiques collection', 'Award-winning traditional cuisine', 'Authentic hammam experience', 'Only 11 rooms for total intimacy', 'Weekly cooking classes with local chefs'],
    rooms: [
      { name: 'Classic Room', description: 'Individually decorated room with antique furnishings, en-suite bathroom, and courtyard access.' },
      { name: 'Superior Room', description: 'Larger room with curated art pieces, sitting area, and premium handwoven Berber textiles.' },
      { name: 'Suite Kniza', description: 'The signature suite with separate salon, private terrace, and the finest pieces from the collection.' },
    ],
    phone: '+212 524-376942',
    location: { address: '34 Derb l\'Hotel, Bab Doukkala, Marrakech Medina', lat: 31.6308, lng: -7.9945 },
    checkIn: '14:00',
    checkOut: '12:00',
    policies: ['Free cancellation up to 48 hours before arrival', 'Children over 8 welcome', 'No outside food or drinks in common areas'],
    nearbyAttractions: ['Dar Si Said Museum (6 min walk)', 'Bahia Palace (10 min walk)', 'Jemaa el-Fnaa Square (12 min walk)'],
    tags: ['Antiques', 'Art', 'Intimate', 'Cooking', 'Heritage'],
    tips: ['Ask the owner for a personal tour of the antiques collection', 'The cooking class book up quickly so reserve at check-in', 'Request the room with the oldest kilim rug collection for art lovers', 'The hammam experience with ghassoul clay is deeply traditional', 'Arrive before dark on your first visit so you can learn the medina route'],
  },
  {
    slug: 'four-seasons-casablanca',
    name: 'Four Seasons Casablanca',
    type: 'Hotel',
    city: 'Casablanca',
    priceRange: '$$$$',
    description:
      "The Four Seasons Hotel Casablanca is an urban oasis situated on the famous Corniche promenade, offering the perfect blend of oceanfront luxury and cosmopolitan sophistication in Morocco's largest and most dynamic city. The hotel's Moorish-inspired architecture creates a striking silhouette against the Atlantic Ocean backdrop.\n\nWith 186 rooms and suites, the property features extensive gardens, multiple swimming pools, and direct access to the beach promenade. The interiors marry international luxury standards with subtle Moroccan touches: marble floors, warm wood accents, and carefully chosen local artworks. Floor-to-ceiling windows in every room frame either ocean vistas or the manicured gardens below.\n\nDining options include a sophisticated French-Moroccan restaurant, a casual poolside grill, and an elegant lobby lounge serving afternoon tea. The spa is one of Casablanca's finest, with a comprehensive menu of treatments, a fully equipped fitness center, and a stunning indoor pool. The hotel also offers an exceptional kids' club, making it ideal for families.",
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=1200&q=80',
      'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 2987,
    amenities: ['Free WiFi', 'Beach Access', 'Multiple Pools', 'Luxury Spa', 'Fine Dining', 'Fitness Center', 'Kids Club', 'Valet Parking', 'Business Center', 'Concierge'],
    highlights: ['Oceanfront location on the Corniche', 'Direct beach promenade access', 'Multiple pools and extensive gardens', 'Exceptional kids\' club for families', 'Casablanca\'s premier luxury address'],
    rooms: [
      { name: 'Superior Room', description: 'Spacious room with garden or city views, marble bathroom, and premium Four Seasons amenities.' },
      { name: 'Ocean View Suite', description: 'Elegant suite with separate living area, private balcony, and panoramic Atlantic Ocean views.' },
      { name: 'Royal Suite', description: 'The ultimate in luxury with multiple rooms, private dining area, and 180-degree ocean panorama.' },
    ],
    phone: '+212 529-073000',
    location: { address: 'Anfa Place Living Resort, Corniche, Casablanca 20050', lat: 33.5954, lng: -7.6674 },
    checkIn: '15:00',
    checkOut: '12:00',
    policies: ['Free cancellation up to 72 hours before arrival', 'Children welcome with complimentary kids\' amenities', 'Smart casual dress code in dining areas'],
    nearbyAttractions: ['Hassan II Mosque (15 min drive)', 'Morocco Mall (10 min drive)', 'Casablanca Old Medina (20 min drive)'],
    tags: ['Luxury', 'Beach', 'Family', 'Business', 'Urban Resort'],
    tips: ['Request an ocean-view room for the most memorable Casablanca stay', 'Visit Hassan II Mosque for Friday prayer for the most atmospheric experience', 'The poolside grill is perfect for a casual family lunch', 'Casablanca traffic can be heavy so allow extra time for excursions', 'The hotel can arrange a private car service to the medina and cultural sites'],
  },
  {
    slug: 'dar-zerhoune',
    name: 'Dar Zerhoune',
    type: 'Riad',
    city: 'Meknes',
    priceRange: '$$',
    description:
      "Dar Zerhoune is a charming boutique guesthouse perched on the hillside of the holy town of Moulay Idriss Zerhoun, overlooking the ancient Roman ruins of Volubilis and the rolling green hills of the Meknes region. For centuries, non-Muslims were forbidden from spending the night in this sacred town, and Dar Zerhoune was among the first guesthouses to welcome international travelers when the restriction was lifted.\n\nThe property is run by a passionate British-Moroccan couple who have lovingly restored this traditional house into a warm and stylish retreat. The rooms are simple but beautifully appointed, with whitewashed walls, colorful Moroccan textiles, and personal touches that give the space a genuine homey atmosphere.\n\nThe rooftop terrace is the crown jewel, offering one of the most spectacular views in Morocco: a sweeping panorama of the Roman ruins, the hilltop town below, and olive groves stretching to the horizon. The home-cooked meals, prepared with ingredients from the local souk, are consistently praised as some of the best food guests have eaten in Morocco.",
    images: [
      'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 765,
    amenities: ['Free WiFi', 'Rooftop Terrace', 'Home-cooked Meals', 'Airport Transfer', 'Tour Arrangement', 'Library', 'Breakfast Included', 'Laundry Service'],
    highlights: ['Overlooks the Roman ruins of Volubilis', 'In the sacred town of Moulay Idriss', 'Exceptional home-cooked Moroccan food', 'One of Morocco\'s most spectacular rooftop views', 'Intimate and personal hosting style'],
    rooms: [
      { name: 'Standard Room', description: 'Clean, comfortable room with traditional Moroccan touches, shared or private bathroom.' },
      { name: 'Superior Room', description: 'Larger room with en-suite bathroom, colorful textiles, and views over the town.' },
      { name: 'Terrace Suite', description: 'Top-floor suite with private terrace overlooking Volubilis ruins and the surrounding countryside.' },
    ],
    phone: '+212 535-544371',
    location: { address: '42 Derb Zouak, Moulay Idriss Zerhoun, Meknes Region', lat: 34.0554, lng: -5.5235 },
    checkIn: '14:00',
    checkOut: '11:00',
    policies: ['Free cancellation up to 48 hours before check-in', 'Children welcome; family rooms available', 'Respect local customs in this holy town'],
    nearbyAttractions: ['Volubilis Roman Ruins (10 min drive)', 'Moulay Idriss Shrine (5 min walk)', 'Meknes Imperial City (30 min drive)'],
    tags: ['Heritage', 'Views', 'Authentic', 'Cultural', 'Off-the-beaten-path'],
    tips: ['Visit Volubilis at sunrise or sunset for the best lighting and fewer crowds', 'The town is sacred so dress modestly when walking the streets', 'Home-cooked dinners should be requested by noon so ingredients can be sourced', 'The Saturday market in the town square is a wonderful local experience', 'The hosts are incredibly knowledgeable about the region and happy to share tips'],
  },
  {
    slug: 'lina-ryad-spa',
    name: 'Lina Ryad & Spa',
    type: 'Riad',
    city: 'Chefchaouen',
    priceRange: '$$',
    description:
      "Lina Ryad & Spa is a stylish boutique riad nestled in the heart of Chefchaouen, Morocco's famous Blue Pearl. The property perfectly captures the ethereal blue-washed aesthetic that has made this small mountain town one of the most photographed destinations in North Africa, while adding a layer of modern comfort and design sophistication.\n\nThe riad features elegantly appointed rooms decorated in a palette of blues, whites, and natural woods, each with quality mattresses and linens that ensure a restful night's sleep. The indoor spa offers a traditional hammam, massage treatments using local essential oils, and a relaxation area where the stresses of travel simply melt away.\n\nThe crowning glory is the panoramic terrace, which offers breathtaking views over Chefchaouen's blue-washed buildings, the dramatic Rif Mountains rising behind, and the valley below. It is the perfect spot for a leisurely breakfast or sunset drink, watching the changing light transform the Blue Pearl's palette from azure to indigo.",
    images: [
      'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200&q=80',
      'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=1200&q=80',
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 1876,
    amenities: ['Free WiFi', 'Spa & Hammam', 'Panoramic Terrace', 'Breakfast Included', 'Air Conditioning', 'Airport Transfer', 'Massage', 'Room Service'],
    highlights: ['Heart of the Blue Pearl of Morocco', 'Panoramic Rif Mountain views', 'Full spa with traditional hammam', 'Blue-themed interior design', 'Walking distance to all major sights'],
    rooms: [
      { name: 'Blue Room', description: 'Charming room decorated in Chefchaouen\'s signature blue tones with en-suite bathroom and mountain views.' },
      { name: 'Superior Room', description: 'Spacious room with sitting area, premium blue-and-white decor, and terrace access.' },
      { name: 'Panoramic Suite', description: 'Top-floor suite with private balcony offering sweeping views over the blue medina and Rif Mountains.' },
    ],
    phone: '+212 539-988090',
    location: { address: '26 Rue Targhi, Chefchaouen Medina 91000', lat: 35.1688, lng: -5.2636 },
    checkIn: '14:00',
    checkOut: '11:00',
    policies: ['Free cancellation up to 48 hours before check-in', 'Children welcome with family-friendly rooms', 'Mountain trekking gear storage available'],
    nearbyAttractions: ['Chefchaouen Kasbah (5 min walk)', 'Ras El Maa Waterfall (10 min walk)', 'Spanish Mosque viewpoint (25 min hike)'],
    tags: ['Blue City', 'Spa', 'Mountain Views', 'Photogenic', 'Relaxation'],
    tips: ['The best time to photograph the blue streets is early morning before crowds arrive', 'Hike to the Spanish Mosque for sunset for the most iconic view of Chefchaouen', 'Book a hammam session for the afternoon after exploring the medina', 'The town shuts down early so plan dinner before 21:00', 'Chefchaouen is at altitude so it can be cool even in summer evenings'],
  },
  {
    slug: 'sofitel-agadir',
    name: 'Sofitel Royal Bay',
    type: 'Hotel',
    city: 'Agadir',
    priceRange: '$$$',
    description:
      "Sofitel Royal Bay Resort Agadir is a grand beachfront luxury hotel stretching along Agadir's famous golden sand beach on Morocco's southern Atlantic coast. The resort embodies the French art de vivre lifestyle combined with Moroccan warmth, offering a comprehensive beach holiday experience in one of the country's sunniest destinations with over 300 days of sunshine per year.\n\nThe property features extensive landscaped gardens with towering palm trees, multiple swimming pools including an impressive lagoon-style pool, and direct access to the wide, pristine beach. Rooms and suites are decorated in a contemporary Moroccan style with natural materials, warm tones, and private balconies or terraces overlooking the ocean or gardens.\n\nDining options span from a refined Moroccan restaurant to a beachside grill and an international buffet, all emphasizing fresh, locally sourced ingredients. The So SPA is a sanctuary of relaxation, featuring an indoor pool, traditional hammam, and a comprehensive menu of treatments. The resort also offers a nine-hole golf course, tennis courts, and a kids' club, making it ideal for both couples and families.",
    images: [
      'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
      'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 3245,
    amenities: ['Free WiFi', 'Beach Access', 'Multiple Pools', 'So SPA', 'Three Restaurants', 'Golf Course', 'Tennis Courts', 'Kids Club', 'Fitness Center', 'Hammam'],
    highlights: ['Direct access to Agadir\'s golden beach', '300+ days of sunshine per year', 'Lagoon-style pool and extensive gardens', 'So SPA with traditional hammam', 'Nine-hole golf course on-site'],
    rooms: [
      { name: 'Classic Room', description: 'Comfortable room with garden views, modern Moroccan decor, and private balcony.' },
      { name: 'Prestige Suite', description: 'Sea-view suite with separate lounge, premium amenities, and direct garden access.' },
      { name: 'Imperial Suite', description: 'Top-tier suite with panoramic ocean views, private terrace, jacuzzi, and VIP services.' },
    ],
    phone: '+212 528-820088',
    location: { address: 'Baie des Palmiers, Cite Founty, Agadir 80000', lat: 30.4082, lng: -9.6051 },
    checkIn: '15:00',
    checkOut: '12:00',
    policies: ['Free cancellation up to 72 hours before arrival', 'Children welcome with kids\' club and family activities', 'All-inclusive packages available on request'],
    nearbyAttractions: ['Agadir Oufella Kasbah ruins (10 min drive)', 'Souk El Had (15 min drive)', 'Paradise Valley (45 min drive)'],
    tags: ['Beach Resort', 'Family', 'Golf', 'Spa', 'All-Inclusive'],
    tips: ['Ask about all-inclusive packages as they can offer significant savings', 'The beach can be windy in the afternoon so morning is best for sunbathing', 'Book a day trip to Paradise Valley for a stunning contrast to the beach', 'The golf course is best played in the morning or late afternoon', 'Souk El Had on Sunday is the best day for the full market experience'],
  },
  {
    slug: 'dar-roumana',
    name: 'Dar Roumana',
    type: 'Riad',
    city: 'Fes',
    priceRange: '$$$',
    description:
      "Dar Roumana, meaning \"House of the Pomegranate\" in Arabic, is a beautifully restored riad in the heart of the Fes medina that has earned a devoted following among food-loving travelers from around the world. Named after the ancient pomegranate tree that still grows in its courtyard, this six-room guesthouse elevates the Moroccan riad experience through its exceptional culinary program.\n\nThe property was lovingly restored by a Canadian-Moroccan couple who brought both international design sensibility and deep respect for traditional Fassi architecture. The result is a harmonious blend of contemporary comfort and centuries-old craftsmanship: smooth tadelakt walls in jewel tones, original hand-carved plaster, and modern bathrooms that incorporate traditional materials.\n\nThe cooking classes at Dar Roumana are legendary, led by expert chefs who guide guests through the souks to select ingredients before teaching the secrets of dishes that have been perfected over generations. The rooftop terrace offers one of the finest views in Fes, a 360-degree panorama of minarets, satellite dishes, and the distant Rif Mountains, best enjoyed with a glass of Moroccan wine at sunset.",
    images: [
      'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=1200&q=80',
      'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 1123,
    amenities: ['Free WiFi', 'Rooftop Terrace', 'Cooking Classes', 'Breakfast Included', 'Library', 'Air Conditioning', 'Concierge', 'Airport Transfer'],
    highlights: ['Legendary cooking classes through the souks', 'Named after its ancient pomegranate tree', '360-degree rooftop panorama of Fes', 'Only six rooms for intimate experience', 'Exceptional food and wine program'],
    rooms: [
      { name: 'Pomegranate Room', description: 'Ground-floor room opening onto the courtyard, with tadelakt walls and pomegranate tree views.' },
      { name: 'Saffron Suite', description: 'First-floor suite with warm saffron-hued decor, sitting area, and medina-view windows.' },
      { name: 'Rooftop Suite', description: 'Private top-floor suite with exclusive terrace access and 360-degree views over the Fes medina.' },
    ],
    phone: '+212 535-741637',
    location: { address: '30 Derb El Amer, Zkak Roumane, Fes Medina', lat: 34.0612, lng: -4.9812 },
    checkIn: '14:00',
    checkOut: '11:00',
    policies: ['Free cancellation up to 72 hours before arrival', 'Not recommended for children under 10', 'Cooking class minimum 2 participants; book 48 hours in advance'],
    nearbyAttractions: ['Bou Inania Madrasa (8 min walk)', 'Nejjarine Museum of Wood Arts (10 min walk)', 'Al-Qarawiyyin University (12 min walk)'],
    tags: ['Culinary', 'Cooking Classes', 'Intimate', 'Rooftop Views', 'Gourmet'],
    tips: ['Book the cooking class for your first full day so you can enjoy the skills throughout your stay', 'The souk ingredient shopping tour is half the fun of the cooking class', 'With only six rooms the riad fills up months in advance during peak season', 'Ask for the Moroccan wine pairing dinner for a special evening on the terrace', 'The pomegranate tree is most beautiful in autumn when its fruit ripens'],
  },
]

/* ================================================================
   HELPERS
   ================================================================ */

function getAccommodationBySlug(slug: string): Accommodation | undefined {
  return accommodations.find((a) => a.slug === slug)
}

const amenityIcons: Record<string, React.ReactNode> = {
  'Free WiFi': <Wifi className="w-5 h-5" />,
  'Plunge Pool': <Waves className="w-5 h-5" />,
  'Courtyard Pool': <Waves className="w-5 h-5" />,
  'Infinity Pool': <Waves className="w-5 h-5" />,
  'Heated Pool': <Waves className="w-5 h-5" />,
  'Multiple Pools': <Waves className="w-5 h-5" />,
  'Three Pools': <Waves className="w-5 h-5" />,
  'Rooftop Pool': <Waves className="w-5 h-5" />,
  'Beach Access': <Waves className="w-5 h-5" />,
  'Rooftop Terrace': <Eye className="w-5 h-5" />,
  'Panoramic Terrace': <Eye className="w-5 h-5" />,
  'Terrace': <Eye className="w-5 h-5" />,
  'Rooftop Bar': <Coffee className="w-5 h-5" />,
  'Breakfast Included': <Coffee className="w-5 h-5" />,
  'Air Conditioning': <Wind className="w-5 h-5" />,
  'Airport Transfer': <Car className="w-5 h-5" />,
  'Valet Parking': <Car className="w-5 h-5" />,
  'Cooking Classes': <Utensils className="w-5 h-5" />,
  'Home-cooked Meals': <Utensils className="w-5 h-5" />,
  'Restaurant': <Utensils className="w-5 h-5" />,
  'Four Restaurants': <Utensils className="w-5 h-5" />,
  'Three Restaurants': <Utensils className="w-5 h-5" />,
  'Fine Dining': <Utensils className="w-5 h-5" />,
  'Rooftop Restaurant': <Utensils className="w-5 h-5" />,
  'Bespoke Dining': <Utensils className="w-5 h-5" />,
  'Gourmet Dinner': <Utensils className="w-5 h-5" />,
  'Hammam': <Bath className="w-5 h-5" />,
  'Traditional Hammam': <Bath className="w-5 h-5" />,
  'Hammam & Spa': <Bath className="w-5 h-5" />,
  'Spa & Hammam': <Bath className="w-5 h-5" />,
  'Luxury Spa': <Sparkles className="w-5 h-5" />,
  'So SPA': <Sparkles className="w-5 h-5" />,
  'Full-Service Spa': <Sparkles className="w-5 h-5" />,
  'Massage': <Sparkles className="w-5 h-5" />,
  'Fitness Center': <Dumbbell className="w-5 h-5" />,
  'Concierge': <Phone className="w-5 h-5" />,
  'Butler Service': <Users className="w-5 h-5" />,
  'Library': <Landmark className="w-5 h-5" />,
  'Art Collection': <Landmark className="w-5 h-5" />,
  'Art Gallery': <Landmark className="w-5 h-5" />,
  'Private Cinema': <Tv className="w-5 h-5" />,
  'Tour Desk': <Navigation className="w-5 h-5" />,
  'Tour Arrangement': <Navigation className="w-5 h-5" />,
  'Desert Excursions': <Navigation className="w-5 h-5" />,
  'Mountain Trekking': <Navigation className="w-5 h-5" />,
  'Kids Club': <Users className="w-5 h-5" />,
  'Tennis Court': <Dumbbell className="w-5 h-5" />,
  'Tennis Courts': <Dumbbell className="w-5 h-5" />,
  'Golf Course': <Dumbbell className="w-5 h-5" />,
  'Room Service': <Bed className="w-5 h-5" />,
  'Private Tents': <Bed className="w-5 h-5" />,
  'En-Suite Bathrooms': <Bath className="w-5 h-5" />,
  'Camel Trek': <Navigation className="w-5 h-5" />,
  'Gnawa Music': <Sparkles className="w-5 h-5" />,
  'Stargazing': <Star className="w-5 h-5" />,
  'Sand Boarding': <Navigation className="w-5 h-5" />,
  'Lockers': <ShieldCheck className="w-5 h-5" />,
  'Common Kitchen': <Utensils className="w-5 h-5" />,
  'Laundry Service': <ShieldCheck className="w-5 h-5" />,
  'Gardens': <Sparkles className="w-5 h-5" />,
  'Yoga': <Sparkles className="w-5 h-5" />,
  'Business Center': <Landmark className="w-5 h-5" />,
  'Helicopter Pad': <Navigation className="w-5 h-5" />,
  'Mule Rides': <Navigation className="w-5 h-5" />,
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
  return accommodations.map((a) => ({ slug: a.slug }))
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const accommodation = getAccommodationBySlug(slug)
  if (!accommodation) return { title: 'Accommodation Not Found' }

  return {
    title: `${accommodation.name} - ${accommodation.city} | CityGuide Morocco`,
    description: truncate(accommodation.description, 160),
    openGraph: {
      title: `${accommodation.name} - ${accommodation.type} in ${accommodation.city} | CityGuide`,
      description: truncate(accommodation.description, 200),
      images: [
        {
          url: accommodation.images[0],
          width: 1200,
          height: 630,
          alt: `${accommodation.name}, ${accommodation.city}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${accommodation.name} | CityGuide Morocco`,
      description: truncate(accommodation.description, 200),
      images: [accommodation.images[0]],
    },
    alternates: {
      canonical: `https://cityguide.ma/accommodations/${accommodation.slug}`,
    },
  }
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default async function AccommodationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const accommodation = getAccommodationBySlug(slug)
  if (!accommodation) notFound()

  const descriptionParagraphs = accommodation.description.split('\n\n')

  /* -- JSON-LD Structured Data -- */

  const accommodationSchema = generateStructuredData('LodgingBusiness', {
    name: accommodation.name,
    description: truncate(accommodation.description, 300),
    url: `https://cityguide.ma/accommodations/${accommodation.slug}`,
    image: accommodation.images,
    address: {
      '@type': 'PostalAddress',
      streetAddress: accommodation.location.address,
      addressLocality: accommodation.city,
      addressCountry: 'MA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: accommodation.location.lat,
      longitude: accommodation.location.lng,
    },
    priceRange: accommodation.priceRange,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: accommodation.rating,
      reviewCount: accommodation.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    amenityFeature: accommodation.amenities.map((a) => ({
      '@type': 'LocationFeatureSpecification',
      name: a,
      value: true,
    })),
    telephone: accommodation.phone,
    checkinTime: accommodation.checkIn,
    checkoutTime: accommodation.checkOut,
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
        name: 'Accommodations',
        item: 'https://cityguide.ma/accommodations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: accommodation.name,
        item: `https://cityguide.ma/accommodations/${accommodation.slug}`,
      },
    ],
  })

  /* -- Determine related accommodations (same city or tags, different slug) -- */
  const relatedAccommodations = accommodations
    .filter(
      (a) =>
        a.slug !== accommodation.slug &&
        (a.city === accommodation.city || a.tags.some((tag) => accommodation.tags.includes(tag))),
    )
    .slice(0, 3)

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accommodationSchema) }}
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
          backgroundImage: `url(${accommodation.images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

        <div className="relative z-10 w-full container-morocco pb-12 pt-32">
          {/* Type & Price badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-primary)]/90 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Tag className="w-3.5 h-3.5" />
              {accommodation.type}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/90 text-white text-xs font-semibold backdrop-blur-sm">
              <DollarSign className="w-3.5 h-3.5" />
              {accommodation.priceRange}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5" />
              {accommodation.city}, Morocco
            </span>
          </div>

          {/* Name */}
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
            {accommodation.name}
          </h1>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-1.5">
              {renderStars(accommodation.rating)}
              <span className="text-white font-semibold ml-1">{accommodation.rating.toFixed(1)}</span>
            </div>
            <span className="text-white/70 text-sm">
              {accommodation.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          {/* Quick info pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <DoorOpen className="w-3.5 h-3.5" />
              Check-in {accommodation.checkIn}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 text-white text-xs font-medium backdrop-blur-sm">
              <DoorClosed className="w-3.5 h-3.5" />
              Check-out {accommodation.checkOut}
            </span>
            {accommodation.tags.slice(0, 3).map((tag) => (
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
              <Link href="/accommodations" className="hover:text-[var(--color-primary)] transition-colors">
                Accommodations
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">{accommodation.name}</li>
          </ol>
        </div>
      </nav>

      {/* ============================================================
          IMAGE GALLERY
          ============================================================ */}
      <section className="bg-[var(--surface)]">
        <div className="container-morocco py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accommodation.images.map((img, i) => (
              <div key={i} className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={img}
                  alt={`${accommodation.name} - Photo ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {i === 0 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                    <Camera className="w-3.5 h-3.5" />
                    {accommodation.images.length} Photos
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
                    About {accommodation.name}
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
                    {accommodation.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Amenities */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                    <Sparkles className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Amenities
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {accommodation.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="card-moroccan flex flex-col items-center gap-2 p-4 text-center"
                    >
                      <span className="text-[var(--color-primary)]">
                        {amenityIcons[amenity] || <Sparkles className="w-5 h-5" />}
                      </span>
                      <span className="text-sm text-[var(--text-secondary)] font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Room Types */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10">
                    <Bed className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Room Types
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="space-y-4">
                  {accommodation.rooms.map((room) => (
                    <div key={room.name} className="card-moroccan p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Bed className="w-5 h-5 text-[var(--color-primary)]" />
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)]">
                          {room.name}
                        </h3>
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{room.description}</p>
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
                    {accommodation.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Nearby Attractions */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10">
                    <Landmark className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                    Nearby Attractions
                  </h2>
                </div>
                <div className="zellige-border mb-6" />
                <div className="card-moroccan p-6 sm:p-8">
                  <ul className="space-y-3">
                    {accommodation.nearbyAttractions.map((attraction) => (
                      <li key={attraction} className="flex items-center gap-3">
                        <Landmark className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0" />
                        <span className="text-[var(--text-secondary)] text-sm">{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Tags */}
              <section>
                <div className="flex flex-wrap items-center gap-2">
                  {accommodation.tags.map((tag) => (
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

              {/* Related Accommodations */}
              {relatedAccommodations.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10">
                      <Compass className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)]">
                      Similar Accommodations
                    </h2>
                  </div>
                  <div className="zellige-border mb-6" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {relatedAccommodations.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/accommodations/${related.slug}`}
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
                              {related.type}
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
                  {accommodation.name}
                </h3>

                {/* Price highlight */}
                <div className="bg-[var(--color-primary)]/10 rounded-lg p-4 mb-5">
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Price Range</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">{accommodation.priceRange}</p>
                  <p className="text-xs text-[var(--text-muted)]">{accommodation.type} in {accommodation.city}</p>
                </div>

                <div className="zellige-border mb-5" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Rating</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {renderStars(accommodation.rating)}
                        <span className="text-sm font-semibold text-[var(--text-primary)] ml-1">{accommodation.rating.toFixed(1)}</span>
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">{accommodation.reviewCount.toLocaleString()} reviews</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DoorOpen className="w-5 h-5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Check-in</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{accommodation.checkIn}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <DoorClosed className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Check-out</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{accommodation.checkOut}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Location</p>
                      <p className="text-sm text-[var(--text-primary)] font-semibold">{accommodation.location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium">Contact</p>
                      <a href={`tel:${accommodation.phone}`} className="text-sm text-[var(--text-primary)] font-semibold hover:text-[var(--color-primary)] transition-colors">
                        {accommodation.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 pt-6 border-t border-[var(--border-light)] space-y-3">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${accommodation.location.lat},${accommodation.location.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary)]/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Compass className="w-4 h-4" />
                    Get Directions
                  </a>
                  <Link
                    href="/accommodations"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--surface-muted)] text-[var(--text-primary)] font-semibold text-sm hover:bg-[var(--surface-muted)]/80 transition-all border border-[var(--border)]"
                  >
                    <ArrowRight className="w-4 h-4" />
                    View All Accommodations
                  </Link>
                </div>

                <p className="text-xs text-[var(--text-muted)] text-center mt-3">
                  Contact the property directly to check availability and rates.
                </p>
              </div>

              {/* Policies */}
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <ScrollText className="w-5 h-5 text-[var(--color-primary)]" /> Policies
                </h3>
                <div className="zellige-border mb-4" />
                <div className="space-y-3">
                  {accommodation.policies.map((policy) => (
                    <div key={policy} className="flex items-start gap-2 text-sm">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-green)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)]">{policy}</span>
                    </div>
                  ))}
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
            Stay at {accommodation.name}
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Experience the best of {accommodation.city} from this exceptional {accommodation.type.toLowerCase()}. Contact the property directly to check availability and plan your perfect Moroccan getaway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${accommodation.location.lat},${accommodation.location.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[var(--color-primary)] font-semibold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Compass className="w-4 h-4" />
              Get Directions
            </a>
            <Link
              href="/accommodations"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-white/15 text-white font-semibold text-sm hover:bg-white/25 transition-all backdrop-blur-sm border border-white/20"
            >
              <ArrowRight className="w-4 h-4" />
              Browse All Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
