import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Utensils,
  Star,
  MapPin,
  DollarSign,
  ArrowRight,
} from 'lucide-react';
import { generateStructuredData } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Best 8 Restaurants in Essaouira | Where to Eat | CityGuide',
  description:
    'Discover the 8 best restaurants in Essaouira, Morocco. From fresh Atlantic seafood at the port to rooftop dining overlooking the medina and creative international cuisine.',
  openGraph: {
    title: 'Best 8 Restaurants in Essaouira | CityGuide',
    description:
      'Explore Essaouira\'s top dining spots including Ocean Vagabond, Taros, La Table by Madada, and more.',
    url: 'https://citytoursmorocco.com/cities/essaouira/restaurants',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/essaouira/restaurants',
  },
};

const restaurants = [
  {
    name: 'Ocean Vagabond',
    cuisine: 'Seafood & International',
    priceRange: '$$',
    address: 'Boulevard Mohammed V, Beach',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    description:
      'A beachfront restaurant and lounge with stunning ocean views, popular with surfers and creative types. Fresh seafood, international dishes, and excellent cocktails are served on a sprawling terrace steps from the sand. The laid-back vibe perfectly captures Essaouira\'s spirit.',
  },
  {
    name: 'Taros',
    cuisine: 'Moroccan-International',
    priceRange: '$$',
    address: 'Place Moulay Hassan, Medina',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description:
      'A three-story restaurant, bar, and cultural space overlooking the main square and port. The rooftop terrace is legendary for sunset drinks with live music, while the menu offers a sophisticated mix of Moroccan tagines, fresh fish, and international plates.',
  },
  {
    name: 'La Table by Madada',
    cuisine: 'Fine Dining Moroccan-French',
    priceRange: '$$$',
    address: '5 Rue Youssef el Fassi, Medina',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description:
      'Essaouira\'s finest dining experience, set in the elegant Heure Bleue Palais hotel. The chef creates refined Moroccan-French tasting menus using the freshest local seafood and seasonal ingredients. The intimate candlelit setting and impeccable service make it perfect for special occasions.',
  },
  {
    name: 'Triskala',
    cuisine: 'Moroccan Vegetarian-Friendly',
    priceRange: '$$',
    address: 'Rue Touahen, Medina',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description:
      'A cozy cafe-restaurant in the medina with a strong vegetarian offering alongside traditional Moroccan dishes. The homemade soups, salads, and pastries are excellent, and the warm wooden interior with soft music creates a welcoming refuge on windy Essaouira days.',
  },
  {
    name: 'Caravane Cafe',
    cuisine: 'Moroccan Cafe & Light Meals',
    priceRange: '$',
    address: '2 Rue du Caire, Medina',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    description:
      'A bohemian cafe spread across multiple levels of a charming medina building, with a peaceful rooftop terrace. Known for its fresh juices, light meals, and excellent coffee, it is a favorite spot for writers, artists, and travelers looking for a quiet corner to read or work.',
  },
  {
    name: 'Elizir',
    cuisine: 'Italian-Moroccan',
    priceRange: '$$',
    address: 'Rue d\'Agadir, Medina',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    description:
      'A delightful Italian restaurant run by a Sardinian chef who has fallen in love with Essaouira. Handmade pasta, wood-fired pizzas, and Italian-Moroccan fusion dishes are served in a beautifully tiled medina space. The tiramisu made with Moroccan orange blossom water is legendary.',
  },
  {
    name: 'La Decouverte',
    cuisine: 'French-Moroccan',
    priceRange: '$$',
    address: '8 Bis Rue Houmane Fetouaki, Medina',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description:
      'A charming French-Moroccan restaurant in a beautifully restored medina house, run by a French couple with a passion for local ingredients. The seafood pastilla, grilled catch of the day, and house-made desserts are all exceptional, served in an intimate, candlelit setting.',
  },
  {
    name: 'Mama Afrika',
    cuisine: 'African-Moroccan Fusion',
    priceRange: '$',
    address: 'Rue Laalouj, Medina',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    description:
      'A colorful, vibrant restaurant celebrating pan-African cuisine with Moroccan roots. The menu features dishes from across the continent alongside Moroccan classics, served in a festive space decorated with African art. Live Gnawa music on weekends adds to the atmosphere.',
  },
];

function renderPriceLevel(range: string) {
  const count = range.length;
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <DollarSign
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? 'text-[var(--color-green)]' : 'text-gray-300'}`}
        />
      ))}
    </span>
  );
}

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

export default function EssaouiraRestaurantsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Restaurants in Essaouira',
    description: 'The 8 best restaurants and dining experiences in Essaouira, Morocco.',
    numberOfItems: restaurants.length,
    itemListElement: restaurants.map((restaurant, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Restaurant',
        name: restaurant.name,
        description: restaurant.description,
        servesCuisine: restaurant.cuisine,
        priceRange: restaurant.priceRange,
        image: restaurant.image,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: restaurant.rating,
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
            <span className="text-white">Restaurants</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Eat in Essaouira
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From fresh-off-the-boat seafood to bohemian cafes and rooftop terraces
            with ocean views, discover the best 8 restaurants in the Wind City.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Restaurants Grid */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                All Restaurants
              </h2>
              <p className="text-[var(--text-muted)] mt-1">
                {restaurants.length} dining spots in Essaouira
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => (
              <div
                key={restaurant.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                      {restaurant.cuisine}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-white text-xs font-semibold">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)]">
                      {restaurant.name}
                    </h3>
                    {renderPriceLevel(restaurant.priceRange)}
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 line-clamp-3">
                    {restaurant.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    <span className="line-clamp-1">{restaurant.address}</span>
                  </div>
                  <div className="flex items-center gap-1 pt-3 border-t border-[var(--border-light)]">
                    {renderStars(restaurant.rating)}
                    <span className="ml-1 text-xs text-[var(--text-muted)]">
                      {restaurant.rating.toFixed(1)}
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
            Explore More of Essaouira
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the best attractions and sights in the Wind City of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/essaouira/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
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
