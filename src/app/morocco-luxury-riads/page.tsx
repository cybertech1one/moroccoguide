import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Info,
  ArrowRight,
  Sparkles,
  DollarSign,
  CheckCircle,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  UtensilsCrossed,
  Droplets,
  Key,
  Calendar,
  Phone,
  Eye,
  Bed,
  Sun,
  MessageCircleQuestion,
  Globe,
  ConciergeBell,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-luxury-riads`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Best Luxury Riads in Morocco 2026 | 15 Exclusive Boutique Stays by City',
  description:
    'The definitive guide to Morocco\'s finest luxury riads. 15 top picks across Marrakech, Fes, Essaouira & Chefchaouen with room rates from 2,000 MAD, private hammams, rooftop pools, Michelin-level dining, and expert booking strategies for peak and off-season travel.',
  keywords: [
    'luxury riads Morocco',
    'best luxury riads Marrakech',
    'boutique riads Morocco 2026',
    'Riad Yasmine Marrakech',
    'La Sultana Marrakech',
    'El Fenn Marrakech',
    'Dar Ahlam Ouarzazate',
    'Riad Fes luxury',
    'Palais Amani Fes',
    'Riad Laaroussa Fes',
    'Heure Bleue Palais Essaouira',
    'luxury riad prices Morocco',
    'riad with private pool Morocco',
    'exclusive riad experiences',
    'Morocco honeymoon riad',
    'riad booking tips Morocco',
    'boutique hotel Marrakech medina',
    'luxury accommodation Morocco',
  ],
  openGraph: {
    title: 'Best Luxury Riads in Morocco 2026 | 15 Exclusive Boutique Stays by City',
    description:
      'Hand-picked luxury riads across Marrakech, Fes, Essaouira, and Chefchaouen. Rates, amenities, architecture, dining, hammam facilities, and booking strategies for the discerning traveler.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-riads.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxury Moroccan riad courtyard with zellige fountain, plunge pool, and hand-carved stucco archways',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Luxury Riads in Morocco 2026 | 15 Exclusive Boutique Stays',
    description:
      '15 top luxury riads in Marrakech, Fes, Essaouira & Chefchaouen. Private pools, hammams, rooftop dining, rates from 2,000 MAD, and booking tips.',
    images: [`${BASE_URL}/images/hero-riads.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How much does a luxury riad cost per night in Morocco?',
    a: 'Luxury riads start from 2,000 MAD per night for a well-appointed boutique property with pool and hammam. High-end palace riads run from 4,000 MAD to 8,000 MAD. Ultra-luxury properties like Royal Mansour in Marrakech start from 15,000 MAD. Seasonal pricing can change significantly, with December-January and Easter commanding 40-60% premiums over summer rates.',
  },
  {
    q: 'What is the difference between a luxury riad and a five-star hotel in Morocco?',
    a: 'A luxury riad is a restored traditional townhouse with 4-12 rooms, a central courtyard, and personalized service from a small staff who learn your preferences. A five-star hotel offers larger room counts, branded amenities, gyms, and conference facilities. Riads deliver intimacy and cultural immersion. Hotels deliver predictability and scale. Many experienced Morocco travelers prefer riads precisely because every stay feels unique.',
  },
  {
    q: 'Do luxury riads have swimming pools?',
    a: 'Most luxury riads have a plunge pool in the central courtyard, typically 3-5 meters long. A few larger properties like La Sultana and El Fenn have full-sized heated pools. Rooftop dipping pools are increasingly common. If a full swimming pool matters to you, confirm the dimensions before booking, because "pool" in a riad context can mean anything from a decorative basin to a proper lap pool.',
  },
  {
    q: 'Should I book a luxury riad directly or through a booking platform?',
    a: 'Booking directly with the riad typically saves 10-20% because platforms charge riads a 15-20% commission. Direct booking also gives you leverage to negotiate room upgrades, airport transfers, or complimentary hammam sessions. Contact the riad via their website or WhatsApp. For cancellation flexibility, Booking.com remains the safest option. A smart approach: research on platforms, then contact the riad directly with your dates.',
  },
  {
    q: 'Are luxury riads suitable for families with children?',
    a: 'Some luxury riads cater to families with interconnecting suites and child-friendly amenities. Others maintain an adults-only atmosphere. Open courtyards with unfenced plunge pools and steep narrow staircases are standard in traditional riads and present real safety concerns for young children. Always ask the property directly about child policies before booking. Properties like La Sultana have family suites designed with safety features.',
  },
  {
    q: 'What amenities should I expect at a top-tier luxury riad?',
    a: 'At a minimum: private hammam, plunge pool, rooftop terrace with medina views, daily breakfast included, air conditioning, premium bedding, complimentary mint tea service, and concierge assistance with restaurant reservations and excursion bookings. Top-tier properties add heated pools, in-house fine dining, spa menus, airport transfers, cooking classes, private guides, and butler-style room service.',
  },
  {
    q: 'When is the best time to book a luxury riad in Morocco?',
    a: 'Book 3-6 months ahead for peak season stays (October-April), especially over Christmas, New Year, and Easter when top properties sell out. For summer (June-August), 4-6 weeks is enough and you can often negotiate discounts of 20-30% since heat drives demand down in Marrakech and Fes. Shoulder months (May and September) offer the best balance of availability, weather, and pricing.',
  },
  {
    q: 'Can I arrange a private dinner or special celebration at a luxury riad?',
    a: 'Almost all luxury riads arrange private dinners on the rooftop terrace or in the courtyard. Multi-course Moroccan feasts with wine pairings run from 800 MAD to 2,000 MAD per person. For special occasions like anniversaries or proposals, riads can arrange rose petal decorations, musicians, private hammam sessions, and custom menus. Give at least 48 hours notice, ideally more for elaborate requests.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Best Luxury Riads in Morocco 2026',
  description:
    'Comprehensive guide to Morocco\'s finest luxury riads across Marrakech, Fes, Essaouira, and Chefchaouen with pricing, amenities, architecture, and booking strategies.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-riads.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Luxury Riads Morocco', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: WHAT DEFINES A LUXURY RIAD
   ================================================================ */

const luxuryDefiningFeatures = [
  {
    name: 'Architecture & Restoration',
    icon: Building,
    description:
      'Luxury riads occupy centuries-old townhouses restored by master craftsmen (maalems). Expect hand-cut zellige mosaic tilework, carved stucco (gebs) framing every doorway, painted cedarwood ceilings that took years to complete, and a central courtyard with fountain or mature garden. The best restorations honor the original structure while adding modern comforts invisibly.',
  },
  {
    name: 'Private Hammam & Spa',
    icon: Droplets,
    description:
      'A dedicated hammam with heated marble, steam room, and trained therapists offering traditional gommage scrubs with savon noir and ghassoul clay. Top properties add treatment menus: argan oil massages, rose petal wraps, and reflexology. Some have multi-room spa facilities with cold plunge pools and relaxation lounges.',
  },
  {
    name: 'Rooftop Terrace & Pool',
    icon: Sun,
    description:
      'The rooftop is an open-air living room with panoramic views over the medina skyline, Atlas Mountain peaks, and minarets. Furnished with daybeds, shade canopies, and herbs in terracotta pots. Most luxury riads have a courtyard plunge pool; a growing number add heated rooftop pools with sunken lounging areas.',
  },
  {
    name: 'Dining & Culinary Experiences',
    icon: UtensilsCrossed,
    description:
      'Breakfast is always included: fresh-squeezed orange juice, mint tea, msemen and baghrir pancakes, local honey, amlou, and seasonal fruit. Many luxury riads employ trained chefs who prepare multi-course Moroccan dinners on request. Cooking classes, market tours with the chef, and wine pairings are common add-ons.',
  },
  {
    name: 'Personalized Service',
    icon: ConciergeBell,
    description:
      'With only 4-12 rooms, luxury riads offer a staff-to-guest ratio that large hotels cannot match. Staff learn your name on arrival, remember your tea preference, arrange restaurant reservations, book guides and drivers, and handle the medina navigation that overwhelms first-time visitors. The best properties assign a personal butler or house manager.',
  },
  {
    name: 'Art & Design Curation',
    icon: Eye,
    description:
      'Owners of luxury riads often fill rooms with personally curated collections: Berber textiles, contemporary Moroccan art, antique brass lanterns, hand-loomed rugs from the Middle Atlas, and custom furniture designed specifically for the property. Each room has a distinct character, so no two stays feel the same.',
  },
];

/* ================================================================
   DATA: MARRAKECH LUXURY RIADS
   ================================================================ */

const marrakechRiads = [
  {
    name: 'La Sultana Marrakech',
    area: 'Kasbah, near Saadian Tombs',
    price: 'From 4,500 MAD per night',
    rooms: '28 suites across 5 interconnected riads',
    icon: Crown,
    highlights: ['Full-sized heated pool', 'Award-winning spa with 8 treatment rooms', 'Rooftop restaurant with Atlas views', 'Member of Small Luxury Hotels of the World'],
    description:
      'Five restored riads combined into a single property with museum-quality craftsmanship in every corner. The 2,000-square-meter spa includes a traditional hammam, sauna, jacuzzi, and a full menu of treatments using argan, amber, and rose products. Suites feature private terraces, hand-carved cedarwood furnishings, and marble bathrooms with underfloor heating.',
  },
  {
    name: 'El Fenn',
    area: 'Bab el Ksour, Northern Medina',
    price: 'From 3,500 MAD per night',
    rooms: '28 rooms and suites',
    icon: Sparkles,
    highlights: ['Three pools including a rooftop infinity pool', 'Contemporary art collection throughout', 'Two restaurants plus cocktail bar', 'Co-founded by Vanessa Branson'],
    description:
      'A design-forward property blending Moroccan artisanship with modern aesthetics. The contemporary art collection rotates and features established Moroccan artists alongside international names. Rooms range from intimate doubles to sprawling suites with private terraces. The rooftop bar serves craft cocktails with unobstructed sunset views over the medina.',
  },
  {
    name: 'Riad Yasmine',
    area: 'Sidi Ben Slimane, Northern Medina',
    price: 'From 2,000 MAD per night',
    rooms: '7 rooms',
    icon: Star,
    highlights: ['Iconic turquoise courtyard pool', 'One of the most photographed riads in Morocco', 'Intimate 7-room layout', 'Rooftop with Atlas Mountain views'],
    description:
      'The turquoise plunge pool surrounded by zellige tilework and banana leaf plants became one of the most recognizable images of Morocco on social media. Beyond the photography appeal, Riad Yasmine delivers genuinely warm hospitality, impeccable breakfasts, and rooms decorated with custom bejmat tilework and handwoven textiles. Book well ahead; the seven rooms fill fast.',
  },
  {
    name: 'Dar Ahlam',
    area: 'Skoura Oasis (near Ouarzazate)',
    price: 'From 6,000 MAD per night (all-inclusive)',
    rooms: '14 suites',
    icon: Gem,
    highlights: ['All-inclusive with meals, drinks, and excursions', 'No menus — chef cooks what inspires him daily', 'Private desert excursions and Atlas hikes', 'Named "Best Small Hotel in the World" by Travel + Leisure'],
    description:
      'Technically a kasbah rather than a medina riad, Dar Ahlam earns its place on this list because it represents the pinnacle of intimate luxury accommodation in Morocco. There are no set mealtimes, no menus, and no check-in desk. Guests eat wherever they want — in the garden, by the pool, on a rooftop, or in the desert under stars. The chef tailors every meal to individual preferences discovered through conversation, not questionnaires.',
  },
  {
    name: 'Royal Mansour',
    area: 'Near Jemaa el-Fna',
    price: 'From 15,000 MAD per night',
    rooms: '53 private riads',
    icon: Crown,
    highlights: ['Each guest gets an entire private three-story riad', 'Staff move through underground tunnels, unseen', 'Three restaurants including Michelin-starred dining', 'Commissioned by King Mohammed VI'],
    description:
      'A palace complex of 53 individual riads, each a three-story private residence with rooftop terrace, plunge pool, and living room. Over 1,500 master artisans spent three years hand-crafting the zellige, stucco, and cedarwood. Staff circulate through a network of underground tunnels to deliver food, turn down beds, and arrange amenities without ever being seen unless summoned. This is not a hotel experience; it is a parallel reality.',
  },
];

/* ================================================================
   DATA: FES LUXURY RIADS
   ================================================================ */

const fesRiads = [
  {
    name: 'Riad Fes',
    area: 'Fes el-Bali, near Bab Rcif',
    price: 'From 3,000 MAD per night',
    rooms: '16 suites',
    icon: Award,
    highlights: ['Relais & Chateaux member', 'Fine-dining restaurant with tasting menus', 'Rooftop bar overlooking the medina', 'Full spa with hammam and heated pool'],
    description:
      'The only Relais & Chateaux property in the Fes medina. The restaurant serves refined Moroccan-French cuisine with seasonal tasting menus that draw local food critics and international guests alike. Suites feature hand-painted ceilings, deep soaking tubs, and views over the medieval rooftops. The bar terrace at sunset, with the muezzin call echoing across the city, is one of the great sensory experiences in Morocco.',
  },
  {
    name: 'Palais Amani',
    area: 'Oued Zhoune, Fes el-Bali',
    price: 'From 2,500 MAD per night',
    rooms: '15 rooms and suites',
    icon: Sparkles,
    highlights: ['Andalusian garden with 30+ plant species', 'Cooking school with market tours', 'Heated courtyard pool', 'Bar with Moroccan-inspired cocktails'],
    description:
      'A restored 17th-century palace with a magnificent Andalusian garden that feels like stepping out of the dense medina into a private botanical sanctuary. The cooking school takes guests through the spice souk to select ingredients, then teaches traditional recipes in a professional kitchen. Rooms mix original architectural details with tasteful contemporary furnishings.',
  },
  {
    name: 'Riad Laaroussa',
    area: 'Derb Laaroussa, Fes el-Bali',
    price: 'From 2,200 MAD per night',
    rooms: '8 suites',
    icon: Key,
    highlights: ['17th-century palace with original frescoes', 'Heated pool in the courtyard', 'Renowned in-house restaurant', 'Quiet location away from tourist routes'],
    description:
      'One of the oldest restored palaces in the Fes medina, with original 17th-century frescoes on the walls and carved cedarwood doors that predate many of the city\'s landmarks. The owner has maintained the building\'s historical integrity while adding heated floors, modern plumbing, and air conditioning. The in-house restaurant is considered one of the best dining experiences in Fes, with a set menu that changes daily based on market availability.',
  },
  {
    name: 'Karawan Riad',
    area: 'Derb el Miter, Fes el-Bali',
    price: 'From 2,800 MAD per night',
    rooms: '9 rooms and suites',
    icon: Gem,
    highlights: ['Museum-quality antique collection', 'Private hammam with traditional treatments', 'Rooftop dining with panoramic medina views', 'Expert-guided medina walking tours'],
    description:
      'A meticulously curated property where every room tells a story through antique furnishings, vintage textiles, and artifacts collected over decades. The owner is a scholar of Moroccan decorative arts and has filled the riad with pieces that would be at home in a museum. Service is deeply personal, with the team arranging private access to workshops and artisan studios that most visitors never find.',
  },
];

/* ================================================================
   DATA: ESSAOUIRA & CHEFCHAOUEN LUXURY RIADS
   ================================================================ */

const essaouiraRiads = [
  {
    name: 'Heure Bleue Palais',
    area: 'Place Moulay Hassan, Essaouira Medina',
    price: 'From 3,200 MAD per night',
    rooms: '33 rooms and suites',
    icon: Crown,
    highlights: ['Rooftop pool with Atlantic Ocean views', 'Cinema room and library', 'Full spa with heated indoor pool', 'Directly on the main square'],
    description:
      'The grande dame of Essaouira hospitality, a Relais & Chateaux property occupying a converted French colonial mansion on the main square. The rooftop pool looks over the ramparts to the Atlantic Ocean and the Iles Purpuraires. Interiors blend French art deco with Moroccan craftsmanship. The cinema room screens classic films in the evenings. Location is unbeatable: step out the door and you are in the heart of the medina.',
  },
  {
    name: 'Villa de l\'O',
    area: 'Rue Mohamed Ben Massoud, Essaouira Medina',
    price: 'From 2,400 MAD per night',
    rooms: '12 rooms',
    icon: Star,
    highlights: ['Terrace restaurant with ocean views', 'Minimalist Moroccan-contemporary design', 'In-house hammam', 'Quiet street location within walking distance of everything'],
    description:
      'A design hotel disguised as a riad. The interiors use a restrained palette of white lime plaster, dark wood, and natural textiles that let the architecture speak. The terrace restaurant serves excellent seafood with views over the medina rooftops to the ocean. Rooms on the upper floors catch the Atlantic breeze that makes Essaouira comfortable even in midsummer.',
  },
];

const chefchaouenRiads = [
  {
    name: 'Lina Ryad & Spa',
    area: 'Medina, Chefchaouen',
    price: 'From 2,000 MAD per night',
    rooms: '10 rooms',
    icon: Droplets,
    highlights: ['Full spa with hammam and jacuzzi', 'Panoramic Rif Mountain terrace', 'Blue-and-white Chefchaouen design', 'In-house restaurant with local cuisine'],
    description:
      'The most polished luxury option in the Blue City. The spa rivals properties twice the price in Marrakech, with a hammam, jacuzzi, and treatment rooms using locally sourced products. Rooms carry the blue-and-white palette that makes Chefchaouen famous, elevated with high-thread-count linens and rainfall showers. The rooftop terrace offers some of the best mountain views in town.',
  },
  {
    name: 'Casa Hassan',
    area: 'Rue Targui, Chefchaouen Medina',
    price: 'From 1,800 MAD per night',
    rooms: '8 rooms',
    icon: Building,
    highlights: ['One of the first guesthouses in Chefchaouen', 'Famous on-site restaurant', 'Traditional Riffian architecture', 'Rooftop terrace with mosque views'],
    description:
      'A Chefchaouen institution since the 1980s, Casa Hassan was among the first riads to welcome international travelers. The on-site restaurant serves traditional Riffian and Moroccan dishes and is considered one of the best in town. Rooms are decorated with local textiles and painted woodwork. The property has been gradually upgraded over the decades without losing the character that made it a landmark.',
  },
];

/* ================================================================
   DATA: PRICE RANGES BY SEASON
   ================================================================ */

const priceRanges = [
  { city: 'Marrakech', lowSeason: 'From 2,000 MAD', shoulder: 'From 3,000 MAD', peak: 'From 4,500 MAD', ultraLuxury: 'From 8,000-15,000 MAD' },
  { city: 'Fes', lowSeason: 'From 1,800 MAD', shoulder: 'From 2,500 MAD', peak: 'From 3,500 MAD', ultraLuxury: 'From 5,000-8,000 MAD' },
  { city: 'Essaouira', lowSeason: 'From 1,600 MAD', shoulder: 'From 2,200 MAD', peak: 'From 3,200 MAD', ultraLuxury: 'From 4,500-7,000 MAD' },
  { city: 'Chefchaouen', lowSeason: 'From 1,200 MAD', shoulder: 'From 1,800 MAD', peak: 'From 2,500 MAD', ultraLuxury: 'From 3,000-4,500 MAD' },
];

/* ================================================================
   DATA: BOOKING TIPS
   ================================================================ */

const bookingTips = [
  {
    title: 'Book Direct for the Best Rate',
    icon: Phone,
    tip: 'Contact the riad via their website, email, or WhatsApp. Mention that you found them on Booking.com or TripAdvisor but prefer to book directly. Most luxury riads will match or beat platform prices and throw in extras like airport transfers or a complimentary hammam session.',
  },
  {
    title: 'Reserve 3-6 Months Ahead for Peak Season',
    icon: Calendar,
    tip: 'October through April is peak season, with Christmas, New Year, and Easter the tightest periods. Top riads like La Sultana and Riad Fes sell out months in advance for these dates. Summer bookings can be made 4-6 weeks out with room to negotiate discounts.',
  },
  {
    title: 'Ask for a Specific Room',
    icon: Bed,
    tip: 'Luxury riads have rooms of vastly different size and character. Ask the owner which room they recommend for your trip style (romance, photography, quiet work). Request a room by name if the riad lists them. Upper-floor rooms get more light and less courtyard noise.',
  },
  {
    title: 'Confirm Airport Transfer Details',
    icon: Key,
    tip: 'Most luxury riads include airport or station pickup. Confirm the driver\'s name and phone number before arrival. In Marrakech and Fes, vehicles cannot enter the medina, so the driver will walk you through the final stretch. Have the riad\'s WhatsApp number saved for real-time coordination.',
  },
  {
    title: 'Negotiate Multi-Night Discounts',
    icon: DollarSign,
    tip: 'Staying 4+ nights? Ask for a reduced nightly rate. Many luxury riads offer 10-15% off for week-long stays, especially during shoulder season. Some include complimentary cooking classes, spa treatments, or private excursions for extended bookings.',
  },
  {
    title: 'Read Reviews from the Last 6 Months',
    icon: Eye,
    tip: 'Riads change hands, renovate, or decline. Reviews from two years ago may describe a different property. Focus on the most recent feedback, paying attention to comments about service consistency, food quality, and maintenance. A pattern of recent complaints is a stronger signal than a single negative review.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoLuxuryRiadsPage() {
  return (
    <>
      {/* -- JSON-LD -- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* -- Breadcrumbs -- */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Luxury Riads Morocco</li>
          </ol>
        </div>
      </nav>

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <img
          src="/images/hero-riads.webp"
          alt="Luxury Moroccan riad courtyard with turquoise plunge pool, zellige tilework, carved stucco arches, and potted citrus trees"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco&apos;s Finest Luxury Riads
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            15 hand-picked boutique riads across Marrakech, Fes, Essaouira, and Chefchaouen — with
            rates, amenities, architecture, and booking strategies for 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Crown className="w-4 h-4" /> 15 Top Properties</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 4 Cities</span>
            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> From 1,800 MAD/night</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Updated March 2026</span>
          </div>
        </div>
      </section>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              A luxury riad is not just a place to sleep. It is a private world behind an unmarked door
              in the medina — a centuries-old courtyard house where zellige tilework, carved stucco, and
              painted cedarwood ceilings tell stories of the craftsmen who built them. From the outside,
              the facade is deliberately plain. Step through the threshold and the contrast is immediate:
              fountains, gardens, pools, and service so attentive that staff know your name and your
              breakfast preferences before the second morning.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco has hundreds of riads, but only a fraction qualify as genuinely luxurious. The
              difference comes down to three things: the quality of the restoration (using master artisans,
              not shortcuts), the caliber of the service (a staff-to-guest ratio of 3:1 or better), and the
              small details — organic argan toiletries, hand-embroidered linens, a chef who shops the souk
              each morning for your dinner ingredients.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              This guide covers 15 properties across four cities. Every riad on this list has been selected
              for exceptional architecture, consistent service, and the kind of experience that turns a
              trip into a memory that stays with you for years. Prices reflect 2026 rates, and seasonal
              pricing can change with demand.
            </p>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-gold)]">
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <Info className="w-4 h-4 inline mr-1.5 text-[var(--color-gold)]" />
                <strong className="text-[var(--text-primary)]">How we selected these riads:</strong> Each
                property was evaluated on four criteria: architectural authenticity (original craftwork vs
                modern reproductions), service consistency across recent guest reviews, the quality and
                sourcing of food, and the owner&apos;s personal involvement in the guest experience. We
                excluded properties with more than 40 rooms, since the intimate scale of a riad is
                fundamental to what makes the experience different from a hotel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- What Defines a Luxury Riad -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Makes a Riad Truly Luxurious
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Price alone does not define luxury. These six elements separate the exceptional from the merely expensive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryDefiningFeatures.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={feature.name} className="card-moroccan p-6">
                  <FeatureIcon className="w-8 h-8 text-[var(--color-gold)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Marrakech Luxury Riads -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech: 5 Top Luxury Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Marrakech has the deepest concentration of luxury riads in Morocco. These five represent the
            best of the city, from intimate boutique stays to palatial compounds.
          </p>

          <div className="space-y-8">
            {marrakechRiads.map((riad) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <RiadIcon className="w-7 h-7 text-[var(--color-gold)]" />
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] mb-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> {riad.area}
                      </p>
                      <p className="text-sm text-[var(--text-muted)] mb-4 flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5" /> {riad.rooms}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {riad.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {riad.highlights.map((h) => (
                          <span key={h} className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-3 py-1.5 rounded-full">
                            <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> {h}
                          </span>
                        ))}
                      </div>
                      <p className="text-base font-semibold text-[var(--color-accent)]">{riad.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Fes Luxury Riads -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fes: 4 Top Luxury Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fes el-Bali is the world&apos;s largest car-free urban area and home to Morocco&apos;s most
            historically significant riads. Rates run 20-30% below comparable Marrakech properties.
          </p>

          <div className="space-y-8">
            {fesRiads.map((riad) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <RiadIcon className="w-7 h-7 text-[var(--color-gold)]" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {riad.name}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {riad.area}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] mb-4 flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5" /> {riad.rooms}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {riad.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {riad.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1 text-xs bg-white text-[var(--text-secondary)] px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> {h}
                      </span>
                    ))}
                  </div>
                  <p className="text-base font-semibold text-[var(--color-accent)]">{riad.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Essaouira & Chefchaouen -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Essaouira &amp; Chefchaouen Luxury Riads
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Essaouira */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Essaouira
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                The Atlantic coast port city stays cool year-round, making it a summer alternative
                to the interior heat of Marrakech and Fes. Luxury options are fewer but refined.
              </p>
              <div className="space-y-6">
                {essaouiraRiads.map((riad) => {
                  const RiadIcon = riad.icon;
                  return (
                    <div key={riad.name} className="card-moroccan p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <RiadIcon className="w-5 h-5 text-[var(--color-gold)]" />
                        <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mb-2"><MapPin className="w-3 h-3 inline mr-1" />{riad.area}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{riad.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {riad.highlights.map((h) => (
                          <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-full">{h}</span>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-accent)]">{riad.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chefchaouen */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Chefchaouen
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                The Blue City in the Rif Mountains has a smaller hospitality scene than Marrakech
                or Fes, but a handful of properties deliver genuine luxury with mountain-village charm.
              </p>
              <div className="space-y-6">
                {chefchaouenRiads.map((riad) => {
                  const RiadIcon = riad.icon;
                  return (
                    <div key={riad.name} className="card-moroccan p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <RiadIcon className="w-5 h-5 text-[var(--color-gold)]" />
                        <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {riad.name}
                        </h4>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mb-2"><MapPin className="w-3 h-3 inline mr-1" />{riad.area}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{riad.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {riad.highlights.map((h) => (
                          <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-full">{h}</span>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-accent)]">{riad.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Price Ranges by Season -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Riad Prices by City &amp; Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Per room per night. Breakfast is included at all luxury riads listed. Seasonal pricing can change without notice.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Low season: June-August. Shoulder: May, September. Peak: October-April.
            Christmas/New Year and Easter carry the highest premiums.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">City</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Low Season</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Shoulder</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Peak Season</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold">Ultra-Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRanges.map((row, idx) => (
                    <tr key={row.city} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.city}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.lowSeason}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.shoulder}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.peak}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.ultraLuxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] text-center mt-4">
            Prices reflect 2025-2026 rates. Seasonal pricing can change without notice.
            During Ramadan and national holidays, availability may be limited.
          </p>
        </div>
      </section>

      {/* -- Booking Tips -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Expert Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Strategies to secure the best rooms, the best rates, and the best experiences at Morocco&apos;s top riads.
          </p>

          <div className="space-y-4">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                  <TipIcon className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- What to Expect -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect at a Luxury Riad
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A typical day at a top-tier Moroccan riad, from morning to midnight.
          </p>

          <div className="space-y-6">
            {[
              {
                time: 'Arrival',
                icon: Key,
                description:
                  'A driver meets you at the airport or train station. At the medina gate, a riad staff member takes your bags and walks you through the narrow alleys. At the door, the manager greets you with mint tea and Moroccan pastries in the courtyard while your room is prepared. No front desk, no check-in form, no waiting.',
              },
              {
                time: 'Morning',
                icon: Sun,
                description:
                  'Breakfast appears on the rooftop terrace or in the courtyard at whatever time you requested the night before. Fresh-squeezed orange juice, mint tea, baghrir and msemen pancakes, local honey, amlou (argan-almond spread), olives, eggs prepared to your preference, and seasonal fruit. Riad breakfasts are generous and unhurried.',
              },
              {
                time: 'Afternoon',
                icon: Droplets,
                description:
                  'Return from the medina to find fresh towels, chilled water, and a turned-down courtyard lounger waiting. Book a hammam session: steam, savon noir scrub, ghassoul clay mask, and argan oil massage. Afterward, read by the plunge pool with a pot of mint tea. The riad is your sanctuary from the medina\'s intensity.',
              },
              {
                time: 'Evening',
                icon: UtensilsCrossed,
                description:
                  'If you ordered dinner (by midday, so the chef can shop fresh), a multi-course Moroccan feast awaits on the rooftop or in a private dining room. Typical progression: a spread of salads (zaalouk, taktouka, carrot-cumin), a signature tagine or couscous, followed by pastilla or Moroccan pastries with orange blossom cream. Wine or cocktails on the terrace as the medina lights up below.',
              },
            ].map((item) => {
              const TimeIcon = item.icon;
              return (
                <div key={item.time} className="card-moroccan p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TimeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {item.time}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gallery -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Inside Morocco&apos;s Luxury Riads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-riads.webp', alt: 'Luxury Moroccan riad courtyard with central fountain, zellige mosaic tilework, and carved stucco arches', label: 'Courtyard Architecture' },
              { src: '/images/art-moroccan-hammam.webp', alt: 'Private hammam inside a luxury riad with heated marble, brass fixtures, and atmospheric lighting', label: 'Private Hammam' },
              { src: '/images/art-moroccan-breakfast.webp', alt: 'Moroccan breakfast spread on a rooftop terrace with fresh juice, pancakes, honey, and mint tea overlooking the medina', label: 'Rooftop Breakfast' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real answers to the questions travelers ask most about luxury riad stays in Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Riads Guide',
                description: 'Complete riad guide covering architecture, riad vs dar, budget to luxury pricing, booking platforms, etiquette, and seasonal rates.',
                href: '/morocco-riads-guide',
                icon: Building,
              },
              {
                title: 'Riads vs Hotels',
                description: 'Side-by-side comparison of riad and hotel stays in Morocco: cost, service, atmosphere, amenities, and which suits your travel style.',
                href: '/morocco-riads-vs-hotels',
                icon: Bed,
              },
              {
                title: 'Luxury Travel Morocco',
                description: 'The finest hotels, restaurants, experiences, and private tours for travelers seeking premium service across Morocco.',
                href: '/morocco-luxury-travel',
                icon: Crown,
              },
              {
                title: 'Morocco Honeymoon Guide',
                description: 'Romantic riads, private desert camps, coastal retreats, and curated itineraries for couples celebrating in Morocco.',
                href: '/morocco-honeymoon',
                icon: Heart,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- More Accommodation Resources -- */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Accommodation Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/best-riads-marrakech', title: 'Best Riads in Marrakech', desc: 'Budget, mid-range, and luxury riads in the Red City ranked by location, service, and value.' },
              { href: '/morocco-spa-guide', title: 'Hammam & Spa Guide', desc: 'Traditional hammam rituals, etiquette, best spas by city, savon noir, ghassoul clay, and pricing from 50 MAD.' },
              { href: '/morocco-luxury-hotels', title: 'Luxury Hotels Morocco', desc: 'Five-star resorts and palace hotels for travelers who prefer larger-format luxury accommodations.' },
              { href: '/accommodations', title: 'Accommodation Overview', desc: 'Compare riads, hotels, hostels, guesthouses, and desert camps across every region of Morocco.' },
              { href: '/marrakech', title: 'Marrakech City Guide', desc: 'Everything you need for the Red City: souks, palaces, food, nightlife, and day trips to the Atlas Mountains.' },
              { href: '/fes-guide', title: 'Fes City Guide', desc: 'Navigate the world\'s largest car-free urban area with our guide to the ancient medina and beyond.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Book Your Luxury Riad?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From intimate courtyard hideaways to palatial compounds with private hammams
            and rooftop pools, Morocco&apos;s luxury riads deliver experiences that no hotel chain
            can replicate. Start planning your stay today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
            <Link
              href="/morocco-riads-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Full Riads Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
