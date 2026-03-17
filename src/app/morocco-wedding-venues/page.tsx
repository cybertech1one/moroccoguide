import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Users,
  Heart,
  Building,
  Camera,
  Globe,
  Info,
  Clock,
  Sparkles,
  Sun,
  Mountain,
  Waves,
  Calendar,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  DollarSign,
  Utensils,
  Music,
  Flower2,
  Crown,
  Gem,
  Shield,
  BookOpen,
  Compass,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Wedding Venues 2026 | Riads, Kasbahs, Desert Camps & Beach Venues',
  description:
    'Plan your dream destination wedding in Morocco. Discover 12 stunning venues including luxury riads from 15,000 MAD, kasbahs from 25,000 MAD, desert camps from 20,000 MAD, and beach venues from 18,000 MAD. Capacity, pricing, photographer tips, and planning advice.',
  keywords: [
    'Morocco wedding venues',
    'destination wedding Morocco',
    'riad wedding Marrakech',
    'kasbah wedding Morocco',
    'desert wedding Morocco',
    'beach wedding Morocco',
    'Morocco wedding planner',
    'Marrakech wedding venue',
    'luxury wedding Morocco',
    'Morocco wedding cost',
    'Morocco wedding photographer',
    'intimate wedding Morocco',
    'outdoor wedding Morocco',
    'Sahara wedding',
    'Essaouira beach wedding',
    'Atlas Mountains wedding',
    'Morocco elopement',
    'Morocco wedding packages',
    'Morocco wedding budget',
    'Morocco celebration venue',
  ],
  openGraph: {
    title: 'Morocco Wedding Venues 2026 | Riads, Kasbahs, Desert & Beach',
    description:
      'Discover 12 stunning wedding venues across Morocco. Riads from 15,000 MAD, kasbahs from 25,000 MAD, desert camps from 20,000 MAD, and beach venues from 18,000 MAD. Complete planning guide.',
    url: `${BASE_URL}/morocco-wedding-venues`,
    images: [
      {
        url: `${BASE_URL}/images/hero-weddings.webp`,
        width: 1200,
        height: 630,
        alt: 'Stunning Moroccan wedding venue with traditional lanterns and rose petals in a riad courtyard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wedding Venues | Riads, Kasbahs, Desert & Beach',
    description:
      '12 stunning destination wedding venues in Morocco. From intimate riad courtyards to grand kasbah celebrations. Complete pricing and planning guide.',
    images: [`${BASE_URL}/images/hero-weddings.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wedding-venues` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/morocco-wedding-venues`,
  name: 'Morocco Wedding Venues 2026 | Riads, Kasbahs, Desert Camps & Beach Venues',
  description:
    'Comprehensive guide to destination wedding venues in Morocco including riads, kasbahs, desert camps, and beach venues with pricing, capacity, and planning details.',
  url: `${BASE_URL}/morocco-wedding-venues`,
  image: `${BASE_URL}/images/hero-weddings.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-wedding-venues`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Wedding Venues', item: `${BASE_URL}/morocco-wedding-venues` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: VENUE CATEGORIES
   ═══════════════════════════════════════════════════════════════ */

const venueCategories = [
  {
    name: 'Riad Venues',
    icon: Building,
    priceFrom: 'From 15,000 MAD',
    image: '/images/art-moroccan-riad-courtyard.webp',
    description:
      'Traditional Moroccan courtyard houses transformed into intimate wedding settings. Riads offer a uniquely Moroccan atmosphere with zellige tilework, carved stucco, central fountains, and rooftop terraces under the stars. Ideal for weddings of 20 to 80 guests.',
    bestFor: 'Intimate ceremonies, elopements, small celebrations',
    season: 'March - May and September - November are the best months. Summer can be extremely hot in Marrakech.',
  },
  {
    name: 'Kasbah Venues',
    icon: Crown,
    priceFrom: 'From 25,000 MAD',
    image: '/images/hero-kasbahs.webp',
    description:
      'Fortified palaces and ancient citadels that combine grandeur with Moroccan heritage. Kasbahs offer vast courtyards, panoramic terraces, and dramatic desert or mountain backdrops. Many have been restored to luxury standards while preserving centuries of history.',
    bestFor: 'Grand celebrations, large guest lists, multi-day events',
    season: 'Year-round, though October - April is most comfortable for southern kasbahs. Seasonal pricing applies.',
  },
  {
    name: 'Desert Camp Venues',
    icon: Star,
    priceFrom: 'From 20,000 MAD',
    image: '/images/hero-sahara-camp.webp',
    description:
      'Luxury desert camps in the Sahara that create an unforgettable setting beneath the stars. Imagine exchanging vows on golden dunes at sunset, followed by a feast under a Berber tent with traditional music. An experience no other destination can match.',
    bestFor: 'Adventurous couples, unforgettable photo opportunities, unique celebrations',
    season: 'October - April only. Summer temperatures in the Sahara exceed 45 degrees Celsius.',
  },
  {
    name: 'Beach Venues',
    icon: Waves,
    priceFrom: 'From 18,000 MAD',
    image: '/images/hero-coastal.webp',
    description:
      'Atlantic coast venues from Essaouira to Agadir offering ocean views, sea breezes, and golden sunsets. Beach venues range from clifftop restaurants to boutique hotels with private beach access. The combination of Moroccan culture and coastal beauty is extraordinary.',
    bestFor: 'Sunset ceremonies, relaxed celebrations, surf culture vibes',
    season: 'June - September for the best weather. Essaouira is windy year-round, which some love and others avoid.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INDIVIDUAL VENUES
   ═══════════════════════════════════════════════════════════════ */

const riadVenues = [
  {
    name: 'Riad El Fenn',
    location: 'Marrakech Medina',
    capacity: '20 - 80 guests',
    priceFrom: 'From 25,000 MAD for venue hire',
    icon: Sparkles,
    description:
      'A luxurious riad near the Koutoubia Mosque, owned by Vanessa Branson. Three courtyards, a rooftop with Atlas Mountain views, a hammam, and art-filled interiors. The largest courtyard accommodates up to 80 guests for a seated dinner. The rooftop is perfect for a sunset cocktail reception with the Koutoubia minaret as your backdrop.',
    included: [
      'Exclusive venue hire for 24 hours',
      'Setup and breakdown of ceremony and reception areas',
      'In-house catering with customizable Moroccan and international menus',
      'Dedicated event coordinator',
      'Rooms for the wedding party (additional charge)',
    ],
    tip: 'Book at least 8 months in advance for peak season (March-May, September-November). The rooftop ceremony with Koutoubia views at sunset is the signature setting.',
  },
  {
    name: 'Riad Jardin Secret',
    location: 'Marrakech Medina',
    capacity: '30 - 60 guests',
    priceFrom: 'From 18,000 MAD for venue hire',
    icon: Flower2,
    description:
      'An exquisite riad featuring two historic gardens, an Islamic garden with traditional irrigation channels and an exotic garden with plants from around the world. The restored tower offers panoramic medina views. The intimate scale and botanical beauty make it one of the most photogenic wedding venues in all of Morocco.',
    included: [
      'Exclusive use of both gardens and the tower',
      'Professional lighting for evening events',
      'Event coordination team',
      'Furniture and table setup',
      'Security and guest management',
    ],
    tip: 'The Islamic garden with its geometric water channels photographs beautifully. The tower is perfect for couple portraits with the medina skyline. Seasonal pricing varies, so request a quote for your specific date.',
  },
  {
    name: 'Riad Be Marrakech',
    location: 'Marrakech Medina',
    capacity: '15 - 40 guests',
    priceFrom: 'From 15,000 MAD for venue hire',
    icon: Heart,
    description:
      'A boutique riad known for its romantic atmosphere and intimate scale. The central courtyard with its plunge pool surrounded by orange trees and bougainvillea is ideal for small, heartfelt celebrations. Five beautifully appointed suites mean the closest guests can stay on-site.',
    included: [
      'Full venue buyout including all 5 suites',
      'Courtyard ceremony and reception setup',
      'Breakfast for overnight guests',
      'Rooftop terrace access for cocktails',
      'Traditional Moroccan tea welcome ceremony',
    ],
    tip: 'Perfect for elopements and micro-weddings. The courtyard lit with hundreds of candles and lanterns at night creates pure magic. Book 6 months ahead for spring and autumn dates.',
  },
];

const kasbahVenues = [
  {
    name: 'Kasbah Bab Ourika',
    location: 'Ourika Valley, Atlas Mountains',
    capacity: '50 - 200 guests',
    priceFrom: 'From 35,000 MAD for venue hire',
    icon: Mountain,
    description:
      'A stunning kasbah perched on a hilltop overlooking the Ourika Valley with the snow-capped Atlas Mountains as a permanent backdrop. Multiple terraces at different levels allow for a ceremony on one level and a reception on another. The organic gardens supply the kitchen, and the infinity pool terrace is one of the most photographed spots in Morocco.',
    included: [
      'Exclusive venue hire for the full day',
      'Dedicated wedding coordinator',
      'Farm-to-table catering from the organic garden',
      'Multiple ceremony and reception location options',
      'On-site accommodation for up to 28 guests',
      'Sound system and lighting for reception',
    ],
    tip: 'The terrace ceremony with the Atlas Mountains behind you is iconic. Only 45 minutes from Marrakech, so guests can easily commute. Spring (March-May) when the mountains are still snow-capped is the most photogenic season.',
  },
  {
    name: 'Kasbah Tamadot',
    location: 'Asni, High Atlas',
    capacity: '40 - 150 guests',
    priceFrom: 'From 45,000 MAD for venue hire',
    icon: Crown,
    description:
      'Sir Richard Branson\'s luxury retreat in the Atlas Mountains, consistently rated among the world\'s best hotels. Set at 1,200 meters altitude with breathtaking valley views, the kasbah features Berber-style architecture, infinity pools, award-winning gardens, and interiors filled with art and antiques collected from around Morocco.',
    included: [
      'Exclusive use of ceremony garden and reception terrace',
      'Award-winning catering team',
      'Personal wedding planner',
      'Luxury accommodation for 28 guests in suites and tents',
      'Spa access for the wedding party',
      'Traditional Moroccan entertainment options',
    ],
    tip: 'This is the premium choice in the Atlas Mountains. The sunset ceremony on the main terrace with the entire Toubkal valley below is extraordinary. Book 12 months in advance. Seasonal pricing applies, with summer being slightly less expensive.',
  },
  {
    name: 'Ksar Char-Bagh',
    location: 'Palmeraie, Marrakech',
    capacity: '30 - 120 guests',
    priceFrom: 'From 30,000 MAD for venue hire',
    icon: Gem,
    description:
      'A 14th-century-inspired palace set within a vast palm grove, featuring Moorish arches, reflecting pools, and manicured gardens that rival the Alhambra. The property combines Andalusian and Moroccan architecture with contemporary luxury. The central reflecting pool flanked by rose gardens is a wedding photographer\'s dream.',
    included: [
      'Venue hire including gardens and main reception hall',
      'Gourmet Moroccan-French fusion catering',
      'Event coordination and logistics management',
      'Floral arrangements using garden flowers',
      'Accommodation for up to 26 guests',
      'Hammam and spa for pre-wedding pampering',
    ],
    tip: 'The long reflecting pool with rose petals floating on the surface is the signature shot. The Palmeraie location means more space and privacy than medina venues. Request a tasting session before confirming the menu.',
  },
];

const desertVenues = [
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi, Merzouga',
    capacity: '20 - 80 guests',
    priceFrom: 'From 25,000 MAD for venue hire',
    icon: Star,
    description:
      'A premium desert camp set among the towering dunes of Erg Chebbi. Luxury Berber tents with en-suite bathrooms, a grand communal tent for the reception, and a ceremonial dune where couples exchange vows at sunset with 360-degree views of golden sand. Traditional Gnawa musicians, camel processions, and a starlit dinner complete the experience.',
    included: [
      'Luxury tent accommodation for all guests',
      'Sunset dune ceremony setup with Berber carpet aisle',
      'Traditional Moroccan feast under the stars',
      'Gnawa musicians and Berber entertainment',
      'Camel procession for the wedding party',
      'Bonfire and stargazing session',
      'All meals and beverages for the event',
    ],
    tip: 'The golden hour on the dunes (30 minutes before sunset) produces otherworldly photos. Arrange a pre-wedding camel ride for guests. October through March is the only viable season. The camp can be fully private for your group.',
  },
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert, near Marrakech',
    capacity: '20 - 60 guests',
    priceFrom: 'From 20,000 MAD for venue hire',
    icon: Compass,
    description:
      'Set in the rocky Agafay Desert just 40 minutes from Marrakech, Scarabeo Camp offers the desert experience without the long drive to the Sahara. Whitewashed Berber tents dot the lunar landscape with Atlas Mountain views. The minimalist aesthetic and proximity to Marrakech make it an increasingly popular choice for modern couples.',
    included: [
      'Full camp buyout for exclusive use',
      'Ceremony setup on the desert plateau',
      'Moroccan dinner under a starlit sky',
      'Traditional music entertainment',
      'Tent accommodation for all guests',
      'Breakfast and transport back to Marrakech',
    ],
    tip: 'The Agafay Desert is not sandy dunes but a dramatic rocky moonscape. The contrast of white tents against the grey desert and purple Atlas Mountains at sunset is stunning. Much more accessible than Merzouga for guests flying into Marrakech.',
  },
];

const beachVenues = [
  {
    name: 'Villa de l\'O',
    location: 'Essaouira',
    capacity: '30 - 100 guests',
    priceFrom: 'From 22,000 MAD for venue hire',
    icon: Waves,
    description:
      'A clifftop venue perched above the Atlantic with unobstructed ocean views from every angle. The whitewashed terrace with its infinity pool overlooking the sea is one of the most dramatic ceremony settings on the Moroccan coast. The combination of Essaouira\'s bohemian charm and Atlantic grandeur creates an atmosphere that is both elegant and relaxed.',
    included: [
      'Exclusive terrace and pool area for ceremony and reception',
      'Ocean-view dining setup',
      'In-house seafood and Moroccan catering',
      'Event coordinator and setup team',
      'Sound system and ambient lighting',
      'Accommodation for up to 20 guests',
    ],
    tip: 'Essaouira can be windy, which adds drama but plan accordingly. The sunset over the Atlantic from the terrace is spectacular. June through September offers the calmest conditions. Have a backup plan for the indoor salon if wind is extreme.',
  },
  {
    name: 'Paradis Plage',
    location: 'Between Essaouira and Agadir',
    capacity: '40 - 150 guests',
    priceFrom: 'From 18,000 MAD for venue hire',
    icon: Sun,
    description:
      'An eco-resort set directly on a golden sand beach with surf-worthy waves. The property blends Moroccan architecture with a wellness-focused philosophy. The beachfront ceremony area, the garden restaurant, and the rooftop yoga pavilion offer three distinct settings. For couples who want barefoot-on-the-sand simplicity combined with excellent service.',
    included: [
      'Beach ceremony area with natural decor',
      'Garden or rooftop reception setup',
      'Organic and locally-sourced catering',
      'Accommodation in eco-suites and bungalows',
      'Yoga and wellness sessions for guests',
      'Surf lessons for the adventurous',
    ],
    tip: 'The barefoot beach ceremony at sunset is the signature experience. The resort is committed to sustainability, which resonates with eco-conscious couples. Located between Essaouira and Agadir, so guests can explore both cities.',
  },
  {
    name: 'Sofitel Agadir Thalassa',
    location: 'Agadir Seafront',
    capacity: '50 - 250 guests',
    priceFrom: 'From 28,000 MAD for venue hire',
    icon: Globe,
    description:
      'A luxury beachfront resort on Agadir\'s famous promenade with direct beach access and panoramic ocean views. The grand ballroom accommodates large celebrations, while the beachside garden terrace offers an outdoor option with waves crashing in the background. Professional event infrastructure and full hotel services make it ideal for larger destination weddings.',
    included: [
      'Choice of beachside garden or grand ballroom',
      'Professional event management team',
      'International and Moroccan cuisine options',
      'Full audio-visual equipment',
      'Accommodation blocks at preferential rates',
      'Thalassotherapy spa access for the wedding party',
      'Airport transfer coordination for guests',
    ],
    tip: 'Agadir offers the most reliable sunny weather on the Moroccan coast (300+ days of sunshine). The city has excellent flight connections from Europe. The best of both worlds: a modern luxury hotel with Moroccan cultural touches.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHER RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const photographers = [
  {
    name: 'Youssef El Mansouri',
    specialty: 'Riad & Medina Weddings',
    location: 'Based in Marrakech',
    priceFrom: 'From 8,000 MAD for full-day coverage',
    description:
      'Specializes in the interplay of light and shadow within riad courtyards. Known for capturing the intimate moments that make Moroccan weddings unique. Works exclusively in Marrakech and the Atlas Mountains.',
    style: 'Editorial, warm tones, natural light',
  },
  {
    name: 'Amina Berrada',
    specialty: 'Desert & Outdoor Weddings',
    location: 'Based in Casablanca, travels nationwide',
    priceFrom: 'From 10,000 MAD for full-day coverage',
    description:
      'An award-winning photographer whose desert work has been featured in international wedding publications. Expert at capturing the golden hour on Sahara dunes and the dramatic landscapes of the Atlas. Drone photography included in all packages.',
    style: 'Cinematic, bold colors, landscape-focused',
  },
  {
    name: 'Karim Tazi',
    specialty: 'Beach & Coastal Weddings',
    location: 'Based in Essaouira',
    priceFrom: 'From 7,000 MAD for full-day coverage',
    description:
      'A Essaouira local who knows every hidden cove and sunset spot on the coast. Combines documentary-style coverage with creative couple portraits using the Atlantic as a backdrop. Also shoots video.',
    style: 'Documentary, oceanic blues, candid moments',
  },
  {
    name: 'Nadia Ouazzani',
    specialty: 'Luxury & Kasbah Weddings',
    location: 'Based in Rabat, travels nationwide',
    priceFrom: 'From 12,000 MAD for full-day coverage',
    description:
      'The go-to photographer for high-end Moroccan weddings. Her work focuses on the details: zellige patterns, henna art, traditional attire, and the architectural grandeur of kasbahs. She delivers a mix of fine art and photojournalism.',
    style: 'Fine art, detail-oriented, luxurious aesthetic',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PLANNING ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const planningEssentials = [
  {
    title: 'Legal Requirements',
    icon: Shield,
    items: [
      'Foreign nationals need a "Certificat de Capacite Matrimoniale" from their embassy',
      'Marriage in Morocco requires documentation submitted to the Adoul (Moroccan notary) at least 15 days before the ceremony',
      'Two Muslim witnesses are required for a legal Islamic marriage; civil ceremonies can be arranged separately',
      'Same-sex marriages are not legally recognized in Morocco; some couples hold a symbolic ceremony and legalize abroad',
      'All documents must be translated into Arabic by a certified translator',
    ],
  },
  {
    title: 'Budget Planning',
    icon: DollarSign,
    items: [
      'Venue hire: from 15,000 MAD to 100,000+ MAD depending on location and season',
      'Catering: from 250 MAD per person for a traditional Moroccan feast; from 500 MAD for fusion menus',
      'Photographer: from 7,000 MAD for full-day coverage; from 15,000 MAD with video',
      'Flowers and decor: from 3,000 MAD for simple arrangements; from 15,000 MAD for elaborate setups',
      'Entertainment: from 2,000 MAD for a Gnawa group; from 5,000 MAD for a full band; from 8,000 MAD for a DJ setup',
      'Wedding planner: from 10,000 MAD for coordination; from 25,000 MAD for full planning',
      'All prices are estimates and seasonal pricing varies significantly. Request detailed quotes from each vendor.',
    ],
  },
  {
    title: 'Timing and Seasons',
    icon: Calendar,
    items: [
      'Peak season: March through May and September through November. Best weather, highest prices.',
      'Shoulder season: June and December. Good weather, moderate prices.',
      'Off-peak: July through August (extremely hot inland) and January through February (cooler, possible rain). Lowest prices.',
      'Ramadan dates change annually. Many venues operate differently during Ramadan. Plan around it or embrace it.',
      'Book 8 to 12 months in advance for peak season. 4 to 6 months for off-peak.',
      'Weekday weddings (Tuesday through Thursday) often receive a 10-20% discount at many venues.',
    ],
  },
  {
    title: 'Guest Experience',
    icon: Users,
    items: [
      'Arrange airport transfers for international guests (from 200 MAD from Marrakech airport)',
      'Provide a welcome basket with Moroccan treats: dates, argan oil, mint tea, and a small zellige tile',
      'Organize a pre-wedding hammam experience for the wedding party (from 300 MAD per person at a luxury hammam)',
      'Plan a post-wedding brunch or a group day trip to nearby attractions',
      'Create a bilingual program (English/French or English/Arabic) for mixed-nationality celebrations',
      'Consider a henna night the evening before, a beloved Moroccan tradition',
    ],
  },
  {
    title: 'Vendor Coordination',
    icon: Phone,
    items: [
      'Hire a local wedding planner who speaks your language and has vendor relationships',
      'Visit your venue in person before signing. Photos can be misleading about size and condition.',
      'Request tastings from caterers. Moroccan cuisine is extraordinary but ranges widely in quality.',
      'Confirm all vendor pricing in writing with a detailed contract specifying exactly what is included',
      'Tip culture: budget from 100 MAD per staff member who provides exceptional service on the day',
      'Have a Plan B for outdoor ceremonies. Weather in Morocco is generally reliable but not guaranteed.',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL MOROCCAN WEDDING ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalElements = [
  {
    element: 'The Henna Night (Laylat al-Henna)',
    icon: Flower2,
    description:
      'Traditionally held the night before the wedding, the henna night is a celebration for women in the bride\'s family. A professional henna artist (neqqasha) creates intricate designs on the bride\'s hands and feet. Guests also receive henna. It is accompanied by singing, ululating, and traditional sweets.',
    cost: 'From 1,500 MAD for a professional neqqasha',
  },
  {
    element: 'The Amariya (Bridal Sedan)',
    icon: Crown,
    description:
      'The bride is carried into the reception on an ornate, palanquin-like platform called the Amariya, held aloft by four men. She is dressed in an elaborate Moroccan caftan and adorned with gold jewelry. This dramatic entrance is one of the most iconic moments of a Moroccan wedding.',
    cost: 'From 2,000 MAD for Amariya rental and bearers',
  },
  {
    element: 'Seven Caftans (Takchita)',
    icon: Sparkles,
    description:
      'In a traditional Moroccan wedding, the bride changes outfits up to seven times throughout the celebration, each representing a different region or style of Morocco. The neggafa (bridal dresser) manages each outfit change and ensures every detail is perfect.',
    cost: 'From 5,000 MAD for neggafa services; caftan rental from 2,000 MAD each',
  },
  {
    element: 'Traditional Music & Entertainment',
    icon: Music,
    description:
      'Moroccan weddings feature live music ranging from Andalusian orchestras to Gnawa troupes, Chaabi bands, and modern DJs. A typical celebration includes multiple musical styles as the evening progresses. Berber drumming and Ahwach dancing add energy to the festivities.',
    cost: 'From 3,000 MAD for a traditional music ensemble',
  },
  {
    element: 'The Moroccan Feast',
    icon: Utensils,
    description:
      'A Moroccan wedding feast is legendary. It traditionally includes pastilla (sweet and savory pigeon pie), lamb or beef tagine, whole roasted lamb (mechoui), couscous, and an elaborate selection of Moroccan pastries and fruit. Mint tea flows throughout the evening.',
    cost: 'From 250 MAD per person for a traditional multi-course feast',
  },
  {
    element: 'Milk & Dates Ceremony',
    icon: Heart,
    description:
      'The groom offers the bride milk and dates as a symbol of sweetness and prosperity in their married life. This simple, beautiful ritual often takes place at the start of the celebration and can be incorporated into destination weddings regardless of the couple\'s background.',
    cost: 'Minimal cost, deeply meaningful tradition',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Can non-Muslims have a wedding in Morocco?',
    answer:
      'Yes. Many venues host celebrations for couples of all backgrounds. For a legally recognized marriage, at least one partner must typically be Muslim for an Islamic ceremony. However, couples frequently hold a symbolic ceremony in Morocco and complete the legal process in their home country.',
  },
  {
    question: 'What is the best time of year for a Morocco wedding?',
    answer:
      'March through May and September through November offer the best weather and light. Avoid July through August for inland venues (extreme heat) and check Ramadan dates which change annually. Coastal venues like Essaouira and Agadir are pleasant year-round.',
  },
  {
    question: 'How far in advance should we book?',
    answer:
      'For peak season (spring and autumn), book 8 to 12 months ahead. For off-peak, 4 to 6 months is usually sufficient. Top venues and photographers are booked well in advance, so start planning early.',
  },
  {
    question: 'Do we need a wedding planner in Morocco?',
    answer:
      'Highly recommended, especially for international couples. A local planner navigates vendor relationships, language barriers, logistics, and cultural nuances. Budget from 10,000 MAD for day-of coordination or from 25,000 MAD for full planning services.',
  },
  {
    question: 'Can we serve alcohol at our wedding?',
    answer:
      'Many venues are licensed to serve alcohol, especially luxury riads, kasbahs, and hotel venues. Some traditional or religiously-oriented venues do not. Confirm alcohol policies during your venue search. Licensed venues typically charge from 150 MAD per bottle of Moroccan wine.',
  },
  {
    question: 'What about dietary restrictions for guests?',
    answer:
      'Moroccan cuisine is naturally accommodating. Vegetarian, vegan, and gluten-free options are easily arranged. All meat served in Morocco is halal. Inform your caterer well in advance about any specific allergies or requirements.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWeddingVenuesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-weddings.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Wedding Venues</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Destination Wedding Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Wedding Venues:
            <br className="hidden md:block" /> Your Dream Celebration Awaits
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From intimate riad courtyards to grand kasbah terraces, golden Sahara dunes
            to Atlantic clifftops. Discover 12 extraordinary venues for your Morocco
            destination wedding.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco for Your Wedding
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has become one of the world&rsquo;s most sought-after destination wedding
                locations, and for good reason. Where else can you exchange vows in a 400-year-old
                palace courtyard, celebrate under Saharan stars, or dance barefoot on an Atlantic
                beach &mdash; all within the same country? The combination of ancient architecture,
                vibrant culture, extraordinary cuisine, and dramatic landscapes creates a wedding
                experience that no other destination can match.
              </p>
              <p>
                Moroccan hospitality is legendary. Your guests will not simply attend a wedding;
                they will be immersed in an experience of color, flavor, music, and warmth. From
                the moment they arrive to the final glass of mint tea, Morocco wraps its arms
                around your celebration.
              </p>
              <p>
                This guide covers 12 venues across four categories, complete with pricing (all
                prices start &ldquo;from&rdquo; the listed amount and seasonal pricing varies),
                capacity, what is included, and practical planning advice. We also include
                photographer recommendations and traditional Moroccan wedding elements you can
                incorporate into your celebration.
              </p>
            </div>
            <div className="mt-6 p-4 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
              <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <span>
                  All prices listed are starting points and are subject to seasonal variation,
                  guest count, and specific requirements. Always request a detailed, personalized
                  quote from each venue and vendor.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Venue Categories Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Four Types of Moroccan Wedding Venues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each category offers a distinctly different atmosphere. Choose based on your
            guest count, budget, and the experience you want to create.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {venueCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={category.image}
                      alt={`${category.name} - wedding venue category in Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <Icon className="w-5 h-5" />
                        {category.name}
                      </h3>
                      <p className="text-sm text-white/80">{category.priceFrom}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{category.description}</p>
                    <div className="flex items-start gap-2 text-sm mb-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]"><strong>Best for:</strong> {category.bestFor}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]"><strong>Season:</strong> {category.season}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Riad Venues ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Wedding Venues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Intimate courtyards, rooftop terraces, and centuries of Moroccan craftsmanship.
            Riads are the heart and soul of a Marrakech wedding.
          </p>
          <div className="space-y-8">
            {riadVenues.map((venue) => {
              const Icon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {venue.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {venue.capacity}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-accent)] font-medium">
                          <DollarSign className="w-3.5 h-3.5" />
                          {venue.priceFrom}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{venue.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                      What&rsquo;s Included:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {venue.included.map((item, i) => (
                        <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      {venue.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Image Break: Moroccan Wedding ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/art-moroccan-wedding.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] text-white font-bold">
            &ldquo;A Moroccan wedding is not just a ceremony &mdash; it is a celebration
            of life, love, and the extraordinary generosity of a culture that knows
            how to celebrate.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Kasbah Venues ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kasbah Wedding Venues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Grand fortified palaces with Atlas Mountain backdrops. Kasbahs deliver the
            scale and drama of a truly magnificent celebration.
          </p>
          <div className="space-y-8">
            {kasbahVenues.map((venue) => {
              const Icon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {venue.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {venue.capacity}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-accent)] font-medium">
                          <DollarSign className="w-3.5 h-3.5" />
                          {venue.priceFrom}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{venue.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                      What&rsquo;s Included:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {venue.included.map((item, i) => (
                        <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      {venue.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Desert Venues ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Wedding Venues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Exchange vows on golden dunes at sunset, dine under a blanket of Saharan stars,
            and give your guests an experience they will never forget.
          </p>
          <div className="space-y-8">
            {desertVenues.map((venue) => {
              const Icon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {venue.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {venue.capacity}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-accent)] font-medium">
                          <DollarSign className="w-3.5 h-3.5" />
                          {venue.priceFrom}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{venue.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                      What&rsquo;s Included:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {venue.included.map((item, i) => (
                        <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      {venue.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Beach Venues ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Wedding Venues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Atlantic sunsets, ocean breezes, and the sound of waves. The Moroccan coast
            offers a stunning natural stage for your celebration.
          </p>
          <div className="space-y-8">
            {beachVenues.map((venue) => {
              const Icon = venue.icon;
              return (
                <div key={venue.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {venue.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {venue.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {venue.capacity}
                        </span>
                        <span className="flex items-center gap-1 text-[var(--color-accent)] font-medium">
                          <DollarSign className="w-3.5 h-3.5" />
                          {venue.priceFrom}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{venue.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                      What&rsquo;s Included:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      {venue.included.map((item, i) => (
                        <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium flex items-start gap-1.5">
                      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      {venue.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Traditional Moroccan Wedding Elements ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Moroccan Wedding Elements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Incorporate these beloved Moroccan traditions into your celebration for an
            authentic touch that your guests will remember forever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {traditionalElements.map((element) => {
              const Icon = element.icon;
              return (
                <div key={element.element} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {element.element}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{element.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 shrink-0" />
                      {element.cost}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photographer Recommendations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recommended Wedding Photographers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Capturing your Morocco wedding requires a photographer who understands
            the light, the architecture, and the culture. These are among the best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographers.map((photographer) => (
              <div key={photographer.name} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {photographer.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{photographer.specialty}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{photographer.description}</p>
                <div className="space-y-1.5 text-xs">
                  <p className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 shrink-0" />
                    {photographer.location}
                  </p>
                  <p className="flex items-center gap-1.5 text-[var(--color-accent)] font-medium">
                    <DollarSign className="w-3 h-3 shrink-0" />
                    {photographer.priceFrom}
                  </p>
                  <p className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Sparkles className="w-3 h-3 shrink-0" />
                    Style: {photographer.style}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Image Break: Riad Courtyard ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/photo-moroccan-wedding-celebration.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] text-white font-bold">
            &ldquo;In Morocco, a wedding is not an event &mdash; it is a festival
            of love that the entire community celebrates together.&rdquo;
          </p>
        </div>
      </section>

      {/* ── Planning Essentials ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know to plan a seamless destination wedding in Morocco.
            From legal requirements to budget guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningEssentials.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                        <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about planning a wedding in Morocco.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Venue Comparison Quick Reference ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Venue Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            At a glance: pricing, capacity, and best season for all 12 venues.
            All prices are starting points and seasonal pricing varies.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Venue</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Type</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Capacity</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Starting Price</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Best Season</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Riad El Fenn', type: 'Riad', capacity: '20-80', price: 'From 25,000 MAD', season: 'Mar-May, Sep-Nov' },
                  { name: 'Riad Jardin Secret', type: 'Riad', capacity: '30-60', price: 'From 18,000 MAD', season: 'Mar-May, Sep-Nov' },
                  { name: 'Riad Be Marrakech', type: 'Riad', capacity: '15-40', price: 'From 15,000 MAD', season: 'Mar-May, Sep-Nov' },
                  { name: 'Kasbah Bab Ourika', type: 'Kasbah', capacity: '50-200', price: 'From 35,000 MAD', season: 'Mar-May, Sep-Nov' },
                  { name: 'Kasbah Tamadot', type: 'Kasbah', capacity: '40-150', price: 'From 45,000 MAD', season: 'Year-round' },
                  { name: 'Ksar Char-Bagh', type: 'Kasbah', capacity: '30-120', price: 'From 30,000 MAD', season: 'Mar-May, Sep-Nov' },
                  { name: 'Merzouga Camp', type: 'Desert', capacity: '20-80', price: 'From 25,000 MAD', season: 'Oct-Mar' },
                  { name: 'Scarabeo Camp', type: 'Desert', capacity: '20-60', price: 'From 20,000 MAD', season: 'Oct-Apr' },
                  { name: "Villa de l'O", type: 'Beach', capacity: '30-100', price: 'From 22,000 MAD', season: 'Jun-Sep' },
                  { name: 'Paradis Plage', type: 'Beach', capacity: '40-150', price: 'From 18,000 MAD', season: 'Jun-Sep' },
                  { name: 'Sofitel Agadir', type: 'Beach', capacity: '50-250', price: 'From 28,000 MAD', season: 'Year-round' },
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[var(--border-primary)] ${i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}`}>
                    <td className="py-2.5 px-4 font-medium text-[var(--text-primary)]">{row.name}</td>
                    <td className="py-2.5 px-4 text-[var(--text-muted)]">{row.type}</td>
                    <td className="py-2.5 px-4 text-[var(--text-muted)]">{row.capacity}</td>
                    <td className="py-2.5 px-4 text-[var(--color-accent)] font-medium">{row.price}</td>
                    <td className="py-2.5 px-4 text-[var(--text-muted)]">{row.season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco text-center max-w-3xl">
          <Heart className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Morocco Wedding
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco is waiting to host the most magical day of your life. Whether you
            dream of a candlelit riad courtyard, a mountaintop kasbah, a Saharan sunset,
            or an Atlantic clifftop, the perfect venue exists. Start your journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/honeymoon-in-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Heart className="w-4 h-4" />
              Honeymoon Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-for-couples"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-accent)] text-[var(--color-accent)] font-medium hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              Morocco for Couples
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
