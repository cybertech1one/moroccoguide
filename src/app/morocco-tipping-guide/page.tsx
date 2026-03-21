import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  DollarSign,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  BookOpen,
  ShieldCheck,
  Star,
  MapPin,
  Coffee,
  UtensilsCrossed,
  Hotel,
  Car,
  Compass,
  HandCoins,
  CircleDot,
  Banknote,
  Heart,
  HelpCircle,
  Fuel,
  Sparkles,
  Clock,
  MessageCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Tipping Guide 2026 | Who, When & How Much to Tip',
  description:
    'Complete guide to tipping in Morocco. How much to tip at restaurants, cafes, hotels, taxis, tour guides, hammams, and more. Tipping etiquette, amounts in MAD, and when NOT to tip.',
  keywords: [
    'tipping in Morocco',
    'Morocco tipping guide',
    'how much to tip in Morocco',
    'tipping etiquette Morocco',
    'Morocco tip amounts',
    'restaurant tipping Morocco',
    'hotel tipping Morocco',
    'taxi tip Morocco',
    'tour guide tip Morocco',
    'hammam tip Morocco',
    'Morocco gratuity guide',
    'tipping culture Morocco',
    'Morocco service charges',
    'Morocco travel tips',
    'Morocco money guide',
    'Morocco tipping customs 2026',
    'should I tip in Morocco',
    'tipping rules Morocco',
    'how to tip in Morocco',
    'Morocco cash tips',
  ],
  openGraph: {
    title: 'Morocco Tipping Guide 2026 | Who, When & How Much to Tip',
    description:
      'Complete guide to tipping in Morocco. Learn exact amounts for restaurants, hotels, taxis, tour guides, hammams, and more. Practical advice in MAD.',
    url: `${BASE_URL}/morocco-tipping-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-money.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan dirhams and coins on a traditional brass tray, representing tipping culture in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Tipping Guide 2026 | Complete Tipping Etiquette',
    description:
      'Who to tip, how much, and when in Morocco. Practical guide with exact amounts in MAD for every situation travelers encounter.',
    images: [`${BASE_URL}/images/hero-morocco-money.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-tipping-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-tipping-guide`,
  name: 'Morocco Tipping Guide 2026 | Who, When & How Much to Tip',
  description:
    'Complete guide to tipping in Morocco. How much to tip at restaurants, cafes, hotels, taxis, tour guides, hammams, and more. Tipping etiquette, amounts in MAD, and when NOT to tip.',
  url: `${BASE_URL}/morocco-tipping-guide`,
  image: `${BASE_URL}/images/hero-morocco-money.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-tipping-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Tipping Guide', item: `${BASE_URL}/morocco-tipping-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is tipping expected in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, tipping is an important part of Moroccan culture. While not legally required, it is widely expected and appreciated. Many service workers rely on tips as a significant portion of their income. Small tips of 5-20 MAD are common for everyday services, while larger tips of 50-200 MAD are appropriate for tour guides and specialized services.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip at a restaurant in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At sit-down restaurants, tip 10-15% of the bill. At casual eateries and street food stalls, rounding up or leaving 5-10 MAD is sufficient. If a service charge is already included on the bill, an additional small tip of 5-10 MAD is still appreciated but not required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I tip taxi drivers in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For metered petit taxis, round up to the nearest 5 or 10 MAD. For example, if the fare is 17 MAD, pay 20 MAD. For grand taxis on longer routes, tipping is not expected as the price is pre-negotiated. For private drivers or airport transfers, tip 20-50 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What currency should I use for tipping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Always tip in Moroccan dirhams (MAD). While euros may be accepted in tourist areas, it is better to use local currency. Small denominations (10, 20, and 50 MAD notes) are ideal. Keep a supply of small bills specifically for tipping throughout your trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which hand should I use to give a tip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use your right hand to give tips in Morocco. The left hand is traditionally considered unclean in Moroccan culture. If you need to use both hands (e.g., to pass something large), that is acceptable, but avoid using only the left hand when handing money to someone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I tip with a credit card in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash tipping is strongly preferred in Morocco. Even in restaurants that accept cards, there is often no option to add a tip to the card payment. Always carry small bills in MAD for tipping. Card payments are becoming more common in upscale restaurants and hotels, but the tip should still ideally be left in cash.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I tip faux guides in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Faux guides (unofficial guides who approach tourists in medinas and souks) are technically illegal in Morocco. If someone provides unsolicited directions or guidance, you are not obligated to tip. However, if someone genuinely helps you find a location, a small tip of 10-20 MAD is a reasonable gesture. Politely decline if you do not need assistance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip a tour guide in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a licensed full-day tour guide, tip from 100-200 MAD per person. For a half-day tour, from 50-100 MAD is appropriate. For multi-day desert tours, tip from 150-300 MAD per person for the guide, and from 50-100 MAD for the driver. Group tours typically warrant lower per-person tips.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPPING TABLE
   ═══════════════════════════════════════════════════════════════ */

const tippingTable = [
  { service: 'Sit-down restaurant', amount: 'From 10-15% of bill', typical: 'From 20-50 MAD', note: 'Leave cash on the table' },
  { service: 'Casual cafe / coffee shop', amount: 'Round up or small tip', typical: 'From 5-10 MAD', note: 'Leave coins with the bill' },
  { service: 'Street food / snack stall', amount: 'Optional', typical: 'From 2-5 MAD', note: 'Rounding up is appreciated' },
  { service: 'Hotel porter / bellhop', amount: 'Per bag carried', typical: 'From 10-20 MAD', note: 'Tip at time of service' },
  { service: 'Hotel housekeeping', amount: 'Per night', typical: 'From 10-20 MAD', note: 'Leave daily on pillow or nightstand' },
  { service: 'Hotel concierge', amount: 'For special arrangements', typical: 'From 20-50 MAD', note: 'Tip when the task is completed' },
  { service: 'Riad staff', amount: 'End of stay', typical: 'From 50-100 MAD total', note: 'Give to the person or leave in communal tip jar' },
  { service: 'Petit taxi (metered)', amount: 'Round up the fare', typical: 'From 3-10 MAD', note: 'No tip expected on very short rides' },
  { service: 'Grand taxi', amount: 'Not expected', typical: 'From 0 MAD', note: 'Price is pre-negotiated; tip only for exceptional service' },
  { service: 'Private driver / transfer', amount: 'Per trip', typical: 'From 20-50 MAD', note: 'More for airport or long-distance transfers' },
  { service: 'Licensed tour guide (full day)', amount: 'Per person', typical: 'From 100-200 MAD', note: 'Tip at end of the tour' },
  { service: 'Licensed tour guide (half day)', amount: 'Per person', typical: 'From 50-100 MAD', note: 'Tip at end of the tour' },
  { service: 'Desert camel handler', amount: 'Per ride / excursion', typical: 'From 30-50 MAD', note: 'Tip directly to the handler' },
  { service: 'Desert camp staff', amount: 'End of stay', typical: 'From 50-100 MAD total', note: 'Shared among all camp staff' },
  { service: 'Hammam attendant / kessala', amount: 'Per session', typical: 'From 20-50 MAD', note: 'On top of the hammam entry fee' },
  { service: 'Spa therapist (luxury)', amount: 'Per treatment', typical: 'From 50-100 MAD', note: 'Appreciated but not mandatory' },
  { service: 'Parking attendant (gardien)', amount: 'Per parking session', typical: 'From 5-10 MAD', note: 'Pay when you return to your car' },
  { service: 'Gas station attendant', amount: 'Per fill-up', typical: 'From 5-10 MAD', note: 'If they clean your windshield, tip more' },
  { service: 'Hairdresser / barber', amount: '10-15% of bill', typical: 'From 10-30 MAD', note: 'Tip directly to the person who served you' },
  { service: 'Faux guide (unofficial)', amount: 'If genuinely helpful', typical: 'From 10-20 MAD', note: 'You are not obligated; politely decline if unwanted' },
  { service: 'Public restroom attendant', amount: 'Per use', typical: 'From 2-5 MAD', note: 'Usually indicated at the entrance' },
  { service: 'Musician / entertainer', amount: 'If you enjoy the performance', typical: 'From 10-20 MAD', note: 'Common at Jemaa el-Fna and riads' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPPING BY CATEGORY (DETAILED)
   ═══════════════════════════════════════════════════════════════ */

const tippingCategories = [
  {
    title: 'Restaurants & Dining',
    icon: UtensilsCrossed,
    description:
      'Tipping at restaurants is customary in Morocco, though the amount varies by the type of establishment. Service charges are occasionally included at upscale restaurants, but even then, a small additional tip is welcomed.',
    scenarios: [
      {
        situation: 'Upscale restaurant',
        tip: 'From 10-15% of the total bill',
        detail:
          'At high-end restaurants in cities like Marrakech, Casablanca, and Fes, tipping 10-15% is standard. If a service charge (service compris) is already added to the bill, an extra 5-10% in cash is a nice gesture for your server.',
      },
      {
        situation: 'Mid-range restaurant',
        tip: 'From 10% of the bill or from 20-40 MAD',
        detail:
          'At typical tourist-oriented restaurants, 10% is the norm. For a meal costing from 150 MAD, leaving from 15-20 MAD is appropriate. Place the tip in cash on the table or hand it directly to the server.',
      },
      {
        situation: 'Local eatery / diner',
        tip: 'From 5-10 MAD',
        detail:
          'At small, local restaurants where Moroccans eat, tips are smaller. Rounding up the bill or leaving from 5-10 MAD is sufficient. The gesture matters more than the amount at these establishments.',
      },
      {
        situation: 'Street food stalls',
        tip: 'From 2-5 MAD or round up',
        detail:
          'Tipping is not expected at street food stalls, but rounding up or leaving a few coins is appreciated. If someone at a stall goes out of their way to help you, from 5 MAD is a kind acknowledgment.',
      },
    ],
  },
  {
    title: 'Cafes & Coffee Shops',
    icon: Coffee,
    description:
      'Morocco has a vibrant cafe culture, from traditional coffee houses to modern espresso bars. Tipping at cafes is simpler and smaller than at restaurants.',
    scenarios: [
      {
        situation: 'Traditional cafe (mint tea, coffee)',
        tip: 'From 2-5 MAD',
        detail:
          'A glass of mint tea costs from 10-15 MAD. Leaving from 2-5 MAD or rounding up to the next round number is standard. Many Moroccans leave the small change from their bill.',
      },
      {
        situation: 'Modern coffee shop / patisserie',
        tip: 'From 5-10 MAD',
        detail:
          'At upscale cafes and patisseries, where you might spend from 40-80 MAD, leaving from 5-10 MAD is appropriate. If you sat for a long time and only ordered one drink, a slightly larger tip is a nice gesture.',
      },
    ],
  },
  {
    title: 'Hotels & Riads',
    icon: Hotel,
    description:
      'Hotels and riads involve multiple staff members who may each deserve a tip. The key is to tip the right person at the right time. In small riads, there may be a communal tip jar.',
    scenarios: [
      {
        situation: 'Porter / bellhop',
        tip: 'From 10-20 MAD per bag',
        detail:
          'Tip the porter when they carry your bags to your room. For a luxury hotel, from 20 MAD per bag is standard. For a mid-range hotel, from 10 MAD per bag is fine.',
      },
      {
        situation: 'Housekeeping',
        tip: 'From 10-20 MAD per night',
        detail:
          'Leave the tip daily on your pillow or nightstand rather than at the end of your stay. Different staff may clean your room on different days, and a daily tip ensures each person is recognized.',
      },
      {
        situation: 'Concierge',
        tip: 'From 20-50 MAD per special request',
        detail:
          'If the concierge books a restaurant, arranges a taxi, or provides exceptional recommendations, tip from 20-50 MAD depending on the effort involved. For complex arrangements like a private tour, from 50 MAD or more is appropriate.',
      },
      {
        situation: 'Riad staff (small properties)',
        tip: 'From 50-100 MAD at end of stay',
        detail:
          'In a small riad with 3-6 rooms, you often interact with the same few staff members throughout your stay. Leaving from 50-100 MAD at the end as a collective tip is standard. You can give it directly to the manager to distribute or place it in a tip jar if one is available.',
      },
      {
        situation: 'Room service',
        tip: 'From 10-20 MAD',
        detail:
          'Tip the staff member who delivers room service from 10-20 MAD, even if a service charge is included on the bill. Hand the cash directly to the person at the door.',
      },
    ],
  },
  {
    title: 'Taxi Drivers',
    icon: Car,
    description:
      'Morocco has two main types of taxis: petit taxis (city taxis, metered) and grand taxis (shared inter-city taxis, fixed routes). Tipping norms differ between them.',
    scenarios: [
      {
        situation: 'Petit taxi (metered, within city)',
        tip: 'Round up to nearest 5 or 10 MAD',
        detail:
          'If the meter reads 17 MAD, pay 20 MAD. If it reads 32 MAD, pay 35 MAD. This rounding-up is the standard practice. Moroccans rarely tip more than this. If the driver uses the meter without complaint and drives safely, the round-up is sufficient.',
      },
      {
        situation: 'Grand taxi (shared, inter-city)',
        tip: 'Not expected',
        detail:
          'Grand taxis operate on fixed routes with pre-negotiated prices. Tipping is not customary. The price you agree upon is the full amount. If a driver provides exceptional service on a private hire, from 10-20 MAD is a kind gesture.',
      },
      {
        situation: 'Private driver / airport transfer',
        tip: 'From 20-50 MAD',
        detail:
          'For arranged private transfers, particularly from airports, tip from 20-50 MAD depending on the distance and whether the driver helped with luggage. For a full-day private driver, from 50-100 MAD is generous.',
      },
    ],
  },
  {
    title: 'Tour Guides',
    icon: Compass,
    description:
      'Licensed tour guides (guides officiels) are an essential part of exploring Morocco. They undergo formal training and examination. Their tips should reflect the quality and duration of the experience.',
    scenarios: [
      {
        situation: 'Full-day city tour (6-8 hours)',
        tip: 'From 100-200 MAD per person',
        detail:
          'A licensed guide leading you through the medina of Fes or Marrakech for a full day deserves a substantial tip. For a private tour, from 150-200 MAD per person is standard. For a group tour, from 100 MAD per person is appropriate.',
      },
      {
        situation: 'Half-day tour (3-4 hours)',
        tip: 'From 50-100 MAD per person',
        detail:
          'A half-day walking tour or thematic tour warrants from 50-100 MAD per person. Tip more if the guide went above and beyond, answered questions enthusiastically, or customized the experience.',
      },
      {
        situation: 'Multi-day desert tour guide',
        tip: 'From 150-300 MAD per person total',
        detail:
          'For a 2-3 day desert tour, tip the guide from 150-300 MAD at the end of the trip. Tip the driver separately (from 50-100 MAD per person). The cook and camp staff should receive from 50-100 MAD collectively per person.',
      },
      {
        situation: 'Activity-specific guide (hiking, surfing)',
        tip: 'From 50-100 MAD per person',
        detail:
          'For activity guides such as Atlas Mountain trek leaders, surf instructors, or cooking class chefs, from 50-100 MAD per person is appropriate. These guides often share local knowledge beyond the activity itself.',
      },
    ],
  },
  {
    title: 'Desert & Camel Handlers',
    icon: Compass,
    description:
      'The Sahara desert experience involves multiple service providers. Camel handlers, camp staff, and drivers all contribute to the experience and each deserves recognition.',
    scenarios: [
      {
        situation: 'Camel handler (short ride, 1-2 hours)',
        tip: 'From 30-50 MAD per person',
        detail:
          'The person leading your camel through the dunes deserves a direct tip. From 30-50 MAD per person for a sunset or sunrise ride is standard. Hand it to the handler directly at the end of the ride.',
      },
      {
        situation: 'Camel handler (overnight trek)',
        tip: 'From 50-100 MAD per person',
        detail:
          'For an overnight camel trek deep into the dunes, where the handler cares for you and the camels for an extended period, from 50-100 MAD per person is appropriate.',
      },
      {
        situation: 'Desert camp staff',
        tip: 'From 50-100 MAD total per person',
        detail:
          'The camp staff cook your meals, maintain the camp, provide entertainment, and ensure your comfort. A collective tip of from 50-100 MAD per person at the end of your stay is standard. Give it to the camp manager to distribute.',
      },
    ],
  },
  {
    title: 'Hammam & Spa',
    icon: Sparkles,
    description:
      'Tipping at hammams and spas varies dramatically between public hammams and luxury spas. In both cases, the person who scrubs or treats you is the one to tip.',
    scenarios: [
      {
        situation: 'Public hammam attendant (kessala)',
        tip: 'From 20-50 MAD',
        detail:
          'The kessala (scrubber) at a public hammam works hard and earns modest wages. From 20-50 MAD is standard for a gommage. If the service was particularly thorough and attentive, lean toward the higher end.',
      },
      {
        situation: 'Luxury spa therapist',
        tip: 'From 50-100 MAD per treatment',
        detail:
          'At upscale spas, tipping from 50-100 MAD per treatment is appreciated. For an extended multi-hour ritual, from 100 MAD is a generous acknowledgment. Some luxury spas include gratuity in the bill; check before doubling up.',
      },
      {
        situation: 'Hammam entrance attendant',
        tip: 'From 5-10 MAD',
        detail:
          'The person who manages the changing room and lockers at a public hammam deserves a small tip of from 5-10 MAD. They keep your belongings safe while you bathe.',
      },
    ],
  },
  {
    title: 'Other Common Situations',
    icon: HandCoins,
    description:
      'Beyond the main categories, there are several everyday situations in Morocco where tipping is customary. Being prepared with small bills makes these interactions smooth.',
    scenarios: [
      {
        situation: 'Parking attendant (gardien de voiture)',
        tip: 'From 5-10 MAD',
        detail:
          'Unofficial parking attendants in their reflective vests are ubiquitous in Moroccan cities. They watch your car while you are away. Pay from 5-10 MAD when you return. For overnight parking, from 10-20 MAD is appropriate.',
      },
      {
        situation: 'Gas station attendant',
        tip: 'From 5-10 MAD',
        detail:
          'Most gas stations in Morocco are full-service. The attendant pumps your fuel and may clean your windshield or check your tires. From 5-10 MAD is the standard tip. If they provide extra services like checking oil, from 10-20 MAD.',
      },
      {
        situation: 'Hairdresser / barber',
        tip: 'From 10-30 MAD (10-15% of the bill)',
        detail:
          'A traditional Moroccan barber shave costs from 30-50 MAD, and a haircut from 40-80 MAD. Tip from 10-20 MAD for a barber. At high-end salons where services may cost from 200-500 MAD, tip 10-15% of the total.',
      },
      {
        situation: 'Public restroom attendant',
        tip: 'From 2-5 MAD',
        detail:
          'Many public restrooms in Morocco have attendants who keep the facilities clean and provide toilet paper. From 2-5 MAD is expected. The amount is often indicated on a small sign at the entrance.',
      },
      {
        situation: 'Musician / performer',
        tip: 'From 10-20 MAD',
        detail:
          'Gnaoua musicians, snake charmers, and storytellers on Jemaa el-Fna or at riad dinners appreciate tips of from 10-20 MAD. If you take a photo of a performer, a tip is expected.',
      },
      {
        situation: 'Grocery delivery / shop assistant',
        tip: 'From 5-10 MAD',
        detail:
          'If a shopkeeper sends an assistant to carry your purchases or deliver groceries to your riad, from 5-10 MAD is a thoughtful tip.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHEN NOT TO TIP
   ═══════════════════════════════════════════════════════════════ */

const whenNotToTip = [
  {
    situation: 'Grand taxis on fixed routes',
    icon: Car,
    reason: 'The price is pre-negotiated and covers the full fare. Tipping is not customary for shared grand taxis.',
  },
  {
    situation: 'Shop owners / merchants',
    icon: Building,
    reason: 'You do not tip the owner of a shop after making a purchase, even after lengthy bargaining. The negotiated price is the final transaction.',
  },
  {
    situation: 'Unsolicited faux guides who pressure you',
    icon: AlertTriangle,
    reason: 'If someone aggressively follows you offering unwanted directions, you are not obligated to pay. Politely decline and walk away. Only tip if you actually requested or accepted the help.',
  },
  {
    situation: 'When service is genuinely poor',
    icon: ShieldCheck,
    reason: 'If service is truly bad, it is acceptable to leave a minimal tip or none at all. However, keep in mind that service standards differ from Western expectations. Slow service is not always bad service.',
  },
  {
    situation: 'ATM operators / bank tellers',
    icon: Banknote,
    reason: 'Banking transactions do not involve tipping. This includes currency exchange offices (bureaux de change).',
  },
  {
    situation: 'Bus drivers on public routes',
    icon: MapPin,
    reason: 'Intercity bus drivers (CTM, Supratours) are not tipped. The ticket price covers the service. Porters who load luggage in the hold may be tipped from 5-10 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPPING ETIQUETTE RULES
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Use Your Right Hand',
    icon: HandCoins,
    description:
      'Always hand tips (and money in general) with your right hand. The left hand is traditionally considered unclean in Moroccan culture. This is one of the most important etiquette rules to follow.',
  },
  {
    rule: 'Tip Discreetly',
    icon: ShieldCheck,
    description:
      'Avoid making a show of tipping. Hand the money quietly and directly to the person. At restaurants, leave it folded under a plate or glass. Discretion shows respect for both the recipient and the culture.',
  },
  {
    rule: 'Tip at the Right Time',
    icon: Clock,
    description:
      'For porters and taxi drivers, tip immediately after the service. For tour guides, tip at the end of the tour. For housekeeping, leave the tip daily. Timing shows awareness and appreciation.',
  },
  {
    rule: 'Carry Small Bills',
    icon: Banknote,
    description:
      'Keep a supply of 10, 20, and 50 MAD notes specifically for tipping. Breaking a 200 MAD note for a 10 MAD tip creates an awkward situation. Visit an ATM or exchange office at the start of each day if needed.',
  },
  {
    rule: 'Tip the Person Who Served You',
    icon: Users,
    description:
      'Whenever possible, hand the tip directly to the person who provided the service. In restaurants, hand it to your server rather than leaving it at the cash register. At hotels, tip the specific porter or housekeeper.',
  },
  {
    rule: 'Do Not Over-Tip',
    icon: AlertTriangle,
    description:
      'While generosity is appreciated, excessive tipping can create unrealistic expectations for future travelers and may be perceived as patronizing. Follow the local norms listed in this guide.',
  },
  {
    rule: 'Be Gracious, Not Grudging',
    icon: Heart,
    description:
      'A tip given with a smile and a "shukran" (thank you) or "barak Allahu fik" (may God bless you) means more than the money itself. The warmth of the gesture matters as much as the amount.',
  },
  {
    rule: 'Understand the Economy',
    icon: CircleDot,
    description:
      'Morocco has a minimum wage of approximately 3,000 MAD per month in urban areas. Many service workers earn near this level. A tip of 20-50 MAD may seem small to a tourist but is meaningful to the recipient.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CASH VS CARD
   ═══════════════════════════════════════════════════════════════ */

const cashVsCard = [
  {
    aspect: 'Acceptance',
    cash: 'Universally accepted everywhere in Morocco. The only way to tip in most situations including taxis, street vendors, hammams, and parking attendants.',
    card: 'Card payments accepted at upscale restaurants, hotels, and some shops. However, very few establishments offer the option to add a tip to a card payment.',
  },
  {
    aspect: 'Preferred Method',
    cash: 'Strongly preferred for tipping. Most Moroccans expect and prefer cash tips. Cash goes directly to the service worker without deductions or delays.',
    card: 'Not practical for tipping in the vast majority of situations. Even when you pay the bill by card, leave the tip in cash.',
  },
  {
    aspect: 'Convenience',
    cash: 'Requires planning ahead. Visit an ATM or exchange office at the start of each day. Keep small denominations (10, 20, 50 MAD notes and coins) handy.',
    card: 'More convenient for large payments but not for tipping. Relying on cards alone will leave you unable to tip in most situations.',
  },
  {
    aspect: 'Best Practice',
    cash: 'Withdraw from 500-1,000 MAD at a time and ask for small denominations. Many ATMs dispense 100 MAD and 200 MAD notes. Break larger notes at shops or your hotel.',
    card: 'Use your card for hotel stays, upscale restaurant bills, and larger purchases. Always have cash on hand for tips, taxis, and smaller transactions.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is tipping expected in Morocco?',
    answer:
      'Yes, tipping is an important part of Moroccan culture and economy. While not legally required, it is widely expected in most service situations. Many workers in tourism and hospitality rely on tips as a significant supplement to their wages. The Moroccan word for tip is "pourboire" (from French) or "bakhshish" in Darija.',
  },
  {
    question: 'How much should I budget for tips during my Morocco trip?',
    answer:
      'A reasonable daily tipping budget is from 50-100 MAD per person for a typical tourist day (meals, taxi, small services). For days involving guided tours or desert excursions, budget from 150-300 MAD per person. Over a 7-day trip, from 500-1,500 MAD per person for tips is a comfortable range, depending on your activities and accommodation level.',
  },
  {
    question: 'Should I tip if a service charge is already included?',
    answer:
      'If you see "service compris" on a restaurant bill, a 10-15% service charge has already been added. However, this charge often goes to the establishment rather than directly to your server. A small additional cash tip of from 5-10% shows appreciation for your specific server. At hotels, included service charges do not replace tips to individual staff members.',
  },
  {
    question: 'What if I accidentally tip with my left hand?',
    answer:
      'It is not a catastrophe. Moroccans are generally understanding of cultural differences, especially with tourists. However, it is considered more polite and respectful to use your right hand. If you realize you have used your left hand, a friendly smile and "shukran" will smooth over any minor faux pas.',
  },
  {
    question: 'Is it better to tip in dirhams or euros?',
    answer:
      'Always tip in Moroccan dirhams (MAD). While euros or US dollars may be accepted in heavily touristic areas, local currency is preferred and more practical for the recipient. A 1 euro coin may seem convenient to you, but the recipient then has to exchange it. Keep a supply of dirham coins and small notes specifically for tipping.',
  },
  {
    question: 'How do I handle persistent requests for tips?',
    answer:
      'In tourist areas, you may encounter people requesting tips for unsolicited services: opening a door, pointing you in a direction, or posing for a photo. If you did not request the service, you are not obligated to tip. A polite but firm "la shukran" (no thank you) is sufficient. If someone genuinely helps you, a small tip of from 5-10 MAD is appropriate.',
  },
  {
    question: 'Do Moroccans tip each other?',
    answer:
      'Yes, tipping is part of Moroccan culture for locals as well, though amounts are typically smaller. Moroccans routinely tip at cafes (leaving coins), parking attendants, and hammam staff. The concept of bakhshish (small gratuity for services) is deeply embedded in daily life, not just tourism.',
  },
  {
    question: 'Should I tip children who offer to help?',
    answer:
      'This is a sensitive topic. While some children may offer to carry bags or show you directions, tipping children can encourage them to skip school. If a child provides a genuine service, a small amount of from 5 MAD is acceptable, but it is generally better to tip adults. Buying a child a snack or drink rather than giving cash is another considerate approach.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTippingGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco-money.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Tipping Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <HandCoins className="w-4 h-4" />
            Travel Essentials
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Tipping Guide:
            <br className="hidden md:block" /> Who, When &amp; How Much
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide to tipping in Morocco. Exact amounts in MAD for
            restaurants, hotels, taxis, tour guides, hammams, and every situation
            you will encounter as a traveler.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Understanding Tipping Culture in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tipping in Morocco is not just about money. It is a deeply embedded social
                practice that reflects the country&apos;s values of generosity, hospitality, and
                mutual respect. The Arabic concept of <strong>bakhshish</strong> -- a small
                gratuity given for services rendered -- has been part of Moroccan daily life for
                centuries.
              </p>
              <p>
                For travelers, understanding when and how much to tip can feel overwhelming.
                Morocco has different expectations for different situations, and the amounts
                vary significantly between a casual cafe and a luxury hotel. This guide
                breaks down every tipping scenario you are likely to encounter, with specific
                amounts in Moroccan dirhams (MAD).
              </p>
              <p>
                The general rule is simple: if someone provides you a service, a small tip is
                appreciated. Morocco is not a high-tip culture like the United States, but
                tips are meaningful. Many service workers earn near the minimum wage of
                approximately 3,000 MAD per month, and tips make a real difference in their
                daily lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Reference Tipping Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping Quick Reference Table
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            At-a-glance tipping amounts for every common situation in Morocco. All amounts are in Moroccan dirhams (MAD).
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            These are guideline amounts. Tip more for exceptional service, less if the service was below expectations.
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Guideline</div>
                <div className="p-3 px-4">Typical Amount</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {tippingTable.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.amount}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.typical}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailed Tipping by Category ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Detailed Tipping Guide by Category
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            In-depth tipping guidance for every type of service you will encounter in Morocco, with specific scenarios and explanations.
          </p>

          <div className="space-y-12">
            {tippingCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.title} className="max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6 ml-[52px]">
                    {category.description}
                  </p>
                  <div className="space-y-4 ml-[52px]">
                    {category.scenarios.map((scenario) => (
                      <div key={scenario.situation} className="card-moroccan p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {scenario.situation}
                          </h4>
                          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0 ml-4">
                            {scenario.tip}
                          </span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {scenario.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── When NOT to Tip ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When NOT to Tip in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            While tipping is widespread in Morocco, there are situations where it is not expected or appropriate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whenNotToTip.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.situation} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.situation}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tipping Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How you tip matters as much as how much you tip. Follow these guidelines for respectful and appropriate tipping.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cash vs Card ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cash vs. Card: How to Tip in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is predominantly a cash economy, especially when it comes to tipping. Here is what you need to know about payment methods.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {cashVsCard.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Banknote className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Cash (MAD)</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.cash}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Card Payment</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.card}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily Tipping Budget ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Tipping Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How much to set aside each day for tips, based on your travel style and activities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mx-auto mb-4">
                <Banknote className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Budget Traveler
              </h3>
              <div className="text-2xl font-bold text-[var(--color-accent)] mb-3">From 30-50 MAD / day</div>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Cafe tips: from 5-10 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Restaurant tip: from 10-15 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Taxi round-ups: from 5-10 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Small services: from 5-10 MAD
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6 text-center border-2 border-[var(--color-accent)]">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mid-Range Traveler
              </h3>
              <div className="text-2xl font-bold text-[var(--color-accent)] mb-3">From 70-120 MAD / day</div>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Cafe and meals: from 20-40 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Hotel staff: from 20-30 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Taxis: from 10-20 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Various services: from 20-30 MAD
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Luxury Traveler
              </h3>
              <div className="text-2xl font-bold text-[var(--color-accent)] mb-3">From 150-300 MAD / day</div>
              <ul className="text-sm text-[var(--text-secondary)] space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Fine dining: from 50-80 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Hotel staff (multiple): from 40-80 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Private drivers: from 30-50 MAD
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Spa, concierge, etc.: from 50-100 MAD
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Pro Tip: Tour Day Budget
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  On days with guided tours or desert excursions, add from 100-300 MAD per person on top of your regular
                  daily budget. Multi-day desert tours require from 200-500 MAD in total tips per person (guide, driver,
                  camp staff, camel handlers). Withdraw extra cash the day before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Faux Guides Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dealing with Faux Guides &amp; Unsolicited Help
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the most common concerns for Morocco visitors. Here is how to navigate it with confidence.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                What Are Faux Guides?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Faux guides (false guides) are unlicensed individuals who approach tourists in medinas, near monuments, and
                at bus stations, offering to show the way, take you to &quot;the best shop,&quot; or give you a &quot;free tour.&quot;
                They then expect payment, sometimes aggressively. While faux guiding is technically illegal in Morocco and
                authorities have cracked down significantly, it still occurs in major tourist cities like Marrakech and Fes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <CheckCircle className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                  How to Politely Decline
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Say &quot;la shukran&quot; (no thank you) firmly but politely
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Keep walking at a steady pace; do not stop
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Say you already have a guide or know the way
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    If they persist, walk into a shop and wait
                  </li>
                </ul>
              </div>

              <div className="card-moroccan p-5">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                  If You Accept Help
                </h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Agree on a price upfront before accepting
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    From 10-20 MAD is fair for simple directions
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    From 20-50 MAD if they walk you to a destination
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                    Never follow someone to a shop you did not ask to visit
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tipping Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Banknote className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Get Small Bills Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                ATMs often dispense 200 MAD notes, which are too large for most tips. Ask your hotel
                to break larger notes into 10s and 20s. Alternatively, make a small purchase at a
                supermarket or cafe to get change at the start of each day.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tip Amounts Vary by City
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tipping expectations are higher in tourist-heavy cities like Marrakech and Fes than
                in smaller towns. In rural areas and the Atlas Mountains, even small tips of from
                5-10 MAD are deeply appreciated. Adjust your amounts based on location and context.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Group Travel Tipping
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                On group tours, tips are often collected collectively. The tour leader may suggest
                from 50-100 MAD per person for the guide and from 30-50 MAD per person for the
                driver. Coordinate with your group to ensure everyone contributes fairly.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Learn a Few Phrases
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Accompany your tip with &quot;shukran&quot; (thank you), &quot;shukran bezzaf&quot; (thank you very
                much), or &quot;barak Allahu fik&quot; (may God bless you). These phrases, combined with
                a genuine smile, make any tip more meaningful and show cultural respect.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                When in Doubt
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If you are unsure whether or how much to tip, from 10-20 MAD is almost always
                appropriate for any small service. It is enough to show appreciation without being
                excessive. When in doubt, ask your hotel or riad staff for local guidance.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Fuel className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Road Trip Tipping
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If you are driving in Morocco, keep a stash of from 5-10 MAD notes for gas station
                attendants, parking gardiens, and toll booth interactions. At rest stops, the
                restroom attendant expects from 2-5 MAD. Budget from 20-30 MAD per stop for tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Tipping in Morocco
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Explore more practical guides to help you plan your Morocco trip with confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-money-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Banknote className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Money Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                ATMs, currency exchange, cards vs cash, and managing your travel budget in dirhams.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-etiquette" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Etiquette Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Cultural do&apos;s and don&apos;ts, dress codes, greetings, and social customs for travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-first-time" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything first-time visitors need to know, from arrival to navigating the medinas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-calculator" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Calculator
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Estimate your total trip cost including accommodation, food, transport, and tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Now that you know how to tip with confidence, start planning the rest of your
            Moroccan adventure. From desert tours to medina walks, our guides cover
            every detail you need for a smooth trip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Plan Your First Trip
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Calculate Your Budget
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
