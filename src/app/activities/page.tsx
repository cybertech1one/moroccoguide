import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Home,
  Mountain,
  Palette,
  Heart,
  TreePine,
  Utensils,
  ShoppingBag,
  Music,
  Dumbbell,
  Waves,
  Star,
  Clock,
  MapPin,
  Lightbulb,
  Calendar,
  Sun,
  Thermometer,
  Users,
  CheckCircle2,
} from 'lucide-react';
import ActivitiesClientSection from './ActivitiesClient';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Activities & Things to Do | Adventure, Culture & Wellness',
  description:
    'Discover 30+ unique activities across Morocco. From Sahara camel treks and Atlas Mountain hikes to cooking classes, surfing lessons, and traditional hammam experiences. Book your perfect Moroccan adventure.',
  keywords: [
    'Morocco activities',
    'things to do in Morocco',
    'Sahara camel trek',
    'Morocco cooking class',
    'surfing Taghazout',
    'Atlas Mountains hiking',
    'Morocco hammam',
    'Morocco adventure',
    'hot air balloon Marrakech',
    'Morocco wellness',
    'sandboarding Morocco',
    'Morocco yoga retreat',
    'kiteboarding Dakhla',
    'rock climbing Todra',
    'Morocco pottery workshop',
    'calligraphy class Fes',
    'henna art Morocco',
    'paragliding Agadir',
    'horseback riding Morocco',
    'canyoning Morocco',
  ],
  openGraph: {
    title: 'Morocco Activities & Things to Do - CityGuide',
    description:
      'Explore 30+ incredible activities across Morocco. Adventure, culture, wellness, nature, and more.',
    url: 'https://cityguide.ma/activities',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Camel trekking in the Sahara Desert, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/activities' },
};

/* ================================================================
   ACTIVITIES DATA
   ================================================================ */

type ActivityType =
  | 'adventure'
  | 'cultural'
  | 'wellness'
  | 'nature'
  | 'cooking'
  | 'shopping'
  | 'nightlife'
  | 'sports';

type Difficulty = 'Easy' | 'Moderate' | 'Challenging';

type Season = 'Year-round' | 'Oct-May' | 'Mar-Nov' | 'Jun-Sep' | 'Sep-Mar' | 'Apr-Oct' | 'Nov-Apr';

interface Activity {
  name: string;
  slug: string;
  cityName: string;
  type: ActivityType;
  description: string;
  duration: string;
  priceFromMad: number;
  difficulty: Difficulty;
  image: string;
  rating: number;
  includes: string[];
  bestSeason: Season;
  bestLocations: string[];
}

const activities: Activity[] = [
  {
    name: 'Sahara Camel Trek',
    slug: 'sahara-camel-trek',
    cityName: 'Merzouga',
    type: 'adventure',
    description:
      'Embark on an unforgettable camel trek across the golden dunes of Erg Chebbi. Ride through the Sahara at sunset, spend the night in a luxury desert camp under a blanket of stars, and wake to a stunning sunrise over the sand sea.',
    duration: '2 days',
    priceFromMad: 1200,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    rating: 4.9,
    includes: ['Camel ride', 'Desert camp', 'Dinner & breakfast', 'Sandboarding'],
    bestSeason: 'Oct-May',
    bestLocations: ['Merzouga', 'M\'Hamid', 'Zagora'],
  },
  {
    name: 'Hot Air Balloon Marrakech',
    slug: 'hot-air-balloon-marrakech',
    cityName: 'Marrakech',
    type: 'adventure',
    description:
      'Soar above the palm groves and Atlas Mountain foothills at sunrise in a hot air balloon. Enjoy breathtaking panoramic views of Marrakech, the Agafay Desert, and Berber villages from above.',
    duration: '4 hours',
    priceFromMad: 2000,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1507041957456-9c397ce39c97?w=800&q=80',
    rating: 4.8,
    includes: ['Hotel pickup', 'Balloon flight', 'Berber breakfast', 'Certificate'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech'],
  },
  {
    name: 'Surfing Lesson Taghazout',
    slug: 'surfing-lesson-taghazout',
    cityName: 'Taghazout',
    type: 'sports',
    description:
      'Catch your first wave or perfect your technique at Morocco\'s premier surf destination. Professional instructors guide you through world-class breaks along the stunning Atlantic coastline.',
    duration: '3 hours',
    priceFromMad: 350,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    rating: 4.7,
    includes: ['Wetsuit & board', 'Instructor', 'Photos', 'Insurance'],
    bestSeason: 'Sep-Mar',
    bestLocations: ['Taghazout', 'Essaouira', 'Imsouane', 'Sidi Kaouki'],
  },
  {
    name: 'Cooking Class Marrakech',
    slug: 'cooking-class-marrakech',
    cityName: 'Marrakech',
    type: 'cooking',
    description:
      'Learn the secrets of Moroccan cuisine in a traditional riad kitchen. Visit the spice market, then prepare a full meal including tagine, couscous, Moroccan salads, and mint tea with an expert local chef.',
    duration: '5 hours',
    priceFromMad: 500,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=800&q=80',
    rating: 4.9,
    includes: ['Market tour', 'Ingredients', 'Full meal', 'Recipe booklet'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Fes', 'Essaouira', 'Chefchaouen'],
  },
  {
    name: 'Hammam & Spa Experience',
    slug: 'hammam-spa-experience',
    cityName: 'Marrakech',
    type: 'wellness',
    description:
      'Immerse yourself in a centuries-old Moroccan bathing ritual. Experience the steamy hammam with black soap scrub, rhassoul clay mask, and argan oil massage in a beautifully tiled traditional bathhouse.',
    duration: '2 hours',
    priceFromMad: 400,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    rating: 4.8,
    includes: ['Black soap scrub', 'Ghassoul mask', 'Argan oil massage', 'Mint tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Fes', 'Essaouira', 'Casablanca'],
  },
  {
    name: 'Atlas Mountains Day Hike',
    slug: 'atlas-mountains-day-hike',
    cityName: 'Imlil',
    type: 'nature',
    description:
      'Trek through the spectacular High Atlas Mountains with a certified Berber guide. Hike past walnut groves, waterfalls, and traditional mud-brick villages with stunning views of North Africa\'s highest peaks.',
    duration: '8 hours',
    priceFromMad: 600,
    difficulty: 'Challenging',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    rating: 4.7,
    includes: ['Guide', 'Lunch', 'Transport', 'Mule support'],
    bestSeason: 'Mar-Nov',
    bestLocations: ['Imlil', 'Ouirgane', 'Toubkal', 'Ait Bougmez'],
  },
  {
    name: 'Quad Biking Agafay Desert',
    slug: 'quad-biking-agafay-desert',
    cityName: 'Marrakech',
    type: 'adventure',
    description:
      'Race across the rocky moonscape of the Agafay Desert on a powerful quad bike. Navigate through barren hills and dried lake beds with panoramic views of the Atlas Mountains on the horizon.',
    duration: '3 hours',
    priceFromMad: 700,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80',
    rating: 4.6,
    includes: ['Quad bike', 'Helmet & goggles', 'Guide', 'Mint tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Agafay Desert', 'Palmeraie Marrakech', 'Merzouga'],
  },
  {
    name: 'Fes Pottery Workshop',
    slug: 'fes-pottery-workshop',
    cityName: 'Fes',
    type: 'cultural',
    description:
      'Learn the ancient art of Fassi pottery from master craftsmen in the oldest pottery district in Morocco. Shape clay on a traditional wheel, paint geometric patterns, and take home your own handmade creation.',
    duration: '3 hours',
    priceFromMad: 300,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80',
    rating: 4.7,
    includes: ['Materials', 'Instruction', 'Finished piece', 'Tea & pastries'],
    bestSeason: 'Year-round',
    bestLocations: ['Fes', 'Safi', 'Tamegroute'],
  },
  {
    name: 'Sandboarding Erg Chebbi',
    slug: 'sandboarding-erg-chebbi',
    cityName: 'Merzouga',
    type: 'adventure',
    description:
      'Slide down the towering golden dunes of Erg Chebbi on a sandboard. After a guided hike to the highest dunes, carve your way down the slopes with spectacular Sahara panoramas all around.',
    duration: '2 hours',
    priceFromMad: 250,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    rating: 4.5,
    includes: ['Sandboard', 'Guide', 'Water', 'Photos'],
    bestSeason: 'Oct-May',
    bestLocations: ['Merzouga', 'M\'Hamid'],
  },
  {
    name: 'Paragliding Agadir',
    slug: 'paragliding-agadir',
    cityName: 'Agadir',
    type: 'sports',
    description:
      'Soar like an eagle above the stunning Atlantic coastline on a tandem paragliding flight. Launch from the clifftops near Agadir and glide over golden beaches, fishing villages, and turquoise waters.',
    duration: '1.5 hours',
    priceFromMad: 900,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    rating: 4.8,
    includes: ['Tandem flight', 'Instructor', 'GoPro video', 'Certificate'],
    bestSeason: 'Year-round',
    bestLocations: ['Agadir', 'Imi Ouaddar', 'Legzira'],
  },
  {
    name: 'Rock Climbing Todra Gorge',
    slug: 'rock-climbing-todra-gorge',
    cityName: 'Tinghir',
    type: 'sports',
    description:
      'Scale the magnificent limestone walls of Todra Gorge, one of the world\'s premier rock climbing destinations. Routes for all levels between sheer 300-meter canyon walls with expert instruction.',
    duration: '6 hours',
    priceFromMad: 800,
    difficulty: 'Challenging',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    rating: 4.6,
    includes: ['Equipment', 'Certified guide', 'Lunch', 'Transport'],
    bestSeason: 'Mar-Nov',
    bestLocations: ['Todra Gorge', 'Taghia', 'Anti-Atlas'],
  },
  {
    name: 'Yoga Retreat Essaouira',
    slug: 'yoga-retreat-essaouira',
    cityName: 'Essaouira',
    type: 'wellness',
    description:
      'Find your inner peace with daily yoga sessions overlooking the Atlantic Ocean. Practice on rooftop terraces with ocean breezes, meditate at sunset, and enjoy organic Moroccan cuisine in a bohemian seaside setting.',
    duration: '3 days',
    priceFromMad: 3500,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    rating: 4.9,
    includes: ['Yoga sessions', 'Meditation', 'Meals', 'Accommodation'],
    bestSeason: 'Year-round',
    bestLocations: ['Essaouira', 'Taghazout', 'Paradise Valley', 'Marrakech'],
  },
  {
    name: 'Marrakech Food Tour',
    slug: 'marrakech-food-tour',
    cityName: 'Marrakech',
    type: 'cooking',
    description:
      'Eat your way through the medina with a passionate local foodie guide. Sample 15+ traditional dishes from hidden stalls and legendary eateries, from tangia and tanjia to pastilla, street-side msemen, and the best fresh orange juice in Africa.',
    duration: '4 hours',
    priceFromMad: 450,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1541518763-42d16cdaafd6?w=800&q=80',
    rating: 4.8,
    includes: ['15+ tastings', 'Local guide', 'Water', 'Market insights'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Fes', 'Casablanca'],
  },
  {
    name: 'Chefchaouen Photography Walk',
    slug: 'chefchaouen-photography-walk',
    cityName: 'Chefchaouen',
    type: 'cultural',
    description:
      'Capture the iconic blue streets of the Blue Pearl with a professional photographer guide. Discover hidden corners, learn composition techniques, and visit the most photogenic spots at the perfect golden-hour light.',
    duration: '3 hours',
    priceFromMad: 400,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80',
    rating: 4.7,
    includes: ['Photography guide', 'Editing tips', 'Hidden spots', 'Mint tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Chefchaouen', 'Marrakech', 'Fes', 'Essaouira'],
  },
  {
    name: 'Gnaoua Music Experience',
    slug: 'gnaoua-music-experience',
    cityName: 'Essaouira',
    type: 'cultural',
    description:
      'Immerse yourself in the hypnotic rhythms of Gnaoua, Morocco\'s ancient spiritual music tradition. Attend a private ceremony with master musicians, learn about the history, and try playing the guembri and krakebs.',
    duration: '2.5 hours',
    priceFromMad: 350,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.6,
    includes: ['Live performance', 'Instrument lesson', 'Tea ceremony', 'History talk'],
    bestSeason: 'Year-round',
    bestLocations: ['Essaouira', 'Marrakech'],
  },
  {
    name: 'Argan Oil Workshop',
    slug: 'argan-oil-workshop',
    cityName: 'Essaouira',
    type: 'cultural',
    description:
      'Visit a women\'s cooperative in the argan forest to learn the traditional process of making Morocco\'s liquid gold. Crack argan nuts by hand, press the oil, and discover its culinary and cosmetic uses.',
    duration: '2 hours',
    priceFromMad: 200,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80',
    rating: 4.5,
    includes: ['Workshop', 'Tasting', 'Sample bottle', 'Transport'],
    bestSeason: 'Year-round',
    bestLocations: ['Essaouira', 'Agadir', 'Tiznit'],
  },
  {
    name: 'Horseback Riding Essaouira Beach',
    slug: 'horseback-riding-essaouira-beach',
    cityName: 'Essaouira',
    type: 'nature',
    description:
      'Gallop along the vast, windswept beach of Essaouira on a beautiful Arabian horse. Ride through the dunes, along the shoreline, and past ancient fortifications as the Atlantic waves crash beside you.',
    duration: '2 hours',
    priceFromMad: 500,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    rating: 4.7,
    includes: ['Horse & tack', 'Guide', 'Helmet', 'Insurance'],
    bestSeason: 'Year-round',
    bestLocations: ['Essaouira', 'Oualidia', 'Agadir', 'Tangier'],
  },
  {
    name: 'Berber Village Visit Atlas',
    slug: 'berber-village-visit-atlas',
    cityName: 'Imlil',
    type: 'cultural',
    description:
      'Spend a day with a Berber family in a remote Atlas Mountain village. Learn about their ancient way of life, help prepare a traditional meal, visit the local school, and enjoy panoramic mountain views.',
    duration: '6 hours',
    priceFromMad: 550,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    rating: 4.8,
    includes: ['Transport', 'Local guide', 'Traditional lunch', 'Tea ceremony'],
    bestSeason: 'Mar-Nov',
    bestLocations: ['Imlil', 'Ait Bougmez', 'Todra Valley'],
  },
  {
    name: 'White Water Rafting Ourika',
    slug: 'white-water-rafting-ourika',
    cityName: 'Ourika Valley',
    type: 'adventure',
    description:
      'Navigate the rapids of the Ourika River through the dramatic Atlas Mountain gorges. Experience thrilling white water sections and calm stretches with stunning canyon scenery and lush riverside gardens.',
    duration: '4 hours',
    priceFromMad: 650,
    difficulty: 'Challenging',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    rating: 4.5,
    includes: ['Equipment', 'Guide', 'Safety briefing', 'Transport'],
    bestSeason: 'Mar-Nov',
    bestLocations: ['Ourika Valley', 'Bin el-Ouidane'],
  },
  {
    name: 'Souk Shopping Tour Marrakech',
    slug: 'souk-shopping-tour-marrakech',
    cityName: 'Marrakech',
    type: 'shopping',
    description:
      'Navigate the labyrinthine souks of Marrakech with an expert local guide who knows every craftsman and secret corner. Learn bargaining techniques, discover authentic artisan workshops, and find treasures you would never locate alone.',
    duration: '3 hours',
    priceFromMad: 300,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80',
    rating: 4.6,
    includes: ['Expert guide', 'Artisan visits', 'Bargaining tips', 'Mint tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Fes', 'Essaouira'],
  },
  {
    name: 'Wine Tasting Meknes',
    slug: 'wine-tasting-meknes',
    cityName: 'Meknes',
    type: 'cooking',
    description:
      'Explore Morocco\'s surprising wine country in the Meknes region. Visit historic vineyards, learn about local grape varieties like Syrah and Carignan, and sample award-winning Moroccan wines paired with local cheeses and olives.',
    duration: '4 hours',
    priceFromMad: 600,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
    rating: 4.4,
    includes: ['Vineyard tour', 'Wine tasting', 'Cheese pairing', 'Transport'],
    bestSeason: 'Apr-Oct',
    bestLocations: ['Meknes', 'Benslimane', 'Boulaouane'],
  },
  {
    name: 'Stargazing Sahara',
    slug: 'stargazing-sahara',
    cityName: 'Merzouga',
    type: 'nature',
    description:
      'Experience the clearest night skies on Earth from atop a Sahara dune. A certified astronomer guides you through constellations, planets, and the Milky Way using professional telescopes, far from any light pollution.',
    duration: '3 hours',
    priceFromMad: 450,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    rating: 4.9,
    includes: ['Telescope', 'Astronomer guide', 'Hot drinks', 'Blankets'],
    bestSeason: 'Year-round',
    bestLocations: ['Merzouga', 'M\'Hamid', 'Zagora'],
  },
  {
    name: 'Kite Surfing Dakhla',
    slug: 'kite-surfing-dakhla',
    cityName: 'Dakhla',
    type: 'sports',
    description:
      'Ride the legendary winds of Dakhla Lagoon, one of the world\'s top kitesurfing spots. Flat water, consistent trade winds, and year-round sunshine make this the perfect destination for beginners and experts alike.',
    duration: '3 hours',
    priceFromMad: 800,
    difficulty: 'Challenging',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40b3981?w=800&q=80',
    rating: 4.8,
    includes: ['Kite & board', 'Instructor', 'Wetsuit', 'Insurance'],
    bestSeason: 'Year-round',
    bestLocations: ['Dakhla', 'Essaouira', 'Moulay Bousselham'],
  },
  {
    name: 'Moroccan Calligraphy Class',
    slug: 'moroccan-calligraphy-class',
    cityName: 'Fes',
    type: 'cultural',
    description:
      'Master the flowing art of Arabic calligraphy under the guidance of a Fassi master calligrapher. Learn traditional scripts, practice with reed pens and handmade ink, and create your own personalized artwork to take home.',
    duration: '2.5 hours',
    priceFromMad: 350,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.6,
    includes: ['Materials', 'Instruction', 'Artwork', 'Tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Fes', 'Marrakech', 'Rabat'],
  },
  {
    name: 'Zellige Mosaic Workshop',
    slug: 'zellige-mosaic-workshop',
    cityName: 'Fes',
    type: 'cultural',
    description:
      'Create your own piece of Moroccan geometric art in a traditional zellige workshop. Learn the centuries-old craft of hand-cutting and assembling colorful mosaic tiles from master artisans in the heart of the Fes medina.',
    duration: '3 hours',
    priceFromMad: 400,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?w=800&q=80',
    rating: 4.8,
    includes: ['Materials', 'Master instruction', 'Mosaic piece', 'Workshop tour'],
    bestSeason: 'Year-round',
    bestLocations: ['Fes', 'Meknes'],
  },
  {
    name: 'Henna Art Experience',
    slug: 'henna-art-experience',
    cityName: 'Marrakech',
    type: 'cultural',
    description:
      'Learn the ancient art of henna from skilled Moroccan artists in a traditional riad setting. Discover the cultural significance of henna patterns, watch a live demonstration, and receive your own intricate design using natural henna paste.',
    duration: '1.5 hours',
    priceFromMad: 200,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
    rating: 4.5,
    includes: ['Henna application', 'Cultural lesson', 'Pattern guide', 'Mint tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Fes', 'Chefchaouen'],
  },
  {
    name: 'Traditional Music Lesson',
    slug: 'traditional-music-lesson',
    cityName: 'Marrakech',
    type: 'cultural',
    description:
      'Learn to play traditional Moroccan instruments with a master musician. Choose from the oud (lute), guembri (bass), bendir (frame drum), or krakebs (castanets). Discover the rhythms of Andalusian, Berber, and Gnaoua musical traditions.',
    duration: '2 hours',
    priceFromMad: 400,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80',
    rating: 4.6,
    includes: ['Instrument rental', 'Master instruction', 'Recording', 'Tea'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Essaouira', 'Fes'],
  },
  {
    name: 'Zip-Lining Atlas Mountains',
    slug: 'zip-lining-atlas-mountains',
    cityName: 'Marrakech',
    type: 'adventure',
    description:
      'Soar across dramatic Atlas Mountain valleys on a series of zip-lines stretching up to 1.2 kilometers. The longest zip-line circuit in Africa offers an adrenaline rush with panoramic views of Berber villages and terraced farmland below.',
    duration: '4 hours',
    priceFromMad: 750,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=800&q=80',
    rating: 4.7,
    includes: ['Equipment', 'Safety briefing', 'Guide', 'Transport from Marrakech'],
    bestSeason: 'Year-round',
    bestLocations: ['Atlas Mountains near Marrakech'],
  },
  {
    name: 'Canyoning Akchour',
    slug: 'canyoning-akchour',
    cityName: 'Chefchaouen',
    type: 'adventure',
    description:
      'Descend through the stunning limestone canyons near Chefchaouen by rappelling waterfalls, swimming through turquoise natural pools, and scrambling through narrow gorges surrounded by the lush Rif Mountain forest.',
    duration: '5 hours',
    priceFromMad: 800,
    difficulty: 'Challenging',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=800&q=80',
    rating: 4.7,
    includes: ['Technical equipment', 'Certified guide', 'Lunch', 'Transport'],
    bestSeason: 'Apr-Oct',
    bestLocations: ['Akchour near Chefchaouen', 'Paradise Valley Agadir', 'Ourika Valley'],
  },
  {
    name: 'Go-Karting Marrakech',
    slug: 'go-karting-marrakech',
    cityName: 'Marrakech',
    type: 'adventure',
    description:
      'Race around a professional outdoor circuit on the outskirts of Marrakech with views of the Atlas Mountains. High-performance karts reach thrilling speeds on a track designed for both beginners and experienced drivers.',
    duration: '1.5 hours',
    priceFromMad: 350,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80',
    rating: 4.4,
    includes: ['Kart rental', 'Helmet & suit', 'Multiple sessions', 'Refreshments'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech'],
  },
  {
    name: 'Golf at Royal Courses',
    slug: 'golf-royal-courses',
    cityName: 'Marrakech',
    type: 'sports',
    description:
      'Play on one of Morocco\'s world-class golf courses designed by legends like Robert Trent Jones and Jack Nicklaus. The Royal Golf Marrakech, founded in 1927, and Amelkis Golf offer stunning mountain backdrops and year-round play.',
    duration: '5 hours',
    priceFromMad: 1200,
    difficulty: 'Moderate',
    image: 'https://images.unsplash.com/photo-1570804485046-99ca21dbdc43?w=800&q=80',
    rating: 4.7,
    includes: ['Green fees', 'Cart rental', 'Range balls', 'Clubhouse access'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Agadir', 'Rabat', 'El Jadida'],
  },
  {
    name: 'Spa Day with Argan Oil Treatment',
    slug: 'spa-day-argan-oil',
    cityName: 'Marrakech',
    type: 'wellness',
    description:
      'Indulge in a full day of pampering at a luxury Moroccan spa. Your experience includes a traditional hammam ceremony, followed by an argan oil body massage, rose water facial, and relaxation in a serene garden or rooftop setting.',
    duration: '4 hours',
    priceFromMad: 900,
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    rating: 4.8,
    includes: ['Hammam', 'Full body massage', 'Facial', 'Mint tea & snacks'],
    bestSeason: 'Year-round',
    bestLocations: ['Marrakech', 'Fes', 'Essaouira', 'Agadir'],
  },
];

const ACTIVITY_TYPES: { id: ActivityType; label: string }[] = [
  { id: 'adventure', label: 'Adventure' },
  { id: 'cultural', label: 'Cultural' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'nature', label: 'Nature' },
  { id: 'cooking', label: 'Cooking & Food' },
  { id: 'shopping', label: 'Shopping' },
  { id: 'nightlife', label: 'Nightlife' },
  { id: 'sports', label: 'Sports' },
];

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Morocco Activities & Things to Do',
    description:
      'A curated directory of the best activities and experiences across Morocco including adventure, culture, wellness, nature, and sports.',
    url: 'https://cityguide.ma/activities',
    numberOfItems: activities.length,
    itemListElement: activities.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristAttraction',
        name: a.name,
        description: a.description,
        url: `https://cityguide.ma/activities/${a.slug}`,
        image: a.image,
        address: {
          '@type': 'PostalAddress',
          addressLocality: a.cityName,
          addressCountry: 'MA',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: a.rating,
          bestRating: 5,
        },
        offers: {
          '@type': 'Offer',
          price: a.priceFromMad,
          priceCurrency: 'MAD',
        },
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

/* ================================================================
   STATIC CONTENT DATA
   ================================================================ */

const CATEGORY_HIGHLIGHTS = [
  {
    icon: <Mountain className="w-6 h-6" />,
    name: 'Adventure',
    count: activities.filter((a) => a.type === 'adventure').length,
    description: 'Camel treks, hot air balloons, sandboarding, quad biking, zip-lining, canyoning, and more adrenaline-fueled experiences.',
    color: 'bg-red-50 text-red-700',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    name: 'Cultural',
    count: activities.filter((a) => a.type === 'cultural').length,
    description: 'Pottery workshops, calligraphy classes, henna art, music lessons, photography walks, and artisan experiences.',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    name: 'Food & Drink',
    count: activities.filter((a) => a.type === 'cooking').length,
    description: 'Cooking classes, food tours, wine tasting, market visits, and authentic culinary journeys across Morocco.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    name: 'Nature',
    count: activities.filter((a) => a.type === 'nature').length,
    description: 'Mountain hikes, horseback riding, stargazing, Berber village visits, and immersion in stunning landscapes.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    name: 'Wellness',
    count: activities.filter((a) => a.type === 'wellness').length,
    description: 'Traditional hammam, spa treatments, yoga retreats, argan oil therapies, and ancient healing rituals.',
    color: 'bg-pink-50 text-pink-700',
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    name: 'Water Sports',
    count: activities.filter((a) => a.type === 'sports').length,
    description: 'Surfing, kiteboarding, paragliding, rock climbing, golf, and athletic experiences along the coast and mountains.',
    color: 'bg-blue-50 text-blue-700',
  },
];

const SEASONAL_GUIDE = [
  {
    season: 'Spring (March - May)',
    icon: <Sun className="w-5 h-5" />,
    temp: '18-28C',
    best: ['Atlas trekking', 'Cooking classes', 'Photography tours', 'Golf', 'City tours'],
    notes: 'The ideal season. Perfect temperatures, wildflowers in the Atlas, and the Rose Festival in Kelaat M\'Gouna. Book guides and popular activities well in advance.',
  },
  {
    season: 'Summer (June - August)',
    icon: <Thermometer className="w-5 h-5" />,
    temp: '30-45C',
    best: ['Surfing', 'Beach activities', 'Coastal yoga', 'Mountain retreats', 'Canyoning'],
    notes: 'Extremely hot in cities and desert. Head to the coast (Essaouira, Taghazout) or mountains (Imlil, Chefchaouen). Desert activities not recommended.',
  },
  {
    season: 'Autumn (September - November)',
    icon: <TreePine className="w-5 h-5" />,
    temp: '20-30C',
    best: ['Desert expeditions', 'Cultural tours', 'Food tours', 'Kiteboarding', 'Hammam'],
    notes: 'Another excellent season. The desert cools down from October. Fewer crowds than spring with perfect conditions for most activities.',
  },
  {
    season: 'Winter (December - February)',
    icon: <Waves className="w-5 h-5" />,
    temp: '8-18C',
    best: ['Sahara camping', 'Surfing', 'Spa & wellness', 'Music workshops', 'City explorations'],
    notes: 'Great for the desert (cool, clear nights), Atlantic coast surfing (biggest swells), and city exploration. Snow in the Atlas enables skiing near Oukaimeden.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is the best time of year for activities in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) offer the best conditions for most activities, with comfortable temperatures between 18-28C. Summer is best for coastal activities and mountain retreats, while winter is ideal for desert camping and surfing. Each season has distinct advantages depending on the type of experience you seek.',
  },
  {
    question: 'Are activities suitable for families with children?',
    answer:
      'Many activities are family-friendly, including cooking classes, camel rides (for children over 5), horseback riding, pottery workshops, food tours, and gentle hiking. Most operators offer reduced rates for children. Adventure activities like rock climbing, canyoning, and kiteboarding have minimum age requirements (typically 12-16 years).',
  },
  {
    question: 'Do I need to book activities in advance?',
    answer:
      'For popular activities like hot air balloon rides, desert expeditions, and cooking classes during peak season, booking 1-2 weeks ahead is recommended. Surf lessons, yoga retreats, and guided tours during high season (March-May, September-November) should also be pre-booked. Many cultural workshops and city tours can be arranged a day or two before.',
  },
  {
    question: 'What should I wear for outdoor activities?',
    answer:
      'For hiking and outdoor activities, wear comfortable layers, sturdy shoes, sun protection, and a hat. In the desert, cover arms and legs to protect from sun and sand. For cultural activities in cities, dress modestly (covering knees and shoulders). Surf schools provide wetsuits. Always bring a light jacket for evenings, even in summer.',
  },
  {
    question: 'Are tips included in activity prices?',
    answer:
      'Tips are generally not included in listed prices. A gratuity of 10-15% is customary for guides and instructors. For camel trek handlers, 20-50 MAD per person is appropriate. For multi-day expeditions, tip the guide 100-200 MAD per day for exceptional service. Cash in Moroccan Dirhams is preferred.',
  },
  {
    question: 'How do activity prices compare to other countries?',
    answer:
      'Morocco offers exceptional value. A full cooking class costs $50 compared to $100+ in Europe. Camel treks start at $120 for two days including camp and meals. Surf lessons run $35 for 3 hours. Hot air balloon rides at $200 are roughly half the price of similar experiences in Cappadocia or Bagan.',
  },
  {
    question: 'Is travel insurance recommended for adventure activities?',
    answer:
      'Yes, we strongly recommend comprehensive travel insurance that covers adventure sports. Activities like rock climbing, paragliding, kiteboarding, and canyoning may require specific adventure sports coverage. Most reputable operators carry their own liability insurance, but personal medical coverage is your responsibility.',
  },
  {
    question: 'Can I combine multiple activities in one day?',
    answer:
      'Absolutely. Many travelers combine a morning hike or balloon ride with an afternoon cooking class, or a morning surf lesson with an evening food tour. Your guide or activity provider can help coordinate logistics. In cities like Marrakech, you can easily fit 2-3 activities in a single day.',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function ActivitiesPage() {
  const uniqueCities = [...new Set(activities.map((a) => a.cityName))].sort();
  const uniqueTypes = [...new Set(activities.map((a) => a.type))];
  const avgRating = (activities.reduce((sum, a) => sum + a.rating, 0) / activities.length).toFixed(1);

  return (
    <>
      <JsonLd />

      {/* -- Breadcrumb -- */}
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
          <li className="text-text-primary font-medium">Activities</li>
        </ol>
      </nav>

      {/* -- Hero Section -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Camel trekking across Sahara dunes at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Things to Do
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Activities &amp; Experiences
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Trek the Sahara by camel, surf the Atlantic, cook with local chefs,
              master Arabic calligraphy, and discover centuries-old crafts. Morocco
              offers extraordinary experiences for every traveler, skill level,
              and season.
            </p>
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {activities.length}+
                </p>
                <p className="text-sm text-white/70">Activities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {uniqueTypes.length}
                </p>
                <p className="text-sm text-white/70">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {uniqueCities.length}
                </p>
                <p className="text-sm text-white/70">Destinations</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {avgRating}
                </p>
                <p className="text-sm text-white/70">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Category Highlights -- */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Explore by Category
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Six Ways to Experience Morocco
            </h2>
            <p className="text-text-secondary leading-relaxed">
              From adrenaline-pumping adventures to peaceful wellness retreats,
              Morocco covers the full spectrum of travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORY_HIGHLIGHTS.map((cat) => (
              <div key={cat.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${cat.color}`}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-text-primary">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-primary font-semibold">
                      {cat.count} activities
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Activity Directory -- */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Full Directory
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            All Activities
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Browse all {activities.length} activities across {uniqueCities.length} destinations.
            Filter by category, location, difficulty, or budget to find your
            perfect experience.
          </p>
        </div>
        <ActivitiesClientSection
          activities={activities}
          types={ACTIVITY_TYPES}
          cities={uniqueCities}
        />
      </section>

      {/* -- Seasonal Guide -- */}
      <section className="bg-[var(--color-primary-900)] text-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Plan Your Trip
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              When to Do What
            </h2>
            <p className="text-white/75 leading-relaxed">
              Morocco is a year-round destination, but different seasons favor
              different activities. Here is your seasonal planning guide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {SEASONAL_GUIDE.map((season) => (
              <div
                key={season.season}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center">
                    {season.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">
                      {season.season}
                    </h3>
                    <p className="text-sm text-white/60">{season.temp}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {season.best.map((activity) => (
                    <span
                      key={activity}
                      className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-white/65 leading-relaxed">
                  {season.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Pricing Overview -- */}
      <section className="container-morocco py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Budget Planning
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What Activities Cost
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Morocco offers exceptional value for money. Here is a realistic
            budget overview for the most popular activity categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { category: 'Budget Activities', range: 'Under 350 MAD ($35)', examples: ['Henna art (200 MAD)', 'Argan oil workshop (200 MAD)', 'Sandboarding (250 MAD)', 'Pottery workshop (300 MAD)', 'Souk tour (300 MAD)'] },
            { category: 'Mid-Range Activities', range: '350-800 MAD ($35-80)', examples: ['Cooking class (500 MAD)', 'Hammam experience (400 MAD)', 'Horseback riding (500 MAD)', 'Food tour (450 MAD)', 'Calligraphy class (350 MAD)'] },
            { category: 'Premium Activities', range: 'Over 800 MAD ($80+)', examples: ['Hot air balloon (2,000 MAD)', 'Desert expedition (1,200 MAD)', 'Paragliding (900 MAD)', 'Yoga retreat (3,500 MAD)', 'Golf round (1,200 MAD)'] },
          ].map((tier) => (
            <div key={tier.category} className="card-moroccan p-6">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-1">
                {tier.category}
              </h3>
              <p className="text-sm font-semibold text-primary mb-4">
                {tier.range}
              </p>
              <ul className="space-y-2">
                {tier.examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2 text-sm text-text-secondary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 p-5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-xl max-w-5xl mx-auto">
          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-semibold text-text-primary text-sm mb-1">
                Budget Tip
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Many operators offer package deals when you book multiple activities
                together. A 3-activity bundle typically saves 15-20%. Also, activities
                booked directly through local providers (rather than hotel concierges)
                are often 20-30% cheaper. All prices shown are per person unless noted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Practical Advice
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Tips Before You Book
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Make the most of your activities in Morocco with these practical
              recommendations from experienced travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Calendar className="w-5 h-5" />,
                title: 'Book Early for Peak Season',
                tip: 'Activities in Marrakech, Fes, and the desert sell out during March-May and September-November. Reserve popular experiences like hot air balloon rides and desert camps at least 2 weeks ahead.',
              },
              {
                icon: <Sun className="w-5 h-5" />,
                title: 'Start Outdoor Activities Early',
                tip: 'Morocco gets hot by midday, especially April through October. Schedule hiking, biking, and outdoor tours for early morning. Balloon rides launch at dawn for the best conditions and coolest temperatures.',
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: 'Private vs Group Experiences',
                tip: 'Group activities cost 30-50% less than private tours but limit flexibility. For cooking classes and cultural workshops, group settings add to the fun. For photography tours and medina walks, private is worth the premium.',
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: 'Check Reviews Carefully',
                tip: 'Read recent reviews (within the last 6 months) as operator quality can change. Look for reviews that mention safety, punctuality, and English communication. Verified booking platforms offer the most reliable feedback.',
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: 'Confirm Meeting Points',
                tip: 'Addresses in medinas can be confusing. Always get a WhatsApp number from your activity provider and share your location on the morning of the activity. Most operators offer hotel pickup for an additional fee.',
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: 'Respect Physical Limits',
                tip: 'Be honest about your fitness level when booking. "Moderate" in Morocco often means more challenging than you expect due to heat, altitude, and terrain. Drink plenty of water and do not hesitate to slow down.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-base text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="container-morocco py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Common Questions
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Everything you need to know about booking and enjoying activities
            in Morocco.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group card-moroccan overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-heading font-semibold text-text-primary hover:text-primary transition-colors">
                <span>{item.question}</span>
                <ChevronDown className="w-5 h-5 shrink-0 text-text-muted group-open:rotate-180 transition-transform" />
              </summary>
              <div className="px-6 pb-5 -mt-1">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1548017267-5765e9b2ccfb?w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-morocco text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Moroccan Adventure?
          </h2>
          <p className="text-white/75 leading-relaxed mb-8">
            Whether you are chasing adrenaline in the Atlas Mountains, finding
            serenity in a coastal yoga retreat, or mastering the art of tagine
            in a Marrakech kitchen, Morocco has an experience waiting for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary-900)] font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Find a Local Guide
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Clock className="w-4 h-4" />
              Browse Itineraries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
