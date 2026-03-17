import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  MapPin,
  Star,
  Coins,
  Heart,
  CheckCircle,
  ArrowRight,
  Clock,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  Info,
  ThermometerSun,
  Users,
  Flower2,
  Eye,
  Hand,
  Layers,
  CircleDollarSign,
  Lightbulb,
  Package,
  HelpCircle,
  Leaf,
  Globe,
  Award,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Hammam Guide for Tourists 2026: What to Expect, Best Hammams & Tips | CityGuide',
  description:
    'The complete tourist guide to Moroccan hammams. Step-by-step walkthrough, public vs tourist vs luxury hammams, prices in MAD, etiquette, what to bring, best hammams in Marrakech, Fes, and Essaouira, plus tips for first-timers.',
  keywords: [
    'Moroccan hammam guide',
    'hammam Morocco tourist',
    'what to expect hammam Morocco',
    'best hammam Marrakech',
    'best hammam Fes',
    'public hammam Morocco',
    'luxury hammam Morocco',
    'hammam etiquette Morocco',
    'hammam tips first time',
    'hammam products Morocco',
    'savon noir Morocco',
    'ghassoul clay hammam',
    'Heritage Spa Marrakech',
    'Les Bains de Marrakech',
    'Spa Laaroussa Fes',
    'hammam price Morocco',
    'hammam for women Morocco',
    'hammam for men Morocco',
    'traditional bath Morocco',
    'Turkish bath Morocco difference',
  ],
  openGraph: {
    title: 'Moroccan Hammam Guide for Tourists 2026',
    description:
      'Complete guide to the Moroccan hammam experience. Public, tourist, and luxury options with real prices, etiquette tips, and city-by-city recommendations.',
    url: 'https://citytoursmorocco.com/moroccan-hammam',
    images: [
      {
        url: '/images/hero-hammam.webp',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam interior with steam, marble, and warm lighting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Hammam Guide for Tourists 2026',
    description: 'Everything tourists need to know about the Moroccan hammam experience.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/moroccan-hammam' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/moroccan-hammam#article',
      headline: 'Moroccan Hammam Guide for Tourists: What to Expect, Best Hammams & Tips',
      description:
        'Complete tourist guide to the Moroccan hammam experience including step-by-step walkthrough, prices, etiquette, and best hammams by city.',
      url: 'https://citytoursmorocco.com/moroccan-hammam',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a hammam cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A local public hammam costs from 8 MAD. Tourist-oriented hammams range from 200 MAD. Luxury spa hammams cost from 500 MAD. Prices vary by city and the level of service included.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I wear in a Moroccan hammam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In a public hammam, men wear swim shorts and women wear underwear or a swimsuit bottom. In tourist and luxury hammams, disposable underwear is usually provided. You will be given a wrap or towel. Never go fully naked in a public hammam.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a Moroccan hammam safe for tourists?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, hammams are safe for tourists. Tourist-oriented hammams have staff trained to work with international visitors. Public hammams are also safe but less comfortable for first-timers due to the language barrier and different etiquette expectations.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
        { '@type': 'ListItem', position: 2, name: 'Moroccan Hammam Guide', item: 'https://citytoursmorocco.com/moroccan-hammam' },
      ],
    },
  ],
};

/* =====================================================================
   HAMMAM TYPES DATA
   ===================================================================== */

const hammamTypes = [
  {
    type: 'Public Hammam (Hammam Beldi)',
    icon: <Users className="w-6 h-6" />,
    price: 'from 8 MAD',
    duration: '1-2 hours',
    description: 'The authentic neighborhood hammam used by Moroccan families for centuries. Separate sessions for men and women (or separate facilities). You bring your own supplies or buy them at the door. A tayaba (scrubber) is available for an additional from 30 MAD. The experience is raw, real, and deeply cultural -- but can be overwhelming for first-time visitors who do not speak Arabic or Darija.',
    bestFor: 'Adventurous travelers seeking the most authentic experience',
    whatIncluded: ['Entry only -- bring your own soap, scrub mitt (kessa), and towels, or buy basic supplies at the entrance'],
    tips: ['Go when it is not too busy (mid-morning on weekdays)', 'Bring flip-flops, a change of underwear, and your own toiletries', 'The tayaba scrub is worth the extra from 30 MAD'],
  },
  {
    type: 'Tourist Hammam',
    icon: <Globe className="w-6 h-6" />,
    price: 'from 200 MAD',
    duration: '1-1.5 hours',
    description: 'Purpose-built or adapted hammams that cater specifically to international visitors. Staff speak French and often English, the process is explained in advance, and everything is provided. The experience is comfortable and well-organized while still feeling authentically Moroccan. Most include a full body scrub with black soap, ghassoul clay mask, and a short massage.',
    bestFor: 'First-time visitors and those wanting comfort with authenticity',
    whatIncluded: ['Black soap scrub', 'Kessa mitt exfoliation', 'Ghassoul clay body mask', 'Rinse and light massage', 'Disposable underwear', 'Towels and flip-flops', 'Mint tea afterwards'],
    tips: ['Book at least one day in advance', 'Specify preference for male or female attendant', 'A from 20 MAD tip for the scrubber is customary'],
  },
  {
    type: 'Luxury Spa Hammam',
    icon: <Sparkles className="w-6 h-6" />,
    price: 'from 500 MAD',
    duration: '2-3 hours',
    description: 'Five-star spa experiences housed in beautifully designed spaces with marble, tadelakt, and zellige interiors. The hammam ritual is followed by professional massage, argan oil treatments, facial treatments, and relaxation in tranquil lounges. Products are often organic and locally sourced. These experiences rival the finest spas in the world at a fraction of the European price.',
    bestFor: 'Luxury travelers, couples, and special occasions',
    whatIncluded: ['Full hammam ritual with premium products', 'Extended body scrub and mask', 'Full-body massage (60-90 minutes)', 'Facial treatment or argan oil wrap', 'Premium towels and robes', 'Relaxation lounge with refreshments', 'Sometimes includes a private hammam room'],
    tips: ['Book 2-3 days ahead for popular venues', 'Couples packages offer the best value', 'Arrive 30 minutes early to use the relaxation facilities'],
  },
];

/* =====================================================================
   STEP-BY-STEP PROCESS
   ===================================================================== */

const hammamSteps = [
  {
    step: 1,
    title: 'Arrival & Preparation',
    description: 'You arrive and are shown to a changing area where you undress. In a tourist hammam, you receive disposable underwear, flip-flops, and a towel or wrap. In a public hammam, you change in a communal area and keep your own underwear on. Store your valuables in a locker or leave them with reception.',
    duration: '10 minutes',
  },
  {
    step: 2,
    title: 'Warm Room Acclimatization',
    description: 'You enter the warm room (bayt al-barid) where the temperature is moderate. Sit on the heated marble or tiled bench and let your body adjust to the warmth and steam. Water is poured over you to begin softening your skin. This is when the black soap (savon noir) is applied all over your body and left to work for 5-10 minutes.',
    duration: '15 minutes',
  },
  {
    step: 3,
    title: 'Hot Room & Steaming',
    description: 'You move to the hot room (bayt al-skhoun), the hottest chamber in the hammam. The steam opens your pores and the heat relaxes your muscles deeply. You sit or lie on the heated stone while the black soap continues to penetrate your skin. The temperature is typically 40-45 degrees Celsius with high humidity.',
    duration: '10-15 minutes',
  },
  {
    step: 4,
    title: 'The Scrub (Gommage)',
    description: 'This is the main event. The tayaba (scrubber) uses a rough kessa mitt to vigorously exfoliate your entire body. The dead skin rolls off in visible gray strands -- a satisfying and slightly alarming sight for first-timers. The scrub covers arms, legs, back, chest, stomach, and feet. The pressure is firm and the mitt is rough. If it is too much, say "shwiya" (gently) or simply gesture.',
    duration: '15-20 minutes',
  },
  {
    step: 5,
    title: 'Ghassoul Clay Mask',
    description: 'After the scrub, ghassoul clay (a natural mineral clay from the Atlas Mountains) is applied to your body and sometimes your hair. It is left on for 5-10 minutes while you relax. Ghassoul absorbs impurities, tightens pores, and leaves skin incredibly smooth. In luxury hammams, this may be enhanced with rose water or essential oils.',
    duration: '10 minutes',
  },
  {
    step: 6,
    title: 'Rinse & Cool Down',
    description: 'Buckets of warm then cool water are poured over you to rinse away the clay and the last traces of dead skin. You move back through the rooms as the temperature decreases. In some hammams, a brief scalp massage or hair wash is included at this stage.',
    duration: '10 minutes',
  },
  {
    step: 7,
    title: 'Post-Hammam Rest',
    description: 'You are wrapped in towels and led to a relaxation area where mint tea (or orange juice in some places) is served. Your skin feels remarkably soft, clean, and renewed. In tourist and luxury hammams, this is when a massage may follow. Take your time dressing -- there is no rush. The experience is meant to be leisurely.',
    duration: '15-30 minutes',
  },
];

/* =====================================================================
   PRODUCTS DATA
   ===================================================================== */

const hammamProducts = [
  {
    name: 'Black Soap (Savon Noir)',
    arabicName: 'Saboun Beldi',
    icon: <Droplets className="w-5 h-5" />,
    description: 'A thick, dark olive-based paste that is the foundation of every hammam session. Made from crushed olives and olive oil, it has a smooth, buttery texture and is applied to the skin before the scrub to soften and prepare it for exfoliation. High-quality savon noir has a deep olive-green to black color and a subtle earthy scent. It is one of the best souvenirs to bring home from Morocco.',
    price: 'from 20 MAD per jar',
    buyWhere: 'Souks, pharmacies, and cosmetic shops in every medina',
  },
  {
    name: 'Kessa Mitt',
    arabicName: 'Kessa / Kiss',
    icon: <Hand className="w-5 h-5" />,
    description: 'The rough exfoliating mitt that makes the hammam scrub so effective. Made from a coarse woven fabric, it creates friction that removes dead skin cells that have been softened by steam and black soap. Kessa mitts come in different grades of roughness; choose a medium grade for your first hammam. Replace every 2-3 months for hygiene.',
    price: 'from 10 MAD',
    buyWhere: 'Any souk, pharmacy, or hammam entrance',
  },
  {
    name: 'Ghassoul Clay',
    arabicName: 'Ghassoul / Rassoul',
    icon: <Layers className="w-5 h-5" />,
    description: 'A natural mineral clay mined exclusively from the Atlas Mountains of Morocco. Rich in silica, magnesium, and potassium, ghassoul has been used for centuries as a body and hair cleanser. It absorbs impurities, tightens pores, and softens skin without any chemicals. Sold as powder, chunks, or ready-to-use paste. UNESCO has recognized the ghassoul mining region for its cultural significance.',
    price: 'from 15 MAD per bag',
    buyWhere: 'Souks, herboristeries (traditional apothecaries), and beauty shops',
  },
  {
    name: 'Argan Oil',
    arabicName: 'Zit Argan',
    icon: <Leaf className="w-5 h-5" />,
    description: 'Applied after the hammam to nourish and hydrate freshly exfoliated skin. Pure cosmetic argan oil is golden, has a mild nutty scent, and absorbs quickly without leaving a greasy residue. It is rich in vitamin E and essential fatty acids. Buy from women\'s cooperatives for the best quality and ethical sourcing. Do not confuse cosmetic argan oil (light scent) with culinary argan oil (roasted, strong flavor).',
    price: 'from 80 MAD per bottle (100ml)',
    buyWhere: 'Women\'s cooperatives, certified shops, and souks (test before buying)',
  },
  {
    name: 'Rose Water',
    arabicName: 'Ma Ward',
    icon: <Flower2 className="w-5 h-5" />,
    description: 'Distilled from Damask roses grown in the Dades Valley (the "Valley of Roses"), Moroccan rose water is used as a toner, facial mist, and fragrance after the hammam. High-quality rose water has a delicate, pure floral scent without synthetic additives. The best rose water is produced during the annual rose harvest in April and May.',
    price: 'from 20 MAD per bottle',
    buyWhere: 'Rose cooperatives in Kelaat Mgouna, souks, and herboristeries',
  },
];

/* =====================================================================
   BEST HAMMAMS BY CITY
   ===================================================================== */

interface HammamListing {
  name: string;
  type: string;
  price: string;
  description: string;
  highlights: string[];
}

interface CityHammams {
  city: string;
  hammams: HammamListing[];
}

const bestHammams: CityHammams[] = [
  {
    city: 'Marrakech',
    hammams: [
      {
        name: 'Heritage Spa',
        type: 'Luxury Spa Hammam',
        price: 'from 600 MAD',
        description: 'Set in a beautifully restored riad in the medina, Heritage Spa is widely considered the best hammam experience in Marrakech. The marble and tadelakt interiors are stunning, the products are organic and locally sourced, and the staff are professionally trained. The signature package includes hammam, body scrub, ghassoul mask, argan oil massage, and facial.',
        highlights: ['Restored riad setting', 'Organic local products', 'Professional staff', 'Couples treatments available'],
      },
      {
        name: 'Les Bains de Marrakech',
        type: 'Luxury Spa Hammam',
        price: 'from 800 MAD',
        description: 'One of the original luxury hammams in Marrakech and still among the best. A vast complex with multiple treatment rooms, a beautiful courtyard garden, and a team of highly trained therapists. The hammam ritual is followed by a choice of massages from Moroccan to Balinese traditions. The architecture alone is worth the visit.',
        highlights: ['Vast beautiful complex', 'Multi-tradition massages', 'Garden courtyard', 'Long-established reputation'],
      },
      {
        name: 'Le Bain Bleu',
        type: 'Tourist Hammam',
        price: 'from 250 MAD',
        description: 'An excellent mid-range option that delivers a genuine hammam experience without the luxury price tag. The blue-tiled interior is atmospheric, the scrub is thorough, and the staff speak English and French. A great first hammam for tourists who want authenticity without the intimidation of a public hammam.',
        highlights: ['English-speaking staff', 'Genuine but accessible', 'Good value', 'Central medina location'],
      },
      {
        name: 'Hammam Dar el-Bacha',
        type: 'Public Hammam',
        price: 'from 10 MAD (plus 40 MAD for tayaba)',
        description: 'One of the most beautiful public hammams in Marrakech, with original zellige tilework and vaulted ceilings. This is a real local hammam where you experience the ritual as Moroccans do. Not for the faint-hearted, but deeply rewarding for those willing to navigate the local customs. Separate hours for men and women.',
        highlights: ['Stunning original architecture', 'Deeply authentic', 'Incredibly affordable', 'Local atmosphere'],
      },
    ],
  },
  {
    city: 'Fes',
    hammams: [
      {
        name: 'Spa Laaroussa',
        type: 'Luxury Spa Hammam',
        price: 'from 500 MAD',
        description: 'Located within the historic Riad Laaroussa, this spa features a wood-fired hammam heated in the traditional way. The products are made in-house from local ingredients, and the experience feels both luxurious and deeply authentic. The spa also offers excellent massage treatments using argan oil and essential oils.',
        highlights: ['Traditional wood-fired heating', 'In-house artisanal products', 'Historic riad setting', 'Authentic luxury'],
      },
      {
        name: 'Palais Amani Spa',
        type: 'Luxury Spa Hammam',
        price: 'from 600 MAD',
        description: 'The spa at Palais Amani is set within the largest private garden in the Fes medina. The hammam uses premium ghassoul clay and argan oil, and the post-hammam massage takes place in treatment rooms overlooking the Andalusian garden. A serene and refined experience.',
        highlights: ['Garden setting', 'Premium products', 'Post-hammam massage', 'Peaceful atmosphere'],
      },
      {
        name: 'Hammam Sidi Azzouz',
        type: 'Public Hammam',
        price: '10 MAD (plus from 30 MAD for tayaba)',
        description: 'A centuries-old public hammam in the heart of Fes el-Bali. The architecture is remarkable, with thick stone walls, vaulted ceilings, and star-shaped skylights that cast beams of light through the steam. A powerful, authentic experience for those comfortable with the public hammam environment.',
        highlights: ['Centuries-old architecture', 'Star-shaped skylights', 'Deeply authentic', 'Heart of the medina'],
      },
    ],
  },
  {
    city: 'Essaouira',
    hammams: [
      {
        name: 'Hammam Lalla Mira',
        type: 'Tourist Hammam',
        price: 'from 250 MAD',
        description: 'Part of the eco-friendly Lalla Mira hotel, this hammam is solar-heated and uses organic products. The Atlantic-influenced atmosphere gives it a different feel from Marrakech or Fes hammams. English-speaking staff make it very accessible for first-timers. The terrace offers ocean views for post-hammam relaxation.',
        highlights: ['Solar-heated eco-hammam', 'Organic products', 'Ocean view terrace', 'First-timer friendly'],
      },
      {
        name: 'Heure Bleue Spa',
        type: 'Luxury Spa Hammam',
        price: 'from 500 MAD',
        description: 'Essaouira\'s finest spa experience, located in the elegant Heure Bleue Palais. The hammam is beautifully designed with tadelakt and local stone, and the treatment menu includes argan oil massages, seaweed wraps, and Atlantic-inspired therapies.',
        highlights: ['Elegant design', 'Atlantic-inspired treatments', 'Premium facility', 'Argan oil specialties'],
      },
    ],
  },
];

/* =====================================================================
   ETIQUETTE DATA
   ===================================================================== */

const etiquetteRules = [
  {
    title: 'Appropriate Coverage',
    icon: <ShieldCheck className="w-5 h-5" />,
    rule: 'In public hammams, men wear swim shorts and women wear underwear or a swimsuit bottom. Never go fully naked. In tourist and luxury hammams, follow the guidance of staff -- disposable underwear is usually provided.',
  },
  {
    title: 'Shower Before Entering',
    icon: <Droplets className="w-5 h-5" />,
    rule: 'Rinse yourself before entering the hot rooms. This is a basic hygiene courtesy observed by all hammam-goers. Use the buckets and taps provided in the entrance area.',
  },
  {
    title: 'Communicate Comfort Level',
    icon: <Info className="w-5 h-5" />,
    rule: 'If the scrub is too rough, say "shwiya" (gently) or raise your hand. If the temperature is too hot, you can always move to a cooler room. There is no shame in pacing yourself.',
  },
  {
    title: 'Respect the Space',
    icon: <Heart className="w-5 h-5" />,
    rule: 'A hammam is a place of cleansing, relaxation, and community. Keep your voice low, do not use phones, and avoid staring at other visitors. The atmosphere should be calm and respectful.',
  },
  {
    title: 'Tip the Tayaba',
    icon: <Coins className="w-5 h-5" />,
    rule: 'In a public hammam, tip the tayaba (scrubber) from 20 MAD on top of their fee. In tourist hammams, a from 20 MAD tip is appreciated. In luxury spas, tipping 10-15% of the total is appropriate.',
  },
  {
    title: 'Bring Your Own Supplies to Public Hammams',
    icon: <Package className="w-5 h-5" />,
    rule: 'Public hammams provide nothing. Bring your own black soap, kessa mitt, towel, flip-flops, clean underwear, and shampoo. You can buy basic supplies from vendors outside most public hammams for just 20 MAD.',
  },
];

/* =====================================================================
   FIRST-TIMER TIPS
   ===================================================================== */

const firstTimerTips = [
  {
    audience: 'General First-Timer Tips',
    icon: <Lightbulb className="w-5 h-5" />,
    tips: [
      'Start with a tourist hammam for your first visit, then try a public one if you want a more authentic experience',
      'The dead skin rolling off your body during the scrub is completely normal -- it happens to everyone regardless of how clean you are',
      'Drink plenty of water before and after your hammam session to stay hydrated',
      'Do not shave or wax within 24 hours before your hammam, as the scrub will irritate freshly shaved skin',
      'The experience can feel intense at first but most visitors describe it as one of the highlights of their Morocco trip',
      'Book an afternoon hammam before dinner for the best experience -- you will feel relaxed and glowing',
    ],
  },
  {
    audience: 'Tips for Women',
    icon: <Heart className="w-5 h-5" />,
    tips: [
      'In public hammams, women\'s sessions are often busier and more social than men\'s -- it is a community gathering place',
      'You can request a female attendant at tourist and luxury hammams',
      'Hair washing and conditioning with ghassoul clay is a traditional women\'s practice worth trying',
      'Some women bring snacks and tea to share in public hammams, especially on preparation days before weddings',
      'The bridal hammam (hammam al-aroussa) is a major pre-wedding tradition -- you may witness preparations',
    ],
  },
  {
    audience: 'Tips for Men',
    icon: <Users className="w-5 h-5" />,
    tips: [
      'Men\'s sessions in public hammams tend to be quicker and less social than women\'s sessions',
      'The scrub will be vigorous -- this is normal and expected',
      'In mixed tourist hammams, you can often request a male attendant if preferred',
      'Swim shorts or regular shorts are appropriate attire for the men\'s section',
      'Public hammam hours for men are often early morning (6-9 AM) and evening (6-10 PM) -- check locally',
    ],
  },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Droplets className="w-5 h-5" />, label: 'Experience', value: 'Steam Bath', detail: 'Ancient cleansing ritual' },
  { icon: <Coins className="w-5 h-5" />, label: 'Public Price', value: 'from 8 MAD', detail: 'Under $2' },
  { icon: <Sparkles className="w-5 h-5" />, label: 'Luxury Price', value: 'from 500 MAD', detail: 'Full spa packages' },
  { icon: <Clock className="w-5 h-5" />, label: 'Duration', value: '1-3 Hours', detail: 'Including rest time' },
  { icon: <ThermometerSun className="w-5 h-5" />, label: 'Temperature', value: '40-45 C', detail: 'In the hot room' },
  { icon: <Award className="w-5 h-5" />, label: 'Must-Try', value: 'Rating: 10/10', detail: 'Iconic Morocco experience' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function MoroccanHammamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Breadcrumb ---- */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Moroccan Hammam Guide</li>
        </ol>
      </nav>

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-hammam.webp"
            alt="Traditional Moroccan hammam entrance with ornate tilework, warm lighting, and steam rising from within"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Culture &amp; Wellness
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Ultimate Moroccan Hammam Guide for Tourists
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              Everything you need to know before your first hammam: step-by-step walkthrough, public vs luxury options, prices in MAD, etiquette rules, and the best hammams in every major city.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ---- Quick Stats ---- */}
      <section className="container-morocco py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border-primary p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#A0522D] mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide">{stat.label}</p>
              <p className="font-[family-name:var(--font-heading)] font-bold text-lg text-text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- What Is a Hammam ---- */}
      <section className="container-morocco pb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-6">
            What Is a Moroccan Hammam?
          </h2>
          <div className="prose prose-lg text-text-secondary space-y-4">
            <p>
              A hammam is a traditional steam bathhouse that has been central to Moroccan daily life for over a thousand years.
              Far more than just a place to wash, the hammam is a social institution, a wellness ritual, a beauty treatment,
              and a spiritual cleansing practice all wrapped into one.
            </p>
            <p>
              The word "hammam" comes from the Arabic word for "heat." Moroccan hammams descended from Roman baths via the
              Ottoman tradition, but evolved their own distinct character emphasizing vigorous exfoliation with black soap and
              a rough scrubbing mitt called a kessa. The result is skin so smooth and clean that it feels brand new.
            </p>
            <p>
              Every Moroccan neighborhood has at least one public hammam, and most Moroccans visit weekly as part of their
              regular hygiene and social routine. For tourists, the hammam is consistently rated as one of the most memorable
              and unique experiences of visiting Morocco.
            </p>
            <p>
              This guide is specifically written for tourists visiting Morocco for the first time. If you are looking for our
              broader wellness and spa content, see our{' '}
              <Link href="/spa" className="text-[#A0522D] underline hover:no-underline">spa guide</Link> and{' '}
              <Link href="/hammam" className="text-[#A0522D] underline hover:no-underline">hammam overview</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Image Strip ---- */}
      <section className="container-morocco pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/hero-hammam-interior.webp"
              alt="Interior of a traditional Moroccan hammam with tadelakt walls, warm lighting, and steam"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img
              src="/images/photo-hammam-interior.webp"
              alt="Hammam treatment room with marble surfaces, brass fixtures, and soft towels"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---- Types of Hammam ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
            Three Types of Hammam in Morocco
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Morocco offers three distinct hammam experiences at very different price points. Choose based on your comfort level and budget.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hammamTypes.map((h) => (
              <div key={h.type} className="bg-white rounded-xl border border-border-primary p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#A0522D]">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary">{h.type}</h3>
                    <div className="flex items-center gap-3 text-sm text-text-muted">
                      <span className="text-[#A0522D] font-medium">{h.price}</span>
                      <span>{h.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{h.description}</p>
                <p className="text-sm text-text-muted mb-3"><strong className="text-text-primary">Best for:</strong> {h.bestFor}</p>
                <div className="mb-3">
                  <p className="text-xs font-medium text-text-primary uppercase tracking-wide mb-2">What is included:</p>
                  <ul className="space-y-1">
                    {h.whatIncluded.map((item) => (
                      <li key={item} className="text-xs text-text-secondary flex items-start gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-500 mt-0.5 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-text-primary uppercase tracking-wide mb-2">Tips:</p>
                  <ul className="space-y-1">
                    {h.tips.map((tip) => (
                      <li key={tip} className="text-xs text-text-secondary flex items-start gap-2">
                        <Lightbulb className="w-3 h-3 text-[#C4960C] mt-0.5 flex-shrink-0" /> {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/art-moroccan-hammam-ritual.webp" alt="Illustration of a traditional Moroccan hammam ritual with steam-filled marble interiors, arched doorways, and bathing accessories including black soap and a kessa glove" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ---- Step by Step ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          Step-by-Step: What Happens in a Hammam
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Knowing the process in advance removes anxiety and lets you relax into the experience. Here is exactly what happens from arrival to departure.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {hammamSteps.map((s) => (
            <div key={s.step} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D] text-white flex items-center justify-center font-bold text-sm">
                {s.step}
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-[#C4960C] font-medium mb-2">Duration: {s.duration}</p>
                <p className="text-text-secondary leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Products ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
            Hammam Products: What They Are & Where to Buy
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Understanding the traditional products used in a hammam enriches your experience and helps you shop for authentic souvenirs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hammamProducts.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-border-primary p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF8F5] text-[#A0522D]">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary">{p.name}</h3>
                    <p className="text-xs text-text-muted italic">{p.arabicName}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">{p.description}</p>
                <div className="text-xs text-text-muted space-y-1">
                  <p><strong className="text-text-primary">Price:</strong> {p.price}</p>
                  <p><strong className="text-text-primary">Where to buy:</strong> {p.buyWhere}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Best Hammams by City ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          Best Hammams by City
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Our recommended hammams in each major Moroccan city, from affordable public baths to world-class luxury spas.
        </p>
        {bestHammams.map((city) => (
          <div key={city.city} className="mb-12">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#A0522D]" /> {city.city}
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {city.hammams.map((h) => (
                <article key={h.name} className="bg-white rounded-xl border border-border-primary p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-lg text-text-primary">{h.name}</h4>
                    <span className="bg-[#FAF8F5] text-[#A0522D] text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap">{h.price}</span>
                  </div>
                  <p className="text-xs text-[#C4960C] font-medium mb-2">{h.type}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-3">{h.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {h.highlights.map((hl) => (
                      <span key={hl} className="inline-flex items-center gap-1 text-xs text-text-muted bg-gray-50 px-2 py-1 rounded">
                        <CheckCircle className="w-3 h-3 text-emerald-500" /> {hl}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ---- Etiquette ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
            Hammam Etiquette
          </h2>
          <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
            Respecting hammam customs ensures a comfortable experience for you and everyone sharing the space.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {etiquetteRules.map((e) => (
              <div key={e.title} className="bg-white rounded-xl border border-border-primary p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#A0522D]">{e.icon}</div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary text-sm">{e.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{e.rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- First-Timer Tips ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          Tips for First-Timers
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          Advice tailored to your situation, whether you are a general first-timer or have specific considerations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {firstTimerTips.map((section) => (
            <div key={section.audience} className="bg-white rounded-xl border border-border-primary p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF8F5] text-[#A0522D]">
                  {section.icon}
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary">{section.audience}</h3>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip) => (
                  <li key={tip} className="text-text-secondary text-sm leading-relaxed flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Spa Image ---- */}
      <section className="container-morocco pb-12">
        <div className="rounded-xl overflow-hidden aspect-[21/9]">
          <img
            src="/images/hero-spa.webp"
            alt="Luxury Moroccan spa with candles, argan oil, and plush towels in a tadelakt-walled room"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ---- Related Pages ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-8 text-center">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Spa & Wellness Guide', href: '/spa', desc: 'Broader wellness, yoga, and spa resort options' },
              { title: 'Best Riads in Morocco', href: '/moroccan-riads', desc: 'Many top riads include private hammams' },
              { title: 'Morocco Etiquette Guide', href: '/etiquette', desc: 'Cultural customs beyond the hammam' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="bg-white rounded-xl border border-border-primary p-6 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-2 group-hover:text-[#A0522D] transition-colors flex items-center gap-2">
                  {link.title} <ArrowRight className="w-4 h-4" />
                </h3>
                <p className="text-text-secondary text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
