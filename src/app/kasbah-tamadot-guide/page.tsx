import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight, Home, MapPin, Star, Heart, Clock, Info, ArrowRight,
  Sparkles, ShieldCheck, DollarSign, CheckCircle, Users, Gem, Building,
  Award, BookOpen, Crown, Mountain, Sun, Globe, Landmark, Bath, Tent,
  Utensils, Wine, Flower2, Calendar,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Kasbah Tamadot Guide 2026 | Virgin Limited Edition Luxury Hotel Atlas Mountains Morocco',
  description:
    'Complete guide to Kasbah Tamadot, Richard Branson\'s luxury retreat in Morocco\'s Atlas Mountains. Rooms, suites, Berber tents, dining at Kanoun, activities, infinity pool, hammam, hot air balloon rides, weddings, Eve Branson Foundation, booking tips, and how to get there from Marrakech.',
  keywords: [
    'kasbah tamadot',
    'kasbah tamadot morocco',
    'virgin limited edition morocco',
    'luxury hotel atlas mountains',
    'kasbah tamadot reviews',
    'richard branson morocco hotel',
    'kasbah tamadot rooms',
    'kasbah tamadot suites',
    'kasbah tamadot berber tents',
    'kanoun restaurant kasbah tamadot',
    'atlas mountains luxury hotel',
    'kasbah tamadot wedding',
    'kasbah tamadot infinity pool',
    'kasbah tamadot booking',
    'luxury retreat marrakech',
    'eve branson foundation',
    'asni morocco hotel',
    'atlas mountains accommodation',
    'morocco luxury resort',
    'kasbah tamadot activities',
  ],
  openGraph: {
    title: 'Kasbah Tamadot Guide 2026 | Virgin Limited Edition Luxury Hotel Atlas Mountains',
    description:
      'Discover Kasbah Tamadot, Richard Branson\'s stunning luxury hotel in Morocco\'s Atlas Mountains. Complete guide to rooms, dining, activities, weddings, and booking tips.',
    url: `${BASE_URL}/kasbah-tamadot-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-village.webp`,
        width: 1200,
        height: 630,
        alt: 'Kasbah Tamadot luxury hotel nestled in the Atlas Mountains of Morocco with panoramic mountain views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kasbah Tamadot Guide 2026 | Virgin Limited Edition Atlas Mountains Morocco',
    description:
      'Complete guide to Kasbah Tamadot, Richard Branson\'s luxury retreat near Marrakech. Rooms, dining, activities, infinity pool, weddings, and booking tips.',
    images: [`${BASE_URL}/images/hero-atlas-village.webp`],
  },
  alternates: { canonical: `${BASE_URL}/kasbah-tamadot-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/kasbah-tamadot-guide`,
  name: 'Kasbah Tamadot Guide 2026 | Virgin Limited Edition Luxury Hotel Atlas Mountains Morocco',
  description:
    'Complete guide to Kasbah Tamadot, Richard Branson\'s luxury retreat in the Atlas Mountains. Rooms, suites, dining, activities, infinity pool, weddings, Eve Branson Foundation, and booking tips.',
  url: `${BASE_URL}/kasbah-tamadot-guide`,
  image: `${BASE_URL}/images/hero-atlas-village.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/kasbah-tamadot-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'LodgingBusiness',
    name: 'Kasbah Tamadot',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asni',
      addressRegion: 'Atlas Mountains',
      addressCountry: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Kasbah Tamadot Guide', item: `${BASE_URL}/kasbah-tamadot-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to stay at Kasbah Tamadot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rates at Kasbah Tamadot start from approximately 8,000 MAD (around 750 USD) per night for a deluxe room during low season, rising to from 15,000 MAD or more for master suites in peak season. Berber tent accommodation starts from around 12,000 MAD per night. All rates include breakfast and vary by season. Booking directly through Virgin Limited Edition or during shoulder season (April-May, October-November) often yields the best rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Kasbah Tamadot from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kasbah Tamadot is located approximately 45 minutes to one hour from Marrakech, depending on traffic. The hotel can arrange private transfers from Marrakech Menara Airport or your Marrakech hotel from around 800 MAD each way. You can also hire a private taxi or rent a car and drive via the N203 road toward Asni. The journey through the foothills of the Atlas Mountains is scenic, so a daytime transfer is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Kasbah Tamadot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best times to visit are spring (March to May) and autumn (September to November), when temperatures are comfortable for outdoor activities and the Atlas Mountains scenery is at its finest. Summer (June to August) is warm but pleasant at the hotel\'s elevation of 1,200 meters. Winter (December to February) offers snow-capped mountain views and cozy fireside evenings, though some outdoor activities may be limited.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Kasbah Tamadot suitable for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Kasbah Tamadot welcomes families with children. The hotel offers family-friendly suites, a children\'s pool area, mule rides, garden tours, and mountain walks suitable for younger travelers. However, the property is also popular with couples seeking a romantic retreat, so the atmosphere is refined and tranquil. There is no dedicated kids\' club, but staff can arrange age-appropriate activities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Kasbah Tamadot offer hot air balloon rides?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, hot air balloon rides over the Atlas Mountains are one of Kasbah Tamadot\'s signature experiences. Flights typically depart at sunrise and last approximately one hour, offering spectacular views of snow-capped peaks, Berber villages, and the valley below. Prices start from around 2,500 MAD per person. Availability depends on weather conditions and should be booked in advance through the hotel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Eve Branson Foundation and how does Kasbah Tamadot support local communities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Eve Branson Foundation, founded by Richard Branson\'s mother, works to support the Berber communities in the Atlas Mountains surrounding Kasbah Tamadot. The foundation funds projects in education, healthcare, artisan skills training, and sustainable livelihoods. Guests at Kasbah Tamadot can visit the foundation\'s workshops, where local women learn craft skills. A portion of hotel proceeds supports the foundation\'s ongoing community work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I host a wedding at Kasbah Tamadot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Kasbah Tamadot is one of Morocco\'s most exclusive wedding venues. The property can accommodate intimate ceremonies and receptions for up to approximately 80 guests. Wedding settings include the terraced gardens overlooking the Atlas Mountains, the poolside area, and the rooftop terrace. The hotel offers a dedicated wedding coordinator and can arrange everything from Moroccan-themed decor to traditional entertainment. Exclusive-use hire of the entire property is available.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ROOM TYPES
   ═══════════════════════════════════════════════════════════════ */

const roomTypes = [
  {
    name: 'Deluxe Rooms',
    icon: Building,
    description:
      'Elegantly appointed rooms featuring Moroccan-inspired decor with hand-carved woodwork, Berber textiles, and ensuite bathrooms with locally sourced amenities. Each room offers views of the gardens or the Atlas Mountains. Air conditioning, underfloor heating, and complimentary Wi-Fi are standard.',
    size: 'From 35 square meters',
    price: 'From 8,000 MAD per night',
    features: ['Mountain or garden views', 'Ensuite bathroom with rain shower', 'Handcrafted Moroccan furnishings', 'Private terrace or balcony'],
  },
  {
    name: 'Superior Suites',
    icon: Crown,
    description:
      'Spacious suites with separate living areas, oversized beds, and private terraces with panoramic Atlas Mountain views. Decorated with antiques collected by Sir Richard Branson from his travels across Morocco. Some suites include a private plunge pool or outdoor seating area.',
    size: 'From 55 square meters',
    price: 'From 11,000 MAD per night',
    features: ['Separate living area', 'Panoramic Atlas views', 'Curated antique decor', 'Some with private plunge pool'],
  },
  {
    name: 'Master Suites',
    icon: Gem,
    description:
      'The finest accommodation at Kasbah Tamadot, including the renowned Branson Suite. These expansive suites feature multiple rooms, luxury bathrooms with freestanding tubs, private rooftop terraces, and the finest Moroccan craftsmanship. The Branson Suite was personally designed by Sir Richard and offers the most exclusive experience.',
    size: 'From 85 square meters',
    price: 'From 15,000 MAD per night',
    features: ['Multiple rooms', 'Freestanding bathtub', 'Private rooftop terrace', 'Finest antique furnishings'],
  },
  {
    name: 'Berber Tents',
    icon: Tent,
    description:
      'Three luxury Berber-inspired tents set in the gardens offer a unique glamping experience with all the comforts of a five-star hotel. Each tent features a king-size bed, full ensuite bathroom, private deck, wood-burning stove, and uninterrupted mountain views. A truly memorable way to experience the Atlas Mountains.',
    size: 'From 50 square meters',
    price: 'From 12,000 MAD per night',
    features: ['King-size bed', 'Full ensuite bathroom', 'Wood-burning stove', 'Private garden deck'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DINING EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const diningExperiences = [
  {
    name: 'Kanoun Restaurant',
    icon: Utensils,
    description:
      'The main dining venue at Kasbah Tamadot, Kanoun serves a refined blend of traditional Moroccan and international cuisine. Named after the traditional Moroccan brazier, the restaurant sources ingredients from the hotel\'s organic garden and local farms. Expect beautifully presented tagines, couscous royale, grilled Atlas lamb, and seasonal Moroccan salads. The tasting menu is a highlight, showcasing the best of Moroccan gastronomy.',
    setting: 'Indoor dining room with mountain views, or outdoor terrace',
    price: 'Tasting menu from 1,200 MAD per person',
  },
  {
    name: 'Poolside Dining',
    icon: Sun,
    description:
      'Light lunches and refreshments are served by the infinity pool, with the Atlas Mountains as your backdrop. The poolside menu features fresh salads, grilled meats, Mediterranean-inspired dishes, and fruit platters. An ideal spot for a leisurely midday meal between swims in the heated infinity pool.',
    setting: 'Infinity pool terrace with panoramic views',
    price: 'Lunch dishes from 250 MAD',
  },
  {
    name: 'Private Dining',
    icon: Wine,
    description:
      'Kasbah Tamadot offers several exclusive private dining options for special occasions. Dine under the stars on the rooftop terrace, enjoy a candlelit dinner in the gardens, or have a bespoke meal prepared in the privacy of your suite. The hotel sommelier curates wine pairings from a cellar featuring Moroccan, French, and international wines.',
    setting: 'Rooftop terrace, gardens, or in-suite',
    price: 'Private dining from 2,000 MAD per couple',
  },
  {
    name: 'Afternoon Tea & Terrace',
    icon: Flower2,
    description:
      'Traditional Moroccan mint tea and a selection of pastries are served each afternoon on the main terrace. Sample msemen, chebakia, and almond-filled briouats alongside the ceremonial pouring of mint tea. This complimentary experience is the perfect way to unwind while watching the late-afternoon sun illuminate the Atlas peaks.',
    setting: 'Main terrace overlooking the gardens',
    price: 'Complimentary for guests',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const activities = [
  {
    name: 'Hot Air Balloon Rides',
    icon: Globe,
    description:
      'Float above the Atlas Mountains at sunrise for a breathtaking panoramic experience. The one-hour flight drifts over Berber villages, river valleys, and snow-capped peaks. A traditional Berber breakfast is served upon landing.',
    price: 'From 2,500 MAD per person',
    duration: 'Approximately 1 hour flight',
  },
  {
    name: 'Atlas Mountain Trekking',
    icon: Mountain,
    description:
      'Guided treks range from gentle half-day walks through Berber villages to challenging full-day hikes toward Jebel Toubkal. Expert mountain guides share insights into local flora, fauna, and Berber traditions along the way.',
    price: 'From 500 MAD per person',
    duration: 'Half-day to full-day options',
  },
  {
    name: 'Mule Rides',
    icon: MapPin,
    description:
      'A traditional and family-friendly way to explore the surrounding valleys and villages. Mule rides follow scenic trails through walnut groves and terraced fields, with stops at local Berber homes for tea.',
    price: 'From 400 MAD per person',
    duration: '1 to 3 hours',
  },
  {
    name: 'Hammam & Spa',
    icon: Bath,
    description:
      'The hotel spa offers a traditional Moroccan hammam experience with black soap scrubs, ghassoul clay treatments, and argan oil massages. Private treatment rooms overlook the gardens. Couples\' treatments are available.',
    price: 'From 800 MAD per treatment',
    duration: '60 to 90 minutes per session',
  },
  {
    name: 'Infinity Pool & Gardens',
    icon: Sparkles,
    description:
      'The heated infinity pool appears to merge with the Atlas Mountains horizon. Surrounded by terraced gardens featuring roses, olive trees, and aromatic herbs, it is the centerpiece of the property. Sun loungers, umbrellas, and attentive poolside service complete the experience.',
    price: 'Complimentary for guests',
    duration: 'Open daily, sunrise to sunset',
  },
  {
    name: 'Garden & Property Tour',
    icon: Flower2,
    description:
      'Guided tours of Kasbah Tamadot\'s extensive gardens reveal the property\'s collection of rare antiques, traditional Moroccan architecture, and organic kitchen garden. Learn about the plants and herbs used in the hotel restaurant.',
    price: 'Complimentary for guests',
    duration: 'Approximately 45 minutes',
  },
  {
    name: 'Cooking Classes',
    icon: Utensils,
    description:
      'Learn to prepare authentic Moroccan dishes with the hotel\'s chefs. Classes cover tagine preparation, couscous techniques, Moroccan salads, and pastry making. Ingredients are picked fresh from the kitchen garden when in season.',
    price: 'From 600 MAD per person',
    duration: 'Approximately 2 hours',
  },
  {
    name: 'Stargazing Evenings',
    icon: Star,
    description:
      'The Atlas Mountains\' minimal light pollution makes Kasbah Tamadot an excellent stargazing destination. The hotel can arrange telescope sessions and guided astronomical tours on the rooftop terrace on clear evenings.',
    price: 'From 300 MAD per person',
    duration: 'Approximately 1 hour',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ALTERNATIVE LUXURY ATLAS HOTELS
   ═══════════════════════════════════════════════════════════════ */

const alternativeHotels = [
  {
    name: 'Kasbah Bab Ourika',
    location: 'Ourika Valley, 45 minutes from Marrakech',
    description:
      'A boutique eco-lodge perched on a hilltop with stunning valley views. Features organic gardens, a hammam, and guided mountain treks. More affordable than Kasbah Tamadot while offering a similar mountain experience.',
    price: 'From 3,500 MAD per night',
  },
  {
    name: 'Kasbah Angour',
    location: 'Tahanaout, 30 minutes from Marrakech',
    description:
      'A charming nine-room guesthouse with panoramic Atlas views, a pool, and home-cooked Moroccan cuisine. Intimate atmosphere and excellent value for mountain luxury.',
    price: 'From 2,000 MAD per night',
  },
  {
    name: 'Domaine de la Roseraie',
    location: 'Ouirgane, 1 hour from Marrakech',
    description:
      'Set in 60 acres of rose gardens and olive groves, this resort offers bungalows, horseback riding, and a tranquil mountain retreat atmosphere at more accessible prices.',
    price: 'From 2,500 MAD per night',
  },
  {
    name: 'La Pause',
    location: 'Agafay Desert, 40 minutes from Marrakech',
    description:
      'A unique off-grid eco-lodge in the rocky Agafay Desert with views of the Atlas Mountains. Solar-powered tents and lodges offer a digital-detox experience with camel rides and desert hikes.',
    price: 'From 3,000 MAD per night',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    icon: Calendar,
    title: 'Book in Shoulder Season',
    text: 'April-May and October-November offer the best combination of pleasant weather and lower rates. Peak season (Christmas, New Year, Easter) commands the highest prices and books out months in advance.',
  },
  {
    icon: DollarSign,
    title: 'Book Direct for Best Value',
    text: 'Booking through Virgin Limited Edition directly often includes perks like complimentary upgrades, spa credits, or airport transfers. Check their website for seasonal offers and packages.',
  },
  {
    icon: Clock,
    title: 'Stay at Least Two Nights',
    text: 'With so many activities on offer, a single night barely scratches the surface. Two to three nights allows you to enjoy trekking, the spa, a balloon ride, and leisurely dining without rushing.',
  },
  {
    icon: Heart,
    title: 'Combine with Marrakech',
    text: 'Kasbah Tamadot pairs perfectly with a Marrakech city break. Spend two to three days exploring the medina and souks, then retreat to the mountains for relaxation and adventure.',
  },
  {
    icon: Star,
    title: 'Request a Berber Tent Early',
    text: 'There are only three Berber tents, and they are the most sought-after accommodation. Book at least three to four months ahead for high season, or ask to be placed on a waiting list.',
  },
  {
    icon: Award,
    title: 'Special Occasions & Celebrations',
    text: 'Inform the hotel in advance about birthdays, anniversaries, or honeymoons. The team excels at arranging special touches like room decorations, private dinners, and bespoke experiences.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function KasbahTamadotGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-atlas-village.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Kasbah Tamadot Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Luxury Hotels &amp; Retreats
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Kasbah Tamadot:
            <br className="hidden md:block" /> Richard Branson&apos;s Atlas Mountains Retreat
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your complete guide to Virgin Limited Edition&apos;s stunning luxury hotel in Morocco.
            Rooms, dining, activities, and insider booking tips for an unforgettable mountain escape.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is Kasbah Tamadot? Virgin Limited Edition in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Kasbah Tamadot is a luxury hotel in the foothills of Morocco&apos;s Atlas Mountains,
                owned by Sir Richard Branson as part of the Virgin Limited Edition portfolio. Perched
                at an elevation of around 1,200 meters near the village of Asni, approximately 45
                minutes from Marrakech, the property commands sweeping views of the High Atlas peaks
                and surrounding Berber villages.
              </p>
              <p>
                Branson purchased the property in 1998, reportedly after spotting it during a hot air
                balloon flight over the Atlas Mountains. What was once a crumbling kasbah has been
                lovingly transformed into one of Morocco&apos;s most celebrated luxury retreats,
                blending traditional Moroccan architecture with contemporary comforts. Each room and
                suite is individually decorated with antiques and artworks collected by Branson from
                across Morocco and beyond.
              </p>
              <p>
                Beyond its luxurious accommodation and stunning setting, Kasbah Tamadot is deeply
                connected to its local community through the Eve Branson Foundation, making it a
                property where indulgence and social responsibility go hand in hand. The hotel has
                consistently won accolades in travel publications and is frequently rated among the
                best luxury hotels in Africa and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location & Setting ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Location &amp; Setting
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Nestled in the foothills of the Atlas Mountains, between Marrakech and Jebel Toubkal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Atlas Mountains Foothills
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Kasbah Tamadot sits at approximately 1,200 meters elevation near the village of
                Asni, on the road that leads to Imlil and the Toubkal National Park. The property
                is surrounded by terraced gardens, olive groves, and traditional Berber settlements.
                On clear days, the snow-capped summit of Jebel Toubkal (4,167 meters), North
                Africa&apos;s highest peak, is visible from the hotel&apos;s terraces and infinity pool.
              </p>
              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>45 minutes to 1 hour from Marrakech</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Near Asni village, gateway to Toubkal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>1,200 meters elevation</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Surrounded by Berber Culture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                The area surrounding Kasbah Tamadot is home to Amazigh (Berber) communities that
                have lived in these mountains for centuries. Weekly markets in Asni on Saturdays
                offer a vibrant glimpse of local life with produce, livestock, and handicrafts.
                The hotel organizes guided village walks, allowing guests to meet local artisans,
                visit schools supported by the Eve Branson Foundation, and learn about traditional
                mountain agriculture.
              </p>
              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Saturday market in Asni village</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Guided Berber village walks available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Gateway to Toubkal National Park treks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Room Types & Suites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rooms, Suites &amp; Berber Tents
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            28 individually designed rooms and suites, plus three luxury Berber tents in the gardens.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are indicative starting rates. Seasonal pricing can change; check directly with the hotel for current availability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room) => {
              const RoomIcon = room.icon;
              return (
                <div key={room.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RoomIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {room.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{room.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[var(--text-muted)]">{room.size}</span>
                    <span className="font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                      {room.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dining Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dining at Kasbah Tamadot
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From refined Moroccan gastronomy at Kanoun to intimate private dinners under the stars.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices shown are starting prices. Seasonal pricing and menu changes may apply.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {diningExperiences.map((dining) => {
              const DiningIcon = dining.icon;
              return (
                <div key={dining.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DiningIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dining.name}
                        </h3>
                        <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                          {dining.price}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{dining.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 text-[var(--color-gold)]" />
                        <span>{dining.setting}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Activities & Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activities &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From hot air balloon flights over the Atlas to traditional hammam rituals, every day offers new adventures.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Activity prices are starting rates and may vary seasonally. Advance booking recommended for balloon rides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{activity.duration}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{activity.description}</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold">
                    <DollarSign className="w-3 h-3" />
                    {activity.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Events & Weddings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Weddings &amp; Special Events
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of Morocco&apos;s most exclusive venues for intimate celebrations against a backdrop of Atlas Mountain grandeur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-4" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Wedding Ceremonies
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Kasbah Tamadot offers a magical setting for weddings, with ceremonies held in the
                terraced gardens overlooking the Atlas Mountains, on the rooftop terrace beneath
                the stars, or by the infinity pool. The property can accommodate up to approximately
                80 guests for a seated reception. A dedicated wedding coordinator handles every
                detail, from Moroccan-themed decor and traditional entertainment to floral
                arrangements and bespoke menus.
              </p>
              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Exclusive-use hire available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Up to 80 seated guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Dedicated wedding coordinator</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-4" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Private Events &amp; Celebrations
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Beyond weddings, Kasbah Tamadot hosts milestone birthdays, anniversary celebrations,
                corporate retreats, and intimate gatherings. The property&apos;s versatile indoor and
                outdoor spaces can be configured for dining, presentations, or cocktail receptions.
                Team-building activities such as group trekking, cooking classes, and competitive
                mule races add a uniquely Moroccan touch to corporate events.
              </p>
              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Flexible indoor and outdoor spaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Bespoke event planning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                  <span>Unique team-building activities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eve Branson Foundation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Eve Branson Foundation &amp; Community Impact
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How Kasbah Tamadot supports the Berber communities of the Atlas Mountains.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Eve Branson Foundation was established by Richard Branson&apos;s mother, Eve Branson,
                who fell in love with the Atlas Mountains and its people. The foundation creates
                sustainable livelihoods for surrounding Berber communities, focusing on education,
                healthcare, artisan skills training, and environmental sustainability. Key initiatives
                include craft workshops where local women learn textile skills, a community health
                clinic, school improvements, and literacy programs.
              </p>
              <p>
                The foundation has helped establish women&apos;s cooperatives producing handmade goods
                sold at the hotel boutique and internationally, providing vital income for mountain
                families. Guests are encouraged to visit the craft workshops, see artisans at work,
                and purchase authentic, locally made products. A portion of the hotel&apos;s proceeds
                supports the foundation&apos;s ongoing community projects, so staying at Kasbah Tamadot
                directly contributes to positive social impact in the region.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { icon: BookOpen, label: 'Education & Literacy' },
                { icon: ShieldCheck, label: 'Healthcare Access' },
                { icon: Gem, label: 'Artisan Skills Training' },
                { icon: Flower2, label: 'Environmental Projects' },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.label} className="text-center p-3 rounded-lg bg-[var(--surface-muted)]">
                    <ItemIcon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                    <p className="text-xs font-medium text-[var(--text-primary)]">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting There from Marrakech ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Kasbah Tamadot from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Multiple transfer options make reaching this mountain retreat straightforward.
          </p>

          <div className="space-y-6">
            {[
              {
                title: 'Hotel Private Transfer',
                icon: Crown,
                text: 'The most comfortable option. Kasbah Tamadot arranges private car transfers from Marrakech Menara Airport or any Marrakech hotel. Air-conditioned vehicles with professional drivers. The scenic drive through the foothills takes approximately 45 minutes to one hour. Expect to pay from 800 MAD each way.',
              },
              {
                title: 'Self-Drive',
                icon: MapPin,
                text: 'Rent a car at Marrakech airport and take the N203 road toward Asni. The route is well-paved and signposted. The drive is scenic, passing through groves, villages, and the foothills. Parking is available at the hotel. Allow one hour for the journey, especially if stopping for photos along the way.',
              },
              {
                title: 'Grand Taxi or Private Taxi',
                icon: Users,
                text: 'A grand taxi from Marrakech to Asni can be hired for from 400 MAD. From Asni, the hotel can arrange a short transfer. Alternatively, book a private taxi through your Marrakech riad or hotel for from 500 MAD each way. Negotiate the price before departing.',
              },
            ].map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {option.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">{option.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Kasbah Tamadot
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The hotel is open year-round, but each season offers a distinct experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                season: 'Spring (March - May)',
                icon: Flower2,
                description: 'The best overall season. Almond and cherry blossoms cover the hillsides, temperatures are comfortable for trekking (15-25 degrees Celsius), and the landscape is lush and green. Ideal for hot air balloon rides with clear morning skies.',
                rating: 'Peak season for activities',
              },
              {
                season: 'Summer (June - August)',
                icon: Sun,
                description: 'Warm but pleasant at the hotel\'s elevation. Daytime temperatures reach 30-35 degrees Celsius but evenings cool down significantly. The pool becomes the focal point. Some trekking routes may be too hot during midday hours.',
                rating: 'Great for pool and relaxation',
              },
              {
                season: 'Autumn (September - November)',
                icon: Mountain,
                description: 'Another excellent season with golden light, comfortable temperatures, and harvest celebrations in surrounding villages. October and November offer lower rates and fewer guests while maintaining pleasant weather.',
                rating: 'Best value season',
              },
              {
                season: 'Winter (December - February)',
                icon: Star,
                description: 'Snow-capped Atlas peaks create a dramatic backdrop. Temperatures drop to 5-15 degrees Celsius but the hotel\'s fireplaces and underfloor heating keep rooms cozy. Perfect for spa-focused stays. Some outdoor activities may be limited.',
                rating: 'Magical scenery, cozy ambiance',
              },
            ].map((period) => {
              const PeriodIcon = period.icon;
              return (
                <div key={period.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PeriodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {period.season}
                      </h3>
                      <p className="text-xs text-[var(--color-gold)] font-medium">{period.rating}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{period.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Alternative Luxury Atlas Hotels ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Alternative Luxury Atlas Mountain Hotels
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            If Kasbah Tamadot is fully booked or beyond your budget, these alternatives offer luxury in the Atlas Mountains.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are indicative starting rates. Seasonal pricing can change; always verify directly with each property.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alternativeHotels.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-5">
                <Building className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3 h-3" />
                  {hotel.location}
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{hotel.description}</p>
                <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold">
                  <DollarSign className="w-3 h-3" />
                  {hotel.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips &amp; Best Rates
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice to help you get the most from your Kasbah Tamadot stay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to stay at Kasbah Tamadot?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Rates start from approximately 8,000 MAD (around 750 USD) per night for a deluxe room
                in low season, rising to from 15,000 MAD or more for master suites in peak season.
                Berber tent accommodation starts from around 12,000 MAD per night. All rates include
                breakfast and vary by season. Booking directly through Virgin Limited Edition or during
                shoulder season (April-May, October-November) often yields the best rates.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get to Kasbah Tamadot from Marrakech?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Kasbah Tamadot is approximately 45 minutes to one hour from Marrakech. The hotel arranges
                private transfers from Marrakech Menara Airport or your hotel from around 800 MAD each
                way. You can also hire a private taxi or self-drive via the N203 toward Asni. The scenic
                mountain road is well-paved and makes for a beautiful daytime journey.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Kasbah Tamadot?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March to May) and autumn (September to November) offer the best weather for
                outdoor activities and stunning scenery. Summer is warm but pleasant at 1,200 meters
                elevation. Winter brings snow-capped views and cozy fireside evenings. The hotel is
                open year-round, so each season has its own charm and appeal.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Kasbah Tamadot suitable for families with children?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, the hotel welcomes families. Family-friendly suites, a children&apos;s pool area, mule
                rides, garden tours, and mountain walks are available. The atmosphere is refined and
                tranquil, so it also suits couples. There is no dedicated kids&apos; club, but staff
                arrange age-appropriate activities on request.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does Kasbah Tamadot offer hot air balloon rides?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, sunrise hot air balloon rides over the Atlas Mountains are a signature experience.
                Flights last approximately one hour and offer spectacular views of snow-capped peaks
                and Berber villages. Prices start from around 2,500 MAD per person. Availability
                depends on weather and advance booking through the hotel is recommended.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the Eve Branson Foundation?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Founded by Richard Branson&apos;s mother, the Eve Branson Foundation supports Berber
                communities around Kasbah Tamadot through education, healthcare, artisan skills
                training, and sustainability projects. Guests can visit the foundation&apos;s workshops
                and purchase locally made products. A portion of hotel proceeds funds the
                foundation&apos;s ongoing community work.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I host a wedding at Kasbah Tamadot?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, it is one of Morocco&apos;s most exclusive wedding venues. The property accommodates
                intimate ceremonies for up to approximately 80 guests. Settings include terraced gardens,
                the poolside, and rooftop terrace. A dedicated coordinator handles all arrangements, and
                exclusive-use hire of the entire property is available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, hiking, and mountain experiences across the High, Middle, and Anti-Atlas ranges.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bath className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spa Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hammams, riads with spas, and the best wellness retreats across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover the living heritage of the Amazigh people, their traditions, crafts, and villages.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-riads-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hand-picked riads and boutique hotels across Marrakech, Fes, Essaouira, and more.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Kasbah Tamadot?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the infinity pool overlooking the Atlas Mountains to sunrise balloon rides and
            candlelit dinners under the stars, Kasbah Tamadot offers an unforgettable
            Moroccan luxury experience. Start planning your mountain retreat today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas Mountains
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-5 h-5" />
              Browse All Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
