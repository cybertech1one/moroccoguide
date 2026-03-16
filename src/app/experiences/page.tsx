import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Tent,
  ChefHat,
  Droplets,
  Mountain,
  ArrowRight,
  Star,
  Clock,
  MapPin,
} from 'lucide-react';
import ExperiencesClient from './ExperiencesClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Unique Moroccan Experiences | Authentic Adventures & Cultural Encounters',
  description:
    'Discover 25+ unique Moroccan experiences from luxury Sahara glamping and Berber cooking classes to hammam rituals, Atlas Mountain hikes, and traditional craft workshops. Curated by locals.',
  keywords: [
    'Morocco experiences',
    'unique things to do in Morocco',
    'Morocco camel trek',
    'Berber cooking class',
    'Morocco hammam',
    'Sahara glamping',
    'Morocco hot air balloon',
    'surf Morocco',
    'Morocco cultural experiences',
    'Morocco adventure',
    'Atlas Mountains hiking',
    'Morocco cooking class',
    'hammam ritual Morocco',
    'desert camping Morocco',
    'Morocco arts crafts',
  ],
  openGraph: {
    title: 'Unique Moroccan Experiences - CityGuide',
    description:
      'Explore 25+ authentic and unique experiences across Morocco. Adventures, cultural encounters, culinary journeys, wellness rituals, nature escapes, and artisan workshops.',
    url: 'https://cityguide.ma/experiences',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Camel trekking at sunrise in the Moroccan Sahara',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/experiences' },
};

/* ═══════════════════════════════════════════════════════════════
   EXPERIENCE DATA
   ═══════════════════════════════════════════════════════════════ */

export type ExperienceCategory = 'Adventure' | 'Cultural' | 'Culinary' | 'Wellness' | 'Nature' | 'Arts & Crafts';
export type Difficulty = 'Easy' | 'Moderate' | 'Challenging';
export type PriceRange = '$' | '$$' | '$$$';

export interface Experience {
  id: number;
  name: string;
  slug?: string;
  description: string;
  city: string;
  duration: string;
  priceRange: PriceRange;
  difficulty: Difficulty;
  image: string;
  category: ExperienceCategory;
  rating: number;
}

const experiences: Experience[] = [
  {
    id: 1,
    name: 'Sunrise Camel Trek',
    description:
      'Rise before dawn and ride a camel across the golden dunes of Erg Chebbi as the first rays of sun paint the Sahara in shades of amber and rose. An iconic Moroccan moment.',
    city: 'Merzouga',
    duration: '3 hours',
    priceRange: '$$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    category: 'Adventure',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Cooking with a Berber Family',
    slug: 'moroccan-cooking-class',
    description:
      'Join a Berber family in their Atlas Mountain home to prepare a traditional meal from scratch. Learn the secrets of tagine, couscous, and Moroccan bread while sharing stories over mint tea.',
    city: 'Imlil',
    duration: '5 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=800&q=80',
    category: 'Culinary',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Hammam Ritual',
    slug: 'hammam-ritual',
    description:
      'Surrender to the centuries-old Moroccan bathing ritual. Steam, black soap scrub, rhassoul clay mask, and argan oil massage in a beautifully tiled traditional hammam.',
    city: 'Marrakech',
    duration: '2 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    category: 'Wellness',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Sand-boarding Erg Chebbi',
    description:
      'Hike to the top of the towering golden dunes and carve your way down on a sandboard. No experience needed, just a sense of adventure and a love for spectacular desert panoramas.',
    city: 'Merzouga',
    duration: '2 hours',
    priceRange: '$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    category: 'Adventure',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Stargazing in the Sahara',
    description:
      'Experience the clearest night skies on Earth from atop a dune. A certified astronomer guides you through constellations, planets, and the Milky Way with professional telescopes.',
    city: 'Merzouga',
    duration: '3 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80',
    category: 'Nature',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Hot Air Balloon over Marrakech',
    description:
      'Soar above the palm groves and Atlas Mountain foothills at sunrise. Breathtaking panoramic views of the Red City, Agafay Desert, and Berber villages from a thousand feet up.',
    city: 'Marrakech',
    duration: '4 hours',
    priceRange: '$$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&q=80',
    category: 'Adventure',
    rating: 4.8,
  },
  {
    id: 7,
    name: 'Surf Lesson in Taghazout',
    description:
      'Catch your first wave at Morocco\'s premier surf destination. Professional instructors guide you through world-class breaks along the stunning Atlantic coastline.',
    city: 'Taghazout',
    duration: '3 hours',
    priceRange: '$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    category: 'Adventure',
    rating: 4.7,
  },
  {
    id: 8,
    name: 'Pottery Class in Safi',
    description:
      'Learn the ancient art of Moroccan pottery from master craftsmen in Morocco\'s pottery capital. Shape clay on a traditional wheel, paint geometric patterns, and fire your creation.',
    city: 'Safi',
    duration: '3 hours',
    priceRange: '$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
    category: 'Arts & Crafts',
    rating: 4.6,
  },
  {
    id: 9,
    name: 'Henna Ceremony',
    description:
      'Participate in a traditional henna ceremony with a master artist (neggafa). Learn about the symbolism of Moroccan henna patterns while receiving intricate designs on your hands.',
    city: 'Fes',
    duration: '1.5 hours',
    priceRange: '$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
    category: 'Cultural',
    rating: 4.7,
  },
  {
    id: 10,
    name: 'Gnaoua Music Experience',
    description:
      'Immerse yourself in the hypnotic rhythms of Gnaoua, Morocco\'s ancient spiritual music tradition. Attend a private ceremony, learn history, and try playing the guembri and krakebs.',
    city: 'Essaouira',
    duration: '2.5 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    category: 'Cultural',
    rating: 4.6,
  },
  {
    id: 11,
    name: 'Argan Oil Workshop',
    description:
      'Visit a women\'s cooperative in the argan forest to learn the traditional process of making Morocco\'s liquid gold. Crack argan nuts, press oil, and discover its culinary and cosmetic uses.',
    city: 'Essaouira',
    duration: '2 hours',
    priceRange: '$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80',
    category: 'Arts & Crafts',
    rating: 4.5,
  },
  {
    id: 12,
    name: 'Zellige Tile Making',
    description:
      'Create your own piece of Moroccan geometric art in a traditional zellige workshop. Hand-cut and assemble colorful mosaic tiles under the guidance of master artisans in the Fes medina.',
    city: 'Fes',
    duration: '3 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    category: 'Arts & Crafts',
    rating: 4.8,
  },
  {
    id: 13,
    name: 'Calligraphy Class',
    description:
      'Master the flowing art of Arabic calligraphy with a Fassi master calligrapher. Learn traditional scripts, practice with reed pens and handmade ink, and create personalized artwork.',
    city: 'Fes',
    duration: '2.5 hours',
    priceRange: '$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    category: 'Arts & Crafts',
    rating: 4.6,
  },
  {
    id: 14,
    name: 'Sahara Glamping',
    slug: 'sahara-glamping',
    description:
      'Sleep under a canopy of stars in a luxury Saharan bivouac. Berber music around the campfire, traditional dinner, and waking to a sunrise over the endless dunes.',
    city: 'Merzouga',
    duration: '1 night',
    priceRange: '$$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    category: 'Nature',
    rating: 4.9,
  },
  {
    id: 15,
    name: 'Mountain Village Homestay',
    description:
      'Spend a night with a Berber family in a remote Atlas Mountain village. Share meals, learn about ancient traditions, and wake to panoramic mountain views that few tourists ever see.',
    city: 'Imlil',
    duration: '1 night',
    priceRange: '$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    category: 'Cultural',
    rating: 4.8,
  },
  {
    id: 16,
    name: 'Fishing with Locals in Essaouira',
    description:
      'Join local fishermen at dawn as they cast nets from traditional blue boats. Learn their centuries-old techniques and enjoy the freshest seafood lunch on the harbor wall.',
    city: 'Essaouira',
    duration: '5 hours',
    priceRange: '$$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    category: 'Nature',
    rating: 4.5,
  },
  {
    id: 17,
    name: 'Berber Tent Dinner',
    description:
      'Dine under the stars in a traditional Berber tent on the outskirts of Marrakech. A multi-course feast of Moroccan delicacies, live Gnaoua music, and fire dancers.',
    city: 'Marrakech',
    duration: '4 hours',
    priceRange: '$$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
    category: 'Culinary',
    rating: 4.7,
  },
  {
    id: 18,
    name: 'Falconry Experience',
    description:
      'Learn the ancient art of falconry in the Agafay Desert with a master falconer. Handle majestic Harris hawks, watch them hunt, and understand this centuries-old Moroccan tradition.',
    city: 'Marrakech',
    duration: '2 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80',
    category: 'Nature',
    rating: 4.6,
  },
  {
    id: 19,
    name: 'Traditional Wedding Attendance',
    description:
      'Experience a Moroccan wedding celebration as an honored guest. Witness the henna ceremony, amariya procession, seven dress changes, and feast on a legendary wedding banquet.',
    city: 'Fes',
    duration: '1 evening',
    priceRange: '$$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
    category: 'Cultural',
    rating: 4.9,
  },
  {
    id: 20,
    name: 'Tea Ceremony',
    description:
      'Participate in an authentic Moroccan tea ceremony in a traditional riad. Learn the art of pouring from height, the significance of three glasses, and the regional variations of this sacred ritual.',
    city: 'Marrakech',
    duration: '1 hour',
    priceRange: '$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
    category: 'Culinary',
    rating: 4.7,
  },
  {
    id: 21,
    name: 'Horseback Riding on the Beach',
    description:
      'Gallop along the vast, windswept beach of Essaouira on an Arabian horse. Ride through dunes, along the shoreline, and past ancient fortifications as Atlantic waves crash beside you.',
    city: 'Essaouira',
    duration: '2 hours',
    priceRange: '$$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    category: 'Adventure',
    rating: 4.7,
  },
  {
    id: 22,
    name: 'Paragliding Agadir',
    description:
      'Soar like an eagle above the stunning Atlantic coastline on a tandem paragliding flight. Launch from clifftops and glide over golden beaches, fishing villages, and turquoise waters.',
    city: 'Agadir',
    duration: '1.5 hours',
    priceRange: '$$$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    category: 'Adventure',
    rating: 4.8,
  },
  {
    id: 23,
    name: 'ATV Desert Adventure',
    description:
      'Race across the rocky moonscape of the Agafay Desert on a powerful ATV. Navigate barren hills and dried lake beds with panoramic Atlas Mountain views on the horizon.',
    city: 'Marrakech',
    duration: '3 hours',
    priceRange: '$$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80',
    category: 'Adventure',
    rating: 4.6,
  },
  {
    id: 24,
    name: 'Medina Treasure Hunt',
    description:
      'Navigate the labyrinthine medina of Marrakech on an interactive treasure hunt. Solve riddles, discover hidden courtyards, meet artisans, and uncover the secrets of the ancient city.',
    city: 'Marrakech',
    duration: '3 hours',
    priceRange: '$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
    category: 'Cultural',
    rating: 4.5,
  },
  {
    id: 25,
    name: 'Photography Walk Chefchaouen',
    description:
      'Capture the iconic blue streets of the Blue Pearl with a professional photographer guide. Discover hidden corners, learn composition techniques, and shoot at perfect golden-hour light.',
    city: 'Chefchaouen',
    duration: '3 hours',
    priceRange: '$$',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80',
    category: 'Cultural',
    rating: 4.7,
  },
  {
    id: 26,
    name: 'Atlas Mountains Day Hike',
    slug: 'atlas-day-hike',
    description:
      'Trek through the stunning High Atlas from Imlil to Berber villages, terraced valleys, and walnut groves. Choose from easy valley walks to challenging Toubkal base camp routes.',
    city: 'Imlil',
    duration: 'Full day',
    priceRange: '$$',
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80',
    category: 'Adventure',
    rating: 4.8,
  },
];

/* ═══════════════════════════════════════════════════════════════
   FEATURED EXPERIENCES (Detail Pages)
   ═══════════════════════════════════════════════════════════════ */

const featuredExperiences = [
  {
    title: 'Sahara Desert Glamping',
    slug: '/experiences/sahara-glamping',
    description: 'Luxury desert camps under the stars at Erg Chebbi and Erg Chigaga. An unforgettable night in the Sahara.',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=600&q=80',
    price: 'From $150/night',
    duration: '1-3 nights',
    icon: Tent,
  },
  {
    title: 'Moroccan Cooking Class',
    slug: '/experiences/moroccan-cooking-class',
    description: 'Market tour plus hands-on cooking session. Learn tagine, couscous, pastilla, and msemmen from local chefs.',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=600&q=80',
    price: 'From $30/person',
    duration: '4-5 hours',
    icon: ChefHat,
  },
  {
    title: 'Traditional Hammam Ritual',
    slug: '/experiences/hammam-ritual',
    description: 'The centuries-old Moroccan bathing ritual. From neighborhood bathhouses to luxury spas.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    price: 'From $10',
    duration: '1.5-2 hours',
    icon: Droplets,
  },
  {
    title: 'Atlas Mountains Day Hike',
    slug: '/experiences/atlas-day-hike',
    description: 'Trek through Berber villages, walnut groves, and dramatic valleys in the High Atlas from Marrakech.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80',
    price: 'From $40/person',
    duration: 'Full day',
    icon: Mountain,
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Unique Moroccan Experiences',
    description:
      'Curated directory of 25+ unique and authentic experiences across Morocco, from desert adventures to cultural immersions and wellness rituals.',
    url: 'https://cityguide.ma/experiences',
    numberOfItems: experiences.length,
    itemListElement: experiences.map((exp, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: exp.name,
        description: exp.description,
        url: exp.slug
          ? `https://cityguide.ma/experiences/${exp.slug}`
          : `https://cityguide.ma/experiences#${exp.name.toLowerCase().replace(/\s+/g, '-')}`,
        image: exp.image,
        address: {
          '@type': 'PostalAddress',
          addressLocality: exp.city,
          addressCountry: 'MA',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: exp.rating,
          bestRating: 5,
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

export default function ExperiencesPage() {
  return (
    <>
      <JsonLd />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Sunrise camel trek across Moroccan Sahara dunes"
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
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Experiences</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Once-in-a-Lifetime Moments
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Unique Moroccan Experiences
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From sunrise camel treks across the Sahara to cooking with Berber families
              in the Atlas Mountains, discover 25+ authentic experiences that bring
              Morocco to life in ways no guidebook can capture.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  25+
                </p>
                <p className="text-sm text-white/70">Experiences</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  6
                </p>
                <p className="text-sm text-white/70">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">
                  10+
                </p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Featured Experience Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              In-Depth Guides
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Featured Experiences
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore our most popular experiences with detailed guides covering everything
              you need to know -- pricing, what to expect, practical tips, and booking advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredExperiences.map((exp) => (
              <Link
                key={exp.slug}
                href={exp.slug}
                className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {exp.duration}
                      </span>
                      <span className="font-semibold text-[var(--color-accent)]">
                        {exp.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {exp.description}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                    Read Full Guide
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            All Experiences
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Browse and filter every experience by category, city, and price range.
          </p>
        </div>
        <ExperiencesClient experiences={experiences} />
      </section>
    </>
  );
}
