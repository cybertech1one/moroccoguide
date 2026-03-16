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
  Anchor,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best 8 Restaurants in Rabat | Where to Eat in Morocco\'s Capital',
  description:
    'Discover the best restaurants in Rabat, Morocco. From floating restaurants on the Bou Regreg to traditional Moroccan dining in the medina, explore the capital\'s culinary scene.',
  openGraph: {
    title: 'Best 8 Restaurants in Rabat',
    description:
      'The ultimate guide to dining in Rabat, Morocco\'s elegant capital city.',
    url: 'https://citytoursmorocco.com/cities/rabat/restaurants',
  },
};

const restaurants = [
  {
    name: 'Le Dhow',
    slug: 'le-dhow',
    description:
      'A one-of-a-kind dining experience aboard a beautifully restored traditional wooden dhow boat moored on the Bou Regreg river between Rabat and Sale. The floating restaurant serves refined Moroccan and international cuisine with spectacular views of the illuminated Kasbah of the Udayas at night. The multi-level vessel features a lounge bar on the lower deck and an open-air dining terrace above. Sunset cocktails here are an unforgettable Rabat experience.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
    rating: 4.5,
    priceRange: '200-450 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 12:00 AM daily',
    cuisine: 'Moroccan-International',
    icon: Anchor,
  },
  {
    name: 'Dar Zaki',
    slug: 'dar-zaki',
    description:
      'A beloved traditional Moroccan restaurant tucked away in a beautifully restored riad in the medina. Famous for its slow-cooked tagines and the best pastilla in Rabat, Dar Zaki offers an authentic dining experience with hand-painted zellij tiles, carved stucco walls, and the scent of orange blossoms from the courtyard fountain. The lamb tagine with caramelized pears and cinnamon is the signature dish, and the portions are generous.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    rating: 4.6,
    priceRange: '120-250 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 10:30 PM (Closed Mondays)',
    cuisine: 'Traditional Moroccan',
    icon: Utensils,
  },
  {
    name: 'Cosmopolitan',
    slug: 'cosmopolitan',
    description:
      'A stylish contemporary restaurant in the Agdal district that has become a favorite among Rabat\'s cosmopolitan crowd. The menu is a creative fusion of Mediterranean and Moroccan flavors, with dishes like harissa-spiced tuna tartare and saffron risotto with local seafood. The minimalist interior features local artwork, and the outdoor terrace is perfect for warm evenings. Their weekend brunch is considered one of the best in the city.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
    rating: 4.3,
    priceRange: '150-350 MAD',
    hours: '12:00 PM - 11:00 PM daily',
    cuisine: 'Mediterranean Fusion',
    icon: Wine,
  },
  {
    name: 'Paul',
    slug: 'paul',
    description:
      'The Rabat outpost of the renowned French bakery and brasserie chain, located in the upscale Hassan district. While it is an international brand, the Rabat location is exceptionally well-run with fresh-baked croissants, artisan breads, and a full French brasserie menu. Popular for breakfast meetings and leisurely lunches, the terrace overlooks a tree-lined boulevard. The croque monsieur and quiche lorraine are perfectly executed, and the pastry selection is outstanding.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800',
    rating: 4.1,
    priceRange: '80-200 MAD',
    hours: '7:00 AM - 10:00 PM daily',
    cuisine: 'French Bakery & Brasserie',
    icon: Coffee,
  },
  {
    name: 'La Mamma',
    slug: 'la-mamma',
    description:
      'Rabat\'s best-loved Italian restaurant, serving wood-fired pizzas and handmade pasta in a warm, family-friendly atmosphere for over two decades. The owner, originally from Naples, sources many ingredients directly from Italy while incorporating the freshest local Moroccan produce. The pizza margherita with buffalo mozzarella and the seafood linguine with Oualidia oysters are standout dishes. The bustling atmosphere and reasonable prices make it perennially popular.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800',
    rating: 4.4,
    priceRange: '90-200 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM daily',
    cuisine: 'Italian',
    icon: Utensils,
  },
  {
    name: 'Ty Potes',
    slug: 'ty-potes',
    description:
      'A charming French-Breton creperie and wine bar that has carved out a loyal following in the Agdal neighborhood. The menu features both savory galettes made with organic buckwheat flour and sweet crepes with inventive fillings. Standouts include the galette with goat cheese, honey, and walnuts, and the crepe suzette flambeed at your table. The intimate, rustic-chic interior and carefully curated French wine list create a cozy dining atmosphere.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800',
    rating: 4.3,
    priceRange: '70-160 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 10:30 PM (Closed Sundays)',
    cuisine: 'French Creperie',
    icon: Coffee,
  },
  {
    name: 'Restaurant de la Plage',
    slug: 'restaurant-de-la-plage',
    description:
      'Situated right on the beach in the Kasbah district, this seafood restaurant offers the freshest catch with an unbeatable ocean view. Fish is displayed on ice for you to choose from and then grilled, fried, or prepared in a tagine to your preference. The grilled prawns, fried calamari, and fish chermoula are local favorites. The casual atmosphere with plastic chairs and paper tablecloths keeps prices accessible despite the prime location.',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=800',
    rating: 4.2,
    priceRange: '80-180 MAD',
    hours: '11:00 AM - 9:00 PM daily',
    cuisine: 'Seafood',
    icon: Utensils,
  },
  {
    name: 'Le Pietri',
    slug: 'le-pietri',
    description:
      'An institution in Rabat\'s diplomatic quarter, Le Pietri is an elegant art-deco inspired restaurant and bar known for its sophisticated atmosphere and reliable French-Moroccan cuisine. Popular with diplomats, business executives, and well-heeled locals, the menu features classic dishes like duck magret with fig sauce and Moroccan-spiced lamb rack. The long mahogany bar is perfect for after-work drinks, and live music plays on Thursday and Friday evenings.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800',
    rating: 4.4,
    priceRange: '200-400 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 12:00 AM daily',
    cuisine: 'French-Moroccan',
    icon: Wine,
  },
];

export default function RabatRestaurantsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Restaurants in Rabat',
    description: 'The top restaurants, cafes, and dining experiences in Rabat, Morocco.',
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
              'url(https://images.unsplash.com/photo-1553522991-71439aa1ccaf?q=80&w=2800)',
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
            <Link href="/cities/rabat" className="hover:text-white transition-colors">Rabat</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Restaurants</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Where to Eat in Rabat
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco&apos;s capital offers a refined dining scene that mirrors its elegant character, from floating restaurants to historic medina eateries.
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
            Explore More of Rabat
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the UNESCO heritage sites, royal monuments, and hidden gardens of Morocco&apos;s capital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/rabat/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Rabat Attractions
            </Link>
            <Link
              href="/cities/rabat"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Rabat Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
