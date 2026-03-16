import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Bed,
  Star,
  MapPin,
  Wifi,
  ArrowRight,
  Check,
} from 'lucide-react';
import { generateStructuredData } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Best 12 Hotels & Riads in Marrakech | Where to Stay | CityGuide',
  description:
    'Find the 12 best hotels, riads, and accommodations in Marrakech, Morocco. From luxury palaces like La Mamounia and Royal Mansour to charming boutique riads and budget hostels.',
  openGraph: {
    title: 'Best 12 Hotels & Riads in Marrakech | CityGuide',
    description:
      'Discover Marrakech\'s finest accommodations from luxury palace hotels to traditional riads and budget-friendly hostels.',
    url: 'https://citytoursmorocco.com/cities/marrakech/hotels',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/marrakech/hotels',
  },
};

const hotels = [
  {
    name: 'La Mamounia',
    type: 'Luxury Palace Hotel',
    priceRange: '$$$$',
    rating: 4.9,
    image: '/images/card-riad.webp',
    description:
      'An iconic palace hotel set in centuries-old gardens, La Mamounia has hosted royalty and celebrities since 1923. Churchill called it "the most lovely spot in the whole world." Expect Moorish opulence, world-class dining, and impeccable service.',
    amenities: ['Spa & Hammam', 'Pool', 'Fine Dining', 'Gardens', 'Wifi', 'Concierge'],
  },
  {
    name: 'Royal Mansour',
    type: 'Luxury Palace Hotel',
    priceRange: '$$$$',
    rating: 4.9,
    image: '/images/card-riad.webp',
    description:
      'Commissioned by King Mohammed VI, this extraordinary property features private riads rather than rooms, each a three-story palace with its own plunge pool and rooftop terrace. Underground tunnels allow staff to appear and vanish invisibly.',
    amenities: ['Private Riads', 'Spa', 'Pool', 'Michelin Dining', 'Butler Service', 'Wifi'],
  },
  {
    name: 'Riad Yasmine',
    type: 'Boutique Riad',
    priceRange: '$$',
    rating: 4.7,
    image: '/images/card-riad.webp',
    description:
      'An Instagram-famous riad in the heart of the medina with a stunning green-tiled plunge pool, lush courtyard garden, and beautifully designed rooms blending Moroccan craft with boho-chic style. The rooftop offers panoramic medina views.',
    amenities: ['Plunge Pool', 'Rooftop Terrace', 'Breakfast Included', 'Wifi', 'Air Conditioning'],
  },
  {
    name: 'El Fenn',
    type: 'Boutique Hotel',
    priceRange: '$$$',
    rating: 4.7,
    image: '/images/card-riad.webp',
    description:
      'Co-founded by Vanessa Branson, El Fenn is a stylish medina retreat combining contemporary art with traditional Moroccan architecture. Three pools, an excellent restaurant, a rooftop bar, and a curated art collection make it a destination in itself.',
    amenities: ['3 Pools', 'Restaurant & Bar', 'Art Gallery', 'Spa', 'Wifi', 'Library'],
  },
  {
    name: 'Riad Kniza',
    type: 'Heritage Riad',
    priceRange: '$$$',
    rating: 4.6,
    image: '/images/card-riad.webp',
    description:
      'A lovingly restored 18th-century riad filled with antiques, hand-painted ceilings, and museum-quality Moroccan artifacts. Owner Mohammed Bouskri is a renowned collector whose personal touches make every stay feel like visiting a private palace.',
    amenities: ['Antique Collection', 'Hammam', 'Courtyard Pool', 'Restaurant', 'Wifi', 'Airport Transfer'],
  },
  {
    name: 'Les Jardins de la Koutoubia',
    type: 'Luxury Hotel',
    priceRange: '$$$',
    rating: 4.5,
    image: '/images/card-riad.webp',
    description:
      'A refined hotel just steps from the Koutoubia Mosque and Jemaa el-Fnaa, set in lush gardens with a large outdoor pool. The rooms blend Moroccan decor with modern comfort, and the location is unbeatable for exploring the medina.',
    amenities: ['Large Pool', 'Spa', 'Restaurant', 'Garden', 'Wifi', 'Fitness Center'],
  },
  {
    name: 'Riad BE',
    type: 'Design Riad',
    priceRange: '$$',
    rating: 4.6,
    image: '/images/card-riad.webp',
    description:
      'A minimalist design riad that strips back ornate Moroccan decor in favor of clean lines, natural materials, and curated simplicity. The result is a peaceful, modern retreat in the heart of the medina with an excellent breakfast.',
    amenities: ['Plunge Pool', 'Rooftop Terrace', 'Breakfast Included', 'Wifi', 'Air Conditioning'],
  },
  {
    name: 'Dar Anika',
    type: 'Boutique Riad',
    priceRange: '$$',
    rating: 4.5,
    image: '/images/card-riad.webp',
    description:
      'A charming five-suite riad run by a British-Moroccan couple, offering warm hospitality and insider tips. The rooftop terrace with Koutoubia views, home-cooked Moroccan dinners, and thoughtfully decorated rooms create a home-away-from-home feel.',
    amenities: ['Rooftop Terrace', 'Home Cooking', 'Wifi', 'Air Conditioning', 'Airport Transfer'],
  },
  {
    name: 'Equity Point Hostel',
    type: 'Hostel',
    priceRange: '$',
    rating: 4.2,
    image: '/images/card-riad.webp',
    description:
      'One of Marrakech\'s best-rated hostels, housed in a converted riad with a courtyard pool, rooftop terrace, and social common areas. Dorm beds and private rooms are available, making it a great budget option with a fantastic medina location.',
    amenities: ['Pool', 'Rooftop Terrace', 'Shared Kitchen', 'Wifi', 'Lockers', 'Tours Desk'],
  },
  {
    name: 'Riad Joya',
    type: 'Luxury Riad',
    priceRange: '$$$',
    rating: 4.8,
    image: '/images/card-riad.webp',
    description:
      'A seven-room luxury riad that blends traditional Moroccan craftsmanship with sophisticated European design. The Italian owners have created an intimate retreat with a beautiful courtyard, hammam, and exceptional personalized service.',
    amenities: ['Hammam', 'Courtyard', 'Breakfast Included', 'Wifi', 'Concierge', 'Airport Transfer'],
  },
  {
    name: 'La Sultana',
    type: 'Luxury Riad Hotel',
    priceRange: '$$$$',
    rating: 4.8,
    image: '/images/card-riad.webp',
    description:
      'Five interconnected riads creating a luxurious 28-room hotel near the Saadian Tombs. Each room is uniquely decorated with antiques and artifacts. The rooftop infinity pool offers spectacular views, and the 2,500-square-meter spa is among the city\'s best.',
    amenities: ['Infinity Pool', 'Luxury Spa', 'Restaurant', 'Rooftop Bar', 'Wifi', 'Helipad'],
  },
  {
    name: 'Four Seasons Resort',
    type: 'Luxury Resort',
    priceRange: '$$$$',
    rating: 4.8,
    image: '/images/card-riad.webp',
    description:
      'A sprawling resort in the new town with pavilion-style rooms set among 16 acres of gardens with Atlas Mountain views. Three restaurants, a world-class spa, and multiple pools make it ideal for families and those seeking a full resort experience.',
    amenities: ['Multiple Pools', 'Spa', '3 Restaurants', 'Kids Club', 'Tennis', 'Wifi'],
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

export default function MarrakechHotelsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Hotels & Riads in Marrakech',
    description: 'The 12 best hotels, riads, and accommodations in Marrakech, Morocco.',
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
              'url(/images/hero-riad-interior.webp)',
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
            <Link href="/cities/marrakech" className="hover:text-white transition-colors">
              Marrakech
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Hotels</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Bed className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Stay in Marrakech
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From legendary palace hotels and intimate riads to design-led boutiques
            and budget-friendly hostels, find your perfect Marrakech base.
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
                {hotels.length} places to stay in Marrakech
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Bed className="w-4 h-4" />
              <span>Sorted by rating</span>
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
            Explore More of Marrakech
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the best attractions and restaurants to make the most of your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/marrakech/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/marrakech/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/marrakech"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
