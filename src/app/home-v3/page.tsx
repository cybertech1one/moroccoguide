import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Mountain,
  Sun,
  Building2,
  ChefHat,
  Compass,
  Star,
  Users,
  Shield,
  BookOpen,
  CalendarDays,
  ChevronDown,
  Award,
  Map,
  Gem,
} from 'lucide-react';

import HeroSearchBar from '@/components/home/HeroSearchBar';
import FeaturedExperiencesScroll from '@/components/home/FeaturedExperiencesScroll';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ScrollReveal from '@/components/home/ScrollReveal';
import AnimatedCounter from '@/components/home/AnimatedCounter';
import NewsletterForm from '@/components/home/NewsletterForm';

/* =================================================================
   METADATA & SEO
   ================================================================= */

export const metadata: Metadata = {
  title: "Discover Morocco's Living Heritage | Imperial Cities, Ancient Medinas & Cultural Tours",
  description:
    'Explore 12 centuries of Moroccan heritage through immersive cultural tours, imperial city guides, medina walks, traditional craftsmanship experiences, and authentic local encounters. Your expert guide to Morocco\'s soul.',
  keywords: [
    'Morocco culture',
    'Moroccan heritage',
    'imperial cities Morocco',
    'medina tours',
    'Moroccan traditions',
    'Morocco cultural tourism',
    'Fes medina guide',
    'Marrakech heritage tours',
    'Morocco travel guide',
    'Moroccan architecture',
    'zellige tilework',
    'Moroccan craftsmanship',
    'Morocco itinerary',
    'Berber culture',
    'Moroccan cuisine tours',
    'ancient medinas Morocco',
    'Morocco historical sites',
    'Rabat capital Morocco',
    'Meknes imperial city',
  ],
  openGraph: {
    title: "Discover Morocco's Living Heritage | CityToursmorocco",
    description:
      'Immerse yourself in 12 centuries of Moroccan culture. Expert guides to imperial cities, ancient medinas, traditional crafts, and authentic experiences across the Kingdom.',
    url: 'https://citytoursmorocco.com/home-v3',
    siteName: 'CityToursmorocco',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/hero-fes-tanneries.webp',
        width: 1200,
        height: 630,
        alt: 'The ancient tanneries of Fes, Morocco - a UNESCO World Heritage Site showcasing centuries of leather craftsmanship',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Discover Morocco's Living Heritage",
    description:
      'Explore imperial cities, ancient medinas, and 12 centuries of Moroccan culture with expert local guides.',
    images: ['https://citytoursmorocco.com/images/hero-fes-tanneries.webp'],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/home-v3',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CityToursmorocco',
  url: 'https://citytoursmorocco.com',
  description: 'The definitive guide to Morocco heritage tourism, cultural tours, and authentic travel experiences.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://citytoursmorocco.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CityToursmorocco',
  url: 'https://citytoursmorocco.com',
  logo: 'https://citytoursmorocco.com/images/logo.png',
  description:
    'Expert-curated Morocco travel guides, cultural tours, and heritage experiences crafted by local insiders.',
  sameAs: [
    'https://www.instagram.com/citytoursmorocco',
    'https://www.facebook.com/citytoursmorocco',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'French', 'Arabic'],
  },
};

const touristDestinationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Morocco',
  description:
    'A North African kingdom with 12 centuries of living heritage spanning imperial cities, ancient medinas, Saharan landscapes, and vibrant cultural traditions.',
  touristType: ['Cultural Tourism', 'Heritage Tourism', 'Adventure Tourism', 'Culinary Tourism'],
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Medina of Fes', description: 'The world\'s largest car-free urban area, a UNESCO World Heritage Site' },
    { '@type': 'TouristAttraction', name: 'Jemaa el-Fnaa, Marrakech', description: 'UNESCO-recognized cultural square and marketplace' },
    { '@type': 'TouristAttraction', name: 'Hassan II Mosque, Casablanca', description: 'One of the largest mosques in the world, an architectural masterpiece' },
    { '@type': 'TouristAttraction', name: 'Ait Benhaddou', description: 'UNESCO World Heritage fortified village along the former caravan route' },
  ],
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally very safe for tourists. The country has invested heavily in tourism security, and millions of visitors travel safely each year. Standard precautions apply: stay aware in crowded medinas, use licensed guides, and keep valuables secure. Morocco ranks among the safest destinations in Africa.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Morocco is during spring (March to May) and autumn (September to November) when temperatures are comfortable for sightseeing. Summers can be very hot inland, while winters are mild on the coast but cold in the mountains. Ramadan dates shift yearly and can affect opening hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is relatively liberal but modest dress is appreciated, especially outside tourist areas. Light, loose-fitting clothing that covers shoulders and knees is ideal. A scarf is useful for mosque visits and sun protection. In Marrakech and tourist zones, Western casual wear is perfectly fine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of the USA, EU, UK, Canada, Australia, and many other countries do not need a visa for stays up to 90 days. Your passport must be valid for at least 6 months beyond your arrival date. Always check the latest requirements with your local Moroccan consulate before traveling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Morocco trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers exceptional value. Budget travelers can manage on 400-600 MAD (40-60 USD) per day including accommodation and meals. Mid-range travelers should budget 1,000-2,000 MAD (100-200 USD) daily. Luxury riads and private tours range from 3,000+ MAD (300+ USD) per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What currency does Morocco use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco uses the Moroccan Dirham (MAD). ATMs are widely available in cities, and credit cards are accepted at hotels and upscale restaurants. Cash is essential for medina shopping, local restaurants, and tipping. Exchange offices (bureaux de change) offer competitive rates in tourist areas.',
      },
    },
  ],
};

/* =================================================================
   DATA
   ================================================================= */

const imperialCities = [
  {
    name: 'Marrakech',
    slug: '/marrakech',
    meaning: 'The Red City',
    number: '01',
    image: '/images/hero-marrakech.webp',
    description:
      'Where the ancient Saadian dynasty left its indelible mark in ochre and gold. The Jemaa el-Fnaa pulses with storytellers, musicians, and healers continuing traditions older than the city walls themselves. Navigate the souk labyrinth where copperworkers, leather artisans, and spice merchants have plied their trades for nine centuries.',
  },
  {
    name: 'Fes',
    slug: '/fes-guide',
    meaning: 'The Spiritual Capital',
    number: '02',
    image: '/images/hero-fes-tanneries.webp',
    description:
      'Home to the oldest university in the world (Al Quaraouiyine, founded 859 AD) and a medina so vast it remains the largest car-free urban zone on Earth. The Chouara tanneries still dye leather using medieval techniques with saffron, indigo, and antimony. Every narrow street holds a masterclass in living archaeology.',
  },
  {
    name: 'Rabat',
    slug: '/cities/rabat',
    meaning: 'The Capital of Light',
    number: '03',
    image: '/images/hero-rabat.webp',
    description:
      'Morocco\'s elegant administrative capital blends Almohad grandeur with contemporary vision. The Hassan Tower stands unfinished since the 12th century, a testament to ambitions that transcended even the Almohad caliphate. The Kasbah of the Udayas crowns the Bou Regreg estuary with whitewashed Andalusian beauty.',
  },
  {
    name: 'Meknes',
    slug: '/cities/meknes',
    meaning: 'The Versailles of Morocco',
    number: '04',
    image: '/images/hero-meknes-gate.webp',
    description:
      'Built by Sultan Moulay Ismail to rival the splendor of Versailles, Meknes is the quietest of the imperial quartet and the most rewarding for those who seek substance over spectacle. The monumental Bab Mansour gateway is considered the finest in all of North Africa, its zellige and carved stucco undiminished by three centuries.',
  },
];

const culturalExperiences = [
  {
    id: 1,
    title: 'Architecture & Zellige',
    description: 'Geometric perfection in tilework adorning madrasas, fountains, and palaces across the kingdom.',
    icon: Building2,
    href: '/architecture',
    image: '/images/hero-ben-youssef-madrasa.webp',
  },
  {
    id: 2,
    title: 'Saharan Horizons',
    description: 'Camel caravans, star-drenched nights, and Berber campfire tales in the Erg Chebbi dunes.',
    icon: Sun,
    href: '/desert-adventures',
    image: '/images/hero-sahara-sunrise.webp',
  },
  {
    id: 3,
    title: 'Culinary Traditions',
    description: 'From the slow-cooked rituals of tagine to the art of hand-rolled couscous every Friday.',
    icon: ChefHat,
    href: '/cuisine',
    image: '/images/hero-spices.webp',
  },
  {
    id: 4,
    title: 'High Atlas Peaks',
    description: 'Trek through Berber villages at 3,000 meters, where hospitality is as ancient as the stone.',
    icon: Mountain,
    href: '/atlas-mountains',
    image: '/images/hero-atlas.webp',
  },
];

const destinations = [
  { name: 'Chefchaouen', slug: '/chefchaouen', image: '/images/hero-chefchaouen-streets.webp', tag: 'The Blue Pearl' },
  { name: 'Essaouira', slug: '/essaouira', image: '/images/hero-essaouira-port.webp', tag: 'Wind City' },
  { name: 'Tangier', slug: '/tangier', image: '/images/hero-tangier-bay.webp', tag: 'Gateway to Africa' },
  { name: 'Ouarzazate', slug: '/ouarzazate', image: '/images/hero-ait-benhaddou.webp', tag: 'Door of the Desert' },
  { name: 'Merzouga', slug: '/desert-adventures', image: '/images/hero-sahara-camp.webp', tag: 'Saharan Gateway' },
  { name: 'Agadir', slug: '/agadir', image: '/images/hero-agadir.webp', tag: 'Sun & Surf Coast' },
  { name: 'Casablanca', slug: '/casablanca', image: '/images/hero-casablanca.webp', tag: 'Modern Metropolis' },
  { name: 'Ait Benhaddou', slug: '/activities', image: '/images/hero-kasbahs.webp', tag: 'UNESCO Kasbah' },
];

const featuredExperiences = [
  {
    title: 'Fes Medina Heritage Walk',
    image: '/images/hero-fes-tanneries.webp',
    price: 'From 250 MAD',
    duration: '4 hours',
    rating: 4.9,
    reviews: 632,
    href: '/fes-guide',
    badge: 'Heritage',
    iconName: 'footprints',
  },
  {
    title: 'Sahara Luxury Camp Experience',
    image: '/images/hero-sahara-camp.webp',
    price: 'From 1,200 MAD',
    duration: '2 days',
    rating: 4.9,
    reviews: 847,
    href: '/desert-adventures',
    badge: 'Popular',
    iconName: 'flame',
  },
  {
    title: 'Traditional Cooking Class',
    image: '/images/hero-cooking-class.webp',
    price: 'From 450 MAD',
    duration: '3 hours',
    rating: 4.8,
    reviews: 419,
    href: '/cooking-classes',
    badge: 'Cultural',
    iconName: 'chef-hat',
  },
  {
    title: 'Atlas Mountains Day Trek',
    image: '/images/hero-atlas-village.webp',
    price: 'From 350 MAD',
    duration: 'Full day',
    rating: 4.8,
    reviews: 523,
    href: '/trekking',
    badge: 'Adventure',
    iconName: 'mountain',
  },
  {
    title: 'Hot Air Balloon over Marrakech',
    image: '/images/hero-hot-air-balloon.webp',
    price: 'From 1,800 MAD',
    duration: '1.5 hours',
    rating: 4.9,
    reviews: 312,
    href: '/activities',
    badge: 'Exclusive',
    iconName: 'wind',
  },
  {
    title: 'Essaouira Coastal Discovery',
    image: '/images/hero-essaouira-port.webp',
    price: 'From 300 MAD',
    duration: 'Full day',
    rating: 4.7,
    reviews: 289,
    href: '/essaouira',
    badge: 'Coastal',
    iconName: 'droplets',
  },
  {
    title: 'Hammam & Spa Ritual',
    image: '/images/hero-hammam-interior.webp',
    price: 'From 500 MAD',
    duration: '2 hours',
    rating: 4.8,
    reviews: 376,
    href: '/hammam',
    badge: 'Wellness',
    iconName: 'droplets',
  },
];

const livingTraditions = [
  {
    title: 'Hammam Rituals',
    description: 'The communal bathhouse tradition dating back to Roman times, refined by centuries of Moroccan culture into a purifying ceremony of black soap, ghassoul clay, and eucalyptus steam.',
    image: '/images/hero-hammam-interior.webp',
    href: '/hammam',
  },
  {
    title: 'Mint Tea Ceremony',
    description: 'Moroccan hospitality distilled into a single glass. Gunpowder green tea poured from great height with fresh nana mint and generous sugar -- a ritual repeated three times for welcome, love, and death.',
    image: '/images/hero-food.webp',
    href: '/cuisine',
  },
  {
    title: 'Zellige Tilework',
    description: 'Master craftsmen (maallems) hand-cut thousands of ceramic tessera into geometric patterns that encode mathematical principles the Islamic world discovered centuries before Europe.',
    image: '/images/hero-ceramics.webp',
    href: '/architecture',
  },
  {
    title: 'Arabic Calligraphy',
    description: 'From Kufic inscriptions on the Koutoubia Mosque to contemporary works in Marrakech galleries, calligraphy remains the supreme art of Moroccan visual culture.',
    image: '/images/hero-architecture.webp',
    href: '/architecture',
  },
  {
    title: 'Berber Weaving',
    description: 'Each Amazigh carpet tells a story through symbols passed from mother to daughter for millennia. The diamond means protection, the zigzag represents water, the eye wards off evil.',
    image: '/images/hero-berber-culture.webp',
    href: '/berber-culture',
  },
  {
    title: 'Gnaoua Music',
    description: 'Rooted in sub-Saharan spiritual traditions, Gnaoua music blends African rhythms, Sufi mysticism, and Berber melodies into hypnotic healing ceremonies that culminate at the annual Essaouira festival.',
    image: '/images/hero-gnaoua-festival.webp',
    href: '/festivals-calendar',
  },
];

const blogPosts = [
  {
    title: 'The Hidden Madrasas of Fes: A Walking Guide to Islamic Architecture',
    excerpt: 'Beyond the famous Bou Inania, Fes shelters dozens of lesser-known theological colleges whose zellige and carved cedarwood rival any monument on earth.',
    image: '/images/hero-ben-youssef-madrasa.webp',
    href: '/blog',
    category: 'Architecture',
    readTime: '8 min read',
  },
  {
    title: 'A Culinary Atlas: Regional Dishes from Tangier to the Sahara',
    excerpt: 'From the fish chermoula of the north coast to the Berber tangia buried in hot coals, Morocco\'s cuisine changes dramatically with every mountain pass and river valley.',
    image: '/images/hero-spices.webp',
    href: '/blog',
    category: 'Cuisine',
    readTime: '12 min read',
  },
  {
    title: 'Vanishing Crafts: Morocco\'s Master Artisans and Their Fight for Survival',
    excerpt: 'In the tanneries, foundries, and zellige workshops of Fes and Marrakech, a generation of maallems grapple with a question: who will carry forward 1,000 years of knowledge?',
    image: '/images/hero-souk-lamps.webp',
    href: '/blog',
    category: 'Culture',
    readTime: '10 min read',
  },
];

const faqItems = [
  {
    question: 'Is Morocco safe for tourists?',
    answer: 'Morocco is generally very safe for tourists and welcomes over 14 million visitors annually. The government has invested significantly in tourism security. Standard precautions apply: stay aware in crowded medinas, use licensed guides for treks and desert excursions, and keep valuables secure. Solo female travelers report positive experiences, though modest dress is appreciated outside major tourist areas.',
  },
  {
    question: 'What is the best time to visit Morocco?',
    answer: 'Spring (March to May) and autumn (September to November) offer the most comfortable temperatures for exploring cities and trekking. Summer is ideal for coastal towns like Essaouira and the Atlas Mountains, while winter brings snow to the peaks (great for skiing near Oukaimeden) and mild weather on the coast. Ramadan dates shift yearly -- it offers a unique cultural experience but some restaurants close during daylight hours.',
  },
  {
    question: 'What should I wear in Morocco?',
    answer: 'Morocco is relatively liberal, but modest dress is respectful, especially outside tourist zones. Lightweight, loose-fitting clothes covering shoulders and knees are ideal for both culture and climate. A scarf is useful for visiting mosques (exterior areas) and sun protection. In Marrakech, Casablanca, and resort areas, casual Western attire is completely normal.',
  },
  {
    question: 'Do I need a visa for Morocco?',
    answer: 'Citizens of the USA, EU member states, UK, Canada, Australia, Japan, and many other countries do not need a visa for stays up to 90 days. Your passport must be valid for at least six months beyond your date of arrival. Always confirm the latest visa requirements with your nearest Moroccan consulate before traveling.',
  },
  {
    question: 'How much does a Morocco trip cost?',
    answer: 'Morocco offers exceptional value for travelers at every budget. Budget travelers can manage on 400-600 MAD (40-60 USD) per day, covering hostels, street food, and local transport. Mid-range travelers should budget 1,000-2,000 MAD (100-200 USD) daily for charming riads, restaurant meals, and guided tours. Luxury experiences -- private desert camps, palace riads, exclusive guides -- start from 3,000 MAD (300+ USD) per day.',
  },
  {
    question: 'What currency does Morocco use?',
    answer: 'Morocco uses the Moroccan Dirham (MAD). ATMs are widely available in all cities. Credit cards are accepted at hotels, upscale restaurants, and larger shops. Cash is essential for medina shopping, local eateries, taxis, and tipping. Exchange bureaux in tourist areas offer competitive rates. Euros and US dollars are sometimes accepted in tourist zones but at unfavorable rates.',
  },
  {
    question: 'How do I get around Morocco?',
    answer: 'Morocco has an excellent transport network. The Al Boraq high-speed train connects Tangier, Rabat, and Casablanca. ONCF trains link major cities comfortably. CTM and Supratours buses reach destinations trains cannot. Grand taxis (shared) are efficient for shorter inter-city routes. Within cities, petit taxis are affordable -- always insist on the meter. Renting a car is ideal for Atlas Mountain passes and remote kasbahs.',
  },
  {
    question: 'Is it safe to drink the water in Morocco?',
    answer: 'Tap water in major cities like Marrakech, Rabat, and Casablanca is treated and technically safe, but most travelers (and many locals) prefer bottled water to avoid digestive adjustment issues. Bottled water is inexpensive and available everywhere. Avoid ice in street-side drinks, and peel fruit or wash it with bottled water in rural areas.',
  },
];

/* =================================================================
   COMPONENT
   ================================================================= */

export default function HomeV3Heritage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-[#FAF8F5] text-[#1A1814] selection:bg-[#A0522D] selection:text-white">

        {/* ===================================================
            DECORATIVE SVG CALLIGRAPHY STROKES (background art)
        =================================================== */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 opacity-[0.04]">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,450 C200,200 400,700 720,450 C1040,200 1240,600 1440,350" stroke="#104E38" strokeWidth="3" fill="none" />
            <path d="M0,600 C360,300 540,800 900,500 C1100,300 1300,700 1440,400" stroke="#A0522D" strokeWidth="2" fill="none" />
            <path d="M0,250 C180,500 360,100 720,350 C900,500 1260,200 1440,500" stroke="#C4960C" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* ===================================================
            1. HERO - Split Layout
        =================================================== */}
        <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
          <div className="container-morocco relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Text Column */}
            <div className="lg:col-span-5 xl:col-span-5 text-center lg:text-left order-2 lg:order-1">
              <ScrollReveal>
                <div className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-6 flex items-center gap-3 justify-center lg:justify-start font-[family-name:var(--font-heading)]">
                  <span className="h-px w-8 bg-[#A0522D]" />
                  <span dir="rtl" className="text-sm">&#1605;&#1585;&#1581;&#1576;&#1575; &#1576;&#1603;&#1605; &#1601;&#1610; &#1575;&#1604;&#1605;&#1594;&#1585;&#1576;</span>
                  <span className="h-px w-8 bg-[#A0522D]" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.9] mb-8">
                  <span className="block text-[#1A1814]">The Essence</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#A0522D] via-[#C4960C] to-[#A0522D]">
                    of Morocco
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-base sm:text-lg text-[#555] mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-[family-name:var(--font-heading)]">
                  Twelve centuries of heritage converge in a kingdom where
                  artisans still chisel zellige by hand, medinas hum with medieval
                  commerce, and the Sahara whispers stories older than any city wall.
                  This is not sightseeing. This is immersion.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white border border-[#A0522D]/10 p-2 shadow-lg">
                  <HeroSearchBar />
                </div>
              </ScrollReveal>

              {/* Quick Stats */}
              <ScrollReveal delay={400}>
                <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0">
                  <div className="text-center lg:text-left">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-black text-[#104E38]">
                      <AnimatedCounter end={9} suffix="+" />
                    </div>
                    <p className="text-xs text-[#777] mt-1 font-[family-name:var(--font-heading)]">UNESCO Sites</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-black text-[#104E38]">
                      <AnimatedCounter end={4} />
                    </div>
                    <p className="text-xs text-[#777] mt-1 font-[family-name:var(--font-heading)]">Imperial Cities</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="font-[family-name:var(--font-display)] text-2xl font-black text-[#104E38]">
                      <AnimatedCounter end={12} suffix="+" />
                    </div>
                    <p className="text-xs text-[#777] mt-1 font-[family-name:var(--font-heading)]">Centuries of History</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Image Column */}
            <ScrollReveal delay={150} className="lg:col-span-7 xl:col-span-7 relative order-1 lg:order-2 h-[55vh] sm:h-[60vh] lg:h-[85vh]">
              {/* Background offset frame */}
              <div className="absolute top-6 left-6 right-0 bottom-0 bg-[#104E38] rounded-[2rem] opacity-10" />
              {/* Gold accent frame */}
              <div className="absolute top-3 left-3 right-3 bottom-3 border-2 border-[#C4960C]/20 rounded-[2rem]" />
              {/* Main image container */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-fes-tanneries.webp"
                  alt="The ancient Chouara tanneries of Fes, Morocco, where leather has been dyed using medieval techniques for over a thousand years"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating heritage badge */}
                <div className="absolute bottom-8 left-8 bg-[#FAF8F5]/95 backdrop-blur-sm p-5 max-w-[220px] border border-[#C4960C]/20 shadow-lg">
                  <span className="text-[#A0522D] text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 font-[family-name:var(--font-heading)]">UNESCO Heritage</span>
                  <p className="font-[family-name:var(--font-display)] font-bold text-[#1A1814] text-lg leading-tight">Medina of Fes</p>
                  <p className="text-xs text-[#777] mt-1">Founded 789 AD</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-[#A0522D]/50">
            <span className="text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-heading)]">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </section>

        {/* ===================================================
            2. IMPERIAL CITIES SHOWCASE
        =================================================== */}
        <section className="py-24 md:py-32 relative bg-[#104E38] text-white overflow-hidden">
          {/* Zellige dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="container-morocco relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20 md:mb-28">
                <span dir="rtl" className="text-[#C4960C] text-sm font-bold tracking-[0.3em] mb-4 block">&#1575;&#1604;&#1605;&#1583;&#1606; &#1575;&#1604;&#1593;&#1578;&#1610;&#1602;&#1577;</span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-black">
                  The Imperial Cities
                </h2>
                <p className="text-white/60 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-[family-name:var(--font-heading)]">
                  Four ancient capitals, each a masterwork of Islamic architecture and living heritage.
                  Together they form the cultural backbone of the Moroccan kingdom.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-24 md:space-y-36">
              {imperialCities.map((city, idx) => (
                <ScrollReveal key={city.slug} direction={idx % 2 === 0 ? 'right' : 'left'}>
                  <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

                    {/* Image */}
                    <div className="w-full lg:w-1/2 relative group">
                      <div className="aspect-[3/4] overflow-hidden rounded-t-full rounded-b-lg border border-white/10 relative z-10">
                        <img
                          src={city.image}
                          alt={`${city.name}, Morocco - ${city.meaning}`}
                          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>
                      {/* Gold shadow offset */}
                      <div className="absolute inset-0 bg-[#C4960C] transform translate-x-5 translate-y-5 rounded-t-full rounded-b-lg opacity-15 -z-0" />
                    </div>

                    {/* Text */}
                    <div className="w-full lg:w-1/2">
                      <span className="text-[#C4960C] font-mono tracking-[0.2em] text-sm mb-4 block">
                        {city.number} -- {city.meaning}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-5xl lg:text-7xl font-black mb-6 text-white">
                        {city.name}
                      </h3>
                      <p className="text-white/70 text-base lg:text-lg leading-relaxed mb-10 max-w-md font-[family-name:var(--font-heading)]">
                        {city.description}
                      </p>
                      <Link
                        href={city.slug}
                        className="inline-flex items-center gap-3 pb-2 border-b border-[#C4960C] text-[#C4960C] hover:text-white hover:border-white transition-all uppercase tracking-[0.15em] text-sm font-bold font-[family-name:var(--font-heading)]"
                      >
                        Explore {city.name} <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            3. CULTURAL EXPERIENCES - 4-Column Grid
        =================================================== */}
        <section className="py-24 md:py-32 relative bg-white overflow-hidden">
          {/* Zellige dot watermark */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(#104E38 1.5px, transparent 1.5px), radial-gradient(#A0522D 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
              backgroundPosition: '0 0, 16px 16px',
            }}
          />

          <div className="container-morocco relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-20 gap-8">
              <ScrollReveal className="max-w-2xl">
                <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                  Heritage Pathways
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814] mb-4">
                  The Threads of <span className="text-[#A0522D]">Culture</span>
                </h2>
                <p className="text-[#555] text-base md:text-lg leading-relaxed font-[family-name:var(--font-heading)]">
                  From the mathematical precision of zellige tilework to the raw grandeur of Saharan
                  dunes, Morocco offers four distinct corridors of cultural discovery.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1814] text-[#FAF8F5] font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#A0522D] transition-colors font-[family-name:var(--font-heading)]"
                >
                  All Experiences <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {culturalExperiences.map((exp, i) => {
                const Icon = exp.icon;
                return (
                  <ScrollReveal key={exp.id} delay={i * 100}>
                    <Link
                      href={exp.href}
                      className="group block relative h-[400px] overflow-hidden bg-[#FAF8F5] border border-[#1A1814]/5 hover:bg-[#1A1814] transition-all duration-500"
                    >
                      {/* Background image that appears on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                        <img
                          src={exp.image}
                          alt=""
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Large watermark icon on hover */}
                      <div className="absolute -bottom-8 -right-8 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700">
                        <Icon className="w-56 h-56 text-[#C4960C]" />
                      </div>

                      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                        <div className="text-[#104E38] group-hover:text-[#C4960C] transition-colors duration-500">
                          <Icon className="w-10 h-10" strokeWidth={1.5} />
                        </div>

                        <div className="transform group-hover:-translate-y-3 transition-transform duration-500">
                          <h3 className="font-[family-name:var(--font-display)] text-xl sm:text-2xl font-bold text-[#1A1814] group-hover:text-white mb-3 transition-colors duration-500">
                            {exp.title}
                          </h3>
                          <p className="text-[#555] text-sm group-hover:text-white/70 leading-relaxed transition-colors duration-500 font-[family-name:var(--font-heading)]">
                            {exp.description}
                          </p>
                          <div className="mt-4 flex items-center gap-2 text-[#A0522D] group-hover:text-[#C4960C] text-sm font-semibold transition-colors duration-500 font-[family-name:var(--font-heading)]">
                            <span>Discover</span>
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            4. DESTINATIONS GRID - Beyond the Imperial Cities
        =================================================== */}
        <section className="py-24 md:py-32 bg-[#FAF8F5]">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                  Beyond the Capitals
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814] mb-4">
                  Discover Every Corner
                </h2>
                <p className="text-[#555] max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-[family-name:var(--font-heading)]">
                  From the blue-washed streets of Chefchaouen to the windswept
                  fortifications of Essaouira, every destination in Morocco tells a
                  distinct story.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {destinations.map((dest, i) => (
                <ScrollReveal key={dest.slug} delay={i * 60}>
                  <Link href={dest.slug} className="group relative block aspect-[3/4] overflow-hidden bg-[#1A1814]">
                    <img
                      src={dest.image}
                      alt={`${dest.name}, Morocco - ${dest.tag}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <span className="text-[#C4960C] text-[10px] tracking-[0.2em] uppercase font-bold block mb-1 font-[family-name:var(--font-heading)]">
                        {dest.tag}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-white">
                        {dest.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-[family-name:var(--font-heading)]">
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            5. FEATURED EXPERIENCES SCROLL
        =================================================== */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                  Curated for You
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814]">
                  Signature Experiences
                </h2>
                <p className="text-[#555] max-w-xl mx-auto mt-4 text-base md:text-lg font-[family-name:var(--font-heading)]">
                  Handpicked cultural journeys, vetted by our local team and
                  refined by thousands of traveler reviews.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="max-w-6xl mx-auto">
                <FeaturedExperiencesScroll experiences={featuredExperiences} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            6. WHY CHOOSE US
        =================================================== */}
        <section className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1A1814]/5">
          <div className="container-morocco">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Image side */}
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src="/images/hero-riad-interior.webp"
                      alt="Interior of a traditional Moroccan riad with ornate zellige tilework and carved plaster arches"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay stat card */}
                  <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-[#104E38] text-white p-6 md:p-8 max-w-[240px] shadow-xl">
                    <div className="font-[family-name:var(--font-display)] text-4xl font-black mb-1">
                      <AnimatedCounter end={12} suffix="+" />
                    </div>
                    <p className="text-white/70 text-sm font-[family-name:var(--font-heading)]">Years crafting authentic Morocco experiences</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Content side */}
              <div>
                <ScrollReveal>
                  <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                    Why CityToursmorocco
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-black text-[#1A1814] mb-6">
                    Crafted by Locals,<br />Built for You
                  </h2>
                  <p className="text-[#555] text-base md:text-lg leading-relaxed mb-10 font-[family-name:var(--font-heading)]">
                    We are not aggregators copying guidebooks. Our team lives across Morocco,
                    from the medina of Fes to the coast of Essaouira. Every recommendation
                    comes from direct experience, every guide is personally vetted, and
                    every itinerary is built on local knowledge you cannot find in any app.
                  </p>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { icon: Shield, title: 'Vetted Local Guides', desc: 'Every guide holds official credentials and has been personally interviewed by our team.' },
                    { icon: Map, title: 'Insider Itineraries', desc: 'Routes that bypass tourist traps and lead to the authentic heart of each city.' },
                    { icon: Users, title: 'Small Group Focus', desc: 'Maximum 8 travelers per group to ensure personal attention and genuine connections.' },
                    { icon: Award, title: 'Best Price Promise', desc: 'Direct partnerships with local operators mean no middleman markups on any experience.' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <ScrollReveal key={item.title} delay={i * 100}>
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-[#104E38]/5 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-[#104E38]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1A1814] mb-1">{item.title}</h3>
                            <p className="text-sm text-[#555] leading-relaxed font-[family-name:var(--font-heading)]">{item.desc}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            7. TESTIMONIALS
        =================================================== */}
        <section className="py-24 md:py-32 bg-[#FAF8F5]">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-6">
                <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                  Traveler Voices
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814]">
                  Stories from the Road
                </h2>
              </div>
            </ScrollReveal>

            {/* Aggregate stats */}
            <ScrollReveal delay={100}>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-14 py-6">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-3xl font-black text-[#104E38]">
                    <AnimatedCounter end={4.9} decimals={1} />
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current text-[#C4960C]" />
                    ))}
                  </div>
                  <p className="text-xs text-[#777] mt-1 font-[family-name:var(--font-heading)]">Average Rating</p>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-3xl font-black text-[#104E38]">
                    <AnimatedCounter end={3200} suffix="+" />
                  </div>
                  <p className="text-xs text-[#777] mt-1 font-[family-name:var(--font-heading)]">Verified Reviews</p>
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-3xl font-black text-[#104E38]">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-xs text-[#777] mt-1 font-[family-name:var(--font-heading)]">Would Recommend</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <TestimonialsCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            8. LIVING TRADITIONS
        =================================================== */}
        <section className="py-24 md:py-32 bg-white border-t border-[#1A1814]/5">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <span dir="rtl" className="text-[#C4960C] text-sm font-bold tracking-[0.2em] mb-4 block">&#1578;&#1602;&#1575;&#1604;&#1610;&#1583; &#1581;&#1610;&#1577;</span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814] mb-4">
                  Living Traditions
                </h2>
                <p className="text-[#555] max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-[family-name:var(--font-heading)]">
                  Morocco does not preserve its culture in museums. It practices it daily, in
                  bathhouses and tea rooms, on looms and in foundries, through music and prayer.
                  These are the traditions you will encounter firsthand.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {livingTraditions.map((tradition, i) => (
                <ScrollReveal key={tradition.title} delay={i * 80}>
                  <Link href={tradition.href} className="group block relative h-[320px] md:h-[380px] overflow-hidden bg-[#1A1814]">
                    <img
                      src={tradition.image}
                      alt={tradition.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-white mb-2">
                        {tradition.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed font-[family-name:var(--font-heading)] line-clamp-3 group-hover:line-clamp-none transition-all">
                        {tradition.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-[#C4960C] text-xs font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-[family-name:var(--font-heading)]">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            9. TRIP PLANNER CTA
        =================================================== */}
        <section className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
          {/* Background art */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg viewBox="0 0 1440 600" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,300 Q360,100 720,300 Q1080,500 1440,300" stroke="#104E38" strokeWidth="4" fill="none" />
              <path d="M0,300 Q360,500 720,300 Q1080,100 1440,300" stroke="#A0522D" strokeWidth="3" fill="none" />
            </svg>
          </div>

          <div className="container-morocco relative z-10 text-center">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <div className="mx-auto w-20 h-20 border-2 border-[#A0522D] flex items-center justify-center mb-10 rotate-45">
                  <Compass className="w-8 h-8 text-[#A0522D] -rotate-45" />
                </div>

                <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-6 block font-[family-name:var(--font-heading)]">
                  Your Journey Begins
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814] mb-6">
                  Let Us Craft Your<br />Cultural Journey
                </h2>
                <p className="text-[#555] text-base md:text-lg leading-relaxed mb-10 font-[family-name:var(--font-heading)]">
                  Tell us your dates, interests, and travel style. Our local team will build
                  a bespoke itinerary that weaves together the heritage, flavors, and
                  encounters that make Morocco unforgettable.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/tools/planner"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-[#A0522D] text-white font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#8A4526] transition-colors font-[family-name:var(--font-heading)]"
                  >
                    <CalendarDays className="w-5 h-5" />
                    Plan My Trip
                  </Link>
                  <Link
                    href="/itineraries"
                    className="inline-flex items-center gap-3 px-10 py-5 border-2 border-[#1A1814] text-[#1A1814] font-semibold text-sm tracking-[0.15em] uppercase hover:bg-[#1A1814] hover:text-white transition-all font-[family-name:var(--font-heading)]"
                  >
                    <BookOpen className="w-5 h-5" />
                    View Sample Itineraries
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            10. BLOG POSTS
        =================================================== */}
        <section className="py-24 md:py-32 bg-white border-t border-[#1A1814]/5">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
                <div>
                  <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                    From the Journal
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-black text-[#1A1814]">
                    Deep Reads on Morocco
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#A0522D] font-semibold text-sm tracking-[0.1em] uppercase hover:text-[#8A4526] transition-colors font-[family-name:var(--font-heading)]"
                >
                  All Articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post, i) => (
                <ScrollReveal key={post.title} delay={i * 100}>
                  <Link href={post.href} className="group block">
                    <div className="aspect-[16/10] overflow-hidden mb-5 bg-[#1A1814]">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#A0522D] text-[10px] tracking-[0.2em] uppercase font-bold font-[family-name:var(--font-heading)]">
                        {post.category}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#1A1814]/20" />
                      <span className="text-[#777] text-xs font-[family-name:var(--font-heading)]">{post.readTime}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-[#1A1814] mb-2 group-hover:text-[#A0522D] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed font-[family-name:var(--font-heading)]">
                      {post.excerpt}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            11. FAQ SECTION
        =================================================== */}
        <section className="py-24 md:py-32 bg-[#FAF8F5] border-t border-[#1A1814]/5">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-16 md:mb-20">
                <span className="text-[#A0522D] text-xs tracking-[0.25em] uppercase font-bold mb-4 block font-[family-name:var(--font-heading)]">
                  Common Questions
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-black text-[#1A1814] mb-4">
                  Planning Your Visit
                </h2>
                <p className="text-[#555] max-w-2xl mx-auto text-base md:text-lg font-[family-name:var(--font-heading)]">
                  Everything first-time and returning visitors ask about traveling in
                  Morocco, answered by our local team.
                </p>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <details className="group bg-white border border-[#1A1814]/5 open:border-[#A0522D]/20 transition-colors">
                    <summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-[#1A1814] hover:text-[#A0522D] transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className="w-5 h-5 flex-shrink-0 text-[#A0522D] transform group-open:rotate-180 transition-transform duration-300" />
                    </summary>
                    <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-2">
                      <p className="text-[#555] text-sm md:text-base leading-relaxed font-[family-name:var(--font-heading)]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            12. NEWSLETTER - Deep Green
        =================================================== */}
        <section className="py-24 md:py-32 bg-[#104E38] relative overflow-hidden">
          {/* Decorative pattern */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: 'radial-gradient(rgba(196,150,12,0.8) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="container-morocco relative z-10 text-center">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto">
                <Gem className="w-10 h-10 text-[#C4960C] mx-auto mb-6" strokeWidth={1.5} />
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                  Your Gateway to<br />
                  <span className="text-[#C4960C]">Morocco's Secrets</span>
                </h2>
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-2 font-[family-name:var(--font-heading)]">
                  Insider guides, seasonal travel tips, hidden gems, and exclusive offers
                  delivered directly to your inbox. Join 15,000+ Morocco enthusiasts.
                </p>
                <NewsletterForm />
                <p className="text-white/30 text-xs mt-6 font-[family-name:var(--font-heading)]">
                  Unsubscribe anytime. We respect your privacy and never share your data.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>
  );
}
