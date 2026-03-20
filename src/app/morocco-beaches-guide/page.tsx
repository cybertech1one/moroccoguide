import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Waves,
  Sun,
  Umbrella,
  Compass,
  Wind,
  Fish,
  Globe,
  Thermometer,
  Calendar,
  Mountain,
  Users,
  Camera,
  AlertTriangle,
  Anchor,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Beaches in Morocco 2026 | Atlantic Coast, Mediterranean & Hidden Gems',
  description:
    'Complete guide to the best beaches in Morocco. From Legzira arches and Essaouira winds to Saidiaa blue flag shores and Paradise Valley swimming holes. Surf spots, family beaches, water sports, seasonal water temps, and beach town stays.',
  keywords: [
    'best beaches morocco',
    'morocco beach',
    'beach holiday morocco',
    'morocco coast',
    'legzira beach',
    'paradise valley morocco',
    'essaouira beach',
    'agadir beach',
    'saidia beach morocco',
    'morocco surf beaches',
    'oualidia beach',
    'sidi kaouki beach',
    'al hoceima beach',
    'morocco atlantic coast',
    'morocco mediterranean beaches',
    'family beaches morocco',
    'morocco water sports',
    'beach clubs morocco',
    'morocco beach towns',
    'morocco beach safety',
  ],
  openGraph: {
    title: 'Best Beaches in Morocco 2026 | Atlantic Coast, Mediterranean & Hidden Gems',
    description:
      'Discover Morocco\'s best beaches from the rugged Atlantic coast to warm Mediterranean coves. Surf spots, family-friendly shores, hidden gems like Legzira and Paradise Valley, seasonal guides, and beach town stays.',
    url: `${BASE_URL}/morocco-beaches-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-beaches.webp`,
        width: 1200,
        height: 630,
        alt: 'Dramatic red stone arches of Legzira Beach on the Atlantic coast of Morocco at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Beaches in Morocco 2026 | Atlantic, Mediterranean & Hidden Gems',
    description:
      'Complete guide to Morocco\'s beaches. Legzira arches, Essaouira surf, Saidia blue-flag sands, Paradise Valley, family beaches, water sports, and seasonal tips.',
    images: [`${BASE_URL}/images/hero-beaches.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-beaches-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-beaches-guide`,
  name: 'Best Beaches in Morocco 2026 | Atlantic Coast, Mediterranean & Hidden Gems',
  description:
    'Complete guide to the best beaches in Morocco. Atlantic coast, Mediterranean shores, hidden gems, surf spots, family beaches, water sports, beach safety, and seasonal tips.',
  url: `${BASE_URL}/morocco-beaches-guide`,
  image: `${BASE_URL}/images/hero-beaches.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-beaches-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Beaches in Morocco', item: `${BASE_URL}/morocco-beaches-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best beach in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on what you want. Legzira Beach near Sidi Ifni is the most dramatic with its red stone arches. Agadir has the longest developed beach with full tourist infrastructure. Essaouira is best for wind sports and bohemian vibes. Oualidia lagoon is the calmest and best for families. Saidia on the Mediterranean has the warmest water and blue-flag status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to swim at Morocco beaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many Atlantic beaches have strong currents and undertow. Always swim at lifeguarded beaches, especially in Agadir, Essaouira, and Saidia. Mediterranean beaches like Al Hoceima and M\'diq tend to be calmer. Red flags mean no swimming. At unguarded beaches, ask locals about conditions before entering the water. Jellyfish can appear on Mediterranean beaches in August and September.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the water temperature in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atlantic coast water stays cool year-round: 17-18 degrees Celsius in winter, 20-22 degrees in summer at Agadir and Essaouira due to the Canary Current. Mediterranean beaches are warmer: 15-16 degrees in winter, 23-26 degrees in summer. A wetsuit is recommended for Atlantic surf sessions even in summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for a beach holiday in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For swimming and sunbathing, June through September is best, especially on the Mediterranean coast where water reaches 25 degrees. The Atlantic coast around Agadir is warm enough from May through October. For surfing, winter months (November through February) bring the biggest Atlantic swells. Essaouira\'s wind season for kitesurfing peaks from April to September.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Paradise Valley in Morocco and how do I get there?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Paradise Valley is a series of natural swimming pools and small waterfalls in the foothills of the Anti-Atlas, about 30 km north of Agadir near the village of Imouzzer Ida Outanane. Drive from Agadir toward Imouzzer, then follow signs for Paradise Valley. A 20-minute hike down from the parking area leads to the pools. Local guides (from 50 MAD) can show you the best spots. Best visited April through October; the pools can be low in late summer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I surf in Morocco as a beginner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Morocco is one of the best destinations for beginner surfers. Taghazout has dozens of surf schools with week-long packages from 2,500 MAD including board rental, lessons, and accommodation. Sidi Kaouki near Essaouira offers mellow beach breaks ideal for learning. Agadir\'s Anza beach has gentle waves and warm water. Most schools provide wetsuits and have instructors who speak English, French, and Arabic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear at Moroccan beaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is relatively relaxed about swimwear at tourist beaches. Bikinis are common at resort beaches in Agadir, Saidia, and hotel pools. At less touristy or village beaches, more modest swimwear is respectful. Many Moroccan women swim in full clothing or modest swimwear. Topless sunbathing is not accepted anywhere in Morocco. Beach clubs and resort pools tend to be the most relaxed environments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there any blue-flag beaches in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco has over 27 blue-flag certified beaches as of 2025, the most in Africa. Saidia, Agadir, El Jadida, and Martil consistently hold blue-flag status, indicating clean water, environmental management, safety, and services. The number has grown steadily as Morocco invests in coastal infrastructure.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ATLANTIC COAST BEACHES
   ═══════════════════════════════════════════════════════════════ */

const atlanticBeaches = [
  {
    name: 'Agadir Beach',
    icon: Sun,
    description:
      'Morocco\'s premier resort beach stretches over 6 km of golden sand backed by a palm-lined promenade. The south-facing crescent bay is more sheltered than most Atlantic beaches. Rebuilt after the 1960 earthquake, Agadir now has the best beach infrastructure in the country: sunbed rentals, restaurants, water sports operators, and a beachfront corniche buzzing from dawn to midnight.',
    waterTemp: '18-22 C (year-round, Canary Current keeps it cool)',
    bestFor: 'Families, resort stays, year-round sunshine (300+ sunny days)',
    access: 'Direct flights to Al Massira Airport (AGA). Beach is central and walkable from most hotels.',
    price: 'Sunbed from 30 MAD, parasol from 20 MAD',
  },
  {
    name: 'Essaouira Beach (Plage de Safi)',
    icon: Wind,
    description:
      'A wide, windswept expanse stretching south from the medina walls toward Cap Sim dunes. Essaouira\'s trade winds (the Alize) blow 300+ days per year, making it North Africa\'s top kitesurfing and windsurfing destination. Near the port you will find camel rides; further south the beach empties out. Swimming is possible but currents are strong; stay near the lifeguard station.',
    waterTemp: '17-21 C (the Canary Current keeps Essaouira noticeably cooler than Agadir)',
    bestFor: 'Kitesurfing, windsurfing, photography, sunset walks',
    access: 'Essaouira Mogador Airport (ESU) or 2.5 hrs drive from Marrakech. Beach starts at the medina walls.',
    price: 'Kitesurf lesson from 500 MAD for 2 hours, camel ride from 100 MAD',
  },
  {
    name: 'Sidi Kaouki',
    icon: Waves,
    description:
      'A laid-back surf village 25 km south of Essaouira and the antidote to tourist crowds. A long, empty beach flanked by a whitewashed marabout (shrine) and open dunes. The beach break suits beginners and intermediates with consistent year-round waves. A handful of guesthouses and surf camps line the single road behind the beach. Electricity only arrived in the 2000s.',
    waterTemp: '17-20 C (wetsuit required year-round)',
    bestFor: 'Surfing, solitude, budget travelers, digital detox',
    access: 'Taxi from Essaouira (from 150 MAD, 30 min) or local bus. Paved road the entire way.',
    price: 'Surf lesson from 300 MAD including board, guesthouses from 200 MAD per night',
  },
  {
    name: 'Oualidia Lagoon',
    icon: Heart,
    description:
      'A sheltered tidal lagoon between El Jadida and Safi, Oualidia is Morocco\'s calmest swimming beach. A sandbar protects the lagoon from open-ocean swells, creating warm, shallow water perfect for children. Famous for its oyster beds since the 1950s, the lagoon changes dramatically with the tides, exposing sandy islands at low water.',
    waterTemp: '18-22 C (lagoon water is warmer than open Atlantic)',
    bestFor: 'Families with children, oyster tasting, kayaking, birdwatching',
    access: '3 hrs drive from Casablanca, 2.5 hrs from Marrakech. Small town with limited public transport.',
    price: 'Oyster plate from 60 MAD, kayak rental from 80 MAD per hour',
  },
  {
    name: 'El Jadida Beach & Haouzia',
    icon: Star,
    description:
      'El Jadida\'s beach runs 5 km from the UNESCO-listed Portuguese cistern south toward Haouzia. Popular with Moroccan families when Casablancais escape summer heat. Haouzia, 5 km further south, offers a quieter stretch backed by eucalyptus forest. El Jadida holds blue-flag status with lifeguards in summer.',
    waterTemp: '17-21 C (slightly warmer than Essaouira)',
    bestFor: 'Day trips from Casablanca, Moroccan family beach culture, history (Portuguese Cistern)',
    access: '1.5 hrs drive from Casablanca via autoroute. Train station in town. Beach walkable from center.',
    price: 'Sunbed from 20 MAD, Portuguese Cistern entry from 20 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDITERRANEAN BEACHES
   ═══════════════════════════════════════════════════════════════ */

const mediterraneanBeaches = [
  {
    name: 'Saidia (Blue Pearl)',
    icon: Sparkles,
    description:
      'Morocco\'s longest Mediterranean beach spans 14 km of fine golden sand, earning the nickname "Blue Pearl." Water reaches 25-26 C in summer. The Mediterrania Saidia resort complex occupies the west with golf courses, a marina, and beach clubs. The eastern stretch near the Moulouya river mouth is wilder, home to flamingos, egrets, and migrating birds.',
    waterTemp: '16-26 C (warmest in July-August, swimable May through October)',
    bestFor: 'Swimming, warm water, resort amenities, families',
    access: 'Oujda Angads Airport (OUD) then 1 hr drive. Seasonal direct flights from Europe.',
    price: 'Beach club day pass from 150 MAD, marina berth from 200 MAD per night',
  },
  {
    name: 'Al Hoceima',
    icon: Fish,
    description:
      'Set in a bay ringed by the Rif Mountains, Al Hoceima has some of the clearest water in Morocco. Quemado Beach in town has views of the Penon de Alhucemas fortress offshore. Plage Souani, 8 km west, has cleaner water and fewer crowds. Al Hoceima National Park protects ospreys, Barbary macaques, dolphins, and the critically endangered monk seal.',
    waterTemp: '16-25 C (excellent swimming June through September)',
    bestFor: 'Clear water, snorkeling, marine wildlife, off-the-beaten-path',
    access: 'Cherif Al Idrissi Airport (AHU) with limited flights, or 5 hrs drive from Fes via N2. Curvy mountain roads.',
    price: 'Boat tour to coves from 200 MAD per person, snorkel rental from 50 MAD',
  },
  {
    name: 'M\'diq & Cabo Negro',
    icon: Anchor,
    description:
      'On the Mediterranean 30 minutes east of Tetouan, M\'diq and Cabo Negro form a popular summer destination. M\'diq has a fishing port, marina, and town beach packed in July-August. Cabo Negro offers a quieter stretch backed by pine forest and a golf course. On clear days, Spain is visible across the strait.',
    waterTemp: '16-24 C (warmer than Atlantic, calmer seas)',
    bestFor: 'Family holidays, Spanish-Moroccan cultural mix, marina dining',
    access: '30 min from Tetouan, 1 hr from Tangier via autoroute. Frequent buses from Tetouan.',
    price: 'Beach club from 100 MAD, boat trip from 150 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HIDDEN GEM BEACHES
   ═══════════════════════════════════════════════════════════════ */

const hiddenGems = [
  {
    name: 'Legzira Beach',
    icon: Camera,
    description:
      'Morocco\'s most photographed beach, 10 km north of Sidi Ifni. Legzira\'s red and ochre stone arches, carved by millennia of erosion, frame the beach like natural cathedrals. One major arch collapsed in 2016, but the remaining formations are breathtaking. At low tide you can walk beneath and around the arches as the rust-red cliffs glow at sunset.',
    waterTemp: '18-21 C (strong currents, not ideal for swimming)',
    bestFor: 'Photography, geology, sunset viewing, dramatic landscapes',
    access: 'From Sidi Ifni, drive 10 km north on the N1. Steep staircase down the cliff to the beach. Accessible at low tide only for the arches.',
    tip: 'Check tide times before visiting. Low tide is essential to walk to the arches. Best light is 1-2 hours before sunset.',
  },
  {
    name: 'Paradise Valley',
    icon: Mountain,
    description:
      'Not a beach but Morocco\'s most beloved swimming spot. A palm-filled gorge 30 km north of Agadir near Imouzzer Ida Outanane, with emerald-green rock pools and waterfalls fed by mountain snowmelt. The main pool is 3-4 meters deep with flat rocks for sunbathing and cliff-jumping spots from 2 to 8 meters. Locals have swum here for generations.',
    waterTemp: '15-20 C (mountain-fed, refreshingly cold even in summer)',
    bestFor: 'Natural swimming, cliff jumping, day trip from Agadir, photography',
    access: 'From Agadir, drive 30 km north toward Imouzzer. Signed parking area, then 20-minute walk down to the pools. 4WD not needed; paved road.',
    tip: 'Go early morning to avoid crowds. Wear sturdy shoes for the rocky descent. Water levels drop by late summer. Local guides from 50 MAD.',
  },
  {
    name: 'Cala Iris',
    icon: Compass,
    description:
      'A remote fishing village within Al Hoceima National Park. Crystalline turquoise water enclosed by rocky headlands covered in Aleppo pine. No resort development, just painted fishing boats, a few restaurants serving the day\'s catch, and the clearest snorkeling water in Morocco. The marine reserve protects posidonia seagrass beds.',
    waterTemp: '17-25 C (exceptionally clear, visibility 10+ meters)',
    bestFor: 'Snorkeling, marine life, remote escape, fresh seafood',
    access: 'Rough but paved road from Al Hoceima (1.5 hrs, 50 km of switchbacks). No public transport. Bring supplies.',
    tip: 'Combine with a boat trip to nearby hidden coves (from 300 MAD per boat). The road itself has spectacular views.',
  },
  {
    name: 'Moulay Bousselham Lagoon',
    icon: Globe,
    description:
      'Where the Merja Zerga (Blue Lagoon) meets the Atlantic, 80 km south of Larache. Morocco\'s most important bird wetland with flamingos, spoonbills, and 200+ recorded species. The ocean side has powerful surf; the lagoon side is calm for kayaking. Small, authentic village with very few international tourists.',
    waterTemp: '16-21 C (lagoon is slightly warmer than open ocean)',
    bestFor: 'Birdwatching, photography, eco-tourism, authentic fishing village',
    access: '1.5 hrs drive from Rabat, 1 hr from Larache. Shared taxis from Souk el Arba. Limited accommodation.',
    tip: 'Hire a local boatman (from 100 MAD) for a dawn lagoon tour when bird activity peaks. Winter months have the most migratory species.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SURF BEACHES
   ═══════════════════════════════════════════════════════════════ */

const surfBeaches = [
  {
    name: 'Taghazout',
    wave: 'Point breaks and reef breaks',
    level: 'Intermediate to advanced (Anchor Point), beginners (Panoramas)',
    season: 'October - April for big swells; summer for smaller, learner-friendly waves',
    description:
      'Morocco\'s surf capital, 19 km north of Agadir. Anchor Point is a world-class right-hand point break drawing international surfers in winter. Hash Point, Panoramas, and Killer Point offer variety for all levels. The village has grown from fishing hamlet into a full surf ecosystem with dozens of camps, cafes, and shapers.',
    price: 'Surf camp week from 2,500 MAD including lessons, board, and accommodation',
  },
  {
    name: 'Imsouane',
    wave: 'Long right-hand point break (the Bay) and beach break (the Cathedral)',
    level: 'Beginners to intermediate (the Bay), intermediate-advanced (the Cathedral)',
    season: 'September - March for consistent point break swell',
    description:
      'The longest wave in Morocco, possibly in Africa. The Bay produces rides of 300+ meters, peeling slowly along a sandy-bottomed point. The Cathedral is heavier, breaking over rock. The fishing village sits on a cliff above with restaurants serving sardines straight off the boats. Development is growing but Imsouane still feels unhurried.',
    price: 'Surf lesson from 250 MAD, board rental from 100 MAD per day',
  },
  {
    name: 'Sidi Kaouki',
    wave: 'Consistent beach break',
    level: 'Beginners to intermediate',
    season: 'Year-round (biggest waves November - February)',
    description:
      'The mellow sister beach to Essaouira\'s windy shores. Beach breaks work on most tide states with forgiving whitewater for learners and occasional overhead sets. The exposed position catches every Atlantic swell. Fewer crowds than Taghazout with small surf schools offering personal attention.',
    price: 'Surf lesson from 300 MAD, week camp from 2,000 MAD',
  },
  {
    name: 'Mehdia Plage (Kenitra)',
    wave: 'Hollow beach break with sandbars',
    level: 'Intermediate to advanced',
    season: 'October - March',
    description:
      'The best beach break in northern Morocco, 40 km north of Rabat near the Sebou river mouth. Fast, hollow waves break over shifting sandbars, drawing the Rabat and Casablanca surf crowd on weekends. Kasbah de Mehdia overlooks the lineup. Less known internationally but highly rated by locals.',
    price: 'Board rental from 80 MAD per day, no organized camps',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    atlantic: 'Air 20-25 C, water 17-19 C. Sunny, windy in Essaouira. Surf season winding down. Wildflowers along the coast.',
    mediterranean: 'Air 18-24 C, water 16-19 C. Too cool for most swimmers. Quiet, good for coastal hikes.',
    verdict: 'Best for: surf tail season, Agadir sunbathing, road trips before summer crowds.',
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    atlantic: 'Air 25-30 C, water 19-22 C. Peak season in Agadir. Essaouira windy but warm. Atlantic stays cool.',
    mediterranean: 'Air 28-35 C, water 23-26 C. Peak season. Saidia, M\'diq, Al Hoceima packed.',
    verdict: 'Best for: Mediterranean swimming, Saidia resorts, family holidays, Essaouira kitesurfing.',
  },
  {
    season: 'Autumn (September - November)',
    icon: Wind,
    atlantic: 'Air 22-28 C, water 20-22 C. Warmest Atlantic water. Surf swells return October. Crowds thin.',
    mediterranean: 'Air 20-28 C, water 21-24 C. September excellent for swimming with fewer crowds.',
    verdict: 'Best for: swimming both coasts, early surf season, shoulder-season value, Oualidia.',
  },
  {
    season: 'Winter (December - February)',
    icon: Waves,
    atlantic: 'Air 15-20 C, water 16-18 C. Big swells (Taghazout peak). Agadir still sunny (20 C+). Essaouira atmospheric.',
    mediterranean: 'Air 10-16 C, water 14-16 C. Too cold to swim. Deserted, dramatic storm-watching.',
    verdict: 'Best for: surfing (Taghazout, Imsouane), Agadir winter sun, Dakhla whale watching.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACH TOWNS TO STAY
   ═══════════════════════════════════════════════════════════════ */

const beachTowns = [
  {
    name: 'Agadir',
    vibe: 'Modern resort city',
    bestFor: 'Families, comfort, nightlife, year-round sun',
    stay: 'Beachfront hotels from 400 MAD per night, all-inclusive resorts from 1,200 MAD',
    highlights: ['6 km beach', '300+ sunny days', 'Souk El Had', 'Day trips to Paradise Valley'],
  },
  {
    name: 'Essaouira',
    vibe: 'Bohemian medina town',
    bestFor: 'Wind sports, arts scene, food, culture',
    stay: 'Medina riads from 300 MAD per night, beachfront hotels from 600 MAD',
    highlights: ['UNESCO medina', 'Gnaoua festival (June)', 'Thuya workshops', 'Kitesurfing'],
  },
  {
    name: 'Taghazout',
    vibe: 'Surf village',
    bestFor: 'Surfing, yoga, digital nomads, budget travel',
    stay: 'Surf hostels from 120 MAD per night, boutique riads from 500 MAD',
    highlights: ['Anchor Point wave', '20+ surf schools', 'Rooftop yoga', 'Fresh fish at the port'],
  },
  {
    name: 'Saidia',
    vibe: 'Mediterranean resort',
    bestFor: 'Warm-water swimming, golf, couples',
    stay: 'Resort apartments from 500 MAD per night, marina hotels from 900 MAD',
    highlights: ['14 km beach', 'Marina with restaurants', 'Two golf courses', 'Moulouya bird reserve'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WATER SPORTS
   ═══════════════════════════════════════════════════════════════ */

const waterSports = [
  {
    sport: 'Kitesurfing',
    icon: Wind,
    where: 'Essaouira, Dakhla, Sidi Kaouki',
    description: 'Essaouira\'s Alize winds blow April to September, making it a world-class spot. Dakhla lagoon offers flat water and 300+ wind days, attracting pros for speed records.',
    price: 'Lesson from 500 MAD (2 hrs), full course from 3,000 MAD (3 days)',
  },
  {
    sport: 'Jet Skiing & Parasailing',
    icon: Waves,
    where: 'Agadir, Saidia, M\'diq',
    description: 'Available at major resort beaches with licensed operators. Agadir\'s sheltered bay is most popular. Saidia\'s warm Mediterranean water makes summer sessions comfortable.',
    price: 'Jet ski from 300 MAD (20 min), parasailing from 250 MAD per flight',
  },
  {
    sport: 'Scuba Diving & Snorkeling',
    icon: Fish,
    where: 'Al Hoceima, Cala Iris, Cap Spartel (Tangier)',
    description: 'Mediterranean coast offers best visibility (10-20m). Al Hoceima National Park has grouper, moray eels, octopus, and dolphins. Cap Spartel on the Atlantic side has rock formations and marine caves.',
    price: 'Introductory dive from 400 MAD, snorkel rental from 50 MAD',
  },
  {
    sport: 'Sea Kayaking',
    icon: Compass,
    where: 'Oualidia Lagoon, Moulay Bousselham, Dakhla',
    description: 'Oualidia\'s lagoon is perfect for beginners with calm water and oyster-farm tours. Moulay Bousselham offers birdwatching paddles through Merja Zerga. Dakhla\'s bay has flamingo colonies and white-sand islands.',
    price: 'Kayak rental from 80 MAD per hour, guided tour from 200 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACH SAFETY
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  'Atlantic beaches have strong rip currents. Swim only at lifeguarded beaches between the flags.',
  'Red flag = no swimming. Yellow = caution. Green = safe. Always check before entering the water.',
  'Jellyfish appear on Mediterranean beaches in August-September. Vinegar helps stings.',
  'Wear reef shoes at rocky beaches like Legzira and Cala Iris to avoid sea urchin spines.',
  'Keep valuables hidden. Use hotel safes. Never leave bags unattended on the beach.',
  'UV index hits 10-11 in summer. Apply reef-safe sunscreen. Burns happen within 15 minutes.',
  'Caught in a rip current? Swim parallel to shore, not against it. Then angle back to the beach.',
  'Supervise children on Atlantic beaches. Even ankle-deep water has unpredictable surges.',
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBeachesGuidePage() {
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
            backgroundImage: 'url(/images/hero-beaches.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Beaches in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Beach &amp; Coast Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Beaches in Morocco:
            <br className="hidden md:block" /> Atlantic, Mediterranean &amp; Hidden Gems
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Legzira&apos;s red stone arches and Essaouira&apos;s wind-carved dunes to the warm turquoise
            coves of Al Hoceima and Paradise Valley&apos;s emerald rock pools.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s 3,500 km of Coastline
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is bordered by two bodies of water: the Atlantic Ocean to the west and the
                Mediterranean Sea to the north, connected by the narrow Strait of Gibraltar. That
                gives the country over 3,500 km of coastline ranging from rugged, surf-battered
                Atlantic cliffs to sheltered Mediterranean coves with water clear enough to see the
                seabed 10 meters down.
              </p>
              <p>
                The Atlantic coast runs from Tangier south past Casablanca, Essaouira, and Agadir
                to the Saharan shores of Dakhla. Water stays cool year-round (17-22 C) thanks to
                the Canary Current, which also creates the reliable swells making Morocco a top surf
                destination. The Mediterranean stretches from Tangier east to Saidia, with warmer
                water (up to 26 C in summer), calmer seas, and a distinctly different character.
                Between the two coasts: 14 km resort beaches, hidden coves reachable only by boat,
                mountain swimming pools, and lagoons teeming with flamingos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Atlantic Coast Beaches ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Atlantic Coast Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s western seaboard delivers powerful surf, sweeping sands, and some of the best
            sunsets on the African continent.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season. Atlantic water stays cool year-round; pack a rash guard.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {atlanticBeaches.map((beach) => {
              const BeachIcon = beach.icon;
              return (
                <div key={beach.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {beach.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{beach.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
                        <div className="flex items-center gap-2">
                          <Thermometer className="w-3 h-3 text-[var(--color-accent)]" />
                          <span><strong>Water:</strong> {beach.waterTemp}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-3 h-3 text-[var(--color-accent)]" />
                          <span><strong>Best for:</strong> {beach.bestFor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                          <span><strong>Access:</strong> {beach.access}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                          <span>{beach.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mediterranean Beaches ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mediterranean Coast Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Warmer water, calmer seas, and turquoise bays backed by the Rif Mountains. Morocco&apos;s
            Mediterranean coast is the country&apos;s best-kept beach secret.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {mediterraneanBeaches.map((beach) => {
              const BeachIcon = beach.icon;
              return (
                <div key={beach.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {beach.name}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{beach.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-muted)]">
                        <div className="flex items-center gap-2">
                          <Thermometer className="w-3 h-3 text-[var(--color-gold)]" />
                          <span><strong>Water:</strong> {beach.waterTemp}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-3 h-3 text-[var(--color-gold)]" />
                          <span><strong>Best for:</strong> {beach.bestFor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                          <span><strong>Access:</strong> {beach.access}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3 h-3 text-[var(--color-gold)]" />
                          <span>{beach.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hidden Gem Beaches ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hidden Gems &amp; Secret Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Off the beaten path: dramatic arches, mountain swimming pools, remote coves, and
            flamingo lagoons that most visitors never find.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hiddenGems.map((gem) => {
              const GemIcon = gem.icon;
              return (
                <div key={gem.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {gem.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{gem.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-3 h-3 text-[var(--color-accent)]" />
                      <span><strong>Water:</strong> {gem.waterTemp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-3 h-3 text-[var(--color-accent)]" />
                      <span><strong>Best for:</strong> {gem.bestFor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span><strong>Access:</strong> {gem.access}</span>
                    </div>
                    <div className="flex items-start gap-2 mt-2 p-2 bg-[var(--color-gold)]/5 rounded">
                      <Info className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--color-gold)]"><strong>Tip:</strong> {gem.tip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Surf Beaches ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wind className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Best Surf Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco ranks among the world&apos;s top five surf destinations. The Atlantic coastline
            catches swells from 4,000 km of open ocean, delivering consistent waves from September through April.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices and vary by season. Peak surf season (December-February) often commands higher rates.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {surfBeaches.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Waves className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spot.name}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                        {spot.price}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{spot.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[var(--text-muted)]">
                      <div className="flex items-start gap-2">
                        <Waves className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span><strong>Wave:</strong> {spot.wave}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Star className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span><strong>Level:</strong> {spot.level}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span><strong>Season:</strong> {spot.season}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Visit: Seasonal Beach Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right coast at the right time makes all the difference. Here is what to expect each season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seasonalGuide.map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {s.season}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide mb-1">Atlantic Coast</p>
                      <p>{s.atlantic}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-xs uppercase tracking-wide mb-1">Mediterranean Coast</p>
                      <p>{s.mediterranean}</p>
                    </div>
                    <div className="pt-2 border-t border-[var(--border-light)]">
                      <p className="text-xs text-[var(--color-accent)] font-medium">{s.verdict}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Family Beaches ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Family-Friendly Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Calm water, shallow wading areas, and facilities that make beach days with children safe and enjoyable.
          </p>

          <div className="space-y-4">
            {[
              {
                name: 'Oualidia Lagoon',
                reason: 'Sheltered tidal lagoon with warm, ankle-deep water at the edges. No waves, no currents. Oyster farms to visit.',
              },
              {
                name: 'Agadir (central beach)',
                reason: 'Lifeguarded year-round, gentle bay waves, boardwalk with restaurants and ice cream. Hotels with kids clubs nearby.',
              },
              {
                name: 'Saidia',
                reason: 'Warm Mediterranean water (25 C in summer), gentle slope, resort infrastructure with pools as backup.',
              },
              {
                name: 'M\'diq',
                reason: 'Small-town atmosphere, calm Mediterranean water, family-oriented Moroccan resort culture, affordable restaurants.',
              },
              {
                name: 'El Jadida (Haouzia)',
                reason: 'Wide sandy beach with gentle waves, backed by forest for shade. Popular with Moroccan families, authentic atmosphere.',
              },
            ].map((fam) => (
              <div key={fam.name} className="card-moroccan p-5 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {fam.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{fam.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Water Sports ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Sports in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Two oceans, year-round wind, and warm water create ideal conditions for every water sport imaginable.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices. Seasonal pricing can change depending on demand and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {waterSports.map((ws) => {
              const SportIcon = ws.icon;
              return (
                <div key={ws.sport} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SportIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {ws.sport}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{ws.description}</p>
                  <div className="space-y-2 text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <span><strong>Where:</strong> {ws.where}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      <span>{ws.price}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Beach Clubs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Umbrella className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Clubs &amp; Day Passes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For sunbed-and-service beach days, several towns offer clubs with pool access, loungers, and food.
          </p>
          <div className="space-y-4">
            <div className="card-moroccan p-5 flex items-start gap-3">
              <Umbrella className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Agadir Beach Clubs</h3>
                <p className="text-sm text-[var(--text-secondary)]">Tafouk and Oasis Beach Club on the corniche. Day passes include sunbed, parasol, pool, and welcome drink. Some operate year-round. <strong>From 150 MAD day pass, from 500 MAD cabana.</strong></p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex items-start gap-3">
              <Umbrella className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Saidia Mediterrania</h3>
                <p className="text-sm text-[var(--text-secondary)]">Resort complex open to non-guests. Pool bars, water slides, marina boardwalk. Summer only (June-September). <strong>From 200 MAD day pass, from 300 MAD with lunch.</strong></p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex items-start gap-3">
              <Umbrella className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Essaouira Beach Bars</h3>
                <p className="text-sm text-[var(--text-secondary)]">Ocean Vagabond and Le Chalet de la Plage offer loungers with minimum food/drink spend. Wind makes parasols essential. <strong>From 100 MAD minimum.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beach Towns to Stay ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Beach Towns to Stay In
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Where to base yourself for a beach holiday in Morocco, from modern resorts to bohemian medina towns.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Accommodation prices are starting rates and vary by season. Book early for July-August stays.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {beachTowns.map((town) => (
              <div key={town.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {town.name}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2 py-0.5 rounded">
                        {town.vibe}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      <strong>Best for:</strong> {town.bestFor}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mb-3">
                      <DollarSign className="w-3 h-3 inline text-[var(--color-accent)]" /> {town.stay}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {town.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beach Safety ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Safety in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential safety advice for swimming, sunbathing, and water activities on Moroccan beaches.
          </p>

          <div className="space-y-3">
            {safetyTips.map((tip) => (
              <div key={tip} className="card-moroccan p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">{tip}</p>
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
            {[
              {
                q: 'What is the best beach in Morocco?',
                a: 'It depends on what you want. Legzira is the most dramatic with its red arches. Agadir has the longest developed beach. Essaouira is best for wind sports. Oualidia lagoon is calmest for families. Saidia has the warmest water and blue-flag status.',
              },
              {
                q: 'Is it safe to swim at Morocco beaches?',
                a: 'Atlantic beaches have strong currents. Always swim at lifeguarded beaches. Mediterranean shores like Al Hoceima and M\'diq are calmer. Red flags mean no swimming. Ask locals about conditions at unguarded beaches.',
              },
              {
                q: 'What is the water temperature in Morocco?',
                a: 'Atlantic: 17-18 C winter, 20-22 C summer (Canary Current keeps it cool). Mediterranean: 15-16 C winter, 23-26 C summer. A wetsuit is recommended for Atlantic surf sessions even in summer.',
              },
              {
                q: 'When is the best time for a beach holiday?',
                a: 'Swimming: June-September, especially Mediterranean (25 C water). Atlantic around Agadir: May-October. Surfing: November-February for big swells. Kitesurfing in Essaouira: April-September.',
              },
              {
                q: 'Where is Paradise Valley and how do I get there?',
                a: 'Natural swimming pools 30 km north of Agadir near Imouzzer Ida Outanane. Drive toward Imouzzer, follow signs. 20-minute hike from parking to pools. Local guides from 50 MAD. Best April-October.',
              },
              {
                q: 'Can I surf in Morocco as a beginner?',
                a: 'Yes. Taghazout has dozens of schools with week packages from 2,500 MAD including board, lessons, and lodging. Sidi Kaouki has mellow beach breaks. Most schools provide wetsuits with multilingual instructors.',
              },
              {
                q: 'What should I wear at Moroccan beaches?',
                a: 'Bikinis are common at resort beaches (Agadir, Saidia, hotel pools). At less touristy spots, modest swimwear is respectful. Topless sunbathing is not accepted anywhere. Beach clubs are the most relaxed settings.',
              },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}

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
            <Link href="/morocco-surfing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Surfing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Morocco&apos;s surf scene: spots, seasons, camps, and gear for every level.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/agadir" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Agadir City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s premier beach resort city, from the corniche to Souk El Had.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wind className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The windswept coastal medina with world-class kitesurfing, fresh seafood, and Gnaoua music.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-weather-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Weather Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month weather breakdown for every region, with packing tips and best visit times.
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
            Ready to Hit the Beach in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Whether you are chasing waves in Taghazout, floating in Oualidia&apos;s lagoon, or
            watching the sunset through Legzira&apos;s stone arches, Morocco&apos;s coastline has a beach
            for every kind of traveler. Start planning your coastal adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agadir"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Sun className="w-5 h-5" />
              Explore Agadir
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Wind className="w-5 h-5" />
              Discover Essaouira
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
