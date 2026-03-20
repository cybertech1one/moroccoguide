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
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Globe,
  Landmark,
  Calendar,
  Utensils,
  Flame,
  Coffee,
  ChefHat,
  Leaf,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Food Tour Guide 2026 | Best Moroccan Food Tours, Street Food & Cooking Classes',
  description:
    'Complete guide to food tours in Morocco. Discover the best Marrakech food tours, Fez food tours, Moroccan street food, cooking classes, souk food experiences, regional specialties, and self-guided food walking routes across Morocco.',
  keywords: [
    'morocco food tour',
    'moroccan food tour',
    'marrakech food tour',
    'fez food tour',
    'moroccan street food',
    'food tours in morocco',
    'best food in morocco',
    'morocco cooking class',
    'jemaa el fna food',
    'moroccan cuisine tour',
    'casablanca food tour',
    'essaouira food tour',
    'tangier food tour',
    'moroccan cooking experience',
    'street food marrakech',
    'fez medina food',
    'morocco food guide',
    'moroccan tagine experience',
    'morocco culinary tour',
    'best restaurants morocco',
    'vegetarian food morocco',
    'moroccan food etiquette',
  ],
  openGraph: {
    title: 'Morocco Food Tour Guide 2026 | Best Moroccan Food Tours, Street Food & Cooking Classes',
    description:
      'Discover the best food tours in Morocco. From Marrakech street food and Fez medina tastings to cooking classes, regional specialties, and self-guided culinary walking routes.',
    url: `${BASE_URL}/morocco-food-tour`,
    images: [
      {
        url: `${BASE_URL}/images/hero-food-tour.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan food spread with tagine, couscous, and pastries at a traditional restaurant in Marrakech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Food Tour Guide 2026 | Moroccan Food Tours & Street Food',
    description:
      'Complete guide to food tours in Morocco. Best city food tours, street food must-tries, cooking classes, souk experiences, and self-guided culinary routes.',
    images: [`${BASE_URL}/images/hero-food-tour.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-food-tour` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-food-tour`,
  name: 'Morocco Food Tour Guide 2026 | Best Moroccan Food Tours, Street Food & Cooking Classes',
  description:
    'Complete guide to food tours in Morocco. Discover the best Marrakech food tours, Fez medina tastings, Moroccan street food, cooking classes, regional specialties, and self-guided culinary walking routes.',
  url: `${BASE_URL}/morocco-food-tour`,
  image: `${BASE_URL}/images/hero-food-tour.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-food-tour`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Food Tours Guide', item: `${BASE_URL}/morocco-food-tour` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a food tour in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Food tour prices vary by city and type. Budget street food tours start from 250 MAD per person, while guided walking food tours in Marrakech or Fez typically cost from 400-800 MAD including tastings. Premium food experiences with cooking classes and market visits range from 800-1,500 MAD. Private tours can cost from 1,500 MAD or more. Prices may vary by season and group size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moroccan food safe for tourists to eat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan food is generally safe for tourists, especially at busy stalls with high turnover. Stick to freshly cooked food, avoid pre-cut fruit from street vendors, and drink bottled water. Cooked tagines, grilled meats, and fresh bread are very safe choices. On organized food tours, guides select vetted vendors known for hygiene. Start slowly with street food if you have a sensitive stomach.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best city for a food tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech and Fez are the top two cities for food tours. Marrakech offers the iconic Jemaa el-Fnaa night market, diverse street food stalls, and many organized tour options. Fez has Morocco\'s most authentic and ancient food scene with dishes you cannot find elsewhere, like pastilla and trid. Essaouira is best for seafood, Casablanca for modern Moroccan cuisine, and Tangier for Mediterranean-influenced flavors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can vegetarians and vegans enjoy food tours in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has excellent vegetarian and vegan options. Many traditional dishes are naturally plant-based: zaalouk (smoky eggplant salad), bessara (fava bean soup), vegetable tagine with preserved lemons, harira (often made without meat), and fresh fruit juices. Most food tour operators offer vegetarian versions, and cooking classes can be fully plant-based on request. Vegans should ask about honey and butter used in pastries.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time of day is best for food tours in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Evening food tours (starting around 5-6 PM) are the most atmospheric, especially in Marrakech where Jemaa el-Fnaa comes alive at sunset. Morning tours (9-11 AM) are ideal for bakeries, markets, and breakfast specialties like msemen and bissara. Lunchtime tours work well in Fez and Casablanca. During Ramadan, food tours shift to after sunset iftar timing, which can be a uniquely memorable experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a food tour in advance or find one locally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Booking in advance is recommended for popular operators, especially during peak season (March-May, September-November). Online platforms offer tours from 300-800 MAD with verified reviews. However, you can also find excellent local guides in the medinas, often at lower prices from 200-400 MAD. Riads and hotels can recommend trusted local food guides. For cooking classes, advance booking is essential as they have limited capacity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear on a food tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear comfortable walking shoes as food tours involve 2-4 hours of walking through medinas with uneven surfaces. Dress modestly, covering shoulders and knees, especially in traditional neighborhoods. Loose, breathable clothing works best in the heat. Bring a small bag for any food purchases. In cooler months (November-February), bring a light jacket as medina alleyways can be chilly.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: CITY FOOD TOURS
   ═══════════════════════════════════════════════════════════════ */

const cityFoodTours = [
  {
    city: 'Marrakech',
    icon: Flame,
    image: '/images/photo-street-food-marrakech.webp',
    description:
      'The undisputed capital of Moroccan street food. Jemaa el-Fnaa transforms nightly into the world\'s largest open-air restaurant with over 100 stalls serving grilled meats, snails, fresh juices, and pastries. The medina hides family-run restaurants, hole-in-the-wall tagine joints, and spice-filled souks.',
    highlights: ['Jemaa el-Fnaa night market', 'Spice souk tastings', 'Mechoui Alley (slow-roasted lamb)', 'Derb Dabachi street food strip'],
    tourPrice: 'From 350 MAD for group tours, from 900 MAD for private tours',
    bestFor: 'First-time visitors and street food lovers',
  },
  {
    city: 'Fez',
    icon: Crown,
    image: '/images/photo-food-tour-fes.webp',
    description:
      'The spiritual home of Moroccan cuisine. Fez el-Bali preserves food traditions dating back to the 9th century. Find pastilla (sweet-savory pigeon pie), trid (hand-pulled pastry), and rfissa. Deeply traditional and less tourist-oriented than Marrakech.',
    highlights: ['Rcif Gate food stalls', 'Talaa Kebira food walk', 'Traditional pastilla workshops', 'Fez medina bakeries'],
    tourPrice: 'From 300 MAD for group tours, from 800 MAD for private tours',
    bestFor: 'Serious foodies and traditional cuisine enthusiasts',
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-food.webp',
    description:
      'Morocco\'s cosmopolitan food capital blends traditional flavors with French bistro culture. The Central Market buzzes with fresh seafood, and the Habous Quarter offers the best pastries in the country. Rooftop restaurants and fusion kitchens rival European cities.',
    highlights: ['Central Market seafood', 'Habous Quarter patisseries', 'Ain Diab seafood restaurants', 'Quartier Gauthier bistros'],
    tourPrice: 'From 400 MAD for group tours, from 1,000 MAD for private tours',
    bestFor: 'Modern gastronomy and seafood lovers',
  },
  {
    city: 'Essaouira',
    icon: Sparkles,
    image: '/images/hero-street-food-grill.webp',
    description:
      'A seafood paradise on the Atlantic coast. Choose your fish from the morning catch at the port, and grillers cook it on the spot with charmoula sauce. Also known for argan oil products, goat cheese, and laid-back cafe culture.',
    highlights: ['Port fish grills', 'Argan oil cooperatives', 'Moulay Hassan Square cafes', 'Skala seafood restaurants'],
    tourPrice: 'From 250 MAD for group tours, from 700 MAD for private tours',
    bestFor: 'Seafood enthusiasts and relaxed food exploration',
  },
  {
    city: 'Tangier',
    icon: Globe,
    image: '/images/card-tagine.webp',
    description:
      'Where Mediterranean and Moroccan flavors collide. Spanish tapas-style small plates, fresh anchovies, and the legendary Cafe Hafa overlooking the Strait of Gibraltar. The Grand Socco and Petit Socco are buzzing food hubs.',
    highlights: ['Grand Socco market', 'Petit Socco cafes', 'Tangier medina food stalls', 'Spanish-influenced seafood tapas'],
    tourPrice: 'From 300 MAD for group tours, from 800 MAD for private tours',
    bestFor: 'Mediterranean food lovers and cultural crossroads cuisine',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: STREET FOOD MUST-TRIES
   ═══════════════════════════════════════════════════════════════ */

const streetFoodMustTries = [
  {
    name: 'Msemen',
    icon: Utensils,
    description:
      'Square-shaped flaky flatbread, pan-fried until crispy and golden. Served with honey and butter for breakfast, or stuffed with kefta and spices. Found at almost every street corner, it is the quintessential grab-and-go food.',
    price: 'From 3 MAD plain, from 10 MAD stuffed',
    where: 'Everywhere; best from street griddle vendors',
  },
  {
    name: 'Sfenj (Moroccan Doughnuts)',
    icon: Coffee,
    description:
      'Light, airy doughnuts fried fresh and served piping hot. Vendors appear at dawn and sell out by mid-morning. Chewier and less sweet than Western doughnuts. Pair with mint tea for the perfect Moroccan breakfast.',
    price: 'From 2 MAD each',
    where: 'Morning street stalls; best in Fez and Meknes medinas',
  },
  {
    name: 'Harira',
    icon: Flame,
    description:
      'Iconic tomato-based soup with lentils, chickpeas, herbs, and often lamb. The traditional Ramadan fast-breaking food, also served year-round. Comes with dates and chebakia (honey-sesame cookies). Every family has their own recipe.',
    price: 'From 5 MAD per bowl',
    where: 'Street stalls and restaurants; everywhere during Ramadan',
  },
  {
    name: 'Boiled Snails (Babouche)',
    icon: Gem,
    description:
      'Small snails in a fragrant broth of herbs, spices, licorice root, and thyme. Eaten with a toothpick, slurping the broth is half the experience. The snail carts of Jemaa el-Fnaa are legendary among locals.',
    price: 'From 5 MAD per bowl',
    where: 'Jemaa el-Fnaa and medina squares across Morocco',
  },
  {
    name: 'Mechoui (Slow-Roasted Lamb)',
    icon: Flame,
    description:
      'Whole lambs roasted in underground clay ovens until the meat falls off the bone. Served by weight with cumin salt and bread. Mechoui Alley in Marrakech is the most famous spot. Melt-in-your-mouth texture.',
    price: 'From 60 MAD per portion',
    where: 'Mechoui Alley in Marrakech; across Morocco for celebrations',
  },
  {
    name: 'Tangia (Marrakech Urn Stew)',
    icon: ChefHat,
    description:
      'Lamb or beef in a clay urn with preserved lemons, spices, and smen, sealed and slow-cooked 8-12 hours in hammam furnace embers. Traditionally made by bachelor men for Friday gatherings. Only authentic in Marrakech.',
    price: 'From 80 MAD per portion',
    where: 'Marrakech medina restaurants; ask locals for best spots',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COOKING CLASSES
   ═══════════════════════════════════════════════════════════════ */

const cookingClasses = [
  {
    name: 'Marrakech Cooking Workshops',
    description:
      'Sessions start with a guided market visit to select ingredients, followed by hands-on cooking. Learn tagine, couscous, Moroccan salads, and pastilla. Most classes include a full meal and recipes to take home.',
    price: 'From 400 MAD for group classes, from 1,200 MAD for private sessions',
    duration: '4-6 hours including market visit',
    includes: 'Market tour, ingredients, instruction, meal, recipe booklet',
  },
  {
    name: 'Fez Traditional Cooking',
    description:
      'Focus on refined, centuries-old cuisine. Learn pastilla, hand-rolled couscous, and slow-cooked rfissa in restored riads. Fez classes emphasize historical context and technique.',
    price: 'From 350 MAD for group classes, from 1,000 MAD for private sessions',
    duration: '4-5 hours including market visit',
    includes: 'Medina market tour, ingredients, instruction, meal, recipes',
  },
  {
    name: 'Atlas Mountain Village Cooking',
    description:
      'A day trip to a Berber village with a home-cooking lesson. Village women teach bread baked in clay ovens, mountain-herb tagine, amlou, and mint tea in an intimate, unhurried setting.',
    price: 'From 500 MAD including transport from Marrakech',
    duration: 'Full day (6-8 hours including travel)',
    includes: 'Transport, village visit, cooking lesson, lunch, tea ceremony',
  },
  {
    name: 'Essaouira Seafood Classes',
    description:
      'Learn to prepare fresh Atlantic seafood: chermoula marinade, grilled fish tagine, seafood pastilla, and traditional fish soup. Start at the port market selecting the morning catch.',
    price: 'From 450 MAD for group classes, from 1,100 MAD for private sessions',
    duration: '4-5 hours including port market visit',
    includes: 'Port tour, fresh seafood, instruction, meal, recipes',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL SPECIALTIES
   ═══════════════════════════════════════════════════════════════ */

const regionalSpecialties = [
  {
    region: 'Marrakech & the South',
    icon: Flame,
    dishes: ['Tangia (urn-cooked meat)', 'Mechoui', 'Mint tea with orange blossom'],
    signature: 'Bold, spice-forward flavors with preserved lemons and smen. Slow-cooked meats with generous cumin and ras el hanout.',
  },
  {
    region: 'Fez & Meknes',
    icon: Crown,
    dishes: ['Pastilla (pigeon pie)', 'Rfissa', 'Briouat (stuffed pastry)'],
    signature: 'Refined ancestral cuisine with complex layered flavors, sweet-savory combinations, and labor-intensive techniques.',
  },
  {
    region: 'Coastal Cities',
    icon: Sparkles,
    dishes: ['Grilled sardines', 'Fish chermoula', 'Seafood pastilla'],
    signature: 'Fresh Atlantic seafood with chermoula marinade (cilantro, garlic, cumin, paprika). Essaouira and Casablanca lead.',
  },
  {
    region: 'Northern Morocco',
    icon: Globe,
    dishes: ['Kefta tagine with eggs', 'Stuffed sardines', 'Goat cheese with olive oil'],
    signature: 'Mediterranean and Spanish influences create lighter, herb-driven cuisine with fresh cheeses and Rif Mountain produce.',
  },
  {
    region: 'Atlas & Berber South',
    icon: Landmark,
    dishes: ['Mountain herb tagine', 'Amlou (Berber Nutella)', 'Tafernout bread'],
    signature: 'Hearty Berber cooking with argan oil, wild herbs, and slow-cooking over wood fires. Friday couscous is sacred.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SELF-GUIDED FOOD ROUTES
   ═══════════════════════════════════════════════════════════════ */

const selfGuidedRoutes = [
  {
    name: 'Marrakech Medina Food Trail',
    duration: '3-4 hours',
    stops: 6,
    route: 'Start at Cafe de France on Jemaa el-Fnaa. Head into the spice souk for ras el hanout. Follow Derb Dabachi for street snacks. Detour to Mechoui Alley for roast lamb. Continue to the olive souk. End at a rooftop terrace for mint tea at sunset.',
    budget: 'From 100-200 MAD for all tastings',
  },
  {
    name: 'Fez Medina Culinary Walk',
    duration: '3-5 hours',
    stops: 7,
    route: 'Begin at Bab Boujloud. Walk Talaa Kebira, stopping at bakeries. Visit honey and spice stalls. Try sfenj at a morning vendor. Explore Rcif for harira and brochettes. Find a pastilla maker near Karaouine. End at Cafe Clock for camel burger.',
    budget: 'From 80-180 MAD for all tastings',
  },
  {
    name: 'Essaouira Seafood Stroll',
    duration: '2-3 hours',
    stops: 5,
    route: 'Start at the fishing port for the morning catch. Choose your fish at the port grills. Visit spice shops on Avenue de l\'Istiqlal. Try argan ice cream near the clock tower. End at Moulay Hassan Square for seafood pastilla.',
    budget: 'From 80-150 MAD for all tastings',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoFoodTourPage() {
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
            backgroundImage: 'url(/images/hero-food-tour.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Food Tours Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Utensils className="w-4 h-4" />
            Culinary Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Food Tours:
            <br className="hidden md:block" /> The Ultimate Culinary Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From sizzling Marrakech street food and ancient Fez recipes to Atlantic seafood and Berber mountain cooking. Your complete guide to eating your way through Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Why Morocco is a Food Tour Paradise ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco is the Ultimate Food Tour Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at one of the world&apos;s great culinary crossroads. Berber, Arab, Andalusian,
                French, and sub-Saharan African influences have merged over centuries to create a cuisine
                that is both deeply traditional and endlessly varied. From the 1,000-year-old recipes of Fez
                to the sizzling street grills of Marrakech&apos;s Jemaa el-Fnaa, every city and region offers
                a distinct food identity waiting to be explored.
              </p>
              <p>
                What makes Moroccan food tours extraordinary is the accessibility. The finest tagine
                might come from a tiny medina stall passed down through three generations. Street food
                vendors who have perfected a single dish over 40 years serve masterpieces for a few
                dirhams. Whether you join an organized food tour or map your own culinary walking route,
                this guide covers the best food tours by city, must-try street foods, cooking classes,
                regional specialties, and practical tips for eating well throughout the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Food Tours by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Food Tours by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own culinary character. Prices may vary by season.
          </p>

          <div className="space-y-8">
            {cityFoodTours.map((tour) => (
              <div key={tour.city} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={tour.image}
                      alt={`Food tour experience in ${tour.city}, Morocco with local street food and market tastings`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-sm font-medium">
                      <tour.icon className="w-3.5 h-3.5" />
                      {tour.city}
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6">
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      {tour.city} Food Tour
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {tour.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      {tour.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 shrink-0 text-[var(--color-gold)]" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[var(--color-accent)] font-medium">
                        <DollarSign className="w-4 h-4" />
                        {tour.tourPrice}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[var(--text-muted)]">
                        <Star className="w-4 h-4" />
                        Best for: {tour.bestFor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-amber-50/60 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>Seasonal pricing note:</strong> Prices vary by season, group size, and operator. Peak season (March-May, September-November) may have higher prices. During Ramadan, tours shift to evening iftar experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Street Food Must-Tries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flame className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Street Food Must-Tries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The essential dishes every food tour should include.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streetFoodMustTries.map((food) => (
              <div key={food.name} className="card-moroccan p-6">
                <food.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {food.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {food.description}
                </p>
                <div className="space-y-2 text-sm border-t border-[var(--border-primary)] pt-3">
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {food.price}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {food.where}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market & Souk Food Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Market &amp; Souk Food Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s markets are living museums of culinary tradition.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Jemaa el-Fnaa Night Market, Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Every evening, Marrakech&apos;s main square transforms into the world&apos;s most famous
                open-air food market. Over 100 numbered stalls compete for your attention, each
                specializing in different dishes. Expect grilled meats, fresh-squeezed orange juice
                (from 5 MAD), snail soup, sheep head, fried fish, and dessert stalls piled high with
                chebakia and sellou. Go hungry, arrive around sunset, and eat your way across the square.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Sunset to midnight
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  From 30-100 MAD
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Users className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  100+ stalls
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  UNESCO listed
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Fez Medina Food Markets
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                The Fez medina is a labyrinth of food artisans with wood-fired communal ovens, spice
                pyramids, and honey sellers. The Rcif area is the most concentrated food zone, where
                locals queue for fresh bread, bubbling harira, and steaming bissara (fava bean soup).
                Unlike Jemaa el-Fnaa, completely authentic and untouched by mass tourism.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Morning to evening
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  From 20-80 MAD
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Landmark className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Oldest medina in Morocco
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Heart className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Deeply authentic
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Spice Souk Tasting Experiences
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                Every medina has a spice souk with guided tastings. Sample ras el hanout (up to 30
                ingredients), cumin, saffron, dried rose petals, and khlii (preserved meat). A good
                guide explains each spice&apos;s role and helps you buy at fair prices. Marrakech&apos;s
                Rahba Kedima and Fez&apos;s Attarine souk are the most famous.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Best 9 AM - 1 PM
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Free to taste, buy from 10 MAD
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  Use a guide for best prices
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  30+ spice varieties
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cooking Classes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ChefHat className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hands-on cooking experiences to recreate the flavors at home. Prices may vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookingClasses.map((cls) => (
              <div key={cls.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {cls.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {cls.description}
                </p>
                <div className="space-y-2 text-sm border-t border-[var(--border-primary)] pt-3">
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {cls.price}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {cls.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {cls.includes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional Specialties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Specialties Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding regional differences helps you plan a food tour covering the full spectrum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalSpecialties.map((region) => (
              <div key={region.region} className="card-moroccan p-6">
                <region.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {region.region}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {region.signature}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                    Signature Dishes
                  </p>
                  {region.dishes.map((dish) => (
                    <div key={dish} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[var(--color-gold)]" />
                      {dish}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vegetarian & Vegan Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Vegetarian &amp; Vegan Food in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Many traditional dishes are naturally vegetarian, making food tours accessible for non-meat eaters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Naturally Vegetarian Dishes
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Zaalouk</strong> -- Smoky roasted eggplant and tomato salad with garlic, cumin, paprika</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Bessara</strong> -- Creamy fava bean soup with olive oil and cumin, a breakfast staple</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Vegetable tagine</strong> -- With preserved lemons, olives, and seasonal vegetables</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Moroccan salads</strong> -- Carrot with orange blossom, beet with cinnamon, taktouka</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Lentil soup</strong> -- Spiced red lentil soup served with bread and lemon</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Tips for Plant-Based Travelers
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Ask about meat stock: harira and some tagines may use broth even when appearing vegetarian</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Vegans note: butter and honey are common in bread and pastries</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Cooking classes can be customized for vegan menus on advance request</span>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Key phrases: &quot;bla l7am&quot; (no meat), &quot;bla zebda&quot; (no butter), &quot;nabati&quot; (plant-based)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Tour Booking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food Tour Booking Tips &amp; Best Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for choosing and booking the right food tour.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                How to Choose a Food Tour
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Read recent reviews focusing on food quality, not just guide personality</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Smaller groups (6-8 max) give better access to tiny stalls and medina passages</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Confirm inclusions: number of tastings, drinks, and tip expectations</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Local guides have deeper knowledge and vendor relationships than expat guides</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Budget vs. Luxury Food Experiences
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Budget (from 200-400 MAD)</p>
                  <p>Self-guided walks, street stalls, local markets. A full day of medina eating can cost from 100 MAD.</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Mid-Range (from 400-800 MAD)</p>
                  <p>Guided walking tours with 8-12 tastings, cultural context, and vetted vendors. Best balance for most travelers.</p>
                </div>
                <div>
                  <p className="font-semibold text-[var(--text-primary)] mb-1">Luxury (from 1,500+ MAD)</p>
                  <p>Private tours, exclusive riad dining, chef-led classes, and degustation menus at top restaurants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Self-Guided Food Walking Routes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Self-Guided Food Walking Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tested walking routes through the best food zones, no tour operator needed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selfGuidedRoutes.map((route) => (
              <div key={route.name} className="card-moroccan p-6">
                <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {route.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {route.route}
                </p>
                <div className="space-y-2 text-sm border-t border-[var(--border-primary)] pt-3">
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {route.duration}
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {route.stops} tasting stops
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {route.budget}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Etiquette & Customs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Food Etiquette &amp; Customs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding food customs enhances your experience and shows respect for the culture.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Dining Traditions
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Eat with your right hand; the left is considered unclean</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Eat from the section directly in front of you, not from the center of shared dishes</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Say &quot;Bismillah&quot; before and &quot;Alhamdulillah&quot; after eating; hosts appreciate it</span>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Accept at least one glass of mint tea; refusing is considered impolite</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Practical Food Tips
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Stick to busy stalls with high turnover for the safest street food</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Drink bottled water; avoid raw salads at stalls if you have a sensitive stomach</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Tip 10-15% at sit-down restaurants; round up bills at stalls</span>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>Carry small bills (10-20 MAD); vendors rarely have change for large notes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Food Highlights ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Food Highlights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your food tour to coincide with seasonal specialties adds another culinary layer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Spring (March - May)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Fresh fava beans appear in markets for bessara soup. Artichoke and green pea tagines peak. Orange blossom water is freshly distilled in the Dades Valley. Prime time for fresh herbs and first cherries.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Summer (June - August)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Watermelon juices dominate stalls. Fresh figs arrive July-August. Prickly pear vendors appear everywhere. Cold soups and lighter salads replace heavy tagines. Coastal cities offer the freshest seafood.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Autumn (September - November)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Olive harvest brings fresh-pressed oil. Pomegranates and Medjool dates from the Draa Valley peak. New argan oil is pressed. Considered the best overall time for food tours as variety and quality are highest.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Winter (December - February)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Rich, warming tagines return in full force. Citrus from the Souss peaks. Almond blossoms arrive in February. If your visit overlaps with Ramadan, the iftar food scene is an extraordinary culinary event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            A Taste of Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/photo-food-flatlay.webp', alt: 'Colorful Moroccan food spread with tagine, couscous, salads, and bread on a traditional table', label: 'Traditional Moroccan Feast' },
              { src: '/images/art-moroccan-spice-market.webp', alt: 'Vibrant spice pyramids at a Moroccan souk market with cumin, paprika, and saffron', label: 'Spice Souk Experience' },
              { src: '/images/photo-street-food-marrakech.webp', alt: 'Busy street food stalls at Jemaa el-Fnaa square in Marrakech at night', label: 'Jemaa el-Fnaa Night Market' },
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
            {[
              { q: 'How much does a food tour in Morocco cost?', a: 'Budget street food tours start from 250 MAD per person. Guided walking tours cost from 400-800 MAD including tastings. Premium experiences with cooking classes range from 800-1,500 MAD. Private tours from 1,500 MAD or more. Prices may vary by season and group size.' },
              { q: 'Is Moroccan food safe for tourists to eat?', a: 'Generally safe, especially at busy stalls with high turnover. Stick to freshly cooked food, avoid pre-cut fruit from street vendors, and drink bottled water. Cooked tagines, grilled meats, and fresh bread are very safe. On organized tours, guides select vetted vendors.' },
              { q: 'What is the best city for a food tour in Morocco?', a: 'Marrakech and Fez are the top two cities. Marrakech offers the iconic Jemaa el-Fnaa night market and diverse street food. Fez has the most authentic ancient food scene with pastilla and trid. Essaouira is best for seafood, Casablanca for modern gastronomy, Tangier for Mediterranean flavors.' },
              { q: 'Can vegetarians and vegans enjoy food tours?', a: 'Yes, many traditional dishes are naturally plant-based: zaalouk, bessara, vegetable tagine, and fresh juices. Most operators offer vegetarian versions. Cooking classes can be fully plant-based on request. Vegans should ask about honey and butter in pastries.' },
              { q: 'What time of day is best for food tours?', a: 'Evening tours (5-6 PM) are most atmospheric, especially in Marrakech at sunset. Morning tours (9-11 AM) are ideal for bakeries and breakfast specialties. During Ramadan, tours shift to after-sunset iftar timing for a uniquely memorable experience.' },
              { q: 'Should I book in advance or find a tour locally?', a: 'Book in advance for peak season (March-May, September-November). Online tours from 300-800 MAD with verified reviews. Local medina guides offer excellent tours from 200-400 MAD. For cooking classes, advance booking is essential due to limited capacity.' },
              { q: 'What should I wear on a food tour?', a: 'Comfortable walking shoes for 2-4 hours on uneven medina surfaces. Dress modestly covering shoulders and knees. Loose, breathable clothing for heat. Bring a small bag for purchases and a light jacket for cooler months.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
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
            <Link href="/cuisine" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Cuisine Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into Moroccan dishes, ingredients, spices, and the traditions behind the food.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Marrakech including markets, riads, day trips, and essential experiences.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fez" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fez City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the spiritual capital of Morocco with its ancient medina, tanneries, and cuisine.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to experience the best of Morocco on a budget, including cheap eats and free activities.
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
            Ready to Taste Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From sizzling street food in Marrakech to ancient recipes in Fez, start planning your food tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/cuisine"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Read the Cuisine Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
