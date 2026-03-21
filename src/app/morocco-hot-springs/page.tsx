import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Navigation,
  Compass,
  Calendar,
  BookOpen,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Hot Springs & Thermal Baths in Morocco 2026 | Natural Spa Experiences',
  description:
    'Complete guide to Morocco\'s best hot springs and thermal baths. Visit Moulay Yacoub near Fes, Sidi Harazem, Abaynou near Guelmim, Lalla Haya near Figuig, and Fezouane near Berkane. Prices, health benefits, etiquette, and how to get there.',
  keywords: [
    'morocco hot springs',
    'thermal baths morocco',
    'natural springs morocco',
    'moulay yacoub hot springs',
    'sidi harazem thermal baths',
    'abaynou hot springs guelmim',
    'lalla haya figuig',
    'fezouane berkane hot springs',
    'morocco natural spa',
    'thermal water morocco',
    'hot springs near fes',
    'morocco wellness tourism',
    'sulfur springs morocco',
    'morocco geothermal springs',
    'healing waters morocco',
    'moroccan thermal spa',
    'best hot springs morocco 2026',
    'morocco balneotherapy',
    'thermal cure morocco',
    'morocco hydrotherapy',
  ],
  openGraph: {
    title: 'Hot Springs & Thermal Baths in Morocco 2026 | Natural Spa Experiences',
    description:
      'Discover Morocco\'s finest natural hot springs and thermal baths. From Moulay Yacoub\'s sulfur waters near Fes to Abaynou\'s desert oasis springs near Guelmim. Complete guide with prices, health benefits, and travel tips.',
    url: `${BASE_URL}/morocco-hot-springs`,
    images: [
      {
        url: `${BASE_URL}/images/hero-spa.webp`,
        width: 1200,
        height: 630,
        alt: 'Natural hot spring pool in Morocco surrounded by rocky terrain with steam rising from mineral-rich waters',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Springs & Thermal Baths in Morocco 2026',
    description:
      'Morocco\'s best natural hot springs: Moulay Yacoub, Sidi Harazem, Abaynou, Lalla Haya, Fezouane. Health benefits, prices, and practical tips for visiting thermal baths.',
    images: [`${BASE_URL}/images/hero-spa.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-hot-springs` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravelGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-hot-springs`,
  name: 'Hot Springs & Thermal Baths in Morocco 2026 | Natural Spa Experiences',
  description:
    'Complete guide to Morocco\'s best hot springs and thermal baths. Visit Moulay Yacoub, Sidi Harazem, Abaynou, Lalla Haya, and Fezouane. Prices, health benefits, etiquette, and travel directions.',
  url: `${BASE_URL}/morocco-hot-springs`,
  image: `${BASE_URL}/images/hero-spa.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-hot-springs`,
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
      { '@type': 'ListItem', position: 2, name: 'Hot Springs & Thermal Baths', item: `${BASE_URL}/morocco-hot-springs` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most famous hot spring in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moulay Yacoub, located about 20 km northwest of Fes, is Morocco\'s most famous hot spring. Its sulfur-rich thermal waters reach 54 degrees Celsius and have been used for therapeutic purposes since Roman times. A modern hydrotherapy center operates alongside the traditional public baths.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco\'s hot springs safe to visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco\'s established hot springs are safe for most visitors. The water quality is monitored at major sites like Moulay Yacoub and Sidi Harazem. However, people with heart conditions, pregnant women, and those with open wounds should consult a doctor before bathing in thermal waters. Limit sessions to 20-30 minutes and stay hydrated.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to visit hot springs in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices vary by location and facility. Public thermal baths cost from 10-30 MAD for entry. Modern hydrotherapy centers like the one at Moulay Yacoub charge from 100-300 MAD for sessions. Private thermal spa packages with treatments range from 300-800 MAD. Seasonal pricing applies during peak months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Moroccan hot springs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hot springs can be visited year-round, but autumn (September to November) and spring (March to May) offer the most comfortable weather for travel. Winter visits are particularly rewarding as the contrast between cold air and warm thermal waters enhances the experience. Summer can be extremely hot at desert locations like Abaynou and Figuig.',
      },
    },
    {
      '@type': 'Question',
      name: 'What health benefits do Moroccan thermal waters offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco\'s thermal waters contain minerals like sulfur, magnesium, calcium, and sodium bicarbonate. They are traditionally used to treat rheumatic conditions, skin ailments like eczema and psoriasis, respiratory issues, and musculoskeletal pain. The heat itself improves circulation and promotes muscle relaxation. Medical hydrotherapy treatments are prescribed by doctors at facilities like Moulay Yacoub.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Moulay Yacoub as a day trip from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Moulay Yacoub is only 20 km from Fes, about 30 minutes by car or grand taxi. Grand taxis depart from near Bab Boujeloud in Fes and cost from 15-20 MAD per person. You can easily spend a morning or afternoon at the thermal baths and return to Fes the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to a Moroccan hot spring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring a swimsuit or bathing clothes (modest dress is appreciated at public sites), a towel, flip-flops for wet surfaces, drinking water, sunscreen, and a change of dry clothes. At some natural springs, the sulfur content can discolor jewelry and swimwear, so leave valuables behind and bring old swimwear. Toiletries and snacks are sold at the larger sites.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP HOT SPRINGS
   ═══════════════════════════════════════════════════════════════ */

const hotSprings = [
  {
    name: 'Moulay Yacoub',
    region: 'Near Fes (20 km)',
    temperature: '54°C at source',
    minerals: 'Sulfur, sodium chloride, calcium, magnesium',
    icon: Thermometer,
    price: 'From 20 MAD (public baths) / From 150 MAD (hydrotherapy center)',
    description:
      'Morocco\'s most renowned thermal site, Moulay Yacoub sits in a steep valley northwest of Fes. The sulfur-rich waters emerge at 54 degrees Celsius from deep underground and have attracted bathers since Roman times. The town is built around the springs, with a traditional public bath area at the bottom of a long staircase and a modern hydrotherapy and spa center at the top. The water\'s high sulfur content gives it a distinctive smell but is credited with treating rheumatic conditions, skin ailments, and respiratory problems.',
    highlights: ['Modern hydrotherapy center with medical supervision', 'Traditional public baths at the valley floor', 'Prescribed thermal cures for chronic conditions', 'Easy day trip from Fes by grand taxi'],
    gettingThere: 'Grand taxis from Fes (near Bab Boujeloud) take 30 minutes and cost from 15-20 MAD per seat. You can also hire a private taxi for from 150 MAD round trip.',
    bestTime: 'Year-round. Mornings on weekdays are least crowded. Avoid Friday midday when locals visit after prayer.',
  },
  {
    name: 'Sidi Harazem',
    region: 'Near Fes (15 km)',
    temperature: '34°C',
    minerals: 'Magnesium, calcium bicarbonate, sodium',
    icon: Droplets,
    price: 'From 10 MAD (public pool) / From 100 MAD (thermal spa)',
    description:
      'Just east of Fes, Sidi Harazem is one of Morocco\'s most accessible thermal sites. The mineral water here is naturally carbonated and cooler than Moulay Yacoub, making it comfortable for longer soaks. The site has been a pilgrimage and bathing destination for centuries. Today it includes public pools, a thermal spa facility, gardens, and a bottled water plant. Sidi Harazem water is sold throughout Morocco and is considered among the country\'s best mineral waters. The atmosphere is relaxed and family-friendly, with picnic areas shaded by eucalyptus trees.',
    highlights: ['Family-friendly atmosphere with gardens and picnic areas', 'Famous bottled mineral water originates here', 'Cooler waters suitable for extended bathing', 'Affordable public pools alongside private thermal facilities'],
    gettingThere: 'Grand taxis from central Fes take 20 minutes and cost from 10-15 MAD per seat. Buses also run from Fes regularly.',
    bestTime: 'Spring and autumn for comfortable weather. Summer weekends can be very crowded with local families.',
  },
  {
    name: 'Abaynou',
    region: 'Near Guelmim (8 km)',
    temperature: '38°C',
    minerals: 'Sulfur, calcium, sodium bicarbonate',
    icon: Sparkles,
    price: 'From 10 MAD (public pools) / From 50 MAD (private bath)',
    description:
      'Located at the edge of the Sahara near Guelmim, the gateway to the desert, Abaynou is an oasis hot spring with a history stretching back centuries. The warm, sulfur-rich water feeds a series of pools surrounded by palm groves. Local Sahrawi and Amazigh communities have used these waters for generations to treat skin conditions and joint pain. The setting is remarkable: palm trees, arid hills, and the vast pre-Saharan landscape create an atmosphere unlike any other thermal site in Morocco. A basic guesthouse and cafes serve visitors, though facilities remain modest compared to northern hot springs.',
    highlights: ['Desert oasis setting with palm groves', 'Rich cultural connection to Sahrawi heritage', 'Affordable and uncrowded compared to northern sites', 'Can be combined with Guelmim camel market visit'],
    gettingThere: 'From Guelmim, take a petit taxi (from 20 MAD) or drive 8 km east. Guelmim is reached by CTM bus from Agadir (3 hours) or Tiznit (1 hour).',
    bestTime: 'October to April. Summer temperatures in the Guelmim area often exceed 40°C, making outdoor bathing uncomfortable.',
  },
  {
    name: 'Lalla Haya',
    region: 'Near Figuig (5 km)',
    temperature: '30°C',
    minerals: 'Calcium, magnesium, low sulfur',
    icon: Waves,
    price: 'From 10 MAD (public access)',
    description:
      'Tucked in the far eastern reaches of Morocco near the Algerian border, Lalla Haya is a hidden thermal spring near the oasis town of Figuig. The waters are warm rather than hot, with a gentle mineral composition that makes them suitable for long, relaxed soaks. The spring feeds into natural rock pools surrounded by date palms and the dramatic landscape of the high plateau. Figuig itself is one of Morocco\'s most remote and beautiful oasis towns, with ancient ksour (fortified villages), underground irrigation channels, and a timeless atmosphere. Visiting Lalla Haya means immersing yourself in a part of Morocco that few tourists ever reach.',
    highlights: ['One of Morocco\'s most remote and authentic thermal sites', 'Ancient oasis town of Figuig nearby with fortified ksour', 'Gentle warm water ideal for long, meditative soaks', 'Almost zero tourist infrastructure means total tranquility'],
    gettingThere: 'Figuig is accessible by bus from Oujda (6 hours) or by car via the N17. From Figuig, Lalla Haya is a short drive or a 30-minute walk.',
    bestTime: 'September to May. Summer is extremely hot in Figuig. Winter nights can be cold, but the warm springs offer a welcome contrast.',
  },
  {
    name: 'Fezouane',
    region: 'Near Berkane (25 km)',
    temperature: '40°C',
    minerals: 'Sulfur, chloride, sodium, iron',
    icon: Mountain,
    price: 'From 15 MAD (public bath) / From 80 MAD (private cabin)',
    description:
      'Nestled in the foothills of the Beni Snassen mountains in northeastern Morocco, Fezouane (also spelled Fezzouane) is a well-established thermal station with both public and private bathing facilities. The sulfurous waters emerge at around 40 degrees Celsius and have a strong mineral content, particularly iron, which gives the water a slight reddish tint. The site has been developed with changing rooms, private cabins, and a small hotel. The surrounding Beni Snassen mountains are scenic, with gorges, caves, and cedar forests, making Fezouane a good base for combining thermal bathing with mountain exploration.',
    highlights: ['Well-maintained facilities with private cabins', 'Iron-rich waters with distinctive mineral profile', 'Scenic Beni Snassen mountain backdrop', 'Combinable with Zegzel Gorge and Grotte du Chameau excursions'],
    gettingThere: 'From Berkane, take a grand taxi or drive south toward the Beni Snassen mountains (25 km, about 30 minutes). From Oujda, it is about 1 hour by car.',
    bestTime: 'Year-round, but spring is ideal when the mountains are green and wildflowers are blooming. The Beni Snassen area is cooler than the plains.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH BENEFITS
   ═══════════════════════════════════════════════════════════════ */

const healthBenefits = [
  {
    condition: 'Rheumatic & Joint Pain',
    icon: Heart,
    description: 'Thermal waters rich in sulfur and minerals reduce inflammation in joints and muscles. The heat increases blood flow to affected areas, easing stiffness. Moulay Yacoub and Fezouane are particularly recommended for rheumatic conditions.',
  },
  {
    condition: 'Skin Conditions',
    icon: Sparkles,
    description: 'Sulfur-rich waters have natural antibacterial and antifungal properties. Conditions like eczema, psoriasis, and dermatitis often improve after regular thermal bathing. Abaynou\'s waters are traditionally used by locals for skin healing.',
  },
  {
    condition: 'Respiratory Issues',
    icon: Droplets,
    description: 'Inhaling sulfur-rich steam from thermal waters can help clear congested airways. The thermal centers at Moulay Yacoub offer specific inhalation treatments for bronchitis and sinusitis under medical supervision.',
  },
  {
    condition: 'Stress & Fatigue',
    icon: Waves,
    description: 'Warm mineral water triggers the release of endorphins and relaxes the nervous system. The combination of heat, buoyancy, and natural setting creates a profoundly calming experience that reduces cortisol levels and improves sleep quality.',
  },
  {
    condition: 'Circulation',
    icon: Thermometer,
    description: 'Hot thermal water dilates blood vessels and improves peripheral circulation. This can benefit people with mild circulatory problems and Raynaud\'s syndrome. The mineral content further supports vascular health.',
  },
  {
    condition: 'Post-Injury Recovery',
    icon: ShieldCheck,
    description: 'Athletes and people recovering from injuries use thermal waters for rehabilitation. The buoyancy reduces weight on joints while the heat promotes tissue healing. Several Moroccan sports teams use Moulay Yacoub for recovery programs.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ETIQUETTE RULES
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Dress Modestly',
    icon: Users,
    description: 'At public hot springs, wear a swimsuit that provides reasonable coverage. Women should consider a one-piece or swim shirt and shorts. Many public baths have separate sections or hours for men and women.',
  },
  {
    rule: 'Respect Local Customs',
    icon: ShieldCheck,
    description: 'Some thermal sites have religious or cultural significance. Moulay Yacoub is named after a saint, and the atmosphere should be respectful. Follow any posted rules and be mindful of local sensibilities.',
  },
  {
    rule: 'Shower Before Entering',
    icon: Droplets,
    description: 'Rinse off before entering shared pools. This is both a hygiene practice and a courtesy to other bathers. Most public thermal baths have shower or rinse areas near the entrance.',
  },
  {
    rule: 'Limit Your Soak Time',
    icon: Clock,
    description: 'Do not stay in hot thermal water for more than 20-30 minutes at a time. Prolonged exposure can cause dizziness, dehydration, and a drop in blood pressure. Take breaks between soaks and drink water regularly.',
  },
  {
    rule: 'Keep the Water Clean',
    icon: Heart,
    description: 'Do not use soap, shampoo, or other products in the thermal pools. These contaminate the natural water and affect other bathers. Use soap only in designated shower areas away from the springs.',
  },
  {
    rule: 'Be Mindful of Others',
    icon: Star,
    description: 'Keep noise levels reasonable. Do not splash excessively. Give other bathers their space. Many people visit thermal baths for health reasons and value a calm, quiet environment.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Sparkles,
    conditions: 'Mild temperatures, green landscapes, wildflowers in mountain areas',
    recommendation: 'The best overall season. Comfortable travel weather, the mountains are lush, and springs are not overcrowded. Ideal for Fezouane and Sidi Harazem.',
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    conditions: 'Very hot across most of Morocco, especially in desert and eastern regions',
    recommendation: 'Avoid Abaynou and Lalla Haya in summer heat. Moulay Yacoub and Sidi Harazem remain manageable. Visit early morning or late afternoon to avoid peak heat.',
  },
  {
    season: 'Autumn (September - November)',
    icon: Mountain,
    conditions: 'Warm days, cool evenings, harvest season, fewer tourists',
    recommendation: 'Excellent for all hot springs. The weather is warm enough for outdoor bathing without being oppressive. Abaynou becomes accessible again after summer.',
  },
  {
    season: 'Winter (December - February)',
    icon: Waves,
    conditions: 'Cool to cold, occasional rain in the north, snow in the mountains',
    recommendation: 'The most atmospheric time to visit. The contrast of cold air and steaming hot water is unforgettable. Moulay Yacoub and Fezouane are especially rewarding in winter.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Public pool entry (basic sites)', price: 'From 10 MAD', note: 'Abaynou, Lalla Haya, basic public access' },
  { service: 'Public bath entry (established sites)', price: 'From 20 MAD', note: 'Moulay Yacoub public baths, Fezouane' },
  { service: 'Private cabin rental', price: 'From 50 MAD', note: 'Fezouane, Abaynou where available' },
  { service: 'Hydrotherapy session (supervised)', price: 'From 150 MAD', note: 'Moulay Yacoub hydrotherapy center' },
  { service: 'Thermal spa package', price: 'From 300 MAD', note: 'Includes multiple treatments, massage, access' },
  { service: 'Medical thermal cure (multi-day)', price: 'From 800 MAD', note: 'Moulay Yacoub prescribed program, per session block' },
  { service: 'Grand taxi from Fes to Moulay Yacoub', price: 'From 15 MAD', note: 'Per seat, shared taxi, 30 minutes' },
  { service: 'Grand taxi from Fes to Sidi Harazem', price: 'From 10 MAD', note: 'Per seat, shared taxi, 20 minutes' },
  { service: 'Bottled Sidi Harazem water (1.5L)', price: 'From 5 MAD', note: 'Available in shops and supermarkets nationwide' },
  { service: 'Overnight stay near hot springs', price: 'From 200 MAD', note: 'Basic hotel or guesthouse, double room' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHotSpringsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravelGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-spa.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Hot Springs &amp; Thermal Baths</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Thermometer className="w-4 h-4" />
            Natural Wellness
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Hot Springs &amp; Thermal Baths
            <br className="hidden md:block" /> in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From sulfur-rich waters at Moulay Yacoub to desert oasis springs at Abaynou,
            Morocco&apos;s thermal heritage spans centuries and landscapes. Your guide to
            healing waters across the kingdom.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Ancient Thermal Tradition
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits on a geologically active zone where the African and Eurasian tectonic
                plates meet. This geology has given the country dozens of natural hot springs, many
                of which have been used for bathing and healing since antiquity. The Romans built
                bathhouses at Moulay Yacoub and Sidi Harazem. The Amazigh peoples of the south
                have used springs like Abaynou for centuries. Today, these thermal sites attract
                both Moroccans seeking traditional cures and international visitors looking for
                natural wellness experiences.
              </p>
              <p>
                Unlike the hammam, which uses heated water piped into an enclosed bathhouse,
                hot springs deliver naturally heated mineral water straight from the earth. The
                mineral composition varies by location: sulfur-heavy waters at Moulay Yacoub,
                iron-rich flows at Fezouane, gentle calcium-magnesium springs at Lalla Haya.
                Each has its own character, its own landscape, and its own set of reputed
                health benefits.
              </p>
              <p>
                Visiting Morocco&apos;s hot springs also takes you beyond the usual tourist
                circuits. While Moulay Yacoub is an easy day trip from Fes, sites like Lalla
                Haya near Figuig and Abaynou near Guelmim offer encounters with remote oasis
                communities, Saharan landscapes, and a quieter, more contemplative Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hot Springs Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay at Morocco&apos;s thermal baths, from basic public access to supervised medical treatments.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing may apply during peak months and holidays.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Hot Springs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 5 Hot Springs in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s best natural thermal sites, from the well-known to the remote. Each offers a distinct bathing experience shaped by geology, culture, and landscape.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Water temperatures and prices may vary seasonally. Facilities at remote sites are basic.
          </p>

          <div className="space-y-10">
            {hotSprings.map((spring, index) => {
              const SpringIcon = spring.icon;
              return (
                <div key={spring.name} className="card-moroccan overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-[var(--color-accent)]">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {spring.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {spring.region}
                          </span>
                          <span className="flex items-center gap-1">
                            <SpringIcon className="w-3.5 h-3.5" />
                            {spring.temperature}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                      {spring.price}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">{spring.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                      {spring.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-sm text-[var(--text-muted)]">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Navigation className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-sm font-semibold text-[var(--color-accent)]">Getting There</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{spring.gettingThere}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="w-4 h-4 text-[var(--color-gold)]" />
                          <span className="text-sm font-semibold text-[var(--color-gold)]">Best Time to Visit</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{spring.bestTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Health Benefits ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health Benefits of Thermal Bathing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s thermal waters have been used medicinally for centuries. Here are the conditions most commonly treated at the country&apos;s hot springs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthBenefits.map((benefit) => {
              const BenefitIcon = benefit.icon;
              return (
                <div key={benefit.condition} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <BenefitIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {benefit.condition}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 max-w-3xl mx-auto">
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-gold)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Medical Disclaimer
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Thermal bathing is not a substitute for medical treatment. People with heart conditions,
                    high blood pressure, open wounds, or who are pregnant should consult a doctor before visiting
                    hot springs. Always limit sessions to 20-30 minutes and stay well hydrated.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s hot springs can be enjoyed year-round, but each season offers a different experience depending on the location.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalGuide.map((item) => {
              const SeasonIcon = item.icon;
              return (
                <div key={item.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.season}
                    </h3>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg mb-3">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Compass className="w-3 h-3 inline mr-1" />
                      {item.conditions}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.recommendation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Etiquette Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hot Spring Etiquette in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these guidelines to ensure a respectful and safe experience at Morocco&apos;s thermal baths.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {rule.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What to Bring
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Swimsuit (modest for public sites), towel, flip-flops, drinking water, sunscreen, and a
                change of dry clothes. Leave jewelry behind as sulfur waters can cause tarnishing. Bring old
                swimwear that you do not mind discoloring. At remote sites, bring your own food and snacks.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Safety Precautions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always test water temperature before fully immersing. Some natural springs can be scalding
                near the source. Do not drink thermal water unless it is specifically labeled as potable
                (like Sidi Harazem). Keep children supervised at all times near hot pools.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Navigation className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting Around
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Moulay Yacoub and Sidi Harazem are easily reached by grand taxi from Fes. For Abaynou,
                Lalla Haya, and Fezouane, a rental car gives the most flexibility. Public transport exists
                but schedules can be infrequent in remote areas. Always confirm return transport in advance.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Budget Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Public hot spring baths are among Morocco&apos;s most affordable experiences, with entry
                from 10 MAD at basic sites. To save on transport, share grand taxis with other travelers.
                Bring your own towel and supplies rather than renting. The cheapest overnight option near
                Moulay Yacoub is from 200 MAD for a basic double room.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                How Long to Spend
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A single hot spring visit typically takes 2-4 hours including travel, soaking, resting, and
                return. For Moulay Yacoub or Sidi Harazem from Fes, a half-day trip is sufficient. For remote
                sites like Lalla Haya or Abaynou, plan an overnight stay to justify the longer journey.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Families &amp; Children
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Sidi Harazem is the most family-friendly thermal site in Morocco, with gardens, picnic areas,
                and cooler waters. At hotter springs like Moulay Yacoub, young children should stay in the
                cooler pools only. Always supervise children closely near any thermal water source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mineral Composition Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mineral Composition by Spring
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each hot spring has a distinct mineral profile that determines its therapeutic properties and bathing character.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Spring</div>
              <div className="p-3 px-4">Temperature</div>
              <div className="p-3 px-4">Key Minerals</div>
              <div className="p-3 px-4">Best For</div>
            </div>
            <div className="grid grid-cols-4 gap-0 text-sm bg-white">
              <div className="p-3 px-4 font-medium text-[var(--text-primary)]">Moulay Yacoub</div>
              <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">54°C</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Sulfur, sodium chloride</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Rheumatism, skin, respiratory</div>
            </div>
            <div className="grid grid-cols-4 gap-0 text-sm bg-[var(--surface-muted)]">
              <div className="p-3 px-4 font-medium text-[var(--text-primary)]">Sidi Harazem</div>
              <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">34°C</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Magnesium, calcium bicarb</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Digestion, relaxation, families</div>
            </div>
            <div className="grid grid-cols-4 gap-0 text-sm bg-white">
              <div className="p-3 px-4 font-medium text-[var(--text-primary)]">Abaynou</div>
              <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">38°C</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Sulfur, sodium bicarbonate</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Skin conditions, joint pain</div>
            </div>
            <div className="grid grid-cols-4 gap-0 text-sm bg-[var(--surface-muted)]">
              <div className="p-3 px-4 font-medium text-[var(--text-primary)]">Lalla Haya</div>
              <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">30°C</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Calcium, magnesium, low sulfur</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Relaxation, gentle therapy</div>
            </div>
            <div className="grid grid-cols-4 gap-0 text-sm bg-white">
              <div className="p-3 px-4 font-medium text-[var(--text-primary)]">Fezouane</div>
              <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">40°C</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Sulfur, chloride, iron</div>
              <div className="p-3 px-4 text-[var(--text-muted)]">Rheumatism, circulation</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Combining with Other Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Combining Hot Springs with Other Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each thermal site sits in a region with its own attractions. Here is how to build a richer itinerary around your hot spring visit.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Moulay Yacoub + Fes Medina
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Spend the morning exploring the Fes medina, the world&apos;s largest car-free urban area, with its
                tanneries, madrasas, and medieval streets. After lunch, take a grand taxi to Moulay Yacoub for
                an afternoon soak. Return to Fes refreshed for a rooftop dinner overlooking the old city. This
                combination gives you Morocco&apos;s greatest cultural city and its most famous thermal experience
                in a single day.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                Full day itinerary: morning medina, afternoon thermal bath
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Fezouane + Beni Snassen Mountains
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Beni Snassen mountains offer hiking through cedar forests, the Zegzel Gorge, and the
                Grotte du Chameau (Camel Cave). Spend the morning hiking, then descend to Fezouane for a
                restorative thermal soak in the afternoon. The mountain air and mineral waters make for an
                excellent combination. Berkane, the nearest city, has comfortable hotels and restaurants.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                2-day trip recommended from Oujda or Nador
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Abaynou + Guelmim Camel Market
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Guelmim&apos;s Saturday camel market is one of southern Morocco&apos;s most distinctive cultural
                events. Saharan traders gather to buy and sell camels, livestock, and goods. Visit the market
                in the morning, then drive the short distance to Abaynou for a hot spring soak under the palm
                trees. Continue south toward the Sahara or return to Tiznit and the coast.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                Best on Saturdays for the camel market
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Lalla Haya + Figuig Oasis Exploration
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Figuig is a destination in its own right. This ancient oasis has seven ksour (fortified villages),
                underground water channels (khettaras), and more than 200,000 date palms. Spend a full day
                exploring the ksour and gardens, then visit Lalla Haya&apos;s warm springs in the late afternoon
                as the desert heat fades. Stay overnight in a local guesthouse for the full experience.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                2-3 day trip from Oujda, plan for remote travel
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the most famous hot spring in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moulay Yacoub, located about 20 km northwest of Fes, is Morocco&apos;s most famous hot spring.
                Its sulfur-rich thermal waters reach 54 degrees Celsius and have been used for therapeutic
                purposes since Roman times. A modern hydrotherapy center operates alongside the traditional
                public baths, and doctors prescribe multi-day thermal cure programs for chronic conditions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Morocco&apos;s hot springs safe to visit?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco&apos;s established hot springs are safe for most visitors. The water quality is
                monitored at major sites like Moulay Yacoub and Sidi Harazem. However, people with heart
                conditions, pregnant women, and those with open wounds should consult a doctor before bathing
                in thermal waters. Always limit sessions to 20-30 minutes and stay well hydrated throughout
                your visit.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to visit hot springs in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Prices vary by location and facility. Public thermal baths cost from 10-30 MAD for entry.
                Modern hydrotherapy centers like the one at Moulay Yacoub charge from 100-300 MAD for supervised
                sessions. Private thermal spa packages with massage and treatments range from 300-800 MAD.
                Seasonal pricing may apply during peak tourist months.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year to visit Moroccan hot springs?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Hot springs can be visited year-round, but autumn (September to November) and spring (March
                to May) offer the most comfortable weather for travel. Winter visits are particularly rewarding
                as the contrast between cold air and warm thermal waters enhances the experience. Summer can
                be extremely hot at desert locations like Abaynou and Figuig, so northern springs are preferable
                in that season.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What health benefits do Moroccan thermal waters offer?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s thermal waters contain minerals like sulfur, magnesium, calcium, and sodium
                bicarbonate. They are traditionally used to treat rheumatic conditions, skin ailments like
                eczema and psoriasis, respiratory issues, and musculoskeletal pain. The heat itself improves
                circulation and promotes muscle relaxation. Medical hydrotherapy treatments are prescribed by
                doctors at facilities like the Moulay Yacoub thermal center.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit Moulay Yacoub as a day trip from Fes?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Moulay Yacoub is only 20 km from Fes, about 30 minutes by car or grand taxi. Grand
                taxis depart from near Bab Boujeloud in Fes and cost from 15-20 MAD per person for a shared
                ride. You can easily spend a morning or afternoon at the thermal baths and return to Fes the
                same day. Sidi Harazem is even closer at 15 km, making both springs convenient day trips.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I bring to a Moroccan hot spring?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Bring a swimsuit or modest bathing clothes, a towel, flip-flops for wet surfaces, drinking
                water, sunscreen, and a change of dry clothes. The sulfur content at some springs can discolor
                jewelry and swimwear, so leave valuables behind and bring older swimwear. At remote sites like
                Lalla Haya and Abaynou, bring your own food and snacks as facilities are limited. Toiletries
                and basic supplies are sold at the larger sites like Moulay Yacoub and Sidi Harazem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Morocco&apos;s best spa experiences, from 50 MAD public hammams to luxury resort treatments.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Fes, the cultural capital nearest to Morocco&apos;s most famous hot springs at Moulay Yacoub and Sidi Harazem.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/wellness" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wellness &amp; Yoga Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s yoga retreats, meditation centers, and holistic wellness escapes across the country.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
