import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  Heart,
  Coffee,
  Sun,
  DollarSign,
  CheckCircle,
  MapPin,
  Calendar,
  Users,
  Wifi,
  UtensilsCrossed,
  Bath,
  Landmark,
  BookOpen,
  AlertTriangle,
  Key,
  Volume2,
  ShieldCheck,
  Clock,
  Globe,
  Phone,
  CreditCard,
  Layers,
  Droplets,
  Wind,
  ArrowRight,
  Info,
  BedDouble,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Guide to Moroccan Riads | Stay in Authentic Riads',
  description:
    'Discover the magic of Moroccan riads. Our comprehensive guide covers the best riads in Marrakech, Fes, Essaouira, and Chefchaouen, with pricing, booking tips, and what to expect from your stay.',
  keywords: [
    'Moroccan riad',
    'riad Marrakech',
    'riad Fes',
    'best riads Morocco',
    'what is a riad',
    'riad vs hotel',
    'riad vs dar',
    'riad booking tips',
    'Riad Yasmine',
    'El Fenn',
    'Riad Fes',
  ],
  openGraph: {
    title: 'Complete Guide to Moroccan Riads',
    description:
      'Everything you need to know about staying in a traditional Moroccan riad. Best riads by city, price guide, and booking tips.',
    url: 'https://cityguide.ma/riads',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Beautiful Moroccan riad courtyard with fountain and zellige tiles',
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   RIAD DATA — TOP 20 REAL RIADS
   ═══════════════════════════════════════════════════════════════ */

const riadsByCity = {
  marrakech: [
    {
      name: 'Riad Yasmine',
      description:
        'Famous for its stunning turquoise plunge pool surrounded by lush greenery and banana palms. The rooftop terrace offers sweeping views of the Atlas Mountains. One of the most photographed riads in Morocco, yet it genuinely delivers on the promise with thoughtful design and warm hospitality.',
      priceRange: '1,200-2,800 MAD',
      priceUSD: '$120-280',
      tier: 'Luxury',
      highlights: ['Iconic turquoise pool', 'Rooftop Atlas views', 'Central medina', 'Moroccan breakfast'],
      image: 'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?q=80&w=800',
      rating: 4.8,
      rooms: 7,
    },
    {
      name: 'El Fenn',
      description:
        'Founded by Vanessa Branson and Howell James, El Fenn is a design-forward riad with a serious contemporary art collection, three pools, and one of Marrakech\'s best rooftop bars. The interiors blend bold color with traditional craftsmanship, creating spaces that feel both artistic and deeply Moroccan.',
      priceRange: '2,500-5,500 MAD',
      priceUSD: '$250-550',
      tier: 'Luxury',
      highlights: ['3 swimming pools', 'Contemporary art gallery', 'Rooftop cocktail bar', 'Library lounge'],
      image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800',
      rating: 4.8,
      rooms: 28,
    },
    {
      name: 'Riad Goloboy',
      description:
        'A hidden gem near the Bahia Palace known for its striking blue-and-white courtyard and exceptionally attentive staff. The riad has just five rooms, each uniquely decorated with vintage Moroccan textiles and handcrafted furniture. The rooftop terrace serves some of the best home-cooked tagines in the medina.',
      priceRange: '800-1,600 MAD',
      priceUSD: '$80-160',
      tier: 'Mid-range',
      highlights: ['Blue courtyard', 'Home-cooked dinners', 'Near Bahia Palace', 'Intimate 5 rooms'],
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800',
      rating: 4.7,
      rooms: 5,
    },
    {
      name: 'Dar Anika',
      description:
        'Exceptional value with spacious rooms, a beautiful courtyard garden, and one of the best breakfasts in the medina. Run by a dedicated Franco-Moroccan couple who go out of their way to make guests feel at home. The rooftop terrace has panoramic views, and the riad organizes cooking classes and medina tours.',
      priceRange: '600-1,200 MAD',
      priceUSD: '$60-120',
      tier: 'Mid-range',
      highlights: ['Outstanding breakfast', 'Cooking classes', 'Spacious rooms', 'Panoramic rooftop'],
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800',
      rating: 4.6,
      rooms: 8,
    },
    {
      name: 'Riad Kniza',
      description:
        'An intimate 11-room riad owned by Mohammed Bouskri, a passionate collector of Moroccan antiques and traditional crafts. Every corner is curated with museum-quality zellige, Berber carpets, and carved cedar. The courtyard pool is heated, and the in-house restaurant serves refined Moroccan cuisine.',
      priceRange: '2,000-4,500 MAD',
      priceUSD: '$200-450',
      tier: 'Luxury',
      highlights: ['Antique collection', 'Heated pool', 'Fine Moroccan dining', 'Hammam & spa'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
      rating: 4.7,
      rooms: 11,
    },
  ],
  fes: [
    {
      name: 'Riad Fes',
      description:
        'One of the most celebrated riads in all of Morocco and a member of Relais & Chateaux. This 17th-century palace features museum-quality zellige tilework, carved stucco ceilings, and a rooftop bar with panoramic views over the Fes medina. The restaurant has won multiple culinary awards for its refined Fassi cuisine.',
      priceRange: '2,500-6,000 MAD',
      priceUSD: '$250-600',
      tier: 'Luxury',
      highlights: ['Relais & Chateaux', 'Award-winning restaurant', 'Rooftop bar', '17th-century palace'],
      image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=800',
      rating: 4.9,
      rooms: 16,
    },
    {
      name: 'Riad Laaroussa',
      description:
        'A magnificent 17th-century riad with one of the largest private courtyards in the Fes medina, complete with a garden, heated pool, and collection of Moroccan art. Each of the eight suites is individually designed with antiques sourced from across the country. The hammam is one of the finest private hammams in Fes.',
      priceRange: '2,000-5,000 MAD',
      priceUSD: '$200-500',
      tier: 'Luxury',
      highlights: ['Largest courtyard in Fes', 'Heated pool', 'Private hammam', 'Art collection'],
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800',
      rating: 4.8,
      rooms: 8,
    },
    {
      name: 'Palais Amani',
      description:
        'A restored palace in the heart of Fes el-Bali with an Andalusian garden featuring over 2,500 plants, a cooking school, and a full spa with traditional treatments. The courtyard fountain is breathtaking, surrounded by orange trees and the scent of jasmine. Named one of the best new hotels in the world by Conde Nast Traveler.',
      priceRange: '1,800-4,000 MAD',
      priceUSD: '$180-400',
      tier: 'Luxury',
      highlights: ['Andalusian garden', 'Cooking school', 'Full spa', '2,500+ plants'],
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800',
      rating: 4.8,
      rooms: 14,
    },
    {
      name: 'Dar Roumana',
      description:
        'Run by a Cordon Bleu-trained chef, this intimate riad is as much a dining destination as it is a place to sleep. The five-course tasting menus change nightly and draw on both Moroccan and French culinary traditions. The rooftop terrace offers one of the best panoramic views of the Fes medina, particularly at sunset.',
      priceRange: '1,200-2,500 MAD',
      priceUSD: '$120-250',
      tier: 'Mid-range',
      highlights: ['Cordon Bleu dining', 'Panoramic medina views', 'Wine cellar', 'Cooking classes'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
      rating: 4.7,
      rooms: 5,
    },
  ],
  essaouira: [
    {
      name: 'Riad Chbanate',
      description:
        'A beautifully designed riad steps from the Essaouira ramparts, blending Moroccan tradition with a coastal aesthetic. The whitewashed walls, blue accents, and ocean-breeze courtyard create a distinctly Souiri atmosphere. The rooftop terrace catches the sea wind and offers views of the medina rooftops and the Atlantic beyond.',
      priceRange: '900-1,800 MAD',
      priceUSD: '$90-180',
      tier: 'Mid-range',
      highlights: ['Near ramparts', 'Ocean breeze courtyard', 'Rooftop sea views', 'Coastal design'],
      image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?q=80&w=800',
      rating: 4.7,
      rooms: 8,
    },
    {
      name: 'Heure Bleue Palais',
      description:
        'The most luxurious stay in Essaouira: a palatial five-star riad with a rooftop swimming pool overlooking the Atlantic, a private cinema, an art gallery, and a full spa with traditional hammam. Named for the magical "blue hour" light that bathes the Essaouira coast at dusk. A member of the prestigious Relais & Chateaux collection.',
      priceRange: '2,200-5,500 MAD',
      priceUSD: '$220-550',
      tier: 'Luxury',
      highlights: ['Rooftop pool', 'Atlantic views', 'Private cinema', 'Relais & Chateaux'],
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800',
      rating: 4.8,
      rooms: 33,
    },
  ],
  chefchaouen: [
    {
      name: 'Casa Hassan',
      description:
        'The original boutique guesthouse of Chefchaouen, operating since 1985. Casa Hassan is an institution in the Blue City, known for its panoramic rooftop restaurant serving traditional Riffian cuisine, its deep knowledge of local trekking routes in the Rif Mountains, and rooms decorated with hand-painted blue tiles and traditional Chaouen textiles.',
      priceRange: '500-1,200 MAD',
      priceUSD: '$50-120',
      tier: 'Mid-range',
      highlights: ['Since 1985', 'Rooftop restaurant', 'Trekking expertise', 'Riffian cuisine'],
      image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
      rating: 4.6,
      rooms: 10,
    },
    {
      name: 'Lina Ryad & Spa',
      description:
        'The finest riad in Chefchaouen, featuring a full spa with hammam, massage treatments, and a jacuzzi. Rooms are decorated in the signature Chaouen blue-and-white palette with hand-carved plaster and local textiles. The terrace restaurant serves both Moroccan and international cuisine with views stretching across the blue medina to the Rif Mountains.',
      priceRange: '1,400-3,000 MAD',
      priceUSD: '$140-300',
      tier: 'Luxury',
      highlights: ['Full spa & hammam', 'Jacuzzi', 'Mountain panorama', 'Terrace restaurant'],
      image: 'https://images.unsplash.com/photo-1539437829697-1b4ed5aebd19?q=80&w=800',
      rating: 4.7,
      rooms: 12,
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   RIAD vs DAR vs HOTEL COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const accommodationComparison = [
  {
    type: 'Riad',
    meaning: 'Arabic for "garden" (ryad)',
    layout: 'Central courtyard with garden, fountain, and often trees or a pool. Rooms on 2-3 levels around the courtyard.',
    size: 'Typically 4-12 rooms',
    vibe: 'Boutique hotel experience with personal hospitality',
    bestFor: 'Couples, honeymooners, and travelers seeking cultural immersion',
    price: '600-6,000+ MAD/night',
  },
  {
    type: 'Dar',
    meaning: 'Arabic for "house" (dar)',
    layout: 'Similar courtyard structure but smaller and simpler. May have a light well instead of a full garden.',
    size: 'Typically 2-6 rooms',
    vibe: 'Staying in someone\'s traditional home, very intimate',
    bestFor: 'Solo travelers, budget-conscious guests, those seeking authenticity',
    price: '300-1,500 MAD/night',
  },
  {
    type: 'Hotel',
    meaning: 'Western-style accommodation',
    layout: 'Outward-facing rooms, corridors, lobby, and often larger facilities (pool, gym, conference rooms).',
    size: '20-300+ rooms',
    vibe: 'Professional and standardized, with more amenities but less character',
    bestFor: 'Families with children, accessibility needs, those wanting anonymity',
    price: '400-15,000+ MAD/night',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HOW TO CHOOSE A RIAD — GUIDE
   ═══════════════════════════════════════════════════════════════ */

const choosingGuide = [
  {
    icon: MapPin,
    title: 'Location Within the Medina',
    description:
      'Riads deep in the medina are more atmospheric but harder to reach with luggage. Those near a main road or gate (bab) offer easier taxi access. In Marrakech, riads near Jemaa el-Fnaa are noisier but more convenient. In Fes, staying near Bab Bou Jeloud gives you a landmark for navigation.',
  },
  {
    icon: Users,
    title: 'Size and Intimacy',
    description:
      'A 4-5 room riad offers an almost private-home experience. A 10-15 room riad functions more like a boutique hotel with professional staff. Consider whether you want to share a rooftop with two other couples or twenty other guests. Smaller riads often deliver more personal service.',
  },
  {
    icon: Sun,
    title: 'Rooftop Terrace Quality',
    description:
      'The rooftop is where you will spend much of your time. Ask for photos of the terrace. Does it have shade for midday sun? Is there seating for meals? Can you see the mountains, minarets, or the sea? A great rooftop terrace can transform a good riad into an unforgettable one.',
  },
  {
    icon: Droplets,
    title: 'Pool or Plunge Pool',
    description:
      'In Marrakech, where summer temperatures exceed 40 degrees Celsius, a plunge pool is a genuine luxury. Most luxury riads have one; mid-range riads may not. Even a small plunge pool in the courtyard makes a huge difference during July and August stays.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Breakfast and Dining',
    description:
      'Riad breakfasts are legendary, but quality varies enormously. The best include fresh orange juice, msemen, beghrir, amlou, local honey, pastries, eggs, and fresh fruit. Ask if dinner is available; riad dinners are often the best meals of your trip and must be requested in advance.',
  },
  {
    icon: Wind,
    title: 'Air Conditioning and Heating',
    description:
      'Essential in Marrakech and Fes where summers are scorching and winters can be cold. Many budget riads rely on natural courtyard cooling, which is beautiful in theory but uncomfortable in a 44-degree August. Always confirm AC is available in your specific room, not just the common areas.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHAT TO EXPECT — DETAILED
   ═══════════════════════════════════════════════════════════════ */

const expectations = [
  {
    icon: Key,
    title: 'Arrival and Check-In',
    description:
      'Most riads are hidden behind unmarked doors in the medina labyrinth. Your riad will typically send someone to meet you at a known landmark or the nearest point accessible by car. The first time navigating the medina with luggage can be overwhelming, so accept the transfer service. At arrival, expect a warm greeting with dates and mint tea while your host explains the riad and the neighborhood.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Legendary Breakfasts',
    description:
      'Moroccan riad breakfasts are an experience unto themselves. Expect fresh-squeezed orange juice, msemen (Moroccan flatbread crepes), beghrir (thousand-hole semolina pancakes), amlou (almond, argan oil, and honey butter), local honey, olives, Laughing Cow cheese, fresh seasonal fruit, eggs to order, Moroccan pastries, and of course, endless mint tea. Many guests say the breakfast alone justifies the room rate.',
  },
  {
    icon: Heart,
    title: 'Personal Hospitality',
    description:
      'Riad owners and staff treat you like family, not like a hotel guest. Your host will likely offer personalized recommendations, help you negotiate the souks, arrange guides and drivers, make restaurant reservations, and remember your preferences. This personal touch is the fundamental difference between a riad and a hotel stay.',
  },
  {
    icon: Sun,
    title: 'Rooftop Life',
    description:
      'Nearly every riad has a rooftop terrace, and you will gravitate there constantly. Mornings for breakfast, afternoons for reading and mint tea, evenings for sunset drinks and sometimes dinner under the stars. In Marrakech, watch the Atlas Mountains turn pink at sunset. In Fes, gaze over a sea of minarets. In Essaouira, listen to the Atlantic.',
  },
  {
    icon: Volume2,
    title: 'Medina Soundscape',
    description:
      'Riads are not silent retreats. The call to prayer echoes five times daily starting before dawn (around 4:30 AM in summer). Donkeys clatter through alleyways, vendors call their wares, and neighbors chat on rooftops. Most travelers grow to love this soundtrack, but light sleepers should bring earplugs, especially for the fajr (dawn) prayer call.',
  },
  {
    icon: Bath,
    title: 'Hammam Experience',
    description:
      'Many mid-range and luxury riads have their own private hammam (traditional steam bath). Even if yours does not, your host will direct you to the best neighborhood hammam. A hammam session with black soap scrub and ghassoul clay mask is an essential Moroccan experience that leaves your skin impossibly soft.',
  },
  {
    icon: Landmark,
    title: 'Architectural Immersion',
    description:
      'Riads are living museums of Moroccan craftsmanship. Hand-carved cedar doors, intricate zellige mosaic tilework in geometric patterns, tadelakt lime plaster walls, moucharabieh lattice screens, and central fountains with the sound of trickling water. Many riads date back centuries and have been painstakingly restored by their owners over years.',
  },
  {
    icon: Coffee,
    title: 'The Mint Tea Ritual',
    description:
      'Tea is served throughout the day, and refusing it is considered impolite. The preparation is a ceremony: green gunpowder tea, fresh spearmint, and sugar are combined in a silver teapot, then poured from a dramatic height to create a frothy top. In winter, riads may add wormwood or orange blossom. Embrace the ritual; it is the rhythm of Moroccan life.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RIAD ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    icon: ShieldCheck,
    title: 'Remove Your Shoes',
    description:
      'Many riads ask you to remove shoes at the entrance or provide babouche (leather slippers). The floors are often handmade zellige tile that can be damaged by hard-soled shoes. If slippers are provided, use them.',
  },
  {
    icon: Volume2,
    title: 'Keep Noise Down After 10 PM',
    description:
      'Riads are intimate spaces with 4-12 rooms. Sound travels easily through courtyards. Be considerate of other guests, especially after 10 PM. Save loud conversations for the rooftop terrace where sound dissipates.',
  },
  {
    icon: Sun,
    title: 'Respect Rooftop Privacy',
    description:
      'Moroccan families live on surrounding rooftops. Avoid pointing cameras into neighboring homes. Dress modestly if visible from the street. Women sunbathing in bikinis on a riad rooftop can cause offense in conservative neighborhoods.',
  },
  {
    icon: Heart,
    title: 'Tipping is Appreciated',
    description:
      'Tip the riad staff at the end of your stay. A general guideline is 50-100 MAD per night of your stay, left for the team. For exceptional personal service from one staff member, 20-50 MAD directly is appropriate.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Request Dinner in Advance',
    description:
      'Riad dinners require advance notice (usually by noon the same day) because the cook shops for fresh ingredients at the market. Do not expect to walk in at 8 PM and request a full Moroccan dinner without prior arrangement.',
  },
  {
    icon: Droplets,
    title: 'Conserve Water',
    description:
      'Morocco faces water scarcity, particularly in Marrakech. Many riads ask guests to limit shower times and reuse towels. The courtyard fountains often recirculate water. Be mindful of this precious resource.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BUDGET vs MID-RANGE vs LUXURY COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const priceTiers = [
  {
    tier: 'Budget',
    range: '300-600 MAD',
    rangeUSD: '$30-60',
    color: 'bg-[var(--color-green)]/10 text-[var(--color-green)]',
    description:
      'Basic but clean rooms in family-run riads. Shared bathrooms are possible, but many budget riads offer private en-suite at the higher end. Simple breakfast of bread, jam, and tea. Authentic atmosphere with friendly hosts who are genuinely happy to share their home.',
    includes: ['Simple breakfast', 'Wi-Fi', 'Shared or private bath', 'Hot water', 'Friendly hosts'],
    missing: ['Pool', 'Air conditioning (fans only)', 'Hammam', 'Dinner service'],
    bestFor: 'Backpackers, solo travelers, extended stays',
    example: 'Small family dars in Fes medina, budget riads in Chefchaouen',
  },
  {
    tier: 'Mid-Range',
    range: '600-1,500 MAD',
    rangeUSD: '$60-150',
    color: 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]',
    description:
      'The sweet spot for most travelers. Private en-suite rooms with quality bedding, generous Moroccan breakfast on the rooftop, traditional decor with zellige and tadelakt. Most have air conditioning and a rooftop terrace. Staff arrange tours, transfers, and restaurant recommendations.',
    includes: ['Full Moroccan breakfast', 'En-suite bathroom', 'Rooftop terrace', 'Air conditioning', 'Traditional decor', 'Dinner on request'],
    missing: ['Pool (sometimes)', 'Full spa', 'Butler service'],
    bestFor: 'Couples, first-time visitors, culture seekers',
    example: 'Dar Anika (Marrakech), Casa Hassan (Chefchaouen), Dar Roumana (Fes)',
  },
  {
    tier: 'Luxury',
    range: '1,500-6,000+ MAD',
    rangeUSD: '$150-600+',
    color: 'bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)]',
    description:
      'Museum-quality design with hand-restored zellige, carved cedar, and tadelakt. Pool or plunge pool in the courtyard, private hammam and spa, gourmet dining with a personal chef, concierge arranging every detail. These are the riads that appear in design magazines and travel awards.',
    includes: ['Gourmet breakfast', 'Pool or plunge pool', 'Hammam & spa', 'Concierge service', 'Fine dining', 'Airport transfer', 'Turndown service'],
    missing: [],
    bestFor: 'Honeymooners, special occasions, luxury travelers',
    example: 'El Fenn (Marrakech), Riad Fes (Fes), Heure Bleue Palais (Essaouira)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BOOKING TIPS — EXPANDED
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Direct for Best Rates',
    description:
      'Contact the riad directly through their website or WhatsApp for the best rates and room selection. Many riads offer 10-20% discounts for direct bookings because they avoid platform commissions. You also get to communicate your preferences before arrival.',
  },
  {
    title: 'Choose Your Room Wisely',
    description:
      'Request a specific room when booking. Upper-floor rooms are quieter and get more natural light. Ground-floor rooms near the courtyard fountain can be noisy from water sounds and early-morning staff activity. Corner rooms often have the most character.',
  },
  {
    title: 'Arrange Your Transfer',
    description:
      'Confirm airport or train station transfer with your riad before arrival. Navigating the medina with luggage for the first time is stressful without a guide. Most riads offer pickup services for 100-200 MAD, and it is money well spent.',
  },
  {
    title: 'Book Early for Peak Season',
    description:
      'Reserve 2-3 months ahead for peak season (March-May and September-November). The best riads in Marrakech and Fes sell out quickly. Christmas, New Year, and Easter are also extremely popular. Low season (June-August) offers discounts of 20-40% but comes with intense heat.',
  },
  {
    title: 'Consider Half-Board',
    description:
      'Ask about half-board (dinner included) options. Riad dinners are often the culinary highlight of your trip and typically cost 200-500 MAD for a multi-course Moroccan feast. In Fes, where medina restaurant options are more limited, half-board is especially recommended.',
  },
  {
    title: 'Verify Air Conditioning',
    description:
      'If visiting between June and September, confirm that your specific room has air conditioning. Marrakech and Fes regularly exceed 40-45 degrees Celsius. Some riads advertise AC but only have it in common areas, or have underpowered units.',
  },
  {
    title: 'Read Recent Reviews',
    description:
      'Riads change ownership and management more frequently than hotels. A stellar riad from two years ago may have different staff today. Focus on reviews from the last 3-6 months and look for consistent themes about hospitality, cleanliness, and breakfast quality.',
  },
  {
    title: 'Direct vs Booking Platforms',
    description:
      'Booking.com and Airbnb offer cancellation flexibility and payment protection. Direct booking offers better rates and a personal relationship. A good strategy: find riads on platforms for reviews and photos, then contact the riad directly to book at a better rate.',
  },
  {
    title: 'Stay in Multiple Cities',
    description:
      'Each city offers a fundamentally different riad experience. Marrakech riads are the most lavish, Fes riads are the most historic, Essaouira riads have coastal charm, and Chefchaouen riads offer mountain serenity. Variety enriches any Morocco trip.',
  },
  {
    title: 'Best Time to Book for Value',
    description:
      'January-February and June-August offer the lowest prices. Many riads run promotions for stays of 3+ nights. Ramadan periods can offer excellent rates, though dining options change. The absolute peak-value sweet spot is late November: good weather, few crowds, lower prices.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Moroccan Riads - Traditional Guesthouses',
  description: 'Complete guide to staying in traditional Moroccan riads across Morocco.',
  url: 'https://cityguide.ma/riads',
  touristType: ['Cultural tourism', 'Accommodation'],
  isAccessibleForFree: true,
  image: 'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?w=1200',
};

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function RiadsPage() {
  const allRiads = Object.values(riadsByCity).flat();
  const totalRiads = allRiads.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1548018560-c7196e5f96c2?q=80&w=2800)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Riads</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            The Complete Guide to Moroccan Riads
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Step through an unassuming door in the medina wall and discover a world of courtyards, fountains, and centuries of Moroccan hospitality.
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">{totalRiads}</p>
              <p className="text-sm text-white/70">Top Riads Reviewed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">4</p>
              <p className="text-sm text-white/70">Cities Covered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">$30+</p>
              <p className="text-sm text-white/70">Starting From</p>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── What is a Riad? — History, Architecture, Courtyard, Fountain ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Riad?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The word &ldquo;riad&rdquo; comes from the Arabic &ldquo;ryad,&rdquo; meaning garden. A riad is a traditional Moroccan house or palace built around an interior courtyard garden. For centuries, these inward-facing homes were the standard residential architecture of Moroccan medinas (old walled cities), where narrow, winding streets offered little space for outward-facing design. The form dates back to the Roman domus and was refined by centuries of Islamic architectural tradition across North Africa and Andalusia.
              </p>
              <p>
                The genius of riad architecture lies in its inversion of Western design principles. From the outside, a riad presents a plain, often crumbling facade &mdash; just another anonymous door in the medina wall, indistinguishable from its neighbors. But step inside, and you enter a world of extraordinary beauty: a central courtyard open to the sky, often with a marble fountain or plunge pool at its center, surrounded by rooms on two or three levels connected by ornate staircases, carved balustrades, and galleried balconies.
              </p>
              <p>
                This design philosophy reflects deep Islamic principles of privacy and humility &mdash; wealth and beauty are directed inward, shared with family and guests rather than displayed to the street. The Quran describes paradise as a garden, and the riad courtyard is conceived as an earthly echo of that vision. The courtyard also creates a natural cooling system: hot air rises through the open roof, while the fountain and garden plants add moisture and coolness, dropping courtyard temperatures several degrees below the street outside.
              </p>

              <div className="card-moroccan p-6 my-8">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[var(--color-primary)]" />
                  The Four Pillars of Riad Craftsmanship
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Zellige</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Hand-cut mosaic tilework in geometric patterns, each piece chipped from glazed ceramic squares by master artisans. A single square meter can contain hundreds of hand-cut pieces arranged without a template. The tradition dates to the 10th century.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Tadelakt</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Polished lime plaster originating from Marrakech, naturally waterproof and used for walls, columns, and bathrooms. Applied in layers and polished with flat stones and olive oil soap, it develops a luminous, sensuous surface unlike any other material.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Gebs (Carved Stucco)</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Intricate plasterwork carved by hand into arabesques, floral motifs, and calligraphy. Found above doorways, around windows, and on upper walls. A skilled gebs artisan can take months to complete a single room of carvings.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">Carved Cedar Wood</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Atlas cedar is used for doors, screens, ceilings, and moucharabieh (lattice screens). The wood is naturally aromatic and insect-resistant. Cedar ceilings in Fes riads can feature thousands of hand-painted geometric elements.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                Master artisans called <em>maallems</em> spend months creating these elements by hand, using techniques unchanged for a thousand years. In the early 2000s, a wave of European and Moroccan investors began purchasing abandoned medina homes and restoring them as boutique guesthouses. Today there are hundreds of riads welcoming guests across Morocco, from simple family-run dars to palatial properties with Relais & Chateaux accreditation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Riad vs Dar vs Hotel ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Riad vs Dar vs Hotel: What Is the Difference?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
            These three terms are often confused by visitors. Understanding the difference helps you choose the right accommodation for your travel style and budget.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {accommodationComparison.map((item) => (
              <div key={item.type} className="card-moroccan p-6">
                <div className="inline-flex px-3 py-1 rounded-full text-sm font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-3">
                  {item.type}
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3 italic">&ldquo;{item.meaning}&rdquo;</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Layout: </span>
                    <span className="text-[var(--text-secondary)]">{item.layout}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Size: </span>
                    <span className="text-[var(--text-secondary)]">{item.size}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Atmosphere: </span>
                    <span className="text-[var(--text-secondary)]">{item.vibe}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Best for: </span>
                    <span className="text-[var(--text-secondary)]">{item.bestFor}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Price: </span>
                    <span className="text-[var(--text-secondary)]">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Riad Advantages vs Hotel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" /> Why Choose a Riad
              </h3>
              <ul className="space-y-3">
                {[
                  'Authentic cultural immersion in a historic Moroccan home',
                  'Personal hospitality from hosts who become friends',
                  'Unique architecture you will not find anywhere else on earth',
                  'Legendary Moroccan breakfasts included in the rate',
                  'Intimate atmosphere with typically 4-12 rooms',
                  'Central medina locations within walking distance of everything',
                  'Rooftop terraces with stunning city and mountain views',
                  'Private hammam and spa experiences',
                  'Home-cooked dinners of traditional Moroccan cuisine',
                  'Each riad is unique, making every stay a new experience',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> When a Hotel Might Be Better
              </h3>
              <ul className="space-y-3">
                {[
                  'You need wheelchair accessibility (medinas have steps and narrow passages)',
                  'You prefer a large swimming pool and full gym facilities',
                  'You are arriving very late at night and need 24-hour reception',
                  'You have very heavy luggage (medina streets are pedestrian-only)',
                  'You prefer complete anonymity over personal interaction',
                  'You need rooms for more than 3 people (riad rooms suit couples)',
                  'You want to park a rental car on-site',
                  'You have young children who need childproofed spaces',
                  'You require elevator access between floors',
                  'You plan to be out all day and do not value the riad social atmosphere',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <ChevronRight className="w-4 h-4 text-[var(--color-secondary)] mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to Choose a Riad ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            How to Choose the Right Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            With hundreds of riads across Morocco, choosing the right one requires attention to a few key factors that can make or break your stay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {choosingGuide.map((item) => (
              <div key={item.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Riads by City — TOP 20 ── */}
      {(Object.entries(riadsByCity) as [string, typeof riadsByCity.marrakech][]).map(([city, riads], cityIndex) => (
        <section
          key={city}
          className={`py-16 md:py-20 ${cityIndex % 2 === 0 ? '' : 'bg-[var(--surface-muted)] moroccan-pattern'}`}
        >
          <div className="container-morocco">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2 capitalize">
              Best Riads in {city === 'fes' ? 'Fes' : city.charAt(0).toUpperCase() + city.slice(1)}
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
              {city === 'marrakech' &&
                'The riad capital of Morocco with the widest range from budget gems to world-class luxury. Marrakech has more restored riads than any other city, concentrated in the medina within walking distance of Jemaa el-Fnaa.'}
              {city === 'fes' &&
                'The spiritual and cultural heart of Morocco. Fes riads tend to be more traditional and historically significant, set within the world\'s largest car-free urban area. The craftsmanship in Fes riads is often considered the finest in the country.'}
              {city === 'essaouira' &&
                'The breezy Atlantic coast town where riads blend Moroccan tradition with a relaxed seaside aesthetic. Essaouira riads are cooled by ocean winds and filled with the sound of seagulls and crashing waves.'}
              {city === 'chefchaouen' &&
                'The Blue City in the Rif Mountains, where riads are painted in every shade of blue and indigo. Chefchaouen riads offer mountain serenity, cooler temperatures, and a distinctly different atmosphere from the imperial cities.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riads.map((riad) => (
                <div key={riad.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={riad.image}
                      alt={`${riad.name} - ${city} riad courtyard`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-[var(--text-primary)]">
                      <Star className="w-3.5 h-3.5 inline text-[var(--color-accent)] mr-1" />
                      {riad.rating}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span
                        className={`tag ${
                          riad.tier === 'Luxury' || riad.tier === 'Ultra-Luxury'
                            ? 'tag-accent'
                            : riad.tier === 'Mid-range'
                              ? 'tag-secondary'
                              : 'tag-primary'
                        }`}
                      >
                        {riad.tier}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-xs text-white">
                      <BedDouble className="w-3 h-3 inline mr-1" />
                      {riad.rooms} rooms
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{riad.name}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{riad.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {riad.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-[var(--border-light)] pt-3">
                      <div>
                        <span className="text-sm font-semibold text-[var(--color-primary)]">
                          <DollarSign className="w-3.5 h-3.5 inline mr-0.5" />
                          {riad.priceRange}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] ml-2">{riad.priceUSD}</span>
                      </div>
                      <span className="text-xs text-[var(--text-muted)]">per night</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── What to Expect ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            What to Expect at a Moroccan Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Staying in a riad is not just accommodation &mdash; it is an immersion into Moroccan culture, hospitality, and craftsmanship that will reshape how you think about travel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expectations.map((item) => (
              <div key={item.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riad Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Riad Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A riad is someone&rsquo;s home turned into a guesthouse. Respecting local customs and house rules ensures a harmonious stay for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {etiquetteRules.map((rule) => (
              <div key={rule.title} className="card-moroccan p-6">
                <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-accent)]/10 mb-3">
                  <rule.icon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">{rule.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget vs Mid-Range vs Luxury ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            Budget vs Mid-Range vs Luxury Riads
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            Prices vary significantly by city, season, and riad quality. Marrakech is the most expensive, followed by Fes. Expect to pay 20-40% less in Essaouira and Chefchaouen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priceTiers.map((tier) => (
              <div key={tier.tier} className="card-moroccan p-8">
                <div className={`inline-flex px-4 py-1.5 rounded-full text-sm font-semibold mb-4 ${tier.color}`}>
                  {tier.tier}
                </div>
                <div className="text-2xl font-bold text-[var(--text-primary)] mb-1">{tier.range}</div>
                <div className="text-sm text-[var(--text-muted)] mb-4">{tier.rangeUSD} USD per night</div>
                <p className="text-[var(--text-secondary)] mb-4 text-sm leading-relaxed">{tier.description}</p>

                <div className="space-y-2 mb-4">
                  <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Typically includes:</p>
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)]" />
                      {item}
                    </div>
                  ))}
                </div>

                {tier.missing.length > 0 && (
                  <div className="space-y-2 mb-4">
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Usually missing:</p>
                    {tier.missing.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold">Best for: </span>{tier.bestFor}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    <span className="font-semibold">Examples: </span>{tier.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Riad Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for finding, booking, and getting the best value from your riad stay across Morocco.
          </p>
          <div className="space-y-4">
            {bookingTips.map((tip, index) => (
              <div key={index} className="card-moroccan p-6 flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-1">{tip.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Platforms Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Book: Platform Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each booking channel has strengths and weaknesses. Here is how they compare for Moroccan riad bookings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                platform: 'Direct Booking (WhatsApp/Email)',
                icon: Phone,
                pros: ['Best prices (10-20% less)', 'Room preference guaranteed', 'Personal relationship with host', 'Flexible on special requests'],
                cons: ['No cancellation protection', 'Payment may require wire transfer', 'Less accountability if issues arise'],
              },
              {
                platform: 'Booking.com',
                icon: Globe,
                pros: ['Free cancellation options', 'Verified reviews', 'Credit card protection', 'Largest selection of riads'],
                cons: ['Prices 10-15% higher', 'Impersonal booking process', 'Riad pays commission (which may affect your service)'],
              },
              {
                platform: 'Airbnb',
                icon: Key,
                pros: ['Whole-riad rentals possible', 'Good for groups', 'Messaging with host before booking', 'Experience add-ons'],
                cons: ['Fewer traditional riads listed', 'Service fees add up', 'Photos may not match reality'],
              },
              {
                platform: 'Specialist Agencies',
                icon: Sparkles,
                pros: ['Curated quality selection', 'Multi-city itinerary planning', 'On-ground support if issues arise', 'Insider access to top riads'],
                cons: ['Higher prices (agency markup)', 'Less flexibility to change', 'Limited to their portfolio'],
              },
            ].map((item) => (
              <div key={item.platform} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {item.platform}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wider mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {item.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {item.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-sm text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3.5 h-3.5 text-[var(--text-muted)] mt-0.5 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Riad Interiors &amp; Architecture
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1548018560-c7196e5f96c2?q=80&w=600', alt: 'Riad courtyard with traditional zellige fountain and green plants' },
              { src: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?q=80&w=600', alt: 'Ornate carved plaster archway in a Moroccan riad' },
              { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=600', alt: 'Luxurious riad bedroom with tadelakt walls and traditional textiles' },
              { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=600', alt: 'Riad plunge pool with intricate mosaic tilework' },
              { src: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?q=80&w=600', alt: 'Traditional Moroccan door with brass knocker in the medina' },
              { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600', alt: 'Rooftop terrace breakfast setting with Atlas Mountain views' },
              { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=600', alt: 'Detailed zellige tilework in blue and white geometric patterns' },
              { src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600', alt: 'Cedar wood carved ceiling in a traditional Fes riad' },
            ].map((photo) => (
              <div key={photo.alt} className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Time to Book a Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Riad prices and availability fluctuate significantly by season. Here is a month-by-month overview to help you plan.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                season: 'Peak Season',
                months: 'Mar-May & Sep-Nov',
                icon: Star,
                price: 'Highest prices',
                note: 'Perfect weather, book 2-3 months ahead. The most popular riads are fully booked weeks in advance.',
              },
              {
                season: 'Hot Season',
                months: 'Jun-Aug',
                icon: Sun,
                price: '20-40% discounts',
                note: 'Intense heat in Marrakech and Fes (40-45C). Essaouira and Chefchaouen remain pleasant. AC is essential.',
              },
              {
                season: 'Cool Season',
                months: 'Dec-Feb',
                icon: Wind,
                price: '15-30% discounts',
                note: 'Cool evenings, some rain. Christmas and New Year are peak prices. January is quiet with good deals.',
              },
              {
                season: 'Sweet Spot',
                months: 'Late Nov & Early Mar',
                icon: Sparkles,
                price: 'Best value',
                note: 'Pleasant weather, fewer crowds, reasonable prices. The ideal time for a riad stay across all cities.',
              },
            ].map((item) => (
              <div key={item.season} className="card-moroccan p-5">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-3">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{item.season}</h3>
                <p className="text-sm text-[var(--color-secondary)] font-semibold mb-1">{item.months}</p>
                <p className="text-xs text-[var(--color-accent-dark)] font-semibold mb-2">{item.price}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Book Your Riad?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore our city guides for detailed riad recommendations, or browse all accommodation types across Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              href="/cities/marrakech"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Marrakech Riads
            </Link>
            <Link
              href="/cities/fes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Fes Riads
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> All Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
