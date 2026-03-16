import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  Home,
  Shield,
  Users,
  Globe,
  Heart,
  Search as SearchIcon,
  MessageSquare,
  Clock,
  CheckCircle2,
  DollarSign,
  Lightbulb,
  MapPin,
  Star,
  Award,
  Handshake,
  BookOpen,
  Camera,
  UtensilsCrossed,
  Mountain,
  Compass,
  Palette,
  Landmark,
} from 'lucide-react';
import GuidesClientSection from './GuidesClient';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Local Guides in Morocco | Certified Private Tour Guides',
  description:
    'Find and hire certified local guides across Morocco. Expert guides for medina tours, desert expeditions, food tours, photography walks, and cultural immersions in Marrakech, Fes, Chefchaouen, and beyond.',
  keywords: [
    'Morocco guide',
    'local guide Morocco',
    'private tour guide Marrakech',
    'Fes guide',
    'Morocco desert guide',
    'certified guide Morocco',
    'Morocco food tour guide',
    'Chefchaouen guide',
    'Atlas Mountains guide',
    'Sahara guide',
    'Morocco photography tour',
    'Morocco cultural guide',
    'hire guide Morocco',
    'Morocco guide price',
    'Morocco guide cost',
  ],
  openGraph: {
    title: 'Local Guides in Morocco - CityGuide',
    description:
      'Connect with 20+ certified local guides across Morocco for personalized tours and authentic experiences.',
    url: 'https://cityguide.ma/guides',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Local guide in the Marrakech medina, Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/guides' },
};

/* ================================================================
   GUIDES DATA
   ================================================================ */

type Specialty =
  | 'Medina Tours'
  | 'Desert Expeditions'
  | 'Food Tours'
  | 'Photography'
  | 'History'
  | 'Adventure'
  | 'Cultural'
  | 'Architecture';

interface Guide {
  name: string;
  slug: string;
  cityName: string;
  bio: string;
  languages: string[];
  specialties: Specialty[];
  experienceYears: number;
  rating: number;
  reviewCount: number;
  pricePerDayMad: number;
  image: string;
  isCertified: boolean;
}

const guides: Guide[] = [
  {
    name: 'Hassan El-Fassi',
    slug: 'hassan-el-fassi',
    cityName: 'Fes',
    bio: 'Born and raised in the Fes medina, Hassan has spent over 15 years sharing the hidden treasures of the world\'s largest car-free urban area. His deep knowledge of Marinid architecture and Fassi craftsmanship makes every tour an unforgettable journey through centuries of history.',
    languages: ['Arabic', 'French', 'English', 'Spanish'],
    specialties: ['Medina Tours', 'History', 'Architecture'],
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 342,
    pricePerDayMad: 800,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Fatima Benani',
    slug: 'fatima-benani',
    cityName: 'Marrakech',
    bio: 'Fatima is a passionate foodie and certified guide who brings Marrakech alive through its incredible cuisine. From hidden street stalls in the medina to palace kitchens, she reveals the stories and flavors behind every dish with warmth and infectious enthusiasm.',
    languages: ['Arabic', 'French', 'English'],
    specialties: ['Food Tours', 'Cultural', 'Medina Tours'],
    experienceYears: 8,
    rating: 4.9,
    reviewCount: 278,
    pricePerDayMad: 700,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Youssef Amrani',
    slug: 'youssef-amrani',
    cityName: 'Merzouga',
    bio: 'A Berber nomad turned professional guide, Youssef knows the Sahara like the back of his hand. He leads multi-day desert expeditions with authentic camp experiences, sharing ancient navigation techniques and stories under the stars that his grandfather taught him.',
    languages: ['Arabic', 'Tamazight', 'French', 'English'],
    specialties: ['Desert Expeditions', 'Adventure', 'Cultural'],
    experienceYears: 12,
    rating: 4.8,
    reviewCount: 195,
    pricePerDayMad: 900,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Leila Chraibi',
    slug: 'leila-chraibi',
    cityName: 'Chefchaouen',
    bio: 'Leila is a professional photographer and guide who combines her artistic eye with intimate local knowledge. Her photography walks through the blue streets of Chefchaouen reveal compositions and hidden corners that most visitors walk right past.',
    languages: ['Arabic', 'French', 'English', 'Italian'],
    specialties: ['Photography', 'Cultural', 'Medina Tours'],
    experienceYears: 6,
    rating: 4.8,
    reviewCount: 156,
    pricePerDayMad: 650,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Omar Tazi',
    slug: 'omar-tazi',
    cityName: 'Marrakech',
    bio: 'Omar holds a degree in Islamic art history and has been guiding in Marrakech for over two decades. He specializes in architectural tours of palaces, medersas, and mosques, bringing the intricate zellige, stucco, and cedar work to life with scholarly expertise.',
    languages: ['Arabic', 'French', 'English', 'German'],
    specialties: ['Architecture', 'History', 'Cultural'],
    experienceYears: 22,
    rating: 4.9,
    reviewCount: 410,
    pricePerDayMad: 950,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Khadija Lahlou',
    slug: 'khadija-lahlou',
    cityName: 'Essaouira',
    bio: 'Khadija is a Gnaoua music enthusiast and cultural guide who reveals the bohemian soul of Essaouira. Her tours blend history, music, art, and cuisine, connecting travelers with local artisans, musicians, and the creative community that makes this coastal town unique.',
    languages: ['Arabic', 'French', 'English'],
    specialties: ['Cultural', 'Food Tours', 'History'],
    experienceYears: 9,
    rating: 4.7,
    reviewCount: 134,
    pricePerDayMad: 600,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Driss Moussaoui',
    slug: 'driss-moussaoui',
    cityName: 'Imlil',
    bio: 'Driss is a certified mountain guide from the Berber village of Imlil in the High Atlas. He leads treks ranging from gentle valley walks to multi-day Toubkal summit expeditions, sharing his profound knowledge of Berber culture and mountain ecology along the way.',
    languages: ['Arabic', 'Tamazight', 'French', 'English'],
    specialties: ['Adventure', 'Cultural', 'Desert Expeditions'],
    experienceYears: 18,
    rating: 4.9,
    reviewCount: 267,
    pricePerDayMad: 850,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Amina Belkadi',
    slug: 'amina-belkadi',
    cityName: 'Rabat',
    bio: 'Amina offers a fresh perspective on Morocco\'s capital, combining its imperial heritage with its modern cultural renaissance. From the Kasbah of the Udayas to the contemporary art scene, she bridges centuries of history with the vibrant Rabat of today.',
    languages: ['Arabic', 'French', 'English', 'Spanish'],
    specialties: ['History', 'Architecture', 'Cultural'],
    experienceYears: 7,
    rating: 4.7,
    reviewCount: 98,
    pricePerDayMad: 650,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Rachid Ouazzani',
    slug: 'rachid-ouazzani',
    cityName: 'Ouarzazate',
    bio: 'Rachid is a desert and kasbah specialist who grew up in the shadow of Ait Ben Haddou. He guides travelers through the stunning Draa Valley, Rose Valley, and Dades Gorge, sharing insider knowledge of filming locations and the region\'s rich oasis culture.',
    languages: ['Arabic', 'Tamazight', 'French', 'English'],
    specialties: ['Desert Expeditions', 'History', 'Photography'],
    experienceYears: 14,
    rating: 4.8,
    reviewCount: 189,
    pricePerDayMad: 800,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Nadia Idrissi',
    slug: 'nadia-idrissi',
    cityName: 'Fes',
    bio: 'Nadia specializes in culinary experiences in the ancient city of Fes. She leads market tours through the spice souks, arranges private cooking lessons with local families, and reveals the centuries-old gastronomic traditions that make Fassi cuisine Morocco\'s finest.',
    languages: ['Arabic', 'French', 'English'],
    specialties: ['Food Tours', 'Cultural', 'Medina Tours'],
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 221,
    pricePerDayMad: 750,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Mohamed Benjelloun',
    slug: 'mohamed-benjelloun',
    cityName: 'Tangier',
    bio: 'Mohamed brings the colorful history of Tangier to life, from its days as an international zone to its literary legends like Paul Bowles and William Burroughs. His tours reveal the city where Europe meets Africa with deep cultural insight and engaging storytelling.',
    languages: ['Arabic', 'French', 'English', 'Spanish', 'Portuguese'],
    specialties: ['History', 'Cultural', 'Architecture'],
    experienceYears: 16,
    rating: 4.7,
    reviewCount: 175,
    pricePerDayMad: 700,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Samira Kettani',
    slug: 'samira-kettani',
    cityName: 'Marrakech',
    bio: 'Samira is a wellness and cultural guide who introduces travelers to Morocco\'s ancient healing traditions. She curates bespoke experiences including authentic hammam rituals, herbalist visits, yoga sessions, and argan oil cooperative tours.',
    languages: ['Arabic', 'French', 'English'],
    specialties: ['Cultural', 'Food Tours', 'Medina Tours'],
    experienceYears: 5,
    rating: 4.6,
    reviewCount: 89,
    pricePerDayMad: 600,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    isCertified: false,
  },
  {
    name: 'Karim Filali',
    slug: 'karim-filali',
    cityName: 'Agadir',
    bio: 'Karim is a surf instructor and adventure guide based on the Atlantic coast. He leads surfing expeditions along the best breaks between Agadir and Essaouira, as well as paragliding, quad biking, and Paradise Valley hiking trips.',
    languages: ['Arabic', 'French', 'English', 'German'],
    specialties: ['Adventure', 'Photography', 'Cultural'],
    experienceYears: 11,
    rating: 4.8,
    reviewCount: 167,
    pricePerDayMad: 750,
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Hafsa Berrada',
    slug: 'hafsa-berrada',
    cityName: 'Meknes',
    bio: 'Hafsa is a history scholar specializing in Morocco\'s imperial cities. She guides visitors through the grand monuments of Meknes, the Roman ruins of Volubilis, and the holy town of Moulay Idriss with academic depth delivered in an engaging, accessible style.',
    languages: ['Arabic', 'French', 'English'],
    specialties: ['History', 'Architecture', 'Cultural'],
    experienceYears: 13,
    rating: 4.7,
    reviewCount: 142,
    pricePerDayMad: 700,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Adil Cherkaoui',
    slug: 'adil-cherkaoui',
    cityName: 'Casablanca',
    bio: 'Adil showcases the modern face of Morocco through Casablanca\'s Art Deco heritage, the legendary Hassan II Mosque, and the thriving contemporary food scene. His tours challenge the common perception of Casa as just a transit city.',
    languages: ['Arabic', 'French', 'English', 'Italian'],
    specialties: ['Architecture', 'Food Tours', 'History'],
    experienceYears: 8,
    rating: 4.6,
    reviewCount: 113,
    pricePerDayMad: 650,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Zineb Alami',
    slug: 'zineb-alami',
    cityName: 'Chefchaouen',
    bio: 'Zineb grew up in the Rif Mountains and knows every blue-painted alley and hidden waterfall around Chefchaouen. Her cultural tours include visits to local weavers, cheese makers, and cannabis cooperative farms that have shaped the region\'s economy for centuries.',
    languages: ['Arabic', 'Tamazight', 'French', 'English'],
    specialties: ['Cultural', 'Medina Tours', 'Photography'],
    experienceYears: 7,
    rating: 4.7,
    reviewCount: 108,
    pricePerDayMad: 550,
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&q=80',
    isCertified: false,
  },
  {
    name: 'Hamza Mansouri',
    slug: 'hamza-mansouri',
    cityName: 'Merzouga',
    bio: 'Hamza leads luxury desert expeditions that go far beyond the typical camel ride. His multi-day Sahara journeys include visits to nomad families, fossil hunting, oasis exploration, and nights in exclusive private camps under the clearest skies you will ever see.',
    languages: ['Arabic', 'Tamazight', 'French', 'English'],
    specialties: ['Desert Expeditions', 'Adventure', 'Photography'],
    experienceYears: 10,
    rating: 4.9,
    reviewCount: 198,
    pricePerDayMad: 1000,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Salma El-Ouafi',
    slug: 'salma-el-ouafi',
    cityName: 'Marrakech',
    bio: 'Salma runs immersive photography tours through Marrakech, from the chaos of Jemaa el-Fnaa at golden hour to intimate portraits in the artisan quarters. As a published photographer, she teaches composition, lighting, and storytelling through the lens.',
    languages: ['Arabic', 'French', 'English'],
    specialties: ['Photography', 'Cultural', 'Medina Tours'],
    experienceYears: 9,
    rating: 4.8,
    reviewCount: 154,
    pricePerDayMad: 800,
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Abdellah Naciri',
    slug: 'abdellah-naciri',
    cityName: 'Tinghir',
    bio: 'Abdellah is a rock climbing instructor and gorge specialist based near Todra Gorge. He organizes climbing expeditions for all levels, canyon treks through the Dades Valley, and cultural visits to the remote Berber villages of the Anti-Atlas.',
    languages: ['Arabic', 'Tamazight', 'French', 'English'],
    specialties: ['Adventure', 'Cultural', 'Desert Expeditions'],
    experienceYears: 15,
    rating: 4.8,
    reviewCount: 176,
    pricePerDayMad: 850,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    isCertified: true,
  },
  {
    name: 'Imane Touhami',
    slug: 'imane-touhami',
    cityName: 'Fes',
    bio: 'Imane is an architect and heritage guide who reveals the structural genius behind the Fes medina\'s 9,000 alleyways. Her architectural tours decode the hidden language of Marinid design, from sacred geometry in zellige to the acoustic engineering of ancient medersas.',
    languages: ['Arabic', 'French', 'English', 'Japanese'],
    specialties: ['Architecture', 'History', 'Cultural'],
    experienceYears: 11,
    rating: 4.9,
    reviewCount: 203,
    pricePerDayMad: 850,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    isCertified: true,
  },
];

const SPECIALTIES: Specialty[] = [
  'Medina Tours',
  'Desert Expeditions',
  'Food Tours',
  'Photography',
  'History',
  'Adventure',
  'Cultural',
  'Architecture',
];

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Local Guides in Morocco',
    description:
      'A curated directory of certified local tour guides across Morocco offering personalized tours and authentic cultural experiences.',
    url: 'https://cityguide.ma/guides',
    numberOfItems: guides.length,
    itemListElement: guides.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'TouristInformationCenter',
        name: g.name,
        description: g.bio,
        url: `https://cityguide.ma/guides/${g.slug}`,
        image: g.image,
        address: {
          '@type': 'PostalAddress',
          addressLocality: g.cityName,
          addressCountry: 'MA',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: g.rating,
          bestRating: 5,
          reviewCount: g.reviewCount,
        },
        offers: {
          '@type': 'Offer',
          price: g.pricePerDayMad,
          priceCurrency: 'MAD',
          description: 'Per day rate',
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

const BENEFITS = [
  {
    icon: <Compass className="w-6 h-6" />,
    title: 'Navigate the Medinas',
    description:
      'Morocco\'s ancient medinas are a labyrinth of 9,000+ alleyways. A local guide ensures you discover hidden gems without getting lost, turning confusion into wonder.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Avoid Tourist Traps',
    description:
      'Guides steer you toward authentic experiences and fair prices. They know which restaurants locals eat at, which artisans produce genuine work, and where the real culture lives.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Bridge the Language Gap',
    description:
      'Most Moroccans speak Arabic and French. Your guide translates not just words but context, helping you communicate, bargain effectively, and understand cultural nuances.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Access Hidden Experiences',
    description:
      'Guides open doors that are closed to solo travelers: private riad courtyards, family-run workshops, home-cooked meals, and ceremonies that require a local introduction.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Rich Historical Context',
    description:
      'Morocco has 12 centuries of recorded history across Berber, Arab, Andalusian, and French influences. Guides bring monuments, ruins, and traditions to life with stories you will not find in any guidebook.',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Support Local Economy',
    description:
      'Hiring a local guide puts money directly into the community. Many guides support extended families and invest in education, preservation, and village development projects.',
  },
];

const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Browse & Choose',
    description:
      'Explore our directory of vetted local guides. Filter by city, specialty, language, and budget to find your perfect match. Read detailed profiles and verified reviews from past travelers.',
  },
  {
    step: 2,
    title: 'Connect & Customize',
    description:
      'Contact your chosen guide directly to discuss your interests, travel dates, group size, and any special requirements. Together you will design a personalized itinerary that matches your pace and passions.',
  },
  {
    step: 3,
    title: 'Experience & Enjoy',
    description:
      'Meet your guide and embark on an unforgettable journey. Your guide handles all logistics, entrance fees, and local arrangements so you can focus entirely on the experience.',
  },
];

const PRICING_TABLE = [
  {
    type: 'Medina Walking Tour',
    duration: 'Half day (3-4 hours)',
    priceRange: '300-500 MAD',
    priceUsd: '$30-50',
    notes: 'Most popular option for city exploration',
  },
  {
    type: 'Full Day City Guide',
    duration: 'Full day (7-8 hours)',
    priceRange: '600-1,000 MAD',
    priceUsd: '$60-100',
    notes: 'Includes multiple sites and lunch recommendations',
  },
  {
    type: 'Food & Cooking Tour',
    duration: 'Half day (4-5 hours)',
    priceRange: '450-750 MAD',
    priceUsd: '$45-75',
    notes: 'Food costs usually included in the price',
  },
  {
    type: 'Photography Tour',
    duration: 'Half day (3-4 hours)',
    priceRange: '500-800 MAD',
    priceUsd: '$50-80',
    notes: 'Golden hour timing, editing tips included',
  },
  {
    type: 'Desert Expedition',
    duration: 'Per day (multi-day)',
    priceRange: '800-1,200 MAD',
    priceUsd: '$80-120',
    notes: 'Camp, meals, and camel trek often included',
  },
  {
    type: 'Mountain Trekking',
    duration: 'Per day',
    priceRange: '700-1,000 MAD',
    priceUsd: '$70-100',
    notes: 'Certified mountain guides required above 3,000m',
  },
  {
    type: 'Architecture & History',
    duration: 'Full day (6-8 hours)',
    priceRange: '700-950 MAD',
    priceUsd: '$70-95',
    notes: 'Entrance fees to monuments usually extra',
  },
  {
    type: 'Adventure Activities',
    duration: 'Half day (3-5 hours)',
    priceRange: '600-900 MAD',
    priceUsd: '$60-90',
    notes: 'Equipment and safety gear included',
  },
];

const TIPS = [
  {
    title: 'Tipping Your Guide',
    description:
      'Tipping is customary and appreciated in Morocco. For a half-day tour, 50-100 MAD ($5-10) is standard. For a full-day tour, 100-200 MAD ($10-20) is appropriate. For multi-day expeditions, consider 200-300 MAD ($20-30) per day for exceptional service.',
  },
  {
    title: 'What to Expect on Your First Tour',
    description:
      'Your guide will typically meet you at your accommodation. Expect a relaxed pace with plenty of stops for photos, tea, and conversations. Moroccan guides pride themselves on hospitality and will often introduce you to local friends and family along the way.',
  },
  {
    title: 'Communicating Your Interests',
    description:
      'Be upfront about your interests, physical limitations, and dietary needs before the tour. The more your guide knows, the better they can customize the experience. Do not be shy about asking to skip sites or spend more time somewhere you love.',
  },
  {
    title: 'Respecting Local Customs',
    description:
      'Your guide will advise on appropriate dress and behavior, especially near mosques and religious sites. Follow their lead on greetings (a handshake between same genders is common). Always ask permission before photographing locals.',
  },
  {
    title: 'Handling Shopping Situations',
    description:
      'Guides may take you to shops where they receive a commission. This is normal practice. If you prefer not to shop, politely tell your guide in advance. When you do shop, your guide can be invaluable in negotiating fair prices.',
  },
  {
    title: 'Booking in Advance',
    description:
      'During peak season (March to May, September to November), the best guides book up weeks in advance. Reserve at least 2-3 weeks ahead for popular destinations like Marrakech and Fes. For desert expeditions, book 4-6 weeks ahead.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Do I need a guide to visit Morocco?',
    answer:
      'While Morocco is safe to explore independently, a guide significantly enhances the experience. In complex medinas like Fes and Marrakech, guides help you navigate the labyrinthine alleys, avoid common scams, and access experiences that are not available to unaccompanied visitors. For desert and mountain excursions, a guide is strongly recommended for safety.',
  },
  {
    question: 'Are the guides on this site officially licensed?',
    answer:
      'Most guides in our directory hold official certification from the Moroccan Ministry of Tourism. Certified guides display a badge on their profile. Morocco requires guides to pass rigorous exams covering history, geography, languages, and first aid. Some specialty guides (photography, food) may operate under different licensing categories.',
  },
  {
    question: 'How much does a guide cost per day in Morocco?',
    answer:
      'Guide rates in Morocco range from 300 MAD ($30) for a half-day medina walk to 1,200 MAD ($120) per day for premium desert expeditions. Full-day city guides typically charge 600-1,000 MAD ($60-100). Prices vary by city, specialty, experience level, and season. Rates listed are per group, not per person, making guides excellent value for couples and small groups.',
  },
  {
    question: 'Can guides accommodate families with children?',
    answer:
      'Absolutely. Most guides love working with families and will adjust the pace, route, and activities accordingly. They can arrange kid-friendly stops, shorter walking routes, and hands-on experiences like pottery workshops or camel rides that children enjoy. Let your guide know the ages of your children when booking.',
  },
  {
    question: 'What languages do Moroccan guides speak?',
    answer:
      'All official guides speak Arabic and French fluently. Many also speak English, and it is increasingly common to find guides fluent in Spanish, German, Italian, and even Japanese. Berber (Tamazight) speakers are essential for Atlas Mountain and Sahara regions. Our profiles list each guide\'s languages so you can find the right fit.',
  },
  {
    question: 'How far in advance should I book a guide?',
    answer:
      'For peak season (March-May and September-November), book 2-4 weeks in advance for popular cities. Desert and mountain expeditions require 4-6 weeks notice for logistics planning. During major events like the Fes Festival of World Sacred Music or Marrakech Film Festival, book even earlier. Off-season bookings can often be arranged within a few days.',
  },
  {
    question: 'What is included in the guide fee?',
    answer:
      'The base guide fee covers the guide\'s time, expertise, and route planning. Entrance fees to monuments, food tastings, transport, and activity equipment are typically extra unless specifically stated. Many food tour guides include all tastings in their price. Desert guides often include camp accommodation, meals, and camel rides. Always confirm inclusions when booking.',
  },
  {
    question: 'Can I share a guide with other travelers to reduce cost?',
    answer:
      'Some guides offer small group tours at reduced per-person rates, typically joining 4-8 travelers together. This works well for walking tours and food tours. For more personalized experiences, private tours are recommended. Ask your guide about group options when you make contact.',
  },
  {
    question: 'Is it safe to hire guides outside official channels?',
    answer:
      'We strongly recommend booking licensed, certified guides. Unofficial "faux guides" who approach tourists on the street are illegal in Morocco and often lead visitors to specific shops for commission. Licensed guides carry an official ID card, have verified credentials, and are accountable to the Ministry of Tourism.',
  },
  {
    question: 'What happens if I need to cancel my booking?',
    answer:
      'Cancellation policies vary by guide. Most offer a full refund for cancellations made 48-72 hours in advance. For multi-day expeditions with pre-arranged logistics (desert camps, mule teams), cancellation windows are typically longer. Discuss the cancellation policy with your guide before confirming your booking.',
  },
];

/* ================================================================
   PAGE COMPONENT (Server)
   ================================================================ */

export default function GuidesPage() {
  const uniqueCities = [...new Set(guides.map((g) => g.cityName))].sort();
  const certifiedCount = guides.filter((g) => g.isCertified).length;
  const totalLanguages = [...new Set(guides.flatMap((g) => g.languages))].length;
  const avgRating = (guides.reduce((sum, g) => sum + g.rating, 0) / guides.length).toFixed(1);
  const totalReviews = guides.reduce((sum, g) => sum + g.reviewCount, 0);

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
          <li className="text-text-primary font-medium">Local Guides</li>
        </ol>
      </nav>

      {/* -- Hero Section -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=1600&q=80"
            alt="Local guide leading a tour through the Marrakech medina"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Expert Local Knowledge
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Local Guides &amp; Experts
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Morocco is a country best experienced through the eyes of those who call it
              home. Connect with certified local guides who bring passion, deep expertise,
              and insider knowledge to every journey -- from medina masters and Sahara
              navigators to culinary storytellers and photography mentors.
            </p>
            <div className="flex flex-wrap gap-8 mt-10">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {guides.length}+
                </p>
                <p className="text-sm text-white/70">Expert Guides</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {certifiedCount}
                </p>
                <p className="text-sm text-white/70">Certified</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {uniqueCities.length}
                </p>
                <p className="text-sm text-white/70">Cities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-[var(--color-accent)]">
                  {totalLanguages}
                </p>
                <p className="text-sm text-white/70">Languages</p>
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

      {/* -- Why Book a Local Guide -- */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              The Local Advantage
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Book a Local Guide
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Morocco rewards those who travel with a local by their side. Here is
              what a knowledgeable guide brings to your experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="card-moroccan p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Guide Directory -- */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Our Directory
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Meet Your Guide
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Browse {guides.length} vetted local guides across {uniqueCities.length} Moroccan
            cities. Filter by specialty, language, city, or budget to find
            your ideal match.
          </p>
        </div>
        <GuidesClientSection
          guides={guides}
          specialties={SPECIALTIES}
          cities={uniqueCities}
        />
      </section>

      {/* -- How It Works -- */}
      <section className="bg-[var(--color-primary-900)] text-white py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-white/75 leading-relaxed">
              Booking a local guide is straightforward. Three simple steps
              to an unforgettable Moroccan experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] text-[var(--color-primary-900)] flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-2xl font-bold">{step.step}</span>
                </div>
                {step.step < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-6rem)] border-t-2 border-dashed border-white/20" />
                )}
                <h3 className="font-heading font-semibold text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Pricing Guide -- */}
      <section className="container-morocco py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Transparent Pricing
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Guide Pricing in Morocco
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Moroccan guide prices are very reasonable compared to Western countries.
            Rates are typically per group (not per person), making guides excellent
            value for couples and small groups. Here are typical 2025 rates.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="bg-primary/5 border-b-2 border-primary/20">
                <th className="text-left px-5 py-4 font-heading font-semibold text-text-primary text-sm">
                  Tour Type
                </th>
                <th className="text-left px-5 py-4 font-heading font-semibold text-text-primary text-sm">
                  Duration
                </th>
                <th className="text-left px-5 py-4 font-heading font-semibold text-text-primary text-sm">
                  Price (MAD)
                </th>
                <th className="text-left px-5 py-4 font-heading font-semibold text-text-primary text-sm">
                  Price (USD)
                </th>
                <th className="text-left px-5 py-4 font-heading font-semibold text-text-primary text-sm">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {PRICING_TABLE.map((row, i) => (
                <tr
                  key={row.type}
                  className={`border-b border-border-light ${i % 2 === 0 ? 'bg-white' : 'bg-sand-50'}`}
                >
                  <td className="px-5 py-4 text-sm font-medium text-text-primary">
                    {row.type}
                  </td>
                  <td className="px-5 py-4 text-sm text-text-secondary">
                    {row.duration}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold text-primary">
                    {row.priceRange}
                  </td>
                  <td className="px-5 py-4 text-sm text-text-secondary">
                    {row.priceUsd}
                  </td>
                  <td className="px-5 py-4 text-sm text-text-muted">
                    {row.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-5 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-xl">
          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
            <div>
              <p className="font-heading font-semibold text-text-primary text-sm mb-1">
                Good to Know
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Prices are per group, not per person. A guide costing 800 MAD/day is
                the same whether you are solo or a group of four. Larger groups (6+) may
                incur a small supplement. During Ramadan and off-season months (June-August),
                you may find lower rates. Always agree on the total price, inclusions,
                and meeting point before the tour begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Tips for Working with Guides -- */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Practical Advice
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Tips for Working with Your Guide
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Make the most of your guided experience with these practical tips
              from seasoned Morocco travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPS.map((tip, i) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-sm">{i + 1}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-text-primary">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Specialty Spotlight -- */}
      <section className="container-morocco py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
            Specialties
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Find a Guide by Specialty
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Our guides cover every facet of the Moroccan experience. Here is what
            each specialty offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <MapPin className="w-5 h-5" />,
              name: 'Medina Tours',
              count: guides.filter((g) => g.specialties.includes('Medina Tours')).length,
              description: 'Navigate the ancient walled cities with expert storytellers who know every alley, fountain, and hidden courtyard.',
            },
            {
              icon: <Compass className="w-5 h-5" />,
              name: 'Desert Expeditions',
              count: guides.filter((g) => g.specialties.includes('Desert Expeditions')).length,
              description: 'Multi-day Sahara journeys with Berber nomads including camel treks, dune camping, and stargazing.',
            },
            {
              icon: <UtensilsCrossed className="w-5 h-5" />,
              name: 'Food Tours',
              count: guides.filter((g) => g.specialties.includes('Food Tours')).length,
              description: 'Taste your way through souks, street stalls, and family kitchens with passionate culinary guides.',
            },
            {
              icon: <Camera className="w-5 h-5" />,
              name: 'Photography',
              count: guides.filter((g) => g.specialties.includes('Photography')).length,
              description: 'Professional photographers who reveal the most photogenic spots and teach composition techniques.',
            },
            {
              icon: <Landmark className="w-5 h-5" />,
              name: 'History',
              count: guides.filter((g) => g.specialties.includes('History')).length,
              description: 'Scholars and storytellers who bring 12 centuries of Moroccan history to vivid life.',
            },
            {
              icon: <Mountain className="w-5 h-5" />,
              name: 'Adventure',
              count: guides.filter((g) => g.specialties.includes('Adventure')).length,
              description: 'Certified mountain guides, surf instructors, and climbing experts for active travelers.',
            },
            {
              icon: <Palette className="w-5 h-5" />,
              name: 'Cultural',
              count: guides.filter((g) => g.specialties.includes('Cultural')).length,
              description: 'Deep cultural immersion including artisan workshops, music, ceremonies, and community visits.',
            },
            {
              icon: <Award className="w-5 h-5" />,
              name: 'Architecture',
              count: guides.filter((g) => g.specialties.includes('Architecture')).length,
              description: 'Art historians and architects who decode zellige, stucco, cedar work, and sacred geometry.',
            },
          ].map((spec) => (
            <div key={spec.name} className="card-moroccan p-5 text-center">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                {spec.icon}
              </div>
              <h3 className="font-heading font-semibold text-base text-text-primary mb-1">
                {spec.name}
              </h3>
              <p className="text-xs text-primary font-semibold mb-2">
                {spec.count} guides
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="bg-sand-50 py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Everything you need to know about hiring a local guide in Morocco.
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
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1600&q=80"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-morocco text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Explore Morocco?
          </h2>
          <p className="text-white/75 leading-relaxed mb-8">
            Browse our directory above to find the perfect guide for your journey.
            Whether you are wandering ancient medinas, crossing Sahara dunes, or
            savoring tagine with a local family, the right guide transforms a
            good trip into an extraordinary one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-primary-900)] font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Browse Tours
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Get Recommendations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
