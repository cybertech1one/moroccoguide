import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Snowflake,
  Sun,
  Cloud,
  CloudRain,
  Thermometer,
  Mountain,
  Tent,
  Calendar,
  Clock,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Utensils,
  ShieldCheck,
  DollarSign,
  Luggage,
  Landmark,
  Sunrise,
  Wind,
  Shirt,
  MessageCircleQuestion,
  Globe,
  Compass,
  Flame,
  Music,
  Camera,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-winter-travel`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Winter Travel Guide 2026 | December, January & February Tips',
  description:
    'Plan your winter trip to Morocco with this complete guide. December-February weather by region, skiing at Oukaimeden and Michlifen, Sahara desert in winter, winter festivals, Christmas and New Year celebrations, packing tips, rainy season advice, winter food specialties, and hotel deals from 400 MAD.',
  keywords: [
    'Morocco winter travel',
    'Morocco in December',
    'Morocco in January',
    'Morocco in February',
    'winter weather Morocco',
    'skiing Morocco Oukaimeden',
    'Michlifen ski resort Morocco',
    'Sahara desert winter',
    'Morocco Christmas New Year',
    'Morocco winter festivals',
    'what to pack Morocco winter',
    'Morocco rainy season',
    'Morocco winter food',
    'Morocco hotel deals winter',
    'Morocco off season travel',
    'winter in Marrakech',
    'Morocco winter itinerary 2026',
  ],
  openGraph: {
    title: 'Morocco Winter Travel Guide 2026 | December, January & February Tips',
    description:
      'Complete winter travel guide for Morocco covering weather by region, skiing in the Atlas Mountains, desert experiences, winter festivals, packing tips, rainy season advice, and hotel deals from 400 MAD.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Snow-dusted Atlas Mountains in Morocco during winter with clear blue sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Winter Travel Guide 2026 | Weather, Skiing & Desert Tips',
    description:
      'December-February weather, Oukaimeden and Michlifen skiing, Sahara desert camps, winter festivals, packing tips, rainy season advice, and hotel deals from 400 MAD.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is Morocco a good destination in winter?',
    a: 'Morocco is one of the best winter destinations accessible from Europe. Coastal cities like Agadir see daytime highs of 20-22 degrees Celsius even in January. The Sahara desert is ideal for camping with cool, comfortable temperatures. Crowds thin out significantly after New Year, and hotel prices drop by 20-40 percent compared to peak season. The only downside is occasional rain in northern cities.',
  },
  {
    q: 'How cold does Morocco get in winter?',
    a: 'It varies dramatically by region. Marrakech averages 18 degrees Celsius during the day and 6 degrees at night in January. Fes and the north are cooler at 14 degrees daytime and near freezing at night. The Atlas Mountains see snow above 2,000 meters, with temperatures dropping below minus 10 degrees at summit level. The Sahara desert reaches 18-20 degrees by day but plummets to 0-5 degrees at night. Agadir and the southern coast stay mild at 20-22 degrees.',
  },
  {
    q: 'Can you ski in Morocco?',
    a: 'Yes. Oukaimeden, 75 kilometers from Marrakech at 2,600 meters, has ski lifts, rental shops, and runs suitable for beginners and intermediates. The season runs from late December through March when snow conditions allow. Michlifen near Ifrane in the Middle Atlas also offers skiing. Lift passes start from 100 MAD and equipment rental from 200 MAD per day. Conditions are unpredictable, so check snow reports before heading up.',
  },
  {
    q: 'Does it rain a lot in Morocco during winter?',
    a: 'Northern cities like Tangier, Chefchaouen, and Fes receive the most rain, averaging 8-12 rainy days per month from November through February. Marrakech gets about 5-6 rainy days per month. The Sahara desert and Agadir are the driest areas. Rain usually comes in short bursts rather than all-day downpours. Pack a waterproof jacket and plan indoor activities like museum visits and cooking classes as backup options.',
  },
  {
    q: 'What should I pack for Morocco in winter?',
    a: 'Pack layers: a warm fleece or sweater for mornings and evenings, a waterproof jacket for rain, comfortable walking shoes with good grip, and a warm hat and scarf for the Atlas Mountains or desert nights. Daytime in Marrakech and Agadir often requires just a light jacket. Bring sunscreen because UV is strong even in winter. If visiting the Sahara, pack thermal base layers for overnight camping.',
  },
  {
    q: 'Are there Christmas and New Year celebrations in Morocco?',
    a: 'Morocco is a Muslim-majority country, so Christmas is not a public holiday. However, international hotels in Marrakech, Casablanca, and Agadir host Christmas dinners, decorated lobbies, and special menus. New Year Eve is more widely celebrated, with fireworks in major cities and special events at restaurants and hotels. Jemaa el-Fna in Marrakech draws large crowds on New Year Eve. Expect higher hotel prices from December 20 through January 2.',
  },
  {
    q: 'Is the Sahara desert worth visiting in winter?',
    a: 'Winter is arguably the best season for the Sahara. Daytime temperatures of 18-22 degrees are comfortable for camel treks and dune exploration, compared to the 45-degree heat of summer. Nights are cold (0-5 degrees) but desert camps provide thick blankets and heated tents. Skies are exceptionally clear for stargazing. Two-day Merzouga desert tours start from 800 MAD per person including transport, meals, and camping.',
  },
  {
    q: 'Are there hotel deals in Morocco during winter?',
    a: 'Yes, outside the December 20 to January 5 holiday window, winter is considered shoulder or low season. Riad rates in Marrakech drop to from 400 MAD per night (compared to from 700 MAD in spring). Beach resorts in Agadir offer packages from 600 MAD per night. Booking platforms show 20-40 percent discounts compared to peak season. January and February offer the best deals, especially midweek.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Winter Travel Guide 2026',
  description:
    'Complete guide to visiting Morocco in winter covering December-February weather by region, skiing, desert experiences, winter festivals, packing tips, and hotel deals.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-atlas.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Winter Travel Guide', item: PAGE_URL },
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
   DATA: WINTER WEATHER BY REGION
   ================================================================ */

const winterRegions = [
  {
    region: 'Marrakech & Central Plains',
    icon: Sun,
    tempDay: '18-20',
    tempNight: '5-8',
    rain: '5-6 days/month',
    summary:
      'Pleasantly warm days with cool evenings. Morning fog is common in December and January. Rain arrives in brief spells. Outdoor sightseeing is comfortable by mid-morning. Pack a light jacket for evenings and a sweater for early mornings.',
    bestFor: 'Medina exploring, day trips to Ourika Valley, cooking classes, hammam visits',
  },
  {
    region: 'Fes, Meknes & Northern Interior',
    icon: CloudRain,
    tempDay: '13-16',
    tempNight: '3-6',
    rain: '8-10 days/month',
    summary:
      'The coldest and wettest of the major tourist cities. Mornings are chilly with damp air. Traditional riads can feel cold inside since central heating is uncommon. Rain is more persistent than in the south. Clear days reveal stunning light on the medieval medina walls.',
    bestFor: 'Tanneries, museums, ceramic workshops, Volubilis day trip on clear days',
  },
  {
    region: 'Tangier & Northwest Coast',
    icon: Wind,
    tempDay: '14-17',
    tempNight: '8-10',
    rain: '10-12 days/month',
    summary:
      'Atlantic and Mediterranean influences bring the most rainfall in the country. Wind can be strong along the coast. The upside is green, lush landscapes and dramatic ocean storms that make for striking photography. Indoor attractions like the Kasbah Museum and cafes along the Petit Socco stay dry and inviting.',
    bestFor: 'Cafe culture, art galleries, Kasbah Museum, photographing winter storms',
  },
  {
    region: 'Agadir & Southern Coast',
    icon: Sun,
    tempDay: '20-23',
    tempNight: '10-13',
    rain: '2-3 days/month',
    summary:
      'The warmest winter weather in Morocco. Beach days are possible even in January, though the Atlantic water is cool at 17 degrees. This is where European sun-seekers congregate from November through March. Resorts run at reduced rates outside the holiday window.',
    bestFor: 'Beach relaxation, Souss-Massa National Park, Taghazout surfing, Tiznit day trip',
  },
  {
    region: 'Atlas Mountains (above 1,500m)',
    icon: Snowflake,
    tempDay: '5-10',
    tempNight: '-5 to 0',
    rain: 'Snow above 2,000m',
    summary:
      'Snow covers the High Atlas peaks from November through April. Passes like Tizi n\'Tichka can close temporarily after heavy snowfall. Villages below the snowline experience cold, crisp days ideal for hiking when trails are dry. Oukaimeden ski station operates when snow cover is sufficient.',
    bestFor: 'Skiing at Oukaimeden, winter trekking, snow photography, mountain lodge stays',
  },
  {
    region: 'Sahara Desert (Merzouga, Zagora)',
    icon: Sunrise,
    tempDay: '18-22',
    tempNight: '0-5',
    rain: 'Near zero',
    summary:
      'Clear skies, no humidity, and temperatures that allow full days of exploration without heat exhaustion. Nights are genuinely cold, dropping near freezing under cloudless skies that reveal an extraordinary density of stars. Desert camps provide heavy blankets and some offer heated common tents.',
    bestFor: 'Camel treks, overnight camping, stargazing, sunrise dune photography',
  },
] as const;

/* ================================================================
   DATA: SKIING IN MOROCCO
   ================================================================ */

const skiResorts = [
  {
    name: 'Oukaimeden',
    icon: Mountain,
    altitude: '2,600m - 3,258m',
    distance: '75 km from Marrakech (1.5 hours)',
    season: 'Late December - March (snow-dependent)',
    runs: '5 runs from beginner to intermediate, 1 chairlift, several drag lifts',
    liftPass: 'From 100 MAD per day',
    rental: 'From 200 MAD per day for skis, boots, and poles',
    description:
      'Africa\'s highest ski resort sits in the High Atlas above Marrakech. The resort is modest by European standards but offers a surreal experience: skiing with views of Saharan plains to the south and snow-capped Toubkal to the west. Beginners and families find the gentle slopes approachable. Conditions are unpredictable, and some seasons see limited snowfall. Local guides offer equipment rental and basic instruction at the base area.',
    tips: 'Check snow conditions before driving up. The road from Marrakech is winding but paved. Bring your own gear if you have high standards, as rental equipment is basic. A day trip from Marrakech is the most practical approach.',
  },
  {
    name: 'Michlifen',
    icon: Mountain,
    altitude: '1,800m - 2,000m',
    distance: '17 km from Ifrane (20 minutes)',
    season: 'January - February (snow-dependent)',
    runs: 'Gentle slopes for beginners, no formal lift system',
    liftPass: 'From 50 MAD (basic drag lifts)',
    rental: 'From 150 MAD per day from local vendors',
    description:
      'Located near the Swiss-style town of Ifrane in the Middle Atlas, Michlifen offers a more laid-back skiing experience. The slopes are gentler and the infrastructure more basic than Oukaimeden. Ifrane itself, with its clean streets and European architecture, feels like a different country from Marrakech or Fes. Cedar forests surrounding the area are home to Barbary macaques, adding wildlife to the winter landscape.',
    tips: 'Combine with a visit to Ifrane and the Azrou cedar forest. The drive from Fes takes about 1.5 hours. Accommodation in Ifrane is comfortable and affordable, with hotels from 500 MAD per night.',
  },
] as const;

/* ================================================================
   DATA: WINTER FESTIVALS & EVENTS
   ================================================================ */

const winterFestivals = [
  {
    name: 'Marrakech International Film Festival',
    month: 'November/December',
    location: 'Marrakech',
    description:
      'Founded by King Mohammed VI, this prestigious festival screens international and Moroccan films across venues in the city. Red carpet events, public screenings, and industry panels bring filmmakers and cinephiles to Marrakech during the early winter.',
  },
  {
    name: 'Amazigh (Berber) New Year - Yennayer',
    month: 'January 13',
    location: 'Nationwide, especially Atlas & Rif regions',
    description:
      'The Amazigh New Year is celebrated with traditional feasts, music, and dancing in Berber communities across Morocco. Families prepare special dishes including couscous with seven vegetables and dried meats. In 2024, Morocco officially recognized Yennayer as a national holiday.',
  },
  {
    name: 'Almond Blossom Festival',
    month: 'Late January - February',
    location: 'Tafraoute, Anti-Atlas',
    description:
      'When almond trees burst into pink and white blossoms across the Anti-Atlas valleys, Tafraoute hosts a festival celebrating the harvest with Amazigh music, folk dancing, and local cuisine. The blooming valleys against red granite mountains create one of Morocco\'s most photogenic winter scenes.',
  },
  {
    name: 'New Year Eve Celebrations',
    month: 'December 31',
    location: 'Marrakech, Casablanca, Agadir',
    description:
      'While not a traditional Moroccan holiday, New Year Eve has become a significant event in major cities. Hotels and restaurants host gala dinners. Jemaa el-Fna in Marrakech fills with revelers. Casablanca\'s waterfront and Agadir\'s beachfront promenade host fireworks and live music.',
  },
  {
    name: 'Tan-Tan Moussem (if winter dates)',
    month: 'Varies (often late winter/spring)',
    location: 'Tan-Tan, Southern Morocco',
    description:
      'This UNESCO-recognized gathering of nomadic tribes features camel races, traditional music, and displays of Saharan culture. While dates vary, it occasionally falls in the late winter period. Check current schedules before planning around this event.',
  },
] as const;

/* ================================================================
   DATA: WINTER FOOD SPECIALTIES
   ================================================================ */

const winterFoods = [
  {
    name: 'Harira',
    icon: Flame,
    description:
      'This hearty tomato-based soup with lentils, chickpeas, and lamb is Morocco\'s definitive cold-weather dish. Traditionally served during Ramadan to break the fast, it appears on street corners and restaurant menus throughout winter. A bowl costs from 10 MAD at street stalls.',
    where: 'Every city. Best at neighborhood stalls in the medina.',
  },
  {
    name: 'Rfissa',
    icon: Utensils,
    description:
      'Shredded msemen flatbread layered with lentil sauce and slow-cooked chicken spiced with fenugreek and ras el hanout. This is comfort food at its most warming: rich, aromatic, and filling. Traditionally prepared for new mothers, it appears on winter menus across the country.',
    where: 'Home kitchens and traditional restaurants, especially in Fes and Meknes.',
  },
  {
    name: 'Tanjia (Marrakech Slow-Cooked Stew)',
    icon: Flame,
    description:
      'A clay urn filled with beef or lamb, preserved lemon, garlic, saffron, and smen (aged butter), sealed and slow-cooked in the embers of a hammam furnace for 6-8 hours. The result is fork-tender meat in a deeply spiced broth. This dish is uniquely Marrakchi.',
    where: 'Marrakech medina restaurants. Traditionally a weekend dish prepared by men.',
  },
  {
    name: 'Bessara (Fava Bean Soup)',
    icon: Utensils,
    description:
      'A thick, creamy soup made from dried fava beans, drizzled with olive oil and dusted with cumin and paprika. Served with fresh bread, it is the breakfast of choice for working-class Moroccans during the cold months. Filling, nutritious, and costs from 5 MAD per bowl.',
    where: 'Street-side bessara shops open at dawn in every Moroccan city.',
  },
  {
    name: 'Msemen & Baghrir with Honey',
    icon: Utensils,
    description:
      'These traditional flatbreads -- msemen is layered and buttery, baghrir is spongy with a thousand tiny holes -- are served warm with honey and butter for breakfast or afternoon tea. In winter, the combination of hot bread and honey is deeply satisfying.',
    where: 'Everywhere. Best from street vendors who cook them fresh to order from 3 MAD.',
  },
  {
    name: 'Mint Tea (Atay)',
    icon: Flame,
    description:
      'Morocco\'s national drink takes on extra importance in winter. Served scalding hot and sweet, the warmth and sugar provide immediate comfort against cold winds. In the mountains, some families add wormwood (chiba) or other herbs for additional warmth and flavor.',
    where: 'Every cafe, restaurant, riad, and home. Offered as a gesture of hospitality.',
  },
] as const;

/* ================================================================
   DATA: PACKING LIST FOR WINTER
   ================================================================ */

const packingEssentials = [
  {
    category: 'Clothing Layers',
    icon: Shirt,
    items: [
      'Warm fleece or wool sweater for evenings and mountain areas',
      'Light waterproof jacket with hood for rain in northern cities',
      'Thermal base layer if visiting the Sahara overnight or Atlas Mountains',
      'Comfortable walking shoes with good grip for wet medina streets',
      'Warm hat, scarf, and gloves for mountain excursions and desert nights',
      'Light layers for warm Marrakech and Agadir afternoons',
    ],
  },
  {
    category: 'Weather Essentials',
    icon: Cloud,
    items: [
      'Sunscreen SPF 30+ (UV remains strong even in winter)',
      'Sunglasses with UV protection',
      'Compact umbrella or packable rain jacket',
      'Moisturizer and lip balm (dry mountain and desert air)',
    ],
  },
  {
    category: 'Desert & Mountain Gear',
    icon: Tent,
    items: [
      'Headlamp or small flashlight for desert camps',
      'Camera with long exposure capability for night sky photography',
      'Warm sleeping socks for desert camp nights',
      'Daypack for hiking and day trips',
    ],
  },
] as const;

/* ================================================================
   DATA: PRACTICAL TIPS
   ================================================================ */

const practicalTips = [
  { title: 'Book Riads with Heating', icon: Flame, text: 'Many traditional riads lack central heating. Ask specifically about heating options before booking. Look for riads with fireplaces, underfloor heating, or portable heaters. Electric blankets are common in better-managed properties.' },
  { title: 'Drive Cautiously in Mountains', icon: AlertTriangle, text: 'The Tizi n\'Tichka and Tizi n\'Test passes can receive snow and ice in winter. Carry chains if renting a car. Check road conditions before departing. Some high passes close temporarily after heavy snowfall.' },
  { title: 'Plan Indoor Alternatives', icon: Info, text: 'Have backup plans for rainy days: museum visits, cooking classes, hammam sessions, shopping in covered souks. Morocco\'s indoor attractions are substantial enough to fill entire days.' },
  { title: 'Daylight Hours Are Shorter', icon: Clock, text: 'Sunset comes early in winter, around 5:30 PM in December. Plan outdoor activities for the morning and early afternoon. Medina exploration is enjoyable after dark with the right precautions, but photography requires daylight.' },
  { title: 'Desert Nights Require Preparation', icon: Thermometer, text: 'Do not underestimate Sahara cold after sundown. Temperatures drop rapidly from 20 degrees to near freezing. Bring thermal layers and ask your tour operator about heated tents and extra blankets.' },
  { title: 'Negotiate Winter Rates', icon: DollarSign, text: 'Outside the December 20 to January 5 window, you have significant bargaining power. Hotels, riads, and tour operators are often willing to negotiate. Extended stays of 3+ nights frequently receive additional discounts.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoWinterTravelPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-atlas.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Winter Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Snowflake className="w-4 h-4" />
            Seasonal Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Winter Travel
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Mild days, snow-capped Atlas peaks, uncrowded medinas, and Sahara skies sharp with stars.
            December through February is Morocco at its most rewarding -- and most affordable.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: Why Winter ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco in Winter Is a Smart Choice
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              While much of Europe shivers under gray skies, Morocco offers something rare: genuine
              warmth, cultural depth, and manageable crowds all in one destination that sits just a
              three-hour flight from most European capitals. Marrakech in January averages 18 degrees
              Celsius during the day. Agadir stays above 20. Even the northern cities, which see
              more rain, rarely drop below 12 degrees in daylight hours.
            </p>
            <p>
              The real advantage of winter travel extends beyond weather. The summer crush that packs
              Jemaa el-Fna and the Fes medina fades after October. By January, you share the blue
              streets of Chefchaouen with a fraction of the visitors that mob them in July. Riad owners
              drop their rates. Tour guides have more time. Restaurants feel local rather than touristic.
              The country opens up in ways that the peak season simply does not allow.
            </p>
            <p>
              Winter also unlocks experiences unavailable in other months. Skiing in the High Atlas, the
              Amazigh New Year celebrations of Yennayer on January 13, the pink almond blossoms
              carpeting the Anti-Atlas valleys in late January, and Sahara camping under skies so clear
              that the Milky Way casts visible shadows on the dunes. These are winter-only moments that
              most visitors never realize Morocco offers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Winter Weather by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Winter Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco spans coastal plains, mountain ranges, and desert. Winter weather varies
            dramatically depending on where you go. Plan your route based on the temperatures
            and conditions that suit your travel style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winterRegions.map((r) => {
              const RegionIcon = r.icon;
              return (
                <div key={r.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <RegionIcon className="w-7 h-7 text-[var(--color-accent)]" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {r.region}
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-2">
                      <p className="text-xs text-[var(--text-secondary)]">Day</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{r.tempDay}&deg;C</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-2">
                      <p className="text-xs text-[var(--text-secondary)]">Night</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{r.tempNight}&deg;C</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-2">
                      <p className="text-xs text-[var(--text-secondary)]">Rain</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{r.rain}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{r.summary}</p>
                  <p className="text-xs text-[var(--color-accent)] font-medium">
                    <Star className="w-3.5 h-3.5 inline mr-1" />
                    {r.bestFor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Month-by-Month Breakdown
          </h2>

          <div className="space-y-8">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                December: Festive Season Meets Mild Weather
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                December starts quiet and builds toward the holiday rush. The first two weeks offer
                the best combination of mild weather and low prices. Marrakech sits at a comfortable
                18-20 degrees during the day. The Sahara is ideal for camping. Snow begins falling on
                the High Atlas, opening the ski season at Oukaimeden. The Marrakech International Film
                Festival typically runs in late November or early December, adding cultural buzz to the city.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <strong>Pricing:</strong> Rates climb sharply after December 20. Book holiday-period
                accommodation by October to avoid inflated last-minute prices. Riads in Marrakech
                charge from 400 MAD per night in early December, rising to from 900 MAD during the
                holiday window. Seasonal pricing can change year to year.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                January: Best Deals and Quietest Crowds
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                January after the first week is Morocco at its quietest and most affordable. Hotels drop
                rates to fill rooms. Tour operators offer discounted packages. The medinas feel genuinely
                local. This is the coldest month, with Fes and the north occasionally dipping to near
                freezing at night. The Amazigh New Year (Yennayer) on January 13 brings traditional
                celebrations, particularly in Atlas Mountain and Rif communities. Almond trees begin
                blooming in the Anti-Atlas toward the end of the month.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <strong>Pricing:</strong> The lowest hotel rates of the year. Riads in Marrakech from
                350 MAD per night. Desert tours at their most negotiable. Seasonal pricing can change.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                February: Almond Blossoms and Warming Days
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                February marks the transition toward spring. Temperatures begin rising, with Marrakech
                approaching 20-22 degrees by month end. The almond blossom season peaks in the
                Anti-Atlas, centered around Tafraoute, where the Almond Blossom Festival draws visitors
                to valleys carpeted in pink and white flowers against red granite mountains. Northern
                cities remain rainy but days grow longer. The ski season at Oukaimeden is often at its
                best in February with accumulated snow from earlier months.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <strong>Pricing:</strong> Slightly higher than January as spring approaches. Still
                20-30 percent below peak season rates. Seasonal pricing can change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skiing in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Skiing in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Few travelers realize that Morocco has ski resorts. The Atlas Mountains receive
            reliable snowfall above 2,000 meters, and two established stations offer equipment rental,
            lift access, and runs suitable for beginners through intermediate skiers.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skiResorts.map((resort) => {
              const ResortIcon = resort.icon;
              return (
                <div key={resort.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ResortIcon className="w-7 h-7 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {resort.name}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <p className="text-xs text-[var(--text-secondary)]">Altitude</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{resort.altitude}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <p className="text-xs text-[var(--text-secondary)]">Distance</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{resort.distance}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <p className="text-xs text-[var(--text-secondary)]">Lift Pass</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{resort.liftPass}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <p className="text-xs text-[var(--text-secondary)]">Rental</p>
                      <p className="text-sm font-bold text-[var(--text-primary)]">{resort.rental}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {resort.description}
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-xs text-amber-800">
                      <Info className="w-3.5 h-3.5 inline mr-1" />
                      <strong>Tip:</strong> {resort.tips}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ski image */}
          <div className="mt-10 relative h-72 md:h-96 rounded-xl overflow-hidden max-w-3xl mx-auto">
            <img
              src="/images/hero-skiing-morocco.webp"
              alt="Skiers on the slopes at Oukaimeden ski resort in the Atlas Mountains of Morocco"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
              Oukaimeden Ski Resort, High Atlas Mountains
            </p>
          </div>
        </div>
      </section>

      {/* ── Winter Desert Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Sahara in Winter: Peak Season for the Desert
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Summer temperatures in the Sahara regularly exceed 45 degrees Celsius, making
              extended exploration miserable and potentially dangerous. Winter reverses the equation
              entirely. Daytime temperatures of 18-22 degrees allow full days of camel trekking,
              dune climbing, and 4x4 exploration without the punishing heat. This is why experienced
              travelers consider December through February the true high season for the Sahara,
              even though Morocco overall is in its quiet period.
            </p>
            <p>
              Nights require preparation. After sunset, temperatures in the Erg Chebbi dunes near
              Merzouga can drop to near freezing under cloudless skies. Quality desert camps
              compensate with thick Berber blankets, heated common tents, and hot tagine dinners
              around fire pits. The cold is worthwhile because winter desert skies deliver some
              of the clearest stargazing on the planet. The Milky Way stretches in a bright band
              overhead, and shooting stars are frequent enough that you stop counting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Merzouga & Erg Chebbi
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The iconic towering dunes reaching 150 meters. Two-day tours from Marrakech start
                from 800 MAD per person including transport, meals, camel trek, and overnight camping.
                Luxury glamping options with private tents and en-suite bathrooms start from 2,000 MAD.
                Seasonal pricing can change based on demand.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Zagora & Erg Chigaga
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                More remote and less touristed than Merzouga. Erg Chigaga requires 4x4 access
                across 50 kilometers of desert track. The payoff is near-total solitude among
                massive dunes. Two-day tours from Marrakech start from 1,200 MAD. The extra
                distance and remoteness make this the choice for travelers wanting an authentic,
                uncrowded desert experience.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Winter Desert Photography
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Winter light in the Sahara is prized by photographers. The sun sits lower on the
                horizon, casting long shadows that define dune ridges and ripple patterns. Golden
                hour extends longer than in summer. Sunrise over Erg Chebbi, typically around
                7:30 AM in January, is the single most photographed moment on any Morocco trip.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Stargazing Conditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Winter air above the Sahara carries less Saharan dust than summer, improving
                visibility. The cold air reduces atmospheric shimmer. Combined with near-zero light
                pollution, conditions rival dedicated observatory sites. The Geminids meteor shower
                peaks in mid-December, adding celestial spectacle to an already extraordinary night sky.
              </p>
            </div>
          </div>

          {/* Desert image */}
          <div className="mt-10 relative h-72 md:h-80 rounded-xl overflow-hidden">
            <img
              src="/images/hero-sahara-camp.webp"
              alt="Desert camp in the Sahara near Merzouga with tents under a clear winter night sky"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
              Winter Camp in the Erg Chebbi Dunes, Merzouga
            </p>
          </div>
        </div>
      </section>

      {/* ── Winter Festivals & Events ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Winter Festivals &amp; Events
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s winter calendar includes film screenings, traditional Amazigh celebrations,
            and natural spectacles like the almond blossom season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winterFestivals.map((fest) => (
              <div key={fest.name} className="card-moroccan p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {fest.month}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {fest.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">
                  {fest.description}
                </p>
                <p className="text-xs font-medium text-[var(--color-accent)]">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {fest.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Christmas & New Year in Morocco ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Christmas &amp; New Year in Morocco
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is a Muslim-majority country, and Christmas is not a public holiday. You will not
              find widespread Christmas decorations in medinas or hear carols in the souks. However,
              Morocco has a long tradition of welcoming international travelers, and the hospitality
              industry caters to holiday visitors with genuine warmth.
            </p>
            <p>
              International hotels in Marrakech, Casablanca, Agadir, and Tangier host Christmas Eve
              and Christmas Day dinners with decorated dining rooms, special menus blending Moroccan
              and Western cuisine, and festive entertainment. Some luxury riads organize private
              celebrations for their guests, including gift exchanges and decorated common areas.
              Expect to pay from 500 MAD per person for a Christmas dinner at a mid-range hotel,
              and from 1,500 MAD at luxury properties. Seasonal pricing can change.
            </p>
            <p>
              New Year Eve is more broadly celebrated. Jemaa el-Fna in Marrakech fills with both
              locals and tourists as midnight approaches. Casablanca&apos;s waterfront hosts fireworks
              visible from the Hassan II Mosque corniche. Agadir&apos;s beachfront promenade comes alive
              with street performers and impromptu celebrations. Hotels across the country offer gala
              dinners with live music, starting from 800 MAD per person. The period from December 20
              through January 5 carries premium pricing, with hotel rates 40-60 percent above the
              January baseline.
            </p>
          </div>
        </div>
      </section>

      {/* ── Winter Food Specialties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Winter Food Specialties
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan cuisine shifts toward warming, slow-cooked dishes when temperatures drop.
            These cold-weather staples are deeply satisfying and often cost less than summer fare.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {winterFoods.map((food) => {
              const FoodIcon = food.icon;
              return (
                <div key={food.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {food.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {food.description}
                  </p>
                  <p className="text-xs font-medium text-[var(--color-accent)]">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {food.where}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Morocco in Winter
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            The key principle is layers. Mornings and evenings demand warmth; midday in Marrakech
            or Agadir can feel like spring. A versatile wardrobe that covers desert nights, rainy
            medina walks, and sunny afternoon terraces will serve you well.
          </p>

          <div className="space-y-6">
            {packingEssentials.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {cat.category}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
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

      {/* ── Rainy Season Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <CloudRain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Navigating the Rainy Season
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              Morocco&apos;s rainy season runs from November through March, with December and January
              seeing the most precipitation in northern regions. Tangier, Chefchaouen, and Fes
              receive the heaviest rainfall, averaging 80-100mm per month. Marrakech is drier at
              about 30mm per month. The south coast and Sahara barely register any rainfall at all.
            </p>
            <p>
              Rain in Morocco typically arrives in short, intense bursts rather than the sustained
              drizzle common in northern Europe. A morning shower may give way to brilliant afternoon
              sunshine. Medina streets drain quickly due to their stone surfaces, though some older
              passages can develop puddles that persist for hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Indoor Rainy Day Activities
              </h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Cooking classes (from 300 MAD) in Marrakech, Fes, or Essaouira</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Hammam and spa sessions (from 50 MAD public, from 300 MAD private)</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Museum visits: MACMA in Marrakech, Dar Batha in Fes, Kasbah Museum in Tangier</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Covered souks for shopping (rain never reaches the deep medina corridors)</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Ceramic and mosaic workshops in Fes (from 200 MAD)</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Riad tea ceremonies and afternoon reading in courtyard salons</li>
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-amber-600" />
                Rain Precautions
              </h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Waterproof shoes with grip (medina cobblestones become slippery)</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Compact umbrella or packable rain jacket in your daypack</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Waterproof phone case or dry bag for electronics</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Avoid wadis and dry riverbeds after heavy rain (flash flood risk)</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Check mountain pass conditions before driving over the Atlas</li>
                <li><CheckCircle className="w-3 h-3 inline mr-1 text-green-600" /> Schedule flexible itineraries with indoor backup plans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hotel Deals & Budget Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Winter Hotel Deals &amp; Budget Tips
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              Outside the December 20 to January 5 holiday window, winter represents genuine value
              for Morocco travelers. Hotels that charge premium rates in April or October drop prices
              to attract guests during the quieter months. The savings are most dramatic at mid-range
              and luxury properties, which rely on occupancy-based pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-moroccan p-5 text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Budget Riads
              </h3>
              <p className="text-2xl font-bold text-[var(--color-accent)]">From 250 MAD</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">per night in January</p>
              <p className="text-xs text-[var(--text-secondary)]">vs from 450 MAD in peak season</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Star className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Mid-Range Hotels
              </h3>
              <p className="text-2xl font-bold text-[var(--color-accent)]">From 500 MAD</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">per night in January</p>
              <p className="text-xs text-[var(--text-secondary)]">vs from 900 MAD in peak season</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                Luxury Properties
              </h3>
              <p className="text-2xl font-bold text-[var(--color-accent)]">From 1,200 MAD</p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">per night in January</p>
              <p className="text-xs text-[var(--text-secondary)]">vs from 2,500 MAD in peak season</p>
            </div>
          </div>

          <div className="card-moroccan p-5 bg-amber-50 border-amber-200">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-amber-900 mb-2">
              <Info className="w-4 h-4 inline mr-1" />
              Booking Strategy for Winter Travel
            </h3>
            <ul className="space-y-1.5 text-xs text-amber-800">
              <li><CheckCircle className="w-3 h-3 inline mr-1 text-amber-600" /> Book the December 20-January 5 window at least 3 months in advance</li>
              <li><CheckCircle className="w-3 h-3 inline mr-1 text-amber-600" /> For January and February, book 2-4 weeks ahead for the best selection</li>
              <li><CheckCircle className="w-3 h-3 inline mr-1 text-amber-600" /> Contact riads directly for better rates than booking platforms</li>
              <li><CheckCircle className="w-3 h-3 inline mr-1 text-amber-600" /> Ask about extended stay discounts (3+ nights often brings 10-15% off)</li>
              <li><CheckCircle className="w-3 h-3 inline mr-1 text-amber-600" /> Confirm heating availability before booking (not all riads have it)</li>
              <li><CheckCircle className="w-3 h-3 inline mr-1 text-amber-600" /> Seasonal pricing can change based on demand and local events</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Winter Travel Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Image Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Winter Morocco in Pictures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="Snow-dusted Atlas Mountains peaks rising above green valleys in winter"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountains in Winter</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-desert.webp"
                alt="Golden Sahara desert dunes under a clear winter sky near Merzouga"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Winter in the Sahara</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about traveling to Morocco in winter.
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
                title: 'Best Time to Visit Morocco',
                description: 'Month-by-month breakdown of weather, crowds, pricing, and seasonal highlights across all regions.',
                href: '/best-time-visit-morocco',
                icon: Calendar,
              },
              {
                title: 'Morocco Packing List',
                description: 'Complete packing guide for all seasons with specific gear recommendations for desert, mountains, and coast.',
                href: '/morocco-packing-list',
                icon: Luggage,
              },
              {
                title: 'Desert Adventures',
                description: 'Sahara camping, camel treks, 4x4 tours, sandboarding, and overnight experiences in Merzouga and Zagora.',
                href: '/desert-adventures',
                icon: Compass,
              },
              {
                title: 'Budget Travel Morocco',
                description: 'How to explore Morocco on a tight budget: cheap riads, street food, public transport, and free attractions.',
                href: '/morocco-budget-travel',
                icon: DollarSign,
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

      {/* ── More Seasonal & Weather Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Seasonal &amp; Weather Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/weather', title: 'Morocco Weather Guide', desc: 'Detailed climate data for every region of Morocco with monthly temperature and rainfall charts.' },
              { href: '/packing', title: 'Packing Tips', desc: 'Season-specific packing lists covering clothing, electronics, medications, and specialty gear.' },
              { href: '/atlas-mountains', title: 'Atlas Mountains Guide', desc: 'Trekking routes, mountain villages, Toubkal ascent, and seasonal conditions for the High Atlas.' },
              { href: '/desert', title: 'Sahara Desert Guide', desc: 'Everything about visiting the Moroccan Sahara: Merzouga, Zagora, camel treks, camps, and logistics.' },
              { href: '/festivals', title: 'Morocco Festivals Calendar', desc: 'Month-by-month calendar of cultural festivals, moussems, and seasonal celebrations across Morocco.' },
              { href: '/first-time', title: 'First Time in Morocco', desc: 'Essential tips for first-time visitors covering culture shock, scams, navigation, and must-see highlights.' },
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
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3e22]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Winter Morocco Adventure
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From skiing the Atlas peaks to sleeping under Sahara stars, winter offers Morocco
            at its most diverse and affordable. Start planning your trip today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/90 transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-[family-name:var(--font-heading)] font-bold hover:bg-white/10 transition-colors"
            >
              Best Time to Visit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
