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
  Fish,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best 6 Restaurants in Agadir | Beachfront Dining & Local Gems',
  description:
    'Discover the best restaurants in Agadir, Morocco. From beachfront seafood to elegant garden dining, explore the top places to eat in Morocco\'s sun-soaked Atlantic resort city.',
  openGraph: {
    title: 'Best 6 Restaurants in Agadir',
    description:
      'The ultimate guide to dining in Agadir, from fresh ocean catches to international cuisine.',
    url: 'https://cityguide.ma/cities/agadir/restaurants',
  },
};

const restaurants = [
  {
    name: 'Pure Passion',
    slug: 'pure-passion',
    description:
      'One of Agadir\'s most celebrated fine dining restaurants, Pure Passion is located in a sleek modern space near the marina. The menu blends French culinary techniques with the finest Moroccan ingredients, featuring dishes like saffron-poached lobster, argan oil-drizzled sea bass, and lamb confit with ras el hanout. The presentation is artful, and the wine list includes an excellent selection of Moroccan wines from the Meknes and Essaouira regions. Reservations strongly recommended.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
    rating: 4.6,
    priceRange: '250-500 MAD',
    hours: '7:00 PM - 11:00 PM (Closed Sundays)',
    cuisine: 'Fine Dining French-Moroccan',
    icon: Wine,
  },
  {
    name: 'Le Jardin d\'Eau',
    slug: 'le-jardin-deau',
    description:
      'Set in a lush tropical garden with koi ponds, fountains, and candlelit pathways, Le Jardin d\'Eau offers one of Agadir\'s most romantic dining settings. The menu features Moroccan and Mediterranean cuisine with an emphasis on fresh seafood and grilled meats. The mixed seafood grill for two and the lamb tagine with artichokes are signature dishes. Live Gnaoua music on weekend evenings adds to the enchanting atmosphere. Perfect for special occasions.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    rating: 4.4,
    priceRange: '150-350 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM daily',
    cuisine: 'Moroccan-Mediterranean',
    icon: Utensils,
  },
  {
    name: 'Patisserie Tafarnout',
    slug: 'patisserie-tafarnout',
    description:
      'A beloved local institution famous for producing some of the best Moroccan pastries in the Souss region. The display cases overflow with cornes de gazelle (almond-filled crescent pastries), chebakia (sesame cookies), msemen (layered flatbread), and briouats (filled pastry triangles). Also popular for hearty Moroccan breakfasts with fresh-baked bread, amlou (argan oil and almond butter), local honey, and freshly squeezed orange juice. Cash only.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
    rating: 4.5,
    priceRange: '20-60 MAD',
    hours: '6:30 AM - 9:00 PM daily',
    cuisine: 'Moroccan Bakery & Cafe',
    icon: Coffee,
  },
  {
    name: 'English Pub',
    slug: 'english-pub',
    description:
      'Despite its name, this popular restaurant on the beachfront promenade serves excellent Moroccan and international food in a casual, friendly atmosphere. Known for generous portions and reliable quality, the menu ranges from classic tagines and couscous to burgers, steaks, and fresh fish. The terrace overlooks the beach and is perfect for a sunset meal. A long-standing favorite among resident expats and returning tourists, it offers one of the best value-for-money dining experiences on the strip.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800',
    rating: 4.2,
    priceRange: '80-180 MAD',
    hours: '10:00 AM - 11:00 PM daily',
    cuisine: 'International & Moroccan',
    icon: Utensils,
  },
  {
    name: 'Mezzo Mezzo',
    slug: 'mezzo-mezzo',
    description:
      'A vibrant Italian restaurant in the marina district that has quickly become one of Agadir\'s most popular dining spots. The open kitchen lets you watch chefs toss fresh pasta and pull wood-fired pizzas from a traditional oven imported from Naples. The seafood risotto with local prawns and the truffle pizza are standouts. The contemporary interior with maritime-themed decor and the terrace overlooking the yacht harbor create an upbeat Mediterranean atmosphere.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800',
    rating: 4.3,
    priceRange: '100-250 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 11:00 PM daily',
    cuisine: 'Italian',
    icon: Utensils,
  },
  {
    name: 'Little Norway',
    slug: 'little-norway',
    description:
      'A unique Scandinavian-Moroccan restaurant reflecting Agadir\'s surprising connection with Norway, which helped rebuild the city after the 1960 earthquake. The menu features Nordic-inspired seafood dishes with Moroccan twists, such as gravlax with chermoula, smoked fish tagine, and Norwegian salmon with argan oil dressing. The minimalist Scandinavian decor incorporates Moroccan design elements, creating a distinctive fusion. A piece of Agadir\'s post-earthquake history on a plate.',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=800',
    rating: 4.1,
    priceRange: '120-280 MAD',
    hours: '12:00 PM - 10:00 PM (Closed Tuesdays)',
    cuisine: 'Scandinavian-Moroccan',
    icon: Fish,
  },
];

export default function AgadirRestaurantsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Restaurants in Agadir',
    description: 'The top restaurants and dining experiences in Agadir, Morocco.',
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
              'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2800)',
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
            <Link href="/cities/agadir" className="hover:text-white transition-colors">Agadir</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Restaurants</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Where to Eat in Agadir
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Fresh Atlantic seafood, garden dining under the stars, and flavors that blend Moroccan traditions with international influences along the sun-kissed coast.
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
            Explore More of Agadir
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the beaches, nature parks, and cultural sites that make Agadir Morocco&apos;s favorite beach destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/agadir/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Agadir Attractions
            </Link>
            <Link
              href="/cities/agadir"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Agadir Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
