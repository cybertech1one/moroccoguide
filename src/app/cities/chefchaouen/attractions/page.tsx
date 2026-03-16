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
  title: 'Top 8 Attractions in Chefchaouen | The Blue Pearl | CityGuide',
  description:
    'Discover the 8 best attractions in Chefchaouen, Morocco. Explore the famous blue medina, waterfalls, mountain viewpoints, and the charming kasbah of the Blue Pearl.',
  openGraph: {
    title: 'Top 8 Attractions in Chefchaouen | CityGuide',
    description:
      'Explore Chefchaouen\'s most iconic attractions including the Blue Medina, Spanish Mosque viewpoint, and Akchour Waterfalls.',
    url: 'https://citytoursmorocco.com/cities/chefchaouen/attractions',
    type: 'website',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/cities/chefchaouen/attractions',
  },
};

const attractions = [
  {
    name: 'Blue Medina',
    description:
      'The world-famous blue-washed medina of Chefchaouen is a photographer\'s paradise, with every building, stairway, and doorway painted in shades of blue ranging from powder to cobalt to indigo. The tradition, believed to have been introduced by Jewish refugees in the 1930s, symbolizes the sky and heaven.',
    entranceFee: 'Free',
    hours: 'Open 24 hours (shops close around 8 PM)',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.9,
    type: 'Medina',
  },
  {
    name: 'Ras El Maa Waterfall',
    description:
      'A charming natural spring and small waterfall at the northeast edge of the medina where locals come to wash clothes and socialize. The rushing water from the Rif Mountains creates a peaceful atmosphere, and the surrounding area is a popular gathering spot with small cafes.',
    entranceFee: 'Free',
    hours: 'Open 24 hours',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.4,
    type: 'Nature',
  },
  {
    name: 'Kasbah Museum',
    description:
      'A 15th-century fortress in the heart of Place Outa el Hammam, housing a small ethnographic museum with displays on local Rif culture, weapons, and textiles. The kasbah\'s lovely Andalusian garden, red stone walls, and tower offer wonderful views over the main square and medina rooftops.',
    entranceFee: '10 MAD',
    hours: '9:00 AM - 1:00 PM, 3:00 PM - 6:30 PM (closed Tuesdays)',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.3,
    type: 'Museum',
  },
  {
    name: 'Spanish Mosque Viewpoint',
    description:
      'A short uphill hike from the medina leads to this unfinished Spanish-era mosque offering the definitive panoramic view of Chefchaouen. The blue medina spreads below against the dramatic backdrop of the twin peaks of Jebel el-Kelaa. The sunset view from here is considered one of the best in all of Morocco.',
    entranceFee: 'Free',
    hours: 'Open 24 hours (best at sunset)',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.8,
    type: 'Viewpoint',
  },
  {
    name: 'Place Outa el Hammam',
    description:
      'The lively main square and social heart of Chefchaouen, surrounded by cafes and restaurants with the kasbah forming one impressive wall. This is where locals and visitors gather to sip mint tea, people-watch, and soak in the laid-back mountain atmosphere that makes this town so special.',
    entranceFee: 'Free',
    hours: 'Open 24 hours',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.5,
    type: 'Square',
  },
  {
    name: 'Grand Mosque',
    description:
      'Located on the main square, Chefchaouen\'s 15th-century Grand Mosque features an unusual octagonal minaret that is unique in Morocco. While the mosque interior is closed to non-Muslims, the distinctive exterior and minaret are beautifully photogenic, especially against the surrounding blue buildings.',
    entranceFee: 'Free (exterior only)',
    hours: 'Exterior viewable 24/7',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.2,
    type: 'Religious',
  },
  {
    name: 'Akchour Waterfalls',
    description:
      'A spectacular natural attraction in Talassemtane National Park, about 30 km from Chefchaouen. The trail passes through beautiful Rif Mountain scenery to reach both a small cascade and the grand 100-meter waterfall. Natural rock pools along the way offer refreshing swimming spots in summer.',
    entranceFee: '10 MAD (park entry)',
    hours: 'Daylight hours (allow 4-6 hours for the full hike)',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.7,
    type: 'Nature',
  },
  {
    name: "God's Bridge (Pont de Dieu)",
    description:
      'A stunning natural rock arch carved by the Farda river in Talassemtane National Park, creating a dramatic natural bridge over a turquoise gorge. Located near the Akchour Waterfalls trail, it is one of the most impressive geological formations in the Rif Mountains and a must-see for hikers.',
    entranceFee: '10 MAD (park entry)',
    hours: 'Daylight hours (allow 3-4 hours hiking)',
    image: '/images/hero-chefchaouen-drone.webp',
    rating: 4.6,
    type: 'Nature',
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

export default function ChefchaouenAttractionsPage() {
  const structuredData = generateStructuredData('ItemList', {
    name: 'Top Attractions in Chefchaouen',
    description: 'The 8 best attractions and landmarks to visit in Chefchaouen, Morocco.',
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
              'url(/images/hero-chefchaouen-drone.webp)',
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
            <Link href="/cities/chefchaouen" className="hover:text-white transition-colors">
              Chefchaouen
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Landmark className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Chefchaouen Attractions
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore 8 must-see sights in Morocco&apos;s Blue Pearl, from the enchanting
            blue medina to mountain waterfalls and panoramic viewpoints in the Rif.
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
                {attractions.length} places to explore in Chefchaouen
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
            Plan Your Chefchaouen Visit
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Find the best places to eat and explore in the Blue Pearl of Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/chefchaouen/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              View Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/chefchaouen"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Back to Chefchaouen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
