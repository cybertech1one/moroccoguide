import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  MapPin,
  Phone,
  Heart,
  Clock,
  Star,
  CheckCircle,
  Shield,
  ShieldCheck,
  AlertTriangle,
  Globe,
  Sun,
  Wallet,
  Camera,
  Car,
  BookOpen,
  Luggage,
  Utensils,
  MessageCircle,
  Stethoscope,
  Lightbulb,
  Banknote,
  Languages,
  Droplets,
  Plug,
  Compass,
  Users,
  Coffee,
  Thermometer,
  HandCoins,
  Shirt,
  CircleAlert,
  BadgeCheck,
  Scale,
  Handshake,
  Sparkles,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: '55+ Morocco Travel Tips for 2026 | Essential Guide for First-Time Visitors',
  description:
    'Comprehensive Morocco travel tips for 2026. Money, safety, transport, culture, food, bargaining, packing, health, photography, and communication tips. Essential Arabic phrases, before-you-go checklist, and common mistakes to avoid for an unforgettable Moroccan trip.',
  keywords: [
    'Morocco travel tips',
    'Morocco tips',
    'Morocco travel advice',
    'Morocco travel guide',
    'tips for traveling to Morocco',
    'Morocco first time',
    'Morocco travel essentials',
    'Morocco dos and donts',
    'Morocco money tips',
    'Morocco safety tips',
    'Morocco food tips',
    'Morocco transport tips',
    'Morocco culture tips',
    'Morocco bargaining tips',
    'Morocco packing tips',
    'Morocco photography tips',
    'Morocco health tips',
    'Morocco communication tips',
    'Morocco accommodation tips',
    'Morocco Arabic phrases',
    'Morocco common mistakes',
    'Morocco travel checklist',
    'Morocco travel tips 2026',
    'visiting Morocco',
  ],
  openGraph: {
    title: '55+ Morocco Travel Tips for 2026 | Essential Guide for First-Time Visitors',
    description:
      'Everything you need to know before visiting Morocco. 55+ practical travel tips covering money, safety, transport, culture, food, bargaining, packing, and more.',
    url: `${BASE_URL}/morocco-travel-tips`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-tips.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan market with spices and lanterns representing practical travel tips for Morocco visitors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '55+ Morocco Travel Tips | Complete 2026 Guide',
    description:
      'Money, safety, transport, culture, food, bargaining, packing, health & more. Everything you need for Morocco.',
    images: [`${BASE_URL}/images/hero-morocco-tips.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-travel-tips` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-travel-tips`,
  name: '55+ Morocco Travel Tips for 2026 | Essential Guide for First-Time Visitors',
  description:
    'Comprehensive collection of over 55 practical travel tips for visiting Morocco in 2026, covering money, safety, transport, culture, food, bargaining, packing, health, photography, communication, and accommodation.',
  url: `${BASE_URL}/morocco-travel-tips`,
  image: `${BASE_URL}/images/hero-morocco-tips.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-travel-tips`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Travel Tips', item: `${BASE_URL}/morocco-travel-tips` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What currency does Morocco use and should I bring cash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco uses the Moroccan Dirham (MAD). Bring some euros or US dollars to exchange on arrival. ATMs are widely available in cities and accept international cards. Cash is king in medinas, souks, and for taxis. Credit cards are accepted at larger hotels, restaurants, and shops, but always carry cash as a backup. You cannot buy Moroccan Dirhams outside Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of the US, UK, EU, Canada, Australia, and many other countries do not need a visa for stays up to 90 days. Your passport must be valid for at least 6 months beyond your entry date. You will receive a stamp on arrival. If you plan to stay longer than 90 days, you must apply for a residency permit or exit and re-enter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a Muslim country, so modest dress is recommended especially in medinas, rural areas, and near mosques. Cover shoulders and knees. Loose-fitting, breathable fabrics are ideal for the heat. In beach resorts like Agadir, Western beach attire is acceptable. Bring layers for cool evenings and a scarf for visiting religious areas. Comfortable walking shoes are essential for uneven medina streets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to eat street food in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Moroccan street food is generally safe and delicious. Choose stalls that are busy with locals, which indicates fresh food and high turnover. Eat food that is cooked fresh in front of you. Avoid pre-prepared salads at street stalls. Popular safe options include grilled meats, msemen (flatbread), harira soup, and freshly squeezed orange juice. Jemaa el-Fna in Marrakech has the most famous street food scene.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping is expected in Morocco. At restaurants, tip from 10-15% of the bill or round up. For hotel porters, tip from 10-20 MAD per bag. For guided tours, tip from 50-100 MAD for a half-day tour and from 100-200 MAD for a full day. For riad staff, tip from 20-50 MAD per day. Petit taxi drivers do not expect tips but rounding up is appreciated.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I bargain in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bargaining is expected in souks and markets, but not in fixed-price shops, supermarkets, or restaurants. Start by offering 40-50% of the asking price and negotiate from there. Be friendly, patient, and willing to walk away. Never start bargaining unless you are genuinely interested in buying. Research fair prices before shopping. A good deal is one where both parties are happy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) are the best times to visit Morocco. Temperatures are pleasant (20-28 degrees Celsius), crowds are manageable, and all regions are accessible. Summer (June to August) is extremely hot inland but perfect for coastal cities. Winter (December to February) is mild on the coast but cold in the mountains with possible snow.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drink alcohol in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alcohol is legal in Morocco and available at licensed restaurants, bars, hotels, and supermarkets like Carrefour and Marjane. It is not served during Ramadan in most establishments. Do not drink alcohol in public or near mosques. Moroccan wines are excellent and affordable, starting from 60 MAD per bottle. Beer (Flag Speciale, Casablanca) costs from 25-50 MAD at restaurants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need travel insurance for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel insurance is not mandatory but strongly recommended. Private clinic consultations start from 500 MAD and hospital stays from 3,000 MAD per night. Ensure your policy covers at least 50,000 EUR in medical expenses, emergency medical evacuation to Europe, adventure activities if planned, and trip cancellation. Keep a copy of your policy details on your phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get around Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has excellent transport options. Trains (ONCF) connect major cities and are safe and comfortable, including the Al Boraq high-speed train from Tangier to Casablanca. CTM and Supratours buses cover routes trains do not. Petit taxis are for travel within cities (always use the meter or agree on price). Grand taxis connect smaller towns. Ride apps like InDriver and Careem work in major cities. Rental cars are great for the countryside but avoid driving in medinas.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: QUICK FACTS
   ═══════════════════════════════════════════════════════════════ */

const quickFacts = [
  {
    label: 'Currency',
    value: 'Moroccan Dirham (MAD)',
    detail: '1 USD = ~10 MAD | 1 EUR = ~11 MAD',
    icon: Banknote,
  },
  {
    label: 'Languages',
    value: 'Arabic, French, Berber',
    detail: 'English spoken in tourist areas',
    icon: Languages,
  },
  {
    label: 'Best Time to Visit',
    value: 'March-May & Sept-Nov',
    detail: 'Pleasant 20-28 degrees Celsius',
    icon: Sun,
  },
  {
    label: 'Visa (US/UK/EU)',
    value: '90 Days Visa-Free',
    detail: 'Passport valid 6+ months required',
    icon: Globe,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MONEY TIPS
   ═══════════════════════════════════════════════════════════════ */

const moneyTips = [
  'The Moroccan Dirham (MAD) is a closed currency; you cannot buy it outside Morocco so exchange on arrival',
  'ATMs are widely available in cities; use bank-attached ATMs (BMCE, Attijariwafa, CIH) to avoid card skimming',
  'Carry small denominations (from 10-50 MAD notes) for taxis, tips, and small purchases in souks',
  'Credit cards are accepted at larger hotels, restaurants, and shops but cash is essential in medinas and souks',
  'Notify your bank before traveling to avoid your card being blocked for suspicious foreign transactions',
  'Exchange bureaus in the medina often offer better rates than airport counters; compare before exchanging',
  'Keep a reserve of from 200-300 MAD cash on you at all times for emergencies, taxis, and unexpected costs',
  'Tipping is expected: from 10-15% at restaurants, from 10-20 MAD for porters, from 50-200 MAD for guides',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  'Keep your passport in your riad safe and carry a photocopy or photo on your phone instead',
  'Use a money belt or hidden neck pouch in crowded medinas and popular tourist squares',
  'Download offline Google Maps for all cities you plan to visit before your trip',
  'Only use licensed guides with official ID cards; politely decline offers from strangers',
  'Agree on taxi fares before getting in or insist on the meter; ask your riad for typical fares',
  'Avoid walking alone in deserted medina alleyways after midnight; use a taxi for late returns',
  'Save emergency numbers in your phone: Police 19, SAMU 15, Gendarmerie 177',
  'Share your itinerary and check in regularly with someone back home',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT TIPS
   ═══════════════════════════════════════════════════════════════ */

const transportTips = [
  'Take the ONCF train between major cities (Casablanca, Rabat, Tangier, Fes, Marrakech); safe, reliable, and affordable from 80 MAD',
  'The Al Boraq high-speed train runs Tangier to Casablanca in 2 hours and 10 minutes; book at oncf.ma',
  'CTM and Supratours buses are the safest intercity bus options; book online or at stations',
  'Petit taxis operate within cities and are color-coded (red in Marrakech, blue in Rabat, beige in Casablanca)',
  'Grand taxis connect smaller towns; you pay per seat (from 6 seats) or can hire the whole car',
  'Ride-hailing apps InDriver and Careem work in Casablanca, Rabat, Marrakech, and other major cities',
  'Rental cars are excellent for exploring the countryside, Atlas Mountains, and coastal roads',
  'Avoid driving inside medinas; park outside the walls and walk in, or ask your riad for the nearest parking',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURE & ETIQUETTE TIPS
   ═══════════════════════════════════════════════════════════════ */

const cultureTips = [
  'Dress modestly in medinas and conservative areas; cover shoulders and knees, especially near mosques',
  'Remove your shoes when entering a Moroccan home, riad, or mosque (non-Muslims cannot enter most mosques)',
  'Use your right hand for greetings, eating, and passing items; the left hand is considered unclean',
  'Ask permission before photographing people, especially women and in rural areas; some may request a small tip',
  'Greet people with "Salam alaikum" (peace be upon you); this opens doors and earns respect',
  'During Ramadan, avoid eating, drinking, or smoking in public during daylight fasting hours as a sign of respect',
  'Alcohol is legal but should only be consumed at licensed establishments; never drink in public or near mosques',
  'Accept mint tea when offered; refusing can be considered rude and tea is central to Moroccan hospitality',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD & DRINK TIPS
   ═══════════════════════════════════════════════════════════════ */

const foodTips = [
  'Try the big five Moroccan dishes: tagine, couscous (traditionally served on Fridays), pastilla, harira soup, and tangia',
  'Street food is safe when cooked fresh in front of you; choose busy stalls with high turnover for the freshest food',
  'Freshly squeezed orange juice costs from 5-10 MAD at street stalls; Jemaa el-Fna has the most famous orange juice stands',
  'Drink bottled water (from 3 MAD at shops); check the seal is intact and avoid tap water to prevent stomach upset',
  'Eat where locals eat; the best food is often at nondescript restaurants away from the main tourist squares',
  'Try msemen (layered flatbread), sfenj (Moroccan doughnuts), and Moroccan mint tea at breakfast',
  'Be adventurous at food markets: try snail soup (from 5 MAD), sheep head, or camel meat for authentic local experiences',
  'Moroccan wines are surprisingly good; try Volubilia, Medaillon, or Beauvallon reds starting from 60 MAD per bottle',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMUNICATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const communicationTips = [
  'Buy a local SIM card at the airport on arrival; Maroc Telecom, Orange, and Inwi all offer tourist packages from 30 MAD',
  'Wi-Fi is available at most riads, hotels, and cafes but quality varies; a local SIM with data is more reliable',
  'WhatsApp is the primary communication app in Morocco; exchange numbers with guides, drivers, and riad hosts',
  'Learn basic French phrases; it is more widely spoken than English and will help enormously outside tourist areas',
  'Save your riad address in Arabic on your phone to show taxi drivers who may not read Latin script',
  'Download a translation app (Google Translate with Arabic and French offline packs) before your trip',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH TIPS
   ═══════════════════════════════════════════════════════════════ */

const healthTips = [
  'No vaccinations are required for Morocco entry, but ensure routine vaccinations are up to date; Hepatitis A and Typhoid are recommended',
  'Bring a basic first-aid kit: antiseptic, plasters, rehydration salts, anti-diarrhea medication, and sunscreen',
  'Moroccan pharmacies (green cross sign) are excellent and can recommend treatments; many medications are available over the counter',
  'Carry prescription medications in their original packaging with a doctor letter, especially for controlled substances',
  'Use SPF 50 sunscreen and wear a hat; the Moroccan sun is intense, especially in Marrakech, the desert, and mountain areas',
  'Stay hydrated: carry at least 2 liters of water per person when exploring medinas or doing outdoor activities',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photographyTips = [
  'Always ask before photographing people; some will happily pose, others may request from 5-10 MAD, and some will refuse',
  'The best light for photography in medinas is early morning (7-9 AM) and late afternoon (4-6 PM) when light filters through alleys',
  'Do not photograph military installations, police officers, or government buildings; this can lead to detention',
  'Carry a dust-proof bag for your camera in the desert and during sandstorms; fine sand gets into everything',
  'The most photogenic locations include Chefchaouen (Blue City), Fes tanneries, Marrakech souks, Sahara dunes, and Ait Benhaddou',
  'Bring a wide-angle lens for narrow medina streets and a telephoto for desert landscapes and the Atlas Mountains',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const packingTips = [
  'Pack comfortable walking shoes with good grip for uneven medina streets, cobblestones, and steep hills',
  'Bring layers: mornings and evenings can be cool even when days are hot, especially in the mountains and desert',
  'A lightweight scarf is essential: use it for modesty at religious sites, sun protection, and warmth on cool evenings',
  'Pack a reusable water bottle to refill from large bottled water; it reduces plastic waste and saves money',
  'Bring a portable battery pack; long medina walks and photo sessions drain phone batteries quickly',
  'Pack a universal power adapter; Morocco uses European-style Type C and Type E plugs (220V)',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BARGAINING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bargainingTips = [
  'Bargaining is expected in souks, markets, and with taxi drivers, but not in fixed-price shops, supermarkets, or restaurants',
  'Start by offering 40-50% of the asking price; the seller expects this and the real price is somewhere in between',
  'Be friendly and smile; bargaining is a social ritual, not a confrontation, and Moroccans appreciate good humor',
  'Never start bargaining unless you are genuinely interested in buying; starting a negotiation creates an expectation',
  'The "walk away" technique is powerful: if the seller calls you back, you have leverage; if not, the price was already fair',
  'Research fair prices at fixed-price shops like Ensemble Artisanal (government-run craft cooperatives) before hitting the souks',
  'Do not feel guilty about bargaining; it is a cultural tradition and sellers build negotiation margins into their prices',
  'For expensive items like carpets (from 800 MAD for small, from 2,000 MAD for medium), take your time and visit multiple shops',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const accommodationTips = [
  'Stay in a traditional riad for the authentic Moroccan experience; prices range from 300 MAD for budget to from 2,000 MAD for luxury per night',
  'Book accommodations with good reviews for cleanliness and location; proximity to main sights saves time navigating the medina',
  'Most riads include breakfast (Moroccan pancakes, fresh juice, eggs, jams); confirm before booking as it adds great value',
  'Ask your riad to arrange airport transfers; they know reliable drivers and can often negotiate better rates than airport taxis',
  'In the desert, glamping camps range from from 400 MAD for basic tents to from 3,000 MAD for luxury camps with private bathrooms',
  'During peak season (Easter, Christmas, October-November), book accommodations at least 2-3 months in advance',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ORGANIZED TIP CATEGORIES
   ═══════════════════════════════════════════════════════════════ */

const tipCategories = [
  {
    title: 'Money & Budget',
    icon: Wallet,
    tips: moneyTips,
  },
  {
    title: 'Safety & Security',
    icon: Shield,
    tips: safetyTips,
  },
  {
    title: 'Getting Around',
    icon: Car,
    tips: transportTips,
  },
  {
    title: 'Culture & Etiquette',
    icon: Heart,
    tips: cultureTips,
  },
  {
    title: 'Food & Drink',
    icon: Utensils,
    tips: foodTips,
  },
  {
    title: 'Communication',
    icon: MessageCircle,
    tips: communicationTips,
  },
  {
    title: 'Health & Wellbeing',
    icon: Stethoscope,
    tips: healthTips,
  },
  {
    title: 'Photography',
    icon: Camera,
    tips: photographyTips,
  },
  {
    title: 'Packing Essentials',
    icon: Luggage,
    tips: packingTips,
  },
  {
    title: 'Bargaining & Shopping',
    icon: HandCoins,
    tips: bargainingTips,
  },
  {
    title: 'Accommodation',
    icon: Star,
    tips: accommodationTips,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEFORE-YOU-GO CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const checklistItems = [
  {
    category: 'Documents & Money',
    icon: Banknote,
    items: [
      'Passport valid for at least 6 months beyond entry date',
      'Photocopy or digital scan of passport stored separately from original',
      'Travel insurance policy with medical evacuation coverage',
      'Notify your bank of Morocco travel dates to prevent card blocks',
      'Carry some euros or US dollars to exchange on arrival (from 200 EUR recommended)',
      'Print or save hotel/riad booking confirmations',
    ],
  },
  {
    category: 'Health & Safety',
    icon: Stethoscope,
    items: [
      'Check routine vaccinations are up to date (Hepatitis A, Typhoid recommended)',
      'Pack prescription medications in original packaging with doctor letter',
      'Prepare a basic first-aid kit (antiseptic, plasters, rehydration salts, sunscreen)',
      'Save emergency numbers: Police 19, SAMU 15, Gendarmerie 177',
      'Download offline maps for all cities on your itinerary',
      'Share your itinerary with a trusted contact back home',
    ],
  },
  {
    category: 'Tech & Communication',
    icon: Phone,
    items: [
      'Download Google Translate with Arabic and French offline packs',
      'Download WhatsApp if you do not already have it',
      'Save riad/hotel addresses in Arabic on your phone',
      'Charge portable battery pack and pack universal adapter (Type C/E)',
      'Download ride-hailing apps: InDriver and Careem',
      'Save your embassy contact number in your phone',
    ],
  },
  {
    category: 'Packing Priorities',
    icon: Luggage,
    items: [
      'Comfortable walking shoes with good grip for medina streets',
      'Modest clothing that covers shoulders and knees',
      'Lightweight scarf for sun protection, modesty, and warmth',
      'SPF 50 sunscreen and wide-brimmed hat',
      'Reusable water bottle',
      'Layers for temperature changes between day and evening',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON MISTAKES
   ═══════════════════════════════════════════════════════════════ */

const commonMistakes = [
  {
    mistake: 'Not carrying cash',
    why: 'Most medina shops, taxis, and street vendors are cash-only. ATMs may be scarce in smaller towns.',
    fix: 'Withdraw cash at bank ATMs in major cities. Carry small denominations (from 10-50 MAD notes) and keep a reserve of from 200-300 MAD.',
    icon: Wallet,
  },
  {
    mistake: 'Overpacking',
    why: 'Riad hallways are narrow, medina streets are uneven, and you will likely buy things in the souks. Heavy luggage is a burden.',
    fix: 'Pack light in a soft-sided bag. Leave room for souvenirs. Laundry services are cheap (from 30 MAD per kg).',
    icon: Luggage,
  },
  {
    mistake: 'Not bargaining',
    why: 'Paying the first price means overpaying by 2-5x. Sellers expect negotiation and build margins into their asking prices.',
    fix: 'Start at 40-50% of the asking price. Be friendly and patient. Visit fixed-price shops first to learn fair values.',
    icon: HandCoins,
  },
  {
    mistake: 'Trusting random "guides"',
    why: 'Friendly strangers offering help often lead you to commission-based shops or demand payment for unsolicited "guiding."',
    fix: 'Only use licensed guides with official ID cards. Politely decline with "La, shukran" (No, thank you). Use offline maps.',
    icon: Users,
  },
  {
    mistake: 'Skipping smaller cities',
    why: 'Most tourists only visit Marrakech and miss the incredible diversity of Morocco. Essaouira, Chefchaouen, and Fes offer completely different experiences.',
    fix: 'Plan at least 10-14 days to see multiple cities. Use trains and buses to connect destinations affordably.',
    icon: MapPin,
  },
  {
    mistake: 'Underestimating distances',
    why: 'Morocco looks small on a map but roads through the Atlas Mountains are slow and winding. A 300km drive can take 5+ hours.',
    fix: 'Plan realistic travel times. Use Google Maps for drive estimates. Consider domestic flights for long distances (Marrakech to Fes).',
    icon: Compass,
  },
  {
    mistake: 'Visiting only in summer',
    why: 'Summer temperatures in Marrakech and Fes regularly exceed 40 degrees Celsius. The heat makes sightseeing exhausting and even dangerous.',
    fix: 'Visit in spring (March-May) or autumn (September-November) for ideal weather. If visiting in summer, focus on coastal cities.',
    icon: Thermometer,
  },
  {
    mistake: 'Not learning basic phrases',
    why: 'English is limited outside major tourist areas. Basic French or Arabic phrases dramatically improve interactions and respect.',
    fix: 'Learn at least 10 key phrases in French or Darija. "Salam alaikum," "shukran," and "la, shukran" go a long way.',
    icon: Languages,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL ARABIC PHRASES
   ═══════════════════════════════════════════════════════════════ */

const arabicPhrases = [
  { arabic: 'Salam alaikum', meaning: 'Peace be upon you (universal greeting)', usage: 'Greeting anyone' },
  { arabic: 'Wa alaikum salam', meaning: 'And upon you peace (response)', usage: 'Responding to a greeting' },
  { arabic: 'Shukran', meaning: 'Thank you', usage: 'Expressing gratitude' },
  { arabic: 'La, shukran', meaning: 'No, thank you', usage: 'Politely declining offers, touts, and guides' },
  { arabic: 'Bslemah', meaning: 'Goodbye', usage: 'When leaving' },
  { arabic: 'Iyeh / La', meaning: 'Yes / No', usage: 'Basic responses' },
  { arabic: 'Bshhal?', meaning: 'How much?', usage: 'Asking the price of something' },
  { arabic: 'Ghali bezzaf', meaning: 'Too expensive', usage: 'When bargaining in souks' },
  { arabic: 'Smehli', meaning: 'Excuse me / Sorry', usage: 'Getting attention or apologizing' },
  { arabic: 'Fin...?', meaning: 'Where is...?', usage: 'Asking for directions' },
  { arabic: 'Labas?', meaning: 'How are you? (Are you well?)', usage: 'Casual greeting' },
  { arabic: 'Labas, hamdullah', meaning: 'I am well, thanks be to God', usage: 'Responding that you are fine' },
  { arabic: 'Afak', meaning: 'Please', usage: 'Making polite requests' },
  { arabic: 'Mashi mushkil', meaning: 'No problem', usage: 'Expressing that something is okay' },
  { arabic: 'Zwin / Zwina', meaning: 'Beautiful (masculine / feminine)', usage: 'Complimenting something' },
  { arabic: 'Bismillah', meaning: 'In the name of God', usage: 'Said before eating or starting an activity' },
  { arabic: 'Inshallah', meaning: 'God willing', usage: 'When discussing future plans or hopes' },
  { arabic: 'Atay', meaning: 'Tea', usage: 'Ordering Moroccan mint tea' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/tips',
    title: 'Quick Travel Tips',
    description: 'Condensed tips and practical advice for planning your Morocco trip efficiently.',
    icon: Lightbulb,
  },
  {
    href: '/first-time',
    title: 'First Time in Morocco',
    description: 'Step-by-step guide for first-time visitors covering everything from arrival to departure.',
    icon: Compass,
  },
  {
    href: '/is-morocco-safe',
    title: 'Is Morocco Safe?',
    description: 'Comprehensive safety guide with city-by-city ratings, scam awareness, and emergency contacts.',
    icon: Shield,
  },
  {
    href: '/morocco-tipping-guide',
    title: 'Morocco Tipping Guide',
    description: 'Detailed tipping etiquette for restaurants, hotels, guides, drivers, and more.',
    icon: HandCoins,
  },
  {
    href: '/what-to-wear-in-morocco',
    title: 'What to Wear in Morocco',
    description: 'Season-specific dress code guide with packing lists for every type of activity.',
    icon: Shirt,
  },
  {
    href: '/scams',
    title: 'Morocco Scam Guide',
    description: 'Every common scam explained with specific prevention strategies and what to do if targeted.',
    icon: AlertTriangle,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTravelTipsPage() {
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
            backgroundImage: 'url(/images/hero-morocco-tips.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Travel Tips</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Lightbulb className="w-4 h-4" />
            Essential Travel Advice
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            55+ Morocco Travel Tips
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know before visiting Morocco. Practical tips on money,
            safety, transport, culture, food, bargaining, packing, and more from experienced travelers.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Your Complete Morocco Travel Companion
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most rewarding travel destinations in the world &mdash; a sensory
                feast of vibrant souks, ancient medinas, Saharan dunes, snow-capped mountains, and a food
                scene that ranks among the best on the planet. But it is also a country that rewards
                preparation. The difference between a frustrating trip and an unforgettable one often comes
                down to knowing a few practical things before you go.
              </p>
              <p>
                This guide contains over 55 practical travel tips organized by category, drawn from years
                of firsthand experience and the collective wisdom of thousands of Morocco travelers. Whether
                you are a first-time visitor wondering how to handle money, a solo female traveler concerned
                about dress codes, or a foodie planning a street food odyssey, these tips will help you
                travel smarter, save money, and experience Morocco at its best.
              </p>
              <p>
                From bargaining techniques that actually work to essential Arabic phrases that open doors
                and earn respect, from the common mistakes that trip up newcomers to a before-you-go checklist
                that ensures nothing is forgotten &mdash; consider this your pocket travel companion for
                Morocco in 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts every traveler should know before arriving in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── All Tip Categories ── */}
      {tipCategories.map((category, catIndex) => {
        const CatIcon = category.icon;
        const isEven = catIndex % 2 === 0;
        return (
          <section
            key={category.title}
            className={`py-16 md:py-20 ${isEven ? '' : 'bg-[var(--surface-muted)] moroccan-pattern'}`}
          >
            <div className="container-morocco max-w-4xl">
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
                <CatIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                {category.title}
              </h2>
              <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
                {category.title === 'Money & Budget' && 'How to manage your finances smartly while traveling in Morocco.'}
                {category.title === 'Safety & Security' && 'Stay safe with these common-sense precautions for traveling in Morocco.'}
                {category.title === 'Getting Around' && 'Navigate Morocco confidently using trains, buses, taxis, and rental cars.'}
                {category.title === 'Culture & Etiquette' && 'Respect local customs and earn warm welcomes with these cultural tips.'}
                {category.title === 'Food & Drink' && 'Eat like a local and discover the best of Moroccan cuisine safely.'}
                {category.title === 'Communication' && 'Stay connected and communicate effectively throughout your Morocco trip.'}
                {category.title === 'Health & Wellbeing' && 'Keep healthy and prepared with these practical health tips for Morocco.'}
                {category.title === 'Photography' && 'Capture stunning photos while respecting local customs and privacy.'}
                {category.title === 'Packing Essentials' && 'Pack smart for Morocco with these tried-and-tested packing tips.'}
                {category.title === 'Bargaining & Shopping' && 'Master the art of Moroccan bargaining and get fair prices in the souks.'}
                {category.title === 'Accommodation' && 'Choose the right accommodation and get the best value for your stay.'}
              </p>

              <div className="card-moroccan p-6 md:p-8">
                <div className="space-y-4">
                  {category.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Before-You-Go Checklist ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Before-You-Go Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Complete this checklist before your departure to ensure a smooth and worry-free Morocco trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {checklistItems.map((checklist) => {
              const ListIcon = checklist.icon;
              return (
                <div key={checklist.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ListIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {checklist.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {checklist.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                        <div className="w-5 h-5 rounded border-2 border-[var(--color-accent)]/30 shrink-0 mt-0.5 flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Mistakes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleAlert className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Mistakes to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn from others&apos; experiences. These are the most common mistakes first-time Morocco visitors make and how to avoid them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commonMistakes.map((item) => {
              const MistakeIcon = item.icon;
              return (
                <div key={item.mistake} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <MistakeIcon className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.mistake}
                      </h3>
                      <span className="text-xs font-medium text-red-600">Common Mistake</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    <span className="font-semibold">Why it happens:</span> {item.why}
                  </p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">How to avoid:</span> {item.fix}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Essential Arabic Phrases ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Languages className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Moroccan Arabic (Darija) Phrases
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Learning even a few Darija phrases will transform your Morocco experience. Locals appreciate the effort
            and it often leads to warmer interactions, better prices, and genuine connections.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Moroccan Arabic (Darija) differs significantly from Modern Standard Arabic. These are Darija phrases used in daily life.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Darija Phrase</div>
              <div className="p-3 px-4">Meaning</div>
              <div className="p-3 px-4">When to Use</div>
            </div>
            {arabicPhrases.map((phrase, i) => (
              <div
                key={phrase.arabic}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{phrase.arabic}</div>
                <div className="p-3 px-4 text-[var(--text-primary)]">{phrase.meaning}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{phrase.usage}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Pro Tip: French Goes a Long Way
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  While Darija is appreciated, French is Morocco&apos;s second language and is widely spoken in
                  cities and tourist areas. If you speak French, you will have no trouble communicating.
                  Key French phrases: &quot;Bonjour&quot; (hello), &quot;Merci&quot; (thank you), &quot;Combien?&quot;
                  (how much?), &quot;L&apos;addition, s&apos;il vous plait&quot; (the bill, please),
                  &quot;O&ugrave; est...?&quot; (where is...?). English is growing but remains limited outside
                  major tourist areas and upscale hotels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s diverse geography means different tips apply depending on when you visit.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Spring (March - May)
                  </h3>
                  <span className="text-sm font-semibold text-green-700">Best Time to Visit</span>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ideal temperatures of 20-28 degrees Celsius across most of Morocco. All regions are accessible including
                the High Atlas for trekking and the Sahara for desert tours. Wildflowers bloom in the Dades and Todra
                valleys. Book accommodations 2-3 months ahead for Easter period as prices increase 20-40%.
              </p>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Tip:</span> The Rose Festival in Kelaat M&apos;Gouna (Dades Valley) takes place in May. It is one of Morocco&apos;s most photogenic events.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
                  <Thermometer className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Summer (June - August)
                  </h3>
                  <span className="text-sm font-semibold text-amber-700">Hot Inland, Perfect on Coast</span>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Inland cities (Marrakech, Fes) regularly exceed 40 degrees Celsius, making midday sightseeing
                uncomfortable or dangerous. Focus on coastal cities: Essaouira (22-26 degrees), Agadir, Tangier, and
                Asilah. If visiting inland, explore in early morning and late afternoon only. Desert tours should be
                avoided or done with air-conditioned transport. Carry minimum 3 liters of water per person daily.
              </p>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Tip:</span> Essaouira is the perfect summer escape. Atlantic breezes keep temperatures at 22-26 degrees even in August, and it is Morocco&apos;s best windsurfing and kitesurfing destination.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Autumn (September - November)
                  </h3>
                  <span className="text-sm font-semibold text-green-700">Excellent, Watch for Floods</span>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Temperatures return to comfortable levels and the date harvest begins in the Draa Valley. October and November
                are ideal for desert trips and the Sahara. However, flash floods are a genuine concern in desert wadis
                (dry riverbeds) and mountain valleys. Check weather forecasts before driving through gorges. This is also
                the date festival season in Erfoud (October).
              </p>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Warning:</span> Never camp or park in dry riverbeds (wadis). Flash floods can fill them in minutes and have caused fatalities. Check local weather before desert and gorge excursions.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Droplets className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Winter (December - February)
                  </h3>
                  <span className="text-sm font-semibold text-blue-700">Mild Coast, Cold Mountains</span>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Coastal and lowland cities enjoy mild weather (15-20 degrees Celsius) and fewer tourists. This is the
                cheapest season for accommodation. The High Atlas Mountains receive snowfall, and the ski resort at
                Oukaimeden (75 km from Marrakech) opens. Mountain passes (Tizi n&apos;Tichka) may close temporarily.
                The Sahara is cold at night (near freezing) but pleasant during the day. Pack warm layers.
              </p>
              <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Tip:</span> Winter is the best season for budget travelers. Riad prices drop 30-50% and you will have popular sights like Bahia Palace and Jardin Majorelle nearly to yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insider Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BadgeCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips from Experienced Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These tips come from years of experience and are the kind of advice that guidebooks often miss.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Embrace the Moroccan Pace
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco operates on its own time. Buses and trains may run late, appointments are approximate,
                and &quot;five minutes&quot; can mean thirty. This is not inefficiency &mdash; it is a different cultural
                relationship with time. Fighting it will only frustrate you. Build buffer time into your schedule,
                sit down for mint tea when things are slow, and you will find yourself relaxing into the rhythm
                of Moroccan life. The most memorable moments often happen in the unplanned gaps.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                  <Scale className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Friday Is Different
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Friday is the Islamic holy day. Many shops close for midday prayers (around 12:30-2:30 PM), and
                the atmosphere in medinas quiets considerably. Government offices are closed Friday afternoon.
                Use Friday mornings for shopping if needed, and plan sightseeing or relaxation for the afternoon.
                Friday is also traditionally the day for couscous &mdash; many restaurants serve special Friday
                couscous dishes that are worth seeking out.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    The Power of a Good Riad Host
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Your riad host is your most valuable resource in Morocco. A good host will arrange reliable
                taxis, recommend honest restaurants, book day trips at fair prices, help with bargaining by
                telling you what things should cost, and send someone to meet you at the medina entrance
                on arrival. Many travelers report that their riad host&apos;s recommendations were the highlight
                of their trip. Do not hesitate to ask for help &mdash; Moroccan hospitality is genuine and hosts
                take pride in ensuring you have a wonderful stay.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                  <Plug className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Electrical and Practical Details
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco uses European-style Type C and Type E plugs at 220V. Bring a universal adapter.
                Many riads have limited outlets, so a multi-port USB charger is useful. The time zone is
                WET/WEST (same as UK/Portugal), with clocks moving forward in spring and back in autumn. However,
                during Ramadan, Morocco sometimes adjusts clocks, so check current local time on arrival. Wi-Fi
                is available at most accommodations and cafes, but speeds vary. A local SIM with data (from 30 MAD)
                is the most reliable option for staying connected.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    The Medina Navigation Trick
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Getting lost in a medina is inevitable and part of the experience. But if you need to find your
                way back, here is the trick: always walk downhill to reach the main gates (medinas were built on
                hills for drainage). Alternatively, find a shop and ask for the nearest major landmark or gate
                (&quot;Fin Bab...?&quot;). Save your riad&apos;s exact location on Google Maps offline &mdash; the blue dot
                works without internet. Take a photo of nearby landmarks (a distinctive door, a fountain, a
                mosque) each time you leave your riad, creating a visual breadcrumb trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What currency does Morocco use and should I bring cash?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco uses the Moroccan Dirham (MAD). The Dirham is a closed currency, meaning you cannot
                buy it outside Morocco. Bring euros or US dollars to exchange on arrival at the airport or
                an exchange bureau. ATMs are widely available in cities and accept international cards (Visa,
                Mastercard). Cash is essential for medinas, souks, taxis, and small restaurants. Credit cards
                are accepted at larger hotels, restaurants, and modern shops. Always carry a cash reserve of
                from 200-300 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Citizens of the US, UK, EU, Canada, Australia, New Zealand, Japan, and many other countries
                do not need a visa for stays up to 90 days. Your passport must be valid for at least 6 months
                beyond your entry date. You will receive an entry stamp on arrival. For stays longer than 90
                days, you must apply for a residency permit or exit and re-enter the country. Always check the
                latest requirements with your nearest Moroccan embassy before traveling.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I wear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is a Muslim country, and modest dress is recommended, especially in medinas, rural areas,
                and near mosques. Cover shoulders and knees. Loose-fitting, breathable fabrics are ideal for
                the heat. In beach resorts like Agadir, Western beach attire is acceptable at the beach.
                Bring layers for cool evenings, especially in the mountains and desert. A lightweight scarf
                is one of the most versatile packing items for modesty, sun protection, and warmth.
                Comfortable walking shoes with good grip are essential for uneven medina streets.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to eat street food in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Moroccan street food is generally safe and absolutely delicious. The key rules are:
                choose stalls that are busy with locals (high turnover means fresh food), eat items that are
                cooked fresh in front of you, and avoid pre-prepared salads at street stalls. Popular safe
                options include grilled meats and kebabs, msemen (layered flatbread), harira soup, freshly
                squeezed orange juice (from 5-10 MAD), snail soup, and sfenj (doughnuts). The street food
                scene at Jemaa el-Fna in Marrakech is legendary and should not be missed.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I tip in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tipping is an expected part of Moroccan culture. At restaurants, tip from 10-15% of the bill or
                round up to the nearest convenient amount. For hotel porters, tip from 10-20 MAD per bag. For
                guided tours, from 50-100 MAD for half-day and from 100-200 MAD for full-day tours. Riad staff
                who go above and beyond appreciate from 20-50 MAD per day. Petit taxi drivers do not expect tips
                but rounding up is a kind gesture. For parking attendants, from 5-10 MAD is standard.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I bargain in Moroccan souks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Bargaining is a cultural tradition in Morocco and is expected in souks and markets. Start by
                offering 40-50% of the asking price. The seller will counter, and you negotiate to find a middle
                ground. Be friendly, patient, and enjoy the process. Never start bargaining unless you are
                genuinely interested &mdash; it creates an expectation to buy. The walk-away technique works well:
                if the seller calls you back, you have leverage. Research fair prices at fixed-price shops
                (Ensemble Artisanal) before visiting the souks. Do not bargain in fixed-price shops,
                supermarkets, or restaurants.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March to May) and autumn (September to November) are the best times to visit Morocco.
                Temperatures are pleasant at 20-28 degrees Celsius, crowds are manageable, and all regions
                including the desert and mountains are accessible. Summer (June to August) is extremely hot
                inland (above 40 degrees in Marrakech and Fes) but perfect for coastal cities like Essaouira
                and Agadir. Winter (December to February) is mild on the coast, cheap for accommodation, but
                cold in the mountains with possible snow on Atlas Mountain passes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I drink alcohol in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, alcohol is legal in Morocco and available at licensed restaurants, bars, hotels, and
                supermarkets like Carrefour and Marjane. It is generally not served during Ramadan in most
                establishments, though some hotel bars remain open for non-Muslim guests. Do not drink alcohol
                in public or near mosques. Moroccan wines are excellent and affordable, starting from 60 MAD
                per bottle. Local beer brands include Flag Speciale and Casablanca, typically from 25-50 MAD
                at restaurants.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need travel insurance for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Travel insurance is not mandatory for entry but is strongly recommended. Healthcare quality
                varies and private clinic consultations start from 500 MAD. A hospital stay can cost from
                3,000 MAD per night. Ensure your policy covers at least 50,000 EUR in medical expenses,
                emergency medical evacuation to Europe, adventure activities if planned (desert quad biking,
                mountain trekking), and trip cancellation. Keep a digital copy of your policy details and
                emergency assistance number on your phone.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get around Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco has excellent transport options. Trains (ONCF) connect major cities and are safe,
                comfortable, and affordable from 80 MAD. The Al Boraq high-speed train runs Tangier to
                Casablanca in just 2 hours 10 minutes. CTM and Supratours buses cover routes trains do not.
                Within cities, use petit taxis (always insist on the meter or agree on price first) or
                ride-hailing apps like InDriver and Careem. Grand taxis connect smaller towns on a per-seat
                basis. Rental cars are excellent for exploring the countryside and the Atlas Mountains but
                should be avoided inside medinas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Morocco Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl text-center">
          <div className="card-moroccan p-8 md:p-12">
            <Sparkles className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ready to Experience Morocco?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
              With these 55+ travel tips in your pocket, you are prepared for an unforgettable Moroccan
              adventure. From the winding alleys of ancient medinas to the vast silence of the Sahara,
              Morocco rewards the prepared traveler with experiences that will stay with you for a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/first-time"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-medium"
              >
                <BookOpen className="w-5 h-5" />
                First-Time Visitor Guide
              </Link>
              <Link
                href="/is-morocco-safe"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-medium"
              >
                <Shield className="w-5 h-5" />
                Morocco Safety Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
