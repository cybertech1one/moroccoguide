import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Shield,
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  Info,
  ArrowRight,
  MapPin,
  Users,
  Phone,
  Heart,
  Thermometer,
  Clock,
  Star,
  Eye,
  Lock,
  Siren,
  BadgeCheck,
  CircleAlert,
  Globe,
  Sun,
  CloudRain,
  Stethoscope,
  Scale,
  MessageCircle,
  Wallet,
  Camera,
  Navigation,
  FileText,
  Car,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Is Morocco Safe? 2026 Safety Guide for Tourists | Crime, Scams & Travel Advisories',
  description:
    'Comprehensive Morocco safety guide for 2026. Crime statistics, scam awareness, safety tips for solo travelers, women, families & LGBTQ+ visitors. City-by-city safety ratings for Marrakech, Fes, Casablanca, Tangier, Agadir & Chefchaouen. Emergency numbers & insurance advice.',
  keywords: [
    'is Morocco safe',
    'Morocco safety',
    'Morocco travel safety',
    'Morocco safe for tourists',
    'Morocco safe for women',
    'Morocco solo travel safety',
    'Morocco crime rate',
    'Morocco scams',
    'Morocco travel advisory',
    'is Marrakech safe',
    'is Fes safe',
    'is Casablanca safe',
    'Morocco terrorism risk',
    'Morocco health safety',
    'Morocco emergency numbers',
    'Morocco travel insurance',
    'Morocco safe for families',
    'Morocco LGBTQ safety',
    'Morocco political stability',
    'Morocco safety tips 2026',
    'Morocco areas to avoid',
    'Morocco flash floods',
  ],
  openGraph: {
    title: 'Is Morocco Safe? 2026 Safety Guide for Tourists | Crime, Scams & Travel Advisories',
    description:
      'Everything you need to know about safety in Morocco. Crime stats, city-by-city ratings, scam awareness, health tips, and emergency contacts for a worry-free trip.',
    url: `${BASE_URL}/is-morocco-safe`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-safe.webp`,
        width: 1200,
        height: 630,
        alt: 'Peaceful Moroccan medina street scene with tourists walking safely through colorful alleyways',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Morocco Safe? Complete 2026 Safety Guide',
    description:
      'Crime stats, scam awareness, city-by-city safety ratings, health tips, and emergency contacts. Everything you need for a safe Morocco trip.',
    images: [`${BASE_URL}/images/hero-morocco-safe.webp`],
  },
  alternates: { canonical: `${BASE_URL}/is-morocco-safe` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE_URL}/is-morocco-safe`,
  headline: 'Is Morocco Safe? Complete 2026 Safety Guide for Tourists',
  description:
    'Comprehensive safety assessment for Morocco covering crime statistics, scam awareness, health safety, travel advisories, and city-by-city safety ratings for 2026.',
  url: `${BASE_URL}/is-morocco-safe`,
  image: `${BASE_URL}/images/hero-morocco-safe.webp`,
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
  mainEntityOfPage: `${BASE_URL}/is-morocco-safe`,
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
      { '@type': 'ListItem', position: 2, name: 'Is Morocco Safe?', item: `${BASE_URL}/is-morocco-safe` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for tourists in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is generally safe for tourists in 2026. It is rated Level 2 (Exercise Increased Caution) by the US State Department, the same level as France, Germany, and the UK. Morocco has invested heavily in tourism security with dedicated Tourist Police in major cities. Millions of tourists visit safely each year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for solo female travelers with precautions. Verbal harassment (catcalling) is common but rarely escalates. Stick to well-lit areas at night, dress modestly in conservative areas, use registered taxis, and stay in well-reviewed riads. Many women travel Morocco solo and have wonderful experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common scams in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common scams include fake guides leading you to shops for commission, inflated taxi fares (always agree on price before), the henna trap (unwanted henna application then demanding payment), carpet shop pressure sales, and the friendly local leading you to get lost then charging for directions. Being aware of these makes them easy to avoid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to drink tap water in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tap water in Morocco is treated and technically safe in major cities, but it is not recommended for tourists due to different mineral content that can upset sensitive stomachs. Drink bottled water (from 3 MAD) which is widely available. Ice in tourist restaurants is generally made from purified water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there areas to avoid in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most of Morocco is safe for tourists. Areas to exercise extra caution include the Rif Mountains (cannabis cultivation region near Ketama), remote border areas near Algeria, parts of Casablanca at night (Derb Sultan, Sidi Moumen), and deserted medina alleyways after midnight. The Western Sahara region requires checking current advisories.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for LGBTQ+ travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Same-sex relations are illegal in Morocco under Article 489 of the penal code, carrying penalties of up to 3 years imprisonment. In practice, enforcement against tourists is very rare, but discretion is strongly advised. Avoid public displays of affection, be cautious with dating apps, and choose LGBTQ+-friendly accommodations in Marrakech or Essaouira.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emergency numbers should I know in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key emergency numbers in Morocco: Police: 19 (urban) or 177 (rural Gendarmerie Royale), Ambulance: 15 (SAMU), Fire: 15, Tourist Police: available in Marrakech, Fes, Casablanca and other major cities. Your embassy can also assist in emergencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need travel insurance for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel insurance is not mandatory for Morocco entry but is strongly recommended. Medical care quality varies, and private clinic visits can cost from 500 MAD for a consultation. Ensure your policy covers emergency medical evacuation, as serious conditions may require transfer to Europe. Adventure activities like quad biking in the desert or trekking may need additional coverage.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY OVERVIEW STATS
   ═══════════════════════════════════════════════════════════════ */

const safetyStats = [
  {
    label: 'Global Peace Index Rank',
    value: '84th / 163',
    detail: 'Safer than USA (131st), Brazil, Turkey',
    icon: Globe,
  },
  {
    label: 'US State Dept Advisory',
    value: 'Level 2',
    detail: 'Exercise Increased Caution (same as France, UK)',
    icon: FileText,
  },
  {
    label: 'Tourist Arrivals (2025)',
    value: '16.3 Million',
    detail: 'Record year, up from 14.5M in 2024',
    icon: Users,
  },
  {
    label: 'Violent Crime Rate',
    value: 'Low',
    detail: 'Homicide rate 1.2 per 100K (US: 6.3)',
    icon: Shield,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVELER TYPE SAFETY
   ═══════════════════════════════════════════════════════════════ */

const travelerSafety = [
  {
    type: 'Solo Travelers',
    icon: Navigation,
    rating: 'Generally Safe',
    ratingColor: 'text-green-700',
    description:
      'Morocco is a popular solo travel destination with well-established tourist infrastructure. Solo travelers are common in Marrakech, Fes, Essaouira, and Chefchaouen. The main challenges are persistent touts and navigating medinas alone.',
    tips: [
      'Share your itinerary with someone back home and check in regularly',
      'Download offline maps (Google Maps works well in Morocco)',
      'Stay in well-reviewed riads or hostels with social common areas',
      'Join organized day tours for desert and mountain excursions',
      'Learn basic French or Darija phrases for better interactions',
      'Keep your phone charged and carry a portable battery pack',
    ],
  },
  {
    type: 'Women Travelers',
    icon: Heart,
    rating: 'Safe with Precautions',
    ratingColor: 'text-amber-700',
    description:
      'Women can and do travel Morocco safely, including solo. Verbal harassment (catcalling, unwanted attention) is the most common issue, particularly in busy medinas and less touristy areas. Physical harassment is rare. Moroccan women themselves deal with this daily, and it is a societal issue, not a tourist-specific one.',
    tips: [
      'Dress modestly in conservative areas (shoulders and knees covered)',
      'Wear a wedding ring, even a fake one, to reduce unwanted attention',
      'Ignore catcalls completely; engagement encourages persistence',
      'Use registered taxis (petit taxi) rather than walking alone at night',
      'Choose female-friendly riads with women staff members',
      'Consider a female guide for medina tours; many are available',
    ],
  },
  {
    type: 'Families with Children',
    icon: Users,
    rating: 'Very Safe',
    ratingColor: 'text-green-700',
    description:
      'Morocco is exceptionally family-friendly. Moroccan culture reveres children, and your kids will receive warm attention and smiles everywhere. Restaurants are accommodating, riads often have family rooms, and the variety of experiences (beaches, desert, mountains, medinas) keeps children engaged.',
    tips: [
      'Book riads with courtyards where children can play safely',
      'Carry snacks and water, especially when exploring medinas',
      'Use sunscreen and hats; the sun is intense, especially in summer',
      'Choose family-friendly restaurants that serve mild tagines and couscous',
      'The camel rides and desert camps are highlights for children',
      'Keep children close in crowded souks; use a wrist strap for toddlers',
    ],
  },
  {
    type: 'LGBTQ+ Travelers',
    icon: Lock,
    rating: 'Caution Required',
    ratingColor: 'text-red-700',
    description:
      'Same-sex relations are criminalized in Morocco under Article 489 of the penal code, with penalties of up to 3 years imprisonment and fines from 1,200 MAD. While enforcement against foreign tourists is extremely rare, this law creates a hostile legal environment. That said, many LGBTQ+ travelers visit Morocco without incident by exercising discretion.',
    tips: [
      'Avoid all public displays of affection with same-sex partners',
      'Be cautious with dating apps; scams and entrapment have been reported',
      'Choose accommodations in Marrakech or Essaouira, which are more cosmopolitan',
      'Book a private riad rather than shared accommodation for privacy',
      'Do not discuss your sexuality with strangers or casual acquaintances',
      'Carry your embassy contact information at all times',
    ],
  },
  {
    type: 'Elderly Travelers',
    icon: Heart,
    rating: 'Generally Safe',
    ratingColor: 'text-green-700',
    description:
      'Morocco respects its elders deeply, and older travelers are treated with great courtesy. The main challenges are physical: medina streets are uneven and hilly, summer heat can be extreme, and accessibility infrastructure is limited. With proper planning, Morocco is a rewarding destination for older travelers.',
    tips: [
      'Choose ground-floor riad rooms to avoid steep stairs',
      'Visit in spring (March-May) or autumn (September-November) for mild weather',
      'Hire private guides and drivers rather than navigating independently',
      'Carry any prescription medications in original packaging with a doctor letter',
      'Ensure travel insurance covers pre-existing conditions and medical evacuation',
      'Private hospitals in Marrakech and Casablanca offer good emergency care',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON SCAMS
   ═══════════════════════════════════════════════════════════════ */

const commonScams = [
  {
    name: 'The Fake Guide',
    icon: Eye,
    severity: 'Very Common',
    description:
      'A friendly local offers to show you a "shortcut" or help you find your riad, then leads you to a carpet shop or demands payment for guiding. They sometimes claim your destination is closed today.',
    prevention: 'Only use licensed guides (they carry ID cards). Politely decline help from strangers offering directions. Use Google Maps offline. If someone insists, firmly say "La, shukran" (No, thank you).',
  },
  {
    name: 'Taxi Fare Inflation',
    icon: Car,
    severity: 'Very Common',
    description:
      'Drivers refuse to use the meter or claim it is broken. They then charge 3-5x the real fare. Grand taxis may pick up extra passengers and still charge you the full amount.',
    prevention: 'Always agree on the price before getting in. Petit taxis in cities should use the meter (insist or find another). Ask your hotel for typical fares. Use the InDriver or Careem apps where available.',
  },
  {
    name: 'The Henna Trap',
    icon: AlertTriangle,
    severity: 'Common',
    description:
      'A woman grabs your hand in Jemaa el-Fna or a busy tourist area and starts applying henna before you consent. When she finishes, she demands from 200-500 MAD for poor quality work that stains for weeks.',
    prevention: 'Keep your hands in your pockets or crossed when walking through busy squares. If someone grabs your hand, pull away immediately and firmly say no. If henna is applied without consent, you are not obligated to pay.',
  },
  {
    name: 'Carpet Shop Pressure',
    icon: Wallet,
    severity: 'Common',
    description:
      'You are led to a carpet shop (often by a "friend" or fake guide) where a charming host serves tea, shows dozens of carpets, and creates intense pressure to buy. Quoted prices may be 5-10x the actual value.',
    prevention: 'Never feel obligated to buy. Drinking tea is not a contract. If interested in carpets, research fair prices beforehand. A good Berber rug starts from 800 MAD for small, from 2,000 MAD for medium. Walk away if pressured.',
  },
  {
    name: 'The "Closed Mosque" Redirect',
    icon: MessageCircle,
    severity: 'Common',
    description:
      'Near popular attractions, someone tells you the mosque, garden, or market is "closed today" or "closed for prayer" and offers to take you somewhere "better" (their friend\'s shop).',
    prevention: 'Verify information yourself. Check opening hours in advance. Walk to the entrance and check. Tourist attractions in Morocco are almost never closed unexpectedly.',
  },
  {
    name: 'Monkey and Snake Photo Scam',
    icon: Camera,
    severity: 'Common in Marrakech',
    description:
      'In Jemaa el-Fna, handlers place monkeys or snakes on you without permission and then demand from 100-200 MAD for a photo. The animals are often poorly treated.',
    prevention: 'Do not make eye contact with animal handlers. If an animal is placed on you, calmly remove it and walk away. You do not owe money for unsolicited contact. Consider ethical tourism and avoid supporting this practice.',
  },
  {
    name: 'Restaurant Overcharging',
    icon: Wallet,
    severity: 'Occasional',
    description:
      'Tourist-facing restaurants in Jemaa el-Fna and some medina areas may present inflated bills with items you did not order, or charge different prices from the menu.',
    prevention: 'Always check the menu prices before ordering. Confirm the total before paying. Avoid restaurants with aggressive touts at the door. Ask your riad for restaurant recommendations.',
  },
  {
    name: 'Money Exchange Tricks',
    icon: Wallet,
    severity: 'Occasional',
    description:
      'Unofficial money changers offer great rates but use sleight of hand to shortchange you, or mix in lower-denomination notes. Some count the money so fast you cannot follow.',
    prevention: 'Only exchange money at banks, official exchange bureaus (bureau de change), or ATMs. Count money carefully before leaving the counter. ATMs offer the best rates.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY BY CITY
   ═══════════════════════════════════════════════════════════════ */

const cityRatings = [
  {
    city: 'Marrakech',
    icon: Star,
    rating: 4,
    overall: 'Safe for tourists',
    image: '/images/hero-marrakech.webp',
    description:
      'Morocco\'s most visited city has heavy tourist police presence and well-lit main areas. The biggest risks are petty scams and overcharging, not violent crime. The medina can be disorienting but is generally safe during the day.',
    highlights: [
      'Dedicated Tourist Police station in Jemaa el-Fna',
      'Well-lit main thoroughfares and busy squares',
      'Thousands of tourists daily create a safe atmosphere',
      'Excellent riad accommodations in the medina',
    ],
    cautions: [
      'Jemaa el-Fna attracts touts, scammers, and pickpockets',
      'Dark medina alleyways should be avoided after midnight',
      'Motorcycle theft (snatching bags) reported on quiet streets',
      'Fake guides are extremely persistent near major sights',
    ],
  },
  {
    city: 'Fes',
    icon: Star,
    rating: 4,
    overall: 'Safe for tourists',
    image: '/images/hero-fes.webp',
    description:
      'The world\'s largest car-free urban area is surprisingly safe. The medina is confusing to navigate but locals are generally helpful. Fes sees fewer tourists than Marrakech, so scam pressure is lower. The tanneries area has the most aggressive touts.',
    highlights: [
      'Lower tourist numbers mean fewer scammers than Marrakech',
      'Medina residents are generally welcoming and helpful',
      'Good police presence near Bab Bou Jeloud and main routes',
      'Well-established network of licensed guides',
    ],
    cautions: [
      'Very easy to get lost in the medina (1,000+ dead ends)',
      'Tannery area touts are extremely persistent',
      'Some narrow alleys feel isolated, especially at night',
      'Unofficial guides may approach aggressively near gates',
    ],
  },
  {
    city: 'Casablanca',
    icon: Star,
    rating: 3,
    overall: 'Safe with awareness',
    image: '/images/hero-casablanca-skyline.webp',
    description:
      'Morocco\'s largest city and economic capital has a different feel from tourist cities. It is a working city first and a tourist destination second. Most areas visited by tourists (Hassan II Mosque, Corniche, Habous Quarter) are safe, but it has more urban crime than Marrakech or Fes.',
    highlights: [
      'Hassan II Mosque area is heavily policed and very safe',
      'Corniche beachfront is busy and well-lit',
      'Modern malls and restaurants have good security',
      'Reliable tram system for safe city transport',
    ],
    cautions: [
      'Avoid Derb Sultan, Sidi Moumen, and Hay Mohammadi areas at night',
      'Higher petty crime rate than other Moroccan tourist cities',
      'Less tourist infrastructure means fewer English speakers to help',
      'Central train station area can feel unsafe after dark',
    ],
  },
  {
    city: 'Tangier',
    icon: Star,
    rating: 4,
    overall: 'Safe for tourists',
    image: '/images/hero-tangier.webp',
    description:
      'Tangier has undergone a major transformation in the past decade. The new port area, Corniche, and renovated medina are all safe and pleasant. Its reputation from decades past as a dodgy port city is outdated. The massive investment in infrastructure has made it one of Morocco\'s safest cities.',
    highlights: [
      'Major renovation and cleanup in the past decade',
      'New Tangier-Ville port area is modern and well-policed',
      'Corniche beachfront is busy, safe, and family-friendly',
      'Medina is compact and relatively easy to navigate',
    ],
    cautions: [
      'Some areas near the old port remain run-down',
      'Drug dealers may approach tourists in certain medina areas',
      'Beach vendors can be pushy during summer months',
      'Ferry port area has pickpocket activity',
    ],
  },
  {
    city: 'Agadir',
    icon: Star,
    rating: 5,
    overall: 'Very safe',
    image: '/images/hero-agadir.webp',
    description:
      'Rebuilt after the 1960 earthquake as a modern resort city, Agadir is arguably Morocco\'s safest tourist destination. Wide boulevards, well-lit beachfront, resort hotels, and a relaxed atmosphere make it feel more like a European beach town than a traditional Moroccan city.',
    highlights: [
      'Modern grid layout is easy to navigate',
      'Beachfront promenade is well-lit, policed, and busy until late',
      'Resort hotels provide a secure base for families',
      'Very low incidence of scams compared to Marrakech or Fes',
    ],
    cautions: [
      'Beach vendors can be persistent but are not dangerous',
      'Some nightlife areas attract petty crime after midnight',
      'Jet ski and water sports operators may overcharge',
      'Less culturally authentic, which some travelers find disappointing',
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Star,
    rating: 5,
    overall: 'Very safe',
    image: '/images/hero-chefchaouen.webp',
    description:
      'The Blue City is one of the safest places in Morocco. Small, walkable, and incredibly photogenic, it has a relaxed mountain atmosphere. Crime is very low, and the local community is accustomed to tourists. The biggest danger here is tripping on the uneven blue-painted steps.',
    highlights: [
      'Very low crime rate; feels like a small mountain village',
      'Compact medina is impossible to get seriously lost in',
      'Welcoming, relaxed local community',
      'Perfect for solo travelers and women travelers',
    ],
    cautions: [
      'Cannabis is openly offered to tourists (possession is illegal)',
      'Steep hills and uneven steps require good footwear',
      'Limited medical facilities for emergencies',
      'Can be cold and rainy in winter; mountain weather changes fast',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH SAFETY
   ═══════════════════════════════════════════════════════════════ */

const healthRisks = [
  {
    risk: 'Tap Water',
    icon: Stethoscope,
    level: 'Moderate',
    description:
      'Tap water in major cities is treated and technically safe, but the different mineral content can upset tourist stomachs. In rural areas, water quality is less reliable.',
    prevention: 'Drink bottled water (from 3 MAD at shops, from 10 MAD at restaurants). Check that seals are intact. Use bottled water for brushing teeth in rural areas. Ice in tourist restaurants is generally safe.',
  },
  {
    risk: 'Food Safety',
    icon: Stethoscope,
    level: 'Low-Moderate',
    description:
      'Street food is generally safe if cooked fresh in front of you. The main risks are salads washed in tap water, undercooked meat, and food left sitting out in heat. Most tourists eat in Morocco without any issues.',
    prevention: 'Eat at busy stalls where food turnover is high. Choose freshly cooked items. Avoid pre-prepared salads at street stalls. Peel fruits yourself. Tagines and grilled meats are almost always safe as they are cooked thoroughly.',
  },
  {
    risk: 'Sun and Heat',
    icon: Sun,
    level: 'High (Summer)',
    description:
      'Summer temperatures in Marrakech, Fes, and the desert regularly exceed 40 degrees Celsius. Heatstroke and dehydration are real risks, especially during medina walks where shade is limited and airflow is poor.',
    prevention: 'Carry at least 2 liters of water per person. Wear a hat and sunscreen (SPF 50). Explore medinas in early morning or late afternoon. Rest during 12pm-3pm in summer. Desert trips should include air-conditioned transport.',
  },
  {
    risk: 'Pharmacies and Medication',
    icon: Stethoscope,
    level: 'Low',
    description:
      'Morocco has an excellent network of pharmacies (green cross signs). Pharmacists are well-trained and can recommend treatments for common ailments. Many medications available only by prescription elsewhere are sold over the counter in Morocco.',
    prevention: 'Bring essential medications from home in original packaging. Carry a doctor\'s letter for controlled substances. Pharmacies are on every main street and many are open late or 24 hours in cities.',
  },
  {
    risk: 'Insect-Borne Disease',
    icon: Stethoscope,
    level: 'Very Low',
    description:
      'Morocco is malaria-free. There is no risk of dengue, Zika, or yellow fever. Sandfly bites in desert areas can cause leishmaniasis, but this is extremely rare in tourist areas.',
    prevention: 'Use insect repellent in desert areas and during evening hours in rural regions. Sandflies are most active at dusk. Bed nets are not necessary in hotels and riads.',
  },
  {
    risk: 'COVID-19 (2026)',
    icon: Stethoscope,
    level: 'Low',
    description:
      'Morocco has lifted all COVID-related entry requirements. No vaccination proof, negative test, or health declaration is required for entry as of 2026. The healthcare system managed the pandemic effectively with high vaccination rates.',
    prevention: 'Carry a mask for your comfort in crowded spaces. Pharmacies sell rapid tests from 80 MAD if needed. Private clinics can provide PCR tests from 400 MAD. Travel insurance covering COVID-related illness is advisable.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL SAFETY
   ═══════════════════════════════════════════════════════════════ */

const seasonalSafety = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    safetyLevel: 'Excellent',
    description:
      'The best and safest time to visit. Mild temperatures (20-28 degrees Celsius), minimal rain, and all regions are accessible. Roads are in good condition and daylight hours are long.',
    risks: 'Occasional sandstorms in the south during March. Allergies may flare in areas with blooming flowers. Easter period is busy, so prices are higher.',
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    safetyLevel: 'Good (Heat Caution)',
    description:
      'Safe but extremely hot inland. Marrakech and Fes regularly exceed 40 degrees Celsius. Coastal cities (Essaouira, Agadir) are comfortable at 25-30 degrees. The desert is dangerously hot and multi-day treks should be avoided.',
    risks: 'Heatstroke and dehydration are real dangers. Wildfires occur in northern forests (Rif Mountains). Jellyfish appear on Mediterranean beaches in August. Crowded beaches in Agadir and Tangier.',
  },
  {
    season: 'Autumn (September-November)',
    icon: CloudRain,
    safetyLevel: 'Good (Flood Caution)',
    description:
      'Pleasant temperatures return. October and November bring the first rains after summer, which is generally welcome. However, flash floods are a genuine safety concern in desert regions and mountain valleys.',
    risks: 'Flash floods kill several people annually in Morocco. Desert wadis (dry riverbeds) can fill in minutes. Mountain roads may be blocked by landslides. November can bring heavy rain to coastal areas.',
  },
  {
    season: 'Winter (December-February)',
    icon: CloudRain,
    safetyLevel: 'Good (Cold in Mountains)',
    description:
      'Mild in coastal and low-lying cities (15-20 degrees Celsius). Cold in the mountains with snowfall in the High Atlas. The Sahara is cold at night (near freezing). Fewer tourists mean less scam pressure but shorter daylight hours.',
    risks: 'Mountain passes (Tizi n\'Tichka, Tizi n\'Test) may close due to snow. Desert nights are very cold. Rain can make medina streets slippery. Some mountain villages may be temporarily inaccessible.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY CONTACTS
   ═══════════════════════════════════════════════════════════════ */

const emergencyContacts = [
  { service: 'Police (Urban)', number: '19', note: 'Available in all cities, some English spoken' },
  { service: 'Gendarmerie Royale (Rural)', number: '177', note: 'For rural areas and highways' },
  { service: 'Ambulance / SAMU', number: '15', note: 'Emergency medical services' },
  { service: 'Fire Department', number: '15', note: 'Fire and rescue services' },
  { service: 'Tourist Police (Marrakech)', number: '+212 524 384 601', note: 'English and French spoken' },
  { service: 'Tourist Police (Fes)', number: '+212 535 622 870', note: 'Near Bab Bou Jeloud' },
  { service: 'SOS Doctors (Marrakech)', number: '+212 524 404 040', note: 'English-speaking doctors, house calls' },
  { service: 'Polyclinique du Sud (Marrakech)', number: '+212 524 447 999', note: 'Private hospital, 24hr emergency' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INSURANCE RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const insuranceTips = [
  {
    title: 'Medical Coverage',
    icon: Stethoscope,
    description:
      'Ensure minimum coverage of 50,000 EUR for medical expenses. Private clinic consultations start from 500 MAD. A night in a private hospital can cost from 3,000 MAD. Emergency dental treatment starts from 300 MAD.',
  },
  {
    title: 'Medical Evacuation',
    icon: Siren,
    description:
      'Critical for serious conditions. Morocco\'s best hospitals are in Casablanca and Rabat, but complex surgeries may require evacuation to Europe. Air ambulance to Spain costs from 15,000 EUR without insurance.',
  },
  {
    title: 'Adventure Activities',
    icon: Navigation,
    description:
      'Standard policies may not cover quad biking, camel trekking, surfing, sandboarding, or mountain trekking above 2,500m. If you plan adventure activities, verify your policy explicitly covers them or add a rider.',
  },
  {
    title: 'Trip Cancellation',
    icon: FileText,
    description:
      'Covers non-refundable costs if you must cancel. Useful given Morocco\'s occasional flight disruptions, especially in winter. Look for "cancel for any reason" policies for maximum flexibility.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const practicalTips = [
  {
    category: 'Money and Valuables',
    icon: Wallet,
    tips: [
      'Use ATMs inside banks, not standalone street ATMs',
      'Carry small bills for taxis and tips; avoid flashing large notes',
      'Keep your passport in your riad safe; carry a photocopy',
      'Use a money belt or hidden pouch in crowded medinas',
      'Do not wear expensive jewelry or watches in markets',
      'Divide your cash between multiple locations on your person',
    ],
  },
  {
    category: 'Transportation',
    icon: Car,
    tips: [
      'Use only official petit taxis (color-coded by city) or ride apps',
      'Agree on taxi fares before departing or insist on the meter',
      'Avoid driving in medinas; park outside and walk in',
      'Take CTM or Supratours buses between cities (safest options)',
      'Train travel (ONCF) is safe, reliable, and comfortable',
      'For grand taxis, agree on whether the price is per person or whole car',
    ],
  },
  {
    category: 'Communication',
    icon: Phone,
    tips: [
      'Buy a local SIM card at the airport (Maroc Telecom, Orange, Inwi) from 30 MAD',
      'Download offline Google Maps for all cities before your trip',
      'Learn basic French phrases; it opens more doors than English',
      'Save your riad address in Arabic on your phone for taxi drivers',
      'Share live location with trusted contacts when exploring alone',
      'WhatsApp is used universally in Morocco; exchange numbers with guides',
    ],
  },
  {
    category: 'Behavior and Dress',
    icon: BookOpen,
    tips: [
      'Dress modestly in medinas and conservative areas (cover shoulders and knees)',
      'Ask permission before photographing people, especially women',
      'Remove shoes when entering mosques (non-Muslims cannot enter most)',
      'Use your right hand for greetings and eating (left hand is considered unclean)',
      'Do not drink alcohol in public outside licensed establishments',
      'Respect Ramadan; avoid eating, drinking, or smoking in public during fasting hours',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: POLITICAL AND TERRORISM ASSESSMENT
   ═══════════════════════════════════════════════════════════════ */

const securityAssessment = [
  {
    topic: 'Political Stability',
    icon: Scale,
    assessment: 'Stable',
    description:
      'Morocco is a constitutional monarchy under King Mohammed VI. The political system is stable and has weathered regional upheavals (Arab Spring, Libya, etc.) without major disruption. Morocco held peaceful parliamentary elections in 2021. The country has strong institutions and a professional security apparatus.',
  },
  {
    topic: 'Terrorism Risk',
    icon: ShieldAlert,
    assessment: 'Low',
    description:
      'Morocco has not experienced a major terrorist attack since the Marrakech cafe bombing in 2011. The BCIJ (Bureau Central d\'Investigations Judiciaires) has dismantled hundreds of terror cells pre-emptively. Morocco is a key counter-terrorism partner for Western nations and maintains strong intelligence capabilities. Tourist areas have visible security.',
  },
  {
    topic: 'Civil Unrest',
    icon: Users,
    assessment: 'Low',
    description:
      'Protests occur occasionally, usually related to economic grievances. They are typically peaceful, localized, and focused on government buildings. Tourist areas are almost never affected. The last significant protests were in Al Hoceima (Rif region) in 2016-2017.',
  },
  {
    topic: 'Border Security',
    icon: Globe,
    assessment: 'Controlled',
    description:
      'Morocco\'s borders with Algeria are closed. The southern border (Western Sahara) is controlled by Morocco with military presence. The northern border with Spain (Ceuta and Melilla) is heavily monitored. Entry points (airports, ports) have modern security screening.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AREAS TO AVOID
   ═══════════════════════════════════════════════════════════════ */

const areasToAvoid = [
  {
    area: 'Rif Mountains (Ketama Area)',
    severity: 'Exercise Caution',
    icon: AlertTriangle,
    description:
      'The Ketama area in the Rif Mountains is Morocco\'s primary cannabis cultivation region. Travelers driving through may be stopped by locals trying to sell cannabis. Roadside ambushes and intimidation have been reported. The road between Chefchaouen and Al Hoceima passes through this zone.',
    advice: 'Drive through without stopping. Keep doors locked and windows up. Do not accept anything from roadside sellers. Purchasing cannabis is illegal and can result in imprisonment.',
  },
  {
    area: 'Algeria Border Region',
    severity: 'Avoid',
    icon: ShieldAlert,
    description:
      'The Morocco-Algeria border has been closed since 1994. The eastern border region is remote, poorly served, and has military presence. There is no reason for tourists to visit this area, and some Western governments advise against travel near the border.',
    advice: 'Stay well away from the Algerian border. If traveling to eastern Morocco (Oujda, Figuig), stick to main roads and cities.',
  },
  {
    area: 'Western Sahara (South of Guelmim)',
    severity: 'Check Advisories',
    icon: Info,
    description:
      'The Western Sahara is a disputed territory administered by Morocco. The area is generally safe for tourists (Dakhla is a popular surfing destination), but some governments advise checking current conditions. Military checkpoints are common.',
    advice: 'Check your government\'s latest travel advisory before visiting. Carry your passport at all times. Dakhla and Laayoune are the safest towns. Stay on main roads.',
  },
  {
    area: 'Casablanca Outer Neighborhoods (Night)',
    severity: 'Exercise Caution',
    icon: AlertTriangle,
    description:
      'Neighborhoods including Derb Sultan, Sidi Moumen, Hay Mohammadi, and parts of Ain Sebaa are working-class areas with higher crime rates. They offer nothing for tourists and are best avoided, especially at night.',
    advice: 'Stick to the main tourist areas: Hassan II Mosque, Corniche, Habous Quarter, central Maarif district. Use taxis to move between areas at night.',
  },
  {
    area: 'Deserted Medina Alleyways (After Midnight)',
    severity: 'Exercise Caution',
    icon: AlertTriangle,
    description:
      'The maze-like medinas of Marrakech and Fes are generally safe during the day and evening. However, deserted narrow alleyways after midnight can pose risks. Muggings, though rare, are most likely in these conditions.',
    advice: 'Return to your riad by 11pm if walking through the medina. Use a taxi for late returns. Save your riad\'s location on your phone. Many riads offer pickup from a nearby landmark.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function IsMoroccoSafePage() {
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
            backgroundImage: 'url(/images/hero-morocco-safe.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Is Morocco Safe?</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Shield className="w-4 h-4" />
            Safety &amp; Travel Advisory
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Is Morocco Safe?
            <br className="hidden md:block" /> Complete 2026 Safety Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Crime statistics, scam awareness, city-by-city safety ratings, health tips,
            and emergency contacts. Everything you need for a worry-free Morocco trip.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Short Answer: Yes, Morocco Is Safe for Tourists
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                &quot;Is Morocco safe?&quot; is one of the most searched travel safety questions online, and the
                answer is reassuring. Morocco welcomes over 16 million tourists annually and has invested
                heavily in tourism security. It is rated Level 2 (&quot;Exercise Increased Caution&quot;) by the
                US State Department &mdash; the same level as France, Germany, the United Kingdom, and Spain.
              </p>
              <p>
                Morocco&apos;s violent crime rate is low by global standards. Its homicide rate of 1.2 per
                100,000 people is lower than the United States (6.3), comparable to Portugal (0.8), and
                well below the global average (6.1). The country has a dedicated Tourist Police force in
                major cities, a strong counter-terrorism apparatus, and a culture that values hospitality
                above almost everything else.
              </p>
              <p>
                That said, Morocco is not without risks. Petty crime, scams targeting tourists, persistent
                touts, and cultural differences can make visitors uncomfortable if unprepared. This guide
                covers every safety dimension so you can travel with confidence and awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Stats Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BadgeCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Safety at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key safety statistics and indicators for Morocco in 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <StatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{stat.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety by Traveler Type ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety by Traveler Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every traveler has different concerns. Here is a tailored safety assessment for each type.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {travelerSafety.map((traveler) => {
              const TravelerIcon = traveler.icon;
              return (
                <div key={traveler.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TravelerIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {traveler.type}
                      </h3>
                      <span className={`text-sm font-semibold ${traveler.ratingColor}`}>
                        {traveler.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{traveler.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {traveler.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Scams ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Scams &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Being aware of these common tactics is the best defense. None are dangerous, but they can cost you money and sour your experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commonScams.map((scam) => {
              const ScamIcon = scam.icon;
              return (
                <div key={scam.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ScamIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {scam.name}
                      </h3>
                      <span className="text-xs font-medium text-amber-700">{scam.severity}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{scam.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Prevention:</span> {scam.prevention}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has a different safety profile. Here are detailed ratings for the six most visited destinations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cityRatings.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`Cityscape view of ${city.city}, Morocco showing typical tourist area`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white mb-1">
                      {city.city}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < city.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-white/30'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-white/80">{city.overall}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Safety Highlights
                      </h4>
                      <div className="space-y-1.5">
                        {city.highlights.map((h, i) => (
                          <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                            {h}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Things to Watch
                      </h4>
                      <div className="space-y-1.5">
                        {city.cautions.map((c, i) => (
                          <p key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                            <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-600" />
                            {c}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Political Stability & Terrorism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Political Stability &amp; Terrorism Assessment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s security situation assessed across four key dimensions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {securityAssessment.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.topic} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.topic}
                      </h3>
                      <span className="text-sm font-semibold text-green-700">{item.assessment}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Areas to Avoid ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleAlert className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Areas to Avoid or Exercise Caution
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most of Morocco is safe for tourists. These are the specific areas where extra caution is warranted.
          </p>

          <div className="space-y-6">
            {areasToAvoid.map((area) => {
              const AreaIcon = area.icon;
              return (
                <div key={area.area} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <AreaIcon className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {area.area}
                      </h3>
                      <span className="text-xs font-medium text-amber-700">{area.severity}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{area.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Our Advice:</span> {area.advice}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Health Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stethoscope className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health &amp; Medical Safety
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has no major health risks for travelers. Here is what to know about common health concerns.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {healthRisks.map((risk) => {
              const RiskIcon = risk.icon;
              return (
                <div key={risk.risk} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <RiskIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {risk.risk}
                      </h3>
                      <span className="text-xs font-medium text-[var(--text-muted)]">Risk Level: {risk.level}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{risk.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Prevention:</span> {risk.prevention}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Safety ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Safety Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s safety profile changes with the seasons. Here is what to expect throughout the year.
          </p>

          <div className="space-y-6">
            {seasonalSafety.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <span className="text-sm font-semibold text-green-700">Safety: {season.safetyLevel}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Key Risks:</span> {season.risks}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Emergency Contacts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Phone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Emergency Contacts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Save these numbers in your phone before arriving in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            For life-threatening emergencies, call 15 (SAMU) or 19 (Police). Your embassy can assist with passport loss, arrest, or serious emergencies.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Service</div>
              <div className="p-3 px-4">Number</div>
              <div className="p-3 px-4">Note</div>
            </div>
            {emergencyContacts.map((contact, i) => (
              <div
                key={contact.service}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{contact.service}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{contact.number}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{contact.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Travel Insurance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Travel Insurance Recommendations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Travel insurance is not mandatory for Morocco entry but is strongly recommended. Here is what your policy should cover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insuranceTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Safety Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Staying Safe
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common-sense tips organized by category to help you travel confidently in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {practicalTips.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {category.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for tourists in 2026?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe for tourists in 2026. It is rated Level 2 (&quot;Exercise Increased Caution&quot;)
                by the US State Department, the same level as France, Germany, and the UK. Morocco has invested heavily
                in tourism security with dedicated Tourist Police in major cities. Over 16 million tourists visited in 2025
                without major incident. The main concerns are petty crime and scams, not violent crime.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is generally safe for solo female travelers with precautions. Verbal harassment (catcalling) is
                the most common issue but rarely escalates to physical contact. Dress modestly in conservative areas,
                use registered taxis at night, stay in well-reviewed accommodations, and consider hiring a female guide
                for medina tours. Many women travel Morocco solo every year and have wonderful, enriching experiences.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the most common scams in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most common scams include fake guides leading you to carpet shops for commission, inflated taxi
                fares (always agree on price beforehand), the henna trap (unsolicited henna then demanding payment),
                carpet shop pressure sales with prices 5-10x above value, and the &quot;your destination is closed today&quot;
                redirect. Being aware of these makes them easy to avoid. None involve violence or danger.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to drink tap water in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tap water in Morocco is treated and technically potable in major cities, but it is not recommended for
                tourists due to different mineral content that can cause stomach upset. Drink bottled water (from 3 MAD
                at shops, from 10 MAD at restaurants). Always check that bottle seals are intact. Ice in tourist restaurants
                is generally made from purified water and is safe.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there areas to avoid in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most of Morocco is safe. Exercise extra caution in the Rif Mountains around Ketama (cannabis cultivation
                area), remote border areas near Algeria, certain Casablanca neighborhoods at night (Derb Sultan, Sidi
                Moumen), and deserted medina alleyways after midnight. The Western Sahara is generally safe but check
                current advisories. All major tourist cities and attractions are safe during normal visiting hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for LGBTQ+ travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Same-sex relations are illegal in Morocco under Article 489 of the penal code, with penalties of up to
                3 years imprisonment. While enforcement against foreign tourists is extremely rare, the legal environment
                is hostile. Exercise complete discretion: avoid public displays of affection, be cautious with dating apps,
                and choose accommodations in cosmopolitan cities like Marrakech or Essaouira. Many LGBTQ+ travelers visit
                Morocco without incident.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What emergency numbers should I know in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The key emergency numbers are: Police 19 (urban areas), Gendarmerie Royale 177 (rural areas and
                highways), and SAMU/Ambulance 15 for medical emergencies. Tourist Police are available in Marrakech,
                Fes, Casablanca, and other major cities with English and French speakers. Save your embassy&apos;s emergency
                number and your travel insurance assistance line in your phone before arrival.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need travel insurance for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Travel insurance is not mandatory for Morocco entry but is strongly recommended. Private clinic
                consultations start from 500 MAD, and a hospital stay can cost from 3,000 MAD per night. Ensure your
                policy covers at least 50,000 EUR in medical expenses and includes emergency medical evacuation, as
                serious conditions may require transfer to Europe. If you plan adventure activities (desert quad biking,
                mountain trekking), verify they are explicitly covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-travel-tips" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Info className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Travel Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential tips for first-time visitors covering money, transport, culture, and packing.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/city/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s most popular city with neighborhood details and local tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <CheckCircle className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Season-specific packing guide to ensure you are prepared for Morocco&apos;s diverse climate.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
