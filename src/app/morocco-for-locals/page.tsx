import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Users,
  Coffee,
  Utensils,
  Mountain,
  Waves,
  Sun,
  Calendar,
  Heart,
  GraduationCap,
  Building,
  Compass,
  ArrowRight,
  Car,
  Music,
  Camera,
  Tent,
  Bike,
  Globe,
  BookOpen,
  Info,
  Clock,
  Landmark,
  Footprints,
  TreePine,
  Sparkles,
  Trophy,
  Ticket,
  UtensilsCrossed,
  Moon,
  Sunrise,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco for Locals | Weekend Getaways, Hidden Gems & City Guides for Moroccans',
  description:
    'The ultimate guide for Moroccan residents. Discover weekend road trips, hidden gems only locals know, family activities, student-friendly outings, local restaurants, sports clubs, seasonal festivals, and city-specific guides for Casablanca, Rabat, Marrakech, Fes, and beyond.',
  keywords: [
    'Morocco for locals',
    'Moroccan weekend getaways',
    'Morocco road trips',
    'hidden gems Morocco',
    'Morocco family activities',
    'student activities Morocco',
    'local restaurants Morocco',
    'Casablanca nightlife',
    'Rabat culture',
    'Marrakech local eats',
    'Morocco festivals',
    'Morocco hiking clubs',
    'Morocco football clubs',
    'Morocco beach towns',
    'Morocco mountain escapes',
    'budget activities Morocco',
    'Morocco heritage sites',
    'Morocco running groups',
    'Morocco camping spots',
    'Morocco local guide',
    'things to do Morocco weekend',
    'Moroccan family outings',
    'Morocco seasonal events',
    'Morocco sports recreation',
    'best cafes Morocco locals',
    'Morocco cultural heritage',
    'nzaha Morocco',
    'sortie Morocco',
  ],
  openGraph: {
    title: 'Morocco for Locals | Weekend Getaways, Hidden Gems & City Guides',
    description:
      'For Moroccans, by Moroccans. Weekend road trips, hidden gems, family activities, student-friendly outings, local restaurants, seasonal festivals, and city-specific guides.',
    url: `${BASE_URL}/morocco-for-locals`,
    images: [
      {
        url: `${BASE_URL}/images/art-morocco-illustrated-map.webp`,
        width: 1200,
        height: 630,
        alt: 'Illustrated map of Morocco showcasing local destinations and hidden gems for Moroccan residents',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco for Locals | The Guide Moroccans Actually Need',
    description:
      'Weekend getaways, hidden gems, family outings, student-friendly activities, local restaurants, sports clubs, and city guides for Moroccan residents.',
    images: [`${BASE_URL}/images/art-morocco-illustrated-map.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-for-locals` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/morocco-for-locals`,
  name: 'Morocco for Locals | Weekend Getaways, Hidden Gems & City Guides for Moroccans',
  description:
    'The ultimate guide for Moroccan residents covering weekend getaways, hidden gems, family activities, student-friendly outings, local restaurants, sports, festivals, and city-specific guides.',
  url: `${BASE_URL}/morocco-for-locals`,
  image: `${BASE_URL}/images/art-morocco-illustrated-map.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-for-locals`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco for Locals', item: `${BASE_URL}/morocco-for-locals` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WEEKEND GETAWAYS
   ═══════════════════════════════════════════════════════════════ */

const weekendGetaways = [
  {
    destination: 'Bin El Ouidane',
    region: 'Beni Mellal-Khenifra',
    icon: Waves,
    type: 'Lake & Mountains',
    driveFrom: 'Casablanca: 3h30 | Marrakech: 3h | Beni Mellal: 45min',
    budget: 'From 300 MAD/night for a guesthouse',
    description:
      'Morocco\'s most beautiful dam lake, surrounded by Atlas foothills. Perfect for kayaking, fishing, swimming, and simply sitting by the water with a thermos of atay. Spring is the best season when the hills are green and wildflowers bloom everywhere.',
    tips: [
      'Book lakeside guesthouses in advance during spring weekends (March-May)',
      'Bring your own kayak or rent one at the lake for from 100 MAD/hour',
      'The road from Beni Mellal through Afourer is stunning and well-maintained',
      'Combine with a visit to the Ouzoud Waterfalls (1h30 away)',
    ],
  },
  {
    destination: 'Moulay Bousselham',
    region: 'Kenitra Province',
    icon: Sun,
    type: 'Beach & Lagoon',
    driveFrom: 'Rabat: 1h30 | Casablanca: 2h30 | Meknes: 2h30',
    budget: 'From 250 MAD/night for a guesthouse',
    description:
      'A quiet fishing village with a massive lagoon (Merja Zerga) that is a paradise for birdwatching. The beach is long and uncrowded even in summer. Locals come for the fresh fish, the calm atmosphere, and the legendary sunsets over the lagoon.',
    tips: [
      'Take a boat tour of Merja Zerga for flamingo sightings (from 50 MAD/person)',
      'Buy fresh fish at the port and have a restaurant grill it for you (from 30 MAD)',
      'The lagoon side is calmer for families with kids',
      'Best visited September-November when migratory birds arrive',
    ],
  },
  {
    destination: 'Ifrane & Michlifen',
    region: 'Middle Atlas',
    icon: TreePine,
    type: 'Mountain & Forest',
    driveFrom: 'Fes: 1h | Meknes: 1h | Rabat: 3h',
    budget: 'From 400 MAD/night at a hotel',
    description:
      'Known as "Little Switzerland," Ifrane offers cedar forests, Barbary macaques, and crisp mountain air. In winter, Michlifen has Morocco\'s most accessible ski slopes. In summer, it is the coolest escape from the plains heat. The Ain Vittel spring and Dayet Aoua lake are favorites for family picnics.',
    tips: [
      'Winter skiing at Michlifen runs from December through March (seasonal pricing applies)',
      'Feed the Barbary macaques at the cedar forest on the road to Azrou',
      'Pack warm clothes year-round: Ifrane regularly drops below 0C in winter',
      'The Hotel Michlifen and Peri hotels are the premium options; budget guesthouses in Azrou are cheaper',
    ],
  },
  {
    destination: 'Imsouane',
    region: 'Agadir-Ida Ou Tanane',
    icon: Waves,
    type: 'Surf & Beach',
    driveFrom: 'Agadir: 1h30 | Essaouira: 1h | Marrakech: 3h30',
    budget: 'From 200 MAD/night for a guesthouse',
    description:
      'A tiny fishing village with one of the longest right-hand waves in Africa. Still relatively untouched compared to Taghazout, Imsouane is where Moroccan surfers come to escape the crowds. The bay is perfect for beginners, and the cliff above offers one of the best sunset views on the coast.',
    tips: [
      'The bay break is ideal for beginners and longboarders',
      'Eat sardines and tagine at the small restaurants above the fishing port (from 35 MAD)',
      'Board rental from 100 MAD/day from local shops',
      'Avoid summer weekends when it gets crowded; weekdays are always quiet',
    ],
  },
  {
    destination: 'Imi n\'Ifri & Cathedrale Rocks',
    region: 'Demnate, Beni Mellal-Khenifra',
    icon: Mountain,
    type: 'Nature & Adventure',
    driveFrom: 'Marrakech: 2h | Beni Mellal: 1h30',
    budget: 'From 150 MAD for day trip',
    description:
      'A massive natural rock bridge spanning a gorge, often called Morocco\'s hidden wonder. The area around Demnate is perfect for hiking, and the olive groves and almond orchards in spring are breathtaking. Combine it with a visit to the nearby dinosaur footprints at Taida.',
    tips: [
      'Entry to the natural bridge is from 10 MAD',
      'The dinosaur footprints at Taida are about 20 minutes from Demnate',
      'Bring a picnic and eat by the river below the bridge',
      'Best in spring (March-May) when the water flows strong',
    ],
  },
  {
    destination: 'Asilah',
    region: 'Tangier-Tetouan-Al Hoceima',
    icon: Camera,
    type: 'Art & Beach',
    driveFrom: 'Tangier: 45min | Rabat: 2h30 | Casablanca: 3h30',
    budget: 'From 300 MAD/night for a riad',
    description:
      'A whitewashed coastal town with a vibrant arts scene. The medina walls are covered in murals, the Portuguese ramparts overlook the Atlantic, and the beach stretches for kilometers. The annual Asilah Arts Festival (July-August) transforms the town into an open-air gallery.',
    tips: [
      'Walk the medina at sunrise before the day visitors arrive',
      'The beach south of town (Paradise Beach) is quieter and cleaner',
      'Fresh seafood at the port restaurants is excellent value (from 40 MAD)',
      'The arts festival in July-August is free to attend',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HIDDEN GEMS
   ═══════════════════════════════════════════════════════════════ */

const hiddenGems = [
  {
    name: 'Tafraout & the Painted Rocks',
    region: 'Anti-Atlas',
    icon: Sparkles,
    description:
      'A stunning valley surrounded by pink granite mountains, famous for the Belgian artist Jean Verame\'s painted boulders. The almond blossom festival in February turns the entire valley white and pink. Tafraout is the heartland of Amazigh culture, and the local cuisine is exceptional.',
    localTip: 'Visit during the almond blossom festival (February) and drive the circular route through the Ameln Valley for the best views.',
  },
  {
    name: 'Moulay Idriss Zerhoun',
    region: 'Meknes-Fes',
    icon: Landmark,
    description:
      'Morocco\'s holiest town, built on two hills overlooking the ruins of Volubilis. The narrow streets, rooftop views, and the atmosphere of genuine devotion make it unlike anywhere else in Morocco. Recently opened to overnight visitors, the town has charming guesthouses and home-cooked food.',
    localTip: 'Visit on a Saturday for the weekly souk. Combine with Volubilis ruins (5 minutes away).',
  },
  {
    name: 'Sidi Kaouki',
    region: 'Essaouira Province',
    icon: Waves,
    description:
      'A tiny beach village 25 km south of Essaouira with consistent wind and waves. No high-rise hotels, no tour buses. Just a long beach, a few surf shacks, horse rides at sunset, and the kind of peace that Essaouira used to have before tourism arrived.',
    localTip: 'The camel and horse rides on the beach at sunset cost from 100 MAD. Stay overnight in one of the beachfront guesthouses.',
  },
  {
    name: 'Akchour Waterfalls & God\'s Bridge',
    region: 'Chefchaouen Province',
    icon: Mountain,
    description:
      'A spectacular series of waterfalls and a natural stone bridge in the Talassemtane National Park. The hike passes through lush forest and along a turquoise river. The main waterfall is a 2-hour hike from the trailhead, and God\'s Bridge is a separate 1-hour trail.',
    localTip: 'Go on a weekday to avoid the weekend crowds from Chefchaouen. Bring proper shoes and water.',
  },
  {
    name: 'Sefrou & Cherry Festival',
    region: 'Fes-Meknes',
    icon: Heart,
    description:
      'A small town 30 minutes from Fes, known for its beautiful mellah (Jewish quarter), its waterfall running through the center, and Morocco\'s oldest festival: the Cherry Festival in June. The weekly souk is authentic and tourist-free.',
    localTip: 'The Cherry Festival in June is a genuine celebration with local music, dancing, and the election of the Cherry Queen.',
  },
  {
    name: 'Tata & the Oasis Route',
    region: 'Souss-Massa',
    icon: Sun,
    description:
      'Deep in the pre-Saharan south, Tata is surrounded by palm oases, ancient kasbahs, and prehistoric rock carvings. The drive from Taroudant to Tata through Igherm is one of the most scenic in Morocco. Almost no tourists make it this far south.',
    localTip: 'Visit the rock carvings at Aït Ouaazik (from 20 MAD entry). The oases around Tata are perfect for an afternoon walk.',
  },
  {
    name: 'Cap Spartel & Hercules Caves',
    region: 'Tangier',
    icon: Compass,
    description:
      'Where the Atlantic meets the Mediterranean. The lighthouse at Cap Spartel marks the northwestern tip of Africa, and the nearby Caves of Hercules have a sea-facing opening shaped like the map of Africa. A beautiful coastal drive from Tangier.',
    localTip: 'Go at sunset when the light through the cave opening is magical. Combine with a seafood lunch at one of the restaurants on the coastal road.',
  },
  {
    name: 'Bhalil Cave Houses',
    region: 'Fes-Meknes',
    icon: Building,
    description:
      'A hilltop town 30 minutes from Fes where some families still live in troglodyte cave houses carved into the rock. The painted facades, the views over the Saiss plain, and the hospitality of the residents make this one of Morocco\'s most unique day trips.',
    localTip: 'Ask at the village entrance for a local guide to show you inside one of the cave houses (from 20 MAD tip).',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL EVENTS & FESTIVALS
   ═══════════════════════════════════════════════════════════════ */

const seasonalEvents = [
  {
    month: 'January',
    events: [
      { name: 'Yennayer (Amazigh New Year)', location: 'Nationwide', description: 'January 13. Celebrated with traditional food, music, and family gatherings. A public holiday since 2018.' },
      { name: 'Marrakech International Film Festival', location: 'Marrakech', description: 'World-class cinema festival with free outdoor screenings at Jemaa el-Fnaa. Seasonal pricing on hotels.' },
    ],
  },
  {
    month: 'February',
    events: [
      { name: 'Almond Blossom Festival', location: 'Tafraout', description: 'The entire Anti-Atlas valley blooms white and pink. Cultural performances and a celebration of Amazigh heritage.' },
    ],
  },
  {
    month: 'March - April',
    events: [
      { name: 'Marathon des Sables', location: 'Sahara', description: 'The toughest footrace on Earth. Even non-runners can volunteer or watch the start/finish near Ouarzazate.' },
      { name: 'Rose Festival', location: 'Kelaat M\'Gouna', description: 'The Dades Valley turns pink with Damask roses. Parades, music, rose water distillation, and the election of the Rose Queen.' },
    ],
  },
  {
    month: 'May',
    events: [
      { name: 'Mawazine Festival', location: 'Rabat', description: 'One of the world\'s largest music festivals by attendance. International and Moroccan artists. Many stages are free.' },
      { name: 'Fes Festival of World Sacred Music', location: 'Fes', description: 'Sufi music, gospel, and spiritual music from around the world in the historic Bab Makina square.' },
    ],
  },
  {
    month: 'June',
    events: [
      { name: 'Gnaoua World Music Festival', location: 'Essaouira', description: 'Three days of Gnaoua trance music, jazz, and world music. Free outdoor concerts on the beach and in the medina.' },
      { name: 'Cherry Festival', location: 'Sefrou', description: 'Morocco\'s oldest festival celebrating the cherry harvest. Parades, music, and the election of the Cherry Queen.' },
    ],
  },
  {
    month: 'July - August',
    events: [
      { name: 'Asilah Arts Festival', location: 'Asilah', description: 'Artists paint murals directly on the medina walls. Exhibitions, concerts, and literary events. Free to attend.' },
      { name: 'Timitar Festival', location: 'Agadir', description: 'Amazigh music festival featuring local and international artists. Free outdoor concerts across the city.' },
      { name: 'Fantasia (Tbourida) Season', location: 'Nationwide', description: 'Traditional horseback charge ceremonies at regional moussems. The most spectacular shows are in Meknes and El Jadida.' },
    ],
  },
  {
    month: 'September',
    events: [
      { name: 'Tanjazz Festival', location: 'Tangier', description: 'Jazz festival in the city of Tangier with performances in historic venues. From 150 MAD for concert tickets.' },
      { name: 'Date Festival', location: 'Erfoud', description: 'Celebration of the date harvest in the Tafilalet region. Dates, traditional music, camel races, and fantasia.' },
    ],
  },
  {
    month: 'October - November',
    events: [
      { name: 'International Film Festival', location: 'Sale', description: 'Women in Cinema festival showcasing female directors from across Africa and the Arab world.' },
      { name: 'Olive Harvest Season', location: 'Meknes & Fes region', description: 'Visit olive groves and presses to see the harvest. Fresh olive oil tastings are available at cooperatives.' },
    ],
  },
  {
    month: 'December',
    events: [
      { name: 'Marrakech Contemporary Art Fair', location: 'Marrakech', description: 'Morocco\'s premier contemporary art event showcasing Moroccan and international artists.' },
      { name: 'Ski Season Opens', location: 'Oukaimeden & Michlifen', description: 'Morocco\'s ski season kicks off. Day passes from 100 MAD. Equipment rental from 200 MAD.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAMILY ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const familyActivities = [
  {
    activity: 'Ouzoud Waterfalls Day Trip',
    region: 'Beni Mellal',
    icon: Waves,
    ageRange: 'All ages',
    budget: 'From 50 MAD entry + transport',
    description:
      'Morocco\'s most spectacular waterfalls, 150 meters high. Kids love the Barbary macaques, the rainbow mist, and the boat rides at the base. The surrounding area has restaurants and picnic spots.',
  },
  {
    activity: 'Aqua Mirage Water Park',
    region: 'Marrakech',
    icon: Sun,
    ageRange: '3+ years',
    budget: 'From 250 MAD/person',
    description:
      'Morocco\'s biggest water park with slides, pools, and a lazy river. Full-day fun for the whole family. Shaded areas and restaurants on-site. Avoid midsummer weekends for shorter queues.',
  },
  {
    activity: 'Crocoparc',
    region: 'Agadir',
    icon: Compass,
    ageRange: 'All ages',
    budget: 'From 70 MAD adults / 40 MAD children',
    description:
      'A beautifully landscaped park with over 300 Nile crocodiles, plus a cactus garden and botanical trail. Kids are fascinated by the feeding sessions. Well-maintained and shaded.',
  },
  {
    activity: 'Sahara Camel Ride',
    region: 'Merzouga / Zagora',
    icon: Sunrise,
    ageRange: '5+ years',
    budget: 'From 350 MAD/person for a sunset ride',
    description:
      'A camel trek to watch the sunset or sunrise over the Sahara dunes. Suitable for older children. Merzouga (Erg Chebbi) has the tallest dunes. Seasonal pricing: summer is cheaper but hotter.',
  },
  {
    activity: 'Jardin Majorelle & Museum',
    region: 'Marrakech',
    icon: Camera,
    ageRange: 'All ages',
    budget: 'From 70 MAD adults / 35 MAD children',
    description:
      'The iconic cobalt-blue garden with exotic plants and the Berber Museum. Kids enjoy the koi ponds and the vivid colors. Early morning visits avoid the heat and crowds.',
  },
  {
    activity: 'Beach Days: Agadir, El Jadida, Mehdia',
    region: 'Atlantic Coast',
    icon: Waves,
    ageRange: 'All ages',
    budget: 'Free (parasol rental from 30 MAD)',
    description:
      'Safe swimming beaches with lifeguards in summer. Agadir has the warmest water, El Jadida has calm tidal pools for toddlers, and Mehdia near Rabat is the closest beach for families from the capital.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LOCAL RESTAURANTS & CAFES
   ═══════════════════════════════════════════════════════════════ */

const localEats = [
  {
    city: 'Casablanca',
    icon: Building,
    spots: [
      { name: 'Snack Amine (Derb Sultan)', type: 'Street food', price: 'From 25 MAD', why: 'The best bocadillos and msemen in Casa. Packed with locals every morning.' },
      { name: 'Restaurant Brasserie La Corniche', type: 'Seafood', price: 'From 80 MAD', why: 'Fresh fish and ocean views without the Ain Diab tourist markup.' },
      { name: 'Patisserie Bennis (Habous)', type: 'Pastry & tea', price: 'From 15 MAD', why: 'Morocco\'s most famous patisserie since 1930. Cornes de gazelle and Moroccan pastries that define the standard.' },
      { name: 'Bisra (Maarif)', type: 'Grills', price: 'From 40 MAD', why: 'Legendary kefta and brochettes. The owner has been grilling since the 1980s.' },
    ],
  },
  {
    city: 'Rabat',
    icon: Landmark,
    spots: [
      { name: 'Restaurant Le Dhow (Bou Regreg)', type: 'Moroccan', price: 'From 60 MAD', why: 'A converted boat on the river with traditional Moroccan dishes and sunset views.' },
      { name: 'Cafe Maure (Kasbah des Oudayas)', type: 'Cafe', price: 'From 15 MAD', why: 'Mint tea and Moroccan pastries with a view of the river mouth. A Rabat institution.' },
      { name: 'Pizzeria Regragui (Hassan)', type: 'Pizza', price: 'From 35 MAD', why: 'Not traditional, but every Rbati knows this place. Huge portions, great value.' },
      { name: 'Souk El Had (Sunday Market)', type: 'Market food', price: 'From 20 MAD', why: 'Harira, sfenj, and fresh produce at rock-bottom prices. Come hungry.' },
    ],
  },
  {
    city: 'Marrakech',
    icon: Star,
    spots: [
      { name: 'Chez Lamine Hadj Mustapha (Bab Ghmat)', type: 'Tanjia', price: 'From 50 MAD', why: 'The most famous tanjia in Marrakech. Slow-cooked in the hammam furnace overnight. A Marrakchi institution.' },
      { name: 'Cafe des Epices (Rahba Kedima)', type: 'Cafe', price: 'From 20 MAD', why: 'Rooftop terrace overlooking the spice square. Popular with locals and visitors alike.' },
      { name: 'Haj Brik (Kennaria)', type: 'Kefta & tagines', price: 'From 30 MAD', why: 'Hole-in-the-wall with the best kefta tagine in the medina. Locals only, no sign.' },
      { name: 'Marche Central (Gueliz)', type: 'Mixed', price: 'From 25 MAD', why: 'Fresh juices, rotisserie chicken, and seafood at the central market. Skip the tourist restaurants nearby.' },
    ],
  },
  {
    city: 'Fes',
    icon: BookOpen,
    spots: [
      { name: 'Restaurant Thami (Rcif)', type: 'Fassi cuisine', price: 'From 35 MAD', why: 'Traditional Fassi food: pastilla, rfissa, and tagines cooked by grandmothers. The real deal.' },
      { name: 'Cafe Clock', type: 'Fusion cafe', price: 'From 30 MAD', why: 'Famous camel burger and cultural events. A meeting point for Fassi youth and creatives.' },
      { name: 'Boulangerie El Kasbah', type: 'Bakery', price: 'From 5 MAD', why: 'Fresh-from-the-oven msemen, meloui, and baghrir. Locals queue at breakfast time.' },
      { name: 'Chez Rachid (Ain Azliten)', type: 'Street food', price: 'From 20 MAD', why: 'Harira, brochettes, and salads at prices locals actually pay. No tourists in sight.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: STUDENT-FRIENDLY BUDGET ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const studentActivities = [
  {
    activity: 'Free Museum Days',
    icon: Building,
    cost: 'Free',
    description:
      'Many Moroccan museums offer free entry on Fridays or the first Sunday of the month. The Mohammed VI Museum of Modern Art in Rabat, the Marrakech Museum, and regional museums participate. Check locally as policies change seasonally.',
  },
  {
    activity: 'University Sports Facilities',
    icon: Trophy,
    cost: 'Free - from 50 MAD/month',
    description:
      'University campuses in Rabat (UM5), Casablanca (UH2C), Fes (USMBA), and Marrakech (UCA) have sports facilities open to registered students. Football pitches, running tracks, basketball courts, and some have swimming pools.',
  },
  {
    activity: 'Hiking the Rif & Atlas',
    icon: Mountain,
    cost: 'Free (transport from 30 MAD)',
    description:
      'Group hikes organized through university clubs and social media groups. Popular routes include Toubkal base camp, Akchour, Tazekka National Park, and the trails around Ifrane. No equipment needed for day hikes.',
  },
  {
    activity: 'Beach Camping',
    icon: Tent,
    cost: 'From 30 MAD for campsite or free wild camping',
    description:
      'The Atlantic coast south of Essaouira and north of Agadir has dozens of camping spots. Groups of students regularly camp at Sidi Kaouki, Imsouane, Tafedna, and Moulay Bousselham. Bring your own tent and food.',
  },
  {
    activity: 'Cultural Centers & Free Events',
    icon: Globe,
    cost: 'Free',
    description:
      'Institut Francais (all major cities), British Council (Rabat, Casablanca), and Goethe-Institut (Rabat) regularly host free film screenings, exhibitions, language exchanges, and concerts. Follow their social media for event schedules.',
  },
  {
    activity: 'Medina Photography Walks',
    icon: Camera,
    cost: 'Free',
    description:
      'Organized through Instagram and WhatsApp groups, photography walks through historic medinas are popular among students. Fes, Marrakech, and Chefchaouen are the most popular destinations. A great way to practice photography and meet people.',
  },
  {
    activity: 'Cafe Study Sessions & Co-Working',
    icon: Coffee,
    cost: 'From 15 MAD for a coffee',
    description:
      'Rabat\'s Agdal neighborhood, Casablanca\'s Maarif, and Marrakech\'s Gueliz have cafes with good WiFi and a study-friendly atmosphere. Many students spend entire afternoons working on projects. Order a nous-nous and you are set for hours.',
  },
  {
    activity: 'Shared Grands Taxis for Group Trips',
    icon: Car,
    cost: 'From 20 MAD/person',
    description:
      'Groups of 4-6 students can hire a grand taxi for day trips at very reasonable rates. A round trip from Rabat to Moulay Bousselham, Fes to Ifrane, or Marrakech to Ourika Valley costs from 80 MAD per person shared.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HERITAGE SITES EVERY MOROCCAN SHOULD VISIT
   ═══════════════════════════════════════════════════════════════ */

const heritageSites = [
  {
    name: 'Volubilis (Walili)',
    icon: Landmark,
    location: 'Near Meknes',
    entry: 'From 70 MAD',
    description: 'The best-preserved Roman ruins in North Africa. Stunning mosaics, triumphal arches, and columns set against the Zerhoun hills. A UNESCO World Heritage Site that every Moroccan should see at least once.',
  },
  {
    name: 'Ksar of Ait Benhaddou',
    icon: Building,
    location: 'Ouarzazate Province',
    entry: 'Free (guides from 50 MAD)',
    description: 'A fortified village of red earth that has served as a backdrop for dozens of films. A UNESCO site and a living monument to the Amazigh architectural tradition. Still inhabited by a few families.',
  },
  {
    name: 'Medina of Fes el-Bali',
    icon: Compass,
    location: 'Fes',
    entry: 'Free to walk; monuments from 20 MAD',
    description: 'The world\'s largest car-free urban area and a UNESCO World Heritage Site. Founded in the 9th century, it contains the University of al-Qarawiyyin (the oldest continuously operating university in the world).',
  },
  {
    name: 'Hassan II Mosque',
    icon: Star,
    location: 'Casablanca',
    entry: 'From 130 MAD for interior tour',
    description: 'The third-largest mosque in the world, built on the Atlantic coast. The minaret is the tallest religious structure in Africa at 210 meters. The interior is a masterwork of Moroccan craftsmanship. Open to non-Muslims.',
  },
  {
    name: 'Chellah (Sala Colonia)',
    icon: Landmark,
    location: 'Rabat',
    entry: 'From 70 MAD',
    description: 'A medieval fortified necropolis built on the ruins of the ancient Roman city of Sala Colonia. Storks nest on the minarets, cats roam the gardens, and the atmosphere is hauntingly beautiful.',
  },
  {
    name: 'Tin Mal Mosque',
    icon: Mountain,
    location: 'High Atlas (Tizi n\'Test road)',
    entry: 'From 20 MAD',
    description: 'Founded in 1156 by the Almohad dynasty, this remote mosque in the Atlas Mountains is one of only two mosques in Morocco open to non-Muslims. The journey through the Tizi n\'Test pass is as spectacular as the destination.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SPORTS & RECREATION
   ═══════════════════════════════════════════════════════════════ */

const sportsRecreation = [
  {
    category: 'Football',
    icon: Trophy,
    description:
      'Morocco\'s national passion. Every neighborhood has a pitch, and local derbies draw massive crowds. The Botola Pro is the top league, with matches from 20 MAD.',
    clubs: [
      'Wydad AC (Casablanca) - "Widad," the most popular club in Morocco. Home games at Stade Mohammed V.',
      'Raja CA (Casablanca) - "Raja," fierce rivals of Wydad. The Derbi atmosphere is electric.',
      'AS FAR (Rabat) - The military club with passionate support. Plays at Moulay Abdellah stadium.',
      'MAS Fes & Ittihad Tanger - Strong regional clubs with dedicated local followings.',
    ],
  },
  {
    category: 'Running & Trail',
    icon: Footprints,
    description:
      'Running culture is growing rapidly in Morocco. Cities have organized running groups, and trail running in the Atlas is gaining international recognition.',
    clubs: [
      'Casablanca Run Club - Weekly runs along the Corniche, usually Saturday mornings. Free to join via Instagram.',
      'Rabat Runners - Group runs around the Bou Regreg river and through the Agdal gardens.',
      'Marrakech Running Club - Training sessions and preparation for the Marrakech Marathon (January).',
      'Trail running clubs in Ifrane and Ourika Valley organize weekend mountain runs.',
    ],
  },
  {
    category: 'Hiking & Mountaineering',
    icon: Mountain,
    description:
      'The Atlas Mountains offer world-class hiking from gentle day walks to multi-day treks. The Moroccan Federation of Mountaineering and Climbing (FRMEC) organizes guided outings.',
    clubs: [
      'Club Alpin Francais (CAF) sections in Casablanca, Rabat, and Marrakech organize monthly hikes (from 50 MAD/outing).',
      'FRMEC certified guides for Toubkal, M\'Goun, and other summits.',
      'University hiking clubs organize affordable group treks with transport included.',
      'WhatsApp groups for weekend Atlas hikes are the easiest way to join (ask at outdoor shops).',
    ],
  },
  {
    category: 'Surfing & Water Sports',
    icon: Waves,
    description:
      'Morocco\'s Atlantic coast is a world-class surf destination. From Taghazout to Dakhla, the waves are consistent and the surf community is strong.',
    clubs: [
      'Taghazout and Tamraght - the epicenter of Moroccan surf culture with dozens of clubs.',
      'Dakhla - kite surfing capital with consistent wind and flat-water lagoons.',
      'Mehdia Beach (near Kenitra) - the closest surf spot to Rabat, with a growing local scene.',
      'Essaouira and Sidi Kaouki - windsurf and kitesurf meccas. Board rental from 100 MAD/day.',
    ],
  },
  {
    category: 'Cycling',
    icon: Bike,
    description:
      'Road cycling and mountain biking are growing sports in Morocco. The diverse terrain from coastal roads to mountain passes offers incredible riding.',
    clubs: [
      'Royal Moroccan Cycling Federation (FRMVC) organizes amateur events nationwide.',
      'Casablanca Cycling Club - group rides every weekend, open to all levels.',
      'Atlas Mountain Biking - trails around Ourika Valley and Ouirgane are popular for MTB.',
      'Marrakech to Ouarzazate via Tizi n\'Tichka - a legendary road cycling route (196 km, 2,260m elevation).',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CITY-SPECIFIC LOCAL GUIDES
   ═══════════════════════════════════════════════════════════════ */

const cityGuides = [
  {
    city: 'Casablanca',
    icon: Moon,
    theme: 'Nightlife & Urban Culture',
    image: '/images/hero-casablanca-skyline.webp',
    description:
      'Morocco\'s economic capital and its most cosmopolitan city. Casa has the best nightlife, the most diverse restaurant scene, and a thriving arts and fashion community.',
    highlights: [
      { title: 'Nightlife', detail: 'Boulevard de la Corniche has the major clubs (Sky 28, White Casablanca). Racine neighborhood has trendy bars and lounges. Expect cover charges from 100 MAD on weekends.' },
      { title: 'Art & Culture', detail: 'Villa des Arts, L\'Uzine, and Galerie Venise Cadre for contemporary art. The Art Deco architecture walking tour in the center is free and stunning.' },
      { title: 'Food Scene', detail: 'Maarif for international cuisine, Habous for pastries, Ain Diab for seafood. Casablanca has the most diverse food scene in Morocco.' },
      { title: 'Shopping', detail: 'Morocco Mall and Anfa Place for high-end. Derb Ghallef for electronics deals. Habous for traditional crafts.' },
    ],
  },
  {
    city: 'Rabat',
    icon: Landmark,
    theme: 'Culture & Green Spaces',
    image: '/images/hero-rabat-kasbah.webp',
    description:
      'The political capital with a more relaxed pace than Casablanca. Rabat excels in culture, museums, gardens, and waterfront living along the Bou Regreg.',
    highlights: [
      { title: 'Museums', detail: 'Mohammed VI Museum of Modern Art is world-class. Musee de l\'Histoire et des Civilisations near the Chellah is excellent.' },
      { title: 'Green Spaces', detail: 'Jardin d\'Essais, Agdal gardens, and the Hilton beach park. Rabat is Morocco\'s greenest capital.' },
      { title: 'Kasbah des Oudayas', detail: 'The painted blue-and-white streets, Andalusian gardens, and Cafe Maure with river views. Best at sunset.' },
      { title: 'Bou Regreg Marina', detail: 'Walk from Rabat to Sale across the Hassan II bridge. The tramway (from 6 MAD) connects the two cities beautifully.' },
    ],
  },
  {
    city: 'Marrakech',
    icon: Star,
    theme: 'Local Eats & Day Trips',
    image: '/images/hero-marrakech-koutoubia.webp',
    description:
      'Beyond the tourist surface, Marrakech has a rich local food scene and is the gateway to some of Morocco\'s best day trip destinations.',
    highlights: [
      { title: 'Local Food', detail: 'Skip Jemaa el-Fnaa stalls. Eat at Bab Ghmat for tanjia, Bab Doukkala for grills, and Sidi Mimoun for tajines at half the tourist price.' },
      { title: 'Day Trips', detail: 'Ourika Valley (45 min), Oukaimeden skiing (1h30), Lalla Takerkoust lake (40 min), and Ouzoud Falls (2h30). All accessible by grand taxi.' },
      { title: 'Hammam', detail: 'Skip the tourist hammams at 300 MAD. Local hammams like Mouassine or Bab Doukkala cost from 15 MAD entry + from 50 MAD for a gommage.' },
      { title: 'Parks & Gardens', detail: 'Menara Gardens (free), Agdal Gardens (free Fri-Sun), and Jardin Secret (from 60 MAD) for a peaceful escape from the medina.' },
    ],
  },
  {
    city: 'Tangier',
    icon: Globe,
    theme: 'Reinvention & Coastal Life',
    image: '/images/hero-tangier-bay.webp',
    description:
      'Tangier has undergone a dramatic transformation. The new TGV station, the Marina Bay, and a wave of restaurants and galleries have made it one of Morocco\'s most exciting cities.',
    highlights: [
      { title: 'New Tangier', detail: 'Marina Bay for waterfront dining, the new Tanger Ville marina, and the revitalized Grand Socco area.' },
      { title: 'Historic Tangier', detail: 'The Kasbah museum, the American Legation (the only US National Historic Landmark abroad), and Cafe Hafa with its legendary sea views.' },
      { title: 'Beaches', detail: 'City beach for swimming, Achakkar for surfing, and the caves of Hercules area for a quieter experience.' },
      { title: 'Day Trips', detail: 'Asilah (45 min), Chefchaouen (2h by car), and Tetouan (1h) are all easy day trips from Tangier.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoForLocalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/art-morocco-illustrated-map.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco for Locals</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            For Moroccans, By Moroccans
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco for Locals:
            <br className="hidden md:block" /> Your Country, Rediscovered
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Weekend getaways, hidden gems, family outings, student-friendly activities,
            local restaurants, sports clubs, festivals, and city guides. This is the Morocco
            guide that Moroccans actually need.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why This Guide Exists
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most Morocco guides are written for foreigners. They tell you how much a riad costs
                in dollars, warn you about pickpockets in the medina, and recommend restaurants where
                a tagine costs 150 MAD. That is not this guide.
              </p>
              <p>
                This is a guide for Moroccans who want to explore their own country. Whether you are
                a Casablanca family looking for a weekend escape, a student in Rabat searching for
                free things to do, a group of friends planning a road trip, or a Marrakchi who has
                never left the plains &mdash; this guide is for you.
              </p>
              <p>
                Morocco has more natural beauty, cultural richness, and hidden treasures than most
                Moroccans realize. Many of us have traveled to Turkey or Spain without ever visiting
                Tafraout, Bin El Ouidane, or Moulay Idriss. It is time to discover what is in our
                own backyard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Weekend Getaways ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Weekend Getaways for Moroccans
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Road trips, beach escapes, and mountain retreats all reachable in a few hours.
            Pack the car, load the thermos, and go.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weekendGetaways.map((getaway) => {
              const Icon = getaway.icon;
              return (
                <div key={getaway.destination} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {getaway.destination}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        {getaway.region}
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {getaway.type}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{getaway.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Car className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{getaway.driveFrom}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Ticket className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span className="text-[var(--text-secondary)]">{getaway.budget}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border-primary)]">
                    <p className="text-xs font-medium text-[var(--text-primary)] mb-2">
                      <Info className="w-3 h-3 inline mr-1" />
                      Local Tips:
                    </p>
                    <ul className="space-y-1">
                      {getaway.tips.map((tip, i) => (
                        <li key={i} className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hidden Gems ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hidden Gems Only Locals Know
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Places that rarely appear in tourist guidebooks but are treasured by those who know them.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiddenGems.map((gem) => {
              const Icon = gem.icon;
              return (
                <div key={gem.name} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {gem.name}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {gem.region}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{gem.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--color-accent)] font-medium">
                      <Star className="w-3 h-3 inline mr-1" />
                      {gem.localTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Image Break: Atlas Village ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/art-atlas-mountain-village.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] text-white font-bold">
            &ldquo;Li ma 3andu blad, ma 3andu wlad&rdquo;
          </p>
          <p className="text-white/80 text-lg mt-3">
            &mdash; Moroccan proverb: Those who have no homeland have nothing.
          </p>
        </div>
      </section>

      {/* ── Seasonal Events & Festivals ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Festivals & Seasonal Events Worth Attending
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Amazigh New Year to the Gnaoua Festival, Morocco has events worth
            traveling for every month of the year. Prices vary seasonally.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalEvents.map((season) => (
              <div key={season.month} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {season.month}
                </h3>
                <div className="space-y-3">
                  {season.events.map((event, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{event.name}</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {event.location}
                      </p>
                      <p className="text-xs text-[var(--text-secondary)] mt-1">{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Family Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Family-Friendly Activities Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Outings the whole family will enjoy, from toddlers to grandparents.
            All budgets welcome.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyActivities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.activity} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                        {activity.activity}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {activity.region}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{activity.description}</p>
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-[var(--border-primary)]">
                    <span className="text-[var(--text-muted)]">
                      <Users className="w-3 h-3 inline mr-1" />
                      Ages: {activity.ageRange}
                    </span>
                    <span className="font-medium text-[var(--color-accent)]">{activity.budget}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Local Restaurants & Cafes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Restaurants & Cafes for Locals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            No tourist traps. These are the spots where Moroccans actually eat. Prices are real,
            quality is proven, and you will not be charged double for speaking Darija.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localEats.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {city.city}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {city.spots.map((spot, i) => (
                      <div key={i} className="pl-4 border-l-2 border-[var(--color-accent)]/30">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-[var(--text-primary)]">{spot.name}</p>
                          <span className="text-xs font-medium text-[var(--color-gold)]">{spot.price}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{spot.type}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{spot.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Student Budget Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Student-Friendly Budget Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Free and cheap things to do when the budget is tight but the desire to explore is strong.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentActivities.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.activity} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">
                        {item.activity}
                      </h3>
                      <p className="text-xs font-medium text-[var(--color-gold)]">{item.cost}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Image Break: Sunset ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/art-moroccan-sunset.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] text-white font-bold">
            Every Moroccan region has something extraordinary to offer.
          </p>
          <p className="text-white/80 text-lg mt-3">
            From the Rif to the Sahara, the Atlantic to the Atlas &mdash; your next adventure is closer than you think.
          </p>
        </div>
      </section>

      {/* ── Heritage Sites ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Heritage Sites Every Moroccan Should Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are the places that define Moroccan history and identity. If you have not
            visited them yet, put them on your list.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heritageSites.map((site) => {
              const Icon = site.icon;
              return (
                <div key={site.name} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {site.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {site.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{site.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <span className="text-xs font-medium text-[var(--color-accent)]">
                      <Ticket className="w-3 h-3 inline mr-1" />
                      Entry: {site.entry}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sports & Recreation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Trophy className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Local Sports & Recreation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Football clubs, running groups, hiking clubs, surf communities, and cycling groups
            across the country.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsRecreation.map((sport) => {
              const Icon = sport.icon;
              return (
                <div key={sport.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {sport.category}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{sport.description}</p>
                  <ul className="space-y-2">
                    {sport.clubs.map((club, i) => (
                      <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        {club}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── City-Specific Local Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            City Guides for Locals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to do in your city (or the city you are visiting) beyond the tourist surface.
          </p>
          <div className="space-y-8">
            {cityGuides.map((guide) => {
              const CityIcon = guide.icon;
              return (
                <div key={guide.city} className="card-moroccan overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative h-48 md:h-auto">
                      <img
                        src={guide.image}
                        alt={`${guide.city} cityscape for local guide`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                          {guide.city}
                        </h3>
                        <p className="text-white/80 text-sm flex items-center gap-1.5">
                          <CityIcon className="w-3.5 h-3.5" />
                          {guide.theme}
                        </p>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{guide.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {guide.highlights.map((highlight, i) => (
                          <div key={i}>
                            <p className="text-sm font-medium text-[var(--text-primary)] mb-1">
                              {highlight.title}
                            </p>
                            <p className="text-xs text-[var(--text-secondary)]">{highlight.detail}</p>
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

      {/* ── Practical Tips for Moroccan Travelers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Moroccan Road Trippers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know before hitting the road.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Autoroute Tips',
                icon: Car,
                tips: [
                  'Jawaz tag saves time at tolls. Recharge at any station or online.',
                  'Casablanca to Marrakech toll: approximately 70 MAD. Casablanca to Tangier: approximately 180 MAD.',
                  'Service stations every 40-60 km on autoroutes. Shell and Afriquia are the most common.',
                  'Gasoil (diesel) runs from 11 MAD/liter. Sans plomb (unleaded) from 13 MAD/liter. Prices fluctuate seasonally.',
                ],
              },
              {
                title: 'Accommodation Booking',
                icon: Building,
                tips: [
                  'Booking.com and Airbnb work well, but calling directly often gets a better price.',
                  'Ask for "tarif marocain" at hotels in tourist cities. Many have local rates.',
                  'Guesthouses (maison d\'hote) in small towns offer from 200 MAD/night with breakfast.',
                  'For groups, renting a villa or apartment on Avito is often the cheapest option.',
                ],
              },
              {
                title: 'Best Times to Travel',
                icon: Sun,
                tips: [
                  'Spring (March-May): Best weather nationwide. Almond blossoms, green landscapes.',
                  'Summer: Coastal cities only. Inland temperatures exceed 40C in July-August.',
                  'Autumn (September-November): Shoulder season with great weather and fewer crowds.',
                  'Winter: Atlas skiing, mild coast. Avoid mountain passes in heavy snow.',
                ],
              },
              {
                title: 'Safety & Essentials',
                icon: Heart,
                tips: [
                  'Keep your CIN (carte d\'identite) or passport on you at all times.',
                  'SAMU (medical emergency): 141. Gendarmerie: 177. Police: 19.',
                  'Download Waze for real-time traffic and police checkpoint alerts.',
                  'Carry cash in smaller towns. Orange Money and CashPlus are useful for transfers.',
                ],
              },
            ].map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Call to Action / Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Explore More of Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Budget Travel Guide',
                description: 'Real prices in MAD, money-saving tips, and city-by-city cost breakdowns for every budget tier.',
                href: '/budget-travel',
                icon: Ticket,
              },
              {
                title: 'Darija Phrasebook',
                description: 'Essential Moroccan Arabic phrases, pronunciation guide, and cultural expressions.',
                href: '/darija',
                icon: BookOpen,
              },
              {
                title: 'Moroccan Cuisine',
                description: 'Tagines, couscous, pastilla, street food, and the stories behind Morocco\'s legendary dishes.',
                href: '/cuisine',
                icon: UtensilsCrossed,
              },
              {
                title: 'Adventure Activities',
                description: 'Surfing, trekking, desert camping, mountain biking, and more across Morocco.',
                href: '/adventure',
                icon: Mountain,
              },
            ].map((guide) => {
              const Icon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <Icon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
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
    </>
  );
}
