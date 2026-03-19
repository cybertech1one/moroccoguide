import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Music,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Sparkles,
  Globe,
  BookOpen,
  Users,
  AlertTriangle,
  Footprints,
  Palette,
  Bath,
  Eye,
  Building,
  Waves,
  Wine,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Top 22 Things to Do in Casablanca 2026 | Ultimate Guide',
  description:
    'Discover the best things to do in Casablanca in 2026. From the Hassan II Mosque and Art Deco downtown to the Corniche, Rick\'s Cafe, seafood at the port, and day trips to Rabat and El Jadida. Complete guide with prices, insider tips, and local secrets.',
  keywords: [
    'things to do in Casablanca',
    'Casablanca attractions',
    'what to do in Casablanca',
    'Casablanca sightseeing',
    'Hassan II Mosque',
    'Casablanca Corniche',
    'Rick\'s Cafe Casablanca',
    'Morocco Mall',
    'Casablanca Old Medina',
    'Habous Quarter',
    'Art Deco Casablanca',
    'Ain Diab beach',
    'Villa des Arts Casablanca',
    'Casablanca nightlife',
    'Casablanca seafood',
    'Casablanca day trips',
    'Rabat day trip',
    'El Jadida day trip',
    'Casablanca 2026',
    'best Casablanca experiences',
    'Casablanca travel guide',
    'Casablanca shopping',
  ],
  openGraph: {
    title: 'Top 22 Things to Do in Casablanca 2026 | Ultimate Guide',
    description:
      'The complete guide to Casablanca attractions, activities, and experiences. Iconic mosque, Art Deco architecture, beaches, nightlife, food, shopping, and day trips with prices in MAD.',
    url: `${BASE_URL}/things-to-do-casablanca`,
    images: [
      {
        url: `${BASE_URL}/images/hero-casablanca.webp`,
        width: 1200,
        height: 630,
        alt: 'Hassan II Mosque in Casablanca standing majestically at the edge of the Atlantic Ocean at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 22 Things to Do in Casablanca 2026',
    description:
      'Hassan II Mosque, Corniche, Old Medina, Art Deco downtown, Rick\'s Cafe, seafood, beaches, nightlife, and more. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-casablanca.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-casablanca` },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-casablanca`,
  name: 'Top 22 Things to Do in Casablanca 2026 | Ultimate Guide',
  description:
    'Discover the best things to do in Casablanca in 2026. From the Hassan II Mosque and Art Deco downtown to the Corniche, seafood, nightlife, and day trips.',
  url: `${BASE_URL}/things-to-do-casablanca`,
  image: `${BASE_URL}/images/hero-casablanca.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/things-to-do-casablanca`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Casablanca',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Casablanca', item: `${BASE_URL}/casablanca` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-casablanca` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the top things to do in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top things to do in Casablanca include visiting the Hassan II Mosque (from 130 MAD), walking the Corniche beachfront promenade, exploring the Art Deco architecture downtown, dining at Rick\'s Cafe, shopping at Morocco Mall, exploring the Old Medina, eating seafood at the port, visiting the Habous Quarter, relaxing at Ain Diab beach, and experiencing the nightlife scene.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most travelers find 2-3 days ideal for Casablanca. Day 1: Hassan II Mosque, Old Medina, Art Deco downtown, and the Central Market. Day 2: Habous Quarter, Villa des Arts, Corniche, and Ain Diab beach. Day 3: Day trip to Rabat or El Jadida. With just one day, focus on the mosque, Corniche, and a seafood lunch at the port.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Casablanca worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. While many tourists skip Casablanca for Marrakech or Fes, the city offers the Hassan II Mosque (one of the world\'s most spectacular), stunning Art Deco architecture, the best seafood in Morocco, vibrant nightlife, and a cosmopolitan atmosphere unlike anywhere else in the country. It is the real, modern Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Casablanca is April to June and September to November, when temperatures are pleasant (18-26 degrees Celsius) and the Atlantic breeze keeps the city comfortable. Summer (July-August) can be hot inland but the coast stays moderate. Winter (December-February) is mild but rainy. The coastal location means Casablanca is never as extreme as inland cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Casablanca expensive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca is Morocco\'s most expensive city, but still very affordable by international standards. Street food costs from 15-40 MAD, a seafood restaurant meal from 80-200 MAD, and the Hassan II Mosque tour from 130 MAD. Budget travelers can enjoy Casablanca on from 400-600 MAD per day, while mid-range travelers spend from 1,000-2,000 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do day trips from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, excellent day trips from Casablanca include Rabat (1 hour by train, from 40 MAD), El Jadida and its Portuguese cistern (1.5 hours, from 60 MAD by bus), Mohammedia for beaches (30 minutes, from 15 MAD), and Azemmour for its painted medina (1.5 hours). The train network makes Rabat particularly easy and affordable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Hassan II Mosque open to non-Muslims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Hassan II Mosque is one of the very few mosques in Morocco open to non-Muslim visitors. Guided tours run at specific times (typically 9 AM, 10 AM, 11 AM, and 2 PM) outside of prayer times. Entry costs from 130 MAD for adults. The tour lasts about one hour and covers the main prayer hall, ablution rooms, and hammam.',
      },
    },
  ],
};

/* ===================================================================
   DATA: ICONIC LANDMARKS
   =================================================================== */

const iconicLandmarks = [
  {
    name: 'Hassan II Mosque',
    icon: Landmark,
    category: 'Iconic Landmark',
    price: 'From 130 MAD',
    duration: '1.5-2 hours',
    bestTime: 'Morning (9 AM tour)',
    description:
      'The largest mosque in Africa and third largest in the world, with the tallest minaret on earth at 210 meters. Built on a promontory over the Atlantic Ocean, it accommodates 25,000 worshippers inside and 80,000 in the courtyard. Completed in 1993 by 10,000 artisans, it features a retractable roof, heated floors, laser beams pointing toward Mecca, hand-carved marble, zellige tilework, painted cedar ceilings, and granite columns.',
    insiderTip:
      'Book the earliest tour (9 AM) for best light and smallest crowds. Dress modestly (covered shoulders and knees). The exterior esplanade is free to enjoy at sunset when the minaret glows against the Atlantic sky.',
  },
  {
    name: 'Corniche Ain Diab',
    icon: Waves,
    category: 'Beachfront Promenade',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Late afternoon / sunset',
    description:
      'Casablanca\'s glamorous beachfront boulevard stretching along the Atlantic coast from the Hassan II Mosque toward Ain Diab. Lined with beach clubs, restaurants, cafes, and palm trees, it is where Casablancais promenade, jog, swim, and see and be seen. At sunset the entire stretch turns golden. Beach clubs offer pools, loungers, and food from around 150 MAD per day.',
    insiderTip:
      'Walk from the Hassan II Mosque heading west — the 3-kilometer stretch is the most scenic walk in the city. Beach clubs charge from 100-200 MAD for day access. For free beach time, continue past the clubs to the public stretches of Ain Diab.',
  },
  {
    name: 'Old Medina (Ancienne Medina)',
    icon: Globe,
    category: 'Historic Quarter',
    price: 'Free',
    duration: '1.5-2 hours',
    bestTime: 'Morning',
    description:
      'Compact, authentic, and refreshingly free of tourist pressure. Enclosed by remnants of 18th-century walls near the port, this labyrinth of narrow streets houses local shops, spice vendors, fabric merchants, and craftspeople. The Sqala bastion, a restored 18th-century Portuguese fortification, has a popular cafe-restaurant with a garden courtyard and port views.',
    insiderTip:
      'Start at the Sqala for coffee in the garden courtyard (from 40 MAD). The medina streets are genuinely local — you will likely be the only tourist. Small enough that you cannot get lost. Fabric and textiles here are priced for locals, not tourists.',
  },
  {
    name: 'Art Deco Architecture Walk',
    icon: Building,
    category: 'Architecture & Culture',
    price: 'Free',
    duration: '2-3 hours',
    bestTime: 'Morning',
    description:
      'Casablanca has the largest collection of Art Deco architecture in Africa, with over 500 buildings from the 1920s-1940s French colonial period. The downtown core around Boulevard Mohammed V features facades blending Moorish geometric patterns with Art Deco, Art Nouveau, and Neo-Mauresque styles. Key buildings include the Wilaya, Cinema Rialto, Hotel Lincoln, Immeuble Bessoneau, and the magnificent Sacre-Coeur Cathedral.',
    insiderTip:
      'The best stretch is Boulevard Mohammed V from Place des Nations Unies to the Marche Central. Look up constantly — the most beautiful details are on upper floors. The Sacre-Coeur Cathedral (1930) is a masterpiece of Neo-Gothic and Mauresque fusion, free to enter.',
  },
];

/* ===================================================================
   DATA: CULTURE & ENTERTAINMENT
   =================================================================== */

const cultureExperiences = [
  {
    name: 'Rick\'s Cafe',
    icon: Wine,
    category: 'Cinema & Dining',
    price: 'From 150 MAD (dinner)',
    duration: '1.5-2 hours',
    bestTime: 'Evening',
    description:
      'Inspired by the 1942 film, Rick\'s Cafe is a beautifully recreated version of the movie\'s fictional bar in a restored 1930s courtyard riad near the Old Medina. The interior features a piano bar, curved arches, brass lamps, and balcony seating faithfully recreating the film\'s atmosphere. Moroccan and international cuisine with live piano music nightly. Unabashedly touristy but superbly executed.',
    insiderTip:
      'Reservations essential for dinner. The set menu from 250 MAD offers excellent value. For a more affordable visit, come for drinks at the piano bar (cocktails from 80 MAD). Dress smart casual.',
  },
  {
    name: 'Villa des Arts',
    icon: Palette,
    category: 'Contemporary Art',
    price: 'From 20 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Any time',
    description:
      'Housed in a restored 1934 Art Deco villa, this is Casablanca\'s premier contemporary art space with rotating exhibitions of Moroccan and international art, photography, and sculpture. The building — clean lines, rounded balconies, geometric windows — is itself a work of art. The garden hosts concerts and cultural events.',
    insiderTip:
      'Check the exhibition schedule online before visiting. Combine with shopping in nearby Maarif, which has Casablanca\'s best independent boutiques. The building is a prime example of 1930s Moroccan Art Deco.',
  },
  {
    name: 'Habous Quarter (Nouvelle Medina)',
    icon: MapPin,
    category: 'Historic Quarter & Shopping',
    price: 'Free',
    duration: '1.5-2 hours',
    bestTime: 'Morning',
    description:
      'Built by the French in the 1930s as a "model medina," the Habous Quarter is a charming neighborhood of arched walkways, terracotta buildings, and specialized souks. Highlights include the olive souk, legendary pastry shops, book market, and fabric stores. The Mahkama du Pacha, an ornate courthouse with stunning craftsmanship, is here alongside the Royal Palace (exterior only).',
    insiderTip:
      'The pastry shops are legendary — try cornes de gazelle and chebakia at the arcade bakeries (from 5 MAD per piece). The Mahkama du Pacha interior has astonishing zellige — ask the guard politely if you can look inside (tip from 20 MAD). The book market sells antique Moroccan texts.',
  },
  {
    name: 'Casablanca Nightlife',
    icon: Music,
    category: 'Entertainment',
    price: 'From 50-200 MAD (drinks)',
    duration: 'Evening / Night',
    bestTime: 'Thursday-Saturday nights',
    description:
      'Casablanca has Morocco\'s most vibrant nightlife — rooftop bars, cocktail lounges, live music, and nightclubs rivaling European capitals. Sky 28 at the Twin Center offers panoramic cocktails, Le Cabestan serves dinner with Atlantic waves crashing below, and clubs like Le Studio and White keep the energy going until dawn.',
    insiderTip:
      'Nightlife starts late — clubs do not get busy until midnight. Dress well, especially for upscale venues with dress codes. Corniche has the flashiest clubs; Maarif and Gauthier have more relaxed bars. Thursday and Friday are busiest. Budget from 80-150 MAD per cocktail.',
  },
];

/* ===================================================================
   DATA: FOOD & SEAFOOD
   =================================================================== */

const foodExperiences = [
  {
    name: 'Seafood at the Port (La Sqala & Port Restaurants)',
    icon: UtensilsCrossed,
    category: 'Seafood & Dining',
    price: 'From 60 MAD',
    duration: '1.5-2 hours',
    description:
      'Casablanca is Morocco\'s seafood capital. Port restaurants serve grilled sardines, sea bream, sole, prawns, lobster, oysters, and fish tagine — all pulled from the Atlantic that morning. Choose your fish from the display, have it grilled with chermoula marinade, and eat with fresh bread and harissa.',
    insiderTip:
      'Head to the Port de Peche restaurants. Point to your fish and negotiate price by weight. A full grilled fish meal starts from 60 MAD at port stalls versus from 200 MAD on the Corniche for the same quality.',
  },
  {
    name: 'Central Market (Marche Central)',
    icon: ShoppingBag,
    category: 'Food Market & Dining',
    price: 'Free to explore / From 40 MAD to eat',
    duration: '1-1.5 hours',
    description:
      'A covered Art Deco market in downtown Casablanca selling the freshest produce, seafood, olives, spices, and flowers. The seafood stalls are spectacular — mountains of shrimp, sea urchins, oysters, and fish on beds of ice. Small restaurants inside cook seafood to order at market prices.',
    insiderTip:
      'Visit before noon for freshest selection. Market restaurants cook any seafood you buy from adjacent stalls for a cooking fee (from 20-30 MAD). Fresh oysters cost from 30-50 MAD per dozen. The building itself is Art Deco — admire the structure.',
  },
  {
    name: 'Moroccan Street Food Tour',
    icon: Footprints,
    category: 'Culinary Walking Tour',
    price: 'From 300 MAD (guided) / Free (self-guided)',
    duration: '3-4 hours',
    description:
      'Casablanca\'s street food blends Moroccan tradition with cosmopolitan influences. Explore Derb Sultan, Maarif, and medina neighborhoods for bocadillos, msemen with honey, harira soup, grilled kefta, fresh juices, and sfenj (Moroccan doughnuts). The city also has shawarma, pizza, and fusion dishes reflecting its diverse population.',
    insiderTip:
      'Self-guided food walk: Old Medina breakfast (msemen from 10 MAD), Marche Central seafood (from 40 MAD), Habous Quarter pastries (from 50 MAD), evening street food in Derb Sultan. Maarif has the best mix of traditional and modern food.',
  },
  {
    name: 'Le Cabestan & Upscale Dining',
    icon: Star,
    category: 'Fine Dining',
    price: 'From 300-800 MAD per person',
    duration: '2-3 hours',
    description:
      'Morocco\'s most sophisticated dining scene. Le Cabestan perches on Atlantic rocks serving French-Moroccan cuisine with waves crashing below. La Sqala offers refined Moroccan dishes in a fortress garden. Basmane in Maarif delivers modern Moroccan fusion. A world apart from tourist menus elsewhere.',
    insiderTip:
      'Reserve Le Cabestan for sunset — the terrace view is unforgettable (mains from 200 MAD). La Sqala\'s garden serves traditional dishes beautifully (mains from 100 MAD). Lunch menus are 30-40% cheaper than dinner.',
  },
];

/* ===================================================================
   DATA: SHOPPING & BEACHES
   =================================================================== */

const shoppingAndBeaches = [
  {
    name: 'Morocco Mall',
    icon: ShoppingBag,
    category: 'Shopping & Entertainment',
    price: 'Free entry / Aquarium from 60 MAD',
    duration: '2-4 hours',
    bestTime: 'Afternoon',
    description:
      'Africa\'s largest shopping mall with over 600 stores, a massive aquarium with a million liters of seawater, IMAX cinema, ice rink, and adventure park. International luxury brands sit alongside Moroccan designers. The mall sits directly on the Corniche with ocean views from upper terraces.',
    insiderTip:
      'The aquarium (from 60 MAD) is genuinely impressive. Top-floor restaurants have ocean views. The Moroccan craft section offers fixed-price souvenirs — good for those who dislike haggling. Visit weekday mornings to avoid weekend crowds.',
  },
  {
    name: 'Ain Diab Beach',
    icon: Waves,
    category: 'Beach & Leisure',
    price: 'Free (public) / From 100 MAD (beach club)',
    duration: '3-6 hours',
    bestTime: 'June-September',
    description:
      'Casablanca\'s most popular beach district west of the Corniche. A wide sandy stretch with Atlantic waves drawing surfers and bodyboarders. Beach clubs offer pools, loungers, and food service. Public areas are free and lively on summer weekends. Water can be chilly (18-22 degrees) due to Atlantic currents.',
    insiderTip:
      'Beach clubs (from 100-200 MAD day pass) offer warmer pool water plus food. For surfing, the break near the lighthouse works best at mid-tide. Visit weekdays to avoid weekend crowds. Sunsets from Ain Diab are spectacular.',
  },
  {
    name: 'Maarif & Derb Ghallef Shopping',
    icon: ShoppingBag,
    category: 'Shopping Districts',
    price: 'Free to explore',
    duration: '2-3 hours',
    bestTime: 'Morning to afternoon',
    description:
      'The Maarif district is Casablanca\'s trendy shopping neighborhood, home to Moroccan fashion designers, independent boutiques, international brands, bookshops, and excellent restaurants. For a completely different experience, the nearby Derb Ghallef market is one of the largest flea markets in Africa — a sprawling open-air maze selling everything from electronics and clothing to vintage furniture and obscure vinyl records at rock-bottom prices.',
    insiderTip:
      'Boulevard Bir Anzarane and Rue Abou Alaa Maarri in Maarif have the best independent boutiques and Moroccan fashion designers. For local designer kaftans and modern Moroccan fashion, this is where Casablancais shop. Derb Ghallef is chaotic but fascinating — go with a local if possible and keep valuables secure. Prices at Derb Ghallef are already very low but still negotiable.',
  },
];

/* ===================================================================
   DATA: DAY TRIPS
   =================================================================== */

const dayTrips = [
  {
    name: 'Rabat Day Trip',
    icon: Landmark,
    category: 'Day Trip / Capital City',
    price: 'From 40 MAD (train)',
    duration: 'Full day',
    description:
      'Morocco\'s elegant capital city is just one hour from Casablanca by the excellent Al Boraq high-speed train. Rabat offers the stunning Hassan Tower and Mohammed V Mausoleum, the Kasbah des Oudaias (a photogenic blue-and-white clifftop kasbah overlooking the Atlantic), the Chellah necropolis with its Roman and medieval ruins, and a relaxed medina with significantly less tourist pressure than Marrakech or Fes. The wide tree-lined boulevards and coastal setting make it one of Morocco\'s most pleasant cities.',
    insiderTip:
      'Take the Al Boraq high-speed train from Casa-Voyageurs station (from 40 MAD, 1 hour, frequent departures). Start at the Kasbah des Oudaias for its blue-washed streets and ocean views, visit the Hassan Tower, walk through the medina, and end at the Chellah at sunset. The Rabat medina carpet souk has excellent quality at lower prices than Fes or Marrakech.',
  },
  {
    name: 'El Jadida Day Trip',
    icon: Globe,
    category: 'Day Trip / UNESCO',
    price: 'From 60 MAD (bus)',
    duration: 'Full day',
    description:
      'The UNESCO-listed Portuguese city of El Jadida, 1.5 hours south of Casablanca, is home to the remarkable Cite Portugaise — a 16th-century Portuguese fortified town with the extraordinary underground cistern (Citerne Portugaise) famously used in the Orson Welles film Othello. The cistern\'s stone columns reflected in shallow water create one of the most photographed interiors in Morocco. The town also has a beautiful beach, rampart walks with ocean views, and a lively medina.',
    insiderTip:
      'The Portuguese Cistern (from 20 MAD) is the star attraction — visit when sunlight filters through the roof opening for the most dramatic light (around 11 AM). Walk the ramparts for views over the Atlantic. The town beach is excellent and far less crowded than Casablanca. CTM and Supratours buses run from Casablanca (from 60 MAD, 1.5 hours). This is an easy half-day trip if you start early.',
  },
  {
    name: 'Mohammedia Beach Escape',
    icon: Waves,
    category: 'Day Trip / Beach',
    price: 'From 15 MAD (train)',
    duration: 'Half day to full day',
    description:
      'Just 30 minutes north of Casablanca by train, Mohammedia is a relaxed coastal town with some of the best beaches near the city. The wide sandy beach is cleaner and less crowded than Casablanca\'s, with calmer waters suitable for families. The town has a pleasant corniche, a small kasbah, a yacht marina, and excellent seafood restaurants. The golf course (Royal Golf de Mohammedia) is one of the oldest in Morocco.',
    insiderTip:
      'Take the local train from Casa-Port station (from 15 MAD, departures every 30 minutes). The beach is a 10-minute walk from the station. Seafood restaurants along the corniche serve grilled fish lunches from 60 MAD. This is the best quick beach escape from Casablanca — far less time and hassle than driving to more distant beaches. Return trains run until late evening.',
  },
];

/* ===================================================================
   DATA: BUDGET TIPS
   =================================================================== */

const budgetTips = [
  {
    tip: 'Walk the Corniche for Free',
    icon: Footprints,
    description: 'The 3-kilometer Corniche promenade from the Hassan II Mosque to Ain Diab costs nothing and is the most scenic walk in Casablanca. Sunset views are world-class.',
    savings: 'Free — best walk in the city',
  },
  {
    tip: 'Eat Seafood at the Port',
    icon: UtensilsCrossed,
    description: 'Port restaurants serve the same grilled fish as Corniche restaurants at a fraction of the price. A full grilled fish meal costs from 60 MAD at the port versus from 200 MAD on the Corniche.',
    savings: 'Save from 100-140 MAD per meal',
  },
  {
    tip: 'Take the Train to Rabat',
    icon: Compass,
    description: 'The Al Boraq high-speed train to Rabat costs from 40 MAD each way — far cheaper than an organized tour. Rabat is easy to explore independently on foot.',
    savings: 'Save from 300 MAD vs. organized tour',
  },
  {
    tip: 'Visit the Mosque Early',
    icon: Landmark,
    description: 'The 9 AM tour of the Hassan II Mosque has the smallest crowds and best light. The mosque exterior and oceanfront esplanade are free to enjoy at any time — you do not need the interior tour for stunning photos.',
    savings: 'Free exterior visit any time',
  },
  {
    tip: 'Free Art Deco Walking Tour',
    icon: Camera,
    description: 'Download a free walking tour map of Casablanca\'s Art Deco architecture. The most impressive buildings are concentrated downtown on Boulevard Mohammed V — a two-hour walk covers the highlights.',
    savings: 'Free vs. from 200 MAD guided tour',
  },
  {
    tip: 'Marche Central Lunch',
    icon: CheckCircle,
    description: 'Buy fresh seafood from market stalls and have it cooked at the in-market restaurants for just a cooking fee (from 20-30 MAD). A full seafood feast costs from 50-80 MAD versus from 200+ MAD at a restaurant.',
    savings: 'Save from 100-150 MAD on seafood',
  },
  {
    tip: 'Use the Tramway',
    icon: Compass,
    description: 'Casablanca\'s modern tramway costs from 6 MAD per ride and connects major attractions including downtown, the Habous Quarter, and the train stations. Far cheaper and more comfortable than taxis.',
    savings: 'Save from 20-40 MAD per trip vs. taxi',
  },
  {
    tip: 'Habous Quarter for Pastries',
    icon: Heart,
    description: 'The pastry shops in the Habous Quarter sell traditional Moroccan sweets at local prices from 5 MAD per piece. Buy a mixed box (from 30 MAD) instead of paying from 80+ MAD at hotel tea services.',
    savings: 'Save from 50 MAD on pastries and tea',
  },
];

/* ===================================================================
   DATA: INSIDER TIPS
   =================================================================== */

const insiderTips = [
  {
    tip: 'Casablanca Is Not the Movie',
    icon: Eye,
    description:
      'The film Casablanca was shot entirely in Hollywood studios. Rick\'s Cafe was built in 2004 to satisfy tourist expectations. Enjoy it for what it is, but the real Casablanca is a cosmopolitan, modern city — not a wartime romance.',
  },
  {
    tip: 'Dress Cosmopolitan',
    icon: Users,
    description:
      'Casablanca is Morocco\'s most liberal city. While modesty is always appreciated, you will see a wider range of dress styles here than in Fes or Marrakech. For upscale restaurants and clubs, dress smartly — Casablancais take fashion seriously.',
  },
  {
    tip: 'Navigate by Tramway',
    icon: Compass,
    description:
      'The Casablanca tramway is modern, clean, and covers the main tourist areas. Line T1 connects Ain Diab through downtown to the Habous Quarter. Buy a rechargeable card (from 5 MAD) for convenience.',
  },
  {
    tip: 'Best Photography Spots',
    icon: Camera,
    description:
      'The Hassan II Mosque at sunset from the ocean esplanade. Art Deco facades on Boulevard Mohammed V in morning light. The Corniche at golden hour. The Sqala garden for Old Medina atmosphere. Kasbah des Oudaias in Rabat.',
  },
  {
    tip: 'Friday Is Couscous Day',
    icon: UtensilsCrossed,
    description:
      'Like all Moroccan cities, Casablanca observes Friday as couscous day. Restaurants serve special couscous platters at lunch from 50 MAD. Join the tradition — Friday couscous at a local restaurant is a cultural experience in itself.',
  },
  {
    tip: 'Safety in the City',
    icon: AlertTriangle,
    description:
      'Casablanca is generally safe but more fast-paced than other Moroccan cities. Avoid the Old Medina after dark, be alert in crowded tram stations, and use registered taxis (red petit taxis). The Corniche and tourist areas are well-policed.',
  },
];

/* ===================================================================
   DATA: FAQS
   =================================================================== */

const faqs = [
  {
    question: 'What are the top things to do in Casablanca?',
    answer:
      'The top things to do include touring the Hassan II Mosque interior (from 130 MAD), walking the Corniche to Ain Diab (free), exploring Art Deco downtown (free), dining at Rick\'s Cafe (from 150 MAD), eating fresh seafood at the port (from 60 MAD), shopping in the Habous Quarter (free), visiting Morocco Mall (free entry), and experiencing Casablanca\'s nightlife scene.',
  },
  {
    question: 'How many days do you need in Casablanca?',
    answer:
      'Two to three days is ideal. Day 1: Hassan II Mosque, Old Medina, Art Deco walk, and Marche Central seafood lunch. Day 2: Habous Quarter, Villa des Arts, Corniche, Ain Diab beach, and evening cocktails. Day 3: Day trip to Rabat or El Jadida. With just one day, prioritize the mosque, a Corniche walk, and seafood at the port.',
  },
  {
    question: 'Is Casablanca worth visiting?',
    answer:
      'Absolutely. While guidebooks often suggest skipping it, Casablanca offers the Hassan II Mosque (one of the world\'s most spectacular buildings), Africa\'s best Art Deco architecture, the finest seafood in Morocco, vibrant nightlife, and a cosmopolitan energy unlike any other Moroccan city. It is the real, modern Morocco.',
  },
  {
    question: 'What is the best time to visit Casablanca?',
    answer:
      'April to June and September to November are ideal, with temperatures of 18-26 degrees Celsius. The Atlantic coast keeps Casablanca cooler than inland cities. Summer is warm but breezy. Winter (December-February) is mild (12-18 degrees) but rainy. Beach season runs from June to September.',
  },
  {
    question: 'Is Casablanca expensive?',
    answer:
      'Casablanca is Morocco\'s priciest city but still very affordable by international standards. Budget travelers can enjoy the city on from 400-600 MAD per day (street food, tram, free attractions). Mid-range travelers spend from 1,000-2,000 MAD per day including restaurant meals, the mosque tour, and a beach club visit.',
  },
  {
    question: 'Is the Hassan II Mosque open to non-Muslims?',
    answer:
      'Yes, the Hassan II Mosque is one of only a few mosques in Morocco open to non-Muslim visitors. Guided tours run at set times outside prayer hours (typically 9 AM, 10 AM, 11 AM, and 2 PM). Entry costs from 130 MAD for adults. The hour-long tour covers the prayer hall, ablution rooms, and hammam.',
  },
  {
    question: 'Can I do day trips from Casablanca?',
    answer:
      'Excellent day trips include Rabat by high-speed train (1 hour, from 40 MAD), El Jadida for the Portuguese cistern (1.5 hours, from 60 MAD by bus), and Mohammedia for beaches (30 minutes, from 15 MAD by train). All are easy to do independently without organized tours.',
  },
];

/* ===================================================================
   DATA: RELATED GUIDES
   =================================================================== */

const relatedGuides = [
  {
    href: '/casablanca',
    icon: MapPin,
    title: 'Casablanca City Guide',
    description: 'The complete guide to Casablanca: neighborhoods, transport, accommodation, and planning your visit.',
  },
  {
    href: '/morocco-food-guide',
    icon: UtensilsCrossed,
    title: 'Morocco Food Guide',
    description: 'Explore Morocco\'s incredible cuisine, from street food and seafood to regional specialties and dining customs.',
  },
  {
    href: '/morocco-nightlife-guide',
    icon: Music,
    title: 'Morocco Nightlife Guide',
    description: 'The best bars, clubs, and evening entertainment across Morocco\'s major cities.',
  },
  {
    href: '/morocco-3-days',
    icon: Calendar,
    title: '3 Days in Morocco',
    description: 'How to plan the perfect short trip to Morocco, including itineraries that feature Casablanca.',
  },
  {
    href: '/best-beaches-morocco',
    icon: Waves,
    title: 'Best Beaches in Morocco',
    description: 'From Ain Diab to Essaouira, the best beaches for swimming, surfing, and relaxing on Morocco\'s coast.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function ThingsToDoInCasablancaPage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-casablanca.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/casablanca" className="hover:text-white transition-colors">
              Casablanca
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top 22 Things to Do
            <br className="hidden md:block" /> in Casablanca
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the towering Hassan II Mosque and Art Deco boulevards to Atlantic seafood and electric nightlife.
            Your complete 2026 guide to Morocco&apos;s largest city, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Casablanca: Morocco&apos;s Modern Powerhouse
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Casablanca is not the Morocco of Hollywood imagination. It is bigger, bolder,
                and more complex than any film could capture. With over four million people, it is
                Morocco&apos;s largest city and economic engine — a place where Art Deco
                boulevards meet the Atlantic Ocean, where the world&apos;s third-largest mosque
                rises from the waves, and where the nightlife, food scene, and cosmopolitan energy
                rival anything in the Mediterranean.
              </p>
              <p>
                Many tourists skip Casablanca entirely, rushing to Marrakech or Fes. That is a
                mistake. The Hassan II Mosque is one of the most extraordinary buildings on earth.
                The Art Deco architecture downtown is unmatched in Africa. The seafood, pulled
                fresh from the Atlantic each morning, is the best in the country. And the city&apos;s
                blend of traditional Moroccan culture with modern cosmopolitan life gives you a
                picture of Morocco that no medina can provide.
              </p>
              <p>
                This guide covers 22 of the best things to do in Casablanca, organized by category:
                iconic landmarks, culture and entertainment, food and seafood, shopping and
                beaches, and day trips. Each includes real 2026 prices in MAD, practical logistics,
                and insider tips from people who know the city well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Overview: Top 10 Must-Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Casablanca.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Hassan II Mosque Interior Tour', price: 'From 130 MAD', time: '1.5-2 hours', category: 'Iconic Landmark' },
              { rank: 2, name: 'Walk the Corniche at Sunset', price: 'Free', time: '2-4 hours', category: 'Promenade' },
              { rank: 3, name: 'Art Deco Architecture Walk', price: 'Free', time: '2-3 hours', category: 'Architecture' },
              { rank: 4, name: 'Seafood at the Fishing Port', price: 'From 60 MAD', time: '1.5-2 hours', category: 'Seafood' },
              { rank: 5, name: 'Dinner at Rick\'s Cafe', price: 'From 150 MAD', time: '1.5-2 hours', category: 'Cinema & Dining' },
              { rank: 6, name: 'Explore the Habous Quarter', price: 'Free', time: '1.5-2 hours', category: 'Historic Quarter' },
              { rank: 7, name: 'Day Trip to Rabat', price: 'From 40 MAD', time: 'Full day', category: 'Day Trip' },
              { rank: 8, name: 'Ain Diab Beach & Beach Clubs', price: 'Free / From 100 MAD', time: '3-6 hours', category: 'Beach' },
              { rank: 9, name: 'Morocco Mall & Aquarium', price: 'Free / From 60 MAD', time: '2-4 hours', category: 'Shopping' },
              { rank: 10, name: 'Casablanca Nightlife', price: 'From 50 MAD', time: 'Evening', category: 'Entertainment' },
            ].map((item) => (
              <div key={item.rank} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-[var(--color-accent)]">{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Ticket className="w-3 h-3" />
                      {item.price}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Iconic Landmarks -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Iconic Landmarks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From a mosque that rises from the Atlantic to Art Deco masterpieces and a historic medina,
            these are the sights that define Casablanca&apos;s character.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {iconicLandmarks.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {attraction.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {attraction.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {attraction.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {attraction.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Culture & Entertainment -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; Entertainment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Casablanca&apos;s cultural scene blends cinema nostalgia, contemporary art, historic neighborhoods,
            and the most vibrant nightlife in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Nightlife venues often have dress codes. Rick&apos;s Cafe requires reservations for dinner.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {cultureExperiences.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Food & Seafood -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Seafood
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Casablanca is the seafood capital of Morocco, where the Atlantic meets the plate each morning.
            From port-side grills to world-class restaurants, the food scene here is extraordinary.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All food prices are starting prices. Corniche and upscale restaurants charge 50-100% more than local neighborhoods.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodExperiences.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Shopping & Beaches -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Africa&apos;s largest mall to Atlantic beach clubs and bohemian flea markets,
            Casablanca offers a shopping and leisure scene unlike anywhere else in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beach club prices vary by season. Summer weekends are the busiest. Malls are open daily.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {shoppingAndBeaches.map((item) => {
              const ShopIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShopIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        {item.bestTime && (
                          <span className="inline-flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5" />
                            {item.bestTime}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Day Trips & Excursions -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Casablanca&apos;s central location and excellent train network make it a perfect base for
            exploring Morocco&apos;s Atlantic coast and capital city.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Day trip prices are starting prices per person. Train and bus fares are for standard class.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {dayTrips.map((item) => {
              const TripIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            8 Budget Tips for Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to enjoy Morocco&apos;s largest city without overspending.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that makes the difference between a good trip and an unforgettable one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample 2-Day Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 2-Day Casablanca Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical day-by-day plan covering the essential experiences. Adjust based on your interests and pace.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: Mosque, Medina &amp; Art Deco
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take the 9 AM guided tour of the Hassan II Mosque (from 130 MAD). Walk the ocean
                      esplanade and photograph the mosque from the waterfront. Head to the Old Medina
                      and have brunch at La Sqala in its garden courtyard (from 50 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Art Deco architecture walk along Boulevard Mohammed V (free). Visit the Sacre-Coeur
                      Cathedral (free). Lunch at the Marche Central with fresh seafood (from 50 MAD). Explore
                      the Habous Quarter for pastries and the Mahkama du Pacha.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Dinner at Rick&apos;s Cafe for the movie experience (from 250 MAD set menu) or seafood
                      at the port (from 60 MAD). Cocktails at a Corniche rooftop bar (from 80 MAD).
                      Estimated Day 1 cost: from 350-650 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Corniche, Beach &amp; Culture
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit Villa des Arts (from 20 MAD) for contemporary Moroccan art. Explore the Maarif
                      shopping district for Moroccan fashion and boutiques. Coffee and pastries at a local
                      patisserie (from 25 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk the Corniche promenade (free). Spend the afternoon at Ain Diab beach or a beach
                      club (free public / from 100 MAD beach club). Browse Morocco Mall and visit the aquarium
                      (from 60 MAD). Lunch at a Corniche restaurant (from 100 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunset dinner at Le Cabestan on the rocks (from 300 MAD) or casual seafood along the
                      Corniche (from 100 MAD). Casablanca nightlife in Maarif or the Corniche (from 80 MAD for drinks).
                      Estimated Day 2 cost: from 400-750 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                2-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 600-900 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free attractions, port seafood, tram, public beach</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,200-2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Mosque tour, Rick&apos;s Cafe, beach club, restaurant dinners</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 3,000-5,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Fine dining, nightlife, premium beach clubs, private transport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
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
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Casablanca Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Casablanca?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the world&apos;s third-largest mosque to Atlantic seafood and Art Deco grandeur,
            Casablanca offers experiences that redefine what Morocco can be. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/casablanca"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Casablanca City Guide
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Morocco Food Guide
            </Link>
            <Link
              href="/best-beaches-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Best Beaches
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
