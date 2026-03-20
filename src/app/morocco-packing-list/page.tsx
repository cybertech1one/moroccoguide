import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Users,
  Shield,
  Star,
  MapPin,
  Compass,
  Sun,
  Calendar,
  Sparkles,
  Shirt,
  Umbrella,
  Thermometer,
  Droplets,
  Plug,
  Luggage,
  Backpack,
  Camera,
  Globe,
  Heart,
  Clock,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Packing List 2026 | What to Pack for a Trip to Morocco',
  description:
    'Complete Morocco packing list with seasonal clothing guides, cultural dress tips, electronics, toiletries, and activity-specific gear. Everything you need to pack for Morocco in 2026.',
  keywords: [
    'what to pack for Morocco',
    'Morocco packing list',
    'packing list Morocco trip',
    'Morocco travel packing',
    'what to wear in Morocco',
    'Morocco clothing guide',
    'Morocco travel essentials',
    'Morocco packing checklist',
    'summer packing Morocco',
    'winter packing Morocco',
    'Morocco desert packing',
    'Morocco trekking gear',
    'Morocco adaptor plug type',
    'Morocco luggage tips',
    'what not to bring to Morocco',
    'Morocco cultural dress code',
    'Morocco toiletries list',
    'Morocco electronics packing',
    'Morocco seasonal packing',
    'Morocco trip preparation 2026',
  ],
  openGraph: {
    title: 'Morocco Packing List 2026 | What to Pack for a Trip to Morocco',
    description:
      'Complete Morocco packing list with seasonal clothing, cultural dress tips, electronics, toiletries, and activity-specific gear for every type of traveler.',
    url: `${BASE_URL}/morocco-packing-list`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Traveler exploring a colorful Moroccan medina with a well-packed backpack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Packing List 2026 | Complete Travel Packing Guide',
    description:
      'What to pack for Morocco: seasonal clothing, cultural tips, footwear, toiletries, electronics, and activity-specific gear. Your ultimate packing checklist.',
    images: [`${BASE_URL}/images/hero-morocco-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-packing-list` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-packing-list`,
  name: 'Morocco Packing List 2026 | What to Pack for a Trip to Morocco',
  description:
    'Complete Morocco packing list with seasonal clothing guides, cultural dress tips, electronics, toiletries, and activity-specific gear.',
  url: `${BASE_URL}/morocco-packing-list`,
  image: `${BASE_URL}/images/hero-morocco-medina.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-packing-list`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Packing List', item: `${BASE_URL}/morocco-packing-list` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I pack for Morocco in summer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For summer in Morocco (June-August), pack lightweight, breathable clothing in natural fabrics like cotton and linen. Include loose-fitting long pants, long skirts, and light long-sleeve shirts for sun protection and cultural modesty. Bring a wide-brimmed hat, high SPF sunscreen, sunglasses, and comfortable walking sandals. Temperatures can exceed 40 degrees Celsius in inland cities, so moisture-wicking layers are essential.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to dress modestly in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is a Muslim-majority country, and modest dress is appreciated, especially outside major tourist resorts. Both men and women should cover shoulders and knees. Women may want to carry a lightweight scarf for visiting mosques (exterior areas) and rural communities. In cities like Marrakech and Casablanca, locals are accustomed to tourists, but modest clothing shows cultural respect and attracts less unwanted attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of power adapter do I need for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco uses Type C and Type E power outlets with 220V/50Hz electricity. If you are traveling from the US, UK, or Australia, you will need a travel adapter. A universal adapter is recommended. Most modern phone and laptop chargers are dual-voltage (100-240V), but check your devices before plugging in. Hair dryers and straighteners may need a voltage converter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I bring a hard suitcase or soft bag to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A soft-sided bag or backpack is strongly recommended over a hard-shell suitcase. Many riads and traditional accommodations are located in medinas with narrow alleys, uneven cobblestones, and stairs without elevators. Wheeled suitcases are very difficult to navigate through these streets. A duffel bag or travel backpack is much easier to carry through tight passages and up narrow riad staircases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What shoes should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring at least two pairs of shoes: comfortable closed-toe walking shoes with good grip for medina cobblestones and uneven terrain, plus a pair of easy slip-on sandals for riads, beaches, and hammams. If you plan to hike the Atlas Mountains, bring proper hiking boots with ankle support. Avoid brand-new shoes; break them in before your trip. Leather babouche slippers can be purchased locally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy toiletries in Morocco or should I bring them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic toiletries like shampoo, soap, toothpaste, and deodorant are widely available in Moroccan pharmacies and supermarkets (Marjane, Carrefour, BIM). However, specific brands, high-SPF sunscreen, insect repellent with DEET, contact lens solution, and prescription medications can be harder to find or more expensive. Bring a full supply of any specialty items and medications you rely on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do I need to pack for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You need a valid passport with at least 6 months remaining validity. Many nationalities get visa-free entry for 90 days, including US, EU, UK, Canada, and Australia citizens. Pack photocopies of your passport, travel insurance documents, hotel confirmations, and any tour booking receipts. Store digital copies in your email or cloud storage as backup. An international driving permit is needed if you plan to rent a car.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I NOT bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not bring large quantities of alcohol (the duty-free limit is 1 bottle of spirits and 1 of wine), drones without a permit (they are generally prohibited), excessive jewelry or flashy valuables, or any pork products. Leave items you can buy cheaply in Morocco, such as babouche slippers, scarves, beach towels, and basic cotton clothing. Morocco also prohibits the import of certain medications without a prescription.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL CLOTHING
   ═══════════════════════════════════════════════════════════════ */

const seasonalClothing = [
  {
    season: 'Summer (June - August)',
    icon: Sun,
    temp: '28-45 C / 82-113 F',
    items: [
      'Lightweight cotton or linen long pants (3-4 pairs)',
      'Loose long-sleeve linen shirts (3-4)',
      'Breathable t-shirts for layering (3-4)',
      'Light maxi skirt or flowy dress (for women)',
      'Wide-brimmed sun hat or cap',
      'Light cotton scarf or shawl (multi-purpose)',
      'Swimwear (for hotel pools, beach towns)',
      'Light cardigan for air-conditioned spaces',
    ],
  },
  {
    season: 'Winter (December - February)',
    icon: Umbrella,
    temp: '8-18 C / 46-64 F',
    items: [
      'Warm jacket or fleece (temperatures drop at night)',
      'Long pants in heavier fabrics (3-4 pairs)',
      'Long-sleeve shirts and sweaters (4-5)',
      'Thermal base layer for Atlas Mountains',
      'Waterproof rain jacket or windbreaker',
      'Warm scarf, gloves, and beanie (for mountain areas)',
      'Warm pajamas (many riads have no central heating)',
      'Layering pieces you can add and remove',
    ],
  },
  {
    season: 'Spring & Autumn (Mar-May / Sep-Nov)',
    icon: Droplets,
    temp: '16-28 C / 61-82 F',
    items: [
      'Mix of light and medium-weight layers',
      'Long pants and a pair of shorts (for coast)',
      'Short and long-sleeve shirts (4-5 total)',
      'Light jacket or hoodie for evenings',
      'Packable rain jacket (especially spring)',
      'Versatile scarf that doubles as wrap',
      'Comfortable walking outfit for long days',
      'One smart outfit for upscale restaurants',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL DOCUMENTS & MONEY
   ═══════════════════════════════════════════════════════════════ */

const documentItems = [
  { item: 'Passport (6+ months validity)', priority: 'Essential', note: 'Required for entry; keep a photocopy separate from the original' },
  { item: 'Passport photocopies (2-3)', priority: 'Essential', note: 'Carry one with you daily; leave originals in your riad safe' },
  { item: 'Travel insurance documents', priority: 'Essential', note: 'Print your policy number and emergency contact info' },
  { item: 'Flight confirmations (printed)', priority: 'Recommended', note: 'Digital copies work, but print backups for immigration' },
  { item: 'Hotel / riad booking confirmations', priority: 'Recommended', note: 'Address in French or Arabic helps taxi drivers find your riad' },
  { item: 'Debit card (Visa/Mastercard)', priority: 'Essential', note: 'ATMs are widespread; notify your bank of travel dates' },
  { item: 'Credit card (backup)', priority: 'Recommended', note: 'Accepted at larger hotels and restaurants; less useful in souks' },
  { item: 'Cash in EUR or USD (small amount)', priority: 'Recommended', note: 'For emergency exchange; Moroccan dirhams cannot be bought abroad' },
  { item: 'International driving permit', priority: 'If driving', note: 'Required alongside your national license for car rental' },
  { item: 'Digital copies in cloud storage', priority: 'Essential', note: 'Email yourself scans of all documents as ultimate backup' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOILETRIES & HEALTH
   ═══════════════════════════════════════════════════════════════ */

const toiletryItems = [
  { item: 'High SPF sunscreen (50+)', note: 'Morocco sun is intense year-round; hard to find high-SPF locally' },
  { item: 'Insect repellent (DEET-based)', note: 'Essential for evenings, desert camps, and rural areas' },
  { item: 'Hand sanitizer (travel-size)', note: 'Not all restrooms have soap; useful in souks and markets' },
  { item: 'Prescription medications (full supply)', note: 'Bring more than needed; carry a copy of your prescription' },
  { item: 'Basic first-aid kit', note: 'Band-aids, antiseptic wipes, blister plasters, pain relievers' },
  { item: 'Anti-diarrhea medication', note: 'Stomach upset is common; Imodium and rehydration salts are key' },
  { item: 'Motion sickness pills', note: 'Mountain passes and winding roads make these essential' },
  { item: 'Lip balm with SPF', note: 'Desert air and mountain winds are extremely drying' },
  { item: 'Wet wipes / facial cleansing wipes', note: 'Invaluable for freshening up during long travel days' },
  { item: 'Contact lens solution (if applicable)', note: 'Specific brands may not be available locally' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ELECTRONICS
   ═══════════════════════════════════════════════════════════════ */

const electronicsItems = [
  { item: 'Universal power adapter (Type C/E)', note: 'Morocco uses 220V, 50Hz with round two-pin plugs' },
  { item: 'Portable power bank (10,000+ mAh)', note: 'Essential for long day trips and desert excursions' },
  { item: 'Phone with offline maps downloaded', note: 'Download Google Maps or Maps.me offline data for Morocco' },
  { item: 'Camera and memory cards', note: 'Morocco is incredibly photogenic; bring spare SD cards' },
  { item: 'Headlamp or small flashlight', note: 'Medina streets can be dark at night; useful for desert camps' },
  { item: 'Waterproof phone case / dry bag', note: 'Protects against sand, rain, and hammam steam' },
  { item: 'E-reader or tablet', note: 'For long train rides and riad afternoon relaxation' },
  { item: 'Earbuds or noise-cancelling headphones', note: 'Medinas can be noisy; useful for flights and buses' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITY-SPECIFIC PACKING
   ═══════════════════════════════════════════════════════════════ */

const activityPacking = [
  {
    activity: 'Sahara Desert Camping',
    icon: Compass,
    items: [
      'Warm layers for cold desert nights (drops to 5 C)',
      'Headscarf or buff to protect from sand',
      'Closed-toe shoes for walking on dunes',
      'Flashlight or headlamp (no electricity in camps)',
      'Moisturizer and lip balm for extreme dryness',
      'Small daypack for overnight necessities',
    ],
  },
  {
    activity: 'Atlas Mountain Trekking',
    icon: Globe,
    items: [
      'Proper hiking boots (broken in)',
      'Moisture-wicking base layers',
      'Warm fleece or down jacket',
      'Trekking poles (or rent locally)',
      'Refillable water bottle (1-2 liters)',
      'Rain jacket and waterproof layer',
    ],
  },
  {
    activity: 'Beach & Coastal Towns',
    icon: Sun,
    items: [
      'Swimwear (two sets to rotate)',
      'Quick-dry travel towel',
      'Reef-safe sunscreen',
      'Light cover-up for walking to and from the beach',
      'Water shoes for rocky beaches',
      'Waterproof bag for valuables',
    ],
  },
  {
    activity: 'Cooking Classes & Food Tours',
    icon: Heart,
    items: [
      'Comfortable clothing you do not mind staining',
      'Closed-toe shoes (not sandals, for kitchen safety)',
      'Small notebook and pen for recipes',
      'Reusable shopping bag for market visits',
      'Camera for capturing the experience',
      'Appetite and an adventurous palate',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT NOT TO BRING
   ═══════════════════════════════════════════════════════════════ */

const doNotBring = [
  {
    item: 'Excessive jewelry or flashy valuables',
    reason: 'Attracts unwanted attention in crowded medinas and souks. Leave expensive watches and jewelry at home.',
  },
  {
    item: 'Heavy hard-shell suitcase',
    reason: 'Impossible to wheel through narrow medina alleys and up riad staircases. Opt for a soft bag instead.',
  },
  {
    item: 'Drones (without prior permit)',
    reason: 'Flying drones is generally prohibited in Morocco. Drones can be confiscated at customs without proper authorization.',
  },
  {
    item: 'Large amounts of alcohol',
    reason: 'Duty-free limit is 1 bottle of spirits and 1 bottle of wine. Alcohol is available at licensed shops in cities.',
  },
  {
    item: 'Revealing beachwear for cities',
    reason: 'Bikinis and short shorts are fine at resort pools and beaches, but inappropriate in medinas and towns.',
  },
  {
    item: 'Items easily bought in Morocco',
    reason: 'Babouche slippers, scarves, cotton kaftans, and beach towels are cheaper and more authentic when purchased locally.',
  },
  {
    item: 'Too many clothes',
    reason: 'Morocco has excellent laundry services at riads (usually same-day). Pack light and wash as you go.',
  },
  {
    item: 'Pork products or non-halal foods',
    reason: 'Pork is prohibited in Islam. Do not attempt to bring pork-based snacks into Morocco.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL CLOTHING TIPS
   ═══════════════════════════════════════════════════════════════ */

const culturalTips = [
  {
    context: 'Medinas & Souks',
    advice: 'Cover shoulders and knees. Loose-fitting clothing is cooler and more respectful. A scarf draped over shoulders works well for women.',
    icon: MapPin,
  },
  {
    context: 'Mosques (Exterior)',
    advice: 'Non-Muslims cannot enter most mosques (except Hassan II in Casablanca). When visiting exteriors, dress modestly: long pants, covered shoulders, and women may want a headscarf.',
    icon: Star,
  },
  {
    context: 'Rural & Mountain Villages',
    advice: 'Communities are more conservative than cities. Both men and women should wear long pants or skirts and sleeved shirts. Shorts and tank tops can cause discomfort to locals.',
    icon: Globe,
  },
  {
    context: 'Beach Towns (Essaouira, Agadir)',
    advice: 'Beach resorts are more relaxed. Swimwear is appropriate at the beach and hotel pools only. Cover up when walking through town or visiting restaurants away from the waterfront.',
    icon: Sun,
  },
  {
    context: 'Upscale Restaurants & Hotels',
    advice: 'Smart casual is expected at high-end venues. Pack one polished outfit: collared shirt and clean trousers for men, a nice dress or blouse with pants for women.',
    icon: Sparkles,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOTWEAR GUIDE
   ═══════════════════════════════════════════════════════════════ */

const footwearGuide = [
  {
    type: 'Comfortable Walking Shoes',
    when: 'Daily medina exploration',
    detail: 'Closed-toe shoes with good grip and ankle support are essential. Medina streets are cobblestone, uneven, and often slippery. Avoid brand-new shoes; break them in before your trip. Trail runners or lightweight hiking shoes work best.',
  },
  {
    type: 'Easy Slip-On Sandals',
    when: 'Riads, beaches, hammams',
    detail: 'You remove shoes when entering riads and homes. Comfortable flip-flops or slides make transitions easy. Also needed for the beach, hammam visits, and casual evenings. Bring a pair with some arch support if possible.',
  },
  {
    type: 'Hiking Boots',
    when: 'Atlas Mountains, gorges',
    detail: 'If trekking in the Atlas Mountains or exploring Todra or Dades Gorge, proper hiking boots with ankle support are non-negotiable. Waterproof boots are recommended during spring when snowmelt makes trails muddy.',
  },
  {
    type: 'Babouche Slippers (Buy Locally)',
    when: 'Indoor use, souvenirs',
    detail: 'Traditional Moroccan leather slippers (babouches) are one of the best souvenirs. Buy a pair in the Fes or Marrakech tannery district for as little as 80-150 MAD. Perfect for wearing inside riads and at home after your trip.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUGGAGE TIPS
   ═══════════════════════════════════════════════════════════════ */

const luggageTips = [
  {
    tip: 'Choose a Soft-Sided Bag Over a Hard Suitcase',
    detail: 'Medina accommodations often involve narrow doorways, steep stairs, and tight alleys. A duffel bag, travel backpack, or soft-sided rolling bag adapts much better than a rigid hard-shell suitcase. Your luggage may also need to ride on top of a minibus or in a car trunk.',
    icon: Luggage,
  },
  {
    tip: 'Bring a Packable Daypack',
    detail: 'A lightweight, foldable daypack (20-25 liters) is invaluable for daily exploration. Store your water bottle, camera, sunscreen, snacks, and a light layer. Look for one with anti-theft features like lockable zippers and slash-proof fabric for medina visits.',
    icon: Backpack,
  },
  {
    tip: 'Use Packing Cubes',
    detail: 'Packing cubes keep your bag organized and make it easy to find items without unpacking everything. Separate cubes for tops, bottoms, underwear, and electronics. Compression cubes also save space if you are bringing bulky winter layers.',
    icon: CheckCircle,
  },
  {
    tip: 'Keep Valuables in a Money Belt or Hidden Pouch',
    detail: 'A flat money belt worn under your clothing is the safest way to carry your passport, extra cash, and backup credit card. RFID-blocking pouches add extra security. Never keep all your money in one place.',
    icon: Shield,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS (displayed in component)
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What should I pack for Morocco in summer?',
    answer: 'Pack lightweight, breathable clothing in natural fabrics like cotton and linen. Include loose-fitting long pants, long skirts, and light long-sleeve shirts for both sun protection and cultural modesty. A wide-brimmed hat, high SPF sunscreen, and comfortable walking shoes are essential. Temperatures can exceed 40 degrees Celsius in cities like Marrakech and Fes, so moisture-wicking fabrics help enormously.',
  },
  {
    question: 'Do I need to dress modestly in Morocco?',
    answer: 'Yes, Morocco is a Muslim-majority country where modest dress is appreciated. Both men and women should cover shoulders and knees in public areas, especially in medinas, rural areas, and near mosques. Beach resorts are more relaxed, but cover up when leaving the beach. Women may want to carry a lightweight scarf for extra coverage when visiting traditional neighborhoods.',
  },
  {
    question: 'What type of power adapter do I need for Morocco?',
    answer: 'Morocco uses Type C and Type E power outlets with 220V/50Hz electricity. These are the standard round two-pin European-style plugs. If you are coming from the US, UK, or Australia, you need a travel adapter. Most phone and laptop chargers handle 100-240V automatically, but check hair dryers and curling irons as they may need a voltage converter.',
  },
  {
    question: 'Should I bring a hard suitcase or soft bag to Morocco?',
    answer: 'A soft-sided bag or travel backpack is strongly recommended. Many riads are in old medinas accessible only through narrow, winding alleys with cobblestones and steps. Wheeled hard suitcases are extremely difficult to maneuver in these conditions. A duffel bag or backpack you can carry easily is far more practical.',
  },
  {
    question: 'What shoes should I bring to Morocco?',
    answer: 'Bring comfortable closed-toe walking shoes with good grip for medina cobblestones, plus slip-on sandals for riads, beaches, and hammams. If you plan to hike the Atlas Mountains, pack proper hiking boots with ankle support. Break in all shoes before your trip. You can also buy traditional babouche slippers in Morocco for a great price.',
  },
  {
    question: 'Can I buy toiletries in Morocco or should I bring them?',
    answer: 'Basic toiletries like shampoo, soap, toothpaste, and deodorant are widely available in Moroccan pharmacies and supermarkets. However, high-SPF sunscreen, DEET insect repellent, specific medication brands, and contact lens solution may be harder to find. Bring a full supply of anything you specifically rely on, and carry prescription medications with a copy of your prescription.',
  },
  {
    question: 'What documents do I need to pack for Morocco?',
    answer: 'You need a valid passport with at least 6 months remaining validity. Many nationalities (US, EU, UK, Canada, Australia) receive visa-free entry for 90 days. Pack photocopies of your passport, travel insurance documents, hotel confirmations, and tour bookings. Keep digital copies in cloud storage as backup. If renting a car, bring an international driving permit.',
  },
  {
    question: 'What should I NOT bring to Morocco?',
    answer: 'Avoid bringing a heavy hard-shell suitcase, drones without a permit, excessive jewelry, large amounts of alcohol (limit is 1 bottle each of spirits and wine), and pork products. Skip items easily bought locally like scarves, slippers, and cotton clothing. Do not overpack; Morocco has affordable laundry services at most riads and hotels.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL CHECKLISTS
   ═══════════════════════════════════════════════════════════════ */

const seasonalChecklists = [
  {
    season: 'Summer Checklist (Jun-Aug)',
    icon: Sun,
    color: 'text-[var(--color-accent)]',
    items: [
      'Lightweight cotton/linen clothing',
      'Wide-brimmed sun hat',
      'High SPF sunscreen (50+)',
      'Reusable water bottle',
      'Sunglasses (UV protection)',
      'Light scarf for modesty',
      'Comfortable sandals',
      'Swimwear (if visiting coast)',
    ],
  },
  {
    season: 'Winter Checklist (Dec-Feb)',
    icon: Thermometer,
    color: 'text-[var(--color-gold)]',
    items: [
      'Warm jacket or fleece',
      'Thermal base layers',
      'Rain jacket / waterproof layer',
      'Warm hat, gloves, and scarf',
      'Closed-toe waterproof shoes',
      'Warm pajamas for riads',
      'Hot water bottle (optional)',
      'Umbrella (compact travel size)',
    ],
  },
  {
    season: 'Shoulder Season (Mar-May / Sep-Nov)',
    icon: Calendar,
    color: 'text-[var(--color-accent)]',
    items: [
      'Layerable clothing (light + medium)',
      'Packable rain jacket',
      'Light sweater or hoodie',
      'Mix of short and long sleeves',
      'Comfortable walking shoes',
      'Versatile scarf/wrap',
      'Light pants and one pair of shorts',
      'One smart casual outfit',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoPackingListPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[var(--text-primary)] font-medium">Morocco Packing List</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 hero-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-[#A0522D]/90 to-[#5C2E0E]/80 -z-10" />
        <div className="container-morocco text-center text-white relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6">
            <Luggage className="w-4 h-4" /> Updated for 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold mb-6 leading-tight">
            The Ultimate Morocco<br />Packing List
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8 leading-relaxed">
            Everything you need to pack for an unforgettable Moroccan adventure. From seasonal
            clothing and cultural dress tips to electronics, toiletries, and activity-specific gear,
            this comprehensive checklist ensures you are perfectly prepared.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm opacity-80">
            <span className="flex items-center gap-1.5">
              <Shirt className="w-4 h-4" /> Seasonal Clothing
            </span>
            <span className="flex items-center gap-1.5">
              <Plug className="w-4 h-4" /> Electronics Guide
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> Activity Gear
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" /> Cultural Tips
            </span>
          </div>
        </div>
      </section>

      {/* ── Intro / Quick Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-[var(--color-accent)] mt-1 shrink-0" />
              <div>
                <h2 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  Smart Packing for Morocco
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  Morocco is a country of dramatic contrasts: scorching Sahara dunes, snow-capped Atlas peaks,
                  bustling ancient medinas, and breezy Atlantic coastlines. What you pack depends heavily on
                  your itinerary, the season, and the activities you plan. The key principle is versatile
                  layering with cultural sensitivity.
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  This guide covers everything from essential documents to activity-specific gear. Use the
                  seasonal checklists at the bottom as your final packing reference. Remember: it is better
                  to pack light and buy locally than to overpack and struggle through medina alleys with
                  an oversized suitcase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essential Documents & Money ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Documents &amp; Money
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most important items in your bag. Double-check these before leaving home.
          </p>

          <div className="space-y-3">
            {documentItems.map((doc) => (
              <div key={doc.item} className="card-moroccan p-4 flex items-start gap-4">
                <div className="shrink-0 mt-0.5">
                  <CheckCircle className={`w-5 h-5 ${doc.priority === 'Essential' ? 'text-[var(--color-accent)]' : 'text-[var(--color-gold)]'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {doc.item}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${doc.priority === 'Essential' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' : doc.priority === 'Recommended' ? 'bg-[var(--color-gold)]/10 text-[var(--color-gold)]' : 'bg-gray-100 text-gray-600'}`}>
                      {doc.priority}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{doc.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clothing by Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Clothing by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s climate varies dramatically by season and region. Here is what to pack for each time of year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalClothing.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <season.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                    <span className="text-xs text-[var(--color-accent)]">{season.temp}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {season.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cultural Clothing Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dressing for Cultural Sensitivity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respecting local customs through your clothing choices enhances your experience and earns
            goodwill from Moroccan people.
          </p>

          <div className="space-y-4">
            {culturalTips.map((tip) => (
              <div key={tip.context} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {tip.context}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.advice}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Important Note for All Travelers
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  While Morocco is welcoming to tourists, dressing modestly significantly reduces
                  unwanted attention and shows respect for local culture. This applies equally to men and
                  women. Men should avoid going shirtless outside of beaches, and shorts above the knee
                  draw stares in traditional areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footwear Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Footwear Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {footwearGuide.map((shoe) => (
              <div key={shoe.type} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {shoe.type}
                </h3>
                <span className="text-xs text-[var(--color-accent)] font-medium mb-3 block">
                  Best for: {shoe.when}
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{shoe.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Toiletries & Health ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Toiletries &amp; Health Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Bring specialty items from home. Basic toiletries are available in Moroccan pharmacies and supermarkets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {toiletryItems.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-0.5">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Moroccan Pharmacies Are Excellent
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Pharmacies (pharmacie) in Morocco are well-stocked and pharmacists are knowledgeable. Many
                  medications that require prescriptions elsewhere are available over the counter. Look for
                  the green cross sign. They are open daily and many stay open late. They are a great
                  first stop if you feel unwell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Electronics & Tech ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plug className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Electronics &amp; Tech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco uses Type C/E outlets at 220V/50Hz. Bring the right adapters and keep your devices charged.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {electronicsItems.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                <Camera className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-0.5">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Plug className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                SIM Card Information
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Buy a Moroccan SIM card at the airport or any Maroc Telecom, Inwi, or Orange shop.
                Tourist SIM packages with data start from about 30 MAD for 5GB. You will need your
                passport to register. Data is fast and reliable in cities; coverage in remote mountain
                and desert areas can be spotty.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Voltage Warning
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco uses 220V/50Hz electricity. Most phone and laptop chargers are dual-voltage
                (check the label for &quot;100-240V&quot;). However, American hair dryers, curling irons,
                and some older electronics designed for 110V will be damaged without a voltage converter.
                When in doubt, buy a travel-size dual-voltage hair dryer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Luggage Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luggage Tips for Morocco
          </h2>

          <div className="space-y-4">
            {luggageTips.map((tip) => (
              <div key={tip.tip} className="card-moroccan p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.tip}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activity-Specific Packing ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activity-Specific Packing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Add these items to your base packing list depending on which activities you have planned.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activityPacking.map((activity) => (
              <div key={activity.activity} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {activity.activity}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {activity.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What NOT to Bring ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What NOT to Bring to Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Save space and avoid hassle by leaving these items at home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doNotBring.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-0.5">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)]">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Checklists ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Seasonal Checklists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Use these condensed checklists as a final reference when packing for your specific travel dates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {seasonalChecklists.map((checklist) => (
              <div key={checklist.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                    <checklist.icon className={`w-5 h-5 ${checklist.color}`} />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {checklist.season}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {checklist.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Pro Tip: Pack Two Days Early
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Lay out everything you plan to bring two days before departure. Sleep on it, then remove
                  at least three items you can live without. Morocco has excellent shops and laundry services,
                  so it is always better to pack light. You will thank yourself when navigating medina
                  alleyways with your luggage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Packing for Morocco
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/what-to-wear-in-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Shirt className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Wear in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed dress code guide for every situation, from medinas to beaches to fine dining.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-weather-monthly" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Weather by Month
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month climate guide to help you choose the best time for your Moroccan adventure.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-time-visit-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Time to Visit Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Find the perfect season for your trip based on weather, festivals, crowds, and prices.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-travel-tips" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Travel Tips
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Practical advice on transport, safety, money, language, and navigating Moroccan culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything first-time visitors need to know, from arrival to etiquette to must-see highlights.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/packing" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Backpack className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Quick Packing Checklist
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A printable packing checklist you can tick off as you pack for your Morocco trip.
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
