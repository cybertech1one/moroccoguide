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
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  MessageCircleQuestion,
  Sun,
  Moon,
  Utensils,
  Calendar,
  Camera,
  Compass,
  Shield,
  Wine,
  Sunset,
  Mountain,
  Tent,
  Bath,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-honeymoon`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Honeymoon Guide 2026 | Romantic Riads, Desert Camps & Itineraries',
  description:
    'Plan the perfect Morocco honeymoon. Romantic riads in Marrakech and Fes, luxury desert glamping under the stars, couple spa rituals, private tours, sunset camel rides, rooftop dining, plus 7-day and 10-day itineraries from budget to ultra-luxury.',
  keywords: [
    'Morocco honeymoon',
    'honeymoon in Morocco',
    'romantic Morocco trip',
    'Morocco couples travel',
    'romantic riads Marrakech',
    'desert glamping couples Morocco',
    'Morocco honeymoon itinerary',
    'luxury honeymoon Morocco',
    'Morocco honeymoon budget',
    'best time honeymoon Morocco',
    'Marrakech honeymoon',
    'Fes honeymoon',
    'Essaouira honeymoon',
    'Sahara desert romantic',
    'Morocco couples spa',
    'camel ride sunset Morocco',
    'rooftop dinner Marrakech',
    'Morocco honeymoon cost 2026',
  ],
  openGraph: {
    title: 'Morocco Honeymoon Guide 2026 | Romantic Riads, Desert Camps & Itineraries',
    description:
      'Complete guide to honeymooning in Morocco. Romantic riads, Sahara luxury camps, couples hammam, private tours, sunset camel rides, rooftop dining, and detailed itineraries from 7 to 10 days.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-honeymoon.webp`,
        width: 1200,
        height: 630,
        alt: 'Romantic riad courtyard in Morocco with rose petals, lanterns, and candlelight setup for honeymooners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Honeymoon Guide 2026 | Romantic Riads & Desert Glamping',
    description:
      'Romantic riads, Sahara luxury camps, couple spa experiences, private tours, and 7-day and 10-day honeymoon itineraries across Morocco.',
    images: [`${BASE_URL}/images/hero-honeymoon.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best time of year for a honeymoon in Morocco?',
    a: 'The ideal months are March to May and September to November. Spring brings wildflowers and mild temperatures (20-26 C). Autumn offers warm days without summer heat. December and January are pleasant along the coast but cold in the desert at night. Avoid July and August unless you plan to stay coastal, as inland temperatures regularly exceed 40 C.',
  },
  {
    q: 'How much does a Morocco honeymoon cost for two people?',
    a: 'A comfortable 7-day honeymoon costs from 15,000 MAD per person for mid-range riads and group tours. A luxury honeymoon with private transfers, upscale riads, and desert glamping runs from 30,000 MAD per person. An ultra-luxury trip with palace hotels and helicopter transfers starts from 60,000 MAD per person. Seasonal pricing can change during peak months.',
  },
  {
    q: 'Is Morocco safe for honeymooners?',
    a: 'Morocco is one of the safest countries in North Africa for tourists. Honeymooners should take standard precautions: use registered taxis, keep valuables in your riad safe, and book excursions through licensed operators. Moroccan hospitality is genuine, and couples traveling together are treated with great respect. Tourist police patrol major cities and popular areas.',
  },
  {
    q: 'Can we share a room as an unmarried couple in Morocco?',
    a: 'Moroccan law technically restricts unmarried Moroccan couples from sharing a room, but this law is almost never applied to foreign visitors. International hotels, riads, and guesthouses welcome unmarried foreign couples without issue. You will not be asked for a marriage certificate. Boutique riads and luxury hotels are completely accustomed to hosting couples of all types.',
  },
  {
    q: 'What should we pack for a Morocco honeymoon?',
    a: 'Pack layers. Lightweight linen and cotton for daytime, a warm jacket for desert nights and mountain excursions. Comfortable walking shoes for medinas (cobblestones are rough on sandals). A scarf or shawl for mosque visits and sun protection. Sunscreen, a hat, and sunglasses. For the desert, bring closed-toe shoes and a headscarf against wind and sand.',
  },
  {
    q: 'Do we need a private guide for our honeymoon or can we travel independently?',
    a: 'Both work. Independent travel is straightforward between major cities using trains and buses. However, a private guide adds enormous value in the medinas of Fes and Marrakech, where navigation is challenging. For the desert, a guided tour is essential since driving into the dunes requires local knowledge and 4x4 vehicles. Most honeymoon couples choose a hybrid approach: independent in cities, guided for desert and mountains.',
  },
  {
    q: 'What are the most romantic experiences couples should not miss?',
    a: 'A sunset camel ride to a luxury desert camp in Merzouga or Zagora, a private rooftop dinner with Atlas Mountain views in Marrakech, a couples hammam and massage at a traditional riad spa, a hot air balloon ride over the Marrakech palmeraie at dawn, and watching the sunset from the ramparts of Essaouira with fresh seafood.',
  },
  {
    q: 'How many days do we need for a Morocco honeymoon?',
    a: 'Seven days covers Marrakech, the desert, and either Fes or Essaouira comfortably. Ten days allows you to include all three plus the Atlas Mountains. Fewer than five days limits you to one city and a quick desert trip. If you have two weeks, add the coast, Chefchaouen, and slower exploration of the medinas without rushing.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Honeymoon Guide 2026',
  description:
    'Complete guide to planning a honeymoon in Morocco covering romantic riads, luxury desert camps, couples spa experiences, private tours, itineraries from 7 to 10 days, and budgets from mid-range to ultra-luxury.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-honeymoon.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Honeymoon Guide', item: PAGE_URL },
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
   DATA: ROMANTIC RIADS
   ================================================================ */

const romanticRiads = [
  {
    city: 'Marrakech',
    icon: Star,
    riads: [
      {
        name: 'Riad Yasmine',
        price: 'From 1,800 MAD/night',
        highlight: 'Iconic turquoise plunge pool, rooftop with Atlas views, breakfast with fresh pastries and orange juice. Intimate with only 7 rooms.',
      },
      {
        name: 'La Sultana Marrakech',
        price: 'From 4,500 MAD/night',
        highlight: 'Five historic riads merged into one palace. Rooftop spa, heated pool, private hammam suites. The honeymoon suite has a private terrace and jacuzzi.',
      },
      {
        name: 'Royal Mansour',
        price: 'From 12,000 MAD/night',
        highlight: 'Each room is a private three-story riad with its own plunge pool, fireplace, and rooftop terrace. Underground tunnels let staff move unseen. The pinnacle of Moroccan luxury.',
      },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    riads: [
      {
        name: 'Riad Fes',
        price: 'From 2,500 MAD/night',
        highlight: 'Award-winning restoration with original zellige and carved cedar. Rooftop bar overlooks the medina. The spa uses Fassi recipes passed down through generations.',
      },
      {
        name: 'Palais Amani',
        price: 'From 2,200 MAD/night',
        highlight: 'Andalusian garden with 20 citrus trees, heated pool, cooking classes, in-house hammam with organic products. Peaceful despite its medina location.',
      },
    ],
  },
  {
    city: 'Essaouira',
    icon: Compass,
    riads: [
      {
        name: 'Heure Bleue Palais',
        price: 'From 2,800 MAD/night',
        highlight: 'Rooftop pool with Atlantic sunset views. Cinema room, billiard lounge, spa. Colonial grandeur meets Moroccan artistry. The honeymoon suite faces the ocean.',
      },
      {
        name: 'Villa de l\'O',
        price: 'From 3,200 MAD/night',
        highlight: 'Boutique villa with heated pool, contemporary Moroccan design, private beach access arranged on request. Just 12 rooms for absolute privacy.',
      },
    ],
  },
];

/* ================================================================
   DATA: DESERT GLAMPING OPTIONS
   ================================================================ */

const desertCamps = [
  {
    name: 'Scarabeo Camp (Agafay Desert)',
    location: 'Agafay, 40 min from Marrakech',
    price: 'From 3,500 MAD/night per couple',
    icon: Tent,
    features: [
      'Canvas tents with king beds, en-suite bathrooms, and wood-burning stoves',
      'Only 15 tents spread across the stone desert for true isolation',
      'Candlelit dinner under open sky, private firepit, sunrise yoga',
      'Close enough to Marrakech for a 1-night romantic escape',
    ],
  },
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi dunes, Merzouga',
    price: 'From 4,000 MAD/night per couple',
    icon: Moon,
    features: [
      'Private tents with handwoven Berber carpets and en-suite showers',
      'Sunset camel ride to camp, Gnaoua music around the fire',
      'Stargazing with zero light pollution — the Milky Way is breathtaking',
      'Morning sandboarding on 150-meter dunes before breakfast',
    ],
  },
  {
    name: 'Erg Chigaga Luxury Bivouac',
    location: 'Erg Chigaga, beyond Zagora',
    price: 'From 5,000 MAD/night per couple',
    icon: Sparkles,
    features: [
      'The most remote luxury camp in Morocco — reached by 4x4 only',
      'Full-size beds with Egyptian cotton, private dining tent',
      'Total silence, no phone signal, complete disconnection',
      'Private guided walk through dunes at golden hour',
    ],
  },
];

/* ================================================================
   DATA: COUPLE EXPERIENCES
   ================================================================ */

const coupleExperiences = [
  {
    title: 'Couples Hammam & Spa',
    icon: Bath,
    price: 'From 1,200 MAD per couple',
    duration: '2-3 hours',
    description:
      'Book a private hammam room at a boutique spa. The ritual includes steam, savon noir application, full body scrub with kessa glove, ghassoul clay mask, and an argan oil massage. Rose petals and mint tea accompany the experience. Heritage Spa and Les Bains de Marrakech in Marrakech are top choices for couples.',
  },
  {
    title: 'Private Rooftop Dinner',
    icon: Utensils,
    price: 'From 800 MAD per couple',
    duration: 'Evening',
    description:
      'Many riads arrange private dinners on their terrace with panoramic views. A personal chef prepares a multi-course Moroccan feast: briouates, pastilla, slow-cooked tagine, and orange blossom crème. Lanterns, rose petals on the table, and live oud music can be arranged. Book at least 48 hours ahead.',
  },
  {
    title: 'Sunset Camel Ride',
    icon: Sunset,
    price: 'From 400 MAD per couple',
    duration: '1.5-2 hours',
    description:
      'Ride dromedaries into the Sahara dunes during the golden hour. In Merzouga, the Erg Chebbi dunes turn deep orange and purple as the sun drops. Your guide leads you to a high dune for photos, then serves mint tea before the walk back under emerging stars. Agafay and Essaouira beach offer shorter alternatives.',
  },
  {
    title: 'Hot Air Balloon at Dawn',
    icon: Sun,
    price: 'From 2,000 MAD per couple',
    duration: '3-4 hours (including transfer)',
    description:
      'Launch at sunrise over the Marrakech palmeraie or Ouarzazate plains. Float silently over olive groves, Berber villages, and the Atlas Mountains. Most operators include a champagne breakfast landing in a field. The flight lasts about 45 minutes. Book at least a week ahead during peak season.',
  },
  {
    title: 'Private Medina Tour with Photographer',
    icon: Camera,
    price: 'From 1,500 MAD per couple',
    duration: '3-4 hours',
    description:
      'A professional photographer accompanies you and your guide through the most photogenic corners of the medina. You get 50-100 edited photos in hidden doorways, colorful souks, rooftop terraces, and ancient fountains. Available in Marrakech, Fes, and Chefchaouen.',
  },
  {
    title: 'Cooking Class for Two',
    icon: Utensils,
    price: 'From 600 MAD per couple',
    duration: '4-5 hours',
    description:
      'Start at the souk selecting spices, preserved lemons, and fresh produce with your chef. Return to a riad kitchen to prepare a full Moroccan meal together: harira soup, chicken tagine with olives and preserved lemons, and semolina cookies. You eat everything you cook on the terrace afterward.',
  },
  {
    title: 'Atlas Mountain Day Escape',
    icon: Mountain,
    price: 'From 1,000 MAD per couple',
    duration: 'Full day',
    description:
      'A private driver takes you from Marrakech into the High Atlas via the Tizi n\'Test or Ourika Valley. Stop at waterfalls, walk through Berber villages, and share a traditional lunch in a local home overlooking terraced farms. The air is cooler, the pace is slower, and the views are enormous.',
  },
  {
    title: 'Wine Tasting in Meknes',
    icon: Wine,
    price: 'From 500 MAD per couple',
    duration: 'Half day',
    description:
      'Morocco has a growing wine region around Meknes. Visit Chateau Roslane or Domaine de la Zouina for vineyard tours and tastings. Moroccan reds — especially Syrah and Cabernet blends — pair well with grilled lamb and aged cheese. A surprising and elegant addition to any honeymoon.',
  },
];

/* ================================================================
   DATA: BEST CITIES FOR HONEYMOONERS
   ================================================================ */

const honeymoonCities = [
  {
    city: 'Marrakech',
    icon: Star,
    days: '2-3 days',
    vibe: 'Sensory overload, exotic luxury, endless activities',
    highlights: [
      'Riad stays in the heart of the medina',
      'Private rooftop dinners with Koutoubia views',
      'Majorelle Garden and Bahia Palace visits',
      'Souk shopping for leather, lamps, and ceramics',
      'Hot air balloon flights at dawn',
    ],
    tip: 'Book a riad in the Mouassine or Bab Doukkala quarter — close to everything but on quieter streets.',
  },
  {
    city: 'Fes',
    icon: Building,
    days: '2 days',
    vibe: 'Ancient, intellectual, deeply romantic in its quieter corners',
    highlights: [
      'Labyrinthine medina with 9,000+ alleyways',
      'Al Quaraouiyine, the world\'s oldest university',
      'Rooftop terraces overlooking a sea of white minarets',
      'Traditional Fassi cuisine at Palais Amani or Dar Roumana',
      'Day trip to Volubilis Roman ruins and Moulay Idriss',
    ],
    tip: 'Fes is less touristy than Marrakech, making it ideal for couples who prefer atmosphere over activity.',
  },
  {
    city: 'Essaouira',
    icon: Compass,
    days: '2-3 days',
    vibe: 'Laid-back coastal charm, sea breeze, creative energy',
    highlights: [
      'Walking the 18th-century ramparts at sunset',
      'Fresh seafood at the port grills',
      'Art galleries and Gnaoua music in the medina',
      'Horseback riding on the wide empty beach',
      'Day trip to argan oil cooperatives in the countryside',
    ],
    tip: 'Essaouira is windy year-round. Pack layers and embrace it — the wind keeps temperatures comfortable even in summer.',
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    days: '1-2 days',
    vibe: 'Blue-washed dreamscape, quiet, photogenic',
    highlights: [
      'Every doorway and alley is painted in shades of blue',
      'Cascade d\'Akchour waterfall hike through the Rif Mountains',
      'Small-town pace with no pressure to rush',
      'Handwoven blankets and goat cheese at the local market',
      'Some of the most Instagram-worthy photos of your entire trip',
    ],
    tip: 'Stay overnight. Day-trippers leave by 4 PM, and the blue medina at dusk belongs to those who remain.',
  },
];

/* ================================================================
   DATA: BUDGET TIERS
   ================================================================ */

const budgetTiers = [
  {
    tier: 'Mid-Range Comfort',
    icon: Heart,
    perPerson: 'From 15,000 MAD / 7 days',
    accommodation: 'Charming 3-star riads (from 800 MAD/night)',
    transport: 'Shared desert tours, trains between cities, local taxis',
    dining: 'Mix of street food and riad dinners',
    experiences: 'Group desert tour, public hammam, self-guided medina walks',
    bestFor: 'Couples who want authenticity over luxury and are comfortable with some DIY planning',
  },
  {
    tier: 'Luxury',
    icon: Gem,
    perPerson: 'From 30,000 MAD / 7 days',
    accommodation: 'Boutique riads and small luxury hotels (from 2,000 MAD/night)',
    transport: 'Private driver, domestic flights for long distances',
    dining: 'Riad restaurants, rooftop private dinners, fine dining',
    experiences: 'Private desert camp, couples spa, guided tours, cooking class',
    bestFor: 'Couples who want comfort, privacy, and curated experiences without going ultra-premium',
  },
  {
    tier: 'Ultra-Luxury',
    icon: Crown,
    perPerson: 'From 60,000 MAD / 7 days',
    accommodation: 'Palace hotels (Royal Mansour, La Mamounia) from 8,000 MAD/night',
    transport: 'Private driver throughout, helicopter for desert transfers',
    dining: 'Michelin-level restaurants, private chef experiences, wine pairings',
    experiences: 'Exclusive desert bivouacs, private balloon flight, photographer, personal guide',
    bestFor: 'Couples celebrating a milestone who want every detail handled and every moment extraordinary',
  },
];

/* ================================================================
   DATA: 7-DAY ITINERARY
   ================================================================ */

const itinerary7Day = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    icon: MapPin,
    details:
      'Private airport transfer to your riad. Settle in, explore your riad\'s courtyard and rooftop. Late afternoon walk through the Mellah (Jewish quarter) and spice souk. Evening: private rooftop dinner at your riad with tagine and Moroccan salads.',
  },
  {
    day: 2,
    title: 'Marrakech Immersion',
    icon: Compass,
    details:
      'Morning: guided tour of Bahia Palace and Saadian Tombs. Lunch at a courtyard restaurant in the medina. Afternoon: Majorelle Garden and YSL Museum. Late afternoon: couples hammam at Heritage Spa. Evening: Jemaa el-Fna square — watch the storytellers, musicians, and food stalls come alive.',
  },
  {
    day: 3,
    title: 'Atlas Mountains Day Trip',
    icon: Mountain,
    details:
      'Private driver to Ourika Valley or Imlil. Short hike to waterfalls, visit a Berber family for traditional lunch in their home. Return to Marrakech by late afternoon. Optional: hot air balloon at dawn before departing (requires early wake-up).',
  },
  {
    day: 4,
    title: 'Drive to the Desert',
    icon: Sun,
    details:
      'Depart early for Ait Benhaddou kasbah (UNESCO). Stop for photos at the rose-tinted fortress. Continue over the Tizi n\'Tichka pass through dramatic Atlas scenery. Arrive at Merzouga or Zagora by late afternoon. Sunset camel ride to your luxury desert camp.',
  },
  {
    day: 5,
    title: 'Desert Morning & Travel to Fes',
    icon: Moon,
    details:
      'Wake before dawn to watch sunrise paint the dunes gold and pink. Breakfast in camp, then sandboarding or a quiet walk. Depart by 4x4 toward Fes via the Ziz Gorge and Ifrane cedar forests. Arrive in Fes by evening. Check into your riad.',
  },
  {
    day: 6,
    title: 'Fes Medina',
    icon: Building,
    details:
      'Full-day guided tour of the Fes medina: tanneries viewed from above, Al Quaraouiyine mosque exterior, Bou Inania Medersa, and the royal palace gates. Lunch at a palace restaurant. Afternoon: pottery workshop or leather shopping. Evening: dinner at Dar Roumana.',
  },
  {
    day: 7,
    title: 'Departure',
    icon: Calendar,
    details:
      'Morning at leisure. Last rooftop breakfast overlooking the medina. Transfer to Fes airport for departure. Alternatively, add Chefchaouen as a 1-night extension before flying out.',
  },
];

/* ================================================================
   DATA: 10-DAY ITINERARY
   ================================================================ */

const itinerary10Day = [
  { day: '1-3', title: 'Marrakech', summary: 'Riad, medina, hammam, Majorelle, rooftop dinner, Atlas day trip' },
  { day: '4-5', title: 'Sahara Desert', summary: 'Ait Benhaddou, camel ride, luxury camp, sunrise, sandboarding' },
  { day: '6-7', title: 'Fes', summary: 'Medina tour, tanneries, cooking class, palace dining' },
  { day: '8', title: 'Chefchaouen', summary: 'Blue medina, Akchour waterfall hike, local market' },
  { day: '9-10', title: 'Essaouira', summary: 'Ramparts sunset, port seafood, beach ride, argan cooperatives, departure from Essaouira or return to Marrakech' },
];

/* ================================================================
   DATA: BEST SEASONS
   ================================================================ */

const seasons = [
  {
    period: 'March - May (Spring)',
    icon: Sun,
    temp: '20-28 C',
    verdict: 'Best overall',
    details:
      'Wildflowers across the Atlas, mild temperatures everywhere, long daylight hours. The desert is warm but not scorching. Riads have their courtyards in full bloom. Shoulder-season pricing for accommodation.',
  },
  {
    period: 'September - November (Autumn)',
    icon: Sunset,
    temp: '22-30 C',
    verdict: 'Excellent',
    details:
      'Post-summer heat breaks. The harvest season brings fresh dates, pomegranates, and figs. The desert cools to comfortable levels. Fewer tourists than spring. October is arguably the single best month.',
  },
  {
    period: 'December - February (Winter)',
    icon: Moon,
    temp: '10-20 C',
    verdict: 'Good (with caveats)',
    details:
      'Coastal cities like Essaouira and Agadir are pleasant. Marrakech has sunny days but cold nights. The desert drops below freezing after midnight. Pack warm layers. Budget-friendly pricing across the board.',
  },
  {
    period: 'June - August (Summer)',
    icon: Sun,
    temp: '30-45 C',
    verdict: 'Coastal only',
    details:
      'Marrakech, Fes, and the desert are brutally hot. Essaouira and the Atlantic coast remain cool thanks to trade winds. If you must travel in summer, plan a coastal honeymoon and skip inland cities.',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoHoneymoonPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px]">
        <img
          src="/images/hero-honeymoon.webp"
          alt="Romantic candlelit riad courtyard in Morocco with rose petals and lantern glow"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 max-w-4xl">
            Morocco Honeymoon Guide 2026
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-[family-name:var(--font-heading)] opacity-90">
            Romantic riads, Sahara starlight, couples spa rituals, and private rooftop dinners — everything you need to plan an unforgettable honeymoon.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="container-morocco py-4 text-sm text-gray-500">
        <ol className="flex items-center gap-1 flex-wrap">
          <li className="flex items-center gap-1">
            <Home className="w-4 h-4" />
            <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3 h-3" />
          <li className="text-[#A0522D] font-medium">Morocco Honeymoon Guide</li>
        </ol>
      </nav>

      {/* ── Introduction ── */}
      <section className="container-morocco py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
            Why Morocco Is One of the World&apos;s Great Honeymoon Destinations
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed font-[family-name:var(--font-heading)]">
            <p>
              Morocco delivers a honeymoon that feels genuinely different from the standard beach resort. Here, your mornings start on a riad rooftop overlooking centuries-old minarets, your afternoons disappear into labyrinthine souks fragrant with cedar and saffron, and your evenings end under a canopy of Saharan stars that feels impossibly close.
            </p>
            <p>
              The country packs an extraordinary range of landscapes into a compact geography. In the span of a single week, you can move from the red walls of Marrakech to the snow-capped Atlas Mountains, across the Draa Valley to the towering dunes of Erg Chebbi, and back to the windswept Atlantic coast of Essaouira. Each transition feels like entering a different world.
            </p>
            <p>
              What makes Morocco particularly compelling for couples is the culture of hospitality. Moroccan hosts take visible pride in making guests feel celebrated. Riad owners arrange rose petals and candlelight without being asked. Your desert guide remembers your tea preference. The hammam attendant brings extra argan oil for your shoulders. This instinct for generosity transforms a trip into something deeply personal.
            </p>
            <p>
              Practically, Morocco offers remarkable value. A luxury honeymoon here costs a fraction of equivalent experiences in the Maldives, Bali, or southern Europe, and the flight from most European cities takes under four hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Best Seasons ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              <Calendar className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
              Best Time for a Morocco Honeymoon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Timing shapes every aspect of your trip, from comfort to pricing to which regions are accessible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasons.map((s) => (
              <div key={s.period} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <s.icon className="w-6 h-6 text-[#C4960C]" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">{s.period}</h3>
                </div>
                <div className="flex items-center gap-4 mb-3 text-sm">
                  <span className="bg-[#FAF8F5] px-3 py-1 rounded-full text-gray-700">{s.temp}</span>
                  <span className="font-semibold text-[#A0522D]">{s.verdict}</span>
                </div>
                <p className="text-gray-600 font-[family-name:var(--font-heading)] text-sm leading-relaxed">{s.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Cities ── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
            <MapPin className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
            Best Cities for Honeymooners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Each city offers a different rhythm and mood. Most couples combine two or three.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {honeymoonCities.map((c) => (
            <div key={c.city} className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-2">
                <c.icon className="w-6 h-6 text-[#C4960C]" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">{c.city}</h3>
                <span className="ml-auto text-sm bg-[#FAF8F5] px-3 py-1 rounded-full text-gray-600">{c.days}</span>
              </div>
              <p className="text-sm italic text-[#A0522D] mb-3 font-[family-name:var(--font-heading)]">{c.vibe}</p>
              <ul className="space-y-2 mb-4">
                {c.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-[#FAF8F5] p-3 rounded-lg">
                <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <Info className="w-4 h-4 text-[#C4960C] inline mr-1 -mt-0.5" />
                  <strong>Tip:</strong> {c.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Romantic Riads ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              <Heart className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
              Most Romantic Riads for Honeymooners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              A riad is a traditional Moroccan house built around a central courtyard. The best ones feel like private palaces with fountains, orange trees, and open sky above.
            </p>
          </div>
          {romanticRiads.map((group) => (
            <div key={group.city} className="mb-10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-5 flex items-center gap-2">
                <group.icon className="w-6 h-6 text-[#C4960C]" />
                {group.city}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.riads.map((r) => (
                  <div key={r.name} className="card-moroccan p-5">
                    <h4 className="font-bold text-gray-900 font-[family-name:var(--font-display)] mb-1">{r.name}</h4>
                    <p className="text-sm text-[#A0522D] font-semibold mb-3">{r.price}</p>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{r.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Desert Glamping ── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
            <Moon className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
            Desert Glamping for Couples
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Sleeping in the Sahara is the single most memorable night of most Morocco honeymoons. These camps deliver genuine desert immersion with full comfort.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {desertCamps.map((camp) => (
            <div key={camp.name} className="card-moroccan p-6 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <camp.icon className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{camp.name}</h3>
              </div>
              <p className="text-xs text-gray-500 mb-1 font-[family-name:var(--font-heading)]">
                <MapPin className="w-3 h-3 inline mr-1" />{camp.location}
              </p>
              <p className="text-sm font-semibold text-[#A0522D] mb-3">{camp.price}</p>
              <ul className="space-y-2 flex-1">
                {camp.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500 italic font-[family-name:var(--font-heading)]">
            Seasonal pricing can change. Book at least 2-4 weeks ahead during October-April peak season.
          </p>
        </div>
      </section>

      {/* ── Couple Experiences ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              <Sparkles className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
              Romantic Experiences for Couples
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Beyond the usual sightseeing, these are the moments that make a Morocco honeymoon feel personal and extraordinary.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coupleExperiences.map((exp) => (
              <div key={exp.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-2">
                  <exp.icon className="w-6 h-6 text-[#C4960C]" />
                  <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">{exp.title}</h3>
                </div>
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 font-[family-name:var(--font-heading)]">
                  <span><DollarSign className="w-4 h-4 inline mr-1" />{exp.price}</span>
                  <span><Clock className="w-4 h-4 inline mr-1" />{exp.duration}</span>
                </div>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7-Day Itinerary ── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
            <BookOpen className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
            7-Day Honeymoon Itinerary
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Marrakech, Atlas Mountains, Sahara Desert, and Fes — the classic route that covers Morocco&apos;s greatest hits without rushing.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {itinerary7Day.map((day) => (
            <div key={day.day} className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#A0522D] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {day.day}
                </div>
                <day.icon className="w-5 h-5 text-[#C4960C]" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{day.title}</h3>
              </div>
              <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed ml-[52px]">
                {day.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 10-Day Itinerary ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              <BookOpen className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
              10-Day Extended Honeymoon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Add Chefchaouen and Essaouira for a more complete picture of Morocco. This pace allows for lazy mornings and spontaneous detours.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {itinerary10Day.map((block) => (
                <div key={block.day} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-16 h-10 rounded-lg bg-[#A0522D] text-white flex items-center justify-center font-bold text-sm shrink-0">
                    Day {block.day}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] mb-1">{block.title}</h3>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{block.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Tiers ── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
            <DollarSign className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
            Honeymoon Budget Guide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Morocco accommodates every budget. Here is what each tier looks like in practice for a 7-day trip per person. Seasonal pricing can change.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {budgetTiers.map((tier) => (
            <div key={tier.tier} className="card-moroccan p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <tier.icon className="w-6 h-6 text-[#C4960C]" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">{tier.tier}</h3>
              </div>
              <p className="text-lg font-bold text-[#A0522D] mb-4">{tier.perPerson}</p>
              <div className="space-y-3 flex-1 text-sm font-[family-name:var(--font-heading)]">
                <div>
                  <span className="font-semibold text-gray-900">Accommodation:</span>
                  <p className="text-gray-600">{tier.accommodation}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Transport:</span>
                  <p className="text-gray-600">{tier.transport}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Dining:</span>
                  <p className="text-gray-600">{tier.dining}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Experiences:</span>
                  <p className="text-gray-600">{tier.experiences}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">
                  <Award className="w-3 h-3 inline mr-1" />
                  <strong>Best for:</strong> {tier.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              <Shield className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
              Practical Tips for Honeymooners
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Book Riads Early',
                text: 'The best romantic riads have fewer than 10 rooms. During October-April, popular ones sell out months ahead. Reserve at least 6-8 weeks in advance.',
                icon: Calendar,
              },
              {
                title: 'Carry Cash',
                text: 'Many riads, restaurants, and guides prefer cash (MAD). ATMs are available in all cities. Cards work at large hotels but not at souks, smaller riads, or rural stops.',
                icon: DollarSign,
              },
              {
                title: 'Dress Respectfully',
                text: 'Morocco is moderate but conservative. Cover shoulders and knees in the medina and rural areas. At luxury resorts and beaches, standards are more relaxed. A light scarf is versatile.',
                icon: Users,
              },
              {
                title: 'Private Transfers Over Public Buses',
                text: 'For honeymooners, private drivers are worth the cost. They stop for photos, adjust timing, and explain what you are seeing. Shared buses are cheap but inflexible and slow.',
                icon: Compass,
              },
              {
                title: 'Communicate Preferences to Your Riad',
                text: 'Tell your riad you are on your honeymoon. Most will arrange complimentary upgrades, room decorations, or a special breakfast. Moroccan hosts love celebrating occasions.',
                icon: Heart,
              },
              {
                title: 'Negotiate in Souks, Tip Your Guides',
                text: 'Haggling in the souk is expected — start at 40% of the asking price. Tipping guides and drivers is also expected: from 100 MAD per day for guides, from 50 MAD for drivers.',
                icon: Info,
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <tip.icon className="w-5 h-5 text-[#C4960C]" />
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] text-sm">{tip.title}</h3>
                </div>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Romantic Dining ── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
            <Utensils className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
            Romantic Dining Experiences
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/hero-romantic-dinner.webp"
            alt="Rooftop dinner in Marrakech with candlelight and Atlas Mountain views at sunset"
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Le Jardin, Marrakech',
                price: 'From 300 MAD per person',
                note: 'Hidden garden restaurant in the medina. Moroccan-Mediterranean fusion under banana trees and bougainvillea. Candlelit at night.',
              },
              {
                name: 'Dar Roumana, Fes',
                price: 'From 400 MAD per person',
                note: 'Five-course tasting menu by a chef trained in France. Seasonal Moroccan ingredients. Intimate 20-seat dining room in a restored riad.',
              },
              {
                name: 'La Table du Palais, Marrakech',
                price: 'From 500 MAD per person',
                note: 'Fine dining at El Fenn riad. Rooftop terrace with views of the Koutoubia minaret. Cocktail bar with craft Moroccan-inspired drinks.',
              },
              {
                name: 'Port Seafood Grills, Essaouira',
                price: 'From 80 MAD per person',
                note: 'The freshest seafood in Morocco. Choose your catch at the harbor stalls, and they grill it on the spot. Totally informal and totally delicious.',
              },
            ].map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-5">
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] mb-1">{restaurant.name}</h3>
                <p className="text-sm font-semibold text-[#A0522D] mb-2">{restaurant.price}</p>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{restaurant.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              <MessageCircleQuestion className="inline-block w-7 h-7 text-[#A0522D] mr-2 -mt-1" />
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-5">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-5">
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] mb-2 text-base">
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
            Related Guides
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Continue planning your Morocco honeymoon with these in-depth guides.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { href: '/morocco-luxury-travel', title: 'Morocco Luxury Travel Guide', desc: 'Palace hotels, private transfers, fine dining, and VIP experiences across Morocco.' },
            { href: '/morocco-riads-guide', title: 'Morocco Riads Guide', desc: 'How to choose the right riad, what to expect, and the best riads by city and budget.' },
            { href: '/morocco-desert-glamping', title: 'Desert Glamping Guide', desc: 'Luxury desert camps in Merzouga, Zagora, and Agafay with detailed comparisons.' },
            { href: '/morocco-spa-guide', title: 'Hammam & Spa Guide', desc: 'Step-by-step hammam ritual, etiquette, products, and the best spas in Morocco.' },
          ].map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)] mb-2 group-hover:text-[#A0522D] transition-colors text-sm">
                {guide.title}
              </h3>
              <p className="text-xs text-gray-600 font-[family-name:var(--font-heading)] mb-3">{guide.desc}</p>
              <span className="text-[#A0522D] text-sm font-semibold flex items-center gap-1">
                Read guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="zellige-border moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <Heart className="w-10 h-10 text-[#A0522D] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
            Start Planning Your Morocco Honeymoon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)] mb-8 leading-relaxed">
            From the rose-scented riads of Marrakech to the silent grandeur of the Sahara at night, Morocco delivers a honeymoon that you will talk about for decades. The country rewards couples who arrive with curiosity and leave with stories that belong only to them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-luxury-travel"
              className="inline-flex items-center gap-2 bg-[#A0522D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B4726] transition-colors font-[family-name:var(--font-heading)]"
            >
              <Crown className="w-5 h-5" />
              Explore Luxury Options
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#A0522D] text-[#A0522D] px-8 py-3 rounded-lg font-semibold hover:bg-[#A0522D] hover:text-white transition-colors font-[family-name:var(--font-heading)]"
            >
              <Compass className="w-5 h-5" />
              Get a Custom Itinerary
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
