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
  Clock,
  Star,
  Eye,
  Lock,
  BadgeCheck,
  Globe,
  Sun,
  MessageCircle,
  Wallet,
  Camera,
  Navigation,
  Car,
  BookOpen,
  Compass,
  Hotel,
  UserCheck,
  Sparkles,
  Map,
  Coffee,
  Luggage,
  HandHeart,
  CircleAlert,
  CalendarDays,
  Shirt,
  Footprints,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Solo Female Travel Morocco 2026: Complete Safety & Planning Guide for Women',
  description:
    'The ultimate guide to solo female travel in Morocco for 2026. Safety tips, what to wear, dealing with harassment, safest cities for women, best riads, women-friendly tours, itinerary suggestions, and real traveler stories. Everything a woman needs to travel Morocco confidently alone.',
  keywords: [
    'solo female travel Morocco',
    'Morocco for women',
    'is Morocco safe for women',
    'women traveling alone Morocco',
    'Morocco solo woman',
    'female travel Morocco tips',
    'what to wear Morocco woman',
    'Morocco harassment women',
    'safest cities Morocco women',
    'Morocco women guide 2026',
    'Morocco solo female itinerary',
    'women friendly Morocco tours',
    'Morocco riad women',
    'Morocco dress code women',
    'solo female Marrakech',
    'solo female Fes',
    'solo female Chefchaouen',
    'Morocco female safety tips',
    'Morocco women travel blog',
    'Morocco alone as woman',
    'Morocco female traveler experience',
    'Morocco women accommodation',
  ],
  openGraph: {
    title: 'Solo Female Travel Morocco 2026: Complete Safety & Planning Guide for Women',
    description:
      'Everything a woman needs to travel Morocco solo with confidence. Safety tips, dress code, dealing with unwanted attention, safest cities, best riads, tours, and itinerary ideas.',
    url: `${BASE_URL}/morocco-solo-female-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-solo-female-travel.webp`,
        width: 1200,
        height: 630,
        alt: 'Solo female traveler walking through a colorful Moroccan medina street with vibrant textiles and architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solo Female Travel Morocco: 2026 Complete Guide for Women',
    description:
      'Safety tips, what to wear, safest cities, best accommodations, women-friendly tours, and real stories from women who traveled Morocco solo.',
    images: [`${BASE_URL}/images/hero-solo-female-travel.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-solo-female-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — TravelGuide
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-solo-female-travel`,
  name: 'Solo Female Travel Morocco 2026: Complete Safety & Planning Guide for Women',
  description:
    'Comprehensive guide for women traveling solo in Morocco. Covers safety, dress code, dealing with harassment, safest cities, best accommodations, tours, and itinerary suggestions.',
  url: `${BASE_URL}/morocco-solo-female-travel`,
  image: `${BASE_URL}/images/hero-solo-female-travel.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-solo-female-travel`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  audience: {
    '@type': 'PeopleAudience',
    requiredGender: 'Female',
    suggestedMinAge: 18,
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Solo Female Travel Morocco', item: `${BASE_URL}/morocco-solo-female-travel` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA — FAQPage
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo female travelers in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is generally safe for solo female travelers with basic precautions. Verbal harassment (catcalling) is the most common issue but rarely escalates. Millions of women visit Morocco each year, and solo female travel has become increasingly common. Stick to well-reviewed accommodations, dress modestly in conservative areas, use registered taxis at night, and consider hiring female guides for medina tours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a woman wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In cities and medinas, cover your shoulders and knees. Loose-fitting clothes in breathable fabrics work best. A lightweight scarf is invaluable for entering mosques, covering your head in conservative areas, and blocking sun. Beach resorts like Agadir are more relaxed, but topless sunbathing is not acceptable. In rural areas and small towns, dress more conservatively with longer sleeves and pants or maxi skirts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I deal with harassment in Morocco as a woman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most effective strategy is to ignore catcalls completely and walk with confidence. Do not engage, make eye contact, or respond. If someone follows you, walk into a shop or cafe and ask for help. Learn "La, shukran" (No, thank you) and "Sir f halak" (Go away). Wearing a fake wedding ring can reduce some attention. Report persistent harassment to Tourist Police. The vast majority of interactions in Morocco are respectful and friendly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the safest cities in Morocco for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chefchaouen is widely considered the safest city for women in Morocco, with its small, walkable medina and relaxed atmosphere. Essaouira is another excellent choice with its laid-back coastal vibe and strong artistic community. Marrakech, while more intense, has excellent tourist infrastructure and Tourist Police. Rabat, as the capital, is modern and cosmopolitan. Agadir offers a resort-style environment with strong beach security.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a riad or a hotel as a solo female traveler in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both are good options. Riads with female staff or female owners are especially popular with solo women travelers. They offer a personal, home-like atmosphere where staff can help with transport, restaurant recommendations, and local tips. Look for riads with at least 50 reviews and a 4.5+ rating. Hotels offer more anonymity and often have 24-hour reception. Hostels are great for meeting other solo travelers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel between cities alone as a woman in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ONCF trains are safe and comfortable for solo women. Book first class for more space and a quieter carriage. CTM and Supratours buses are also safe and reliable. For grand taxis, try to sit in the back seat and avoid being the only passenger. Domestic flights with Royal Air Maroc connect major cities. Avoid hitchhiking and unregistered taxis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there women-only tours in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, several companies offer women-only group tours and can arrange female guides. Intrepid Travel, G Adventures, and local Moroccan companies offer women-focused itineraries. Female guides are available in all major cities and can be booked through your riad or local tourism offices. Women-only cooking classes and hammam experiences are also widely available.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a solo female trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) offer the best weather and lighter crowds, making them ideal for solo female travelers. Avoid July and August when the heat is extreme in inland cities. Ramadan can be a fascinating cultural experience but requires extra sensitivity. Shoulder seasons also mean lower accommodation prices.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY OVERVIEW FOR WOMEN
   ═══════════════════════════════════════════════════════════════ */

const safetyOverview = [
  {
    label: 'Women Visitors (2025)',
    value: '8.2 Million+',
    detail: 'Over half of all Morocco tourists are women',
    icon: Users,
  },
  {
    label: 'Solo Female Rating',
    value: 'Safe with Precautions',
    detail: 'Comparable to Turkey, India, Egypt',
    icon: Shield,
  },
  {
    label: 'Tourist Police',
    value: 'All Major Cities',
    detail: 'English-speaking officers in Marrakech, Fes, Casablanca',
    icon: BadgeCheck,
  },
  {
    label: 'Violent Crime Risk',
    value: 'Very Low',
    detail: 'Physical assault on tourists is extremely rare',
    icon: ShieldCheck,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO WEAR — DETAILED
   ═══════════════════════════════════════════════════════════════ */

const dressCodeGuide = [
  {
    context: 'Cities and Medinas',
    icon: MapPin,
    recommendation: 'Modest and Comfortable',
    description:
      'Cover your shoulders and knees in Marrakech, Fes, Meknes, and other city medinas. Loose-fitting linen pants, maxi skirts, and tunics are ideal. Avoid tight clothing, low necklines, and short shorts. Lightweight long-sleeve tops protect from both sun and unwanted stares.',
    essentials: [
      'Loose linen pants or palazzo trousers',
      'Maxi skirts or midi skirts below the knee',
      'T-shirts or tops that cover shoulders',
      'A lightweight cardigan or kimono for layering',
      'Comfortable closed-toe walking shoes for uneven medina streets',
      'Crossbody bag that zips closed (anti-theft)',
    ],
  },
  {
    context: 'Beach Resorts (Agadir, Essaouira)',
    icon: Sun,
    recommendation: 'More Relaxed',
    description:
      'Beach towns are more liberal. One-piece swimsuits and modest bikinis are fine at resort beaches and pools. Cover up when walking from the beach to town. Essaouira is more bohemian and relaxed than most Moroccan cities, but topless sunbathing is never acceptable anywhere in Morocco.',
    essentials: [
      'One-piece swimsuit or modest bikini',
      'Beach cover-up or sarong for walking to and from beach',
      'Light sundress or shorts with a T-shirt for the town',
      'Sandals and sunhat',
      'Sunscreen SPF 50 (expensive locally, bring from home)',
      'Light scarf for windy beach evenings',
    ],
  },
  {
    context: 'Rural Areas and Small Towns',
    icon: Compass,
    recommendation: 'Conservative',
    description:
      'In Berber villages, the Atlas Mountains, and rural areas, dress more conservatively. Women here typically wear full-length djellabas. You do not need to match local dress, but showing respect through modest clothing will earn you warmth and hospitality. Long sleeves and full-length pants or skirts are appropriate.',
    essentials: [
      'Long-sleeve tops or lightweight button-down shirts',
      'Full-length pants or maxi skirts',
      'A scarf to cover your head when visiting rural mosques',
      'Sturdy closed-toe shoes for mountain paths',
      'Layers for mountain temperature changes',
      'Modest pajamas if staying in village guesthouses',
    ],
  },
  {
    context: 'Sahara Desert',
    icon: Navigation,
    recommendation: 'Practical and Protective',
    description:
      'Desert trips require clothing that protects from intense sun, sand, and cold nights. Temperatures can exceed 45 degrees Celsius during the day and drop near freezing at night. Loose, flowing fabrics in light colors are ideal. A headscarf or turban protects from sandstorms.',
    essentials: [
      'Loose long-sleeve shirt and full-length pants in light colors',
      'A desert scarf or cheche (turban) for sand and sun protection',
      'Warm fleece or jacket for cold desert nights',
      'Closed-toe shoes and sandals (sand gets everywhere)',
      'Sunglasses with UV protection',
      'Moisturizer and lip balm (desert air is extremely dry)',
    ],
  },
  {
    context: 'Upscale Restaurants and Riads',
    icon: Star,
    recommendation: 'Smart Casual',
    description:
      'High-end restaurants in Marrakech, Casablanca, and Rabat welcome smart casual attire. Moroccan women at upscale venues dress fashionably. You can wear dressier outfits in these environments, though avoid anything too revealing out of respect for the local culture.',
    essentials: [
      'A dressy maxi dress or elegant tunic with nice pants',
      'Comfortable heels or dressy flats',
      'A light evening shawl or pashmina',
      'Minimal jewelry (leave expensive pieces at home)',
      'A small clutch or evening bag',
      'Light makeup if desired (Moroccan women often wear makeup)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DEALING WITH HARASSMENT
   ═══════════════════════════════════════════════════════════════ */

const harassmentTips = [
  {
    situation: 'Verbal Catcalling',
    icon: MessageCircle,
    frequency: 'Common',
    description:
      'Men calling out comments, compliments, marriage proposals, or making kissing sounds as you walk past. This happens most frequently in busy medinas and less touristy neighborhoods. It is not usually aggressive or threatening, but it can be exhausting and uncomfortable.',
    response: [
      'Ignore completely; do not engage, smile, or respond',
      'Walk with confidence and purpose, even if you are lost',
      'Wear sunglasses to avoid eye contact',
      'Put earphones in (even without music) as a social barrier',
      'Walk with another traveler if possible in busy areas',
      'Remember that Moroccan women experience this daily too',
    ],
  },
  {
    situation: 'Following or Persistent Attention',
    icon: Footprints,
    frequency: 'Occasional',
    description:
      'Someone walks alongside you trying to start a conversation, offer directions, or invite you to a shop. This is more common near tourist hotspots. Most are touts looking for commission rather than genuinely threatening, but it can feel intimidating.',
    response: [
      'Say "La, shukran" (No, thank you) firmly and keep walking',
      'Walk into a shop, cafe, or restaurant and ask staff for help',
      'If in the medina, approach another group of tourists or a shopkeeper',
      'Do not follow anyone into isolated or unfamiliar alleys',
      'Say "Sir f halak" (Go away) if they persist; this is understood and effective',
      'Call your riad and ask them to send someone or give phone directions',
    ],
  },
  {
    situation: 'Unwanted Physical Contact',
    icon: ShieldAlert,
    frequency: 'Rare',
    description:
      'Physical harassment is uncommon but not unheard of. It most often occurs in very crowded spaces like Jemaa el-Fna at night. Groping in crowds, an arm around your shoulder from a stranger, or being grabbed by the hand for henna are the most reported forms.',
    response: [
      'React loudly and draw attention: "Do not touch me!" works in any language',
      'Moroccan bystanders will typically intervene if a woman calls for help',
      'Remove yourself from the situation immediately',
      'Report to Tourist Police (available in all major cities)',
      'If in a crowd, move to the edge and into a well-lit open area',
      'Trust your instincts; if something feels wrong, leave',
    ],
  },
  {
    situation: 'Taxi Driver Issues',
    icon: Car,
    frequency: 'Occasional',
    description:
      'Some taxi drivers may take longer routes, overcharge, or make uncomfortable conversation. Very rarely, a driver may refuse to use the meter or make unwelcome comments. This is the same issue tourists of all genders face, but solo women may feel more vulnerable.',
    response: [
      'Use ride-hailing apps (InDriver, Careem) where available for tracked rides',
      'Always agree on the fare before getting into a taxi',
      'Sit in the back seat, never the front',
      'Share your live location with a friend during rides',
      'Ask your riad to call a trusted taxi for you, especially at night',
      'Take a photo of the license plate and send it to someone',
    ],
  },
  {
    situation: 'Scam Attempts Targeting Women',
    icon: Eye,
    frequency: 'Common',
    description:
      'Some scammers specifically target solo women, assuming they are easier marks. The henna trap, fake guide, and "your riad is closed" scams are frequently reported by female travelers. Marriage proposals from men significantly younger are almost always attempts to gain visa sponsorship.',
    response: [
      'Be aware that not every friendly interaction has ulterior motives, but stay alert',
      'Never follow a stranger to a secondary location',
      'A real marriage proposal does not happen 5 minutes after meeting someone',
      'If someone grabs your hand for henna, pull away immediately',
      'Use licensed guides only (they carry official ID cards)',
      'Ask your riad for trusted recommendations for everything',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFEST CITIES FOR WOMEN
   ═══════════════════════════════════════════════════════════════ */

const safestCities = [
  {
    city: 'Chefchaouen',
    rating: 5,
    image: '/images/hero-chefchaouen.webp',
    vibe: 'Relaxed mountain village',
    description:
      'The Blue City is the top recommendation for solo female travelers, especially first-timers. The small, walkable medina feels like a village. Crime is extremely low, locals are friendly without being pushy, and the relaxed atmosphere is a world away from the intensity of Marrakech. You will see many other solo female travelers here.',
    highlights: [
      'Compact medina where you cannot get seriously lost',
      'Very low harassment levels compared to larger cities',
      'Strong community of female solo travelers and artists',
      'Affordable accommodation from 200 MAD per night',
      'Beautiful hiking in the surrounding Rif Mountains',
      'Photography paradise; the blue streets are magical at sunrise',
    ],
  },
  {
    city: 'Essaouira',
    rating: 5,
    image: '/images/hero-essaouira.webp',
    vibe: 'Bohemian coastal charm',
    description:
      'Essaouira is a favorite among solo female travelers for its laid-back, artistic atmosphere. The coastal winds keep temperatures comfortable, the medina is manageable in size, and the mix of surfers, artists, and musicians creates a welcoming, open-minded community. Harassment levels are notably lower than in Marrakech or Fes.',
    highlights: [
      'Relaxed, bohemian atmosphere with global traveler community',
      'Walkable medina with easy-to-navigate grid layout',
      'Beach culture creates a more liberal social environment',
      'Excellent hostels for meeting other solo travelers',
      'Vibrant art galleries and music scene',
      'Fresh seafood at the port from 40 MAD',
    ],
  },
  {
    city: 'Marrakech',
    rating: 4,
    image: '/images/hero-marrakech.webp',
    vibe: 'Intense but rewarding',
    description:
      'Marrakech is the most visited city and offers incredible experiences, but it is also the most intense for solo women. The medina is large and chaotic, touts are persistent, and catcalling is more common here. However, the tourist infrastructure is excellent, Tourist Police are present, and the cultural rewards are immense. Most women travel here without serious issues.',
    highlights: [
      'Dedicated Tourist Police in Jemaa el-Fna and main areas',
      'Thousands of female travelers visit daily',
      'Excellent riad options with female staff and owners',
      'Female guides available through most riads and agencies',
      'World-class hammams, cooking classes, and cultural experiences',
      'Well-connected by train and bus to other cities',
    ],
  },
  {
    city: 'Rabat',
    rating: 5,
    image: '/images/hero-rabat.webp',
    vibe: 'Modern and cosmopolitan',
    description:
      'Morocco\'s capital city is often overlooked by tourists but is one of the safest and most pleasant cities for women. As the seat of government and home to many embassies, Rabat has a cosmopolitan, modern feel. The medina is clean and well-organized, the Kasbah des Oudaias is stunning, and harassment is significantly less common than in tourist cities.',
    highlights: [
      'Modern infrastructure and cosmopolitan atmosphere',
      'Much less tourist harassment than Marrakech or Fes',
      'Clean, well-organized medina that is easy to navigate',
      'Excellent tram system for safe city transport',
      'Beautiful Kasbah des Oudaias and Hassan Tower',
      'Good base for day trips to Meknes and Volubilis',
    ],
  },
  {
    city: 'Agadir',
    rating: 5,
    image: '/images/hero-agadir.webp',
    vibe: 'Safe beach resort',
    description:
      'Agadir is the easiest Moroccan city for solo female travelers who want a beach holiday. Rebuilt as a modern resort city after the 1960 earthquake, it feels more European than Moroccan. The beachfront promenade is safe and well-lit, resort hotels provide security, and the atmosphere is relaxed. It lacks the cultural depth of Marrakech or Fes, but that trade-off brings comfort.',
    highlights: [
      'Modern grid layout with wide, well-lit streets',
      'Beachfront promenade patrolled by security until late',
      'Resort hotels with 24-hour reception and security',
      'Very low scam and harassment levels',
      'Great surfing beaches at nearby Taghazout',
      'Souss-Massa National Park for nature excursions',
    ],
  },
  {
    city: 'Fes',
    rating: 3,
    image: '/images/hero-fes.webp',
    vibe: 'Challenging but authentic',
    description:
      'Fes is the most challenging Moroccan city for solo female travelers but also one of the most culturally rewarding. The medina is the world\'s largest car-free urban area with over 9,000 streets and 1,000+ dead ends. Navigation is disorienting, touts near the tanneries are aggressive, and the atmosphere can feel overwhelming. A female guide is strongly recommended for your first day.',
    highlights: [
      'Fewer tourists than Marrakech means less scam pressure overall',
      'Incredibly authentic cultural experience',
      'Some of the best riads in Morocco with attentive staff',
      'Female guides available who know every hidden corner',
      'Magnificent architecture and craft traditions',
      'Excellent cooking classes and cultural workshops',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST ACCOMMODATION TYPES
   ═══════════════════════════════════════════════════════════════ */

const accommodationTypes = [
  {
    type: 'Female-Friendly Riads',
    icon: Heart,
    priceRange: 'From 300 MAD / night',
    bestFor: 'Atmosphere, safety, local experience',
    description:
      'Riads run by women or with predominantly female staff are the top choice for solo female travelers. They offer a personal, home-like atmosphere where the dar (lady of the house) or manager becomes your local guardian. They will arrange trusted taxis, recommend safe restaurants, and may invite you to share meals. Look for riads with 50+ reviews mentioning "solo female" or "women."',
    tips: [
      'Search reviews for "solo female" to find women-approved properties',
      'Ask if the riad has female staff when booking',
      'Ground-floor rooms are safer if the riad has shared spaces',
      'Many riads include breakfast, saving you morning meal planning',
      'Request airport or train station pickup for safe arrival',
      'Some riads organize women-only cooking classes and hammam visits',
    ],
  },
  {
    type: 'Boutique Hotels',
    icon: Hotel,
    priceRange: 'From 500 MAD / night',
    bestFor: 'Privacy, security, modern amenities',
    description:
      'Boutique hotels combine Moroccan charm with modern security features like 24-hour reception, CCTV, and electronic room locks. They are a good middle ground between the impersonal feel of chain hotels and the intimacy of riads. Many are in the Nouvelle Ville (new town) areas with easy access to both medina and modern amenities.',
    tips: [
      'Choose hotels with 24-hour reception for late arrivals',
      'Ask about in-room safes for valuables',
      'Hotels in Gueliz (Marrakech) and Ville Nouvelle (Fes) offer easier navigation',
      'Pool access provides a safe, private space to relax',
      'Concierge services can arrange trusted transport and guides',
      'International chains (Sofitel, Four Seasons) have women traveler programs',
    ],
  },
  {
    type: 'Hostels',
    icon: Users,
    priceRange: 'From 80 MAD / night',
    bestFor: 'Meeting other travelers, budget-friendly',
    description:
      'Hostels are the best option for meeting other solo travelers and potentially finding travel companions. Many Moroccan hostels have female-only dorms. Social common areas and organized group activities (rooftop dinners, medina tours, day trips) make it easy to connect with others. Morocco has excellent hostels in Marrakech, Fes, Essaouira, and Chefchaouen.',
    tips: [
      'Book hostels with female-only dorms if you prefer',
      'Check reviews for safety, cleanliness, and atmosphere',
      'Hostel-organized tours are often cheaper and come with built-in travel companions',
      'Use lockers for valuables (bring your own padlock)',
      'Rooftop terraces are common and great for socializing',
      'Many hostels have a "travel buddy" board for finding companions',
    ],
  },
  {
    type: 'Desert Camps',
    icon: Star,
    priceRange: 'From 400 MAD / night (with tour)',
    bestFor: 'Sahara experience, group settings',
    description:
      'Luxury desert camps in Merzouga and Zagora are popular for Sahara experiences. Solo women should book through reputable agencies and avoid camps with very low prices. The best camps have private tents, clean facilities, and professional staff. Group tours ensure you are never alone in the desert.',
    tips: [
      'Book through your riad or a well-reviewed agency, never from street touts',
      'Luxury camps (from 800 MAD) have private tents with en-suite bathrooms',
      'Choose group tours over private ones for added security',
      'Verify the camp has mobile phone signal for emergencies',
      'Bring warm layers; desert nights can drop near freezing',
      'Some camps offer women-only camel treks and sandboarding groups',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING AROUND SAFELY
   ═══════════════════════════════════════════════════════════════ */

const transportSafety = [
  {
    mode: 'Trains (ONCF)',
    icon: Navigation,
    safetyRating: 'Very Safe',
    ratingColor: 'text-green-700',
    description:
      'Morocco\'s train network connects major cities (Marrakech, Fes, Rabat, Casablanca, Tangier, Meknes) and is the safest intercity transport. First-class carriages are quiet, comfortable, and have assigned seats. The Al Boraq high-speed train (Tangier to Casablanca) is modern and efficient.',
    tips: [
      'Book first class for more space, quieter carriages, and assigned seats',
      'Trains run on time; check schedules on the ONCF app or website',
      'Keep bags on the luggage rack above your seat, not on the floor',
      'The Marrakech-Fes route via Casablanca is the most popular',
      'Rabat Agdal station is newer and easier to navigate than Rabat Ville',
      'Evening trains are safe but arrive at your destination before dark if possible',
    ],
  },
  {
    mode: 'Buses (CTM & Supratours)',
    icon: Car,
    safetyRating: 'Safe',
    ratingColor: 'text-green-700',
    description:
      'CTM and Supratours are premium bus services with assigned seats, air conditioning, and professional drivers. They connect cities not served by trains, including Chefchaouen, Essaouira, and desert towns. They are safer and more comfortable than local bus companies. Book in advance online.',
    tips: [
      'CTM and Supratours are the only recommended bus companies',
      'Buy tickets online or at the station (avoid touts selling tickets)',
      'Luggage is stored underneath the bus with a claim ticket',
      'Buses stop for bathroom and food breaks on long routes',
      'Supratours runs from train stations, making connections easy',
      'Night buses are safe but arrive fatigued; a daytime bus plus a night in a riad may be better',
    ],
  },
  {
    mode: 'Petit Taxis (City)',
    icon: Car,
    safetyRating: 'Safe with Precautions',
    ratingColor: 'text-amber-700',
    description:
      'Petit taxis are city taxis color-coded by location (red in Marrakech, blue in Rabat, etc.). They are supposed to use meters but often do not. As a solo woman, always sit in the back seat. At night, have your riad call a trusted driver rather than flagging one on the street.',
    tips: [
      'Always insist on the meter or agree on price before getting in',
      'Sit in the back seat, never the front',
      'Have your riad call a trusted driver at night',
      'Use ride-hailing apps (InDriver, Careem) where available',
      'Typical city rides should cost 10-30 MAD; anything over 50 MAD is likely inflated',
      'Take a photo of the driver ID card and license plate for safety',
    ],
  },
  {
    mode: 'Grand Taxis (Intercity)',
    icon: Car,
    safetyRating: 'Use with Caution',
    ratingColor: 'text-amber-700',
    description:
      'Grand taxis are shared vehicles that carry 6 passengers on fixed routes between cities and towns. They depart when full. As a solo woman, try to sit in the back row. You can buy multiple seats for more space and comfort. While generally safe, they can be cramped and uncomfortable.',
    tips: [
      'Sit in the back row, ideally next to another woman',
      'Buy 2 seats if you want more space (still cheaper than a private taxi)',
      'Agree on the price and destination before getting in',
      'Grand taxi stations are usually near the main bus station',
      'Do not confuse grand taxis with private taxi drivers at tourist spots',
      'For a private grand taxi, negotiate the whole car price (typically 6x the per-person fare)',
    ],
  },
  {
    mode: 'Walking',
    icon: Footprints,
    safetyRating: 'Safe (Daytime)',
    ratingColor: 'text-green-700',
    description:
      'Walking is the best way to explore Morocco\'s medinas and cities during the day. Most areas visited by tourists are safe. At night, stick to well-lit main streets and busy areas. Avoid deserted alleys after dark. Download offline Google Maps and save your riad location.',
    tips: [
      'Walk confidently and purposefully, even if you are lost',
      'Download offline Google Maps for all cities on your itinerary',
      'Pin your riad or hotel location before going out each day',
      'Wear comfortable closed-toe shoes; medina streets are uneven and slippery',
      'Carry a portable phone charger; GPS drains battery quickly',
      'Return to your accommodation before midnight in medina areas',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WOMEN-FRIENDLY TOURS
   ═══════════════════════════════════════════════════════════════ */

const womenFriendlyTours = [
  {
    name: 'Female-Guided Medina Walking Tours',
    icon: Map,
    priceRange: 'From 300 MAD / half day',
    description:
      'Female licensed guides offer walking tours of Marrakech, Fes, and other medinas. Having a female guide dramatically reduces unwanted attention from touts and provides a women\'s perspective on Moroccan culture. They can take you to women\'s cooperatives, female-run businesses, and hidden gems that male guides might skip.',
    bookingTip: 'Ask your riad to arrange a female guide, or book through local tourism offices. Licensed guides carry official ID cards.',
  },
  {
    name: 'Cooking Classes with Moroccan Women',
    icon: Coffee,
    priceRange: 'From 350 MAD / class',
    description:
      'Learn to make tagine, couscous, pastilla, and other Moroccan dishes from local women in their homes or at cooking schools. These classes offer intimate cultural exchange and often include a market visit to buy ingredients. Many classes are run by women\'s cooperatives, directly supporting female economic empowerment.',
    bookingTip: 'Maison Arabe, Amal Center (nonprofit training restaurant), and La Maison Arabe in Marrakech are highly rated. Ask for women-only sessions.',
  },
  {
    name: 'Women\'s Argan Cooperative Visits',
    icon: HandHeart,
    priceRange: 'From 50 MAD / visit',
    description:
      'Visit women-run argan oil cooperatives in the Essaouira and Agadir regions. Women crack, roast, and press argan nuts using traditional methods. Buying directly supports female workers and ensures authenticity. These visits offer meaningful cultural exchange and insight into women\'s economic independence in rural Morocco.',
    bookingTip: 'The cooperatives on the Marrakech-Essaouira road are most accessible. Buy argan oil here (from 150 MAD for 250ml) rather than in tourist shops where it is often diluted.',
  },
  {
    name: 'Traditional Hammam Experience',
    icon: Sparkles,
    priceRange: 'From 100 MAD (local) / From 300 MAD (tourist)',
    description:
      'The hammam (public bath) is a quintessential Moroccan experience. Local hammams are women-only at certain times and offer an authentic experience. Tourist-oriented hammams provide more comfort and privacy. The scrubbing and steaming ritual is deeply relaxing and a wonderful way to connect with Moroccan women\'s culture.',
    bookingTip: 'For first-timers, try a tourist-friendly hammam (Heritage Spa, Les Bains de Marrakech) from 300 MAD. For the authentic experience, ask your riad to direct you to the nearest local hammam and explain the protocol.',
  },
  {
    name: 'Desert Tours for Solo Women',
    icon: Star,
    priceRange: 'From 800 MAD / 2 days',
    description:
      'Group desert tours from Marrakech to Merzouga or Zagora are popular and safe for solo women. You travel with other tourists and stay at established camps. The Sahara at sunset and sunrise is unforgettable. Book through reputable agencies and avoid last-minute street deals.',
    bookingTip: 'Book 3-day tours (Marrakech-Merzouga-Fes) for the best experience. Reputable companies include Morocco Desert Trips, Sahara Desert Crew, and your riad\'s recommended agency.',
  },
  {
    name: 'Women-Only Group Tours',
    icon: Users,
    priceRange: 'From 8,000 MAD / 7 days',
    description:
      'International companies and local operators offer women-only group tours of Morocco. These provide a structured, supported experience with female guides, carefully chosen accommodations, and a built-in group of fellow female travelers. Ideal for first-time solo travelers or those wanting extra security.',
    bookingTip: 'Intrepid Travel, G Adventures, and Wild Women Expeditions offer Morocco-specific women-only departures. Local companies like Morocco Women Tours specialize in custom women-only itineraries.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CONNECTING WITH OTHER FEMALE TRAVELERS
   ═══════════════════════════════════════════════════════════════ */

const connectingTips = [
  {
    method: 'Hostels and Social Riads',
    icon: Hotel,
    description:
      'Hostels with communal areas (rooftop terraces, shared kitchens) are the easiest way to meet other solo travelers. Many organize group dinners, pub crawls, and day trips. Social riads with communal breakfast tables also create natural meeting opportunities.',
  },
  {
    method: 'Online Communities',
    icon: Globe,
    description:
      'Facebook groups like "Girls Love Travel," "Solo Female Travelers," and "Women Who Travel Morocco" have thousands of members sharing tips, asking for travel companions, and arranging meetups. Post your dates and itinerary to find others with overlapping plans.',
  },
  {
    method: 'Organized Day Tours',
    icon: Map,
    description:
      'Group day tours (Ouzoud Waterfalls, Ourika Valley, Essaouira from Marrakech) naturally bring solo travelers together. You spend a full day with the same group, making it easy to form connections. Many travelers extend friendships beyond the tour.',
  },
  {
    method: 'Cooking Classes and Workshops',
    icon: Coffee,
    description:
      'Activity-based meetups like cooking classes, pottery workshops, and photography tours attract solo travelers. The shared activity provides an immediate conversation starter. Many women report finding travel companions for the rest of their trip at these events.',
  },
  {
    method: 'Travel Apps',
    icon: Phone,
    description:
      'Apps like Bumble BFF, Tourlina (women-only travel companion app), and Couchsurfing Hangouts can connect you with other female travelers in your area. Set your profile to your current city and browse for nearby women travelers.',
  },
  {
    method: 'Cafe Culture',
    icon: Coffee,
    description:
      'Morocco\'s cafe culture revolves around long, lingering coffee and tea sessions. Sit at a popular cafe in the main square or near a tourist landmark, and you will likely meet other travelers. The rooftop terrace cafes overlooking Jemaa el-Fna are famous meeting spots.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REAL STORIES AND EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const travelerExperiences = [
  {
    name: 'Sarah, 28',
    origin: 'United Kingdom',
    duration: '2 weeks solo',
    route: 'Marrakech - Essaouira - Fes - Chefchaouen',
    icon: UserCheck,
    quote:
      'I was nervous before arriving in Marrakech, but within 24 hours I felt at home. My riad owner treated me like a daughter, arranging everything from a female guide to a trusted taxi driver. Yes, I got catcalled in the medina, but I learned to ignore it and it never escalated. Chefchaouen was the highlight; I felt safer there than in parts of London.',
    topTip: 'Book a female guide for your first day in any new city. It changes the whole dynamic and you learn so much more about women\'s lives in Morocco.',
  },
  {
    name: 'Emma, 34',
    origin: 'Australia',
    duration: '3 weeks solo',
    route: 'Casablanca - Rabat - Fes - Merzouga - Marrakech',
    icon: UserCheck,
    quote:
      'The Sahara Desert was the most magical experience of my life. I joined a group tour from Fes to Merzouga and met three other solo women on the trip. We ended up traveling together for the rest of our Morocco journey. The key is to stay in hostels and do group activities; Morocco practically forces you to make friends.',
    topTip: 'Do not skip the desert. Book a 3-day group tour and you will almost certainly find travel companions. The shared experience bonds people quickly.',
  },
  {
    name: 'Maria, 41',
    origin: 'Spain',
    duration: '10 days solo',
    route: 'Tangier - Chefchaouen - Fes - Marrakech',
    icon: UserCheck,
    quote:
      'As a Spanish speaker, I found that many Moroccans in the north speak some Spanish, which helped immensely. Tangier surprised me; it has been completely transformed and felt very safe. The worst experience I had was a taxi driver in Fes who tried to charge me triple; I simply got out and found another. Being firm is all you need.',
    topTip: 'Learn 10 phrases in Darija (Moroccan Arabic). Even badly pronounced attempts earn respect and laughter. Moroccans genuinely appreciate the effort.',
  },
  {
    name: 'Priya, 26',
    origin: 'India',
    duration: '12 days solo',
    route: 'Marrakech - Atlas Mountains - Essaouira',
    icon: UserCheck,
    quote:
      'As an Indian woman, I am used to dealing with staring and comments, so Morocco felt surprisingly manageable. The Atlas Mountains trekking was incredible and I met wonderful Berber families who hosted me for tea. Essaouira felt like a different country; so peaceful and bohemian. I would go back in a heartbeat.',
    topTip: 'If you have traveled solo in India or Southeast Asia, Morocco will feel easier than you expect. The skills transfer. Pack modest clothes and a confident attitude.',
  },
  {
    name: 'Lisa, 52',
    origin: 'United States',
    duration: '8 days solo',
    route: 'Marrakech - Ouarzazate - Merzouga - Marrakech',
    icon: UserCheck,
    quote:
      'I traveled solo at 52 and had no issues. Older women receive more respect in Moroccan culture, and I found people were genuinely warm and helpful. I hired a private driver for the desert route, which was worth every dirham. The riads I stayed in treated me like a VIP. Age is an advantage here.',
    topTip: 'If you are over 40, Morocco may actually be easier for you than for younger women. You receive more respect. Hire a private driver for intercity travel; it is affordable and comfortable.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SOLO FEMALE ITINERARY SUGGESTIONS
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    title: 'First-Timer\'s Gentle Introduction (7 Days)',
    icon: Heart,
    difficulty: 'Easy',
    budget: 'From 5,000 MAD total',
    highlights: 'Chefchaouen, Fes, Marrakech',
    days: [
      { day: 'Day 1-2', location: 'Chefchaouen', activity: 'Arrive via Tangier airport. Explore the blue medina at your own pace. Hike to the Spanish Mosque for sunset views. Ease into Morocco in the safest, most relaxed city.' },
      { day: 'Day 3', location: 'Travel to Fes', activity: 'CTM bus to Fes (4 hours). Settle into a well-reviewed riad in the medina. Evening walk along Bou Jeloud main street.' },
      { day: 'Day 4', location: 'Fes', activity: 'Full-day medina tour with a female guide. Visit Chouara Tanneries, Al Quaraouiyine, and artisan workshops. Cooking class in the afternoon.' },
      { day: 'Day 5', location: 'Travel to Marrakech', activity: 'Train to Marrakech (7 hours via Casablanca or direct). Settle into your riad. Evening visit to Jemaa el-Fna.' },
      { day: 'Day 6', location: 'Marrakech', activity: 'Bahia Palace, Saadian Tombs, Majorelle Garden. Afternoon hammam experience. Rooftop dinner with medina views.' },
      { day: 'Day 7', location: 'Marrakech', activity: 'Morning souk shopping with a guide. Afternoon at leisure. Departure or extend your trip.' },
    ],
  },
  {
    title: 'Coast to Desert Adventure (10 Days)',
    icon: Compass,
    difficulty: 'Moderate',
    budget: 'From 8,000 MAD total',
    highlights: 'Marrakech, Essaouira, Desert, Fes',
    days: [
      { day: 'Day 1-2', location: 'Marrakech', activity: 'Explore the medina with a female guide. Bahia Palace, souks, hammam. Evening food tour of Jemaa el-Fna.' },
      { day: 'Day 3-4', location: 'Essaouira', activity: 'Bus to Essaouira (3 hours). Beach walks, ramparts, art galleries. Visit argan cooperative. Try surfing with a female instructor.' },
      { day: 'Day 5', location: 'Return to Marrakech', activity: 'Morning in Essaouira, afternoon bus back. Evening packing and rest.' },
      { day: 'Day 6-7', location: 'Desert (Merzouga)', activity: 'Join a 3-day group tour. Drive through Atlas Mountains and Todra Gorge. Camel trek at sunset. Night in luxury desert camp under the stars.' },
      { day: 'Day 8', location: 'Arrive Fes', activity: 'Tour continues to Fes. Settle into your riad. Evening walk and dinner.' },
      { day: 'Day 9', location: 'Fes', activity: 'Full-day medina exploration. Tanneries, madrasas, pottery workshops. Afternoon cooking class.' },
      { day: 'Day 10', location: 'Fes', activity: 'Morning at leisure. Shopping for authentic crafts. Departure from Fes airport or train to Casablanca.' },
    ],
  },
  {
    title: 'Northern Morocco Cultural Immersion (12 Days)',
    icon: Globe,
    difficulty: 'Moderate',
    budget: 'From 10,000 MAD total',
    highlights: 'Tangier, Chefchaouen, Fes, Meknes, Rabat',
    days: [
      { day: 'Day 1-2', location: 'Tangier', activity: 'Explore the renovated medina, Kasbah Museum, Cape Spartel. Walk the Corniche. Visit the American Legation Museum.' },
      { day: 'Day 3-4', location: 'Chefchaouen', activity: 'Bus to Chefchaouen (2.5 hours). Explore the blue medina. Hike Akchour Waterfalls. Visit local artisan workshops.' },
      { day: 'Day 5-6', location: 'Fes', activity: 'Bus to Fes (4 hours). Two full days exploring the world\'s largest medina with a female guide. Cooking class and hammam.' },
      { day: 'Day 7', location: 'Meknes & Volubilis', activity: 'Day trip to Meknes and the Roman ruins of Volubilis. Return to Fes in the evening.' },
      { day: 'Day 8-9', location: 'Rabat', activity: 'Train to Rabat (2.5 hours). Hassan Tower, Kasbah des Oudaias, Chellah ruins. Modern art museum and cafe culture.' },
      { day: 'Day 10-11', location: 'Casablanca', activity: 'Train to Casablanca (1 hour). Hassan II Mosque (interior tour), Habous Quarter, Corniche promenade.' },
      { day: 'Day 12', location: 'Departure', activity: 'Last-minute shopping at Morocco Mall. Departure from Casablanca airport.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING ESSENTIALS FOR WOMEN
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  {
    category: 'Clothing Must-Haves',
    icon: Shirt,
    items: [
      '3-4 loose tops that cover shoulders (linen, cotton, or modal blend)',
      '2 pairs of loose-fitting pants or palazzo trousers',
      '1-2 maxi skirts or midi skirts below the knee',
      'A lightweight cardigan or kimono for layering',
      'A versatile scarf (headcover, sun protection, blanket, sarong)',
      'Comfortable closed-toe walking shoes with good grip',
      'Sandals for riads and beach areas',
      'Swimsuit for hammams, pools, and beaches',
      'A warm layer for desert nights, Atlas Mountains, or air-conditioned buses',
    ],
  },
  {
    category: 'Safety and Essentials',
    icon: Shield,
    items: [
      'Crossbody anti-theft bag with zipper closure',
      'Portable phone charger (at least 10,000 mAh)',
      'Offline maps downloaded for all destinations',
      'Photocopy of passport stored separately from original',
      'Travel insurance documents (digital and printed)',
      'A basic first-aid kit with any prescription medications',
      'Padlock for hostel lockers',
      'Door wedge or portable door lock for extra room security',
      'A fake wedding ring (optional but effective at reducing attention)',
    ],
  },
  {
    category: 'Toiletries and Comfort',
    icon: Sparkles,
    items: [
      'Sunscreen SPF 50 (from 120 MAD locally; bring from home to save)',
      'Insect repellent for desert evenings',
      'Menstrual products (tampons are hard to find outside major cities; pads are available)',
      'Dry shampoo for days without washing facilities (desert trips)',
      'Biodegradable wet wipes',
      'Lip balm with SPF',
      'Moisturizer (desert and mountain air is very dry)',
      'Small perfume-free hand sanitizer',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSoloFemaleTravelPage() {
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

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-solo-female-travel.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Solo Female Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Women&apos;s Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Solo Female Travel
            <br className="hidden md:block" /> in Morocco 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide for women traveling Morocco alone. Safety tips, what to wear,
            safest cities, best accommodations, real traveler stories, and itineraries designed for solo women.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ══════════════════════════════════════════════════════════
          INTRODUCTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Yes, Women Can and Do Travel Morocco Solo
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                &quot;Is Morocco safe for women traveling alone?&quot; It is one of the most searched
                travel questions online, and the answer is nuanced but ultimately positive. Every year,
                millions of women visit Morocco, and thousands do so completely solo. With the right
                preparation and awareness, Morocco is a deeply rewarding destination for solo female travelers.
              </p>
              <p>
                Let&apos;s be honest: Morocco presents unique challenges for women. Verbal harassment
                (catcalling) is common, especially in larger cities. You will receive more attention than
                you might in Europe or North America. The culture around gender roles is different from
                what most Western women are accustomed to. But these challenges are manageable, and
                millions of women navigate them successfully every year.
              </p>
              <p>
                What Morocco offers in return is extraordinary: ancient medinas that feel like stepping
                back in time, the vast golden Sahara Desert, snow-capped Atlas Mountains, azure coastal
                towns, some of the world&apos;s best cuisine, and a warmth of hospitality that will
                redefine your understanding of generosity. Many women describe Morocco as one of the
                most transformative solo trips of their lives.
              </p>
              <p>
                This guide covers every aspect of solo female travel in Morocco &mdash; from what to
                pack to how to handle unwanted attention, from the safest cities to the best tours run
                by women. Read it, prepare well, and you will be ready to experience Morocco with
                confidence and joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SAFETY OVERVIEW FOR WOMEN
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Overview for Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the reality of women&apos;s safety in Morocco helps you prepare effectively and travel with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyOverview.map((stat) => {
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

          <div className="mt-12 max-w-4xl mx-auto card-moroccan p-6">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Info className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              The Honest Reality
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p>
                <span className="font-semibold text-[var(--text-primary)]">What you will experience:</span> Morocco
                is a country where gender dynamics are different from the West. Men may stare, call out comments, or
                try to start conversations. In medinas, you may be approached by men offering to guide you, sell you
                something, or simply wanting to talk. This attention can range from mildly annoying to uncomfortable,
                but it very rarely crosses into physical intimidation or danger.
              </p>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">What is rare:</span> Physical harassment,
                assault, and theft targeting women tourists are rare. Morocco&apos;s tourism industry depends on
                positive experiences, and communities generally self-police. Moroccan women themselves deal with
                catcalling and unwanted attention daily; it is a societal issue, not something specifically directed at
                foreign women.
              </p>
              <p>
                <span className="font-semibold text-[var(--text-primary)]">The reward:</span> Women who prepare well
                and travel with confidence consistently report that Morocco is one of the most memorable, eye-opening,
                and enriching destinations they have ever visited. The warmth, the colors, the food, the landscapes,
                and the genuine human connections make it worth every moment of preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT TO WEAR — DETAILED
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear in Morocco as a Woman
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dressing appropriately reduces unwanted attention significantly and shows respect for local culture.
            Here is a context-specific guide for every situation you will encounter.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {dressCodeGuide.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <div key={guide.context} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <GuideIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {guide.context}
                      </h3>
                      <span className="text-sm font-semibold text-[var(--color-gold)]">
                        {guide.recommendation}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{guide.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {guide.essentials.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-4xl mx-auto p-6 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Important Note on Dress
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  You are not required to wear a headscarf in Morocco (it is not Iran or Saudi Arabia). Morocco is a
                  moderate Muslim country, and many Moroccan women in cities do not cover their hair. However, carrying
                  a lightweight scarf is invaluable: you can use it to cover your head when entering religious sites,
                  shield yourself from sun and wind, use it as a blanket on cold buses, or wrap it as a sarong at the beach.
                  It is the single most versatile item in your packing list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DEALING WITH HARASSMENT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldAlert className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dealing with Unwanted Attention
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Knowing how to handle different situations will empower you to travel with confidence.
            Most encounters are harmless, but being prepared makes all the difference.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {harassmentTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.situation} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TipIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.situation}
                      </h3>
                      <span className="text-sm font-semibold text-amber-700">
                        Frequency: {tip.frequency}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tip.description}</p>
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-3 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      How to Respond
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {tip.response.map((r, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <BookOpen className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
              Useful Darija Phrases for Women
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { darija: 'La, shukran', meaning: 'No, thank you' },
                { darija: 'Sir f halak', meaning: 'Go away / Leave me alone' },
                { darija: 'Bla ma tkellemni', meaning: 'Do not talk to me' },
                { darija: 'Ana mzowja', meaning: 'I am married' },
                { darija: 'Rajli hna', meaning: 'My husband is here' },
                { darija: 'Ghadi n3ayet l police', meaning: 'I will call the police' },
                { darija: 'Safi!', meaning: 'Enough! / Stop!' },
                { darija: 'Hshuma', meaning: 'Shame on you (powerful cultural word)' },
              ].map((phrase) => (
                <div key={phrase.darija} className="flex items-center gap-3 p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--color-accent)] text-sm min-w-[140px]">{phrase.darija}</span>
                  <span className="text-xs text-[var(--text-muted)]">{phrase.meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SAFEST CITIES FOR WOMEN
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safest Cities for Solo Female Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each city has a unique personality and safety profile for women. Here are the six most popular destinations
            ranked and reviewed from a solo female traveler&apos;s perspective.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {safestCities.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={city.image}
                    alt={`${city.city}, Morocco street view popular with solo female travelers`}
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
                      <span className="text-sm text-white/80">{city.vibe}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                  <div>
                    <h4 className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Why Women Love It
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST ACCOMMODATION TYPES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Hotel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Accommodation Types for Solo Women
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you stay shapes your entire Morocco experience. Here are the best options for solo female travelers
            with safety tips and price guidance.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {accommodationTypes.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-semibold text-[var(--color-accent)]">{acc.priceRange}</span>
                        <span className="text-xs text-[var(--text-muted)]">Best for: {acc.bestFor}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{acc.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {acc.tips.map((tip, i) => (
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

      {/* ══════════════════════════════════════════════════════════
          GETTING AROUND SAFELY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around Morocco Safely as a Woman
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options ranked by safety and convenience for solo female travelers, with practical tips for each mode.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {transportSafety.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TransportIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {transport.mode}
                      </h3>
                      <span className={`text-sm font-semibold ${transport.ratingColor}`}>
                        {transport.safetyRating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{transport.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {transport.tips.map((tip, i) => (
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

      {/* ══════════════════════════════════════════════════════════
          WOMEN-FRIENDLY TOURS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Women-Friendly Tours &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers incredible experiences designed for or especially welcoming to women. These tours and
            activities provide safe, enriching encounters with Moroccan culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {womenFriendlyTours.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TourIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tour.name}
                      </h3>
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{tour.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{tour.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Booking Tip:</span> {tour.bookingTip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONNECTING WITH OTHER FEMALE TRAVELERS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Connecting with Other Female Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the best parts of solo travel is meeting other travelers. Morocco makes this surprisingly easy.
            Here are the best ways to find travel companions and build connections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {connectingTips.map((tip) => {
              const ConnectIcon = tip.icon;
              return (
                <div key={tip.method} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ConnectIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.method}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          REAL STORIES AND EXPERIENCES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Real Stories from Solo Female Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hear from women who have traveled Morocco solo. Their honest experiences and top tips will help you
            prepare for your own journey.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {travelerExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {exp.name} &mdash; {exp.origin}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1">
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {exp.duration}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.route}
                        </span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-[var(--text-secondary)] italic border-l-3 border-[var(--color-accent)] pl-4 mb-4">
                    &quot;{exp.quote}&quot;
                  </blockquote>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Top Tip:</span> {exp.topTip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SOLO FEMALE ITINERARY SUGGESTIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Solo Female Itinerary Suggestions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three curated itineraries designed specifically for solo female travelers, from beginner-friendly
            to fully immersive cultural experiences.
          </p>

          <div className="space-y-10 max-w-4xl mx-auto">
            {itineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.title} className="card-moroccan overflow-hidden">
                  <div className="p-6 bg-gradient-to-r from-[var(--color-accent)]/5 to-transparent border-b border-[var(--color-accent)]/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <ItinIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {itin.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                            {itin.difficulty}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <Wallet className="w-3 h-3" /> {itin.budget}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {itin.highlights}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {itin.days.map((day) => (
                        <div key={day.day} className="flex items-start gap-4">
                          <div className="min-w-[80px]">
                            <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                              {day.day}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1">{day.location}</h4>
                            <p className="text-xs text-[var(--text-muted)]">{day.activity}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PACKING ESSENTIALS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Essentials for Solo Female Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A focused packing list covering clothing, safety items, and comfort essentials that
            every solo female traveler in Morocco will appreciate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packingEssentials.map((category) => {
              const PackIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
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

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo female travelers in 2026?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco is generally safe for solo female travelers with basic precautions. Verbal harassment
                (catcalling) is the most common issue but rarely escalates to anything physical. Millions of women
                visit Morocco each year, and solo female travel has become increasingly common. Stick to well-reviewed
                accommodations, dress modestly in conservative areas, use registered taxis at night, and consider
                hiring female guides for medina tours. The cultural rewards far outweigh the challenges.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should a woman wear in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In cities and medinas, cover your shoulders and knees with loose-fitting clothes in breathable fabrics.
                A lightweight scarf is your most versatile item, useful for entering religious sites, sun protection,
                and as a sarong at the beach. Beach resorts like Agadir are more relaxed, but topless sunbathing is
                never acceptable. In rural areas and small Berber villages, dress more conservatively with longer
                sleeves and full-length pants or maxi skirts. You do not need to wear a headscarf; Morocco is moderate.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I deal with harassment in Morocco as a woman?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most effective strategy is to ignore catcalls completely, walk with confidence, and avoid engaging.
                Wear sunglasses to prevent eye contact. If someone follows you, walk into a shop or cafe and ask staff
                for help. Learn key Darija phrases: &quot;La, shukran&quot; (No, thank you) and &quot;Sir f halak&quot;
                (Go away). Wearing a fake wedding ring can reduce some attention. For persistent or physical harassment,
                call out loudly; Moroccan bystanders typically intervene. Report serious incidents to Tourist Police.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the safest cities in Morocco for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Chefchaouen is widely considered the safest city, with its small walkable medina and relaxed atmosphere.
                Essaouira is another excellent choice with its bohemian coastal vibe. Rabat, as the capital, is modern
                and cosmopolitan with significantly less harassment. Agadir offers a safe resort environment. Marrakech
                is more intense but has excellent tourist infrastructure and Tourist Police. Fes is the most challenging
                but culturally rewarding; hire a female guide for your first day.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I book a riad or a hotel as a solo female traveler?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both work well. Riads with female staff or female owners are especially popular with solo women. They
                offer a personal, home-like atmosphere where staff help with transport, restaurant recommendations,
                and local tips. Look for riads with at least 50 reviews and a 4.5+ rating. Hotels offer more anonymity
                and often have 24-hour reception. Hostels are great for meeting other solo travelers and often have
                female-only dorms. Budget from 80 MAD for hostels, from 300 MAD for riads, and from 500 MAD for
                boutique hotels.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I travel between cities alone as a woman in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. ONCF trains are safe and comfortable; book first class for a quieter carriage with assigned seats.
                CTM and Supratours buses are reliable and safe intercity options. For grand taxis, sit in the back row
                and try to sit next to another woman. Domestic flights with Royal Air Maroc connect major cities.
                Ride-hailing apps work in larger cities. Avoid hitchhiking and unregistered taxis, especially at night.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are there women-only tours in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, several companies offer women-only group tours and female guides. Intrepid Travel, G Adventures,
                and local Moroccan companies offer women-focused itineraries from around 8,000 MAD for 7 days. Female
                guides are available in all major cities and can be booked through your riad or local tourism offices
                from 300 MAD per half day. Women-only cooking classes, hammam experiences, and argan cooperative
                visits are also widely available throughout the country.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for a solo female trip to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March to May) and autumn (September to November) offer the best weather and lighter crowds,
                making them ideal for solo female travelers. Temperatures are comfortable at 20-28 degrees Celsius,
                and all regions are accessible. Avoid July and August when inland cities like Marrakech and Fes exceed
                40 degrees Celsius. Ramadan can be a fascinating cultural experience but requires extra cultural
                sensitivity. Shoulder seasons also mean lower accommodation prices, starting from 200 MAD per night
                for good riads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED PAGES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/women-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Women&apos;s Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                More tips and resources for women visiting Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/solo-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Navigation className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Solo Travel Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                General solo travel tips for all travelers in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/is-morocco-safe" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Shield className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Is Morocco Safe?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Full safety guide with crime stats and city-by-city ratings.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-wear-in-morocco" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Shirt className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Wear
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete dress code guide for Morocco with seasonal tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Hotel className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top-rated riads with reviews from solo female travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BOTTOM CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent)]/80">
        <div className="container-morocco text-center">
          <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Morocco is waiting for you. With the right preparation, you will discover one of the most
            colorful, flavorful, and genuinely welcoming countries on earth. Thousands of women travel
            Morocco solo every year and fall in love with this extraordinary place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/is-morocco-safe"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Shield className="w-5 h-5" />
              Read the Full Safety Guide
            </Link>
            <Link
              href="/morocco-travel-tips"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Morocco Travel Tips
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
