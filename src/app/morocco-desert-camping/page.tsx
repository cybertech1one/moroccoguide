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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Sun,
  Moon,
  Tent,
  Flame,
  Music,
  Camera,
  Mountain,
  Globe,
  Thermometer,
  Wind,
  Droplets,
  Eye,
  Users,
  CalendarDays,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Desert Camping Morocco 2026 | Sahara Camps, Glamping & Overnight Guide',
  description:
    'Honest guide to desert camping in Morocco. Compare Erg Chebbi, Erg Chigaga, and Agafay camps by budget. Real prices, camp names, what to expect from bivouacs to luxury glamping, plus packing tips and booking advice.',
  keywords: [
    'desert camping morocco',
    'sahara desert camp',
    'morocco glamping',
    'luxury desert camp morocco',
    'overnight desert camp merzouga',
    'erg chebbi camp',
    'erg chigaga camp',
    'agafay desert camp',
    'sahara bivouac morocco',
    'merzouga desert experience',
    'morocco desert tour',
    'sahara glamping morocco',
    'desert camp bathroom',
    'camel ride sahara morocco',
    'sahara stargazing morocco',
    'berber camp morocco',
    'desert camp prices morocco',
    'best time sahara morocco',
    'luxury tent morocco desert',
    'morocco desert overnight',
  ],
  openGraph: {
    title: 'Desert Camping Morocco 2026 | Sahara Camps, Glamping & Overnight Guide',
    description:
      'Compare Erg Chebbi, Erg Chigaga, and Agafay desert camps by budget. Real prices, honest reviews, and practical advice for overnight Sahara experiences.',
    url: `${BASE_URL}/morocco-desert-camping`,
    images: [
      {
        url: `${BASE_URL}/images/hero-desert-glamping.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxury desert glamping tent in the Sahara dunes of Morocco at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desert Camping Morocco 2026 | Sahara Camps & Glamping Guide',
    description:
      'Honest guide to desert camps in Morocco. Erg Chebbi, Erg Chigaga, Agafay compared. Real prices from budget bivouacs to luxury glamping.',
    images: [`${BASE_URL}/images/hero-desert-glamping.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-desert-camping` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-desert-camping`,
  name: 'Desert Camping Morocco 2026 | Sahara Camps, Glamping & Overnight Guide',
  description:
    'Complete guide to desert camping in Morocco. Compare Erg Chebbi, Erg Chigaga, and Agafay camps by budget tier, with real prices and practical advice.',
  url: `${BASE_URL}/morocco-desert-camping`,
  image: `${BASE_URL}/images/hero-desert-glamping.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-desert-camping`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Desert Camping Morocco', item: `${BASE_URL}/morocco-desert-camping` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are desert camp bathrooms actually usable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on the camp tier. Basic bivouacs have a shared pit toilet behind a canvas screen and no shower. Mid-range camps offer flushing toilets in a shared block, sometimes with lukewarm showers powered by gas heaters. Luxury camps like Merzouga Luxury Desert Camp and Erg Chigaga Camp provide private en-suite bathrooms with hot showers, flushing toilets, and running sinks inside each tent. Ask your camp directly before booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for desert camping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October through April is the best window. Peak season runs from October to November and March to April, with warm days (25-30°C) and cool nights (5-15°C). December and January nights drop near freezing, so bring warm layers. Avoid June through August completely: daytime temperatures hit 45-50°C in Erg Chebbi and Erg Chigaga, and most camps either close or operate at reduced capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there phone signal in the Sahara desert camps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erg Chebbi camps near Merzouga usually get weak Maroc Telecom signal (enough for WhatsApp messages, not video calls). Erg Chigaga camps, 60km from the nearest town, have zero signal. Agafay camps near Marrakech have full 4G. Luxury camps sometimes offer satellite Wi-Fi, but expect it to be slow and unreliable. Treat your desert night as a digital detox.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does desert camping cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget bivouac camps start from 250 MAD per person including dinner and breakfast. Mid-range camps with proper beds and shared bathrooms run from 600-1,200 MAD per person. Luxury glamping with en-suite bathrooms, fine dining, and activities costs from 2,500-8,000 MAD per person per night. Prices typically include camel ride, dinner, breakfast, and accommodation. Transport from Marrakech adds from 400-800 MAD for shared transfers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I choose Erg Chebbi or Erg Chigaga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erg Chebbi (near Merzouga) is easier to reach, has more camp options at every budget, and suits shorter trips. The dunes reach 150 meters high and the infrastructure is well developed. Erg Chigaga (near M\'Hamid) requires a 4x4 journey, is far more remote, and feels truly wild. Dunes stretch 40km. Choose Chebbi for convenience and variety, Chigaga for isolation and raw Sahara experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during a sandstorm at a desert camp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sandstorms (called chergui or sirocco) are most common in spring. During a storm, you stay inside your tent with all openings sealed. Sand gets everywhere regardless. Camps are built to withstand moderate storms, and staff know when conditions are worsening. Severe storms are rare, but they can delay your departure by a few hours. Bring a buff or scarf to cover your face, keep electronics in sealed bags, and accept that sand will be in your luggage for weeks afterward.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agafay Desert a real desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agafay is a rocky, barren plateau 40 minutes from Marrakech, not a sand dune desert. It has no dunes and looks more like a moonscape. The advantage is proximity to Marrakech, easy access, and reliable luxury camps like Scarabeo Camp and Inara Camp. The disadvantage is that it does not deliver the classic Sahara dune experience. If you want actual sand dunes, you must go to Erg Chebbi or Erg Chigaga.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do a desert camp trip with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but choose your camp carefully. Luxury camps in Agafay or Erg Chebbi are best for families with young children, offering proper beds, bathrooms, and shorter camel rides. Most camps accept children from age 4 for camel rides. The long drive to Merzouga (8-10 hours from Marrakech) can be tough for small kids. Agafay is the easiest option for families since it is only 40 minutes from Marrakech. Mid-range and luxury camps often provide family tents.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMP TYPES
   ═══════════════════════════════════════════════════════════════ */

const campTypes = [
  {
    name: 'Basic Bivouac',
    icon: Tent,
    price: 'From 250 MAD per person',
    description:
      'Simple Berber tents with mattresses on the ground, shared pit toilet, no shower. Dinner cooked over open fire, communal sleeping area or small two-person tents. This is how desert camping worked for decades before glamping arrived. Authentic, stripped down, and cold at night. Bring your own sleeping bag for warmth.',
    bestFor: 'Backpackers, budget travelers, those who want the raw experience',
    bathrooms: 'Shared pit toilet behind a screen. No shower.',
    power: 'None. Bring a headlamp and portable charger.',
  },
  {
    name: 'Mid-Range Camp',
    icon: Flame,
    price: 'From 600 MAD per person',
    description:
      'Proper beds with blankets in individual tents, shared bathroom block with flushing toilets and sometimes lukewarm showers. Dinner served at communal tables, Berber drums around the fire. These camps run the widest quality range, so read recent reviews carefully. Some are excellent; others cut corners.',
    bestFor: 'Most travelers, couples, small groups wanting comfort without excess',
    bathrooms: 'Shared block with flush toilets. Showers vary by camp.',
    power: 'Common area may have charging via solar or generator.',
  },
  {
    name: 'Luxury Glamping',
    icon: Sparkles,
    price: 'From 2,500 MAD per person',
    description:
      'Full-size furnished tents with king beds, proper en-suite bathrooms with hot showers, Berber carpets, lantern lighting, and sometimes air conditioning. Multi-course dinner, private camel rides, sandboarding, quad biking, and spa treatments available. The best camps rival boutique hotels while sitting in the middle of the dunes.',
    bestFor: 'Couples on honeymoon, families wanting comfort, luxury travelers',
    bathrooms: 'Private en-suite with hot shower, flush toilet, running sink.',
    power: 'In-tent charging, sometimes Wi-Fi in common area.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const desertLocations = [
  {
    name: 'Erg Chebbi (Merzouga)',
    icon: Sun,
    image: '/images/hero-merzouga.webp',
    duneHeight: 'Up to 150 meters',
    distanceFromMarrakech: '8-10 hours by road',
    description:
      'Morocco\'s most accessible major dune field. Erg Chebbi covers roughly 50km north-south and 5-10km east-west, with dunes reaching 150 meters. The town of Merzouga sits right at the dune edge, so you can walk from your hotel into the sand. Dozens of camps operate here across every budget tier. The infrastructure is mature: paved roads, ATMs in Merzouga, and regular transport from Fes, Marrakech, and Ouarzazate.',
    pros: ['Easy access from Merzouga town', 'Widest range of camps and budgets', 'Tall dunes (up to 150m)', 'Nearby Khamlia gnawa music village'],
    cons: ['Can feel crowded at sunrise viewpoints in peak season', 'More commercialized than Chigaga', 'Long drive from Marrakech (8-10 hrs)'],
    bestCamps: 'Luxury: Merzouga Luxury Desert Camp, Kam Kam Dunes. Mid-range: Sahara Stars Camp, Camel Trek Bivouac. Budget: Berber Tents Merzouga.',
  },
  {
    name: 'Erg Chigaga (M\'Hamid)',
    icon: Wind,
    image: '/images/hero-sahara-sunrise.webp',
    duneHeight: 'Up to 300 meters',
    distanceFromMarrakech: '9-11 hours by road + 2 hours by 4x4',
    description:
      'Morocco\'s largest dune field, stretching 40km long and 15km wide, with dunes towering up to 300 meters. Reaching Chigaga requires a 4x4 journey of 50-60km from M\'Hamid across flat desert terrain. This remoteness filters out casual visitors. Fewer camps operate here, and the sense of isolation is profound. At night, zero light pollution makes the Milky Way visible in startling detail.',
    pros: ['Truly remote and uncrowded', 'Largest dunes in Morocco (up to 300m)', 'Best stargazing in the country', 'Feels like real Sahara expedition'],
    cons: ['Requires 4x4 transfer (from 500 MAD extra)', 'Fewer camp choices', 'Zero phone signal', 'Harder for short trips'],
    bestCamps: 'Luxury: Erg Chigaga Luxury Desert Camp, Desert Camps Morocco. Mid-range: Bivouac Chigaga, Nomad Life Camp.',
  },
  {
    name: 'Agafay Desert (near Marrakech)',
    icon: Mountain,
    image: '/images/hero-desert.webp',
    duneHeight: 'No dunes (rocky plateau)',
    distanceFromMarrakech: '40 minutes',
    description:
      'A barren, rocky plateau 30km southwest of Marrakech with Atlas Mountain views. Agafay is not a sand desert. There are no dunes. What it offers is convenience: 40 minutes from Marrakech, reliable luxury camps, full phone signal, and easy access. Several high-end camps here compete with each other on design, dining, and infinity pools. Good as a quick overnight escape from Marrakech, but do not expect the Sahara experience.',
    pros: ['40 minutes from Marrakech', 'Full phone signal and 4G', 'Atlas Mountain views', 'Pool and spa at luxury camps'],
    cons: ['Not a real sand desert, no dunes', 'Does not feel like Sahara', 'Pricey for what is essentially a rocky field', 'Tourist-oriented'],
    bestCamps: 'Luxury: Scarabeo Camp, Inara Camp, La Pause. Mid-range: Agafay Desert Camp, Terre des Etoiles.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMP EXPERIENCE TIMELINE
   ═══════════════════════════════════════════════════════════════ */

const experienceTimeline = [
  {
    time: '3:00 - 4:00 PM',
    title: 'Arrive & Mount Camels',
    icon: MapPin,
    description:
      'Most camps start the experience mid-afternoon. At Erg Chebbi, you meet your camel handler at the dune edge near Merzouga. At Chigaga, the 4x4 drops you at the camp or at a camel meeting point. The camel ride to camp takes 45 minutes to 1.5 hours depending on the camp\'s location in the dunes.',
  },
  {
    time: '5:30 - 6:30 PM',
    title: 'Sunset on the Dunes',
    icon: Sun,
    description:
      'Your guide leads you to a high dune with panoramic views. The light shifts from gold to copper to pink as the sun drops. This is the most photographed moment of the trip. Bring your phone fully charged. Some camps offer sandboarding on the way back down.',
  },
  {
    time: '7:00 - 9:00 PM',
    title: 'Dinner & Berber Music',
    icon: Music,
    description:
      'Back at camp, dinner is served in a communal tent or under the stars. A typical meal includes Berber soup (harira), tagine with vegetables and chicken or lamb, couscous, fresh bread, and fruit. Staff bring out bendir drums and sing Amazigh songs around the campfire. Guests are welcome to join in.',
  },
  {
    time: '9:00 - 11:00 PM',
    title: 'Stargazing',
    icon: Moon,
    description:
      'The Sahara has some of the darkest skies on Earth, especially at Erg Chigaga where light pollution is nonexistent. The Milky Way arcs overhead in visible detail. Some luxury camps provide telescopes and guided stargazing sessions. At budget camps, just lie on a dune and look up. No app or equipment needed.',
  },
  {
    time: '5:30 - 6:30 AM',
    title: 'Sunrise Wake-Up',
    icon: Camera,
    description:
      'Staff knock on your tent around 5:30 AM. The pre-dawn walk up the nearest tall dune takes 10-15 minutes in soft sand. Watching the first light hit the dune crests, turning them from blue-grey to orange-gold, is the single best visual of any Morocco trip. Mornings in the desert are cold, so bring a fleece.',
  },
  {
    time: '7:00 - 9:00 AM',
    title: 'Breakfast & Departure',
    icon: Clock,
    description:
      'Breakfast is typically Moroccan crepes (msemen), bread, jam, cheese, eggs, and mint tea. After breakfast, you ride the camels back out or take a 4x4. Most groups depart camp by 9:00 AM. The whole experience runs roughly 18 hours from arrival to departure.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING ESSENTIALS
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  { item: 'Warm layers (fleece, down jacket)', reason: 'Desert nights drop to 0-5°C in winter, 10-15°C in shoulder season' },
  { item: 'Headlamp or flashlight', reason: 'Camps have limited lighting, and dune walks happen in the dark' },
  { item: 'Buff or scarf', reason: 'Covers face during wind and sand, doubles as sun protection' },
  { item: 'Sealed plastic bags', reason: 'Protect phone, camera, and electronics from sand infiltration' },
  { item: 'Portable charger', reason: 'Budget and mid-range camps have no in-tent power' },
  { item: 'Closed-toe shoes and flip-flops', reason: 'Shoes for camel ride, flip-flops for around camp' },
  { item: 'Sunscreen and sunglasses', reason: 'Reflected UV off sand is intense, even in winter' },
  { item: 'Toiletries and wet wipes', reason: 'Basic camps have no shower; wet wipes are your best friend' },
  { item: 'Cash in small bills', reason: 'Tips for camel handlers (from 20-50 MAD) and camp staff' },
  { item: 'Minimal luggage', reason: 'Only bring an overnight bag; leave main luggage in your hotel or vehicle' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CAMPS BY BUDGET
   ═══════════════════════════════════════════════════════════════ */

const bestCamps = [
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi',
    tier: 'Luxury',
    price: 'From 3,500 MAD per person',
    rating: '4.8/5',
    description: 'King-size beds, en-suite hot showers, multi-course dinners, private camel rides, sandboarding. One of the highest-rated luxury camps in the dunes. The tents have Berber carpets and lanterns. Staff-to-guest ratio keeps service personal.',
  },
  {
    name: 'Kam Kam Dunes',
    location: 'Erg Chebbi',
    tier: 'Luxury',
    price: 'From 4,000 MAD per person',
    rating: '4.9/5',
    description: 'Consistently ranked among Morocco\'s best desert camps. Each tent has a private terrace facing the dunes. Bathrooms are fully tiled with rain showers. Food is outstanding. They run a smaller camp (12 tents max) so it never feels crowded.',
  },
  {
    name: 'Scarabeo Camp',
    location: 'Agafay',
    tier: 'Luxury',
    price: 'From 2,800 MAD per person',
    rating: '4.7/5',
    description: 'Architecturally designed tents with Atlas Mountain views and a pool. Only 40 minutes from Marrakech. Great food, attentive staff, and a real sense of design. Not a Sahara experience, but the most stylish desert-adjacent camp in Morocco.',
  },
  {
    name: 'Erg Chigaga Luxury Desert Camp',
    location: 'Erg Chigaga',
    tier: 'Luxury',
    price: 'From 5,000 MAD per person',
    rating: '4.8/5',
    description: 'The most remote luxury camp in Morocco. Reached only by 4x4 across open desert. En-suite tents, fine dining under the stars, guided dune walks, and absolute silence. The stargazing here surpasses anything at Erg Chebbi.',
  },
  {
    name: 'Sahara Stars Camp',
    location: 'Erg Chebbi',
    tier: 'Mid-range',
    price: 'From 800 MAD per person',
    rating: '4.5/5',
    description: 'Solid mid-range option with proper beds, shared but clean bathroom block, good tagine dinner, and organized sunrise hike. The communal fire and drum session is lively. Price includes camel ride, dinner, and breakfast.',
  },
  {
    name: 'Bivouac Chigaga',
    location: 'Erg Chigaga',
    tier: 'Mid-range',
    price: 'From 900 MAD per person',
    rating: '4.4/5',
    description: 'Simple but well-maintained camp deep in the Chigaga dunes. Individual tents with real beds, shared bathrooms, and solid Berber cooking. The remote location means you will likely be the only guests. 4x4 transfer included from M\'Hamid.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL INFO
   ═══════════════════════════════════════════════════════════════ */

const seasonalInfo = [
  { season: 'Oct - Nov', label: 'Peak', dayTemp: '28-32°C', nightTemp: '12-18°C', notes: 'Best overall window. Warm days, cool nights, clear skies. Book camps 2-3 weeks ahead.' },
  { season: 'Mar - Apr', label: 'Peak', dayTemp: '25-30°C', nightTemp: '10-16°C', notes: 'Second-best window. Occasional sandstorms in March. April is more stable.' },
  { season: 'Dec - Feb', label: 'Cool', dayTemp: '18-22°C', nightTemp: '0-8°C', notes: 'Cold nights require serious warm layers. Fewer crowds. Some budget camps close.' },
  { season: 'May - Sep', label: 'Hot', dayTemp: '38-50°C', nightTemp: '22-30°C', notes: 'Dangerously hot June-August. Most camps close or limit operations. Avoid unless you handle extreme heat well.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDesertCampingPage() {
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
            backgroundImage: 'url(/images/hero-desert-glamping.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Desert Camping Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Tent className="w-4 h-4" />
            Desert Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Desert Camping in Morocco:
            <br className="hidden md:block" /> Sahara Camps &amp; Glamping Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From basic bivouacs under the stars to luxury tents with en-suite showers.
            Everything you need to book the right Sahara camp for your budget and expectations.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Truth About Desert Camping in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Spending a night in the Sahara is one of the most searched activities for Morocco travel,
                and the experience delivers. Riding a camel into golden dunes, eating tagine under a sky
                packed with stars, waking to watch sunrise paint the sand orange -- it stays with you. But
                the range of camp quality in Morocco is enormous, and marketing photos often misrepresent
                the reality. A &quot;luxury camp&quot; on one booking site might mean a mattress on the
                ground with a shared pit toilet.
              </p>
              <p>
                This guide breaks down exactly what to expect at each price tier, compares the three main
                desert destinations, and names specific camps worth booking. Prices listed are for the
                2025-2026 season and include dinner and breakfast unless stated otherwise. Seasonal pricing
                can change, so confirm directly with the camp before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Camp Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Three Types of Desert Camp
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Budget, mid-range, and luxury deliver very different experiences. Know what you are paying for.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campTypes.map((camp) => (
              <div key={camp.name} className="card-moroccan p-6">
                <camp.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {camp.name}
                </h3>
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-3">{camp.price}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{camp.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <Users className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Best for:</strong> {camp.bestFor}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <Droplets className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Bathrooms:</strong> {camp.bathrooms}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[var(--text-secondary)]">
                    <Flame className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Power:</strong> {camp.power}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Desert Locations Compared ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Erg Chebbi vs Erg Chigaga vs Agafay
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three distinct destinations, three completely different experiences. Choose based on your time, budget, and what matters most to you.
          </p>

          <div className="space-y-12">
            {desertLocations.map((loc) => (
              <div key={loc.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <img src={loc.image} alt={`${loc.name} desert landscape in Morocco`} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      <loc.icon className="w-3.5 h-3.5" />
                      {loc.duneHeight}
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-6">
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] mb-3">{loc.distanceFromMarrakech} from Marrakech</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{loc.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Pros</h4>
                        {loc.pros.map((pro) => (
                          <div key={pro} className="flex items-start gap-1.5 text-sm text-[var(--text-secondary)] mb-1">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-green-600" />
                            {pro}
                          </div>
                        ))}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Cons</h4>
                        {loc.cons.map((con) => (
                          <div key={con} className="flex items-start gap-1.5 text-sm text-[var(--text-secondary)] mb-1">
                            <Info className="w-3.5 h-3.5 mt-0.5 shrink-0 text-red-500" />
                            {con}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                      <p className="text-xs text-[var(--text-secondary)]">
                        <strong>Recommended camps:</strong> {loc.bestCamps}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Camp Experience Timeline ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What a Desert Camp Night Looks Like
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A typical overnight desert camp experience runs from mid-afternoon to mid-morning the next day. Here is the timeline, hour by hour.
          </p>

          <div className="space-y-6">
            {experienceTimeline.map((step, idx) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white shrink-0">
                    <step.icon className="w-5 h-5" />
                  </div>
                  {idx < experienceTimeline.length - 1 && (
                    <div className="w-0.5 h-full bg-[var(--color-accent)]/20 mt-2" />
                  )}
                </div>
                <div className="card-moroccan p-5 flex-1 mb-0">
                  <p className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wide mb-1">{step.time}</p>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Camps by Budget ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Desert Camps in Morocco (2026)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real camps with consistent reviews, named so you can look them up. Prices are per person for one night including dinner and breakfast. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bestCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {camp.name}
                  </h3>
                  <span className="flex items-center gap-1 text-sm text-[var(--color-gold)] font-semibold shrink-0">
                    <Star className="w-3.5 h-3.5 fill-current" /> {camp.rating}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {camp.location}</span>
                  <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">{camp.tier}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {camp.price}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{camp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Camp Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light. You only need an overnight bag for the camp. Leave your main luggage in your hotel or vehicle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingEssentials.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{item.item}</p>
                  <p className="text-xs text-[var(--text-muted)]">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for Desert Camping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing matters more in the Sahara than almost anywhere else in Morocco. The difference between October and July is the difference between a magical night and a dangerous one.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]">
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Season</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Status</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Day</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Night</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Notes</th>
                </tr>
              </thead>
              <tbody>
                {seasonalInfo.map((s) => (
                  <tr key={s.season} className="border-b border-[var(--border-primary)]">
                    <td className="p-3 font-semibold text-[var(--text-primary)]">{s.season}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        s.label === 'Peak' ? 'bg-green-100 text-green-700' :
                        s.label === 'Cool' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {s.label}
                      </span>
                    </td>
                    <td className="p-3 text-[var(--text-secondary)]">{s.dayTemp}</td>
                    <td className="p-3 text-[var(--text-secondary)]">{s.nightTemp}</td>
                    <td className="p-3 text-[var(--text-secondary)]">{s.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Practical Realities (Bathrooms, Signal, Sand) ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Realities Nobody Mentions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The stuff that matters but gets left out of glossy marketing photos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <Droplets className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Bathrooms &amp; Showers
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget camps: a hole in the ground behind a fabric screen. Mid-range: shared flush toilet block,
                showers sometimes available (lukewarm on a good day). Luxury: private en-suite with hot water.
                The bathroom situation is the single biggest quality-of-life difference between tiers. If this
                matters to you, spend more. Confirm bathroom details directly with the camp before booking.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <Wind className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Sandstorms
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most common in March and April. A mild sandstorm means reduced visibility, gritty air, and
                sand in every crevice of your belongings. A serious storm means you stay in your tent with
                everything sealed. Camps are built to handle moderate storms. Staff will delay your departure
                if needed. Keep electronics in sealed bags and accept that sand will follow you home.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <Globe className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Phone Signal &amp; Wi-Fi
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Erg Chebbi: weak Maroc Telecom signal near Merzouga. WhatsApp messages work; video calls do not.
                Erg Chigaga: zero signal, full stop. Agafay: full 4G, no issues. Some luxury camps advertise
                Wi-Fi via satellite, but it is slow and drops frequently. Plan to be offline for 18-24 hours.
                Download maps, entertainment, and anything you need before reaching camp.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <Thermometer className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Temperature Swings
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Sahara has extreme temperature variation. A 35°C afternoon can become a 5°C night. In
                December and January, nighttime temperatures near Erg Chebbi drop close to freezing. Budget
                camps provide blankets, but they may not be enough. Bring a fleece, a warm hat, and consider
                thermal base layers for winter trips. The pre-dawn sunrise walk is the coldest part.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <Music className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Berber Music &amp; Culture
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most camps include an evening drum session around the campfire. Staff play bendir (frame drums)
                and sing Amazigh songs from the region. At better camps, this is genuine and moving. At heavily
                commercial camps, it can feel performative. Near Merzouga, the village of Khamlia is home to
                Gnawa musicians descended from sub-Saharan Africans. Visit during the day for an authentic
                performance (from 50 MAD donation).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <Heart className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Camel Welfare
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The camel ride is the standard transport to desert camps. Reputable camps own their camels and
                treat them well. Warning signs: camels with visible sores, muzzles tied shut, or handlers
                beating animals. If you see this, report it to your booking agent and leave a detailed review.
                Shorter rides (under 90 minutes) are easier on the camels. Some luxury camps now offer 4x4
                transfers as an alternative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips That Save Money and Headaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Desert camps operate differently from hotels. Know the system before you book.
          </p>

          <div className="space-y-4">
            {[
              { title: 'Book direct when possible', text: 'Many camps have WhatsApp numbers and respond quickly. Booking direct avoids the 15-25% commission that platforms charge, which means you pay less or the camp earns more. Search the camp name plus "WhatsApp" or "direct booking."' },
              { title: 'Read reviews from the last 3 months', text: 'Desert camps change management, staffing, and quality frequently. A camp that was excellent in 2024 may have new owners in 2026. Sort reviews by "most recent" on Google Maps, TripAdvisor, and Booking.com.' },
              { title: 'Confirm exactly what is included', text: 'The standard package includes camel ride, dinner, accommodation, and breakfast. Extras that may cost more: sandboarding, quad biking, 4x4 transfers, and specific tent upgrades. Get it in writing via WhatsApp or email.' },
              { title: 'Avoid the cheapest Marrakech agency packages', text: 'Medina travel agencies sell 3-day Sahara tours from 800 MAD. At that price, the camp gets almost nothing and the experience reflects it. Budget at least 1,500 MAD for a 3-day tour from Marrakech that includes decent overnight accommodation.' },
              { title: 'Bring cash for tips', text: 'Camel handlers expect from 20-50 MAD per person. Camp staff who cook and serve appreciate from 20-50 MAD total. Guides who drive you from Marrakech expect from 100-200 MAD. None of these tips are mandatory, but they are standard practice and make up a significant part of workers\' income.' },
              { title: 'Check cancellation policy', text: 'Desert weather is unpredictable. Sandstorms can delay departures. Ask about the camp\'s policy for weather-related changes before you book. Most reputable camps will reschedule or refund if conditions are genuinely dangerous.' },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Sahara Desert Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-sahara-sunrise.webp', alt: 'Sunrise over the sand dunes of Erg Chebbi near Merzouga, Morocco', label: 'Erg Chebbi Sunrise' },
              { src: '/images/hero-sahara-camp.webp', alt: 'Traditional Berber desert camp with tents among Sahara dunes', label: 'Desert Bivouac Camp' },
              { src: '/images/art-desert-stargazing.webp', alt: 'Stargazing over Sahara desert with Milky Way visible above dunes', label: 'Sahara Stargazing' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are desert camp bathrooms actually usable?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Depends on the tier. Basic bivouacs have a pit toilet behind a screen, no shower. Mid-range
                camps offer shared flush toilets and sometimes lukewarm showers. Luxury camps like Kam Kam Dunes
                and Merzouga Luxury Desert Camp provide private en-suite bathrooms with hot showers, flushing
                toilets, and running sinks. Always confirm bathroom details directly with the camp.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for desert camping?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                October through April. The sweet spots are October-November and March-April, with warm days
                (25-30°C) and cool nights (5-15°C). December-January nights drop near freezing. Avoid June
                through August: daytime temperatures reach 45-50°C and most camps close or reduce operations.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is there phone signal in the Sahara?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Erg Chebbi (Merzouga): weak Maroc Telecom signal, enough for WhatsApp messages. Erg Chigaga:
                zero signal. Agafay: full 4G. Some luxury camps have satellite Wi-Fi, but it is slow. Plan
                to be offline for 18-24 hours and download everything you need before arriving.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a desert camp night cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget bivouacs start from 250 MAD per person. Mid-range camps with proper beds run from 600-1,200
                MAD per person. Luxury glamping costs from 2,500-8,000 MAD per person per night. All tiers
                typically include camel ride, dinner, and breakfast. Transport from Marrakech adds from 400-800
                MAD for shared transfers. Seasonal pricing can change.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I choose Erg Chebbi or Erg Chigaga?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Erg Chebbi is easier to reach, has more camp options, and suits shorter trips. Erg Chigaga
                requires a 4x4 journey, is far more remote, and feels truly wild with dunes up to 300 meters.
                Choose Chebbi for convenience and variety. Choose Chigaga for isolation and the rawest Sahara
                experience available in Morocco.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What happens during a sandstorm?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                You stay inside your tent with openings sealed. Sand gets into everything regardless. Camps
                are built to withstand moderate storms, and staff monitor conditions. Severe storms are rare
                but can delay departure by a few hours. Bring a face covering, keep electronics in sealed bags,
                and know that sand will be in your belongings for weeks afterward.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Agafay a real desert?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No. Agafay is a rocky, barren plateau 40 minutes from Marrakech. It has no sand dunes. The
                advantage is proximity, easy access, and reliable luxury camps with pools and Atlas Mountain
                views. If you want actual sand dunes, you must go to Erg Chebbi or Erg Chigaga. Agafay works
                well as a quick overnight escape from Marrakech, but it is not the Sahara.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I do a desert camp trip with children?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, but choose your camp carefully. Luxury camps in Agafay or Erg Chebbi work best for families.
                Most camps accept children from age 4 for camel rides. The 8-10 hour drive to Merzouga is tough
                for small kids. Agafay is the easiest option since it is only 40 minutes from Marrakech. Many
                mid-range and luxury camps offer family tents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Music className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Amazigh heritage, traditions, music, and village experiences across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/ouarzazate" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Ouarzazate Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Gateway to the Sahara. Kasbahs, film studios, and the road to Merzouga.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-photography-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Photography Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Best locations, golden hour tips, and camera settings for Sahara dune shots.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete packing guide for Morocco, including desert-specific essentials.
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
            Ready to Sleep Under Sahara Stars?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From a budget bivouac to a luxury glamping tent with hot showers and fine dining,
            the right desert camp turns a night in the sand into one of your best travel memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ouarzazate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Ouarzazate &amp; the Desert Road
            </Link>
            <Link
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Read the Budget Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
