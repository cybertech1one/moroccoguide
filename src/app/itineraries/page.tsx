import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Route,
  Clock,
  MapPin,
} from 'lucide-react';
import ItinerariesClientSection from './ItinerariesClient';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Itineraries - Suggested Routes & Travel Plans | CityGuide',
  description:
    'Discover expertly crafted Morocco itineraries for every travel style. From 3-day weekend escapes to 21-day full country loops, find routes covering Marrakech, Fes, the Sahara, Atlas Mountains, and Atlantic coast.',
  keywords: [
    'Morocco itinerary',
    'Morocco travel route',
    'Morocco trip planner',
    'Marrakech to Fes route',
    'Sahara desert tour',
    'Morocco 7 day itinerary',
    'Morocco 10 day itinerary',
    'Morocco backpacking route',
    'Morocco honeymoon',
    'Morocco family trip',
    'Morocco luxury travel',
    'Morocco budget travel',
  ],
  openGraph: {
    title: 'Morocco Itineraries - Suggested Routes & Travel Plans | CityGuide',
    description:
      'Expert travel itineraries for Morocco. From weekend breaks to month-long adventures, find your perfect route through the Kingdom.',
    url: 'https://cityguide.ma/itineraries',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Scenic Morocco travel route through the desert and mountains',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/itineraries' },
};

/* ═══════════════════════════════════════════════════════════════
   ITINERARIES DATA
   ═══════════════════════════════════════════════════════════════ */

type BudgetLevel = 'budget' | 'mid-range' | 'luxury';
type TravelStyle =
  | 'adventure'
  | 'cultural'
  | 'food'
  | 'family'
  | 'photography'
  | 'romance'
  | 'relaxation';

interface Itinerary {
  name: string;
  slug: string;
  durationDays: number;
  description: string;
  cities: string[];
  highlights: string[];
  budgetLevel: BudgetLevel;
  travelStyle: TravelStyle;
  image: string;
}

const itineraries: Itinerary[] = [
  {
    name: "First Timer's Morocco",
    slug: 'first-timers-morocco',
    durationDays: 10,
    description:
      "The essential introduction to Morocco, hitting all the iconic highlights at a comfortable pace. Begin in Marrakech's sensory overload of souks and palaces, wind through the blue-painted streets of Chefchaouen, explore Fes's ancient medina -- the world's largest car-free urban area -- and end in cosmopolitan Tangier where Africa gazes across to Europe. This route covers diverse landscapes from mountains to coast and gives you the most complete first impression of the Kingdom.",
    cities: ['Marrakech', 'Fes', 'Chefchaouen', 'Tangier'],
    highlights: [
      'Jemaa el-Fnaa at sunset',
      'Fes medina guided tour',
      'Blue streets of Chefchaouen',
      'Tangier Kasbah Museum',
      'Atlas Mountain views',
      'Traditional hammam experience',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Imperial Cities Circuit',
    slug: 'imperial-cities-circuit',
    durationDays: 7,
    description:
      "A focused journey through Morocco's four royal capitals, each revealing a different chapter of the nation's thousand-year history. Rabat's modern elegance, Meknes's grandiose Ismaili architecture, Fes's medieval scholarly splendor, and Marrakech's vibrant Almoravid heritage create a tapestry of dynasties. Along the way you will visit Roman ruins at Volubilis, explore Meknes's vast royal granaries, and navigate the world's oldest functioning university in Fes.",
    cities: ['Rabat', 'Meknes', 'Fes', 'Marrakech'],
    highlights: [
      'Hassan Tower and Mausoleum',
      'Volubilis Roman ruins',
      'Bab Mansour gate',
      'Fes tanneries',
      'Majorelle Garden',
      'Royal Palace visits',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
  },
  {
    name: 'Sahara & Kasbahs',
    slug: 'sahara-and-kasbahs',
    durationDays: 5,
    description:
      "An action-packed desert adventure from Marrakech through the dramatic Atlas Mountains and along the legendary Route of a Thousand Kasbahs. Cross the Tizi n'Tichka pass at 2,260 meters, explore the UNESCO-listed Ait Benhaddou, traverse the Dades and Todra Gorges, and spend an unforgettable night under the stars in the golden dunes of Erg Chebbi at Merzouga. Camel treks, sandboarding, and Berber campfire music make this the adventure of a lifetime.",
    cities: ['Marrakech', 'Ouarzazate', 'Merzouga', 'Tinghir'],
    highlights: [
      'Ait Benhaddou kasbah',
      'Camel trek in Erg Chebbi',
      'Todra Gorge hike',
      'Sahara desert camp',
      'Atlas Mountain pass',
      'Dades Valley drive',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'adventure',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
  },
  {
    name: 'Surf & Chill Atlantic',
    slug: 'surf-and-chill-atlantic',
    durationDays: 7,
    description:
      "Morocco's Atlantic coast is a surfer's paradise with consistent swells, world-class breaks, and a laid-back vibe. Start in Agadir's beach resorts, make your way to the legendary surf village of Taghazout where point breaks like Anchor Point deliver epic rides, then slow down in Essaouira's windy medina where Gnaoua music drifts through the Portuguese ramparts. This route is all about ocean living, fresh seafood, golden sunsets, and the freedom of the open Atlantic.",
    cities: ['Agadir', 'Taghazout', 'Essaouira'],
    highlights: [
      'Surf lessons at Taghazout',
      'Essaouira port seafood',
      'Anchor Point break',
      'Medina art galleries',
      'Paradise Valley trip',
      'Sunset camel rides on beach',
    ],
    budgetLevel: 'budget',
    travelStyle: 'relaxation',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
  },
  {
    name: 'Luxury Morocco',
    slug: 'luxury-morocco',
    durationDays: 12,
    description:
      "Experience the Kingdom at its most opulent. Sleep in palatial riads, dine in Michelin-worthy restaurants, and travel in air-conditioned comfort between Morocco's greatest treasures. From Casablanca's Art Deco glamor and Rabat's contemporary art scene, through Fes's exquisite palace hotels, to a luxury desert camp with private dunes in the Sahara, and ending in Marrakech's legendary La Mamounia or Royal Mansour. Private guides, spa hammams, and exclusive rooftop dining elevate every moment.",
    cities: ['Casablanca', 'Rabat', 'Fes', 'Merzouga', 'Marrakech'],
    highlights: [
      'Royal Mansour or La Mamounia stay',
      'Private desert glamping',
      'Cooking class with a palace chef',
      'Helicopter Atlas tour',
      'Private medina shopping guide',
      'Spa hammam with argan oil ritual',
    ],
    budgetLevel: 'luxury',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  },
  {
    name: 'Morocco in a Week',
    slug: 'morocco-in-a-week',
    durationDays: 7,
    description:
      "The most popular Morocco route, efficiently combining the country's three greatest hits in seven days. Start in Marrakech for two days of medina exploration, drive over the Atlas Mountains to spend a magical night in the Sahara at Merzouga, then head north to Fes for two days immersed in the world's oldest medieval city. This classic route covers deserts, mountains, and ancient cities without feeling rushed, making it ideal for travelers with limited time.",
    cities: ['Marrakech', 'Merzouga', 'Fes'],
    highlights: [
      'Marrakech souks and palaces',
      'Atlas Mountain crossing',
      'Sahara camel trek and camp',
      'Fes medina deep dive',
      'Berber village visit',
      'Traditional riad stays',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
  },
  {
    name: "Foodie's Morocco",
    slug: 'foodies-morocco',
    durationDays: 8,
    description:
      "A gastronomic journey through Morocco's culinary capitals. Master the art of tagine in Marrakech cooking classes, hunt for street food treasures in Fes's ancient medina alleys, and feast on the freshest Atlantic seafood in Essaouira's harbour. Along the way, visit a saffron farm in Taliouine, learn to bake traditional bread in a village communal oven, and discover the spice markets that have supplied traders for a thousand years. Moroccan cuisine is the world's most underrated, and this trip proves it.",
    cities: ['Marrakech', 'Fes', 'Essaouira'],
    highlights: [
      'Marrakech cooking class',
      'Fes street food tour',
      'Essaouira fish market',
      'Spice souk deep dive',
      'Mint tea ceremonies',
      'Traditional bakery visit',
      'Argan oil cooperative',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'food',
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
  },
  {
    name: 'Off the Beaten Path',
    slug: 'off-the-beaten-path',
    durationDays: 14,
    description:
      "For travelers who have seen Marrakech and Fes, this route ventures into Morocco's hidden corners that most tourists never reach. Begin in Tangier's literary Beat Generation haunts, travel east along the wild Mediterranean Rif coast to Al Hoceima's stunning beaches, continue to the frontier city of Oujda, then south through the eastern desert to Merzouga. The journey ends at Dakhla, Morocco's remote Atlantic kite-surfing paradise on the edge of the Western Sahara, where flamingos wade in lagoons and the desert meets the sea.",
    cities: ['Tangier', 'Al Hoceima', 'Oujda', 'Merzouga', 'Dakhla'],
    highlights: [
      'Mediterranean Rif coastline',
      'Al Hoceima national park',
      'Oujda Lalla Aicha park',
      'Eastern desert landscapes',
      'Dakhla kite lagoon',
      'Flamingo colonies',
      'Frontier markets',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'adventure',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80',
  },
  {
    name: 'Weekend in Marrakech',
    slug: 'weekend-in-marrakech',
    durationDays: 3,
    description:
      "Three perfectly curated days in the Red City. Day one plunges into the medina -- Bahia Palace, the souks, and sunset from a rooftop overlooking Jemaa el-Fnaa. Day two escapes to the Majorelle Garden and the Yves Saint Laurent Museum before a traditional hammam and cooking class. Day three ventures to the Ourika Valley in the Atlas foothills for waterfalls and a Berber lunch. Every meal, every moment, every corner of this itinerary is designed to deliver maximum Marrakech magic in minimal time.",
    cities: ['Marrakech'],
    highlights: [
      'Jemaa el-Fnaa evening spectacle',
      'Bahia Palace tour',
      'Majorelle Garden',
      'Traditional hammam',
      'Ourika Valley day trip',
      'Rooftop dinner',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
  },
  {
    name: 'Atlas Mountains Trek',
    slug: 'atlas-mountains-trek',
    durationDays: 5,
    description:
      "A challenging mountain adventure through North Africa's highest peaks. Start in the trekking hub of Imlil, ascend through Berber villages clinging to terraced hillsides, summit Jebel Toubkal at 4,167 meters -- the highest peak in North Africa -- and descend through the lush Ourika Valley with its waterfalls and saffron fields. This trek rewards with panoramic views of snow-capped peaks, encounters with welcoming Berber communities, and the satisfaction of reaching Africa's rooftop.",
    cities: ['Imlil', 'Toubkal', 'Ourika Valley'],
    highlights: [
      'Toubkal summit (4,167m)',
      'Berber village homestay',
      'Ourika Valley waterfalls',
      'Mountain refuge overnight',
      'Panoramic Atlas views',
      'Traditional Berber meals',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'adventure',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Photography Tour',
    slug: 'photography-tour',
    durationDays: 10,
    description:
      "Morocco is a photographer's dream, and this itinerary is designed to capture the country's most photogenic moments. Start in Chefchaouen's impossibly blue alleyways during golden hour, photograph the ancient tanneries and ornate medersas of Fes, chase the light across the rippled dunes of the Sahara at sunrise, and end in Marrakech where the chaos of Jemaa el-Fnaa provides endless street photography opportunities. Each location has been chosen for its visual impact and optimal light conditions.",
    cities: ['Chefchaouen', 'Fes', 'Merzouga', 'Marrakech'],
    highlights: [
      'Chefchaouen blue streets',
      'Fes tannery aerial views',
      'Sahara dune sunrise',
      'Marrakech street photography',
      'Atlas Mountain panoramas',
      'Medina doorway details',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'photography',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
  },
  {
    name: 'Family Morocco',
    slug: 'family-morocco',
    durationDays: 10,
    description:
      "A family-friendly itinerary that balances cultural immersion with activities kids will love. Marrakech offers cooking classes, camel rides in the Palmeraie, and the magic of Jemaa el-Fnaa's entertainers. Essaouira's wide beach is perfect for sandcastle-building and beginner surfing. Agadir provides resort-style relaxation with safe swimming beaches and a crocodile park. The pace is relaxed with plenty of downtime, short travel days, and accommodations chosen for family comfort and pool access.",
    cities: ['Marrakech', 'Essaouira', 'Agadir'],
    highlights: [
      'Camel ride in Palmeraie',
      'Essaouira beach day',
      'Kids cooking class',
      'Crocoparc Agadir',
      'Horse-drawn carriage ride',
      'Family riad with pool',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'family',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
  },
  {
    name: 'Romantic Getaway',
    slug: 'romantic-getaway',
    durationDays: 7,
    description:
      "Morocco is one of the world's most romantic destinations, and this itinerary is crafted for couples. Begin in Marrakech with a private riad, couples hammam, and candlelit rooftop dinners overlooking the medina. Journey through the dramatic Ouarzazate landscape -- the backdrop for countless romance films -- staying in a kasbah hotel. End in Fes with its intimate riads, serene Andalusian gardens, and the timeless beauty of its medieval architecture. Every accommodation and restaurant has been selected for intimacy and ambiance.",
    cities: ['Marrakech', 'Ouarzazate', 'Fes'],
    highlights: [
      'Couples hammam spa',
      'Rooftop candlelit dinner',
      'Kasbah hotel stay',
      'Hot air balloon at sunrise',
      'Private garden lunch in Fes',
      'Sunset horse-drawn carriage',
    ],
    budgetLevel: 'luxury',
    travelStyle: 'romance',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
  },
  {
    name: 'Cultural Deep Dive',
    slug: 'cultural-deep-dive',
    durationDays: 14,
    description:
      "For the serious culture traveler, this two-week itinerary leaves no stone unturned. Visit all four imperial cities, explore the Roman ruins of Volubilis, learn about Berber traditions in remote Atlas villages, experience a night with a nomadic family in the Sahara, attend a Gnaoua music ceremony in Essaouira, and study the Islamic architecture that makes Morocco a UNESCO treasure. This route connects with local artisans, scholars, and musicians to provide the deepest possible understanding of Moroccan civilization.",
    cities: ['Casablanca', 'Rabat', 'Meknes', 'Fes', 'Merzouga', 'Marrakech', 'Essaouira'],
    highlights: [
      'All four imperial cities',
      'Volubilis archaeological site',
      'Desert nomad encounter',
      'Gnaoua music ceremony',
      'Koranic school visit in Fes',
      'Artisan workshop tours',
      'Hassan II Mosque interior',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
  },
  {
    name: 'Budget Backpacker',
    slug: 'budget-backpacker',
    durationDays: 21,
    description:
      "Three weeks, one incredible country, maximum experience on minimum budget. This full-loop backpacking route connects Morocco's cheapest hostels, most affordable eats, and free attractions with CTM buses and shared grand taxis. Start and end in Marrakech, sweeping through the Sahara, up to the Rif Mountains, along the Mediterranean coast, and back down through the imperial cities. Includes tips for free walking tours, budget hammams, and negotiating at souks. Morocco is one of the world's best-value destinations, and this proves it.",
    cities: [
      'Marrakech',
      'Ouarzazate',
      'Merzouga',
      'Fes',
      'Chefchaouen',
      'Tangier',
      'Rabat',
      'Essaouira',
    ],
    highlights: [
      'CTM bus full loop',
      'Desert camp under stars',
      'Free walking tours',
      'Street food trail',
      'Budget riad stays',
      'Chefchaouen hiking',
      'Essaouira ramparts',
      'Medina exploration',
    ],
    budgetLevel: 'budget',
    travelStyle: 'adventure',
    image: 'https://images.unsplash.com/photo-1553522991-71439aa3bf8c?w=800&q=80',
  },
  {
    name: 'Wellness & Yoga Retreat',
    slug: 'wellness-yoga-retreat',
    durationDays: 7,
    description:
      "Reconnect mind, body, and spirit in Morocco's most serene settings. Begin with yoga sessions overlooking the Atlas Mountains in a luxury eco-lodge near Marrakech, continue to a traditional hammam spa experience in the medina, then journey to Essaouira's peaceful coastline for beachside meditation and sound healing sessions. The itinerary incorporates traditional Moroccan wellness practices including argan oil treatments, herbal steam baths, and farm-to-table organic cuisine that nourishes as much as it delights.",
    cities: ['Marrakech', 'Atlas Mountains', 'Essaouira'],
    highlights: [
      'Mountain yoga sessions',
      'Traditional hammam ritual',
      'Beach meditation',
      'Argan oil spa treatment',
      'Organic farm visit',
      'Sound healing ceremony',
    ],
    budgetLevel: 'luxury',
    travelStyle: 'relaxation',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
  },
  {
    name: 'Saharan Stargazing Expedition',
    slug: 'saharan-stargazing',
    durationDays: 4,
    description:
      "Escape the light pollution of modern life for an extraordinary astronomical adventure in the Sahara. Travel from Marrakech to the Draa Valley and onward to the towering dunes of Erg Chebbi, where some of the darkest skies in the Northern Hemisphere reveal the Milky Way in breathtaking detail. Guided stargazing sessions with telescopes, night photography workshops, and Berber astronomy storytelling around campfires make this a once-in-a-lifetime experience for anyone who has ever looked up and wondered.",
    cities: ['Marrakech', 'Zagora', 'Merzouga'],
    highlights: [
      'Telescope stargazing session',
      'Erg Chebbi night photography',
      'Berber astronomy stories',
      'Draa Valley oasis drive',
      'Desert sunrise experience',
      'Campfire dinner under stars',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'adventure',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
  },
  {
    name: 'Artisan Craft Trail',
    slug: 'artisan-craft-trail',
    durationDays: 9,
    description:
      "Follow the thread of Morocco's legendary handicraft traditions from city to city. In Fes, watch master brass-workers, tanners, and zellige tile-cutters in workshops unchanged since the Middle Ages. In Marrakech, discover leather artisans and woodcarvers in the souk's hidden ateliers. In Essaouira, visit thuya wood marquetry studios. Along the way, try your hand at pottery in Safi -- Morocco's ceramics capital -- and weave a carpet with Berber women in the Middle Atlas. Each piece you encounter tells a story of centuries-old tradition.",
    cities: ['Fes', 'Safi', 'Marrakech', 'Essaouira'],
    highlights: [
      'Fes tannery and zellige workshops',
      'Safi pottery studios',
      'Marrakech leather ateliers',
      'Thuya wood carving',
      'Carpet weaving lesson',
      'Souk shopping with artisans',
    ],
    budgetLevel: 'mid-range',
    travelStyle: 'cultural',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
  },
];

const BUDGET_LABELS: Record<BudgetLevel, string> = {
  budget: 'Budget',
  'mid-range': 'Mid-Range',
  luxury: 'Luxury',
};

const STYLE_LABELS: Record<TravelStyle, string> = {
  adventure: 'Adventure',
  cultural: 'Cultural',
  food: 'Food & Drink',
  family: 'Family',
  photography: 'Photography',
  romance: 'Romance',
  relaxation: 'Relaxation',
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Morocco Itineraries - Suggested Routes & Travel Plans',
    description:
      'Expert-crafted travel itineraries for Morocco, covering diverse routes from weekend breaks to multi-week adventures across the Kingdom.',
    url: 'https://cityguide.ma/itineraries',
    numberOfItems: itineraries.length,
    itemListElement: itineraries.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristTrip',
        name: it.name,
        description: it.description,
        url: `https://cityguide.ma/itineraries/${it.slug}`,
        image: it.image,
        touristType: STYLE_LABELS[it.travelStyle],
        itinerary: {
          '@type': 'ItemList',
          numberOfItems: it.cities.length,
          itemListElement: it.cities.map((city, ci) => ({
            '@type': 'ListItem',
            position: ci + 1,
            item: {
              '@type': 'Place',
              name: city,
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'MA',
              },
            },
          })),
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function ItinerariesPage() {
  const totalCities = [...new Set(itineraries.flatMap((it) => it.cities))].length;
  const avgDuration = Math.round(
    itineraries.reduce((sum, it) => sum + it.durationDays, 0) / itineraries.length
  );
  const shortestTrip = Math.min(...itineraries.map((it) => it.durationDays));
  const longestTrip = Math.max(...itineraries.map((it) => it.durationDays));

  return (
    <>
      <JsonLd />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="container-morocco pt-4 pb-2"
      >
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link
              href="/"
              className="hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li className="text-text-primary font-medium">Itineraries</li>
        </ol>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-[var(--color-secondary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Scenic route through Morocco with mountains and desert landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Plan Your Journey
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Suggested Itineraries
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From weekend escapes to month-long adventures, our expertly crafted
              routes take you through Morocco&apos;s most extraordinary landscapes,
              cities, and cultural experiences.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {itineraries.length}
                </p>
                <p className="text-sm text-white/70">Routes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {totalCities}
                </p>
                <p className="text-sm text-white/70">Destinations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {avgDuration}
                </p>
                <p className="text-sm text-white/70">Avg. Days</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {shortestTrip}-{longestTrip}
                </p>
                <p className="text-sm text-white/70">Day Range</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Intro + Quick Stats ── */}
      <section className="container-morocco py-10 md:py-14">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Find Your Perfect Morocco Route
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Whether you have three days or three weeks, Morocco rewards every
            kind of traveler. Filter by duration, budget, and travel style to
            find the itinerary that matches your dream trip.
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="card-moroccan p-4 text-center">
            <Clock className="w-5 h-5 text-[var(--color-green)] mx-auto mb-2" />
            <p className="font-heading font-semibold text-text-primary">Short Breaks</p>
            <p className="text-sm text-text-muted">3-5 days</p>
          </div>
          <div className="card-moroccan p-4 text-center">
            <Route className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
            <p className="font-heading font-semibold text-text-primary">Classic Routes</p>
            <p className="text-sm text-text-muted">7-10 days</p>
          </div>
          <div className="card-moroccan p-4 text-center">
            <MapPin className="w-5 h-5 text-[var(--color-secondary)] mx-auto mb-2" />
            <p className="font-heading font-semibold text-text-primary">Deep Exploration</p>
            <p className="text-sm text-text-muted">12-14 days</p>
          </div>
          <div className="card-moroccan p-4 text-center">
            <Clock className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="font-heading font-semibold text-text-primary">Grand Tour</p>
            <p className="text-sm text-text-muted">21+ days</p>
          </div>
        </div>

        {/* ── Client Section ── */}
        <ItinerariesClientSection
          itineraries={itineraries}
          budgetLabels={BUDGET_LABELS}
          styleLabels={STYLE_LABELS}
        />
      </section>
    </>
  );
}
