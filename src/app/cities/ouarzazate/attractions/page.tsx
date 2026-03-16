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
  Mountain,
  Film,
  Castle,
  Clapperboard,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 8 Attractions in Ouarzazate | Gateway to the Sahara',
  description:
    'Discover the best attractions in Ouarzazate, Morocco. From the UNESCO-listed Ait Ben Haddou kasbah to Atlas Studios, explore the Hollywood of Africa and gateway to the Sahara.',
  openGraph: {
    title: 'Top 8 Attractions in Ouarzazate',
    description:
      'Explore kasbahs, film studios, and desert landscapes in Ouarzazate, the door to the Sahara.',
    url: 'https://citytoursmorocco.com/cities/ouarzazate/attractions',
  },
};

const attractions = [
  {
    name: 'Ait Ben Haddou',
    slug: 'ait-ben-haddou',
    description:
      'A UNESCO World Heritage Site and one of the most iconic sights in all of Morocco, this ancient fortified village (ksar) rises dramatically from the banks of the Ounila River. Built entirely of red clay and straw, its tightly packed houses, granaries, and towers represent a masterpiece of pre-Saharan earthen architecture. The ksar has served as a backdrop for numerous Hollywood films including Gladiator, Game of Thrones, and Lawrence of Arabia. A handful of families still inhabit the upper levels.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    rating: 4.9,
    price: 'Free (local guide 100-150 MAD)',
    hours: 'Sunrise to sunset daily',
    icon: Castle,
    category: 'UNESCO Heritage',
  },
  {
    name: 'Taourirt Kasbah',
    slug: 'taourirt-kasbah',
    description:
      'An imposing 19th-century fortress in the center of Ouarzazate that was once home to the powerful Glaoui family who ruled the region. The labyrinthine interior features ornately decorated rooms with carved stucco, painted wooden ceilings, and colored glass windows. The upper terraces provide panoramic views over the town to the Atlas Mountains beyond. Partially restored by UNESCO, the kasbah gives visitors a sense of the opulent lifestyle of Morocco\'s former feudal lords.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=800',
    rating: 4.3,
    price: '20 MAD',
    hours: '8:00 AM - 6:30 PM daily',
    icon: Castle,
    category: 'Historic Kasbah',
  },
  {
    name: 'Atlas Studios',
    slug: 'atlas-studios',
    description:
      'The largest film studio in the world by area, spanning over 30 hectares on the outskirts of Ouarzazate. Since its founding in 1983, Atlas Studios has hosted the production of blockbusters including The Mummy, Kingdom of Heaven, Babel, and portions of Game of Thrones. Guided tours take you through standing sets including an Egyptian temple, a Tibetan monastery, and a medieval Jerusalem street. The studio\'s success earned Ouarzazate its nickname as the "Hollywood of Africa."',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa1ccaf?q=80&w=800',
    rating: 4.2,
    price: '60 MAD (adults), 30 MAD (children)',
    hours: '8:15 AM - 5:45 PM daily',
    icon: Clapperboard,
    category: 'Film Studio',
  },
  {
    name: 'Fint Oasis',
    slug: 'fint-oasis',
    description:
      'A hidden paradise just 15 kilometers south of Ouarzazate, this lush palm oasis sits in a dramatic red-rock canyon that feels like stepping into another world. The fertile valley is home to a small Berber village where families tend date palms, olive groves, and vegetable gardens using traditional irrigation channels (khettaras). The contrast between the green oasis floor and the barren desert cliffs above is extraordinary. Few tourists find their way here, making it a peaceful escape.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800',
    rating: 4.5,
    price: 'Free',
    hours: 'Accessible during daylight hours',
    icon: TreePine,
    category: 'Natural Oasis',
  },
  {
    name: 'Tifoultoute Kasbah',
    slug: 'tifoultoute-kasbah',
    description:
      'A dramatic hilltop kasbah located 8 kilometers west of Ouarzazate, also once belonging to the Glaoui family. The fortress was used as a filming location for Lawrence of Arabia in 1962, putting Ouarzazate on Hollywood\'s map. Now partially converted into a restaurant and hotel, the kasbah offers magnificent views of the surrounding palm groves and the snow-capped Atlas Mountains. The rooftop terrace at sunset is one of the most photographed spots in the region.',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    rating: 4.1,
    price: '10 MAD',
    hours: '8:00 AM - 6:00 PM daily',
    icon: Castle,
    category: 'Historic Kasbah',
  },
  {
    name: 'Cinema Museum',
    slug: 'cinema-museum',
    description:
      'Located in the former Atlas Corporation Studios, this small but fascinating museum celebrates Ouarzazate\'s rich film heritage. Exhibits include original props, costumes, and set pieces from movies filmed in the region, alongside vintage cameras, projectors, and posters. A timeline chronicles every major production shot in and around Ouarzazate, from the 1960s to the present. Film buffs will enjoy identifying props from their favorite movies among the eclectic collection.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    rating: 4.0,
    price: '30 MAD',
    hours: '8:30 AM - 6:00 PM daily',
    icon: Film,
    category: 'Museum',
  },
  {
    name: 'Skoura Palm Grove',
    slug: 'skoura-palm-grove',
    description:
      'An enormous oasis of over 700,000 palm trees stretching along the Dadès Valley about 40 kilometers east of Ouarzazate. The palm grove shelters dozens of ancient kasbahs, the most famous being the 17th-century Amridil Kasbah, featured on the Moroccan 50-dirham note. Cycling or walking through the shaded paths between the palm groves, past rose gardens and almond orchards, is one of the most peaceful experiences in southern Morocco. Best visited in spring when roses bloom.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    rating: 4.6,
    price: 'Free (Amridil Kasbah 20 MAD)',
    hours: 'Accessible during daylight hours',
    icon: TreePine,
    category: 'Natural Landscape',
  },
  {
    name: 'Draa Valley',
    slug: 'draa-valley',
    description:
      'Morocco\'s longest river valley stretches over 200 kilometers southeast from Ouarzazate to Zagora, creating one of the most scenic drives in the country. The road passes through dramatic gorges, ancient kasbahs, and a seemingly endless corridor of date palms. Key stops include the town of Agdz, the ruined kasbah of Tamnougalt, and the oasis villages where Berber, Arab, and Haratin communities maintain traditional ways of life. The journey itself is the attraction.',
    image: 'https://images.unsplash.com/photo-1545071677-8e71b0d2c3c7?q=80&w=800',
    rating: 4.7,
    price: 'Free (guided day tours from 500 MAD)',
    hours: 'Accessible during daylight hours',
    icon: Mountain,
    category: 'Scenic Route',
  },
];

export default function OuarzazateAttractionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Attractions in Ouarzazate',
    description: 'The best kasbahs, film studios, and desert landscapes in Ouarzazate, Morocco.',
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
              'url(https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2800)',
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
            <span className="text-white">Attractions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ouarzazate Attractions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The Hollywood of Africa and gateway to the Sahara. Discover ancient kasbahs, world-famous film studios, and landscapes that have captivated filmmakers and travelers for decades.
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
            Dining in the Desert Gateway
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            After exploring kasbahs and film sets, discover where the locals eat in Ouarzazate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/ouarzazate/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Ouarzazate Restaurants
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
