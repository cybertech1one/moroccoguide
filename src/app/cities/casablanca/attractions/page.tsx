import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  Star,
  Clock,
  Ticket,
  MapPin,
  Camera,
  ArrowRight,
} from 'lucide-react';
import { generateStructuredData } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Top 10 Attractions in Casablanca | Must-See Sights | CityGuide',
  description:
    'Discover the 10 best attractions in Casablanca, Morocco. From the magnificent Hassan II Mosque to Art Deco architecture, explore the modern face of Morocco.',
  openGraph: {
    title: 'Top 10 Attractions in Casablanca | CityGuide',
    description:
      'Explore Casablanca\'s most iconic attractions including the Hassan II Mosque, Rick\'s Cafe, and the Corniche.',
    url: 'https://citytoursmorocco.com/cities/casablanca/attractions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/casablanca/attractions',
  },
};

const attractions = [
  {
    name: 'Hassan II Mosque',
    description:
      'One of the largest mosques in the world and the tallest religious structure on Earth, with a 210-meter minaret featuring a laser beam pointed toward Mecca. Built partially over the Atlantic Ocean, it took 10,000 artisans six years to complete the breathtaking interior of zellige, carved plaster, and painted cedar.',
    entranceFee: '130 MAD',
    hours: 'Guided tours: Sat-Thu 9:00 AM, 10:00 AM, 11:00 AM, 2:00 PM',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.9,
    type: 'Religious',
  },
  {
    name: 'Morocco Mall',
    description:
      'Africa\'s second-largest shopping mall and a major Casablanca landmark, featuring over 600 stores, an IMAX cinema, a musical fountain, and a massive aquarium with over 40 species of fish. The rooftop offers views over the Atlantic coast.',
    entranceFee: 'Free (shopping and entertainment vary)',
    hours: '10:00 AM - 10:00 PM daily',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5d2d39?w=800&q=80',
    rating: 4.2,
    type: 'Shopping',
  },
  {
    name: 'Corniche',
    description:
      'Casablanca\'s lively seaside promenade stretching along the Atlantic coast, lined with beach clubs, restaurants, cafes, and entertainment venues. The boardwalk is perfect for sunset walks, with views of the ocean and the city skyline.',
    entranceFee: 'Free',
    hours: 'Open 24 hours',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.3,
    type: 'Promenade',
  },
  {
    name: 'Old Medina',
    description:
      'Casablanca\'s compact old town offers a less touristic and more authentic medina experience than other Moroccan cities. Narrow alleyways open onto small squares with mosques, hammams, and local merchants selling everything from spices to electronics.',
    entranceFee: 'Free',
    hours: 'Open during daylight hours',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5d2d39?w=800&q=80',
    rating: 4.0,
    type: 'Medina',
  },
  {
    name: "Rick's Cafe",
    description:
      'Inspired by the 1942 film "Casablanca," this lovingly recreated cafe-restaurant replicates the movie\'s famous nightclub with Art Deco arches, a curved bar, and a white piano. While not a historical site, it is a must-visit for film lovers and a fine dining experience in its own right.',
    entranceFee: 'Free (dining required)',
    hours: '12:00 PM - 3:00 PM, 6:30 PM - 1:00 AM (closed Sundays)',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    rating: 4.4,
    type: 'Restaurant & Landmark',
  },
  {
    name: 'Place Mohammed V',
    description:
      'The grand central square of Casablanca, surrounded by impressive Art Deco and Mauresque architecture from the French colonial period. Government buildings, the main post office, and the courthouse frame an elegant public space with a large central fountain.',
    entranceFee: 'Free',
    hours: 'Open 24 hours',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.1,
    type: 'Square',
  },
  {
    name: 'Cathedral du Sacre Coeur',
    description:
      'A striking former Catholic cathedral built in 1930 in a unique Art Deco-Moorish style, now deconsecrated and used as a cultural space. The twin towers, ornate facade, and soaring interior make it one of the most architecturally interesting buildings in the city.',
    entranceFee: '20 MAD',
    hours: '9:00 AM - 6:00 PM daily',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5d2d39?w=800&q=80',
    rating: 4.3,
    type: 'Monument',
  },
  {
    name: 'Villa des Arts',
    description:
      'Housed in a beautiful 1930s Art Deco villa, this museum and cultural center showcases contemporary Moroccan and international art through rotating exhibitions. The building itself, with its elegant period details and tranquil garden, is worth the visit alone.',
    entranceFee: '30 MAD',
    hours: '10:00 AM - 7:00 PM (closed Mondays)',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.2,
    type: 'Museum',
  },
  {
    name: 'Quartier Habous (New Medina)',
    description:
      'Built in the 1930s by French architects who blended Moroccan and European urban design, this "New Medina" features orderly arcaded streets with traditional shops. It is the best place to buy pastries, olives, and Moroccan handicrafts in a relaxed atmosphere.',
    entranceFee: 'Free',
    hours: 'Shops open 9:00 AM - 7:00 PM (closed Sundays)',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5d2d39?w=800&q=80',
    rating: 4.3,
    type: 'Historic Quarter',
  },
  {
    name: 'Ain Diab Beach',
    description:
      'The most popular beach in Casablanca, stretching along the Corniche with a mix of public sections and private beach clubs. While the water can be rough, the beach is great for people-watching, sunset views, and enjoying a glass of mint tea at one of the many seafront cafes.',
    entranceFee: 'Free (beach clubs vary)',
    hours: 'Open 24 hours',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.1,
    type: 'Beach',
  },
];

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

export default function CasablancaAttractionsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Top Attractions in Casablanca',
    description: 'The 10 best attractions and landmarks to visit in Casablanca, Morocco.',
    numberOfItems: attractions.length,
    itemListElement: attractions.map((attraction, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        image: attraction.image,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: attraction.rating,
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
            <Link href="/cities/casablanca" className="hover:text-white transition-colors">
              Casablanca
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Casablanca Attractions
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore 10 must-see sights in Morocco&apos;s largest city, from the
            magnificent Hassan II Mosque to Art Deco treasures and Atlantic beaches.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Attractions Grid */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                All Attractions
              </h2>
              <p className="text-[var(--text-muted)] mt-1">
                {attractions.length} places to explore in Casablanca
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Camera className="w-4 h-4" />
              <span>Sorted by rating</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--color-primary)]">
                      {attraction.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 line-clamp-3">
                    {attraction.description}
                  </p>
                  <div className="flex flex-col gap-2 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Ticket className="w-3.5 h-3.5 text-[var(--color-green)]" />
                      {attraction.entranceFee}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                      {attraction.hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-3 pt-3 border-t border-[var(--border-light)]">
                    {renderStars(attraction.rating)}
                    <span className="ml-1 text-xs text-[var(--text-muted)]">
                      {attraction.rating.toFixed(1)}
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
            Plan Your Casablanca Visit
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Complete your trip to Morocco&apos;s modern metropolis with the best hotels and restaurants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/casablanca/hotels"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Hotels <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/casablanca/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
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
