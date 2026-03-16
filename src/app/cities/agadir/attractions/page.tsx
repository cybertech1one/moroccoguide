import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Ticket,
  Star,
  Landmark,
  TreePine,
  Waves,
  ShoppingBag,
  Mountain,
  Bird,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 8 Attractions in Agadir | Beaches, Nature & Culture',
  description:
    'Discover the best attractions in Agadir, Morocco. From golden beaches to the historic Kasbah ruins, explore the top landmarks and natural wonders of Morocco\'s premier beach resort city.',
  openGraph: {
    title: 'Top 8 Attractions in Agadir',
    description:
      'Explore the best beaches, nature parks, and cultural sites in Agadir, Morocco.',
    url: 'https://citytoursmorocco.com/cities/agadir/attractions',
  },
};

const attractions = [
  {
    name: 'Agadir Beach',
    slug: 'agadir-beach',
    description:
      'Stretching for nearly 10 kilometers along the Atlantic coast, Agadir Beach is one of Morocco\'s finest and the city\'s main draw. The wide golden sand beach benefits from over 300 days of sunshine per year, with water temperatures comfortable for swimming from May to November. The promenade behind the beach is lined with cafes, restaurants, and hotels. Surfing, jet skiing, and camel rides along the shore are popular activities. Sunbeds and umbrellas can be rented from beach clubs.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    rating: 4.5,
    price: 'Free (sunbed rental 30-50 MAD)',
    hours: 'Open 24 hours',
    icon: Waves,
    category: 'Beach',
  },
  {
    name: 'Kasbah Agadir Oufella',
    slug: 'kasbah-agadir-oufella',
    description:
      'The ruins of a 16th-century fortress perched on a hilltop 236 meters above the city, offering the most spectacular panoramic views of Agadir. The original kasbah was destroyed in the devastating 1960 earthquake that leveled the city. The remaining walls bear the inscription "God, Country, King" in Arabic, visible from the beach below. The site is particularly magical at sunset, when the entire bay is bathed in golden light. A winding road leads to the top.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=800',
    rating: 4.4,
    price: 'Free',
    hours: '8:00 AM - 5:30 PM daily',
    icon: Landmark,
    category: 'Historic Ruins',
  },
  {
    name: 'Souk El Had',
    slug: 'souk-el-had',
    description:
      'One of the largest markets in North Africa, Souk El Had covers over 13 hectares and contains more than 6,000 shops. Unlike the tourist-oriented souks of Marrakech or Fes, this market primarily serves locals, making it an authentic and affordable shopping experience. Organized by sections for spices, vegetables, clothing, electronics, and handicrafts, the market is a feast for the senses. The argan oil section is particularly notable, as Agadir is the heart of argan production.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    rating: 4.3,
    price: 'Free entry',
    hours: '6:00 AM - 6:30 PM (Closed Mondays)',
    icon: ShoppingBag,
    category: 'Market',
  },
  {
    name: 'Valley of Birds',
    slug: 'valley-of-birds',
    description:
      'A charming small zoo and botanical garden nestled in a natural ravine in the heart of Agadir. Home to flamingos, parrots, macaws, and other exotic birds alongside Barbary macaques, gazelles, and llamas. The lush gardens feature waterfalls, walking bridges, and shaded paths lined with tropical plants. It is a wonderful family-friendly attraction and a peaceful retreat from the beach. The park has been recently renovated with improved animal enclosures and landscaping.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=800',
    rating: 4.0,
    price: '6 MAD (adults), 3 MAD (children)',
    hours: '9:30 AM - 12:30 PM, 2:30 PM - 6:00 PM daily',
    icon: Bird,
    category: 'Zoo & Garden',
  },
  {
    name: 'Crocoparc',
    slug: 'crocoparc',
    description:
      'A unique botanical garden and crocodile park located 14 kilometers from Agadir city center. Home to over 300 Nile crocodiles in naturalistic enclosures, the park also features a stunning cactus garden with over 400 species, an orchid greenhouse, and educational exhibits about reptile conservation. Feeding times are a highlight, and the well-designed walkways allow close-up views of the crocodiles. A great half-day excursion for families with an on-site cafe and gift shop.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800',
    rating: 4.2,
    price: '70 MAD (adults), 40 MAD (children)',
    hours: '10:00 AM - 5:00 PM daily',
    icon: TreePine,
    category: 'Wildlife Park',
  },
  {
    name: 'Amazigh Heritage Museum',
    slug: 'amazigh-heritage-museum',
    description:
      'Dedicated to the rich culture and history of the Amazigh (Berber) people, this well-curated museum in the city center showcases traditional jewelry, textiles, pottery, weapons, and musical instruments from the Souss region and beyond. The collection includes intricate silver jewelry worn by Amazigh women, hand-woven carpets with tribal symbols, and carved wooden doors from village homes. Informative panels explain the significance of each artifact in Amazigh culture.',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa1ccaf?q=80&w=800',
    rating: 4.1,
    price: '20 MAD',
    hours: '9:30 AM - 5:30 PM (Closed Sundays)',
    icon: Landmark,
    category: 'Museum',
  },
  {
    name: 'Agadir Marina',
    slug: 'agadir-marina',
    description:
      'A modern waterfront development offering a pleasant contrast to Agadir\'s traditional attractions. The marina accommodates luxury yachts and fishing boats alike, with a promenade lined with upscale restaurants, ice cream parlors, and boutique shops. Boat trips depart from here for dolphin watching, deep-sea fishing, and coastal cruises. In the evening, the marina lights up and becomes one of the city\'s most popular spots for an evening stroll and dinner.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    rating: 4.0,
    price: 'Free (boat trips from 200 MAD)',
    hours: 'Open 24 hours',
    icon: Waves,
    category: 'Waterfront',
  },
  {
    name: 'Paradise Valley',
    slug: 'paradise-valley',
    description:
      'A stunning series of natural rock pools, waterfalls, and palm-filled gorges located about 30 kilometers north of Agadir in the foothills of the Anti-Atlas mountains. Fed by crystal-clear mountain streams, the turquoise pools are perfect for swimming during summer. The surrounding landscape of red rocks, argan trees, and Berber villages is breathtaking. Local guides can take you to hidden pools and cliff-jumping spots. Bring sturdy shoes for the rocky trails.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    rating: 4.7,
    price: 'Free (guided tours from 150 MAD)',
    hours: 'Sunrise to sunset',
    icon: Mountain,
    category: 'Natural Wonder',
  },
];

export default function AgadirAttractionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Attractions in Agadir',
    description: 'The best beaches, nature parks, and cultural sites in Agadir, Morocco.',
    numberOfItems: attractions.length,
    itemListElement: attractions.map((attraction, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        image: attraction.image,
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
            <span className="text-white">Attractions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Agadir Attractions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Sun, sand, and so much more. Discover golden beaches, hidden waterfalls, and the vibrant culture of Morocco&apos;s premier Atlantic resort city.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Attractions Grid */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <div key={attraction.slug} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[var(--text-primary)]">
                    {attraction.category}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 text-white text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {attraction.rating}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <attraction.icon className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{attraction.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {attraction.description}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Ticket className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{attraction.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{attraction.hours}</span>
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
            Hungry After Exploring?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the best restaurants in Agadir, from fresh seafood to international cuisine along the beachfront.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/agadir/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Agadir Restaurants
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
