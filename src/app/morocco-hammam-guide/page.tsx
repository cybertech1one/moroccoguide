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
  HandHeart,
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
  title: 'Moroccan Hammam Guide 2026 | Traditional Bathhouse Experience, Etiquette & Best Hammams',
  description:
    'Complete guide to the Moroccan hammam experience. Step-by-step ritual walkthrough, hammam etiquette for tourists, what to bring, what to wear, public vs private hammam, health benefits, and the best hammams in Marrakech, Fes, and Essaouira. Prices from 50 MAD.',
  keywords: [
    'moroccan hammam',
    'hammam morocco',
    'hammam marokko',
    'traditional hammam experience',
    'hammam etiquette Morocco',
    'best hammams Morocco',
    'moroccan bathhouse',
    'hammam ritual steps',
    'what to wear hammam Morocco',
    'public hammam Morocco',
    'hammam Marrakech',
    'hammam Fes',
    'hammam Essaouira',
    'kessa glove Morocco',
    'savon beldi black soap',
    'ghassoul clay hammam',
    'hammam prices Morocco 2026',
    'women hammam Morocco',
    'hammam health benefits',
    'hammam tipping Morocco',
    'moroccan bath experience',
    'argan oil hammam',
  ],
  openGraph: {
    title: 'Moroccan Hammam Guide 2026 | Traditional Bathhouse Experience & Etiquette',
    description:
      'Everything you need to know about the Moroccan hammam. Step-by-step ritual guide, etiquette tips, what to bring, best hammams by city, and prices from 50 MAD.',
    url: `${BASE_URL}/morocco-hammam-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hammam-interior.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam interior with vaulted ceilings, warm stone floors, and atmospheric steam',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Hammam Guide 2026 | Bathhouse Experience & Etiquette',
    description:
      'Step-by-step hammam ritual, etiquette for tourists, what to bring, best hammams in Marrakech, Fes & Essaouira. Prices from 50 MAD.',
    images: [`${BASE_URL}/images/hero-hammam-interior.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-hammam-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-hammam-guide`,
  name: 'Moroccan Hammam Guide 2026 | Traditional Bathhouse Experience, Etiquette & Best Hammams',
  description:
    'Complete guide to the Moroccan hammam experience. Step-by-step ritual, etiquette, what to bring, best hammams by city, prices, and health benefits.',
  url: `${BASE_URL}/morocco-hammam-guide`,
  image: `${BASE_URL}/images/hero-hammam-interior.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-hammam-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Moroccan Hammam Guide', item: `${BASE_URL}/morocco-hammam-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Moroccan hammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Moroccan hammam is a traditional steam bathhouse that has been central to Moroccan culture for over a thousand years. It involves a multi-step ritual of steaming, cleansing with black soap (savon beldi), vigorous exfoliation with a kessa glove, a ghassoul clay mask, and finishing with argan oil. Every neighborhood in Morocco has its own hammam.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear in a Moroccan hammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a public hammam, women typically wear underwear bottoms and many go topless. Men wear underwear or swim shorts. Full nudity is not the norm. In luxury spas, you will be provided with disposable underwear, a robe, and slippers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a hammam cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A public hammam entry costs from 50 MAD, with a gommage (scrub) from an additional 50 MAD. Budget spa packages start from 300 MAD. Mid-range spa hammam experiences are from 500 MAD. Luxury hammam rituals range from 800 to 2,500 MAD. Seasonal pricing may apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Moroccan hammams gender-separated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, public hammams in Morocco are strictly gender-separated. Some have separate sections for men and women, while others alternate hours throughout the day. Couples who want to bathe together must visit a luxury spa that offers private couple rooms, from 1,200 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to a public hammam in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring a towel, underwear to wear inside, flip-flops, savon beldi (black soap), a kessa glove, ghassoul clay, shampoo, and optionally a small bucket. You can buy supplies at the hammam entrance or from a local herbalist (attar) for from 20 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the hammam safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hammams are very safe for tourists. If you are nervous, start with a mid-range spa where staff are accustomed to international visitors. Avoid hammams if you have heart conditions, are pregnant, or have skin infections. Stay hydrated and leave the hot room if you feel dizzy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I visit the hammam during my trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccans typically visit once a week. For travelers, once or twice during a week-long trip is ideal. One visit to a public hammam for the cultural experience, and one visit to a luxury spa for the indulgence. Leave 2-3 days between visits for skin recovery.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HAMMAM RITUAL STEPS
   ═══════════════════════════════════════════════════════════════ */

const hammamRitualSteps = [
  {
    step: 1,
    title: 'Arrive & Change',
    icon: Users,
    duration: '10 minutes',
    description:
      'At a public hammam, enter the changing area and store your clothes and valuables with an attendant or in a locker. Strip down to your underwear. At luxury spas, you will receive a robe, slippers, and be guided to a private changing area with amenities.',
    tip: 'Bring your own padlock for public hammam lockers. Wear flip-flops to protect your feet on the wet tile floors.',
  },
  {
    step: 2,
    title: 'Enter the Warm Room (Barid)',
    icon: Thermometer,
    duration: '10-15 minutes',
    description:
      'The hammam traditionally has three rooms of increasing temperature. Begin in the warm room to let your body acclimatize gradually. Pour warm water over yourself from a bucket (satel). The humidity starts to open your pores and relax your muscles.',
    tip: 'Drink at least half a liter of water before entering. You will sweat heavily and need to stay well hydrated throughout.',
  },
  {
    step: 3,
    title: 'Move to the Hot Room (Skhoun)',
    icon: Thermometer,
    duration: '15-20 minutes',
    description:
      'The hottest room is where the deep steaming happens. Temperatures reach 40-45 degrees Celsius with near-total humidity. Sit or lie on the warm marble floor and let the heat penetrate your muscles and open every pore. Pour hot water over yourself periodically.',
    tip: 'If you feel dizzy or lightheaded, move back to the cooler room immediately. There is no shame in pacing yourself.',
  },
  {
    step: 4,
    title: 'Apply Savon Beldi (Black Soap)',
    icon: Droplets,
    duration: '10 minutes',
    description:
      'A thick, dark olive-based soap is spread generously over your entire body. Let it sit for 5-10 minutes while the steam continues working. The soap softens dead skin cells and prepares your body for the scrubbing. In public hammams, you apply it yourself or a kessala (scrubber) will do it for you.',
    tip: 'Buy quality savon beldi from a herbalist (attar) rather than tourist shops. Authentic savon beldi is dark, thick, and smells of olives.',
  },
  {
    step: 5,
    title: 'The Gommage (Kessa Glove Scrub)',
    icon: Sparkles,
    duration: '15-20 minutes',
    description:
      'This is the centerpiece of the hammam ritual. Using a coarse exfoliating mitt called a kessa glove, the kessala scrubs your entire body in firm, long strokes. Rolls of dead skin visibly peel away. Every part of your body is scrubbed: arms, legs, back, stomach, neck. The result is astonishingly smooth skin.',
    tip: 'Say "bezzaf" (too much) or "shwiya" (gently) if the scrubbing is too vigorous. Kessalas appreciate honest communication.',
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    icon: Flower2,
    duration: '10-15 minutes',
    description:
      'A natural mineral clay from the Atlas Mountains, mixed with rose water, is applied as a full-body and hair mask. Ghassoul draws out impurities, tightens pores, and conditions both skin and hair. Let the mask dry slightly before rinsing. Luxury spas may add essential oils or honey.',
    tip: 'Ghassoul clay is available at any Moroccan herbalist from 15 MAD. It makes an excellent souvenir you can use at home.',
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    icon: Waves,
    duration: '10-15 minutes',
    description:
      'Rinse thoroughly with warm water, then gradually switch to cooler water. Move back through the rooms in reverse order, allowing your body temperature to decrease slowly. Some luxury spas offer a cold plunge pool or a refreshing eucalyptus mist at this stage.',
    tip: 'Alternate between warm and cool water during rinsing to boost circulation and close your pores gradually.',
  },
  {
    step: 8,
    title: 'Argan Oil & Rest',
    icon: Heart,
    duration: '20-30 minutes',
    description:
      'After drying off, apply argan oil to your damp skin to lock in moisture. Then rest in the changing area or relaxation lounge. At public hammams, locals drink mint tea and socialize. At luxury spas, you will be served tea, dried fruits, and Moroccan pastries in a serene relaxation room.',
    tip: 'Do not rush this step. The resting period is essential. Your body needs time to cool down, rehydrate, and absorb the benefits.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ETIQUETTE RULES
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Respect Gender Separation',
    icon: Users,
    description:
      'Public hammams have strict gender separation. Some have separate sections; others alternate hours throughout the day. Always check the schedule before visiting. Women can go topless; men keep underwear on at all times.',
  },
  {
    rule: 'Bring Your Own Supplies',
    icon: BookOpen,
    description:
      'For public hammams, bring: towel, underwear, flip-flops, savon beldi, kessa glove, ghassoul clay, shampoo, and a small bucket (or buy one there from 20 MAD). Luxury spas provide everything you need.',
  },
  {
    rule: 'Tip the Kessala',
    icon: DollarSign,
    description:
      'If a kessala scrubs you at a public hammam, tip from 20-50 MAD depending on the quality of service. At luxury spas, tipping from 50-100 MAD is appreciated but not mandatory. Tipping is an important part of hammam culture.',
  },
  {
    rule: 'Do Not Stare at Others',
    icon: ShieldCheck,
    description:
      'The hammam is a place of body neutrality and acceptance. People of all shapes, sizes, and ages come here. Keep your eyes on your own space and focus on your experience. This is deeply respected.',
  },
  {
    rule: 'Be Quiet & Respectful',
    icon: Heart,
    description:
      'While public hammams can be social and conversational, keep your voice moderate. In luxury spas, silence is expected. Never take photos inside any hammam. Leave your phone in the changing room.',
  },
  {
    rule: 'Hydrate Before & After',
    icon: Droplets,
    description:
      'Drink at least half a liter of water before entering. The intense heat causes heavy sweating and dehydration can lead to dizziness. Continue hydrating after your visit with water or mint tea.',
  },
  {
    rule: 'Avoid After Heavy Meals',
    icon: AlertTriangle,
    description:
      'Wait at least 2 hours after eating before visiting a hammam. The heat and steam on a full stomach can cause nausea and discomfort. A light snack beforehand is fine.',
  },
  {
    rule: 'Time Your Visit Well',
    icon: Clock,
    description:
      'Public hammams are busiest on Thursday evenings and Friday mornings (before Friday prayer). For a quieter experience, visit on weekday mornings. Luxury spas are quietest on weekday afternoons.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST HAMMAMS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const bestHammamsByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-hammam-ritual.webp',
    description:
      'Marrakech is the hammam capital of Morocco. The medina alone has dozens of neighborhood hammams alongside world-renowned luxury spas. From 50 MAD public baths to 2,500 MAD ultra-luxury rituals, every budget is served.',
    hammams: [
      { name: 'Heritage Spa', type: 'Boutique Spa', price: 'From 400 MAD', highlight: 'Restored riad, authentic hammam with luxury touches' },
      { name: 'Hammam de la Rose', type: 'Boutique Hammam', price: 'From 350 MAD', highlight: 'Rose-themed treatments with Dades Valley damask roses' },
      { name: 'Les Bains de Marrakech', type: 'Day Spa', price: 'From 500 MAD', highlight: 'Palace setting, bestselling ghassoul clay mask package' },
      { name: 'Hammam Dar el-Bacha', type: 'Historic Public', price: 'From 50 MAD', highlight: '16th-century, star-shaped skylights, authentic local experience' },
      { name: 'Hammam Mouassine', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Heart of medina, expert kessalas, popular with locals' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/art-moroccan-pattern-zellige.webp',
    description:
      'Fes offers a more authentic, less touristy hammam experience than Marrakech. The medina hammams are among the oldest in Morocco, some dating back centuries. Traditional Fassi techniques use local herbs and time-honored methods.',
    hammams: [
      { name: 'Hammam Sidi Aziz', type: 'Historic Public', price: 'From 50 MAD', highlight: 'One of the oldest hammams in the Fes medina, deeply traditional' },
      { name: 'Riad Laaroussa Spa', type: 'Riad Spa', price: 'From 400 MAD', highlight: '17th-century palace, original zellige, traditional Fassi techniques' },
      { name: 'Palais Amani Spa', type: 'Boutique Spa', price: 'From 350 MAD', highlight: 'In-house organic products, Andalusian garden herbs' },
      { name: 'Hammam Sidi Ali Ben Harazem', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Centuries-old neighborhood hammam, authentic local atmosphere' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Essaouira blends traditional hammam culture with a coastal, laid-back atmosphere. The town has charming neighborhood hammams and eco-conscious spas that incorporate Atlantic sea salt and seaweed into treatments.',
    hammams: [
      { name: 'Spa Lalla Mira', type: 'Eco Spa', price: 'From 300 MAD', highlight: 'Eco-friendly, argan oil specialty, rooftop Atlantic views' },
      { name: 'Heure Bleue Palais Spa', type: 'Boutique Spa', price: 'From 400 MAD', highlight: 'Heritage palace, heated indoor pool, sea salt scrubs' },
      { name: 'Les Bains de Mogador', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Local favorite near the medina, welcoming to visitors' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    description:
      'Casablanca offers a more modern take on the hammam alongside traditional public baths. The city has contemporary spas blending Moroccan tradition with international wellness trends, plus authentic neighborhood hammams.',
    hammams: [
      { name: 'Hammam de la Mosquee Hassan II', type: 'Historic Hammam', price: 'From 100 MAD', highlight: 'Adjacent to the iconic mosque, stunning architecture' },
      { name: 'Mythic Oriental Spa', type: 'Day Spa', price: 'From 350 MAD', highlight: 'Moroccan-Asian fusion treatments, central location' },
      { name: 'Hammam Ziani', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Popular neighborhood hammam, genuine local experience' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PUBLIC VS PRIVATE COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const hammamComparison = [
  {
    aspect: 'Setting',
    public: 'Neighborhood bathhouse with tiled rooms, domed ceilings, and star-shaped skylights. Often centuries old with beautiful but simple architecture.',
    private: 'Boutique or hotel spa with designer interiors, ambient lighting, plush relaxation lounges, and curated music playlists.',
  },
  {
    aspect: 'Price',
    public: 'From 50 MAD entry. Gommage from 50 MAD extra. Bring your own supplies or buy at entrance from 20 MAD. Total visit from 100 MAD.',
    private: 'From 300 MAD for a basic package. Luxury rituals from 800 to 2,500 MAD with premium products and multiple treatments included.',
  },
  {
    aspect: 'Products',
    public: 'Savon beldi (black olive soap), ghassoul clay, kessa glove, orange blossom water. Simple, natural, time-tested over centuries.',
    private: 'Premium branded products, argan oil blends, rose water, essential oils, gold-infused treatments, and imported organic products.',
  },
  {
    aspect: 'Experience',
    public: 'Communal, social, no-frills. You sit on tiled floors, get scrubbed vigorously, and leave feeling reborn. Locals chat and socialize.',
    private: 'Private or semi-private rooms. Massage tables, heated beds, gentle scrubbing, followed by massage. Calm, quiet, and curated.',
  },
  {
    aspect: 'Privacy',
    public: 'Gender-separated (different hours or sections). You wear underwear. Bodies of all shapes and ages are present and respected.',
    private: 'Private rooms for individuals or couples. Robes and slippers provided. Complete privacy guaranteed throughout the experience.',
  },
  {
    aspect: 'Best For',
    public: 'Adventurous travelers, budget travelers, those seeking authentic cultural immersion. Moroccans visit their local hammam weekly.',
    private: 'First-time visitors, couples, luxury travelers, those with limited time, and anyone wanting a guided, comfortable experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH BENEFITS
   ═══════════════════════════════════════════════════════════════ */

const healthBenefits = [
  {
    benefit: 'Deep Skin Exfoliation',
    icon: Sparkles,
    description: 'The kessa glove scrub removes layers of dead skin that regular showering cannot reach. Skin is left visibly smoother and softer, and pores are thoroughly cleansed.',
  },
  {
    benefit: 'Improved Circulation',
    icon: Heart,
    description: 'The alternating heat and cool water stimulates blood flow and improves lymphatic drainage. This helps reduce muscle tension and promotes faster recovery from physical activity.',
  },
  {
    benefit: 'Stress Relief & Relaxation',
    icon: HandHeart,
    description: 'The heat, steam, and rhythmic scrubbing trigger deep relaxation. Cortisol levels drop. Many visitors describe the hammam as the most relaxing experience of their Moroccan trip.',
  },
  {
    benefit: 'Respiratory Benefits',
    icon: Leaf,
    description: 'The hot, humid steam opens airways and can help clear congestion. Many hammams use eucalyptus-infused steam, which adds natural decongestant properties to the experience.',
  },
  {
    benefit: 'Detoxification',
    icon: Droplets,
    description: 'Intense sweating in the steam rooms helps the body release toxins through the skin. The ghassoul clay mask further draws out impurities, leaving skin cleaner at a cellular level.',
  },
  {
    benefit: 'Joint & Muscle Relief',
    icon: Thermometer,
    description: 'The sustained heat loosens stiff joints and relaxes tight muscles. The hammam has been used for centuries by Moroccans to ease aches, particularly after physical labor or long journeys.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO BRING CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const whatToBring = [
  { item: 'Towel (large)', essential: true, note: 'For drying off after. Public hammams do not provide towels.' },
  { item: 'Underwear to wear inside', essential: true, note: 'Women: underwear bottoms. Men: underwear or swim shorts.' },
  { item: 'Flip-flops', essential: true, note: 'Essential for wet tile floors. Prevents slipping and hygiene.' },
  { item: 'Savon beldi (black soap)', essential: true, note: 'From 20 MAD at herbalists. The foundation of the ritual.' },
  { item: 'Kessa glove', essential: true, note: 'From 15 MAD. Medium-grade recommended for first-timers.' },
  { item: 'Ghassoul clay', essential: false, note: 'From 15 MAD. Optional but recommended for the full experience.' },
  { item: 'Small bucket (satel)', essential: false, note: 'From 10 MAD at the hammam entrance. For pouring water.' },
  { item: 'Shampoo & conditioner', essential: false, note: 'Bring your own or use ghassoul clay for your hair.' },
  { item: 'Argan oil', essential: false, note: 'From 80 MAD cosmetic grade. Applied after the bath for moisture.' },
  { item: 'Water bottle', essential: true, note: 'Stay hydrated. Drink before, during breaks, and after.' },
  { item: 'Small plastic bag', essential: false, note: 'For your wet underwear and towel after the visit.' },
  { item: 'Padlock', essential: false, note: 'For the locker in the changing room at public hammams.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Public hammam entry', price: 'From 50 MAD', note: 'Steam rooms only, bring your own supplies' },
  { service: 'Kessala gommage (public)', price: 'From 50 MAD', note: 'Paid directly to the scrubber plus tip' },
  { service: 'Savon beldi + kessa glove', price: 'From 20 MAD', note: 'Buy at herbalist or hammam entrance' },
  { service: 'Ghassoul clay', price: 'From 15 MAD', note: 'Sold by weight at herbalists (attarine)' },
  { service: 'Budget spa hammam package', price: 'From 300 MAD', note: 'Hammam, gommage, and short massage' },
  { service: 'Mid-range spa package', price: 'From 500 MAD', note: 'Hammam, scrub, clay mask, 30-min massage' },
  { service: 'Luxury hammam ritual', price: 'From 800 MAD', note: 'Full ritual with premium products and massage' },
  { service: 'Ultra-luxury experience', price: 'From 1,500 MAD', note: 'Multi-hour ritual with bespoke products' },
  { service: 'Couples hammam (private)', price: 'From 1,200 MAD', note: 'Private room for two with full treatment' },
  { service: 'Argan oil massage (60 min)', price: 'From 300 MAD', note: 'Often added after the hammam ritual' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHammamGuidePage() {
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
            backgroundImage: 'url(/images/hero-hammam-interior.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Moroccan Hammam Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Culture &amp; Wellness
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Moroccan Hammam Guide:
            <br className="hidden md:block" /> Traditional Bathhouse Experience
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know about the hammam: the ritual, the etiquette, what to bring,
            and the best hammams across Morocco. From 50 MAD public baths to luxury spa rituals.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction: What is a Hammam ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Moroccan Hammam?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Moroccan hammam is far more than a bath. It is a cornerstone of social life, a weekly
                ritual that has shaped Moroccan culture for over a thousand years. Rooted in Roman and
                Ottoman bathing traditions, the hammam was adapted by Moroccans into something uniquely
                their own: a communal cleansing ritual that is equal parts hygiene, social gathering,
                and spiritual renewal.
              </p>
              <p>
                Every neighborhood in Morocco has its hammam. For most Moroccans, the weekly visit is as
                essential as Friday couscous. It is where mothers bring their daughters, where friends
                catch up on the week, where brides are ritually cleansed before their wedding, and where
                the stresses of daily life are literally scrubbed away with a rough kessa glove and
                a mountain of black soap.
              </p>
              <p>
                Historically, the hammam served a practical purpose: in a time before indoor plumbing,
                it was the only place to bathe properly. Today, even with modern amenities, Moroccans
                continue the tradition because the hammam provides something a shower at home cannot: deep
                exfoliation, communal warmth, and a sense of renewal that transcends the physical.
              </p>
              <p>
                For visitors to Morocco, the hammam is one of the most authentic cultural experiences
                available. Whether you spend 50 MAD at a public neighborhood hammam or 2,500 MAD at a
                world-class luxury spa, you will leave feeling profoundly renewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Public vs Private Hammam ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Public Hammam vs. Private Luxury Spa
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both offer the hammam ritual, but the experience is vastly different. Here is how they compare so you can choose what suits your comfort level and budget.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {hammamComparison.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Public Hammam</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.public}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Private Luxury Spa</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.private}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Hammam Ritual ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Hammam Ritual: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A first-time hammam visit can feel daunting. Here is exactly what happens at each stage, so you know what to expect and can relax into the experience.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-8">
                {hammamRitualSteps.map((step) => {
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

      {/* ── What to Bring ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Bring to a Public Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Luxury spas provide everything, but for a public hammam you need to come prepared. Here is the complete checklist.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Buy supplies from a local herbalist (attar) for the best quality and prices. Tourist shops charge significantly more.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-12 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="col-span-4 p-3 px-4">Item</div>
              <div className="col-span-2 p-3 px-4 text-center">Essential?</div>
              <div className="col-span-6 p-3 px-4">Note</div>
            </div>
            {whatToBring.map((item, i) => (
              <div
                key={item.item}
                className={`grid grid-cols-12 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="col-span-4 p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                <div className="col-span-2 p-3 px-4 text-center">
                  {item.essential ? (
                    <CheckCircle className="w-4 h-4 text-green-600 inline" />
                  ) : (
                    <span className="text-[var(--text-muted)]">Optional</span>
                  )}
                </div>
                <div className="col-span-6 p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Etiquette Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Etiquette for Tourists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Following these unwritten rules will ensure a respectful and enjoyable experience for you and everyone around you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ── Best Hammams by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hammams by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each Moroccan city has its own hammam character. Here are the top picks for every destination.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices. Seasonal pricing applies during peak tourist months (October-April) and may increase by 20-30%.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {bestHammamsByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`Hammam and bathhouse scene in ${city.city}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CityIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {city.city}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                    <div className="space-y-3">
                      {city.hammams.map((hammam, i) => (
                        <div key={i} className="p-3 bg-[var(--surface-muted)] rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                              <span className="text-sm font-medium text-[var(--text-primary)]">{hammam.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                              <span>{hammam.type}</span>
                              <span className="text-[var(--color-accent)] font-semibold">{hammam.price}</span>
                            </div>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] pl-5.5">{hammam.highlight}</p>
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
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Price Guide 2026
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for every level of hammam experience in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods.
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

      {/* ── Health Benefits ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Health Benefits of the Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The hammam is not just relaxation. It offers real, measurable health benefits that Moroccans have recognized for centuries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {healthBenefits.map((item) => {
              const BenefitIcon = item.icon;
              return (
                <div key={item.benefit} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <BenefitIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.benefit}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Women-Only & Gender Information ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Women, Men &amp; Gender Separation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding how gender separation works at Moroccan hammams is essential for planning your visit.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Women&apos;s Hammam Experience
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                For Moroccan women, the hammam is a deeply social space. Women gather with friends, mothers, daughters,
                and sisters. The atmosphere is relaxed and welcoming. Female solo travelers often find the women&apos;s
                hammam to be one of the warmest, most inclusive cultural experiences in Morocco. Women typically wear
                underwear bottoms; going topless is completely normal and accepted. Female kessalas provide the scrubbing service.
              </p>
              <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-primary)]">For solo female travelers:</span> The women&apos;s hammam is considered very safe. It is a communal, body-positive space where women of all ages and backgrounds come together. Many travelers describe it as a highlight of their Morocco trip.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Men&apos;s Hammam Experience
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The men&apos;s hammam is generally less social but equally welcoming. Men wear underwear or swim shorts
                throughout. Male kessalas provide the scrubbing. The atmosphere tends to be quieter and more focused on
                the bathing ritual itself. Male travelers sometimes find public hammams through their riad or hotel staff,
                who can recommend the best local option and confirm hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Couples &amp; Mixed Visits
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Public hammams are strictly gender-separated with no exceptions. Some hammams have separate sections;
                others alternate hours (e.g., women in the morning, men in the afternoon). Couples who want to share
                the hammam experience together must book a private session at a luxury spa. Couples packages start
                from 1,200 MAD and include a private hammam room for two with full treatment.
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
                What is a Moroccan hammam and how is it different from a regular bath?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A Moroccan hammam is a traditional steam bathhouse with a multi-step cleansing ritual. Unlike a regular
                bath or shower, it involves sustained steaming in progressively hotter rooms, cleansing with savon beldi
                (black soap), vigorous full-body exfoliation with a kessa glove, a ghassoul clay mask, and finishing with
                argan oil. The entire process takes 90 minutes to 2 hours and removes far more dead skin than any home
                bathing routine.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I wear in a Moroccan hammam?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In a public hammam, women typically wear underwear bottoms and many go topless. Men wear underwear or
                swim shorts. Full nudity is not the norm in Moroccan hammams, unlike Turkish or Finnish baths. In
                luxury spas, you will be given disposable underwear, a robe, and slippers upon arrival.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I tip the kessala (scrubber)?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                At a public hammam, tip from 20-50 MAD depending on the quality and duration of the scrub. Tipping is
                expected and is an important part of the kessala&apos;s income. At luxury spas, tipping from 50-100 MAD
                is appreciated but not mandatory as service charges are often included.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is the hammam suitable for first-time visitors to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. If you are nervous about the public hammam, start with a mid-range spa (from 300 MAD)
                where staff are accustomed to international visitors and will guide you through each step. Once you
                have experienced it in a comfortable setting, you may feel ready to try a more authentic public hammam.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can men and women visit the hammam together?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not in public hammams, which are strictly gender-separated. Some public hammams have separate sections;
                others alternate hours for men and women throughout the day. If you want to visit as a couple, book a
                private session at a luxury spa with couple rooms (from 1,200 MAD for two).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Moroccan hammam products safe for sensitive skin?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional products like savon beldi, ghassoul clay, and argan oil are natural and generally
                well-tolerated. However, the kessa scrub can be vigorous and may irritate very sensitive skin. Ask for
                a gentler scrub (gommage doux) if needed. If you have skin allergies, do a patch test with any new
                product or inform the spa staff in advance.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How often should I visit the hammam during my trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccans typically visit once a week. For travelers, once or twice during a week-long trip is ideal.
                Consider one visit to a public hammam for the cultural experience, and perhaps one visit to a luxury spa
                for the indulgence. Leave at least 2-3 days between visits to let your skin recover from the exfoliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spa Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top 20 luxury spas and wellness experiences across Morocco, from resort spas to boutique day spas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Understand Moroccan customs, traditions, and cultural etiquette to enhance your travel experience.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stay in beautifully restored traditional Moroccan riads with hammams, courtyards, and rooftop terraces.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-solo-female-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Solo Female Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete safety guide for women traveling alone in Morocco, including hammam tips and cultural advice.
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
