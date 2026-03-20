import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  Shield,
  ShieldCheck,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Compass,
  Heart,
  Leaf,
  Droplets,
  Recycle,
  Mountain,
  TreeDeciduous,
  Building,
  Train,
  HandHeart,
  Star,
  CircleAlert,
  Award,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Sustainable Travel Morocco 2026 | Eco-Friendly & Responsible Tourism Guide',
  description:
    'Complete guide to sustainable travel in Morocco for 2026. Eco-lodges, community-based tourism, responsible desert tours, water conservation, plastic-free tips, ethical animal encounters, green transport, and supporting local artisans.',
  keywords: [
    'sustainable travel Morocco',
    'eco-friendly Morocco',
    'responsible travel Morocco',
    'green tourism Morocco',
    'Morocco eco-lodges',
    'community-based tourism Morocco',
    'ethical travel Morocco',
    'Morocco environmental tourism',
    'Morocco responsible tourism',
    'plastic-free travel Morocco',
    'Morocco water conservation',
    'ethical animal encounters Morocco',
    'Morocco carbon offset',
    'green certifications Morocco',
    'Morocco sustainable transport',
    'Morocco local artisans',
    'responsible desert tourism Morocco',
  ],
  openGraph: {
    title: 'Sustainable Travel Morocco 2026 | Eco-Friendly & Responsible Tourism Guide',
    description:
      'Eco-lodges, community tourism, responsible desert tours, water conservation, plastic-free tips, ethical wildlife encounters, and green transport options for conscious travelers in Morocco.',
    url: `${BASE_URL}/morocco-sustainable-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Sustainable eco-lodge nestled in the Atlas Mountains of Morocco surrounded by green landscapes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainable Travel Morocco 2026 | Eco-Friendly Tourism Guide',
    description:
      'Eco-lodges, community tourism, desert responsibility, water conservation, plastic-free tips, ethical wildlife, and green transport for conscious travelers in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-sustainable-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-sustainable-travel`,
  name: 'Sustainable Travel Morocco 2026 | Eco-Friendly & Responsible Tourism Guide',
  description:
    'Comprehensive guide to sustainable and eco-friendly travel in Morocco for 2026, covering eco-lodges, community-based tourism, responsible desert tours, water conservation, plastic-free travel tips, ethical animal encounters, green transport, carbon offsetting, and green certifications.',
  url: `${BASE_URL}/morocco-sustainable-travel`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-sustainable-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Sustainable Travel Morocco', item: `${BASE_URL}/morocco-sustainable-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good destination for sustainable travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is increasingly recognized as a strong destination for sustainable travel. The country has invested heavily in renewable energy, including the Noor-Ouarzazate Solar Complex, one of the world\'s largest solar farms. Morocco offers a growing number of eco-lodges, community-based tourism initiatives in the Atlas Mountains and Sahara, and government-supported programs to protect national parks and biodiversity. Traditional Moroccan culture inherently aligns with sustainability through practices like communal cooking, water-conscious hammams, and locally sourced food markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best eco-lodges in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has excellent eco-lodges across the country. In the Atlas Mountains, Kasbah du Toubkal near Imlil uses solar power and funds local Amazigh community projects. In the Sahara, several desert camps near Merzouga operate on solar energy with composting toilets and locally sourced meals. The Ourika Valley near Marrakech hosts eco-retreats using permaculture gardens. Along the coast, Essaouira and Sidi Ifni have surf eco-lodges built with reclaimed materials. Prices range from 400 MAD to 2,000 MAD per night depending on the level of luxury.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I reduce plastic waste while traveling in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco banned single-use plastic bags in 2016, but plastic bottles remain common. Bring a reusable water bottle with a built-in filter or UV purifier since tap water is not recommended for drinking in most areas. Carry a reusable shopping bag for souk purchases. Choose restaurants that use ceramic plates and metal cutlery rather than disposable containers. Buy loose produce at local markets instead of pre-packaged food from supermarkets. Some eco-lodges and riads now offer filtered water refill stations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it ethical to ride camels in the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Camel trekking can be ethical when operators treat their animals well. Look for camps where camels are well-fed, have adequate rest between treks, show no signs of distress or injury, and are not overloaded with excessive gear. Responsible operators limit trek durations and keep group sizes small. Ask your tour provider about their animal welfare policies before booking. Avoid any operator who uses whips, chains, or forces visibly distressed animals to work. Walking alongside the camel for part of the journey reduces the animal\'s burden.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does community-based tourism work in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Community-based tourism (CBT) in Morocco involves staying with local families, eating home-cooked meals, and participating in daily activities like farming, bread-baking, or carpet-weaving. Revenue goes directly to the host family and village rather than to international hotel chains. Popular CBT destinations include Amazigh villages in the High Atlas, oasis communities along the Draa Valley, and fishing villages on the Atlantic coast. Organizations like the High Atlas Foundation and local cooperatives facilitate these experiences. Expect to pay from 200 to 500 MAD per night including meals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What sustainable transport options are available in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers several green transport choices. The Al Boraq high-speed train connects Tangier to Casablanca in just over two hours and is one of Africa\'s most modern rail services. The ONCF national rail network links major cities efficiently. CTM and Supratours buses cover routes trains do not reach. Within cities, Casablanca and Rabat have modern tram systems. Marrakech and Fes medinas are car-free, making walking the primary transport mode. Bicycle rentals are available in Marrakech, Essaouira, and other cities. Shared grand taxis reduce per-person emissions for intercity travel.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I support local artisans responsibly in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buy directly from artisan cooperatives rather than through intermediaries or large tourist shops. Women\'s argan oil cooperatives in the Souss region, carpet-weaving cooperatives in the Middle Atlas, and pottery workshops in Safi and Fes sell directly to visitors at fair prices. Look for fair-trade labels and cooperatives certified by the Moroccan government. Avoid mass-produced souvenirs labeled as handmade. Spending time watching artisans work and asking about their techniques shows respect and builds connection. Prices at cooperatives are typically fixed and fair, so haggling is not expected.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Morocco have any green certifications for tourism?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco participates in several green certification programs. The Green Key (Clef Verte) label is the most recognized, awarded to hotels and accommodations meeting strict environmental criteria including waste management, energy efficiency, and water conservation. The Moroccan tourism ministry also promotes the Qualite label for sustainable practices. Some properties carry international certifications like EarthCheck or Travelife. When booking, look for these labels on hotel websites or ask directly about their sustainability policies. The number of certified properties is growing each year as Morocco pushes toward its 2030 sustainability goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Morocco doing about water conservation for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Water scarcity is a real concern in Morocco, especially in southern and desert regions. Many eco-lodges and responsible hotels have installed low-flow fixtures, rainwater harvesting systems, and greywater recycling for gardens. As a traveler, take shorter showers, reuse hotel towels, and avoid baths where possible. During desert trips, use water sparingly and follow your guide\'s instructions. Traditional hammams use significantly less water than a typical Western bath and recycle heat efficiently. Some riads use drip irrigation for their gardens and source water from private wells.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I volunteer during my trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but choose volunteer opportunities carefully. Ethical volunteering should involve skilled work that locals cannot do themselves, or genuine skills transfer. Reputable organizations include the High Atlas Foundation (tree planting and community development), Moroccan Wildlife (conservation projects), and various beach cleanup initiatives along the coast. Avoid voluntourism programs that charge high fees with little going to communities, or orphanage tourism which can harm children. Short-term travelers can join organized beach cleanups, tree planting days, or contribute to cooperative projects. Always research the organization thoroughly before committing.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ECO-LODGES
   ═══════════════════════════════════════════════════════════════ */

const ecoLodges = [
  {
    region: 'Atlas Mountains',
    name: 'Mountain Eco-Retreats',
    description: 'Solar-powered kasbahs and guesthouses near Imlil and the Toubkal area. Many fund local Amazigh schools and health clinics. Expect organic gardens, spring water, and locally sourced meals. Prices start from 400 MAD per night.',
    features: ['Solar energy', 'Organic gardens', 'Community funding', 'Spring water'],
    icon: Mountain,
  },
  {
    region: 'Sahara Desert',
    name: 'Sustainable Desert Camps',
    description: 'Responsible bivouacs near Merzouga and Zagora using solar panels, composting toilets, and traditional Amazigh tent construction. Small group sizes minimize environmental impact on fragile desert ecosystems. Prices start from 600 MAD per night.',
    features: ['Solar panels', 'Composting toilets', 'Small groups', 'Traditional tents'],
    icon: Star,
  },
  {
    region: 'Ourika Valley',
    name: 'Permaculture Retreats',
    description: 'Eco-retreats just 30 kilometers from Marrakech featuring permaculture gardens, natural swimming pools, and workshops on traditional Moroccan agriculture. Many offer farm-to-table dining with zero-waste kitchens. Prices start from 500 MAD per night.',
    features: ['Permaculture', 'Natural pools', 'Farm-to-table', 'Zero-waste kitchen'],
    icon: TreeDeciduous,
  },
  {
    region: 'Atlantic Coast',
    name: 'Coastal Eco-Lodges',
    description: 'Surf and wellness lodges in Essaouira, Taghazout, and Sidi Ifni built with reclaimed materials and powered by wind energy. Many organize beach cleanups and support local fishing communities. Prices start from 350 MAD per night.',
    features: ['Wind energy', 'Reclaimed materials', 'Beach cleanups', 'Local partnerships'],
    icon: Globe,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMUNITY-BASED TOURISM
   ═══════════════════════════════════════════════════════════════ */

const communityTourism = [
  {
    title: 'Amazigh Village Homestays',
    description: 'Stay with Amazigh (Berber) families in the High Atlas and Middle Atlas mountains. Share home-cooked meals, learn traditional bread-baking, and experience daily village life. Revenue goes directly to the host family, funding education and infrastructure improvements.',
    icon: Users,
  },
  {
    title: 'Oasis Community Visits',
    description: 'Visit oasis communities along the Draa and Ziz Valleys where families have tended date palms and irrigation channels for centuries. Learn about traditional khettara water management systems and help with seasonal harvests.',
    icon: Droplets,
  },
  {
    title: 'Women\'s Cooperatives',
    description: 'Visit argan oil cooperatives in the Souss region, carpet-weaving cooperatives in the Middle Atlas, or embroidery cooperatives in Fes. These organizations empower women economically while preserving traditional crafts. Your purchases directly support female artisans.',
    icon: HandHeart,
  },
  {
    title: 'Fishing Village Experiences',
    description: 'Spend time in Atlantic coast fishing villages like Tafedna and Moulay Bousselham. Join fishermen at dawn, learn traditional net-mending, and enjoy the freshest possible seafood prepared by local families. Tourism income supplements fishing livelihoods.',
    icon: Compass,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESPONSIBLE DESERT TOURISM
   ═══════════════════════════════════════════════════════════════ */

const desertResponsibility = [
  { tip: 'Choose operators with small group sizes (8 or fewer travelers) to minimize footprint on fragile desert ecosystems.', icon: Users },
  { tip: 'Verify that camels are well-cared for: well-fed, rested between treks, and showing no signs of distress or injury.', icon: ShieldCheck },
  { tip: 'Carry all waste out of the desert. Leave no plastic, food scraps, or cigarette butts behind. Pack a small rubbish bag.', icon: Recycle },
  { tip: 'Use biodegradable soap and shampoo in desert camps. Chemical products contaminate scarce water sources.', icon: Droplets },
  { tip: 'Respect sand dune ecosystems. Stay on established paths where possible and avoid disturbing desert wildlife.', icon: Leaf },
  { tip: 'Support camps that employ local Amazigh guides and source food from nearby communities rather than trucking supplies from cities.', icon: Heart },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WATER CONSERVATION TIPS
   ═══════════════════════════════════════════════════════════════ */

const waterTips = [
  'Take shorter showers (under 5 minutes) especially in southern and desert regions where water is scarce.',
  'Reuse hotel towels and decline daily linen changes. Hang towels on the rack to signal reuse.',
  'Choose traditional hammams over baths. Hammams use significantly less water and recycle heat efficiently.',
  'Carry a reusable water bottle with a built-in filter to reduce plastic waste and conserve packaged water resources.',
  'Report any leaking taps or toilets in your accommodation to help properties reduce water waste.',
  'When visiting oases, be mindful of water usage and follow local customs around shared water resources.',
  'Support accommodations that use rainwater harvesting, greywater recycling, and drip irrigation.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PLASTIC-FREE TRAVEL TIPS
   ═══════════════════════════════════════════════════════════════ */

const plasticFreeTips = [
  { tip: 'Bring a reusable water bottle with a filter or UV purifier since tap water is not safe to drink in most areas.', icon: Droplets },
  { tip: 'Carry reusable shopping bags for souk purchases. Morocco banned single-use plastic bags in 2016.', icon: Recycle },
  { tip: 'Buy loose fruit, vegetables, and spices at local markets instead of pre-packaged supermarket goods.', icon: Leaf },
  { tip: 'Carry reusable cutlery and a metal straw for street food and drinks to avoid single-use plastics.', icon: CheckCircle },
  { tip: 'Choose restaurants that use ceramic plates and glassware rather than disposable takeaway containers.', icon: Building },
  { tip: 'Pack a bar of solid shampoo, conditioner, and soap instead of plastic travel-size bottles.', icon: Sparkles },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ETHICAL ANIMAL ENCOUNTERS
   ═══════════════════════════════════════════════════════════════ */

const animalEncounters = [
  {
    animal: 'Camels (Dromedaries)',
    ethical: 'Short, well-managed treks with rested, well-fed camels. Walk alongside for part of the journey. Operators who limit daily treks and provide shade and water for animals.',
    avoid: 'Operators who overload camels, use whips or chains, force visibly distressed animals to work, or run excessively long treks without rest.',
    icon: ShieldCheck,
  },
  {
    animal: 'Barbary Macaques',
    ethical: 'Observe wild macaques in their natural cedar forest habitat near Azrou and Ifrane in the Middle Atlas. Keep a safe distance and never feed them.',
    avoid: 'Roadside photo opportunities with chained or captive macaques. Feeding wild macaques human food which harms their health and alters natural behavior.',
    icon: TreeDeciduous,
  },
  {
    animal: 'Snakes (Jemaa el-Fnaa)',
    ethical: 'Observe from a distance without engaging. If you must photograph, tip the handler fairly (from 10-20 MAD) and move on quickly.',
    avoid: 'Handling snakes yourself or encouraging performers. Many of these cobras have been defanged or had their mouths sewn shut, which is harmful and cruel.',
    icon: CircleAlert,
  },
  {
    animal: 'Birds of Prey',
    ethical: 'Visit raptor rehabilitation centers that rescue and release injured birds. Some organizations near Marrakech offer educational visits.',
    avoid: 'Posing with captive hawks or eagles in tourist squares. These birds are often wild-caught, poorly treated, and cannot be released after captivity.',
    icon: Shield,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SUSTAINABLE TRANSPORT
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  {
    mode: 'Al Boraq High-Speed Train',
    description: 'Africa\'s first high-speed rail connects Tangier to Casablanca in 2 hours 10 minutes. Electrically powered, modern, and comfortable. Tickets start from 149 MAD second class.',
    co2: 'Lowest emissions per kilometer of any motorized transport in Morocco',
    icon: Train,
  },
  {
    mode: 'ONCF National Railway',
    description: 'The national rail network connects Tangier, Rabat, Casablanca, Marrakech, Fes, Meknes, and Oujda. Comfortable and affordable. Book at oncf.ma or at station ticket offices.',
    co2: 'Roughly 75% less CO2 per passenger than driving',
    icon: Train,
  },
  {
    mode: 'CTM & Supratours Buses',
    description: 'Modern, air-conditioned coaches serve routes trains do not reach, including Essaouira, Chefchaouen, and the Sahara. Reliable schedules and assigned seating. Book online or at bus stations.',
    co2: 'Roughly 50% less CO2 per passenger than a private car',
    icon: Compass,
  },
  {
    mode: 'City Trams (Casablanca & Rabat)',
    description: 'Both cities operate modern electric tram networks connecting major neighborhoods, train stations, and attractions. Affordable single tickets from 6 MAD. Clean and efficient.',
    co2: 'Zero direct emissions, powered by the national grid',
    icon: MapPin,
  },
  {
    mode: 'Walking & Cycling',
    description: 'Medinas in Fes and Marrakech are entirely car-free, making walking essential. Bicycle rentals available in Marrakech, Essaouira, Meknes, and other cities. Some eco-lodges provide bikes for guests.',
    co2: 'Zero emissions and the healthiest transport option',
    icon: Heart,
  },
  {
    mode: 'Shared Grand Taxis',
    description: 'Shared Mercedes taxis carry six passengers between cities and towns. Cheaper and more social than private hire. Wait at designated taxi stands for a full car or pay for empty seats to depart sooner.',
    co2: 'Shared occupancy reduces per-person emissions significantly',
    icon: Users,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GREEN CERTIFICATIONS
   ═══════════════════════════════════════════════════════════════ */

const greenCertifications = [
  {
    label: 'Green Key (Clef Verte)',
    description: 'The most recognized eco-label in Morocco, awarded to hotels and accommodations meeting strict environmental criteria including waste management, energy efficiency, water conservation, and staff training.',
    icon: Award,
  },
  {
    label: 'Qualite Morocco Label',
    description: 'Government-backed quality label that increasingly incorporates sustainability standards. Look for this certification at hotels, restaurants, and tour operators across the country.',
    icon: ShieldCheck,
  },
  {
    label: 'EarthCheck / Travelife',
    description: 'International certifications held by some premium Moroccan properties. These labels verify comprehensive environmental and social responsibility programs with regular third-party audits.',
    icon: Globe,
  },
  {
    label: 'Fair Trade Cooperatives',
    description: 'Cooperatives certified by fair trade organizations ensure artisans receive equitable pay. Look for the fair trade label when buying argan oil, carpets, ceramics, and other handcrafted goods.',
    icon: HandHeart,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CARBON OFFSETTING
   ═══════════════════════════════════════════════════════════════ */

const carbonTips = [
  'Calculate your flight emissions using tools like myclimate or Gold Standard before departure.',
  'Offset through verified programs that fund projects in Morocco, such as the High Atlas Foundation\'s tree planting initiative.',
  'Choose direct flights when possible, as takeoffs and landings produce the most emissions.',
  'Consider overland travel from Europe via ferry from Spain to Tangier to avoid flying entirely.',
  'Within Morocco, prioritize trains over domestic flights for intercity travel.',
  'Support accommodations that track and offset their own carbon footprints.',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/eco-tourism',
    title: 'Morocco Eco-Tourism Guide',
    description: 'Deep dive into eco-tourism destinations across Morocco, from mountain lodges to coastal nature reserves.',
    icon: Leaf,
  },
  {
    href: '/morocco-volunteering',
    title: 'Volunteering in Morocco',
    description: 'Ethical volunteer opportunities in community development, conservation, and education across the kingdom.',
    icon: HandHeart,
  },
  {
    href: '/national-parks',
    title: 'Morocco National Parks',
    description: 'Guide to Morocco\'s protected areas including Toubkal, Souss-Massa, Ifrane, and Talassemtane national parks.',
    icon: TreeDeciduous,
  },
  {
    href: '/wildlife',
    title: 'Morocco Wildlife Guide',
    description: 'Discover Morocco\'s biodiversity from Barbary macaques and flamingos to desert foxes and rare bird species.',
    icon: Mountain,
  },
  {
    href: '/camping',
    title: 'Camping in Morocco',
    description: 'Complete guide to camping in Morocco including wild camping rules, campsite reviews, and desert bivouacs.',
    icon: Compass,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSustainableTravelPage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Sustainable Travel Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Leaf className="w-4 h-4" />
            Eco-Friendly &amp; Responsible Tourism
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Sustainable Travel
            <br className="hidden md:block" /> in Morocco 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Eco-lodges, community-based tourism, responsible desert tours, water conservation,
            plastic-free travel, ethical wildlife encounters, and green transport for the conscious traveler.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Travel Morocco Without Leaving a Heavy Footprint
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a country of extraordinary natural beauty &mdash; from the snow-capped Atlas
                Mountains and ancient cedar forests to the golden Sahara dunes and rugged Atlantic
                coastline. Preserving these landscapes for future generations requires conscious choices
                from every traveler who visits.
              </p>
              <p>
                The good news is that sustainable travel in Morocco is not only possible but deeply
                rewarding. Traditional Moroccan culture already embraces many green principles: communal
                cooking minimizes waste, hammams conserve water through efficient heat recycling, and
                local souks have operated as zero-packaging markets for centuries. By choosing eco-lodges,
                supporting artisan cooperatives, and using public transport, you amplify these traditions
                while reducing your environmental impact.
              </p>
              <p>
                Morocco has also made ambitious national commitments to sustainability. The country aims to
                generate 52% of its electricity from renewables by 2030 and has already built the
                Noor-Ouarzazate Solar Complex, one of the largest concentrated solar power plants in the
                world. This guide will help you align your travel with Morocco&apos;s green vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Sustainability Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Green Credentials at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about Morocco&apos;s sustainability efforts and why eco-tourism matters here.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Renewable Energy Target', value: '52% by 2030', detail: 'Solar, wind, and hydroelectric power investments', icon: Sparkles },
              { label: 'Plastic Bag Ban', value: 'Since 2016', detail: 'One of Africa\'s strictest single-use plastic policies', icon: Recycle },
              { label: 'National Parks', value: '10+ Protected Areas', detail: 'Including Toubkal, Souss-Massa, and Ifrane', icon: TreeDeciduous },
              { label: 'UNESCO Sites', value: '9 Cultural Sites', detail: 'Preserved medinas, kasbahs, and historic cities', icon: Building },
            ].map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Eco-Lodges ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Eco-Lodges &amp; Green Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Stay at properties that minimize environmental impact while supporting local communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecoLodges.map((lodge) => {
              const LodgeIcon = lodge.icon;
              return (
                <div key={lodge.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LodgeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {lodge.region}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-medium">{lodge.name}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{lodge.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {lodge.features.map((feature) => (
                      <span key={feature} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Booking Tip
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Book eco-lodges directly through their websites rather than through large booking platforms.
                  Direct bookings ensure more revenue stays with the property and local community. Many
                  eco-lodges offer better rates for direct reservations. Seasonal pricing can change, so
                  contact properties directly for the most accurate rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community-Based Tourism ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Community-Based Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Connect with local communities and ensure your travel directly benefits the people you visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityTourism.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Responsible Desert Tourism ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Responsible Desert Tourism
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara is fragile. Follow these guidelines to protect desert ecosystems for future visitors.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {desertResponsibility.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">{item.tip}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Water Conservation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Conservation for Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Water is precious in Morocco, especially in the south and desert regions. Every drop counts.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <CheckCircle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Practical Water-Saving Tips
            </h3>
            <div className="space-y-3">
              {waterTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Droplets className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Plastic-Free Travel ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Recycle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Plastic-Free Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco banned plastic bags in 2016, but there is more you can do to reduce single-use plastics.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {plasticFreeTips.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="card-moroccan p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">{item.tip}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Supporting Local Artisans ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Supporting Local Artisans Responsibly
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your purchases can empower communities. Here is how to ensure your money reaches the makers.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {[
                { title: 'Buy from Cooperatives', detail: 'Women\'s argan oil cooperatives in the Souss region, carpet-weaving cooperatives in Ait Bouguemez and Azilal, and pottery workshops in Safi sell directly at fair prices. Cooperatives display their certification and often offer demonstrations of their craft.', icon: Users },
                { title: 'Visit Artisan Workshops', detail: 'In Fes, watch zellige tile cutters, brass workers, and leather tanners at work. In Marrakech, visit carpet weavers and woodcarvers in their workshops. Buying where goods are made ensures artisans receive fair payment and keeps traditional crafts alive.', icon: Sparkles },
                { title: 'Avoid Mass-Produced Fakes', detail: 'Genuine handmade Moroccan goods take days or weeks to produce. If a "hand-woven carpet" costs from 50 MAD, it is likely machine-made or imported. Ask about materials, techniques, and production time to verify authenticity.', icon: Shield },
                { title: 'Fair Trade Labels', detail: 'Look for fair trade certification from recognized organizations. These labels guarantee artisans receive equitable wages and work in safe conditions. Government-certified cooperatives display their accreditation prominently.', icon: Award },
              ].map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ethical Animal Encounters ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ethical Animal Encounters
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Enjoy Morocco&apos;s wildlife responsibly. Know what is ethical and what to avoid.
          </p>

          <div className="space-y-6">
            {animalEncounters.map((encounter) => {
              const EncounterIcon = encounter.icon;
              return (
                <div key={encounter.animal} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EncounterIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {encounter.animal}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-xs font-semibold text-green-700 uppercase mb-1">Ethical Choice</p>
                      <p className="text-sm text-[var(--text-secondary)]">{encounter.ethical}</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <p className="text-xs font-semibold text-red-700 uppercase mb-1">Avoid</p>
                      <p className="text-sm text-[var(--text-secondary)]">{encounter.avoid}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sustainable Transport ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sustainable Transport Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers excellent green transport. Skip the rental car and travel like a local.
          </p>

          <div className="space-y-4">
            {transportOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.mode} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {option.mode}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{option.description}</p>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {option.co2}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Carbon Offsetting ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Carbon Offsetting Your Morocco Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical steps to measure and offset the carbon footprint of your journey to Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <CheckCircle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Offset Action Plan
            </h3>
            <div className="space-y-3">
              {carbonTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Green Certifications ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Green Certifications to Look For
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These eco-labels help you identify genuinely sustainable accommodations and services in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {greenCertifications.map((cert) => {
              const CertIcon = cert.icon;
              return (
                <div key={cert.label} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CertIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {cert.label}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about sustainable and eco-friendly travel in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue exploring eco-friendly and responsible travel options across Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-moroccan p-5 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Leaf className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Travel Morocco Sustainably and Meaningfully
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Sustainable travel in Morocco is not about sacrificing comfort &mdash; it is about making
            conscious choices that protect the landscapes, cultures, and communities that make this
            country so extraordinary. Every eco-lodge stay, every cooperative purchase, and every
            train journey makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/eco-tourism"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Explore Eco-Tourism
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/national-parks"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              National Parks Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Prices, certifications, and availability may vary seasonally. Information on this page is current as of March 2026.
            Always verify sustainability claims directly with accommodation providers and tour operators.
          </p>
        </div>
      </section>
    </>
  );
}
