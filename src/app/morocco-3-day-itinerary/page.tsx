import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Compass,
  Sun,
  Moon,
  Sunrise,
  Utensils,
  Bed,
  Bus,
  Camera,
  Luggage,
  CalendarDays,
  Map,
  Wallet,
  Heart,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco 3-Day Itinerary 2026 | Best Short Trip Plans for Marrakech, Fes & Desert',
  description:
    'Plan the perfect 3 days in Morocco with our detailed itineraries. Choose from Marrakech-focused, Fes-focused, or Marrakech + Desert routes. Hourly schedules, daily budgets from 500 MAD/day, where to eat, where to stay, and transport tips for your short Morocco trip.',
  keywords: [
    'morocco itinerary 3 days',
    '3 days in morocco',
    'morocco 3 day trip',
    'short trip morocco',
    '3 day morocco itinerary',
    'weekend in morocco',
    'morocco short break',
    '3 days marrakech itinerary',
    '3 days fes itinerary',
    'marrakech desert 3 days',
    'morocco weekend trip',
    'best 3 day morocco trip',
    'morocco travel plan 3 days',
    'morocco mini break',
    'quick trip morocco',
    'marrakech 3 day plan',
    'fes 3 day plan',
    'morocco itinerary budget',
    'morocco short holiday',
    'morocco long weekend',
  ],
  openGraph: {
    title: 'Morocco 3-Day Itinerary 2026 | Best Short Trip Plans for Marrakech, Fes & Desert',
    description:
      'Three detailed 3-day Morocco itineraries with hourly schedules, daily budgets, dining picks, and accommodation tips. Perfect for a weekend getaway or short break.',
    url: `${BASE_URL}/morocco-3-day-itinerary`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech medina with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 3-Day Itinerary 2026 | Marrakech, Fes & Desert Plans',
    description:
      'Plan your perfect 3 days in Morocco. Three detailed itineraries with hourly schedules, budgets from 500 MAD/day, dining picks, and transport tips.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-3-day-itinerary` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-3-day-itinerary`,
  name: 'Morocco 3-Day Itinerary 2026 | Best Short Trip Plans',
  description:
    'Plan the perfect 3 days in Morocco with detailed itineraries for Marrakech, Fes, and Marrakech + Desert routes.',
  url: `${BASE_URL}/morocco-3-day-itinerary`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-3-day-itinerary`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morocco 3-Day Itinerary',
        item: `${BASE_URL}/morocco-3-day-itinerary`,
      },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is 3 days enough for Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, 3 days is enough to explore one major city in depth or combine two destinations with a focused itinerary.' } },
    { '@type': 'Question', name: 'How much does a 3-day trip to Morocco cost?', acceptedAnswer: { '@type': 'Answer', text: 'Budget from 1,500 MAD (150 USD), mid-range from 3,500 MAD (350 USD), luxury from 8,000 MAD (800 USD).' } },
    { '@type': 'Question', name: 'What is the best city for a 3-day trip?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech for first-timers; Fes for travelers seeking authenticity and the world\'s largest car-free urban area.' } },
    { '@type': 'Question', name: 'Can I visit the Sahara Desert in 3 days?', acceptedAnswer: { '@type': 'Answer', text: 'The Sahara requires 2 days driving each way. Visit the Agafay Desert (45 min from Marrakech) instead for camel rides and glamping.' } },
    { '@type': 'Question', name: 'What should I pack for 3 days in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Light layers, walking shoes, scarf for mosques, sunscreen, water bottle, and a small daypack. A carry-on is sufficient.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const itineraryOverview = [
  { name: 'Marrakech Immersion', icon: Building, bestFor: 'First-timers, culture lovers, foodies', pace: 'Relaxed to moderate', budget: 'From 1,500 MAD to 8,000 MAD', highlights: ['Jemaa el-Fnaa', 'Bahia Palace', 'Majorelle Garden', 'Atlas Mountains day trip', 'Hammam experience'] },
  { name: 'Fes Cultural Deep Dive', icon: Compass, bestFor: 'History buffs, photography, authentic experience', pace: 'Moderate', budget: 'From 1,200 MAD to 7,000 MAD', highlights: ['Fes el-Bali medina', 'Chouara Tanneries', 'Al-Qarawiyyin', 'Meknes day trip', 'Pottery workshops'] },
  { name: 'Marrakech + Desert Escape', icon: Star, bestFor: 'Adventure seekers, couples, photographers', pace: 'Fast-paced', budget: 'From 2,500 MAD to 10,000 MAD', highlights: ['Marrakech medina', 'Agafay Desert glamping', 'Camel ride at sunset', 'Stargazing', 'Atlas foothills'] },
] as const;

const packingEssentials = [
  { item: 'Comfortable walking shoes', reason: 'Medina streets are uneven cobblestone; you will walk 15,000+ steps daily' },
  { item: 'Light layers & scarf', reason: 'Temperatures swing 15 degrees between day and evening; scarf needed for mosques' },
  { item: 'Sunscreen & sunglasses', reason: 'Morocco averages 300 sunny days per year; UV index is high even in winter' },
  { item: 'Small daypack', reason: 'Carry water, camera, and souvenirs; avoid large bags in narrow medina alleys' },
  { item: 'Power adapter (Type C/E)', reason: 'Morocco uses European-style plugs; charge devices overnight for full days' },
  { item: 'Cash in small denominations', reason: 'Medina vendors and taxis rarely accept cards; keep 20 and 50 MAD notes' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Morocco3DayItineraryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li className="text-[var(--text-primary)] font-medium">Morocco 3-Day Itinerary</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-marrakech.webp"
          alt="Vibrant Marrakech medina rooftops at golden hour, the perfect starting point for a 3-day Morocco itinerary"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-6">
            <CalendarDays className="w-4 h-4" /> Updated March 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco 3-Day Itinerary
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Three expertly crafted itineraries for Marrakech, Fes, and the desert. Day-by-day schedules,
            honest budgets, and insider tips to make every hour of your short trip count.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
            Three days in Morocco is short but far from limiting. Whether you are flying in for a long weekend,
            adding a stopover to a European trip, or testing the waters before a longer journey, 72 hours gives
            you enough time to experience the intoxicating energy of a Moroccan medina, savour world-class cuisine,
            and even escape to the mountains or desert.
          </p>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            We have designed three distinct itineraries, each tailored to different travel styles. The Marrakech
            Immersion is ideal for first-timers who want the quintessential Morocco experience. The Fes Cultural
            Deep Dive suits history buffs and travelers seeking authenticity. The Marrakech + Desert Escape
            combines the Red City with an unforgettable night under the stars in the Agafay Desert.
          </p>
          <div className="card-moroccan p-5 bg-amber-50/50">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Seasonal pricing note:</strong> Prices throughout
                this guide reflect 2026 averages. Accommodation costs spike 30-50% during peak season (October to
                April) and around major holidays. Always confirm current pricing before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Choose Your Itinerary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Choose Your 3-Day Adventure
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each itinerary is self-contained with its own pace, budget, and personality. Pick the one that matches
            your travel style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {itineraryOverview.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.name} className="card-moroccan p-6">
                  <ItinIcon className="w-10 h-10 text-[var(--color-accent)] mb-4" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {itin.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Best for: {itin.bestFor}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Pace: {itin.pace}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {itin.budget}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    {itin.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0" /> {h}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ITINERARY 1: MARRAKECH IMMERSION
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Itinerary 1: Marrakech Immersion
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The classic first-timer&apos;s route. Three days exploring the Red City&apos;s palaces, souks,
            gardens, and a rewarding day trip into the High Atlas Mountains.
          </p>

          {/* Day 1 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 1: Medina, Palaces &amp; the Square
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM &mdash; Breakfast at your riad</p>
                  <p className="text-xs text-[var(--text-secondary)]">Traditional Moroccan breakfast: msemen flatbread, amlou (almond-argan dip), olives, fresh orange juice, and mint tea. Most riads include breakfast in the room rate.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:30 AM &mdash; Bahia Palace</p>
                  <p className="text-xs text-[var(--text-secondary)]">Explore this 19th-century masterpiece of Moroccan architecture. Entry from 70 MAD. Arrive early to avoid tour groups. Allow 60-90 minutes to admire the zellige tilework and painted cedar ceilings.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Mellah &amp; Spice Souks</p>
                  <p className="text-xs text-[var(--text-secondary)]">Walk through the historic Jewish quarter. Visit the Lazama Synagogue (from 30 MAD) and sample argan oil and local spices from the herbalists along the way.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at Cafe Clock</p>
                  <p className="text-xs text-[var(--text-secondary)]">Creative Moroccan dishes in the Kasbah area. Try the camel burger (from 85 MAD) or their vegetarian tagine. Rooftop terrace has great views over the medina.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Saadian Tombs &amp; Koutoubia Mosque</p>
                  <p className="text-xs text-[var(--text-secondary)]">Visit the stunning Saadian Tombs (from 70 MAD), then walk past the Koutoubia Mosque. Non-Muslims cannot enter but the exterior and gardens are beautiful for photographs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM &mdash; Hammam Experience</p>
                  <p className="text-xs text-[var(--text-secondary)]">Unwind at Heritage Spa or a traditional public hammam. Budget: public hammam from 50 MAD. Mid-range: Heritage Spa from 400 MAD with gommage and argan oil massage. Allow 90 minutes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 PM &mdash; Jemaa el-Fnaa &amp; Dinner</p>
                  <p className="text-xs text-[var(--text-secondary)]">Watch the square come alive with storytellers, musicians, and food stalls. Eat at the food stalls (from 30 MAD for a full plate) or Nomad restaurant for rooftop dining (mains from 120 MAD).</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 1 budget: from 400 MAD</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> All walking distance</span>
            </div>
          </div>

          {/* Day 2 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: Atlas Mountains Day Trip
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 AM &mdash; Early pickup</p>
                  <p className="text-xs text-[var(--text-secondary)]">Quick breakfast at your riad, then pickup at 7:30 AM. Shared Atlas day trips start from 300 MAD per person; private transfer from 800 MAD for the vehicle.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM &mdash; Imlil Valley &amp; Berber Village</p>
                  <p className="text-xs text-[var(--text-secondary)]">Arrive in Imlil (60 km from Marrakech). Meet your local Berber guide (from 200 MAD) for a 2-hour hike through walnut groves and terraced farms. Visit a traditional home for mint tea.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Berber lunch in Imlil</p>
                  <p className="text-xs text-[var(--text-secondary)]">Home-cooked tagine in a village guesthouse with panoramic mountain views. From 80 MAD per person including bread baked in a communal oven and mint tea.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Argan oil cooperative</p>
                  <p className="text-xs text-[var(--text-secondary)]">Stop at a women&apos;s cooperative to see the production process and buy direct (from 80 MAD for 100ml cosmetic grade). Spring visitors can detour to the Setti Fatma waterfalls.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:30 PM &mdash; Return to Marrakech</p>
                  <p className="text-xs text-[var(--text-secondary)]">Drive back through the Ourika Valley. Arrive by 6:00 PM with time to freshen up at your riad before dinner.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Dinner at Al Fassia</p>
                  <p className="text-xs text-[var(--text-secondary)]">All-female-run Marrakech institution. Refined Moroccan cuisine with mains from 130 MAD. Try the lamb tagine with prunes and almonds. Reservation recommended.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 2 budget: from 600 MAD</span>
              <span className="flex items-center gap-1"><Bus className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Transport included in day trip</span>
            </div>
          </div>

          {/* Day 3 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 3: Gardens, Souks &amp; Farewell
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:30 AM &mdash; Majorelle Garden &amp; YSL Museum</p>
                  <p className="text-xs text-[var(--text-secondary)]">Arrive at opening to beat the crowds. Garden entry from 70 MAD, YSL Museum from 100 MAD. The cobalt-blue villa and exotic plant collections take about 90 minutes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">10:30 AM &mdash; Gueliz &amp; Modern Marrakech</p>
                  <p className="text-xs text-[var(--text-secondary)]">Walk through the Ville Nouvelle for contemporary art galleries and concept stores. Coffee at Bacha Coffee (from 40 MAD).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:00 PM &mdash; Lunch at Le Jardin</p>
                  <p className="text-xs text-[var(--text-secondary)]">Hidden garden restaurant in the medina. Moroccan-Mediterranean fusion, mains from 110 MAD. Peaceful setting among banana plants and turtles.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">1:30 PM &mdash; Souk Shopping</p>
                  <p className="text-xs text-[var(--text-secondary)]">Dedicate the afternoon to souvenirs. Start from Souk Semmarine through leather, carpet, and lantern sections. Budget from 200 MAD. Start haggling at 40% of the asking price.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM &mdash; Rooftop Mint Tea</p>
                  <p className="text-xs text-[var(--text-secondary)]">Maison de la Photographie terrace for views of the Koutoubia and Atlas Mountains. Tea from 30 MAD. A perfect moment to reflect on your trip.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">6:30 PM &mdash; Farewell dinner</p>
                  <p className="text-xs text-[var(--text-secondary)]">Splurge at Dar Yacout for a traditional palatial feast (set menu from 700 MAD) or keep it real at Chez Lamine near the square for lamb tangia from 70 MAD.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 3 budget: from 500 MAD</span>
              <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Great photography day</span>
            </div>
          </div>

          {/* Marrakech Budget */}
          <div className="card-moroccan p-6 zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-[var(--color-accent)]" /> Marrakech 3-Day Budget Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Budget</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 1,500 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~150 USD: Hostel from 120 MAD/night, street food from 100 MAD/day, free walking tour + 1 entry, public hammam from 50 MAD</p>
              </div>
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 3,500 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~350 USD: Boutique riad from 500 MAD/night, restaurants from 200 MAD/day, all entries + Atlas trip, spa from 400 MAD</p>
              </div>
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 8,000 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~800 USD: Luxury riad from 1,500 MAD/night, fine dining from 500 MAD/day, private tours, La Mamounia Spa from 1,500 MAD</p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] italic">Seasonal pricing can change. Budget an extra 20-30% during peak season (October-April).</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ITINERARY 2: FES CULTURAL DEEP DIVE
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Itinerary 2: Fes Cultural Deep Dive
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The world&apos;s largest car-free urban area deserves unhurried exploration. Medieval medina magic
            combined with a day trip to the imperial city of Meknes and the Roman ruins of Volubilis.
          </p>

          {/* Day 1 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 1: Fes el-Bali &amp; the Medieval Medina
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM &mdash; Breakfast at Riad Laaroussa</p>
                  <p className="text-xs text-[var(--text-secondary)]">Open to non-guests (from 120 MAD). Fresh pastries, eggs, fruit, and excellent coffee in a serene 17th-century courtyard.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:30 AM &mdash; Guided medina walk</p>
                  <p className="text-xs text-[var(--text-secondary)]">Hire an official guide at Bab Bou Jeloud (from 300 MAD for a half-day). Essential in Fes &mdash; the medina has 9,400 alleyways. Your guide covers the dyers&apos; souk, copper souk, and woodworking quarter.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Chouara Tanneries</p>
                  <p className="text-xs text-[var(--text-secondary)]">View the iconic leather tanneries from a terrace above. Surrounding shops offer free terrace access (they expect you to browse their goods). Best photography light in the morning.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at The Ruined Garden</p>
                  <p className="text-xs text-[var(--text-secondary)]">Beloved garden restaurant in a partially ruined riad. Seasonal menu with dishes from 80 MAD. Atmospheric ivy-draped setting. Reservation essential.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:30 PM &mdash; Bou Inania Madrasa &amp; Al-Qarawiyyin</p>
                  <p className="text-xs text-[var(--text-secondary)]">Exquisite Bou Inania Madrasa (from 30 MAD), one of the few religious buildings open to non-Muslims. Walk past Al-Qarawiyyin, the world&apos;s oldest continuously operating university (founded 859 AD).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:30 PM &mdash; Pottery workshop</p>
                  <p className="text-xs text-[var(--text-secondary)]">Fes pottery cooperative: watch artisans hand-painting blue-and-white Fassi ceramics. Paint your own tile to take home from 150 MAD.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Dinner at Dar Hatim</p>
                  <p className="text-xs text-[var(--text-secondary)]">Authentic Fassi home-cooking in a family-run riad. Set menu from 200 MAD: pastilla, tagine, and Moroccan pastries. Intimate dining with fellow travelers.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 1 budget: from 500 MAD</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> All within the medina</span>
            </div>
          </div>

          {/* Day 2 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: Meknes &amp; Volubilis Day Trip
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 AM &mdash; Train to Meknes</p>
                  <p className="text-xs text-[var(--text-secondary)]">ONCF train from Fes takes 45 minutes. Second class from 25 MAD, first class from 40 MAD. Frequent departures throughout the day.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:30 AM &mdash; Bab Mansour &amp; Meknes Medina</p>
                  <p className="text-xs text-[var(--text-secondary)]">Start at the monumental Bab Mansour gate, one of North Africa&apos;s most impressive gateways. Explore the quieter medina and visit the Mausoleum of Moulay Ismail (free entry, respectful dress).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:30 AM &mdash; Lunch in Meknes</p>
                  <p className="text-xs text-[var(--text-secondary)]">Local specialty kefta tagine with eggs at a restaurant on Place el-Hedim. Meknes is known for its olives and wine. Meals from 50 MAD.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">1:00 PM &mdash; Grand taxi to Volubilis</p>
                  <p className="text-xs text-[var(--text-secondary)]">Share a grand taxi (30 minutes, from 20 MAD per person). These UNESCO Roman ruins feature remarkable mosaics, a triumphal arch, and basilica. Entry from 70 MAD. Allow 2 hours.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM &mdash; Return to Fes</p>
                  <p className="text-xs text-[var(--text-secondary)]">Grand taxi to Meknes, then train to Fes. Total return journey about 90 minutes. Back by 5:30 PM.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 PM &mdash; Dinner &amp; Merenid Tombs sunset</p>
                  <p className="text-xs text-[var(--text-secondary)]">Cafe Clock Fes (mains from 80 MAD) then walk up to the Merenid Tombs viewpoint for a stunning panorama over the illuminated medina. Free to visit.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 2 budget: from 350 MAD</span>
              <span className="flex items-center gap-1"><Bus className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Train + grand taxi</span>
            </div>
          </div>

          {/* Day 3 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 3: Artisan Quarter, Hammam &amp; Farewell
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:30 AM &mdash; Nejjarine Museum</p>
                  <p className="text-xs text-[var(--text-secondary)]">Museum of Wood Arts in a beautifully restored caravanserai (from 20 MAD). The rooftop cafe has panoramic medina views worth the visit alone.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">10:00 AM &mdash; Cooking class</p>
                  <p className="text-xs text-[var(--text-secondary)]">Morning cooking class at Palais Amani or Cafe Clock. Learn to make pastilla, tagine, or Moroccan salads. From 400 MAD per person including market visit, cooking, and eating your creation for lunch.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">1:30 PM &mdash; Souvenir shopping</p>
                  <p className="text-xs text-[var(--text-secondary)]">Browse the craft shops along Talaa Kebira for leather babouche slippers (from 80 MAD) and hand-painted ceramics (from 50 MAD for small pieces).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">3:30 PM &mdash; Hammam</p>
                  <p className="text-xs text-[var(--text-secondary)]">End your Fes adventure with a hammam. Riad Laaroussa Spa from 400 MAD, or a local public hammam from 50 MAD. A perfect way to wash off three days of exploration.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">6:30 PM &mdash; Farewell dinner at Dar Roumana</p>
                  <p className="text-xs text-[var(--text-secondary)]">Moroccan-fusion tasting menu from 500 MAD. Budget option: Thami&apos;s near Bab Bou Jeloud for excellent street food from 30 MAD.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 3 budget: from 350 MAD</span>
              <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Relaxing final day</span>
            </div>
          </div>

          {/* Fes Budget */}
          <div className="card-moroccan p-6 zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-[var(--color-accent)]" /> Fes 3-Day Budget Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Budget</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 1,200 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~120 USD: Hostel from 100 MAD/night, street food from 80 MAD/day, self-guided + 2 entries, public hammam from 50 MAD</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 3,000 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~300 USD: Boutique riad from 400 MAD/night, restaurants from 180 MAD/day, guided tours + Meknes trip, cooking class from 400 MAD</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 7,000 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~700 USD: Luxury riad from 1,200 MAD/night, fine dining from 400 MAD/day, private guides, spa from 400 MAD</p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] italic">Fes is 10-20% cheaper than Marrakech. Seasonal pricing can change, especially during the Fes Festival of World Sacred Music (June).</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ITINERARY 3: MARRAKECH + DESERT ESCAPE
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Itinerary 3: Marrakech + Desert Escape
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Combine the energy of Marrakech with the silence of the Agafay Desert. Medina, mountains,
            and desert &mdash; the classic Morocco highlights in just three days.
          </p>

          {/* Day 1 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 1: Marrakech Highlights Sprint
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM &mdash; Bahia Palace</p>
                  <p className="text-xs text-[var(--text-secondary)]">Quick breakfast at your riad, then straight to Bahia Palace (from 70 MAD). Efficient first day: 45 minutes covers the main highlights of this architectural gem.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:30 AM &mdash; Saadian Tombs &amp; Koutoubia</p>
                  <p className="text-xs text-[var(--text-secondary)]">Visit Saadian Tombs (from 70 MAD) and walk past the Koutoubia Mosque. This efficient loop covers the southern medina&apos;s key sights in under 2 hours.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Souk shopping</p>
                  <p className="text-xs text-[var(--text-secondary)]">Focused shopping session: dyers&apos; souk for photos, spice souk for gifts. Buy souvenirs now &mdash; Days 2 and 3 are outside the medina.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at Nomad</p>
                  <p className="text-xs text-[var(--text-secondary)]">Modern Moroccan cuisine with a rooftop terrace overlooking the spice market. Mains from 100 MAD. Quick but quality meal.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Majorelle Garden</p>
                  <p className="text-xs text-[var(--text-secondary)]">Taxi to Majorelle Garden (from 70 MAD entry). The iconic cobalt-blue buildings and cactus gardens are a must. Allow 60 minutes including the Berber Museum inside.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">5:00 PM &mdash; Jemaa el-Fnaa sunset &amp; dinner</p>
                  <p className="text-xs text-[var(--text-secondary)]">Watch the sunset spectacle from Cafe de France balcony (tea from 25 MAD). Eat at the food stalls for dinner from 30 MAD. Early night &mdash; tomorrow is an adventure day.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 1 budget: from 400 MAD</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Mostly walking + 1 taxi</span>
            </div>
          </div>

          {/* Day 2 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: Agafay Desert Adventure &amp; Glamping
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM &mdash; Checkout &amp; pack light</p>
                  <p className="text-xs text-[var(--text-secondary)]">Leisurely breakfast, then check out and leave your main luggage with reception (most riads offer this for free). Take only a small bag for the overnight.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">10:30 AM &mdash; Transfer to Agafay Desert</p>
                  <p className="text-xs text-[var(--text-secondary)]">The Agafay is just 45 minutes from Marrakech. Most glamping camps include transfers from 200 MAD return. Rocky desert and distant Atlas peaks unfold as you leave the city behind.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:00 PM &mdash; Desert camp arrival</p>
                  <p className="text-xs text-[var(--text-secondary)]">Budget camps start from 800 MAD per person including dinner and breakfast. Luxury glamping from 2,500 MAD with pool, spa, and gourmet dining. Settle in and relax.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">3:00 PM &mdash; Camel ride or quad biking</p>
                  <p className="text-xs text-[var(--text-secondary)]">Afternoon activities: camel ride from 200 MAD per person (1 hour), quad biking from 400 MAD. Or simply lounge by the pool with Atlas Mountain views.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">6:30 PM &mdash; Sunset, dinner &amp; stargazing</p>
                  <p className="text-xs text-[var(--text-secondary)]">Watch the sunset paint the desert orange and pink. Berber feast around a campfire: soup, tagine, couscous, and pastries. Spectacular stargazing afterwards thanks to minimal light pollution.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 2 budget: from 1,000 MAD</span>
              <span className="flex items-center gap-1"><Bed className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Overnight in desert camp</span>
            </div>
          </div>

          {/* Day 3 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 3: Desert Sunrise &amp; Return
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">6:30 AM &mdash; Desert sunrise</p>
                  <p className="text-xs text-[var(--text-secondary)]">Wake early for the extraordinary desert sunrise. Golden hues against the stark rocky landscape with the snowcapped Atlas Mountains in the distance. Bring your camera for the best light.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:00 AM &mdash; Breakfast at camp</p>
                  <p className="text-xs text-[var(--text-secondary)]">Relaxed breakfast included in the overnight package. Fresh pastries, eggs, fruit, juice, and coffee with uninterrupted desert views.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">10:00 AM &mdash; Return to Marrakech</p>
                  <p className="text-xs text-[var(--text-secondary)]">Transfer back to the city. Collect your luggage from your riad. If your flight is in the evening, you still have several hours to explore.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:30 AM &mdash; Le Jardin Secret</p>
                  <p className="text-xs text-[var(--text-secondary)]">A restored palace garden in the medina (from 60 MAD). Peaceful and photogenic with exotic and Islamic gardens. The tower offers excellent panoramic medina views.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">1:00 PM &mdash; Farewell lunch at Terrasse des Epices</p>
                  <p className="text-xs text-[var(--text-secondary)]">Rooftop restaurant in the northern medina with views over the rooftops. Light meals and salads from 80 MAD. The perfect final meal before the airport.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Bus className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">3:00 PM &mdash; Airport transfer</p>
                  <p className="text-xs text-[var(--text-secondary)]">Allow 30-45 minutes to Marrakech Menara Airport. Taxi from the medina from 100 MAD (negotiate before getting in). Airport bus from 30 MAD.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 3 budget: from 300 MAD</span>
              <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Best sunrise photos</span>
            </div>
          </div>

          {/* Desert Budget */}
          <div className="card-moroccan p-6 zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Wallet className="w-5 h-5 text-[var(--color-accent)]" /> Marrakech + Desert 3-Day Budget
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--color-accent)] uppercase mb-1">Budget</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 2,500 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~250 USD: Hostel 2 nights from 240 MAD, budget camp from 800 MAD, street food + camp meals, shared transport</p>
              </div>
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 5,000 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~500 USD: Boutique riad 2 nights from 1,000 MAD, glamping from 1,500 MAD, restaurants + camel ride, private transfers</p>
              </div>
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                <p className="text-xl font-bold text-[var(--text-primary)]">From 10,000 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~1,000 USD: Luxury riad 2 nights from 3,000 MAD, premium glamping from 2,500 MAD, fine dining + all activities</p>
              </div>
            </div>
            <p className="text-xs text-[var(--text-muted)] italic">Desert camp prices vary by season. Summer has the lowest rates; winter weekends command premium pricing.</p>
          </div>
        </div>
      </section>

      {/* ── How to Choose ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Choose Your Itinerary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Building className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choose Marrakech Immersion if...
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                This is your first time in Morocco and you want the full sensory experience: bustling souks,
                historic palaces, incredible food, and a taste of mountain life. Everything is walkable.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choose Fes Deep Dive if...
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You prefer history, craft traditions, and authentic experiences over Instagram spots. Fes feels
                centuries older than Marrakech. The Meknes and Volubilis day trip adds Roman ruins to the mix.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Choose Marrakech + Desert if...
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You want the most photogenic trip and do not mind a faster pace. The Agafay overnight is magical
                for couples and photographers. City and nature without the 10-hour Sahara drive.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Important Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Flight times matter: Marrakech Immersion has the most flexibility for late arrivals or early
                departures. The Desert Escape requires a full Day 2. Fes requires a separate flight or 7-hour train.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Tips for a 3-Day Morocco Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light and smart. A carry-on or 40L backpack is ideal for three days.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingEssentials.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{item.item}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Is 3 days enough for Morocco?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Yes, 3 days is enough to explore one major city in depth or combine two destinations. You can see Marrakech&apos;s medina, souks, and palaces, take a day trip to the Atlas Mountains, or combine Marrakech with an overnight desert excursion. For a multi-city tour, consider our 7-day itinerary.</p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">How much does a 3-day trip to Morocco cost?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Budget: from 1,500 MAD (~150 USD) for basic accommodation and street food. Mid-range: from 3,500 MAD (~350 USD) with boutique riads and guided tours. Luxury: from 8,000 MAD (~800 USD) for premium riads and fine dining. Seasonal pricing can change these estimates by 20-30%.</p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">What is the best city for a 3-day trip?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Marrakech is best for first-timers: compact medina, diverse attractions, great food, and proximity to the Atlas Mountains and Agafay Desert. Fes is better for travelers seeking authenticity, history, and the world&apos;s largest car-free urban area.</p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Can I visit the Sahara Desert in 3 days?</h3>
              <p className="text-sm text-[var(--text-secondary)]">The Sahara (Merzouga) requires 2 days of driving each way from Marrakech, so it is not feasible in 3 days. The Agafay Desert is just 45 minutes away and offers camel rides, glamping, and stargazing. For the Sahara, see our 7-day or 10-day itineraries.</p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">What should I pack for 3 days in Morocco?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Light layers, comfortable walking shoes, a scarf for mosques, sunscreen, a water bottle, and a small daypack. In winter, add a warm jacket. In summer, bring breathable fabrics and a sun hat. A carry-on bag is sufficient for 3 days.</p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Do I need a visa for Morocco?</h3>
              <p className="text-sm text-[var(--text-secondary)]">Citizens of the US, UK, EU, Canada, and Australia do not need a visa for stays up to 90 days. You need a passport valid for at least 6 months from entry. Always check the latest requirements with the Moroccan embassy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/marrakech-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to the Red City with neighborhood breakdowns, restaurant picks, and hidden gems.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the world&apos;s largest car-free urban area. Medina walks, tanneries, and artisan workshops.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about visiting the Sahara: Merzouga, Erg Chebbi, camel treks, and desert camps.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wallet className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Travel Morocco on any budget. Money-saving tips, cheap eats, free attractions, and budget stays.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white text-center">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready to Plan Your 3-Day Morocco Adventure?
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Explore our city guides, booking tips, and local insights to make every moment of your
            short trip unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-itinerary-7-days"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <CalendarDays className="w-5 h-5" /> View 7-Day Itinerary
            </Link>
            <Link
              href="/plan"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Heart className="w-5 h-5" /> Start Planning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
