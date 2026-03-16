import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  Star,
  MapPin,
  Clock,
  Plane,
  Car,
  Bed,
  Utensils,
  Sun,
  Camera,
  Waves,
  ArrowRight,
  Calendar,
  ThermometerSun,
  Compass,
  Heart,
  Globe,
  Sparkles,
  TreePine,
  Eye,
  Fish,
  Sailboat,
  Shell,
  Mountain,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: 'Dakhla Travel Guide - Morocco\'s Kitesurfing Paradise | MoroccoGuide',
  description:
    'Discover Dakhla, Morocco\'s ultimate kitesurfing destination. Explore the stunning bay, white sand dunes, oyster farms, and flamingo lagoons where the Sahara meets the Atlantic Ocean.',
  openGraph: {
    title: 'Dakhla - Morocco\'s Kitesurfing Paradise | MoroccoGuide',
    description:
      'Where the Sahara Desert meets the Atlantic Ocean. World-class kitesurfing, pristine lagoons, oyster farms, and untouched desert beauty await in Morocco\'s far south.',
    url: 'https://moroccoguide.com/cities/dakhla',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596394723269-e8e5b2020eb4?w=2800&q=80',
        width: 2800,
        height: 1600,
        alt: 'Dakhla Bay at sunset with kitesurfers, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/cities/dakhla',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function DakhlaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Dakhla',
    description:
      'A remote kitesurfing paradise in southern Morocco where the Sahara Desert meets the Atlantic Ocean, famous for its world-class lagoon, oyster farms, and pristine white sand dunes.',
    url: 'https://moroccoguide.com/cities/dakhla',
    touristType: ['Kitesurfers', 'Adventure Travelers', 'Nature Lovers', 'Photographers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.7136,
      longitude: -15.9355,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Dakhla Bay Lagoon' },
      { '@type': 'TouristAttraction', name: 'Dragon Island' },
      { '@type': 'TouristAttraction', name: 'PK25 Kite Spot' },
      { '@type': 'TouristAttraction', name: 'White Dune' },
      { '@type': 'TouristAttraction', name: 'Dakhla Oyster Farms' },
    ],
  };

  const attractions = [
    {
      name: 'Dakhla Bay Lagoon',
      description:
        'A 40-kilometer-long natural lagoon with flat, warm water and constant trade winds — widely regarded as one of the best kitesurfing spots on the planet. Even non-kiters are captivated by the sheer turquoise expanse.',
      image: 'https://images.unsplash.com/photo-1596394723269-e8e5b2020eb4?w=800&q=80',
      type: 'Natural Wonder',
      rating: 4.9,
    },
    {
      name: 'Dragon Island',
      description:
        'A mystical sand peninsula that emerges from the lagoon at low tide, shaped like a sleeping dragon. Accessible by boat or kite, it offers otherworldly photo opportunities and a sense of total isolation.',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
      type: 'Island',
      rating: 4.8,
    },
    {
      name: 'PK25 Kite Spot',
      description:
        'Located 25 kilometers south of town, this legendary flat-water spot delivers waist-deep water stretching hundreds of meters from shore. Perfect for beginners and freestyle riders alike, with 300+ wind days per year.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      type: 'Sports',
      rating: 4.9,
    },
    {
      name: 'White Dune (Dune Blanche)',
      description:
        'A towering white sand dune that drops dramatically into the crystal-clear Atlantic. Sandboarding down its face and swimming in the turquoise waters below is a once-in-a-lifetime experience.',
      image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
      type: 'Natural Wonder',
      rating: 4.7,
    },
    {
      name: 'Dakhla Oyster Farms',
      description:
        'Morocco\'s only oyster-producing region, where nutrient-rich Atlantic waters feed thousands of oysters in floating baskets. Visit the farms, taste fresh oysters right from the water, and learn about sustainable aquaculture.',
      image: 'https://images.unsplash.com/photo-1606850246029-0c56e2a13d35?w=800&q=80',
      type: 'Food & Culture',
      rating: 4.6,
    },
  ];

  const thingsToDo = [
    { title: 'Kitesurf the Lagoon', description: 'Ride flat water with steady 20-knot winds in one of the world\'s top kite destinations.', icon: Wind },
    { title: 'Flamingo Watching', description: 'Spot thousands of pink flamingos wading through the shallow lagoon waters at dawn.', icon: Eye },
    { title: 'Fresh Oyster Tasting', description: 'Eat oysters straight from the farm — pulled from the water minutes before you taste them.', icon: Shell },
    { title: 'Sandboard the White Dune', description: 'Carve down the towering Dune Blanche and plunge into the turquoise Atlantic below.', icon: Mountain },
    { title: 'Explore by 4x4', description: 'Drive through the Saharan desert landscape to hidden beaches and remote fishing villages.', icon: Car },
    { title: 'SUP at Sunrise', description: 'Stand-up paddleboard across mirror-still lagoon water as the sun paints the sky gold and pink.', icon: Sailboat },
    { title: 'Desert Camping', description: 'Sleep under a blanket of stars in a Saharan bivouac, surrounded by absolute silence.', icon: Sparkles },
    { title: 'Seafood Feast', description: 'Savor the freshest Atlantic catch — grilled fish, lobster, and calamari — at waterfront restaurants.', icon: Fish },
  ];

  const accommodations = [
    { name: 'Dakhla Attitude', type: 'Kite Resort', price: '$$', description: 'The original kite hotel, right on the lagoon with direct water access and a vibrant community.' },
    { name: 'Dakhla Club Hotel & Spa', type: 'Luxury Hotel', price: '$$$', description: 'Upscale beachfront retreat with spa, pool, and panoramic views of the bay.' },
    { name: 'Westpoint Dakhla', type: 'Kite Camp', price: '$$', description: 'A dedicated kitesurf camp with bungalows, gear storage, and a laid-back surfer vibe.' },
    { name: 'Heliophora', type: 'Eco-Lodge', price: '$$', description: 'Sustainable eco-lodge nestled on the lagoon, combining comfort with minimal environmental impact.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1596394723269-e8e5b2020eb4?w=2800&q=80)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Dakhla</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Wind className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Dakhla
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Kitesurfing Paradise
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Where the Sahara Desert plunges into the Atlantic Ocean, a 40-kilometer turquoise lagoon
            delivers 12 months of wind, world-class kitesurfing, fresh oysters, and the kind of
            remote beauty that stays with you forever.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Wind className="w-3.5 h-3.5 mr-1.5" /> 300+ Wind Days</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Sun className="w-3.5 h-3.5 mr-1.5" /> Year-Round Sun</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Waves className="w-3.5 h-3.5 mr-1.5" /> Lagoon & Ocean</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Compass className="w-3.5 h-3.5 mr-1.5" /> Remote Adventure</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Edge of the World
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Dakhla is not your typical Moroccan destination, and that is precisely the point. Perched on
              a narrow peninsula in Morocco&apos;s far south, this former fishing village has become the
              planet&apos;s most sought-after kitesurfing destination. But you do not need to fly a kite to
              fall in love with this place.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Imagine a lagoon so vast and turquoise it looks photoshopped. Pink flamingos standing in
              knee-deep water. Oyster farms where you eat your harvest minutes after it leaves the sea.
              Desert dunes that tumble into the ocean. Sunsets that make you forget to breathe.
              That is Dakhla.
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Attractions ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top Attractions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 2 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="tag bg-white/90 text-[var(--color-primary)] font-semibold">
                      {attraction.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                    {attraction.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 Things To Do ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              8 Unforgettable Things to Do
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {thingsToDo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6 text-center group">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mx-auto mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accommodations ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Stay
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                  <Bed className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {hotel.name}
                    </h3>
                    <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">{hotel.type}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-2">{hotel.description}</p>
                  <span className="text-sm font-semibold text-[var(--color-green)]">{hotel.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting There
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">By Air</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Dakhla Airport (VIL) receives direct flights from Casablanca with Royal Air Maroc.
                Flight time is approximately 2 hours. The airport is 6 km from town center.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">By Road</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                The drive from Agadir takes about 14 hours via the N1 highway along the coast. While long,
                the journey through the Western Sahara is a mesmerizing desert road trip.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <ThermometerSun className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Best Time to Visit</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Dakhla enjoys year-round sunshine and wind. Peak kitesurfing season runs from April to
                November, but the mild winters (18-22 C) make any month a great choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Discover Dakhla?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Pack your sense of adventure (and maybe a kite). This is Morocco at its most wild,
            beautiful, and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Explore All Cities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Plan Your Trip <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
