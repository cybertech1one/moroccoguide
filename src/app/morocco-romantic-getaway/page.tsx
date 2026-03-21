import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  DollarSign,
  CheckCircle,
  Gem,
  Building,
  Award,
  Crown,
  Waves,
  MessageCircleQuestion,
  Sunset,
  Mountain,
  Utensils,
  Calendar,
  Compass,
  Flame,
  Moon,
  CloudSun,
  Gift,
  Tent,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-romantic-getaway`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Romantic Getaway Guide 2026 | Couples Travel, Desert Glamping & Riad Stays',
  description:
    'Plan the perfect romantic trip to Morocco. Luxury riad stays in Marrakech & Fes, couples spa experiences, Sahara desert glamping under stars, Essaouira beach escapes, hot air balloon rides, private desert dinners, anniversary and engagement trip ideas with pricing from 800 MAD.',
  keywords: [
    'Morocco romantic getaway',
    'romantic trip Morocco',
    'couples travel Morocco 2026',
    'romantic riads Marrakech',
    'desert glamping Morocco couples',
    'Essaouira romantic beach',
    'Morocco honeymoon ideas',
    'Morocco anniversary trip',
    'engagement trip Morocco',
    'private desert dinner Morocco',
    'hot air balloon Marrakech',
    'Atlas Mountain couples retreat',
    'romantic restaurants Morocco',
    'Ouarzazate sunset spots',
    'luxury couples spa Morocco',
    'Morocco romance travel guide',
    'Sahara glamping for couples',
    'Fes romantic riad',
  ],
  openGraph: {
    title: 'Morocco Romantic Getaway Guide 2026 | Couples Travel, Desert Glamping & Riad Stays',
    description:
      'Luxury riad stays, Sahara desert glamping, couples hammam, private dinners under the stars, hot air balloon rides over Marrakech, and Atlas Mountain retreats. Your complete guide to romance in Morocco.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-romantic-dinner.webp`,
        width: 1200,
        height: 630,
        alt: 'Romantic candlelit dinner on a Moroccan riad rooftop terrace at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Romantic Getaway Guide 2026 | Desert Glamping, Riads & More',
    description:
      'Romantic riad stays, desert glamping under stars, couples spa rituals, hot air balloons, private dinners, and Atlas retreats. Complete Morocco couples travel guide.',
    images: [`${BASE_URL}/images/hero-romantic-dinner.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best time of year for a romantic trip to Morocco?',
    a: 'October through April offers the most comfortable weather for couples. March and April bring wildflowers across the Atlas Mountains, making it ideal for scenic retreats. Avoid July and August when inland temperatures regularly exceed 40 degrees Celsius. December through February is perfect for Sahara desert glamping with cool nights and clear skies. Seasonal pricing can change based on demand.',
  },
  {
    q: 'How much does a romantic riad stay cost in Marrakech?',
    a: 'Boutique riads with private courtyards and plunge pools start from 1,200 MAD per night for a double room. Heritage riads with rooftop dining and hammam access range from 2,000 MAD to 5,000 MAD. Ultra-luxury properties like La Mamounia or Royal Mansour start from 8,000 MAD per night. Many riads offer couples packages that bundle breakfast, hammam, and a private dinner. Seasonal pricing can change during peak months.',
  },
  {
    q: 'Can couples share a hammam in Morocco?',
    a: 'Public hammams are strictly gender-separated. However, many luxury riads and spas offer private couples hammam sessions starting from 1,200 MAD. These include a private steam room, black soap scrub, ghassoul clay mask, argan oil massage, and mint tea service afterward. Book at least 48 hours in advance during peak season.',
  },
  {
    q: 'What does a Sahara desert glamping experience include?',
    a: 'A standard luxury desert camp package includes 4x4 transfer from Merzouga or M\'Hamid, a camel ride to the camp, a private tent with real beds and en-suite bathroom, a traditional Berber dinner with live music, stargazing, sunrise camel trek, and breakfast. Prices start from 2,500 MAD per couple for one night. Premium camps with heated plunge pools and private dining start from 6,000 MAD.',
  },
  {
    q: 'Is Morocco safe for couples traveling together?',
    a: 'Morocco is generally safe for couples. Public displays of affection beyond hand-holding are uncommon in Moroccan culture, so discretion is appreciated in public spaces. Tourist areas like Marrakech, Fes, and Essaouira are well-policed. Book licensed guides and reputable accommodations. Unmarried couples should note that some traditional guesthouses may expect a marriage certificate, though most tourist-facing riads and hotels do not enforce this.',
  },
  {
    q: 'How do I plan a surprise engagement trip to Morocco?',
    a: 'Many luxury riads and desert camps help coordinate proposals. Popular setups include a private rooftop dinner in Marrakech with rose petals and lanterns (from 3,000 MAD), a sunrise proposal at the Erg Chebbi dunes (coordinated through your camp), or a hot air balloon proposal over the Jbilet hills (from 3,500 MAD per couple). Contact the property at least two weeks ahead and request their "romance package" or "proposal setup."',
  },
  {
    q: 'What should couples pack for a Morocco romantic trip?',
    a: 'Pack layers for temperature swings between medina heat and cool desert nights. Bring modest clothing for medina walks (shoulders and knees covered), comfortable shoes for cobblestones, a warm jacket for Atlas or desert evenings, swimwear for riad pools and hammams, and smart-casual outfits for upscale restaurant dinners. A small Bluetooth speaker and a power bank are useful for desert camps.',
  },
  {
    q: 'Are hot air balloon rides available year-round in Morocco?',
    a: 'Hot air balloon rides operate from Marrakech most of the year, with the best flying conditions from October through May. Flights depart at sunrise and last approximately one hour, covering the Jbilet hills, Haouz Plain, and sometimes views toward the Atlas range. Prices start from 2,000 MAD per person. Flights may be canceled for wind or rain, so book early in your trip to allow rescheduling.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Romantic Getaway Guide 2026',
  description:
    'Complete guide to romantic travel in Morocco covering luxury riads, desert glamping, couples spa experiences, hot air balloon rides, private dinners, and anniversary and engagement trip planning.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-romantic-dinner.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Romantic Getaway Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: ROMANTIC RIADS
   ================================================================ */

const romanticRiads = [
  {
    name: 'Riad Kniza',
    city: 'Marrakech',
    highlight: 'Intimate 11-room riad with candlelit courtyard dining and a private rooftop terrace overlooking the medina.',
    priceFrom: 'from 2,200 MAD/night',
    bestFor: 'Anniversaries & intimate escapes',
  },
  {
    name: 'Riad Laaroussa',
    city: 'Fes',
    highlight: 'A restored 17th-century palace with a heated pool, hammam, and a Michelin-praised restaurant serving five-course dinners.',
    priceFrom: 'from 3,000 MAD/night',
    bestFor: 'Heritage lovers & foodie couples',
  },
  {
    name: 'El Fenn',
    city: 'Marrakech',
    highlight: 'Boutique art hotel with three pools, a rooftop bar with Atlas views, and suites with private terraces.',
    priceFrom: 'from 3,500 MAD/night',
    bestFor: 'Design-savvy couples',
  },
  {
    name: 'Riad Fes Maya Suite & Spa',
    city: 'Fes',
    highlight: 'Award-winning riad with panoramic medina views, a full spa, and individually styled suites with fireplaces.',
    priceFrom: 'from 2,800 MAD/night',
    bestFor: 'Winter romance & spa weekends',
  },
  {
    name: 'La Sultana',
    city: 'Marrakech',
    highlight: 'Five-star riad steps from the Saadian Tombs with a rooftop pool, underground spa, and private dining rooms.',
    priceFrom: 'from 4,500 MAD/night',
    bestFor: 'Luxury proposals & honeymoons',
  },
  {
    name: 'Palais Amani',
    city: 'Fes',
    highlight: 'Garden riad with an Andalusian courtyard, cooking classes for two, and a hammam with couples massage.',
    priceFrom: 'from 1,800 MAD/night',
    bestFor: 'Couples seeking authentic Fassi culture',
  },
];

/* ================================================================
   DATA: DESERT GLAMPING CAMPS
   ================================================================ */

const desertCamps = [
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert (40 min from Marrakech)',
    features: 'Canvas tents with king beds, en-suite bathrooms, heated pool, private fire pits, stargazing telescopes.',
    priceFrom: 'from 3,500 MAD/couple/night',
  },
  {
    name: 'Desert Luxury Camp',
    location: 'Erg Chebbi, Merzouga',
    features: 'Private dune-view suites, camel treks at sunset, Berber music nights, sandboarding, sunrise breakfast on the dunes.',
    priceFrom: 'from 4,000 MAD/couple/night',
  },
  {
    name: 'Erg Chigaga Luxury Camp',
    location: 'Erg Chigaga, M\'Hamid',
    features: 'Remote wilderness location, Bedouin-style tents, zero light pollution for stargazing, private nomadic dinners.',
    priceFrom: 'from 5,000 MAD/couple/night',
  },
  {
    name: 'Inara Camp',
    location: 'Agafay Stone Desert',
    features: 'Boho-luxe tents, infinity pool overlooking barren hills, yoga deck, private dining under hanging lanterns.',
    priceFrom: 'from 2,800 MAD/couple/night',
  },
];

/* ================================================================
   DATA: ROMANTIC EXPERIENCES
   ================================================================ */

const romanticExperiences = [
  {
    title: 'Hot Air Balloon at Sunrise',
    icon: CloudSun,
    location: 'Marrakech / Jbilet Hills',
    description: 'Float above the Haouz Plain as the sun breaks over the Atlas Mountains. Flights last about 60 minutes followed by a traditional breakfast in a Berber village.',
    price: 'from 2,000 MAD/person',
    duration: '3-4 hours total',
  },
  {
    title: 'Private Desert Dinner',
    icon: Flame,
    location: 'Agafay Desert or Erg Chebbi',
    description: 'A candlelit table set on the dunes with a multi-course Moroccan menu, Gnawa musicians, and a blanket of stars overhead. Most camps arrange this with 48-hour notice.',
    price: 'from 3,000 MAD/couple',
    duration: '3 hours',
  },
  {
    title: 'Couples Hammam & Massage',
    icon: Sparkles,
    location: 'Marrakech, Fes, Essaouira',
    description: 'A private steam room, black soap gommage, ghassoul clay wrap, and a 60-minute argan oil massage for two. Mint tea and pastries served on a sun-warmed terrace afterward.',
    price: 'from 1,200 MAD/couple',
    duration: '2-3 hours',
  },
  {
    title: 'Sunset Camel Ride',
    icon: Sunset,
    location: 'Essaouira Beach or Erg Chebbi Dunes',
    description: 'Ride along the Atlantic shoreline or through golden Sahara dunes as the sky turns amber and violet. A guide leads the camels while you take in the scenery hands-free.',
    price: 'from 400 MAD/couple',
    duration: '1-2 hours',
  },
  {
    title: 'Cooking Class for Two',
    icon: Utensils,
    location: 'Marrakech, Fes, Essaouira',
    description: 'Shop for spices in the souk with a local chef, then learn to prepare a three-course Moroccan meal together. You eat everything you cook on a rooftop with medina views.',
    price: 'from 600 MAD/couple',
    duration: '4-5 hours',
  },
  {
    title: 'Atlas Mountain Day Retreat',
    icon: Mountain,
    location: 'Imlil / Ouirgane Valley',
    description: 'A guided hike through walnut groves and Berber villages, followed by a private lunch at a mountain lodge with panoramic valley views and optional yoga session.',
    price: 'from 1,500 MAD/couple',
    duration: 'Full day',
  },
];

/* ================================================================
   DATA: ROMANTIC RESTAURANTS
   ================================================================ */

const romanticRestaurants = [
  {
    name: 'Le Jardin',
    city: 'Marrakech',
    vibe: 'Lush garden courtyard with fairy lights',
    cuisine: 'Moroccan-Mediterranean fusion',
    budget: 'from 400 MAD/couple',
  },
  {
    name: 'Dar Hatim',
    city: 'Fes',
    vibe: 'Family-run palace with five-course dada feasts',
    cuisine: 'Traditional Fassi',
    budget: 'from 600 MAD/couple',
  },
  {
    name: 'La Table du Palais',
    city: 'Marrakech',
    vibe: 'Rooftop with Koutoubia minaret views',
    cuisine: 'Fine Moroccan gastronomy',
    budget: 'from 800 MAD/couple',
  },
  {
    name: 'Taros',
    city: 'Essaouira',
    vibe: 'Rooftop terrace overlooking the harbor',
    cuisine: 'Seafood & Moroccan tapas',
    budget: 'from 350 MAD/couple',
  },
  {
    name: 'Restaurant at Kasbah Tamadot',
    city: 'Atlas Mountains (Asni)',
    vibe: 'Mountain panorama from Sir Richard Branson\'s retreat',
    cuisine: 'Refined Moroccan with international touches',
    budget: 'from 1,200 MAD/couple',
  },
  {
    name: 'L\'Mida',
    city: 'Marrakech',
    vibe: 'Intimate rooftop lit by candles and lanterns',
    cuisine: 'Modern Moroccan small plates',
    budget: 'from 500 MAD/couple',
  },
];

/* ================================================================
   DATA: TRIP ITINERARIES
   ================================================================ */

const itineraries = [
  {
    title: '5-Day Anniversary Escape',
    icon: Gift,
    days: [
      'Arrive Marrakech. Check into a luxury riad. Evening rooftop dinner with champagne.',
      'Couples hammam and massage in the morning. Afternoon souk shopping for jewelry and leather goods. Sunset drinks at a sky bar.',
      'Day trip to Agafay Desert. Private lunch overlooking the stone desert. Afternoon at the camp pool. Candlelit dinner under the stars.',
      'Morning hot air balloon ride. Afternoon cooking class. Farewell dinner at a fine-dining restaurant.',
      'Leisurely breakfast on the riad terrace. Transfer to airport.',
    ],
    budget: 'from 25,000 MAD/couple (mid-luxury)',
  },
  {
    title: '7-Day Honeymoon Circuit',
    icon: Heart,
    days: [
      'Arrive Marrakech. Riad check-in. Jemaa el-Fnaa sunset walk.',
      'Full-day desert excursion to Agafay. Glamping overnight.',
      'Drive to Ouarzazate via Tizi n\'Tichka pass. Sunset at Ait Benhaddou. Stay at a kasbah hotel.',
      'Continue to Merzouga. Camel ride into Erg Chebbi. Luxury desert camp overnight.',
      'Sunrise on the dunes. Drive to Fes (or fly from Errachidia). Evening in the Fes medina.',
      'Fes: couples hammam, private guided tour of tanneries and mosaic workshops, palace dinner.',
      'Morning at leisure. Transfer to Fes airport.',
    ],
    budget: 'from 40,000 MAD/couple (luxury)',
  },
  {
    title: '4-Day Essaouira Beach Romance',
    icon: Waves,
    days: [
      'Arrive Essaouira. Boutique riad by the ramparts. Sunset walk along the seawall.',
      'Morning surf lesson or beach horseback ride. Afternoon at a seaside spa. Dinner at a harbor-view restaurant.',
      'Day trip to Sidi Kaouki beach. Picnic lunch on the sand. Afternoon wine tasting at Val d\'Argan vineyard.',
      'Breakfast on the riad terrace. Wander the art galleries. Transfer out.',
    ],
    budget: 'from 12,000 MAD/couple (boutique)',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoRomanticGetawayPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
        <div className="container-morocco py-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--text-secondary)]">
            <li className="flex items-center gap-1">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
            </li>
            <li className="text-[var(--text-primary)] font-medium">Morocco Romantic Getaway Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src="/images/hero-romantic-dinner.webp"
          alt="Romantic candlelit dinner setup on a Moroccan riad rooftop terrace at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
            <Heart className="w-4 h-4" /> Couples Travel Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco Romantic Getaway Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            From candlelit riad terraces in Marrakech to starlit desert camps in the Sahara, Morocco offers some of the most
            memorable romantic experiences on Earth. This guide covers everything couples need to plan an unforgettable trip.
          </p>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Heart, label: 'Romantic Riads', value: '6 handpicked stays' },
              { icon: Tent, label: 'Desert Glamping', value: '4 luxury camps' },
              { icon: Star, label: 'Experiences', value: '6 curated activities' },
            ].map((stat) => {
              const StatIcon = stat.icon;
              return (
                <div key={stat.label} className="card-moroccan p-5 text-center">
                  <StatIcon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stat.label}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Morocco for a Romantic Getaway
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-4">
            <p>
              Morocco has a rare combination of sensory richness and practical convenience that makes it one of the top
              romantic destinations reachable from Europe in under four hours. The country delivers drama at every scale:
              ancient medinas lit by thousands of lanterns, desert silence broken only by wind over sand, mountain lodges
              where the only sounds are birdsong and running water.
            </p>
            <p>
              For couples, the appeal goes beyond scenery. Moroccan hospitality culture revolves around making guests feel
              like royalty. Riad hosts arrange private rooftop dinners without being asked. Desert camp staff scatter rose
              petals on your tent bed. Restaurant owners bring complimentary mint tea and pastries when they learn you are
              celebrating a milestone. This instinct for warmth and generosity elevates every part of a romantic trip.
            </p>
            <p>
              The cost of luxury in Morocco is substantially lower than in southern Europe or the Caribbean. A five-star
              riad experience that would cost EUR 500-800 per night in Santorini or Amalfi runs from 2,000 MAD to 4,000 MAD
              in Marrakech or Fes. Private desert dinners, couples massages, and hot air balloon rides are all available at
              prices that make genuine luxury accessible.
            </p>
          </div>
        </div>
      </section>

      {/* ── Romantic Riads ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Riads in Marrakech &amp; Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These handpicked riads excel at creating an atmosphere of intimacy, privacy, and Moroccan elegance for couples.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {riad.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full shrink-0">
                    <MapPin className="w-3 h-3" /> {riad.city}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{riad.highlight}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--color-gold)] font-semibold flex items-center gap-1">
                    <DollarSign className="w-3.5 h-3.5" /> {riad.priceFrom}
                  </span>
                  <span className="text-[var(--text-secondary)] flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {riad.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 border-l-4 border-[var(--color-gold)]">
            <p className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[var(--text-primary)]">Booking tip:</strong> Contact riads directly via email or
                WhatsApp for couples packages. Many offer a 10-15% discount on direct bookings and will add complimentary
                extras like a welcome hamper of Moroccan sweets, rose water, and argan oil products.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Riad Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-riad-interior.webp"
                alt="Interior of a luxury Moroccan riad with zellige tilework, lanterns, and a courtyard fountain"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Riad Interior</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="Sunset view from a Marrakech riad rooftop terrace with lounge chairs and lanterns"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rooftop Sunset Terrace</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-riad-courtyard.webp"
                alt="Traditional Moroccan riad courtyard with orange trees, fountain, and hand-carved plaster walls"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Riad Courtyard</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desert Glamping ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Glamping Under the Stars
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Sleeping in the desert with a loved one ranks among the most powerful travel experiences you can share.
            These luxury camps combine raw Saharan beauty with genuine comfort.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {desertCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {camp.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> {camp.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{camp.features}</p>
                <p className="text-sm text-[var(--color-gold)] font-semibold flex items-center gap-1">
                  <DollarSign className="w-4 h-4" /> {camp.priceFrom}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img
                src="/images/hero-desert-glamping.webp"
                alt="Luxury desert glamping tent in the Sahara with warm interior lighting at twilight"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Desert Camp</p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <img
                src="/images/art-desert-stargazing.webp"
                alt="Couple stargazing in the Sahara desert with the Milky Way visible above sand dunes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Stargazing</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Romantic Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Unforgettable Couples Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six experiences that turn a Morocco trip into a story you will tell for decades.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.title} className="card-moroccan p-6">
                  <ExpIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-medium flex items-center gap-1 mb-3">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex items-center justify-between text-xs border-t border-[var(--border-default)] pt-3">
                    <span className="text-[var(--color-gold)] font-semibold flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5" /> {exp.price}
                    </span>
                    <span className="text-[var(--text-secondary)] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {exp.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hot Air Balloon Feature ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="/images/hero-hot-air-balloon.webp"
                alt="Hot air balloon floating above the Moroccan landscape at sunrise with Atlas Mountains in the distance"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                Hot Air Balloon Rides Over Marrakech
              </h2>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  A sunrise balloon flight is one of the most requested couple experiences in Morocco. You leave Marrakech
                  before dawn, drive 20 minutes to the launch site in the Jbilet hills, and ascend as the first light
                  paints the landscape gold and rose.
                </p>
                <p>
                  From the basket, you see the High Atlas Mountains to the south, the olive groves and Berber villages of
                  the Haouz Plain below, and sometimes Marrakech itself in the haze to the east. The silence at altitude
                  is striking. The only sound is the occasional burst of the burner.
                </p>
                <p>
                  After landing, most operators serve a traditional breakfast of msemen flatbread, amlou (almond-argan
                  paste), fresh orange juice, and mint tea at a rural homestead. The entire experience takes three to four
                  hours including transfers.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: 'Season', value: 'Oct - May', icon: Calendar },
                  { label: 'Duration', value: '60 min flight', icon: Clock },
                  { label: 'Price', value: 'from 2,000 MAD/pp', icon: DollarSign },
                  { label: 'Best for', value: 'Proposals & milestones', icon: Heart },
                ].map((detail) => {
                  const DetailIcon = detail.icon;
                  return (
                    <div key={detail.label} className="card-moroccan p-3 text-center">
                      <DetailIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-1" />
                      <p className="text-xs font-semibold text-[var(--text-primary)]">{detail.label}</p>
                      <p className="text-xs text-[var(--text-secondary)]">{detail.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essaouira Beach Romance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essaouira: Atlantic Beach Romance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            This wind-swept port city on the Atlantic coast delivers a completely different romantic rhythm: slow mornings,
            long beach walks, and fresh seafood at sunset.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira.webp"
                alt="Essaouira coastal view with blue boats in the harbor and the old medina walls at golden hour"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Essaouira Harbor</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Beach Horseback Rides', desc: 'Gallop along the wide sandy beaches south of town. Operators offer private sunset rides for couples starting from 500 MAD.' },
                { title: 'Wine Tasting at Val d\'Argan', desc: 'Morocco\'s most established winery sits 30 minutes from Essaouira. Tours with tastings start from 200 MAD per person.' },
                { title: 'Seaside Spa Retreats', desc: 'Several boutique riads offer spa suites with ocean views. Couples treatments start from 900 MAD including argan oil massage.' },
                { title: 'Art Gallery Walks', desc: 'The medina is full of small galleries showing Gnawa-inspired art, photography, and sculptural metalwork. Perfect for a slow afternoon together.' },
              ].map((item) => (
                <div key={item.title} className="card-moroccan p-4">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ouarzazate & Sunset Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                <Sunset className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                Ouarzazate &amp; the Draa Valley: Sunset Country
              </h2>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Known as the &quot;Door of the Desert,&quot; Ouarzazate sits at the junction of the Atlas Mountains and the Sahara.
                  The light here is extraordinary. Filmmakers have shot Lawrence of Arabia, Gladiator, and Game of Thrones
                  in this region precisely because the golden-hour colors are unlike anywhere else.
                </p>
                <p>
                  For couples, the top sunset spots include the terrace of Ait Benhaddou kasbah (a UNESCO World Heritage
                  site), the Fint Oasis lookout point 15 km south of town, and the rooftop of Dar Kamar guesthouse in the
                  Ouarzazate kasbah quarter. Each offers unobstructed views as the sky shifts from copper to deep violet.
                </p>
                <p>
                  The Draa Valley road south to Zagora passes through palm groves and mud-brick villages. Couples can stop
                  at small kasbahs along the way for mint tea and panoramic photos. The drive itself takes about two hours
                  and is one of Morocco&apos;s most scenic routes.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ait-benhaddou-sunset.webp"
                alt="Ait Benhaddou kasbah at sunset with warm golden light on the mud-brick walls and mountains behind"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou at Sunset</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Romantic Restaurants ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Restaurants Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From rooftop terraces with minaret views to garden courtyards draped in fairy lights, these restaurants set the
            scene for memorable evenings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticRestaurants.map((rest) => (
              <div key={rest.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {rest.name}
                  </h3>
                  <span className="text-xs text-[var(--color-accent)] font-medium shrink-0">{rest.city}</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] italic mb-2">{rest.vibe}</p>
                <p className="text-xs text-[var(--text-secondary)] mb-3">
                  <strong>Cuisine:</strong> {rest.cuisine}
                </p>
                <p className="text-xs text-[var(--color-gold)] font-semibold flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> {rest.budget}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
            <p className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
              <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <span>
                <strong className="text-[var(--text-primary)]">Private dining:</strong> Most upscale riads will arrange a
                private dinner on your terrace or in a courtyard salon. This typically costs from 800 MAD to 2,000 MAD per
                couple for a three- to five-course meal with wine. Request this at least 24 hours ahead. Seasonal pricing
                can change during peak periods like Christmas, New Year, and Valentine&apos;s Day.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Atlas Mountain Retreats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="Atlas Mountains panorama with snow-capped peaks, green valleys, and a mountain lodge"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                Atlas Mountain Retreats for Couples
              </h2>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  The High Atlas Mountains offer a complete contrast to the medina buzz. Within 90 minutes of Marrakech,
                  you can be at a mountain lodge surrounded by walnut trees, terraced fields, and peaks reaching above
                  4,000 meters.
                </p>
                <p>
                  Kasbah Tamadot near Asni is the most famous couples retreat, originally purchased by Sir Richard Branson.
                  Rooms start from 5,000 MAD per night and include breakfast, pool access, and guided walks. More affordable
                  options in Imlil village start from 800 MAD per night for charming guesthouses with mountain views and
                  home-cooked Berber meals.
                </p>
                <p>
                  Activities include guided valley hikes, mule treks to remote villages, cooking sessions with local families,
                  and evening bonfires. In winter, the snow-dusted peaks create an alpine atmosphere rare for North Africa.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: 'Drive from Marrakech', value: '60-90 minutes' },
                  { label: 'Lodges from', value: '800 MAD/night' },
                  { label: 'Best season', value: 'Mar-May, Sep-Nov' },
                  { label: 'Top activity', value: 'Guided valley hike' },
                ].map((item) => (
                  <div key={item.label} className="card-moroccan p-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{item.label}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trip Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Romantic Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three ready-made trip plans for different trip lengths and budgets. Customize any of these by swapping
            destinations or adding extra days.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {itineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.title} className="card-moroccan p-6">
                  <ItinIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                    {itin.title}
                  </h3>
                  <ol className="space-y-3 mb-6">
                    {itin.days.map((day, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                        <span className="shrink-0 w-7 h-7 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{day}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="border-t border-[var(--border-default)] pt-4">
                    <p className="text-sm text-[var(--color-gold)] font-semibold flex items-center gap-1">
                      <DollarSign className="w-4 h-4" /> {itin.budget}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">Seasonal pricing can change.</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Engagement & Proposal Planning ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Planning an Engagement or Proposal in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Morocco has become one of the top proposal destinations for European and North American couples. The
            combination of dramatic backdrops, helpful staff, and affordable luxury makes orchestrating a surprise
            remarkably straightforward.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Riad Rooftop Proposal',
                desc: 'Ask your riad to set up a private table with rose petals, candles, and lanterns on the terrace. Staff will serve a multi-course dinner and can coordinate timing for the moment. Setup costs start from 2,000 MAD on top of the dinner price.',
                icon: Crown,
              },
              {
                title: 'Sahara Sunrise Proposal',
                desc: 'Your desert camp guide leads you to the top of a high dune before sunrise. As light breaks over the sand sea, you have complete privacy. Camps can arrange a champagne basket and photographer. No extra charge beyond the camp stay at most operators.',
                icon: Sunset,
              },
              {
                title: 'Hot Air Balloon Proposal',
                desc: 'Some balloon operators allow private flights (minimum two passengers). The pilot can coordinate the moment during the flight. Private charters start from 8,000 MAD per couple. Standard shared flights hold 12-16 people, so a private booking ensures intimacy.',
                icon: CloudSun,
              },
              {
                title: 'Garden Proposal in Fes',
                desc: 'The Jnan Sbil garden or a private riad garden in the medina provides a tranquil backdrop. Several Fes-based event planners specialize in romantic setups with musicians, flowers, and photography. Full-service packages start from 5,000 MAD.',
                icon: Sparkles,
              },
            ].map((prop) => {
              const PropIcon = prop.icon;
              return (
                <div key={prop.title} className="card-moroccan p-6">
                  <PropIcon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{prop.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Small details that make the difference between a good trip and a great one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { tip: 'Book directly with riads', text: 'Direct bookings often come with complimentary upgrades, welcome gifts, and better room assignments. Reach out via email or WhatsApp at least two weeks before arrival.' },
              { tip: 'Request a room away from the courtyard', text: 'Riad courtyards amplify sound. If you want quiet mornings, ask for an upper-floor room facing away from the central atrium.' },
              { tip: 'Carry cash for tips and small vendors', text: 'Many romantic add-ons (musicians, flower setups, desert guides) operate on cash. Keep from 500 MAD in small bills for tips and incidentals.' },
              { tip: 'Dress modestly in public, freely in private', text: 'Morocco is conservative in public spaces. Cover shoulders and knees when walking the medina. Within your riad, pool, or private camp, dress however you prefer.' },
              { tip: 'Travel during shoulder season', text: 'March-April and October-November offer the best combination of mild weather, smaller crowds, and lower prices. You will get better riad availability and more personal service.' },
              { tip: 'Hire a private driver for multi-city trips', text: 'A dedicated driver with a comfortable car costs from 1,200 MAD per day and eliminates the stress of navigating mountain passes and desert roads. Most speak French and basic English.' },
            ].map((item) => (
              <div key={item.tip} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.tip}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions couples ask when planning a romantic Morocco trip.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Spa & Hammam Guide',
                description: 'Step-by-step hammam ritual, etiquette, best spas by city, and couples packages.',
                href: '/morocco-spa-guide',
                icon: Sparkles,
              },
              {
                title: 'Best Riads in Morocco',
                description: 'Curated selection of the finest riads across Marrakech, Fes, Essaouira, and Chefchaouen.',
                href: '/best-riads-morocco',
                icon: Building,
              },
              {
                title: 'Luxury Morocco Guide',
                description: 'Five-star hotels, fine dining, private tours, and premium experiences across the country.',
                href: '/luxury',
                icon: Crown,
              },
              {
                title: 'Desert Tours & Sahara Guide',
                description: 'Everything about Sahara excursions: Merzouga, Zagora, camel treks, and overnight camps.',
                href: '/desert-tours',
                icon: Compass,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── More Romance & Travel Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8 text-[var(--text-primary)]">
            More Romance &amp; Travel Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/essaouira', title: 'Essaouira City Guide', desc: 'Complete guide to the Atlantic coastal gem: beaches, medina walks, seafood, and Gnawa culture.' },
              { href: '/marrakech', title: 'Marrakech City Guide', desc: 'Full guide to the Red City: souks, palaces, gardens, restaurants, nightlife, and day trips.' },
              { href: '/fes', title: 'Fes City Guide', desc: 'Navigate the world\'s largest car-free medina, see tanneries, and discover Fassi cuisine.' },
              { href: '/morocco-food-guide', title: 'Morocco Food Guide', desc: 'Tagines, couscous, pastilla, street food, and the best restaurants across every major city.' },
              { href: '/things-to-do-ouarzazate', title: 'Things to Do in Ouarzazate', desc: 'Film studios, Ait Benhaddou, kasbahs, and desert gateway adventures from Morocco\'s Hollywood.' },
              { href: '/best-time-visit-morocco', title: 'Best Time to Visit Morocco', desc: 'Month-by-month climate breakdown, festivals, and seasonal pricing for every region.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors text-[var(--text-primary)]">
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 zellige-border">
        <div className="container-morocco text-center max-w-3xl">
          <Heart className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Start Planning Your Romantic Morocco Trip
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
            From private riad dinners to starlit desert nights, Morocco delivers romance at every turn. Browse our city
            guides, book your riad directly, and build an itinerary that fits your style and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Browse Accommodations <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              Get Trip Advice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
