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
  Sun,
  Camera,
  Wine,
  Flower2,
  Music,
  Globe,
  Landmark,
  Utensils,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Romantic Morocco 2026 | Couples Trip, Honeymoon & Romantic Getaway Guide',
  description:
    'Plan the perfect romantic getaway in Morocco. Luxury riads, private desert camps under the stars, sunset camel rides, rooftop dining in Marrakech, hammam spa experiences for two, and the most photogenic spots for couples across Fez, Essaouira, and Chefchaouen.',
  keywords: [
    'romantic morocco',
    'couples trip morocco',
    'morocco romantic getaway',
    'honeymoon destinations morocco',
    'romantic things to do in morocco',
    'luxury riads couples',
    'desert camp honeymoon',
    'marrakech romantic trip',
    'sunset camel ride morocco',
    'hammam spa couples morocco',
    'rooftop dinner marrakech',
    'morocco honeymoon itinerary',
    'romantic restaurants morocco',
    'couples photography morocco',
    'chefchaouen couples trip',
    'fez romantic getaway',
    'essaouira couples weekend',
    'morocco hot air balloon',
    'private desert camp merzouga',
    'budget romantic morocco',
  ],
  openGraph: {
    title: 'Romantic Morocco 2026 | Couples Trip, Honeymoon & Romantic Getaway Guide',
    description:
      'Luxury riads, private desert camps, sunset camel rides, rooftop dining, and hammam spa experiences. Your complete guide to a romantic getaway in Morocco.',
    url: `${BASE_URL}/morocco-romantic-getaway`,
    images: [
      {
        url: `${BASE_URL}/images/hero-romantic-getaway.webp`,
        width: 1200,
        height: 630,
        alt: 'Couple watching sunset from a rooftop terrace in Marrakech with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romantic Morocco 2026 | Couples Trip & Honeymoon Guide',
    description:
      'Luxury riads, desert camps under the stars, sunset experiences, hammam rituals, and romantic dining. Your complete couples guide to Morocco.',
    images: [`${BASE_URL}/images/hero-romantic-getaway.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-romantic-getaway` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-romantic-getaway`,
  name: 'Romantic Morocco 2026 | Couples Trip, Honeymoon & Romantic Getaway Guide',
  description:
    'Complete guide to romantic travel in Morocco. Luxury riads, private desert camps, sunset camel rides, rooftop dining, hammam spa experiences, and photography spots for couples.',
  url: `${BASE_URL}/morocco-romantic-getaway`,
  image: `${BASE_URL}/images/hero-romantic-getaway.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-romantic-getaway`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Romantic Getaway Guide', item: `${BASE_URL}/morocco-romantic-getaway` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good honeymoon destination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is an exceptional honeymoon destination. The combination of luxury riads with private plunge pools, Sahara desert camps with zero light pollution, world-class cuisine, and hammam spa traditions creates an intensely romantic atmosphere. Couples can shift from medina exploration to mountain retreats to Atlantic coast sunsets within a single trip. Prices are significantly lower than comparable European honeymoon destinations, with five-star riad suites starting from 2,000 MAD per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most romantic city in Morocco for couples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is the most popular choice for couples, with hundreds of intimate riads, rooftop restaurants, and world-class spas. However, Fez offers a more authentic and less touristy romance with its medieval medina and quieter luxury riads. Essaouira suits couples who prefer coastal breezes and art galleries, while Chefchaouen is ideal for photography-loving pairs who want a quieter pace. Many couples combine two or three cities for variety.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a romantic trip to Morocco cost for a couple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mid-range romantic trip costs roughly 1,200-2,000 MAD per day for two, covering a quality riad double room, meals at good restaurants, and one daily activity. Luxury couples should budget from 3,500-6,000 MAD per day for five-star riads, private guides, fine dining, and spa treatments. Budget-conscious couples can manage from 600-900 MAD per day with charming guesthouses and street food. A one-night luxury desert camp adds from 3,000-8,000 MAD for two, depending on the level of exclusivity.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Morocco for a romantic trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October and November offer the best balance: warm days (22-28C), cool evenings perfect for rooftop dining, lower crowds than peak season, and dramatic light for photography. March through May is also excellent, with wildflowers in the Atlas foothills and pleasant temperatures. Avoid July and August when Marrakech regularly exceeds 40C. December through February brings cooler weather that makes desert camping under blankets particularly romantic, though nights in Chefchaouen and the mountains can drop below 5C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are public displays of affection allowed in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a conservative Muslim country, and excessive public displays of affection are frowned upon. Holding hands is generally acceptable in tourist areas like Marrakech, Essaouira, and resort zones. Kissing and embracing in public should be avoided, especially near mosques and in rural areas. Inside your riad or hotel, there are no restrictions. Unmarried couples can share hotel rooms in tourist-oriented accommodations without issues, though very traditional rural guesthouses may ask about marital status.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I plan a surprise proposal in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Popular proposal spots include the rooftop terraces of Marrakech riads at sunset, the blue streets of Chefchaouen, and private luxury desert camps in the Sahara. Many upscale riads will help arrange rose petals, champagne, and a photographer if you contact them in advance. Hot air balloon rides over the Haouz Plain near Marrakech also make dramatic proposal settings. Budget from 500-2,000 MAD for special arrangements on top of your accommodation costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should couples pack for a romantic Morocco trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack modest but stylish clothing: shoulders and knees covered for medina visits, with a dressier outfit for upscale riad dinners. Comfortable walking shoes are essential for cobblestone medinas. Bring layers for desert evenings, which can drop 15-20 degrees after sunset. A lightweight scarf serves double duty as sun protection and shoulder cover for mosque areas. Sunscreen, a quality camera, and a portable phone charger round out the essentials. Most riads provide hammam towels and robes.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC CITIES
   ═══════════════════════════════════════════════════════════════ */

const romanticCities = [
  {
    name: 'Marrakech',
    icon: Crown,
    tagline: 'The Red City of Riads & Rooftops',
    description:
      'Marrakech practically invented the riad experience. Behind unassuming wooden doors in the medina, 17th-century courtyard houses have been transformed into intimate boutique hotels with plunge pools, candlelit dinners, and jasmine-scented terraces. The city buzzes with energy, but your riad courtyard is a silent retreat. Book a rooftop table at Nomad overlooking the spice souk, or splurge on La Mamounia for legendary old-world glamour.',
    highlights: 'Jemaa el-Fnaa at dusk, Jardin Majorelle, Le Jardin Secret, Bahia Palace',
    priceRange: 'Riads from 800 MAD/night (mid-range) to 5,000+ MAD/night (luxury)',
  },
  {
    name: 'Fez',
    icon: Landmark,
    tagline: 'Medieval Romance Without the Crowds',
    description:
      'Fez is where couples go when they want Morocco without the Instagram hordes. The medina here is older, deeper, and more labyrinthine than Marrakech. Getting intentionally lost together through 9,000 alleyways is half the romance. Riad Fes, a five-star property inside a restored 19th-century palace, offers Andalusian garden dining that feels centuries removed from the modern world. The tanneries, the brasswork, the call to prayer echoing off medieval walls -- Fez is sensory overload in the best way.',
    highlights: 'Bou Inania Medersa, Chouara Tannery, Bab Boujloud, Dar Batha Museum',
    priceRange: 'Riads from 600 MAD/night (mid-range) to 4,000+ MAD/night (luxury)',
  },
  {
    name: 'Essaouira',
    icon: Sun,
    tagline: 'Atlantic Coast Cool',
    description:
      'Two hours from Marrakech, Essaouira trades red dust for ocean spray. The whitewashed medina feels more like a Greek island than inland Morocco. Couples stroll the ramparts at golden hour, eat grilled sardines at the port for 40 MAD, and browse Gnaoua music shops along Rue Skala. The wind picks up by afternoon, so mornings are best for beach walks. Stay at Heure Bleue Palais for sea-view suites or L\'Heure Bleue for art-deco charm.',
    highlights: 'Skala de la Ville, port fish grills, beach sunset walks, art galleries',
    priceRange: 'Riads from 500 MAD/night (mid-range) to 3,000+ MAD/night (luxury)',
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    tagline: 'The Blue Pearl for Couples Who Photograph',
    description:
      'Every doorway, staircase, and flower pot in Chefchaouen is a photo opportunity. The blue-washed Rif Mountain town is small enough to explore in a day, but couples usually stay two or three nights because the pace is addictive. Hike to the Spanish Mosque at sunset for sweeping views. The medina is car-free and quiet after dark. Lina Ryad & Spa has a rooftop pool overlooking the blue walls -- perfect for a lazy afternoon together.',
    highlights: 'Plaza Uta el-Hammam, Ras Elma waterfall, Spanish Mosque sunset, Akchour waterfalls day trip',
    priceRange: 'Riads from 400 MAD/night (mid-range) to 2,000+ MAD/night (luxury)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SUNSET EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const sunsetExperiences = [
  {
    name: 'Sahara Camel Ride at Sunset',
    icon: Sun,
    location: 'Erg Chebbi, Merzouga',
    description:
      'A one-hour camel trek into the dunes as the sky shifts from amber to deep violet. Guides lead you to a high dune ridge where you watch the sun sink below an ocean of sand. The silence after sunset is absolute. Most luxury camps include this as part of their overnight package.',
    price: 'From 350 MAD per person (standalone), or included with desert camp stays',
  },
  {
    name: 'Hot Air Balloon over Marrakech',
    icon: Sparkles,
    location: 'Haouz Plain, Marrakech',
    description:
      'Launches happen at dawn, not sunset, but the effect is equally dramatic. Float over olive groves and Berber villages as the Atlas Mountains glow pink. Flights last about an hour, followed by a Berber breakfast on the ground. Ciel d\'Afrique and Marrakech By Air operate daily flights from October through May.',
    price: 'From 2,000 MAD per person, book at least 48 hours ahead',
  },
  {
    name: 'Rooftop Dinner in the Medina',
    icon: Utensils,
    location: 'Marrakech or Fez',
    description:
      'Dozens of Marrakech riads and restaurants offer private rooftop dining. Le Jardin serves contemporary Moroccan plates surrounded by banana trees. Dar Yacout is a legendary multi-course feast inside a palatial setting. In Fez, Riad Rcif has a rooftop terrace with views across the entire medina. Request a table for two at sunset and arrive 30 minutes early to watch the light change.',
    price: 'From 250 MAD per person (mid-range) to 800+ MAD per person (fine dining)',
  },
  {
    name: 'Essaouira Rampart Walk',
    icon: MapPin,
    location: 'Essaouira',
    description:
      'The 18th-century Portuguese ramparts facing the Atlantic make for one of Morocco\'s most photogenic sunset walks. No booking required, no entrance fee. Fishing boats return to port as the sun drops into the ocean. Buy roasted almonds from a vendor near Bab el-Marsa and find a quiet spot on the wall. Simple and free.',
    price: 'Free',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY RIAD PICKS
   ═══════════════════════════════════════════════════════════════ */

const luxuryRiads = [
  {
    name: 'Royal Mansour Marrakech',
    city: 'Marrakech',
    icon: Crown,
    description:
      'Private three-story riads with individual plunge pools, butler service, and a subterranean spa. The craftsmanship took 1,500 artisans three years to complete. Dinner at Le Grand Table Marocaine, run by three-Michelin-star chef Yannick Alleno, is worth the splurge alone.',
    priceFrom: 'From 12,000 MAD/night',
    bestFor: 'Once-in-a-lifetime honeymoon splurge',
  },
  {
    name: 'Riad Fes',
    city: 'Fez',
    icon: Gem,
    description:
      'A Relais & Chateaux property inside the medina walls. The Andalusian garden restaurant, Bar Maure lounge, and rooftop pool overlooking the medina create layers of intimate spaces. Rooms mix traditional zellige tilework with modern comforts. The staff arranges private cooking classes and medina tours.',
    priceFrom: 'From 3,500 MAD/night',
    bestFor: 'Couples who prefer culture over beach',
  },
  {
    name: 'La Sultana Oualidia',
    city: 'Oualidia',
    icon: Star,
    description:
      'On a quiet Atlantic lagoon between Casablanca and Essaouira, La Sultana is Morocco\'s most under-the-radar luxury retreat. Oyster tastings from the lagoon beds, a full-service spa, and suites with private terraces over the water. The drive from Marrakech takes about three hours but feels like arriving in a different country.',
    priceFrom: 'From 4,000 MAD/night',
    bestFor: 'Coastal seclusion and seafood lovers',
  },
  {
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    icon: Mountain,
    description:
      'Richard Branson\'s Atlas Mountain retreat sits at 1,200m altitude, 45 minutes from Marrakech. Rooms are individually designed with Berber textiles and antiques collected by Branson himself. The infinity pool overlooks terraced gardens dropping into a valley. Mule treks, cooking classes, and hammam sessions fill the days.',
    priceFrom: 'From 5,500 MAD/night',
    bestFor: 'Mountain escape with five-star polish',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT CAMP EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const desertCamps = [
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert (40 min from Marrakech)',
    icon: Sparkles,
    description:
      'For couples short on time, Scarabeo offers a desert-feel experience without the 8-hour drive to Merzouga. White canvas tents dot a rocky lunar landscape with Atlas Mountain views. Candlelit dinner under the stars, sunrise yoga, and zero Wi-Fi by design. It is technically a stone desert, not sand dunes, but the romance is real.',
    price: 'From 3,000 MAD per night for two (dinner and breakfast included)',
  },
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi, Merzouga',
    icon: Star,
    description:
      'The real Sahara. Several operators run luxury camps with en-suite tents, king beds, and hot showers between the dunes. Erg Chebbi\'s 150-meter dunes turn burnt orange at sunset. After a tagine dinner, Berber musicians play under a sky dense with stars. Private camps with just two or three tents are available if you book directly.',
    price: 'From 4,000 MAD per night for two (full board, camel ride, entertainment)',
  },
  {
    name: 'Erg Chigaga Remote Camps',
    location: 'Erg Chigaga, near M\'hamid',
    icon: Globe,
    description:
      'Erg Chigaga is harder to reach than Merzouga -- it requires a 4x4 across 50km of open desert -- and that\'s the point. Fewer tourists, bigger silence, and a sense of genuine isolation. Azalai Desert Camp and Erg Chigaga Luxury Camp both offer high-end tented accommodation. The night sky here, with no light pollution for 100km in any direction, is extraordinary.',
    price: 'From 5,000 MAD per night for two (full board, 4x4 transfer, activities)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPA & HAMMAM
   ═══════════════════════════════════════════════════════════════ */

const spaExperiences = [
  {
    name: 'Traditional Couples Hammam',
    icon: Flower2,
    description:
      'A hammam session follows a centuries-old ritual: steam, black soap scrub with a kessa glove, rhassoul clay mask, and argan oil massage. Many upscale riads offer private hammam rooms for two. Heritage Spa in the Marrakech medina and Les Bains de Marrakech are top-rated couple options. The full ritual takes 90 minutes to two hours.',
    price: 'From 400 MAD per person (mid-range), from 800 MAD per person (luxury)',
    where: 'Marrakech, Fez, Essaouira -- most quality riads offer in-house hammam',
  },
  {
    name: 'La Mamounia Spa',
    icon: Crown,
    description:
      'The spa at La Mamounia occupies 2,500 square meters of marble, zellige tile, and cedarwood. The indoor pool alone is worth a visit. Couples treatments include a signature argan oil massage followed by a private hammam session. Even if you are not staying at the hotel, spa guests can access the pool and gardens for the day.',
    price: 'From 1,500 MAD per person for a couples treatment package',
    where: 'La Mamounia, Avenue Bab Jdid, Marrakech',
  },
  {
    name: 'Argan Oil Massage in Essaouira',
    icon: Gem,
    description:
      'Essaouira is the heartland of argan oil production, and several spas use locally pressed oil for massage treatments. Le Loft Spa and Villa Maroc Spa both offer couples rooms with ocean-facing windows. A 60-minute argan oil massage costs roughly half what you would pay in Marrakech for similar quality.',
    price: 'From 300 MAD per person for a 60-minute couples massage',
    where: 'Essaouira medina and beachfront hotels',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC RESTAURANTS
   ═══════════════════════════════════════════════════════════════ */

const romanticRestaurants = [
  {
    name: 'Al Fassia',
    city: 'Marrakech',
    cuisine: 'Traditional Moroccan',
    description: 'Run entirely by women, Al Fassia has served some of Marrakech\'s best tagines since 1987. The Gueliz location has a garden terrace. Lamb tagine with caramelized pear and the pastilla are standouts.',
    price: 'From 200 MAD per person',
  },
  {
    name: 'Le Jardin',
    city: 'Marrakech',
    cuisine: 'Contemporary Moroccan',
    description: 'Hidden inside the Mouassine quarter, Le Jardin is a green oasis surrounded by banana trees and bougainvillea. The menu is lighter than traditional Moroccan -- think grilled fish with chermoula, fresh salads, and mint lemonade.',
    price: 'From 150 MAD per person',
  },
  {
    name: 'Cafe Clock',
    city: 'Fez',
    cuisine: 'Fusion Moroccan',
    description: 'Overlooking the Rcif fountain from a multi-level terrace, Cafe Clock serves the famous camel burger alongside traditional harira soup and Moroccan salads. The cultural programming -- storytelling nights, calligraphy workshops -- makes it more than a meal.',
    price: 'From 80 MAD per person',
  },
  {
    name: 'La Table by Madada',
    city: 'Essaouira',
    cuisine: 'Seafood & Moroccan',
    description: 'Located inside Madada Mogador hotel, this restaurant does Atlantic-fresh fish with Moroccan spices. The rooftop tables face the ocean. Grilled John Dory with preserved lemon and the chocolate fondant are worth crossing the country for.',
    price: 'From 180 MAD per person',
  },
  {
    name: 'Dar Hatim',
    city: 'Fez',
    cuisine: 'Home-Style Fassi',
    description: 'A private dining experience inside a family home in the medina. Khadija, the matriarch, cooks a multi-course meal of Fassi specialties: rfissa, pastilla, and slow-cooked lamb. You eat in a traditional salon with carved stucco walls. Reservations required 24 hours in advance.',
    price: 'From 350 MAD per person (set menu)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY SPOTS
   ═══════════════════════════════════════════════════════════════ */

const photoSpots = [
  {
    name: 'Blue Streets of Chefchaouen',
    icon: Camera,
    tip: 'Visit between 7-9am before tour groups arrive. The light on the blue walls is soft and warm. Rue Targui and the area near Ras El Maa are the most photogenic.',
  },
  {
    name: 'Ben Youssef Medersa, Marrakech',
    icon: Landmark,
    tip: 'The carved stucco courtyard with its reflecting pool makes a stunning couples portrait backdrop. Go at opening time (9am) for fewer visitors in your frame.',
  },
  {
    name: 'Ait Benhaddou at Golden Hour',
    icon: Building,
    tip: 'Cross the river to the kasbah and shoot from the hillside facing west. The rammed-earth walls turn deep amber 30 minutes before sunset. The opposite bank offers the classic postcard view.',
  },
  {
    name: 'Sahara Dunes, Erg Chebbi',
    icon: Sun,
    tip: 'Ask your camp guide to take you to a dune ridge at sunrise. The shadows between dunes create dramatic lines. Wear contrasting colors against the orange sand for striking couple portraits.',
  },
  {
    name: 'Jardin Majorelle, Marrakech',
    icon: Flower2,
    tip: 'The cobalt blue villa and cactus gardens photograph beautifully. Arrive at 8am sharp when gates open. The bamboo walkway and lily pond are couple-photo favorites.',
  },
  {
    name: 'Essaouira Ramparts',
    icon: MapPin,
    tip: 'The crenellated walls with cannons facing the Atlantic create a dramatic silhouette at sunset. Position yourselves between two cannons for a framed shot with the ocean behind.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FOR COUPLES
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Ourika Valley',
    from: 'Marrakech (1 hour)',
    icon: Mountain,
    description: 'A lush valley cutting into the Atlas foothills with Berber villages, waterfalls, and saffron farms. Visit an argan oil cooperative, hike to Setti Fatma waterfalls, and lunch at a riverside restaurant with your feet dangling over the water.',
    price: 'From 500 MAD for two with private driver',
  },
  {
    name: 'Oualidia Lagoon',
    from: 'Marrakech (3 hours) or Casablanca (2.5 hours)',
    icon: Wine,
    description: 'Morocco\'s oyster capital. A sheltered Atlantic lagoon where you can kayak together, eat fresh oysters at a waterfront shack, and swim in calm turquoise water. Far quieter than Essaouira. The drive passes salt flats and flamingo wetlands.',
    price: 'From 800 MAD for two with private driver, plus meals',
  },
  {
    name: 'Ouzoud Waterfalls',
    from: 'Marrakech (2.5 hours)',
    icon: Sparkles,
    description: 'Morocco\'s tallest waterfalls drop 110 meters through red cliffs into emerald pools. The hike down takes 30 minutes, passing Barbary macaques and olive groves. Swim at the base of the falls, then eat fresh tagine at one of the cliffside restaurants.',
    price: 'From 600 MAD for two with private driver',
  },
  {
    name: 'Akchour Waterfalls',
    from: 'Chefchaouen (45 minutes)',
    icon: Globe,
    description: 'Two options: the smaller waterfall (a 45-minute hike) with a turquoise plunge pool, or the grand cascade (2.5-hour hike) that drops 300 meters. The trail follows a river gorge through pine forest. Pack a picnic and swimsuits.',
    price: 'From 300 MAD for two with shared transport, entry from 20 MAD per person',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET ROMANTIC OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const budgetOptions = [
  {
    title: 'Charming Guesthouses Under 500 MAD',
    icon: Building,
    detail: 'Skip the luxury riads and book family-run guesthouses (maisons d\'hotes) in Chefchaouen, Essaouira, or Fez medina. Many have rooftop terraces, home-cooked dinners, and genuine warmth that boutique hotels struggle to replicate. Dar Meziana in Chefchaouen and Riad Laayoun in Fez are standouts under 500 MAD per night.',
  },
  {
    title: 'Street Food Date Night',
    icon: Utensils,
    detail: 'Jemaa el-Fnaa in Marrakech turns into an open-air food court at dusk. Share a table at stall 14 or 32 (the famous ones) for grilled meats, harira soup, and fresh orange juice. Total cost for two: around 100-150 MAD. Follow it with pastries and mint tea at a nearby cafe.',
  },
  {
    title: 'Free Sunset Walks',
    icon: Sun,
    detail: 'The Essaouira ramparts, Chefchaouen\'s Spanish Mosque trail, the Kasbah des Oudaias terrace in Rabat, and the Agadir beach promenade all offer spectacular sunsets with zero entry fee. Pack mint tea in a thermos from your riad and make an evening of it.',
  },
  {
    title: 'Public Hammam Experience',
    icon: Flower2,
    detail: 'Tourist hammams charge from 200-500 MAD per person. Neighborhood hammams (hammam beldi) cost from 15-30 MAD per person, plus from 50 MAD for a scrub attendant. Bring your own black soap and kessa glove from the souk. Men and women have separate sessions. It is raw and authentic rather than spa-polished.',
  },
  {
    title: 'Cooking Class for Two',
    icon: Award,
    detail: 'Half-day cooking classes start from 300 MAD per person in Marrakech and Fez. You shop in the souk for ingredients, then learn to prepare tagine, couscous, and Moroccan salads. Atelier de la Cuisine Marocaine in the Fez medina and Souk Cuisine in Marrakech both offer small-group formats that feel intimate.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST MONTHS
   ═══════════════════════════════════════════════════════════════ */

const bestMonths = [
  { month: 'October', rating: 5, note: 'Peak romance season: warm days, cool evenings, golden light, lower crowds than summer' },
  { month: 'November', rating: 5, note: 'Excellent weather across the country, desert camping at its best, great hotel deals' },
  { month: 'March', rating: 4, note: 'Wildflowers in the Atlas, almond blossoms, pleasant medina weather, occasional rain' },
  { month: 'April', rating: 5, note: 'Perfect temperatures everywhere, long daylight hours, spring colors in the countryside' },
  { month: 'May', rating: 4, note: 'Still comfortable in the north, getting warm in Marrakech, beach season begins' },
  { month: 'December', rating: 3, note: 'Cool but atmospheric, festive season rates apply, cozy riad fireplaces, cold desert nights' },
  { month: 'January', rating: 3, note: 'Lowest prices, some rain, snow-capped Atlas for dramatic mountain photos' },
  { month: 'February', rating: 3, note: 'Valentine\'s season, almond blossoms start, good deals on luxury riads' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRomanticGetawayPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-romantic-getaway.webp"
          alt="Couple on a rooftop terrace overlooking Marrakech medina at sunset with Atlas Mountains in the distance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Romantic Getaway Guide</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4 drop-shadow-lg">
            Romantic Morocco 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Candlelit riads, Sahara stars, rooftop sunsets, and hammam rituals. A couples guide to the most romantic
            corners of Morocco.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" /> Honeymoon & Couples
            </span>
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5" /> Luxury & Budget Options
            </span>
            <span className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-sm flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> 4 Romantic Cities
            </span>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan p-8 md:p-10">
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                Why Morocco for a Romantic Getaway?
              </h2>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Morocco has something that most honeymoon destinations lack: surprise around every corner. You do not
                  come here for predictable resort relaxation. You come for the thrill of exploring a medieval medina
                  together, for the silence of a Sahara night with more stars than you have ever seen, for the intensity
                  of sharing a hammam ritual that Moroccans have practiced for a thousand years.
                </p>
                <p>
                  The country runs on hospitality. Riad owners treat guests like family. Restaurant staff remember your
                  name by the second visit. A shopkeeper in Fez might close his stall to walk you to a hidden viewpoint.
                  This warmth is not performative -- it is embedded in Moroccan culture, and it makes traveling as a
                  couple feel less like tourism and more like being welcomed into a story.
                </p>
                <p>
                  Practical matters help too. Direct flights from most European capitals land in three to four hours.
                  A luxury riad suite in Marrakech costs a fraction of equivalent accommodation in Santorini or the
                  Amalfi Coast. And the range is staggering: Atlantic coastline, Sahara dunes, snow-capped mountains,
                  and thousand-year-old cities, all within a country smaller than France.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Romantic Cities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Four Most Romantic Cities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each city offers a distinct flavor of romance. Many couples visit two or three in a single trip.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {romanticCities.map((city) => (
              <div key={city.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-xl">
                    <city.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {city.name}
                    </h3>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--color-accent)]">
                      {city.tagline}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{city.description}</p>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                    <strong>Highlights:</strong> {city.highlights}
                  </span>
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                    {city.priceRange}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Luxury Riads ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Luxury Riads & Hotels for Couples
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Hand-picked properties where the setting is half the romance. Seasonal pricing applies -- book
              directly with properties for the best rates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {luxuryRiads.map((riad) => (
              <div key={riad.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[var(--color-gold)]/10 p-3 rounded-xl">
                    <riad.icon className="w-7 h-7 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {riad.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-semibold">
                      {riad.city}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{riad.description}</p>
                <div className="flex flex-col gap-2 text-sm">
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                    {riad.priceFrom}
                  </span>
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <Heart className="w-4 h-4 text-[var(--color-accent)]" />
                    <strong>Best for:</strong> {riad.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sunset Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Sunset & Golden Hour Experiences
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco does sunsets like few other countries. The light, the terrain, and the altitude conspire to
              produce colors that photographers chase for years.
            </p>
          </div>
          <div className="space-y-6">
            {sunsetExperiences.map((exp) => (
              <div key={exp.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-xl shrink-0">
                    <exp.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {exp.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-semibold mb-3">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />
                      {exp.location}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{exp.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-gold)] font-semibold">
                      <DollarSign className="w-4 h-4" /> {exp.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spa & Hammam ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Spa & Hammam for Two
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Moroccan hammam is not a spa treatment -- it is a cultural ritual. Sharing it with a partner
              adds a layer of intimacy that a hotel jacuzzi cannot match.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaExperiences.map((spa) => (
              <div key={spa.name} className="card-moroccan p-6">
                <div className="bg-[var(--color-gold)]/10 p-3 rounded-xl w-fit mb-4">
                  <spa.icon className="w-7 h-7 text-[var(--color-gold)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {spa.name}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{spa.description}</p>
                <div className="space-y-2 text-sm">
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <DollarSign className="w-4 h-4 text-[var(--color-gold)]" /> {spa.price}
                  </span>
                  <span className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> {spa.where}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Desert Camps ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Private Desert Camps
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sleeping in the Sahara is the single most memorable night most couples spend in Morocco.
              Three tiers of desert experience, from accessible to remote.
            </p>
          </div>
          <div className="space-y-6">
            {desertCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-xl shrink-0">
                    <camp.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {camp.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-semibold mb-3">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />
                      {camp.location}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{camp.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-gold)] font-semibold">
                      <DollarSign className="w-4 h-4" /> {camp.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 card-moroccan p-5 bg-amber-50/50 border-[var(--color-gold)]/20">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong>Booking tip:</strong> Desert camp prices fluctuate with season and demand. October through
                March is peak season for the Sahara. Book private camps at least two weeks in advance, especially
                around Christmas, New Year, and Valentine&apos;s Day. Prices listed are starting rates and can change
                based on seasonal availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Romantic Restaurants ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Romantic Restaurants & Dining
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan food is built for sharing. Tagines arrive at the table meant for two hands. Couscous is
              traditionally eaten communally on Fridays. Dining here is inherently intimate.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {romanticRestaurants.map((rest) => (
              <div key={rest.name} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {rest.name}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-semibold mb-3">
                  {rest.city} &middot; {rest.cuisine}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{rest.description}</p>
                <span className="text-sm text-[var(--color-gold)] font-semibold flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> {rest.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips for Couples ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Day Trips for Couples
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A day outside the medina resets the rhythm. These trips work best with a private driver,
              which costs less than you might expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dayTrips.map((trip) => (
              <div key={trip.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[var(--color-accent)]/10 p-3 rounded-xl">
                    <trip.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {trip.name}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-[family-name:var(--font-heading)]">
                      From {trip.from}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">{trip.description}</p>
                <span className="text-sm text-[var(--color-gold)] font-semibold flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5" /> {trip.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photography Spots ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Photography Spots for Couples
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is wildly photogenic. These six locations produce the strongest couple portraits, with
              practical timing tips to avoid crowds.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-5">
                <div className="bg-[var(--color-accent)]/10 p-3 rounded-xl w-fit mb-3">
                  <spot.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {spot.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <Camera className="w-3.5 h-3.5 inline mr-1 text-[var(--color-gold)]" />
                  {spot.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time of Year ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time of Year for a Romantic Trip
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              October and April are the sweet spots. But each month has something to offer couples willing
              to plan around the weather.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bestMonths.map((m) => (
              <div key={m.month} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {m.month}
                  </h3>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < m.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-gray-200'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{m.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget Romance ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Romance on a Budget
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              You do not need a five-star riad to have a romantic trip. Morocco rewards resourceful couples
              with experiences that money cannot always buy.
            </p>
          </div>
          <div className="space-y-4">
            {budgetOptions.map((opt) => (
              <div key={opt.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[var(--color-gold)]/10 p-2.5 rounded-xl shrink-0">
                    <opt.icon className="w-6 h-6 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {opt.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{opt.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-10">
              Practical Tips for Couples
            </h2>
            <div className="space-y-4">
              <div className="card-moroccan p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      Dress Code & Etiquette
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Morocco is socially conservative outside tourist zones. Cover shoulders and knees in medinas
                      and rural areas. Hand-holding is fine in cities. Save kisses and embraces for your riad.
                      Upscale restaurants have no specific dress code, but smart-casual is appreciated.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex gap-3">
                  <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      Booking Direct vs. Agencies
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Book riads directly through their websites for the best rates -- most charge 15-20% less
                      than Booking.com. For desert camps, contact the camp directly via WhatsApp or email. Package
                      deals through agencies can save time but rarely save money. Always confirm cancellation
                      policies, as some boutique properties have strict no-refund rules.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex gap-3">
                  <Users className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      Getting Around as a Couple
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Private transfers between cities cost from 1,500-2,500 MAD (Marrakech to Fez, for example).
                      Trains connect Marrakech, Casablanca, Rabat, and Fez for under 200 MAD per person in first
                      class. For day trips, hiring a private driver for from 800-1,200 MAD per day gives you
                      flexibility without the stress of navigating Moroccan roads yourself.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      Ideal Trip Length
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Seven to ten days hits the sweet spot for a romantic itinerary. A common route: three nights
                      Marrakech, one night Sahara desert, two nights Fez, two nights Essaouira or Chefchaouen.
                      Five days works if you stick to one region. Do not try to see everything -- the romance is
                      in lingering, not rushing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq, idx) => (
                <div key={idx} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-2">
                    <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    {faq.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed pl-7">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
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
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flower2 className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spa Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to hammam etiquette, luxury spas, and traditional wellness rituals across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/best-riads-morocco" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Curated selection of the finest riads in Marrakech, Fez, Essaouira, and beyond for every budget.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tagines, couscous, street food, and fine dining. Everything couples need to eat well across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-desert" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Desert camping, camel treks, and stargazing in the Erg Chebbi and Erg Chigaga dune fields.
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
            Start Planning Your Romantic Morocco Trip
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From Marrakech rooftop sunsets to Sahara nights under a million stars, Morocco delivers romance
            that no resort package can replicate. Your story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Flower2 className="w-5 h-5" />
              Explore the Spa Guide
            </Link>
            <Link
              href="/best-riads-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Building className="w-5 h-5" />
              Browse the Best Riads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
