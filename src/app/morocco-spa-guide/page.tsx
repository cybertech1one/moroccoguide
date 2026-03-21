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
  Flower2,
  Gem,
  CircleDot,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  MessageCircleQuestion,
  HandCoins,
  Layers,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-spa-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Traditional Hammam & Spa Guide 2026 | Step-by-Step First-Timer Tips',
  description:
    'Complete guide to Moroccan hammam and spa experiences. Step-by-step hammam ritual, what to bring, etiquette rules, best hammams in Marrakech, Fes & Casablanca, public vs private vs hotel hammams, savon noir, ghassoul clay, argan oil treatments, and pricing from 50 MAD.',
  keywords: [
    'Morocco hammam guide',
    'traditional hammam Morocco',
    'Moroccan spa experience',
    'hammam etiquette Morocco',
    'best hammams Marrakech',
    'public hammam Morocco',
    'hammam Fes Morocco',
    'savon noir black soap',
    'ghassoul clay treatment',
    'kessa glove scrub',
    'argan oil spa Morocco',
    'hammam prices Morocco 2026',
    'Morocco spa guide',
    'first time hammam tips',
    'hotel hammam Casablanca',
    'Moroccan body scrub gommage',
    'hammam ritual steps',
    'Morocco wellness tourism',
  ],
  openGraph: {
    title: 'Morocco Traditional Hammam & Spa Guide 2026 | Step-by-Step First-Timer Tips',
    description:
      'Everything you need to know about the Moroccan hammam: step-by-step ritual, what to bring, etiquette, best hammams by city, pricing from 50 MAD public baths to luxury spas, and traditional products like savon noir and ghassoul clay.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-spa.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam interior with zellige tilework, steam, and warm lighting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Hammam & Spa Guide 2026 | Complete First-Timer Guide',
    description:
      'Step-by-step hammam ritual, etiquette, best hammams in Marrakech/Fes/Casablanca, public vs luxury pricing, savon noir, ghassoul clay, and argan oil treatments.',
    images: [`${BASE_URL}/images/hero-spa.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What should I bring to a public hammam in Morocco?',
    a: 'Bring a towel, flip-flops, underwear to wear inside, savon beldi (black soap), a kessa exfoliating glove, ghassoul clay, shampoo, and a change of underwear for after. You can buy soap, gloves, and clay at the hammam entrance for from 20 MAD each. Luxury spas provide everything.',
  },
  {
    q: 'Is a Moroccan hammam suitable for first-time visitors?',
    a: 'Yes. If you feel nervous about the public hammam, start with a mid-range spa (from 300 MAD) where staff are accustomed to international guests and will guide you through each step. After that first experience, many travelers feel confident enough to try a public neighborhood hammam.',
  },
  {
    q: 'What do you wear inside a Moroccan hammam?',
    a: 'In a public hammam, women typically wear underwear bottoms and many go topless. Men wear underwear or swim shorts. Full nudity is not the norm in Moroccan hammams, unlike Finnish or Japanese baths. In luxury spas, you receive disposable underwear, a robe, and slippers.',
  },
  {
    q: 'Can couples visit a hammam together in Morocco?',
    a: 'Not in public hammams, which are strictly gender-separated. Some have separate wings; others alternate hours for men and women. Couples who want to be together must book a private session at a luxury or boutique spa. Couples packages start from 1,200 MAD.',
  },
  {
    q: 'How much does a hammam cost in Morocco?',
    a: 'A public hammam costs from 50 MAD for entry plus from 50 MAD for a gommage (scrub) by the kessala. Budget spa packages start from 300 MAD. Mid-range spa packages run from 500 MAD. Luxury hotel spas charge from 800 MAD to 2,500 MAD for a full multi-hour ritual. Seasonal pricing can change during peak tourist months.',
  },
  {
    q: 'How often should I visit the hammam during my Morocco trip?',
    a: 'Moroccans typically visit once a week. For a week-long trip, one or two visits is ideal: one public hammam for cultural immersion and one luxury spa for indulgence. Space visits at least two days apart since the deep scrubbing leaves skin sensitive.',
  },
  {
    q: 'Is the kessa scrub painful? Can I ask for a gentler treatment?',
    a: 'The kessa scrub is firm and thorough. You will see rolls of dead skin peeling off, which looks dramatic but is normal. If the pressure is too strong, say "shwiya" (gently) or "bezzaf" (enough). At luxury spas, therapists check your comfort level throughout. You can always request a gommage doux (gentle scrub).',
  },
  {
    q: 'Are traditional hammam products safe for sensitive skin?',
    a: 'Savon beldi, ghassoul clay, and argan oil are all natural and generally well-tolerated. The kessa scrub is the most likely source of irritation for sensitive skin. Request a softer glove or lighter pressure. Do a patch test with savon beldi on your inner arm before a full application if you have reactive skin.',
  },
  {
    q: 'What is the difference between a public, private, and hotel hammam?',
    a: 'A public hammam is a neighborhood bathhouse used by locals, costing from 50 MAD. A private or boutique hammam is a small spa catering to tourists, from 300 MAD. A hotel hammam is inside a luxury hotel or resort, from 800 MAD. The ritual is similar but the setting, products, and level of personal service differ significantly.',
  },
  {
    q: 'When is the best time to visit a public hammam?',
    a: 'Weekday mornings offer the quietest experience. Avoid Thursday evenings and Friday mornings, which are the busiest times as Moroccans prepare for Friday prayer. During Ramadan, hammams are busiest just before iftar. Luxury spas are quietest on weekday afternoons.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Traditional Hammam & Spa Guide 2026',
  description:
    'Complete guide to Moroccan hammam and spa experiences covering the step-by-step hammam ritual, etiquette, best hammams in Marrakech, Fes, and Casablanca, traditional products, and pricing.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-spa.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Spa & Hammam Guide', item: PAGE_URL },
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
   DATA: STEP-BY-STEP HAMMAM RITUAL
   ================================================================ */

const hammamSteps = [
  {
    step: 1,
    title: 'Arrive & Change',
    icon: Users,
    duration: '10 min',
    description:
      'At a public hammam, enter the changing room and leave your clothes in a locker or with an attendant. Keep your underwear on. At luxury spas, staff hand you a robe and slippers and walk you to a private changing area.',
    tip: 'Bring a padlock for the locker. Leave valuables at your accommodation when possible.',
  },
  {
    step: 2,
    title: 'Warm Up in the Cool Room',
    icon: Thermometer,
    duration: '10-15 min',
    description:
      'The hammam has three rooms of increasing temperature. Start in the cool room (bard) to let your body adjust. Pour warm water over yourself using a plastic bucket (satel). Breathe slowly and relax.',
    tip: 'Drink at least half a liter of water before entering. The steam causes heavy sweating.',
  },
  {
    step: 3,
    title: 'Move to the Hot Room',
    icon: Thermometer,
    duration: '15-20 min',
    description:
      'The hottest room (harr) is where deep steaming happens. The humidity opens every pore. Sit or lie on the heated marble floor. Pour hot water over yourself periodically. This phase prepares the skin for scrubbing.',
    tip: 'If you feel dizzy, move back to a cooler room immediately. There is no shame in pacing yourself.',
  },
  {
    step: 4,
    title: 'Apply Savon Noir (Black Soap)',
    icon: Droplets,
    duration: '10 min',
    description:
      'Savon beldi (savon noir), a thick olive-based paste, is applied over your entire body. Let it sit for 5-10 minutes while steam keeps working. The soap softens dead skin cells and primes them for removal.',
    tip: 'Buy quality savon beldi from a herbalist (attar) rather than tourist shops. It should be dark and thick like molasses.',
  },
  {
    step: 5,
    title: 'The Gommage (Body Scrub with Kessa)',
    icon: Sparkles,
    duration: '15-20 min',
    description:
      'This is the main event. The kessala (scrubber) uses a rough kessa glove to scrub your entire body in firm circular motions. You will see rolls of gray dead skin peeling away. The sensation is intense, but the result is the smoothest skin you have ever felt.',
    tip: 'Say "bezzaf" (enough) or "shwiya" (gently) to adjust pressure. Communication is expected and welcomed.',
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    icon: Flower2,
    duration: '10-15 min',
    description:
      'Natural clay from the Atlas Mountains is mixed with rose water and applied to your body and hair. Ghassoul draws out impurities and conditions the skin with minerals like silica and magnesium. Let it dry slightly, then rinse.',
    tip: 'You can buy ghassoul at any Moroccan herbalist for from 15 MAD per packet to continue the ritual at home.',
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    icon: Waves,
    duration: '10-15 min',
    description:
      'Rinse thoroughly with warm water, then gradually switch to cooler water. Move back through the rooms in reverse order. Luxury spas may offer a cold plunge pool. Alternating warm and cool water improves circulation.',
    tip: 'Pour a final splash of orange blossom water (ma zhar) over your hair for a fragrant finish.',
  },
  {
    step: 8,
    title: 'Rest & Rehydrate',
    icon: Heart,
    duration: '20-30 min',
    description:
      'After drying off, sit in the changing room or relaxation lounge. Your skin will feel impossibly soft. At public hammams, locals drink mint tea and chat. At luxury spas, expect to be served tea, dried fruits, and pastries in a quiet lounge.',
    tip: 'Do not rush. The resting period is part of the ritual. Your body needs time to cool down and reabsorb moisture.',
  },
];

/* ================================================================
   DATA: HAMMAM TYPE COMPARISON
   ================================================================ */

const hammamTypes = [
  {
    type: 'Public Neighborhood Hammam',
    icon: Building,
    price: 'From 50 MAD entry',
    scrub: 'From 50 MAD for gommage',
    products: 'Bring your own or buy at entrance from 20 MAD',
    setting: 'Tiled rooms with domed ceilings, star-shaped skylights. Often centuries old. Communal, no-frills.',
    privacy: 'Gender-separated (different hours or sections). You wear underwear.',
    bestFor: 'Budget travelers, culture seekers, those wanting the authentic Moroccan experience. This is how locals bathe weekly.',
    booking: 'Walk in. No reservation needed. Check the men/women schedule in advance.',
  },
  {
    type: 'Private Boutique Spa',
    icon: Sparkles,
    price: 'From 300 MAD per package',
    scrub: 'Included in package',
    products: 'All provided (premium natural products)',
    setting: 'Restored riad or dedicated spa with designer interiors, mood lighting, ambient music.',
    privacy: 'Private or semi-private rooms. Robes and slippers provided. Couples welcome.',
    bestFor: 'First-timers nervous about public hammams, couples, travelers wanting comfort with authenticity.',
    booking: 'Book 1-2 days ahead. Walk-ins sometimes possible on weekdays.',
  },
  {
    type: 'Luxury Hotel Spa',
    icon: Crown,
    price: 'From 800 MAD per treatment',
    scrub: 'Included in ritual packages',
    products: 'Premium or bespoke product lines, sometimes imported',
    setting: 'Marble interiors, indoor pools, saunas, jacuzzis, fitness centers, relaxation lounges with tea service.',
    privacy: 'Fully private treatment rooms. Couples suites available. Complete discretion.',
    bestFor: 'Luxury travelers, honeymooners, those wanting a world-class spa experience.',
    booking: 'Book at least 3-7 days ahead, especially during peak season (October-April). Online reservations common.',
  },
];

/* ================================================================
   DATA: TRADITIONAL PRODUCTS
   ================================================================ */

const traditionalProducts = [
  {
    name: 'Savon Noir / Savon Beldi (Black Soap)',
    icon: Droplets,
    price: 'From 20 MAD per jar',
    origin: 'Made from crushed olives, olive oil, and potash',
    description:
      'The foundation of every hammam ritual. This thick, dark paste softens dead skin cells when left on for 5-10 minutes, preparing the body for the kessa scrub. Centuries of use across North Africa. The best savon beldi has a rich olive scent and dark brown color.',
    buyAt: 'Herbalists (attarine), souks, and some pharmacies',
  },
  {
    name: 'Kessa Glove',
    icon: Layers,
    price: 'From 15 MAD',
    origin: 'Woven from plant fibers, available in medium to coarse textures',
    description:
      'The rough exfoliating glove used for the gommage. The kessala at a public hammam uses a professional-grade glove that strips dead skin efficiently. For personal use, start with a medium-grade glove. Replace every 3-4 months.',
    buyAt: 'Souks, pharmacies, and hammam entrances',
  },
  {
    name: 'Ghassoul (Rhassoul) Clay',
    icon: Gem,
    price: 'From 15 MAD per packet',
    origin: 'Mined exclusively from the Atlas Mountains of Morocco',
    description:
      'A natural mineral clay rich in silica, magnesium, and potassium. Mixed with rose water to form a paste, it is applied as a body and hair mask after the gommage. Ghassoul absorbs impurities, conditions the skin, and leaves hair silky without stripping natural oils.',
    buyAt: 'Herbalists, beauty shops, and cooperatives',
  },
  {
    name: 'Argan Oil',
    icon: Award,
    price: 'From 80 MAD for cosmetic grade',
    origin: 'Cold-pressed from nuts of the argan tree, unique to southwestern Morocco',
    description:
      'Morocco\'s liquid gold. Applied to damp skin after the hammam, it locks in moisture and delivers vitamin E, fatty acids, and antioxidants. Cosmetic-grade argan oil has a light, nutty scent. Culinary argan oil (darker, roasted) is different and not used on skin.',
    buyAt: 'Women\'s cooperatives (best quality), trusted herbalists, and certified shops',
  },
  {
    name: 'Orange Blossom Water (Ma Zhar)',
    icon: Flower2,
    price: 'From 15 MAD per bottle',
    origin: 'Distilled from blossoms of bitter orange trees',
    description:
      'Used as a final rinse for hair and face, it has a delicate floral scent and mild astringent properties. Also used in Moroccan pastries and mint tea. A bottle lasts for weeks of daily use.',
    buyAt: 'Herbalists, souks, and supermarkets',
  },
];

/* ================================================================
   DATA: BEST HAMMAMS BY CITY
   ================================================================ */

const bestByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-hammam-ritual.webp',
    intro: 'The capital of Moroccan wellness. Marrakech has the widest range of hammam and spa options in the country, from 50 MAD public baths in the medina to multi-hour rituals at palace resorts.',
    picks: [
      { name: 'Hammam Dar el-Bacha', type: 'Historic Public', price: 'From 50 MAD', note: '16th-century, star-shaped skylights, authentic local crowd' },
      { name: 'Hammam Mouassine', type: 'Public', price: 'From 50 MAD', note: 'Medina heart, expert kessalas, separate men/women hours' },
      { name: 'Heritage Spa', type: 'Boutique', price: 'From 400 MAD', note: 'Restored riad, black soap hammam + argan oil massage' },
      { name: 'Les Bains de Marrakech', type: 'Day Spa', price: 'From 500 MAD', note: 'Palace setting, ghassoul clay mask, couples packages' },
      { name: 'La Mamounia Spa', type: 'Ultra-Luxury', price: 'From 1,500 MAD', note: '2,500 sqm, Royal Hammam ritual, gold-infused argan oil' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/art-moroccan-pattern-zellige.webp',
    intro: 'Fes hammams are among the oldest in Morocco. The spa scene here is less touristy than Marrakech, and the riad-based spas use traditional Fassi techniques with herbs grown in the city\'s ancient gardens.',
    picks: [
      { name: 'Hammam Sidi Ali Ben Harazem', type: 'Traditional Public', price: 'From 50 MAD', note: 'Centuries-old neighborhood hammam, bring your own supplies' },
      { name: 'Riad Laaroussa Spa', type: 'Riad Spa', price: 'From 400 MAD', note: '17th-century palace, original zellige, Fassi herb treatments' },
      { name: 'Palais Amani Spa', type: 'Boutique', price: 'From 350 MAD', note: 'Organic in-house products, Andalusian garden herbs, medina rooftop views' },
      { name: 'Riad Fes Spa', type: 'Luxury Riad', price: 'From 500 MAD', note: 'Full hammam circuit, refined atmosphere, excellent therapists' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    intro: 'Casablanca\'s spa scene is more modern and international. Expect contemporary design, international product lines, and a blend of Moroccan and global wellness traditions. Public hammams exist in older neighborhoods.',
    picks: [
      { name: 'Four Seasons Casablanca Spa', type: 'Luxury Hotel', price: 'From 1,200 MAD', note: 'Atlantic views, indoor pool, exclusive product line' },
      { name: 'Spa My Blend by Clarins', type: 'Luxury Hotel', price: 'From 900 MAD', note: 'Personalized Clarins diagnostics, modern approach' },
      { name: 'Mythic Oriental Spa', type: 'Day Spa', price: 'From 350 MAD', note: 'Moroccan-Asian fusion, unique Thai-Moroccan massage' },
    ],
  },
];

/* ================================================================
   DATA: PRICE TIERS
   ================================================================ */

const priceTiers = [
  { service: 'Public hammam entry', price: 'From 50 MAD', note: 'Bath only, bring your own supplies' },
  { service: 'Gommage by kessala (public)', price: 'From 50 MAD', note: 'Tip on top of entry fee' },
  { service: 'Savon beldi + kessa glove', price: 'From 20 MAD each', note: 'At entrance or herbalist' },
  { service: 'Ghassoul clay packet', price: 'From 15 MAD', note: 'Sold by weight at herbalists' },
  { service: 'Boutique spa hammam package', price: 'From 300 MAD', note: 'Hammam + gommage + short massage' },
  { service: 'Mid-range full package', price: 'From 500 MAD', note: 'Hammam + scrub + clay mask + 30-min massage' },
  { service: 'Luxury spa ritual', price: 'From 800 MAD', note: 'Full hammam, scrub, mask, massage, facial' },
  { service: 'Ultra-luxury experience', price: 'From 1,500 MAD', note: 'Multi-hour ritual with premium products' },
  { service: 'Couples spa package', price: 'From 1,200 MAD', note: 'Private room, full treatment for two' },
  { service: 'Argan oil massage (60 min)', price: 'From 300 MAD', note: 'Standalone treatment at most spas' },
];

/* ================================================================
   DATA: FIRST-TIMER TIPS
   ================================================================ */

const firstTimerTips = [
  { title: 'Start at a Boutique Spa', icon: Sparkles, text: 'If the public hammam feels intimidating, book a boutique spa first (from 300 MAD). Staff speak English or French and guide you through everything. Once you know the flow, you can try a public hammam with confidence.' },
  { title: 'Hydrate Before & After', icon: Droplets, text: 'Drink at least 500 ml of water before entering. The intense steam causes heavy sweating. After the hammam, continue drinking water and avoid alcohol for a few hours.' },
  { title: 'Avoid Full Stomachs', icon: AlertTriangle, text: 'Wait at least 2 hours after eating. Steam and heat on a full stomach cause nausea. A light snack is fine.' },
  { title: 'Protect Sensitive Skin', icon: ShieldCheck, text: 'The kessa scrub is vigorous. If you have sensitive skin, ask for a gommage doux (gentle scrub). Avoid the hammam if you have sunburn, open cuts, or skin infections.' },
  { title: 'Time It Right', icon: Clock, text: 'Public hammams are busiest on Thursday evenings and Friday mornings. Go on a weekday morning for a quieter experience. Luxury spas are quietest on weekday afternoons.' },
  { title: 'Skip Sun Exposure After', icon: Heart, text: 'Your skin will be sensitive for 24 hours after a deep scrub. Avoid direct sunlight. Apply argan oil or a gentle moisturizer. Many Moroccans follow their hammam with mint tea and a nap.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoSpaGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-spa.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Hammam &amp; Spa Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Wellness &amp; Traditional Bathing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Traditional Hammam
            <br className="hidden md:block" /> &amp; Spa Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The step-by-step guide to Morocco&apos;s oldest wellness ritual. From 50 MAD
            neighborhood bathhouses to world-class luxury spas -- everything a first-timer needs to know.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: Cultural Significance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            More Than a Bath: The Cultural Heart of Moroccan Life
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Every neighborhood in Morocco has a hammam. For over a thousand years, the weekly visit
              has been as central to Moroccan life as the Friday couscous or the evening call to prayer.
              The hammam is where mothers bring daughters before their weddings, where friends trade
              gossip over buckets of hot water, and where the accumulated grime and stress of the week
              is literally scraped away with a rough glove and a generous handful of black soap.
            </p>
            <p>
              For travelers, the hammam offers something rare: genuine participation in everyday Moroccan
              culture, not a performance staged for tourists. At a public hammam, you sit beside a
              grandmother scrubbing her grandchildren, a young woman conditioning her hair with ghassoul
              clay before her engagement party, a laborer rinsing off a week of dust. It is unselfconscious,
              practical, and deeply human.
            </p>
            <p>
              Morocco has also developed a modern spa industry that ranks among the finest on the continent.
              Luxury resorts in Marrakech and Casablanca have elevated the hammam ritual into multi-hour
              experiences using premium argan oil, rose water, and bespoke product lines. The ritual remains
              the same at its core -- steam, scrub, clay, rinse, rest -- but the setting and price range
              from 50 MAD to 2,500 MAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cultural Significance Deep Dive ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Hammam in Moroccan Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Wedding Traditions
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The bridal hammam (hammam al-aaroussa) is one of the most important pre-wedding rituals. The
                bride visits the hammam with her female relatives and friends the day before her wedding. She
                is scrubbed, masked, oiled, and perfumed in a celebration that can last several hours. The
                kessala decorates her skin with henna afterward.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Social Gathering Place
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Before modern plumbing, the hammam was the only place most Moroccans could take a hot bath.
                It became a social hub where news was shared, matches were made, and community bonds were
                strengthened. This social function persists today, especially among older women who treat the
                weekly hammam as their primary social outing.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Islamic Purification
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The hammam has roots in Islamic bathing culture. Ritual cleanliness (tahara) is fundamental
                to daily prayer. The hammam provided a thorough weekly cleansing beyond the daily ablutions
                (wudu). Many historic hammams were built adjacent to mosques, and the busiest day remains
                Friday, when Moroccans prepare for the most important prayer of the week.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Architectural Heritage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Historic hammams are feats of engineering. Domed ceilings with star-shaped skylights allow
                light in while trapping steam. Underfloor heating systems (similar to Roman hypocausts) warm
                the marble floors. Some hammams in Fes and Marrakech date to the 14th century and remain in
                daily use, making them among the oldest functioning public buildings in North Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Hammam Ritual ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Hammam Ritual: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Here is exactly what happens during a hammam visit, from arrival to the final cup of mint tea.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-8">
                {hammamSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                            <Clock className="w-3 h-3" />
                            {step.duration}
                          </div>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{step.description}</p>
                        <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                          <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <p className="text-xs text-[var(--text-muted)]">
                            <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {step.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Public vs Private vs Hotel ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Public vs. Boutique vs. Hotel Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tiers of hammam experience exist in Morocco. Each serves a different purpose and budget.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hammamTypes.map((h) => {
              const TypeIcon = h.icon;
              return (
                <div key={h.type} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                    <TypeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                    {h.type}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Entry:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.price}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Scrub:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.scrub}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Products:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.products}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Setting:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.setting}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Privacy:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.privacy}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Best for:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.bestFor}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Booking:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{h.booking}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Traditional Products ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flower2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Hammam Products
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five natural products refined over centuries form the backbone of the hammam ritual. All can be purchased in Morocco and taken home.
          </p>

          <div className="space-y-6">
            {traditionalProducts.map((product) => {
              const ProdIcon = product.icon;
              return (
                <div key={product.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ProdIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] italic">{product.origin}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{product.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      {product.price}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      {product.buyAt}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Argan Oil & Specialty Treatments ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Argan Oil &amp; Specialty Treatments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the standard hammam ritual, Moroccan spas offer treatments built around the country&apos;s
            most prized natural ingredients.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Argan Oil Full-Body Massage
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                The signature massage treatment of Moroccan spas. Pure cosmetic-grade argan oil is warmed
                and worked into the skin using long, flowing strokes. The oil penetrates quickly, delivering
                vitamin E and essential fatty acids deep into the skin. A 60-minute session leaves the skin
                luminous and deeply hydrated for days.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 300 MAD (60 min) at most mid-range and luxury spas</p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Rose Water &amp; Rose Petal Ritual
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                Damask roses from the Dades Valley (harvested each May) provide the foundation for this
                luxury treatment. Rose water is used as a toner, rose oil is blended into the massage,
                and rose petals float in the rinse water. The scent is extraordinary. Hammam de la Rose
                in Marrakech specializes exclusively in rose-based treatments.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 350 MAD at boutique spas. Seasonal pricing can change during rose harvest season.</p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Thalassotherapy (Seawater Treatments)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                Available at coastal spas in Essaouira and El Jadida, thalassotherapy uses heated Atlantic
                seawater, seaweed wraps, and sea salt scrubs. The mineral-rich seawater is believed to
                improve circulation and reduce joint stiffness. The Sofitel Essaouira Mogador and Mazagan
                Beach Resort are the two leading thalassotherapy destinations in Morocco.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 600 MAD per session at resort spas</p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Saffron &amp; Honey Body Wrap
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                A premium treatment using Taliouine saffron (Morocco produces some of the world&apos;s finest)
                and local wildflower honey. The warm honey-saffron mixture is applied after the gommage,
                wrapped, and left to absorb for 20 minutes. Saffron has anti-inflammatory properties, and
                honey is a natural humectant. The skin glows for days afterward.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 450 MAD at select boutique and luxury spas</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Hammams by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hammams &amp; Spas by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has a distinct spa character. Here are the top recommendations by location.
          </p>

          <div className="space-y-10">
            {bestByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-52">
                    <img
                      src={city.image}
                      alt={`Hammam and spa atmosphere in ${city.city}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CityIcon className="w-5 h-5 text-white" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                        {city.city}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-5">{city.intro}</p>
                    <div className="space-y-3">
                      {city.picks.map((pick) => (
                        <div key={pick.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm border-b border-[var(--border)] pb-3 last:border-0 last:pb-0">
                          <div className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                            <span className="font-medium text-[var(--text-primary)]">{pick.name}</span>
                            <span className="text-xs text-[var(--text-muted)]">({pick.type})</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs">
                            <span className="text-[var(--color-accent)] font-semibold">{pick.price}</span>
                            <span className="text-[var(--text-muted)] hidden md:inline">{pick.note}</span>
                          </div>
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

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam &amp; Spa Pricing
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            What to expect across every tier, from a neighborhood bathhouse to an ultra-luxury resort spa.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirhams. Seasonal pricing can change during peak months (October-April) when luxury spa rates may increase 20-30%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price (MAD)</div>
                <div className="p-3 px-4">Details</div>
              </div>
              {priceTiers.map((item, i) => (
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

      {/* ── First-Timer Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for First-Time Hammam Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six practical pointers to make your first hammam experience smooth and enjoyable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {firstTimerTips.map((tip) => {
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

      {/* ── Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Respect these unwritten rules and you will be welcomed warmly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { rule: 'Respect Gender Separation', text: 'Public hammams are strictly divided. Some have separate sections; others alternate hours. Always check the schedule before showing up.' },
              { rule: 'Tip the Kessala', text: 'The person who scrubs you at a public hammam earns most of their income from tips. From 20-50 MAD is standard. At luxury spas, from 50-100 MAD is appreciated.' },
              { rule: 'Do Not Stare', text: 'The hammam is a space of body neutrality. People of all shapes attend. Keep your eyes on your own space and focus on your experience.' },
              { rule: 'Keep It Quiet (in Luxury Spas)', text: 'Public hammams can be lively and social. Luxury spas expect quiet. In either setting, avoid loud phone calls. Leave your phone in the locker.' },
              { rule: 'Bring Your Own Supplies to Public Hammams', text: 'Towel, underwear, flip-flops, savon beldi, kessa glove, ghassoul clay, shampoo. You can buy supplies at the entrance if you forget.' },
              { rule: 'Clean Up After Yourself', text: 'In a public hammam, rinse your area when you are done. Leave your spot cleaner than you found it. This is basic Moroccan hammam courtesy.' },
            ].map((item) => (
              <div key={item.rule} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.rule}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Inside the Moroccan Hammam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-hammam-interior.webp"
                alt="Traditional Moroccan hammam interior with vaulted stone ceilings and warm tiled floors"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Hammam Interior</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-hammam-interior.webp"
                alt="Steam-filled hammam room with zellige tilework and atmospheric lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Hammam Steam Room</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-wellness-spa.webp"
                alt="Modern luxury spa treatment room in a Moroccan resort with relaxation area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Spa Setting</p>
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
            Answers to the most common questions from first-time hammam visitors.
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Moroccan Hammam Guide',
                description: 'Deep dive into neighborhood hammam culture with additional city-by-city recommendations.',
                href: '/hammam',
                icon: Droplets,
              },
              {
                title: 'Wellness & Yoga Retreats',
                description: 'Yoga retreats, meditation centers, and holistic wellness escapes across Morocco.',
                href: '/wellness',
                icon: Heart,
              },
              {
                title: 'Argan Oil Guide',
                description: 'How argan oil is made, where to buy authentic cosmetic and culinary grades, and cooperative visits.',
                href: '/argan-oil',
                icon: Award,
              },
              {
                title: 'Morocco Etiquette Guide',
                description: 'Dress code, tipping customs, greetings, and social norms for respectful travel in Morocco.',
                href: '/etiquette',
                icon: ShieldCheck,
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

      {/* ── More Spa & Wellness Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Spa &amp; Wellness Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-wellness-retreats', title: 'Morocco Wellness Retreats', desc: 'Multi-day retreats combining hammam, yoga, meditation, and healthy cuisine in stunning settings.' },
              { href: '/morocco-thermal-spas', title: 'Thermal Springs & Spas', desc: 'Natural hot springs across Morocco, from Moulay Yacoub near Fes to Sidi Harazem and mountain springs.' },
              { href: '/morocco-spa-wellness', title: 'Spa & Wellness Overview', desc: 'Broad overview of Morocco\'s wellness tourism industry, trends, and planning resources.' },
              { href: '/spa-resorts', title: 'Spa Resort Guide', desc: 'The best resort spas in Morocco rated by facilities, treatments, and value for money.' },
              { href: '/moroccan-hammam', title: 'Hammam Deep Dive', desc: 'Extended guide to the history, architecture, and regional variations of the Moroccan hammam.' },
              { href: '/luxury', title: 'Luxury Morocco', desc: 'The finest hotels, riads, restaurants, and premium experiences for luxury travelers.' },
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
