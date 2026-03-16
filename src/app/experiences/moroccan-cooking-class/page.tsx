import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ChefHat,
  Star,
  MapPin,
  Clock,
  Calendar,
  DollarSign,
  CheckCircle,
  Users,
  ArrowRight,
  ShoppingBasket,
  Flame,
  UtensilsCrossed,
  BookOpen,
  Heart,
  Coffee,
  AlertTriangle,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Cooking Class Experience | Learn Tagine, Couscous & Pastilla',
  description:
    'Complete guide to taking a Moroccan cooking class. Market tour plus hands-on cooking session to learn tagine, couscous, pastilla, and msemmen. Classes in Marrakech, Fes, and Essaouira from $30-80/person with expert local chefs.',
  keywords: [
    'Moroccan cooking class',
    'Morocco cooking experience',
    'learn Moroccan cooking',
    'tagine cooking class',
    'couscous class Morocco',
    'Marrakech cooking class',
    'Fes cooking school',
    'Essaouira cooking class',
    'Moroccan food experience',
    'pastilla cooking class',
    'Morocco market tour',
    'Moroccan spices',
    'msemmen cooking',
    'Morocco culinary tour',
  ],
  openGraph: {
    title: 'Moroccan Cooking Class Experience - CityGuide',
    description:
      'Learn to cook authentic Moroccan dishes in a hands-on class. Market tours, expert chefs, and signature recipes from $30/person.',
    url: 'https://citytoursmorocco.com/experiences/moroccan-cooking-class',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Moroccan cooking class with traditional tagine pots and fresh ingredients',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/experiences/moroccan-cooking-class' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Moroccan Cooking Class Experience',
  description:
    'Hands-on Moroccan cooking class featuring a guided market tour and cooking session to learn tagine, couscous, pastilla, msemmen, and traditional spice blends.',
  url: 'https://citytoursmorocco.com/experiences/moroccan-cooking-class',
  provider: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: 30,
    highPrice: 80,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.9,
    reviewCount: 3200,
    bestRating: 5,
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

const dishes = [
  {
    name: 'Tagine',
    time: '45-60 min prep',
    description:
      'The crown jewel of Moroccan cuisine, named after the conical clay pot in which it slowly simmers. You will learn the art of layering spices, proteins, and vegetables in precise order so they meld into something far greater than the sum of their parts. Most classes teach chicken tagine with preserved lemons and olives (the most iconic version) alongside a lamb tagine with prunes and almonds. The secret lies in the low, slow heat that the clay pot provides -- and the patience to let it work its magic. You will discover how a handful of humble ingredients, treated with respect and time, become a dish that has sustained Moroccan families for centuries.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=600',
  },
  {
    name: 'Couscous',
    time: '90 min (3 steamings)',
    description:
      'Hand-rolling couscous is a meditative, deeply satisfying process that connects you directly to generations of Moroccan women who have performed this ritual every Friday for centuries. You begin with dry semolina, adding water and olive oil gradually while rolling the grains between your palms until they achieve the perfect tiny, uniform size. The grains are then steamed three times over a fragrant broth in a couscoussier, fluffed by hand between each steaming. The result is incomparably lighter and more flavorful than anything from a box. In Morocco, couscous is far more than food -- it is the dish of community, served every Friday after prayers and at every celebration.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=600',
  },
  {
    name: 'Pastilla (B\'stilla)',
    time: '75 min',
    description:
      'Pastilla is the supreme achievement of Moroccan culinary art -- a dish so complex and refined that it was once reserved for royal banquets and wedding feasts. Layer upon layer of warqa (paper-thin pastry, similar to phyllo but handmade) are filled with shredded pigeon or chicken that has been cooked with saffron, ginger, and cinnamon, then mixed with caramelized onions and toasted almonds. The assembled pie is baked until golden, then dusted with powdered sugar and cinnamon. The interplay of sweet, savory, crispy, and tender in a single bite is revelatory. Making warqa from scratch is a skill that takes years to master, but your chef will demonstrate the technique.',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?q=80&w=600',
  },
  {
    name: 'Msemmen',
    time: '30 min',
    description:
      'These square, layered Moroccan flatbreads are one of the first things you will smell each morning in any Moroccan neighborhood -- the irresistible aroma of buttery, flaky dough cooking on a flat griddle. The technique involves stretching a ball of dough paper-thin on an oiled surface (so thin you can see through it), then folding it into a square with layers of butter and fine semolina between each fold. When cooked, the exterior is crispy and golden while the interior remains soft and layered like a savory croissant. Msemmen is served for breakfast with honey and butter, or alongside tagine to soak up the sauce. Once you master the stretching technique, you will make these at home regularly.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600',
  },
];

const typicalDay = [
  { time: '9:00 AM', title: 'Welcome & Introduction', description: 'Arrive at the cooking school or riad and meet your chef over a glass of fresh mint tea. Receive an overview of the day\'s menu, the history of each dish, and the key techniques you will learn.', icon: Coffee },
  { time: '9:30 AM', title: 'Guided Market Tour', description: 'Walk through the bustling souk with your chef as your guide. Learn to select the freshest vegetables, identify quality spices by smell and color, choose the right cuts of meat, and navigate the organized chaos of a Moroccan market. This is an education in itself.', icon: ShoppingBasket },
  { time: '10:30 AM', title: 'Spice Preparation', description: 'Back in the kitchen, learn to toast, grind, and blend your own spice mixtures. Understand the role of each spice in the Moroccan pantry -- cumin for earthiness, saffron for color and perfume, ras el hanout for complexity, preserved lemons for brightness.', icon: Flame },
  { time: '11:00 AM', title: 'Hands-On Cooking', description: 'The main event. Under your chef\'s guidance, prepare three to four dishes from scratch. You do the chopping, the seasoning, the layering, and the shaping. Every step is explained in context, so you understand not just how but why.', icon: ChefHat },
  { time: '12:30 PM', title: 'Bread & Sides', description: 'While the tagine simmers, learn to make msemmen or khobz (traditional round bread). Prepare Moroccan salads like zaalouk (smoky eggplant) and taktouka (roasted pepper). These accompaniments are essential to a complete Moroccan table.', icon: UtensilsCrossed },
  { time: '1:00 PM', title: 'The Feast', description: 'Sit down to enjoy everything you have created, served family-style in the courtyard or on the rooftop. Your chef shares stories about Moroccan food culture, regional variations, and the role of food in Moroccan hospitality. Mint tea and pastries to close.', icon: Heart },
  { time: '2:00 PM', title: 'Recipes & Farewell', description: 'Receive printed or digital recipe cards for every dish you prepared, along with tips for sourcing ingredients at home. Many chefs also share their personal WhatsApp or Instagram for follow-up questions when you cook at home.', icon: BookOpen },
];

const cityOptions = [
  {
    city: 'Marrakech',
    description:
      'The culinary capital and most popular destination for cooking classes. Marrakech offers the widest range of options, from budget-friendly group classes to exclusive private sessions with celebrity chefs. The souk experience here is unrivaled -- your market tour will take you through the spice souks of the medina, past mountains of cumin, saffron, and ras el hanout, past butchers, bakers, and herbalists. Classes typically focus on the hearty, aromatic cuisine of southern Morocco: lamb tagines, chicken pastilla, and the classic Marrakchi tanjia (a slow-cooked meat dish unique to the city). Top schools include La Maison Arabe (Morocco\'s oldest cooking school, established 1946), Souk Cuisine, and Amal Women\'s Training Center.',
    priceRange: '$30-120/person',
    highlights: ['Largest selection of schools', 'Iconic spice souk tour', 'Tanjia specialty', 'Both budget and luxury options'],
  },
  {
    city: 'Fes',
    description:
      'Fes is considered the gastronomic heart of Morocco, home to the country\'s most refined and complex cuisine. Fassi cooking reflects centuries of Andalusian, Arab, and Berber influence, producing dishes of extraordinary subtlety and sophistication. A cooking class in Fes will introduce you to dishes rarely found elsewhere: rfissa (a saffron-infused celebration dish), sweet-savory pastilla with pigeon, and the intricate spice blends that define Fassi cuisine. The market tour takes you through the world\'s largest car-free urban area, past medieval fondouks and Sufi shrines. Classes at Palais Amani begin in their organic rooftop garden where you harvest herbs.',
    priceRange: '$35-150/person',
    highlights: ['Morocco\'s most refined cuisine', 'World heritage medina market tour', 'Pastilla specialization', 'Rooftop garden harvesting'],
  },
  {
    city: 'Essaouira',
    description:
      'The coastal cooking class experience is fundamentally different from inland Morocco. Here, the morning begins at the bustling fish market where the day\'s catch is auctioned in a theatrical display of shouting and hand signals. Your chef helps you select the freshest sardines, prawns, sea bream, or lobster. Back in the kitchen, you learn the art of chermoula (the magnificent Moroccan fish marinade of cilantro, garlic, cumin, paprika, and preserved lemons), seafood pastilla, and grilled fish the Essaouira way. The Atlantic wind, the cries of seagulls, and the relaxed coastal atmosphere make this a distinctly different culinary experience.',
    priceRange: '$35-100/person',
    highlights: ['Fresh fish market tour', 'Seafood specialties', 'Chermoula masterclass', 'Relaxed coastal atmosphere'],
  },
];

const pricingTiers = [
  {
    type: 'Group Class',
    price: '$30-50/person',
    duration: '3-4 hours',
    groupSize: '6-12 people',
    includes: ['Guided market tour', '3-4 dishes', 'Recipe booklet', 'Shared feast with drinks', 'Mint tea & pastries'],
    description: 'The most popular and affordable format. Join other travelers for a sociable, hands-on cooking experience. Ideal for solo travelers who want to meet people, or anyone seeking great value.',
  },
  {
    type: 'Private Class',
    price: '$60-80/person',
    duration: '4-5 hours',
    groupSize: '1-6 people',
    includes: ['Private market tour', 'Custom menu selection', '4-5 dishes', 'Dietary accommodations', 'Recipes & spice kit to take home'],
    description: 'Exclusive one-on-one or small-group session with a dedicated chef. Choose your own menu, learn at your own pace, and enjoy personalized instruction adapted to your skill level and dietary needs.',
  },
  {
    type: 'Farm-to-Table Premium',
    price: '$80-150/person',
    duration: '5-7 hours',
    groupSize: '2-8 people',
    includes: ['Farm/garden harvest', 'Extended market tour', '5-6 dishes', 'Wine or cocktail pairing', 'Artisanal spice collection'],
    description: 'A full-day immersive experience starting at an organic farm or garden. Harvest your own herbs and vegetables, then cook a multi-course meal using only what you have picked. Available in the Ourika Valley and Essaouira region.',
  },
];

const relatedExperiences = [
  {
    title: 'Sahara Desert Glamping',
    slug: '/experiences/sahara-glamping',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=400&q=80',
    duration: '1-3 nights',
    price: 'From $150',
  },
  {
    title: 'Traditional Hammam Ritual',
    slug: '/experiences/hammam-ritual',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80',
    duration: '1.5-2 hours',
    price: 'From $10',
  },
  {
    title: 'Atlas Mountains Day Hike',
    slug: '/experiences/atlas-day-hike',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80',
    duration: 'Full day',
    price: 'From $40',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccanCookingClassPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=1800&q=80"
            alt="Hands-on Moroccan cooking class with colorful spices and fresh ingredients"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Cooking Class</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <ChefHat className="w-4 h-4 text-[var(--color-accent)]" />
              Culinary Experience
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Cooking Class
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Explore a bustling souk with a local chef, learn the art of tagine, couscous,
              and pastilla, and feast on everything you create. The most delicious
              souvenir you will bring home from Morocco.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">$30-80</p>
                <p className="text-sm text-white/70">Per Person</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">4-5</p>
                <p className="text-sm text-white/70">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">4.9</p>
                <p className="text-sm text-white/70">Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Why a Cooking Class Is the Best Thing You Can Do in Morocco
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Moroccan cuisine is one of the world&apos;s great culinary traditions, a sophisticated
                    tapestry woven from Berber, Arab, Andalusian, Ottoman, and French influences over
                    more than a thousand years. It is a cuisine of patience and precision, where a single
                    tagine may contain twenty spices in exact proportions, and where the difference between
                    good couscous and extraordinary couscous lies in the love and attention of three
                    separate steamings.
                  </p>
                  <p>
                    A cooking class takes you behind the scenes of this extraordinary food culture in a
                    way that no restaurant meal ever could. You begin in the souk, where the organized
                    chaos of a Moroccan market becomes your classroom. Your chef teaches you to identify
                    the freshest produce by touch and smell, to distinguish true saffron from cheaper
                    substitutes, and to navigate the social rituals of bargaining that are as much a
                    part of Moroccan life as the food itself.
                  </p>
                  <p>
                    Back in the kitchen -- which might be a gleaming professional setup, a charming riad
                    courtyard, or a traditional family home -- you cook under the patient guidance of
                    someone who has been making these dishes since childhood. The experience is tactile
                    and sensory in a way that recipe books cannot replicate. You feel the dough stretch
                    between your fingers as you make msemmen. You smell the moment when toasted cumin
                    seeds release their essential oils. You learn the exact shade of golden-brown that
                    means your onions are perfectly caramelized for a tagine base.
                  </p>
                  <p>
                    Perhaps most importantly, you take these skills home. Long after your photographs
                    have been filed away and your memories have softened, you can walk into your own
                    kitchen, open a jar of ras el hanout, and be transported instantly back to a rooftop
                    in Marrakech or a courtyard in Fes. A cooking class is not just an experience -- it
                    is a souvenir that lasts a lifetime.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Price</p>
                      <p className="text-sm text-[var(--text-secondary)]">$30-80/person (group). Private from $60/person.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Duration</p>
                      <p className="text-sm text-[var(--text-secondary)]">4-5 hours including market tour and meal.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Availability</p>
                      <p className="text-sm text-[var(--text-secondary)]">Year-round, daily. Book 2-3 days ahead in peak season.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Locations</p>
                      <p className="text-sm text-[var(--text-secondary)]">Marrakech, Fes, Essaouira (and others)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Group Size</p>
                      <p className="text-sm text-[var(--text-secondary)]">6-12 (group) or 1-6 (private). Solo-friendly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <UtensilsCrossed className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Dietary</p>
                      <p className="text-sm text-[var(--text-secondary)]">Vegetarian, vegan, and gluten-free options available.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a
                    href="#pricing"
                    className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors"
                  >
                    View Pricing Options
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Dishes You'll Learn ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Hands-On Learning
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Dishes You Will Learn
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Most classes cover three to four dishes in a single session. These are the signature recipes you will master.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dishes.map((dish, index) => (
              <div key={dish.name} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={`Moroccan ${dish.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--color-primary)] text-sm font-semibold">
                      #{index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-primary)]/90 text-white text-xs font-medium inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {dish.time}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A Typical Day ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Step by Step
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              A Typical Cooking Class Day
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Here is what to expect from a standard half-day morning cooking class.
            </p>
          </div>
          <div className="space-y-0">
            {typicalDay.map((step, index) => (
              <div key={step.title} className="relative flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  {index < typicalDay.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--border)] my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                    {step.time}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Take a Class ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Where to Take a Cooking Class
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each city offers a distinctly different culinary personality. Choose based on your itinerary and food interests.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cityOptions.map((city) => (
              <div key={city.city} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--color-secondary)]">{city.priceRange}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {city.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
                  {city.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Class Types & Pricing
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three formats to suit every budget, schedule, and culinary ambition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div key={tier.type} className={`card-moroccan p-6 flex flex-col ${index === 1 ? 'ring-2 ring-[var(--color-accent)]' : ''}`}>
                {index === 1 && (
                  <div className="inline-flex self-start items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-xs font-semibold mb-3">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-1">
                  {tier.type}
                </h3>
                <p className="text-2xl font-bold text-[var(--color-secondary)] mb-1">{tier.price}</p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{tier.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{tier.groupSize}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{tier.description}</p>
                <div className="space-y-2 mt-auto pt-4 border-t border-[var(--border)]">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-12">
            Practical Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Book 2-3 Days Ahead</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Popular schools in Marrakech and Fes sell out during peak season (October-April). Book at
                least 2-3 days in advance, especially for private classes. During Ramadan, class times and
                menus may change, but special iftar (breaking-the-fast) cooking classes are often available.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Mention Dietary Needs Early</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Most schools accommodate vegetarian, vegan, gluten-free, and halal requirements with advance
                notice. Moroccan cuisine is naturally rich in vegetable dishes, so vegetarian classes are
                exceptional. Mention allergies when booking, not on the day.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Come Hungry</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Skip breakfast or eat very lightly. You will be cooking (and tasting) a large multi-course
                meal. The feast at the end is substantial. Many schools also send you home with leftovers
                if you cannot finish everything -- which is likely, given the portions.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Buy Spices After Class</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Your chef can recommend trusted spice merchants where you will get quality products at fair
                prices. Buy whole spices rather than ground -- they last much longer and you can grind them
                fresh at home. A small spice collection makes the perfect self-souvenir.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Tipping Etiquette</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Tipping your chef is appreciated but not obligatory. 50-100 MAD ($5-10) per person is generous
                  for a group class. For a private class, 100-200 MAD is appropriate if you had an exceptional
                  experience. Tips can be given directly to the chef at the end of the meal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Experiences ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Experiences
            </h2>
            <p className="text-[var(--text-secondary)]">
              Complete your Moroccan adventure with these complementary experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedExperiences.map((exp) => (
              <Link
                key={exp.slug}
                href={exp.slug}
                className="card-moroccan group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={exp.image} alt={exp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{exp.duration}</span>
                    <span className="font-semibold text-[var(--color-secondary)]">{exp.price}</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                    Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/experiences" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:bg-[var(--color-primary-light)] transition-colors">
              View All Experiences <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
