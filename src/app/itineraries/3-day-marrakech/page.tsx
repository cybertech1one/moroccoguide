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
  Palette,
  BookOpen,
  ShoppingBag,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: '3 Days in Marrakech - Complete Weekend Itinerary with Costs | CityGuide',
  description:
    'The perfect 3-day Marrakech itinerary: Bahia Palace, Jemaa el-Fnaa, Jardin Majorelle, YSL Museum, cooking class, and Ourika Valley day trip. Detailed guide with times, costs in MAD/USD, and accommodation tips.',
  keywords: [
    'Marrakech 3 day itinerary',
    'weekend in Marrakech',
    'Marrakech travel guide',
    'Jemaa el-Fnaa',
    'Jardin Majorelle',
    'Marrakech souks',
    'Marrakech cooking class',
    'Ourika Valley day trip',
    'Marrakech budget',
    'Marrakech riad',
  ],
  openGraph: {
    title: '3 Days in Marrakech - Complete Weekend Itinerary | CityGuide',
    description:
      'Three perfectly curated days in the Red City: medina exploration, gardens, cuisine, and an Atlas foothills escape.',
    url: 'https://cityguide.ma/itineraries/3-day-marrakech',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Marrakech medina rooftops with Koutoubia Mosque minaret',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/itineraries/3-day-marrakech' },
};

/* ================================================================
   JSON-LD
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: '3 Days in Marrakech',
    description:
      'The perfect weekend getaway in Marrakech covering the medina, souks, Bahia Palace, Jardin Majorelle, YSL Museum, a cooking class, and the Ourika Valley.',
    url: 'https://cityguide.ma/itineraries/3-day-marrakech',
    touristType: 'Cultural',
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 3,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: 'Marrakech Medina' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Place', name: 'Marrakech Gueliz & Gardens' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Place', name: 'Ourika Valley / Ouzoud Falls' } },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '150',
      highPrice: '1500',
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

export default function ThreeDayMarrakechPage() {
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
          <li className="text-text-primary font-medium">3 Days in Marrakech</li>
        </ol>
      </nav>

      {/* -- Hero -- */}
      <section className="relative overflow-hidden bg-[var(--color-secondary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"
            alt="Aerial view of Marrakech medina with terracotta rooftops and the Koutoubia Mosque"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              3-Day Itinerary
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              3 Days in Marrakech
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              The Red City distilled into three perfect days -- ancient palaces, intoxicating souks,
              world-class gardens, hands-on cooking, and an escape to the Atlas foothills.
              Every hour is accounted for so you miss nothing.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">3 Days / 2 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">Marrakech + Day Trip</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">$50-500/day</span>
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
            Marrakech is a city that rewards every minute you spend in it. This 3-day itinerary
            is designed for travelers who want to experience the essence of the Red City without
            feeling rushed. Day one is dedicated to the ancient medina and its sensory overload.
            Day two explores the more modern side -- the famous gardens and the creative arts scene --
            with a hands-on cooking experience. Day three ventures into the Atlas Mountains
            foothills for a completely different perspective on Moroccan life.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="card-moroccan p-4 text-center">
              <Sun className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Best Season</p>
              <p className="text-sm text-text-muted">Oct-Apr (avoid Jul-Aug heat)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Thermometer className="w-6 h-6 text-[var(--color-secondary)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Temperature</p>
              <p className="text-sm text-text-muted">15-35 C seasonal</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-green)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Budget Range</p>
              <p className="text-sm text-text-muted">$150-$1,500 total</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Star className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Difficulty</p>
              <p className="text-sm text-text-muted">Easy (city walking)</p>
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
                    The Medina -- Palaces, Souks & Jemaa el-Fnaa
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Dive headfirst into the ancient heart of Marrakech. The medina is a UNESCO World
                  Heritage site that has been the beating heart of Morocco for nearly a thousand years.
                  Today you will explore its most iconic landmarks.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:30 AM: Bahia Palace</p>
                      <p className="text-sm text-text-secondary">
                        Start your Marrakech exploration at the Bahia Palace (70 MAD / $7), a 19th-century
                        masterpiece built for Si Moussa, the grand vizier. Wander through 8,000 square
                        meters of intricately tiled rooms, painted cedar ceilings, and tranquil
                        courtyards planted with jasmine and orange trees. Arrive at opening to avoid
                        crowds. Allow 1-1.5 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShoppingBag className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Souk Exploration</p>
                      <p className="text-sm text-text-secondary">
                        Plunge into the labyrinthine souks stretching north from Jemaa el-Fnaa. Each
                        section specializes in different crafts: Souk Smarine (textiles), Souk des
                        Babouches (leather slippers), Souk Haddadine (metalwork), and Souk des
                        Teinturiers (dyed fabrics). Haggling is expected -- start at one-third
                        of the asking price and negotiate from there. A guided souk tour costs
                        200-400 MAD ($20-40) for 2 hours and is invaluable for first-timers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">12:00 PM: Ben Youssef Medersa</p>
                      <p className="text-sm text-text-secondary">
                        Visit this 14th-century Islamic college, one of the largest in North Africa.
                        The courtyard features an extraordinary central basin surrounded by carved
                        stucco, zellige tiles, and cedar lattice screens. Re-opened after extensive
                        renovation, entry is 50 MAD ($5). This is one of the most photogenic
                        buildings in all of Morocco.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:30 PM: Lunch at a Medina Riad</p>
                      <p className="text-sm text-text-secondary">
                        Escape the medina bustle at Le Jardin (120-200 MAD / $12-20), a hidden garden
                        restaurant in the heart of the souks. Or try Nomad (150-250 MAD / $15-25) for
                        modern Moroccan cuisine with rooftop terrace views. Budget option: Souk Cafe
                        for a tagine (50-80 MAD / $5-8).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">3:00 PM: Hammam Experience</p>
                      <p className="text-sm text-text-secondary">
                        Unwind in a traditional Moroccan hammam (steam bath). The Heritage Spa at La
                        Mamounia offers a premium experience (800-1,200 MAD / $80-120). Mid-range:
                        Les Bains de Marrakech (400-600 MAD / $40-60). Budget: public Hammam Dar el-Bacha
                        (15-30 MAD / $1.50-3) -- bring your own soap and towel.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">6:00 PM: Jemaa el-Fnaa at Sunset</p>
                      <p className="text-sm text-text-secondary">
                        As the sun begins to set, head to Africa&apos;s most famous square. Watch as it
                        transforms from a daytime market into an open-air spectacle of snake charmers,
                        Gnaoua musicians, henna artists, acrobats, and storytellers. Grab a fresh
                        orange juice from the stalls (5 MAD / $0.50). Then climb to the terrace
                        of Cafe de France or Grand Balcon du Cafe Glacier for the best rooftop
                        views over the chaos below (25-40 MAD for a drink).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:00 PM: Dinner on the Square</p>
                      <p className="text-sm text-text-secondary">
                        For an authentic experience, eat at the food stalls on Jemaa el-Fnaa itself.
                        Stall #1 and #14 are perennial favorites. A full meal of grilled meats,
                        salads, bread, and a drink costs 30-60 MAD ($3-6). For a more refined evening,
                        book dinner at Dar Yacout (500-800 MAD / $50-80) -- a palatial restaurant
                        with multi-course Moroccan feasts.
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
                    <strong>Budget:</strong> Hostel Riad Marrakech Rouge (150-250 MAD / $15-25/night) --
                    <strong> Mid-range:</strong> Riad BE (700-1,200 MAD / $70-120/night) --
                    <strong> Luxury:</strong> La Mamounia (4,000+ MAD / $400+/night)
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
                    Gardens, Art & Moroccan Cooking
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Today you will explore the artistic and culinary side of Marrakech. From the iconic
                  Majorelle Garden to the haute couture world of Yves Saint Laurent, and ending
                  with a hands-on cooking class where you will master the art of tagine and pastilla.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:00 AM: Jardin Majorelle</p>
                      <p className="text-sm text-text-secondary">
                        Be at the gate when it opens at 8:00 AM to enjoy the garden in peaceful
                        solitude. Created by French painter Jacques Majorelle in the 1920s and later
                        restored by Yves Saint Laurent and Pierre Berge, the garden features over
                        300 species of plants, cobalt-blue buildings, and a Berber museum. Entry: 70 MAD
                        ($7) for the garden, additional 30 MAD ($3) for the Berber Museum. Allow 1.5 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Palette className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Yves Saint Laurent Museum</p>
                      <p className="text-sm text-text-secondary">
                        Right next to the garden, this striking terracotta-and-brick museum (100 MAD / $10)
                        houses a permanent collection of YSL&apos;s most iconic designs, including the Mondrian
                        dresses and le smoking tuxedo suits. The building itself, designed by Studio KO,
                        is an architectural gem. The on-site cafe serves excellent coffee and pastries.
                        Allow 1-1.5 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">12:00 PM: Gueliz Lunch & Exploration</p>
                      <p className="text-sm text-text-secondary">
                        Wander through the Ville Nouvelle neighborhood of Gueliz, Marrakech&apos;s modern
                        quarter with Art Deco architecture, contemporary galleries, and chic cafes.
                        Lunch at Amal Women&apos;s Training Center (70-120 MAD / $7-12) -- a social
                        enterprise serving excellent Moroccan food while training disadvantaged women.
                        Or try Grand Cafe de la Poste (150-250 MAD / $15-25) for French-Moroccan
                        brasserie fare in a beautifully restored 1920s post office.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">3:00 PM: Cooking Class</p>
                      <p className="text-sm text-text-secondary">
                        The highlight of day two: a Moroccan cooking class. Most classes (3-4 hours) begin
                        with a guided trip to the spice market to buy ingredients, then return to a riad
                        kitchen to prepare a full Moroccan meal -- typically tagine, couscous, Moroccan salads,
                        and pastilla. You eat what you cook at the end. La Maison Arabe cooking workshop:
                        600-900 MAD ($60-90). Amal Center: 450 MAD ($45). Souk Cuisine: 500 MAD ($50).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:00 PM: Rooftop Evening</p>
                      <p className="text-sm text-text-secondary">
                        After your cooking class dinner, enjoy a nightcap on a rooftop bar. El Fenn&apos;s
                        rooftop is one of the best -- cocktails cost 80-120 MAD ($8-12) with views over
                        the medina and Atlas Mountains in the distance. Or head to the Kabana rooftop
                        at the Kabana Club for live music and cocktails.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">Same accommodation as Day 1.</p>
                </div>
              </div>
            </div>

            {/* DAY 3 */}
            <div className="relative pl-8 md:pl-12 pb-12">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-accent)] border-4 border-[var(--surface-muted)]" />
              <div className="card-featured p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] font-heading font-bold text-sm">
                    Day 3
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Day Trip -- Ourika Valley or Ouzoud Falls
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Escape the city for the lush foothills of the High Atlas Mountains. Choose between
                  the closer Ourika Valley (45 min drive) or the more dramatic Ouzoud Falls (2.5 hour
                  drive). Both offer a refreshing contrast to the medina heat.
                </p>

                {/* Option A */}
                <div className="p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)] mb-6">
                  <h4 className="font-heading font-bold text-text-primary mb-3 flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-[var(--color-green)]" />
                    Option A: Ourika Valley (Recommended for Short Trips)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Car className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <strong>9:00 AM:</strong> Depart Marrakech heading south. The drive takes 45 minutes
                        (30 km) along the P2017. Grand taxi from Marrakech: 200-300 MAD ($20-30) return.
                        Organized day trip: 350-600 MAD ($35-60) including guide and lunch.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mountain className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <strong>10:00 AM:</strong> Hike to the Setti Fatma waterfalls (7 cascades, 1.5-2 hours
                        round trip for the first two). Local guides at the trailhead charge 100-150 MAD ($10-15).
                        The trail is rocky but manageable with good shoes. Swim in the natural pools
                        during warmer months.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <strong>1:00 PM:</strong> Riverside Berber lunch at one of the terraced restaurants
                        overlooking the Ourika River. Traditional tagine with fresh bread: 60-100 MAD ($6-10).
                        Visit an argan oil cooperative on the way back (free, with products for sale).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Option B */}
                <div className="p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)] mb-6">
                  <h4 className="font-heading font-bold text-text-primary mb-3 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-[var(--color-secondary)]" />
                    Option B: Ouzoud Falls (For Longer Day)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Car className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <strong>7:30 AM:</strong> Depart early -- the drive is 150 km (2.5 hours). Organized
                        day trips run 400-700 MAD ($40-70) including transport, guide, and lunch.
                        The falls are 110 meters high -- the tallest in North Africa.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Camera className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <strong>10:00 AM:</strong> Walk down to the base of the falls (20 min descent).
                        Watch for Barbary macaque monkeys in the olive trees. Take a small boat ride
                        across the pool at the base (20 MAD / $2) for the best photos looking up
                        at the cascading water.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Utensils className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <p className="text-sm text-text-secondary">
                        <strong>12:30 PM:</strong> Lunch at one of the riverside restaurants with views
                        of the falls (50-100 MAD / $5-10). Return to Marrakech by late afternoon.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">4:00 PM: Return & Final Exploration</p>
                      <p className="text-sm text-text-secondary">
                        Back in Marrakech, use your remaining time for any last souk shopping (you will
                        negotiate better armed with two days of experience), visit the Saadian Tombs
                        (70 MAD / $7) if not yet seen, or simply relax at your riad.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:30 PM: Farewell Dinner</p>
                      <p className="text-sm text-text-secondary">
                        End your trip in style. Dar Moha (300-500 MAD / $30-50) serves creative Moroccan
                        cuisine poolside in a converted palace. Pepe Nero (250-400 MAD / $25-40) offers
                        Italian-Moroccan fusion. Or return to the Jemaa el-Fnaa food stalls for one
                        last authentic experience.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[var(--color-accent)]" />
                    Departure Tips
                  </p>
                  <p className="text-sm text-text-secondary">
                    Marrakech Menara Airport (RAK) is only 15-20 minutes from the medina by taxi
                    (80-150 MAD / $8-15). Many riads can arrange airport transfers. If flying out
                    the next morning, a final night in the medina is perfect -- most flights to
                    Europe depart in the morning.
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
              <p className="text-3xl font-display font-bold text-[var(--color-green)] mb-4">$150-250</p>
              <p className="text-xs text-text-muted mb-4">Per person, 3 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation (2 nights)</span><span className="font-medium">$30-50</span></li>
                <li className="flex justify-between"><span>Food (3 days)</span><span className="font-medium">$30-45</span></li>
                <li className="flex justify-between"><span>Entrance Fees</span><span className="font-medium">$20-30</span></li>
                <li className="flex justify-between"><span>Day Trip</span><span className="font-medium">$35-50</span></li>
                <li className="flex justify-between"><span>Transport in City</span><span className="font-medium">$15-25</span></li>
                <li className="flex justify-between"><span>Hammam</span><span className="font-medium">$3-10</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$50-85</span>
                </li>
              </ul>
            </div>

            <div className="card-featured p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Mid-Range</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4">$400-700</p>
              <p className="text-xs text-text-muted mb-4">Per person, 3 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation (2 nights)</span><span className="font-medium">$140-240</span></li>
                <li className="flex justify-between"><span>Food (3 days)</span><span className="font-medium">$75-120</span></li>
                <li className="flex justify-between"><span>Entrance Fees</span><span className="font-medium">$25-35</span></li>
                <li className="flex justify-between"><span>Cooking Class</span><span className="font-medium">$50-90</span></li>
                <li className="flex justify-between"><span>Day Trip</span><span className="font-medium">$40-70</span></li>
                <li className="flex justify-between"><span>Hammam & Spa</span><span className="font-medium">$40-60</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$130-230</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-secondary)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Luxury</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-secondary)] mb-4">$1,000-1,500+</p>
              <p className="text-xs text-text-muted mb-4">Per person, 3 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation (2 nights)</span><span className="font-medium">$600-1,000</span></li>
                <li className="flex justify-between"><span>Fine Dining (3 days)</span><span className="font-medium">$150-250</span></li>
                <li className="flex justify-between"><span>Private Guides</span><span className="font-medium">$80-120</span></li>
                <li className="flex justify-between"><span>Cooking Class (private)</span><span className="font-medium">$90-150</span></li>
                <li className="flex justify-between"><span>Luxury Hammam</span><span className="font-medium">$80-120</span></li>
                <li className="flex justify-between"><span>Private Day Trip</span><span className="font-medium">$100-200</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$330-500+</span>
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
              Packing List for Marrakech
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[var(--color-secondary)]" />
                  Clothing
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Lightweight, loose-fitting layers',
                    'Comfortable walking shoes (cobblestones!)',
                    'Scarf/shawl for shoulders & mosques',
                    'Long trousers or midi/maxi skirts',
                    'Light jacket (evenings can be cool)',
                    'Sandals for riad lounging',
                    'Sun hat',
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
                  Essentials
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Passport and travel insurance',
                    'Cash in MAD (ATMs in Gueliz & medina edges)',
                    'Small crossbody bag (theft prevention)',
                    'Phone with offline maps downloaded',
                    'Portable charger',
                    'Tissues/wet wipes',
                    'Small first aid kit',
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
                  Day Trip Extras
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Sturdy hiking shoes (Ourika waterfalls)',
                    'Sunscreen SPF 30+',
                    'Reusable water bottle',
                    'Swimwear (waterfall pools)',
                    'Small towel (quick-dry)',
                    'Camera with charged battery',
                    'Light rain jacket (mountain weather)',
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

      {/* -- Book This Trip CTA -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-morocco text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Book Your Marrakech Weekend
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let us handle the details -- riad reservations, guided tours, cooking class bookings,
            and day trip logistics. We work with the best local partners for a seamless experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bookings@cityguide.ma?subject=3-Day Marrakech Itinerary Inquiry"
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
                  alt="Morocco desert and mountain landscape"
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
                <p className="text-sm text-text-muted mt-1">Marrakech, Sahara, Fes & more</p>
              </div>
            </Link>

            <Link href="/itineraries/5-day-desert" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=600&q=80"
                  alt="Sahara desert golden dunes"
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
                <p className="text-sm text-text-muted mt-1">From Marrakech to the Sahara</p>
              </div>
            </Link>

            <Link href="/itineraries/10-day-grand-tour" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=600&q=80"
                  alt="Chefchaouen blue streets"
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
                <p className="text-sm text-text-muted mt-1">Coast to desert to mountains</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
