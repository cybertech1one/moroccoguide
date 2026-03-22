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
  Sparkles,
  Globe,
  AlertTriangle,
  Footprints,
  Eye,
  Waves,
  Sunset,
  Mountain,
  Coffee,
  MoonStar,
  BookOpen,
  Building,
  Users,
  Navigation,
  Train,
  Palette,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Casablanca Like a Local: Hidden Gems & Neighborhoods 2026 | Insider Guide',
  description:
    'Discover Casablanca like a local in 2026. Quartier Habous, Maarif shopping, Anfa Art Deco, Ain Diab corniche, Central Market seafood, Derb Sultan authentic food, local baghrir breakfast spots, Casa Tramway tips, and neighborhood guides.',
  keywords: [
    'casablanca like a local',
    'casablanca hidden gems',
    'casablanca neighborhoods',
    'quartier habous casablanca',
    'maarif casablanca',
    'casablanca local food',
    'anfa casablanca',
    'ain diab casablanca',
    'casablanca central market',
    'derb sultan casablanca',
    'casablanca art deco',
    'casablanca off beaten path',
    'bourgogne casablanca',
    'casablanca cathedral',
    'rick cafe casablanca',
    'villa des arts casablanca',
    'casa tramway',
    'casablanca local guide 2026',
    'casablanca authentic experiences',
    'casablanca nightlife',
  ],
  openGraph: {
    title: 'Casablanca Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Go beyond Hassan II Mosque. Discover authentic Casablanca neighborhoods, Quartier Habous, Maarif shopping, Art Deco Anfa, Central Market seafood, local food spots, and real prices.',
    url: `${BASE_URL}/casablanca-local-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-casablanca.webp`,
        width: 1200,
        height: 630,
        alt: 'Casablanca cityscape showing the blend of Art Deco architecture and modern buildings with the Atlantic Ocean coastline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casablanca Like a Local: Hidden Gems & Neighborhoods 2026',
    description:
      'Beyond the mosque. Quartier Habous, Maarif district, Anfa Art Deco, Ain Diab corniche, Central Market seafood, and authentic local food at real prices.',
    images: [`${BASE_URL}/images/hero-casablanca.webp`],
  },
  alternates: { canonical: `${BASE_URL}/casablanca-local-guide` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/casablanca-local-guide`,
  name: 'Casablanca Like a Local: Hidden Gems & Neighborhoods 2026',
  description:
    'An insider guide to Casablanca beyond Hassan II Mosque. Discover authentic neighborhoods, local food, Art Deco heritage, and hidden gems in Morocco economic capital.',
  url: `${BASE_URL}/casablanca-local-guide`,
  image: `${BASE_URL}/images/hero-casablanca.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/casablanca-local-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Casablanca',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Casablanca', item: `${BASE_URL}/casablanca` },
      { '@type': 'ListItem', position: 3, name: 'Local Guide', item: `${BASE_URL}/casablanca-local-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are the hidden gems of Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'The best hidden gems include Quartier Habous (the new medina) with its pastry shops and olive market, the Art Deco architecture trail in the city center, the Abderrahman Slaoui Museum, Villa des Arts gallery, the Central Market (Marche Central) for fresh seafood, Derb Sultan neighborhood for authentic local food from 20 MAD, the Casablanca Cathedral (Sacre Coeur) now a cultural center, and the Ain Diab corniche beach scene.' } },
    { '@type': 'Question', name: 'What is Quartier Habous in Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'Quartier Habous, also called the New Medina, was built by the French in the 1930s as a planned traditional neighborhood. It combines French urban design with Moroccan architecture. Today it is known for its pastry shops (selling cornes de gazelle and chebakia from 5 MAD each), an olive and spice market, bookshops selling Arabic texts, and the Royal Palace gates. It is far less touristy than Marrakech or Fes medinas and offers authentic shopping at local prices.' } },
    { '@type': 'Question', name: 'Where do locals eat in Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'Locals eat at the Central Market (Marche Central) where you buy fresh seafood and have it grilled on the spot (from 40 MAD). In Derb Sultan neighborhood, hole-in-the-wall restaurants serve tajine from 25 MAD and harira from 5 MAD. For breakfast, look for baghrir and msemen stalls throughout the city (from 3 MAD each). In Maarif, restaurants around Rue de Normandie serve excellent French-Moroccan cuisine at reasonable prices.' } },
    { '@type': 'Question', name: 'Is the Casablanca Tramway useful for tourists?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Casa Tramway is the easiest way to get around Casablanca. Two lines cover major points including Casa Voyageurs train station, United Nations Square, Ain Diab corniche, and several neighborhoods. Single tickets cost from 6 MAD. The tram is clean, air-conditioned, and runs frequently from 6 AM to 10:30 PM. Buy a rechargeable card for from 5 MAD and add credit at station machines.' } },
    { '@type': 'Question', name: 'What is the Art Deco scene in Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'Casablanca has one of the largest concentrations of Art Deco architecture in the world. During the French Protectorate (1912-1956), architects designed hundreds of buildings blending European Art Deco with Moroccan motifs. Key buildings include the Wilaya (prefecture), Cinema Rialto, Hotel Lincoln, and apartment blocks along Boulevard Mohammed V. The Anfa quarter has the finest residential Art Deco. Casamemoire organization runs walking tours (check their website for schedules).' } },
    { '@type': 'Question', name: 'Is Casablanca worth visiting?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. While tourists often skip Casablanca, locals know it as Morocco most dynamic city. The Hassan II Mosque is genuinely spectacular, the Art Deco architecture is world-class, the food scene rivals any in Morocco, and the nightlife and cultural life (Villa des Arts, Abderrahman Slaoui Museum) are vibrant. Casablanca rewards those who explore beyond the obvious. Two days reveals a very different Morocco than the imperial cities.' } },
  ],
};

/* ===============================================================
   DATA: NEIGHBORHOODS
   =============================================================== */

const neighborhoods = [
  {
    name: 'Quartier Habous (New Medina)',
    icon: Landmark,
    category: 'Heritage Shopping Quarter',
    vibe: 'Traditional & Authentic',
    description:
      'Built by the French in the 1930s as a model traditional neighborhood, Quartier Habous is one of Casablanca best-kept secrets. Unlike the old medina near the port, which is chaotic and sometimes sketchy, Habous is clean, organized, and genuinely charming. Low-rise buildings with arched doorways and tiled facades line orderly streets around a central market area. The pastry shops are legendary, selling cornes de gazelle (crescent-shaped almond pastries), chebakia (honey sesame cookies), and fresh briouates for from 5-15 MAD each. The olive and spice market is a visual feast, with pyramids of cured olives in every color (from 20 MAD per kilogram). Nearby, bookshops sell Arabic manuscripts and religious texts. The Royal Palace gates are a short walk away.',
    insiderTip:
      'Visit in the morning when the pastry shops have just opened and everything is fresh. The patisserie Bennis Habous is the most famous (operating since the 1930s) but the smaller shops offer equally excellent pastries. Buy olive tapenade from the olive vendors, it keeps for weeks and makes a perfect edible souvenir. The quarter is small and walkable in 1-2 hours. A petit taxi from the center costs from 15-20 MAD.',
  },
  {
    name: 'Maarif District',
    icon: ShoppingBag,
    category: 'Shopping & Dining Hub',
    vibe: 'Trendy & Cosmopolitan',
    description:
      'Maarif is where modern Casablanca comes alive. This central district centered around the Twin Center towers is the city commercial and social heart. Boulevard Al Massira Al Khadra and the streets around Rue de Normandie are lined with boutiques, international brands, cafes, and some of Casablanca best restaurants. The Morocco Mall, Africa largest shopping center, anchors the district with 600 stores, an aquarium, and an IMAX cinema. But Maarif charm is in the smaller streets: independent Moroccan designers, French-style brasseries, patisseries, juice bars, and the evening buzz of young professionals socializing after work.',
    insiderTip:
      'For shopping, skip Morocco Mall (unless you want the aquarium) and explore the boutiques on Rue de Normandie and the streets between Boulevard Bir Anzarane and Boulevard Al Massira. For dining, the restaurants around Rue des Teinturiers offer excellent Moroccan-French fusion (mains from 60-120 MAD). The cafe terraces along Boulevard Al Massira are prime people-watching spots, especially on weekend evenings.',
  },
  {
    name: 'Anfa Quarter',
    icon: Building,
    category: 'Upscale Art Deco Residential',
    vibe: 'Elegant & Historical',
    description:
      'Anfa is Casablanca wealthiest neighborhood, and its wide tree-lined avenues are an open-air museum of Art Deco and Modernist architecture. The quarter takes its name from the original settlement that predated Casablanca, and during the French Protectorate it became the address of choice for wealthy colonials and Moroccan elites. Grand villas with geometric facades, curved balconies, wrought-iron details, and zellige-accented entrances line the streets. The Anfa Hotel, where Roosevelt and Churchill met in 1943 for the Casablanca Conference, stood here (since replaced). Today, Anfa blends old-money elegance with new luxury developments, upscale restaurants, and private clubs.',
    insiderTip:
      'The best way to appreciate Anfa is a self-guided walking tour. Start at Place Anfa and walk along Boulevard d Anfa toward the ocean. The residential streets between Boulevard d Anfa and the corniche have the finest Art Deco villas. Photography is welcome but respect private property. The Casamemoire organization (casamemoire.org) publishes a free Art Deco walking map. Combine with a visit to the Ain Diab corniche, which starts where Anfa ends.',
  },
  {
    name: 'Ain Diab Corniche',
    icon: Waves,
    category: 'Beach & Entertainment Strip',
    vibe: 'Lively & Scenic',
    description:
      'Stretching along the Atlantic coast west of the city center, Ain Diab is Casablanca playground. The corniche (coastal promenade) runs for several kilometers past beach clubs, restaurants, nightclubs, hotel pools, and sandy beaches. On summer weekends, the entire city seems to converge here. Beach clubs with pools (from 100-200 MAD entry) line the coast, but public beach access is free between the clubs. The restaurants range from upscale seafood to casual grilled fish stalls. At night, the corniche transforms into Casablanca nightlife strip, with clubs and bars open until late. The Ain Diab lighthouse and the Marabout of Sidi Abderrahman (a rock outcrop with a small shrine accessible at low tide) add historical interest.',
    insiderTip:
      'The public beach sections between the beach clubs are free and perfectly fine for swimming (June-September). For the best seafood, skip the fancy restaurants and eat at the simpler grilled fish places closer to the lighthouse (from 50 MAD for a fish meal). The corniche is accessible by tram (line T1 to Ain Diab terminus). Visit the Marabout of Sidi Abderrahman at low tide for a unique photo, but do not enter the shrine unless invited.',
  },
  {
    name: 'Derb Sultan',
    icon: Users,
    category: 'Working-Class Authentic',
    vibe: 'Raw & Real',
    description:
      'If you want to see the Casablanca that Moroccans actually live in, head to Derb Sultan. This densely populated working-class neighborhood south of the center is where the city labor force lives, eats, and socializes. The streets are narrow and bustling with vendors, the food is the cheapest and most generous in the city, and the atmosphere is unapologetically local. Tiny restaurants serve massive plates of kefta tajine (from 20 MAD), lentil soup with bread (from 8 MAD), and rotisserie chicken (from 30 MAD for a whole bird). There are no tourists, no English menus, and no pretense. This is Casablanca at its most honest.',
    insiderTip:
      'Take the tramway to a Derb Sultan stop and walk. The area is safe during the day but not recommended at night. Lunchtime (12-2 PM) is the best time when food stalls are at their busiest and freshest. Expect to communicate with gestures and pointing, as English is rare here. The food is genuinely excellent and a full lunch costs from 20-30 MAD. Bring small bills as change can be scarce.',
  },
  {
    name: 'Bourgogne',
    icon: MoonStar,
    category: 'Nightlife & Young Crowd',
    vibe: 'Hip & After-Dark',
    description:
      'Bourgogne (named after the French region Burgundy) is Casablanca nightlife neighborhood. Located between Maarif and the center, this small but lively quarter concentrates many of the city bars, lounges, and restaurants in a compact area. The streets around Rue Jean Jaures come alive after 9 PM with young professionals, students, and expats moving between venues. The scene ranges from laid-back cocktail bars and live music venues to late-night clubs that keep going until 3-4 AM. Casablanca is Morocco most liberal city for nightlife, and Bourgogne is where that liberality is most visible.',
    insiderTip:
      'Start with dinner at one of the restaurants on or near Rue Jean Jaures (mains from 60-100 MAD). Move to a cocktail bar (drinks from 50-80 MAD) around 10 PM. Clubs pick up after midnight (entry from 100-200 MAD, often including a drink). Thursday and Friday nights are biggest. Dress stylishly as some venues have door policies. Petit taxi home from Bourgogne costs from 15-25 MAD to most neighborhoods.',
  },
];

/* ===============================================================
   DATA: LOCAL FOOD EXPERIENCES
   =============================================================== */

const localFoodSpots = [
  {
    name: 'Central Market (Marche Central)',
    icon: ShoppingBag,
    category: 'Market & Fresh Seafood',
    price: 'From 40 MAD per meal',
    description:
      'The Marche Central, located on Boulevard Mohammed V near United Nations Square, is the heart of Casablanca food culture. Under a white Art Deco canopy, vendors sell the freshest fish and seafood in the city: glistening sea bream, fat prawns, oysters, lobster, sole, and mountains of sardines. The magic is the grill restaurants surrounding the market, where you buy your fish from the vendors and take it to the grill stalls to be cooked on the spot. A plate of mixed grilled fish with salad and bread costs from 40-70 MAD. Oysters are shucked fresh and served with lemon (from 30 MAD per half dozen). The market also sells flowers, fruit, olives, and cheese.',
    insiderTip:
      'Arrive before 10 AM for the freshest selection. Choose your fish, negotiate the price, and take it to one of the grill stalls surrounding the market. The grill stalls charge from 10-15 MAD for cooking. Point at what others are eating if you are unsure what to order. Friday and Saturday mornings are busiest. The oyster stalls near the main entrance are excellent (from 30 MAD for six).',
  },
  {
    name: 'Baghrir & Msemen Breakfast Ritual',
    icon: Sun,
    category: 'Morning Tradition',
    price: 'From 3 MAD each',
    description:
      'Casablanca mornings run on baghrir and msemen. Baghrir are spongy semolina pancakes riddled with tiny holes that soak up melted butter and honey. Msemen are flaky, layered flatbreads folded into squares and cooked on a griddle until golden. Both are sold from street stalls and small shopfronts throughout the city, freshly made to order. Paired with a cafe nous-nous (half espresso, half milk, from 8 MAD) or a glass of fresh orange juice (from 5 MAD), this is the most authentic Casablanca morning experience. Every neighborhood has its msemen lady or bakery, and locals are fiercely loyal to their favorite.',
    insiderTip:
      'Look for the stalls with the longest queues of locals. A breakfast of 2 msemen, honey, and coffee costs from 12-15 MAD total. In Habous, the pastry shops open early and serve excellent msemen alongside their famous sweets. Ask for msemen b-jben (with cheese) or msemen b-lassel (with honey) for variety. This breakfast ritual is the single best way to start any day in Casablanca.',
  },
  {
    name: 'Derb Sultan Cheap Eats',
    icon: UtensilsCrossed,
    category: 'Budget Local Food',
    price: 'From 20 MAD per meal',
    description:
      'The restaurants in Derb Sultan are where Casablanca working class eats, and the food is hearty, honest, and remarkably cheap. Kefta tajine (spiced meatballs in tomato sauce with egg, from 20 MAD) is the classic. Lentil soup with bread (from 8 MAD) is the ultimate winter warmer. Grilled kefta sandwiches (from 10 MAD), tangia stew (from 25 MAD), and Friday couscous (from 20 MAD) are all served in generous portions. The restaurants are tiny, with shared tables, no menus, and pots of food bubbling on gas burners. You point, you eat, you pay a tiny bill.',
    insiderTip:
      'The best strategy is to walk until you see a place packed with local workers at lunchtime. If the pots are simmering and the tables are full, the food is fresh and good. Bread is always included. Bottled water from 3 MAD. The portions are large enough that one dish plus bread makes a full meal. Tipping from 2-5 MAD is appreciated but not expected.',
  },
  {
    name: 'Seafood at the Port',
    icon: Waves,
    category: 'Harbor Fresh',
    price: 'From 30 MAD per plate',
    description:
      'The old port area near the medina has a cluster of informal seafood restaurants where the catch goes straight from the boats to your plate. These are not fancy establishments — expect plastic chairs, paper tablecloths, and loud conversation. But the seafood is the freshest in the city and the prices are dramatically lower than Ain Diab or the Central Market. A plate of fried calamari and shrimp costs from 30 MAD. Grilled whole fish with chermoula runs from 35-50 MAD depending on size. A seafood pastilla (savory pastry) from 25 MAD. The atmosphere is chaotic and wonderful.',
    insiderTip:
      'These restaurants do not have fixed menus. Ask what is fresh today and check the price before ordering. Lunch is better than dinner as the catch is fresher. The restaurants closest to the actual port (not the tourist-facing ones on the boulevard) have the best prices. Bring cash in small denominations. A full seafood feast for two costs from 100-150 MAD.',
  },
];

/* ===============================================================
   DATA: CULTURAL SPOTS
   =============================================================== */

const culturalSpots = [
  {
    name: 'Art Deco Architecture Trail',
    icon: Building,
    category: 'Architectural Heritage',
    price: 'Free (self-guided)',
    duration: '2-3 hours',
    description:
      'Casablanca possesses one of the world largest collections of Art Deco architecture, a legacy of the French Protectorate when visionary architects including Henri Prost, Marius Boyer, and Albert Laprade designed a city that blended European Modernism with Moroccan decorative arts. The result is hundreds of buildings featuring geometric facades, curved balconies, zellige tile accents, wrought-iron railings, and mashrabiya-inspired screens. The concentration along Boulevard Mohammed V, around Place Mohammed V, and in the Anfa quarter is extraordinary. Key buildings include the Wilaya (city hall), Cinema Rialto (1930), Hotel Lincoln, the Bessoneau building, and countless apartment blocks whose facades are works of art.',
    insiderTip:
      'Start at Place Mohammed V and walk northwest along Boulevard Mohammed V, the densest Art Deco corridor. Look up constantly as the most beautiful details are on upper floors. The Casamemoire heritage organization runs occasional guided walks (check casamemoire.org). Download their free walking map. The morning light between 9-11 AM is best for photography. The area around Rue Bougie has some of the finest residential Art Deco.',
  },
  {
    name: 'Casablanca Cathedral (Sacre Coeur)',
    icon: Landmark,
    category: 'Repurposed Heritage',
    price: 'Free',
    duration: '30-45 minutes',
    description:
      'The former Cathedral of the Sacred Heart, built in 1930 in a striking Neo-Gothic and Art Deco hybrid style, is one of Casablanca most dramatic buildings. Designed by Paul Tournon, it was the largest church in Africa when completed. After independence, the cathedral was deconsecrated and has served various functions. Today it operates as a cultural center hosting exhibitions, events, and occasionally allowing visitors to climb the towers for panoramic city views. The soaring white concrete interior, with its pointed arches and Art Deco stained glass, is hauntingly beautiful regardless of your spiritual inclinations.',
    insiderTip:
      'The cathedral is on Boulevard Rachidi near the Parc de la Ligue Arabe. Check if it is open for visitors as access can be inconsistent. When open, climbing the towers offers one of the best views in Casablanca. The adjacent Parc de la Ligue Arabe (Arab League Park) is a beautiful green space designed by Albert Laprade. Combine the cathedral, park, and Art Deco walk along Boulevard Mohammed V for a half-day cultural circuit.',
  },
  {
    name: 'Villa des Arts',
    icon: Palette,
    category: 'Contemporary Art Gallery',
    price: 'From 20 MAD',
    duration: '1 hour',
    description:
      'Housed in a beautifully restored 1930s Art Deco villa on Boulevard Brahim Roudani, Villa des Arts is Casablanca premier contemporary art gallery. Part of the ONA Foundation, it hosts rotating exhibitions by Moroccan and international artists across two floors of intimate gallery spaces. The building itself, with its geometric facade, garden courtyard, and period details, is as much a reason to visit as the art inside. The gallery represents the creative side of Casablanca that tourists rarely discover, a city with a thriving arts scene that extends far beyond traditional crafts.',
    insiderTip:
      'Check the Villa des Arts website or social media for current exhibitions. The gallery is usually open Tuesday to Saturday. The garden cafe is a peaceful retreat. Combine with the nearby Abderrahman Slaoui Museum (5 minutes away) for a double dose of Casablanca culture. Both museums are in the same Gauthier neighborhood, itself an architectural pleasure.',
  },
  {
    name: 'Abderrahman Slaoui Museum',
    icon: Eye,
    category: 'Decorative Arts Museum',
    price: 'From 30 MAD',
    duration: '1-1.5 hours',
    description:
      'This exquisite private museum, housed in a 1940s Art Deco villa, showcases the personal collection of the late Abderrahman Slaoui. The collection includes vintage Moroccan travel posters (hauntingly beautiful advertisements from the Protectorate era), antique jewelry, illuminated Qurans, decorative arts, and a stunning collection of Art Deco objects. The museum building itself is a gem, with original tiling, woodwork, and period furnishings. It is small, intimate, and largely unknown to tourists, making it one of Casablanca most rewarding cultural visits.',
    insiderTip:
      'The vintage travel poster collection alone is worth the from 30 MAD entry fee. The museum is in the Gauthier neighborhood at 12 Rue du Parc. Open Tuesday to Saturday, 10 AM to 6 PM. Photography is allowed. The ground floor cafe serves good coffee. Allow 1 hour minimum. This is arguably the best small museum in Morocco.',
  },
  {
    name: 'Rick&apos;s Cafe',
    icon: Coffee,
    category: 'Iconic Pop Culture',
    price: 'From 80 MAD (cocktail)',
    duration: '1-2 hours',
    description:
      'Yes, it is a tourist attraction. No, the movie Casablanca was not filmed here (it was shot entirely in Hollywood). But Rick&apos;s Cafe, recreated in 2004 by an American expat in a restored 1930s riad near the old medina, is a remarkably atmospheric homage. The interior faithfully recreates the film&apos;s set: arched doorways, carved wooden screens, a piano bar, and a courtyard with a fountain. A pianist plays classic jazz and show tunes nightly. The food is Franco-Moroccan and reasonably good. It is touristy but executed with genuine care, and even Casablancais bring their out-of-town guests here.',
    insiderTip:
      'Reserve for dinner, especially on weekends. Cocktails from 80 MAD, mains from 120-200 MAD. The atmosphere is best in the evening when the piano is playing and the candlelight catches the carved screens. Dress smartly. Even if you skip dinner, a cocktail at the bar is worth it for the ambiance. Located on Boulevard Sour Jdid near the old medina, a petit taxi from the center costs from 15 MAD.',
  },
];

/* ===============================================================
   DATA: GETTING AROUND
   =============================================================== */

const transportTips = [
  { item: 'Casa Tramway (single ride)', price: 'From 6 MAD', tip: 'Two lines cover major areas. Buy a rechargeable card (from 5 MAD) at station machines. Runs 6 AM to 10:30 PM. Clean and reliable.' },
  { item: 'Petit taxi (meter, city center)', price: 'From 7-15 MAD', tip: 'Red taxis hold 3 passengers. Always insist on the meter. Night rate (8 PM-6 AM) is 50 percent higher.' },
  { item: 'Grand taxi (shared)', price: 'From 5-10 MAD per seat', tip: 'Fixed routes, 6 passengers per car. Cheap for set routes but uncomfortable. Useful for suburbs.' },
  { item: 'Casa Voyageurs to Airport (train)', price: 'From 43 MAD', tip: 'Direct train every hour, 30 minutes. Faster and cheaper than taxi (from 250-300 MAD).' },
  { item: 'Al Boraq to Tangier (high-speed)', price: 'From 149 MAD', tip: 'Connects to Kenitra (45 min) and Tangier (2 hr 10 min). Book online at oncf.ma for best prices.' },
  { item: 'Bus (city)', price: 'From 4 MAD', tip: 'Extensive network but crowded during rush hours. The tram is better for tourists.' },
];

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Use the Tramway Like Locals Do', icon: Train, description: 'The Casa Tramway is clean, punctual, and covers the main areas. Line T1 runs from Ain Diab beach through the center to Sidi Moumen. A from 6 MAD ticket is valid for one ride with transfers. Buy a rechargeable card and top up at machines.' },
  { tip: 'Friday Couscous Is Sacred', icon: UtensilsCrossed, description: 'On Fridays, Morocco national dish is served everywhere. Many restaurants offer couscous as the only option at lunch (from 20-30 MAD). It is communal, generous, and the best cultural experience you can eat. Join a family restaurant at 1 PM.' },
  { tip: 'Art Deco is Everywhere', icon: Camera, description: 'Look up as you walk. Casablanca has hundreds of Art Deco buildings, most unlabeled. The facades along Boulevard Mohammed V, the Gauthier neighborhood, and the Anfa quarter are free outdoor museums. Morning light is best for photography.' },
  { tip: 'Casablanca Is Not Marrakech', icon: Globe, description: 'Do not expect a tourist-oriented medina experience. Casablanca is a working city of 4 million people. That is its charm. The food is better, prices are lower, and the cultural life is more sophisticated. Give it at least 2 days.' },
  { tip: 'The Corniche Comes Alive at Night', icon: MoonStar, description: 'Ain Diab corniche is quiet during the day but transforms after 8 PM when restaurants, bars, and clubs open. The beachfront promenade fills with families and couples. Summer evenings (June-September) are the most vibrant.' },
  { tip: 'Casablanca Weekend Markets', icon: ShoppingBag, description: 'Saturday and Sunday mornings bring informal markets throughout neighborhoods. Derb Ghallef (a sprawling flea market for electronics and secondhand goods) is famous. Go early, watch your belongings, and negotiate hard.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What are the hidden gems of Casablanca?', answer: 'Quartier Habous with its pastry shops and olive market, the Art Deco architecture trail (free self-guided), Abderrahman Slaoui Museum (from 30 MAD), Villa des Arts gallery (from 20 MAD), Central Market fresh seafood (from 40 MAD), Derb Sultan neighborhood for authentic cheap eats (from 20 MAD), the Cathedral cultural center (free), and the Ain Diab corniche for beach clubs and seafood.' },
  { question: 'What is the best neighborhood to explore in Casablanca?', answer: 'Quartier Habous (New Medina) for traditional shopping and pastries. Maarif for modern shopping and dining. Anfa for Art Deco architecture walks. Ain Diab corniche for beach and nightlife. Derb Sultan for authentic local food. Bourgogne for evening bars and restaurants. Each offers a different side of Casablanca personality.' },
  { question: 'Where do locals eat in Casablanca?', answer: 'The Central Market (Marche Central) for seafood (from 40 MAD). Derb Sultan for cheap tajine and soup (from 20 MAD). Habous for pastries (from 5 MAD). The port area for fresh grilled fish (from 30 MAD). Maarif restaurants for upscale Moroccan-French cuisine (from 60 MAD). Every neighborhood has its msemen breakfast stalls (from 3 MAD).' },
  { question: 'How do I get around Casablanca?', answer: 'The Casa Tramway (from 6 MAD per ride) is the easiest option, with two lines covering major areas. Petit taxis (red, meter from 7 MAD) are abundant. The city center is walkable. For the airport, take the train from Casa Voyageurs station (from 43 MAD, 30 minutes). Avoid driving in the city center due to traffic and limited parking.' },
  { question: 'Is Casablanca worth visiting?', answer: 'Absolutely. Casablanca rewards curious travelers who look beyond Hassan II Mosque. The Art Deco architecture is world-class, the food scene is Morocco best, the cultural venues (Villa des Arts, Slaoui Museum) are excellent, and the city energy is unique. It is the real Morocco, not a tourist version. Give it at least 2 full days.' },
  { question: 'Is Casablanca safe for tourists?', answer: 'Casablanca is generally safe for tourists, comparable to any large international city. The center, Maarif, Anfa, Ain Diab, and Habous are all safe day and night. Exercise normal big-city caution in crowded areas and the old medina. The tramway and main boulevards are well-lit and populated. Avoid quiet backstreets in unfamiliar neighborhoods late at night.' },
  { question: 'What is the best time to visit Casablanca?', answer: 'Spring (April-June) and autumn (September-November) offer the best weather. Summer (July-August) is warm but the Atlantic keeps it cooler than inland cities. Winter (December-February) is mild but rainy. The city is a year-round destination as most attractions are indoor or cultural.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/casablanca', icon: MapPin, title: 'Casablanca City Guide', description: 'Complete guide to Casablanca: accommodation, transport, and planning.' },
  { href: '/things-to-do-casablanca', icon: Star, title: 'Things to Do in Casablanca', description: 'Top attractions including Hassan II Mosque, old medina, and corniche.' },
  { href: '/morocco-food-guide', icon: UtensilsCrossed, title: 'Morocco Food Guide', description: 'Tagine, couscous, street food, and regional specialties explained.' },
  { href: '/morocco-budget-travel', icon: Lightbulb, title: 'Morocco Budget Travel', description: 'How to travel Morocco on any budget with real prices and tips.' },
  { href: '/best-beaches-morocco', icon: Waves, title: 'Best Beaches in Morocco', description: 'Atlantic and Mediterranean beaches, surf breaks, and hidden coves.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function CasablancaLocalGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-casablanca.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/casablanca" className="hover:text-white transition-colors">
              Casablanca
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Local Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Eye className="w-4 h-4" />
            Insider Local Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Casablanca Like a Local
            <br className="hidden md:block" /> Hidden Gems &amp; Neighborhoods
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Beyond Hassan II Mosque. Discover the Art Deco heritage, neighborhood food scenes,
            and daily rhythms of Morocco&apos;s economic capital as locals experience it.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Real Casablanca Beyond the Mosque
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Most tourists treat Casablanca as a layover — see Hassan II Mosque, take a photo, move
                on. It is one of the great miscalculations of Morocco travel. Beneath the surface of
                this sprawling Atlantic metropolis beats the heart of modern Morocco: a city of four
                million people with world-class Art Deco architecture, the country best food scene,
                vibrant neighborhoods each with distinct personalities, and a cultural sophistication
                that Marrakech and Fes, for all their charm, cannot match.
              </p>
              <p>
                Casablanca is not a postcard city. It does not have the ochre romance of Marrakech or
                the medieval mystery of Fes. What it has is authenticity. The working-class eateries of
                Derb Sultan serve the most honest food in Morocco. The pastry shops of Quartier Habous
                have been perfecting cornes de gazelle since the 1930s. The Art Deco facades along
                Boulevard Mohammed V rival anything in Miami or Buenos Aires. And the Ain Diab corniche
                on a summer evening, with the Atlantic crashing and the restaurants filling, is as
                glamorous as any Mediterranean resort.
              </p>
              <p>
                This guide takes you into the neighborhoods tourists skip, the food spots where locals
                queue, the cultural gems that reward curiosity, and the practical details that make
                Casablanca navigable. This is not the Casablanca of the movie. It is better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Neighborhoods -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Casablanca Neighborhoods You Should Explore
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each neighborhood reveals a different facet of Morocco largest and most dynamic city.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            The Casa Tramway connects most neighborhoods. Single rides from 6 MAD.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {neighborhoods.map((hood) => {
              const HoodIcon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <HoodIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {hood.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {hood.vibe}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {hood.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {hood.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Local Food Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Eat Like a Local in Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Central Market seafood to Derb Sultan cheap eats and Habous pastries. Where locals
            actually eat and what they really pay.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal variations apply.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {localFoodSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SpotIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {spot.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {spot.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {spot.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {spot.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {spot.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Cultural Spots -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Palette className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture, Art &amp; Architecture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Casablanca cultural side goes far beyond the mosque. Art Deco heritage, contemporary
            galleries, and iconic pop culture.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Most cultural sites are in the city center and Gauthier neighborhood, accessible by tram.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {culturalSpots.map((spot) => {
              const CultIcon = spot.icon;
              return (
                <div key={spot.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CultIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {spot.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {spot.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {spot.price}
                        </span>
                        {spot.duration && (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {spot.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {spot.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {spot.insiderTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Getting Around -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Getting Around Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real transport prices and tips for navigating Casablanca without overpaying.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {transportTips.map((item, index) => (
              <div key={item.item} className="card-moroccan p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.item}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{item.tip}</p>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Eye className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for Living Like a Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical knowledge that transforms a Casablanca stopover into a genuine discovery.
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

      {/* -- Local's Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            A Local&apos;s Day in Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow this itinerary to experience Casablanca as residents do, from Habous pastries to Ain Diab sunset.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Morning: Habous &amp; Central Market
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Start with msemen and coffee at a street stall (from 12 MAD). Take a petit taxi to Quartier
                    Habous (from 15 MAD). Browse the olive market, buy pastries from a Habous patisserie
                    (cornes de gazelle from 5 MAD each), and wander the quiet arcaded streets.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Head to the Central Market (Marche Central) by late morning. Browse the seafood
                    stalls, buy your fish, and have it grilled at the market restaurants (from 40 MAD
                    for a full plate). Eat fresh oysters with lemon (from 30 MAD per half dozen).
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Compass className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Afternoon: Art Deco Walk &amp; Museums
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Walk the Art Deco trail along Boulevard Mohammed V (free). Admire the Wilaya,
                    Cinema Rialto, and the apartment facades. Visit the Casablanca Cathedral (free)
                    and the adjacent Parc de la Ligue Arabe for a shaded rest.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Visit the Abderrahman Slaoui Museum (from 30 MAD) for vintage travel posters and
                    decorative arts, then Villa des Arts (from 20 MAD) for contemporary Moroccan art.
                    Both are in the Gauthier neighborhood within walking distance of each other.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Sunset className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Evening: Ain Diab Corniche &amp; Dinner
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Take the tram (from 6 MAD) to Ain Diab. Walk the corniche promenade as the
                    sun sets over the Atlantic. Visit the Marabout of Sidi Abderrahman on the rocks
                    if the tide is low.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    Dinner at a corniche seafood restaurant (from 70 MAD) or head to Maarif for
                    French-Moroccan cuisine (from 60 MAD). End with a cocktail at Rick&apos;s Cafe
                    (from 80 MAD) or drinks in Bourgogne (from 50 MAD). Estimated total day cost:
                    from 250-500 MAD per person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Casablanca Trip
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

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Discover the Real Casablanca?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Skip the layover mentality and give Morocco economic capital the time it deserves.
            From Art Deco walks and Central Market seafood to Habous pastries and Ain Diab sunsets,
            the real Casablanca is waiting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/casablanca"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Casablanca City Guide
            </Link>
            <Link
              href="/things-to-do-casablanca"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Star className="w-5 h-5" />
              Things to Do
            </Link>
            <Link
              href="/morocco-food-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <UtensilsCrossed className="w-5 h-5" />
              Food Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
