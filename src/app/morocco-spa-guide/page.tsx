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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Spa & Hammam Guide 2026 | Top 20 Luxury Spas & Traditional Hammams',
  description:
    'Complete guide to Morocco\'s best spa experiences and traditional hammams. From 50 MAD public hammams to luxury resort spas. Step-by-step hammam guide, etiquette, prices, and the top 20 spa experiences across Marrakech, Fes, Essaouira, and Casablanca.',
  keywords: [
    'Morocco spa guide',
    'Moroccan hammam',
    'traditional hammam Morocco',
    'luxury spa Marrakech',
    'hammam etiquette',
    'best hammams Morocco',
    'Morocco wellness tourism',
    'hammam prices Morocco',
    'spa Fes Morocco',
    'spa Essaouira',
    'spa Casablanca',
    'Moroccan bath experience',
    'hammam ritual steps',
    'gommage Morocco',
    'savon beldi Morocco',
    'Morocco spa resorts',
    'argan oil treatment Morocco',
    'rhassoul clay treatment',
    'Morocco spa prices 2026',
    'public hammam Morocco',
    'couple spa Morocco',
    'Morocco relaxation guide',
  ],
  openGraph: {
    title: 'Morocco Spa & Hammam Guide 2026 | Top 20 Luxury Spas & Traditional Hammams',
    description:
      'Discover Morocco\'s finest spa experiences. From authentic public hammams at 50 MAD to world-class luxury spas. Complete guide with prices, etiquette, and the top 20 experiences.',
    url: `${BASE_URL}/morocco-spa-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-spa.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxurious Moroccan spa interior with traditional zellige tilework, warm lighting, and relaxation area',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Spa & Hammam Guide 2026 | Top 20 Experiences',
    description:
      'From traditional public hammams at 50 MAD to world-class luxury spas. Complete guide to Morocco\'s best wellness experiences with prices, etiquette, and insider tips.',
    images: [`${BASE_URL}/images/hero-spa.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-spa-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-spa-guide`,
  name: 'Morocco Spa & Hammam Guide 2026 | Top 20 Luxury Spas & Traditional Hammams',
  description:
    'Complete guide to Morocco\'s best spa experiences and traditional hammams. From 50 MAD public hammams to luxury resort spas across Marrakech, Fes, Essaouira, and Casablanca.',
  url: `${BASE_URL}/morocco-spa-guide`,
  image: `${BASE_URL}/images/hero-spa.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-spa-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Spa & Hammam Guide', item: `${BASE_URL}/morocco-spa-guide` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 20 SPA EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const topSpaExperiences = [
  {
    rank: 1,
    name: 'La Mamounia Spa',
    city: 'Marrakech',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 1,500 MAD per treatment',
    description:
      'The crown jewel of Moroccan luxury wellness. This 2,500 sqm spa features an indoor pool, hammam, beauty salon, and fitness center within one of the world\'s most iconic hotels. The signature Royal Hammam ritual uses gold-infused argan oil and takes 90 minutes.',
    highlights: ['Indoor heated pool', 'Royal Hammam ritual', 'Gold-infused argan oil treatments', 'Private couple suites'],
  },
  {
    rank: 2,
    name: 'Heritage Spa',
    city: 'Marrakech',
    type: 'Boutique Spa',
    icon: Sparkles,
    price: 'From 400 MAD per treatment',
    description:
      'A beautifully restored riad in the medina offering authentic hammam experiences with a luxury twist. Their signature black soap and eucalyptus hammam followed by an argan oil massage is the perfect balance of traditional and modern.',
    highlights: ['Restored riad setting', 'Traditional hammam techniques', 'Argan oil massage', 'Intimate atmosphere'],
  },
  {
    rank: 3,
    name: 'Les Bains de Marrakech',
    city: 'Marrakech',
    type: 'Day Spa',
    icon: Droplets,
    price: 'From 500 MAD per treatment',
    description:
      'One of the most popular spa destinations in Marrakech. Set in a converted palace, it offers traditional hammam, massages, and beauty treatments. The hammam with gommage and ghassoul clay mask is their bestseller.',
    highlights: ['Palace setting', 'Ghassoul clay treatments', 'Couples\' packages', 'Rooftop relaxation terrace'],
  },
  {
    rank: 4,
    name: 'Royal Mansour Spa',
    city: 'Marrakech',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 2,000 MAD per treatment',
    description:
      'A spa experience that borders on the transcendent. The white marble hammam, the indoor pool, and the sheer scale of the facility (2,500 sqm) make this one of Africa\'s finest wellness destinations. Treatments use bespoke products made exclusively for the Royal Mansour.',
    highlights: ['White marble hammam', 'Bespoke product line', 'Indoor pool and jacuzzi', 'Meditation garden'],
  },
  {
    rank: 5,
    name: 'Hammam de la Rose',
    city: 'Marrakech',
    type: 'Boutique Hammam',
    icon: Flower2,
    price: 'From 350 MAD per treatment',
    description:
      'Named after the damask roses of the Dades Valley. This intimate boutique hammam uses rose water, rose oil, and rose petals throughout its treatments. The signature Rose Ritual includes hammam, gommage, rose clay mask, and rose oil massage.',
    highlights: ['Rose-themed treatments', 'Damask rose products', 'Intimate setting', 'Signature Rose Ritual'],
  },
  {
    rank: 6,
    name: 'Riad Kniza Spa',
    city: 'Marrakech',
    type: 'Riad Spa',
    icon: Gem,
    price: 'From 450 MAD per treatment',
    description:
      'Tucked within one of Marrakech\'s finest riads, this spa offers personalized treatments in a serene courtyard setting. Known for using locally sourced ingredients including argan oil, orange blossom water, and saffron.',
    highlights: ['Personalized service', 'Locally sourced ingredients', 'Saffron body wraps', 'Courtyard setting'],
  },
  {
    rank: 7,
    name: 'Riad Laaroussa Spa',
    city: 'Fes',
    type: 'Riad Spa',
    icon: Sparkles,
    price: 'From 400 MAD per treatment',
    description:
      'One of the finest spa experiences in the Fes medina. This 17th-century palace-riad features a traditional hammam and treatment rooms decorated with original zellige tilework. Their signature Fassi treatment uses local herbs and traditional techniques passed down through generations.',
    highlights: ['17th-century palace', 'Original zellige tilework', 'Traditional Fassi techniques', 'Herb-based treatments'],
  },
  {
    rank: 8,
    name: 'Palais Amani Spa',
    city: 'Fes',
    type: 'Boutique Spa',
    icon: Flower2,
    price: 'From 350 MAD per treatment',
    description:
      'Located in a beautifully restored palace near Bab Guissa. The spa uses an organic product line made in-house with herbs from the riad\'s own Andalusian garden. The hammam overlooks the medina rooftops.',
    highlights: ['In-house organic products', 'Andalusian garden herbs', 'Medina rooftop views', 'Quiet neighborhood'],
  },
  {
    rank: 9,
    name: 'Spa Lalla Mira',
    city: 'Essaouira',
    type: 'Eco Spa',
    icon: Flower2,
    price: 'From 300 MAD per treatment',
    description:
      'An eco-friendly spa in the heart of Essaouira\'s medina. Built from natural materials with a commitment to sustainability. Their argan oil and seaweed wraps draw on the coastal location, and the rooftop relaxation terrace overlooks the Atlantic.',
    highlights: ['Eco-friendly approach', 'Seaweed body wraps', 'Rooftop ocean views', 'Argan oil specialty'],
  },
  {
    rank: 10,
    name: 'Sofitel Essaouira Mogador Spa',
    city: 'Essaouira',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 800 MAD per treatment',
    description:
      'A world-class spa within the Sofitel resort overlooking the ocean. Features an indoor pool, hammam, sauna, and extensive treatment menu. The Thalasso therapy using Atlantic seawater is unique to this location.',
    highlights: ['Thalasso therapy', 'Indoor heated pool', 'Ocean views', 'Extensive treatment menu'],
  },
  {
    rank: 11,
    name: 'Heure Bleue Palais Spa',
    city: 'Essaouira',
    type: 'Boutique Spa',
    icon: Sparkles,
    price: 'From 400 MAD per treatment',
    description:
      'An elegant spa within a heritage palace near the ramparts. Features a heated indoor pool, hammam, and treatment rooms with ocean views. Their signature treatment combines argan oil, orange blossom, and Atlantic sea salt.',
    highlights: ['Heritage palace setting', 'Heated indoor pool', 'Sea salt scrubs', 'Ocean-view treatment rooms'],
  },
  {
    rank: 12,
    name: 'Mazagan Beach Resort Spa',
    city: 'El Jadida',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 700 MAD per treatment',
    description:
      'One of Morocco\'s largest resort spas at over 2,000 sqm. Features multiple hammams, treatment rooms, a hydrotherapy circuit, and a stunning indoor pool. The Moroccan Ritual package is a 3-hour journey through traditional wellness.',
    highlights: ['Over 2,000 sqm', 'Hydrotherapy circuit', '3-hour Moroccan Ritual', 'Multiple hammam rooms'],
  },
  {
    rank: 13,
    name: 'Four Seasons Casablanca Spa',
    city: 'Casablanca',
    type: 'Luxury Resort Spa',
    icon: Crown,
    price: 'From 1,200 MAD per treatment',
    description:
      'Casablanca\'s premier luxury spa experience overlooking the Atlantic. A serene retreat from the city with an indoor pool, hammam, and treatment rooms using exclusive product lines. The Ocean View Massage is their signature offering.',
    highlights: ['Atlantic Ocean views', 'Indoor pool', 'Exclusive product line', 'Ocean View Massage'],
  },
  {
    rank: 14,
    name: 'Hammam Dar el-Bacha',
    city: 'Marrakech',
    type: 'Historic Public Hammam',
    icon: Building,
    price: 'From 50 MAD entry',
    description:
      'One of the most famous public hammams in Morocco. Built in the 16th century next to the Dar el-Bacha palace, it offers an authentic local experience. The architecture alone is worth the visit, with vaulted ceilings and star-shaped skylights.',
    highlights: ['16th-century architecture', 'Authentic local experience', 'Star-shaped skylights', 'Most affordable option'],
  },
  {
    rank: 15,
    name: 'Hammam Mouassine',
    city: 'Marrakech',
    type: 'Public Hammam',
    icon: Building,
    price: 'From 50 MAD entry',
    description:
      'A well-maintained public hammam in the heart of the medina. Popular with both locals and adventurous tourists. The kessala (scrubber) here is known for being particularly thorough. Separate hours for men and women.',
    highlights: ['Medina location', 'Expert kessalas', 'Well-maintained', 'Separate men/women hours'],
  },
  {
    rank: 16,
    name: 'Hammam Sidi Ali Ben Harazem',
    city: 'Fes',
    type: 'Traditional Public Hammam',
    icon: Building,
    price: 'From 50 MAD entry',
    description:
      'A traditional neighborhood hammam in Fes that has served the community for centuries. This is hammam as the Moroccans experience it: simple, social, and deeply restorative. Bring your own soap and towels or buy them at the entrance.',
    highlights: ['Centuries-old tradition', 'Neighborhood atmosphere', 'Authentic experience', 'Budget-friendly'],
  },
  {
    rank: 17,
    name: 'Spa My Blend by Clarins',
    city: 'Casablanca',
    type: 'Luxury Hotel Spa',
    icon: Gem,
    price: 'From 900 MAD per treatment',
    description:
      'Located inside the Ritz-Carlton-managed hotel in Casablanca. Features personalized skincare using the My Blend diagnostic system by Clarins. A thoroughly modern spa experience in contrast to traditional hammam culture.',
    highlights: ['Clarins products', 'Personalized diagnostics', 'Modern approach', 'Premium service'],
  },
  {
    rank: 18,
    name: 'Mythic Oriental Spa',
    city: 'Casablanca',
    type: 'Day Spa',
    icon: Sparkles,
    price: 'From 350 MAD per treatment',
    description:
      'A popular day spa in Casablanca blending Moroccan and Asian wellness traditions. Features hammam, massage, and facial treatments. Their Moroccan-Thai fusion massage is a unique offering not found elsewhere in the country.',
    highlights: ['Moroccan-Asian fusion', 'Day spa accessibility', 'Fusion massage', 'Central Casablanca location'],
  },
  {
    rank: 19,
    name: 'Kasbah Tamadot Spa',
    city: 'Atlas Mountains',
    type: 'Mountain Resort Spa',
    icon: Award,
    price: 'From 600 MAD per treatment',
    description:
      'Sir Richard Branson\'s mountain retreat in the High Atlas offers spa treatments with panoramic mountain views. The Berber-inspired treatments use locally foraged herbs and oils. The heated outdoor pool overlooking the Atlas is unforgettable.',
    highlights: ['Mountain panorama', 'Berber-inspired treatments', 'Heated outdoor pool', 'Locally foraged ingredients'],
  },
  {
    rank: 20,
    name: 'Amanjena Spa',
    city: 'Marrakech',
    type: 'Ultra-Luxury Spa',
    icon: Crown,
    price: 'From 2,500 MAD per treatment',
    description:
      'The Aman resort\'s spa is among the most exclusive in Morocco. Set in rose-colored pavilions surrounded by olive groves, it offers hammam, Thai massage, Ayurvedic treatments, and a heated outdoor pool. Privacy and serenity are the hallmarks here.',
    highlights: ['Ultra-luxury setting', 'Multi-tradition treatments', 'Olive grove gardens', 'Ultimate privacy'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL VS MODERN COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const hammamComparison = [
  {
    aspect: 'Setting',
    traditional: 'Neighborhood bathhouse, tiled rooms with domed ceilings and star-shaped skylights. Often centuries old.',
    modern: 'Boutique or hotel spa with designer interiors, mood lighting, ambient music, and plush relaxation lounges.',
  },
  {
    aspect: 'Price Range',
    traditional: 'From 50 MAD entry. Gommage from 50 MAD extra. Bring your own products or buy at entrance from 20 MAD.',
    modern: 'From 300 MAD for basic hammam package. Luxury options from 800 MAD to 2,500 MAD with full treatment.',
  },
  {
    aspect: 'Products Used',
    traditional: 'Savon beldi (black olive soap), ghassoul clay, kessa glove, orange blossom water. Simple, effective, time-tested.',
    modern: 'Premium branded products, argan oil blends, rose water, essential oils, gold-infused treatments, imported products.',
  },
  {
    aspect: 'Experience',
    traditional: 'Communal, social, no-frills. You sit on the floor, get scrubbed vigorously, and leave feeling reborn. Locals chat and socialize.',
    modern: 'Private or semi-private. Massage tables, heated beds, gentle scrubbing, followed by massage. Calm and quiet.',
  },
  {
    aspect: 'Duration',
    traditional: 'Typically 1-2 hours depending on how long you want to soak and steam. No fixed schedule.',
    modern: 'Structured packages from 60 to 180 minutes. Often combined with massage, facial, or body wrap.',
  },
  {
    aspect: 'Who It Suits',
    traditional: 'Adventurous travelers, budget travelers, those seeking authentic cultural experiences. Locals go weekly.',
    modern: 'Those seeking relaxation without culture shock, couples, luxury travelers, those with limited time.',
  },
  {
    aspect: 'Privacy',
    traditional: 'Men and women separate (different hours or different sections). You wear underwear. Bodies of all shapes welcome.',
    modern: 'Private rooms for individuals or couples. Robes and slippers provided. Complete privacy guaranteed.',
  },
  {
    aspect: 'Booking',
    traditional: 'No booking needed. Walk in during operating hours. Check men/women schedules in advance.',
    modern: 'Advance booking recommended, especially for couples and weekends. Many accept online reservations.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: STEP-BY-STEP HAMMAM GUIDE
   ═══════════════════════════════════════════════════════════════ */

const hammamSteps = [
  {
    step: 1,
    title: 'Arrive & Change',
    icon: Users,
    duration: '10 minutes',
    description:
      'At a public hammam, you will enter a changing room where you leave your clothes and valuables in a locker or with an attendant. You keep your underwear on (for women, many go topless). At luxury spas, you will receive a robe and slippers and be guided to a changing area.',
    tip: 'Bring your own lock for the locker at public hammams. Bring flip-flops for the wet floors.',
  },
  {
    step: 2,
    title: 'Warm Up in the Cool Room',
    icon: Thermometer,
    duration: '10-15 minutes',
    description:
      'The hammam has three rooms of increasing temperature. Start in the cool room (skhoun shwiya) to let your body adjust. Pour warm water over yourself using a bucket (satel). In luxury spas, you may start in a steam room or sauna.',
    tip: 'Drink water before entering. The heat will make you sweat heavily and you need to stay hydrated.',
  },
  {
    step: 3,
    title: 'Move to the Hot Room',
    icon: Thermometer,
    duration: '15-20 minutes',
    description:
      'The hottest room (harr) is where the deep steaming happens. The heat and humidity open your pores completely. Sit or lie on the warm marble or tile floor and let the steam work. Pour hot water over yourself periodically.',
    tip: 'If you feel dizzy or too hot, move back to a cooler room. There is no shame in taking it slow.',
  },
  {
    step: 4,
    title: 'Apply Savon Beldi (Black Soap)',
    icon: Droplets,
    duration: '10 minutes',
    description:
      'A thick, dark olive-based soap (savon beldi) is applied all over your body. Let it sit for 5-10 minutes while the steam continues to work. The soap softens your skin and prepares it for the scrubbing. In public hammams, you can do this yourself or a kessala (scrubber) will do it.',
    tip: 'Buy quality savon beldi from a herbalist (attar) rather than tourist shops. It should be dark and thick like molasses.',
  },
  {
    step: 5,
    title: 'The Gommage (Scrubbing)',
    icon: Sparkles,
    duration: '15-20 minutes',
    description:
      'This is the main event. Using a rough exfoliating glove (kessa), the kessala scrubs your entire body in firm, circular motions. You will see rolls of dead skin peeling off. It can feel intense, but the result is incredibly smooth skin. Every part of your body gets scrubbed.',
    tip: 'Say "bezzaf" (enough) or "shwiya" (gently) if the scrubbing is too hard. Communication is welcomed.',
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    icon: Flower2,
    duration: '10-15 minutes',
    description:
      'A natural clay from the Atlas Mountains (ghassoul) is mixed with rose water and applied to your body and hair. It draws out impurities, conditions the skin, and leaves hair silky. Let it dry slightly before rinsing. Luxury spas may add essential oils or other ingredients.',
    tip: 'Ghassoul clay is available at any Moroccan herbalist for from 20 MAD. You can continue using it at home.',
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    icon: Waves,
    duration: '10-15 minutes',
    description:
      'Rinse thoroughly with warm water, then gradually switch to cooler water. Move back through the rooms in reverse order. The cooling down is as important as the heating up. In luxury spas, you may be offered a cold plunge pool or a refreshing mist.',
    tip: 'Alternate warm and cool water during rinsing for better circulation.',
  },
  {
    step: 8,
    title: 'Rest & Recover',
    icon: Heart,
    duration: '20-30 minutes',
    description:
      'After drying off, rest in the changing room or relaxation lounge. This is when the effects really sink in. Your skin will feel softer than it has in months. At public hammams, locals often drink mint tea and chat. At luxury spas, you will be served tea and dried fruits in a relaxation room.',
    tip: 'Do not rush out. The resting period is part of the experience. Your body needs time to cool down and rehydrate.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ETIQUETTE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const etiquetteRules = [
  {
    rule: 'Respect Gender Separation',
    icon: Users,
    description:
      'Public hammams have strict gender separation. Some have separate sections; others alternate hours. Always check the schedule before going. Women can go topless; men keep underwear on.',
  },
  {
    rule: 'Bring Your Own Supplies (Public Hammam)',
    icon: BookOpen,
    description:
      'For public hammams, bring: towel, underwear, flip-flops, savon beldi, kessa glove, ghassoul clay, shampoo, and a bucket (or buy one there from 20 MAD). Luxury spas provide everything.',
  },
  {
    rule: 'Tip the Kessala',
    icon: DollarSign,
    description:
      'If someone scrubs you at a public hammam, tip from 20-50 MAD depending on the service. At luxury spas, tipping from 50-100 MAD is appreciated but not mandatory.',
  },
  {
    rule: 'Do Not Stare',
    icon: ShieldCheck,
    description:
      'The hammam is a place of body neutrality. People of all shapes and sizes come here. Do not stare at others. Keep your eyes on your own space and focus on your experience.',
  },
  {
    rule: 'Be Quiet & Respectful',
    icon: Heart,
    description:
      'While public hammams can be social, luxury spas expect quiet. In either setting, respect other people\'s space. Avoid loud phone calls. The hammam is a sanctuary.',
  },
  {
    rule: 'Hydrate Before and After',
    icon: Droplets,
    description:
      'Drink at least half a liter of water before entering the hammam. The intense heat causes significant sweating. Dehydration can lead to dizziness and headaches.',
  },
  {
    rule: 'Avoid After Heavy Meals',
    icon: AlertTriangle,
    description:
      'Wait at least 2 hours after eating before visiting a hammam. The heat and steam on a full stomach can cause nausea. A light snack is fine.',
  },
  {
    rule: 'Time Your Visit Right',
    icon: Clock,
    description:
      'Public hammams are busiest on Thursday evenings and Friday mornings (before Friday prayer). For a quieter experience, go on weekday mornings. Luxury spas are quietest on weekday afternoons.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SPAS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const spasByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/art-moroccan-hammam-ritual.webp',
    description:
      'The undisputed capital of Moroccan wellness. Marrakech has the highest concentration of both traditional hammams and luxury spas in the country. From 50 MAD public baths to 2,500 MAD ultra-luxury rituals.',
    topPicks: [
      { name: 'La Mamounia Spa', type: 'Ultra-Luxury', price: 'From 1,500 MAD' },
      { name: 'Heritage Spa', type: 'Boutique', price: 'From 400 MAD' },
      { name: 'Les Bains de Marrakech', type: 'Day Spa', price: 'From 500 MAD' },
      { name: 'Hammam de la Rose', type: 'Boutique', price: 'From 350 MAD' },
      { name: 'Hammam Dar el-Bacha', type: 'Public Hammam', price: 'From 50 MAD' },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    image: '/images/art-moroccan-pattern-zellige.webp',
    description:
      'Fes offers a more authentic, less touristy spa experience. The medina\'s hammams are among the oldest in Morocco, and the riad-based spas use traditional Fassi techniques with herbs grown in the city\'s ancient gardens.',
    topPicks: [
      { name: 'Riad Laaroussa Spa', type: 'Riad Spa', price: 'From 400 MAD' },
      { name: 'Palais Amani Spa', type: 'Boutique', price: 'From 350 MAD' },
      { name: 'Hammam Sidi Ali Ben Harazem', type: 'Public Hammam', price: 'From 50 MAD' },
      { name: 'Riad Fes Spa', type: 'Luxury Riad', price: 'From 500 MAD' },
    ],
  },
  {
    city: 'Essaouira',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Essaouira brings a coastal twist to spa culture. Thalassotherapy (seawater treatments), sea salt scrubs, and ocean-view relaxation rooms set it apart. The laid-back coastal atmosphere adds to the sense of total relaxation.',
    topPicks: [
      { name: 'Sofitel Mogador Spa', type: 'Resort Spa', price: 'From 800 MAD' },
      { name: 'Spa Lalla Mira', type: 'Eco Spa', price: 'From 300 MAD' },
      { name: 'Heure Bleue Palais Spa', type: 'Boutique', price: 'From 400 MAD' },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    image: '/images/hero-casablanca-skyline.webp',
    description:
      'Casablanca\'s spa scene is more modern and international than other Moroccan cities. Expect contemporary designs, international product lines, and a mix of Moroccan and global wellness traditions.',
    topPicks: [
      { name: 'Four Seasons Spa', type: 'Luxury Hotel', price: 'From 1,200 MAD' },
      { name: 'My Blend by Clarins', type: 'Luxury Hotel', price: 'From 900 MAD' },
      { name: 'Mythic Oriental Spa', type: 'Day Spa', price: 'From 350 MAD' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Public hammam entry', price: 'From 50 MAD', note: 'Just the bath, bring your own supplies' },
  { service: 'Public hammam gommage (scrub)', price: 'From 50 MAD', note: 'Paid to the kessala on top of entry' },
  { service: 'Savon beldi + kessa glove', price: 'From 20 MAD', note: 'Buy at entrance or from a herbalist' },
  { service: 'Ghassoul clay', price: 'From 15 MAD', note: 'Sold by weight at herbalists' },
  { service: 'Budget spa hammam package', price: 'From 300 MAD', note: 'Includes hammam, gommage, and short massage' },
  { service: 'Mid-range spa package', price: 'From 500 MAD', note: 'Hammam, gommage, clay mask, and 30-min massage' },
  { service: 'Luxury spa package', price: 'From 800 MAD', note: 'Full ritual: hammam, scrub, mask, massage, facial' },
  { service: 'Ultra-luxury spa experience', price: 'From 1,500 MAD', note: 'Multi-hour experience with premium products' },
  { service: 'Couples\' spa package', price: 'From 1,200 MAD', note: 'For two, private room, full treatment' },
  { service: 'Argan oil massage (60 min)', price: 'From 300 MAD', note: 'Available at most spas' },
  { service: 'Thalassotherapy session', price: 'From 600 MAD', note: 'Essaouira coastal spas speciality' },
  { service: 'Rhassoul clay body wrap', price: 'From 250 MAD', note: 'Available at mid-range and luxury spas' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSpaGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-spa.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Spa &amp; Hammam Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Wellness &amp; Relaxation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Spa &amp; Hammam Guide:
            <br className="hidden md:block" /> Top 20 Wellness Experiences
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 50 MAD public hammams where locals have bathed for centuries to 2,500 MAD
            luxury rituals in world-class resorts. Your complete guide to wellness in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Hammam: Morocco&apos;s Greatest Wellness Tradition
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The hammam is not just a bath. It is a cornerstone of Moroccan social life, a weekly
                ritual that has endured for over a thousand years. Every neighborhood in Morocco has its
                hammam, and for most Moroccans, the weekly visit is as essential as the Friday couscous.
              </p>
              <p>
                For visitors, the hammam offers something no other experience in Morocco can: a glimpse
                into the real, everyday life of Moroccans. It is where mothers bring their daughters,
                where friends catch up, where brides are prepared for their wedding day, and where the
                stresses of the week are literally scrubbed away.
              </p>
              <p>
                Morocco has also embraced modern wellness culture. From Marrakech to Casablanca, luxury
                spas blend traditional hammam rituals with contemporary treatments, creating experiences
                that rank among the finest in the world. Whether you spend 50 MAD or 2,500 MAD, you
                will leave feeling renewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spa &amp; Hammam Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay across different tiers of spa and hammam experiences in Morocco.
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

      {/* ── Traditional vs Modern Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Hammam vs. Modern Luxury Spa
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both experiences have their place. Here is how they compare across every dimension so you can choose what suits you.
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
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Traditional Hammam</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.traditional}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Modern Luxury Spa</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.modern}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step-by-Step Hammam Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Step-by-Step: What to Expect at a Hammam
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A first-time hammam visit can feel daunting. Here is exactly what happens, step by step, so you know what to expect.
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

      {/* ── Top 20 Spa Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 20 Spa Experiences in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From historic public hammams to ultra-luxury resort spas, these are the finest wellness experiences Morocco has to offer.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices and may vary by season, treatment, and availability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topSpaExperiences.map((spa) => {
              const SpaIcon = spa.icon;
              return (
                <div key={spa.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{spa.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {spa.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {spa.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <SpaIcon className="w-3.5 h-3.5" />
                          {spa.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {spa.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{spa.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {spa.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Spas by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Spas by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city has its own spa character. Here is where to go depending on where you are.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spasByCity.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={city.image}
                      alt={`Spa and wellness scene in ${city.city}, Morocco`}
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
                      {city.topPicks.map((pick, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                            <span className="font-medium text-[var(--text-primary)]">{pick.name}</span>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                            <span>{pick.type}</span>
                            <span className="text-[var(--color-accent)] font-semibold">{pick.price}</span>
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

      {/* ── Etiquette Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hammam &amp; Spa Etiquette
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these guidelines to ensure a respectful and enjoyable experience for yourself and others.
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

      {/* ── Product Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flower2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Hammam Products
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The products used in a Moroccan hammam are natural, effective, and have been refined over centuries.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Savon Beldi (Black Soap)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A thick, dark paste made from crushed olives, olive oil, and potash. It is the foundation of the hammam
                ritual and has been used in Morocco for centuries. Applied to the skin before scrubbing, it softens dead
                skin cells and prepares the body for exfoliation.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 20 MAD for a jar
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Buy from herbalists (attarine) or souks
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Kessa Glove
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A rough exfoliating glove, traditionally made from woven plant fibers, used for the gommage (scrubbing).
                The texture ranges from medium to very coarse. For first-timers, a medium-grade glove is recommended. The
                kessala (scrubber) in a public hammam will use a professional-grade glove that removes dead skin efficiently.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 15 MAD
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Available at souks and pharmacies
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Ghassoul (Rhassoul) Clay
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A natural mineral clay mined exclusively from the Atlas Mountains. Rich in silica, magnesium, and
                potassium, it cleanses and conditions both skin and hair. Mixed with rose water to form a paste, it is
                applied as a mask after the gommage. Ghassoul absorbs impurities and leaves the skin incredibly soft.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 15 MAD for a packet
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Herbalists and beauty shops
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Argan Oil
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s liquid gold. Cold-pressed from the nuts of the argan tree, which grows only in southwestern
                Morocco. Cosmetic-grade argan oil is used after the hammam as a full-body moisturizer. It is rich in
                vitamin E, fatty acids, and antioxidants. Applied to damp skin after the bath, it locks in moisture
                and gives the skin a healthy glow.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 80 MAD for cosmetic grade
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Cooperatives or trusted herbalists
                </span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Orange Blossom Water (Ma Zhar)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Distilled from the blossoms of bitter orange trees. Used in the hammam as a final rinse for the hair
                and face, it has a delicate floral scent and mild astringent properties. Also widely used in Moroccan
                cooking and as a natural perfume. A bottle lasts for weeks.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                  From 15 MAD for a bottle
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  Herbalists, souks, and supermarkets
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Moroccan Spa &amp; Hammam Atmosphere
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
                src="/images/hero-wellness-spa.webp"
                alt="Luxury wellness spa in Morocco with modern treatment area and relaxation space"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Luxury Spa Setting</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Spa Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Time to Visit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Public hammams: weekday mornings for a quiet experience. Luxury spas: weekday afternoons.
                Avoid Thursdays and Fridays at public hammams (peak days). During Ramadan, hammams are busiest
                just before iftar.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Health Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Avoid hammams if you have heart conditions, are pregnant (consult your doctor first), or have skin
                infections. The intense heat can lower blood pressure. If you feel dizzy, leave the hot room immediately
                and drink water.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Couples Visiting Together
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Public hammams are strictly gender-separated. Couples who want to be together must visit a luxury
                spa with private couple rooms. Prices for couples start from 1,200 MAD for a shared treatment
                experience.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Saving Money
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For the authentic experience at the best price, visit a public hammam. Buy your supplies from an
                herbalist (attar) before going. The total cost for a full public hammam visit with gommage is from
                100 MAD including tips.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Luxury Spas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book at least 2-3 days in advance for luxury spas, and a week or more during peak season
                (October-April). Many spas offer online booking. Ask about package deals that combine multiple
                treatments at a discounted rate.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                After Your Hammam
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                After a hammam, your skin will be sensitive. Avoid direct sun exposure for 24 hours. Apply
                argan oil or a gentle moisturizer. Drink plenty of water and eat lightly. Many Moroccans
                follow their hammam with a glass of mint tea and a nap.
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
                Is the hammam suitable for first-time visitors to Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Absolutely. If you are nervous about the public hammam, start with a mid-range spa (from 300 MAD)
                where the staff are accustomed to international visitors and will guide you through the process. Once
                you have experienced it once, you may want to try the more authentic public hammam.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I wear in a Moroccan hammam?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                In a public hammam, women typically wear underwear bottoms (many go topless). Men wear underwear or
                swim shorts. In luxury spas, you will be given disposable underwear, a robe, and slippers. Nudity
                is not the norm in Moroccan hammams, unlike Turkish or Finnish baths.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can men and women visit the hammam together?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not in public hammams, which are strictly gender-separated. Some public hammams have separate
                sections; others alternate hours for men and women. If you want to visit as a couple, book a
                private session at a luxury spa (from 1,200 MAD for couples).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How often should I visit the hammam during my trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Moroccans typically visit once a week. For travelers, once or twice during a week-long trip is ideal.
                One visit to a public hammam for the cultural experience, and perhaps one visit to a luxury spa for
                the indulgence. Your skin will thank you.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Moroccan spa products safe for sensitive skin?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Traditional products like savon beldi, ghassoul clay, and argan oil are natural and generally well-tolerated.
                However, the kessa scrub is vigorous and may irritate very sensitive skin. Ask for a gentler scrub
                (gommage doux) if you have sensitive skin. Always do a patch test with any new product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/hammam" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Moroccan Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Deep dive into the traditional Moroccan hammam experience with neighborhood recommendations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/wellness" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wellness &amp; Yoga Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Morocco&apos;s yoga retreats, meditation centers, and holistic wellness escapes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/luxury" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest hotels, riads, restaurants, and experiences for luxury travelers in Morocco.
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
