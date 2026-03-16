import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
} from 'lucide-react';
import AttractionsClientSection from './AttractionsClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: "Morocco's Must-See Attractions | Top Monuments, Medinas & Natural Wonders",
  description:
    'Explore over 30 must-see attractions across Morocco including UNESCO World Heritage Sites, ancient medinas, stunning natural landscapes, and historic palaces. Plan your visit with opening hours, entrance fees, and expert tips.',
  keywords: [
    'Morocco attractions',
    'UNESCO Morocco',
    'Jemaa el-Fnaa',
    'Hassan II Mosque',
    'Fes Medina',
    'Ait Ben Haddou',
    'Majorelle Garden',
    'Morocco monuments',
    'Morocco nature',
    'things to see in Morocco',
  ],
  openGraph: {
    title: "Morocco's Must-See Attractions - CityGuide",
    description:
      'Discover 30+ top-rated attractions across Morocco. UNESCO sites, ancient medinas, Sahara dunes, and more.',
    url: 'https://citytoursmorocco.com/attractions',
    images: [
      {
        url: '/images/hero-essaouira.webp',
        width: 1200,
        height: 630,
        alt: 'Hassan II Mosque, Casablanca, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/attractions' },
};

/* ═══════════════════════════════════════════════════════════════
   ATTRACTIONS DATA
   ═══════════════════════════════════════════════════════════════ */

type AttractionType =
  | 'monument'
  | 'museum'
  | 'nature'
  | 'market'
  | 'religious'
  | 'ruins'
  | 'garden'
  | 'beach'
  | 'medina'
  | 'palace';

interface Attraction {
  name: string;
  slug: string;
  cityName: string;
  type: AttractionType;
  description: string;
  isUnesco: boolean;
  rating: number;
  entranceFeeMad: number | null;
  image: string;
  durationHours: number;
}

const attractions: Attraction[] = [
  {
    name: 'Jemaa el-Fnaa',
    slug: 'jemaa-el-fnaa',
    cityName: 'Marrakech',
    type: 'market',
    description:
      'The beating heart of Marrakech and a UNESCO Masterpiece of Intangible Heritage. This vast square transforms nightly into a carnival of storytellers, musicians, and food stalls.',
    isUnesco: true,
    rating: 4.7,
    entranceFeeMad: null,
    image: '/images/hero-marrakech.webp',
    durationHours: 3,
  },
  {
    name: 'Hassan II Mosque',
    slug: 'hassan-ii-mosque',
    cityName: 'Casablanca',
    type: 'religious',
    description:
      'One of the largest mosques in the world with the tallest minaret on Earth at 210 meters. Built partially over the Atlantic Ocean with a retractable roof and heated marble floors.',
    isUnesco: false,
    rating: 4.8,
    entranceFeeMad: 130,
    image: '/images/hero-essaouira.webp',
    durationHours: 1.5,
  },
  {
    name: 'Majorelle Garden',
    slug: 'majorelle-garden',
    cityName: 'Marrakech',
    type: 'garden',
    description:
      'A vibrant botanical garden created by French painter Jacques Majorelle and later restored by Yves Saint Laurent. The cobalt blue villa is one of Morocco\'s most photographed landmarks.',
    isUnesco: false,
    rating: 4.6,
    entranceFeeMad: 150,
    image: '/images/hero-souk-lamps.webp',
    durationHours: 2,
  },
  {
    name: 'Fes Medina (Fes el-Bali)',
    slug: 'fes-medina',
    cityName: 'Fes',
    type: 'medina',
    description:
      'The world\'s largest car-free urban area and a UNESCO World Heritage Site with 9,400 winding alleyways. Home to the oldest university in the world, Al-Qarawiyyin, founded in 859 AD.',
    isUnesco: true,
    rating: 4.8,
    entranceFeeMad: null,
    image: '/images/hero-fes.webp',
    durationHours: 5,
  },
  {
    name: 'Ait Ben Haddou',
    slug: 'ait-ben-haddou',
    cityName: 'Ouarzazate',
    type: 'ruins',
    description:
      'A spectacular UNESCO-listed fortified village (ksar) along the former caravan route between the Sahara and Marrakech. Featured in films like Gladiator, Game of Thrones, and Lawrence of Arabia.',
    isUnesco: true,
    rating: 4.7,
    entranceFeeMad: null,
    image: '/images/hero-sahara-sunrise.webp',
    durationHours: 2.5,
  },
  {
    name: 'Chefchaouen Medina',
    slug: 'chefchaouen-medina',
    cityName: 'Chefchaouen',
    type: 'medina',
    description:
      'The famous Blue Pearl of Morocco, a medina painted in every shade of blue, nestled in the Rif Mountains. Photographers and travelers flock here for its dreamlike cerulean streetscapes.',
    isUnesco: false,
    rating: 4.7,
    entranceFeeMad: null,
    image: '/images/hero-chefchaouen.webp',
    durationHours: 4,
  },
  {
    name: 'Erg Chebbi Dunes',
    slug: 'erg-chebbi-dunes',
    cityName: 'Merzouga',
    type: 'nature',
    description:
      'Towering orange sand dunes reaching up to 150 meters, the most accessible and iconic Sahara desert landscape in Morocco. Sunset camel treks and starlit desert camps are unforgettable.',
    isUnesco: false,
    rating: 4.9,
    entranceFeeMad: null,
    image: '/images/hero-desert.webp',
    durationHours: 6,
  },
  {
    name: 'Volubilis',
    slug: 'volubilis',
    cityName: 'Meknes',
    type: 'ruins',
    description:
      'The best-preserved Roman ruins in North Africa and a UNESCO World Heritage Site. Remarkable mosaics, triumphal arches, and basilica remains date from the 3rd century BC.',
    isUnesco: true,
    rating: 4.5,
    entranceFeeMad: 70,
    image: '/images/hero-hassan-mosque.webp',
    durationHours: 2,
  },
  {
    name: 'Todra Gorge',
    slug: 'todra-gorge',
    cityName: 'Tinghir',
    type: 'nature',
    description:
      'A dramatic canyon where sheer limestone walls rise 300 meters on either side, narrowing to just 10 meters wide. A world-renowned rock climbing destination and a spectacular natural wonder.',
    isUnesco: false,
    rating: 4.6,
    entranceFeeMad: null,
    image: '/images/hero-sahara-sunrise.webp',
    durationHours: 3,
  },
  {
    name: 'Bahia Palace',
    slug: 'bahia-palace',
    cityName: 'Marrakech',
    type: 'palace',
    description:
      'A stunning 19th-century palace with elaborate zellige tilework, painted cedar ceilings, and tranquil courtyards. Built for Grand Vizier Si Moussa, it showcases the finest Moroccan craftsmanship.',
    isUnesco: false,
    rating: 4.5,
    entranceFeeMad: 70,
    image: '/images/hero-kasbahs.webp',
    durationHours: 1.5,
  },
  {
    name: 'Koutoubia Mosque',
    slug: 'koutoubia-mosque',
    cityName: 'Marrakech',
    type: 'religious',
    description:
      'The largest mosque in Marrakech with a 77-meter minaret visible across the city, built in the 12th century. Its design inspired the Giralda in Seville and the Hassan Tower in Rabat.',
    isUnesco: false,
    rating: 4.6,
    entranceFeeMad: null,
    image: '/images/hero-morocco.webp',
    durationHours: 0.5,
  },
  {
    name: 'Medersa Ben Youssef',
    slug: 'medersa-ben-youssef',
    cityName: 'Marrakech',
    type: 'monument',
    description:
      'A magnificent 14th-century Islamic college and the largest medersa in Morocco. Its intricate stucco carvings, zellige tilework, and cedar woodwork represent the pinnacle of Marinid architecture.',
    isUnesco: false,
    rating: 4.7,
    entranceFeeMad: 50,
    image: '/images/hero-hammam.webp',
    durationHours: 1,
  },
  {
    name: 'Jardin Menara',
    slug: 'jardin-menara',
    cityName: 'Marrakech',
    type: 'garden',
    description:
      'Historic gardens dating to the 12th century Almohad dynasty, centered around a massive reflecting pool with the snow-capped Atlas Mountains as a backdrop. A peaceful retreat from the medina.',
    isUnesco: false,
    rating: 4.2,
    entranceFeeMad: null,
    image: '/images/hero-morocco.webp',
    durationHours: 1,
  },
  {
    name: 'El Badi Palace',
    slug: 'el-badi-palace',
    cityName: 'Marrakech',
    type: 'palace',
    description:
      'The atmospheric ruins of a once-magnificent 16th-century Saadian palace. The sunken gardens and massive walls now host storks\' nests and offer panoramic rooftop views of the medina.',
    isUnesco: false,
    rating: 4.3,
    entranceFeeMad: 70,
    image: '/images/hero-kasbahs.webp',
    durationHours: 1.5,
  },
  {
    name: 'Chouara Tannery',
    slug: 'chouara-tannery',
    cityName: 'Fes',
    type: 'market',
    description:
      'The oldest and largest tannery in Fes, operating since the 11th century. Workers dye leather in stone vats of vivid colors using ancient techniques, creating one of Morocco\'s most iconic sights.',
    isUnesco: false,
    rating: 4.4,
    entranceFeeMad: null,
    image: '/images/hero-fes.webp',
    durationHours: 1,
  },
  {
    name: 'Bou Inania Medersa',
    slug: 'bou-inania-medersa',
    cityName: 'Fes',
    type: 'monument',
    description:
      'A masterpiece of Marinid architecture built in the 1350s, the only medersa in Fes with its own minaret. Its extraordinary zellige, stucco, and cedar work represent the finest Islamic decorative arts.',
    isUnesco: false,
    rating: 4.6,
    entranceFeeMad: 30,
    image: '/images/hero-fes.webp',
    durationHours: 1,
  },
  {
    name: 'Hassan Tower',
    slug: 'hassan-tower',
    cityName: 'Rabat',
    type: 'monument',
    description:
      'An iconic unfinished 12th-century minaret standing 44 meters tall, intended to be the world\'s largest mosque. The 348 remaining columns of the prayer hall create a hauntingly beautiful site.',
    isUnesco: true,
    rating: 4.5,
    entranceFeeMad: null,
    image: '/images/hero-hassan-mosque.webp',
    durationHours: 1,
  },
  {
    name: 'Kasbah of the Udayas',
    slug: 'kasbah-of-the-udayas',
    cityName: 'Rabat',
    type: 'monument',
    description:
      'A fortified kasbah at the mouth of the Bou Regreg river, a UNESCO site with Andalusian gardens, blue-and-white painted streets, and sweeping views over the Atlantic Ocean and Sale.',
    isUnesco: true,
    rating: 4.6,
    entranceFeeMad: null,
    image: '/images/hero-hassan-mosque.webp',
    durationHours: 1.5,
  },
  {
    name: 'Mausoleum of Mohammed V',
    slug: 'mausoleum-of-mohammed-v',
    cityName: 'Rabat',
    type: 'monument',
    description:
      'A masterpiece of modern Alaouite architecture housing the tombs of the late King Mohammed V and his sons. The white marble interior with a green-tiled roof is one of Rabat\'s most visited sites.',
    isUnesco: false,
    rating: 4.5,
    entranceFeeMad: null,
    image: '/images/hero-hassan-mosque.webp',
    durationHours: 0.5,
  },
  {
    name: 'Caves of Hercules',
    slug: 'caves-of-hercules',
    cityName: 'Tangier',
    type: 'nature',
    description:
      'Legendary sea caves near Cape Spartel where myth says Hercules rested after his twelve labors. The cave opening is shaped like the map of Africa in reverse, framing the crashing Atlantic waves.',
    isUnesco: false,
    rating: 4.3,
    entranceFeeMad: 10,
    image: '/images/hero-tangier-kasbah.webp',
    durationHours: 1,
  },
  {
    name: 'Cap Spartel',
    slug: 'cap-spartel',
    cityName: 'Tangier',
    type: 'nature',
    description:
      'The dramatic headland where the Atlantic Ocean meets the Mediterranean Sea, marked by a 19th-century lighthouse. Panoramic views stretch across two continents and two bodies of water.',
    isUnesco: false,
    rating: 4.4,
    entranceFeeMad: null,
    image: '/images/hero-tangier-kasbah.webp',
    durationHours: 1,
  },
  {
    name: 'Saadian Tombs',
    slug: 'saadian-tombs',
    cityName: 'Marrakech',
    type: 'monument',
    description:
      'Exquisite 16th-century royal necropolis sealed for centuries and rediscovered in 1917. The Hall of Twelve Columns contains some of the finest carved marble and zellige in all of Morocco.',
    isUnesco: false,
    rating: 4.5,
    entranceFeeMad: 70,
    image: '/images/hero-kasbahs.webp',
    durationHours: 1,
  },
  {
    name: 'Dar Si Said Museum',
    slug: 'dar-si-said-museum',
    cityName: 'Marrakech',
    type: 'museum',
    description:
      'A palace museum housing an outstanding collection of Moroccan woodwork, carpets, ceramics, and jewelry. The building itself is a jewel of 19th-century Moroccan domestic architecture.',
    isUnesco: false,
    rating: 4.3,
    entranceFeeMad: 30,
    image: '/images/hero-kasbahs.webp',
    durationHours: 1.5,
  },
  {
    name: 'Essaouira Ramparts',
    slug: 'essaouira-ramparts',
    cityName: 'Essaouira',
    type: 'monument',
    description:
      'The dramatic 18th-century Portuguese-built fortifications encircling the Essaouira medina, a UNESCO World Heritage Site. Cannons still line the walls overlooking the Atlantic and the Iles Purpuraires.',
    isUnesco: true,
    rating: 4.5,
    entranceFeeMad: null,
    image: '/images/hero-essaouira.webp',
    durationHours: 1.5,
  },
  {
    name: 'Oualidia Lagoon',
    slug: 'oualidia-lagoon',
    cityName: 'Oualidia',
    type: 'nature',
    description:
      'A serene turquoise lagoon on the Atlantic coast, famous for its oyster farms and bird-watching. The sheltered waters offer some of Morocco\'s safest and most beautiful swimming.',
    isUnesco: false,
    rating: 4.4,
    entranceFeeMad: null,
    image: '/images/hero-surfing.webp',
    durationHours: 3,
  },
  {
    name: 'Moulay Idriss Zerhoun',
    slug: 'moulay-idriss-zerhoun',
    cityName: 'Meknes',
    type: 'religious',
    description:
      'Morocco\'s holiest town, built around the tomb of Moulay Idriss I, the founder of the first Moroccan dynasty. The whitewashed hillside town offers a deeply spiritual and authentic Moroccan experience.',
    isUnesco: false,
    rating: 4.4,
    entranceFeeMad: null,
    image: '/images/hero-hassan-mosque.webp',
    durationHours: 2,
  },
  {
    name: 'Legzira Beach',
    slug: 'legzira-beach',
    cityName: 'Sidi Ifni',
    type: 'beach',
    description:
      'A remote Atlantic beach famous for its towering red stone arches sculpted by centuries of erosion. The dramatic cliffs, wild surf, and stunning sunsets make this a photographer\'s paradise.',
    isUnesco: false,
    rating: 4.6,
    entranceFeeMad: null,
    image: '/images/hero-surfing.webp',
    durationHours: 3,
  },
  {
    name: 'Atlas Film Studios',
    slug: 'atlas-film-studios',
    cityName: 'Ouarzazate',
    type: 'museum',
    description:
      'The largest film studio in the world, where blockbusters like Gladiator, Kingdom of Heaven, and Game of Thrones were filmed. Tour elaborate sets including Egyptian temples and Roman cities.',
    isUnesco: false,
    rating: 4.2,
    entranceFeeMad: 50,
    image: '/images/hero-sahara-sunrise.webp',
    durationHours: 2,
  },
  {
    name: 'Ouzoud Waterfalls',
    slug: 'ouzoud-waterfalls',
    cityName: 'Azilal',
    type: 'nature',
    description:
      'The highest waterfalls in North Africa at 110 meters, cascading through tiers of red rock surrounded by olive groves. Barbary macaques play in the mist and rainbow-lit pools below.',
    isUnesco: false,
    rating: 4.7,
    entranceFeeMad: null,
    image: '/images/hero-sahara-sunrise.webp',
    durationHours: 4,
  },
  {
    name: 'Paradise Valley',
    slug: 'paradise-valley',
    cityName: 'Agadir',
    type: 'nature',
    description:
      'A hidden canyon with emerald natural pools, palm trees, and dramatic rock formations in the foothills of the Atlas. Popular for swimming, cliff jumping, and escaping the coastal heat.',
    isUnesco: false,
    rating: 4.5,
    entranceFeeMad: 20,
    image: '/images/hero-surfing.webp',
    durationHours: 4,
  },
];

const ATTRACTION_TYPES: { id: AttractionType; label: string }[] = [
  { id: 'monument', label: 'Monument' },
  { id: 'museum', label: 'Museum' },
  { id: 'nature', label: 'Nature' },
  { id: 'market', label: 'Market' },
  { id: 'religious', label: 'Religious' },
  { id: 'ruins', label: 'Ruins' },
  { id: 'garden', label: 'Garden' },
  { id: 'beach', label: 'Beach' },
  { id: 'medina', label: 'Medina' },
  { id: 'palace', label: 'Palace' },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: "Morocco's Must-See Attractions",
    description:
      'A curated directory of the top attractions across Morocco including UNESCO World Heritage Sites, ancient medinas, palaces, and natural wonders.',
    url: 'https://citytoursmorocco.com/attractions',
    numberOfItems: attractions.length,
    itemListElement: attractions.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: a.name,
        description: a.description,
        url: `https://citytoursmorocco.com/attractions/${a.slug}`,
        image: a.image,
        address: {
          '@type': 'PostalAddress',
          addressLocality: a.cityName,
          addressCountry: 'MA',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: a.rating,
          bestRating: 5,
        },
        ...(a.entranceFeeMad
          ? {
              offers: {
                '@type': 'Offer',
                price: a.entranceFeeMad,
                priceCurrency: 'MAD',
              },
            }
          : {}),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function AttractionsPage() {
  const uniqueCities = [...new Set(attractions.map((a) => a.cityName))].sort();
  const unescoCount = attractions.filter((a) => a.isUnesco).length;

  return (
    <>
      <JsonLd />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="container-morocco pt-4 pb-2"
      >
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link
              href="/"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-text-primary font-medium">Attractions</li>
        </ol>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-essaouira.webp"
            alt="Hassan II Mosque at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Explore Morocco
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco&apos;s Must-See Attractions
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From ancient medinas and soaring mosques to Saharan dunes and
              cascading waterfalls, discover the landmarks that make Morocco one
              of the world&apos;s most extraordinary destinations.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {attractions.length}+
                </p>
                <p className="text-sm text-white/70">Attractions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {unescoCount}
                </p>
                <p className="text-sm text-white/70">UNESCO Sites</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {uniqueCities.length}
                </p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Main Content ── */}
      <section className="container-morocco py-12 md:py-16">
        <AttractionsClientSection
          attractions={attractions}
          types={ATTRACTION_TYPES}
          cities={uniqueCities}
        />
      </section>
    </>
  );
}
