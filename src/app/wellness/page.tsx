import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  Heart,
  Leaf,
  Sun,
  Mountain,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  Thermometer,
  Shield,
  Users,
  Banknote,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Wellness & Spa Guide | Hammams, Yoga Retreats & Holistic Healing',
  description:
    'Your complete guide to wellness in Morocco. Traditional hammam rituals (public vs private), yoga and meditation retreats, argan oil spa treatments, natural hot springs, desert mindfulness, and mountain wellness escapes.',
  keywords: [
    'Morocco wellness',
    'Moroccan hammam',
    'Morocco spa',
    'yoga retreat Morocco',
    'argan oil treatment',
    'Morocco meditation',
    'traditional hammam',
    'Morocco healing',
    'desert wellness Morocco',
    'Atlas Mountains retreat',
    'Morocco hot springs',
    'public hammam Morocco',
    'private hammam Morocco',
    'Moulay Yacoub hot springs',
  ],
  openGraph: {
    title: 'Morocco Wellness & Spa Guide - CityGuide',
    description:
      'Discover the healing traditions of Morocco. From centuries-old hammam rituals to yoga retreats in the mountains and mindfulness in the Sahara.',
    url: 'https://cityguide.ma/wellness',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Moroccan spa wellness experience with traditional hammam tiles',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/wellness' },
};

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const topHammams = [
  {
    name: 'Heritage Spa',
    city: 'Marrakech',
    type: 'Private / Luxury' as const,
    description:
      'A luxury hammam in the heart of the medina offering the full traditional experience with premium products. Black soap scrub, rhassoul clay mask, and argan oil massage in stunning tiled rooms.',
    price: 'From 600 MAD',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
  {
    name: 'Hammam de la Rose',
    city: 'Marrakech',
    type: 'Private / Luxury' as const,
    description:
      'Set in a beautifully restored riad, this hammam combines traditional techniques with rose-infused products from the Dades Valley. The rose steam room is an unforgettable sensory experience.',
    price: 'From 500 MAD',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
  {
    name: 'Hammam Mouassine',
    city: 'Marrakech',
    type: 'Restored Public' as const,
    description:
      'A restored 16th-century public hammam that balances authenticity with comfort. The architecture alone is worth the visit, with original zellige tiles and star-shaped skylights.',
    price: 'From 200 MAD',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Les Bains de Marrakech',
    city: 'Marrakech',
    type: 'Private / Luxury' as const,
    description:
      'A premium day spa offering traditional hammam alongside modern treatments. The 2-hour Royal Hammam package includes eucalyptus steam, black soap scrub, ghassoul wrap, and full-body argan oil massage.',
    price: 'From 800 MAD',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
  {
    name: 'Hammam Sidi Ali Benharazem',
    city: 'Fes',
    type: 'Public / Traditional' as const,
    description:
      'A neighborhood hammam near the famous shrine, offering the most authentic local experience. Separate sessions for men and women. Bring your own kiis and savon beldi, or buy them at the entrance.',
    price: 'From 15 MAD',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Le Bain Bleu',
    city: 'Fes',
    type: 'Private / Boutique' as const,
    description:
      'A beautifully designed private hammam in the Fes medina offering a curated experience with local beauty products. The blue-tiled rooms reference the famous Fes blue pottery tradition. Couples treatments available.',
    price: 'From 400 MAD',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
  {
    name: 'Hammam Bab el-Amer',
    city: 'Fes',
    type: 'Public / Traditional' as const,
    description:
      'One of the oldest functioning hammams in Fes, located near the pottery quarter. The domed ceiling with star-shaped openings creates shafts of light through the steam. A raw, authentic experience with no tourist frills.',
    price: 'From 12 MAD',
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Sofitel Spa Casablanca',
    city: 'Casablanca',
    type: 'Private / Luxury' as const,
    description:
      'A world-class spa in the Sofitel Casablanca Tour Blanche hotel. The hammam experience here blends traditional Moroccan ritual with French spa luxury. Extensive treatment menu including argan oil wraps, rose petal baths, and Moroccan mint body scrubs.',
    price: 'From 700 MAD',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
  },
];

const yogaRetreats = [
  {
    name: 'Surf & Yoga Retreat Taghazout',
    location: 'Taghazout',
    description:
      'Combine daily yoga sessions with world-class surfing on the Atlantic coast. Rooftop yoga at sunrise, surf lessons during the day, and meditation at sunset. Healthy organic meals included.',
    duration: '7 days',
    price: 'From 5,500 MAD',
    highlights: ['Daily yoga', 'Surf lessons', 'Organic meals', 'Ocean views'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
  },
  {
    name: 'Atlas Mountain Yoga Escape',
    location: 'Imlil',
    description:
      'A secluded retreat in the High Atlas Mountains with daily yoga practice, guided mountain walks, and traditional Berber hospitality. The crisp mountain air and panoramic views create a transformative setting.',
    duration: '5 days',
    price: 'From 4,200 MAD',
    highlights: ['Mountain yoga', 'Guided hikes', 'Berber cuisine', 'Meditation'],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Essaouira Mindfulness Retreat',
    location: 'Essaouira',
    description:
      'A holistic retreat combining mindfulness meditation, gentle yoga, and creative workshops in a restored riad overlooking the Atlantic. Perfect for those seeking inner peace and creative inspiration.',
    duration: '4 days',
    price: 'From 3,800 MAD',
    highlights: ['Mindfulness', 'Gentle yoga', 'Art workshops', 'Sea views'],
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
  },
  {
    name: 'Sahara Desert Retreat',
    location: 'Merzouga',
    description:
      'A unique retreat that combines yoga and meditation with the transformative power of the Sahara. Practice on the dunes at sunrise, meditate under the stars, and experience profound desert silence.',
    duration: '3 days',
    price: 'From 3,500 MAD',
    highlights: ['Desert yoga', 'Stargazing', 'Camel trek', 'Sound healing'],
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
  },
  {
    name: 'Riad Retreat Marrakech',
    location: 'Marrakech',
    description:
      'An urban retreat in a luxurious medina riad. Daily yoga in the courtyard garden, hammam sessions, cooking classes, and guided medina walks. The perfect combination of wellness and cultural immersion.',
    duration: '4 days',
    price: 'From 4,500 MAD',
    highlights: ['Riad yoga', 'Hammam included', 'Cooking class', 'Medina tour'],
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  },
  {
    name: 'Dades Valley Yoga & Hiking',
    location: 'Dades Gorge',
    description:
      'A unique retreat set in the dramatic landscape of the Dades Gorge. Morning yoga on the terrace overlooking the canyon, afternoon hikes through rose-filled valleys, and evening meditation sessions. The scenery is profoundly inspiring.',
    duration: '5 days',
    price: 'From 3,900 MAD',
    highlights: ['Canyon views', 'Valley hikes', 'Rose valley', 'Stargazing'],
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Paradise Valley Wellness Retreat',
    location: 'Paradise Valley (near Agadir)',
    description:
      'Nestled in a lush palm-filled valley with natural rock pools and waterfalls, this retreat offers daily yoga, swimming in crystal-clear pools, plant-based cuisine, and breathwork sessions. A hidden gem that few tourists discover.',
    duration: '4 days',
    price: 'From 4,000 MAD',
    highlights: ['Natural pools', 'Waterfall hikes', 'Plant-based food', 'Breathwork'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NATURAL HOT SPRINGS DATA
   ═══════════════════════════════════════════════════════════════ */

const hotSprings = [
  {
    name: 'Moulay Yacoub Hot Springs',
    location: 'Near Fes (20 km)',
    description:
      'The most famous thermal springs in Morocco, known since Roman times. The sulfurous water emerges at 54 degrees C and is reputed to treat rheumatism, skin conditions, and respiratory ailments. A modern thermal spa complex sits alongside the original public baths where locals have soaked for centuries.',
    temperature: '54 degrees C',
    minerals: 'Sulfur, calcium, magnesium, sodium chloride',
    facilities: 'Modern spa complex, public baths, hotel, medical consultations',
    price: 'Public baths: 10-20 MAD / Spa treatments: 200-600 MAD',
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Sidi Harazem Thermal Baths',
    location: 'Near Fes (15 km)',
    description:
      'A popular local thermal spring in a parkland setting east of Fes. The naturally warm mineral water is bottled commercially (you will see Sidi Harazem water bottles all over Morocco) and also feeds public bathing pools. Less developed than Moulay Yacoub but deeply authentic.',
    temperature: '34 degrees C',
    minerals: 'Calcium, magnesium, bicarbonate',
    facilities: 'Public pools, picnic areas, basic accommodation',
    price: '5-15 MAD entry',
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Abaynou Hot Springs',
    location: 'Near Guelmim (7 km)',
    description:
      'Located at the gateway to the Sahara in the Souss-Massa region, these thermal springs are surrounded by palm groves and visited mainly by locals. The warm, mineral-rich water is said to help with joint pain and skin conditions. A peaceful, off-the-beaten-path experience.',
    temperature: '38 degrees C',
    minerals: 'Sulfur, calcium, iron',
    facilities: 'Basic public pools, changing rooms',
    price: '10 MAD entry',
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Fezouane Hot Springs',
    location: 'Near Figuig (Eastern Morocco)',
    description:
      'Remote thermal springs in the oasis town of Figuig, near the Algerian border. The hot water emerges from the earth into a series of natural pools surrounded by date palms. Rarely visited by tourists, this is one of Morocco\'s most authentic thermal experiences.',
    temperature: '42 degrees C',
    minerals: 'Sulfur, sodium, potassium',
    facilities: 'Natural pools, minimal infrastructure',
    price: 'Free / small donation',
    image: 'https://images.unsplash.com/photo-1509310228460-e0266a1e0d7c?w=800&q=80',
  },
  {
    name: 'Lalla Takerkoust',
    location: 'Near Marrakech (40 km)',
    description:
      'While not a traditional hot spring, the lake at Lalla Takerkoust has become a wellness destination with several eco-lodges offering spa treatments, yoga, and outdoor activities with Atlas Mountain views. The nearby Ourika Valley has natural warm pools fed by underground springs.',
    temperature: 'Varies by season',
    minerals: 'Mountain mineral water',
    facilities: 'Eco-lodges, spa resorts, restaurants, water sports',
    price: 'Lodge-dependent (from 500 MAD/night)',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SPA & WELLNESS RETREATS
   ═══════════════════════════════════════════════════════════════ */

const spaRetreats = [
  {
    name: 'Royal Mansour Spa',
    location: 'Marrakech',
    description:
      'One of the most luxurious spas in Africa, set within the Royal Mansour palace hotel. The 2,500 sqm spa features a traditional hammam, indoor pool, beauty salon, and treatment rooms offering both Moroccan and international wellness protocols. The signature Royal Hammam uses 24-carat gold leaf.',
    priceRange: 'From 1,500 MAD per treatment',
    specialties: 'Gold hammam, argan oil rituals, rose ceremony',
  },
  {
    name: 'La Mamounia Spa',
    location: 'Marrakech',
    description:
      'The legendary La Mamounia hotel\'s spa draws on centuries of Moroccan beauty traditions. Set in lush gardens, the spa includes a traditional hammam, vitality pool, and an extensive menu of treatments using locally sourced ingredients: argan oil, orange blossom, Atlas Mountain herbs, and Saharan minerals.',
    priceRange: 'From 1,200 MAD per treatment',
    specialties: 'Heritage hammam, orange blossom ritual, Atlas herb therapy',
  },
  {
    name: 'Kasbah Tamadot Spa',
    location: 'Asni (Atlas Mountains)',
    description:
      'Richard Branson\'s luxury kasbah in the High Atlas offers a spa experience with mountain views that are worth the treatment price alone. The Berber-inspired spa uses local ingredients and traditional techniques combined with modern luxury. The outdoor heated infinity pool overlooking Toubkal is extraordinary.',
    priceRange: 'From 800 MAD per treatment',
    specialties: 'Mountain herb treatments, Berber rituals, altitude wellness',
  },
  {
    name: 'Mazagan Beach Resort Spa',
    location: 'El Jadida',
    description:
      'A massive 2,000 sqm oceanfront spa combining thalassotherapy (seawater treatments) with Moroccan hammam traditions. The Atlantic seawater is used in hydrotherapy pools, jet showers, and body wraps. One of the few thalassotherapy centers in Morocco.',
    priceRange: 'From 600 MAD per treatment',
    specialties: 'Thalassotherapy, seawater jacuzzi, ocean-view hammam',
  },
];

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Morocco Wellness & Spa Guide',
    description:
      'Comprehensive guide to wellness experiences in Morocco including traditional hammams, yoga retreats, spa treatments, natural hot springs, and holistic healing.',
    url: 'https://cityguide.ma/wellness',
    publisher: {
      '@type': 'Organization',
      name: 'CityGuide',
      url: 'https://cityguide.ma',
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Morocco Wellness Experiences',
      itemListElement: [
        ...topHammams.map((h, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'HealthAndBeautyBusiness',
            name: h.name,
            description: h.description,
            address: {
              '@type': 'PostalAddress',
              addressLocality: h.city,
              addressCountry: 'MA',
            },
          },
        })),
        ...yogaRetreats.map((r, i) => ({
          '@type': 'ListItem',
          position: topHammams.length + i + 1,
          item: {
            '@type': 'TouristAttraction',
            name: r.name,
            description: r.description,
            address: {
              '@type': 'PostalAddress',
              addressLocality: r.location,
              addressCountry: 'MA',
            },
          },
        })),
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function WellnessPage() {
  return (
    <>
      <JsonLd />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80"
            alt="Moroccan spa wellness treatment with traditional tiles"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Wellness</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Body, Mind &amp; Soul
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wellness &amp; Spa Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Morocco has been a destination for healing and renewal for centuries.
              From the steam of ancient hammams to yoga on Saharan dunes, discover
              the wellness traditions that restore body, mind, and spirit.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
         1. TRADITIONAL HAMMAM SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Traditional Hammam
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The hammam is the cornerstone of Moroccan wellness culture &mdash;
              a centuries-old bathing ritual that cleanses, purifies, and connects
              communities.
            </p>
          </div>

          {/* History & What to Expect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                A Living Tradition
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  The hammam tradition in Morocco dates back over a thousand years,
                  influenced by Roman bath culture and adapted through Islamic
                  traditions of ritual purification. Every Moroccan neighborhood has
                  its own hammam, serving as both a place of hygiene and a vital
                  social gathering space.
                </p>
                <p>
                  For Moroccans, the weekly hammam visit is as essential as Friday
                  prayers. Families go together, friends catch up, and brides undergo
                  elaborate pre-wedding hammam ceremonies. It is where communities
                  are built and traditions are passed down through generations.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                What to Expect
              </h3>
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    title: 'The Cool Room (Barid)',
                    desc: 'Undress and acclimatize. Rinse with warm water and relax as your body adjusts to the heat.',
                  },
                  {
                    step: '2',
                    title: 'The Warm Room (Wastani)',
                    desc: 'Apply black soap (savon beldi) generously and let the steam open your pores for 10-15 minutes.',
                  },
                  {
                    step: '3',
                    title: 'The Hot Room (Skhoun)',
                    desc: 'Sweat for 15-20 minutes in the hottest chamber. The intense heat draws toxins from the skin.',
                  },
                  {
                    step: '4',
                    title: 'The Scrub (Gommage)',
                    desc: 'Vigorous exfoliation with a kiis (rough glove). You will be amazed at the dead skin that comes off.',
                  },
                  {
                    step: '5',
                    title: 'Rhassoul Clay Mask',
                    desc: 'A mineral-rich clay mask from the Atlas Mountains nourishes the skin and draws out impurities.',
                  },
                  {
                    step: '6',
                    title: 'Rinse & Rest',
                    desc: 'Cool down with buckets of water, rest, and enjoy mint tea. Your skin has never felt softer.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">
                        {item.title}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Public vs Private Hammam Comparison */}
          <div className="card-moroccan p-8 mb-12">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              Public vs Private Hammam: Which Should You Choose?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <Users className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                    Public Hammam (Hammam Beldi)
                  </h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Cost:</span> 10-20 MAD entry
                    + 20-50 MAD tip for the tayaba (scrubber)
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Experience:</span> The authentic
                    local experience. You will be surrounded by Moroccan families going about their weekly ritual.
                    The facilities are basic (tiled rooms, buckets of water, communal spaces) but immaculately clean.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">What to bring:</span> Your own
                    towel, flip-flops, change of underwear, kiis (exfoliating glove), and savon beldi (black soap).
                    These can be purchased at the entrance for 10-30 MAD.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Travelers who
                    want a genuine cultural experience, are comfortable with communal nudity, and want to interact
                    with locals.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Note:</span> Strictly separated by
                    gender. Men and women have either separate facilities or alternating time slots (typically women
                    mornings, men afternoons/evenings).
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10">
                    <Shield className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                    Private / Tourist Hammam
                  </h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Cost:</span> 200-800 MAD per
                    person (everything included). Luxury options: 800-2,000+ MAD.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Experience:</span> A curated,
                    comfortable experience with professional attendants who explain each step. Beautiful tiled
                    interiors, premium products (argan oil, rhassoul clay, rose water), private or semi-private
                    rooms, and often a relaxation room with mint tea afterward.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">What to bring:</span> Nothing.
                    Towels, products, robes, slippers, and disposable underwear are all provided.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> First-timers,
                    those who prefer privacy, couples, and anyone wanting a premium, relaxing experience without
                    navigating unfamiliar customs.
                  </p>
                  <p>
                    <span className="font-semibold text-[var(--text-primary)]">Note:</span> Many riad hotels
                    offer private hammam experiences for guests. Book directly with your accommodation for the
                    most convenient option.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Etiquette */}
          <div className="card-moroccan p-8 mb-12 bg-[var(--surface-muted)]">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hammam Etiquette
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Men and women have separate sessions or facilities. Never enter the wrong session.',
                'Bring flip-flops, a towel, and a change of underwear to public hammams.',
                'Complete nudity is not the norm in public hammams; wear underwear.',
                'Tip the hammam attendant (tayaba) 20-50 MAD, or more for excellent service.',
                'Drink plenty of water before and after to avoid dehydration.',
                'Apply argan oil post-hammam to lock in moisture while pores are open.',
                'Avoid eating a large meal right before your hammam visit.',
                'The hot room can be very intense; leave if you feel dizzy or unwell.',
                'In public hammams, it is polite to share your soap and scrubbing supplies with neighbors.',
              ].map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <Sparkles className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top Hammams */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Top Hammams in Morocco
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {topHammams.map((hammam) => (
              <div
                key={hammam.name}
                className="card-moroccan group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hammam.image}
                    alt={hammam.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                      <Star className="w-3 h-3 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                      {hammam.rating}
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      hammam.type.includes('Public')
                        ? 'bg-[var(--color-green)]/80 text-white'
                        : 'bg-[var(--color-accent)]/80 text-white'
                    }`}>
                      {hammam.type}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                    {hammam.name}
                  </h4>
                  <p className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3" /> {hammam.city}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3">
                    {hammam.description}
                  </p>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-3 pt-3 border-t border-[var(--border)]">
                    {hammam.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         2. YOGA & MEDITATION RETREATS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
              <Heart className="w-7 h-7 text-[var(--color-green)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Yoga &amp; Meditation Retreats
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s diverse landscapes provide the perfect backdrop for
              transformative yoga and meditation experiences, from Atlantic coast
              surf-yoga camps to silent mountain retreats and desert ceremonies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaRetreats.map((retreat) => (
              <div
                key={retreat.name}
                className="card-moroccan group overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={retreat.image}
                    alt={retreat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-green)]/90 text-white text-xs font-semibold">
                      <Heart className="w-3 h-3" /> Retreat
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                    {retreat.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {retreat.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {retreat.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1 line-clamp-3">
                    {retreat.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {retreat.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-green)]/10 text-[var(--color-green)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-primary)] mt-3 pt-3 border-t border-[var(--border)]">
                    {retreat.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         3. SPA & LUXURY WELLNESS RETREATS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sparkles className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Spa &amp; Wellness Retreats
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is home to some of the most extraordinary spa experiences in
              the world, from palatial urban spas in Marrakech to mountain kasbahs
              and oceanfront thalassotherapy centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {spaRetreats.map((spa) => (
              <div key={spa.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                    <Sparkles className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)]">
                      {spa.name}
                    </h4>
                    <p className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {spa.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spa.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 text-sm pt-3 border-t border-[var(--border)]">
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Price: </span>
                    <span className="text-[var(--text-secondary)]">{spa.priceRange}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--text-primary)]">Specialties: </span>
                    <span className="text-[var(--text-secondary)]">{spa.specialties}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         4. NATURAL BEAUTY INGREDIENTS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Leaf className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Natural Beauty Ingredients
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is a treasure trove of natural beauty ingredients that have
              been used for centuries. Discover the secrets behind the country&apos;s
              most prized beauty traditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Argan Oil */}
            <div className="card-moroccan p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                Argan Oil
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                Known as &ldquo;liquid gold,&rdquo; argan oil is Morocco&apos;s most
                famous natural product. Pressed from the nuts of the argan tree
                (endemic to southwestern Morocco), it is rich in vitamin E, fatty
                acids, and antioxidants. Used for centuries by Berber women for
                hair, skin, and nails.
              </p>
              <p className="text-xs text-[var(--color-primary)] font-medium">
                Best source: Women&apos;s cooperatives near Essaouira
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Price: 150-300 MAD per liter (cosmetic grade)
              </p>
            </div>

            {/* Rose Water */}
            <div className="card-moroccan p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                Rose Water
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                The Dades Valley, known as the &ldquo;Valley of Roses,&rdquo;
                produces some of the world&apos;s finest rose water. Each spring,
                millions of Damask rose petals are hand-picked and distilled into
                a fragrant water used as a toner, perfume, and culinary ingredient.
                The annual Rose Festival in Kelaat M&apos;Gouna (May) celebrates the harvest.
              </p>
              <p className="text-xs text-[var(--color-primary)] font-medium">
                Best source: Kelaat M&apos;Gouna distilleries
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Price: 30-80 MAD per 500ml bottle
              </p>
            </div>

            {/* Black Soap */}
            <div className="card-moroccan p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-sand-600)]/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[var(--color-sand-600)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                Black Soap (Savon Beldi)
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                This traditional Moroccan soap is the secret weapon of the hammam
                ritual. Made from olive oil and macerated black olives, it has
                a paste-like consistency and a rich, earthy color. Applied to the
                skin and left for 10 minutes in the steam room, it softens dead
                skin cells for removal with the kiis (exfoliating glove).
              </p>
              <p className="text-xs text-[var(--color-primary)] font-medium">
                Best source: Any medina herbalist (attar)
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Price: 20-60 MAD per 200g jar
              </p>
            </div>

            {/* Rhassoul Clay */}
            <div className="card-moroccan p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                Rhassoul Clay
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                Mined exclusively from the Atlas Mountains near Fes, rhassoul
                (also spelled ghassoul) is a mineral-rich clay that has been used
                for over 1,400 years as a shampoo, face mask, and body treatment.
                It absorbs oil and impurities without stripping the skin, leaving
                it remarkably soft and clean.
              </p>
              <p className="text-xs text-[var(--color-primary)] font-medium">
                Best source: Fes herbalists or hammam shops
              </p>
              <p className="text-xs text-[var(--text-secondary)] mt-1">
                Price: 15-40 MAD per 200g package
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         5. NATURAL HOT SPRINGS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Thermometer className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Natural Hot Springs
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s geothermal activity has created natural hot springs
              that have been used for therapeutic bathing since Roman times. These
              mineral-rich waters are believed to treat a range of ailments from
              joint pain to skin conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotSprings.map((spring) => (
              <div
                key={spring.name}
                className="card-moroccan group overflow-hidden flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={spring.image}
                    alt={spring.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-semibold backdrop-blur-sm">
                      <Thermometer className="w-3 h-3" />
                      {spring.temperature}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--text-primary)] mb-1">
                    {spring.name}
                  </h4>
                  <p className="text-xs text-[var(--color-primary)] font-medium flex items-center gap-1 mb-2">
                    <MapPin className="w-3 h-3" /> {spring.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                    {spring.description}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[var(--border)] space-y-1.5 text-xs text-[var(--text-secondary)]">
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">Minerals:</span> {spring.minerals}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--text-primary)]">Facilities:</span> {spring.facilities}
                    </p>
                    <p className="font-semibold text-[var(--text-primary)]">
                      {spring.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         6. DESERT WELLNESS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Sun className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Desert Wellness
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                The Sahara Desert offers a unique form of wellness that no spa can
                replicate. The vast silence, the infinite horizon, and the absence
                of modern distractions create a powerful environment for mindfulness
                and inner peace.
              </p>
              <div className="space-y-4">
                <div className="card-moroccan p-5">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Mindfulness in the Sahara
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    The desert has been a place of spiritual retreat for millennia.
                    Guided mindfulness sessions on the dunes, walking meditations
                    at sunrise, and silent contemplation under the stars offer a
                    profound reset for the modern mind. The complete absence of
                    noise, light pollution, and digital signals creates a natural
                    sensory deprivation that many find deeply restorative.
                  </p>
                </div>
                <div className="card-moroccan p-5">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Digital Detox Retreats
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Several desert camps now offer structured digital detox programs.
                    Surrender your devices on arrival and spend 2-3 days immersed in
                    the desert experience: journaling, sandboarding, stargazing,
                    and sharing stories around the campfire. Participants consistently
                    report improved sleep, reduced anxiety, and a renewed sense of
                    perspective. The Sahara&apos;s natural beauty is the ultimate
                    antidote to screen fatigue.
                  </p>
                </div>
                <div className="card-moroccan p-5">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                    Sand Bathing Therapy
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    In Merzouga, the practice of burying oneself in hot sand (psammotherapy)
                    has been used by locals for generations to treat rheumatism and joint
                    pain. During summer months (June-September), the desert sand reaches
                    temperatures of 60-70 degrees C. Patients are buried up to their neck
                    for 10-20 minutes under supervision. Several guesthouses in Merzouga
                    offer organized sand bath experiences from 100-200 MAD.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80"
                alt="Sahara Desert at sunset with golden dunes stretching to the horizon"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         7. MOUNTAIN RETREATS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80"
                alt="Atlas Mountains landscape with traditional Berber village"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
                <Mountain className="w-7 h-7 text-[var(--color-green)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Mountain Retreats
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                The Atlas Mountains offer the perfect setting for wellness retreats
                that combine physical activity, fresh mountain air, and the warmth
                of Berber hospitality.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: 'High Atlas Eco-Lodges',
                    desc: 'Sustainable mountain lodges offer yoga decks with panoramic views, organic gardens, and hammam facilities. Many are run by Berber families who share their traditional knowledge of medicinal herbs and natural remedies. Kasbah du Toubkal and Kasbah Bab Ourika are two of the finest.',
                  },
                  {
                    title: 'Therapeutic Hiking',
                    desc: 'Guided wellness hikes combine physical exercise with mindfulness practices. Stop at waterfalls for breathing exercises, practice forest bathing in cedar groves, and stretch in mountain meadows surrounded by wildflowers. The Ourika Valley and Imlil are the most popular starting points.',
                  },
                  {
                    title: 'Berber Wellness Traditions',
                    desc: 'The Amazigh people have their own wellness traditions including herbal teas for every ailment (thyme for colds, wormwood for digestion, verbena for relaxation), honey and thyme remedies, mountain herb steam treatments, and the healing properties of mineral-rich mountain springs.',
                  },
                  {
                    title: 'Altitude Wellness Benefits',
                    desc: 'The High Atlas reaches over 4,000 meters. Even at moderate altitudes (1,500-2,500m), the clean mountain air, increased UV exposure (boosting vitamin D), and lower oxygen levels stimulate the body. Many visitors report better sleep, improved mood, and heightened sensory awareness after just a few days in the mountains.',
                  },
                ].map((item) => (
                  <div key={item.title} className="card-moroccan p-5">
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         8. PRACTICAL WELLNESS PLANNING
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Banknote className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Wellness Budget Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect to pay for wellness experiences across Morocco, from
              budget-friendly public hammams to luxury spa retreats.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Experience
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Budget
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Mid-Range
                    </th>
                    <th className="text-left px-4 md:px-6 py-3 font-semibold text-[var(--text-primary)]">
                      Luxury
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { experience: 'Hammam session', budget: '15-30 MAD', mid: '200-500 MAD', luxury: '600-2,000 MAD' },
                    { experience: 'Full-body massage', budget: '100-200 MAD', mid: '300-500 MAD', luxury: '600-1,500 MAD' },
                    { experience: 'Yoga retreat (per day)', budget: '300-500 MAD', mid: '600-1,000 MAD', luxury: '1,500-3,000 MAD' },
                    { experience: 'Hot springs visit', budget: '10-20 MAD', mid: '100-300 MAD', luxury: '400-800 MAD' },
                    { experience: 'Argan oil treatment', budget: '50-100 MAD', mid: '200-400 MAD', luxury: '500-1,000 MAD' },
                    { experience: 'Desert wellness retreat (3 days)', budget: '1,500-2,500 MAD', mid: '3,000-5,000 MAD', luxury: '8,000-15,000 MAD' },
                    { experience: 'Mountain eco-lodge (per night)', budget: '200-400 MAD', mid: '600-1,200 MAD', luxury: '2,000-5,000 MAD' },
                  ].map((row, i) => (
                    <tr key={row.experience} className={i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}>
                      <td className="px-4 md:px-6 py-3 text-[var(--text-primary)] font-medium">{row.experience}</td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-green)]">{row.budget}</td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-primary)]">{row.mid}</td>
                      <td className="px-4 md:px-6 py-3 text-[var(--color-accent)]">{row.luxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-4 bg-[var(--color-primary)]/5 text-xs text-[var(--text-secondary)]">
              All prices in Moroccan Dirham (MAD). 10 MAD is approximately 1 USD / 0.90 EUR. Prices as of 2025.
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         CTA -- Link to Activities
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Book Your Wellness Experience?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Browse our curated collection of wellness activities, spa treatments,
            and retreat packages across Morocco.
          </p>
          <Link
            href="/activities"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
          >
            Explore Activities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
