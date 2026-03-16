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
  Music,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best 6 Restaurants in Ouarzazate | Desert Gateway Dining',
  description:
    'Discover the best restaurants in Ouarzazate, Morocco. From historic eateries serving since the French Protectorate era to kasbah restaurants with Atlas Mountain views, explore desert dining.',
  openGraph: {
    title: 'Best 6 Restaurants in Ouarzazate',
    description:
      'The top restaurants and dining experiences in Ouarzazate, the gateway to the Sahara.',
    url: 'https://citytoursmorocco.com/cities/ouarzazate/restaurants',
  },
};

const restaurants = [
  {
    name: 'Chez Dimitri',
    slug: 'chez-dimitri',
    description:
      'The oldest restaurant in Ouarzazate, opened in 1928 by a Greek immigrant during the French Protectorate era. Chez Dimitri has served everyone from Foreign Legion soldiers to Hollywood film crews. The walls are covered with autographed photos of movie stars who dined here while filming in the region. The menu is an eclectic mix of Moroccan tagines, French bistro classics, and Greek dishes. The mixed grill and fish tagine are reliable choices. A genuine piece of Ouarzazate history.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800',
    rating: 4.3,
    priceRange: '80-200 MAD',
    hours: '11:00 AM - 3:00 PM, 6:30 PM - 10:00 PM daily',
    cuisine: 'Moroccan-Mediterranean',
    icon: Utensils,
  },
  {
    name: 'Restaurant Douyria',
    slug: 'restaurant-douyria',
    description:
      'Tucked inside a restored riad in the old part of Ouarzazate, Douyria offers an intimate and authentic Moroccan dining experience. The courtyard setting with a central fountain and lantern light creates a magical atmosphere at dinner. The kitchen excels at traditional dishes from the Draa-Tafilalet region, including lamb mechoui slow-roasted for eight hours, tanjia (a clay pot stew unique to southern Morocco), and vegetable couscous with preserved lemons. The almond pastilla is an excellent dessert.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800',
    rating: 4.5,
    priceRange: '100-220 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 10:00 PM (Closed Wednesdays)',
    cuisine: 'Traditional Moroccan',
    icon: Utensils,
  },
  {
    name: 'La Kasbah des Sables',
    slug: 'la-kasbah-des-sables',
    description:
      'Located within a beautifully converted kasbah, this restaurant offers refined Moroccan cuisine with stunning views of the surrounding desert landscape and palm groves from its rooftop terrace. The chef specializes in modern interpretations of traditional Saharan dishes, using local ingredients like dates, almonds, and desert herbs. The lamb tagine with dates and walnuts is exceptional, and the dessert of warm date cake with argan ice cream is unique to this region.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800',
    rating: 4.4,
    priceRange: '150-300 MAD',
    hours: '12:00 PM - 3:00 PM, 7:00 PM - 10:30 PM daily',
    cuisine: 'Upscale Moroccan',
    icon: Wine,
  },
  {
    name: 'Habous',
    slug: 'habous',
    description:
      'A popular local restaurant on the main avenue that serves generous portions of everyday Moroccan food at honest prices. The lunch menu is a revolving selection of tagines, brochettes, kefta, and salads that pack the dining room with locals and in-the-know travelers. The harira soup is some of the best in the region, thick with lentils, chickpeas, and fresh herbs. The simple grilled chicken with cumin and lemon is perfectly executed. No frills, just excellent food.',
    image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=800',
    rating: 4.1,
    priceRange: '40-100 MAD',
    hours: '11:00 AM - 10:00 PM daily',
    cuisine: 'Moroccan Home Cooking',
    icon: Coffee,
  },
  {
    name: 'Le Petit Riad',
    slug: 'le-petit-riad',
    description:
      'A charming French-Moroccan restaurant set in a small riad with a courtyard garden, offering a more intimate alternative to the larger tourist restaurants. The French owner-chef has lived in Ouarzazate for over a decade and combines classic French technique with the rich flavors of Moroccan cuisine. Highlights include duck breast with fig and ras el hanout sauce, and a delicate pastilla with pigeon and cinnamon. The three-course set menu is excellent value.',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800',
    rating: 4.3,
    priceRange: '120-250 MAD',
    hours: '12:00 PM - 2:30 PM, 7:00 PM - 9:30 PM (Closed Sundays)',
    cuisine: 'French-Moroccan',
    icon: Wine,
  },
  {
    name: 'Accord Majeur',
    slug: 'accord-majeur',
    description:
      'A lively restaurant and lounge bar that has become the social hub of Ouarzazate\'s evening scene. The menu offers a wide range of international and Moroccan dishes, from wood-fired pizzas and pasta to traditional tagines and grills. The spacious terrace is perfect for warm evenings, and the interior features live music on Thursday and Saturday nights, often with local Gnaoua or Amazigh musicians. A great spot for a relaxed dinner followed by drinks and entertainment.',
    image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?q=80&w=800',
    rating: 4.0,
    priceRange: '80-200 MAD',
    hours: '11:00 AM - 12:00 AM daily',
    cuisine: 'International & Moroccan',
    icon: Music,
  },
];

export default function OuarzazateRestaurantsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Best Restaurants in Ouarzazate',
    description: 'The top restaurants and dining experiences in Ouarzazate, Morocco.',
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
              'url(https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=2800)',
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
            <Link href="/cities/ouarzazate" className="hover:text-white transition-colors">Ouarzazate</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Restaurants</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Where to Eat in Ouarzazate
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From a historic restaurant that has served Foreign Legion soldiers and film stars since 1928 to intimate kasbah dining rooms, Ouarzazate&apos;s cuisine reflects its colorful past.
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
            Explore More of Ouarzazate
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the kasbahs, film studios, and desert landscapes that make Ouarzazate the Hollywood of Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/ouarzazate/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Ouarzazate Attractions
            </Link>
            <Link
              href="/cities/ouarzazate"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Ouarzazate Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
