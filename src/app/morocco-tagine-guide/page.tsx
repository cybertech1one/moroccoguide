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
  Flame,
  UtensilsCrossed,
  BookOpen,
  Crown,
  Award,
  ShoppingBag,
  Leaf,
  Globe,
  ThumbsUp,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Tagine Guide 2026 | Recipes, Types, History & Best Restaurants',
  description:
    'Complete guide to Moroccan tagine: history, types (chicken, lamb, kefta, vegetable, fish), best restaurants, cooking classes, recipe tips, and how to buy an authentic tagine pot. From 30 MAD street stalls to fine dining.',
  keywords: [
    'Moroccan tagine guide',
    'best tagine Morocco',
    'tagine recipes',
    'types of tagine',
    'where to eat tagine Morocco',
    'Moroccan tagine history',
    'chicken tagine recipe',
    'lamb tagine Morocco',
    'kefta tagine',
    'vegetable tagine recipe',
    'fish tagine Morocco',
    'tagine cooking class Morocco',
    'buy tagine pot Morocco',
    'Moroccan food guide',
    'tagine spices Morocco',
    'Marrakech tagine restaurants',
    'Fes tagine restaurants',
    'traditional Moroccan cooking',
    'tagine prices Morocco 2026',
    'best Moroccan food experiences',
  ],
  openGraph: {
    title: 'Morocco Tagine Guide 2026 | Recipes, Types, History & Best Restaurants',
    description:
      'Discover everything about Moroccan tagine. From the ancient Berber origins to the best restaurants in every city. Recipes, cooking classes, spice guides, and tips for buying an authentic tagine pot.',
    url: `${BASE_URL}/morocco-tagine-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tagine.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan tagine dish with tender meat, vegetables, and aromatic spices served in a clay pot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Tagine Guide 2026 | Complete Culinary Guide',
    description:
      'From 30 MAD street-stall tagines to fine-dining creations. Complete guide to Morocco\'s most iconic dish: history, recipes, types, restaurants, and cooking classes.',
    images: [`${BASE_URL}/images/hero-tagine.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-tagine-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-tagine-guide`,
  name: 'Morocco Tagine Guide 2026 | Recipes, Types, History & Best Restaurants',
  description:
    'Complete guide to Moroccan tagine: history, types, best restaurants, cooking classes, recipe tips, and how to buy an authentic tagine pot.',
  url: `${BASE_URL}/morocco-tagine-guide`,
  image: `${BASE_URL}/images/hero-tagine.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-tagine-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Tagine Guide', item: `${BASE_URL}/morocco-tagine-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Moroccan tagine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tagine is both a slow-cooked Moroccan stew and the conical clay pot it is cooked in. The cone-shaped lid traps steam and returns condensation to the dish, creating incredibly tender meat and deeply concentrated flavors without added water. It is Morocco\'s most iconic dish, dating back to the Berber civilizations of the 9th century.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most popular types of tagine in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular types are: chicken tagine with preserved lemons and olives (the national favorite), lamb tagine with prunes and almonds, kefta (meatball) tagine with eggs and tomato, vegetable tagine with seasonal produce, and fish tagine popular in coastal cities like Essaouira. Each region has its own signature variations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a tagine cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street-stall and local eatery tagines start from 30 MAD. Mid-range restaurant tagines range from 60 to 120 MAD. Fine dining tagines at upscale restaurants cost from 150 to 350 MAD. Prices may vary seasonally and by location, with tourist areas generally charging more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I take a tagine cooking class in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cooking classes are widely available in Marrakech, Fes, and Essaouira. They typically start from 350 MAD per person and include a market tour, hands-on cooking instruction, and a shared meal. Popular options include La Maison Arabe and Amal Center in Marrakech, and Palais Amani in Fes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring a tagine pot home from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, tagine pots are one of the most popular souvenirs. Decorative tagines start from 50 MAD while functional cooking tagines start from 80 MAD. When buying, ensure you get an unglazed or food-safe glazed pot. Potters in Safi and Fes produce the finest cooking tagines. Pack carefully for travel or ship via a local service.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF TAGINE
   ═══════════════════════════════════════════════════════════════ */

const tagineTypes = [
  {
    name: 'Chicken Tagine with Preserved Lemons & Olives',
    arabic: 'Djaj M\'chermel',
    icon: Star,
    region: 'Nationwide (national favorite)',
    price: 'From 50 MAD',
    description:
      'The quintessential Moroccan tagine. Bone-in chicken is slow-cooked with saffron, ginger, and turmeric, then topped with briny preserved lemons and cracked green olives. The sauce is golden, tangy, and deeply savory. Every Moroccan home has its own version, and it is the dish most visitors fall in love with first.',
    keyIngredients: ['Preserved lemons', 'Green olives', 'Saffron', 'Ginger', 'Fresh coriander'],
  },
  {
    name: 'Lamb Tagine with Prunes & Almonds',
    arabic: 'Lham B\'barkok',
    icon: Crown,
    region: 'Fes, Meknes, Middle Atlas',
    price: 'From 70 MAD',
    description:
      'A masterpiece of Moroccan sweet-savory cooking. Shoulder or shank of lamb is braised for hours with cinnamon, honey, and ras el hanout until it falls off the bone. Soaked prunes and toasted almonds are added near the end, and the dish is finished with a drizzle of honey and a dusting of sesame seeds.',
    keyIngredients: ['Prunes', 'Toasted almonds', 'Cinnamon', 'Honey', 'Ras el hanout'],
  },
  {
    name: 'Kefta Tagine with Eggs & Tomato',
    arabic: 'Kefta Mkaouara',
    icon: Flame,
    region: 'Nationwide (especially street food)',
    price: 'From 35 MAD',
    description:
      'Hand-rolled spiced meatballs (beef or lamb) are simmered in a rich, cumin-laced tomato sauce until the flavors meld. Just before serving, eggs are cracked into the bubbling sauce and poached. Eaten with crusty Moroccan bread for scooping. This is Morocco\'s ultimate comfort food and a staple of everyday cooking.',
    keyIngredients: ['Ground beef or lamb', 'Cumin', 'Paprika', 'Tomatoes', 'Eggs'],
  },
  {
    name: 'Vegetable Tagine',
    arabic: 'Tagine B\'khodra',
    icon: Leaf,
    region: 'Nationwide',
    price: 'From 40 MAD',
    description:
      'A celebration of seasonal produce. Root vegetables like carrots, turnips, and potatoes are layered with zucchini, bell peppers, and tomatoes, then slow-cooked with preserved lemons, olives, and aromatic spices. During spring, fava beans and artichoke hearts feature prominently. A naturally vegan dish that proves tagine does not need meat to shine.',
    keyIngredients: ['Seasonal vegetables', 'Preserved lemons', 'Chickpeas', 'Ras el hanout', 'Fresh herbs'],
  },
  {
    name: 'Fish Tagine (Hout)',
    arabic: 'Tagine Hout',
    icon: Globe,
    region: 'Essaouira, Agadir, coastal cities',
    price: 'From 60 MAD',
    description:
      'A coastal specialty where firm white fish (sea bass, monkfish, or sea bream) is baked atop a bed of sliced potatoes, tomatoes, and bell peppers with a chermoula marinade of cilantro, garlic, cumin, and paprika. Preserved lemons and olives crown the top. The fish stays moist under the tagine lid, absorbing all the aromatic flavors.',
    keyIngredients: ['White fish', 'Chermoula paste', 'Potatoes', 'Bell peppers', 'Preserved lemons'],
  },
  {
    name: 'Lamb Tagine with Artichokes & Peas',
    arabic: 'Lham B\'qoq wal Jelbana',
    icon: Sparkles,
    region: 'Fes, Meknes (spring specialty)',
    price: 'From 80 MAD',
    description:
      'A springtime delicacy. Tender lamb braised with fresh artichoke hearts, green peas, and broad beans in a light lemon-saffron sauce. A lighter departure from the rich sweet preparations, highlighting fresh garden flavors of the Moroccan countryside.',
    keyIngredients: ['Artichoke hearts', 'Green peas', 'Broad beans', 'Saffron', 'Lemon juice'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST RESTAURANTS FOR TAGINE
   ═══════════════════════════════════════════════════════════════ */

const bestRestaurants = [
  { name: 'Al Fassia', city: 'Marrakech', specialty: 'Lamb tagine with caramelized pears', price: 'From 120 MAD', description: 'Run entirely by women, Al Fassia serves refined traditional cuisine. Their lamb tagine with caramelized pears is legendary. Reservations essential.' },
  { name: 'Dar Hatim', city: 'Fes', specialty: 'Lamb tagine with prunes & almonds', price: 'From 150 MAD', description: 'A family-run riad restaurant in the Fes medina. Recipes passed down five generations. The lamb tagine here is among the finest in Morocco.' },
  { name: 'Chez Lamine Hadj Mustapha', city: 'Marrakech', specialty: 'Lamb tangia (Marrakech cousin of tagine)', price: 'From 60 MAD', description: 'A Jemaa el-Fnaa institution since the 1960s. The tangia — lamb slow-cooked in an urn in the hammam ashes — is Marrakech\'s slow-cooked perfection.' },
  { name: 'Le Jardin', city: 'Marrakech', specialty: 'Chicken tagine with preserved lemons', price: 'From 90 MAD', description: 'Set in a lush garden courtyard, this elegant restaurant serves beautifully presented tagines. The chicken with preserved lemons is silky and aromatic.' },
  { name: 'Nur', city: 'Fes', specialty: 'Modern Moroccan tagine interpretations', price: 'From 180 MAD', description: 'A rooftop fine-dining restaurant offering contemporary takes on traditional tagine with ancestral Fassi recipes and modern plating technique.' },
  { name: 'Restaurant Sam', city: 'Essaouira', specialty: 'Fish tagine with chermoula', price: 'From 80 MAD', description: 'Overlooking the harbor, Sam\'s serves the freshest fish tagine in Essaouira. The catch arrives daily, and the chermoula is made from scratch each morning.' },
  { name: 'Cafe Clock', city: 'Fes & Marrakech', specialty: 'Camel tagine', price: 'From 90 MAD', description: 'Famous for their camel burger, but the camel tagine is the hidden gem. Slow-cooked camel meat with dates and cinnamon — tender, rich, and unique.' },
  { name: 'Amal Center', city: 'Marrakech', specialty: 'Daily rotating tagine', price: 'From 60 MAD', description: 'A social enterprise training underprivileged women in hospitality. The daily tagine changes with the season, always homestyle and outstanding.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COOKING CLASSES
   ═══════════════════════════════════════════════════════════════ */

const cookingClasses = [
  { name: 'La Maison Arabe', city: 'Marrakech', price: 'From 600 MAD per person', duration: '4 hours', includes: 'Market tour, hands-on cooking, full meal, recipe booklet', description: 'The original Marrakech cooking school, established in 1946. Learn from dadas (traditional cooks) in a stunning riad kitchen.' },
  { name: 'Amal Center', city: 'Marrakech', price: 'From 350 MAD per person', duration: '3 hours', includes: 'Cooking lesson, shared meal, supporting women\'s empowerment', description: 'Learn tagine alongside Moroccan women training for careers in hospitality. Authentic recipes, authentic heart.' },
  { name: 'Palais Amani Cooking School', city: 'Fes', price: 'From 500 MAD per person', duration: '4 hours', includes: 'Market visit, tagine masterclass, full lunch, organic ingredients', description: 'Cook with ingredients from the riad\'s own organic garden. The Fassi tagine techniques taught here go back centuries.' },
  { name: 'Atelier de Cuisine Madada', city: 'Essaouira', price: 'From 450 MAD per person', duration: '3.5 hours', includes: 'Fish market visit, seafood tagine lesson, meal with wine', description: 'Specializing in coastal cuisine, this class teaches fish tagine with a visit to the legendary Essaouira fish market.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL SPICES
   ═══════════════════════════════════════════════════════════════ */

const essentialSpices = [
  { name: 'Ras el Hanout', use: 'The king of Moroccan spice blends. Up to 30+ spices including rose petals, cardamom, and cinnamon. Essential for lamb and chicken tagines.', price: 'From 30 MAD / 100g' },
  { name: 'Saffron (Zaafrane)', use: 'Premium saffron from Taliouine. Essential for chicken tagine. Adds golden color and earthy sweetness.', price: 'From 15 MAD / gram' },
  { name: 'Cumin (Kamoun)', use: 'The backbone of Moroccan cooking. Used in virtually every tagine, especially kefta. Adds warmth and depth.', price: 'From 10 MAD / 100g' },
  { name: 'Ginger (Skinjbir)', use: 'Ground ginger appears in most tagines for warm, slightly sweet flavor. Fresh ginger used in modern recipes.', price: 'From 15 MAD / 100g' },
  { name: 'Turmeric (Kherkoum)', use: 'Provides golden-yellow color. Mild, earthy flavor. Always paired with saffron for depth.', price: 'From 10 MAD / 100g' },
  { name: 'Cinnamon (Karfa)', use: 'Critical in sweet-savory tagines, especially lamb with prunes. Used as ground powder and whole sticks.', price: 'From 15 MAD / 100g' },
  { name: 'Paprika (Felfla Hamra)', use: 'Sweet paprika colors the sauce and adds mild, fruity warmth. Smoked varieties appear in some regional tagines.', price: 'From 10 MAD / 100g' },
  { name: 'Preserved Lemons (Hamad M\'rakad)', use: 'Whole lemons preserved in salt and lemon juice 30+ days. Intense citrus-salt depth, indispensable in chicken tagine.', price: 'From 5 MAD each' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { item: 'Street-stall kefta tagine', price: 'From 30 MAD', note: 'Local eateries in medina back streets' },
  { item: 'Local restaurant chicken tagine', price: 'From 50 MAD', note: 'Where Moroccans eat daily' },
  { item: 'Mid-range restaurant tagine', price: 'From 80 MAD', note: 'Tourist-friendly with full menu' },
  { item: 'Fine dining tagine', price: 'From 150 MAD', note: 'Upscale riads and restaurants' },
  { item: 'Cooking class (per person)', price: 'From 350 MAD', note: 'Includes market tour and meal' },
  { item: 'Decorative tagine pot (souvenir)', price: 'From 50 MAD', note: 'Painted ceramic, not for cooking' },
  { item: 'Cooking tagine pot (unglazed)', price: 'From 80 MAD', note: 'Functional clay pot for home use' },
  { item: 'Premium artisan tagine pot', price: 'From 200 MAD', note: 'Handmade by master potters in Safi' },
  { item: 'Ras el hanout blend (100g)', price: 'From 30 MAD', note: 'Quality varies enormously by source' },
  { item: 'Saffron (1 gram)', price: 'From 15 MAD', note: 'Taliouine saffron is the finest' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const regionalVariations = [
  {
    region: 'Marrakech & the South',
    icon: Flame,
    style: 'Bold, sweet-savory, generous with spice. Lamb with prunes, chicken with preserved lemons. The tangia (a cousin of tagine cooked in hammam ashes) is unique to Marrakech.',
    signature: 'Tangia Marrakchia',
  },
  {
    region: 'Fes & Meknes',
    icon: Crown,
    style: 'Refined, complex, and considered the pinnacle of Moroccan gastronomy. More subtle spicing, use of artichokes, quinces, and pears. Fassi tagines are works of culinary art.',
    signature: 'Lamb with quince (sfargel)',
  },
  {
    region: 'Essaouira & the Coast',
    icon: Globe,
    style: 'Seafood-driven. Fish tagine with chermoula, shrimp tagine with tomatoes. Lighter spicing lets the freshness of the catch shine. Atlantic herbs and seaweed sometimes appear.',
    signature: 'Fish tagine with chermoula',
  },
  {
    region: 'Atlas Mountains & Berber Country',
    icon: Sparkles,
    style: 'Hearty, rustic, and mountain-simple. Root vegetables, lamb or goat, minimal spicing. Cooked over wood fire. These are the original tagines, predating the Arab influence.',
    signature: 'Berber tagine (mountain vegetable)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTagineGuidePage() {
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
            backgroundImage: 'url(/images/hero-tagine.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Tagine Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <UtensilsCrossed className="w-4 h-4" />
            Food &amp; Culinary Culture
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Complete Guide to Moroccan Tagine:
            <br className="hidden md:block" /> Recipes, Types &amp; Where to Eat
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 30 MAD street-stall kefta to refined Fassi lamb with quince. Your complete
            guide to Morocco&apos;s most iconic dish: history, recipes, restaurants, and cooking classes.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Tagine: Morocco&apos;s Culinary Soul
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                If Morocco had a single dish to represent its entire culinary identity, it would be the tagine.
                Named after the conical clay pot it is cooked in, the tagine is not merely a meal. It is a
                ritual, a social act, and a connection to centuries of Berber, Arab, Andalusian, and French
                culinary influence layered upon one another like the ingredients in the pot itself.
              </p>
              <p>
                The genius of the tagine lies in its simplicity. The cone-shaped lid captures rising steam and
                returns it as condensation, basting the food continuously. No added water is needed. The result
                is meat so tender it falls from the bone, vegetables that melt into the sauce, and flavors so
                concentrated they linger for hours. Every family, every region, every cook has their own version,
                and every version tells a story.
              </p>
              <p>
                Whether you eat a 30 MAD kefta tagine at a roadside stall in the Atlas or a 350 MAD lamb
                masterpiece at a Fes palace restaurant, you are tasting something that has been perfected over
                a thousand years. This guide covers everything you need to know about this extraordinary dish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── History of Tagine ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The History of Tagine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A dish shaped by geography, trade, and the genius of Morocco&apos;s cooks across centuries.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Berber Origins (9th Century)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The tagine pot was invented by the Berbers (Amazigh) of North Africa. Nomadic communities needed
                a portable cooking vessel that could produce tender meals with minimal water, a precious resource
                in the arid landscape. The clay pot with its distinctive cone trapped steam and recycled moisture,
                making it perfect for slow-cooking tough cuts of meat and root vegetables over a low charcoal fire.
                The earliest tagines were simple affairs: lamb or goat with onions, whatever herbs grew wild, and
                a handful of spices traded across the Sahara.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Arab & Andalusian Influence (11th-15th Century)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Arab conquest brought saffron, ginger, cinnamon, and the concept of sweet-savory cooking
                from Persian cuisine. The Andalusian Moors, expelled from Spain between the 11th and 15th
                centuries, settled in Fes and brought almonds, dried fruits, and refined cooking techniques. This
                fusion created the complex, layered tagines we know today: lamb with prunes and almonds, chicken
                with preserved lemons, and the elaborate palace cuisine of Fes. The use of preserved lemons, now
                synonymous with Moroccan cooking, likely originated in this period.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                French Colonial Period & Modern Era
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The French Protectorate (1912-1956) introduced restaurant culture and plated presentation to
                Moroccan cuisine. After independence, tagine became a symbol of national identity. Today, tagine
                occupies a dual role: it is both an everyday home-cooked meal and a showcase dish at the finest
                restaurants. Modern chefs experiment with new ingredients while respecting the fundamental
                technique. The tagine pot itself has changed little in a thousand years, which speaks to the
                perfection of its design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Tagine ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Moroccan Tagine
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the beloved chicken with preserved lemons to coastal fish tagines, each variety tells a story of its region.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices at local restaurants. Seasonal pricing applies, and tourist-area restaurants may charge more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tagineTypes.map((tagine) => {
              const TagineIcon = tagine.icon;
              return (
                <div key={tagine.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TagineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tagine.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] italic">{tagine.arabic}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {tagine.region}
                    </span>
                    <span className="inline-block px-2 py-0.5 font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {tagine.price}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tagine.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {tagine.keyIngredients.map((ingredient, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {ingredient}
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
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Tagine Variations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every region of Morocco puts its own stamp on the tagine. Geography, local produce, and cultural heritage shape distinct styles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {regionalVariations.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {region.region}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{region.style}</p>
                  <div className="flex items-center gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Star className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    <p className="text-xs text-[var(--text-primary)]">
                      <span className="font-semibold">Signature dish:</span> {region.signature}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tagine Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for tagine meals, cooking classes, and tagine pots across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods. Prices in tourist areas like Jemaa el-Fnaa may be higher.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Restaurants ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Restaurants for Tagine in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From legendary street stalls to palace restaurants, these are the places where tagine reaches its peak.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestRestaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <MapPin className="w-3.5 h-3.5" />
                      {restaurant.city}
                    </div>
                  </div>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    {restaurant.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{restaurant.description}</p>
                <div className="flex items-center gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <Star className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  <p className="text-xs text-[var(--text-primary)]">
                    <span className="font-semibold">Must-try:</span> {restaurant.specialty}
                  </p>
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
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tagine Cooking Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Learn to make tagine yourself. These hands-on classes include market tours, cooking instruction, and a shared meal.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {cookingClasses.map((cls) => (
              <div key={cls.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {cls.name}
                </h3>
                <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {cls.city}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {cls.duration}
                  </span>
                  <span className="text-[var(--color-accent)] font-semibold">{cls.price}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{cls.description}</p>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Includes:</span> {cls.includes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essential Spices ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Tagine Spices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The spices are the soul of any tagine. Here are the essential ones to know, taste, and bring home.
          </p>

          <div className="space-y-4">
            {essentialSpices.map((spice) => (
              <div key={spice.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {spice.name}
                  </h3>
                  <span className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-semibold shrink-0 ml-4">
                    <DollarSign className="w-3 h-3" />
                    {spice.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{spice.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Buying a Tagine Pot ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Buying a Tagine Pot in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A tagine pot is the perfect souvenir. Here is what to look for, where to buy, and how to use it at home.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Cooking vs. Decorative
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Decorative tagines (from 50 MAD) are painted and glazed for display only. Cooking tagines (from 80 MAD)
                are made from unglazed or food-safe glazed clay. Ask the vendor explicitly whether the pot is safe for
                cooking. If in doubt, buy unglazed. Avoid brightly painted pots for cooking, as the paint may contain lead.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Where to Buy
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The finest cooking tagines come from Safi (Morocco&apos;s pottery capital) and Fes. In Marrakech, head to
                the potters&apos; souk near Bab Ghmat. In Fes, visit the Ain Nokbi pottery quarter. For fair prices without
                haggling, try Ensemble Artisanal (government-fixed prices) in any major city.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Flame className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Seasoning Your Tagine
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Before first use, soak the entire tagine in cold water for 24 hours. Then rub the interior with olive
                oil and place it in a cold oven. Heat to 150 C (300 F) for 2 hours. Let it cool completely inside the oven.
                This seals the clay, prevents cracking, and creates a natural non-stick surface. Repeat every few months.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Cooking at Home Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always use a diffuser plate between the tagine and a gas or electric burner. Never place a clay tagine
                on direct high heat or it will crack. Start on low heat and increase gradually. The beauty of tagine
                cooking is patience: low and slow is the rule. A typical tagine needs 1.5 to 2.5 hours of gentle simmering.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ThumbsUp className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Packing for Travel
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Wrap the tagine in clothing inside your checked luggage with the cone nested inside the base. Some
                vendors will pack and ship internationally for you (from 200 MAD shipping). Alternatively, buy a
                cast-iron tagine from Le Creuset when you get home for an indestructible option that works on any stovetop.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Price Negotiation
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In souks, the first price quoted is always negotiable. Start at 40-50% of the asking price and work
                toward a middle ground. Quality handmade cooking tagines are worth from 150-300 MAD. Ensemble Artisanal
                shops have fixed prices and offer a good benchmark before you negotiate elsewhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recipe Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recipe Tips from Moroccan Cooks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Wisdom passed down through generations. These tips will elevate your home tagine from good to extraordinary.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                1. Layer Your Onions on the Bottom
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Always start with a thick layer of sliced onions at the base of the tagine. They release moisture as
                they cook, creating the foundation of the sauce. Moroccan cooks use far more onions than most Western
                recipes suggest. For a tagine serving four, use at least three large onions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                2. Toast Your Spices
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Bloom your spices in oil for 30 seconds before adding other ingredients. This releases the essential
                oils and intensifies the flavor. Never add ground spices to cold oil. The sizzle is the signal that
                the aromatics are activating. This single step separates a forgettable tagine from a memorable one.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                3. Resist the Urge to Add Water
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The tagine pot is designed to cook without added water. The conical lid captures steam and returns it
                to the pot. If you add water, you dilute the concentrated flavors that make tagine special. The onions,
                tomatoes, and meat release enough liquid. Only add a splash of water if the pot is truly dry after an
                hour of cooking.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                4. Add Dried Fruits at the Right Time
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Prunes, apricots, and dates should be added in the last 30-45 minutes of cooking. Add them too early
                and they disintegrate into the sauce. Add them too late and they stay dry and chewy. Soak dried fruits
                in warm water for 15 minutes before adding to plump them slightly and ensure even cooking.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                5. Never Stir a Tagine
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Unlike a stew, a tagine should not be stirred. The ingredients are layered deliberately: onions on the
                bottom, then meat, then vegetables, then garnishes on top. Let the steam do the work. Lifting the lid
                releases precious moisture. If you must check, do so briefly and no more than once or twice during cooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Eating Tagine in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <UtensilsCrossed className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                How to Eat a Tagine
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tagine is traditionally eaten communally from the pot using Moroccan bread (khobz) as your utensil.
                Tear off a piece of bread, fold it to create a scoop, and eat from the section of the pot directly
                in front of you. It is considered polite to eat from your own &quot;zone&quot; rather than reaching across.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                When to Order Tagine
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In local restaurants, tagine is prepared fresh and takes 60-90 minutes. Many tourist restaurants
                pre-cook tagines for quick service, which sacrifices quality. For the best experience, order in
                advance or choose a restaurant that cooks to order. Lunch is the traditional tagine meal in Morocco.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Avoiding Tourist Traps
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Skip restaurants on main tourist squares where touts stand outside. Look for restaurants where locals eat.
                A good sign: a small menu (2-3 tagine options) and no English-language photos. The best tagines in any
                city are rarely in the most visible locations. Ask your riad host for their personal recommendation.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Leaf className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Vegetarian &amp; Vegan Options
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Vegetable tagines are widely available and genuinely delicious, not an afterthought. They are naturally
                vegan when made with olive oil (most are). Ask for &quot;tagine dial khodra&quot; (vegetable tagine). During
                spring, the artichoke and fava bean tagines are exceptional. Chickpea tagine is available year-round.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Food Safety
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tagine is one of the safest street foods in Morocco because it is slow-cooked at high temperature.
                The extended cooking kills bacteria effectively. At street stalls, ensure the tagine is served bubbling
                hot. Avoid tagines that have been sitting at room temperature for an extended period.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping on Tagine Meals
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In local restaurants, rounding up or leaving 5-10 MAD is customary. In mid-range and upscale
                restaurants, 10-15% is appreciated. Some tourist restaurants include service in the bill, so check
                before adding extra. At street stalls, tipping is not expected but always welcomed.
              </p>
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
                What is a Moroccan tagine?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A tagine is both a slow-cooked Moroccan stew and the conical clay pot it is cooked in. The cone-shaped
                lid traps steam and returns condensation to the dish, creating incredibly tender meat and deeply
                concentrated flavors without added water. It is Morocco&apos;s most iconic dish, dating back to the
                Berber civilizations of the 9th century.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the most popular types of tagine in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most popular types are chicken tagine with preserved lemons and olives (the national favorite),
                lamb tagine with prunes and almonds, kefta (meatball) tagine with eggs and tomato, vegetable tagine
                with seasonal produce, and fish tagine popular in coastal cities like Essaouira. Each region has
                its own signature variations influenced by local ingredients and traditions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a tagine cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Street-stall and local eatery tagines start from 30 MAD. Mid-range restaurant tagines range from
                60 to 120 MAD. Fine dining tagines at upscale restaurants cost from 150 to 350 MAD. Prices may vary
                seasonally and by location, with tourist areas generally charging more. Coastal fish tagines tend to
                be slightly pricier than chicken or vegetable options.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where can I take a tagine cooking class in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Cooking classes are widely available in Marrakech, Fes, and Essaouira. They typically start from
                350 MAD per person and include a market tour, hands-on cooking instruction, and a shared meal.
                Popular options include La Maison Arabe and Amal Center in Marrakech, and Palais Amani in Fes.
                Book at least a day in advance, especially during peak season.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I bring a tagine pot home from Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, tagine pots are one of the most popular souvenirs. Decorative tagines start from 50 MAD while
                functional cooking tagines start from 80 MAD. When buying, ensure you get an unglazed or food-safe
                glazed pot. Potters in Safi and Fes produce the finest cooking tagines. Pack carefully for travel,
                wrapping in clothing inside checked luggage, or ask the vendor about international shipping.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is tagine gluten-free?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The tagine itself is naturally gluten-free, as it contains no flour or wheat-based ingredients.
                However, it is traditionally eaten with Moroccan bread (khobz), which contains wheat. Simply
                skip the bread and enjoy the tagine on its own or with rice for a gluten-free meal. Inform
                your server about any allergies, as some restaurant preparations may differ.
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
            <Link href="/morocco-food-etiquette" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Food Etiquette
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential dining customs, table manners, and cultural tips for eating in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-cooking-experience" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <UtensilsCrossed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Cooking Experiences
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hands-on cooking classes, market tours, and culinary workshops across Morocco.
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
                Complete guide to Moroccan spices: ras el hanout, saffron, cumin, and where to buy them.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Award className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore the culinary capital of Morocco: street food, palace cuisine, and hidden gems in Fes.
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
