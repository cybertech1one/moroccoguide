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
  Crown,
  Building2,
  Palette,
  Castle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top 10 Attractions in Rabat | Morocco\'s Capital City Landmarks',
  description:
    'Explore the best attractions in Rabat, Morocco\'s elegant capital. From the UNESCO-listed Kasbah of the Udayas to the iconic Hassan Tower, discover 10 must-visit landmarks.',
  openGraph: {
    title: 'Top 10 Attractions in Rabat',
    description:
      'Discover the best landmarks, museums, and historic sites in Morocco\'s capital city.',
    url: 'https://cityguide.ma/cities/rabat/attractions',
  },
};

const attractions = [
  {
    name: 'Kasbah of the Udayas',
    slug: 'kasbah-udayas',
    description:
      'A UNESCO World Heritage Site perched on a cliff overlooking the Atlantic Ocean and the mouth of the Bou Regreg river. This 12th-century fortress was built by the Almohad dynasty and features a stunning monumental gate, whitewashed houses with blue trim reminiscent of Chefchaouen, and the serene Andalusian Gardens. The narrow streets inside are filled with artisan workshops and small cafes where you can sip tea while watching the waves crash below.',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    rating: 4.7,
    price: 'Free',
    hours: 'Open 24 hours (gardens 8:00 AM - 6:30 PM)',
    icon: Castle,
    category: 'UNESCO Heritage',
  },
  {
    name: 'Hassan Tower',
    slug: 'hassan-tower',
    description:
      'The iconic unfinished minaret of a mosque that was intended to be the largest in the world when construction began in 1195 under Sultan Yacoub al-Mansour. Standing at 44 meters tall, it was meant to reach 86 meters before the sultan\'s death halted the project. The surrounding field of 348 stone columns marks where the grand prayer hall would have stood. The tower\'s intricate carved stonework showcases the peak of Almohad architectural achievement.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    rating: 4.8,
    price: 'Free',
    hours: 'Open 24 hours (exterior)',
    icon: Landmark,
    category: 'Historic Monument',
  },
  {
    name: 'Chellah Necropolis',
    slug: 'chellah-necropolis',
    description:
      'A hauntingly beautiful medieval fortified necropolis built atop the ruins of the ancient Roman city of Sala Colonia. The Merinid rulers constructed tombs, a mosque, and a madrasa here in the 14th century, now atmospheric ruins overgrown with fig trees and bougainvillea. Hundreds of storks nest in the crumbling minarets, and legend says the sacred pool is home to enchanted eels. The site offers a unique layering of Roman and Islamic history.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=800',
    rating: 4.6,
    price: '70 MAD',
    hours: '8:30 AM - 6:30 PM daily',
    icon: Landmark,
    category: 'Archaeological Site',
  },
  {
    name: 'Royal Palace',
    slug: 'royal-palace',
    description:
      'The official residence of King Mohammed VI, known as Dar al-Makhzen, is an enormous complex covering over 30 hectares in the heart of Rabat. While the interior is closed to the public, the magnificent ceremonial entrance gate with its green-tiled roof, intricate brass doors, and uniformed royal guards on horseback is a spectacle in itself. The expansive mechouar (royal parade ground) is surrounded by immaculate gardens. Friday prayers bring a formal procession.',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa1ccaf?q=80&w=800',
    rating: 4.3,
    price: 'Free (exterior only)',
    hours: 'Exterior viewable 24 hours',
    icon: Crown,
    category: 'Royal Residence',
  },
  {
    name: 'Mohammed VI Museum of Modern and Contemporary Art',
    slug: 'mohammed-vi-museum',
    description:
      'Morocco\'s first institution dedicated entirely to modern and contemporary art, opened in 2014. The museum houses a rotating collection of works by Moroccan and international artists spanning painting, sculpture, photography, and video art. The building itself is a striking piece of modern architecture with clean lines and abundant natural light. Temporary exhibitions focus on the dialogue between Moroccan artistic traditions and global contemporary movements.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800',
    rating: 4.4,
    price: '40 MAD',
    hours: '10:00 AM - 6:00 PM (Closed Tuesdays)',
    icon: Palette,
    category: 'Museum',
  },
  {
    name: 'Rabat Medina',
    slug: 'rabat-medina',
    description:
      'Smaller and more relaxed than the medinas of Fes or Marrakech, Rabat\'s old town offers an authentic shopping experience without the intense hustle. The main artery, Rue des Consuls, is lined with carpet shops, leather goods stores, and pottery vendors. The medina dates to the 17th century when Andalusian refugees settled here, bringing their architectural style. It is an excellent place for first-time visitors to Morocco to experience medina culture at a comfortable pace.',
    image: 'https://images.unsplash.com/photo-1545071677-8e71b0d2c3c7?q=80&w=800',
    rating: 4.2,
    price: 'Free',
    hours: 'Shops open 9:00 AM - 7:00 PM (most closed Sundays)',
    icon: Building2,
    category: 'Historic District',
  },
  {
    name: 'Andalusian Gardens',
    slug: 'andalusian-gardens',
    description:
      'Nestled within the Kasbah of the Udayas, these tranquil gardens were laid out during the French Protectorate in the traditional Andalusian style. Orange and lemon trees line geometric pathways, jasmine and bougainvillea perfume the air, and the sound of birdsong replaces the bustle of the city outside. The gardens offer sweeping views of the Bou Regreg river and the neighboring city of Sale. It is the perfect place for a peaceful midday escape.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800',
    rating: 4.5,
    price: 'Free',
    hours: '8:00 AM - 6:30 PM daily',
    icon: TreePine,
    category: 'Garden',
  },
  {
    name: 'Mausoleum of Mohammed V',
    slug: 'mausoleum-mohammed-v',
    description:
      'A masterpiece of modern Alaouite architecture, this mausoleum houses the tombs of King Mohammed V and his two sons, King Hassan II and Prince Abdallah. The interior is breathtaking, with Italian white marble floors, hand-carved zellij tilework, gilded mahogany ceilings, and a stunning chandelier. Royal guards in traditional red and white uniforms stand at the entrance. Located adjacent to the Hassan Tower, it forms one of Rabat\'s most important memorial complexes.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    rating: 4.8,
    price: 'Free',
    hours: '8:30 AM - 6:00 PM daily',
    icon: Crown,
    category: 'Royal Mausoleum',
  },
  {
    name: 'Rabat Zoo (Jardin Zoologique)',
    slug: 'rabat-zoo',
    description:
      'One of North Africa\'s finest zoological parks, reopened in 2012 after a major renovation. The zoo is organized by ecosystem, with sections representing the Atlas Mountains, Sahara Desert, African savanna, and tropical wetlands. Home to Atlas lions, Barbary macaques, and numerous bird species, many exhibits focus on North African and endangered species conservation. The park is beautifully landscaped with walking trails, picnic areas, and educational displays.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=800',
    rating: 4.1,
    price: '50 MAD (adults), 30 MAD (children)',
    hours: '10:00 AM - 6:00 PM daily',
    icon: TreePine,
    category: 'Zoo & Wildlife',
  },
  {
    name: 'Sale Medina',
    slug: 'sale-medina',
    description:
      'Just across the Bou Regreg river from Rabat, the ancient city of Sale is often overlooked by tourists but rewards those who venture across with an authentic and untouristy medina experience. Founded in the 11th century, Sale was once a notorious base for the Barbary pirates known as the Sale Rovers. Key sights include the Medersa of Abu al-Hassan with its exquisite stucco carvings, the Grand Mosque, and the Bab Mrisa gate that once allowed ships to enter the city walls.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    rating: 4.0,
    price: 'Free',
    hours: 'Open 24 hours',
    icon: Building2,
    category: 'Historic District',
  },
];

export default function RabatAttractionsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Attractions in Rabat',
    description: 'The best landmarks, museums, and historic sites to visit in Rabat, Morocco.',
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
            <Link href="/cities/rabat" className="hover:text-white transition-colors">Rabat</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Attractions</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Rabat Attractions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco&apos;s elegant capital blends ancient heritage with modern sophistication. Explore UNESCO World Heritage sites, royal monuments, and hidden gardens.
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
            Continue Exploring Rabat
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            From refined dining to boutique riads, discover everything Morocco&apos;s capital has to offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/rabat/restaurants"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Rabat Restaurants
            </Link>
            <Link
              href="/cities/rabat"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Full Rabat Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
