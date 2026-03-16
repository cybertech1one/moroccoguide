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
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: '7 Days: Best of Morocco Itinerary - Marrakech, Sahara, Fes & Chefchaouen | CityGuide',
  description:
    'The ultimate 7-day Morocco itinerary covering Marrakech medina, Atlas Mountains, Sahara Desert camel trek, Fes tanneries, and Chefchaouen blue city. Day-by-day guide with costs, accommodations, and insider tips.',
  keywords: [
    'Morocco 7 day itinerary',
    'best of Morocco trip',
    'Marrakech to Chefchaouen route',
    'Sahara desert tour from Marrakech',
    'Morocco one week itinerary',
    'Fes medina guide',
    'Chefchaouen blue city',
    'Morocco travel plan',
    'Morocco road trip',
  ],
  openGraph: {
    title: '7 Days: Best of Morocco Itinerary | CityGuide',
    description:
      'The perfect week in Morocco: Marrakech, Atlas Mountains, Sahara Desert, Fes, and Chefchaouen. Complete day-by-day guide.',
    url: 'https://citytoursmorocco.com/itineraries/7-day-morocco',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Morocco landscape with desert dunes and mountains',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/itineraries/7-day-morocco' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: '7 Days: Best of Morocco',
    description:
      'The ultimate 7-day Morocco itinerary covering Marrakech, Atlas Mountains, Sahara Desert, Fes, and Chefchaouen.',
    url: 'https://citytoursmorocco.com/itineraries/7-day-morocco',
    touristType: 'Cultural',
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 7,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: 'Marrakech' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Place', name: 'Marrakech' } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Place', name: 'Atlas Mountains' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Place', name: 'Sahara Desert - Merzouga' } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Place', name: 'Sahara Desert - Merzouga' } },
        { '@type': 'ListItem', position: 6, item: { '@type': 'Place', name: 'Fes' } },
        { '@type': 'ListItem', position: 7, item: { '@type': 'Place', name: 'Chefchaouen' } },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '600',
      highPrice: '2500',
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

export default function SevenDayMoroccoPage() {
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
          <li className="text-text-primary font-medium">7 Days: Best of Morocco</li>
        </ol>
      </nav>

      {/* -- Hero Section -- */}
      <section className="relative overflow-hidden bg-[var(--color-secondary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Panoramic view of Morocco with desert dunes stretching to the horizon"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              7-Day Itinerary
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best of Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the vibrant souks of Marrakech to the golden dunes of the Sahara, the ancient medina
              of Fes, and the blue-washed streets of Chefchaouen -- seven days that capture
              the essence of Morocco.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">7 Days / 6 Nights</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">5 Destinations</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">~1,200 km Total</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-sm">$85-350/day</span>
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
            This carefully crafted 7-day itinerary is the most popular route through Morocco, combining
            the country&apos;s three greatest hits -- Marrakech, the Sahara, and Fes -- with the
            stunning bonus of the Atlas Mountains and Chefchaouen. You will cross dramatic mountain passes,
            sleep under a blanket of stars in the desert, navigate the world&apos;s largest car-free
            urban area, and wander through streets painted every shade of blue. The route moves
            from south to north, covering approximately 1,200 kilometers with a mix of private
            transfers and scenic drives.
          </p>

          {/* Route Map Description */}
          <div className="card-moroccan p-6 mb-8">
            <h3 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
              Route Overview
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              {[
                'Marrakech',
                'Atlas Mountains',
                'Ouarzazate',
                'Todra Gorge',
                'Merzouga (Sahara)',
                'Midelt',
                'Fes',
                'Chefchaouen',
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

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="card-moroccan p-4 text-center">
              <Sun className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Best Season</p>
              <p className="text-sm text-text-muted">Mar-May, Sep-Nov</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Thermometer className="w-6 h-6 text-[var(--color-secondary)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Temperature</p>
              <p className="text-sm text-text-muted">18-32 C average</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-green)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Budget Range</p>
              <p className="text-sm text-text-muted">$600-$2,500 total</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Star className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="font-heading font-semibold text-text-primary">Difficulty</p>
              <p className="text-sm text-text-muted">Easy to Moderate</p>
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
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30 last:border-l-0">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 1
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Arrive in Marrakech -- The Red City Awaits
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Arrive at Marrakech Menara Airport (RAK) and transfer to your riad in the medina.
                  Spend the afternoon exploring the ancient heart of Marrakech at a gentle pace,
                  letting the sensory overload of colors, sounds, and scents wash over you.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Morning / Afternoon: Arrival & Check-in</p>
                      <p className="text-sm text-text-secondary">
                        Airport transfer to medina riad (20-30 min, ~150-200 MAD / $15-20 by taxi).
                        Settle in, enjoy mint tea on the rooftop terrace. If arriving early, visit the
                        nearby Bahia Palace (70 MAD / $7 entry) -- a stunning 19th-century palace
                        with intricate zellige tilework and painted cedar ceilings.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Late Afternoon: Souk Exploration</p>
                      <p className="text-sm text-text-secondary">
                        Dive into the labyrinthine souks near the Ben Youssef Medersa. Browse leather
                        goods, lanterns, spices, and carpets. A guided souk tour costs around 200-400 MAD ($20-40)
                        for 2-3 hours and is highly recommended for first-timers to learn the art of negotiation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Evening: Jemaa el-Fnaa & Dinner</p>
                      <p className="text-sm text-text-secondary">
                        As the sun sets, head to Jemaa el-Fnaa -- the most famous square in Africa.
                        Watch the nightly spectacle of snake charmers, storytellers, and musicians unfold.
                        Dine at the food stalls (30-60 MAD / $3-6 per person) or head to a rooftop restaurant
                        like Nomad or Le Jardin for refined Moroccan cuisine (200-400 MAD / $20-40 per person).
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
                    <strong>Budget:</strong> Riad Laayoun (350-500 MAD / $35-50/night) --
                    <strong> Mid-range:</strong> Riad Kniza (800-1,500 MAD / $80-150/night) --
                    <strong> Luxury:</strong> Royal Mansour (5,000+ MAD / $500+/night)
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
                    Marrakech Deep Dive -- Gardens, Palaces & Hammam
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  A full day to explore the best of Marrakech. From Art Deco gardens to ancient
                  palaces, today you will uncover the layers of history that make this city endlessly
                  fascinating.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Morning: Jardin Majorelle & YSL Museum</p>
                      <p className="text-sm text-text-secondary">
                        Open at 8:00 AM -- arrive early to beat the crowds. The Majorelle Garden (70 MAD / $7)
                        is a cobalt-blue oasis created by French painter Jacques Majorelle and later
                        restored by Yves Saint Laurent. Next door, the Yves Saint Laurent Museum (100 MAD / $10)
                        showcases the designer&apos;s iconic creations. Allow 2-3 hours for both.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Midday: Saadian Tombs & Koutoubia Mosque</p>
                      <p className="text-sm text-text-secondary">
                        Visit the Saadian Tombs (70 MAD / $7), a hidden necropolis discovered in 1917
                        featuring stunning Italian Carrara marble and intricate stucco. Walk past the
                        Koutoubia Mosque -- Marrakech&apos;s most iconic landmark with its 77-meter minaret
                        (exterior only for non-Muslims). Lunch at a traditional riad restaurant (80-150 MAD / $8-15).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Afternoon: Traditional Hammam Experience</p>
                      <p className="text-sm text-text-secondary">
                        Indulge in a traditional Moroccan hammam -- a steam bath ritual dating back centuries.
                        Budget option: public hammam like Hammam Mouassine (20-50 MAD / $2-5). Luxury option:
                        Heritage Spa at La Mamounia or Les Bains de Marrakech (500-1,000 MAD / $50-100).
                        Includes exfoliation with black soap and a kessa glove scrub.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Evening: Rooftop Dinner</p>
                      <p className="text-sm text-text-secondary">
                        End the day with dinner at one of Marrakech&apos;s celebrated rooftop restaurants.
                        Cafe Arabe offers panoramic medina views with Italian-Moroccan fusion (250-400 MAD / $25-40).
                        Or try Al Fassia for some of the best traditional Moroccan cuisine in the city,
                        run entirely by women (200-350 MAD / $20-35).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">Same riad as Day 1 in Marrakech medina.</p>
                </div>
              </div>
            </div>

            {/* DAY 3 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 3
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Atlas Mountains -- Over the Tizi n&apos;Tichka Pass
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Leave Marrakech and cross the High Atlas Mountains via the dramatic Tizi n&apos;Tichka
                  pass at 2,260 meters. The scenery shifts from red desert plains to lush green
                  valleys, terraced Berber villages, and snow-capped peaks.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:00 AM: Depart Marrakech</p>
                      <p className="text-sm text-text-secondary">
                        Early departure heading southeast on the N9 highway. The drive to Ait Ben Haddou
                        is approximately 3.5 hours (185 km). Private transfer costs 1,500-2,000 MAD ($150-200)
                        or join a shared tour for 300-500 MAD ($30-50). Stop at scenic viewpoints
                        along the winding mountain road.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:30 AM: Ait Ben Haddou</p>
                      <p className="text-sm text-text-secondary">
                        Explore the UNESCO World Heritage ksar (fortified village) of Ait Ben Haddou --
                        the filming location for Gladiator, Game of Thrones, and Lawrence of Arabia.
                        Cross the river (wade or take the bridge) and climb to the granary at the top
                        for panoramic views. Entry is free, but a local guide (50-100 MAD / $5-10) adds context.
                        Allow 1.5-2 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:00 PM: Lunch in Ouarzazate</p>
                      <p className="text-sm text-text-secondary">
                        Continue 30 km to Ouarzazate, the &quot;Hollywood of Morocco.&quot; Lunch at Chez Dimitri
                        or Restaurant Douyria (60-120 MAD / $6-12). Optional visit to Atlas Studios
                        (50 MAD / $5) -- Africa&apos;s largest film studio where sets from Kingdom of Heaven
                        and The Mummy still stand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">3:00 PM: Dades Valley Drive</p>
                      <p className="text-sm text-text-secondary">
                        Drive the spectacular &quot;Road of a Thousand Kasbahs&quot; through the Dades Valley
                        (160 km, ~2.5 hours). Dramatic red-rock canyons and crumbling kasbahs dot the
                        landscape. Arrive at Todra Gorge or continue to Tinghir for the night.
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
                    <strong>Budget:</strong> Auberge Le Festival, Todra Gorge (250-400 MAD / $25-40) --
                    <strong> Mid-range:</strong> Dar Ayour, Tinghir (500-800 MAD / $50-80) --
                    <strong> Luxury:</strong> Kasbah Tamadot (2,000+ MAD / $200+)
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
                    Into the Sahara -- Merzouga & Camel Trek
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Today you will journey deep into the Sahara Desert, arriving at the towering golden dunes
                  of Erg Chebbi near Merzouga. The afternoon camel trek into the desert to your camp
                  is an unforgettable experience.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">8:00 AM: Todra Gorge Morning Walk</p>
                      <p className="text-sm text-text-secondary">
                        If staying near Todra Gorge, take an early morning walk through the 300-meter-high
                        canyon walls -- a favorite with rock climbers. The morning light creates
                        extraordinary photographic conditions. Free entry.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">10:00 AM: Drive to Merzouga</p>
                      <p className="text-sm text-text-secondary">
                        Drive southeast through the Ziz Valley oasis and across the hammada (rocky desert)
                        to Merzouga (220 km, ~3.5 hours). The landscape becomes increasingly arid,
                        and then suddenly the towering dunes of Erg Chebbi appear on the horizon --
                        some reaching 150 meters high.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sun className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">4:00 PM: Camel Trek into the Dunes</p>
                      <p className="text-sm text-text-secondary">
                        Mount your dromedary camel for a 1.5-hour trek deep into the dunes. Your Berber
                        guide leads you through the undulating sand sea as the light turns golden.
                        Standard camel trek + desert camp: 500-800 MAD ($50-80) per person.
                        Luxury camps with private tents: 2,000-4,000 MAD ($200-400).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Evening: Desert Camp Under the Stars</p>
                      <p className="text-sm text-text-secondary">
                        Arrive at your desert camp as the sun sets over the dunes. Enjoy traditional
                        Berber tagine dinner, drumming and music around the campfire, and the most
                        extraordinary stargazing you have ever experienced -- the Milky Way is
                        visible to the naked eye. Sleep in a Berber tent on the dunes.
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
                    <strong>Standard:</strong> Shared desert camp with communal tent (500-800 MAD / $50-80 all-inclusive) --
                    <strong> Luxury:</strong> Merzouga Luxury Desert Camp or Erg Chebbi Luxury Camp (2,000-4,000 MAD / $200-400)
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 5 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 5
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Sahara Sunrise & Journey to Fes
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Wake before dawn to witness a Saharan sunrise -- one of the most magical moments
                  of the trip. Then begin the long but scenic drive north to Fes, passing through the
                  Middle Atlas cedar forests.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">5:30 AM: Sahara Sunrise</p>
                      <p className="text-sm text-text-secondary">
                        Climb to the top of the nearest dune to watch the sunrise paint the desert in
                        shades of orange, pink, and gold. This is a bucket-list moment. Return to camp
                        for breakfast, then camel ride back to Merzouga.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">9:00 AM: Drive North via Midelt</p>
                      <p className="text-sm text-text-secondary">
                        The drive from Merzouga to Fes is approximately 460 km (7-8 hours with stops).
                        The route passes through Errachidia, the dramatic Ziz Gorge, the Middle Atlas
                        town of Midelt (good lunch stop), and the cedar forests of Azrou where you may
                        spot Barbary macaques -- the only wild monkeys in Africa north of the Sahara.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:00 PM: Lunch in Midelt</p>
                      <p className="text-sm text-text-secondary">
                        Stop in Midelt, known as the &quot;apple capital&quot; of Morocco. Restaurant Kasbah
                        Myriem serves excellent Berber dishes (60-100 MAD / $6-10). Browse the local
                        market for fossils and mineral specimens from the nearby Atlas mines.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">5:00 PM: Arrive in Fes</p>
                      <p className="text-sm text-text-secondary">
                        Arrive in Fes, the spiritual and cultural capital of Morocco. Check into your
                        riad in the Fes el-Bali medina and rest before an evening stroll through the
                        atmospheric alleyways. The medina of Fes is the world&apos;s largest car-free urban
                        area with over 9,000 winding streets.
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
                    <strong>Budget:</strong> Dar Seffarine (300-500 MAD / $30-50) --
                    <strong> Mid-range:</strong> Riad Fes (1,200-2,000 MAD / $120-200) --
                    <strong> Luxury:</strong> Palais Faraj (2,500+ MAD / $250+)
                  </p>
                </div>
              </div>
            </div>

            {/* DAY 6 */}
            <div className="relative pl-8 md:pl-12 pb-12 border-l-2 border-[var(--color-secondary)]/30">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--surface-muted)]" />
              <div className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-heading font-bold text-sm">
                    Day 6
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Fes -- The World&apos;s Largest Medieval City
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  A full day to explore Fes el-Bali, founded in 789 AD and home to the world&apos;s
                  oldest continuously operating university. The medina is a living, breathing
                  medieval city where donkeys carry goods through alleyways unchanged for centuries.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sunrise className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">9:00 AM: Guided Medina Tour</p>
                      <p className="text-sm text-text-secondary">
                        A licensed guide is essential in the Fes medina (half-day: 300-500 MAD / $30-50).
                        Visit the Al-Qarawiyyin Mosque and University (founded 859 AD, exterior only
                        for non-Muslims), the Bou Inania Medersa (30 MAD / $3) with its exquisite
                        carved stucco and cedar, and the Nejjarine Museum of Wood Arts (20 MAD / $2).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">11:00 AM: Chouara Tannery</p>
                      <p className="text-sm text-text-secondary">
                        Visit the famous Chouara Tannery from one of the surrounding leather shops
                        for an aerial view. The centuries-old honeycomb of stone vessels filled with
                        colorful dyes is an iconic sight. You will be offered a sprig of mint to combat
                        the smell. Access is usually free but expect to be shown leather goods for sale.
                        Best photographed in the morning light.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:00 PM: Street Food & Lunch</p>
                      <p className="text-sm text-text-secondary">
                        Fes is Morocco&apos;s culinary capital. Try a traditional Fassi pastilla (pigeon pie
                        with almonds and cinnamon) at Cafe Clock (80-150 MAD / $8-15), or do a street
                        food crawl: harira soup (5-10 MAD), msemen flatbread (3-5 MAD), and freshly
                        squeezed pomegranate juice (10-15 MAD).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Afternoon: Artisan Workshops & Royal Palace</p>
                      <p className="text-sm text-text-secondary">
                        Visit traditional artisan workshops -- zellige tile making, brass work, and
                        embroidery. Walk past the Royal Palace gates (Dar el-Makhzen) with their
                        massive brass doors. End at the Borj Nord viewpoint for a panoramic
                        sunset view over the entire medina spread out below.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--border-light)]">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Bed className="w-4 h-4 text-[var(--color-secondary)]" />
                    Where to Stay
                  </p>
                  <p className="text-sm text-text-secondary">Same riad as Day 5 in Fes el-Bali.</p>
                </div>
              </div>
            </div>

            {/* DAY 7 */}
            <div className="relative pl-8 md:pl-12 pb-12">
              <div className="absolute left-[-9px] md:left-[-13px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[var(--color-accent)] border-4 border-[var(--surface-muted)]" />
              <div className="card-featured p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent-dark)] font-heading font-bold text-sm">
                    Day 7
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary">
                    Chefchaouen -- The Blue Pearl of Morocco
                  </h3>
                </div>
                <p className="text-text-secondary leading-relaxed mb-6">
                  The grand finale of your Morocco adventure. Drive through the Rif Mountains
                  to Chefchaouen, one of the most photogenic towns on earth, where every building
                  is painted in shades of blue.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">7:00 AM: Drive to Chefchaouen</p>
                      <p className="text-sm text-text-secondary">
                        Depart Fes heading north through the Rif Mountains. The drive is approximately
                        210 km (4 hours). The road winds through spectacular mountain scenery with
                        occasional stops at roadside fruit stands. Private transfer: 1,200-1,800 MAD ($120-180).
                        Shared grand taxi: 75-100 MAD ($8-10) per person. CTM bus: 75 MAD ($8).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">11:00 AM: Explore the Blue Medina</p>
                      <p className="text-sm text-text-secondary">
                        Wander through the photogenic blue-washed streets of the medina. Every turn
                        reveals a new shade of blue -- from powder to cobalt to cerulean. Visit the
                        Place Outa el Hammam, the main square, and explore the small Kasbah museum
                        (10 MAD / $1) with its garden and ethnographic exhibits.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Utensils className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">1:00 PM: Lunch with a View</p>
                      <p className="text-sm text-text-secondary">
                        Enjoy lunch at Casa Aladdin or Lala Mesouda overlooking the medina rooftops
                        (60-120 MAD / $6-12). Try the local specialty: goat cheese with fresh bread
                        and olive oil, accompanied by sweet mint tea.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mountain className="w-5 h-5 text-[var(--color-green)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-heading font-semibold text-text-primary">Afternoon: Spanish Mosque Hike</p>
                      <p className="text-sm text-text-secondary">
                        Hike up to the abandoned Spanish Mosque on the hill above town (20-30 min walk).
                        The sunset view from here -- overlooking the entire blue-washed town with the
                        Rif Mountains behind -- is the perfect ending to your Morocco journey.
                        Free, no entry fee.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                  <p className="font-heading font-semibold text-sm text-text-primary mb-2 flex items-center gap-2">
                    <Info className="w-4 h-4 text-[var(--color-accent)]" />
                    Onward Travel
                  </p>
                  <p className="text-sm text-text-secondary">
                    From Chefchaouen, you can take a CTM bus to Tangier (100 MAD / $10, 3 hours) for
                    flights out, or return to Fes (75 MAD, 4 hours). Tangier has an international
                    airport with flights to major European cities. Alternatively, extend your stay
                    with a night in Chefchaouen.
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
            {/* Budget */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-green)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Budget</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-green)] mb-4">$600-900</p>
              <p className="text-xs text-text-muted mb-4">Per person, 7 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation</span><span className="font-medium">$210-350</span></li>
                <li className="flex justify-between"><span>Transport</span><span className="font-medium">$100-150</span></li>
                <li className="flex justify-between"><span>Food</span><span className="font-medium">$105-175</span></li>
                <li className="flex justify-between"><span>Activities</span><span className="font-medium">$80-120</span></li>
                <li className="flex justify-between"><span>Desert Camp</span><span className="font-medium">$50-80</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$85-130</span>
                </li>
              </ul>
            </div>

            {/* Mid-Range */}
            <div className="card-featured p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Mid-Range</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-accent)] mb-4">$1,200-1,800</p>
              <p className="text-xs text-text-muted mb-4">Per person, 7 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation</span><span className="font-medium">$490-840</span></li>
                <li className="flex justify-between"><span>Transport</span><span className="font-medium">$250-350</span></li>
                <li className="flex justify-between"><span>Food</span><span className="font-medium">$175-280</span></li>
                <li className="flex justify-between"><span>Activities</span><span className="font-medium">$150-200</span></li>
                <li className="flex justify-between"><span>Desert Camp</span><span className="font-medium">$100-150</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$170-260</span>
                </li>
              </ul>
            </div>

            {/* Luxury */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-[var(--color-secondary)]" />
                <h3 className="font-heading font-bold text-lg text-text-primary">Luxury</h3>
              </div>
              <p className="text-3xl font-display font-bold text-[var(--color-secondary)] mb-4">$2,500-5,000+</p>
              <p className="text-xs text-text-muted mb-4">Per person, 7 days</p>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex justify-between"><span>Accommodation</span><span className="font-medium">$1,400-2,800</span></li>
                <li className="flex justify-between"><span>Private Transport</span><span className="font-medium">$500-700</span></li>
                <li className="flex justify-between"><span>Fine Dining</span><span className="font-medium">$280-490</span></li>
                <li className="flex justify-between"><span>Activities & Guides</span><span className="font-medium">$300-500</span></li>
                <li className="flex justify-between"><span>Luxury Desert Camp</span><span className="font-medium">$200-400</span></li>
                <li className="flex justify-between border-t border-[var(--border-light)] pt-2 mt-2">
                  <span className="font-medium">Daily Average</span><span className="font-bold">$350-700+</span>
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
              Packing List
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card-moroccan p-6">
                <h3 className="font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[var(--color-secondary)]" />
                  Clothing
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'Lightweight, breathable layers',
                    'Long trousers/skirts (modest dress for medinas)',
                    'Scarf or shawl (women, for mosque areas)',
                    'Warm fleece/jacket (desert nights, mountains)',
                    'Comfortable walking shoes',
                    'Sandals for riads and hammam',
                    'Sun hat with brim',
                    'Swimwear (hotel pools)',
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
                    'Passport (valid 6+ months)',
                    'Travel insurance documents',
                    'Cash in MAD (ATMs widely available)',
                    'Credit card (Visa/Mastercard)',
                    'Phone with offline maps (Maps.me)',
                    'Power adapter (Type C/E, 220V)',
                    'Reusable water bottle',
                    'Small daypack',
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
                  Desert Specific
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  {[
                    'High SPF sunscreen (50+)',
                    'Sunglasses with UV protection',
                    'Headlamp or flashlight',
                    'Bandana/buff (sand protection)',
                    'Moisturizer (dry desert air)',
                    'Camera with extra batteries',
                    'Warm socks (desert nights drop to 5C)',
                    'Earplugs and eye mask',
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
            src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-morocco text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Best of Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Let our local travel experts customize this 7-day itinerary to your preferences,
            budget, and travel dates. Private guides, handpicked riads, and seamless logistics included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:bookings@citytoursmorocco.com?subject=7-Day Morocco Itinerary Inquiry"
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
            <Link href="/itineraries/3-day-marrakech" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=600&q=80"
                  alt="Marrakech medina rooftop view"
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
                <p className="text-sm text-text-muted mt-1">Perfect weekend city break</p>
              </div>
            </Link>

            <Link href="/itineraries/10-day-grand-tour" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=600&q=80"
                  alt="Morocco coastline and blue city"
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
                <p className="text-sm text-text-muted mt-1">The complete Morocco experience</p>
              </div>
            </Link>

            <Link href="/itineraries/5-day-desert" className="card-moroccan group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=600&q=80"
                  alt="Sahara desert sand dunes"
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
                <p className="text-sm text-text-muted mt-1">Deep into the Sahara</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
