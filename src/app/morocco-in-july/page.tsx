import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Music,
  Clock,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  AlertTriangle,
  Mountain,
  Thermometer,
  CloudSun,
  Waves,
  Shirt,
  DollarSign,
  Users,
  Wind,
  Shield,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in July 2026 | Summer Heat, Coast & Mountain Guide',
  description:
    'Complete guide to visiting Morocco in July 2026. Beat the summer heat on the Atlantic coast, escape to the Atlas Mountains, surf Taghazout, and navigate inland cities. Weather by region, festivals, costs, and essential tips.',
  keywords: [
    'morocco in july',
    'visiting morocco july',
    'morocco july weather',
    'morocco summer travel',
    'morocco july temperatures',
    'morocco july coast',
    'morocco july mountains',
    'taghazout july',
    'agadir july',
    'essaouira july',
    'morocco beach summer',
    'morocco july heat',
    'festival timitar agadir',
    'marrakech popular arts festival',
    'morocco july itinerary',
  ],
  openGraph: {
    title: 'Visiting Morocco in July 2026 | Summer Heat, Coast & Mountain Guide',
    description:
      'Navigate Morocco\'s peak summer. Atlantic coast beaches, Atlas Mountain escapes, surf towns, and smart strategies for the hottest month. Complete guide with weather and tips.',
    url: `${BASE_URL}/morocco-in-july`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco Atlantic coast in July with golden beach, blue ocean, and surfers at Taghazout',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in July 2026 | Complete Summer Guide',
    description:
      'Coast beaches, mountain escapes, surf culture, and heat strategies. Everything you need to know about Morocco in peak summer.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-july` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-july`,
  name: 'Visiting Morocco in July 2026 | Summer Heat, Coast & Mountain Guide',
  description:
    'Complete guide to visiting Morocco in July. Coast beaches, mountain retreats, surf culture, and strategies for navigating the summer heat.',
  url: `${BASE_URL}/morocco-in-july`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/morocco-in-july`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in July', item: `${BASE_URL}/morocco-in-july` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How hot is Morocco in July?', acceptedAnswer: { '@type': 'Answer', text: 'July is one of Morocco\'s hottest months. The Atlantic coast stays pleasant at 23-28 degrees Celsius with ocean breezes. Interior cities like Marrakech and Fes regularly reach 38-42 degrees during midday. The Sahara is extreme at 30-48 degrees and should be avoided. The Atlas Mountains offer relief at 18-30 degrees. Northern Morocco is warm at 25-33 degrees.' } },
    { '@type': 'Question', name: 'Is July a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'July is challenging for interior and desert destinations due to extreme heat, but excellent for the Atlantic coast and mountains. The coast (Essaouira, Agadir, Taghazout) offers perfect beach weather with ocean breezes. Mountain towns are pleasantly cool. It is peak domestic tourism season, so coastal accommodation should be booked well ahead. Avoid the Sahara and limit inland city visits to mornings and evenings.' } },
    { '@type': 'Question', name: 'Can you surf in Morocco in July?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, July offers consistent surf along the Atlantic coast. Taghazout, Imsouane, and Essaouira area breaks have good summer swells. Conditions are generally smaller and cleaner than winter, making July ideal for intermediate surfers and beginners. The constant Alizee trade winds create good conditions for wind and kite surfing, especially at Essaouira and Moulay Bouzerktoun. Water temperature is comfortable at 20-22 degrees.' } },
    { '@type': 'Question', name: 'What festivals happen in Morocco in July?', acceptedAnswer: { '@type': 'Answer', text: 'July hosts Festival Timitar in Agadir, a celebration of Amazigh (Berber) and world music over 3-4 days with major international acts. Marrakech may host the Popular Arts Festival (Festival National des Arts Populaires) featuring traditional music, dance, and equestrian shows at the Badi Palace. Various local moussems (religious festivals) take place across the country. Check exact dates as they vary annually.' } },
    { '@type': 'Question', name: 'Should I avoid Marrakech in July?', acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily, but plan strategically. July temperatures in Marrakech can reach 40-42 degrees midday. Explore the medina and souks between 8-11 AM and after 6 PM. Use midday for air-conditioned museums, hammam visits, or riad pool time. Jemaa el-Fna is magical at night when temperatures drop. Many visitors do a 1-2 day strategic Marrakech visit within a longer coast-focused trip. Choose accommodation with pool and air conditioning.' } },
    { '@type': 'Question', name: 'Is July peak tourist season in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'July is the start of peak season, particularly for coastal destinations. European and Moroccan domestic tourists flood the beaches. Agadir, Essaouira, and Taghazout see high demand and increased prices. Book coastal accommodation 1-2 months ahead. Interior cities (Marrakech, Fes) are actually quieter as heat deters some visitors — you may find riad deals. The mountains are moderately busy with hikers and families seeking cool air.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    cities: 'Essaouira, Agadir, Taghazout, Casablanca',
    tempRange: '23-28°C',
    rainfall: 'None',
    icon: Waves,
    description: 'July\'s saving grace. The Atlantic coast benefits from cooling ocean breezes and the cold Canary Current. Essaouira rarely exceeds 25°C but is very windy. Agadir is warmer at 27-28°C with calmer conditions. Ocean temperature reaches 20-22°C — comfortable for swimming. This is where you want to be.',
    highlight: 'Best region in July',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes, Ouarzazate',
    tempRange: '32-42°C',
    rainfall: 'None',
    icon: Thermometer,
    description: 'Serious heat. Marrakech regularly hits 40°C+ at midday; Fes reaches 36-40°C. Ouarzazate on the desert edge can exceed 42°C. Air conditioning is essential. Sightseeing is only comfortable before 11 AM and after 6 PM. The upside: tourist crowds thin and some riads offer summer discounts.',
    highlight: 'Very hot — morning/evening only',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, M\'Hamid',
    tempRange: '30-48°C',
    rainfall: 'None',
    icon: AlertTriangle,
    description: 'Extreme and potentially dangerous heat. Sand temperatures can exceed 70°C. Desert camps are unbearable. Camel treks are unsafe during daylight hours. Even dawn and dusk bring 30°C+ temperatures. This is not the month for Sahara experiences — visit in spring or autumn instead.',
    highlight: 'Avoid — extreme heat',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ifrane, Azrou, Chefchaouen',
    tempRange: '18-30°C',
    rainfall: 'Very rare',
    icon: Mountain,
    description: 'The mountain escape. Villages at 1,500-2,000m enjoy temperatures 10-15°C cooler than the lowlands. Ifrane (nicknamed "Morocco\'s Switzerland") stays pleasant at 20-25°C. Trekking conditions are good but the sun is intense at altitude. Nights are refreshingly cool at 12-18°C — bring layers.',
    highlight: 'Cool mountain refuge',
  },
  {
    region: 'Northern Morocco',
    cities: 'Tangier, Tetouan, Al Hoceima',
    tempRange: '25-33°C',
    rainfall: 'None',
    icon: Sun,
    description: 'Warmer than spring but milder than the interior. Tangier benefits from Atlantic and Mediterranean breezes. Mediterranean beaches around Al Hoceima and Saaidia enter prime season — warmer water (22-24°C) than the Atlantic. Chefchaouen in the Rif Mountains is a cooler alternative at higher elevation.',
    highlight: 'Mediterranean beach season',
  },
] as const;

/* ===============================================================
   DATA: TOP EXPERIENCES IN JULY
   =============================================================== */

const topExperiences = [
  {
    name: 'Atlantic Coast Beach Life',
    icon: Waves,
    category: 'Beach & Relaxation',
    location: 'Agadir, Taghazout, Essaouira, Mirleft',
    duration: '3-7 days',
    cost: 'From 300 MAD/day',
    description:
      'July is peak beach season on Morocco\'s stunning Atlantic coast, and this is where the smart traveler spends their time. Agadir\'s 10 km crescent beach offers resort-style comfort with warm water (21°C), gentle waves, and beachside restaurants. Taghazout, 20 km north, is the surf and yoga capital with cliff-top cafes serving fresh smoothies and fish tagines. Essaouira adds medina culture to the beach experience, though the famous Alizee winds blow strongest in July — perfect for kite and windsurf enthusiasts but breezy for sunbathers. Further south, Mirleft and Sidi Ifni offer quieter, more authentic beach experiences on dramatic clifftop coastlines.',
    insiderTip:
      'Taghazout is the sweet spot — small enough to feel authentic, developed enough for comfort. The Hash Point and Anchor Point breaks offer waves for all levels. Stay at a surf camp for the social scene (from 400 MAD/night with breakfast and surf lesson). Mornings are calmer for surfing; afternoon winds suit kite sports. For less wind than Essaouira, head to Agadir or Taghazout. Paradise Valley (freshwater gorge swimming pools) is a must-do day trip from the coast (from 150 MAD by taxi).',
  },
  {
    name: 'Festival Timitar (Agadir)',
    icon: Music,
    category: 'Festival & Music',
    location: 'Agadir',
    duration: '3-4 days',
    cost: 'Free (outdoor stages)',
    description:
      'Festival Timitar is Agadir\'s premier music event, celebrating Amazigh (Berber) culture through a spectacular fusion of traditional Amazigh music with international world music, pop, rock, and hip-hop acts. Founded in 2004, the festival has grown into one of North Africa\'s biggest free music events, attracting hundreds of thousands of attendees over its multi-day run. Multiple stages are set up across the city with headline acts performing at the main outdoor arena near the beach. The festival is a celebration of Souss-Massa regional identity, with food, art, and craft exhibitions complementing the music program.',
    insiderTip:
      'The festival is entirely free, which means it draws enormous crowds. Arrive early for the best spots at the main stage. The smaller stages often feature the most interesting traditional Amazigh musicians — seek these out for authentic experiences. Agadir accommodation books up during the festival — reserve 2-3 weeks ahead. Street food stalls around the festival area serve excellent Souss specialties. The festival usually falls in July but dates vary — check the official program.',
  },
  {
    name: 'Atlas Mountain Escape',
    icon: Mountain,
    category: 'Nature & Trekking',
    location: 'Imlil, Ourika, Ifrane, Azrou',
    duration: '2-5 days',
    cost: 'From 400 MAD/day (guesthouse with meals)',
    description:
      'When lowland Morocco sizzles, the Atlas Mountains become an essential refuge. A 90-minute drive from Marrakech transports you from 40°C heat to 25°C mountain freshness. The village of Imlil (1,740m) is the gateway to North Africa\'s highest peak, Jebel Toubkal (4,167m), and offers sublime trekking through terraced valleys and Amazigh villages. The Ourika Valley provides an easier day-trip option with a series of seven waterfalls and riverside cafes. Further north, the Middle Atlas towns of Ifrane and Azrou offer cedar forests, Barbary macaques, and a surprisingly European Alpine atmosphere — Ifrane is sometimes called "Little Switzerland."',
    insiderTip:
      'For the full mountain experience, base yourself in Imlil for 3-4 days. The Toubkal summit attempt takes 2 days with an overnight at the Toubkal Refuge (3,207m) — July conditions are clear but the sun is intense, so start hiking by 6 AM. For a more relaxing escape, the Kasbah Bab Ourika above the Ourika Valley offers stunning pool-with-a-view retreats (from 1,200 MAD/night). Ifrane has Morocco\'s only ski-resort-turned-summer-retreat: cedar forests, lakes, and temperatures that rarely exceed 25°C.',
  },
  {
    name: 'Surfing & Water Sports',
    icon: Wind,
    category: 'Adventure & Sports',
    location: 'Taghazout, Essaouira, Imsouane, Dakhla',
    duration: '3-7 days',
    cost: 'From 250 MAD/day (including board rental)',
    description:
      'July offers excellent conditions for wave and wind sports along Morocco\'s Atlantic coast. Summer swells are smaller and more forgiving than winter, making July ideal for intermediate surfers and those learning. Taghazout hosts multiple world-class breaks — Anchor Point, Hash Point, Panoramas, and the beginner-friendly beach breaks of Tamraght. Essaouira is the undisputed king of wind sports with the Alizee trade winds blowing strongest in July. Further south, Imsouane offers a legendary long right-hand wave in a charming fishing village setting. And for the adventurous, Dakhla in the deep south is an emerging world-class kitesurfing and wing foiling destination with its vast lagoon.',
    insiderTip:
      'Dawn patrol (5:30-8 AM) catches the glassiest conditions before afternoon wind picks up. Surf schools in Taghazout offer multi-day packages from 1,500 MAD (5 days of lessons, board rental, and transport). Essaouira wind sports schools rent kites from 500 MAD/day with instruction. Imsouane is best experienced over 2-3 days — stay in one of the simple cliffside guesthouses (from 200 MAD/night) and eat fresh-caught fish grilled on the beach (from 50 MAD). Dakhla requires a domestic flight or very long drive but the lagoon is extraordinary.',
  },
  {
    name: 'Marrakech Popular Arts Festival',
    icon: Star,
    category: 'Festival & Culture',
    location: 'Marrakech',
    duration: '4-5 days',
    cost: 'From 50 MAD (some events free)',
    description:
      'The Festival National des Arts Populaires, when it takes place (dates vary), transforms Marrakech into a showcase of Moroccan traditional arts. The event features Berber folk music and dance troupes from across the country, dramatic horseback fantasia charges, acrobatic shows, and craft exhibitions. Performances at the atmospheric Badi Palace ruins (the 16th-century Saadian palace) create an unforgettable backdrop. Jemaa el-Fna square becomes even more vibrant than usual, with additional performers and musicians. Despite the July heat, evening performances under the stars are magical.',
    insiderTip:
      'Evening performances start after 9 PM when temperatures drop — this is the best time. The fantasia horse charges are the most spectacular events. During the festival, Jemaa el-Fna reaches its zenith of energy and performance — arrive by 7 PM for the best atmosphere. Plan all other Marrakech sightseeing for early morning (8-11 AM). Book a riad with a pool for essential midday escapes. The festival does not happen every year in the same format — check locally for 2026 dates.',
  },
  {
    name: 'Mediterranean Beach Escapes',
    icon: Sun,
    category: 'Beach & Swimming',
    location: 'Al Hoceima, Saaidia, Nador, Cabo Negro',
    duration: '3-5 days',
    cost: 'From 350 MAD/day',
    description:
      'Morocco\'s Mediterranean coast enters its prime in July. Unlike the Atlantic coast\'s powerful swells and strong winds, the Mediterranean offers calmer, warmer water (22-24°C), sheltered coves, and a more relaxed swimming experience. Al Hoceima\'s Quemado Beach and nearby Cala Bonita are stunningly beautiful with turquoise water and rocky headlands reminiscent of the Greek islands. Saaidia, the "Blue Pearl" near the Algerian border, has a 14 km sandy beach and a modern resort marina. This coast is popular with Moroccan families on summer holiday, giving it an authentic local atmosphere quite different from the tourist-focused Atlantic destinations.',
    insiderTip:
      'Al Hoceima is the hidden gem — its beaches rival anything in the Mediterranean but with a fraction of the crowds and cost. Book a cliff-side apartment with sea views (from 400 MAD/night). The Hoceima National Park has pristine coastal hiking. Saaidia is more developed with resort amenities. The coast between Tetouan and Al Hoceima features dozens of secret coves accessible by car. Bring snorkeling gear — the Mediterranean visibility is excellent. This area has the warmest swimming water in Morocco in July.',
  },
] as const;

/* ===============================================================
   DATA: WHAT TO DO BY DESTINATION
   =============================================================== */

const destinationGuide = [
  {
    destination: 'Agadir & Taghazout',
    icon: Waves,
    rating: 'Excellent',
    whyVisit: 'Beach capital at its peak (24-28°C). Surf, yoga, Festival Timitar, Paradise Valley. Warm ocean.',
    mustDo: 'Taghazout surf, Agadir beach, Paradise Valley, Festival Timitar, sunset fish dinner',
  },
  {
    destination: 'Essaouira',
    icon: Wind,
    rating: 'Very Good (windy)',
    whyVisit: 'Coolest coast city (22-25°C) but very windy. Perfect for wind sports, atmospheric medina.',
    mustDo: 'Kitesurfing, medina walk, ramparts sunset, port fish grills, Sidi Kaouki beach',
  },
  {
    destination: 'Atlas Mountains',
    icon: Mountain,
    rating: 'Excellent',
    whyVisit: 'Cool escape (18-30°C). Trekking, waterfalls, mountain villages. 10-15°C cooler than lowlands.',
    mustDo: 'Toubkal trek, Ourika waterfalls, Imlil village stay, Ifrane cedar forests',
  },
  {
    destination: 'Al Hoceima & Med Coast',
    icon: Sun,
    rating: 'Very Good',
    whyVisit: 'Warm Mediterranean beaches (25-33°C). Calm water, stunning coves, authentic local atmosphere.',
    mustDo: 'Quemado Beach, Cala Bonita, snorkeling, coastal hiking, seafood by the harbor',
  },
  {
    destination: 'Marrakech',
    icon: AlertTriangle,
    rating: 'Challenging (very hot)',
    whyVisit: 'Extreme heat (35-42°C). Only for strategic 1-2 day visits. Quieter than usual, potential deals.',
    mustDo: 'Souks at 8 AM, museum midday, hammam, Jemaa el-Fna after 8 PM, rooftop dinner',
  },
  {
    destination: 'Sahara Desert',
    icon: AlertTriangle,
    rating: 'Avoid',
    whyVisit: 'Dangerous heat levels (45-48°C). Desert camps are unsafe. Wait for spring or autumn.',
    mustDo: 'Do not visit the Sahara in July. Plan for March-May or October-November instead.',
  },
] as const;

/* ===============================================================
   DATA: PRACTICAL TIPS
   =============================================================== */

const practicalTips = [
  {
    icon: Shirt,
    title: 'What to Pack',
    tips: [
      'Ultra-light, breathable clothing (cotton, linen)',
      'High-SPF sunscreen (50+) and reapply every 2 hours',
      'Wide-brimmed hat — non-negotiable in July',
      'Quality UV-blocking sunglasses',
      'Swimwear and a quick-dry towel',
      'Windbreaker for breezy Essaouira evenings',
      'Refillable water bottle with insulation',
      'Light warm layer only if visiting mountains',
    ],
  },
  {
    icon: DollarSign,
    title: 'Budget Expectations',
    tips: [
      'Coastal accommodation: from 350 MAD (peak season premium)',
      'Interior city riads: from 200 MAD (heat-season discounts)',
      'Meals: from 30 MAD (street food) to 400 MAD (fine dining)',
      'Surf lessons: from 250 MAD per 2-hour session',
      'Mountain guesthouses: from 350 MAD with meals',
      'July is high season on the coast — book ahead',
      'Domestic flights: from 500 MAD one way',
      'Seasonal pricing can change — confirm before booking',
    ],
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    tips: [
      'Drink at least 3 liters of water daily — dehydration is a real risk',
      'Avoid outdoor activity between 12-4 PM in interior cities',
      'Wear a hat and sunscreen even on cloudy coastal days',
      'Eat light meals — heavy food in extreme heat causes discomfort',
      'Carry oral rehydration salts for heat exhaustion prevention',
      'Know heat stroke symptoms: dizziness, confusion, lack of sweating',
      'Pharmacies stock sun care products if you forget supplies',
      'Medical care in cities is generally good — clinics in all major towns',
    ],
  },
  {
    icon: Users,
    title: 'Crowd & Culture Tips',
    tips: [
      'July-August is Moroccan holiday season — locals flood the coast',
      'Book coastal accommodation 1-2 months ahead',
      'Interior cities are quieter — potential for riad deals',
      'Beach towns are lively with Moroccan families in the evening',
      'Modest beachwear is respectful — Morocco is a Muslim country',
      'Tipping: 10-15% in restaurants, 20-50 MAD for guides',
      'Friday afternoons: many shops close for prayers',
      'Evening promenading (paseo) culture is strongest in summer',
    ],
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARIES
   =============================================================== */

const sampleItineraries = [
  {
    title: '7-Day Summer Coast & Mountains',
    description: 'Beat the heat with Atlantic beaches and mountain escapes',
    days: [
      { day: 1, location: 'Agadir/Taghazout', activity: 'Arrive, beach afternoon, sunset dinner on the cliff' },
      { day: 2, location: 'Taghazout', activity: 'Morning surf lesson, Paradise Valley day trip afternoon' },
      { day: 3, location: 'Essaouira', activity: 'Drive to Essaouira, medina and ramparts, port fish dinner' },
      { day: 4, location: 'Essaouira', activity: 'Wind sports or beach day, gallery visits, sunset walk' },
      { day: 5, location: 'Marrakech', activity: 'Drive to Marrakech, evening souks and Jemaa el-Fna' },
      { day: 6, location: 'Atlas Mountains', activity: 'Day trip to Ourika Valley, waterfalls, mountain lunch' },
      { day: 7, location: 'Marrakech', activity: 'Early morning souk shopping, museum, departure' },
    ],
  },
  {
    title: '5-Day Mountain & Med Coast',
    description: 'Cooler alternatives: Rif Mountains and Mediterranean beaches',
    days: [
      { day: 1, location: 'Chefchaouen', activity: 'Arrive, blue medina exploration, rooftop dinner' },
      { day: 2, location: 'Chefchaouen', activity: 'Akchour waterfalls hike (cooler in morning), medina walk' },
      { day: 3, location: 'Al Hoceima', activity: 'Drive to Al Hoceima, Quemado Beach afternoon' },
      { day: 4, location: 'Al Hoceima', activity: 'Beach day, Cala Bonita, snorkeling, harbor seafood' },
      { day: 5, location: 'Departure', activity: 'Morning swim, coastal drive, departure from Nador or Al Hoceima' },
    ],
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'How hot does it get in Morocco in July?',
    answer: 'July is one of Morocco\'s two hottest months (along with August). The Atlantic coast stays comfortable at 23-28°C thanks to ocean breezes. Interior cities are very hot: Marrakech 35-42°C, Fes 33-40°C, Ouarzazate 38-42°C. The Sahara is extreme and dangerous at 40-48°C with sand surface temperatures exceeding 70°C. The Atlas Mountains offer relief at 18-30°C depending on altitude. Northern Morocco is warm at 25-33°C. The coast and mountains are July\'s clear winners.',
  },
  {
    question: 'Is Morocco worth visiting in July?',
    answer: 'Yes, but with the right strategy. July is excellent for Atlantic coast beach holidays (Agadir, Taghazout, Essaouira), mountain escapes (Imlil, Ifrane, Chefchaouen), and Mediterranean beaches (Al Hoceima). It is challenging but doable for Marrakech and Fes with an early-morning/late-evening schedule. The Sahara should be avoided completely. If you focus on the coast and mountains, July can be a fantastic trip with warm ocean, consistent surf, and a festive atmosphere as both Moroccan and European holidaymakers enjoy summer.',
  },
  {
    question: 'Is July crowded in Morocco?',
    answer: 'July is the beginning of peak summer season. Coastal destinations see heavy demand from both European tourists and Moroccan domestic holidaymakers — Agadir, Essaouira, and Mediterranean beaches are busy. Book 1-2 months ahead for popular coastal areas. Paradoxically, interior cities like Marrakech and Fes see lower tourist numbers in July as the heat deters many visitors — you may find accommodation deals and emptier monuments. Mountain destinations are moderately busy with families and trekkers seeking cool air.',
  },
  {
    question: 'Can you surf in Morocco in July?',
    answer: 'Absolutely. July offers consistent Atlantic swells with generally smaller, cleaner conditions than winter — ideal for intermediate surfers and beginners. Taghazout is the surf epicenter with breaks for all levels. Imsouane has its legendary long right-hand wave. The water temperature is comfortable at 20-22°C. Dawn sessions (5:30-8 AM) offer the glassiest conditions before afternoon trade winds pick up. Surf camps in Taghazout offer week-long packages from 2,500 MAD including lessons, board rental, and accommodation.',
  },
  {
    question: 'What is the best beach in Morocco in July?',
    answer: 'It depends on your style. Agadir Beach: best for resort-style comfort, calm water, and families (10 km of golden sand). Taghazout: best for surfers, yogis, and a laid-back vibe (cliff-top setting with great cafes). Essaouira: best for wind sports and culture (windy but atmospheric). Al Hoceima: best for calm Mediterranean swimming and stunning coves. Mirleft: best for dramatic scenery and uncrowded beaches. Sidi Kaouki: best for bohemian relaxation and beginner surf. All are excellent in July.',
  },
  {
    question: 'Should I avoid the Sahara Desert in July?',
    answer: 'Yes. July Sahara temperatures regularly exceed 45°C during the day and sand surface temperatures can reach 70°C — hot enough to cause burns through sandals. Desert camps become unbearable hot tents. Camel treks are cruel to animals and dangerous for humans in these conditions. Even air-conditioned hotels in Merzouga or Zagora offer little reason to visit when the landscape is a scorching furnace. Plan your Sahara experience for March-May or October-November when conditions are perfect for desert camps, camel treks, and stargazing.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-june',
    title: 'Morocco in June',
    description: 'Early summer with Gnaoua Festival and coast season beginning.',
    icon: Music,
  },
  {
    href: '/morocco-in-august',
    title: 'Morocco in August',
    description: 'Peak summer continues: hottest month, mountain escapes, coast life.',
    icon: Sun,
  },
  {
    href: '/best-beaches-morocco',
    title: 'Best Beaches',
    description: 'Complete guide to Morocco\'s Atlantic and Mediterranean beaches.',
    icon: Waves,
  },
  {
    href: '/atlas-mountains',
    title: 'Atlas Mountains',
    description: 'Trekking, villages, and cool mountain escapes.',
    icon: Mountain,
  },
  {
    href: '/morocco-budget-travel',
    title: 'Budget Travel',
    description: 'Save money on your Morocco summer trip.',
    icon: DollarSign,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInJulyPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Morocco Atlantic coast in July with golden sand beach, blue ocean waves, and surfers at Taghazout"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Monthly Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Visiting Morocco in July
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Peak summer demands smart planning. Head to the Atlantic coast, escape to mountain peaks,
            and let the heat shape your itinerary.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <Thermometer className="w-4 h-4" /> 23-42°C varies
            </span>
            <span className="flex items-center gap-1">
              <Waves className="w-4 h-4" /> Coast season
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="w-4 h-4" /> Mountain escape
            </span>
            <span className="flex items-center gap-1">
              <Wind className="w-4 h-4" /> Surf & wind sports
            </span>
          </div>
        </div>
      </section>

      {/* -- Breadcrumbs -- */}
      <div className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
        <div className="container-morocco py-3">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--text-primary)] font-medium">Morocco in July</span>
          </nav>
        </div>
      </div>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              July: Follow the Coast, Climb the Mountains
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              July in Morocco is a month of extremes. Interior cities sizzle under relentless sun, the
              Sahara becomes an inhospitable furnace, and the Atlantic coast transforms into a paradise
              of surf, sand, and ocean breezes. This is the month when Morocco&apos;s geography truly matters.
              The smart July traveler follows the coastline from Agadir to Essaouira, rides waves at
              Taghazout and Imsouane, discovers hidden Mediterranean coves near Al Hoceima, and retreats
              to the cool Atlas Mountains when the lowlands blaze. July rewards those who respect the heat
              and let it guide their itinerary toward Morocco&apos;s most beautiful coastal and mountain destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-moroccan p-6 text-center">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Atlantic Coast
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Warm ocean (21°C), consistent surf, beach towns buzzing with summer energy. July&apos;s undisputed best choice.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mountain Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                10-15°C cooler than the lowlands. Trekking, waterfalls, cedar forests, and Amazigh village stays.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Heat Advisory
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Interior cities 38-42°C, Sahara 45°C+. Avoid desert travel. Visit Marrakech/Fes mornings and evenings only.
              </p>
            </div>
          </div>

          {/* Heat Warning Box */}
          <div className="card-moroccan p-6 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  July Heat Warning
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  <strong>Sahara Desert (45-48°C+):</strong> Do not visit. Sand surface temperatures exceed 70°C.
                  Desert camps are dangerous. <strong>Interior cities (38-42°C):</strong> Marrakech and Fes are
                  only safe for early morning (before 11 AM) and evening (after 6 PM) outdoor activity. Stay
                  hydrated (3+ liters daily), wear sun protection, and have air conditioning at your accommodation.
                  Heat stroke is a real risk for unprepared travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Weather by Region -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            July Weather Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The contrast between coast and interior is extreme in July. Choose your region carefully.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherByRegion.map((region) => {
              const RegionIcon = region.icon;
              const isWarning = region.highlight.includes('Avoid');
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isWarning ? 'bg-red-100' : 'bg-[var(--color-accent)]/10'}`}>
                      <RegionIcon className={`w-5 h-5 ${isWarning ? 'text-red-500' : 'text-[var(--color-accent)]'}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{region.cities}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{region.tempRange}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CloudSun className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-xs text-[var(--text-muted)]">{region.rainfall}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{region.description}</p>
                  <div className="flex items-center gap-1">
                    {isWarning ? (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    ) : (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    )}
                    <span className={`text-xs font-medium ${isWarning ? 'text-red-600' : 'text-green-700'}`}>
                      {region.highlight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Top Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top Experiences in Morocco in July
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Coast life, mountain adventures, music festivals, and Mediterranean escapes — July has more to offer than you might expect.
          </p>
          <div className="space-y-8">
            {topExperiences.map((experience, idx) => {
              const ExpIcon = experience.icon;
              return (
                <div key={experience.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-white">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {experience.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <ExpIcon className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-xs text-[var(--text-muted)]">{experience.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-4 mb-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {experience.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {experience.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ticket className="w-3 h-3" /> {experience.cost}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{experience.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Insider Tip</p>
                            <p className="text-xs text-[var(--text-secondary)]">{experience.insiderTip}</p>
                          </div>
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

      {/* -- Destination Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Go in Morocco in July
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Coast and mountains are excellent. Interior cities need strategy. Desert is off-limits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationGuide.map((dest) => {
              const DestIcon = dest.icon;
              const ratingColor = dest.rating === 'Avoid' ? 'bg-red-50 text-red-700' :
                dest.rating.includes('Challenging') ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700';
              return (
                <div key={dest.destination} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {dest.destination}
                    </h3>
                  </div>
                  <div className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded mb-3 ${ratingColor}`}>
                    {dest.rating === 'Avoid' || dest.rating.includes('Challenging') ? (
                      <AlertTriangle className="w-3 h-3" />
                    ) : (
                      <CheckCircle className="w-3 h-3" />
                    )}
                    {dest.rating}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{dest.whyVisit}</p>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Must-Do:</p>
                    <p className="text-xs text-[var(--text-muted)]">{dest.mustDo}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample Itineraries -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            July Itinerary Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two heat-smart routes designed for July comfort and maximum enjoyment.
          </p>
          <div className="space-y-8">
            {sampleItineraries.map((itinerary) => (
              <div key={itinerary.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {itinerary.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{itinerary.description}</p>
                <div className="space-y-3">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-white">{day.day}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{day.location}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{day.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Practical Tips for July Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential advice for surviving and thriving in Morocco&apos;s peak summer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalTips.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SectionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Morocco Trip
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
                  <p className="text-xs text-[var(--text-secondary)] mb-3">{guide.description}</p>
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
            Ready for a Morocco Summer Adventure?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the surf breaks of Taghazout and the breezy medina of Essaouira to the cool cedar
            forests of the Atlas, July offers unforgettable experiences for heat-savvy travelers.
            Let the coast be your home base and the mountains your escape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/agadir"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Sun className="w-5 h-5" />
              Agadir Guide
            </Link>
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Essaouira Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
