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
  Users,
  AlertTriangle,
  Footprints,
  TreeDeciduous,
  Palette,
  Droplets,
  Coffee,
  Waves,
  MountainSnow,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Top 18 Things to Do in Chefchaouen 2026 | Ultimate Blue City Guide',
  description:
    'Discover the best things to do in Chefchaouen in 2026. Explore the Blue Medina, hike to the Spanish Mosque, swim at Akchour Waterfalls, visit God\'s Bridge, take a cooking class, and shop for handwoven blankets. Complete guide with prices in MAD, insider tips, and local secrets.',
  keywords: [
    'things to do in Chefchaouen',
    'Chefchaouen guide',
    'Chefchaouen activities',
    'what to do in Chefchaouen',
    'Chefchaouen sightseeing',
    'Chefchaouen blue city',
    'Blue Medina Morocco',
    'Spanish Mosque hike',
    'Akchour Waterfalls',
    'God\'s Bridge Morocco',
    'Ras El Ma waterfall',
    'Chefchaouen photography',
    'Talassemtane National Park',
    'Chefchaouen cooking class',
    'Chefchaouen shopping',
    'wool blankets Chefchaouen',
    'Chefchaouen rooftop cafes',
    'Kasbah Museum Chefchaouen',
    'Chefchaouen day trips',
    'Tetouan day trip',
    'Chefchaouen nightlife',
    'Chefchaouen budget',
    'Chefchaouen 2026',
    'best Chefchaouen experiences',
    'Chefchaouen travel guide',
  ],
  openGraph: {
    title: 'Top 18 Things to Do in Chefchaouen 2026 | Ultimate Blue City Guide',
    description:
      'The complete guide to Chefchaouen attractions, activities, and experiences. Blue Medina walks, mountain hikes, waterfalls, artisan workshops, and rooftop cafes with prices in MAD.',
    url: `${BASE_URL}/things-to-do-chefchaouen`,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the blue-washed buildings of Chefchaouen medina cascading down the Rif Mountains with terracotta rooftops under a clear sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 18 Things to Do in Chefchaouen 2026',
    description:
      'Blue Medina, Spanish Mosque, Akchour Waterfalls, God\'s Bridge, cooking classes, wool blankets, and more. Complete guide with real prices in MAD.',
    images: [`${BASE_URL}/images/hero-chefchaouen.webp`],
  },
  alternates: { canonical: `${BASE_URL}/things-to-do-chefchaouen` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/things-to-do-chefchaouen`,
  name: 'Top 18 Things to Do in Chefchaouen 2026 | Ultimate Blue City Guide',
  description:
    'Discover the best things to do in Chefchaouen in 2026. From the Blue Medina and Spanish Mosque to Akchour Waterfalls, cooking classes, and artisan shopping.',
  url: `${BASE_URL}/things-to-do-chefchaouen`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
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
  mainEntityOfPage: `${BASE_URL}/things-to-do-chefchaouen`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Chefchaouen',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Chefchaouen', item: `${BASE_URL}/chefchaouen` },
      { '@type': 'ListItem', position: 3, name: 'Things to Do', item: `${BASE_URL}/things-to-do-chefchaouen` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the top things to do in Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top things to do in Chefchaouen include walking through the Blue Medina with its photogenic blue-washed alleys, hiking to the Spanish Mosque for panoramic views, visiting Ras El Ma waterfall, exploring the Kasbah Museum, taking a day trip to Akchour Waterfalls and God\'s Bridge in Talassemtane National Park, shopping for handwoven wool blankets, taking a Moroccan cooking class, and relaxing at rooftop cafes with mountain views.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days do you need in Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most travelers find 2-3 days ideal for Chefchaouen. Day 1 covers the medina, Kasbah, and Spanish Mosque sunset hike. Day 2 is perfect for a full-day trip to Akchour Waterfalls and God\'s Bridge. Day 3 allows for a cooking class, deeper medina exploration, and shopping. One day is possible but feels rushed; the town rewards a slower pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefchaouen expensive to visit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chefchaouen is one of the most affordable destinations in Morocco. Street food costs from 10-30 MAD, a tagine lunch from 35-60 MAD, and a riad room from 250-500 MAD per night. The Kasbah Museum entry is from 10 MAD. Budget travelers can enjoy Chefchaouen on from 200-350 MAD per day, while mid-range travelers spend from 500-1,000 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to visit Chefchaouen is March to May and September to November. Spring brings wildflowers and comfortable temperatures of 15-25 degrees Celsius. Autumn has warm days and fewer crowds. Summer (June-August) is hot but manageable due to the mountain altitude. Winter (December-February) is cold and rainy but the wet streets make the blue colors more vibrant for photography.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chefchaouen has no train station or airport. The most common approach is by CTM or Supratours bus from Fes (4 hours, from 75 MAD), Tangier (3 hours, from 60 MAD), or Tetouan (1.5 hours, from 35 MAD). Grand taxis are faster but more expensive. Many travelers include Chefchaouen on a road trip between Fes and Tangier. The mountain roads are winding but scenic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Chefchaouen safe for solo travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chefchaouen is considered one of the safest cities in Morocco, especially for solo travelers and women. The town is small, walkable, and the locals are famously welcoming. Violent crime is extremely rare. The main concerns are steep medina stairs, occasional overcharging in shops (always negotiate), and the remote mountain location requiring advance transport planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is Chefchaouen painted blue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The origins of Chefchaouen\'s blue walls are debated. The most widely accepted theory is that Jewish refugees fleeing the Spanish Inquisition in the 1930s painted the buildings blue, as blue represents the sky and heaven in Jewish tradition and serves as a reminder of God\'s power. Others suggest blue repels mosquitoes, keeps homes cool, or was simply an aesthetic choice. The tradition continues today with residents maintaining the blue wash using a lime and indigo powder mixture.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do a day trip to Chefchaouen from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A day trip from Fes is possible but not recommended. The drive takes 4-4.5 hours each way, leaving only a few hours in town. If you must do it, join an organized tour (from 500 MAD) that departs early and returns late. Ideally, spend at least one night to experience the medina at sunset and sunrise when the blue colors are most magical and the day-trippers have left.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MEDINA & CULTURAL EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const medinaExperiences = [
  {
    name: 'Blue Medina Walking Tour',
    icon: Footprints,
    category: 'Iconic Experience',
    price: 'Free (self-guided) / From 150 MAD (guided)',
    duration: '2-4 hours',
    bestTime: 'Early morning (7-9 AM) or late afternoon',
    description:
      'The heart and soul of Chefchaouen is its medina — a labyrinth of narrow cobblestone alleys, steep staircases, and arched doorways, all washed in every shade of blue imaginable. From pale powder blue and deep cobalt to turquoise and indigo, the effect is otherworldly. The medina is compact and nearly impossible to get truly lost in, as every path eventually leads back to the central Plaza Uta el-Hammam. Unlike larger Moroccan cities, there is virtually no vehicle traffic. Cats doze on blue steps, bougainvillea cascades over doorways, and the sound of water fountains echoes through the alleys.',
    insiderTip:
      'Visit at sunrise (around 7 AM) when the medina is nearly empty and the morning light creates a magical glow on the blue walls. The most photogenic streets are around the Kasbah, along Rue Targui, and the neighborhood below the Ras El Ma spring. Wednesday and Thursday are local market days when the medina feels most alive with Rif Mountain villagers coming to trade.',
  },
  {
    name: 'Ras El Ma Waterfall & Laundry Springs',
    icon: Droplets,
    category: 'Natural Landmark',
    price: 'Free',
    duration: '30 minutes - 1 hour',
    bestTime: 'Late morning',
    description:
      'At the eastern edge of the medina, the Ras El Ma spring emerges from the mountainside in a small but charming waterfall. This is where local women have traditionally washed clothes and wool for centuries, and you can still see them doing so on the flat rocks beside the cascading water. The area is a natural gathering place for locals — children splash in the pools, families picnic on the rocks, and a couple of simple cafes serve mint tea with views of the Rif Mountains stretching to the horizon. It is one of the most authentic and relaxed spots in Chefchaouen.',
    insiderTip:
      'Follow the path beyond the waterfall uphill for 5 minutes to reach a viewpoint looking back over the entire medina — it is less crowded than the Spanish Mosque viewpoint and equally stunning. The water is cold year-round and sourced from the mountains above. Bring a water bottle to fill at the spring — locals consider it among the purest water in Morocco.',
  },
  {
    name: 'Kasbah Museum & Gardens',
    icon: Landmark,
    category: 'Historical Monument',
    price: 'From 10 MAD',
    duration: '45 minutes - 1 hour',
    bestTime: 'Mid-morning',
    description:
      'The 15th-century Kasbah sits at the heart of the medina, overlooking Plaza Uta el-Hammam. Built by Moulay Ali Ben Rachid, the founder of Chefchaouen, this red-walled fortress houses a small but interesting ethnographic museum with exhibits on local Rif culture, traditional costumes, musical instruments, weapons, old photographs of the town, and woodwork. The real highlight is the garden courtyard with its towering trees and the view from the restored tower, which offers a rooftop panorama over the blue medina to the Rif Mountains beyond.',
    insiderTip:
      'The tower climb is the best part — the 360-degree view from the top is the best elevated viewpoint within the medina itself. The gardens are a peaceful escape from the lively plaza outside. The museum is small enough to visit in under an hour. Combine with a mint tea at one of the plaza cafes afterward. On Mondays and Thursdays, the plaza hosts a lively local market.',
  },
  {
    name: 'Plaza Uta el-Hammam',
    icon: Globe,
    category: 'Town Square',
    price: 'Free',
    duration: '30 minutes - 2 hours',
    bestTime: 'Evening',
    description:
      'The central square of Chefchaouen is the social heart of the town, surrounded by cafes, restaurants, the Grand Mosque with its distinctive octagonal minaret (unique in Morocco), and the Kasbah walls. This is where locals gather in the evening, where travelers swap stories over tagines, and where the atmosphere of this mountain town is best felt. The cafes serve excellent fresh juices, and the restaurants — while slightly more tourist-oriented — offer a convenient base for people-watching and soaking in the atmosphere.',
    insiderTip:
      'The cafes on the plaza are pricier than those in the medina alleys — expect to pay from 15-20 MAD for mint tea versus from 8-10 MAD in local spots. But the people-watching is unbeatable. The Grand Mosque is not open to non-Muslims, but its octagonal minaret is unique in all of Morocco and worth photographing from the plaza. Evening is the best time when the square fills with life.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HIKING & NATURE ADVENTURES
   ═══════════════════════════════════════════════════════════════ */

const hikingExperiences = [
  {
    name: 'Spanish Mosque Hike',
    icon: Mountain,
    category: 'Hiking & Viewpoint',
    price: 'Free',
    duration: '1-1.5 hours (round trip)',
    bestTime: 'Sunset',
    description:
      'The single most popular activity in Chefchaouen beyond the medina itself. A well-trodden trail leads uphill from the medina to a half-built Spanish mosque that was never completed during the Spanish occupation (1920-1956). The mosque itself is modest, but the panoramic view is breathtaking — the entire blue medina spreads below you like a painter palette of blues, nestled into the valley between the twin peaks of Jebel el-Kelaa and Jebel Meggou. At sunset, the light turns the mountains golden while the medina glows in deepening shades of blue and purple.',
    insiderTip:
      'The hike takes 20-30 minutes uphill from the medina. Start from the Ras El Ma waterfall and follow the clear path. Bring water and wear sturdy shoes — the trail is rocky in places. Arrive 30-45 minutes before sunset to claim a good spot. The sunset here is one of the most photographed scenes in all of Morocco. Sunrise is equally beautiful and far less crowded. The trail is safe but avoid returning after dark without a flashlight.',
  },
  {
    name: 'Akchour Waterfalls',
    icon: Waves,
    category: 'Day Hike / Nature',
    price: 'From 10 MAD (park entry) + From 100-200 MAD (transport)',
    duration: 'Full day (6-8 hours)',
    bestTime: 'Morning start',
    description:
      'Located about 30 kilometers from Chefchaouen in the Talassemtane National Park, the Akchour Waterfalls are one of the most spectacular natural sites in northern Morocco. The hike follows the Farda River through a dramatic gorge with turquoise pools, past the small waterfall (Cascades d\'Akchour, 45 minutes), and onward to the magnificent grand waterfall (Grande Cascade, 2.5-3 hours one way) that plunges into a deep emerald pool surrounded by lush vegetation. The trail passes through pine and cedar forests with stunning Rif Mountain scenery throughout.',
    insiderTip:
      'Start early (before 9 AM) to beat the heat and the crowds. The trail to the small waterfall is easy and suitable for most fitness levels. The grand waterfall trail is longer and more challenging with some scrambling over rocks — bring good hiking shoes, plenty of water, and snacks. Swimming in the natural pools is permitted and incredibly refreshing. A shared grand taxi from Chefchaouen to Akchour costs from 25-30 MAD per person.',
  },
  {
    name: 'God\'s Bridge (Pont de Dieu)',
    icon: MountainSnow,
    category: 'Natural Wonder',
    price: 'From 10 MAD (park entry) + From 100-200 MAD (transport)',
    duration: 'Half day (3-4 hours)',
    bestTime: 'Morning',
    description:
      'One of the most extraordinary natural formations in Morocco, God\'s Bridge is a massive natural stone arch spanning the Farda River gorge near Akchour. The arch stretches roughly 25 meters across the canyon, with the turquoise river flowing far below through a deep gorge. The rock formation was carved over millennia by water erosion, creating a bridge that looks designed by a giant architect. The trail from the Akchour trailhead takes about 1 hour each way and follows a different fork of the river than the waterfall trail, passing through equally stunning gorge scenery.',
    insiderTip:
      'God\'s Bridge and the Akchour Waterfalls start from the same trailhead but follow different trails — doing both in one day is possible but very long (8-10 hours of hiking). If you only have time for one, locals often recommend God\'s Bridge for its uniqueness. The trail is mostly flat and easier than the grand waterfall hike. Combine with a swim in the turquoise pools near the bridge. Bring a picnic — there are no food vendors on the trail.',
  },
  {
    name: 'Talassemtane National Park',
    icon: TreeDeciduous,
    category: 'Nature Reserve',
    price: 'From 10 MAD (entry) / From 300 MAD (guided trek)',
    duration: 'Half day to multi-day',
    bestTime: 'Spring (March-May)',
    description:
      'The 58,000-hectare Talassemtane National Park surrounds Chefchaouen and protects some of the last remaining Moroccan fir (Abies marocana) forests in the world — a critically endangered species found nowhere else on earth. The park offers excellent hiking through cedar, pine, and fir forests, with trails ranging from easy half-day walks to multi-day treks through remote Rif Mountain villages. Wildlife includes Barbary macaques, golden eagles, Egyptian vultures, and the rare Barbary stag. The dramatic karst limestone landscapes, deep gorges, and mountain meadows rival anything in the European Alps.',
    insiderTip:
      'For serious trekking, hire a local guide through the Chefchaouen tourism office or your riad (from 300 MAD per day). The park has minimal infrastructure and trails are not always well marked. The Jebel el-Kelaa circuit (the peak directly above Chefchaouen) is a challenging but rewarding full-day hike with extraordinary views. Spring is the best season for wildflowers and the Moroccan fir forests are most atmospheric in morning mist.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD & CULINARY EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const foodExperiences = [
  {
    name: 'Moroccan Cooking Class',
    icon: UtensilsCrossed,
    category: 'Culinary Experience',
    price: 'From 250 MAD',
    duration: '3-4 hours',
    description:
      'Chefchaouen cooking classes offer an intimate, home-style experience very different from the larger operations in Marrakech or Fes. Typically hosted in a family home or small riad, you will shop for ingredients in the local market with your host, then learn to prepare traditional Rif Mountain dishes — goat tagine with prunes, rfissa (lentil and shredded msemen dish), bessara (fava bean soup), handmade couscous, and Chefchaouen distinctive round bread. Classes usually include 3-4 dishes and end with eating everything you have prepared together.',
    insiderTip:
      'Book through your riad rather than online platforms for a more authentic (and often cheaper) experience. Many riad owners host cooking classes themselves or can arrange one with a local family. The best classes include the market visit — walking through Chefchaouen small but vibrant market with a local cook is an education in Rif Mountain ingredients, especially the local cheeses, olive oils, and herbs.',
  },
  {
    name: 'Rooftop Cafe Experience',
    icon: Coffee,
    category: 'Cafe Culture',
    price: 'From 15-40 MAD',
    duration: '1-2 hours',
    bestTime: 'Late afternoon / Sunset',
    description:
      'Chefchaouen has some of the best rooftop cafe terraces in Morocco, offering views over the blue medina to the Rif Mountains. Unlike the frenetic cafes of Marrakech, the pace here is slow and genuinely relaxed. Order a glass of fresh orange or avocado juice (a Chefchaouen specialty), traditional mint tea, or a Rif Mountain herbal infusion. Many rooftop cafes also serve simple food — cheese and olive platters, msemen (folded flatbread), and bissara. The experience is about settling in, watching the light change over the mountains, and letting the blue city work its magic.',
    insiderTip:
      'The best rooftop terraces are at Lala Mesouda (spectacular 360-degree views), Restaurant Tissemlal (sunset views over the medina), and Cafe Clock Chefchaouen (cultural programming and great food). Avoid the cafes directly on Plaza Uta el-Hammam if you want value — walk 2-3 streets into the medina for the same views at half the price. Avocado smoothies and fresh-pressed juices cost from 15-25 MAD at local spots.',
  },
  {
    name: 'Cheese-Making Workshop',
    icon: Heart,
    category: 'Artisan Food Experience',
    price: 'From 200 MAD',
    duration: '2-3 hours',
    description:
      'The Rif Mountains around Chefchaouen are one of the few regions in Morocco with a genuine cheese-making tradition. Local goat cheese (jben) is produced in farmhouses throughout the surrounding valleys using methods passed down through generations. Several farms and riads now offer workshops where you can learn to make fresh goat cheese from raw milk, flavored with herbs, cumin, or paprika. The experience includes visiting goats, milking (in season), curdling the milk, pressing the cheese, and tasting the results with fresh bread and local olive oil.',
    insiderTip:
      'The best cheese workshops are at farms in the countryside surrounding Chefchaouen, about 15-20 minutes by taxi. Ask your riad to arrange a visit to a goat farm — the experience is far more authentic than in-town workshops. The fresh jben cheese is sold in the Chefchaouen market and makes a delicious breakfast spread with olive oil and fresh bread. Buy cheese from the market women who bring it from the mountains — it is fresher and cheaper (from 10-15 MAD per portion).',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING & ARTISAN EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const shoppingExperiences = [
  {
    name: 'Wool Blankets & Textiles',
    icon: ShoppingBag,
    category: 'Artisan Shopping',
    price: 'From 150 MAD (small) / From 400 MAD (large)',
    duration: '1-2 hours',
    description:
      'Chefchaouen is famous throughout Morocco for its handwoven wool blankets and textiles. Rif Mountain women weave these on traditional wooden looms in their homes and villages, using wool from local sheep and goats. The blankets feature bold geometric patterns in vibrant reds, oranges, blues, and earth tones. You will find them draped over every wall and doorway in the medina, creating a colorful backdrop to the blue streets. The quality and authenticity of Chefchaouen textiles is generally higher than what you find in more touristy cities.',
    insiderTip:
      'The best blankets are sold by women cooperatives and individual weavers, not the large tourist shops on the plaza. Look for shops in the quieter alleys of the upper medina. Ask to see the weaving process — some shops have looms in the back. A genuine handwoven blanket takes days to make and should feel heavy and dense. Machine-made imports from China are thinner and lighter — learn to feel the difference. Prices are negotiable but start lower here than in Marrakech or Fes.',
  },
  {
    name: 'Leather Goods & Babouche Slippers',
    icon: Palette,
    category: 'Artisan Shopping',
    price: 'From 60 MAD (slippers) / From 150 MAD (bags)',
    duration: '30 minutes - 1 hour',
    description:
      'While Fes is the leather capital of Morocco, Chefchaouen has its own small-scale leather workshops producing beautifully crafted babouche slippers, bags, and belts. The leather is naturally dyed using local plant-based dyes, and the craftsmanship — while less industrial than Fes — has a charming handmade quality. Round leather poufs, embossed journal covers, and coin purses make excellent lightweight souvenirs. Prices in Chefchaouen are generally 20-30% lower than in Marrakech for comparable quality.',
    insiderTip:
      'The leather workshops are concentrated in the lower medina near Bab el-Ain. Watch for shops where the artisan is actually working in the shop — this indicates locally made goods rather than imports. Babouche slippers make the best leather souvenir from Chefchaouen: lightweight, packable, and from 60-120 MAD for handmade pairs. For bags, check stitching quality and ask if the leather is locally tanned.',
  },
  {
    name: 'Handmade Soaps & Natural Cosmetics',
    icon: Sparkles,
    category: 'Artisan Shopping',
    price: 'From 15 MAD (soap) / From 40 MAD (argan oil)',
    duration: '30 minutes',
    description:
      'The Rif Mountains are rich in aromatic herbs, and Chefchaouen has a thriving cottage industry of handmade soaps, essential oils, and natural cosmetics. Lavender, rosemary, thyme, and wild herbs are harvested from the surrounding mountains and used to create soaps, essential oil blends, and beauty products. Local argan oil and olive oil are also sold, often pressed in nearby villages. The quality is excellent and prices are lower than in the tourist souks of larger cities.',
    insiderTip:
      'The best natural products are found in the small herboristeries (herb shops) in the medina alleys, not the tourist-facing shops on the main streets. Look for the shops run by older herbalists who can explain each product ingredient. Handmade lavender soap from 15-25 MAD makes an excellent lightweight souvenir. Be cautious with argan oil — genuine culinary argan oil should smell nutty, while cosmetic grade is odorless. Expect from 80-150 MAD for 100ml of pure argan oil.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY & VIEWPOINTS
   ═══════════════════════════════════════════════════════════════ */

const photographySpots = [
  {
    name: 'Best Photography Spots in the Medina',
    icon: Camera,
    category: 'Photography',
    price: 'Free',
    duration: '2-4 hours',
    description:
      'Chefchaouen is one of the most photographed towns in the world, and the entire medina is essentially an open-air photography studio. The most iconic shots include the narrow blue alleys with potted plants and cats, the colorful doorways and window frames set against blue walls, the zellige-decorated fountains, the blue staircases leading to hidden corners, and the overhead views from rooftop terraces. The interplay of blue walls, terracotta rooftops, green plants, and warm Mediterranean light creates compositions that practically take themselves.',
    insiderTip:
      'The golden hours (sunrise and sunset) are when the blue walls glow most intensely. Early morning (6-7 AM) gives you empty streets and soft light. The most photographed street is the alley with the famous blue steps near Rue Targui. For overhead shots, ask permission to access rooftop terraces at cafes and riads. Respect residents privacy — always ask before photographing people, especially women. The neighborhoods above Ras El Ma are less photographed but equally beautiful.',
  },
  {
    name: 'Day Trip to Tetouan',
    icon: Compass,
    category: 'Day Trip / Cultural',
    price: 'From 35 MAD (bus) / From 200 MAD (grand taxi)',
    duration: 'Full day',
    description:
      'The UNESCO-listed medina of Tetouan is just 1.5 hours from Chefchaouen and makes an excellent day trip. While Chefchaouen is blue, Tetouan is white — a gleaming Andalusian-influenced medina with Spanish colonial architecture, art galleries, and a slower pace than other Moroccan cities. The Royal Artisan School (Escuela de Artes y Oficios) is one of the finest in Morocco, training students in traditional woodcarving, zellige, and mosaic. The Archaeological Museum houses Volubilis artifacts. Tetouan is also a gateway to the Mediterranean beaches of Martil and M\'diq.',
    insiderTip:
      'Take the CTM or local bus for the cheapest option (from 35 MAD each way). The road is winding and scenic through the Rif Mountains. In Tetouan, focus on the UNESCO medina and the Royal Artisan School — both are walkable from the bus station. For a beach add-on, take a shared taxi from Tetouan to Martil beach (from 5 MAD, 10 minutes). Tetouan is less tourist-oriented than Chefchaouen, so prices for food and shopping are lower.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EVENING & NIGHTLIFE
   ═══════════════════════════════════════════════════════════════ */

const eveningExperiences = [
  {
    name: 'Chefchaouen Nightlife & Evening Atmosphere',
    icon: Music,
    category: 'Evening Entertainment',
    price: 'From 15-50 MAD',
    duration: '2-3 hours',
    bestTime: 'After sunset',
    description:
      'Chefchaouen nightlife is low-key compared to Marrakech or Tangier — and that is part of its charm. The evening revolves around Plaza Uta el-Hammam, where cafe terraces fill with travelers and locals as the sun sets. Some restaurants and riads offer live Andalusian or Gnawa music on weekends. Cafe Clock occasionally hosts cultural events, storytelling, and music nights. The medina takes on a completely different character after dark — the blue walls glow under warm street lights, the alleys empty out, and the mountain air cools. An after-dinner stroll through the quiet medina, with cats prowling the blue stairs and the muezzin call echoing off the walls, is one of Chefchaouen most magical experiences.',
    insiderTip:
      'Chefchaouen is not a party town — most cafes close by 10-11 PM. The evening experience is about atmosphere, not nightclubs. The best evening activity is a slow walk through the medina after dinner when most day-trippers have left. Some riads have rooftop terraces where you can stargaze — the mountain location means less light pollution than coastal cities. If you want live music, ask at Cafe Clock or your riad about scheduled events.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIPS
   ═══════════════════════════════════════════════════════════════ */

const budgetTips = [
  {
    tip: 'Walk Everywhere',
    icon: Footprints,
    description: 'Chefchaouen is tiny and entirely walkable. The medina takes 15 minutes to cross. You will never need a taxi within town. Even the Spanish Mosque hike is free and starts from the medina edge.',
    savings: 'Free — no local transport needed',
  },
  {
    tip: 'Eat at Local Hole-in-the-Wall Spots',
    icon: UtensilsCrossed,
    description: 'Skip the plaza restaurants and eat at the small local spots in the upper medina. A filling tagine costs from 30-40 MAD, bessara soup from 5 MAD, and a sandwich from 15 MAD. Look for places full of locals.',
    savings: 'Save from 30-50 MAD per meal',
  },
  {
    tip: 'Share Grand Taxis to Akchour',
    icon: MapPin,
    description: 'A shared grand taxi to Akchour Waterfalls costs from 25-30 MAD per person versus from 200 MAD for a private taxi. Wait at the grand taxi rank in the morning when other hikers are heading the same way.',
    savings: 'Save from 150-170 MAD on transport',
  },
  {
    tip: 'Buy Blankets from Cooperatives',
    icon: ShoppingBag,
    description: 'Women weaving cooperatives sell directly to visitors at fair trade prices, cutting out the middleman. Quality is guaranteed and prices are fixed, so no haggling stress. Ask your riad for the nearest cooperative.',
    savings: 'Save 20-30% on textiles',
  },
  {
    tip: 'Stay in Local Guesthouses',
    icon: Heart,
    description: 'Small family-run guesthouses (dar) cost from 150-250 MAD per night versus from 400-800 MAD at boutique riads. The experience is often more authentic, with home-cooked breakfasts and genuine family hospitality.',
    savings: 'Save from 200-500 MAD per night',
  },
  {
    tip: 'Bring Your Own Water Bottle',
    icon: Droplets,
    description: 'Fill your water bottle at the Ras El Ma spring — it is clean mountain water. Bottled water costs from 5-10 MAD in shops and adds up over a multi-day stay. Many riads also provide filtered water.',
    savings: 'Save from 15-30 MAD per day',
  },
  {
    tip: 'Skip the Guided Tours',
    icon: Compass,
    description: 'Chefchaouen is small and safe enough to explore independently. The medina is compact, the Spanish Mosque trail is well-marked, and even Akchour Waterfalls has a clear path. Save guide fees for more complex cities like Fes.',
    savings: 'Save from 150-300 MAD on guides',
  },
  {
    tip: 'Buy Fresh Produce at the Market',
    icon: CheckCircle,
    description: 'The local market sells fresh fruit, bread, olives, and cheese at rock-bottom prices. Assemble a picnic for the Spanish Mosque hike or Akchour day trip for under from 30 MAD per person.',
    savings: 'Save from 40-60 MAD vs. restaurant lunch',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: INSIDER TIPS
   ═══════════════════════════════════════════════════════════════ */

const insiderTips = [
  {
    tip: 'Best Blue Photography After Rain',
    icon: Camera,
    description:
      'The blue walls are most vibrant when wet. If it rains (common in spring and winter), grab your camera immediately — the wet cobblestones reflect the blue, creating mirror-like effects that are stunning in photographs. Overcast days also make the blue pop more than harsh midday sun.',
  },
  {
    tip: 'Avoid the Day-Trip Crush',
    icon: Clock,
    description:
      'Tour buses from Fes arrive between 11 AM and 2 PM, flooding the medina for a few hours before departing by 4 PM. Plan your medina exploration for early morning or late afternoon to avoid the crowds. Staying overnight transforms the experience.',
  },
  {
    tip: 'Learn Basic Darija & Tamazight',
    icon: BookOpen,
    description:
      'Chefchaouen is in the Rif Mountains where many locals speak Tamazight (Berber) alongside Darija (Moroccan Arabic) and Spanish. A few words of greeting — "salam alaikum," "shukran" (thank you), or "azul" (hello in Tamazight) — earn enormous goodwill.',
  },
  {
    tip: 'Cannabis Culture Awareness',
    icon: AlertTriangle,
    description:
      'The Rif Mountains are Morocco primary cannabis-growing region. You may be offered kif (cannabis) in the streets. Politely decline with "la shukran." While cultivation has a long history here, possession by tourists can result in fines or legal trouble. Be aware and stay respectful.',
  },
  {
    tip: 'Pack Layers for Mountain Weather',
    icon: Mountain,
    description:
      'Chefchaouen sits at 600 meters altitude in the mountains. Temperatures can drop 10-15 degrees from day to night, even in summer. Evenings are cool and winters are genuinely cold with occasional snow on the peaks. Always pack a warm layer.',
  },
  {
    tip: 'Respect the Blue Tradition',
    icon: Users,
    description:
      'The blue wash on buildings uses a traditional lime and indigo powder mixture that residents reapply regularly. Do not scratch, write on, or damage the blue walls for photographs. Some residents find it frustrating when tourists treat their homes purely as backdrops — ask before photographing doorways with people inside.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What are the top things to do in Chefchaouen?',
    answer:
      'The top things to do include walking through the Blue Medina (free), hiking to the Spanish Mosque for sunset views (free), visiting Ras El Ma waterfall (free), exploring the Kasbah Museum (from 10 MAD), day-tripping to Akchour Waterfalls and God\'s Bridge (from 10 MAD entry), shopping for handwoven wool blankets (from 150 MAD), taking a cooking class (from 250 MAD), and relaxing at rooftop cafes with mountain views (from 15 MAD).',
  },
  {
    question: 'How many days do you need in Chefchaouen?',
    answer:
      'Most travelers find 2-3 days ideal. Day 1: Blue Medina walk, Kasbah Museum, Ras El Ma, and Spanish Mosque at sunset. Day 2: Full-day hike to Akchour Waterfalls or God\'s Bridge. Day 3: Cooking class, deeper medina exploration, and souvenir shopping. One day is possible but misses the magic of Chefchaouen at sunrise and sunset when the blue is most vivid.',
  },
  {
    question: 'Is Chefchaouen expensive to visit?',
    answer:
      'Chefchaouen is very affordable. Street food costs from 10-30 MAD, a tagine lunch from 35-60 MAD, and a riad room from 250-500 MAD per night. Most of the best experiences (medina walking, Spanish Mosque hike, Ras El Ma) are free. Budget travelers can enjoy Chefchaouen on from 200-350 MAD per day, while mid-range travelers spend from 500-1,000 MAD per day.',
  },
  {
    question: 'What is the best time to visit Chefchaouen?',
    answer:
      'March to May (spring) and September to November (autumn) are ideal, with comfortable temperatures of 15-25 degrees Celsius and fewer crowds. Summer is hot but manageable due to altitude. Winter is cold (5-12 degrees) and rainy but the wet blue walls are stunningly photogenic. Avoid Eid holidays and Easter week when Moroccan tourists flood the town.',
  },
  {
    question: 'How do I get to Chefchaouen?',
    answer:
      'There is no train station or airport. CTM and Supratours buses run from Fes (4 hours, from 75 MAD), Tangier (3 hours, from 60 MAD), and Tetouan (1.5 hours, from 35 MAD). Grand taxis are faster but pricier. Book CTM buses online in advance during peak season. The mountain road from Fes is winding but scenic — if prone to motion sickness, sit in front and take medication.',
  },
  {
    question: 'Is Chefchaouen safe for solo travelers?',
    answer:
      'Chefchaouen is widely considered one of the safest cities in Morocco. The town is small, walkable, and locals are famously friendly. Solo female travelers generally feel comfortable here. The main concerns are steep medina steps (wear good shoes), occasional overcharging (always confirm prices before ordering), and the remote location requiring advance transport planning.',
  },
  {
    question: 'Why is Chefchaouen painted blue?',
    answer:
      'The most accepted theory is that Jewish refugees who settled here in the 1930s brought the tradition of painting buildings blue, which represents the sky and heaven in Jewish tradition. Other theories suggest blue repels mosquitoes, keeps homes cool, or was adopted to attract tourists. The tradition is now maintained by all residents using a mixture of lime wash and indigo powder. The blue is reapplied regularly, keeping the medina vibrant.',
  },
  {
    question: 'Can I do a day trip to Chefchaouen from Fes?',
    answer:
      'It is possible but not recommended. The drive takes 4-4.5 hours each way through winding mountain roads, leaving only 3-4 hours in town. If you must, organized tours (from 500 MAD) depart Fes early and return late. We strongly recommend at least one overnight stay to experience the medina at sunrise and sunset when the blue is most magical and the day-trippers have departed.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/chefchaouen',
    icon: MapPin,
    title: 'Chefchaouen City Guide',
    description: 'The complete guide to Chefchaouen: transport, accommodation, neighborhoods, and planning your visit.',
  },
  {
    href: '/morocco-road-trip-routes',
    icon: Compass,
    title: 'Morocco Road Trip Routes',
    description: 'Plan the ultimate Moroccan road trip including Chefchaouen on the northern circuit.',
  },
  {
    href: '/photography-guide',
    icon: Camera,
    title: 'Morocco Photography Guide',
    description: 'Capture the best shots across Morocco, from Chefchaouen blue medina to Sahara dunes.',
  },
  {
    href: '/morocco-3-days',
    icon: Calendar,
    title: '3 Days in Morocco',
    description: 'How to plan the perfect short trip to Morocco with itineraries that feature Chefchaouen.',
  },
  {
    href: '/hiking',
    icon: Mountain,
    title: 'Hiking in Morocco',
    description: 'Complete guide to Morocco best hikes: the Rif Mountains, Atlas peaks, and desert treks.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function ThingsToDoChefchaouenPage() {
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
            backgroundImage: 'url(/images/hero-chefchaouen.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/chefchaouen" className="hover:text-white transition-colors">
              Chefchaouen
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Things to Do</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Ultimate Activity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Top 18 Things to Do
            <br className="hidden md:block" /> in Chefchaouen
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the legendary Blue Medina and mountain hikes to hidden waterfalls and artisan workshops.
            Your complete 2026 guide to Morocco&apos;s most photogenic town, with real prices and insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Chefchaouen: Morocco&apos;s Enchanting Blue Pearl of the Rif
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Tucked into a valley between two peaks of the Rif Mountains, Chefchaouen is unlike
                anywhere else in Morocco — or the world. The entire medina is painted in shades of blue,
                from the palest powder blue to deep, vibrant cobalt, creating a dreamlike landscape that
                has made this small mountain town one of the most photographed places on earth. Founded
                in 1471 as a fortress against Portuguese invasions, Chefchaouen (locals call it simply
                &quot;Chaouen&quot;) remained isolated and largely closed to foreigners until the 1920s.
              </p>
              <p>
                That isolation preserved something rare: a town that feels genuinely different from the
                rest of Morocco. The pace is slower. The air is cooler and scented with pine from the
                surrounding forests. The people are warmer and less accustomed to mass tourism than in
                Marrakech or Fes. The mountains surrounding the town offer world-class hiking, from the
                iconic Spanish Mosque viewpoint to the spectacular Akchour Waterfalls and the primeval
                forests of Talassemtane National Park.
              </p>
              <p>
                This guide covers 18 of the best things to do in Chefchaouen, organized by category:
                medina experiences, hiking and nature, food and cooking, shopping and artisan crafts,
                photography, and evening atmosphere. Each includes real 2026 prices in MAD, practical
                logistics, and insider tips from people who know this town intimately.
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
            Short on time? These are the ten experiences that define a visit to Chefchaouen.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Prices may vary by season and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { rank: 1, name: 'Walk the Blue Medina at Sunrise', price: 'Free', time: '2-4 hours', category: 'Iconic' },
              { rank: 2, name: 'Spanish Mosque Sunset Hike', price: 'Free', time: '1-1.5 hours', category: 'Viewpoint' },
              { rank: 3, name: 'Akchour Waterfalls Day Hike', price: 'From 10 MAD', time: 'Full day', category: 'Nature' },
              { rank: 4, name: 'God\'s Bridge (Pont de Dieu)', price: 'From 10 MAD', time: 'Half day', category: 'Natural Wonder' },
              { rank: 5, name: 'Ras El Ma Waterfall & Springs', price: 'Free', time: '30 min - 1 hour', category: 'Landmark' },
              { rank: 6, name: 'Kasbah Museum Tower Views', price: 'From 10 MAD', time: '45 min - 1 hour', category: 'Historical' },
              { rank: 7, name: 'Rooftop Cafe Sunset Session', price: 'From 15 MAD', time: '1-2 hours', category: 'Cafe Culture' },
              { rank: 8, name: 'Shopping for Wool Blankets', price: 'From 150 MAD', time: '1-2 hours', category: 'Artisan' },
              { rank: 9, name: 'Cooking Class with Market Tour', price: 'From 250 MAD', time: '3-4 hours', category: 'Culinary' },
              { rank: 10, name: 'Cheese-Making Workshop', price: 'From 200 MAD', time: '2-3 hours', category: 'Food Artisan' },
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

      {/* ── Medina & Cultural Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Medina &amp; Cultural Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Blue Medina is Chefchaouen&apos;s heart and soul. Compact, safe, and endlessly photogenic,
            it is a place where getting lost is the entire point and every corner reveals a new shade of blue.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The medina is small enough to explore in a few hours, but rewards those who linger over multiple days.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {medinaExperiences.map((attraction) => {
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

      {/* ── Hiking & Nature Adventures ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hiking &amp; Nature Adventures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Rif Mountains surrounding Chefchaouen offer some of the best hiking in Morocco, from
            easy sunset walks to full-day waterfall adventures and multi-day mountain treks.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Wear sturdy shoes and bring plenty of water for all hikes. The mountain weather can change quickly.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {hikingExperiences.map((item) => {
              const HikeIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HikeIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
            Chefchaouen&apos;s cuisine reflects its Rif Mountain setting — hearty, herb-rich, and centered
            around local goat cheese, fresh vegetables, and simple but deeply flavorful preparations.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All food prices are starting prices. Plaza restaurants charge 30-50% more than local medina spots.
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

      {/* ── Shopping & Artisan Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Artisan Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Chefchaouen is famous for its handwoven wool textiles, leather goods, and natural cosmetics.
            The shopping experience is more relaxed and less pressured than in larger Moroccan cities.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are negotiable for crafts and textiles. Start at 60-70% of the asking price and work toward a fair middle.
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

      {/* ── Photography & Day Trips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography &amp; Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Chefchaouen is one of the most photographed towns in the world. Every alley is a composition
            waiting to be captured, and day trips to nearby Tetouan expand your Moroccan experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Always ask permission before photographing local residents, especially women and children.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {photographySpots.map((item) => {
              const PhotoIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PhotoIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* ── Evening & Nightlife ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Evening &amp; Nightlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Chefchaouen nightlife is beautifully low-key. The magic is in the atmosphere — the blue
            walls glowing under warm lights, the mountain air cooling, and the medina emptying to reveal
            its most peaceful self.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most cafes and restaurants close by 10-11 PM. This is a peaceful mountain town, not a party destination.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {eveningExperiences.map((item) => {
              const EveIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EveIcon className="w-6 h-6 text-[var(--color-accent)]" />
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

      {/* ── Budget Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            8 Budget Tips for Chefchaouen
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Chefchaouen is already affordable, but these strategies help you stretch your budget even further.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => {
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
            Insider Tips for Chefchaouen
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that makes the difference between a good visit and an unforgettable one.
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
            Sample 3-Day Chefchaouen Itinerary
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
                  Day 1: The Blue Medina &amp; Spanish Mosque
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Arrive and check into your riad. Begin exploring the Blue Medina on foot, starting from
                      Plaza Uta el-Hammam. Visit the Kasbah Museum and climb the tower for panoramic views (from 10 MAD).
                      Wander the blue alleys, pausing to photograph doorways, cats on stairs, and the play of light on
                      blue walls. Find a local spot for a tagine lunch (from 35 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Walk to Ras El Ma waterfall at the eastern edge of the medina (free). Watch the women washing
                      wool in the traditional way. Explore the quieter upper medina neighborhoods. Browse the wool
                      blanket shops and leather workshops. Rest at a rooftop cafe with mint tea (from 10 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Hike to the Spanish Mosque for sunset (free, 20-30 minutes uphill). Watch the blue medina
                      glow golden as the sun sets behind the Rif Mountains. Return to the plaza for dinner at a
                      restaurant terrace (from 50-80 MAD). Stroll the medina after dark when the blue walls
                      glow under warm street lights. Estimated Day 1 cost: from 100-200 MAD.
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
                  Day 2: Akchour Waterfalls &amp; God&apos;s Bridge
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Depart early (by 8 AM) by shared grand taxi to the Akchour trailhead (from 25-30 MAD per person).
                      Pay the park entry fee (from 10 MAD). Choose your trail: the God&apos;s Bridge fork (1 hour each way,
                      easier) or the Grand Waterfall fork (2.5-3 hours each way, more demanding). Pack a picnic lunch,
                      plenty of water, and snacks. Wear good hiking shoes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Swim in the turquoise natural pools at the waterfalls or beneath God&apos;s Bridge. Picnic on the
                      rocks surrounded by the Rif Mountain gorge scenery. Return to the trailhead and take a grand taxi
                      back to Chefchaouen. If energy permits, visit the small waterfall stop on the way (45 minutes from trailhead).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Return to the medina for a well-earned dinner. Try a local restaurant in the upper medina for
                      a goat tagine or kefta (from 40-60 MAD). Relax at your riad rooftop terrace with tea and
                      mountain views. Estimated Day 2 cost: from 100-200 MAD (excluding picnic supplies).
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
                  Day 3: Cooking, Crafts &amp; Farewell
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Take a cooking class including a market tour (from 250 MAD). Learn to prepare Rif Mountain
                      dishes — goat tagine, handmade couscous, and Chefchaouen round bread. Eat everything you have
                      made. Alternatively, visit a goat farm for a cheese-making workshop (from 200 MAD).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      Final souvenir shopping — wool blankets (from 150 MAD), babouche slippers (from 60 MAD), handmade
                      soaps (from 15 MAD), and local argan oil (from 80 MAD). Visit the women weaving cooperatives
                      for fair-trade textiles. Explore any medina corners you missed on Day 1.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                    <p className="text-xs text-[var(--text-secondary)]">
                      One last sunrise walk through the empty medina (if departing afternoon) or a farewell sunset at
                      the Spanish Mosque. Final rooftop cafe session with avocado juice and mountain views (from 20 MAD).
                      Depart by bus to your next destination. Estimated Day 3 cost: from 300-500 MAD.
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 400-700 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Free activities, street food, shared taxis, self-guided hikes</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 1,000-1,800 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Cooking class, restaurant meals, shopping, all activities</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Comfort Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 2,000-3,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Private transport, guided treks, cheese workshop, fine dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
            Continue Planning Your Chefchaouen Trip
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
            Ready to Explore the Blue City?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the blue-washed medina to mountain waterfalls and artisan workshops, Chefchaouen offers
            an experience unlike anywhere else in Morocco. Start planning your trip with our complete guide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Chefchaouen City Guide
            </Link>
            <Link
              href="/photography-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Camera className="w-5 h-5" />
              Photography Guide
            </Link>
            <Link
              href="/hiking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Hiking in Morocco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
