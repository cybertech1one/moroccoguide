import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Compass,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  ShoppingBag,
  Sun,
  Camera,
  Footprints,
  ArrowRight,
  Lightbulb,
  Eye,
  Anchor,
  BookOpen,
  Palette,
  Building2,
  UtensilsCrossed,
  Wine,
  Waves,
  Bed,
  Plane,
  Map,
  Calendar,
  CloudSun,
  Train,
  Ship,
  Music,
  GlassWater,
  Coffee,
  TreePine,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Tangier City Guide | Where Africa Meets Europe | Morocco Travel Guide',
  description:
    'Discover Tangier, Morocco\'s gateway to Europe perched on the Strait of Gibraltar. Explore the Kasbah, Medina, Cap Spartel, Caves of Hercules, literary heritage of Paul Bowles and the Beat Generation. Complete guide with restaurants, beaches, nightlife, and ferry connections from Spain.',
  keywords: [
    'Tangier city guide',
    'Tangier Morocco',
    'Tangier Kasbah',
    'Tangier Medina',
    'Cap Spartel',
    'Caves of Hercules',
    'Tangier ferry Spain',
    'Paul Bowles Tangier',
    'Beat Generation Morocco',
    'Tangier beaches',
    'Tangier restaurants',
    'Tangier nightlife',
    'Cafe Hafa Tangier',
    'Petit Socco Tangier',
    'Grand Socco Tangier',
    'Tangier to Chefchaouen',
    'Tangier day trips',
    'Al Boraq train Tangier',
    'American Legation Museum',
    'Tangier travel guide',
  ],
  openGraph: {
    title: 'Tangier City Guide - Where Africa Meets Europe',
    description:
      'Your complete guide to Tangier, Morocco\'s legendary port city on the Strait of Gibraltar. Attractions, literary heritage, food, beaches, nightlife, and practical travel tips.',
    url: 'https://citytoursmorocco.com/tangier-guide',
    images: [
      {
        url: '/images/hero-tangier-kasbah.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Tangier Kasbah and Medina overlooking the Strait of Gibraltar',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/tangier-guide' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  '@id': 'https://citytoursmorocco.com/tangier-guide',
  name: 'Tangier',
  description:
    'Tangier is Morocco\'s legendary port city on the Strait of Gibraltar, where Africa meets Europe. A city of writers, artists, and adventurers, Tangier blends Moroccan culture with a cosmopolitan international heritage.',
  url: 'https://citytoursmorocco.com/tangier-guide',
  touristType: ['Cultural tourism', 'Literary tourism', 'Beach tourism', 'Culinary tourism'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.7595,
    longitude: -5.834,
  },
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'Cities', item: 'https://citytoursmorocco.com/cities' },
      { '@type': 'ListItem', position: 3, name: 'Tangier Guide', item: 'https://citytoursmorocco.com/tangier-guide' },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   TOP ATTRACTIONS DATA
   ═══════════════════════════════════════════════════════════════ */

const topAttractions = [
  {
    name: 'Kasbah Museum (Dar el-Makhzen)',
    image: '/images/hero-tangier-kasbah.webp',
    duration: '1-2 hours',
    cost: '20 MAD',
    description:
      'Housed in the former Sultan\'s palace at the highest point of the Medina, the Kasbah Museum is Tangier\'s cultural crown jewel. The building itself &mdash; with its intricately carved stucco ceilings, painted cedarwood, and a central courtyard adorned with mosaic fountains &mdash; is as compelling as its collection. Exhibits trace the region\'s history from prehistoric times through Phoenician, Roman, and Islamic periods, with standout pieces including a full-size Roman mosaic of Venus and a remarkable collection of Moroccan ceramics. The terraced gardens behind the palace offer sweeping views across the Strait of Gibraltar to the mountains of Spain.',
    highlights: ['Stunning Andalusian gardens with views to Spain', 'Roman mosaics and Phoenician artifacts', 'Former Sultan\'s throne room', 'Finest example of Moroccan palatial architecture in the north'],
  },
  {
    name: 'The Medina',
    image: '/images/hero-morocco.webp',
    duration: '2-4 hours',
    cost: 'Free',
    description:
      'Tangier\'s Medina is a compact, atmospheric maze of whitewashed alleys that tumble from the Kasbah down to the port. Unlike the vast medinas of Fes or Marrakech, Tangier\'s old city is manageable in size but rich in character, with narrow lanes opening suddenly onto sunlit squares, hole-in-the-wall cafes, and artisan workshops. The architecture reflects centuries of multicultural influence: Moroccan riads sit beside Spanish colonial townhouses, and Portuguese-era fortifications frame Andalusian doorways. Every corner reveals a new vista &mdash; a slice of ocean between whitewashed walls, a vine-covered courtyard, a cat sleeping in a shaft of light.',
    highlights: ['Manageable size, easy to explore on foot', 'Multicultural architecture spanning centuries', 'Artisan workshops and local cafes', 'Street art and cultural galleries'],
  },
  {
    name: 'Petit Socco (Souk Dakhli)',
    image: '/images/hero-spa.webp',
    duration: '30-60 minutes',
    cost: 'Free',
    description:
      'This tiny, charismatic square in the heart of the Medina was once the beating heart of Tangier\'s legendary International Zone. In the mid-20th century, Petit Socco was where spies, diplomats, smugglers, writers, and artists rubbed shoulders in its smoke-filled cafes. William Burroughs wrote portions of Naked Lunch in the rooms above what is now Cafe Central. Paul Bowles held court here for decades. Tennessee Williams, Truman Capote, and the Rolling Stones all passed through. Today the square retains its weathered bohemian charm &mdash; faded Art Deco facades, cracked tilework, and cafe tables where you can sit with a mint tea and feel the ghosts of the Interzone.',
    highlights: ['Historic literary and spy gathering place', 'Cafe Central where Burroughs wrote', 'Atmospheric Art Deco facades', 'Perfect people-watching spot'],
  },
  {
    name: 'Grand Socco (Place du 9 Avril 1947)',
    image: '/images/hero-overlanding.webp',
    duration: '30-60 minutes',
    cost: 'Free',
    description:
      'The Grand Socco is the bustling gateway between the Medina and the Ville Nouvelle, a large circular plaza that has been Tangier\'s main market square for centuries. Named after the date of a historic speech by Sultan Mohammed V calling for Moroccan independence, the square is ringed by cafes, the entrance to the Mendoubia Gardens, and the ornate facade of the Cinema Rif (now a cultural center and arthouse cinema). On market days, Riffian women in traditional striped fouta skirts and wide-brimmed straw hats sell fresh produce, herbs, and handmade bread. The Grand Socco is the natural starting point for any exploration of Tangier.',
    highlights: ['Main gateway between old and new Tangier', 'Historic market atmosphere', 'Cinema Rif cultural center', 'Riffian women selling traditional produce'],
  },
  {
    name: 'Cap Spartel',
    image: '/images/hero-essaouira.webp',
    duration: '1-2 hours',
    cost: 'Free (lighthouse exterior)',
    description:
      'Fourteen kilometers west of Tangier, Cap Spartel is the dramatic headland where the Atlantic Ocean meets the Mediterranean Sea. The point is crowned by an elegant 19th-century lighthouse, built in 1864 by the diplomatic corps of Tangier\'s International Zone and one of the few lighthouses in the world to have been jointly administered by multiple nations. The views are extraordinary &mdash; on clear days, you can see the Spanish coast, the Rock of Gibraltar, and the endless Atlantic stretching westward. Below the cape, forested hillsides dotted with palatial villas descend to wild, wind-battered beaches. This is where the known world ended for ancient sailors, and the sense of standing on the edge of continents is palpable.',
    highlights: ['Where the Atlantic meets the Mediterranean', 'Historic 1864 lighthouse', 'Panoramic views to Spain and Gibraltar', 'Dramatic coastal scenery'],
  },
  {
    name: 'Caves of Hercules',
    image: '/images/hero-desert.webp',
    duration: '30-60 minutes',
    cost: '10 MAD',
    description:
      'Just south of Cap Spartel, these spectacular sea caves have been a tourist draw since the Victorian era. Legend holds that Hercules rested here after separating Europe from Africa to create the Strait of Gibraltar &mdash; one of his twelve labors. The caves are both natural and man-made: Berber stonecutters spent centuries quarrying millstones here, carving out vast chambers with smooth, circular walls. The most iconic feature is the sea-facing opening, which is shaped remarkably like the map of Africa (some say it was carved intentionally, though geologists disagree). When the afternoon sun pours through this opening, casting light across the cave floor with the Atlantic crashing below, the effect is genuinely magical.',
    highlights: ['Africa-shaped opening to the sea', 'Mythological ties to Hercules', 'Ancient Berber millstone quarry', 'Stunning when lit by afternoon sun'],
  },
  {
    name: 'Mendoubia Gardens',
    image: '/images/hero-ait-benhaddou.webp',
    duration: '30-45 minutes',
    cost: 'Free',
    description:
      'Tucked just inside the Grand Socco, the Mendoubia Gardens are a welcome oasis of shade and calm in Tangier\'s bustling city center. The gardens surround the former residence of the Mendoub, the Sultan\'s representative during the International Zone period. Giant banyan trees, some over 800 years old with enormous exposed root systems, create a cathedral-like canopy. The gardens are immaculately maintained, with winding paths, cannons from Portuguese-era fortifications, and benches where locals come to read, chat, and escape the heat. For travelers, the gardens offer a peaceful interlude between the intensity of the Medina and the modernity of the Ville Nouvelle.',
    highlights: ['Ancient banyan trees over 800 years old', 'Peaceful green oasis in the city center', 'Historic Portuguese cannons', 'Perfect rest stop between Medina and Ville Nouvelle'],
  },
  {
    name: 'American Legation Museum',
    image: '/images/hero-camel-caravan.webp',
    duration: '1-1.5 hours',
    cost: '20 MAD',
    description:
      'The American Legation in Tangier is the only historic landmark listed on the U.S. National Register of Historic Places located on foreign soil. Morocco was the first country to recognize American independence in 1777, and this Moorish-style building served as the American diplomatic mission from 1821 to 1961. Today it functions as a small but fascinating museum with a collection that spans Paul Bowles memorabilia, Moroccan artwork including paintings by Claudio Bravo and James McBey, historical documents from the U.S.-Morocco diplomatic relationship, and a research library. The building itself &mdash; with its intimate courtyards, carved plaster, and painted ceilings &mdash; is a hidden architectural jewel in the heart of the Medina.',
    highlights: ['Only U.S. historic landmark on foreign soil', 'Paul Bowles memorabilia and letters', 'Moorish-style architecture and courtyards', 'Fascinating U.S.-Morocco diplomatic history'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   LITERARY & ARTISTIC HERITAGE DATA
   ═══════════════════════════════════════════════════════════════ */

const literaryFigures = [
  {
    name: 'Paul Bowles',
    years: '1910-1999',
    connection: 'Resident for 52 years (1947-1999)',
    description:
      'The American novelist, composer, and translator who became Tangier\'s most famous literary resident. Bowles arrived in 1947 on the recommendation of Gertrude Stein and never left. His novel The Sheltering Sky (1949) &mdash; a harrowing tale of Americans disintegrating in the North African landscape &mdash; remains one of the great novels of the 20th century. Bowles lived in a modest apartment on the Itesa building in the Ville Nouvelle, held court at Cafe Hafa, translated Moroccan storytellers like Mohammed Mrabet and Mohamed Choukri into English, and documented traditional Moroccan music for the Library of Congress. His presence drew generations of writers and artists to Tangier. He is buried in Lakeview Cemetery, New York, but his spirit pervades every corner of the city.',
    mustSee: 'Visit Cafe Hafa where he spent decades, and the American Legation Museum for Bowles memorabilia.',
  },
  {
    name: 'William S. Burroughs',
    years: '1914-1997',
    connection: 'Resident 1954-1958',
    description:
      'The godfather of the Beat Generation lived in Tangier during the most creatively prolific period of his life. Staying in a dingy room at the Hotel El Muniria (now marked with a plaque at 1 Rue Magellan), Burroughs wrote the fragments that Allen Ginsberg and Jack Kerouac later assembled into Naked Lunch (1959), one of the most influential and controversial novels of the 20th century. He was drawn to Tangier\'s permissive atmosphere during the International Zone era, when the city operated under its own laws and attracted outcasts from around the world. Burroughs called his Tangier writings "the Word Hoard" and the city itself became a character in his hallucinatory prose.',
    mustSee: 'Hotel El Muniria plaque on Rue Magellan, and the cafes around Petit Socco where Beats gathered.',
  },
  {
    name: 'Henri Matisse',
    years: '1869-1954',
    connection: 'Multiple visits (1912-1913)',
    description:
      'The French master visited Tangier twice, and the experience permanently transformed his art. The luminous North African light, the brilliant whites of the Kasbah, the lush green of the gardens, and the saturated blues of the sea and sky pushed Matisse toward an even bolder use of color and a new sense of decorative patterning. His Tangier paintings &mdash; including Window at Tangier, The Casbah Gate, and Landscape Viewed from a Window &mdash; are among the most radiant works of early modernism. Matisse stayed at the Hotel Villa de France (still operating today) and painted the view from his window, which you can still see virtually unchanged. The Matisse connection makes Tangier one of the most important cities in the history of modern art.',
    mustSee: 'Hotel Villa de France (Matisse\'s room is preserved), the Kasbah views he painted, and the Grand Socco light.',
  },
  {
    name: 'The Beat Generation',
    years: '1950s-1960s',
    connection: 'A generation of literary pilgrims',
    description:
      'Tangier in the 1950s and 1960s was a magnet for the Beat Generation and their circle. Jack Kerouac visited in 1957, helping to assemble Burroughs\' manuscript. Allen Ginsberg stayed for extended periods, writing poetry and exploring Moroccan spirituality. Brion Gysin, a painter and writer who invented the cut-up technique with Burroughs, ran a restaurant called the 1001 Nights in the Medina and introduced the Beats to the Master Musicians of Joujouka. Tennessee Williams, Truman Capote, Gore Vidal, and Jean Genet all spent significant time in Tangier. The city offered what postwar America could not: freedom, exoticism, cheap living, and a culture that valued storytelling and human connection above commercial productivity. This literary convergence made 1950s Tangier one of the most important cultural crossroads of the 20th century.',
    mustSee: 'Walk the Petit Socco to Kasbah route the Beats walked daily. Visit the Librairie des Colonnes bookshop.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NEIGHBORHOODS DATA
   ═══════════════════════════════════════════════════════════════ */

const neighborhoods = [
  {
    name: 'The Kasbah',
    character: 'Historic hilltop fortress quarter',
    description:
      'The highest and oldest part of Tangier, the Kasbah is a walled fortress quarter perched at the summit of the Medina with commanding views over the Strait of Gibraltar. Within its walls you find the Kasbah Museum (Dar el-Makhzen), beautiful restored riads now operating as guesthouses, quiet residential streets with blue-and-white painted houses, and the Bab el-Assa gateway with its panoramic terrace. The Kasbah has a distinctly calmer, more refined atmosphere than the lower Medina, with significantly less commercial activity. At sunset, the terrace near Bab el-Assa becomes one of the most romantic viewpoints in all of Morocco, with the lights of Spain twinkling across the darkening strait.',
    bestFor: 'Sunset views, photography, upscale riad accommodation, the Kasbah Museum',
    vibe: 'Tranquil, historic, elevated',
  },
  {
    name: 'The Medina',
    character: 'Atmospheric labyrinth of alleys and markets',
    description:
      'Below the Kasbah, the Medina cascades down the hillside toward the port in a tangle of narrow streets, stairways, and hidden squares. This is the commercial and social heart of old Tangier, with small shops selling everything from spices to jellabas, hole-in-the-wall restaurants serving harira and msemen, mosques, hammams, and the legendary Petit Socco square. The lower Medina near the port is grittier and more chaotic, while the upper Medina near the Kasbah is quieter and more residential. Navigation is intuitive once you understand the basic topography: uphill leads to the Kasbah, downhill leads to the port, and the Grand Socco marks the western boundary between old and new Tangier.',
    bestFor: 'Street food, shopping, immersive cultural experience, budget accommodation',
    vibe: 'Bustling, atmospheric, sensory',
  },
  {
    name: 'Ville Nouvelle',
    character: 'French colonial-era modern center',
    description:
      'Tangier\'s Ville Nouvelle (New City) was developed during the International Zone period (1923-1956) and reflects the cosmopolitan character of that era. Boulevard Pasteur is the main artery, lined with Art Deco and mid-century modern buildings, the Terrasse des Paresseux (Terrace of the Lazy) viewpoint, upscale cafes, and the famous Librairie des Colonnes bookshop where Paul Bowles and Jean Genet browsed. Place de France is the social hub, with the grand Hotel El Minzah and sidewalk cafes that feel more Parisian than Moroccan. The Ville Nouvelle also contains the main shopping streets, banks, restaurants, and the Tangier Ville railway station. It is Tangier\'s bridge between the ancient Medina and the modern world.',
    bestFor: 'Upscale dining, Art Deco architecture, bookshops, cosmopolitan atmosphere',
    vibe: 'Cosmopolitan, European-influenced, modern',
  },
  {
    name: 'Malabata',
    character: 'Modern waterfront and beach district',
    description:
      'East of the city center, the Malabata corniche curves along the Bay of Tangier past modern hotels, apartment buildings, and the developing waterfront promenade. This is where Tangier shows its most contemporary face: the new Tangier City Center mall, luxury beach hotels, and the beginning of the coastal road toward Cap Malabata and its ruined fortress. The area has undergone massive development in recent years as part of Tangier\'s transformation into a major Mediterranean hub. While it lacks the character of the Medina or Ville Nouvelle, Malabata offers easy beach access, modern amenities, and views back toward the old city that are particularly striking at night when the Medina is illuminated.',
    bestFor: 'Beach access, modern hotels, waterfront walks, family accommodation',
    vibe: 'Modern, developing, beachfront',
  },
];

/* ═══════════════════════════════════════════════════════════════
   FOOD GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const foodHighlights = [
  {
    name: 'Fresh Seafood',
    description:
      'As a major port city on the Strait of Gibraltar, Tangier has access to some of the finest seafood in Morocco. The fish market near the port is a daily spectacle of glistening sardines, sea bass, sole, shrimp, octopus, and swordfish, much of it caught that morning. Grilled sardines are the quintessential Tangier street food &mdash; a plate of a dozen, charred over coals with a squeeze of lemon and a hunk of bread, costs as little as 15-20 MAD. For a more refined experience, the seafood restaurants along the port and in the Ville Nouvelle serve exceptional fruits de mer platters, paella-style rice dishes, and whole grilled fish at prices that would be unthinkable in southern Spain, just 35 minutes away by ferry.',
    mustTry: 'Grilled sardines at the port, seafood pastilla, fried calamari, charmoula-marinated fish',
  },
  {
    name: 'Tangier Specialties',
    description:
      'Tangier\'s cuisine reflects its position as a cultural crossroads. Northern Moroccan cooking is distinctly different from the south: lighter, more Mediterranean, with stronger Spanish and Andalusian influences. Local specialties include besara (a thick fava bean soup drizzled with olive oil and cumin), karane (snails in a fragrant broth, eaten with toothpicks from steaming pots at street stalls), msemen and baghrir (Moroccan crepes and honeycomb pancakes served for breakfast), and the exceptional local bread &mdash; Tangier\'s bakeries produce some of the best khobz in Morocco. The tea culture here also has its own character, with some cafes serving tea infused with shiba (wormwood) alongside the standard mint.',
    mustTry: 'Besara, karane (snails), msemen with honey, shiba-infused tea, local khobz',
  },
  {
    name: 'Cafe Hafa',
    description:
      'Perched on the cliffs west of the Kasbah overlooking the Strait of Gibraltar, Cafe Hafa is Tangier\'s most legendary cafe and arguably the most atmospheric cafe in all of Morocco. Established in 1921, it consists of a series of terraced platforms cascading down the hillside, each with simple tables and chairs facing the sea. Paul Bowles came here almost daily for over fifty years. The Rolling Stones, the Beatles, and Jimi Hendrix all sat on these same terraces. The menu is gloriously simple: mint tea and coffee. That is essentially it. You come for the setting, the history, and the transcendent experience of watching the sun set over the Strait with Spain shimmering on the horizon and ships passing through one of the world\'s busiest waterways.',
    mustTry: 'Mint tea on the terrace at sunset (do not come expecting food &mdash; this is tea only)',
  },
  {
    name: 'El Morocco Club',
    description:
      'For an elegant dining experience that captures the spirit of Tangier\'s cosmopolitan golden age, El Morocco Club is unmatched. Located in a beautifully restored Medina mansion, this restaurant and piano bar evokes 1940s Tangier with its Art Deco interiors, live jazz, and a sophisticated menu blending Moroccan and French cuisine. The setting is theatrical: candlelit rooms with mosaic floors, velvet banquettes, vintage photographs, and a rooftop terrace with views over the Medina. The food is excellent &mdash; think Moroccan-French fusion with dishes like lamb tagine with prunes and almonds alongside French bistro classics. The cocktail list features signature creations inspired by Tangier\'s literary legends. Reservations are essential, especially on weekends.',
    mustTry: 'Signature cocktails, rooftop terrace dining, Moroccan-French fusion dishes, Friday jazz night',
  },
];

/* ═══════════════════════════════════════════════════════════════
   NIGHTLIFE DATA
   ═══════════════════════════════════════════════════════════════ */

const nightlifeSpots = [
  {
    name: 'El Morocco Club',
    type: 'Piano bar & restaurant',
    description: 'Live jazz and cocktails in a stunning Art Deco Medina mansion. The most atmospheric evening venue in Tangier, channeling the city\'s 1940s golden age.',
    priceRange: '$$$$',
    bestFor: 'Sophisticated evening out, cocktails, live music',
  },
  {
    name: 'Cafe Hafa',
    type: 'Terrace cafe',
    description: 'While technically a daytime cafe, Cafe Hafa at sunset is Tangier\'s most transcendent evening experience. Arrive by 5pm in summer to secure a front-row terrace.',
    priceRange: '$',
    bestFor: 'Sunset ritual, tea with a view, literary pilgrimage',
  },
  {
    name: 'Cinema Rif',
    type: 'Arthouse cinema & cultural center',
    description: 'Beautifully restored Art Deco cinema on the Grand Socco, now showing independent and arthouse films alongside hosting cultural events. The rooftop cafe is excellent.',
    priceRange: '$$',
    bestFor: 'Film screenings, cultural events, rooftop drinks',
  },
  {
    name: 'Le Tangerina Rooftop',
    type: 'Rooftop bar',
    description: 'The rooftop terrace of this Kasbah boutique hotel offers panoramic views over the Strait of Gibraltar with cocktails and light bites. One of the most exclusive viewpoints in the city.',
    priceRange: '$$$',
    bestFor: 'Sunset cocktails, panoramic Strait views, romantic evening',
  },
  {
    name: 'Terrasse des Paresseux',
    type: 'Public viewpoint',
    description: 'The "Terrace of the Lazy" on Boulevard Pasteur is where locals gather in the evening to watch the sunset, stroll, and people-watch. Free and utterly Tangerine in character.',
    priceRange: 'Free',
    bestFor: 'Evening stroll, people-watching, authentic local atmosphere',
  },
  {
    name: 'Hotel El Minzah Bar',
    type: 'Hotel bar',
    description: 'The grand dame of Tangier hotels has a legendary bar that has been serving diplomats, writers, and travelers since the International Zone era. The Moroccan-Andalusian decor is spectacular.',
    priceRange: '$$$',
    bestFor: 'Classic hotel bar experience, whisky, historic atmosphere',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEACH GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const beaches = [
  {
    name: 'Tangier City Beach (Plage Municipale)',
    distance: 'Central',
    description:
      'The long, curved beach along the Bay of Tangier is the most accessible beach in the city, stretching from the port area eastward along the Malabata corniche. The beach has undergone significant improvement in recent years, with a cleaned-up waterfront promenade, beach clubs, and seasonal restaurants. The western end near the port is the least appealing; head east toward Malabata for cleaner sand and water. In summer, the beach is packed with local families and has a lively, festive atmosphere. Facilities include sunbed and umbrella rentals (30-50 MAD), changing rooms at beach clubs, and numerous cafes along the promenade.',
    bestFor: 'Convenience, swimming, people-watching',
    waterType: 'Mediterranean (calm, warm in summer)',
  },
  {
    name: 'Achakkar Beach',
    distance: '14 km west',
    description:
      'Located near Cap Spartel where the Atlantic meets the Mediterranean, Achakkar is a wild, dramatic beach backed by low cliffs and lush vegetation. This is the favored weekend beach for Tangier locals who want to escape the city beach crowds. The sand is golden, the waves are bigger than the city beach (this is the Atlantic side), and on clear days the views toward Spain are spectacular. There are a handful of seasonal restaurants and cafes on the bluff above the beach serving grilled fish and cold drinks. The beach can have strong currents, so swimmers should exercise caution, especially outside the summer lifeguard season.',
    bestFor: 'Scenic beauty, escaping crowds, surfable waves',
    waterType: 'Atlantic (rougher, cooler, stronger currents)',
  },
  {
    name: 'Dalia Beach',
    distance: '25 km west',
    description:
      'Further along the Atlantic coast past Cap Spartel, Dalia is a beautiful crescent beach in a more rural setting. The beach is less developed than Achakkar, offering a sense of remoteness that feels surprising so close to a major city. The water is clear Atlantic blue, the sand is soft, and the surrounding landscape of green hills and scattered farmhouses is quintessentially northern Moroccan. In summer, temporary beach restaurants serve fresh grilled fish and Moroccan salads. Dalia is worth the extra drive for those seeking a quieter beach experience away from Tangier\'s urban energy.',
    bestFor: 'Quiet escape, natural beauty, fresh seafood',
    waterType: 'Atlantic (clear but cool, moderate waves)',
  },
  {
    name: 'Cap Spartel Beach (Robinson Beach)',
    distance: '14 km west',
    description:
      'Tucked below the Cap Spartel lighthouse, this small, atmospheric beach sits at the exact point where the Atlantic and Mediterranean converge. Also known as Robinson Beach (or Plage Robinson), it is named after a legendary beach restaurant that has served freshly caught fish to visitors for decades. The beach is dramatic rather than conventionally beautiful &mdash; wild, windy, and framed by rocky outcrops &mdash; but the sense of being at the meeting point of two seas on the edge of two continents is extraordinary. Combine a visit with the Cap Spartel lighthouse and the nearby Caves of Hercules for a memorable half-day excursion.',
    bestFor: 'Dramatic scenery, fresh fish at Robinson restaurant, geographical significance',
    waterType: 'Atlantic-Mediterranean convergence (unpredictable currents &mdash; swim with caution)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHERE TO STAY DATA
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    category: 'Luxury',
    options: [
      {
        name: 'Hotel El Minzah',
        area: 'Ville Nouvelle',
        price: 'From 2,000 MAD/night',
        description: 'Tangier\'s grand historic hotel, open since 1930. Moroccan-Andalusian palace with lush gardens, pool, multiple restaurants, and a legendary bar. Every notable visitor to Tangier has passed through its doors.',
      },
      {
        name: 'Fairmont Tazi Palace',
        area: 'City Center',
        price: 'From 2,500 MAD/night',
        description: 'The newly restored Art Deco masterpiece in the heart of Tangier, now operated by Fairmont. Spectacular rooftop pool, refined dining, and a location bridging the Medina and Ville Nouvelle.',
      },
    ],
  },
  {
    category: 'Boutique Riads',
    options: [
      {
        name: 'La Tangerina',
        area: 'Kasbah',
        price: 'From 900 MAD/night',
        description: 'A beloved boutique guesthouse in the Kasbah with a famous rooftop terrace overlooking the Strait. Intimate rooms, warm hospitality, and one of the best views in Tangier.',
      },
      {
        name: 'Dar Nour',
        area: 'Kasbah',
        price: 'From 750 MAD/night',
        description: 'A charming riad at the edge of the Kasbah with individually decorated rooms, a serene courtyard, and terraces offering sweeping views of the bay and the Rif Mountains.',
      },
    ],
  },
  {
    category: 'Mid-Range',
    options: [
      {
        name: 'Hotel Nord-Pinus',
        area: 'Medina',
        price: 'From 600 MAD/night',
        description: 'A stylishly renovated Medina property by the Provencal hotel group, blending Moroccan architecture with contemporary design. Rooftop restaurant and bar with port views.',
      },
      {
        name: 'Hotel Continental',
        area: 'Port / Lower Medina',
        price: 'From 400 MAD/night',
        description: 'A faded grande dame hotel overlooking the port, famous from the film The Sheltering Sky. The decor is gloriously vintage, the views are superb, and the atmosphere drips with history.',
      },
    ],
  },
  {
    category: 'Budget',
    options: [
      {
        name: 'Medina hostels & guesthouses',
        area: 'Medina',
        price: 'From 80-200 MAD/night',
        description: 'Tangier\'s Medina has a growing selection of backpacker hostels and simple guesthouses. Dar Mouchka and Hostel Tangier offer clean dorms and private rooms at excellent prices.',
      },
      {
        name: 'Pension Fuentes',
        area: 'Petit Socco',
        price: 'From 150 MAD/night',
        description: 'A classic budget choice right on the Petit Socco square, offering simple rooms with unbeatable location. The legendary view from the terrace compensates for basic facilities.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   GETTING THERE DATA
   ═══════════════════════════════════════════════════════════════ */

const gettingThere = [
  {
    mode: 'Ferry from Spain',
    icon: Ship,
    routes: [
      { name: 'Tarifa to Tangier Ville', duration: '35 minutes', frequency: '8-10 departures daily', notes: 'The fastest and most scenic crossing. Ferries dock at the old port in central Tangier &mdash; you can walk to the Medina.' },
      { name: 'Algeciras to Tanger Med', duration: '90 minutes', frequency: '10+ departures daily', notes: 'More departures but docks at Tanger Med port, 45 km east of the city. Free shuttle bus or 300-400 MAD taxi to central Tangier.' },
    ],
    tips: 'Book FRS, Inter Shipping, or Balearia ferries online for the best prices (from 35 EUR one way). Tarifa is recommended for foot passengers; Algeciras for those with vehicles. Have your passport ready &mdash; you clear Moroccan immigration on the ferry.',
  },
  {
    mode: 'Al Boraq High-Speed Train',
    icon: Train,
    routes: [
      { name: 'Casablanca to Tangier', duration: '2 hours 10 minutes', frequency: '12 departures daily', notes: 'Africa\'s first high-speed rail line, reaching speeds of 320 km/h. Modern, comfortable, and reliable.' },
      { name: 'Rabat to Tangier', duration: '1 hour 20 minutes', frequency: '12 departures daily', notes: 'A convenient connection from the capital. Departs from Rabat Agdal station.' },
    ],
    tips: 'Book tickets at oncf.ma or at the station. First class (around 250 MAD from Casablanca) is excellent value. The Tangier Ville station is a short taxi ride from the Medina. This is the most comfortable way to reach Tangier from elsewhere in Morocco.',
  },
  {
    mode: 'Flights',
    icon: Plane,
    routes: [
      { name: 'Ibn Battouta Airport (TNG)', duration: '15 km from city center', frequency: 'Domestic and European flights', notes: 'Direct flights from London, Paris, Brussels, Madrid, Barcelona, and domestic connections via Royal Air Maroc.' },
    ],
    tips: 'The airport is modern and well-connected. Airport taxis to the city center cost 150-200 MAD (fixed rate). Ryanair and Wizz Air offer budget flights from several European cities. In peak season, book early as capacity is limited.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DAY TRIPS DATA
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Asilah',
    distance: '46 km south (45 minutes)',
    description:
      'This small, exquisitely beautiful Atlantic coastal town is Tangier\'s most popular day trip. Asilah\'s medina is a masterpiece of whitewashed walls adorned with vibrant murals from the annual arts festival, Portuguese ramparts overlooking the sea, and quiet streets with art galleries and bohemian cafes. The beach is excellent, and the seafood restaurants along the ramparts serve some of the best fish on the Atlantic coast. Easily reached by train (30 minutes, very cheap) or grand taxi.',
    highlight: 'Mural-covered medina walls, Portuguese ramparts, stunning beach, seafood lunch',
  },
  {
    name: 'Tetouan',
    distance: '60 km east (1 hour)',
    description:
      'The "White Dove" of northern Morocco has a UNESCO World Heritage medina that is the best-preserved Andalusian old city in the country. Built by Moorish refugees expelled from Spain, Tetouan\'s medina has a distinctly Spanish character: whitewashed walls, wrought-iron balconies, and tiled courtyards. The Royal Artisan School preserves traditional crafts, and the Hassan II Square is impressively grand. Tetouan sees far fewer tourists than Tangier and offers an authentic glimpse into northern Moroccan life.',
    highlight: 'UNESCO Andalusian medina, Royal Artisan School, authentic atmosphere',
  },
  {
    name: 'Chefchaouen',
    distance: '115 km southeast (2-2.5 hours)',
    description:
      'The legendary blue city of the Rif Mountains is Morocco\'s most photogenic destination and an unforgettable day trip from Tangier. Every surface in the medina is painted in mesmerizing shades of blue, from powder to cobalt to indigo, creating a visual experience unlike anywhere else on Earth. The journey through the Rif Mountains is spectacularly scenic. While a full day trip is possible (leave early, return late), spending one night allows you to see the blue city at its most magical in early morning and late afternoon light.',
    highlight: 'Blue-painted medina, Rif Mountain scenery, artisan crafts, mountain cheese',
  },
  {
    name: 'Cap Spartel & Caves of Hercules',
    distance: '14 km west (20 minutes)',
    description:
      'The closest and most convenient half-day excursion from Tangier combines the dramatic Cap Spartel headland where the Atlantic meets the Mediterranean with the mythological Caves of Hercules. Add lunch at the legendary Robinson Beach restaurant for grilled fish at the edge of two continents. The route passes through Tangier\'s most exclusive residential district, with palatial villas hidden among eucalyptus groves.',
    highlight: 'Where two seas meet, Hercules caves, Robinson Beach seafood, lighthouse views',
  },
  {
    name: 'Ceuta (Spanish Border City)',
    distance: '63 km east (1 hour to border)',
    description:
      'The Spanish autonomous city of Ceuta occupies a small peninsula on the Moroccan coast and offers a fascinating cultural juxtaposition: duty-free Spanish shops, tapas bars, and Catholic churches just minutes from the Moroccan border. The Royal Walls (Murallas Reales), Maritime Park, and the blend of Spanish and Moroccan cultures make it a unique excursion. Note: you need to cross an international border, so bring your passport and be prepared for potential queues at the Fnideq/Ceuta crossing.',
    highlight: 'Spanish enclave on African soil, duty-free shopping, tapas, cultural contrast',
  },
];

/* ═══════════════════════════════════════════════════════════════
   SHOPPING GUIDE DATA
   ═══════════════════════════════════════════════════════════════ */

const shoppingGuide = [
  {
    name: 'Medina Souks',
    whatToBuy: 'Leather goods, spices, Riffian textiles, ceramics, jellabas',
    description: 'Tangier\'s Medina souks are less overwhelming than Marrakech or Fes but offer genuine products at fairer prices with less aggressive haggling. The streets radiating from the Petit Socco are the main shopping arteries. Quality leather bags, babouches (traditional slippers), and Riffian woven goods are the standout purchases.',
    tip: 'Start at the Grand Socco and work inward. Prices are generally lower than southern Moroccan medinas, and vendors are less pushy.',
  },
  {
    name: 'Librairie des Colonnes',
    whatToBuy: 'Books, literary memorabilia',
    description: 'This iconic bookshop on Boulevard Pasteur has been a Tangier cultural institution since 1949. Paul Bowles, Samuel Beckett, Jean Genet, and Tennessee Williams all browsed these shelves. The shop stocks an excellent selection of books about Morocco, Tangier history, and literature in French, English, Arabic, and Spanish.',
    tip: 'A cultural pilgrimage as much as a shopping experience. The staff can recommend books about Tangier\'s literary history.',
  },
  {
    name: 'Ensemble Artisanal',
    whatToBuy: 'Fixed-price government-certified crafts',
    description: 'Located near the Grand Socco, this government-run crafts center offers quality Moroccan handicrafts at fixed prices. It is the ideal place to understand fair market values before venturing into the souks to bargain, or to simply buy without negotiation. Products include ceramics, textiles, woodwork, and metalwork.',
    tip: 'Use the fixed prices here as your benchmark when bargaining in the Medina. If a Medina vendor quotes more than double the Ensemble price, walk away.',
  },
  {
    name: 'Rue de la Liberte & Boulevard Pasteur',
    whatToBuy: 'Contemporary fashion, antiques, gallery art',
    description: 'The Ville Nouvelle\'s main shopping streets offer a more modern retail experience: contemporary Moroccan fashion boutiques, antique dealers specializing in International Zone-era furniture and decor, art galleries showing local artists, and upscale patisseries. This is where Tangier\'s cosmopolitan character is most evident.',
    tip: 'Visit on a Saturday morning when the streets are liveliest. The antique shops sometimes stock remarkable International Zone memorabilia.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEST TIME TO VISIT DATA
   ═══════════════════════════════════════════════════════════════ */

const seasons = [
  {
    season: 'Spring (March-May)',
    temp: '15-22 C',
    verdict: 'Best',
    description: 'The ideal time to visit Tangier. Temperatures are comfortable, wildflowers blanket the surrounding hills, the city is green and fragrant, and tourist crowds have not yet arrived. The Strait of Gibraltar is at its clearest, with Spain sharply visible on most days. Late April and May offer the best combination of weather and tranquility.',
    conditions: 'Occasional rain in March, warming steadily through May. Light layers recommended.',
  },
  {
    season: 'Summer (June-August)',
    temp: '22-30 C',
    verdict: 'Good for beaches',
    description: 'Peak tourist season and the best time for beach lovers. The city is warm, lively, and bustling with Moroccan and European visitors. Beaches are packed, restaurants are full, and the atmosphere is festive. The Levante wind can bring hot, hazy days in July and August. Book accommodation well in advance and expect higher prices.',
    conditions: 'Hot but tempered by sea breezes. Very little rain. Peak prices and crowds.',
  },
  {
    season: 'Autumn (September-November)',
    temp: '16-25 C',
    verdict: 'Excellent',
    description: 'September and October are arguably the best months of all &mdash; summer crowds have departed, the sea is still warm enough for swimming, prices drop, and the light takes on a golden, painterly quality that recalls the Matisse era. November brings cooler temperatures and the first autumn rains, but the city has a cozy, atmospheric quality.',
    conditions: 'Warm through October, cooling in November. Some rain by late autumn.',
  },
  {
    season: 'Winter (December-February)',
    temp: '10-16 C',
    verdict: 'Off-season charm',
    description: 'Tangier in winter is cool, rainy, and quiet &mdash; and that is precisely its appeal for certain travelers. The Medina empties of tourists, cafes are uncrowded, and the dramatic winter storms crashing against Cap Spartel are genuinely spectacular. This is the season to experience Tangier as residents do: warm cafes, hearty harira, and long conversations. Bring warm clothes and waterproof layers.',
    conditions: 'Cool and rainy, occasionally windy. The cheapest season for accommodation.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   2-DAY ITINERARY DATA
   ═══════════════════════════════════════════════════════════════ */

const itinerary = [
  {
    day: 'Day 1: The Heart of Tangier',
    morning: {
      title: 'Morning: Kasbah & Medina',
      activities: [
        'Start at the Kasbah Museum (Dar el-Makhzen) &mdash; arrive at opening (10:00) to have it nearly to yourself',
        'Explore the Kasbah quarter and its panoramic terraces with views to Spain',
        'Descend through the Medina\'s winding alleys toward the Petit Socco',
        'Coffee at Cafe Central on the Petit Socco, soaking in the literary atmosphere',
      ],
    },
    afternoon: {
      title: 'Afternoon: Grand Socco & Ville Nouvelle',
      activities: [
        'Emerge at the Grand Socco and explore the Mendoubia Gardens',
        'Visit the American Legation Museum in the Medina (1 hour)',
        'Walk Boulevard Pasteur to the Terrasse des Paresseux viewpoint',
        'Browse the legendary Librairie des Colonnes bookshop',
        'Lunch at a Ville Nouvelle restaurant &mdash; try a seafood bistro on Rue de la Liberte',
      ],
    },
    evening: {
      title: 'Evening: Sunset & Dinner',
      activities: [
        'Head to Cafe Hafa by 5pm (summer) or 4pm (winter) for sunset tea on the terraces',
        'Watch the sky turn gold over the Strait of Gibraltar',
        'Dinner at El Morocco Club for Moroccan-French fusion and live jazz',
        'After-dinner stroll through the illuminated Medina back to your riad',
      ],
    },
  },
  {
    day: 'Day 2: Coast, Caves & Culture',
    morning: {
      title: 'Morning: Cap Spartel & Caves of Hercules',
      activities: [
        'Hire a taxi for the morning (negotiate 300-400 MAD round trip with waiting)',
        'Drive to Cap Spartel to see where the Atlantic meets the Mediterranean',
        'Visit the Caves of Hercules and see the famous Africa-shaped sea opening',
        'Lunch at Robinson Beach restaurant &mdash; grilled fish at the edge of two continents',
      ],
    },
    afternoon: {
      title: 'Afternoon: Deeper Exploration',
      activities: [
        'Return to the city and explore areas you missed on Day 1',
        'Visit the Tangier Museum of Contemporary Art or a Medina gallery',
        'Shop for souvenirs in the Medina souks &mdash; leather goods, spices, Riffian textiles',
        'Stop at the Ensemble Artisanal for fixed-price crafts',
      ],
    },
    evening: {
      title: 'Evening: Final Night',
      activities: [
        'Sunset from the Kasbah terrace near Bab el-Assa &mdash; one of Morocco\'s best viewpoints',
        'Farewell dinner at a traditional Medina restaurant &mdash; try seafood pastilla and lamb tagine',
        'Final mint tea at a Petit Socco cafe, watching the Medina settle into evening',
      ],
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   RELATED PAGES DATA
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  { title: 'Chefchaouen Guide', href: '/chefchaouen-guide', description: 'The Blue Pearl of the Rif Mountains' },
  { title: 'Tangier Attractions', href: '/cities/tangier/attractions', description: 'Detailed attraction listings' },
  { title: 'Tangier Restaurants', href: '/cities/tangier/restaurants', description: 'Where to eat in Tangier' },
  { title: 'Ferry & Transport', href: '/transport', description: 'Getting around Morocco' },
  { title: 'Morocco Beaches', href: '/beaches', description: 'Complete beach guide' },
  { title: 'Medina Guide', href: '/medina-guide', description: 'Navigate Morocco\'s ancient cities' },
  { title: 'Northern Morocco Cities', href: '/cities', description: 'Explore all Moroccan cities' },
  { title: 'Morocco Itineraries', href: '/itineraries', description: 'Plan your perfect trip' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function TangierGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-tangier-kasbah.webp"
            alt="Panoramic view of the Tangier Kasbah and Medina overlooking the Strait of Gibraltar with Spain visible in the distance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">
              Cities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tangier Guide</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Where Africa Meets Europe
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tangier: Morocco&apos;s Gateway to the World
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A legendary port city on the Strait of Gibraltar where continents, oceans, and
              cultures converge &mdash; the city of Bowles, Burroughs, Matisse, and a thousand
              untold stories.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where Africa Meets Europe
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Standing in Tangier, you can see Spain. That fact alone &mdash; the visible
              proximity of two continents &mdash; defines everything about this extraordinary city.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Tangier is not like other Moroccan cities. Perched on the northwestern tip of Africa,
              where the Mediterranean meets the Atlantic and the mountains of Spain shimmer just
              14 kilometers across the Strait of Gibraltar, Tangier has always been a place apart &mdash;
              a city that belongs as much to the sea and to the imagination as it does to any nation.
              For thousands of years, it has been the hinge between worlds: Africa and Europe, Islam
              and Christianity, East and West, the known and the unknown.
            </p>
            <p>
              The Phoenicians founded a trading post here. The Romans called it Tingis and made it
              the capital of Mauretania Tingitana. The Portuguese, Spanish, and British each held
              it in turn. From 1923 to 1956, Tangier operated as an International Zone &mdash; a
              stateless, tax-free city governed by a committee of European powers where anything
              was possible and very little was illegal. This era attracted a remarkable cast of
              writers, artists, spies, exiles, and adventurers: Paul Bowles, William Burroughs,
              Henri Matisse, Tennessee Williams, Truman Capote, the Rolling Stones, and countless
              others who found in Tangier a freedom that existed nowhere else.
            </p>
            <p>
              Today Tangier is experiencing a renaissance. Massive investment has transformed the
              port and waterfront, Africa&apos;s first high-speed rail line (the Al Boraq) connects
              it to Casablanca in just over two hours, new cultural institutions and restaurants
              are opening constantly, and the city is reclaiming its historic role as one of the
              Mediterranean&apos;s great cosmopolitan crossroads. Yet the old Tangier endures: the
              Kasbah still crowns the hilltop, the Medina still tumbles down to the sea, Cafe
              Hafa still serves tea on its cliff-edge terraces, and the light &mdash; the extraordinary,
              luminous Tangier light that captivated Matisse &mdash; still pours over the whitewashed
              walls like liquid gold.
            </p>
            <p>
              This guide is your comprehensive companion to a city unlike any other in Morocco, or
              anywhere else on Earth.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { label: 'Population', value: '1.1 million', icon: Users },
              { label: 'Best Time', value: 'Apr-Jun, Sep-Oct', icon: Sun },
              { label: 'Spain Visible', value: '14 km away', icon: Eye },
              { label: 'Ferry to Europe', value: '35 minutes', icon: Ship },
            ].map((fact) => (
              <div key={fact.label} className="card-moroccan p-4 text-center">
                <fact.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                <p className="text-xs text-[var(--text-secondary)]">{fact.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Attractions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Attractions in Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the hilltop Kasbah to the mythological Caves of Hercules, Tangier packs
              a remarkable density of cultural, historical, and natural attractions into a
              compact, walkable city.
            </p>
          </div>

          <div className="space-y-8">
            {topAttractions.map((attraction, index) => (
              <article
                key={attraction.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white text-lg font-bold shadow-lg">
                      #{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                      {attraction.duration} &middot; {attraction.cost}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                    {attraction.description}
                  </p>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[var(--color-primary)]" />
                      Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {attraction.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Literary & Artistic Heritage ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Literary &amp; Artistic Heritage
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              No city of its size has attracted more writers, painters, and artists than Tangier.
              From Matisse to Burroughs, the city has been a muse and a refuge for creative
              spirits for over a century.
            </p>
          </div>

          <div className="space-y-6">
            {literaryFigures.map((figure) => (
              <article key={figure.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 md:w-48">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {figure.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{figure.years}</p>
                    <p className="text-sm font-semibold text-[var(--color-primary)] mt-1">{figure.connection}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                      {figure.description}
                    </p>
                    <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <p className="text-xs text-[var(--color-primary)] font-medium">{figure.mustSee}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Neighborhoods ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tangier&apos;s Neighborhoods
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the ancient Kasbah to the modern Malabata waterfront, each of Tangier&apos;s
              distinct quarters offers a different facet of this multifaceted city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood) => (
              <article key={neighborhood.name} className="card-moroccan p-6 md:p-8">
                <span className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                  {neighborhood.character}
                </span>
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mt-1 mb-3">
                  {neighborhood.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {neighborhood.description}
                </p>
                <div className="pt-4 border-t border-[var(--border-light)] space-y-2">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {neighborhood.bestFor}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Vibe:</span> {neighborhood.vibe}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tangier Food Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A port city where the Mediterranean meets the Atlantic, Tangier&apos;s food
              scene blends northern Moroccan tradition with cosmopolitan international
              influences and some of the freshest seafood in the country.
            </p>
          </div>

          <div className="space-y-6">
            {foodHighlights.map((food) => (
              <article key={food.name} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {food.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-4">
                  {food.description}
                </p>
                <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">
                    <span className="font-bold">Must try:</span> {food.mustTry}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tangier by Night ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Wine className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tangier by Night
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tangier has the liveliest nightlife in northern Morocco, from legendary
              hotel bars and jazz clubs to rooftop terraces overlooking two continents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nightlifeSpots.map((spot) => (
              <article key={spot.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                    {spot.type}
                  </span>
                  <span className="text-xs font-bold text-[var(--text-secondary)]">{spot.priceRange}</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {spot.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spot.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {spot.bestFor}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container-morocco max-w-4xl">
          <img src="/images/art-tangier-kasbah.webp" alt="Artistic rendering of the historic Tangier Kasbah with its whitewashed walls, ornate doorways, and sweeping views over the Strait of Gibraltar" loading="lazy" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* ── Beach Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tangier Beach Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the calm Mediterranean bay to the wild Atlantic coast, Tangier offers
              a remarkable variety of beach experiences within a short drive of the city center.
            </p>
          </div>

          <div className="space-y-6">
            {beaches.map((beach) => (
              <article key={beach.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0 md:w-48">
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {beach.name}
                    </h3>
                    <p className="text-sm text-[var(--color-primary)] font-semibold mt-1">{beach.distance}</p>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{beach.waterType}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                      {beach.description}
                    </p>
                    <div className="pt-3 border-t border-[var(--border-light)]">
                      <p className="text-sm text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {beach.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay in Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From grand historic hotels to intimate Kasbah riads and budget Medina
              guesthouses, Tangier has accommodation for every style and budget.
            </p>
          </div>

          <div className="space-y-8">
            {accommodations.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--color-primary)]" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.options.map((option) => (
                    <article key={option.name} className="card-moroccan p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                          {option.name}
                        </h4>
                        <span className="text-xs font-semibold text-[var(--color-primary)]">{option.area}</span>
                      </div>
                      <p className="text-sm font-semibold text-[var(--color-primary)] mb-2">{option.price}</p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {option.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting to Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tangier is one of the most accessible cities in Morocco, with ferry connections
              to Spain, Africa&apos;s only high-speed rail line, and an international airport.
            </p>
          </div>

          <div className="space-y-8">
            {gettingThere.map((transport) => (
              <article key={transport.mode} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <transport.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {transport.mode}
                  </h3>
                </div>

                <div className="space-y-4 mb-4">
                  {transport.routes.map((route) => (
                    <div key={route.name} className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">{route.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-[var(--text-secondary)]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {route.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {route.frequency}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{route.notes}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{transport.tips}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Day Trips from Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tangier&apos;s strategic position makes it an exceptional base for exploring
              northern Morocco, from the blue city of Chefchaouen to the Spanish enclave of Ceuta.
            </p>
          </div>

          <div className="space-y-6">
            {dayTrips.map((trip, index) => (
              <article
                key={trip.name}
                className={`card-moroccan p-6 md:p-8 flex flex-col md:flex-row gap-6 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="shrink-0 md:w-56">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {trip.name}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-primary)]">{trip.distance}</p>
                </div>
                <div className="flex-1">
                  <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                    {trip.description}
                  </p>
                  <div className="pt-3 border-t border-[var(--border-light)] flex items-start gap-2">
                    <Star className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--color-primary)] font-medium">
                      <span className="font-bold">Highlight:</span> {trip.highlight}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Shopping Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shopping in Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tangier shopping ranges from traditional Medina souks to cosmopolitan Ville
              Nouvelle boutiques, with generally fairer prices and less aggressive selling
              than southern Moroccan cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shoppingGuide.map((shop) => (
              <article key={shop.name} className="card-moroccan p-6">
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {shop.name}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold mb-3">{shop.whatToBuy}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {shop.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <p className="text-xs text-[var(--color-primary)] font-medium">{shop.tip}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CloudSun className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Tangier&apos;s Mediterranean-Atlantic climate means mild winters and warm summers,
              with spring and autumn offering the most pleasant conditions for sightseeing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasons.map((season) => (
              <article key={season.season} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {season.season}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[var(--text-secondary)]">{season.temp}</span>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      season.verdict === 'Best' ? 'bg-green-100 text-green-700' :
                      season.verdict === 'Excellent' ? 'bg-emerald-100 text-emerald-700' :
                      season.verdict === 'Good for beaches' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {season.verdict}
                    </span>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-[15px] mb-3">
                  {season.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold text-[var(--text-primary)]">Conditions:</span> {season.conditions}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2-Day Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Perfect 2-Day Tangier Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Two days is the ideal amount of time to experience Tangier&apos;s essential
              attractions, food, and atmosphere without feeling rushed.
            </p>
          </div>

          <div className="space-y-8">
            {itinerary.map((day) => (
              <article key={day.day} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-primary)] text-white p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold">
                    {day.day}
                  </h3>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[day.morning, day.afternoon, day.evening].map((period) => (
                      <div key={period.title}>
                        <h4 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                          {period.title}
                        </h4>
                        <ul className="space-y-2">
                          {period.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                              <Star className="w-3 h-3 text-[var(--color-primary)] shrink-0 mt-1" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Discover more of Morocco with our comprehensive travel guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:border-[var(--color-primary)]/30 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{page.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)]">
                  Read guide <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips for Visiting Tangier
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential advice to make your Tangier visit smoother, safer, and more enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Language',
                icon: BookOpen,
                text: 'Tangier is exceptionally multilingual. Arabic and French are the primary languages, but Spanish is widely spoken due to proximity to Spain, and English is common in tourist areas. In the Medina, some older merchants still speak a smattering of every European language. Learning a few words of Darija (Moroccan Arabic) goes a long way: "Shukran" (thank you), "La" (no), and "Bsaha" (enjoy your meal).',
              },
              {
                title: 'Money & Tipping',
                icon: GlassWater,
                text: 'The Moroccan Dirham (MAD) is the local currency. ATMs are plentiful in the Ville Nouvelle and near the Grand Socco. Credit cards are accepted at hotels and upscale restaurants but not in the Medina. Tipping is customary: 10-15% at restaurants, 5-10 MAD for small services, 10-20 MAD for guided help in the Medina. Carry small bills and coins for the souks.',
              },
              {
                title: 'Safety',
                icon: Shield,
                text: 'Tangier is generally safe for tourists, including solo travelers and women. The Medina is well-policed, and violent crime against tourists is rare. The main annoyances are persistent touts near the port and Grand Socco offering unsolicited guide services. A firm "La, shukran" (No, thank you) is sufficient. Avoid the port area late at night and keep valuables concealed in crowded areas.',
              },
              {
                title: 'Getting Around',
                icon: Footprints,
                text: 'Central Tangier is best explored on foot. The Medina and Kasbah are pedestrian-only. Petit taxis (blue) are metered and affordable for trips within the city (10-20 MAD for most journeys). For Cap Spartel and the Caves of Hercules, negotiate a round-trip fare with a taxi (300-400 MAD with waiting time). The new Tangier tramway connects the city center with outlying neighborhoods.',
              },
              {
                title: 'Photography',
                icon: Camera,
                text: 'Tangier is extraordinarily photogenic, especially the Kasbah in morning light and the Strait at sunset. Always ask permission before photographing people, particularly in the Medina. Some vendors may expect a small tip (5 MAD) for being photographed. The Kasbah terraces, Cafe Hafa, and Cap Spartel offer the most iconic views. Bring a wide-angle lens for the narrow Medina alleys.',
              },
              {
                title: 'Dress Code',
                icon: Users,
                text: 'Tangier is more liberal in dress than many Moroccan cities, reflecting its cosmopolitan history. In the Ville Nouvelle, casual Western clothing is perfectly fine. In the Medina, modest dress (covered shoulders and knees) is respectful, though not strictly required. Beachwear is appropriate only at the beach. Remove shoes when entering mosques (non-Muslims cannot enter most mosques in Morocco).',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-6 flex gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container-morocco">
          <div className="text-center mb-12">
            <Camera className="w-8 h-8 mx-auto mb-4" style={{ color: '#A0522D' }} />
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1814' }}>
              Tangier in Pictures
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#1A1814', opacity: 0.7 }}>
              Where Africa meets Europe across the Strait of Gibraltar &mdash; the legendary
              port city of writers, artists, and endless cultural crossroads.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/hero-tangier-kasbah.webp', alt: 'Tangier Kasbah perched above the medina with views of the Strait of Gibraltar' },
              { src: '/images/hero-tangier-panorama.webp', alt: 'Panoramic view of Tangier bay with the port, medina, and modern city stretching along the coast' },
              { src: '/images/hero-tetouan.webp', alt: 'Nearby Tetouan, the white dove of the Rif, a UNESCO-listed Andalusian medina south of Tangier' },
            ].map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Plan Your Tangier Trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/morocco-day-trips', title: 'Day Trips', desc: 'Chefchaouen, Asilah, and Cap Spartel from Tangier.' },
              { href: '/morocco-nightlife-guide', title: 'Nightlife Guide', desc: 'Tangier rooftop bars and live music venues.' },
              { href: '/morocco-airports-guide', title: 'Airports Guide', desc: 'Tangier Ibn Battouta airport info and transfers.' },
              { href: '/morocco-train-routes', title: 'Train Routes', desc: 'Al Boraq high-speed from Casablanca to Tangier.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover Tangier?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you arrive by ferry from Spain or by high-speed train from Casablanca,
            Tangier will captivate you with its extraordinary position at the crossroads of
            continents, cultures, and history. The Strait awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities/tangier/attractions"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Tangier Attractions
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
    </>
  );
}
