import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
} from 'lucide-react';
import ToursClientSection from './ToursClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Tours & Experiences | Desert, Cultural & Adventure Tours',
  description:
    'Book unforgettable tours across Morocco. Sahara desert expeditions, imperial cities circuits, Atlas Mountain treks, food tours, surf camps, and artisan workshops. From 1-day to 14-day experiences.',
  keywords: [
    'Morocco tours',
    'Sahara desert tour',
    'Marrakech tours',
    'Atlas Mountains trek',
    'Morocco food tour',
    'imperial cities tour',
    'Morocco adventure',
    'Fes artisan workshop',
    'Morocco experiences',
    'Morocco excursions',
  ],
  openGraph: {
    title: 'Morocco Tours & Experiences - CityGuide',
    description:
      'Discover 20+ curated tours across Morocco. Desert expeditions, cultural immersions, adventure treks, and culinary journeys.',
    url: 'https://cityguide.ma/tours',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Camel trek in the Sahara Desert, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/tours' },
};

/* ═══════════════════════════════════════════════════════════════
   TOURS DATA
   ═══════════════════════════════════════════════════════════════ */

type TourCategory =
  | 'Desert'
  | 'Cultural'
  | 'Adventure'
  | 'Food'
  | 'Wellness'
  | 'Photography'
  | 'Family';

type Difficulty = 'Easy' | 'Moderate' | 'Challenging';

interface Tour {
  name: string;
  slug: string;
  cityName: string;
  description: string;
  durationDays: number;
  priceFromMad: number;
  difficulty: Difficulty;
  category: TourCategory;
  highlights: string[];
  rating: number;
  image: string;
}

const tours: Tour[] = [
  {
    name: 'Sahara Desert 3-Day from Marrakech',
    slug: 'sahara-desert-3-day',
    cityName: 'Marrakech',
    description:
      'Cross the High Atlas via Tizi n\'Tichka, visit Ait Benhaddou, traverse the Dades and Todra Gorges, and ride camels into the Erg Chebbi dunes for a night under the Saharan stars.',
    durationDays: 3,
    priceFromMad: 2500,
    difficulty: 'Easy',
    category: 'Desert',
    highlights: ['Ait Benhaddou UNESCO Site', 'Todra Gorge', 'Camel Trek at Sunset', 'Desert Camp'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Imperial Cities 7-Day Circuit',
    slug: 'imperial-cities-7-day',
    cityName: 'Casablanca',
    description:
      'A comprehensive journey through Morocco\'s four imperial cities: Rabat, Meknes, Fes, and Marrakech, with stops at Volubilis, Chefchaouen, and the Middle Atlas cedar forests.',
    durationDays: 7,
    priceFromMad: 8500,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['Fes Medina', 'Chefchaouen', 'Volubilis Ruins', 'Marrakech Souks'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
  },
  {
    name: 'Atlas Mountains 2-Day Trek',
    slug: 'atlas-mountains-2-day-trek',
    cityName: 'Marrakech',
    description:
      'Trek through Berber villages in the Imlil Valley, summit Jebel Toubkal base camp at 3,200m, and sleep in a traditional mountain refuge with panoramic Atlas views.',
    durationDays: 2,
    priceFromMad: 1800,
    difficulty: 'Challenging',
    category: 'Adventure',
    highlights: ['Imlil Valley', 'Berber Villages', 'Mountain Refuge', 'Atlas Panoramas'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=800&q=80',
  },
  {
    name: 'Marrakech Food Tour',
    slug: 'marrakech-food-tour',
    cityName: 'Marrakech',
    description:
      'A half-day guided walking tour through the medina\'s hidden food gems. Taste 15+ dishes from street stalls to local favorites, including tagine, msemen, snail soup, and fresh-squeezed juices.',
    durationDays: 1,
    priceFromMad: 550,
    difficulty: 'Easy',
    category: 'Food',
    highlights: ['Jemaa el-Fnaa Stalls', 'Spice Market', '15+ Tastings', 'Local Guide'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  },
  {
    name: 'Fes Artisan Workshop Experience',
    slug: 'fes-artisan-workshop',
    cityName: 'Fes',
    description:
      'Spend a day learning traditional crafts from Fes master artisans. Try your hand at zellige tile-cutting, brass engraving, and leather work in centuries-old medina workshops.',
    durationDays: 1,
    priceFromMad: 650,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['Zellige Workshop', 'Brass Engraving', 'Leather Craft', 'Tannery Visit'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
  },
  {
    name: 'Chefchaouen Day Trip from Fes',
    slug: 'chefchaouen-day-trip',
    cityName: 'Fes',
    description:
      'A full-day excursion to the Blue Pearl of Morocco. Wander the cerulean streets, hike to the Spanish Mosque for panoramic views, and visit the kasbah museum before returning to Fes.',
    durationDays: 1,
    priceFromMad: 750,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['Blue Medina', 'Spanish Mosque Hike', 'Ras el-Maa Waterfall', 'Local Lunch'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80',
  },
  {
    name: 'Essaouira Surf & Explore 3-Day',
    slug: 'essaouira-surf-explore',
    cityName: 'Essaouira',
    description:
      'Learn to surf or improve your skills at Morocco\'s windswept Atlantic coast. Combine surf lessons with medina exploration, fresh seafood feasts, and a sunset camel ride on the beach.',
    durationDays: 3,
    priceFromMad: 3200,
    difficulty: 'Moderate',
    category: 'Adventure',
    highlights: ['Surf Lessons', 'Medina Tour', 'Seafood Dinner', 'Beach Camel Ride'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
  },
  {
    name: 'Grand Morocco 14-Day Discovery',
    slug: 'grand-morocco-14-day',
    cityName: 'Casablanca',
    description:
      'The ultimate Morocco experience spanning coast to desert, medina to mountain. Visit all major cities, trek the Atlas, sleep in the Sahara, surf in Essaouira, and feast in Marrakech.',
    durationDays: 14,
    priceFromMad: 22000,
    difficulty: 'Moderate',
    category: 'Cultural',
    highlights: ['All Imperial Cities', 'Sahara Camping', 'Atlas Trek', 'Essaouira Coast'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
  },
  {
    name: 'Draa Valley Expedition 4-Day',
    slug: 'draa-valley-expedition',
    cityName: 'Ouarzazate',
    description:
      'Explore the longest river valley in Morocco, passing through ancient kasbahs, date palm oases, and remote Berber villages before reaching the vast dunes of Erg Chigaga.',
    durationDays: 4,
    priceFromMad: 4200,
    difficulty: 'Moderate',
    category: 'Desert',
    highlights: ['Draa Valley', 'Zagora', 'Erg Chigaga', 'Desert Bivouac'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'High Atlas Berber Villages 3-Day',
    slug: 'high-atlas-berber-villages',
    cityName: 'Marrakech',
    description:
      'An immersive trek through remote High Atlas villages, staying in Berber guesthouses, sharing meals with local families, and crossing the Tizi n\'Tamatert pass at 2,279 meters.',
    durationDays: 3,
    priceFromMad: 2800,
    difficulty: 'Moderate',
    category: 'Adventure',
    highlights: ['Berber Homestays', 'Mountain Passes', 'Traditional Meals', 'Walnut Groves'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=800&q=80',
  },
  {
    name: 'Tangier Art & Culture Day Tour',
    slug: 'tangier-art-culture',
    cityName: 'Tangier',
    description:
      'Discover the artistic legacy that drew Matisse, Delacroix, and the Beat Generation to Tangier. Visit galleries, the American Legation Museum, literary cafes, and the vibrant contemporary art scene.',
    durationDays: 1,
    priceFromMad: 500,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['American Legation', 'Cafe Hafa', 'Contemporary Galleries', 'Kasbah Museum'],
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80',
  },
  {
    name: 'Ouarzazate Film Location Tour',
    slug: 'ouarzazate-film-tour',
    cityName: 'Ouarzazate',
    description:
      'Visit the world\'s largest film studios and the sets of Gladiator, Game of Thrones, and Lawrence of Arabia. Includes Ait Benhaddou and the Kasbah Taourirt, both used in countless productions.',
    durationDays: 1,
    priceFromMad: 450,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['Atlas Studios', 'Ait Benhaddou Sets', 'Kasbah Taourirt', 'Film History'],
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
  },
  {
    name: 'Dakhla Kitesurfing Week',
    slug: 'dakhla-kitesurfing',
    cityName: 'Dakhla',
    description:
      'Seven days of world-class kitesurfing in the flat, warm lagoon of Dakhla on the Saharan Atlantic coast. Includes equipment, instruction for all levels, beachfront accommodation, and desert excursions.',
    durationDays: 7,
    priceFromMad: 12000,
    difficulty: 'Moderate',
    category: 'Adventure',
    highlights: ['Flat Water Lagoon', 'Equipment Included', 'Desert Excursion', 'Beachfront Stay'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
  },
  {
    name: 'Agadir Coastal Discovery 2-Day',
    slug: 'agadir-coastal-discovery',
    cityName: 'Agadir',
    description:
      'Explore the sun-drenched Souss-Massa coast with visits to Paradise Valley, the Souss-Massa National Park for flamingo spotting, Taghazout surf village, and a traditional argan oil cooperative.',
    durationDays: 2,
    priceFromMad: 1400,
    difficulty: 'Easy',
    category: 'Family',
    highlights: ['Paradise Valley', 'Argan Cooperative', 'Taghazout Village', 'Flamingo Reserve'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
  },
  {
    name: 'Desert Glamping Experience 2-Night',
    slug: 'desert-glamping-experience',
    cityName: 'Merzouga',
    description:
      'A luxury desert experience in the Erg Chebbi dunes with plush tented suites, gourmet dining under the stars, sunrise yoga, sandboarding, and a private Gnawa music performance.',
    durationDays: 2,
    priceFromMad: 5500,
    difficulty: 'Easy',
    category: 'Wellness',
    highlights: ['Luxury Tents', 'Stargazing Dinner', 'Sunrise Yoga', 'Sandboarding'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Marrakech Cooking Class',
    slug: 'marrakech-cooking-class',
    cityName: 'Marrakech',
    description:
      'Start with a guided market tour to select fresh ingredients, then learn to prepare a full Moroccan meal: harira soup, traditional tagine, Moroccan salads, and mint tea in a riad kitchen.',
    durationDays: 1,
    priceFromMad: 450,
    difficulty: 'Easy',
    category: 'Food',
    highlights: ['Market Tour', 'Hands-on Cooking', 'Full Meal Prepared', 'Recipe Book'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  },
  {
    name: 'Fes Ceramics & Pottery Workshop',
    slug: 'fes-ceramics-workshop',
    cityName: 'Fes',
    description:
      'Learn the ancient art of Fassi ceramics with a master potter. Shape, paint, and glaze your own piece using traditional cobalt blue and green patterns, then visit the famous pottery cooperative.',
    durationDays: 1,
    priceFromMad: 400,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['Wheel Throwing', 'Traditional Glazing', 'Take Home Pottery', 'Cooperative Visit'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
  },
  {
    name: 'Atlas Mountain Biking 3-Day',
    slug: 'atlas-mountain-biking',
    cityName: 'Marrakech',
    description:
      'Three days of mountain biking through the High Atlas foothills, dirt tracks between Berber villages, river crossings, and dramatic descents with the snow-capped peaks as your backdrop.',
    durationDays: 3,
    priceFromMad: 3500,
    difficulty: 'Challenging',
    category: 'Adventure',
    highlights: ['Technical Trails', 'Village Stops', 'River Crossings', 'Mountain Panoramas'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1580746738099-0cf2b4063740?w=800&q=80',
  },
  {
    name: 'Rabat Royal Heritage Tour',
    slug: 'rabat-royal-heritage',
    cityName: 'Rabat',
    description:
      'Explore Morocco\'s elegant capital with visits to the Royal Palace gates, Hassan Tower, Mausoleum of Mohammed V, Kasbah of the Udayas, and the ancient Chellah necropolis.',
    durationDays: 1,
    priceFromMad: 350,
    difficulty: 'Easy',
    category: 'Cultural',
    highlights: ['Hassan Tower', 'Kasbah Udayas', 'Chellah Ruins', 'Royal Palace'],
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
  },
  {
    name: 'Mediterranean Coast Road Trip 5-Day',
    slug: 'mediterranean-coast-road-trip',
    cityName: 'Tangier',
    description:
      'Drive the stunning Mediterranean coastline from Tangier to Al Hoceima, stopping at hidden beaches, Spanish-era towns, the Rif Mountains, and the charming fishing village of Cala Iris.',
    durationDays: 5,
    priceFromMad: 6500,
    difficulty: 'Easy',
    category: 'Adventure',
    highlights: ['Coastal Highway', 'Hidden Beaches', 'Rif Mountains', 'Al Hoceima Bay'],
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80',
  },
  {
    name: 'Sahara Photography Expedition 4-Day',
    slug: 'sahara-photography-expedition',
    cityName: 'Marrakech',
    description:
      'A photography-focused desert tour led by a professional photographer. Capture golden hour in the dunes, star trails over camp, and the dramatic landscapes of the Draa-Tafilalet region.',
    durationDays: 4,
    priceFromMad: 5200,
    difficulty: 'Easy',
    category: 'Photography',
    highlights: ['Golden Hour Shoots', 'Star Trail Session', 'Editing Workshop', 'Portfolio Review'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Morocco Tours & Experiences',
    description: 'Curated tours and experiences across Morocco.',
    url: 'https://cityguide.ma/tours',
    numberOfItems: tours.length,
    itemListElement: tours.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: t.name,
        description: t.description,
        url: `https://cityguide.ma/tours/${t.slug}`,
        image: t.image,
        touristType: t.category,
        offers: {
          '@type': 'Offer',
          price: t.priceFromMad,
          priceCurrency: 'MAD',
        },
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

export default function ToursPage() {
  return (
    <>
      <JsonLd />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Tours</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Camel caravan in the Sahara Desert at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Curated Experiences
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Tours &amp; Experiences
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Sahara desert expeditions and Atlas Mountain treks to
              culinary journeys and artisan workshops, find the perfect way to
              experience the kingdom.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">{tours.length}+</p>
                <p className="text-sm text-white/70">Tours</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">7</p>
                <p className="text-sm text-white/70">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">1-14</p>
                <p className="text-sm text-white/70">Days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* Main Content */}
      <section className="container-morocco py-12 md:py-16">
        <ToursClientSection tours={tours} />
      </section>
    </>
  );
}
