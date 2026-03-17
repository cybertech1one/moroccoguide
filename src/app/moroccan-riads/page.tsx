import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Building,
  MapPin,
  Star,
  Coins,
  Heart,
  CheckCircle,
  ArrowRight,
  Crown,
  Bed,
  Coffee,
  Sun,
  Key,
  Users,
  Wifi,
  Thermometer,
  Globe,
  Bookmark,
  Shield,
  Calendar,
  Phone,
  Info,
  Sparkles,
  Baby,
  Waves,
  Award,
  Clock,
  CircleDollarSign,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Best Riads in Morocco 2026: Top 20 Curated Picks by City & Budget | CityGuide',
  description:
    'Handpicked top 20 riads across Morocco organized by city and budget. Best luxury riads, budget riads under 500 MAD, family riads, romantic riads, and pool riads in Marrakech, Fes, Essaouira, and Chefchaouen. Real prices in MAD with booking tips.',
  keywords: [
    'best riads Morocco 2026',
    'top riads Marrakech',
    'best riads Fes',
    'budget riads Morocco',
    'luxury riads Morocco',
    'riads with pool Morocco',
    'romantic riads Morocco',
    'family riads Morocco',
    'riad under 500 MAD',
    'best riads Essaouira',
    'best riads Chefchaouen',
    'where to stay Morocco riad',
    'riad booking Morocco',
    'curated riads Morocco',
    'riad recommendations Morocco',
  ],
  openGraph: {
    title: 'Best Riads in Morocco 2026: Top 20 Curated Picks',
    description:
      'Handpicked top 20 riads across Morocco. Budget, luxury, family, romantic, and pool riads in Marrakech, Fes, Essaouira, and Chefchaouen with real prices.',
    url: 'https://citytoursmorocco.com/moroccan-riads',
    images: [
      {
        url: '/images/hero-riad-interior.webp',
        width: 1200,
        height: 630,
        alt: 'Beautiful Moroccan riad interior with courtyard, zellige tiles, and fountain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Riads in Morocco 2026: Top 20 Curated Picks',
    description: 'Handpicked top 20 riads. Budget to luxury, organized by city and category.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/moroccan-riads' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/moroccan-riads#article',
      headline: 'Best Riads in Morocco 2026: Top 20 Curated Picks by City & Budget',
      description:
        'Handpicked top 20 riads across Morocco organized by city and budget, with real prices in MAD and honest reviews.',
      url: 'https://citytoursmorocco.com/moroccan-riads',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the best budget riad in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Riad Laayoun in Fes (350 MAD/night) and Dar Ihssane in Essaouira (380 MAD/night) offer exceptional value with authentic atmosphere, included breakfast, and friendly staff. For Marrakech, Riad Dar Khmissa at 400 MAD/night is a solid budget choice.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which Moroccan city has the best riads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Marrakech has the widest selection with over 1,500 riads, while Fes offers the most architecturally significant riads at 20-30% lower prices. Essaouira has the most relaxed coastal riads, and Chefchaouen offers the best overall value.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far in advance should I book a riad in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For peak season (October-April), book 2-3 months ahead. For popular riads during holidays and festivals, book 4-6 months ahead. Summer bookings can often be made 2-4 weeks in advance with good availability and lower prices.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
        { '@type': 'ListItem', position: 2, name: 'Moroccan Riads', item: 'https://citytoursmorocco.com/moroccan-riads' },
      ],
    },
  ],
};

/* =====================================================================
   RIAD DATA
   ===================================================================== */

interface Riad {
  name: string;
  city: string;
  neighborhood: string;
  priceRange: string;
  rating: number;
  bestFor: string;
  description: string;
  highlights: string[];
  categories: string[];
}

const topRiads: Riad[] = [
  {
    name: 'Riad Yasmine',
    city: 'Marrakech',
    neighborhood: 'Sidi Ben Slimane',
    priceRange: 'from 900 MAD/night',
    rating: 4.8,
    bestFor: 'Couples & Instagram lovers',
    description: 'Famous for its iconic turquoise plunge pool framed by lush greenery and white architecture. Seven individually designed rooms blend bohemian style with Moroccan tradition. The rooftop terrace delivers sweeping Atlas Mountain views, and the breakfast spread is legendary among Marrakech riads.',
    highlights: ['Turquoise plunge pool', 'Atlas Mountain rooftop views', 'Exceptional breakfast', 'Bohemian-chic interiors'],
    categories: ['Most Romantic', 'Best Pool Riads'],
  },
  {
    name: 'Riad Kniza',
    city: 'Marrakech',
    neighborhood: 'Bab Doukkala',
    priceRange: 'from 2,000 MAD/night',
    rating: 4.9,
    bestFor: 'Culture seekers & art lovers',
    description: 'A museum-quality experience disguised as a boutique hotel. Owner Mohammed Bouskri is one of Morocco\'s foremost antique collectors, and every corner displays rare Berber carpets, vintage pottery, and original artwork. The private hammam is among the most beautiful in Marrakech.',
    highlights: ['Museum-quality antique collection', 'Private hammam and pool', 'Gourmet restaurant', 'Expert-led cultural tours'],
    categories: ['Best Luxury Riads'],
  },
  {
    name: 'Riad Dar Khmissa',
    city: 'Marrakech',
    neighborhood: 'Riad Zitoun',
    priceRange: 'from 350 MAD/night',
    rating: 4.5,
    bestFor: 'Budget travelers seeking authenticity',
    description: 'A family-run gem that proves exceptional hospitality does not require a luxury price. Six rooms arranged around a traditional courtyard with orange trees, handwoven carpets, and tadelakt walls. The hosts prepare a generous Moroccan breakfast each morning and go out of their way to help with recommendations.',
    highlights: ['Generous included breakfast', 'Family-run warmth', 'Traditional architecture', 'Central medina location'],
    categories: ['Best Budget Riads'],
  },
  {
    name: 'Riad Joya',
    city: 'Marrakech',
    neighborhood: 'Kennaria',
    priceRange: 'from 1,800 MAD/night',
    rating: 4.9,
    bestFor: 'Luxury travelers & foodies',
    description: 'A meticulously restored 19th-century palace that took over two years to renovate. Seven spacious suites feature soaring ceilings, original zellige floors, and black tadelakt bathrooms. The heated courtyard plunge pool is surrounded by orange trees, and the chef-prepared dinners use market-fresh ingredients from the nearby Rahba Kedima spice square.',
    highlights: ['Heated plunge pool', 'Chef-prepared dinners', 'Original 19th-century zellige', 'Panoramic rooftop restaurant'],
    categories: ['Best Luxury Riads', 'Best Pool Riads'],
  },
  {
    name: 'Riad Fes',
    city: 'Fes',
    neighborhood: 'Zerbtana, Fes el-Bali',
    priceRange: 'from 2,200 MAD/night',
    rating: 4.9,
    bestFor: 'Discerning luxury travelers',
    description: 'The most celebrated luxury riad in Fes and a Relais & Chateaux property. Sixteen rooms feature hand-painted wooden ceilings, museum-quality zellige, and massive marble bathrooms. The rooftop restaurant serves refined Moroccan cuisine with views to the Marinid tombs, and the bar occupies a former prayer room with a stunning carved cedar ceiling.',
    highlights: ['Relais & Chateaux property', 'Marble hammam and pool', 'Rooftop dining with medina views', 'Cedar-ceiling cocktail bar'],
    categories: ['Best Luxury Riads'],
  },
  {
    name: 'Dar Roumana',
    city: 'Fes',
    neighborhood: 'Zkak Roumane',
    priceRange: 'from 1,200 MAD/night',
    rating: 4.8,
    bestFor: 'Food lovers & cooking enthusiasts',
    description: 'Run by a French-Moroccan couple with deep culinary expertise, Dar Roumana is legendary for its multi-course dinners and cooking classes. The pomegranate tree courtyard (roumana means pomegranate) and five individually styled rooms create an intimate, warm atmosphere that keeps guests returning year after year.',
    highlights: ['Acclaimed gourmet dinners', 'Hands-on cooking classes', 'Pomegranate courtyard', '17th-century restoration'],
    categories: ['Most Romantic'],
  },
  {
    name: 'Riad Laaroussa',
    city: 'Fes',
    neighborhood: 'Derb Bechara, Talaa Sghira',
    priceRange: 'from 1,500 MAD/night',
    rating: 4.9,
    bestFor: 'Heritage lovers & spa enthusiasts',
    description: 'A 17th-century palace with one of the largest private courtyards in the Fes medina, shaded by a towering fig tree and perfumed by jasmine. The in-house hammam is heated by a traditional wood-fired boiler, and the spa uses artisanal products made on-site. Eight rooms mix original period features with carefully chosen contemporary art.',
    highlights: ['Vast 17th-century courtyard', 'Wood-fired traditional hammam', 'Artisanal spa products', 'Fig tree and jasmine garden'],
    categories: ['Best Luxury Riads', 'Most Romantic'],
  },
  {
    name: 'Riad Laayoun',
    city: 'Fes',
    neighborhood: 'Near Bab Boujloud',
    priceRange: 'from 300 MAD/night',
    rating: 4.6,
    bestFor: 'Budget travelers in Fes',
    description: 'One of the best value stays in the Fes medina. Clean, well-maintained rooms surround a peaceful courtyard with a small fountain. The staff are exceptionally helpful with navigation in the labyrinthine medina, and the included breakfast of msemen, honey, olives, and fresh orange juice sets you up perfectly for a day of exploration.',
    highlights: ['Exceptional value', 'Helpful staff', 'Included traditional breakfast', 'Near Bab Boujloud gate'],
    categories: ['Best Budget Riads'],
  },
  {
    name: 'Karawan Riad',
    city: 'Fes',
    neighborhood: 'Derb Moulay Abdellah',
    priceRange: 'from 700 MAD/night',
    rating: 4.7,
    bestFor: 'Mid-range travelers wanting great service',
    description: 'Nine well-appointed rooms decorated in warm, tasteful style. What truly sets Karawan apart is the quality of its service: staff are genuinely knowledgeable about Fes and go out of their way to help guests navigate the medina, find artisan workshops, and discover hidden treasures that only locals know.',
    highlights: ['Outstanding staff knowledge', 'Strategic medina location', 'Calm courtyard atmosphere', 'Great value for quality'],
    categories: ['Best for Families'],
  },
  {
    name: 'Heure Bleue Palais',
    city: 'Essaouira',
    neighborhood: 'Near Skala',
    priceRange: 'from 2,000 MAD/night',
    rating: 4.8,
    bestFor: 'Luxury coastal retreat',
    description: 'Essaouira\'s finest riad-hotel occupies a palatial building near the Skala ramparts. The rooftop pool offers Atlantic Ocean views, the hammam is exquisitely designed, and the cinema room screens classic Moroccan films. The blend of traditional architecture with coastal elegance creates an atmosphere unlike any other riad in Morocco.',
    highlights: ['Rooftop pool with ocean views', 'Cinema room', 'Exquisite hammam', 'Atlantic coastal elegance'],
    categories: ['Best Luxury Riads', 'Best Pool Riads'],
  },
  {
    name: 'Riad Baladin',
    city: 'Essaouira',
    neighborhood: 'Rue Ibn Rochd',
    priceRange: 'from 600 MAD/night',
    rating: 4.6,
    bestFor: 'Surfers & creative types',
    description: 'A bohemian riad perfectly attuned to Essaouira\'s artistic energy. The design mixes Atlantic blues with Moroccan craftsmanship, and the rooftop terrace catches the ocean breeze. Surfboard storage, flexible breakfast times, and a genuinely laid-back atmosphere make it the go-to for the town\'s creative community.',
    highlights: ['Bohemian coastal design', 'Surfboard storage', 'Flexible schedule', 'Rooftop ocean breezes'],
    categories: ['Best Budget Riads'],
  },
  {
    name: 'Dar Ihssane',
    city: 'Essaouira',
    neighborhood: 'Near Place Moulay Hassan',
    priceRange: 'from 350 MAD/night',
    rating: 4.5,
    bestFor: 'Budget travelers & solo adventurers',
    description: 'A clean, cheerful budget option steps from the main square. Four rooms with bright blue-and-white decor echo the coastal city\'s palette. The rooftop terrace catches stunning sunsets over the Atlantic, and the friendly owner Fatima treats every guest like family. Breakfast includes her famous crepes with amlou (argan oil, almond, and honey paste).',
    highlights: ['Steps from Place Moulay Hassan', 'Sunset rooftop terrace', 'Homemade amlou crepes', 'Warm family atmosphere'],
    categories: ['Best Budget Riads'],
  },
  {
    name: 'Lina Ryad & Spa',
    city: 'Chefchaouen',
    neighborhood: 'Medina Center',
    priceRange: 'from 800 MAD/night',
    rating: 4.7,
    bestFor: 'Spa lovers in the blue city',
    description: 'The most refined accommodation in Chefchaouen, featuring a full-service spa with hammam, massage rooms, and a heated indoor pool. The blue-washed walls and terracotta rooftop terrace offer postcard views of the blue medina and the surrounding Rif Mountains. Nine rooms blend traditional blue palette with modern comfort.',
    highlights: ['Full-service spa with pool', 'Blue medina panoramic views', 'Heated indoor pool', 'Rif Mountain vistas'],
    categories: ['Best Pool Riads'],
  },
  {
    name: 'Casa Perleta',
    city: 'Chefchaouen',
    neighborhood: 'Near Plaza Uta el-Hammam',
    priceRange: 'from 400 MAD/night',
    rating: 4.7,
    bestFor: 'Couples & photographers',
    description: 'A meticulously restored Andalusian house with five rooms decorated in soft blues, whites, and warm wood tones. The highlight is the rooftop terrace with a panoramic view of the mosque, the medina, and the Rif Mountains. Breakfast features local goat cheese, fresh bread, and mountain honey served on hand-painted ceramics.',
    highlights: ['Andalusian restoration', 'Panoramic rooftop terrace', 'Local goat cheese breakfast', 'Hand-painted ceramic tableware'],
    categories: ['Most Romantic'],
  },
  {
    name: 'Dar Echchaouen',
    city: 'Chefchaouen',
    neighborhood: 'Ras El Ma area',
    priceRange: 'from 250 MAD/night',
    rating: 4.4,
    bestFor: 'Hikers & budget travelers',
    description: 'Located near the Ras El Ma spring on the edge of the medina, this budget riad is ideal for hikers heading into the Rif Mountains. Six simple but clean rooms, a peaceful courtyard, and a terrace where you can hear the sound of running water from the spring below. The owner arranges guided hikes to the Spanish Mosque and Akchour waterfalls.',
    highlights: ['Near Ras El Ma spring', 'Hiking guide arrangements', 'Sound of running water', 'Mountain edge location'],
    categories: ['Best Budget Riads'],
  },
  {
    name: 'Palais Amani',
    city: 'Fes',
    neighborhood: 'Near Bab Guissa',
    priceRange: 'from 1,800 MAD/night',
    rating: 4.8,
    bestFor: 'Garden lovers & gourmands',
    description: 'A 17th-century Andalusian palace with the largest private garden in the Fes medina: fountains, citrus trees, roses, and jasmine maintained by a dedicated gardener. The acclaimed restaurant and cooking school offer immersive Moroccan culinary experiences, and the rooftop bar provides one of the finest sunset views in the city.',
    highlights: ['Largest private garden in Fes', 'Cooking school on-site', 'Rooftop sunset bar', 'Andalusian palace heritage'],
    categories: ['Best Luxury Riads', 'Best for Families'],
  },
  {
    name: 'Riad Melhoun & Spa',
    city: 'Marrakech',
    neighborhood: 'Mouassine',
    priceRange: 'from 600 MAD/night',
    rating: 4.6,
    bestFor: 'Families & groups',
    description: 'One of the best family-friendly riads in Marrakech, with interconnecting rooms, a spacious courtyard, and staff who genuinely welcome children. The courtyard pool is shallow enough for young swimmers, and the kitchen prepares child-friendly meals alongside traditional Moroccan cuisine. Triple and quad rooms accommodate families without compromise.',
    highlights: ['Interconnecting family rooms', 'Shallow courtyard pool', 'Child-friendly menus', 'Spacious common areas'],
    categories: ['Best for Families', 'Best Pool Riads'],
  },
  {
    name: 'Riad BE',
    city: 'Marrakech',
    neighborhood: 'Mouassine',
    priceRange: 'from 800 MAD/night',
    rating: 4.7,
    bestFor: 'Design lovers & minimalists',
    description: 'A stylish, design-driven riad in the fashionable Mouassine quarter. Clean lines, neutral tones, and carefully curated contemporary art set against original architectural elements. Five compact but thoughtfully designed rooms with Beni Ourain rugs, brass fixtures, and tadelakt bathrooms. The rooftop terrace delivers Koutoubia views.',
    highlights: ['Contemporary Moroccan design', 'Koutoubia rooftop views', 'Mouassine quarter location', 'Art-curated interiors'],
    categories: ['Most Romantic'],
  },
  {
    name: 'Riad Zamane',
    city: 'Marrakech',
    neighborhood: 'Kasbah',
    priceRange: 'from 450 MAD/night',
    rating: 4.5,
    bestFor: 'Families on a budget',
    description: 'A welcoming family riad near the Saadian Tombs with rooms large enough for families. The courtyard features a plunge pool, and the rooftop terrace serves excellent breakfasts with views of the Koutoubia and Atlas Mountains. Owners Abdel and Nadia have raised their own children here and understand what families need.',
    highlights: ['Family-owned and operated', 'Near Saadian Tombs', 'Plunge pool', 'Atlas Mountain views from rooftop'],
    categories: ['Best Budget Riads', 'Best for Families'],
  },
  {
    name: 'Riad Mena & Beyond',
    city: 'Marrakech',
    neighborhood: 'Bab Aylen',
    priceRange: 'from 3,500 MAD/night',
    rating: 4.9,
    bestFor: 'Ultra-luxury retreat',
    description: 'A palatial property that redefines the riad experience with a full-size swimming pool, lush gardens, a world-class spa, and suites that rival the finest hotels anywhere. The restaurant serves both traditional Moroccan and contemporary international cuisine. This is where heads of state and celebrities stay when visiting Marrakech\'s medina.',
    highlights: ['Full-size swimming pool', 'World-class spa', 'Palatial suites', 'Celebrity-grade privacy'],
    categories: ['Best Luxury Riads', 'Best Pool Riads'],
  },
];

/* =====================================================================
   CATEGORY DATA
   ===================================================================== */

const categories = [
  {
    name: 'Best Budget Riads',
    subtitle: 'Under 500 MAD/night',
    icon: <Coins className="w-6 h-6" />,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'These riads prove that an authentic Moroccan experience does not require a large budget. Each offers included breakfast, genuine hospitality, and traditional architecture at prices that leave room for souks, restaurants, and experiences.',
  },
  {
    name: 'Best Luxury Riads',
    subtitle: '2,000+ MAD/night',
    icon: <Crown className="w-6 h-6" />,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Palatial properties with museum-quality architecture, private hammams, gourmet dining, and staff-to-guest ratios that rival the finest hotels in the world. Several are recognized by Relais & Chateaux and other international luxury associations.',
  },
  {
    name: 'Best for Families',
    subtitle: 'Child-friendly & spacious',
    icon: <Users className="w-6 h-6" />,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Riads with interconnecting rooms, shallow pools, child-friendly menus, and staff who genuinely welcome young travelers. These properties understand that a family trip to Morocco requires flexible schedules, extra space, and a patient approach.',
  },
  {
    name: 'Most Romantic',
    subtitle: 'Couples & honeymoons',
    icon: <Heart className="w-6 h-6" />,
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Intimate riads with candlelit courtyards, rooftop dining under the stars, luxurious suites, and an atmosphere crafted for romance. Several offer in-room hammam treatments, private dinners, and sunset terrace experiences.',
  },
  {
    name: 'Best Pool Riads',
    subtitle: 'Plunge pools & full pools',
    icon: <Waves className="w-6 h-6" />,
    color: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    description: 'From turquoise plunge pools to full-size swimming pools, these riads offer a refreshing respite from Morocco\'s heat. Particularly essential during summer months when temperatures in Marrakech and Fes regularly exceed 40 degrees Celsius.',
  },
];

/* =====================================================================
   BOOKING TIPS DATA
   ===================================================================== */

const bookingTips = [
  {
    title: 'Book Direct When Possible',
    icon: <Globe className="w-5 h-5" />,
    tip: 'Many riads offer 10-15% discounts for direct bookings through their website or WhatsApp. You skip the booking platform commission, and the riad can offer better rates or room upgrades. Always check the riad\'s own website before booking through an aggregator.',
  },
  {
    title: 'Confirm Airport/Station Transfer',
    icon: <Key className="w-5 h-5" />,
    tip: 'Most riads are deep inside medinas where vehicles cannot enter. A riad representative meeting you at the nearest parking area or taxi drop-off point is essential for your first visit. Confirm this transfer in advance, especially for late-night arrivals. Cost is typically from 50 MAD.',
  },
  {
    title: 'Check the Exact Location',
    icon: <MapPin className="w-5 h-5" />,
    tip: 'Google Maps can be unreliable inside medinas. Ask the riad for a pin location, a video walking direction, or a WhatsApp live location share. Some riads are a 15-minute walk from the nearest vehicle access point -- important to know if you have heavy luggage.',
  },
  {
    title: 'Book Peak Season Early',
    icon: <Calendar className="w-5 h-5" />,
    tip: 'October through April is peak season. The best riads in Marrakech sell out 2-3 months in advance. For Christmas, New Year, and Easter, book 4-6 months ahead. Summer (June-August) offers lower prices but temperatures above 40 degrees in Marrakech and Fes.',
  },
  {
    title: 'Ask About Hidden Costs',
    icon: <CircleDollarSign className="w-5 h-5" />,
    tip: 'Clarify whether the price includes breakfast (usually yes), city tax (from 25 MAD per person per night), hammam access, and Wi-Fi. Some luxury riads charge separately for breakfast at just 100 MAD per person. Always ask before confirming.',
  },
  {
    title: 'Read Recent Reviews Carefully',
    icon: <Star className="w-5 h-5" />,
    tip: 'Riad quality can change significantly when ownership or management changes. Focus on reviews from the last 6 months rather than overall ratings. Pay attention to comments about noise (medina sounds, nearby mosques), breakfast quality, and staff helpfulness.',
  },
  {
    title: 'Communicate Via WhatsApp',
    icon: <Phone className="w-5 h-5" />,
    tip: 'WhatsApp is the preferred communication method for nearly all riads in Morocco. Use it to confirm bookings, arrange transfers, request special meals, and get real-time directions. Save the riad\'s WhatsApp number before arrival.',
  },
  {
    title: 'Consider a Riad for Part of Your Trip',
    icon: <Bookmark className="w-5 h-5" />,
    tip: 'If a full riad stay feels too immersive, try a riad for the first 2-3 nights of your Morocco trip and then switch to a hotel for a change of pace. This way you get the authentic experience without the medina navigation becoming tiring.',
  },
];

/* =====================================================================
   ETIQUETTE DATA
   ===================================================================== */

const etiquetteRules = [
  { rule: 'Remove shoes at the entrance and use provided babouches (slippers)', icon: <Home className="w-4 h-4" /> },
  { rule: 'Dress modestly in shared spaces -- cover shoulders and knees in the courtyard and salon', icon: <Shield className="w-4 h-4" /> },
  { rule: 'Keep noise down after 22:00 -- the open courtyard carries sound between rooms', icon: <Clock className="w-4 h-4" /> },
  { rule: 'Tip housekeeping from 10 MAD daily, bag carriers from 10 MAD, and the medina escort from 20 MAD', icon: <Coins className="w-4 h-4" /> },
  { rule: 'Ask permission before photographing staff and respect any refusal graciously', icon: <Shield className="w-4 h-4" /> },
  { rule: 'Inform staff of your schedule so they can prepare early breakfast or wait for late returns', icon: <Clock className="w-4 h-4" /> },
  { rule: 'Conserve water -- Morocco is water-scarce, and long showers can deplete the riad supply', icon: <Waves className="w-4 h-4" /> },
  { rule: 'The call to prayer at dawn is part of the experience, not grounds for complaint', icon: <Sun className="w-4 h-4" /> },
];

/* =====================================================================
   WHAT TO EXPECT DATA
   ===================================================================== */

const whatToExpect = [
  {
    title: 'Arrival & Navigation',
    icon: <MapPin className="w-5 h-5" />,
    content: 'A riad representative meets you at the nearest vehicle access point and walks you through the medina alleys to your riad. This can take 5-15 minutes depending on location. The narrow alleyways may feel disorienting at first, but you will learn the route quickly. Most riads provide a hand-drawn map or WhatsApp pin for self-navigation after the first day.',
  },
  {
    title: 'Check-In & Welcome',
    icon: <Coffee className="w-5 h-5" />,
    content: 'You are greeted in the courtyard with traditional mint tea and Moroccan pastries. Check-in is relaxed and personal, with staff explaining the riad layout, Wi-Fi access, breakfast times, and nearby highlights. Many riads do not have a formal reception desk -- the courtyard salon doubles as the welcome area.',
  },
  {
    title: 'Breakfast Experience',
    icon: <Sun className="w-5 h-5" />,
    content: 'A traditional Moroccan breakfast is usually included and served in the courtyard or on the rooftop. Expect msemen (layered flatbread), baghrir (honeycomb pancakes), fresh bread, butter, honey, jam, olives, Laughing Cow cheese, fresh orange juice, coffee or tea, and sometimes eggs to order. It is one of the highlights of riad stays.',
  },
  {
    title: 'Room & Amenities',
    icon: <Bed className="w-5 h-5" />,
    content: 'Rooms vary enormously between riads but typically feature traditional decor: zellige tiles, tadelakt plastered walls, carved wood furniture, and handwoven textiles. En-suite bathrooms are standard in mid-range and above. Expect Wi-Fi (quality varies), air conditioning or heating (depending on season), and basic toiletries.',
  },
  {
    title: 'Evening & Night',
    icon: <Sparkles className="w-5 h-5" />,
    content: 'Many riads serve dinner with 24-hour advance notice, typically a multi-course Moroccan meal for just 150 MAD per person. The rooftop terrace is often the best spot for evening drinks with views of the medina skyline and minarets. Night porters ensure security and let in late-returning guests.',
  },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Building className="w-5 h-5" />, label: 'Top Picks', value: '20 Riads', detail: 'Across 4 cities' },
  { icon: <Coins className="w-5 h-5" />, label: 'Budget From', value: '250 MAD', detail: 'Per night' },
  { icon: <Crown className="w-5 h-5" />, label: 'Luxury To', value: '8,000 MAD', detail: 'Per night' },
  { icon: <Coffee className="w-5 h-5" />, label: 'Breakfast', value: 'Included', detail: 'At most riads' },
  { icon: <Star className="w-5 h-5" />, label: 'Avg Rating', value: '4.7/5', detail: 'Across all picks' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Cities', value: '4 Cities', detail: 'MAR, FES, ESS, CHE' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function MoroccanRiadsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Breadcrumb ---- */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Best Moroccan Riads</li>
        </ol>
      </nav>

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-riad-interior.webp"
            alt="Ornate interior courtyard of a Moroccan riad with zellige tiles, carved cedar balconies, and a central fountain surrounded by orange trees"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Handpicked Accommodations
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Riads in Morocco 2026: Top 20 Curated Picks
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              A handpicked selection of the finest riads across Marrakech, Fes, Essaouira, and Chefchaouen. Organized by budget, style, and who they suit best -- with real prices in MAD and honest assessments.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ---- Quick Stats ---- */}
      <section className="container-morocco py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border-primary p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#A0522D] mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide">{stat.label}</p>
              <p className="font-[family-name:var(--font-heading)] font-bold text-lg text-text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Intro ---- */}
      <section className="container-morocco pb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-6">
            Why This List Exists
          </h2>
          <div className="prose prose-lg text-text-secondary space-y-4">
            <p>
              Morocco has over 2,000 riads operating as guesthouses, and the quality varies enormously. A riad with
              beautiful photos can turn out to have crumbling plaster, indifferent staff, and a breakfast of stale bread.
              Meanwhile, an unassuming riad down the alley might deliver one of the most memorable stays of your life.
            </p>
            <p>
              This list cuts through the noise. Every riad here has been selected based on consistent guest satisfaction,
              architectural quality, staff hospitality, location, and value for money. We organize them by category so you
              can find exactly what you need -- whether that is a budget base under 500 MAD, a palatial suite for a
              honeymoon, or a family-friendly space with a shallow pool.
            </p>
            <p>
              This is <strong>not</strong> the same as our{' '}
              <Link href="/riad-guide" className="text-[#A0522D] underline hover:no-underline">general riad guide</Link>,
              which covers architecture, history, and what to expect. This page is a pure curated list of the best places to stay.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Gallery Strip ---- */}
      <section className="container-morocco pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/photo-riad-courtyard.webp"
              alt="Traditional Moroccan riad courtyard with zellige fountain and orange trees"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/photo-riad-rooftop-sunset.webp"
              alt="Riad rooftop terrace at sunset with lanterns and seating overlooking the medina"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/card-riad.webp"
              alt="Exterior entrance of a traditional Moroccan riad with carved wooden door"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---- Categories ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
            Browse by Category
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Every riad in our top 20 is tagged with one or more categories. Find the perfect match for your trip style and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const matchingRiads = topRiads.filter((r) => r.categories.includes(cat.name));
              return (
                <div key={cat.name} className={`rounded-xl border p-6 ${cat.color}`}>
                  <div className="flex items-center gap-3 mb-3">
                    {cat.icon}
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg">{cat.name}</h3>
                      <p className="text-sm opacity-75">{cat.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm mb-4 opacity-85">{cat.description}</p>
                  <ul className="space-y-1">
                    {matchingRiads.map((r) => (
                      <li key={r.name} className="text-sm flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{r.name} ({r.city})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Full Riad Listings ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          The Complete Top 20
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Detailed profiles of every riad on our curated list, organized by city. Each listing includes real prices, honest assessments, and what makes it stand out.
        </p>

        {['Marrakech', 'Fes', 'Essaouira', 'Chefchaouen'].map((city) => {
          const cityRiads = topRiads.filter((r) => r.city === city);
          return (
            <div key={city} className="mb-14">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#A0522D]" /> {city}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {cityRiads.map((riad) => (
                  <article key={riad.name} className="bg-white rounded-xl border border-border-primary p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg text-text-primary">
                          {riad.name}
                        </h4>
                        <p className="text-sm text-text-muted">{riad.neighborhood}, {riad.city}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-sm font-medium">
                        <Star className="w-3.5 h-3.5 fill-current" /> {riad.rating}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-[#FAF8F5] text-[#A0522D] text-xs px-2 py-1 rounded-full font-medium">
                        {riad.priceRange}
                      </span>
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium">
                        {riad.bestFor}
                      </span>
                    </div>

                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{riad.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {riad.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 text-xs text-text-muted bg-gray-50 px-2 py-1 rounded">
                          <CheckCircle className="w-3 h-3 text-emerald-500" /> {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {riad.categories.map((c) => (
                        <span key={c} className="text-xs text-[#C4960C] font-medium">{c}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ---- Booking Tips ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
            Booking Tips
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Practical advice that will save you money, frustration, and confusion when booking a riad in Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingTips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl border border-border-primary p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF8F5] text-[#A0522D]">
                    {tip.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary">{tip.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- What to Expect ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          What to Expect at a Riad
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Never stayed in a riad before? Here is exactly what happens from the moment you arrive to the morning you leave.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {whatToExpect.map((item, i) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D] text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-2 flex items-center gap-2">
                  {item.icon} {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Riad Etiquette ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
            Riad Etiquette
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            A few simple courtesies that show respect for the riad, its staff, and your fellow guests.
          </p>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {etiquetteRules.map((rule) => (
              <div key={rule.rule} className="flex items-start gap-3 bg-white rounded-xl border border-border-primary p-4">
                <div className="flex-shrink-0 mt-0.5 text-[#A0522D]">{rule.icon}</div>
                <p className="text-text-secondary text-sm leading-relaxed">{rule.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Price Comparison Table ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          Average Riad Prices by City
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Use this table to set realistic expectations for your budget. All prices are per room per night in Moroccan Dirhams (MAD).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-xl border border-border-primary overflow-hidden">
            <thead className="bg-[#FAF8F5]">
              <tr>
                <th className="text-left px-6 py-3 font-[family-name:var(--font-heading)] text-text-primary">City</th>
                <th className="text-left px-6 py-3 font-[family-name:var(--font-heading)] text-text-primary">Budget</th>
                <th className="text-left px-6 py-3 font-[family-name:var(--font-heading)] text-text-primary">Mid-Range</th>
                <th className="text-left px-6 py-3 font-[family-name:var(--font-heading)] text-text-primary">Luxury</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              {[
                { city: 'Marrakech', budget: 'from 350 MAD', mid: 'from 800 MAD', luxury: '2,000-8,000+ MAD' },
                { city: 'Fes', budget: 'from 300 MAD', mid: 'from 700 MAD', luxury: 'from 1,800 MAD' },
                { city: 'Essaouira', budget: 'from 350 MAD', mid: 'from 600 MAD', luxury: 'from 2,000 MAD' },
                { city: 'Chefchaouen', budget: 'from 250 MAD', mid: 'from 600 MAD', luxury: 'from 800 MAD' },
              ].map((row) => (
                <tr key={row.city} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 font-medium text-text-primary">{row.city}</td>
                  <td className="px-6 py-3 text-emerald-700">{row.budget}</td>
                  <td className="px-6 py-3 text-blue-700">{row.mid}</td>
                  <td className="px-6 py-3 text-amber-700">{row.luxury}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---- Related Pages ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Complete Riad Guide', href: '/riad-guide', desc: 'Architecture, history, and everything about riads' },
              { title: 'Moroccan Hammam Guide', href: '/moroccan-hammam', desc: 'The ultimate tourist guide to hammam experiences' },
              { title: '7-Day Morocco Itinerary', href: '/morocco-itinerary-7-days', desc: 'Perfect week-long trip with riad recommendations' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white rounded-xl border border-border-primary p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-2 group-hover:text-[#A0522D] transition-colors flex items-center gap-2">
                  {link.title} <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-text-secondary text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
