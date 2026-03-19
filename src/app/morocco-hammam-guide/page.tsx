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
  Package,
  Eye,
} from 'lucide-react';

/* ================================================================
   CONSTANTS
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Hammam Experience Guide 2026 | Traditional Hammam Step-by-Step',
  description:
    'Complete guide to the traditional Moroccan hammam experience. Public vs private vs luxury hammams, step-by-step walkthrough, what to bring, etiquette rules, prices from 50 MAD, and the best hammams in Marrakech, Fes, and Essaouira.',
  keywords: [
    'Morocco hammam experience',
    'traditional hammam guide',
    'Moroccan hammam',
    'hammam Morocco',
    'public hammam Morocco',
    'luxury hammam Marrakech',
    'hammam etiquette',
    'what to expect hammam',
    'hammam prices Morocco',
    'best hammams Marrakech',
    'best hammams Fes',
    'hammam Essaouira',
    'savon beldi black soap',
    'kessa glove Morocco',
    'gommage Morocco',
    'hammam first time tips',
    'Moroccan bath experience',
    'hammam step by step',
    'what to bring hammam Morocco',
    'Morocco wellness 2026',
  ],
  openGraph: {
    title: 'Morocco Hammam Experience Guide 2026 | Traditional Hammam Step-by-Step',
    description:
      'Everything you need to know about the traditional Moroccan hammam. Public vs luxury, step-by-step guide, etiquette, prices from 50 MAD, and the best hammams by city.',
    url: `${BASE_URL}/morocco-hammam-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hammam-interior.webp`,
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam interior with vaulted ceilings and warm stone floors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Hammam Experience Guide 2026 | Step-by-Step',
    description:
      'From 50 MAD public baths to luxury rituals. Complete guide to the traditional Moroccan hammam with etiquette, prices, and top hammams by city.',
    images: [`${BASE_URL}/images/hero-hammam-interior.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-hammam-guide` },
};

/* ================================================================
   JSON-LD STRUCTURED DATA: TRAVEL GUIDE
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-hammam-guide`,
  name: 'Morocco Hammam Experience Guide 2026 | Traditional Hammam Step-by-Step',
  description:
    'Complete guide to the traditional Moroccan hammam experience. Types, step-by-step walkthrough, etiquette, prices, and the best hammams across Marrakech, Fes, and Essaouira.',
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Hammam Guide', item: `${BASE_URL}/morocco-hammam-guide` },
    ],
  },
};

/* ================================================================
   JSON-LD STRUCTURED DATA: FAQ PAGE
   ================================================================ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a Moroccan hammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Moroccan hammam is a traditional public bathhouse that has been central to Moroccan culture for over a thousand years. It consists of a series of heated rooms where visitors steam, scrub, and cleanse their bodies using natural products like savon beldi (black olive soap), kessa exfoliating gloves, and ghassoul clay from the Atlas Mountains. It is part hygiene ritual, part social gathering, and part wellness experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a hammam cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A public neighborhood hammam costs from 20 MAD entry. Adding a gommage (scrub) by a kessala costs from 50 MAD extra. Mid-range tourist-friendly hammams charge from 300 MAD for a full package including scrub and short massage. Luxury hotel hammams range from 800 MAD to 2,500 MAD for multi-hour rituals with premium products. Seasonal pricing may apply during peak tourist months (October-April).',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear in a Moroccan hammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a public hammam, women typically wear underwear bottoms and many go topless. Men wear underwear or swim shorts. Complete nudity is not the norm in Morocco, unlike Turkish or Finnish baths. In luxury spas, you will be given disposable underwear, a robe, and slippers upon arrival.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can men and women visit the hammam together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Public hammams in Morocco are strictly gender-separated. Some have separate sections for men and women; others alternate hours throughout the day. Couples who want to experience the hammam together must visit a luxury spa that offers private couple rooms, with prices starting from 1,200 MAD for a shared treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the hammam safe for first-time visitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the hammam is safe and welcoming for first-timers. If you are nervous about a public hammam, start with a mid-range spa (from 300 MAD) where staff are experienced with international visitors and will guide you through every step. Avoid hammams if you have heart conditions or are pregnant without medical clearance. If you feel dizzy from the heat, move to a cooler room immediately and drink water.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to a public hammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a public hammam, bring: a towel, change of underwear, flip-flops or waterproof sandals, savon beldi (black soap), a kessa exfoliating glove, ghassoul clay, shampoo, and a plastic bucket (or buy one there from 20 MAD). You can also bring argan oil to moisturize afterward. Luxury spas provide all products and amenities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a hammam session last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full hammam session at a public bathhouse typically takes 1-2 hours, depending on how long you want to steam and soak. There is no fixed schedule. At luxury spas, structured packages range from 60 to 180 minutes, often combining the hammam with massage, facial, or body wrap treatments. Always allow extra time for resting afterward.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit a hammam in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weekday mornings offer the quietest experience at public hammams. Avoid Thursday evenings and Friday mornings, which are peak times as Moroccans prepare for Friday prayer. During Ramadan, hammams are busiest just before iftar (evening meal). Luxury spas are quietest on weekday afternoons. Book luxury spas at least 2-3 days in advance, and a week or more during peak season (October-April).',
      },
    },
  ],
};

/* ================================================================
   DATA: HAMMAM TYPES
   ================================================================ */

const hammamTypes = [
  {
    type: 'Public Neighborhood Hammam',
    icon: Building,
    priceRange: 'From 20 MAD entry',
    atmosphere: 'Communal, social, authentic',
    description:
      'The original hammam experience. Every Moroccan neighborhood has one. These are simple, tiled bathhouses where locals come weekly to bathe, scrub, and socialize. The architecture is often centuries old with vaulted ceilings, star-shaped skylights, and three rooms of increasing temperature. You sit on the floor, pour water from buckets, and get scrubbed by a kessala (professional scrubber) or do it yourself.',
    bestFor: 'Adventurous travelers seeking authentic cultural immersion on a budget',
    provides: ['Entry to steam rooms', 'Hot and cold water', 'Floor mats'],
    youBring: ['Towel', 'Flip-flops', 'Savon beldi', 'Kessa glove', 'Shampoo', 'Bucket (or buy there)'],
  },
  {
    type: 'Tourist-Friendly Private Hammam',
    icon: Sparkles,
    priceRange: 'From 300 MAD per package',
    atmosphere: 'Guided, comfortable, semi-private',
    description:
      'These hammams cater specifically to visitors. Often set in restored riads or purpose-built spaces, they offer the traditional hammam experience with more guidance and comfort. Staff speak English or French and walk you through each step. You get a private or semi-private room, and all products are provided. The scrub is gentler than a public hammam, but the experience is still authentic.',
    bestFor: 'First-timers, those who want guidance, travelers seeking comfort with authenticity',
    provides: ['Private room', 'All products', 'Robe and slippers', 'Mint tea after', 'English-speaking staff'],
    youBring: ['Nothing - everything is provided'],
  },
  {
    type: 'Luxury Hotel & Resort Hammam',
    icon: Crown,
    priceRange: 'From 800 MAD per ritual',
    atmosphere: 'Opulent, serene, world-class',
    description:
      'The pinnacle of Moroccan wellness. Luxury hammams in five-star hotels and resorts like La Mamounia, Royal Mansour, and Amanjena combine traditional hammam rituals with contemporary spa treatments. Think heated marble beds, gold-infused argan oil, rose petal baths, and multi-hour rituals performed by trained therapists. Private couple suites, indoor pools, and relaxation gardens are standard.',
    bestFor: 'Luxury travelers, couples, special occasions, those seeking the ultimate indulgence',
    provides: ['Full amenities', 'Premium products', 'Private suites', 'Relaxation lounge', 'Refreshments', 'Robes and slippers'],
    youBring: ['Nothing - everything is provided'],
  },
];

/* ================================================================
   DATA: STEP-BY-STEP HAMMAM EXPERIENCE
   ================================================================ */

const hammamSteps = [
  {
    step: 1,
    title: 'Arrive and Change',
    icon: Users,
    duration: '10 minutes',
    description:
      'At a public hammam, you enter a changing room where you leave your clothes and valuables in a locker or with an attendant. Keep your underwear on. At luxury spas, you receive a robe and slippers and are guided to a changing area with private lockers.',
    tip: 'Bring your own lock for the locker at public hammams. Wear flip-flops to protect your feet on wet floors.',
  },
  {
    step: 2,
    title: 'Warm Up in the Cool Room',
    icon: Thermometer,
    duration: '10-15 minutes',
    description:
      'The hammam has three rooms of increasing temperature. Start in the cool room (barid) to let your body adjust gradually. Pour warm water over yourself from a bucket. In luxury spas, you may begin in a steam room or heated relaxation area.',
    tip: 'Drink at least half a liter of water before entering. The heat causes heavy sweating and you must stay hydrated.',
  },
  {
    step: 3,
    title: 'Move to the Hot Room',
    icon: Thermometer,
    duration: '15-20 minutes',
    description:
      'The hottest room (harr) is where the deep steaming happens. The intense heat and humidity open your pores completely. Sit or lie on the warm marble or tile floor and let the steam work on your body. Pour hot water over yourself periodically.',
    tip: 'If you feel dizzy or too hot, move back to a cooler room immediately. There is no shame in going slowly.',
  },
  {
    step: 4,
    title: 'Apply Savon Beldi (Black Soap)',
    icon: Droplets,
    duration: '10 minutes',
    description:
      'A thick, dark paste made from crushed olives is applied all over your body. Let it sit for 5-10 minutes while the steam continues to work. The soap softens dead skin cells and prepares your body for the scrub. In public hammams, you can do this yourself or a kessala will do it for you.',
    tip: 'Buy quality savon beldi from a herbalist (attar) rather than tourist shops. It should be dark and thick like molasses.',
  },
  {
    step: 5,
    title: 'The Gommage (Exfoliating Scrub)',
    icon: Sparkles,
    duration: '15-20 minutes',
    description:
      'This is the centerpiece of the hammam ritual. Using a rough kessa glove, the kessala scrubs your entire body in firm, circular motions. You will see rolls of dead skin peeling away. It can feel intense, but the result is incredibly smooth, renewed skin. Every part of your body is scrubbed thoroughly.',
    tip: 'Say "bezzaf" (enough) or "shwiya" (gently) if the scrubbing is too hard. Communication is welcomed.',
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    icon: Flower2,
    duration: '10-15 minutes',
    description:
      'Natural ghassoul clay from the Atlas Mountains is mixed with rose water and applied to your body and hair. It draws out impurities, conditions the skin, and leaves hair silky. Let it dry slightly before rinsing. Luxury spas may add essential oils, argan oil, or other natural ingredients.',
    tip: 'Ghassoul clay is available at any herbalist for from 15 MAD. You can buy some to continue using at home.',
  },
  {
    step: 7,
    title: 'Rinse and Cool Down',
    icon: Waves,
    duration: '10-15 minutes',
    description:
      'Rinse thoroughly with warm water, then gradually switch to cooler water. Move back through the rooms in reverse order. The cooling-down process is as important as the heating up. In luxury spas, you may be offered a cold plunge pool or refreshing mist.',
    tip: 'Alternate warm and cool water during rinsing. This improves circulation and closes your pores.',
  },
  {
    step: 8,
    title: 'Rest and Recover',
    icon: Heart,
    duration: '20-30 minutes',
    description:
      'After drying off, rest in the changing room or relaxation lounge. This is when the full effects settle in. Your skin will feel softer than it has in months. At public hammams, locals drink mint tea and chat. At luxury spas, you are served tea and dried fruits in a serene relaxation room.',
    tip: 'Do not rush out afterward. The resting period is part of the experience. Your body needs time to cool down and rehydrate.',
  },
];

/* ================================================================
   DATA: WHAT TO BRING
   ================================================================ */

const whatToBring = [
  { item: 'Towel (large)', icon: Package, note: 'For drying off. Public hammams do not provide towels.' },
  { item: 'Flip-flops or waterproof sandals', icon: ShieldCheck, note: 'Essential for wet, slippery floors.' },
  { item: 'Savon beldi (black soap)', icon: Droplets, note: 'From 20 MAD at herbalists or souk stalls.' },
  { item: 'Kessa exfoliating glove', icon: Sparkles, note: 'From 15 MAD. Medium grade for first-timers.' },
  { item: 'Ghassoul clay', icon: Flower2, note: 'From 15 MAD. Mix with rose water before applying.' },
  { item: 'Change of underwear', icon: Users, note: 'You wear underwear during the hammam.' },
  { item: 'Plastic bucket and scoop', icon: Waves, note: 'From 20 MAD at entrance. For pouring water over yourself.' },
  { item: 'Shampoo and conditioner', icon: Droplets, note: 'For washing your hair during or after.' },
  { item: 'Argan oil', icon: Gem, note: 'From 80 MAD. Apply to damp skin after for deep moisture.' },
  { item: 'Water bottle', icon: Heart, note: 'Stay hydrated. Drink before, during breaks, and after.' },
];

/* ================================================================
   DATA: ETIQUETTE RULES
   ================================================================ */

const etiquetteRules = [
  {
    rule: 'Respect Gender Separation',
    icon: Users,
    description:
      'Public hammams have strict gender separation. Some have separate sections; others alternate hours for men and women. Always check the schedule before going. Mixed bathing does not exist in public Moroccan hammams.',
  },
  {
    rule: 'Cover Appropriately',
    icon: ShieldCheck,
    description:
      'Women typically wear underwear bottoms (many go topless). Men wear underwear or swim shorts. Full nudity is not the norm in Moroccan hammams, unlike Turkish or Finnish baths. Follow what locals do.',
  },
  {
    rule: 'Tip the Kessala',
    icon: DollarSign,
    description:
      'If someone scrubs you at a public hammam, tip from 20-50 MAD depending on the quality of service. At luxury spas, tipping from 50-100 MAD is appreciated but not required.',
  },
  {
    rule: 'Do Not Stare',
    icon: Eye,
    description:
      'The hammam is a place of body neutrality. People of all shapes and sizes come here. Do not stare at others. Keep your eyes on your own space and focus on your experience.',
  },
  {
    rule: 'Keep Quiet and Respectful',
    icon: Heart,
    description:
      'While public hammams can be social, avoid being loud or disruptive. Respect other people\'s space and tranquility. Avoid phone calls. The hammam is a sanctuary for rest and renewal.',
  },
  {
    rule: 'Hydrate Before and After',
    icon: Droplets,
    description:
      'Drink at least half a liter of water before entering the hammam. The intense heat causes heavy sweating. Dehydration leads to dizziness and headaches. Drink more water when you finish.',
  },
  {
    rule: 'Avoid After Heavy Meals',
    icon: AlertTriangle,
    description:
      'Wait at least 2 hours after eating before visiting a hammam. The combination of heat, steam, and a full stomach can cause nausea. A light snack beforehand is fine.',
  },
  {
    rule: 'Clean Up After Yourself',
    icon: CheckCircle,
    description:
      'In a public hammam, rinse your area when you are finished. Remove any soap residue, dead skin, or clay from the floor. Leave the space as clean as you found it for the next person.',
  },
];

/* ================================================================
   DATA: BEST HAMMAMS BY CITY
   ================================================================ */

const hammamsByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-hammam-ritual.webp',
    description:
      'Marrakech is the hammam capital of Morocco. With hundreds of public hammams in the medina and dozens of luxury options, you are spoiled for choice. The medina hammams are the most atmospheric, with centuries-old architecture and the buzz of local life.',
    hammams: [
      { name: 'Hammam Dar el-Bacha', type: 'Historic Public', price: 'From 50 MAD', highlight: '16th-century architecture with star-shaped skylights' },
      { name: 'Heritage Spa', type: 'Boutique', price: 'From 400 MAD', highlight: 'Restored riad with authentic techniques and luxury twist' },
      { name: 'Hammam de la Rose', type: 'Boutique', price: 'From 350 MAD', highlight: 'Rose-themed treatments using Dades Valley roses' },
      { name: 'Les Bains de Marrakech', type: 'Day Spa', price: 'From 500 MAD', highlight: 'Converted palace with rooftop relaxation terrace' },
      { name: 'La Mamounia Spa', type: 'Ultra-Luxury', price: 'From 1,500 MAD', highlight: 'Royal Hammam ritual with gold-infused argan oil' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/art-moroccan-pattern-zellige.webp',
    description:
      'Fes offers a more authentic, less touristy hammam scene. The medina hammams are among the oldest in Morocco, and the riad-based spas use traditional Fassi techniques passed down through generations. Fes is where you experience the hammam as Moroccans have for centuries.',
    hammams: [
      { name: 'Hammam Sidi Ali Ben Harazem', type: 'Traditional Public', price: 'From 50 MAD', highlight: 'Centuries-old neighborhood hammam, deeply authentic' },
      { name: 'Riad Laaroussa Spa', type: 'Riad Spa', price: 'From 400 MAD', highlight: '17th-century palace with original zellige tilework' },
      { name: 'Palais Amani Spa', type: 'Boutique', price: 'From 350 MAD', highlight: 'In-house organic products from Andalusian garden herbs' },
      { name: 'Hammam Mernissi', type: 'Public', price: 'From 20 MAD', highlight: 'Local favorite near Bab Boujloud, genuine experience' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Essaouira brings a coastal dimension to the hammam experience. The Atlantic breeze, sea salt scrubs, and seaweed wraps create a unique twist on the traditional ritual. The medina hammams here are smaller and quieter than those in Marrakech or Fes.',
    hammams: [
      { name: 'Spa Lalla Mira', type: 'Eco Spa', price: 'From 300 MAD', highlight: 'Eco-friendly spa with rooftop Atlantic views' },
      { name: 'Heure Bleue Palais Spa', type: 'Boutique', price: 'From 400 MAD', highlight: 'Heritage palace with sea salt and argan treatments' },
      { name: 'Sofitel Mogador Spa', type: 'Resort Spa', price: 'From 800 MAD', highlight: 'Thalassotherapy with Atlantic seawater' },
      { name: 'Hammam Lalla Mira', type: 'Public', price: 'From 20 MAD', highlight: 'Simple neighborhood hammam near the medina' },
    ],
  },
];

/* ================================================================
   DATA: PRICE GUIDE
   ================================================================ */

const priceGuide = [
  { service: 'Public hammam entry', price: 'From 20 MAD', note: 'Steam rooms only, bring your own products' },
  { service: 'Kessala gommage (scrub)', price: 'From 50 MAD', note: 'Paid directly to the kessala, on top of entry' },
  { service: 'Savon beldi + kessa glove', price: 'From 20 MAD', note: 'Buy at entrance or from a herbalist (attar)' },
  { service: 'Ghassoul clay', price: 'From 15 MAD', note: 'Sold by weight at herbalists in the souk' },
  { service: 'Tourist-friendly hammam package', price: 'From 300 MAD', note: 'Includes hammam, gommage, and short massage' },
  { service: 'Mid-range spa hammam', price: 'From 500 MAD', note: 'Hammam, scrub, clay mask, and 30-minute massage' },
  { service: 'Luxury hotel hammam ritual', price: 'From 800 MAD', note: 'Full ritual with premium products and amenities' },
  { service: 'Ultra-luxury hammam experience', price: 'From 1,500 MAD', note: 'Multi-hour experience, private suite, premium products' },
  { service: 'Couples hammam package', price: 'From 1,200 MAD', note: 'Private room for two, full treatment included' },
  { service: 'Argan oil massage add-on (60 min)', price: 'From 300 MAD', note: 'Available at most spas after your hammam' },
];

/* ================================================================
   DATA: FIRST-TIMER TIPS
   ================================================================ */

const firstTimerTips = [
  {
    title: 'Start with a Mid-Range Spa',
    icon: Star,
    description:
      'If you are nervous about the public hammam, book a tourist-friendly spa first (from 300 MAD). Staff speak English, guide you through every step, and provide all products. Once you have done it once, you may want to try the authentic public experience.',
  },
  {
    title: 'Go on a Weekday Morning',
    icon: Clock,
    description:
      'Public hammams are quietest on weekday mornings. Avoid Thursday evenings and Friday mornings, which are peak times. You will have more space and a more relaxed experience on quieter days.',
  },
  {
    title: 'Embrace the Scrub',
    icon: Sparkles,
    description:
      'The gommage will feel intense. Rolls of dead skin peeling off your body is normal and the whole point. Communicate with the kessala if it is too firm, but try to relax into it. Your skin will feel incredible afterward.',
  },
  {
    title: 'Stay Hydrated',
    icon: Droplets,
    description:
      'Drink plenty of water before, during breaks, and after your hammam. The intense heat causes heavy sweating. Dehydration is the most common reason first-timers feel unwell. Keep a water bottle close.',
  },
  {
    title: 'Do Not Rush Afterward',
    icon: Heart,
    description:
      'The resting period after the hammam is essential. Your body needs time to cool down and rehydrate. Sit in the changing room, drink mint tea, and let the experience settle. Moroccans often nap after their hammam.',
  },
  {
    title: 'Protect Your Skin After',
    icon: ShieldCheck,
    description:
      'After the hammam, your skin will be freshly exfoliated and sensitive. Avoid direct sun exposure for 24 hours. Apply argan oil or a gentle moisturizer to damp skin. Skip harsh chemical products for a day or two.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

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

      {/* -- Hero Section -- */}
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
            <span className="text-white">Morocco Hammam Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Traditional Wellness
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Hammam Experience:
            <br className="hidden md:block" /> Your Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 20 MAD neighborhood bathhouses where locals have bathed for centuries to luxury
            rituals in world-class resorts. Everything you need to know before your first hammam.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- What Is a Hammam -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              What Is a Moroccan Hammam?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The hammam is far more than a bath. It is one of the oldest and most deeply rooted
                traditions in Moroccan culture, a weekly ritual that has endured for over a thousand
                years. Every neighborhood in Morocco has its hammam, and for most Moroccans, the
                weekly visit is as essential as Friday couscous.
              </p>
              <p>
                At its core, the hammam is a steam bathhouse with a series of heated rooms. Visitors
                move through rooms of increasing temperature, steam their bodies, apply natural
                products like savon beldi (black olive soap) and ghassoul clay, and receive a vigorous
                exfoliating scrub called a gommage using a rough kessa glove. The result is the deepest,
                most thorough cleanse your skin has ever experienced.
              </p>
              <p>
                But the hammam is also a social institution. It is where mothers bring their daughters,
                where friends catch up on the week&apos;s news, where brides are prepared for their
                wedding day in elaborate ceremonies, and where the physical and mental stresses of
                daily life are literally scrubbed away. For visitors, the hammam offers an
                intimate window into everyday Moroccan life that few other experiences can match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- History & Significance -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                1,000+ Years Old
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The hammam tradition in Morocco dates back to the arrival of Islam and the influence
                of Roman bathing culture. Some hammams in Fes have been in continuous operation for
                over 800 years. The ritual has barely changed since medieval times.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Social Cornerstone
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The hammam is where Moroccans socialize, celebrate, and prepare for life events.
                Bridal hammam ceremonies (known as &quot;hammam laaroussa&quot;) are elaborate events
                with henna, music, and special products. Weekly visits are a family tradition.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Flower2 className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Natural Products
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Every product used in the hammam is natural and locally sourced: savon beldi from
                olive oil, ghassoul clay from the Atlas Mountains, argan oil from southwestern
                Morocco, and orange blossom water from the citrus groves. No chemicals, no synthetics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Types of Hammam -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Three Types of Hammam in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers hammam experiences at every budget and comfort level. Here is how they compare so you can choose the right one for you.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hammamTypes.map((h) => {
              const TypeIcon = h.icon;
              return (
                <div key={h.type} className="card-moroccan p-6 flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <TypeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {h.type}
                  </h3>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3 w-fit">
                    {h.priceRange}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1">{h.description}</p>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg mb-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Best for:</p>
                    <p className="text-xs text-[var(--text-muted)]">{h.bestFor}</p>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-[var(--color-gold)]">They provide:</p>
                    {h.provides.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Step-by-Step Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Step-by-Step: What to Expect at a Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A first-time hammam visit can feel daunting. Here is exactly what happens, step by step, so you know what to expect and can relax into the experience.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {hammamSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      {/* Step number circle */}
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

      {/* -- What to Bring -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Package className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Bring to a Public Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Luxury spas provide everything. But for a public hammam, you need to come prepared. Here is your complete packing list.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All items are available at herbalists (attarine) and souk stalls near any hammam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatToBring.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ItemIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.item}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">{item.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Etiquette Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Etiquette Rules
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these guidelines to ensure a respectful and enjoyable experience for yourself and everyone around you.
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

      {/* -- Best Hammams by City -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hammams by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own hammam character. Here is where to go depending on where you are traveling.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hammamsByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`Hammam and wellness scene in ${city.city}, Morocco`}
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
                      {city.hammams.map((h, i) => (
                        <div key={i} className="p-3 bg-[var(--surface-muted)] rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                              <span className="text-sm font-medium text-[var(--text-primary)]">{h.name}</span>
                            </div>
                            <span className="text-xs text-[var(--color-accent)] font-semibold">{h.price}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-[var(--text-muted)]">{h.type}</span>
                          </div>
                          <p className="text-xs text-[var(--text-muted)] mt-1">{h.highlight}</p>
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

      {/* -- Price Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay across different tiers of hammam experiences in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when luxury spa prices may increase by 20-30%.
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

      {/* -- Gallery Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Hammam Atmosphere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-hammam-interior.webp"
                alt="Traditional Moroccan hammam interior with vaulted ceilings and warm stone floors"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Traditional Hammam Interior</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-hammam-interior.webp"
                alt="Steam-filled hammam with zellige tilework and warm atmospheric lighting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Hammam Steam Room</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/art-moroccan-hammam-ritual.webp"
                alt="Moroccan hammam ritual with traditional products including savon beldi and kessa glove"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Hammam Products &amp; Ritual</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Tips for First-Timers -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for First-Time Hammam Visitors
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to help you get the most out of your first Moroccan hammam experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {firstTimerTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

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

      {/* -- Related Pages -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/hammam" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Hammam
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Deep dive into neighborhood hammam recommendations and local culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Wellness Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Top 20 luxury spas and wellness experiences across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/wellness" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wellness Retreats
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Yoga retreats, meditation centers, and holistic escapes in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/what-to-wear-in-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                What to Wear
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Dress code guide for Morocco including hammam and religious sites.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads
              </h3>
              <p className="text-xs text-[var(--text-secondary)] mb-3">
                Top riads in Morocco, many with private hammams and spa services.
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
