import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home, MapPin, Star, Clock, Info, ArrowRight, Sparkles, DollarSign,
  CheckCircle, AlertTriangle, Users, Building, Compass, Sun, Moon, Sunrise, Utensils, Bed,
  Bus, Camera, Luggage, CalendarDays, Map, Wallet, Heart, Train, Globe, Shirt, Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco 3-Day Itinerary 2026 | 4 Weekend Trip Plans With Budgets & Times',
  description:
    'Plan your perfect 3 days in Morocco with four detailed itineraries: Marrakech only, Marrakech + day trip, Fes + Chefchaouen, or Casablanca + Rabat. Hourly schedules, real restaurant picks, transport costs, and accommodation tips from 200 MAD/night.',
  keywords: ['morocco 3 day itinerary', '3 days in morocco', 'morocco weekend trip', 'short trip morocco',
    'morocco 3 day trip', '3 day morocco itinerary', 'weekend in morocco', 'morocco short break',
    '3 days marrakech itinerary', '3 days fes chefchaouen', 'casablanca rabat itinerary',
    'marrakech essaouira day trip', 'morocco weekend getaway', 'morocco long weekend',
    'morocco travel plan 3 days', 'best 3 day morocco trip', 'morocco short holiday 2026', 'morocco itinerary budget'],
  openGraph: {
    title: 'Morocco 3-Day Itinerary 2026 | 4 Weekend Trip Plans With Budgets & Times',
    description:
      'Four detailed 3-day Morocco itineraries with hourly schedules, daily budgets, real restaurant names, and transport details. Covers Marrakech, Fes, Chefchaouen, Casablanca, and Rabat.',
    url: `${BASE_URL}/morocco-3-day-itinerary`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech medina rooftops at golden hour with the Atlas Mountains in the distance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 3-Day Itinerary 2026 | 4 Short Trip Plans',
    description:
      'Four ready-to-use 3-day Morocco itineraries. Hourly schedules, real costs, restaurant picks, and transport between cities. Budget from 1,500 MAD total.',
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
  name: 'Morocco 3-Day Itinerary 2026 | 4 Weekend Trip Plans',
  description:
    'Four detailed 3-day Morocco itineraries covering Marrakech, Fes, Chefchaouen, Casablanca, and Rabat with hourly schedules and real budgets.',
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
      { '@type': 'ListItem', position: 2, name: 'Morocco 3-Day Itinerary', item: `${BASE_URL}/morocco-3-day-itinerary` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is 3 days enough to see Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Three days is enough to explore one city deeply or combine two nearby destinations. You will not cover the whole country, but you can experience the medina culture, cuisine, and architecture that define Morocco. Focus on one region rather than rushing between distant cities.' } },
    { '@type': 'Question', name: 'How much does a 3-day trip to Morocco cost?', acceptedAnswer: { '@type': 'Answer', text: 'Budget travelers spend from 1,500 MAD (about 150 USD) for 3 days covering hostel beds, street food, and free walking tours. Mid-range travelers spend from 3,500 MAD (350 USD) with boutique riads and sit-down restaurants. Luxury runs from 8,000 MAD (800 USD) and up.' } },
    { '@type': 'Question', name: 'What is the best city for a 3-day Morocco trip?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech is the best choice for first-time visitors because of its concentration of attractions, food scene, and easy airport access. Fes suits travelers who want a more authentic, less tourist-saturated experience. Casablanca works well for business travelers extending their stay.' } },
    { '@type': 'Question', name: 'Can I visit the Sahara Desert in 3 days?', acceptedAnswer: { '@type': 'Answer', text: 'The Sahara (Merzouga/Erg Chebbi) requires a minimum of 2 days driving each way from Marrakech. It is not realistic in a 3-day trip. Instead, visit the Agafay Desert (45 minutes from Marrakech) for camel rides and glamping, or add the Sahara to a 5-7 day itinerary.' } },
    { '@type': 'Question', name: 'Is it safe to travel Morocco for a weekend?', acceptedAnswer: { '@type': 'Answer', text: 'Morocco is one of the safest countries in North Africa. Tourist areas in Marrakech, Fes, Casablanca, and Rabat are well-policed. Standard precautions apply: watch your belongings in crowded medinas, use registered taxis, and avoid poorly lit alleys late at night.' } },
    { '@type': 'Question', name: 'What should I pack for 3 days in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'A carry-on suitcase is sufficient. Pack light layers, comfortable walking shoes, a scarf for mosque visits, sunscreen, and a reusable water bottle. Evenings can be cool even in summer, so bring a light jacket. European-style power adapters (Type C/E) are needed.' } },
    { '@type': 'Question', name: 'Do I need a visa for a 3-day trip to Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Citizens of the US, UK, EU, Canada, Australia, and many other countries do not need a visa for stays under 90 days. Your passport must be valid for at least 6 months from your entry date. Check the Moroccan consulate website for the latest requirements.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ITINERARY OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const itineraryOptions = [
  { label: 'Option A', name: '3 Days in Marrakech', icon: Building, bestFor: 'First-timers, foodies, culture seekers', pace: 'Relaxed', budget: 'From 1,500 MAD total' },
  { label: 'Option B', name: 'Marrakech + Day Trip', icon: Compass, bestFor: 'Nature lovers, active travelers', pace: 'Moderate', budget: 'From 2,000 MAD total' },
  { label: 'Option C', name: 'Fes + Chefchaouen', icon: Camera, bestFor: 'Photographers, history buffs', pace: 'Moderate to fast', budget: 'From 2,200 MAD total' },
  { label: 'Option D', name: 'Casablanca + Rabat', icon: Globe, bestFor: 'Architecture fans, business extensions', pace: 'Relaxed', budget: 'From 1,800 MAD total' },
] as const;

const transportRoutes = [
  { from: 'Marrakech', to: 'Essaouira', train: null, bus: '3h, from 80 MAD (Supratours)', transfer: '2.5h, from 800 MAD' },
  { from: 'Marrakech', to: 'Ouzoud Falls', train: null, bus: '3h, from 60 MAD (CTM)', transfer: '2.5h, from 900 MAD' },
  { from: 'Marrakech', to: 'Ourika Valley', train: null, bus: 'Grand taxi 1.5h, from 25 MAD', transfer: '1h, from 500 MAD' },
  { from: 'Fes', to: 'Chefchaouen', train: null, bus: '4h, from 75 MAD (CTM)', transfer: '3.5h, from 1,200 MAD' },
  { from: 'Casablanca', to: 'Rabat', train: '1h Al Boraq, from 80 MAD', bus: '1.5h, from 40 MAD', transfer: '1h, from 600 MAD' },
  { from: 'Fes', to: 'Meknes', train: '45 min, from 25 MAD', bus: '1h, from 20 MAD', transfer: '45 min, from 400 MAD' },
] as const;

const accommodationPicks = [
  { city: 'Marrakech', budget: { name: 'Equity Point Hostel', price: 'From 200 MAD/night', note: 'Rooftop pool, medina location' }, mid: { name: 'Riad Kniza', price: 'From 600 MAD/night', note: 'Boutique riad, pool, breakfast' }, luxury: { name: 'Royal Mansour', price: 'From 5,000 MAD/night', note: 'Private riads, world-class spa' } },
  { city: 'Fes', budget: { name: 'Funky Fes Hostel', price: 'From 150 MAD/night', note: 'Medina access, terrace' }, mid: { name: 'Riad Laaroussa', price: 'From 700 MAD/night', note: '17th-century palace, hammam' }, luxury: { name: 'Palais Faraj', price: 'From 2,500 MAD/night', note: 'Panoramic views, pool' } },
  { city: 'Chefchaouen', budget: { name: 'Dar Antonio', price: 'From 180 MAD/night', note: 'Blue medina, rooftop terrace' }, mid: { name: 'Casa Perleta', price: 'From 500 MAD/night', note: 'Mountain views, breakfast' }, luxury: { name: 'Lina Ryad & Spa', price: 'From 1,500 MAD/night', note: 'Hammam, pool, terrace' } },
  { city: 'Casablanca', budget: { name: 'HI Casablanca Hostel', price: 'From 180 MAD/night', note: 'Central, clean dorms' }, mid: { name: 'Hotel & Spa Le Doge', price: 'From 900 MAD/night', note: 'Art deco, spa, rooftop' }, luxury: { name: 'Four Seasons', price: 'From 3,500 MAD/night', note: 'Oceanfront, two pools' } },
  { city: 'Rabat', budget: { name: 'Riad Zyo', price: 'From 200 MAD/night', note: 'Kasbah location, traditional' }, mid: { name: 'Riad Kalaa', price: 'From 600 MAD/night', note: 'Medina courtyard, terrace' }, luxury: { name: 'Sofitel Jardin des Roses', price: 'From 2,200 MAD/night', note: 'Garden, pool, near palace' } },
] as const;

const packingList = [
  { item: 'Comfortable walking shoes', icon: Zap, reason: 'Medina streets are uneven cobblestone. Expect 15,000+ steps per day.' },
  { item: 'Light layers and a scarf', icon: Shirt, reason: 'Temperature swings of 10-15 degrees day to night. Scarf doubles as mosque cover.' },
  { item: 'Sunscreen SPF 50', icon: Sun, reason: 'Morocco averages 300 sunny days per year. UV stays high even in winter.' },
  { item: 'Small daypack (under 20L)', icon: Luggage, reason: 'Large bags snag on narrow medina walls. Leave valuables at your riad.' },
  { item: 'Power adapter (Type C/E)', icon: Zap, reason: 'European-style two-pin plugs. Charge devices overnight for full days out.' },
  { item: 'Cash in small bills (20/50 MAD)', icon: DollarSign, reason: 'Medina vendors, taxis, and food stalls are cash-only. ATMs at airports.' },
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
          alt="Marrakech medina rooftops at golden hour with mosque towers and the Atlas Mountains behind"
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
            Four ready-to-use short trip plans with day-by-day schedules, honest budgets, and real
            restaurant names. Make every hour count in 72 hours.
          </p>
        </div>
      </section>

      {/* ── Can You See Morocco in 3 Days? ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Can You See Morocco in 3 Days?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
            Three days is not enough to cover Morocco end to end. The country is the size of California, and the
            Sahara Desert alone requires a 10-hour drive from Marrakech. But 72 hours gives you enough time to
            explore one city deeply or pair two nearby destinations for a satisfying short trip. The key is to
            pick one region and resist cramming in too many stops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" /> Realistic in 3 Days
              </h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 mt-0.5 text-green-600 shrink-0" /> Full Marrakech medina exploration</li>
                <li className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 mt-0.5 text-green-600 shrink-0" /> Marrakech + Essaouira or Ouzoud day trip</li>
                <li className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 mt-0.5 text-green-600 shrink-0" /> Fes medina + Chefchaouen overnight</li>
                <li className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 mt-0.5 text-green-600 shrink-0" /> Casablanca + Rabat by high-speed train</li>
                <li className="flex items-start gap-1.5"><CheckCircle className="w-3 h-3 mt-0.5 text-green-600 shrink-0" /> Agafay Desert glamping from Marrakech</li>
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-amber-600" /> Not Realistic in 3 Days
              </h3>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 mt-0.5 text-amber-600 shrink-0" /> Sahara Desert (Merzouga) from Marrakech</li>
                <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 mt-0.5 text-amber-600 shrink-0" /> Marrakech + Fes + Chefchaouen combo</li>
                <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 mt-0.5 text-amber-600 shrink-0" /> Full northern Morocco road trip</li>
                <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 mt-0.5 text-amber-600 shrink-0" /> Atlantic coast surf tour</li>
                <li className="flex items-start gap-1.5"><AlertTriangle className="w-3 h-3 mt-0.5 text-amber-600 shrink-0" /> Atlas Mountains multi-day trek</li>
              </ul>
            </div>
          </div>
          <div className="card-moroccan p-5 bg-amber-50/50">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Seasonal pricing note:</strong> All prices in this
                guide are 2026 estimates. Accommodation costs increase 30-50% during peak season (October to April)
                and around major holidays. Confirm current prices before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Choose Your Option ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pick Your 3-Day Plan
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four tested itineraries for different travel styles. Each is self-contained with schedules, restaurant picks, and budget estimates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {itineraryOptions.map((opt) => {
              const OptIcon = opt.icon;
              return (
                <div key={opt.label} className="card-moroccan p-5">
                  <span className="text-xs font-semibold text-[var(--color-accent)] uppercase">{opt.label}</span>
                  <OptIcon className="w-8 h-8 text-[var(--color-accent)] my-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{opt.name}</h3>
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 mb-1"><Users className="w-3 h-3" /> {opt.bestFor}</p>
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 mb-1"><Clock className="w-3 h-3" /> Pace: {opt.pace}</p>
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1"><Wallet className="w-3 h-3" /> {opt.budget}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OPTION A: 3 DAYS IN MARRAKECH
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Option A: 3 Days in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The classic first-timer&apos;s route. All major sights, a hammam, the best food stalls, and a mountain day trip in three focused days.
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
                  <p className="text-xs text-[var(--text-secondary)]">Moroccan breakfast: msemen flatbread, amlou (almond-argan dip), olives, fresh orange juice, and mint tea. Most riads include breakfast in the room rate.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:30 AM &mdash; Bahia Palace</p>
                  <p className="text-xs text-[var(--text-secondary)]">19th-century architectural masterpiece with zellige tilework and painted cedar ceilings. Entry from 70 MAD. Arrive at opening to avoid tour groups. Allow 60-90 minutes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Mellah &amp; Spice Souks</p>
                  <p className="text-xs text-[var(--text-secondary)]">Walk through the historic Jewish quarter. Visit the Lazama Synagogue (from 30 MAD) and browse herbalists selling argan oil, ras el hanout, and saffron along the way.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at Cafe Clock</p>
                  <p className="text-xs text-[var(--text-secondary)]">Kasbah area. Try the camel burger (from 85 MAD) or vegetarian tagine. Rooftop terrace with medina views.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Saadian Tombs &amp; Koutoubia Mosque</p>
                  <p className="text-xs text-[var(--text-secondary)]">Saadian Tombs (from 70 MAD) feature ornate 16th-century burial chambers. Then walk to the Koutoubia Mosque. Non-Muslims cannot enter, but the minaret and surrounding gardens make excellent photos.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM &mdash; Hammam</p>
                  <p className="text-xs text-[var(--text-secondary)]">Public hammam from 50 MAD or Heritage Spa from 400 MAD with gommage and argan oil massage. Allow 90 minutes. The heat and scrub remove the dust of a full day walking.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 PM &mdash; Jemaa el-Fnaa &amp; Dinner</p>
                  <p className="text-xs text-[var(--text-secondary)]">Watch storytellers and musicians in the square. Eat at the food stalls (full plate from 30 MAD) or Nomad restaurant for rooftop dining (mains from 120 MAD). Stall row 1 and 14 have the best grilled meats.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 1: from 400 MAD</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> All walking distance</span>
            </div>
          </div>

          {/* Day 2 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: Gardens, Modern City &amp; Souks
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:30 AM &mdash; Majorelle Garden &amp; YSL Museum</p>
                  <p className="text-xs text-[var(--text-secondary)]">Arrive at opening. Garden entry from 70 MAD, YSL Museum from 100 MAD. Cobalt-blue villa, cacti, and water features. Allow 90 minutes before the crowds arrive around 10 AM.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">10:30 AM &mdash; Gueliz Ville Nouvelle</p>
                  <p className="text-xs text-[var(--text-secondary)]">Walk through modern Marrakech. Art galleries on Rue de la Liberte, concept stores, and coffee at Bacha Coffee (from 40 MAD). A different Marrakech from the medina.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at Al Fassia</p>
                  <p className="text-xs text-[var(--text-secondary)]">All-female-run Marrakech institution in Gueliz. Lamb tagine with prunes and almonds from 130 MAD. Reservations recommended for Friday lunch.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:30 PM &mdash; Souk Shopping</p>
                  <p className="text-xs text-[var(--text-secondary)]">Enter from Souk Semmarine and work through the leather, carpet, and lantern sections. Start negotiating at 40% of the asking price. Budget from 200 MAD for small souvenirs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">5:00 PM &mdash; Rooftop Mint Tea</p>
                  <p className="text-xs text-[var(--text-secondary)]">Maison de la Photographie terrace for views of the Koutoubia minaret and snowcapped Atlas peaks. Tea from 30 MAD. Photography museum entry from 40 MAD.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Dinner at Le Jardin</p>
                  <p className="text-xs text-[var(--text-secondary)]">Hidden garden restaurant in the medina. Moroccan-Mediterranean fusion, mains from 110 MAD. Tables under banana plants surrounded by turtles. Book ahead.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 2: from 500 MAD</span>
              <span className="flex items-center gap-1"><Camera className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Great photography day</span>
            </div>
          </div>

          {/* Day 3 */}
          <div className="card-moroccan p-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 3: Atlas Mountains Day Trip
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 AM &mdash; Early pickup</p>
                  <p className="text-xs text-[var(--text-secondary)]">Quick riad breakfast, then 7:30 AM departure. Shared Atlas day trips from 300 MAD per person. Private transfer from 800 MAD for the vehicle. Drive through the Ourika Valley.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM &mdash; Imlil Valley hike</p>
                  <p className="text-xs text-[var(--text-secondary)]">Meet a local Berber guide (from 200 MAD) for a 2-hour walk through walnut groves and terraced farms. Stop at a traditional home for mint tea with a family. Views of Jebel Toubkal on clear days.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Berber lunch</p>
                  <p className="text-xs text-[var(--text-secondary)]">Home-cooked tagine at a village guesthouse with mountain views. From 80 MAD per person with bread baked in a communal clay oven.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Argan cooperative</p>
                  <p className="text-xs text-[var(--text-secondary)]">Women&apos;s cooperative demonstration. Buy cosmetic-grade argan oil direct from 80 MAD per 100ml. Skip roadside tourist shops with inflated prices.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:30 PM &mdash; Return to Marrakech</p>
                  <p className="text-xs text-[var(--text-secondary)]">Back at your riad by 6 PM. Freshen up before your final evening in the city.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Farewell dinner at Dar Yacout</p>
                  <p className="text-xs text-[var(--text-secondary)]">Palatial multi-course feast in a restored riad. Set menu from 700 MAD. Seven courses, live music, rooftop cocktails. Or keep it real at Chez Lamine for lamb tangia from 70 MAD.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 3: from 600 MAD</span>
              <span className="flex items-center gap-1"><Bus className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Transport included in trip</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OPTION B: MARRAKECH + DAY TRIP
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Option B: Marrakech + Day Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two days in Marrakech plus a full day at Ouzoud Waterfalls, Ourika Valley, or Essaouira. Pick one day trip based on your interests.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Sun className="w-5 h-5 text-[var(--color-gold)]" /> Day 1 &amp; Day 3
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Follow Option A&apos;s Day 1 (palaces, medina, hammam, Jemaa el-Fnaa) and Day 2 (Majorelle, souks, farewell dinner). The day trip replaces the Atlas Mountains excursion.
            </p>
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: Choose Your Day Trip
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Ouzoud Waterfalls</h4>
                <p className="text-xs text-[var(--text-secondary)] mb-1">110m cascading falls. Shared minibus from 150 MAD round trip, 3 hours each way. Barbary macaques, swimming, olive groves. Best April-November.</p>
                <span className="text-xs text-[var(--color-accent)] font-semibold">Day cost: from 300 MAD</span>
              </div>
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Ourika Valley</h4>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Atlas valley 60 km away. Grand taxi from 25 MAD. Setti Fatma waterfalls (spring), Berber villages, botanical gardens. Closer than Imlil.</p>
                <span className="text-xs text-[var(--color-accent)] font-semibold">Day cost: from 200 MAD</span>
              </div>
              <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Essaouira</h4>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Atlantic coast town. Supratours bus from 80 MAD, 3 hours each way. Blue-and-white medina, fresh seafood at Port Grill (from 50 MAD), wide beach. Leave 7 AM, return 9 PM.</p>
                <span className="text-xs text-[var(--color-accent)] font-semibold">Day cost: from 350 MAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OPTION C: FES + CHEFCHAOUEN
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Option C: 3 Days Fes + Chefchaouen
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two days in Morocco&apos;s oldest imperial city plus an overnight in the Blue City. The most photogenic 3-day trip you can build.
          </p>

          {/* Day 1 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 1: Fes el-Bali Medina
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:30 AM &mdash; Breakfast at Riad Laaroussa</p>
                  <p className="text-xs text-[var(--text-secondary)]">Open to non-guests (from 120 MAD). Fresh pastries, eggs, and excellent coffee in a 17th-century courtyard.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:30 AM &mdash; Guided medina walk</p>
                  <p className="text-xs text-[var(--text-secondary)]">Hire an official guide at Bab Bou Jeloud (from 300 MAD for a half-day). Essential in Fes: the medina has 9,400 alleys. Your guide covers the dyers&apos; souk, copper souk, and woodworking quarter.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Chouara Tanneries</p>
                  <p className="text-xs text-[var(--text-secondary)]">View the leather tanneries from a terrace above. Shops offer free access (they expect browsing). Best morning light for photography. The mint sprig they give you helps with the smell.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at The Ruined Garden</p>
                  <p className="text-xs text-[var(--text-secondary)]">Garden restaurant in a partially ruined riad. Seasonal menu with dishes from 80 MAD. Ivy-draped courtyard. Reserve ahead; it fills up fast.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:30 PM &mdash; Bou Inania Madrasa &amp; Al-Qarawiyyin</p>
                  <p className="text-xs text-[var(--text-secondary)]">Bou Inania Madrasa (from 30 MAD) is one of the few religious buildings open to non-Muslims. Walk past Al-Qarawiyyin, the world&apos;s oldest continuously operating university (founded 859 AD).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:30 PM &mdash; Pottery workshop</p>
                  <p className="text-xs text-[var(--text-secondary)]">Fes pottery cooperative: watch artisans hand-painting blue-and-white Fassi ceramics. Paint your own tile from 150 MAD.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Dinner at Dar Hatim</p>
                  <p className="text-xs text-[var(--text-secondary)]">Family-run riad serving authentic Fassi home-cooking. Set menu from 200 MAD: pastilla, tagine, and Moroccan pastries. Intimate dining with other travelers.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 1: from 500 MAD</span>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" /> All within the medina</span>
            </div>
          </div>

          {/* Day 2 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: Travel to Chefchaouen &amp; Blue City Afternoon
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 AM &mdash; CTM bus to Chefchaouen</p>
                  <p className="text-xs text-[var(--text-secondary)]">Departs Fes CTM station. 4-hour drive through the Rif Mountains (from 75 MAD). Book tickets the day before at the CTM office or online. Arrive around 11 AM.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:30 AM &mdash; Check in &amp; medina walk</p>
                  <p className="text-xs text-[var(--text-secondary)]">Drop bags at your riad. The entire medina is painted in shades of blue. Start at Place Outa el-Hammam, the central square with cafes under the Kasbah walls.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">1:00 PM &mdash; Lunch at Bab Ssour</p>
                  <p className="text-xs text-[var(--text-secondary)]">Traditional Moroccan dishes on a terrace overlooking the valley. Tagines from 60 MAD. Try the local goat cheese with fig jam (from 30 MAD).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:30 PM &mdash; Kasbah Museum &amp; photography</p>
                  <p className="text-xs text-[var(--text-secondary)]">Small museum in the fortress (from 10 MAD). The garden has panoramic views. Spend the afternoon photographing the blue streets. The light between 3-5 PM makes the blue walls glow.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">5:00 PM &mdash; Ras el-Maa waterfall</p>
                  <p className="text-xs text-[var(--text-secondary)]">Walk to the eastern edge of the medina where a natural spring cascades into a small waterfall. Locals wash wool here. Peaceful spot to sit and watch the sunset.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Dinner at Casa Aladdin</p>
                  <p className="text-xs text-[var(--text-secondary)]">Rooftop restaurant with Rif Mountain views. Tagines from 65 MAD, fresh juices from 20 MAD. One of the few spots open late in Chefchaouen.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 2: from 350 MAD + transport</span>
              <span className="flex items-center gap-1"><Bus className="w-3.5 h-3.5 text-[var(--color-accent)]" /> 4-hour bus transfer</span>
            </div>
          </div>

          {/* Day 3 */}
          <div className="card-moroccan p-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 3: Chefchaouen Morning &amp; Return
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 AM &mdash; Spanish Mosque hike</p>
                  <p className="text-xs text-[var(--text-secondary)]">30-minute uphill hike to the abandoned Spanish Mosque above the town. The sunrise view over the blue medina against the Rif Mountains is worth the early alarm. Free to visit.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM &mdash; Breakfast &amp; souvenir shopping</p>
                  <p className="text-xs text-[var(--text-secondary)]">Breakfast at your riad. Browse the shops for handwoven blankets (from 150 MAD), leather goods, and locally made soaps. Chefchaouen crafts are cheaper than Marrakech.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Bus className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Bus back to Fes</p>
                  <p className="text-xs text-[var(--text-secondary)]">CTM or Supratours bus (from 75 MAD). Arrive Fes by 3 PM. If flying out of Fes, head to the airport. If you have the evening, revisit the Merenid Tombs viewpoint for a sunset panorama over the medina.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 3: from 300 MAD + transport</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          OPTION D: CASABLANCA + RABAT
          ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Option D: 3 Days Casablanca + Rabat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s economic and political capitals connected by Africa&apos;s first high-speed train. Art deco, the Hassan II Mosque, and Rabat&apos;s quieter charms.
          </p>

          {/* Day 1 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 1: Casablanca
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM &mdash; Hassan II Mosque</p>
                  <p className="text-xs text-[var(--text-secondary)]">One of the world&apos;s largest mosques, built partly over the Atlantic. One of the few mosques open to non-Muslims. Guided tour from 130 MAD, 1 hour. The marble floors, cedar ceilings, and retractable roof are staggering.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Corniche &amp; Art Deco Quarter</p>
                  <p className="text-xs text-[var(--text-secondary)]">Walk the oceanfront corniche, then head to the Habous Quarter for its 1930s art deco buildings. The old French colonial core mixes Moorish arches with European facades.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Lunch at La Sqala</p>
                  <p className="text-xs text-[var(--text-secondary)]">Garden restaurant inside an 18th-century bastion. Moroccan and French dishes from 90 MAD. Peaceful courtyard with orange trees. A Casablanca institution.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:30 PM &mdash; Morocco Mall or Quartier Habous</p>
                  <p className="text-xs text-[var(--text-secondary)]">Morocco Mall for modern shopping, or Quartier Habous for traditional patisseries and olive merchants. Habous is Casablanca&apos;s cleanest souk with fixed prices.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">5:00 PM &mdash; Rick&apos;s Cafe</p>
                  <p className="text-xs text-[var(--text-secondary)]">The Casablanca film-inspired bar/restaurant in the old medina. Cocktails from 80 MAD. Live piano music. Worth a drink even if you skip dinner. Reservations required for dinner.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:30 PM &mdash; Seafood dinner at Le Cabestan</p>
                  <p className="text-xs text-[var(--text-secondary)]">Oceanfront restaurant. Fresh fish and shellfish platters from 180 MAD. Watch the Atlantic waves crash below your table. The grilled sole and lobster bisque are standouts.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 1: from 600 MAD</span>
            </div>
          </div>

          {/* Day 2 */}
          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 2: High-Speed Train to Rabat
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Train className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">8:30 AM &mdash; Al Boraq train to Rabat</p>
                  <p className="text-xs text-[var(--text-secondary)]">Africa&apos;s only high-speed rail. Casa Voyageurs to Rabat Agdal in under 1 hour. First class from 80 MAD, second class from 50 MAD. Trains every 30 minutes. Modern, clean, and punctual.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">10:00 AM &mdash; Kasbah of the Udayas</p>
                  <p className="text-xs text-[var(--text-secondary)]">12th-century fortress at the mouth of the Bou Regreg River. Blue-and-white Andalusian streets, the Andalusian Garden (free entry), and views across to Sale. Rabat&apos;s most photogenic corner.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:00 PM &mdash; Lunch at Le Dhow</p>
                  <p className="text-xs text-[var(--text-secondary)]">Restaurant on a converted boat on the Bou Regreg River. Seafood and Moroccan dishes from 100 MAD. Unique setting. Or eat in the medina at Dar Zaki for home-style tagines from 60 MAD.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Hassan Tower &amp; Mausoleum</p>
                  <p className="text-xs text-[var(--text-secondary)]">The unfinished 12th-century minaret stands among 200 columns. Adjacent Mausoleum of Mohammed V features exquisite marble and zellige work. Free entry. Allow 45 minutes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">4:00 PM &mdash; Chellah Necropolis</p>
                  <p className="text-xs text-[var(--text-secondary)]">Roman and medieval ruins overrun by gardens, storks, and cats. Entry from 70 MAD. One of Morocco&apos;s most atmospheric historical sites. Best in late afternoon light.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">7:00 PM &mdash; Dinner in Rabat medina</p>
                  <p className="text-xs text-[var(--text-secondary)]">Rue des Consuls for pottery shopping then dinner at Dar Zaki (set menu from 150 MAD) or Cosmopolitan (French-Moroccan fusion from 120 MAD). Rabat&apos;s medina is calmer and less pushy than Marrakech&apos;s.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 2: from 500 MAD + train</span>
              <span className="flex items-center gap-1"><Train className="w-3.5 h-3.5 text-[var(--color-accent)]" /> 1-hour high-speed rail</span>
            </div>
          </div>

          {/* Day 3 */}
          <div className="card-moroccan p-6">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Sun className="w-6 h-6 text-[var(--color-gold)]" /> Day 3: Rabat Morning &amp; Return
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sunrise className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">9:00 AM &mdash; Mohammed VI Museum of Modern Art</p>
                  <p className="text-xs text-[var(--text-secondary)]">Morocco&apos;s premier contemporary art museum. Entry from 40 MAD. Moroccan and international artists. The building itself is a modernist standout. Allow 90 minutes.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">11:00 AM &mdash; Rabat medina souvenirs</p>
                  <p className="text-xs text-[var(--text-secondary)]">Rue des Consuls has some of Morocco&apos;s best pottery and carpet shops with less aggressive sales tactics than Marrakech. Fixed-price cooperatives line the street.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Utensils className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">12:30 PM &mdash; Farewell lunch</p>
                  <p className="text-xs text-[var(--text-secondary)]">Cafe Maure inside the Kasbah Udayas for mint tea and Moroccan pastries (from 30 MAD) with river views. Or a full lunch at Dar El Medina (mains from 80 MAD).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Train className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">2:00 PM &mdash; Train back to Casablanca</p>
                  <p className="text-xs text-[var(--text-secondary)]">Al Boraq back to Casa Voyageurs (from 50 MAD). If flying out, connect to Mohammed V Airport by train (30 min, from 45 MAD) or taxi (from 300 MAD).</p>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-[var(--border-default)] flex items-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Day 3: from 300 MAD + train</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Breakdown by Option
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Total 3-day costs per person excluding flights. Accommodation, food, transport, and activities included.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Option A: Marrakech Only</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-green-700 uppercase mb-1">Budget</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 1,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~150 USD. Hostel, street food, free walking tour, public hammam.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 3,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~350 USD. Boutique riad, restaurants, all entries, Atlas trip, spa.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 8,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~800 USD. Luxury riad, fine dining, private tours, La Mamounia Spa.</p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Option B: Marrakech + Day Trip</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-green-700 uppercase mb-1">Budget</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 2,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~200 USD. Adds shared transport and packed lunch for day trip.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~400 USD. Private driver for day trip, sit-down lunch, boutique riad.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 9,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~900 USD. Private SUV, luxury day experiences, 5-star accommodation.</p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Option C: Fes + Chefchaouen</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-green-700 uppercase mb-1">Budget</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 2,200 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~220 USD. Hostels, CTM bus, street food, self-guided walks.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 4,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~450 USD. Riads in both cities, guided tour, cooking class, restaurants.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 8,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~850 USD. Private transfer, Palais Faraj, Lina Ryad, private guide.</p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6 zellige-border">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Option D: Casablanca + Rabat</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-green-700 uppercase mb-1">Budget</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 1,800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~180 USD. Hostels, Al Boraq 2nd class, street food, free sites.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--color-gold)] uppercase mb-1">Mid-Range</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~400 USD. Boutique hotel, Al Boraq 1st class, sit-down restaurants.</p>
                </div>
                <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase mb-1">Luxury</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">From 10,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">~1,000 USD. Four Seasons, Le Cabestan, private transfers, Sofitel Rabat.</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-[var(--text-muted)] italic mt-6 text-center">
            Seasonal pricing can change. Add 20-30% during peak season (October-April) and around major holidays.
          </p>
        </div>
      </section>

      {/* ── Transport Between Cities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Between Cities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Trains, buses, and private transfers for every route in these itineraries. Book CTM/Supratours buses one day ahead during peak season.
          </p>

          <div className="space-y-4">
            {transportRoutes.map((route) => (
              <div key={`${route.from}-${route.to}`} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                  {route.from} <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" /> {route.to}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {route.train && (
                    <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <Train className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span><strong>Train:</strong> {route.train}</span>
                    </div>
                  )}
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <Bus className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span><strong>Bus:</strong> {route.bus}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span><strong>Private:</strong> {route.transfer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6 bg-amber-50/50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Grand taxis</strong> are shared sedans that depart when full (6 passengers). Cheap but uncomfortable. Petit taxis work within cities only. Insist on the meter or agree on a fare before getting in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One budget, one mid-range, and one luxury pick per city. Prices are per room per night and may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodationPicks.map((city) => (
              <div key={city.city} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> {city.city}
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs font-semibold text-green-700 uppercase">Budget</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">{city.budget.name}</p>
                    <p className="text-xs text-[var(--color-accent)] font-semibold">{city.budget.price}</p>
                    <p className="text-xs text-[var(--text-muted)]">{city.budget.note}</p>
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs font-semibold text-[var(--color-gold)] uppercase">Mid-Range</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">{city.mid.name}</p>
                    <p className="text-xs text-[var(--color-accent)] font-semibold">{city.mid.price}</p>
                    <p className="text-xs text-[var(--text-muted)]">{city.mid.note}</p>
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase">Luxury</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">{city.luxury.name}</p>
                    <p className="text-xs text-[var(--color-accent)] font-semibold">{city.luxury.price}</p>
                    <p className="text-xs text-[var(--text-muted)]">{city.luxury.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packing for a Short Trip ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing for a Short Morocco Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A carry-on bag is enough for 3 days. Pack light and leave room for souvenirs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingList.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.item}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Is 3 days enough to see Morocco?</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Three days is enough to explore one city deeply or combine two nearby destinations. You will not cover the whole country, but you can experience the medina culture, cuisine, and architecture that define Morocco. Focus on one region rather than rushing between distant cities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">How much does a 3-day trip to Morocco cost?</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget travelers spend from 1,500 MAD (about 150 USD) for 3 days covering hostel beds, street food, and free walking tours. Mid-range travelers spend from 3,500 MAD (350 USD) with boutique riads and sit-down restaurants. Luxury runs from 8,000 MAD (800 USD) and up. Excludes international flights.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">What is the best city for a 3-day Morocco trip?</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech for first-time visitors (concentration of attractions, food scene, direct flights). Fes for travelers who want a more authentic, less tourist-saturated experience. Casablanca for business travelers connecting through Mohammed V Airport.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Can I visit the Sahara Desert in 3 days?</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Sahara (Merzouga / Erg Chebbi) requires 2 days driving each way from Marrakech. Not realistic in 3 days. Visit the Agafay Desert (45 min from Marrakech) instead for camel rides, quad biking, and glamping. Save the Sahara for a 5-7 day itinerary.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to travel Morocco for a weekend?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is one of the safest countries in North Africa. Tourist areas are well-policed. Standard precautions apply: watch belongings in crowded medinas, use registered taxis, and avoid poorly lit alleys late at night.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I pack for 3 days in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A carry-on suitcase is sufficient. Pack light layers, comfortable walking shoes, a scarf for mosque visits, sunscreen SPF 50, and a reusable water bottle. European-style power adapters (Type C/E) are needed.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa for a 3-day trip to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Citizens of the US, UK, EU, Canada, Australia, and many other countries do not need a visa for stays under 90 days. Your passport must be valid for at least 6 months from entry. Check the Moroccan consulate website for the latest requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Wallet className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed cost breakdowns, money-saving tips, and budget accommodation picks across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything first-time visitors need to know: customs, etiquette, safety, and what to expect.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/packing" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Luggage className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete packing list by season with clothing, gear, and electronics recommendations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <Heart className="w-10 h-10 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready to Book Your 3-Day Morocco Trip?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Start with our city guides for detailed maps, restaurant reviews, and accommodation deep dives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/cities/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              Marrakech Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Fes Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities/casablanca"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/30"
            >
              Casablanca Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
