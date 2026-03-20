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
  Calendar,
  Bed,
  Globe,
  Lightbulb,
  Key,
  Coffee,
  Utensils,
  Camera,
  ThumbsUp,
  AlertTriangle,
  Droplets,
  HandHeart,
  Lamp,
  Scale,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'What Is a Riad in Morocco? | The Complete Moroccan Riad Experience Guide 2026',
  description:
    'Everything you need to know about staying in a Moroccan riad. What is a riad, riad vs hotel comparison, riad etiquette, booking tips, riad types by budget, best riads by city, rooftop terraces, traditional food, and answers to every first-timer question. Prices from 400 MAD per night.',
  keywords: [
    'what is a riad Morocco',
    'staying in a riad',
    'riad vs hotel Morocco',
    'Moroccan riad experience',
    'riad architecture Morocco',
    'riad etiquette',
    'riad booking tips',
    'riad types Morocco',
    'budget riad Morocco',
    'luxury riad Morocco',
    'riad food Morocco',
    'riad rooftop terrace',
    'riad courtyard Morocco',
    'first time riad stay',
    'Morocco riad guide 2026',
    'traditional riad Morocco',
    'riad history Morocco',
    'riad breakfast Morocco',
    'riad vs dar Morocco',
    'what to expect riad',
  ],
  openGraph: {
    title: 'What Is a Riad in Morocco? | The Complete Moroccan Riad Experience Guide 2026',
    description:
      'The definitive guide to the Moroccan riad experience. Architecture, history, etiquette, riad vs hotel comparison, booking tips, and what first-timers need to know. Prices from 400 MAD.',
    url: `${BASE_URL}/morocco-riad-experience`,
    images: [
      {
        url: `${BASE_URL}/images/art-moroccan-riad-courtyard.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan riad courtyard with zellige tilework, central fountain, and lush greenery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Riad in Morocco? | Complete Riad Experience Guide 2026',
    description:
      'Everything about the Moroccan riad experience: architecture, etiquette, riad vs hotel, booking tips, and first-timer FAQs. From 400 MAD per night.',
    images: [`${BASE_URL}/images/art-moroccan-riad-courtyard.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-riad-experience` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-riad-experience`,
  name: 'What Is a Riad in Morocco? | The Complete Moroccan Riad Experience Guide 2026',
  description:
    'Comprehensive guide to the Moroccan riad experience covering architecture, history, riad vs hotel comparison, etiquette, booking tips, riad types by budget, best riads by city, rooftop terraces, traditional food, and first-timer FAQs. Prices from 400 MAD per night.',
  url: `${BASE_URL}/morocco-riad-experience`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-riad-experience`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Riad Experience', item: `${BASE_URL}/morocco-riad-experience` },
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
        text: 'A riad is a traditional Moroccan house built around an interior courtyard garden. The word "riad" comes from the Arabic "ryad" meaning garden. These historic homes, found within medina walls, feature inward-facing architecture with central courtyards containing fountains, zellige tilework, carved stucco, and often citrus trees. Many have been converted into intimate guesthouses offering 3 to 15 rooms, providing a far more personal experience than conventional hotels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a riad and a hotel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A riad is a converted traditional house within the medina, typically offering 3 to 15 rooms arranged around a central courtyard. Hotels are purpose-built modern properties, usually outside the medina. Riads provide intimate hospitality, home-cooked meals, and authentic architecture, while hotels offer standardized amenities like elevators, large pools, fitness centers, and parking. Riads are ideal for cultural immersion; hotels suit travelers wanting familiar Western-style accommodation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is staying in a riad safe for solo travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, riads are generally very safe for solo travelers. The intimate setting means staff know every guest by name, creating a secure environment. Most riads have a single locked entrance with staff present around the clock. Solo travelers often find riads more welcoming than hotels because the communal spaces like courtyards and rooftop terraces encourage interaction with other guests and staff. Always choose riads with strong reviews from solo travelers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to remove my shoes in a riad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Practices vary by riad. In more traditional riads, you may be asked to remove outdoor shoes and offered babouche (Moroccan leather slippers) at the entrance. In boutique and luxury riads, there is usually no shoe removal requirement in common areas. It is always respectful to remove shoes before stepping onto carpets or sitting on floor cushions. When in doubt, follow the lead of your host or ask.',
      },
    },
    {
      '@type': 'Question',
      name: 'What food is served in a Moroccan riad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Riad food is one of the highlights of staying in Morocco. Breakfast, included in nearly all riad stays, features msemen and baghrir (Moroccan pancakes), fresh-baked khobz bread, homemade jams, amlou (argan-almond butter), olive oil, fresh orange juice, eggs, seasonal fruit, and mint tea. Dinner, available by advance request, typically includes multi-course Moroccan meals with salads, tagines or couscous, and pastries. Riad cuisine is often home-style and rivals or surpasses restaurant quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book a riad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For peak season travel (December, January, Easter, and major holidays), book 3 to 6 months in advance, especially for popular riads in Marrakech and Fes. During shoulder season (March to May, September to November), 4 to 8 weeks ahead is usually sufficient. In low season (June to August, excluding coastal cities), last-minute bookings are often possible, sometimes at discounted rates. Small riads with fewer than 6 rooms fill up fastest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a riad rooftop terrace at any time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most riads allow guests to use the rooftop terrace freely throughout the day and evening. Some riads serve breakfast and dinner on the terrace. The best times are early morning for peaceful views, late afternoon for the golden light, and sunset for the call to prayer echoing across the medina. A few luxury riads may have scheduled dining service on the terrace, but generally the space is available whenever you wish.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a riad and a dar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In traditional Moroccan architecture, a riad has a central garden courtyard with trees and a fountain, while a dar (meaning house) has a simpler central light well or patio without a full garden. Riads tend to be larger, grander properties, originally owned by wealthy families. In modern tourist usage, however, the terms are often used interchangeably, and many properties called "dar" offer an experience identical to a riad. Focus on reviews and photos rather than the name.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD ARCHITECTURE ELEMENTS
   ═══════════════════════════════════════════════════════════════ */

const architectureElements = [
  {
    name: 'The Courtyard (Wust al-Dar)',
    description:
      'The heart of every riad. An open-air central space typically featuring a marble or zellige-tiled fountain, citrus or fig trees, and seating areas. The courtyard brings light, air, and nature into the center of the home, creating a private oasis shielded from the bustling medina outside. Water and greenery symbolize paradise in Islamic garden design.',
    icon: Droplets,
  },
  {
    name: 'Zellige Tilework',
    description:
      'Hand-cut geometric mosaic tiles made from glazed terracotta, arranged into intricate patterns without the use of stencils. Each tile is individually chipped into shape by master craftsmen called maalems. Zellige adorns fountains, walls, floors, and columns, with patterns that range from simple star motifs to complex mathematical designs. Fes is the historic center of zellige production.',
    icon: Sparkles,
  },
  {
    name: 'Tadelakt Plaster',
    description:
      'A waterproof lime plaster polished with river stones and treated with olive oil soap. Tadelakt has been used in Moroccan bathrooms and hammams for centuries, creating smooth, lustrous walls that resist water. The technique produces a warm, organic finish in earth tones that is both beautiful and functional. Authentic tadelakt is applied entirely by hand.',
    icon: HandHeart,
  },
  {
    name: 'Carved Stucco (Gebs)',
    description:
      'Plaster carved into elaborate floral and geometric patterns, typically found on arches, doorways, and upper walls. The carving is done while the plaster is still wet, requiring exceptional speed and precision. Patterns include arabesques, muqarnas (honeycomb vaulting), and calligraphic inscriptions. The finest carved stucco is found in Fes and Marrakech riads dating from the 14th to 17th centuries.',
    icon: Award,
  },
  {
    name: 'Carved Cedar (Khashab)',
    description:
      'Atlas cedar wood, carved into geometric screens, door panels, and ceiling beams. Cedar is prized for its fragrance, natural insect resistance, and the warmth it brings to interiors. Riad ceilings often feature painted cedar in geometric patterns, with the finest examples found in historic Fes riads. The scent of cedar permeates many traditional riad rooms.',
    icon: Lamp,
  },
  {
    name: 'Rooftop Terrace',
    description:
      'Nearly every riad has a rooftop terrace offering panoramic views over the medina rooftops, minarets, and in some cities, the mountains or sea beyond. Terraces serve as outdoor living rooms for breakfast, sunset drinks, and stargazing. They are furnished with anything from simple chairs to elaborate lounging areas with daybeds, shade canopies, and herb gardens.',
    icon: Camera,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD VS HOTEL COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const riadVsHotel = [
  { feature: 'Location', riad: 'Inside the medina (old city)', hotel: 'Usually in the new city (ville nouvelle)' },
  { feature: 'Size', riad: '3-15 rooms, intimate atmosphere', hotel: '50-300+ rooms, anonymous atmosphere' },
  { feature: 'Architecture', riad: 'Historic courtyard house, zellige & tadelakt', hotel: 'Modern construction, international style' },
  { feature: 'Breakfast', riad: 'Home-cooked Moroccan spread, included', hotel: 'Buffet style, sometimes extra charge' },
  { feature: 'Staff', riad: 'Owner/family, personal connection', hotel: 'Professional but impersonal rotation' },
  { feature: 'Pool', riad: 'Courtyard plunge pool (if any)', hotel: 'Full-size swimming pool common' },
  { feature: 'Parking & elevator', riad: 'No parking, no elevator, steep stairs', hotel: 'On-site parking, elevator standard' },
  { feature: 'Cultural experience', riad: 'Immersive, authentic Moroccan living', hotel: 'Comfortable but could be anywhere' },
  { feature: 'Noise', riad: 'Medina sounds, call to prayer', hotel: 'Soundproofed, quieter rooms' },
  { feature: 'Price range', riad: 'From 400 MAD per night', hotel: 'From 600 MAD per night' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const riadEtiquette = [
  {
    title: 'Greet Your Hosts Warmly',
    description:
      'A simple "Salaam alaikum" (peace be upon you) when you arrive and each morning goes a long way. Moroccans value greetings highly, and taking a moment to ask how your host is doing shows respect. You will be greeted with genuine warmth in return.',
    icon: Heart,
  },
  {
    title: 'Accept the Mint Tea',
    description:
      'When offered mint tea, always accept at least one glass. Refusing tea can be seen as refusing hospitality. The traditional Moroccan tea ceremony involves pouring from a height to create a froth, and the sweetness is deliberate. It is perfectly fine to request less sugar.',
    icon: Coffee,
  },
  {
    title: 'Dress Modestly in Common Areas',
    description:
      'While your private room is your space, common areas like the courtyard and rooftop terrace are shared. Cover shoulders and knees out of respect, particularly in more traditional riads. Swimwear is generally fine at the plunge pool but cover up when walking to and from it.',
    icon: ShieldCheck,
  },
  {
    title: 'Ask Before Photographing Staff',
    description:
      'Always ask permission before photographing riad staff. Many are happy to pose, but some prefer not to be photographed for cultural or religious reasons. The architectural spaces, food, and courtyards are generally fine to photograph freely.',
    icon: Camera,
  },
  {
    title: 'Tipping Is Expected and Appreciated',
    description:
      'Tip riad staff at the end of your stay. A general guideline is 50 to 100 MAD per day of your stay, left in an envelope at checkout. If particular staff members went above and beyond arranging tours, carrying luggage, or cooking special meals, tip them individually.',
    icon: DollarSign,
  },
  {
    title: 'Respect Quiet Hours',
    description:
      'Riads are intimate spaces with thin walls. Keep noise levels low after 22:00, especially in the courtyard which amplifies sound. If you return late from dinner, be mindful of other guests sleeping in rooms around the courtyard. Most riads have a communal atmosphere that relies on mutual consideration.',
    icon: Clock,
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD TYPES BY BUDGET
   ═══════════════════════════════════════════════════════════════ */

const riadTypes = [
  {
    tier: 'Budget Riad',
    priceRange: 'From 400 MAD per night',
    description:
      'Clean, simple rooms in a traditional family-run riad. Expect a shared courtyard with a modest fountain, basic but comfortable rooms with private bathrooms, and a generous traditional breakfast. Staff are typically the owner and their family, offering warm, genuine hospitality. These riads provide the most authentic taste of Moroccan home life.',
    features: ['Breakfast included', 'Private bathroom', 'Shared courtyard', 'Rooftop terrace', 'Wi-Fi', 'Warm family hospitality'],
    bestFor: 'Backpackers, budget travelers, and those who value authenticity over luxury',
    cities: 'Best value in Fes, Essaouira, and Chefchaouen',
  },
  {
    tier: 'Mid-Range Riad',
    priceRange: 'From 800 MAD per night',
    description:
      'A step up in decor and comfort, with more refined zellige work, better furnishings, and often a courtyard dipping pool. Rooms are larger, bathrooms feature tadelakt, and breakfast includes higher quality ingredients. Some mid-range riads offer dinner service and can arrange tours and activities. This tier offers the best balance of experience and value.',
    features: ['Breakfast included', 'Tadelakt bathrooms', 'Courtyard dipping pool', 'Dinner on request', 'Air conditioning', 'Tour arrangements'],
    bestFor: 'Couples, small families, and travelers wanting comfort without extravagance',
    cities: 'Strong options across all Moroccan cities',
  },
  {
    tier: 'Boutique Riad',
    priceRange: 'From 1,500 MAD per night',
    description:
      'Professionally designed and managed riads that blend traditional architecture with contemporary style. Expect curated interiors, quality linens, plunge pools, and refined dining. Staff are trained in hospitality, and the atmosphere balances intimacy with polish. These riads often attract design-conscious travelers and are frequently featured in travel magazines.',
    features: ['Gourmet breakfast', 'Swimming or plunge pool', 'Refined interiors', 'Concierge service', 'Cooking classes available', 'Evening dining'],
    bestFor: 'Design enthusiasts, honeymooners, and discerning travelers',
    cities: 'Best selection in Marrakech and Fes',
  },
  {
    tier: 'Luxury Riad',
    priceRange: 'From 2,500 MAD per night',
    description:
      'Palatial properties, often housed in historic buildings restored to museum quality. Expect private hammams, heated pools, gourmet restaurants, butler service, and interiors featuring antique collections and museum-grade craftsmanship. Luxury riads deliver an experience that rivals five-star hotels while retaining the architectural soul and intimacy of a traditional Moroccan home.',
    features: ['Heated pool', 'Private hammam & spa', 'Gourmet restaurant', 'Butler or concierge', 'Airport transfers', 'Exclusive excursions'],
    bestFor: 'Luxury travelers, special occasions, and those seeking a palatial Moroccan experience',
    cities: 'Marrakech has the most options; Fes offers historic palaces',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST RIADS BY CITY (OVERVIEW)
   ═══════════════════════════════════════════════════════════════ */

const riadsByCity = [
  {
    city: 'Marrakech',
    character: 'Vibrant, cosmopolitan, and diverse',
    description:
      'The largest riad selection in Morocco, with over 1,000 properties ranging from 400 MAD budget gems near Jemaa el-Fnaa to 8,000 MAD palatial estates. Marrakech riads are the most cosmopolitan, often owned by European expats who blend Moroccan and Western design. The medina is vast and bustling, and the best riads provide a sanctuary of calm amid the sensory intensity.',
    priceRange: 'From 400 MAD to 8,000 MAD per night',
    image: '/images/photo-riad-courtyard.webp',
    topPick: 'Riad Kniza for luxury; Riad Cinnamon for budget',
  },
  {
    city: 'Fes',
    character: 'Historic, scholarly, and architecturally rich',
    description:
      'Fes riads occupy some of the most architecturally significant buildings in the Arab world. Many are housed in centuries-old palaces with carved stucco, painted cedar, and zellige of extraordinary intricacy. Fes offers exceptional value compared to Marrakech, with comparable quality at lower prices. The medina is the largest car-free urban area in the world, making the riad your essential refuge.',
    priceRange: 'From 400 MAD to 5,000 MAD per night',
    image: '/images/hero-fes-medina.webp',
    topPick: 'Riad Fes for luxury; Riad Lune et Soleil for budget',
  },
  {
    city: 'Essaouira',
    character: 'Coastal, bohemian, and wind-swept',
    description:
      'Essaouira riads blend Moroccan architecture with a relaxed Atlantic coastal vibe. Expect whitewashed walls, blue accents, and rooftop terraces with ocean views and the sound of seagulls. The town is smaller and more navigable than Marrakech or Fes, making medina life less intense. Riads here attract surfers, artists, and travelers seeking a slower pace.',
    priceRange: 'From 400 MAD to 3,000 MAD per night',
    image: '/images/hero-essaouira.webp',
    topPick: 'Riad Chbanate for luxury; Dar Ness for budget',
  },
  {
    city: 'Chefchaouen',
    character: 'Blue, mountainous, and photogenic',
    description:
      'The famous Blue City offers a small but distinctive selection of riads nestled among the blue-washed lanes of the Rif Mountains. Expect mountain views, cooler temperatures, and a palette dominated by every shade of blue. Chefchaouen has fewer riads than Marrakech or Fes, so booking in advance is essential during peak months.',
    priceRange: 'From 400 MAD to 2,500 MAD per night',
    image: '/images/hero-chefchaouen-blue.webp',
    topPick: 'Lina Ryad for luxury; Casa Hassan for mid-range',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RIAD FOOD HIGHLIGHTS
   ═══════════════════════════════════════════════════════════════ */

const riadFood = [
  {
    meal: 'Breakfast',
    description:
      'Included in nearly every riad stay and served on the rooftop or in the courtyard. Expect msemen (flaky flatbread), baghrir (spongy pancakes with tiny holes), fresh-baked khobz, homemade jams from fig, apricot, and orange, amlou (argan and almond butter), olives, olive oil, eggs, fresh-squeezed orange juice, seasonal fruit, and unlimited mint tea or coffee.',
    timing: 'Usually served 8:00 to 10:30',
    priceNote: 'Included in room rate at most riads',
  },
  {
    meal: 'Lunch',
    description:
      'Not commonly served in riads, as guests are usually out exploring. Some riads offer a light lunch of salads, sandwiches, or a simple tagine if requested in the morning. The medina has abundant street food and restaurants for midday meals, so most travelers eat out for lunch.',
    timing: 'On request, typically 12:00 to 14:00',
    priceNote: 'If available, from 80 MAD per person',
  },
  {
    meal: 'Dinner',
    description:
      'Available at most riads with advance notice (request by morning or the day before). A typical riad dinner is a multi-course affair: Moroccan salads and bread, a main course of tagine, couscous, or pastilla, and dessert of fresh fruit or pastries. Riad dinners are often among the best meals you will eat in Morocco, prepared from fresh market ingredients by skilled family cooks.',
    timing: 'Usually served 19:30 to 21:00',
    priceNote: 'From 150 MAD per person for a full three-course dinner',
  },
  {
    meal: 'Afternoon Tea & Pastries',
    description:
      'Many riads offer complimentary afternoon mint tea and Moroccan pastries in the courtyard. This is a lovely ritual to enjoy after returning from a day of medina exploration. Common pastries include kaab el ghazal (gazelle horns filled with almond paste), ghriba (crumbly semolina cookies), and chebakia (honey-soaked sesame pastries).',
    timing: 'Typically 16:00 to 17:30',
    priceNote: 'Often complimentary at mid-range and luxury riads',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Directly for Better Rates',
    icon: Globe,
    description:
      'Most riads offer 10 to 20 percent lower rates when you book through their website or by email. Direct bookings also unlock perks like room upgrades, free hammam sessions, or airport transfers. Booking platforms charge riads a steep commission, so your direct booking saves them money and they pass savings to you.',
  },
  {
    title: 'Read Reviews About Noise',
    icon: ShieldCheck,
    description:
      'The medina is alive with sounds: the call to prayer (which can be extremely close), rooftop construction, donkey carts, and early-morning deliveries. Check recent reviews for noise complaints and ask for rooms away from the entrance door. Some travelers love the ambiance; others find it disruptive.',
  },
  {
    title: 'Ask About the Walk from the Car Drop-Off',
    icon: Key,
    description:
      'Cars cannot enter most medinas. You will walk the final stretch to your riad through narrow lanes. This can be 2 minutes or 15 minutes. If you have heavy luggage or mobility concerns, ask the riad about the walking distance and whether they provide a porter.',
  },
  {
    title: 'Book Dinner in Advance',
    icon: Utensils,
    description:
      'Riad staff shop at the market each morning for fresh ingredients based on dinner reservations. If you want to dine at the riad, confirm by morning. Riad dinners are often the best meals in Morocco and excellent value, from 150 MAD for a multi-course feast.',
  },
  {
    title: 'Travel in Shoulder Season',
    icon: Calendar,
    description:
      'March to May and September to November offer pleasant weather, lower prices, and better availability. Peak periods (Christmas, New Year, Easter) can see prices double, and popular riads book out months ahead. Summer is cheapest inland but extremely hot in Marrakech and Fes.',
  },
  {
    title: 'Check the Photos Carefully',
    icon: Camera,
    description:
      'Riad photos can be misleading. A beautiful courtyard shot may hide tiny rooms. Look for photos of actual guest rooms, bathrooms, and the rooftop terrace. Check that the plunge pool shown is the real pool, not a stock image. Guest-uploaded photos on review sites are more reliable than professional marketing shots.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON FIRST-TIMER CONCERNS
   ═══════════════════════════════════════════════════════════════ */

const firstTimerConcerns = [
  {
    concern: 'Will I get lost finding the riad?',
    answer:
      'Almost certainly on the first visit, which is why nearly every riad arranges a guide to meet you at the nearest taxi point. After one or two walks, most guests navigate confidently. GPS apps like Google Maps and Maps.me work in most medinas. The slight adventure of finding your riad is part of the charm.',
  },
  {
    concern: 'Is it noisy sleeping in the medina?',
    answer:
      'Medina sounds include the early morning call to prayer (around 5:00 AM), roosters, donkey carts, and neighbors. Most travelers adapt within a night or two. Earplugs help sensitive sleepers. Rooms on upper floors and away from the street entrance tend to be quieter. The call to prayer is hauntingly beautiful once you adjust.',
  },
  {
    concern: 'What if I have dietary restrictions?',
    answer:
      'Most riads are excellent at accommodating dietary needs when informed in advance. Vegetarian meals are easily arranged. Vegan, gluten-free, and allergy-specific meals can usually be prepared with notice. Communicate your needs when booking and again on arrival. Moroccan cuisine is naturally rich in vegetable-based dishes.',
  },
  {
    concern: 'Is the water safe to drink?',
    answer:
      'Tap water in Moroccan riads is generally not recommended for drinking. All riads provide bottled water, often complimentary. Many eco-conscious riads now offer filtered water stations. Tap water is safe for brushing teeth. Tea and coffee are made with boiled water and are perfectly safe.',
  },
  {
    concern: 'What about Wi-Fi and phone signal?',
    answer:
      'Most riads offer free Wi-Fi, though thick traditional walls can weaken the signal in some rooms. The courtyard and rooftop terrace usually have the strongest connection. For reliable mobile data, purchase a local Moroccan SIM card (from 30 MAD at any phone shop). Signal is generally good throughout the medinas.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is a riad in Morocco?',
    answer:
      'A riad is a traditional Moroccan house built around an interior courtyard garden. The word "riad" comes from the Arabic "ryad" meaning garden. These historic homes, found within medina walls, feature inward-facing architecture with central courtyards containing fountains, zellige tilework, carved stucco, and often citrus trees. Many have been converted into intimate guesthouses offering 3 to 15 rooms, providing a far more personal experience than conventional hotels.',
  },
  {
    question: 'What is the difference between a riad and a hotel in Morocco?',
    answer:
      'A riad is a converted traditional house within the medina, typically offering 3 to 15 rooms around a central courtyard. Hotels are purpose-built modern properties, usually outside the medina. Riads provide intimate hospitality, home-cooked meals, and authentic architecture, while hotels offer standardized amenities like elevators, large pools, fitness centers, and parking. Riads are ideal for cultural immersion; hotels suit travelers wanting familiar Western-style accommodation.',
  },
  {
    question: 'Is staying in a riad safe for solo travelers?',
    answer:
      'Yes, riads are generally very safe for solo travelers. The intimate setting means staff know every guest by name, creating a secure environment. Most riads have a single locked entrance with staff present around the clock. Solo travelers often find riads more welcoming than hotels because the communal spaces encourage interaction with other guests and staff.',
  },
  {
    question: 'Do I need to remove my shoes in a riad?',
    answer:
      'Practices vary. In more traditional riads, you may be asked to remove outdoor shoes and offered babouche (Moroccan leather slippers) at the entrance. In boutique and luxury riads, there is usually no shoe removal requirement in common areas. It is always respectful to remove shoes before stepping onto carpets or sitting on floor cushions.',
  },
  {
    question: 'What food is served in a Moroccan riad?',
    answer:
      'Breakfast, included in nearly all riads, features msemen, baghrir, khobz, jams, amlou, olive oil, fresh orange juice, eggs, fruit, and mint tea. Dinner is available by request and typically includes Moroccan salads, tagine or couscous, and pastries. Many riads also serve afternoon tea with Moroccan cookies. Riad cuisine is home-style and often rivals or surpasses restaurant quality.',
  },
  {
    question: 'How far in advance should I book a riad?',
    answer:
      'For peak season (December, January, Easter), book 3 to 6 months ahead. During shoulder season (March to May, September to November), 4 to 8 weeks is usually enough. In low season (June to August, excluding coastal cities), last-minute bookings are often possible at discounted rates. Small riads with fewer than 6 rooms fill up fastest.',
  },
  {
    question: 'What is the difference between a riad and a dar?',
    answer:
      'Traditionally, a riad has a central garden courtyard with trees and a fountain, while a dar has a simpler central patio without a full garden. Riads tend to be larger properties originally owned by wealthy families. In modern usage, the terms are interchangeable, and many properties called "dar" offer an experience identical to a riad. Focus on reviews and photos rather than the name.',
  },
  {
    question: 'Can I use the riad rooftop terrace any time?',
    answer:
      'Most riads allow free access to the rooftop terrace throughout the day and evening. Some serve breakfast and dinner there. The best times are early morning for peaceful views, late afternoon for golden light, and sunset for the call to prayer echoing across the city. A few riads may have scheduled dining service, but the terrace is generally available whenever you wish.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRiadExperiencePage() {
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
            <span className="text-white">Moroccan Riad Experience</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Gem className="w-4 h-4" />
            Complete Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            What Is a Riad in Morocco?
            <br className="hidden md:block" /> The Complete Riad Experience Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know about staying in a traditional Moroccan riad.
            Architecture, etiquette, riad vs hotel, booking tips, and honest answers
            to every question first-timers ask. Prices from 400 MAD per night.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: What Is a Riad? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Riad? Understanding Morocco&apos;s Iconic Architecture
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A riad is a traditional Moroccan house or palace built around an interior
                courtyard garden. The word comes from the Arabic &quot;ryad,&quot; meaning
                garden, and this garden courtyard is the defining feature that sets riads
                apart from every other form of accommodation in the world. For centuries,
                wealthy Moroccan families built their homes around these private oases,
                creating havens of beauty and tranquility behind plain, unassuming exterior
                walls.
              </p>
              <p>
                The genius of riad architecture lies in its inward focus. From the street,
                you see nothing but a modest wooden door in a blank wall. Step through that
                door and you enter a world of zellige tilework shimmering in the sunlight,
                carved stucco arches framing a turquoise pool, the sound of water trickling
                from a marble fountain, and the scent of orange blossom drifting down from
                the rooftop garden. This dramatic contrast between the public and private
                realms is fundamental to Moroccan culture and Islamic architecture.
              </p>
              <p>
                Today, hundreds of these historic homes have been lovingly restored and
                converted into guesthouses, offering travelers a chance to sleep in living
                history. Whether you choose a budget riad at 400 MAD per night or a palatial
                luxury estate at 5,000 MAD, the essential experience remains the same:
                waking to birdsong in the courtyard, eating a lavish home-cooked breakfast on
                the rooftop terrace, and being treated not as a customer but as an honored
                guest in someone&apos;s home.
              </p>
              <p>
                This guide covers everything a first-time visitor needs to know: the
                architectural elements that define a riad, how riads compare to hotels, what
                to expect from your stay, etiquette tips, types of riads across every budget,
                the food you will enjoy, and answers to the most common questions travelers ask.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture & History ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Architecture: The Elements That Define the Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every riad is built from the same architectural vocabulary, a tradition of craftsmanship
            that stretches back to the 12th century. Here are the elements you will encounter.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {architectureElements.map((element) => {
              const ElementIcon = element.icon;
              return (
                <div key={element.name} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <ElementIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {element.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {element.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Riad vs Hotel Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad vs Hotel: Which Is Right for You?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The choice between a riad and a hotel shapes your entire Morocco experience.
            Here is an honest side-by-side comparison.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Many experienced travelers recommend staying in a riad for at least part of your trip, even if you prefer hotels generally.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Feature</div>
                <div className="p-3 px-4">Riad</div>
                <div className="p-3 px-4">Hotel</div>
              </div>
              {riadVsHotel.map((item, i) => (
                <div
                  key={item.feature}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.feature}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.riad}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.hotel}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Our Verdict
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    If you are visiting Morocco for the first time, stay in a riad for at
                    least two or three nights. The courtyard architecture, home-cooked
                    breakfasts, rooftop terraces, and personal attention from staff create
                    memories that no international hotel chain can match. If you need
                    elevators, large pools, or on-site parking, a hotel may be more practical
                    for part of your trip, but the riad experience is something you will talk
                    about for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Riad Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Etiquette: How to Be a Respectful Guest
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A riad is someone&apos;s home, not a commercial hotel. These customs will help you
            show respect and deepen your experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riadEtiquette.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Riad Types by Budget ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Types: From Budget to Luxury
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            There is a riad for every budget. Here is what to expect at each price tier.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices include breakfast. Seasonal pricing applies during peak periods (Christmas, New Year, Easter), when rates may increase by 30-100%.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {riadTypes.map((riad) => (
              <div key={riad.tier} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {riad.tier}
                    </h3>
                    <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {riad.priceRange}
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {riad.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                      What You Get
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {riad.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg flex-1">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {riad.bestFor}
                      </p>
                    </div>
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg flex-1">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Where:</span> {riad.cities}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Riads by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads by City: Where to Stay in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct riad experience. Here is what makes
            each destination unique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {riadsByCity.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`Riad courtyard and traditional architecture in ${city.city}, Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {city.city}
                    </h3>
                    <p className="text-sm text-white/80">{city.character}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {city.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span className="font-semibold text-[var(--color-accent)]">{city.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span><span className="font-semibold text-[var(--text-primary)]">Top pick:</span> {city.topPick}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Riad Food ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Food: What You Will Eat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Food is one of the greatest pleasures of riad life. From lavish breakfasts to intimate candlelit dinners, here is what your riad table will look like.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {riadFood.map((item) => (
              <div key={item.meal} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {item.meal}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {item.timing}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {item.priceNote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rooftop Terraces ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rooftop Terraces: The Crown of Every Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            No riad experience is complete without time spent on the rooftop terrace, the social heart of the riad and your private balcony over the medina.
          </p>

          <div className="card-moroccan p-6 lg:p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Almost every riad in Morocco has a rooftop terrace, and it will likely become
                your favorite space during your stay. From this elevated perch, you look out
                over the jumbled rooftops of the medina, satellite dishes mingling with ancient
                minarets, laundry drying on neighboring terraces, and birds circling in the
                golden light of late afternoon.
              </p>
              <p>
                The experience changes with the time of day. At dawn, the terrace is quiet and
                cool, perfect for journaling or meditation as the city wakes below. By mid-morning,
                many riads serve their generous breakfast here, and you will eat msemen and drink
                fresh orange juice while watching storks nest on distant towers. In the heat of
                the afternoon, shade canopies and parasols make the terrace a drowsy retreat.
              </p>
              <p>
                But sunset is the magic hour. As the light turns golden, the muezzin begins the
                call to prayer, and the sound ripples across the city from minaret to minaret.
                In Marrakech, you may see the snow-capped Atlas Mountains glowing pink. In Fes,
                the green hills beyond the medina catch the last light. In Essaouira, the Atlantic
                Ocean glitters on the horizon. In Chefchaouen, the blue-washed walls below take on
                an ethereal glow. This moment, drink in hand, the medina murmuring below, is when
                most travelers fall irreversibly in love with Morocco.
              </p>
              <p>
                Rooftop terraces range from simple tiled platforms with a few plastic chairs to
                lavishly furnished outdoor living rooms with daybeds, lanterns, herb gardens, and
                bar service. Some luxury riads have rooftop plunge pools. Regardless of the
                furnishing level, the view and the atmosphere are always captivating.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="relative h-56 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="Sunset view from a riad rooftop terrace overlooking the Marrakech medina"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Sunset on the Terrace</p>
            </div>
            <div className="relative h-56 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-riad-courtyard.webp"
                alt="Traditional riad courtyard viewed from the rooftop terrace above"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Courtyard from Above</p>
            </div>
            <div className="relative h-56 rounded-xl overflow-hidden">
              <img
                src="/images/hero-riad-interior.webp"
                alt="Rooftop breakfast setup at a Moroccan riad with medina views"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Rooftop Breakfast</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Smart Booking Tips for Your Riad Stay
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for finding, booking, and getting the most from your Moroccan riad experience.
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

      {/* ── First-Timer Concerns ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common First-Timer Concerns (Honestly Answered)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Staying in a riad for the first time can feel daunting. Here are honest,
            practical answers to the worries that most first-timers have.
          </p>

          <div className="space-y-6">
            {firstTimerConcerns.map((item) => (
              <div key={item.concern} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.concern}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Moroccan Riads
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Riads Overview
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Browse all riads across Morocco with city-by-city listings and recommendations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/riad-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Complete Riad Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide covering architecture, etiquette, packing, and choosing the right riad.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads 2026
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top 20 hand-picked riads across Marrakech, Fes, Essaouira, and Chefchaouen.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/moroccan-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Riads
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the world of traditional Moroccan riads and their unique character.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                All Accommodations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to every accommodation type in Morocco: riads, hotels, hostels, and more.
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
            Step through that modest wooden door and into a world of zellige courtyards,
            rooftop sunsets, mint tea rituals, and the most generous hospitality you have
            ever experienced. The riad is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-best-riads"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Crown className="w-5 h-5" />
              Browse the Best Riads
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
