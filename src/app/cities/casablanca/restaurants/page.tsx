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
  title: 'Best 10 Restaurants in Casablanca | Where to Eat | CityGuide',
  description:
    'Discover the 10 best restaurants in Casablanca, Morocco. From Rick\'s Cafe to rooftop fine dining, explore the cosmopolitan food scene of Morocco\'s largest city.',
  openGraph: {
    title: 'Best 10 Restaurants in Casablanca | CityGuide',
    description:
      'Explore Casablanca\'s top dining spots including Rick\'s Cafe, La Sqala, Le Cabestan, and more.',
    url: 'https://cityguide.ma/cities/casablanca/restaurants',
    type: 'website',
  },
  alternates: {
    canonical: 'https://cityguide.ma/cities/casablanca/restaurants',
  },
};

const restaurants = [
  {
    name: "Rick's Cafe",
    cuisine: 'Moroccan-French',
    priceRange: '$$$',
    address: '248 Boulevard Sour Jdid, Place du Jardin Public',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description:
      'Inspired by the 1942 Humphrey Bogart film, this elegant restaurant recreates the movie\'s famous nightclub with Art Deco arches, a white grand piano, and a curved mahogany bar. The Moroccan-French menu is excellent, and live jazz adds to the cinematic atmosphere.',
  },
  {
    name: 'La Sqala',
    cuisine: 'Traditional Moroccan',
    priceRange: '$$',
    address: 'Boulevard des Almohades, Old Medina',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description:
      'Set in a beautifully converted 18th-century Portuguese fortification with a flower-filled garden courtyard, La Sqala is Casablanca\'s most charming restaurant. Famous for its generous Moroccan breakfasts, tagines, and pastilla in a truly atmospheric setting.',
  },
  {
    name: 'Blend Gourmet Burger',
    cuisine: 'Gourmet Burgers',
    priceRange: '$$',
    address: 'Rue El Oraibi Jilali, Maarif',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    description:
      'A wildly popular gourmet burger joint in the trendy Maarif district, using premium local ingredients to create creative burgers, loaded fries, and indulgent milkshakes. The industrial-chic decor and buzzing atmosphere attract a young, fashionable crowd.',
  },
  {
    name: 'Basmane',
    cuisine: 'Moroccan-Asian Fusion',
    priceRange: '$$$',
    address: 'Rue Jean Jaures, Maarif',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
    description:
      'An innovative restaurant blending Moroccan spices with Asian cooking techniques, set in a stylish modern space. The sushi with Moroccan spice twists and wok-fried dishes with argan oil are unexpected delights that showcase Casa\'s cosmopolitan culinary scene.',
  },
  {
    name: 'Le Petit Rocher',
    cuisine: 'Seafood',
    priceRange: '$$',
    address: 'Boulevard de la Corniche, Ain Diab',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    description:
      'A beloved seafood restaurant perched on the rocks of the Corniche with waves crashing below. The daily catch is simply prepared and impeccably fresh, from grilled sole and sea bass to platters of shellfish served with Atlantic views.',
  },
  {
    name: 'La Bodega',
    cuisine: 'Spanish-Moroccan Tapas',
    priceRange: '$$',
    address: '129 Rue Allal Ben Abdellah',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description:
      'A lively tapas bar combining Spanish and Moroccan flavors in a warm, festive atmosphere. Sangria flows freely, the charcuterie is excellent, and weekend nights feature live flamenco music that keeps tables packed until late.',
  },
  {
    name: 'Sky 28',
    cuisine: 'International Fine Dining',
    priceRange: '$$$$',
    address: 'Kenzi Tower Hotel, Boulevard Zerktouni',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description:
      'Casablanca\'s highest restaurant, perched on the 28th floor of the Kenzi Tower with 360-degree views of the city and ocean. The sophisticated international menu and craft cocktail program make it the city\'s premier special-occasion destination.',
  },
  {
    name: 'Le Cabestan',
    cuisine: 'French-Moroccan',
    priceRange: '$$$',
    address: '90 Boulevard de la Corniche, Phare El Hank',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    description:
      'An elegant oceanfront restaurant near the El Hank lighthouse, offering refined French-Moroccan cuisine with dramatic Atlantic views. The terrace at sunset is spectacular, and the wine list features excellent Moroccan and French selections.',
  },
  {
    name: "Ricks (Port)",
    cuisine: 'Seafood & Grills',
    priceRange: '$$',
    address: 'Port de Casablanca',
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    description:
      'A popular portside restaurant (unrelated to Rick\'s Cafe) serving freshly caught seafood and grilled meats in a casual, nautical setting. The fish of the day and mixed seafood platters are generous and excellent value for money.',
  },
  {
    name: 'Restaurant du Port',
    cuisine: 'Seafood',
    priceRange: '$$',
    address: 'Port de Peche, Boulevard des Almohades',
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    description:
      'Located right in the fishing port, this no-frills restaurant serves some of the freshest and most affordable seafood in the city. Choose your fish from the day\'s catch, have it grilled or fried, and enjoy it with views of the working harbor.',
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

export default function CasablancaRestaurantsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Best Restaurants in Casablanca',
    description: 'The 10 best restaurants and dining experiences in Casablanca, Morocco.',
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
            <Link href="/cities/casablanca" className="hover:text-white transition-colors">
              Casablanca
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Restaurants</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Where to Eat in Casablanca
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            From iconic film-inspired dining to fresh Atlantic seafood and rooftop
            fine dining, discover Casablanca&apos;s diverse culinary scene.
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
                {restaurants.length} dining spots in Casablanca
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
            Complete Your Casablanca Trip
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore attractions and find the perfect place to stay in Morocco&apos;s largest city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/casablanca/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Attractions <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/casablanca/hotels"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Hotels <ArrowRight className="w-4 h-4" />
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
