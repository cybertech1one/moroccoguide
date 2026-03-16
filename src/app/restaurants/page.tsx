import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import RestaurantsClientSection from './RestaurantsClient';
import type { RestaurantItem } from './RestaurantsClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Taste Morocco - Restaurant & Food Guide | Best Dining Across Morocco',
  description:
    'Discover the best restaurants in Morocco from traditional Moroccan cuisine and street food to fine dining and rooftop cafes. Explore Marrakech, Fes, Casablanca, Essaouira, and more.',
  keywords: [
    'Morocco restaurants',
    'Moroccan food',
    'Marrakech restaurants',
    'Fes food',
    'Moroccan cuisine',
    'tagine',
    'couscous',
    'street food Morocco',
    'where to eat Morocco',
    'best restaurants Marrakech',
  ],
  openGraph: {
    title: 'Taste Morocco - Restaurant & Food Guide - CityGuide',
    description:
      'The ultimate guide to dining in Morocco. 25+ curated restaurants from street food to fine dining.',
    url: 'https://citytoursmorocco.com/restaurants',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Moroccan food spread with tagine and couscous',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/restaurants' },
};

/* ═══════════════════════════════════════════════════════════════
   RESTAURANTS DATA
   ═══════════════════════════════════════════════════════════════ */

const restaurants: RestaurantItem[] = [
  { name: 'NOMAD', slug: 'nomad', cityName: 'Marrakech', cuisineType: 'rooftop', priceRange: 3, description: 'A trendy rooftop restaurant above the spice square offering modern Moroccan cuisine with panoramic medina views. One of the most sought-after tables in the city.', specialties: ['Lamb Shoulder', 'Zaalouk', 'Moroccan Salads', 'Rooftop Cocktails'], rating: 4.6, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Le Jardin', slug: 'le-jardin', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 3, description: 'A lush garden restaurant hidden in the medina serving refined Moroccan cuisine amid tropical plants and birdsong. A tranquil oasis from the bustling souks.', specialties: ['Tagine with Prunes', 'Pastilla', 'Fresh Juices', 'Garden Salads'], rating: 4.5, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Cafe Clock', slug: 'cafe-clock-fes', cityName: 'Fes', cuisineType: 'fusion', priceRange: 2, description: 'A cultural cafe in a restored medina house famous for its camel burger and traditional music nights. A hub for cultural exchange and creative energy in the Fes medina.', specialties: ['Camel Burger', 'Moroccan Tapas', 'Date Milkshake', 'Live Gnawa Music'], rating: 4.4, image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80' },
  { name: 'Chez Lamine Hadj Mustapha', slug: 'chez-lamine', cityName: 'Marrakech', cuisineType: 'street_food', priceRange: 1, description: 'A legendary hole-in-the-wall serving the best tangia in Marrakech since the 1960s. The slow-cooked lamb is prepared in a clay urn buried in the hammam coals overnight.', specialties: ['Tangia', 'Slow-cooked Lamb', 'Moroccan Bread', 'Mint Tea'], rating: 4.7, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'La Sqala', slug: 'la-sqala', cityName: 'Casablanca', cuisineType: 'moroccan', priceRange: 2, description: 'A charming garden restaurant set in an 18th-century bastion, famous for its traditional Moroccan breakfasts and generous tagines. A Casablanca institution for locals and visitors alike.', specialties: ['Moroccan Breakfast', 'Tagine', 'Fresh Pastries', 'Garden Setting'], rating: 4.3, image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80' },
  { name: 'Le Dhow', slug: 'le-dhow', cityName: 'Rabat', cuisineType: 'international', priceRange: 3, description: 'A converted wooden dhow boat moored on the Bou Regreg river between Rabat and Sale, serving international cuisine with stunning views of the Kasbah of the Udayas at sunset.', specialties: ['Seafood Platter', 'Steak', 'Sunset Cocktails', 'River Views'], rating: 4.4, image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80' },
  { name: 'Sam\'s Fish', slug: 'sams-fish', cityName: 'Essaouira', cuisineType: 'seafood', priceRange: 1, description: 'The most popular of the harbor fish grills in Essaouira, serving the freshest catch of the day grilled to order on outdoor charcoal braziers at unbeatable prices.', specialties: ['Grilled Sardines', 'Shrimp Skewers', 'Mixed Fish Platter', 'Sea Urchin'], rating: 4.6, image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80' },
  { name: 'Henna Cafe', slug: 'henna-cafe', cityName: 'Marrakech', cuisineType: 'cafe', priceRange: 1, description: 'A charming social enterprise cafe in the medina offering organic food, henna art, and rooftop views. All profits support local community education and women\'s empowerment projects.', specialties: ['Organic Salads', 'Smoothie Bowls', 'Henna Art', 'Mint Tea'], rating: 4.5, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Dar Hatim', slug: 'dar-hatim', cityName: 'Fes', cuisineType: 'moroccan', priceRange: 2, description: 'An authentic family-run restaurant in the heart of the Fes medina offering home-cooked Fassi cuisine. The set menu changes daily and represents centuries of culinary tradition.', specialties: ['Fassi Tagine', 'Harira Soup', 'Mechoui', 'Rfissa'], rating: 4.6, image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80' },
  { name: 'The Ruined Garden', slug: 'ruined-garden', cityName: 'Fes', cuisineType: 'mediterranean', priceRange: 2, description: 'A magical garden restaurant built in the open-air ruins of a collapsed riad, offering seasonal Moroccan and Mediterranean food surrounded by ivy-covered walls and citrus trees.', specialties: ['Seasonal Tagine', 'Moroccan Salads', 'Homemade Bread', 'Garden Herbs'], rating: 4.6, image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80' },
  { name: 'MAMA Afrika', slug: 'mama-afrika', cityName: 'Tangier', cuisineType: 'international', priceRange: 2, description: 'A vibrant pan-African restaurant in the heart of Tangier blending Moroccan, Senegalese, and West African flavors. Live music on weekends adds to the festive atmosphere.', specialties: ['Thieboudienne', 'African Tagine', 'Grilled Fish', 'Live Music'], rating: 4.3, image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80' },
  { name: 'Terrasse des Epices', slug: 'terrasse-des-epices', cityName: 'Marrakech', cuisineType: 'rooftop', priceRange: 2, description: 'A beloved rooftop terrace in the medina with sweeping views over the Marrakech skyline. Relaxed atmosphere with Moroccan-inspired light meals, fresh juices, and the best sunset in the city.', specialties: ['Moroccan Tapas', 'Fresh Juices', 'Avocado Toast', 'Sunset Views'], rating: 4.4, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Al Fassia', slug: 'al-fassia', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 3, description: 'Renowned women-run restaurant serving exquisite traditional Moroccan cuisine since 1987. Widely regarded as one of the best Moroccan restaurants in the country with consistently excellent quality.', specialties: ['Lamb Tagine', 'Rfissa', 'Moroccan Pastries', 'Pigeon Pastilla'], rating: 4.7, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Dar Zellij', slug: 'dar-zellij', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 3, description: 'A palatial riad restaurant offering refined Moroccan cuisine in a setting of extraordinary zellige tilework, carved plaster, and painted ceilings. A feast for all the senses.', specialties: ['Seven Vegetable Couscous', 'Pigeon Pastilla', 'Lamb Mrouzia', 'Orange Blossom Desserts'], rating: 4.4, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Naranj', slug: 'naranj', cityName: 'Fes', cuisineType: 'moroccan', priceRange: 3, description: 'An upscale restaurant in a restored Fes riad serving modern interpretations of classic Fassi dishes. The tasting menu is an exploration of Fes\'s rich culinary heritage.', specialties: ['Fassi Tasting Menu', 'Lamb Confit', 'Rose Petal Desserts', 'Artisan Cocktails'], rating: 4.5, image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80' },
  { name: 'Chez Rachid', slug: 'chez-rachid', cityName: 'Chefchaouen', cuisineType: 'moroccan', priceRange: 1, description: 'A beloved local restaurant on the main square of Chefchaouen serving authentic Riffian mountain cuisine. The goat tagine and mountain herb tea are not to be missed.', specialties: ['Goat Tagine', 'Berkoukes', 'Mountain Herbs Tea', 'Rif Salads'], rating: 4.3, image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80' },
  { name: 'Rick\'s Cafe', slug: 'ricks-cafe', cityName: 'Casablanca', cuisineType: 'international', priceRange: 4, description: 'An homage to the classic film Casablanca, a piano bar restaurant in a restored riad with Art Deco styling. The cocktails and live piano music transport you to Hollywood\'s golden age.', specialties: ['Grilled Sea Bass', 'Beef Filet', 'Classic Cocktails', 'Live Piano'], rating: 4.2, image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80' },
  { name: 'Jemaa el-Fnaa Food Stalls', slug: 'jemaa-food-stalls', cityName: 'Marrakech', cuisineType: 'street_food', priceRange: 1, description: 'The legendary open-air food market that transforms Jemaa el-Fnaa each evening into Morocco\'s greatest dining experience. Over 100 stalls serve everything from grilled meats to snail soup.', specialties: ['Grilled Meats', 'Snail Soup', 'Sheep Head', 'Fresh Orange Juice'], rating: 4.5, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Le Foundouk', slug: 'le-foundouk', cityName: 'Marrakech', cuisineType: 'french', priceRange: 4, description: 'Upscale dining in a beautifully restored foundouk (caravanserai) with French-Moroccan fusion cuisine. The candlelit courtyard setting is one of the most romantic in the medina.', specialties: ['Duck Pastilla', 'Seafood Risotto', 'Chocolate Fondant', 'Wine Selection'], rating: 4.5, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Ocean Vagabond', slug: 'ocean-vagabond', cityName: 'Essaouira', cuisineType: 'seafood', priceRange: 2, description: 'A beachfront restaurant and surf shack serving fresh seafood and Mediterranean fare with front-row ocean views. The perfect spot for a long lunch between surf sessions.', specialties: ['Fish Tagine', 'Grilled Octopus', 'Beach Salads', 'Fresh Smoothies'], rating: 4.3, image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80' },
  { name: 'Amal Women\'s Center', slug: 'amal-center', cityName: 'Marrakech', cuisineType: 'moroccan', priceRange: 1, description: 'A social enterprise restaurant training disadvantaged women in culinary skills, serving excellent homestyle Moroccan food at great prices. Friday couscous is legendary among locals.', specialties: ['Daily Set Menu', 'Friday Couscous', 'Fresh Salads', 'Homemade Bread'], rating: 4.6, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'Dinarjat', slug: 'dinarjat', cityName: 'Rabat', cuisineType: 'moroccan', priceRange: 3, description: 'A refined Moroccan restaurant in a 17th-century palace with live Andalusian music and traditional decor. The royal couscous and mechoui are prepared to exacting standards of Moroccan gastronomy.', specialties: ['Royal Couscous', 'Mechoui', 'Pastilla', 'Andalusian Music'], rating: 4.5, image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80' },
  { name: 'Cafe des Epices', slug: 'cafe-des-epices', cityName: 'Marrakech', cuisineType: 'cafe', priceRange: 2, description: 'A lively rooftop cafe overlooking the Rahba Kedima spice square, perfect for people-watching and light Moroccan meals. The avocado smoothie has achieved near-legendary status.', specialties: ['Mint Tea', 'Avocado Smoothie', 'Moroccan Sandwiches', 'Spice Square Views'], rating: 4.4, image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80' },
  { name: 'La Cuisine de Lahlou', slug: 'la-cuisine-de-lahlou', cityName: 'Tangier', cuisineType: 'moroccan', priceRange: 2, description: 'A tiny, authentic restaurant in the Tangier medina known for its exceptional home-style Moroccan cooking. The chef-owner sources ingredients fresh daily from the nearby markets.', specialties: ['Fish Chermoula', 'Tagine Kefta', 'Moroccan Salads', 'Homemade Desserts'], rating: 4.7, image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80' },
  { name: 'Chez Driss', slug: 'chez-driss', cityName: 'Essaouira', cuisineType: 'cafe', priceRange: 1, description: 'A legendary local bakery and cafe famous for its pastries, fresh juices, and prime people-watching position on the Place Moulay Hassan. An Essaouira institution since 1928.', specialties: ['Almond Horn', 'Fresh Orange Juice', 'Moroccan Pastries', 'Mint Tea'], rating: 4.3, image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80' },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Taste Morocco - Restaurant & Food Guide',
    url: 'https://citytoursmorocco.com/restaurants',
    numberOfItems: restaurants.length,
    itemListElement: restaurants.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Restaurant',
        name: r.name,
        description: r.description,
        url: `https://citytoursmorocco.com/restaurants/${r.slug}`,
        image: r.image,
        servesCuisine: r.cuisineType,
        priceRange: '$'.repeat(r.priceRange),
        address: { '@type': 'PostalAddress', addressLocality: r.cityName, addressCountry: 'MA' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: r.rating, bestRating: 5 },
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function RestaurantsPage() {
  const uniqueCities = [...new Set(restaurants.map((r) => r.cityName))].sort();

  return (
    <>
      <JsonLd />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Restaurants</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"
            alt="Moroccan food spread with tagine and couscous"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Culinary Journey
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Taste Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From sizzling street food stalls in Jemaa el-Fnaa to refined riad dining rooms and Atlantic seafood grills, Morocco&apos;s culinary landscape is as diverse and intoxicating as the country itself.
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">{restaurants.length}+</p>
                <p className="text-sm text-white/70">Restaurants</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">9</p>
                <p className="text-sm text-white/70">Cuisine Types</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">{uniqueCities.length}</p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* Main Content */}
      <section className="container-morocco py-12 md:py-16">
        <RestaurantsClientSection restaurants={restaurants} cities={uniqueCities} />
      </section>
    </>
  );
}
