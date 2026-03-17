import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  Star,
  Clock,
  MapPin,
  Camera,
  ArrowRight,
  Compass,
  Sun,
  BookOpen,
  CircleDollarSign,
  CalendarDays,
  Mountain,
  Map,
  Bus,
  Info,
  Lightbulb,
  Footprints,
  Navigation,
  Shield,
  Eye,
  Building,
  Palette,
  ShoppingBag,
  Utensils,
  Waves,
  Users,
  ThermometerSun,
  Bed,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Tetouan City Guide 2025 | UNESCO Medina, Andalusian Heritage, Northern Morocco',
  description:
    'Complete guide to Tetouan, Morocco. Explore the UNESCO World Heritage medina, Andalusian architecture, Spanish colonial quarter, Royal Palace, artisan workshops, nearby beaches, and gateway to Chefchaouen.',
  keywords: [
    'Tetouan Morocco',
    'Tetouan medina',
    'UNESCO medina Morocco',
    'Tetouan travel guide',
    'Andalusian Morocco',
    'Tetouan architecture',
    'Spanish colonial Morocco',
    'Tetouan artisans',
    'Tetouan beaches',
    'Martil beach',
    'Mdiq beach',
    'northern Morocco cities',
    'Tetouan to Chefchaouen',
    'Tangier to Tetouan',
    'Morocco off beaten path',
  ],
  openGraph: {
    title: 'Tetouan City Guide - UNESCO Medina & Andalusian Heritage',
    description:
      'Everything you need to know about Tetouan: the UNESCO-listed medina, Andalusian-Moorish architecture, Spanish colonial heritage, artisan quarter, nearby beaches, and gateway to Chefchaouen.',
    url: 'https://citytoursmorocco.com/tetouan',
    type: 'website',
    images: [
      {
        url: '/images/hero-tetouan.webp',
        width: 1200,
        height: 630,
        alt: 'The whitewashed medina of Tetouan with its distinctive Andalusian architecture and mountain backdrop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tetouan City Guide 2025 | UNESCO Medina, Northern Morocco',
    description:
      'Complete guide to Tetouan: UNESCO medina, Andalusian heritage, Spanish colonial architecture, artisan workshops, beaches, and the gateway to Chefchaouen.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/tetouan',
  },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/tetouan',
  name: 'Tetouan City Guide - UNESCO Medina & Andalusian Heritage, Morocco',
  description:
    'Comprehensive travel guide to Tetouan, Morocco covering the UNESCO-listed medina, Andalusian architecture, Spanish colonial quarter, artisan workshops, beaches, restaurants, accommodation, and practical information.',
  url: 'https://citytoursmorocco.com/tetouan',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'City',
    name: 'Tetouan',
    alternateName: 'Titwan',
    country: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://citytoursmorocco.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cities',
        item: 'https://citytoursmorocco.com/cities',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tetouan',
        item: 'https://citytoursmorocco.com/tetouan',
      },
    ],
  },
};

/* ================================================================
   TOP ATTRACTIONS DATA
   ================================================================ */

const topAttractions = [
  {
    name: 'The UNESCO Medina',
    icon: Landmark,
    image: '/images/hero-tetouan.webp',
    description:
      'Tetouan\'s medina was inscribed as a UNESCO World Heritage Site in 1997 and is considered the most complete and best-preserved example of an Andalusian-influenced medina in Morocco. Unlike the labyrinthine medinas of Fes or Marrakech, Tetouan\'s old town has a distinctly Spanish-Moorish character: whitewashed walls rather than earth-toned plaster, wrought-iron balconies overlooking narrow streets, ornate carved wooden doors, and zellige tilework that blends Moroccan and Andalusian geometric traditions. The medina was built primarily by Andalusian refugees expelled from Spain in the late 15th and early 16th centuries, who recreated the architectural traditions of Granada and Cordoba in their new home across the Strait of Gibraltar.',
    fee: 'Free',
    hours: 'Open 24 hours (shops: 9:00 AM - 8:00 PM)',
    tip: 'Tetouan\'s medina is far less touristic than Fes or Marrakech. You can wander freely without persistent touts. The most atmospheric streets are in the northern quarter near Bab el-Okla.',
  },
  {
    name: 'The Royal Palace (Dar el-Makhzen)',
    icon: Building,
    image: '/images/hero-tetouan.webp',
    description:
      'Located on the main square of Place Hassan II, the Royal Palace is one of the finest examples of Moorish-Andalusian architecture in Morocco. While the palace interior is closed to the public (it is still used by the royal family during visits to Tetouan), the exterior is magnificent: massive carved wooden doors set into arched portals, flanked by zellige tilework in geometric patterns and topped by green-tiled roofs. The ceremonial guards in traditional dress and the manicured gardens visible through the ornate gates create an unmistakable atmosphere of regal grandeur. Place Hassan II itself, with its fountains and surrounding arcaded buildings, is the social heart of the city.',
    fee: 'Exterior only (free)',
    hours: 'Viewable at any time; guards present during palace use',
    tip: 'Visit Place Hassan II in the early evening when the square fills with families, street food vendors, and a wonderful atmosphere of daily Moroccan social life.',
  },
  {
    name: 'The Artisan Quarter (Souk el-Houts)',
    icon: Palette,
    image: '/images/hero-tetouan.webp',
    description:
      'Tetouan has one of the finest artisan traditions in Morocco, and the souk el-Houts (fish souk, despite the name, it now sells much more than fish) and the surrounding artisan streets showcase craftsmanship that has been passed down through families for generations. The city is particularly renowned for its leatherwork, zellige tilework, carved plasterwork (stuc), and textile weaving. The Ecole des Arts et Metiers (School of Arts and Trades), founded during the Spanish protectorate, continues to train new generations of artisans in these traditional skills. Workshops are often open to visitors, and watching a zellige master cut and assemble thousands of tiny tile fragments is mesmerizing.',
    fee: 'Free to browse; workshops free to visit',
    hours: '9:00 AM - 6:00 PM (closed Sundays)',
    tip: 'Ask at the tourist office about visiting the Ecole des Arts et Metiers. The zellige and plasterwork workshops are the most impressive. Buying directly from artisans supports families and avoids middleman markups.',
  },
  {
    name: 'The Archaeological Museum',
    icon: Eye,
    image: '/images/hero-tetouan.webp',
    description:
      'Housed in a building just outside the medina walls, the Tetouan Archaeological Museum contains one of the finest collections of Roman and pre-Roman artifacts in Morocco. The exhibits include mosaics, pottery, coins, and sculptures from the nearby Roman site of Tamuda (Tamuda was a significant Roman settlement in the Tetouan valley) as well as Phoenician and Carthaginian artifacts that speak to the deep antiquity of human settlement in this region. A separate ethnographic section displays traditional Riffian Berber jewelry, costumes, and household items. The museum is small but well-curated and usually completely empty of other visitors.',
    fee: '20 MAD',
    hours: '9:00 AM - 4:00 PM (closed Tuesdays)',
    tip: 'The Roman mosaics on the ground floor are the highlight and rival anything in the Volubilis museum. Budget 45 minutes. The garden courtyard is a peaceful spot to rest.',
  },
  {
    name: 'Spanish Colonial Quarter (Ensanche)',
    icon: Building,
    image: '/images/hero-tetouan.webp',
    description:
      'Tetouan served as the capital of the Spanish protectorate in northern Morocco from 1913 to 1956, and the Ensanche (the Spanish colonial new town built adjacent to the medina) is a remarkably well-preserved example of early 20th-century Spanish colonial architecture. The wide boulevards, wrought-iron balconied apartment buildings, Art Deco cinemas, and the grand Iglesia de Nuestra Senora de las Victorias (Our Lady of Victories Church) could easily be mistaken for a provincial Spanish city. The Ensanche gives Tetouan a unique dual personality: Andalusian-Moorish medina on one side of Place Hassan II, and 1930s Barcelona on the other.',
    fee: 'Free',
    hours: 'Open 24 hours; church may have limited visiting hours',
    tip: 'Walk along Boulevard Mohammed V for the best concentration of Spanish colonial architecture. The Cinema Espanol building and the old Spanish Consulate are particularly photogenic. Several excellent cafes on the boulevard serve pastries with a distinctly Spanish influence.',
  },
  {
    name: 'Martil and M\'diq Beaches',
    icon: Waves,
    image: '/images/hero-tetouan.webp',
    description:
      'One of Tetouan\'s great advantages is its proximity to some of the best Mediterranean beaches in Morocco. Martil, just 10 km east, is a long sandy beach popular with Moroccan families, backed by a pleasant promenade with restaurants and cafes. M\'diq (Mdiq), 15 km east, is a more upscale resort town with a modern marina, luxury hotels, and a beautiful crescent beach. Both towns are easily accessible by grand taxi (from 10 MAD) and offer a completely different atmosphere to the historic medina. In summer, the beaches are lively and festive; in the shoulder seasons, they are peacefully uncrowded.',
    fee: 'Free (beach access)',
    hours: 'Daylight hours; restaurants and cafes open seasonally',
    tip: 'For the quietest beach experience, visit Martil on a weekday outside July-August. M\'diq has better restaurants and a more international atmosphere. The grand taxi from Tetouan takes 15-20 minutes to either town.',
  },
];

/* ================================================================
   PRACTICAL INFO
   ================================================================ */

const practicalInfo = [
  {
    label: 'Population',
    value: '~380,000',
    icon: Users,
  },
  {
    label: 'Elevation',
    value: '~10 m',
    icon: Mountain,
  },
  {
    label: 'To Chefchaouen',
    value: '~60 km (1.5 hrs)',
    icon: Navigation,
  },
  {
    label: 'Best Season',
    value: 'Apr-Jun, Sep-Oct',
    icon: CalendarDays,
  },
];

/* ================================================================
   GETTING THERE
   ================================================================ */

const gettingThere = [
  {
    from: 'Tangier',
    method: 'Grand Taxi or CTM Bus',
    duration: '1-1.5 hours',
    price: 'from 25 MAD (shared taxi); from 30 MAD (bus)',
    description:
      'The most common route. Grand taxis depart frequently from the Tangier grand taxi stand and follow the A4 motorway east along the Mediterranean coast. The journey passes through rolling green hills with sea views. CTM buses also operate this route several times daily. If driving, the motorway is fast and well-maintained.',
    tip: 'Grand taxis fill up quickly and depart as soon as they have 6 passengers. Morning departures are most frequent. If arriving at Tangier Ibn Battuta Airport, a direct grand taxi to Tetouan costs approximately from 250 MAD (negotiable).',
  },
  {
    from: 'Chefchaouen',
    method: 'Grand Taxi or CTM Bus',
    duration: '1-1.5 hours',
    price: 'from 25 MAD (shared taxi); from 30 MAD (bus)',
    description:
      'The scenic route from Chefchaouen descends from the Rif Mountains through a beautiful river valley and farming countryside. Grand taxis are frequent and the road, while winding in sections, is well-paved. Many travelers combine Tetouan with Chefchaouen as a 3-4 day northern Morocco itinerary.',
    tip: 'Tetouan makes an excellent day trip from Chefchaouen or vice versa. The morning grand taxis from Chefchaouen typically depart between 7:00 and 9:00 AM.',
  },
  {
    from: 'Fes',
    method: 'CTM Bus or Train to Tangier + Taxi',
    duration: '5-6 hours (bus); 4-5 hours (train + taxi)',
    price: 'from 100 MAD (bus); from 150 MAD (train + taxi)',
    description:
      'Direct CTM buses connect Fes to Tetouan in approximately 5-6 hours, passing through the Rif Mountains with beautiful scenery. Alternatively, take the ONCF train from Fes to Tangier (3-4 hours) and continue by grand taxi to Tetouan (1 hour). The train route follows the coast and is very comfortable.',
    tip: 'The Fes-Tetouan CTM bus crosses the Rif Mountains and is scenic but winding. Motion sickness medication recommended. The train-taxi combination via Tangier is more comfortable but takes slightly longer overall.',
  },
];

/* ================================================================
   ACCOMMODATION
   ================================================================ */

const accommodations = [
  {
    name: 'Blanco Riad',
    category: 'Boutique Riad',
    price: 'from 600 MAD per night',
    description:
      'A beautifully restored riad in the heart of the medina, combining Andalusian architectural heritage with contemporary comfort. Rooms feature hand-cut zellige tiles, carved plaster ceilings, and modern bathrooms. The rooftop terrace overlooks the medina and the Rif Mountains. Breakfasts are generous and the staff can arrange guided tours, cooking classes, and transfers.',
    bestFor: 'Couples, culture lovers, design-conscious travelers',
  },
  {
    name: 'Hotel Panorama Vista',
    category: 'Mid-Range Hotel',
    price: 'from 350 MAD per night',
    description:
      'A comfortable modern hotel in the Ensanche (new town) with views over Place Hassan II. Rooms are clean and spacious, with reliable Wi-Fi and air conditioning. The central location puts both the medina and the Spanish colonial quarter within easy walking distance. Good restaurant on-site serving Moroccan and international cuisine.',
    bestFor: 'Families, business travelers, those wanting modern amenities',
  },
  {
    name: 'Dar Rehla',
    category: 'Budget Guesthouse',
    price: 'from 200 MAD per night',
    description:
      'A welcoming family-run guesthouse in the medina offering clean, simply decorated rooms with shared or private bathrooms. The Moroccan family who runs it provides genuine hospitality, excellent home-cooked breakfasts, and helpful advice on exploring the city. The terrace has medina views and is a social space for guests.',
    bestFor: 'Solo travelers, backpackers, budget-conscious visitors',
  },
];

/* ================================================================
   TIPS DATA
   ================================================================ */

const tips = [
  'Tetouan is significantly less touristic than Fes, Marrakech, or even Chefchaouen. This means fewer touts but also fewer English-speaking locals. Basic French or Spanish is very helpful here.',
  'Spanish is widely spoken in Tetouan due to the colonial history. Many older residents are fluent, and Spanish signage and cultural influences are visible throughout the city.',
  'Friday is the holy day. Many shops in the medina close for extended hours, and the atmosphere is quieter. Plan museum visits and shopping for other days.',
  'Tetouan is an excellent base for exploring both Chefchaouen (1.5 hours) and Tangier (1 hour) without the higher accommodation prices of those more touristic cities.',
  'The medina can feel confusing at first, but it is much smaller than Fes. You cannot get seriously lost. When in doubt, head downhill toward Place Hassan II.',
  'Photography in the medina is generally welcomed, but always ask permission before photographing individuals, especially women. The artisan workshops are usually happy to be photographed.',
  'The best time to visit the medina is mid-morning (10:00 AM - 12:00 PM) when the shops are open and the light in the whitewashed streets is beautiful.',
  'Try the local specialty: a creamy goat cheese (jben) sandwich from the small vendors near Bab el-Okla. It is simple, delicious, and costs under 10 MAD.',
  'Grand taxis to Martil and M\'diq beaches depart frequently from the Place al-Adala area. The journey is short and inexpensive.',
  'The weekly souk (market) on Thursdays near the bus station is enormous and authentic. Arrive early for the freshest produce and the best atmosphere.',
];

/* ================================================================
   RELATED PAGES
   ================================================================ */

const relatedPages = [
  {
    title: 'Chefchaouen Guide',
    description: 'The Blue Pearl of the Rif, just 1.5 hours from Tetouan.',
    href: '/chefchaouen',
  },
  {
    title: 'Tangier Guide',
    description: 'The gateway to Morocco, one hour west along the Mediterranean coast.',
    href: '/tangier',
  },
  {
    title: 'Morocco Cities',
    description: 'Overview of all major cities and what makes each unique.',
    href: '/cities',
  },
  {
    title: 'Morocco Beaches',
    description: 'The best Atlantic and Mediterranean beaches in the country.',
    href: '/beaches',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function TetouanGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          SECTION 1: HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-tetouan.webp"
            alt="The whitewashed Andalusian medina of Tetouan with its distinctive architecture, set against the green Rif Mountain foothills"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/cities"
              className="hover:text-white transition-colors"
            >
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tetouan</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              UNESCO Heritage &amp; Andalusian Soul
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tetouan: Morocco&apos;s White Dove
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A UNESCO-listed medina where Andalusian and Moorish traditions
              intertwine, framed by Spanish colonial architecture on one side and
              the Rif Mountains on the other &mdash; northern Morocco&apos;s most
              authentically un-touristed city.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          SECTION 2: INTRODUCTION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Andalusia Across the Strait
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A city built by refugees who carried the architecture, crafts, and
              culture of Islamic Spain across the sea to start anew.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Tetouan (Arabic: Titwan) is a city of approximately 380,000 people
              nestled in the foothills of the western Rif Mountains, just 10 km from
              the Mediterranean coast of northern Morocco. Its history is one of the
              most distinctive in the country. Originally a Berber settlement, the
              city was largely destroyed in 1399 by Castilian forces. It was refounded
              in the late 15th century by Sidi Ali al-Mandri and a community of
              Andalusian Moors &mdash; Muslims expelled from Spain during the
              Reconquista, particularly from Granada after its fall in 1492. These
              refugees, many of whom were skilled artisans, merchants, and scholars,
              recreated in Tetouan the architectural and cultural traditions of the
              Andalusian cities they had lost.
            </p>
            <p>
              The result is a medina unlike any other in Morocco. Where Fes and
              Marrakech are built of earthy tones &mdash; ochre, terracotta, and
              brown &mdash; Tetouan&apos;s medina is luminously white, its houses
              plastered and lime-washed in the Andalusian tradition. The streets are
              narrower and more enclosed than in most Moroccan medinas, with overhanging
              upper floors, wrought-iron window grilles, carved wooden balconies, and
              ornate doorways that would not look out of place in the Albaicin quarter
              of Granada. The influence of this Andalusian refugee community permeates
              everything: the architecture, the music (Andalusian classical music
              traditions are exceptionally strong here), the cuisine, and the
              decorative arts, particularly zellige tilework and carved plaster.
            </p>
            <p>
              A second layer of cultural identity was added during the Spanish
              protectorate period (1913-1956), when Tetouan served as the capital of
              Spanish Morocco. The Spanish built an entire colonial new town
              (Ensanche) adjacent to the medina, with wide boulevards, Art Deco
              buildings, a Catholic church, and residential blocks that could be
              transplanted directly from Madrid. Today, these two cities &mdash;
              Andalusian-Moorish medina and Spanish colonial Ensanche &mdash; sit
              side by side, creating a uniquely layered urban landscape where North
              Africa and Iberia merge. Unlike the heavily touristed medinas of Fes
              and Marrakech, Tetouan receives relatively few international visitors,
              making it one of the most rewarding and genuinely authentic city
              experiences in Morocco.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Founded', value: '~1485 AD' },
                { label: 'UNESCO Listed', value: '1997' },
                { label: 'Population', value: '~380,000' },
                { label: 'Region', value: 'Tanger-Tetouan' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-[var(--surface-muted)]"
                >
                  <p className="text-2xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-display)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: PRACTICAL INFO CARDS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Information
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {practicalInfo.map((item) => (
              <div
                key={item.label}
                className="card-moroccan p-6 text-center"
              >
                <item.icon className="w-8 h-8 mx-auto mb-3 text-[var(--color-primary)]" />
                <p className="text-sm text-[var(--text-secondary)] mb-1">
                  {item.label}
                </p>
                <p className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: TOP ATTRACTIONS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Attractions in Tetouan
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the UNESCO medina to Spanish colonial boulevards and Mediterranean
              beaches, Tetouan offers a distinctive blend of cultures found nowhere else.
            </p>
          </div>

          <div className="space-y-8">
            {topAttractions.map((attraction, index) => (
              <article
                key={attraction.name}
                className="card-moroccan overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <img
                      src={attraction.image}
                      alt={`${attraction.name} in Tetouan, Morocco`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
                        <attraction.icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {attraction.name}
                      </h3>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="flex items-start gap-2 text-sm">
                        <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Fee:</strong>{' '}
                          {attraction.fee}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Hours:</strong>{' '}
                          {attraction.hours}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                          {attraction.tip}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: WHERE TO STAY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tetouan offers excellent value accommodation, from medina riads to
              modern hotels at prices well below Fes or Marrakech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accommodations.map((place) => (
              <article key={place.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {place.name}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-1">
                  {place.category}
                </p>
                <p className="text-sm font-bold text-[var(--color-primary)] mb-3">
                  {place.price}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {place.description}
                </p>
                <div className="flex items-center gap-2 text-sm pt-3 border-t border-[var(--border-light)]">
                  <Star className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span className="text-[var(--text-secondary)]">Best for: {place.bestFor}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: GETTING THERE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bus className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              How to Get There
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tetouan is well-connected to Tangier, Chefchaouen, and the rest
              of northern Morocco by bus and grand taxi.
            </p>
          </div>

          <div className="space-y-6">
            {gettingThere.map((route) => (
              <article key={route.from} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      From {route.from}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1">
                        <Bus className="w-4 h-4 text-[var(--color-primary)]" />
                        {route.method}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                        {route.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)]" />
                        {route.price}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {route.description}
                </p>
                <div className="flex items-start gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span className="text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                    {route.tip}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: PHOTO GALLERY
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4 text-[var(--color-accent)]" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
              Tetouan in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-[var(--text-secondary)]">
              Whitewashed medina streets, Andalusian doorways, and the distinctive
              blend of Morocco and Spain that makes Tetouan unique.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: '/images/hero-tetouan.webp', alt: 'Panoramic view of Tetouan whitewashed medina with Rif Mountain backdrop' },
              { src: '/images/hero-chefchaouen-streets.webp', alt: 'Nearby Chefchaouen blue streets, just 1.5 hours from Tetouan' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: TIPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              {tips.map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more of northern Morocco&apos;s cities, mountains, and coastline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Tetouan?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Walk through a UNESCO medina where Andalusia meets Morocco, explore
            Spanish colonial boulevards, and escape to Mediterranean beaches
            &mdash; all without the tourist crowds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Landmark className="w-4 h-4" /> Explore All Cities
            </Link>
            <Link
              href="/chefchaouen"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Nearby Chefchaouen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
