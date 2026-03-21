import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Sun,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  Thermometer,
  CheckCircle,
  AlertTriangle,
  Users,
  Flower2,
  Calendar,
  Mountain,
  Camera,
  CloudSun,
  Footprints,
  Compass,
  BookOpen,
  Luggage,
  Shield,
  MessageCircleQuestion,
  TreeDeciduous,
  Wind,
  Shirt,
  Binoculars,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-spring-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Spring Travel Guide 2026 | March, April & May Weather, Festivals & Blossoms',
  description:
    'Plan your Morocco spring trip for March, April, or May 2026. Almond and cherry blossoms in the Atlas, rose harvest in Dades Valley, Kelaat M\'Gouna Rose Festival, spring hiking, wildflowers, desert weather windows, Easter travel tips, Ramadan considerations, and packing advice.',
  keywords: [
    'Morocco spring travel',
    'Morocco spring 2026',
    'Morocco March April May',
    'Morocco spring weather',
    'almond blossoms Morocco',
    'cherry blossoms Atlas Mountains',
    'Dades Valley rose harvest',
    'Kelaat M\'Gouna Rose Festival',
    'Morocco spring hiking',
    'Morocco wildflowers',
    'Morocco desert spring',
    'Easter in Morocco',
    'Ramadan travel Morocco',
    'Morocco spring festivals',
    'Morocco spring packing list',
    'best time visit Morocco spring',
    'Morocco shoulder season',
  ],
  openGraph: {
    title: 'Morocco Spring Travel Guide 2026 | March, April & May Weather, Festivals & Blossoms',
    description:
      'Complete guide to visiting Morocco in spring. Almond and cherry blossoms, Dades Valley rose harvest, Kelaat M\'Gouna festival, Atlas hiking, Sahara weather, Easter travel, Ramadan tips, and what to pack for March through May.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-spring-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Pink almond blossoms framing snow-capped Atlas Mountains in Morocco during spring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Spring Travel Guide 2026 | Blossoms, Hiking & Festivals',
    description:
      'March to May in Morocco: almond blossoms, rose harvest, spring hiking, ideal desert weather, lighter crowds, and festival season. Complete planning guide.',
    images: [`${BASE_URL}/images/hero-spring-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'What is the weather like in Morocco during spring?',
    a: 'Spring weather varies by region. Coastal cities like Essaouira and Agadir see daytime highs of 20-24 C with cool ocean breezes. Interior cities like Marrakech and Fes range from 22-30 C, with April and May being warmer. The High Atlas still has snow on peaks above 2,500 meters. The Sahara desert is ideal at 25-32 C, before the punishing summer heat sets in. Rain is possible in March and early April, particularly in the north.',
  },
  {
    q: 'When is the rose harvest in Dades Valley?',
    a: 'The Damask rose harvest in the Dades Valley and Kelaat M\'Gouna region typically runs from mid-April through mid-May, depending on rainfall and temperatures that year. Peak bloom usually falls in the first two weeks of May. The annual Rose Festival in Kelaat M\'Gouna takes place in mid-May. Seasonal timing can shift by one to two weeks in either direction.',
  },
  {
    q: 'Is Ramadan a good time to visit Morocco?',
    a: 'Morocco remains welcoming to visitors during Ramadan. Many restaurants in tourist areas stay open during daylight hours, though local eateries may close until iftar. Riads and hotels serve meals normally. Be respectful by not eating, drinking, or smoking in public during fasting hours. Evening atmosphere is lively, with markets and cafes bustling after sunset. Medina crowds thin during the day, which some travelers appreciate.',
  },
  {
    q: 'Can I see almond blossoms in Morocco?',
    a: 'Yes. Almond trees bloom from late January through early March, with peak bloom in mid-February. The Tafraout region in the Anti-Atlas is the most famous spot, where entire valleys turn pink and white. The Ameln Valley near Tafraout hosts an almond blossom festival during peak bloom. By late March the blossoms have mostly finished, replaced by green leaves.',
  },
  {
    q: 'What should I pack for spring in Morocco?',
    a: 'Pack layers. Mornings and evenings can be cool (10-15 C), while midday reaches 25-30 C in interior cities. Bring a light jacket or fleece, comfortable walking shoes with grip for medina cobblestones, sunscreen with SPF 50, sunglasses, a hat, and a scarf for mosque visits and windy days. If you plan to hike the Atlas, bring proper hiking boots, a rain shell, and warm layers for altitude.',
  },
  {
    q: 'Is spring a good time for desert trips to the Sahara?',
    a: 'Spring is one of the two best seasons for the Sahara (the other being autumn). March through May offers daytime temperatures of 25-32 C, warm enough for a camel trek but far cooler than the 45-50 C summer heat. Nights in the desert can still drop to 8-12 C in March, so bring a warm layer for stargazing. April and May are ideal, though sandstorms (chergui winds) occasionally occur.',
  },
  {
    q: 'Are there crowds in Morocco during spring?',
    a: 'Spring is a shoulder season with noticeably fewer tourists than the peak October-November and Christmas-New Year periods. March sees the lightest crowds. April picks up around Easter week, particularly in Marrakech and the imperial cities. May is busier but still manageable compared to autumn. Accommodation prices are typically 15-25% lower than peak season, and you rarely need to queue at major sights.',
  },
  {
    q: 'What spring festivals happen in Morocco?',
    a: 'Key spring festivals include the Almond Blossom Festival in Tafraout (February-March), the Kelaat M\'Gouna Rose Festival (mid-May), the Gnaoua World Music Festival in Essaouira (late June, sometimes late May), and various local moussems (religious gatherings). The Fes Festival of World Sacred Music typically falls in May or June. Dates shift annually, so confirm specific dates closer to your trip.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Spring Travel Guide 2026',
  description:
    'Comprehensive guide to visiting Morocco in spring (March, April, May) covering weather, almond and cherry blossoms, Dades Valley rose harvest, Kelaat M\'Gouna Rose Festival, hiking, wildflowers, desert travel, Easter, Ramadan, and packing.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-spring-morocco.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Spring Travel Guide', item: PAGE_URL },
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
   DATA: MONTHLY WEATHER OVERVIEW
   ================================================================ */

const monthlyWeather = [
  {
    month: 'March',
    icon: CloudSun,
    coastal: '18-22 C',
    interior: '20-26 C',
    atlas: '8-16 C',
    desert: '22-28 C',
    rain: 'Moderate (4-6 rainy days)',
    highlights: 'Late almond blossoms in the south, green countryside, lightest tourist crowds of spring, excellent hiking conditions in lower Atlas.',
  },
  {
    month: 'April',
    icon: Flower2,
    coastal: '19-23 C',
    interior: '22-28 C',
    atlas: '10-18 C',
    desert: '25-32 C',
    rain: 'Low (2-4 rainy days)',
    highlights: 'Peak wildflower season, cherry blossoms in Sefrou, Easter week, comfortable desert temperatures, Atlas snow melt fills rivers and waterfalls.',
  },
  {
    month: 'May',
    icon: Sun,
    coastal: '20-24 C',
    interior: '26-32 C',
    atlas: '14-22 C',
    desert: '28-36 C',
    rain: 'Very low (1-2 rainy days)',
    highlights: 'Rose harvest in Dades Valley, Kelaat M\'Gouna Rose Festival, long daylight hours, warm swimming conditions on Atlantic coast, lush mountain valleys.',
  },
] as const;

/* ================================================================
   DATA: SPRING BLOSSOMS & NATURAL EVENTS
   ================================================================ */

const blossomEvents = [
  {
    name: 'Almond Blossoms',
    icon: TreeDeciduous,
    when: 'Late January through early March',
    where: 'Tafraout (Anti-Atlas), Ameln Valley, Ourika Valley',
    description:
      'Entire valleys transform into carpets of pink and white as almond trees burst into flower. The Tafraout region is the epicenter, with the Ameln Valley offering the most photogenic groves against red granite boulders. The annual Almond Blossom Festival draws visitors to Tafraout during peak bloom, typically mid-February.',
    tip: 'By late March, the blossoms are finished. If arriving in March, head to higher-altitude groves where bloom comes later.',
  },
  {
    name: 'Cherry Blossoms',
    icon: Flower2,
    when: 'Late March through mid-April',
    where: 'Sefrou (near Fes), Imilchil, Middle Atlas highlands',
    description:
      'The town of Sefrou, 30 kilometers south of Fes, is Morocco\'s cherry capital. Terraced orchards covering the surrounding hillsides bloom in soft white from late March onward. The annual Cherry Festival in Sefrou (usually June, during harvest) is one of Morocco\'s oldest agricultural celebrations. The Middle Atlas highlands around Imilchil also have spectacular cherry bloom at higher elevations.',
    tip: 'Combine a Sefrou cherry blossom day trip with a visit to Bhalil, a troglodyte village just 5 km away.',
  },
  {
    name: 'Damask Rose Harvest',
    icon: Sparkles,
    when: 'Mid-April through mid-May',
    where: 'Dades Valley, Kelaat M\'Gouna, Boumalne Dades',
    description:
      'The Valley of Roses stretches along the Dades River between Kelaat M\'Gouna and Boumalne Dades. Thousands of hectares of Damask roses (Rosa damascena) are hand-picked at dawn when the oil content is highest. The petals are distilled into rose water and rose essential oil at local cooperatives. Visitors can watch the harvest, visit distilleries, and buy rose products directly from producers at prices far below what tourist shops in Marrakech charge.',
    tip: 'Rose water from the source costs from 30 MAD per liter. In Marrakech souks, the same quality sells for from 80 MAD. Buy directly from cooperatives.',
  },
  {
    name: 'Wildflower Meadows',
    icon: Flower2,
    when: 'March through May (peak in April)',
    where: 'High Atlas foothills, Ourika Valley, Rif Mountains, Middle Atlas',
    description:
      'Spring rains trigger extraordinary wildflower blooms across Morocco\'s mountains and valleys. The Ourika Valley south of Marrakech fills with poppies, irises, and orchids. The Middle Atlas cedar forests are carpeted in wild lavender. The Rif Mountains in the north see wild narcissus and daffodils. Even the roadsides between cities become colorful with chamomile, marigolds, and broom.',
    tip: 'The Ourika Valley is a 45-minute drive from Marrakech and makes an easy half-day trip during wildflower season.',
  },
] as const;

/* ================================================================
   DATA: SPRING FESTIVALS
   ================================================================ */

const springFestivals = [
  {
    name: 'Kelaat M\'Gouna Rose Festival',
    when: 'Mid-May (typically 2nd or 3rd weekend)',
    where: 'Kelaat M\'Gouna, Dades Valley',
    description:
      'Morocco\'s most fragrant festival celebrates the end of the rose harvest. Parades of decorated floats draped in roses, folk music, Berber dance troupes, a rose queen pageant, and a lively souk selling rose products. The scent of fresh petals fills the entire town. The festival runs for three days and draws Moroccan and international visitors.',
    cost: 'Free entry to most events. Accommodation books up weeks in advance.',
  },
  {
    name: 'Fes Festival of World Sacred Music',
    when: 'Late May or early June',
    where: 'Fes, various venues including Bab Makina and Dar Batha',
    description:
      'One of Morocco\'s premier cultural events, bringing together Sufi musicians, gospel choirs, Indian classical performers, and artists from faith traditions worldwide. Concerts take place in historic venues within the Fes medina. Free open-air performances supplement the ticketed main stage shows. The festival has run since 1994 and draws a sophisticated international audience.',
    cost: 'From 200 MAD per concert for ticketed shows. Free events available daily.',
  },
  {
    name: 'Sefrou Cherry Festival',
    when: 'June (harvest season)',
    where: 'Sefrou, 30 km south of Fes',
    description:
      'Running since 1920, this is one of North Africa\'s oldest agricultural festivals. While the main festival falls in June during cherry harvest, the blossom season in late March and April is equally worth visiting. Cherry orchards on terraced hillsides provide a quieter, less-touristed alternative to Japan\'s famous hanami season.',
    cost: 'Free. Cherries at local markets from 20 MAD per kilogram during harvest.',
  },
  {
    name: 'Gnaoua World Music Festival',
    when: 'Late May or June',
    where: 'Essaouira',
    description:
      'This globally renowned music festival celebrates Gnaoua spiritual music and its fusion with jazz, blues, and world music traditions. Massive free outdoor stages on the beach and harbour draw hundreds of thousands of attendees. Essaouira\'s medina becomes a four-day street party with performances, art exhibitions, and food stalls.',
    cost: 'Main outdoor stages are free. Some indoor concerts from 150 MAD.',
  },
] as const;

/* ================================================================
   DATA: SPRING HIKING ROUTES
   ================================================================ */

const springHikes = [
  {
    name: 'Toubkal Circuit',
    region: 'High Atlas',
    duration: '3-4 days',
    difficulty: 'Challenging',
    season: 'April-May (snow may remain on summit)',
    description:
      'The classic circuit around North Africa\'s highest peak (4,167 m). Spring offers snowmelt waterfalls, wildflowers in lower valleys, and fewer trekkers than autumn. The summit push requires crampons and ice axes until late May. Most trekkers base themselves in Imlil village and hire a licensed guide.',
    cost: 'From 1,500 MAD per day with licensed guide, cook, and mule support.',
  },
  {
    name: 'Ait Bougmez Valley',
    region: 'Central High Atlas',
    duration: '2-3 days',
    difficulty: 'Moderate',
    season: 'March-May',
    description:
      'The "Happy Valley" is a wide, fertile valley surrounded by 3,000-meter peaks. Spring turns the irrigated fields bright green, and almond and walnut trees frame traditional Berber stone villages. The valley is less visited than the Toubkal region and offers a genuine glimpse of rural Atlas life. Day hikes to Agouti Lake and the M\'Goun massif base are popular.',
    cost: 'From 800 MAD per day with local guide and guesthouse stays.',
  },
  {
    name: 'Ourika Valley Day Hike',
    region: 'High Atlas foothills',
    duration: '1 day',
    difficulty: 'Easy to Moderate',
    season: 'March-May',
    description:
      'The most accessible Atlas hike from Marrakech: a 45-minute drive followed by a 2-3 hour walk upstream along the Ourika River to Setti Fatma waterfalls. Spring snowmelt makes the waterfalls thunderous. The trail passes through Berber villages, and the valley floor is covered in wildflowers and herb gardens. Return to Marrakech by late afternoon.',
    cost: 'From 300 MAD for a guided day trip from Marrakech. Seasonal pricing can change.',
  },
  {
    name: 'Dades and Todra Gorges',
    region: 'Eastern High Atlas',
    duration: '1-2 days',
    difficulty: 'Easy to Moderate',
    season: 'March-May',
    description:
      'Walk through two of Morocco\'s most dramatic canyons. The Todra Gorge narrows to just 10 meters wide between 300-meter limestone walls. The Dades Gorge offers a gentler walk through sculpted rock formations and palm-lined riverbeds. Spring brings rushing water from Atlas snowmelt, turning the gorges into natural amphitheaters of sound.',
    cost: 'From 200 MAD for a local guide at each gorge.',
  },
  {
    name: 'Rif Mountains: Chefchaouen to Akchour',
    region: 'Northern Rif',
    duration: '1 day',
    difficulty: 'Moderate',
    season: 'March-May',
    description:
      'A full-day hike from the Blue City to the Akchour waterfalls and the natural stone bridge (Pont de Dieu). The Rif Mountains in spring are intensely green, with cannabis terraces, cork oak forests, and wildflower meadows. The trail follows a river valley and rewards you with a 20-meter cascade and a dramatic rock arch spanning a gorge.',
    cost: 'From 400 MAD with a local guide from Chefchaouen.',
  },
] as const;

/* ================================================================
   DATA: PACKING LIST
   ================================================================ */

const packingItems = [
  {
    category: 'Clothing',
    icon: Shirt,
    items: [
      'Lightweight layers: long-sleeve shirts and light pants',
      'Light fleece or packable down jacket for evenings and Atlas',
      'Rain shell or compact umbrella (March and early April)',
      'Comfortable walking shoes with good grip for medina cobblestones',
      'Hiking boots if planning Atlas treks',
      'Scarf or shawl for mosque visits, windy days, and sun protection',
      'Swimwear for hotel pools and Atlantic beaches',
    ],
  },
  {
    category: 'Sun & Health',
    icon: Sun,
    items: [
      'Sunscreen SPF 50 (UV is strong, even on cloudy days)',
      'Quality sunglasses with UV protection',
      'Wide-brimmed hat or cap',
      'Reusable water bottle (stay hydrated in dry inland air)',
      'Basic first-aid kit with anti-diarrheal and electrolyte sachets',
      'Insect repellent for evening outdoor dining and rural areas',
    ],
  },
  {
    category: 'Desert & Outdoor',
    icon: Compass,
    items: [
      'Warm layer for desert nights (temperatures drop to 8-12 C in March)',
      'Headlamp or small torch for desert camps and medina alleys',
      'Dust mask or bandana for occasional sandstorm days',
      'Daypack for hikes and day trips',
      'Camera with extra batteries (cold desert nights drain batteries)',
    ],
  },
  {
    category: 'Practical',
    icon: Luggage,
    items: [
      'Universal power adapter (Morocco uses European Type C and E plugs)',
      'Small bills in Moroccan Dirhams for tips and market purchases',
      'Portable phone charger (long days of sightseeing)',
      'Paper copies of hotel confirmations and emergency contacts',
      'Zip-lock bags for dusty conditions and beach sand',
    ],
  },
] as const;

/* ================================================================
   DATA: EASTER & RAMADAN TIPS
   ================================================================ */

const easterRamadanTips = [
  {
    title: 'Easter Week Travel',
    icon: Calendar,
    points: [
      'Easter is the busiest week of spring for Marrakech and Fes. Book accommodation at least 6-8 weeks ahead.',
      'Riad prices increase 20-30% during Easter week. Budget hotels fill first.',
      'The Jemaa el-Fnaa square in Marrakech is packed during Easter evenings. Visit in the morning for a calmer experience.',
      'Day trips to the Atlas Mountains, Essaouira, and Ouzoud Waterfalls are less crowded than the cities during Easter.',
      'Domestic flights between Marrakech, Fes, and the Sahara sell out early. Book internal transport before arrival.',
    ],
  },
  {
    title: 'Traveling During Ramadan',
    icon: Shield,
    points: [
      'Ramadan dates shift each year (based on the Islamic lunar calendar). Check the dates for your travel year before booking.',
      'Most tourist-oriented restaurants in Marrakech, Fes, and coastal towns remain open during fasting hours.',
      'Avoid eating, drinking, or smoking in public during daylight hours out of respect. Eat discreetly in your accommodation or in tourist restaurants.',
      'Medinas and souks are quieter during the day, which many travelers consider an advantage for sightseeing.',
      'Evening comes alive: after the iftar (sunset meal), streets fill with families, food stalls open, and the atmosphere is festive.',
      'Some museums and attractions may have shorter opening hours. Verify schedules in advance.',
      'Alcohol is not served in most restaurants during Ramadan, though licensed hotel bars typically remain open.',
    ],
  },
] as const;

/* ================================================================
   DATA: REGION-BY-REGION SPRING HIGHLIGHTS
   ================================================================ */

const regionHighlights = [
  {
    region: 'Marrakech & Surrounds',
    icon: MapPin,
    temp: '22-30 C',
    description:
      'Warm days and cool evenings make Marrakech comfortable for medina exploration. The Jardin Majorelle and Menara Gardens are green and fragrant. Day trips to the Ourika Valley for waterfalls and wildflowers are at their best. The Palmerie is lush after winter rains.',
    mustDo: 'Sunrise hot air balloon ride over the Palmeraie (from 1,500 MAD per person). Seasonal pricing can change.',
  },
  {
    region: 'Fes & Middle Atlas',
    icon: BookOpen,
    temp: '20-28 C',
    description:
      'Fes is at its most pleasant before summer heat sets in. The Middle Atlas lakes (Dayet Aoua, Aguelmam Azigza) are full and surrounded by wildflowers. Cedar forests around Ifrane and Azrou are green, and Barbary macaques are active. The cherry orchards of Sefrou are in bloom.',
    mustDo: 'Day trip to Sefrou cherry orchards and Bhalil cave houses (from 500 MAD with guide and transport).',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    temp: '25-35 C',
    description:
      'Spring is the sweet spot for desert visits. Erg Chebbi (Merzouga) and Erg Chigaga (M\'Hamid) offer warm days without the brutal summer heat. Camel treks, overnight camps, and dune sunrises are comfortable. Sandstorms from the chergui wind occur occasionally in April and May but rarely last more than a day.',
    mustDo: 'Overnight luxury desert camp with camel trek (from 1,200 MAD per person). Seasonal pricing can change.',
  },
  {
    region: 'Atlantic Coast',
    icon: Wind,
    temp: '18-24 C',
    description:
      'Essaouira and Agadir are cooled by Atlantic trade winds, making spring ideal for coastal exploration. The water is still cold (16-18 C) for swimming but perfect for surfing. Taghazout and Imsouane offer consistent spring swells. Essaouira\'s medina is uncrowded and atmospheric.',
    mustDo: 'Surf lessons in Taghazout (from 400 MAD per half-day session including board and wetsuit).',
  },
  {
    region: 'High Atlas Mountains',
    icon: Mountain,
    temp: '8-22 C (altitude dependent)',
    description:
      'Snow retreats to above 3,000 meters by April, opening trekking routes that were closed in winter. Valleys are green, rivers are full, and waterfalls are at maximum flow. Berber villages in the Imlil, Ait Bougmez, and M\'Goun valleys are surrounded by blossoming orchards. This is the finest hiking season.',
    mustDo: 'Guided 2-day trek from Imlil with village homestay (from 1,000 MAD per person including meals).',
  },
  {
    region: 'Dades & Draa Valleys',
    icon: Sparkles,
    temp: '22-30 C',
    description:
      'The rose-growing region between the Atlas and the Sahara reaches its zenith in spring. Palm-lined river valleys, kasbahs, and the dramatic gorges of Todra and Dades are at their most photogenic. The rose harvest transforms the valley into a fragrant corridor of pink. The Draa Valley\'s date palms are vivid green against red earth.',
    mustDo: 'Visit a rose distillery cooperative in Kelaat M\'Gouna (free entry, rose water from 30 MAD per liter).',
  },
] as const;

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoSpringTravelPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-spring-morocco.webp"
          alt="Pink almond blossoms framing snow-capped Atlas Mountains during a Moroccan spring"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 max-w-4xl leading-tight">
            Morocco Spring Travel Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            Blossoms, rose harvests, Atlas hiking, and desert adventures from March through May
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <div className="bg-[var(--surface-muted)] border-b border-[var(--border)]">
        <div className="container-morocco py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--text-primary)] font-medium">Morocco Spring Travel Guide</span>
          </nav>
        </div>
      </div>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <Flower2 className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Spring Is Morocco&apos;s Best-Kept Secret
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              While autumn draws the largest visitor numbers, spring quietly offers Morocco at its most
              beautiful. From March through May, the landscape undergoes a transformation that no other
              season can match. Almond trees paint the Anti-Atlas pink, cherry orchards bloom near Fes,
              wildflowers carpet the High Atlas foothills, and the Dades Valley fills with the intoxicating
              scent of millions of Damask roses being harvested by hand at dawn.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              The weather strikes a balance that summer and winter cannot. Marrakech is warm without the
              oppressive 40-degree heat of July. The Sahara is comfortable for camel treks and overnight
              camps. Atlas trails that were locked under snow in February open up, with waterfalls at full
              power from snowmelt. Coastal towns like Essaouira offer cool breezes and uncrowded beaches.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Spring also means lighter crowds and lower prices than peak season. Hotels and riads that
              charge premium rates in October and November drop prices by 15-25%. Flights from Europe are
              cheaper. Major sights like the Bahia Palace, Volubilis ruins, and Ait Benhaddou feel less
              rushed. For travelers willing to accept occasional rain in March and the possibility of
              Ramadan overlap, spring rewards with experiences that peak-season visitors simply miss.
            </p>
          </div>
        </div>
      </section>

      {/* ── Monthly Weather Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Weather Month by Month
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Temperatures vary significantly between coast, interior, mountains, and desert.
            Plan your itinerary around these regional patterns.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {monthlyWeather.map((m) => {
              const MonthIcon = m.icon;
              return (
                <div key={m.month} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <MonthIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {m.month}
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Coastal cities</span>
                      <span className="font-medium text-[var(--text-primary)]">{m.coastal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Interior cities</span>
                      <span className="font-medium text-[var(--text-primary)]">{m.interior}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">High Atlas</span>
                      <span className="font-medium text-[var(--text-primary)]">{m.atlas}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Sahara</span>
                      <span className="font-medium text-[var(--text-primary)]">{m.desert}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--text-muted)]">Rainfall</span>
                      <span className="font-medium text-[var(--text-primary)]">{m.rain}</span>
                    </div>
                  </div>
                  <div className="border-t border-[var(--border)] pt-3">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <Star className="w-3.5 h-3.5 inline text-[var(--color-gold)] mr-1" />
                      {m.highlights}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Blossoms & Natural Events ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Blossoms, Roses &amp; Wildflowers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s spring bloom calendar runs from almond blossoms in February through the
            rose harvest in May. Here is what blooms when and where to find it.
          </p>

          <div className="space-y-8">
            {blossomEvents.map((event) => {
              const EventIcon = event.icon;
              return (
                <div key={event.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0 mt-1">
                      <EventIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {event.when}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {event.where}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1">
                        <Info className="w-3 h-3 shrink-0" /> {event.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Region-by-Region Highlights ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Highlights by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region of Morocco offers something distinct in spring. Use this breakdown to
            build an itinerary that matches your interests.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionHighlights.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <RegionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {region.region}
                    </h3>
                    <span className="ml-auto text-sm text-[var(--text-muted)] flex items-center gap-1">
                      <Thermometer className="w-3.5 h-3.5" /> {region.temp}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {region.description}
                  </p>
                  <p className="text-xs font-medium text-[var(--color-accent)]">
                    <CheckCircle className="w-3.5 h-3.5 inline mr-1" />
                    {region.mustDo}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Spring Hiking ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Spring Hikes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From easy day walks to multi-day Atlas treks, spring opens trails that winter closes
            and summer makes too hot.
          </p>

          <div className="space-y-6">
            {springHikes.map((hike) => (
              <div key={hike.name} className="card-moroccan overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {hike.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                        <Mountain className="w-3 h-3" /> {hike.region}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" /> {hike.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                        <Binoculars className="w-3 h-3" /> {hike.difficulty}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {hike.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="text-[var(--text-muted)] flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Best: {hike.season}
                    </span>
                    <span className="text-[var(--color-accent)] font-semibold">{hike.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spring Festivals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Festivals &amp; Cultural Events
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s festival calendar peaks in spring and early summer. These events offer
            cultural depth that goes far beyond standard sightseeing.
          </p>

          <div className="space-y-6">
            {springFestivals.map((festival) => (
              <div key={festival.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {festival.name}
                </h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {festival.when}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {festival.where}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                  {festival.description}
                </p>
                <p className="text-xs text-[var(--color-accent)] font-semibold">{festival.cost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Desert in Spring ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Sahara in Spring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Spring is one of the two ideal windows for Sahara travel. Here is what to expect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-[var(--color-gold)]" />
                Temperature Profile
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                March daytime: 22-28 C, nighttime: 8-12 C. April daytime: 25-32 C, nighttime: 12-16 C.
                May daytime: 28-36 C, nighttime: 16-20 C. The temperature swing between day and night
                can exceed 15 degrees, so layering is essential.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Wind className="w-4 h-4 text-[var(--color-gold)]" />
                Sandstorms &amp; Wind
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The chergui (sirocco) wind blows from the southeast, carrying Saharan sand. It occurs
                sporadically in April and May, typically lasting 1-3 days. Desert camps provide shelter,
                and storms rarely cancel trips entirely. Bring a bandana or dust mask for windy days.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--color-gold)]" />
                Photography Conditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Spring light in the Sahara is extraordinary. Lower sun angles in March and April create
                longer shadows on dune ridges, producing dramatic textures. Clear spring skies mean
                exceptional stargazing at desert camps. The Milky Way is visible from both Erg Chebbi
                and Erg Chigaga with minimal light pollution.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-gold)]" />
                Crowd Levels
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Desert camps are noticeably quieter in spring than during the October-December peak.
                Expect to share the dunes with fewer tourists, and camps often have availability for
                upgrades. Merzouga is busier than M&apos;Hamid and Erg Chigaga, which remain off the
                main tourist track year-round.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Easter & Ramadan ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Easter &amp; Ramadan Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two calendar events that shape the spring travel experience. Understanding both
            helps you plan a smoother trip.
          </p>

          <div className="space-y-8">
            {easterRamadanTips.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <SectionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Lighter Crowds & Budget Benefits ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Spring Beats Peak Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fewer visitors, lower prices, and natural beauty that autumn cannot replicate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Lower Accommodation Prices',
                icon: Star,
                text: 'Riads and hotels in Marrakech and Fes drop rates 15-25% compared to October-November peak. Budget riads that charge from 600 MAD per night in autumn often go for from 450 MAD in March and April. Seasonal pricing can change.',
              },
              {
                title: 'Shorter Queues at Sights',
                icon: Clock,
                text: 'Bahia Palace, Saadian Tombs, Volubilis, and the Fes tanneries all have noticeably shorter wait times. You can photograph Ait Benhaddou without crowds in the frame. Museum visits feel unhurried.',
              },
              {
                title: 'Cheaper Flights from Europe',
                icon: Compass,
                text: 'Ryanair, Transavia, and easyJet offer lower fares to Marrakech and Fes in spring compared to autumn and Christmas. Direct flights from London, Paris, and Madrid start from 40-60 EUR one way in March.',
              },
              {
                title: 'Better Light for Photography',
                icon: Camera,
                text: 'Spring light is softer and more golden than summer glare. The green landscapes provide contrast that the brown, dry autumn terrain does not. Desert dunes photograph best under spring skies.',
              },
              {
                title: 'Comfortable Temperatures',
                icon: Thermometer,
                text: 'No 40-degree days in the cities, no freezing mountain nights. Spring sits in the sweet spot: warm enough for outdoor exploration, cool enough for comfortable walking in medinas all day.',
              },
              {
                title: 'Unique Natural Events',
                icon: Flower2,
                text: 'Almond blossoms, cherry blossoms, wildflower meadows, and the rose harvest only happen in spring. These natural spectacles give spring a character that no other season matches.',
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spring Packing Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Morocco&apos;s spring weather demands layers. Mornings start cool, midday gets warm,
            and evenings drop again. Here is what to bring.
          </p>
          <p className="text-center text-xs text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
            Dress modestly in cities and rural areas. Shoulders and knees should be covered when
            visiting mosques (exterior) and traditional neighborhoods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packingItems.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sample Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Spring Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three route ideas built around spring-specific highlights.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                7 Days: Imperial Cities &amp; Atlas Blossoms
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Best for: March &amp; April</p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><span className="font-medium text-[var(--text-primary)]">Days 1-2:</span> Marrakech medina, Jardin Majorelle, sunset at Jemaa el-Fnaa</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 3:</span> Day trip to Ourika Valley for waterfalls and wildflowers</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 4:</span> Drive or train to Fes, evening medina walk</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 5:</span> Fes medina: tanneries, Bou Inania Medersa, street food tour</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 6:</span> Day trip to Sefrou cherry orchards and Bhalil cave houses</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 7:</span> Volubilis Roman ruins and Meknes, return to Fes for departure</p>
              </div>
              <p className="text-xs text-[var(--color-accent)] font-semibold mt-3">Budget estimate: from 6,000 MAD per person (mid-range riads, guided day trips, meals)</p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                10 Days: Rose Valley, Desert &amp; Coast
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Best for: Late April &amp; May</p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><span className="font-medium text-[var(--text-primary)]">Days 1-2:</span> Marrakech exploration and hammam experience</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 3:</span> Drive over Tizi n&apos;Tichka pass to Ait Benhaddou, overnight in Ouarzazate</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 4:</span> Dades Gorge, rose valley cooperatives in Kelaat M&apos;Gouna</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 5:</span> Todra Gorge hike, drive to Merzouga</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 6:</span> Camel trek and overnight luxury desert camp at Erg Chebbi</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 7:</span> Return to Ouarzazate, drive or fly to Marrakech</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 8:</span> Drive to Essaouira (3 hours), afternoon on the ramparts</p>
                <p><span className="font-medium text-[var(--text-primary)]">Days 9-10:</span> Essaouira medina, seafood, optional surf lesson, return to Marrakech</p>
              </div>
              <p className="text-xs text-[var(--color-accent)] font-semibold mt-3">Budget estimate: from 10,000 MAD per person (mid-range to luxury, desert camp, guided transport)</p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                5 Days: Atlas Hiking &amp; Berber Villages
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-3">Best for: April &amp; May</p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><span className="font-medium text-[var(--text-primary)]">Day 1:</span> Marrakech to Imlil, afternoon acclimatization walk</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 2:</span> Trek from Imlil to Tacheddirt via the Tizi n&apos;Tamatert pass, village homestay</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 3:</span> Trek to Setti Fatma through wildflower valleys, waterfall swim</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 4:</span> Rest day in Imlil or optional Toubkal base camp approach</p>
                <p><span className="font-medium text-[var(--text-primary)]">Day 5:</span> Return to Marrakech, afternoon in the medina</p>
              </div>
              <p className="text-xs text-[var(--color-accent)] font-semibold mt-3">Budget estimate: from 4,500 MAD per person (licensed guide, mule support, village homestays, meals)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about traveling to Morocco in spring.
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Weather Guide',
                description: 'Month-by-month weather breakdown for every region with packing tips and seasonal advice.',
                href: '/weather',
                icon: CloudSun,
              },
              {
                title: 'Atlas Mountains Guide',
                description: 'Trekking routes, Berber villages, mountain lodges, and adventure activities in the High Atlas.',
                href: '/atlas-mountains',
                icon: Mountain,
              },
              {
                title: 'Morocco Packing Guide',
                description: 'Complete packing list by season and region, including cultural dress code advice.',
                href: '/packing',
                icon: Luggage,
              },
              {
                title: 'Best Time to Visit Morocco',
                description: 'Season-by-season comparison to help you choose the right month for your trip.',
                href: '/best-time',
                icon: Calendar,
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

      {/* ── More Spring & Seasonal Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Seasonal &amp; Outdoor Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/best-time-visit-morocco', title: 'Best Time to Visit (Detailed)', desc: 'In-depth analysis of each month, with region-specific recommendations and crowd data.' },
              { href: '/morocco-hiking-guide', title: 'Morocco Hiking Guide', desc: 'Complete guide to trekking in Morocco, from day walks to multi-week expeditions.' },
              { href: '/sahara-desert', title: 'Sahara Desert Guide', desc: 'Everything about desert trips: Erg Chebbi, Erg Chigaga, camel treks, and luxury camps.' },
              { href: '/morocco-festivals', title: 'Morocco Festivals Calendar', desc: 'Full annual calendar of music, cultural, and religious festivals across Morocco.' },
              { href: '/camping', title: 'Camping in Morocco', desc: 'Wild camping, organized campsites, desert bivouacs, and glamping options.' },
              { href: '/surfing', title: 'Morocco Surfing Guide', desc: 'Surf spots from Taghazout to Dakhla, including spring swell forecasts and surf camp reviews.' },
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Flower2 className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Morocco Spring Adventure
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            From rose valleys to Atlas trails, spring opens doors that other seasons keep closed.
            Start building your itinerary with our city and region guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Compass className="w-4 h-4" /> Activities Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Calendar className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
