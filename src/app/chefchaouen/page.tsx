import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Droplets,
  Star,
  MapPin,
  Clock,
  Bus,
  Car,
  Bed,
  Utensils,
  Sun,
  Camera,
  ArrowRight,
  Calendar,
  ThermometerSun,
  Compass,
  Heart,
  Mountain,
  Eye,
  Footprints,
  ShoppingBag,
  Coffee,
  Sparkles,
  Landmark,
  AlertTriangle,
  Info,
  Map,
  Sunrise,
  Sunset,
  CircleDollarSign,
  Shield,
  HelpCircle,
  Palette,
  Navigation,
  Waves,
  BookOpen,
  Users,
  Leaf,
  Building2,
} from 'lucide-react';

/* ================================================================
   METADATA + JSON-LD
   ================================================================ */

export const metadata: Metadata = {
  title: 'Chefchaouen Travel Guide - Morocco\'s Blue Pearl of the Rif | MoroccoGuide',
  description:
    'Complete guide to Chefchaouen, Morocco\'s famous blue city in the Rif Mountains. Discover blue-washed streets, hiking trails, Akchour Waterfalls, authentic restaurants, riads, and practical travel tips.',
  keywords: [
    'Chefchaouen',
    'blue city Morocco',
    'Rif Mountains',
    'Akchour Waterfalls',
    'Morocco travel',
    'blue pearl',
    'Chaouen',
    'medina',
    'hiking Morocco',
  ],
  openGraph: {
    title: 'Chefchaouen - Morocco\'s Blue Pearl of the Rif | MoroccoGuide',
    description:
      'Explore Morocco\'s most photogenic city. Blue-washed streets, Rif Mountain hikes, Akchour Waterfalls, and authentic Berber culture in the heart of northern Morocco.',
    url: 'https://moroccoguide.com/chefchaouen',
    type: 'website',
    images: [
      {
        url: '/images/hero-chefchaouen-streets.webp',
        width: 2800,
        height: 1600,
        alt: 'Blue-washed streets of Chefchaouen medina in the Rif Mountains, Morocco',
      },
    ],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/chefchaouen',
  },
};

/* ================================================================
   DATA
   ================================================================ */

const attractions = [
  {
    name: 'Plaza Uta el-Hammam',
    description:
      'The beating heart of Chefchaouen. This lively central square is flanked by cafes, the Grand Mosque, and the 15th-century Kasbah. Grab a mint tea, watch the world go by, and soak in the atmosphere where locals and travelers mingle beneath ancient trees.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Square',
    rating: 4.8,
    tip: 'Best in the evening when locals come out to socialize.',
  },
  {
    name: 'The Kasbah & Ethnographic Museum',
    description:
      'Built in the 15th century by Moulay Ali Ben Rachid, this restored fortress houses an ethnographic museum with traditional Rif costumes, weapons, musical instruments, and photographs. The garden courtyard is one of the most peaceful spots in the city. Climb the tower for panoramic views over the blue medina.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Museum',
    rating: 4.7,
    tip: 'Entry 70 MAD. Allow 45 minutes. The tower view alone is worth the price.',
  },
  {
    name: 'Grand Mosque',
    description:
      'Chefchaouen\'s main mosque stands on the plaza with its distinctive octagonal minaret, unique in Morocco. Non-Muslims cannot enter, but the exterior architecture is striking and best viewed from the plaza cafes. The octagonal tower is said to be inspired by the minaret in the old Andalusian town of Chaouen\'s founders.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Religious',
    rating: 4.5,
    tip: 'Best photographed from the Kasbah tower. Non-Muslims cannot enter.',
  },
  {
    name: 'Spanish Mosque',
    description:
      'Perched on a hill overlooking the town, this unfinished mosque from the Spanish colonial era offers the single best panoramic view of Chefchaouen. The 20-minute uphill hike is rewarded with a sweeping vista of blue rooftops cascading down the mountainside, backed by the twin peaks of Jebel el-Kelaa.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Viewpoint',
    rating: 4.9,
    tip: 'Go at sunset. Bring a headlamp for the walk back. The trail starts near Bab el-Ain.',
  },
  {
    name: 'Ras el-Maa Waterfall',
    description:
      'At the eastern edge of the medina where the mountain stream cascades over rocks, local women wash laundry in the traditional way while children play in the water. This is where the medina ends and the mountains begin. A beautiful, authentic scene that feels unchanged for centuries.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Natural',
    rating: 4.6,
    tip: 'Follow the path upstream for peaceful swimming spots away from crowds.',
  },
  {
    name: 'The Blue Medina Streets',
    description:
      'The main event. Chefchaouen\'s medina is a labyrinth of blue-painted walls, steps, doorways, and alleys in every shade from powder blue to deep cobalt. Unlike Fes or Marrakech, this medina is small, safe, and nearly impossible to get truly lost in. Every corner reveals a new composition of blue.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Historic',
    rating: 5.0,
    tip: 'The most vivid blues are in the residential area east of the plaza, near Rue Targhi.',
  },
  {
    name: 'Bab el-Ain',
    description:
      'One of the main gates into the old medina, Bab el-Ain marks the transition from the new town into the blue-washed world. The gate area is a gathering point for locals and the starting point for the Spanish Mosque hike. Nearby you will find a cluster of handicraft shops with better prices than the medina center.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Gate',
    rating: 4.4,
    tip: 'Start your medina exploration here for a logical walking route.',
  },
  {
    name: 'The Souks',
    description:
      'Chefchaouen\'s souks are refreshingly low-pressure compared to Marrakech. Browse handwoven blankets, goat cheese, local honey, leather goods, and the distinctive round straw hats worn by Rif Berbers. The artisans here still practice centuries-old crafts, and you can often watch them work.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Market',
    rating: 4.6,
    tip: 'Prices are already lower than Marrakech. Bargain gently, around 20-30% off asking.',
  },
  {
    name: 'Bab el-Souk',
    description:
      'The main commercial gate leading into the souk area, always bustling with activity. From here, the main shopping street leads uphill through increasingly blue neighborhoods. The area just outside the gate has several good juice stalls and street food vendors serving msemen and harira.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Gate',
    rating: 4.3,
    tip: 'Fresh orange juice stalls outside the gate charge 5-8 MAD per glass.',
  },
  {
    name: 'Rue Targhi & Rue Zanqat Kharrazine',
    description:
      'These two streets in the eastern medina are among the most intensely blue in all of Chefchaouen. Narrow, winding, and lined with potted plants against vivid blue walls, this is where the most iconic photographs are taken. Visit early morning before the crowds arrive for the best light and empty lanes.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Street',
    rating: 4.8,
    tip: 'Before 8 AM you will have these streets nearly to yourself.',
  },
  {
    name: 'Outa Hammam Bridge Viewpoint',
    description:
      'Cross the small bridge near the plaza for a classic framing of the Kasbah tower with blue buildings cascading behind it. This viewpoint is especially beautiful after rain when the blue paint is at its most saturated and vibrant.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Viewpoint',
    rating: 4.5,
    tip: 'After a rain shower, the blues become incredibly vivid for photography.',
  },
  {
    name: 'Hotel Casa Hassan Rooftop',
    description:
      'Even if you are not staying here, the rooftop terrace of this historic guesthouse offers one of the best in-medina views. Order a mint tea and look out over a sea of blue rooftops with the mountains as a backdrop. Several other riads also have rooftop terraces open to non-guests for the price of a drink.',
    image: '/images/hero-chefchaouen-streets.webp',
    type: 'Viewpoint',
    rating: 4.6,
    tip: 'Ask politely at any riad if you can visit the rooftop. Most welcome visitors.',
  },
];

const photographyGuide = [
  {
    title: 'The Blue Stairways of Rue Targhi',
    description: 'Narrow blue stairs with potted plants on each step. Head east from the plaza, turn right at the small fountain. Best light: early morning (7-9 AM) when sun hits the eastern-facing walls.',
    icon: Camera,
    time: 'Morning',
  },
  {
    title: 'Spanish Mosque Panorama',
    description: 'The iconic aerial view of the entire blue medina with Rif peaks behind. 20-minute hike from Bab el-Ain. Best light: golden hour before sunset when the blue rooftops glow.',
    icon: Sunrise,
    time: 'Sunset',
  },
  {
    title: 'Ras el-Maa Laundry Scene',
    description: 'Local women washing clothes in the mountain stream, a timeless scene. Always ask permission before photographing people. A smile and gesture go further than a telephoto lens.',
    icon: Waves,
    time: 'Mid-morning',
  },
  {
    title: 'The Blue Doorways',
    description: 'Scattered throughout the medina, ornate doors painted in contrasting shades of blue. The most photogenic cluster is on the streets south of the plaza near the leather tanneries.',
    icon: Eye,
    time: 'Any time',
  },
  {
    title: 'Cat Portraits',
    description: 'Chefchaouen is famous for its photogenic cats lounging on blue steps. They are everywhere and generally unbothered by cameras. The cats near Ras el-Maa are particularly friendly.',
    icon: Heart,
    time: 'Any time',
  },
  {
    title: 'The Hidden Instagram Alley',
    description: 'A narrow alley near the Kasbah where someone has painted the ground, walls, steps, and even the flower pots in matching shades of blue. Ask a local kid to show you, they know exactly where it is and will expect a small tip (5-10 MAD).',
    icon: Sparkles,
    time: 'Midday',
  },
];

const hikingTrails = [
  {
    name: 'God\'s Bridge (Pont de Dieu)',
    distance: '8 km round trip',
    difficulty: 'Moderate',
    duration: '3-4 hours',
    description:
      'A massive natural rock arch spanning a river gorge, carved by millennia of water erosion. The hike follows the Akchour river valley through lush vegetation and involves some scrambling over rocks. The bridge itself is awe-inspiring, a 25-meter natural stone arch high above a turquoise pool.',
    tips: 'Wear sturdy shoes with grip. The trail can be slippery after rain. Bring swimwear for the pools beneath the bridge. A guide is helpful but not strictly necessary if you follow the marked trail.',
    price: 'Free (20 MAD parking at Akchour)',
  },
  {
    name: 'Akchour Waterfalls',
    distance: '7 km round trip (both falls)',
    difficulty: 'Easy to Moderate',
    duration: '2-3 hours',
    description:
      'Two spectacular waterfalls set in a lush river canyon within Talassemtane National Park. The small waterfall (Cascades d\'Akchour) is a 1.5 km easy walk. The grand waterfall is a further 2 km upstream and plunges 40 meters into a crystal-clear pool. Both are suitable for swimming.',
    tips: 'Start early to avoid afternoon crowds. The grand waterfall trail has some exposed sections. Local guides at the trailhead charge 150-200 MAD and know the safest route. Pack lunch since there are no facilities at the falls.',
    price: '20 MAD parking, 150-200 MAD optional guide',
  },
  {
    name: 'Talassemtane National Park',
    distance: 'Various routes',
    difficulty: 'Easy to Challenging',
    duration: 'Half-day to multi-day',
    description:
      'A 58,950-hectare national park protecting rare Moroccan fir forests, deep gorges, and dramatic limestone peaks. The park shelters endangered species including the Barbary macaque. Multiple hiking routes ranging from gentle forest walks to challenging ridge traversals reward with stunning Rif Mountain scenery.',
    tips: 'Register at the park office in Chefchaouen or at the Talassemtane entrance. For multi-day treks, hire a licensed guide through the tourism office. Spring wildflowers (March-May) are spectacular.',
    price: '10 MAD park entry, guides 300-500 MAD per day',
  },
  {
    name: 'Jebel el-Kelaa',
    distance: '12 km round trip',
    difficulty: 'Challenging',
    duration: '5-7 hours',
    description:
      'The twin-horned mountain (1,616m) that looms over Chefchaouen is a demanding but unforgettable day hike. The trail climbs steeply through pine forests before reaching exposed rocky terrain near the summit. The view from the top encompasses the entire Rif range, the Mediterranean coast on clear days, and the blue city far below.',
    tips: 'Start before 7 AM in summer to avoid the heat. Carry at least 2 liters of water per person. The trail is not well-marked above the tree line, so a guide is strongly recommended. Not suitable in wet or windy conditions.',
    price: 'Free, guide recommended 300-400 MAD',
  },
];

const restaurants = [
  {
    name: 'Bab Ssour',
    cuisine: 'Traditional Moroccan',
    priceRange: '60-120 MAD',
    description: 'Widely considered the best restaurant in Chefchaouen. Set in a beautifully restored building near the main gate, Bab Ssour serves exceptional tagines, couscous, and grilled meats. The rooftop terrace has panoramic views. The lamb tagine with prunes and almonds is legendary. Reservations recommended for dinner.',
    mustTry: 'Lamb tagine with prunes and almonds',
  },
  {
    name: 'Aladdin Restaurant',
    cuisine: 'Moroccan & International',
    priceRange: '50-100 MAD',
    description: 'A long-running favorite overlooking Plaza Uta el-Hammam from a prime terrace position. The Moroccan menu is solid, with excellent harira soup and kefta tagine. The location is unbeatable for people-watching, though you pay slightly more for the view. Tourist-friendly with English menus.',
    mustTry: 'Kefta tagine with eggs, harira soup',
  },
  {
    name: 'Restaurant Beldi',
    cuisine: 'Traditional Moroccan',
    priceRange: '40-80 MAD',
    description: 'A locals favorite tucked away in the medina, serving honest home-style Moroccan cooking at genuine local prices. The portions are generous, the tajines are slow-cooked to perfection, and the atmosphere is unpretentious. This is where Chefchaouen families eat when they eat out.',
    mustTry: 'Chicken tagine with preserved lemons and olives',
  },
  {
    name: 'Sofia Restaurant',
    cuisine: 'Moroccan Fusion',
    priceRange: '60-150 MAD',
    description: 'A slightly upscale spot with a gorgeous terrace and creative takes on Moroccan classics. The menu includes some international options for those craving a change. The pastilla (savory-sweet pie) here is exceptional. Service is attentive and the ambiance is romantic for evening meals.',
    mustTry: 'Chicken pastilla, grilled kefta brochettes',
  },
  {
    name: 'Casa Aladdin',
    cuisine: 'Moroccan',
    priceRange: '50-100 MAD',
    description: 'Not to be confused with Aladdin Restaurant, this separate establishment on the plaza serves reliably good food with arguably the best terrace seating in the square. The Berber omelette is a great breakfast option, and the vegetable tagines are perfect for vegetarians.',
    mustTry: 'Berber omelette, vegetable tagine',
  },
  {
    name: 'Cafe Clock Chefchaouen',
    cuisine: 'Moroccan-International Fusion',
    priceRange: '50-120 MAD',
    description: 'Part of the acclaimed Cafe Clock group (also in Fes and Marrakech), this branch brings creative cooking, cultural events, and a cosmopolitan atmosphere to the medina. The famous camel burger is available here. Regular live music and storytelling events make it a cultural hub as well as a restaurant.',
    mustTry: 'Camel burger, date milkshake',
  },
];

const accommodations = [
  {
    name: 'Dar Echchaouen',
    type: 'Luxury Riad',
    priceRange: '1,200-2,500 MAD/night',
    description: 'The finest accommodation in Chefchaouen. This stunning riad combines traditional craftsmanship with modern luxury, featuring a hammam, pool, and rooftop restaurant with breathtaking views. Each room is uniquely decorated with local textiles and tilework. The service is impeccable.',
  },
  {
    name: 'Casa Hassan',
    type: 'Heritage Guesthouse',
    priceRange: '500-900 MAD/night',
    description: 'A Chefchaouen institution dating back decades. This charming guesthouse in the heart of the medina has character-filled rooms, a famous restaurant, and one of the best rooftop terraces in town. The owner is a wealth of local knowledge. Book well in advance for peak season.',
  },
  {
    name: 'Lina Ryad & Spa',
    type: 'Boutique Riad',
    priceRange: '800-1,500 MAD/night',
    description: 'A beautifully designed boutique riad with a spa, plunge pool, and elegant rooms decorated in a contemporary Moroccan style. The in-house hammam is excellent, and the breakfast spread is among the best in the city. Located in a quiet corner of the medina.',
  },
  {
    name: 'Dar Meziana',
    type: 'Mid-Range Riad',
    priceRange: '400-700 MAD/night',
    description: 'Excellent value riad with warm hospitality, comfortable rooms, and a lovely rooftop terrace. The owners speak multiple languages and go out of their way to help with local recommendations and tour bookings. Breakfast included.',
  },
  {
    name: 'Hostel Chefchaouen',
    type: 'Budget Hostel',
    priceRange: '80-150 MAD/night',
    description: 'The best budget option in town with clean dorms and private rooms. The communal rooftop terrace is a great place to meet fellow travelers. Kitchen access for self-catering. The location near the plaza means you are steps from everything.',
  },
  {
    name: 'Hotel Parador',
    type: 'Mid-Range Hotel',
    priceRange: '350-600 MAD/night',
    description: 'A Spanish colonial-era hotel on the edge of the medina with a swimming pool, garden, and restaurant. The rooms are simple but clean with mountain views. The pool is a real luxury after a day of hiking. Parking available for drivers.',
  },
];

const shopping = [
  {
    item: 'Woven Blankets & Rugs',
    priceRange: '100-500 MAD',
    description: 'Chefchaouen is famous for its handwoven wool blankets and rugs in striking patterns. The Rif Berber women who make them use techniques passed down through generations. Look for tight weaving and natural dyes for the best quality. Larger rugs can be shipped home.',
    where: 'Souks near Plaza Uta el-Hammam',
  },
  {
    item: 'Goat Cheese (Jben)',
    priceRange: '15-40 MAD per piece',
    description: 'Fresh, soft goat cheese made in the surrounding Rif Mountains is a local specialty you will not find this fresh anywhere else in Morocco. Sold wrapped in palm leaves at the market. Eat it the same day for best flavor, ideally with fresh bread and olive oil.',
    where: 'Morning market near Bab el-Ain',
  },
  {
    item: 'Local Honey',
    priceRange: '50-150 MAD per jar',
    description: 'Wild mountain honey from the Rif, ranging from light and floral to dark and intensely flavored. Some vendors sell thyme honey, wildflower honey, and rare varieties. Taste before buying. The genuine mountain honey is darker and more complex than commercial varieties.',
    where: 'Spice shops in the souks',
  },
  {
    item: 'Leather Goods',
    priceRange: '80-400 MAD',
    description: 'Handmade leather bags, belts, wallets, and sandals produced in small workshops within the medina. Quality varies, so inspect stitching and leather thickness. The round leather poufs that collapse for packing make excellent souvenirs.',
    where: 'Leather workshops near the tanneries',
  },
  {
    item: 'Blue-Painted Ceramics',
    priceRange: '30-200 MAD',
    description: 'Pottery and ceramics painted in the characteristic Chefchaouen blues. Plates, bowls, tagine pots, and decorative tiles make beautiful souvenirs. Some artisans will let you watch them paint. Ensure pieces are well-wrapped for travel.',
    where: 'Artisan shops throughout the medina',
  },
  {
    item: 'Round Rif Straw Hats',
    priceRange: '30-80 MAD',
    description: 'The distinctive wide-brimmed straw hats with pom-poms worn by Rif Berber women. They are both practical sun protection and a unique cultural souvenir. The women selling them near the plaza often wear them themselves.',
    where: 'Street vendors near the plaza and Bab el-Ain',
  },
];

const dayTrips = [
  {
    name: 'Akchour Falls & God\'s Bridge',
    distance: '30 km from Chefchaouen',
    duration: 'Full day',
    description: 'The most popular day trip from Chefchaouen combines two of the Rif Mountains\' greatest natural wonders. Drive or taxi to the village of Akchour, then hike to the waterfalls and the spectacular natural rock bridge. Pack a picnic and swimwear.',
    transport: 'Grand taxi (150-200 MAD round trip shared, 300-400 MAD private) or organized tour',
  },
  {
    name: 'Oued Laou Beach',
    distance: '60 km from Chefchaouen',
    duration: 'Full day',
    description: 'A Mediterranean fishing village with a long, uncrowded sandy beach. The drive through the Rif Mountains is spectacular, winding through valleys and past traditional villages. Fresh seafood at beachside restaurants is excellent and cheap. A perfect contrast to the mountain setting of Chefchaouen.',
    transport: 'Grand taxi (200-300 MAD round trip) or CTM bus (25 MAD one way)',
  },
  {
    name: 'Tetouan',
    distance: '65 km from Chefchaouen',
    duration: 'Full day',
    description: 'A UNESCO-listed medina with strong Andalusian character, Tetouan feels distinctly different from Chefchaouen. White-washed buildings, Spanish colonial architecture, an excellent archaeological museum, and a vibrant working medina with minimal tourism. Well worth the one-hour drive.',
    transport: 'CTM bus (35 MAD, 1.5 hours) or grand taxi (40-50 MAD per person)',
  },
  {
    name: 'Moulay Abdeslam Shrine',
    distance: '45 km from Chefchaouen',
    duration: 'Half day',
    description: 'A pilgrimage site sacred to Moroccan Sufis, set in a forested mountain village. The shrine of Moulay Abdeslam Ben Mchich is an important spiritual center. The surrounding cedar forests are beautiful for walking. Non-Muslims may visit the village but not the inner shrine.',
    transport: 'Grand taxi (150-200 MAD round trip) or organized tour',
  },
  {
    name: 'Talassemtane Forest Drive',
    distance: '20-40 km loop',
    duration: 'Half day',
    description: 'Rent a car or hire a driver to explore the mountain roads through Talassemtane National Park. Stop at viewpoints, walk through Moroccan fir forests (found nowhere else on earth), and visit remote Berber villages. The scenery is some of the most dramatic in all of Morocco.',
    transport: 'Rental car or private driver (400-600 MAD half day)',
  },
];

const faqItems = [
  {
    question: 'Why is Chefchaouen blue?',
    answer: 'Several theories exist and the truth is probably a combination. The most common explanation is that Jewish refugees who settled here in the 1930s painted buildings blue as a symbol of heaven and God\'s power. Others say the blue repels mosquitoes, keeps buildings cool, or was simply a cheap available pigment from local plants. Whatever the origin, residents now maintain the tradition because it defines their city\'s identity and attracts tourism.',
  },
  {
    question: 'How many days do I need in Chefchaouen?',
    answer: 'Two to three days is ideal. One full day for the medina and photography, one day for hiking (Akchour Falls or the Spanish Mosque), and optionally a third day for a day trip to Tetouan or Oued Laou. Many travelers stay longer than planned because the pace is so relaxing.',
  },
  {
    question: 'Is Chefchaouen safe for solo travelers and women?',
    answer: 'Chefchaouen is considered one of the safest cities in Morocco. The medina is small and easy to navigate, violent crime is extremely rare, and the atmosphere is notably relaxed. Solo female travelers generally report feeling comfortable here. Standard precautions apply: be aware of your surroundings at night and ignore occasional hustlers near the gates.',
  },
  {
    question: 'Will people try to sell me drugs?',
    answer: 'Yes. The Rif region is Morocco\'s cannabis-growing heartland, and you will almost certainly be offered hashish or kif (marijuana) on the streets. A polite but firm "la shukran" (no thank you) is sufficient. Do not engage in lengthy conversations with dealers. While cannabis is culturally embedded in the region, buying and possessing it is technically illegal for tourists and can result in fines or worse.',
  },
  {
    question: 'Can I drink the tap water?',
    answer: 'No. Stick to bottled water, which is widely available for 5-8 MAD per 1.5 liters. The mountain spring water at Ras el-Maa looks clean but should not be consumed untreated. Most restaurants use purified water for cooking.',
  },
  {
    question: 'Are there ATMs in Chefchaouen?',
    answer: 'Yes, but limited. There are a handful of ATMs near the plaza and outside Bab el-Ain, but they can run out of cash on busy weekends and holidays. Bring enough cash from Fes or Tangier as a backup. Credit cards are accepted at upscale riads and some restaurants but not in the souks or at small eateries.',
  },
  {
    question: 'What is the best time to visit?',
    answer: 'Spring (March to May) and autumn (September to November) are ideal. Summer (June to August) can be hot during midday but evenings are pleasant due to the altitude. Winter (December to February) is cold, occasionally wet, but atmospheric with fewer tourists. Avoid Moroccan school holidays and Eid if you want quieter streets.',
  },
  {
    question: 'Is Chefchaouen accessible for people with mobility issues?',
    answer: 'The medina is challenging for wheelchair users. Streets are steep, narrow, and cobbled with many steps. The new town is more accessible. Some riads have ground-floor rooms. The Spanish Mosque hike and Akchour trails are not wheelchair-accessible. Travelers with limited mobility can still enjoy the plaza, the Kasbah (partially accessible), and the lower medina streets.',
  },
  {
    question: 'Do I need a guide?',
    answer: 'For the medina, no. Chefchaouen is tiny compared to Fes or Marrakech, and getting lost is difficult. For hiking to Akchour or Jebel el-Kelaa, a guide is recommended for safety and navigation. Official guides can be arranged through your riad or the tourism office near the plaza for 300-500 MAD per day.',
  },
  {
    question: 'Can I take photos of people?',
    answer: 'Always ask permission first. Many locals, especially older women in the Rif, do not want to be photographed. A smile and a gesture toward your camera before shooting is the respectful approach. Some people will expect a small tip (5-10 MAD) for posed photos. Never photograph someone who has said no.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function ChefchaouenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Chefchaouen',
    description:
      'Morocco\'s famous Blue Pearl, a mountain city in the Rif range known for its blue-painted medina, stunning hiking trails, Akchour Waterfalls, and relaxed Berber culture. Founded in 1471 as a fortress against Portuguese invasion.',
    url: 'https://moroccoguide.com/chefchaouen',
    touristType: ['Photographers', 'Hikers', 'Culture Seekers', 'Backpackers', 'Solo Travelers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 35.1688,
      longitude: -5.2636,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Plaza Uta el-Hammam' },
      { '@type': 'TouristAttraction', name: 'The Kasbah Museum' },
      { '@type': 'TouristAttraction', name: 'Spanish Mosque' },
      { '@type': 'TouristAttraction', name: 'Ras el-Maa Waterfall' },
      { '@type': 'TouristAttraction', name: 'Akchour Waterfalls' },
      { '@type': 'TouristAttraction', name: 'God\'s Bridge (Pont de Dieu)' },
      { '@type': 'TouristAttraction', name: 'Talassemtane National Park' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-chefchaouen-streets.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Chefchaouen</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Chefchaouen
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Blue Pearl of the Rif
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            Nestled in the Rif Mountains at 600 meters, this blue-washed dreamscape has captivated
            travelers since its founding in 1471. Every wall, doorway, and stairway is painted in
            shades of blue so vivid they seem to glow, a mountainside labyrinth where the sky and
            the city are one.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Droplets className="w-3.5 h-3.5 mr-1.5" /> Blue Medina</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Mountain className="w-3.5 h-3.5 mr-1.5" /> Rif Mountains</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Camera className="w-3.5 h-3.5 mr-1.5" /> Photography Paradise</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Footprints className="w-3.5 h-3.5 mr-1.5" /> Hiking Trails</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Overview / Why It's Blue ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Blue City in the Mountains
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Chefchaouen, often shortened to &quot;Chaouen&quot; by locals, is a city that defies
              expectation. Founded in 1471 by Moulay Ali Ben Rachid as a small fortress to fight
              Portuguese and Spanish invasions of northern Morocco, it spent centuries as a closed,
              holy city that foreigners were forbidden to enter. Until 1920, only three Christians
              had ever set foot here.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              Today it is one of Morocco&apos;s most beloved destinations, home to roughly 45,000
              people and visited by hundreds of thousands of travelers each year, all drawn by the
              same magnetic force: the blue. Every shade from powder to cobalt to indigo adorns the
              walls, stairs, doorways, and rooftops of the medina, creating a chromatic experience
              unlike anywhere else on earth.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              The Rif Mountains provide a dramatic backdrop, rising to over 2,000 meters on all
              sides. The air here is cooler and crisper than the plains below, scented with pine
              and cedar. The pace of life is slower. The hassle that characterizes some Moroccan
              cities is largely absent here. In Chefchaouen, you can simply breathe.
            </p>
          </div>

          {/* Why it's blue */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Why Is Everything Blue?
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-moroccan p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4">
                  <Star className="w-6 h-6" />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  The Jewish Tradition
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  The most widely accepted theory. Jewish refugees fleeing Spanish persecution in
                  the 1930s brought the tradition of painting buildings blue, symbolizing the sky
                  and heaven, as a reminder of God&apos;s power. The practice was adopted by the
                  broader community and became the city&apos;s defining feature.
                </p>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Mosquito Repellent
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  A practical theory suggests the blue paint, traditionally derived from natural
                  indigo and copper compounds, acts as a mosquito repellent. The mountain streams
                  around Chefchaouen create breeding grounds for insects, and the blue pigment may
                  have offered genuine protection. Science has not conclusively proven this claim.
                </p>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Spiritual Meaning
                </h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  In Islamic tradition, blue represents water, sky, and the divine. Chefchaouen has
                  always been a deeply spiritual city, home to numerous saints&apos; tombs and Sufi
                  traditions. The blue may reflect this spiritual character, connecting the earthly
                  city to the heavens above. Residents simply say it keeps buildings cool and looks beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Attractions ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top Attractions
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Twelve must-see sights in and around the blue city, from iconic plazas to hidden viewpoints.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="tag bg-white/90 text-[var(--color-primary)] font-semibold">
                      {attraction.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                    <span className="text-white text-xs font-semibold">{attraction.rating}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-2">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                    {attraction.description}
                  </p>
                  <div className="flex items-start gap-2 text-xs text-[var(--color-accent)] bg-[var(--color-accent-50)] p-2 rounded-lg">
                    <Info className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>{attraction.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photography Guide ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Photography Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Chefchaouen is one of the most photogenic cities in the world. Here is how to capture it at its best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {photographyGuide.map((spot) => {
              const Icon = spot.icon;
              return (
                <div key={spot.title} className="card-moroccan p-6 group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {spot.title}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{spot.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Photography tips */}
          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Practical Photography Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <Sunrise className="w-4 h-4 text-[var(--color-accent)]" /> Golden Hour Timing
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    The medina faces roughly east-southeast, meaning morning golden hour (6:30-8:30 AM in
                    spring/summer, 7:30-9:30 AM in winter) lights up the blue walls beautifully. Afternoon light
                    creates deep shadows in the narrow streets. Sunset is best from elevated positions like the
                    Spanish Mosque or rooftop terraces.
                  </p>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[var(--color-accent)]" /> Instagram vs Reality
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    The most famous Instagram spots (the blue staircase with pots, the blue doorway with
                    bougainvillea) get crowded by 10 AM. But Chefchaouen&apos;s real beauty is in the unplanned
                    discoveries: a cat sleeping on a blue step, an old man reading the Quran in a doorway,
                    afternoon light through a latticed window. Put the phone away sometimes and just look.
                  </p>
                </div>
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[var(--color-accent)]" /> Photographing People
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    This is crucial. Many Rif Berber people, especially older women, are deeply uncomfortable
                    being photographed. Never shoot someone without asking. A smile and a gesture toward your
                    camera says enough. Accept &quot;no&quot; gracefully. Offering to show them the photo on your
                    screen often breaks the ice. Tipping 5-10 MAD for a portrait is standard and appreciated.
                  </p>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <Map className="w-4 h-4 text-[var(--color-accent)]" /> Hidden Gems
                  </h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    The eastern residential area above Ras el-Maa has streets just as blue as the famous ones
                    but with almost no tourists. The path along the river above Ras el-Maa offers unique
                    compositions with water and blue buildings. The view from the cemetery hill north of the
                    medina is lesser-known but stunning at sunrise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hiking & Nature ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Hiking &amp; Nature
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The Rif Mountains around Chefchaouen offer some of Morocco&apos;s most spectacular hiking,
            from gentle forest walks to challenging summit climbs.
          </p>

          <div className="space-y-6">
            {hikingTrails.map((trail) => (
              <div key={trail.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                    <Footprints className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                        {trail.name}
                      </h3>
                      <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                        {trail.difficulty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1"><Navigation className="w-3.5 h-3.5" /> {trail.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {trail.duration}</span>
                      <span className="flex items-center gap-1"><CircleDollarSign className="w-3.5 h-3.5" /> {trail.price}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      {trail.description}
                    </p>
                    <div className="flex items-start gap-2 text-xs text-[var(--color-accent)] bg-[var(--color-accent-50)] p-3 rounded-lg">
                      <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                      <span>{trail.tips}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Eat ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Eat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Chefchaouen&apos;s food scene is modest but honest. Expect hearty Rif Berber cooking with
            generous portions at prices that feel like a steal. Most meals run 40-150 MAD per person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {restaurant.name}
                      </h3>
                      <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                        {restaurant.cuisine}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mb-2 leading-relaxed">
                      {restaurant.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[var(--color-green)] flex items-center gap-1">
                        <CircleDollarSign className="w-3.5 h-3.5" /> {restaurant.priceRange}
                      </span>
                      <span className="text-xs text-[var(--color-accent)] font-medium">
                        Must try: {restaurant.mustTry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extra food tips */}
          <div className="mt-8 card-moroccan p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[var(--color-accent)]" /> Food Tips for Chefchaouen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-muted)]">
              <div>
                <p className="mb-3 leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Street food:</strong> Fresh-squeezed
                  orange juice (5-8 MAD), msemen flatbread (3-5 MAD), and harira soup (10-15 MAD) are
                  available from stalls near the gates. Breakfast at your riad is usually included and
                  worth eating, a spread of bread, jam, olive oil, cheese, and mint tea.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Local specialties:</strong> Try
                  &quot;bissara&quot; (fava bean soup), a Rif staple served with olive oil and cumin.
                  The local goat cheese (&quot;jben&quot;) is excellent and not available this fresh
                  elsewhere in Morocco. Rif-style couscous with buttermilk is a Friday tradition.
                </p>
              </div>
              <div>
                <p className="mb-3 leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Vegetarian-friendly:</strong> Chefchaouen
                  is more vegetarian-friendly than most Moroccan cities. Vegetable tagines, lentil soup,
                  zaalouk (eggplant dip), and fresh salads are available everywhere. Several restaurants
                  have dedicated vegetarian sections on their menus.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Tipping:</strong> Tipping 10% at
                  sit-down restaurants is standard. For quick meals and street food, rounding up or
                  leaving a few dirhams is appreciated but not required. Service charges are rarely
                  included.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Stay
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From luxury riads to backpacker hostels, Chefchaouen has accommodation for every budget.
            Book in advance during spring and autumn peak seasons.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                  <Bed className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {hotel.name}
                    </h3>
                    <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">{hotel.type}</span>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mb-2 leading-relaxed">{hotel.description}</p>
                  <span className="text-sm font-semibold text-[var(--color-green)] flex items-center gap-1">
                    <CircleDollarSign className="w-3.5 h-3.5" /> {hotel.priceRange}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" /> Accommodation Tips
            </h3>
            <ul className="text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[var(--text-primary)]">Stay in the medina.</strong> The whole point
                of Chefchaouen is the blue city. Staying outside it means you miss the magic of waking up
                surrounded by blue walls and stepping out your door into the labyrinth.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[var(--text-primary)]">Luggage access:</strong> Many medina riads
                require walking up steep, narrow streets with your bags. Pack light or arrange for your
                riad to send someone to meet you at the gate. Some higher-end riads offer porter services.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[var(--text-primary)]">Hot water:</strong> Budget accommodations
                may have unreliable hot water, especially in winter. Ask before booking if this matters
                to you. Mid-range and up generally have no issues.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <span><strong className="text-[var(--text-primary)]">Peak season:</strong> March through May and
                September through November see the highest demand. Book at least two weeks in advance. In
                summer and winter, you can often find rooms on arrival.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Shopping ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <ShoppingBag className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Shopping
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Chefchaouen&apos;s souks are small, walkable, and refreshingly low-pressure.
            Prices are already lower than Marrakech or Fes, and the artisans here still practice
            traditional Rif crafts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopping.map((item) => (
              <div key={item.item} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-accent-50)] text-[var(--color-accent)]">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {item.item}
                    </h3>
                    <span className="text-xs text-[var(--color-green)] font-semibold">{item.priceRange}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-xs text-[var(--color-primary)] flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {item.where}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hash / Kif Culture ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Cannabis &amp; Kif Culture: An Honest Discussion
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] mb-8">
              Any honest guide to Chefchaouen must address this. The Rif Mountains are the historic
              heartland of Moroccan cannabis cultivation, and the culture is deeply embedded in the
              region. Here is what you need to know.
            </p>

            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  The Cultural Context
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Cannabis (locally called &quot;kif&quot;) has been cultivated in the Rif Mountains for centuries,
                  long predating modern drug laws. For many Rif farming families, it has historically been a primary
                  source of income in a region with limited economic alternatives. The Rif is estimated to produce
                  the majority of the world&apos;s hashish. In 2021, Morocco legalized cannabis for medical and
                  industrial use, though recreational use remains illegal. The relationship between the government,
                  the industry, and the farming communities is complex and evolving.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  What Tourists Experience
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  You will be approached, probably multiple times, with offers to buy hashish or kif. This happens
                  on the streets, in the souks, and sometimes even from seemingly friendly locals who strike up
                  conversation. The approaches range from subtle (&quot;you want something special?&quot;) to
                  direct. Most sellers are harmless and will accept a polite &quot;la shukran&quot; (no thank
                  you). Do not feel pressured or threatened.
                </p>
              </div>

              <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" /> Legal Reality for Tourists
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                  Despite the relaxed atmosphere and open culture, cannabis possession remains illegal for
                  tourists. Police occasionally set up checkpoints on roads leaving Chefchaouen specifically
                  targeting tourists who have purchased drugs. Penalties can include fines, confiscation of your
                  passport, and in theory imprisonment, though fines and bribes are the more common outcome.
                </p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  Some tourist-targeted scams involve a seller working with police: you buy, you get stopped,
                  you pay a &quot;fine&quot; that is split between the seller and the officer. This is uncommon
                  but documented. The safest approach is simply to decline all offers politely and move on.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  How to Handle Approaches
                </h3>
                <ul className="text-sm text-[var(--text-muted)] space-y-2 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span>A firm but friendly &quot;la shukran&quot; (no thank you) or &quot;non merci&quot; is sufficient in almost all cases.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span>Do not engage in extended conversation if you are not interested. Politeness is good, but lingering invites persistence.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span>Avoid eye contact with obvious street dealers near the gates, especially after dark.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span>Never accept a &quot;free sample&quot; or an invitation to &quot;just come see my friend&apos;s farm.&quot;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                    <span>If you feel uncomfortable, step into a shop or cafe. The hassle is concentrated on a few streets near the gates and dissipates quickly inside the medina.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bus className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting There
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Chefchaouen has no train station and no airport. Getting here is part of the adventure.
            All routes wind through spectacular mountain scenery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Bus className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">From Fes by Bus</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                CTM operates direct buses from Fes to Chefchaouen. The journey takes approximately 4 hours
                through rolling farmland and into the Rif Mountains. Departures typically at 8:00 AM and
                3:00 PM. Cost is approximately 75 MAD one way. Book at the CTM station in Fes or online.
                The Fes bus station is outside the medina, accessible by petit taxi for 15-20 MAD.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4 hours</span>
                <span className="flex items-center gap-1"><CircleDollarSign className="w-3.5 h-3.5" /> 75 MAD</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Bus className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">From Tangier by Bus</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                CTM and other companies run buses from Tangier to Chefchaouen, taking roughly 3 to 3.5
                hours. This is a popular route for travelers arriving from Spain via ferry. The road is
                winding and mountainous, so sit near the front if you are prone to motion sickness. Cost
                is approximately 75-85 MAD. Multiple departures daily.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 3-3.5 hours</span>
                <span className="flex items-center gap-1"><CircleDollarSign className="w-3.5 h-3.5" /> 75-85 MAD</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Grand Taxis</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                Shared grand taxis run from Fes, Tangier, and Tetouan. They depart when full (six
                passengers) and are faster than buses but less comfortable. From Fes, expect to pay 80-100
                MAD per person. From Tetouan, around 35-40 MAD. Grand taxis drop you at the Chefchaouen
                taxi stand, a 10-minute walk from the medina gates or a 10 MAD petit taxi ride.
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 3-4 hours from Fes</span>
                <span className="flex items-center gap-1"><CircleDollarSign className="w-3.5 h-3.5" /> 80-100 MAD/person</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Driving Yourself</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                Driving to Chefchaouen is rewarding but demands attention. The mountain roads are winding
                with sharp switchbacks, steep drops, and occasional livestock on the road. The N2 from Fes
                via Ouazzane is well-paved but slow. From Tangier, the A4 motorway to Tetouan is fast,
                then the mountain road to Chefchaouen is scenic but twisting. Parking is available outside
                the medina gates for 20-30 MAD per night (guarded lots).
              </p>
              <div className="flex items-start gap-2 text-xs text-[var(--color-accent)] bg-[var(--color-accent-50)] p-2 rounded-lg">
                <AlertTriangle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>Night driving in the Rif Mountains is not recommended. Unlit roads, sharp curves, and occasional police checkpoints make it stressful and risky.</span>
              </div>
            </div>
          </div>

          {/* No train note */}
          <div className="mt-6 card-moroccan p-4 max-w-2xl mx-auto text-center">
            <p className="text-sm text-[var(--text-muted)] flex items-center justify-center gap-2">
              <Info className="w-4 h-4 text-[var(--color-primary)]" />
              <span>Chefchaouen has no train station. The nearest railway is in Fes (4 hours) or Tangier (3.5 hours).
              There is no domestic airport serving the city.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day Trips from Chefchaouen
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Chefchaouen is an excellent base for exploring the Rif Mountains and the nearby
            Mediterranean coast. These are the best excursions within easy reach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dayTrips.map((trip) => (
              <div key={trip.name} className="card-moroccan p-6 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {trip.name}
                    </h3>
                    <span className="text-xs text-[var(--text-muted)]">{trip.distance}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                  {trip.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-2">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {trip.duration}</span>
                </div>
                <p className="text-xs text-[var(--color-primary)] flex items-start gap-1">
                  <Car className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  <span>{trip.transport}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Practical Tips
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Everything you need to know to plan your visit and navigate the city smoothly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">How Long to Stay</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Two to three days is the sweet spot. Day one for exploring the medina and photography,
                day two for a hike (Akchour or Spanish Mosque), optional day three for a day trip or
                simply relaxing on a rooftop terrace. Many travelers who planned one night end up staying
                three.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <ThermometerSun className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Best Season</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Spring (March-May) and autumn (September-November) offer mild temperatures, clear skies,
                and manageable crowds. Summer is hot midday but pleasant mornings and evenings. Winter can
                be cold (5-12 degrees C) and occasionally rainy, but the medina is atmospheric and nearly
                empty of tourists. Avoid Moroccan holidays for quieter streets.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mountain className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Altitude Effects</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                At roughly 600 meters above sea level, Chefchaouen is noticeably cooler than the lowland
                cities. Bring a jacket for evenings year-round. The medina is built on a hillside, so
                expect constant up-and-down walking. If you are coming from sea level and plan to hike
                Jebel el-Kelaa (1,616m), give yourself a day to adjust.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Water Safety</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Do not drink the tap water. Bottled water is widely available (5-8 MAD for 1.5 liters).
                The mountain spring at Ras el-Maa looks pristine but should not be consumed untreated.
                Restaurants use purified water for cooking. Ice in drinks at reputable restaurants is
                generally safe, but stick to bottled water from street vendors.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Money &amp; ATMs</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                ATMs exist near the plaza and outside Bab el-Ain but can run out of cash on busy weekends.
                Bring sufficient cash from Fes or Tangier as a backup. Most riads and upscale restaurants
                accept cards, but the souks, small eateries, and taxis are cash-only. Budget roughly
                300-500 MAD per day for mid-range travel (accommodation, food, activities).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Safety</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Chefchaouen is one of the safest cities in Morocco. Violent crime against tourists is
                extremely rare. The main nuisances are persistent touts near the gates and the cannabis
                sellers discussed elsewhere. The medina is well-lit at night and feels safe to walk.
                Standard travel precautions apply: do not flash expensive items, keep valuables in your
                riad safe, and be cautious with new &quot;friends&quot; who want to take you somewhere.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">What to Pack</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Comfortable walking shoes with grip (cobblestones are slippery when wet), layers for
                temperature changes, a headlamp for dark medina streets at night, sunscreen, a refillable
                water bottle, a small daypack for hikes, and a camera. If hiking, bring proper footwear
                and rain gear in spring. Women may want a scarf for visiting religious areas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Getting Around</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                The medina is entirely walkable and car-free. You will not need any transport within the
                city. Petit taxis (blue, naturally) connect the bus station and parking lots to the medina
                gates for 10-15 MAD. For day trips, grand taxis depart from the station near the market.
                There is no Uber or ride-hailing app that works here.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Language</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Locals speak Darija (Moroccan Arabic) and many in the Rif also speak Tarifit Berber.
                French is widely understood and is the default second language. Spanish is spoken by many
                older residents due to the colonial history. English is spoken at tourist-facing businesses
                but less common than in Marrakech. Learning a few Arabic phrases goes a long way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Honest answers to the questions every traveler asks about Chefchaouen.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Itineraries ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Suggested Itineraries
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            How to spend your time in the Blue Pearl, whether you have one day or three.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Day 1 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">1</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Day One: The Blue City</h3>
              </div>
              <ul className="text-sm text-[var(--text-muted)] space-y-3 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Sunrise className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">7:00 AM:</strong> Early morning photography in the empty medina streets. Head to Rue Targhi for the best blue walls without crowds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Coffee className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">9:00 AM:</strong> Breakfast at your riad, then explore the souks. Buy goat cheese and bread for a picnic lunch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Landmark className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">11:00 AM:</strong> Visit the Kasbah museum (70 MAD). Climb the tower for panoramic views. Walk to Plaza Uta el-Hammam for mint tea.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Waves className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">2:00 PM:</strong> Wander east to Ras el-Maa waterfall. Follow the stream uphill for swimming spots. Picnic in the shade.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sunset className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">5:30 PM:</strong> Hike to the Spanish Mosque for sunset over the blue city. Bring a headlamp for the walk back.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">8:00 PM:</strong> Dinner at Bab Ssour. Try the lamb tagine with prunes. Walk the lantern-lit streets back to your riad.</span>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">2</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Day Two: Mountains &amp; Water</h3>
              </div>
              <ul className="text-sm text-[var(--text-muted)] space-y-3 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Sunrise className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">7:30 AM:</strong> Early breakfast at the riad. Pack water, snacks, and swimwear for the day.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">8:30 AM:</strong> Grand taxi to Akchour (45 minutes, 150-200 MAD shared). Arrive at the trailhead by 9:15 AM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Footprints className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">9:30 AM:</strong> Hike to the small waterfall first (1.5 km, 30 min). Then continue to the grand waterfall (2 km more). Swim in the pools.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">1:00 PM:</strong> Return to the fork and hike to God&apos;s Bridge (separate trail, 4 km). Picnic lunch at the bridge.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">4:00 PM:</strong> Taxi back to Chefchaouen. Rest at the riad or relax in a hammam (100-200 MAD).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">7:30 PM:</strong> Dinner at Restaurant Beldi for authentic local food at local prices. Evening tea on a rooftop terrace.</span>
                </li>
              </ul>
            </div>

            {/* Day 3 */}
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm">3</span>
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">Day Three: Explore &amp; Relax</h3>
              </div>
              <ul className="text-sm text-[var(--text-muted)] space-y-3 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Sunrise className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">8:00 AM:</strong> Leisurely breakfast. Revisit your favorite blue streets for morning light photography.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShoppingBag className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">10:00 AM:</strong> Serious souvenir shopping. Buy woven blankets, goat cheese, honey, and blue ceramics. Bargain gently.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Coffee className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">12:00 PM:</strong> Lunch at Cafe Clock. Try the camel burger and date milkshake. Catch any cultural events they have on.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Compass className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">2:00 PM:</strong> Option A: Day trip to Tetouan (1 hour). Option B: Walk the Talassemtane forest trails. Option C: Simply relax.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Eye className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">5:00 PM:</strong> Final rooftop terrace session. Mint tea, mountain views, and reflections on the blue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Utensils className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">7:30 PM:</strong> Farewell dinner at Sofia or Aladdin. Soak in the lantern-lit plaza one last time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <CircleDollarSign className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Budget Breakdown
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            What to expect in terms of daily spending in Chefchaouen, one of Morocco&apos;s more
            affordable destinations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-moroccan p-6 text-center">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">Budget</h3>
              <p className="text-2xl font-bold text-[var(--color-green)] mb-3">200-350 MAD/day</p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1 text-left">
                <li>Hostel dorm: 80-150 MAD</li>
                <li>Street food meals: 60-100 MAD</li>
                <li>Transport & activities: 50-100 MAD</li>
                <li>Roughly $20-35 USD per day</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 text-center border-2 border-[var(--color-primary)]">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">Mid-Range</h3>
              <p className="text-2xl font-bold text-[var(--color-green)] mb-3">500-900 MAD/day</p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1 text-left">
                <li>Riad private room: 300-600 MAD</li>
                <li>Restaurant meals: 120-200 MAD</li>
                <li>Activities & transport: 100-200 MAD</li>
                <li>Roughly $50-90 USD per day</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 text-center">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">Luxury</h3>
              <p className="text-2xl font-bold text-[var(--color-green)] mb-3">1,500-3,000+ MAD/day</p>
              <ul className="text-sm text-[var(--text-muted)] space-y-1 text-left">
                <li>Luxury riad suite: 1,200-2,500 MAD</li>
                <li>Fine dining: 200-400 MAD</li>
                <li>Private guide & transport: 500-800 MAD</li>
                <li>Roughly $150-300+ USD per day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 md:py-16">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Discover the Blue Pearl?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Chefchaouen is the kind of place that changes how you see color. Pack your camera,
            lace up your walking shoes, and prepare to fall under the spell of Morocco&apos;s most
            magical mountain city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Explore All Cities <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Plan Your Trip <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
