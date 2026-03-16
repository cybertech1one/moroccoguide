import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  Mountain,
  Sun,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Shield,
  Compass,
  Users,
  Clock,
  Camera,
  Eye,
  Star,
  Info,
  Lightbulb,
  ArrowRight,
  Sparkles,
  CloudSun,
  Sunrise,
  CircleDot,
  Gauge,
  Plane,
  Zap,
  Target,
  TreePine,
  Glasses,
  BookOpen,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Hot Air Balloon & Aerial Activities in Morocco 2025-2026 | Marrakech Balloon Rides, Paragliding, Zip Lining',
  description:
    'Complete guide to hot air balloon rides and aerial activities in Morocco. Marrakech balloon flights over the Palmeraie and Atlas foothills, paragliding in Aguergour and Ifrane, zip lining at Terres d\'Amanar, helicopter tours, skydiving, aerial photography tips, prices, and booking advice for 2025-2026.',
  keywords: [
    'hot air balloon Morocco',
    'Marrakech balloon ride',
    'Morocco aerial activities',
    'paragliding Morocco',
    'Aguergour paragliding',
    'Ifrane paragliding',
    'zip lining Morocco',
    'Terres d\'Amanar adventure park',
    'helicopter tour Marrakech',
    'Atlas Mountains helicopter',
    'skydiving Morocco',
    'Morocco balloon flight',
    'Palmeraie balloon ride',
    'Marrakech sunrise balloon',
    'Morocco adventure activities',
    'aerial photography Morocco',
    'tandem paragliding Morocco',
    'canyon zip line Morocco',
    'Morocco balloon price',
    'Morocco flight experience',
    'Berber breakfast balloon',
    'Morocco adventure sports',
    'Marrakech excursions',
    'Morocco outdoor activities',
  ],
  openGraph: {
    title: 'Hot Air Balloon & Aerial Activities in Morocco 2025-2026 | Complete Guide | CityGuide',
    description:
      'Everything you need to know about hot air balloon rides and aerial activities in Morocco. Sunrise flights over Marrakech, paragliding, zip lining, helicopter tours, and aerial photography tips.',
    url: 'https://citytoursmorocco.com/hot-air-balloon',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Hot air balloon floating above the Palmeraie at sunrise near Marrakech, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Air Balloon & Aerial Activities in Morocco | Complete Guide',
    description:
      'Marrakech balloon flights, paragliding, zip lining, helicopter tours, and aerial photography tips for Morocco.',
    images: [
      '/images/hero-marrakech.webp',
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/hot-air-balloon' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Hot Air Balloon & Aerial Activities in Morocco',
  description:
    'Complete guide to hot air balloon rides, paragliding, zip lining, helicopter tours, and aerial activities across Morocco.',
  url: 'https://citytoursmorocco.com/hot-air-balloon',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.6295,
    longitude: -7.9811,
    name: 'Marrakech, Morocco',
  },
  touristType: [
    'Adventure Travelers',
    'Aerial Sports Enthusiasts',
    'Photography Lovers',
    'Couples & Honeymooners',
    'Family Travelers',
  ],
};

/* ===================================================================
   HOT AIR BALLOON DATA
   =================================================================== */

interface BalloonExperience {
  name: string;
  location: string;
  description: string;
  departureTime: string;
  flightDuration: string;
  totalDuration: string;
  price: string;
  includes: string[];
  highlights: string[];
  bestSeason: string;
  image: string;
}

const balloonExperiences: BalloonExperience[] = [
  {
    name: 'Classic Sunrise Balloon Over Marrakech',
    location: 'Palmeraie & Atlas Foothills',
    description:
      'The signature Moroccan balloon experience begins with a pre-dawn pickup from your riad or hotel near Jemaa el-Fnaa, departing around 5:30 AM. You drive 20-30 minutes to the launch site on the edge of the Palmeraie, a vast palm grove that stretches north of the city. As the balloon inflates against the first light of dawn, the Atlas Mountains materialize on the southern horizon in shades of purple and gold. The one-hour flight drifts silently over thousands of date palms, traditional Berber villages with their flat-roofed earthen homes, patchwork farmland irrigated by ancient khettara channels, and the foothills of the High Atlas. On clear mornings, you can see from the minarets of Marrakech to the snow-capped peak of Jebel Toubkal. After landing, a traditional Berber breakfast is served on carpets in a palm grove or at a nearby farmstead, featuring fresh mint tea, msemen flatbread, amlou dip, local honey, seasonal fruit, and freshly baked bread from a wood-fired oven.',
    departureTime: '5:30 AM pickup (earlier in summer)',
    flightDuration: 'Approximately 1 hour',
    totalDuration: '4-5 hours (including transfers and breakfast)',
    price: '1,500-2,500 MAD per person',
    includes: [
      'Hotel/riad pickup and return in Marrakech',
      'Pre-flight mint tea and pastries at launch site',
      'One-hour balloon flight with certified pilot',
      'Traditional Berber breakfast after landing',
      'Flight certificate and commemorative photo',
      'Insurance coverage for the flight',
    ],
    highlights: [
      'Sunrise over the Atlas Mountains',
      'Aerial view of the vast Palmeraie palm grove',
      'Berber villages and ancient irrigation channels',
      'Snow-capped Toubkal on clear mornings',
      'Traditional Berber breakfast on carpets',
      'Total silence at 1,000+ meters altitude',
    ],
    bestSeason: 'October-April (calm winds, clear skies)',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Premium Private Balloon Experience',
    location: 'Palmeraie & Agafay Desert',
    description:
      'For couples, proposals, or special celebrations, several operators offer exclusive private balloon flights with just you and the pilot in a smaller basket. The route is customizable and often extends further south toward the Agafay stone desert, where the lunar landscape of grey rock and dry riverbeds contrasts dramatically with the green Palmeraie. The premium experience includes champagne at altitude, a dedicated photographer who captures the entire experience from the ground with telephoto lenses and a drone (where permitted), and a gourmet Moroccan breakfast served in a private tent with silver service. Some operators also offer engagement packages with rose petals, custom banners visible from the air, and coordination with your travel party on the ground.',
    departureTime: '5:00 AM pickup (private timing available)',
    flightDuration: '1-1.5 hours',
    totalDuration: '5-6 hours (including luxury breakfast)',
    price: '8,000-15,000 MAD for exclusive basket (2 passengers)',
    includes: [
      'Private luxury vehicle transfer',
      'Exclusive balloon basket (pilot + 2 passengers only)',
      'Champagne service at altitude',
      'Professional photographer (ground and drone)',
      'Gourmet Moroccan breakfast in private tent',
      'High-resolution digital photo album delivered same day',
      'Personalized flight certificate with calligraphy',
    ],
    highlights: [
      'Complete privacy in the basket',
      'Extended flight route toward Agafay Desert',
      'Champagne at sunrise above the clouds',
      'Professional photography package included',
      'Proposal and celebration packages available',
      'Gourmet breakfast with silver service',
    ],
    bestSeason: 'October-April (premium dates book 2-4 weeks ahead)',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Atlas Mountain Balloon Flight',
    location: 'Northern Atlas Foothills',
    description:
      'A less common but increasingly popular option that launches from the northern foothills of the High Atlas, south of Marrakech toward the Ourika Valley direction. This flight offers a more dramatic mountainous landscape, drifting over terraced Berber villages clinging to hillsides, deep river valleys carved through red rock, and almond and olive groves that carpet the lower slopes. In spring, the ground is a tapestry of wildflowers. The flight path and altitude depend entirely on wind conditions, but on ideal days, you may drift to altitudes of 2,000 meters or more with the Atlas peaks at eye level. This experience is offered by fewer operators and has a higher cancellation rate due to mountain wind patterns, but on the days it flies, it is considered one of the finest balloon experiences in North Africa.',
    departureTime: '5:00-5:30 AM pickup',
    flightDuration: '45 minutes-1.5 hours (wind dependent)',
    totalDuration: '5-6 hours (longer transfer time)',
    price: '2,000-3,500 MAD per person',
    includes: [
      'Transfer from Marrakech (longer drive to mountain launch)',
      'Mountain sunrise balloon flight',
      'Berber breakfast at a hillside village',
      'Guided walk through a traditional village',
      'Flight certificate',
    ],
    highlights: [
      'Terraced Berber villages from above',
      'Atlas peaks at eye level on good days',
      'Spring wildflower carpets visible from altitude',
      'Far fewer tourists than Palmeraie flights',
      'Authentic mountain village breakfast',
      'Deep river valley overflights',
    ],
    bestSeason: 'March-May, October-November (narrow wind window)',
    image: '/images/hero-atlas.webp',
  },
];

/* ===================================================================
   PARAGLIDING DATA
   =================================================================== */

interface ParaglidingSite {
  name: string;
  location: string;
  description: string;
  altitude: string;
  flightDuration: string;
  price: string;
  difficulty: string;
  highlights: string[];
  bestSeason: string;
  requirements: string[];
}

const paraglidingSites: ParaglidingSite[] = [
  {
    name: 'Aguergour',
    location: 'Near Marrakech (45 minutes south)',
    description:
      'The most accessible paragliding site from Marrakech, situated on a ridge in the foothills of the High Atlas at around 1,200 meters. Aguergour is the primary tandem site for tourists visiting Marrakech who want to experience paragliding without prior training. The launch site overlooks a wide valley with terraced farmland, scattered Berber villages, and the Haouz plain stretching north toward Marrakech. On clear days, the city is visible in the distance with the minaret of the Koutoubia Mosque catching the light. Tandem flights with a certified instructor are the norm here, and no previous experience is required. The thermal conditions are generally reliable from mid-morning onward, with gentle valley breezes creating smooth lift that even nervous first-timers find comfortable. The flight descends to a landing zone in the valley floor, where a vehicle meets you for the drive back.',
    altitude: '1,200m launch, 600m landing (600m altitude difference)',
    flightDuration: '15-30 minutes (thermal dependent)',
    price: '1,000-1,500 MAD per person (tandem)',
    difficulty: 'Beginner-friendly (tandem with instructor)',
    highlights: [
      'Closest paragliding to Marrakech (45-min transfer)',
      'Atlas Mountain panorama during flight',
      'View of Marrakech and the Haouz plain',
      'Smooth thermals suitable for first-timers',
      'Professional tandem instructors with GoPro footage',
      'Berber village overflights during descent',
    ],
    bestSeason: 'Year-round (best October-May)',
    requirements: [
      'No experience needed for tandem flights',
      'Weight limit: typically 30-110 kg',
      'Closed sturdy shoes required (no sandals)',
      'Minimum age: 12 years (with parental consent)',
    ],
  },
  {
    name: 'Ifrane & Middle Atlas',
    location: 'Middle Atlas Mountains (near Fes)',
    description:
      'The cedar forests and lakes of the Middle Atlas around Ifrane and Azrou provide a dramatically different paragliding landscape compared to the arid foothills near Marrakech. Known as the "Switzerland of Morocco" for its alpine meadows, ski chalets, and dense cedar forests, this region offers scenic paragliding flights over a green landscape that many visitors do not associate with Morocco. Launch sites are typically on the ridges above Ifrane at around 1,800-2,000 meters, providing long flight times as the thermals carry you over Lake Dayet Aoua, ancient cedar groves (home to Barbary macaques), and the pastoral valleys where Amazigh shepherds tend their flocks. This area is less developed for tourism than Marrakech, and flights here often feel like a genuine discovery. Several local clubs and instructors offer tandem flights, though advance booking is essential as this is not a daily operation.',
    altitude: '1,800-2,000m launch, 1,200m landing',
    flightDuration: '20-45 minutes (excellent thermals in spring/summer)',
    price: '800-1,200 MAD per person (tandem)',
    difficulty: 'Beginner-friendly (tandem) to intermediate (solo)',
    highlights: [
      'Flights over cedar forests and alpine lakes',
      'Barbary macaque habitat visible from the air',
      'Green pastoral landscape unlike typical Morocco',
      'Longer flight times due to strong thermals',
      'Less crowded than Marrakech-area sites',
      'Combination possible with Fes day trip',
    ],
    bestSeason: 'April-October (best thermals June-September)',
    requirements: [
      'No experience needed for tandem flights',
      'Weight limit: typically 30-110 kg',
      'Warm layers recommended (higher altitude)',
      'Advance booking essential (not daily flights)',
    ],
  },
  {
    name: 'Dakhla (Atlantic Coast)',
    location: 'Southern Morocco / Western Sahara coast',
    description:
      'Dakhla, the remote kitesurfing capital on Morocco\'s southern Atlantic coast, has emerged as an unexpected paragliding destination thanks to its consistent coastal winds and stunning lagoon landscapes. Flights here launch from the cliffs above the peninsula and drift along the coastline with views of the turquoise lagoon on one side and the open Atlantic on the other. The contrast between the golden desert sand, the azure water, and the white salt flats creates an aerial palette unlike anywhere else in Morocco. This is a more adventurous option requiring a flight or long drive to reach Dakhla, but for paragliding enthusiasts, the unique coastal desert flying conditions are worth the journey.',
    altitude: '100-200m coastal cliffs',
    flightDuration: '10-25 minutes (wind dependent)',
    price: '700-1,000 MAD per person (tandem)',
    difficulty: 'Intermediate (coastal wind conditions require experience for solo)',
    highlights: [
      'Coastal flying over turquoise lagoon',
      'Desert-meets-ocean aerial scenery',
      'Consistent Atlantic wind conditions',
      'Combine with kitesurfing and water sports',
      'Remote and uncrowded flying site',
      'Spectacular sunset flights available',
    ],
    bestSeason: 'Year-round (strongest winds February-August)',
    requirements: [
      'Tandem available for beginners',
      'Solo pilots need coastal flying experience',
      'Wind can be strong; prepare for dynamic conditions',
      'Advance arrangements required (limited operators)',
    ],
  },
];

/* ===================================================================
   ZIP LINE & ADVENTURE PARK DATA
   =================================================================== */

interface ZipLineVenue {
  name: string;
  location: string;
  description: string;
  courses: {
    name: string;
    description: string;
    duration: string;
    price: string;
    minAge: string;
    difficulty: string;
  }[];
  facilities: string[];
  gettingThere: string;
  bestFor: string;
}

const zipLineVenues: ZipLineVenue[] = [
  {
    name: 'Terres d\'Amanar',
    location: 'Route de l\'Ourika Km 27, Atlas Foothills',
    description:
      'The premier adventure park in Morocco, set within a 12-hectare forest of pine, olive, and carob trees in the Atlas foothills, just one hour from Marrakech. Terres d\'Amanar combines genuine adventure activities with environmental responsibility and cultural authenticity. The park was designed to work with the natural terrain rather than against it, threading zip lines between ancient trees, building climbing routes up natural rock faces, and creating rope courses that follow the contours of the hillside. Beyond the adventure activities, the park offers Berber cooking workshops, traditional bread baking, horseback riding, mountain biking trails, and archery. Accommodation is available in treehouse cabins and Berber tents for those who want an overnight adventure. The park is a popular day trip from Marrakech and works well for families, corporate groups, school trips, and anyone who wants to combine physical adventure with a taste of Atlas Mountain culture.',
    courses: [
      {
        name: 'Discovery Course (Parcours Decouverte)',
        description: 'An introductory tree-top adventure course with low-height platforms, short zip lines, rope bridges, and balance beams. Designed for children and first-timers to build confidence in a safe environment with continuous safety lines.',
        duration: '1-1.5 hours',
        price: '250-350 MAD per person',
        minAge: '5 years',
        difficulty: 'Easy',
      },
      {
        name: 'Adventure Course (Parcours Aventure)',
        description: 'The intermediate course takes you higher into the tree canopy with longer zip lines spanning between platforms, Tarzan swings, hanging bridges, cargo nets, and a Via Ferrata-style rock traverse. The longest zip line on this course crosses a small canyon.',
        duration: '2-2.5 hours',
        price: '400-500 MAD per person',
        minAge: '10 years',
        difficulty: 'Moderate',
      },
      {
        name: 'Extreme Course (Parcours Extreme)',
        description: 'The most challenging course features the park\'s longest and highest zip lines, including a 200-meter canyon crossing at significant height. Elements include a free-fall jump, a giant swing, and technical traverses that require upper body strength and a head for heights. This course is genuinely thrilling and not for the faint-hearted.',
        duration: '2.5-3 hours',
        price: '500-600 MAD per person',
        minAge: '14 years',
        difficulty: 'Challenging',
      },
      {
        name: 'Canyon Zip Line Experience',
        description: 'A standalone experience focused purely on the park\'s signature canyon zip lines. You complete a series of progressively longer and higher zip lines that cross back and forth across a forested canyon, culminating in the park\'s longest line. This is the best option for visitors short on time who want the maximum zip line thrill.',
        duration: '1-1.5 hours',
        price: '300-400 MAD per person',
        minAge: '10 years',
        difficulty: 'Moderate',
      },
    ],
    facilities: [
      'On-site restaurant serving traditional Berber cuisine',
      'Equipment rental included in all course prices',
      'Certified instructors and continuous safety systems',
      'Changing rooms and lockers',
      'Parking for cars and tour buses',
      'Overnight accommodation in treehouses and Berber tents',
      'Mountain bike rental and guided trail rides',
      'Horseback riding and pony rides for children',
    ],
    gettingThere: 'Located on the Route de l\'Ourika, 27 km south of Marrakech. The drive takes approximately 45 minutes. Most Marrakech hotels can arrange transport. Grand taxis from Marrakech to the park cost around 150-200 MAD each way. Tour operators include transfer in day-trip packages.',
    bestFor: 'Families, adventure seekers, corporate team-building, half-day excursion from Marrakech',
  },
  {
    name: 'Zip Line at Ouzoud Waterfalls',
    location: 'Ouzoud, Middle Atlas (150 km from Marrakech)',
    description:
      'A zip line experience set against the backdrop of the magnificent Ouzoud Waterfalls, the highest waterfalls in North Africa at 110 meters. The zip line course runs across the gorge near the falls, offering riders a unique vantage point with the spray of the cascade and the rainbow it creates on sunny mornings. This is not a full adventure park but rather a single zip line attraction operated by local guides near the waterfall. The experience is more raw and less polished than Terres d\'Amanar, but the setting is incomparable. Combine it with the waterfall walk, boat ride at the base, and the Barbary macaques that inhabit the surrounding olive groves for a full day trip from Marrakech.',
    courses: [
      {
        name: 'Gorge Crossing Zip Line',
        description: 'A single zip line that crosses the gorge near Ouzoud Waterfalls, offering spectacular views of the cascading water and the lush valley below. The ride is short but the setting makes it memorable.',
        duration: '15-20 minutes (including setup)',
        price: '100-200 MAD per person',
        minAge: '8 years',
        difficulty: 'Easy',
      },
    ],
    facilities: [
      'Basic safety equipment provided',
      'Local guides at the launch point',
      'Restaurants and cafes at Ouzoud village',
      'Natural swimming pool at the base of the falls',
    ],
    gettingThere: 'Ouzoud is approximately 150 km northeast of Marrakech (2.5-hour drive). Day trips from Marrakech are widely available for 200-400 MAD per person including transport. Grand taxis from Azilal serve the village.',
    bestFor: 'Day-trippers from Marrakech, waterfall enthusiasts, families',
  },
];

/* ===================================================================
   SKYDIVING DATA
   =================================================================== */

interface SkydivingInfo {
  name: string;
  location: string;
  description: string;
  altitude: string;
  freefallTime: string;
  totalFlightTime: string;
  price: string;
  includes: string[];
  requirements: string[];
  availability: string;
}

const skydivingOptions: SkydivingInfo[] = [
  {
    name: 'Tandem Skydive Over Marrakech',
    location: 'Marrakech (airfield near Ben Guerir or Beni Mellal)',
    description:
      'Tandem skydiving is available near Marrakech through operators who typically use small airfields in the region around Ben Guerir (about 70 km north) or Beni Mellal (about 200 km east). The experience involves a brief ground training session, a scenic aircraft ascent to 3,000-4,000 meters, and a tandem freefall strapped to a certified instructor. During the freefall, which lasts approximately 30-60 seconds at speeds reaching 200 km/h, you may be able to glimpse the red city of Marrakech to the south and the Atlas Mountains on the horizon. After the parachute deploys, the 5-7 minute canopy ride offers serene panoramic views of the Moroccan countryside. Skydiving in Morocco is not as established as in Europe, and operations can be seasonal or weather-dependent. It is essential to verify that the operator uses certified equipment, licensed instructors with recognized international qualifications (USPA, BPA, or equivalent), and proper aircraft. Some European operators run seasonal pop-up skydiving operations in Morocco during the winter months when European weather is poor.',
    altitude: '3,000-4,000 meters',
    freefallTime: '30-60 seconds',
    totalFlightTime: '6-8 minutes (freefall + canopy)',
    price: '3,000-5,000 MAD per person (tandem)',
    includes: [
      'Ground training and safety briefing',
      'All equipment (harness, goggles, jumpsuit)',
      'Aircraft ascent to jump altitude',
      'Tandem freefall with certified instructor',
      'Parachute canopy ride and landing',
      'Video/photo package (optional, additional 500-1,000 MAD)',
    ],
    requirements: [
      'No experience needed for tandem jumps',
      'Weight limit: typically 90-100 kg',
      'Minimum age: 16-18 years (varies by operator)',
      'Good general health (no heart conditions, recent surgeries)',
      'Closed sturdy shoes required',
      'Sign liability waiver',
    ],
    availability: 'Seasonal (typically October-April). Not all operators run year-round. Book well in advance and confirm dates before travel.',
  },
];

/* ===================================================================
   HELICOPTER TOUR DATA
   =================================================================== */

interface HelicopterTour {
  name: string;
  location: string;
  route: string;
  description: string;
  duration: string;
  price: string;
  capacity: string;
  highlights: string[];
  departsFrom: string;
}

const helicopterTours: HelicopterTour[] = [
  {
    name: 'Marrakech City Aerial Tour',
    location: 'Marrakech',
    route: 'Marrakech Medina, Koutoubia Mosque, Royal Palace, Menara Gardens, Majorelle Quarter',
    description:
      'A scenic helicopter flight over the Red City, providing a unique bird\'s-eye perspective of Morocco\'s most famous city. The flight follows a circuit over the ancient medina, where the labyrinthine streets and riads are revealed in their full geometric complexity from above. You will see the Koutoubia Mosque minaret, the vast open square of Jemaa el-Fnaa, the green oasis of the Menara Gardens with their reflective basin, and the Royal Palace compound. The route extends over the modern Gueliz district and the blue oasis of the Majorelle Garden before circling back. This is one of the most exclusive ways to experience Marrakech and the aerial perspective reveals the city\'s layout and beauty in ways impossible from the ground.',
    duration: '15-20 minutes',
    price: '3,500-5,000 MAD per person (minimum 2 passengers)',
    capacity: '2-5 passengers depending on helicopter type',
    highlights: [
      'Koutoubia Mosque minaret from directly above',
      'Medina\'s geometric labyrinth revealed',
      'Menara Gardens reflective pool',
      'Royal Palace compound',
      'Jemaa el-Fnaa from a perspective no one on the ground has',
    ],
    departsFrom: 'Marrakech Menara Airport or private helipad',
  },
  {
    name: 'Atlas Mountains Scenic Flight',
    location: 'High Atlas Mountains',
    route: 'Marrakech to Ourika Valley, Toubkal Massif, Imlil, Asni, return to Marrakech',
    description:
      'The premier helicopter experience in Morocco takes you from the flatlands of Marrakech deep into the heart of the High Atlas. Within minutes of takeoff, the landscape transforms from urban sprawl to terraced Berber villages perched on impossibly steep mountainsides. The flight passes over the lush Ourika Valley, ascends toward the snow-capped Toubkal Massif (4,167 meters, the highest peak in North Africa), and provides aerial views of the trekking villages of Imlil and Aroumd that would take hours to reach on foot. The scale of the Atlas Mountains is difficult to appreciate from the ground, but from a helicopter, the vast network of ridges, gorges, and valleys unfolds in a panorama that is genuinely awe-inspiring. Some operators offer a landing in a remote mountain meadow for a private picnic or champagne stop before returning to Marrakech.',
    duration: '45 minutes-1.5 hours (route dependent)',
    price: '12,000-25,000 MAD per helicopter (up to 5 passengers)',
    capacity: '3-5 passengers',
    highlights: [
      'Snow-capped Toubkal from eye level',
      'Terraced Berber villages on steep mountainsides',
      'Ourika Valley\'s green ribbon through red rock',
      'Optional mountain meadow landing for picnic',
      'Scale of the Atlas revealed from above',
      'Imlil and trekking trails visible below',
    ],
    departsFrom: 'Marrakech Menara Airport',
  },
  {
    name: 'Agafay Desert & Lalla Takerkoust Lake Flight',
    location: 'Agafay Desert and Lake Lalla Takerkoust',
    route: 'Marrakech to Agafay stone desert, Lalla Takerkoust lake, Atlas foothills, return',
    description:
      'A shorter scenic flight that covers the striking terrain between Marrakech and the Atlas Mountains. The Agafay stone desert, a lunar landscape of grey rock and dry riverbeds just 30 minutes from the city, looks even more otherworldly from the air. The flight continues to Lake Lalla Takerkoust, a large reservoir surrounded by red-earth hills and dotted with small boats and waterside restaurants. The contrast between the barren Agafay, the blue lake, and the green foothills beyond creates a visual journey through three distinct landscapes in under an hour. This is an excellent option for those who want a helicopter experience without the higher cost of the full Atlas mountain tour.',
    duration: '25-35 minutes',
    price: '6,000-10,000 MAD per helicopter (up to 4 passengers)',
    capacity: '2-4 passengers',
    highlights: [
      'Agafay stone desert\'s lunar landscape from above',
      'Lake Lalla Takerkoust\'s vivid blue waters',
      'Contrast of desert, lake, and mountain in one flight',
      'Excellent photography opportunities',
      'More affordable than full Atlas tour',
    ],
    departsFrom: 'Marrakech helipad or Menara Airport',
  },
];

/* ===================================================================
   BOOKING TIPS & SAFETY DATA
   =================================================================== */

const bookingTips = [
  {
    category: 'Balloon Booking Essentials',
    icon: Wind,
    tips: [
      'Book at least 3-5 days in advance during peak season (October-April). Operators fill up quickly, especially around Christmas, New Year, and Moroccan school holidays.',
      'Confirm the cancellation and rebooking policy before paying. Weather-related cancellations should always be free of charge with a full refund or rebooking option.',
      'Ask specifically about basket capacity. Standard shared flights carry 12-20 passengers. Smaller baskets (6-8 passengers) cost more but provide a far better experience with more space to move and photograph.',
      'Check whether the price includes hotel transfer. Most operators include pickup and return to central Marrakech hotels, but riads deep in the medina may require you to walk to a nearby meeting point.',
      'Morning flights only. Hot air balloons require calm, cool air to fly safely. All flights depart at dawn and no reputable operator offers afternoon or evening flights in Marrakech.',
    ],
  },
  {
    category: 'Paragliding & Adventure Booking',
    icon: Compass,
    tips: [
      'For tandem paragliding, verify that the pilot holds a current certification from a recognized federation (USHPA, BHPA, FFVL, or equivalent). Ask to see the certificate if in doubt.',
      'Book zip line and adventure park activities directly through the venue website or at the park entrance. Third-party booking platforms often add 20-30% markup for the same experience.',
      'For skydiving, research the operator thoroughly. Check for international certifications, read recent reviews on multiple platforms, and verify that they use well-maintained equipment and aircraft.',
      'Group discounts are common for adventure parks and zip line courses. Ask about reduced rates for 4+ people when booking Terres d\'Amanar or similar venues.',
      'If you have a medical condition (heart problems, recent surgery, pregnancy, back injuries), disclose this before booking any aerial activity. Operators have medical restrictions that vary by activity.',
    ],
  },
  {
    category: 'Helicopter Tour Considerations',
    icon: Plane,
    tips: [
      'Helicopter tours are priced per aircraft, not per person. Fill all available seats to reduce the per-person cost. A 4-passenger helicopter at 12,000 MAD is 3,000 MAD per person when full.',
      'Weight distribution matters in helicopters. The operator may ask for passenger weights in advance to ensure safe loading. Be honest, as this is a safety requirement.',
      'Front seat next to the pilot offers the best views and photography angles. Some operators charge extra for this seat or assign it by lottery.',
      'Helicopter flights are more weather-resistant than balloons but can still be cancelled for high winds, low visibility, or thunderstorms. Confirm 24 hours before your scheduled flight.',
      'Request a flight path that includes your specific interests. Most operators can customize routes within reason, and mentioning photography priorities helps them plan the best angles.',
    ],
  },
];

/* ===================================================================
   SAFETY GUIDELINES
   =================================================================== */

const safetyGuidelines = [
  {
    category: 'General Aerial Safety',
    icon: Shield,
    tips: [
      'Always use licensed and insured operators. In Morocco, the aviation authority (Direction Generale de l\'Aviation Civile) oversees balloon and helicopter operations. Verify that your operator holds valid permits.',
      'Listen carefully to all safety briefings and follow pilot/instructor instructions at all times. This applies to balloon landing positions, paragliding launch and landing techniques, and zip line body positioning.',
      'Weather conditions determine whether flights proceed. If an operator is willing to fly in conditions that other operators have cancelled for, this is a major red flag. Safety-conscious operators cancel proactively.',
      'Ensure your travel insurance covers adventure sports and aerial activities. Many standard travel insurance policies exclude these activities unless you purchase an add-on or select a comprehensive plan.',
    ],
  },
  {
    category: 'Hot Air Balloon Safety',
    icon: Sunrise,
    tips: [
      'Wear long pants and closed shoes for balloon flights. The burners produce intense heat above your head, and the landing can involve dragging the basket across rough ground.',
      'Hold on firmly to the basket handles during takeoff and landing. The pilot will give specific instructions, typically asking you to face in the direction of travel and bend your knees for landing.',
      'If the basket tips on landing (which can happen in windier conditions), do not jump out. Stay inside and hold on. The basket will right itself or the ground crew will stabilize it.',
      'People with severe fear of heights generally do well in balloons because there is no fixed reference point and the basket feels stable. However, if you have vertigo triggered by looking straight down, be aware that the basket has gaps.',
    ],
  },
  {
    category: 'Paragliding & Zip Line Safety',
    icon: AlertTriangle,
    tips: [
      'For tandem paragliding, the instructor controls everything. Your job is to run during launch (2-3 steps down the slope) and lift your legs for landing. Do exactly as instructed without hesitation.',
      'Zip line harnesses should be double-checked by staff before every line. If you are not satisfied with how a harness fits or a carabiner is attached, speak up immediately.',
      'Do not attempt solo paragliding in Morocco without significant experience and local knowledge. Thermal and wind patterns in the Atlas Mountains can change rapidly and conditions are not always as benign as they appear.',
      'For adventure parks, wear sunscreen and drink water between courses. The Atlas foothills can be hot and dehydration affects your coordination and judgment on high elements.',
    ],
  },
];

/* ===================================================================
   PHOTOGRAPHY FROM THE AIR
   =================================================================== */

const photographyTips = [
  {
    category: 'Camera Equipment',
    icon: Camera,
    tips: [
      'A smartphone with a good camera is sufficient for most aerial experiences. The latest flagship phones produce excellent results in the golden light of sunrise. No need to bring heavy DSLR equipment unless you are a serious photographer.',
      'If using a camera, a wide-angle lens (16-35mm equivalent) captures the sweeping landscape, while a short telephoto (70-200mm) is useful for isolating details like Berber villages or the Koutoubia minaret from a balloon.',
      'Bring a lens cloth. Balloon burners create heat haze, paragliding at altitude is cold (condensation), and helicopter windows can fog. A microfiber cloth ensures clean shots when moments matter.',
      'GoPro or action cameras are ideal for paragliding and zip lining, where you cannot hold a camera. Most tandem paragliding instructors offer GoPro footage of your flight included in the price or for an additional fee.',
    ],
  },
  {
    category: 'Shooting Techniques',
    icon: Eye,
    tips: [
      'In a balloon, the basket sways gently and the light is sublime at sunrise. Shoot in burst mode for landscapes to account for subtle basket movement. The warm golden light lasts for about 30-40 minutes after takeoff.',
      'For aerial photos, shoot at a slightly downward angle rather than straight down. This provides depth and scale to the landscape. Include the balloon edge, basket ropes, or other passengers for context.',
      'Use the rule of thirds actively. The horizon line, the edge of the Palmeraie, or a village nestled in a valley should sit on a composition line rather than dead center.',
      'In helicopters, shoot through the open door (if permitted) or press the lens flat against the window to reduce reflections. Remove any polarizing filters, which create banding patterns on aircraft windows.',
      'Shoot video as well as stills. The gentle drift of a balloon and the speed of a zip line are dynamic experiences that photographs alone cannot capture. Short 15-30 second clips are ideal for social media.',
    ],
  },
  {
    category: 'Best Conditions & Timing',
    icon: Sunrise,
    tips: [
      'Sunrise balloon flights offer the best photography light. The first 20 minutes after takeoff, when the sun is low and the Atlas Mountains are side-lit, produce the most dramatic images.',
      'Clear mornings after rain produce the best visibility. The Atlas Mountains appear razor-sharp and the air has a crystalline quality that enhances color saturation naturally.',
      'For helicopter photography, request a morning flight (before 10 AM) when the light is warm and the air is calm. Afternoon heat creates turbulence and haze that degrades image quality.',
      'Overcast days are not ideal for aerial photography but can produce moody, atmospheric shots. If your balloon flight proceeds on a cloudy morning, focus on the landscape details rather than panoramas.',
    ],
  },
];

/* ===================================================================
   WHAT TO WEAR & BRING DATA
   =================================================================== */

const whatToWear = [
  {
    activity: 'Hot Air Balloon',
    icon: Wind,
    clothing: [
      'Warm layers for pre-dawn pickup (temperatures can be 5-10C at launch time, even in October)',
      'Long pants (mandatory, not shorts, due to burner heat and rough landing terrain)',
      'Closed-toe flat shoes with good grip (no heels, sandals, or flip-flops)',
      'Hat or cap for sun protection after sunrise',
      'Light jacket or fleece that can be removed as the day warms',
    ],
    bring: [
      'Fully charged smartphone or camera',
      'Sunglasses',
      'Sunscreen (the morning sun intensifies at altitude)',
      'Small backpack (no large bags in the basket)',
      'Motion sickness medication if sensitive (rare but possible)',
      'Cash for tips (50-100 MAD for the pilot and ground crew is appreciated)',
    ],
  },
  {
    activity: 'Paragliding',
    icon: Compass,
    clothing: [
      'Long pants and long sleeves (protection for launch and landing)',
      'Closed sturdy shoes with ankle support (hiking boots ideal)',
      'Warm layer for altitude (it is significantly colder at launch elevation)',
      'Nothing loose that can flap or catch on lines (scarves, dangling jewelry)',
      'Hair tied back securely',
    ],
    bring: [
      'GoPro or action camera with chest/wrist mount (optional)',
      'Sunglasses with a secure strap (mandatory at altitude)',
      'Sunscreen applied before the flight',
      'Small water bottle for post-flight',
      'Gloves in winter months (hands get very cold)',
    ],
  },
  {
    activity: 'Zip Line / Adventure Park',
    icon: Zap,
    clothing: [
      'Comfortable athletic clothing that allows full range of motion',
      'Closed-toe shoes with grip (athletic shoes or hiking boots)',
      'No loose clothing, dangling straps, or untucked shirts',
      'Long hair tied back and secured under helmet',
      'Gloves provided by park (or bring cycling gloves for grip)',
    ],
    bring: [
      'Water bottle (essential between courses)',
      'Sunscreen and insect repellent',
      'Small snack for energy between courses',
      'Change of clothes if doing multiple courses',
      'Secure pocket or leave valuables in locker',
    ],
  },
];

/* ===================================================================
   COMPARISON TABLE DATA
   =================================================================== */

interface ActivityComparison {
  activity: string;
  priceRange: string;
  duration: string;
  difficulty: string;
  bestLocation: string;
  bestSeason: string;
  minAge: string;
  physicalDemand: string;
}

const activityComparison: ActivityComparison[] = [
  {
    activity: 'Hot Air Balloon (Shared)',
    priceRange: '1,500-2,500 MAD',
    duration: '1 hour flight (4-5 hrs total)',
    difficulty: 'Easy (no fitness required)',
    bestLocation: 'Marrakech Palmeraie',
    bestSeason: 'October-April',
    minAge: '6 years',
    physicalDemand: 'Low',
  },
  {
    activity: 'Hot Air Balloon (Private)',
    priceRange: '8,000-15,000 MAD',
    duration: '1-1.5 hr flight (5-6 hrs total)',
    difficulty: 'Easy',
    bestLocation: 'Marrakech / Agafay',
    bestSeason: 'October-April',
    minAge: '6 years',
    physicalDemand: 'Low',
  },
  {
    activity: 'Tandem Paragliding',
    priceRange: '800-1,500 MAD',
    duration: '15-45 min flight',
    difficulty: 'Easy (tandem)',
    bestLocation: 'Aguergour (Marrakech)',
    bestSeason: 'Year-round',
    minAge: '12 years',
    physicalDemand: 'Low-Medium',
  },
  {
    activity: 'Zip Lining (Discovery)',
    priceRange: '250-350 MAD',
    duration: '1-1.5 hours',
    difficulty: 'Easy',
    bestLocation: 'Terres d\'Amanar',
    bestSeason: 'Year-round',
    minAge: '5 years',
    physicalDemand: 'Low',
  },
  {
    activity: 'Zip Lining (Extreme)',
    priceRange: '500-600 MAD',
    duration: '2.5-3 hours',
    difficulty: 'Challenging',
    bestLocation: 'Terres d\'Amanar',
    bestSeason: 'Year-round',
    minAge: '14 years',
    physicalDemand: 'High',
  },
  {
    activity: 'Tandem Skydiving',
    priceRange: '3,000-5,000 MAD',
    duration: '6-8 min flight',
    difficulty: 'Moderate (adrenaline)',
    bestLocation: 'Near Marrakech',
    bestSeason: 'October-April',
    minAge: '16-18 years',
    physicalDemand: 'Low-Medium',
  },
  {
    activity: 'Helicopter City Tour',
    priceRange: '3,500-5,000 MAD/person',
    duration: '15-20 minutes',
    difficulty: 'Easy',
    bestLocation: 'Marrakech',
    bestSeason: 'Year-round',
    minAge: 'No minimum',
    physicalDemand: 'None',
  },
  {
    activity: 'Helicopter Atlas Tour',
    priceRange: '12,000-25,000 MAD/heli',
    duration: '45 min-1.5 hours',
    difficulty: 'Easy',
    bestLocation: 'Marrakech to Toubkal',
    bestSeason: 'Year-round',
    minAge: 'No minimum',
    physicalDemand: 'None',
  },
];

/* ===================================================================
   COMPONENT: PAGE
   =================================================================== */

export default function HotAirBalloonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Hot air balloon floating above the Palmeraie at sunrise near Marrakech, Morocco"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />

        <div className="container-morocco relative z-10 pb-16 pt-32">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Hot Air Balloon & Aerial Activities</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium">
                <Wind className="w-4 h-4 text-[var(--color-accent)]" />
                Aerial Adventures
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium">
                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                Updated 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-[1.1]">
              Hot Air Balloon
              <span className="block text-[var(--color-accent)]">& Aerial Activities</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
              Rise above the ochre landscapes of Morocco at dawn, drifting silently over the vast
              Palmeraie as the Atlas Mountains catch the first golden light. From sunrise balloon
              flights and Atlas paragliding to canyon zip lines and helicopter tours, discover
              Morocco from an extraordinary perspective.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#balloon-rides" className="btn-primary btn-lg">
                Balloon Rides
                <Wind className="w-5 h-5" />
              </a>
              <a href="#comparison" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Compare Activities
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Stats Bar ─── */}
      <section className="relative z-10 -mt-8">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Wind, label: 'Balloon Flights', value: 'From 1,500 MAD' },
              { icon: Compass, label: 'Paragliding', value: 'From 800 MAD' },
              { icon: Zap, label: 'Zip Lining', value: 'From 250 MAD' },
              { icon: Plane, label: 'Helicopter Tours', value: 'From 3,500 MAD' },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-4 text-center">
                <stat.icon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</p>
                <p className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-16 md:py-24 section-light">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
                <Sunrise className="w-4 h-4" />
                See Morocco from Above
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                Why Morocco is Perfect for Aerial Adventures
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                Morocco&apos;s extraordinary landscape diversity, from the rolling dunes of the Sahara and
                the snow-capped peaks of the High Atlas to the vast palm groves around Marrakech and
                the turquoise Atlantic coastline, makes it one of the most visually stunning countries
                in the world to experience from the air. The warm, stable air of the Moroccan dawn
                creates ideal conditions for hot air ballooning, while the Atlas Mountains generate
                reliable thermal currents for paragliding. The year-round sunshine and dramatic terrain
                provide a backdrop for aerial activities that rivals the best in the world.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                The most popular aerial experience is the sunrise hot air balloon flight from Marrakech,
                where you drift over the Palmeraie, a vast palm grove of over 100,000 date palms, with
                the entire Atlas Mountain chain as your backdrop. But Morocco&apos;s aerial adventure scene
                extends far beyond balloons. Tandem paragliding in the Atlas foothills, zip lining through
                canyon forests at Terres d&apos;Amanar, helicopter tours over Jebel Toubkal, and even
                tandem skydiving are all available to visitors with varying levels of adventure appetite.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                This guide covers every aerial activity available in Morocco, with detailed information
                on prices, operators, what to expect, safety considerations, booking advice, and
                photography tips to help you capture the experience. Whether you are looking for a
                romantic sunrise balloon flight with your partner, a family-friendly zip line adventure,
                or an adrenaline-pumping tandem skydive, Morocco has an aerial experience to match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Hot Air Balloon Rides ─── */}
      <section id="balloon-rides" className="py-16 md:py-24 section-cream">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Wind className="w-4 h-4" />
              Signature Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hot Air Balloon Rides in Marrakech
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The most iconic aerial experience in Morocco. Rise with the sun over the Palmeraie
              and Atlas Mountains for an unforgettable morning above the Red City.
            </p>
          </div>

          {/* Balloon Experience Cards */}
          <div className="space-y-12">
            {balloonExperiences.map((balloon, index) => (
              <div
                key={balloon.name}
                className="glass rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative min-h-[300px]">
                    <img
                      src={balloon.image}
                      alt={balloon.name}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider">
                        <Star className="w-3 h-3" />
                        {index === 0 ? 'Most Popular' : index === 1 ? 'Premium' : 'Adventurous'}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-6 md:p-8">
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {balloon.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-4">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                      {balloon.location}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {balloon.description}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                        <Clock className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                        <p className="text-xs text-[var(--text-muted)]">Flight Time</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{balloon.flightDuration}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                        <DollarSign className="w-4 h-4 text-[var(--color-green)] mb-1" />
                        <p className="text-xs text-[var(--text-muted)]">Price</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{balloon.price}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                        <Calendar className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                        <p className="text-xs text-[var(--text-muted)]">Best Season</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{balloon.bestSeason}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        What&apos;s Included
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {balloon.includes.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                            <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {balloon.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent-50)] text-xs text-[var(--color-accent)] font-medium"
                          >
                            <Sparkles className="w-3 h-3" />
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Balloon Practical Details */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Typical Balloon Morning Timeline
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { time: '5:00-5:30 AM', event: 'Hotel/riad pickup in Marrakech', detail: 'Dress warmly; pre-dawn temperatures can be surprisingly cold' },
                  { time: '5:45-6:00 AM', event: 'Arrive at launch site', detail: 'Mint tea and pastries while the balloon inflates' },
                  { time: '6:15-6:30 AM', event: 'Balloon launch', detail: 'The balloon lifts off as the sky turns gold and pink' },
                  { time: '6:30-7:30 AM', event: 'One-hour flight', detail: 'Drift over the Palmeraie, villages, and Atlas foothills' },
                  { time: '7:30-7:45 AM', event: 'Landing', detail: 'Ground crew meets you; hold on during the final descent' },
                  { time: '8:00-9:00 AM', event: 'Berber breakfast', detail: 'Traditional spread served on carpets in a palm grove' },
                  { time: '9:00-9:30 AM', event: 'Return to hotel', detail: 'Back in Marrakech by late morning with the whole day ahead' },
                ].map((step) => (
                  <div key={step.time} className="flex gap-4">
                    <div className="text-sm font-bold text-[var(--color-accent)] whitespace-nowrap min-w-[100px]">
                      {step.time}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{step.event}</p>
                      <p className="text-xs text-[var(--text-muted)]">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                  <CloudSun className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Best Season & Weather
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  {
                    season: 'October-December',
                    rating: 5,
                    detail: 'Peak balloon season. Calm winds, clear skies, cool mornings. The Atlas is often snow-capped, creating dramatic backdrops. Book 1-2 weeks ahead.',
                  },
                  {
                    season: 'January-March',
                    rating: 4,
                    detail: 'Excellent conditions with lower tourist numbers. January mornings can be quite cold (5-8C at altitude). Some rain days cause cancellations but clear mornings are superb.',
                  },
                  {
                    season: 'April-May',
                    rating: 4,
                    detail: 'Warming temperatures and occasional spring haze. Wildflowers visible on the ground. Wind picks up toward May, increasing cancellation rates slightly.',
                  },
                  {
                    season: 'June-September',
                    rating: 2,
                    detail: 'Summer heat creates thermal turbulence that makes ballooning difficult. Most operators reduce schedules or pause entirely. Early June and late September are borderline.',
                  },
                ].map((s) => (
                  <div key={s.season} className="p-4 rounded-lg bg-[var(--color-surface)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-[var(--text-primary)]">{s.season}</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${i < s.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Paragliding Section ─── */}
      <section id="paragliding" className="py-16 md:py-24 section-light">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Compass className="w-4 h-4" />
              Soaring Adventures
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Paragliding in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Soar over the Atlas foothills, cedar forests, and coastal cliffs with tandem
              paragliding flights that require zero prior experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paraglidingSites.map((site) => (
              <div key={site.name} className="glass rounded-2xl p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                    <Compass className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {site.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{site.location}</p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">
                  {site.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                    <Mountain className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                    <p className="text-xs text-[var(--text-muted)]">Altitude</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{site.altitude}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                    <Clock className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                    <p className="text-xs text-[var(--text-muted)]">Flight Time</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{site.flightDuration}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                    <DollarSign className="w-4 h-4 text-[var(--color-green)] mb-1" />
                    <p className="text-xs text-[var(--text-muted)]">Price</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{site.price}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                    <Gauge className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                    <p className="text-xs text-[var(--text-muted)]">Difficulty</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{site.difficulty}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">Highlights</h4>
                  <div className="space-y-1.5">
                    {site.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--text-secondary)]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Best season: {site.bestSeason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Zip Lining & Adventure Parks ─── */}
      <section id="zip-lining" className="py-16 md:py-24 section-cream">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Zap className="w-4 h-4" />
              Adrenaline Adventures
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Zip Lining & Adventure Parks
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Fly through the tree canopy and cross canyons on zip lines in the Atlas foothills,
              from beginner-friendly discovery courses to extreme aerial challenges.
            </p>
          </div>

          {zipLineVenues.map((venue) => (
            <div key={venue.name} className="glass rounded-2xl overflow-hidden mb-12 last:mb-0">
              <div className="p-6 md:p-8 border-b border-[var(--color-border)]">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      {venue.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                      {venue.location}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider">
                    <TreePine className="w-3 h-3" />
                    Adventure Park
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4">
                  {venue.description}
                </p>
              </div>

              {/* Course Cards */}
              <div className="p-6 md:p-8">
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
                  Available Courses
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {venue.courses.map((course) => (
                    <div key={course.name} className="p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {course.name}
                        </h5>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          course.difficulty === 'Easy'
                            ? 'bg-green-100 text-green-700'
                            : course.difficulty === 'Moderate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {course.difficulty}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                        {course.description}
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded-lg bg-white/60">
                          <p className="text-xs text-[var(--text-muted)]">Duration</p>
                          <p className="text-xs font-bold text-[var(--text-primary)]">{course.duration}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-white/60">
                          <p className="text-xs text-[var(--text-muted)]">Price</p>
                          <p className="text-xs font-bold text-[var(--color-green)]">{course.price}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-white/60">
                          <p className="text-xs text-[var(--text-muted)]">Min Age</p>
                          <p className="text-xs font-bold text-[var(--text-primary)]">{course.minAge}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Facilities & Getting There */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                      Facilities
                    </h4>
                    <div className="space-y-2">
                      {venue.facilities.map((facility) => (
                        <div key={facility} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                          <span className="text-sm text-[var(--text-secondary)]">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                      Getting There
                    </h4>
                    <div className="p-4 rounded-lg bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {venue.gettingThere}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <Users className="w-4 h-4" />
                      <span>Best for: {venue.bestFor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Skydiving Section ─── */}
      <section id="skydiving" className="py-16 md:py-24 section-light">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <CircleDot className="w-4 h-4" />
              Ultimate Adrenaline
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Skydiving in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              For the ultimate aerial thrill, tandem skydiving offers freefall speeds of
              200 km/h with panoramic views of the Moroccan countryside.
            </p>
          </div>

          {skydivingOptions.map((sky) => (
            <div key={sky.name} className="max-w-4xl mx-auto glass rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center shrink-0">
                  <CircleDot className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {sky.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                    {sky.location}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {sky.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-[var(--color-surface)] text-center">
                  <Mountain className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                  <p className="text-xs text-[var(--text-muted)]">Jump Altitude</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{sky.altitude}</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-surface)] text-center">
                  <Zap className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                  <p className="text-xs text-[var(--text-muted)]">Freefall</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{sky.freefallTime}</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-surface)] text-center">
                  <Clock className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                  <p className="text-xs text-[var(--text-muted)]">Total Flight</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{sky.totalFlightTime}</p>
                </div>
                <div className="p-3 rounded-lg bg-[var(--color-surface)] text-center">
                  <DollarSign className="w-4 h-4 text-[var(--color-green)] mx-auto mb-1" />
                  <p className="text-xs text-[var(--text-muted)]">Price</p>
                  <p className="text-sm font-bold text-[var(--text-primary)]">{sky.price}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">Includes</h4>
                  <div className="space-y-2">
                    {sky.includes.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">Requirements</h4>
                  <div className="space-y-2">
                    {sky.requirements.map((req) => (
                      <div key={req} className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-sm text-[var(--text-secondary)]">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-amber-50 border border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-amber-800 mb-1">Availability Notice</p>
                    <p className="text-sm text-amber-700 leading-relaxed">{sky.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Helicopter Tours ─── */}
      <section id="helicopter" className="py-16 md:py-24 section-cream">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Plane className="w-4 h-4" />
              Premium Aerial Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Helicopter Tours
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The most exclusive way to see Morocco. Soar over Marrakech&apos;s ancient medina,
              the snow-capped Atlas, and the dramatic terrain that defines this country.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {helicopterTours.map((tour) => (
              <div key={tour.name} className="glass rounded-2xl overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center shrink-0">
                        <Plane className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          {tour.name}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">Route: {tour.route}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[var(--color-accent)]">{tour.price}</p>
                      <p className="text-xs text-[var(--text-muted)]">{tour.capacity}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {tour.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                      <Clock className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                      <p className="text-xs text-[var(--text-muted)]">Duration</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{tour.duration}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                      <Users className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                      <p className="text-xs text-[var(--text-muted)]">Capacity</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{tour.capacity}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-[var(--color-surface)]">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)] mb-1" />
                      <p className="text-xs text-[var(--text-muted)]">Departs</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{tour.departsFrom}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                      Flight Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-accent-50)] text-xs text-[var(--color-accent)] font-medium"
                        >
                          <Eye className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Booking Tips & Safety ─── */}
      <section id="booking-safety" className="py-16 md:py-24 section-light">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Shield className="w-4 h-4" />
              Essential Information
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Booking Tips & Safety Guidelines
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Everything you need to know to book with confidence and stay safe during
              aerial activities in Morocco.
            </p>
          </div>

          {/* Booking Tips */}
          <div className="mb-16">
            <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-8 text-center">
              Booking Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bookingTips.map((category) => (
                <div key={category.category} className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {category.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-[var(--color-accent)]">{index + 1}</span>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Guidelines */}
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-8 text-center">
              Safety Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {safetyGuidelines.map((category) => (
                <div key={category.category} className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {category.tips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Photography from the Air ─── */}
      <section id="photography" className="py-16 md:py-24 section-cream">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Camera className="w-4 h-4" />
              Capture the Moment
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Photography from the Air
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tips for capturing stunning aerial photographs and videos during your
              balloon flight, paragliding experience, or helicopter tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyTips.map((category) => (
              <div key={category.category} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-4">
                  {category.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Lightbulb className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What to Wear & Bring ─── */}
      <section id="what-to-wear" className="py-16 md:py-24 section-light">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <Glasses className="w-4 h-4" />
              Be Prepared
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Wear & What to Bring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed packing lists for each aerial activity to ensure comfort, safety,
              and the best possible experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatToWear.map((item) => (
              <div key={item.activity} className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {item.activity}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                    Clothing
                  </h4>
                  <div className="space-y-2">
                    {item.clothing.map((c) => (
                      <div key={c} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                    What to Bring
                  </h4>
                  <div className="space-y-2">
                    {item.bring.map((b) => (
                      <div key={b} className="flex items-start gap-2">
                        <Target className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--text-secondary)] leading-relaxed">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─── */}
      <section id="comparison" className="py-16 md:py-24 section-cream">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] text-sm text-[var(--color-accent)] font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              At a Glance
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Activity Comparison
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Compare all aerial activities in Morocco side by side to find the perfect
              experience for your budget, fitness level, and interests.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]">
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Activity</th>
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Price Range</th>
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Duration</th>
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Difficulty</th>
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Best Location</th>
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Best Season</th>
                    <th className="text-left p-4 text-white font-[family-name:var(--font-heading)] font-bold">Min Age</th>
                  </tr>
                </thead>
                <tbody>
                  {activityComparison.map((row, index) => (
                    <tr
                      key={row.activity}
                      className={index % 2 === 0 ? 'bg-white/60' : 'bg-[var(--color-surface)]'}
                    >
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.activity}</td>
                      <td className="p-4 text-[var(--color-green)] font-semibold">{row.priceRange}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.duration}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                          row.difficulty.includes('Easy')
                            ? 'bg-green-100 text-green-700'
                            : row.difficulty.includes('Moderate')
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {row.difficulty}
                        </span>
                      </td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.bestLocation}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.bestSeason}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.minAge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {activityComparison.map((row) => (
              <div key={row.activity} className="glass rounded-xl p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {row.activity}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">Price</p>
                    <p className="text-sm font-bold text-[var(--color-green)]">{row.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">Duration</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{row.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">Difficulty</p>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${
                      row.difficulty.includes('Easy')
                        ? 'bg-green-100 text-green-700'
                        : row.difficulty.includes('Moderate')
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {row.difficulty}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">Min Age</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{row.minAge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">Best Location</p>
                    <p className="text-sm text-[var(--text-secondary)]">{row.bestLocation}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">Best Season</p>
                    <p className="text-sm text-[var(--text-secondary)]">{row.bestSeason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pro Tip */}
          <div className="mt-8 p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Best Value Combination
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  For the ultimate aerial day in Morocco, combine a sunrise hot air balloon flight
                  (1,500-2,500 MAD) with an afternoon at Terres d&apos;Amanar adventure park (250-600 MAD).
                  You will be back from the balloon by 9:30 AM, leaving plenty of time to drive to
                  the park for zip lining and tree-top courses. The two experiences complement each
                  other perfectly: the peaceful, panoramic beauty of a balloon at dawn followed by the
                  adrenaline rush of flying through the forest canopy. Total cost for both: approximately
                  1,750-3,100 MAD per person, which represents extraordinary value for a full day of
                  aerial adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Pages / CTA ─── */}
      <section className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
              Ready to Take Flight in Morocco?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Whether you choose a serene sunrise balloon drift over the Palmeraie or an
              adrenaline-fueled zip line through an Atlas canyon, Morocco&apos;s aerial adventures
              will give you a perspective on this extraordinary country that no ground-level
              experience can match.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Wind,
                  title: 'Choose Your Adventure',
                  text: 'Peaceful balloon, thrilling paraglide, or scenic helicopter. Morocco has aerial activities for every style and budget.',
                },
                {
                  icon: Calendar,
                  title: 'Pick Your Season',
                  text: 'October to April is ideal for balloons. Paragliding and zip lining work year-round. Check weather windows for the best experience.',
                },
                {
                  icon: Camera,
                  title: 'Capture the Views',
                  text: 'Charge your camera, bring a secure strap, and prepare for landscapes that will be the highlight of your Morocco photos.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-dark rounded-xl p-6 text-center">
                  <item.icon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/marrakech" className="btn-accent btn-lg">
                Marrakech Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/trekking" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Trekking Guide
                <Mountain className="w-5 h-5" />
              </Link>
              <Link href="/camping" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Camping Guide
                <TreePine className="w-5 h-5" />
              </Link>
            </div>

            {/* Related Pages Grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/day-trips', label: 'Day Trips from Marrakech' },
                { href: '/atlas-mountains', label: 'Atlas Mountains' },
                { href: '/photography', label: 'Photography Guide' },
                { href: '/adventure', label: 'Adventure Activities' },
                { href: '/best-time', label: 'Best Time to Visit' },
                { href: '/safety', label: 'Safety Tips' },
                { href: '/tours', label: 'Guided Tours' },
                { href: '/tips', label: 'Travel Tips' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="glass-dark rounded-lg p-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-colors text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Zellige Divider ─── */}
      <div className="zellige-border" />
    </>
  );
}
