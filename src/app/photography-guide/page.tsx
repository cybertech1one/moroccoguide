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
  Users,
  Heart,
  Image,
  Aperture,
  Mountain,
  Building,
  Smartphone,
  Navigation,
  Zap,
  Focus,
  Info,
  Moon,
  Utensils,
  Compass,
  BookOpen,
  Target,
  Lightbulb,
  ThumbsUp,
  Ban,
  Layers,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Photography Techniques Guide | Mastering Light, Portraits & Landscapes | CityGuide',
  description:
    'Master Morocco photography with expert techniques for street portraits, golden hour landscapes, architectural details, Sahara night skies, food styling, and drone work. Gear recommendations, cultural etiquette, phone tips, and workshop listings.',
  keywords: [
    'Morocco photography techniques',
    'Morocco street photography tips',
    'Sahara desert photography',
    'Chefchaouen blue streets photography',
    'Morocco portrait photography',
    'Morocco landscape photography',
    'Atlas Mountains photography',
    'Morocco drone photography rules',
    'Morocco golden hour guide',
    'Morocco architecture photography',
    'Morocco food photography',
    'Morocco night photography',
    'Morocco camera gear recommendations',
    'Morocco phone photography tips',
    'Morocco Instagram spots',
    'Morocco photo workshops',
    'Marrakech medina photography',
    'Fes tanneries photography',
    'Essaouira port photography',
    'Morocco cultural photography etiquette',
    'zellige detail photography',
    'mosque photography Morocco',
    'kasbah photography',
    'mint tea food photography',
    'tagine photography styling',
    'Sahara stargazing photography',
  ],
  openGraph: {
    title: 'Morocco Photography Techniques Guide - Master Every Shot',
    description:
      'From golden hour landscapes to intimate street portraits, learn the techniques that separate snapshots from stunning Morocco photography. Gear, ethics, timing, and expert tips.',
    url: 'https://citytoursmorocco.com/photography-guide',
    images: [
      {
        url: '/images/art-sahara-golden-hour.webp',
        width: 1200,
        height: 630,
        alt: 'Golden hour photography in the Sahara desert Morocco with dramatic dune shadows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Photography Techniques Guide',
    description:
      'Master street portraits, golden hour landscapes, architectural details, and night photography across Morocco. Expert techniques, gear lists, and cultural etiquette.',
    images: ['/images/art-sahara-golden-hour.webp'],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/photography-guide' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/photography-guide#guide',
      headline: 'Morocco Photography Techniques Guide - Mastering Light, Portraits & Landscapes',
      description:
        'Comprehensive techniques guide covering street photography ethics, golden hour timing, landscape composition, architectural detail work, portrait techniques, night photography, food styling, drone rules, gear recommendations, and photo workshop listings across Morocco.',
      url: 'https://citytoursmorocco.com/photography-guide',
      publisher: {
        '@type': 'Organization',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Morocco Photography Techniques',
      description: 'Core photography disciplines covered in this guide.',
      numberOfItems: 8,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Golden Hour & Light Mastery' },
        { '@type': 'ListItem', position: 2, name: 'Street Photography & Ethics' },
        { '@type': 'ListItem', position: 3, name: 'Landscape Photography' },
        { '@type': 'ListItem', position: 4, name: 'Architecture & Detail Photography' },
        { '@type': 'ListItem', position: 5, name: 'Portrait Photography' },
        { '@type': 'ListItem', position: 6, name: 'Night & Astrophotography' },
        { '@type': 'ListItem', position: 7, name: 'Food Photography' },
        { '@type': 'ListItem', position: 8, name: 'Drone Photography & Regulations' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a permit to fly a drone in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Recreational and commercial drone flights in Morocco require prior authorization from the Direction Generale de l\'Aviation Civile (DGAC). Flying without a permit is illegal and can result in confiscation and fines. Many areas including medinas, military zones, and royal palaces are strictly no-fly zones.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is it OK to photograph people in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Always ask permission before photographing individuals. Many Moroccans are happy to be photographed, but some have religious or personal objections. A small tip of 5-20 MAD is customary when someone poses for you. Never photograph people who decline, and be especially careful around women and children.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time of year for photography in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'October through April offers the best light with lower sun angles producing longer golden hours. Spring (March-April) brings wildflowers to the Atlas Mountains. Winter offers clear Sahara skies for astrophotography. Summer light is harsh but produces dramatic shadows in narrow medina alleys.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   TOP PHOTO LOCATIONS BY CITY
   ═══════════════════════════════════════════════════════════════ */

interface PhotoLocation {
  city: string;
  spots: {
    name: string;
    bestTime: string;
    technique: string;
    tip: string;
  }[];
  image: string;
}

const photoLocations: PhotoLocation[] = [
  {
    city: 'Marrakech',
    spots: [
      {
        name: 'Jemaa el-Fnaa from Above',
        bestTime: 'Sunset (golden hour) from a rooftop cafe',
        technique: 'Wide-angle panorama with slow shutter to blur crowd movement',
        tip: 'Cafe de France and Nomad rooftop offer the best elevated angles. Arrive 45 minutes before sunset to secure a spot.',
      },
      {
        name: 'Ben Youssef Madrasa Interior',
        bestTime: 'Opening hour (09:00) for empty courtyards',
        technique: 'HDR bracketing to capture both shadow detail in the alcoves and bright courtyard light',
        tip: 'Bring a wide-angle lens (16-24mm). The symmetry of the courtyard rewards precise composition with the central basin as a reflection pool.',
      },
      {
        name: 'Koutoubia Mosque at Sunset',
        bestTime: 'Golden hour, western sky behind the minaret',
        technique: 'Silhouette shot with the minaret against a vivid sky; expose for the sky, let the tower go dark',
        tip: 'The gardens south of the mosque give the best angle. Palm trees provide natural foreground framing.',
      },
    ],
    image: '/images/art-jemaa-elfnaa.webp',
  },
  {
    city: 'Chefchaouen',
    spots: [
      {
        name: 'Blue Medina Stairways',
        bestTime: 'Early morning (07:00-08:30) before crowds, soft diffused light',
        technique: 'Leading lines using stairways; shoot from low angles to emphasize the blue walls rising above',
        tip: 'The blue washes are repainted regularly. The most vivid streets are near Place Outa el Hammam. Overcast days actually saturate the blue tones better than direct sun.',
      },
      {
        name: 'Spanish Mosque Hilltop',
        bestTime: 'Sunset for the town against the Rif Mountains backdrop',
        technique: 'Telephoto compression (70-200mm) to stack the blue buildings against the mountain peaks',
        tip: 'The 20-minute uphill walk is worth it. Bring a tripod for the fading light after sunset when the town lights begin to glow.',
      },
      {
        name: 'Ras el-Maa Waterfall',
        bestTime: 'Mid-morning when locals do laundry at the water source',
        technique: 'Environmental portrait combining people with the cascading water and surrounding greenery',
        tip: 'This is where daily life happens. Be respectful and ask permission. A 35mm or 50mm lens gives an intimate but not intrusive field of view.',
      },
    ],
    image: '/images/hero-chefchaouen-stairs.webp',
  },
  {
    city: 'Sahara (Erg Chebbi & Erg Chigaga)',
    spots: [
      {
        name: 'Dune Ridgelines at Sunrise',
        bestTime: 'First 30 minutes after sunrise when shadows define every ripple',
        technique: 'Side-lighting to reveal texture; expose for highlights and let shadow areas go rich and dark',
        tip: 'Climb the dune the evening before and mark your spot. In the morning, walk in your own footprints to avoid creating tracks in the pristine sand.',
      },
      {
        name: 'Camel Caravan Silhouettes',
        bestTime: 'Last 15 minutes before sunset, shooting toward the sun',
        technique: 'Extreme underexposure (-2 to -3 EV) to create pure black silhouettes against an orange sky',
        tip: 'Position yourself on a parallel dune ridgeline. Camel caravans are arranged for photography between 16:00-17:30. A 70-200mm lens isolates individual camels.',
      },
      {
        name: 'Night Sky Over Desert Camp',
        bestTime: 'After midnight when the Milky Way core is overhead (best March-October)',
        technique: 'Tripod, 14-24mm f/2.8, ISO 3200-6400, 20-second exposure (500 rule for star trails)',
        tip: 'New moon periods are essential. Camps near Merzouga have minimal light pollution. Include a tent or camel as foreground interest.',
      },
    ],
    image: '/images/art-sahara-golden-hour.webp',
  },
  {
    city: 'Essaouira',
    spots: [
      {
        name: 'Fishing Port Blue Boats',
        bestTime: 'Early morning (07:00-08:00) when fishermen unload and repair nets',
        technique: 'Color blocking using the vivid blue boats against weathered stone walls and orange nets',
        tip: 'The port is a working environment. Stay out of the way of moving fish crates. A 24-70mm zoom gives flexibility in tight spaces.',
      },
      {
        name: 'Ramparts & Atlantic Waves',
        bestTime: 'Late afternoon when the Alizee wind creates dramatic wave spray against the fortifications',
        technique: 'Slow shutter (1/4 to 1 second) with a neutral density filter to blur wave motion against the sharp stone walls',
        tip: 'The Skala de la Ville cannon batteries offer the most dramatic foreground. Protect your gear from sea spray with a rain sleeve.',
      },
      {
        name: 'Sqala du Port Sunset',
        bestTime: 'Golden hour with the setting sun illuminating the Portuguese-era fortification',
        technique: 'Long exposure from the seawall with the fortress and Mogador island in frame',
        tip: 'Wind is constant in Essaouira. A heavy tripod or sandbag is essential. The wind also creates photogenic hair and clothing motion for portraits.',
      },
    ],
    image: '/images/hero-essaouira-port.webp',
  },
  {
    city: 'Fes',
    spots: [
      {
        name: 'Chouara Tanneries',
        bestTime: 'Late morning (10:00-12:00) when the dye vats are most colorful and workers are active',
        technique: 'Overhead angle from the surrounding leather shops; use a telephoto to isolate individual workers in the colorful vats',
        tip: 'Shops offer free rooftop access (they expect you to browse). The smell is intense; a mint sprig is offered at the entrance. Morning light illuminates the eastern-facing vats best.',
      },
      {
        name: 'Bab Boujloud (Blue Gate)',
        bestTime: 'Blue hour (just after sunset) when the blue tiles glow against the deep sky',
        technique: 'Frame the gate as a portal with the medina street visible through the arch; use people walking through for scale',
        tip: 'The blue tiles face outward; the green tiles face the medina. Shoot from the Place Boujloud side for the iconic blue view.',
      },
      {
        name: 'Medina Alleyways',
        bestTime: 'Midday when shafts of light penetrate the narrow passages',
        technique: 'High contrast light-and-shadow compositions; expose for the light shafts and let shadows go deep black',
        tip: 'The medina has over 9,000 alleyways. Getting lost is part of the experience. A 35mm prime is ideal for the tight spaces.',
      },
    ],
    image: '/images/hero-fes-tanneries.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GOLDEN HOUR TIMING BY SEASON
   ═══════════════════════════════════════════════════════════════ */

interface GoldenHourSeason {
  season: string;
  months: string;
  sunrise: string;
  sunset: string;
  goldenHourMorning: string;
  goldenHourEvening: string;
  notes: string;
}

const goldenHourData: GoldenHourSeason[] = [
  {
    season: 'Winter',
    months: 'December - February',
    sunrise: '07:15 - 07:30',
    sunset: '17:30 - 18:00',
    goldenHourMorning: '07:15 - 08:15',
    goldenHourEvening: '16:30 - 17:30',
    notes: 'Low sun angles all day create warm, directional light. Best season for dramatic long shadows. Clear Sahara skies perfect for astrophotography.',
  },
  {
    season: 'Spring',
    months: 'March - May',
    sunrise: '06:15 - 06:45',
    sunset: '18:30 - 19:30',
    goldenHourMorning: '06:15 - 07:30',
    goldenHourEvening: '18:00 - 19:30',
    notes: 'Wildflowers carpet the Atlas foothills. Longer golden hours. Occasional Saharan dust creates hazy, painterly atmospheres.',
  },
  {
    season: 'Summer',
    months: 'June - August',
    sunrise: '05:45 - 06:15',
    sunset: '19:30 - 20:00',
    goldenHourMorning: '05:45 - 07:00',
    goldenHourEvening: '19:00 - 20:00',
    notes: 'Very harsh midday light (avoid 11:00-16:00 for outdoor shooting). Medina alleyways and covered souks work well at midday. Dawn and dusk are magical.',
  },
  {
    season: 'Autumn',
    months: 'September - November',
    sunrise: '06:30 - 07:00',
    sunset: '17:45 - 18:45',
    goldenHourMorning: '06:30 - 07:45',
    goldenHourEvening: '17:00 - 18:45',
    notes: 'Arguably the best photography season. Warm light, manageable temperatures, date harvest in oases, clear mountain views after summer haze lifts.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   STREET PHOTOGRAPHY ETHICS
   ═══════════════════════════════════════════════════════════════ */

interface EthicRule {
  title: string;
  description: string;
  doThis: string;
  avoidThis: string;
}

const streetEthics: EthicRule[] = [
  {
    title: 'Always Ask Permission for Portraits',
    description: 'Moroccan culture values personal dignity and consent. Many people are delighted to be photographed and will strike a pose, but others may object for religious or personal reasons. Asking "Mumkin suwwar?" (May I take a photo?) shows respect and usually gets a warm response.',
    doThis: 'Make eye contact, smile, gesture toward your camera, and wait for a nod or verbal consent. Show people the photo on your screen afterwards -- they love it.',
    avoidThis: 'Never use a telephoto lens to sneak portraits from a distance. Never photograph women without explicit permission. Never photograph children without a parent present and consenting.',
  },
  {
    title: 'Tipping for Portraits',
    description: 'When someone poses for you, a small tip is customary and appreciated. This is especially true for water sellers in traditional dress, snake charmers, henna artists, and market vendors who interrupt their work.',
    doThis: 'Offer 5-20 MAD per portrait. For elaborate setups (water seller in full regalia, henna artist demonstration), 20-50 MAD is appropriate. Agree on the amount before shooting if approached.',
    avoidThis: 'Do not treat tipping as transactional. It is a gesture of gratitude, not a purchase. Do not pay and then demand multiple poses or extended sessions.',
  },
  {
    title: 'Sacred Spaces and Sensitivity',
    description: 'Non-Muslims cannot enter most mosques in Morocco (the Hassan II Mosque in Casablanca and the Tin Mal Mosque in the Atlas are exceptions). Even exterior photography should be done respectfully. Cemeteries, shrines, and zaouias (religious lodges) require particular care.',
    doThis: 'Photograph mosque exteriors and minarets freely. Ask before photographing people in prayer. Remove shoes and cover shoulders when entering any religious or sacred space where photography is permitted.',
    avoidThis: 'Never point a camera into a mosque interior through an open door. Never photograph funeral processions. Never use flash near religious ceremonies.',
  },
  {
    title: 'Market and Souk Photography',
    description: 'Souks are incredibly photogenic but also people&apos;s workplaces. Vendors are generally happy to be included in atmospheric shots but may object to close-up portraits or photos of their merchandise (some believe it invites the evil eye or enables price comparison by competitors).',
    doThis: 'Buy something small before photographing a stall in detail. A glass of mint tea (5-10 MAD) buys enormous goodwill. Zone focusing and shooting from the hip captures candid souk energy.',
    avoidThis: 'Do not block narrow passages with tripods. Do not photograph merchandise close-up without buying. Do not use flash in covered souks where it disrupts the atmosphere.',
  },
  {
    title: 'Military, Police, and Government Buildings',
    description: 'Photography of military installations, police stations, government buildings, and royal palaces is strictly prohibited in Morocco. This is enforced and violations can result in equipment confiscation or detention.',
    doThis: 'Be aware of your surroundings. If a security official asks you to stop, comply immediately and delete the images if requested.',
    avoidThis: 'Never photograph soldiers, police officers, military vehicles, or checkpoints. Avoid photos near royal palaces, prisons, and border posts.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   LANDSCAPE PHOTOGRAPHY TECHNIQUES
   ═══════════════════════════════════════════════════════════════ */

interface LandscapeTechnique {
  location: string;
  technique: string;
  gearNeeded: string;
  bestConditions: string;
  compositionTip: string;
  image: string;
}

const landscapeTechniques: LandscapeTechnique[] = [
  {
    location: 'Atlas Mountains',
    technique: 'Layer composition with foreground wildflowers, terraced villages in the mid-ground, and snow-capped peaks in the background. Use a polarizing filter to deepen blue skies and cut haze.',
    gearNeeded: 'Wide-angle (16-35mm), polarizing filter, graduated ND filter for balancing bright sky and shadowed valleys',
    bestConditions: 'Early morning after overnight rain clears the air. Spring (March-May) for wildflowers and snow on peaks simultaneously.',
    compositionTip: 'Include a winding mountain road or river as a leading line. Berber villages with their flat-roofed earthen houses provide human scale against the massive peaks.',
    image: '/images/hero-atlas.webp',
  },
  {
    location: 'Sahara Desert',
    technique: 'Side-lighting is everything. The interplay of light and shadow on sand ripples creates the drama. Shoot from the ridge of a dune, placing the light source 90 degrees to your left or right for maximum texture.',
    gearNeeded: 'Telephoto (70-200mm) for dune abstracts, wide-angle for star fields, lens cloth (sand gets everywhere), ziplock bags for storage',
    bestConditions: 'First 30 minutes after sunrise or last 30 minutes before sunset. Sand temperature differentials create heat shimmer in midday -- avoid unless you want abstract effects.',
    compositionTip: 'The S-curve of a dune ridge is one of the most powerful natural leading lines. Place the horizon in the upper or lower third, never the center, unless reflecting perfect symmetry.',
    image: '/images/hero-sahara-sunrise.webp',
  },
  {
    location: 'Atlantic Coastline',
    technique: 'Long exposures transform crashing waves into ethereal mist against rugged volcanic rock. Use shutter speeds of 1-30 seconds with ND filters. Essaouira, Legzira, and the coast near Sidi Ifni offer the most dramatic formations.',
    gearNeeded: '6-stop or 10-stop ND filter, sturdy tripod, remote shutter release, rain cover for sea spray',
    bestConditions: 'Stormy weather creates the most dramatic wave action. High tide at sunset produces the best conditions along the Essaouira ramparts.',
    compositionTip: 'Use foreground rocks as anchors. The receding water patterns in sand create natural leading lines toward the horizon. Include the silhouette of a fisherman for human interest.',
    image: '/images/hero-coastal.webp',
  },
  {
    location: 'Draa Valley & Oases',
    technique: 'The contrast between lush palm oases and barren desert hills is visually stunning. Shoot from elevated viewpoints (kasbah rooftops, hillsides) to show the dramatic boundary between green and ochre.',
    gearNeeded: 'Standard zoom (24-70mm), telephoto for kasbah details, polarizing filter to cut palm frond reflections',
    bestConditions: 'Late afternoon when the low sun turns the rammed-earth kasbahs golden against the deep green of date palms. Post-harvest season (October-November) when the oasis is lush.',
    compositionTip: 'Frame a distant kasbah through an archway of palm fronds. The repeating pattern of palm trunks creates natural leading lines. Use depth of field to keep everything sharp (f/8 to f/11).',
    image: '/images/hero-ait-benhaddou-sunset.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   ARCHITECTURE PHOTOGRAPHY TECHNIQUES
   ═══════════════════════════════════════════════════════════════ */

interface ArchitectureTip {
  subject: string;
  technique: string;
  challenges: string;
  bestExamples: string;
}

const architectureTips: ArchitectureTip[] = [
  {
    subject: 'Mosques & Minarets',
    technique: 'Use a tilt-shift lens or perspective correction in post-processing to keep vertical lines parallel. Shoot minarets from across a plaza or rooftop for a clean silhouette against the sky. Include the call-to-prayer speaker for authentic detail.',
    challenges: 'Interior access is restricted for non-Muslims at most mosques. Shoot through open doorways with a telephoto, or visit the Hassan II Mosque which offers guided tours of the stunning interior.',
    bestExamples: 'Koutoubia Mosque (Marrakech), Hassan II Mosque (Casablanca), Bab Boujloud blue gate (Fes), Qarawiyyin exterior (Fes)',
  },
  {
    subject: 'Riads & Courtyards',
    technique: 'The central courtyard is best shot looking straight up (zenith composition) with a wide-angle to capture the rectangular sky framed by ornate walls. Shoot the reflection in the central fountain basin for a unique perspective. Morning light entering from the east illuminates zellige on the western wall.',
    challenges: 'Tight spaces require ultra-wide lenses (12-16mm). Dynamic range is extreme between the bright open sky and shadowed archways; use HDR bracketing or expose for shadows and recover highlights.',
    bestExamples: 'Bahia Palace (Marrakech), Riad Laaroussa (Fes), Dar Si Said Museum (Marrakech), Riad Idrissy (Meknes)',
  },
  {
    subject: 'Kasbahs & Earthen Forts',
    technique: 'The warm tones of rammed earth glow at golden hour. Use a telephoto to compress the stacked towers of Ait Benhaddou. Look for the geometric patterns created by projecting bricks in the pise walls -- they produce fascinating shadow patterns that change throughout the day.',
    challenges: 'Many kasbahs are crumbling and access can be unstable. Dust kicks up on windy days. UV and haze filters protect your front element and cut atmospheric haze in desert environments.',
    bestExamples: 'Ait Benhaddou (Ouarzazate), Kasbah Taourirt, Telouet Kasbah, Todra Gorge villages',
  },
  {
    subject: 'Zellige & Decorative Details',
    technique: 'Macro or close-focus photography reveals the astonishing hand-cut precision of zellige tilework. Fill the frame entirely with the pattern for abstract compositions. Include the edge where zellige meets carved stucco to show the layered decorative system.',
    challenges: 'Interiors are often dimly lit. Use a high ISO (1600-3200) or a small tripod. Avoid on-camera flash which flattens the three-dimensional texture. A small LED panel provides better controlled light for details.',
    bestExamples: 'Bou Inania Madrasa (Fes), Ben Youssef Madrasa (Marrakech), Saadian Tombs (Marrakech), Bahia Palace (Marrakech)',
  },
  {
    subject: 'Ornate Doorways',
    technique: 'Morocco has thousands of spectacular doors. Shoot them straight-on with precise alignment to avoid keystoning. Include the full surround -- the carved stone or zellige frame is as important as the door itself. A person walking through provides scale and narrative.',
    challenges: 'Narrow streets mean you cannot always step back far enough. A 24mm lens solves most access problems. Midday light on south-facing doors avoids the deep shadows cast by overhanging eaves.',
    bestExamples: 'Royal Palace doors (Fes), Bab Mansour (Meknes), riad doors throughout Marrakech medina, blue doors of Chefchaouen',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PORTRAIT PHOTOGRAPHY
   ═══════════════════════════════════════════════════════════════ */

interface PortraitSubject {
  subject: string;
  approach: string;
  technicalTips: string;
  culturalNotes: string;
  image: string;
}

const portraitSubjects: PortraitSubject[] = [
  {
    subject: 'Berber People of the Atlas',
    approach: 'Berber communities are generally warm and welcoming to photographers who take the time to engage. Share tea, learn a few Tamazight greetings ("Azul" for hello), and show genuine interest in their daily life before reaching for the camera. Environmental portraits that include the mountain landscape, livestock, or craft work tell a richer story.',
    technicalTips: 'Use an 85mm or 50mm lens for flattering compression. Open shade (under a tree, in a doorway) provides soft, even light without harsh shadows. The weathered skin and bright traditional textiles create stunning natural contrast.',
    culturalNotes: 'Offer to share images by email or WhatsApp -- many rural Berber families treasure printed photos of themselves. Small gifts of tea, sugar, or school supplies for children are appreciated more than cash in remote villages.',
    image: '/images/art-berber-portrait.webp',
  },
  {
    subject: 'Market Vendors & Artisans',
    approach: 'The best vendor portraits come from building a relationship. Buy something first -- even a small item -- and then ask to photograph the vendor at work. Artisans in particular (leather workers, metalworkers, weavers) are proud of their craft and enjoy demonstrating their skills for an appreciative audience.',
    technicalTips: 'Fast lenses (f/1.4 to f/2.8) are essential in the dim light of covered souks. Focus on the hands at work for powerful detail shots. A longer exposure (1/30 to 1/60 second) can convey the motion of hammering, spinning, or weaving while keeping the face sharp.',
    culturalNotes: 'A tip of 10-20 MAD is customary for posed portraits of vendors. Showing the image on your camera screen builds trust. In leather workshops and tanneries, buy a small leather item to thank your host for rooftop access.',
    image: '/images/art-moroccan-spice-market.webp',
  },
  {
    subject: 'Chefchaouen Residents',
    approach: 'The people of Chefchaouen are accustomed to photographers but appreciate courtesy. Elderly residents in traditional djellabas against the blue walls create iconic images. The women who paint the blue walls themselves make fascinating documentary subjects if they consent.',
    technicalTips: 'The blue walls act as an enormous softbox, reflecting cool blue light everywhere. White balance correction toward warm tones prevents portraits from looking too cold. The blue background simplifies compositions and makes subjects pop.',
    culturalNotes: 'Chefchaouen is a conservative Rif Mountain town. Women here are more likely to decline photography than in cosmopolitan Marrakech. A respectful approach and a cheerful "La, shukran" (No, thank you) when declined goes a long way.',
    image: '/images/art-chefchaouen-blue.webp',
  },
];

/* ═══════════════════════════════════════════════════════════════
   CAMERA GEAR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

interface GearItem {
  category: string;
  essential: string[];
  niceToHave: string[];
  avoidBringing: string;
}

const gearRecommendations: GearItem[] = [
  {
    category: 'Camera Bodies',
    essential: [
      'Full-frame mirrorless (Sony A7 IV, Canon R6 II, Nikon Z6 III) for the best low-light performance in dim medinas and night sky work',
      'A weather-sealed body is advisable for desert sand and Atlantic sea spray',
    ],
    niceToHave: [
      'Second body to avoid lens changes in dusty environments',
      'APS-C crop body (Fuji X-T5, Sony A6700) as a lighter travel alternative',
    ],
    avoidBringing: 'Heavy DSLR rigs that draw attention and weigh down your daypack in 40-degree medina heat.',
  },
  {
    category: 'Lenses',
    essential: [
      'Wide-angle zoom 16-35mm f/2.8 (architecture, landscapes, star fields)',
      'Standard zoom 24-70mm f/2.8 (versatile workhorse for souks, streets, food)',
      'Fast prime 50mm f/1.4 or 35mm f/1.4 (low-light medina streets, portraits)',
    ],
    niceToHave: [
      'Telephoto 70-200mm f/2.8 (tannery details from rooftops, camel caravan compression, distant kasbahs)',
      'Macro lens or extension tubes for zellige detail work',
    ],
    avoidBringing: 'Super-telephoto lenses (300mm+) that attract unwanted attention and are impractical in narrow medina alleys.',
  },
  {
    category: 'Accessories',
    essential: [
      'Circular polarizing filter (deepens blue skies, cuts reflections on zellige and water)',
      'Microfiber lens cloths (at least 3 -- sand dust is constant)',
      'Ziplock bags for sand and dust protection in the Sahara',
      'Spare batteries (cold desert nights drain batteries faster)',
    ],
    niceToHave: [
      'ND filter set (6-stop and 10-stop for long exposures at Essaouira coast)',
      'Small LED light panel for illuminating zellige details in dark interiors',
      'Carbon fiber travel tripod (lightweight, does not corrode from salt air)',
      'Sensor cleaning kit for desert sand intrusion',
    ],
    avoidBringing: 'Drone without proper permits (risk of confiscation). Oversized camera bags that do not fit through narrow medina doorways.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PHONE PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const phoneTips = [
  {
    title: 'Use ProRAW or RAW Mode',
    description: 'iPhone ProRAW and Samsung Expert RAW capture far more dynamic range than standard JPEG. Essential for the extreme contrast between bright Moroccan sun and deep medina shadows. Edit in Lightroom Mobile for professional results from your phone.',
  },
  {
    title: 'Lock Exposure and Focus',
    description: 'Tap and hold on your subject to lock focus and exposure. Then slide your finger up or down to adjust exposure compensation. In bright Moroccan light, slightly underexposing (-0.5 EV) preserves highlight detail in white buildings and blue skies.',
  },
  {
    title: 'Use the Ultra-Wide Lens',
    description: 'The 0.5x ultra-wide on modern phones is perfect for riad courtyards, medina alleyways, and sweeping desert panoramas. Get close to foreground subjects (doorways, archways, pattern details) and let the wide angle pull in the background.',
  },
  {
    title: 'Portrait Mode for People',
    description: 'Computational bokeh simulates an f/1.4 look that separates your subject from busy souk backgrounds. Works best at arm&apos;s length with a single subject. Check the edges of the blur mask -- hair and djellaba hoods can confuse the algorithm.',
  },
  {
    title: 'Night Mode for Medinas After Dark',
    description: 'Modern phone night modes produce remarkable results in the lantern-lit medinas. Keep your phone very still (brace against a wall or table) during the 3-5 second exposure. The warm tones of Moroccan lanterns (fanoos) photograph beautifully on phones.',
  },
  {
    title: 'Clean Your Lens Constantly',
    description: 'Desert sand, fingerprints, and sunscreen on your phone lens are the number one cause of hazy, low-contrast phone photos. Wipe with a microfiber cloth before every shot. Carry a small cloth in your pocket at all times.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DRONE PHOTOGRAPHY RULES
   ═══════════════════════════════════════════════════════════════ */

const droneRules = {
  legal: [
    'All drone flights require authorization from Direction Generale de l\'Aviation Civile (DGAC)',
    'Apply at least 30 days before your trip at dgac.gov.ma',
    'Provide drone specifications, flight plan, dates, and insurance documentation',
    'Commercial operators need additional Exploitation Authorization',
    'Registration of the drone with Moroccan authorities is mandatory',
  ],
  restrictions: [
    'Maximum altitude: 150 meters above ground level',
    'No flights within 5 km of airports or military bases',
    'No flights over medinas, royal palaces, or government buildings',
    'No flights over crowds or populated urban areas',
    'No flights at night without special authorization',
    'Line-of-sight operation only (no autonomous waypoint flights)',
  ],
  penalties: [
    'Flying without authorization: drone confiscation and fine from 2,000 to 20,000 MAD',
    'Flying in restricted zones: criminal prosecution possible',
    'Importing a drone without declaration at customs: confiscation at airport',
    'Always declare your drone on your customs entry form',
  ],
  bestDroneSpots: [
    'Ait Benhaddou (with permit) -- the ksar from above is breathtaking',
    'Erg Chebbi dunes at sunrise -- dune patterns visible only from the air',
    'Todra Gorge -- the narrow canyon creates dramatic vertical compositions',
    'Atlantic coastline near Legzira -- natural rock arches and crashing waves',
    'Dades Valley -- the winding road through the Valley of a Thousand Kasbahs',
  ],
};

/* ═══════════════════════════════════════════════════════════════
   NIGHT PHOTOGRAPHY
   ═══════════════════════════════════════════════════════════════ */

interface NightSpot {
  location: string;
  subject: string;
  settings: string;
  tip: string;
}

const nightPhotography: NightSpot[] = [
  {
    location: 'Sahara Desert (Merzouga / M\'Hamid)',
    subject: 'Milky Way and star trails over sand dunes',
    settings: '14-24mm, f/2.8, ISO 3200-6400, 15-25 seconds. Use the 500-rule (500 / focal length = max exposure before star trailing).',
    tip: 'Plan around new moon phases. The Sahara has some of the darkest skies in North Africa. Include a lit tent, campfire, or camel silhouette as foreground interest. Light-paint the foreground dune with a headlamp during the exposure.',
  },
  {
    location: 'Jemaa el-Fnaa, Marrakech',
    subject: 'Night market chaos with food stall smoke and lantern light',
    settings: '35mm f/1.4, ISO 1600-3200, 1/60 second handheld. Use continuous autofocus to track moving subjects.',
    tip: 'The smoke from grilling food creates atmospheric haze that catches the artificial light beautifully. Shoot from the elevated Cafe de France terrace for an overview, then descend into the chaos for intimate street-level shots.',
  },
  {
    location: 'Fes Medina After Dark',
    subject: 'Lantern-lit alleyways with long shadows and warm pools of light',
    settings: '50mm f/1.4, ISO 3200, 1/30 second. Brace against a wall for stability without a tripod.',
    tip: 'The medina empties after 21:00 and the remaining pedestrians cast dramatic silhouettes in the lantern light. Doorways spilling warm light into dark passages create natural spot-lit compositions.',
  },
  {
    location: 'Chefchaouen Blue Hour',
    subject: 'Blue walls under twilight with warm interior light spilling through windows',
    settings: '24mm f/2.8, ISO 800, 1-4 seconds on tripod. Bracket exposures for HDR blending.',
    tip: 'The 20-minute window between sunset and darkness is magical when the deep blue sky matches the blue walls. The few lit windows and doorways add warm accent points. A resident passing through adds human scale.',
  },
  {
    location: 'Atlas Mountains (Oukaimeden, Toubkal)',
    subject: 'Star fields over mountain silhouettes and Berber villages',
    settings: '16mm f/2.8, ISO 6400, 20 seconds. Incorporate moonlight on snow-capped peaks for a balanced exposure.',
    tip: 'High altitude (2,600m+) means thinner atmosphere and sharper stars. Winter brings both clear skies and snow on the peaks, creating stunning contrast. The glow of village lights at the mountain base adds depth.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD PHOTOGRAPHY
   ═══════════════════════════════════════════════════════════════ */

interface FoodShot {
  dish: string;
  stylingTip: string;
  lightingTip: string;
  compositionTip: string;
}

const foodPhotography: FoodShot[] = [
  {
    dish: 'Tagine',
    stylingTip: 'Photograph with the conical lid partially lifted, steam rising, to create mystery and appetite appeal. The moment of the reveal is the money shot. Ask your server to bring it covered and lift the lid for you.',
    lightingTip: 'Side-lighting from a window creates depth and shows the glossy sauce texture. Avoid direct overhead restaurant lighting which flattens the dish.',
    compositionTip: 'Include the traditional tagine vessel -- the terracotta cone is as photogenic as the food. Shoot from a 45-degree angle to show both the dish contents and the iconic vessel shape.',
  },
  {
    dish: 'Mint Tea Ceremony',
    stylingTip: 'The pour is the shot. Moroccan tea is poured from a height to create foam. Ask your host to pour slowly while you shoot at 1/500 second or faster to freeze the stream. The golden liquid against a silver teapot is gorgeous.',
    lightingTip: 'Backlighting through the tea glass shows the amber color and makes the liquid glow. Position yourself with a window behind the tea set.',
    compositionTip: 'Include the ornate silver teapot, the colorful tea glasses, and sugar cones in a flat-lay or low-angle arrangement. A hand reaching for a glass adds human connection.',
  },
  {
    dish: 'Spice Market Displays',
    stylingTip: 'The conical spice mounds in Marrakech souks are pre-styled by vendors who consider the display an art form. Do not touch or rearrange. The natural color progression from golden turmeric to crimson paprika to green herbs is stunning as-is.',
    lightingTip: 'The dappled light filtering through souk roofing creates natural spotlighting on the spice mounds. Overcast days or shaded stalls provide more even, saturated color.',
    compositionTip: 'Fill the frame with the repeating pattern of conical mounds for abstract color studies. Include the vendor behind the display for environmental context and human scale.',
  },
  {
    dish: 'Moroccan Breakfast Spread',
    stylingTip: 'Riad breakfasts are naturally photogenic: msemen flatbread, amlou (argan butter), honey, fresh juice, eggs, olives, and seasonal fruit on a zellige-tiled table. Shoot the full spread as a flat-lay from directly above.',
    lightingTip: 'Morning riad courtyard light is soft and warm. Position the spread where natural light falls. A reflector or white napkin can fill shadows on the far side.',
    compositionTip: 'The overhead flat-lay shows the full abundance. Include the zellige table or woven placemat as a distinctly Moroccan background. A hand tearing bread adds narrative energy.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   INSTAGRAM SPOTS & CROWD AVOIDANCE
   ═══════════════════════════════════════════════════════════════ */

const instagramSpots = [
  {
    spot: 'Jardin Majorelle Blue Wall',
    crowdTip: 'Arrive at opening (08:00). The iconic blue wall with the YSL Memorial is empty for about 15 minutes. By 09:00, queues form for the same shot.',
    alternativeAngle: 'Skip the wall and shoot the yellow Art Deco building through the bamboo grove for a more original composition.',
  },
  {
    spot: 'Chefchaouen Blue Steps',
    crowdTip: 'Before 08:00 or during Friday prayers (12:30-14:00) when the medina empties. Most tourists arrive on day-trip buses at 10:00.',
    alternativeAngle: 'Explore the upper medina near Ras el-Maa. The lower medina is more photographed; the upper streets are equally blue but far less crowded.',
  },
  {
    spot: 'Fes Tanneries',
    crowdTip: 'Weekday mornings at 09:00 before tour groups arrive. Workers begin dyeing early and the vats are most colorful when freshly filled.',
    alternativeAngle: 'Instead of the standard overhead shot, descend into the tannery (with a guide) and shoot upward at workers against the sky for a powerful perspective.',
  },
  {
    spot: 'Ait Benhaddou',
    crowdTip: 'Late afternoon when day-trippers from Marrakech have departed. The sunset light on the ksar is incomparably better than the harsh midday light most tourists photograph.',
    alternativeAngle: 'Cross the river and climb the opposite hillside for the classic postcard view. Most tourists stay on the main path through the ksar itself.',
  },
  {
    spot: 'Bahia Palace Marrakech',
    crowdTip: 'The first 30 minutes after opening (09:00) or the last hour before closing. Midday is packed with tour groups filling the courtyards.',
    alternativeAngle: 'Focus on ceiling details and doorway framing rather than the standard wide courtyard shot. The painted cedar ceilings are stunning and most visitors walk past them.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PHOTO WORKSHOPS AND TOURS
   ═══════════════════════════════════════════════════════════════ */

interface Workshop {
  name: string;
  location: string;
  duration: string;
  price: string;
  focus: string;
  includes: string;
}

const workshops: Workshop[] = [
  {
    name: 'Marrakech Medina Photo Walk',
    location: 'Marrakech',
    duration: '3-4 hours (morning or golden hour)',
    price: 'From 600 MAD per person',
    focus: 'Street photography, market scenes, architecture. Small groups (max 6) with a local photographer guide who handles introductions and permissions.',
    includes: 'Local guide, entry to 2-3 monuments, mint tea stop, post-walk image review session.',
  },
  {
    name: 'Sahara Photography Expedition',
    location: 'Merzouga / Erg Chebbi',
    duration: '2 nights / 3 days',
    price: 'From 4,500 MAD per person',
    focus: 'Sunrise/sunset dune photography, camel caravan shots, night sky astrophotography, Berber portrait sessions at a nomad camp.',
    includes: 'Desert camp accommodation, all meals, camel trek, 4x4 transport, photography instruction. Note: seasonal pricing applies; summer rates may differ.',
  },
  {
    name: 'Fes Artisan & Architecture Workshop',
    location: 'Fes',
    duration: '2 full days',
    price: 'From 3,200 MAD per person',
    focus: 'Tannery photography from exclusive rooftop access, madrasa interior details, souk life, artisan portraits in metalwork and pottery workshops.',
    includes: 'Expert local guide, exclusive rooftop access at Chouara tanneries, artisan workshop visits, all entry fees, daily image critiques.',
  },
  {
    name: 'Chefchaouen Blue City Intensive',
    location: 'Chefchaouen',
    duration: '1 full day (sunrise to blue hour)',
    price: 'From 800 MAD per person',
    focus: 'Blue wall compositions, environmental portraits, Spanish Mosque sunset, blue hour techniques. The full arc of a day in the Blue Pearl.',
    includes: 'Local photography guide, rooftop access to private homes, lunch in a traditional house, image review session.',
  },
  {
    name: 'Atlas Mountains & Berber Villages',
    location: 'Imlil / Ourika Valley',
    duration: '1 full day',
    price: 'From 900 MAD per person',
    focus: 'Mountain landscapes, Berber village life, agricultural scenes, portrait photography with community engagement.',
    includes: 'Transport from Marrakech, Berber guide, traditional lunch, community donation, photography instruction throughout.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   QUICK STATS
   ═══════════════════════════════════════════════════════════════ */

const quickStats = [
  { icon: <Camera className="w-5 h-5" />, label: 'Techniques', value: '8 Disciplines', detail: 'Covered in depth' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Locations', value: '15+ Spots', detail: 'Across 5 cities' },
  { icon: <Sun className="w-5 h-5" />, label: 'Best Season', value: 'Oct - Apr', detail: 'Ideal light conditions' },
  { icon: <Aperture className="w-5 h-5" />, label: 'Gear Tips', value: '3 Kits', detail: 'Camera, phone, drone' },
  { icon: <Users className="w-5 h-5" />, label: 'Workshops', value: '5 Listed', detail: 'From 600 MAD' },
  { icon: <Star className="w-5 h-5" />, label: 'Top Spot', value: 'Sahara Sunrise', detail: 'Erg Chebbi dunes' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE (Server Component)
   ═══════════════════════════════════════════════════════════════ */

export default function PhotographyGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Photography Techniques Guide</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/art-sahara-golden-hour.webp"
            alt="Golden hour light sculpting sand dune ridgelines in the Moroccan Sahara, demonstrating ideal photography conditions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Master the Craft
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Photography Techniques Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the mathematics of golden hour light on Sahara dunes to the etiquette of
              street portraits in Fes, master the techniques that transform tourist snapshots
              into gallery-worthy images of one of the world&apos;s most photogenic countries.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* Quick Stats */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{stat.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{stat.value}</p>
              <p className="text-xs text-text-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is a photographer&apos;s paradise -- but it is also a place where the obvious shot
              is rarely the best one. Every year, millions of visitors photograph the same blue walls,
              the same spice pyramids, the same tannery pits. This guide is about going deeper: understanding
              the light, mastering the techniques, respecting the culture, and finding the angles that
              make your Morocco images truly extraordinary.
            </p>
            <p>
              Whether you are carrying a professional mirrorless setup or the phone in your pocket, the
              principles are the same. Great Morocco photography comes from patience, cultural sensitivity,
              technical knowledge, and the willingness to wake before dawn and stay out past dark. The
              reward is images that capture not just how Morocco looks, but how it <em>feels</em>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 1: TOP PHOTO LOCATIONS BY CITY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Photo Locations by City
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The best spots in Morocco&apos;s five most photogenic cities, with specific technique
              recommendations, ideal timing, and insider tips for each location.
            </p>
          </div>

          <div className="space-y-12">
            {photoLocations.map((loc) => (
              <div key={loc.city} className="card-moroccan overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img
                      src={loc.image}
                      alt={`Photography location in ${loc.city}, Morocco`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                      <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--color-primary)] text-sm">
                        {loc.city}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)] mb-6">
                      {loc.city}
                    </h3>
                    <div className="space-y-6">
                      {loc.spots.map((spot) => (
                        <div key={spot.name} className="border-l-2 border-[var(--color-primary)]/30 pl-4">
                          <h4 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-1">
                            {spot.name}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] mb-2">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{spot.bestTime}</span>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] mb-1">
                            <strong className="text-[var(--text-primary)]">Technique:</strong> {spot.technique}
                          </p>
                          <p className="text-sm text-[var(--text-secondary)]">
                            <strong className="text-[var(--text-primary)]">Tip:</strong> {spot.tip}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 2: GOLDEN HOUR TIMING
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Sunrise className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Golden Hour Guide by Season
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco sits between 27 and 36 degrees north latitude, giving it dramatically different
              light qualities through the year. Planning your shoot around these times transforms your results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {goldenHourData.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                    {season.season === 'Winter' && <Moon className="w-5 h-5 text-[var(--color-accent)]" />}
                    {season.season === 'Spring' && <Sunrise className="w-5 h-5 text-[var(--color-accent)]" />}
                    {season.season === 'Summer' && <Sun className="w-5 h-5 text-[var(--color-accent)]" />}
                    {season.season === 'Autumn' && <Sunset className="w-5 h-5 text-[var(--color-accent)]" />}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                    <p className="text-sm text-text-muted">{season.months}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="bg-[var(--color-bg-alt)] rounded-lg p-3">
                    <p className="text-text-muted text-xs mb-1">Sunrise</p>
                    <p className="font-semibold text-[var(--text-primary)]">{season.sunrise}</p>
                  </div>
                  <div className="bg-[var(--color-bg-alt)] rounded-lg p-3">
                    <p className="text-text-muted text-xs mb-1">Sunset</p>
                    <p className="font-semibold text-[var(--text-primary)]">{season.sunset}</p>
                  </div>
                  <div className="bg-[var(--color-accent)]/5 rounded-lg p-3">
                    <p className="text-text-muted text-xs mb-1">Morning Golden Hour</p>
                    <p className="font-semibold text-[var(--color-accent)]">{season.goldenHourMorning}</p>
                  </div>
                  <div className="bg-[var(--color-accent)]/5 rounded-lg p-3">
                    <p className="text-text-muted text-xs mb-1">Evening Golden Hour</p>
                    <p className="font-semibold text-[var(--color-accent)]">{season.goldenHourEvening}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{season.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 3: STREET PHOTOGRAPHY ETHICS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Heart className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Street Photography Ethics &amp; Etiquette
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is not a theme park. The people you photograph are going about their daily
              lives. Respectful photography produces better images and better experiences for everyone.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {streetEthics.map((rule) => (
              <div key={rule.title} className="card-moroccan p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)] mb-3">
                  {rule.title}
                </h3>
                <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{rule.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-lg p-4 border border-green-200 dark:border-green-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="font-semibold text-green-700 dark:text-green-400 text-sm">Do This</p>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-300">{rule.doThis}</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-4 border border-red-200 dark:border-red-800/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Ban className="w-4 h-4 text-red-600" />
                      <p className="font-semibold text-red-700 dark:text-red-400 text-sm">Avoid This</p>
                    </div>
                    <p className="text-sm text-red-800 dark:text-red-300">{rule.avoidThis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 4: LANDSCAPE PHOTOGRAPHY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Landscape Photography Techniques
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the snow-capped Atlas to the endless Sahara, Morocco offers four radically
              different landscape environments, each demanding distinct techniques.
            </p>
          </div>

          <div className="space-y-8">
            {landscapeTechniques.map((tech) => (
              <div key={tech.location} className="card-moroccan overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 relative">
                    <img
                      src={tech.image}
                      alt={`Landscape photography at ${tech.location}, Morocco`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--text-primary)] mb-4">
                      {tech.location}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{tech.technique}</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Aperture className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0" />
                        <p className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Gear:</strong> {tech.gearNeeded}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Sun className="w-4 h-4 text-[var(--color-accent)] mt-1 shrink-0" />
                        <p className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Best Conditions:</strong> {tech.bestConditions}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0" />
                        <p className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Composition:</strong> {tech.compositionTip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 5: ARCHITECTURE PHOTOGRAPHY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Architecture &amp; Detail Photography
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s architectural heritage -- from thousand-year-old mosques to hand-cut
              zellige mosaics -- demands specific techniques to capture its extraordinary detail and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {architectureTips.map((tip) => (
              <div key={tip.subject} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)] mb-3">
                  {tip.subject}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">{tip.technique}</p>
                <div className="bg-amber-50 dark:bg-amber-900/10 rounded-lg p-3 mb-3 border border-amber-200 dark:border-amber-800/30">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    <p className="font-semibold text-amber-700 dark:text-amber-400 text-xs">Challenges</p>
                  </div>
                  <p className="text-xs text-amber-800 dark:text-amber-300">{tip.challenges}</p>
                </div>
                <div className="flex items-start gap-2">
                  <Star className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-text-muted"><strong>Best Examples:</strong> {tip.bestExamples}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Architecture detail images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/art-zellige-pattern.webp" alt="Intricate zellige geometric tilework pattern in a Moroccan palace" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/detail-moroccan-door.webp" alt="Ornately carved traditional Moroccan wooden door with brass hardware" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/art-moroccan-stucco.webp" alt="Hand-carved stucco plasterwork with arabesque floral patterns" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/detail-zellige-mosaic.webp" alt="Close-up of hand-cut zellige mosaic showing individual terracotta pieces" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 6: PORTRAIT PHOTOGRAPHY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Portrait Photography
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The faces of Morocco tell its story as powerfully as any landscape. Authentic,
              respectful portrait photography requires technique, patience, and genuine human connection.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {portraitSubjects.map((portrait) => (
              <div key={portrait.subject} className="card-moroccan overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={portrait.image}
                      alt={`Portrait photography of ${portrait.subject} in Morocco`}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-3">
                      {portrait.subject}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">{portrait.approach}</p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <Aperture className="w-4 h-4 text-[var(--color-primary)] mt-1 shrink-0" />
                        <p className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Technical:</strong> {portrait.technicalTips}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <Heart className="w-4 h-4 text-[var(--color-accent)] mt-1 shrink-0" />
                        <p className="text-sm text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">Cultural Notes:</strong> {portrait.culturalNotes}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 7: CAMERA GEAR RECOMMENDATIONS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Aperture className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Camera Gear Recommendations
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to pack -- and what to leave at home -- for a Morocco photography trip.
              Dust, heat, crowds, and narrow alleyways dictate a specific approach to gear.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {gearRecommendations.map((gear) => (
              <div key={gear.category} className="card-moroccan p-6 md:p-8">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)] mb-4">
                  {gear.category}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Essential</p>
                    </div>
                    <ul className="space-y-2">
                      {gear.essential.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <ChevronRight className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ThumbsUp className="w-4 h-4 text-blue-600" />
                      <p className="font-semibold text-[var(--text-primary)] text-sm">Nice to Have</p>
                    </div>
                    <ul className="space-y-2">
                      {gear.niceToHave.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/10 rounded-lg p-3 border border-red-200 dark:border-red-800/30">
                    <div className="flex items-center gap-2 mb-1">
                      <Ban className="w-3.5 h-3.5 text-red-600" />
                      <p className="font-semibold text-red-700 dark:text-red-400 text-xs">Skip It</p>
                    </div>
                    <p className="text-xs text-red-800 dark:text-red-300">{gear.avoidBringing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 8: PHONE PHOTOGRAPHY TIPS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Smartphone className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Phone Photography Tips
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              You do not need a professional camera to capture Morocco beautifully. Modern
              smartphones, used with intention and technique, produce remarkable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {phoneTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                    <Smartphone className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] text-sm leading-tight">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 9: DRONE PHOTOGRAPHY RULES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Navigation className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Drone Photography Rules &amp; Regulations
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has strict drone regulations. Understanding and complying with the rules is
              essential to avoid equipment confiscation and legal trouble.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Important Warning */}
            <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-red-700 dark:text-red-400">
                  Critical Warning
                </h3>
              </div>
              <p className="text-red-800 dark:text-red-300 leading-relaxed">
                Flying a drone in Morocco without prior DGAC authorization is illegal. Drones are regularly
                confiscated at airports and border crossings. Even if you bring a drone into the country,
                flying without a permit can result in confiscation, fines from 2,000 to 20,000 MAD, and
                potential criminal prosecution. Always declare your drone on your customs form.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Legal Requirements */}
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[var(--color-primary)]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Legal Requirements</h3>
                </div>
                <ul className="space-y-2">
                  {droneRules.legal.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Restrictions */}
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Ban className="w-5 h-5 text-red-600" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Flight Restrictions</h3>
                </div>
                <ul className="space-y-2">
                  {droneRules.restrictions.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Penalties */}
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Penalties</h3>
                </div>
                <ul className="space-y-2">
                  {droneRules.penalties.map((rule, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Ban className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Drone Spots */}
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-[var(--color-gold)]" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Best Drone Spots (With Permit)</h3>
                </div>
                <ul className="space-y-2">
                  {droneRules.bestDroneSpots.map((spot, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 shrink-0" />
                      <span>{spot}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 10: INSTAGRAM SPOTS & CROWD AVOIDANCE
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Image className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Instagram-Worthy Spots &amp; Crowd Avoidance
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s most famous spots are famous for a reason, but timing and alternative
              angles make the difference between a cliched tourist shot and an original image.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {instagramSpots.map((item) => (
              <div key={item.spot} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {item.spot}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <p className="font-semibold text-[var(--text-primary)] text-xs">Beat the Crowds</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.crowdTip}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <p className="font-semibold text-[var(--text-primary)] text-xs">Alternative Angle</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.alternativeAngle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 11: NIGHT PHOTOGRAPHY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Moon className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Night &amp; Astrophotography
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From Sahara star fields to lantern-lit medina alleyways, Morocco after dark
              offers some of the most atmospheric photography opportunities in the country.
            </p>
          </div>

          {/* Night sky feature image */}
          <div className="max-w-4xl mx-auto mb-10 rounded-xl overflow-hidden">
            <img
              src="/images/hero-sahara-starry-night.webp"
              alt="Milky Way arching over a desert camp in the Moroccan Sahara with star-filled sky"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {nightPhotography.map((spot) => (
              <div key={spot.location} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {spot.location}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] mb-2">{spot.subject}</p>
                    <div className="bg-[var(--color-bg-alt)] rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Focus className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                        <p className="text-xs font-semibold text-[var(--text-primary)]">Camera Settings</p>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] font-mono">{spot.settings}</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{spot.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 12: FOOD PHOTOGRAPHY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Utensils className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Photography
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan cuisine is as visually stunning as it is delicious. Tagines, mint tea ceremonies,
              and spice market displays are among the most photographed food subjects in the world.
            </p>
          </div>

          {/* Food image gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/photo-tagine-closeup.webp" alt="Traditional Moroccan tagine with steam rising, served in terracotta vessel" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/photo-mint-tea-pouring.webp" alt="Moroccan mint tea being poured from height into ornate glass" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/photo-spice-souk-display.webp" alt="Colorful conical spice mounds in a Moroccan souk market stall" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square">
              <img src="/images/photo-moroccan-breakfast.webp" alt="Traditional Moroccan riad breakfast spread with msemen, amlou, and fresh juice" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {foodPhotography.map((food) => (
              <div key={food.dish} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-lg text-[var(--text-primary)] mb-4">
                  {food.dish}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-1">Styling</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{food.stylingTip}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-1">Lighting</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{food.lightingTip}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wide mb-1">Composition</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{food.compositionTip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 13: PHOTO WORKSHOPS & TOURS
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Photography Workshops &amp; Tours
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Guided photography experiences with local experts who know the best light, the best
              angles, and how to navigate the cultural landscape for authentic images.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {workshops.map((ws) => (
              <div key={ws.name} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  <p className="text-sm text-[var(--color-primary)] font-medium">{ws.location}</p>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {ws.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed flex-1">{ws.focus}</p>
                <div className="space-y-2 border-t border-[var(--border)] pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-3.5 h-3.5 text-text-muted" />
                    <span className="text-[var(--text-secondary)]">{ws.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Zap className="w-3.5 h-3.5 text-text-muted" />
                    <span className="text-[var(--text-secondary)]">{ws.price}</span>
                  </div>
                  <p className="text-xs text-text-muted">{ws.includes}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Info className="w-5 h-5 text-amber-600" />
                <p className="font-semibold text-amber-700 dark:text-amber-400 text-sm">Pricing Note</p>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                All workshop prices shown are starting rates in MAD and may vary by season, group size, and
                specific itinerary. Peak season (October-April) prices may be 20-30% higher. Private
                workshops for individuals or couples typically cost 2-3x the per-person group rate. Always
                confirm current pricing directly with the operator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         SECTION 14: ESSENTIAL TIPS SUMMARY
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              10 Essential Morocco Photography Tips
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { num: '01', tip: 'Wake before dawn. The 30 minutes before and after sunrise are consistently the most magical light in Morocco.' },
              { num: '02', tip: 'Shoot in RAW format. The extreme dynamic range (bright sky, deep medina shadows) needs the latitude that RAW provides.' },
              { num: '03', tip: 'Protect your gear. Ziplock bags, lens cloths, and a camera rain cover protect against sand, dust, and sea spray.' },
              { num: '04', tip: 'Learn five Arabic phrases. "Salam alaikum" (peace), "Shukran" (thank you), "Mumkin suwwar?" (may I photograph?), "Bezzaf" (beautiful), and "La" (no) cover 90% of situations.' },
              { num: '05', tip: 'Stay for blue hour. The 20-minute twilight period after sunset produces Morocco\'s most atmospheric color palettes.' },
              { num: '06', tip: 'Back up daily. Carry a portable SSD and back up every evening. Loss or theft happens, and Morocco\'s internet is not fast enough for cloud backup of RAW files.' },
              { num: '07', tip: 'Dress respectfully. Conservative dress (covered shoulders and knees) earns trust and opens doors to photography opportunities that a tank-top tourist will never see.' },
              { num: '08', tip: 'Use a prime lens for medina walks. A 35mm f/1.4 on full-frame is the perfect balance of width, speed, and inconspicuousness in tight alleys.' },
              { num: '09', tip: 'Photograph the in-between moments. The pauses between actions -- a vendor rearranging spices, a cat crossing a blue stairway, steam rising from a teapot -- are often more evocative than the "hero" shots.' },
              { num: '10', tip: 'Return to the same spot. Visiting a location at different times of day reveals how dramatically Moroccan light transforms a scene. Your best shot is rarely your first.' },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-bg-alt)]">
                <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-primary)]/30">
                  {item.num}
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
         RELATED PAGES
         ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--color-bg-alt)]">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
              Continue Exploring
            </h2>
            <p className="text-[var(--text-secondary)]">
              Dive deeper into Morocco&apos;s photographic possibilities
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: 'Top Photo Spots', href: '/photo-spots', icon: <Camera className="w-5 h-5" />, desc: '25 ranked locations' },
              { label: 'Photography Overview', href: '/photography', icon: <Image className="w-5 h-5" />, desc: 'General photo guide' },
              { label: 'Architecture Guide', href: '/architecture', icon: <Building className="w-5 h-5" />, desc: '1000 years of design' },
              { label: 'Chefchaouen', href: '/chefchaouen', icon: <MapPin className="w-5 h-5" />, desc: 'The Blue Pearl' },
              { label: 'Sahara Desert', href: '/sahara-desert', icon: <Compass className="w-5 h-5" />, desc: 'Desert adventures' },
              { label: 'Fes Guide', href: '/fes-guide', icon: <MapPin className="w-5 h-5" />, desc: 'Spiritual capital' },
              { label: 'Essaouira', href: '/essaouira', icon: <MapPin className="w-5 h-5" />, desc: 'Wind city charm' },
              { label: 'Marrakech', href: '/marrakech', icon: <MapPin className="w-5 h-5" />, desc: 'The Red City' },
            ].map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-4 flex items-center gap-3 group hover:border-[var(--color-primary)]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors shrink-0">
                  {page.icon}
                </div>
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-semibold text-sm text-[var(--text-primary)] group-hover:text-[var(--color-primary)] transition-colors">
                    {page.label}
                  </p>
                  <p className="text-xs text-text-muted">{page.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
