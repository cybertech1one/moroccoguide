import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  Star,
  Clock,
  Ticket,
  MapPin,
  Camera,
  ArrowRight,
} from 'lucide-react';
import { generateStructuredData } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Top 8 Attractions in Essaouira | Wind City of Africa | CityGuide',
  description:
    'Discover the 8 best attractions in Essaouira, Morocco. Explore the UNESCO-listed medina, Atlantic ramparts, vibrant port, and world-class beaches of this windswept coastal gem.',
  openGraph: {
    title: 'Top 8 Attractions in Essaouira | CityGuide',
    description:
      'Explore Essaouira\'s most iconic attractions including the Skala, UNESCO medina, port, and stunning Atlantic beach.',
    url: 'https://cityguide.ma/cities/essaouira/attractions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cityguide.ma/cities/essaouira/attractions',
  },
};

const attractions = [
  {
    name: 'Skala de la Ville',
    description:
      'The iconic 18th-century sea bastion stretching along the northern edge of the medina, lined with historic European cannons pointing toward the Atlantic. The fortified walkway offers dramatic views of the crashing waves and was famously used as a filming location for Game of Thrones\' Astapor.',
    entranceFee: '10 MAD',
    hours: '9:00 AM - 6:00 PM daily',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.7,
    type: 'Fortress',
  },
  {
    name: 'Medina (UNESCO World Heritage)',
    description:
      'Essaouira\'s fortified medina, inscribed as a UNESCO World Heritage Site, is uniquely orderly for a Moroccan old town with broad streets laid out in a grid pattern. The blend of Moroccan and European architecture, art galleries, woodworking shops, and colorful merchants creates a relaxed yet vibrant atmosphere.',
    entranceFee: 'Free',
    hours: 'Open 24 hours (shops close around 8 PM)',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.8,
    type: 'Medina',
  },
  {
    name: 'Essaouira Beach',
    description:
      'A vast crescent of golden sand stretching for miles south of the medina, renowned for its consistent Atlantic winds that make it a world-class destination for windsurfing and kitesurfing. The wide beach is also perfect for camel rides, horse riding, football, and spectacular sunsets.',
    entranceFee: 'Free',
    hours: 'Open 24 hours',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.6,
    type: 'Beach',
  },
  {
    name: 'Port of Essaouira',
    description:
      'A lively working fishing port where brightly painted blue boats bob in the harbor alongside squawking seagulls and fishermen mending their nets. The port\'s open-air fish grills serve the freshest seafood in town, and watching the daily catch being auctioned is a fascinating experience.',
    entranceFee: 'Free',
    hours: 'Most active 6:00 AM - 2:00 PM daily',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.5,
    type: 'Harbor',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    description:
      'The historic Jewish quarter of Essaouira reflects the town\'s once-thriving Jewish community, which at its peak comprised nearly 40% of the population. Distinctive balconied houses, Star of David carvings, and the restored Slat Lkahal synagogue tell the story of this multicultural heritage.',
    entranceFee: 'Free (Synagogue: 20 MAD)',
    hours: 'Open during daylight hours',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.2,
    type: 'Historic Quarter',
  },
  {
    name: "Galerie d'Art Frederic Damgaard",
    description:
      'A pioneering art gallery that played a crucial role in bringing Essaouira\'s self-taught artists to international attention. The gallery showcases colorful, expressive works by local painters and sculptors, many influenced by Gnawa spiritual traditions and the town\'s creative bohemian energy.',
    entranceFee: 'Free',
    hours: '9:00 AM - 1:00 PM, 3:00 PM - 7:00 PM daily',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.3,
    type: 'Gallery',
  },
  {
    name: 'Sidi Mohammed Ben Abdallah Museum',
    description:
      'Housed in a 19th-century riad, this small but well-curated museum displays regional arts and crafts including thuya wood marquetry, Berber jewelry, musical instruments, and traditional costumes. The collections offer context for understanding Essaouira\'s rich artistic and cultural heritage.',
    entranceFee: '20 MAD',
    hours: '9:00 AM - 6:00 PM (closed Tuesdays)',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.1,
    type: 'Museum',
  },
  {
    name: 'Ile de Mogador (Purpuraires Islands)',
    description:
      'A group of small islands visible from the ramparts, historically used by the Romans to produce precious Tyrian purple dye and now a protected nature reserve. The islands host Eleonora\'s falcons and other seabirds. While landing is restricted, boat tours offer close-up views of these atmospheric ruins.',
    entranceFee: 'Boat tour: 150-250 MAD',
    hours: 'Boat tours available 10:00 AM - 4:00 PM (weather permitting)',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.4,
    type: 'Nature',
  },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <Star key={`f-${i}`} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
    );
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="relative inline-block w-4 h-4">
        <Star className="absolute inset-0 w-4 h-4 text-[var(--color-accent)]" />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        </span>
      </span>
    );
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(
      <Star key={`e-${i}`} className="w-4 h-4 text-[var(--color-accent)]/30" />
    );
  }
  return stars;
}

export default function EssaouiraAttractionsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Top Attractions in Essaouira',
    description: 'The 8 best attractions and landmarks to visit in Essaouira, Morocco.',
    numberOfItems: attractions.length,
    itemListElement: attractions.map((attraction, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        image: attraction.image,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: attraction.rating,
          bestRating: 5,
        },
      },
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
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
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities/essaouira" className="hover:text-white transition-colors">
              Essaouira
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Essaouira Attractions
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore 8 must-see sights in the Wind City of Africa, from UNESCO-listed
            ramparts and a vibrant fishing port to endless Atlantic beaches.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Attractions Grid */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                All Attractions
              </h2>
              <p className="text-[var(--text-muted)] mt-1">
                {attractions.length} places to explore in Essaouira
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Camera className="w-4 h-4" />
              <span>Sorted by rating</span>
            </div>
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
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
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
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 line-clamp-3">
                    {attraction.description}
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-[var(--color-green)]" />
                      {attraction.entranceFee}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                      {attraction.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-3 pt-3 border-t border-[var(--border-light)]">
                    {renderStars(attraction.rating)}
                    <span className="ml-1 text-xs text-[var(--text-muted)]">
                      {attraction.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Essaouira Visit
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Find the best restaurants and complete your trip to Morocco&apos;s Atlantic gem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/essaouira/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/essaouira"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Essaouira
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
