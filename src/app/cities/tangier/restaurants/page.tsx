import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  Clock,
  DollarSign,
  Utensils,
  MapPin,
  Coffee,
  Wine,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best 8 Restaurants in Tangier | Where to Eat in Tangier',
  description:
    'Discover the best restaurants in Tangier, Morocco. From rooftop dining with sea views to legendary fish restaurants, explore the top places to eat in this cosmopolitan port city.',
  openGraph: {
    title: 'Best 8 Restaurants in Tangier',
    description:
      'The ultimate guide to dining in Tangier, from fine dining to authentic street-side fish.',
    url: 'https://citytoursmorocco.com/cities/tangier/restaurants',
  },
};

const restaurants = [
  {
    name: 'El Morocco Club',
    slug: 'el-morocco-club',
    description:
      'An elegant restaurant and piano bar set in a beautifully restored 1930s mansion in the heart of the medina. The menu blends Moroccan and French cuisine with dishes like lamb tagine with prunes and almonds alongside foie gras and duck confit. The rooftop terrace offers sweeping views of the Strait of Gibraltar, while the dimly lit interior evokes the glamour of Tangier\'s golden age. Live jazz on weekend evenings.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.6,
    priceRange: '250-500 MAD',
    hours: '12:00 PM - 11:00 PM daily',
    cuisine: 'Moroccan-French Fusion',
    icon: Wine,
  },
  {
    name: 'Cafe Hafa',
    slug: 'cafe-hafa',
    description:
      'Perched on a cliff overlooking the Strait of Gibraltar, this legendary terraced cafe has been serving mint tea since 1921. The Rolling Stones, Paul Bowles, and the Beatles have all sat on its simple wooden benches, gazing across the water to Spain. Cafe Hafa serves only tea and simple pastries, but the experience of watching the sunset from its cascading terraces is unforgettable. Come early for the best seats.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.5,
    priceRange: '15-40 MAD',
    hours: '8:00 AM - 10:00 PM daily',
    cuisine: 'Cafe & Tea House',
    icon: Coffee,
  },
  {
    name: 'Le Saveur du Poisson',
    slug: 'le-saveur-du-poisson',
    description:
      'A legendary no-choice fish restaurant hidden in the medina where the chef serves a multi-course feast of the freshest catch. There is no menu; you simply sit down and course after course of exquisitely prepared fish arrives, from marinated sardines to grilled whole sea bream. The intimate dining room is adorned with traditional Moroccan decor. Cash only and reservations are essential during peak season.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.7,
    priceRange: '150-200 MAD (fixed menu)',
    hours: '1:00 PM - 3:00 PM, 8:00 PM - 10:00 PM (Closed Sundays)',
    cuisine: 'Seafood',
    icon: Utensils,
  },
  {
    name: 'Populaire Saveur de Poisson',
    slug: 'populaire-saveur-de-poisson',
    description:
      'Run by the same family as Le Saveur du Poisson, this is the more casual and affordable sibling. Located deeper in the medina, it offers a similar set-menu seafood experience with slightly simpler preparations but equally fresh fish. The colorful tiled interior and warm hospitality make it a favorite among budget-conscious travelers who still want an authentic Tangier seafood feast.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.4,
    priceRange: '80-120 MAD (fixed menu)',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 10:00 PM daily',
    cuisine: 'Seafood',
    icon: Utensils,
  },
  {
    name: 'Anna e Paolo',
    slug: 'anna-e-paolo',
    description:
      'A slice of Italy in Tangier, this charming restaurant is run by an Italian couple who source fresh pasta and Mediterranean ingredients daily. The menu features handmade ravioli, wood-fired pizzas, and fresh seafood pastas. The intimate courtyard setting with bougainvillea-draped walls creates a romantic atmosphere. Their tiramisu, made with Moroccan coffee, is a perfect East-meets-West dessert.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.3,
    priceRange: '120-250 MAD',
    hours: '12:30 PM - 3:00 PM, 7:30 PM - 10:30 PM (Closed Mondays)',
    cuisine: 'Italian',
    icon: Utensils,
  },
  {
    name: 'Nord Pinus',
    slug: 'nord-pinus',
    description:
      'Located in the iconic Nord-Pinus hotel in the Kasbah, this restaurant offers refined Moroccan cuisine in a stunning setting decorated with vintage photographs and art. The rooftop terrace provides panoramic views of the port and the Mediterranean. Signature dishes include pastilla au pigeon, couscous with seven vegetables, and slow-cooked lamb shoulder. The cocktail bar is one of Tangier\'s most sophisticated.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.5,
    priceRange: '300-600 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM daily',
    cuisine: 'Upscale Moroccan',
    icon: Wine,
  },
  {
    name: 'Salon Bleu',
    slug: 'salon-bleu',
    description:
      'A rooftop restaurant with arguably the best terrace views in Tangier, overlooking the medina rooftops to the sea beyond. The decor is a dreamy palette of blues and whites inspired by the Mediterranean. The menu combines Moroccan and Mediterranean dishes with excellent fresh juices and cocktails. Popular for both lunch and sunset dining, it is a favorite spot for photographers and Instagram enthusiasts.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.2,
    priceRange: '100-250 MAD',
    hours: '10:00 AM - 11:00 PM daily',
    cuisine: 'Moroccan-Mediterranean',
    icon: Globe,
  },
  {
    name: 'La Fabrique',
    slug: 'la-fabrique',
    description:
      'A trendy bistro-style restaurant in the ville nouvelle that has become a meeting point for Tangier\'s creative community. The menu is French-inspired with a Moroccan twist, featuring excellent brunch options, gourmet burgers, and daily specials based on market-fresh ingredients. The industrial-chic interior with exposed brick and local art creates a relaxed yet stylish vibe. Great wine list featuring Moroccan and French selections.',
    image: '/images/photo-food-flatlay.webp',
    rating: 4.3,
    priceRange: '80-200 MAD',
    hours: '9:00 AM - 11:00 PM (Closed Sundays)',
    cuisine: 'French Bistro',
    icon: Coffee,
  },
];

export default function TangierRestaurantsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Restaurants in Tangier',
    description: 'The top restaurants, cafes, and dining experiences in Tangier, Morocco.',
    numberOfItems: restaurants.length,
    itemListElement: restaurants.map((restaurant, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Restaurant',
        name: restaurant.name,
        description: restaurant.description,
        image: restaurant.image,
        servesCuisine: restaurant.cuisine,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/photo-food-flatlay.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities/tangier" className="hover:text-white transition-colors">Tangier</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Restaurants</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Where to Eat in Tangier
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From legendary fish feasts to rooftop dining with views of Spain, Tangier&apos;s restaurant scene reflects its position as a crossroads of cultures.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Restaurants Grid */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <div key={restaurant.slug} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[var(--text-primary)]">
                    {restaurant.cuisine}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 text-white text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {restaurant.rating}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <restaurant.icon className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{restaurant.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {restaurant.description}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{restaurant.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{restaurant.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Explore More of Tangier
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the landmarks, beaches, and hidden gems that make Tangier one of Morocco&apos;s most exciting cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/tangier/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Tangier Attractions
            </Link>
            <Link
              href="/cities/tangier"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Tangier Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
