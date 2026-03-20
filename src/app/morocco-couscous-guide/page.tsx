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
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Utensils,
  ChefHat,
  Wheat,
  Globe,
  Calendar,
  HandPlatter,
  Flame,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Moroccan Couscous Guide 2026 | Friday Tradition, Types, Recipes & Best Restaurants',
  description:
    'Complete guide to Moroccan couscous: the sacred Friday tradition, 8 regional types (7-vegetable, tfaya, lamb, chicken, fish, sweet seffa), hand-rolling technique, best restaurants, cooking classes, and how to eat couscous properly in Morocco.',
  keywords: [
    'Moroccan couscous guide',
    'Friday couscous Morocco',
    'types of couscous Morocco',
    'best couscous Morocco',
    'couscous recipe traditional',
    'couscous Friday tradition',
    'seven vegetable couscous',
    'couscous tfaya Morocco',
    'couscous seffa sweet',
    'hand rolled couscous Morocco',
    'couscous cooking class Morocco',
    'Moroccan couscous recipe',
    'couscous restaurants Marrakech',
    'couscous restaurants Fes',
    'how to eat couscous Morocco',
    'couscous regional variations',
    'Moroccan food guide',
    'couscous history Morocco',
    'best Moroccan food',
    'Morocco culinary guide',
    'couscous Casablanca',
    'Berber couscous recipe',
  ],
  openGraph: {
    title: 'Moroccan Couscous Guide 2026 | Friday Tradition, Types & Best Restaurants',
    description:
      'Discover Morocco\'s national dish. From the sacred Friday couscous tradition to 8 regional varieties, hand-rolling technique, best restaurants, and cooking classes across Morocco.',
    url: `${BASE_URL}/morocco-couscous-guide`,
    images: [
      {
        url: `${BASE_URL}/images/photo-moroccan-couscous.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan couscous served on a large platter with seven vegetables, meat, and rich broth',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Couscous Guide 2026 | Friday Tradition & Types',
    description:
      'The complete guide to Morocco\'s national dish. Friday tradition, 8 types, hand-rolling technique, best restaurants, and cooking classes across Morocco.',
    images: [`${BASE_URL}/images/photo-moroccan-couscous.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-couscous-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-couscous-guide`,
  name: 'Moroccan Couscous Guide 2026 | Friday Tradition, Types, Recipes & Best Restaurants',
  description:
    'Complete guide to Moroccan couscous: the sacred Friday tradition, regional types, hand-rolling technique, best restaurants, cooking classes, and dining etiquette.',
  url: `${BASE_URL}/morocco-couscous-guide`,
  image: `${BASE_URL}/images/photo-moroccan-couscous.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-couscous-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Couscous Guide', item: `${BASE_URL}/morocco-couscous-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why do Moroccans eat couscous on Friday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Friday is the holy day in Islam, and couscous is served after the midday prayer as a communal family meal. The tradition dates back centuries and is deeply ingrained in Moroccan culture. It is considered a blessing to share couscous with family and guests on Friday.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Moroccan and store-bought couscous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional Moroccan couscous is hand-rolled from semolina flour and steamed multiple times in a couscoussier, resulting in light, fluffy grains. Store-bought instant couscous is pre-steamed and dried. The texture and flavor difference is significant.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you eat couscous properly in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditionally, couscous is eaten with the right hand from a shared communal platter. Each person eats from the section directly in front of them. A spoon is acceptable for visitors unfamiliar with eating by hand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most popular types of Moroccan couscous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular types include seven-vegetable couscous (Friday classic), couscous tfaya (caramelized onions and raisins), lamb couscous, chicken couscous, fish couscous (coastal), sweet seffa, and barley couscous (belboula).',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I take a couscous cooking class in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooking classes are available in Marrakech, Fes, Essaouira, and Casablanca, starting from 300 MAD per person. Classes typically last 3-5 hours and include a market visit, hand-rolling the couscous, preparing the broth, and eating the meal together.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF COUSCOUS
   ═══════════════════════════════════════════════════════════════ */

const couscousTypes = [
  {
    name: 'Couscous with Seven Vegetables',
    arabic: 'Kuskus b Saba\' Khodra',
    icon: Wheat,
    region: 'Nationwide',
    occasion: 'Friday lunch (the classic)',
    price: 'From 60 MAD at local restaurants',
    description:
      'The undisputed king of Moroccan couscous. Seven vegetables are chosen seasonally: typically carrots, turnips, zucchini, cabbage, pumpkin, onions, and tomatoes, slow-cooked in a fragrant broth with lamb or chicken. The number seven is considered sacred in Moroccan culture, symbolizing completeness and blessing.',
    highlights: ['Most traditional variety', 'Served every Friday', 'Seasonal vegetable selection', 'Sacred number seven'],
  },
  {
    name: 'Couscous Tfaya',
    arabic: 'Kuskus b Tfaya',
    icon: Crown,
    region: 'Fes & Northern Morocco',
    occasion: 'Celebrations & weddings',
    price: 'From 80 MAD at restaurants',
    description:
      'An opulent, sweet-savory masterpiece from Fes. The couscous is crowned with tender lamb or chicken, then topped with tfaya: a slow-cooked mixture of caramelized onions, raisins, cinnamon, and honey that has been simmered for hours until deeply golden. Often garnished with toasted almonds.',
    highlights: ['Sweet-savory flavor profile', 'Caramelized onion topping', 'Festive and celebratory', 'Fes specialty'],
  },
  {
    name: 'Lamb Shoulder Couscous',
    arabic: 'Kuskus b Lham',
    icon: Flame,
    region: 'Nationwide',
    occasion: 'Friday lunch & special occasions',
    price: 'From 80 MAD at restaurants',
    description:
      'Featuring a whole lamb shoulder braised until falling off the bone, cooked in broth with chickpeas, onions, ras el hanout, saffron, and ginger. The most hearty and deeply satisfying variety of Moroccan couscous.',
    highlights: ['Fall-off-the-bone lamb', 'Rich chickpea broth', 'Most popular meat variety', 'Deeply aromatic'],
  },
  {
    name: 'Chicken Couscous',
    arabic: 'Kuskus b Djaj',
    icon: Utensils,
    region: 'Nationwide',
    occasion: 'Everyday & Friday lunch',
    price: 'From 55 MAD at local restaurants',
    description:
      'A lighter alternative using whole chicken simmered with preserved lemons, olives, and fresh herbs. Popular in households for its affordability. The chicken absorbs saffron and turmeric broth, turning golden and tender.',
    highlights: ['Lighter than lamb version', 'Preserved lemon flavor', 'More affordable option', 'Faster to prepare'],
  },
  {
    name: 'Fish Couscous',
    arabic: 'Kuskus b Hout',
    icon: Globe,
    region: 'Essaouira, Safi & coastal cities',
    occasion: 'Fridays in coastal regions',
    price: 'From 70 MAD at coastal restaurants',
    description:
      'A coastal specialty using fresh fish (sea bass, grouper, or monkfish) cooked in a spicy tomato-based broth with bell peppers, potatoes, and chermoula. A completely different flavor profile from inland couscous.',
    highlights: ['Coastal specialty', 'Spicy chermoula broth', 'Fresh local fish', 'Tomato-based sauce'],
  },
  {
    name: 'Sweet Seffa',
    arabic: 'Seffa Medfouna',
    icon: Sparkles,
    region: 'Fes & Northern Morocco',
    occasion: 'Celebrations, after meals',
    price: 'From 50 MAD at restaurants',
    description:
      'A dessert couscous: fine grains or vermicelli steamed, mounded into a cone, dusted with powdered sugar and cinnamon. Hidden inside is tender chicken (seffa medfouna means "buried seffa"). Toasted almonds and raisins complete the dish.',
    highlights: ['Sweet dessert couscous', 'Cinnamon and sugar topping', 'Hidden chicken inside', 'Celebration dish'],
  },
  {
    name: 'Barley Couscous (Belboula)',
    arabic: 'Belboula',
    icon: Wheat,
    region: 'Atlas Mountains & rural areas',
    occasion: 'Daily meals in rural households',
    price: 'From 45 MAD at local restaurants',
    description:
      'Made from coarse barley rather than semolina. Nuttier, earthier, and chewier in texture. Traditionally prepared by Berber communities and served with buttermilk (lben) or vegetable broth. Increasingly celebrated in upscale restaurants as a heritage dish.',
    highlights: ['Berber heritage dish', 'Nuttier flavor profile', 'Served with buttermilk', 'Rustic mountain cuisine'],
  },
  {
    name: 'Couscous with Dried Meat (Khlii)',
    arabic: 'Kuskus b Khlii',
    icon: HandPlatter,
    region: 'Fes & Meknes',
    occasion: 'Winter months & Eid season',
    price: 'From 90 MAD at specialty restaurants',
    description:
      'A winter specialty using khlii, Moroccan preserved dried meat cured in rendered fat, olive oil, and spices. The intensely flavored khlii gives the couscous a deep, smoky, umami-rich taste unlike any other variety.',
    highlights: ['Winter specialty', 'Preserved dried meat', 'Smoky umami flavor', 'Fes & Meknes tradition'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST COUSCOUS RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const bestRestaurants = [
  {
    name: 'Dar Zellij',
    city: 'Marrakech',
    type: 'Fine Dining Riad',
    price: 'From 200 MAD per person',
    description:
      'Set in a stunning 17th-century riad with intricate zellige tilework. Their Friday couscous with seven vegetables is considered one of the best in Marrakech. Reservations essential on Fridays.',
    specialty: 'Seven-vegetable couscous with lamb',
  },
  {
    name: 'Cafe Clock',
    city: 'Fes',
    type: 'Cultural Cafe',
    price: 'From 80 MAD per person',
    description:
      'A beloved Fes medina institution blending tradition with contemporary flair. The Friday couscous lunch is a communal event worth planning around, and their cooking workshops are excellent.',
    specialty: 'Couscous tfaya & cooking workshops',
  },
  {
    name: 'Al Fassia',
    city: 'Marrakech',
    type: 'Traditional Moroccan',
    price: 'From 150 MAD per person',
    description:
      'Run entirely by women since 1987, Al Fassia serves the most authentic Moroccan cuisine. Their couscous royal with lamb, chicken, and merguez is legendary.',
    specialty: 'Couscous royal (triple meat)',
  },
  {
    name: 'La Sqala',
    city: 'Casablanca',
    type: 'Garden Restaurant',
    price: 'From 120 MAD per person',
    description:
      'Housed in an 18th-century Portuguese fortification with a garden courtyard. Their lamb shoulder couscous with chickpeas and caramelized onions draws locals every Friday.',
    specialty: 'Lamb shoulder couscous',
  },
  {
    name: 'Restaurant Numero 7',
    city: 'Fes',
    type: 'Riad Restaurant',
    price: 'From 180 MAD per person',
    description:
      'A refined riad dining experience in the Fes medina. Their seffa medfouna (sweet couscous with hidden chicken) is the finest in the city, prepared to order using generations-old family recipes.',
    specialty: 'Seffa medfouna',
  },
  {
    name: 'Ocean Vagabond',
    city: 'Essaouira',
    type: 'Beach Restaurant',
    price: 'From 100 MAD per person',
    description:
      'A relaxed beachfront spot specializing in fresh seafood. Their fish couscous uses the morning catch from the harbor steps away. Ocean views make the Friday experience unforgettable.',
    specialty: 'Fish couscous with chermoula',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HAND-ROLLING STEPS
   ═══════════════════════════════════════════════════════════════ */

const handRollingSteps = [
  {
    step: 1,
    title: 'Prepare the Semolina',
    icon: Wheat,
    duration: '10 min',
    description:
      'Spread fine semolina flour (smida) on a large, shallow wooden or ceramic dish called a gsaa. Sprinkle with salted water and a drizzle of olive oil. The gsaa is traditionally round and wide, providing ample surface for rolling.',
    tip: 'Use medium-fine semolina for the best texture. Too fine produces paste; too coarse produces lumps.',
  },
  {
    step: 2,
    title: 'Roll the Grains',
    icon: HandPlatter,
    duration: '20 min',
    description:
      'Using circular motions with the palms and fingertips, work the wet semolina into tiny, uniform granules. The motion is gentle and rhythmic: rolling the grains between the palms while rotating them across the gsaa. This is the skill that takes years to perfect.',
    tip: 'Keep your hands slightly damp. The motion comes from the wrists and fingertips, not brute force.',
  },
  {
    step: 3,
    title: 'Sift and Size',
    icon: CheckCircle,
    duration: '10 min',
    description:
      'Pass the rolled couscous through a fine-mesh sieve to separate out any grains that are too large or too small. The large grains go back into the gsaa for re-rolling, while the fine dust falls through. Repeat until all grains are uniform.',
    tip: 'Professional Moroccan cooks produce grains so uniform they look machine-made. Expect your first batch to be mixed.',
  },
  {
    step: 4,
    title: 'First Steaming',
    icon: Flame,
    duration: '20 min',
    description:
      'Place the rolled couscous into the top tier of a couscoussier (a two-part steamer called a kiskas). The broth simmers in the bottom pot while steam rises through the couscous. Do not cover the top. Steam until the couscous is hot throughout.',
    tip: 'Seal the joint between the two pots with a strip of cloth dipped in flour paste to prevent steam escaping sideways.',
  },
  {
    step: 5,
    title: 'Break, Fluff & Second Steaming',
    icon: Utensils,
    duration: '30 min',
    description:
      'Remove the couscous, spread it in the gsaa, and break up any clumps with your fingers. Sprinkle with salted water and olive oil or butter. Rake through gently to separate every grain, then return to the couscoussier for a second steaming. Repeat the fluffing process after. Some cooks do a third steaming for maximum lightness.',
    tip: 'Use a fork or your fingers to gently separate the grains. Never stir vigorously or you will crush them. The total process takes about 2 hours.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: COOKING CLASS LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const cookingClasses = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-cooking-class.webp',
    description:
      'The most popular city for cooking classes. Marrakech offers dozens of options from budget-friendly group classes in the medina to private chef-led experiences in luxury riads. Most include a souk visit to buy ingredients.',
    topPicks: [
      { name: 'La Maison Arabe', type: 'Luxury', price: 'From 650 MAD' },
      { name: 'Souk Cuisine', type: 'Group Class', price: 'From 350 MAD' },
      { name: 'Amal Women\'s Center', type: 'Social Enterprise', price: 'From 300 MAD' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/hero-fes-medina.webp',
    description:
      'Fes is the culinary capital of Morocco, and learning to make couscous here feels especially authentic. Classes are often held in family homes within the ancient medina, taught by women who learned from their grandmothers.',
    topPicks: [
      { name: 'Palais Amani', type: 'Riad Class', price: 'From 500 MAD' },
      { name: 'Cafe Clock', type: 'Cultural Workshop', price: 'From 400 MAD' },
      { name: 'Dar Namir', type: 'Home Cooking', price: 'From 350 MAD' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Globe,
    image: '/images/hero-essaouira.webp',
    description:
      'Cooking classes in Essaouira focus on the coastal variant: fish couscous with chermoula. Many classes begin at the fishing port, selecting the freshest catch, before heading to a kitchen overlooking the Atlantic.',
    topPicks: [
      { name: 'L\'Atelier Madada', type: 'Boutique Class', price: 'From 450 MAD' },
      { name: 'Khmissa Cooking', type: 'Home Kitchen', price: 'From 350 MAD' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DINING ETIQUETTE RULES
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Eat with Your Right Hand',
    icon: HandPlatter,
    description:
      'Traditionally, couscous is eaten with the right hand only. Form a small ball of couscous with your fingertips and bring it to your mouth. Using a spoon is perfectly acceptable for visitors.',
  },
  {
    rule: 'Eat from Your Section',
    icon: Users,
    description:
      'When eating from a shared platter, eat only from the area directly in front of you. Never reach across to another person\'s section. The host will place choice pieces of meat and vegetables near you.',
  },
  {
    rule: 'Wait for the Host',
    icon: ShieldCheck,
    description:
      'Do not begin eating until the host says "Bismillah" (in the name of God). This is the signal that the meal has begun. Rushing to eat before this is considered extremely rude.',
  },
  {
    rule: 'Accept Second Helpings',
    icon: Heart,
    description:
      'Your host will insist you eat more. Refusing too quickly is seen as impolite. Eat generously, but when you are truly full, place your hand over your heart and say "Alhamdulillah" (praise be to God).',
  },
  {
    rule: 'Wash Hands & Drink the Broth',
    icon: CheckCircle,
    description:
      'A pitcher of water and basin is passed for hand-washing before the meal. The broth (marka) is served separately and ladled over couscous. It is also acceptable to drink it from a bowl. Never waste the broth.',
  },
  {
    rule: 'Thank the Cook',
    icon: Star,
    description:
      'After the meal, say "Allah y\'atik sa7a" (may God give you health). Making couscous takes hours of preparation and acknowledging the effort is deeply appreciated in Moroccan culture.',
  },
  {
    rule: 'Never Rush the Meal',
    icon: Clock,
    description:
      'A Friday couscous meal is a leisurely affair lasting 1-2 hours. It is a time for family and conversation. Eating quickly and leaving is considered disrespectful to both the food and the host.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCouscousGuidePage() {
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
            backgroundImage: 'url(/images/photo-moroccan-couscous.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Moroccan Couscous Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Utensils className="w-4 h-4" />
            Food &amp; Culinary Heritage
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Couscous Guide:
            <br className="hidden md:block" /> The Friday Tradition &amp; Beyond
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the sacred Friday lunch to eight regional varieties, hand-rolling technique,
            and the best restaurants across Morocco. Everything you need to know about the
            kingdom&apos;s most iconic dish.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: History of Couscous ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The History of Couscous in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Couscous is not just food in Morocco. It is identity. Every Friday, from the Rif Mountains
                to the Saharan oases, millions of Moroccan families gather around a single large platter
                of steaming couscous. It is the one meal that unites the entire nation.
              </p>
              <p>
                The origins date back to the Berber (Amazigh) peoples of North Africa, with archaeological
                evidence of couscoussier-like pots in tombs from the 9th century. The technique of rolling
                and steaming semolina was perfected over centuries by Berber women, passing the art from
                mother to daughter. The Arabs enriched it with new spices, dried fruits, and elaborate
                broths. In 2020, UNESCO inscribed couscous on the Intangible Cultural Heritage list,
                recognizing it as a shared tradition of Morocco, Algeria, Tunisia, and Mauritania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Friday Tradition ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Sacred Friday Couscous Tradition
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every Friday, Morocco pauses. Shops close, families reunite, and the nation eats couscous together.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Why Friday?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Friday is the holy day in Islam, and the midday prayer (Salat al-Jumu&apos;ah) is the most
                important of the week. After prayer, families gather at the eldest family member&apos;s home
                for couscous. The tradition is so deeply rooted that asking a Moroccan &quot;What did you eat
                on Friday?&quot; is rhetorical. The answer is always couscous. Restaurants across Morocco
                serve couscous as their Friday special, and many establishments serve nothing else for the
                midday meal.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Friday Morning Ritual
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Preparation begins early. By 8 AM, the couscous is being hand-rolled. The broth starts
                simmering by 9 AM. The air fills with the aroma of onions, saffron, and cinnamon. By noon,
                the couscoussier is steaming for the final time, and the family platter is warming. After
                the men return from Friday prayer, the meal is served. It is the only time the extended
                family eats together each week. Turning away an unexpected guest on Friday is nearly
                unthinkable. Many families prepare extra portions for visitors or neighbors who may be alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Couscous ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            8 Types of Moroccan Couscous
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Moroccan couscous comes in far more varieties than most visitors realize. Each region and occasion has its own signature version.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season, location, and restaurant.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {couscousTypes.map((type, index) => {
              const TypeIcon = type.icon;
              return (
                <div key={type.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{type.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{type.region}</span>
                        <span className="flex items-center gap-1"><TypeIcon className="w-3.5 h-3.5" />{type.occasion}</span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-2">{type.price}</div>
                  <p className="text-sm italic text-[var(--text-muted)] mb-1">{type.arabic}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{type.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {type.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />{highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Variations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Couscous Variations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every region of Morocco puts its own stamp on couscous. The base technique is the same, but ingredients, spices, and traditions vary dramatically.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Marrakech &amp; the South
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Marrakech couscous tends to be sweeter and more aromatic, reflecting the city&apos;s love
                of spice blends. Expect generous use of ras el hanout, saffron, cinnamon, and sometimes
                a sprinkle of sugar on the finished dish. Lamb is the preferred meat, often cooked until
                it can be pulled apart with fingers. The pumpkin and caramelized onion topping is a
                Marrakchi specialty.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fes &amp; Northern Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Fes is the birthplace of couscous tfaya and seffa, the most refined and elaborate varieties.
                Fassi cooks use more butter than olive oil, more preserved ingredients (dried fruits,
                preserved lemons, khlii), and more complex spice combinations. The couscous in Fes is
                often finer-grained and more delicate, steamed more times for maximum lightness.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Atlantic Coast &amp; Atlas Mountains
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Coastal cities (Essaouira, Safi, El Jadida) replace meat with fresh fish cooked in a spicy
                tomato-based broth with bell peppers and chermoula. In the High Atlas and Middle Atlas,
                barley couscous (belboula) is more common than semolina, served with buttermilk (lben)
                poured over the top. Berber couscous features fewer vegetables but more aromatic wild herbs
                gathered from the mountainside: thyme, oregano, and wild mint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hand-Rolling Technique ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ChefHat className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Art of Hand-Rolling Couscous
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hand-rolling couscous is a skill that Moroccan women have perfected over centuries. Here is the traditional process, step by step.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {handRollingSteps.map((step) => (
                  <div key={step.step} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <span className="text-white font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="card-moroccan p-5 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{step.title}</h3>
                        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                          <Clock className="w-3 h-3" />{step.duration}
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{step.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]"><span className="font-semibold text-[var(--text-primary)]">Tip:</span> {step.tip}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Restaurants ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Couscous Restaurants in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From hole-in-the-wall neighborhood gems to refined riad dining rooms, these are the places where couscous reaches its peak.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices per person. Seasonal pricing may apply during peak tourist months. Many serve couscous only on Fridays.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestRestaurants.map((restaurant, index) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-[var(--color-accent)]">#{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{restaurant.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{restaurant.city}</span>
                      <span className="flex items-center gap-1"><Building className="w-3.5 h-3.5" />{restaurant.type}</span>
                    </div>
                  </div>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">{restaurant.price}</div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{restaurant.description}</p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] bg-[var(--surface-muted)] p-2 rounded">
                  <Star className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                  <span><span className="font-semibold text-[var(--text-primary)]">Signature:</span> {restaurant.specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cooking Classes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ChefHat className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Couscous Cooking Classes by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn to make authentic couscous from scratch. Classes include market visits, hand-rolling technique, and a shared meal.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cookingClasses.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-44">
                    <img src={city.image} alt={`Cooking class in ${city.city}, Morocco`} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CityIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">{city.city}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{city.description}</p>
                    <div className="space-y-2">
                      {city.topPicks.map((pick, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                            <span className="font-medium text-[var(--text-primary)]">{pick.name}</span>
                          </div>
                          <span className="text-xs text-[var(--color-accent)] font-semibold">{pick.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to Eat Couscous Properly ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Couscous Dining Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eating couscous in Morocco is a communal ritual with its own set of customs. Follow these guidelines for a respectful and authentic experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((rule) => {
              const RuleIcon = rule.icon;
              return (
                <div key={rule.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3"><RuleIcon className="w-5 h-5 text-[var(--color-accent)]" /></div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{rule.rule}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{rule.description}</p>
                </div>);
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">Moroccan Couscous Traditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/photo-couscous-traditional.webp', alt: 'Traditional Moroccan couscous being prepared by hand', label: 'Hand-Rolled Couscous' },
              { src: '/images/photo-couscous.webp', alt: 'Platter of Moroccan couscous with vegetables and meat', label: 'Friday Couscous Platter' },
              { src: '/images/art-moroccan-couscous.webp', alt: 'Moroccan couscous with traditional serving ware', label: 'Traditional Serving Style' },
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

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Couscous Lovers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Day to Eat Couscous
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Friday is the day. Most restaurants serve their best couscous on Friday between 12 PM
                and 3 PM. Some restaurants only serve couscous on Fridays. If you are in Morocco
                over a Friday, make couscous your lunch plan. Arrive by noon for the freshest serving.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Price Expectations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Local neighborhood restaurants serve generous couscous plates from 40-80 MAD. Mid-range
                restaurants charge from 100-180 MAD. Fine dining riad restaurants start from 200 MAD per
                person. Prices may increase during peak tourist season (October-April) and holidays.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tourist Trap Warning
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avoid restaurants in the main squares (Jemaa el-Fna in Marrakech, for example) that serve
                couscous made from instant pre-steamed grains. Authentic couscous is steamed fresh in a
                couscoussier. Ask if the couscous is &quot;bel yed&quot; (by hand) or &quot;maghrabi&quot; (traditionally steamed).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ordering Couscous
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                At restaurants, couscous is usually available only at lunchtime (12-3 PM), especially on
                Fridays. It is rarely served at dinner. When ordering, specify your meat preference: lamb
                (lham), chicken (djaj), or vegetarian (khodra). The broth is always served on the side.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Invited to a Moroccan Home?
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Accept enthusiastically. Bring pastries or fruit as a gift. Remove your shoes at the door.
                The host will insist you eat more. This is one of the most authentic cultural experiences
                Morocco offers. Buy a couscoussier (from 80 MAD) at the souk to recreate the dish at home.
              </p>
            </div>
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
                Why do Moroccans eat couscous on Friday?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Friday is the holy day in Islam, and couscous is served after the midday prayer as a
                communal family meal. The tradition dates back centuries and is deeply ingrained in Moroccan
                culture. It is considered a blessing (baraka) to share couscous with family and guests on
                Friday. Refusing to eat couscous on Friday or serving a different dish would be seen as
                breaking with a sacred custom.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between Moroccan and store-bought couscous?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional Moroccan couscous is hand-rolled from semolina flour and steamed two to three
                times in a couscoussier, resulting in light, fluffy, separate grains that absorb the
                fragrant broth. Store-bought instant couscous is industrially pre-steamed and dried,
                requiring only boiling water. The texture and flavor difference is enormous. Once you
                have eaten properly steamed Moroccan couscous, the instant version will never satisfy.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do you eat couscous properly in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditionally, couscous is eaten with the right hand from a shared communal platter. Each
                person eats from the section directly in front of them. Form small balls of couscous with
                your fingertips and bring them to your mouth. The host places choice pieces of meat and
                vegetables in front of honored guests. Using a spoon is perfectly acceptable for visitors
                who are not comfortable eating by hand.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I take a couscous cooking class in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Cooking classes are available in Marrakech, Fes, Essaouira, and Casablanca, starting from
                300 MAD per person. Classes last 3-5 hours and include a market visit, hand-rolling technique,
                broth preparation, and eating the meal together. Book 2-3 days in advance during peak season.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Moroccan couscous gluten-free?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No. Traditional couscous is made from durum wheat semolina and contains gluten.
                Barley couscous (belboula) also contains gluten. Some upscale restaurants offer corn
                semolina as an alternative. Always inform the kitchen of dietary restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-tagine-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Tagine Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s other iconic dish: the slow-cooked tagine in all its regional varieties.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-etiquette" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Food Etiquette in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential dining customs, table manners, and cultural dos and don&apos;ts for eating in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cooking-experience" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ChefHat className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Experiences
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hands-on cooking classes and culinary workshops across Morocco for food-loving travelers.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spice-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spice Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Your guide to ras el hanout, saffron, cumin, and every essential spice in Moroccan cuisine.
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
