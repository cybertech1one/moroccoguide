import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Landmark,
  Star,
  Clock,
  MapPin,
  Camera,
  ArrowRight,
  Shield,
  Compass,
  Users,
  ShoppingBag,
  Sun,
  Utensils,
  Bed,
  Footprints,
  Palette,
  BookOpen,
  Ticket,
  CircleDollarSign,
  CalendarDays,
  Mountain,
  Moon,
  Map,
  Bus,
  Info,
  Lightbulb,
  Gem,
  Coffee,
  Eye,
  Heart,
  Navigation,
  Building,
  TreePine,
  Droplets,
  AlertTriangle,
  Leaf,
  HelpCircle,
  Sunrise,
  Tent,
  PackageCheck,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    'Chefchaouen City Guide 2025 | Morocco\'s Blue Pearl in the Rif Mountains',
  description:
    'The definitive Chefchaouen travel guide. Explore the Blue Pearl\'s painted medina, Plaza Uta el-Hammam, Kasbah museum, Spanish Mosque hike, Akchour Waterfalls, Ras el-Maa, Rif Mountain trails, photography spots, restaurants, riads, and practical tips for visiting.',
  keywords: [
    'Chefchaouen travel guide',
    'Chefchaouen blue city',
    'Morocco blue pearl',
    'Chefchaouen things to do',
    'Chefchaouen photography',
    'Chefchaouen medina',
    'Akchour Waterfalls',
    'Spanish Mosque Chefchaouen',
    'Rif Mountains Morocco',
    'Chefchaouen hotels',
    'Chefchaouen restaurants',
    'Chefchaouen hiking',
    'God\'s Bridge Morocco',
    'Talassemtane National Park',
    'Chefchaouen shopping',
    'blue streets Morocco',
    'Chefchaouen budget guide',
    'Ras el-Maa waterfall',
    'Plaza Uta el-Hammam',
    'Chefchaouen day trips',
  ],
  openGraph: {
    title: 'Chefchaouen City Guide - Morocco\'s Blue Pearl in the Rif Mountains',
    description:
      'Everything you need to know about Chefchaouen: the iconic blue medina, Rif Mountain hikes, Akchour Waterfalls, photography spots, local food, riads, and practical travel tips for Morocco\'s most photogenic city.',
    url: 'https://citytoursmorocco.com/chefchaouen',
    type: 'website',
    images: [
      {
        url: '/images/hero-chefchaouen-streets.webp',
        width: 1200,
        height: 630,
        alt: 'Blue-painted streets and stairways in the Chefchaouen medina with potted plants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chefchaouen City Guide 2025 | Morocco\'s Blue Pearl',
    description:
      'Complete guide to Chefchaouen: the blue medina, mountain hikes, photography spots, restaurants, riads, shopping, and travel tips for Morocco\'s most Instagrammed city.',
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/chefchaouen',
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': 'https://citytoursmorocco.com/chefchaouen',
  name: 'Chefchaouen City Guide - Morocco\'s Blue Pearl in the Rif Mountains',
  description:
    'Comprehensive travel guide to Chefchaouen, Morocco covering the blue medina, top attractions, hiking trails, photography spots, restaurants, accommodations, shopping, day trips, and practical travel tips.',
  url: 'https://citytoursmorocco.com/chefchaouen',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'City',
    name: 'Chefchaouen',
    alternateName: 'Chaouen',
    country: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://citytoursmorocco.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cities',
        item: 'https://citytoursmorocco.com/cities',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Chefchaouen',
        item: 'https://citytoursmorocco.com/chefchaouen',
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   TOP ATTRACTIONS DATA
   ═══════════════════════════════════════════════════════════════ */

const topAttractions = [
  {
    name: 'Plaza Uta el-Hammam',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'The vibrant heart of Chefchaouen and the largest public square in the medina. Flanked by the 15th-century Kasbah fortress on one side and the distinctive octagonal minaret of the Grand Mosque on the other, this expansive plaza is where daily life converges. Lined with cafes and restaurants whose tables spill across the cobblestones, it serves as a gathering place for locals sipping mint tea, travelers comparing stories, and street cats lounging in the dappled shade of the ancient trees. The energy shifts beautifully throughout the day &mdash; quiet mornings give way to bustling afternoons and romantic evenings under string lights.',
    fee: 'Free',
    hours: 'Open 24 hours; cafes typically 8:00 AM - 11:00 PM',
    tip: 'The cafes facing the Kasbah wall offer the best people-watching. Arrive before 9:00 AM for a peaceful breakfast when the plaza is washed in soft morning light and nearly empty. Evening is magical when the surrounding buildings glow blue under warm cafe lights.',
    rating: 4.7,
  },
  {
    name: 'The Kasbah & Ethnographic Museum',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'Built in the 15th century by Moulay Ali Ben Rachid, the founder of Chefchaouen, this fortress-turned-museum anchors the southeast corner of Plaza Uta el-Hammam. The Kasbah features a beautiful Andalusian garden courtyard shaded by towering trees and fragrant with jasmine, ringed by restored rooms that now house the Ethnographic Museum. The collection includes traditional Riffian weapons, musical instruments, elaborate bridal costumes, carved wooden chests, embroidered textiles, and old photographs documenting the city&apos;s history. The restored 15th-century dungeon and the rooftop tower offer commanding views over the blue medina and the Rif peaks beyond.',
    fee: '70 MAD',
    hours: '9:00 AM - 6:00 PM daily (closed Tuesdays)',
    tip: 'Climb the watchtower for the best elevated view of the medina and surrounding mountains. The Andalusian garden is a tranquil escape from the medina bustle &mdash; bring a book and linger. The museum is small enough to complete in 45 minutes.',
    rating: 4.5,
  },
  {
    name: 'The Grand Mosque',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'Chefchaouen&apos;s principal mosque, located on Plaza Uta el-Hammam, is instantly recognizable by its unique octagonal minaret &mdash; the only one of its kind in Morocco. Built in the 15th century and expanded in the 17th, the mosque&apos;s minaret reflects the Andalusian architectural heritage of the city&apos;s founders, who brought this octagonal form from Islamic Spain. While non-Muslims cannot enter, the exterior is a striking photographic subject, particularly when framed against the blue-painted buildings of the surrounding medina. The octagonal minaret glows beautifully at sunset.',
    fee: 'Non-Muslims may not enter (exterior viewing only)',
    hours: 'Exterior viewable at any time',
    tip: 'The best photographs of the octagonal minaret are taken from the Kasbah garden or from the rooftop terraces of nearby restaurants. At prayer time, the call to prayer echoing across the blue valley is one of the most evocative soundscapes in Morocco.',
    rating: 4.4,
  },
  {
    name: 'Spanish Mosque Sunset Hike',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'Perched on a hilltop northeast of the medina, the unfinished Spanish Mosque (Mosquee Espagnole) was built during the Spanish colonial period in the 1920s but never completed. Today it serves a far more important purpose: as the premier sunset viewpoint over Chefchaouen. The 20-30 minute uphill hike from the medina follows the Ras el-Maa river path and then climbs through pine and olive groves to the hilltop. From here, the entire blue medina spreads below like a sapphire quilt draped over the mountainside, framed by the dramatic peaks of Jebel el-Kelaa and Jebel Meggou. At sunset, the blue walls catch the golden light and the entire city transforms.',
    fee: 'Free',
    hours: 'Best visited 1-2 hours before sunset',
    tip: 'Start the hike at least 90 minutes before sunset to arrive with time to settle in. Bring a headlamp or phone flashlight for the walk back after dark &mdash; the trail is unlit. The path starts at Ras el-Maa waterfall (follow the river upstream). Wear decent shoes as the final stretch is steep and rocky.',
    rating: 4.9,
  },
  {
    name: 'Ras el-Maa Waterfall',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'Where the cold mountain river emerges from the Rif and tumbles over rocks at the northeastern edge of the medina, Ras el-Maa has been the communal gathering point for Chaouen&apos;s residents for centuries. Local women still come here to wash clothes and rugs in the clear mountain water, children splash in the shallow pools, and the sound of rushing water provides a natural soundtrack to this atmospheric spot. A traditional stone bridge spans the cascade, and several small cafes perch on the rocks above. This is where the trail to the Spanish Mosque begins, and where the blue medina gives way to the green wilderness of the Rif Mountains.',
    fee: 'Free',
    hours: 'Open 24 hours; most atmospheric in the morning',
    tip: 'Visit on a weekday morning to see local women doing laundry in the traditional way. The water is clean and cold &mdash; a refreshing foot-soak on hot days. Follow the path upstream from Ras el-Maa for a scenic walk along the river gorge, even if you do not plan to hike to the Spanish Mosque.',
    rating: 4.6,
  },
  {
    name: 'The Blue Streets (Medina Exploration)',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'Chefchaouen&apos;s blue-painted medina is, of course, the main attraction itself. Unlike Fes or Marrakech, this is a medina you explore by wandering without a map &mdash; it is compact enough that you cannot get truly lost, and every turn reveals another photogenic composition of blue walls, colorful plant pots, ornate doorways, and narrow stairways. The blue wash ranges from powder blue to deep indigo to cobalt, and no two streets are the same shade. The medina has been continuously painted blue since at least the 1930s, though the tradition may date to the 15th-century Jewish community who associated blue with the divine. Today, residents maintain the blue as both tradition and tourist draw.',
    fee: 'Free',
    hours: 'Best explored early morning (7:00 - 9:00 AM) or late afternoon',
    tip: 'The most photogenic streets are in the northeastern quarter of the medina, between Bab el-Ain and Ras el-Maa. Look for the famous narrow blue stairway near Rue Targhi. Venture away from the main tourist routes &mdash; the residential streets deeper in the medina are quieter, more authentic, and often more beautifully painted.',
    rating: 4.9,
  },
  {
    name: 'Bab el-Ain (Gate of the Spring)',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'One of the principal historic gates into the Chefchaouen medina, Bab el-Ain sits at the southeastern entrance and takes its name from the natural springs that flow through this part of the city. The gate itself is a modest but beautiful arched portal, but its real value is as a gateway to some of the most scenic and least visited corners of the medina. Passing through Bab el-Ain and heading uphill leads through a series of increasingly narrow, deeply blue streets that climb toward the mountain. This is the more residential, less commercialized side of the medina where you can experience daily life without the souvenir shops.',
    fee: 'Free',
    hours: 'Open 24 hours',
    tip: 'Enter through Bab el-Ain in the morning and explore the streets heading uphill toward the northeast. These upper residential areas have some of the most intensely blue-painted houses in the city, as well as hidden viewpoints looking down over the medina rooftops.',
    rating: 4.3,
  },
  {
    name: 'The Souks of Chefchaouen',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'While smaller and more relaxed than the overwhelming souks of Fes or Marrakech, Chefchaouen&apos;s market streets offer a distinctly Riffian shopping experience with far less aggressive salesmanship. The main commercial streets radiate from Plaza Uta el-Hammam, with shops selling handwoven blankets and rugs in bold geometric patterns (a Riffian specialty), round goat cheese wheels, local honey, leather goods, djellabas, blue-painted ceramics and pottery, and the distinctive wide-brimmed straw hats worn by Riffian women. Bargaining is expected but the atmosphere is notably gentler than in larger Moroccan cities.',
    fee: 'Free to browse',
    hours: 'Most shops open 9:00 AM - 8:00 PM (some close for lunch 1:00 - 3:00 PM)',
    tip: 'The best handwoven blankets are found in the shops along the alleys east of the plaza. Ask to see them unfolded completely &mdash; quality varies enormously. For the most authentic goat cheese, buy from women selling in the small square near Bab el-Ain. Start bargaining at about 40-50% of the asking price.',
    rating: 4.5,
  },
  {
    name: 'Jebel el-Kelaa Viewpoint',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'The twin limestone horns of Jebel el-Kelaa (literally "Fortress Mountain") rise dramatically behind Chefchaouen to an elevation of 1,616 meters, forming the city&apos;s most iconic natural backdrop. While the full summit hike is a serious half-day endeavor, a shorter trail to the lower viewpoints (about 1 hour from the medina edge) rewards with extraordinary bird&apos;s-eye perspectives of the entire blue city set against the vast green valley of the Rif. The mountain is also home to colonies of Barbary macaques, stands of ancient cedar, and a wealth of wildflowers in spring.',
    fee: 'Free',
    hours: 'Daylight hours; start early for the summit attempt',
    tip: 'The trailhead is above Ras el-Maa. For the short viewpoint hike, follow the trail that branches left (north) after about 20 minutes. The full summit requires 3-4 hours round trip and proper hiking shoes. Bring plenty of water &mdash; there is no shade on the upper slopes.',
    rating: 4.7,
  },
  {
    name: 'Artisan Paint Workshops',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'Several local artisans in Chefchaouen offer hands-on workshops where visitors can learn traditional skills. The most popular are painting workshops where you create your own blue-themed artwork inspired by the medina, guided by local artists in their studios. Other experiences include traditional weaving demonstrations using the wooden looms that produce Chefchaouen&apos;s distinctive striped blankets, leather-working sessions, and guided photography walks led by residents who know every hidden angle and perfect blue doorway.',
    fee: '150-400 MAD depending on workshop type and duration',
    hours: 'Typically 10:00 AM - 12:00 PM or 3:00 - 5:00 PM (booking required)',
    tip: 'Ask at your riad for recommended workshops &mdash; the best ones are run by local families who have practiced these crafts for generations. Photography workshops are particularly worthwhile as local guides can take you to spots you would never discover alone.',
    rating: 4.4,
  },
  {
    name: 'Oued Laou Valley Drive',
    image: '/images/hero-chefchaouen-streets.webp',
    description:
      'The scenic road from Chefchaouen northwest to the Mediterranean fishing village of Oued Laou is one of the most spectacular drives in northern Morocco. The route descends from the Rif Mountains through a dramatic river valley, passing through terraced fields, small Berber villages, and lush riverside landscapes before arriving at the quiet beach town on the Mediterranean coast. The journey takes about 1.5 hours and can be done as a day trip by grand taxi.',
    fee: 'Grand taxi: approximately 30-40 MAD per person (shared)',
    hours: 'Daylight hours recommended; depart early morning',
    tip: 'Saturday is market day in Oued Laou, making it the best day for a visit. The beach is long and usually uncrowded outside July-August. Combine with a seafood lunch at one of the beachfront restaurants for a perfect day trip from Chefchaouen.',
    rating: 4.3,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PHOTOGRAPHY GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const photographySpots = [
  {
    name: 'The Blue Stairway (Rue Targhi)',
    description:
      'The most photographed spot in Chefchaouen: a narrow stairway flanked by deep blue walls, often adorned with colorful potted plants and draped textiles. This iconic composition has been shared millions of times on social media, making it the single most recognizable image of the city.',
    bestTime: 'Early morning (7:00 - 8:30 AM) before crowds arrive',
    technique: 'Shoot from below looking up. A wide-angle lens exaggerates the narrowness. Include the plant pots for color contrast against the blue.',
  },
  {
    name: 'Spanish Mosque Panorama',
    description:
      'The definitive overview shot of Chefchaouen. From the hilltop mosque, the entire blue medina spreads below, backed by the dramatic twin peaks of Jebel el-Kelaa and framed by the green Rif valley.',
    bestTime: 'Golden hour before sunset for warm light on the blue walls',
    technique: 'Bring a telephoto lens (70-200mm) to compress the layers of blue rooftops. A wide shot with the foreground mosque ruin adds dramatic framing. Tripod recommended for long exposures as light fades.',
  },
  {
    name: 'Ras el-Maa River Scenes',
    description:
      'Authentic daily life photography at its best. Local women washing colorful rugs in the river, children playing in the water, and the ancient stone bridge create naturally compelling compositions against the backdrop of blue buildings and green mountainside.',
    bestTime: 'Mid-morning (9:00 - 11:00 AM) when laundry activity is at its peak',
    technique: 'Always ask permission before photographing people, especially women. A medium zoom allows candid shots from a respectful distance. The reflections in the water add a beautiful secondary element.',
  },
  {
    name: 'The Residential Northeast Quarter',
    description:
      'The streets between Bab el-Ain and the upper medina are the hidden gem for photographers. Here, the blue paint is often more vivid, the doorways more ornate, and the flower displays more abundant &mdash; all without the tourist foot traffic of the main streets.',
    bestTime: 'Late afternoon (4:00 - 6:00 PM) when angled sunlight creates long shadows on the blue walls',
    technique: 'Look for light-and-shadow contrasts. A figure in a djellaba walking through a beam of light in a narrow blue alley is the quintessential Chefchaouen photograph. Patience is rewarded here.',
  },
  {
    name: 'Plaza Uta el-Hammam Night Scene',
    description:
      'After dark, the plaza transforms into a warm, atmospheric scene of string lights, glowing cafe windows, and the illuminated Kasbah wall. The contrast of warm artificial light against the blue buildings creates a moody, inviting composition.',
    bestTime: 'Blue hour (30 minutes after sunset) for the perfect sky-to-building contrast',
    technique: 'Tripod essential. Long exposure (2-4 seconds) to smooth the crowd movement while keeping buildings sharp. Include the octagonal minaret for a distinctive silhouette.',
  },
  {
    name: 'Doorways and Details Collection',
    description:
      'Chefchaouen&apos;s doorways are masterworks of folk art. Traditional Moroccan arched doors painted in contrasting colors &mdash; blue doors against blue walls, teal against powder blue, cobalt against white &mdash; often decorated with heavy iron knockers, geometric carvings, and framed by cascading bougainvillea or hanging pots of geraniums.',
    bestTime: 'Overcast days produce the most saturated blues; avoid harsh midday sun',
    technique: 'Shoot doors and details straight-on for symmetry. A 35mm or 50mm lens is ideal. Create a series of 9 or 12 doorways for a powerful grid composition on social media.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HIKING TRAILS DATA
   ═══════════════════════════════════════════════════════════════ */

const hikingTrails = [
  {
    name: 'God\'s Bridge (Pont de Dieu)',
    distance: '10 km one way from trailhead',
    difficulty: 'Moderate',
    duration: '4-5 hours round trip',
    description:
      'One of Morocco&apos;s most spectacular natural formations. God&apos;s Bridge is a massive natural stone arch spanning the Farda River gorge in the Talassemtane National Park, about 25 km from Chefchaouen. The arch is roughly 25 meters wide and sits above deep, crystal-clear turquoise pools perfect for swimming. The hike follows the river valley through lush forest, past smaller cascades and rock pools, and the trail is well-marked but includes some rocky scrambling near the bridge itself.',
    howToGet: 'Take a grand taxi to the trailhead at the Akchour village (30 MAD per person, 45 minutes). The trail to God\'s Bridge diverges from the Akchour Waterfalls trail about 2 km from the village.',
    tip: 'Bring swimwear &mdash; the pools beneath the bridge are irresistible on a warm day. The water is cold year-round (mountain spring-fed). Start early to avoid the midday heat. The trail can be slippery after rain; proper hiking shoes recommended.',
  },
  {
    name: 'Akchour Waterfalls (Cascades d\'Akchour)',
    distance: '4 km one way to the grand cascade',
    difficulty: 'Easy to Moderate',
    duration: '2-3 hours round trip',
    description:
      'The most popular hiking destination near Chefchaouen and for good reason. The trail follows the Oued Farda river through a beautiful gorge in the Talassemtane National Park, passing a series of smaller cascades and natural swimming pools before culminating at the grand cascade &mdash; a stunning waterfall plunging approximately 20 meters into a deep turquoise pool. The path is well-trodden and suitable for reasonably fit walkers, though it involves some rock-hopping and one rope-assisted scramble near the end.',
    howToGet: 'Grand taxi from Chefchaouen to Akchour village (30 MAD per person, shared, 45 minutes). Alternatively, hire a private taxi for 200-250 MAD round trip with waiting time.',
    tip: 'Visit on a weekday if possible &mdash; weekends (especially in summer) see large crowds. The small cascades halfway along the trail have the best swimming pools and are less crowded than the grand cascade. Bring water shoes for river crossings. Local cafes at the trailhead sell snacks and drinks.',
  },
  {
    name: 'Talassemtane National Park Circuit',
    distance: 'Various routes from 8-30 km',
    difficulty: 'Moderate to Challenging',
    duration: '4 hours to full day',
    description:
      'Talassemtane National Park protects 58,950 hectares of pristine Rif Mountain wilderness, including the last stands of the endemic Moroccan fir (Abies marocana), found nowhere else on Earth. The park offers multiple hiking circuits ranging from gentle half-day walks through cedar and oak forest to challenging multi-day treks across high ridges with views extending to the Mediterranean. Wildlife includes Barbary macaques, wild boar, golden eagles, and the endangered Barbary leopard (though sightings are exceptionally rare). Spring brings spectacular wildflower displays.',
    howToGet: 'Park entrance points accessible by grand taxi from Chefchaouen. For deeper explorations, a local guide is highly recommended and can be arranged through the park office or your riad.',
    tip: 'Hire a licensed guide through the Chefchaouen tourist office (300-500 MAD per day) for the longer circuits. The Moroccan fir groves near the park\'s core are ancient and atmospheric. Spring (March-May) is the best season for wildflowers; autumn (October-November) for fall colors.',
  },
  {
    name: 'Jebel el-Kelaa Summit',
    distance: '6 km round trip',
    difficulty: 'Challenging',
    duration: '3-4 hours round trip',
    description:
      'The twin horns of Jebel el-Kelaa (1,616 meters) tower directly above Chefchaouen and offer the most dramatic summit viewpoint accessible as a day hike from the city. The trail begins at Ras el-Maa on the medina&apos;s edge and climbs steeply through scrubland, sparse pine forest, and finally exposed limestone to the summit ridge. The final approach involves some easy scrambling. From the top, the views are extraordinary: the blue medina far below, the Rif range stretching in every direction, and on clear days, the Mediterranean coastline visible to the north.',
    howToGet: 'Walk from the medina to Ras el-Maa and follow the trail signs heading south and uphill.',
    tip: 'Start at dawn to avoid the heat and reach the summit in the cool morning air. Bring at least 2 liters of water per person, sun protection, and a windproof layer (the summit is exposed and windy). The descent is harder on the knees than the ascent &mdash; consider trekking poles.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RESTAURANTS DATA
   ═══════════════════════════════════════════════════════════════ */

const bestRestaurants = [
  {
    name: 'Bab Ssour',
    cuisine: 'Traditional Moroccan with a creative twist',
    price: '80-150 MAD per person',
    description:
      'Widely considered the best restaurant in Chefchaouen. Tucked into a beautifully restored house near the medina entrance, Bab Ssour serves elevated Moroccan cuisine with seasonal ingredients sourced from the Rif Mountains. The lamb tagine with local honey and almonds is exceptional, as is the kefta with chermoula and the homemade pastilla. The roof terrace overlooks the medina rooftops and mountains. Service is warm, portions generous, and the mint tea is perfectly prepared.',
    location: 'Near Bab el-Ain, medina entrance',
  },
  {
    name: 'Aladdin Restaurant',
    cuisine: 'Moroccan and international',
    price: '60-120 MAD per person',
    description:
      'A Chefchaouen institution occupying a multi-level blue-painted building overlooking Plaza Uta el-Hammam. The rooftop terrace has arguably the best view of any restaurant in town, looking directly at the Kasbah walls and the Grand Mosque minaret. The menu covers all Moroccan classics &mdash; tagines, couscous, harira, brochettes &mdash; done well if not groundbreaking. The real draw is the atmosphere and the views. Perfect for a long, lazy lunch.',
    location: 'Overlooking Plaza Uta el-Hammam',
  },
  {
    name: 'Restaurant Beldi',
    cuisine: 'Home-style Riffian cooking',
    price: '40-80 MAD per person',
    description:
      'A hidden gem beloved by locals and budget-savvy travelers, Restaurant Beldi serves genuine home-cooked Riffian food at remarkably low prices. The menu changes daily based on what is available at the market &mdash; you might find a rich lentil soup, a perfectly spiced kefta tagine, or slow-cooked chicken with preserved lemons and olives. The space is simple, the portions are large, and the cooking is as authentic as you will find in any restaurant in northern Morocco. No alcohol served.',
    location: 'Side street off the main souk, medina center',
  },
  {
    name: 'Sofia Restaurant',
    cuisine: 'Moroccan and Mediterranean',
    price: '70-130 MAD per person',
    description:
      'A popular choice with travelers for its combination of good food, reasonable prices, and one of the best roof terraces in the medina. Sofia serves reliable Moroccan standards alongside some Mediterranean-inspired dishes. The vegetable tagine with preserved lemons is excellent, and the freshly squeezed orange juice (available year-round thanks to Morocco&apos;s citrus groves) is worth ordering at every meal. The terrace catches the afternoon sun beautifully.',
    location: 'Central medina, near the main souk',
  },
  {
    name: 'Casa Aladdin',
    cuisine: 'Moroccan fusion',
    price: '90-160 MAD per person',
    description:
      'Not to be confused with the Aladdin Restaurant on the plaza, Casa Aladdin is a more upscale option in a restored riad with multiple dining rooms and a stunning roof terrace. The menu ventures beyond traditional tagines into territory like lamb shank with fig reduction, grilled Mediterranean fish with chermoula, and creative salad compositions. The wine list is decent by Moroccan standards. Reservations recommended for the terrace table at sunset.',
    location: 'Upper medina, near Ras el-Maa',
  },
  {
    name: 'Cafe Hafa (Terrace Cafe)',
    cuisine: 'Light meals, crepes, and drinks',
    price: '20-50 MAD per person',
    description:
      'Perched on a cliff edge on the hillside above the medina, this simple cafe offers some of the most spectacular views in Chefchaouen at the lowest prices. The menu is basic &mdash; msemen (Moroccan crepes), omelettes, sandwiches, fresh juices, and of course mint tea &mdash; but the panoramic vista over the blue rooftops and the Rif valley makes every meal feel like a feast. This is where locals come to unwind, and the relaxed vibe is infectious.',
    location: 'Upper medina hillside, above Ras el-Maa',
  },
];

/* ═══════════════════════════════════════════════════════════════
   ACCOMMODATIONS DATA
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    name: 'Dar Echchaouen',
    category: 'Luxury Riad',
    price: '1,200-2,500 MAD per night',
    description:
      'The finest accommodation in Chefchaouen, Dar Echchaouen is a meticulously restored traditional house with spacious suites featuring hand-carved cedarwood ceilings, zellige-tiled bathrooms, premium linens, and private balconies overlooking the medina. The rooftop terrace offers 360-degree views of the blue city and the Rif Mountains, and the in-house restaurant serves refined Moroccan cuisine. Breakfast is an elaborate spread of local specialties. The staff arranges hiking excursions, cooking classes, and private transfers.',
    location: 'Central medina, quiet residential street',
    bestFor: 'Couples, special occasions, luxury seekers',
  },
  {
    name: 'Casa Hassan',
    category: 'Heritage Riad',
    price: '600-1,100 MAD per night',
    description:
      'One of the original guesthouses in Chefchaouen and still among the best. Casa Hassan has been welcoming travelers since 1985, making it an institution in the city. The 400-year-old house has been sympathetically restored with traditional Riffian decor &mdash; hand-woven blankets, painted wooden ceilings, and thick lime-washed walls. Rooms vary in size (ask for one with a mountain view). The legendary on-site restaurant serves some of the best traditional food in town, and the knowledgeable staff are invaluable for hiking and excursion advice.',
    location: 'Central medina near Plaza Uta el-Hammam',
    bestFor: 'Culture lovers, hikers, travelers seeking authenticity',
  },
  {
    name: 'Lina Ryad & Spa',
    category: 'Boutique Riad',
    price: '800-1,600 MAD per night',
    description:
      'A beautifully designed boutique riad that blends traditional Moroccan architecture with contemporary comfort. Lina Ryad features a small hammam and spa, elegant rooms with traditional touches and modern bathrooms, and a spectacular roof terrace with plunge pool (rare in Chefchaouen). The design aesthetic is refined without being precious &mdash; hand-troweled tadelakt walls, artisan tiles, and locally crafted furniture. The breakfast is excellent and the staff genuinely helpful.',
    location: 'Upper medina with mountain views',
    bestFor: 'Design-conscious travelers, couples, those wanting spa facilities',
  },
  {
    name: 'Dar Meziana',
    category: 'Mid-Range Guesthouse',
    price: '400-700 MAD per night',
    description:
      'A charming family-run guesthouse in a quiet corner of the medina, Dar Meziana offers excellent value with comfortable rooms, warm hospitality, and a lovely roof terrace. The rooms are simply but tastefully decorated with local crafts, beds are comfortable, and the shared spaces are inviting. The family cooks a generous Moroccan breakfast included in the rate. The location is peaceful yet within easy walking distance of the plaza and souks.',
    location: 'Quiet residential area of the medina',
    bestFor: 'Families, value-seekers, those wanting local atmosphere',
  },
  {
    name: 'Hostel Chefchaouen (Ole Hostel)',
    category: 'Budget Hostel',
    price: '80-150 MAD per night (dorm); 250-400 MAD (private room)',
    description:
      'The most popular backpacker hostel in Chefchaouen, offering clean dormitory beds and private rooms in a converted traditional house. The rooftop terrace is a social hub where travelers share stories over mint tea. Facilities include a communal kitchen, hot showers, free Wi-Fi, and luggage storage. The staff organize group hikes to Akchour and the Spanish Mosque. Linen and breakfast are included in the rate. Book ahead in peak season (April-May, September-October) as beds fill fast.',
    location: 'Central medina, near the main square',
    bestFor: 'Solo travelers, backpackers, budget travelers',
  },
  {
    name: 'Camping Azilan',
    category: 'Campsite',
    price: '40-60 MAD per person per night (tent pitch); bungalows 200-350 MAD',
    description:
      'Located just outside the medina walls with views of Jebel el-Kelaa, Camping Azilan is a well-maintained campsite offering tent pitches, basic bungalows, and a communal kitchen. Hot showers, clean toilets, and a small cafe are on-site. The setting is beautiful &mdash; under olive trees with the blue medina visible across the valley. A peaceful alternative to the medina bustle, particularly for those with their own vehicle or camping equipment.',
    location: 'Just outside the medina, eastern edge',
    bestFor: 'Campers, overlanders, nature lovers, ultra-budget travelers',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SHOPPING GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const shoppingItems = [
  {
    item: 'Woven Blankets & Rugs',
    priceRange: '100-500 MAD',
    description:
      'Chefchaouen is famous for its handwoven textiles, produced on traditional wooden looms by Riffian Berber women. The distinctive patterns &mdash; bold geometric stripes and diamonds in earthy reds, oranges, blues, and creams &mdash; are unique to this region. The finest blankets use pure wool, hand-spun from local sheep, and a single blanket can take several weeks to complete. They serve as bedspreads, wall hangings, or wraps, and the quality pieces last generations.',
    buyingTip: 'Check the weave density by holding the fabric up to the light &mdash; the less light that passes through, the tighter and more durable the weave. Pure wool blankets are heavier and more expensive than cotton blends. Ask if the dyes are natural (more expensive but color-fast) or synthetic.',
  },
  {
    item: 'Goat Cheese (Jben)',
    priceRange: '15-40 MAD per round',
    description:
      'Fresh, tangy goat cheese (jben) is a Chefchaouen specialty, produced in the surrounding Rif Mountain villages where goat herding has been the primary livelihood for centuries. The cheese is sold in small rounds, often wrapped in palm leaves, and has a mild, slightly tart flavor. It is delicious spread on fresh bread with olive oil and mint, or crumbled over salads. Harder aged versions are also available.',
    buyingTip: 'The freshest cheese is sold by women in the small square near Bab el-Ain, usually in the morning. Buy it fresh and consume within 1-2 days as it does not keep well without refrigeration. The harder, drier rounds travel better.',
  },
  {
    item: 'Local Honey',
    priceRange: '50-200 MAD per jar',
    description:
      'The Rif Mountains produce exceptional honey from bees that forage on wild thyme, lavender, rosemary, and the diverse wildflowers of the mountain meadows. Chefchaouen&apos;s honey varies from light, floral thyme honey to dark, intense forest honey. Some producers offer honeycomb sections (rayon de miel) which are a special treat. The honey has genuine medicinal use in Moroccan tradition &mdash; mixed with argan oil and black seed (nigella) for immune support.',
    buyingTip: 'Taste before buying. The best honey is sold by small producers in the souk or by roadside vendors in the surrounding villages. True mountain honey crystallizes naturally; if it remains permanently liquid, it may be adulterated with sugar syrup.',
  },
  {
    item: 'Leather Goods',
    priceRange: '80-400 MAD',
    description:
      'While Fes is the leather capital, Chefchaouen has its own leather-working tradition producing bags, wallets, belts, babouches (traditional slippers), and book covers. The leather is typically tanned in the traditional way using vegetable-based methods, and items are often dyed in Chefchaouen&apos;s signature blue or natural tan. The quality is generally good and prices significantly lower than in more touristic cities.',
    buyingTip: 'Smell the leather &mdash; good quality should smell of leather, not chemicals. Check stitching carefully. Babouches should have stitched (not glued) soles. Leather goods make excellent, lightweight souvenirs that improve with age.',
  },
  {
    item: 'Blue-Painted Ceramics',
    priceRange: '30-250 MAD',
    description:
      'Inspired by the city&apos;s blue aesthetic, local potters produce a range of ceramics in various shades of blue &mdash; plates, bowls, tagine pots, cups, tiles, and decorative pieces. While not as refined as the Fes blue-and-white tradition, Chefchaouen ceramics have their own rustic charm and make instantly recognizable souvenirs. Many pieces feature the distinctive blue-on-blue palette that makes them unmistakably from the Blue Pearl.',
    buyingTip: 'Hand-painted pieces (slightly imperfect, visible brushstrokes) are more authentic and valuable than stenciled or mass-produced items. Small plates and bowls pack well in luggage. Tagine pots are beautiful but fragile for transport.',
  },
  {
    item: 'Riffian Straw Hats',
    priceRange: '30-80 MAD',
    description:
      'The wide-brimmed straw hats with colorful pom-pom decorations worn by Riffian women are one of the most distinctive accessories in Morocco. These handwoven hats serve a practical purpose &mdash; protection from the fierce mountain sun &mdash; but have become a popular tourist souvenir and fashion accessory. Each hat is woven from dried palm or doum palm fiber and decorated with colored wool tassels.',
    buyingTip: 'The most authentic hats are sold by the women who make them, often sitting on the ground near the market entrances. Mass-produced tourist versions are cheaper but flimsier. A genuine handwoven hat has visible irregularities that machine-made ones lack.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GETTING THERE DATA
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  {
    from: 'Fes',
    method: 'CTM Bus',
    duration: '4 hours',
    price: '75 MAD',
    description:
      'The most popular route to Chefchaouen. CTM operates daily departures (typically 2-3 per day) from the Fes CTM station. The journey follows the N13 highway through rolling farmland, then climbs dramatically into the Rif Mountains with increasingly spectacular scenery as you approach. The road is winding in the final hour &mdash; those prone to motion sickness should take the front seat and bring medication. CTM buses are air-conditioned, comfortable, and reliable.',
    tip: 'Book CTM tickets at least a day in advance online or at the station, especially in spring and autumn high season. Take the morning departure for the best mountain scenery. The bus arrives at the Chefchaouen bus station about 1 km below the medina.',
  },
  {
    from: 'Tangier',
    method: 'CTM Bus or Grand Taxi',
    duration: '3-3.5 hours (bus) or 2.5 hours (taxi)',
    price: '60-75 MAD (bus); 100-120 MAD per person (grand taxi)',
    description:
      'A popular route for travelers arriving in Morocco via the Tangier ferry port or flying into Ibn Battouta Airport. CTM buses depart from Tangier&apos;s bus station daily, and the road through the western Rif Mountains is scenic and well-maintained. Grand taxis (shared Mercedes sedans holding 6 passengers) depart from the Tangier grand taxi stand when full and are faster but less comfortable. The drive passes through the pleasant town of Tetouan, which is worth a stop.',
    tip: 'If arriving at Tangier Med port (40 km from Tangier city), you can sometimes find grand taxis heading directly to Chefchaouen from the port. Otherwise, take a shuttle to Tangier city first. Grand taxi drivers will try to charge tourists a higher fare &mdash; confirm the price before departing and pay the standard local rate.',
  },
  {
    from: 'Tetouan',
    method: 'Grand Taxi or Local Bus',
    duration: '1-1.5 hours',
    price: '25-35 MAD per person (grand taxi)',
    description:
      'The closest city to Chefchaouen with a Spanish colonial heritage of its own. Grand taxis from Tetouan are the most frequent connection to Chefchaouen, departing regularly throughout the day from the grand taxi stand. The drive is short but spectacular, climbing through the Rif foothills with views back toward the Mediterranean. Local buses also cover this route but are slower and less comfortable.',
    tip: 'Tetouan makes an excellent day trip from Chefchaouen or a worthwhile stop en route. Its UNESCO-listed medina has a distinctly Spanish-Moroccan character and sees far fewer tourists than Chefchaouen. Grand taxis fill up fastest in the morning.',
  },
  {
    from: 'Casablanca or Rabat',
    method: 'CTM Bus (via Tangier or direct)',
    duration: '6-7 hours from Rabat; 7-8 hours from Casablanca',
    price: '130-160 MAD',
    description:
      'Longer journeys that can be done in a single day but are tiring. CTM offers some direct services, though many routes require a change in either Tangier or Fes. For comfort, consider breaking the journey with an overnight stop in Fes or Tangier. There is no direct train to Chefchaouen (the nearest train station is in Tangier or Fes), so the final leg is always by road.',
    tip: 'The most comfortable option from Casablanca or Rabat is to take the high-speed Al Boraq train to Tangier (2 hours from Casablanca, 1.5 hours from Rabat) and then a CTM bus or grand taxi to Chefchaouen. This combines speed and comfort.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DAY TRIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Akchour Waterfalls & God\'s Bridge',
    distance: '25 km from Chefchaouen',
    duration: 'Full day (6-8 hours)',
    description:
      'The most popular day trip from Chefchaouen combines two of the Rif Mountains\' most spectacular natural attractions. The Akchour Waterfalls trail follows a river gorge to a series of cascades and swimming pools, culminating in a grand 20-meter waterfall. A separate trail leads to God&apos;s Bridge, a massive natural stone arch over turquoise pools. You can do one or both in a day, though doing both requires good fitness and an early start.',
    howToGet: 'Grand taxi from Chefchaouen to Akchour village (30 MAD per person, 45 minutes). Arrange a return time with your driver.',
    cost: 'Transport 30 MAD each way; park entrance 20 MAD; packed lunch from medina 30-50 MAD',
  },
  {
    name: 'Oued Laou Beach',
    distance: '65 km from Chefchaouen',
    duration: 'Full day',
    description:
      'A Mediterranean fishing village with a long, uncrowded sandy beach where the Oued Laou river meets the sea. The drive through the Rif Mountains is spectacularly scenic, descending from the peaks to the coast through terraced hillsides, small Berber villages, and lush river valleys. The village itself is quiet and authentic &mdash; far from the resort tourism of Agadir or Tangier. Saturday is the weekly souk day when the town comes alive.',
    howToGet: 'Grand taxi from Chefchaouen (30-40 MAD per person, shared, 1.5 hours). Some travelers hire a private taxi for 300-400 MAD round trip with waiting time.',
    cost: 'Transport 60-80 MAD round trip; seafood lunch 60-100 MAD',
  },
  {
    name: 'Tetouan',
    distance: '60 km from Chefchaouen',
    duration: 'Half or full day',
    description:
      'Tetouan&apos;s UNESCO-listed medina is one of the most authentic in Morocco, with a uniquely Andalusian-Moroccan character reflecting the city&apos;s history as a refuge for Muslims and Jews expelled from Spain in 1492. The whitewashed medina, the Royal Palace, the Archaeology Museum, and the peaceful Feddan Park are all worth exploring. Tetouan sees a fraction of the tourists that Chefchaouen receives, making it a genuinely local experience. The nearby Martil beach is a popular addition.',
    howToGet: 'Grand taxi from Chefchaouen (25-35 MAD per person, 1-1.5 hours). Frequent departures throughout the day.',
    cost: 'Transport 50-70 MAD round trip; museum entries 20-30 MAD; lunch 50-80 MAD',
  },
  {
    name: 'Moulay Abdeslam',
    distance: '35 km from Chefchaouen',
    duration: 'Half day',
    description:
      'A sacred pilgrimage site set in dense cedar forest on a mountainside south of Chefchaouen. The shrine of Moulay Abdeslam Ben Mchich (a 13th-century Sufi saint) draws thousands of Moroccan pilgrims, particularly during the annual moussem (festival). For non-pilgrims, the attraction is the stunning mountain setting, the ancient cedar forest, and the insight into a living spiritual tradition that remains central to Moroccan religious life. The drive through the mountains is beautiful.',
    howToGet: 'Private taxi recommended (200-300 MAD round trip with waiting). Grand taxis available but infrequent.',
    cost: 'Transport 200-300 MAD (private); shrine visit free; lunch 40-60 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FAQ DATA
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Why is Chefchaouen blue?',
    answer:
      'The most widely accepted explanation is that the tradition of painting buildings blue was introduced by Jewish refugees who settled in Chefchaouen in the 1930s, fleeing persecution in Europe. In Judaism, the color blue (tekhelet) represents the sky and heaven, serving as a reminder of God\'s presence. Others believe the blue paint was adopted to repel mosquitoes, as the insects are said to avoid blue surfaces. Some residents say the blue simply keeps buildings cooler in summer by reflecting sunlight. Whatever the original reason, the tradition has been maintained and expanded by the current Muslim residents who find the blue beautiful and good for tourism. Today, the city government provides blue paint to residents at subsidized prices to maintain the signature look.',
  },
  {
    question: 'How many days should I spend in Chefchaouen?',
    answer:
      'Two to three days is ideal. One full day is enough to explore the medina thoroughly, photograph the blue streets, visit the Kasbah, and hike to the Spanish Mosque for sunset. A second day allows for a day trip to Akchour Waterfalls or God\'s Bridge. A third day gives breathing room for a second day trip (Oued Laou beach or Tetouan), more medina exploration, or simply relaxing on a riad rooftop. Chefchaouen rewards slow travel &mdash; it is a place to decompress, not to rush through checking sights off a list.',
  },
  {
    question: 'When is the best time to visit Chefchaouen?',
    answer:
      'The best months are April-May and September-October, when temperatures are pleasant (18-25 degrees Celsius), rainfall is minimal, and the surrounding mountains are green. Summer (July-August) is hot (30-35 degrees) and sees the most domestic Moroccan tourism. Winter (December-February) is cold and wet, with temperatures dropping to 5-10 degrees and occasional snow on higher peaks, but the medina is nearly empty and atmospheric in the rain. Ramadan dates shift annually; the town is quieter during the day but comes alive after iftar.',
  },
  {
    question: 'Is Chefchaouen safe for solo travelers and women?',
    answer:
      'Chefchaouen is generally considered one of the safest cities in Morocco for travelers, including solo women. The town is small, the medina is compact and easy to navigate, and the atmosphere is notably relaxed compared to larger Moroccan cities. Harassment levels are significantly lower than in Marrakech or Fes, though not entirely absent. The main annoyances are persistent offers to sell hashish (simply decline politely) and occasional requests to pose for paid photos in traditional dress. Use normal travel precautions: avoid poorly lit areas late at night, keep valuables secure, and trust your instincts.',
  },
  {
    question: 'Can I drink the tap water in Chefchaouen?',
    answer:
      'The tap water in Chefchaouen comes from mountain springs and is generally cleaner than in most Moroccan cities. Some long-term residents and experienced travelers drink it without issue. However, for short-term visitors, bottled water is recommended to avoid potential stomach upset from unfamiliar minerals and bacteria. Large 1.5-liter bottles cost 5-7 MAD from shops throughout the medina. Some riads provide filtered water for guests.',
  },
  {
    question: 'What is the altitude of Chefchaouen and does it matter?',
    answer:
      'Chefchaouen sits at approximately 564 meters (1,850 feet) above sea level, nestled in the Rif Mountains. This is not high enough to cause altitude sickness, but it does affect the climate: evenings and mornings are cooler than you might expect in Morocco, especially in spring and autumn. Bring a light jacket or fleece. The surrounding peaks reach 1,600-2,000 meters, so day hikes involve meaningful elevation gains. The altitude also means the air is fresh and clean compared to lowland cities.',
  },
  {
    question: 'Is there an ATM in Chefchaouen?',
    answer:
      'Yes, there are several ATMs in the new town (ville nouvelle) area below the medina entrance, including Banque Populaire, Attijariwafa Bank, and BMCE. Inside the medina itself, ATM access is limited. Withdraw cash before entering the medina, as most shops, restaurants, and accommodations in the old town accept cash only. Credit cards are accepted at some upscale riads but virtually nowhere else. Carry small denominations (10, 20, 50 MAD notes) as many vendors cannot break larger bills.',
  },
  {
    question: 'What about the cannabis and hashish situation in Chefchaouen?',
    answer:
      'Chefchaouen sits in the heart of the Rif Mountains, which is Morocco\'s primary cannabis cultivation region. You will very likely be offered hashish (kif) by men on the streets, sometimes persistently. A polite but firm "la, shukran" (no, thank you) is the best response. Cannabis is technically illegal in Morocco for both possession and sale, though enforcement in the Rif region is complex due to the crop\'s deep economic and cultural roots. Tourists who purchase or carry cannabis risk fines, arrest, or extortion by corrupt individuals posing as police. The safest approach is to politely decline all offers.',
  },
  {
    question: 'Do I need a guide in Chefchaouen?',
    answer:
      'Unlike the labyrinthine medinas of Fes or Marrakech, Chefchaouen\'s medina is compact and nearly impossible to get seriously lost in. A guide is not necessary for general exploration. However, hiring a local guide is highly recommended for hiking in Talassemtane National Park, visiting God\'s Bridge, or exploring the wider Rif Mountain area where trails can be unmarked and local knowledge is invaluable. Licensed guides can be arranged through your riad or the tourist office (300-500 MAD for a full-day hiking guide).',
  },
  {
    question: 'What should I pack for Chefchaouen?',
    answer:
      'Comfortable walking shoes are essential &mdash; the medina is built on a hillside with many steps and uneven cobblestones. Pack layers, as mornings and evenings are cool year-round. A good camera is obvious. For hikers, bring proper trail shoes, sun protection, and a daypack. A headlamp is useful for the Spanish Mosque sunset hike (the return is after dark). A reusable water bottle saves money and plastic. Pack modest clothing out of respect for local culture &mdash; shoulders and knees covered for both men and women.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PRACTICAL TIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const practicalTips = [
  'Two to three days is the ideal length of stay. One day for the medina, one for hiking, and a third for day trips or relaxation.',
  'The best months to visit are April-May and September-October for comfortable temperatures and clear skies.',
  'Chefchaouen sits at 564 meters elevation. Evenings are cooler than you might expect &mdash; pack a light jacket.',
  'ATMs are in the new town below the medina. Withdraw cash before entering the medina; most merchants are cash-only.',
  'The medina is small and easy to navigate. You do not need a guide to explore the blue streets.',
  'Politely decline offers to buy hashish. A firm "la, shukran" is sufficient.',
  'Wi-Fi is available at most riads and cafes, though speeds vary. Purchase a Moroccan SIM card (Maroc Telecom or Orange) in the new town for reliable 4G data (20-30 MAD for a tourist package).',
  'Friday is the holy day. Some shops close for extended hours, and the Grand Mosque area is busier during prayer times.',
  'The Spanish Mosque sunset hike takes 20-30 minutes uphill. Bring a flashlight for the return walk after dark.',
  'Tap water comes from mountain springs and is cleaner than in most Moroccan cities, but bottled water (5-7 MAD) is recommended for visitors.',
  'Bargaining is expected in the souks but keep it friendly. Start at about 40-50% of the asking price and aim for 60-70%.',
  'Photography of people: always ask first. Some residents, especially older women, do not wish to be photographed.',
];

/* ═══════════════════════════════════════════════════════════════
   RELATED PAGES DATA
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  {
    title: 'Morocco Cities Guide',
    description: 'Overview of all major Moroccan cities and what makes each unique.',
    href: '/cities',
  },
  {
    title: 'Fes City Guide',
    description: 'The cultural capital: medina, tanneries, medersas, and artisan workshops.',
    href: '/fes-guide',
  },
  {
    title: 'Hiking in Morocco',
    description: 'Complete guide to trekking the Atlas, Rif, and Anti-Atlas mountains.',
    href: '/trekking',
  },
  {
    title: 'Photography Guide',
    description: 'Best locations, techniques, and tips for photographing Morocco.',
    href: '/photography',
  },
  {
    title: 'Morocco Souks & Shopping',
    description: 'What to buy, where to find it, and how to bargain effectively.',
    href: '/souks',
  },
  {
    title: 'Budget Travel Morocco',
    description: 'How to experience Morocco on a backpacker budget without missing out.',
    href: '/backpacking',
  },
  {
    title: 'National Parks',
    description: 'Guide to Talassemtane and Morocco\'s other protected natural areas.',
    href: '/national-parks',
  },
  {
    title: 'Solo Travel Morocco',
    description: 'Tips, safety advice, and itineraries for independent travelers.',
    href: '/solo-travel',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BUDGET GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  {
    category: 'Budget Traveler',
    daily: '200-400 MAD / day',
    details: [
      'Accommodation: Hostel dorm or budget guesthouse (80-200 MAD)',
      'Food: Street food, local restaurants (50-80 MAD)',
      'Transport: Walking everywhere in the medina (0 MAD)',
      'Activities: Spanish Mosque hike, medina exploration (free)',
      'Shopping/misc: Light browsing, mint tea (30-50 MAD)',
    ],
    tip: 'Chefchaouen is one of Morocco\'s most affordable cities. The medina is walkable, the best experiences (blue streets, Spanish Mosque sunset, Ras el-Maa) are free, and excellent food can be found for under 50 MAD. Budget travelers can live well here.',
  },
  {
    category: 'Mid-Range Traveler',
    daily: '600-1,200 MAD / day',
    details: [
      'Accommodation: Quality riad with breakfast (400-800 MAD)',
      'Food: Mix of local and upscale restaurants (100-200 MAD)',
      'Transport: Grand taxis for day trips (60-100 MAD)',
      'Activities: Akchour hike, Kasbah museum (50-100 MAD)',
      'Shopping: Blankets, ceramics, souvenirs (100-300 MAD)',
    ],
    tip: 'The mid-range experience in Chefchaouen is excellent value. A beautiful riad, rooftop dining with mountain views, a day trip to Akchour Waterfalls, and quality souvenirs are all affordable without feeling like you are cutting corners.',
  },
  {
    category: 'Luxury Traveler',
    daily: '2,000-4,000+ MAD / day',
    details: [
      'Accommodation: Premium riad suite (1,200-2,500 MAD)',
      'Food: Finest restaurants and private dining (300-500 MAD)',
      'Transport: Private driver for excursions (400-600 MAD)',
      'Activities: Private guides, workshops (300-500 MAD)',
      'Shopping/spa: Premium crafts, hammam (200-500+ MAD)',
    ],
    tip: 'Luxury in Chefchaouen is about exclusivity and nature, not five-star gloss. Private hiking guides, sunset picnics arranged by your riad, hammam treatments, and bespoke craft commissions create memorable experiences.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER: STAR RATING RENDERER
   ═══════════════════════════════════════════════════════════════ */

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3;
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < full; i++) {
    stars.push(
      <Star
        key={`f-${i}`}
        className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
      />
    );
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="relative inline-block w-4 h-4">
        <Star className="absolute inset-0 w-4 h-4 text-[var(--color-accent)]" />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
        </span>
      </span>
    );
  }
  const remaining = 5 - full - (hasHalf ? 1 : 0);
  for (let i = 0; i < remaining; i++) {
    stars.push(
      <Star
        key={`e-${i}`}
        className="w-4 h-4 text-[var(--color-accent)]/30"
      />
    );
  }
  return stars;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function ChefchaouenGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: HERO
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-chefchaouen-streets.webp"
            alt="Blue-painted streets and stairways winding through the Chefchaouen medina with potted plants and warm sunlight"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/cities"
              className="hover:text-white transition-colors"
            >
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Chefchaouen</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              The Ultimate City Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Chefchaouen: Morocco&apos;s Blue Pearl
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A dreamlike mountain city drenched in every shade of blue,
              nestled in the dramatic Rif Mountains. Chefchaouen is
              Morocco&apos;s most photogenic destination &mdash; a place
              where ancient Andalusian medina streets painted in cobalt,
              indigo, and powder blue cascade down the mountainside beneath
              towering limestone peaks.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: INTRODUCTION / OVERVIEW
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Blue Pearl of the Rif Mountains
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Founded in 1471, Chefchaouen has captivated travelers for centuries
              with its ethereal blue medina, mountain wilderness, and gentle pace of life.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Chefchaouen (often shortened to Chaouen by locals) is a small city of approximately
              45,000 people perched at 564 meters elevation in the heart of Morocco&apos;s Rif
              Mountains. Founded in 1471 by Moulay Ali Ben Rachid as a fortress to fight
              Portuguese incursions into northern Morocco, the city grew as a refuge for Muslims
              and Jews expelled from Andalusia during the Spanish Reconquista. These Andalusian
              refugees brought with them the architectural traditions, agricultural knowledge, and
              cultural sensibilities that still define the city&apos;s character today.
            </p>
            <p>
              The famous blue paint that covers virtually every surface in the medina &mdash; walls,
              stairways, doorframes, flower pots, even the pavement in some streets &mdash; is
              believed to have been introduced or popularized by the Jewish community in the 1930s.
              In Jewish tradition, the color tekhelet (a specific shade of blue derived from a sea
              snail) represents the sky and the divine, and painting homes blue served as a constant
              reminder of God&apos;s presence. When the Jewish community largely emigrated to Israel
              in the 1940s and 1950s, the Muslim residents continued the tradition. Today, the blue
              is maintained partly out of custom, partly because residents believe it repels mosquitoes
              and keeps buildings cool, and partly because the global fame of the &ldquo;Blue Pearl&rdquo;
              has made tourism the city&apos;s primary economic engine.
            </p>
            <p>
              Beyond the photogenic medina, Chefchaouen is a gateway to some of Morocco&apos;s finest
              natural landscapes. The surrounding Rif Mountains &mdash; part of the Talassemtane
              National Park &mdash; offer hiking trails through cedar and fir forests, past dramatic
              waterfalls, natural stone bridges, and mountain peaks with Mediterranean views. The
              Akchour Waterfalls and God&apos;s Bridge are among Morocco&apos;s most spectacular
              natural attractions, and both are accessible as day trips from the city. The Rif region
              also produces exceptional goat cheese, mountain honey, and handwoven textiles that make
              distinctive souvenirs. Chefchaouen is Morocco at its most gentle, most beautiful, and
              most enchanting.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[var(--border-light)]">
              {[
                { label: 'Founded', value: '1471 AD' },
                { label: 'Elevation', value: '564 m' },
                { label: 'Population', value: '~45,000' },
                { label: 'Region', value: 'Rif Mountains' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-[var(--surface-muted)]"
                >
                  <p className="text-2xl font-bold text-[var(--color-primary)] font-[family-name:var(--font-display)]">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: TOP ATTRACTIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Attractions in Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the iconic blue medina streets to mountain viewpoints and ancient
              fortresses, these are the essential experiences in Morocco&apos;s Blue Pearl.
            </p>
          </div>

          <div className="space-y-8">
            {topAttractions.map((attraction, index) => (
              <article
                key={attraction.name}
                className="card-moroccan overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <img
                      src={attraction.image}
                      alt={`${attraction.name} in Chefchaouen, Morocco`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center gap-0.5 shrink-0">
                        {renderStars(attraction.rating)}
                        <span className="ml-1.5 text-sm font-medium text-[var(--text-secondary)]">
                          {attraction.rating}
                        </span>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Ticket className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Entry:</strong>{' '}
                          {attraction.fee}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                        <span className="text-[var(--text-secondary)]">
                          <strong className="text-[var(--text-primary)]">Hours:</strong>{' '}
                          {attraction.hours}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                      <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--color-primary)] font-medium">
                        {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: PHOTOGRAPHY GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Photography Guide to Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Chefchaouen is arguably the most photogenic city in Morocco. Here are the
              best spots, times, and techniques for capturing the Blue Pearl at its finest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographySpots.map((spot) => (
              <article key={spot.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {spot.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {spot.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <div className="flex items-start gap-2 text-sm">
                    <Sun className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Best Time:</strong>{' '}
                      {spot.bestTime}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Eye className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Technique:</strong>{' '}
                      {spot.technique}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-primary)]" />
              Photography Ethics in Chefchaouen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              {[
                'Always ask permission before photographing people, especially women and elderly residents. A smile and a gesture toward your camera is usually understood.',
                'Some residents, particularly in the quieter residential areas, are weary of constant photography. Respect their privacy if they indicate they do not wish to be filmed.',
                'Do not photograph children without parental permission. Be cautious of adults who position children in front of your camera and then demand payment.',
                'The most famous blue streets receive thousands of photographers daily. Be mindful of residents trying to go about their daily lives and do not block doorways or stairways for extended periods.',
                'Drone photography is technically restricted in Morocco and requires a permit. Many visitors fly drones without issue, but be aware of the legal risk.',
                'If someone poses willingly for a portrait, a small tip of 5-10 MAD is a kind gesture of appreciation, though not always expected.',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: HIKING & NATURE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hiking &amp; Nature in the Rif Mountains
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Chefchaouen is a hiker&apos;s paradise. From gentle riverside walks to challenging
              mountain summits, the Rif Mountains offer some of Morocco&apos;s finest trail experiences.
            </p>
          </div>

          <div className="space-y-6">
            {hikingTrails.map((trail) => (
              <article key={trail.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {trail.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1">
                        <Footprints className="w-4 h-4 text-[var(--color-primary)]" />
                        {trail.distance}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                        {trail.duration}
                      </span>
                    </div>
                  </div>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold shrink-0 ${
                    trail.difficulty === 'Easy to Moderate'
                      ? 'bg-green-100 text-green-800'
                      : trail.difficulty === 'Moderate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : trail.difficulty === 'Moderate to Challenging'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-red-100 text-red-800'
                  }`}>
                    {trail.difficulty}
                  </span>
                </div>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {trail.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2 text-sm">
                    <Navigation className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Getting There:</strong>{' '}
                      {trail.howToGet}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Tip:</strong>{' '}
                      {trail.tip}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: WHERE TO EAT
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Eat in Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From elevated Riffian cuisine to hearty home cooking, Chefchaouen&apos;s
              restaurant scene punches well above its weight. Prices range from 40-150 MAD per person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestRestaurants.map((restaurant) => (
              <article key={restaurant.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {restaurant.name}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-1">
                  {restaurant.cuisine}
                </p>
                <p className="text-sm font-bold text-[var(--color-primary)] mb-3">
                  {restaurant.price}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {restaurant.description}
                </p>
                <div className="flex items-center gap-2 text-sm pt-3 border-t border-[var(--border-light)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                  <span className="text-[var(--text-secondary)]">{restaurant.location}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <Coffee className="w-5 h-5 text-[var(--color-primary)]" />
              Chefchaouen Food Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              {[
                'Riffian cuisine features more goat cheese, fresh herbs, and mountain honey than the cuisine of lowland Morocco. Try jben (fresh goat cheese) with olive oil and bread at any cafe.',
                'Mint tea in Chefchaouen is often made with fresh wild mint from the surrounding mountains and has a notably more intense, refreshing flavor than in other cities. Accept every offering.',
                'The best-value meals are the "menu du jour" (set menu) at local restaurants: typically a soup, salad, tagine or couscous, fruit, and tea for 50-80 MAD.',
                'Street food options include msemen (layered flatbread), sfenj (fried doughnuts), harira soup, brochettes (grilled meat skewers), and fresh-squeezed orange juice (5-10 MAD).',
                'Alcohol is available at some tourist-oriented restaurants and riads, but Chefchaouen is more conservative than Marrakech or Fes. Many restaurants do not serve alcohol.',
                'Friday couscous is a tradition &mdash; nearly every restaurant offers a special couscous on Friday, the holy day. It is often the best meal of the week.',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: WHERE TO STAY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay in Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From luxury riads to backpacker hostels and mountain campsites, Chefchaouen
              offers accommodations for every budget and travel style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodations.map((place) => (
              <article key={place.name} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {place.name}
                  </h3>
                  <span className="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-primary)]/10 text-[var(--color-primary)] shrink-0">
                    {place.category}
                  </span>
                </div>
                <p className="text-sm font-bold text-[var(--color-accent)] mb-3">
                  {place.price}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {place.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span className="text-[var(--text-secondary)]">{place.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Best for:</strong>{' '}
                      {place.bestFor}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: SHOPPING
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shopping in Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The souks of Chefchaouen offer a gentler, less pressured shopping experience
              than Morocco&apos;s larger cities. Here is what to buy and what to pay.
            </p>
          </div>

          <div className="space-y-6">
            {shoppingItems.map((item) => (
              <article key={item.item} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {item.item}
                  </h3>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                    <CircleDollarSign className="w-4 h-4" />
                    {item.priceRange}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {item.buyingTip}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: GETTING THERE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bus className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting to Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Chefchaouen has no airport or train station. All visitors arrive by road &mdash;
              by CTM bus, grand taxi, or private transfer. Here are the main routes.
            </p>
          </div>

          <div className="space-y-6">
            {transportOptions.map((option) => (
              <article key={option.from} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      From {option.from}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium">
                      {option.method}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                      <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                      {option.duration}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-bold text-[var(--color-primary)]">
                      <CircleDollarSign className="w-4 h-4" />
                      {option.price}
                    </span>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {option.description}
                </p>
                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--color-primary)] font-medium">
                    {option.tip}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 10: CANNABIS CULTURE & THE RIF
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cannabis Culture &amp; the Rif Region
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              An honest discussion of the Rif Mountains&apos; most controversial industry,
              its history, legal status, and what it means for visitors.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              It is impossible to write honestly about Chefchaouen and the Rif Mountains without
              addressing cannabis. The Rif region is one of the world&apos;s largest cannabis
              cultivation areas, producing an estimated 700 tonnes of hashish annually (though
              figures are inherently unreliable). Cannabis has been grown in these mountains for
              centuries &mdash; long before it was criminalized &mdash; and for many rural Riffian
              families, it remains the only viable cash crop in the region&apos;s poor, rocky soil.
              The plant is deeply woven into the local economy and, to some degree, the local identity.
            </p>
            <p>
              Visitors to Chefchaouen will almost certainly encounter cannabis. You will see (and
              smell) it growing in the countryside on the drive in. You will be offered hashish by
              men in the medina streets, sometimes multiple times in a single walk. The offers are
              generally low-pressure compared to some cities &mdash; a simple &ldquo;no, thank
              you&rdquo; (&ldquo;la, shukran&rdquo;) is usually sufficient &mdash; but they can be
              persistent, particularly in the evening hours around the plaza.
            </p>
            <p>
              <strong className="text-[var(--text-primary)]">Legal status:</strong> Cannabis
              cultivation, sale, and possession are illegal in Morocco. In 2021, Morocco passed
              legislation to legalize cannabis for medical and industrial use, but recreational use
              remains prohibited. In practice, enforcement in the Rif region is complex and
              inconsistent. Moroccan authorities have historically tolerated cultivation in the Rif
              while cracking down on trafficking and export. For tourists, the risks of purchasing or
              carrying cannabis include fines, arrest, or &mdash; more commonly &mdash; extortion by
              individuals (sometimes posing as plainclothes police) who target tourists they have
              observed buying.
            </p>

            <div className="card-moroccan p-6 mt-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                Practical Advice for Tourists
              </h3>
              <div className="space-y-3 text-base text-[var(--text-secondary)]">
                {[
                  'Politely decline all offers to buy hashish. A firm "la, shukran" (no, thank you) works. Do not engage in extended conversation about it.',
                  'Be aware of the "setup" scam: someone sells you hashish, then an accomplice posing as police demands a large "fine." This is extortion, not law enforcement.',
                  'Do not photograph cannabis fields or processing without explicit permission. This can create serious problems with local farmers.',
                  'If you are genuinely interested in the cultural and economic dimensions of cannabis in the Rif, read the excellent academic literature on the subject or speak with locals you have built genuine rapport with over multiple days.',
                  'The 2021 legalization law is slowly being implemented. Regulated cannabis products may become available through licensed channels in the future, but as of 2025, no such system is operational for recreational tourists.',
                ].map((advice) => (
                  <div key={advice} className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                    <span>{advice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 11: DAY TRIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Day Trips from Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Rif Mountains and northern Morocco offer excellent excursions from
              Chefchaouen. These are the best day trips within reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayTrips.map((trip) => (
              <article key={trip.name} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {trip.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    {trip.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    {trip.duration}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                  {trip.description}
                </p>
                <div className="space-y-2 pt-3 border-t border-[var(--border-light)]">
                  <div className="flex items-start gap-2 text-sm">
                    <Bus className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">How to get there:</strong>{' '}
                      {trip.howToGet}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CircleDollarSign className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Estimated cost:</strong>{' '}
                      {trip.cost}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 12: BUDGET GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CircleDollarSign className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Chefchaouen Budget Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Chefchaouen is one of Morocco&apos;s most affordable destinations. Here is what
              to expect at each budget level, with daily estimates in Moroccan Dirhams (MAD).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => (
              <article key={tier.category} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {tier.category}
                </h3>
                <p className="text-lg font-bold text-[var(--color-accent)] mb-4">
                  {tier.daily}
                </p>

                <ul className="space-y-2 mb-4 flex-1">
                  {tier.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                    >
                      <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-start gap-2 pt-3 border-t border-[var(--border-light)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{tier.tip}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-primary)]" />
              Money Tips for Chefchaouen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              {[
                'ATMs (Banque Populaire, Attijariwafa, BMCE) are located in the new town below the medina entrance. Withdraw cash before heading into the old town.',
                'Carry small bills (10, 20, 50 MAD) for tips, small purchases, and shared grand taxis. Many vendors cannot break 200 MAD notes.',
                'Credit cards are accepted only at some upscale riads and a few tourist restaurants. Cash is king everywhere else in Chefchaouen.',
                'Bargaining is expected in the souks but not in restaurants with printed menus. Start at 40-50% of the asking price; settle at 60-70%.',
                'Tipping customs: 5-10% at restaurants, 10-20 MAD for riad staff, 50-100 MAD for hiking guides, 5 MAD for small services.',
                'Chefchaouen is notably cheaper than Marrakech or Fes. The same riad quality that costs 800 MAD in Marrakech might be 400 MAD here.',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 13: PRACTICAL TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <PackageCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips for Visiting Chefchaouen
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential information to make your visit to the Blue Pearl smooth,
              comfortable, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practicalTips.map((tip) => (
              <div
                key={tip}
                className="card-moroccan p-4 flex items-start gap-3"
              >
                <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 14: FAQ
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <HelpCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Answers to the most common questions travelers ask about visiting Chefchaouen.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="card-moroccan p-6 group"
              >
                <summary className="flex items-start justify-between gap-4 cursor-pointer list-none font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-lg">
                  {faq.question}
                  <ChevronRight className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 15: RELATED PAGES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into Chefchaouen and Morocco with these related guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore the Blue Pearl?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Wander through blue-painted streets that seem to dissolve into the sky, hike
            to mountain waterfalls, watch the sunset paint the medina gold, and discover
            why Chefchaouen has captivated every traveler who has climbed into the Rif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Landmark className="w-4 h-4" /> Explore All Cities
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Book a Morocco Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
