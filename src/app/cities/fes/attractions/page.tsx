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
  title: 'Top 12 Attractions in Fes | Must-See Sights & Landmarks | CityGuide',
  description:
    'Discover the 12 best attractions in Fes, Morocco. Explore the world\'s largest car-free medina, ancient tanneries, stunning madrasas, and panoramic viewpoints with practical visitor information.',
  openGraph: {
    title: 'Top 12 Attractions in Fes | CityGuide',
    description:
      'Explore Fes\'s most iconic attractions including Chouara Tannery, Bou Inania Madrasa, and the ancient medina.',
    url: 'https://citytoursmorocco.com/cities/fes/attractions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/fes/attractions',
  },
};

const attractions = [
  {
    name: 'Fes el-Bali Medina',
    description:
      'The world\'s largest car-free urban zone and a UNESCO World Heritage Site since 1981. With over 9,400 twisting alleyways, this medieval labyrinth is home to 150,000 residents, thousands of artisan workshops, mosques, and fondouks dating back over a millennium.',
    entranceFee: 'Free',
    hours: 'Open 24 hours (shops close around 8 PM)',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.9,
    type: 'Medina',
  },
  {
    name: 'Chouara Tannery',
    description:
      'The oldest and largest of Fes\'s three leather tanneries, operating continuously since the 11th century. Workers stand in stone vats of natural dyes including saffron, indigo, and poppy, producing the world-famous Fes leather using techniques unchanged for a thousand years.',
    entranceFee: 'Free (tip to leather shop guide expected)',
    hours: 'Best viewed 9:00 AM - 3:00 PM daily',
    image: 'https://images.unsplash.com/photo-1545042746-ec2e47e2603e?w=800&q=80',
    rating: 4.7,
    type: 'Heritage Site',
  },
  {
    name: 'Bou Inania Madrasa',
    description:
      'A masterpiece of Marinid architecture built between 1350-1357 by Sultan Abu Inan Faris. This theological college features breathtaking carved stucco, cedar woodwork, onyx marble, and a rare water clock mechanism. It is the only madrasa in Fes with its own minaret.',
    entranceFee: '30 MAD',
    hours: '9:00 AM - 5:00 PM (closed during prayers)',
    image: 'https://images.unsplash.com/photo-1570724061670-86a53c509dee?w=800&q=80',
    rating: 4.8,
    type: 'Monument',
  },
  {
    name: 'Al-Attarine Madrasa',
    description:
      'Built in 1325 by the Marinid sultan Abu Said, this small but exquisitely decorated madrasa is considered one of the finest examples of Islamic architecture in Morocco. Every surface is covered in intricate zellige tilework, carved plaster, and cedar wood muqarnas.',
    entranceFee: '20 MAD',
    hours: '9:00 AM - 5:00 PM daily',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.7,
    type: 'Monument',
  },
  {
    name: 'Dar Batha Museum',
    description:
      'Housed in a 19th-century Hispano-Moorish palace with an Andalusian garden, this museum displays a rich collection of traditional Fassi arts and crafts including ceramics, zellige, embroidery, carved wood, wrought iron, and the famous Fes blue pottery.',
    entranceFee: '20 MAD',
    hours: '9:00 AM - 5:00 PM (closed Tuesdays)',
    image: 'https://images.unsplash.com/photo-1570724061670-86a53c509dee?w=800&q=80',
    rating: 4.4,
    type: 'Museum',
  },
  {
    name: 'Merenid Tombs',
    description:
      'The atmospheric ruins of a 14th-century royal necropolis perched on a hilltop north of the medina, offering some of the most spectacular panoramic views of Fes el-Bali. At sunset, the entire medina glows golden below as the call to prayer echoes from dozens of minarets.',
    entranceFee: 'Free',
    hours: 'Open 24 hours (best at sunset)',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.6,
    type: 'Ruins',
  },
  {
    name: 'Borj Nord',
    description:
      'A 16th-century fortress built by the Saadian dynasty on a hilltop overlooking the medina, now housing an impressive arms museum with a collection spanning from prehistoric times to WWII. The terrace provides sweeping views rivaling those of the Merenid Tombs.',
    entranceFee: '20 MAD',
    hours: '9:00 AM - 6:00 PM (closed Tuesdays)',
    image: 'https://images.unsplash.com/photo-1545042746-ec2e47e2603e?w=800&q=80',
    rating: 4.3,
    type: 'Fortress',
  },
  {
    name: 'Royal Palace Gates (Dar el-Makhzen)',
    description:
      'While the 80-hectare Royal Palace is closed to visitors, its monumental brass doors are among the most photographed sights in Fes. The seven massive doors are masterworks of geometric design, gleaming with polished brass and flanked by zellige-tiled walls.',
    entranceFee: 'Free (exterior only)',
    hours: 'Viewable 24/7',
    image: 'https://images.unsplash.com/photo-1570724061670-86a53c509dee?w=800&q=80',
    rating: 4.5,
    type: 'Palace',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    description:
      'The historic Jewish quarter of Fes, established in 1438 as the first mellah in Morocco. Features distinctive architecture with wooden balconies, the Ibn Danan Synagogue, and a haunting ancient Jewish cemetery. A testament to the multicultural heritage of Morocco.',
    entranceFee: 'Free (Synagogue: 20 MAD)',
    hours: 'Open during daylight hours',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.3,
    type: 'Historic Quarter',
  },
  {
    name: 'Ain Nokbi Viewpoint',
    description:
      'A panoramic viewpoint on the southern hills offering a breathtaking bird\'s-eye perspective of the entire Fes medina spread below. Less crowded than the Merenid Tombs, it is particularly beautiful in the early morning when mist rises from the ancient city.',
    entranceFee: 'Free',
    hours: 'Open 24 hours',
    image: 'https://images.unsplash.com/photo-1545042746-ec2e47e2603e?w=800&q=80',
    rating: 4.4,
    type: 'Viewpoint',
  },
  {
    name: 'Nejjarine Museum of Wooden Arts',
    description:
      'Set in a beautifully restored 18th-century caravanserai (fondouk) near the Nejjarine Fountain, this museum showcases the fine tradition of Moroccan woodcraft. Three floors of carved cedar, marquetry, and tools are complemented by the stunning building itself.',
    entranceFee: '20 MAD',
    hours: '10:00 AM - 5:00 PM daily',
    image: 'https://images.unsplash.com/photo-1570724061670-86a53c509dee?w=800&q=80',
    rating: 4.5,
    type: 'Museum',
  },
  {
    name: 'Jnan Sbil Gardens',
    description:
      'A tranquil 7.5-hectare royal garden adjacent to the old city walls, originally laid out in the 19th century and beautifully restored in 2011. Shaded pathways wind through bamboo groves, ancient trees, and ornamental lakes, providing a peaceful escape from the medina bustle.',
    entranceFee: 'Free',
    hours: '8:00 AM - 6:30 PM daily',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.4,
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

export default function FesAttractionsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Top Attractions in Fes',
    description: 'The 12 best attractions and landmarks to visit in Fes, Morocco.',
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
              'url(https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=2800&q=80)',
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
            <Link href="/cities/fes" className="hover:text-white transition-colors">
              Fes
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Fes Attractions
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore 12 must-see sights in Morocco&apos;s spiritual capital, from the ancient
            medina and medieval tanneries to hilltop ruins and serene gardens.
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
                {attractions.length} places to explore in Fes
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
            Plan Your Fes Visit
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Complete your trip to Morocco&apos;s spiritual capital with the best hotels and restaurants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/fes/hotels"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Hotels <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/fes/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/fes"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Fes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
