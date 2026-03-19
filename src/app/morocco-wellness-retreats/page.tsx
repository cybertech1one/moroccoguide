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
  Mountain,
  Wind,
  Globe,
  MessageCircle,
  Bed,
  Coffee,
  Sun,
  Wallet,
  Calendar,
  Leaf,
  Droplets,
  Flame,
  CircleDot,
  TreeDeciduous,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Wellness Retreats 2026 | Yoga, Spa Holidays & Holistic Healing Guide',
  description:
    'Discover the best wellness retreats in Morocco. Yoga programs, luxury spa holidays, hammam rituals, meditation retreats, detox programs, and holistic healing. Prices in MAD with booking tips.',
  keywords: [
    'Morocco wellness retreat',
    'Morocco yoga retreat',
    'Morocco spa holiday',
    'wellness vacation Morocco',
    'Morocco meditation retreat',
    'Morocco detox retreat',
    'yoga Morocco Marrakech',
    'Morocco holistic healing',
    'wellness travel Morocco',
    'Morocco hammam spa retreat',
    'Morocco Ayurveda retreat',
    'yoga holiday Morocco 2026',
    'Morocco wellness resort',
    'best wellness retreats Morocco',
    'Morocco retreat center',
    'Morocco spa break',
    'wellness tourism Morocco',
    'Morocco health retreat',
    'spiritual retreat Morocco',
    'Morocco yoga and surf retreat',
  ],
  openGraph: {
    title: 'Morocco Wellness Retreats 2026 | Yoga, Spa Holidays & Holistic Healing Guide',
    description:
      'The definitive guide to wellness retreats in Morocco. Yoga programs, luxury spas, hammam rituals, meditation, detox, and holistic healing with prices and booking tips.',
    url: `${BASE_URL}/morocco-wellness-retreats`,
    images: [
      {
        url: `${BASE_URL}/images/hero-wellness-spa.webp`,
        width: 1200,
        height: 630,
        alt: 'Serene wellness spa setting in Morocco with natural light, lush greenery, and traditional Moroccan architectural elements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Wellness Retreats 2026 | Yoga, Spa & Holistic Healing',
    description:
      'Yoga programs, luxury hammam spas, meditation retreats, and holistic healing in Morocco. The complete wellness travel guide.',
    images: [`${BASE_URL}/images/hero-wellness-spa.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-wellness-retreats` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-wellness-retreats`,
  name: 'Morocco Wellness Retreats 2026 | Yoga, Spa Holidays & Holistic Healing Guide',
  description:
    'The definitive guide to wellness retreats in Morocco. Yoga programs, luxury spa holidays, traditional hammam rituals, meditation retreats, detox programs, Ayurveda, and holistic healing with prices and booking tips.',
  url: `${BASE_URL}/morocco-wellness-retreats`,
  image: `${BASE_URL}/images/hero-wellness-spa.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-wellness-retreats`,
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
      { '@type': 'ListItem', position: 2, name: 'Wellness Retreats Morocco', item: `${BASE_URL}/morocco-wellness-retreats` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a wellness retreat in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wellness retreats in Morocco range from 3,000 MAD per person for a weekend hammam and yoga break to 25,000-50,000 MAD per person for a week-long luxury spa retreat with full board, daily treatments, and private yoga sessions. Mid-range yoga retreats cost from 8,000-15,000 MAD for 5-7 days including accommodation, meals, and daily classes. Morocco offers exceptional value compared to equivalent retreats in Bali, Thailand, or Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a wellness retreat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best seasons for wellness retreats are spring (March-May) and autumn (September-November) when temperatures are comfortable for outdoor yoga and activities. Spring brings wildflowers and pleasant warmth (20-28 degrees Celsius). Winter (December-February) is ideal for coastal retreats in Essaouira and Agadir with mild temperatures. Avoid July-August for inland retreats when temperatures can exceed 40 degrees Celsius, though coastal locations remain pleasant.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of wellness retreats are available in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers diverse wellness retreats including yoga and meditation retreats, traditional hammam and spa holidays, detox and cleansing programs, Ayurveda and holistic healing retreats, yoga and surf combinations on the Atlantic coast, silent meditation retreats in the desert, mountain wellness escapes in the Atlas, and luxury spa breaks in Marrakech riads. Many retreats combine multiple modalities for a comprehensive wellness experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco wellness retreats suitable for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Most Morocco wellness retreats welcome all levels from complete beginners to advanced practitioners. Yoga retreats typically offer classes at multiple levels simultaneously, and teachers provide individual modifications. Hammam and spa treatments require no experience at all. Many retreat centers specifically design beginner-friendly programs that introduce wellness practices gradually in a supportive, non-judgmental environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a wellness retreat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack comfortable yoga or exercise clothing, a light sweater for cooler mornings and evenings, modest clothing for exploring nearby towns (covering shoulders and knees), a swimsuit for pools and hammams, sunscreen and a hat, a reusable water bottle, a personal yoga mat if you prefer your own (most retreats provide mats), and any supplements or health products you rely on. Pack light layers as temperatures can shift significantly between morning yoga and afternoon heat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine a wellness retreat with sightseeing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many travelers combine a 4-7 day wellness retreat with cultural exploration before or after. A popular approach is to spend the first half of your trip on a retreat in Essaouira, the Atlas Mountains, or the Sahara, then explore Marrakech or Fes for culture, food, and shopping. Some retreats include curated excursions like medina tours, souk visits, or desert trips as part of their program, blending wellness with authentic Moroccan cultural immersion.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Moroccan hammam and what should I expect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A traditional Moroccan hammam is a steam bath ritual that has been practiced for over a thousand years. The experience typically involves three heated rooms of increasing temperature. An attendant applies black soap (savon noir) made from olives, scrubs your skin with a kessa glove to remove dead skin, applies a ghassoul clay mask from the Atlas Mountains, and finishes with an argan oil massage and rose water rinse. The entire ritual takes 60-90 minutes and leaves skin remarkably soft and rejuvenated.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo female travelers attending wellness retreats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for solo female travelers attending wellness retreats. Retreat centers provide a secure, welcoming environment with staff experienced in hosting international guests. Many retreats have a majority female clientele and create supportive community spaces. When outside the retreat, standard travel precautions apply: dress modestly, stay in well-reviewed accommodation, use registered taxis, and trust your instincts. Many solo women describe their Morocco wellness retreat as a transformative and empowering experience.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF WELLNESS RETREATS
   ═══════════════════════════════════════════════════════════════ */

const retreatTypes = [
  {
    type: 'Yoga Retreats',
    icon: Wind,
    description:
      'From Vinyasa flow on Atlantic rooftops to Hatha sunrise sessions overlooking the Atlas Mountains, Morocco hosts world-class yoga retreats year-round. Programs range from 3-day intensive weekends to month-long teacher training courses. Many include daily meditation, breathwork (pranayama), and philosophy discussions alongside physical practice.',
    bestFor: 'All levels, couples, solo travelers',
    price: 'From 5,000 MAD per person (5-day retreat)',
  },
  {
    type: 'Hammam & Spa Holidays',
    icon: Droplets,
    description:
      'Immerse yourself in Morocco\'s thousand-year-old bathing tradition. Luxury spa holidays center around daily hammam rituals with black soap scrubs, ghassoul clay masks, and argan oil massages, complemented by pool relaxation, facial treatments, and body wraps using indigenous Moroccan ingredients like rose water, saffron, and prickly pear.',
    bestFor: 'Couples, spa lovers, first-time visitors',
    price: 'From 8,000 MAD per person (3-day luxury spa break)',
  },
  {
    type: 'Meditation & Mindfulness',
    icon: CircleDot,
    description:
      'The Sahara Desert and Atlas Mountains provide profoundly still environments for silent meditation retreats. Programs include guided Vipassana, Zen, and loving-kindness meditation, often combined with journaling, digital detox, and contemplative nature walks. Desert retreats under star-filled skies offer a silence and spaciousness that urban meditators rarely encounter.',
    bestFor: 'Stress recovery, spiritual seekers, experienced meditators',
    price: 'From 6,000 MAD per person (5-day silent retreat)',
  },
  {
    type: 'Detox & Cleansing Programs',
    icon: Leaf,
    description:
      'Structured detox retreats combine clean plant-based Moroccan cuisine, fresh-pressed juices, herbal teas, colonics or gentle cleanses, daily yoga, hammam treatments, and educational nutrition workshops. Morocco\'s abundance of fresh organic produce, pure argan oil, and medicinal herbs like thyme, sage, and verbena makes it an ideal destination for resetting the body.',
    bestFor: 'Health-conscious travelers, post-holiday reset',
    price: 'From 10,000 MAD per person (7-day detox)',
  },
  {
    type: 'Holistic Healing & Ayurveda',
    icon: Flame,
    description:
      'A growing number of Moroccan retreat centers integrate Ayurvedic principles, Reiki, sound healing, Traditional Chinese Medicine, and naturopathy with local Moroccan healing traditions. These programs offer personalized wellness assessments, customized herbal treatments, energy work, and dietary guidance tailored to your individual constitution and health goals.',
    bestFor: 'Chronic health concerns, deep healing, wellness enthusiasts',
    price: 'From 12,000 MAD per person (7-day holistic program)',
  },
  {
    type: 'Yoga & Surf Retreats',
    icon: Sun,
    description:
      'Morocco\'s Atlantic coast, particularly Taghazout and Essaouira, has become a global hub for yoga and surf retreats. Morning surf sessions in world-class waves are followed by afternoon yoga to stretch and restore the body. These retreats attract a vibrant, social crowd and combine physical challenge with deep relaxation in a stunning coastal setting.',
    bestFor: 'Active travelers, beginners to intermediate surfers',
    price: 'From 7,000 MAD per person (7-day surf and yoga)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP RETREAT CENTERS BY REGION
   ═══════════════════════════════════════════════════════════════ */

const retreatCenters = [
  {
    name: 'Peacock Pavilions',
    region: 'Marrakech',
    type: 'Boutique Yoga & Wellness Retreat',
    icon: Sparkles,
    price: 'From 2,500 MAD per night (all-inclusive retreat)',
    image: '/images/hero-marrakech.webp',
    description:
      'Set on two acres of organic gardens just outside the Marrakech medina, Peacock Pavilions is a design-forward boutique property that hosts international yoga teachers and wellness practitioners year-round. The open-air yoga pavilion, rooftop meditation deck, organic kitchen garden, and traditional hammam create an ideal environment for transformation. Programs range from weekend yoga intensives to week-long detox and meditation retreats.',
    highlights: ['Open-air yoga pavilion with Atlas views', 'Organic kitchen garden and farm-to-table meals', 'Traditional hammam on-site', 'International visiting teachers year-round'],
  },
  {
    name: 'Atlas Kasbah Ecolodge',
    region: 'Atlas Mountains / Agadir',
    type: 'Mountain Eco-Wellness Retreat',
    icon: Mountain,
    price: 'From 1,800 MAD per night (full board)',
    image: '/images/hero-atlas.webp',
    description:
      'Perched in the western High Atlas with panoramic views stretching to the Atlantic, this eco-certified retreat offers yoga programs, Berber wellness traditions, mountain hiking, and organic cuisine sourced from the surrounding village farms. The stone-and-earth architecture, solar power, and spring-fed pools reflect a deep commitment to sustainability. Silence and mountain air provide the ideal backdrop for meditation and personal renewal.',
    highlights: ['Panoramic Atlas-to-ocean views', 'Eco-certified sustainable property', 'Berber wellness traditions', 'Mountain hiking and nature walks'],
  },
  {
    name: 'Surf Maroc Taghazout',
    region: 'Taghazout (Atlantic Coast)',
    type: 'Yoga & Surf Retreat',
    icon: Sun,
    price: 'From 6,500 MAD per person (7-day retreat)',
    image: '/images/hero-surfing.webp',
    description:
      'The original surf and yoga retreat on Morocco\'s legendary Taghazout coast. Morning surf sessions at some of the best point breaks in the world are balanced with afternoon yoga on the rooftop overlooking the Atlantic. The property blends Moroccan architecture with contemporary coastal design, and the communal dining features fresh seafood and Moroccan cuisine. The vibrant social atmosphere and stunning sunset views have made this one of the most beloved retreat experiences in North Africa.',
    highlights: ['World-class surf breaks on doorstep', 'Rooftop yoga with Atlantic panorama', 'Fresh seafood and Moroccan cuisine', 'Vibrant international community'],
  },
  {
    name: 'Jnane Tamsna',
    region: 'Marrakech Palmeraie',
    type: 'Luxury Garden Wellness Retreat',
    icon: TreeDeciduous,
    price: 'From 3,500 MAD per night (including treatments)',
    image: '/images/hero-majorelle-garden.webp',
    description:
      'A nine-acre botanical paradise in the Marrakech Palmeraie, Jnane Tamsna combines luxury accommodation with an extensive wellness program. Three pools, organic gardens with over 80 plant species, a full-service spa offering hammam and massage, and a purpose-built yoga shala create a sanctuary of extraordinary beauty. The property hosts curated wellness weeks with international teachers specializing in yoga, meditation, Ayurveda, and holistic nutrition.',
    highlights: ['Nine acres of botanical gardens', 'Three pools including lap pool', 'Purpose-built yoga shala', 'Curated wellness weeks with specialists'],
  },
  {
    name: 'L\'Heure Bleue Palais',
    region: 'Essaouira',
    type: 'Coastal Palace Spa Retreat',
    icon: Gem,
    price: 'From 2,800 MAD per night',
    image: '/images/hero-essaouira.webp',
    description:
      'This 18th-century palace overlooking Essaouira\'s ramparts and the Atlantic combines old-world grandeur with a modern wellness offering. The rooftop pool and spa feature hammam rituals, argan oil treatments, and thalassotherapy using fresh Atlantic seawater. The ocean breeze, sound of waves, and Essaouira\'s famously mellow atmosphere make this an ideal destination for a restorative spa holiday that blends luxury, culture, and coastal relaxation.',
    highlights: ['18th-century palace with sea views', 'Thalassotherapy with Atlantic seawater', 'Rooftop pool and full-service spa', 'Essaouira medina at your doorstep'],
  },
  {
    name: 'Desert Wellness Camp',
    region: 'Sahara (Merzouga)',
    type: 'Desert Meditation & Healing Retreat',
    icon: Star,
    price: 'From 4,000 MAD per person (3-night retreat)',
    image: '/images/hero-sahara-sunrise.webp',
    description:
      'At the edge of the Erg Chebbi dunes, this purpose-built retreat camp offers silent meditation programs, sound healing sessions, breathwork, and yoga in the most extraordinary natural setting imaginable. The vastness of the Sahara, the silence broken only by wind on sand, and the canopy of stars at night create conditions for profound inner stillness. Programs incorporate Berber healing traditions, sand bathing, and desert plant medicine alongside modern wellness practices.',
    highlights: ['Sahara silence for deep meditation', 'Sound healing and breathwork sessions', 'Berber healing traditions', 'Stargazing and sand bathing rituals'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SIGNATURE TREATMENTS
   ═══════════════════════════════════════════════════════════════ */

const signatureTreatments = [
  {
    treatment: 'Traditional Moroccan Hammam Ritual',
    icon: Droplets,
    price: 'From 500 MAD per person',
    duration: '60-90 minutes',
    description:
      'The cornerstone of Moroccan wellness. In a heated steam room, black soap made from olives is applied to the entire body, followed by vigorous exfoliation with a kessa glove. A ghassoul clay mask from the Atlas Mountains draws out impurities, and the ritual concludes with an argan oil massage and rose water rinse. The deep cleansing leaves skin remarkably soft and circulation invigorated.',
    ingredients: 'Black soap (savon noir), kessa glove, ghassoul clay, argan oil, rose water',
  },
  {
    treatment: 'Argan Oil Full-Body Massage',
    icon: Heart,
    price: 'From 600 MAD per person',
    duration: '60-75 minutes',
    description:
      'Pure, cold-pressed argan oil from Morocco\'s endemic argan trees is warmed and worked into the entire body using long, flowing strokes that combine Swedish and traditional Berber massage techniques. Argan oil is rich in vitamin E and essential fatty acids, deeply nourishing the skin while releasing muscular tension. The subtle nutty aroma creates a sensory experience unique to Morocco.',
    ingredients: 'Pure cold-pressed argan oil, essential oils (optional: orange blossom, lavender)',
  },
  {
    treatment: 'Rose Petal Body Wrap',
    icon: Sparkles,
    price: 'From 800 MAD per person',
    duration: '75-90 minutes',
    description:
      'Harvested from the Dades Valley rose fields during the spring festival, Moroccan rose petals are blended into a luxurious body mask. After gentle exfoliation, the rose-infused paste is applied to the skin and the body is wrapped in warm linens. The treatment hydrates, tones, and perfumes the skin while the antioxidant properties of damask rose promote cell renewal. A rose water facial completes this deeply feminine treatment.',
    ingredients: 'Dades Valley rose petals, rose water, honey, ghassoul clay',
  },
  {
    treatment: 'Saharan Sand Therapy',
    icon: Sun,
    price: 'From 400 MAD per person',
    duration: '45-60 minutes',
    description:
      'A traditional Berber healing practice where the body is partially buried in warm desert sand, allowing the natural heat and mineral content of the Sahara to penetrate muscles and joints. Practiced for centuries by desert communities to relieve rheumatism and joint pain, modern wellness retreats have refined the technique with guided relaxation, breathwork, and post-treatment hydration massage.',
    ingredients: 'Natural Saharan sand, mineral-rich desert earth',
  },
  {
    treatment: 'Saffron and Honey Facial',
    icon: Award,
    price: 'From 700 MAD per person',
    duration: '60 minutes',
    description:
      'Taliouine saffron, the most precious spice in the world, is combined with pure Moroccan honey and rose water to create a deeply nourishing facial treatment. Saffron\'s potent antioxidant and anti-inflammatory properties brighten the complexion, while raw honey acts as a natural humectant, locking in moisture. The treatment includes gentle cleansing, steam, mask application, and a finishing serum of argan oil and prickly pear seed oil.',
    ingredients: 'Taliouine saffron, raw honey, rose water, prickly pear seed oil, argan oil',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Leaf,
    rating: 'Best Season',
    description:
      'Wildflowers carpet the Atlas Mountains, temperatures are ideal for outdoor yoga (20-28 degrees Celsius), the Dades Valley rose harvest perfumes the air, and gardens are in full bloom. The most popular season for wellness retreats, with the widest choice of programs and visiting international teachers.',
    bestFor: 'Yoga retreats, mountain wellness, rose-themed treatments',
  },
  {
    season: 'Autumn (September - November)',
    icon: TreeDeciduous,
    rating: 'Excellent',
    description:
      'Golden light, comfortable temperatures after summer, and the date harvest season. The Atlantic coast water is at its warmest for surf retreats. Fewer crowds than spring mean more intimate retreat experiences and better value. The desert becomes accessible again for meditation retreats.',
    bestFor: 'Surf and yoga, desert retreats, spa holidays',
  },
  {
    season: 'Winter (December - February)',
    icon: Coffee,
    rating: 'Very Good',
    description:
      'Mild, sunny days on the coast (15-22 degrees Celsius in Essaouira and Agadir) make winter ideal for coastal wellness escapes. Marrakech enjoys pleasant winter warmth. Indoor hammam and spa treatments are particularly appealing. Snow-capped Atlas provide a stunning backdrop for mountain retreats with cozy fireside relaxation.',
    bestFor: 'Coastal spa holidays, hammam retreats, Marrakech wellness',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    rating: 'Good (Coast Only)',
    description:
      'Inland temperatures exceed 40 degrees Celsius, making summer unsuitable for Marrakech or desert retreats. However, the Atlantic coast stays pleasant (22-26 degrees Celsius) with cooling ocean breezes. Essaouira and Taghazout offer excellent summer surf and yoga retreats. Some mountain lodges above 1,500 meters remain comfortable for yoga holidays.',
    bestFor: 'Coastal surf and yoga only, Essaouira wellness',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET GUIDE
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Mid-Range Wellness',
    icon: Heart,
    totalBudget: 'From 8,000 - 15,000 MAD per person (7 days)',
    color: 'text-[var(--color-accent)]',
    bgColor: 'bg-[var(--color-accent)]/10',
    description: 'Comfortable retreat centers with shared accommodation, daily yoga, group hammam, healthy meals, and optional excursions. Excellent value for quality wellness.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 3,000 - 6,000 MAD', detail: 'Shared or private room at retreat center' },
      { item: 'Meals (full board)', cost: 'From 2,000 - 3,500 MAD', detail: 'Healthy vegetarian/Moroccan cuisine included' },
      { item: 'Yoga & wellness program', cost: 'From 1,500 - 3,000 MAD', detail: 'Daily classes, meditation, workshops' },
      { item: 'Spa treatments', cost: 'From 1,000 - 2,000 MAD', detail: '2-3 hammam or massage sessions' },
      { item: 'Excursions & transport', cost: 'From 500 - 1,500 MAD', detail: 'Airport transfers, optional day trips' },
    ],
  },
  {
    tier: 'Luxury Wellness',
    icon: Gem,
    totalBudget: 'From 25,000 - 50,000 MAD per person (7 days)',
    color: 'text-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]/10',
    description: 'Private suites in luxury retreat properties, daily spa treatments, private yoga sessions, gourmet organic cuisine, and bespoke wellness programs designed to your personal goals.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 12,000 - 24,000 MAD', detail: 'Private suite at luxury retreat or riad' },
      { item: 'Gourmet meals (full board)', cost: 'From 4,000 - 8,000 MAD', detail: 'Organic, chef-prepared wellness cuisine' },
      { item: 'Private yoga & wellness', cost: 'From 4,000 - 8,000 MAD', detail: 'Private sessions, personalized programs' },
      { item: 'Daily spa treatments', cost: 'From 4,000 - 8,000 MAD', detail: 'Hammam, massage, facials, body wraps daily' },
      { item: 'Concierge & transport', cost: 'From 1,000 - 2,000 MAD', detail: 'Private transfers, curated excursions' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a wellness retreat in Morocco cost?',
    answer:
      'Wellness retreats in Morocco range from 3,000 MAD per person for a weekend hammam and yoga break to 25,000-50,000 MAD per person for a week-long luxury spa retreat with full board, daily treatments, and private yoga sessions. Mid-range yoga retreats typically cost from 8,000-15,000 MAD for 5-7 days including accommodation, healthy meals, and daily classes. Morocco offers exceptional wellness value compared to equivalent retreats in Bali, Thailand, or European destinations.',
  },
  {
    question: 'What is the best time of year for a wellness retreat in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) are the best seasons, with comfortable temperatures for outdoor yoga and activities. Spring brings wildflowers, the rose harvest, and lush gardens. Winter (December-February) is ideal for coastal retreats in Essaouira and Agadir. Avoid July-August for inland retreats due to extreme heat, though the Atlantic coast remains pleasant for surf and yoga holidays year-round.',
  },
  {
    question: 'What types of wellness retreats are available in Morocco?',
    answer:
      'Morocco offers yoga and meditation retreats, traditional hammam and spa holidays, detox and cleansing programs, Ayurveda and holistic healing, yoga and surf combinations on the Atlantic coast, silent meditation retreats in the Sahara, mountain wellness escapes in the Atlas, and luxury spa breaks in Marrakech riads. Many retreats combine multiple modalities for a comprehensive wellness experience tailored to individual needs.',
  },
  {
    question: 'Are Morocco wellness retreats suitable for beginners?',
    answer:
      'Most Morocco wellness retreats welcome all levels from complete beginners to advanced practitioners. Yoga retreats typically offer classes at multiple levels, and teachers provide individual modifications. Hammam and spa treatments require no prior experience. Many retreat centers specifically design beginner-friendly programs that introduce wellness practices gradually in a supportive, non-judgmental environment with experienced international facilitators.',
  },
  {
    question: 'What should I pack for a wellness retreat in Morocco?',
    answer:
      'Pack comfortable yoga or exercise clothing, a light sweater for cooler mornings and evenings, modest clothing for town visits (covering shoulders and knees), a swimsuit for pools and hammams, sunscreen and a hat, a reusable water bottle, and a personal yoga mat if you prefer your own. Most retreats provide mats, blocks, and props. Pack light layers as temperatures shift between morning practice and afternoon warmth.',
  },
  {
    question: 'Can I combine a wellness retreat with sightseeing in Morocco?',
    answer:
      'Many travelers combine a 4-7 day wellness retreat with cultural exploration before or after. A popular approach is a retreat in Essaouira or the Atlas Mountains followed by exploring Marrakech or Fes. Some retreats include curated excursions like medina tours, souk visits, cooking classes, or desert trips as part of their program, blending physical wellness with authentic Moroccan cultural immersion.',
  },
  {
    question: 'What is a Moroccan hammam and what should I expect?',
    answer:
      'A Moroccan hammam is a steam bath ritual practiced for over a thousand years. The experience involves heated rooms of increasing temperature. An attendant applies black soap made from olives, scrubs your skin with a kessa glove to remove dead cells, applies a ghassoul clay mask from the Atlas Mountains, and finishes with an argan oil massage and rose water rinse. The entire ritual takes 60-90 minutes and leaves skin remarkably soft and circulation invigorated.',
  },
  {
    question: 'Is Morocco safe for solo female travelers attending wellness retreats?',
    answer:
      'Morocco is generally safe for solo female travelers at wellness retreats. Retreat centers provide secure, welcoming environments with experienced international staff. Many retreats have a majority female clientele and create supportive community spaces. Outside the retreat, standard precautions apply: dress modestly, stay in reputable accommodation, use registered transport, and trust your instincts. Many solo women describe their Morocco wellness retreat as a deeply transformative and empowering experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWellnessRetreatsPage() {
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
            backgroundImage: 'url(/images/hero-wellness-spa.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Wellness Retreats Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Sparkles className="w-4 h-4" />
            Wellness Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Wellness Retreats:
            <br className="hidden md:block" /> Yoga, Spa &amp; Healing
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Yoga programs in the Atlas Mountains, luxury hammam rituals, Sahara meditation retreats,
            and holistic healing in ancient riads. The complete guide to wellness travel in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a World-Class Wellness Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has quietly emerged as one of the world&apos;s most compelling wellness destinations,
                drawing yoga practitioners, spa devotees, and healing seekers from across the globe. This
                is a country where wellness is not a modern trend but a thousand-year-old tradition: the
                hammam steam bath has been central to Moroccan life since the medieval era, argan oil has
                nourished skin for centuries, and the Atlas Mountains and Sahara Desert provide environments
                of profound natural stillness that modern retreat centers have only begun to harness.
              </p>
              <p>
                The diversity of Morocco&apos;s landscape creates an extraordinary range of wellness settings.
                Practice sunrise yoga on an Atlantic-facing rooftop in Essaouira, meditate in the vast
                silence of the Sahara under a canopy of stars, restore your body in a centuries-old hammam
                with indigenous ingredients, or retreat to a mountain ecolodge where the only sounds are
                birdsong and flowing water. The quality of light, the purity of the air, and the sensory
                richness of Moroccan culture add dimensions to a wellness experience that clinical spa
                resorts simply cannot replicate.
              </p>
              <p>
                This guide covers every aspect of wellness travel in Morocco: the different types of
                retreats available, the top retreat centers by region, signature spa treatments and hammam
                rituals, yoga and meditation programs, detox and holistic healing options, the best
                seasons to visit, realistic pricing, practical booking tips, and answers to the most
                common questions. Whether you seek deep transformation or simply a restorative break,
                Morocco offers wellness experiences of extraordinary quality and value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Types of Wellness Retreats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Wellness Retreats in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From yoga and surf on the Atlantic coast to silent meditation in the Sahara, Morocco
            hosts an extraordinary variety of wellness experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season, property, and program. Peak season and holiday periods may be 20-40% higher.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreatTypes.map((item) => {
              const TypeIcon = item.icon;
              return (
                <div key={item.type} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <TypeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.type}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      <Users className="w-3 h-3 text-[var(--color-accent)]" />
                      <strong>Best for:</strong> {item.bestFor}
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--color-gold)]">
                      <DollarSign className="w-3 h-3" />
                      {item.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Retreat Centers by Region ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Retreat Centers by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Marrakech palace spas to Sahara meditation camps, these are Morocco&apos;s finest
            wellness retreat properties.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season. Book 2-4 months in advance for peak season (October-April) and curated wellness weeks.
          </p>

          <div className="space-y-10">
            {retreatCenters.map((center) => {
              const CenterIcon = center.icon;
              return (
                <div key={center.name} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={center.image}
                        alt={`${center.name} in ${center.region}, one of Morocco's finest wellness retreat centers`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <CenterIcon className="w-5 h-5 text-white" />
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {center.name}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 italic">{center.region} &mdash; {center.type}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-3">
                        {center.price}
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{center.description}</p>
                      <div className="space-y-2">
                        {center.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
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

      {/* ── Signature Treatments ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Signature Moroccan Wellness Treatments
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Indigenous ingredients and centuries-old techniques create spa treatments found nowhere
            else in the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {signatureTreatments.map((item) => {
              const TreatIcon = item.icon;
              return (
                <div key={item.treatment} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TreatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.treatment}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-start gap-1.5 p-2 bg-[var(--surface-muted)] rounded-lg">
                    <Leaf className="w-3 h-3 mt-0.5 text-[var(--color-gold)] shrink-0" />
                    <span className="text-xs text-[var(--text-muted)] italic">{item.ingredients}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person at mid-range to luxury properties and may vary by location. Seasonal pricing can change. Luxury palace spas charge 2-3 times these rates for premium versions.
          </p>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Seasons for Wellness Retreats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers year-round wellness potential, but each season has its ideal destinations
            and retreat styles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seasonalGuide.map((item) => {
              const SeasonIcon = item.icon;
              return (
                <div key={item.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.season}
                      </h3>
                      <span className="text-xs font-semibold text-[var(--color-gold)]">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                    <strong>Best for:</strong> {item.bestFor}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wellness Retreat Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic budgets for mid-range and luxury wellness travel in Morocco. All prices are
            per person for 7 days.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are in Moroccan Dirhams (MAD). 1 USD is approximately 10 MAD, 1 EUR approximately 11 MAD, 1 GBP approximately 13 MAD (as of 2026). Seasonal pricing may vary.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${tier.bgColor} flex items-center justify-center shrink-0`}>
                      <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tier.tier}
                      </h3>
                      <span className={`text-xs font-semibold ${tier.color}`}>{tier.totalBudget}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                  <div className="space-y-3">
                    {tier.breakdown.map((line, i) => (
                      <div key={i} className="border-b border-[var(--border-default)] pb-2 last:border-b-0">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-xs font-medium text-[var(--text-primary)]">{line.item}</span>
                          <span className={`text-xs font-semibold ${tier.color}`}>{line.cost}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{line.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Booking Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book 2-4 Months in Advance
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Popular retreat centers and curated wellness weeks with visiting international teachers
                fill up quickly, especially during peak season (October-April). For luxury spa holidays
                in Marrakech or Essaouira, booking 3-4 months ahead ensures the best availability and
                room selection. Last-minute bookings are sometimes possible at mid-range centers.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Verify Teacher Credentials
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                For yoga and meditation retreats, check the credentials and reviews of the lead teachers.
                Look for Yoga Alliance certification (RYT-200 minimum, RYT-500 preferred), reviews on
                retreat booking platforms, and a clear teaching philosophy. The best retreats feature
                experienced international teachers with established reputations and personalized attention.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Understand What Is Included
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Retreat pricing structures vary significantly. Some include all meals, treatments, classes,
                and excursions in one package. Others charge separately for spa treatments, airport
                transfers, and day trips. Always confirm exactly what is included before booking. Ask
                specifically about airport transfers, dietary accommodations, and the number of spa
                treatments included in the package price.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Consider Location Carefully
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Your retreat location shapes the entire experience. Marrakech offers culture and luxury
                spa access but more stimulation. Essaouira provides coastal calm and creative energy.
                The Atlas Mountains deliver silence and nature immersion. The Sahara offers profound
                stillness for deep meditation. Taghazout combines surf and yoga. Match the location to
                your wellness goals for the most transformative experience.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Communicate Dietary and Health Needs
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Contact the retreat center before booking to discuss any dietary requirements, allergies,
                injuries, or health conditions. Quality retreat centers accommodate vegetarian, vegan,
                gluten-free, and other dietary needs with advance notice. If you have injuries or physical
                limitations, ensure the yoga program can be adapted to your needs with props and modifications.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Bed className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Arrive a Day Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                If possible, arrive in Morocco one day before your retreat starts. This allows your body
                to adjust to the time zone and climate, reduces travel stress, and means you begin the
                program rested and present rather than jet-lagged. Spend the extra night in Marrakech
                or Essaouira to ease into the Moroccan rhythm before diving into your wellness program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Wellness Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/wellness" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Wellness Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete overview of wellness experiences, destinations, and planning tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/yoga" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wind className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Yoga in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Yoga retreats, studios, teacher training, and the best yoga destinations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Traditional hammams, luxury spas, and the best wellness treatments in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-hammam-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about Moroccan hammam culture, etiquette, and the best hammams.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                5-star hotels, private experiences, and the complete luxury Morocco guide.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Sparkles className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From ancient hammam rituals to sunrise yoga in the Atlas Mountains, Morocco offers
            wellness experiences that nourish body, mind, and spirit. Start planning your retreat today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Explore Spa &amp; Hammam
            </Link>
            <Link
              href="/yoga"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Wind className="w-4 h-4" />
              Yoga in Morocco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
