import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Clock,
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
  Wind,
  Tent,
  Footprints,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: '5-Day Desert Adventure - Marrakech to Merzouga Sahara Itinerary | CityGuide',
  description:
    'Epic 5-day desert adventure from Marrakech through Ait Ben Haddou, Todra Gorge, Merzouga Sahara dunes, and Draa Valley. Complete guide with camel trek details, costs in MAD/USD, and desert camping tips.',
  keywords: [
    'Morocco desert tour',
    'Sahara desert itinerary',
    'Merzouga camel trek',
    'Ait Ben Haddou tour',
    'Todra Gorge Morocco',
    'Draa Valley',
    'Morocco 5 day desert',
    'Erg Chebbi dunes',
    'Morocco desert camp',
    'Marrakech to Sahara',
  ],
  openGraph: {
    title: '5-Day Desert Adventure - Marrakech to Merzouga | CityGuide',
    description:
      'Five days of desert exploration: Ait Ben Haddou, Todra Gorge, Erg Chebbi camel trek, and the Draa Valley.',
    url: 'https://cityguide.ma/itineraries/5-day-desert',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Golden sand dunes of the Sahara Desert at Erg Chebbi, Merzouga',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/itineraries/5-day-desert' },
};

/* ================================================================
   JSON-LD
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: '5-Day Desert Adventure',
    description:
      'An action-packed 5-day desert adventure from Marrakech through Ait Ben Haddou, Todra Gorge, Merzouga Sahara, and the Draa Valley.',
    url: 'https://cityguide.ma/itineraries/5-day-desert',
    touristType: 'Adventure',
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: 'Ait Ben Haddou' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Place', name: 'Todra Gorge' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Place', name: 'Merzouga - Erg Chebbi' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Place', name: 'Draa Valley - Zagora' } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Place', name: 'Return to Marrakech' } },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '400',
      highPrice: '3000',
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
   PAGE COMPONENT
   ================================================================ */

export default function FiveDayDesertPage() {
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
          <li className="text-text-primary font-medium">5-Day Desert Adventure</li>
        </ol>
      </nav>

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-secondary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1600&q=80"
            alt="Towering golden sand dunes of Erg Chebbi in the Sahara Desert at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              5-Day Itinerary
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Desert Adventure
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Cross the High Atlas Mountains, explore ancient kasbahs and dramatic gorges,
              ride camels into the golden dunes of the Sahara, and return through the
              palm-lined Draa Valley -- Morocco&apos;s ultimate desert odyssey.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">5 Days / 4 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">6 Key Stops</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">~1,500 km Loop</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">$80-600/day</span>
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
            This 5-day circuit from Marrakech is the quintessential Moroccan desert adventure.
            The route forms a large loop: east over the Atlas Mountains along the Route of a Thousand
            Kasbahs to the Sahara, then south through the Draa Valley before returning west to
            Marrakech. Every day brings dramatically different landscapes -- from snow-capped
            mountains to red-rock gorges, golden dunes, lush palm oases, and ancient fortified villages.
            This trip can be done as a self-drive with a 4WD rental or with a private driver/guide,
            which is recommended for first-time visitors.
          </p>

          {/* Route */}
          <div className="card-moroccan p-6 mb-8">
            <h3 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
              Route Overview
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                'Marrakech',
                'Ait Ben Haddou',
                'Ouarzazate',
                'Todra Gorge',
                'Merzouga',
                'Rissani',
                'Draa Valley',
                'Ouarzazate',
                'Marrakech',
              ].map((place, idx, arr) => (
                <span key={`${place}-${idx}`} className="inline-flex items-center">
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
              <p className="text-sm text-text-muted">Oct-Apr (avoid summer heat)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Thermometer className="w-6 h-6 text-[var(--color-secondary)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Temperature</p>
              <p className="text-sm text-text-muted">Day: 20-40 C / Night: 5-15 C</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-green)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Budget Range</p>
              <p className="text-sm text-text-muted">$400-$3,000 total</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Star className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Difficulty</p>
              <p className="text-sm text-text-muted">Moderate (long drives)</p>
            </div>
          </div>

          {/* Important Note */}
          <div className="card-featured p-6 mb-12">
            <h3 className="font-heading font-bold text-text-primary mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Transport Options
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-text-secondary">
              <div>
                <p className="font-heading font-semibold text-text-primary mb-1">Private Driver (Recommended)</p>
                <p>4,000-6,000 MAD ($400-600) for 5 days. Includes air-conditioned vehicle, driver who doubles
                as guide, all fuel and tolls. You set the pace and stops.</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-text-primary mb-1">Organized Group Tour</p>
                <p>1,500-3,000 MAD ($150-300) per person for 3-day version.
                5-day tours: 2,500-5,000 MAD ($250-500). Accommodation and meals often included.</p>
              </div>
              <div>
                <p className="font-heading font-semibold text-text-primary mb-1">Self-Drive (4WD)</p>
                <p>Rental: 500-1,000 MAD ($50-100)/day. Insurance extra. 4WD recommended for
                desert sections near Merzouga. International driving permit required.</p>
              </div>
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

            {/* DAY 1 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 1
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Marrakech to Todra Gorge via Ait Ben Haddou
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" /> 350 km</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 7-8 hours with stops</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The adventure begins with an early departure from Marrakech, crossing the High Atlas
                  Mountains over the Tizi n&apos;Tichka pass -- the highest paved road in Morocco at
                  2,260 meters. The scenery is extraordinary as you descend into the pre-Saharan
                  landscape of kasbahs and palm oases.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:00 AM: Tizi n&apos;Tichka Pass</p>
                      <p className="text-sm text-text-secondary">
                        Depart Marrakech heading southeast. The N9 highway climbs through Berber villages
                        and argan forests, reaching the Tizi n&apos;Tichka pass after approximately 2 hours.
                        Multiple scenic viewpoints along the way. Stop at a roadside mineral and fossil
                        vendor -- the Atlas Mountains are rich in trilobites and ammonites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Ait Ben Haddou</p>
                      <p className="text-sm text-text-secondary">
                        Explore the UNESCO World Heritage ksar (fortified village). This remarkable
                        earthen architecture has served as a filming location for Gladiator, Game of
                        Thrones, Lawrence of Arabia, and The Mummy. Cross the river (wade or use the
                        bridge during high water) and climb to the granary at the summit for 360-degree
                        views. Entry is free; a local guide costs 50-100 MAD ($5-10). Allow 1.5-2 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">12:30 PM: Lunch in Ouarzazate</p>
                      <p className="text-sm text-text-secondary">
                        Continue 30 km to Ouarzazate for lunch. Chez Dimitri (60-120 MAD / $6-12) has
                        been serving travelers since 1928. Optional quick visit to Atlas Studios
                        (50 MAD / $5) -- Africa&apos;s largest film studio with standing sets from
                        Kingdom of Heaven and Asterix.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">2:00 PM: Road of a Thousand Kasbahs</p>
                      <p className="text-sm text-text-secondary">
                        Drive east along the N10 through the Dades Valley -- the legendary &quot;Road
                        of a Thousand Kasbahs.&quot; Crumbling red-earth fortresses line the route as
                        the landscape becomes increasingly dramatic. Stop at the Dades Gorge hairpin
                        turns for photos. Continue to Tinghir and the Todra Gorge (160 km, ~2.5 hours).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">5:00 PM: Todra Gorge</p>
                      <p className="text-sm text-text-secondary">
                        Arrive at the spectacular Todra Gorge -- a narrow canyon with 300-meter sheer
                        walls only 10 meters apart at the narrowest point. Take an evening walk through
                        the canyon as the walls glow orange in the setting sun. This is a world-famous
                        rock climbing destination with over 150 routes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Budget:</strong> Auberge Le Festival, Todra Gorge (200-350 MAD / $20-35) --
                    <strong> Mid-range:</strong> Dar Ayour, Tinghir (500-800 MAD / $50-80) --
                    <strong> Luxury:</strong> Kasbah Lamrani (1,000+ MAD / $100+)
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 2 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 2
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Todra Gorge to Merzouga -- Gateway to the Sahara
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" /> 260 km</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4-5 hours driving</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  A morning exploring Todra Gorge, then a scenic drive southeast across the hammada
                  (rocky desert plain) to the edge of the Sahara. The first sight of the towering
                  Erg Chebbi dunes on the horizon is a moment you will never forget.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:30 AM: Morning in the Gorge</p>
                      <p className="text-sm text-text-secondary">
                        The morning light in Todra Gorge is spectacular -- the canyon walls glow in
                        warm tones of orange and ochre. Walk deeper into the gorge than most tourists
                        venture (30 min past the narrow section) to find quiet pools and date palm
                        gardens. Watch rock climbers tackling the vertical walls.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Drive to Merzouga</p>
                      <p className="text-sm text-text-secondary">
                        Head east through Tinejdad and Erfoud. The landscape transitions from the
                        Atlas foothills to flat desert hammada. Stop in Erfoud to browse fossil
                        workshops -- the region is famous for 350-million-year-old marine fossils.
                        A polished ammonite plate costs 100-500 MAD ($10-50).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:00 PM: Lunch & Rest</p>
                      <p className="text-sm text-text-secondary">
                        Arrive in Merzouga and check into your hotel at the base of the dunes.
                        Lunch and rest during the hottest part of the day. Many hotels have pools
                        where you can cool off while gazing at the towering dunes just meters away.
                        Lunch at your hotel or Cafe du Sud (40-80 MAD / $4-8).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Footprints className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">4:00 PM: Camel Trek into the Dunes</p>
                      <p className="text-sm text-text-secondary">
                        The highlight of the trip. Mount your dromedary camel and begin the 1.5-hour
                        trek deep into Erg Chebbi. The dunes reach up to 150 meters high and shift
                        colors from golden to orange to deep red as the sun descends. Your Berber
                        guide leads you through the dune sea to your camp as shadows lengthen across
                        the sand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:00 PM: Desert Camp Evening</p>
                      <p className="text-sm text-text-secondary">
                        Watch the sunset from the top of the tallest dune near camp. Traditional
                        Berber dinner of tagine, couscous, and flatbread cooked on the sand. After
                        dinner, sit around the campfire as your guides play Berber drums and sing
                        traditional songs. The stargazing is extraordinary -- no light pollution
                        for hundreds of kilometers. The Milky Way stretches overhead in
                        breathtaking detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Tent className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Standard Camp:</strong> Shared tent, communal bathroom, dinner + breakfast (500-800 MAD / $50-80) --
                    <strong> Luxury Camp:</strong> Private tent, en-suite bathroom, gourmet dining (2,000-4,000 MAD / $200-400).
                    Both include camel trek.
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 3 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-accent)] border-4 border-[var(--surface-muted)]" />
              <div className="card-featured p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] font-heading font-bold text-sm">
                    Day 3
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Sahara Sunrise & Desert Exploration
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1"><Footprints className="w-3.5 h-3.5" /> Desert activities</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Full day in Merzouga area</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The most magical day of the trip. Wake before dawn for a Saharan sunrise, then
                  spend the full day exploring the desert region around Merzouga with optional
                  activities ranging from sandboarding to visiting nomadic families.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">5:30 AM: Sahara Sunrise</p>
                      <p className="text-sm text-text-secondary">
                        Wake early and climb the nearest tall dune to watch the sunrise. The desert
                        shifts through an extraordinary spectrum of colors -- deep purple, violet,
                        rose, orange, and finally blazing gold. Footprints from the night before
                        have been smoothed by the wind, leaving pristine rippled sand. This is the
                        single most photographed moment of any Morocco trip.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:30 AM: Breakfast & Camel Return</p>
                      <p className="text-sm text-text-secondary">
                        Breakfast at camp, then camel ride back to Merzouga. Shower and rest at your
                        hotel. The morning is a good time to try sandboarding on the dunes (boards
                        often provided free by hotels) or take a dune buggy/quad bike ride
                        (300-500 MAD / $30-50 for 1-2 hours).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Desert 4x4 Tour</p>
                      <p className="text-sm text-text-secondary">
                        Optional 4x4 excursion around the Merzouga area (400-700 MAD / $40-70 per vehicle).
                        Visit a nomadic Berber family living in the desert who welcome guests with mint
                        tea. See the Khamlia village, home to Gnaoua musicians descended from
                        sub-Saharan African traders, and hear their trance-like music. Visit the seasonal
                        Dayet Srji salt lake where flamingos gather in winter months.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:00 PM: Rissani Market (Tuesdays, Thursdays, Sundays)</p>
                      <p className="text-sm text-text-secondary">
                        If your visit coincides with market days, drive 35 km to Rissani for one of
                        Morocco&apos;s most authentic local souks. Berber traders come from across the
                        desert to buy and sell livestock, spices, dates, and household goods. Almost
                        no tourists. The Alaouite dynasty that still rules Morocco originated here.
                        Lunch in Rissani: 30-60 MAD ($3-6).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Afternoon: Pool & Sunset</p>
                      <p className="text-sm text-text-secondary">
                        Relax at your hotel pool with dune views, or take a second shorter camel
                        ride for sunset photos (150-250 MAD / $15-25). Many hotels offer traditional
                        Berber music and dinner on their terraces with the dunes glowing in the
                        background.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Budget:</strong> Kasbah Mohayut (250-400 MAD / $25-40) --
                    <strong> Mid-range:</strong> Riad Madu (600-1,000 MAD / $60-100) --
                    <strong> Luxury:</strong> Merzouga Luxury Camp at Erg Chebbi (2,500+ MAD / $250+)
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 4 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 4
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Draa Valley -- Morocco&apos;s Longest Oasis
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" /> 370 km</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6-7 hours with stops</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Leave the Sahara behind and head southwest through a completely different desert
                  landscape. The Draa Valley is the longest river in Morocco, and its banks are lined
                  with over 6 million date palms, ancient kasbahs, and traditional Berber villages.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:00 AM: Depart via Alnif</p>
                      <p className="text-sm text-text-secondary">
                        Head south from Merzouga through Alnif and Tazzarine. This remote desert road
                        (N12) passes through dramatic volcanic landscapes and tiny Berber settlements.
                        Stop at Alnif for fossils -- the village sits on one of the world&apos;s richest
                        trilobite deposits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">12:00 PM: Draa Valley Palm Groves</p>
                      <p className="text-sm text-text-secondary">
                        Reach the Draa Valley and the town of Zagora. The &quot;gateway to the desert&quot;
                        is famous for its sign reading &quot;Timbuktu 52 days&quot; -- the old caravan route.
                        Drive through the magnificent palm-lined valley stopping at the
                        Tamnougalt Kasbah -- a 16th-century fortress that once controlled the trans-Saharan
                        trade routes. Entry: 20 MAD ($2).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:30 PM: Lunch in Agdz</p>
                      <p className="text-sm text-text-secondary">
                        Continue northwest through the Draa Valley to the charming town of Agdz for
                        lunch. Restaurant Kasbah Caids (50-100 MAD / $5-10) offers a peaceful terrace
                        with views over the palm groves. The road from Agdz to Ouarzazate is one of the
                        most scenic drives in southern Morocco.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">4:00 PM: Tizi n&apos;Tinififft Pass</p>
                      <p className="text-sm text-text-secondary">
                        Cross the Anti-Atlas via the Tizi n&apos;Tinififft pass at 1,660 meters. The
                        viewpoint at the top offers a breathtaking panorama of the Draa Valley stretching
                        into the desert below. Continue to Ouarzazate for the night (60 km, ~1 hour).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">
                    <strong>Budget:</strong> Hotel Azoul, Ouarzazate (300-500 MAD / $30-50) --
                    <strong> Mid-range:</strong> Kasbah Dar Daif (600-1,000 MAD / $60-100) --
                    <strong> Luxury:</strong> Le Berbere Palace (1,500+ MAD / $150+)
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 5 */}
            <div className="relative pl-8 md:pl-12 pb-12">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-accent)] border-4 border-[var(--surface-muted)]" />
              <div className="card-featured p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] font-heading font-bold text-sm">
                    Day 5
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Return to Marrakech via the Atlas
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted mb-6">
                  <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" /> 200 km</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4-5 hours with stops</span>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The final day takes you back over the High Atlas to Marrakech, completing the
                  desert loop. The morning offers a last chance to explore Ouarzazate before
                  the scenic return drive.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:00 AM: Ouarzazate Morning</p>
                      <p className="text-sm text-text-secondary">
                        If not visited on Day 1, explore the Taourirt Kasbah in the center of
                        Ouarzazate (20 MAD / $2) -- a remarkably preserved fortress with labyrinthine
                        interiors. Or visit the Cinema Museum (30 MAD / $3) documenting Ouarzazate&apos;s
                        century-long history as a film location.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Tizi n&apos;Tichka Return</p>
                      <p className="text-sm text-text-secondary">
                        Cross the Atlas Mountains heading northwest. The return journey feels different --
                        you are descending from the desert back into the green foothills. Stop at
                        an argan oil cooperative (free visit) to see the traditional oil-pressing process
                        and buy authentic argan oil directly from the women who produce it.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">12:30 PM: Mountain Village Lunch</p>
                      <p className="text-sm text-text-secondary">
                        Stop at a roadside restaurant near the pass for a final Berber lunch --
                        tagine cooked over charcoal with fresh bread baked in a clay oven.
                        Typical cost: 50-80 MAD ($5-8). The views from the mountain restaurants
                        are spectacular.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">3:00 PM: Arrive in Marrakech</p>
                      <p className="text-sm text-text-secondary">
                        Return to Marrakech by mid-afternoon. Head to the Jemaa el-Fnaa for a
                        celebratory final evening in the Red City. After five days in the desert,
                        the energy and chaos of the square will feel electric. Dinner at the food stalls
                        or a rooftop restaurant completes your desert odyssey.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[var(--color-accent)]" />
                    Post-Trip Options
                  </p>
                  <p className="text-sm text-text-secondary">
                    Many travelers extend their trip with 1-2 nights in Marrakech to explore the city,
                    or add a day trip to Essaouira on the coast (2.5 hours). The Marrakech airport (RAK)
                    has direct flights to most European cities.
                  </p>
                </div>
              </div>
            </div>
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
              <p className="text-3xl font-display font-bold text-[var(--color-green)] mb-4">$400-650</p>
              <p className="text-xs text-text-muted mb-4">Per person, 5 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Group Tour (3-day)</span><span className="font-medium">$150-250</span></li>
                <li className="flex justify-between"><span>Accommodation (2 extra nights)</span><span className="font-medium">$40-70</span></li>
                <li className="flex justify-between"><span>Food (5 days)</span><span className="font-medium">$50-100</span></li>
                <li className="flex justify-between"><span>Activities</span><span className="font-medium">$40-80</span></li>
                <li className="flex justify-between"><span>Desert Camp</span><span className="font-medium">$50-80</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$80-130</span>
                </li>
              </ul>
            </div>

            <div className="card-featured p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Mid-Range</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4">$1,000-1,800</p>
              <p className="text-xs text-text-muted mb-4">Per person, 5 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Private Driver (5 days)</span><span className="font-medium">$400-600</span></li>
                <li className="flex justify-between"><span>Accommodation (4 nights)</span><span className="font-medium">$200-400</span></li>
                <li className="flex justify-between"><span>Food (5 days)</span><span className="font-medium">$100-200</span></li>
                <li className="flex justify-between"><span>Activities & Entry</span><span className="font-medium">$80-150</span></li>
                <li className="flex justify-between"><span>Desert Camp (upgraded)</span><span className="font-medium">$100-200</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$200-360</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-secondary)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Luxury</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-secondary)] mb-4">$2,500-4,000+</p>
              <p className="text-xs text-text-muted mb-4">Per person, 5 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Luxury 4WD + Guide</span><span className="font-medium">$800-1,200</span></li>
                <li className="flex justify-between"><span>Kasbah Hotels (4 nights)</span><span className="font-medium">$600-1,200</span></li>
                <li className="flex justify-between"><span>Fine Dining</span><span className="font-medium">$200-350</span></li>
                <li className="flex justify-between"><span>Exclusive Activities</span><span className="font-medium">$200-400</span></li>
                <li className="flex justify-between"><span>Luxury Desert Camp</span><span className="font-medium">$300-500</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$500-800+</span>
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
              Desert Packing Essentials
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[var(--color-secondary)]" />
                  Clothing & Footwear
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Loose, light-colored clothing (heat reflection)',
                    'Long sleeves and trousers (sun protection)',
                    'Warm fleece or down jacket (desert nights: 5C)',
                    'Closed-toe shoes for gorge walking',
                    'Sandals for camp and hotel',
                    'Wool socks for cold desert nights',
                    'Bandana or buff (sand and dust protection)',
                    'Wide-brim hat with chin strap (wind)',
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
                  Desert Essentials
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'SPF 50+ sunscreen (reapply frequently)',
                    'UV-protection sunglasses (polarized ideal)',
                    'Lip balm with SPF',
                    'Heavy-duty moisturizer (extreme dryness)',
                    'Reusable water bottle (2L minimum)',
                    'Electrolyte tablets or powder',
                    'Headlamp or flashlight (essential for camp)',
                    'Small day pack (leave main luggage in car)',
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
                  <Camera className="w-5 h-5 text-[var(--color-secondary)]" />
                  Tech & Photography
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Camera with wide-angle lens (dune landscapes)',
                    'Extra batteries (cold nights drain fast)',
                    'Large memory cards (you will shoot thousands)',
                    'Lens cleaning cloth (sand gets everywhere)',
                    'Plastic bags to protect gear from sand',
                    'Portable charger (10,000+ mAh)',
                    'Earplugs and eye mask (camp sleeping)',
                    'Star photography app (for night sky)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desert Tips */}
            <div className="card-featured p-6 mt-8">
              <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                <Wind className="w-5 h-5 text-[var(--color-accent)]" />
                Desert Survival Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-text-secondary">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Drink at least 3 liters of water per day in the desert
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    The temperature difference between day and night can exceed 25 C
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Sand gets into everything -- use zip-lock bags for electronics
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Wear long sleeves even in heat -- sun and sand burn are real risks
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Camel riding can cause thigh chafing -- wear trousers, not shorts
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    Tip your camel guide 50-100 MAD ($5-10) -- they earn very little
                  </li>
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
            src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-morocco text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for the Desert?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Our desert specialists will arrange everything -- experienced drivers who know every
            turn of the mountain passes, the best desert camps, and authentic experiences you
            will not find in any guidebook.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bookings@cityguide.ma?subject=5-Day Desert Adventure Inquiry"
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
                  src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&q=80"
                  alt="Morocco landscape"
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
                <p className="text-sm text-text-muted mt-1">Desert + cities + mountains</p>
              </div>
            </Link>

            <Link href="/itineraries/3-day-marrakech" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&q=80"
                  alt="Marrakech medina"
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
                <p className="text-sm text-text-muted mt-1">Add this before your desert trip</p>
              </div>
            </Link>

            <Link href="/itineraries/10-day-grand-tour" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=600&q=80"
                  alt="Blue city of Chefchaouen"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-heading font-semibold text-sm">10 Days</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-semibold text-text-primary group-hover:text-[var(--color-secondary)] transition-colors">
                  10-Day Grand Tour
                </h3>
                <p className="text-sm text-text-muted mt-1">The complete Morocco circuit</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
