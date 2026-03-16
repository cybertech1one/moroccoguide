import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Castle,
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
  Footprints,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: 'El Jadida Travel Guide - Portuguese Heritage on the Atlantic | MoroccoGuide',
  description:
    'Discover El Jadida, home to the UNESCO-listed Portuguese Cistern and fortified Cite Portugaise. A Game of Thrones filming location with stunning Atlantic beaches and rich history.',
  openGraph: {
    title: 'El Jadida - Portuguese Heritage on the Atlantic | MoroccoGuide',
    description:
      'Explore the UNESCO Portuguese Cistern, fortified Mazagan walls, Game of Thrones filming locations, and beautiful Atlantic beaches in this historic Moroccan coastal city.',
    url: 'https://moroccoguide.com/cities/el-jadida',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=2800&q=80',
        width: 2800,
        height: 1600,
        alt: 'El Jadida Portuguese Cistern with reflections, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/cities/el-jadida',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function ElJadidaPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'El Jadida',
    description:
      'A historic Atlantic coastal city featuring the UNESCO-listed Portuguese Cistern, the fortified Cite Portugaise, and beautiful beaches. A Game of Thrones filming location with unique Portuguese-Moroccan heritage.',
    url: 'https://moroccoguide.com/cities/el-jadida',
    touristType: ['History Buffs', 'Beach Lovers', 'Architecture Enthusiasts', 'Film Location Tourists'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.2549,
      longitude: -8.5009,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Portuguese Cistern' },
      { '@type': 'TouristAttraction', name: 'Cite Portugaise (Mazagan)' },
      { '@type': 'TouristAttraction', name: 'Sidi Bouzid Beach' },
      { '@type': 'TouristAttraction', name: 'Mazagan Beach & Golf Resort' },
      { '@type': 'TouristAttraction', name: 'Church of the Assumption' },
    ],
  };

  const attractions = [
    {
      name: 'Portuguese Cistern',
      description:
        'The crown jewel of El Jadida. This underground Gothic cistern, built in 1514, is a breathtaking chamber of stone columns reflected in a thin sheet of water on the floor. The light streaming through the oculus above creates an otherworldly atmosphere that has captivated photographers and filmmakers for decades.',
      image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
      type: 'UNESCO Heritage',
      rating: 4.9,
    },
    {
      name: 'Cite Portugaise (Mazagan)',
      description:
        'A massive 16th-century Portuguese fortification enclosing an entire walled city within El Jadida. Walk along the ramparts for panoramic ocean views, explore the narrow streets lined with Portuguese and Moroccan architecture, and feel history in every stone.',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
      type: 'Fortress',
      rating: 4.8,
    },
    {
      name: 'Sidi Bouzid Beach',
      description:
        'A beautiful crescent of golden sand backed by dramatic cliffs, just south of the city. Crystal-clear Atlantic waters, seafood restaurants perched on the rocks, and a relaxed local atmosphere make this the perfect beach escape.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      type: 'Beach',
      rating: 4.6,
    },
    {
      name: 'Mazagan Beach & Golf Resort',
      description:
        'A world-class resort complex with an 18-hole golf course designed by Gary Player, a casino, luxury spa, and private beach. Even non-guests can enjoy its restaurants and the stunning oceanfront grounds.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      type: 'Resort',
      rating: 4.5,
    },
    {
      name: 'Church of the Assumption',
      description:
        'One of the few remaining churches from the Portuguese era, this Manueline-style church within the citadel features distinctive stonework and a quiet interior that speaks to centuries of multicultural coexistence.',
      image: 'https://images.unsplash.com/photo-1585155770913-5f63ce1c5d78?w=800&q=80',
      type: 'Religious',
      rating: 4.4,
    },
  ];

  const thingsToDo = [
    { title: 'Explore the Portuguese Cistern', description: 'Stand in awe beneath Gothic arches reflected in mirror-still water in this 500-year-old underground marvel.', icon: Eye },
    { title: 'Walk the Ramparts', description: 'Circle the massive Mazagan fortress walls for sweeping views of the Atlantic and the old city below.', icon: Castle },
    { title: 'Relax at Sidi Bouzid', description: 'Spend a lazy day on golden sands, then feast on freshly grilled seafood at cliffside restaurants.', icon: Waves },
    { title: 'Visit the Jewish Heritage', description: 'Discover the old synagogue and Jewish quarter within the citadel, testament to El Jadida\'s multicultural past.', icon: Landmark },
    { title: 'Seafood at the Port', description: 'Watch fishermen haul in their catch, then eat the freshest fish and shellfish at portside grills.', icon: Utensils },
    { title: 'Explore the Medina Streets', description: 'Wander through a fascinating mix of Portuguese doorways and Moroccan archways within the old walls.', icon: Compass },
    { title: 'Day Trip to Oualidia', description: 'Drive an hour south to the famous oyster lagoon and one of Morocco\'s most beautiful beaches.', icon: Footprints },
    { title: 'Sunset from the Bastion', description: 'Watch the Atlantic sun sink below the horizon from the fortress bastion — pure golden-hour magic.', icon: Sparkles },
  ];

  const accommodations = [
    { name: 'Mazagan Beach & Golf Resort', type: 'Luxury Resort', price: '$$$', description: 'Five-star beachfront resort with golf, spa, casino, and multiple restaurants. The ultimate El Jadida splurge.' },
    { name: 'L\'Iglesia Hotel', type: 'Boutique Hotel', price: '$$', description: 'A converted church within the Portuguese citadel offering unique, atmospheric rooms dripping with history.' },
    { name: 'Dar Al Manar', type: 'Riad', price: '$$', description: 'Charming riad with traditional Moroccan decor, rooftop terrace, and warm family hospitality near the medina.' },
    { name: 'Hotel Le Palais Andalous', type: 'Hotel', price: '$', description: 'Comfortable and affordable hotel with Andalusian-inspired architecture and a central location for exploring.' },
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
              'url(https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=2800&q=80)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">El Jadida</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Castle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              El Jadida
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Portuguese Heritage on the Atlantic
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            A city where Portuguese Gothic architecture meets Moroccan soul. Walk through a 500-year-old
            underground cistern, explore fortress walls that have witnessed centuries of history, and relax
            on golden Atlantic beaches that stretch to the horizon.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Castle className="w-3.5 h-3.5 mr-1.5" /> Portuguese Fortress</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Waves className="w-3.5 h-3.5 mr-1.5" /> Atlantic Beaches</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Camera className="w-3.5 h-3.5 mr-1.5" /> Film Location</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Where Europe and Africa Wrote History Together
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              In 1502, the Portuguese built a fortress called Mazagan on this stretch of Atlantic coast.
              For over 250 years, European and Moroccan cultures intertwined within its walls, creating
              an architectural and cultural fusion that exists nowhere else on earth. When the Portuguese
              finally departed, Morocco embraced the city and renamed it El Jadida, meaning &quot;The New.&quot;
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Today, the fortified Cite Portugaise stands as a UNESCO World Heritage Site, its underground
              cistern one of the most photographed spaces in Morocco. Beyond the history, El Jadida offers
              wonderful beaches, some of the freshest seafood on the coast, and a refreshingly laid-back
              atmosphere that makes you want to stay longer than planned.
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
                  <Train className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">By Train</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                ONCF trains run from Casablanca to El Jadida in about 1.5 hours. The modern station
                is well-connected to the city center by petit taxi.
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
                The A1 motorway from Casablanca takes about 1.5 hours. From Marrakech, take the N7
                then A1 for a 3.5-hour drive through beautiful countryside.
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
                May through October for beach weather and warm days. Spring brings wildflowers.
                Year-round for the historic sites. The Atlantic breeze keeps summers pleasant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Step Into 500 Years of History
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            El Jadida is where Portuguese grandeur and Moroccan charm create something unforgettable.
            Great beaches, incredible food, and a UNESCO cistern that will leave you speechless.
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
