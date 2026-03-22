import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Camera,
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
  TreesIcon,
  Shirt,
  DollarSign,
  Users,
  Wind,
  Shield,
  Palette,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in August 2026 | Hottest Month, Coast & Mountain Escapes',
  description:
    'Complete guide to visiting Morocco in August 2026. Navigate the hottest month with Atlantic coast beaches, Atlas Mountain escapes, Asilah Arts Festival, and Chefchaouen. Weather, costs, and essential summer survival tips.',
  keywords: [
    'morocco in august',
    'visiting morocco august',
    'morocco august weather',
    'morocco summer heat',
    'morocco august temperatures',
    'morocco august coast',
    'asilah arts festival',
    'chefchaouen august',
    'ifrane august',
    'morocco beach august',
    'morocco hottest month',
    'morocco august itinerary',
    'morocco august crowds',
    'morocco mountain summer',
    'morocco august what to pack',
  ],
  openGraph: {
    title: 'Visiting Morocco in August 2026 | Hottest Month, Coast & Mountain Escapes',
    description:
      'Master Morocco\'s hottest month. Atlantic coast refuges, mountain towns, Asilah Arts Festival, and Chefchaouen cool. Complete guide with weather, tips, and itineraries.',
    url: `${BASE_URL}/morocco-in-august`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Atlantic coast of Morocco in August with golden beach and blue ocean under a bright summer sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in August 2026 | Complete Summer Guide',
    description:
      'Hottest month, busiest coast, coolest mountains. Your complete guide to Morocco in August with weather, events, and survival strategies.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-august` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-august`,
  name: 'Visiting Morocco in August 2026 | Hottest Month, Coast & Mountain Escapes',
  description:
    'Complete guide to visiting Morocco in August. Coast beaches, mountain escapes, cultural festivals, and strategies for the hottest month.',
  url: `${BASE_URL}/morocco-in-august`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-august`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in August', item: `${BASE_URL}/morocco-in-august` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is August the hottest month in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'August is tied with July as Morocco\'s hottest month, and in many inland areas August edges slightly hotter. The Atlantic coast remains comfortable at 23-29 degrees Celsius. Interior cities like Marrakech reach 35-42 degrees, Fes 34-40 degrees. The Sahara is extreme at 32-48 degrees. The Atlas Mountains offer cool refuge at 18-32 degrees. The key difference from July is that August is also Moroccan holiday season, making the coast much more crowded.' } },
    { '@type': 'Question', name: 'Is August a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'August works well for coast and mountain destinations but is very challenging for interior cities and impossible for the Sahara. The Atlantic coast (Essaouira, Agadir, Taghazout) offers ideal beach weather. Chefchaouen and Atlas mountain towns are pleasantly cool. The Asilah Arts Festival adds cultural interest. However, August is peak Moroccan holiday season and the coast is packed with domestic tourists. Book accommodation well ahead and expect higher prices and lively atmospheres at beach destinations.' } },
    { '@type': 'Question', name: 'What is the Asilah Arts Festival?', acceptedAnswer: { '@type': 'Answer', text: 'The Asilah International Cultural Moussem (Arts Festival) has been held since 1978 in the beautiful whitewashed coastal town of Asilah, south of Tangier. The festival features mural painting on medina walls (artists paint new murals each year), art exhibitions, musical performances, poetry readings, and intellectual debates. It transforms Asilah\'s medina into an open-air art gallery. The festival typically runs for several weeks in July-August. Asilah itself is one of Morocco\'s most charming small towns with Portuguese ramparts and Atlantic views.' } },
    { '@type': 'Question', name: 'Where should I go in Morocco to escape the August heat?', acceptedAnswer: { '@type': 'Answer', text: 'The best heat escapes in August are: Essaouira (22-26 degrees with Atlantic breezes), Chefchaouen (22-30 degrees in the Rif Mountains), Ifrane and Azrou (20-28 degrees with cedar forests), Imlil and the High Atlas (18-28 degrees at altitude), and the Mediterranean coast near Al Hoceima. Agadir and Taghazout are warmer (25-29 degrees) but the ocean keeps things comfortable. All mountain towns above 1,000 meters offer significant relief from lowland heat.' } },
    { '@type': 'Question', name: 'How crowded is Morocco in August?', acceptedAnswer: { '@type': 'Answer', text: 'August is Morocco\'s busiest month for domestic tourism. Moroccan families take summer holidays at the coast, making beaches, hotels, and restaurants in Agadir, Essaouira, Tangier, and Mediterranean towns very busy. European tourist numbers are also high. Book coastal accommodation 1-2 months ahead — last-minute availability is scarce and prices peak. Mountains are moderately busy. Interior cities (Marrakech, Fes) are actually quieter as heat deters visitors — you can find riad deals.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in August?', acceptedAnswer: { '@type': 'Answer', text: 'Pack the lightest, most breathable clothing you own: loose cotton and linen in light colors, a wide-brimmed hat, high-SPF sunscreen (50+), UV-blocking sunglasses, and comfortable sandals. Bring a reusable water bottle with insulation to keep water cool. For coastal evenings, a light windbreaker is useful (Essaouira). For mountains, pack a warm layer for cool evenings. Swimwear and a quick-dry towel are essential. Modest clothing covering shoulders and knees for medina visits.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    cities: 'Essaouira, Agadir, Taghazout, Casablanca',
    tempRange: '23-29°C',
    rainfall: 'None',
    icon: Waves,
    description: 'The coast remains August\'s sanctuary. Essaouira hovers at 22-26°C with strong Alizee winds. Agadir is warmer at 25-29°C with calmer conditions. The Canary Current keeps ocean temperatures at 20-22°C — refreshing for swimming. Coastal fog (taros) sometimes rolls in during mornings but burns off by midday. This is where Morocco comes to cool down.',
    highlight: 'Best region in August',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes, Ouarzazate',
    tempRange: '32-42°C',
    rainfall: 'None',
    icon: Thermometer,
    description: 'August matches or exceeds July\'s heat. Marrakech regularly hits 40-42°C; Fes bakes at 34-40°C. Ouarzazate on the desert fringe can exceed 43°C. Air conditioning is not optional, it is essential. The upside: many European tourists avoid interior cities in August, so you may find quieter riads and monuments. Sightseeing is strictly before 11 AM and after 6 PM.',
    highlight: 'Extreme heat — minimal outdoor time',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, M\'Hamid',
    tempRange: '32-48°C',
    rainfall: 'None',
    icon: AlertTriangle,
    description: 'The Sahara in August is at its most extreme. Daytime air temperatures soar past 45°C; sand surface temperatures can exceed 70°C. Desert camps are unbearable. Even luxury hotels in the area offer little reason to visit when stepping outside is dangerous. This is categorically the worst month for Sahara visits.',
    highlight: 'Avoid — dangerous heat',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ifrane, Azrou, Ourika',
    tempRange: '18-32°C',
    rainfall: 'Extremely rare',
    icon: Mountain,
    description: 'The mountains are August\'s essential escape valve. At 1,500-2,000m elevation, temperatures run 10-15°C cooler than the lowlands. Ifrane rarely exceeds 28°C. Imlil sits at a perfect 18-26°C for trekking. Nights are refreshingly cool at 10-16°C. Wildflowers are gone but the clear skies and high-altitude freshness make mountain stays deeply restorative.',
    highlight: 'Cool mountain paradise',
  },
  {
    region: 'Northern Morocco',
    cities: 'Tangier, Chefchaouen, Tetouan, Asilah',
    tempRange: '24-33°C',
    rainfall: 'None',
    icon: Sun,
    description: 'Northern Morocco is warm but more temperate than the interior. Tangier benefits from dual ocean breezes (Atlantic and Mediterranean). Chefchaouen at 660m elevation stays cooler than coastal cities. Asilah is pleasant at 24-28°C with the Arts Festival adding cultural depth. Mediterranean beaches near Al Hoceima offer the warmest swimming water (23-25°C).',
    highlight: 'Warm with cultural festivals',
  },
] as const;

/* ===============================================================
   DATA: TOP EXPERIENCES IN AUGUST
   =============================================================== */

const topExperiences = [
  {
    name: 'Asilah International Arts Festival',
    icon: Palette,
    category: 'Arts & Culture',
    location: 'Asilah',
    duration: '2-3 days',
    cost: 'Free (most exhibitions and murals)',
    description:
      'Since 1978, the Asilah International Cultural Moussem has transformed this whitewashed Atlantic town into one of Morocco\'s most important cultural events. Each year, international and Moroccan artists paint new murals directly on the medina walls, creating an ever-evolving open-air gallery. The festival program includes art exhibitions in restored palaces and galleries, musical performances spanning traditional Andalusi to contemporary, poetry readings by Arabic and international poets, and intellectual forums discussing art, culture, and society. Asilah itself is one of Morocco\'s most photogenic small towns, with Portuguese-era ramparts, blue-and-white painted houses, and Atlantic sunset views from the sea walls. The festival typically runs for several weeks across July and August.',
    insiderTip:
      'The best time to visit is during the mural painting sessions when you can watch artists work and interact with them. The medina is small enough to explore in half a day but atmospheric enough to warrant 2-3 days. Stay at a riad within the medina walls (from 400 MAD/night). The beach north of the medina is beautiful and usually less crowded than those in Agadir or Essaouira. Asilah is an easy 45-minute train ride from Tangier (from 25 MAD). Combine with Tangier for a northern cultural escape.',
  },
  {
    name: 'Chefchaouen Mountain Retreat',
    icon: Camera,
    category: 'Mountain Town & Photography',
    location: 'Chefchaouen',
    duration: '2-4 days',
    cost: 'From 300 MAD/day',
    description:
      'While Morocco\'s lowlands bake, the blue-washed mountain town of Chefchaouen perched at 660m in the Rif Mountains offers a cooler, calmer alternative. August temperatures here range from 22-30°C — a world away from Marrakech\'s 42°C. The medina\'s blue-painted walls, terracotta rooftops, and Rif Mountain backdrop create one of Morocco\'s most photographed settings. Beyond the Instagram-famous alleys, Chefchaouen offers genuine Rif Mountain culture: hashish-country hospitality, Andalusian-influenced architecture, local cheeses and goat tagines, and access to the spectacular Akchour waterfall and God\'s Bridge hikes in the nearby Talassemtane National Park.',
    insiderTip:
      'Photograph the medina at dawn (6-7 AM) for the best light and empty streets — by 10 AM tour groups arrive. The Spanish Mosque hike (30 minutes uphill) offers the classic panoramic view of the blue medina against green mountains — go for sunset. Akchour waterfalls are a 2-hour hike from a parking area 30 minutes outside town (from 80 MAD taxi return). Stay in the medina at a traditional riad for the full experience. The Place Outa el-Hammam main square has excellent evening dining with mountain views. August is busy but manageable — Chefchaouen handles crowds better than bigger cities.',
  },
  {
    name: 'Ifrane & Middle Atlas Forests',
    icon: TreesIcon,
    category: 'Nature & Cool Escape',
    location: 'Ifrane, Azrou, Ain Leuh',
    duration: '2-3 days',
    cost: 'From 350 MAD/day',
    description:
      'Morocco\'s most unexpected destination: a Swiss-style mountain town surrounded by cedar forests at 1,655m elevation. Ifrane — nicknamed "Little Switzerland" — features European-style chalets, manicured gardens, and August temperatures that rarely exceed 28°C while the rest of Morocco roasts. Nearby Azrou is famous for its cedar forest home to wild Barbary macaques (the only primates native to North Africa). The surrounding Middle Atlas region offers lakes (Dayet Aoua, Aguelmame Sidi Ali), waterfall hikes, and rolling highland pastures that feel more like the Alps than Africa. Moroccan families flock here in August for the cool air, making it lively but not overwhelming.',
    insiderTip:
      'The Barbary macaques at the Cedre Gouraud cedar forest near Azrou are best seen in the early morning or late afternoon when they descend from the trees. Do not feed them — it is harmful and they can be aggressive. Ifrane has Morocco\'s only university campus with a Western-style layout, good cafes, and a clean, orderly atmosphere. Lake Dayet Aoua (20 minutes from Ifrane) is a peaceful picnic spot surrounded by oak forests. Stay at the Michlifen Ifrane Suites & Spa for luxury (from 2,000 MAD/night) or in charming local guesthouses (from 400 MAD). The town is 2 hours from Fes and makes an excellent cool day trip or overnight escape.',
  },
  {
    name: 'Atlantic Coast Beach Circuit',
    icon: Waves,
    category: 'Beach & Summer Living',
    location: 'Agadir, Taghazout, Essaouira, Mirleft',
    duration: '5-10 days',
    cost: 'From 400 MAD/day',
    description:
      'August is peak beach season and Morocco\'s Atlantic coast delivers with a string of diverse beach destinations. Agadir offers resort-style comfort on a 10 km golden beach with the warmest water on the Atlantic coast (21-22°C). Taghazout provides surf culture with cliff-top yoga, organic smoothies, and sunset sessions. Essaouira combines medina character with beach and wind sports. Further south, Mirleft sits on dramatic red cliffs above empty beaches, and Sidi Ifni offers a time-warp colonial atmosphere. August is Moroccan holiday season, so beaches are lively with families, beach football, and evening promenades — an authentic experience of how Moroccans enjoy summer.',
    insiderTip:
      'August is busy — book coastal accommodation 4-6 weeks ahead for popular towns. Taghazout and Sidi Kaouki offer more laid-back alternatives to crowded Agadir. For the quietest beaches, head south: Mirleft, Sidi Ifni, and Legzira (famous rock arches) are less discovered by mass tourism. Paradise Valley inland from Taghazout is an essential day trip — natural rock pools fed by a freshwater river in a palm-lined gorge (from 150 MAD taxi return). Evening beach walks in Moroccan towns are a cultural experience — join the paseo (promenade) tradition. Fresh seafood at beachside shacks runs from 50 MAD for grilled sardines.',
  },
  {
    name: 'High Atlas Trekking',
    icon: Mountain,
    category: 'Adventure & Trekking',
    location: 'Imlil, Toubkal, Ait Bougmez',
    duration: '2-6 days',
    cost: 'From 500 MAD/day (guided trek with meals)',
    description:
      'The High Atlas in August offers clear skies, snow-free trails, and temperatures that feel like spring while the lowlands swelter. Jebel Toubkal (4,167m), North Africa\'s highest peak, is fully accessible with no snow or ice below the summit. The classic 2-day ascent from Imlil via the Toubkal Refuge is Morocco\'s most popular trek and August provides the most reliable conditions. For a less crowded alternative, the Ait Bougmez Valley (the "Happy Valley") in the Central High Atlas offers 3-5 day treks through terraced farming villages, walnut groves, and high passes with barely another tourist in sight. The M\'Goun Traverse remains one of Morocco\'s great multi-day adventures.',
    insiderTip:
      'Start hiking by 6 AM to avoid afternoon heat even at altitude — the sun is very intense at 3,000m+. For Toubkal, the Refuge du Toubkal (3,207m) is basic — bring a sleeping bag liner and earplugs. The sunrise from the summit is breathtaking. If Toubkal feels too touristy, hire a guide for the M\'Goun Massif (4,068m) — it is Morocco\'s second highest peak with a fraction of the foot traffic. Guesthouses in Imlil village offer comfortable pre-trek stays (from 300 MAD with dinner and breakfast). August nights in the mountains drop to 5-10°C above 3,000m — pack warm layers despite the summer date.',
  },
  {
    name: 'Moulay Idriss & Spiritual Morocco',
    icon: Star,
    category: 'Culture & Pilgrimage',
    location: 'Moulay Idriss Zerhoun, Volubilis',
    duration: '1-2 days',
    cost: 'From 150 MAD (transport + entry fees)',
    description:
      'The holy town of Moulay Idriss Zerhoun, draped over two green hills near Meknes, is Morocco\'s most important pilgrimage site — the resting place of Moulay Idriss I, who brought Islam to Morocco in the 8th century. August may see the annual Moussem (pilgrimage festival) of Moulay Idriss, attracting thousands of pilgrims for days of prayer, music, and celebration (exact dates follow the Islamic calendar). Even outside the Moussem, the town is a fascinating glimpse into spiritual Morocco with its sacred tomb complex, panoramic hilltop views, and a slower pace of life. Combine with the Roman ruins of Volubilis just 5 km away — Morocco\'s best-preserved archaeological site with extraordinary mosaics.',
    insiderTip:
      'Non-Muslims cannot enter the tomb sanctuary but the surrounding medina is open to all and deeply atmospheric. The town only opened to overnight tourists in 2005 — stay at Dar Zerhoune or Scorpion House for roof-terrace views over the sacred valley (from 500 MAD/night). Volubilis is best visited in the early morning (opens at 8:30 AM) to avoid heat — the site has no shade. The Moussem dates shift with the Islamic calendar — ask locally about 2026 timing. Grand taxi from Meknes to Moulay Idriss costs from 15 MAD per person, making this an easy day trip.',
  },
] as const;

/* ===============================================================
   DATA: WHAT TO DO BY DESTINATION
   =============================================================== */

const destinationGuide = [
  {
    destination: 'Essaouira',
    icon: Wind,
    rating: 'Excellent',
    whyVisit: 'Coolest major coast city (22-26°C). Atlantic breezes, windy but perfect for wind sports and medina culture.',
    mustDo: 'Medina ramparts, wind sports, port fish grills, gallery browsing, Sidi Kaouki day trip',
  },
  {
    destination: 'Chefchaouen',
    icon: Camera,
    rating: 'Excellent',
    whyVisit: 'Cool blue mountain town (22-30°C). Photography paradise, Rif trekking, authentic culture.',
    mustDo: 'Blue medina at dawn, Akchour waterfalls, Spanish Mosque sunset, local goat cheese tasting',
  },
  {
    destination: 'Agadir & Taghazout',
    icon: Waves,
    rating: 'Very Good (busy)',
    whyVisit: 'Beach capital in peak season (25-29°C). Warm ocean, surf, yoga. Very crowded — book ahead.',
    mustDo: 'Taghazout surf, Paradise Valley, beach sunset, Souss-Massa birdwatching',
  },
  {
    destination: 'Ifrane & Azrou',
    icon: TreesIcon,
    rating: 'Excellent',
    whyVisit: 'Morocco\'s coolest corner (20-28°C). Cedar forests, Barbary macaques, lake escapes.',
    mustDo: 'Barbary macaque forest, Lake Dayet Aoua, Ifrane town walk, Ain Leuh cascades',
  },
  {
    destination: 'Marrakech',
    icon: AlertTriangle,
    rating: 'Challenging (extreme heat)',
    whyVisit: 'Very hot (35-42°C) but quieter than usual. Riad deals available. Mornings and evenings only.',
    mustDo: 'Souks at dawn, museum midday, hammam, Jemaa el-Fna after 8 PM, mountain day trip',
  },
  {
    destination: 'Sahara Desert',
    icon: AlertTriangle,
    rating: 'Avoid',
    whyVisit: 'Dangerously hot (35-48°C). Worst month for desert visits. Plan for spring or autumn instead.',
    mustDo: 'Do not visit. Book a March-May or October-November desert trip instead.',
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
      'Lightest possible clothing: linen, cotton, loose-fitting',
      'White or light-colored clothing to reflect heat',
      'SPF 50+ sunscreen — bring enough for entire trip',
      'Wide-brimmed hat and quality UV sunglasses',
      'Insulated water bottle to keep water cool',
      'Swimwear and quick-dry beach towel',
      'Light windbreaker for Essaouira and mountain evenings',
      'Warm layer if visiting Atlas Mountains (nights drop to 10°C)',
    ],
  },
  {
    icon: DollarSign,
    title: 'Budget Expectations',
    tips: [
      'Coastal accommodation: from 400 MAD (peak season prices)',
      'Mountain guesthouses: from 350 MAD with meals',
      'Interior city riads: from 200 MAD (heat-discount season)',
      'Meals: from 30 MAD (street food) to 400 MAD (fine dining)',
      'August is the most expensive month on the coast',
      'Book 4-6 weeks ahead for popular beach towns',
      'Mountain destinations are more affordable than coast',
      'Seasonal pricing can change — confirm before booking',
    ],
  },
  {
    icon: Shield,
    title: 'Health & Safety',
    tips: [
      'Drink 3-4 liters of water daily — dehydration is the top risk',
      'Avoid outdoor activity 12-5 PM in interior cities',
      'Recognize heat stroke: confusion, dry skin, rapid pulse',
      'Carry oral rehydration salts — available at all pharmacies',
      'Eat light meals: salads, fruit, fresh juices',
      'UV index in August exceeds 10 — extreme sun exposure risk',
      'Ocean currents can be strong — swim where locals swim',
      'Pharmacies in all towns stock sun care and basic medications',
    ],
  },
  {
    icon: Users,
    title: 'Crowds & Culture',
    tips: [
      'August is peak Moroccan holiday season — coast is packed',
      'Book coastal accommodation 4-6 weeks minimum ahead',
      'Beach culture is family-oriented — evenings are busiest',
      'Evening promenading tradition peaks in summer — join in',
      'Modest swimwear is respectful at public beaches',
      'Interior cities are paradoxically quieter — potential deals',
      'Tipping: 10-15% in restaurants, 20-50 MAD for guides',
      'Be patient — August crowds mean slower service everywhere',
    ],
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARIES
   =============================================================== */

const sampleItineraries = [
  {
    title: '7-Day Summer Survival Itinerary',
    description: 'Coast beaches, mountain cool, and a strategic city visit',
    days: [
      { day: 1, location: 'Essaouira', activity: 'Arrive, medina walk, ramparts sunset, port fish dinner' },
      { day: 2, location: 'Essaouira', activity: 'Beach morning, wind sports or gallery visits, evening souk' },
      { day: 3, location: 'Taghazout', activity: 'Drive south, surf lesson, Paradise Valley afternoon' },
      { day: 4, location: 'Taghazout', activity: 'Morning surf, yoga, beach day, cliff-top sunset dinner' },
      { day: 5, location: 'Marrakech', activity: 'Drive to Marrakech, evening only: souks and Jemaa el-Fna' },
      { day: 6, location: 'Atlas Mountains', activity: 'Day trip to Ourika Valley or Imlil, waterfalls, mountain lunch' },
      { day: 7, location: 'Marrakech', activity: 'Early morning final shopping, museum, departure' },
    ],
  },
  {
    title: '6-Day Northern Cool Escape',
    description: 'Art, mountains, and culture in Morocco\'s cooler north',
    days: [
      { day: 1, location: 'Tangier', activity: 'Arrive, Kasbah medina, new marina, Cafe Hafa sunset' },
      { day: 2, location: 'Asilah', activity: 'Train to Asilah, Arts Festival, mural walks, beach afternoon' },
      { day: 3, location: 'Chefchaouen', activity: 'Drive to Chefchaouen, afternoon blue medina exploration' },
      { day: 4, location: 'Chefchaouen', activity: 'Akchour waterfalls morning hike, Spanish Mosque sunset' },
      { day: 5, location: 'Ifrane', activity: 'Drive to Ifrane via Fes, cedar forests, Barbary macaques' },
      { day: 6, location: 'Fes', activity: 'Morning medina tour (before heat), afternoon departure' },
    ],
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'Is August the worst time to visit Morocco?',
    answer: 'No, but it requires the most planning. August is the hottest month and the busiest on the coast, making it challenging but far from impossible. The Atlantic coast and Atlas Mountains offer wonderful summer experiences. Chefchaouen, Essaouira, Ifrane, and the High Atlas are all excellent in August. The key is to avoid interior cities during midday and skip the Sahara entirely. For travelers who love beach culture, surf, mountains, and do not mind warmth, August delivers a genuinely enjoyable trip. It is the hardest month for first-timers trying to see "everything" but perfect for focused coast or mountain itineraries.',
  },
  {
    question: 'How hot is Marrakech in August?',
    answer: 'Marrakech in August is extreme: daytime highs regularly reach 40-42°C, occasionally touching 45°C during heatwaves. Nighttime lows only drop to 22-25°C, providing limited relief. The medina\'s narrow alleys can feel even hotter due to trapped heat and lack of airflow. If you visit, restrict outdoor activities to early morning (8-11 AM) and evening (after 6 PM). Use midday hours for air-conditioned museums (Musee Yves Saint Laurent, Photography Museum), hammam visits, or pool time at your riad. A day trip to the Ourika Valley in the Atlas offers 10-15°C cooler temperatures and is strongly recommended.',
  },
  {
    question: 'Which beaches are best in August?',
    answer: 'Essaouira Beach: best for wind sports and medina culture (breezy, 22-26°C). Agadir: best for families and resort-style beach (10 km sand, calm water, 25-29°C but crowded). Taghazout: best for surf culture and laid-back vibes (great cafes, consistent waves). Mirleft: best for dramatic clifftop scenery and emptier beaches. Sidi Kaouki: best for bohemian atmosphere and beginner surf. Al Hoceima: best for calm Mediterranean swimming (warmest water at 23-25°C). Legzira: best for dramatic rock arches and photography. All coast destinations are busy in August — Mirleft and Sidi Ifni are the quietest options.',
  },
  {
    question: 'Is Chefchaouen good in August?',
    answer: 'Chefchaouen is one of August\'s best destinations. At 660m elevation in the Rif Mountains, it enjoys temperatures of 22-30°C — significantly cooler than lowland cities. The blue medina is stunning in summer light (photograph at dawn for the best results and empty streets). The Akchour waterfalls hike through Talassemtane National Park is refreshing with swimming pools at the base. The town has excellent small riads, rooftop restaurants with mountain views, and a genuine Rifian cultural character. It is busier than spring but handles crowds well. The drive from Tangier or Fes takes about 3-4 hours.',
  },
  {
    question: 'Should I visit the Sahara Desert in August?',
    answer: 'Absolutely not. August Sahara temperatures reach 45-48°C during the day and sand surface temperatures can exceed 70°C. These are genuinely dangerous conditions — heat stroke is a serious risk, and no desert experience is worth endangering your health. Desert camps become furnace-like tents. Camels suffer in these conditions too. Even air-conditioned hotels near the dunes offer little reason to visit when stepping outside is painful. Save your desert experience for the perfect conditions of March-May or October-November when you can fully enjoy camel treks, desert camps, stargazing, and sunrise dune walks.',
  },
  {
    question: 'How far in advance should I book for August?',
    answer: 'August is Morocco\'s peak tourism month for both domestic and international visitors. For coastal destinations (Agadir, Essaouira, Asilah, Taghazout, Mediterranean beaches), book accommodation 4-6 weeks ahead minimum. Popular riads and boutique hotels sell out. For Chefchaouen and mountain destinations, 2-3 weeks ahead is usually sufficient. For Marrakech and Fes, less advance booking is needed as the heat keeps tourist numbers lower — you may even find last-minute deals. Flights to Morocco are at peak prices in August — book 2-3 months ahead for the best fares. Car rental demand is high — reserve ahead.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-july',
    title: 'Morocco in July',
    description: 'Sister summer month: similar conditions with Festival Timitar.',
    icon: Sun,
  },
  {
    href: '/best-beaches-morocco',
    title: 'Best Beaches',
    description: 'Complete guide to Atlantic and Mediterranean beaches.',
    icon: Waves,
  },
  {
    href: '/chefchaouen',
    title: 'Chefchaouen Guide',
    description: 'The blue city in the mountains — perfect August escape.',
    icon: Camera,
  },
  {
    href: '/atlas-mountains',
    title: 'Atlas Mountains',
    description: 'Cool trekking, waterfalls, and mountain villages.',
    icon: Mountain,
  },
  {
    href: '/morocco-budget-travel',
    title: 'Budget Travel',
    description: 'Save money even during peak August prices.',
    icon: DollarSign,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInAugustPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Morocco Atlantic coast in August with golden beach, summer sun, and coastal town atmosphere"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Monthly Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Visiting Morocco in August
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            The hottest month demands the smartest plan. Atlantic breezes, mountain coolness,
            and art-filled medinas await those who know where to look.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <Thermometer className="w-4 h-4" /> 23-42°C varies
            </span>
            <span className="flex items-center gap-1">
              <Waves className="w-4 h-4" /> Peak beach season
            </span>
            <span className="flex items-center gap-1">
              <Palette className="w-4 h-4" /> Asilah Arts Festival
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="w-4 h-4" /> Mountain escapes
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
            <span className="text-[var(--text-primary)] font-medium">Morocco in August</span>
          </nav>
        </div>
      </div>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              August: Morocco&apos;s Hottest Month, Smartest Choices
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              August pushes Morocco to its thermal limits. Interior cities shimmer in heat haze, the
              Sahara becomes a furnace, and the entire country migrates to the coast. But this is also
              when Morocco reveals its most refreshing side: the Atlantic coast hums with family beach
              culture, Asilah hosts its legendary arts festival, Chefchaouen glows blue against green
              mountain slopes, and the Atlas peaks offer pristine trekking in cool, clear air. August
              is not the easiest month to visit Morocco, but it can be one of the most rewarding —
              if you follow the cool.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-moroccan p-6 text-center">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Packed Beaches
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccan holiday season means lively, crowded coast towns. Book ahead for authentic summer atmosphere.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Asilah Arts Festival
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                International artists paint medina walls, creating an ever-evolving open-air gallery by the Atlantic.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mountain Cool
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Chefchaouen, Ifrane, and the High Atlas: 10-15°C cooler than the lowlands. Your essential escape valve.
              </p>
            </div>
          </div>

          {/* Heat Warning Box */}
          <div className="card-moroccan p-6 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  August Heat Warning
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  August is Morocco&apos;s joint-hottest month. <strong>Sahara Desert (45-48°C+):</strong> Do not visit
                  under any circumstances. <strong>Interior cities (35-42°C):</strong> Marrakech, Fes, and Meknes are
                  only safe for outdoor activity before 11 AM and after 6 PM. Stay hydrated (3-4 liters daily), wear
                  sun protection at all times, and ensure your accommodation has air conditioning and/or a pool.
                  Heat exhaustion and heat stroke are genuine health risks in August.
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
            August Weather Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The gap between coast and interior is at its widest. Let temperature guide your route.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherByRegion.map((region) => {
              const RegionIcon = region.icon;
              const isWarning = region.highlight.includes('Avoid') || region.highlight.includes('Extreme');
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
            Top Experiences in Morocco in August
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Arts festivals, blue mountain towns, cedar forests, and Atlantic beach culture — August has more depth than the heat suggests.
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
            Where to Go in Morocco in August
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Coast and mountains are your best friends. Interior cities need strategy. Desert is off-limits.
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
            August Itinerary Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two heat-proof routes designed to maximize comfort and experiences in the hottest month.
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
            Practical Tips for August Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Survival guide for Morocco&apos;s most demanding month.
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
            Ready for Morocco This August?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the art-filled medina of Asilah and the blue dreamscape of Chefchaouen to the cedar
            forests of Ifrane and the golden beaches of Taghazout, August offers unforgettable experiences
            for those who follow the cool. Let Morocco&apos;s coast and mountains be your summer sanctuary.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Wind className="w-5 h-5" />
              Essaouira Guide
            </Link>
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Camera className="w-5 h-5" />
              Chefchaouen Guide
            </Link>
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
