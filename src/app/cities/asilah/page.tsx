import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Palette,
  Star,
  MapPin,
  Clock,
  Plane,
  Car,
  Train,
  Bed,
  Utensils,
  Sun,
  Camera,
  ArrowRight,
  Calendar,
  ThermometerSun,
  Compass,
  Heart,
  Waves,
  Building2,
  Eye,
  ShoppingBag,
  BookOpen,
  Landmark,
  Sparkles,
  Coffee,
  Music,
  Castle,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: 'Asilah Travel Guide - Morocco\'s Art Capital | MoroccoGuide',
  description:
    'Discover Asilah, Morocco\'s whitewashed art town on the Atlantic. Famous for its annual mural festival, Portuguese ramparts, art galleries, and peaceful beaches.',
  openGraph: {
    title: 'Asilah - Morocco\'s Art Capital | MoroccoGuide',
    description:
      'A whitewashed medina adorned with vibrant murals, Portuguese ramparts overlooking the Atlantic, and an annual arts festival that draws creatives from around the world.',
    url: 'https://moroccoguide.com/cities/asilah',
    type: 'website',
    images: [
      {
        url: '/images/hero-asilah-aerial.webp',
        width: 2800,
        height: 1600,
        alt: 'Asilah medina with colorful murals and whitewashed walls, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/cities/asilah',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function AsilahPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Asilah',
    description:
      'A charming whitewashed coastal town known as Morocco\'s art capital, famous for its annual mural festival, Portuguese ramparts, art galleries, and tranquil Atlantic beaches.',
    url: 'https://moroccoguide.com/cities/asilah',
    touristType: ['Art Lovers', 'Culture Enthusiasts', 'Beach Goers', 'Photographers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.4652,
      longitude: -6.0348,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Medina Murals' },
      { '@type': 'TouristAttraction', name: 'Portuguese Ramparts' },
      { '@type': 'TouristAttraction', name: 'Paradise Beach' },
      { '@type': 'TouristAttraction', name: 'Centre Hassan II des Rencontres Internationales' },
      { '@type': 'TouristAttraction', name: 'Raissouni Palace' },
    ],
  };

  const attractions = [
    {
      name: 'Medina Murals',
      description:
        'The whitewashed walls of Asilah\'s medina serve as a rotating open-air gallery. Every summer during the Asilah Arts Festival, artists from around the world paint new murals on the walls, transforming the ancient streets into a living, breathing art exhibition.',
      image: '/images/hero-asilah-aerial.webp',
      type: 'Street Art',
      rating: 4.9,
    },
    {
      name: 'Portuguese Ramparts',
      description:
        'Massive 15th-century fortification walls built by the Portuguese that still encircle the old medina. Walk along the top for sweeping Atlantic views, dramatic sunset vistas, and a sense of the centuries of history these walls have witnessed.',
      image: '/images/hero-asilah-aerial.webp',
      type: 'Fortress',
      rating: 4.7,
    },
    {
      name: 'Paradise Beach',
      description:
        'A wide, uncrowded stretch of golden sand south of the medina, lapped by gentle Atlantic rollers. Far quieter than the beaches of Tangier or Agadir, it is the kind of beach where you can spread out and hear nothing but waves and seabirds.',
      image: '/images/hero-asilah-aerial.webp',
      type: 'Beach',
      rating: 4.6,
    },
    {
      name: 'Centre Hassan II',
      description:
        'A cultural center that hosts the annual Asilah Arts Festival and year-round exhibitions, concerts, and literary events. The beautifully restored complex includes galleries, performance spaces, and gardens that pulse with creative energy.',
      image: '/images/hero-asilah-aerial.webp',
      type: 'Cultural Center',
      rating: 4.5,
    },
    {
      name: 'Raissouni Palace',
      description:
        'A grand early 20th-century palace built by the famous bandit-turned-governor Raissouni, featuring ocean-facing terraces, ornate reception rooms, and stories of intrigue that rival any novel. Now used for cultural events during the festival season.',
      image: '/images/hero-asilah-aerial.webp',
      type: 'Palace',
      rating: 4.4,
    },
  ];

  const thingsToDo = [
    { title: 'Walk the Mural Gallery', description: 'Stroll through the medina and discover vibrant murals around every corner — a new art exhibition each summer.', icon: Palette },
    { title: 'Sunset from the Ramparts', description: 'Watch the Atlantic sun set from the Portuguese fortress walls as the sky turns every shade of gold and crimson.', icon: Eye },
    { title: 'Attend the Arts Festival', description: 'Join the famous annual Asilah Arts Festival (July-August) for music, painting, film, and literary events.', icon: Music },
    { title: 'Relax on Paradise Beach', description: 'Claim your spot on the wide golden sands and let the Atlantic breeze wash away every worry.', icon: Waves },
    { title: 'Browse Art Galleries', description: 'Explore the many small galleries tucked into the medina, showcasing Moroccan and international contemporary art.', icon: Sparkles },
    { title: 'Seafood on the Harbor', description: 'Feast on grilled fresh fish and seafood tagine at the restaurants overlooking the colorful fishing harbor.', icon: Coffee },
    { title: 'Visit Raissouni Palace', description: 'Explore the palace of the legendary bandit governor and its ocean-facing terrace with sweeping views.', icon: Castle },
    { title: 'Shop for Artisan Crafts', description: 'Find hand-painted ceramics, woven rugs, and original artwork in the medina\'s charming boutiques.', icon: ShoppingBag },
  ];

  const accommodations = [
    { name: 'Hotel Al Alba', type: 'Boutique Hotel', price: '$$', description: 'Chic boutique hotel within the medina walls with rooftop terrace, art-filled rooms, and ocean views.' },
    { name: 'Dar Manara', type: 'Riad', price: '$$', description: 'A lovingly restored riad with traditional Moroccan architecture, garden courtyard, and home-cooked meals.' },
    { name: 'Christina\'s House', type: 'Guesthouse', price: '$', description: 'A charming guesthouse with warm hospitality, central location, and the feel of staying with friends.' },
    { name: 'Berbari Hotel', type: 'Beach Hotel', price: '$$', description: 'Modern hotel near Paradise Beach with pool, restaurant, and easy access to both beach and medina.' },
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
              'url(/images/hero-asilah-aerial.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Asilah</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Asilah
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Art Capital
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            A whitewashed medina where every wall tells a story. Vibrant murals bloom on ancient
            Portuguese ramparts, art galleries hide behind blue doors, and the Atlantic crashes against
            fortress walls that have stood for five centuries. Asilah is where creativity and history
            meet the sea.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Palette className="w-3.5 h-3.5 mr-1.5" /> Street Art</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Castle className="w-3.5 h-3.5 mr-1.5" /> Portuguese Ramparts</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Waves className="w-3.5 h-3.5 mr-1.5" /> Atlantic Coast</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Music className="w-3.5 h-3.5 mr-1.5" /> Arts Festival</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Where Art Lives on Every Wall
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Asilah has been a creative beacon since the 1970s, when a group of visionary artists and
              intellectuals launched the Asilah Arts Festival. Every summer since, painters from across the
              globe descend on this tiny Atlantic town to transform its whitewashed medina walls into a
              sprawling open-air gallery. The result is a place that changes with every visit.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              But Asilah is more than murals. It is Portuguese ramparts silhouetted against Atlantic sunsets.
              It is the quiet hum of art galleries behind painted doors. It is Paradise Beach stretching
              golden and empty while the rest of Morocco buzzes with crowds. It is a town that has mastered
              the art of being beautiful without trying too hard.
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

      {/* ── Mural Art Visual Break ── */}
      <div className="container-morocco py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/hero-asilah-murals.webp"
            alt="Colorful street murals painted on whitewashed walls of Asilah medina during the annual arts festival"
            loading="lazy"
            className="w-full h-64 md:h-96 object-cover"
          />
          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            Asilah's medina walls come alive each summer with new murals from artists around the world
          </p>
        </div>
      </div>

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
            {thingsToDo.map((item) => {
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
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">By Train</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Asilah has its own ONCF train station with direct connections from Tangier (45 min)
                and Casablanca (4.5 hours). The station is a short walk from the medina.
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
                Just 45 minutes south of Tangier via the N1 highway. Grand taxis from Tangier are
                frequent and affordable. The coastal drive is scenic and effortless.
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
                July-August for the Asilah Arts Festival. May-June and September-October for perfect
                weather without crowds. Winters are mild and peaceful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Let Asilah Inspire You
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Art on every wall, history beneath your feet, and the Atlantic at your doorstep. Asilah is
            Morocco&apos;s most creative and peaceful coastal escape.
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
