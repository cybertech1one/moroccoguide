import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Camera,
  Sun,
  Sunrise,
  Sunset,
  Star,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Eye,
  Shield,
  Plane,
  DollarSign,
  Users,
  Heart,
  Image,
  Aperture,
  Mountain,
  Building,
  Palette,
  Monitor,
  Thermometer,
  Navigation,
  Zap,
  Focus,
  Info,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Morocco Photography Guide | Top 20 Photo Spots, Gear & Tips',
  description:
    'Plan the perfect Morocco photography trip. Top 20 photo locations ranked, photography spots by city, golden hour timing by season, gear recommendations, drone rules, etiquette, and post-processing tips for Morocco\'s extraordinary light.',
  keywords: [
    'Morocco photography',
    'Morocco photo spots',
    'Chefchaouen photography',
    'Sahara desert photos',
    'Marrakech photography',
    'Morocco drone rules',
    'Morocco golden hour',
    'Morocco camera tips',
    'Morocco photo tour',
    'Morocco street photography',
  ],
  openGraph: {
    title: 'Morocco Photography Guide - Top 20 Photo Spots',
    description:
      'From the blue streets of Chefchaouen to Sahara sunsets, discover the most photogenic locations in Morocco with expert tips on gear, timing, and etiquette.',
    url: 'https://citytoursmorocco.com/photography',
    images: [
      {
        url: '/images/hero-chefchaouen.webp',
        width: 1200,
        height: 630,
        alt: 'Blue streets of Chefchaouen Morocco - top photography destination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Photography Guide | Top 20 Spots',
    description:
      'Top 20 photo locations, golden hour timing, gear tips, drone rules, and etiquette for Morocco photography.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/photography' },
};

/* =====================================================================
   TOP 20 PHOTO SPOTS
   ===================================================================== */

const photoSpots = [
  {
    rank: 1,
    name: 'Jemaa el-Fna, Marrakech',
    description: 'The most dynamic square in Africa. From the rooftop cafes, capture snake charmers, storytellers, acrobats, and an ocean of orange juice vendors. At dusk, hundreds of food stalls light up with smoke and flame. The energy is unparalleled.',
    bestTime: 'Sunset from Cafe de France or Nomad rooftop. Golden hour paints the Koutoubia minaret. Blue hour captures the food stall smoke.',
    tips: 'Shoot from rooftop cafes for aerial views. At street level, a wide-angle captures the chaos. At night, high ISO and fast lenses are essential. Budget 20-50 MAD for a mint tea "table fee" at rooftop cafes.',
    image: '/images/hero-jemaa-elfna-night.webp',
    timeOfDay: 'Sunset & Blue Hour',
  },
  {
    rank: 2,
    name: 'Chefchaouen Blue Medina',
    description: 'The most photographed town in Morocco. Every wall, step, door, and alleyway is painted in shades of blue, creating an otherworldly monochromatic canvas. The light changes the blue from powder to cobalt to indigo throughout the day.',
    bestTime: 'Early morning (7-9am) before day-trippers arrive. The soft morning light on blue walls is magical. Overcast days actually enhance the blue saturation.',
    tips: 'Visit on a weekday for fewer crowds. The narrowest alleys near the kasbah are the most photogenic. Shoot in portrait mode for the tall, narrow streets. A polarizer reduces glare and deepens the blue.',
    image: '/images/hero-chefchaouen-drone.webp',
    timeOfDay: 'Early Morning',
  },
  {
    rank: 3,
    name: 'Sahara Desert Dunes (Erg Chebbi)',
    description: 'Towering 150-meter sand dunes that change color with every hour of the day. The interplay of light and shadow on the dune ridges creates abstract patterns that look like paintings. Camel caravans silhouetted against the sunset are the iconic Morocco shot.',
    bestTime: 'Sunrise is the absolute best: golden light hits the dunes while shadows fill the troughs. Sunset silhouettes are dramatic. Night: Milky Way shots require a tripod and clear moonless night.',
    tips: 'Bring a rocket blower and cleaning cloth for sand. Protect gear in a dry bag. Climb a dune at 5am for sunrise. Use a telephoto to compress camel caravan perspectives. The blue hour after sunset is extraordinary.',
    image: '/images/hero-sahara-sunrise.webp',
    timeOfDay: 'Sunrise & Night',
  },
  {
    rank: 4,
    name: 'Ait Benhaddou',
    description: 'A UNESCO-listed fortified village (ksar) built of red earth and straw, rising like a sandcastle from the desert. Featured in Game of Thrones, Gladiator, and Lawrence of Arabia. The mud-brick architecture against the barren landscape is timelessly photogenic.',
    bestTime: 'Golden hour (sunrise or sunset) when the warm light turns the red earth to gold. Morning light hits the front face. Cross the river for the classic full-ksar view with the river reflecting the walls.',
    tips: 'The view from across the river is the classic shot. Climb to the top for panoramic views of the surrounding desert. Interior details (doors, windows, passages) are best shot midday when light penetrates the narrow alleys.',
    image: '/images/hero-ait-benhaddou.webp',
    timeOfDay: 'Golden Hour',
  },
  {
    rank: 5,
    name: 'Fes Tanneries (Chouara)',
    description: 'The medieval tanneries of Fes are one of the most visually striking scenes in Morocco. Hundreds of stone vats filled with natural dyes in every color create a mosaic visible from surrounding terraces. Workers dye leather using methods unchanged since the 11th century.',
    bestTime: 'Late morning (10am-12pm) when the sun is high and illuminates all the vats. Earlier is too shadowed, later the light becomes harsh. Weekdays are better as workers are active.',
    tips: 'Shoot from the surrounding leather shops (free but expect pressure to buy). A sprig of mint helps with the smell. A telephoto lens compresses the vat patterns beautifully. Wide-angle from above captures the full scope.',
    image: '/images/hero-fes-tanneries.webp',
    timeOfDay: 'Late Morning',
  },
  {
    rank: 6,
    name: 'Hassan II Mosque, Casablanca',
    description: 'The third-largest mosque in the world, built on the Atlantic Ocean with waves crashing against its foundations. The 210-meter minaret is the tallest religious structure on Earth. The mosque\'s combination of traditional craftsmanship and monumental scale is staggering.',
    bestTime: 'Sunset from the esplanade, when the sky turns orange behind the minaret. Blue hour with the mosque illuminated is equally stunning. Interior photography is only possible during guided tours.',
    tips: 'The esplanade offers unobstructed views. Shoot from the breakwater for a unique perspective with ocean spray. Tours (120 MAD) allow interior shots of the extraordinary zellige and cedar craftsmanship. No tripods inside.',
    image: '/images/hero-hassan-mosque.webp',
    timeOfDay: 'Sunset & Blue Hour',
  },
  {
    rank: 7,
    name: 'Essaouira Ramparts & Port',
    description: 'An 18th-century fortified port city with Portuguese ramparts, a working fishing harbor, and dramatic Atlantic light. The combination of blue fishing boats, white buildings, and golden light through sea spray creates a painterly atmosphere.',
    bestTime: 'Late afternoon when golden light streams through the port. Sunset from the ramparts (Skala de la Ville) is iconic. The early morning fish market is wonderful for documentary photography.',
    tips: 'The port is free to enter and full of character. Skala cannons make a dramatic foreground for sunset shots. Use the sea spray and mist creatively. The medina streets have stunning blue-and-white compositions.',
    image: '/images/hero-essaouira-ramparts.webp',
    timeOfDay: 'Late Afternoon',
  },
  {
    rank: 8,
    name: 'Todra Gorge',
    description: 'A dramatic canyon in the eastern High Atlas where 300-meter sheer rock walls narrow to just 10 meters at the base. The towering orange and pink limestone walls catch light in extraordinary ways, especially in the mornings.',
    bestTime: 'Morning (9-11am) when sunlight reaches the canyon floor and illuminates the rock walls. Afternoon puts the lower canyon in shadow. The light play between sunlit and shadowed rock is dramatic.',
    tips: 'Walk beyond the tourist area into the narrower upper canyon for fewer people. Use a wide-angle to emphasize the wall height. A figure in the frame provides essential scale. The river bed reflections add another dimension.',
    image: '/images/hero-todra-gorge.webp',
    timeOfDay: 'Morning',
  },
  {
    rank: 9,
    name: 'Ben Youssef Madrasa, Marrakech',
    description: 'A 14th-century Islamic college with the finest architectural decoration in Morocco. Every surface is covered in carved stucco, zellige tilework, and cedar wood carving. The central courtyard with its reflecting pool is perfection.',
    bestTime: 'Opening time (9am) before crowds arrive. The courtyard light is best mid-morning. Interior rooms require good high-ISO capability due to limited light.',
    tips: 'The reflecting pool shot requires patience for a moment without ripples. Look up for extraordinary carved plaster ceilings. The student cells on the upper floor have beautiful light and shadow play. Entry fee: 70 MAD.',
    image: '/images/detail-zellige-mosaic.webp',
    timeOfDay: 'Early Morning',
  },
  {
    rank: 10,
    name: 'Draa Valley & Kasbahs',
    description: 'The longest river valley in Morocco, lined with date palm oases and crumbling kasbahs of red earth. The contrast of green palms against red-brown kasbahs and blue sky is quintessentially Moroccan.',
    bestTime: 'Golden hour in either direction. The Agdz to Zagora stretch is best in the afternoon when the kasbahs catch warm side light.',
    tips: 'Stop at the viewpoint above Agdz for a panoramic overview. Timiderte Kasbah and Tamnougalt are the most photogenic. A telephoto isolates individual kasbahs against palm groves. The road itself makes for beautiful leading-line compositions.',
    image: '/images/hero-dades-gorge.webp',
    timeOfDay: 'Golden Hour',
  },
  {
    rank: 11,
    name: 'Marrakech Souks',
    description: 'A labyrinth of covered markets selling everything from spices to metalwork. Shafts of light piercing through latticed roofs, colorful spice pyramids, and artisans at work create endless photographic opportunities.',
    bestTime: 'Mid-morning (10am-12pm) when light shafts penetrate the souk roofs. Early morning for artisans starting work. Avoid Friday when many shops close.',
    tips: 'Fast lenses (f/1.4-2.8) are essential for the dark interiors. Ask spice sellers before shooting and buy something in return. The dyers\' souk with hanging colorful yarn is spectacular. Shoot candid rather than posed.',
    image: '/images/hero-fes-tanneries.webp',
    timeOfDay: 'Mid-Morning',
  },
  {
    rank: 12,
    name: 'Ouzoud Waterfalls',
    description: 'North Africa\'s highest falls at 110 meters, cascading through red rock and olive trees. Rainbows form in the mist, and wild Barbary macaques add wildlife interest.',
    bestTime: 'Midday when the sun creates rainbows in the mist. Morning light is softer for the overall scene. Overcast days reduce harsh shadows in the gorge.',
    tips: 'Bring a waterproof bag for the mist at the base. A slow shutter speed (1/4 to 1 sec) with a tripod creates silky water. The view from the boat at the base is the most dramatic.',
    image: '/images/hero-national-parks.webp',
    timeOfDay: 'Midday',
  },
  {
    rank: 13,
    name: 'Jardin Majorelle, Marrakech',
    description: 'A botanical garden designed by Jacques Majorelle and later owned by Yves Saint Laurent. The cobalt blue buildings against cactus gardens and bougainvillea create bold, graphic compositions.',
    bestTime: 'Opening time (8am) to avoid the enormous crowds. The blue buildings photograph well at any time. Overcast light actually reduces harsh shadows and enhances color saturation.',
    tips: 'Budget 1-2 hours. The blue buildings against yellow pots and green cacti create striking color contrasts. Macro lens for botanical details. The YSL Museum next door is also photogenic. Entry: 70 MAD.',
    image: '/images/hero-majorelle-garden.webp',
    timeOfDay: 'Early Morning',
  },
  {
    rank: 14,
    name: 'Legzira Beach Arches',
    description: 'Dramatic natural stone arches carved into red cliffs by the Atlantic. The scale and color of the remaining arch against the ocean and sky create one of Morocco\'s most stunning natural compositions.',
    bestTime: 'Sunset when the red rock glows against the darkening ocean. Low tide is essential to access and photograph the arch. Check tide times before visiting.',
    tips: 'Low tide timing is critical. The arch is best framed with a wide-angle. Use people for scale. The cliff-top viewpoint offers an alternative perspective. The red rock photographs best in warm light.',
    image: '/images/hero-coastal.webp',
    timeOfDay: 'Sunset',
  },
  {
    rank: 15,
    name: 'Moulay Idriss Zerhoun',
    description: 'Morocco\'s holiest town, draped across two hills with a sacred mosque at its heart. The white town against green hills is beautiful, and the nearby Roman ruins of Volubilis add archaeological interest.',
    bestTime: 'Late afternoon light on the town from the viewpoint opposite. Morning light at Volubilis when the mosaics are illuminated and the site is quiet.',
    tips: 'Non-Muslims cannot enter the mosque area but can photograph the town from surrounding viewpoints. Volubilis (10 minutes away) is best in early morning light. A telephoto compresses the town beautifully.',
    image: '/images/hero-fes.webp',
    timeOfDay: 'Late Afternoon',
  },
  {
    rank: 16,
    name: 'Taghazout Surf Culture',
    description: 'A photogenic surf village where colorful fishing boats, surfers, and Moroccan village life intersect. The golden light on the coast is extraordinary.',
    bestTime: 'Golden hour for the coastline. Early morning for surfers at Anchor Point. The village market on the main street has character at midday.',
    tips: 'A telephoto from the cliff captures surfers on the wave. The painted fishing boats at Taghazout port make vibrant foregrounds. The village rooftops offer panoramic sunset views.',
    image: '/images/hero-surfing.webp',
    timeOfDay: 'Golden Hour',
  },
  {
    rank: 17,
    name: 'Imlil & Atlas Villages',
    description: 'Berber villages of stone and earth nestled in the High Atlas, surrounded by terraced fields and walnut groves with Toubkal as a backdrop.',
    bestTime: 'Morning light for the mountain backdrop. Spring (April-May) when almond and cherry trees bloom. Autumn colors in October-November.',
    tips: 'Respect village privacy; ask before photographing homes or people. The walk from Imlil to Aremd offers continuous photo opportunities. Hire a local guide for access to the best viewpoints.',
    image: '/images/hero-atlas.webp',
    timeOfDay: 'Morning',
  },
  {
    rank: 18,
    name: 'Rabat Kasbah of the Udayas',
    description: 'A beautifully preserved kasbah with blue-and-white streets reminiscent of Chefchaouen, overlooking the Atlantic and the mouth of the Bou Regreg river. Fewer tourists make it a more relaxed photography experience.',
    bestTime: 'Late afternoon when golden light fills the narrow streets. Sunset from the platform overlooking the ocean and river mouth.',
    tips: 'Far less crowded than Chefchaouen. The Andalusian Gardens inside are a green oasis. The contrast of blue streets with the ocean view is unique. Combine with the nearby Hassan Tower for another iconic shot.',
    image: '/images/hero-morocco.webp',
    timeOfDay: 'Late Afternoon',
  },
  {
    rank: 19,
    name: 'Dades Valley & Gorge',
    description: 'A river valley flanked by dramatic rock formations, winding roads, and kasbahs. The "Monkey Fingers" rock formations are unique, and the hairpin bends of the Dades road are a photographer\'s dream.',
    bestTime: 'Morning or late afternoon for the rock formations. The famous hairpin bends are best shot from the viewpoint above in warm directional light.',
    tips: 'The road above the gorge has multiple viewpoints. The "Monkey Fingers" formations are best in side light. Stay at a guesthouse in the gorge for dawn access. The Dades River reflects the red rock walls.',
    image: '/images/hero-dades-gorge.webp',
    timeOfDay: 'Morning',
  },
  {
    rank: 20,
    name: 'Tangier Medina & Cafe Hafa',
    description: 'The crossroads of Africa and Europe. The Tangier medina has a bohemian, international character unlike any other Moroccan city. Cafe Hafa, perched on a cliff overlooking the Strait of Gibraltar, has hosted writers and artists for a century.',
    bestTime: 'Afternoon at Cafe Hafa when the light on the strait is magical. Morning in the medina for quiet streets and artisan workshops. Sunset from the terrace of Cafe Hafa.',
    tips: 'Cafe Hafa\'s terraced seating with views to Spain is iconic. The Grand Socco is a vibrant street scene. The medina combines Moroccan, Spanish, and international architectural styles. Use the ferry port as a foreground for the old city.',
    image: '/images/hero-tangier-kasbah.webp',
    timeOfDay: 'Afternoon',
  },
];

/* =====================================================================
   PHOTOGRAPHY SPOTS BY CITY (Top 5 per major city)
   ===================================================================== */

const cityPhotoSpots = [
  {
    city: 'Marrakech',
    spots: [
      { name: 'Jemaa el-Fna at Sunset', detail: 'Rooftop cafes overlooking the square as food stalls light up. Cafe de France and Nomad rooftop are the best vantage points.' },
      { name: 'Ben Youssef Madrasa', detail: 'The most decorated interior in Morocco. Arrive at 9am opening for empty courtyard reflections.' },
      { name: 'Souks Light Shafts', detail: 'Mid-morning when sunbeams pierce the latticed souk roofs, illuminating spice pyramids and artisans at work.' },
      { name: 'Jardin Majorelle', detail: 'Cobalt blue buildings against cacti and bougainvillea. Best at 8am opening or on overcast days for saturated color.' },
      { name: 'Bahia Palace Courtyards', detail: 'Intricate zellige tilework and painted cedar ceilings. Open-air courtyards provide soft, even light for detail shots.' },
    ],
  },
  {
    city: 'Fes',
    spots: [
      { name: 'Chouara Tanneries', detail: 'Hundreds of dye vats viewed from surrounding terraces. Late morning sun illuminates all the colors simultaneously.' },
      { name: 'Bou Inania Madrasa', detail: 'Exceptional carved stucco and zellige. The courtyard is less crowded than Marrakech equivalents and equally stunning.' },
      { name: 'Bab Boujloud (Blue Gate)', detail: 'The ornate entrance to the Fes medina. Best shot at dusk when the blue tiles glow against a darkening sky.' },
      { name: 'Place Seffarine', detail: 'The coppersmiths square with artisans hammering brass vessels. The sound and activity make for vivid documentary images.' },
      { name: 'Fes el-Bali Rooftop Panoramas', detail: 'From any riad rooftop or the Borj Nord viewpoint, the entire medina spreads out with hundreds of minarets punctuating the skyline.' },
    ],
  },
  {
    city: 'Chefchaouen',
    spots: [
      { name: 'Rue Targui & Surrounding Alleys', detail: 'The most intensely blue streets in town. Arrive before 8am to photograph without crowds.' },
      { name: 'Spanish Mosque Viewpoint', detail: 'A 20-minute uphill walk rewards you with a panoramic view of the entire blue medina against the Rif Mountains.' },
      { name: 'Ras el-Maa Waterfall', detail: 'Where the medina meets the countryside. Local women wash clothes in the stream -- ask before photographing.' },
      { name: 'Place Outa el-Hammam', detail: 'The main square with the kasbah and Grand Mosque. Best in late afternoon when the cafe terraces fill with locals.' },
      { name: 'Upper Residential Streets', detail: 'Above the tourist core, these streets are equally blue but virtually empty. The light is best in early morning.' },
    ],
  },
  {
    city: 'Essaouira',
    spots: [
      { name: 'Skala de la Ville', detail: 'Fortress ramparts with 18th-century cannons pointing toward the Atlantic. Iconic at sunset with dramatic cloud formations.' },
      { name: 'Fishing Port', detail: 'Blue wooden boats, fishermen mending nets, and seagulls circling above. The morning fish auction is extraordinary documentary photography.' },
      { name: 'Medina Doorways', detail: 'Essaouira has some of Morocco best painted doors in blue and white. The soft Atlantic light is perfect for architectural detail.' },
      { name: 'Beach at Sunset', detail: 'The wide beach with Mogador Island in the distance. Camel riders and kite surfers provide dynamic subjects against the setting sun.' },
      { name: 'Thuya Woodworking Quarter', detail: 'Artisans carving aromatic thuya wood into intricate marquetry. The workshop interiors have beautiful ambient light.' },
    ],
  },
  {
    city: 'Sahara (Merzouga)',
    spots: [
      { name: 'Erg Chebbi Dune Ridge at Sunrise', detail: 'Climb the tallest dune at 5am. The shifting shadows and golden light on 150-meter dunes create abstract compositions.' },
      { name: 'Camel Caravan Silhouettes', detail: 'Use a telephoto (200mm+) to compress the line of camels against the dune ridgeline at sunset.' },
      { name: 'Milky Way Over Desert Camp', detail: 'Moonless nights offer exceptional dark skies. A wide-angle at f/2.8 or wider, 20-25 second exposure, ISO 3200-6400.' },
      { name: 'Nomad Camp Life', detail: 'Berber tent interiors with tea ceremony preparation. The firelight inside the tent creates warm, intimate portraits.' },
      { name: 'Dune Textures & Patterns', detail: 'Wind-sculpted ripple patterns on the sand surface. Best captured with side light in the first and last hour of daylight.' },
    ],
  },
  {
    city: 'Casablanca',
    spots: [
      { name: 'Hassan II Mosque Esplanade', detail: 'The mosque against the Atlantic at sunset is monumental. Blue hour with artificial illumination is equally powerful.' },
      { name: 'Hassan II Mosque Interior', detail: 'The retractable roof, cedar ceiling, and zellige floors are extraordinary. Only accessible via guided tour (120 MAD).' },
      { name: 'Art Deco Downtown', detail: 'The area around Boulevard Mohammed V has the finest Art Deco architecture in Africa. Morning light on the white facades is beautiful.' },
      { name: 'Habous Quarter', detail: 'A 1930s "new medina" with arched colonnades and traditional shops. Less hectic than old medinas and photogenically uniform.' },
      { name: 'Rick Cafe & Corniche', detail: 'The film-inspired cafe is atmospheric inside. The Ain Diab corniche offers coastal urban scenes with Atlantic waves.' },
    ],
  },
];

/* =====================================================================
   GOLDEN HOUR TIMING BY SEASON
   ===================================================================== */

const goldenHourData = [
  {
    season: 'Winter (Dec-Feb)',
    sunrise: '7:15-7:30 AM',
    goldenMorning: '7:15-8:30 AM',
    goldenEvening: '4:45-5:45 PM',
    sunset: '5:45-6:15 PM',
    notes: 'Short days but the lowest sun angle produces the warmest, most dramatic light. The Sahara is pleasantly warm for photography. Marrakech and Fes have crisp, clear mornings ideal for architecture. Snow on the Atlas Mountains adds a dramatic backdrop. Winter rains can produce extraordinary cloud formations.',
    bestFor: 'Desert photography, mountain snow scenes, moody medina atmospheres',
  },
  {
    season: 'Spring (Mar-May)',
    sunrise: '6:15-7:00 AM',
    goldenMorning: '6:15-7:45 AM',
    goldenEvening: '6:15-7:30 PM',
    sunset: '7:00-7:45 PM',
    notes: 'The best overall season for photography in Morocco. Wildflowers carpet the Atlas foothills, almond trees bloom in February-March, and the desert is not yet unbearably hot. Longer golden hours than winter. April and May have reliable sunshine with occasional dramatic clouds.',
    bestFor: 'Wildflowers, blooming landscapes, comfortable outdoor shooting, balanced light',
  },
  {
    season: 'Summer (Jun-Aug)',
    sunrise: '6:15-6:30 AM',
    goldenMorning: '6:15-7:30 AM',
    goldenEvening: '7:30-8:45 PM',
    sunset: '8:15-8:45 PM',
    notes: 'Long days with harsh midday light. Interior cities (Marrakech, Fes) reach 40-45C, making midday photography uncomfortable. The coast (Essaouira, Tangier) and mountains remain pleasant. Late evening golden hour extends past 8pm. The Sahara is dangerously hot -- avoid desert trips.',
    bestFor: 'Coastal photography, mountain villages, late evening light, long blue hours',
  },
  {
    season: 'Autumn (Sep-Nov)',
    sunrise: '6:30-7:15 AM',
    goldenMorning: '6:30-8:00 AM',
    goldenEvening: '5:30-6:45 PM',
    sunset: '6:00-7:15 PM',
    notes: 'Excellent photography conditions returning as temperatures moderate. The date palm harvest in the Draa Valley (October) is photogenic. Autumn colors in the Atlas appear in late October. The Sahara becomes accessible again by late September. Fewer tourists mean emptier compositions.',
    bestFor: 'Sahara return season, harvest scenes, autumn foliage, uncrowded sites',
  },
];

/* =====================================================================
   GEAR RECOMMENDATIONS
   ===================================================================== */

const gearRecommendations = [
  {
    category: 'Camera Body',
    items: [
      'Full-frame mirrorless (Sony A7IV, Canon R6 II, Nikon Z6III) for best low-light performance in dark medinas and night desert shots',
      'APS-C or Micro Four Thirds as lighter alternatives (Fuji X-T5, OM System OM-5) -- excellent for travel-focused trips',
      'High-quality smartphone (iPhone 16 Pro, Samsung S25 Ultra) surprisingly capable for 90% of travel shots and ideal for quick street scenes',
    ],
  },
  {
    category: 'Lenses',
    items: [
      '24-70mm f/2.8 or equivalent: the single most versatile lens for Morocco, covering architecture, street, and environmental portraits',
      '16-35mm or 14-24mm wide-angle: essential for medina streets, mosque interiors, architecture, and desert landscapes',
      '70-200mm telephoto: kasbahs, wildlife, compressing desert caravans, medina details from distance, and respectful candid portraits',
      '35mm or 50mm prime (f/1.4-1.8): best for low-light souks, evening scenes, and creating beautiful background separation in portraits',
    ],
  },
  {
    category: 'Accessories',
    items: [
      'Lightweight travel tripod (carbon fiber recommended) for night, desert, waterfall, and long-exposure shots',
      'Circular polarizing filter to deepen blue skies, reduce glare on tile and water, and enhance Chefchaouen blue walls',
      'ND filter (6-10 stop) for long exposures at waterfalls, ocean, and creating motion blur in busy souks',
      'Rocket blower and microfiber lens cloth (essential for desert sand -- clean lenses after every desert session)',
      'Waterproof dry bag to protect gear in desert sand and Atlantic sea spray',
      'Multiple high-speed memory cards (128GB minimum) and portable SSD backup drive',
      'Power bank (20,000mAh+) and European Type C/E plug adapter (Morocco standard)',
      'Sensor cleaning kit -- desert sand will inevitably reach your sensor during lens changes',
    ],
  },
];

/* =====================================================================
   PHOTOGRAPHY ETIQUETTE
   ===================================================================== */

const photographyEtiquette = [
  {
    title: 'Always Ask Permission',
    description: 'This is the most important rule. Moroccan people have a strong sense of personal dignity. Always ask "Photo?" or "Mumkin tsawwer?" (Can I take a photo?) before pointing your camera at anyone. A smile and gesture go a long way even without shared language.',
    icon: Users,
  },
  {
    title: 'Expect Requests for Payment',
    description: 'In tourist areas, many people will ask for money if you photograph them. This is especially true for snake charmers, water sellers, henna artists, and people in traditional dress in Jemaa el-Fna. Budget 10-20 MAD per photo. Negotiate before shooting.',
    icon: DollarSign,
  },
  {
    title: 'Women and Children',
    description: 'Be especially respectful when it comes to women and children. Many Moroccan women do not wish to be photographed, particularly in rural and traditional areas. Never photograph women without explicit consent. If a parent says no, respect it immediately.',
    icon: Shield,
  },
  {
    title: 'Religious Sites',
    description: 'Photography is generally not allowed inside mosques (non-Muslims cannot enter most mosques anyway). At shrines and zaouias, ask before shooting. During Ramadan, be extra discreet about photographing people who are fasting.',
    icon: Heart,
  },
  {
    title: 'Give Something Back',
    description: 'If someone lets you take their portrait, show them the image on your screen. If you promise to send a photo, follow through. Buy something from a shopkeeper you have photographed. The best portraits come from genuine human connection, not drive-by shooting.',
    icon: Image,
  },
  {
    title: 'The "No Photo" Signal',
    description: 'If someone holds up their hand, turns away, or covers their face, stop immediately and lower your camera. Do not sneak a shot. Respecting refusal is non-negotiable. In rural Berber communities, some elders believe photographs capture the soul.',
    icon: Eye,
  },
];

/* =====================================================================
   DRONE RULES
   ===================================================================== */

const droneRules = [
  'Drones require a permit from the Moroccan Civil Aviation Authority (Direction Generale de l\'Aviation Civile, DGAC). Apply well in advance of your trip -- processing can take weeks or months.',
  'Flying without a permit can result in drone confiscation, fines of 2,000-20,000 MAD, and potential detention. Customs officers at airports actively look for drones in luggage.',
  'Several tourists have had drones confiscated at entry ports including Marrakech, Casablanca, and Tangier airports, as well as the Tangier-Med ferry port.',
  'Drones are strictly prohibited near military installations, royal palaces, government buildings, airports, and all sensitive infrastructure. Morocco takes airspace violations very seriously.',
  'Many tourist sites, including medinas, mosques, kasbahs, and national parks, prohibit drone use regardless of whether you have a permit.',
  'For serious aerial photography, consider hiring a licensed Moroccan drone operator who already has the required permits. Expect to pay 2,000-5,000 MAD per day.',
  'Some organized photography tours include licensed drone operators as part of the package, which is the most hassle-free way to get aerial shots.',
  'If you do obtain a permit, you must carry it at all times and present it to any authority on request. Flight altitude is typically limited to 150 meters.',
];

/* =====================================================================
   INSTAGRAM VS REALITY
   ===================================================================== */

const instagramVsReality = [
  {
    spot: 'Chefchaouen',
    instagram: 'Empty blue streets, perfect light, no one in sight',
    reality: 'By 10am, the main streets are packed with day-trippers from Fes. The famous blue stairs have a queue. Locals live here and are tired of cameras in their faces.',
    tip: 'Visit at 7am or during Ramadan for empty streets. Explore the upper residential areas, which are equally blue but virtually tourist-free.',
  },
  {
    spot: 'Jemaa el-Fna',
    instagram: 'Exotic, atmospheric, mysterious',
    reality: 'Intense, overwhelming, and commercialized in the tourist areas. Snake charmers and "henna ladies" are aggressive. The noise and energy are real but exhausting.',
    tip: 'The magic is real but requires patience. Rooftop cafes provide distance. Visit multiple times at different hours. The food stalls at night are genuinely extraordinary.',
  },
  {
    spot: 'Sahara Dunes',
    instagram: 'Solo figure on pristine, untouched dunes',
    reality: 'Popular dunes near camps have footprints everywhere. Other tour groups are visible. The camel ride can be uncomfortable.',
    tip: 'Wake at 5am and climb a dune before others. Request a private camp further from the main access points. M\'Hamid (Erg Chigaga) is far less visited than Merzouga.',
  },
  {
    spot: 'Marrakech Riads',
    instagram: 'Pristine courtyard, rose petals floating in the fountain',
    reality: 'Many riads are smaller than photos suggest. Budget riads can be noisy from the medina. Not all rooms have the "Instagram view."',
    tip: 'Book the specific room you see in photos. Ask about courtyard size and noise level. The best riad photos are taken at non-standard angles with careful composition.',
  },
  {
    spot: 'Fes Tanneries',
    instagram: 'Vibrant rainbow of colors in neat rows of stone vats',
    reality: 'The smell is overwhelming (carry mint). You will be pressured to buy leather from the terraces. Colors vary by the day depending on which dyes are in use.',
    tip: 'Visit on a weekday when all the vats are actively being used. The leather shops are not obligatory. A telephoto from across the medina rooftops offers an alternative view.',
  },
];

/* =====================================================================
   PHOTOGRAPHY ITINERARIES
   ===================================================================== */

const itineraries = [
  {
    duration: '3-Day Highlights',
    days: [
      'Day 1: Marrakech -- Jemaa el-Fna sunset, souk details, Ben Youssef Madrasa at opening, Jardin Majorelle',
      'Day 2: Day trip to Atlas Mountains (Imlil village) or Ait Benhaddou (for golden hour)',
      'Day 3: Marrakech -- dawn rooftop panoramas, morning souk light, Saadian Tombs, Bahia Palace details',
    ],
  },
  {
    duration: '7-Day Circuit',
    days: [
      'Day 1-2: Marrakech -- medina, souks, palaces, gardens',
      'Day 3: Drive to Ait Benhaddou (sunset), overnight Dades Valley',
      'Day 4: Dades Gorge morning, drive to Merzouga',
      'Day 5: Sahara sunrise/sunset, camel trek, stargazing',
      'Day 6: Drive to Fes via Ziz Valley, arrival evening',
      'Day 7: Fes -- tanneries, medina, Bou Inania Madrasa',
    ],
  },
  {
    duration: '14-Day Ultimate',
    days: [
      'Day 1-3: Marrakech -- medina, souks, palaces, Majorelle, Atlas day trip',
      'Day 4: Ait Benhaddou & Ouarzazate',
      'Day 5: Dades Valley & Todra Gorge',
      'Day 6-7: Merzouga & Sahara Desert',
      'Day 8: Ziz Valley to Fes',
      'Day 9-10: Fes medina, tanneries, Moulay Idriss & Volubilis',
      'Day 11: Chefchaouen (arrive afternoon, explore blue streets)',
      'Day 12: Chefchaouen (dawn shoot, morning light)',
      'Day 13: Drive to Essaouira via Rabat (Udayas stop)',
      'Day 14: Essaouira -- port, ramparts, medina, sunset',
    ],
  },
];

/* =====================================================================
   PHOTOGRAPHY GENRES: LANDSCAPE, STREET, ARCHITECTURE
   ===================================================================== */

const photographyGenres = [
  {
    genre: 'Landscape Photography',
    icon: Mountain,
    tips: [
      'Morocco offers extraordinary landscape diversity: Sahara dunes, Atlas Mountains, Atlantic coastline, palm oasis valleys, and cedar forests. Each requires different planning.',
      'A tripod is essential for landscape work, especially in the desert where you want maximum depth of field (f/8-f/11) and low ISO for clean files.',
      'Use a graduated ND filter for high-contrast scenes where bright sky meets dark foreground, common in desert and mountain compositions.',
      'Include a foreground element for depth: a rock, a cactus, a sand ripple, or a wildflower. Empty foregrounds make images feel flat.',
      'For dune photography, arrive early and position yourself on a ridge. Shoot along the ridge line to emphasize the S-curves that make Sahara images compelling.',
      'The Atlas Mountains are best from October to May when snow caps the peaks. The Tizi n\'Tichka pass at 2,260 meters offers extraordinary panoramic opportunities.',
      'Coastal landscapes at Essaouira, Legzira, and Taghazout benefit from long exposures (1-30 seconds) that smooth the Atlantic waves into silk.',
    ],
  },
  {
    genre: 'Street Photography',
    icon: Users,
    tips: [
      'Morocco is one of the most rewarding and most challenging countries in the world for street photography. The visual richness is immense, but cultural sensitivity is paramount.',
      'A 35mm or 50mm prime lens is ideal for street work: it forces you to engage with the scene rather than shooting from a distance with a telephoto.',
      'The best street photographs in Morocco come from genuine interaction. Stop, talk, buy something, drink tea together. Then ask if you can make a portrait.',
      'The souks are natural light studios. Shafts of light through latticed roofs create dramatic chiaroscuro effects. Wait for a subject to walk into the light beam.',
      'Avoid the "human zoo" approach of photographing people like specimens. If you would not photograph someone behaving the same way in your home city, question your motivation.',
      'Friday midday is prayer time -- many shops close and the medina empties. This can be ideal for architectural street photography without crowds.',
      'Markets at dawn (5-7am) when vendors set up are wonderful for candid documentary work. The energy is purposeful rather than performative.',
      'The dyers\' souk in Marrakech, where colorful yarn hangs overhead, and the spice market, with pyramids of cumin and paprika, are two of the most photogenic street scenes in any Moroccan city.',
    ],
  },
  {
    genre: 'Architectural Photography',
    icon: Building,
    tips: [
      'Morocco has some of the finest Islamic architecture in the world. Madrasas, mosques, palaces, and riads feature zellige, carved stucco, painted cedar, and tadelakt in combinations of staggering beauty.',
      'A wide-angle lens (16-24mm) is essential for capturing the full scope of courtyards, interiors, and narrow medina alleyways where you cannot step back far enough.',
      'Straight verticals are critical in architectural work. Use your camera level or correct keystoning in post-processing. Tilted buildings look amateurish.',
      'The best light for exterior architecture is early morning or late afternoon when side light reveals texture and depth. Midday sun flattens surfaces.',
      'For interior architecture (madrasas, mosques, riads), overcast days are ideal as they provide soft, even light through courtyards without harsh shadows and blown highlights.',
      'Look up constantly. Some of the finest craftsmanship in Moroccan architecture is on the ceilings: painted cedar, muqarnas (honeycomb vaulting), and carved plaster.',
      'Reflecting pools in madrasas and riads double the architecture. Wait for a moment of perfect stillness in the water, use a low angle, and compose symmetrically.',
      'Doorways and gates are Morocco architectural signature. The contrast of ornate carved doorframes against simple walls creates powerful compositions. Collect doorway portraits in every city.',
    ],
  },
];

/* =====================================================================
   PHOTO TOUR OPERATORS
   ===================================================================== */

const photoTourOperators = [
  {
    name: 'Luminous Journeys Morocco',
    focus: 'Small-group photography tours (6-8 people) covering Marrakech, Sahara, Fes, and Chefchaouen. Led by professional photographers with deep local knowledge.',
    duration: '7-12 days',
    priceRange: '2,500-4,500 EUR',
    highlights: 'Exclusive access to private riads for interior shoots, pre-arranged portrait sessions with local artisans, and licensed drone operator included.',
  },
  {
    name: 'Morocco Photo Expedition',
    focus: 'Intensive photography workshops combined with cultural immersion. Focus on street photography, portraits, and editorial-style travel photography.',
    duration: '8-10 days',
    priceRange: '2,800-3,800 EUR',
    highlights: 'Post-processing workshops each evening, portfolio review sessions, and connections with local fixers for continued independent exploration.',
  },
  {
    name: 'Atlas & Sahara Photo Treks',
    focus: 'Landscape-focused expeditions into the High Atlas and deep Sahara. Trekking and 4x4 access to remote locations unreachable by standard tours.',
    duration: '5-14 days',
    priceRange: '1,800-5,000 EUR',
    highlights: 'Remote desert camps with zero light pollution for astrophotography. Berber village homestays. Mountain passes and valley panoramas.',
  },
  {
    name: 'Medina Stories Workshop',
    focus: 'Intensive 3-5 day workshops based in a single city (Marrakech or Fes). Deep-dive into street photography, artisan documentation, and food photography.',
    duration: '3-5 days',
    priceRange: '800-1,500 EUR',
    highlights: 'Small groups of 4-6. Local photographer co-leader. Access to private workshops and homes. Evening editing and critique sessions.',
  },
];

/* =====================================================================
   POST-PROCESSING TIPS
   ===================================================================== */

const postProcessingTips = [
  {
    title: 'White Balance for Moroccan Light',
    description: 'Morocco\'s light has a naturally warm, golden quality thanks to its proximity to the Sahara and intense sunshine. Shoot in RAW and set white balance in post. For the classic "Morocco look," add 200-500K of warmth beyond the camera\'s daylight setting. In blue medinas like Chefchaouen, use a cooler white balance (5000-5500K) to preserve the blue tones.',
  },
  {
    title: 'Managing Extreme Contrast',
    description: 'Moroccan scenes often have extreme dynamic range: bright sunshine and deep shadows in narrow medina alleys. Shoot slightly underexposed to preserve highlights and recover shadows in post. Use graduated masks in Lightroom to balance bright skies against darker foregrounds. HDR bracketing helps for high-contrast architectural interiors.',
  },
  {
    title: 'Enhancing Color Without Oversaturating',
    description: 'Morocco\'s natural colors are already vivid: blue walls, red earth, yellow saffron, green tiles. Resist the urge to push saturation. Instead, use Vibrance (which protects skin tones) over Saturation. Selectively boost the Luminance of specific colors to make them glow. The HSL panel in Lightroom is your best tool for Moroccan images.',
  },
  {
    title: 'Desert Sand Processing',
    description: 'Desert images need careful color grading. Sand is not simply yellow -- it shifts through peach, gold, amber, rose, and violet depending on the time of day. Use split toning: warm tones in the highlights (orange/gold) and cool tones in the shadows (blue/purple) to capture the magical color transitions of Sahara light.',
  },
  {
    title: 'Blue City Editing',
    description: 'For Chefchaouen and other blue medina scenes, the goal is to make blues pop without looking artificial. Increase the Luminance of blues and aquas in the HSL panel rather than pushing overall saturation. A slight dehaze adds depth. Reduce magenta tones if the blue looks purple. The ideal result should feel cool and serene.',
  },
  {
    title: 'Dealing with Haze and Dust',
    description: 'Morocco\'s proximity to the Sahara means haze and dust are common, especially in summer and during chergui (east wind) conditions. The Dehaze slider in Lightroom is invaluable but use it subtly (10-25%) -- over-dehazing creates ugly halos and unnatural contrast. For severe haze, combine Dehaze with a slight increase in Clarity and Contrast.',
  },
  {
    title: 'Night and Low-Light Processing',
    description: 'Souk interiors, evening medina scenes, and desert night shots will have noise. Modern AI denoise tools (Lightroom Denoise, DxO PureRAW, Topaz DeNoise) are game-changing for Morocco\'s low-light situations. Apply denoise before other edits. For Milky Way shots, stack multiple exposures using Sequator or Starry Landscape Stacker for cleaner results.',
  },
  {
    title: 'Creating a Consistent Morocco Style',
    description: 'Develop a Lightroom preset for your Morocco trip: warm shadows, slightly lifted blacks (the "film" look suits Morocco well), rich but not oversaturated colors, and a touch of grain for texture. Apply this as a starting point and fine-tune per image. Consistency across your gallery makes your Morocco portfolio cohesive and professional.',
  },
];

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/photography#guide',
      headline: 'Morocco Photography Guide - Top 20 Photo Spots & Expert Tips',
      description: 'Complete guide to photographing Morocco with top locations, golden hour timing, gear tips, drone rules, photography genres, and post-processing advice.',
      url: 'https://citytoursmorocco.com/photography',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
      image: '/images/hero-chefchaouen.webp',
    },
    {
      '@type': 'ItemList',
      name: 'Top 20 Photo Spots in Morocco',
      description: 'Ranked list of the most photogenic locations in Morocco.',
      numberOfItems: 20,
      itemListElement: photoSpots.map((spot) => ({
        '@type': 'ListItem',
        position: spot.rank,
        name: spot.name,
      })),
    },
  ],
};

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function PhotographyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-chefchaouen.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Photography</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Photography Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            One of the most photogenic countries on Earth. Blue cities, golden dunes, labyrinthine medinas, and light that makes every frame look like a painting.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Photographer&apos;s Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is, quite simply, one of the most photogenic countries on the planet. The combination of extraordinary light (over 300 days of sunshine), dramatic landscapes (from Sahara dunes to snow-capped mountains), rich cultural traditions (medinas, souks, festivals), and stunning architecture (zellige, tadelakt, carved cedar) creates an overwhelming abundance of photographic opportunities.
              </p>
              <p>
                Whether you shoot with a professional camera or a smartphone, Morocco will reward you with images that feel like they belong in a magazine. The challenge is not finding good subjects &mdash; it is editing down the thousands of shots you will inevitably take. The light here has a quality that photographers describe as &ldquo;painterly&rdquo;: warm, golden, and with a clarity that comes from the proximity to the Sahara and the Atlantic.
              </p>
              <p>
                This guide will help you plan your photography trip, from choosing locations and timing your shoots to navigating the important cultural considerations of photographing in a Muslim country. Used respectfully, your camera is your passport to deeper connections with Morocco and its people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 20 Photo Spots */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top 20 Photo Spots, Ranked
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our ranked list of the most photogenic locations in Morocco, with the best time of day for each and practical shooting tips.
          </p>

          {/* Top 5 - Large Cards */}
          <div className="space-y-8 mb-12">
            {photoSpots.slice(0, 5).map((spot) => (
              <div key={spot.rank} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-lg">
                      {spot.rank}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                      {spot.name}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent-dark)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full mb-4">
                      {spot.timeOfDay.includes('Sunrise') ? <Sunrise className="w-3.5 h-3.5" /> : spot.timeOfDay.includes('Sunset') ? <Sunset className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                      {spot.timeOfDay}
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{spot.description}</p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" /> Best Time
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spot.bestTime}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-1 flex items-center gap-1">
                          <Aperture className="w-3.5 h-3.5 text-[var(--color-primary)]" /> Tips
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spot.tips}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spots 6-20 - Smaller Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoSpots.slice(5).map((spot) => (
              <div key={spot.rank} className="card-moroccan overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={spot.image} alt={spot.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
                    {spot.rank}
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 font-medium text-[var(--text-primary)] flex items-center gap-1">
                      {spot.timeOfDay.includes('Sunrise') ? <Sunrise className="w-3 h-3" /> : spot.timeOfDay.includes('Sunset') ? <Sunset className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                      {spot.timeOfDay}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{spot.name}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed line-clamp-2">{spot.description}</p>
                  <details className="group">
                    <summary className="text-sm font-semibold text-[var(--color-primary)] cursor-pointer hover:underline">
                      Shooting details
                    </summary>
                    <div className="mt-2 space-y-2 text-xs text-[var(--text-secondary)]">
                      <p><strong>Best time:</strong> {spot.bestTime}</p>
                      <p><strong>Tips:</strong> {spot.tips}</p>
                    </div>
                  </details>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Spots by City */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Photo Spots by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The top five photography locations in each major Moroccan city, with specific tips on timing and technique for each spot.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityPhotoSpots.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-primary)]" />
                  {city.city}
                </h3>
                <ol className="space-y-3">
                  {city.spots.map((spot, index) => (
                    <li key={spot.name} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{spot.name}</p>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-0.5">{spot.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Hour Timing by Season */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline text-[var(--color-accent)] mr-2" />
            Golden Hour Timing by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s latitude (roughly 30-35N) gives it distinct seasonal light patterns. Plan your shoots around these approximate golden hour windows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {goldenHourData.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Thermometer className="w-5 h-5 text-[var(--color-accent)]" />
                  {season.season}
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[var(--color-accent)]/5 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[var(--color-accent-dark)] uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Sunrise className="w-3 h-3" /> Sunrise
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{season.sunrise}</p>
                  </div>
                  <div className="bg-[var(--color-accent)]/5 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[var(--color-accent-dark)] uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Sun className="w-3 h-3" /> Morning Golden
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{season.goldenMorning}</p>
                  </div>
                  <div className="bg-[var(--color-primary)]/5 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Sun className="w-3 h-3" /> Evening Golden
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{season.goldenEvening}</p>
                  </div>
                  <div className="bg-[var(--color-primary)]/5 rounded-lg p-3">
                    <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1 flex items-center gap-1">
                      <Sunset className="w-3 h-3" /> Sunset
                    </p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{season.sunset}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{season.notes}</p>
                <p className="text-xs text-[var(--color-primary)] font-semibold">
                  <Camera className="w-3 h-3 inline mr-1" />
                  Best for: {season.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Genres */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Aperture className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Photography Genres: Tips by Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Whether your passion is landscapes, street scenes, or architectural detail, Morocco delivers. Here are genre-specific strategies for getting the best results.
          </p>
          <div className="space-y-8 max-w-4xl mx-auto">
            {photographyGenres.map((genre) => (
              <div key={genre.genre} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-5 flex items-center gap-3">
                  <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                    <genre.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  {genre.genre}
                </h3>
                <ul className="space-y-3">
                  {genre.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear Recommendations */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Camera Gear Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {gearRecommendations.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <Camera className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{cat.category}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Etiquette */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white text-center mb-4">
            Photographing People in Morocco
          </h2>
          <p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
            This is the most important section of this guide. How you use your camera with people will define your experience in Morocco.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyEtiquette.map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone Rules */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline text-[var(--color-accent)] mr-2" />
            Drone Rules in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has strict drone regulations. Flying without a permit is illegal and can result in confiscation, fines, and detention. This is not a rule that is loosely enforced.
          </p>
          <div className="space-y-4">
            {droneRules.map((rule, index) => (
              <div key={index} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)]/10 shrink-0">
                  <AlertTriangle className="w-4 h-4 text-[var(--color-accent-dark)]" />
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram vs Reality */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Instagram vs Reality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Honest expectations for Morocco&apos;s most photographed locations. The reality is always more interesting than the curated feed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {instagramVsReality.map((item) => (
              <div key={item.spot} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.spot}</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-pink-50 dark:bg-pink-900/20 p-3 rounded-lg">
                    <p className="font-semibold text-pink-800 dark:text-pink-200 text-xs uppercase tracking-wider mb-1">Instagram</p>
                    <p className="text-pink-700 dark:text-pink-300">{item.instagram}</p>
                  </div>
                  <div className="bg-[var(--color-secondary-50)] p-3 rounded-lg">
                    <p className="font-semibold text-[var(--color-secondary-700)] text-xs uppercase tracking-wider mb-1">Reality</p>
                    <p className="text-[var(--color-secondary-700)]">{item.reality}</p>
                  </div>
                  <div className="bg-[var(--color-green)]/5 p-3 rounded-lg">
                    <p className="font-semibold text-[var(--color-green)] text-xs uppercase tracking-wider mb-1">Pro Tip</p>
                    <p className="text-[var(--color-green-dark)]">{item.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Processing Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Post-Processing Tips for Morocco&apos;s Light
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s extraordinary light demands specific post-processing approaches. These tips will help you bring out the best in your RAW files while keeping the images natural and authentic.
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {postProcessingTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{tip.title}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Itineraries */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Sample Photography Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Optimized routes that put you in the right place at the right time for the best light and subjects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itineraries.map((itin) => (
              <div key={itin.duration} className="card-moroccan p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{itin.duration}</h3>
                <ul className="space-y-3">
                  {itin.days.map((day) => (
                    <li key={day} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Camera className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      {day}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Tour Operators */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Photography Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Guided photography tours take the logistics out of your hands and give you access to locations, people, and timing that would be difficult to arrange independently. Look for small groups, professional leaders, and a realistic pace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {photoTourOperators.map((operator) => (
              <div key={operator.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {operator.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">
                    <Clock className="w-3 h-3" /> {operator.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] font-medium">
                    <DollarSign className="w-3 h-3" /> {operator.priceRange}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{operator.focus}</p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--color-primary)]">Highlights:</span> {operator.highlights}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 card-moroccan max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">Choosing the Right Tour</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Key factors to evaluate: group size (8-12 maximum), the lead photographer&apos;s portfolio and style, pace (no more than one major location per half-day allows proper shooting time), free time built into the schedule, a mix of landscape and street/portrait opportunities, and whether post-processing instruction is included. Always ask about the physical demands -- some desert and mountain tours require moderate fitness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Capture Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Plan your photography trip with our tools, or explore our city guides for location-specific photography tips and golden hour timing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Camera className="w-4 h-4" /> Plan Your Trip
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Photo Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
