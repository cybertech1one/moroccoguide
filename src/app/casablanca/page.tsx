import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Star,
  ChevronRight,
  Home,
  Camera,
  Utensils,
  Hotel,
  Info,
  Compass,
  Globe,
  Shield,
  Sun,
  Calendar,
  Plane,
  Car,
  Train,
  Building,
  Heart,
  Coffee,
  ShoppingBag,
  Music,
  Waves,
  BookOpen,
  Eye,
  Navigation,
  Landmark,
  ArrowRight,
  Users,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ================================================================
   CONSTANTS
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title:
    'Casablanca Travel Guide 2025-2026 | Hassan II Mosque, Art Deco, Corniche & More',
  description:
    'The ultimate Casablanca travel guide. Explore the Hassan II Mosque, Art Deco architecture district, Corniche beaches, Old Medina, Quartier Habous, Rick\'s Cafe, and Morocco Mall. Complete guide with restaurants, neighborhoods, day trips to Rabat and El Jadida, transport, hotels, and practical tips for Morocco\'s largest city.',
  keywords: [
    'Casablanca travel guide',
    'Casablanca Morocco',
    'Hassan II Mosque',
    'Casablanca Art Deco',
    'Corniche Casablanca',
    'Casablanca beaches',
    'Casablanca restaurants',
    'Casablanca hotels',
    'Rick Cafe Casablanca',
    'Morocco Mall',
    'Casablanca nightlife',
    'Old Medina Casablanca',
    'Quartier Habous',
    'Casablanca day trips',
    'Casablanca airport CMN',
    'Casablanca tram',
    'best time to visit Casablanca',
    'Casablanca food guide',
    'Casablanca neighborhoods',
    'Anfa Casablanca',
    'Ain Diab beach',
    'Casablanca cathedral',
    'Villa des Arts Casablanca',
    'Casablanca to Rabat',
    'Casablanca to El Jadida',
    'Casablanca shopping',
    'Casablanca budget guide',
    'Casablanca safety tips',
    'Casablanca business travel',
  ],
  openGraph: {
    title:
      'Casablanca Travel Guide 2025-2026 | Morocco\'s Modern Metropolis',
    description:
      'Everything you need for Casablanca: Hassan II Mosque, Art Deco walking tours, Corniche nightlife, Habous pastries, day trips to Rabat, transport, restaurants, and practical tips for Morocco\'s largest and most dynamic city.',
    url: `${BASE_URL}/casablanca`,
    type: 'article',
    images: [
      {
        url: '/images/hero-casablanca-skyline.webp',
        width: 1200,
        height: 630,
        alt: 'Casablanca skyline with the Hassan II Mosque overlooking the Atlantic Ocean',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Casablanca Travel Guide 2025-2026 | Morocco\'s Modern Metropolis',
    description:
      'Complete guide to Casablanca: Hassan II Mosque, Art Deco district, Corniche beaches, Old Medina, restaurants, nightlife, day trips, and practical tips for Morocco\'s economic capital.',
    images: ['/images/hero-casablanca-skyline.webp'],
  },
  alternates: {
    canonical: `${BASE_URL}/casablanca`,
  },
};

/* ================================================================
   STRUCTURED DATA: JSON-LD
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TravelGuide',
      '@id': `${BASE_URL}/casablanca`,
      name: 'Casablanca Travel Guide 2025-2026',
      description:
        'A comprehensive travel guide to Casablanca, Morocco\'s largest city and economic capital. Covers the Hassan II Mosque, Art Deco architecture, Corniche beaches, neighborhoods, restaurants, day trips, transport, accommodation, and practical tips.',
      url: `${BASE_URL}/casablanca`,
      about: {
        '@type': 'TouristDestination',
        name: 'Casablanca',
        description:
          'Morocco\'s largest city and economic capital, a cosmopolitan metropolis of 3.7 million people famous for the Hassan II Mosque, stunning Art Deco architecture, vibrant nightlife, and Atlantic beaches.',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.5731,
          longitude: -7.5898,
        },
        touristType: [
          'Architecture enthusiasts',
          'Business travelers',
          'Culture seekers',
          'Food lovers',
          'Beach lovers',
        ],
        includesAttraction: [
          { '@type': 'TouristAttraction', name: 'Hassan II Mosque' },
          { '@type': 'TouristAttraction', name: 'Old Medina of Casablanca' },
          { '@type': 'TouristAttraction', name: 'Quartier Habous' },
          { '@type': 'TouristAttraction', name: 'Art Deco District' },
          { '@type': 'TouristAttraction', name: 'Morocco Mall' },
          { '@type': 'TouristAttraction', name: 'Corniche Ain Diab' },
          { '@type': 'TouristAttraction', name: "Rick's Cafe" },
          { '@type': 'TouristAttraction', name: 'Villa des Arts' },
          {
            '@type': 'TouristAttraction',
            name: 'Cathedral of the Sacred Heart',
          },
        ],
      },
      isPartOf: {
        '@type': 'WebSite',
        name: 'City Tours Morocco',
        url: BASE_URL,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: BASE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Cities',
          item: `${BASE_URL}/cities`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Casablanca',
          item: `${BASE_URL}/casablanca`,
        },
      ],
    },
  ],
};

/* ================================================================
   STRUCTURED DATA: FAQ
   ================================================================ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the Hassan II Mosque open to non-Muslims?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Hassan II Mosque is one of very few mosques in Morocco that welcomes non-Muslim visitors. Guided tours run Saturday through Thursday at 9 AM, 10 AM, 11 AM, and 2 PM (additional 3 PM and 4 PM tours in summer). Tours cost 130 MAD for adults and last approximately one hour. Dress modestly with shoulders and knees covered, and women should bring a scarf. Shoes are removed upon entry. Photography is permitted inside.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get from Casablanca Mohammed V Airport (CMN) to the city center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ONCF train is the fastest and cheapest option, running every hour from the airport station to Casa-Voyageurs and Casa-Port stations (45 minutes, around 70 MAD for second class). Grand taxis charge a fixed 300 MAD to the city center. Ride-hailing apps like inDrive and Careem also operate at CMN. Avoid unofficial taxi touts who charge inflated rates. The airport is 30 km south of the city center.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to visit Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months to visit Casablanca are March through June and September through November. Spring (March-May) brings mild temperatures of 18-24 degrees Celsius, clear skies, and blooming gardens. Autumn (September-November) is warm and pleasant with fewer tourists. Summer (July-August) can be hot and humid with temperatures exceeding 35 degrees Celsius, though the Atlantic breeze along the Corniche provides relief. Winter (December-February) is mild but rainy, with occasional storms coming off the Atlantic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Casablanca safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca is generally safe for tourists, including solo female travelers. It is a major international business city with a significant police presence. Standard precautions apply: avoid flashing expensive jewelry in the Old Medina, be cautious around the port area and Derb Sultan neighborhood at night, and use metered petit taxis rather than negotiating with grand taxis for inner-city trips. The Corniche, Anfa, Maarif, and Gauthier neighborhoods are all very safe day and night.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do I need in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two to three full days is ideal for Casablanca. Day one should cover the Hassan II Mosque (morning guided tour), the Old Medina, and lunch in the Habous Quarter. Day two is perfect for the Art Deco district walking tour, Villa des Arts, and an evening on the Corniche. An optional third day allows for a day trip to Rabat (one hour by Al Boraq train) or El Jadida (1.5 hours by car). Many travelers pass through Casablanca too quickly, dismissing it as merely a transit hub, but the city rewards those who give it time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Rick\'s Cafe in Casablanca real?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The original Rick\'s Cafe from the 1942 film "Casablanca" never existed in real life -- the movie was filmed entirely in Hollywood studios. However, an American businesswoman named Kathy Kriger opened a real Rick\'s Cafe in 2004 in a restored riad in the Old Medina, recreating the film\'s ambiance with a courtyard, arched doorways, a piano bar, and 1940s decor. It serves excellent Moroccan-French cuisine with mains from 180-350 MAD. Reservations are essential, especially for dinner. It is located at 248 Boulevard Sour Jdid.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Casablanca\'s tram system like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca\'s modern tram (tramway) has two lines covering 47 km across the city. Line T1 runs from Sidi Moumen to Lissasfa via the city center, and Line T2 connects Ain Diab (Corniche) to Sidi Bernoussi through the Anfa district. Trams are clean, air-conditioned, and run every 5-10 minutes from 6 AM to 10:30 PM. A single ticket costs 6 MAD, purchased from machines at each station. The tram is the most efficient way to navigate Casablanca and avoids the notorious city traffic.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I eat in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Casablanca is Morocco\'s best city for food. Must-try dishes include fresh seafood at the Central Market or the port fish restaurants (grilled sardines from 30 MAD, mixed seafood platters from 80 MAD), pastilla at the Habous bakeries, traditional tagines and couscous at neighborhood restaurants, and street food like msemen (flatbread) and harira (lentil soup). For upscale dining, the Corniche and Anfa neighborhoods host excellent French-Moroccan fusion restaurants. La Sqala near the Old Medina serves outstanding brunch in a historic fortress garden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use credit cards in Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit cards (Visa and Mastercard) are widely accepted at hotels, upscale restaurants, Morocco Mall, and chain stores. However, the Old Medina, Habous Quarter, petit taxis, street food stalls, and many smaller restaurants are cash-only. ATMs are plentiful throughout the city, particularly along Boulevard Mohammed V and in shopping centers. Withdraw Moroccan Dirhams (MAD) from ATMs, which generally offer better exchange rates than currency exchange bureaus. Notify your bank before traveling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an Al Boraq high-speed train from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Al Boraq high-speed train connects Casablanca-Voyageurs station to Tangier in approximately 2 hours and 10 minutes, with stops in Rabat and Kenitra. Trains run multiple times daily, with tickets starting around 149 MAD for second class and 249 MAD for first class one-way. The Al Boraq is Africa\'s first high-speed rail service, reaching speeds of 320 km/h. Book tickets on the ONCF website or app, or at the station. It is the fastest and most comfortable way to travel between Morocco\'s major northern cities.',
      },
    },
  ],
};

/* ================================================================
   DATA: QUICK FACTS
   ================================================================ */

const quickFacts = [
  { label: 'Population', value: '3.7 million', icon: Users },
  { label: 'Airport', value: 'CMN (Mohammed V)', icon: Plane },
  { label: 'Language', value: 'Arabic, French, Darija', icon: Globe },
  { label: 'Best Time', value: 'Mar-Jun, Sep-Nov', icon: Sun },
  { label: 'Currency', value: 'Moroccan Dirham (MAD)', icon: ShoppingBag },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
];

/* ================================================================
   DATA: TOP ATTRACTIONS
   ================================================================ */

const attractions = [
  {
    name: 'Hassan II Mosque',
    image: '/images/photo-hassan-ii-mosque.webp',
    type: 'Landmark',
    duration: '1-2 hours',
    cost: '130 MAD (guided tour)',
    rating: 4.9,
    description:
      'Rising from a promontory directly over the Atlantic Ocean, the Hassan II Mosque is Casablanca\'s undisputed masterpiece and one of the most breathtaking religious buildings on Earth. Completed in 1993 after seven years of construction by over 10,000 artisans, it is the third-largest mosque in the world after Mecca and Medina. Its 210-meter minaret -- the tallest in the world -- is crowned with a laser beam that points toward Mecca and can be seen from nearly every corner of the city. The prayer hall accommodates 25,000 worshippers beneath a retractable roof that opens to reveal the sky, while a further 80,000 can pray on the surrounding esplanade. The interior is a staggering showcase of Moroccan craftsmanship: 53 crystal chandeliers, hand-carved marble columns, painted cedarwood ceilings, and intricate zellige tilework that took master artisans years to complete. King Hassan II chose the ocean-side location inspired by a verse from the Quran: "The throne of God was built on water." It is one of the very few mosques in Morocco open to non-Muslim visitors.',
    highlights: [
      'Third-largest mosque in the world, 210-meter minaret',
      'Retractable roof opens to the sky over the prayer hall',
      'Built on a platform over the Atlantic Ocean',
      'One of few Moroccan mosques open to non-Muslims',
    ],
    tip: 'Book the first guided tour at 9 AM for the best light and smallest crowds. The exterior esplanade is spectacular at sunset when the minaret glows amber against the ocean. Dress modestly and bring a headscarf.',
  },
  {
    name: 'Old Medina',
    image: '/images/hero-casablanca-skyline.webp',
    type: 'Historic Quarter',
    duration: '2-3 hours',
    cost: 'Free',
    rating: 4.3,
    description:
      'Casablanca\'s Old Medina is a compact, walled quarter that stands in striking contrast to the gleaming modern city that surrounds it. Unlike the vast, labyrinthine medinas of Fes or Marrakech, Casablanca\'s original heart is relatively small and manageable, dating primarily to the 18th and 19th centuries when the city was still a modest port town called Dar el-Beida. Within its whitewashed walls you find narrow alleyways bustling with local life, traditional bakeries turning out fresh khobz, spice merchants, fabric sellers, and small neighborhood mosques. The atmosphere is authentically Moroccan and refreshingly unhurried, with far fewer tourists than the medinas of other cities. Highlights include the Sqala, a restored 18th-century Portuguese fortification now housing one of Casablanca\'s best restaurants, and the waterfront promenade leading to the Hassan II Mosque. Rick\'s Cafe, the famous movie-tribute restaurant, sits on the medina\'s southern edge along Boulevard Sour Jdid.',
    highlights: [
      'Authentic, low-tourist Moroccan medina experience',
      'La Sqala fortress restaurant with garden courtyard',
      'Rick\'s Cafe on Boulevard Sour Jdid',
      'Traditional bakeries, spice stalls, and artisan shops',
    ],
    tip: 'Start at the Clock Tower (the main entrance) and walk toward the Sqala for the most scenic route. The medina is best in the morning when bakers are working and the light is golden. Combine with a visit to the adjacent Hassan II Mosque.',
  },
  {
    name: 'Quartier Habous (New Medina)',
    image: '/images/hero-casablanca-skyline.webp',
    type: 'Cultural Quarter',
    duration: '2-3 hours',
    cost: 'Free',
    rating: 4.5,
    description:
      'The Quartier Habous is one of the most charming and unexpected neighborhoods in all of Morocco. Built in the 1930s by French colonial architects who wanted to create a "model medina," it blends traditional Moroccan architecture -- arched passages, tiled courtyards, carved wooden screens -- with French urban planning principles like wider streets, proper drainage, and organized commercial zones. The result is a medina that feels both authentically Moroccan and delightfully navigable. The quarter is famous for its pastry shops, where glass cases overflow with cornes de gazelle, chebakia, briouats, and other Moroccan sweets (buy by the kilogram, prices from 80-200 MAD/kg). The neighborhood also houses the Royal Palace of Casablanca (exterior only), the Mahkama du Pacha (a stunning neo-Moorish courthouse with intricate decoration rivaling the Hassan II Mosque), and rows of bookshops selling Arabic and French literature. The olive merchants in the central arcade offer dozens of varieties cured in herbs, harissa, and preserved lemons.',
    highlights: [
      'French-planned "model medina" with authentic architecture',
      'Famous pastry shops and bakeries',
      'Mahkama du Pacha neo-Moorish courthouse',
      'Olive merchants, bookshops, and artisan workshops',
    ],
    tip: 'Visit the Mahkama du Pacha first (free entry during weekday business hours) for its extraordinary carved plaster and painted cedarwood ceilings. Then buy pastries to take away -- the cornes de gazelle here are considered the best in Morocco.',
  },
  {
    name: 'Art Deco District',
    image: '/images/photo-casablanca-art-deco.webp',
    type: 'Architecture',
    duration: '2-4 hours',
    cost: 'Free (self-guided)',
    rating: 4.6,
    description:
      'Casablanca possesses one of the richest collections of Art Deco architecture in the world -- a legacy that rivals Miami Beach, Mumbai, and Brussels. Between 1912 and 1956, during the French Protectorate era, Casablanca was transformed from a small port town into a grand modern city, and French architects used it as a laboratory for avant-garde design. The result is a dense concentration of stunning Art Deco, Art Nouveau, Neo-Moorish, and Streamline Moderne buildings that line Boulevard Mohammed V and the surrounding blocks. Key landmarks include the Wilaya (the grandiose city hall), the Central Post Office with its magnificent tiled interior, Cinema Rialto (a masterpiece of 1930s design), the Bessoneau apartment building, and the former Hotel Lincoln. The genius of Casablanca\'s architecture lies in its fusion: European modernist forms decorated with traditional Islamic geometric patterns, Moroccan zellige tilework, and Amazigh motifs. No other city in the world blends these traditions so seamlessly. Casamemoire, a local preservation society, offers guided walking tours that bring the architecture to life with historical context and access to building interiors.',
    highlights: [
      'Among the world\'s richest Art Deco collections',
      'Unique fusion of European modernism and Moroccan decorative arts',
      'Boulevard Mohammed V walking tour with key landmarks',
      'Casamemoire guided tours for interior access',
    ],
    tip: 'Download the Casamemoire walking map or join a guided tour (weekends, around 100 MAD). The best buildings cluster around Place Mohammed V and along Boulevard Mohammed V toward the port. Morning light is ideal for photography of the white facades.',
  },
  {
    name: 'Morocco Mall',
    image: '/images/hero-casablanca-skyline.webp',
    type: 'Shopping & Entertainment',
    duration: '3-5 hours',
    cost: 'Free entry',
    rating: 4.4,
    description:
      'Morocco Mall is the largest shopping center in Africa and a destination in its own right. Located in the Anfa district along the Corniche, this colossal complex houses over 600 stores across 200,000 square meters, including international luxury brands (Gucci, Louis Vuitton, Prada), fast fashion chains (Zara, H&M, Mango), and Moroccan designers. Beyond shopping, the mall features Aquadream, a massive aquarium with a 30-meter walk-through tunnel housing sharks, rays, and tropical fish; an IMAX cinema; a full-size ice rink; an indoor adventure park; and a Moroccan souk-style section selling traditional crafts and food. The food court and restaurant terrace offer everything from Moroccan tagines to Japanese ramen, with ocean views from the upper levels. For travelers, Morocco Mall is a useful refuge from the summer heat and a place to find anything you might have forgotten to pack.',
    highlights: [
      'Largest shopping center in Africa, 600+ stores',
      'Aquadream aquarium with shark tunnel',
      'IMAX cinema, ice rink, and adventure park',
      'Ocean-view restaurant terrace',
    ],
    tip: 'Visit on weekday mornings for a quieter experience. The Aquadream aquarium (60 MAD) is genuinely impressive. The Moroccan souk section on the ground floor sells curated crafts at fixed prices -- useful if you are not comfortable haggling in the medinas.',
  },
  {
    name: 'Corniche & Ain Diab',
    image: '/images/photo-casablanca-corniche.webp',
    type: 'Beach & Nightlife',
    duration: 'Half day / evening',
    cost: 'Free (beach clubs from 100 MAD)',
    rating: 4.5,
    description:
      'The Corniche is Casablanca\'s glamorous Atlantic-facing promenade, stretching several kilometers along the coast from the Hassan II Mosque westward through the Ain Diab neighborhood. By day, it is a place of ocean-view cafes, beach clubs with infinity pools perched on the rocks, surfers catching Atlantic swells, and families strolling the palm-lined boulevard. By night, the Corniche transforms into the epicenter of Casablanca\'s legendary nightlife scene -- Morocco\'s most vibrant. Upscale restaurants, rooftop bars, nightclubs, and live music venues line the boulevard, drawing a well-dressed, cosmopolitan crowd that parties until dawn. The beach clubs (notably Tahiti Beach Club, La Corniche Beach, and Miami Beach Club) offer day passes with pools, sun loungers, and restaurant service for 100-300 MAD. The public beaches are free but can be crowded in summer. Sunset along the Corniche, with the silhouette of the Hassan II Mosque in the background, is one of Casablanca\'s most memorable sights.',
    highlights: [
      'Kilometers of Atlantic-facing cafes, clubs, and restaurants',
      'Morocco\'s most vibrant nightlife scene',
      'Beach clubs with pools and ocean views',
      'Spectacular sunsets with the mosque silhouette',
    ],
    tip: 'For the best Corniche experience, arrive in late afternoon for coffee and sunset at a waterfront cafe, then stay for dinner and the nightlife. The tram T2 line runs directly to Ain Diab. Beach clubs are busiest on weekends; visit mid-week for a more relaxed atmosphere.',
  },
  {
    name: "Rick's Cafe",
    image: '/images/photo-ricks-cafe-casablanca.webp',
    type: 'Restaurant & Bar',
    duration: '2-3 hours',
    cost: 'Mains 180-350 MAD',
    rating: 4.4,
    description:
      'The 1942 film "Casablanca" starring Humphrey Bogart and Ingrid Bergman is one of the most beloved movies ever made, yet its fictional Rick\'s Cafe Americain never existed in the real city. That changed in 2004 when Kathy Kriger, a former American diplomat who had fallen in love with Morocco, opened a meticulous recreation in a restored riad within the Old Medina. The interior faithfully evokes the film\'s atmosphere: curved archways, a central courtyard with a fountain, a carved wooden balcony, 1940s furnishings, ceiling fans turning slowly overhead, and a grand piano where a musician plays nightly (yes, they play "As Time Goes By"). The food is excellent Moroccan-French fusion -- think pastilla, lamb tagine with prunes and almonds, and French-influenced desserts. The bar serves cocktails, Moroccan wines, and of course, champagne. Whether or not you care about the film, Rick\'s Cafe is a beautifully designed restaurant with genuine atmosphere and excellent food in an historic setting.',
    highlights: [
      'Faithful recreation of the iconic film set',
      'Restored riad in the Old Medina',
      'Live piano music nightly (including "As Time Goes By")',
      'Excellent Moroccan-French fusion cuisine',
    ],
    tip: 'Reservations are essential, especially for dinner on weekends. Ask for a table on the upper balcony overlooking the courtyard for the most atmospheric experience. The three-course set menu (around 400 MAD) offers the best value. Smart-casual dress code.',
  },
  {
    name: 'Villa des Arts',
    image: '/images/hero-casablanca-skyline.webp',
    type: 'Art Museum',
    duration: '1-2 hours',
    cost: '30 MAD',
    rating: 4.2,
    description:
      'Housed in a magnificent 1930s Art Deco villa in the heart of the Anfa district, Villa des Arts is Casablanca\'s premier contemporary art space and one of the best small museums in Morocco. The building itself is a gem of Art Deco residential architecture, with geometric facades, rounded balconies, and a lush garden. Inside, rotating exhibitions showcase contemporary Moroccan and international artists across painting, sculpture, photography, and mixed media. The permanent collection includes works by important Moroccan artists such as Ahmed Cherkaoui, Farid Belkahia, and Mohamed Melehi. The Villa regularly hosts film screenings, concerts, artist talks, and cultural events. The garden cafe is a quiet oasis in the middle of the city. Villa des Arts represents the creative energy that makes Casablanca more than just a business city -- it is increasingly a cultural capital with a dynamic arts scene.',
    highlights: [
      'Stunning 1930s Art Deco villa architecture',
      'Rotating contemporary art exhibitions',
      'Permanent collection of major Moroccan artists',
      'Garden cafe and cultural events',
    ],
    tip: 'Check the schedule online for temporary exhibitions and evening events. The villa is particularly photogenic in afternoon light when the Art Deco facades glow warm gold. Combine with a walk through the surrounding Anfa neighborhood to see more beautiful 1930s-1950s residential architecture.',
  },
  {
    name: 'Cathedral of the Sacred Heart',
    image: '/images/hero-casablanca-skyline.webp',
    type: 'Historic Landmark',
    duration: '30-60 minutes',
    cost: 'Free',
    rating: 4.3,
    description:
      'The former Cathedral du Sacre Coeur is one of Casablanca\'s most striking and poignant landmarks. Designed by French architect Paul Tournon and completed in 1956 -- the very year Morocco gained independence -- the cathedral blends modernist Gothic architecture with Moroccan decorative influences in a way that perfectly encapsulates Casablanca\'s hybrid identity. The exterior features twin towers resembling minarets more than church spires, while the interior is a soaring space of concrete arches, stained glass, and dramatic light. The cathedral was deconsecrated after independence and no longer functions as a church. After years of neglect, it has been partially restored and now serves as a cultural center hosting exhibitions, concerts, and events. The rooftop offers panoramic views over the city center. The building stands as a powerful symbol of Casablanca\'s layered history -- a French church built with Moroccan decorative language, repurposed for a new era.',
    highlights: [
      'Unique blend of modernist Gothic and Moroccan architecture',
      'Twin towers designed to echo minarets',
      'Soaring interior with stained glass and concrete arches',
      'Rooftop panoramic views over the city center',
    ],
    tip: 'The cathedral sits on the edge of Parc de la Ligue Arabe, Casablanca\'s central park. Combine a visit with a stroll through the park, which features Art Deco pavilions and shaded walkways. The interior is most dramatic in the morning when light pours through the stained glass.',
  },
];

/* ================================================================
   DATA: NEIGHBORHOODS
   ================================================================ */

const neighborhoods = [
  {
    name: 'Anfa',
    icon: Star,
    character: 'Upscale, leafy, residential',
    description:
      'Casablanca\'s most prestigious neighborhood sits on a gentle hill above the Corniche, lined with tree-shaded boulevards, elegant Art Deco and mid-century villas, international consulates, and some of the city\'s finest restaurants. Anfa is where the famous 1943 Casablanca Conference took place, where Churchill and Roosevelt planned the Allied strategy for World War II. Today it is home to Morocco\'s business elite, luxury hotels, the Twin Center skyscrapers, and a growing scene of art galleries and upscale boutiques. The neighborhood\'s wide, quiet streets make it one of the most pleasant areas in Casablanca for walking.',
    highlights: [
      'Twin Center towers and luxury hotels',
      'Art Deco villas and tree-lined boulevards',
      'Upscale restaurants and galleries',
      'Historic 1943 Casablanca Conference site',
    ],
    bestFor: 'Luxury travelers, business visitors, architecture enthusiasts',
  },
  {
    name: 'Maarif',
    icon: ShoppingBag,
    character: 'Trendy, commercial, youthful',
    description:
      'Maarif is Casablanca\'s trendiest neighborhood and the heart of the city\'s contemporary culture. Centered around Boulevard Massira al Khadra, the district is packed with boutiques, cafes, international restaurants, and nightlife venues that cater to Casablanca\'s young, cosmopolitan middle class. This is where you find the best shopping outside Morocco Mall -- both Moroccan designer labels and international brands. The Twin Center shopping gallery anchors the northern end, while the residential streets to the south are dotted with neighborhood cafes and bakeries. Maarif is also the best neighborhood for casual dining, with everything from gourmet burger joints to authentic Moroccan grill houses.',
    highlights: [
      'Best shopping district outside Morocco Mall',
      'Trendy cafes, restaurants, and nightlife',
      'Boulevard Massira al Khadra promenade',
      'Moroccan designer boutiques',
    ],
    bestFor: 'Young travelers, shoppers, foodies, nightlife seekers',
  },
  {
    name: 'Gauthier',
    icon: Building,
    character: 'Central, business-oriented, architectural',
    description:
      'Gauthier is Casablanca\'s central business district and the epicenter of the city\'s Art Deco heritage. The neighborhood radiates outward from Place Mohammed V, the grand circular plaza anchored by the Prefecture (city hall), courthouse, and central post office -- all masterpieces of 1930s architecture. Boulevard Mohammed V, Casablanca\'s most historically significant avenue, cuts through the heart of Gauthier with an extraordinary density of Art Deco and Streamline Moderne facades. The neighborhood also houses the Central Market (Marche Central), a covered market selling fresh seafood, produce, flowers, and Moroccan delicacies. Despite its business-district character, Gauthier has excellent restaurants and a growing number of boutique hotels.',
    highlights: [
      'Place Mohammed V and Art Deco landmarks',
      'Central Market for fresh seafood and produce',
      'Boulevard Mohammed V architecture',
      'Business hotels and restaurants',
    ],
    bestFor: 'Architecture lovers, business travelers, food market enthusiasts',
  },
  {
    name: 'Habous',
    icon: Coffee,
    character: 'Traditional, charming, artisanal',
    description:
      'The Quartier Habous (also called the New Medina) is a unique neighborhood that blends Moroccan tradition with French-era urban planning. Built in the 1930s to house Moroccan workers migrating to the growing city, the Habous Quarter was designed by French architects who respectfully adapted traditional medina forms -- arched walkways, interior courtyards, organized souks -- into a planned urban layout. The result feels authentically Moroccan yet remarkably walkable and un-chaotic compared to a traditional medina. The neighborhood is famous for its pastry shops, olive merchants, and the Mahkama du Pacha -- a jaw-dropping neo-Moorish courthouse that rivals the Hassan II Mosque in decorative splendor.',
    highlights: [
      'Mahkama du Pacha neo-Moorish courthouse',
      'Famous pastry shops and olive merchants',
      'Royal Palace exterior',
      'Organized souk-style shopping',
    ],
    bestFor: 'Culture seekers, food lovers, those who want medina vibes without the chaos',
  },
  {
    name: 'Ain Diab',
    icon: Waves,
    character: 'Beach, nightlife, resort',
    description:
      'Ain Diab is Casablanca\'s beachfront playground, stretching along the Atlantic coast west of the city center. The neighborhood revolves around the Corniche boulevard, which is lined with beach clubs, oceanfront restaurants, nightclubs, and luxury hotels. During the day, families and surfers share the beaches and pool clubs. At night, Ain Diab becomes the pulsing heart of Morocco\'s most active nightlife scene, with venues ranging from sophisticated rooftop lounges to high-energy nightclubs that attract DJs from across Europe and Africa. The neighborhood also houses Morocco Mall and the growing Anfa Place development. Ain Diab has a distinctly resort-like atmosphere that sets it apart from the rest of Casablanca.',
    highlights: [
      'Corniche beach clubs and pool complexes',
      'Morocco\'s most vibrant nightlife strip',
      'Morocco Mall and Anfa Place',
      'Ocean-view restaurants and sunset cafes',
    ],
    bestFor: 'Beach lovers, nightlife enthusiasts, families in summer',
  },
];

/* ================================================================
   DATA: FOOD & RESTAURANTS
   ================================================================ */

const foodHighlights = [
  {
    name: 'Seafood at the Central Market & Port',
    icon: Waves,
    description:
      'Casablanca is Morocco\'s seafood capital, and nowhere is this more evident than at the Marche Central (Central Market) in the Gauthier district. The covered market is a feast for the senses: glistening piles of fresh sardines, sea bass, sole, prawns, oysters, and octopus, all caught that morning from the Atlantic. Several small restaurants inside the market will grill your selection to order for a nominal fee. For an even more atmospheric seafood experience, head to the port area where simple fish restaurants serve enormous platters of grilled fish, fried calamari, and shrimp for astonishingly low prices (a full seafood meal from 50-100 MAD). The more upscale Le Cabestan and La Mer restaurants on the Corniche serve refined seafood with ocean views and white tablecloths.',
    mustTry: 'Grilled sardines (from 30 MAD), seafood pastilla, charmoula fish, fresh oysters at the Central Market',
  },
  {
    name: 'Habous Pastries & Street Food',
    icon: Coffee,
    description:
      'The Habous Quarter is Casablanca\'s sweetest neighborhood -- literally. Rows of pastry shops display jewel-like arrays of Moroccan sweets: cornes de gazelle (crescent-shaped almond pastries dusted with powdered sugar), chebakia (fried sesame cookies dipped in honey), briouats (crispy parcels filled with almond paste), fekkas (crunchy almond biscotti), and msemen layered with butter and honey. These shops sell by weight, typically 80-200 MAD per kilogram, and the quality is exceptional -- many locals consider the Habous pastries the best in Morocco. Beyond sweets, the neighborhood offers excellent street food: roasted lamb heads (a local delicacy), fresh-squeezed orange juice (4-5 MAD per glass), and tiny restaurants serving steaming bowls of harira soup and plates of slow-cooked tanjia.',
    mustTry: 'Cornes de gazelle by the kilogram, chebakia, msemen with honey, fresh orange juice',
  },
  {
    name: 'Fine Dining & Fusion',
    icon: Utensils,
    description:
      'Casablanca\'s fine dining scene is the most sophisticated in Morocco, reflecting the city\'s cosmopolitan character. Standout restaurants include La Sqala, set within an 18th-century Portuguese fortress near the Old Medina, where you dine in a lush garden courtyard on beautifully presented Moroccan classics (mains 80-150 MAD). Le Cabestan on the Corniche offers French-Moroccan fusion with crashing Atlantic waves visible through floor-to-ceiling windows. Blend in the Gauthier district serves creative Mediterranean cuisine in a converted Art Deco villa. Basmane in Anfa delivers exceptional Japanese-Moroccan fusion. For the ultimate splurge, the restaurants at the Royal Mansour and Four Seasons hotels set new standards for luxury Moroccan gastronomy. Casablanca also has excellent French, Italian, Lebanese, and Asian restaurants scattered across the Maarif and Anfa neighborhoods.',
    mustTry: 'Garden brunch at La Sqala, sunset dinner at Le Cabestan, cocktails at Sky Bar 33',
  },
  {
    name: 'Traditional Moroccan',
    icon: Heart,
    description:
      'Beyond the fine dining and seafood, Casablanca offers authentic traditional Moroccan cuisine at neighborhood restaurants that few tourists discover. In the Derb Sultan and Hay Mohammadi neighborhoods, family-run restaurants serve tajines slowly cooked over charcoal, enormous platters of couscous on Fridays (the traditional day), and tanjia -- a Casablanca and Marrakech specialty of slow-cooked meat sealed in an earthenware jar and left in hot ashes for hours. For breakfast, seek out a neighborhood bakery serving fresh-from-the-oven batbout (puffed flatbread), rghaif (layered flatbread with butter and honey), and baghrir (spongy pancakes drizzled with melted butter and honey). The experience of eating at a local restaurant where you are the only foreigner, surrounded by Moroccan families, is one of Casablanca\'s most rewarding travel experiences.',
    mustTry: 'Friday couscous, tanjia, traditional breakfast spread with rghaif and baghrir',
  },
];

/* ================================================================
   DATA: DAY TRIPS
   ================================================================ */

const dayTrips = [
  {
    name: 'Rabat',
    distance: '87 km (1 hour by Al Boraq train)',
    icon: Landmark,
    description:
      'Morocco\'s elegant capital city is one of the easiest and most rewarding day trips from Casablanca. The Al Boraq high-speed train covers the distance in just under an hour, arriving at Rabat Agdal station. Highlights include the Hassan Tower and Mohammed V Mausoleum (a stunning unfinished 12th-century mosque and the resting place of Morocco\'s modern kings), the Kasbah of the Udayas (a photogenic blue-and-white fortress overlooking the Atlantic), the Chellah necropolis (ancient Roman and Islamic ruins overrun with nesting storks), and the Mohammed VI Museum of Modern and Contemporary Art. Rabat is quieter, greener, and more refined than Casablanca, with beautiful gardens and a relaxed cafe culture along the Bouregreg river.',
    tip: 'Take the first Al Boraq train to maximize your day. Start at the Hassan Tower, walk to the Kasbah, lunch in the medina, and visit Chellah in the afternoon. Return trains run until evening.',
  },
  {
    name: 'El Jadida',
    distance: '100 km (1.5 hours by car)',
    icon: Globe,
    description:
      'This atmospheric coastal city south of Casablanca is home to one of Morocco\'s most extraordinary UNESCO World Heritage Sites: the Cite Portugaise (Portuguese City), a 16th-century fortified complex built by Portuguese colonizers. The highlight is the Citerne Portugaise (Portuguese Cistern), a hauntingly beautiful underground chamber where gothic stone columns are reflected in a thin layer of water on the floor -- Orson Welles filmed scenes of Othello here. The fortified walls offer sweeping views over the Atlantic, and the Jewish quarter within the citadel tells the story of El Jadida\'s multicultural past. Beyond the Portuguese city, El Jadida has a lovely beach promenade, fresh seafood restaurants, and a relaxed atmosphere that rewards an afternoon of wandering.',
    tip: 'The Portuguese Cistern opens at 9 AM. Visit early when the light streams through the ceiling opening and the reflections on the water are most dramatic. Combine with lunch at a seafood restaurant on the waterfront.',
  },
  {
    name: 'Azemmour',
    distance: '80 km (1.5 hours by car)',
    icon: Camera,
    description:
      'Tiny Azemmour, perched on the banks of the Oum er-Rbia river just north of El Jadida, is one of Morocco\'s hidden gems. This little-visited town has a beautifully preserved Portuguese-era medina with whitewashed walls adorned with vibrant street art by Moroccan and international artists, making it an unexpected open-air gallery. The old mellah (Jewish quarter) features remarkable Star of David carvings on ancient doorways. The town is also notable as the birthplace of Estevanico (Mustafa Zemmouri), an enslaved Moroccan who became one of the first Africans to explore the American Southwest in the 1530s. Azemmour sees almost no tourists and offers a glimpse into small-town Moroccan life that larger cities cannot provide.',
    tip: 'Combine Azemmour with El Jadida for a full day trip. The medina is tiny and can be explored in 1-2 hours. Ask locals to point you toward the best street art murals -- they are scattered throughout the old walls.',
  },
];

/* ================================================================
   DATA: GETTING AROUND
   ================================================================ */

const transportOptions = [
  {
    name: 'Tram',
    icon: Train,
    description:
      'Casablanca\'s modern tramway is the best way to navigate the city. Two lines cover 47 km, connecting major neighborhoods including the city center, Ain Diab (Corniche), Anfa, and outlying districts. Trams are clean, air-conditioned, and run every 5-10 minutes from 6 AM to 10:30 PM. A single ticket costs 6 MAD (purchased from machines at stations). The tram avoids Casablanca\'s notorious traffic jams and is the recommended way to reach the Corniche, Morocco Mall, and the Ain Diab beach area from the city center.',
    cost: '6 MAD per ride',
  },
  {
    name: 'Petit Taxis (Red)',
    icon: Car,
    description:
      'Casablanca\'s red petit taxis are metered and affordable for trips within the city. Insist the driver uses the meter (compteur) -- the base fare starts at 2.50 MAD with a minimum charge of 7 MAD during the day and 10 MAD at night. A typical cross-city trip costs 20-40 MAD. Petit taxis seat three passengers maximum. They are plentiful except during rush hour and Friday prayer time. Tips of 2-5 MAD are appreciated. Ride-hailing apps like inDrive and Careem also work well and avoid meter disputes.',
    cost: '7-40 MAD per trip',
  },
  {
    name: 'Grand Taxis',
    icon: Car,
    description:
      'Grand taxis (usually white Mercedes sedans) serve fixed routes between Casablanca and other cities or to the airport. They operate from specific departure points: the airport grand taxi stand charges a fixed 300 MAD to the city center. For intercity travel, grand taxis depart from various stations around the city when full (six passengers). While cheaper than private transfers, they can be uncomfortable on longer journeys. Negotiate the price before departing.',
    cost: '300 MAD to airport; varies for intercity',
  },
  {
    name: 'ONCF Trains',
    icon: Train,
    description:
      'Casablanca has two major train stations: Casa-Voyageurs (the main intercity station for Al Boraq high-speed trains and conventional services) and Casa-Port (closer to the Old Medina, with shuttles to the airport and regional services). The Al Boraq high-speed train reaches Rabat in 45 minutes, Kenitra in 1 hour, and Tangier in 2 hours 10 minutes. Conventional trains serve Marrakech (3.5 hours), Fes (4 hours), and Meknes (3.5 hours). The airport train runs hourly from both stations. ONCF is reliable, comfortable, and affordable.',
    cost: 'Airport: 70 MAD; Rabat: from 50 MAD; Tangier Al Boraq: from 149 MAD',
  },
  {
    name: 'CTM & Supratours Buses',
    icon: Navigation,
    description:
      'CTM and Supratours operate comfortable, air-conditioned intercity buses from the Gare Routiere Ouled Ziane station. CTM is generally considered more reliable with fixed schedules and assigned seating. Buses serve destinations not well connected by rail, including Essaouira, Chefchaouen, and the Sahara. Book tickets online or at the station. The bus station is accessible by tram (Line T1) or petit taxi.',
    cost: 'Varies by destination; Marrakech from 100 MAD',
  },
];

/* ================================================================
   DATA: WHERE TO STAY
   ================================================================ */

const accommodationAreas = [
  {
    area: 'Anfa / Corniche',
    icon: Star,
    description:
      'Casablanca\'s luxury hotel district, home to the Four Seasons, Hyatt Regency, Movenpick, and Sofitel. Walking distance to Morocco Mall and the Corniche beach clubs. Best for business travelers and those wanting resort-style amenities with ocean proximity.',
    budget: 'Luxury: 1,500-5,000+ MAD/night',
    bestFor: 'Luxury, business, beach access',
  },
  {
    area: 'City Center / Gauthier',
    icon: Building,
    description:
      'Central location near Place Mohammed V, the Art Deco district, and the Central Market. A mix of business hotels (Kenzi Tower, Novotel) and growing boutique options. Best for sightseeing and architecture lovers who want to be in the heart of the action.',
    budget: 'Mid-range: 500-1,500 MAD/night',
    bestFor: 'Sightseeing, architecture, central location',
  },
  {
    area: 'Maarif',
    icon: ShoppingBag,
    description:
      'Casablanca\'s trendy neighborhood offers a growing selection of modern aparthotels and boutique hotels. Central location with excellent restaurants, cafes, and shopping on your doorstep. Well-connected by tram to the rest of the city.',
    budget: 'Mid-range: 400-1,200 MAD/night',
    bestFor: 'Young travelers, shoppers, nightlife',
  },
  {
    area: 'Near the Medina / Casa-Port',
    icon: Landmark,
    description:
      'Budget and mid-range options near the Old Medina and the port area. Walking distance to the Hassan II Mosque and Rick\'s Cafe. The Melliber Appart Hotel and Hyatt Regency are in this zone. The area can feel less polished than Anfa or Maarif but offers authentic atmosphere.',
    budget: 'Budget to mid-range: 200-800 MAD/night',
    bestFor: 'Budget travelers, mosque access, authenticity',
  },
];

/* ================================================================
   DATA: PRACTICAL TIPS
   ================================================================ */

const practicalTips = [
  {
    title: 'Language',
    icon: BookOpen,
    text: 'Casablanca is Morocco\'s most linguistically diverse city. French is the primary business language and is spoken universally. Arabic (Darija) is the daily conversational language. English is increasingly common among young professionals and in tourist-facing businesses, but less prevalent than in Marrakech or Fes. Spanish speakers will find some understanding, particularly among older residents. Key Darija phrases: "Shukran" (thank you), "Bslama" (goodbye), "Bsaha" (enjoy your meal), "La shukran" (no thank you).',
  },
  {
    title: 'Dress Code',
    icon: Shield,
    text: 'Casablanca is Morocco\'s most cosmopolitan city, and dress standards are more relaxed than in traditional cities like Fes. In the Corniche area, Anfa, and Maarif, casual Western clothing is perfectly normal. In the Old Medina and Habous Quarter, modest dress (covered shoulders and knees) is respectful. The Hassan II Mosque requires modest dress for tours, with women asked to cover their hair. Beach clubs along the Corniche accept swimwear. Casablancans generally dress well, and smart-casual is appropriate for restaurants and bars.',
  },
  {
    title: 'Money',
    icon: ShoppingBag,
    text: 'The Moroccan Dirham (MAD) is the currency. ATMs are everywhere, especially along Boulevard Mohammed V and in shopping centers. Credit cards (Visa, Mastercard) are widely accepted at hotels, upscale restaurants, and large stores. The Old Medina, Habous Quarter, petit taxis, and street food vendors are cash-only. Tip 10-15% at sit-down restaurants, 5-10 MAD for small services. The Central Post Office and major banks offer currency exchange with slightly better rates than airport exchange bureaus.',
  },
  {
    title: 'Safety',
    icon: Shield,
    text: 'Casablanca is generally safe for tourists. The Anfa, Corniche, Maarif, and Gauthier neighborhoods are very safe day and night. Exercise normal caution in the Old Medina and around the port area after dark. Pickpocketing can occur in crowded areas like the Central Market and on trams during rush hour -- keep valuables in front pockets or cross-body bags. Avoid walking alone in poorly lit side streets late at night. Morocco has a strong police presence and tourist police are available for emergencies.',
  },
  {
    title: 'Internet & SIM Cards',
    icon: Globe,
    text: 'Buy a local SIM card at the airport from Maroc Telecom, Orange, or Inwi for approximately 30-50 MAD with data. Maroc Telecom has the widest coverage. Most hotels, cafes, and restaurants offer free Wi-Fi. A 20 GB data plan costs around 100 MAD and lasts 30 days. Casablanca has excellent 4G/5G coverage across the city.',
  },
  {
    title: 'When to Visit',
    icon: Calendar,
    text: 'Spring (March-May) and autumn (September-November) offer the best weather: mild temperatures of 18-25 degrees Celsius, clear skies, and comfortable conditions for exploring. Summer (June-August) brings heat and humidity, though the Atlantic breeze along the Corniche provides relief and the beach clubs are at their best. Winter (December-February) is mild (12-18 degrees Celsius) but can be rainy, with occasional Atlantic storms. Ramadan dates shift annually; restaurant availability changes during this period, but the iftar (breaking fast) experience at sunset is extraordinary.',
  },
];

/* ================================================================
   DATA: ART DECO WALKING TOUR LANDMARKS
   ================================================================ */

const artDecoLandmarks = [
  {
    name: 'Place Mohammed V (Wilaya)',
    year: '1930s',
    architect: 'Various French architects',
    description:
      'The grand heart of Casablanca\'s Art Deco district is this circular plaza surrounded by an ensemble of monumental public buildings. The Prefecture (Wilaya) is the most imposing, with its grand colonnaded facade, clock tower, and ornate interior featuring mosaic floors and painted ceilings. The adjacent courthouse (Tribunal) and central post office complete the ensemble. The plaza was designed as a showcase of French colonial ambition, blending Beaux-Arts monumentality with Moroccan decorative motifs. At night, the buildings are illuminated and the fountain at the center creates a memorable scene.',
    style: 'Neo-Moorish / Beaux-Arts',
  },
  {
    name: 'Central Post Office (Grande Poste)',
    year: '1918',
    architect: 'Adrien Laforgue',
    description:
      'One of Casablanca\'s most beautiful interiors, the Grande Poste features a magnificent vaulted hall with elaborate zellige tilework, carved stucco, and painted cedarwood details that transform a mundane civic building into a work of art. The exterior combines a French classical colonnade with Islamic horseshoe arches and geometric patterns. The post office remains fully operational -- you can mail a postcard from one of the most beautiful buildings in Africa.',
    style: 'Neo-Moorish',
  },
  {
    name: 'Cinema Rialto',
    year: '1930',
    architect: 'Pierre Jabin',
    description:
      'A masterpiece of Art Deco cinema architecture, the Rialto features a gleaming white facade with streamlined vertical elements, geometric ornamentation, and a spectacular neon-lit marquee that once drew Casablancans for evening screenings. The interior, with its sweeping balconies and decorative plasterwork, is equally impressive. Though no longer regularly screening films, the Rialto is occasionally used for cultural events and remains one of the most photographed buildings on Boulevard Mohammed V.',
    style: 'Art Deco / Streamline Moderne',
  },
  {
    name: 'Bessoneau Building',
    year: '1930',
    architect: 'Hubert Bride',
    description:
      'This commercial building on Boulevard Mohammed V is one of the purest Art Deco structures in Casablanca. Its creamy white facade features geometric reliefs, stylized floral motifs, and elegant wrought-iron balconies that are textbook examples of 1930s French Art Deco design. The ground-floor arcade shelters shops and cafes, maintaining the building\'s original commercial function. Look up to see the intricate decorative details that most passersby miss entirely.',
    style: 'Art Deco',
  },
  {
    name: 'Hotel Guynemer',
    year: '1922',
    architect: 'Marius Boyer',
    description:
      'Marius Boyer was the most prolific architect of Casablanca\'s Art Deco period, designing over 200 buildings across the city. The Hotel Guynemer is one of his finest works: a striking residential building with elaborately decorated balconies, carved stone medallions, and a facade that masterfully blends Parisian elegance with Moroccan geometric patterns. Boyer\'s genius was in understanding that the Casablanca light -- intense, Mediterranean, and unforgiving -- required a different architectural language than gray Paris.',
    style: 'Art Deco with Moorish influences',
  },
  {
    name: 'Immeuble Liberté',
    year: '1950',
    architect: 'Léonard Morandi',
    description:
      'One of Casablanca\'s most celebrated modernist buildings, the Immeuble Liberté is a bold, curving residential block that wraps around a corner site with dramatic horizontal bands and a flowing silhouette influenced by the work of Oscar Niemeyer. The building represents the post-war evolution of Casablanca\'s architecture, when French architects began experimenting with more radical modernist forms while still responding to the Moroccan climate with deep loggias, cross-ventilation, and sun-shading devices.',
    style: 'Modernist / International Style',
  },
];

/* ================================================================
   DATA: NIGHTLIFE & EVENING ENTERTAINMENT
   ================================================================ */

const nightlifeVenues = [
  {
    name: 'Sky Bar 33 (Kenzi Tower)',
    area: 'Twin Center, Maarif',
    type: 'Rooftop Bar',
    description:
      'Perched on the 33rd floor of the Kenzi Tower Hotel in the Twin Center, Sky Bar 33 offers the most spectacular views in Casablanca. Floor-to-ceiling windows and an open terrace provide a 360-degree panorama of the city, the Atlantic, and the distant Atlas Mountains on clear days. The cocktail list is creative and the atmosphere sophisticated but not stuffy. This is the best place in Casablanca for sunset drinks, watching the city lights come alive below as the sky turns from gold to indigo over the ocean.',
    priceRange: 'Cocktails 100-180 MAD',
    bestTime: 'Arrive 30 minutes before sunset for the best experience',
  },
  {
    name: 'Le Cabestan',
    area: 'Corniche',
    type: 'Restaurant & Lounge',
    description:
      'Built directly on the rocks of the Corniche with the Atlantic crashing below, Le Cabestan is Casablanca\'s most dramatically positioned restaurant. The white-on-white interior channels Mediterranean luxury, and the outdoor terrace puts you as close to the ocean as you can get without being on a boat. Seafood is the specialty -- the catch of the day is always superb -- and the wine list favors excellent Moroccan and French labels. After dinner, the lounge area fills with Casablanca\'s fashionable crowd for cocktails and conversation.',
    priceRange: 'Mains 150-350 MAD, Cocktails 80-150 MAD',
    bestTime: 'Reserve a terrace table for dinner at sunset',
  },
  {
    name: 'Ain Diab Nightclubs',
    area: 'Corniche / Ain Diab',
    type: 'Nightclubs',
    description:
      'The Corniche strip in Ain Diab is home to Morocco\'s most vibrant nightclub scene. Major venues include Le Studio (international DJs, upscale crowd), Oasis (massive outdoor venue with pool parties in summer), and Vanity Club (sleek design, electronic music). The nightclub scene in Casablanca typically starts late -- most venues do not fill up until midnight and parties continue until 4-5 AM on weekends. Dress codes are enforced (smart-casual minimum, no sneakers), and door selection can be selective at the most popular venues. The atmosphere is cosmopolitan, with a well-dressed crowd of young Casablancans and international visitors.',
    priceRange: 'Cover 100-300 MAD, Drinks 80-200 MAD',
    bestTime: 'Thursday and Saturday nights, arrive after midnight',
  },
  {
    name: 'La Bodega',
    area: 'Maarif',
    type: 'Tapas Bar & Live Music',
    description:
      'A Casablanca institution, La Bodega brings a slice of Spain to Morocco with an excellent tapas menu, a lively bar, and live music that ranges from flamenco to Gnaoua fusion to Latin jazz. The atmosphere is warm and convivial -- the kind of place where strangers end up talking over shared plates and glasses of Spanish wine. The interior is packed with character: exposed brick, vintage posters, and a perpetual buzz of conversation. La Bodega proves that Casablanca\'s nightlife is not all mega-clubs; sometimes the best nights happen in smaller, more intimate venues.',
    priceRange: 'Tapas 40-90 MAD, Drinks 50-120 MAD',
    bestTime: 'Live music nights (check schedule), from 9 PM',
  },
];

/* ================================================================
   DATA: CASABLANCA ESSENTIALS (ETIQUETTE & TIPS)
   ================================================================ */

const essentialTips = [
  {
    icon: Info,
    title: 'Casablanca Is Not the Film',
    description:
      'Many visitors arrive expecting the romantic noir atmosphere of the 1942 Humphrey Bogart film. The real Casablanca is a modern, dynamic, business-oriented city with much more to offer than movie nostalgia. Go to Rick\'s Cafe for the tribute experience, but spend the rest of your time exploring the real Casablanca -- it is far more interesting than any Hollywood set.',
  },
  {
    icon: Clock,
    title: 'Traffic & Timing',
    description:
      'Casablanca has some of the worst traffic in Morocco, particularly during rush hours (8-10 AM and 5-8 PM). The tram is far more reliable than taxis during peak times. Plan your day to avoid crossing the city during rush hour. Friday afternoons are quieter as many businesses close after midday prayer, and the roads clear.',
  },
  {
    icon: Coffee,
    title: 'Cafe Culture',
    description:
      'Casablancans are passionate about their cafes. Spending hours over a coffee or mint tea while watching street life is a beloved local tradition. The French influence is strong: expect excellent espresso, croissants, and pain au chocolat alongside traditional msemen and baghrir. Boulevard Mohammed V, the Twin Center area, and Maarif offer the best cafe scenes. Do not rush your coffee -- nobody else does.',
  },
  {
    icon: Calendar,
    title: 'Friday Rhythms',
    description:
      'Friday is the Islamic holy day and Casablanca\'s rhythm changes noticeably. Many shops and businesses close between noon and 2:30 PM for Friday prayer. The Old Medina and Habous Quarter are quieter during this time. However, Friday is also when families gather for the traditional weekly couscous lunch -- if a Moroccan family invites you to join, accept immediately. It is one of the most meaningful cultural experiences you can have.',
  },
  {
    icon: Music,
    title: 'Cultural Events & Festivals',
    description:
      'Casablanca has a growing cultural scene. The Casablanca Festival (Festival de Casablanca) in July brings music, art, and performance to venues across the city. The Biennale Internationale d\'Art de Casablanca showcases contemporary art. The Villa des Arts and Theatre Mohammed V host regular exhibitions, concerts, and theatrical performances. Check local listings on sites like TelQuel and Yabiladi for what is happening during your visit.',
  },
  {
    icon: Globe,
    title: 'Business Hub',
    description:
      'As Morocco\'s economic capital, Casablanca has a significant business travel infrastructure. The Casablanca Finance City (CFC) in the Anfa district is a major African financial center. Business dress is expected in professional settings (suits for men, conservative business attire for women). Business meetings often begin with mint tea and conversation before moving to the agenda. Friday is not a work day for government offices.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function CasablancaPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section className="relative min-h-[70vh] flex items-end">
        <img
          src="/images/hero-casablanca-skyline.webp"
          alt="Casablanca skyline with the Hassan II Mosque and Atlantic Ocean at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container-morocco pb-12 md:pb-16 pt-32">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-white/70 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Casablanca</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Morocco&apos;s Economic Capital
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-display)] leading-tight mb-4">
              Casablanca Travel Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
              The city that defies every expectation. Morocco&apos;s largest metropolis is a
              dazzling collision of Art Deco grandeur, ocean-side mosques, Corniche nightlife,
              and a food scene that rivals anywhere on the continent.
            </p>
          </div>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-10">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
              >
                <fact.icon className="w-5 h-5 text-[#C4960C] mx-auto mb-1.5" />
                <p className="text-sm font-semibold text-white">{fact.value}</p>
                <p className="text-xs text-white/65">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="zellige-border absolute bottom-0 left-0 right-0" />
      </section>

      {/* ================================================================
          INTRODUCTION
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Compass className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Beyond the Movie, Beyond the Myth
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Casablanca is not the Casablanca you expect. It is something far more interesting.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[#1A1814]/70 leading-relaxed">
            <p>
              Most travelers arrive in Casablanca expecting the romantic, sepia-toned city of the
              1942 Humphrey Bogart film. What they find instead is Africa&apos;s most dynamic
              metropolis &mdash; a city of 3.7 million people that serves as Morocco&apos;s
              economic engine, architectural showcase, and cultural powerhouse. Casablanca is where
              Morocco&apos;s future is being built, and the energy is electric.
            </p>
            <p>
              The Hassan II Mosque, rising from a platform over the Atlantic Ocean with its
              210-meter minaret piercing the sky, is the most photographed monument in Morocco
              and one of the most extraordinary religious buildings on Earth. But Casablanca
              offers far more than its famous mosque. The city possesses one of the world&apos;s
              richest collections of Art Deco architecture &mdash; a legacy of its transformation
              during the French Protectorate from 1912 to 1956, when visionary architects used
              the city as a canvas for blending European modernism with Islamic decorative
              traditions. The result is a unique architectural heritage that UNESCO is currently
              evaluating for World Heritage status.
            </p>
            <p>
              Beyond the architecture, Casablanca pulses with a contemporary energy that other
              Moroccan cities cannot match. The Corniche seafront rivals any Mediterranean
              promenade, with beach clubs, sunset restaurants, and a nightlife scene that runs
              until dawn. The food ranges from spectacular 30-MAD grilled sardines at the port
              to Michelin-worthy fine dining in restored Art Deco villas. The Habous Quarter
              sells the finest pastries in Morocco. And the Al Boraq high-speed train puts
              Rabat 45 minutes away and Tangier just over two hours away.
            </p>
            <p>
              Casablanca is the Morocco that most travel guides overlook. This guide will show
              you why that is a mistake.
            </p>
          </div>

          {/* Brief History */}
          <div className="mt-12 card-moroccan p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                <BookOpen className="w-5 h-5 text-[#A0522D]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                A Brief History
              </h3>
            </div>
            <div className="space-y-3 text-[15px] text-[#1A1814]/70 leading-relaxed">
              <p>
                Casablanca&apos;s story is one of extraordinary transformation. For centuries,
                the site was a modest Berber settlement called Anfa, a minor port on the
                Atlantic coast that was destroyed by the Portuguese in 1468 and rebuilt as
                Casa Branca (White House) in the 16th century. The Arabs renamed it Dar el-Beida,
                which the Spanish transliterated back into the now-famous Casablanca.
              </p>
              <p>
                The city remained small until the French Protectorate era (1912-1956), when
                Marshal Lyautey and his visionary urban planner Henri Prost chose Casablanca
                as the economic showcase of French Morocco. Within four decades, the fishing
                village of 20,000 people was transformed into a modern metropolis of over a
                million, with the most ambitious architectural program in the colonial world.
                French architects were given unprecedented freedom to experiment, and the
                result was a city that blended Art Deco, Neo-Moorish, Streamline Moderne,
                and Brutalist architecture in ways never seen before or since.
              </p>
              <p>
                After independence in 1956, Casablanca continued to grow as Morocco&apos;s
                economic engine. King Hassan II&apos;s decision to build the world&apos;s
                third-largest mosque on the Atlantic waterfront in the 1980s gave the city
                its defining landmark. Today, with the Al Boraq high-speed train, the new
                Casablanca Finance City, and a booming cultural scene, Casablanca is
                experiencing another period of dramatic transformation &mdash; one that is
                finally earning this long-underappreciated city the attention it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TOP ATTRACTIONS
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Star className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Top Attractions in Casablanca
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              From the world&apos;s third-largest mosque to Art Deco masterpieces and Atlantic
              beaches, Casablanca offers a surprising depth of experiences for the curious traveler.
            </p>
          </div>

          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <article
                key={attraction.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={attraction.image}
                    alt={`${attraction.name} in Casablanca, Morocco`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#A0522D] text-white text-lg font-bold shadow-lg">
                      #{index + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                      <Star className="w-3 h-3 text-[#C4960C]" />
                      {attraction.rating}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-[#A0522D] uppercase tracking-wide">
                      {attraction.type} &middot; {attraction.duration} &middot; {attraction.cost}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-[#1A1814]/70 leading-relaxed text-[15px] mb-4">
                    {attraction.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-4 border-t border-[#EDE8E0]">
                    <h4 className="text-sm font-bold text-[#1A1814] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#A0522D]" />
                      Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {attraction.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-xs text-[#1A1814]/70"
                        >
                          <Star className="w-3 h-3 text-[#A0522D] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tip */}
                  <div className="mt-4 p-3 rounded-lg bg-[rgba(196,150,12,0.06)] border border-[rgba(196,150,12,0.15)]">
                    <p className="text-xs text-[#1A1814]/70">
                      <span className="font-bold text-[#C4960C]">Pro Tip:</span>{' '}
                      {attraction.tip}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          ART DECO WALKING TOUR
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Camera className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Art Deco Walking Tour
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Casablanca&apos;s Art Deco heritage rivals Miami Beach and Brussels. This self-guided
              walking tour covers the most remarkable buildings along Boulevard Mohammed V and the
              surrounding blocks &mdash; a journey through one of the 20th century&apos;s most
              ambitious urban experiments.
            </p>
          </div>

          <div className="space-y-6">
            {artDecoLandmarks.map((landmark, index) => (
              <article key={landmark.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#A0522D] text-white text-lg font-bold">
                      {index + 1}
                    </span>
                    <div className="md:hidden">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                        {landmark.name}
                      </h3>
                      <p className="text-xs text-[#A0522D] font-semibold">
                        {landmark.year} &middot; {landmark.style}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="hidden md:block mb-2">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                        {landmark.name}
                      </h3>
                      <p className="text-xs text-[#A0522D] font-semibold">
                        {landmark.year} &middot; {landmark.architect} &middot; {landmark.style}
                      </p>
                    </div>
                    <p className="text-[#1A1814]/70 leading-relaxed text-[15px]">
                      {landmark.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 p-6 card-moroccan bg-[rgba(196,150,12,0.04)] border border-[rgba(196,150,12,0.15)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C4960C] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-1">
                  Guided Tours
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Casamemoire, the local architectural preservation society, offers guided walking
                  tours on weekends (typically Saturday mornings, around 100 MAD). These tours provide
                  access to building interiors normally closed to the public and expert commentary on
                  the architectural and cultural history. Check their website or Facebook page for the
                  current schedule. Self-guided walking maps are also available for download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          NEIGHBORHOODS
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Building className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Casablanca&apos;s Neighborhoods
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              From the upscale villas of Anfa to the trendy cafes of Maarif and the beach clubs
              of Ain Diab, each neighborhood reveals a different side of Morocco&apos;s most
              multifaceted city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => {
              const Icon = neighborhood.icon;
              return (
                <article key={neighborhood.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                        {neighborhood.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#A0522D] uppercase tracking-wide">
                        {neighborhood.character}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#1A1814]/70 leading-relaxed text-[15px] mb-4">
                    {neighborhood.description}
                  </p>

                  <div className="pt-4 border-t border-[#EDE8E0]">
                    <h4 className="text-xs font-bold text-[#1A1814] uppercase tracking-wide mb-2">
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {neighborhood.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-xs text-[#1A1814]/70"
                        >
                          <Star className="w-3 h-3 text-[#C4960C] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-[#1A1814]/70 mt-3">
                      <span className="font-semibold text-[#1A1814]">Best for:</span>{' '}
                      {neighborhood.bestFor}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          FOOD & RESTAURANTS
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Utensils className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Casablanca Food Guide
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Morocco&apos;s largest city is also its best for eating. From 30-MAD sardines
              at the port to exquisite fusion dining in Art Deco villas, Casablanca&apos;s
              food scene is deep, diverse, and delicious.
            </p>
          </div>

          <div className="space-y-6">
            {foodHighlights.map((food) => {
              const FoodIcon = food.icon;
              return (
                <article key={food.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                      <FoodIcon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                      {food.name}
                    </h3>
                  </div>
                  <p className="text-[#1A1814]/70 leading-relaxed text-[15px] mb-4">
                    {food.description}
                  </p>
                  <div className="pt-4 border-t border-[#EDE8E0] flex items-start gap-2">
                    <Star className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#1A1814]/70">
                      <span className="font-semibold text-[#1A1814]">Must try:</span>{' '}
                      {food.mustTry}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          NIGHTLIFE & EVENING ENTERTAINMENT
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Music className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Casablanca After Dark
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Morocco&apos;s undisputed nightlife capital. From rooftop cocktail bars with
              panoramic views to Corniche nightclubs that pulse until dawn, Casablanca&apos;s
              after-dark scene is the most vibrant in North Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nightlifeVenues.map((venue) => (
              <article key={venue.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[#A0522D] uppercase tracking-wide">
                    {venue.type}
                  </span>
                  <span className="text-xs text-[#1A1814]/40">&middot;</span>
                  <span className="text-xs text-[#1A1814]/60">{venue.area}</span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-3">
                  {venue.name}
                </h3>
                <p className="text-[#1A1814]/70 leading-relaxed text-[15px] mb-4">
                  {venue.description}
                </p>
                <div className="pt-4 border-t border-[#EDE8E0] flex flex-col sm:flex-row gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#C4960C]" />
                    <span className="font-semibold text-[#1A1814]">{venue.priceRange}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs">
                    <Clock className="w-3.5 h-3.5 text-[#A0522D]" />
                    <span className="text-[#1A1814]/70">{venue.bestTime}</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          DAY TRIPS
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Compass className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Day Trips from Casablanca
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Casablanca&apos;s central location and excellent transport links make it an
              ideal base for exploring the Atlantic coast and Morocco&apos;s capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dayTrips.map((trip) => {
              const TripIcon = trip.icon;
              return (
                <article key={trip.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                      <TripIcon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                        {trip.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#A0522D]">
                        {trip.distance}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#1A1814]/70 leading-relaxed text-[15px] mb-4">
                    {trip.description}
                  </p>
                  <div className="pt-4 border-t border-[#EDE8E0]">
                    <p className="text-xs text-[#1A1814]/70">
                      <span className="font-bold text-[#C4960C]">Tip:</span> {trip.tip}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          GETTING TO CASABLANCA
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Plane className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Getting to Casablanca
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              As Morocco&apos;s main international gateway, Casablanca is exceptionally
              well-connected by air, rail, and road.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                  <Plane className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                  By Air
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Mohammed V International Airport (CMN) is Morocco&apos;s busiest airport, located
                30 km south of the city center. Royal Air Maroc, the national carrier, operates
                extensive international and domestic routes. Major European, Middle Eastern, and
                African carriers serve CMN. Direct flights connect to Paris, London, Madrid, Istanbul,
                Dubai, New York (JFK), Montreal, and dozens of other cities. The airport has two
                terminals, currency exchange, car rental desks, and an ONCF train station with
                hourly services to the city center (45 minutes, 70 MAD second class).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                  <Train className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                  By Train
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Casablanca is the hub of Morocco&apos;s rail network. The Al Boraq high-speed
                train reaches Tangier in 2 hours 10 minutes and Rabat in 45 minutes. Conventional
                ONCF trains connect to Marrakech (3.5 hours), Fes (4 hours), Meknes (3.5 hours),
                and Oujda (10 hours). Casa-Voyageurs is the main intercity station; Casa-Port
                serves regional and airport trains. Book Al Boraq tickets online at oncf.ma for
                the best prices. First class (around 249 MAD to Tangier) offers spacious seats,
                power outlets, and a quiet car.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                  <Car className="w-5 h-5 text-[#A0522D]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                  By Road
                </h3>
              </div>
              <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                Morocco&apos;s autoroute (toll highway) network converges on Casablanca. The A3
                connects to Rabat (1 hour), the A7 reaches Marrakech (2.5 hours), and the A2
                runs to Fes (3 hours via Meknes). CTM and Supratours operate comfortable
                intercity buses from the Gare Routiere Ouled Ziane station. Grand taxis also
                serve intercity routes from various departure points. For road trips, major
                international car rental companies operate at the airport and across the city.
                Driving in central Casablanca is challenging due to heavy traffic; parking can
                be difficult outside of structured lots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          GETTING AROUND
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Navigation className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Getting Around Casablanca
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Casablanca is a large city with notorious traffic, but the modern tram system,
              affordable taxis, and excellent rail connections make navigation straightforward.
            </p>
          </div>

          <div className="space-y-6">
            {transportOptions.map((transport) => {
              const TransIcon = transport.icon;
              return (
                <article key={transport.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(160,82,45,0.08)] shrink-0">
                      <TransIcon className="w-6 h-6 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                          {transport.name}
                        </h3>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[rgba(196,150,12,0.1)] text-xs font-semibold text-[#C4960C]">
                          {transport.cost}
                        </span>
                      </div>
                      <p className="text-[#1A1814]/70 leading-relaxed text-[15px]">
                        {transport.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          WHERE TO STAY
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Hotel className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Where to Stay in Casablanca
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Unlike Marrakech or Fes, Casablanca is a hotel city rather than a riad city.
              Your choice of neighborhood will shape your experience of the metropolis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationAreas.map((accommodation) => {
              const AccIcon = accommodation.icon;
              return (
                <article key={accommodation.area} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                      <AccIcon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[#1A1814]">
                      {accommodation.area}
                    </h3>
                  </div>
                  <p className="text-[#1A1814]/70 leading-relaxed text-[15px] mb-4">
                    {accommodation.description}
                  </p>
                  <div className="pt-4 border-t border-[#EDE8E0] flex flex-col sm:flex-row gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs">
                      <ShoppingBag className="w-3.5 h-3.5 text-[#C4960C]" />
                      <span className="font-semibold text-[#1A1814]">{accommodation.budget}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs">
                      <Heart className="w-3.5 h-3.5 text-[#A0522D]" />
                      <span className="text-[#1A1814]/70">
                        Best for: {accommodation.bestFor}
                      </span>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          CASABLANCA ESSENTIALS
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <BookOpen className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Casablanca Essentials
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Key things to know before you arrive. Understanding these cultural nuances and
              practical details will transform your experience of Morocco&apos;s metropolis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTips.map((tip) => {
              const EssIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)]">
                      <EssIcon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <h3 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-display)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          PRACTICAL TIPS
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Shield className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Practical Tips for Visiting Casablanca
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Essential advice to make your Casablanca visit smoother, safer, and more enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6 flex gap-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(160,82,45,0.08)] shrink-0">
                    <TipIcon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1A1814] font-[family-name:var(--font-display)] mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-[#1A1814]/70 leading-relaxed">{tip.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================================
          FEATURED IMAGES
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Camera className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Casablanca in Pictures
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              A visual journey through Morocco&apos;s largest and most dynamic city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                src: '/images/photo-hassan-ii-mosque.webp',
                alt: 'Hassan II Mosque rising above the Atlantic Ocean in Casablanca',
                caption: 'Hassan II Mosque',
              },
              {
                src: '/images/photo-casablanca-art-deco.webp',
                alt: 'Art Deco architecture along Boulevard Mohammed V in Casablanca',
                caption: 'Art Deco District',
              },
              {
                src: '/images/photo-ricks-cafe-casablanca.webp',
                alt: 'Rick\'s Cafe interior with grand piano and Moroccan arches in Casablanca',
                caption: "Rick's Cafe",
              },
              {
                src: '/images/photo-casablanca-corniche.webp',
                alt: 'Casablanca Corniche promenade along the Atlantic coast at sunset',
                caption: 'The Corniche',
              },
            ].map((photo) => (
              <div key={photo.src} className="group relative rounded-xl overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold text-white font-[family-name:var(--font-heading)]">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FAQ SECTION
          ================================================================ */}
      <section className="py-16 md:py-20 bg-[#EDE8E0]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[rgba(160,82,45,0.08)] mb-4">
              <Info className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[#1A1814] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#1A1814]/70 max-w-2xl mx-auto">
              Everything you need to know before visiting Casablanca, Morocco&apos;s
              largest and most dynamic city.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqJsonLd.mainEntity.map(
              (
                faq: {
                  name: string;
                  acceptedAnswer: { text: string };
                },
                index: number
              ) => (
                <div key={index} className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-3 flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(160,82,45,0.08)] text-[#A0522D] text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    {faq.name}
                  </h3>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed pl-10">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#A0522D] to-[#7a3e22]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Casablanca?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you come for the mosque, the architecture, the food, or the nightlife,
            Casablanca will surprise you at every turn. Morocco&apos;s greatest city is
            waiting to be explored.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[#A0522D] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore All Cities
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Plan Your Morocco Trip
            </Link>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ================================================================
          EXPLORE MORE
          ================================================================ */}
      <ExploreMore
        currentCategory="cities"
        currentHref="/casablanca"
        title="Continue Exploring Morocco"
      />
    </>
  );
}
