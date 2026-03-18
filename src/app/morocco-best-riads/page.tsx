import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  Sun,
  Snowflake,
  Leaf,
  Flower2,
  Calendar,
  Tag,
  Bed,
  Globe,
  Lightbulb,
  Key,
  Coffee,
  Utensils,
  Phone,
  Camera,
  ThumbsUp,
  AlertTriangle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Riads in Morocco 2026 | Top 20 Traditional Riads by City',
  description:
    'Discover the best riads in Morocco across Marrakech, Fes, Essaouira, and Chefchaouen. Hand-picked traditional guesthouses with courtyard gardens, rooftop terraces, and authentic Moroccan hospitality. Prices from 400 MAD per night with booking tips, what to expect, and insider recommendations.',
  keywords: [
    'best riads Morocco',
    'riads Marrakech',
    'riads Fes',
    'riads Essaouira',
    'riads Chefchaouen',
    'traditional Moroccan riad',
    'boutique riad Morocco',
    'luxury riad Morocco',
    'budget riads Morocco',
    'riad with pool Morocco',
    'riad courtyard Morocco',
    'where to stay Morocco',
    'Morocco accommodation riad',
    'riad vs hotel Morocco',
    'best riad Marrakech medina',
    'riad booking tips',
    'Morocco riad prices 2026',
    'riad experience Morocco',
    'family riads Morocco',
    'romantic riads Morocco',
    'riad rooftop terrace',
  ],
  openGraph: {
    title: 'Best Riads in Morocco 2026 | Top 20 Traditional Riads by City',
    description:
      'Hand-picked guide to Morocco\'s finest riads. From intimate budget guesthouses to palatial luxury riads across Marrakech, Fes, Essaouira, and Chefchaouen. Prices, tips, and what to expect.',
    url: `${BASE_URL}/morocco-best-riads`,
    images: [
      {
        url: `${BASE_URL}/images/art-moroccan-riad-courtyard.webp`,
        width: 1200,
        height: 630,
        alt: 'Beautiful traditional Moroccan riad courtyard with zellige tilework, central fountain, and lush plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Riads in Morocco 2026 | Top 20 Traditional Riads by City',
    description:
      'From budget gems at 400 MAD to palatial luxury riads. The definitive guide to Morocco\'s finest traditional guesthouses across four iconic cities.',
    images: [`${BASE_URL}/images/art-moroccan-riad-courtyard.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-best-riads` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-best-riads`,
  name: 'Best Riads in Morocco 2026 | Top 20 Traditional Riads by City',
  description:
    'Comprehensive guide to the best riads in Morocco across Marrakech, Fes, Essaouira, and Chefchaouen. Traditional guesthouses with courtyard gardens, rooftop terraces, and authentic Moroccan hospitality from 400 MAD per night.',
  url: `${BASE_URL}/morocco-best-riads`,
  image: `${BASE_URL}/images/art-moroccan-riad-courtyard.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-best-riads`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Best Riads in Morocco', item: `${BASE_URL}/morocco-best-riads` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a riad in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A riad is a traditional Moroccan house or palace with an interior garden courtyard. The word "riad" comes from the Arabic "ryad" meaning garden. These historic homes, typically found within medina walls, have been converted into intimate guesthouses. They feature central courtyards with fountains, zellige tilework, carved stucco, and rooftop terraces. Most riads offer 3 to 15 rooms, creating a much more personal experience than conventional hotels.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a riad stay cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riad prices vary widely based on city, luxury level, and season. Budget riads start from 400 MAD per night (approximately 40 EUR) for a clean double room with breakfast. Mid-range riads with pools and refined decor cost 800 to 2,000 MAD per night. Luxury riads with private plunge pools, spa services, and gourmet dining range from 2,000 to 8,000 MAD per night. The best value is typically found in Fes and Essaouira, while Marrakech commands the highest prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which city has the best riads in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech has the largest selection and the most luxurious riads in Morocco, with properties ranging from budget to ultra-luxury. Fes offers the most architecturally significant riads, many housed in centuries-old palaces with extraordinary craftsmanship. Essaouira provides a more relaxed coastal atmosphere with ocean breezes and rooftop sea views. Chefchaouen has the most photogenic riads set amid the famous blue streets. Each city offers a distinct riad experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I stay in a riad or a hotel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riads offer a more authentic and intimate Moroccan experience. They are ideal for travelers seeking cultural immersion, personalized service, and traditional architecture. Hotels are better for those who need standardized amenities like elevators, large pools, fitness centers, and on-site parking. Many experienced travelers recommend staying in a riad for at least part of your Morocco trip, as the courtyard architecture, home-cooked breakfasts, and personal attention from staff create memories that generic hotels cannot match.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do riads in Morocco include breakfast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, almost all riads in Morocco include breakfast in the room rate. A traditional Moroccan riad breakfast is a generous spread that typically includes fresh-baked msemen and baghrir (Moroccan pancakes), khobz (bread), a selection of jams and honey, fresh orange juice, eggs, olive oil, amlou (almond butter), seasonal fruit, and mint tea or coffee. Many luxury riads also offer made-to-order options and can accommodate dietary requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a riad in the medina? Will I get lost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riads are located within the old medina walls, where streets are narrow and winding. Most riads arrange for someone to meet you at a landmark or taxi drop-off point and walk you to the door on your first visit. After that, they provide directions or a map. GPS apps like Google Maps and Maps.me work reasonably well in most medinas. After one or two walks, most guests navigate confidently. This slight adventure of finding your riad is part of the charm of staying in the medina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are riads suitable for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many riads welcome families, though not all are suitable for young children. The open courtyard design with plunge pools, steep staircases, and rooftop terraces can be hazardous for toddlers. Look for riads that specifically advertise as family-friendly, with features like shallow pools, ground-floor rooms, and child-safe areas. Larger riads with 10 or more rooms tend to be better equipped for families. Always communicate the ages of your children when booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to book a riad in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to stay in a riad is during the shoulder seasons: March to May and September to November. The weather is pleasant, prices are moderate, and availability is good. Peak season (Christmas, New Year, Easter) sees the highest prices and requires booking 3 to 6 months in advance. Summer (July and August) offers the lowest prices at inland riads, but temperatures in Marrakech and Fes can exceed 40 degrees Celsius. Coastal riads in Essaouira are ideal in summer.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP RIADS BY CITY — MARRAKECH
   ═══════════════════════════════════════════════════════════════ */

const marrakechRiads = [
  {
    name: 'Riad Kniza',
    neighborhood: 'Derb l\'Hotel, Bab Doukkala',
    priceRange: 'From 2,200 MAD per night',
    tier: 'Luxury',
    description:
      'Owned by Mohammed Bouskri, a passionate collector of Moroccan antiques, Riad Kniza is an 11-room masterpiece where every corner tells a story. The riad houses one of Morocco\'s finest private collections of Berber art, Fes ceramics, and antique textiles. The restaurant serves some of the best Moroccan cuisine in the medina, prepared from family recipes passed down through generations. The rooftop terrace offers sweeping views of the Koutoubia minaret, and the intimate hammam uses argan oil and black soap from local cooperatives.',
    image: '/images/photo-riad-courtyard.webp',
    highlights: ['Exceptional antique collection throughout', 'Award-winning Moroccan cuisine', 'Intimate hammam with traditional treatments', 'Rooftop views of Koutoubia mosque'],
    amenities: ['Courtyard plunge pool', 'Hammam & spa', 'Restaurant', 'Rooftop terrace', 'Library', 'Airport transfers'],
    bestFor: 'Art lovers, foodies, and travelers seeking a culturally rich luxury riad experience',
  },
  {
    name: 'Riad Jardin Secret',
    neighborhood: 'Mouassine Quarter',
    priceRange: 'From 1,800 MAD per night',
    tier: 'Luxury',
    description:
      'Hidden behind an unassuming door in the Mouassine quarter, Riad Jardin Secret reveals a breathtaking courtyard with a 10-meter-long swimming pool flanked by orange and lemon trees. The seven suites are designed with restraint and elegance, blending Moroccan architectural elements with contemporary comfort. The location is unbeatable: steps from the Mouassine fountain, the souks, and the best restaurants in the medina. Evening meals on the rooftop, with the call to prayer echoing across the city, are unforgettable.',
    image: '/images/art-moroccan-riad-courtyard.webp',
    highlights: ['10-meter courtyard swimming pool', 'Prime Mouassine location', 'Contemporary design with traditional elements', 'Rooftop dining with medina views'],
    amenities: ['Swimming pool', 'Rooftop terrace', 'Evening dining', 'Concierge service', 'Air conditioning', 'Wi-Fi'],
    bestFor: 'Couples, design enthusiasts, and those wanting a central medina location with a pool',
  },
  {
    name: 'Riad BE',
    neighborhood: 'Bab Doukkala',
    priceRange: 'From 900 MAD per night',
    tier: 'Mid-range',
    description:
      'Riad BE is a masterclass in contemporary Moroccan design. The minimalist interiors use traditional materials in unexpected ways: tadelakt walls in muted tones, brass fixtures with geometric patterns, and handwoven textiles as accent pieces. The four rooms are spacious and airy, each with its own character. The courtyard features a small but perfectly formed dipping pool surrounded by potted cacti and succulents. Breakfast is a highlight, with fresh pastries baked in-house each morning.',
    image: '/images/hero-riad-interior.webp',
    highlights: ['Contemporary Moroccan design', 'In-house bakery for breakfast', 'Courtyard dipping pool', 'Only four rooms for ultimate intimacy'],
    amenities: ['Dipping pool', 'Rooftop terrace', 'Breakfast included', 'Air conditioning', 'Wi-Fi', 'Cooking classes'],
    bestFor: 'Design-conscious travelers and couples seeking an intimate modern riad',
  },
  {
    name: 'Riad Cinnamon',
    neighborhood: 'Riad Zitoun el Jdid',
    priceRange: 'From 550 MAD per night',
    tier: 'Budget',
    description:
      'Riad Cinnamon proves that an authentic riad experience does not require a luxury budget. This charming six-room guesthouse near the Bahia Palace offers genuine Moroccan hospitality at accessible prices. The rooms are clean and comfortable, with traditional touches like zellige-tiled bathrooms and wrought-iron bed frames. The courtyard is modest but perfectly maintained, with mosaic floors and a central fountain. The owner, Fatima, prepares home-cooked tagines on request that rival many restaurants.',
    image: '/images/card-riad.webp',
    highlights: ['Walking distance to Bahia Palace and Jemaa el-Fnaa', 'Home-cooked dinner on request', 'Traditional zellige bathrooms', 'Warm family-run atmosphere'],
    amenities: ['Courtyard with fountain', 'Rooftop terrace', 'Breakfast included', 'Dinner on request', 'Wi-Fi', 'Luggage storage'],
    bestFor: 'Budget travelers, solo travelers, and those seeking genuine family hospitality',
  },
  {
    name: 'Riad Laaroussa',
    neighborhood: 'Derb Laaroussa, Northern Medina',
    priceRange: 'From 3,500 MAD per night',
    tier: 'Ultra-luxury',
    description:
      'Set within a 17th-century palace, Riad Laaroussa is one of Marrakech\'s most historically significant riads. The eight suites surround a magnificent courtyard with a heated pool, 400-year-old orange trees, and hand-carved stucco of extraordinary intricacy. The restaurant, under the direction of a chef trained at Le Cordon Bleu, serves refined Moroccan-French cuisine. The spa occupies the original hammam chambers, with vaulted ceilings and original zellige that have been in continuous use for four centuries.',
    image: '/images/hero-bahia-palace.webp',
    highlights: ['17th-century palace with 400-year-old orange trees', 'Historic hammam chambers', 'Le Cordon Bleu-trained chef', 'Heated courtyard pool'],
    amenities: ['Heated pool', 'Historic spa & hammam', 'Fine dining', 'Rooftop terrace', 'Library', 'Private transfers'],
    bestFor: 'History lovers, honeymooners, and those seeking the ultimate palatial riad experience',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP RIADS BY CITY — FES
   ═══════════════════════════════════════════════════════════════ */

const fesRiads = [
  {
    name: 'Riad Fes',
    neighborhood: 'Ziat District',
    priceRange: 'From 2,800 MAD per night',
    tier: 'Luxury',
    description:
      'Riad Fes is the benchmark for luxury riad accommodation in the spiritual capital. This 16th-century palatial residence has been restored with meticulous attention to historical accuracy while incorporating every modern comfort. The courtyard is vast by riad standards, featuring a pool surrounded by carved marble and original zellige. The rooftop bar, with panoramic views of the medina\'s mosques and minarets, is one of the most celebrated sunset spots in all of Morocco. The on-site restaurant holds a reputation as one of the finest in Fes.',
    image: '/images/hero-fes.webp',
    highlights: ['16th-century palace with museum-quality restoration', 'Panoramic rooftop bar with medina views', 'Award-winning restaurant', 'Courtyard pool with carved marble'],
    amenities: ['Swimming pool', 'Rooftop bar', 'Restaurant', 'Spa & hammam', 'Library', 'Guided medina tours'],
    bestFor: 'Luxury travelers wanting the definitive Fes riad experience with historic grandeur',
  },
  {
    name: 'Dar Roumana',
    neighborhood: 'Zkak Roumana, Fes el Bali',
    priceRange: 'From 1,600 MAD per night',
    tier: 'Mid-luxury',
    description:
      'Dar Roumana is the passion project of a couple who left careers in fine dining to create what many food critics consider the best restaurant in Fes, attached to a five-room riad. The cooking here is extraordinary: Moroccan ingredients prepared with French technique, served on the candlelit rooftop terrace. The rooms are spacious and elegant, with hand-painted ceilings and deep copper bathtubs. The riad runs cooking classes that are considered among the best in the country, teaching guests the secrets of refined Moroccan cuisine.',
    image: '/images/hero-fes-medina.webp',
    highlights: ['Considered the best food in Fes', 'Renowned cooking classes', 'Hand-painted ceilings in every room', 'Intimate five-room setting'],
    amenities: ['Rooftop dining terrace', 'Cooking classes', 'Breakfast included', 'Air conditioning', 'Wi-Fi', 'Tour arrangements'],
    bestFor: 'Food lovers, couples, and anyone who considers dining a central part of travel',
  },
  {
    name: 'Riad Lune et Soleil',
    neighborhood: 'Talaa Kebira',
    priceRange: 'From 500 MAD per night',
    tier: 'Budget',
    description:
      'Perched on the main artery of Fes el Bali, Riad Lune et Soleil offers remarkable value in a city where prices are generally lower than Marrakech. The riad has been lovingly restored by its French-Moroccan owners, with four rooms around a traditional courtyard. The terrace commands views over the tangled rooftops of the medina toward the green hills beyond. Breakfast is a generous affair with fresh-squeezed orange juice, msemen, and an array of Moroccan jams. The location, steps from the Bou Inania medersa, is excellent for exploring the medina on foot.',
    image: '/images/hero-fes-tanneries.webp',
    highlights: ['Excellent location on Talaa Kebira', 'Generous traditional breakfast', 'Medina rooftop views', 'Exceptional value for money'],
    amenities: ['Rooftop terrace', 'Breakfast included', 'Wi-Fi', 'Air conditioning', 'Luggage storage', 'Tour advice'],
    bestFor: 'Budget travelers, backpackers, and first-time visitors to Fes',
  },
  {
    name: 'Palais Amani',
    neighborhood: 'Oued Zhoune, near Bab Guissa',
    priceRange: 'From 2,200 MAD per night',
    tier: 'Luxury',
    description:
      'Palais Amani is a restored early-20th-century Andalusian palace with an emphasis on gardens and gastronomy. The central courtyard garden is one of the largest in any Fes riad, with a pool surrounded by orange trees, jasmine, and roses. The 15 rooms are individually decorated with a refined aesthetic that avoids the ornamental excess that can overwhelm in some traditional riads. The restaurant focuses on organic, locally sourced ingredients, and the riad grows its own herbs. The Fes Cooking School, located on-site, is a major draw for culinary travelers.',
    image: '/images/art-moroccan-garden.webp',
    highlights: ['Andalusian palace with extensive gardens', 'On-site Fes Cooking School', 'Organic restaurant with garden herbs', 'Large courtyard pool'],
    amenities: ['Garden pool', 'Cooking school', 'Restaurant & bar', 'Spa', 'Rooftop terrace', 'Airport transfers'],
    bestFor: 'Garden lovers, culinary enthusiasts, and those wanting a peaceful retreat within the medina',
  },
  {
    name: 'Riad Maison Bleue',
    neighborhood: 'Place de l\'Istiqlal, Bab Bou Jeloud',
    priceRange: 'From 1,400 MAD per night',
    tier: 'Mid-range',
    description:
      'The historic former home of Sidi Ahmed el Alami, a renowned judge and astrologer, Riad Maison Bleue occupies one of the most storied buildings in the Fes medina. The original structure dates to the late 19th century, with exquisitely preserved zellige, carved cedar doors, and stained-glass windows. The riad now comprises two adjoining houses with a total of 19 rooms. Its location, overlooking the iconic Bab Bou Jeloud gate, provides a front-row seat to the daily theater of medina life. The restaurant serves classic Fassi cuisine in a refined setting.',
    image: '/images/photo-bab-boujloud.webp',
    highlights: ['Historic home of a celebrated judge and astrologer', 'Overlooks Bab Bou Jeloud gate', 'Exquisite original zellige and carved cedar', 'Traditional Fassi cuisine restaurant'],
    amenities: ['Courtyard with fountain', 'Restaurant', 'Rooftop terrace', 'Hammam', 'Wi-Fi', 'Tour desk'],
    bestFor: 'History enthusiasts, first-time Fes visitors, and those who love atmospheric settings',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP RIADS BY CITY — ESSAOUIRA
   ═══════════════════════════════════════════════════════════════ */

const essaouiraRiads = [
  {
    name: 'Riad Baoussala',
    neighborhood: 'Rue Ibn Rochd, Medina',
    priceRange: 'From 1,200 MAD per night',
    tier: 'Mid-luxury',
    description:
      'Riad Baoussala captures the relaxed, bohemian spirit of Essaouira in a beautifully restored 19th-century merchant\'s house. The seven rooms blend whitewashed walls with indigo-blue accents, driftwood furniture, and local art. The rooftop terrace is the star feature: a double-height space with ocean views, Mogador island in the distance, and the sound of seagulls and crashing waves. The communal atmosphere encourages guests to linger over breakfast, share travel stories, and plan adventures together. Surf lessons, fishing trips, and argan oil cooperative visits are arranged on request.',
    image: '/images/hero-essaouira.webp',
    highlights: ['Ocean-view rooftop terrace', 'Bohemian-chic design', 'Surf and activity arrangements', 'Communal traveler atmosphere'],
    amenities: ['Rooftop terrace', 'Breakfast included', 'Surf board rental', 'Wi-Fi', 'Concierge', 'Book exchange'],
    bestFor: 'Beach lovers, surfers, and travelers who enjoy a relaxed social atmosphere',
  },
  {
    name: 'Riad Chbanate',
    neighborhood: 'Rue Chbanate, near Place Moulay Hassan',
    priceRange: 'From 1,800 MAD per night',
    tier: 'Luxury',
    description:
      'Riad Chbanate combines the intimacy of a riad with the polish of a boutique hotel. The 11 rooms are decorated in a sophisticated palette of white, cream, and natural stone, with carefully curated Moroccan and European antiques. The riad is located just 50 meters from Place Moulay Hassan, the main square, yet feels completely secluded behind its carved wooden door. The heated indoor pool, unusual in Essaouira\'s wind-cooled climate, and the hammam with professional treatments make this a year-round destination.',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['Heated indoor pool', 'Steps from Place Moulay Hassan', 'Sophisticated contemporary design', 'Professional hammam treatments'],
    amenities: ['Heated pool', 'Hammam & spa', 'Rooftop terrace', 'Breakfast included', 'Concierge', 'Airport transfers'],
    bestFor: 'Couples seeking luxury in Essaouira, and travelers visiting in the windier winter months',
  },
  {
    name: 'Dar Ness',
    neighborhood: 'Rue d\'Agadir, Medina',
    priceRange: 'From 450 MAD per night',
    tier: 'Budget',
    description:
      'Dar Ness is proof that Essaouira offers exceptional riad value. This five-room guesthouse is run by a warm Franco-Moroccan couple who treat guests like family. The rooms are simple but charming, with whitewashed walls, blue shutters, and colorful Moroccan textiles. Breakfast on the small rooftop terrace, with views over the medina rooftops to the sea, is a daily pleasure. The location, within the medina walls but close to the beach gate, makes it easy to explore both the old town and the Atlantic shore.',
    image: '/images/hero-essaouira-port.webp',
    highlights: ['Warm family-run hospitality', 'Rooftop sea views', 'Steps from the beach', 'Outstanding value for Essaouira'],
    amenities: ['Rooftop terrace', 'Breakfast included', 'Wi-Fi', 'Luggage storage', 'Beach towels', 'Local tips'],
    bestFor: 'Budget travelers, solo travelers, and those who prioritize human connection over luxury',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP RIADS BY CITY — CHEFCHAOUEN
   ═══════════════════════════════════════════════════════════════ */

const chefchaouenRiads = [
  {
    name: 'Lina Ryad & Spa',
    neighborhood: 'Avenue Hassan II',
    priceRange: 'From 1,400 MAD per night',
    tier: 'Luxury',
    description:
      'Lina Ryad is the most polished accommodation in Chefchaouen, set within a sprawling property that feels more like a boutique hotel than a traditional riad. The 12 rooms are decorated with hand-painted blue and white ceramics, carved plaster, and local textiles. The courtyard garden, with a mosaic-tiled pool and mature fruit trees, provides a cool retreat from the bustling blue streets outside. The on-site spa offers traditional hammam treatments using locally produced soaps and oils. The restaurant serves refined Riffian and Andalusian cuisine, drawing on the culinary heritage of this culturally distinct region.',
    image: '/images/hero-chefchaouen-blue.webp',
    highlights: ['Most refined property in Chefchaouen', 'Courtyard pool with mosaic tiles', 'Spa with traditional hammam', 'Riffian and Andalusian cuisine'],
    amenities: ['Swimming pool', 'Spa & hammam', 'Restaurant', 'Rooftop terrace', 'Garden', 'Parking available'],
    bestFor: 'Luxury travelers in Chefchaouen, couples, and those wanting full-service amenities',
  },
  {
    name: 'Casa Hassan',
    neighborhood: 'Rue Targhi, Old Medina',
    priceRange: 'From 700 MAD per night',
    tier: 'Mid-range',
    description:
      'Casa Hassan is a Chefchaouen institution, one of the first riads to open to guests in the blue city over 30 years ago. The property sprawls across several floors of a traditional house in the heart of the medina, with rooms ranging from cozy singles to spacious suites with mountain views. The restaurant on the top floor is one of the best in town, known for its kefta tagine and fresh goat cheese salads. The staff have decades of experience helping guests discover Chefchaouen\'s hidden corners, from secluded waterfalls to hilltop viewpoints.',
    image: '/images/hero-chefchaouen-stairs.webp',
    highlights: ['30-year Chefchaouen institution', 'Rooftop restaurant with mountain views', 'Unmatched local knowledge', 'Famous kefta tagine'],
    amenities: ['Restaurant', 'Rooftop terrace', 'Breakfast included', 'Wi-Fi', 'Guided hikes', 'Tour desk'],
    bestFor: 'First-time Chefchaouen visitors, hikers, and those valuing local expertise',
  },
  {
    name: 'Dar Echchaouen',
    neighborhood: 'Ras el-Maa, near the waterfall',
    priceRange: 'From 1,800 MAD per night',
    tier: 'Luxury',
    description:
      'Located at the edge of the medina near the Ras el-Maa waterfall, Dar Echchaouen occupies a privileged position where the blue city meets the green Rif Mountains. The riad is built into the hillside, giving many rooms dramatic valley views. The heated infinity pool, perched on a terrace above the valley, is one of the most photographed pools in Morocco. The nine rooms combine Chefchaouen\'s signature blue palette with contemporary comforts, and the spa specializes in treatments using mountain herbs and natural spring water.',
    image: '/images/hero-chefchaouen-aerial.webp',
    highlights: ['Infinity pool with Rif Mountain views', 'Location at Ras el-Maa waterfall', 'Spa with mountain herb treatments', 'Valley views from hillside rooms'],
    amenities: ['Heated infinity pool', 'Spa', 'Restaurant', 'Rooftop terrace', 'Mountain views', 'Hiking guides'],
    bestFor: 'Photography enthusiasts, nature lovers, and those seeking luxury with mountain scenery',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET VS LUXURY COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const budgetVsLuxury = [
  { feature: 'Price per night', budget: 'From 400 MAD', luxury: 'From 2,000 MAD' },
  { feature: 'Room size', budget: '12-18 sqm', luxury: '25-60 sqm suite' },
  { feature: 'Breakfast', budget: 'Simple traditional spread', luxury: 'Gourmet with made-to-order options' },
  { feature: 'Courtyard', budget: 'Shared, modest fountain', luxury: 'Pool, gardens, lounge areas' },
  { feature: 'Bathroom', budget: 'Private, basic fixtures', luxury: 'Tadelakt, rain shower, luxury products' },
  { feature: 'Rooftop', budget: 'Shared terrace, basic furnishing', luxury: 'Furnished lounge, dining area, views' },
  { feature: 'Staff', budget: 'Owner/family, warm but limited', luxury: 'Professional team, concierge, butler' },
  { feature: 'Hammam/Spa', budget: 'Recommend nearby public hammam', luxury: 'Private on-site hammam with therapist' },
  { feature: 'Dinner', budget: 'On request, home-style', luxury: 'Restaurant-quality, reservations' },
  { feature: 'Transfers', budget: 'Taxi advice provided', luxury: 'Private car arranged' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Directly for the Best Deal',
    icon: Globe,
    description:
      'Most riads offer lower prices when you book through their own website or by email, saving the 15-20% commission charged by booking platforms. Direct bookings also often include perks like room upgrades, airport transfers, or a complimentary hammam session that are not available through third-party sites.',
  },
  {
    title: 'Read Reviews About Noise Levels',
    icon: ShieldCheck,
    description:
      'Riads in the medina can be noisy. Check reviews for mentions of the call to prayer (which can be very close), rooftop construction, early-morning deliveries, and neighborhood sounds. Ask for rooms away from the street door. Some travelers find the medina ambiance charming; others find it disruptive. Knowing your preference helps you choose the right riad.',
  },
  {
    title: 'Ask About the Walk from the Car Drop-Off',
    icon: Key,
    description:
      'Cars cannot enter most medinas, so you will need to walk the final stretch to your riad. Some riads are a two-minute walk from the taxi point; others require 15 minutes through narrow alleys. If you have heavy luggage or mobility concerns, ask the riad how far the walk is and whether they provide a porter or luggage transfer service.',
  },
  {
    title: 'Confirm Dinner Availability in Advance',
    icon: Utensils,
    description:
      'Many riads serve dinner only with advance notice, as they shop for fresh ingredients at the market each morning based on reservations. If you want to dine at your riad, confirm your dinner plans at least a day ahead. Riad dinners are often among the best meals you will eat in Morocco and are typically excellent value.',
  },
  {
    title: 'Travel in Shoulder Season for Value',
    icon: Calendar,
    description:
      'March to May and September to November offer the best combination of good weather, lower prices, and availability at popular riads. During peak periods like Christmas, New Year, and Easter, the most popular riads sell out months in advance and prices can double.',
  },
  {
    title: 'Consider Staying in Multiple Cities',
    icon: MapPin,
    description:
      'Each Moroccan city offers a distinct riad experience. A Marrakech riad is vibrant and cosmopolitan; a Fes riad is historic and scholarly; an Essaouira riad is breezy and bohemian; a Chefchaouen riad is blue and mountainous. The best Morocco trips combine riads in two or three cities to experience this wonderful variety.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO EXPECT
   ═══════════════════════════════════════════════════════════════ */

const whatToExpect = [
  {
    title: 'The Arrival',
    icon: Key,
    description:
      'Your riad will typically arrange for someone to meet you at the nearest vehicle access point and guide you through the medina lanes to the front door. Behind the modest wooden door, you will step into a world of tranquility: a central courtyard with a fountain, zellige tilework, and often the scent of orange blossom or jasmine. The contrast between the bustling medina and the serene interior is one of the great pleasures of riad stays.',
  },
  {
    title: 'Welcome Mint Tea',
    icon: Coffee,
    description:
      'On arrival, you will be greeted with a glass of freshly brewed Moroccan mint tea, poured from a height in the traditional style. This welcoming ritual is a fundamental part of Moroccan hospitality and sets the tone for your stay. Some riads serve the tea with Moroccan pastries like kaab el ghazal (gazelle horns) or ghriba cookies.',
  },
  {
    title: 'Your Room',
    icon: Bed,
    description:
      'Riad rooms are typically arranged around the central courtyard, with windows and balconies facing inward rather than outward. This traditional design provides privacy and quiet. Expect tadelakt (polished plaster) walls, zellige-tiled bathrooms, handwoven Berber carpets, and often a mashrabiya (carved wooden screen) window. Rooms on upper floors tend to be brighter and have better views.',
  },
  {
    title: 'Breakfast',
    icon: Sun,
    description:
      'Riad breakfasts are legendary. Expect a spread of fresh msemen and baghrir (Moroccan crepes and pancakes), crusty khobz bread, local honey, homemade jams (fig, orange, apricot), amlou (argan and almond butter), olives, olive oil, fresh orange juice, eggs, seasonal fruit, and bottomless mint tea or coffee. Many riads serve breakfast on the rooftop terrace, which is a magnificent way to start the day.',
  },
  {
    title: 'The Rooftop Terrace',
    icon: Camera,
    description:
      'Almost every riad has a rooftop terrace with views over the medina. These spaces range from simple tiled platforms with a few chairs to fully furnished lounges with daybeds, shade canopies, and bar service. The rooftop is where you will watch the sunset, hear the call to prayer echo across the city, and gaze at the stars. Many riads also serve meals on the terrace.',
  },
  {
    title: 'Checking Out',
    icon: Heart,
    description:
      'Leaving a riad is harder than leaving a hotel. The personal connections formed with staff, the rhythm of courtyard life, and the sensory richness of the experience create a powerful attachment. Your hosts will often walk you to the taxi point with your luggage, and the farewell can feel like leaving a friend\'s home rather than a commercial establishment.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is a riad in Morocco?',
    answer:
      'A riad is a traditional Moroccan house or palace with an interior garden courtyard. The word "riad" comes from the Arabic "ryad" meaning garden. These historic homes, typically found within medina walls, have been converted into intimate guesthouses. They feature central courtyards with fountains, zellige tilework, carved stucco, and rooftop terraces. Most riads offer 3 to 15 rooms, creating a much more personal experience than conventional hotels.',
  },
  {
    question: 'How much does a riad stay cost in Morocco?',
    answer:
      'Riad prices vary widely based on city, luxury level, and season. Budget riads start from 400 MAD per night (approximately 40 EUR) for a clean double room with breakfast. Mid-range riads with pools and refined decor cost 800 to 2,000 MAD per night. Luxury riads with private plunge pools, spa services, and gourmet dining range from 2,000 to 8,000 MAD per night. The best value is typically found in Fes and Essaouira, while Marrakech commands the highest prices.',
  },
  {
    question: 'Which city has the best riads in Morocco?',
    answer:
      'Marrakech has the largest selection and the most luxurious riads in Morocco, with properties ranging from budget to ultra-luxury. Fes offers the most architecturally significant riads, many housed in centuries-old palaces with extraordinary craftsmanship. Essaouira provides a more relaxed coastal atmosphere with ocean breezes and rooftop sea views. Chefchaouen has the most photogenic riads set amid the famous blue streets. Each city offers a distinct riad experience.',
  },
  {
    question: 'Should I stay in a riad or a hotel in Morocco?',
    answer:
      'Riads offer a more authentic and intimate Moroccan experience. They are ideal for travelers seeking cultural immersion, personalized service, and traditional architecture. Hotels are better for those who need standardized amenities like elevators, large pools, fitness centers, and on-site parking. Many experienced travelers recommend staying in a riad for at least part of your Morocco trip, as the courtyard architecture, home-cooked breakfasts, and personal attention from staff create memories that generic hotels cannot match.',
  },
  {
    question: 'Do riads in Morocco include breakfast?',
    answer:
      'Yes, almost all riads in Morocco include breakfast in the room rate. A traditional Moroccan riad breakfast is a generous spread that typically includes fresh-baked msemen and baghrir (Moroccan pancakes), khobz (bread), a selection of jams and honey, fresh orange juice, eggs, olive oil, amlou (almond butter), seasonal fruit, and mint tea or coffee. Many luxury riads also offer made-to-order options and can accommodate dietary requirements.',
  },
  {
    question: 'How do I find a riad in the medina? Will I get lost?',
    answer:
      'Riads are located within the old medina walls, where streets are narrow and winding. Most riads arrange for someone to meet you at a landmark or taxi drop-off point and walk you to the door on your first visit. After that, they provide directions or a map. GPS apps like Google Maps and Maps.me work reasonably well in most medinas. After one or two walks, most guests navigate confidently. This slight adventure of finding your riad is part of the charm of staying in the medina.',
  },
  {
    question: 'Are riads suitable for families with children?',
    answer:
      'Many riads welcome families, though not all are suitable for young children. The open courtyard design with plunge pools, steep staircases, and rooftop terraces can be hazardous for toddlers. Look for riads that specifically advertise as family-friendly, with features like shallow pools, ground-floor rooms, and child-safe areas. Larger riads with 10 or more rooms tend to be better equipped for families. Always communicate the ages of your children when booking.',
  },
  {
    question: 'What is the best time of year to book a riad in Morocco?',
    answer:
      'The best time to stay in a riad is during the shoulder seasons: March to May and September to November. The weather is pleasant, prices are moderate, and availability is good. Peak season (Christmas, New Year, Easter) sees the highest prices and requires booking 3 to 6 months in advance. Summer (July and August) offers the lowest prices at inland riads, but temperatures in Marrakech and Fes can exceed 40 degrees Celsius. Coastal riads in Essaouira are ideal in summer.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE OVERVIEW
   ═══════════════════════════════════════════════════════════════ */

const priceOverview = [
  { category: 'Budget Riad (Basic)', price: 'From 400 MAD per night', note: 'Clean rooms, shared spaces, breakfast included' },
  { category: 'Mid-Range Riad', price: 'From 800 MAD per night', note: 'Better decor, dipping pool, good breakfast' },
  { category: 'Boutique Riad', price: 'From 1,200 MAD per night', note: 'Refined design, pool, rooftop dining' },
  { category: 'Luxury Riad', price: 'From 2,000 MAD per night', note: 'Full spa, gourmet dining, concierge' },
  { category: 'Ultra-Luxury Riad', price: 'From 3,500 MAD per night', note: 'Historic palace, butler, private hammam' },
  { category: 'Exclusive Riad (Full Rental)', price: 'From 5,000 MAD per night', note: 'Entire riad for your group, private staff' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBestRiadsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/art-moroccan-riad-courtyard.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Riads in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Gem className="w-4 h-4" />
            Traditional Accommodation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Riads in Morocco:
            <br className="hidden md:block" /> Top 20 Riads by City for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Hand-picked traditional guesthouses across Marrakech, Fes, Essaouira, and
            Chefchaouen. From intimate budget gems at 400 MAD to palatial luxury stays.
            Your definitive guide to the riad experience.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Staying in a Riad Is the Quintessential Moroccan Experience
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A riad is not merely a place to sleep. It is a centuries-old architectural
                tradition, a philosophy of living, and the single most authentic way to
                experience Morocco. The word comes from the Arabic &quot;ryad,&quot; meaning
                garden, and at its heart every riad revolves around a central courtyard
                where light, water, and greenery create an oasis of calm within the labyrinthine
                medina.
              </p>
              <p>
                The genius of riad design is its inward focus. From the outside, you see
                nothing but a modest wooden door set in a plain wall. Step through that door,
                and you enter a world of zellige tilework glittering in the sunlight, carved
                stucco arches framing a turquoise plunge pool, the sound of water trickling
                from a marble fountain, and the scent of jasmine drifting down from the
                rooftop garden. This contrast between the public and private, the hidden and
                the revealed, is fundamental to Moroccan culture.
              </p>
              <p>
                Today, hundreds of riads across Morocco have been lovingly restored and opened
                as guesthouses, ranging from simple family-run homes with three rooms to
                palatial residences with pools, spas, and gourmet restaurants. What unites
                them all is a sense of intimacy and personal hospitality that no conventional
                hotel can replicate. In a riad, you are not a guest number. You are a guest
                in someone&apos;s home.
              </p>
              <p>
                This guide covers the best riads in four of Morocco&apos;s most beloved cities,
                across every budget level. Whether you are a backpacker seeking a 400 MAD
                gem or a honeymooner looking for a 3,500 MAD palatial suite, there is a
                riad waiting to transform your understanding of what accommodation can be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Price Overview
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay across different tiers of riad accommodation in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices include breakfast. Seasonal pricing applies during peak periods (Christmas, New Year, Easter), when rates may increase by 30-100%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">What You Get</div>
              </div>
              {priceOverview.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Riads: Marrakech ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Red City has the largest and most diverse selection of riads in Morocco, from budget hideaways to restored 17th-century palaces.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Marrakech has over 1,000 riads. We have selected five that represent the best at each price point.
          </p>

          <div className="space-y-12">
            {marrakechRiads.map((riad, index) => (
              <div key={riad.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={riad.image}
                      alt={`${riad.name} riad courtyard in ${riad.neighborhood}, Marrakech, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Gem className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[var(--color-gold)]">
                      {riad.tier}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {riad.neighborhood}, Marrakech
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                      {riad.priceRange}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {riad.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {riad.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Key Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {riad.amenities.map((amenity, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {riad.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Riads: Fes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The spiritual capital of Morocco, Fes el Bali is home to riads of extraordinary architectural heritage, many housed in centuries-old palaces.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Fes riads offer exceptional value compared to Marrakech, with comparable architecture at lower prices.
          </p>

          <div className="space-y-12">
            {fesRiads.map((riad, index) => (
              <div key={riad.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={riad.image}
                      alt={`${riad.name} riad in ${riad.neighborhood}, Fes, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Gem className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[var(--color-gold)]">
                      {riad.tier}
                    </div>
                  </div>

                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {riad.neighborhood}, Fes
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                      {riad.priceRange}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {riad.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {riad.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Key Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {riad.amenities.map((amenity, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {riad.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Riads: Essaouira ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Essaouira
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The windy coastal city of Essaouira offers riads with a bohemian, artistic character and Atlantic Ocean breezes on rooftop terraces.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Essaouira is cooler and breezier than Marrakech, making it an ideal summer riad destination.
          </p>

          <div className="space-y-12">
            {essaouiraRiads.map((riad, index) => (
              <div key={riad.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={riad.image}
                      alt={`${riad.name} riad in ${riad.neighborhood}, Essaouira, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Gem className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[var(--color-gold)]">
                      {riad.tier}
                    </div>
                  </div>

                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {riad.neighborhood}, Essaouira
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                      {riad.priceRange}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {riad.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {riad.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Key Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {riad.amenities.map((amenity, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {riad.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Riads: Chefchaouen ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flower2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Chefchaouen
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The famous Blue City of the Rif Mountains offers a small but exceptional selection of riads, with mountain views and a photogenic blue palette.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Chefchaouen has fewer riads than Marrakech or Fes. Book well in advance during peak season.
          </p>

          <div className="space-y-12">
            {chefchaouenRiads.map((riad, index) => (
              <div key={riad.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={riad.image}
                      alt={`${riad.name} riad in ${riad.neighborhood}, Chefchaouen, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Gem className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[var(--color-gold)]">
                      {riad.tier}
                    </div>
                  </div>

                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {riad.neighborhood}, Chefchaouen
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                      {riad.priceRange}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {riad.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {riad.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Key Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {riad.amenities.map((amenity, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {riad.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget vs Luxury Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget vs Luxury Riads: What&apos;s the Difference?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both budget and luxury riads offer authentic Moroccan experiences. Here is what changes as you move up in price.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Feature</div>
                <div className="p-3 px-4">Budget (From 400 MAD)</div>
                <div className="p-3 px-4">Luxury (From 2,000 MAD)</div>
              </div>
              {budgetVsLuxury.map((item, i) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.feature}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.budget}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.luxury}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Our Recommendation
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    The most important factors in a riad are the warmth of the welcome, the quality
                    of the breakfast, the beauty of the courtyard, and the helpfulness of the staff.
                    These qualities exist across all price ranges. A well-chosen budget riad at 500 MAD
                    can deliver a more memorable stay than a poorly managed luxury riad at 3,000 MAD.
                    Read reviews carefully, paying attention to comments about hospitality rather than
                    amenities, and you will find exceptional value at every budget level.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect at a Moroccan Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From your arrival to your reluctant departure, here is what the riad experience looks like from start to finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whatToExpect.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-gold)]/10 text-xs font-bold text-[var(--color-gold)]">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Expert Riad Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for finding, booking, and getting the most from your riad stay in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Riad Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-riad-courtyard.webp"
                alt="Traditional Moroccan riad courtyard with zellige tilework, central fountain, and orange trees"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Classic Riad Courtyards</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="Sunset view from a riad rooftop terrace overlooking the Marrakech medina and Atlas Mountains"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rooftop Terrace Sunsets</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-riad-interior.webp"
                alt="Interior of a luxury riad room with tadelakt walls, Berber carpets, and brass lantern lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Riad Interiors</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/images/hero-chefchaouen-streets.webp"
                alt="Blue-washed riad entrance on a narrow street in Chefchaouen medina"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Chefchaouen Blue Riads</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-courtyard.webp"
                alt="Riad plunge pool surrounded by potted plants and traditional arched doorways"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Riad Plunge Pools</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/riad-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Complete Riad Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about riads: architecture, etiquette, what to pack, and how to choose the right one for your trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-hotels" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Hotels Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top 8 five-star hotels and resorts in Morocco. Palace hotels, desert camps, and beach resorts from 3,500 MAD.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/honeymoon" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Honeymoon in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Romantic riads, desert experiences, and coastal retreats for couples and honeymooners.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-for-couples" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco for Couples
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most romantic destinations, dining experiences, and stays for couples visiting Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                All Accommodations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to every type of accommodation in Morocco: riads, hotels, hostels, and camping.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/photo-riad-rooftop-sunset.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience a Moroccan Riad?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the moment you step through the modest wooden door into a world of
            zellige, fountain songs, and mint tea, you will understand why millions of
            travelers call the riad experience the highlight of their Morocco journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/riad-guide"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Read the Complete Riad Guide
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-5 h-5" />
              Explore All Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
