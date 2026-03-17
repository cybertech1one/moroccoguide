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
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  Utensils,
  Plane,
  Sun,
  Moon,
  ShoppingBag,
  Camera,
  Globe,
  Scale,
  TrendingUp,
  Compass,
  Mountain,
  CircleDot,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco vs Turkey 2026 | Honest Comparison for Travelers',
  description:
    'Morocco vs Turkey: which destination is right for you? Head-to-head comparison of cost, culture, food, safety, weather, beaches, activities, nightlife, shopping, and visa requirements. All prices in MAD with honest pros and cons for both countries.',
  keywords: [
    'Morocco vs Turkey',
    'Morocco or Turkey',
    'Morocco Turkey comparison',
    'Morocco vs Turkey travel',
    'Morocco vs Turkey cost',
    'Morocco vs Turkey food',
    'Morocco vs Turkey beaches',
    'Morocco vs Turkey safety',
    'Morocco vs Turkey weather',
    'Morocco Turkey holiday',
    'Morocco Turkey vacation',
    'best destination Morocco Turkey',
    'Morocco vs Turkey 2026',
    'Morocco vs Turkey budget',
    'Morocco vs Turkey culture',
    'Morocco vs Turkey nightlife',
    'Morocco vs Turkey shopping',
    'Morocco vs Turkey visa',
    'Morocco vs Turkey activities',
    'should I go to Morocco or Turkey',
  ],
  openGraph: {
    title: 'Morocco vs Turkey 2026 | Honest Comparison for Travelers',
    description:
      'Which destination is right for you? Head-to-head comparison covering cost, food, culture, beaches, safety, and more. Honest pros and cons for both countries.',
    url: `${BASE_URL}/morocco-vs-turkey`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-landscape.webp`,
        width: 1200,
        height: 630,
        alt: 'Sweeping view of Moroccan landscape with traditional architecture and vibrant colors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco vs Turkey 2026 | Which Destination Is Right for You?',
    description:
      'Head-to-head comparison of cost, culture, food, safety, weather, beaches, nightlife, and more. All prices in MAD with honest advice for both countries.',
    images: [`${BASE_URL}/images/hero-morocco-landscape.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-vs-turkey` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE_URL}/morocco-vs-turkey`,
  name: 'Morocco vs Turkey 2026 | Honest Comparison for Travelers',
  headline: 'Morocco vs Turkey: The Complete Travel Comparison Guide for 2026',
  description:
    'Head-to-head comparison of Morocco and Turkey covering cost, culture, food, safety, weather, beaches, activities, nightlife, shopping, and visa requirements.',
  url: `${BASE_URL}/morocco-vs-turkey`,
  image: `${BASE_URL}/images/hero-morocco-landscape.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-vs-turkey`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Country', name: 'Morocco' },
    { '@type': 'Country', name: 'Turkey' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco vs Turkey', item: `${BASE_URL}/morocco-vs-turkey` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco cheaper than Turkey for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is generally 15-25% cheaper than Turkey for daily expenses. Budget accommodation in Morocco starts from 200 MAD per night versus from 350 MAD in Turkey. Street food in Morocco costs from 15-30 MAD versus from 40-60 MAD in Turkey. However, Turkey can offer better value on all-inclusive beach resorts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco or Turkey safer for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both countries are generally safe for solo female travelers with standard precautions. Turkey, particularly Istanbul and the Aegean coast, has slightly more established infrastructure for solo women travelers. Morocco requires a bit more cultural awareness, especially in rural areas, but cities like Marrakech, Fes, and Essaouira are well-accustomed to international visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better food: Morocco or Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both countries are world-renowned for their cuisine. Morocco excels with tagines, couscous, pastilla, and street food like msemen and harira. Turkey counters with kebabs, meze, baklava, and breakfast spreads. Morocco offers more aromatic, slow-cooked dishes while Turkey offers more variety and a stronger cafe culture. It depends entirely on personal preference.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which country has better beaches: Morocco or Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turkey has superior beaches overall, particularly along the Turquoise Coast (Antalya, Fethiye, Bodrum) and the Aegean. Turkey offers warm Mediterranean and Aegean waters ideal for swimming. Morocco has beautiful Atlantic beaches (Essaouira, Taghazout, Legzira) that are better for surfing, and Mediterranean beaches near Al Hoceima and Saaidia, but ocean temperatures are generally cooler.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa for Morocco or Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Western passport holders can enter Morocco visa-free for 90 days and Turkey with an e-visa or visa-free depending on nationality. US, UK, Canadian, and EU citizens can enter Morocco without a visa. For Turkey, US and UK citizens need an e-visa (approximately 500 MAD), while EU citizens can enter visa-free. Always check the latest requirements before travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine Morocco and Turkey in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Direct flights connect Casablanca and Marrakech to Istanbul, typically from 1,500 MAD one-way. A popular itinerary is 5-7 days in Morocco followed by 5-7 days in Turkey, or vice versa. This gives you the best of both worlds: Morocco\'s medinas and Sahara, plus Turkey\'s coastline and Istanbul.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco vs Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both countries share similar ideal travel windows. Spring (March-May) and autumn (September-November) are perfect for both. Summer (June-August) is extremely hot inland in both countries but great for Turkish beaches. Winter (December-February) is mild in southern Morocco and cold in most of Turkey except the Mediterranean coast.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is better for a first-time visitor: Morocco or Turkey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For absolute first-time travelers to the region, Turkey is slightly more beginner-friendly due to wider English proficiency, more familiar food options, and established tourist infrastructure. Morocco offers a more immersive and adventurous experience. If you want culture shock in the best possible way, choose Morocco. If you want a gentler introduction to the region, start with Turkey.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HEAD-TO-HEAD COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonCategories = [
  {
    category: 'Daily Budget (Budget Traveler)',
    icon: DollarSign,
    morocco: 'From 400 MAD per day (accommodation, food, transport, activities)',
    turkey: 'From 550 MAD per day (accommodation, food, transport, activities)',
    winner: 'morocco',
    verdict: 'Morocco is 15-25% cheaper for budget travelers across the board.',
  },
  {
    category: 'Daily Budget (Mid-Range)',
    icon: DollarSign,
    morocco: 'From 1,200 MAD per day (riad, restaurants, guided tours)',
    turkey: 'From 1,400 MAD per day (boutique hotel, restaurants, guided tours)',
    winner: 'morocco',
    verdict: 'Morocco offers better value at mid-range, especially for accommodation in riads.',
  },
  {
    category: 'Daily Budget (Luxury)',
    icon: Crown,
    morocco: 'From 4,000 MAD per day (5-star, fine dining, private tours)',
    turkey: 'From 4,500 MAD per day (5-star, fine dining, private tours)',
    winner: 'tie',
    verdict: 'Similar pricing at luxury level. Turkey has more international luxury chains; Morocco has unique riads.',
  },
  {
    category: 'Accommodation',
    icon: Building,
    morocco: 'Traditional riads from 200 MAD/night. Luxury riads from 1,500 MAD. Sahara camps from 800 MAD.',
    turkey: 'Pensions from 350 MAD/night. Boutique hotels from 1,000 MAD. Cave hotels in Cappadocia from 1,200 MAD.',
    winner: 'morocco',
    verdict: 'Morocco wins on uniqueness (riads, kasbahs, desert camps) and value at budget tier.',
  },
  {
    category: 'Food & Dining',
    icon: Utensils,
    morocco: 'Street food from 15 MAD. Restaurant meal from 60 MAD. Fine dining from 400 MAD.',
    turkey: 'Street food from 40 MAD. Restaurant meal from 80 MAD. Fine dining from 500 MAD.',
    winner: 'morocco',
    verdict: 'Morocco is cheaper for food. Both have world-class cuisines with very different flavor profiles.',
  },
  {
    category: 'Culture & History',
    icon: BookOpen,
    morocco: 'Ancient medinas, Berber heritage, Islamic architecture, Sahara nomadic culture, French colonial influence.',
    turkey: 'Byzantine and Ottoman empires, Greco-Roman ruins, Islamic architecture, crossroads of civilizations.',
    winner: 'tie',
    verdict: 'Both are cultural powerhouses. Morocco feels more exotic; Turkey has more layered historical depth.',
  },
  {
    category: 'Beaches',
    icon: Waves,
    morocco: 'Atlantic surfing beaches, Mediterranean coast. Water is cooler. Best for surfing and rugged beauty.',
    turkey: 'Turquoise Coast, Aegean islands. Warm water, sandy beaches. Better for swimming and beach resorts.',
    winner: 'turkey',
    verdict: 'Turkey has warmer water, more developed beach infrastructure, and a longer beach season.',
  },
  {
    category: 'Weather',
    icon: Sun,
    morocco: 'Mild winters (south), hot summers inland. Coastal areas moderate. Snow in Atlas Mountains. Year-round sun.',
    turkey: 'Cold winters (inland), hot humid summers (coast). Mediterranean coast mild in winter. Four distinct seasons.',
    winner: 'tie',
    verdict: 'Morocco has more reliable year-round warmth. Turkey has better summer beach weather.',
  },
  {
    category: 'Safety',
    icon: ShieldCheck,
    morocco: 'Low violent crime. Petty scams in tourist areas. Persistent touts in medinas. Safe for families.',
    turkey: 'Low violent crime in tourist areas. Standard urban precautions in Istanbul. Well-policed tourist zones.',
    winner: 'tie',
    verdict: 'Both are safe for tourists with standard precautions. Different annoyances in each country.',
  },
  {
    category: 'Ease of Travel',
    icon: Compass,
    morocco: 'Trains between major cities. CTM buses. Domestic flights. Medinas walkable. Some French helps.',
    turkey: 'Excellent domestic flights. Modern metro in Istanbul. Dolmus minibuses. English more widely spoken.',
    winner: 'turkey',
    verdict: 'Turkey has better transport infrastructure and wider English proficiency in tourist areas.',
  },
  {
    category: 'Activities & Adventures',
    icon: Mountain,
    morocco: 'Sahara desert trips, Atlas trekking, surfing, medina exploration, cooking classes, hammam rituals.',
    turkey: 'Hot air balloons, sailing, paragliding, ruins exploration, hammam, cooking classes, diving.',
    winner: 'tie',
    verdict: 'Both offer incredible diversity. Morocco has the Sahara; Turkey has Cappadocia and coastal adventures.',
  },
  {
    category: 'Nightlife',
    icon: Moon,
    morocco: 'Limited in most cities. Marrakech and Casablanca have bars and clubs. Alcohol available but not prominent.',
    turkey: 'Vibrant in Istanbul, Bodrum, Antalya. Bars, clubs, rooftop terraces. More liberal drinking culture.',
    winner: 'turkey',
    verdict: 'Turkey has significantly more nightlife options and a more liberal social scene around alcohol.',
  },
  {
    category: 'Shopping',
    icon: ShoppingBag,
    morocco: 'Souks with leather, ceramics, rugs, spices, argan oil. Bargaining expected. Authentic artisan goods.',
    turkey: 'Grand Bazaar, spice markets, ceramics, textiles, Turkish lamps, carpets. Bargaining common.',
    winner: 'tie',
    verdict: 'Both are shopping paradises. Morocco has more unique artisan goods; Turkey has the Grand Bazaar experience.',
  },
  {
    category: 'Visa Requirements',
    icon: Globe,
    morocco: '90-day visa-free for most Western passports. No e-visa needed. Simple entry process.',
    turkey: 'E-visa required for US/UK citizens (from 500 MAD). EU citizens visa-free. Quick online process.',
    winner: 'morocco',
    verdict: 'Morocco is easier with blanket visa-free entry for most nationalities. No fees, no paperwork.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHOOSE MOROCCO IF...
   ═══════════════════════════════════════════════════════════════ */

const chooseMoroccoReasons = [
  {
    reason: 'You Want the Sahara Desert',
    icon: Sun,
    description:
      'No trip to Turkey can match sleeping under the stars in the Sahara. Morocco offers 2-3 day desert excursions from Marrakech with camel treks, luxury desert camps from 800 MAD per night, and unforgettable sunrises over the dunes of Erg Chebbi and Erg Chigaga.',
  },
  {
    reason: 'You Are on a Tight Budget',
    icon: DollarSign,
    description:
      'Morocco is 15-25% cheaper than Turkey for daily costs. Street food from 15 MAD, hostels from 80 MAD per night, and affordable internal transport make Morocco one of the best-value destinations in the world. A full day of sightseeing, eating, and accommodation can cost from 400 MAD.',
  },
  {
    reason: 'You Crave Sensory Overload',
    icon: Sparkles,
    description:
      'Morocco hits every sense simultaneously. The spice-laden souks, the call to prayer echoing through labyrinthine medinas, the vivid colors of zellige tilework, the taste of mint tea and fresh tagine. It is a sensory experience that Turkey, while beautiful, does not replicate at the same intensity.',
  },
  {
    reason: 'You Love Artisan Craftsmanship',
    icon: Gem,
    description:
      'Morocco is a living museum of traditional crafts. Tanneries in Fes operating since medieval times, hand-woven Berber rugs, hammered metalwork, hand-painted ceramics, and leather goods made by artisans using techniques unchanged for centuries. Shopping in the souks is an experience, not just a transaction.',
  },
  {
    reason: 'You Want a Unique Accommodation Experience',
    icon: Building,
    description:
      'Riads (traditional courtyard houses) are unique to Morocco. Staying in a restored riad in the medina from 200 MAD per night is an experience no Turkish hotel can match. Add kasbahs in the south and luxury desert camps, and Morocco offers accommodation found nowhere else on earth.',
  },
  {
    reason: 'You Speak French',
    icon: Globe,
    description:
      'French is widely spoken across Morocco as a second language. If you speak French, you will find it significantly easier to communicate, negotiate, and connect with locals than in Turkey, where French speakers are rare outside Istanbul.',
  },
  {
    reason: 'You Want Mountain Trekking',
    icon: Mountain,
    description:
      'The High Atlas Mountains offer trekking experiences rivaling anything in Turkey. Jebel Toubkal (4,167m) is the highest peak in North Africa. Multi-day treks through Berber villages from 500 MAD per day (guided) provide a window into mountain life unchanged for centuries.',
  },
  {
    reason: 'You Are a Surfer',
    icon: Waves,
    description:
      'Morocco is one of the top surfing destinations in Africa. Taghazout, Essaouira, and Imsouane offer consistent Atlantic swells, affordable surf camps from 400 MAD per night, and a laid-back surf culture. Turkey has virtually no surf scene.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHOOSE TURKEY IF...
   ═══════════════════════════════════════════════════════════════ */

const chooseTurkeyReasons = [
  {
    reason: 'You Want Beach Resorts',
    icon: Waves,
    description:
      'Turkey\'s Turquoise Coast is one of the finest beach destinations in the world. Warm Mediterranean water, all-inclusive resorts, and pristine sandy beaches along the Antalya, Fethiye, and Bodrum coastlines. Morocco\'s Atlantic beaches are cooler and rougher by comparison.',
  },
  {
    reason: 'You Want Cappadocia',
    icon: Camera,
    description:
      'The fairy chimneys and hot air balloon rides of Cappadocia are iconic experiences that Morocco simply cannot replicate. Balloon rides over the surreal landscape at sunrise are a bucket-list experience. Cave hotels add to the otherworldly atmosphere.',
  },
  {
    reason: 'You Prioritize Nightlife',
    icon: Moon,
    description:
      'Istanbul, Bodrum, and Antalya have thriving nightlife scenes with rooftop bars, beach clubs, and nightclubs. Alcohol is widely available and socially normalized in tourist areas. Morocco\'s nightlife is comparatively limited and concentrated in Marrakech and Casablanca.',
  },
  {
    reason: 'You Want Greek-Roman Ruins',
    icon: Building,
    description:
      'Turkey has some of the most spectacular ancient ruins in the world. Ephesus, Troy, Pergamon, and Aspendos are just the beginning. The sheer density and preservation of Greco-Roman, Byzantine, and Ottoman sites across Turkey is unmatched by Morocco\'s historical offerings.',
  },
  {
    reason: 'You Are a First-Time Traveler',
    icon: Globe,
    description:
      'Turkey is slightly more beginner-friendly for those new to the region. English is more widely spoken in tourist areas, the transport infrastructure is more modern, and the tourist industry is more standardized. Morocco can feel more overwhelming on a first visit.',
  },
  {
    reason: 'You Want Istanbul',
    icon: Star,
    description:
      'Istanbul is one of the great cities of the world. The Hagia Sophia, Blue Mosque, Topkapi Palace, Grand Bazaar, and the Bosphorus create an unrivaled urban experience. No single Moroccan city offers quite the same concentration of world-famous landmarks.',
  },
  {
    reason: 'You Love Sailing and Island Hopping',
    icon: Compass,
    description:
      'Turkey\'s Aegean and Mediterranean coasts offer world-class sailing, gulet cruises, and access to Greek islands. The blue voyage (mavi yolculuk) along the Turquoise Coast is a uniquely Turkish experience. Morocco has no equivalent island-hopping culture.',
  },
  {
    reason: 'You Want All-Inclusive Value',
    icon: TrendingUp,
    description:
      'Turkey dominates the all-inclusive resort market. Beach resorts in Antalya and Bodrum offer exceptional value with everything included. Morocco does not have a comparable all-inclusive beach resort culture, focusing instead on boutique and riad-style accommodation.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COST COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const costComparison = [
  { item: 'Hostel / Budget Room', morocco: 'From 80 MAD/night', turkey: 'From 150 MAD/night' },
  { item: 'Mid-Range Hotel / Riad', morocco: 'From 500 MAD/night', turkey: 'From 700 MAD/night' },
  { item: 'Luxury Hotel', morocco: 'From 2,000 MAD/night', turkey: 'From 2,500 MAD/night' },
  { item: 'Street Food Meal', morocco: 'From 15 MAD', turkey: 'From 40 MAD' },
  { item: 'Restaurant Meal', morocco: 'From 60 MAD', turkey: 'From 80 MAD' },
  { item: 'Fine Dining (per person)', morocco: 'From 400 MAD', turkey: 'From 500 MAD' },
  { item: 'Local Beer', morocco: 'From 30 MAD', turkey: 'From 50 MAD' },
  { item: 'Coffee / Tea', morocco: 'From 10 MAD', turkey: 'From 25 MAD' },
  { item: 'Local Bus Ride', morocco: 'From 5 MAD', turkey: 'From 10 MAD' },
  { item: 'Taxi (5 km ride)', morocco: 'From 20 MAD', turkey: 'From 40 MAD' },
  { item: 'Domestic Flight', morocco: 'From 400 MAD', turkey: 'From 350 MAD' },
  { item: 'Guided Day Tour', morocco: 'From 300 MAD', turkey: 'From 500 MAD' },
  { item: 'Museum / Monument Entry', morocco: 'From 20 MAD', turkey: 'From 100 MAD' },
  { item: 'Hammam / Turkish Bath', morocco: 'From 50 MAD', turkey: 'From 200 MAD' },
  { item: 'SIM Card (Tourist)', morocco: 'From 50 MAD', turkey: 'From 200 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEATHER COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const weatherComparison = [
  {
    season: 'Spring (Mar-May)',
    morocco: 'Ideal. Warm days (20-28C), cool nights. Wildflowers in the Atlas. Perfect for desert trips and city touring.',
    turkey: 'Pleasant but variable. Istanbul can be rainy. Mediterranean coast warming up. Cappadocia cool but beautiful.',
    best: 'Both excellent. Slight edge to Morocco for reliability.',
  },
  {
    season: 'Summer (Jun-Aug)',
    morocco: 'Very hot inland (40C+ in Marrakech). Coast moderate. Desert trips uncomfortable. Best for Essaouira and coast.',
    turkey: 'Hot and humid on coast. Istanbul warm and bustling. Perfect for beaches. Cappadocia hot but manageable.',
    best: 'Turkey for beaches. Morocco for coastal escapes only.',
  },
  {
    season: 'Autumn (Sep-Nov)',
    morocco: 'Ideal. Heat eases, comfortable inland. Perfect for desert, trekking, and city exploration. Fewer tourists.',
    turkey: 'Excellent. Warm seas for swimming until October. Istanbul pleasant. Shoulder season pricing.',
    best: 'Both excellent. October is the sweet spot for either.',
  },
  {
    season: 'Winter (Dec-Feb)',
    morocco: 'Mild south (18-22C in Marrakech). Cold in Atlas (skiing at Oukaimeden). Rain on coast. Good for desert trips.',
    turkey: 'Cold in Istanbul and inland. Snow in Cappadocia. Mediterranean coast mild but rainy. Ski resorts open.',
    best: 'Morocco for warmth. Turkey only for skiing or Mediterranean coast.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMBINING BOTH DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const combinedItineraries = [
  {
    name: 'The 2-Week Classic',
    duration: '14 days',
    icon: Globe,
    route: 'Marrakech (3 days) - Sahara (2 days) - Fes (2 days) - Fly to Istanbul (3 days) - Cappadocia (2 days)',
    highlights: [
      'Best of both countries in one trip',
      'Sahara desert and Cappadocia balloons',
      'Two of the world\'s greatest medinas and bazaars',
      'Direct flights Casablanca/Marrakech to Istanbul',
    ],
    budget: 'From 15,000 MAD per person (flights, accommodation, activities)',
  },
  {
    name: 'The Beach & Culture Mix',
    duration: '12 days',
    icon: Waves,
    route: 'Marrakech (3 days) - Essaouira (2 days) - Fly to Antalya (3 days) - Istanbul (3 days)',
    highlights: [
      'Atlantic surf meets Mediterranean sun',
      'Moroccan medina and Turkish bazaar shopping',
      'Beach time in both countries',
      'Contrasting coastal vibes',
    ],
    budget: 'From 13,000 MAD per person (flights, accommodation, activities)',
  },
  {
    name: 'The Budget Backpacker',
    duration: '21 days',
    icon: Compass,
    route: 'Marrakech - Essaouira - Fes - Chefchaouen - Fly to Istanbul - Cappadocia - Antalya - Fethiye',
    highlights: [
      'Maximum experiences on minimum budget',
      'Hostels and budget riads throughout',
      'Public transport and street food focus',
      'Three weeks of diverse experiences',
    ],
    budget: 'From 10,000 MAD per person (flights, accommodation, food, transport)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Morocco cheaper than Turkey for tourists?',
    answer:
      'Yes, Morocco is generally 15-25% cheaper than Turkey for daily expenses. Budget accommodation in Morocco starts from 200 MAD per night versus from 350 MAD in Turkey. Street food in Morocco costs from 15-30 MAD versus from 40-60 MAD in Turkey. The biggest savings are on food, taxis, and entry fees. However, Turkey can offer better value on all-inclusive beach resorts where everything is bundled into one price.',
  },
  {
    question: 'Is Morocco or Turkey safer for solo female travelers?',
    answer:
      'Both countries are generally safe for solo female travelers with standard precautions. Turkey, particularly Istanbul and the Aegean coast, has slightly more established infrastructure for solo women travelers. Morocco requires a bit more cultural awareness, especially in rural areas, but cities like Marrakech, Fes, and Essaouira are well-accustomed to international visitors. In both countries, dress modestly in non-tourist areas, avoid walking alone at night in unfamiliar neighborhoods, and trust your instincts.',
  },
  {
    question: 'Which has better food: Morocco or Turkey?',
    answer:
      'Both countries are world-renowned for their cuisine, and this truly comes down to personal preference. Morocco excels with slow-cooked tagines (from 40 MAD), couscous, pastilla, and street food like msemen and harira soup. Turkey counters with kebabs, meze platters, baklava, lahmacun, and one of the world\'s great breakfast cultures. Morocco offers more aromatic, spice-heavy dishes while Turkey offers wider variety and a stronger cafe culture.',
  },
  {
    question: 'Which country has better beaches?',
    answer:
      'Turkey has superior beaches overall, particularly along the Turquoise Coast (Antalya, Fethiye, Bodrum) and the Aegean. Turkey offers warm Mediterranean and Aegean waters ideal for swimming from May through October. Morocco has beautiful Atlantic beaches (Essaouira, Taghazout, Legzira) that are better for surfing than swimming due to cooler water temperatures and stronger currents. Morocco also has Mediterranean beaches near Al Hoceima and Saaidia that rival Turkey\'s for warmth.',
  },
  {
    question: 'Do I need a visa for Morocco or Turkey?',
    answer:
      'Most Western passport holders can enter Morocco visa-free for 90 days with no paperwork at all. For Turkey, requirements vary: US and UK citizens need an e-visa (from approximately 500 MAD) applied for online before travel. EU citizens from most countries can enter Turkey visa-free. Canadian citizens need a Turkish e-visa. Australia and New Zealand citizens need an e-visa for Turkey. Always check the latest requirements on official government websites before booking your trip.',
  },
  {
    question: 'Can I combine Morocco and Turkey in one trip?',
    answer:
      'Absolutely, and many travelers do exactly this. Direct flights connect Casablanca and Marrakech to Istanbul, typically from 1,500 MAD one-way with airlines like Turkish Airlines and Royal Air Maroc. A popular itinerary is 5-7 days in Morocco (Marrakech, desert, Fes) followed by 5-7 days in Turkey (Istanbul, Cappadocia), or vice versa. The flight is approximately 4 hours, and combining both gives you an extraordinary range of experiences.',
  },
  {
    question: 'When is the best time to visit Morocco vs Turkey?',
    answer:
      'Both countries share similar ideal travel windows. Spring (March-May) and autumn (September-November) are perfect for both, with comfortable temperatures and fewer crowds. Summer (June-August) is extremely hot inland in both countries but ideal for Turkish beach resorts. Winter (December-February) is mild in southern Morocco (Marrakech stays around 18-22C) and cold in most of Turkey except the Mediterranean coast. For a combined trip, April-May or September-October are the best months.',
  },
  {
    question: 'Which is better for a first-time visitor to the region?',
    answer:
      'For absolute first-time travelers to North Africa or the Middle East, Turkey is slightly more beginner-friendly due to wider English proficiency, more familiar food options alongside local cuisine, and more established tourist infrastructure. Morocco offers a more immersive and adventurous experience that rewards those who embrace the unfamiliar. If you want culture shock in the best possible way, choose Morocco. If you want a gentler introduction to the region, start with Turkey.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVsTurkeyPage() {
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
            backgroundImage: 'url(/images/hero-morocco-landscape.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco vs Turkey</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            Destination Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco vs Turkey:
            <br className="hidden md:block" /> The Honest Comparison
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Two of the world&apos;s most captivating destinations. Head-to-head comparison of cost,
            culture, food, safety, weather, beaches, and more to help you decide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Two Incredible Countries, One Difficult Decision
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco and Turkey are two of the most searched travel destinations in the world, and for
                good reason. Both offer extraordinary food, rich culture, stunning landscapes, and genuine
                hospitality. Both straddle the line between East and West. And both can be visited on
                almost any budget.
              </p>
              <p>
                But they are fundamentally different experiences. Morocco is Africa and the Sahara, ancient
                medinas and Berber culture, Atlantic surf and Atlas trekking. Turkey is the crossroads of
                Europe and Asia, Byzantine grandeur and Ottoman elegance, Mediterranean beaches and
                Cappadocian fairy chimneys.
              </p>
              <p>
                This guide compares them honestly across every category that matters to travelers. We are
                a Morocco-focused site, but we respect Turkey as a magnificent destination. Our goal is to
                help you make the right choice for your specific trip, or better yet, plan a combined
                itinerary that captures the best of both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Verdict ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The short answer before we dive into the details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Best for Budget
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--color-accent)]">Morocco wins.</span> 15-25% cheaper across the board. Street food from 15 MAD, riads from 200 MAD per night. Turkey is affordable but Morocco stretches every dirham further.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Best for Culture
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--color-accent)]">Tie.</span> Morocco offers deeper immersion in living traditions. Turkey has more layered historical depth spanning Greek, Roman, Byzantine, and Ottoman civilizations. Both are extraordinary.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Best for Beaches
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--color-accent)]">Turkey wins.</span> Warmer water, sandier beaches, better resort infrastructure along the Turquoise Coast. Morocco is better for surfing and rugged Atlantic beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Head-to-Head Comparison Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Head-to-Head Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Every major travel category compared side by side with an honest verdict.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirhams (MAD). Actual costs vary by season, location, and choices.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {comparisonCategories.map((item) => {
              const CategoryIcon = item.icon;
              return (
                <div key={item.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.category}
                    </h3>
                    <div className="ml-auto">
                      {item.winner === 'morocco' && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          Morocco edge
                        </span>
                      )}
                      {item.winner === 'turkey' && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                          Turkey edge
                        </span>
                      )}
                      {item.winner === 'tie' && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          Tie
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-[var(--color-accent)]">Morocco</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.morocco}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CircleDot className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">Turkey</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.turkey}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Verdict:</span> {item.verdict}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Detailed Cost Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Detailed Cost Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Item-by-item price comparison so you can budget accurately for either destination.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices shown are starting prices in MAD. Turkish prices converted at approximate rates as of early 2026.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Morocco</div>
                <div className="p-3 px-4">Turkey</div>
              </div>
              {costComparison.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.morocco}</div>
                  <div className="p-3 px-4 text-blue-600 font-semibold">{item.turkey}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Choose Morocco If... ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Choose Morocco If...
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is the better choice when these priorities matter most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {chooseMoroccoReasons.map((item) => {
              const ReasonIcon = item.icon;
              return (
                <div key={item.reason} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ReasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-1.5">
                      {item.reason}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Choose Turkey If... ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-blue-600 mr-2" />
            Choose Turkey If...
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Turkey is the better choice when these priorities matter most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {chooseTurkeyReasons.map((item) => {
              const ReasonIcon = item.icon;
              return (
                <div key={item.reason} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <ReasonIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-1.5">
                      {item.reason}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Weather Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Weather &amp; Best Time to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Season-by-season breakdown to help you time your trip perfectly.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {weatherComparison.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  <Sun className="w-4 h-4 inline mr-2 text-[var(--color-gold)]" />
                  {season.season}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Morocco</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{season.morocco}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <CircleDot className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-600">Turkey</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{season.turkey}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {season.best}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Combining Both Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Not Both? Combined Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Direct flights connect Morocco and Turkey in about 4 hours. Here are three ways to combine them.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            One-way flights from Casablanca or Marrakech to Istanbul start from 1,500 MAD with Turkish Airlines and Royal Air Maroc.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {combinedItineraries.map((itinerary) => {
              const ItineraryIcon = itinerary.icon;
              return (
                <div key={itinerary.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItineraryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {itinerary.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" />
                        {itinerary.duration}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg mb-4">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--text-primary)]">Route:</span> {itinerary.route}
                    </p>
                  </div>
                  <div className="space-y-2 mb-4">
                    {itinerary.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                  <div className="inline-block px-3 py-1 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {itinerary.budget}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Cuisine Showdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both countries are gastronomic powerhouses. Here is what each does best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                <Star className="w-5 h-5 inline mr-2" />
                Morocco Excels At
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Tagines (from 40 MAD)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Slow-cooked in conical clay pots, tagines are Morocco&apos;s signature dish. Lamb with prunes and almonds,
                    chicken with preserved lemons and olives, kefta with eggs. Every region has its own variation.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Couscous (from 30 MAD)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    The Friday tradition. Hand-rolled semolina steamed over vegetables and meat. Families gather weekly
                    for this ritual dish that Turkey has no equivalent to.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Street Food (from 15 MAD)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Msemen flatbreads, harira soup, grilled sardines in Essaouira, snail soup (babouche) in Marrakech,
                    and fresh-squeezed orange juice for from 5 MAD in Jemaa el-Fnaa.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Mint Tea (from 10 MAD)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    More than a drink, it is a social ritual. Gunpowder green tea with fresh mint and sugar, poured
                    from a height to create a foam. Offered everywhere as a sign of hospitality.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Pastilla (from 50 MAD)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    A layered pastry of pigeon or chicken, almonds, cinnamon, and powdered sugar wrapped in warqa
                    dough. Sweet and savory combined in a way that is uniquely Moroccan.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-blue-600 mb-4">
                <CircleDot className="w-5 h-5 inline mr-2" />
                Turkey Excels At
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Kebabs (from 60 MAD equivalent)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Far beyond the doner. Adana kebab, iskender kebab, shish kebab, and dozens of regional varieties.
                    Turkey&apos;s kebab culture is arguably the most sophisticated grilled meat tradition in the world.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Meze Culture (from 50 MAD equivalent)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Small shared dishes that can constitute an entire meal. Hummus, baba ganoush, dolma, borek,
                    sigara boregi. A meze spread with raki is one of the world&apos;s great dining experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Breakfast Spreads (from 80 MAD equivalent)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Turkish breakfast is legendary. A table covered with cheeses, olives, tomatoes, cucumbers,
                    honey, clotted cream (kaymak), eggs, simit bread, and tea. Morocco&apos;s breakfast is simpler.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Baklava &amp; Desserts (from 30 MAD equivalent)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Turkey&apos;s dessert game is world-class. Baklava, kunefe, Turkish delight, and ice cream (dondurma).
                    Morocco has excellent pastries, but Turkey&apos;s dessert variety is broader.
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">Turkish Coffee &amp; Tea (from 25 MAD equivalent)</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Turkish coffee is a UNESCO-recognized cultural heritage. The cafe culture in Istanbul rivals
                    European capitals. Tea (cay) is served in tulip glasses throughout the day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest look at safety considerations in both countries for different types of travelers.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Users className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Solo Female Travelers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <span className="text-sm font-semibold text-[var(--color-accent)] block mb-2">Morocco</span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Generally safe in tourist areas. Verbal harassment (catcalling) can occur in medinas, particularly
                    in less-touristy neighborhoods. Dress modestly, especially outside major cities. Use official taxis
                    and registered guides. Marrakech, Essaouira, and Chefchaouen are popular with solo female travelers.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <span className="text-sm font-semibold text-blue-600 block mb-2">Turkey</span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Generally safe, especially in Istanbul and resort areas. Turkish men can be forward but usually
                    respectful. Public transport is well-organized with women-only sections on some trains. Istanbul,
                    Cappadocia, and the Aegean coast are excellent for solo female travelers.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Users className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Families with Children
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <span className="text-sm font-semibold text-[var(--color-accent)] block mb-2">Morocco</span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Moroccans adore children and families will receive warm welcomes everywhere. Medinas can be
                    challenging with strollers due to uneven ground and narrow passages. Riads often have pools.
                    The desert and beach destinations are family-friendly.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <span className="text-sm font-semibold text-blue-600 block mb-2">Turkey</span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Turkey is very family-friendly with children welcomed everywhere. All-inclusive resorts in Antalya
                    cater specifically to families with kids clubs and activities. Better infrastructure for strollers
                    and accessibility. Water parks and beach activities keep children entertained.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <ShieldCheck className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                Common Scams to Watch For
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <span className="text-sm font-semibold text-[var(--color-accent)] block mb-2">Morocco</span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Unofficial guides leading you to shops for commission. Inflated prices in souks (always bargain).
                    &quot;Closed mosque&quot; redirect scams. Taxi drivers not using meters. Henna artists grabbing hands
                    in Jemaa el-Fnaa. None are dangerous, just annoying.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <span className="text-sm font-semibold text-blue-600 block mb-2">Turkey</span>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Friendly strangers inviting you to bars (drink scams in Istanbul). Shoe-shine drop trick.
                    Overcharging at restaurants near tourist sites. Fake taxi meters. Carpet shop pressure sales.
                    Standard tourist area scams similar to any major destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both countries are shopping paradises, but the experiences and products are very different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Best Buys in Morocco
              </h3>
              <div className="space-y-3">
                {[
                  { item: 'Leather goods (bags, jackets, babouche slippers)', price: 'From 100 MAD' },
                  { item: 'Berber rugs and carpets', price: 'From 500 MAD' },
                  { item: 'Hand-painted ceramics', price: 'From 50 MAD' },
                  { item: 'Argan oil (cosmetic grade)', price: 'From 80 MAD' },
                  { item: 'Spices (saffron, ras el hanout)', price: 'From 30 MAD' },
                  { item: 'Brass and copper lanterns', price: 'From 150 MAD' },
                  { item: 'Thuya wood boxes', price: 'From 60 MAD' },
                  { item: 'Zellige tile decorations', price: 'From 100 MAD' },
                ].map((product) => (
                  <div key={product.item} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      <span className="text-[var(--text-secondary)]">{product.item}</span>
                    </div>
                    <span className="text-[var(--color-accent)] font-semibold text-xs shrink-0 ml-2">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-blue-600 mb-4">
                Best Buys in Turkey
              </h3>
              <div className="space-y-3">
                {[
                  { item: 'Turkish carpets and kilims', price: 'From 800 MAD equiv.' },
                  { item: 'Ceramics and Iznik tiles', price: 'From 100 MAD equiv.' },
                  { item: 'Turkish lamps and lanterns', price: 'From 200 MAD equiv.' },
                  { item: 'Leather goods (Grand Bazaar)', price: 'From 200 MAD equiv.' },
                  { item: 'Turkish delight and baklava', price: 'From 50 MAD equiv.' },
                  { item: 'Spices (Istanbul Spice Bazaar)', price: 'From 40 MAD equiv.' },
                  { item: 'Evil eye (nazar) jewelry', price: 'From 30 MAD equiv.' },
                  { item: 'Hammam towels (peshtemal)', price: 'From 80 MAD equiv.' },
                ].map((product) => (
                  <div key={product.item} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                      <span className="text-[var(--text-secondary)]">{product.item}</span>
                    </div>
                    <span className="text-blue-600 font-semibold text-xs shrink-0 ml-2">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Travel Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Language
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco: Arabic and Berber are official. French is widely spoken as a second language. English
                is growing in tourist areas but less common than in Turkey. Turkey: Turkish only. English is
                more widely spoken in Istanbul, resort areas, and among younger people.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Currency &amp; Payment
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco uses the Moroccan Dirham (MAD). Cash is king in souks and small businesses. ATMs are
                widely available. Turkey uses the Turkish Lira (TRY). Card payment is more widely accepted in
                Turkey. Both countries have good ATM networks.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Flight Times from Europe
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco: 3-4 hours from major European cities. Served by budget airlines (Ryanair, easyJet)
                with flights from 300 MAD one-way. Turkey: 3-5 hours from Europe. Istanbul is a major hub
                with excellent connections. Budget and full-service carriers available.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Plane className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Internal Transport
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco: ONCF trains connect major cities (Marrakech-Casablanca from 80 MAD). CTM buses cover
                all destinations. Domestic flights from 400 MAD. Turkey: excellent domestic flights from 350 MAD
                with Turkish Airlines and Pegasus. Modern metro in Istanbul. Dolmus minibuses everywhere.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Code
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Both are Muslim-majority countries where modest dress is appreciated outside tourist zones.
                Morocco: cover shoulders and knees in medinas and rural areas. Turkey: similar guidance, though
                Istanbul and resort towns are more relaxed. Both require covering up to enter mosques.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Culture
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco: tipping is expected and important. Tip from 10-20 MAD for small services, 10-15%
                at restaurants, and from 50 MAD per day for guides. Turkey: similar tipping culture. 10-15%
                at restaurants, round up taxi fares, tip hotel staff and tour guides.
              </p>
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
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final Verdict ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Final Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our honest summary after comparing every category.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Both Morocco and Turkey are extraordinary destinations that deserve a place on every
                traveler&apos;s list. They share more in common than you might expect: warm hospitality,
                incredible food, rich history, and landscapes that take your breath away.
              </p>
              <p>
                <span className="font-semibold text-[var(--color-accent)]">Choose Morocco</span> if you
                want a deeper cultural immersion, a tighter budget, the Sahara Desert, world-class surfing,
                unique riad accommodation, or the sensory overload of an ancient medina. Morocco is raw,
                authentic, and unforgettable.
              </p>
              <p>
                <span className="font-semibold text-blue-600">Choose Turkey</span> if you prioritize
                beaches and warm water, want Cappadocia and Istanbul, prefer more nightlife options,
                value established tourist infrastructure, or are making your first trip to the region.
                Turkey is refined, diverse, and endlessly rewarding.
              </p>
              <p>
                <span className="font-semibold text-[var(--color-gold)]">Choose both</span> if you have
                two weeks or more. A combined Morocco-Turkey trip is one of the best itineraries in the
                world. Direct flights from 1,500 MAD connect the two in about four hours, and together
                they offer an unmatched range of experiences that neither country can provide alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/budget" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete breakdown of costs for every budget level, from backpacker to luxury.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/itinerary" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Itineraries
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                7-day, 10-day, and 14-day itineraries covering the best of Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know before your first trip to Morocco.
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
