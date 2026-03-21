import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  MapPin,
  Star,
  Clock,
  DollarSign,
  Calendar,
  CheckCircle,
  Camera,
  AlertTriangle,
  Shield,
  Sun,
  ArrowRight,
  CloudSun,
  Sunrise,
  Eye,
  Mountain,
  Users,
  ThumbsUp,
  Info,
  Gauge,
  HelpCircle,
  Phone,
  Globe,
  Compass,
  Heart,
  Thermometer,
  CircleDot,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Hot Air Balloon Rides 2026 | Marrakech Sunrise Flights, Atlas Views & Booking Guide',
  description:
    'Complete guide to hot air balloon flights in Morocco. Sunrise rides over Marrakech, Atlas Mountains panoramas, Palmeraie flyovers, and Ouarzazate desert flights. Prices from 1,500 MAD. Booking tips, safety info, photography advice, and operator comparisons.',
  keywords: [
    'hot air balloon Morocco',
    'hot air balloon Marrakech',
    'balloon ride Marrakech',
    'Marrakech balloon flight',
    'balloon ride Atlas Mountains',
    'Morocco balloon experience',
    'sunrise balloon Marrakech',
    'Palmeraie balloon ride',
    'Ouarzazate balloon flight',
    'Morocco balloon price',
    'Ciel d Afrique Marrakech',
    'Marrakech Insiders balloon',
    'balloon photography Morocco',
    'best balloon ride Morocco',
    'hot air balloon booking Morocco',
    'Morocco balloon safety',
    'Atlas Mountains from above',
    'Morocco aerial adventure',
    'balloon ride cost Marrakech',
    'Morocco hot air balloon 2026',
  ],
  openGraph: {
    title: 'Morocco Hot Air Balloon Rides 2026 | Marrakech Sunrise Flights & Atlas Views',
    description:
      'Plan your Morocco balloon adventure. Sunrise flights over Marrakech from 1,500 MAD, Atlas Mountain views, photography tips, operator comparisons, and booking advice.',
    url: `${BASE_URL}/morocco-hot-air-balloon`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hot-air-balloon.webp`,
        width: 1200,
        height: 630,
        alt: 'Hot air balloon floating above the Marrakech Palmeraie at sunrise with the Atlas Mountains on the horizon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Hot Air Balloon Rides 2026 | Sunrise Flights & Atlas Views',
    description:
      'Everything you need to know about balloon flights in Morocco: operators, prices from 1,500 MAD, sunrise timings, photography tips, and safety advice.',
    images: [`${BASE_URL}/images/hero-hot-air-balloon.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-hot-air-balloon` },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-hot-air-balloon`,
  name: 'Morocco Hot Air Balloon Rides 2026 | Marrakech Sunrise Flights, Atlas Views & Booking Guide',
  description:
    'The definitive guide to hot air balloon rides in Morocco. Covers Marrakech sunrise flights, Atlas Mountain panoramas, Palmeraie and desert flights, operator comparisons, prices, safety, photography, and booking tips.',
  url: `${BASE_URL}/morocco-hot-air-balloon`,
  image: `${BASE_URL}/images/hero-hot-air-balloon.webp`,
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
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-hot-air-balloon`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Marrakech' },
    { '@type': 'Place', name: 'Atlas Mountains' },
    { '@type': 'Place', name: 'Palmeraie' },
    { '@type': 'Place', name: 'Ouarzazate' },
    { '@type': 'Place', name: 'Morocco' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Hot Air Balloon Morocco', item: `${BASE_URL}/morocco-hot-air-balloon` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a hot air balloon ride in Marrakech cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Balloon flights in Marrakech range from 1,500 MAD to 3,500 MAD per person depending on the operator, group size, and package inclusions. Standard sunrise flights with hotel pickup and breakfast average around 1,800 to 2,200 MAD. Private flights for two cost from 8,000 MAD upward.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time do hot air balloon flights take off in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Balloon flights launch at sunrise, which means takeoff times shift with the seasons. In summer (June to August), expect hotel pickup around 4:30 AM with a 6:00 AM launch. In winter (December to February), pickup is around 5:30 AM with a 7:00 AM launch. Spring and autumn fall in between.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is a hot air balloon flight in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The actual airborne time is typically 50 to 70 minutes. The full experience lasts 3 to 4 hours, including hotel pickup, the drive to the launch site, watching the balloon inflate, the flight itself, a post-flight breakfast or brunch, and the return transfer to your hotel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to go on a hot air balloon in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Reputable operators in Morocco maintain strong safety records. Look for companies with decades of experience, Cameron or Ultramagic balloons, licensed pilots, and civil aviation authority certification. Flights are cancelled when wind speeds exceed safe limits, which is a sign of a responsible operator.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the balloon flight is cancelled due to weather?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Operators cancel flights when wind speeds exceed approximately 15 km/h or when visibility is poor due to fog or sandstorms. If cancelled, you will be offered either a full refund or a rescheduled flight on the next available day. Cancellation rates are highest in winter and during sandstorm season (late spring).',
      },
    },
    {
      '@type': 'Question',
      name: 'Can children go on a hot air balloon in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most operators accept children aged 6 and older, though some set the minimum at 8. Children must be tall enough to see over the basket rim (typically 1.10 m or taller). Some operators offer discounted rates for children under 12. Pregnant women are generally not permitted to fly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear on a hot air balloon ride in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear layers, as early mornings can be cool (8 to 15 degrees Celsius) but it warms up quickly at sunrise. Flat, closed-toe shoes are essential for the landing. Avoid high heels, sandals, and loose scarves that could catch on the burner. Bring sunglasses and a hat for the post-flight breakfast in the sun.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a balloon ride in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October through April offers the clearest skies and most stable morning air around Marrakech. The Atlas Mountains are often snow-capped during these months, creating dramatic backdrops. Summer flights are possible but takeoff times are very early, and haze can reduce visibility. The peak cancellation period is late May to early June due to chergui (hot desert winds).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to book a balloon ride in advance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Advance booking is strongly recommended, especially from October through March when demand is highest. Most operators limit flights to one per day with 8 to 20 passengers. Booking at least 3 to 5 days ahead secures your spot. During Christmas, New Year, and Easter periods, book 2 or more weeks ahead.',
      },
    },
  ],
};

/* ===================================================================
   DATA: FLIGHT LOCATIONS
   =================================================================== */

const flightLocations = [
  {
    name: 'Marrakech — Jbilet Hills Launch',
    icon: Sunrise,
    terrain: 'Haouz Plain, olive groves, Berber villages',
    altitude: 'Up to 1,000 m above ground',
    bestView: 'Panoramic Atlas Mountains with sunrise light',
    description:
      'The classic Marrakech balloon experience. You launch from the arid Jbilet Hills north of the city and drift south over the Haouz Plain toward the High Atlas. Below you see patchwork farmland, traditional Berber villages with flat-roofed mudbrick houses, grazing camels and donkeys, and endless olive groves. On clear mornings, the snow-covered Atlas peaks fill the southern horizon. Most operators fly this route because the prevailing morning winds push balloons in exactly the right direction.',
    season: 'Year-round, best October to April',
    price: 'From 1,500 MAD per person',
  },
  {
    name: 'Palmeraie Flyover',
    icon: Eye,
    terrain: 'Palm groves, luxury villas, desert fringe',
    altitude: 'Up to 800 m above ground',
    bestView: 'Sea of date palms with Marrakech skyline and minarets',
    description:
      'Some flight paths carry you over the Palmeraie, the 13,000-hectare palm grove on the northeast edge of Marrakech said to have been planted in the 11th century by the Almoravids. From the basket, you look down on an ocean of date palm canopies punctuated by the turquoise pools and terracotta walls of luxury riads and resorts. The Koutoubia Mosque minaret is often visible on the western skyline. This route depends on wind direction and is not guaranteed on every flight.',
    season: 'Year-round, wind-dependent path',
    price: 'Included in standard Marrakech flights',
  },
  {
    name: 'Ouarzazate & Draa Valley',
    icon: Mountain,
    terrain: 'Desert plateau, kasbahs, oasis valleys',
    altitude: 'Up to 600 m above ground',
    bestView: 'Ait Benhaddou and desert landscape at golden hour',
    description:
      'Far less common than Marrakech flights but spectacularly rewarding. A handful of operators offer seasonal balloon rides from the Ouarzazate area, floating over the pre-Saharan hamada (rocky plateau), the Draa River oasis, and the rose-tinted kasbahs that made this region famous as a film location. The landscape is raw and cinematic, and you are likely to be the only balloon in the sky. Availability is limited and advance booking is essential.',
    season: 'October to March (limited availability)',
    price: 'From 2,500 MAD per person',
  },
  {
    name: 'Atlas Mountain Foothills',
    icon: Wind,
    terrain: 'Foothills, river valleys, terraced fields',
    altitude: 'Up to 1,200 m above ground',
    bestView: 'Close-up views of High Atlas ridgelines and valleys',
    description:
      'On days when wind patterns favor a southward drift from the standard Jbilet launch, balloons can reach the northern foothills of the High Atlas. This puts you eye-level with rugged mountain ridges, looking down into green river valleys with terraced barley fields, walnut orchards, and remote Berber hamlets accessible only by mule track. This path is not available on every flight and depends entirely on atmospheric conditions at altitude.',
    season: 'Best in autumn and spring',
    price: 'Included in standard Marrakech flights (wind-dependent)',
  },
];

/* ===================================================================
   DATA: OPERATORS
   =================================================================== */

const operators = [
  {
    name: 'Ciel d\'Afrique',
    founded: 1990,
    fleet: 'Cameron and Ultramagic balloons',
    capacity: '8 to 16 passengers per basket',
    price: 'From 1,800 MAD per person',
    duration: 'Approximately 60 minutes airborne',
    includes: [
      'Hotel pickup from central Marrakech (4:30 to 5:30 AM)',
      '4x4 drive to launch site in the Jbilet Hills',
      'Watch the full balloon inflation process',
      '1-hour sunrise flight over the Haouz Plain',
      'Traditional Berber breakfast after landing',
      'Flight certificate signed by the pilot',
      'Return transfer to your hotel by 9:30 AM',
    ],
    strengths: 'Morocco\'s oldest balloon operator with 35+ years and over 10,000 flights. Perfect safety record. Experienced French and Moroccan pilots.',
    website: 'cieldafrique.net',
  },
  {
    name: 'Marrakech Insiders',
    founded: 2012,
    fleet: 'Ultramagic balloons',
    capacity: '12 to 20 passengers per basket',
    price: 'From 1,500 MAD per person',
    duration: 'Approximately 50 to 60 minutes airborne',
    includes: [
      'Hotel pickup from Marrakech medina or Gueliz',
      'Transfer to launch area near Marrakech',
      'Pre-flight tea and Moroccan pastries',
      'Sunrise balloon flight',
      'Champagne-style celebration after landing',
      'Brunch with traditional Moroccan dishes',
      'Return transfer',
    ],
    strengths: 'Competitive pricing without sacrificing quality. Good reviews on TripAdvisor. English-speaking staff and well-organized logistics.',
    website: 'marrakech-insiders.com',
  },
  {
    name: 'Royal Balloon Marrakech',
    founded: 2015,
    fleet: 'Cameron balloons',
    capacity: '8 to 12 passengers per basket',
    price: 'From 2,000 MAD per person',
    duration: 'Approximately 60 minutes airborne',
    includes: [
      'Private minibus pickup from accommodation',
      'Drive to launch site with sunrise viewing',
      'Full balloon flight over the countryside',
      'Post-flight celebration with Moroccan mint tea',
      'Sit-down breakfast at a traditional farmhouse',
      'Personalized flight certificate',
      'Drop-off at hotel or medina location of your choice',
    ],
    strengths: 'Smaller group sizes for a more intimate experience. Premium service with personalized attention. Strong focus on photography-friendly flights.',
    website: 'royalballoonmarrakech.com',
  },
];

/* ===================================================================
   DATA: WHAT TO EXPECT TIMELINE
   =================================================================== */

const flightTimeline = [
  {
    time: '4:30 - 5:30 AM',
    title: 'Hotel Pickup',
    icon: Clock,
    description:
      'A driver collects you from your riad or hotel in a 4x4 or minibus. The drive to the launch site north of Marrakech takes 20 to 40 minutes depending on your accommodation location. Blankets are sometimes provided for the cool predawn air.',
  },
  {
    time: '5:30 - 6:00 AM',
    title: 'Arrival at the Launch Site',
    icon: MapPin,
    description:
      'You arrive at the open scrubland or farmland where the ground crew is already spreading out the balloon envelope. Hot tea, coffee, and pastries are served while you watch the crew cold-inflate the balloon using powerful fans, then fire the burners to bring it upright. This process takes about 20 minutes and makes for excellent photographs.',
  },
  {
    time: '6:00 - 6:15 AM',
    title: 'Boarding and Safety Briefing',
    icon: Shield,
    description:
      'The pilot gives a clear safety briefing covering the landing position (knees bent, hands gripping the interior rope handles), burner operation, and communication during flight. You then climb into the basket via a step built into the side. Baskets have separate compartments for stability.',
  },
  {
    time: '6:15 - 7:15 AM',
    title: 'The Flight',
    icon: Sunrise,
    description:
      'The balloon lifts off gently and rises to altitudes of 300 to 1,000 meters. The pilot controls altitude by firing the burner in short blasts. You drift with the wind over farmland, Berber villages, and olive groves. Sunrise transforms the Atlas Mountains from silhouettes into golden, snow-streaked peaks. The silence between burner blasts is extraordinary.',
  },
  {
    time: '7:15 - 7:30 AM',
    title: 'Landing',
    icon: Mountain,
    description:
      'The pilot selects a flat landing zone and talks you through the landing position. Landings can be gentle stand-ups or bumpy drag-landings depending on wind. The ground crew chases the balloon by vehicle and secures it on touchdown. The whole deflation and packing takes the crew about 30 minutes.',
  },
  {
    time: '7:30 - 8:30 AM',
    title: 'Breakfast Celebration',
    icon: Star,
    description:
      'Most operators serve a substantial breakfast at the landing site or a nearby farmhouse. Expect msemmen (layered flatbread), amlou (almond and argan paste), honey, fresh orange juice, Moroccan mint tea, scrambled eggs, and seasonal fruit. Some operators include a celebratory toast. Flight certificates are handed out.',
  },
  {
    time: '8:30 - 9:30 AM',
    title: 'Return Transfer',
    icon: Compass,
    description:
      'The crew drives you back to your hotel in Marrakech. You are typically back before 9:30 AM, leaving the rest of the day free for exploring the souks, visiting gardens, or heading out on another adventure.',
  },
];

/* ===================================================================
   DATA: PHOTOGRAPHY TIPS
   =================================================================== */

const photoTips = [
  {
    title: 'Bring the Right Lens',
    icon: Camera,
    tip: 'A wide-angle lens (16 to 35 mm) captures the vast landscape and the balloon envelope above. A mid-range zoom (24 to 70 mm) is ideal for villages and mountain detail. Leave the telephoto behind; it is too heavy and the basket vibration makes long focal lengths blurry.',
  },
  {
    title: 'Shoot During the Golden Window',
    icon: Sunrise,
    tip: 'The 15 minutes around sunrise produce the most dramatic light. Warm orange hues bathe the Atlas Mountains and cast long shadows across the plain. Shoot facing east for golden balloon envelopes, and west for the mountains lit edge-on.',
  },
  {
    title: 'Secure Your Gear',
    icon: Shield,
    tip: 'Use a wrist strap on your camera. Dropping equipment from 300 meters is permanent. Leave the tripod at the hotel; you will not need it and the basket floor vibrates with every burner blast. A small padded camera bag that fits at your feet is sufficient.',
  },
  {
    title: 'Include the Basket and Burner',
    icon: Eye,
    tip: 'Some of the most compelling photos include elements of the balloon itself: the burner flame, the ropes and cables, your fellow passengers looking out, the pilot working the controls. These add scale and context that a pure landscape shot lacks.',
  },
  {
    title: 'Capture Video of the Silence',
    icon: ThumbsUp,
    tip: 'Record a short video between burner blasts. The near-total silence at altitude, broken only by distant rooster calls or a barking dog 500 meters below, is one of the most memorable parts of the experience. A 30-second clip conveys this better than any photograph.',
  },
  {
    title: 'Smartphone Settings',
    icon: Phone,
    tip: 'Phone cameras perform well in balloon conditions. Switch to panorama mode for 360-degree landscape captures. Use HDR to handle the contrast between bright sky and dark ground. Charge fully the night before; cold morning air drains batteries 20 to 30 percent faster.',
  },
];

/* ===================================================================
   DATA: SAFETY & WEATHER
   =================================================================== */

const safetyPoints = [
  {
    title: 'Pilot Licensing',
    icon: Shield,
    detail: 'Reputable operators employ pilots certified by the Moroccan civil aviation authority (Direction Generale de l\'Aviation Civile). Top pilots hold European licenses with thousands of flight hours. Ask about your pilot\'s credentials when booking.',
  },
  {
    title: 'Equipment Standards',
    icon: Gauge,
    detail: 'The best operators fly Cameron or Ultramagic balloons, two of the world\'s leading manufacturers. These balloons undergo annual inspections and have redundant safety systems including dual burners, fire extinguishers, and first aid kits in every basket.',
  },
  {
    title: 'Weather Monitoring',
    icon: CloudSun,
    detail: 'Pilots check surface winds, upper-level winds, and visibility before every flight. Flights are cancelled when sustained surface winds exceed 15 km/h or gusts exceed 20 km/h. Fog, rain, and sandstorms (chergui) also ground flights. Good operators make the call at the launch site, not in advance by phone.',
  },
  {
    title: 'Passenger Briefing',
    icon: Info,
    detail: 'Every flight starts with a mandatory safety briefing. You learn the correct landing position: face the direction of travel, grip the rope handles inside the basket, and bend your knees. The pilot will call out instructions during descent. Following them precisely makes landings smooth and safe.',
  },
  {
    title: 'Medical Considerations',
    icon: Heart,
    detail: 'Balloon flights are gentle and suitable for most fitness levels. However, passengers must be able to stand for 60 minutes and climb into the basket (about 1 meter high). Pregnant women are not permitted. People with severe vertigo should note that the basket has high sides and the sensation is more like floating than standing on an edge.',
  },
  {
    title: 'Insurance Coverage',
    icon: CheckCircle,
    detail: 'Established operators carry third-party liability insurance and passenger accident insurance. Ask to see the insurance certificate before booking with any operator. Your personal travel insurance should also cover adventure activities; check the policy wording for "ballooning" or "aerial sports" exclusions.',
  },
];

/* ===================================================================
   DATA: BOOKING TIPS
   =================================================================== */

const bookingTips = [
  {
    title: 'Book 3 to 5 Days Ahead',
    icon: Calendar,
    tip: 'Operators run one flight per day with limited basket space. During peak season (October to March), slots fill fast. Booking at least 3 to 5 days in advance is recommended. For Christmas, New Year, and Easter periods, reserve 2 weeks or more ahead.',
  },
  {
    title: 'Book Directly with the Operator',
    icon: Globe,
    tip: 'Booking directly through the operator\'s website or by phone usually gives you the best price. Booking through your riad or a tour agency often adds a 20 to 30 percent commission on top. Direct booking also makes cancellation and rescheduling easier.',
  },
  {
    title: 'Check the Cancellation Policy',
    icon: AlertTriangle,
    tip: 'Weather cancellations are common (roughly 15 to 20 percent of scheduled flights). Good operators offer a full refund or free rescheduling for weather cancellations. Some budget operators offer only rescheduling. Confirm the policy in writing before paying.',
  },
  {
    title: 'Ask About Group Size',
    icon: Users,
    tip: 'Basket capacity ranges from 8 to 20 passengers. Smaller baskets (8 to 12) offer more space, better views, and a more personal experience. If basket size matters to you, ask the operator before booking. Some charge a premium for guaranteed small-group flights.',
  },
  {
    title: 'Schedule Early in Your Trip',
    icon: Clock,
    tip: 'If weather cancels your flight, having extra days in Marrakech gives you a second chance. Booking your balloon ride for the first or second morning of your stay is smart planning. Last-day bookings risk disappointment with no backup.',
  },
  {
    title: 'Confirm Pickup Details',
    icon: Phone,
    tip: 'The day before your flight, confirm your hotel address and pickup time with the operator. Medina riads can be hard to find; provide a nearby landmark or meet at a main road. Operators typically call or message you the evening before to confirm or cancel based on the weather forecast.',
  },
];

/* ===================================================================
   DATA: FAQ (for rendering)
   =================================================================== */

const faqs = [
  {
    question: 'How much does a hot air balloon ride in Marrakech cost?',
    answer:
      'Balloon flights in Marrakech range from 1,500 MAD to 3,500 MAD per person depending on the operator, group size, and package inclusions. Standard sunrise flights with hotel pickup and breakfast average around 1,800 to 2,200 MAD. Private flights for two cost from 8,000 MAD upward.',
  },
  {
    question: 'What time do balloon flights take off?',
    answer:
      'Flights launch at sunrise. In summer (June to August), hotel pickup is around 4:30 AM with a 6:00 AM launch. In winter (December to February), pickup is around 5:30 AM with a 7:00 AM launch. Spring and autumn fall in between. The early start is non-negotiable because calm winds and stable air exist only in the first hours after dawn.',
  },
  {
    question: 'How long is the actual flight?',
    answer:
      'The airborne portion is typically 50 to 70 minutes. The full experience, from hotel pickup to return drop-off, lasts 3 to 4 hours. This includes the drive to the launch site, watching the inflation, the flight itself, the post-landing breakfast, and the return transfer.',
  },
  {
    question: 'Is the balloon ride safe?',
    answer:
      'Reputable Moroccan operators maintain excellent safety records. The key is choosing an established company with certified pilots, well-maintained balloons (Cameron or Ultramagic), and a willingness to cancel for weather. Flights are cancelled when winds exceed safe limits, which actually demonstrates responsible operation.',
  },
  {
    question: 'What happens if my flight is cancelled for weather?',
    answer:
      'Operators cancel flights when wind speeds exceed approximately 15 km/h or visibility is poor. You will be offered a full refund or rescheduling for the next available day. Cancellation rates are highest during winter mornings (fog) and late spring (chergui desert winds). Schedule your flight early in your trip to allow a backup day.',
  },
  {
    question: 'Can children fly in a hot air balloon in Morocco?',
    answer:
      'Most operators accept children aged 6 and older who are at least 1.10 m tall (tall enough to see over the basket rim). Some operators set the minimum at age 8. Discounted rates for children under 12 are common. Pregnant women are generally not permitted to fly.',
  },
  {
    question: 'What should I wear on the balloon ride?',
    answer:
      'Wear layers for cool predawn temperatures (8 to 15 degrees Celsius) that warm rapidly at sunrise. Flat, closed-toe shoes are essential for the landing. Avoid high heels, sandals, and loose scarves that could catch on the burner hardware. Bring sunglasses and a hat for the post-flight breakfast.',
  },
  {
    question: 'When is the best season for balloon flights?',
    answer:
      'October through April offers the clearest skies and calmest morning air around Marrakech. Snow-capped Atlas Mountains during these months create spectacular backdrops. Summer flights are possible but start very early, and haze can reduce visibility. The peak cancellation window is late May to early June due to chergui winds.',
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'Advance booking is strongly recommended. Most operators fly once per day with 8 to 20 spots. During October to March peak season, book 3 to 5 days ahead. For Christmas, New Year, and Easter holidays, book at least 2 weeks in advance. Walk-up availability is rare.',
  },
];

/* ===================================================================
   DATA: RELATED GUIDES
   =================================================================== */

const relatedGuides = [
  {
    title: 'Atlas Mountains Guide',
    href: '/atlas-mountains',
    icon: Mountain,
    description: 'Trekking, day trips, and overnight stays in the High Atlas range you see from the balloon.',
  },
  {
    title: 'Marrakech City Guide',
    href: '/marrakech',
    icon: MapPin,
    description: 'What to do after your sunrise flight: souks, palaces, gardens, and rooftop dining.',
  },
  {
    title: 'Adventure Sports Morocco',
    href: '/morocco-adventure-sports',
    icon: Wind,
    description: 'Paragliding, quad biking, zip lining, and more adrenaline activities across Morocco.',
  },
  {
    title: 'Desert Adventures',
    href: '/desert-adventures',
    icon: Sun,
    description: 'Sahara camel treks, desert camps, and 4x4 excursions beyond the balloon route.',
  },
  {
    title: 'Photography Guide',
    href: '/photography',
    icon: Camera,
    description: 'Tips for capturing Morocco at its best, from medina streets to mountain panoramas.',
  },
  {
    title: 'Best Time to Visit',
    href: '/best-time-visit-morocco',
    icon: Calendar,
    description: 'Month-by-month breakdown of weather, crowds, and prices across Morocco.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoHotAirBalloonPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* -- Breadcrumbs -- */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface-muted)] border-b border-[var(--border-color)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-[var(--text-primary)] font-medium">Hot Air Balloon Morocco</li>
          </ol>
        </div>
      </nav>

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center moroccan-pattern">
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10 text-center py-20">
          <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Wind className="w-4 h-4" />
            Aerial Experience
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] leading-tight mb-6">
            Hot Air Balloon Rides<br />
            <span className="text-[var(--color-accent)]">in Morocco</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-heading)]">
            Float above the Haouz Plain at sunrise, watch snow-capped Atlas peaks turn gold,
            and drift over ancient Berber villages from the basket of a hot air balloon.
            The definitive guide to Marrakech and Morocco balloon flights in 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-[family-name:var(--font-heading)]">
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
              From 1,500 MAD
            </span>
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-4 h-4 text-[var(--color-gold)]" />
              50 to 70 min flight
            </span>
            <span className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm">
              <Sunrise className="w-4 h-4 text-[var(--color-gold)]" />
              Sunrise launch daily
            </span>
          </div>
        </div>
      </section>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Fly a Balloon in Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Morocco is one of the world&apos;s best destinations for hot air ballooning, and Marrakech is the undisputed hub.
          </p>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)] space-y-5">
            <p>
              A hot air balloon flight over Marrakech is consistently rated as the single most memorable experience by visitors to Morocco.
              The combination of factors is hard to match anywhere on earth: you launch into a predawn sky from the rocky Jbilet Hills,
              rise into silence as the city sleeps below, and then watch the High Atlas Mountains — Africa&apos;s second-tallest range —
              ignite in shades of amber and copper as the sun breaks the horizon.
            </p>
            <p>
              Below you, the Haouz Plain stretches in every direction: a patchwork of irrigated wheat fields, olive orchards, and
              clusters of flat-roofed Berber villages that have looked the same for centuries. Camels graze alongside donkeys. Women
              carry water from wells. The only sounds are the occasional roar of the burner and, during the quiet intervals, roosters
              crowing from 500 meters below.
            </p>
            <p>
              The industry in Morocco dates back to 1990 when French aeronaut Maurice Parisot founded Ciel d&apos;Afrique, and today
              several established operators run daily sunrise flights with strong safety records, well-maintained equipment, and
              professional crews. A standard flight costs from 1,500 MAD per person and includes hotel pickup, the flight, and
              breakfast — making it accessible to most travel budgets.
            </p>
          </div>
        </div>
      </section>

      {/* -- Flight Locations -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where Do Balloons Fly in Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four distinct flight zones offer different landscapes, from palm groves and farmland to pre-Saharan desert plateaus.
          </p>

          <div className="space-y-8">
            {flightLocations.map((loc) => {
              const LocIcon = loc.icon;
              return (
                <div key={loc.name} className="card-moroccan overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-[var(--color-accent)] p-6 text-white flex flex-col justify-center">
                      <LocIcon className="w-8 h-8 mb-3" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">{loc.name}</h3>
                      <div className="mt-3 space-y-1.5 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                          <Mountain className="w-3.5 h-3.5 shrink-0" />
                          Altitude: {loc.altitude}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 shrink-0" />
                          {loc.season}
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-3.5 h-3.5 shrink-0" />
                          {loc.price}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="text-sm text-[var(--color-accent)] font-medium mb-2 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Best view: {loc.bestView}
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{loc.description}</p>
                      <div className="text-xs text-[var(--text-muted)] flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5" />
                        Terrain: {loc.terrain}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- What to Expect Timeline -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect: Hour by Hour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A typical Marrakech balloon flight from hotel pickup to return, based on a winter sunrise schedule.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
            <div className="space-y-8">
              {flightTimeline.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.title} className="relative md:pl-16">
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[var(--color-accent)]/10 items-center justify-center hidden md:flex">
                      <StepIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="card-moroccan p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <StepIcon className="w-5 h-5 text-[var(--color-accent)] md:hidden" />
                        <span className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--color-gold)] bg-[var(--color-gold)]/10 px-2.5 py-0.5 rounded-full">
                          {step.time}
                        </span>
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -- Operator Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Comparing Balloon Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Three established operators run daily sunrise flights from Marrakech. Here is how they compare.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting prices per person and may vary by season. Always confirm current rates directly with the operator.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {operators.map((op) => (
              <div key={op.name} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-accent)] p-5 text-white">
                  <Star className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">{op.name}</h3>
                  <div className="text-sm text-white/70 mt-1">
                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                    Founded {op.founded}
                  </div>
                  <div className="text-sm font-medium mt-2 text-white/90">{op.price}</div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[var(--text-muted)] mb-3 space-y-1">
                    <div className="flex items-center gap-2">
                      <Gauge className="w-3.5 h-3.5" />
                      {op.fleet}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5" />
                      {op.capacity}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      {op.duration}
                    </div>
                  </div>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">What&apos;s Included</h4>
                  <div className="space-y-1.5 mb-4">
                    {op.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-[var(--text-muted)] border-t border-[var(--border-color)] pt-3">
                    <ThumbsUp className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    {op.strengths}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Photography Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography from the Basket
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A balloon flight is a once-in-a-trip photo opportunity. These tips will help you make the most of it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Safety & Weather -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety and Weather Cancellations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hot air ballooning in Morocco has an excellent safety record. Understanding how weather affects flights helps you plan with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyPoints.map((point) => {
              const PointIcon = point.icon;
              return (
                <div key={point.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PointIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{point.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-10 max-w-3xl mx-auto zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-[var(--color-accent)]" />
              Cancellation Rates by Season
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Summer (Jun - Aug)</span>
                  <p className="text-[var(--text-muted)]">Low cancellation rate (under 10%). Haze can reduce visibility but rarely grounds flights.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CircleDot className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Autumn (Sep - Nov)</span>
                  <p className="text-[var(--text-muted)]">Very low cancellation rate (under 5%). The best and most reliable flying season.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CloudSun className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Winter (Dec - Feb)</span>
                  <p className="text-[var(--text-muted)]">Moderate cancellation rate (15 to 20%). Morning fog and cold inversions delay or cancel flights.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wind className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Spring (Mar - May)</span>
                  <p className="text-[var(--text-muted)]">Variable (10 to 25%). Late spring chergui winds from the Sahara cause the highest cancellation rates.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Booking Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips and Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to secure the best flight at the right price, and what to confirm before you pay.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingTips.map((bt) => {
              const BtIcon = bt.icon;
              return (
                <div key={bt.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {bt.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{bt.tip}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-10 zellige-border">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
              Price Comparison at a Glance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-color)]">
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Experience</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Price Range</th>
                    <th className="text-left py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Includes</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--text-secondary)]">
                  <tr className="border-b border-[var(--border-color)]/50">
                    <td className="py-3 pr-4">Group sunrise flight (12-20 pax)</td>
                    <td className="py-3 pr-4">From 1,500 MAD</td>
                    <td className="py-3">Pickup, flight, breakfast, certificate</td>
                  </tr>
                  <tr className="border-b border-[var(--border-color)]/50">
                    <td className="py-3 pr-4">Small-group flight (8-12 pax)</td>
                    <td className="py-3 pr-4">From 2,000 MAD</td>
                    <td className="py-3">Pickup, flight, premium breakfast, certificate</td>
                  </tr>
                  <tr className="border-b border-[var(--border-color)]/50">
                    <td className="py-3 pr-4">Private flight for 2</td>
                    <td className="py-3 pr-4">From 8,000 MAD total</td>
                    <td className="py-3">Exclusive basket, champagne, gourmet breakfast</td>
                  </tr>
                  <tr className="border-b border-[var(--border-color)]/50">
                    <td className="py-3 pr-4">Ouarzazate desert flight</td>
                    <td className="py-3 pr-4">From 2,500 MAD</td>
                    <td className="py-3">Pickup from Ouarzazate, flight, breakfast</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Child rate (ages 6-12)</td>
                    <td className="py-3 pr-4">From 1,000 MAD</td>
                    <td className="py-3">Same as adult package</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* -- Best Time to Fly -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time of Year for Balloon Flights
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Month-by-month conditions and what each season brings to your flight experience.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CircleDot className="w-5 h-5 text-[var(--color-gold)]" />
                Peak Season: October to December
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The finest flying conditions of the year. Morning air is calm and crystal clear after the summer haze lifts.
                Temperatures at launch are comfortable (12 to 18 degrees). The Atlas Mountains start collecting fresh snowfall
                by November, creating striking white peaks against blue sky. Cancellation rates are at their lowest. This is
                also peak tourist season for Marrakech, so book well ahead.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CloudSun className="w-5 h-5 text-[var(--color-gold)]" />
                Winter: January to February
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Good flying conditions on clear mornings, but fog and cold inversions can cause cancellations (15 to 20 percent of flights).
                When flights do operate, the scenery is spectacular: deep snowpack on the Atlas, brilliant blue skies, and the green
                of winter wheat covering the Haouz Plain. Morning temperatures drop to 5 to 10 degrees, so dress warmly. The later
                sunrise (7:00 AM) means a more civilized hotel pickup around 5:30 AM.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sunrise className="w-5 h-5 text-[var(--color-gold)]" />
                Spring: March to May
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                March and April deliver beautiful conditions with wildflowers covering the plain and snow still on the mountains.
                Late April and May bring increasing risk of chergui winds — hot, dry winds from the Sahara that reduce visibility
                and increase wind speeds. Late May has the highest cancellation rate of the year. If flying in spring, book for
                March or early April.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                Summer: June to September
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Flights operate but with very early pickups (4:30 AM for a 6:00 AM launch) because calm air exists only briefly after
                dawn. By 8:00 AM, thermal activity makes flying unsafe. Summer haze reduces visibility, and the Atlas Mountains lose
                their snow, making the panorama less dramatic. On the plus side, demand is lower and last-minute bookings are easier.
                Avoid July and August if clear mountain views are a priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about hot air balloon rides in Morocco.
          </p>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco adventure with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{guide.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] mt-2">
                        Read guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Wind className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Fly Over Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            A sunrise balloon flight over Marrakech is one of those rare experiences that exceeds the photographs.
            The silence at altitude, the scale of the Atlas Mountains, and the golden light on ancient Berber villages
            stay with you long after you land. Book early in your trip, bring a charged camera, and prepare
            for a morning that redefines your perspective on Morocco.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-[family-name:var(--font-heading)] font-medium"
            >
              <MapPin className="w-4 h-4" />
              Explore Marrakech
            </Link>
            <Link
              href="/morocco-adventure-sports"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-medium"
            >
              <Wind className="w-4 h-4" />
              More Aerial Adventures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
