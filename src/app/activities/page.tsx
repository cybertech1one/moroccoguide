import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  Waves,
  Wind,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle,
  Compass,
  Flame,
  TrendingUp,
  AlertTriangle,
  ThermometerSun,
  Shield,
  Bike,
  Snowflake,
  Sun,
  ArrowRight,
  Heart,
  Users,
  Camera,
  Utensils,
  Palette,
  TreePine,
  Dumbbell,
  Zap,
  Globe,
  BookOpen,
  PhoneCall,
  Lightbulb,
  Droplets,
  Fish,
  Gamepad2,
  Scissors,
  Music,
  Sparkles,
  Target,
  CircleDollarSign,
} from 'lucide-react';
import ActivitiesClientSection from './ActivitiesClient';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Morocco Activities & Things to Do | 28 Adventures with Real Locations, Prices & Plans',
  description:
    'The ultimate guide to 28+ activities across Morocco with real locations, verified prices in MAD, operator details, and practical booking tips. Hot air balloons, water parks, quad biking, camel treks, surfing, skiing, go-karting, golf, zip lining, and more.',
  keywords: [
    'Morocco activities',
    'things to do in Morocco',
    'hot air balloon Marrakech',
    'Oasiria water park Marrakech',
    'quad biking Palmeraie',
    'camel riding Merzouga',
    'surfing Taghazout',
    'kitesurfing Dakhla',
    'parasailing Agadir',
    'zip lining Terres d Amanar',
    'go karting Marrakech',
    'golf Royal Golf Marrakech',
    'skiing Oukaimeden Morocco',
    'sandboarding Erg Chebbi',
    'paragliding Morocco',
    'horseback riding Essaouira',
    'cooking class Marrakech',
    'pottery workshop Fes',
    'hammam Morocco',
    'escape room Marrakech',
    'paintball Morocco',
    'buggy tour Agafay',
    'via ferrata Todra Gorge',
    'yoga retreat Taghazout',
    'fishing Tangier Morocco',
    'mountain biking Atlas',
    'Morocco adventure guide',
    'Morocco family activities',
  ],
  openGraph: {
    title:
      'Morocco Activities & Things to Do | 28 Adventures with Real Locations & Prices',
    description:
      'Plan every activity in Morocco end-to-end. 28 real adventures with verified locations, prices in MAD, operators, difficulty levels, seasonal guides, and pro tips.',
    url: 'https://citytoursmorocco.com/activities',
    images: [
      {
        url: '/images/hero-trekking.webp',
        width: 1200,
        height: 630,
        alt: 'Adventure activities across Morocco including trekking, surfing, and desert sports',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/activities' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://citytoursmorocco.com/activities#page',
      name: 'Morocco Activities & Things to Do',
      description:
        'Comprehensive guide to 28+ activities across Morocco with real locations, verified prices, operators, and practical booking information.',
      url: 'https://citytoursmorocco.com/activities',
      image: '/images/hero-trekking.webp',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What are the best adventure activities in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Morocco offers world-class adventure activities including hot air balloon rides over Marrakech (from 1,500 MAD), quad biking in the Palmeraie and Agafay Desert (500-800 MAD), camel trekking in the Sahara at Erg Chebbi (from 350 MAD), surfing at Taghazout, kitesurfing in Dakhla, zip lining at Terres d'Amanar, rock climbing at Todra Gorge, sandboarding at Merzouga, paragliding near Marrakech, and skiing at Oukaimeden in winter.",
          },
        },
        {
          '@type': 'Question',
          name: 'Are there water parks in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Oasiria Water Park in Marrakech (Route d'Amizmiz, Km 4) is the largest with wave pools, slides, and lazy rivers at 250 MAD for adults. Aquapark in Agadir (Chemin des Dunes) costs 200 MAD. Both open May-September.",
          },
        },
        {
          '@type': 'Question',
          name: 'Can you ski in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. Oukaimeden is Africa's highest ski resort at 2,600m, 75 km from Marrakech. Season: January-March. Lift pass: 100 MAD/day. Equipment rental: 200-300 MAD. 7 runs for various levels.",
          },
        },
        {
          '@type': 'Question',
          name: 'What family-friendly activities are available in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Family-friendly: Oasiria Water Park, Palmeraie camel rides (from 200 MAD, age 4+), go-karting at Marrakech Grand Prix (200 MAD, junior karts), cooking classes, pottery workshops in Fes, escape rooms, horseback riding on Essaouira beach.',
          },
        },
      ],
    },
  ],
};
