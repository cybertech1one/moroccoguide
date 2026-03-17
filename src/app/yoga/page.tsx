import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  MapPin,
  Star,
  Sun,
  Calendar,
  DollarSign,
  Mountain,
  Waves,
  ChevronRight,
  Info,
  Users,
  Clock,
  Compass,
  Flower2,
  Moon,
  Wind,
  Home,
  ArrowRight,
  CheckCircle,
  Shield,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Yoga Retreats in Morocco | Wellness, Meditation & Teacher Training Guide',
  description:
    'Comprehensive guide to yoga retreats and wellness in Morocco. Discover rooftop yoga in Marrakech riads, beachfront sessions in Essaouira, surf-and-yoga in Taghazout, Atlas Mountain escapes, desert yoga under Saharan stars, teacher training programs, and hammam-yoga wellness packages from 2,000-15,000 MAD.',
  keywords: [
    'yoga retreats Morocco',
    'yoga Morocco',
    'Marrakech yoga retreat',
    'Essaouira yoga',
    'Taghazout surf yoga',
    'Atlas Mountains yoga',
    'Sahara desert yoga',
    'Morocco wellness retreat',
    'yoga teacher training Morocco',
    'meditation Morocco',
    'yoga and surf Morocco',
    'yoga and hiking Morocco',
    'hammam yoga package',
    'solo travel yoga Morocco',
    'Ourika Valley retreat',
    'Peacock Pavilions Marrakech',
    'vinyasa yoga Morocco',
    'yin yoga retreat',
    'kundalini Morocco',
  ],
  openGraph: {
    title: 'Yoga Retreats in Morocco - CityGuide',
    description:
      'Find your perfect yoga retreat in Morocco. From riad rooftop sessions in Marrakech to desert meditation under the stars, explore the best wellness experiences across the kingdom.',
    url: 'https://citytoursmorocco.com/yoga',
    images: [
      {
        url: '/images/hero-morocco-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Yoga practice on a Moroccan riad rooftop at sunset with Atlas Mountain views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoga Retreats in Morocco | CityGuide',
    description:
      'Rooftop yoga in Marrakech, beachfront sessions in Essaouira, surf-and-yoga in Taghazout, desert meditation in the Sahara, and Atlas Mountain retreats.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/yoga' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/yoga#guide',
      headline: 'Complete Guide to Yoga Retreats & Wellness in Morocco',
      description:
        'Comprehensive guide to yoga retreats across Morocco including Marrakech, Essaouira, Taghazout, the Atlas Mountains, the Sahara Desert, and the Ourika Valley. Covers retreat costs, yoga styles, seasonal advice, teacher training, and wellness packages.',
      url: 'https://citytoursmorocco.com/yoga',
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
          name: 'How much does a yoga retreat in Morocco cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yoga retreats in Morocco range from 2,000-5,000 MAD for budget 3-day retreats, 5,000-10,000 MAD for mid-range 5-7 day retreats, and 10,000-15,000+ MAD for luxury week-long retreats. Prices typically include accommodation, meals, and daily yoga sessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time of year for a yoga retreat in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The best times are spring (March-May) and autumn (September-November) when temperatures are comfortable across all regions. Winter (December-February) is ideal for Sahara desert retreats and southern coastal locations like Taghazout. Summer suits Atlas Mountain retreats where altitude keeps temperatures pleasant.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can beginners join yoga retreats in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. Most yoga retreats in Morocco welcome all levels, from complete beginners to advanced practitioners. Many retreats offer multi-level classes so teachers can give personalized attention. Hatha and Yin yoga sessions are particularly beginner-friendly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Morocco a good destination for solo travelers doing yoga retreats?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Morocco is excellent for solo yoga travelers. Most retreat participants are solo travelers, and the communal nature of retreats makes it easy to connect with like-minded people. Many retreats offer single-occupancy rooms and organize group excursions, making it a safe and social experience.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of yoga are offered at Moroccan retreats?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Moroccan retreats offer a wide range of yoga styles including Vinyasa Flow, Hatha, Ashtanga, Yin, Kundalini, Restorative, and Aerial yoga. Many retreats combine multiple styles and also incorporate meditation, breathwork (pranayama), and sound healing sessions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are yoga teacher training programs available in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, several Yoga Alliance-certified 200-hour and 300-hour teacher training programs are available in Morocco, primarily in Marrakech, Essaouira, and Taghazout. Programs typically run 3-4 weeks and cost between 15,000-30,000 MAD, often including accommodation and meals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I combine yoga with surfing in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, surf-and-yoga packages are one of Morocco\'s most popular retreat combinations, especially in Taghazout, Essaouira, and Imsouane. These typically include morning yoga, daytime surf lessons, and evening meditation, with prices from 4,000-8,000 MAD for a week.',
          },
        },
        {
          '@type': 'Question',
          name: 'What should I pack for a yoga retreat in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pack comfortable yoga clothes (modest coverage recommended), a light travel yoga mat or towel, sunscreen, a reusable water bottle, layers for cool mornings and evenings, and comfortable walking shoes for excursions. Most retreats provide mats and props, but bringing your own mat ensures comfort and hygiene.',
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   TOP YOGA RETREATS BY REGION
   ===================================================================== */

interface YogaRetreat {
  name: string;
  region: string;
  location: string;
  description: string;
  highlights: string[];
  yogaStyles: string[];
  duration: string;
  priceRange: string;
  bestFor: string;
  image: string;
  rating: number;
}

const topRetreats: YogaRetreat[] = [
  {
    name: 'Peacock Pavilions',
    region: 'Marrakech',
    location: 'Marrakech Palmeraie',
    description:
      'A boutique eco-retreat set in a stunning contemporary Moroccan villa in the Palmeraie, surrounded by olive groves and rose gardens. Peacock Pavilions offers world-class yoga instruction on a shaded outdoor pavilion with Atlas Mountain views. The retreat is run by an American-Moroccan couple and attracts an international community of yoga practitioners. The architecture blends traditional Moroccan zellige, tadelakt, and carved plaster with modern sustainable design. Multiple yoga spaces allow for simultaneous classes and private sessions.',
    highlights: ['Outdoor yoga pavilion with Atlas views', 'Eco-friendly boutique villa', 'International teaching faculty', 'Organic garden-to-table meals', 'Pool and hammam on-site'],
    yogaStyles: ['Vinyasa', 'Hatha', 'Restorative', 'Yin'],
    duration: '3-7 days',
    priceRange: '5,500-12,000 MAD',
    bestFor: 'Intermediate to advanced practitioners seeking a premium experience',
    image: '/images/photo-riad-rooftop-sunset.webp',
    rating: 4.9,
  },
  {
    name: 'Riad Rooftop Yoga Collective',
    region: 'Marrakech',
    location: 'Marrakech Medina',
    description:
      'Experience sunrise yoga on a traditional riad rooftop overlooking the Marrakech medina, with the Atlas Mountains glowing pink on the horizon and the sound of the muezzin call drifting across the skyline. Several riads in the medina now offer daily yoga classes and multi-day retreat packages, combining the magic of staying in a centuries-old courtyard house with expert yoga instruction. After practice, descend to the riad courtyard for a traditional Moroccan breakfast of fresh orange juice, msemen flatbread, amlou dip, and mint tea.',
    highlights: ['Sunrise rooftop sessions', 'Medina immersion experience', 'Traditional riad accommodation', 'Walking distance to souks and Jemaa el-Fna', 'Hammam sessions included'],
    yogaStyles: ['Vinyasa Flow', 'Hatha', 'Meditation'],
    duration: '3-5 days',
    priceRange: '3,500-8,000 MAD',
    bestFor: 'Travelers who want yoga combined with cultural immersion',
    image: '/images/photo-riad-rooftop-sunset.webp',
    rating: 4.7,
  },
  {
    name: 'Essaouira Beachfront Yoga',
    region: 'Essaouira',
    location: 'Essaouira coastline',
    description:
      'Practice yoga on the sweeping Atlantic beach of Essaouira, with the sound of crashing waves as your soundtrack and the 18th-century Portuguese ramparts as your backdrop. Essaouira, known as the Wind City, offers a uniquely energizing environment for yoga with its fresh ocean air, reliable sunshine, and laid-back artistic atmosphere. Several studios and guesthouses along the coast offer daily drop-in classes and structured retreat programs. The medina itself is a UNESCO World Heritage site, offering culture, art galleries, and exceptional seafood after your practice.',
    highlights: ['Beach yoga at sunrise', 'Atlantic ocean air', 'UNESCO medina exploration', 'Fresh seafood cuisine', 'Art galleries and live gnawa music'],
    yogaStyles: ['Vinyasa', 'Hatha', 'Yin', 'Kundalini'],
    duration: '4-7 days',
    priceRange: '4,000-9,000 MAD',
    bestFor: 'Creatives and those seeking a bohemian coastal retreat',
    image: '/images/hero-morocco-hero.webp',
    rating: 4.8,
  },
  {
    name: 'Essaouira Surf & Yoga Retreat',
    region: 'Essaouira',
    location: 'Sidi Kaouki Beach',
    description:
      'Located 25 kilometers south of Essaouira at the wild, unspoiled beach of Sidi Kaouki, this retreat combines daily yoga with surfing and kitesurfing in one of Morocco\'s best wind-sport locations. The retreat center sits directly on the beach with uninterrupted ocean views from every yoga session. The combination of physical surfing and restorative yoga creates a perfect balance of energy and calm. Accommodation ranges from cozy surf lodges to beachfront bungalows, and the vibe is relaxed, social, and deeply connected to the ocean.',
    highlights: ['Beachfront yoga platform', 'Surf and kitesurf lessons', 'Ocean-view accommodation', 'Communal organic meals', 'Sunset meditation on the beach'],
    yogaStyles: ['Vinyasa Flow', 'Yin', 'Restorative'],
    duration: '5-7 days',
    priceRange: '4,500-8,500 MAD',
    bestFor: 'Active travelers who love the ocean',
    image: '/images/hero-morocco-hero.webp',
    rating: 4.7,
  },
  {
    name: 'Taghazout Surf & Yoga Camp',
    region: 'Taghazout',
    location: 'Taghazout Village',
    description:
      'Taghazout is the undisputed capital of surf-and-yoga in Morocco. This laid-back fishing village north of Agadir has been transformed into a world-class surf destination, and the rooftop yoga scene has grown to match. Dozens of surf camps now offer daily sunrise yoga on their rooftop terraces overlooking the Atlantic, followed by morning surf sessions at legendary breaks like Anchor Point, Killer Point, and Hash Point. The village retains its authentic Moroccan fishing culture, and the sunsets over the ocean are spectacular.',
    highlights: ['Rooftop yoga with ocean panorama', 'World-class surf breaks', 'Laid-back village atmosphere', 'Healthy Moroccan-fusion cuisine', 'Sunset sessions on the cliff'],
    yogaStyles: ['Vinyasa', 'Hatha', 'Yin', 'Restorative'],
    duration: '5-10 days',
    priceRange: '3,500-7,500 MAD',
    bestFor: 'Surfers and ocean lovers of all levels',
    image: '/images/hero-morocco-hero.webp',
    rating: 4.8,
  },
  {
    name: 'Paradise Valley Wellness Escape',
    region: 'Taghazout / Paradise Valley',
    location: 'Paradise Valley, near Agadir',
    description:
      'Hidden in the foothills between Agadir and Taghazout, Paradise Valley is a lush palm-filled gorge with turquoise natural rock pools, cascading waterfalls, and dramatic cliff faces. Several eco-lodges in and around the valley offer yoga retreats that take full advantage of this stunning natural setting. Practice yoga on a wooden platform overlooking the palm canopy, swim in crystal-clear pools between sessions, hike through the valley to hidden waterfalls, and dine on plant-based cuisine prepared with local organic ingredients. The valley is a true hidden gem that few tourists discover.',
    highlights: ['Natural rock pool swimming', 'Waterfall hikes', 'Outdoor yoga platforms in nature', 'Plant-based organic cuisine', 'Digital detox environment'],
    yogaStyles: ['Hatha', 'Vinyasa', 'Yin', 'Breathwork'],
    duration: '3-5 days',
    priceRange: '3,000-6,500 MAD',
    bestFor: 'Nature lovers seeking a digital detox',
    image: '/images/hero-morocco-hero.webp',
    rating: 4.6,
  },
  {
    name: 'Atlas Mountain Yoga Sanctuary',
    region: 'Atlas Mountains',
    location: 'Imlil / Ouirgane Valley',
    description:
      'Perched high in the Atlas Mountains at altitudes of 1,500-2,000 meters, these retreat centers offer yoga surrounded by North Africa\'s most dramatic mountain scenery. The crisp, clean mountain air is invigorating, the silence is profound, and the views of snow-capped peaks, terraced Berber villages, and walnut groves create a transformative backdrop for practice. Many retreats include guided treks to waterfalls and traditional villages, cooking classes with Berber families, and evening meditation as the sun sets behind Jebel Toubkal, the highest peak in North Africa. The mountain setting is particularly special during spring when wildflowers carpet the valleys.',
    highlights: ['Panoramic mountain yoga terrace', 'Guided Atlas treks', 'Berber village visits', 'Fresh mountain air at altitude', 'Toubkal sunset meditation'],
    yogaStyles: ['Hatha', 'Vinyasa', 'Meditation', 'Pranayama'],
    duration: '4-7 days',
    priceRange: '4,200-10,000 MAD',
    bestFor: 'Hikers and mountain enthusiasts seeking depth',
    image: '/images/hero-morocco-hero.webp',
    rating: 4.9,
  },
  {
    name: 'Sahara Desert Yoga Experience',
    region: 'Sahara Desert',
    location: 'Merzouga / Erg Chebbi',
    description:
      'There is nothing quite like practicing yoga on the golden dunes of the Sahara at sunrise, when the desert is bathed in warm amber light and the silence is absolute. Sahara yoga retreats are among the most unique wellness experiences on Earth, combining the meditative power of the desert landscape with structured yoga and meditation programs. Accommodation ranges from luxury desert camps with private tents and hot showers to authentic Berber bivouacs under the stars. Evenings bring traditional Berber music around the campfire, stargazing in some of the darkest skies on the planet, and guided meditation in the vast silence of the dunes.',
    highlights: ['Sunrise yoga on the dunes', 'Stargazing and night meditation', 'Camel trek to camp', 'Berber campfire music', 'Unparalleled silence and solitude'],
    yogaStyles: ['Hatha', 'Yin', 'Meditation', 'Sound Healing'],
    duration: '3-5 days',
    priceRange: '3,500-9,000 MAD',
    bestFor: 'Seekers looking for a transformative, spiritual experience',
    image: '/images/hero-morocco-hero.webp',
    rating: 4.9,
  },
  {
    name: 'Ourika Valley Nature Retreat',
    region: 'Ourika Valley',
    location: 'Ourika Valley, 30 km from Marrakech',
    description:
      'Just a 45-minute drive from the bustle of Marrakech, the Ourika Valley unfolds into a green oasis of terraced gardens, rushing rivers, and traditional Berber hamlets clinging to the hillsides. Several eco-lodges and wellness centers in the valley offer yoga retreats that feel worlds away from the city despite the proximity. Practice on a terrace overlooking the river, take guided walks through saffron fields and aromatic herb gardens, visit the Setti Fatma waterfalls, and return for evening restorative yoga and meditation. The valley is also home to women\'s argan oil cooperatives where you can learn about this precious ingredient used in both cuisine and beauty.',
    highlights: ['River-view yoga terrace', 'Setti Fatma waterfall hikes', 'Argan cooperative visits', 'Saffron and herb garden walks', 'Close to Marrakech for easy access'],
    yogaStyles: ['Vinyasa', 'Hatha', 'Restorative', 'Yin'],
    duration: '3-5 days',
    priceRange: '2,800-6,000 MAD',
    bestFor: 'Those who want nature without being far from Marrakech',
    image: '/images/photo-riad-rooftop-sunset.webp',
    rating: 4.7,
  },
];

/* =====================================================================
   YOGA STYLES DATA
   ===================================================================== */

const yogaStyles = [
  {
    name: 'Vinyasa Flow',
    icon: <Wind className="w-6 h-6" />,
    description:
      'A dynamic, breath-synchronized practice that links movement with breath in a flowing sequence. Vinyasa is the most popular style at Moroccan retreats, perfect for building strength, flexibility, and cardiovascular fitness. Classes range from gentle to vigorous, making it accessible to all levels. In Morocco, Vinyasa is often practiced at sunrise on rooftops and terraces, adding the sensory dimension of fresh morning air and golden light.',
    level: 'All levels',
    benefits: 'Strength, flexibility, cardio, stress relief',
    availability: 'Available at nearly all retreats',
  },
  {
    name: 'Hatha Yoga',
    icon: <Flower2 className="w-6 h-6" />,
    description:
      'The foundational yoga practice that emphasizes holding postures (asanas) for longer periods, combined with conscious breathing (pranayama). Hatha is slower-paced than Vinyasa and focuses on alignment, balance, and building a strong foundation. It is the ideal style for beginners and for those who want to deepen their understanding of individual poses. Many Moroccan retreats offer Hatha as their morning session, followed by more dynamic styles later in the day.',
    level: 'Beginner-friendly',
    benefits: 'Alignment, balance, flexibility, mental clarity',
    availability: 'Standard at all retreats',
  },
  {
    name: 'Ashtanga Yoga',
    icon: <Star className="w-6 h-6" />,
    description:
      'A rigorous, structured practice following a set sequence of postures performed in the same order every session. Ashtanga builds exceptional strength, stamina, and discipline. The practice generates significant internal heat, making it particularly rewarding in Morocco\'s cooler mountain settings. Several teachers in Marrakech and Essaouira specialize in Mysore-style Ashtanga, where practitioners work through the series at their own pace with individual adjustments from the teacher.',
    level: 'Intermediate to advanced',
    benefits: 'Strength, discipline, stamina, detoxification',
    availability: 'Select retreats and dedicated studios',
  },
  {
    name: 'Yin Yoga',
    icon: <Moon className="w-6 h-6" />,
    description:
      'A slow, meditative practice where passive postures are held for 3-5 minutes or longer, targeting the deep connective tissues, fascia, and joints rather than muscles. Yin is the perfect complement to dynamic practices like Vinyasa and surfing, and it is offered as an evening session at many Moroccan retreats. The stillness of Yin practice pairs beautifully with the tranquil settings of desert camps, mountain lodges, and candlelit riad courtyards.',
    level: 'All levels',
    benefits: 'Deep flexibility, joint health, relaxation, mindfulness',
    availability: 'Most retreats offer evening Yin sessions',
  },
  {
    name: 'Kundalini Yoga',
    icon: <Sun className="w-6 h-6" />,
    description:
      'An ancient practice that combines dynamic postures (kriyas), breathwork, chanting (mantra), and meditation to awaken the dormant energy at the base of the spine. Kundalini is a deeply spiritual and transformative practice that can produce profound shifts in consciousness and emotional release. The spiritual atmosphere of Morocco, with its Sufi traditions and sacred sites, provides a uniquely supportive environment for Kundalini practice. Several retreats in Essaouira and the Atlas Mountains specialize in this powerful tradition.',
    level: 'All levels (open-minded approach recommended)',
    benefits: 'Spiritual awakening, emotional release, energy, clarity',
    availability: 'Specialized retreats in Essaouira and mountains',
  },
];

/* =====================================================================
   RETREAT COST DATA
   ===================================================================== */

const costBreakdown = [
  { category: 'Budget 3-day retreat', price: '2,000-3,500 MAD', usd: '$200-$350', includes: 'Shared room, 2 daily yoga sessions, breakfast' },
  { category: 'Mid-range 5-day retreat', price: '5,000-8,000 MAD', usd: '$500-$800', includes: 'Private room, 2 daily sessions, all meals, 1 excursion' },
  { category: 'Premium 7-day retreat', price: '8,000-12,000 MAD', usd: '$800-$1,200', includes: 'En-suite room, 2 sessions, all meals, hammam, excursions' },
  { category: 'Luxury 7-day retreat', price: '12,000-15,000+ MAD', usd: '$1,200-$1,500+', includes: 'Luxury suite, unlimited yoga, gourmet meals, spa, private guide' },
  { category: 'Surf & yoga week', price: '4,000-8,000 MAD', usd: '$400-$800', includes: 'Shared room, daily yoga, 5 surf lessons, meals, equipment' },
  { category: 'Teacher training (200hr)', price: '15,000-30,000 MAD', usd: '$1,500-$3,000', includes: '3-4 week program, certification, accommodation, meals' },
];

/* =====================================================================
   SEASONAL GUIDE DATA
   ===================================================================== */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: <Flower2 className="w-5 h-5" />,
    rating: 5,
    description: 'The ideal time for yoga retreats across all regions. Wildflowers bloom in the Atlas Mountains, temperatures are comfortable (20-28 degrees C), and the countryside is lush and green. Perfect for combining yoga with hiking, and the almond and rose blossoms create stunning backdrops for outdoor practice.',
    bestRegions: 'All regions, especially Atlas Mountains and Ourika Valley',
    temperature: '20-28 degrees C',
  },
  {
    season: 'Summer (June - August)',
    icon: <Sun className="w-5 h-5" />,
    rating: 3,
    description: 'Hot in Marrakech and the desert (35-45 degrees C), making these regions less comfortable for yoga. However, the Atlantic coast (Essaouira, Taghazout) remains pleasant with cooling trade winds, and the Atlas Mountains offer refreshing altitude. Summer is peak season for surf-and-yoga retreats on the coast.',
    bestRegions: 'Essaouira, Taghazout, Atlas Mountains',
    temperature: '22-45 degrees C (varies by region)',
  },
  {
    season: 'Autumn (September - November)',
    icon: <Wind className="w-5 h-5" />,
    rating: 5,
    description: 'Another excellent season for yoga retreats. The summer heat subsides, the light turns golden, and the harvest season brings an abundance of fresh produce. The sea is still warm enough for surfing, the mountains are perfect for trekking, and the desert begins to cool to comfortable temperatures. Many retreat centers launch their main programs in September.',
    bestRegions: 'All regions, especially Sahara Desert and coast',
    temperature: '18-30 degrees C',
  },
  {
    season: 'Winter (December - February)',
    icon: <Mountain className="w-5 h-5" />,
    rating: 4,
    description: 'Mild and sunny in southern Morocco and the coast (15-22 degrees C), making it an excellent escape from European winters. The Sahara is perfect for desert retreats with cool, comfortable days and clear starry nights. Taghazout has its best surf conditions. The Atlas Mountains may have snow, which is magical but limits mountain retreats. Marrakech is pleasant with clear skies.',
    bestRegions: 'Sahara Desert, Taghazout, Marrakech, Essaouira',
    temperature: '15-22 degrees C (coast/south)',
  },
];

/* =====================================================================
   DAILY SCHEDULE
   ===================================================================== */

const typicalSchedule = [
  { time: '06:30 - 07:00', activity: 'Wake up and optional silent meditation', icon: <Moon className="w-4 h-4" /> },
  { time: '07:00 - 08:30', activity: 'Morning yoga session (Vinyasa or Ashtanga)', icon: <Sun className="w-4 h-4" /> },
  { time: '08:30 - 09:30', activity: 'Healthy breakfast (fresh fruit, smoothie bowls, msemen, eggs)', icon: <Heart className="w-4 h-4" /> },
  { time: '09:30 - 12:30', activity: 'Free time, excursion, surf lesson, or workshop', icon: <Compass className="w-4 h-4" /> },
  { time: '12:30 - 14:00', activity: 'Lunch (Moroccan salads, tagine, couscous)', icon: <Heart className="w-4 h-4" /> },
  { time: '14:00 - 16:30', activity: 'Afternoon free time, pool, hammam, or guided walk', icon: <Waves className="w-4 h-4" /> },
  { time: '16:30 - 18:00', activity: 'Afternoon yoga session (Yin, Restorative, or Hatha)', icon: <Flower2 className="w-4 h-4" /> },
  { time: '18:00 - 18:30', activity: 'Guided meditation or breathwork session', icon: <Wind className="w-4 h-4" /> },
  { time: '19:00 - 20:30', activity: 'Dinner (plant-forward Moroccan cuisine)', icon: <Heart className="w-4 h-4" /> },
  { time: '20:30 - 21:30', activity: 'Evening gathering, journaling, sound healing, or stargazing', icon: <Moon className="w-4 h-4" /> },
];

/* =====================================================================
   MEDITATION PRACTICES
   ===================================================================== */

const meditationPractices = [
  {
    name: 'Desert Silence Meditation',
    description:
      'The Sahara Desert is one of the quietest places on Earth, and its vast emptiness creates a profound meditative environment. Guided desert meditation sessions take place on the dunes at dawn and dusk, when the light transforms the sand into waves of gold and copper. The absolute silence, broken only by the whisper of wind across the sand, naturally draws the mind inward. Many practitioners report breakthroughs in their meditation practice during desert retreats that they have never experienced elsewhere.',
    location: 'Merzouga, Erg Chebbi',
    bestTime: 'Dawn and dusk',
  },
  {
    name: 'Rooftop Mindfulness',
    description:
      'Marrakech\'s riad rooftops offer a unique meditation setting that balances urban energy with peaceful elevation. Sitting above the ancient medina as the call to prayer echoes from dozens of minarets, practitioners connect with a centuries-old tradition of spiritual devotion. The panoramic views of the Atlas Mountains, the medina skyline, and the vast Moroccan sky create a powerful sense of perspective and presence. Morning sessions are particularly special as the city slowly awakens below.',
    location: 'Marrakech Medina',
    bestTime: 'Sunrise and sunset',
  },
  {
    name: 'Ocean Sound Meditation',
    description:
      'Along the Atlantic coast at Essaouira and Taghazout, the rhythmic sound of ocean waves provides a natural meditation anchor. Guided sessions on the beach use the waves as a focal point for breath awareness, allowing practitioners to synchronize their breathing with the ocean\'s rhythm. The negative ions in ocean air enhance mental clarity and emotional well-being, making coastal meditation particularly effective for stress relief and emotional processing.',
    location: 'Essaouira, Taghazout, Sidi Kaouki',
    bestTime: 'Early morning before the wind picks up',
  },
  {
    name: 'Mountain Walking Meditation',
    description:
      'The Atlas Mountains offer spectacular settings for walking meditation through ancient footpaths that connect Berber villages. These mindful walks combine gentle movement with focused awareness, following trails along terraced valleys, through walnut groves, and beside mountain streams. The practice is accessible to all fitness levels and provides a moving alternative to seated meditation. Guides lead the walks in noble silence, with periodic stops for seated reflection at particularly beautiful viewpoints.',
    location: 'Imlil, Ouirgane, Ourika Valley',
    bestTime: 'Morning, when mountain light is clearest',
  },
];

/* =====================================================================
   TEACHER TRAINING PROGRAMS
   ===================================================================== */

const teacherTrainingPrograms = [
  {
    level: '200-Hour RYT (Registered Yoga Teacher)',
    duration: '21-28 days',
    price: '15,000-25,000 MAD',
    description:
      'The foundational teacher training certification recognized worldwide by Yoga Alliance. Programs in Morocco cover asana technique, anatomy, philosophy, teaching methodology, pranayama, and meditation. The immersive residential format, combined with Morocco\'s inspiring environment, creates an intense and transformative training experience.',
    curriculum: ['Asana technique and alignment', 'Anatomy and physiology', 'Yoga philosophy and history', 'Teaching methodology and practicum', 'Pranayama and meditation', 'Business of yoga'],
    locations: 'Marrakech, Essaouira, Taghazout',
  },
  {
    level: '300-Hour Advanced Training',
    duration: '28-35 days',
    price: '20,000-30,000 MAD',
    description:
      'For certified 200-hour teachers seeking to deepen their practice and teaching skills. Advanced programs in Morocco focus on specialized topics such as advanced sequencing, therapeutic yoga, prenatal yoga, working with injuries, advanced philosophy, and developing a personal teaching voice. These programs often include apprenticeship hours at local studios.',
    curriculum: ['Advanced sequencing and theming', 'Therapeutic and adaptive yoga', 'Subtle body and energy work', 'Advanced pranayama techniques', 'Teaching special populations', 'Mentored teaching practice'],
    locations: 'Marrakech, Essaouira',
  },
  {
    level: 'Specialized Certifications',
    duration: '7-14 days',
    price: '8,000-15,000 MAD',
    description:
      'Shorter intensive programs focusing on specific yoga disciplines or teaching skills. Popular specializations in Morocco include Yin Yoga teacher training, SUP (stand-up paddleboard) yoga certification, aerial yoga training, prenatal yoga, and children\'s yoga. These add valuable credentials for working teachers and provide deep dives into niche practices.',
    curriculum: ['Yin Yoga certification', 'Aerial yoga training', 'SUP yoga certification', 'Kids yoga specialization', 'Trauma-sensitive yoga', 'Sound healing integration'],
    locations: 'Marrakech, Taghazout, Essaouira',
  },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Flower2 className="w-5 h-5" />, label: 'Yoga Styles', value: '5+ Styles', detail: 'Vinyasa, Hatha, Yin, and more' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Key Regions', value: '6 Regions', detail: 'Coast to desert to mountains' },
  { icon: <DollarSign className="w-5 h-5" />, label: 'Price Range', value: '2,000-15,000 MAD', detail: 'Budget to luxury retreats' },
  { icon: <Calendar className="w-5 h-5" />, label: 'Best Seasons', value: 'Spring & Autumn', detail: 'March-May, Sept-Nov' },
  { icon: <Users className="w-5 h-5" />, label: 'Solo Friendly', value: 'Very Welcoming', detail: 'Most guests travel solo' },
  { icon: <Star className="w-5 h-5" />, label: 'Experience', value: 'All Levels', detail: 'Beginner to advanced' },
];

/* =====================================================================
   PAGE COMPONENT (Server Component)
   ===================================================================== */

export default function YogaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ═══════════════════════════════════════════════════════════
         HERO SECTION WITH BREADCRUMB
         ═══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-morocco-hero.webp"
            alt="Yoga practice on a Moroccan riad rooftop terrace at sunset with Atlas Mountains in the distance"
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
            <Link
              href="/wellness"
              className="hover:text-white transition-colors"
            >
              Wellness
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Yoga</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Mind, Body &amp; Spirit
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Yoga Retreats in Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From rooftop practices in ancient Marrakech riads to sunrise sessions on
              Saharan dunes, Morocco offers some of the world&rsquo;s most inspiring yoga
              retreat settings. Discover the perfect blend of wellness, culture, and
              natural beauty across six distinct regions.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ═══════════════════════════════════════════════════════════
         QUICK STATS BAR
         ═══════════════════════════════════════════════════════════ */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-[family-name:var(--font-heading)] font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 2: WHY YOGA IN MOROCCO
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Why Choose Morocco for Your Yoga Retreat?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has emerged as one of the world&rsquo;s top yoga retreat destinations,
              and for good reason. The kingdom offers an unmatched combination of factors
              that elevate the yoga experience beyond the ordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Sun className="w-6 h-6" />,
                title: 'Perfect Climate Year-Round',
                description:
                  'Morocco enjoys over 300 days of sunshine per year, with mild winters and warm springs and autumns. The diverse geography means you can always find a region with comfortable temperatures for outdoor practice, whether on the temperate coast, in the refreshing mountains, or under the warm desert sun. This reliable weather allows retreat centers to offer open-air yoga sessions almost every day of the year.',
              },
              {
                icon: <Flower2 className="w-6 h-6" />,
                title: 'Spiritual Atmosphere',
                description:
                  'Morocco has a deep spiritual heritage rooted in Sufi Islam, Berber mysticism, and centuries of cross-cultural exchange. The call to prayer echoing across ancient medinas, the sacred geometry of Islamic architecture, the contemplative silence of the Sahara, and the Berber reverence for nature all create an atmosphere that naturally supports introspection, meditation, and spiritual practice. Many yoga practitioners find that Morocco amplifies their inner work.',
              },
              {
                icon: <DollarSign className="w-6 h-6" />,
                title: 'Exceptional Value',
                description:
                  'Compared to yoga retreats in Bali, Costa Rica, or Southern Europe, Morocco offers significantly lower costs without sacrificing quality. Beautiful accommodation in traditional riads, gourmet organic Moroccan cuisine, expert international yoga instruction, and unique cultural excursions are all available at a fraction of the price you would pay elsewhere. A week-long mid-range retreat in Morocco costs what you might pay for just 3-4 days in many competing destinations.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 mb-4">
                  <span className="text-[var(--color-primary)]">{item.icon}</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                  A Landscape of Diversity
                </h3>
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Few countries can match Morocco&rsquo;s geographic diversity within such a compact area.
                    In a single week, you can practice yoga on a riad rooftop in a 1,000-year-old medina,
                    on a windswept Atlantic beach, in a lush mountain valley with snow-capped peaks, and
                    on golden Saharan dunes under a canopy of stars. This extraordinary variety means that
                    every retreat in Morocco offers a distinctly different experience.
                  </p>
                  <p>
                    Morocco&rsquo;s culinary tradition is another major draw for wellness travelers. The
                    cuisine is naturally plant-forward, with an abundance of fresh vegetables, legumes,
                    grains, nuts, and olive oil. Tagines slow-cooked with seasonal produce, colorful salad
                    platters, and fresh-squeezed juices make it easy for retreat centers to offer healthy,
                    delicious meals without resorting to bland &ldquo;health food.&rdquo; The Moroccan
                    tradition of hospitality ensures that you will be generously nourished throughout
                    your stay.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/images/photo-riad-rooftop-sunset.webp"
                  alt="Riad rooftop terrace at sunset overlooking Marrakech medina with Atlas Mountain views"
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <MapPin className="w-5 h-5" />,
                title: 'Easy Access from Europe',
                text: 'Morocco is just 2-3 hours by flight from most European cities, with direct flights from London, Paris, Madrid, Amsterdam, and many others. This proximity makes it ideal for short retreat breaks and long weekends.',
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: 'Safe and Welcoming',
                text: 'Morocco is one of the safest countries in Africa for travelers. The yoga community is well-established and welcoming, with retreat centers accustomed to hosting international guests. English and French are widely spoken.',
              },
              {
                icon: <Compass className="w-5 h-5" />,
                title: 'Cultural Richness',
                text: 'Beyond yoga, Morocco offers world-class cultural experiences: exploring ancient medinas, haggling in vibrant souks, learning traditional crafts, and connecting with the warm Berber and Arab hospitality that defines Moroccan culture.',
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: 'Holistic Wellness Tradition',
                text: 'Morocco has its own ancient wellness traditions, particularly the hammam (steam bath) ritual with black soap, ghassoul clay, and argan oil. Many retreats integrate these traditional treatments into their programs for a truly holistic experience.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/10">
                  <span className="text-[var(--color-accent)]">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 3: TOP YOGA RETREATS BY REGION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top Yoga Retreats by Region
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&rsquo;s diverse landscapes offer yoga experiences that range from
              coastal surf-and-stretch to silent desert meditation. Explore the best retreat
              centers across six spectacular regions.
            </p>
          </div>

          <div className="space-y-8">
            {topRetreats.map((retreat, index) => (
              <div
                key={retreat.name}
                className="card-moroccan overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-2">
                    <img
                      src={retreat.image}
                      alt={`${retreat.name} yoga retreat in ${retreat.region}, Morocco`}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#A0522D] bg-[#A0522D]/10 px-3 py-1 rounded-full">
                        <MapPin className="w-3 h-3" /> {retreat.region}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#C4960C]">
                        <Star className="w-3 h-3" /> {retreat.rating}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-2">
                      {retreat.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mb-3">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />{retreat.location}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {retreat.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Highlights</p>
                        <ul className="space-y-1">
                          {retreat.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Yoga Styles</p>
                          <div className="flex flex-wrap gap-1">
                            {retreat.yogaStyles.map((s) => (
                              <span key={s} className="text-xs bg-[#EDE8E0] text-[#1A1814] px-2 py-0.5 rounded-full">{s}</span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Duration</p>
                          <p className="text-sm font-semibold text-[var(--text-primary)]">
                            <Clock className="w-3.5 h-3.5 inline mr-1" />{retreat.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">Price Range</p>
                          <p className="text-sm font-semibold text-[#A0522D]">
                            <DollarSign className="w-3.5 h-3.5 inline mr-1" />{retreat.priceRange}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--border-light)]">
                      <p className="text-xs text-[var(--text-muted)]">
                        <Users className="w-3.5 h-3.5 inline mr-1" />
                        <span className="font-semibold">Best for:</span> {retreat.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 4: TYPES OF YOGA OFFERED
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Flower2 className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Types of Yoga Offered in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan retreats offer a diverse range of yoga styles to suit every
              practitioner, from dynamic flow sequences to deeply meditative stillness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yogaStyles.map((style) => (
              <div key={style.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <span className="text-[var(--color-primary)]">{style.icon}</span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {style.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {style.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <Users className="w-3.5 h-3.5 inline mr-1" />
                    <span className="font-semibold">Level:</span> {style.level}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Heart className="w-3.5 h-3.5 inline mr-1" />
                    <span className="font-semibold">Benefits:</span> {style.benefits}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    <span className="font-semibold">Availability:</span> {style.availability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 5: RETREAT COSTS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <DollarSign className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Yoga Retreat Costs in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco offers exceptional value for yoga retreats compared to other popular
              destinations. Here is what you can expect to pay across different budget levels.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left px-4 md:px-6 py-4 font-semibold text-[#1A1814] border-b border-[var(--border-light)]">Retreat Type</th>
                    <th className="text-left px-4 md:px-6 py-4 font-semibold text-[#A0522D] border-b border-[var(--border-light)]">Price (MAD)</th>
                    <th className="text-left px-4 md:px-6 py-4 font-semibold text-[var(--text-muted)] border-b border-[var(--border-light)]">USD Approx.</th>
                    <th className="text-left px-4 md:px-6 py-4 font-semibold text-[var(--text-muted)] border-b border-[var(--border-light)]">Typically Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {costBreakdown.map((row, i) => (
                    <tr key={row.category} className={i % 2 === 1 ? 'bg-[var(--surface-muted)]/50' : ''}>
                      <td className="px-4 md:px-6 py-3 font-medium text-[#1A1814] border-b border-[var(--border-light)]">{row.category}</td>
                      <td className="px-4 md:px-6 py-3 text-[#A0522D] font-semibold border-b border-[var(--border-light)]">{row.price}</td>
                      <td className="px-4 md:px-6 py-3 text-[var(--text-muted)] border-b border-[var(--border-light)]">{row.usd}</td>
                      <td className="px-4 md:px-6 py-3 text-[var(--text-secondary)] border-b border-[var(--border-light)]">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-4 md:px-6 py-4 bg-[var(--color-primary)]/5 text-xs text-[var(--text-secondary)]">
              All prices in Moroccan Dirham (MAD). 10 MAD is approximately 1 USD / 0.90 EUR. Prices as of 2025 and vary by season.
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 inline-flex p-2 rounded-lg bg-[#C4960C]/10">
                <Info className="w-5 h-5 text-[#C4960C]" />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#1A1814] mb-2">
                  Money-Saving Tips for Yoga Retreats
                </h3>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    Book during shoulder season (November or March) for lower rates and smaller groups
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    Choose shared accommodation to reduce costs by 20-30%
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    Look for early-bird discounts, often 10-15% off if booked 2-3 months in advance
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    Consider drop-in classes at local studios (50-100 MAD per class) if a full retreat exceeds your budget
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    Some retreat centers offer work-exchange programs: assist with tasks in exchange for free accommodation and yoga
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 6: YOGA + SURF PACKAGES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Yoga &amp; Surf Packages
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&rsquo;s Atlantic coast is one of the world&rsquo;s best destinations
              for combining surfing and yoga. The two disciplines complement each other
              perfectly: yoga builds the flexibility, balance, and breath control that
              improve surfing, while surfing provides the dynamic physical challenge that
              energizes yoga practice.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Waves className="w-5 h-5 inline mr-2 text-[var(--color-primary)]" />
                Best Surf &amp; Yoga Locations
              </h3>
              <div className="space-y-4">
                {[
                  {
                    spot: 'Taghazout',
                    description: 'The surf-yoga capital of Morocco with dozens of camps. Consistent waves year-round, legendary right-hand point breaks, and a vibrant international community. Best waves: October-April.',
                    level: 'All levels',
                  },
                  {
                    spot: 'Imsouane',
                    description: 'Known for the longest wave in Africa, this small fishing village offers a more authentic, less commercial experience. Perfect for beginners with its gentle bay waves and for advanced surfers seeking the famous right point break.',
                    level: 'Beginner to intermediate',
                  },
                  {
                    spot: 'Sidi Kaouki',
                    description: 'A wild, wind-swept beach south of Essaouira. Quieter and more rustic than Taghazout, with excellent wind conditions for kitesurfing alongside traditional surfing. The bohemian atmosphere attracts a creative crowd.',
                    level: 'Intermediate',
                  },
                  {
                    spot: 'Essaouira',
                    description: 'Strong winds make it ideal for kitesurfing and windsurfing, with calmer conditions for surfing in the morning before the wind picks up. The UNESCO-listed medina provides exceptional off-water culture and cuisine.',
                    level: 'All levels (kite/windsurf focus)',
                  },
                ].map((item) => (
                  <div key={item.spot} className="p-4 rounded-lg bg-[#EDE8E0]/50">
                    <p className="font-semibold text-[#1A1814] mb-1">{item.spot}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-1">{item.description}</p>
                    <p className="text-xs text-[#A0522D]">
                      <Users className="w-3 h-3 inline mr-1" />Level: {item.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Clock className="w-5 h-5 inline mr-2 text-[var(--color-primary)]" />
                Typical Surf &amp; Yoga Day
              </h3>
              <div className="space-y-3 mb-6">
                {[
                  { time: '07:00', desc: 'Sunrise yoga on the rooftop (Vinyasa Flow, 75 min)' },
                  { time: '08:30', desc: 'Healthy breakfast (smoothie bowls, eggs, fresh bread, fruit)' },
                  { time: '09:30', desc: 'Surf lesson or free surf session (2-3 hours)' },
                  { time: '13:00', desc: 'Lunch (Moroccan salads, fish tagine, fresh juices)' },
                  { time: '14:00', desc: 'Free time: hammam, massage, explore village, or rest' },
                  { time: '17:00', desc: 'Sunset yoga (Yin or Restorative, 60 min)' },
                  { time: '19:00', desc: 'Communal dinner and social evening' },
                ].map((item) => (
                  <div key={item.time} className="flex gap-3">
                    <span className="flex-shrink-0 text-xs font-mono font-semibold text-[#A0522D] w-12 pt-0.5">{item.time}</span>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-[var(--color-primary)]/5">
                <h4 className="font-semibold text-[#1A1814] text-sm mb-2">Typical Package Pricing</h4>
                <div className="space-y-1 text-sm text-[var(--text-secondary)]">
                  <p><span className="font-medium text-[#1A1814]">7 days / 6 nights:</span> 4,000-8,000 MAD ($400-$800)</p>
                  <p><span className="font-medium text-[#1A1814]">Includes:</span> Accommodation, daily yoga, 5 surf lessons, equipment, meals</p>
                  <p><span className="font-medium text-[#1A1814]">Extras:</span> Private surf coaching, massage, excursions (additional cost)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 7: YOGA + HIKING COMBOS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Yoga &amp; Hiking Combinations
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Atlas Mountains and Morocco&rsquo;s dramatic valleys provide spectacular
              settings for retreats that combine daily yoga with guided trekking through
              some of North Africa&rsquo;s most beautiful landscapes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                name: 'Atlas Mountains Yoga Trek',
                location: 'Imlil to Toubkal Base Camp',
                duration: '5-7 days',
                difficulty: 'Moderate',
                description:
                  'A structured retreat that alternates yoga practice days with guided treks through the High Atlas. The route passes through traditional Berber villages, walnut groves, and terraced valleys, culminating at the base camp of Jebel Toubkal (4,167 m), the highest peak in North Africa. Morning yoga sessions take place on mountain terraces with panoramic views, and evening sessions help stretch and restore tired hiking muscles. Accommodation is in mountain guesthouses (gites) and a Toubkal base camp refuge.',
                highlights: ['Trek to Toubkal base camp', 'Village-to-village walking', 'Mountain guesthouse stays', 'Berber cultural immersion'],
                price: '5,500-9,000 MAD',
              },
              {
                name: 'Ourika Valley Mindful Walks',
                location: 'Ourika Valley, near Marrakech',
                duration: '3-4 days',
                difficulty: 'Easy to moderate',
                description:
                  'A gentler combination ideal for those who prefer walking to strenuous hiking. Daily guided walks follow the Ourika River through gardens, orchards, and small villages, visiting the Setti Fatma waterfalls and local argan cooperatives. Yoga sessions morning and evening at the eco-lodge, with long, mindful lunch breaks enjoying traditional Berber cuisine. The valley is just 45 minutes from Marrakech, making it easy to combine with a city stay.',
                highlights: ['Setti Fatma waterfall trek', 'Argan oil cooperative visit', 'Riverside yoga', 'Easy Marrakech access'],
                price: '3,000-5,500 MAD',
              },
              {
                name: 'Dades Gorge & Rose Valley',
                location: 'Dades Valley, Central Morocco',
                duration: '5 days',
                difficulty: 'Moderate',
                description:
                  'Explore the dramatic Dades Gorge and the Valley of Roses on foot, with daily yoga practice on terraces overlooking the red-rock canyon. The route passes through the rose-growing villages of Kelaat M\'Gouna, where May brings the famous Rose Festival, and through the towering rock formations of the Dades Gorge. The landscape is reminiscent of the American Southwest but with kasbahs, palm groves, and Berber hospitality.',
                highlights: ['Dades Gorge canyon views', 'Rose Valley exploration', 'Kasbah accommodation', 'Sunset canyon yoga'],
                price: '4,500-7,500 MAD',
              },
            ].map((trek) => (
              <div key={trek.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#A0522D] bg-[#A0522D]/10 px-3 py-1 rounded-full">
                    <Mountain className="w-3 h-3" /> {trek.difficulty}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3 inline mr-1" />{trek.duration}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 inline mr-1" />{trek.location}
                  </span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-3">
                  {trek.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {trek.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {trek.highlights.map((h) => (
                    <span key={h} className="text-xs bg-[#EDE8E0] text-[#1A1814] px-3 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#A0522D]">
                  <DollarSign className="w-4 h-4 inline mr-1" />{trek.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 8: BEST SEASONS FOR YOGA RETREATS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Seasons for Yoga Retreats
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&rsquo;s climate varies significantly by region, so the best time for
              your yoga retreat depends on your chosen destination. Here is a seasonal
              breakdown to help you plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalGuide.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <span className="text-[var(--color-primary)]">{season.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < season.rating ? 'text-[#C4960C] fill-[#C4960C]' : 'text-[var(--border-light)]'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {season.description}
                </p>
                <div className="space-y-1 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    <span className="font-semibold">Best regions:</span> {season.bestRegions}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Sun className="w-3 h-3 inline mr-1" />
                    <span className="font-semibold">Temperature:</span> {season.temperature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 9: WHAT TO EXPECT - TYPICAL DAILY SCHEDULE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clock className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              What to Expect: A Typical Retreat Day
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              While every retreat has its own rhythm, most follow a similar daily structure
              designed to balance active practice with rest, nourishment, and exploration.
              Here is what a typical day looks like at a Moroccan yoga retreat.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-0">
              {typicalSchedule.map((item, index) => (
                <div key={item.time} className="flex gap-4 relative">
                  {index < typicalSchedule.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-[var(--border-light)]" />
                  )}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center z-10">
                    <span className="text-[var(--color-primary)]">{item.icon}</span>
                  </div>
                  <div className="pb-6">
                    <p className="text-xs font-mono font-semibold text-[#A0522D] mb-1">{item.time}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: <Info className="w-5 h-5" />,
                title: 'Flexibility',
                text: 'Most retreats allow you to skip sessions or swap activities. The schedule is a guide, not a requirement. Listen to your body.',
              },
              {
                icon: <Heart className="w-5 h-5" />,
                title: 'Meals',
                text: 'Expect delicious Moroccan-inspired wellness cuisine. Most retreats accommodate vegan, vegetarian, and gluten-free diets. Communicate dietary needs in advance.',
              },
              {
                icon: <Compass className="w-5 h-5" />,
                title: 'Excursions',
                text: 'Mid-retreat excursions are common: souk visits, waterfall hikes, cooking classes, hammam visits, or camel rides depending on the location.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5 text-center">
                <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 mb-3">
                  <span className="text-[var(--color-accent)]">{item.icon}</span>
                </div>
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 10: MEDITATION AND MINDFULNESS PRACTICES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Moon className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Meditation &amp; Mindfulness in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&rsquo;s landscapes and spiritual heritage create extraordinary
              environments for meditation and mindfulness practice. From the absolute
              silence of the Sahara to the rhythmic waves of the Atlantic, the country
              offers meditation settings that are truly unique on Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meditationPractices.map((practice) => (
              <div key={practice.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {practice.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {practice.description}
                </p>
                <div className="space-y-1 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    <span className="font-semibold">Location:</span> {practice.location}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Clock className="w-3 h-3 inline mr-1" />
                    <span className="font-semibold">Best time:</span> {practice.bestTime}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 md:p-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&rsquo;s Spiritual Heritage and Yoga
            </h3>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&rsquo;s spiritual traditions run deep, and many yoga practitioners find
                that the country&rsquo;s atmosphere naturally enhances their inner practice. The
                Sufi tradition of Islam, which emphasizes direct personal experience of the
                divine through meditation, chanting (dhikr), and movement, has been practiced
                in Morocco for centuries. The whirling, rhythmic music of the Gnawa spiritual
                brotherhood, with its roots in sub-Saharan African healing traditions, creates
                powerful trance-like states that complement meditation practice.
              </p>
              <p>
                The architecture itself is meditative: the geometric patterns of zellige tilework
                represent the infinite nature of creation, the flowing arabesques of carved plaster
                evoke the organic rhythms of nature, and the central courtyards of riads create
                enclosed garden sanctuaries that have been used for contemplation for centuries.
                Practicing yoga in these spaces connects you with a thousand-year tradition of
                spiritual seeking and inner refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 11: HAMMAM + YOGA WELLNESS PACKAGES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Hammam &amp; Yoga Wellness Packages
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The combination of traditional Moroccan hammam rituals with yoga creates
              a uniquely holistic wellness experience that you will not find anywhere else
              in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Why Combine Hammam &amp; Yoga?
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  The hammam and yoga are natural partners in wellness. The hammam&rsquo;s
                  deep heat and exfoliation open the body, soften muscles, and release
                  tension in ways that prepare the body beautifully for yoga practice.
                  Many practitioners find that their flexibility, range of motion, and
                  body awareness improve dramatically when yoga follows a hammam session.
                </p>
                <p>
                  Conversely, the gentle stretching and breathwork of yoga help integrate
                  the deep cleansing effects of the hammam, extending the sense of
                  physical and mental renewal. The combination addresses the body at
                  every level: the hammam cleanses the skin and superficial tissues,
                  while yoga works the deeper musculature, joints, and energy systems.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Typical Hammam-Yoga Packages
              </h3>
              <div className="space-y-3">
                {[
                  {
                    name: 'Half-Day Wellness',
                    price: '500-800 MAD',
                    desc: 'Morning yoga session followed by a full traditional hammam ritual with black soap scrub, ghassoul clay mask, and argan oil massage.',
                  },
                  {
                    name: 'Full-Day Renewal',
                    price: '800-1,500 MAD',
                    desc: 'Two yoga sessions (morning Vinyasa, afternoon Yin), hammam ritual, argan oil massage, and a healthy lunch in between.',
                  },
                  {
                    name: '3-Day Wellness Immersion',
                    price: '2,500-4,500 MAD',
                    desc: 'Three days of daily yoga, one hammam per day, guided meditation, healthy meals, and an optional cooking class or souk tour.',
                  },
                  {
                    name: 'Week-Long Holistic Retreat',
                    price: '6,000-12,000 MAD',
                    desc: 'Seven days combining twice-daily yoga, three hammam sessions, massage therapy, meditation, breathwork, and cultural excursions.',
                  },
                ].map((pkg) => (
                  <div key={pkg.name} className="p-3 rounded-lg bg-[#EDE8E0]/50">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold text-[#1A1814] text-sm">{pkg.name}</p>
                      <p className="text-xs font-semibold text-[#A0522D]">{pkg.price}</p>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[#1A1814]">Pro tip:</span> Schedule your hammam
              for the afternoon, before your evening Yin yoga session. The deep heat and exfoliation
              will leave your body warm and supple, allowing you to sink deeper into passive stretches.
              Avoid vigorous yoga immediately after a hammam &mdash; your body needs time to cool down
              and rehydrate. For the full experience, read our{' '}
              <Link href="/hammam" className="text-[#A0522D] underline hover:no-underline">
                complete hammam guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 12: SOLO TRAVELER FRIENDLY RETREATS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Solo Traveler Friendly Retreats
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              If you are traveling alone, a yoga retreat in Morocco is one of the best
              ways to experience the country safely, socially, and meaningfully. The
              majority of retreat participants are solo travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Why Retreats Are Perfect for Solo Travel',
                items: [
                  'Instant community: you arrive alone but are immediately part of a group of like-minded people',
                  'Structured days mean you never feel at a loss for what to do or where to go',
                  'Meals are communal, creating natural opportunities for conversation and connection',
                  'Shared activities like hiking excursions and cooking classes build friendships quickly',
                  'Safe environment with knowledgeable hosts who know the local area',
                  'Single-occupancy rooms available at most retreats (small supplement may apply)',
                ],
              },
              {
                title: 'Best Retreats for Solo Travelers',
                items: [
                  'Surf & yoga camps in Taghazout: the most social atmosphere, backpacker-friendly pricing, and a built-in surfing community',
                  'Riad retreats in Marrakech: small group sizes (8-15 people) ensure personal attention and close connections',
                  'Essaouira beachfront retreats: the bohemian, creative vibe attracts independent travelers and artists',
                  'Atlas Mountain retreats: the shared hiking experience bonds groups quickly; communal dinners in mountain guesthouses are memorable',
                  'Desert retreats in Merzouga: the intimacy of desert camping under the stars creates deep connections between participants',
                  'Ourika Valley retreats: close to Marrakech for easy independent exploration on free days',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Safety Tips for Solo Yoga Travelers in Morocco
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Choose established, well-reviewed retreat centers with a strong online presence and verifiable testimonials',
                'Book retreats that include airport transfers to avoid navigating unfamiliar transport systems alone',
                'Share your itinerary with someone at home and keep them updated throughout your trip',
                'Carry a copy of your retreat booking confirmation with the center\'s contact details at all times',
                'Download offline maps of the area around your retreat center before arriving',
                'Ask your retreat about their cancellation and refund policies before booking',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <Shield className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 13: TEACHER TRAINING PROGRAMS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Yoga Teacher Training in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has become an increasingly popular destination for yoga teacher
              training programs, offering immersive residential courses in stunning
              settings at significantly lower costs than comparable programs in Europe
              or North America.
            </p>
          </div>

          <div className="space-y-6">
            {teacherTrainingPrograms.map((program) => (
              <div key={program.level} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                    {program.level}
                  </h3>
                  <span className="text-xs font-semibold text-[#A0522D] bg-[#A0522D]/10 px-3 py-1 rounded-full">
                    {program.duration}
                  </span>
                  <span className="text-xs font-semibold text-[#C4960C]">
                    <DollarSign className="w-3 h-3 inline" />{program.price}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">Curriculum</p>
                    <ul className="space-y-1">
                      {program.curriculum.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">Locations</p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      <MapPin className="w-3.5 h-3.5 inline mr-1 text-[#A0522D]" />{program.locations}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[#1A1814] mb-2">
                Choosing a Teacher Training Program
              </h4>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  Verify that the program is registered with Yoga Alliance (RYS 200 or RYS 300) for internationally recognized certification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  Research the lead teachers: their training lineage, years of experience, and teaching style should align with your goals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  Ask about the student-to-teacher ratio: smaller groups (under 15) allow more personalized feedback and hands-on adjustments
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  Confirm what is included in the price: accommodation quality, meals, materials, and any additional certification fees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 14: FAQ
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Info className="w-7 h-7 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know before booking your yoga retreat in Morocco.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How much does a yoga retreat in Morocco cost?',
                a: 'Yoga retreats in Morocco range from 2,000-5,000 MAD ($200-$500) for budget 3-day retreats with shared accommodation and basic amenities, to 5,000-10,000 MAD ($500-$1,000) for mid-range 5-7 day retreats with private rooms and comprehensive programs, up to 10,000-15,000+ MAD ($1,000-$1,500+) for luxury week-long retreats with premium accommodation, gourmet meals, spa treatments, and private excursions. Prices typically include accommodation, meals, and daily yoga sessions. Surf-and-yoga packages on the coast tend to offer the best value at 4,000-8,000 MAD per week.',
              },
              {
                q: 'What is the best time of year for a yoga retreat in Morocco?',
                a: 'Spring (March-May) and autumn (September-November) are the best overall seasons, with comfortable temperatures across all regions and beautiful natural scenery. Winter (December-February) is excellent for the coast and desert, where daytime temperatures remain mild (15-22 degrees C). Summer (June-August) is best reserved for coastal and mountain retreats, as Marrakech and the interior become very hot. The shoulder months of March, April, October, and November often offer the best combination of pleasant weather and lower prices.',
              },
              {
                q: 'Can beginners join yoga retreats in Morocco?',
                a: 'Absolutely. The vast majority of yoga retreats in Morocco welcome all levels, from complete beginners to advanced practitioners. Many retreats offer multi-level classes where teachers provide modifications for different abilities. Hatha and Yin yoga sessions are particularly beginner-friendly. If you have never practiced yoga before, a retreat is actually one of the best ways to start: you receive more personal attention than in a busy studio class, and the immersive format allows you to develop a practice rapidly.',
              },
              {
                q: 'Is Morocco a good destination for solo travelers doing yoga retreats?',
                a: 'Morocco is excellent for solo yoga travelers. The majority of retreat participants (often 60-80%) are solo travelers, so you will be in good company. The communal nature of retreats, including shared meals, group excursions, and practice sessions, makes it very easy to connect with like-minded people. Retreat centers are accustomed to hosting solo guests and many offer single-occupancy rooms. The structured daily schedule means you always know what to do, and the safe, hosted environment removes the logistical stress of solo travel.',
              },
              {
                q: 'What types of yoga are offered at Moroccan retreats?',
                a: 'Moroccan retreats offer a wide range of yoga styles. The most common are Vinyasa Flow (dynamic, breath-linked sequences), Hatha (foundational poses held for longer periods), and Yin (passive, meditative long holds). Many retreats also offer Ashtanga (rigorous, set-sequence practice), Kundalini (spiritual practice with breathwork and chanting), Restorative (deeply relaxing, prop-supported poses), and specialized offerings like aerial yoga, SUP yoga, and partner yoga. Most retreats combine multiple styles across their daily schedule.',
              },
              {
                q: 'Are yoga teacher training programs available in Morocco?',
                a: 'Yes, several Yoga Alliance-certified programs operate in Morocco, primarily in Marrakech, Essaouira, and Taghazout. The standard 200-hour Registered Yoga Teacher (RYT 200) training runs 3-4 weeks and costs 15,000-25,000 MAD, which is significantly less than comparable programs in Europe or North America. Advanced 300-hour programs and specialized certifications (Yin, Aerial, SUP) are also available. The immersive, residential format in an inspiring location makes Morocco an excellent choice for teacher training.',
              },
              {
                q: 'Can I combine yoga with surfing in Morocco?',
                a: 'Surf-and-yoga is one of Morocco\'s signature retreat combinations, especially on the Atlantic coast at Taghazout, Essaouira, Imsouane, and Sidi Kaouki. Packages typically include morning yoga on a rooftop terrace, daytime surf lessons with equipment provided, and evening restorative yoga. A week-long surf-and-yoga package costs 4,000-8,000 MAD and includes accommodation, meals, daily yoga, and 5 surf lessons. Both beginners and experienced surfers are welcome.',
              },
              {
                q: 'What should I pack for a yoga retreat in Morocco?',
                a: 'Pack comfortable yoga clothing that provides modest coverage (Morocco is a Muslim country, so avoid very revealing workout wear in public areas). Bring a light travel yoga mat or mat towel for hygiene, although most retreats provide mats and props. Include sunscreen (SPF 50+), a reusable water bottle, layers for cool mornings and evenings, comfortable walking shoes for excursions, a swimsuit for pool or ocean, and a light scarf that can serve multiple purposes. For surf-and-yoga retreats, bring rash guards and reef shoes.',
              },
            ].map((faq) => (
              <details key={faq.q} className="card-moroccan group">
                <summary className="flex items-start gap-3 p-5 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden">
                  <ChevronRight className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0 transition-transform group-open:rotate-90" />
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] leading-snug">
                    {faq.q}
                  </h3>
                </summary>
                <div className="px-5 pb-5 pl-12">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         ROOFTOP YOGA FEATURE IMAGE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl aspect-[16/9] group">
            <img src="/images/hero-yoga-rooftop.webp" alt="Yoga session on a traditional Moroccan riad rooftop at sunrise with medina views" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6">
              <p className="text-white font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold">
                Rooftop Yoga in Morocco
              </p>
              <p className="text-white/80 text-sm md:text-base mt-1">
                Sunrise sessions on riad rooftops offer medina views, fresh mountain air, and a sense of peace that is uniquely Moroccan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         CTA SECTION
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Find Your Perfect Yoga Retreat?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our wellness guides, city pages, and activity listings to plan
            the yoga retreat of your dreams in Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wellness"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Heart className="w-4 h-4" /> Wellness Guide
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

      {/* ═══════════════════════════════════════════════════════════
         SECTION 15: EXPLORE MORE
         ═══════════════════════════════════════════════════════════ */}
      <ExploreMore
        currentCategory="activities"
        currentHref="/yoga"
        title="Continue Exploring Morocco"
      />
    </>
  );
}
