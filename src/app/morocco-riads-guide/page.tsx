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
  AlertTriangle,
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
  MessageCircleQuestion,
  Volume2,
  Footprints,
  Search,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-riads-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Riads Guide 2026 — How to Choose & Book the Perfect Riad',
  description:
    'Complete guide to Moroccan riads. What a riad is vs a dar, riad architecture (courtyard, zellige, rooftop), best riads by city (Marrakech, Fes, Essaouira, Chefchaouen), budget vs luxury pricing from 200 MAD, booking platforms, riad etiquette, common issues, and seasonal rates.',
  keywords: [
    'morocco riads guide',
    'what is a riad morocco',
    'best riads marrakech',
    'best riads fes',
    'riad vs dar morocco',
    'riad vs hotel morocco',
    'book a riad morocco',
    'riad architecture courtyard',
    'riad zellige tilework',
    'budget riads morocco',
    'luxury riads morocco 2026',
    'riad booking tips',
    'riad etiquette morocco',
    'riad breakfast morocco',
    'riad prices morocco',
    'riads essaouira',
    'riads chefchaouen',
    'riad rooftop terrace',
    'riad hammam morocco',
  ],
  openGraph: {
    title: 'Morocco Riads Guide 2026 — How to Choose & Book the Perfect Riad',
    description:
      'Everything you need to know about staying in a Moroccan riad. Architecture, best picks in Marrakech, Fes, Essaouira & Chefchaouen, pricing from 200 MAD, booking platforms compared, etiquette rules, and common issues to watch for.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-riads.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan riad courtyard with central fountain, zellige tilework, and lush greenery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Riads Guide 2026 | Choose & Book the Perfect Riad',
    description:
      'Riad vs dar, architecture, best riads by city, budget to luxury pricing, booking platforms, etiquette, common issues, and seasonal rates across Morocco.',
    images: [`${BASE_URL}/images/hero-riads.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the difference between a riad and a dar in Morocco?',
    a: 'A riad has a central courtyard garden with trees and plants, usually with a fountain or pool. The word "riad" comes from the Arabic "ryad," meaning garden. A dar (meaning "house") is a similar traditional dwelling but with a smaller, simpler courtyard that lacks a full garden. In modern usage, both terms describe guesthouse-style accommodations, but riads tend to be larger and more ornate. Many properties marketed as riads are technically dars, which does not affect the quality of the stay.',
  },
  {
    q: 'How much does a riad cost per night in Morocco?',
    a: 'Prices vary widely by city and tier. Budget riads start from 200 MAD per night in Chefchaouen and from 300 MAD in Marrakech. Mid-range riads run from 600 MAD to 1,500 MAD. Luxury palace riads charge from 2,000 MAD to 8,000 MAD or more. Fes is generally 20-30% cheaper than Marrakech. Breakfast is almost always included. Seasonal pricing can change, with peak season (October-April) rates running 30-50% above summer prices.',
  },
  {
    q: 'Should I book a riad through Booking.com or directly?',
    a: 'Booking directly with the riad (via their website, email, or WhatsApp) typically saves 10-15% since platforms charge riads a commission of 15-20%. Direct booking also lets you negotiate upgrades, request specific rooms, and build a relationship with the owner. Booking.com is useful for free cancellation options, reading verified reviews, and comparing multiple properties at once. Many travelers research on Booking.com, then contact the riad directly to book.',
  },
  {
    q: 'How do I find a riad inside the medina?',
    a: 'Medina streets are narrow, often unnamed, and GPS is unreliable within the old city walls. Most riads offer a pickup service: staff meet you at a nearby landmark or taxi drop-off point and walk you to the property. Book this in advance, especially for evening arrivals. Share your flight or arrival details with the riad via WhatsApp. Tip the person who guides you 20-30 MAD. After two or three trips, you will learn the route yourself.',
  },
  {
    q: 'Do riads include breakfast?',
    a: 'Nearly all riads include a traditional Moroccan breakfast in the room price, served on the rooftop terrace or in the courtyard. A typical spread includes fresh-squeezed orange juice, mint tea, msemen and baghrir pancakes, fresh bread, local honey, olive oil, amlou (argan and almond spread), cheese, olives, eggs, and seasonal fruit. Riad breakfasts are far more generous than standard hotel offerings and are often a highlight of the stay.',
  },
  {
    q: 'Are riads suitable for families with children?',
    a: 'Some riads welcome families, but many are designed for couples and adult travelers. Open courtyards with plunge pools and unfenced rooftop terraces can pose safety concerns for young children. Steep, narrow stairs are common. Ask the riad about child-friendliness before booking. Family-oriented riads exist and offer cots, high chairs, and child-proofed spaces. In Marrakech, several mid-range riads specifically cater to families.',
  },
  {
    q: 'What is riad etiquette in Morocco?',
    a: 'Remove shoes before entering rooms (babouche slippers are provided). Keep noise low after 22:00 since walls are thin and riads are intimate spaces. Dress modestly in common areas. Accept mint tea when offered as a gesture of welcome. Ask before photographing staff. Tipping the staff at checkout is customary, from 50-100 MAD per day of your stay, left in an envelope for distribution among the team.',
  },
  {
    q: 'What are common problems with riads?',
    a: 'The most frequent complaints are noise (from neighboring riads, the courtyard fountain, or the dawn call to prayer), steep stairs without elevators (difficult for mobility-impaired guests or heavy luggage), difficulty finding the riad in the medina, inconsistent hot water or WiFi in older properties, and ground-floor rooms being dark or damp. Read recent reviews carefully, ask the riad about specific concerns, and request upper-floor rooms for more light and less noise.',
  },
  {
    q: 'When is the best time to stay in a riad?',
    a: 'Spring (March-May) and autumn (September-November) offer the best balance of pleasant weather and reasonable rates. Peak season runs October to April, with highest demand and prices around Christmas, New Year, and Easter. Summer (June-August) brings the lowest prices but extreme heat in Marrakech and Fes, where interior medina temperatures can exceed 45 degrees Celsius. Coastal cities like Essaouira stay cooler year-round.',
  },
  {
    q: 'Can I book dinner at a riad?',
    a: 'Many riads offer home-cooked Moroccan dinners, typically a set menu of salads, tagine or couscous, and pastries for from 150 MAD to 400 MAD per person. You usually need to request dinner by midday so the cook can shop for fresh ingredients at the market. Riad dinners are an excellent way to experience authentic home-style Moroccan cooking without navigating the medina after dark.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Riads Guide 2026 — How to Choose & Book the Perfect Riad',
  description:
    'Complete guide to Moroccan riads covering architecture, riad vs dar, best riads by city, budget to luxury pricing, booking platforms, etiquette, common issues, and seasonal rates.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-riads.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Riads Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: RIAD VS DAR
   ================================================================ */

const riadVsDar = [
  { feature: 'Name Origin', riad: 'Arabic "ryad" = garden', dar: 'Arabic "dar" = house' },
  { feature: 'Courtyard', riad: 'Large garden with trees, fountain, or pool', dar: 'Smaller patio, often tiled, minimal greenery' },
  { feature: 'Size', riad: 'Typically 6-12+ rooms, multiple floors', dar: 'Usually 3-6 rooms, more compact' },
  { feature: 'Grandeur', riad: 'Ornate zellige, carved plaster, painted ceilings', dar: 'Simpler finishes, still traditional' },
  { feature: 'Price Range', riad: 'From 500 MAD to 8,000+ MAD per night', dar: 'From 200 MAD to 1,500 MAD per night' },
  { feature: 'Atmosphere', riad: 'Boutique hotel feel, more formal', dar: 'Home-stay feel, more intimate' },
];

/* ================================================================
   DATA: ARCHITECTURAL FEATURES
   ================================================================ */

const architecturalFeatures = [
  {
    name: 'Central Courtyard & Fountain',
    icon: Building,
    description:
      'The open-air courtyard is the architectural and social heart of every riad. A central fountain provides the sound of running water that masks street noise. Citrus trees, jasmine, banana palms, and bougainvillea fill the garden. The courtyard acts as a natural cooling system, drawing hot air upward and allowing cool air to circulate through the rooms.',
  },
  {
    name: 'Zellige Mosaic Tilework',
    icon: Gem,
    description:
      'Hand-cut geometric mosaic tiles in cobalt blue, emerald green, saffron yellow, and terracotta cover walls, floors, and fountains. Each tile is individually chiseled from glazed terracotta and assembled into complex star and rosette patterns. Fes has been the center of zellige craftsmanship since the 10th century. No two installations are identical.',
  },
  {
    name: 'Carved Stucco (Gebs)',
    icon: Sparkles,
    description:
      'Master craftsmen (maalems) carve intricate arabesques, floral scrolls, and Kufic calligraphy into wet plaster by hand. The finest examples have multiple layers creating dramatic shadow effects. Stucco panels frame doorways and arches, often transitioning seamlessly into zellige below and painted cedarwood above.',
  },
  {
    name: 'Painted Cedarwood Ceilings',
    icon: Crown,
    description:
      'Atlas cedarwood is carved and hand-painted with geometric rosettes and floral arabesques in gold, vermillion, cobalt, and forest green. Cedar naturally repels insects and releases a subtle fragrance for decades. Some riad ceilings required years to complete and are recognized as masterpieces of North African decorative art.',
  },
  {
    name: 'Rooftop Terrace',
    icon: Star,
    description:
      'Nearly every riad has a rooftop terrace with views over the medina skyline, minarets, and distant mountains. Furnished with loungers, shade canopies, and potted herbs, the terrace serves as an outdoor living room. Breakfast, afternoon tea, and candlelit dinners are commonly served here. Some luxury riads add rooftop plunge pools.',
  },
];

/* ================================================================
   DATA: BEST RIADS BY CITY
   ================================================================ */

const marrakechRiads = [
  {
    name: 'Riad Laayoun',
    tier: 'Budget',
    area: 'Derb Dabachi',
    icon: DollarSign,
    price: 'From 300 MAD per night',
    highlights: ['Family-run atmosphere', 'Home-cooked dinners on request', 'Traditional hammam nearby', 'Quiet location in residential quarter'],
    description:
      'A family-operated gem in a peaceful alley. The owners share stories over mint tea and prepare traditional meals on request. Rooms are simple, clean, and decorated with Berber textiles and hand-woven rugs.',
  },
  {
    name: 'Riad Dar Zaman',
    tier: 'Budget',
    area: 'Northern Medina',
    icon: DollarSign,
    price: 'From 350 MAD per night',
    highlights: ['Courtyard with plunge pool', 'Generous breakfast included', 'Atlas Mountain views from roof', 'Walk to Jemaa el-Fna in 10 minutes'],
    description:
      'A beautifully restored property proving that a comfortable riad experience does not require a large budget. Tasteful rooms, attentive staff, and a prime medina location make this a strong choice.',
  },
  {
    name: 'Riad BE Marrakech',
    tier: 'Mid-Range',
    area: 'Bab Doukkala',
    icon: Star,
    price: 'From 900 MAD per night',
    highlights: ['Contemporary Moroccan design', 'Heated plunge pool', 'In-house hammam and spa', 'Cooking classes available'],
    description:
      'A stylish blend of modern comfort and Moroccan craftsmanship. The Belgian-Moroccan owners have created a design-forward space with custom furniture, contemporary art, and impeccable service.',
  },
  {
    name: 'Riad Kniza',
    tier: 'Mid-Range',
    area: 'Bab Doukkala',
    icon: Star,
    price: 'From 1,200 MAD per night',
    highlights: ['Museum-quality antiques', 'Award-winning restaurant', 'Rooftop pool and spa', 'Berber art collection'],
    description:
      'An elegant riad filled with the owner\'s personal collection of Moroccan art. Every room is uniquely furnished with antique pieces. The restaurant serves some of the finest traditional cuisine in the medina.',
  },
  {
    name: 'Royal Mansour',
    tier: 'Luxury',
    area: 'Near Jemaa el-Fna',
    icon: Crown,
    price: 'From 8,000 MAD per night',
    highlights: ['53 individual private riads', 'Three world-class restaurants', 'Underground tunnel service', 'Full-service spa with hammam'],
    description:
      'Commissioned by King Mohammed VI, the Royal Mansour is a palace complex of 53 private riads connected by garden paths. Staff move through underground tunnels, invisible to guests. Each three-story riad features hand-crafted zellige, carved stucco, and painted cedarwood by master artisans.',
  },
];

const fezRiads = [
  {
    name: 'Dar Seffarine',
    area: 'Near Seffarine Square',
    price: 'From 400 MAD per night',
    description:
      'A charming budget option overlooking the famous coppersmiths\' square. Run by a Moroccan-German couple, the riad offers simple rooms, communal meals around a shared table, and genuine warmth. The rooftop terrace looks down on artisans hammering copper vessels below.',
  },
  {
    name: 'Dar Roumana',
    area: 'Fes el-Bali',
    price: 'From 1,000 MAD per night',
    description:
      'Five uniquely designed rooms blend contemporary taste with traditional craftsmanship. The riad is celebrated for its cooking classes and multi-course rooftop dinners. A pomegranate tree in the courtyard gives the property its name.',
  },
  {
    name: 'Riad Fes',
    area: 'Fes el-Bali',
    price: 'From 1,500 MAD per night',
    description:
      'A luxurious retreat with a rooftop restaurant offering sweeping medina views. Rooms feature museum-quality zellige and carved cedarwood. The bar, rare for a medina property, serves Moroccan wines. Full spa with traditional hammam on site.',
  },
  {
    name: 'Riad Laaroussa',
    area: 'Fes el-Bali',
    price: 'From 1,800 MAD per night',
    description:
      'A 17th-century palace with one of the largest private courtyards in the medina. Eight suites feature antique furnishings, a spectacular heated courtyard pool, and a hammam offering traditional treatments. The property hosted Moroccan royalty for centuries before its conversion.',
  },
];

const otherCityRiads = [
  {
    city: 'Essaouira',
    icon: Globe,
    riads: [
      {
        name: 'Riad Baoussala',
        price: 'From 600 MAD per night',
        description: 'A surfer-friendly riad with an ocean-view terrace, Scandinavian-Moroccan decor, and a location steps from the beach and historic ramparts.',
      },
      {
        name: 'Dar Adul',
        price: 'From 350 MAD per night',
        description: 'An intimate four-room riad with a cozy courtyard, home-cooked seafood dinners featuring the daily catch, and a warm family atmosphere in the heart of the old medina.',
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
        description: 'A blue-washed riad with panoramic Rif Mountain views, a heated pool, full spa with hammam, and rooms decorated in the distinctive blue-and-white Chefchaouen palette.',
      },
      {
        name: 'Dar Echchaouen',
        price: 'From 400 MAD per night',
        description: 'A family-run riad on the hillside with incredible mountain views from the terrace. Traditional rooms with handmade furniture and colorful Berber textiles. Breakfast on the terrace is unforgettable.',
      },
    ],
  },
];

/* ================================================================
   DATA: WHAT TO EXPECT
   ================================================================ */

const riadExperiences = [
  {
    name: 'Moroccan Breakfast',
    icon: Coffee,
    description:
      'Fresh-squeezed orange juice, mint tea, msemen (layered flatbread), baghrir (semolina pancakes), fresh bread, local honey, olive oil, amlou (argan and almond spread), cheese, olives, eggs, and seasonal fruit. Served on the rooftop or in the courtyard, this generous morning spread is a daily highlight that many travelers remember long after their trip.',
  },
  {
    name: 'Rooftop Terrace Life',
    icon: Star,
    description:
      'Mornings watching the medina wake up, lazy afternoons reading under shade sails, and evenings watching the sunset paint the minarets gold. Many riads serve dinner on the terrace by candlelight. Some have plunge pools or hot tubs with panoramic views over the rooftops to the mountains beyond.',
  },
  {
    name: 'In-House Hammam',
    icon: Sparkles,
    description:
      'Many riads have their own traditional hammam (steam bath) or can arrange visits to a neighborhood public hammam. A typical session includes steam, savon noir (black soap), a vigorous scrub with a kessa glove, a ghassoul clay mask, and an argan oil massage. Private riad hammam sessions start from 200 MAD.',
  },
  {
    name: 'Personal Concierge',
    icon: Users,
    description:
      'Riad staff act as your personal guides to the city: arranging restaurant reservations, cooking classes, guided tours, airport transfers, and day trips. They know the medina intimately and recommend hidden spots that package tourists never reach. This personalized service is a defining riad advantage over hotels.',
  },
  {
    name: 'Candlelit Evenings',
    icon: Heart,
    description:
      'As the evening call to prayer echoes across the medina, riads transform into candlelit sanctuaries. Home-cooked dinners feature multi-course meals with Moroccan salads, slow-cooked tagines, Friday couscous, and honey-drenched pastries. Some riads host live Gnaoua or Andalusian music on special evenings.',
  },
];

/* ================================================================
   DATA: CHOOSING FACTORS
   ================================================================ */

const choosingTips = [
  { icon: MapPin, title: 'Medina Location', tip: 'Choose a riad within 10 minutes walk of key landmarks. In Marrakech, near Jemaa el-Fna or Bab Doukkala. In Fez, near Bab Boujloud or Talaa Kebira. Too deep in the medina means difficult navigation after dark and longer porter walks with your luggage.' },
  { icon: BedDouble, title: 'Room Categories', tip: 'Ground floor rooms near the courtyard are cooler but may get fountain noise at night. Upper floor rooms are warmer, brighter, and often have balcony views. Corner rooms tend to be quieter. Suites with private terraces cost more but offer significant privacy. Always request a specific room when booking.' },
  { icon: CheckCircle, title: 'Recent Reviews', tip: 'Check reviews from the past 3 months. Riads change management frequently and quality can shift overnight. A riad that earned five stars a year ago may have declined. Look specifically for comments about cleanliness, breakfast quality, hot water pressure, WiFi reliability, and staff responsiveness.' },
  { icon: Wifi, title: 'Modern Amenities', tip: 'Not all riads have strong WiFi, reliable air conditioning, or consistent hot water. Ask specifically before booking if these matter to you. Older riads in Fez may have uneven plumbing. Many luxury riads now offer international power outlets, smart TVs, and Bluetooth speakers.' },
  { icon: ShieldCheck, title: 'Access & Transfers', tip: 'Confirm the riad offers an airport transfer or pickup from a nearby taxi drop-off. No vehicle can enter medina alleys. If you have mobility concerns, ask about stairs: most riads are multi-level without elevators, and some have very steep steps.' },
  { icon: Key, title: 'Direct Communication First', tip: 'Contact the riad directly via email or WhatsApp before booking. Ask about room photos, noise levels, renovation work, and arrival logistics. How quickly and thoroughly they respond tells you a lot about the service quality you can expect during your stay.' },
];

/* ================================================================
   DATA: BOOKING PLATFORMS
   ================================================================ */

const bookingPlatforms = [
  {
    platform: 'Direct (Website/WhatsApp)',
    icon: Key,
    pros: 'Save 10-15% by cutting out platform commissions. Negotiate upgrades. Build a relationship with the owner. Special requests handled directly.',
    cons: 'No free cancellation protection. Payment often by bank transfer or cash on arrival. Less recourse if problems arise.',
    bestFor: 'Travelers who have identified a specific riad and want the best price.',
  },
  {
    platform: 'Booking.com',
    icon: Globe,
    pros: 'Widest riad selection. Free cancellation options on most listings. Verified guest reviews. Price-match guarantee. No upfront payment on many properties.',
    cons: 'Riads pay 15-20% commission, sometimes reflected in higher listed prices. Room photos may be outdated.',
    bestFor: 'First-time visitors who want flexibility and cancellation protection.',
  },
  {
    platform: 'Airbnb',
    icon: Home,
    pros: 'Entire riad rentals for groups. Direct messaging with hosts before booking. Long-stay discounts. Service fee transparency.',
    cons: 'Smaller selection of traditional riads vs Booking.com. Host response times vary. Cleaning fees add up.',
    bestFor: 'Groups wanting a full riad to themselves, or longer stays of a week or more.',
  },
  {
    platform: 'Specialist Sites (i-escape, Mr & Mrs Smith)',
    icon: Award,
    pros: 'Curated luxury and boutique selections. Expert editorial reviews. Properties vetted by travel editors. Occasional exclusive offers.',
    cons: 'Limited to high-end properties. Smaller inventory. Less price competition.',
    bestFor: 'Luxury travelers seeking a curated, vetted selection of premium riads.',
  },
];

/* ================================================================
   DATA: COMMON ISSUES
   ================================================================ */

const commonIssues = [
  {
    issue: 'Noise',
    icon: Volume2,
    description: 'Medina sounds carry: call to prayer at dawn (around 5 AM), neighboring rooftop conversations, courtyard fountain splashing, and alley traffic outside the front door. Bring earplugs. Request upper-floor rooms away from the courtyard if you are a light sleeper. Luxury riads invest in soundproofing, but budget properties rarely do.',
    solution: 'Ask for a quiet room when booking. Upper floors and rooms facing inward are quieter. Earplugs solve the dawn call to prayer.',
  },
  {
    issue: 'Steep Stairs & No Elevators',
    icon: Footprints,
    description: 'Traditional riads were built centuries before elevators existed. Stairways are narrow, winding, and steep. Carrying heavy luggage up three flights is exhausting. Guests with mobility issues, knee problems, or young children should ask about ground-floor rooms or choose a modern riad with wider staircases.',
    solution: 'Request a ground-floor or first-floor room. Pack light. Some riads have staff who carry luggage.',
  },
  {
    issue: 'Difficult Access & Navigation',
    icon: Search,
    description: 'Riads sit inside medina alleys too narrow for vehicles. GPS often fails within the old city walls. First-time arrivals can be stressful, especially at night or with heavy bags. Street names are inconsistent between maps and reality.',
    solution: 'Always arrange a pickup via the riad. Share your arrival time and phone number. Save the riad WhatsApp number so you can call if lost.',
  },
  {
    issue: 'Inconsistent Infrastructure',
    icon: Wifi,
    description: 'Older riads in Fez and deep-medina Marrakech sometimes have weak WiFi, fluctuating water pressure, or temperamental air conditioning. Electric wiring in century-old buildings has limits. Hot water may run out if multiple rooms shower simultaneously.',
    solution: 'Check recent reviews for infrastructure complaints. Mid-range and luxury riads have generally invested in upgrades. Ask the riad directly about WiFi speed and AC.',
  },
];

/* ================================================================
   DATA: RIAD ETIQUETTE
   ================================================================ */

const etiquetteRules = [
  { icon: Home, rule: 'Remove shoes before entering rooms', detail: 'Most riads provide traditional babouche slippers at the entrance. Leave outdoor shoes by the door. Walking in socks through the zellige courtyard is perfectly acceptable.' },
  { icon: Clock, rule: 'Respect quiet hours after 22:00', detail: 'Riads are intimate spaces where sound travels easily between rooms. Keep conversations low and avoid playing music in the evenings. Other guests may be on different schedules.' },
  { icon: Users, rule: 'Dress modestly in common areas', detail: 'Cover shoulders and knees when in the courtyard, dining room, and rooftop. Swimwear is only appropriate at the plunge pool. Most Moroccan riad staff are Muslim and appreciate respectful dress.' },
  { icon: Heart, rule: 'Tip the staff at checkout', detail: 'From 50-100 MAD per day of your stay, left in an envelope at checkout for distribution among the team. Individual tips to specific staff who went above and beyond are also welcomed.' },
  { icon: Coffee, rule: 'Accept mint tea when offered', detail: 'Mint tea is a gesture of welcome and hospitality. Declining outright can be seen as impolite. Take at least a small sip. The tea ceremony is a core part of Moroccan social interaction.' },
  { icon: Info, rule: 'Communicate your schedule early', detail: 'Let the riad know your dinner plans, arrival time, departure details, and any dietary requirements. Staff often shop at the market daily based on guest needs. Last-minute requests are harder to accommodate.' },
];

/* ================================================================
   DATA: PRICE RANGES BY CITY
   ================================================================ */

const priceRanges = [
  { city: 'Marrakech', budget: 'From 300 MAD', midRange: 'From 700 MAD', luxury: 'From 2,000 MAD', peak: 'October - April', note: 'Most expensive riad city. Book well ahead for peak season.' },
  { city: 'Fez', budget: 'From 250 MAD', midRange: 'From 600 MAD', luxury: 'From 1,500 MAD', peak: 'March - May, Sept - Nov', note: '20-30% cheaper than Marrakech with equally stunning architecture.' },
  { city: 'Essaouira', budget: 'From 250 MAD', midRange: 'From 500 MAD', luxury: 'From 1,200 MAD', peak: 'June - September', note: 'Peak in summer when the coast is cooler. Great off-season deals.' },
  { city: 'Chefchaouen', budget: 'From 200 MAD', midRange: 'From 450 MAD', luxury: 'From 1,000 MAD', peak: 'April - June, Sept - Oct', note: 'Most affordable riad city. Prices rise in spring and autumn.' },
  { city: 'Rabat', budget: 'From 300 MAD', midRange: 'From 650 MAD', luxury: 'From 1,500 MAD', peak: 'Year-round (business)', note: 'Fewer tourist riads but consistent quality and steady pricing.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoRiadsGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* -- Hero -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-riads.webp)' }}
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
            Morocco Riads Guide:
            <br className="hidden md:block" /> How to Choose &amp; Book the Perfect Riad
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From courtyard gardens and rooftop terraces to zellige tilework and candlelit dinners --
            the complete guide to staying in a traditional Moroccan riad, with pricing from 200 MAD per night.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction: What Is a Riad? -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            What Is a Riad? Morocco&apos;s Most Distinctive Accommodation
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              A riad is a traditional Moroccan house built around an interior courtyard garden. The
              word comes from the Arabic &quot;ryad,&quot; meaning garden. Unlike Western architecture
              that projects outward with prominent facades, riads turn inward: plain exterior walls
              conceal breathtaking interiors of hand-cut zellige tilework, carved stucco, painted
              cedarwood ceilings, and lush courtyards with fountains and citrus trees. This design
              reflects Islamic values of privacy and modesty, creating an oasis of calm behind the
              noise of the medina.
            </p>
            <p>
              Riads date to the Marinid dynasty in the 12th century and reached their artistic peak
              under the Saadians in the 16th century, when wealthy merchants, scholars, and court
              officials competed to build increasingly elaborate residences. The most magnificent
              contained multiple courtyards, private hammams, and reception halls that functioned as
              small palaces.
            </p>
            <p>
              In the late 20th century, foreign buyers began purchasing abandoned medina houses and
              restoring them as boutique guesthouses. Today, Morocco has thousands of riad guesthouses
              ranging from simple family-run homes (from 200 MAD per night) to palatial five-star
              properties (from 8,000 MAD). Staying in a riad is widely considered the most authentic
              and memorable way to experience Moroccan culture, craftsmanship, and hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* -- Riad vs Dar -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Riad vs Dar: What&apos;s the Difference?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both are traditional Moroccan dwellings, but they differ in scale and ornamentation.
            Many properties marketed as riads are technically dars, which does not diminish the experience.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Feature</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Riad</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Dar</th>
                  </tr>
                </thead>
                <tbody>
                  {riadVsDar.map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.feature}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.riad}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.dar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 card-moroccan p-5 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <p className="text-sm text-[var(--text-secondary)]">
              <Info className="w-4 h-4 inline-block text-[var(--color-accent)] mr-1" />
              <strong>Practical note:</strong> Do not fixate on the riad/dar distinction when booking.
              A well-maintained dar with excellent staff can provide a better experience than a large,
              poorly managed riad. Focus on reviews, photos, and direct communication with the property.
            </p>
          </div>
        </div>
      </section>

      {/* -- Architecture -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Architecture: Five Defining Features
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Centuries of craftsmanship create living works of art. Here is what makes riad architecture unique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architecturalFeatures.map((feat) => {
              const FeatIcon = feat.icon;
              return (
                <div key={feat.name} className="card-moroccan p-6">
                  <FeatIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {feat.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Riads in Marrakech -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Budget gems, mid-range favorites, and palatial luxury properties. Seasonal pricing can change, so confirm rates directly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marrakechRiads.map((riad) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <RiadIcon className="w-8 h-8 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {riad.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{riad.tier} &middot; {riad.area}</p>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Riads in Fez -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Riads in Fez
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fez&apos;s medina is a UNESCO World Heritage Site. Its riads showcase the finest examples of
            Moroccan zellige and cedarwood craftsmanship, often at prices 20-30% below Marrakech.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fezRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {riad.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3 h-3 inline-block mr-1" />{riad.area}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{riad.description}</p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">{riad.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Essaouira & Chefchaouen -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Riads in Essaouira &amp; Chefchaouen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCityRiads.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city}>
                  <div className="flex items-center gap-2 mb-4">
                    <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
              );
            })}
          </div>
        </div>
      </section>

      {/* -- What to Expect at a Riad -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect at a Moroccan Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A riad stay is an immersive experience, not just a bed for the night. Here is what makes it distinctive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riadExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6">
                  <ExpIcon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {exp.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- How to Choose -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            How to Choose the Right Riad: Key Factors
          </h2>
          <div className="space-y-4">
            {choosingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                  <TipIcon className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Booking Platforms -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Platforms Compared
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each booking channel has trade-offs. Many experienced travelers research on platforms, then book directly for the best rate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingPlatforms.map((bp) => {
              const BpIcon = bp.icon;
              return (
                <div key={bp.platform} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BpIcon className="w-8 h-8 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {bp.platform}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Pros:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{bp.pros}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Cons:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{bp.cons}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-gold)]">Best for:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{bp.bestFor}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Common Issues -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Riad Issues &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Riads are extraordinary, but they come with quirks. Knowing what to expect prevents disappointment.
          </p>
          <div className="space-y-6">
            {commonIssues.map((item) => {
              const IssueIcon = item.icon;
              return (
                <div key={item.issue} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <IssueIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.issue}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Solution:</span> {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Etiquette -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Etiquette &amp; Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect the traditions of your hosts and you will be rewarded with genuine Moroccan warmth.
          </p>
          <div className="space-y-3">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5 flex gap-4">
                  <RuleIcon className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {rule.rule}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{rule.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Price Ranges by City -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riad Prices by City &amp; Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Per room per night. Breakfast is almost always included. Seasonal pricing can change without notice.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Peak season rates can be 30-50% higher than the starting prices listed below.
            Christmas, New Year, and Easter command the highest premiums.
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
          <p className="text-xs text-[var(--text-muted)] text-center mt-4">
            Prices reflect 2025-2026 rates. Seasonal pricing can change without notice.
            During Ramadan and national holidays, availability may be limited and some riads close temporarily.
          </p>
        </div>
      </section>

      {/* -- Gallery -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Inside a Moroccan Riad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-riads.webp', alt: 'Traditional Moroccan riad courtyard with zellige fountain, lush garden plants, and arched galleries', label: 'Riad Courtyard' },
              { src: '/images/art-moroccan-hammam.webp', alt: 'Traditional hammam steam bath interior with marble surfaces and warm lighting inside a Moroccan riad', label: 'In-House Hammam' },
              { src: '/images/art-moroccan-breakfast.webp', alt: 'Generous Moroccan breakfast spread with mint tea, msemen pancakes, and fresh fruit on a riad rooftop terrace', label: 'Rooftop Breakfast' },
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

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions travelers ask about booking and staying in Moroccan riads.
          </p>
          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Marrakech City Guide',
                description: 'Everything you need for exploring the Red City, from Jemaa el-Fna to the souks and beyond.',
                href: '/marrakech',
                icon: MapPin,
              },
              {
                title: 'Morocco Spa & Hammam Guide',
                description: 'Step-by-step hammam ritual, etiquette, best spas by city, products, and pricing from 50 MAD.',
                href: '/morocco-spa-guide',
                icon: Sparkles,
              },
              {
                title: 'Morocco Budget Guide',
                description: 'How to travel Morocco on any budget with tips on accommodation, transport, food, and activities.',
                href: '/morocco-budget-guide',
                icon: DollarSign,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress code, tipping customs, greetings, and social norms for respectful travel in Morocco.',
                href: '/etiquette',
                icon: ShieldCheck,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- More Accommodation Resources -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Accommodation Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/accommodations', title: 'Accommodation Overview', desc: 'Compare riads, hotels, hostels, guesthouses, and desert camps across Morocco.' },
              { href: '/morocco-luxury-hotels', title: 'Luxury Hotels Morocco', desc: 'Five-star resorts, palace hotels, and premium accommodations for luxury travelers.' },
              { href: '/fes-guide', title: 'Fez City Guide', desc: 'Navigate the world\'s largest car-free urban area with our guide to Fez\'s medina and culture.' },
              { href: '/chefchaouen', title: 'Chefchaouen Guide', desc: 'The Blue City in the Rif Mountains: what to see, where to stay, and how to get there.' },
              { href: '/essaouira', title: 'Essaouira Guide', desc: 'Wind, waves, and whitewashed walls on Morocco\'s Atlantic coast.' },
              { href: '/morocco-spa-guide', title: 'Hammam & Spa Guide', desc: 'Traditional hammam ritual, products, best spas by city, and pricing guide.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Book Your Moroccan Riad?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From intimate courtyard gardens to palatial converted mansions, a riad stay is the
            heart of any Morocco trip. Start planning your accommodation today.
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
              href="/fes-guide"
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
