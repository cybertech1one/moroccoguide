import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Info,
  ArrowRight,
  Snowflake,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  TreePine,
  Camera,
  Building,
  Award,
  BookOpen,
  GraduationCap,
  Utensils,
  Bed,
  Car,
  Calendar,
  Compass,
  Sun,
  CloudSnow,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Ifrane Travel Guide 2026 | Morocco\'s Alpine City, Cedar Forests & Winter Getaway',
  description:
    'Complete travel guide to Ifrane, Morocco — the "Switzerland of Morocco." Explore Alpine architecture, Ifrane National Park cedar forests, Barbary macaques, Michlifen ski resort, Ain Vittel springs, and the famous stone lion. Day trips from Fes, accommodation, restaurants, and best time to visit.',
  keywords: [
    'ifrane morocco',
    'ifrane tours',
    'private tours ifrane',
    'ifrane morocco alpine architecture',
    'Ifrane the Switzerland of Morocco',
    'ifrane cedar forest',
    'ifrane national park',
    'michlifen ski resort',
    'ifrane stone lion',
    'morocco winter getaway',
    'ifrane day trip from fes',
    'al akhawayn university ifrane',
    'barbary macaques morocco',
    'ifrane morocco weather',
    'morocco alpine city',
    'dayet aoua lake ifrane',
    'ain vittel springs ifrane',
    'ifrane accommodation',
    'ifrane restaurants',
    'things to do in ifrane',
    'ifrane morocco travel guide 2026',
    'morocco ski resort',
  ],
  openGraph: {
    title: 'Ifrane Travel Guide 2026 | Morocco\'s Alpine City & Cedar Forests',
    description:
      'Discover Ifrane, Morocco\'s cleanest city and alpine gem. French colonial architecture, ancient cedar forests, Barbary macaques, Michlifen ski resort, and a perfect day trip from Fes.',
    url: `${BASE_URL}/ifrane-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-ifrane.webp`,
        width: 1200,
        height: 630,
        alt: 'Ifrane Morocco alpine city with red-roofed chalets and cedar forests in the Middle Atlas Mountains',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ifrane Travel Guide 2026 | The Switzerland of Morocco',
    description:
      'Alpine architecture, cedar forests, Barbary macaques, and Morocco\'s only ski resort. Complete guide to Ifrane with day trips from Fes, accommodation, and insider tips.',
    images: [`${BASE_URL}/images/hero-ifrane.webp`],
  },
  alternates: { canonical: `${BASE_URL}/ifrane-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/ifrane-guide`,
  name: 'Ifrane Travel Guide 2026 | Morocco\'s Alpine City, Cedar Forests & Winter Getaway',
  description:
    'Complete travel guide to Ifrane, the Switzerland of Morocco. Alpine architecture, cedar forests, Barbary macaques, Michlifen ski resort, and practical visitor information.',
  url: `${BASE_URL}/ifrane-guide`,
  image: `${BASE_URL}/images/hero-ifrane.webp`,
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
  mainEntityOfPage: `${BASE_URL}/ifrane-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Ifrane',
    containedInPlace: { '@type': 'Country', name: 'Morocco' },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ifrane Travel Guide', item: `${BASE_URL}/ifrane-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Why is Ifrane called the Switzerland of Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Ifrane earned this nickname due to its French colonial Alpine architecture with red-roofed chalets, its surrounding cedar forests, cold winters with regular snowfall, and its remarkably clean, well-maintained streets. Built by the French in the 1930s, the town was deliberately modeled after a European alpine resort.' } },
    { '@type': 'Question', name: 'How far is Ifrane from Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Ifrane is approximately 60 km south of Fes, about a 1-hour drive via the N8 highway. Grand taxis from Fes to Ifrane cost from 30 MAD per person. Private transfers start from 400 MAD one way.' } },
    { '@type': 'Question', name: 'Does it snow in Ifrane Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Ifrane regularly receives snowfall between December and March. At 1,665 meters elevation, Ifrane is one of the coldest cities in Africa. Temperatures can drop to -10C in January. The nearby Michlifen ski resort operates during snowy periods from December to March.' } },
    { '@type': 'Question', name: 'Can I see Barbary macaques near Ifrane?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Azrou Cedar Forest near Ifrane is one of the best places in Morocco to see wild Barbary macaques. These endangered primates live in the Atlas cedar forests of Ifrane National Park. You can spot them on the road between Ifrane and Azrou, especially near the Cedre Gouraud area.' } },
    { '@type': 'Question', name: 'What is the best time to visit Ifrane?', acceptedAnswer: { '@type': 'Answer', text: 'Ifrane is beautiful year-round. Spring (April-May) offers wildflowers and mild weather. Summer (June-August) provides a cool escape from Morocco\'s heat. Winter (December-March) brings snow and skiing at Michlifen. Autumn (September-November) features golden cedar forests and comfortable temperatures.' } },
    { '@type': 'Question', name: 'Is Ifrane worth visiting as a day trip?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. A day trip from Fes to Ifrane is one of the most popular excursions in the Middle Atlas region. You can visit the stone lion, walk through town, explore the cedar forests, see Barbary macaques near Azrou, and visit Dayet Aoua lake all in one day.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ATTRACTIONS
   ═══════════════════════════════════════════════════════════════ */

const topAttractions = [
  {
    name: 'The Stone Lion of Ifrane',
    icon: Camera,
    category: 'Landmark',
    description:
      'Ifrane\'s most photographed landmark is a carved stone lion sitting in a small park near the town center. Sculpted by a German prisoner of war during World War II, this Atlas lion statue commemorates the now-extinct Barbary lion that once roamed Morocco\'s mountains. It has become the unofficial symbol of Ifrane and a must-visit photo stop.',
    highlights: ['Free to visit', 'Town center location', 'Historic WWII-era sculpture', 'Symbol of the Barbary lion'],
  },
  {
    name: 'Ifrane National Park',
    icon: TreePine,
    category: 'Nature Reserve',
    description:
      'Covering over 51,800 hectares of the Middle Atlas, Ifrane National Park protects one of the largest remaining Atlas cedar forests in the world. The park is a UNESCO biosphere reserve candidate, home to Barbary macaques, wild boar, golden jackals, and over 200 bird species. Hiking trails wind through ancient cedars, some over 800 years old.',
    highlights: ['51,800 hectares of protected forest', 'Ancient Atlas cedars', 'Barbary macaque habitat', '200+ bird species'],
  },
  {
    name: 'Michlifen Ski Resort',
    icon: Snowflake,
    category: 'Winter Sports',
    description:
      'Located about 17 km from Ifrane at 2,000 meters elevation, Michlifen is one of only two ski resorts in Morocco. When snow conditions allow (December to March), you can ski, snowboard, or sled on the volcanic crater slopes. The resort has equipment rental and a small lodge. Conditions are variable, so check ahead before visiting.',
    highlights: ['Morocco\'s premier ski area', 'Equipment rental available', 'Sledding and snowboarding', 'Season: December-March'],
  },
  {
    name: 'Azrou Cedar Forest',
    icon: TreePine,
    category: 'Nature & Wildlife',
    description:
      'About 20 minutes south of Ifrane, the Azrou Cedar Forest is the crown jewel of the Middle Atlas. The famous Cedre Gouraud, a massive 800-year-old cedar tree, stands as a monument to the forest\'s ancient heritage. This is the best place to encounter wild Barbary macaques, who are accustomed to visitors but should not be fed.',
    highlights: ['800-year-old Cedre Gouraud', 'Wild Barbary macaque encounters', '20 minutes from Ifrane', 'Guided forest walks available'],
  },
  {
    name: 'Dayet Aoua Lake',
    icon: Compass,
    category: 'Natural Lake',
    description:
      'A serene natural lake about 15 km from Ifrane, Dayet Aoua is surrounded by cedar and oak forests. It is an important birdwatching site, especially in winter and spring when migratory birds arrive. The lake level fluctuates seasonally, and in some years it dries considerably. On full days, the reflections of the surrounding forest are spectacular.',
    highlights: ['Excellent birdwatching', 'Picnic areas nearby', 'Seasonal migratory birds', 'Peaceful forest setting'],
  },
  {
    name: 'Al Akhawayn University',
    icon: GraduationCap,
    category: 'Education & Architecture',
    description:
      'Founded in 1995 by King Hassan II and King Fahd of Saudi Arabia, Al Akhawayn is Morocco\'s premier English-language university. The campus, designed in a New England collegiate style, sits on a sprawling hillside overlooking Ifrane. Visitors can walk the grounds and appreciate the unique blend of American campus design set against an Atlas Mountain backdrop.',
    highlights: ['English-language university', 'New England-style campus', 'Hillside panoramic views', 'Cultural exchange programs'],
  },
  {
    name: 'Ain Vittel Springs',
    icon: Mountain,
    category: 'Natural Spring',
    description:
      'Named after the French mineral water brand, these natural springs on the outskirts of Ifrane produce some of Morocco\'s purest water. The springs feed into small streams that run through parks and gardens. The surrounding area is a popular picnic spot for local families, especially on weekends. The water is cold and crystal clear year-round.',
    highlights: ['Crystal clear natural springs', 'Popular family picnic area', 'Free to visit', 'Beautiful park setting'],
  },
  {
    name: 'French Colonial Architecture',
    icon: Building,
    category: 'Heritage & Culture',
    description:
      'Ifrane\'s architectural character is unique in Morocco. Built by the French Protectorate administration in the 1930s as a hill station and summer retreat, the town features pointed red-tile roofs, stone facades, flower-box balconies, and tree-lined boulevards. Walking through Ifrane feels more like a village in the French Alps than a Moroccan town.',
    highlights: ['1930s French Protectorate era', 'Red-roofed chalets', 'Tree-lined boulevards', 'Unique in Morocco'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEATHER BY SEASON
   ═══════════════════════════════════════════════════════════════ */

const weatherByseason = [
  {
    season: 'Winter (December - February)',
    icon: CloudSnow,
    temp: '-5C to 8C',
    description:
      'Ifrane transforms into a winter wonderland with regular snowfall. Temperatures can plunge to -10C on the coldest nights. The town holds the record for the lowest temperature ever recorded in Africa: -23.9C in February 1935. Skiing at Michlifen is possible when snow conditions allow. Pack heavy winter clothing.',
    bestFor: 'Snow lovers, skiing at Michlifen, cozy fireplace experiences',
  },
  {
    season: 'Spring (March - May)',
    icon: Sun,
    temp: '8C to 20C',
    description:
      'One of the best times to visit. The snow melts, wildflowers blanket the meadows, and the cedar forests are lush and green. Days are pleasant and warm, though nights remain cool. Dayet Aoua lake is at its fullest. Excellent for hiking and wildlife spotting as Barbary macaques are active.',
    bestFor: 'Hiking, wildflowers, wildlife, photography',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    temp: '15C to 28C',
    description:
      'While the rest of Morocco swelters in 40C+ heat, Ifrane remains cool and comfortable. This is precisely why the French built their retreat here. Summer is peak domestic tourism season, as Moroccan families escape the lowland heat. Hotels fill quickly, so book well in advance.',
    bestFor: 'Escaping Morocco\'s heat, family holidays, forest walks',
  },
  {
    season: 'Autumn (September - November)',
    icon: TreePine,
    temp: '5C to 18C',
    description:
      'The cedar and oak forests turn golden and amber, creating spectacular autumn colors rare in North Africa. Fewer tourists visit during this shoulder season, making it ideal for peaceful exploration. The first snow sometimes arrives in late November at higher elevations.',
    bestFor: 'Autumn foliage, quiet exploration, photography',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    name: 'Michlifen Ifrane Suites & Spa',
    type: 'Luxury Resort',
    price: 'From 2,500 MAD/night',
    description: 'Ifrane\'s premier 5-star resort with an indoor pool, full spa, and ski shuttle. Set in cedar forests with panoramic Atlas Mountain views. The finest accommodation in the region.',
  },
  {
    name: 'Hotel Perce-Neige',
    type: 'Mid-Range Hotel',
    price: 'From 800 MAD/night',
    description: 'A charming chalet-style hotel in the town center. Warm interiors, restaurant, and a classic Ifrane alpine atmosphere. Walking distance to the stone lion and main attractions.',
  },
  {
    name: 'Hotel Les Merinides',
    type: 'Budget-Friendly',
    price: 'From 400 MAD/night',
    description: 'Clean, comfortable rooms at a reasonable price. Central location near the market and restaurants. Good base for exploring the region without breaking the budget.',
  },
  {
    name: 'Gite/Auberge Options',
    type: 'Rural Guesthouse',
    price: 'From 250 MAD/night',
    description: 'Family-run guesthouses (gites) in the surrounding countryside offer an authentic experience. Basic but warm, with home-cooked meals. Best for nature lovers seeking immersion in the cedar forest environment.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANT PICKS
   ═══════════════════════════════════════════════════════════════ */

const restaurants = [
  {
    name: 'Restaurant La Paix',
    cuisine: 'Moroccan & International',
    price: 'From 80 MAD',
    description: 'A local favorite serving hearty tagines, grilled meats, and seasonal trout from local rivers. Warm atmosphere with fireplace seating in winter.',
  },
  {
    name: 'Cafe Restaurant du Lac',
    cuisine: 'Moroccan',
    price: 'From 60 MAD',
    description: 'Casual dining near Dayet Aoua with views of the lake. Known for fresh trout and traditional Amazigh dishes prepared with local herbs.',
  },
  {
    name: 'Hotel Michlifen Restaurant',
    cuisine: 'Fine Dining',
    price: 'From 200 MAD',
    description: 'The upscale restaurant at Michlifen resort serves refined Moroccan and French cuisine with an extensive wine list. Reservations recommended.',
  },
  {
    name: 'Cafe Snack Stands',
    cuisine: 'Street Food',
    price: 'From 20 MAD',
    description: 'Along the main boulevard, small cafes serve msemen (flatbread), harira soup, grilled brochettes, and fresh-squeezed orange juice. Perfect for budget travelers.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM IFRANE
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    destination: 'Azrou',
    distance: '17 km (20 min)',
    icon: TreePine,
    description:
      'A traditional Amazigh (Berber) town known for its cedar wood crafts, weekly Tuesday souk, and the famous Azrou Cedar Forest where Barbary macaques live. The town\'s artisan cooperative sells beautiful hand-carved cedar items.',
    highlights: ['Barbary macaques', 'Cedar wood crafts', 'Tuesday souk', 'Cedre Gouraud'],
  },
  {
    destination: 'Fes',
    distance: '60 km (1 hour)',
    icon: Building,
    description:
      'Morocco\'s spiritual and cultural capital. Explore the world\'s largest car-free medina, visit Al-Qarawiyyin University (the world\'s oldest), admire Bou Inania Medersa, and lose yourself in the tanneries and souks.',
    highlights: ['UNESCO medina', 'Al-Qarawiyyin Mosque', 'Leather tanneries', 'Artisan souks'],
  },
  {
    destination: 'Meknes',
    distance: '85 km (1.5 hours)',
    icon: Building,
    description:
      'The Ismaili capital with massive imperial gates, underground granaries, and the tomb of Sultan Moulay Ismail. Less crowded than Fes with equally impressive historical sites. Nearby Volubilis Roman ruins are a bonus.',
    highlights: ['Bab Mansour gate', 'Royal Stables', 'Heri es-Souani', 'Volubilis nearby'],
  },
  {
    destination: 'Bin El Ouidane',
    distance: '170 km (2.5 hours)',
    icon: Mountain,
    description:
      'A stunning turquoise reservoir lake in the High Atlas foothills. Popular for fishing, kayaking, and scenic drives. The road from Ifrane passes through dramatic mountain scenery. Best as an overnight trip.',
    highlights: ['Turquoise lake', 'Water sports', 'Scenic mountain road', 'Fishing trips'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const gettingThere = [
  {
    method: 'From Fes by Grand Taxi',
    icon: Car,
    details: 'Grand taxis depart from the new grand taxi station in Fes. The trip takes about 1 hour. Cost: from 30 MAD per person (shared) or from 200 MAD for the entire taxi. Taxis run throughout the day.',
  },
  {
    method: 'From Fes by Private Transfer',
    icon: Car,
    details: 'Private transfers from Fes to Ifrane start from 400 MAD one way. Many tour operators offer Ifrane + Azrou + Cedar Forest as a packaged day trip from Fes, starting from 800 MAD per person.',
  },
  {
    method: 'From Marrakech by Car',
    icon: Car,
    details: 'The drive from Marrakech to Ifrane is approximately 450 km (5-6 hours) via Beni Mellal. The route passes through stunning Middle Atlas scenery. Rental cars in Morocco start from 300 MAD per day.',
  },
  {
    method: 'By CTM or Supratours Bus',
    icon: Car,
    details: 'CTM and Supratours buses connect Ifrane with Fes (from 40 MAD, 1.5 hours) and Meknes (from 50 MAD, 2 hours). Buses run several times daily. Book online or at the station.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRACTICAL TIPS
   ═══════════════════════════════════════════════════════════════ */

const practicalTips = [
  {
    title: 'Pack for Cold Weather',
    icon: Thermometer,
    description: 'Even in summer, Ifrane evenings are cool (around 10-15C). In winter, bring proper cold-weather gear: thermal layers, waterproof jacket, warm hat, and gloves. Snow boots are essential from December through February.',
  },
  {
    title: 'ATMs & Money',
    icon: DollarSign,
    description: 'Ifrane has several ATMs along the main boulevard (Avenue de la Marche Verte). Most hotels accept credit cards, but smaller restaurants and taxis are cash only. Bring enough MAD for daily expenses.',
  },
  {
    title: 'Best Photo Opportunities',
    icon: Camera,
    description: 'The stone lion, the chalet-lined boulevards, the cedar forests with Barbary macaques, and Dayet Aoua lake at sunrise. In winter, snow-covered Ifrane is spectacular. Morning light is best for forest photography.',
  },
  {
    title: 'Respect Wildlife',
    icon: ShieldCheck,
    description: 'Do not feed the Barbary macaques. While they are accustomed to visitors, feeding them alters their behavior, causes health problems, and makes them aggressive. Observe from a respectful distance and do not make sudden movements.',
  },
  {
    title: 'Guided Tours',
    icon: Users,
    description: 'Local guides in Ifrane and Azrou offer forest walks, birdwatching excursions, and winter sport experiences. A guided cedar forest tour with macaque spotting costs from 300 MAD for a half day. Book through your hotel or a licensed tour operator.',
  },
  {
    title: 'Combine with Fes',
    icon: Compass,
    description: 'The most popular way to experience Ifrane is as a day trip from Fes. A typical itinerary: morning departure from Fes, stone lion and town walk, lunch in Ifrane, afternoon cedar forest and macaques near Azrou, return to Fes by evening.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function IfraneGuidePage() {
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
            backgroundImage: 'url(/images/hero-ifrane.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Ifrane Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Middle Atlas Mountains
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ifrane Travel Guide:
            <br className="hidden md:block" /> Morocco&apos;s Alpine City
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Cedar forests, Barbary macaques, Alpine architecture, and snow-capped peaks.
            Discover why Ifrane is called the Switzerland of Morocco and one of Africa&apos;s
            cleanest cities.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Ifrane Is Called &quot;The Switzerland of Morocco&quot;
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Perched at 1,665 meters in the Middle Atlas Mountains, Ifrane is unlike any other
                city in Morocco. Where most Moroccan towns feature ochre walls, flat rooftops, and
                bustling medinas, Ifrane presents pointed red-tile roofs, flower-box balconies,
                manicured gardens, and tree-lined boulevards that could belong to a village in the
                French Alps. It is a city that surprises every first-time visitor.
              </p>
              <p>
                Built by the French Protectorate administration in the 1930s as a hill station and
                summer retreat, Ifrane was designed from the ground up as a European-style alpine
                resort. The French recognized that the Middle Atlas offered cool summers, cold
                winters with actual snowfall, and dense cedar forests that reminded them of home.
                They created a town that, nearly a century later, still feels transported from
                another continent.
              </p>
              <p>
                Today Ifrane is renowned as one of the cleanest cities in Africa, home to
                Morocco&apos;s prestigious English-language university (Al Akhawayn), and the
                gateway to Ifrane National Park&apos;s ancient cedar forests where endangered
                Barbary macaques swing through 800-year-old trees. Whether you visit for a day
                trip from Fes or stay overnight to ski at Michlifen, Ifrane offers an experience
                found nowhere else in North Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── History & Heritage ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Brief History of Ifrane
          </h2>
          <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
            <p>
              The name &quot;Ifrane&quot; comes from the Amazigh (Berber) word for &quot;caves,&quot;
              referring to the natural grottoes that dot the limestone landscape around the town.
              Long before the French arrived, the area was inhabited by Amazigh communities who
              used these caves as seasonal shelters while grazing livestock in the Middle Atlas
              highlands. The region&apos;s cedar forests provided timber, and the natural springs
              sustained life through the dry months.
            </p>
            <p>
              During the French Protectorate (1912-1956), colonial administrators discovered that
              the Middle Atlas plateau offered a climate remarkably similar to the European Alps.
              In 1929, they designated Ifrane as a &quot;station climatique&quot; (climate resort)
              and began constructing the Alpine-style town that exists today. French architects
              designed chalets with steep roofs to shed snow, stone facades to withstand cold
              winters, and public gardens modeled after European parks. By the 1940s, Ifrane had
              become the premier mountain retreat for French officials and Moroccan elite.
            </p>
            <p>
              After Moroccan independence in 1956, Ifrane continued to develop as a center of
              education and tourism. The establishment of Al Akhawayn University in 1995 brought
              international attention and a year-round student population. Today, Ifrane is
              governed as a municipality within the Fes-Meknes region and is recognized as one of
              the cleanest and most well-maintained cities on the African continent, a point of
              pride for residents and a pleasant surprise for visitors.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ifrane at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential facts about Morocco&apos;s alpine gem before you plan your visit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-5 text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Elevation</h3>
              <p className="text-lg font-bold text-[var(--color-accent)]">1,665 m</p>
              <p className="text-xs text-[var(--text-muted)]">Middle Atlas Mountains</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Record Low</h3>
              <p className="text-lg font-bold text-[var(--color-accent)]">-23.9C</p>
              <p className="text-xs text-[var(--text-muted)]">Coldest in Africa (Feb 1935)</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Car className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">From Fes</h3>
              <p className="text-lg font-bold text-[var(--color-accent)]">1 Hour</p>
              <p className="text-xs text-[var(--text-muted)]">60 km via N8 highway</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <TreePine className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">National Park</h3>
              <p className="text-lg font-bold text-[var(--color-accent)]">51,800 ha</p>
              <p className="text-xs text-[var(--text-muted)]">Atlas cedar forests</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Attractions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Things to Do in Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From ancient cedar forests and rare wildlife to Alpine architecture and winter sports, here are Ifrane&apos;s unmissable experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topAttractions.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {attraction.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{attraction.category}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{attraction.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {attraction.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Weather & Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ifrane&apos;s high elevation means dramatically different seasons. Each offers a distinct experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Ifrane is the coolest city in Morocco year-round. Always pack layers regardless of season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {weatherByseason.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{season.temp}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {season.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Get to Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ifrane is most commonly reached from Fes, just one hour away. Here are all your transport options.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak winter months (December-February) and summer holidays, when private transfer prices may increase.
          </p>

          <div className="space-y-4">
            {gettingThere.map((option) => {
              const TransIcon = option.icon;
              return (
                <div key={option.method} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <TransIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {option.method}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{option.details}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay in Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From five-star resorts to charming guesthouses, Ifrane offers accommodation for every budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting rates. Seasonal pricing applies — winter (December-February) and summer (July-August) are peak seasons with higher rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {accommodations.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {hotel.name}
                  </h3>
                  <span className="text-xs text-[var(--text-muted)] bg-[var(--surface-muted)] px-2 py-1 rounded shrink-0 ml-2">
                    {hotel.type}
                  </span>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {hotel.price}
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{hotel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Restaurants ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Eat in Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ifrane&apos;s dining scene ranges from hearty Moroccan tagines to refined hotel restaurants. Fresh Atlas trout is a local specialty.
          </p>

          <div className="space-y-4">
            {restaurants.map((resto) => (
              <div key={resto.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {resto.name}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <span className="text-xs text-[var(--text-muted)]">{resto.cuisine}</span>
                    <span className="text-xs font-semibold text-[var(--color-accent)]">{resto.price}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{resto.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ifrane&apos;s central Middle Atlas location makes it an excellent base for exploring the region.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.destination} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TripIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {trip.destination}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {trip.distance}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{trip.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {trip.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Visiting Ifrane
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know to make the most of your visit to Morocco&apos;s alpine city.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Private Tours CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Book a Private Tour to Ifrane
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
            Experience the best of Ifrane and the Middle Atlas with a private guided tour from Fes.
            Visit the cedar forests, encounter Barbary macaques, explore Azrou, and discover the alpine
            charm of Morocco&apos;s cleanest city. All tours include transport, guide, and flexible itineraries.
          </p>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Private Ifrane day tours start from 800 MAD per person. Seasonal pricing applies during peak winter and summer months.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="card-moroccan p-4">
              <TreePine className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Cedar Forest Tour</h3>
              <p className="text-xs text-[var(--text-muted)]">Ifrane + Azrou + Barbary macaques. Full-day from Fes including lunch.</p>
            </div>
            <div className="card-moroccan p-4">
              <Snowflake className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Winter Snow Tour</h3>
              <p className="text-xs text-[var(--text-muted)]">Dec-Mar only. Ifrane snow walk + Michlifen sledding. Equipment included.</p>
            </div>
            <div className="card-moroccan p-4">
              <Compass className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Middle Atlas Circuit</h3>
              <p className="text-xs text-[var(--text-muted)]">2-day tour: Ifrane, Azrou, lakes, and Amazigh villages with overnight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Ifrane
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Why is Ifrane called the Switzerland of Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ifrane earned this nickname because of its French colonial Alpine architecture with red-roofed
                chalets, its surrounding cedar forests, cold winters with regular snowfall, and its remarkably
                clean, well-maintained streets. Built by the French in the 1930s as a hill station, the town
                was deliberately modeled after a European alpine resort. The resemblance to Swiss villages is
                striking and completely unlike any other Moroccan city.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How far is Ifrane from Fes?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ifrane is approximately 60 km south of Fes, about a 1-hour drive via the N8 highway. Grand
                taxis from Fes cost from 30 MAD per person in a shared taxi or from 200 MAD for the entire
                vehicle. Private transfers start from 400 MAD one way. CTM buses take about 1.5 hours and
                cost from 40 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does it snow in Ifrane?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Ifrane regularly receives snowfall between December and March. At 1,665 meters elevation,
                it is one of the coldest cities in Africa. Temperatures can drop to -10C in January. Ifrane
                holds the record for the lowest temperature ever recorded on the African continent: -23.9C
                in February 1935. The nearby Michlifen ski resort operates when snow conditions allow.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I see Barbary macaques near Ifrane?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, the Azrou Cedar Forest near Ifrane is one of the best places in Morocco to see wild
                Barbary macaques. These endangered primates live in the Atlas cedar forests of Ifrane
                National Park. You can spot them on the road between Ifrane and Azrou, especially near the
                Cedre Gouraud area. Please do not feed them, as this alters their behavior and health.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Ifrane worth visiting as a day trip from Fes?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. A day trip from Fes to Ifrane is one of the most popular excursions in the
                Middle Atlas region. A typical itinerary includes the stone lion and town walk in the morning,
                lunch at a local restaurant, an afternoon visit to the cedar forests and Barbary macaques near
                Azrou, and a stop at Dayet Aoua lake before returning to Fes by evening. Private tours start
                from 800 MAD per person.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Ifrane?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Each season offers something different. Spring (April-May) brings wildflowers and mild weather.
                Summer (June-August) provides a cool retreat from Morocco&apos;s extreme heat. Winter
                (December-March) brings snow and skiing at Michlifen. Autumn (September-November) features
                golden forests and fewer tourists. Year-round, Ifrane is the coolest city in Morocco, so
                always pack layers.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I bring when visiting Ifrane?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Regardless of season, bring warm layers for the evenings. In winter, pack a heavy
                jacket, gloves, warm hat, and waterproof boots. In summer, a light jacket is still
                advisable for evenings. For cedar forest visits, wear comfortable walking shoes and
                bring binoculars for wildlife spotting. Sunscreen is important at high altitude
                year-round. Bring enough cash in MAD, as many smaller establishments do not accept cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-ski-resorts" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Snowflake className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Ski Resorts
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to skiing and snowboarding in Morocco, including Michlifen and Oukaimeden.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, villages, and adventure in the High, Middle, and Anti-Atlas mountain ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-wildlife-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <TreePine className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Wildlife Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Barbary macaques, birdwatching, marine life, and where to see Morocco&apos;s incredible wildlife.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Fes, Morocco&apos;s spiritual capital and the perfect base for day trips to Ifrane.
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
