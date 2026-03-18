import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  ShoppingBag,
  Music,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Mountain,
  Sparkles,
  Globe,
  BookOpen,
  Wind,
  Gem,
  Users,
  AlertTriangle,
  Flame,
  Footprints,
  TreeDeciduous,
  Palette,
  Bath,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Top 30 Things to Do in Marrakech 2026 | Ultimate Guide',
  description:
    'Discover the best things to do in Marrakech in 2026. From Jemaa el-Fnaa and Jardin Majorelle to cooking classes, hammams, hot air balloons, and hidden souks. Complete guide with prices, insider tips, and local secrets.',
  keywords: [
    'things to do in Marrakech',
    'Marrakech activities',
    'Marrakech attractions',
    'what to do in Marrakech',
    'Marrakech sightseeing',
    'Marrakech things to see',
    'Jemaa el-Fnaa',
    'Jardin Majorelle',
    'Bahia Palace',
    'Marrakech souks',
    'Marrakech cooking class',
    'Marrakech hammam',
    'Marrakech hot air balloon',
    'Marrakech day trips',
    'Marrakech nightlife',
    'Marrakech medina',
    'Koutoubia Mosque',
    'Saadian Tombs',
    'Marrakech shopping',
    'Marrakech food tour',
    'Marrakech museums',
    'Marrakech 2026',
    'best Marrakech experiences',
    'Marrakech bucket list',
    'Marrakech travel guide',
  ],
  openGraph: {
    title: 'Top 30 Things to Do in Marrakech 2026 | Ultimate Guide',
    description:
      'The complete guide to Marrakech attractions, activities, and experiences. Historical sites, cultural immersion, adventure, food, shopping, and nightlife with prices in MAD.',
    url: `${BASE_URL}/things-to-do-marrakech`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech medina with Koutoubia Mosque minaret rising above the rooftops at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 30 Things to Do in Marrakech 2026',
    description:
      'Jemaa el-Fnaa, Jardin Majorelle, Bahia Palace, souks, cooking classes, hammams, hot air balloons, and more. Complete guide with real prices.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-marrakech` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-marrakech`,
  name: 'Top 30 Things to Do in Marrakech 2026 | Ultimate Guide',
  description:
    'Discover the best things to do in Marrakech in 2026. From Jemaa el-Fnaa and Jardin Majorelle to cooking classes, hammams, hot air balloons, and hidden souks.',
  url: `${BASE_URL}/things-to-do-marrakech`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  mainEntityOfPage: `${BASE_URL}/things-to-do-marrakech`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Marrakech',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Marrakech', item: `${BASE_URL}/marrakech` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-marrakech` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the top things to do in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top things to do in Marrakech include visiting Jemaa el-Fnaa square, exploring Jardin Majorelle, touring Bahia Palace and Saadian Tombs, getting lost in the souks, taking a cooking class, visiting a traditional hammam, and taking a hot air balloon ride at sunrise. Each offers a unique perspective on Moroccan culture.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most travelers find 3-4 days ideal for Marrakech. This allows time for the major sights (Jemaa el-Fnaa, Jardin Majorelle, Bahia Palace, souks), a cooking class or hammam experience, and a day trip to the Atlas Mountains or Essaouira. With 5-7 days, you can explore at a relaxed pace and add activities like a hot air balloon ride or Sahara desert excursion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Marrakech expensive to visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is very affordable. Street food costs from 15-40 MAD, museum entries from 10-70 MAD, and a traditional hammam from 50 MAD. Budget travelers can enjoy Marrakech on from 350-500 MAD per day, while mid-range travelers spend from 1,000-2,000 MAD per day including a beautiful riad stay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Marrakech is March to May and September to November, when temperatures are pleasant (20-30 degrees Celsius). Summer (June-August) can exceed 45 degrees. Winter (December-February) is mild during the day but cold at night. Spring is ideal for gardens and the surrounding countryside.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Marrakech safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is generally safe for tourists. The main concerns are petty theft in crowded areas like Jemaa el-Fnaa and the souks, and persistent touts offering unsolicited guide services. Keep valuables secure, be firm with touts, and use licensed guides for medina tours. Women travelers should dress modestly and may receive unwanted attention but serious incidents are rare.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I not miss in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not miss Jemaa el-Fnaa at sunset when the food stalls and entertainers come alive, Jardin Majorelle for its stunning blue architecture, the Bahia Palace for its intricate tilework, a traditional hammam for authentic relaxation, and a morning walk through the quieter parts of the medina. A rooftop dinner overlooking the city is also essential.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do day trips from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, excellent day trips from Marrakech include the Atlas Mountains and Imlil valley (1.5 hours), Essaouira coastal town (2.5 hours), Ouzoud Waterfalls (2.5 hours), Ourika Valley (45 minutes), and the Agafay Desert (45 minutes). The Ait Benhaddou kasbah is a longer day trip at 3.5 hours each way but well worth it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a cooking class cost in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A cooking class in Marrakech costs from 250 MAD for a basic group class to from 800 MAD for a private experience. Most half-day classes include a guided market visit to buy ingredients, hands-on cooking of 3-4 dishes, and eating what you prepare. Some upscale riads offer premium classes from 1,000-1,500 MAD with a professional chef.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HISTORICAL & CULTURAL LANDMARKS
   ═══════════════════════════════════════════════════════════════ */

const historicalAttractions = [
  {
    name: 'Jemaa el-Fnaa',
    icon: Globe,
    category: 'UNESCO World Heritage',
    price: 'Free',
    duration: '2-4 hours',
    bestTime: 'Late afternoon to evening',
    description:
      'The beating heart of Marrakech and a UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity. By day, orange juice sellers and henna artists line the square. At sunset, it transforms into an open-air carnival of food stalls, musicians, storytellers, Gnaoua performers, snake charmers, and acrobats. No visit to Marrakech is complete without spending an evening here.',
    insiderTip:
      'Arrive around 5 PM to watch the transformation. Grab a rooftop seat at Cafe de France or Nomad for the best views. For the food stalls, follow the locals — stall numbers 1, 14, and 31 are consistently popular. Avoid the "free" henna artists who demand payment after.',
  },
  {
    name: 'Bahia Palace',
    icon: Landmark,
    category: 'Historical Palace',
    price: 'From 70 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Morning (opens 9 AM)',
    description:
      'A masterpiece of Moroccan architecture built in the late 19th century for Grand Vizier Si Moussa. The name means "Palace of the Beautiful" and it lives up to it. Sprawling over 8,000 square meters, it features stunning zellige tilework, carved cedar ceilings, painted walls, marble floors, and a vast central courtyard with a garden. The harem quarters with 160 rooms are particularly impressive.',
    insiderTip:
      'Visit right at opening (9 AM) to avoid tour groups. The palace has no shade so bring water in summer. Look up constantly — the painted wooden ceilings are the real masterpiece. Free guided explanations are sometimes available at the entrance.',
  },
  {
    name: 'Saadian Tombs',
    icon: Landmark,
    category: 'Historical Monument',
    price: 'From 70 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Early morning',
    description:
      'Dating from the time of Sultan Ahmad al-Mansur in the late 16th century, these royal tombs were sealed and forgotten for centuries until their rediscovery in 1917 by aerial survey. The main mausoleum features 12 columns of Italian Carrara marble, intricate muqarnas (honeycomb) plasterwork, and the tombs of over 60 members of the Saadian dynasty. The Hall of Twelve Columns is breathtaking.',
    insiderTip:
      'This is one of the most crowded spots in Marrakech. Arrive before 9:30 AM or after 4 PM. The narrow entrance passage creates bottlenecks. Combine with the nearby Kasbah Mosque and Bab Agnaou gate for a historical quarter walk.',
  },
  {
    name: 'Koutoubia Mosque',
    icon: Landmark,
    category: 'Iconic Landmark',
    price: 'Free (exterior only, non-Muslims cannot enter)',
    duration: '30 minutes',
    bestTime: 'Golden hour (sunset)',
    description:
      'The largest mosque in Marrakech and its most iconic landmark, visible from almost anywhere in the city. The 77-meter minaret, completed in 1195, served as the template for the Giralda in Seville and the Hassan Tower in Rabat. The surrounding gardens are a peaceful escape from the medina chaos. At night, the illuminated minaret is a stunning sight against the dark sky.',
    insiderTip:
      'While non-Muslims cannot enter, the gardens around the mosque are perfect for a sunset walk. The best photograph of the minaret is from the northwest corner of Jemaa el-Fnaa. On Friday, the call to prayer from Koutoubia is particularly atmospheric.',
  },
  {
    name: 'Ben Youssef Madrasa',
    icon: BookOpen,
    category: 'Historical School',
    price: 'From 50 MAD',
    duration: '1 hour',
    bestTime: 'Morning',
    description:
      'Once the largest Islamic college in North Africa, this 14th-century madrasa housed up to 900 students. The architecture is among the finest in Morocco, with an enormous central courtyard surrounded by intricate stucco carving, zellige tilework, and carved cedar wood. The student cells on the upper floors offer a window into medieval scholarly life. After extensive renovation, it has reopened to visitors.',
    insiderTip:
      'The central courtyard is the most photographed spot. Visit early before the light becomes too harsh. Combine with the nearby Museum of Marrakech and Almoravid Koubba for a cultural morning. The tiny student cells upstairs are easy to miss but fascinating.',
  },
  {
    name: 'El Badi Palace',
    icon: Landmark,
    category: 'Historical Ruins',
    price: 'From 70 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Late afternoon',
    description:
      'Built in 1578 by Sultan Ahmad al-Mansur to celebrate victory over the Portuguese, this palace was once considered one of the most beautiful in the world, with walls of gold, onyx, and Italian marble. Today, only the impressive ruins remain — the palace was stripped by Moulay Ismail to furnish his own palace in Meknes. The vast sunken gardens and nesting storks make it hauntingly beautiful.',
    insiderTip:
      'Climb to the rooftop terrace for panoramic views over the medina and to the Atlas Mountains. The resident storks nesting on the ruined walls are a wonderful sight in spring. The underground prison cells are eerie but fascinating. Less crowded than Bahia Palace.',
  },
  {
    name: 'Mellah (Jewish Quarter)',
    icon: MapPin,
    category: 'Historical District',
    price: 'Free',
    duration: '1-2 hours',
    bestTime: 'Morning',
    description:
      'Marrakech had one of the largest Jewish communities in Morocco. The Mellah, established in 1558, features distinctive architecture with wooden balconies and window boxes unlike anywhere else in the medina. Visit the Lazama Synagogue (still functioning), the Miara Jewish Cemetery (one of the largest in Morocco), and the spice market at its entrance. A powerful testament to Morocco multicultural heritage.',
    insiderTip:
      'The Lazama Synagogue is easy to miss — look for the unassuming entrance in a narrow alley. The spice souk at the Mellah entrance has better prices than the main souks. The cemetery guardian will open the gate and appreciate a small tip of from 20 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GARDENS & MUSEUMS
   ═══════════════════════════════════════════════════════════════ */

const gardensAndMuseums = [
  {
    name: 'Jardin Majorelle & YSL Museum',
    icon: TreeDeciduous,
    category: 'Garden & Museum',
    price: 'From 150 MAD (garden + museum)',
    duration: '2-3 hours',
    bestTime: 'Opening time (8 AM)',
    description:
      'Created by French painter Jacques Majorelle in the 1920s and later restored by Yves Saint Laurent and Pierre Berge, this is Marrakech most famous garden. The electric "Majorelle Blue" buildings, exotic cacti, bamboo groves, and lily ponds create a surreal oasis. The adjacent YSL Museum showcases the designer couture in a stunning building. The Berber Museum inside the garden is also excellent.',
    insiderTip:
      'Buy tickets online to skip the queue — the line can be 45 minutes by mid-morning. The garden is small but incredibly photogenic. Visit early when the light filters through the bamboo. The YSL Museum alone is worth the trip for fashion enthusiasts. Allow 30 minutes for the Berber Museum.',
  },
  {
    name: 'Le Jardin Secret',
    icon: TreeDeciduous,
    category: 'Historic Garden',
    price: 'From 60 MAD',
    duration: '1-1.5 hours',
    bestTime: 'Mid-morning',
    description:
      'Hidden in the heart of the medina, this recently restored garden dates back to the Saadian dynasty. It features two formal gardens — an exotic garden with plants from around the world and an Islamic garden following traditional Moroccan principles. The tower offers stunning 360-degree views over the medina rooftops. A tranquil escape just steps from the bustling Mouassine quarter.',
    insiderTip:
      'Climb the tower for the best free rooftop view in the medina. The cafe inside serves excellent fresh juices and is a calm oasis for a mid-exploration break. Less visited than Majorelle, making it a more peaceful experience.',
  },
  {
    name: 'MACMA (Museum of African Contemporary Art)',
    icon: Palette,
    category: 'Art Museum',
    price: 'From 40 MAD',
    duration: '1 hour',
    bestTime: 'Afternoon',
    description:
      'Housed in a restored riad near the Bahia Palace, MACMA features rotating exhibitions of African contemporary art. The museum itself is a work of art — a beautiful traditional building with modern gallery spaces. It offers a refreshing cultural counterpoint to the historical sites and a glimpse into the vibrant African art scene.',
    insiderTip:
      'Check their website for current exhibitions before visiting. The rooftop terrace has lovely views and a peaceful atmosphere. Combined with a Bahia Palace visit, this makes for a perfect cultural half-day in the Kasbah quarter.',
  },
  {
    name: 'Maison de la Photographie',
    icon: Camera,
    category: 'Photography Museum',
    price: 'From 50 MAD',
    duration: '1 hour',
    bestTime: 'Afternoon',
    description:
      'A charming museum in a restored riad displaying a fascinating collection of vintage Moroccan photographs from 1870 to 1950. The images offer a window into pre-modern Morocco — Berber portraits, street scenes, landscapes, and daily life. The rooftop cafe serves excellent mint tea with panoramic views over the medina toward the Atlas Mountains.',
    insiderTip:
      'The rooftop cafe alone is worth the visit for the views and mint tea. The collection provides invaluable context for everything you see in the medina. Combine with a visit to nearby Ben Youssef Madrasa. Ask staff about the stories behind specific photographs.',
  },
  {
    name: 'Menara Gardens',
    icon: TreeDeciduous,
    category: 'Historic Garden',
    price: 'Free (pavilion from 10 MAD)',
    duration: '1 hour',
    bestTime: 'Late afternoon',
    description:
      'These 12th-century gardens on the western edge of the city feature a vast olive grove surrounding an artificial lake with a Saadian-era pavilion. On clear days, the Atlas Mountains reflect in the water behind the pavilion, creating one of Marrakech most iconic photographs. Popular with local families for evening walks, it offers an authentic local experience away from the tourist medina.',
    insiderTip:
      'Visit in late afternoon when the light on the Atlas Mountains is golden. This is where locals go to relax — it has a completely different atmosphere from the tourist circuit. Bring a picnic. The walk from the medina takes about 30 minutes along Avenue de la Menara.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD & CULINARY EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const foodExperiences = [
  {
    name: 'Marrakech Cooking Class',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 250 MAD',
    duration: '4-5 hours (half-day)',
    description:
      'Learn to prepare authentic Moroccan dishes — tagine, couscous, pastilla, and Moroccan salads — with a guided visit to a local market to buy fresh ingredients. Most classes include 3-4 dishes, bread-making, and eating everything you cook. Options range from group classes in cooking schools to private sessions in riad kitchens with professional chefs.',
    insiderTip:
      'Book a class that includes the market visit — it is the best way to understand Moroccan ingredients. Ask to learn dishes you can realistically recreate at home. La Maison Arabe and Cafe Clock offer highly rated classes. Private classes from 800 MAD are worth the upgrade for couples.',
  },
  {
    name: 'Jemaa el-Fnaa Food Stalls',
    icon: Flame,
    category: 'Street Food',
    price: 'From 20-60 MAD per dish',
    duration: '1-2 hours',
    description:
      'Every evening, over 100 food stalls set up in the main square serving everything from slow-cooked lamb heads and snail soup to grilled meats, fried fish, and Moroccan salads. It is the world largest open-air restaurant. The atmosphere is electric — steam rising, hawkers calling, and locals and tourists shoulder-to-shoulder on shared benches.',
    insiderTip:
      'Stalls with the most locals are the safest and tastiest. Try the harira soup, brochettes, and tanjia. Each stall has a number — note your favorites for return visits. The freshly squeezed orange juice at the edge of the square is the best value at from 5 MAD.',
  },
  {
    name: 'Guided Food Tour',
    icon: Footprints,
    category: 'Culinary Walking Tour',
    price: 'From 400 MAD',
    duration: '3-4 hours',
    description:
      'Explore the culinary side of the medina with a knowledgeable local guide who takes you to hidden food stalls, bakeries, spice shops, and neighborhood restaurants that most tourists never find. Taste 8-12 different dishes including msemen (flatbread), rfissa, tangia, pastilla, and Moroccan pastries. Most tours cover both the medina and the Mellah quarter.',
    insiderTip:
      'Book a morning tour when markets are freshest and temperatures are lower. Come hungry — you will eat a lot. The best tours go beyond the tourist circuit into real local neighborhoods. Ask your guide about Marrakech food culture and Ramadan traditions.',
  },
  {
    name: 'Rooftop Dinner Experience',
    icon: Star,
    category: 'Fine Dining',
    price: 'From 300-800 MAD per person',
    duration: '2-3 hours',
    description:
      'Dine on a candlelit rooftop terrace overlooking the medina as the call to prayer echoes across the city. Many upscale riads offer multi-course Moroccan tasting menus featuring the finest tagines, pastilla, mechoui (slow-roasted lamb), and Moroccan pastries. Some include live Gnaoua or Andalusian music. Nomad, Dar Yacout, and Le Jardin are top choices.',
    insiderTip:
      'Dar Yacout requires advance reservations and is considered the ultimate Marrakech dining experience from 600 MAD per person. For a more relaxed but equally scenic option, try Nomad or Terrasse des Epices at sunset. Book at least 2 days ahead for popular spots during high season.',
  },
  {
    name: 'Moroccan Mint Tea Ceremony',
    icon: Heart,
    category: 'Cultural Experience',
    price: 'From 15-30 MAD',
    duration: '30 minutes',
    description:
      'Mint tea is not just a drink in Morocco — it is a ritual of hospitality. Watch the theatrical pouring from height to create a froth, taste the perfect balance of fresh mint, Chinese gunpowder green tea, and sugar. Almost every riad, cafe, and shop will offer you tea. The best experiences are in traditional tea houses or during a home visit.',
    insiderTip:
      'Accepting tea in a shop does not obligate you to buy anything, despite what the shopkeeper implies. For the best tea experience, visit a traditional tea house in the medina rather than a tourist cafe. The tea at simple neighborhood cafes from 10 MAD is often better than at upscale spots.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ADVENTURE & OUTDOOR ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const adventureActivities = [
  {
    name: 'Hot Air Balloon Over Marrakech',
    icon: Wind,
    category: 'Adventure',
    price: 'From 1,800 MAD',
    duration: '4 hours (including transfer)',
    description:
      'Rise above the Marrakech plain at dawn for breathtaking views of the Atlas Mountains, the medina, and the surrounding palm groves and Berber villages. Flights last approximately one hour and include a traditional Berber breakfast upon landing. Some operators offer private flights for couples with champagne service.',
    insiderTip:
      'Book the earliest slot for the calmest air and best light. Flights operate October to May. Private flights from 3,000 MAD include just your group. Dress in layers — it is cold at altitude in early morning. Ciel d Afrique and Marrakech By Air are the most established operators.',
  },
  {
    name: 'Atlas Mountains Day Trip',
    icon: Mountain,
    category: 'Day Trip / Hiking',
    price: 'From 300 MAD',
    duration: 'Full day (8-10 hours)',
    description:
      'Just 90 minutes from Marrakech, the High Atlas Mountains offer a complete change of scenery. Visit the Berber village of Imlil (gateway to Toubkal, North Africa highest peak), hike through walnut groves and terraced fields, lunch in a traditional Berber home, and optionally ride a mule. In winter, skiing at Oukaimeden is also possible.',
    insiderTip:
      'Avoid the large group tours that rush through. Hire a private driver from 500 MAD for the day or join a small group. The Imlil valley is beautiful but Ourika Valley from 200 MAD is closer and equally scenic. For serious hikers, the 2-day Toubkal summit trek from 1,500 MAD is unforgettable.',
  },
  {
    name: 'Quad Biking in Agafay Desert',
    icon: Compass,
    category: 'Adventure',
    price: 'From 400 MAD',
    duration: '2-3 hours',
    description:
      'The rocky Agafay Desert, just 30 minutes from Marrakech, offers a Mars-like landscape perfect for quad biking adventures. Ride across barren hills with views of the Atlas Mountains, passing through small Berber settlements. Half-day and sunset tours are available. Some operators combine quad biking with a camel ride and dinner under the stars.',
    insiderTip:
      'Sunset tours are the most scenic but book up fast. Wear closed shoes and bring a scarf for dust protection. The combination packages with dinner in a luxury Agafay camp from 800 MAD are excellent value. Avoid the cheapest operators — machine quality and safety vary.',
  },
  {
    name: 'Camel Ride at Palmeraie',
    icon: Sun,
    category: 'Experience',
    price: 'From 200 MAD',
    duration: '1-2 hours',
    description:
      'Ride a camel through the Marrakech Palmeraie (palm grove), a vast oasis of over 100,000 palm trees on the edge of the city. Sunset rides are particularly magical as the light filters through the palms. Some tours include a stop at a Berber village for mint tea. A gentle introduction to camel riding before a potential Sahara adventure.',
    insiderTip:
      'Negotiate the price before mounting — the standard rate is from 200-300 MAD for one hour. Avoid touts in the medina who add 50-100% commission. Book directly through your riad or online. The sunset slot is busiest — early morning is more peaceful and photogenic.',
  },
  {
    name: 'Essaouira Day Trip',
    icon: Globe,
    category: 'Day Trip',
    price: 'From 150 MAD (by bus)',
    duration: 'Full day',
    description:
      'The charming coastal town of Essaouira is a 2.5-hour drive from Marrakech and makes a perfect day trip or overnight escape. Walk the 18th-century ramparts, explore the laid-back medina (also a UNESCO World Heritage site), eat the freshest seafood at the port, and watch surfers tackle the Atlantic waves. The contrast with Marrakech is refreshing.',
    insiderTip:
      'Take the Supratours bus from 80 MAD each way rather than an organized tour for flexibility. At the port, choose your own fish from the fishermen and have it grilled to order for from 50-80 MAD. The medina is much calmer than Marrakech and ideal for relaxed souk shopping without aggressive haggling.',
  },
  {
    name: 'Ouzoud Waterfalls Day Trip',
    icon: Mountain,
    category: 'Day Trip / Nature',
    price: 'From 250 MAD (tour)',
    duration: 'Full day (10-12 hours)',
    description:
      'The Cascades d Ouzoud are the highest waterfalls in North Africa at 110 meters, set in a lush gorge 2.5 hours northeast of Marrakech. Hike down to the base of the falls, swim in the natural pools, and spot the resident Barbary macaque monkeys in the olive trees. Small boat rides take you to the base of the main cascade. A stunning natural escape.',
    insiderTip:
      'Go on a weekday to avoid weekend crowds from Marrakech. The hike down takes 20-30 minutes and is steep — wear good shoes. The monkeys are wild but accustomed to humans — do not feed them. Bring swimwear for the natural pools. Spring (March-May) has the highest water flow.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING & SOUKS
   ═══════════════════════════════════════════════════════════════ */

const shoppingExperiences = [
  {
    name: 'Marrakech Souks',
    icon: ShoppingBag,
    category: 'Shopping & Culture',
    price: 'Free to explore',
    duration: '3-5 hours',
    description:
      'The largest traditional market in Morocco and possibly all of Africa, the Marrakech souks are a labyrinthine network of covered alleyways stretching north from Jemaa el-Fnaa. Each section specializes in a different craft: leather in the tanneries, metalwork in Place des Ferblantiers, carpets in Souk des Tapis, spices in Rahba Kedima, and fabrics near Souk Semmarine. Getting lost is part of the experience.',
    insiderTip:
      'Start at the main entrance on Souk Semmarine and work inward. Prices drop the deeper you go. Monday and Thursday mornings see the freshest artisan stock. Start haggling at 30-40% of the asking price. Say "la shukran" (no thank you) firmly to persistent sellers. Keep your phone and wallet secure.',
  },
  {
    name: 'Tanneries (Sidi Moussa)',
    icon: Palette,
    category: 'Artisan Quarter',
    price: 'Free (tip from 20 MAD)',
    duration: '30 minutes - 1 hour',
    description:
      'While not as famous as the Fes tanneries, the Marrakech tanneries offer a more intimate and less touristy experience. Watch leather workers dye hides in stone vats using traditional methods unchanged for centuries. The surrounding leather shops sell bags, jackets, and babouche slippers at better prices than the main souks. The smell can be intense.',
    insiderTip:
      'A local will likely guide you to a terrace overlooking the vats — a from 20 MAD tip is expected and fair. You will be offered fresh mint to hold under your nose against the smell. Buy leather goods here rather than in the tourist souks — prices are 30-50% lower. Morning visits have less odor.',
  },
  {
    name: 'Ensemble Artisanal',
    icon: Gem,
    category: 'Fixed-Price Shopping',
    price: 'Free entry',
    duration: '1-2 hours',
    description:
      'A government-run artisan complex near the Koutoubia Mosque where craftsmen work and sell their products at fixed prices. No haggling required. Watch woodworkers, leatherworkers, weavers, and metalworkers practicing their crafts. The prices are fair (sometimes slightly higher than a skilled haggler would achieve in the souks) but the stress-free experience and guaranteed quality make it worthwhile.',
    insiderTip:
      'Visit here first to understand fair prices before heading into the souks. The quality is consistently good and there are no fake products. It is also a great place to see traditional craftsmanship in action. Located on Avenue Mohammed V, a 10-minute walk from the medina.',
  },
  {
    name: 'Souk Semmarine & Rahba Kedima',
    icon: Sparkles,
    category: 'Spice & Herb Market',
    price: 'Free to explore',
    duration: '1-2 hours',
    description:
      'Rahba Kedima (the old square) is the heart of the spice trade in Marrakech. Pyramids of colorful spices — saffron, cumin, turmeric, ras el hanout — line the stalls alongside dried herbs, argan oil, traditional remedies, and kohl. The apothecaries here have been trading for generations. Souk Semmarine is the main arterial souk connecting Jemaa el-Fnaa to the deeper markets.',
    insiderTip:
      'Real saffron costs from 15-30 MAD per gram — if it is much cheaper, it is fake. Buy ras el hanout (mixed spice) from from 20 MAD for a bag. Argan oil is cheaper in cooperatives outside the city. The herbalists in Rahba Kedima also sell traditional Berber cosmetics and savon beldi (black soap) for the hammam.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELAXATION & WELLNESS
   ═══════════════════════════════════════════════════════════════ */

const wellnessExperiences = [
  {
    name: 'Traditional Hammam',
    icon: Bath,
    category: 'Wellness & Culture',
    price: 'From 50 MAD (public) / From 300 MAD (tourist)',
    duration: '1-2 hours',
    description:
      'The Moroccan hammam (steam bath) is one of the most essential cultural experiences in Marrakech. A public hammam involves steaming, scrubbing with a kessa glove and savon beldi (black soap), and rinsing — emerging with the softest skin of your life. Tourist-oriented hammams add essential oil massages, clay masks, and rose water in luxurious settings.',
    insiderTip:
      'For an authentic experience, visit a neighborhood public hammam from 50 MAD — ask your riad for the nearest one. Bring your own kessa glove and savon beldi from the souk (from 35 MAD total). For a luxurious spa experience, Heritage Spa, Le Bain Bleu, and Hammam de la Rose are top rated from 400-800 MAD.',
  },
  {
    name: 'Luxury Spa Experience',
    icon: Sparkles,
    category: 'Wellness',
    price: 'From 500-1,500 MAD',
    duration: '2-4 hours',
    description:
      'Marrakech has become a world-class spa destination. The finest riads and hotels offer elaborate spa treatments combining traditional hammam rituals with modern wellness therapies — argan oil massages, rose petal baths, ghassoul clay wraps, and orange blossom aromatherapy. La Mamounia and Royal Mansour spas are among the best in Africa.',
    insiderTip:
      'Many riads offer in-house spa treatments at lower prices than standalone spas. Book midweek for better availability and sometimes lower rates. The combination hammam-plus-massage packages from 600 MAD offer the best value. Some spas offer couples packages from 1,000 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NIGHTLIFE & ENTERTAINMENT
   ═══════════════════════════════════════════════════════════════ */

const nightlifeExperiences = [
  {
    name: 'Jemaa el-Fnaa by Night',
    icon: Star,
    category: 'Evening Entertainment',
    price: 'Free',
    duration: '2-3 hours',
    description:
      'The square transforms after dark into an extraordinary spectacle. Musicians perform Gnaoua, Chaabi, and Berber music. Storytellers captivate Darija-speaking crowds. Fire eaters and acrobats perform under gas lamps. It is free entertainment of a kind that has existed here for a thousand years. The energy peaks between 8 PM and 11 PM.',
    insiderTip:
      'If you stop to watch a performance, you will be expected to tip from 5-10 MAD. The halqa (performance circles) are constantly shifting. Watch your pockets in the crowds. For a more relaxed experience, watch from a rooftop cafe terrace above the square.',
  },
  {
    name: 'Rooftop Bar & Lounge',
    icon: Music,
    category: 'Nightlife',
    price: 'From 80-150 MAD per cocktail',
    duration: '2-3 hours',
    description:
      'Marrakech rooftop bars offer a sophisticated way to spend an evening. Sip cocktails overlooking the illuminated medina, often with live DJ sets or Moroccan music. Top spots include Barometre at the Pearl, El Fenn riad rooftop, Kabana at the Grand Cafe de la Poste, and the Sky Bar at La Renaissance Hotel. Many are alcohol-serving establishments in a Muslim country, so dress code applies.',
    insiderTip:
      'Alcohol is served openly in licensed establishments but is expensive by Moroccan standards. Cocktails from 80-150 MAD. Beer from 40-60 MAD. Dress smart — many bars have door policies. Thursday and Friday are the busiest nights. The rooftop at El Fenn is one of the most atmospheric.',
  },
  {
    name: 'Live Gnaoua Music',
    icon: Music,
    category: 'Cultural Entertainment',
    price: 'Free - From 200 MAD',
    duration: '1-2 hours',
    description:
      'Gnaoua music is a mesmerizing genre rooted in sub-Saharan African spiritual traditions, featuring hypnotic rhythms from sintir (bass lute), krakebs (metal castanets), and call-and-response chanting. In Marrakech, you can hear Gnaoua at Jemaa el-Fnaa for free, at dedicated music venues, or through private evening performances arranged by upscale riads. The annual Essaouira Gnaoua Festival is a short trip away.',
    insiderTip:
      'Cafe Clock in the Kasbah regularly hosts Gnaoua evenings — check their schedule. For a private experience, ask your riad to arrange a Gnaoua lila (spiritual ceremony) from 2,000 MAD for a group. The musicians at Jemaa el-Fnaa are authentic — a from 20 MAD tip is appreciated.',
  },
  {
    name: 'Dinner Show at Chez Ali',
    icon: Ticket,
    category: 'Entertainment',
    price: 'From 500 MAD',
    duration: '3-4 hours',
    description:
      'An elaborate Moroccan dinner show in a vast tented complex on the Marrakech outskirts. Features a multi-course Moroccan feast accompanied by belly dancers, Berber musicians, acrobats, fire performers, and a stunning horseback fantasy show (similar to the traditional Tbourida). While touristy, it is a genuinely entertaining evening and the equestrian performances are impressive.',
    insiderTip:
      'This is unashamedly a tourist experience, but the horseback show is spectacular and worth seeing once. Book through your riad for the best price — going through touts adds 30-50% markup. Transport from and to the medina is usually included. Combine with an early evening visit to Jemaa el-Fnaa first.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA & WALKING EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const walkingExperiences = [
  {
    name: 'Medina Walking Tour (Guided)',
    icon: Footprints,
    category: 'Cultural Tour',
    price: 'From 200 MAD (group) / From 500 MAD (private)',
    duration: '3-4 hours',
    description:
      'The best way to understand the labyrinthine medina is with a licensed local guide. A good walking tour covers the major monuments, explains the architecture and history, navigates the souks, introduces local artisans, and shares stories that bring the city to life. Guides can also help you access places that are otherwise difficult to find.',
    insiderTip:
      'Always use officially licensed guides (they carry an ID card from the Ministry of Tourism). Free walking tours (tip-based) are available through several companies. Private guides from 500 MAD offer a tailored experience. The best time for a walking tour is morning when temperatures are lower.',
  },
  {
    name: 'Self-Guided Medina Exploration',
    icon: Compass,
    category: 'Free Activity',
    price: 'Free',
    duration: '2-5 hours',
    description:
      'Getting gloriously lost in the Marrakech medina is one of the great travel experiences. Wander through narrow alleyways, discover hidden fountains and quiet riads, stumble upon artisan workshops, and find neighborhood mosques and shrines. The medina is surprisingly safe and getting lost just means finding new things. Use a downloaded offline map to eventually find your way back.',
    insiderTip:
      'Download Maps.me or Google Maps offline before entering the medina. Walk away from the main tourist routes — two streets off Souk Semmarine, the atmosphere changes completely. Follow the sound of hammering to find metalworkers, the smell of cedar to find woodworkers. The best exploring is in the Mouassine and Riad Laarouss quarters.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIPS
   ═══════════════════════════════════════════════════════════════ */

const budgetTips = [
  {
    tip: 'Visit Monuments Early',
    icon: Clock,
    description: 'Arrive at Bahia Palace, Saadian Tombs, and Jardin Majorelle right at opening time. You avoid the crowds and the heat. Early morning light is also the best for photography.',
    savings: 'Better experience, same price',
  },
  {
    tip: 'Eat Where Locals Eat',
    icon: UtensilsCrossed,
    description: 'Walk two streets away from Jemaa el-Fnaa for tagines at from 40 MAD instead of from 90 MAD on the square. Rue Bani Marine and the food stalls near Bab Doukkala offer authentic food at local prices.',
    savings: 'Save from 50-100 MAD per meal',
  },
  {
    tip: 'Combine Nearby Attractions',
    icon: MapPin,
    description: 'Group visits geographically. Northern medina: Ben Youssef Madrasa, Museum of Marrakech, Almoravid Koubba. Southern medina: Bahia Palace, Saadian Tombs, El Badi Palace, Mellah. Save on taxi fares and walking time.',
    savings: 'Save from 50-100 MAD on transport',
  },
  {
    tip: 'Use Free Walking Tours',
    icon: Footprints,
    description: 'Several companies offer free (tip-based) walking tours of the medina. They cover the main sights with a knowledgeable local guide. Tip from 50-100 MAD at the end based on your satisfaction.',
    savings: 'Save from 200-400 MAD vs. private guide',
  },
  {
    tip: 'Take the Public Hammam',
    icon: Bath,
    description: 'A public neighborhood hammam costs from 50 MAD including a scrub, compared to from 400-800 MAD at a tourist spa. The experience is more authentic and the scrub is usually more vigorous. Buy your own supplies from 35 MAD.',
    savings: 'Save from 300-700 MAD per visit',
  },
  {
    tip: 'Buy the Multipass',
    icon: Ticket,
    description: 'Marrakech offers a combined monument pass covering Bahia Palace, Saadian Tombs, and other sites at a discount. Ask at the first monument you visit or at the tourist office near Jemaa el-Fnaa.',
    savings: 'Save from 30-50 MAD on entries',
  },
  {
    tip: 'Drink Orange Juice at the Edge',
    icon: CheckCircle,
    description: 'The orange juice stalls on the perimeter of Jemaa el-Fnaa charge from 5 MAD per glass. The stalls in the center of the square charge from 10-15 MAD for the same juice. Quality is identical.',
    savings: 'Save from 5-10 MAD per glass',
  },
  {
    tip: 'Negotiate Taxi Fares',
    icon: AlertTriangle,
    description: 'Always insist on the meter for petit taxis. A metered ride across the medina costs from 15-25 MAD. Without a meter, drivers ask from 50-100 MAD. From the airport, agree on from 100-150 MAD before getting in.',
    savings: 'Save from 25-75 MAD per ride',
  },
  {
    tip: 'Visit Menara Gardens for Free',
    icon: TreeDeciduous,
    description: 'Menara Gardens are free to enter and offer a stunning backdrop of the Atlas Mountains. Le Jardin Secret from 60 MAD is a fraction of the cost of Jardin Majorelle from 150 MAD. Arsat Moulay Abdeslam cyber park is free.',
    savings: 'Save from 100-150 MAD on garden visits',
  },
  {
    tip: 'Book Direct, Skip Touts',
    icon: Globe,
    description: 'Medina touts and "helpful locals" add 30-50% commission on everything from restaurants to desert tours. Book activities online or through your riad. If a stranger leads you to a shop, they get a cut that you pay.',
    savings: 'Save 30-50% on activities and tours',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INSIDER TIPS
   ═══════════════════════════════════════════════════════════════ */

const insiderTips = [
  {
    tip: 'Learn Basic Darija',
    icon: BookOpen,
    description:
      'A few words of Moroccan Arabic go a very long way. "Salam" (hello), "shukran" (thanks), "la shukran" (no thanks), "bezzaf" (too much, for haggling), and "bsaha" (cheers/enjoy). Locals genuinely appreciate the effort and you will get better prices and warmer interactions.',
  },
  {
    tip: 'Dress Modestly in the Medina',
    icon: Users,
    description:
      'Marrakech is more liberal than other Moroccan cities, but shoulders and knees should be covered in the medina, especially when visiting mosques (exterior) and the older quarters. This applies to all genders. You will receive less unwanted attention and more respect from locals.',
  },
  {
    tip: 'Carry Small Bills Always',
    icon: CheckCircle,
    description:
      'Keep a supply of 10 MAD and 20 MAD notes. Many vendors, taxi drivers, and tipping situations require small change. Breaking a 200 MAD note at a small stall is difficult and sometimes used as an excuse to overcharge.',
  },
  {
    tip: 'Download Offline Maps',
    icon: MapPin,
    description:
      'The medina has poor data coverage in some areas and the alleys are confusing. Download Google Maps or Maps.me offline before entering. GPS works even without data. Save your riad location as a pin before you set out exploring.',
  },
  {
    tip: 'Time Your Visit Right',
    icon: Calendar,
    description:
      'March to May and September to November are ideal. Summer temperatures can exceed 45 degrees. Midday (12-3 PM) is best spent in a cool riad, museum, or restaurant even in moderate seasons. The medina comes alive in the evening.',
  },
  {
    tip: 'Avoid the Motorbikes',
    icon: AlertTriangle,
    description:
      'Motorbikes zip through the narrow medina alleys at surprising speed. Always walk to the side, keep children close, and listen for horns. Step into doorways when you hear a bike approaching in a narrow passage. It is the number one safety concern in the medina.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the top things to do in Marrakech?',
    answer:
      'The top things to do in Marrakech include visiting Jemaa el-Fnaa square at sunset, exploring Jardin Majorelle, touring Bahia Palace and the Saadian Tombs, getting lost in the souks, taking a cooking class (from 250 MAD), experiencing a traditional hammam (from 50 MAD), and optionally a hot air balloon ride at sunrise (from 1,800 MAD). Each offers a different facet of Moroccan culture.',
  },
  {
    question: 'How many days do you need in Marrakech?',
    answer:
      'Most travelers find 3-4 days ideal. Day 1: Jemaa el-Fnaa, Koutoubia Mosque, medina exploration. Day 2: Bahia Palace, Saadian Tombs, souks shopping. Day 3: Jardin Majorelle, cooking class, hammam. Day 4: Day trip to Atlas Mountains or Essaouira. With 5-7 days, add a hot air balloon, Ouzoud Waterfalls, and deeper medina exploration.',
  },
  {
    question: 'Is Marrakech expensive to visit?',
    answer:
      'Marrakech is very affordable. Street food costs from 15-40 MAD per dish, museum entries from 10-70 MAD, and a public hammam from 50 MAD. Budget travelers can enjoy Marrakech on from 350-500 MAD per day. Mid-range travelers spend from 1,000-2,000 MAD per day including a beautiful riad, guided tours, and restaurant meals.',
  },
  {
    question: 'What is the best time to visit Marrakech?',
    answer:
      'March to May and September to November are the best months, with pleasant temperatures of 20-30 degrees Celsius. Summer (June-August) regularly exceeds 45 degrees, making midday sightseeing difficult. Winter (December-February) is mild during the day (18-22 degrees) but cold at night. Spring is the most beautiful season for gardens and the surrounding countryside.',
  },
  {
    question: 'Is Marrakech safe for tourists?',
    answer:
      'Marrakech is generally safe. The main concerns are petty theft in crowded areas, persistent touts in the medina, and motorbikes in narrow alleys. Keep valuables secure, be firm with touts (say "la shukran"), use licensed guides, and always step aside for motorbikes. Women travelers should dress modestly. Serious crime against tourists is rare.',
  },
  {
    question: 'What should I not miss in Marrakech?',
    answer:
      'Do not miss Jemaa el-Fnaa at sunset (free), a rooftop dinner overlooking the medina (from 300 MAD), Jardin Majorelle (from 150 MAD), a hammam experience (from 50 MAD), and a morning exploring the quieter corners of the medina (free). A cooking class (from 250 MAD) and the Bahia Palace (from 70 MAD) are also essential experiences.',
  },
  {
    question: 'Can I do day trips from Marrakech?',
    answer:
      'Excellent day trips include the Atlas Mountains and Imlil (1.5 hours, from 300 MAD), Essaouira (2.5 hours, from 150 MAD by bus), Ouzoud Waterfalls (2.5 hours, from 250 MAD tour), Ourika Valley (45 minutes, from 200 MAD), and the Agafay Desert (45 minutes, from 400 MAD for quad biking). The Ait Benhaddou kasbah is a longer day trip at 3.5 hours each way.',
  },
  {
    question: 'How much does a cooking class cost in Marrakech?',
    answer:
      'A cooking class costs from 250 MAD for a group class to from 800 MAD for a private experience. Most half-day classes include a guided market visit to buy ingredients, hands-on cooking of 3-4 dishes, and eating everything you prepare. La Maison Arabe and Cafe Clock offer highly rated classes. Some upscale riads offer premium classes from 1,000-1,500 MAD.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/marrakech',
    icon: MapPin,
    title: 'Marrakech City Guide',
    description: 'The complete guide to Marrakech: neighborhoods, transport, accommodation, and planning your visit.',
  },
  {
    href: '/cooking-classes',
    icon: UtensilsCrossed,
    title: 'Morocco Cooking Classes',
    description: 'Detailed guide to the best cooking classes across Morocco with prices, what to expect, and booking tips.',
  },
  {
    href: '/souks',
    icon: ShoppingBag,
    title: 'Guide to Moroccan Souks',
    description: 'Navigate the souks like a local: haggling strategies, fair prices, what to buy, and where to find it.',
  },
  {
    href: '/hot-air-balloon',
    icon: Wind,
    title: 'Hot Air Balloon Marrakech',
    description: 'Everything about the Marrakech hot air balloon experience: operators, prices, what to expect, and best season.',
  },
  {
    href: '/morocco-food-tours',
    icon: Flame,
    title: 'Morocco Food Tours',
    description: 'The best food tours across Morocco, from Marrakech street food walks to Fes culinary experiences.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ThingsToDoMarrakechPage() {
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
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/marrakech" className="hover:text-white transition-colors">
              Marrakech
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top 30 Things to Do
            <br className="hidden md:block" /> in Marrakech
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the electrifying Jemaa el-Fnaa to hidden hammams and sunrise balloon rides.
            Your complete 2026 guide to the Red City&apos;s best experiences, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Marrakech: A City That Rewards the Curious
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Marrakech is a city of extraordinary sensory overload. The scent of cedar and spices
                in the souks, the call to prayer echoing from the Koutoubia minaret, the taste of
                slow-cooked tagine, the sight of zellige tilework in a thousand shades of blue and
                green, the sound of Gnaoua musicians in the square at dusk. No other city on earth
                packs so much into such a compact space.
              </p>
              <p>
                Whether you have three days or a week, Marrakech has enough to fill every hour. This
                guide covers 30 of the best things to do, organized by category: historical landmarks,
                gardens and museums, food and culinary experiences, adventure and day trips, shopping,
                wellness, nightlife, and walking experiences. Each includes real 2026 prices in MAD,
                practical logistics, and insider tips from people who know the city intimately.
              </p>
              <p>
                A budget traveler can experience the best of Marrakech on from 350-500 MAD per day. A
                mid-range traveler with riad stays and guided tours will spend from 1,000-2,000 MAD per
                day. And luxury travelers will discover that Marrakech offers world-class experiences
                at a fraction of European or American prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Overview: Top 10 Must-Do ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top 10 Must-Do Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Short on time? These are the ten experiences that define a visit to Marrakech.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Jemaa el-Fnaa at Sunset', price: 'Free', time: '2-4 hours', category: 'Cultural Icon' },
              { rank: 2, name: 'Jardin Majorelle & YSL Museum', price: 'From 150 MAD', time: '2-3 hours', category: 'Garden & Art' },
              { rank: 3, name: 'Bahia Palace', price: 'From 70 MAD', time: '1-1.5 hours', category: 'Historical' },
              { rank: 4, name: 'Get Lost in the Souks', price: 'Free', time: '3-5 hours', category: 'Shopping & Culture' },
              { rank: 5, name: 'Moroccan Cooking Class', price: 'From 250 MAD', time: '4-5 hours', category: 'Culinary' },
              { rank: 6, name: 'Traditional Hammam', price: 'From 50 MAD', time: '1-2 hours', category: 'Wellness' },
              { rank: 7, name: 'Saadian Tombs', price: 'From 70 MAD', time: '45 min - 1 hour', category: 'Historical' },
              { rank: 8, name: 'Atlas Mountains Day Trip', price: 'From 300 MAD', time: 'Full day', category: 'Adventure' },
              { rank: 9, name: 'Rooftop Dinner', price: 'From 300 MAD', time: '2-3 hours', category: 'Fine Dining' },
              { rank: 10, name: 'Hot Air Balloon at Sunrise', price: 'From 1,800 MAD', time: '4 hours', category: 'Adventure' },
            ].map((item) => (
              <div key={item.rank} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-bold text-[var(--color-accent)]">{item.rank}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {item.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Ticket className="w-3 h-3" />
                      {item.price}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historical & Cultural Landmarks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Historical &amp; Cultural Landmarks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech was founded in 1070 and has been a center of power, culture, and trade for nearly a thousand years.
            These are the monuments and districts that tell its story.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Opening times may change during Ramadan and national holidays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {historicalAttractions.map((attraction) => {
              const AttrIcon = attraction.icon;
              return (
                <div key={attraction.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AttrIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {attraction.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {attraction.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {attraction.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {attraction.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {attraction.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {attraction.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gardens & Museums ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TreeDeciduous className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gardens &amp; Museums
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech has a long tradition of beautiful gardens — oases of calm amid the sensory chaos of the medina.
            Its museums offer world-class art and photography in intimate settings.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Gardens are best visited in the morning before the heat builds. Most museums are closed on Tuesdays.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {gardensAndMuseums.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Sun className="w-3.5 h-3.5" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food & Culinary Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Culinary Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech is one of the great food cities of the world. From from 5 MAD street food to Michelin-worthy rooftop
            dinners, the culinary scene is as diverse as the city itself.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All food prices are starting prices. Tourist-area restaurants charge 30-50% more than local neighborhoods.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {foodExperiences.map((item) => {
              const FoodIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <FoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Adventure & Outdoor Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adventure &amp; Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech is the perfect base for adventure. The Atlas Mountains, Agafay Desert, Atlantic coast,
            and stunning waterfalls are all within day-trip distance.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Day trip prices are starting prices per person. Private tours cost more but offer flexibility. Book through your riad or online.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {adventureActivities.map((item) => {
              const AdvIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AdvIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shopping & Souks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Marrakech souks are the largest traditional market in Morocco. Whether you are buying or just
            browsing, navigating them is one of the defining experiences of the city.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Souk prices are always negotiable. Start at 30-40% of the asking price. Walk away if the price is too high.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {shoppingExperiences.map((item) => {
              const ShopIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ShopIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Relaxation & Wellness ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bath className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Relaxation &amp; Wellness
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The hammam is central to Moroccan daily life. From neighborhood steam baths to world-class luxury spas,
            Marrakech offers wellness experiences at every budget level.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Public hammams are single-gender. Tourist spas may offer mixed sessions. Ask your riad for neighborhood recommendations.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {wellnessExperiences.map((item) => {
              const WellIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WellIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nightlife & Entertainment ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife &amp; Entertainment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Marrakech has a surprisingly vibrant nightlife scene, from the free spectacle of Jemaa el-Fnaa to
            sophisticated rooftop bars and traditional music performances.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Alcohol is served in licensed hotels, bars, and restaurants. Dress codes apply at upscale venues.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {nightlifeExperiences.map((item) => {
              const NightIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <NightIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Medina Walking Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina Walking Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The medina is best experienced on foot. Whether guided or self-directed, walking is how you
            discover the real Marrakech.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {walkingExperiences.map((item) => {
              const WalkIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WalkIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {item.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {item.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {item.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Budget Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            10 Budget Tips for Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to stretch your budget further without missing out on any of the best experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Insider Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that makes the difference between a good trip and an unforgettable one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Sample 3-Day Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 3-Day Marrakech Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical day-by-day plan covering the essential experiences. Adjust based on your interests and pace.
          </p>

          <div className="space-y-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 1: The Medina &amp; Jemaa el-Fnaa
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Visit Bahia Palace (from 70 MAD) right at 9 AM opening. Walk to the Saadian Tombs (from 70 MAD).
                      Explore the Mellah and visit the Lazama Synagogue. Lunch at a local restaurant near Place des Ferblantiers (from 50 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Wander the souks north from Jemaa el-Fnaa — explore Souk Semmarine, Rahba Kedima spice market,
                      and the deeper craft souks. Visit the Koutoubia Mosque gardens at golden hour. Relax with mint tea at a cafe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Watch the sunset transformation of Jemaa el-Fnaa from a rooftop cafe. Descend to eat at the food stalls (from 30-60 MAD).
                      Enjoy the musicians and performers. Estimated Day 1 cost: from 300-500 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 2: Gardens, Art &amp; Cooking
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Jardin Majorelle and YSL Museum at 8 AM opening (from 150 MAD). Spend 2 hours exploring the garden,
                      Berber Museum, and the couture collection. Grab breakfast at the garden cafe.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Half-day cooking class (from 250 MAD) including a market tour, preparing 3-4 Moroccan dishes,
                      and eating your creations. Alternatively, visit Ben Youssef Madrasa (from 50 MAD) and Maison de la Photographie (from 50 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Traditional hammam experience (from 50 MAD public / from 300 MAD spa). Rooftop dinner at Nomad or
                      Terrasse des Epices (from 200-400 MAD). Estimated Day 2 cost: from 500-900 MAD.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Day 3: Adventure &amp; Beyond the Medina
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option A: Atlas Mountains</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Full-day trip to the Atlas Mountains and Imlil valley (from 300 MAD). Hike through Berber villages,
                      lunch in a traditional home, and enjoy stunning mountain scenery. Return to Marrakech by late afternoon.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Option B: Hot Air Balloon + Palmeraie</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Sunrise hot air balloon (from 1,800 MAD) with Berber breakfast. Afternoon camel ride in the Palmeraie
                      (from 200 MAD). Visit Le Jardin Secret (from 60 MAD) or the Menara Gardens (free).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Final souk shopping with your refined haggling skills. Farewell dinner at a riad restaurant (from 300 MAD).
                      One last walk through Jemaa el-Fnaa. Estimated Day 3 cost: from 400-2,200 MAD (depending on option).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                3-Day Budget Summary (per person, excluding accommodation)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-1,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free activities, street food, public hammam, bus day trip</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,500-4,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">All major sights, cooking class, spa hammam, restaurant meals</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 6,000-10,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Hot air balloon, private tours, fine dining, luxury spa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
            Continue Planning Your Marrakech Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Marrakech?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the ancient medina to the Atlas Mountains, Marrakech offers experiences that will stay with
            you forever. Start planning your trip with our complete city guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Marrakech City Guide
            </Link>
            <Link
              href="/cooking-classes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Cooking Classes
            </Link>
            <Link
              href="/hot-air-balloon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wind className="w-5 h-5" />
              Hot Air Balloon
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
