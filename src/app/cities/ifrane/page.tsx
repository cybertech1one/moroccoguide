import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  TreePine,
  Star,
  MapPin,
  Clock,
  Plane,
  Car,
  Bus,
  Bed,
  Utensils,
  Sun,
  Camera,
  ArrowRight,
  Calendar,
  ThermometerSun,
  Compass,
  Heart,
  Mountain,
  Snowflake,
  GraduationCap,
  Eye,
  Footprints,
  BookOpen,
  Coffee,
  Sparkles,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: 'Ifrane Travel Guide - Morocco\'s Little Switzerland | MoroccoGuide',
  description:
    'Discover Ifrane, the cleanest city in Morocco with alpine architecture, cedar forests, ski slopes, and the famous stone lion. A refreshing mountain escape in the Middle Atlas.',
  openGraph: {
    title: 'Ifrane - Morocco\'s Little Switzerland | MoroccoGuide',
    description:
      'Alpine charm meets Moroccan hospitality in this pristine mountain town. Cedar forests, skiing at Michlifen, and crisp mountain air just hours from Fes and Meknes.',
    url: 'https://moroccoguide.com/cities/ifrane',
    type: 'website',
    images: [
      {
        url: '/images/hero-atlas.webp',
        width: 2800,
        height: 1600,
        alt: 'Ifrane city with alpine architecture and cedar trees, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/cities/ifrane',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function IfranePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Ifrane',
    description:
      'A pristine mountain town in Morocco\'s Middle Atlas known as "Little Switzerland" for its alpine architecture, cedar forests, clean streets, and Michlifen ski resort.',
    url: 'https://moroccoguide.com/cities/ifrane',
    touristType: ['Nature Lovers', 'Families', 'Ski Enthusiasts', 'Hikers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.5228,
      longitude: -5.1100,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Ain Vitale Spring' },
      { '@type': 'TouristAttraction', name: 'Lake Dayet Aoua' },
      { '@type': 'TouristAttraction', name: 'Ifrane National Park' },
      { '@type': 'TouristAttraction', name: 'Azrou Cedar Forest' },
      { '@type': 'TouristAttraction', name: 'Michlifen Ski Resort' },
    ],
  };

  const attractions = [
    {
      name: 'Azrou Cedar Forest',
      description:
        'An ancient forest of towering Atlas cedars, some over 800 years old, home to the famous Barbary macaques. Walking among these giants while playful monkeys swing overhead is pure Middle Atlas magic.',
      image: '/images/hero-atlas.webp',
      type: 'Nature',
      rating: 4.8,
    },
    {
      name: 'Ifrane National Park',
      description:
        'Over 50,000 hectares of protected cedar and oak forest teeming with wildlife. Hiking trails wind through valleys dotted with natural springs, wildflower meadows, and the occasional Barbary macaque family.',
      image: '/images/hero-atlas.webp',
      type: 'National Park',
      rating: 4.7,
    },
    {
      name: 'Lake Dayet Aoua',
      description:
        'A serene natural lake surrounded by cedar and oak forests, popular with birdwatchers for its migratory species. In spring, the shores burst with wildflowers, making it a photographer\'s dream.',
      image: '/images/hero-atlas.webp',
      type: 'Lake',
      rating: 4.6,
    },
    {
      name: 'Ain Vitale Spring',
      description:
        'A natural mineral spring surrounded by lush parkland and walking paths. Locals and visitors alike come to fill bottles with its pure mountain water and enjoy peaceful picnics under the trees.',
      image: '/images/hero-atlas.webp',
      type: 'Spring',
      rating: 4.5,
    },
    {
      name: 'Michlifen Ski Resort',
      description:
        'Morocco\'s most accessible ski resort, offering downhill runs, cross-country trails, and a charming alpine atmosphere. When the snow melts, the crater-shaped landscape becomes a stunning hiking destination.',
      image: '/images/hero-atlas.webp',
      type: 'Ski Resort',
      rating: 4.4,
    },
  ];

  const thingsToDo = [
    { title: 'Visit the Stone Lion', description: 'Photograph Ifrane\'s most famous landmark, the hand-carved stone lion sculpture in the town center park.', icon: Eye },
    { title: 'Hike the Cedar Forests', description: 'Trek through ancient Atlas cedar groves and spot Barbary macaques swinging between branches.', icon: TreePine },
    { title: 'Ski at Michlifen', description: 'Hit the slopes in winter at Morocco\'s alpine ski resort, just 17 km from town center.', icon: Snowflake },
    { title: 'Birdwatch at Dayet Aoua', description: 'Spot herons, coots, and migratory birds at this tranquil natural lake in the forest.', icon: Eye },
    { title: 'Stroll Al Akhawayn Campus', description: 'Walk the beautiful grounds of Morocco\'s premier English-language university, modeled on American campuses.', icon: GraduationCap },
    { title: 'Picnic at Ain Vitale', description: 'Fill your bottle at the mineral spring, spread a blanket, and enjoy the purest mountain air in Morocco.', icon: Coffee },
    { title: 'Walk the Town Gardens', description: 'Admire the immaculate French-style gardens, flower beds, and alpine-style chalets lining clean streets.', icon: Sparkles },
    { title: 'Day Trip to Azrou', description: 'Visit the nearby Berber market town famous for its cedar woodcraft, carpets, and weekly souks.', icon: Compass },
  ];

  const accommodations = [
    { name: 'Michlifen Ifrane Suites & Spa', type: 'Luxury Resort', price: '$$$', description: 'Five-star mountain resort with golf course, spa, and stunning views of the Middle Atlas ranges.' },
    { name: 'Hotel Perce-Neige', type: 'Heritage Hotel', price: '$$', description: 'A charming mountain hotel with wood-paneled rooms, fireplace lounge, and classic alpine atmosphere.' },
    { name: 'Les Chalets d\'Ifrane', type: 'Chalet', price: '$$', description: 'Swiss-style chalet accommodation with kitchenettes, perfect for families and extended mountain stays.' },
    { name: 'Appart Hotel Ifrane', type: 'Aparthotel', price: '$', description: 'Affordable and comfortable apartment-style rooms in the heart of town, ideal for budget-conscious travelers.' },
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
              'url(/images/hero-atlas.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Ifrane</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <TreePine className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Ifrane
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Little Switzerland
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Nestled at 1,665 meters in the Middle Atlas Mountains, Ifrane surprises everyone who visits.
            Clean streets lined with alpine chalets, ancient cedar forests, a ski resort, and some of
            the freshest mountain air in all of North Africa.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><TreePine className="w-3.5 h-3.5 mr-1.5" /> Cedar Forests</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Mountain className="w-3.5 h-3.5 mr-1.5" /> 1,665m Altitude</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Snowflake className="w-3.5 h-3.5 mr-1.5" /> Winter Skiing</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><GraduationCap className="w-3.5 h-3.5 mr-1.5" /> University Town</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Mountain Escape Like No Other
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Ifrane is the Morocco that nobody expects. Step off the bus from Fes or Meknes and you might
              think you have landed in a Swiss village: red-roofed chalets, manicured gardens, and streets
              so clean they sparkle. Frequently listed as one of the cleanest cities in the world, Ifrane
              is a breath of fresh air in every sense.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              But step beyond the town limits and the wild Middle Atlas takes over. Centuries-old cedar
              forests shelter endangered Barbary macaques, alpine lakes mirror the sky, and in winter,
              snow blankets the Michlifen slopes. Whether you seek nature, tranquility, or simply a cool
              retreat from the summer heat, Ifrane delivers.
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
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">From Fes</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Just 1 hour by car via the N8. Grand taxis and CTM buses run regularly. The scenic
                mountain road climbs through forests as the air gets cooler with every kilometer.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Bus className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">From Meknes</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                About 1.5 hours by road through the Middle Atlas. Regular bus and grand taxi connections
                make it easy to visit as a day trip from either imperial city.
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
                Spring (April-June) for wildflowers and hiking. Winter (December-February) for snow
                and skiing. Summer for a cool escape when lowland cities hit 40 C+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Discover a Different Side of Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Trade the heat and hustle for cool mountain air, ancient forests, and pristine streets.
            Ifrane is the Morocco that surprises everyone.
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
