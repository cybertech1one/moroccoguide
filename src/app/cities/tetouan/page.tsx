import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
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
  Palette,
  Building2,
  Eye,
  ShoppingBag,
  BookOpen,
  Waves,
  Music,
  Coffee,
  Sparkles,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: 'Tetouan Travel Guide - The White Dove of the Rif | MoroccoGuide',
  description:
    'Explore Tetouan, a UNESCO World Heritage city with Andalusian heritage, Spanish-Moorish architecture, vibrant arts scene, and a gateway to Mediterranean beaches.',
  openGraph: {
    title: 'Tetouan - The White Dove of the Rif | MoroccoGuide',
    description:
      'Discover Tetouan\'s UNESCO medina, Andalusian heritage, and stunning Spanish-Moorish architecture. A cultural gem where Morocco meets the Mediterranean.',
    url: 'https://moroccoguide.com/cities/tetouan',
    type: 'website',
    images: [
      {
        url: '/images/hero-morocco.webp',
        width: 2800,
        height: 1600,
        alt: 'Tetouan white medina with Rif Mountains, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/cities/tetouan',
  },
};

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function TetouanPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Tetouan',
    description:
      'A UNESCO World Heritage city known as "The White Dove" for its whitewashed Andalusian-influenced medina, Spanish-Moorish architecture, and proximity to Mediterranean beaches.',
    url: 'https://moroccoguide.com/cities/tetouan',
    touristType: ['Culture Enthusiasts', 'History Buffs', 'Art Lovers', 'Beach Goers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.5785,
      longitude: -5.3684,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Tetouan Medina (UNESCO)' },
      { '@type': 'TouristAttraction', name: 'Royal Palace' },
      { '@type': 'TouristAttraction', name: 'School of Arts and Crafts' },
      { '@type': 'TouristAttraction', name: 'Sidi el Mandri Mosque' },
      { '@type': 'TouristAttraction', name: 'Martil Beach' },
    ],
  };

  const attractions = [
    {
      name: 'Tetouan Medina (UNESCO)',
      description:
        'One of the smallest but most authentic medinas in Morocco, inscribed as a UNESCO World Heritage Site. Its whitewashed walls, Andalusian courtyards, and narrow alleyways tell the story of the Moors who fled Spain and rebuilt their homeland here.',
      image: '/images/hero-morocco.webp',
      type: 'UNESCO Heritage',
      rating: 4.8,
    },
    {
      name: 'Royal Palace (Mechouar)',
      description:
        'An imposing 17th-century palace complex with grand gates, beautiful gardens, and intricate Islamic geometric decoration. While the interior is closed to visitors, the ornate exterior and surrounding square are magnificent to behold.',
      image: '/images/hero-morocco.webp',
      type: 'Palace',
      rating: 4.6,
    },
    {
      name: 'School of Arts and Crafts',
      description:
        'Founded in 1919, this living museum preserves traditional Moroccan artisan skills: zellige tilework, leather tooling, woodcarving, and embroidery. Watch master craftsmen teach the next generation and admire extraordinary finished works.',
      image: '/images/hero-morocco.webp',
      type: 'Arts & Culture',
      rating: 4.7,
    },
    {
      name: 'Sidi el Mandri Mosque',
      description:
        'The oldest and most beautiful mosque in Tetouan, dating from the 15th century when Andalusian refugees founded the city. Its elegant minaret combines Moorish and Moroccan architectural styles in perfect harmony.',
      image: '/images/hero-morocco.webp',
      type: 'Religious',
      rating: 4.5,
    },
    {
      name: 'Martil Beach',
      description:
        'Just 10 minutes from the medina, this beloved Mediterranean beach stretches along a sweeping bay with calm turquoise water. In summer, it comes alive with families, seafood restaurants, and a festive promenade atmosphere.',
      image: '/images/hero-morocco.webp',
      type: 'Beach',
      rating: 4.5,
    },
  ];

  const thingsToDo = [
    { title: 'Wander the UNESCO Medina', description: 'Get lost in whitewashed alleyways where every turn reveals Andalusian courtyards and hidden fountains.', icon: Compass },
    { title: 'Visit the Artisan School', description: 'Watch master craftsmen create zellige tiles, tooled leather, and carved wood using centuries-old techniques.', icon: Palette },
    { title: 'Explore Place Hassan II', description: 'Soak in the grand Spanish colonial architecture of the main square linking the old medina to the new town.', icon: Building2 },
    { title: 'Day Trip to Martil Beach', description: 'Swim in the Mediterranean, feast on grilled sardines, and stroll the seaside promenade just 10 minutes away.', icon: Waves },
    { title: 'Browse the Archaeological Museum', description: 'Explore Roman mosaics, Phoenician artifacts, and Islamic art spanning thousands of years of northern Moroccan history.', icon: BookOpen },
    { title: 'Shop the Artisan Souks', description: 'Discover handmade leather goods, Riffian textiles, and silverwork in souks that feel untouched by mass tourism.', icon: ShoppingBag },
    { title: 'Taste Tetouani Cuisine', description: 'Try pastilla, bssara, and unique Andalusian-Moroccan pastries that you will not find anywhere else in the country.', icon: Coffee },
    { title: 'Walk to the Rif Viewpoints', description: 'Climb to the hills behind the medina for sweeping panoramas of whitewashed rooftops against green Rif Mountains.', icon: Eye },
  ];

  const accommodations = [
    { name: 'Blanco Riad', type: 'Boutique Riad', price: '$$', description: 'A beautifully restored riad in the heart of the medina with rooftop terrace views over the white city.' },
    { name: 'Hotel Al Mandari', type: 'Heritage Hotel', price: '$$', description: 'Elegant Andalusian-style hotel overlooking the medina with spacious rooms and traditional decor.' },
    { name: 'Riad Dalia Tetouan', type: 'Riad', price: '$', description: 'Charming family-run riad with authentic Moroccan hospitality, central location, and homemade breakfast.' },
    { name: 'Marina Smir Resort', type: 'Beach Resort', price: '$$$', description: 'Full-service Mediterranean resort with pools, beach access, and golf, 30 minutes from the medina.' },
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
              'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tetouan</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Tetouan
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            The White Dove of the Rif
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Where Andalusian Spain and Moroccan Morocco merge into something entirely unique. A UNESCO
            medina gleaming white against the Rif Mountains, artisan traditions kept alive for five
            centuries, and Mediterranean beaches just minutes away.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Palette className="w-3.5 h-3.5 mr-1.5" /> Andalusian Arts</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Waves className="w-3.5 h-3.5 mr-1.5" /> Mediterranean</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Building2 className="w-3.5 h-3.5 mr-1.5" /> Spanish-Moorish</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Where Spain and Morocco Become One
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              When the Moors were expelled from Spain in the 15th century, many settled in Tetouan and
              rebuilt the city in the image of their lost Andalusian homeland. The result is a place unlike
              anywhere else in Morocco: whitewashed walls, wrought-iron balconies, hidden courtyard gardens,
              and a medina that feels frozen in a more graceful time.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Tetouan remains gloriously untouristy. Its medina is a living, breathing neighborhood rather
              than a museum. Artisan workshops still produce the finest zellige tilework in the country.
              And when the medina walls start to feel close, the Mediterranean coast and its golden
              beaches are just a short ride away.
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
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">By Air</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Tangier Ibn Battouta Airport is the nearest major airport, about 60 km away. From
                there, shared taxis or rental cars reach Tetouan in under an hour.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Bus className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">By Bus</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                CTM and Supratours run comfortable buses from Tangier (1h), Chefchaouen (2h), and
                Casablanca (5h). The bus station is a short taxi ride from the medina.
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
                Spring (April-June) and autumn (September-October) offer perfect weather. Summer is
                warm and beach-friendly. Winters are mild with occasional rain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Experience the White Dove
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Tetouan is one of Morocco&apos;s best-kept secrets. A UNESCO medina, Andalusian soul, and
            Mediterranean coast all in one beautifully authentic destination.
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
