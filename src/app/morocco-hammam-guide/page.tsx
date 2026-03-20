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
  Lightbulb,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Complete Moroccan Hammam Guide 2026 | Traditional Bathhouses, Etiquette & Best Hammams',
  description:
    'Everything about the Moroccan hammam: step-by-step ritual, etiquette for tourists, what to bring, types of hammams, hammam products (black soap, ghassoul clay, kessa glove), best hammams in Marrakech, Fes, Casablanca, Essaouira & Meknes. Prices from 50 MAD.',
  keywords: [
    'moroccan hammam',
    'morocco traditional bath',
    'hammam etiquette',
    'best hammams morocco',
    'hammam marrakech',
    'hammam fes',
    'moroccan bathhouse',
    'hammam ritual steps',
    'what to wear hammam morocco',
    'public hammam morocco',
    'kessa glove morocco',
    'savon beldi black soap',
    'ghassoul clay hammam',
    'hammam prices morocco 2026',
    'hammam health benefits',
    'hammam tipping morocco',
    'argan oil hammam',
    'moroccan bath experience',
    'luxury hammam morocco',
    'neighborhood hammam morocco',
  ],
  openGraph: {
    title: 'Complete Moroccan Hammam Guide 2026 | Bathhouses, Etiquette & Best Picks',
    description:
      'Step-by-step hammam ritual guide, etiquette tips, what to bring, 4 types of hammams, best hammams by city, products guide, and prices from 50 MAD.',
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
      'Step-by-step hammam ritual, etiquette for tourists, best hammams in Marrakech, Fes, Casablanca, Essaouira & Meknes. Prices from 50 MAD.',
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
  name: 'Complete Moroccan Hammam Guide 2026 | Traditional Bathhouses, Etiquette & Best Hammams',
  description:
    'Complete guide to the Moroccan hammam experience. Step-by-step ritual, types of hammams, etiquette, products, best hammams by city, prices, and health benefits.',
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
        text: 'A Moroccan hammam is a traditional steam bathhouse central to Moroccan culture for over a thousand years. The ritual involves steaming in progressively hotter rooms, cleansing with savon beldi (black soap), vigorous exfoliation with a kessa glove, a ghassoul clay mask, and finishing with argan oil. Every neighborhood in Morocco has its own hammam.',
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
        text: 'Moroccans typically visit once a week. For travelers, once or twice during a week-long trip is ideal. One visit to a public hammam for the cultural experience, and one to a luxury spa for the indulgence. Leave 2-3 days between visits for skin recovery.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF HAMMAMS
   ═══════════════════════════════════════════════════════════════ */

const hammamTypes = [
  {
    type: 'Public / Neighborhood Hammam',
    icon: Building,
    price: 'From 50 MAD entry',
    description:
      'The backbone of Moroccan bathing culture. Found in every neighborhood (hay), these no-frills bathhouses serve locals on a daily and weekly basis. Tiled rooms with domed ceilings, star-shaped skylights, and buckets of hot water drawn from a central boiler. Gender-separated by time or section.',
    bestFor: 'Budget travelers, cultural immersion, authentic experience',
    examples: 'Hammam Dar el-Bacha (Marrakech), Hammam Sidi Aziz (Fes), Hammam Ziani (Casablanca)',
  },
  {
    type: 'Tourist-Friendly Spa Hammam',
    icon: Sparkles,
    price: 'From 300 MAD per package',
    description:
      'Mid-range spas designed for international visitors. Staff speak French and English, guide you through every step, and provide all supplies. The hammam ritual is gentler, the rooms are cleaner, and the ambiance is more curated. Good balance of authenticity and comfort.',
    bestFor: 'First-time visitors, families, those wanting a guided experience',
    examples: 'Heritage Spa (Marrakech), Palais Amani Spa (Fes), Spa Lalla Mira (Essaouira)',
  },
  {
    type: 'Luxury Hotel Hammam',
    icon: Crown,
    price: 'From 800 MAD per ritual',
    description:
      'Five-star hotel and resort spas with private hammam suites, marble interiors, heated massage beds, bespoke products, and post-treatment lounges with mint tea and pastries. Many use imported organic products alongside traditional Moroccan ingredients. Couples suites available.',
    bestFor: 'Luxury travelers, couples, those celebrating special occasions',
    examples: 'La Mamounia Spa (Marrakech), Royal Mansour Spa (Marrakech), Riad Laaroussa Spa (Fes)',
  },
  {
    type: 'Royal / Historic Hammam',
    icon: Award,
    price: 'From 50 MAD (public) to 500 MAD (restored)',
    description:
      'Hammams with centuries of history, some dating back to the Saadian or Marinid dynasties. A few operate as public baths at local prices; others have been restored into boutique spa experiences. The architecture alone is worth the visit: carved stucco, original zellige tilework, and barrel-vaulted ceilings.',
    bestFor: 'History lovers, architecture enthusiasts, photographers',
    examples: 'Hammam Dar el-Bacha (Marrakech, 16th century), Hammam Sidi Ali Ben Harazem (Fes)',
  },
];

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
      'Enter the changing area and store clothes and valuables with an attendant or in a locker. Strip down to underwear. At luxury spas, you receive a robe, slippers, and are guided to a private changing area with amenities.',
    tip: 'Bring your own padlock for public hammam lockers. Wear flip-flops from the start to protect your feet on wet tile floors.',
  },
  {
    step: 2,
    title: 'Enter the Warm Room (Barid)',
    icon: Thermometer,
    duration: '10-15 minutes',
    description:
      'The hammam traditionally has three rooms of increasing temperature. Begin in the warm room to let your body acclimatize. Pour warm water over yourself from a bucket (satel). Humidity starts opening your pores and loosening your muscles.',
    tip: 'Drink at least half a liter of water before entering. You will sweat heavily and need hydration throughout.',
  },
  {
    step: 3,
    title: 'Move to the Hot Room (Skhoun)',
    icon: Thermometer,
    duration: '15-20 minutes',
    description:
      'The hottest room reaches 40-45 degrees Celsius with near-total humidity. Sit or lie on the warm marble floor and let the heat penetrate your muscles and open every pore. Pour hot water over yourself periodically from a bucket.',
    tip: 'If you feel dizzy or lightheaded, move back to the cooler room immediately. There is no shame in pacing yourself.',
  },
  {
    step: 4,
    title: 'Apply Savon Beldi (Black Soap)',
    icon: Droplets,
    duration: '10 minutes',
    description:
      'A thick, dark olive-based soap is spread generously over your entire body. Let it sit for 5-10 minutes while the steam continues working. The soap softens dead skin cells and prepares your body for scrubbing. In public hammams, you apply it yourself or the kessala does it for you.',
    tip: 'Buy quality savon beldi from a herbalist (attar) rather than tourist shops. Authentic savon beldi is dark, thick, and smells of olives.',
  },
  {
    step: 5,
    title: 'The Gommage (Kessa Glove Scrub)',
    icon: Sparkles,
    duration: '15-20 minutes',
    description:
      'The centerpiece of the ritual. Using a coarse exfoliating mitt called a kessa glove, the kessala scrubs your entire body in firm, long strokes. Rolls of dead skin visibly peel away. Arms, legs, back, stomach, neck -- everything is scrubbed. The result: astonishingly smooth skin.',
    tip: 'Say "bezzaf" (too much) or "shwiya" (gently) if the scrubbing is too vigorous. Kessalas appreciate honest communication.',
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    icon: Flower2,
    duration: '10-15 minutes',
    description:
      'Natural mineral clay from the Atlas Mountains, mixed with rose water, is applied as a full-body and hair mask. Ghassoul draws out impurities, tightens pores, and conditions both skin and hair. Let the mask dry slightly before rinsing. Luxury spas may add essential oils or honey.',
    tip: 'Ghassoul clay is available at any Moroccan herbalist from 15 MAD. It makes an excellent souvenir that works at home too.',
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    icon: Waves,
    duration: '10-15 minutes',
    description:
      'Rinse thoroughly with warm water, then gradually switch to cooler water. Move back through the rooms in reverse order, letting your body temperature decrease slowly. Some luxury spas offer a cold plunge pool or refreshing eucalyptus mist at this stage.',
    tip: 'Alternate between warm and cool water during rinsing to boost circulation and close pores gradually.',
  },
  {
    step: 8,
    title: 'Argan Oil & Rest',
    icon: Heart,
    duration: '20-30 minutes',
    description:
      'After drying off, apply argan oil to damp skin to lock in moisture. Then rest in the changing area or relaxation lounge. At public hammams, locals drink mint tea and socialize. At luxury spas, tea, dried fruits, and Moroccan pastries are served in a serene relaxation room.',
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
      'Public hammams have strict gender separation. Some have separate sections; others alternate hours. Always check the schedule before visiting. Women can go topless; men keep underwear on at all times.',
  },
  {
    rule: 'Bring Your Own Supplies',
    icon: BookOpen,
    description:
      'For public hammams, bring: towel, underwear, flip-flops, savon beldi, kessa glove, ghassoul clay, shampoo, and a small bucket (or buy one from 20 MAD). Luxury spas provide everything.',
  },
  {
    rule: 'Tip the Kessala',
    icon: DollarSign,
    description:
      'If a kessala scrubs you at a public hammam, tip from 20-50 MAD depending on quality. At luxury spas, tipping from 50-100 MAD is appreciated but not mandatory. Tipping matters to kessalas.',
  },
  {
    rule: 'Do Not Stare',
    icon: ShieldCheck,
    description:
      'The hammam is a place of body neutrality and acceptance. People of all shapes, sizes, and ages come here. Keep your eyes on your own space. This is deeply respected.',
  },
  {
    rule: 'Be Quiet & Respectful',
    icon: Heart,
    description:
      'Public hammams can be social and conversational, but keep your voice moderate. In luxury spas, silence is expected. Never take photos inside any hammam. Leave your phone in the changing room.',
  },
  {
    rule: 'Hydrate Before & After',
    icon: Droplets,
    description:
      'Drink at least half a liter of water before entering. The intense heat causes heavy sweating and dehydration leads to dizziness. Continue hydrating after with water or mint tea.',
  },
  {
    rule: 'Avoid After Heavy Meals',
    icon: AlertTriangle,
    description:
      'Wait at least 2 hours after eating. Heat and steam on a full stomach cause nausea. A light snack beforehand is fine.',
  },
  {
    rule: 'Time Your Visit Well',
    icon: Clock,
    description:
      'Public hammams are busiest on Thursday evenings and Friday mornings (before Friday prayer). For a quieter experience, go on weekday mornings. Luxury spas are quietest on weekday afternoons.',
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
      'Marrakech is the hammam capital of Morocco. The medina alone has dozens of neighborhood hammams alongside world-renowned luxury spas. Every budget level is covered here.',
    hammams: [
      { name: 'Heritage Spa', type: 'Boutique Spa', price: 'From 400 MAD', highlight: 'Restored riad, authentic hammam with luxury touches' },
      { name: 'Hammam de la Rose', type: 'Boutique Hammam', price: 'From 350 MAD', highlight: 'Rose-themed treatments with Dades Valley damask roses' },
      { name: 'Les Bains de Marrakech', type: 'Day Spa', price: 'From 500 MAD', highlight: 'Palace setting, bestselling ghassoul clay mask package' },
      { name: 'Hammam Dar el-Bacha', type: 'Historic Public', price: 'From 50 MAD', highlight: '16th-century, star-shaped skylights, deeply authentic' },
      { name: 'Hammam Mouassine', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Heart of medina, expert kessalas, popular with locals' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/art-moroccan-pattern-zellige.webp',
    description:
      'Fes offers a more authentic, less touristy hammam experience. The medina hammams are among the oldest in Morocco, some dating back centuries. Fassi techniques use local herbs and time-honored methods.',
    hammams: [
      { name: 'Hammam Sidi Aziz', type: 'Historic Public', price: 'From 50 MAD', highlight: 'One of the oldest hammams in the Fes medina' },
      { name: 'Riad Laaroussa Spa', type: 'Riad Spa', price: 'From 400 MAD', highlight: '17th-century palace, original zellige, Fassi techniques' },
      { name: 'Palais Amani Spa', type: 'Boutique Spa', price: 'From 350 MAD', highlight: 'In-house organic products, Andalusian garden herbs' },
      { name: 'Hammam Sidi Ali Ben Harazem', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Centuries-old neighborhood hammam, deeply local' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    description:
      'Casablanca blends modern wellness with traditional public baths. Contemporary spas fuse Moroccan tradition with international trends alongside authentic neighborhood hammams.',
    hammams: [
      { name: 'Hammam de la Mosquee Hassan II', type: 'Historic Hammam', price: 'From 100 MAD', highlight: 'Adjacent to the iconic mosque, stunning architecture' },
      { name: 'Mythic Oriental Spa', type: 'Day Spa', price: 'From 350 MAD', highlight: 'Moroccan-Asian fusion treatments, central location' },
      { name: 'Hammam Ziani', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Popular neighborhood hammam, genuine local vibe' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Essaouira blends traditional hammam culture with a coastal, laid-back atmosphere. Eco-conscious spas incorporate Atlantic sea salt and seaweed into treatments here.',
    hammams: [
      { name: 'Spa Lalla Mira', type: 'Eco Spa', price: 'From 300 MAD', highlight: 'Eco-friendly, argan oil specialty, rooftop Atlantic views' },
      { name: 'Heure Bleue Palais Spa', type: 'Boutique Spa', price: 'From 400 MAD', highlight: 'Heritage palace, heated indoor pool, sea salt scrubs' },
      { name: 'Les Bains de Mogador', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Local favorite near the medina, welcoming to visitors' },
    ],
  },
  {
    city: 'Meknes',
    icon: MapPin,
    image: '/images/art-moroccan-pattern-zellige.webp',
    description:
      'Meknes is often overlooked by tourists, making its hammams refreshingly local. The imperial city has well-preserved neighborhood hammams where you may be the only foreigner, plus a handful of riad spas.',
    hammams: [
      { name: 'Hammam Jedid', type: 'Historic Public', price: 'From 50 MAD', highlight: 'Near Bab Mansour, centuries-old neighborhood institution' },
      { name: 'Riad Lahboul Spa', type: 'Riad Spa', price: 'From 300 MAD', highlight: 'Restored riad with private hammam, argan oil treatments' },
      { name: 'Hammam Bab Berdieyenne', type: 'Public Hammam', price: 'From 50 MAD', highlight: 'Working-class neighborhood hammam, completely authentic' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HAMMAM PRODUCTS
   ═══════════════════════════════════════════════════════════════ */

const hammamProducts = [
  {
    name: 'Savon Beldi (Black Soap)',
    icon: Droplets,
    price: 'From 20 MAD (250g)',
    description:
      'A thick, dark paste made from crushed olives, olive oil, and sometimes eucalyptus. Applied before the scrub to soften dead skin. Has a rich, earthy olive scent. Authentic versions come from Marrakech and the Souss region.',
    buyingTip: 'Buy from herbalists (attarine), not tourist shops. Real savon beldi is very dark, almost black, and has a thick paste-like consistency. Avoid watery or bright-colored imitations.',
  },
  {
    name: 'Ghassoul Clay (Rhassoul)',
    icon: Flower2,
    price: 'From 15 MAD (200g)',
    description:
      'A natural mineral clay mined exclusively from the Atlas Mountains near Fes. Mixed with rose water to form a paste, it draws out impurities, tightens pores, and conditions hair. Used for over 1,400 years in Morocco.',
    buyingTip: 'Look for chunks of raw ghassoul rather than pre-ground powder -- the chunks indicate less processing. The best quality comes from Moulouya Valley deposits.',
  },
  {
    name: 'Kessa Glove',
    icon: Sparkles,
    price: 'From 15 MAD',
    description:
      'A coarse exfoliating mitt woven from plant fibers or synthetic material. Comes in different grades: soft (for face and sensitive skin), medium (general body use), and rough (deep exfoliation). The gommage scrub is impossible without one.',
    buyingTip: 'Medium-grade is best for first-timers. Replace your kessa glove every 2-3 months. Let it dry completely between uses to prevent mildew.',
  },
  {
    name: 'Argan Oil (Cosmetic Grade)',
    icon: Gem,
    price: 'From 80 MAD (100ml)',
    description:
      'Cold-pressed from the nuts of the argan tree, found only in southwestern Morocco near Essaouira and Agadir. Applied after the hammam to lock moisture into freshly exfoliated skin. Rich in vitamin E and essential fatty acids.',
    buyingTip: 'Cosmetic argan oil is deodorized and lighter than culinary argan oil. Buy from women\'s cooperatives near Essaouira for fair-trade certified quality. One drop goes a long way.',
  },
  {
    name: 'Rose Water',
    icon: Heart,
    price: 'From 25 MAD (250ml)',
    description:
      'Distilled from Damask roses grown in the Dades Valley (Kelaat M\'Gouna). Used to mix ghassoul clay, as a facial toner after the bath, and to scent the hammam atmosphere. The rose harvest happens each May.',
    buyingTip: 'True rose water has a delicate floral scent, not an overpowering perfume smell. Bottles from the Dades Valley cooperatives are the most authentic.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HEALTH BENEFITS
   ═══════════════════════════════════════════════════════════════ */

const healthBenefits = [
  {
    benefit: 'Deep Skin Exfoliation',
    icon: Sparkles,
    description: 'The kessa glove scrub removes layers of dead skin that regular showering cannot reach. Skin is left visibly smoother, and pores are thoroughly cleansed.',
  },
  {
    benefit: 'Improved Circulation',
    icon: Heart,
    description: 'Alternating heat and cool water stimulates blood flow and improves lymphatic drainage. This reduces muscle tension and promotes faster recovery from physical activity.',
  },
  {
    benefit: 'Stress Relief',
    icon: HandHeart,
    description: 'Heat, steam, and rhythmic scrubbing trigger deep relaxation. Cortisol levels drop. Many visitors describe the hammam as the most relaxing experience of their Morocco trip.',
  },
  {
    benefit: 'Respiratory Benefits',
    icon: Leaf,
    description: 'Hot, humid steam opens airways and clears congestion. Many hammams use eucalyptus-infused steam, adding natural decongestant properties.',
  },
  {
    benefit: 'Detoxification',
    icon: Droplets,
    description: 'Intense sweating helps release toxins through the skin. The ghassoul clay mask draws out additional impurities, leaving skin cleaner at a cellular level.',
  },
  {
    benefit: 'Joint & Muscle Relief',
    icon: Thermometer,
    description: 'Sustained heat loosens stiff joints and relaxes tight muscles. Moroccans have used the hammam to ease aches after physical labor for centuries.',
  },
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
   DATA: FIRST-TIMER TIPS
   ═══════════════════════════════════════════════════════════════ */

const firstTimerTips = [
  {
    tip: 'Start with a Mid-Range Spa',
    icon: ShieldCheck,
    description: 'Your first hammam should be at a tourist-friendly spa (from 300 MAD) where English-speaking staff guide you step by step. Save the raw public hammam experience for your second visit.',
  },
  {
    tip: 'Ask Your Riad for Recommendations',
    icon: Building,
    description: 'Riad owners know the best local hammams and can confirm schedules, prices, and which ones welcome tourists. Some riads have their own private hammams.',
  },
  {
    tip: 'Go Early in the Day',
    icon: Clock,
    description: 'Morning visits mean cleaner water, fewer crowds, and more attentive kessalas. Thursday nights and Friday mornings are peak times at public hammams.',
  },
  {
    tip: 'Hydrate Aggressively',
    icon: Droplets,
    description: 'Drink a full liter of water in the hour before your visit. Bring a water bottle inside. Dehydration in 45-degree steam happens fast and causes dizziness.',
  },
  {
    tip: 'Communicate with Your Kessala',
    icon: Users,
    description: 'Use "shwiya" (gently), "bezzaf" (too much), or "meziane" (good). Kessalas respect feedback. The scrub should be firm but not painful.',
  },
  {
    tip: 'Allow Two Hours Minimum',
    icon: Clock,
    description: 'Rushing a hammam defeats its purpose. The ritual takes 90 minutes, but you need time to change, rest, and drink tea afterward. Plan nothing for at least 2 hours.',
  },
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
          style={{ backgroundImage: 'url(/images/hero-hammam-interior.webp)' }}
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
            Complete Guide to Moroccan Hammams
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The ritual, the etiquette, the products, and the best hammams across Morocco.
            From 50 MAD public baths to 2,500 MAD luxury spa rituals.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Section 1: What Is a Hammam ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Moroccan Hammam?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Moroccan hammam is far more than a bath. It is a cornerstone of daily life, a weekly
                ritual that has shaped Moroccan culture for over a thousand years. Rooted in Roman and
                Ottoman bathing traditions, the hammam was adapted by Moroccans into something uniquely
                their own: a communal cleansing ritual that is equal parts hygiene, social gathering,
                and spiritual renewal.
              </p>
              <p>
                Every neighborhood in Morocco has its hammam. For most Moroccans, the weekly visit is as
                essential as Friday couscous. Mothers bring their daughters. Friends catch up on the week.
                Brides are ritually cleansed before their wedding. The stresses of daily life are literally
                scrubbed away with a rough kessa glove and a mound of black soap.
              </p>
              <p>
                Historically, the hammam served a practical purpose: before indoor plumbing existed, it
                was the only place to bathe properly. Today, even with modern amenities, the tradition
                continues because a hammam provides something a shower at home cannot -- deep exfoliation,
                communal warmth, and a sense of renewal that goes beyond the physical.
              </p>
              <p>
                The word &quot;hammam&quot; comes from the Arabic root &quot;hamma,&quot; meaning &quot;to heat.&quot;
                The earliest Moroccan hammams date to the 8th century, built alongside mosques as places
                of ritual purification (ghusl) before prayer. The Almohad and Marinid dynasties expanded
                hammam construction throughout the 12th-14th centuries, and many of those original
                structures still operate today in Fes and Marrakech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Types of Hammams ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Four Types of Moroccan Hammams
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not all hammams are the same. The experience, price, and atmosphere vary dramatically depending on which type you choose.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hammamTypes.map((ht) => {
              const TypeIcon = ht.icon;
              return (
                <div key={ht.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TypeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {ht.type}
                      </h3>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{ht.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{ht.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 p-2 bg-[var(--surface-muted)] rounded-lg">
                      <Star className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]"><span className="font-semibold">Best for:</span> {ht.bestFor}</p>
                    </div>
                    <div className="flex items-start gap-2 p-2 bg-[var(--surface-muted)] rounded-lg">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]"><span className="font-semibold">Examples:</span> {ht.examples}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: Step-by-Step Hammam Ritual ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect: Step by Step
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A first-time hammam visit can feel daunting. Here is exactly what happens at each stage so you can relax into the experience.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-8">
                {hammamRitualSteps.map((step) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Etiquette Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Etiquette for Tourists
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Following these unwritten rules ensures a respectful and enjoyable experience for everyone.
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

      {/* ── Section 5: Best Hammams by City ── */}
      <section className="py-16 md:py-20">
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

      {/* ── Section 6: Hammam Products ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Products: What They Are &amp; Where to Buy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five products define the hammam ritual. All are natural, locally sourced, and available at herbalists (attarine) across Morocco.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {hammamProducts.map((product) => {
              const ProductIcon = product.icon;
              return (
                <div key={product.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-1">
                      <ProductIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {product.name}
                        </h3>
                        <span className="text-sm text-[var(--color-accent)] font-semibold">{product.price}</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{product.description}</p>
                      <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                        <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <p className="text-xs text-[var(--text-muted)]">
                          <span className="font-semibold text-[var(--text-primary)]">Buying tip:</span> {product.buyingTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 7: Health Benefits ── */}
      <section className="py-16 md:py-20">
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

      {/* ── Section 8: Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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

      {/* ── Section 9: Tips for First-Timers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for First-Timers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six pieces of practical advice to make your first hammam visit smooth and memorable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {firstTimerTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 10: FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is a Moroccan hammam and how is it different from a sauna?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A Moroccan hammam uses humid steam (not dry heat like a sauna) combined with a multi-step
                cleansing ritual: steaming in progressively hotter rooms, cleansing with savon beldi (black
                soap), vigorous full-body exfoliation with a kessa glove, a ghassoul clay mask, and argan
                oil. The entire process takes 90 minutes to 2 hours. Saunas, by contrast, involve sitting
                in dry heat without any scrubbing or product application.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I wear inside the hammam?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In public hammams, women typically wear underwear bottoms and many go topless. Men wear
                underwear or swim shorts. Full nudity is not the norm in Morocco, unlike Turkish or
                Finnish baths. Luxury spas provide disposable underwear, a robe, and slippers upon arrival.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I tip the kessala (scrubber)?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                At a public hammam, tip from 20-50 MAD depending on quality and duration. Tipping is
                expected and forms a significant part of the kessala&apos;s income. At luxury spas,
                tipping from 50-100 MAD is appreciated but not mandatory as service charges are
                typically included in the price.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can men and women visit the hammam together?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not in public hammams, which are strictly gender-separated. Some have separate sections;
                others alternate hours for men and women. If you want to visit as a couple, book a private
                session at a luxury spa with couples rooms (from 1,200 MAD for two with full treatment).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is the hammam suitable for people with sensitive skin?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional products like savon beldi, ghassoul clay, and argan oil are natural and
                generally well-tolerated. However, the kessa scrub can be vigorous. Ask for a gentler
                scrub (&quot;gommage doux&quot;) if needed. If you have skin allergies, do a patch test
                with any new product first, or inform spa staff in advance about your sensitivities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Who should avoid the hammam?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Avoid the hammam if you have a heart condition, are pregnant, have active skin infections
                or open wounds, or have very low blood pressure. The intense heat (40-45 degrees Celsius)
                and high humidity place stress on the cardiovascular system. When in doubt, consult
                your doctor before visiting.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How often should I visit the hammam during my trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccans typically visit once a week. For travelers, once or twice during a week-long trip
                is ideal. Try one visit to a public hammam for the cultural experience, and one to a luxury
                spa for the indulgence. Leave at least 2-3 days between visits so your skin can recover
                from the intensive exfoliation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 11: Related Guides ── */}
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
                Moroccan customs, traditions, and cultural etiquette to enhance your travel experience.
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
                Stay in restored traditional riads with hammams, courtyards, and rooftop terraces.
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
                Safety guide for women traveling alone in Morocco, including hammam tips and cultural advice.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 12: CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience the Moroccan Hammam?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Browse our city guides to find the best hammams at your destination. From 50 MAD
            neighborhood baths in Fes to luxury spa rituals in Marrakech, the hammam is
            waiting.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Fes
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Explore Essaouira
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
