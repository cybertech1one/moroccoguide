import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  Star,
  MapPin,
  Clock,
  Coins,
  Users,
  Camera,
  Sunset,
  Mountain,
  Waves,
  Crown,
  Building2,
  ArrowRight,
  Sun,
  Sparkles,
  Shield,
  Banknote,
  BookOpen,
  Gem,
  Wine,
  Flame,
  CalendarDays,
  Utensils,
  Eye,
  Globe,
  CheckCircle,
  AlertTriangle,
  Tent,
  Compass,
  Plane,
  Phone,
  Bath,
  Lamp,
  CircleDot,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title:
    'Romantic Morocco: Couples Guide | Riads, Desert Glamping, Honeymoons & Proposal Spots',
  description:
    'Complete romantic Morocco guide for couples. Luxury riads with private plunge pools, Sahara desert glamping, hot air balloon rides, hammam for two, rooftop dining, sunset horseback rides, honeymoon itineraries, proposal spots, and cultural etiquette for couples.',
  keywords: [
    'romantic Morocco',
    'Morocco couples guide',
    'Morocco honeymoon',
    'romantic riads Morocco',
    'desert glamping Morocco',
    'Sahara luxury camp',
    'Morocco proposal spots',
    'couples hammam Morocco',
    'rooftop dinner Marrakech',
    'Essaouira horseback sunset',
    'hot air balloon Marrakech',
    'Morocco wedding anniversary',
    'La Mamounia spa',
    'Royal Mansour couples',
    'Erg Chebbi glamping',
    'Chefchaouen sunset',
    'Morocco romantic itinerary',
    'couples cooking class Morocco',
    'medina photography couples',
    'Morocco cultural etiquette couples',
  ],
  openGraph: {
    title: 'Romantic Morocco: Unforgettable Experiences for Couples - CityGuide',
    description:
      'Discover the most romantic experiences Morocco has to offer. Luxury riads, Sahara glamping, hammam rituals for two, rooftop dinners, sunset horseback rides, and honeymoon itineraries.',
    url: 'https://citytoursmorocco.com/romantic',
    images: [
      {
        url: '/images/hero-sahara-camp.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury Sahara desert camp under the stars with lanterns and cushions for a romantic evening in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romantic Morocco: Couples Guide | CityGuide',
    description:
      'Luxury riads, desert glamping, hammam for two, rooftop dinners, sunset horseback rides, and honeymoon itineraries across Morocco.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/romantic' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/romantic#guide',
      headline: 'Romantic Morocco: Unforgettable Experiences for Couples',
      description:
        'Comprehensive guide to romantic experiences in Morocco for couples, including luxury riads, desert glamping, hammam rituals, rooftop dining, honeymoon itineraries, proposal spots, and cultural etiquette.',
      url: 'https://citytoursmorocco.com/romantic',
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
          name: 'Is Morocco a good destination for couples and honeymooners?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is an exceptional romantic destination offering luxury riads with private plunge pools from 1500 MAD per night, Sahara desert glamping under the stars from 2000 MAD, world-class spa experiences for two, rooftop dining with Atlas Mountain views, and a rich cultural backdrop that creates unforgettable memories for couples.',
          },
        },
        {
          '@type': 'Question',
          name: 'What are the best romantic riads in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Top romantic riads include La Mamounia and Royal Mansour in Marrakech (from 8000 MAD/night), Riad Fes in Fes (from 2500 MAD/night), Riad Yasmine in Marrakech for its iconic pool (from 1800 MAD/night), and Dar Ahlam in Ouarzazate (from 6000 MAD/night). Many offer private plunge pools, rooftop dinners for two, and in-room hammam treatments.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can couples show affection publicly in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is a conservative Muslim country. Married couples can hold hands discreetly, but kissing, hugging, and overt displays of affection in public are culturally inappropriate and can attract unwanted attention. Unmarried couples should be especially discreet. Inside your riad or hotel, there are no restrictions. Many luxury properties cater specifically to couples and honeymooners.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a romantic trip to Morocco cost for two people?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A mid-range romantic trip for two costs approximately 2000-4000 MAD per day including a charming riad (800-1500 MAD), meals at excellent restaurants (400-800 MAD for two), activities (500-1500 MAD), and transport. Luxury experiences run 5000-15000 MAD per day at properties like Royal Mansour or La Mamounia with premium experiences.',
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   ROMANTIC RIADS DATA
   ===================================================================== */

const romanticRiads = [
  {
    name: 'Royal Mansour Marrakech',
    location: 'Marrakech Medina',
    priceRange: '8,000-50,000 MAD/night',
    description:
      'The ultimate romantic splurge in Morocco. Each three-story riad is a private palace with its own plunge pool, rooftop terrace, and hammam. The underground tunnel system means staff appear and disappear magically without disturbing your privacy. The white marble spa offers couples treatments in private suites with rose petal baths.',
    highlights: [
      'Private riad with personal plunge pool',
      'In-room hammam and spa treatments',
      'Rooftop dinner under the stars arranged on request',
      'Michelin-starred dining at La Grande Table Marocaine',
    ],
    bestFor: 'Once-in-a-lifetime honeymoons and special anniversaries',
  },
  {
    name: 'La Mamounia',
    location: 'Marrakech, Avenue Bab Jdid',
    priceRange: '5,000-35,000 MAD/night',
    description:
      'A legendary palace hotel since 1929 set within centuries-old gardens. Winston Churchill called it the most beautiful place in the world. The 2,500-square-meter spa is one of Africa\'s finest, with a traditional hammam, indoor pool, and treatment rooms designed for couples. The garden suites offer private terraces overlooking orange trees and roses.',
    highlights: [
      'Historic gardens with private dining spots',
      'World-class 2,500 sqm spa with couples hammam',
      'Multiple restaurants including Italian by Jean-Georges',
      'Heated outdoor pool with Atlas Mountain views',
    ],
    bestFor: 'Classic luxury and old-world romance',
  },
  {
    name: 'Riad Yasmine',
    location: 'Marrakech Medina',
    priceRange: '1,800-3,500 MAD/night',
    description:
      'Famous for its Instagram-worthy turquoise plunge pool surrounded by lush greenery and Moroccan tiles, Riad Yasmine is the boutique romantic escape that put Marrakech riads on the social media map. Intimate with only seven rooms, each decorated in a unique Moroccan-bohemian style. The rooftop terrace offers candlelit dinners with medina views.',
    highlights: [
      'Iconic turquoise plunge pool courtyard',
      'Only seven rooms for ultimate intimacy',
      'Rooftop candlelit dinner for two on request',
      'Central medina location near Jemaa el-Fnaa',
    ],
    bestFor: 'Boutique romance and Instagram-worthy stays',
  },
  {
    name: 'Riad Fes',
    location: 'Fes Medina',
    priceRange: '2,500-6,000 MAD/night',
    description:
      'A Relais and Chateaux property set in a meticulously restored 17th-century palace in the heart of the Fes medina. The rooftop restaurant offers panoramic views over the ancient city while you dine on refined Fassi cuisine. The spa features a traditional hammam with private couples suites and treatments using local rose water and argan oil.',
    highlights: [
      'Relais and Chateaux quality in a 17th-century palace',
      'Panoramic rooftop dining over the Fes medina',
      'Private couples hammam and spa suites',
      'Cooking classes with the palace chef',
    ],
    bestFor: 'Cultural immersion with refined luxury',
  },
  {
    name: 'Dar Ahlam',
    location: 'Skoura, near Ouarzazate',
    priceRange: '6,000-15,000 MAD/night',
    description:
      'A restored kasbah turned into an all-inclusive house of dreams where there are no menus, no set schedules, and no other guests in sight. Each day, the staff curates surprise experiences: a table set for two in the palm grove, a rooftop breakfast as the sun rises over the Atlas, or a private picnic by the river. With only fourteen suites and a no-children policy, it is built for romantic escape.',
    highlights: [
      'All-inclusive with no menus or schedules',
      'Surprise dining locations throughout the property',
      'Private excursions into the Sahara and Atlas',
      'Adults-only policy with only fourteen suites',
    ],
    bestFor: 'Adventurous couples seeking total surprise and privacy',
  },
  {
    name: 'Riad 72',
    location: 'Marrakech Medina',
    priceRange: '1,500-3,000 MAD/night',
    description:
      'An Italian-designed boutique riad with just four suites, each named after a spice and decorated in a refined contemporary Moroccan style. The black-tiled plunge pool courtyard is atmospheric and intimate. Known for outstanding breakfasts served on the rooftop with views of the Koutoubia minaret, and the staff arrange private dinners, hammam experiences, and city tours.',
    highlights: [
      'Only four suites for extreme privacy',
      'Italian-designed contemporary Moroccan interiors',
      'Rooftop breakfast with Koutoubia views',
      'Staff arrange bespoke romantic experiences',
    ],
    bestFor: 'Design-conscious couples wanting privacy',
  },
];

/* =====================================================================
   DESERT GLAMPING CAMPS
   ===================================================================== */

const desertCamps = [
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert, 40 min from Marrakech',
    priceRange: '2,000-4,500 MAD/night',
    description:
      'A designer desert camp in the rocky Agafay Desert within easy reach of Marrakech. Each tent is individually styled with vintage furniture, handwoven textiles, and proper beds with quality linens. No electricity by design: everything runs on candlelight and lanterns. The communal fire pit under a canopy of stars is unforgettable. Sundowner cocktails and multi-course dinners included.',
    highlights: [
      'Candlelit luxury tents with no electricity',
      'Sundowner cocktails with Atlas Mountain views',
      'Multi-course dinner by firelight',
      'Only 40 minutes from Marrakech',
    ],
    terrain: 'Rocky desert with Atlas Mountain backdrop',
  },
  {
    name: 'Erg Chigaga Luxury Desert Camp',
    location: 'Erg Chigaga, deep Sahara',
    priceRange: '3,000-5,000 MAD/night',
    description:
      'The most remote luxury camp in Morocco, located deep in the Sahara at the vast Erg Chigaga dunes. Getting here requires a 90-minute off-road drive from M\'hamid, which adds to the sense of total escape. Berber-style tents with en-suite bathrooms, hot showers, and king-size beds face the endless dunes. At night, the Milky Way is so vivid it feels close enough to touch.',
    highlights: [
      'Most remote luxury camp in Morocco',
      'En-suite tents with hot showers facing the dunes',
      'Unrivaled stargazing with zero light pollution',
      'Camel rides and sandboarding included',
    ],
    terrain: 'Vast golden sand dunes, pristine and untouched',
  },
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi, near Merzouga',
    priceRange: '2,000-4,000 MAD/night',
    description:
      'Set at the base of the towering Erg Chebbi dunes, this camp offers the classic Sahara glamping experience with comfortable access. Heated tents with private bathrooms, handcrafted furniture, and Berber carpets. The evening program includes a sunset camel ride to the camp, live Gnawa music around the fire, and a traditional Berber dinner under a sky thick with stars.',
    highlights: [
      'Sunset camel ride to reach the camp',
      'Live Gnawa music by the campfire',
      'Heated tents with private bathrooms',
      'Sunrise from the top of Erg Chebbi dunes',
    ],
    terrain: 'Iconic orange sand dunes rising 150 meters',
  },
  {
    name: 'Inara Camp',
    location: 'Agafay Desert, near Marrakech',
    priceRange: '2,500-5,000 MAD/night',
    description:
      'A premium Agafay camp with air-conditioned tents, each featuring a private terrace and outdoor shower. The infinity pool overlooking the desert landscape and distant Atlas peaks is the highlight, making it possible to combine desert romance with poolside luxury. Multi-course candlelit dinners, ATV excursions, and camel rides are all part of the experience.',
    highlights: [
      'Infinity pool with Atlas Mountain panorama',
      'Air-conditioned tents with private terraces',
      'Outdoor showers with desert views',
      'ATV excursions and camel rides',
    ],
    terrain: 'Agafay stone desert with mountain views',
  },
];

/* =====================================================================
   ROMANTIC EXPERIENCES
   ===================================================================== */

const romanticExperiences = [
  {
    title: 'Hot Air Balloon Sunrise for Two',
    location: 'Marrakech (Agafay Desert or Palm Grove)',
    price: '1,500-2,500 MAD per person',
    duration: '3-4 hours (including setup and breakfast)',
    description:
      'Float above the Moroccan landscape as the sun rises over the Atlas Mountains, painting the desert and palm groves in gold and pink. Most operators launch from the Agafay Desert or the Palmeraie at dawn. After landing, a traditional Berber breakfast with mint tea, fresh bread, honey, and amlou is served in the desert. Some operators offer a private balloon for couples at a premium of 8,000-12,000 MAD total.',
    tips: [
      'Book at least 3 days in advance during peak season (October to April)',
      'Flights depend on wind conditions and may be rescheduled',
      'Wear layers as mornings are cold but warm quickly after sunrise',
      'A private balloon costs more but is worth it for proposals',
      'Operators like Ciel d\'Afrique and Marrakech By Air are reputable',
    ],
    bestSeason: 'October through April for clear skies and mild winds',
  },
  {
    title: 'Private Cooking Class for Couples',
    location: 'Marrakech, Fes, or Essaouira',
    price: '500-1,200 MAD per person',
    duration: '4-5 hours including market visit',
    description:
      'Begin with a guided visit to the local souk to select fresh ingredients: preserved lemons, saffron, cumin, fresh herbs, seasonal vegetables, and meat or fish. Return to a traditional riad kitchen or rooftop cooking studio where a Moroccan chef guides you through preparing a full meal: Moroccan salads, a tagine, couscous, and pastilla. Finish by sitting down together to enjoy everything you have made, often on a beautiful rooftop terrace.',
    tips: [
      'La Maison Arabe in Marrakech is the gold standard (1,000 MAD per person)',
      'Amal Centre in Marrakech is affordable and supports women (400 MAD)',
      'Clock Cafe in Fes offers excellent cooking workshops (600 MAD)',
      'Ask for a private session if you want just the two of you',
      'Vegetarian and vegan options are readily available',
    ],
    bestSeason: 'Year-round, though spring brings the best produce',
  },
  {
    title: 'Essaouira Beach Sunset Horseback Ride',
    location: 'Essaouira Atlantic Beach',
    price: '400-800 MAD per person',
    duration: '1.5-2.5 hours',
    description:
      'Ride along the vast, windswept Atlantic beach of Essaouira as the sun sinks into the ocean. The wide, flat sand allows for everything from a gentle walk to a full gallop along the waterline. Some operators ride through the ruins of the Borj el-Berod, a crumbling Portuguese watchtower that inspired Jimi Hendrix. The golden hour light on the Atlantic coast is among the most beautiful in Morocco.',
    tips: [
      'Ranch de Diabat and Equi Evasion are well-regarded stables',
      'Indicate your experience level honestly for proper horse matching',
      'The beach south of town toward Diabat offers the most scenic route',
      'Sunset timing shifts seasonally: confirm departure time day of',
      'Combine with fresh seafood dinner at the port afterward',
    ],
    bestSeason: 'Year-round, though summer evenings are longest and warmest',
  },
  {
    title: 'Medina Photography Session',
    location: 'Marrakech, Fes, or Chefchaouen',
    price: '1,500-3,500 MAD for 1-2 hours',
    duration: '1-2 hours',
    description:
      'Hire a local professional photographer to capture your couple moments against the stunning backdrops of a Moroccan medina. In Marrakech, shoot among the jewel-toned souks and palace doorways. In Fes, use the medieval tanneries and ornate medersa facades as backdrops. In Chefchaouen, the blue-washed walls provide an instantly iconic setting. Most photographers deliver 50-100 edited digital images within a week.',
    tips: [
      'Book early morning sessions (7-9 AM) to avoid crowds and get golden light',
      'Chefchaouen is the most photogenic for couples with its blue streets',
      'Ask your photographer about including rooftop and riad interior shots',
      'Wearing warm-toned clothing contrasts beautifully with blue walls',
      'Tip your photographer 100-200 MAD if you are happy with the session',
    ],
    bestSeason: 'October to April for soft light and manageable temperatures',
  },
];

/* =====================================================================
   HAMMAM & SPA FOR TWO
   ===================================================================== */

const couplesSpaExperiences = [
  {
    name: 'La Mamounia Spa',
    location: 'Marrakech',
    priceRange: '2,000-5,000 MAD per couple',
    description:
      'The 2,500-square-meter spa at La Mamounia is a temple of Moroccan wellness. The couples hammam ritual begins in a private marble steam room where attendants apply black soap and perform the traditional gommage scrub on both of you simultaneously. This is followed by a ghassoul clay body mask, a rose water rinse, and a full-body argan oil massage for two in a private treatment room overlooking the gardens.',
    duration: '2-3 hours',
    includes: 'Hammam, gommage, ghassoul mask, argan massage, mint tea',
  },
  {
    name: 'Royal Mansour Spa',
    location: 'Marrakech',
    priceRange: '2,500-8,000 MAD per couple',
    description:
      'The Royal Mansour spa descends below ground into a vast white marble sanctuary. Each couple gets a private treatment suite with its own hammam, relaxation area, and terrace. The signature couples ritual lasts three hours and includes a hammam ceremony with orange blossom soap, a full-body exfoliation, a warm argan oil wrap, a deep-tissue massage, and a facial using local botanical ingredients.',
    duration: '2.5-4 hours',
    includes: 'Private suite hammam, exfoliation, argan wrap, massage, facial, tea ceremony',
  },
  {
    name: 'Heritage Spa',
    location: 'Marrakech Medina',
    priceRange: '800-1,800 MAD per couple',
    description:
      'An excellent mid-range option in the heart of the medina. Heritage Spa occupies a beautifully restored riad with zellige-tiled hammam chambers. The couples package includes a private hammam session with savon beldi and kessa scrub, followed by a 60-minute massage for two in a candlelit room. Far more affordable than the palace hotels but with genuine quality and atmosphere.',
    duration: '1.5-2.5 hours',
    includes: 'Private hammam, savon beldi scrub, kessa exfoliation, couples massage',
  },
  {
    name: 'Lina Ryad and Spa',
    location: 'Chefchaouen',
    priceRange: '600-1,200 MAD per couple',
    description:
      'A serene spa experience in the blue city. Lina Ryad offers couples hammam rituals in an intimate setting with hand-cut zellige tiles and Rif Mountain views from the relaxation terrace. The treatments use locally produced olive oil soap and essential oils from the surrounding cedar forests. A beautiful option for couples visiting the north.',
    duration: '1.5-2 hours',
    includes: 'Hammam, olive oil soap scrub, essential oil massage, herbal tea',
  },
  {
    name: 'Sofitel Essaouira Mogador Spa',
    location: 'Essaouira',
    priceRange: '1,200-3,000 MAD per couple',
    description:
      'A coastal thalassotherapy spa using heated seawater and marine algae combined with traditional Moroccan hammam techniques. The couples ocean ritual includes a seawater hammam, a marine algae body wrap, an argan oil massage, and relaxation in the heated seawater pool overlooking the Atlantic. The combination of ocean wellness and Moroccan tradition is unique to the coast.',
    duration: '2-3 hours',
    includes: 'Seawater hammam, algae wrap, argan massage, pool access',
  },
];

/* =====================================================================
   ROOFTOP RESTAURANTS FOR COUPLES
   ===================================================================== */

const rooftopRestaurants = [
  {
    name: 'Le Jardin',
    location: 'Marrakech Medina',
    cuisine: 'Moroccan-Mediterranean fusion',
    priceRange: '200-500 MAD per person',
    description:
      'Hidden behind an unmarked door in the medina, Le Jardin is a lush, plant-filled oasis with a beautiful garden restaurant and an intimate rooftop terrace. The menu blends Moroccan and Mediterranean flavors with dishes like lamb tagine with prunes and almonds, fresh salads, and orange blossom crme brle. The rooftop is candle-lit at night and quieter than many competitors.',
    reservationTip: 'Book the rooftop terrace specifically and request a corner table for two',
  },
  {
    name: 'Nomad',
    location: 'Marrakech Medina, near Place des Epices',
    cuisine: 'Modern Moroccan',
    priceRange: '150-400 MAD per person',
    description:
      'A contemporary Moroccan restaurant with a stunning multi-level rooftop terrace overlooking the medina. Nomad reimagines traditional dishes with modern techniques: think lamb burger with cumin and harissa, cauliflower with chermoula, and spiced beef kefta. The top terrace has unobstructed views toward the Koutoubia and Atlas Mountains, and the vibe is stylish without being pretentious.',
    reservationTip: 'Ask for the top terrace level for the best sunset views',
  },
  {
    name: 'Cafe Arabe',
    location: 'Marrakech Medina, near Mouassine Fountain',
    cuisine: 'Moroccan and Italian',
    priceRange: '200-450 MAD per person',
    description:
      'One of the original medina rooftop restaurants, Cafe Arabe occupies a grand riad with multiple dining levels. The rooftop offers panoramic medina views and is particularly magical at sunset when the call to prayer echoes from surrounding mosques. The kitchen serves both excellent Moroccan tagines and well-executed Italian pasta and risotto, reflecting the Italian owner\'s heritage.',
    reservationTip: 'Visit at sunset for the call to prayer experience, book ahead in winter',
  },
  {
    name: 'Ruined Garden',
    location: 'Fes Medina',
    cuisine: 'Moroccan-European',
    priceRange: '150-350 MAD per person',
    description:
      'A restaurant built in the ruins of a centuries-old riad in the Fes medina, with trees growing through the open roof and fairy lights strung across the crumbling walls. The menu changes daily based on what is fresh at the market. The atmosphere is unlike anything else in Morocco: romantic, mysterious, and slightly wild. Intimate seating for about thirty diners maximum.',
    reservationTip: 'Book by phone or WhatsApp, no online system. Ask for garden-level seating.',
  },
  {
    name: 'La Sqala',
    location: 'Casablanca, Boulevard des Almohades',
    cuisine: 'Traditional Moroccan',
    priceRange: '150-350 MAD per person',
    description:
      'Set within an 18th-century Portuguese fortification, La Sqala has a garden courtyard shaded by bougainvillea and jasmine. It is Casablanca\'s most romantic restaurant, far removed from the city\'s busy streets. The Moroccan breakfast is legendary, but the candlelit dinner service with tagines, grilled fish, and pastilla is ideal for couples.',
    reservationTip: 'The garden courtyard is preferable to the interior for ambiance',
  },
  {
    name: 'Cafe Hafa',
    location: 'Tangier, overlooking the Strait of Gibraltar',
    cuisine: 'Simple Moroccan (mint tea and snacks)',
    priceRange: '30-80 MAD per person',
    description:
      'Not a fine dining destination but one of the most romantic settings in Morocco. This terraced cliff-side cafe has served mint tea since 1921, with views across the Strait of Gibraltar to Spain. The Rolling Stones, Paul Bowles, and the Beats all came here. Order mint tea and fresh pastries, and watch the sun set over two continents. Simple, authentic, and magical.',
    reservationTip: 'No reservations. Arrive 30 minutes before sunset for a good terrace seat.',
  },
];

/* =====================================================================
   SUNSET SPOTS FOR COUPLES
   ===================================================================== */

const sunsetSpots = [
  {
    name: 'Spanish Mosque',
    location: 'Chefchaouen',
    description:
      'A 20-minute uphill hike from the medina leads to this abandoned mosque on a hilltop with a panoramic view of the entire blue city nestled in the Rif Mountains. As the sun sets, the blue-washed buildings glow golden and then violet. Bring a blanket and mint tea in a thermos. This is widely considered the single most romantic sunset viewpoint in Morocco.',
    accessInfo: 'Free. 20-minute walk from the medina. Wear comfortable shoes for the rocky path.',
    bestTime: '45 minutes before sunset for the best light progression',
  },
  {
    name: 'Cafe Hafa Terraces',
    location: 'Tangier',
    description:
      'Cascading terraces cut into the cliff overlooking the Strait of Gibraltar. On clear evenings, you can see the Spanish coast while the sun drops into the Atlantic. The cafe has served mint tea since 1921 and has barely changed. The combination of sea spray, the call to prayer from nearby mosques, and the fading light creates an atmosphere that is quintessentially Tangier.',
    accessInfo: 'Mint tea costs 15-20 MAD. Open daily until sunset. Arrive early for front row.',
    bestTime: 'Sunset, particularly in spring and autumn when the light is warmest',
  },
  {
    name: 'Kasbah of the Udayas',
    location: 'Rabat',
    description:
      'A 12th-century fortress perched above the mouth of the Bou Regreg river where it meets the Atlantic. The Andalusian gardens within the kasbah walls are beautifully maintained, and the ramparts offer views over the ocean, the river, and the city of Sal across the water. The blue-and-white painted streets within the kasbah add to the romance.',
    accessInfo: 'Free entry. The gardens and ramparts are open until sunset.',
    bestTime: 'Golden hour when the white and blue walls glow in warm light',
  },
  {
    name: 'Jemaa el-Fnaa from a Rooftop',
    location: 'Marrakech',
    description:
      'Watching the famous square transform at sunset from a medina rooftop terrace is a quintessential Marrakech experience. As the light fades, the food stalls fire up, the musicians begin playing, and the square fills with energy. Cafe de France and Le Grand Balcon du Cafe Glacier offer the classic viewpoints, though many riad rooftops offer more private alternatives.',
    accessInfo: 'Rooftop cafes require ordering food or drinks. Budget 50-150 MAD per person.',
    bestTime: 'Arrive 30 minutes before sunset to secure a good spot',
  },
  {
    name: 'Cap Spartel',
    location: 'Tangier, 14 km west of the city',
    description:
      'The northwestern tip of Africa where the Atlantic Ocean meets the Mediterranean Sea. A 19th-century lighthouse marks the point, and the surrounding cliffs offer dramatic views of the converging waters. It is a powerful place to watch the sun set over the Atlantic from the very edge of the African continent.',
    accessInfo: 'Free to visit the viewpoint. A taxi from Tangier costs about 100-150 MAD one way.',
    bestTime: 'Late afternoon to watch the light change over both bodies of water',
  },
  {
    name: 'Ait Benhaddou at Golden Hour',
    location: 'Near Ouarzazate',
    description:
      'This UNESCO World Heritage kasbah is one of the most photographed sites in Morocco and has appeared in Gladiator, Game of Thrones, and Lawrence of Arabia. At golden hour, the mud-brick towers glow amber against the darkening sky. Cross the shallow river on foot and climb to the top of the ksar for a private moment overlooking the valley below.',
    accessInfo: 'No entrance fee to the ksar itself. Local guides available for 50-100 MAD.',
    bestTime: 'The last hour before sunset when the walls turn deep gold',
  },
];

/* =====================================================================
   HONEYMOON ITINERARIES
   ===================================================================== */

const sevenDayItinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    description:
      'Arrive at Menara Airport and transfer to your riad in the medina. Spend the afternoon recovering from travel by the plunge pool. In the evening, explore the Jemaa el-Fnaa square as it comes alive and have your first rooftop dinner at Le Jardin or Nomad.',
    accommodation: 'Riad Yasmine or Riad 72 (1,500-3,500 MAD)',
    highlights: 'Jemaa el-Fnaa at night, first rooftop dinner',
  },
  {
    day: 2,
    title: 'Marrakech: Palace, Souks, and Spa',
    description:
      'Morning visit to Bahia Palace and the Saadian Tombs. Spend the midday hours browsing the souks for treasures: leather goods, ceramics, textiles. Afternoon couples hammam at Heritage Spa or La Mamounia. Evening dinner at Cafe Arabe with medina views.',
    accommodation: 'Same riad',
    highlights: 'Bahia Palace, souk shopping, couples hammam',
  },
  {
    day: 3,
    title: 'Hot Air Balloon and Majorelle Gardens',
    description:
      'Pre-dawn pickup for a hot air balloon sunrise over the desert or palm grove. Return for a late breakfast at your riad. Afternoon visit to the Jardin Majorelle and the Yves Saint Laurent Museum. Evening at leisure or a private cooking class.',
    accommodation: 'Same riad',
    highlights: 'Hot air balloon sunrise, Majorelle Gardens',
  },
  {
    day: 4,
    title: 'Drive to the Sahara via the Atlas',
    description:
      'Depart early for the Sahara via the Tizi n\'Tichka pass over the High Atlas. Stop at Ait Benhaddou for golden hour photos at the UNESCO kasbah. Continue through the Valley of Roses and the Dades Gorge. Arrive at your Sahara camp in time for a sunset camel ride into Erg Chebbi.',
    accommodation: 'Merzouga Luxury Desert Camp (2,000-4,000 MAD)',
    highlights: 'Atlas Mountains drive, Ait Benhaddou, sunset camel ride',
  },
  {
    day: 5,
    title: 'Sahara Desert Day',
    description:
      'Wake before dawn to climb the dunes and watch the sunrise together over the sea of sand. Return to camp for breakfast. Spend the day relaxing at camp, sandboarding, or visiting a nearby nomad family. Evening Berber dinner with live Gnawa music under the stars.',
    accommodation: 'Same desert camp',
    highlights: 'Dune sunrise, stargazing, Gnawa music dinner',
  },
  {
    day: 6,
    title: 'Return to Marrakech via Ouarzazate',
    description:
      'Drive back toward Marrakech with a stop in Ouarzazate to visit the Atlas Studios where Hollywood blockbusters are filmed. Alternatively, if time allows, detour through the Todra Gorge for its dramatic canyon walls. Arrive in Marrakech by evening for a farewell dinner.',
    accommodation: 'Luxury upgrade: La Mamounia or Royal Mansour for the final night',
    highlights: 'Atlas Studios, final night luxury splurge',
  },
  {
    day: 7,
    title: 'Departure Day',
    description:
      'Final morning in Marrakech. If time allows, visit the Mellah (Jewish Quarter) and the spice market for last-minute gifts: argan oil, saffron, rose water, and Moroccan ceramics. Transfer to the airport with unforgettable memories.',
    accommodation: 'Departure',
    highlights: 'Last-minute shopping, spice market souvenirs',
  },
];

const tenDayItinerary = [
  {
    day: 1,
    title: 'Arrive in Casablanca',
    description:
      'Arrive at Mohammed V Airport. Visit the Hassan II Mosque, the third largest in the world, with its stunning oceanfront setting. Transfer to La Sqala for a romantic dinner in the fortress garden. Overnight in Casablanca or take the evening train to Rabat.',
    accommodation: 'Four Seasons Casablanca or train to Rabat (hotel 2,000-6,000 MAD)',
    highlights: 'Hassan II Mosque, La Sqala dinner',
  },
  {
    day: 2,
    title: 'Rabat: Gardens and Kasbah',
    description:
      'Explore the Kasbah of the Udayas with its Andalusian gardens and ocean views. Visit the Chellah necropolis where storks nest in Roman ruins. Afternoon free to stroll the tree-lined boulevards and waterfront. Sunset from the kasbah ramparts overlooking the Bou Regreg.',
    accommodation: 'Riad Dar El Kebira, Rabat (800-1,500 MAD)',
    highlights: 'Kasbah Udayas sunset, Chellah ruins',
  },
  {
    day: 3,
    title: 'Fes: The Ancient Medina',
    description:
      'Morning train to Fes. Check into Riad Fes. Spend the afternoon with a local guide exploring the world\'s largest car-free urban area: the Fes el-Bali medina. Visit the Bou Inania Medersa, the tanneries, and the Nejjarine fountain. Dinner at the Ruined Garden.',
    accommodation: 'Riad Fes (2,500-6,000 MAD)',
    highlights: 'Fes medina exploration, Ruined Garden dinner',
  },
  {
    day: 4,
    title: 'Fes: Cooking Class and Spa',
    description:
      'Morning couples cooking class at the Clock Cafe, beginning with a market tour. Prepare a full Fassi meal together. Afternoon at the Riad Fes spa for a couples hammam. Evening free to revisit favorite medina spots or enjoy a rooftop sunset.',
    accommodation: 'Same riad',
    highlights: 'Cooking class, couples hammam at Riad Fes',
  },
  {
    day: 5,
    title: 'Chefchaouen: The Blue City',
    description:
      'Drive to Chefchaouen through the Rif Mountains. Arrive in the blue medina and spend the afternoon wandering the photogenic blue-washed streets. Hire a photographer for a couples photo session. Hike to the Spanish Mosque for sunset over the blue city.',
    accommodation: 'Lina Ryad and Spa (600-1,200 MAD)',
    highlights: 'Blue medina, couples photo session, Spanish Mosque sunset',
  },
  {
    day: 6,
    title: 'Chefchaouen to Marrakech',
    description:
      'Morning spa treatment at Lina Ryad. Drive or fly to Marrakech (flights available via Tangier or direct shared transfers). Afternoon arrival and check-in. Evening exploration of the Jemaa el-Fnaa and dinner at Nomad.',
    accommodation: 'Riad Yasmine (1,800-3,500 MAD)',
    highlights: 'Morning spa, evening in Jemaa el-Fnaa',
  },
  {
    day: 7,
    title: 'Marrakech: Palaces, Gardens, and Souks',
    description:
      'Morning hot air balloon sunrise (optional, pre-dawn). Visit Bahia Palace, Ben Youssef Medersa, and the Secret Garden. Afternoon souk shopping. Couples hammam at Heritage Spa. Rooftop dinner at Cafe Arabe.',
    accommodation: 'Same riad',
    highlights: 'Palace visits, souk shopping, couples hammam',
  },
  {
    day: 8,
    title: 'Drive to the Sahara',
    description:
      'Cross the High Atlas via Tizi n\'Tichka. Stop at Ait Benhaddou for photos. Continue through the Dades Valley to the Sahara. Arrive for a sunset camel ride into Erg Chebbi, where your luxury camp awaits with a candlelit Berber dinner.',
    accommodation: 'Merzouga Luxury Desert Camp (2,000-4,000 MAD)',
    highlights: 'Atlas crossing, Ait Benhaddou, sunset camel ride',
  },
  {
    day: 9,
    title: 'Sahara and Return',
    description:
      'Sunrise from the top of the dunes. Breakfast at camp. Begin the drive back toward Marrakech, stopping at Skoura\'s palm oasis and the Ouarzazate film studios if desired. Arrive in Marrakech by evening for a special farewell dinner at a fine-dining restaurant.',
    accommodation: 'La Mamounia or Royal Mansour for the final night (splurge)',
    highlights: 'Dune sunrise, farewell luxury dinner',
  },
  {
    day: 10,
    title: 'Departure',
    description:
      'Enjoy a leisurely breakfast at your luxury hotel. Final morning in the Majorelle Gardens or the spice souks. Transfer to Menara Airport. Depart Morocco with a lifetime of romantic memories and probably too many jars of argan oil.',
    accommodation: 'Departure',
    highlights: 'Luxury breakfast, final souvenir shopping',
  },
];

/* =====================================================================
   PROPOSAL SPOTS
   ===================================================================== */

const proposalSpots = [
  {
    name: 'Private Rooftop Dinner at Your Riad',
    location: 'Marrakech, Fes, or Chefchaouen',
    description:
      'Many riads will arrange a private rooftop dinner for two with candles, rose petals, and a special menu. This is the most reliable proposal setting because you control every variable: timing, privacy, and atmosphere. Ask the riad staff to help plan the setup. Some will arrange live oud or Gnawa music. Budget 1,500-4,000 MAD for the full private dinner experience including wine.',
    difficulty: 'Easy to arrange, very private',
    cost: '1,500-4,000 MAD',
  },
  {
    name: 'Top of the Erg Chebbi Dunes at Sunrise',
    location: 'Sahara Desert, Merzouga',
    description:
      'Climb the highest dune before dawn and propose as the first light breaks over the endless Sahara. The vast silence, the shifting colors of the sand, and the feeling of being completely alone at the edge of the world create a proposal moment unlike any other. Coordinate with your desert camp to have champagne and breakfast waiting on the dune.',
    difficulty: 'Moderate (requires early wake-up and dune climb)',
    cost: '2,000-4,000 MAD (camp stay, can include champagne setup)',
  },
  {
    name: 'Spanish Mosque Overlook',
    location: 'Chefchaouen',
    description:
      'The hilltop view of the entire blue city with the Rif Mountains behind it is breathtaking. Time your hike to arrive 30-40 minutes before sunset when the blue walls begin to glow. The spot is public so there may be other visitors, but you can find a private corner. Bring a picnic with Moroccan pastries and mint tea for a sweet, simple proposal.',
    difficulty: 'Easy (20-minute hike)',
    cost: 'Free (bring your own picnic)',
  },
  {
    name: 'Hot Air Balloon Over Marrakech',
    location: 'Marrakech',
    description:
      'Book a private hot air balloon for just the two of you (plus the pilot). Propose in the basket as the sun rises over the Atlas Mountains with the desert and palm groves spread below. The pilot will keep the balloon stable and give you space. Most operators are experienced with proposals and will coordinate photography from the chase vehicle.',
    difficulty: 'Moderate (requires advance booking and weather cooperation)',
    cost: '8,000-12,000 MAD for a private balloon',
  },
  {
    name: 'Jardin Majorelle',
    location: 'Marrakech',
    description:
      'The iconic cobalt blue garden designed by Jacques Majorelle and later owned by Yves Saint Laurent. The combination of electric blue walls, towering bamboo, cacti, and lily ponds creates a vivid, intimate setting. The garden is busiest between 10 AM and 4 PM, so time your visit for opening (8 AM) or the last hour before closing for relative quiet.',
    difficulty: 'Easy, but timing is important to avoid crowds',
    cost: '70 MAD entrance plus optional photography permit',
  },
  {
    name: 'Dar Ahlam Surprise Dinner',
    location: 'Skoura, near Ouarzazate',
    description:
      'At Dar Ahlam, the staff will set up a private dinner table anywhere on the property or in the surrounding palm grove without telling your partner where dinner will be. You are led through lantern-lit paths to discover a table for two in an unexpected, magical setting. Coordinate with the hotel in advance to have the ring presented with dessert.',
    difficulty: 'Easy (the hotel handles everything)',
    cost: '6,000-15,000 MAD (included in the all-inclusive stay)',
  },
];

/* =====================================================================
   CULTURAL ETIQUETTE FOR COUPLES
   ===================================================================== */

const couplesEtiquette = [
  {
    title: 'Public Displays of Affection',
    description:
      'Morocco is a conservative Muslim country. While married couples can hold hands discreetly in tourist areas, kissing, embracing, and overt physical affection in public are culturally inappropriate and may attract negative attention or even official reprimand. Save intimate moments for your riad, hotel, or private spaces.',
    importance: 'critical',
  },
  {
    title: 'Unmarried Couples Sharing Rooms',
    description:
      'Technically, Moroccan law prohibits unmarried couples from sharing a hotel room. In practice, tourist-oriented riads and hotels in Marrakech, Fes, Essaouira, and other cities routinely accommodate international couples without question. You are unlikely to be asked for a marriage certificate, but it is worth knowing the legal context. Mid-range and luxury properties catering to tourists will not cause any issues.',
    importance: 'important',
  },
  {
    title: 'Dress Code',
    description:
      'Outside of beach resorts and hotel pools, both men and women should dress modestly. For women, this means covering shoulders and knees in the medina and public areas. Avoid low-cut tops and very short skirts. Men should wear shirts in public, not just tank tops. At your riad or resort, you can dress however you like. Packing a light scarf is always a good idea for women.',
    importance: 'important',
  },
  {
    title: 'Photography Etiquette',
    description:
      'Always ask permission before photographing Moroccan people, especially women. Many locals do not want to be in your couple photos and may react negatively if you include them without consent. At medina viewpoints and scenic spots, you can photograph freely. If someone helps you take a photo, a small tip of 5-10 MAD is customary.',
    importance: 'important',
  },
  {
    title: 'Alcohol Consumption',
    description:
      'Alcohol is legal in Morocco and available at licensed restaurants, hotels, and bars. However, public drunkenness is frowned upon and illegal. Enjoy wine with dinner at your restaurant or drinks at your hotel bar, but do not carry open bottles or drink in public spaces, parks, or near mosques. Many Moroccan restaurants outside tourist zones do not serve alcohol.',
    importance: 'moderate',
  },
  {
    title: 'LGBTQ+ Couples',
    description:
      'Same-sex relationships are illegal in Morocco under Article 489 of the penal code and are not socially accepted. LGBTQ+ couples should exercise significant discretion and avoid any public displays of affection. Most riads and hotels will accommodate two guests in a double room without issue, as staff are accustomed to international guests. Major cities like Marrakech are generally more tolerant than rural areas, but caution is strongly advised throughout the country.',
    importance: 'critical',
  },
  {
    title: 'Ramadan Considerations',
    description:
      'During the holy month of Ramadan, most Moroccans fast from dawn to sunset. While tourists are not expected to fast, eating, drinking, and smoking in public during fasting hours is considered disrespectful. Tourist restaurants and hotels will serve you normally, but street food and many local restaurants close during the day. The evening iftar (breaking of the fast) is a beautiful cultural experience to share as a couple.',
    importance: 'important',
  },
  {
    title: 'Interacting with Locals',
    description:
      'Moroccans are famously hospitable and may invite you for tea. Accept graciously when possible as this is a genuine gesture of welcome. When speaking to local men, the male partner should take the lead in conversation. Women traveling with a male partner receive noticeably less harassment in the medina. Always greet people with a warm salaam alaikum (peace be upon you).',
    importance: 'moderate',
  },
];

/* =====================================================================
   RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    title: 'Morocco Honeymoon Guide',
    description:
      'Dedicated honeymoon planning with extended itineraries, luxury accommodations, and special honeymoon packages.',
    href: '/honeymoon',
    icon: <Heart className="w-5 h-5" />,
  },
  {
    title: 'Luxury Morocco Travel',
    description:
      'Palace hotels, private tours, haute cuisine, and the finest experiences Morocco offers.',
    href: '/luxury',
    icon: <Crown className="w-5 h-5" />,
  },
  {
    title: 'Spa and Wellness Guide',
    description:
      'In-depth guide to hammam traditions, argan oil treatments, thalassotherapy, and desert wellness retreats.',
    href: '/spa',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: 'Desert Adventures',
    description:
      'Comprehensive Sahara guide including luxury camps, camel treks, sandboarding, and stargazing.',
    href: '/desert-adventures',
    icon: <Sun className="w-5 h-5" />,
  },
  {
    title: 'Moroccan Cuisine Guide',
    description:
      'Tagines, couscous, pastilla, street food, cooking classes, and the best restaurants in every city.',
    href: '/cuisine',
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    title: 'Morocco Photography Guide',
    description:
      'Best locations, lighting tips, cultural photography etiquette, and gear recommendations.',
    href: '/photography',
    icon: <Camera className="w-5 h-5" />,
  },
];

/* =====================================================================
   JSON-LD COMPONENT
   ===================================================================== */

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/* =====================================================================
   PAGE COMPONENT (Server)
   ===================================================================== */

export default function RomanticPage() {
  return (
    <>
      <JsonLd />

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-sahara-camp.webp"
            alt="Luxury Sahara desert camp with lanterns and cushions under the stars for a romantic couples experience in Morocco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Romantic Morocco</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              For Couples, Honeymooners &amp; Romantics
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Romantic Morocco: Unforgettable Experiences for Couples
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From candlelit riads and Sahara glamping under a billion stars to
              hammam rituals for two and rooftop dinners above ancient medinas,
              Morocco is one of the most romantic destinations on Earth. This is
              your complete guide to experiencing it together.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* =====================================================================
         1. ROMANTIC RIADS & LUXURY STAYS
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Romantic Riads &amp; Luxury Stays
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s traditional riads &mdash; inward-facing courtyard
              homes &mdash; are inherently romantic. Behind unmarked doors in
              ancient medinas lie private worlds of plunge pools, rose-petal
              baths, rooftop terraces, and candlelit courtyards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {romanticRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {riad.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{riad.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    <Banknote className="w-3.5 h-3.5" />
                    {riad.priceRange}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                  {riad.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {riad.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-[var(--color-accent)] font-medium uppercase tracking-wide">
                  <Star className="w-3.5 h-3.5 inline mr-1" />
                  Best for: {riad.bestFor}
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-8 bg-[var(--color-primary)]/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                <Gem className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Booking Tip: Rooftop Dinners and Special Arrangements
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  Most quality riads will arrange a private rooftop dinner for
                  two with 24-48 hours notice. This typically costs 800-2,000
                  MAD for a multi-course meal including wine and candles. Some
                  riads include this as a complimentary honeymoon perk if you
                  mention it when booking. Always communicate special occasions
                  (anniversary, proposal, honeymoon) when you reserve &mdash;
                  Moroccan hospitality takes these occasions seriously, and staff
                  often go above and beyond with rose petals, champagne, and
                  personalized touches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         2. DESERT GLAMPING UNDER THE STARS
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]/[0.03]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Tent className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Desert Glamping Under the Stars
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Few experiences rival falling asleep in a luxury tent in the
              Sahara Desert with nothing between you and a sky full of stars.
              Morocco&apos;s desert camps range from 2,000 to 5,000 MAD per
              night and offer the most unforgettable night of any trip.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {desertCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {camp.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{camp.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    <Banknote className="w-3.5 h-3.5" />
                    {camp.priceRange}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                  {camp.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {camp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <Mountain className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span className="font-medium">Terrain:</span>
                  <span>{camp.terrain}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-8 bg-[var(--color-primary)]/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Erg Chebbi vs. Erg Chigaga: Which Dunes?
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                  Morocco has two major sand seas. <strong>Erg Chebbi</strong>{' '}
                  (near Merzouga) is easier to access, has more camp options,
                  and its towering orange dunes are iconic. It is the best choice
                  for most couples. <strong>Erg Chigaga</strong> (near M&apos;hamid)
                  is larger, more remote, and feels truly wild &mdash; ideal for
                  couples who want total seclusion and do not mind a longer
                  journey to get there. Both offer stunning stargazing and luxury
                  camping experiences.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  <strong>Agafay Desert</strong> (40 minutes from Marrakech) is
                  not sand dunes but a rocky, moon-like landscape with excellent
                  camps. It is perfect for couples who want a desert night
                  without the long drive to the Sahara, or as a supplement to a
                  Sahara trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         3. ROMANTIC EXPERIENCES
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sparkles className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Unforgettable Experiences for Two
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Beyond the riads and the desert, Morocco offers a wealth of
              experiences that become even more special when shared with someone
              you love. These are the ones couples remember forever.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {romanticExperiences.map((experience) => (
              <div key={experience.title} className="card-moroccan p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)] mb-4">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {experience.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Banknote className="w-3.5 h-3.5" />
                        {experience.price}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {experience.duration}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                      {experience.description}
                    </p>
                  </div>
                  <div className="lg:border-l lg:border-[var(--color-primary)]/10 lg:pl-6">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 uppercase tracking-wide">
                      Practical Tips
                    </h4>
                    <ul className="space-y-2">
                      {experience.tips.map((tip, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                        >
                          <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-xs text-[var(--color-accent)] font-medium">
                      <CalendarDays className="w-3.5 h-3.5 inline mr-1" />
                      Best season: {experience.bestSeason}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         4. HAMMAM & SPA FOR TWO
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]/[0.03]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Bath className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hammam &amp; Spa for Two
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The traditional Moroccan hammam is a deeply sensory experience of
              steam, exfoliation, and renewal. Luxury spas across Morocco offer
              private couples hammam rituals that transform this ancient
              tradition into one of the most intimate experiences you can share.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {couplesSpaExperiences.map((spa) => (
              <div key={spa.name} className="card-moroccan p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {spa.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{spa.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    <Banknote className="w-3.5 h-3.5" />
                    {spa.priceRange}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                  {spa.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)] border-t border-[var(--color-primary)]/10 pt-4">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    {spa.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)]" />
                    {spa.includes}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-8 bg-[var(--color-primary)]/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Important: Couples Hammam Etiquette
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  Traditional public hammams in Morocco are strictly gender-separated,
                  and couples cannot enter together. The couples hammam experiences
                  listed above are all at private spas and luxury hotels that offer
                  dedicated couples treatment rooms. Always book a &ldquo;couples
                  hammam&rdquo; or &ldquo;private hammam for two&rdquo; specifically.
                  Budget 48 hours advance notice for the best experience. During
                  Ramadan, some spa hours may change, so confirm ahead of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         5. ROOFTOP RESTAURANTS FOR COUPLES
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Utensils className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Rooftop Restaurants for Couples
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dining on a candlelit rooftop terrace above a Moroccan medina,
              with the call to prayer echoing in the distance and the Atlas
              Mountains on the horizon, is one of the most romantic dining
              experiences in the world. These are the best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {rooftopRestaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {restaurant.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{restaurant.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-3">
                  <Banknote className="w-3.5 h-3.5" />
                  <span>{restaurant.priceRange}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-xs mb-4">
                  {restaurant.description}
                </p>
                <div className="border-t border-[var(--color-primary)]/10 pt-3">
                  <p className="text-xs text-[var(--color-accent)] font-medium">
                    <Gem className="w-3.5 h-3.5 inline mr-1" />
                    {restaurant.reservationTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         6. SUNSET SPOTS FOR COUPLES
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]/[0.03]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sunset className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Most Romantic Sunset Spots
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco faces both the Atlantic Ocean and the Mediterranean Sea,
              with mountain ranges, ancient cities, and vast deserts in between.
              This geography creates extraordinary sunset viewpoints across the
              country, from cliff-side cafes to hilltop ruins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sunsetSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {spot.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{spot.location}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                  {spot.description}
                </p>
                <div className="space-y-2 border-t border-[var(--color-primary)]/10 pt-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <Compass className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span>{spot.accessInfo}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--color-accent)] font-medium">
                    <Clock className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{spot.bestTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         7. HONEYMOON ITINERARIES
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Honeymoon Itineraries
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Two carefully crafted itineraries that balance romance, adventure,
              culture, and relaxation. The 7-day route focuses on Marrakech and
              the Sahara. The 10-day version adds Fes, Chefchaouen, and the
              imperial cities for a more complete Moroccan experience.
            </p>
          </div>

          {/* 7-Day Itinerary */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Plane className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  7-Day Romantic Morocco Itinerary
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Marrakech, the Atlas Mountains, and the Sahara Desert
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {sevenDayItinerary.map((day) => (
                <div
                  key={day.day}
                  className="card-moroccan p-6 flex flex-col md:flex-row md:items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[var(--color-primary)] text-white flex flex-col items-center justify-center">
                    <span className="text-xs font-medium uppercase">Day</span>
                    <span className="text-2xl font-bold leading-none">
                      {day.day}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {day.title}
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                      {day.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)]">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        {day.accommodation}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {day.highlights}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10-Day Itinerary */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  10-Day Complete Morocco Honeymoon
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Casablanca, Rabat, Fes, Chefchaouen, Marrakech, and the Sahara
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {tenDayItinerary.map((day) => (
                <div
                  key={day.day}
                  className="card-moroccan p-6 flex flex-col md:flex-row md:items-start gap-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[var(--color-accent)] text-white flex flex-col items-center justify-center">
                    <span className="text-xs font-medium uppercase">Day</span>
                    <span className="text-2xl font-bold leading-none">
                      {day.day}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {day.title}
                    </h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                      {day.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)]">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {day.accommodation}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        {day.highlights}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         8. PROPOSAL SPOTS
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]/[0.03]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Gem className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Proposal Spots in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco offers proposal settings that range from the grand and
              dramatic to the intimate and surprising. Whether you want a
              Sahara sunrise, a blue city hilltop, or a private riad rooftop,
              these are the locations that make the question unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {proposalSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {spot.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{spot.location}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4">
                  {spot.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-secondary)] border-t border-[var(--color-primary)]/10 pt-4">
                  <span className="inline-flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    {spot.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--color-accent)] font-medium">
                    <Banknote className="w-3.5 h-3.5" />
                    {spot.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-8 bg-[var(--color-primary)]/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Planning a Proposal: Practical Advice
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                  Communicate your plans directly with your riad or hotel
                  concierge. Moroccan hospitality staff take proposals very
                  seriously and will go out of their way to help. They can
                  arrange flowers, champagne, photographers, musicians, and
                  specific table setups. Give at least 48 hours notice for
                  arrangements. If proposing in a public location, consider
                  hiring a local photographer to capture the moment discreetly.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  For the ring: do not leave it unattended at any point during
                  your trip. Use the in-room safe at your riad. If traveling
                  with the ring in luggage, always carry it on your person or in
                  carry-on luggage, never in checked bags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         9. CULTURAL ETIQUETTE FOR COUPLES
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Etiquette for Couples
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is warm, welcoming, and deeply hospitable, but it is also
              a conservative society with cultural norms that differ from
              Western countries. Understanding and respecting these norms will
              make your trip smoother and more enjoyable. This is honest,
              practical advice.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {couplesEtiquette.map((item) => (
              <div key={item.title} className="card-moroccan p-8">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      item.importance === 'critical'
                        ? 'bg-red-100'
                        : item.importance === 'important'
                          ? 'bg-amber-100'
                          : 'bg-[var(--color-primary)]/10'
                    }`}
                  >
                    {item.importance === 'critical' ? (
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    ) : item.importance === 'important' ? (
                      <Shield className="w-5 h-5 text-amber-600" />
                    ) : (
                      <Eye className="w-5 h-5 text-[var(--color-primary)]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                          item.importance === 'critical'
                            ? 'bg-red-100 text-red-700'
                            : item.importance === 'important'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                        }`}
                      >
                        {item.importance}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         10. BUDGET OVERVIEW
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]/[0.03]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Coins className="w-7 h-7 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Romantic Morocco: Budget Overview
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect to spend as a couple across different budget
              levels. All prices are in Moroccan Dirham (MAD) and reflect
              current market rates for two people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card-moroccan p-8 text-center">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Comfortable Romance
              </h3>
              <p className="text-3xl font-bold text-[var(--color-primary)] mb-1">
                1,500-3,000
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                MAD per day for two
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Charming riad with courtyard (600-1,200 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Good restaurants and street food (300-600 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>One activity per day (300-800 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Public transport and shared transfers</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-8 text-center border-2 border-[var(--color-accent)]">
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-2">
                <Crown className="w-3.5 h-3.5" />
                Most Popular
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Luxury Romance
              </h3>
              <p className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                3,000-7,000
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                MAD per day for two
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Boutique riad with plunge pool (1,500-3,500 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Fine dining and rooftop restaurants (500-1,000 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Couples hammam and premium activities (800-2,000 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Private transfers and guided tours</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-8 text-center">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Ultra-Luxury
              </h3>
              <p className="text-3xl font-bold text-[var(--color-primary)] mb-1">
                7,000-20,000+
              </p>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                MAD per day for two
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Palace hotels: Royal Mansour, La Mamounia (5,000-50,000 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Michelin-level dining and private chefs (1,000-3,000 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Private balloon, spa suites, bespoke tours (2,000-12,000 MAD)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                  <span>Private drivers, helicopter transfers available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-8 bg-[var(--color-primary)]/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                <Coins className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Money-Saving Tips for Couples
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                  Morocco offers exceptional value for couples. A romantic trip
                  here costs a fraction of equivalent experiences in Europe,
                  the Maldives, or Southeast Asia. The best way to save is to
                  splurge selectively: book a mid-range riad for most nights
                  but upgrade to a luxury property for one or two special
                  evenings. Eat at street food stalls and local restaurants for
                  lunch (50-100 MAD for two) and save fine dining for dinner.
                </p>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  Book directly with riads and camps via email or WhatsApp for
                  better rates than booking platforms. Traveling in shoulder
                  season (April to May or September to October) offers the best
                  combination of weather, availability, and pricing. Avoid
                  Christmas, New Year, and Easter when prices peak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         11. BEST TIME TO VISIT FOR COUPLES
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Sun className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit for Couples
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s climate varies dramatically by region. The ideal
              time for a romantic trip depends on which experiences matter most
              to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Flame className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Oct - Nov
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-3">
                Best Overall
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Perfect temperatures across the country. Warm days, cool
                evenings. Ideal for desert camping, city exploration, and
                coastal visits. The date harvest adds color to oasis towns.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Mar - Apr
              </h3>
              <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">
                Spring Romance
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Wildflowers in the Atlas and Dades Valley. Rose harvest in
                Kelaat M&apos;Gouna. Green landscapes and comfortable
                temperatures. Some rain possible but generally beautiful.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Sun className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Jun - Aug
              </h3>
              <p className="text-sm font-semibold text-amber-600 mb-3">
                Beach Season
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Very hot inland (40C+ in Marrakech and the desert). Best for
                coastal Essaouira and northern beaches. Avoid the Sahara in
                summer. Evening romance in cities after the heat breaks.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Waves className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Dec - Feb
              </h3>
              <p className="text-sm font-semibold text-blue-600 mb-3">
                Cool &amp; Cozy
              </p>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Cool but pleasant in cities. Cold desert nights make glamping
                extra cozy under blankets. Snow-capped Atlas as a backdrop.
                Fewer tourists. Holiday season prices peak late December.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
         12. RELATED GUIDES
         ===================================================================== */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)]/[0.03]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Planning Your Romantic Trip
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore our specialized guides for deeper information on specific
              aspects of romantic travel in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-moroccan p-6 group hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent)]/10 transition-colors">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--color-accent)] transition-colors flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
         ROMANTIC MOROCCO GALLERY
         ===================================================================== */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Heart className="w-8 h-8 text-[var(--color-primary)] mx-auto mb-3" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Romance in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Intimate dinners under the stars, rose petal baths, and unforgettable landscapes for two.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
              <img src="/images/hero-romantic-dinner.webp" alt="Candlelit romantic dinner for two on a Moroccan riad rooftop with lanterns and rose petals" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Private rooftop dinner -- the most romantic evening in Morocco
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-[16/9] group">
              <img src="/images/photo-rose-harvest-valley.webp" alt="Rose harvest in the Dades Valley with pink Damask roses in bloom against the Atlas Mountains" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-3 left-3 right-3 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                The Rose Valley -- millions of Damask roses bloom each May in the Dades Valley
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Romance Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Romantic Travel Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-for-couples', title: 'Morocco for Couples', desc: 'Complete romantic guide: riads, sunset spots, and couple activities.' },
              { href: '/morocco-luxury-hotels', title: 'Luxury Hotels', desc: 'The 8 most romantic luxury hotels in Morocco.' },
              { href: '/morocco-spa-guide', title: 'Spa & Hammam', desc: 'Couples hammam experiences and luxury spa treatments.' },
              { href: '/morocco-wedding-venues', title: 'Wedding Venues', desc: 'Destination wedding planning in Morocco\'s finest venues.' },
              { href: '/photography-guide', title: 'Photography Guide', desc: 'Capture your romantic Morocco moments perfectly.' },
              { href: '/morocco-food-tours', title: 'Food Tours', desc: 'Romantic culinary experiences for couples.' },
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

      {/* =====================================================================
         13. FINAL CTA
         ===================================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="card-moroccan p-10 md:p-14 text-center bg-[var(--color-primary)] text-white">
            <Heart className="w-10 h-10 mx-auto mb-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
              Ready to Plan Your Romantic Morocco Trip?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Morocco combines ancient beauty, world-class luxury, dramatic
              landscapes, and genuine warmth in a way that few destinations can
              match. Whether it is a honeymoon, an anniversary, a proposal, or
              simply a getaway for two, this country will exceed your
              expectations. Start with a riad, add a night in the desert, and
              let Morocco do the rest.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/honeymoon"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                Honeymoon Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/luxury"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Luxury Travel Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
