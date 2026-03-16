import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Calendar,
  DollarSign,
  Sun,
  Sunrise,
  Coffee,
  Camera,
  Utensils,
  Bed,
  Car,
  Mountain,
  Star,
  Shield,
  Luggage,
  Thermometer,
  Droplets,
  ArrowRight,
  CheckCircle2,
  Info,
  Phone,
  Mail,
  Waves,
  Building2,
  Landmark,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: '10-Day Morocco Grand Tour - Casablanca to Essaouira Complete Itinerary | CityGuide',
  description:
    'The ultimate 10-day Morocco grand tour: Casablanca, Rabat, Chefchaouen, Fes, Merzouga Sahara, Ouarzazate, Marrakech, and Essaouira. Day-by-day guide with distances, costs, and expert tips.',
  keywords: [
    'Morocco 10 day itinerary',
    'Morocco grand tour',
    'Casablanca to Essaouira route',
    'Morocco road trip 10 days',
    'Morocco complete itinerary',
    'Chefchaouen Fes Sahara Marrakech',
    'Morocco two week itinerary',
    'best Morocco route',
  ],
  openGraph: {
    title: '10-Day Morocco Grand Tour | CityGuide',
    description:
      'The complete Morocco experience in 10 days: eight cities, the Sahara Desert, Atlas Mountains, and the Atlantic coast.',
    url: 'https://citytoursmorocco.com/itineraries/10-day-grand-tour',
    images: [
      {
        url: '/images/hero-chefchaouen.webp',
        width: 1200,
        height: 630,
        alt: 'Chefchaouen blue city streets in Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/itineraries/10-day-grand-tour' },
};

/* ================================================================
   JSON-LD
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: '10-Day Morocco Grand Tour',
    description:
      'The complete Morocco experience: Casablanca, Rabat, Chefchaouen, Fes, Sahara Desert, Ouarzazate, Marrakech, and Essaouira.',
    url: 'https://citytoursmorocco.com/itineraries/10-day-grand-tour',
    touristType: 'Cultural',
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 8,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: 'Casablanca' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Place', name: 'Rabat' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Place', name: 'Chefchaouen' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Place', name: 'Fes' } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Place', name: 'Merzouga' } },
        { '@type': 'ListItem', position: 6, item: { '@type': 'Place', name: 'Ouarzazate' } },
        { '@type': 'ListItem', position: 7, item: { '@type': 'Place', name: 'Marrakech' } },
        { '@type': 'ListItem', position: 8, item: { '@type': 'Place', name: 'Essaouira' } },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '900',
      highPrice: '5000',
      priceCurrency: 'USD',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ================================================================
   HELPER: Day Card Component
   ================================================================ */

interface DayActivity {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function DayCard({
  dayNumber,
  title,
  description,
  activities,
  accommodation,
  isLast = false,
  isFeatured = false,
}: {
  dayNumber: number;
  title: string;
  description: string;
  activities: DayActivity[];
  accommodation: string;
  isLast?: boolean;
  isFeatured?: boolean;
}) {
  return (
    <div className={`relative pl-8 md:pl-12 pb-12 ${!isLast ? 'border-l-2 border-[var(--color-secondary)]/30' : ''}`}>
      <div
        className={`absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-[var(--surface-muted)] ${
          isFeatured ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-secondary)]'
        }`}
      />
      <div className={isFeatured ? 'card-featured p-6 md:p-8' : 'card-moroccan p-6 md:p-8'}>
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`px-3 py-1 rounded-full font-heading font-bold text-sm ${
              isFeatured
                ? 'bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)]'
                : 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
            }`}
          >
            Day {dayNumber}
          </span>
          <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">{title}</h3>
        </div>
        <p className="text-text-secondary leading-relaxed mb-6">{description}</p>

        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">{activity.icon}</div>
              <div>
                <p className="font-heading font-semibold text-text-primary">{activity.time}: {activity.title}</p>
                <p className="text-sm text-text-secondary">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
          <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
            <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
            Where to Stay
          </p>
          <p className="text-sm text-text-secondary">{accommodation}</p>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function TenDayGrandTourPage() {
  return (
    <>
      <JsonLd />

      {/* -- Breadcrumb -- */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li>
            <Link href="/itineraries" className="hover:text-primary transition-colors">
              Itineraries
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">10-Day Grand Tour</li>
        </ol>
      </nav>

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-secondary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-chefchaouen.webp"
            alt="Scenic view of Chefchaouen blue streets in the Rif Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              10-Day Itinerary
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Grand Tour of Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Eight extraordinary destinations across 2,000 kilometers -- from Art Deco Casablanca
              to the windswept Atlantic coast of Essaouira, with imperial cities, blue villages,
              Saharan dunes, and the High Atlas in between.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">10 Days / 9 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">8 Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">~2,000 km Total</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">$90-500/day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Trip Overview -- */}
      <section className="container-morocco py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Trip Overview
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            The Grand Tour is for travelers who want to see it all. Starting in cosmopolitan
            Casablanca, this route traces a sweeping loop through Morocco&apos;s most diverse
            landscapes and culturally rich cities. You will experience the political capital of
            Rabat, the impossibly blue streets of Chefchaouen, the medieval wonder of Fes, the
            golden Sahara at Merzouga, the film-set landscapes of Ouarzazate, the sensory overload
            of Marrakech, and the bohemian Atlantic charm of Essaouira. Each day brings a completely
            different Morocco.
          </p>

          {/* Route */}
          <div className="card-moroccan p-6 mb-8">
            <h3 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
              Route Overview
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                'Casablanca',
                'Rabat',
                'Chefchaouen',
                'Fes',
                'Merzouga',
                'Ouarzazate',
                'Marrakech',
                'Essaouira',
              ].map((place, idx, arr) => (
                <span key={place} className="inline-flex items-center">
                  <span className="px-3 py-1.5 rounded-full bg-[var(--color-sand-100)] text-text-primary font-medium border border-[var(--border-light)]">
                    {place}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 mx-1 text-[var(--color-secondary)]" />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="card-moroccan p-4 text-center">
              <Sun className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Best Season</p>
              <p className="text-sm text-text-muted">Mar-May, Sep-Nov</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Car className="w-6 h-6 text-[var(--color-secondary)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Total Distance</p>
              <p className="text-sm text-text-muted">~2,000 km</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-green)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Budget Range</p>
              <p className="text-sm text-text-muted">$900-$5,000 total</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Star className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Difficulty</p>
              <p className="text-sm text-text-muted">Moderate (long drives)</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day-by-Day Timeline -- */}
      <section className="bg-[var(--surface-muted)] py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-10 text-center">
              Day-by-Day Itinerary
            </h2>

            <DayCard
              dayNumber={1}
              title="Casablanca -- Art Deco & the Great Mosque"
              description="Arrive in Morocco's largest city and economic capital. Casablanca surprises visitors with its French colonial architecture, contemporary art scene, and the jaw-dropping Hassan II Mosque."
              activities={[
                {
                  time: 'Morning',
                  title: 'Arrival & Hassan II Mosque',
                  description: 'Fly into Mohammed V Airport (CMN). Transfer to hotel (30 min, ~300 MAD / $30 by taxi). Visit the Hassan II Mosque -- the third largest in the world with its 210-meter minaret and retractable roof over the ocean. Guided tour: 130 MAD ($13). Non-Muslim visitors can enter during scheduled tour times (9:00, 10:00, 11:00 AM, 2:00 PM).',
                  icon: <Landmark className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Art Deco District & Corniche',
                  description: 'Walk through the Habous Quarter (New Medina) built in the 1930s, blending Moroccan and French architectural styles. Stroll the Corniche seafront promenade and stop at Rick\'s Cafe (150-250 MAD / $15-25) -- the recreation of the bar from the film Casablanca.',
                  icon: <Building2 className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: 'Evening',
                  title: 'Dinner in Casablanca',
                  description: 'Dine at La Sqala (120-200 MAD / $12-20) in a converted 18th-century fortification, or splurge at Le Cabestan (300-500 MAD / $30-50) overlooking the crashing Atlantic waves.',
                  icon: <Utensils className="w-5 h-5 text-[var(--color-accent)]" />,
                },
              ]}
              accommodation="Budget: Ibis Casablanca (400-600 MAD / $40-60) -- Mid-range: Hotel & Spa Le Doge (1,200-1,800 MAD / $120-180) -- Luxury: Four Seasons Casablanca (3,000+ MAD / $300+)"
            />

            <DayCard
              dayNumber={2}
              title="Rabat -- Morocco's Elegant Capital"
              description="A 1-hour drive north (87 km) brings you to Rabat, the political capital. More refined and less chaotic than other Moroccan cities, Rabat rewards with UNESCO sites, excellent museums, and a stunning coastline."
              activities={[
                {
                  time: '9:00 AM',
                  title: 'Hassan Tower & Mausoleum',
                  description: 'Visit the iconic Hassan Tower -- the unfinished minaret of a 12th-century mosque that would have been the world\'s largest. Next door, the Mausoleum of Mohammed V features exquisite marble, zellige, and carved wood. Free entry to both. Allow 1 hour.',
                  icon: <Landmark className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '11:00 AM',
                  title: 'Kasbah of the Udayas',
                  description: 'Explore this 12th-century fortress overlooking the Bou Regreg River. The Andalusian Gardens inside are a peaceful oasis. Walk down to the surf beach below where locals ride the waves. Free entry. Allow 1.5 hours.',
                  icon: <Camera className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Chellah Necropolis',
                  description: 'Visit the medieval fortified Chellah (70 MAD / $7) -- a haunting ruin of a Roman settlement later converted to a royal burial ground. Storks nest atop the crumbling minarets. Drive north to Chefchaouen (280 km, ~4 hours).',
                  icon: <Car className="w-5 h-5 text-[var(--color-accent)]" />,
                },
              ]}
              accommodation="Arrive in Chefchaouen by evening. Budget: Dar Echchaouen (250-400 MAD / $25-40) -- Mid-range: Lina Ryad & Spa (600-1,000 MAD / $60-100) -- Luxury: Casa Hassan (1,200+ MAD / $120+)"
            />

            <DayCard
              dayNumber={3}
              title="Chefchaouen -- The Blue Pearl"
              description="A full day in Morocco's most photogenic town. Nestled in the Rif Mountains at 600 meters elevation, Chefchaouen's medina is entirely washed in shades of blue -- from powder to cobalt to cerulean."
              activities={[
                {
                  time: '8:00 AM',
                  title: 'Morning in the Blue Medina',
                  description: 'The early morning light is magical in Chefchaouen. Wander the quiet streets before the day-trippers arrive. Visit the Place Outa el Hammam, the central square with its 15th-century kasbah (10 MAD / $1). The medina is compact and easy to navigate without a guide.',
                  icon: <Camera className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '11:00 AM',
                  title: 'Ras El Maa Waterfall & Hike',
                  description: 'Walk to the Ras El Maa spring on the eastern edge of the medina where local women wash clothes in the river. Continue up to the abandoned Spanish Mosque (30 min hike) for panoramic views of the entire blue town against the green Rif Mountains. Free.',
                  icon: <Mountain className="w-5 h-5 text-[var(--color-green)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Local Crafts & Relaxation',
                  description: 'Chefchaouen is known for handwoven blankets, goat cheese, and unique woven bags. Browse the smaller artisan shops away from the main square for better prices. Lunch at Aladdin (40-80 MAD / $4-8) or Bab Ssour (60-100 MAD / $6-10). Relax at your riad in the afternoon.',
                  icon: <Coffee className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
              ]}
              accommodation="Same riad as arrival night in Chefchaouen."
            />

            <DayCard
              dayNumber={4}
              title="Chefchaouen to Fes -- Through the Rif"
              description="Drive south through the Rif Mountains to Fes, Morocco's cultural and spiritual capital. The 210 km drive takes approximately 4 hours through stunning mountain scenery."
              activities={[
                {
                  time: '9:00 AM',
                  title: 'Depart for Fes',
                  description: 'Morning departure heading south on the N13. The road winds through the western Rif with views of terraced hillsides, cannabis fields (legal for traditional use), and remote Berber villages. Stop at roadside stalls for fresh figs and walnuts in season. Private transfer: 1,200-1,800 MAD ($120-180). CTM bus: 75 MAD ($8).',
                  icon: <Car className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: '1:00 PM',
                  title: 'Arrive in Fes & Lunch',
                  description: 'Check into your riad in Fes el-Bali (the old medina). Lunch at Cafe Clock (80-150 MAD / $8-15) -- famous for its camel burger and cultural programming. The riad experience in Fes is often even more atmospheric than Marrakech, with quieter, more authentic surroundings.',
                  icon: <Utensils className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'First Medina Exploration',
                  description: 'Take a gentle orientation walk through Fes el-Bali. The medina has over 9,000 alleyways -- getting lost is part of the experience. Visit the Bab Boujloud (Blue Gate), the main entrance to the medina. As evening falls, the call to prayer echoes from hundreds of minarets simultaneously -- a haunting and unforgettable sound.',
                  icon: <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
              ]}
              accommodation="Budget: Dar Seffarine (300-500 MAD / $30-50) -- Mid-range: Riad Laaroussa (1,000-1,600 MAD / $100-160) -- Luxury: Palais Faraj (2,500+ MAD / $250+)"
            />

            <DayCard
              dayNumber={5}
              title="Fes -- Deep Dive into the Medieval City"
              description="A full day with a licensed guide to explore the labyrinthine medina of Fes el-Bali. Founded in 789 AD, this is the best-preserved medieval city in the Arab world."
              activities={[
                {
                  time: '9:00 AM',
                  title: 'Guided Medina Tour',
                  description: 'Hire a licensed guide (full day: 500-800 MAD / $50-80) to navigate the medina\'s highlights: Al-Qarawiyyin Mosque (founded 859 AD -- the world\'s oldest continuously operating university), Bou Inania Medersa (30 MAD / $3), and the legendary Chouara Tannery with its honeycomb of dye vats.',
                  icon: <Landmark className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '12:30 PM',
                  title: 'Traditional Fassi Lunch',
                  description: 'Try the iconic Fassi dishes: pastilla (pigeon pie with almonds and cinnamon), rfissa (lentil and fenugreek chicken), or tanjia (slow-cooked lamb). The Ruined Garden (100-180 MAD / $10-18) serves in a gorgeous courtyard. Dar Roumana (200-350 MAD / $20-35) for refined dining.',
                  icon: <Utensils className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Artisan Workshops & Merenid Tombs',
                  description: 'Visit zellige tile workshops, brass workers, and the famous leather tanning process. End the day at the Merenid Tombs on the hill above Fes for a sunset panorama over the entire medina -- the best view in the city. Free entry.',
                  icon: <Camera className="w-5 h-5 text-[var(--color-accent)]" />,
                },
              ]}
              accommodation="Same riad as Day 4 in Fes."
            />

            <DayCard
              dayNumber={6}
              title="Fes to Merzouga -- Into the Sahara"
              description="The longest drive of the trip (460 km, 7-8 hours), but arguably the most scenic. Cross the Middle Atlas, pass through the Ziz Gorge, and arrive at the towering dunes of Erg Chebbi."
              activities={[
                {
                  time: '7:00 AM',
                  title: 'Early Departure via Ifrane & Azrou',
                  description: 'Head south through Ifrane (the "Switzerland of Morocco" at 1,650m) and Azrou, where you can stop to see Barbary macaques in the cedar forests. The landscape shifts from green mountains to arid desert as you descend toward Errachidia.',
                  icon: <Car className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: '1:00 PM',
                  title: 'Lunch in Midelt & Ziz Gorge',
                  description: 'Stop in Midelt for lunch (60-100 MAD / $6-10) at a roadside restaurant. Continue through the spectacular Ziz Gorge with its palm-lined valley and ancient kasbahs. Stop at the Ziz Valley viewpoint for photos.',
                  icon: <Utensils className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '4:00 PM',
                  title: 'Camel Trek & Desert Camp',
                  description: 'Arrive in Merzouga as the afternoon heat begins to fade. Mount dromedary camels for a 1.5-hour trek into the Erg Chebbi dunes. Watch the sunset from the top of a 150-meter dune. Dinner, Berber music, and stargazing at your desert camp. Standard camp: 500-800 MAD ($50-80). Luxury: 2,000-4,000 MAD ($200-400).',
                  icon: <Star className="w-5 h-5 text-[var(--color-accent)]" />,
                },
              ]}
              accommodation="Desert camp in Erg Chebbi. Standard camps include dinner, breakfast, and camel trek. Luxury camps add private tents, hot showers, and gourmet dining."
              isFeatured
            />

            <DayCard
              dayNumber={7}
              title="Sahara Sunrise & Drive to Ouarzazate"
              description="Wake for a breathtaking desert sunrise, then journey west along the Route of a Thousand Kasbahs through the Todra and Dades Gorges to Ouarzazate."
              activities={[
                {
                  time: '5:30 AM',
                  title: 'Sahara Sunrise',
                  description: 'Climb the nearest dune to watch the sun rise over the Sahara -- a bucket-list moment as the sand shifts from deep purple to orange to gold. Camel ride back to Merzouga for breakfast and a shower.',
                  icon: <Sunrise className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '9:00 AM',
                  title: 'Todra Gorge',
                  description: 'Drive west to Tinghir (160 km, ~2.5 hours) and stop at the spectacular Todra Gorge -- a narrow canyon with 300-meter vertical walls. Walk through the canyon (free, 30 min). Rock climbers come from around the world for the limestone walls.',
                  icon: <Mountain className="w-5 h-5 text-[var(--color-green)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Dades Valley to Ouarzazate',
                  description: 'Continue through the Dades Valley (160 km, ~2.5 hours) -- stop at the famous Dades Gorge hairpin turns for photos. Arrive in Ouarzazate, the "Gateway to the Sahara." Optional evening visit to Atlas Studios (50 MAD / $5).',
                  icon: <Car className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
              ]}
              accommodation="Budget: Hotel Azoul (300-500 MAD / $30-50) -- Mid-range: Kasbah Dar Daif (600-1,000 MAD / $60-100) -- Luxury: Le Berbere Palace (1,500+ MAD / $150+)"
            />

            <DayCard
              dayNumber={8}
              title="Ouarzazate to Marrakech -- Over the Atlas"
              description="Cross the High Atlas Mountains via the Tizi n'Tichka pass with a stop at the iconic Ait Ben Haddou kasbah. Arrive in Marrakech for two action-packed days."
              activities={[
                {
                  time: '8:00 AM',
                  title: 'Ait Ben Haddou',
                  description: 'Drive 30 km northwest to the UNESCO World Heritage ksar of Ait Ben Haddou. This fortified village has appeared in over 20 films including Gladiator and Game of Thrones. Free entry; local guides 50-100 MAD ($5-10). Allow 1.5 hours.',
                  icon: <Landmark className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '11:00 AM',
                  title: 'Tizi n\'Tichka Pass',
                  description: 'Cross the dramatic Tizi n\'Tichka pass at 2,260 meters -- Morocco\'s highest paved road. Stop at viewpoints for photos of the Atlas peaks. The descent into the Marrakech plain reveals a dramatic landscape change from arid mountains to red-earth plains.',
                  icon: <Mountain className="w-5 h-5 text-[var(--color-green)]" />,
                },
                {
                  time: '3:00 PM',
                  title: 'Arrive in Marrakech',
                  description: 'Check into your riad in the medina. Rest and refresh before an evening visit to Jemaa el-Fnaa for your first taste of the legendary square -- the snake charmers, musicians, food stalls, and storytellers that make it UNESCO\'s "Masterpiece of the Oral and Intangible Heritage of Humanity."',
                  icon: <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
              ]}
              accommodation="Budget: Riad Laayoun (350-500 MAD / $35-50) -- Mid-range: Riad Kniza (800-1,500 MAD / $80-150) -- Luxury: Royal Mansour (5,000+ MAD / $500+)"
            />

            <DayCard
              dayNumber={9}
              title="Marrakech -- Palaces, Gardens & Souks"
              description="A full day in the Red City covering its essential highlights. Marrakech is the most-visited city in Africa for good reason."
              activities={[
                {
                  time: '8:00 AM',
                  title: 'Jardin Majorelle & YSL Museum',
                  description: 'Arrive early at the Majorelle Garden (70 MAD / $7) for the best light and smallest crowds. The cobalt-blue Art Deco villa set among 300+ plant species is unforgettable. Next door, the Yves Saint Laurent Museum (100 MAD / $10) showcases iconic fashion designs. Allow 2.5 hours total.',
                  icon: <Camera className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '11:00 AM',
                  title: 'Bahia Palace & Souks',
                  description: 'Visit the Bahia Palace (70 MAD / $7) then dive into the souks. Each section has its specialty: leather, spices, carpets, metalwork, and textiles. A guided souk tour (200-400 MAD / $20-40) helps navigate and negotiate. Lunch at Nomad (150-250 MAD / $15-25) with terrace views.',
                  icon: <Landmark className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Hammam & Evening Spectacle',
                  description: 'Enjoy a traditional hammam (budget: 20-50 MAD / $2-5 at a public hammam, luxury: 500-1,000 MAD / $50-100 at Les Bains de Marrakech). Evening: return to Jemaa el-Fnaa for the nightly transformation. Dinner at Dar Yacout (500-800 MAD / $50-80) or the food stalls (30-60 MAD / $3-6).',
                  icon: <Droplets className="w-5 h-5 text-[var(--color-accent)]" />,
                },
              ]}
              accommodation="Same riad as Day 8 in Marrakech."
            />

            <DayCard
              dayNumber={10}
              title="Essaouira -- Atlantic Finale"
              description="End your grand tour on the Atlantic coast. Essaouira is a laid-back port city with Portuguese ramparts, Gnaoua music, and some of the best seafood in Morocco."
              activities={[
                {
                  time: '8:00 AM',
                  title: 'Drive to Essaouira',
                  description: 'Depart Marrakech heading west (175 km, 2.5 hours on the modern A7 motorway). Optional stop at an argan oil cooperative en route (free visit, products for sale). The road passes through argan forests where goats famously climb the trees.',
                  icon: <Car className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: '11:00 AM',
                  title: 'Medina & Ramparts',
                  description: 'Explore the UNESCO-listed medina with its whitewashed buildings and blue shutters. Walk the Skala de la Ville -- the 18th-century sea bastions with cannons pointing over the Atlantic. The fishing port is a working harbor where colorful boats line up and fishermen mend nets. Free to explore.',
                  icon: <Waves className="w-5 h-5 text-[var(--color-accent)]" />,
                },
                {
                  time: '1:00 PM',
                  title: 'Seafood Lunch at the Port',
                  description: 'The fish stalls at the port are legendary. Choose your fish from the day\'s catch and have it grilled on the spot: sardines, prawns, calamari, and lobster. A full seafood spread costs 80-150 MAD ($8-15). For a restaurant setting, try La Table by Madada (200-350 MAD / $20-35).',
                  icon: <Utensils className="w-5 h-5 text-[var(--color-secondary)]" />,
                },
                {
                  time: 'Afternoon',
                  title: 'Beach Walk & Sunset',
                  description: 'Walk the wide sandy beach stretching south from the medina. Essaouira is famous for wind -- perfect for kitesurfing and windsurfing (lessons: 400-600 MAD / $40-60 for 2 hours). Watch the sunset from the ramparts or the beach as seagulls wheel overhead -- the perfect end to your Moroccan grand tour.',
                  icon: <Sun className="w-5 h-5 text-[var(--color-accent)]" />,
                },
              ]}
              accommodation="Budget: Riad Baladin (300-500 MAD / $30-50) -- Mid-range: Heure Bleue Palais (1,000-1,600 MAD / $100-160) -- Luxury: Villa de l'O (2,000+ MAD / $200+)"
              isLast
              isFeatured
            />
          </div>
        </div>
      </section>

      {/* -- Budget Breakdown -- */}
      <section className="container-morocco py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Estimated Budget Breakdown
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-green)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Budget</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-green)] mb-4">$900-1,400</p>
              <p className="text-xs text-text-muted mb-4">Per person, 10 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation (9 nights)</span><span className="font-medium">$270-450</span></li>
                <li className="flex justify-between"><span>Transport (bus/shared taxi)</span><span className="font-medium">$120-200</span></li>
                <li className="flex justify-between"><span>Food</span><span className="font-medium">$150-250</span></li>
                <li className="flex justify-between"><span>Activities & Entry Fees</span><span className="font-medium">$100-150</span></li>
                <li className="flex justify-between"><span>Desert Camp</span><span className="font-medium">$50-80</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$90-140</span>
                </li>
              </ul>
            </div>

            <div className="card-featured p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Mid-Range</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4">$2,000-3,000</p>
              <p className="text-xs text-text-muted mb-4">Per person, 10 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation (9 nights)</span><span className="font-medium">$810-1,350</span></li>
                <li className="flex justify-between"><span>Transport (private/mix)</span><span className="font-medium">$400-600</span></li>
                <li className="flex justify-between"><span>Food</span><span className="font-medium">$300-500</span></li>
                <li className="flex justify-between"><span>Activities & Guides</span><span className="font-medium">$200-350</span></li>
                <li className="flex justify-between"><span>Desert Camp</span><span className="font-medium">$100-200</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$200-300</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-secondary)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Luxury</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-secondary)] mb-4">$4,000-7,000+</p>
              <p className="text-xs text-text-muted mb-4">Per person, 10 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation (9 nights)</span><span className="font-medium">$2,000-4,000</span></li>
                <li className="flex justify-between"><span>Private Driver/Car</span><span className="font-medium">$800-1,200</span></li>
                <li className="flex justify-between"><span>Fine Dining</span><span className="font-medium">$500-800</span></li>
                <li className="flex justify-between"><span>Private Guides & Spa</span><span className="font-medium">$500-700</span></li>
                <li className="flex justify-between"><span>Luxury Desert Camp</span><span className="font-medium">$200-400</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$400-700+</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- Packing List -- */}
      <section className="bg-[var(--surface-muted)] py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
              Packing List for the Grand Tour
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[var(--color-secondary)]" />
                  Clothing
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Mix of lightweight and warm layers',
                    'Modest clothing for medinas and rural areas',
                    'Warm jacket (Atlas Mountains, desert nights)',
                    'Rain layer (Chefchaouen, coast)',
                    'Comfortable walking shoes (broken in)',
                    'Sandals or flip-flops',
                    'Sun hat and swimwear',
                    'Scarf (multi-purpose: sun, sand, modesty)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
                  Documents & Tech
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Passport (valid 6+ months)',
                    'Travel insurance (essential)',
                    'Copies of all documents (digital + paper)',
                    'Phone with offline maps & translation app',
                    'Universal power adapter (Type C/E)',
                    'Portable charger (10,000+ mAh)',
                    'Camera with spare batteries & memory cards',
                    'Headphones for long drives',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-[var(--color-secondary)]" />
                  Health & Comfort
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Sunscreen SPF 50+',
                    'Insect repellent (rural areas)',
                    'Basic first aid kit',
                    'Anti-diarrheal medication',
                    'Reusable water bottle with filter',
                    'Hand sanitizer and wet wipes',
                    'Motion sickness tablets (mountain roads)',
                    'Earplugs and eye mask (desert camp)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Book CTA -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/hero-chefchaouen.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-morocco text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for the Grand Tour?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            This 10-day adventure covers the best of Morocco. Our team will customize every detail --
            private drivers, handpicked riads, licensed guides, and seamless city-to-city logistics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bookings@citytoursmorocco.com?subject=10-Day Grand Tour Inquiry"
              className="btn-accent btn-lg"
            >
              <Mail className="w-5 h-5" />
              Request a Custom Quote
            </a>
            <a
              href="tel:+212522000000"
              className="btn-ghost btn-lg border-white/30 text-white hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Call +212 522 000 000
            </a>
          </div>
        </div>
      </section>

      {/* -- Related Itineraries -- */}
      <section className="container-morocco py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8">
            Related Itineraries
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/itineraries/7-day-morocco" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="/images/hero-desert.webp"
                  alt="Vast golden Sahara Desert landscape with rolling dunes on a Morocco road trip"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-heading font-semibold text-sm">7 Days</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-[var(--color-secondary)] transition-colors">
                  7 Days: Best of Morocco
                </h3>
                <p className="text-sm text-text-muted mt-1">The essential highlights route</p>
              </div>
            </Link>

            <Link href="/itineraries/3-day-marrakech" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="/images/hero-marrakech.webp"
                  alt="Aerial rooftop view of Marrakech medina with traditional riads and the Atlas Mountains beyond"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-heading font-semibold text-sm">3 Days</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-[var(--color-secondary)] transition-colors">
                  3 Days in Marrakech
                </h3>
                <p className="text-sm text-text-muted mt-1">The perfect city weekend</p>
              </div>
            </Link>

            <Link href="/itineraries/5-day-desert" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="/images/hero-sahara-sunrise.webp"
                  alt="Windswept golden sand dunes of the Sahara Desert at sunset, Erg Chebbi, Morocco"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-heading font-semibold text-sm">5 Days</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-[var(--color-secondary)] transition-colors">
                  5-Day Desert Adventure
                </h3>
                <p className="text-sm text-text-muted mt-1">Deep Sahara exploration</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
