import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Camera,
  Compass,
  Heart,
  Eye,
  Sparkles,
  Mountain,
  Info,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
  Leaf,
  Shield,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Calendar,
  ArrowRight,
  Utensils,
  Bed,
  ShoppingBag,
  Landmark,
  Building,
  Building2,
  TreePine,
  Navigation,
  Wine,
  Music,
  Palette,
  Coffee,
  Footprints,
  Ticket,
  HandCoins,
  ThermometerSun,
  CloudSun,
  Umbrella,
  BadgeCheck,
  CircleDot,
  Map,
  Phone,
  MessageSquare,
  Plane,
  Train,
  Waves,
  Briefcase,
  Wifi,
  GlassWater,
  CircleHelp,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Casablanca Travel Guide 2025-2026 | Morocco\'s Modern Metropolis | Attractions, Dining & More',
  description:
    'The ultimate Casablanca travel guide. Explore the Hassan II Mosque, Art Deco heritage, Corniche beaches, Morocco Mall, Old Medina, Rick\'s Cafe, nightlife, business travel tips, and day trips. Real prices in MAD, neighborhood guides, and local insider tips for Morocco\'s largest city.',
  keywords: [
    'Casablanca travel guide',
    'Casablanca Morocco',
    'Hassan II Mosque',
    'Casablanca attractions',
    'Casablanca Art Deco',
    'Casablanca restaurants',
    'Rick\'s Cafe Casablanca',
    'Casablanca nightlife',
    'Morocco Mall',
    'Casablanca Corniche',
    'Casablanca beach',
    'Ain Diab Casablanca',
    'Casablanca business travel',
    'Casablanca hotels',
    'Casablanca day trips',
    'Habous Quarter Casablanca',
    'Casablanca Old Medina',
    'Casablanca neighborhoods',
    'best time to visit Casablanca',
    'Casablanca shopping guide',
    'Casablanca food guide',
    'Casablanca tramway',
    'Al Boraq TGV Morocco',
    'Casablanca airport',
    'Casablanca to Rabat',
    'Cathedral Sacre-Coeur Casablanca',
    'Place Mohammed V Casablanca',
    'Villa des Arts Casablanca',
    'Casablanca Jewish Museum',
  ],
  openGraph: {
    title: 'Casablanca Travel Guide 2025-2026 | The Complete City Guide',
    description:
      'Everything you need for Casablanca: Hassan II Mosque, Art Deco architecture, Corniche beaches, dining, nightlife, shopping, business travel, and day trips from Morocco\'s largest and most modern city.',
    url: 'https://moroccoguide.com/casablanca',
    type: 'article',
    images: [
      {
        url: '/images/hero-casablanca.webp',
        width: 1200,
        height: 630,
        alt: 'Hassan II Mosque in Casablanca at sunset with Atlantic Ocean waves crashing against the shore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casablanca Travel Guide 2025-2026 | Morocco\'s Modern Metropolis',
    description:
      'Complete guide to Casablanca: Hassan II Mosque, Art Deco heritage, Corniche, dining, nightlife, shopping, business tips, and day trips from Morocco\'s economic capital.',
    images: ['/images/hero-casablanca.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/casablanca',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '4.2 million', icon: Users },
  { label: 'Founded', value: '7th century', icon: BookOpen },
  { label: 'Elevation', value: '0-200 meters', icon: Mountain },
  { label: 'Airport', value: 'CMN (Mohammed V)', icon: Plane },
  { label: 'Language', value: 'Arabic, French, Darija', icon: MessageSquare },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Best Months', value: 'April-June, Sep-Nov', icon: Calendar },
];

/* =====================================================================
   DATA: CASABLANCA ESSENTIALS
   ===================================================================== */

const essentialTips = [
  {
    icon: Info,
    title: 'Dress Code',
    description: 'Casablanca is Morocco\'s most cosmopolitan city and dress codes are relatively relaxed in Maarif, Gauthier, and Ain Diab. In the Old Medina and Habous Quarter, modest clothing covering shoulders and knees is respectful. Beachwear is fine at Ain Diab beach clubs only.',
  },
  {
    icon: HandCoins,
    title: 'Tipping Culture',
    description: 'Tipping is customary. Restaurant waiters: 10-15% of the bill. Hotel porters: 10-20 MAD per bag. Taxi drivers: round up to the nearest 5 MAD. Tour guides at the Hassan II Mosque: 20-50 MAD. Cafe servers: 2-5 MAD for coffee or tea.',
  },
  {
    icon: Globe,
    title: 'Connectivity',
    description: 'Casablanca has excellent 4G and growing 5G coverage. Buy a SIM card at Mohammed V Airport from Maroc Telecom, Orange, or Inwi for 30-50 MAD with data. Wi-Fi is reliable in hotels, cafes, and the Morocco Mall. Most business hotels offer high-speed internet.',
  },
  {
    icon: Sun,
    title: 'Atlantic Climate',
    description: 'Casablanca enjoys a mild Mediterranean climate moderated by the Atlantic Ocean. Summers are warm but rarely exceed 30 degrees Celsius thanks to ocean breezes. Winters are mild with occasional rain from November to March. Pack layers for cool evenings year-round.',
  },
  {
    icon: Coffee,
    title: 'Cafe Culture',
    description: 'Casablancais take their cafe culture seriously. Nous-nous (half coffee, half milk) is the city\'s signature drink, served in small glasses for 10-15 MAD. Boulevard cafes along Mohammed V are perfect for people-watching. Tipping 2-5 MAD at cafes is standard.',
  },
  {
    icon: Calendar,
    title: 'Business Hours',
    description: 'Casablanca operates on a business-city schedule. Most shops open 9 AM to 8 PM with some closing for a midday break. The Corniche and Morocco Mall stay open late. Friday is the main prayer day with some businesses closing from noon to 2 PM. Banks close at 4 PM.',
  },
];
