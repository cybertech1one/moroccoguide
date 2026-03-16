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
  title: 'Top 15 Attractions in Marrakech | Must-See Sights & Landmarks | CityGuide',
  description:
    'Discover the 15 best attractions in Marrakech, Morocco. From Jemaa el-Fnaa to Jardin Majorelle, explore palaces, museums, gardens, and historic sites with opening hours and entrance fees.',
  openGraph: {
    title: 'Top 15 Attractions in Marrakech | CityGuide',
    description:
      'Explore Marrakech\'s most iconic attractions including Jemaa el-Fnaa, Bahia Palace, Jardin Majorelle, and more.',
    url: 'https://citytoursmorocco.com/cities/marrakech/attractions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/marrakech/attractions',
  },
};

const attractions = [
  {
    name: 'Jemaa el-Fnaa',
    slug: 'jemaa-el-fnaa',
    description:
      'The beating heart of Marrakech and a UNESCO Masterpiece of Oral and Intangible Heritage. By day it hosts orange juice sellers and snake charmers; by night it transforms into a vast open-air restaurant with storytellers, musicians, and hundreds of food stalls.',
    entranceFee: 'Free',
    hours: 'Open 24 hours (most active from 5 PM to midnight)',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
    rating: 4.8,
    type: 'Square',
  },
  {
    name: 'Bahia Palace',
    slug: 'bahia-palace',
    description:
      'A stunning 19th-century palace built for Grand Vizier Si Moussa, featuring beautifully painted ceilings, intricate zellige tilework, and tranquil courtyards filled with fruit trees. The name means "Palace of the Beautiful" and it lives up to it entirely.',
    entranceFee: '70 MAD',
    hours: '9:00 AM - 5:00 PM daily',
    image: 'https://images.unsplash.com/photo-1590076084204-0e7e3b3c8b67?w=800&q=80',
    rating: 4.6,
    type: 'Palace',
  },
  {
    name: 'El Badi Palace',
    slug: 'el-badi-palace',
    description:
      'The ruins of Sultan Ahmad al-Mansur\'s once-magnificent 16th-century palace, which was stripped of its gold, onyx, and marble by a later sultan. The vast courtyard with sunken gardens and nesting storks offers atmospheric exploration and panoramic terrace views.',
    entranceFee: '70 MAD',
    hours: '9:00 AM - 5:00 PM daily',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    rating: 4.4,
    type: 'Ruins',
  },
  {
    name: 'Saadian Tombs',
    slug: 'saadian-tombs',
    description:
      'A magnificent royal necropolis dating from the late 16th century, sealed and forgotten for centuries until their rediscovery in 1917. The Hall of Twelve Columns houses exquisite Italian Carrara marble, intricate muqarnas ceilings, and the tombs of Sultan Ahmad al-Mansur and his family.',
    entranceFee: '70 MAD',
    hours: '9:00 AM - 5:00 PM daily',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
    rating: 4.5,
    type: 'Monument',
  },
  {
    name: 'Koutoubia Mosque',
    slug: 'koutoubia-mosque',
    description:
      'The largest mosque in Marrakech and the city\'s most famous landmark, with a 77-meter minaret visible for miles around. Built in the 12th century by the Almohad dynasty, its minaret served as the architectural model for the Giralda in Seville and the Hassan Tower in Rabat.',
    entranceFee: 'Free (exterior only, mosque closed to non-Muslims)',
    hours: 'Exterior viewable 24/7',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
    rating: 4.7,
    type: 'Religious',
  },
  {
    name: 'Jardin Majorelle',
    slug: 'jardin-majorelle',
    description:
      'A breathtaking botanical garden created by French painter Jacques Majorelle in the 1920s and later restored by Yves Saint Laurent and Pierre Berge. The iconic cobalt-blue Art Deco villa is surrounded by cacti, bougainvillea, bamboo groves, and water features from around the world.',
    entranceFee: '150 MAD (garden) + 30 MAD (Berber Museum)',
    hours: '8:00 AM - 6:30 PM daily',
    image: 'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=800&q=80',
    rating: 4.7,
    type: 'Garden',
  },
  {
    name: 'Le Jardin Secret',
    slug: 'le-jardin-secret',
    description:
      'A hidden oasis in the heart of the medina featuring two stunning gardens: an exotic garden with plants from across the globe and an Islamic garden following classical geometric principles. The restored 19th-century riad and its tower offer peaceful respite and rooftop views over the old city.',
    entranceFee: '60 MAD',
    hours: '9:30 AM - 6:30 PM daily',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    rating: 4.5,
    type: 'Garden',
  },
  {
    name: 'Menara Gardens',
    slug: 'menara-gardens',
    description:
      'A vast olive grove and ornamental garden dating back to the 12th-century Almohad dynasty, centered around a large reflecting pool and a charming 19th-century pavilion. With the snow-capped Atlas Mountains as a backdrop, it is one of Morocco\'s most iconic and photographed scenes.',
    entranceFee: 'Free (pavilion: 10 MAD)',
    hours: '8:00 AM - 5:00 PM daily',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
    rating: 4.3,
    type: 'Garden',
  },
  {
    name: 'Marrakech Museum',
    slug: 'marrakech-museum',
    description:
      'Housed in the beautifully restored 19th-century Dar Menebhi Palace, this museum showcases Moroccan art, Berber artifacts, historical manuscripts, and contemporary exhibitions. The central courtyard with its enormous brass chandelier is a highlight of the visit.',
    entranceFee: '50 MAD',
    hours: '9:00 AM - 6:00 PM (closed Tuesdays)',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5c3689?w=800&q=80',
    rating: 4.3,
    type: 'Museum',
  },
  {
    name: 'Ben Youssef Madrasa',
    slug: 'ben-youssef-madrasa',
    description:
      'Once the largest Islamic college in North Africa, this 14th-century theological school is a masterpiece of Marinid architecture. Its central courtyard features extraordinary carved stucco, cedar wood, and zellige tilework, while 130 student dormitory cells surround the upper floors.',
    entranceFee: '70 MAD',
    hours: '9:00 AM - 6:00 PM daily',
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
    rating: 4.8,
    type: 'Monument',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    slug: 'mellah',
    description:
      'The historic Jewish quarter of Marrakech, established in 1558, features distinctive architecture with wooden balconies overlooking the streets. Visit the Lazama Synagogue, the Miara Jewish Cemetery, and the spice market to understand the rich multicultural history of the city.',
    entranceFee: 'Free (Synagogue: 20 MAD)',
    hours: 'Open during daylight hours',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80',
    rating: 4.2,
    type: 'Historic Quarter',
  },
  {
    name: 'Dar Si Said Museum',
    slug: 'dar-si-said-museum',
    description:
      'Also known as the National Museum of Weaving and Carpets, this 19th-century palace houses an exceptional collection of Moroccan woodwork, jewelry, ceramics, and textiles. The building itself, with its painted cedar ceilings and serene courtyard garden, is as impressive as the exhibits.',
    entranceFee: '30 MAD',
    hours: '9:00 AM - 5:00 PM (closed Tuesdays)',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5c3689?w=800&q=80',
    rating: 4.3,
    type: 'Museum',
  },
  {
    name: 'Maison de la Photographie',
    slug: 'maison-de-la-photographie',
    description:
      'A fascinating museum of vintage photography showcasing images of Morocco from 1870 to 1950, housed in a beautifully restored riad. The rooftop terrace cafe offers sweeping views over the medina and is the perfect place to reflect on the images below.',
    entranceFee: '50 MAD',
    hours: '9:30 AM - 7:00 PM daily',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
    rating: 4.5,
    type: 'Museum',
  },
  {
    name: 'YSL Museum',
    slug: 'ysl-museum',
    description:
      'The Musee Yves Saint Laurent Marrakech is a striking terracotta-brick building designed by Studio KO, dedicated to the legendary fashion designer\'s work and his deep love for Morocco. The permanent collection displays haute couture pieces, sketches, and accessories alongside temporary art exhibitions.',
    entranceFee: '100 MAD',
    hours: '10:00 AM - 6:00 PM (closed Wednesdays)',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&q=80',
    rating: 4.6,
    type: 'Museum',
  },
  {
    name: 'Cyber Park',
    slug: 'cyber-park',
    description:
      'A peaceful 8-hectare garden between Jemaa el-Fnaa and the Gueliz new town, originally laid out in the 18th century by Prince Moulay Abdeslam. Now modernized with free Wi-Fi and multimedia kiosks, it blends Moroccan garden tradition with contemporary technology amid olive trees and fountains.',
    entranceFee: 'Free',
    hours: '8:00 AM - 7:00 PM daily',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80',
    rating: 4.0,
    type: 'Garden',
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

export default function MarrakechAttractionsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Top Attractions in Marrakech',
    description: 'The 15 best attractions and landmarks to visit in Marrakech, Morocco.',
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
              'url(https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=2800&q=80)',
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
            <Link href="/cities/marrakech" className="hover:text-white transition-colors">
              Marrakech
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Marrakech Attractions
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Discover 15 must-see sights in the Red City, from ancient palaces and
            vibrant squares to tranquil gardens and world-class museums.
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
                {attractions.length} places to explore in Marrakech
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
                key={attraction.slug}
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

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Plan Your Marrakech Visit
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Ready to explore the Red City? Find the best hotels and restaurants to complete your trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/marrakech/hotels"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Hotels <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/marrakech/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/marrakech"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
