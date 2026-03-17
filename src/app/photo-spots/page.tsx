import type { Metadata } from 'next';
import {
  Camera,
  MapPin,
  Sun,
  Moon,
  Clock,
  Star,
  Mountain,
  Waves,
  ChevronRight,
  Info,
  Eye,
  Palette,
  Compass,
  Smartphone,
  Shield,
  Sunrise,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    'Top 25 Photography Spots in Morocco | Golden Hour Guide & Camera Tips | CityToursmorocco',
  description:
    'Discover the 25 best photography spots in Morocco from Marrakech to the Sahara. Expert golden hour guide, drone rules, gear recommendations, night photography tips, and Instagram-worthy locations across Chefchaouen, Fes, Essaouira, Tangier, and Ouarzazate.',
  keywords: [
    'Morocco photography spots',
    'best photo locations Morocco',
    'Chefchaouen photography',
    'Sahara desert photos',
    'Marrakech photo spots',
    'Morocco golden hour',
    'Jardin Majorelle photos',
    'Fes tannery photography',
    'Morocco drone rules',
    'Morocco camera gear',
    'night photography Morocco',
    'Erg Chebbi sunrise',
    'Ait Ben Haddou photos',
    'Morocco Instagram spots',
    'Essaouira photography',
    'Tangier viewpoints',
    'Bahia Palace photography',
    'Koutoubia sunset',
    'Morocco travel photography',
    'photography etiquette Morocco',
  ],
  openGraph: {
    title: 'Top 25 Photography Spots in Morocco | CityToursmorocco',
    description:
      'The ultimate guide to photographing Morocco: 25 iconic locations, golden hour times, gear tips, drone rules, and cultural etiquette for respectful travel photography.',
    url: 'https://citytoursmorocco.com/photo-spots',
    images: [
      {
        url: '/images/hero-photo-spots.webp',
        width: 1200,
        height: 630,
        alt: 'Stunning photography locations across Morocco - citytoursmorocco.com',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/photo-spots' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://citytoursmorocco.com/photo-spots#guide',
      headline:
        'Top 25 Photography Spots in Morocco - Complete Guide for Travel Photographers',
      description:
        'Comprehensive guide to the best photography locations in Morocco including Marrakech, Chefchaouen, Fes, the Sahara, Essaouira, Tangier, and Ouarzazate with golden hour times, gear tips, and cultural etiquette.',
      url: 'https://citytoursmorocco.com/photo-spots',
      publisher: {
        '@type': 'Organization',
        name: 'CityToursmorocco',
        url: 'https://citytoursmorocco.com',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Top 25 Photography Spots in Morocco',
      description:
        'The most photogenic locations across Morocco for travel photographers.',
      numberOfItems: 25,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Jardin Majorelle, Marrakech' },
        { '@type': 'ListItem', position: 2, name: 'Bahia Palace, Marrakech' },
        { '@type': 'ListItem', position: 3, name: 'Ben Youssef Madrasa, Marrakech' },
        { '@type': 'ListItem', position: 4, name: 'Koutoubia Mosque at Sunset, Marrakech' },
        { '@type': 'ListItem', position: 5, name: 'Jemaa el-Fnaa from Cafe de France, Marrakech' },
        { '@type': 'ListItem', position: 6, name: 'Blue Streets of Chefchaouen' },
        { '@type': 'ListItem', position: 7, name: 'Ras el-Maa Waterfall Steps, Chefchaouen' },
        { '@type': 'ListItem', position: 8, name: 'Spanish Mosque Viewpoint, Chefchaouen' },
        { '@type': 'ListItem', position: 9, name: 'Chouara Tannery from Above, Fes' },
        { '@type': 'ListItem', position: 10, name: 'Bou Inania Madrasa, Fes' },
        { '@type': 'ListItem', position: 11, name: 'Bab Boujloud (Blue Gate), Fes' },
        { '@type': 'ListItem', position: 12, name: 'Erg Chebbi Dunes at Sunrise, Sahara' },
        { '@type': 'ListItem', position: 13, name: 'Starry Night Over the Sahara' },
        { '@type': 'ListItem', position: 14, name: 'Camel Caravan Silhouettes, Sahara' },
        { '@type': 'ListItem', position: 15, name: 'Essaouira Ramparts and Harbor' },
        { '@type': 'ListItem', position: 16, name: 'Skala de la Ville, Essaouira' },
        { '@type': 'ListItem', position: 17, name: 'Cap Spartel Lighthouse, Tangier' },
        { '@type': 'ListItem', position: 18, name: 'Tangier Kasbah Panorama' },
        { '@type': 'ListItem', position: 19, name: 'Ait Ben Haddou Ksar, Ouarzazate' },
        { '@type': 'ListItem', position: 20, name: 'Atlas Film Studios, Ouarzazate' },
        { '@type': 'ListItem', position: 21, name: 'Todra Gorge, Tinghir' },
        { '@type': 'ListItem', position: 22, name: 'Ouzoud Waterfalls, Atlas Mountains' },
        { '@type': 'ListItem', position: 23, name: 'Hassan II Mosque, Casablanca' },
        { '@type': 'ListItem', position: 24, name: 'Dades Valley Road of a Thousand Kasbahs' },
        { '@type': 'ListItem', position: 25, name: 'Legzira Beach Arches, Sidi Ifni' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do I need a permit to photograph in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No general permit is required for personal photography in public spaces. However, some historic sites charge a camera fee (typically from 10 MAD). Drone photography requires authorization from the Moroccan Civil Aviation Authority (Direction Generale de lAviation Civile). Military installations, police stations, and royal palaces must never be photographed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time of year for photography in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'October through April offers the best light and most comfortable temperatures. March and April bring wildflowers to the Atlas Mountains and valleys. October and November provide warm golden light with clear skies. Winter (December-February) is ideal for Sahara photography with crisp air and dramatic cloud formations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I photograph people in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Always ask permission before photographing individuals. Many Moroccans are happy to be photographed but it is culturally important to ask first. In markets and tourist areas, some people may expect a small tip (from 5 MAD) for posing. Never photograph people who decline, and be especially respectful around women and religious sites.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are drones allowed in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Drones are heavily regulated in Morocco. You must obtain prior authorization from the Direction Generale de lAviation Civile (DGAC). Flying without permission can result in confiscation of equipment and fines. Many tourists have had drones seized at customs. Drones are completely prohibited near airports, military zones, royal palaces, and in most medinas.',
          },
        },
        {
          '@type': 'Question',
          name: 'What camera gear should I bring to Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A versatile zoom lens (24-70mm or 24-105mm) covers most situations. Bring a wide-angle lens (16-35mm) for architecture and landscapes, and a telephoto (70-200mm) for details and candid street shots from a respectful distance. A sturdy tripod is essential for night photography and golden hour shots. Dust protection gear is critical for the Sahara.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where are the best sunrise and sunset spots in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Top sunrise spots include Erg Chebbi dunes in the Sahara, Ait Ben Haddou, and the Spanish Mosque above Chefchaouen. Best sunset locations are Koutoubia Mosque in Marrakech, the Essaouira ramparts, Jemaa el-Fnaa rooftop cafes, Cap Spartel in Tangier, and riad rooftops throughout the medinas.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   PHOTO SPOT DATA
   ═══════════════════════════════════════════════════════════════ */

interface PhotoSpot {
  rank: number;
  name: string;
  city: string;
  description: string;
  bestTime: string;
  proTip: string;
  gpsHint: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
}

const marrakechSpots: PhotoSpot[] = [
  {
    rank: 1,
    name: 'Jardin Majorelle',
    city: 'Marrakech',
    description:
      'The iconic cobalt-blue walls and vibrant yellow Art Deco building designed by Jacques Majorelle in the 1920s, later restored by Yves Saint Laurent. The garden offers an extraordinary palette of saturated blues, yellows, and greens against terracotta pathways and lush tropical plantings. Every corner reveals a different composition: blue walls draped in bougainvillea, rows of towering cacti, reflective pools surrounded by bamboo groves, and ceramic pots in the signature Majorelle blue that has become synonymous with Marrakech itself.',
    bestTime: 'Early morning (opening time at 8 AM) for soft light and minimal crowds. The blue walls photograph best in diffused morning light rather than harsh midday sun.',
    proTip:
      'Arrive exactly at opening to have 20-30 minutes of relatively empty pathways. Focus on the contrast between the blue walls and the yellow building. The reflecting pool near the entrance creates stunning symmetrical compositions on calm mornings.',
    gpsHint: 'Rue Yves Saint Laurent, Gueliz district',
    difficulty: 'Easy',
  },
  {
    rank: 2,
    name: 'Bahia Palace',
    city: 'Marrakech',
    description:
      'A 19th-century masterpiece of Moroccan decorative arts with intricately painted cedar ceilings, zellige tilework floors, and carved stucco walls surrounding serene marble courtyards. The palace offers an unending sequence of photogenic rooms, each with different geometric patterns and color schemes. The large central courtyard, paved in white marble and surrounded by rooms with painted wooden doors, is particularly striking when the morning light rakes across the tilework at low angles.',
    bestTime: 'Morning light (9-11 AM) creates dramatic shadows across the tilework and illuminates the painted ceilings through the courtyards.',
    proTip:
      'The small riad courtyard at the back of the complex, with its central fountain surrounded by orange trees, is often overlooked by tour groups. The zellige floor details reward close-up macro photography. Look up constantly as the painted cedar ceilings are among the finest in Morocco.',
    gpsHint: 'Rue Riad Zitoun el Jdid, Medina',
    difficulty: 'Easy',
  },
  {
    rank: 3,
    name: 'Ben Youssef Madrasa',
    city: 'Marrakech',
    description:
      'The largest theological college in Morocco, dating to the 16th century, with a breathtaking central courtyard that is one of the most photographed spaces in the country. The symmetry of the courtyard, with its large marble ablution basin reflecting the ornate walls, offers perfect compositional opportunities. Three layers of decoration cover every surface: zellige tilework below, carved stucco in the middle, and painted cedar above, creating a visual richness that can take hours to properly document.',
    bestTime: 'Late morning when sunlight enters the courtyard creating contrast between illuminated walls and shadowed archways.',
    proTip:
      'Use the central pool as a mirror for reflections of the ornate walls. The upstairs student cells provide elevated angles looking down into the courtyard. A wide-angle lens (16-24mm) is essential to capture the courtyard in a single frame.',
    gpsHint: 'Kaat Benahid, off Rue Assouel, Medina',
    difficulty: 'Easy',
  },
  {
    rank: 4,
    name: 'Koutoubia Mosque at Sunset',
    city: 'Marrakech',
    description:
      'The 77-meter minaret of the Koutoubia is the defining symbol of Marrakech and the masterwork of Almohad architecture. At sunset, the sandstone tower glows in warm amber and rose tones against a sky that shifts from gold to deep purple. The surrounding gardens, with their palm trees and rose beds, provide excellent foreground elements. The minaret is visible from countless vantage points across the city, but the gardens directly adjacent offer the most intimate perspective.',
    bestTime: 'Sunset (30 minutes before to 20 minutes after). The warm light transforms the sandstone and the sky provides a naturally dramatic backdrop.',
    proTip:
      'Position yourself in the gardens to the south of the mosque for compositions that include palm trees as foreground framing elements. The minaret looks spectacular shot from across the gardens with a medium telephoto lens (70-100mm) to compress the perspective. Stay for the blue hour after sunset when the mosque is illuminated.',
    gpsHint: 'Avenue Mohammed V, near Jemaa el-Fnaa',
    difficulty: 'Easy',
  },
  {
    rank: 5,
    name: 'Jemaa el-Fnaa from Cafe de France Rooftop',
    city: 'Marrakech',
    description:
      'The main square of Marrakech transforms throughout the day from a quiet morning market into one of the most extraordinary public spectacles on earth. From the rooftop terrace of Cafe de France (or neighboring rooftop restaurants), you get a sweeping elevated view of the entire square with the Koutoubia minaret rising in the background. At dusk, hundreds of food stalls light up, steam rises from grills, and the square becomes a mesmerizing tapestry of light, smoke, and human activity that is utterly unique in the world.',
    bestTime: 'Late afternoon through blue hour (5-7 PM in winter, 6-8 PM in summer) for the transition from daylight to the magical illuminated evening scene.',
    proTip:
      'Secure a rooftop table at least 30 minutes before sunset. A medium zoom (24-70mm) captures both wide panoramas and details of individual performers below. Shoot both horizontal panoramas and tight vertical compositions of the minaret rising above the steam and lights. Long exposures during blue hour create beautiful light trails from moving people.',
    gpsHint: 'Cafe de France, southeast corner of Jemaa el-Fnaa',
    difficulty: 'Easy',
  },
];

const chefchaouenSpots: PhotoSpot[] = [
  {
    rank: 6,
    name: 'Blue-Washed Streets of the Medina',
    city: 'Chefchaouen',
    description:
      'The entire old medina of Chefchaouen is painted in varying shades of blue, from powder blue to deep cobalt, creating one of the most visually distinctive urban environments on the planet. The most photogenic streets are found in the heart of the medina near Place Outa el Hammam, along the stepped alleyways that climb toward the kasbah, and in the residential quarter near Rue Targui. Every turn reveals a new composition: blue walls with terracotta pots of geraniums, arched doorways painted in contrasting blue tones, and narrow stairways that climb between buildings like passages in a dream.',
    bestTime: 'Early morning (7-9 AM) before tour groups arrive, or late afternoon (4-6 PM) when the western sun illuminates the blue walls with warm golden light.',
    proTip:
      'The most famous blue stairway is on Rue Targui near the intersection with Rue Kharrazin. Look for the distinctive blue steps with flower pots on either side. Wear neutral clothing to avoid color clashing in reflections. Wet cobblestones after rain or morning washing intensify the blue tones dramatically.',
    gpsHint: 'Rue Targui and surrounding alleyways, Medina',
    difficulty: 'Easy',
  },
  {
    rank: 7,
    name: 'Steps Near Ras el-Maa Waterfall',
    city: 'Chefchaouen',
    description:
      'At the eastern edge of the medina, where the Ras el-Maa spring emerges from the mountainside, a series of blue-and-white stepped pathways lead down to a small waterfall where local women wash clothes and children play. This area offers a more authentic, lived-in perspective of Chefchaouen compared to the heavily photographed tourist streets. The combination of flowing water, blue walls, mountain backdrop, and daily life creates naturally compelling compositions.',
    bestTime: 'Mid-morning (9-11 AM) when the area is active with locals and the light is soft and directional from the east.',
    proTip:
      'Continue past the waterfall on the path that leads up toward the Spanish Mosque for increasingly panoramic views back toward the medina. The bridge over the stream provides a natural frame for the blue houses climbing the hillside behind. Bring a medium telephoto to capture candid moments of daily life from a respectful distance.',
    gpsHint: 'Eastern edge of the medina, follow signs to Ras el-Maa',
    difficulty: 'Moderate',
  },
  {
    rank: 8,
    name: 'Spanish Mosque Viewpoint at Sunset',
    city: 'Chefchaouen',
    description:
      'A 20-minute uphill hike from the medina leads to an abandoned Spanish mosque perched on a hill overlooking the entire town. This is the definitive viewpoint for photographing Chefchaouen: the blue medina cascading down the valley floor, framed by the Rif Mountains rising dramatically behind. At sunset, the mountains turn purple and the blue town takes on a warm golden glow that is utterly magical. This is one of the most spectacular sunset viewpoints in all of Morocco.',
    bestTime: 'Sunset (arrive 45 minutes before to secure a good position and photograph the changing light). Also excellent at sunrise for a completely different mood with mist in the valley.',
    proTip:
      'The hike is along an obvious trail starting from the Ras el-Maa area. Bring a tripod for sharp sunset and blue hour shots. A 24-70mm zoom covers both the wide panoramic view and details of the medina below. The ruined mosque itself makes an interesting foreground element. Stay 30 minutes after sunset for the blue hour when the town lights begin to twinkle.',
    gpsHint: 'Hill northeast of the medina, trail from Ras el-Maa',
    difficulty: 'Moderate',
  },
];

const fesSpots: PhotoSpot[] = [
  {
    rank: 9,
    name: 'Chouara Tannery from Above',
    city: 'Fes',
    description:
      'The medieval Chouara Tannery is one of the most iconic visual spectacles in Morocco. From the surrounding leather shops on the upper floors, you look down on a honeycomb of stone vats filled with vivid dyes in white, saffron, amber, rust, and indigo. Workers move between the vats, kneading hides by foot in a process unchanged since the 11th century. The circular vats create extraordinary geometric patterns when viewed from above, and the colors shift throughout the day as dyes are mixed and changed.',
    bestTime: 'Late morning (10 AM - 12 PM) when the sun is overhead and illuminates the dye vats most evenly. The tannery workers are most active during this window.',
    proTip:
      'Access is free through the leather shops that ring the tannery on the upper floors, though shopkeepers may expect you to browse their wares. The terrace at Terrasse de Tanneurs offers the widest view. A telephoto lens (70-200mm) captures intimate details of workers and individual vats, while a wide-angle captures the full mosaic of colors. Accept the sprig of mint offered to counter the powerful smell.',
    gpsHint: 'Hay Lablida, Fes el Bali (access through leather shops)',
    difficulty: 'Easy',
  },
  {
    rank: 10,
    name: 'Bou Inania Madrasa',
    city: 'Fes',
    description:
      'Widely considered the most beautiful building in Morocco, this 14th-century Marinid theological college features the most exquisite decorative surfaces in the Islamic world. Every centimeter of wall space is covered with three layers of ornament: geometric zellige tilework below, floral carved stucco above, and painted cedar wood at the ceiling. The marble courtyard with its central ablution fountain creates perfect reflections of the ornate walls, and the play of light through the courtyard changes the character of the space throughout the day.',
    bestTime: 'Mid-morning (10-11 AM) when angled sunlight enters the courtyard and creates dramatic contrast between illuminated and shadowed surfaces.',
    proTip:
      'Use a wide-angle lens to capture the full courtyard, then switch to a macro or close-up lens for the extraordinary zellige and stucco details. The symmetry of the courtyard rewards careful centering of your composition. The upstairs gallery provides a rare elevated perspective looking down into the courtyard.',
    gpsHint: 'Talaa Kebira, Fes el Bali',
    difficulty: 'Easy',
  },
  {
    rank: 11,
    name: 'Bab Boujloud (The Blue Gate)',
    city: 'Fes',
    description:
      'The grand entrance to the Fes el Bali medina is one of the most recognizable landmarks in Morocco. The ornamental gate features intricate blue zellige tilework on the exterior face (facing the new city) and green zellige on the interior face (facing the medina). The massive horseshoe arch frames views deep into the bustling medina, with the minaret of the Bou Inania Madrasa visible through the arch. The gate is a study in color, geometry, and the dramatic transition between the modern and medieval worlds.',
    bestTime: 'Late afternoon when the western sun illuminates the blue exterior face. The interior green face is best lit in the morning.',
    proTip:
      'Photograph the gate from both sides to capture the blue-to-green color change. Use the arch as a natural frame for the medina scene visible through it. At dusk, the gate is illuminated and creates dramatic compositions against the darkening sky. Include pedestrians for scale as the gate is enormous.',
    gpsHint: 'Place Boujloud, entrance to Fes el Bali',
    difficulty: 'Easy',
  },
];

const saharaSpots: PhotoSpot[] = [
  {
    rank: 12,
    name: 'Erg Chebbi Dunes at Sunrise',
    city: 'Merzouga, Sahara',
    description:
      'The towering orange dunes of Erg Chebbi, reaching heights of 150 meters, are the most photogenic desert landscape in Morocco. At sunrise, the interplay of light and shadow across the sinuous dune ridges creates an abstract landscape of warm golds, deep shadows, and razor-sharp ridge lines. The dunes appear to glow from within as the first light strikes them, shifting from deep purple through amber to brilliant gold in the space of minutes. The sheer scale and pristine wind-sculpted forms make Erg Chebbi one of the most photogenic natural landscapes on earth.',
    bestTime: 'Sunrise (wake at 4:30-5 AM for the pre-dawn hike to the dune crest). The 30 minutes before and after sunrise produce the most dramatic light and shadows.',
    proTip:
      'Climb the dunes the evening before to scout your sunrise position. The western face of the dunes catches the first golden light. Use footprints and ripple patterns as leading lines in your compositions. A telephoto lens (70-200mm) compresses the dune layers into abstract graphic compositions. Protect your camera from sand with a rain cover or plastic bag.',
    gpsHint: 'Erg Chebbi, near Merzouga, 55 km from Erfoud',
    difficulty: 'Challenging',
  },
  {
    rank: 13,
    name: 'Starry Night Over the Sahara',
    city: 'Merzouga, Sahara',
    description:
      'The Sahara Desert offers some of the darkest skies accessible from a tourism infrastructure, making it a world-class destination for astrophotography. The Milky Way arcs dramatically overhead from the desert camps near Merzouga, and the total absence of light pollution reveals thousands of stars invisible from any city. The dune silhouettes against the star-filled sky create compositions of extraordinary beauty and scale that remind the viewer of their place in the cosmos.',
    bestTime: 'New moon periods provide the darkest skies. The Milky Way core is best visible from April through October. Peak shooting hours are 10 PM to 3 AM.',
    proTip:
      'A fast wide-angle lens (f/2.8 or faster, 14-24mm) is essential. Use a sturdy tripod pushed firmly into the sand. Shoot at ISO 3200-6400 with 15-25 second exposures. Include a tent, camel, or person with a headlamp as a foreground element to provide scale. A star tracker mount dramatically improves results for serious astrophotographers.',
    gpsHint: 'Desert camps east of Merzouga, away from town lights',
    difficulty: 'Challenging',
  },
  {
    rank: 14,
    name: 'Camel Caravan Silhouettes',
    city: 'Merzouga, Sahara',
    description:
      'The classic Sahara image: a line of camels and their riders silhouetted against a blazing sunset or sunrise sky, their elongated shadows stretching across the golden dune surface. Every desert tour from Merzouga includes a camel trek to the overnight camps, providing multiple opportunities to capture this timeless scene. The key is positioning yourself to the side of the caravan so the camels are profiled against the sky rather than lost against the dune behind them.',
    bestTime: 'Late afternoon camel treks (departing around 4-5 PM) provide the best silhouette opportunities against the setting sun.',
    proTip:
      'Ask your guide to position you ahead of or to the side of the caravan rather than riding in line. A telephoto lens (100-200mm) compresses the caravan and creates the iconic layered silhouette effect. Shoot against the sun for pure silhouettes, or at a slight angle for warm side-lighting that reveals texture in the camel fur and robes. The long shadows cast on the dunes in the last 20 minutes of light are incredibly photogenic.',
    gpsHint: 'Camel trek routes departing from Merzouga hotels',
    difficulty: 'Moderate',
  },
];

const essaouiraSpots: PhotoSpot[] = [
  {
    rank: 15,
    name: 'Essaouira Ramparts and Harbor',
    city: 'Essaouira',
    description:
      'The 18th-century Portuguese fortifications of Essaouira offer sweeping views along the Atlantic coast, with rows of bronze cannons pointing out to sea and the fishing harbor filled with blue wooden boats below. The warm sandstone ramparts against the deep blue Atlantic create a natural color palette of gold and blue that is immediately striking. Seagulls wheel overhead and waves crash against the rocks below, adding movement and drama to every frame.',
    bestTime: 'Late afternoon (3-5 PM) when the western sun bathes the ramparts in golden light. Sunset provides dramatic skies over the ocean.',
    proTip:
      'Walk the full length of the ramparts from the Skala de la Ville to the Skala du Port for different perspectives. The cannons make excellent foreground elements. The view looking back toward the medina from the harbor jetty, with fishing boats in the foreground and the fortified walls rising behind, is one of the classic compositions of Morocco.',
    gpsHint: 'Skala de la Kasbah, along the ocean-facing walls',
    difficulty: 'Easy',
  },
  {
    rank: 16,
    name: 'Skala de la Ville',
    city: 'Essaouira',
    description:
      'The dramatic sea bastion of Essaouira, featured in Game of Thrones as the city of Astapor, offers one of the most cinematic locations on the Moroccan coast. The long gallery of arched openings, each framing a bronze cannon pointing toward the Iles Purpuraires offshore, creates a rhythmic architectural composition with the crashing Atlantic visible through each arch. The weathered stone, the patina of centuries of salt spray, and the dramatic ocean backdrop make this one of the most photogenic fortifications in North Africa.',
    bestTime: 'Morning for soft front-lighting on the cannons and arches. Late afternoon for dramatic side-lighting and golden tones.',
    proTip:
      'Use the repeating arches as a natural leading line drawing the eye through the frame. Position a cannon in the foreground with the row of arches receding into the background for depth. During rough seas, waves crashing against the rocks below the bastion add spectacular drama. A wide-angle lens (16-24mm) captures the full sweep of the gallery.',
    gpsHint: 'North bastion, accessible from the medina near Rue de la Skala',
    difficulty: 'Easy',
  },
];

const tangierSpots: PhotoSpot[] = [
  {
    rank: 17,
    name: 'Cap Spartel Lighthouse',
    city: 'Tangier',
    description:
      'Standing at the northwestern tip of Africa where the Atlantic Ocean meets the Mediterranean Sea, Cap Spartel offers panoramic views of two seas meeting in a visible line of contrasting blue tones. The historic lighthouse, built in 1864 and set against rugged coastal cliffs, provides a dramatic subject with the infinite ocean horizon behind. On clear days, the coast of Spain is visible across the Strait of Gibraltar, creating compositions that capture the meeting point of two continents.',
    bestTime: 'Sunset for spectacular skies over the Atlantic. The lighthouse is west-facing, making it ideally positioned for sunset photography.',
    proTip:
      'Arrive early enough to explore the coastal paths leading to cliff-edge viewpoints below the lighthouse. A polarizing filter dramatically enhances the contrast between the Atlantic and Mediterranean waters. The nearby Caves of Hercules offer additional photographic opportunities with their famous Africa-shaped opening to the sea.',
    gpsHint: 'Cap Spartel, 14 km west of Tangier center',
    difficulty: 'Easy',
  },
  {
    rank: 18,
    name: 'Tangier Kasbah Panorama',
    city: 'Tangier',
    description:
      'The historic kasbah perched on the highest point of Tangier offers commanding views over the medina rooftops, the bustling port, and across the Strait of Gibraltar to the mountains of southern Spain. The white-and-blue painted houses of the old town cascade down the hillside toward the Mediterranean in a photogenic tumble of flat roofs, satellite dishes, and minarets. From the Place de la Kasbah, the panorama encompasses both the ancient medina and the modern city, with the sea providing a unifying backdrop.',
    bestTime: 'Morning light from the east illuminates the white buildings of the kasbah beautifully. The strait is typically clearest in the morning hours.',
    proTip:
      'The terrace of the Kasbah Museum (Dar el-Makhzen) provides the highest public viewpoint. For a wider panorama, walk along the outer walls of the kasbah to the Borj Nord viewpoint. Include the distinctive green-roofed minarets as visual anchors in your compositions. A telephoto lens can pull in the Spanish coastline on clear days.',
    gpsHint: 'Place de la Kasbah, upper medina',
    difficulty: 'Easy',
  },
];

const ouarzazateSpots: PhotoSpot[] = [
  {
    rank: 19,
    name: 'Ait Ben Haddou Ksar',
    city: 'Ouarzazate',
    description:
      'This UNESCO World Heritage Site is a fortified village of dramatic earthen kasbahs rising in tiers above the Ounila River, set against an arid mountain backdrop. The rammed earth towers and walls glow in warm ochre, amber, and rose tones that shift throughout the day. Used as a filming location for Gladiator, Game of Thrones, Lawrence of Arabia, and dozens of other productions, Ait Ben Haddou is arguably the single most photogenic human-made structure in Morocco. The reflection of the ksar in the river during the wet season is one of the iconic images of North Africa.',
    bestTime: 'Sunrise lights the eastern face of the ksar with warm golden light. Late afternoon produces dramatic shadows that emphasize the three-dimensional structure of the towers and walls.',
    proTip:
      'Cross the river (stepping stones or the footbridge) to photograph from below for the most dramatic perspective with the ksar towering above. Climb to the summit of the ksar for panoramic views of the surrounding valley and distant Atlas Mountains. The opposite bank provides the classic postcard view with the river in the foreground. A wide-angle lens captures the full sweep while a telephoto isolates individual towers and architectural details.',
    gpsHint: '32 km northwest of Ouarzazate on the N10',
    difficulty: 'Moderate',
  },
  {
    rank: 20,
    name: 'Atlas Film Studios',
    city: 'Ouarzazate',
    description:
      'The largest film studio in Africa, where sets from Gladiator, Kingdom of Heaven, Asterix, and countless other productions stand in various states of preservation in the desert landscape. The surreal juxtaposition of ancient Egyptian temples, Tibetan monasteries, and medieval European castles against the barren Moroccan desert creates uniquely photogenic scenes found nowhere else. The studio offers a fascinating look at the intersection of cinema and the Moroccan landscape that has doubled for virtually every desert setting in film history.',
    bestTime: 'Morning for front-lit views of the outdoor sets. The harsh midday light actually works well here, emphasizing the surreal quality of film sets in the desert.',
    proTip:
      'The outdoor sets are more photogenic than the indoor studios. Look for compositions that emphasize the artificiality of the sets against the genuine desert backdrop. The Egyptian temple set is particularly striking at sunset. Bring a wide-angle lens to capture the scale of the larger sets.',
    gpsHint: '5 km west of Ouarzazate center on the N10',
    difficulty: 'Easy',
  },
];

const bonusSpots: PhotoSpot[] = [
  {
    rank: 21,
    name: 'Todra Gorge',
    city: 'Tinghir',
    description:
      'A dramatic canyon where 300-meter limestone walls narrow to just 10 meters apart, creating a cathedral-like natural space flooded with reflected light. The sheer scale of the vertical rock faces, the ribbon of sky visible above, and the river flowing through the narrow gap create awe-inspiring compositions. The warm orange and pink tones of the limestone contrast beautifully with the deep blue sky visible in the narrow strip above.',
    bestTime: 'Late morning (10 AM - 12 PM) when sunlight penetrates the narrow gorge and illuminates the rock walls with warm reflected light.',
    proTip:
      'Walk past the main tourist area at the narrowest point to find more secluded compositions further into the gorge. Include people or vehicles for scale to emphasize the enormous height of the walls. A wide-angle lens pointed straight up captures the vertiginous vertical walls converging toward the sky.',
    gpsHint: '15 km north of Tinghir, end of the paved road',
    difficulty: 'Moderate',
  },
  {
    rank: 22,
    name: 'Ouzoud Waterfalls',
    city: 'Atlas Mountains',
    description:
      'The highest waterfalls in North Africa, cascading 110 meters over red cliffs surrounded by olive groves and inhabited by Barbary macaque monkeys. Multiple viewing platforms and trails provide different perspectives of the three-tiered falls, from the misty base pool to dramatic overhead viewpoints. The red rock, green vegetation, white water, and rainbow mist create a vibrant natural palette unique in Morocco.',
    bestTime: 'Mid-morning to early afternoon when sunlight creates rainbows in the mist at the base of the falls. Spring (March-May) for maximum water flow.',
    proTip:
      'Descend the trail to the base of the falls for the most dramatic perspective looking up at the full cascade. The rainbow that forms in the mist during sunny mornings adds a spectacular element. Use a slow shutter speed (1/4 to 2 seconds) with a tripod and ND filter to create silky water effects. The Barbary macaques in the surrounding trees make charming secondary subjects.',
    gpsHint: '150 km northeast of Marrakech, near Ouzoud village',
    difficulty: 'Moderate',
  },
  {
    rank: 23,
    name: 'Hassan II Mosque',
    city: 'Casablanca',
    description:
      'The largest mosque in Africa and the tallest religious structure in the world, with a 210-meter minaret visible from across the city. Built on a promontory over the Atlantic Ocean, the mosque offers extraordinary compositions combining monumental Islamic architecture with the crashing waves of the Atlantic. The vast esplanade surrounding the mosque, paved in granite and marble, reflects the building and sky in stunning patterns after rain or when wet from ocean spray.',
    bestTime: 'Sunset for dramatic skies behind the minaret. Blue hour for the illuminated mosque reflected in the wet esplanade.',
    proTip:
      'The corniche walkway to the south of the mosque provides the best angle for capturing the minaret with the ocean in the background. After rain, the wet esplanade creates mirror-like reflections of the mosque that are breathtaking. A wide-angle lens (14-24mm) is essential to capture the enormous scale. Join a guided interior tour for access to the stunning prayer hall and hammam.',
    gpsHint: 'Boulevard de la Corniche, Casablanca',
    difficulty: 'Easy',
  },
  {
    rank: 24,
    name: 'Dades Valley - Road of a Thousand Kasbahs',
    city: 'Between Ouarzazate and Tinghir',
    description:
      'The N10 highway through the Dades Valley passes through one of the most visually stunning landscapes in Morocco: a succession of crumbling earthen kasbahs and ksour set against the dramatic backdrop of the High Atlas Mountains. The valley floor is a patchwork of green oases and palm groves contrasting with the arid red-earth hillsides. Every few kilometers, another photogenic kasbah appears, and the famous Dades Gorge road with its dramatic switchbacks offers vertiginous aerial-perspective views.',
    bestTime: 'Morning and late afternoon light emphasize the warm earth tones. The switchback road is most dramatically lit in the late afternoon.',
    proTip:
      'Stop at the famous Dades Gorge switchbacks (about 25 km north of Boumalne Dades) for the classic overhead view of the winding road. The kasbahs near the village of Skoura are among the best-preserved. Rose Valley between El Kelaa M Gouna and Boumalne Dades is blanketed in pink roses during April and May.',
    gpsHint: 'N10 highway between Ouarzazate and Tinghir',
    difficulty: 'Moderate',
  },
  {
    rank: 25,
    name: 'Legzira Beach Arches',
    city: 'Sidi Ifni',
    description:
      'Dramatic natural stone arches carved by millennia of ocean erosion rise from the golden sand of Legzira Beach. Though the largest arch partially collapsed in 2016, the remaining formations are still spectacular, creating natural frames for the Atlantic sunset. The red-orange stone against the blue ocean and golden sand creates a warm color palette. At low tide, the beach extends dramatically and reflections in the wet sand double the visual impact of the arches.',
    bestTime: 'Sunset at low tide for the combination of warm light on the red arches, reflections in the wet sand, and dramatic ocean skies.',
    proTip:
      'Check tide tables and visit at low tide for maximum beach access and the best reflections. The arch frames the sunset perfectly during certain months. Arrive well before sunset to explore the caves and rock formations along the base of the cliffs. A wide-angle lens captures both the arch and its reflection.',
    gpsHint: '12 km north of Sidi Ifni on the coast road',
    difficulty: 'Moderate',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GOLDEN HOUR DATA
   ═══════════════════════════════════════════════════════════════ */

interface GoldenHourSeason {
  season: string;
  months: string;
  sunrise: string;
  sunset: string;
  goldenMorning: string;
  goldenEvening: string;
  notes: string;
}

const goldenHourData: GoldenHourSeason[] = [
  {
    season: 'Winter',
    months: 'December - February',
    sunrise: '7:15 - 7:30 AM',
    sunset: '5:30 - 6:00 PM',
    goldenMorning: '7:00 - 8:00 AM',
    goldenEvening: '4:45 - 5:45 PM',
    notes:
      'Shortest days but often the most dramatic skies. Crisp air in the Sahara produces exceptionally clear conditions. Snow on the Atlas Mountains creates unique contrast with desert landscapes below.',
  },
  {
    season: 'Spring',
    months: 'March - May',
    sunrise: '6:15 - 7:00 AM',
    sunset: '6:30 - 7:30 PM',
    goldenMorning: '6:00 - 7:15 AM',
    goldenEvening: '5:45 - 7:15 PM',
    notes:
      'The best overall season for photography. Wildflowers carpet the Atlas valleys, the air is clear, and the light has a warm quality. Extended golden hours provide generous shooting windows. Rose Valley blooms in April and May.',
  },
  {
    season: 'Summer',
    months: 'June - August',
    sunrise: '6:00 - 6:30 AM',
    sunset: '7:30 - 8:00 PM',
    goldenMorning: '5:45 - 6:45 AM',
    goldenEvening: '6:45 - 7:45 PM',
    notes:
      'Longest days but harsh midday light. Early morning and late evening shooting is essential. Heat haze can affect telephoto shots in the Sahara and southern regions. Coastal cities like Essaouira often have atmospheric fog.',
  },
  {
    season: 'Autumn',
    months: 'September - November',
    sunrise: '6:30 - 7:15 AM',
    sunset: '5:45 - 7:00 PM',
    goldenMorning: '6:15 - 7:30 AM',
    goldenEvening: '5:00 - 6:45 PM',
    notes:
      'Excellent photography conditions with warm golden light and comfortable temperatures. October offers some of the clearest skies of the year. Date palm harvests add cultural interest to oasis photography. Autumn colors appear in the Atlas cedar forests.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   GEAR RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

interface GearItem {
  category: string;
  recommendation: string;
  whyItMatters: string;
}

const gearRecommendations: GearItem[] = [
  {
    category: 'Versatile Zoom Lens',
    recommendation: '24-70mm f/2.8 or 24-105mm f/4',
    whyItMatters:
      'Covers the vast majority of travel photography situations from architecture to street scenes. The 24mm end captures building interiors and wide vistas, while 70-105mm isolates details and provides flattering portraits. This single lens can handle 80% of your Morocco photography.',
  },
  {
    category: 'Wide-Angle Lens',
    recommendation: '16-35mm f/2.8 or 14-24mm f/2.8',
    whyItMatters:
      'Essential for capturing the grand scale of mosques, madrasas, and palace courtyards. The tight alleyways of medinas often require ultra-wide focal lengths. Also critical for astrophotography in the Sahara and dramatic landscape compositions at Erg Chebbi and Todra Gorge.',
  },
  {
    category: 'Telephoto Lens',
    recommendation: '70-200mm f/2.8 or f/4',
    whyItMatters:
      'Allows respectful candid photography from a distance in markets and medinas. Compresses layers of Sahara dunes into abstract compositions. Captures architectural details on minarets and walls that are too high or far to reach. Essential for wildlife at Ouzoud Falls.',
  },
  {
    category: 'Tripod',
    recommendation: 'Carbon fiber travel tripod (under 1.5 kg)',
    whyItMatters:
      'Required for sharp images during golden hour, blue hour, and night photography. Essential for the Sahara star shots and long-exposure waterfall photography at Ouzoud. Carbon fiber resists corrosion from sand and salt air in coastal cities.',
  },
  {
    category: 'Dust Protection',
    recommendation: 'Camera rain cover, lens cleaning kit, sealed bags',
    whyItMatters:
      'Sahara sand is the number one gear threat in Morocco. Fine desert sand can penetrate camera seals and scratch sensor elements. Carry microfiber cloths, a rocket blower, and sealed plastic bags for lens changes. A camera rain cover doubles as dust protection during sandstorms.',
  },
  {
    category: 'Filters',
    recommendation: 'Circular polarizer, 3-stop ND filter, graduated ND',
    whyItMatters:
      'A polarizer deepens blue skies, reduces glare on zellige tilework and water surfaces, and is essential at Cap Spartel. An ND filter enables slow shutter speeds for silky water at Ouzoud Falls. A graduated ND balances bright skies with shadowed medina streets.',
  },
  {
    category: 'Memory and Power',
    recommendation: 'Multiple high-speed cards, 2-3 spare batteries, portable charger',
    whyItMatters:
      'Sahara desert camps have limited or no electricity. Cold desert nights drain batteries faster than normal. Bring more storage than you think you need as the photographic opportunities in Morocco are endless and you will shoot more than expected.',
  },
  {
    category: 'Smartphone Considerations',
    recommendation: 'Latest generation flagship with RAW capability',
    whyItMatters:
      'Modern smartphones produce excellent travel photography in good light. RAW shooting apps allow post-processing flexibility. The wide-angle and telephoto lenses on flagship phones cover a useful range. A smartphone is also more discreet for street photography in sensitive situations.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NIGHT PHOTOGRAPHY LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

interface NightSpot {
  location: string;
  region: string;
  subject: string;
  difficulty: string;
  tip: string;
}

const nightPhotoSpots: NightSpot[] = [
  {
    location: 'Erg Chebbi Dunes',
    region: 'Sahara',
    subject: 'Milky Way over sand dunes',
    difficulty: 'Advanced',
    tip: 'New moon periods only. ISO 3200-6400, 15-20 second exposures at f/2.8. Use a dune ridge as a leading line toward the galactic core.',
  },
  {
    location: 'Jemaa el-Fnaa',
    region: 'Marrakech',
    subject: 'Illuminated food stalls and street life',
    difficulty: 'Intermediate',
    tip: 'Shoot from rooftop cafes during blue hour for the most atmospheric results. Long exposures blur the crowd into ghostly streams of movement.',
  },
  {
    location: 'Hassan II Mosque',
    region: 'Casablanca',
    subject: 'Illuminated mosque with ocean reflections',
    difficulty: 'Intermediate',
    tip: 'The mosque is dramatically lit after dark. The wet esplanade after rain or high tide creates mirror reflections. Tripod essential.',
  },
  {
    location: 'Chefchaouen Medina',
    region: 'Rif Mountains',
    subject: 'Blue streets under warm street lighting',
    difficulty: 'Beginner',
    tip: 'The blue walls take on a magical quality under the warm sodium street lights. Late evening (9-10 PM) when streets are quiet produces moody, atmospheric images.',
  },
  {
    location: 'Ait Ben Haddou',
    region: 'Ouarzazate',
    subject: 'Star trails over the ksar',
    difficulty: 'Advanced',
    tip: 'Minimal light pollution allows excellent star trails. Stack 30-second exposures over 1-2 hours with the ksar silhouette in the foreground.',
  },
  {
    location: 'Essaouira Harbor',
    region: 'Atlantic Coast',
    subject: 'Fishing boats under the stars',
    difficulty: 'Intermediate',
    tip: 'The harbor lights reflecting on the water create colorful patterns. Blue boats provide foreground interest. A medium ISO (800-1600) captures both ambient light and stars.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER: RENDER PHOTO SPOT CARD
   ═══════════════════════════════════════════════════════════════ */

function SpotCard({
  spot,
  bgTip,
  accentBg,
}: {
  spot: PhotoSpot;
  bgTip: string;
  accentBg?: boolean;
}) {
  return (
    <div className="card-moroccan p-6 md:p-8">
      <div className="flex items-start gap-4 mb-4">
        <span
          className={`flex-shrink-0 w-10 h-10 rounded-full ${
            accentBg ? 'bg-[#C4960C]' : 'bg-[#A0522D]'
          } text-white flex items-center justify-center font-bold text-lg`}
        >
          {spot.rank}
        </span>
        <div>
          <h3 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold text-[#1A1814]">
            {spot.name}
          </h3>
          <p className="text-sm text-[#A0522D] flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3" />
            {spot.city}
            <span className="mx-2 text-[#1A1814]/30">|</span>
            <span className="text-[#1A1814]/50">Difficulty: {spot.difficulty}</span>
          </p>
        </div>
      </div>
      <p className="text-[#1A1814]/80 leading-relaxed mb-4">{spot.description}</p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`${bgTip} rounded-xl p-4`}>
          <p className="flex items-center gap-2 text-sm font-semibold text-[#C4960C] mb-2">
            <Sun className="w-4 h-4" />
            Best Time
          </p>
          <p className="text-sm text-[#1A1814]/70">{spot.bestTime}</p>
        </div>
        <div className={`${bgTip} rounded-xl p-4`}>
          <p className="flex items-center gap-2 text-sm font-semibold text-[#A0522D] mb-2">
            <Eye className="w-4 h-4" />
            Pro Tip
          </p>
          <p className="text-sm text-[#1A1814]/70">{spot.proTip}</p>
        </div>
      </div>
      <p className="text-xs text-[#1A1814]/40 mt-3 flex items-center gap-1">
        <Compass className="w-3 h-3" />
        {spot.gpsHint}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function PhotoSpotsPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 - HERO
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-photo-spots.webp"
          alt="Stunning photography locations across Morocco featuring blue streets, golden dunes, and ancient architecture - citytoursmorocco.com"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-white/80">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 inline" />
              </li>
              <li>
                <a href="/guides" className="hover:text-white transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 inline" />
              </li>
              <li className="text-white font-semibold">Photo Spots</li>
            </ol>
          </nav>

          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Top 25 Photography Spots in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From the cobalt-blue alleyways of Chefchaouen to the star-dusted
            Sahara sky, Morocco is a photographer&apos;s paradise. This guide
            reveals the exact locations, best times, and expert techniques for
            capturing the most breathtaking images in North Africa.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm">
            <span className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              25 Locations
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              8 Regions
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              25 min read
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 - INTRODUCTION
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Morocco: A Photographer&apos;s Dream Destination
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-[#1A1814]/80 space-y-6">
              <p>
                Few countries on earth offer the visual richness of Morocco. Within a
                single day of travel, a photographer can move from the terracotta
                labyrinth of an ancient medina to the electric blue streets of a
                mountain town, from the cascading green terraces of an Atlas valley to
                the boundless golden dunes of the Sahara. Morocco is a country that
                seems to have been designed with the camera in mind: every surface
                decorated, every light source dramatic, every landscape operatic in
                scale and color.
              </p>
              <p>
                The visual culture of Morocco is rooted in centuries of Islamic
                geometric art, Berber craft traditions, and the extraordinary natural
                palette of a land that stretches from the Atlantic coast to the edge
                of the Sahara Desert. The zellige tilework that adorns every mosque
                and palace creates kaleidoscopic patterns of infinite complexity. The
                hand-painted cedar ceilings of riads catch the light differently every
                hour. The Sahara dunes sculpted by wind into sinuous curves offer
                abstract compositions that change with every sunrise.
              </p>
              <p>
                This guide is the result of extensive on-the-ground research across
                every major photographic region of Morocco. We share not just the
                locations, but the exact times, angles, and techniques that will
                elevate your Morocco photography from snapshots to portfolio-worthy
                images. Whether you are shooting with a professional DSLR or a
                smartphone, these 25 locations will provide unforgettable visual
                experiences.
              </p>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { icon: Camera, label: 'Photo Spots', value: '25' },
                { icon: MapPin, label: 'Cities & Regions', value: '8' },
                { icon: Sunrise, label: 'Golden Hour Tips', value: '4 Seasons' },
                { icon: Moon, label: 'Night Locations', value: '6' },
              ].map((stat) => (
                <div key={stat.label} className="card-moroccan p-5 text-center">
                  <stat.icon className="w-6 h-6 text-[#A0522D] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#1A1814]">{stat.value}</p>
                  <p className="text-sm text-[#1A1814]/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 - TOP 25 PHOTO SPOTS
          ═══════════════════════════════════════════════════════════ */}

      {/* ── 3A: MARRAKECH ── */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Marrakech &mdash; The Red City
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Marrakech offers an extraordinary concentration of photographic
              subjects within a compact area. The interplay of warm terracotta
              walls, vibrant market colors, ornate palace architecture, and the
              ever-present Koutoubia minaret creates an endlessly rewarding
              environment for photographers of every level.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/hero-majorelle-blue.webp"
                alt="The iconic blue walls of Jardin Majorelle garden in Marrakech with vibrant green cacti - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="space-y-8">
              {marrakechSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#FAF8F5]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3B: CHEFCHAOUEN ── */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Palette className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Chefchaouen &mdash; The Blue Pearl
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Nestled in the Rif Mountains, Chefchaouen is one of the most
              visually distinctive towns on earth. The entire medina is washed
              in shades of blue, from powder to cobalt, creating a dreamlike
              environment where every alleyway is a potential masterpiece.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/hero-chefchaouen-stairs.webp"
                alt="Iconic blue-washed stairway with flower pots in Chefchaouen medina Morocco - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="space-y-8">
              {chefchaouenSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#EDE8E0]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3C: FES ── */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Fes &mdash; The Spiritual Capital
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Fes el Bali is the world&apos;s largest car-free urban area and a
              living medieval city of extraordinary visual complexity. The
              medina&apos;s 9,400 alleyways, centuries-old tanneries, and ornate
              madrasas offer some of the most rewarding and challenging
              photography in Morocco.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/photo-fes-tanneries-aerial.webp"
                alt="Aerial view of the colorful Chouara Tannery vats in Fes Morocco with workers processing leather - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="space-y-8">
              {fesSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#FAF8F5]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3D: SAHARA ── */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Sunrise className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Sahara Desert &mdash; Erg Chebbi
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              The Sahara is the ultimate destination for landscape and
              astrophotography in Morocco. The towering dunes of Erg Chebbi,
              the vast starry skies, and the timeless camel caravans offer
              images of primal beauty that connect the viewer to something
              ancient and eternal.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/hero-sahara-starry-night.webp"
                alt="Milky Way galaxy stretching over Sahara desert dunes at Erg Chebbi Morocco - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="space-y-8">
              {saharaSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#EDE8E0]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3E: ESSAOUIRA ── */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Waves className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Essaouira &mdash; The Wind City
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Essaouira&apos;s 18th-century Portuguese fortifications, bustling
              fishing harbor, and dramatic Atlantic coastline create a visual
              language entirely different from the inland cities. The quality
              of coastal light here is extraordinary, soft and golden with
              salt-air haze that gives images a painterly quality.
            </p>

            <div className="space-y-8">
              {essaouiraSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#FAF8F5]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3F: TANGIER ── */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Compass className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Tangier &mdash; Gateway Between Continents
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Perched at the meeting point of the Atlantic and Mediterranean,
              Tangier offers a unique blend of Moroccan, European, and
              cosmopolitan influences. The views across the Strait of Gibraltar
              to Spain, the historic kasbah, and the dramatic coastal scenery
              make it a rewarding photography destination.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/hero-tangier-panorama.webp"
                alt="Panoramic view of Tangier kasbah and Mediterranean coastline with Spain visible in distance - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="space-y-8">
              {tangierSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#EDE8E0]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3G: OUARZAZATE & AIT BEN HADDOU ── */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Mountain className="w-7 h-7 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Ouarzazate & Ait Ben Haddou &mdash; Hollywood of Morocco
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              The gateway to the Sahara and the heartland of Berber kasbah
              architecture. The dramatic earthen fortifications, desert
              landscapes, and cinematic light have attracted filmmakers for
              decades and offer photographers a visual feast of warm earth
              tones and ancient structures.
            </p>

            <div className="space-y-8">
              {ouarzazateSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#FAF8F5]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3H: BONUS SPOTS (21-25) ── */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Star className="w-7 h-7 text-[#C4960C]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Bonus Locations &mdash; Hidden Gems
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Beyond the iconic cities, Morocco rewards the adventurous
              photographer with dramatic gorges, thundering waterfalls,
              modernist architecture, and remote coastal formations that few
              visitors ever capture.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/hero-ouzoud-falls.webp"
                alt="The spectacular Ouzoud Waterfalls cascading over red cliffs in the Atlas Mountains Morocco - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="space-y-8">
              {bonusSpots.map((spot) => (
                <SpotCard key={spot.rank} spot={spot} bgTip="bg-[#EDE8E0]" accentBg />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 - GOLDEN HOUR GUIDE
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Sunrise className="w-8 h-8 text-[#C4960C]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Golden Hour Guide by Season
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              The quality of light is the single most important factor in travel
              photography. Morocco&apos;s position between 28 and 36 degrees north
              latitude produces consistently warm, golden light during the magic
              hours around sunrise and sunset. Understanding the seasonal
              variations in golden hour timing will dramatically improve your
              results.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/hero-koutoubia-sunset.webp"
                alt="Golden sunset light illuminating Koutoubia Mosque minaret in Marrakech Morocco - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {goldenHourData.map((season) => (
                <div key={season.season} className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1814] mb-1">
                    {season.season}
                  </h3>
                  <p className="text-sm text-[#A0522D] mb-4">{season.months}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <Sunrise className="w-4 h-4 text-[#C4960C] flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#1A1814]/50">Sunrise</p>
                        <p className="text-sm font-medium text-[#1A1814]">
                          {season.sunrise}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="w-4 h-4 text-[#C4960C] flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#1A1814]/50">
                          Morning Golden Hour
                        </p>
                        <p className="text-sm font-medium text-[#1A1814]">
                          {season.goldenMorning}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Sun className="w-4 h-4 text-[#A0522D] flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#1A1814]/50">
                          Evening Golden Hour
                        </p>
                        <p className="text-sm font-medium text-[#1A1814]">
                          {season.goldenEvening}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Moon className="w-4 h-4 text-[#A0522D] flex-shrink-0" />
                      <div>
                        <p className="text-xs text-[#1A1814]/50">Sunset</p>
                        <p className="text-sm font-medium text-[#1A1814]">
                          {season.sunset}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#1A1814]/60 border-t border-[#1A1814]/10 pt-3">
                    {season.notes}
                  </p>
                </div>
              ))}
            </div>

            <div className="card-moroccan p-6 mt-8 bg-[#FAF8F5]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                    Blue Hour Bonus
                  </h4>
                  <p className="text-sm text-[#1A1814]/70">
                    The blue hour occurs in the 20-40 minutes after sunset (and
                    before sunrise), when the sky takes on a deep blue tone and
                    artificial lights begin to glow. In Morocco, the blue hour is
                    particularly magical for photographing illuminated mosques,
                    medina streets, and the blue city of Chefchaouen. Use a tripod
                    and ISO 400-800 for sharp, atmospheric images during this brief
                    but rewarding window.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 - CAMERA GEAR RECOMMENDATIONS
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Camera Gear Recommendations
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Morocco presents a unique combination of challenges and
              opportunities for camera gear. You need versatility to handle
              everything from tight medina alleyways to vast desert panoramas,
              durability to withstand sand and dust, and lightweight portability
              for long days of walking on cobblestone streets.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {gearRecommendations.map((gear) => (
                <div key={gear.category} className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-1">
                    {gear.category}
                  </h3>
                  <p className="text-sm font-medium text-[#A0522D] mb-3">
                    {gear.recommendation}
                  </p>
                  <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                    {gear.whyItMatters}
                  </p>
                </div>
              ))}
            </div>

            <div className="card-moroccan p-6 mt-8 bg-[#EDE8E0]">
              <div className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                    Smartphone-Only Photographers
                  </h4>
                  <p className="text-sm text-[#1A1814]/70">
                    If you are traveling with only a smartphone, you can still
                    capture stunning images at every location in this guide. The
                    key is to shoot during golden hour, use the built-in HDR mode
                    for high-contrast scenes in medinas, enable the grid overlay
                    for better composition, and shoot in RAW format for maximum
                    editing flexibility. A small clip-on wide-angle lens adapter
                    and a compact phone tripod are worthwhile investments that
                    weigh almost nothing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 - DRONE PHOTOGRAPHY RULES
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Drone Photography Rules in Morocco
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Drone regulations in Morocco are strict and actively enforced.
              Understanding and following the rules is essential to avoid
              equipment confiscation, fines, or legal issues.
            </p>

            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Authorization Requirements
                </h3>
                <ul className="space-y-3 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      All drone flights in Morocco require prior authorization from the
                      Direction Generale de l&apos;Aviation Civile (DGAC). Applications
                      should be submitted at least 30 days before your trip through the
                      DGAC website or the Moroccan embassy.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      You must provide detailed flight plans, drone specifications,
                      insurance documentation, and the specific locations and dates
                      where you intend to fly.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span>
                      Authorization approval is not guaranteed and commercial drone
                      operations face additional requirements including Moroccan
                      business registration.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-moroccan p-6 border-l-4 border-l-red-600">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Absolute No-Fly Zones
                </h3>
                <ul className="space-y-3 text-sm text-[#1A1814]/70">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      All royal palaces and residences (severe penalties for violation)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Military installations and government buildings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Within 5 km of any airport, including the many small regional
                      airports
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Urban medinas and dense population areas (most of the tourist
                      photography locations in this guide)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Border zones and the southern provinces near the Western Sahara
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Customs and Import
                </h3>
                <p className="text-sm text-[#1A1814]/70 mb-3">
                  Many travelers have had drones confiscated at Moroccan customs
                  upon entry, even when they had no intention of flying
                  commercially. If you bring a drone, carry your DGAC
                  authorization letter and be prepared for additional screening.
                  Drones confiscated at entry may be returned when you depart,
                  but this is not guaranteed. Our recommendation: unless you
                  have confirmed DGAC authorization, leave your drone at home.
                </p>
              </div>

              <div className="card-moroccan p-6 bg-[#FAF8F5]">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Alternative Aerial Perspectives
                </h3>
                <p className="text-sm text-[#1A1814]/70">
                  For elevated and aerial-style photography without a drone,
                  Morocco offers excellent alternatives: rooftop terraces of riads
                  and restaurants throughout the medinas, the tannery viewing
                  platforms in Fes, the Spanish Mosque viewpoint above Chefchaouen,
                  the summit of Ait Ben Haddou, hot air balloon rides over
                  Marrakech (pre-arranged through licensed operators), and the
                  numerous hilltop viewpoints along mountain roads in the Atlas
                  and Rif ranges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 - PHOTOGRAPHY ETIQUETTE
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Photography Etiquette in Morocco
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Respectful photography is not just ethically important in
              Morocco &mdash; it will also result in better images. People who
              feel respected are more likely to share genuine moments, and
              understanding local customs will open doors that remain closed to
              insensitive photographers.
            </p>

            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Always Ask Permission for Portraits
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  This is the single most important rule of photography in
                  Morocco. Before photographing any individual at close range,
                  make eye contact and gesture toward your camera with a
                  questioning expression, or learn the Arabic phrase
                  &quot;Momkin nsawrek?&quot; (May I photograph you?). A smile and
                  respectful demeanor go a long way. Many Moroccans are happy to
                  pose, but the ask itself is what matters culturally. Never
                  photograph someone who declines, and never chase anyone with
                  your camera. Be especially respectful when photographing women,
                  elderly people, and children.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Understanding the Photo Tip Culture
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  In tourist areas, particularly Jemaa el-Fnaa in Marrakech and
                  the tanneries in Fes, some individuals make part of their
                  living by posing for tourist photographs. Snake charmers, water
                  sellers in traditional dress, henna artists, and musicians may
                  expect a small tip of from 10 MAD (1-2 USD) for a photograph. This
                  is a legitimate economic exchange and should be respected rather
                  than resented. Agree on the amount before taking the photo to
                  avoid misunderstandings. Sneaking photos to avoid paying is both
                  disrespectful and likely to produce inferior images compared to a
                  willing, cooperative subject.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Religious Sites and Mosques
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Non-Muslims may not enter most mosques in Morocco (the Hassan II
                  Mosque in Casablanca is the notable exception). You may
                  photograph mosque exteriors, minarets, and doorways from public
                  spaces. Do not attempt to photograph through open doors into
                  prayer halls. When visiting open religious sites like madrasas
                  and mausoleums, dress modestly and avoid photographing people at
                  prayer. Remove your shoes before entering any religious space
                  and silence your camera shutter sound if possible.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Market and Medina Photography
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  The souks and medinas are among the most photogenic
                  environments in Morocco, but they are also workplaces and homes.
                  Photograph the atmosphere, architecture, and products freely, but
                  be mindful of vendors who may not want their stalls documented
                  (some believe photographs of their products bring bad luck or
                  attract competitors). A telephoto lens (70-200mm) allows candid
                  documentation of market life from a respectful distance. If
                  asked not to photograph, comply immediately and move on.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Government and Security Sites
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Never photograph military installations, police stations, royal
                  palaces (beyond the public-facing exterior), or security
                  checkpoints. This is taken very seriously in Morocco and can
                  result in equipment confiscation, deletion of your images, or
                  detention. If you are uncertain whether a building is a
                  government facility, err on the side of caution.
                </p>
              </div>

              <div className="card-moroccan p-6 bg-[#EDE8E0]">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                      The Golden Rule
                    </h4>
                    <p className="text-sm text-[#1A1814]/70">
                      If someone asks you to stop photographing them or their
                      property, stop immediately. No photograph is worth causing
                      distress or conflict. The best travel photography comes from
                      genuine human connection, not from stolen moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 - INSTAGRAM VS REALITY
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Instagram vs Reality &mdash; Honest Tips
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Morocco is one of the most Instagrammed countries in the world,
              and the gap between curated social media images and the actual
              experience can be significant. Here is an honest assessment to
              help you set realistic expectations and capture genuinely
              beautiful images.
            </p>

            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Chefchaouen: Not Always Empty
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Those perfectly empty blue alleyways you see on Instagram are
                  shot at 6:30-7:00 AM before the day-trip buses arrive from Fes
                  and Tangier (typically by 10 AM). By midday, the most famous
                  streets can be crowded with visitors recreating the same poses.
                  Stay overnight in the medina to access the early morning and
                  late evening windows that produce the best images. The residential
                  streets away from the main tourist route offer genuinely quiet
                  blue alleys throughout the day.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Sahara: It Takes Effort to Get There
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  The stunning Erg Chebbi dunes near Merzouga are a 9-10 hour
                  drive from Marrakech (or a domestic flight to Errachidia plus 2
                  hours). The camel trek to the desert camp takes 1-2 hours over
                  sand, and the pre-dawn hike for sunrise shots requires waking at
                  4:30 AM to climb dunes in darkness. The results are extraordinary,
                  but be prepared for the physical effort. Sand gets everywhere,
                  including in camera equipment, so bring dust protection.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Marrakech: Sensory Overload
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  The medina is noisier, more chaotic, and more intensely
                  stimulating than any photograph can convey. The Instagram images
                  of serene riad courtyards and quiet zellige-lined corridors are
                  real but represent moments of calm within a vibrant, bustling
                  city. Embrace the chaos as part of the photographic experience.
                  The most authentic and compelling images often include the human
                  energy of the medina rather than avoiding it.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Colors: Often Enhanced
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Many viral Morocco images have heavily saturated colors that
                  push blues, oranges, and reds beyond what the eye sees. Morocco
                  is genuinely colorful, but the electric blues and blazing oranges
                  in many Instagram posts are the result of post-processing. Our
                  recommendation: capture the genuine warmth and color of Morocco
                  without over-processing. The real colors are beautiful enough.
                  Shoot in RAW format for maximum flexibility to find a natural
                  but vibrant look in post-production.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Timing Is Everything
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  The photographers who produce the best Morocco images are the
                  ones who wake up earliest, stay out latest, and are patient
                  enough to wait for the right light. Most tourist photographers
                  shoot between 10 AM and 4 PM when the light is flat and harsh.
                  By shifting your shooting schedule to the golden hours (see
                  Section 4 above), you will immediately produce dramatically
                  better images, even with identical equipment and locations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 - NIGHT PHOTOGRAPHY LOCATIONS
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Moon className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Night Photography Locations
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Morocco transforms after dark. Illuminated mosques, lantern-lit
              medina streets, and the boundless Sahara starscape offer night
              photography opportunities that rival anywhere in the world. A
              tripod and fast lens are essential for this section.
            </p>

            <div className="relative mb-10 rounded-2xl overflow-hidden zellige-border">
              <img
                src="/images/photo-riad-rooftop-sunset.webp"
                alt="View from a traditional riad rooftop terrace at sunset over Marrakech medina with minarets - citytoursmorocco.com"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {nightPhotoSpots.map((spot) => (
                <div key={spot.location} className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-1">
                    {spot.location}
                  </h3>
                  <p className="text-xs text-[#A0522D] mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {spot.region}
                    <span className="mx-2 text-[#1A1814]/30">|</span>
                    <span className="text-[#1A1814]/50">{spot.difficulty}</span>
                  </p>
                  <p className="text-sm font-medium text-[#1A1814]/80 mb-3">
                    {spot.subject}
                  </p>
                  <div className="bg-[#EDE8E0] rounded-lg p-3">
                    <p className="text-xs text-[#1A1814]/60 flex items-start gap-2">
                      <Moon className="w-3 h-3 flex-shrink-0 mt-0.5" />
                      {spot.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-moroccan p-6 mt-8 bg-[#EDE8E0]">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                Essential Night Photography Settings
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#A0522D] mb-1">
                    City Night Scenes
                  </p>
                  <p className="text-xs text-[#1A1814]/70">
                    ISO 400-1600 | f/4-f/8 | 1-15 seconds | Tripod required |
                    Use self-timer or remote release to avoid camera shake
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#A0522D] mb-1">
                    Milky Way / Stars
                  </p>
                  <p className="text-xs text-[#1A1814]/70">
                    ISO 3200-6400 | f/2.8 or wider | 15-25 seconds | Sturdy
                    tripod in sand | Manual focus on brightest star using live view
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#A0522D] mb-1">
                    Star Trails
                  </p>
                  <p className="text-xs text-[#1A1814]/70">
                    ISO 400-800 | f/4 | 30-second intervals stacked in software |
                    Aim toward Polaris for circular trails | 1-3 hour total
                    capture time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 - BEST SEASONS FOR PHOTOGRAPHY
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Sun className="w-8 h-8 text-[#C4960C]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Best Seasons for Photography in Morocco
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Morocco is a year-round photography destination, but each season
              offers distinct advantages depending on what and where you want to
              shoot. Here is a month-by-month breakdown to help you plan the
              perfect photo trip.
            </p>

            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1814] mb-2">
                  October - November: The Optimal Window
                </h3>
                <p className="text-sm text-[#A0522D] mb-3">
                  Overall Rating: Exceptional
                </p>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  The consensus among professional travel photographers is that
                  October and November offer the best overall conditions for
                  Morocco photography. The summer heat has broken, the skies are
                  reliably clear, the light has a warm golden quality, and tourist
                  crowds have thinned after the summer peak. The Sahara is
                  comfortable for overnight camping, the Atlas Mountains are
                  accessible before winter snows, and the Atlantic coast enjoys
                  mild temperatures. Date palm harvests in the oases and autumn
                  colors in the Atlas cedar forests add seasonal visual interest.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1814] mb-2">
                  March - April: Wildflower Season
                </h3>
                <p className="text-sm text-[#A0522D] mb-3">
                  Overall Rating: Excellent
                </p>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Spring brings wildflowers to the Atlas valleys and foothills,
                  transforming the landscape with carpets of poppies, daisies, and
                  wild irises. The Rose Valley near Kelaat M&apos;Gouna erupts in
                  pink roses during April and May, culminating in the annual Rose
                  Festival. Snow still caps the highest Atlas peaks, creating
                  stunning contrasts with the green valleys below. Temperatures are
                  comfortable for hiking and extended outdoor shooting sessions.
                  This is the best season for landscape photography in the Atlas
                  Mountains.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1814] mb-2">
                  December - February: Dramatic Skies
                </h3>
                <p className="text-sm text-[#A0522D] mb-3">
                  Overall Rating: Very Good (with caveats)
                </p>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Winter in Morocco is mild compared to Europe, making it an
                  attractive escape for photographers. The lower sun angle produces
                  warm, directional light throughout the day. The Sahara is at its
                  best in winter: cool, comfortable temperatures, crystal-clear
                  air, and dramatic cloud formations that add atmosphere to desert
                  photography. Cities are less crowded and more authentic. The main
                  caveats are shorter days (sunset around 5:30 PM), occasional rain
                  in the north, and high Atlas passes that may be closed by snow.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#1A1814] mb-2">
                  May - September: Summer Challenges
                </h3>
                <p className="text-sm text-[#A0522D] mb-3">
                  Overall Rating: Good for Coast, Challenging Inland
                </p>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Summer brings extreme heat to inland cities (Marrakech regularly
                  exceeds 40 degrees Celsius) and the Sahara. Photography is best
                  confined to the early morning and late evening hours, with midday
                  rest. However, the Atlantic coast cities of Essaouira, Tangier,
                  and Asilah enjoy refreshing ocean breezes and atmospheric coastal
                  fog that creates moody, unique images. The longest days provide
                  extended golden hour windows. Summer is the best season for
                  Milky Way astrophotography in the Sahara, with the galactic core
                  high in the sky after midnight.
                </p>
              </div>

              <div className="card-moroccan p-6 bg-[#FAF8F5]">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#C4960C] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-bold text-[#1A1814] mb-2">
                      Ramadan Considerations
                    </h4>
                    <p className="text-sm text-[#1A1814]/70">
                      During the holy month of Ramadan (dates shift annually based
                      on the lunar calendar), many businesses operate on reduced
                      hours and the rhythm of daily life changes significantly.
                      Photography during Ramadan requires extra sensitivity: avoid
                      photographing people eating or drinking (they are fasting),
                      and be aware that some sites may have modified opening hours.
                      The iftar (breaking of the fast) at sunset is a beautiful
                      communal moment, but ask before photographing these intimate
                      scenes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11 - FAQ
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 md:py-24">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-8 h-8 text-[#A0522D]" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#1A1814]">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-[#1A1814]/70 mb-10 max-w-3xl">
              Answers to the most common questions about photography in Morocco,
              covering permits, gear, cultural considerations, and practical
              logistics.
            </p>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Do I need a permit to photograph in Morocco?
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  No general permit is required for personal photography in public
                  spaces. However, some historic sites charge a small camera or
                  video fee (typically from 10 MAD). Tripods may attract attention
                  at some monuments as they suggest professional/commercial use.
                  Drone photography always requires prior authorization from the
                  Direction Generale de l&apos;Aviation Civile (DGAC). Military
                  installations, police stations, and royal palaces must never be
                  photographed. If in doubt at a specific location, ask a staff
                  member or guard before setting up your equipment.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  What is the best time of year for photography in Morocco?
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  October through April offers the best light and most comfortable
                  temperatures for photography across all regions. The sweet spot
                  is October-November and March-April. October and November provide
                  warm golden light, clear skies, and reduced crowds. March and
                  April bring wildflowers to the Atlas Mountains and valleys, with
                  the Rose Festival in May as a highlight. Winter (December-February)
                  is ideal for Sahara photography with crisp, clear air and dramatic
                  cloud formations, though northern cities can experience rain.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Can I photograph people in Morocco?
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Always ask permission before photographing individuals at close
                  range. Many Moroccans are happy to be photographed, but it is
                  culturally important to ask first. A smile and a gesture toward
                  your camera is usually sufficient. In markets and tourist areas,
                  some people (snake charmers, water sellers, henna artists) may
                  expect a small tip of from 10 MAD for posing. Never photograph
                  people who decline, and be especially respectful around women
                  and at religious sites. A telephoto lens allows candid
                  documentation of street life from a respectful distance without
                  intruding on personal space.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Are drones allowed in Morocco?
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Drones are heavily regulated in Morocco. You must obtain prior
                  authorization from the Direction Generale de l&apos;Aviation Civile
                  (DGAC) before flying. Applications should be submitted at least
                  30 days before your trip. Flying without permission can result
                  in confiscation of equipment, fines, or even detention. Many
                  tourists have had drones seized at customs upon entry. Drones
                  are completely prohibited near airports, military zones, royal
                  palaces, and in most medinas. Our recommendation: unless you have
                  confirmed written DGAC authorization, leave your drone at home
                  and use the many elevated viewpoints Morocco offers instead.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  What camera gear should I bring to Morocco?
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  A versatile zoom lens (24-70mm or 24-105mm) covers most
                  situations and should be your primary lens. Add a wide-angle
                  lens (16-35mm) for architecture, palace interiors, and desert
                  landscapes, and a telephoto (70-200mm) for market details, the
                  tanneries, and candid street shots from a respectful distance.
                  A sturdy travel tripod is essential for golden hour, blue hour,
                  and night photography. Dust protection gear (rain cover, rocket
                  blower, sealed bags for lens changes) is critical if visiting
                  the Sahara. Bring more memory cards and batteries than you think
                  you need, as desert camps have limited charging facilities.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-[#1A1814] mb-3">
                  Where are the best sunrise and sunset spots in Morocco?
                </h3>
                <p className="text-sm text-[#1A1814]/70 leading-relaxed">
                  Top sunrise spots include Erg Chebbi dunes in the Sahara
                  (the single most spectacular sunrise location in the country),
                  Ait Ben Haddou for warm golden light on the earthen ksar, and
                  the Spanish Mosque above Chefchaouen for the blue city emerging
                  from morning mist. Best sunset locations are the Koutoubia
                  Mosque gardens in Marrakech, the Essaouira ramparts overlooking
                  the Atlantic, Jemaa el-Fnaa from rooftop cafes, Cap Spartel in
                  Tangier, and riad rooftops throughout the medinas. Every region
                  of Morocco has outstanding sunset viewpoints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12 - EXPLORE MORE
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDE8E0] py-16 md:py-24">
        <div className="container-morocco">
          <ExploreMore />
        </div>
      </section>
    </>
  );
}
