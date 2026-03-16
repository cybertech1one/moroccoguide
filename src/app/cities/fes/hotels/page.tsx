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
  title: 'Best 10 Hotels & Riads in Fes | Where to Stay | CityGuide',
  description:
    'Find the 10 best hotels, riads, and accommodations in Fes, Morocco. From luxury palace riads in the medina to modern hotels with panoramic views of the ancient city.',
  openGraph: {
    title: 'Best 10 Hotels & Riads in Fes | CityGuide',
    description:
      'Discover Fes\'s finest accommodations from luxury medina riads to contemporary boutique hotels.',
    url: 'https://citytoursmorocco.com/cities/fes/hotels',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/fes/hotels',
  },
};

const hotels = [
  {
    name: 'Riad Fes',
    type: 'Luxury Riad',
    priceRange: '$$$$',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
    description:
      'A sumptuous Relais & Chateaux property in the heart of the medina, blending Andalusian and Fassi design across multiple courtyards. The rooftop restaurant offers medina views, and the spa features a traditional hammam with orange blossom treatments.',
    amenities: ['Rooftop Restaurant', 'Spa & Hammam', 'Pool', 'Library', 'Wifi', 'Concierge'],
  },
  {
    name: 'Palais Amani',
    type: 'Heritage Palace',
    priceRange: '$$$',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    description:
      'A meticulously restored early 20th-century palace built around a magnificent Andalusian garden with citrus and olive trees. The 15 rooms each tell a story of Fassi craftsmanship, and the cooking school is one of the best in Morocco.',
    amenities: ['Garden', 'Cooking School', 'Spa', 'Restaurant', 'Wifi', 'Airport Transfer'],
  },
  {
    name: 'Dar Roumana',
    type: 'Boutique Riad',
    priceRange: '$$$',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description:
      'A five-room boutique guesthouse renowned for its exceptional restaurant and intimate atmosphere. The beautifully restored riad features a pomegranate tree courtyard, personalized service, and culinary experiences that draw food lovers from around the world.',
    amenities: ['Gourmet Restaurant', 'Terrace', 'Breakfast Included', 'Wifi', 'Cooking Classes'],
  },
  {
    name: 'Riad Laaroussa',
    type: 'Luxury Riad',
    priceRange: '$$$',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
    description:
      'One of the largest riads in the Fes medina, this 17th-century palace offers spacious suites arranged around a vast courtyard with a heated pool. The hammam, garden, and exceptional breakfast make it a serene retreat after exploring the labyrinthine streets.',
    amenities: ['Heated Pool', 'Hammam', 'Garden', 'Breakfast Included', 'Wifi', 'Parking'],
  },
  {
    name: 'Riad Maison Bleue',
    type: 'Heritage Riad',
    priceRange: '$$$',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    description:
      'Once the home of renowned Fassi scholar Sidi Ahmed el Alami, this elegant riad has been restored with museum-quality attention to detail. The restaurant serves some of the finest traditional Fassi cuisine in the city, and the rooftop offers medina panoramas.',
    amenities: ['Rooftop Terrace', 'Restaurant', 'Hammam', 'Wifi', 'Concierge', 'Library'],
  },
  {
    name: 'Dar Seffarine',
    type: 'Budget Riad',
    priceRange: '$',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
    description:
      'A charmingly simple and affordable riad overlooking the famous Seffarine copper-beating square. Run by a welcoming Moroccan-German couple, it offers authentic medina living without the luxury price tag, with hearty home-cooked breakfasts and genuine hospitality.',
    amenities: ['Terrace', 'Breakfast Included', 'Wifi', 'Home Cooking', 'Medina Location'],
  },
  {
    name: 'Palais Faraj',
    type: 'Luxury Palace Hotel',
    priceRange: '$$$$',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    description:
      'A grand palace hotel perched on the edge of the medina with commanding views over Fes el-Bali. The rooftop infinity pool offers what may be the best panoramic view of any hotel in Morocco, and the spa and dining are equally exceptional.',
    amenities: ['Infinity Pool', 'Spa', 'Panoramic Restaurant', 'Bar', 'Wifi', 'Valet Parking'],
  },
  {
    name: 'Riad Idrissy',
    type: 'Boutique Riad',
    priceRange: '$$',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    description:
      'A hip, design-conscious riad that brings a contemporary sensibility to traditional Fassi architecture. The rooftop is a social hub with medina views, and the well-traveled British-Moroccan owners curate a program of music nights and cultural events.',
    amenities: ['Rooftop Bar', 'Cultural Events', 'Breakfast Included', 'Wifi', 'Air Conditioning'],
  },
  {
    name: 'Riad Zamane',
    type: 'Mid-Range Riad',
    priceRange: '$$',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800&q=80',
    description:
      'A beautifully maintained riad in the Ziat quarter offering excellent value for money. The seven rooms are individually decorated with traditional touches, and the warm Moroccan family who runs it provides insider knowledge and home-cooked meals on request.',
    amenities: ['Courtyard', 'Terrace', 'Breakfast Included', 'Wifi', 'Airport Transfer'],
  },
  {
    name: 'Hotel Sahrai',
    type: 'Modern Luxury Hotel',
    priceRange: '$$$',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    description:
      'A contemporary five-star hotel on the hills above the medina, designed by Christophe Pillet with a sleek aesthetic that contrasts beautifully with the ancient city views. The infinity pool, Givenchy Spa, and modern Moroccan restaurant are standout features.',
    amenities: ['Infinity Pool', 'Givenchy Spa', 'Restaurant', 'Bar', 'Wifi', 'Fitness Center'],
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

export default function FesHotelsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Hotels & Riads in Fes',
    description: 'The 10 best hotels, riads, and accommodations in Fes, Morocco.',
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
              'url(https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=2800&q=80)',
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
            <Link href="/cities/fes" className="hover:text-white transition-colors">
              Fes
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Hotels</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Bed className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Stay in Fes
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From palatial heritage riads in the ancient medina to contemporary hilltop
            hotels, find your perfect base for exploring Morocco&apos;s cultural capital.
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
                {hotels.length} places to stay in Fes
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
            Explore More of Fes
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the best attractions and restaurants to make the most of your stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/fes/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/fes/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/fes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Fes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
