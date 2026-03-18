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
  ShieldCheck,
  CheckCircle,
  Users,
  Gem,
  Award,
  BookOpen,
  Crown,
  Waves,
  Sun,
  Wind,
  Leaf,
  Calendar,
  Tag,
  Globe,
  Lightbulb,
  Camera,
  AlertTriangle,
  Compass,
  Anchor,
  Umbrella,
  Thermometer,
  CloudSun,
  Navigation,
  Shell,
  Fish,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Beaches in Morocco 2026 | Top 15 Stunning Coastal Spots',
  description:
    'Discover the best beaches in Morocco from Atlantic surf spots to Mediterranean coves. Legzira, Taghazout, Essaouira, Dakhla, and more. Complete guide with water sports, safety tips, best season to visit, and insider recommendations.',
  keywords: [
    'best beaches Morocco',
    'Morocco beaches',
    'beaches in Morocco',
    'Morocco beach holiday',
    'Legzira beach Morocco',
    'Taghazout beach Morocco',
    'Essaouira beach',
    'Dakhla beach Morocco',
    'surfing Morocco',
    'Morocco surf beaches',
    'family beaches Morocco',
    'secluded beaches Morocco',
    'Morocco coast',
    'Atlantic beaches Morocco',
    'Mediterranean beaches Morocco',
    'Morocco beach guide 2026',
    'water sports Morocco',
    'best time for Morocco beaches',
    'Morocco beach safety',
    'Morocco coastal towns',
    'Agadir beach',
    'Saidia beach Morocco',
  ],
  openGraph: {
    title: 'Best Beaches in Morocco 2026 | Top 15 Stunning Coastal Spots',
    description:
      'From dramatic red arches at Legzira to world-class surf at Taghazout. The definitive guide to Morocco\'s 3,500 km coastline with 15 unmissable beaches, water sports, and practical tips.',
    url: `${BASE_URL}/best-beaches-morocco`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Beautiful Moroccan beach with golden sand, turquoise Atlantic waters, and dramatic coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Beaches in Morocco 2026 | Top 15 Stunning Coastal Spots',
    description:
      'Legzira, Taghazout, Essaouira, Dakhla, and 11 more incredible beaches. Surf spots, family coves, and hidden gems along Morocco\'s 3,500 km coastline.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/best-beaches-morocco` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/best-beaches-morocco`,
  name: 'Best Beaches in Morocco 2026 | Top 15 Stunning Coastal Spots',
  description:
    'Comprehensive guide to the best beaches in Morocco along the Atlantic and Mediterranean coasts. Surf spots, family beaches, secluded coves, and luxury beach resorts with water sports, safety tips, and seasonal recommendations.',
  url: `${BASE_URL}/best-beaches-morocco`,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/best-beaches-morocco`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Beaches in Morocco', item: `${BASE_URL}/best-beaches-morocco` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best beach in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legzira Beach near Sidi Ifni is widely considered the most spectacular beach in Morocco, famous for its dramatic red sandstone arches carved by centuries of ocean erosion. For surfing, Taghazout is the top destination with world-class point breaks. For a mix of beach, culture, and atmosphere, Essaouira beach offers the complete package with its medina backdrop and consistent wind for kitesurfing.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time to visit Moroccan beaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time for beach holidays in Morocco is June through September, when water temperatures reach 20 to 23 degrees Celsius and air temperatures are warm but moderated by Atlantic breezes. The Mediterranean coast (Saidia, Cabo Negro) is warmest from July to August. For surfing, the best swells arrive from October through March. Shoulder months of May and October offer fewer crowds and pleasant conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to swim at Moroccan beaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Swimming is generally safe at Morocco\'s supervised beaches, particularly at resort beaches in Agadir, Saidia, and Cabo Negro. However, the Atlantic coast has strong currents and undertows that can be dangerous for inexperienced swimmers. Always swim at beaches with lifeguards (indicated by red and green flags), avoid swimming alone, and respect local warnings about rip currents. Mediterranean beaches tend to have calmer waters suitable for families.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you surf in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is one of the best surf destinations in the world. The Atlantic coast between Agadir and Essaouira offers world-class point breaks, reef breaks, and beach breaks suitable for all levels. Taghazout is the epicenter of Moroccan surf culture, with consistent waves from September to April. Anchor Point near Taghazout produces long right-hand point breaks comparable to those in Indonesia or California. Surf camps offer lessons from 300 MAD per session.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear to the beach in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a moderate Muslim country and beach dress codes depend on location. At resort beaches in Agadir, Saidia, and hotel pools, standard Western swimwear is widely accepted. At public beaches in smaller towns, more modest swimwear is appreciated. Many Moroccan women swim in full clothing or modest swimwear. Topless sunbathing is not accepted anywhere in Morocco. When walking to and from the beach, cover up with a light layer as a sign of respect.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there beach resorts in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has several beach resort areas. Agadir is the largest beach resort destination, with a long promenade lined with international hotels from 800 MAD per night. Saidia on the Mediterranean coast is developing rapidly as a purpose-built resort area. Essaouira and Taghazout offer boutique beach accommodations. Dakhla is emerging as an exclusive kitesurfing and wellness destination with luxury eco-camps from 1,500 MAD per night.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is Morocco\'s coastline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has approximately 3,500 kilometers of coastline, split between the Atlantic Ocean to the west and the Mediterranean Sea to the north. The Atlantic coast stretches from Tangier down past Agadir to the southern regions of Dakhla and Laayoune. The Mediterranean coast runs from Tangier east to the Algerian border. This extensive coastline creates an enormous variety of beach landscapes, from rocky coves to endless sand dunes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What water sports are available at Moroccan beaches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers exceptional water sports opportunities. Surfing is the most popular, concentrated around Taghazout and Essaouira. Kitesurfing thrives in Dakhla, Essaouira, and Sidi Kaouki, where consistent trade winds create ideal conditions. Windsurfing is popular at Moulay Bousselham and Essaouira. Stand-up paddleboarding is available at calmer beaches in Agadir and Saidia. Scuba diving is offered at Al Hoceima and along the Mediterranean coast. Jet skiing and parasailing are available at resort beaches in Agadir.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 15 BEACHES
   ═══════════════════════════════════════════════════════════════ */

const topBeaches = [
  {
    name: 'Legzira Beach',
    location: 'Near Sidi Ifni, Southern Atlantic Coast',
    type: 'Dramatic scenery',
    description:
      'Legzira is Morocco\'s most iconic beach, defined by towering red and ochre sandstone arches that have been sculpted over millennia by the relentless Atlantic waves. The beach stretches for several kilometers of golden-red sand, framed by dramatic cliffs that glow with warm tones at sunset. Although one of the most famous arches collapsed in 2016, the remaining formations remain breathtaking. The beach is relatively uncrowded compared to northern resort destinations, and the surrounding area retains an authentic, undeveloped charm. The waters here are powerful and best suited for experienced swimmers. At low tide, you can walk along the base of the cliffs to explore sea caves and tidal pools teeming with marine life.',
    image: '/images/hero-essaouira.webp',
    highlights: ['Iconic red sandstone arches', 'Spectacular sunset colors', 'Sea caves at low tide', 'Relatively uncrowded'],
    bestFor: 'Photography, nature lovers, sunset seekers',
    waterTemp: '17-21 C',
    bestMonths: 'May to October',
  },
  {
    name: 'Taghazout Beach',
    location: 'Taghazout, 20 km north of Agadir',
    type: 'Surfing',
    description:
      'Taghazout has evolved from a sleepy fishing village into Morocco\'s undisputed surf capital, drawing wave riders from around the world to its collection of world-class breaks. The main beach offers consistent waves for intermediate and advanced surfers, while nearby spots like Anchor Point, Panoramas, and Devil\'s Rock provide variety for every ability level. The village atmosphere remains remarkably authentic despite its growing fame, with surf shops and cafes lining narrow streets that spill onto the golden sand. Surf camps offer all-inclusive packages with lessons, accommodation, and yoga from 800 MAD per day. Beyond surfing, the surrounding coastline offers secluded coves accessible by coastal walks, and the nearby Paradise Valley provides a freshwater swimming alternative in lush canyon pools.',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['World-class surf breaks', 'Vibrant surf village atmosphere', 'Surf camps from 800 MAD per day', 'Paradise Valley nearby'],
    bestFor: 'Surfers, backpackers, yoga enthusiasts',
    waterTemp: '17-22 C',
    bestMonths: 'September to April for surf, June to August for swimming',
  },
  {
    name: 'Essaouira Beach',
    location: 'Essaouira, Central Atlantic Coast',
    type: 'Wind sports & culture',
    description:
      'Essaouira\'s sweeping crescent beach stretches for several kilometers south from the historic fortified medina, offering a unique combination of beach life and cultural immersion that no other Moroccan beach can match. The consistent Atlantic trade winds that earned the city its ancient name of Mogador, meaning "the well-guarded," make this one of the best wind sports destinations in Africa. Kitesurfers and windsurfers fill the southern section of the beach, while the area near the medina walls is popular for football, camel rides, and leisurely walks. The beach is backed by sand dunes and argan groves, and the views of the medina ramparts and Mogador Island from the sand are postcard-perfect. Water temperatures are cool year-round due to the Canary Current, making a wetsuit advisable even in summer.',
    image: '/images/hero-essaouira.webp',
    highlights: ['Kitesurfing and windsurfing capital', 'Historic medina backdrop', 'Camel rides on the beach', 'Year-round wind sports'],
    bestFor: 'Kitesurfers, culture lovers, photographers',
    waterTemp: '16-21 C',
    bestMonths: 'April to November for wind sports, June to September for beach',
  },
  {
    name: 'Dakhla Beach',
    location: 'Dakhla, Southern Saharan Coast',
    type: 'Kitesurfing & adventure',
    description:
      'Dakhla sits on a narrow peninsula jutting into the Atlantic, creating a vast lagoon of shallow, warm, turquoise water that has become one of the world\'s premier kitesurfing destinations. The lagoon\'s flat water and steady winds create ideal conditions for beginners and freestyle riders, while the ocean side delivers powerful waves for experienced kiters. Beyond kitesurfing, Dakhla offers a truly remote and otherworldly landscape where the Sahara Desert meets the Atlantic Ocean. White sand dunes cascade into turquoise waters, flamingos wade in shallow lagoons, and the night sky blazes with stars unmarred by light pollution. Eco-lodges and kite camps have sprung up along the lagoon, offering sustainable accommodation from 1,500 MAD per night with full-board and kitesurfing packages.',
    image: '/images/hero-essaouira-port.webp',
    highlights: ['World-class kitesurfing lagoon', 'Sahara meets the Atlantic', 'Flamingos and wildlife', 'Eco-lodge accommodation'],
    bestFor: 'Kitesurfers, adventure travelers, nature enthusiasts',
    waterTemp: '18-23 C',
    bestMonths: 'March to November for kitesurfing, year-round for beach',
  },
  {
    name: 'Sidi Kaouki Beach',
    location: 'Sidi Kaouki, 25 km south of Essaouira',
    type: 'Relaxation & surf',
    description:
      'Sidi Kaouki is what Taghazout was twenty years ago: a quiet, windswept beach village with a handful of surf camps, a legendary marabout shrine on the rocks, and an atmosphere of complete tranquility. The long, wide beach attracts surfers who find Essaouira too crowded, as well as travelers seeking solitude and simplicity. The waves are consistent and forgiving, making this an excellent spot for beginner and intermediate surfers. The village has a small but growing collection of guesthouses, surf camps, and beachfront cafes serving fresh fish and tagines. Horseback riding along the beach at sunset is a highlight, and the absence of mass tourism means you can often have large stretches of sand entirely to yourself. A new yoga and wellness scene is emerging, drawing those seeking digital detox and connection with nature.',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['Uncrowded and peaceful', 'Excellent beginner surf spot', 'Horseback riding on the beach', 'Yoga and wellness retreats'],
    bestFor: 'Surfers, solitude seekers, yoga practitioners',
    waterTemp: '16-21 C',
    bestMonths: 'May to October for beach, year-round for surf',
  },
  {
    name: 'Oualidia Beach',
    location: 'Oualidia, between El Jadida and Safi',
    type: 'Family & lagoon',
    description:
      'Oualidia is Morocco\'s best-kept coastal secret: a sheltered crescent-shaped lagoon where calm, warm waters lap against golden sand, protected from the open Atlantic by a natural sandbar. This makes it the safest and most family-friendly beach destination in the country, where even small children can paddle and swim without fear of currents or strong waves. The lagoon is famous for its oyster farms, and eating freshly harvested oysters with lemon and a glass of wine at one of the waterside shacks is a quintessential Moroccan coast experience. At high tide, the lagoon fills and creates a natural swimming pool of extraordinary beauty. The surrounding cliffs are dotted with elegant small hotels and a royal palace, lending the area an exclusive but relaxed atmosphere.',
    image: '/images/hero-essaouira.webp',
    highlights: ['Sheltered lagoon with calm waters', 'Famous oyster farms', 'Safest swimming beach in Morocco', 'Royal palace and exclusive atmosphere'],
    bestFor: 'Families, food lovers, couples seeking tranquility',
    waterTemp: '17-22 C',
    bestMonths: 'June to September',
  },
  {
    name: 'Mirleft Beach',
    location: 'Mirleft, between Tiznit and Sidi Ifni',
    type: 'Secluded & scenic',
    description:
      'Mirleft is a cluster of several stunning beaches tucked into rocky coves along one of the most dramatic stretches of Morocco\'s southern Atlantic coast. Each beach has its own character: some are wide expanses of golden sand, others are intimate crescents framed by volcanic cliffs. A ruined French fort perches on the cliffs above, adding a romantic, timeless quality to the landscape. The town itself is small and charming, with a growing community of artists, surfers, and expats who have been drawn by the beauty and affordability of this overlooked region. Beach access sometimes requires short scrambles down clifftop paths, which helps keep the crowds away. The sunsets here, with the sun sinking into the Atlantic beyond the silhouetted cliffs, are among the most dramatic in Morocco.',
    image: '/images/hero-essaouira-port.webp',
    highlights: ['Multiple secluded cove beaches', 'Dramatic cliff scenery', 'Ruined French fort above the beach', 'Growing artsy village'],
    bestFor: 'Adventure seekers, couples, off-the-beaten-path travelers',
    waterTemp: '17-22 C',
    bestMonths: 'May to October',
  },
  {
    name: 'Asilah Beach',
    location: 'Asilah, Northern Atlantic Coast',
    type: 'Culture & beach',
    description:
      'Asilah pairs a beautiful Atlantic beach with one of Morocco\'s most charming whitewashed medinas, creating a coastal destination that appeals equally to beach lovers and culture seekers. The main beach stretches south from the medina walls, with golden sand and gentle waves that are relatively calm by Atlantic standards. The medina is famous for its street murals and annual arts festival, and the contrast of the white-and-blue painted walls against the beach and ocean creates a distinctly artistic atmosphere. Asilah is popular with Moroccan families during summer weekends, giving it a lively, authentic energy that tourist-oriented resorts lack. The surrounding coast features several quieter beaches accessible by car, including the beautiful Paradise Beach to the south. Fresh seafood restaurants along the harbor front serve grilled fish and calamari at excellent prices.',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['Whitewashed medina with street murals', 'Annual arts festival', 'Calm waters for families', 'Excellent seafood restaurants'],
    bestFor: 'Culture lovers, families, art enthusiasts',
    waterTemp: '17-22 C',
    bestMonths: 'June to September',
  },
  {
    name: 'Moulay Bousselham Beach',
    location: 'Moulay Bousselham, Kenitra Province',
    type: 'Nature & lagoon',
    description:
      'Moulay Bousselham is where Morocco\'s Merja Zerga lagoon, a Ramsar-designated wetland of international importance, meets the Atlantic Ocean. The beach is long, wild, and largely undeveloped, stretching for kilometers in both directions from the small fishing village. The lagoon behind the beach is a birdwatcher\'s paradise, home to hundreds of species including flamingos, spoonbills, and rare marsh harriers, especially during migration season from October to March. Local fishermen offer boat tours of the lagoon at sunset, gliding past reed beds and sand islands in traditional wooden boats. The beach itself is popular with windsurfers due to the consistent winds funneled between the lagoon and the ocean. The village has a handful of simple guesthouses and fish restaurants serving the day\'s catch, maintaining an atmosphere of genuine coastal Moroccan life far from any tourist infrastructure.',
    image: '/images/hero-essaouira.webp',
    highlights: ['Merja Zerga lagoon and birdwatching', 'Flamingos and rare bird species', 'Authentic fishing village', 'Sunset lagoon boat tours'],
    bestFor: 'Birdwatchers, nature lovers, eco-travelers',
    waterTemp: '16-21 C',
    bestMonths: 'October to March for birdwatching, June to September for beach',
  },
  {
    name: 'Agadir Beach',
    location: 'Agadir, Central Atlantic Coast',
    type: 'Resort & family',
    description:
      'Agadir boasts Morocco\'s longest and most developed urban beach: a sweeping 10-kilometer crescent of golden sand backed by a modern promenade lined with hotels, restaurants, and cafes. Rebuilt entirely after the devastating 1960 earthquake, Agadir has a distinctly modern character unlike any other Moroccan city. The beach is well-maintained with sun loungers from 30 MAD per day, clean facilities, and lifeguards on duty throughout the summer season. The gentle slope into the ocean and moderate waves make it one of the safest Atlantic beaches for swimming and ideal for families with children. The corniche promenade is perfect for evening walks, and the marina area offers upscale dining and boat trips. While Agadir lacks the historic charm of Essaouira or the surf credibility of Taghazout, it delivers reliable sunshine with over 300 sunny days per year and the most complete beach resort infrastructure in Morocco.',
    image: '/images/hero-essaouira-port.webp',
    highlights: ['10 km of golden sand', 'Over 300 sunny days per year', 'Full resort infrastructure', 'Safe swimming for families'],
    bestFor: 'Families, resort holidaymakers, winter sun seekers',
    waterTemp: '17-22 C',
    bestMonths: 'Year-round, peak June to September',
  },
  {
    name: 'Cabo Negro Beach',
    location: 'Cabo Negro, near Tetouan, Mediterranean Coast',
    type: 'Mediterranean luxury',
    description:
      'Cabo Negro is one of Morocco\'s most exclusive Mediterranean beach destinations, set along a beautiful stretch of coastline east of Tetouan. The beach features fine white sand and calm, warm Mediterranean waters that are warmer and clearer than the Atlantic coast. The area has attracted upscale development including golf courses, yacht clubs, and stylish beach clubs that cater to Moroccan and European holidaymakers. The surrounding pine-forested hills add a green backdrop that sets it apart from the arid landscapes typical of Moroccan beach destinations. During July and August, Cabo Negro buzzes with a sophisticated summer atmosphere, with beach parties, live music, and a social scene centered around the marina. The nearby Tamuda Bay has become a hub for luxury hotel brands. Outside of summer, the beach is peaceful and nearly deserted, offering a serene escape.',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['Warm Mediterranean waters', 'Upscale beach clubs', 'Golf courses and marina', 'Pine-forested hills backdrop'],
    bestFor: 'Luxury travelers, golfers, Mediterranean beach lovers',
    waterTemp: '19-25 C',
    bestMonths: 'June to September',
  },
  {
    name: 'Mehdia Beach',
    location: 'Mehdia, near Kenitra, Atlantic Coast',
    type: 'Surf & local culture',
    description:
      'Mehdia is one of central Morocco\'s most popular surf beaches, located just minutes from the city of Kenitra and within easy reach of Rabat. The beach offers consistent beach breaks that work across a range of tide and swell conditions, making it a reliable spot when other breaks are flat. The Kasbah of Mehdia, a historic fortress built on the cliffs above the beach, provides a dramatic and photogenic backdrop that elevates the scenery beyond a typical surf break. The beach is hugely popular with Moroccan surfers and families on weekends, creating an energetic and authentically local atmosphere. Several surf schools operate from the beach, offering lessons from 300 MAD per session. The river mouth at the northern end of the beach creates a natural break that is particularly good for beginners. A small collection of cafes along the beach road serves excellent grilled fish sandwiches and fresh juice.',
    image: '/images/hero-essaouira.webp',
    highlights: ['Consistent surf breaks', 'Historic Kasbah backdrop', 'Popular with local surfers', 'Surf lessons from 300 MAD'],
    bestFor: 'Surfers, day-trippers from Rabat, local beach culture',
    waterTemp: '16-21 C',
    bestMonths: 'Year-round for surf, June to September for beach',
  },
  {
    name: 'Saidia Beach',
    location: 'Saidia, Eastern Mediterranean Coast',
    type: 'Mediterranean resort',
    description:
      'Saidia, often called the "Blue Pearl" of Morocco, boasts 14 kilometers of fine golden sand along the Mediterranean coast near the Algerian border. The beach is one of the warmest and calmest in Morocco, with Mediterranean waters that reach 25 degrees Celsius in summer and gentle waves ideal for swimming and paddling. The Moroccan government has invested heavily in developing Saidia as a major tourism destination, with a purpose-built marina, golf courses, waterparks, and international hotel chains. The result is Morocco\'s most complete beach resort after Agadir, but with warmer water and a Mediterranean rather than Atlantic character. The marina hosts sailing events and offers boat trips along the coast. The Moulouya River estuary nearby is a protected nature reserve home to diverse birdlife. Outside the resort zone, the old town of Saidia retains an authentic Moroccan character with traditional markets and restaurants.',
    image: '/images/hero-essaouira-port.webp',
    highlights: ['14 km of golden sand', 'Warmest waters in Morocco', 'Marina with sailing facilities', 'Waterparks and family activities'],
    bestFor: 'Families, Mediterranean holiday seekers, water sports',
    waterTemp: '19-25 C',
    bestMonths: 'June to September',
  },
  {
    name: 'Paradise Beach (Plage Rmilate)',
    location: 'Near Asilah, Northern Atlantic Coast',
    type: 'Secluded & natural',
    description:
      'Paradise Beach, known locally as Plage Rmilate, lives up to its name: a pristine crescent of white sand enclosed by forested cliffs, accessible only by a winding dirt road through cork oak and eucalyptus woodland. The beach feels worlds apart from civilization, despite being just 20 minutes from Asilah. The water is startlingly clear by Atlantic standards, with turquoise hues that rival Mediterranean beaches. Natural shade is provided by the surrounding forest, and the cliffs create a sense of privacy and seclusion. During weekdays outside of summer, you may have the entire beach to yourself. In July and August, local families arrive to enjoy the sheltered waters, but it never feels overcrowded. There are no permanent facilities on the beach, so bring water, food, and a shade canopy. The surrounding forest is excellent for walking and mountain biking, and wild camping is tolerated in the woods above the beach.',
    image: '/images/hero-essaouira-ramparts.webp',
    highlights: ['Pristine white sand in forested cove', 'Clear turquoise waters', 'Natural shade from forest canopy', 'Peaceful and uncrowded'],
    bestFor: 'Nature lovers, couples, wild camping enthusiasts',
    waterTemp: '17-22 C',
    bestMonths: 'June to September',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACHES BY TYPE
   ═══════════════════════════════════════════════════════════════ */

const beachesByType = [
  {
    category: 'Best Beaches for Surfing',
    icon: Waves,
    description: 'Morocco is a world-class surf destination. The Atlantic coast delivers consistent swells from September to April, with water temperatures requiring a 3/2 wetsuit in winter and a shorty in summer.',
    beaches: [
      { name: 'Taghazout', reason: 'The surf capital of Morocco. Anchor Point offers one of the longest right-hand point breaks in Africa. Multiple breaks for all levels within walking distance.' },
      { name: 'Sidi Kaouki', reason: 'Consistent, forgiving beach breaks ideal for beginners and intermediates. Less crowded than Taghazout with a mellower atmosphere.' },
      { name: 'Mehdia', reason: 'Central Morocco\'s best surf beach with reliable beach breaks. River mouth section excellent for learning. Easy day trip from Rabat.' },
      { name: 'Imsouane', reason: 'Home to the longest wave in Morocco, a gentle right-hand point break that can ride for over 800 meters on a big swell. Perfect for longboarders.' },
      { name: 'Essaouira', reason: 'Consistent beach breaks south of the medina. More wind than Taghazout but great for combined surf and cultural trips.' },
    ],
  },
  {
    category: 'Best Beaches for Families',
    icon: Users,
    description: 'Family beaches need calm waters, lifeguards, clean facilities, and nearby amenities. Morocco\'s lagoons and Mediterranean beaches are the best choices for families with children.',
    beaches: [
      { name: 'Oualidia Lagoon', reason: 'The safest swimming in Morocco. Sheltered lagoon with calm, shallow water perfect for children. Oyster farms add a culinary dimension for parents.' },
      { name: 'Agadir', reason: 'Full resort infrastructure with lifeguards, sun loungers, clean facilities, and gentle waves. Hotels with kids clubs line the beach.' },
      { name: 'Saidia', reason: 'Warm Mediterranean water, waterparks, and purpose-built resort facilities. The gentlest waves in Morocco make it ideal for toddlers.' },
      { name: 'Cabo Negro', reason: 'Calm Mediterranean waters with beach clubs offering children\'s activities. Pine forests behind the beach provide shade for picnics.' },
      { name: 'Asilah', reason: 'Moderate Atlantic waves, wide sandy beach, and a charming medina for cultural outings between beach sessions. Popular with Moroccan families.' },
    ],
  },
  {
    category: 'Best Secluded Beaches',
    icon: Compass,
    description: 'Morocco still has wild, uncrowded beaches where you can walk for kilometers without seeing another person. Most are on the southern Atlantic coast, far from major cities.',
    beaches: [
      { name: 'Paradise Beach', reason: 'Hidden in a forested cove near Asilah with no permanent facilities. Pristine white sand and turquoise water accessible only by dirt road.' },
      { name: 'Mirleft Coves', reason: 'Multiple secluded beaches tucked into dramatic cliff formations. Short scrambles down clifftop paths keep the crowds away.' },
      { name: 'Sidi Kaouki', reason: 'Long stretches of empty beach south of the village. Walk ten minutes from the surf camps and you are alone with the Atlantic.' },
      { name: 'Legzira', reason: 'Despite its fame, Legzira remains relatively uncrowded due to its remote location. Explore sea caves at low tide in solitude.' },
      { name: 'Moulay Bousselham', reason: 'Wild, undeveloped beach stretching for kilometers. The lagoon side offers peaceful boat rides through reed beds and bird sanctuaries.' },
    ],
  },
  {
    category: 'Best Luxury Beach Experiences',
    icon: Crown,
    description: 'For travelers seeking refined beach experiences with high-end accommodation, fine dining, and polished service, these destinations deliver coastal luxury Moroccan-style.',
    beaches: [
      { name: 'Cabo Negro / Tamuda Bay', reason: 'Morocco\'s most luxurious Mediterranean coast. Five-star hotels, golf courses, and sophisticated beach clubs with international standards.' },
      { name: 'Dakhla Eco-Lodges', reason: 'Exclusive eco-camps on a remote lagoon where the Sahara meets the Atlantic. All-inclusive kitesurfing and wellness packages from 1,500 MAD per night.' },
      { name: 'Agadir Sofitel & Fairmont', reason: 'International luxury hotel brands on a pristine beach with pools, spas, and fine dining. The most polished resort experience in Morocco.' },
      { name: 'Oualidia La Sultana', reason: 'A boutique luxury hotel overlooking the lagoon, known for its oyster bar, infinity pool, and exclusive atmosphere.' },
      { name: 'Essaouira Beach Hotels', reason: 'Boutique riads and hotels where Atlantic surf culture meets refined Moroccan design. Beach horseback riding and sunset cocktails on the ramparts.' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME FOR BEACHES
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Leaf,
    airTemp: '18-25 C',
    waterTemp: '16-19 C',
    description: 'Pleasant air temperatures with cool water. Ideal for beach walking, surfing, and coastal exploration. Wildflowers bloom along cliff paths. Crowds are minimal and accommodation prices are lower. A wetsuit is essential for swimming on the Atlantic coast.',
    bestFor: 'Surfing, coastal hiking, photography, birdwatching',
    rating: 'Good',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    airTemp: '25-35 C',
    waterTemp: '19-23 C',
    description: 'Peak beach season with the warmest water and air temperatures. Atlantic beaches benefit from cooling trade winds. Mediterranean beaches (Saidia, Cabo Negro) reach their warmest at 25 degrees. This is the busiest period, especially during July and August when Moroccan families flock to the coast. Book accommodation well in advance.',
    bestFor: 'Swimming, family beach holidays, Mediterranean coast',
    rating: 'Excellent',
  },
  {
    season: 'Autumn (September - November)',
    icon: CloudSun,
    airTemp: '20-28 C',
    waterTemp: '19-22 C',
    description: 'The sweet spot for beach holidays in Morocco. Water temperatures remain warm from summer heat retention while crowds thin significantly after the Moroccan school holiday ends in September. Surf season begins with the first Atlantic swells arriving in October. September is arguably the best single month for Morocco beaches overall.',
    bestFor: 'Surfing, swimming, kitesurfing, fewer crowds',
    rating: 'Excellent',
  },
  {
    season: 'Winter (December - February)',
    icon: Wind,
    airTemp: '14-20 C',
    waterTemp: '15-18 C',
    description: 'Cold water and shorter days make this off-season for beach holidays, but prime time for surfing. The Atlantic coast receives powerful swells that create world-class waves. Agadir remains warm and sunny, earning its reputation as a winter sun destination. Dakhla offers kitesurfing year-round. Not recommended for beach swimming except at Agadir and points south.',
    bestFor: 'Surfing, winter sun in Agadir, kitesurfing in Dakhla',
    rating: 'Surf season',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WATER SPORTS
   ═══════════════════════════════════════════════════════════════ */

const waterSports = [
  {
    sport: 'Surfing',
    icon: Waves,
    description: 'Morocco is one of the world\'s top surf destinations, with consistent Atlantic swells from September to April producing world-class waves. The coastline between Agadir and Essaouira is the epicenter, with Taghazout and Imsouane offering the most celebrated breaks.',
    locations: 'Taghazout, Imsouane, Sidi Kaouki, Mehdia, Essaouira',
    price: 'From 300 MAD per lesson, from 800 MAD per day at surf camps',
    season: 'September to April for best swells, year-round for beginners',
  },
  {
    sport: 'Kitesurfing',
    icon: Wind,
    description: 'Morocco\'s consistent trade winds and flat-water lagoons make it a premier kitesurfing destination. Dakhla\'s vast lagoon is world-renowned, while Essaouira and Sidi Kaouki offer wind sport conditions combined with cultural attractions.',
    locations: 'Dakhla, Essaouira, Sidi Kaouki, Moulay Bousselham',
    price: 'From 500 MAD per lesson, from 1,200 MAD per day at kite camps',
    season: 'March to November in Dakhla, April to September in Essaouira',
  },
  {
    sport: 'Windsurfing',
    icon: Navigation,
    description: 'The same trade winds that make Morocco excellent for kitesurfing also create ideal windsurfing conditions. Essaouira has been a windsurfing destination since the 1980s, and the sport maintains a loyal following alongside its kitesurfing sibling.',
    locations: 'Essaouira, Moulay Bousselham, Dakhla, Sidi Kaouki',
    price: 'From 400 MAD per lesson, equipment rental from 250 MAD per hour',
    season: 'April to October',
  },
  {
    sport: 'Stand-Up Paddleboarding',
    icon: Anchor,
    description: 'SUP has grown rapidly in Morocco, with calm lagoons and sheltered beaches offering ideal conditions for beginners. Oualidia lagoon, Agadir beach, and Saidia provide the flattest water. Dawn sessions before the wind picks up are magical.',
    locations: 'Oualidia, Agadir, Saidia, Dakhla lagoon, Asilah',
    price: 'From 150 MAD per hour rental, from 300 MAD per lesson',
    season: 'Year-round in sheltered areas, mornings best before wind',
  },
  {
    sport: 'Scuba Diving & Snorkeling',
    icon: Fish,
    description: 'The Mediterranean coast offers the clearest waters for diving, with visibility reaching 20 meters at sites around Al Hoceima and Cabo Negro. Atlantic diving is possible at sheltered sites near Essaouira and Agadir, though visibility is more variable.',
    locations: 'Al Hoceima, Cabo Negro, Essaouira (Mogador Island), Agadir',
    price: 'From 500 MAD per dive, from 200 MAD for snorkeling trips',
    season: 'June to October for best visibility',
  },
  {
    sport: 'Jet Skiing & Parasailing',
    icon: Sparkles,
    description: 'Motorized water sports are available at the larger resort beaches, primarily Agadir and Saidia. These offer an adrenaline-fueled alternative to wind-powered sports, with jet ski rentals and parasailing rides available directly from the beach.',
    locations: 'Agadir, Saidia, Cabo Negro marina',
    price: 'From 400 MAD per 30-minute jet ski rental, from 300 MAD per parasail ride',
    season: 'June to September',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACH SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    title: 'Understand Atlantic Currents',
    icon: AlertTriangle,
    description:
      'The Atlantic coast of Morocco has powerful rip currents that can sweep even strong swimmers out to sea. Learn to identify rip currents, which appear as darker, choppier channels of water flowing away from shore. If caught in a rip, swim parallel to the beach until you escape the current, then swim back to shore. Never try to swim directly against a rip current.',
  },
  {
    title: 'Swim at Supervised Beaches',
    icon: ShieldCheck,
    description:
      'Supervised beaches display flag systems: green means safe to swim, yellow means caution with moderate conditions, and red means swimming is prohibited due to dangerous conditions. Lifeguards are on duty at major beaches from June to September. Avoid swimming at unsupervised beaches unless you are a confident ocean swimmer who understands local conditions.',
  },
  {
    title: 'Protect Against Sun Exposure',
    icon: Sun,
    description:
      'Morocco\'s sun is intense, especially on the coast where reflected light from the water and sand increases UV exposure. Apply SPF 50 sunscreen every two hours and after swimming. The hours between 12 pm and 3 pm are the most dangerous for sunburn. Wear a wide-brimmed hat and UV-protective sunglasses. Sunburn can occur even on overcast days due to Morocco\'s latitude.',
  },
  {
    title: 'Stay Hydrated',
    icon: Thermometer,
    description:
      'Combination of heat, sun, wind, and salt water leads to rapid dehydration at Moroccan beaches. Bring at least 2 liters of water per person per day. Avoid excessive alcohol consumption in the heat. Signs of heat exhaustion include dizziness, headache, and nausea. Seek shade and hydrate immediately if you experience these symptoms.',
  },
  {
    title: 'Watch for Sea Urchins and Jellyfish',
    icon: Shell,
    description:
      'Sea urchins are common on rocky sections of Moroccan beaches, particularly on the Atlantic coast. Wear water shoes when entering the water from rocky areas. Jellyfish appear periodically, especially in late summer on the Mediterranean coast. If stung, rinse with vinegar or salt water (never fresh water) and seek medical attention for severe reactions.',
  },
  {
    title: 'Secure Your Belongings',
    icon: Globe,
    description:
      'Petty theft can occur at busy beaches, particularly at Agadir, Essaouira, and popular urban beaches. Never leave valuables unattended on the beach. Use waterproof phone pouches if swimming. Leave expensive jewelry at your accommodation. At quieter beaches, the risk is lower, but basic precautions are always sensible.',
  },
  {
    title: 'Respect Local Customs',
    icon: Heart,
    description:
      'Morocco is a moderate Muslim country. At resort beaches in Agadir and Saidia, standard swimwear is accepted. At public beaches in smaller towns, more modest beachwear is appreciated. Topless sunbathing is not accepted anywhere in Morocco. When walking to and from the beach, cover up with a light garment as a courtesy.',
  },
  {
    title: 'Know Emergency Numbers',
    icon: Info,
    description:
      'Save these numbers before heading to the beach: Police 19, Fire and ambulance 15, Gendarmerie (rural areas) 177. The coast guard can be reached through 177 for marine emergencies. Many beaches have emergency phone numbers posted at lifeguard stations. Download offline maps before visiting remote beaches where mobile signal may be limited.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best beach in Morocco?',
    answer:
      'Legzira Beach near Sidi Ifni is widely considered the most spectacular beach in Morocco, famous for its dramatic red sandstone arches carved by centuries of ocean erosion. For surfing, Taghazout is the top destination with world-class point breaks. For a mix of beach, culture, and atmosphere, Essaouira beach offers the complete package with its medina backdrop and consistent wind for kitesurfing.',
  },
  {
    question: 'When is the best time to visit Moroccan beaches?',
    answer:
      'The best time for beach holidays in Morocco is June through September, when water temperatures reach 20 to 23 degrees Celsius and air temperatures are warm but moderated by Atlantic breezes. The Mediterranean coast (Saidia, Cabo Negro) is warmest from July to August. For surfing, the best swells arrive from October through March. Shoulder months of May and October offer fewer crowds and pleasant conditions.',
  },
  {
    question: 'Is it safe to swim at Moroccan beaches?',
    answer:
      'Swimming is generally safe at Morocco\'s supervised beaches, particularly at resort beaches in Agadir, Saidia, and Cabo Negro. However, the Atlantic coast has strong currents and undertows that can be dangerous for inexperienced swimmers. Always swim at beaches with lifeguards (indicated by red and green flags), avoid swimming alone, and respect local warnings about rip currents. Mediterranean beaches tend to have calmer waters suitable for families.',
  },
  {
    question: 'Can you surf in Morocco?',
    answer:
      'Morocco is one of the best surf destinations in the world. The Atlantic coast between Agadir and Essaouira offers world-class point breaks, reef breaks, and beach breaks suitable for all levels. Taghazout is the epicenter of Moroccan surf culture, with consistent waves from September to April. Anchor Point near Taghazout produces long right-hand point breaks comparable to those in Indonesia or California. Surf camps offer lessons from 300 MAD per session.',
  },
  {
    question: 'What should I wear to the beach in Morocco?',
    answer:
      'Morocco is a moderate Muslim country and beach dress codes depend on location. At resort beaches in Agadir, Saidia, and hotel pools, standard Western swimwear is widely accepted. At public beaches in smaller towns, more modest swimwear is appreciated. Many Moroccan women swim in full clothing or modest swimwear. Topless sunbathing is not accepted anywhere in Morocco. When walking to and from the beach, cover up with a light layer as a sign of respect.',
  },
  {
    question: 'Are there beach resorts in Morocco?',
    answer:
      'Yes, Morocco has several beach resort areas. Agadir is the largest beach resort destination, with a long promenade lined with international hotels from 800 MAD per night. Saidia on the Mediterranean coast is developing rapidly as a purpose-built resort area. Essaouira and Taghazout offer boutique beach accommodations. Dakhla is emerging as an exclusive kitesurfing and wellness destination with luxury eco-camps from 1,500 MAD per night.',
  },
  {
    question: 'How long is Morocco\'s coastline?',
    answer:
      'Morocco has approximately 3,500 kilometers of coastline, split between the Atlantic Ocean to the west and the Mediterranean Sea to the north. The Atlantic coast stretches from Tangier down past Agadir to the southern regions of Dakhla and Laayoune. The Mediterranean coast runs from Tangier east to the Algerian border. This extensive coastline creates an enormous variety of beach landscapes, from rocky coves to endless sand dunes.',
  },
  {
    question: 'What water sports are available at Moroccan beaches?',
    answer:
      'Morocco offers exceptional water sports opportunities. Surfing is the most popular, concentrated around Taghazout and Essaouira. Kitesurfing thrives in Dakhla, Essaouira, and Sidi Kaouki, where consistent trade winds create ideal conditions. Windsurfing is popular at Moulay Bousselham and Essaouira. Stand-up paddleboarding is available at calmer beaches in Agadir and Saidia. Scuba diving is offered at Al Hoceima and along the Mediterranean coast. Jet skiing and parasailing are available at resort beaches in Agadir.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED PAGES
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  {
    href: '/beaches',
    icon: Waves,
    title: 'Morocco Beaches Guide',
    description: 'Complete overview of every beach region in Morocco, from the Mediterranean to the deep south.',
  },
  {
    href: '/surfing',
    icon: Anchor,
    title: 'Surfing in Morocco',
    description: 'Detailed surf guide covering breaks, surf camps, equipment rental, and the best swells of the year.',
  },
  {
    href: '/water-sports',
    icon: Navigation,
    title: 'Water Sports Guide',
    description: 'Kitesurfing, windsurfing, diving, and paddleboarding across all Moroccan coastal destinations.',
  },
  {
    href: '/essaouira',
    icon: Globe,
    title: 'Essaouira City Guide',
    description: 'The windy coastal city where beach culture meets historic medina. Restaurants, riads, and activities.',
  },
  {
    href: '/agadir',
    icon: Sun,
    title: 'Agadir City Guide',
    description: 'Morocco\'s premier beach resort city with over 300 days of sunshine and 10 km of golden sand.',
  },
  {
    href: '/best-time-visit-morocco',
    icon: Calendar,
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month climate guide to help you plan the perfect timing for your Moroccan beach holiday.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function BestBeachesMoroccoPage() {
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
            backgroundImage: 'url(/images/hero-essaouira.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best Beaches in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Coastal Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Beaches in Morocco:
            <br className="hidden md:block" /> Top 15 Coastal Gems for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the dramatic red arches of Legzira to the world-class surf of Taghazout
            and the turquoise lagoons of Dakhla. Your definitive guide to 3,500 km
            of stunning Moroccan coastline.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is One of the World&apos;s Great Beach Destinations
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of two great bodies of water. To the west,
                the Atlantic Ocean delivers powerful swells that have made this country one
                of the world&apos;s premier surfing destinations. To the north, the
                Mediterranean Sea offers calm, warm waters framed by pine-clad mountains
                and secluded coves. Between these two coasts stretches 3,500 kilometers of
                shoreline that encompasses an astonishing diversity of beach landscapes.
              </p>
              <p>
                You will find towering red sandstone arches sculpted by millennia of wave
                action, endless golden sand dunes where the Sahara Desert tumbles into the
                Atlantic, sheltered turquoise lagoons where flamingos wade in the shallows,
                and whitewashed fishing villages where the day&apos;s catch is grilled on
                the beach at sunset. Morocco&apos;s beaches are not just places to swim and
                sunbathe. They are geological marvels, wildlife sanctuaries, surf
                playgrounds, and windows into a coastal culture that stretches back
                thousands of years.
              </p>
              <p>
                What makes Moroccan beaches exceptional is the pairing of natural beauty
                with cultural richness. An afternoon at Essaouira beach is inseparable
                from the fortified medina that watches over it. A surf session at
                Taghazout leads to tagine dinners in a village that still smells of the
                morning&apos;s sardine catch. A visit to Oualidia&apos;s lagoon culminates
                in freshly shucked oysters at a waterside shack. The beach is never just
                the beach in Morocco. It is always part of something deeper.
              </p>
              <p>
                This guide covers the 15 best beaches in Morocco across every category,
                from world-class surf spots to family-friendly lagoons, from secluded
                coves to luxury resort strands. Whether you are a surfer chasing the
                perfect wave, a family seeking safe swimming, or a photographer hunting
                for dramatic coastal landscapes, Morocco has a beach that will exceed
                your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Overview: Morocco's Two Coasts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco&apos;s Two Coasts at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the difference between the Atlantic and Mediterranean coasts
            is the first step to choosing the right Moroccan beach for your trip.
          </p>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Waves className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Atlantic Coast
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Stretches from Tangier south past Agadir to Dakhla</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Powerful waves ideal for surfing and wind sports</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Water temperature: 15-22 C depending on season</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Cooled by the Canary Current, wetsuit recommended</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Dramatic cliffs, rock formations, and dune landscapes</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Consistent trade winds from April to October</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Surfing, kitesurfing, dramatic scenery, beach walks, adventure
              </div>
            </div>

            <div className="card-moroccan p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Sun className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                  Mediterranean Coast
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Runs from Tangier east to the Algerian border</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Calm, warm waters perfect for swimming and families</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Water temperature: 19-25 C in summer</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>No wetsuit needed from June to September</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Pine forests, small coves, and clearer water</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <span>Developing resort infrastructure at Saidia and Cabo Negro</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg text-xs text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--text-primary)]">Best for:</span> Families, swimming, resort holidays, Mediterranean cuisine, luxury
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 15 Beaches ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 15 Beaches in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Our hand-picked selection of the finest beaches along Morocco&apos;s Atlantic
            and Mediterranean coasts, covering every type of beach experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Beaches are ranked by overall experience, combining natural beauty, accessibility, water quality, and available activities.
          </p>

          <div className="space-y-12">
            {topBeaches.map((beach, index) => (
              <div key={beach.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={beach.image}
                      alt={`${beach.name} on Morocco's coastline, ${beach.location}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Gem className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[var(--color-gold)]">
                      {beach.type}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {beach.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {beach.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                        <Thermometer className="w-3 h-3" />
                        Water: {beach.waterTemp}
                      </div>
                      <div className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        <Calendar className="w-3 h-3" />
                        {beach.bestMonths}
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {beach.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {beach.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {beach.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beaches by Type ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beaches by Type: Find Your Perfect Match
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Whether you are a surfer, a family, a solitude seeker, or a luxury traveler,
            Morocco has a beach tailored to your style.
          </p>

          <div className="space-y-10">
            {beachesByType.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CategoryIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 ml-13">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.beaches.map((beach, i) => (
                      <div key={i} className="p-4 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                          <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {beach.name}
                          </h4>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                          {beach.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time for Beaches ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco&apos;s Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s long coastline means there is always a beach in season somewhere
            in the country. Here is what to expect throughout the year.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            September is the single best month for Moroccan beaches: warm water, fewer crowds, and the first surf swells arriving.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <span className="text-xs text-[var(--color-gold)] font-semibold">{season.rating}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mb-3">
                    <div className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Air:</span> {season.airTemp}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Water:</span> {season.waterTemp}
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                    {season.description}
                  </p>

                  <div className="p-2 bg-[var(--surface-muted)] rounded-lg text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {season.bestFor}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Water Sports ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Sports in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From world-class surfing to kitesurfing, scuba diving to stand-up
            paddleboarding, Morocco&apos;s coastline is a water sports playground.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterSports.map((sport) => {
              const SportIcon = sport.icon;
              return (
                <div key={sport.sport} className="card-moroccan p-6">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                    <SportIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {sport.sport}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {sport.description}
                  </p>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Where:</span> {sport.locations}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Tag className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Price:</span> {sport.price}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Season:</span> {sport.season}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Beach Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Safety Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential safety information for swimming, water sports, and sun exposure
            along Morocco&apos;s Atlantic and Mediterranean coasts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for a Morocco Beach Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The essentials for making the most of Morocco&apos;s beaches, from sunscreen
            to surf wax.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                Sun Protection
              </h3>
              <div className="space-y-2">
                {[
                  'SPF 50+ reef-safe sunscreen',
                  'Wide-brimmed hat or surf cap',
                  'UV-protective sunglasses with strap',
                  'Lightweight long-sleeve rash guard',
                  'Lip balm with SPF protection',
                  'After-sun aloe vera gel',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Waves className="w-4 h-4 text-[var(--color-accent)]" />
                Water Essentials
              </h3>
              <div className="space-y-2">
                {[
                  'Wetsuit (3/2 for winter, shorty for summer)',
                  'Water shoes for rocky beaches',
                  'Waterproof phone pouch',
                  'Quick-dry towel (microfiber)',
                  'Reusable water bottle (2 liter minimum)',
                  'Snorkel and mask for Mediterranean coast',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Umbrella className="w-4 h-4 text-[var(--color-accent)]" />
                Beach Comfort
              </h3>
              <div className="space-y-2">
                {[
                  'Beach mat or lightweight blanket',
                  'Pop-up shade canopy for remote beaches',
                  'Insulated cooler bag for snacks and water',
                  'Sand-free beach bag with zip closure',
                  'Reading material or offline entertainment',
                  'Small first aid kit with antiseptic',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--color-accent)]" />
                Photography & Extras
              </h3>
              <div className="space-y-2">
                {[
                  'Waterproof or underwater camera',
                  'GoPro or action camera for surf sessions',
                  'Drone (check local regulations first)',
                  'Portable power bank for long beach days',
                  'Light cover-up for walking to and from beach',
                  'Cash in small MAD notes for beach vendors',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beach Accommodation Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay at Morocco&apos;s Beaches
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Accommodation options vary dramatically by beach destination. Here is what
            to expect and what to budget at each type of coastal destination.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Destination</div>
              <div className="p-3 px-4">Accommodation Type</div>
              <div className="p-3 px-4">Price Range</div>
              <div className="p-3 px-4">Best Option</div>
            </div>
            {[
              { dest: 'Taghazout', type: 'Surf camps, guesthouses', price: 'From 300 MAD per night', best: 'Surf camp with all-inclusive package' },
              { dest: 'Essaouira', type: 'Riads, boutique hotels', price: 'From 450 MAD per night', best: 'Riad in medina near the beach' },
              { dest: 'Agadir', type: 'Resort hotels, apartments', price: 'From 600 MAD per night', best: 'Beachfront hotel with pool' },
              { dest: 'Dakhla', type: 'Eco-lodges, kite camps', price: 'From 1,500 MAD per night', best: 'Lagoon-side eco-lodge with kite package' },
              { dest: 'Saidia', type: 'Resort hotels, riads', price: 'From 500 MAD per night', best: 'Marina-view hotel with beach access' },
              { dest: 'Oualidia', type: 'Boutique hotels, auberges', price: 'From 700 MAD per night', best: 'Lagoon-view hotel with oyster bar' },
              { dest: 'Mirleft', type: 'Guesthouses, surf lodges', price: 'From 250 MAD per night', best: 'Clifftop guesthouse with ocean views' },
              { dest: 'Sidi Kaouki', type: 'Surf camps, B&Bs', price: 'From 200 MAD per night', best: 'Beachfront surf camp with yoga' },
            ].map((item, i) => (
              <div
                key={item.dest}
                className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.dest}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{item.type}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{item.best}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Insider Tip: Book Direct for Beach Stays
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Surf camps, guesthouses, and small coastal hotels often offer significantly
                  lower prices when you book directly by email or WhatsApp rather than through
                  booking platforms. Many beach accommodations in Morocco are small
                  owner-operated businesses that prefer direct communication. You will also
                  find it easier to arrange extras like surf lessons, airport transfers, and
                  kitesurfing packages when booking directly with the property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Coastal Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira.webp"
                alt="Essaouira beach with the historic medina ramparts in the background, Morocco's Atlantic coast"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlantic Beach Culture</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira-ramparts.webp"
                alt="Dramatic coastal cliffs and golden sand along Morocco's southern Atlantic coastline"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Coastal Cliff Scenery</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira-port.webp"
                alt="Traditional fishing boats in a Moroccan harbor with blue water and coastal mountains"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Fishing Port Heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco&apos;s Coast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {relatedPages.map((page) => {
              const PageIcon = page.icon;
              return (
                <Link key={page.href} href={page.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
                  <PageIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">
                    {page.description}
                  </p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-essaouira-ramparts.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Morocco&apos;s Stunning Coastline?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the thundering Atlantic surf of Taghazout to the turquoise lagoons
            of Dakhla, from the cultural charm of Essaouira to the secluded coves of
            Mirleft, Morocco&apos;s 3,500 km of coastline awaits your footprints in the sand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beaches"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Waves className="w-5 h-5" />
              Explore All Beach Destinations
            </Link>
            <Link
              href="/surfing"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Anchor className="w-5 h-5" />
              Morocco Surfing Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
