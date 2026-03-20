import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Camera,
  Mountain,
  Plane,
  Car,
  Utensils,
  Bed,
  Sun,
  Film,
  Landmark,
  Compass,
  CloudSun,
  CalendarDays,
  Clapperboard,
  Globe,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Ouarzazate Travel Guide 2026 | Hollywood of Morocco, Kasbahs, Film Studios & Day Trips',
  description:
    'Complete Ouarzazate travel guide: Atlas Film Studios, Ait Benhaddou UNESCO site, Kasbah Taourirt, Draa Valley, Skoura Oasis, and day trips. Gateway to the Sahara Desert. Getting there, accommodation, restaurants, weather, and insider tips.',
  keywords: [
    'ouarzazate',
    'ouarzazate morocco',
    'ouarzazate things to do',
    'Atlas Film Studios',
    'Ait Benhaddou',
    'ouarzazate airport',
    'ouarzazate to marrakech',
    'kasbah taourirt',
    'hollywood of morocco',
    'ouarzazate day trips',
    'draa valley',
    'skoura oasis',
    'fint oasis ouarzazate',
    'game of thrones morocco',
    'gladiator filming location',
    'tizi n tichka pass',
    'ouarzazate hotels',
    'ouarzazate weather',
    'gateway to sahara',
    'morocco film studios',
    'CLA Studios ouarzazate',
    'ouarzazate restaurants',
  ],
  openGraph: {
    title: 'Ouarzazate Travel Guide 2026 | Hollywood of Morocco, Kasbahs & Film Studios',
    description:
      'Discover Ouarzazate, Morocco\'s cinematic capital. Visit Atlas Film Studios where Game of Thrones and Gladiator were filmed, explore Ait Benhaddou UNESCO kasbah, and use Ouarzazate as your gateway to the Sahara Desert.',
    url: `${BASE_URL}/ouarzazate-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-ouarzazate.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Ouarzazate with kasbahs and the Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ouarzazate Travel Guide 2026 | Hollywood of Morocco',
    description:
      'Atlas Film Studios, Ait Benhaddou, Kasbah Taourirt, and the gateway to the Sahara. Your complete guide to Ouarzazate, Morocco.',
    images: [`${BASE_URL}/images/hero-ouarzazate.webp`],
  },
  alternates: { canonical: `${BASE_URL}/ouarzazate-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/ouarzazate-guide`,
  name: 'Ouarzazate Travel Guide 2026 | Hollywood of Morocco, Kasbahs, Film Studios & Day Trips',
  description:
    'Complete travel guide to Ouarzazate, Morocco. Atlas Film Studios, Ait Benhaddou UNESCO site, Kasbah Taourirt, Draa Valley, day trips, accommodation, restaurants, and getting there.',
  url: `${BASE_URL}/ouarzazate-guide`,
  image: `${BASE_URL}/images/hero-ouarzazate.webp`,
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
  mainEntityOfPage: `${BASE_URL}/ouarzazate-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Ouarzazate',
    containedInPlace: { '@type': 'Country', name: 'Morocco' },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Ouarzazate Travel Guide', item: `${BASE_URL}/ouarzazate-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get from Marrakech to Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive from Marrakech to Ouarzazate takes approximately 4 to 4.5 hours via the N9 highway over the Tizi n\'Tichka pass (2,260m). You can rent a car, hire a private driver (from 800 MAD one way), or take a shared grand taxi. CTM and Supratours buses also run the route daily for from 100 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ouarzazate worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Ouarzazate is the gateway to the Sahara Desert, home to the UNESCO World Heritage site of Ait Benhaddou, the Atlas Film Studios where blockbusters like Gladiator and Game of Thrones were filmed, and surrounded by stunning oases and valleys. Most travelers spend 2-3 days here.',
      },
    },
    {
      '@type': 'Question',
      name: 'What movies were filmed in Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ouarzazate has been a filming location for Lawrence of Arabia (1962), Gladiator (2000), Kingdom of Heaven (2005), Game of Thrones (HBO series), The Mummy (1999), Babel (2006), Prince of Persia (2010), and many more. The Atlas Film Studios and CLA Studios offer guided tours of preserved sets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months to visit Ouarzazate are March to May and September to November when temperatures are pleasant (20-30 degrees Celsius). Summers are extremely hot (often over 40 degrees Celsius), and winters can be cold at night. Spring is ideal if you want to combine with the Rose Festival in nearby Kelaat M\'Gouna (May).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ouarzazate have an airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ouarzazate Airport (OZZ) receives domestic flights from Casablanca (Royal Air Maroc, approximately 1 hour) and occasional seasonal international charter flights. The airport is located just 2 km from the city center. However, most travelers arrive by road from Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need in Ouarzazate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minimum of 2 days is recommended: one day for the city (Kasbah Taourirt, film studios) and one day for Ait Benhaddou. With 3-4 days, you can also explore Skoura Oasis, Fint Oasis, the Draa Valley, and the Rose Valley. Many travelers use Ouarzazate as a base for 4-5 days.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ATTRACTIONS
   ═══════════════════════════════════════════════════════════════ */

const topAttractions = [
  {
    name: 'Ait Benhaddou',
    icon: Landmark,
    type: 'UNESCO World Heritage Site',
    distance: '32 km from Ouarzazate',
    price: 'Free entry (guides from 150 MAD)',
    description:
      'The most spectacular ksar (fortified village) in Morocco and a UNESCO World Heritage Site since 1987. This striking collection of earthen buildings rises dramatically above the Ounila River. Inhabited for centuries by Berber families, Ait Benhaddou has appeared in over 20 Hollywood films including Gladiator, Game of Thrones, and Lawrence of Arabia. A few families still live within the ancient walls.',
    highlights: ['UNESCO World Heritage Site', 'Iconic filming location', 'Stunning earthen architecture', 'Sunrise and sunset photography'],
  },
  {
    name: 'Atlas Film Studios',
    icon: Film,
    type: 'Film Studio & Museum',
    distance: '5 km from city center',
    price: 'From 50 MAD entry',
    description:
      'The largest film studio in Africa, covering over 30,000 square meters. Founded in 1983, Atlas Film Studios has been the backdrop for countless productions. Walk through preserved sets from Kingdom of Heaven, Asterix & Obelix: Mission Cleopatra, and Kundun. The Egyptian and Tibetan sets are particularly impressive. Guided tours take about 1-2 hours.',
    highlights: ['Largest film studio in Africa', 'Preserved movie sets', 'Guided tours available', 'Egyptian temple replica'],
  },
  {
    name: 'CLA Studios (Cinema Studios)',
    icon: Clapperboard,
    type: 'Film Studio',
    distance: '6 km from city center',
    price: 'From 50 MAD entry',
    description:
      'The second major studio complex in Ouarzazate, CLA Studios (formerly known as Cla Studios) has hosted productions including Game of Thrones, The Mummy, and Babel. The studio is often considered more authentic than Atlas Studios, with sets that blend seamlessly into the surrounding desert landscape. This is where Yunkai, Pentos, and other Game of Thrones locations were built.',
    highlights: ['Game of Thrones filming location', 'Desert-integrated sets', 'Less crowded than Atlas', 'Active production facility'],
  },
  {
    name: 'Kasbah Taourirt',
    icon: Building,
    type: 'Historic Kasbah',
    distance: 'City center',
    price: 'From 20 MAD entry',
    description:
      'A sprawling 19th-century kasbah in the heart of Ouarzazate that once served as the residence of the powerful Glaoui family. This labyrinth of rooms, courtyards, and towers showcases traditional Berber architecture with intricate geometric plasterwork, painted wooden ceilings, and panoramic rooftop views. UNESCO has supported its restoration.',
    highlights: ['Central location', 'Glaoui family history', 'Intricate Berber architecture', 'Rooftop panoramic views'],
  },
  {
    name: 'Fint Oasis',
    icon: Mountain,
    type: 'Natural Oasis',
    distance: '15 km from Ouarzazate',
    price: 'Free (guides from 100 MAD)',
    description:
      'A hidden paradise tucked into a dramatic red canyon just 15 km south of Ouarzazate. Fint Oasis is a lush palm grove surrounded by otherworldly rock formations. Far less touristy than other oases, it offers a peaceful escape with traditional Berber villages, date palms, and almond trees. The contrast of green palms against red cliffs is unforgettable.',
    highlights: ['Hidden gem', 'Dramatic red canyon', 'Traditional Berber villages', 'Peaceful and uncrowded'],
  },
  {
    name: 'El Mansour Eddahbi Dam & Lake',
    icon: Sun,
    type: 'Reservoir & Viewpoint',
    distance: '8 km from city center',
    price: 'Free',
    description:
      'The massive reservoir that gives Ouarzazate its nickname "Door of the Desert." Built in 1972 on the Draa River, the lake provides water for the entire Draa Valley and its oases. The views of the lake backed by the snow-capped Atlas Mountains are stunning, especially at sunset. When full, it is one of Morocco\'s largest artificial lakes.',
    highlights: ['Stunning sunset views', 'Atlas Mountain backdrop', 'Birdwatching opportunities', 'Free to visit'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM OUARZAZATE
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    destination: 'Skoura Oasis & Kasbah Amridil',
    distance: '42 km east (45 min drive)',
    description:
      'A sprawling palm oasis with over 700,000 date palms and dozens of ancient kasbahs. Kasbah Amridil, featured on the old 50 MAD banknote, is the most photogenic. Explore by bicycle or on foot through the palm groves.',
    price: 'From 200 MAD (guided tour)',
  },
  {
    destination: 'Draa Valley & Zagora',
    distance: '163 km south (2.5 hr drive)',
    description:
      'Morocco\'s longest river valley stretches south toward the Sahara. Pass through the stunning Tizi n\'Tinififft pass and the palm-lined towns of Agdz, Tamnougalt, and Zagora. The famous "Timbuktu 52 days" sign awaits at the end.',
    price: 'From 600 MAD (full day tour)',
  },
  {
    destination: 'Rose Valley & Kelaat M\'Gouna',
    distance: '89 km east (1.5 hr drive)',
    description:
      'The Dades Valley town of Kelaat M\'Gouna is the center of Morocco\'s rose industry. Visit rose distilleries, buy rose water and rose products, and if visiting in May, witness the spectacular Rose Festival with parades and celebrations.',
    price: 'From 400 MAD (half day tour)',
  },
  {
    destination: 'Dades Gorge & Todra Gorge',
    distance: '116 km / 184 km east',
    description:
      'Two of Morocco\'s most dramatic gorges. The Dades Gorge features the famous winding "Road of a Thousand Kasbahs," while Todra Gorge is a 300-meter-high slot canyon just 10 meters wide at its narrowest. Rock climbing, hiking, and photography paradise.',
    price: 'From 700 MAD (full day tour)',
  },
  {
    destination: 'Merzouga & Erg Chebbi Dunes',
    distance: '353 km east (5 hr drive)',
    description:
      'The iconic Sahara sand dunes of southeastern Morocco. While typically an overnight trip, it is the ultimate day trip extension from Ouarzazate. Camel treks, desert camps, and towering golden dunes reaching 150 meters high.',
    price: 'From 1,200 MAD (overnight tour)',
  },
  {
    destination: 'Telouet Kasbah',
    distance: '100 km northwest (2 hr drive)',
    description:
      'The crumbling but magnificent fortress of the Glaoui family, hidden in the High Atlas. Once one of the most lavish palaces in Morocco, its zellige tilework and painted ceilings rival those of Marrakech\'s palaces. The remote location means few tourists.',
    price: 'From 300 MAD (half day tour)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FILMS SHOT IN OUARZAZATE
   ═══════════════════════════════════════════════════════════════ */

const filmsShot = [
  { title: 'Lawrence of Arabia', year: '1962', director: 'David Lean', note: 'The film that put Ouarzazate on Hollywood\'s map' },
  { title: 'The Man Who Would Be King', year: '1975', director: 'John Huston', note: 'Sean Connery and Michael Caine classic' },
  { title: 'The Last Temptation of Christ', year: '1988', director: 'Martin Scorsese', note: 'Biblical epic filmed in the desert' },
  { title: 'The Sheltering Sky', year: '1990', director: 'Bernardo Bertolucci', note: 'Filmed across Morocco including Ouarzazate' },
  { title: 'Kundun', year: '1997', director: 'Martin Scorsese', note: 'Tibetan sets still visible at Atlas Studios' },
  { title: 'The Mummy', year: '1999', director: 'Stephen Sommers', note: 'Egyptian sets at CLA Studios' },
  { title: 'Gladiator', year: '2000', director: 'Ridley Scott', note: 'Ait Benhaddou as the Roman Empire' },
  { title: 'Kingdom of Heaven', year: '2005', director: 'Ridley Scott', note: 'Massive Jerusalem set at Atlas Studios' },
  { title: 'Babel', year: '2006', director: 'Alejandro G. Inarritu', note: 'Moroccan segments filmed nearby' },
  { title: 'Prince of Persia', year: '2010', director: 'Mike Newell', note: 'Desert kingdom scenes' },
  { title: 'Game of Thrones', year: '2013-2016', director: 'Various', note: 'Yunkai, Pentos, and desert scenes at CLA Studios' },
  { title: 'Prison Break (Season 5)', year: '2017', director: 'Various', note: 'Yemen scenes filmed in Ouarzazate' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    category: 'Luxury',
    icon: Star,
    options: [
      { name: 'Le Berbere Palace', price: 'From 1,200 MAD/night', note: 'Ouarzazate\'s finest hotel with pool and gardens' },
      { name: 'Ksar Ighnda', price: 'From 1,500 MAD/night', note: 'Boutique kasbah-hotel near Ait Benhaddou' },
      { name: 'Riad Maktoub', price: 'From 900 MAD/night', note: 'Elegant riad with rooftop terrace views' },
    ],
  },
  {
    category: 'Mid-Range',
    icon: Bed,
    options: [
      { name: 'Dar Kamar', price: 'From 500 MAD/night', note: 'Beautiful riad in the old medina' },
      { name: 'Kasbah Dar Daif', price: 'From 600 MAD/night', note: 'Traditional kasbah with pool and restaurant' },
      { name: 'Hotel Kenzi Azghor', price: 'From 450 MAD/night', note: 'Modern hotel with pool and conference facilities' },
    ],
  },
  {
    category: 'Budget',
    icon: DollarSign,
    options: [
      { name: 'Hotel La Vallée', price: 'From 200 MAD/night', note: 'Clean and central, good budget option' },
      { name: 'Dar Chamaa', price: 'From 250 MAD/night', note: 'Family-run guesthouse with terrace' },
      { name: 'Hostel des Voyageurs', price: 'From 100 MAD/night', note: 'Backpacker-friendly, dorm beds available' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const restaurants = [
  { name: 'Restaurant Douyria', cuisine: 'Moroccan', price: 'From 80 MAD', note: 'Kasbah setting with traditional tagines and couscous' },
  { name: 'Chez Dimitri', cuisine: 'Moroccan-Mediterranean', price: 'From 100 MAD', note: 'Legendary restaurant since 1928, frequented by film crews' },
  { name: 'Restaurant 3 Thes', cuisine: 'Moroccan', price: 'From 60 MAD', note: 'Local favorite with generous portions and fair prices' },
  { name: 'La Kasbah des Sables', cuisine: 'Moroccan-French', price: 'From 120 MAD', note: 'Upscale dining with garden terrace' },
  { name: 'Patisserie Habous', cuisine: 'Cafe & Pastries', price: 'From 20 MAD', note: 'Best pastries in town, perfect for breakfast' },
  { name: 'Accord Majeur', cuisine: 'International', price: 'From 90 MAD', note: 'Pizza, pasta, and Moroccan dishes in relaxed setting' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEATHER BY SEASON
   ═══════════════════════════════════════════════════════════════ */

const weatherSeasons = [
  {
    season: 'Spring (Mar-May)',
    icon: Sun,
    temp: '20-32°C',
    description: 'The ideal time to visit. Warm days, cool nights, and wildflowers in the valleys. The Rose Festival in Kelaat M\'Gouna is in May. Occasional rain possible in March.',
    rating: 'Best',
  },
  {
    season: 'Summer (Jun-Aug)',
    icon: Thermometer,
    temp: '35-45°C',
    description: 'Extremely hot. Daytime temperatures regularly exceed 40°C. Not recommended unless you tolerate extreme heat. Early morning and evening sightseeing only. Hotels offer lower rates.',
    rating: 'Challenging',
  },
  {
    season: 'Autumn (Sep-Nov)',
    icon: CloudSun,
    temp: '18-30°C',
    description: 'Excellent conditions similar to spring. October and November are particularly pleasant. Date harvest season in the oases. Great photography light. Fewer tourists than spring.',
    rating: 'Excellent',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Mountain,
    temp: '5-18°C',
    description: 'Mild days but cold nights that can drop near freezing. Snow on the Atlas Mountains creates dramatic landscapes. The Tizi n\'Tichka pass may be temporarily closed due to snow.',
    rating: 'Good',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function OuarzazateGuidePage() {
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
            backgroundImage: 'url(/images/hero-ouarzazate.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Ouarzazate Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Film className="w-4 h-4" />
            Hollywood of Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ouarzazate Travel Guide:
            <br className="hidden md:block" /> Kasbahs, Film Studios &amp; the Sahara Gateway
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Where ancient earthen kasbahs meet Hollywood magic. Explore the city that brought Gladiator,
            Game of Thrones, and Lawrence of Arabia to life at the doorstep of the Sahara Desert.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Visit Ouarzazate? The Gateway to the Sahara
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Ouarzazate (pronounced &quot;war-za-zat&quot;) sits at the crossroads of Morocco&apos;s
                most dramatic landscapes. Perched at 1,160 meters on the southern slopes of the High Atlas
                Mountains, this desert city of roughly 70,000 people has earned two powerful nicknames:
                the &quot;Door of the Desert&quot; and the &quot;Hollywood of Africa.&quot;
              </p>
              <p>
                As a gateway city, Ouarzazate is where the lush green of the Atlas Mountains gives way
                to the vast, arid expanses that stretch toward the Sahara. Every major route to the desert
                passes through here, whether you are heading to the towering dunes of Erg Chebbi at Merzouga,
                the dramatic gorges of Todra and Dades, or the palm-filled Draa Valley toward Zagora.
              </p>
              <p>
                But Ouarzazate is far more than a transit stop. Since the 1960s, its crystal-clear light,
                dramatic landscapes, and proximity to the extraordinary ksar of Ait Benhaddou have made it
                one of the world&apos;s most sought-after filming locations. Two major studio complexes,
                Atlas Film Studios and CLA Studios, have hosted productions from Lawrence of Arabia to
                Game of Thrones. Walking through their preserved sets is like stepping into cinema history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Attractions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Attractions in &amp; Around Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From UNESCO World Heritage sites to hidden desert oases, Ouarzazate and its surroundings
            offer a concentration of Morocco&apos;s most extraordinary sights.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing may apply during peak tourist months (October-April).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topAttractions.map((attraction) => {
              const AttractionIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttractionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {attraction.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building className="w-3.5 h-3.5" />
                          {attraction.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {attraction.price}
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

      {/* ── Films Shot in Ouarzazate ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clapperboard className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hollywood in the Desert: Films Shot in Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Over 200 international productions have chosen Ouarzazate as their backdrop. Here are some of the most famous films and series shot in and around the city.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Film / Series</div>
                <div className="p-3 px-4">Year</div>
                <div className="p-3 px-4">Director</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {filmsShot.map((film, i) => (
                <div
                  key={film.title}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{film.title}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{film.year}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{film.director}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{film.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips &amp; Excursions from Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ouarzazate is the perfect base for exploring southeastern Morocco. These excursions range from half-day trips to overnight adventures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map((trip) => (
              <div key={trip.destination} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {trip.destination}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-3">
                  <Car className="w-3 h-3" />
                  {trip.distance}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{trip.description}</p>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  {trip.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Multiple routes lead to Ouarzazate, but the journey over the Tizi n&apos;Tichka pass from Marrakech is one of Morocco&apos;s most spectacular drives.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Car className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  From Marrakech via Tizi n&apos;Tichka Pass (N9)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most common route and one of Morocco&apos;s most dramatic drives. The N9 highway climbs over the
                High Atlas via the Tizi n&apos;Tichka pass at 2,260 meters. The 196 km journey takes approximately
                4 to 4.5 hours through hairpin bends, mountain villages, and stunning vistas. The road is well-maintained
                and fully paved, but winter snow can occasionally close the pass temporarily.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" /> 4-4.5 hours driving</div>
                <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" /> 196 km via N9</div>
                <div className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> Private driver from 800 MAD</div>
                <div className="flex items-center gap-1"><Mountain className="w-3 h-3 text-[var(--color-accent)]" /> 2,260m altitude pass</div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Plane className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Ouarzazate Airport (OZZ)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ouarzazate Airport is located just 2 km from the city center. Royal Air Maroc operates
                domestic flights from Casablanca (approximately 1 hour), with connections from there to
                international destinations. Some seasonal charter flights operate directly from European cities.
                The airport is small and easy to navigate. A taxi to the center costs from 20 MAD.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><Plane className="w-3 h-3 text-[var(--color-accent)]" /> 1 hr from Casablanca</div>
                <div className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" /> 2 km from center</div>
                <div className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> Taxi from 20 MAD</div>
                <div className="flex items-center gap-1"><Info className="w-3 h-3 text-[var(--color-accent)]" /> Code: OZZ</div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Bus &amp; Shared Transport
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                CTM and Supratours operate daily bus services between Marrakech and Ouarzazate (from 100 MAD,
                approximately 4.5 hours). Grand taxis (shared Mercedes sedans) also run the route for a similar
                price, departing when full from the taxi station. Buses are more comfortable; grand taxis are faster
                but more cramped.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> CTM bus from 100 MAD</div>
                <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" /> 4.5 hours by bus</div>
                <div className="flex items-center gap-1"><Users className="w-3 h-3 text-[var(--color-accent)]" /> Grand taxis available</div>
                <div className="flex items-center gap-1"><CalendarDays className="w-3 h-3 text-[var(--color-accent)]" /> Multiple daily departures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay in Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From luxury kasbah-hotels to budget-friendly guesthouses, Ouarzazate has accommodation for every budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates per night. Seasonal pricing applies during peak months (October-April) and holidays.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tier.category}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {tier.options.map((option) => (
                      <div key={option.name} className="border-b border-[var(--border-light)] pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-[var(--text-primary)]">{option.name}</span>
                          <span className="text-xs font-semibold text-[var(--color-accent)]">{option.price}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{option.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Restaurants ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Eat in Ouarzazate
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ouarzazate&apos;s dining scene is modest but offers excellent traditional Moroccan cuisine and a few international options frequented by visiting film crews.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Restaurant</div>
              <div className="p-3 px-4">Cuisine</div>
              <div className="p-3 px-4">Price</div>
              <div className="p-3 px-4">Note</div>
            </div>
            {restaurants.map((restaurant, i) => (
              <div
                key={restaurant.name}
                className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{restaurant.name}</div>
                <div className="p-3 px-4 text-[var(--text-secondary)]">{restaurant.cuisine}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{restaurant.price}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{restaurant.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weather Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CloudSun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ouarzazate Weather &amp; Best Time to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ouarzazate has a semi-arid climate with hot summers and mild winters. The best times to visit are spring and autumn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weatherSeasons.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-[var(--color-accent)]">{season.temp}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      season.rating === 'Best' ? 'bg-green-100 text-green-700' :
                      season.rating === 'Excellent' ? 'bg-blue-100 text-blue-700' :
                      season.rating === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {season.rating}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{season.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Ouarzazate Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ouarzazate is a photographer&apos;s dream. The golden hour light on the kasbahs is extraordinary.
                Visit Ait Benhaddou at sunrise or sunset for the best light. Bring a polarizing filter for the
                intense desert sky. Always ask permission before photographing people.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety &amp; Scams
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ouarzazate is generally very safe. The main annoyance is unofficial guides at Ait Benhaddou
                who may pressure you for tips. Agree on a price beforehand if you want a guide (from 150 MAD).
                At the film studios, stick with official tour guides for the best experience.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Money &amp; ATMs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                ATMs are available along the main avenue (Avenue Mohammed V). Carry cash for smaller
                establishments, souks, and rural day trips. Credit cards are accepted at hotels and larger
                restaurants. Budget from 500 MAD per day for a comfortable visit including meals and activities.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Shopping &amp; Souvenirs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Ouarzazate is known for its silver jewelry, Berber carpets, rose products (from nearby
                Kelaat M&apos;Gouna), and saffron. The main souk is smaller and less hectic than Marrakech,
                making it more pleasant for shopping. Prices are generally lower than in Marrakech or Fes.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Hiring a Guide or Driver
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A local guide or driver is highly recommended for day trips from Ouarzazate, especially to
                the gorges and remote oases. Hire through your hotel or a licensed agency. A full-day driver
                costs from 800 MAD. Multi-day desert tours from Ouarzazate to Merzouga start from 2,500 MAD per person.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Suggested Itinerary (3 Days)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Day 1: Kasbah Taourirt, Atlas Film Studios, sunset at El Mansour Eddahbi Dam. Day 2: Full day at
                Ait Benhaddou and Fint Oasis. Day 3: Day trip to Skoura Oasis and the Rose Valley, or begin the
                journey southeast toward the Sahara via the Draa Valley.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Ouarzazate
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get from Marrakech to Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The drive from Marrakech to Ouarzazate takes approximately 4 to 4.5 hours via the N9 highway
                over the Tizi n&apos;Tichka pass (2,260m). You can rent a car, hire a private driver (from 800 MAD
                one way), or take a shared grand taxi. CTM and Supratours buses also run the route daily for
                from 100 MAD. The mountain drive itself is one of Morocco&apos;s most scenic roads.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Ouarzazate worth visiting, or is it just a transit stop?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ouarzazate is absolutely worth spending 2-3 days in. Beyond being the gateway to the Sahara,
                the city itself has Kasbah Taourirt, two world-class film studios, and the stunning El Mansour
                Eddahbi Dam. Within a short drive, you have the UNESCO site of Ait Benhaddou, the hidden Fint
                Oasis, and access to the Draa Valley, Dades Gorge, and Rose Valley. It is far more than a
                stopover.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What movies and TV shows were filmed in Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Over 200 productions have been filmed here. The most famous include Lawrence of Arabia (1962),
                Gladiator (2000), Kingdom of Heaven (2005), The Mummy (1999), Game of Thrones (HBO, 2013-2016),
                Babel (2006), Prince of Persia (2010), and Prison Break Season 5 (2017). The Atlas Film Studios
                and CLA Studios offer guided tours of preserved sets from these productions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The best months are March to May and September to November, when temperatures are comfortable
                (20-30 degrees Celsius). Summer is extremely hot (regularly above 40 degrees Celsius) and best
                avoided unless you tolerate extreme heat. Winter is mild during the day but cold at night. If
                visiting in May, you can catch the Rose Festival in nearby Kelaat M&apos;Gouna.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does Ouarzazate have an airport?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Ouarzazate Airport (code OZZ) is located just 2 km from the city center. Royal Air Maroc
                operates domestic flights from Casablanca (approximately 1 hour). Some seasonal charter flights
                come from European cities. However, most travelers arrive by road from Marrakech, as the drive
                over the Tizi n&apos;Tichka pass is a highlight in itself.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How many days do I need in Ouarzazate?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A minimum of 2 days is recommended: one day for the city (Kasbah Taourirt, film studios, dam)
                and one day for Ait Benhaddou and Fint Oasis. With 3-4 days, you can add excursions to Skoura
                Oasis, the Rose Valley, or the Draa Valley. If you plan to continue to the Sahara dunes at
                Merzouga, budget 4-5 days total using Ouarzazate as your base.
              </p>
            </div>
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
            <Link href="/morocco-sahara-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about visiting the Moroccan Sahara, from camel treks to desert camps.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ouarzazate and Ait Benhaddou are top day trips from Marrakech. See the full list of excursions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-desert-glamping" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Desert Glamping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Luxury desert camps and glamping experiences in the Sahara, accessible from Ouarzazate.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-photography-locations" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Photography Locations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Ouarzazate and Ait Benhaddou are among Morocco&apos;s most photogenic locations. See the complete guide.
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
