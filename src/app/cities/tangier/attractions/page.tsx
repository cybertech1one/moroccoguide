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
  Mountain,
  Church,
  TreePine,
  Globe,
  Camera,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 8 Attractions in Tangier | Must-Visit Landmarks & Sites',
  description:
    'Discover the best attractions in Tangier, Morocco. From the legendary Caves of Hercules to the historic Kasbah Museum, explore the top landmarks of this gateway city between Africa and Europe.',
  openGraph: {
    title: 'Top 8 Attractions in Tangier',
    description:
      'Explore the best landmarks, museums, and historic sites in Tangier, Morocco.',
    url: 'https://cityguide.ma/cities/tangier/attractions',
  },
};

const attractions = [
  {
    name: 'Caves of Hercules',
    slug: 'caves-of-hercules',
    description:
      'A spectacular natural cave system located at Cap Spartel, where the Atlantic Ocean meets the Mediterranean Sea. According to Greek mythology, Hercules rested here after completing his twelve labors. The cave features a famous opening shaped like the map of Africa, through which sunlight streams in during the afternoon. The interior reveals both natural formations and evidence of Phoenician-era stone quarrying.',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    rating: 4.5,
    price: '60 MAD',
    hours: '9:00 AM - 6:00 PM daily',
    icon: Mountain,
    category: 'Natural Wonder',
  },
  {
    name: 'Kasbah Museum',
    slug: 'kasbah-museum',
    description:
      'Housed in the former Sultan\'s palace of Dar el-Makhzen, this museum sits at the highest point of the medina and offers a comprehensive journey through the region\'s history. The collection spans from prehistoric tools to Islamic art, with notable Roman mosaics from the ancient city of Volubilis. The palace itself is a masterpiece of Moroccan architecture with ornate carved ceilings, zellij tilework, and a serene Andalusian garden.',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa1ccaf?q=80&w=800',
    rating: 4.3,
    price: '20 MAD',
    hours: '9:00 AM - 4:00 PM (Closed Tuesdays)',
    icon: Landmark,
    category: 'Museum',
  },
  {
    name: 'Petit Socco',
    slug: 'petit-socco',
    description:
      'The beating heart of Tangier\'s old medina, this intimate square was once the center of the city\'s social and commercial life. In the 1950s and 60s, it was the gathering place for literary legends like Paul Bowles, William Burroughs, and Jack Kerouac. Today, its cafes still buzz with life as locals sip mint tea and tourists soak in the atmosphere of this storied intersection of cultures.',
    image: 'https://images.unsplash.com/photo-1545071677-8e71b0d2c3c7?q=80&w=800',
    rating: 4.2,
    price: 'Free',
    hours: 'Open 24 hours',
    icon: Globe,
    category: 'Historic Square',
  },
  {
    name: 'Grand Socco',
    slug: 'grand-socco',
    description:
      'Officially named Place du 9 Avril 1947, this large plaza marks the gateway between the old medina and the modern ville nouvelle. Surrounded by cinemas, cafes, and the colorful Mendoubia Gardens, it serves as Tangier\'s main gathering point. The daily market here sells everything from fresh produce to traditional clothing. The square commemorates the historic speech Sultan Mohammed V gave here advocating for Moroccan independence.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    rating: 4.0,
    price: 'Free',
    hours: 'Open 24 hours',
    icon: MapPin,
    category: 'Historic Square',
  },
  {
    name: 'Cap Spartel',
    slug: 'cap-spartel',
    description:
      'Standing at the northwestern tip of Africa where the Atlantic and Mediterranean converge, Cap Spartel is a dramatic headland crowned by a 19th-century lighthouse. The panoramic views from here are breathtaking, with Spain visible across the Strait of Gibraltar on clear days. Below the cape, pristine beaches stretch for kilometers, offering some of the best surfing spots near Tangier. The lighthouse, built in 1864, was once maintained by an international commission.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    rating: 4.6,
    price: 'Free',
    hours: 'Sunrise to sunset',
    icon: Mountain,
    category: 'Natural Landmark',
  },
  {
    name: 'American Legation Museum',
    slug: 'american-legation-museum',
    description:
      'The first American public property outside the United States, this historic building in the medina served as the U.S. diplomatic mission to Morocco from 1821 to 1956. Morocco was the first country to recognize American independence in 1777. Now a museum, it houses an eclectic collection including paintings by Moroccan and American artists, historical documents, and a room dedicated to Paul Bowles, the American writer who made Tangier his home.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=800',
    rating: 4.4,
    price: '20 MAD',
    hours: '10:00 AM - 5:00 PM (Mon-Fri), 10:00 AM - 3:00 PM (Sat)',
    icon: Landmark,
    category: 'Museum',
  },
  {
    name: 'Mendoubia Gardens',
    slug: 'mendoubia-gardens',
    description:
      'A lush urban oasis adjacent to the Grand Socco, these beautiful gardens were once the grounds of the Mendoub\'s palace during Tangier\'s international zone era. Towering banyan trees, some over 800 years old, create a canopy of shade over manicured paths. The gardens feature historical cannons, a monument to Moroccan independence, and benches where locals come to escape the medina\'s bustle. It is one of the most peaceful spots in the city center.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800',
    rating: 4.1,
    price: 'Free',
    hours: '8:00 AM - 6:30 PM daily',
    icon: TreePine,
    category: 'Park & Garden',
  },
  {
    name: 'Church of St Andrew',
    slug: 'church-of-st-andrew',
    description:
      'A unique Anglican church built in 1894 in Moorish architectural style, blending Christian worship with Islamic design. The Lord\'s Prayer is inscribed in Arabic above the chancel arch, and the interior features intricate carved woodwork reminiscent of a mosque. The adjacent cemetery holds the graves of notable figures from Tangier\'s international era, including Walter Harris, the Times correspondent, and Sir Harry Maclean, a Scottish officer who served the Moroccan Sultan.',
    image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=800',
    rating: 4.2,
    price: 'Free (donations welcome)',
    hours: '9:30 AM - 12:30 PM, 2:30 PM - 5:30 PM (Mon-Sat)',
    icon: Church,
    category: 'Religious Site',
  },
];

export default function TangierAttractionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Attractions in Tangier',
    description: 'The best landmarks, museums, and historic sites to visit in Tangier, Morocco.',
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
              'url(https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2800)',
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
            <Link href="/cities/tangier" className="hover:text-white transition-colors">Tangier</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Tangier Attractions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Explore the gateway between Africa and Europe. From mythical caves to storied cafes, Tangier is where continents, cultures, and centuries converge.
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
            Planning a Visit to Tangier?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover where to eat, where to stay, and how to make the most of your time in this legendary port city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/tangier/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Camera className="w-4 h-4" /> Tangier Restaurants
            </Link>
            <Link
              href="/cities/tangier"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Tangier Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
