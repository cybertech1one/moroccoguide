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
  title: 'Best 8 Restaurants in Chefchaouen | Where to Eat | CityGuide',
  description:
    'Discover the 8 best restaurants in Chefchaouen, Morocco. From rooftop terraces overlooking the blue medina to cozy cafes serving traditional Rif Mountain cuisine.',
  openGraph: {
    title: 'Best 8 Restaurants in Chefchaouen | CityGuide',
    description:
      'Explore Chefchaouen\'s top dining spots including Casa Aladdin, Bab Ssour, Cafe Clock, and more.',
    url: 'https://citytoursmorocco.com/cities/chefchaouen/restaurants',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/chefchaouen/restaurants',
  },
};

const restaurants = [
  {
    name: 'Casa Aladdin',
    cuisine: 'Moroccan-International',
    priceRange: '$$',
    address: 'Place Outa el Hammam, Medina',
    rating: 4.5,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'A multi-level restaurant and guesthouse right on the main square with one of the best rooftop terraces in town. The Moroccan and international menu is solid, but the real draw is the panoramic view over the blue medina and surrounding mountains at sunset.',
  },
  {
    name: 'Bab Ssour',
    cuisine: 'Traditional Moroccan',
    priceRange: '$$',
    address: 'Near Bab Ssour gate, Medina',
    rating: 4.6,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'A charming restaurant near one of the medina gates, known for its excellent tagines and warm atmosphere. The cozy interior features traditional Moroccan decor, and the menu focuses on hearty mountain dishes made with locally sourced ingredients.',
  },
  {
    name: 'Mandala',
    cuisine: 'Moroccan-Asian Fusion',
    priceRange: '$$',
    address: 'Rue Targhi, Medina',
    rating: 4.4,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'An eclectic cafe-restaurant with a bohemian atmosphere, serving Moroccan dishes alongside Asian-inspired options like noodles and stir-fries. The relaxed vibe, colorful decor, and peaceful courtyard make it a favorite hangout for travelers.',
  },
  {
    name: 'Sofia',
    cuisine: 'Moroccan',
    priceRange: '$',
    address: 'Rue Moulay Ali Ben Rachid, Medina',
    rating: 4.3,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'A small, family-run restaurant beloved by budget travelers for its generous portions and authentic home-style cooking. The daily tagine specials are the star, and the warm hospitality of the owners makes every meal feel like dining with a Moroccan family.',
  },
  {
    name: 'Aladdin',
    cuisine: 'Moroccan-Mediterranean',
    priceRange: '$$',
    address: 'Place Outa el Hammam, Medina',
    rating: 4.4,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'Another popular square-front restaurant with a beautiful terrace overlooking the kasbah. The menu offers a good mix of Moroccan classics and Mediterranean dishes, and the fresh orange juice and mint tea are the perfect accompaniment to afternoon people-watching.',
  },
  {
    name: 'Cafe Clock Chefchaouen',
    cuisine: 'Moroccan Fusion',
    priceRange: '$$',
    address: 'Rue Ras El Maa, Medina',
    rating: 4.5,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'The Chefchaouen branch of the famous Fes cultural cafe, perched near the Ras El Maa spring with a lovely terrace. Known for its signature camel burger, creative fusion menu, and regular cultural events including storytelling, live music, and Arabic calligraphy workshops.',
  },
  {
    name: 'Lala Mesouda',
    cuisine: 'Traditional Riffian',
    priceRange: '$',
    address: 'Rue Ahmed el Ouahab, Medina',
    rating: 4.5,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'A hidden gem serving authentic Riffian cuisine from the northern Moroccan mountains. The menu features dishes rarely found in tourist restaurants, including rfissa, berkoukes, and traditional bread baked in a wood-fired oven. Intimate, genuine, and delicious.',
  },
  {
    name: 'Restaurant Tissemlal',
    cuisine: 'Moroccan',
    priceRange: '$',
    address: 'Rue Hassan II, Medina',
    rating: 4.3,
    image: '/images/photo-mint-tea-pouring.webp',
    description:
      'A reliable local restaurant serving well-prepared Moroccan standards at fair prices. The rooftop terrace has partial views over the medina rooftops, and the couscous Friday lunch special draws a loyal crowd of both locals and returning visitors.',
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

export default function ChefchaouenRestaurantsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Restaurants in Chefchaouen',
    description: 'The 8 best restaurants and dining experiences in Chefchaouen, Morocco.',
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
              'url(/images/photo-mint-tea-pouring.webp)',
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
            <Link href="/cities/chefchaouen" className="hover:text-white transition-colors">
              Chefchaouen
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Restaurants</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Eat in Chefchaouen
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From traditional Rif Mountain cuisine to bohemian fusion cafes, discover
            the best 8 restaurants in the Blue Pearl of Morocco.
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
                {restaurants.length} dining spots in Chefchaouen
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
            Explore More of Chefchaouen
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the best attractions and sights in the Blue Pearl.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/chefchaouen/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/chefchaouen"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Chefchaouen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
