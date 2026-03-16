import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Sunrise,
  Mountain,
  Tent,
  Car,
  Music,
  Sparkles,
  Telescope,
  Snowflake,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '8 Unique Desert Experiences in Merzouga | Sahara Adventures',
  description:
    'Discover 8 unforgettable desert experiences in Merzouga, Morocco. From sunrise camel treks to sandboarding, desert camping, Berber drumming, and astronomical observation in the Sahara.',
  openGraph: {
    title: '8 Unique Desert Experiences in Merzouga',
    description:
      'The ultimate guide to Sahara adventures in Merzouga, from camel treks to stargazing.',
    url: 'https://cityguide.ma/cities/merzouga/experiences',
  },
};

const experiences = [
  {
    name: 'Sunrise Camel Trek',
    slug: 'sunrise-camel-trek',
    description:
      'Rise before dawn and mount a gentle dromedary camel for the iconic journey into the heart of Erg Chebbi. As you sway gently through the dune valleys in a caravan, the sky transforms from star-filled darkness to a palette of pinks, oranges, and golds. The trek culminates at a high dune summit where you dismount and watch the sun break over an endless horizon of sand. The silence is profound, broken only by the soft breathing of the camels. Most treks last 1-1.5 hours and include mint tea at a viewpoint.',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e5010a0?q=80&w=800',
    rating: 4.9,
    price: '200-400 MAD per person',
    duration: '1.5 hours (departs ~5:00 AM)',
    icon: Sunrise,
    category: 'Signature Experience',
  },
  {
    name: 'Sandboarding',
    slug: 'sandboarding',
    description:
      'Ride the dunes on a board in one of the most exhilarating desert activities available in Merzouga. Standing or sitting on a specially designed sandboard, you slide down the steep faces of Erg Chebbi\'s towering dunes at surprising speeds. No prior experience is necessary, and guides provide boards and basic instruction. The climb back up through soft sand is a workout, but the rush of gliding down a 150-meter dune is well worth the effort. Best in the cooler morning or late afternoon hours.',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=800',
    rating: 4.4,
    price: '150-300 MAD per person',
    duration: '2-3 hours',
    icon: Snowflake,
    category: 'Adventure Sport',
  },
  {
    name: 'Desert Camping Under Stars',
    slug: 'desert-camping',
    description:
      'Spend a night in the Sahara at a luxury or traditional Berber desert camp nestled among the dunes. After a sunset camel ride to camp, settle into your tent, from simple nomad-style shelters to lavish glamping suites with proper beds and private bathrooms. Evening brings a traditional Berber dinner cooked over an open fire, followed by drumming, storytelling, and stargazing. Falling asleep to absolute silence beneath a sky blazing with stars is a life-defining experience that stays with you forever.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=800',
    rating: 4.8,
    price: '400-2,500 MAD per person (budget to luxury)',
    duration: 'Overnight (check-in 4:00 PM, checkout 9:00 AM)',
    icon: Tent,
    category: 'Overnight Experience',
  },
  {
    name: 'Quad Biking',
    slug: 'quad-biking',
    description:
      'Explore the vast desert terrain around Merzouga on a powerful quad bike (ATV), covering far more ground than you could on foot or camelback. Guided excursions take you through a variety of landscapes, from rolling dunes to rocky hamada desert, passing through nomadic encampments and dry river beds. The adrenaline of racing across open desert with the dunes as your backdrop is addictive. Tours typically include safety briefing, equipment, and stops at scenic viewpoints and local villages.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=800',
    rating: 4.3,
    price: '350-600 MAD per person (1-2 hours)',
    duration: '1-2 hours',
    icon: Car,
    category: 'Adventure',
  },
  {
    name: 'Berber Drumming Night',
    slug: 'berber-drumming',
    description:
      'Join local Amazigh and Gnaoua musicians around a campfire for an unforgettable evening of rhythm and song. Participants are given traditional drums (bendir or taarija) and taught basic rhythms that form the foundation of Saharan music. As the night progresses, the music builds in intensity, with call-and-response singing, hand clapping, and the hypnotic metallic rhythm of the qraqeb (iron castanets). Many desert camps include this as part of the overnight experience, but dedicated music sessions can also be arranged.',
    image: 'https://images.unsplash.com/photo-1545071677-8e71b0d2c3c7?q=80&w=800',
    rating: 4.6,
    price: '100-200 MAD per person',
    duration: '2-3 hours (typically 8:00 PM - 11:00 PM)',
    icon: Music,
    category: 'Cultural Experience',
  },
  {
    name: '4x4 Desert Tour',
    slug: '4x4-desert-tour',
    description:
      'Embark on a full-day 4x4 expedition that takes you deep into the Saharan landscape beyond the Erg Chebbi dunes. The route passes through dramatic black desert (hammada), dried lake beds, hidden oases, and remote nomadic settlements. Stops include the Gnaoua village of Khamlia for a music performance, an ancient kohl mine, fossil deposits, and panoramic viewpoints. The tour provides a comprehensive overview of the diverse Saharan ecosystem and the communities that call it home.',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    rating: 4.5,
    price: '600-1,200 MAD per vehicle (up to 4 people)',
    duration: 'Full day (8:00 AM - 5:00 PM)',
    icon: Car,
    category: 'Exploration',
  },
  {
    name: 'Sand Bathing Therapy',
    slug: 'sand-bathing',
    description:
      'An ancient Saharan healing practice that locals have used for centuries, sand bathing involves being buried up to the neck in hot desert sand during the summer months (June through September). Believed to relieve rheumatism, joint pain, and skin conditions, the therapy takes advantage of the mineral-rich sand heated to therapeutic temperatures by the Saharan sun. Sessions are supervised by experienced local practitioners and typically last 15-30 minutes, followed by rest in a shaded tent with herbal tea.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    rating: 4.0,
    price: '100-200 MAD per session',
    duration: '15-30 minutes (available June-September only)',
    icon: Sparkles,
    category: 'Wellness',
  },
  {
    name: 'Astronomical Observation',
    slug: 'stargazing',
    description:
      'The Sahara around Merzouga has virtually zero light pollution, making it one of the finest stargazing locations on Earth. Dedicated astronomical observation sessions are led by knowledgeable guides equipped with telescopes and laser pointers who reveal the wonders of the desert night sky. You will see the Milky Way in breathtaking clarity, identify constellations used by Saharan nomads for navigation, and observe planets, nebulae, and meteor showers in stunning detail. Some luxury camps offer permanent observatory setups.',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa1ccaf?q=80&w=800',
    rating: 4.7,
    price: '150-400 MAD per person',
    duration: '2-3 hours (begins after dark, ~9:00 PM)',
    icon: Telescope,
    category: 'Night Experience',
  },
];

export default function MerzougaExperiencesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Desert Experiences in Merzouga',
    description: 'Unique Sahara Desert experiences and adventures in Merzouga, Morocco.',
    numberOfItems: experiences.length,
    itemListElement: experiences.map((experience, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'TouristAttraction',
        name: experience.name,
        description: experience.description,
        image: experience.image,
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
            <span className="text-white">Experiences</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Desert Experiences
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The Sahara is not just a place to see &mdash; it is a place to feel. From riding camels at sunrise to sleeping under a sky ablaze with stars, these experiences will stay with you for a lifetime.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Experiences Grid */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <div key={experience.slug} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[var(--text-primary)]">
                    {experience.category}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 text-white text-xs">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {experience.rating}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <experience.icon className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{experience.name}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {experience.description}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{experience.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{experience.duration}</span>
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
            Explore Merzouga&apos;s Attractions
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Discover the natural wonders and cultural heritage that make Merzouga one of the most extraordinary destinations in Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/merzouga/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Merzouga Attractions
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
