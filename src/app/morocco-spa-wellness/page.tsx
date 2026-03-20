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
  Mountain,
  Droplets,
  Flower2,
  Globe,
  Landmark,
  Bath,
  Wine,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Spa & Wellness Guide 2026 | Hammams, Luxury Spas & Wellness Retreats',
  description:
    'Complete guide to spa and wellness in Morocco. Discover traditional hammams, luxury spa resorts in Marrakech, Fez, and Essaouira, argan oil treatments, wellness retreats, thalassotherapy, and budget-friendly spa experiences across Morocco.',
  keywords: [
    'morocco spa',
    'spa morocco',
    'wellness retreat morocco',
    'spa resorts morocco',
    'moroccan spa experience',
    'best spa in marrakech',
    'luxury spa morocco',
    'moroccan hammam',
    'traditional hammam experience',
    'argan oil spa treatment',
    'ghassoul clay treatment',
    'morocco thalassotherapy',
    'couples spa morocco',
    'honeymoon spa marrakech',
    'day spa marrakech',
    'public hammam morocco',
    'wellness retreat atlas mountains',
    'moroccan black soap treatment',
    'rose water spa morocco',
    'yoga spa retreat morocco',
  ],
  openGraph: {
    title: 'Morocco Spa & Wellness Guide 2026 | Hammams, Luxury Spas & Wellness Retreats',
    description:
      'Discover Morocco\'s world-class spa culture. From centuries-old hammam rituals and argan oil treatments to luxury resort spas and Atlas Mountain wellness retreats.',
    url: `${BASE_URL}/morocco-spa-wellness`,
    images: [
      {
        url: `${BASE_URL}/images/hero-spa-wellness.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxurious Moroccan spa interior with zellige tilework, marble fountain, and warm ambient lighting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Spa & Wellness Guide 2026 | Hammams, Luxury Spas & Retreats',
    description:
      'Complete guide to Morocco\'s spa culture. Traditional hammams, luxury resort spas, argan oil treatments, wellness retreats, and budget-friendly options.',
    images: [`${BASE_URL}/images/hero-spa-wellness.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-spa-wellness` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-spa-wellness`,
  name: 'Morocco Spa & Wellness Guide 2026 | Hammams, Luxury Spas & Wellness Retreats',
  description:
    'Complete guide to spa and wellness in Morocco. Traditional hammams, luxury spa resorts, argan oil treatments, wellness retreats, thalassotherapy, and budget spa experiences.',
  url: `${BASE_URL}/morocco-spa-wellness`,
  image: `${BASE_URL}/images/hero-spa-wellness.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-spa-wellness`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Spa & Wellness Guide', item: `${BASE_URL}/morocco-spa-wellness` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a traditional Moroccan hammam experience like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A traditional Moroccan hammam is a communal steam bathhouse. You move through progressively hotter rooms, then an attendant (tayeba) scrubs your skin with black soap (savon beldi) and a coarse exfoliating mitt (kessa). This is followed by a rinse, ghassoul clay mask, and often a massage with argan oil. The entire ritual takes 60 to 90 minutes and leaves your skin incredibly soft. Public hammams cost from 20 MAD while luxury versions range from 300 to 1,500 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to a Moroccan hammam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a public hammam, bring flip-flops, a change of underwear, a towel, and toiletries (or buy black soap and a kessa mitt at the entrance). Women wear underwear; men wear swim shorts. Luxury spa hammams provide everything including robes, slippers, and premium products. Always bring a water bottle to stay hydrated in the steam rooms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a spa treatment cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers spa experiences at every budget. A public hammam costs from 20 MAD (about 2 USD). A private hammam with scrub and massage at a mid-range spa costs from 300 MAD. Luxury hotel spas charge from 800 to 3,000 MAD for signature treatments. Full-day spa packages at five-star resorts range from 2,000 to 5,000 MAD. Prices vary seasonally and can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which city in Morocco has the best spas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is Morocco\'s undisputed spa capital, home to La Mamounia, Royal Mansour, and Mandarin Oriental. Essaouira offers a laid-back coastal wellness scene with thalassotherapy options. Fez has traditional hammams in historic riads. The Atlas Mountains provide secluded retreat settings at properties like Kasbah Tamadot. Each destination offers a different wellness atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it appropriate for couples to visit a hammam together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traditional public hammams are strictly gender-separated, with different hours or areas for men and women. However, many luxury hotel spas and private hammams offer couples treatments where partners can enjoy the hammam experience together in a private room. Properties like Royal Mansour, La Mamounia, and most upscale riads provide dedicated couples suites.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the benefits of argan oil spa treatments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Argan oil, native to Morocco, is rich in vitamin E, essential fatty acids, and antioxidants. Spa treatments using pure argan oil deeply moisturize skin, reduce inflammation, and combat signs of aging. Argan oil massages improve skin elasticity and leave a healthy glow. Hair treatments with argan oil restore shine and reduce frizz. Morocco is the only place where argan trees grow naturally, making these treatments especially authentic.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco for a spa holiday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a year-round spa destination. October to April is ideal as cooler weather makes hot hammam sessions especially enjoyable. Spring (March-May) is perfect for combining wellness with sightseeing. Summer spa visits offer refreshing escapes from the heat with pool and thalassotherapy options. Ramadan periods may affect some spa schedules, so check with your chosen property in advance.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TRADITIONAL TREATMENTS
   ═══════════════════════════════════════════════════════════════ */

const traditionalTreatments = [
  {
    name: 'Black Soap (Savon Beldi)',
    icon: Droplets,
    description:
      'Made from olive oil and macerated olives, this thick, dark paste is the foundation of every hammam ritual. Applied to steamed skin and left for several minutes, it loosens dead skin cells. When scrubbed with a kessa mitt, it reveals remarkably soft, glowing skin underneath. Authentic savon beldi has a smooth, buttery texture and an earthy olive scent.',
    benefit: 'Deep cleansing, exfoliation, skin softening',
    price: 'From 30 MAD for a jar at souks',
  },
  {
    name: 'Ghassoul Clay (Rhassoul)',
    icon: Mountain,
    description:
      'Mined exclusively from the Atlas Mountains near Fez, ghassoul is a mineral-rich clay used for over 1,400 years. Applied as a face and body mask after the hammam scrub, it draws out impurities while nourishing the skin with silica, magnesium, and potassium. Ghassoul is also used as a natural shampoo, leaving hair silky without chemicals.',
    benefit: 'Detoxification, mineral nourishment, pore cleansing',
    price: 'From 20 MAD for raw clay at cooperatives',
  },
  {
    name: 'Argan Oil Massage',
    icon: Flower2,
    description:
      'Pure argan oil, cold-pressed from the nuts of trees found only in southwestern Morocco, is the country\'s most prized beauty ingredient. Rich in vitamin E and omega fatty acids, a full-body argan oil massage deeply nourishes the skin, improves elasticity, and leaves a subtle golden glow. Many spas combine argan oil with essential oils of rose, neroli, or orange blossom.',
    benefit: 'Deep moisturizing, anti-aging, skin elasticity',
    price: 'From 250 MAD for a 60-minute massage',
  },
  {
    name: 'Rose Water Ritual',
    icon: Heart,
    description:
      'Distilled from Damascena roses grown in the Dades Valley (the "Valley of Roses"), Moroccan rose water is used as a toner, facial mist, and finishing touch in hammam rituals. During the rose harvest in April and May, the Kelaat M\'Gouna region produces thousands of liters. Rose water soothes irritation, balances skin pH, and provides a delicate, intoxicating fragrance.',
    benefit: 'Skin toning, anti-inflammatory, natural fragrance',
    price: 'From 40 MAD for a bottle at cooperatives',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY SPAS
   ═══════════════════════════════════════════════════════════════ */

const luxurySpas = [
  {
    name: 'La Mamounia Spa',
    city: 'Marrakech',
    icon: Crown,
    image: '/images/hero-luxury-hotels.webp',
    description:
      'One of the world\'s most celebrated hotel spas, La Mamounia\'s 2,500-square-meter wellness center blends Moroccan tradition with contemporary luxury. The white Carrara marble hammam is a masterpiece. Signature treatments use ingredients sourced from Morocco\'s regions: argan oil from Essaouira, rose from Kelaat M\'Gouna, and saffron from Taliouine. The outdoor pool garden with Atlas Mountain views completes the experience.',
    highlights: ['2,500 sqm wellness center', 'Carrara marble hammam', 'Atlas Mountain views', 'Moroccan-sourced ingredients'],
    price: 'From 1,200 MAD for signature treatments',
  },
  {
    name: 'Royal Mansour Spa',
    city: 'Marrakech',
    icon: Crown,
    image: '/images/hero-luxury-riads.webp',
    description:
      'Designed by King Mohammed VI himself, the Royal Mansour spa spans 2,500 square meters across a white-on-white paradise of carved stucco and zellige mosaics. The three-room hammam journey, private treatment suites, and a stunning indoor pool beneath a domed ceiling make this arguably Morocco\'s finest spa. Treatments are based on ancestral Moroccan beauty recipes passed down through generations.',
    highlights: ['Royal design pedigree', 'Three-room hammam journey', 'Domed indoor pool', 'Ancestral beauty recipes'],
    price: 'From 1,500 MAD for hammam rituals',
  },
  {
    name: 'Mandarin Oriental Spa',
    city: 'Marrakech',
    icon: Award,
    image: '/images/hero-marrakech.webp',
    description:
      'Set within 20 hectares of olive groves and gardens, the Mandarin Oriental\'s spa features nine treatment rooms, a traditional hammam, vitality pool, and an extensive outdoor relaxation garden. Their signature "Moroccan Journey" combines hammam, ghassoul clay wrap, and argan oil massage in a three-hour ritual. The spa seamlessly blends Asian wellness philosophy with Moroccan healing traditions.',
    highlights: ['20-hectare garden setting', 'Nine treatment rooms', 'East-meets-Morocco philosophy', 'Three-hour signature journey'],
    price: 'From 1,800 MAD for the Moroccan Journey',
  },
  {
    name: 'Kasbah Tamadot Spa',
    city: 'Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas-mountains.webp',
    description:
      'Sir Richard Branson\'s mountain retreat sits at 1,300 meters in the High Atlas, offering spa treatments with panoramic mountain views. The intimate spa includes a traditional hammam, outdoor heated infinity pool, and treatment rooms opening onto terraces above the Berber village of Asni. Treatments use locally sourced ingredients and the mountain air itself becomes part of the healing experience.',
    highlights: ['1,300m mountain altitude', 'Infinity pool with Atlas views', 'Intimate Berber setting', 'Locally sourced ingredients'],
    price: 'From 900 MAD for individual treatments',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPA RESORTS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const spaByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    description:
      'Morocco\'s undisputed spa capital with the highest concentration of world-class wellness facilities. From opulent palace hotel spas to intimate riad hammams in the medina, Marrakech offers every level of spa experience. The city\'s dry heat makes hammam sessions especially revitalizing.',
    topSpas: ['La Mamounia', 'Royal Mansour', 'Mandarin Oriental', 'Amanjena', 'Four Seasons'],
    priceRange: 'From 200 MAD (riad spa) to 3,000 MAD (luxury resort)',
  },
  {
    city: 'Fez',
    icon: Landmark,
    description:
      'The spiritual capital offers some of Morocco\'s most authentic hammam experiences within centuries-old medina riads. Fez\'s spa scene emphasizes tradition over glamour, with genuine public hammams that have served locals for generations. Riad spas here are intimate and atmospheric, set in beautifully restored courtyard palaces.',
    topSpas: ['Riad Fes Spa', 'Palais Faraj Spa', 'Karawan Riad', 'Spa Laaroussa', 'Hotel Sahrai'],
    priceRange: 'From 150 MAD (riad hammam) to 1,500 MAD (palace spa)',
  },
  {
    city: 'Essaouira',
    icon: Globe,
    description:
      'This windswept Atlantic coastal town combines beach wellness with Moroccan tradition. Thalassotherapy centers use seawater, seaweed, and marine minerals for treatments. The laid-back bohemian atmosphere of Essaouira makes it ideal for longer wellness stays. Argan oil is produced in the surrounding region, giving treatments here extra authenticity.',
    topSpas: ['Sofitel Mogador', 'Heure Bleue Palais', 'Villa Maroc', 'Le Jardin des Douars', 'Baoussala Spa'],
    priceRange: 'From 200 MAD (thalassotherapy) to 1,800 MAD (resort package)',
  },
  {
    city: 'Atlas Mountains',
    icon: Mountain,
    description:
      'Mountain retreats offer a completely different wellness experience: crisp air, silence, panoramic views, and an intimate connection with nature. Spa resorts in the Atlas pair treatments with hiking, meditation, and farm-to-table cuisine. The altitude and clean mountain air amplify the restorative effects of any treatment.',
    topSpas: ['Kasbah Tamadot', 'Kasbah Bab Ourika', 'Domaine de la Roseraie', 'Kasbah Africa', 'Toubkal Lodge'],
    priceRange: 'From 300 MAD (day treatment) to 2,500 MAD (retreat package)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET SPA OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const budgetOptions = [
  {
    name: 'Public Hammam (Hammam Beldi)',
    icon: DollarSign,
    description:
      'Found in every neighborhood across Morocco, public hammams are where locals go for their weekly bathing ritual. Bring your own soap, mitt, and towel, or buy them at the entrance. Gender-segregated with separate hours or sections. An unforgettable cultural experience and the most affordable spa option in the country.',
    price: 'From 20 MAD entry; scrub service from 50 MAD extra',
    tip: 'Go during off-peak hours (mid-morning) for a less crowded experience',
  },
  {
    name: 'Riad Hammam Packages',
    icon: Building,
    description:
      'Many mid-range riads offer in-house hammam and massage packages to guests and non-guests alike. These provide a more private, comfortable setting than public hammams with quality products, but at a fraction of luxury hotel prices. A typical package includes steam, scrub, mask, and a 30-minute massage.',
    price: 'From 200 MAD for a full hammam package',
    tip: 'Ask if non-guests can book; many riads welcome walk-in spa clients',
  },
  {
    name: 'Cooperative Product Stores',
    icon: Flower2,
    description:
      'Visit argan oil, rose water, or ghassoul clay cooperatives to buy premium spa products at source prices. Create your own DIY spa experience at your accommodation. Women\'s cooperatives in the Souss region sell pure argan oil far cheaper than retail, and the Dades Valley offers fresh rose water during harvest season.',
    price: 'From 80 MAD for pure argan oil; from 20 MAD for ghassoul clay',
    tip: 'Buy directly from cooperatives for guaranteed purity and fair-trade pricing',
  },
  {
    name: 'Day Spa Deals',
    icon: Clock,
    description:
      'Many luxury hotels and dedicated day spas offer midweek or off-season promotions, especially during summer months when tourist numbers drop. Some five-star properties sell day passes that include pool access, hammam, and a treatment, making high-end experiences surprisingly accessible.',
    price: 'From 400 MAD for promotional day spa packages',
    tip: 'Book midweek and ask about seasonal promotions for best value',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WELLNESS RETREATS
   ═══════════════════════════════════════════════════════════════ */

const wellnessRetreats = [
  {
    name: 'Yoga & Spa Retreats',
    icon: Heart,
    description:
      'Multi-day programs combining daily yoga sessions with hammam rituals, massages, and meditation. Popular in the Atlas Mountains and Essaouira coast, these retreats typically include healthy Moroccan cuisine, nature excursions, and personalized wellness consultations. Most run for three to seven days.',
    locations: 'Atlas Mountains, Essaouira, Ourika Valley, Paradise Valley',
    price: 'From 3,500 MAD for a 3-day retreat',
  },
  {
    name: 'Detox & Clean Eating Programs',
    icon: Sparkles,
    description:
      'Structured programs focused on cleansing the body through juice fasts, plant-based Moroccan cuisine, hammam sessions, and guided nature walks. Morocco\'s abundance of fresh organic produce, herbs, and traditional cleansing rituals makes it a natural destination for detox holidays.',
    locations: 'Marrakech countryside, Atlas foothills, Agadir',
    price: 'From 5,000 MAD for a 5-day program',
  },
  {
    name: 'Thalassotherapy Retreats',
    icon: Droplets,
    description:
      'Seawater-based healing programs along Morocco\'s Atlantic and Mediterranean coasts. Treatments include heated seawater pools, algae wraps, jet showers, and marine mud applications. Thalassotherapy is particularly effective for joint pain, skin conditions, and stress relief. Essaouira, Agadir, and Saida offer dedicated centers.',
    locations: 'Essaouira, Agadir, Saida, Casablanca coast',
    price: 'From 4,000 MAD for a 3-day thalasso package',
  },
  {
    name: 'Meditation & Silence Retreats',
    icon: Mountain,
    description:
      'For those seeking deep inner calm, select properties in the Atlas Mountains and Sahara Desert offer guided meditation, breathwork, and digital detox programs. The vast silence of the desert or the tranquility of mountain valleys creates a powerful backdrop for contemplative practice.',
    locations: 'Sahara Desert camps, High Atlas, Ouirgane Valley',
    price: 'From 4,500 MAD for a 4-day retreat',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COUPLES & HONEYMOON PACKAGES
   ═══════════════════════════════════════════════════════════════ */

const couplesPackages = [
  {
    name: 'Private Couples Hammam',
    description:
      'A dedicated hammam suite where couples experience the traditional bathing ritual together. Two attendants perform synchronized scrubs, followed by a couples massage in a candlelit room. Rose petals, warm towels, and mint tea complete the romantic setting.',
    where: 'La Mamounia, Royal Mansour, most luxury riads',
    price: 'From 1,500 MAD per couple',
  },
  {
    name: 'Honeymoon Spa Retreat',
    description:
      'Multi-day packages designed for newlyweds, combining daily spa treatments, private dining, and romantic excursions. Properties like Amanjena and La Sultana offer all-inclusive honeymoon programs with customizable treatment menus and champagne amenities.',
    where: 'Amanjena, La Sultana, Selman Marrakech',
    price: 'From 8,000 MAD for a 3-night package',
  },
  {
    name: 'Desert Spa Experience',
    description:
      'Luxury desert camps in the Sahara offer open-air massages under the stars, sand scrub exfoliations, and sunrise yoga sessions on the dunes. The combination of absolute silence, starlit skies, and natural beauty creates an unforgettable romantic wellness experience.',
    where: 'Merzouga, Erg Chebbi, Zagora luxury camps',
    price: 'From 3,000 MAD per couple per night (all-inclusive)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY SPA VS RESORT SPA COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const spaComparison = [
  {
    feature: 'Duration',
    daySpa: 'Single treatments or half-day packages (1-4 hours)',
    resortSpa: 'Full access during stay; multi-day programs available',
  },
  {
    feature: 'Price Range',
    daySpa: 'From 200 MAD per treatment',
    resortSpa: 'From 800 MAD per treatment (included in some rates)',
  },
  {
    feature: 'Facilities',
    daySpa: 'Treatment rooms, hammam, relaxation area',
    resortSpa: 'Full gym, pools, gardens, hammam, multiple treatment suites',
  },
  {
    feature: 'Atmosphere',
    daySpa: 'Focused, efficient; in-and-out experience',
    resortSpa: 'Immersive; spend the entire day in wellness surroundings',
  },
  {
    feature: 'Best For',
    daySpa: 'Quick pampering between sightseeing',
    resortSpa: 'Dedicated wellness holidays and honeymoons',
  },
  {
    feature: 'Booking',
    daySpa: 'Walk-ins often welcome; reserve 1 day ahead in peak season',
    resortSpa: 'Book well in advance; non-guests may have limited access',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPA ETIQUETTE
   ═══════════════════════════════════════════════════════════════ */

const spaEtiquette = [
  {
    title: 'Clothing & Modesty',
    icon: ShieldCheck,
    description:
      'In public hammams, women wear underwear and men wear swim shorts. Full nudity is not customary in Moroccan hammams. Luxury spa hammams may provide disposable underwear. Always err on the side of modesty.',
  },
  {
    title: 'Tipping Culture',
    icon: DollarSign,
    description:
      'Tipping is customary and appreciated. In public hammams, tip the tayeba (scrubber) from 20 to 50 MAD. In luxury spas, 10-15% of the treatment cost is standard. Tips can be left at reception or given directly to your therapist.',
  },
  {
    title: 'Hydration & Timing',
    icon: Droplets,
    description:
      'Drink plenty of water before and after your hammam session. Avoid heavy meals within two hours of treatment. Arrive 15-20 minutes early at luxury spas. The best time for public hammams is mid-morning on weekdays when they are less crowded.',
  },
  {
    title: 'Communication',
    icon: Info,
    description:
      'Don\'t hesitate to communicate your comfort level regarding water temperature and scrubbing pressure. In luxury spas, staff speak French and often English. In public hammams, basic French or a few Arabic phrases help. A smile and hand gestures also work well.',
  },
  {
    title: 'Health Considerations',
    icon: Heart,
    description:
      'Avoid hammam if you have high blood pressure, heart conditions, or are pregnant (consult your doctor). The intense heat and vigorous scrubbing are not suitable for sunburned or irritated skin. If you feel dizzy, step out to a cooler room immediately.',
  },
  {
    title: 'What to Bring',
    icon: CheckCircle,
    description:
      'For public hammams: flip-flops, towel, change of underwear, water bottle, and toiletries. For luxury spas: just yourself; everything is provided. Consider bringing your own kessa mitt and savon beldi from the souk for a more personal experience at public hammams.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDICAL SPA & THALASSOTHERAPY
   ═══════════════════════════════════════════════════════════════ */

const medicalSpa = [
  {
    name: 'Thalassotherapy Centers',
    icon: Droplets,
    description:
      'Morocco\'s 3,500-kilometer coastline supports several world-class thalassotherapy centers. Treatments use heated seawater, marine algae, sea mud, and ocean minerals to treat conditions from arthritis to chronic fatigue. The Sofitel Thalassa in Essaouira and Agadir\'s Atlantic coast centers are leading facilities.',
    treatments: ['Heated seawater pools', 'Algae body wraps', 'Marine mud therapy', 'Hydro-jet massage', 'Underwater physiotherapy'],
  },
  {
    name: 'Thermal Springs',
    icon: Bath,
    description:
      'Morocco has natural thermal springs with healing mineral waters. Moulay Yacoub near Fez has been a thermal bathing destination since Roman times, with sulfur-rich waters reaching 54 degrees Celsius. Sidi Harazem, also near Fez, offers iron-rich mineral waters. These natural spas are popular with Moroccans seeking relief from skin conditions and joint problems.',
    treatments: ['Sulfur water soaking', 'Mineral water drinking cures', 'Mud applications', 'Thermal pool circuits', 'Physiotherapy programs'],
  },
  {
    name: 'Aesthetic & Medical Spas',
    icon: Sparkles,
    description:
      'Marrakech and Casablanca have seen a rise in medical spas offering advanced aesthetic treatments alongside traditional wellness. These facilities combine Moroccan hospitality with modern dermatological and cosmetic procedures, often at significantly lower prices than European equivalents. Always verify credentials and certifications before booking.',
    treatments: ['Facial rejuvenation', 'Dermatological consultations', 'Non-invasive body treatments', 'Advanced skincare programs', 'Anti-aging protocols'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSpaWellnessPage() {
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
            backgroundImage: 'url(/images/hero-spa-wellness.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Spa &amp; Wellness Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Spa &amp; Wellness
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Spa &amp; Wellness:
            <br className="hidden md:block" /> Hammams, Luxury Spas &amp; Retreats
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From centuries-old hammam rituals and argan oil treatments to world-class resort spas
            and mountain wellness retreats. Your complete guide to rejuvenation in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s Ancient Tradition of Wellness
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Long before the modern wellness industry existed, Morocco perfected the art of
                bodily renewal. The hammam, a steam bathhouse tradition dating back over a thousand
                years, is woven into the fabric of Moroccan life. Every neighborhood has one, and
                the weekly hammam visit is as essential to Moroccan culture as mint tea and Friday
                couscous. It is not merely about cleanliness; it is a ritual of purification,
                community, and self-care that has endured across centuries.
              </p>
              <p>
                Today, Morocco stands as one of the world&apos;s premier spa destinations,
                marrying this ancient bathing heritage with modern luxury. International hotel
                brands have recognized what Moroccans have always known: the combination of
                argan oil, ghassoul clay, rose water, and black soap creates one of the most
                effective natural skincare regimens on Earth. From the palace spas of Marrakech
                to secluded Atlas Mountain retreats, Morocco offers wellness experiences that
                are both deeply authentic and impeccably refined.
              </p>
              <p>
                Whether you seek a transformative week-long retreat, a romantic couples hammam,
                or simply a rejuvenating afternoon between sightseeing, this guide covers every
                aspect of Morocco&apos;s spa and wellness landscape, from budget public hammams
                at from 20 MAD to opulent resort experiences. Seasonal pricing can change, so
                always confirm rates with your chosen property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Hammam Experience ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bath className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Traditional Hammam Experience
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A ritual of purification that has defined Moroccan wellness culture for over a millennium.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                How the Hammam Works
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                A traditional Moroccan hammam consists of three interconnected rooms at progressively
                higher temperatures. You begin in the warm room to acclimate, move to the hot room
                where steam opens your pores, and then an attendant called a tayeba applies black
                soap (savon beldi) to your entire body. After the soap sits for several minutes, the
                tayeba scrubs you vigorously with a coarse kessa mitt, removing layers of dead skin.
                The amount of skin that comes off is astonishing and deeply satisfying.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                Next comes a ghassoul clay mask applied to the face and body, followed by thorough
                rinsing with buckets of alternating warm and cool water. Many hammams finish with
                a rose water spritz and an optional argan oil massage. The entire ritual takes 60
                to 90 minutes and leaves you feeling completely renewed.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Public vs. Private Hammams
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                <strong>Public hammams</strong> are authentic neighborhood institutions where locals
                gather weekly. They are gender-separated, with different hours or areas for men and
                women. Expect tiled rooms, communal benches, and plastic buckets for rinsing. The
                experience is raw, social, and unforgettable. Entry costs from 20 MAD.
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                <strong>Private hammams</strong> in riads and luxury hotels offer the same ritual
                in a more refined setting: marble interiors, premium products, heated marble
                treatment tables (resembling the Turkish sicak tasl), and one-on-one attention.
                Prices range from 300 MAD in riads to from 1,500 MAD at five-star properties.
              </p>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)] mt-3">
                <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                <span>Both experiences are valuable. Try a public hammam at least once for cultural immersion, then treat yourself to a luxury version for comparison.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Traditional Treatments ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flower2 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Traditional Moroccan Spa Treatments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Natural ingredients sourced from Morocco&apos;s diverse landscapes, used in beauty rituals for centuries.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            Prices are approximate and can change seasonally. Always confirm with your spa or cooperative.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditionalTreatments.map((treatment) => (
              <div key={treatment.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <treatment.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {treatment.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{treatment.description}</p>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <Sparkles className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Benefits:</strong> {treatment.benefit}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <DollarSign className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>{treatment.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Spas by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Spa Destinations by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct wellness atmosphere and spa character.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spaByCity.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <city.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Top Spas:</p>
                  <div className="flex flex-wrap gap-2">
                    {city.topSpas.map((spa) => (
                      <span key={spa} className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        {spa}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <DollarSign className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>{city.priceRange}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Luxury Spas ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Luxury Spas in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            World-class wellness facilities blending Moroccan heritage with international luxury standards.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            Treatment prices are starting rates and can change based on season, duration, and availability.
          </p>
          <div className="space-y-8">
            {luxurySpas.map((spa) => (
              <div key={spa.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="relative h-48 md:h-auto">
                    <img
                      src={spa.image}
                      alt={`${spa.name} in ${spa.city}, Morocco - luxury spa interior`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:col-span-2">
                    <div className="flex items-center gap-2 mb-1">
                      <spa.icon className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                        {spa.city}
                      </span>
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      {spa.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{spa.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {spa.highlights.map((h) => (
                        <span key={h} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          <CheckCircle className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)]">
                      <DollarSign className="w-4 h-4" />
                      {spa.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wellness Retreats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wellness Retreats in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Immersive multi-day programs that combine Moroccan traditions with holistic wellness practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wellnessRetreats.map((retreat) => (
              <div key={retreat.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <retreat.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {retreat.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{retreat.description}</p>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Where:</strong> {retreat.locations}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <DollarSign className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>{retreat.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget Spa Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget-Friendly Spa Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            You don&apos;t need a luxury budget to enjoy Morocco&apos;s spa culture. Here are the best affordable options.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            Prices are approximate starting rates and can change seasonally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {budgetOptions.map((option) => (
              <div key={option.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <option.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {option.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{option.description}</p>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <DollarSign className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>{option.price}</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--color-accent)]">
                  <Star className="w-4 h-4 mt-0.5 shrink-0" />
                  <span className="font-medium">{option.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Spa vs Resort Spa ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Spa vs. Resort Spa: Which Is Right for You?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the difference helps you choose the best spa experience for your trip style.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Feature</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Day Spa</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Resort Spa</th>
                  </tr>
                </thead>
                <tbody>
                  {spaComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 1 ? 'bg-[var(--surface-muted)]' : ''}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.feature}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.daySpa}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.resortSpa}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Couples & Honeymoon ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Couples &amp; Honeymoon Spa Packages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is one of the world&apos;s most romantic spa destinations. These packages are designed for two.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {couplesPackages.map((pkg) => (
              <div key={pkg.name} className="card-moroccan p-6">
                <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{pkg.description}</p>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)] mb-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>{pkg.where}</span>
                </div>
                <div className="flex items-start gap-2 text-sm font-semibold text-[var(--color-accent)]">
                  <DollarSign className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{pkg.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Medical Spa & Thalassotherapy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medical Spa &amp; Thalassotherapy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond relaxation: therapeutic treatments harnessing Morocco&apos;s natural healing resources.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {medicalSpa.map((item) => (
              <div key={item.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.treatments.map((t) => (
                    <div key={t} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spa Etiquette ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Spa Etiquette &amp; What to Expect
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential tips for making the most of your Moroccan spa experience, whether at a public hammam or luxury resort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaEtiquette.map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about spa and wellness experiences in Morocco.
          </p>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-hammam-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bath className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                In-depth guide to Morocco&apos;s hammam culture, traditions, and the best bathhouses to visit.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-yoga-retreats" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Yoga Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Find the best yoga retreat centers across Morocco, from coastal studios to mountain hideaways.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-honeymoon-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Honeymoon Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Plan the perfect romantic getaway with our guide to Morocco&apos;s best honeymoon destinations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Discover Morocco&apos;s finest hotels, riads, restaurants, and premium travel experiences.
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
            Ready to Experience Moroccan Wellness?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From ancient hammam rituals to world-class luxury spas, Morocco offers wellness
            experiences that nourish body and soul. Start planning your spa journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-wellness-retreats"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Explore Wellness Retreats
            </Link>
            <Link
              href="/morocco-best-riads"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-5 h-5" />
              Find the Best Riads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}