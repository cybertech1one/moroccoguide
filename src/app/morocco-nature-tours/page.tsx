import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
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
  Binoculars,
  Compass,
  Camera,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  Sun,
  TreeDeciduous,
  Calendar,
  Footprints,
  Tent,
  UtensilsCrossed,
  Palette,
  Globe,
  Route,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Nature & Cultural Tours 2026 | Best Guided Experiences & Tour Packages',
  description:
    'Complete guide to Morocco\'s best nature and cultural tours. From Atlas trekking and desert expeditions to medina walking tours and artisan workshops. Private and group tour options, multi-day itineraries, pricing from 400 MAD, and expert booking tips.',
  keywords: [
    'nature tours morocco',
    'cultural tours morocco',
    'morocco nature tours',
    'morocco cultural tours',
    'guided tours morocco',
    'private tours morocco',
    'morocco tour packages',
    'Atlas trekking tours',
    'morocco desert expedition',
    'medina walking tour',
    'morocco birdwatching tours',
    'morocco cooking experience',
    'artisan workshop morocco',
    'Berber village stay',
    'morocco garden tours',
    'imperial cities tour morocco',
    'sahara desert tour morocco',
    'morocco group tours',
    'morocco multi-day tours',
    'morocco tour operators 2026',
    'best guided tours morocco',
    'morocco adventure tours',
  ],
  openGraph: {
    title: 'Morocco Nature & Cultural Tours 2026 | Best Guided Experiences & Tour Packages',
    description:
      'Discover Morocco\'s finest nature and cultural tours. From 400 MAD day tours to 7-day grand itineraries. Atlas trekking, desert expeditions, medina walks, artisan workshops, and more.',
    url: `${BASE_URL}/morocco-nature-tours`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Atlas Mountains in Morocco with lush valleys and traditional Berber villages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Nature & Cultural Tours 2026 | Best Guided Experiences',
    description:
      'From Atlas trekking to medina walking tours. Complete guide to Morocco\'s best nature and cultural tour packages with prices, itineraries, and booking tips.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-nature-tours` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-nature-tours`,
  name: 'Morocco Nature & Cultural Tours 2026 | Best Guided Experiences & Tour Packages',
  description:
    'Complete guide to Morocco\'s best nature and cultural tours. Atlas trekking, desert expeditions, medina walks, artisan workshops, and multi-day itineraries with pricing and booking tips.',
  url: `${BASE_URL}/morocco-nature-tours`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-nature-tours`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Nature & Cultural Tours', item: `${BASE_URL}/morocco-nature-tours` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time of year for nature tours in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) are ideal for most nature tours. Summer is best for High Atlas trekking at altitude. Winter is perfect for Sahara desert tours and birdwatching in wetlands. Avoid the Sahara in July-August when temperatures exceed 45 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do guided tours in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Day tours start from 400 MAD per person for group tours. Private day tours start from 800 MAD. Multi-day packages range from 2,500 MAD for a 3-day desert tour to 12,000 MAD or more for a 7-day grand tour. Prices vary by season, group size, and accommodation level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a private or group tour in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group tours are more affordable and social, ideal for solo travelers and those on a budget. Private tours offer flexibility, personalized itineraries, and a deeper experience. For cultural tours like medina walks and cooking classes, smaller groups or private options provide the best experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco nature tours suitable for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many tours are family-friendly. Garden tours, easy nature walks, camel rides, and cooking classes work well for children. For trekking, choose easy-rated routes. Most reputable operators offer family-specific itineraries with shorter walking distances and engaging activities for children.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be physically fit for Atlas Mountain treks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the route. Easy valley walks require only basic fitness. Multi-day treks to Toubkal summit (4,167m) require good fitness and some hiking experience. Most operators offer graded options from easy half-day walks to challenging multi-day summit attempts. Acclimatization days are included on longer treks.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: NATURE TOUR TYPES
   ═══════════════════════════════════════════════════════════════ */

const natureTourTypes = [
  {
    name: 'Birdwatching Tours',
    icon: Binoculars,
    region: 'Souss-Massa, Merja Zerga, Oualidia',
    season: 'October - March (migration season)',
    price: 'From 600 MAD per day',
    description:
      'Morocco sits on two major migratory flyways and hosts over 480 bird species. Souss-Massa National Park is home to the critically endangered Northern Bald Ibis, while Merja Zerga lagoon attracts flamingos, spoonbills, and herons by the thousands. Expert ornithologist guides carry spotting scopes and field guides.',
    highlights: ['Northern Bald Ibis colonies', 'Flamingo lagoons at Oualidia', 'Raptor migration routes', 'Endemic Moussier\'s Redstart'],
  },
  {
    name: 'Atlas Mountain Trekking',
    icon: Mountain,
    region: 'High Atlas, Middle Atlas, Anti-Atlas',
    season: 'April - October (High Atlas), Year-round (Middle Atlas)',
    price: 'From 500 MAD per day',
    description:
      'The Atlas Mountains stretch 2,500 km across Morocco, offering treks from gentle valley walks to the challenging summit of Jebel Toubkal at 4,167m. Routes pass through Berber villages, cedar forests, and alpine meadows. Mules carry luggage on multi-day treks, and nights are spent in mountain refuges or Berber guesthouses.',
    highlights: ['Toubkal summit (4,167m)', 'Berber village homestays', 'Cedar forests of Ifrane', 'Ait Bouguemez valley walks'],
  },
  {
    name: 'Sahara Desert Expeditions',
    icon: Compass,
    region: 'Merzouga (Erg Chebbi), M\'Hamid (Erg Chigaga)',
    season: 'October - April (avoid summer heat)',
    price: 'From 800 MAD per night',
    description:
      'Venture into the golden dunes of the Sahara on camelback or 4x4. Watch the sunset paint the dunes in shades of orange and crimson, dine under a canopy of stars at a desert camp, and wake to a sunrise over an ocean of sand. Luxury camps offer en-suite tents with proper beds, while traditional bivouacs keep it simple.',
    highlights: ['Camel trek to desert camp', 'Stargazing in zero light pollution', 'Sunrise over Erg Chebbi dunes', 'Nomadic Berber encounters'],
  },
  {
    name: 'Coastal Wildlife Tours',
    icon: Waves,
    region: 'Essaouira, Dakhla, Sidi Ifni, Atlantic coast',
    season: 'Year-round (whale watching June - October)',
    price: 'From 500 MAD per day',
    description:
      'Morocco\'s 3,500 km coastline teems with marine life. Essaouira\'s Mogador Island hosts Eleonora\'s Falcon colonies. Dakhla\'s lagoon is a kite-surfing paradise with dolphins and sea turtles. Between June and October, whale watching trips spot humpbacks and orcas off the northern coast.',
    highlights: ['Eleonora\'s Falcon on Mogador Island', 'Dolphin spotting at Dakhla', 'Atlantic seal colonies', 'Coastal cliff walks'],
  },
  {
    name: 'Garden & Botanical Tours',
    icon: TreeDeciduous,
    region: 'Marrakech, Rabat, Meknes, Ourika Valley',
    season: 'February - May (spring bloom)',
    price: 'From 400 MAD per day',
    description:
      'Morocco\'s gardens are living museums of Islamic landscape design. The Majorelle Garden in Marrakech, the Exotic Gardens of Bouknadel near Rabat, and the Agdal Gardens of Meknes showcase centuries of horticultural tradition. Guided tours explain the botany, irrigation systems, and cultural significance behind each garden.',
    highlights: ['Majorelle Garden\'s cobalt blue', 'Menara Garden\'s olive groves', 'Anima Garden by Andre Heller', 'Wild orchid spotting in spring'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CULTURAL TOUR TYPES
   ═══════════════════════════════════════════════════════════════ */

const culturalTourTypes = [
  {
    name: 'Medina Walking Tours',
    icon: Footprints,
    city: 'Fes, Marrakech, Chefchaouen, Essaouira',
    duration: '3-5 hours',
    price: 'From 400 MAD per person',
    description:
      'Navigate the labyrinthine medinas with a licensed local guide who unlocks hidden riads, artisan workshops, and centuries-old fondouks. Fes el-Bali, the world\'s largest car-free urban area, reveals its secrets only to those who know where to look. Guides share stories of sultans, scholars, and artisans that bring the walls to life.',
    highlights: ['Hidden courtyard discoveries', 'Tannery viewpoints', 'Historic fondouk visits', 'Local street food tasting'],
  },
  {
    name: 'Cooking Experiences',
    icon: UtensilsCrossed,
    city: 'Marrakech, Fes, Essaouira, Chefchaouen',
    duration: '4-6 hours (includes market visit)',
    price: 'From 500 MAD per person',
    description:
      'Start at the souk with your host, selecting spices, vegetables, and meats. Return to a traditional riad kitchen or rooftop terrace to prepare tagine, couscous, pastilla, or harira under expert guidance. Learn the secrets of ras el hanout spice blends and preserved lemons. You eat what you cook at the end.',
    highlights: ['Souk ingredient shopping', 'Tagine and couscous mastery', 'Spice blending workshop', 'Rooftop dining experience'],
  },
  {
    name: 'Artisan Workshop Tours',
    icon: Palette,
    city: 'Fes, Marrakech, Safi, Taroudant',
    duration: '3-4 hours',
    price: 'From 400 MAD per person',
    description:
      'Visit master craftspeople in their workshops and learn about centuries-old techniques. Watch zellige tile cutters shape intricate mosaics by hand, see leather being dyed in ancient tannery vats, observe weavers at their looms, and try your hand at pottery or calligraphy. Fes is the undisputed capital of Moroccan craftsmanship.',
    highlights: ['Zellige tilework demonstration', 'Leather tannery visit', 'Carpet weaving workshop', 'Pottery hands-on session'],
  },
  {
    name: 'Imperial Cities Tours',
    icon: Crown,
    city: 'Fes, Marrakech, Meknes, Rabat',
    duration: '1-2 days per city',
    price: 'From 600 MAD per day',
    description:
      'Morocco\'s four Imperial Cities each served as the nation\'s capital during different dynasties. Expert historians guide you through the palaces, mosques, madrasas, and gardens that tell the story of Morocco\'s rich past. From the grandeur of Volubilis to the majesty of Bou Inania Madrasa, these tours illuminate 1,200 years of history.',
    highlights: ['Volubilis Roman ruins', 'Bou Inania Madrasa in Fes', 'Royal Palace of Meknes', 'Hassan Tower in Rabat'],
  },
  {
    name: 'Berber Village Stays',
    icon: Tent,
    city: 'Atlas Mountains, Draa Valley, Dades Gorge',
    duration: '2-4 days',
    price: 'From 700 MAD per day (full board)',
    description:
      'Immerse yourself in Amazigh (Berber) culture by staying with local families in mountain or valley villages. Participate in daily life: help bake bread in a communal oven, tend goats, harvest olives, or join a tea ceremony. Meals are shared from communal tagine pots. This is the most authentic cultural experience Morocco offers.',
    highlights: ['Family homestay experience', 'Traditional bread baking', 'Tea ceremony rituals', 'Mountain village daily life'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP TOUR OPERATORS
   ═══════════════════════════════════════════════════════════════ */

const topOperators = [
  { name: 'Sahara Expedition Morocco', specialty: 'Desert & Adventure Tours', icon: Compass, priceRange: 'From 2,500 MAD (3-day)', rating: '4.9/5', description: 'Specialists in Sahara desert expeditions with luxury and traditional camp options. Known for small groups, experienced Berber guides, and sustainable tourism. Their 3-day Merzouga tour is among the highest rated in Morocco.' },
  { name: 'Marrakech Insiders', specialty: 'Cultural & Food Tours', icon: UtensilsCrossed, priceRange: 'From 500 MAD (half-day)', rating: '4.8/5', description: 'Born-and-raised Marrakchi guides who reveal the medina\'s hidden side. Food tours, artisan walks, and rooftop cooking classes offer deep cultural immersion that large tour companies cannot match.' },
  { name: 'Atlas Mountain Guides', specialty: 'Trekking & Nature', icon: Mountain, priceRange: 'From 600 MAD (day trek)', rating: '4.9/5', description: 'Certified mountain guides from Imlil village with decades of High Atlas experience. Easy Ourika Valley day walks to week-long Toubkal circuits. All treks support local Berber communities.' },
  { name: 'Morocco Bird Tours', specialty: 'Birdwatching & Wildlife', icon: Binoculars, priceRange: 'From 800 MAD (day tour)', rating: '4.7/5', description: 'Led by professional ornithologists, visiting top birding sites including Souss-Massa, Merja Zerga, and the Middle Atlas cedar forests. Spotting scopes, field guides, and species checklists provided.' },
  { name: 'Imperial Cities Travel', specialty: 'Historical & Cultural', icon: Building, priceRange: 'From 5,000 MAD (5-day)', rating: '4.8/5', description: 'Expert historian-guides leading multi-day tours through Fes, Meknes, Rabat, and Marrakech. Deep knowledge of Islamic architecture, dynastic history, and local traditions transforms city visits.' },
  { name: 'Eco Morocco Adventures', specialty: 'Sustainable Nature Tours', icon: TreeDeciduous, priceRange: 'From 700 MAD (day tour)', rating: '4.8/5', description: 'Eco-conscious operator running garden tours, botanical walks, and coastal wildlife excursions. Carbon-offset included. Part of every booking supports local conservation and community development.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRIVATE VS GROUP COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const tourComparison = [
  { aspect: 'Group Size', privateText: '1-6 people (your party only). The guide is exclusively yours for the duration.', groupText: '8-16 people from different bookings. You travel and explore together as a mixed group.' },
  { aspect: 'Price Per Person', privateText: 'From 800 MAD per day for a private guide. Higher per person, but split among your group it can be competitive.', groupText: 'From 400 MAD per day. The most affordable option. Prices drop further with larger group sizes.' },
  { aspect: 'Flexibility', privateText: 'Full control over pace, stops, and schedule. Want to linger at a viewpoint or skip a site? No problem.', groupText: 'Fixed itinerary and schedule. The group moves together. Limited ability to deviate from the planned route.' },
  { aspect: 'Depth of Experience', privateText: 'Deeper cultural engagement. Your guide tailors explanations to your interests and answers questions in depth.', groupText: 'Broader overview. Guides speak to the group level. Less opportunity for deep individual interaction.' },
  { aspect: 'Best For', privateText: 'Families, couples, photographers, those with specific interests, travelers with mobility needs, and luxury travelers.', groupText: 'Solo travelers, budget travelers, social travelers who enjoy meeting others, and those who prefer structured itineraries.' },
  { aspect: 'Booking Lead Time', privateText: 'Book at least one week ahead during peak season. Off-peak, 2-3 days notice is usually sufficient.', groupText: 'Group tours run on fixed dates. Book 2-4 weeks ahead for peak season. Some accept last-minute bookings if space allows.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MULTI-DAY ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const multiDayItineraries = [
  {
    name: '3-Day Sahara Desert Adventure',
    icon: Compass,
    duration: '3 days / 2 nights',
    price: 'From 2,500 MAD per person',
    route: 'Marrakech - Ait Benhaddou - Dades Gorge - Merzouga - Marrakech',
    highlights: [
      'Day 1: Cross the High Atlas via Tizi n\'Tichka pass (2,260m). Visit the UNESCO kasbah of Ait Benhaddou. Overnight in Dades Gorge.',
      'Day 2: Drive through Todra Gorge to Merzouga. Camel trek into Erg Chebbi dunes. Dinner and overnight at desert camp under the stars.',
      'Day 3: Sunrise over the Sahara. Return via Draa Valley oasis route with stops at Berber villages. Arrive Marrakech by evening.',
    ],
    included: ['Transport in 4x4 or minibus', 'Licensed English-speaking guide', '2 nights accommodation', 'Camel trek', 'All meals in desert', 'Hotel pickups'],
  },
  {
    name: '5-Day Imperial Cities Circuit',
    icon: Crown,
    duration: '5 days / 4 nights',
    price: 'From 5,000 MAD per person',
    route: 'Casablanca - Rabat - Meknes - Volubilis - Fes - Marrakech',
    highlights: [
      'Day 1: Hassan II Mosque in Casablanca. Drive to Rabat. Visit Hassan Tower and Kasbah of the Udayas. Overnight Rabat.',
      'Day 2: Royal Palace of Meknes, Bab Mansour gate, Heri es-Souani granaries. Afternoon at Volubilis Roman ruins. Overnight Fes.',
      'Day 3: Full day in Fes medina with expert historian guide. Tanneries, madrasas, Fes el-Bali, artisan quarter. Overnight Fes.',
      'Day 4: Morning free in Fes. Drive to Marrakech via Middle Atlas cedar forests. Possible Barbary macaque sighting at Azrou. Overnight Marrakech.',
      'Day 5: Marrakech city tour: Bahia Palace, Saadian Tombs, Jemaa el-Fna, souks, and Majorelle Garden. Tour ends evening.',
    ],
    included: ['Air-conditioned transport', 'Licensed historian guide', '4 nights in riad/hotels', 'All entrance fees', 'Daily breakfast', 'Hotel pickups'],
  },
  {
    name: '7-Day Grand Morocco Tour',
    icon: Globe,
    duration: '7 days / 6 nights',
    price: 'From 8,500 MAD per person',
    route: 'Marrakech - Atlas - Desert - Fes - Chefchaouen - Rabat - Casablanca',
    highlights: [
      'Day 1: Marrakech city tour with medina walk, Majorelle Garden, and cooking class. Overnight Marrakech.',
      'Day 2: Drive into the High Atlas. Berber village visit. Cross Tizi n\'Tichka. Ait Benhaddou kasbah. Overnight Dades.',
      'Day 3: Todra Gorge hike. Continue to Merzouga. Camel trek and desert camp dinner. Overnight under the stars.',
      'Day 4: Sahara sunrise. Drive to Fes via Ziz Valley and Middle Atlas. Cedar forest stop at Azrou. Overnight Fes.',
      'Day 5: Full day Fes medina: tanneries, Bou Inania Madrasa, artisan workshops, and food tasting walk. Overnight Fes.',
      'Day 6: Drive to Chefchaouen, the blue city. Explore the medina, Spanish mosque viewpoint, and Ras el-Maa waterfall. Overnight Chefchaouen.',
      'Day 7: Morning in Chefchaouen. Drive to Rabat for Hassan Tower and Kasbah Udayas. Continue to Casablanca. Tour ends.',
    ],
    included: ['All transport in private vehicle', 'Licensed bilingual guide throughout', '6 nights accommodation (riads and desert camp)', 'Camel trek and desert experience', 'All breakfasts, 3 dinners', 'Marrakech cooking class', 'All entrance fees'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICING TIERS
   ═══════════════════════════════════════════════════════════════ */

const pricingTiers = [
  { tourType: 'Half-day city walking tour (group)', price: 'From 400 MAD', note: '3-4 hrs, licensed guide, up to 12 people' },
  { tourType: 'Full-day nature tour (group)', price: 'From 600 MAD', note: 'Transport, guide, lunch included' },
  { tourType: 'Half-day private city tour', price: 'From 800 MAD', note: 'Private guide, flexible itinerary' },
  { tourType: 'Full-day private nature tour', price: 'From 1,200 MAD', note: 'Private 4x4, guide, lunch included' },
  { tourType: 'Cooking class with market visit', price: 'From 500 MAD', note: '4-6 hrs, ingredients and meal included' },
  { tourType: 'Artisan workshop tour', price: 'From 400 MAD', note: '3-4 hrs, hands-on activities' },
  { tourType: '3-day Sahara desert (group)', price: 'From 2,500 MAD', note: 'Transport, meals, desert camp, guide' },
  { tourType: '3-day Sahara desert (private)', price: 'From 4,500 MAD', note: 'Private 4x4, luxury camp option' },
  { tourType: '5-day Imperial Cities (group)', price: 'From 5,000 MAD', note: 'Transport, hotels, guide, breakfasts' },
  { tourType: '5-day Imperial Cities (private)', price: 'From 8,000 MAD', note: 'Private vehicle, riad stays, all meals' },
  { tourType: '7-day Grand Tour (group)', price: 'From 8,500 MAD', note: 'Comprehensive, all-inclusive' },
  { tourType: '7-day Grand Tour (private)', price: 'From 15,000 MAD', note: 'Luxury riads, private guide, all meals' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SEASON BY TOUR TYPE
   ═══════════════════════════════════════════════════════════════ */

const seasonGuide = [
  { tourType: 'High Atlas Trekking', icon: Mountain, best: 'June - September', good: 'April - May, October', avoid: 'November - March (snow at altitude)', note: 'Summer offers snow-free passes and clear skies. Spring brings wildflowers. Toubkal summit is accessible June-October.' },
  { tourType: 'Sahara Desert Tours', icon: Compass, best: 'October - March', good: 'April, September', avoid: 'June - August (extreme heat, 45C+)', note: 'Winter nights can drop below 5C. Bring layers. Spring and autumn offer the most comfortable temperatures.' },
  { tourType: 'Birdwatching', icon: Binoculars, best: 'October - March (migration)', good: 'April - May (spring breeding)', avoid: 'No bad season, but summer has fewer species', note: 'Peak migration at Merja Zerga is November-January. Northern Bald Ibis at Souss-Massa is year-round.' },
  { tourType: 'Medina & Cultural Tours', icon: Building, best: 'March - May, September - November', good: 'Year-round', avoid: 'July - August (extreme heat in Marrakech/Fes)', note: 'Walking tours in 40C heat are exhausting. Spring and autumn offer comfortable temperatures for exploring on foot.' },
  { tourType: 'Garden & Botanical Tours', icon: TreeDeciduous, best: 'February - April (spring bloom)', good: 'October - November', avoid: 'July - August (gardens are parched)', note: 'The spring bloom is spectacular. Roses in Dades Valley peak in May. Almond blossoms appear in February.' },
  { tourType: 'Coastal Wildlife', icon: Waves, best: 'June - October (whale watching)', good: 'Year-round for general wildlife', avoid: 'No bad season for Atlantic coast', note: 'Essaouira is comfortable year-round due to Atlantic breezes. Dakhla lagoon is best in winter for migrants.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoNatureToursPage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Nature &amp; Cultural Tours</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Guided Experiences &amp; Tour Packages
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Nature &amp; Cultural Tours:
            <br className="hidden md:block" /> Best Guided Experiences
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Atlas Mountain treks and Sahara desert expeditions to medina walking tours
            and artisan workshops. Day tours from 400 MAD, multi-day packages from 2,500 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a World-Class Tour Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of those rare countries where nature and culture intertwine so deeply that
                you cannot experience one without the other. The same mountain that hosts endangered Barbary
                macaques is also home to Berber families who have farmed its terraced slopes for centuries.
                The same desert that stretches to the horizon holds the stories of nomadic tribes who navigated
                it by starlight for millennia.
              </p>
              <p>
                From the snow-capped peaks of the High Atlas to the golden dunes of the Sahara, from the
                ancient medinas of Fes and Marrakech to the blue-washed streets of Chefchaouen, Morocco
                offers a staggering diversity of guided experiences. Whether you want to trek through cedar
                forests spotting rare birds, learn to cook a perfect tagine in a riad kitchen, or follow a
                historian through 1,000-year-old palace corridors, there is a tour here that will transform
                your understanding of this extraordinary country.
              </p>
              <p>
                This guide covers every type of nature and cultural tour available in Morocco, with honest
                pricing, detailed itineraries, operator recommendations, and the seasonal knowledge you need
                to plan the perfect trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nature Tour Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nature Tour Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s landscapes range from 4,000m peaks to Atlantic coastline, Sahara dunes to lush oases. These are the best ways to explore them.
          </p>

          <div className="space-y-8">
            {natureTourTypes.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TourIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tour.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {tour.region}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {tour.season}
                        </span>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                      {tour.price}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tour.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {tour.highlights.map((highlight, i) => (
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

      {/* ── Cultural Tour Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Tour Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s living culture is its greatest treasure. These tours connect you with the artisans, cooks, historians, and families who keep traditions alive.
          </p>

          <div className="space-y-8">
            {culturalTourTypes.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <TourIcon className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tour.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {tour.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {tour.duration}
                        </span>
                      </div>
                    </div>
                    <div className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] shrink-0">
                      {tour.price}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tour.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {tour.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
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

      {/* ── Pricing Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tour Pricing Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for guided nature and cultural tours across Morocco in 2026.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies during peak months (October-April) and holiday periods, when prices may increase by 15-30%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Tour Type</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Includes</div>
              </div>
              {pricingTiers.map((item, i) => (
                <div
                  key={item.tourType}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.tourType}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Private vs Group Tours ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Private Tours vs. Group Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both have their strengths. Here is how they compare so you can choose the right format for your trip.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {tourComparison.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Private Tour</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.privateText}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Group Tour</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.groupText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Multi-Day Itineraries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Multi-Day Tour Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most popular multi-day tour packages in Morocco, with detailed day-by-day breakdowns.
          </p>

          <div className="space-y-10">
            {multiDayItineraries.map((itinerary) => {
              const ItineraryIcon = itinerary.icon;
              return (
                <div key={itinerary.name} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <ItineraryIcon className="w-6 h-6" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">
                        {itinerary.name}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {itinerary.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        {itinerary.price}
                      </span>
                    </div>
                    <p className="text-sm text-white/70 mt-2">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />
                      {itinerary.route}
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      {itinerary.highlights.map((day, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-[var(--color-accent)]">{i + 1}</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)]">{day}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-[var(--border-color)] pt-4">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        What&apos;s Included:
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {itinerary.included.map((item, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Tour Operators ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Recommended Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Vetted operators with strong reputations, licensed guides, and consistent quality. Prices vary by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topOperators.map((op) => {
              const OpIcon = op.icon;
              return (
                <div key={op.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OpIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {op.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{op.specialty}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {op.priceRange}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-gold)]">
                      <Star className="w-3 h-3" />
                      {op.rating}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{op.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Season by Tour Type ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season by Tour Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing matters. Here is when to book each type of tour for the best weather, wildlife, and experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.tourType} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.tourType}
                    </h3>
                  </div>
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-16 font-semibold text-green-700">Best:</span>
                      <span className="text-[var(--text-secondary)]">{season.best}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-16 font-semibold text-[var(--color-gold)]">Good:</span>
                      <span className="text-[var(--text-secondary)]">{season.good}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-16 font-semibold text-red-600">Avoid:</span>
                      <span className="text-[var(--text-secondary)]">{season.avoid}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{season.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Booking Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Verify Licensed Guides
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco requires licensed guides for medina tours and national parks. Ask to see the guide&apos;s official
                carte professionnelle. Unlicensed guides risk fines and often provide inaccurate information. Legitimate
                operators are happy to confirm their licensing.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Understand What Is Included
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always confirm whether transport, meals, entrance fees, and tips are included in the quoted price.
                Budget tours often exclude lunches and entrance fees, which can add from 200-500 MAD per day. Get
                a written breakdown before committing.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Calendar className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Early for Peak Season
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                October through April is peak season for most Morocco tours. The best operators and desert camps
                fill up weeks in advance. Book at least 2-4 weeks ahead for multi-day tours during peak months. Solo
                day tours can usually be arranged 2-3 days ahead.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Avoid Touts and Unofficial Offers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In tourist areas, you will be approached by people offering tours at low prices. These are often
                middlemen who take a commission and pass you to an unknown operator. Book directly with
                established operators or through your riad, which can vouch for the quality.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ask About Photography Policies
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Some cultural sites and artisan workshops prohibit photography. Ask your guide in advance. In Berber
                villages, always ask permission before photographing people. A respectful approach goes a long way and
                often leads to more genuine interactions and better photos.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tip Your Guides Fairly
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tipping is customary in Morocco. For a day tour guide, from 100-200 MAD is appropriate. For multi-day
                tours, from 100-150 MAD per day for the guide and from 50-100 MAD per day for the driver. Tips for
                cooking class hosts are from 50-100 MAD. Always tip in cash.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year for nature tours in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March-May) and autumn (September-November) are ideal for most nature tours. Summer is best
                for High Atlas trekking at altitude, where temperatures remain comfortable. Winter is perfect for
                Sahara desert tours and birdwatching in coastal wetlands. Avoid the Sahara in July and August when
                temperatures regularly exceed 45 degrees Celsius.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much do guided tours in Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Day tours start from 400 MAD per person for group cultural tours and from 600 MAD for nature tours
                with transport. Private day tours start from 800 MAD. Multi-day packages range from 2,500 MAD for a
                3-day desert adventure to from 8,500 MAD or more for a 7-day grand tour. Prices vary by season,
                group size, accommodation tier, and operator. Seasonal pricing can increase rates by 15-30% during
                peak months.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I book a private or group tour in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Group tours are more affordable and social, ideal for solo travelers and those on a budget. Private
                tours offer flexibility, personalized itineraries, and a deeper cultural experience. For medina walks
                and cooking classes, smaller groups or private options allow more interaction. For desert expeditions,
                the choice often comes down to luxury camp (private) versus standard camp (group).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Morocco nature tours suitable for families with children?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, many tours are family-friendly. Garden tours, easy nature walks, short camel rides, and cooking
                classes work well for children of all ages. For trekking, choose routes graded as easy. Most reputable
                operators offer family-specific itineraries with shorter walking distances, engaging activities, and
                kid-friendly meals. Children under 12 often receive discounted rates.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to be physically fit for Atlas Mountain treks?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                It depends on the route. Easy valley walks in the Ourika Valley or Ait Bouguemez require only basic
                fitness. Multi-day treks to the Toubkal summit at 4,167m require good cardiovascular fitness and some
                prior hiking experience. Most operators offer graded options from easy half-day walks to challenging
                multi-day summit attempts. Acclimatization days are built into longer treks to reduce altitude sickness risk.
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
            <Link href="/morocco-outdoor-activities" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Outdoor Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, climbing, surfing, and adventure sports across Morocco&apos;s diverse landscapes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-wildlife-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Binoculars className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wildlife Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s unique fauna from Barbary macaques to flamingos and endangered species.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Palette className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Traditions, festivals, music, art, and the rich cultural heritage of Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about Sahara desert experiences, camps, camel treks, and stargazing.
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
