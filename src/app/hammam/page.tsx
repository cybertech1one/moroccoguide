import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  Thermometer,
  Star,
  MapPin,
  Clock,
  Coins,
  Users,
  ShieldCheck,
  Sparkles,
  Heart,
  CheckCircle,
  AlertTriangle,
  Hand,
  Leaf,
  Crown,
  Building2,
  ArrowRight,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Moroccan Hammam & Spa Guide | Traditional Bathhouses, Luxury Spas & Etiquette',
  description:
    'Complete guide to Moroccan hammams and spas. Discover the ancient bathing ritual, top 12 hammams across Morocco, etiquette rules, product guides for black soap and ghassoul clay, and pricing from public bathhouses to luxury spa experiences.',
  keywords: [
    'Moroccan hammam',
    'hammam Morocco',
    'Moroccan spa',
    'traditional bathhouse Morocco',
    'hammam etiquette',
    'black soap Morocco',
    'ghassoul clay',
    'gommage scrub',
    'Marrakech spa',
    'Fes hammam',
    'hammam experience',
    'Moroccan bathing ritual',
    'Le Bain Bleu',
    'Hammam de la Rose',
    'Les Bains de Marrakech',
  ],
  openGraph: {
    title: 'Moroccan Hammam & Spa Guide - CityGuide',
    description:
      'Everything you need to know about the Moroccan hammam experience. Traditional rituals, top hammams, etiquette, products, and spa recommendations.',
    url: 'https://citytoursmorocco.com/hammam',
    images: [
      {
        url: '/images/hero-hammam.webp',
        width: 1200,
        height: 630,
        alt: 'Traditional Moroccan hammam interior with steam and zellige tiles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroccan Hammam & Spa Guide | CityGuide',
    description:
      'Traditional hammam rituals, top 12 hammams, etiquette, black soap, ghassoul clay, and luxury spa experiences in Morocco.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/hammam' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/hammam#guide',
      headline: 'Complete Guide to Moroccan Hammams & Spas',
      description:
        'Comprehensive guide covering the traditional Moroccan hammam experience, top hammams across Morocco, etiquette, products, and spa recommendations.',
      url: 'https://citytoursmorocco.com/hammam',
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
          name: 'What is a Moroccan hammam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Moroccan hammam is a traditional steam bathhouse that has been central to Moroccan culture for over a thousand years. It combines deep cleansing with ritual relaxation using black soap, eucalyptus steam, gommage scrubbing, and ghassoul clay.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a hammam cost in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Public hammams cost 15-30 MAD (approximately $1.50-$3). Hotel hammams range from 300-800 MAD ($30-$80). Premium spa hammams with full packages cost 500-2000 MAD ($50-$200).',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I bring to a Moroccan hammam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bring a change of underwear, a towel, flip-flops, and a plastic bag for wet items. Public hammams require you to bring your own black soap, scrub mitt (kessa), and ghassoul clay, or you can purchase them at the entrance.',
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   HAMMAM RITUAL STEPS
   ===================================================================== */

const ritualSteps = [
  {
    step: 1,
    title: 'Preparation & Undressing',
    description:
      'You enter the changing area (maslakh) and undress. In public hammams, Moroccans typically wear underwear; in private spa hammams, disposable underwear is often provided. Store your belongings in a locker or cubby. Take a moment to relax and prepare mentally for the experience ahead.',
    duration: '5 min',
    icon: <Users className="w-5 h-5" />,
  },
  {
    step: 2,
    title: 'The Warm Room (Bayt al-Wastani)',
    description:
      'You move into the first heated room, where the temperature is moderate and humid. This acclimatization phase opens your pores and begins to relax your muscles. Sit on the warm marble or tile floor, let the steam envelop you, and allow your body to adjust to the heat for 10-15 minutes.',
    duration: '10-15 min',
    icon: <Thermometer className="w-5 h-5" />,
  },
  {
    step: 3,
    title: 'Black Soap Application (Savon Beldi)',
    description:
      'A thick, dark olive-oil-based paste called savon beldi is applied generously all over your body. This traditional black soap, enriched with eucalyptus, is left on the skin for several minutes to soften dead skin cells and deeply nourish the skin. The soap has been used in Moroccan hammams for centuries.',
    duration: '10 min',
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    step: 4,
    title: 'The Hot Room (Bayt al-Sakhun)',
    description:
      'You proceed to the hottest room, where intense steam fully opens your pores. The black soap continues to work on your skin while the heat relaxes deep muscle tension. The temperature here can reach 45-50 degrees Celsius. Breathe slowly and let the steam cleanse your respiratory system.',
    duration: '10-15 min',
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    step: 5,
    title: 'Gommage Scrub (Kessa)',
    description:
      'The signature moment of the hammam experience. Using a rough exfoliating mitt called a kessa, the tayaba (hammam attendant) vigorously scrubs your entire body with firm, rhythmic strokes. Rolls of dead skin visibly peel away, revealing fresh, glowing skin beneath. The scrub is thorough and can feel intense but is deeply satisfying.',
    duration: '15-20 min',
    icon: <Hand className="w-5 h-5" />,
  },
  {
    step: 6,
    title: 'Ghassoul Clay Mask',
    description:
      'A mineral-rich clay called ghassoul (or rhassoul), sourced exclusively from the Atlas Mountains, is applied as a full-body mask. This natural clay draws out impurities, tightens pores, and leaves skin incredibly smooth. Some hammams also apply it to the hair and scalp for deep conditioning.',
    duration: '10 min',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    step: 7,
    title: 'Rinse & Cool Down',
    description:
      'Buckets of alternating warm and cool water are poured over you to rinse away the clay and close your pores. Some hammams use rose water in the final rinse for a luxurious, fragrant finish. You gradually move back through the rooms, allowing your body temperature to return to normal.',
    duration: '10 min',
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    step: 8,
    title: 'Relaxation & Mint Tea',
    description:
      'You return to the resting area, wrapped in warm towels, where you relax on cushions and are served traditional Moroccan mint tea. This final phase is essential: the combination of deep cleansing and total relaxation leaves you feeling profoundly renewed. Many hammams also offer argan oil massage at this stage.',
    duration: '15-30 min',
    icon: <Heart className="w-5 h-5" />,
  },
];

/* =====================================================================
   TYPES OF HAMMAMS
   ===================================================================== */

const hammamTypes = [
  {
    type: 'Public Hammams (Hammam Baladi)',
    icon: <Building2 className="w-6 h-6" />,
    price: '15-30 MAD',
    priceUsd: '$1.50-$3',
    description:
      'The authentic neighborhood experience. Public hammams are where Moroccans of all backgrounds come to bathe, socialize, and unwind. They are an essential part of community life, especially in medinas. The facilities are basic but functional: tiled rooms with communal buckets, hot and cold water taps, and separate sessions for men and women. You bring your own supplies or buy them at the door. The tayaba (scrubber) charges an additional 30-50 MAD for a gommage. Public hammams offer the most genuine cultural immersion and are an experience every visitor should try at least once.',
    pros: ['Authentic cultural experience', 'Incredibly affordable', 'Meet local Moroccans', 'Found in every neighborhood'],
    cons: ['Basic facilities', 'Bring your own supplies', 'Language barrier possible', 'Can feel overwhelming for first-timers'],
  },
  {
    type: 'Hotel Hammams',
    icon: <Star className="w-6 h-6" />,
    price: '300-800 MAD',
    priceUsd: '$30-$80',
    description:
      'Many riads and hotels in Morocco feature private hammams for their guests, offering a comfortable introduction to the bathing ritual. These hammams provide all supplies, a private or semi-private setting, and an attendant who guides you through each step. The facilities are clean, well-maintained, and beautifully decorated with traditional zellige tiles and tadelakt plaster. Hotel hammams are ideal for travelers who want the authentic experience in a more controlled, intimate setting. Most riads in Marrakech and Fes offer hammam sessions as part of their services or at a modest additional charge.',
    pros: ['Private & comfortable', 'All supplies provided', 'English-speaking staff', 'Beautiful traditional decor'],
    cons: ['Less authentic than public', 'Higher price point', 'Smaller facilities', 'Limited availability at small riads'],
  },
  {
    type: 'Luxury Spa Hammams',
    icon: <Crown className="w-6 h-6" />,
    price: '500-2000 MAD',
    priceUsd: '$50-$200',
    description:
      'Premium spa hammams elevate the traditional ritual into a world-class wellness experience. These establishments combine the authentic Moroccan bathing ceremony with modern spa treatments: argan oil massages, rose petal baths, full-body wraps, facial treatments, and multi-hour relaxation packages. The interiors are architectural marvels featuring hand-carved plaster, intricate zellige mosaics, candlelit chambers, and heated marble slabs. Spa hammams in Marrakech are internationally renowned and attract wellness travelers from around the world. Advance booking is essential, especially during high season.',
    pros: ['World-class facilities', 'Comprehensive packages', 'Highly trained therapists', 'Stunning architecture'],
    cons: ['Premium pricing', 'Must book in advance', 'Can feel commercialized', 'Tourist-oriented atmosphere'],
  },
];

/* =====================================================================
   TOP 12 HAMMAMS IN MOROCCO
   ===================================================================== */

interface Hammam {
  name: string;
  city: string;
  address: string;
  type: string;
  priceRange: string;
  description: string;
  highlights: string[];
  image: string;
}

const topHammams: Hammam[] = [
  {
    name: 'Le Bain Bleu',
    city: 'Marrakech',
    address: '32 Derb Fernatchi, Bab Doukala, Medina, Marrakech',
    type: 'Luxury Spa',
    priceRange: '400-1500 MAD',
    description:
      'A stunning boutique spa housed in a beautifully restored riad in the heart of the medina. Le Bain Bleu offers an intimate, refined hammam experience with exceptional attention to detail. The traditional hammam ritual is followed by optional argan oil massages and beauty treatments in candlelit treatment rooms.',
    highlights: ['Intimate boutique setting', 'Traditional ritual with modern luxury', 'Argan oil massage packages', 'Candlelit relaxation rooms'],
    image: '/images/hero-hammam.webp',
  },
  {
    name: 'Hammam de la Rose',
    city: 'Marrakech',
    address: '130 Dar el Bacha, Medina, Marrakech',
    type: 'Luxury Spa',
    priceRange: '500-1800 MAD',
    description:
      'One of the most celebrated hammams in Marrakech, Hammam de la Rose combines centuries-old bathing traditions with contemporary wellness design. The space features a succession of beautifully tiled rooms, a hot plunge pool, and a rose-petal-strewn relaxation lounge. Their signature rose-infused treatments are legendary.',
    highlights: ['Signature rose treatments', 'Hot plunge pool', 'Multiple treatment rooms', 'Award-winning spa'],
    image: '/images/hero-hammam-interior.webp',
  },
  {
    name: 'Les Bains de Marrakech',
    city: 'Marrakech',
    address: '2 Derb Sedra, Bab Agnaou, Kasbah, Marrakech',
    type: 'Luxury Spa',
    priceRange: '600-2000 MAD',
    description:
      'A palatial spa near the Saadian Tombs offering the most comprehensive hammam and wellness experience in Marrakech. Spread across multiple levels of a grand riad, Les Bains de Marrakech features a traditional hammam circuit, private treatment suites, a swimming pool, and a rooftop terrace. Half-day and full-day packages are available.',
    highlights: ['Palatial multi-level venue', 'Swimming pool', 'Full-day spa packages', 'Couples treatments available'],
    image: '/images/hero-hammam.webp',
  },
  {
    name: 'Heritage Spa',
    city: 'Marrakech',
    address: '40 Arset Aouzal, Bab Doukkala, Medina, Marrakech',
    type: 'Luxury Spa',
    priceRange: '500-1600 MAD',
    description:
      'A beautifully designed spa in the medina that masterfully blends Moroccan architectural heritage with world-class spa services. Heritage Spa is known for its exceptional gommage technique and its use of premium, locally sourced products including argan oil from Essaouira and rose water from the Dades Valley.',
    highlights: ['Locally sourced products', 'Expert gommage technique', 'Beautiful architecture', 'Central medina location'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Hammam Moulay Yacoub',
    city: 'Fes',
    address: 'Moulay Yacoub Village, 22 km from Fes',
    type: 'Thermal Springs',
    priceRange: '50-300 MAD',
    description:
      'A legendary thermal spa 22 kilometers from Fes, renowned for its naturally heated sulfurous spring water that emerges at 54 degrees Celsius. Moroccans have visited these therapeutic springs for centuries to treat skin conditions, rheumatism, and respiratory ailments. The recently renovated complex includes public and private bathing areas.',
    highlights: ['Natural thermal springs', 'Therapeutic sulfur waters', 'Both public & private areas', 'Centuries-old healing tradition'],
    image: '/images/hero-wellness-spa.webp',
  },
  {
    name: 'Spa Laaroussa',
    city: 'Fes',
    address: '3 Derb Bechara, Talaa Sghira, Fes el-Bali',
    type: 'Riad Spa',
    priceRange: '400-1200 MAD',
    description:
      'Located within the exquisite Riad Laaroussa in the heart of the Fes medina, this intimate spa offers a deeply authentic hammam experience in a 17th-century palace setting. The hammam chamber features original tadelakt walls and is heated by a traditional wood-fired boiler, preserving the centuries-old method.',
    highlights: ['17th-century palace setting', 'Wood-fired traditional heating', 'Original tadelakt walls', 'Intimate private experience'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Riad Fes Spa',
    city: 'Fes',
    address: '5 Derb Ben Slimane, Zerbtana, Fes el-Bali',
    type: 'Luxury Hotel Spa',
    priceRange: '500-1500 MAD',
    description:
      'The spa at the five-star Riad Fes is one of the most luxurious wellness experiences in the imperial city. Built into the ancient riad architecture, the spa features a marble hammam, a swimming pool, and treatment rooms overlooking the medina rooftops. Their signature Ceremony of the Senses package combines hammam with a full aromatherapy journey.',
    highlights: ['Five-star luxury', 'Marble hammam chamber', 'Medina rooftop views', 'Ceremony of the Senses package'],
    image: '/images/hero-riad-interior.webp',
  },
  {
    name: 'Hammam Ziani',
    city: 'Casablanca',
    address: '12 Rue de Fes, Maarif, Casablanca',
    type: 'Traditional Spa',
    priceRange: '200-600 MAD',
    description:
      'A modern take on the traditional hammam in Casablanca cosmopolitan Maarif district. Hammam Ziani is popular with both locals and visitors for its clean, well-maintained facilities and professional staff. The hammam circuit is complemented by massage rooms, a relaxation lounge, and a range of beauty treatments.',
    highlights: ['Clean modern facilities', 'Popular with locals', 'Full beauty treatment menu', 'Central Casablanca location'],
    image: '/images/hero-hammam-interior.webp',
  },
  {
    name: 'La Sultana Spa',
    city: 'Casablanca',
    address: 'La Sultana Hotel, 3 Rue du Port, Casablanca',
    type: 'Luxury Hotel Spa',
    priceRange: '600-2000 MAD',
    description:
      'The crown jewel of Casablanca wellness, La Sultana Spa is a 2,500-square-meter sanctuary within the prestigious La Sultana Hotel. Featuring an indoor pool, vitality pool, hammam, and extensive treatment menu, it combines Moroccan traditions with international spa standards. The hammam uses heated black marble and hand-mixed products.',
    highlights: ['2,500 sqm spa complex', 'Indoor & vitality pools', 'Black marble hammam', 'International spa standards'],
    image: '/images/hero-spa.webp',
  },
  {
    name: 'Hammam Lalla Mira',
    city: 'Essaouira',
    address: '14 Rue d Algerie, Medina, Essaouira',
    type: 'Eco Hammam',
    priceRange: '150-500 MAD',
    description:
      'A pioneering eco-friendly hammam in Essaouira old medina, housed in a beautifully restored 18th-century building. Hammam Lalla Mira is heated entirely by a solar and recycled-oil system, making it one of the greenest hammams in Morocco. The experience is authentic, the products are organic, and the setting is enchanting.',
    highlights: ['Eco-friendly solar heating', 'Organic products', '18th-century building', 'Sustainable tourism pioneer'],
    image: '/images/hero-essaouira.webp',
  },
  {
    name: 'Hammam Balima',
    city: 'Rabat',
    address: 'Avenue Mohammed V, near Balima Hotel, Rabat',
    type: 'Historic Public Hammam',
    priceRange: '20-50 MAD',
    description:
      'One of the oldest public hammams in Morocco capital city, located near the iconic Balima Hotel on Avenue Mohammed V. This is a true neighborhood hammam where Rabati families have bathed for generations. The simple, no-frills experience offers a window into authentic daily life in the capital.',
    highlights: ['Historic neighborhood hammam', 'Ultra-affordable', 'Authentic local experience', 'Central Rabat location'],
    image: '/images/hero-hammam.webp',
  },
  {
    name: 'Hammam Kasbah',
    city: 'Tangier',
    address: 'Rue de la Kasbah, Kasbah, Tangier Medina',
    type: 'Traditional Public Hammam',
    priceRange: '15-40 MAD',
    description:
      'Nestled in the ancient Kasbah quarter of Tangier overlooking the Strait of Gibraltar, this historic hammam has served the neighborhood for centuries. The atmospheric stone chambers and the proximity to the Kasbah Museum make it a cultural experience as much as a bathing one. Separate hours for men and women.',
    highlights: ['Historic Kasbah location', 'Centuries-old stone chambers', 'Near Kasbah Museum', 'Authentic neighborhood vibe'],
    image: '/images/hero-tangier-kasbah.webp',
  },
];

/* =====================================================================
   HAMMAM ETIQUETTE RULES
   ===================================================================== */

const etiquetteRules = [
  {
    title: 'Gender Separation Is Absolute',
    description:
      'Public hammams have strictly separate sessions or hours for men and women, and this rule is never broken. Women typically visit in the morning and afternoon, while men go in the evening. Hotel and spa hammams often offer mixed-gender sessions for couples by request, but always confirm in advance.',
  },
  {
    title: 'Understand the Nudity Norms',
    description:
      'In public hammams, most Moroccan women bathe in underwear, and men wear shorts or underwear. Full nudity is uncommon in public settings. In private spa hammams, disposable underwear is usually provided. If you are uncomfortable, wearing a swimsuit is always acceptable. Follow the lead of other bathers.',
  },
  {
    title: 'Bring Your Own Supplies to Public Hammams',
    description:
      'Public hammams do not provide supplies. Bring your own black soap (savon beldi), exfoliating mitt (kessa), ghassoul clay, shampoo, towel, flip-flops, and a plastic bag for wet items. You can purchase a basic hammam kit from nearby shops or supermarkets for around 30-50 MAD.',
  },
  {
    title: 'Tip the Tayaba Generously',
    description:
      'The tayaba (hammam attendant who performs the scrub) works incredibly hard. In public hammams, the gommage service costs 30-50 MAD, but an additional tip of 20-30 MAD is customary and appreciated. In spa hammams, a 10-15% tip on top of the service price is standard practice.',
  },
  {
    title: 'Respect Personal Space and Quiet',
    description:
      'While hammams are social spaces where conversation is welcome, be mindful of the meditative atmosphere. Avoid being excessively loud, splashing water carelessly, or taking up more space than necessary. The hammam is a place of relaxation and communal respect.',
  },
  {
    title: 'Do Not Rush the Experience',
    description:
      'A proper hammam session takes at least 60-90 minutes. Rushing through defeats the purpose. Allow time for each phase: acclimatization, black soap, steam, scrub, clay, rinse, and rest. The post-hammam relaxation with mint tea is an integral part of the ritual, not an optional add-on.',
  },
  {
    title: 'Communicate Your Comfort Level',
    description:
      'The gommage scrub can be vigorous. If the tayaba is scrubbing too hard, say "shwiya shwiya" (gently, gently) or "bezzaf" (enough). In spa hammams, staff usually ask about your pressure preference beforehand. There is no shame in asking for a lighter touch.',
  },
  {
    title: 'Hydrate Before and After',
    description:
      'The intense heat and steam cause significant fluid loss. Drink plenty of water before your hammam session and continue hydrating afterward. Avoid eating a heavy meal less than two hours before your visit. The mint tea served after the hammam helps with rehydration.',
  },
  {
    title: 'Remove All Jewelry',
    description:
      'Leave rings, necklaces, bracelets, and watches in the changing room locker. Metal jewelry heats up in the steam rooms and can cause burns. The vigorous scrubbing can also damage delicate jewelry. Bring only what you need into the hammam rooms.',
  },
  {
    title: 'Photography Is Strictly Forbidden',
    description:
      'Never bring a phone or camera into the bathing areas of any hammam. This is a serious breach of etiquette and privacy. Phones should be left in the changing room locker. Some spa hammams allow photos in the relaxation lounge, but always ask first.',
  },
];

/* =====================================================================
   PRODUCTS GUIDE
   ===================================================================== */

const products = [
  {
    name: 'Savon Beldi (Black Soap)',
    arabicName: 'صابون بلدي',
    image: '/images/hero-hammam-interior.webp',
    description:
      'A thick, dark olive-oil-based paste that has been the cornerstone of the Moroccan hammam ritual for centuries. Made from a blend of olive oil, crushed olives, and sometimes infused with eucalyptus or argan oil, savon beldi deeply nourishes the skin while softening dead cells for removal during the gommage scrub. Unlike Western soaps, it does not lather but rather coats the skin in a rich, emollient layer.',
    howToUse: 'Apply a thick layer over damp skin. Leave on for 10 minutes in the steam room. Scrub off with a kessa mitt.',
    buyingTip: 'Look for pure olive oil black soap in medina herb shops. Avoid versions with artificial colors. A 250g jar costs 20-40 MAD.',
  },
  {
    name: 'Ghassoul Clay (Rhassoul)',
    arabicName: 'الغاسول',
    image: '/images/hero-spa.webp',
    description:
      'A unique mineral-rich clay found exclusively in the Atlas Mountains of Morocco, ghassoul has been used for over 1,400 years as a natural cleanser and skin treatment. Rich in silica, magnesium, iron, sodium, and potassium, this rare clay absorbs impurities, tightens pores, and leaves skin remarkably smooth. It is also used as a hair wash and scalp treatment.',
    howToUse: 'Mix clay powder with warm water or rose water to form a paste. Apply as a body and hair mask for 10-15 minutes. Rinse thoroughly.',
    buyingTip: 'Buy from Berber cooperatives or reputable spice shops. Authentic ghassoul is grey-brown, never bright white. 250g costs 15-30 MAD.',
  },
  {
    name: 'Argan Oil',
    arabicName: 'زيت أركان',
    image: '/images/photo-argan-oil-stilllife.webp',
    description:
      'Called "liquid gold" by Berber women, pure argan oil is extracted from the nuts of the argan tree, which grows only in southwestern Morocco. Cosmetic argan oil (unroasted) is rich in vitamin E, essential fatty acids, and antioxidants, making it an exceptional moisturizer for skin and hair. After the hammam, argan oil is applied to nourish and protect the freshly exfoliated skin.',
    howToUse: 'Apply a few drops to damp skin immediately after the hammam rinse. Massage gently into face, body, and hair ends.',
    buyingTip: 'Buy from women cooperatives in Essaouira or Agadir for guaranteed quality. Pure cosmetic oil costs 150-250 MAD per 100ml.',
  },
  {
    name: 'Rose Water (Eau de Rose)',
    arabicName: 'ماء الورد',
    image: '/images/hero-spices.webp',
    description:
      'Distilled from Damascena roses cultivated in the Dades Valley and M Gouna region, Moroccan rose water is prized worldwide for its delicate fragrance and skin-soothing properties. In the hammam, it is used as a final rinse, toner, and body mist. Rose water tightens pores, reduces redness, and imparts a heavenly floral scent that lingers long after your visit.',
    howToUse: 'Splash onto face and body as a final rinse after ghassoul clay. Use as a daily toner by applying with cotton pads.',
    buyingTip: 'The best rose water comes from Kelaat M Gouna. Buy during the Rose Festival in May for peak quality. 250ml costs 30-60 MAD.',
  },
];

/* =====================================================================
   HAMMAM VS WESTERN SPA COMPARISON
   ===================================================================== */

const comparisonData = [
  { feature: 'Origin', hammam: 'Roman-Arab bathing traditions, 1000+ years', western: 'European thermal bath traditions' },
  { feature: 'Core Element', hammam: 'Steam, exfoliation, and ritual cleansing', western: 'Massage, aromatherapy, and relaxation' },
  { feature: 'Temperature', hammam: 'Progressively hotter wet rooms (38-50 C)', western: 'Sauna (dry heat 70-100 C) or steam room' },
  { feature: 'Exfoliation', hammam: 'Vigorous full-body gommage with kessa mitt', western: 'Gentle body scrub or peel (optional)' },
  { feature: 'Products', hammam: 'Natural: black soap, ghassoul clay, argan oil', western: 'Commercial spa product lines' },
  { feature: 'Social Aspect', hammam: 'Deeply communal and social tradition', western: 'Generally private and individual' },
  { feature: 'Duration', hammam: '90 minutes to 3 hours', western: '60-90 minutes per treatment' },
  { feature: 'Atmosphere', hammam: 'Warm marble, zellige tiles, candlelight', western: 'Minimalist, white linens, soft music' },
  { feature: 'Cost (Morocco)', hammam: '15-2000 MAD ($1.50-$200)', western: '500-3000 MAD ($50-$300)' },
  { feature: 'Frequency', hammam: 'Weekly for most Moroccans', western: 'Occasional luxury treat' },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Clock className="w-5 h-5" />, label: 'Duration', value: '1-3 hours', detail: 'Full ritual experience' },
  { icon: <Coins className="w-5 h-5" />, label: 'Public Price', value: '15-30 MAD', detail: 'About $1.50-$3' },
  { icon: <Thermometer className="w-5 h-5" />, label: 'Temperature', value: '38-50 C', detail: 'Progressive heat' },
  { icon: <Users className="w-5 h-5" />, label: 'Gender', value: 'Separated', detail: 'Separate hours/rooms' },
  { icon: <Star className="w-5 h-5" />, label: 'Best For', value: 'Skin & Wellness', detail: 'Deep cleansing ritual' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Availability', value: 'Every City', detail: '1000s across Morocco' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function HammamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Hammam &amp; Spa Guide</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-hammam.webp"
            alt="Traditional Moroccan hammam interior with ornate zellige tiles and warm steam"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Wellness &amp; Tradition
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Moroccan Hammam &amp; Spa Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Discover the ancient art of the Moroccan bathhouse. A thousand-year-old ritual of steam, exfoliation, and renewal that remains at the heart of daily life across the kingdom.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* Quick Stats */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Is a Moroccan Hammam */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What Is a Moroccan Hammam?
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Moroccan hammam is far more than a bathhouse &mdash; it is a sacred social institution that has been woven
              into the fabric of Moroccan life for over a thousand years. Derived from the Arabic word for &ldquo;spreader of
              warmth,&rdquo; the hammam combines Roman bathing traditions brought to North Africa with Islamic purification
              rituals, creating a unique wellness practice that serves body, mind, and community in equal measure.
            </p>
            <p>
              Historically, the hammam was one of the most important public buildings in any Moroccan city or village, second
              only to the mosque. In fact, hammams were traditionally built adjacent to mosques, sharing the same furnace to
              heat both buildings. The ritual ablution before prayer made the hammam an essential part of religious life, but
              its role extended far beyond spiritual cleansing. The hammam became the social hub of the neighborhood, a place
              where women gathered to share news, arrange marriages, and celebrate life milestones, and where men conducted
              informal business and strengthened communal bonds.
            </p>
            <p>
              Today, even as modern plumbing has brought hot water into Moroccan homes, the hammam remains a beloved weekly
              ritual for millions of Moroccans. The combination of intense steam, vigorous exfoliation with the kessa mitt,
              nourishing natural products like savon beldi and ghassoul clay, and the deeply social atmosphere creates an
              experience that no shower can replicate. For visitors, the hammam offers one of the most authentic and
              transformative cultural experiences available in Morocco &mdash; a chance to participate in a living tradition
              that connects the present to the very origins of Moroccan civilization.
            </p>
          </div>
        </div>
      </section>

      {/* The Traditional Hammam Experience */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Thermometer className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Traditional Hammam Experience
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Step by step through the ancient bathing ritual that has cleansed and renewed Moroccans for centuries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {ritualSteps.map((step) => (
              <div key={step.step} className="card-moroccan p-6 md:p-8 flex gap-4 md:gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm mb-2">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-[var(--color-primary)]">Step {step.step}</span>
                  <span className="text-xs text-[var(--text-muted)] mt-1">{step.duration}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Hammams */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Types of Hammams
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From neighborhood public baths to world-class luxury spas, Morocco offers hammam experiences for every budget and preference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hammamTypes.map((ht) => (
              <div key={ht.type} className="card-moroccan p-6 md:p-8 flex flex-col">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4 self-start">
                  {ht.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                  {ht.type}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag-primary text-sm font-semibold">{ht.price}</span>
                  <span className="text-xs text-[var(--text-muted)]">{ht.priceUsd}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-6 flex-1">
                  {ht.description}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border-light)]">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-green)] mb-2 uppercase tracking-wide">Pros</p>
                    <ul className="space-y-1">
                      {ht.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-[var(--color-green)] mt-0.5 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-accent)] mb-2 uppercase tracking-wide">Cons</p>
                    <ul className="space-y-1">
                      {ht.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 12 Hammams */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top 12 Hammams in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our curated selection of the finest hammam experiences across the kingdom, from authentic public baths to palatial spa retreats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topHammams.map((hammam) => (
              <div key={hammam.name} className="card-moroccan overflow-hidden flex flex-col">
                <div className="relative h-56 shrink-0">
                  <img
                    src={hammam.image}
                    alt={`${hammam.name} in ${hammam.city}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--text-primary)]">
                      {hammam.city}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/90 text-white">
                      {hammam.type}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 font-[family-name:var(--font-display)]">
                    {hammam.name}
                  </h3>
                  <p className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-1">
                    <MapPin className="w-3 h-3" /> {hammam.address}
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">{hammam.priceRange}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {hammam.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-light)]">
                    {hammam.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hammam Etiquette */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hammam Etiquette
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ten essential rules to ensure a respectful, comfortable, and authentic hammam experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {etiquetteRules.map((rule, index) => (
              <div key={rule.title} className="card-moroccan p-5 md:p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 font-[family-name:var(--font-display)]">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hammam Products Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The natural, time-tested products that power the hammam ritual. All are available in Moroccan souks and make excellent souvenirs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.name} className="card-moroccan overflow-hidden flex flex-col md:flex-row">
                <div className="relative w-full md:w-2/5 h-56 md:h-auto shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[var(--color-accent)] font-medium mb-3">{product.arabicName}</p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">How to use:</span> {product.howToUse}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Buying tip:</span> {product.buyingTip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hammam vs Western Spa */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Moroccan Hammam vs Western Spa
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding the key differences between the traditional Moroccan hammam and a typical Western spa experience.
            </p>
          </div>

          <div className="max-w-4xl mx-auto card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)] border-b border-[var(--border-light)]">Feature</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-primary)] border-b border-[var(--border-light)]">Moroccan Hammam</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-muted)] border-b border-[var(--border-light)]">Western Spa</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 1 ? 'bg-[var(--surface-muted)]/50' : ''}>
                      <td className="p-4 font-medium text-[var(--text-primary)] border-b border-[var(--border-light)]">{row.feature}</td>
                      <td className="p-4 text-[var(--text-secondary)] border-b border-[var(--border-light)]">{row.hammam}</td>
                      <td className="p-4 text-[var(--text-muted)] border-b border-[var(--border-light)]">{row.western}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for Your Hammam Experience?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our city guides to find the perfect hammam near your accommodation, or browse our spa recommendations for a luxury wellness retreat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/activities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Browse Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
