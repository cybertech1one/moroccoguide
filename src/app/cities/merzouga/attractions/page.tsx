import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Ticket,
  Star,
  Mountain,
  Sunrise,
  Music,
  Droplets,
  Pickaxe,
  Compass,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 6 Attractions in Merzouga | Sahara Desert Wonders',
  description:
    'Discover the best attractions in Merzouga, Morocco. From the towering Erg Chebbi dunes to ancient fossil mines, explore the must-see sites at the edge of the Sahara Desert.',
  openGraph: {
    title: 'Top 6 Attractions in Merzouga',
    description:
      'Explore the Sahara\'s most spectacular dunes, Gnaoua villages, and desert wonders in Merzouga.',
    url: 'https://citytoursmorocco.com/cities/merzouga/attractions',
  },
};

const attractions = [
  {
    name: 'Erg Chebbi Dunes',
    slug: 'erg-chebbi-dunes',
    description:
      'The crown jewel of the Moroccan Sahara, Erg Chebbi is a vast sea of golden-orange sand dunes stretching 22 kilometers long and 5 kilometers wide, with peaks reaching up to 150 meters in height. These are the tallest dunes in Morocco and among the most photogenic in all of the Sahara. The dunes change color throughout the day, from soft pink at dawn to deep orange at midday to fiery red at sunset. Walking barefoot on the warm sand as the dunes stretch endlessly before you is a transcendent experience.',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800',
    rating: 4.9,
    price: 'Free (guided excursions from 300 MAD)',
    hours: 'Accessible 24 hours',
    icon: Mountain,
    category: 'Natural Wonder',
  },
  {
    name: 'Sunrise Camel Trek',
    slug: 'sunrise-camel-trek',
    description:
      'The quintessential Merzouga experience begins before dawn as you mount a dromedary camel and ride into the Erg Chebbi dunes to witness the sunrise over the Sahara. The one-hour trek weaves through the dune valleys as the sky transitions from deep indigo to blazing orange. At the summit, you dismount and watch the sun emerge over an ocean of sand in complete silence, broken only by the soft padding of camel hooves. Most desert camps and hotels arrange this daily excursion.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=800',
    rating: 4.8,
    price: '200-400 MAD per person',
    hours: 'Departure 5:00 AM (varies by season)',
    icon: Sunrise,
    category: 'Experience',
  },
  {
    name: 'Gnaoua Village (Khamlia)',
    slug: 'gnaoua-village',
    description:
      'Located about 7 kilometers south of Merzouga, the village of Khamlia is home to a community descended from sub-Saharan African people who were brought to Morocco centuries ago via trans-Saharan trade routes. The village is famous for its Gnaoua musicians, who perform hypnotic spiritual music using metal castanets (qraqeb), bass drums, and call-and-response chanting. Visitors can attend informal performances in the village, learn about Gnaoua traditions, and purchase locally made crafts.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    rating: 4.5,
    price: 'Free (donations appreciated, 50-100 MAD customary)',
    hours: 'Performances typically 10:00 AM - 5:00 PM',
    icon: Music,
    category: 'Cultural Experience',
  },
  {
    name: 'Dayet Srji (Seasonal Lake)',
    slug: 'dayet-srji',
    description:
      'A remarkable seasonal lake that appears in the desert after winter and spring rains, creating a surreal landscape of water surrounded by Saharan dunes. When filled, the lake attracts an astonishing array of birdlife, including flamingos, which create a pink-and-orange spectacle against the golden sand. The sight of flamingos in the Sahara Desert is one of Morocco\'s most unexpected natural wonders. Even when dry, the salt flats create beautiful geometric patterns. Best visited between February and April.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    rating: 4.3,
    price: 'Free',
    hours: 'Accessible during daylight hours',
    icon: Droplets,
    category: 'Natural Phenomenon',
  },
  {
    name: 'Khamlia Village',
    slug: 'khamlia-village',
    description:
      'Beyond the Gnaoua music performances, Khamlia village itself is a fascinating destination that offers insight into the diverse ethnic heritage of the Saharan region. The village maintains traditions distinct from the surrounding Amazigh communities, including unique cuisine, textile designs, and oral histories tracing back to the ancient kingdoms of West Africa. Community-led tours take visitors through the village, where you can see traditional mud-brick architecture and learn about daily life at the edge of the desert.',
    image: 'https://images.unsplash.com/photo-1545071677-8e71b0d2c3c7?q=80&w=800',
    rating: 4.2,
    price: 'Free (guided village tour 100 MAD)',
    hours: 'Daylight hours',
    icon: Compass,
    category: 'Cultural Heritage',
  },
  {
    name: 'Fossil Mines',
    slug: 'fossil-mines',
    description:
      'The region around Merzouga was once covered by a prehistoric ocean, and the desert floor is rich with fossils dating back 350 to 500 million years. Several open fossil mines near the village of Taouz allow visitors to see trilobites, ammonites, and orthoceras embedded in the rock. Local artisans polish and shape the fossil-bearing stone into decorative items, tables, and jewelry. A visit to the mines offers a perspective-shifting reminder that this vast desert was once beneath the sea.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    rating: 4.1,
    price: '50-100 MAD (guided tour)',
    hours: '8:00 AM - 5:00 PM daily',
    icon: Pickaxe,
    category: 'Geological Site',
  },
];

export default function MerzougaAttractionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Attractions in Merzouga',
    description: 'The best desert attractions, dunes, and cultural experiences in Merzouga, Morocco.',
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
              'url(https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2800)',
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
            <Link href="/cities/merzouga" className="hover:text-white transition-colors">Merzouga</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Merzouga Attractions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            At the edge of the Sahara, where golden dunes tower 150 meters high and flamingos wade in desert lakes, Merzouga offers Morocco&apos;s most otherworldly experiences.
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
            Experience the Sahara
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Go beyond sightseeing with unique desert experiences, from sandboarding to stargazing under the clearest skies in Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/merzouga/experiences"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Compass className="w-4 h-4" /> Desert Experiences
            </Link>
            <Link
              href="/cities/merzouga"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Merzouga Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
