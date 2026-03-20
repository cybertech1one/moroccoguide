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
  Globe,
  Landmark,
  Key,
  Wifi,
  Coffee,
  BedDouble,
  Calendar,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Riads in Morocco 2026 | Traditional Riad Guide, Prices & Booking Tips',
  description:
    'Complete guide to riads in Morocco. Discover what a riad is, the best riads in Marrakech, Fez, Essaouira and Chefchaouen, booking tips, price ranges by city and season, riad etiquette, and how to choose the perfect traditional riad for your stay.',
  keywords: [
    'riad morocco',
    'best riads in morocco',
    'what is a riad',
    'morocco riad experience',
    'riads in marrakech',
    'riads in fez',
    'traditional riad',
    'riad vs hotel morocco',
    'riad booking tips',
    'best riads marrakech',
    'luxury riads morocco',
    'budget riads morocco',
    'riad courtyard',
    'moroccan riad architecture',
    'riad etiquette morocco',
    'riad prices morocco',
    'converted palace riads',
    'riads in essaouira',
    'riads in chefchaouen',
    'riad rooftop terrace',
    'riad hammam morocco',
    'riad breakfast morocco',
  ],
  openGraph: {
    title: 'Best Riads in Morocco 2026 | Traditional Riad Guide, Prices & Booking Tips',
    description:
      'Everything you need to know about staying in a traditional Moroccan riad. From budget gems to converted palaces, find the perfect riad in Marrakech, Fez, Essaouira and beyond.',
    url: `${BASE_URL}/morocco-riads-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-riads.webp`,
        width: 1200,
        height: 630,
        alt: 'Beautiful traditional Moroccan riad courtyard with fountain, zellige tiles and lush greenery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Riads in Morocco 2026 | Traditional Riad Guide & Booking Tips',
    description:
      'Complete guide to Moroccan riads. Best picks in Marrakech, Fez, Essaouira and Chefchaouen with prices, booking tips, and riad etiquette.',
    images: [`${BASE_URL}/images/hero-riads.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-riads-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-riads-guide`,
  name: 'Best Riads in Morocco 2026 | Traditional Riad Guide, Prices & Booking Tips',
  description:
    'Complete guide to riads in Morocco. Discover what a riad is, the best riads in Marrakech, Fez, Essaouira and Chefchaouen, booking tips, price ranges, riad etiquette, and how to choose the perfect traditional riad.',
  url: `${BASE_URL}/morocco-riads-guide`,
  image: `${BASE_URL}/images/hero-riads.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-riads-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Riads Guide', item: `${BASE_URL}/morocco-riads-guide` },
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
        text: 'A riad is a traditional Moroccan house or palace built around an interior courtyard garden. The word "riad" comes from the Arabic "ryad," meaning garden. Riads feature inward-facing architecture with thick walls, a central open-air courtyard often with a fountain or plunge pool, zellige tilework, carved plaster, and painted cedarwood ceilings. Many historic riads have been converted into boutique guesthouses offering an intimate alternative to hotels.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to stay in a riad in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riad prices vary widely by city, season, and luxury level. In Marrakech, budget riads start from 300 MAD per night, mid-range from 700 MAD, and luxury riads from 2,000 MAD. Fez riads are generally 20-30% cheaper. Essaouira and Chefchaouen offer good value with rooms from 250 MAD. High season (October-April) prices can be 30-50% higher than summer rates. Booking directly with the riad often saves 10-15% compared to platforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to stay in a riad or a hotel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riads offer a more authentic, intimate Moroccan experience with personalized service, traditional architecture, home-cooked breakfasts, and rooftop terraces. Hotels offer more standardized amenities like elevators, swimming pools, gyms, and room service. For first-time visitors, a riad in the medina is highly recommended for at least a few nights. Many travelers combine both: a riad in the medina for cultural immersion, then a hotel in the new city for modern comforts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a riad in the medina?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Finding your riad in the medina can be challenging since streets are narrow, often unnamed, and GPS is unreliable. Most riads offer a pickup service where staff meet you at a nearby landmark or taxi drop-off point and guide you on foot. Book this in advance, especially for evening arrivals. Share your arrival time with the riad. Some riads send WhatsApp location pins that help drivers get closer. A small tip of 20-30 MAD for the person who guides you is appreciated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do riads include breakfast?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most riads include a traditional Moroccan breakfast in the room price, typically served on the rooftop terrace or in the courtyard. Expect fresh-squeezed orange juice, mint tea, Moroccan msemen and baghrir pancakes, fresh bread, local honey, olive oil, amlou (argan spread), cheese, olives, eggs, and seasonal fruit. Riad breakfasts are often a highlight of the stay and far more generous than standard hotel continental breakfasts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I know about riad etiquette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Remove shoes before entering living areas and bedrooms (most riads provide babouche slippers). Keep noise levels low, especially after 22:00, as riads are intimate spaces. Ask before photographing staff or other guests. Dress modestly in common areas. Tipping the staff at the end of your stay is customary (from 50-100 MAD per day of your stay). If the riad has a hammam, follow the bathing protocol explained by staff. Respect the no-alcohol policy if applicable.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to book a riad in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the best availability and prices, book 2-3 months ahead for peak season (October to April, plus Easter and Christmas). Summer (June-August) offers lower prices and easier availability, though Marrakech can be extremely hot. Shoulder seasons (April-May and September-October) offer the best balance of pleasant weather and reasonable pricing. For New Year and major holidays, book 4-6 months ahead as popular riads sell out quickly.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD ARCHITECTURAL FEATURES
   ═══════════════════════════════════════════════════════════════ */

const architecturalFeatures = [
  {
    name: 'Central Courtyard',
    icon: Building,
    description:
      'The heart of every riad is its open-air courtyard, typically featuring a fountain, plunge pool, or garden with citrus and banana trees. The courtyard creates a microclimate, cooling the house naturally. Rooms open onto the courtyard from multiple levels, with balconies and galleries overlooking the central space.',
  },
  {
    name: 'Zellige Tilework',
    icon: Gem,
    description:
      'Hand-cut geometric mosaic tiles in vibrant colors adorn walls, floors, and fountains. Each piece is individually chiseled from glazed terracotta and assembled into intricate patterns. No two zellige installations are identical. Fez is the traditional center of zellige craftsmanship, with patterns dating back to the 10th century.',
  },
  {
    name: 'Carved Plaster (Gebs)',
    icon: Sparkles,
    description:
      'Intricate plaster carvings featuring arabesques, floral motifs, and calligraphy decorate walls and archways. Master craftsmen (maalems) carve wet plaster by hand using traditional tools. The finest examples rival lace in their delicacy, with layers of pattern creating dramatic shadow effects.',
  },
  {
    name: 'Painted Cedarwood',
    icon: Crown,
    description:
      'Ceilings, doors, and window frames are crafted from Atlas cedarwood, hand-painted with geometric and floral designs in gold, red, green, and blue. Cedar naturally repels insects and fills rooms with a subtle fragrance. Some riad ceilings took years to complete and are considered masterpieces of Moroccan decorative art.',
  },
  {
    name: 'Rooftop Terrace',
    icon: Star,
    description:
      'Nearly every riad has a rooftop terrace offering panoramic views over the medina. Furnished with loungers, shade sails, and potted plants, terraces serve as outdoor living rooms. Breakfast, sunset drinks, and evening meals are often served here with views of minarets and the Atlas Mountains in the distance.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD VS HOTEL COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const riadVsHotel = [
  { feature: 'Architecture', riad: 'Historic courtyard house with traditional craftsmanship', hotel: 'Modern building with standardized design' },
  { feature: 'Location', riad: 'Inside the medina, walking distance to souks', hotel: 'Often in ville nouvelle or outside the old city' },
  { feature: 'Room Count', riad: 'Typically 4-12 rooms, intimate atmosphere', hotel: '50-300+ rooms, more anonymous' },
  { feature: 'Breakfast', riad: 'Lavish Moroccan breakfast usually included', hotel: 'Continental or buffet, sometimes extra charge' },
  { feature: 'Service', riad: 'Personal, family-style attention from staff', hotel: 'Professional but less personalized' },
  { feature: 'Amenities', riad: 'Courtyard, rooftop terrace, often a hammam', hotel: 'Pool, gym, elevator, concierge, room service' },
  { feature: 'Accessibility', riad: 'Often no elevator, narrow stairs, hard to find', hotel: 'Wheelchair access, clear signage, taxi to door' },
  { feature: 'Privacy', riad: 'Shared courtyard spaces, thin walls possible', hotel: 'More insulated rooms, private facilities' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST RIADS IN MARRAKECH
   ═══════════════════════════════════════════════════════════════ */

const marrakechRiads = [
  {
    name: 'Budget: Riad Dar Zaman',
    area: 'Northern Medina',
    icon: DollarSign,
    price: 'From 350 MAD per night',
    highlights: ['Charming courtyard with plunge pool', 'Generous Moroccan breakfast included', 'Rooftop terrace with Atlas views', 'Walking distance to Jemaa el-Fna'],
    description:
      'A beautifully restored riad proving you do not need a large budget to experience traditional Moroccan hospitality. Simple but tasteful rooms, warm staff, and an unbeatable location near the main square.',
  },
  {
    name: 'Budget: Riad Laayoun',
    area: 'Derb Dabachi',
    icon: DollarSign,
    price: 'From 300 MAD per night',
    highlights: ['Authentic family-run atmosphere', 'Home-cooked dinners available', 'Traditional hammam nearby', 'Quiet location away from tourist crowds'],
    description:
      'A family-run gem tucked in a peaceful alley. The owners treat guests like family, sharing stories over mint tea and cooking traditional meals on request. Rooms are simple, clean, and decorated with Berber textiles.',
  },
  {
    name: 'Mid-Range: Riad BE Marrakech',
    area: 'Bab Doukkala',
    icon: Star,
    price: 'From 900 MAD per night',
    highlights: ['Contemporary Moroccan design', 'Heated plunge pool', 'In-house hammam and spa', 'Excellent restaurant with cooking classes'],
    description:
      'A stylish blend of modern comfort and Moroccan tradition. The Belgian-Moroccan owners have created a design-forward space with custom furniture, contemporary art, and impeccable service without pretension.',
  },
  {
    name: 'Mid-Range: Riad Kniza',
    area: 'Bab Doukkala',
    icon: Star,
    price: 'From 1,200 MAD per night',
    highlights: ['Museum-quality antiques throughout', 'Award-winning restaurant', 'Rooftop pool and spa', 'Collection of Berber art and textiles'],
    description:
      'An elegant riad filled with the owner personal collection of Moroccan art and antiques. Every room tells a story through its furnishings. The restaurant serves some of the finest traditional cuisine in the medina.',
  },
  {
    name: 'Luxury: Royal Mansour',
    area: 'Near Jemaa el-Fna',
    icon: Crown,
    price: 'From 8,000 MAD per night',
    highlights: ['Individual private riads for each guest', 'Three Michelin-worthy restaurants', 'Underground tunnel service network', 'Lavish spa with traditional hammam'],
    description:
      'Commissioned by King Mohammed VI, the Royal Mansour is a palace of 53 individual riads connected by garden paths and served via underground tunnels so staff are never visible. Each three-story riad features hand-crafted zellige, carved plaster, and painted cedarwood by master artisans.',
  },
  {
    name: 'Luxury: La Mamounia',
    area: 'Medina Wall',
    icon: Crown,
    price: 'From 5,000 MAD per night',
    highlights: ['Legendary palace hotel since 1929', 'Eight hectares of historic gardens', 'Multiple pools and world-class spa', 'Winston Churchill favorite retreat'],
    description:
      'More palace hotel than traditional riad, La Mamounia has hosted royalty, artists, and statesmen since 1929. Churchill painted in the gardens. Yves Saint Laurent was a regular. The recent renovation blends Art Deco glamour with Moroccan craftsmanship across 210 rooms and suites.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST RIADS IN FEZ
   ═══════════════════════════════════════════════════════════════ */

const fezRiads = [
  {
    name: 'Riad Fes',
    area: 'Fes el-Bali',
    price: 'From 1,500 MAD per night',
    description:
      'A luxurious riad with a rooftop restaurant offering sweeping views over the medina. Rooms feature museum-quality zellige and carved cedarwood. The bar, rare for a medina property, serves excellent Moroccan wines. Spa with traditional hammam on site.',
  },
  {
    name: 'Dar Roumana',
    area: 'Fes el-Bali',
    price: 'From 1,000 MAD per night',
    description:
      'A lovingly restored riad known for its exceptional cooking classes and rooftop dinners. Five uniquely designed rooms blend contemporary style with traditional craftsmanship. The pomegranate tree in the courtyard gives the riad its name.',
  },
  {
    name: 'Riad Laaroussa',
    area: 'Fes el-Bali',
    price: 'From 1,800 MAD per night',
    description:
      'A 17th-century palace with one of the largest private courtyards in the medina. Eight suites decorated with antique furnishings, a spectacular heated pool in the courtyard, and a hammam with traditional treatments. The riad hosted Moroccan royalty for centuries.',
  },
  {
    name: 'Dar Seffarine',
    area: 'Near Seffarine Square',
    price: 'From 400 MAD per night',
    description:
      'A charming budget option overlooking the famous coppersmiths square. Run by a passionate Moroccan-German couple, the riad offers simple rooms, communal meals, and genuine warmth. The rooftop terrace looks down on artisans hammering copper below.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RIADS IN ESSAOUIRA & CHEFCHAOUEN
   ═══════════════════════════════════════════════════════════════ */

const otherCityRiads = [
  {
    city: 'Essaouira',
    icon: Globe,
    riads: [
      {
        name: 'Riad Baoussala',
        price: 'From 600 MAD per night',
        description: 'A surfer-friendly riad with ocean-view terrace, stylish Scandinavian-Moroccan decor, and a prime location steps from the beach and ramparts.',
      },
      {
        name: 'Dar Adul',
        price: 'From 350 MAD per night',
        description: 'An intimate four-room riad with a cozy courtyard, home-cooked seafood dinners, and a warm family atmosphere in the heart of the old medina.',
      },
    ],
  },
  {
    city: 'Chefchaouen',
    icon: MapPin,
    riads: [
      {
        name: 'Lina Ryad & Spa',
        price: 'From 700 MAD per night',
        description: 'A blue-washed riad with panoramic mountain views, a heated pool, full spa with hammam, and rooms decorated in the distinctive blue-and-white Chefchaouen palette.',
      },
      {
        name: 'Dar Echchaouen',
        price: 'From 400 MAD per night',
        description: 'A family-run riad perched on the hillside with incredible Rif Mountain views from the terrace. Traditional rooms with handmade furniture and colorful Berber textiles.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO EXPECT AT A RIAD
   ═══════════════════════════════════════════════════════════════ */

const riadExperiences = [
  {
    name: 'Moroccan Breakfast',
    icon: Coffee,
    description:
      'Fresh-squeezed orange juice, mint tea, msemen (layered flatbread), baghrir (semolina pancakes), fresh bread, local honey, olive oil, amlou (argan and almond spread), cheese, olives, eggs, and seasonal fruit. Served on the rooftop terrace or in the courtyard, this generous spread is a daily highlight.',
  },
  {
    name: 'Rooftop Terrace Life',
    icon: Star,
    description:
      'The rooftop is where you will spend mornings watching the medina wake up, afternoons reading in the shade, and evenings watching the sunset over minarets. Many riads serve dinner here by candlelight. Some have plunge pools or hot tubs with panoramic views.',
  },
  {
    name: 'Hammam & Spa',
    icon: Sparkles,
    description:
      'Many riads have their own traditional hammam (steam bath) or can arrange visits to nearby public hammams. A typical session includes steam, black soap scrub with a kessa glove, rhassoul clay mask, and argan oil massage. Private hammam sessions start from 200 MAD.',
  },
  {
    name: 'Personal Concierge Service',
    icon: Users,
    description:
      'Riad staff serve as your personal guides to the city, arranging restaurant reservations, cooking classes, guided tours, airport transfers, and day trips. They know the medina intimately and can recommend hidden gems tourists rarely find. This personal touch is a defining riad advantage.',
  },
  {
    name: 'Evening Atmosphere',
    icon: Heart,
    description:
      'As the call to prayer echoes across the medina at sunset, riads transform into candlelit sanctuaries. Many offer traditional Moroccan dinners featuring multi-course meals with salads, tagines, couscous, and pastries. Some host live Gnaoua or Andalusian music on special evenings.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHOOSING THE RIGHT RIAD
   ═══════════════════════════════════════════════════════════════ */

const choosingTips = [
  { icon: MapPin, title: 'Location Matters', tip: 'Choose a riad within 10 minutes walk of key landmarks. In Marrakech, near Jemaa el-Fna or the souks. In Fez, near Bab Boujloud or Talaa Kebira. Too deep in the medina means difficult navigation, especially at night.' },
  { icon: CheckCircle, title: 'Read Recent Reviews', tip: 'Check reviews from the past 3 months. Riads change management frequently. A riad that was excellent a year ago may have declined. Look specifically for comments about cleanliness, breakfast quality, and staff helpfulness.' },
  { icon: BedDouble, title: 'Room Selection', tip: 'Ground floor rooms near the courtyard are cooler but may have fountain noise at night. Upper floor rooms are warmer, brighter, and often have balcony views. Corner rooms tend to be quieter. Request specific rooms when booking.' },
  { icon: Wifi, title: 'Modern Amenities', tip: 'Not all riads have strong WiFi, air conditioning, or hot water pressure. Ask in advance if these matter to you. Older riads in Fez may have inconsistent plumbing. Many luxury riads now offer international power outlets and smart TVs.' },
  { icon: ShieldCheck, title: 'Safety & Access', tip: 'Confirm the riad offers airport transfer or a pickup from a nearby landmark. Narrow medina streets are not accessible by car. If you have mobility issues, ask about stairs since most riads are multi-level without elevators.' },
  { icon: Key, title: 'Direct Communication', tip: 'Contact the riad directly via email or WhatsApp before booking. Ask about room photos, special requests, and arrival logistics. Responsive communication before booking is a strong indicator of service quality during your stay.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Direct for Better Rates',
    icon: DollarSign,
    description: 'Many riads offer 10-15% discounts when you book directly through their website or WhatsApp instead of platforms like Booking.com or Airbnb. Direct booking also ensures your special requests reach the right person and gives the riad a larger share of the revenue.',
  },
  {
    title: 'Best Time to Book',
    icon: Calendar,
    description: 'For peak season (October-April), book 2-3 months ahead. Christmas, New Year, and Easter require 4-6 months notice for popular riads. Summer offers last-minute deals as demand drops, though Marrakech temperatures can exceed 40 degrees Celsius.',
  },
  {
    title: 'Platform Comparison',
    icon: Globe,
    description: 'Booking.com has the widest riad selection and free cancellation options. Airbnb often features entire riads for groups. Tripadvisor is best for reading verified reviews. Specialist sites like i-escape.com and Mr & Mrs Smith curate luxury riads specifically.',
  },
  {
    title: 'Cancellation Policies',
    icon: ShieldCheck,
    description: 'Direct bookings typically require a deposit of 30-50% and offer refunds up to 7-14 days before arrival. Platform bookings vary: some offer free cancellation up to 24 hours before. Always confirm the policy in writing before paying, and consider travel insurance for expensive bookings.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE RANGES BY CITY
   ═══════════════════════════════════════════════════════════════ */

const priceRanges = [
  {
    city: 'Marrakech',
    budget: 'From 300 MAD',
    midRange: 'From 700 MAD',
    luxury: 'From 2,000 MAD',
    peak: 'October - April',
    note: 'Most expensive city for riads. Book ahead for peak season.',
  },
  {
    city: 'Fez',
    budget: 'From 250 MAD',
    midRange: 'From 600 MAD',
    luxury: 'From 1,500 MAD',
    peak: 'March - May, September - November',
    note: 'Better value than Marrakech with equally stunning architecture.',
  },
  {
    city: 'Essaouira',
    budget: 'From 250 MAD',
    midRange: 'From 500 MAD',
    luxury: 'From 1,200 MAD',
    peak: 'June - September',
    note: 'Peak in summer when the coast is cooler. Great off-season deals.',
  },
  {
    city: 'Chefchaouen',
    budget: 'From 200 MAD',
    midRange: 'From 450 MAD',
    luxury: 'From 1,000 MAD',
    peak: 'April - June, September - October',
    note: 'Most affordable riad city. Prices rise during spring and autumn.',
  },
  {
    city: 'Rabat',
    budget: 'From 300 MAD',
    midRange: 'From 650 MAD',
    luxury: 'From 1,500 MAD',
    peak: 'Year-round (business travel)',
    note: 'Fewer tourist riads but excellent quality. Steady prices year-round.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CONVERTED PALACE RIADS
   ═══════════════════════════════════════════════════════════════ */

const palaceRiads = [
  {
    name: 'El Fenn',
    city: 'Marrakech',
    history: 'A sprawling complex of interconnected riads transformed by Vanessa Branson into one of Marrakech\'s most celebrated boutique hotels. Three courtyards, a contemporary art collection, rooftop pool, cinema room, and a hammam.',
    price: 'From 3,000 MAD per night',
  },
  {
    name: 'Palais Amani',
    city: 'Fez',
    history: 'A grand 17th-century palace meticulously restored with original zellige, marble fountains, and an Andalusian garden. The riad houses a perfume workshop where guests create their own Moroccan scent from local ingredients.',
    price: 'From 2,000 MAD per night',
  },
  {
    name: 'Riad Jardin Secret',
    city: 'Marrakech',
    history: 'Built by a powerful Saadian dynasty vizier in the 16th century, this palace passed through noble families before its painstaking restoration. The Islamic garden channels water through four quadrants, echoing the paradise gardens described in the Quran.',
    price: 'From 2,500 MAD per night',
  },
  {
    name: 'Dar Adiyel',
    city: 'Fez',
    history: 'An 18th-century merchant palace near the Kairaouine Mosque, restored with traditional techniques. Features original carved cedarwood ceilings, a marble hammam, and a secret rooftop pavilion with 360-degree medina views.',
    price: 'From 1,800 MAD per night',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  { icon: Home, rule: 'Remove shoes before entering rooms', detail: 'Most riads provide traditional babouche slippers at the entrance. Leave outdoor shoes at the door.' },
  { icon: Clock, rule: 'Respect quiet hours after 22:00', detail: 'Riads are intimate spaces with shared walls. Keep conversations low and music silent in the evenings.' },
  { icon: Users, rule: 'Dress modestly in common areas', detail: 'Cover shoulders and knees when in the courtyard, dining room, and rooftop. Swimwear only at the pool.' },
  { icon: Heart, rule: 'Tip the staff generously', detail: 'From 50-100 MAD per day of your stay, left in an envelope at checkout. Distributed among all staff.' },
  { icon: Coffee, rule: 'Accept tea when offered', detail: 'Mint tea is a gesture of welcome. Declining can be seen as impolite. At least take a small sip.' },
  { icon: Info, rule: 'Ask before photographing', detail: 'Staff and other guests appreciate being asked first. Many riads also restrict social media photography in certain areas.' },
  { icon: Key, rule: 'Communicate your schedule', detail: 'Let the riad know your dinner plans, arrival time, and any dietary needs. This helps them prepare and avoids wasted food.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRiadsGuidePage() {
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
            backgroundImage: 'url(/images/hero-riads.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Riads Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Building className="w-4 h-4" />
            Accommodation Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Riads in Morocco:
            <br className="hidden md:block" /> Traditional Stays &amp; Booking Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover the magic of staying in a traditional Moroccan riad. From courtyard
            gardens and rooftop terraces to hand-crafted zellige and candlelit dinners.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: What is a Riad? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Riad? Understanding Morocco&apos;s Iconic Architecture
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A riad (from the Arabic &quot;ryad,&quot; meaning garden) is a traditional Moroccan
                house or palace built around an interior courtyard garden. Unlike Western architecture
                that faces outward, riads turn inward: plain exterior walls hide breathtaking interiors
                of zellige tilework, carved plaster, painted cedarwood, and lush gardens. This design
                reflects Islamic values of privacy and modesty, creating an oasis of calm behind the
                bustling medina streets.
              </p>
              <p>
                Riads date back to the Marinid dynasty in the 12th century and reached their artistic
                peak under the Saadians in the 16th century. Wealthy merchants, scholars, and nobles
                built increasingly elaborate riads, each courtyard a private paradise with fountains,
                fruit trees, and songbirds. The most magnificent became small palaces with multiple
                courtyards, hammams, and reception halls.
              </p>
              <p>
                In the late 20th century, many abandoned medina riads were discovered by European
                buyers who restored them into boutique guesthouses. Today, Morocco has thousands
                of riad guesthouses ranging from simple family-run homes to palatial five-star
                retreats. Staying in a riad is widely considered the most authentic way to experience
                Moroccan culture, architecture, and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architectural Features ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Architecture: Five Defining Features
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Centuries of craftsmanship create living works of art. Here is what makes riad architecture unique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architecturalFeatures.map((feat) => (
              <div key={feat.name} className="card-moroccan p-6">
                <feat.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {feat.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riad vs Hotel Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Riad vs Hotel: Which Should You Choose?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both have their place. Here is a side-by-side comparison to help you decide.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Feature</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Riad</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Hotel</th>
                  </tr>
                </thead>
                <tbody>
                  {riadVsHotel.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.feature}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.riad}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.hotel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 card-moroccan p-5 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <p className="text-sm text-[var(--text-secondary)]">
              <Info className="w-4 h-4 inline-block text-[var(--color-accent)] mr-1" />
              <strong>Our recommendation:</strong> Stay in a riad for at least two to three nights to fully appreciate the
              experience. Many travelers combine a medina riad with a modern hotel in the ville nouvelle
              or a resort outside the city for the best of both worlds.
            </p>
          </div>
        </div>
      </section>

      {/* ── Best Riads in Marrakech ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From charming budget finds to palatial five-star retreats. Seasonal pricing can change, so always confirm rates directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marrakechRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <riad.icon className="w-8 h-8 text-[var(--color-accent)]" />
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {riad.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">{riad.area}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{riad.description}</p>
                <ul className="space-y-1 mb-3">
                  {riad.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-[var(--color-accent)]">{riad.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Riads in Fez ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Fez
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fez&apos;s medina is a UNESCO World Heritage Site, and its riads showcase the finest examples of
            Moroccan craftsmanship. Prices are generally more accessible than Marrakech.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fezRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {riad.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-3">
                  <MapPin className="w-3 h-3 inline-block mr-1" />{riad.area}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{riad.description}</p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">{riad.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essaouira & Chefchaouen Riads ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Riads in Essaouira &amp; Chefchaouen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCityRiads.map((city) => (
              <div key={city.city}>
                <div className="flex items-center gap-2 mb-4">
                  <city.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                </div>
                <div className="space-y-4">
                  {city.riads.map((riad) => (
                    <div key={riad.name} className="card-moroccan p-5">
                      <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {riad.name}
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] mb-2 leading-relaxed">{riad.description}</p>
                      <p className="text-sm font-semibold text-[var(--color-accent)]">{riad.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect at a Riad ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect at a Moroccan Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A riad stay is an immersive experience, not just a place to sleep. Here is what makes it special.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riadExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-6">
                <exp.icon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {exp.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Choose the Right Riad ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            How to Choose the Right Riad
          </h2>
          <div className="space-y-4">
            {choosingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                <tip.icon className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
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
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips: Direct vs Platforms
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Smart booking strategies can save you money and guarantee a better experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <tip.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riad Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Etiquette &amp; Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect the traditions of your hosts and you will be rewarded with genuine Moroccan warmth.
          </p>
          <div className="space-y-3">
            {etiquetteRules.map((rule) => (
              <div key={rule.rule} className="card-moroccan p-5 flex gap-4">
                <rule.icon className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {rule.rule}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{rule.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Ranges by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Prices by City &amp; Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Prices are per room per night and can vary based on seasonal demand. Always confirm directly with the riad.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">City</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Budget</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Mid-Range</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Luxury</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Peak Season</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRanges.map((row, idx) => (
                    <tr key={row.city} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.city}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.budget}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.midRange}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.luxury}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.peak}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-[var(--text-secondary)] text-center mt-4">
            Prices are approximate and reflect 2025-2026 rates. Seasonal pricing can change without notice.
            Rates typically include breakfast. During Ramadan and national holidays, availability may be limited.
          </p>
        </div>
      </section>

      {/* ── Converted Palace Riads ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Converted Palace Riads &amp; Historic Properties
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For a once-in-a-lifetime stay, these historic palaces have been transformed into extraordinary
            accommodations where you sleep surrounded by centuries of Moroccan art and craftsmanship.
          </p>
          <div className="space-y-6">
            {palaceRiads.map((palace) => (
              <div key={palace.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {palace.name}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-[var(--color-gold)]/10 text-[var(--color-gold)] rounded-full font-semibold">
                    {palace.city}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{palace.history}</p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">{palace.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Riad Experience in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-riads.webp', alt: 'Traditional Moroccan riad courtyard with zellige fountain and lush garden plants', label: 'Riad Courtyard' },
              { src: '/images/art-moroccan-hammam.webp', alt: 'Traditional hammam steam bath interior with marble and warm lighting in a Moroccan riad', label: 'Traditional Hammam' },
              { src: '/images/art-moroccan-breakfast.webp', alt: 'Generous Moroccan breakfast spread with mint tea, pastries and fresh fruit on a riad rooftop', label: 'Rooftop Breakfast' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a riad in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A riad is a traditional Moroccan house or palace built around an interior courtyard garden.
                The word comes from the Arabic &quot;ryad,&quot; meaning garden. Riads feature inward-facing
                architecture with zellige tilework, carved plaster, painted cedarwood ceilings, and a central
                open-air courtyard often with a fountain or plunge pool. Many have been converted into boutique
                guesthouses offering an intimate alternative to standard hotels.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to stay in a riad in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Prices vary by city, season, and luxury level. In Marrakech, budget riads start from 300 MAD
                per night, mid-range from 700 MAD, and luxury from 2,000 MAD. Fez is 20-30% cheaper. Essaouira
                and Chefchaouen offer rooms from 250 MAD. Peak season (October-April) prices can be 30-50%
                higher. Booking directly often saves 10-15% compared to online platforms.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it better to stay in a riad or a hotel?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Riads offer a more authentic experience with personalized service, traditional architecture,
                home-cooked breakfasts, and rooftop terraces. Hotels provide standardized amenities like
                elevators, swimming pools, gyms, and room service. For first-time visitors, a riad in the
                medina is highly recommended. Many travelers combine both for the best of each.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I find my riad in the medina?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Medina streets are narrow, unnamed, and GPS is unreliable. Most riads offer a pickup service
                where staff meet you at a nearby landmark. Book this in advance and share your arrival time.
                Some riads send WhatsApp location pins. A small tip of 20-30 MAD for the person guiding you
                through the medina is customary.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do riads include breakfast?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most riads include a traditional Moroccan breakfast served on the rooftop terrace or in the
                courtyard. Expect fresh-squeezed orange juice, mint tea, msemen and baghrir pancakes, fresh
                bread, local honey, olive oil, amlou (argan spread), cheese, olives, eggs, and seasonal fruit.
                Riad breakfasts are often a highlight and far more generous than hotel continental offerings.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I know about riad etiquette?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Remove shoes before entering rooms (babouche slippers are provided). Keep noise low after 22:00.
                Dress modestly in common areas. Tipping staff is customary (from 50-100 MAD per day). Accept
                mint tea when offered. Ask before photographing staff or other guests. Communicate your schedule
                and dietary needs so the riad can prepare accordingly.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time to book a riad?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Book 2-3 months ahead for peak season (October-April) and 4-6 months for Christmas, New Year,
                and Easter. Summer offers lower prices and easier last-minute availability, though Marrakech
                can be extremely hot. Shoulder seasons (April-May and September-October) offer the best balance
                of weather and pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need for exploring the Red City, from Jemaa el-Fna to the souks and beyond.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fez" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fez City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the world&apos;s largest car-free urban area with our guide to Fez&apos;s medina, tanneries, and culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, etiquette, social norms, and cultural insights for a respectful and enriching visit.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco on any budget with tips on accommodation, transport, food, and activities.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience a Moroccan Riad?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From intimate courtyard gardens to palatial converted mansions, a riad stay is the heart
            of any Morocco trip. Start planning your unforgettable Moroccan accommodation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/fez"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Landmark className="w-5 h-5" />
              Discover Fez
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
