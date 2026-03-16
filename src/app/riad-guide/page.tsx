import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Building,
  Building2,
  MapPin,
  Star,
  Coins,
  ShieldCheck,
  Sparkles,
  Heart,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Crown,
  Bed,
  Coffee,
  Sun,
  Moon,
  Key,
  Camera,
  Phone,
  Globe,
  Bookmark,
  ThumbsUp,
  ThumbsDown,
  DoorOpen,
  Palette,
  Droplets,
  TreePine,
  Info,
  HelpCircle,
  Volume2,
  CircleDollarSign,
  CalendarDays,
  Utensils,
  Flower2,
  Gem,
  Layers,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'The Complete Guide to Moroccan Riads | Stay in a Traditional Riad | CityGuide',
  description:
    'Everything you need to know about staying in a Moroccan riad. Discover the best riads in Marrakech, Fes, Essaouira, and Chefchaouen. Real prices in MAD, booking tips, riad etiquette, architecture guide, and honest comparisons with hotels.',
  keywords: [
    'Moroccan riad',
    'riad Morocco',
    'riad Marrakech',
    'riad Fes',
    'stay in a riad',
    'best riads Morocco',
    'riad vs hotel Morocco',
    'riad booking tips',
    'Riad Yasmine',
    'Riad Kniza',
    'La Mamounia',
    'riad architecture',
    'zellige tilework',
    'tadelakt plaster',
    'Moroccan courtyard house',
    'riad etiquette',
    'riad breakfast',
    'riad prices Morocco',
    'luxury riad Marrakech',
    'budget riad Fes',
  ],
  openGraph: {
    title: 'The Complete Guide to Moroccan Riads - CityGuide',
    description:
      'Your definitive guide to staying in a Moroccan riad. Best riads by city, real prices, booking tips, etiquette, and an architecture deep dive into zellige, tadelakt, and carved cedar.',
    url: 'https://citytoursmorocco.com/riad-guide',
    images: [
      {
        url: '/images/hero-riad-interior.webp',
        width: 1200,
        height: 630,
        alt: 'Beautiful interior courtyard of a traditional Moroccan riad with zellige tiles and a central fountain',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Guide to Moroccan Riads | CityGuide',
    description:
      'Best riads in Marrakech, Fes, Essaouira, and Chefchaouen. Real prices, booking tips, etiquette, and architecture guide.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/riad-guide' },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/riad-guide#guide',
      headline: 'The Complete Guide to Moroccan Riads',
      description:
        'Comprehensive guide to staying in a Moroccan riad, covering the best riads by city, prices, booking tips, etiquette, architecture, and comparison with hotels.',
      url: 'https://citytoursmorocco.com/riad-guide',
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
          name: 'What is a riad in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A riad is a traditional Moroccan house built around a central courtyard garden, typically with a fountain, open to the sky. The word comes from the Arabic "ryad" meaning garden. These centuries-old homes have been converted into intimate guesthouses offering an authentic Moroccan accommodation experience.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does a riad cost per night in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Budget riads cost 300-600 MAD ($30-$60) per night, mid-range riads 600-1,500 MAD ($60-$150), and luxury riads 1,500-5,000+ MAD ($150-$500+). Prices vary by city, with Marrakech being the most expensive and Fes offering better value.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between a riad and a dar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A riad traditionally has a garden courtyard with trees and plants, while a dar (meaning "house") has a simpler central courtyard without a garden. In practice, many guesthouses use both terms interchangeably, but a true riad has at least four orange or lemon trees in its courtyard garden.',
          },
        },
        {
          '@type': 'Question',
          name: 'Should I book a riad or hotel in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Riads offer an intimate, authentic Moroccan experience with personalized service, traditional breakfasts, and stunning architecture. Hotels offer more standardized amenities like pools, gyms, and room service. For a first visit to Morocco, staying in a riad at least part of the time is highly recommended.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it safe to stay in a riad?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, riads are very safe. Most have locked doors with a guardian (gardien) on duty, and the intimate setting means staff know exactly who is coming and going. Riads in the medina can feel unfamiliar at first due to the narrow alleyways, but the neighborhoods are well-patrolled and locals are protective of their communities.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
        { '@type': 'ListItem', position: 2, name: 'Riad Guide', item: 'https://citytoursmorocco.com/riad-guide' },
      ],
    },
  ],
};

/* =====================================================================
   RIAD TYPES DATA
   ===================================================================== */

const riadTypes = [
  {
    type: 'Budget Riads',
    icon: <Coins className="w-6 h-6" />,
    price: '300-600 MAD/night',
    priceUsd: '$30-$60',
    description:
      'Affordable riads that deliver an authentic medina experience without breaking the bank. Budget riads are typically family-run, with 4-8 rooms arranged around a simple courtyard. Furnishings are modest but clean, and the atmosphere is warm and welcoming. Breakfast is usually included, and the hosts genuinely care about making your stay memorable. Many budget riads occupy historic buildings with original architectural details that rival those of far more expensive properties. The trade-off is smaller rooms, shared bathrooms in some cases, and fewer amenities. For travelers who spend most of their time exploring, a budget riad is an excellent choice.',
    examples: ['Riad Laayoun (Fes, 350 MAD)', 'Riad Dar Khmissa (Marrakech, 400 MAD)', 'Dar Ihssane (Essaouira, 380 MAD)'],
    pros: ['Incredible value for money', 'Authentic family-run atmosphere', 'Breakfast usually included', 'Real cultural immersion'],
    cons: ['Smaller rooms', 'Some may share bathrooms', 'Fewer amenities', 'Basic Wi-Fi connectivity'],
  },
  {
    type: 'Mid-Range Riads',
    icon: <Star className="w-6 h-6" />,
    price: '600-1,500 MAD/night',
    priceUsd: '$60-$150',
    description:
      'The sweet spot for most travelers. Mid-range riads offer beautifully restored interiors, private en-suite bathrooms, quality linens, and often a small plunge pool or hammam. The architectural details are impressive &mdash; expect hand-carved cedar ceilings, intricate zellige tilework, and tadelakt-finished walls. Service is attentive and personalized; staff will arrange restaurant reservations, hammam appointments, and guided tours. Rooms are individually decorated with a mix of traditional Moroccan and contemporary design. Many mid-range riads are owned by European expats who have invested heavily in faithful restorations while adding modern comforts like air conditioning and reliable Wi-Fi.',
    examples: ['Riad BE Marrakech (900 MAD)', 'Karawan Riad Fes (800 MAD)', 'Riad Baladin Essaouira (700 MAD)'],
    pros: ['Beautiful restoration', 'Private bathrooms with quality fixtures', 'Personalized service', 'Often includes plunge pool or hammam'],
    cons: ['Price varies significantly by season', 'Popular ones book out months ahead', 'Some can feel over-designed', 'Variable breakfast quality'],
  },
  {
    type: 'Luxury Riads',
    icon: <Crown className="w-6 h-6" />,
    price: '1,500-5,000+ MAD/night',
    priceUsd: '$150-$500+',
    description:
      'Palatial riads that transform a traditional medina house into a world-class boutique hotel. Luxury riads feature museum-quality architecture, bespoke furniture, haute couture linens, private hammams, swimming pools, rooftop restaurants, and staff-to-guest ratios that rival the finest hotels. Many occupy historic palaces that have been painstakingly restored over several years by leading architects. The suites are expansive, often spanning entire floors, with private terraces overlooking the courtyard. In-house chefs prepare elaborate Moroccan feasts, and butlers attend to every detail. Some luxury riads in Marrakech and Fes rank among the best boutique hotels in the world.',
    examples: ['La Mamounia (Marrakech, 5,000+ MAD)', 'Riad Fes (Fes, 2,800 MAD)', 'Heure Bleue Palais (Essaouira, 2,200 MAD)'],
    pros: ['World-class architecture and design', 'Exceptional personalized service', 'Private hammam and pool', 'Fine dining on-site'],
    cons: ['Significant investment', 'May feel overly formal', 'Less spontaneous than smaller riads', 'Some charge extra for breakfast'],
  },
  {
    type: 'Heritage & Museum Riads',
    icon: <Building className="w-6 h-6" />,
    price: '1,000-4,000 MAD/night',
    priceUsd: '$100-$400',
    description:
      'A special category of riads that are as much cultural institutions as they are accommodations. Heritage riads are historically significant buildings &mdash; former palaces of viziers, residences of wealthy merchants, or centuries-old family compounds &mdash; that have been restored with scholarly precision. Every tile, beam, and plaster technique is authentic to the original period. Staying in a heritage riad is like sleeping inside a living museum. Many display private collections of Moroccan art, antique carpets, and historical artifacts. The owners are often passionate historians who can narrate the story of every room. These riads attract architecture enthusiasts, historians, and travelers seeking the deepest possible connection to Moroccan culture.',
    examples: ['Riad Laaroussa (Fes, 1,800 MAD)', 'Riad Kniza (Marrakech, 2,500 MAD)', 'Palais Amani (Fes, 2,000 MAD)'],
    pros: ['Historically significant buildings', 'Authentic period architecture', 'Cultural depth and storytelling', 'Art and artifact collections'],
    cons: ['May prioritize authenticity over modern comfort', 'Historic structures can have quirks', 'Limited room count', 'Not ideal for families with young children'],
  },
];

/* =====================================================================
   BEST RIADS BY CITY DATA
   ===================================================================== */

interface RiadListing {
  name: string;
  neighborhood: string;
  priceRange: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
}

interface CityRiads {
  city: string;
  slug: string;
  description: string;
  riads: RiadListing[];
}

const riadsByCity: CityRiads[] = [
  {
    city: 'Marrakech',
    slug: 'marrakech',
    description:
      'Marrakech is the undisputed capital of the Moroccan riad scene. With over 1,500 riads converted into guesthouses, the city offers more choice than anywhere else in the country. The best riads cluster in the medina neighborhoods of Mouassine, Bab Doukkala, Riad Zitoun, and the Kasbah. Marrakech riads tend to be the most design-forward, with many owned by European architects and interior designers who have created stunning contemporary-traditional fusions.',
    riads: [
      {
        name: 'Riad Yasmine',
        neighborhood: 'Sidi Ben Slimane',
        priceRange: '900-1,600 MAD',
        category: 'Mid-Range',
        description:
          'One of the most photographed riads in Morocco, Riad Yasmine is famous for its stunning turquoise plunge pool framed by lush green plants and crisp white architecture. The seven rooms are individually designed with a refined bohemian aesthetic that perfectly balances Moroccan tradition with contemporary style. The rooftop terrace offers sweeping views of the medina and Atlas Mountains. Instagram may have made it famous, but the genuine warmth of the staff and the quality of the Moroccan breakfast keep guests returning.',
        highlights: ['Iconic turquoise plunge pool', 'Rooftop Atlas Mountain views', 'Bohemian-chic design', 'Outstanding breakfast spread'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Riad Kniza',
        neighborhood: 'Bab Doukkala',
        priceRange: '2,000-4,500 MAD',
        category: 'Luxury / Heritage',
        description:
          'Owned by Mohammed Bouskri, one of Morocco\'s foremost antique collectors, Riad Kniza is a museum-quality experience disguised as a boutique hotel. Every corner displays rare Berber carpets, antique jewelry, vintage Moroccan pottery, and original artwork. The 11 rooms and suites are furnished with genuine antiques, and the hammam is one of the most beautiful private hammams in Marrakech. Riad Kniza has earned a reputation as the thinking traveler\'s riad &mdash; a place where culture, history, and hospitality converge at the highest level.',
        highlights: ['Museum-quality antique collection', 'Private hammam and pool', 'Gourmet Moroccan restaurant', 'Expert-led cultural experiences'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'La Mamounia',
        neighborhood: 'Avenue Bab Jdid',
        priceRange: '5,000-25,000+ MAD',
        category: 'Ultra-Luxury Palace',
        description:
          'La Mamounia is not a riad in the traditional sense &mdash; it is a legendary palace hotel that has hosted Winston Churchill, the Rolling Stones, and countless heads of state since opening in 1923. Set within 17 acres of historic gardens originally gifted to a prince in the 18th century, the hotel combines palatial Moroccan architecture with Art Deco glamour. Three restaurants, four bars, a 2,500-square-meter spa, an Olympic-sized pool, and 210 rooms and suites make it an institution unto itself. La Mamounia is the gold standard against which all Moroccan luxury is measured.',
        highlights: ['17 acres of historic gardens', 'Three world-class restaurants', 'Legendary 2,500 sqm spa', 'Art Deco meets Moroccan palace architecture'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Riad BE',
        neighborhood: 'Mouassine',
        priceRange: '800-1,400 MAD',
        category: 'Mid-Range Design',
        description:
          'A stylish, design-driven riad in the heart of the fashionable Mouassine quarter. Riad BE features a minimalist take on Moroccan design: clean lines, neutral tones, and carefully curated contemporary art set against original architectural elements. The five rooms are compact but thoughtfully designed, with Beni Ourain rugs, brass fixtures, and tadelakt bathrooms. The ground-floor courtyard is a peaceful retreat from the medina bustle, and the rooftop terrace is perfect for evening drinks with Koutoubia views. Riad BE proves that excellent design does not require a luxury price tag.',
        highlights: ['Contemporary Moroccan design', 'Mouassine quarter location', 'Rooftop Koutoubia views', 'Art-curated interiors'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Riad Joya',
        neighborhood: 'Kennaria',
        priceRange: '1,800-3,500 MAD',
        category: 'Luxury Boutique',
        description:
          'Riad Joya occupies a meticulously restored 19th-century palace that took over two years to renovate. The seven suites are among the most spacious in the Marrakech medina, with soaring ceilings, original zellige floors, and bathrooms finished in jet-black tadelakt. The courtyard features a heated plunge pool surrounded by orange trees, and the rooftop houses both a restaurant and a bar with panoramic medina views. Chef-prepared dinners feature refined Moroccan cuisine using market-fresh ingredients sourced daily from the nearby Rahba Kedima spice square.',
        highlights: ['Spacious suites with original zellige', 'Heated courtyard plunge pool', 'Chef-prepared Moroccan dinners', 'Two-year palace restoration'],
        image: '/images/hero-riad-interior.webp',
      },
    ],
  },
  {
    city: 'Fes',
    slug: 'fes',
    description:
      'Fes offers what many consider the most authentic riad experience in Morocco. The medina of Fes el-Bali is the world\'s largest car-free urban zone, and its riads tend to be older, grander, and more architecturally significant than those in Marrakech. Prices are generally 20-30% lower than Marrakech, making Fes excellent value. The best riad neighborhoods are Ziat, Douh, Batha, and the area near Bab Boujloud. Many Fes riads occupy former merchant palaces with towering ceilings, elaborate plasterwork, and gardens that justify the name "riad" in its purest sense.',
    riads: [
      {
        name: 'Riad Fes',
        neighborhood: 'Zerbtana, Fes el-Bali',
        priceRange: '2,200-5,000 MAD',
        category: 'Five-Star Luxury',
        description:
          'The most celebrated luxury riad in Fes, Riad Fes is a Relais & Chateaux property occupying a palatial complex in the heart of the ancient medina. The 16 rooms and suites feature hand-painted wooden ceilings, museum-quality zellige, and massive marble bathrooms. The rooftop restaurant serves refined Moroccan cuisine with views stretching to the Marinid tombs. The Riad Fes spa, with its marble hammam and swimming pool, is among the best in the city. The bar, housed in a former prayer room with a stunning carved cedar ceiling, serves creative Moroccan-inspired cocktails.',
        highlights: ['Relais & Chateaux property', 'Rooftop restaurant with medina views', 'Marble hammam and pool', 'Museum-quality architectural details'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Dar Roumana',
        neighborhood: 'Zkak Roumane, Fes el-Bali',
        priceRange: '1,200-2,500 MAD',
        category: 'Boutique Gourmet',
        description:
          'Run by a French-Moroccan couple with deep culinary expertise, Dar Roumana has earned a reputation as the best food destination among Fes riads. The intimate five-room property features a pomegranate tree courtyard (roumana means pomegranate), individually styled rooms with tasteful Franco-Moroccan decor, and cooking classes that are among the most sought-after in the city. The multi-course dinners, prepared using recipes refined over decades, rival the best restaurants in Fes. Beyond the food, the warmth of the hosts and the beauty of the restored 17th-century building make Dar Roumana a genuinely special place to stay.',
        highlights: ['Renowned gourmet dining', 'Cooking classes available', 'Pomegranate tree courtyard', '17th-century restoration'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Riad Laaroussa',
        neighborhood: 'Derb Bechara, Talaa Sghira',
        priceRange: '1,500-3,200 MAD',
        category: 'Heritage Luxury',
        description:
          'Riad Laaroussa is a masterpiece of Moroccan architectural preservation. This 17th-century palace was one of the first riads in Fes to be restored and opened to guests, and it set the standard that others followed. The eight rooms are spread around one of the largest private courtyards in the medina, shaded by a towering fig tree and perfumed by jasmine. The interiors mix original period features with carefully chosen contemporary art. The in-house hammam is heated by a traditional wood-fired boiler, and the spa uses artisanal products made in-house.',
        highlights: ['17th-century palace with vast courtyard', 'Wood-fired traditional hammam', 'In-house artisanal spa products', 'Pioneer of the Fes riad scene'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Karawan Riad',
        neighborhood: 'Derb Moulay Abdellah, Fes el-Bali',
        priceRange: '700-1,400 MAD',
        category: 'Mid-Range',
        description:
          'Karawan Riad delivers a high-quality medina experience at a fair price. The nine rooms are decorated in a warm, tasteful style that avoids both the austerity of budget options and the excess of some luxury properties. The courtyard is intimate and calming, with a small fountain and comfortable seating for breakfast and afternoon tea. What sets Karawan apart is the quality of its service: the staff are genuinely knowledgeable about Fes and go out of their way to help guests navigate the medina, find artisan workshops, and discover the city\'s hidden treasures.',
        highlights: ['Excellent value for quality', 'Knowledgeable and helpful staff', 'Calm courtyard atmosphere', 'Strategic medina location'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Palais Amani',
        neighborhood: 'Oued Zhoune, near Bab Guissa',
        priceRange: '1,800-3,800 MAD',
        category: 'Luxury Heritage',
        description:
          'Palais Amani is a 17th-century Andalusian palace transformed into a 15-room luxury riad with an emphasis on gardens and gastronomy. The property features the largest private garden in the Fes medina: a stunning Andalusian-style garden with fountains, citrus trees, roses, and jasmine, maintained by a dedicated gardener. The on-site restaurant is among the best in Fes, and the cooking school offers immersive Moroccan culinary experiences. The rooms blend period architecture with modern luxury, and the rooftop bar offers one of the finest sunset views in the city.',
        highlights: ['Largest private garden in Fes medina', 'Acclaimed restaurant and cooking school', 'Andalusian palace architecture', 'Rooftop bar with sunset views'],
        image: '/images/hero-riad-interior.webp',
      },
    ],
  },
  {
    city: 'Essaouira',
    slug: 'essaouira',
    description:
      'Essaouira\'s riads reflect the coastal city\'s unique character: breezy, bohemian, and infused with Atlantic light. The medina is compact and easy to navigate, making any riad location convenient. Essaouira riads tend to be smaller and more relaxed than their Marrakech counterparts, with a coastal aesthetic that incorporates blue-and-white color palettes, driftwood accents, and rooftop terraces oriented toward ocean views. The city attracts surfers, artists, and travelers seeking a more laid-back pace, and its riads reflect this sensibility perfectly.',
    riads: [
      {
        name: 'Heure Bleue Palais',
        neighborhood: 'Rue Ibn Batouta',
        priceRange: '1,800-4,200 MAD',
        category: 'Five-Star Luxury',
        description:
          'The grande dame of Essaouira accommodation, Heure Bleue Palais is a restored 19th-century palace that operates as a genuine five-star hotel within the medina. The 33 rooms and suites are elegantly furnished in a Franco-Moroccan style, with marble bathrooms and ocean or courtyard views. The rooftop features a heated swimming pool with Atlantic panoramas, and the spa includes a traditional hammam and treatment rooms. The French restaurant is consistently ranked among the best in Essaouira, and the ground-floor cinema screens classic films nightly.',
        highlights: ['Rooftop pool with Atlantic views', 'In-house cinema', 'French-Moroccan fine dining', '33 rooms in a restored palace'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Riad Baladin',
        neighborhood: 'Rue de la Skala',
        priceRange: '600-1,100 MAD',
        category: 'Mid-Range',
        description:
          'A charming riad near the Skala fortress with four individually styled rooms built around a bright, airy courtyard. Riad Baladin captures the essence of Essaouira: relaxed, artistic, and bathed in Atlantic light. The rooms feature a calming coastal palette with natural materials, and the rooftop terrace has sweeping views over the ramparts to the ocean. The owners are passionate about Essaouira\'s art and music scene and can connect guests with local artists, musicians, and gallery openings. Breakfast includes fresh-caught seafood on most mornings.',
        highlights: ['Near Skala fortress', 'Ocean views from rooftop', 'Art and music scene connections', 'Seafood breakfast'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Dar Maya',
        neighborhood: 'Rue d\'Agadir',
        priceRange: '800-1,500 MAD',
        category: 'Boutique',
        description:
          'A beautifully designed boutique riad that brings contemporary Scandinavian-Moroccan design to the Essaouira medina. Dar Maya\'s five rooms feature clean lines, natural materials, muted earth tones, and designer lighting, creating a serene retreat from the medina\'s colorful energy. The courtyard is planted with banana palms and climbing bougainvillea, and the rooftop terrace offers both sunny and shaded areas with Atlantic views. The English-speaking hosts provide exceptional personalized service, from arranging surf lessons to booking seafood restaurants on the harbor.',
        highlights: ['Scandinavian-Moroccan design fusion', 'Tranquil planted courtyard', 'Surf and beach arrangements', 'Exceptional English-speaking hosts'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Riad Chbanate',
        neighborhood: 'Rue Chbanate',
        priceRange: '700-1,200 MAD',
        category: 'Mid-Range Boutique',
        description:
          'Located on one of the medina\'s main arteries, Riad Chbanate combines a superb location with a stylish, comfortable interior. The seven rooms are decorated in warm earth tones with Moroccan textiles and contemporary art, and all have en-suite bathrooms with quality fixtures. The rooftop terrace is one of the best in Essaouira, with 360-degree views that stretch from the fishing port to the Ile de Mogador. The ground-floor restaurant specializes in Moroccan-Mediterranean fusion cuisine and is popular with both guests and outside diners.',
        highlights: ['Central medina location', '360-degree rooftop views', 'Moroccan-Mediterranean restaurant', 'Seven well-appointed rooms'],
        image: '/images/hero-riad-interior.webp',
      },
    ],
  },
  {
    city: 'Chefchaouen',
    slug: 'chefchaouen',
    description:
      'Chefchaouen\'s famous blue-washed medina creates a magical backdrop for its more intimate riad scene. The selection is smaller than Marrakech or Fes, but the riads here benefit from the town\'s extraordinary setting in the Rif Mountains. Expect blue-and-white interiors, mountain views from rooftop terraces, and a quieter, more contemplative atmosphere. Riads in Chefchaouen are generally more affordable, and the compact medina means you are never more than a few minutes\' walk from the central Plaza Uta el-Hammam.',
    riads: [
      {
        name: 'Casa Hassan',
        neighborhood: 'Rue Targui',
        priceRange: '600-1,100 MAD',
        category: 'Mid-Range Heritage',
        description:
          'One of the original guesthouses in Chefchaouen, Casa Hassan has been welcoming travelers since 1985. The property is a restored traditional house with thick walls, carved wooden doors, and a rooftop terrace famous for its panoramic views of the blue medina and the Rif Mountains. The 12 rooms vary in size but all feature traditional Chefchaouen decor with colorful woven blankets and handmade furniture. The ground-floor restaurant is an institution, serving some of the best Moroccan cuisine in town. Casa Hassan is the kind of place where you feel like an honored guest in a Moroccan family home.',
        highlights: ['Pioneer guesthouse since 1985', 'Panoramic Rif Mountain views', 'Acclaimed restaurant', 'Authentic family atmosphere'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Dar Echchaouen',
        neighborhood: 'Plaza Uta el-Hammam',
        priceRange: '1,200-2,500 MAD',
        category: 'Luxury',
        description:
          'The most luxurious accommodation option in the Chefchaouen medina, Dar Echchaouen is a beautifully restored palace with six suites arranged around a blue-and-white courtyard. The interiors combine traditional Chefchaouen craftsmanship &mdash; hand-woven textiles, carved plaster, painted wooden ceilings &mdash; with contemporary comfort. The spa includes a traditional hammam and massage treatments using locally sourced argan and cedar oils. The rooftop restaurant and bar, with its views over the medina to the twin peaks of Jebel Chefchaouen, is arguably the most scenic dining spot in all of northern Morocco.',
        highlights: ['Most luxurious option in Chefchaouen', 'Spa with traditional hammam', 'Scenic rooftop dining', 'Six individually designed suites'],
        image: '/images/hero-riad-interior.webp',
      },
      {
        name: 'Lina Ryad & Spa',
        neighborhood: 'Ras El Ma',
        priceRange: '800-1,500 MAD',
        category: 'Boutique Spa',
        description:
          'Set near the Ras El Ma spring at the eastern edge of the medina, Lina Ryad & Spa is a modern boutique property that combines Chefchaouen\'s traditional blue aesthetic with contemporary wellness amenities. The nine rooms feature floor-to-ceiling blue-and-white design, quality linens, and mountain-view balconies. The full-service spa offers hammam, massage, and beauty treatments. What distinguishes Lina from other Chefchaouen riads is its location near the spring, where local women come to wash clothes in the cascading water &mdash; a living tableau of traditional Moroccan life visible from the riad\'s terraces.',
        highlights: ['Near the Ras El Ma spring', 'Full-service spa and hammam', 'Mountain-view balconies', 'Modern boutique design'],
        image: '/images/hero-riad-interior.webp',
      },
    ],
  },
];

/* =====================================================================
   WHAT TO EXPECT DATA
   ===================================================================== */

const whatToExpect = [
  {
    title: 'Arrival & Check-in',
    icon: <Key className="w-5 h-5" />,
    description:
      'Most riads are tucked deep within the medina, which means navigating narrow alleyways that no car can reach. Your riad will typically arrange for someone to meet you at a nearby taxi drop-off point or parking area and guide you through the medina on foot. This escort is usually free and essential for your first arrival. Check-in is a leisurely affair: you will be seated in the courtyard or salon, served mint tea and Moroccan pastries, and given an unhurried orientation to the riad and the neighborhood. The welcoming ritual is genuine and sets the tone for your entire stay.',
  },
  {
    title: 'Moroccan Breakfast',
    icon: <Coffee className="w-5 h-5" />,
    description:
      'Breakfast at a riad is one of the highlights of staying in Morocco and is almost always included in the room rate. The typical spread includes freshly baked msemen (layered flatbread), baghrir (Moroccan crumpets with a thousand tiny holes), khobz (round bread), an assortment of jams made from fig, orange, or apricot, local honey, olive oil, fresh-squeezed orange juice, and generous pots of mint tea and coffee. Many riads add eggs cooked to order, seasonal fruit, and Moroccan cheese. Breakfast is served at your own pace, usually between 8:00 and 10:30, in the courtyard or on the rooftop terrace.',
  },
  {
    title: 'Rooftop Terraces',
    icon: <Sun className="w-5 h-5" />,
    description:
      'The rooftop terrace is the crown jewel of the riad experience. Since traditional Moroccan architecture is inward-facing, the rooftop is where the views open up: sweeping panoramas of medina rooftops, minarets, stork nests, and often the Atlas Mountains or Atlantic Ocean on the horizon. Most riads furnish their terraces with cushioned seating, shade structures, and sometimes a small bar area. The rooftop is the place to watch the sunset while sipping mint tea, to eat breakfast in the morning sun, or to stargaze after dinner. In summer, some riads set up beds on the rooftop for sleeping under the stars.',
  },
  {
    title: 'Hammam Access',
    icon: <Droplets className="w-5 h-5" />,
    description:
      'Many mid-range and luxury riads include a private hammam available to guests, either as a shared facility or bookable for private sessions. A basic hammam experience at a riad is often complimentary, while full treatments with gommage scrub and ghassoul clay mask cost 150-400 MAD extra. If your riad does not have a hammam, the staff will recommend a nearby public hammam or spa and may arrange the appointment for you. Having a hammam session at your riad is wonderfully convenient &mdash; you can simply wrap yourself in a bathrobe afterward and relax in the courtyard.',
  },
  {
    title: 'The No-Shoes Policy',
    icon: <DoorOpen className="w-5 h-5" />,
    description:
      'Most riads follow the traditional Moroccan practice of removing shoes at the entrance. You will find a shoe rack or designated area near the front door, and many riads provide babouches (Moroccan leather slippers) for guests to wear inside. This keeps the intricate zellige floors and handwoven carpets clean and contributes to the calm, home-like atmosphere of the riad. Walking through cool marble corridors in soft leather slippers is one of those small pleasures that makes the riad experience special.',
  },
  {
    title: 'Evening & Night',
    icon: <Moon className="w-5 h-5" />,
    description:
      'Riads are residential buildings in residential neighborhoods, and they observe quiet hours, typically after 10:00 PM. This is not a hotel with a 24-hour concierge desk (though a night gardien, or guardian, is always present). The front door is locked after a certain hour, and you will be given a key or a bell to alert the gardien. Noise carries in the open courtyard structure, so guests are expected to keep voices low after 10 PM. The medina itself goes quiet surprisingly early, and the combination of cool night air, the murmur of the courtyard fountain, and the distant call to prayer creates an atmosphere of profound tranquility.',
  },
];

/* =====================================================================
   RIAD VS HOTEL COMPARISON DATA
   ===================================================================== */

const comparisonData = [
  { feature: 'Setting', riad: 'Historic medina house with central courtyard', hotel: 'Purpose-built or modern building' },
  { feature: 'Size', riad: '4-20 rooms, intimate and personal', hotel: '50-500+ rooms, anonymous' },
  { feature: 'Architecture', riad: 'Original zellige, tadelakt, carved cedar', hotel: 'Standard international design' },
  { feature: 'Breakfast', riad: 'Traditional Moroccan spread, usually included', hotel: 'International buffet, often extra' },
  { feature: 'Service', riad: 'Personal, staff know you by name', hotel: 'Professional but impersonal' },
  { feature: 'Location', riad: 'Deep within the medina, walking only', hotel: 'Often in Ville Nouvelle, car accessible' },
  { feature: 'Pool', riad: 'Small plunge pool or none', hotel: 'Full-size swimming pool common' },
  { feature: 'Parking', riad: 'No on-site parking', hotel: 'Usually available' },
  { feature: 'Elevator', riad: 'Never (multi-story traditional building)', hotel: 'Standard' },
  { feature: 'Wi-Fi', riad: 'Variable quality, thick walls limit signal', hotel: 'Generally reliable throughout' },
  { feature: 'Air Conditioning', riad: 'Most have it, but thick walls keep rooms cool', hotel: 'Central climate control' },
  { feature: 'Price (mid-range)', riad: '600-1,500 MAD ($60-$150)', hotel: '800-2,000 MAD ($80-$200)' },
  { feature: 'Noise', riad: 'Medina sounds: call to prayer, vendors', hotel: 'Soundproofed rooms' },
  { feature: 'Cultural Experience', riad: 'Deep immersion in Moroccan life', hotel: 'International standard, less local' },
  { feature: 'Best For', riad: 'Couples, culture-seekers, first-time visitors', hotel: 'Families with young children, business travelers' },
];

/* =====================================================================
   BOOKING TIPS DATA
   ===================================================================== */

const bookingTips = [
  {
    title: 'Book Direct for the Best Rate',
    icon: <Globe className="w-5 h-5" />,
    description:
      'While Booking.com and Airbnb are convenient, many riads offer a 10-15% discount when you book directly through their website or by email. Direct bookings also mean 100% of your money goes to the riad rather than to a platform. Contact the riad by email or WhatsApp, mention the dates you want, and ask for their direct rate. Most are happy to offer better prices and will often throw in extras like airport transfers, hammam sessions, or room upgrades.',
  },
  {
    title: 'Arrange Airport Transfers in Advance',
    icon: <Phone className="w-5 h-5" />,
    description:
      'Arriving at a riad deep within a medina for the first time can be disorienting. Most riads offer airport or train station transfers for 150-300 MAD, and this is money well spent for your first arrival. The driver will meet you at the airport and deliver you to the nearest vehicle-accessible point, where a riad staff member will walk you through the medina to the door. After your first day, you will know the route, but for arrival day, the transfer removes all stress.',
  },
  {
    title: 'Communicate Dietary Needs Early',
    icon: <Utensils className="w-5 h-5" />,
    description:
      'Moroccan riad breakfasts are typically carb-heavy (bread, pastries, jam). If you have dietary restrictions &mdash; gluten-free, vegan, allergies &mdash; email the riad before arrival. Moroccan hosts are incredibly accommodating and will happily adjust the breakfast spread, but they need advance notice to source ingredients. Dinner at the riad (usually requires 24-hour advance booking) can be tailored even more precisely.',
  },
  {
    title: 'Ask About Renovation Noise',
    icon: <Volume2 className="w-5 h-5" />,
    description:
      'Medina riads are constantly being renovated, and construction noise from neighboring properties can be significant. Before booking, ask the riad directly: &ldquo;Are there any renovations happening nearby?&rdquo; Honest riads will tell you. This is particularly relevant in Marrakech, where the riad construction boom means there is almost always building work happening somewhere in the medina. A riad surrounded by completed restorations is far preferable to one next door to an active building site.',
  },
  {
    title: 'Verify Photos Are Current',
    icon: <Camera className="w-5 h-5" />,
    description:
      'Some riads use professional photos from their opening that may not reflect the current state of the property. Check recent reviews on TripAdvisor and Google Maps for guest photos. Look at the date stamps on reviews &mdash; properties can change significantly over a year or two. Instagram is another excellent source: search the riad name and look at guest photos and stories for the most current visual record.',
  },
  {
    title: 'Consider the Season Carefully',
    icon: <CalendarDays className="w-5 h-5" />,
    description:
      'Peak season in Marrakech and Fes is October through April, when prices are highest and availability is tightest. Book at least 2-3 months ahead for this period. Summer (June-August) brings lower prices but intense heat, particularly in Marrakech and Fes where temperatures regularly exceed 40 degrees Celsius. The shoulder months of May, September, and early October often offer the best combination of pleasant weather, lower prices, and good availability.',
  },
  {
    title: 'Read the Fine Print on Extras',
    icon: <Info className="w-5 h-5" />,
    description:
      'Some riads quote room-only rates and charge separately for breakfast (100-150 MAD per person), city tax (25-35 MAD per person per night), and hammam use. Others include everything. Before confirming your booking, clarify exactly what is included. Also ask about dinner availability (most require 24-hour notice), laundry service, and whether the rooftop terrace has a bar or just self-service tea.',
  },
];

/* =====================================================================
   RIAD ETIQUETTE DATA
   ===================================================================== */

const etiquetteRules = [
  {
    title: 'Remove Your Shoes at the Door',
    description:
      'This is the most fundamental rule of riad etiquette. Remove your shoes at the entrance and use the babouches (slippers) provided. Walking on antique zellige tiles and handwoven Berber carpets in outdoor shoes is considered disrespectful. If no slippers are provided, bring your own comfortable indoor footwear.',
  },
  {
    title: 'Conserve Water',
    description:
      'Morocco is a water-scarce country, and many riads draw from limited local water supplies. Keep showers brief, do not leave taps running, and avoid filling the bathtub to the brim. Some riads have solar-heated water with limited capacity, so long showers can leave other guests without hot water.',
  },
  {
    title: 'Respect Quiet Hours After 10 PM',
    description:
      'The open courtyard design of a riad means that sound travels freely between rooms. Keep noise to a minimum after 10:00 PM. This means speaking softly, avoiding video calls in the courtyard, and being mindful of others when returning from dinner. The call to prayer at dawn is part of the experience &mdash; not a complaint-worthy disturbance.',
  },
  {
    title: 'Tip the Staff Appropriately',
    description:
      'Tipping is expected and appreciated. Leave 10-20 MAD per day for the housekeeper, placed on the pillow or bedside table. Tip the person who carries your bags 10-20 MAD, and the person who escorts you from the taxi point 20-30 MAD. For extended stays, a larger tip for the overall team at checkout (100-200 MAD per week) is a generous gesture.',
  },
  {
    title: 'Ask Before Photographing Staff',
    description:
      'Many riad staff are happy to be photographed, but always ask permission first. This is a basic courtesy that applies throughout Morocco but is especially important in the intimate setting of a riad where staff are welcoming you into what is essentially a private home. Never photograph staff without consent.',
  },
  {
    title: 'Dress Modestly in Shared Spaces',
    description:
      'While your private room is your own, shared areas like the courtyard, salon, and rooftop terrace are semi-public spaces. Cover shoulders and knees when walking through the riad. Swimwear is appropriate only at the plunge pool, not in the courtyard or on the terrace. This is more about cultural sensitivity than strict rules.',
  },
  {
    title: 'Communicate Your Plans',
    description:
      'Riad staff often wait up for late-returning guests or prepare early breakfasts for those catching dawn flights. Let the staff know your rough schedule: when you expect to return for dinner, whether you need an early breakfast, and what time you plan to check out. This small courtesy makes their job much easier.',
  },
  {
    title: 'Handle the Gardien (Night Guardian) with Respect',
    description:
      'The gardien sleeps by the front door and lets late-arriving guests in. Ring the bell gently &mdash; do not pound on the door. A small tip (10-20 MAD) when he opens the door late at night is a kind acknowledgment of his disrupted sleep. The gardien is responsible for the security of the entire property and its guests.',
  },
];

/* =====================================================================
   ARCHITECTURE DEEP DIVE DATA
   ===================================================================== */

const architectureElements = [
  {
    name: 'Zellige Tilework',
    arabicName: 'Zellij',
    icon: <Layers className="w-5 h-5" />,
    description:
      'Zellige is the art of hand-cut mosaic tilework that has defined Moroccan architecture for over a thousand years. Each tiny piece of glazed terracotta is individually chiseled by a master craftsman (maalem) from a larger tile and then assembled face-down on a flat surface to create intricate geometric patterns. The mathematical precision of zellige patterns &mdash; based on complex star-and-rosette geometries derived from Islamic mathematical traditions &mdash; is staggering. A single courtyard wall may contain tens of thousands of hand-cut pieces in a dozen colors. The classic zellige palette includes cobalt blue, emerald green, saffron yellow, terracotta red, black, and white. In riads, zellige adorns fountain basins, courtyard floors, walls, columns, and hammam chambers.',
    location: 'Courtyard walls, fountains, floors, hammam chambers',
  },
  {
    name: 'Tadelakt Plaster',
    arabicName: 'Tadlakt',
    icon: <Droplets className="w-5 h-5" />,
    description:
      'Tadelakt is a waterproof lime plaster unique to Morocco, traditionally used in hammams and riads for over a millennium. Made from limestone found in the Marrakech region and polished to a lustrous sheen with river stones and black olive soap, tadelakt creates surfaces that are simultaneously rustic and sophisticated. The technique requires years of apprenticeship to master. The plaster is applied wet, then polished repeatedly over several days to create a smooth, slightly undulating surface that glows with an inner warmth. Tadelakt is naturally antibacterial and waterproof, making it ideal for bathrooms and wet areas. In luxury riads, entire bathrooms, sinks, and even bathtubs are sculpted from tadelakt, creating monolithic organic forms.',
    location: 'Bathrooms, hammam walls, interior walls, sinks and bathtubs',
  },
  {
    name: 'Carved Cedar Ceilings',
    arabicName: 'Khashab al-Arz',
    icon: <TreePine className="w-5 h-5" />,
    description:
      'The aromatic cedar wood from the Middle Atlas Mountains has been prized in Moroccan architecture for centuries. In riads, cedar is used for elaborately carved and painted ceilings, doors, window screens, and balustrades. The carving techniques range from deep relief work depicting floral and geometric motifs to shallow incised patterns that create delicate shadow play when light shifts throughout the day. Many riad ceilings are also painted in rich polychrome palettes &mdash; deep blues, reds, greens, and gold leaf &mdash; using techniques passed down through generations of craftsmen. The scent of aged cedar, released when the wood is warmed by the sun, is one of the distinctive sensory signatures of a Moroccan riad.',
    location: 'Ceilings, doors, window screens, balconies, furniture',
  },
  {
    name: 'Mashrabiya Screens',
    arabicName: 'Moucharabieh',
    icon: <Gem className="w-5 h-5" />,
    description:
      'Mashrabiya (called moucharabieh in the Moroccan dialect) are intricately carved wooden lattice screens that serve both decorative and functional purposes. These screens allow air circulation while providing privacy, filter harsh sunlight into beautiful geometric shadow patterns, and frame views of the courtyard from upper floors. The craft of mashrabiya-making involves assembling thousands of small turned wooden pieces into complex geometric lattice patterns without nails or glue. In riads, mashrabiya appears as window screens, room dividers, and balcony railings overlooking the courtyard. The interplay of light and shadow through mashrabiya screens is one of the most photographed features of Moroccan architecture.',
    location: 'Windows, room dividers, courtyard balconies, upper galleries',
  },
  {
    name: 'Central Fountain & Garden',
    arabicName: 'Sahn wa Riyad',
    icon: <Flower2 className="w-5 h-5" />,
    description:
      'The central courtyard is the heart and soul of every riad. Traditionally, a true riad (from the Arabic ryad, meaning garden) contains a formal garden divided into four quadrants by channels of water, echoing the Islamic concept of paradise as a garden with four rivers. At the center sits a fountain, ranging from a simple stone basin to an elaborate zellige-clad structure with multiple tiers. The garden typically includes at least four trees &mdash; traditionally orange, lemon, or fig &mdash; along with jasmine, bougainvillea, roses, and aromatic herbs like mint and basil. The sound of trickling water from the fountain, the scent of orange blossom and jasmine, and the dappled shade of fruit trees create a sensory experience of peace and enclosure that has been refined over centuries.',
    location: 'Central courtyard, ground floor',
  },
  {
    name: 'Andalusian Influence',
    arabicName: 'Al-Andalus',
    icon: <Palette className="w-5 h-5" />,
    description:
      'The architecture of Moroccan riads owes an enormous debt to the Andalusian traditions brought to Morocco by Moorish refugees expelled from Spain during the Reconquista (13th-17th centuries). These master builders and artisans brought with them the refined aesthetic of the Alhambra and the Great Mosque of Cordoba: horseshoe arches, muqarnas (honeycomb vaulting), intricate stucco carving, and the mathematical geometry that underlies zellige patterns. The cities of Fes, Tetouan, and Chefchaouen received the largest influx of Andalusian refugees and consequently display the strongest Andalusian architectural influence. In these cities, riad architecture is a living bridge between two great civilizations separated by the Strait of Gibraltar.',
    location: 'Overall structural design, arches, stucco work, proportions',
  },
];

/* =====================================================================
   PRACTICAL INFORMATION DATA
   ===================================================================== */

const bestNeighborhoods = [
  { city: 'Marrakech', neighborhoods: ['Mouassine', 'Bab Doukkala', 'Riad Zitoun el-Jedid', 'Kasbah', 'Kennaria'], note: 'Mouassine for design lovers, Bab Doukkala for easy access' },
  { city: 'Fes', neighborhoods: ['Ziat', 'Batha', 'Douh', 'Talaa Kbira', 'Near Bab Boujloud'], note: 'Ziat for luxury, near Bab Boujloud for convenience' },
  { city: 'Essaouira', neighborhoods: ['Near Skala', 'Rue de la Skala', 'Rue d\'Agadir', 'Kasbah quarter'], note: 'Compact medina, all locations are convenient' },
  { city: 'Chefchaouen', neighborhoods: ['Plaza Uta el-Hammam area', 'Near Ras El Ma', 'Rue Targui'], note: 'Small medina, stay central for best views' },
];

const averagePrices = [
  { city: 'Marrakech', budget: '400-600 MAD', mid: '800-1,500 MAD', luxury: '2,000-5,000+ MAD', note: 'Most expensive riad market' },
  { city: 'Fes', budget: '300-500 MAD', mid: '700-1,400 MAD', luxury: '1,800-4,000 MAD', note: '20-30% cheaper than Marrakech' },
  { city: 'Essaouira', budget: '350-550 MAD', mid: '600-1,200 MAD', luxury: '1,800-4,200 MAD', note: 'Good value coastal riads' },
  { city: 'Chefchaouen', budget: '250-450 MAD', mid: '600-1,100 MAD', luxury: '1,200-2,500 MAD', note: 'Best value overall' },
  { city: 'Meknes', budget: '250-400 MAD', mid: '500-900 MAD', luxury: '1,000-2,000 MAD', note: 'Hidden gem, very affordable' },
  { city: 'Rabat', budget: '350-500 MAD', mid: '700-1,200 MAD', luxury: '1,500-3,000 MAD', note: 'Growing riad scene' },
];

const packingList = [
  { item: 'Universal power adapter', reason: 'Morocco uses Type C and E plugs (European style)' },
  { item: 'Earplugs', reason: 'Medina sounds and the call to prayer begin at dawn' },
  { item: 'Lightweight slippers', reason: 'In case babouches are not provided' },
  { item: 'Small flashlight or phone torch', reason: 'Medina alleyways can be dark at night' },
  { item: 'Modest swimwear', reason: 'For the plunge pool or hammam sessions' },
  { item: 'Light layers', reason: 'Riads can be cool inside even when it is hot outside' },
  { item: 'Portable charger', reason: 'Power outlets may not be near the bed' },
  { item: 'Small travel towel', reason: 'Useful for hammam visits at public bathhouses' },
];

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Building className="w-5 h-5" />, label: 'Architecture', value: 'Courtyard House', detail: 'Centered on an open sky' },
  { icon: <Bed className="w-5 h-5" />, label: 'Typical Size', value: '4-20 Rooms', detail: 'Intimate & personal' },
  { icon: <Coins className="w-5 h-5" />, label: 'Budget Price', value: '300-600 MAD', detail: 'About $30-$60/night' },
  { icon: <Coffee className="w-5 h-5" />, label: 'Breakfast', value: 'Included', detail: 'Traditional Moroccan spread' },
  { icon: <Star className="w-5 h-5" />, label: 'Best For', value: 'Couples & Culture', detail: 'Authentic immersion' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Inside Medinas', detail: 'Heart of the old city' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function RiadGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ───────────────────────── Breadcrumb ───────────────────────── */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Riad Guide</li>
        </ol>
      </nav>

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-riad-interior.webp"
            alt="Ornate interior courtyard of a traditional Moroccan riad with zellige tilework, carved cedar balconies, and a central fountain"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Accommodation &amp; Architecture
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              The Complete Guide to Moroccan Riads
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Everything you need to know about staying in a traditional Moroccan riad. From centuries-old architecture to booking tips,
              etiquette, and the best riads in every city &mdash; your definitive guide to the most authentic way to experience Morocco.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ───────────────────────── Quick Stats ───────────────────────── */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── What Is a Riad? ───────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What Is a Riad?
            </h2>
          </div>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              A riad is a traditional Moroccan house or palace built around a central interior courtyard garden, open to the sky.
              The word comes from the Arabic <em>ryad</em> (meaning &ldquo;garden&rdquo;), and in its purest form, a riad
              contains a formal garden divided into four symmetrical sections by channels of water &mdash; an earthly
              representation of the Islamic paradise garden described in the Quran, with its four rivers of water, milk, wine,
              and honey. At the heart of the courtyard sits a fountain, and the garden is planted with fragrant trees:
              traditionally orange, lemon, fig, or pomegranate.
            </p>
            <p>
              The riad architecture is profoundly inward-facing. From the outside, a riad presents nothing more than a plain,
              unmarked wall with a modest door &mdash; often indistinguishable from the walls of the surrounding alleyway. This
              deliberate modesty reflects the Islamic value of not displaying wealth publicly. But step through that door and the
              transformation is total: a hidden world of intricate beauty unfolds around you. Columns of carved marble frame
              archways decorated with sculpted plaster. Walls shimmer with thousands of hand-cut zellige tiles in cobalt, emerald,
              and gold. Carved cedar ceilings emit a faint perfume of Atlas Mountain wood. And in the center of it all, the
              courtyard fountain murmurs gently beneath an open rectangle of sky.
            </p>
            <p>
              It is important to understand the distinction between a <strong>riad</strong> and a <strong>dar</strong>. A riad,
              strictly speaking, has a garden with trees and plants in its courtyard. A dar (Arabic for &ldquo;house&rdquo;) has a
              simpler courtyard &mdash; usually paved with zellige tiles and centered on a fountain, but without a planted garden.
              In practice, the Moroccan hospitality industry uses both terms loosely, and many properties marketed as riads are
              technically dars. A true traditional riad has at least four trees (one in each quadrant of the garden), water channels
              connecting to the central fountain, and a courtyard large enough to contain a genuine garden &mdash; a feature that
              typically indicates a grander, wealthier original household.
            </p>
            <p>
              The architecture of the Moroccan riad evolved over centuries, drawing on Roman atrium houses, Andalusian palace
              traditions brought by Moorish refugees from Spain, and indigenous Berber building techniques. The result is a
              building type uniquely adapted to Morocco&rsquo;s climate and culture: the thick earthen walls provide natural
              insulation against summer heat and winter cold, the open courtyard allows light and air to reach all rooms while
              maintaining privacy from the street, and the rooftop terrace extends the living space upward into the open air. Over
              the past three decades, thousands of these historic buildings have been lovingly restored and converted into
              guesthouses, creating one of the world&rsquo;s most distinctive accommodation experiences.
            </p>
          </div>

          {/* Traditional Design Elements */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { element: 'Zellige Tilework', detail: 'Hand-cut mosaic tiles in geometric star-and-rosette patterns, using cobalt blue, emerald green, saffron yellow, and white. Each courtyard contains thousands of individually chiseled pieces.' },
              { element: 'Tadelakt Plaster', detail: 'Waterproof lime plaster polished with river stones and black olive soap to a luminous sheen. Used for walls, bathrooms, and hammam chambers. Unique to Morocco.' },
              { element: 'Carved Cedar', detail: 'Aromatic Atlas Mountain cedar wood carved into intricate floral and geometric patterns for ceilings, doors, and window screens. Often painted in polychrome palettes with gold leaf.' },
              { element: 'Mashrabiya Screens', detail: 'Delicate wooden lattice screens (moucharabieh) that filter light, provide privacy, and allow air circulation. Made from thousands of turned wooden pieces assembled without nails.' },
            ].map((el) => (
              <div key={el.element} className="card-moroccan p-5">
                <h4 className="font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)]">{el.element}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{el.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Types of Riads ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Types of Riads
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From family-run budget guesthouses to palatial heritage properties, Morocco offers a riad for every traveler and every budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {riadTypes.map((rt) => (
              <div key={rt.type} className="card-moroccan p-6 md:p-8 flex flex-col">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4 self-start">
                  {rt.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                  {rt.type}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag-primary text-sm font-semibold">{rt.price}</span>
                  <span className="text-xs text-[var(--text-muted)]">{rt.priceUsd}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-4 flex-1">
                  {rt.description}
                </p>
                <div className="mb-4 pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-2">Real Examples</p>
                  <div className="flex flex-wrap gap-1.5">
                    {rt.examples.map((ex) => (
                      <span
                        key={ex}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[var(--border-light)]">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-green)] mb-2 uppercase tracking-wide">Pros</p>
                    <ul className="space-y-1">
                      {rt.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-[var(--color-green)] mt-0.5 shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-accent)] mb-2 uppercase tracking-wide">Cons</p>
                    <ul className="space-y-1">
                      {rt.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Best Riads by City ───────────────────────── */}
      {riadsByCity.map((cityData, cityIndex) => (
        <section
          key={cityData.city}
          className={`py-16 md:py-20 ${cityIndex % 2 === 0 ? '' : 'bg-[var(--surface-muted)] moroccan-pattern'}`}
        >
          <div className="container-morocco">
            <div className="text-center mb-12">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Best Riads in {cityData.city}
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
                {cityData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cityData.riads.map((riad) => (
                <div key={riad.name} className="card-moroccan overflow-hidden flex flex-col">
                  <div className="relative h-56 shrink-0">
                    <img
                      src={riad.image}
                      alt={`${riad.name} in ${cityData.city} - ${riad.category}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-[var(--text-primary)]">
                        {riad.neighborhood}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-primary)]/90 text-white">
                        {riad.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1 font-[family-name:var(--font-display)]">
                      {riad.name}
                    </h3>
                    <p className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-1">
                      <MapPin className="w-3 h-3" /> {riad.neighborhood}, {cityData.city}
                    </p>
                    <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">{riad.priceRange}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                      {riad.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-light)]">
                      {riad.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                        >
                          <Sparkles className="w-2.5 h-2.5" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ───────────────────────── What to Expect ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Expect When Staying in a Riad
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the moment you arrive to your last morning breakfast, here is everything you need to know about daily life inside a Moroccan riad.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {whatToExpect.map((item) => (
              <div key={item.title} className="card-moroccan p-6 md:p-8 flex gap-4 md:gap-6">
                <div className="flex flex-col items-center shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-display)]">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Riad vs Hotel ───────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Riad vs Hotel: Which Should You Choose?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding the key differences will help you choose the right accommodation for your travel style and priorities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)] border-b border-[var(--border-light)]">Feature</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-primary)] border-b border-[var(--border-light)]">Riad</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-muted)] border-b border-[var(--border-light)]">Hotel</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 1 ? 'bg-[var(--surface-muted)]/50' : ''}>
                      <td className="p-4 font-medium text-[var(--text-primary)] border-b border-[var(--border-light)]">{row.feature}</td>
                      <td className="p-4 text-[var(--text-secondary)] border-b border-[var(--border-light)]">{row.riad}</td>
                      <td className="p-4 text-[var(--text-muted)] border-b border-[var(--border-light)]">{row.hotel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* When to Choose Each */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <ThumbsUp className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 font-[family-name:var(--font-display)]">
                Choose a Riad When...
              </h3>
              <ul className="space-y-2">
                {[
                  'You want an authentic Moroccan cultural experience',
                  'You are traveling as a couple or small group',
                  'You value personalized, attentive service',
                  'You appreciate historic architecture and design',
                  'You enjoy traditional Moroccan breakfasts',
                  'You want to be in the heart of the medina',
                  'It is your first time in Morocco',
                  'You prefer intimate, boutique accommodations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6 md:p-8">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
                <ThumbsDown className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 font-[family-name:var(--font-display)]">
                Choose a Hotel When...
              </h3>
              <ul className="space-y-2">
                {[
                  'You are traveling with young children or need an elevator',
                  'You require reliable, high-speed Wi-Fi for remote work',
                  'You want a full-size swimming pool and gym',
                  'You need on-site parking for a rental car',
                  'You prefer standardized international service',
                  'You arrive late at night and want easy vehicle access',
                  'You have mobility challenges and need step-free access',
                  'You are on a business trip and need a conference room',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Booking Tips ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bookmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Booking Tips &amp; Advice
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Insider knowledge to help you find the perfect riad, get the best price, and avoid common pitfalls.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 md:p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 font-[family-name:var(--font-display)]">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Riad Etiquette ───────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Riad Etiquette
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight essential rules to ensure a respectful, comfortable stay and make the best impression on your hosts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {etiquetteRules.map((rule, index) => (
              <div key={rule.title} className="card-moroccan p-5 md:p-6 flex gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1.5 font-[family-name:var(--font-display)]">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {rule.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Architecture Deep Dive ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Architecture Deep Dive
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The six defining architectural elements that make Moroccan riads among the most beautiful buildings in the world.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {architectureElements.map((element) => (
              <div key={element.name} className="card-moroccan overflow-hidden flex flex-col md:flex-row">
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                      {element.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                        {element.name}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-medium">{element.arabicName}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {element.description}
                  </p>
                  <div className="pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <span className="font-semibold text-[var(--text-primary)]">Where to find it:</span> {element.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Practical Cards: Best Neighborhoods ───────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Neighborhoods to Stay
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The top riad neighborhoods in each city, chosen for location, atmosphere, and accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {bestNeighborhoods.map((item) => (
              <div key={item.city} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 font-[family-name:var(--font-display)]">
                  {item.city}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {item.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/8 text-[var(--color-primary)] font-medium"
                    >
                      <MapPin className="w-2.5 h-2.5" />
                      {n}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] italic">
                  <Lightbulb className="w-3 h-3 inline mr-1" />
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Practical Cards: Average Prices ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CircleDollarSign className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Average Riad Prices by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect to pay per room per night across Morocco&rsquo;s top destinations. All prices in Moroccan Dirham (MAD).
            </p>
          </div>

          <div className="max-w-5xl mx-auto card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)] border-b border-[var(--border-light)]">City</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-green)] border-b border-[var(--border-light)]">Budget</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-primary)] border-b border-[var(--border-light)]">Mid-Range</th>
                    <th className="text-left p-4 font-semibold text-[var(--color-accent)] border-b border-[var(--border-light)]">Luxury</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-muted)] border-b border-[var(--border-light)]">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {averagePrices.map((row, i) => (
                    <tr key={row.city} className={i % 2 === 1 ? 'bg-[var(--surface-muted)]/50' : ''}>
                      <td className="p-4 font-medium text-[var(--text-primary)] border-b border-[var(--border-light)]">{row.city}</td>
                      <td className="p-4 text-[var(--text-secondary)] border-b border-[var(--border-light)]">{row.budget}</td>
                      <td className="p-4 text-[var(--text-secondary)] border-b border-[var(--border-light)]">{row.mid}</td>
                      <td className="p-4 text-[var(--text-secondary)] border-b border-[var(--border-light)]">{row.luxury}</td>
                      <td className="p-4 text-[var(--text-muted)] text-xs border-b border-[var(--border-light)]">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── What to Pack ───────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bookmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Pack for a Riad Stay
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Eight riad-specific items that will make your stay significantly more comfortable.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingList.map((item) => (
              <div key={item.item} className="card-moroccan p-5 flex gap-3">
                <CheckCircle className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-[var(--text-primary)] mb-1">{item.item}</p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FAQ Section ───────────────────────── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is a riad in Morocco?',
                a: 'A riad is a traditional Moroccan house built around a central courtyard garden, open to the sky. The word comes from the Arabic "ryad" meaning garden. These centuries-old homes have been converted into intimate guesthouses with typically 4-20 rooms, offering an authentic accommodation experience with traditional architecture, Moroccan breakfasts, and personalized service.',
              },
              {
                q: 'How much does a riad cost per night?',
                a: 'Budget riads cost 300-600 MAD ($30-$60) per night, mid-range riads 600-1,500 MAD ($60-$150), and luxury riads 1,500-5,000+ MAD ($150-$500+). Prices vary significantly by city (Marrakech is most expensive), season (October-April is peak), and property quality. Breakfast is typically included in the room rate.',
              },
              {
                q: 'Is it safe to stay in a riad in the medina?',
                a: 'Yes, riads are very safe. They have locked doors with a gardien (night guardian) always on duty. The intimate setting means staff know exactly who enters and exits. While the narrow medina alleyways can feel unfamiliar at first, these neighborhoods are well-established residential areas where locals are protective of their community. Your riad will provide a staff escort for your first arrival.',
              },
              {
                q: 'What is the difference between a riad and a dar?',
                a: 'Traditionally, a riad has a planted garden with trees in its courtyard, while a dar (meaning "house") has a simpler tiled courtyard without a garden. In modern tourism, both terms are used loosely and often interchangeably. A true riad has at least four trees, water channels, and a courtyard large enough for a genuine garden.',
              },
              {
                q: 'Do riads have Wi-Fi and air conditioning?',
                a: 'Most riads offer Wi-Fi, though signal strength can be inconsistent due to thick traditional walls (the same walls that keep rooms cool). Mid-range and luxury riads generally have air conditioning. Budget riads may not, though the thick earthen walls and courtyard design provide surprisingly effective natural cooling. If reliable internet is critical for your trip, ask the riad about signal strength before booking.',
              },
              {
                q: 'Can I stay in a riad with children?',
                a: 'Many riads welcome families, but some smaller boutique riads have minimum age policies (often 12+). The open courtyard with a plunge pool or fountain can be a concern for parents of toddlers. Riads also lack elevators, so strollers are impractical. Ask the riad directly about their family policy. For families with young children, a riad with a walled garden and shallow plunge pool is ideal.',
              },
              {
                q: 'Should I book direct or through Booking.com?',
                a: 'Both work, but booking direct (via the riad website, email, or WhatsApp) typically saves 10-15% since the riad avoids platform commissions. Direct bookings also build a personal relationship: the riad is more likely to offer upgrades, arrange free transfers, or be flexible with cancellations. Booking.com is useful for comparing options and reading reviews.',
              },
              {
                q: 'What should I wear in a riad?',
                a: 'Your private room is your own, but in shared spaces (courtyard, rooftop, salon) dress modestly: cover shoulders and knees. Swimwear is appropriate only at the plunge pool area. Most riads provide babouches (leather slippers) for indoor use. The no-shoes policy at the entrance is standard and should always be observed.',
              },
              {
                q: 'How do I find my riad in the medina?',
                a: 'Most riads arrange a staff member to meet you at the nearest vehicle-accessible point and walk you through the medina to the door. For your first arrival, this escort service (usually free) is essential. After your first day, you will learn the route. Save the riad location on Google Maps or Maps.me offline, and save the riad phone number in case you get lost.',
              },
              {
                q: 'Can I eat dinner at my riad?',
                a: 'Most riads offer dinner service, but it typically requires 24-hour advance notice since the cook shops for fresh ingredients at the market that morning. Riad dinners are often multi-course Moroccan feasts (tajine, couscous, pastilla) and cost 200-500 MAD per person depending on the property. The quality varies &mdash; ask for recent guest reviews before committing.',
              },
              {
                q: 'Do riads have pools?',
                a: 'Many mid-range and luxury riads have small plunge pools (typically 3-5 meters) in the courtyard, which are perfect for cooling off but not for swimming laps. Some luxury riads have larger heated pools. Rooftop pools exist but are rare due to structural limitations of historic buildings. If a pool is important to you, confirm its size and whether it is heated before booking, as some courtyard pools are too small to do more than dip your feet.',
              },
              {
                q: 'What time is check-in and check-out at a riad?',
                a: 'Most riads offer check-in from 2:00 PM and check-out by 11:00 AM or noon, similar to hotels. However, because riads are small and personally managed, they are often more flexible than hotels. If you arrive early, many riads will store your luggage and give you access to the rooftop and courtyard while your room is prepared. Late check-out is frequently available upon request, especially outside of peak season.',
              },
              {
                q: 'Are riads wheelchair accessible?',
                a: 'Unfortunately, most traditional riads are not wheelchair accessible. They are multi-story historic buildings with narrow doorways, steps at the entrance, staircases between floors, and no elevators. The medina alleyways themselves are often uneven and stepped. Some newer or recently renovated riads have ground-floor rooms that are accessible, but this is the exception. If you have mobility needs, contact the riad directly to discuss your specific requirements before booking.',
              },
              {
                q: 'Can I do laundry at a riad?',
                a: 'Most riads offer laundry service, typically hand-washed and line-dried on the rooftop terrace. Expect to pay 10-30 MAD per item, with turnaround usually the same day or next morning. Some budget riads do not offer laundry service but can direct you to a nearby laundry shop in the medina. Ironing is generally available at mid-range and luxury riads.',
              },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)]">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Related Pages ───────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bookmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into Moroccan travel with these related guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { title: 'Hammam & Spa Guide', href: '/hammam', description: 'The ancient bathing ritual, top hammams, etiquette, and products' },
              { title: 'Medina Navigation Guide', href: '/medina-guide', description: 'How to navigate the labyrinthine old cities of Morocco' },
              { title: 'Moroccan Architecture', href: '/architecture', description: 'Zellige, tadelakt, cedar carvings, and Andalusian influence' },
              { title: 'Marrakech City Guide', href: '/marrakech', description: 'Complete guide to the Red City including riads, restaurants, and souks' },
              { title: 'Fes City Guide', href: '/fes-guide', description: 'Navigate the world\'s largest car-free medina' },
              { title: 'Essaouira Guide', href: '/essaouira-guide', description: 'Coastal charm, art, surf, and seafood on the Atlantic' },
              { title: 'Moroccan Cuisine', href: '/food', description: 'Tajines, couscous, pastilla, and street food across the kingdom' },
              { title: 'First-Time Visitor Guide', href: '/first-time', description: 'Everything you need to know for your first trip to Morocco' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-5 hover:shadow-lg transition-shadow group flex flex-col"
              >
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 font-[family-name:var(--font-heading)] group-hover:text-[var(--color-primary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1">
                  {link.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--color-primary)] font-semibold mt-3">
                  Read Guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── CTA ───────────────────────── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Book Your Riad?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our city guides to find the perfect riad for your Morocco adventure, or browse accommodation listings with verified reviews and real prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/accommodations"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Browse Accommodations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
