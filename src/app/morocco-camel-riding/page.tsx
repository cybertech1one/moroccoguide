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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Sun,
  Moon,
  Compass,
  Camera,
  Thermometer,
  Heart,
  Tent,
  Mountain,
  Footprints,
  Sunrise,
  Shield,
  MessageCircleQuestion,
  CalendarDays,
  Shirt,
  Eye,
  Sparkles,
  BookOpen,
  Timer,
  Layers,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-camel-riding`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Camel Riding Guide 2026 | Best Rides, Prices & Ethical Tips',
  description:
    'Complete guide to camel riding in Morocco. Compare Merzouga, Zagora, Agafay Desert & Essaouira beach rides. Sunrise vs sunset treks, overnight camps, what to wear, ethical operators, pricing from 150 MAD, photography tips, and physical preparation.',
  keywords: [
    'camel riding Morocco',
    'Morocco camel ride',
    'camel trek Merzouga',
    'camel ride Sahara',
    'Zagora camel trek',
    'Agafay desert camel ride',
    'Essaouira beach camel ride',
    'sunrise camel ride Morocco',
    'sunset camel ride Sahara',
    'overnight desert camp Morocco',
    'dromedary ride Morocco',
    'ethical camel riding Morocco',
    'camel ride prices Morocco 2026',
    'Sahara desert camel experience',
    'multi-day camel trek Morocco',
    'Morocco desert camp camel',
    'camel riding tips Morocco',
    'what to wear camel riding Morocco',
  ],
  openGraph: {
    title: 'Morocco Camel Riding Guide 2026 | Best Rides, Prices & Ethical Tips',
    description:
      'Compare Merzouga, Zagora, Agafay & Essaouira camel rides. Sunrise and sunset treks, overnight desert camps, ethical operator advice, pricing from 150 MAD, packing lists, and photography tips for the Sahara.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-camel-caravan-sahara.webp`,
        width: 1200,
        height: 630,
        alt: 'Camel caravan crossing golden sand dunes in the Moroccan Sahara at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Camel Riding Guide 2026 | Sahara Rides & Desert Camps',
    description:
      'Merzouga, Zagora, Agafay & Essaouira camel rides compared. Pricing from 150 MAD, ethical operators, overnight camps, sunrise treks, and what to wear.',
    images: [`${BASE_URL}/images/hero-camel-caravan-sahara.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How much does a camel ride cost in Morocco?',
    a: 'Short rides of 30 minutes to 1 hour start from 150 MAD per person near Marrakech or Essaouira. A 1.5-hour sunset trek in Merzouga costs from 250 MAD. Overnight desert camp packages with camel ride, dinner, and breakfast start from 500 MAD. Multi-day treks range from 1,500 to 4,000 MAD per day depending on the level of comfort. Seasonal pricing can change during peak months like December and Easter.',
  },
  {
    q: 'Is camel riding in Morocco ethical?',
    a: 'It depends entirely on the operator. Ethical operators limit riding time to 1.5 hours per session, keep group sizes under 8, never overload camels, provide adequate food and water, and rest animals during midday heat. Ask to see where the camels are kept. Healthy camels have clear eyes, smooth fur without sores, and walk without limping. Avoid operators who beat animals or use muzzles. Reputable agencies welcome questions about animal care.',
  },
  {
    q: 'What should I wear for a camel ride in Morocco?',
    a: 'Wear long trousers -- not shorts -- to protect your inner legs from chafing against the saddle. Choose closed-toe shoes or sturdy sandals with heel straps. Bring a lightweight scarf or shesh (Tuareg-style headwrap) for sun and sand protection. Layer clothing because desert temperatures drop sharply after sunset. Avoid skirts, flip-flops, and anything bright white that reflects sand glare.',
  },
  {
    q: 'Which is better for camel riding: Merzouga or Zagora?',
    a: 'Merzouga has taller dunes (Erg Chebbi, up to 150 meters), a more photogenic landscape, and a wider range of camp options from basic to ultra-luxury. Zagora offers a flatter, rockier terrain that suits travelers with less time since it is 2 hours closer to Marrakech than Merzouga. Both offer sunrise and sunset rides. Most first-time visitors prefer Merzouga for the classic towering dune experience.',
  },
  {
    q: 'How long is a typical camel ride in Morocco?',
    a: 'The most popular option is a 1 to 1.5-hour sunset ride to a desert camp. Short rides near Agafay or Essaouira last 30 minutes to 1 hour. Half-day treks run 3 to 4 hours. Full-day treks cover 5 to 7 hours of riding. Multi-day expeditions average 4 to 5 hours of riding per day with breaks and camp stops. First-timers do best with 1 to 1.5 hours to gauge comfort before committing to longer rides.',
  },
  {
    q: 'Can children do camel rides in Morocco?',
    a: 'Yes. Most operators accept children aged 4 and older. Younger children ride on the same camel as a parent, sitting in front. Children aged 6-12 can usually ride solo on a calm, experienced camel led by a handler. Shorter rides of 30 minutes to 1 hour work best for kids. Bring sunscreen, hats, and water. Avoid midday rides with small children as desert heat intensifies quickly.',
  },
  {
    q: 'Do I need to book camel rides in advance?',
    a: 'For Merzouga and Zagora overnight packages, book at least 2 to 3 days ahead, especially during October to April high season. Short rides in Agafay or Essaouira can often be arranged same-day through your hotel or a local agency. Multi-day treks require minimum 1 week advance booking. During Christmas, New Year, and Easter weeks, book 2 to 4 weeks ahead as camps sell out.',
  },
  {
    q: 'Is camel riding physically difficult?',
    a: 'Camel riding requires moderate core strength and balance. The mount and dismount are the trickiest parts -- camels stand up rear-first, pitching you forward. Hold the front handle firmly and lean back during this process. After 45 minutes, inner thigh soreness is normal. No prior experience is needed for rides under 2 hours. If you have back or knee issues, discuss this with the operator beforehand as some offer padded saddles or shorter routes.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Camel Riding Guide 2026',
  description:
    'Complete guide to camel riding experiences in Morocco covering Merzouga, Zagora, Agafay Desert and Essaouira beach rides, pricing, ethical operators, what to wear, and overnight desert camp options.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-camel-caravan-sahara.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Camel Riding Guide', item: PAGE_URL },
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
   DATA: TOP CAMEL RIDING DESTINATIONS
   ================================================================ */

const destinations = [
  {
    name: 'Merzouga (Erg Chebbi)',
    icon: Mountain,
    image: '/images/hero-merzouga.webp',
    terrain: 'Towering golden dunes up to 150 meters',
    travelTime: '9-10 hours from Marrakech, 5 hours from Fes',
    bestFor: 'The iconic Sahara dune experience, overnight camps, astrophotography',
    rides: [
      { type: 'Sunset ride to camp', duration: '1-1.5 hours', price: 'From 250 MAD' },
      { type: 'Sunrise ride from camp', duration: '45 min-1 hour', price: 'Included in overnight package' },
      { type: 'Overnight camp package', duration: '1 night', price: 'From 500 MAD (basic) / from 1,500 MAD (luxury)' },
      { type: 'Multi-day trek (2-3 days)', duration: '2-3 days', price: 'From 2,500 MAD per person' },
    ],
    highlights:
      'Erg Chebbi is Morocco\'s most spectacular dune field. The sand shifts from gold at midday to deep orange at sunset and rose-pink at dawn. Camps range from simple Berber tents with shared facilities to full-service glamping with private bathrooms, hot showers, and candlelit dining under the stars. The ride from the parking area to most camps takes about 45 minutes on camelback.',
  },
  {
    name: 'Zagora (Draa Valley)',
    icon: Compass,
    image: '/images/hero-desert.webp',
    terrain: 'Flat stony desert (hammada) with low dunes and palm oases',
    travelTime: '6-7 hours from Marrakech',
    bestFor: 'Shorter desert trips, Draa Valley scenery, calmer riding terrain',
    rides: [
      { type: 'Sunset ride', duration: '1-1.5 hours', price: 'From 200 MAD' },
      { type: 'Overnight camp package', duration: '1 night', price: 'From 400 MAD' },
      { type: 'Two-day Sahara circuit', duration: '2 days', price: 'From 1,800 MAD per person' },
    ],
    highlights:
      'Zagora marks the northern gateway to the Sahara. The famous road sign reads "Tombouctou 52 Jours" -- a reminder that caravan routes once linked this town to Timbuktu. The terrain here is flatter and rockier than Merzouga, making for a steadier ride that suits nervous first-timers. The Draa Valley oasis with its million palm trees is a striking contrast to the surrounding desert.',
  },
  {
    name: 'Agafay Desert',
    icon: Sun,
    image: '/images/hero-buggy-desert.webp',
    terrain: 'Rocky, barren desert plateau with Atlas Mountain views',
    travelTime: '40 minutes from Marrakech',
    bestFor: 'Day trips from Marrakech, sunset rides, glamping without the long drive',
    rides: [
      { type: 'Short ride', duration: '30 min', price: 'From 150 MAD' },
      { type: 'Sunset ride with tea', duration: '1-1.5 hours', price: 'From 300 MAD' },
      { type: 'Overnight glamping + ride', duration: '1 night', price: 'From 800 MAD' },
    ],
    highlights:
      'Agafay is not technically the Sahara -- it is a stony desert plateau 40 minutes south of Marrakech. There are no towering sand dunes here, but the stark, moon-like landscape backed by the snow-capped Atlas Mountains creates a dramatic setting. It is the best option for travelers short on time who want a desert camel ride without the 9-hour drive to Merzouga. Luxury glamping camps here rival any in Morocco.',
  },
  {
    name: 'Essaouira Beach',
    icon: Footprints,
    image: '/images/hero-sahara-sunrise.webp',
    terrain: 'Wide sandy Atlantic beach and coastal dunes',
    travelTime: '2.5-3 hours from Marrakech',
    bestFor: 'Beach camel rides, families, combining with Essaouira sightseeing',
    rides: [
      { type: 'Beach ride', duration: '1 hour', price: 'From 200 MAD' },
      { type: 'Extended coastal trek', duration: '2-3 hours', price: 'From 400 MAD' },
      { type: 'Sunset beach ride', duration: '1.5 hours', price: 'From 350 MAD' },
    ],
    highlights:
      'Riding a camel along the Atlantic coast is a completely different experience from the Sahara. The hard-packed sand at low tide allows for a smoother ride, and the ocean breeze keeps temperatures comfortable year-round. The wide beach south of Essaouira stretches for kilometers with almost no one else around. It is a strong choice for families with young children or travelers who prefer cooler conditions.',
  },
];

/* ================================================================
   DATA: SUNRISE VS SUNSET COMPARISON
   ================================================================ */

const timeComparison = [
  {
    time: 'Sunrise Ride',
    icon: Sunrise,
    when: '5:30-7:00 AM (varies by season)',
    temperature: 'Cool -- often below 10°C in winter',
    light: 'Soft pink-to-gold light on dunes, long shadows, misty horizon',
    crowd: 'Very few people; most camps offer private sunrise rides',
    mood: 'Quiet, meditative, and serene. The desert is completely still.',
    bestFor: 'Photographers, early risers, those wanting solitude on the dunes',
    tip: 'Bundle up. Desert mornings are cold even in summer. Bring gloves from October to March.',
  },
  {
    time: 'Sunset Ride',
    icon: Sun,
    when: '4:00-6:30 PM (varies by season)',
    temperature: 'Warm to hot -- 25-40°C depending on month',
    light: 'Deep orange and amber. Dunes glow like molten gold in the last hour.',
    crowd: 'Popular -- expect other groups on the same route near major camps',
    mood: 'Dramatic, social, celebratory. Golden hour photography at its peak.',
    bestFor: 'First-timers, families, groups, anyone wanting the classic postcard shot',
    tip: 'Bring water and sunglasses. Even at sunset, sand reflects intense light and heat.',
  },
];

/* ================================================================
   DATA: WHAT TO WEAR
   ================================================================ */

const whatToWear = [
  { item: 'Long trousers (lightweight)', icon: Shirt, reason: 'Protects inner thighs from saddle chafing. Cotton or linen works best.' },
  { item: 'Closed-toe shoes or sturdy sandals', icon: Footprints, reason: 'Sand is scorching hot in afternoon. You will walk short stretches. Avoid flip-flops.' },
  { item: 'Headscarf or shesh (Tuareg wrap)', icon: Layers, reason: 'Blocks sun and sand from face and neck. Your guide can show you how to tie it.' },
  { item: 'Sunglasses with secure strap', icon: Eye, reason: 'Sand glare is harsh. A strap prevents losing them when the camel stands up.' },
  { item: 'Light long-sleeved shirt', icon: Shield, reason: 'Sun protection during the day. Layer over a t-shirt for warmth after sunset.' },
  { item: 'Warm fleece or jacket (for overnight)', icon: Thermometer, reason: 'Desert temperatures can drop to 5°C after dark, even in spring.' },
  { item: 'Buff or bandana', icon: ShieldCheck, reason: 'Pull it over your nose and mouth if wind kicks up sand. Common during spring winds.' },
];

/* ================================================================
   DATA: DURATION OPTIONS
   ================================================================ */

const durationOptions = [
  {
    duration: '30 Minutes',
    icon: Timer,
    price: 'From 150 MAD',
    location: 'Agafay, Essaouira, Marrakech outskirts',
    bestFor: 'Quick introduction, families with small children, tight schedules',
    description: 'A short loop ride that gives you the experience of mounting, riding, and dismounting a camel. Enough for photos and a feel for the animal. No deep desert immersion.',
  },
  {
    duration: '1-1.5 Hours',
    icon: Clock,
    price: 'From 250 MAD',
    location: 'Merzouga, Zagora, Agafay, Essaouira',
    bestFor: 'First-timers, the classic sunset or sunrise ride, leading into a camp stay',
    description: 'The most popular format. Ride through dunes or along the beach at golden hour. Long enough to settle into the rhythm of the camel but short enough to avoid soreness. This is the standard ride included in overnight camp packages.',
  },
  {
    duration: '3-4 Hours (Half Day)',
    icon: Compass,
    price: 'From 500 MAD',
    location: 'Merzouga, Zagora, M\'Hamid',
    bestFor: 'Experienced riders, deeper desert exploration, nomad camp visits',
    description: 'Covers significantly more terrain. Includes a break for tea at a nomad camp or oasis. You get far enough from the main camps to feel genuine remoteness. Some soreness is normal for first-timers at this length.',
  },
  {
    duration: '2-3 Day Trek',
    icon: Tent,
    price: 'From 2,500 MAD per person',
    location: 'Merzouga to remote camps, Zagora to M\'Hamid, Draa Valley circuit',
    bestFor: 'Adventure travelers, those wanting a caravan-style desert crossing',
    description: 'Sleep in a different camp each night. Ride 4-5 hours per day with lunch and rest stops. Meals cooked over fire by Berber guides. You reach areas of the Sahara that day-trippers never see. Moderate physical fitness required.',
  },
  {
    duration: '5-7 Day Expedition',
    icon: Mountain,
    price: 'From 4,000 MAD per person per day',
    location: 'Deep Sahara routes from M\'Hamid or Merzouga',
    bestFor: 'Serious adventurers, documentary filmmakers, off-grid enthusiasts',
    description: 'Full caravan-style expedition following historic trade routes. Support vehicles carry supplies while you ride. Camps set up fresh each evening. Requires good physical condition. Available October through April only. Book at least 4 weeks in advance.',
  },
];

/* ================================================================
   DATA: ETHICAL RIDING CHECKLIST
   ================================================================ */

const ethicalChecklist = [
  { check: 'Camels are not muzzled', detail: 'A muzzle prevents a camel from eating, drinking, and regulating body temperature. Ethical operators never muzzle.' },
  { check: 'Maximum 1.5 hours per riding session', detail: 'Longer rides should include rest breaks. Camels carrying riders non-stop for 3+ hours shows poor welfare standards.' },
  { check: 'Group size of 8 or fewer riders', detail: 'Large groups of 15-20 stress camels and handlers. Smaller groups mean calmer, better-cared-for animals.' },
  { check: 'Camels have access to water and food', detail: 'Look for water troughs and feed (hay, grain, or local grasses) at the starting point. Camels drink 30-50 liters per watering.' },
  { check: 'No visible sores, limping, or emaciation', detail: 'Check for raw patches under the saddle, swollen joints, or protruding ribs. A healthy dromedary has a firm, upright hump.' },
  { check: 'Handlers treat animals calmly', detail: 'Beating, kicking, or aggressive shouting at camels is a red flag. Good handlers use verbal cues and gentle taps.' },
  { check: 'Saddles are padded and properly fitted', detail: 'A bare wooden saddle causes pressure sores. Look for thick blankets or padding between the saddle frame and the animal.' },
  { check: 'Operator answers welfare questions openly', detail: 'Ask how many rides per day each camel does, where they rest, and who provides veterinary care. Evasive answers signal problems.' },
];

/* ================================================================
   DATA: PHOTOGRAPHY TIPS
   ================================================================ */

const photoTips = [
  { title: 'Shoot During Golden Hour', icon: Sunrise, tip: 'The 30 minutes before sunset and after sunrise produce the best dune light. Sand turns from gold to copper to deep red. Midday light is flat and washed out.' },
  { title: 'Protect Your Gear from Sand', icon: Shield, tip: 'Bring a ziplock bag for your phone or camera between shots. Fine Sahara sand infiltrates everything. Carry a lens cloth. Avoid changing camera lenses in the wind.' },
  { title: 'Use the Caravan Silhouette', icon: Users, tip: 'The most iconic desert photo is a camel caravan silhouetted against the dune ridge at sunset. Position yourself at the base of a dune and shoot upward toward the ridge line.' },
  { title: 'Capture the Scale of the Dunes', icon: Mountain, tip: 'Place a person or single camel against a massive dune to convey scale. Wide-angle lenses make dunes look smaller; a telephoto lens (70-200mm) compresses perspective and makes them look towering.' },
  { title: 'Night Sky Photography', icon: Moon, tip: 'The Sahara has some of the darkest skies on earth. Use a tripod, set ISO 3200-6400, aperture f/2.8, and exposure 15-25 seconds for Milky Way shots. Align a tent or camp fire in the foreground.' },
  { title: 'Ask Permission for Portraits', icon: Heart, tip: 'Berber guides and camp staff are generally happy to be photographed, but always ask first. A genuine portrait with the desert behind them is worth more than a candid you had to sneak.' },
];

/* ================================================================
   DATA: PRICE OVERVIEW
   ================================================================ */

const priceTiers = [
  { service: 'Short camel ride (30 min, Agafay)', price: 'From 150 MAD', note: 'Basic ride, photo stop' },
  { service: 'Beach camel ride (1 hour, Essaouira)', price: 'From 200 MAD', note: 'Along the Atlantic coast' },
  { service: 'Sunset ride (1-1.5 hrs, Merzouga)', price: 'From 250 MAD', note: 'Ride to camp or return' },
  { service: 'Overnight camp (basic tent)', price: 'From 500 MAD', note: 'Includes ride, dinner, breakfast' },
  { service: 'Overnight camp (luxury glamping)', price: 'From 1,500 MAD', note: 'Private tent, hot shower, full board' },
  { service: 'Half-day trek (3-4 hours)', price: 'From 500 MAD', note: 'Deeper desert, tea at nomad camp' },
  { service: 'Full-day trek (5-7 hours)', price: 'From 800 MAD', note: 'Lunch included, remote terrain' },
  { service: 'Multi-day expedition (per day)', price: 'From 2,500 MAD', note: 'Full board, guide, support vehicle' },
  { service: 'Private sunrise/sunset ride', price: 'From 400 MAD', note: 'Solo or couple, no group' },
  { service: 'Tip for camel handler', price: 'From 50 MAD', note: 'Expected and appreciated' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoCamelRidingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-camel-caravan-sahara.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Camel Riding Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Desert Adventure &amp; Wildlife
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Camel Riding
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From one-hour sunset rides across Saharan dunes to multi-day caravan treks
            following ancient trade routes -- the complete guide to camel riding in Morocco
            with honest pricing from 150 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            The Original Desert Transport, Now Your Most Memorable Ride
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              For over a thousand years, dromedary camels carried salt, gold, spices, and
              people across the Sahara on routes that connected Morocco to Timbuktu and
              beyond. Those trade caravans shaped the cities, cultures, and economies of
              North Africa. Today, the same animals carry travelers into the dunes for
              something far less commercial and far more personal: the chance to experience
              the desert the way it was meant to be crossed.
            </p>
            <p>
              Morocco offers more variety in camel riding than almost any country on earth.
              You can ride across the towering golden dunes of Erg Chebbi near Merzouga, trek
              through the flat stony hammada near Zagora, loop through the rocky moonscape of
              Agafay within sight of the Atlas Mountains, or ride along the windswept Atlantic
              beaches near Essaouira. Each location delivers a distinct landscape, pace, and
              atmosphere.
            </p>
            <p>
              This guide covers every practical detail: which destination suits your schedule,
              what to wear, how to choose an operator that treats its animals well, what the
              ride actually feels like, and how much you should expect to pay. All prices are
              listed in Moroccan Dirham (MAD) and reflect 2026 rates. Seasonal pricing can
              change during peak tourist periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── About the Dromedary ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Know Your Mount: The Dromedary Camel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                One Hump, Not Two
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s camels are dromedaries (Camelus dromedarius) with a single hump.
                The two-humped Bactrian camel lives in Central Asia. The dromedary&apos;s hump
                stores fat -- not water -- which the animal metabolizes for energy and hydration
                during long treks. A healthy hump stands firm and upright. A floppy or leaning
                hump indicates poor nutrition.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Built for the Desert
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dromedaries can go 7-10 days without water and then drink up to 100 liters in
                10 minutes. Their wide, padded feet spread their weight across soft sand like
                natural snowshoes. Double rows of eyelashes and closeable nostrils protect
                against sandstorms. They can carry 150-200 kg at a walking pace of 5 km/h for
                hours without tiring.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Personality and Temperament
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Camels have strong individual personalities. Some are calm and docile; others
                are stubborn or grumpy, especially during the mating season (winter months).
                They groan, grumble, and sometimes spit, but biting is rare with domesticated
                animals. Your guide will match you with a suitable camel based on your size
                and experience level.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                The Riding Gait
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A camel walks by moving both legs on the same side simultaneously, creating a
                distinctive side-to-side sway that earns them the nickname &quot;ships of the
                desert.&quot; This rocking motion feels strange for the first 10 minutes. Relax
                your hips, keep your back straight, and let your body follow the rhythm. Most
                riders find it comfortable within 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Destinations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Camel Riding Destinations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four distinct landscapes, four different riding experiences. Choose based on
            your available time, budget, and the scenery you want.
          </p>

          <div className="space-y-12">
            {destinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="relative h-64 lg:h-auto lg:col-span-2">
                      <img
                        src={dest.image}
                        alt={`Camel riding landscape at ${dest.name} in Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <DestIcon className="w-5 h-5 text-white" />
                        <span className="text-white font-bold text-lg">{dest.name}</span>
                      </div>
                    </div>
                    <div className="p-6 lg:col-span-3">
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Compass className="w-3 h-3 text-[var(--color-accent)]" />
                          {dest.terrain}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                          {dest.travelTime}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.highlights}</p>
                      <p className="text-xs text-[var(--text-muted)] mb-4">
                        <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                        <span className="font-semibold">Best for:</span> {dest.bestFor}
                      </p>
                      <div className="border-t border-[var(--border-primary)] pt-4">
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">
                          Ride Options &amp; Prices
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {dest.rides.map((ride) => (
                            <div key={ride.type} className="flex items-start gap-2 text-xs">
                              <CheckCircle className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                              <div>
                                <span className="font-semibold text-[var(--text-primary)]">{ride.type}</span>
                                <span className="text-[var(--text-muted)]"> -- {ride.duration} -- {ride.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sunrise vs Sunset ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sunrise Ride vs. Sunset Ride
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both are spectacular. The right choice depends on your priorities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {timeComparison.map((tc) => {
              const TimeIcon = tc.icon;
              return (
                <div key={tc.time} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TimeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tc.time}
                    </h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">When:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tc.when}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Temperature:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tc.temperature}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Light:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tc.light}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Crowd level:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tc.crowd}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Mood:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tc.mood}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Best for:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tc.bestFor}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mt-4">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {tc.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Duration Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Duration Options: 30 Minutes to Multi-Day
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Camel rides in Morocco range from a quick introduction to a week-long expedition.
            Choose the length that matches your fitness level and appetite for adventure.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {durationOptions.map((opt) => {
              const OptIcon = opt.icon;
              return (
                <div key={opt.duration} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <OptIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {opt.duration}
                        </h3>
                        <span className="text-sm font-semibold text-[var(--color-accent)]">{opt.price}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{opt.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                          {opt.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-[var(--color-gold)]" />
                          {opt.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Overnight Desert Camps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Overnight Desert Camps
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
            <p>
              The overnight camp experience is what most travelers remember years later. The
              standard format: ride a camel from the trailhead to camp at sunset (45 minutes
              to 1.5 hours), watch the sun drop behind the dunes, eat a traditional Berber
              dinner by lantern light, listen to live drumming and Gnawa music around a fire,
              sleep under a sky with more stars than you have ever seen, then wake for a
              sunrise ride back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Basic Berber Camp
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">From 500 MAD per person</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Simple fabric tents with mattresses on the ground, shared bathroom facilities
                (basic toilets), communal dining tent. Dinner is tagine or couscous cooked
                over fire. The experience is authentic and stripped-back. Bring a headlamp,
                warm layers, and earplugs. These camps suit budget travelers and those who
                want the raw desert experience.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mid-Range Camp
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">From 800 MAD per person</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Larger tents with real beds, bedding, and sometimes electricity (solar or
                generator). Private or semi-private bathroom facilities. Multi-course dinner
                with salads, tagine, fruit, and mint tea. Some camps offer sandboarding and
                dune walks. A good balance between comfort and authenticity. The most popular
                tier for international travelers.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Luxury Glamping
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">From 1,500 MAD per person</p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Large canvas tents with king beds, private en-suite bathrooms with hot showers,
                electricity and charging points, designer interiors with Moroccan textiles and
                lanterns. Multi-course dinner with wine. Some luxury camps have heated plunge
                pools and spa treatments. The desert experience without sacrificing comfort.
                Book well in advance for peak season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Wear ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shirt className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Wear for a Camel Ride
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right clothing makes the difference between a comfortable ride and a miserable one.
          </p>

          <div className="space-y-4">
            {whatToWear.map((w) => {
              const WearIcon = w.icon;
              return (
                <div key={w.item} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                    <WearIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {w.item}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{w.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Ethical Riding ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Choosing an Ethical Operator
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Animal welfare varies enormously between operators. Use this checklist to
            identify operators that treat their camels well.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ethicalChecklist.map((item) => (
              <div key={item.check} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.check}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Red Flags to Walk Away From
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Muzzled camels. Visible sores under saddles. Emaciated animals with collapsed humps.
                  Handlers who beat or kick the animals. Groups of 15+ riders on a single trek.
                  Operators who refuse to answer questions about animal care. Very low prices
                  (under 100 MAD for a desert ride) often indicate corners cut on animal welfare.
                  If something looks wrong, choose a different operator -- there are plenty of
                  ethical options at every major riding location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Tips for the Desert
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is one of the most photogenic environments on earth. These tips
            will help you capture it properly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoTips.map((pt) => {
              const PTIcon = pt.icon;
              return (
                <div key={pt.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <PTIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{pt.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Physical Preparation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Physical Preparation &amp; What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mounting &amp; Dismounting
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The camel kneels for you to climb on. Hold the front handle (or the saddle
                frame) firmly with both hands. When the camel stands, it rises rear-first,
                pitching you forward sharply, then front-up, pushing you back. Lean back
                during the first lurch and forward during the second. The process takes about
                5 seconds and is the most dramatic part of the ride. Your guide will walk you
                through it.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Soreness &amp; Comfort
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Inner thigh muscles do most of the work stabilizing you in the saddle. After
                45 minutes, expect mild soreness. After 2+ hours, the soreness becomes
                significant if you are not used to riding. Wearing long trousers prevents
                chafing. Padded cycling shorts under your trousers help on longer rides.
                Stretch your legs during any dismount breaks.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Heat &amp; Hydration
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Summer afternoon temperatures in the Sahara regularly exceed 45°C. All rides
                should be scheduled for early morning or late afternoon. Carry at least 1.5
                liters of water per person for a 1-hour ride, more for longer treks. Signs of
                heat exhaustion -- dizziness, nausea, headache -- mean you need shade, water,
                and rest immediately. Guides carry emergency supplies.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Pre-Existing Conditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If you have chronic back pain, sciatica, or recent knee surgery, discuss this
                with your operator before booking. Some offer wider, more padded saddles or
                shorter custom routes. Pregnant travelers should avoid camel rides due to the
                jolting motion. Anyone with severe motion sickness may struggle with the
                swaying gait -- take medication 30 minutes before if prone to nausea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <CalendarDays className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time of Year for Camel Riding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Peak Season: October -- April
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Daytime temperatures of 18-28°C make riding comfortable all day. Nights drop
                to 5-10°C, cold enough for a campfire to feel essential. This is the busiest
                period and prices are highest. Book overnight camps at least a week ahead.
                December, January, and February offer the clearest skies for stargazing.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Shoulder: May &amp; September
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Warm but manageable. Daytime highs of 30-36°C. Fewer crowds and lower prices.
                Rides should be limited to early morning and late afternoon. Camps are
                available with less advance booking needed. A good compromise between weather
                and value.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Off-Season: June -- August
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Extreme heat of 40-50°C. Only sunrise rides and post-sunset rides are safe.
                Some operators reduce schedules or close entirely. If you must ride in summer,
                start before 7:00 AM and carry extra water. Prices are lowest and camps are
                nearly empty. Essaouira beach rides remain comfortable year-round due to
                coastal breezes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Riding Prices in Morocco (2026)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All prices are per person. Seasonal pricing can change during peak tourist
            months (December, Easter, and summer for coastal rides).
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Service</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTiers.map((tier, i) => (
                    <tr key={tier.service} className={i % 2 === 0 ? '' : 'bg-[var(--surface-muted)]/50'}>
                      <td className="p-4 text-[var(--text-secondary)]">{tier.service}</td>
                      <td className="p-4 font-semibold text-[var(--color-accent)] whitespace-nowrap">{tier.price}</td>
                      <td className="p-4 text-[var(--text-muted)] text-xs">{tier.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Camel Riding in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-camel-sunset.webp"
                alt="Camel silhouette against a golden Sahara sunset with dramatic dune ridges"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sunset Ride, Merzouga</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-camel-caravan.webp"
                alt="Line of camels and riders crossing sand dunes in a traditional desert caravan formation"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Desert Caravan, Erg Chebbi</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-camp.webp"
                alt="Desert camp with traditional Berber tents under a star-filled Sahara sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Overnight Desert Camp</p>
            </div>
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
            Answers to the questions travelers ask most about camel riding in Morocco.
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

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3e22]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Ride Into the Sahara?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Browse our curated desert tours with ethical operators, transparent pricing,
            and camps rated by real travelers. Sunset rides, overnight camps, and multi-day
            treks -- all bookable with free cancellation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/morocco-desert-tours"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#A0522D] rounded-full font-bold hover:bg-white/90 transition-colors"
            >
              Explore Desert Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-desert-camping"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-colors"
            >
              View Desert Camps
              <Tent className="w-4 h-4" />
            </Link>
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
                title: 'Sahara Desert Guide',
                description: 'Everything about the Moroccan Sahara: geography, climate, routes, and travel logistics.',
                href: '/morocco-sahara-guide',
                icon: Compass,
              },
              {
                title: 'Desert Glamping',
                description: 'Luxury desert camps in Merzouga, Zagora, and Agafay reviewed and compared by comfort level.',
                href: '/morocco-desert-glamping',
                icon: Tent,
              },
              {
                title: 'Sahara Stargazing',
                description: 'Astronomy sites, best months, and gear for stargazing in the Moroccan desert.',
                href: '/morocco-sahara-stargazing',
                icon: Moon,
              },
              {
                title: 'Desert Adventures',
                description: 'Sandboarding, quad biking, 4x4 tours, and other desert activities beyond camel riding.',
                href: '/desert-adventures',
                icon: Mountain,
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

      {/* ── More Desert Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Desert &amp; Adventure Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-camel-trekking', title: 'Camel Trekking Deep Dive', desc: 'Extended guide to multi-day camel treks with route maps, packing lists, and operator reviews.' },
              { href: '/morocco-desert-tour', title: 'Desert Tour Planner', desc: 'Plan your full desert itinerary from Marrakech or Fes with day-by-day route options.' },
              { href: '/morocco-sahara-overnight', title: 'Sahara Overnight Guide', desc: 'What to expect from a night in the Sahara: camp life, stargazing, music, and meals.' },
              { href: '/morocco-desert-oasis', title: 'Desert Oasis Towns', desc: 'Explore Tinghir, Skoura, and other palm oasis towns along the desert route.' },
              { href: '/adventure', title: 'Adventure Travel Morocco', desc: 'Trekking, climbing, surfing, and outdoor activities across Morocco.' },
              { href: '/best-time', title: 'Best Time to Visit', desc: 'Month-by-month weather, crowd levels, and pricing to plan your perfect Morocco trip.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
