import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Bed,
  Star,
  MapPin,
  ArrowRight,
  Check,
} from 'lucide-react';
import { generateStructuredData } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Best 8 Hotels in Casablanca | Where to Stay | CityGuide',
  description:
    'Find the 8 best hotels and accommodations in Casablanca, Morocco. From international luxury chains to Art Deco boutique hotels in Morocco\'s bustling economic capital.',
  openGraph: {
    title: 'Best 8 Hotels in Casablanca | CityGuide',
    description:
      'Discover Casablanca\'s finest accommodations from Five-star luxury to stylish boutique hotels.',
    url: 'https://citytoursmorocco.com/cities/casablanca/hotels',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/casablanca/hotels',
  },
};

const hotels = [
  {
    name: 'Four Seasons Hotel Casablanca',
    type: 'Luxury Hotel',
    priceRange: '$$$$',
    rating: 4.8,
    image: '/images/card-riad.webp',
    description:
      'A stunning oceanfront luxury hotel with direct views of the Hassan II Mosque and the Atlantic. The resort-like property features lush gardens, multiple pools, a world-class spa, and impeccable Four Seasons service in one of the city\'s most coveted locations.',
    amenities: ['Ocean View', 'Multiple Pools', 'Spa', '3 Restaurants', 'Fitness', 'Wifi'],
  },
  {
    name: 'Sofitel Casablanca Tour Blanche',
    type: 'Luxury Hotel',
    priceRange: '$$$$',
    rating: 4.6,
    image: '/images/card-riad.webp',
    description:
      'An elegant hotel in the heart of the city center, blending Moroccan design elements with French luxury. The rooftop bar offers panoramic city views, the restaurant serves refined Moroccan-French cuisine, and the spa provides a sophisticated urban retreat.',
    amenities: ['Rooftop Bar', 'Spa', 'Restaurant', 'Pool', 'Wifi', 'Business Center'],
  },
  {
    name: 'Hyatt Regency Casablanca',
    type: 'Business Hotel',
    priceRange: '$$$',
    rating: 4.5,
    image: '/images/card-riad.webp',
    description:
      'Located on Place des Nations Unies, this centrally located hotel is ideal for both business and leisure travelers. Renovated rooms, an excellent fitness center, multiple dining options, and proximity to the Old Medina and Casa Port station make it a versatile choice.',
    amenities: ['Central Location', 'Fitness Center', 'Restaurant', 'Bar', 'Wifi', 'Meeting Rooms'],
  },
  {
    name: 'Hotel Le Doge',
    type: 'Boutique Hotel',
    priceRange: '$$$',
    rating: 4.7,
    image: '/images/card-riad.webp',
    description:
      'A Relais & Chateaux boutique hotel housed in a restored 1930s Art Deco mansion, offering 16 individually designed rooms that celebrate Casablanca\'s golden age. The intimate restaurant, cocktail bar, and hammam spa make this the city\'s most characterful luxury option.',
    amenities: ['Art Deco Heritage', 'Restaurant', 'Hammam', 'Bar', 'Wifi', 'Concierge'],
  },
  {
    name: 'Kenzi Tower Hotel',
    type: 'Luxury Hotel',
    priceRange: '$$$',
    rating: 4.4,
    image: '/images/card-riad.webp',
    description:
      'The tallest hotel in North Africa at 28 stories, featuring dramatic city views from every room. The rooftop Sky 28 restaurant is Casablanca\'s highest dining venue, and the modern rooms offer a sleek, business-friendly aesthetic with all the expected amenities.',
    amenities: ['Sky Restaurant', 'Pool', 'Spa', 'Business Center', 'Wifi', 'Fitness'],
  },
  {
    name: 'Movenpick Hotel Casablanca',
    type: 'Upscale Hotel',
    priceRange: '$$',
    rating: 4.3,
    image: '/images/card-riad.webp',
    description:
      'A well-regarded international hotel near the Corniche and Morocco Mall, offering comfortable rooms, Swiss-style service, and excellent dining. The outdoor pool area is a welcome retreat, and the location provides easy access to both business and leisure destinations.',
    amenities: ['Pool', 'Restaurant', 'Fitness Center', 'Wifi', 'Parking', 'Kids Club'],
  },
  {
    name: 'Novotel Casablanca City Center',
    type: 'Mid-Range Hotel',
    priceRange: '$$',
    rating: 4.1,
    image: '/images/card-riad.webp',
    description:
      'A reliable and centrally located option in the Maarif district, close to shopping and restaurants. Modern rooms, a rooftop pool with city views, and consistent Novotel quality make this a solid choice for travelers seeking comfort without the luxury price tag.',
    amenities: ['Rooftop Pool', 'Restaurant', 'Bar', 'Wifi', 'Fitness', 'Parking'],
  },
  {
    name: 'Barcelo Anfa Casablanca',
    type: 'Modern Hotel',
    priceRange: '$$',
    rating: 4.2,
    image: '/images/card-riad.webp',
    description:
      'A contemporary hotel in the upscale Anfa district with stylish rooms, a wellness center, and multiple dining options. The modern design, outdoor pool, and proximity to the Corniche make it popular with both business travelers and weekend visitors.',
    amenities: ['Pool', 'Wellness Center', 'Restaurant', 'Bar', 'Wifi', 'Meeting Rooms'],
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

export default function CasablancaHotelsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Hotels in Casablanca',
    description: 'The 8 best hotels and accommodations in Casablanca, Morocco.',
    numberOfItems: hotels.length,
    itemListElement: hotels.map((hotel, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Hotel',
        name: hotel.name,
        description: hotel.description,
        priceRange: hotel.priceRange,
        image: hotel.image,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: hotel.rating,
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
              'url(/images/card-riad.webp)',
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
            <Link href="/cities/casablanca" className="hover:text-white transition-colors">
              Casablanca
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Hotels</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Bed className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Stay in Casablanca
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From international luxury brands and Art Deco boutiques to well-located
            business hotels, find your ideal Casablanca accommodation.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Hotels Grid */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                All Accommodations
              </h2>
              <p className="text-[var(--text-muted)] mt-1">
                {hotels.length} places to stay in Casablanca
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <div
                key={hotel.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-secondary)]">
                      {hotel.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-white text-xs font-semibold">{hotel.rating}</span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[var(--color-primary)]/90 text-white">
                      {hotel.priceRange}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {hotel.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 line-clamp-3">
                    {hotel.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {hotel.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      >
                        <Check className="w-3 h-3" />
                        {amenity}
                      </span>
                    ))}
                    {hotel.amenities.length > 4 && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-[var(--surface-muted)] text-[var(--text-muted)]">
                        +{hotel.amenities.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 pt-3 border-t border-[var(--border-light)]">
                    {renderStars(hotel.rating)}
                    <span className="ml-1 text-xs text-[var(--text-muted)]">
                      {hotel.rating.toFixed(1)}
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
            Explore More of Casablanca
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the best attractions and restaurants to make the most of your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/casablanca/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/casablanca/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/casablanca"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Casablanca
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
