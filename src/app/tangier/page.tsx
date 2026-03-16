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
  Ship,
  Anchor,
  Train,
  Pen,
  Film,
  Waves,
  BusFront,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Tangier Travel Guide 2025-2026 | Where Africa Meets Europe | Gateway Between Continents',
  description:
    'The ultimate Tangier travel guide. Explore the Kasbah, Cap Spartel, Caves of Hercules, Petit Socco, the American Legation Museum, and the Beat Generation literary trail. Best restaurants, ferries to Spain, TGV train, day trips to Chefchaouen and Asilah, nightlife, budget tips, and safety advice.',
  keywords: [
    'Tangier travel guide',
    'Tangier Morocco',
    'Tangier medina',
    'Cap Spartel',
    'Caves of Hercules',
    'Tangier ferry Spain',
    'Tangier Kasbah',
    'Petit Socco Tangier',
    'Grand Socco Tangier',
    'American Legation Museum',
    'Paul Bowles Tangier',
    'Beat Generation Morocco',
    'Cafe Hafa Tangier',
    'Tangier restaurants',
    'Tangier nightlife',
    'TangerMed port',
    'Al Boraq TGV Morocco',
    'Tangier to Casablanca train',
    'Tangier to Tarifa ferry',
    'Tangier day trips',
    'Asilah day trip',
    'Chefchaouen from Tangier',
    'Tangier hotels',
    'El Minzah Hotel',
    'Tangier safety tips',
    'Tangier budget guide',
    'best time to visit Tangier',
    'Tangier literary history',
    'William Burroughs Tangier',
    'Tangier International Zone',
  ],
  openGraph: {
    title: 'Tangier Travel Guide 2025-2026 | Where Africa Meets Europe',
    description:
      'Everything you need for Tangier: the Kasbah, Cap Spartel, literary heritage, ferries to Spain, Al Boraq TGV, restaurants, day trips, and a complete guide to Morocco\'s gateway between continents.',
    url: 'https://moroccoguide.com/tangier',
    type: 'article',
    images: [
      {
        url: '/images/hero-tangier-bay.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Tangier Bay with the medina and port at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangier Travel Guide 2025-2026 | Where Africa Meets Europe',
    description:
      'Complete guide to Tangier: Kasbah, Cap Spartel, Caves of Hercules, Beat Generation trail, ferries to Spain, TGV train, restaurants, Cafe Hafa, day trips, and practical tips.',
    images: ['/images/hero-tangier-bay.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/tangier',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '1.1 million', icon: Users },
  { label: 'Founded', value: '5th century BC', icon: BookOpen },
  { label: 'Elevation', value: '15 meters', icon: Mountain },
  { label: 'Airport', value: 'TNG (Ibn Battouta)', icon: Globe },
  { label: 'Language', value: 'Arabic, French, Spanish', icon: MessageSquare },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Best Months', value: 'April-June, Sep-Oct', icon: Calendar },
];

/* =====================================================================
   DATA: TANGIER ESSENTIALS
   ===================================================================== */

const essentialTips = [
  {
    icon: Info,
    title: 'Three Languages',
    description: 'Tangier is uniquely trilingual. Arabic and French are spoken everywhere, but thanks to proximity to Spain and the International Zone legacy, Spanish is widely understood. English is increasingly common in tourist areas.',
  },
  {
    icon: Globe,
    title: 'Strait of Gibraltar',
    description: 'On a clear day, you can see Spain from Tangier. Only 14 kilometers of water separate Africa from Europe here. The Strait is one of the busiest shipping lanes on Earth, with over 300 vessels passing daily.',
  },
  {
    icon: Ship,
    title: 'Ferry Hub',
    description: 'Tangier is Morocco\'s main ferry gateway to Europe. Fast ferries to Tarifa (Spain) take just 35 minutes. The port is walkable from the medina. Book tickets in advance during summer and holiday periods.',
  },
  {
    icon: Train,
    title: 'Al Boraq TGV',
    description: 'Africa\'s first high-speed train connects Tangier to Casablanca in 2 hours 10 minutes, with stops in Kenitra and Rabat. Trains run 8 times daily. Book online at oncf.ma or at Tangier Ville station.',
  },
  {
    icon: HandCoins,
    title: 'Tipping Culture',
    description: 'Tipping is expected. Restaurant waiters: 10-15%. Cafe servers: round up to nearest 5 MAD. Hotel porters: 10-20 MAD. Tour guides: 100-200 MAD. Taxi drivers: round up the fare.',
  },
  {
    icon: Calendar,
    title: 'Ramadan Awareness',
    description: 'During Ramadan, many restaurants close during daylight hours. Eating, drinking, or smoking in public during fasting hours is considered disrespectful. Evenings become festive with special foods and late-night activity.',
  },
];
