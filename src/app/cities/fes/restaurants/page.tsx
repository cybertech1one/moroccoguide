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
  title: 'Best 10 Restaurants in Fes | Where to Eat | CityGuide',
  description:
    'Discover the 10 best restaurants in Fes, Morocco. From rooftop dining with medina views to traditional family-run kitchens, explore Fassi cuisine at its finest.',
  openGraph: {
    title: 'Best 10 Restaurants in Fes | CityGuide',
    description:
      'Explore Fes\'s top dining spots including Cafe Clock, The Ruined Garden, Dar Roumana, and more.',
    url: 'https://citytoursmorocco.com/cities/fes/restaurants',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/fes/restaurants',
  },
};

const restaurants = [
  {
    name: 'Cafe Clock',
    cuisine: 'Moroccan Fusion',
    priceRange: '$$',
    address: '7 Derb el Magana, Talaa Kbira, Fes el-Bali',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description:
      'A beloved cultural cafe in a restored medina house, famous for its camel burger and live Gnawa music performances. The rooftop terrace is the perfect spot for sundowners, and the weekly cultural events attract both locals and travelers.',
  },
  {
    name: 'Dar Hatim',
    cuisine: 'Traditional Fassi Home Cooking',
    priceRange: '$',
    address: '19 Derb Guebbas, Ziat, Fes el-Bali',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    description:
      'An authentic family-run restaurant where Madame Hatim prepares traditional Fassi dishes from recipes passed down through generations. The set menu changes daily and offers some of the most genuine home-cooked Moroccan food in the medina.',
  },
  {
    name: 'Palais Amani',
    cuisine: 'Fine Moroccan-Mediterranean',
    priceRange: '$$$',
    address: '12 Derb el Miter, Oued Zhoune, Fes el-Bali',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description:
      'An elegant restaurant in a beautifully restored palace, surrounded by an Andalusian garden of fruit trees, herbs, and roses. The menu features refined Moroccan and Mediterranean cuisine, with many ingredients picked fresh from the on-site garden.',
  },
  {
    name: 'The Ruined Garden',
    cuisine: 'Modern Moroccan-British',
    priceRange: '$$',
    address: '15 Derb Idrissy, Sidi Ahmed Chaoui, Fes el-Bali',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description:
      'Set in the romantic open-air ruins of a grand riad, this garden restaurant serves inventive Moroccan-British dishes amid crumbling mosaic walls and fruit trees. The atmosphere is magical, especially on warm evenings under the stars.',
  },
  {
    name: 'Dar Roumana',
    cuisine: 'Haute Moroccan',
    priceRange: '$$$',
    address: '30 Derb el Amer, Zkak Roumane, Fes el-Bali',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
    description:
      'One of Fes\'s most celebrated dining experiences, offering a sophisticated multi-course Moroccan tasting menu in an intimate riad setting. The chef creates artful presentations of traditional flavors using local seasonal ingredients.',
  },
  {
    name: 'Cafe Fez',
    cuisine: 'Moroccan-International',
    priceRange: '$$',
    address: 'Place Rcif, Fes el-Bali',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description:
      'A welcoming multi-level restaurant near Bab Rcif offering Moroccan and international dishes with a large terrace overlooking the bustling square below. A reliable choice for both quick lunches and leisurely dinners.',
  },
  {
    name: "L'Amandier Palais Faraj",
    cuisine: 'Gourmet Moroccan-French',
    priceRange: '$$$$',
    address: 'Quartier Ziat, Bab Ziat, Fes el-Bali',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description:
      'The rooftop restaurant of the Palais Faraj hotel offering arguably the best panoramic views of the Fes medina. The refined menu blends Moroccan and French gastronomy, and dining here at sunset is an unforgettable experience.',
  },
  {
    name: 'Nur',
    cuisine: 'Contemporary Moroccan',
    priceRange: '$$$',
    address: '7 Derb Zerbtana, Zkak Lbghel, Fes el-Bali',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    description:
      'A sleek, contemporary restaurant offering creative reinterpretations of Moroccan cuisine in a candlelit riad. The tasting menu is a journey through Morocco\'s culinary traditions presented with modern technique and artistic plating.',
  },
  {
    name: 'Restaurant Chez Rashid',
    cuisine: 'Traditional Moroccan Street Food',
    priceRange: '$',
    address: 'Talaa Sghira, Fes el-Bali',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    description:
      'A no-frills local favorite on one of the medina\'s main arteries, serving generous portions of tagine, couscous, and harira soup at remarkably fair prices. Come for lunch when the daily specials are freshly prepared.',
  },
  {
    name: 'Made in M',
    cuisine: 'Modern Moroccan Tapas',
    priceRange: '$$',
    address: 'Angle Rue Abdelkrim El Khattabi, Ville Nouvelle',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description:
      'A hip restaurant in the new town offering Moroccan-inspired small plates and tapas in a contemporary setting. Popular with young Fassis for its creative cocktails, lively atmosphere, and Instagram-worthy plating.',
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

export default function FesRestaurantsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Restaurants in Fes',
    description: 'The 10 best restaurants and dining experiences in Fes, Morocco.',
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
              'url(https://images.unsplash.com/photo-1544025162-d76694265947?w=2800&q=80)',
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
            <span className="text-white">Restaurants</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Eat in Fes
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From family-run medina kitchens to gourmet rooftop dining, discover Fes&apos;s
            10 best restaurants serving Morocco&apos;s most refined cuisine.
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
                {restaurants.length} dining spots in Fes
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
            Complete Your Fes Trip
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore attractions and find the perfect place to stay in Morocco&apos;s spiritual capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/fes/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/fes/hotels"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Hotels <ArrowRight className="w-4 h-4" />
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
