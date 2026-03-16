// ═══════════════════════════════════════════════════════════════
// MOROCCO GUIDE — Master Data Store
// Comprehensive tourism data for the Kingdom of Morocco
// ═══════════════════════════════════════════════════════════════

export interface Region {
  id: string
  name: string
  slug: string
  description: string
  capital: string
  cityCount: number
}

export interface City {
  id: string
  name: string
  slug: string
  regionId: string
  region: string
  description: string
  longDescription: string
  population: number
  elevation: number
  climate: string
  bestTimeToVisit: string
  latitude: number
  longitude: number
  heroImage: string
  galleryImages: string[]
  isImperialCity: boolean
  isCoastal: boolean
  airportCode: string | null
  tags: string[]
  attractionCount: number
  rating: number
  reviewCount: number
}

export interface Attraction {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  description: string
  longDescription: string
  type: 'monument' | 'museum' | 'nature' | 'market' | 'religious' | 'ruins' | 'garden' | 'beach' | 'medina' | 'palace'
  entranceFeeMad: number | null
  openingHours: string
  durationHours: number
  latitude: number
  longitude: number
  images: string[]
  tips: string[]
  bestTime: string
  isUnesco: boolean
  rating: number
  reviewCount: number
}

export interface Tour {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  description: string
  durationDays: number
  priceFromMad: number
  priceToMad: number
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  includes: string[]
  highlights: string[]
  images: string[]
  maxGroupSize: number
  languages: string[]
  rating: number
  reviewCount: number
  isFeatured: boolean
  category: string
}

export interface Accommodation {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  type: 'hotel' | 'riad' | 'hostel' | 'camping' | 'apartment' | 'resort' | 'kasbah' | 'guesthouse' | 'desert_camp'
  starRating: number
  description: string
  priceFromMad: number
  amenities: string[]
  images: string[]
  latitude: number
  longitude: number
  isFeatured: boolean
  rating: number
  reviewCount: number
}

export interface Restaurant {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  cuisineType: string
  priceRange: 1 | 2 | 3 | 4
  description: string
  specialties: string[]
  openingHours: string
  address: string
  images: string[]
  latitude: number
  longitude: number
  rating: number
  reviewCount: number
  isFeatured: boolean
  dietaryOptions: string[]
}

export interface Activity {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  type: 'adventure' | 'cultural' | 'wellness' | 'nature' | 'cooking' | 'shopping' | 'nightlife' | 'sports' | 'festivals'
  description: string
  duration: string
  priceFromMad: number
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  images: string[]
  includes: string[]
  isSeasonal: boolean
  rating: number
}

export interface Guide {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  bio: string
  languages: string[]
  specialties: string[]
  experienceYears: number
  rating: number
  reviewCount: number
  pricePerDayMad: number
  image: string
  isCertified: boolean
}

export interface TransportOption {
  id: string
  type: 'train' | 'bus' | 'taxi' | 'car_rental' | 'domestic_flight' | 'ferry'
  fromCityId: string
  fromCityName: string
  toCityId: string
  toCityName: string
  durationHours: number
  priceFromMad: number
  frequency: string
  provider: string
  notes: string
}

export interface Event {
  id: string
  name: string
  slug: string
  cityId: string
  cityName: string
  description: string
  month: number
  type: string
  isAnnual: boolean
  image: string
}

export interface TravelTip {
  id: string
  title: string
  slug: string
  category: 'visa' | 'money' | 'safety' | 'health' | 'culture' | 'packing' | 'transport' | 'communication' | 'weather'
  content: string
  icon: string
}

export interface Itinerary {
  id: string
  name: string
  slug: string
  durationDays: number
  description: string
  cities: string[]
  highlights: string[]
  budgetLevel: 'budget' | 'mid-range' | 'luxury'
  travelStyle: string
  image: string
}

// ═══════════════════════════════════════════════════════════════
// REGIONS
// ═══════════════════════════════════════════════════════════════

export const regions: Region[] = [
  { id: 'r1', name: 'Marrakech-Safi', slug: 'marrakech-safi', description: 'Home to the Red City and Atlantic coast gems', capital: 'Marrakech', cityCount: 4 },
  { id: 'r2', name: 'Fès-Meknès', slug: 'fes-meknes', description: 'Imperial cities and spiritual heartland', capital: 'Fès', cityCount: 6 },
  { id: 'r3', name: 'Tanger-Tétouan-Al Hoceïma', slug: 'tanger-tetouan', description: 'Where Africa meets Europe at the Strait of Gibraltar', capital: 'Tangier', cityCount: 9 },
  { id: 'r4', name: 'Rabat-Salé-Kénitra', slug: 'rabat-sale-kenitra', description: 'The political capital and coastal modernity', capital: 'Rabat', cityCount: 3 },
  { id: 'r5', name: 'Casablanca-Settat', slug: 'casablanca-settat', description: 'Economic powerhouse and cosmopolitan hub', capital: 'Casablanca', cityCount: 5 },
  { id: 'r6', name: 'Béni Mellal-Khénifra', slug: 'beni-mellal-khenifra', description: 'Fertile plains and Middle Atlas foothills', capital: 'Béni Mellal', cityCount: 2 },
  { id: 'r7', name: 'Drâa-Tafilalet', slug: 'draa-tafilalet', description: 'Gateway to the Sahara with ancient kasbahs', capital: 'Errachidia', cityCount: 6 },
  { id: 'r8', name: 'Souss-Massa', slug: 'souss-massa', description: 'Sun-soaked beaches and Amazigh heritage', capital: 'Agadir', cityCount: 4 },
  { id: 'r9', name: 'Guelmim-Oued Noun', slug: 'guelmim-oued-noun', description: 'Desert edge oasis towns and camel markets', capital: 'Guelmim', cityCount: 2 },
  { id: 'r10', name: 'Laâyoune-Sakia El Hamra', slug: 'laayoune-sakia', description: 'Southern gateway to the Saharan provinces', capital: 'Laâyoune', cityCount: 1 },
  { id: 'r11', name: 'Dakhla-Oued Ed-Dahab', slug: 'dakhla-oued-ed-dahab', description: 'World-class kitesurfing and desert-meets-ocean', capital: 'Dakhla', cityCount: 1 },
  { id: 'r12', name: 'Oriental', slug: 'oriental', description: 'Eastern frontier with Mediterranean charm', capital: 'Oujda', cityCount: 3 },
]

// ═══════════════════════════════════════════════════════════════
// CITIES (Top 30+)
// ═══════════════════════════════════════════════════════════════

export const cities: City[] = [
  {
    id: 'c1', name: 'Marrakech', slug: 'marrakech', regionId: 'r1', region: 'Marrakech-Safi',
    description: 'The Red City — a sensory explosion of spice-scented souks, ancient palaces, and the legendary Jemaa el-Fnaa square that has captivated travelers for centuries.',
    longDescription: 'Marrakech is Morocco\'s most iconic destination, a city that assaults and delights the senses in equal measure. Founded in 1070 by the Almoravids, the city has served as the capital of multiple dynasties and remains the cultural heart of Morocco. The medina, a UNESCO World Heritage site, is a labyrinth of narrow alleys hiding palatial riads, centuries-old mosques, and the world\'s most vibrant market square. Beyond the ancient walls, the Ville Nouvelle offers French colonial architecture, designer boutiques, and rooftop bars overlooking the Atlas Mountains. Whether you\'re haggling in the souks, savoring a tagine on a candlelit rooftop, or watching snake charmers at sunset, Marrakech delivers experiences that remain etched in memory forever.',
    population: 928850, elevation: 466, climate: 'Semi-arid Mediterranean', bestTimeToVisit: 'October to April',
    latitude: 31.6295, longitude: -7.9811,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [
      '/images/hero-marrakech.webp',
      '/images/hero-marrakech.webp',
      '/images/hero-marrakech.webp',
    ],
    isImperialCity: true, isCoastal: false, airportCode: 'RAK',
    tags: ['imperial-city', 'unesco', 'medina', 'shopping', 'food', 'culture', 'nightlife'],
    attractionCount: 45, rating: 4.7, reviewCount: 12500,
  },
  {
    id: 'c2', name: 'Fes', slug: 'fes', regionId: 'r2', region: 'Fès-Meknès',
    description: 'The spiritual and intellectual capital of Morocco, home to the world\'s oldest university and the largest car-free urban zone on Earth.',
    longDescription: 'Fes is a living museum. Founded in 789 AD, Fes el-Bali (the old medina) is the world\'s largest contiguous car-free urban area and a UNESCO World Heritage site. It\'s home to Al Quaraouiyine, founded in 859 AD and recognized as the oldest continuously operating university in the world. The city\'s 9,400 labyrinthine alleyways hide treasures: the famous Chouara Tannery where leather has been dyed using medieval methods for over a millennium, ornate madrasas with breathtaking zellige tilework, and the tomb of Moulay Idriss II, founder of the first Moroccan dynasty. The Fes Festival of World Sacred Music draws global artists every June. Unlike tourist-heavy Marrakech, Fes feels authentically, uncompromisingly Moroccan.',
    population: 1150131, elevation: 410, climate: 'Mediterranean continental', bestTimeToVisit: 'March to May, September to November',
    latitude: 34.0331, longitude: -5.0003,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [
      '/images/hero-marrakech.webp',
      '/images/hero-marrakech.webp',
    ],
    isImperialCity: true, isCoastal: false, airportCode: 'FEZ',
    tags: ['imperial-city', 'unesco', 'medina', 'culture', 'history', 'crafts', 'food'],
    attractionCount: 38, rating: 4.8, reviewCount: 8200,
  },
  {
    id: 'c3', name: 'Casablanca', slug: 'casablanca', regionId: 'r5', region: 'Casablanca-Settat',
    description: 'Morocco\'s economic powerhouse and cosmopolitan metropolis, crowned by the awe-inspiring Hassan II Mosque rising from the Atlantic.',
    longDescription: 'Casablanca is Morocco\'s largest city and its beating economic heart. While it lacks the medieval charm of Fes or the exotic allure of Marrakech, Casa (as locals call it) rewards visitors with Art Deco architecture, a thriving contemporary art scene, and the breathtaking Hassan II Mosque — the largest in Africa and one of the few open to non-Muslims. The Corniche beachfront, upscale Maarif district, and the bohemian Habous Quarter each offer distinct experiences. Rick\'s Café recreates the atmosphere of the classic film, while the Morocco Mall and Anfa Place cater to modern luxury. Casablanca is the Morocco that Moroccans live in: modern, ambitious, and endlessly dynamic.',
    population: 3359818, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'April to November',
    latitude: 33.5731, longitude: -7.5898,
    heroImage: '/images/hero-hassan-mosque.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'CMN',
    tags: ['modern', 'coastal', 'mosque', 'business', 'art-deco', 'shopping'],
    attractionCount: 22, rating: 4.2, reviewCount: 6800,
  },
  {
    id: 'c4', name: 'Rabat', slug: 'rabat', regionId: 'r4', region: 'Rabat-Salé-Kénitra',
    description: 'Morocco\'s elegant capital city, blending royal heritage with coastal charm and a UNESCO-listed medina and kasbah.',
    longDescription: 'Rabat, the political capital since 1912, is Morocco\'s most refined city. It\'s quieter, cleaner, and more orderly than its sprawling neighbors, yet rich in history. The Kasbah of the Udayas, perched above the Bou Regreg river, is one of Morocco\'s most photogenic spots with its Andalusian gardens and whitewashed-blue streets. The Hassan Tower, an unfinished 12th-century minaret, and the nearby Mausoleum of Mohammed V are architectural masterpieces. The modern Ville Nouvelle features broad boulevards, the remarkable Mohammed VI Museum of Modern and Contemporary Art, and a vibrant café culture. In 2012, Rabat was designated a UNESCO World Heritage site for its blend of historic and modern urban planning.',
    population: 577827, elevation: 75, climate: 'Mediterranean oceanic', bestTimeToVisit: 'March to June, September to November',
    latitude: 34.0209, longitude: -6.8416,
    heroImage: '/images/hero-coastal.webp',
    galleryImages: [],
    isImperialCity: true, isCoastal: true, airportCode: 'RBA',
    tags: ['capital', 'imperial-city', 'unesco', 'coastal', 'culture', 'museums'],
    attractionCount: 25, rating: 4.5, reviewCount: 4300,
  },
  {
    id: 'c5', name: 'Tangier', slug: 'tangier', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'The gateway between Africa and Europe, a bohemian port city where literary legends, spies, and artists found their muse.',
    longDescription: 'Tangier sits at the northwestern tip of Africa, gazing across the Strait of Gibraltar at Spain just 14 kilometers away. This has made it a crossroads of civilizations for millennia. In the mid-20th century, its status as an International Zone attracted writers like Paul Bowles, William Burroughs, and Jack Kerouac, along with spies, artists, and socialites. Today, Tangier is experiencing a renaissance: the stunning new port of Tanger-Med, the high-speed TGV train to Casablanca, and ambitious cultural projects like the Musée de la Kasbah have transformed it. Yet the old medina retains its magic — winding streets lead to hidden cafés, the Petit Socco buzzes with life, and the view from Cap Spartel where the Atlantic meets the Mediterranean is unforgettable.',
    population: 947952, elevation: 0, climate: 'Mediterranean', bestTimeToVisit: 'May to October',
    latitude: 35.7595, longitude: -5.8340,
    heroImage: '/images/hero-coastal.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'TNG',
    tags: ['coastal', 'port', 'history', 'art', 'literary', 'ferry'],
    attractionCount: 20, rating: 4.4, reviewCount: 5600,
  },
  {
    id: 'c6', name: 'Chefchaouen', slug: 'chefchaouen', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'The Blue Pearl of Morocco — a dreamlike mountain town where every wall, step, and doorway is painted in mesmerizing shades of blue.',
    longDescription: 'Nestled in the Rif Mountains at 600 meters elevation, Chefchaouen is Morocco\'s most photogenic town. The tradition of painting buildings blue dates back to the 1930s, when Jewish refugees arrived and brought the practice as a symbol of heaven and spirituality. Today, the entire medina shimmers in every shade from powder blue to deep indigo, creating an otherworldly atmosphere that has made it one of Africa\'s most Instagrammed destinations. But Chefchaouen offers more than aesthetics: the Ras El Maa waterfall provides a refreshing escape, the Spanish Mosque offers panoramic sunset views, and the surrounding Rif Mountains offer excellent hiking through cannabis fields (Morocco\'s Rif is the world\'s largest hash-producing region) and cedar forests. The pace of life is blissfully slow, the food is fresh and mountain-influenced, and the shopping — particularly woven blankets and goat cheese — is outstanding.',
    population: 45000, elevation: 600, climate: 'Mediterranean mountain', bestTimeToVisit: 'March to June, September to November',
    latitude: 35.1688, longitude: -5.2636,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['blue-city', 'mountains', 'photography', 'hiking', 'peaceful', 'crafts'],
    attractionCount: 12, rating: 4.8, reviewCount: 7800,
  },
  {
    id: 'c7', name: 'Essaouira', slug: 'essaouira', regionId: 'r1', region: 'Marrakech-Safi',
    description: 'A wind-swept Atlantic fortress town beloved by surfers, artists, and those seeking Morocco\'s most relaxed coastal vibe.',
    longDescription: 'Essaouira (formerly Mogador) is the antidote to Marrakech\'s intensity. This 18th-century fortified port town, designed by French architect Théodore Cornut for Sultan Mohammed III, exudes a calm, bohemian energy. The ramparts face the Atlantic, where the constant alizée trade winds make it a world-class windsurfing and kitesurfing destination. The medina, a UNESCO World Heritage site since 2001, is refreshingly easy to navigate with wide, straight streets. The town has long attracted artists — Jimi Hendrix famously visited in 1969 — and today galleries, woodworking shops, and music venues line the charming streets. The Gnaoua World Music Festival each June transforms the town into a massive open-air concert. The fish market by the port serves the freshest seafood in Morocco, grilled to order for a few dirhams.',
    population: 77966, elevation: 0, climate: 'Mediterranean oceanic, windy', bestTimeToVisit: 'April to November (June for Gnaoua Festival)',
    latitude: 31.5085, longitude: -9.7595,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'ESU',
    tags: ['coastal', 'surfing', 'unesco', 'art', 'music', 'relaxed', 'seafood'],
    attractionCount: 15, rating: 4.7, reviewCount: 6200,
  },
  {
    id: 'c8', name: 'Merzouga', slug: 'merzouga', regionId: 'r7', region: 'Drâa-Tafilalet',
    description: 'Gateway to the Sahara Desert and the towering Erg Chebbi dunes — Morocco\'s ultimate desert experience.',
    longDescription: 'Merzouga is a small Saharan village on the edge of Erg Chebbi, a 50-kilometer stretch of golden sand dunes reaching up to 150 meters high. It\'s the most accessible and dramatic desert landscape in Morocco, offering the quintessential Saharan experience: camel treks at sunset, overnight camps under impossibly star-filled skies, sandboarding down massive dunes, and 4x4 adventures across the hammada. The region is home to Gnaoua communities whose music echoes through the desert nights, and the nearby Khamlia village offers authentic cultural experiences. After rain (rare but magical), Dayet Srji lake appears at the foot of the dunes, attracting flamingos. Desert luxury camps have elevated the experience to world-class levels, with ensuite tents, gourmet dining, and private astronomers.',
    population: 4000, elevation: 700, climate: 'Hot desert', bestTimeToVisit: 'October to April',
    latitude: 31.0801, longitude: -4.0134,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['desert', 'sahara', 'dunes', 'camels', 'stargazing', 'adventure'],
    attractionCount: 8, rating: 4.9, reviewCount: 5400,
  },
  {
    id: 'c9', name: 'Ouarzazate', slug: 'ouarzazate', regionId: 'r7', region: 'Drâa-Tafilalet',
    description: 'The Hollywood of Africa, a sun-baked gateway to the kasbahs and the vast Saharan south.',
    longDescription: 'Ouarzazate sits at the crossroads between the High Atlas and the Sahara, making it a natural staging point for desert expeditions. Its claim to fame is the Atlas Studios — the largest film studio in the world — where blockbusters from Gladiator to Game of Thrones have been filmed. The nearby Aït Benhaddou, a UNESCO-listed ksar of red-earth kasbahs, is Morocco\'s most spectacular fortified village. The Taourirt Kasbah in the city center showcases the ornate architectural style of the Glaoui dynasty. South of Ouarzazate, the Draa Valley stretches 200 kilometers through palm-fringed oases, while the Rose Valley near Kelaat M\'gouna erupts in fragrant pink blossoms each May.',
    population: 71067, elevation: 1160, climate: 'Semi-arid continental', bestTimeToVisit: 'March to May, September to November',
    latitude: 30.9189, longitude: -6.8936,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: 'OZZ',
    tags: ['kasbah', 'film', 'desert-gateway', 'unesco', 'history'],
    attractionCount: 14, rating: 4.5, reviewCount: 3800,
  },
  {
    id: 'c10', name: 'Agadir', slug: 'agadir', regionId: 'r8', region: 'Souss-Massa',
    description: 'Morocco\'s premier beach resort city with year-round sunshine, a 10-kilometer golden beach, and gateway to the Anti-Atlas.',
    longDescription: 'Agadir was rebuilt from scratch after a devastating earthquake in 1960 leveled the city in 15 seconds, killing 15,000 people. The modern city that rose from the rubble is Morocco\'s most European-feeling resort destination: a wide promenade, luxury hotels, golf courses, and 300 days of sunshine per year. The 10-kilometer beach is the finest urban beach in Morocco. But Agadir is also the gateway to the stunning Souss-Massa National Park (home to the endangered Northern Bald Ibis), the Anti-Atlas mountains with their unique argan trees, and the charming town of Taroudant. The Souk El Had, one of the largest markets in the country, offers an authentic shopping experience away from the resort zone. Nearby Taghazout has become Morocco\'s premier surf village.',
    population: 421844, elevation: 0, climate: 'Semi-arid Mediterranean', bestTimeToVisit: 'Year-round (best April to November)',
    latitude: 30.4278, longitude: -9.5981,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'AGA',
    tags: ['beach', 'resort', 'surfing', 'modern', 'family', 'golf'],
    attractionCount: 12, rating: 4.3, reviewCount: 5100,
  },
  {
    id: 'c11', name: 'Meknes', slug: 'meknes', regionId: 'r2', region: 'Fès-Meknès',
    description: 'The Versailles of Morocco — Sultan Moulay Ismail\'s imperial dream city with grand gates and underground vaults.',
    longDescription: 'Meknes is the most overlooked of Morocco\'s four imperial cities, which is precisely its charm. Built as a rival to Versailles by the mighty Sultan Moulay Ismail in the 17th century, it boasts some of Morocco\'s most impressive monuments: the colossal Bab Mansour gate (arguably the finest in North Africa), the vast Heri es-Souani granaries and stables designed for 12,000 horses, and the serene Mausoleum of Moulay Ismail — one of few religious sites open to non-Muslims. The compact medina is refreshingly tourist-free, the food is excellent, and nearby Volubilis offers the best-preserved Roman ruins in North Africa.',
    population: 632079, elevation: 546, climate: 'Mediterranean continental', bestTimeToVisit: 'March to May, September to November',
    latitude: 33.8935, longitude: -5.5473,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: true, isCoastal: false, airportCode: null,
    tags: ['imperial-city', 'unesco', 'history', 'gates', 'wine', 'olives'],
    attractionCount: 18, rating: 4.5, reviewCount: 2900,
  },
  {
    id: 'c12', name: 'Ifrane', slug: 'ifrane', regionId: 'r2', region: 'Fès-Meknès',
    description: 'Morocco\'s little Switzerland — a clean, alpine town with cedar forests, Barbary macaques, and winter skiing.',
    longDescription: 'Ifrane is unlike anywhere else in Morocco. Built by the French in 1929 as an alpine retreat, this pristine town at 1,665 meters altitude features red-roofed chalets, manicured gardens, and Al Akhawayn University — Morocco\'s premier English-language institution. In winter, nearby Michlifen ski resort offers Morocco\'s best skiing (yes, you can ski in Africa). The surrounding Middle Atlas cedar forests are home to troops of endangered Barbary macaques, the only wild monkey population in Africa north of the Sahara. Ifrane holds the record for the coldest temperature ever recorded in Africa: -23.9°C in 1935. In summer, the cool mountain air provides blessed relief from the lowland heat.',
    population: 73782, elevation: 1665, climate: 'Mediterranean mountain', bestTimeToVisit: 'Year-round (skiing Dec-Mar, hiking Apr-Oct)',
    latitude: 33.5228, longitude: -5.1074,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['mountains', 'skiing', 'nature', 'clean', 'university', 'cedar-forests'],
    attractionCount: 8, rating: 4.4, reviewCount: 1800,
  },
  {
    id: 'c13', name: 'Dakhla', slug: 'dakhla', regionId: 'r11', region: 'Dakhla-Oued Ed-Dahab',
    description: 'A remote peninsula paradise where the Sahara meets the Atlantic — world-capital of kitesurfing and off-grid adventure.',
    longDescription: 'Dakhla sits on a 40-kilometer peninsula jutting into the Atlantic, 1,700 km south of Casablanca in Morocco\'s deep south. This remote outpost has become a mecca for kitesurfers and windsurfers thanks to its perfect flat-water lagoon, consistent winds, and 350 days of sunshine. Beyond water sports, Dakhla offers some of Morocco\'s most unique experiences: white sand dunes that spill directly into the ocean, oyster farms in the lagoon, flamingo colonies, and the eerie beauty of the Western Sahara landscape. The town itself is a mix of Hassani culture, military presence, and a growing eco-tourism scene. It\'s the last significant town before the Mauritanian border.',
    population: 106277, elevation: 0, climate: 'Hot desert, moderated by ocean', bestTimeToVisit: 'Year-round (best March to November for kiting)',
    latitude: 23.6848, longitude: -15.9580,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'VIL',
    tags: ['kitesurfing', 'desert', 'remote', 'beaches', 'adventure', 'lagoon'],
    attractionCount: 6, rating: 4.7, reviewCount: 1200,
  },
  {
    id: 'c14', name: 'Asilah', slug: 'asilah', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'A pristine whitewashed coastal town famous for its annual mural festival and laid-back Atlantic charm.',
    longDescription: 'Asilah is a small, impossibly picturesque coastal town 46 km south of Tangier. Its fortified medina, built by the Portuguese in the 15th century, features immaculate white walls adorned with vibrant murals that change annually during the Asilah Arts Festival. The town\'s relaxed pace, clean beaches, excellent seafood restaurants, and artistic atmosphere make it a popular weekend escape for Moroccans and a hidden gem for international visitors.',
    population: 31147, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'May to October (August for Arts Festival)',
    latitude: 35.4653, longitude: -6.0347,
    heroImage: '/images/hero-souk-lamps.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['coastal', 'art', 'murals', 'relaxed', 'portuguese', 'beach'],
    attractionCount: 7, rating: 4.5, reviewCount: 2100,
  },
  {
    id: 'c15', name: 'Tetouan', slug: 'tetouan', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'The White Dove — a UNESCO-listed Andalusian jewel with the best-preserved Hispanic-Moorish medina in Morocco.',
    longDescription: 'Tetouan is the most Andalusian city in Morocco, reflecting its deep ties to Spain across the strait. The medina, a UNESCO World Heritage site, features unique Hispanic-Moorish architecture with Spanish-tiled courtyards, wrought-iron balconies, and wide streets. The Royal Palace, the Ethnographic Museum, and the School of Arts and Crafts showcase the city\'s refined cultural heritage. Nearby beaches at Martil and M\'diq offer Mediterranean swimming.',
    population: 380787, elevation: 10, climate: 'Mediterranean', bestTimeToVisit: 'April to October',
    latitude: 35.5784, longitude: -5.3688,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['unesco', 'andalusian', 'medina', 'culture', 'crafts', 'white-city'],
    attractionCount: 12, rating: 4.3, reviewCount: 1600,
  },
  {
    id: 'c16', name: 'El Jadida', slug: 'el-jadida', regionId: 'r5', region: 'Casablanca-Settat',
    description: 'A charming Atlantic port with a stunning Portuguese cistern and UNESCO-listed fortress.',
    longDescription: 'El Jadida (formerly Mazagan) features one of Morocco\'s most remarkable monuments: the Portuguese Cistern, a vast underground chamber with Gothic arches reflected in a shallow pool of water — famously used as a filming location for Othello by Orson Welles. The UNESCO-listed Portuguese city (Cité Portugaise) is a compact fortress with ramparts offering Atlantic views. The town\'s beach, the vibrant fish market, and the August moussem (horse festival) attract domestic tourists.',
    population: 194934, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'May to October',
    latitude: 33.2549, longitude: -8.5010,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['coastal', 'unesco', 'portuguese', 'cistern', 'beach', 'history'],
    attractionCount: 8, rating: 4.2, reviewCount: 1400,
  },
  {
    id: 'c17', name: 'Taroudant', slug: 'taroudant', regionId: 'r8', region: 'Souss-Massa',
    description: 'Little Marrakech — a walled Amazigh market town surrounded by argan groves at the foot of the High Atlas.',
    longDescription: 'Taroudant is often called "Little Marrakech" for its red-earth ramparts and bustling souks, but without the tourist crowds. This fortified town in the Souss Valley has been a commercial hub since the Saadian dynasty made it their first capital in the 16th century. The double ring of crenellated walls is among the best preserved in Morocco. Two main souks — the Arab Souk (clothing, spices, household goods) and the Amazigh Souk (leather, pottery, crafts) — offer authentic haggling experiences. Surrounding argan groves produce the precious oil that has become a global beauty phenomenon.',
    population: 80149, elevation: 230, climate: 'Semi-arid Mediterranean', bestTimeToVisit: 'October to April',
    latitude: 30.4727, longitude: -8.8748,
    heroImage: '/images/hero-desert.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['walled-city', 'souks', 'amazigh', 'argan', 'authentic', 'mountains'],
    attractionCount: 9, rating: 4.4, reviewCount: 1100,
  },
  {
    id: 'c18', name: 'Tinghir', slug: 'tinghir', regionId: 'r7', region: 'Drâa-Tafilalet',
    description: 'An oasis town at the gateway to the spectacular Todra Gorge — sheer 300-meter canyon walls carved by time.',
    longDescription: 'Tinghir is a sprawling palmery oasis on the Route of a Thousand Kasbahs. The town itself is pleasant but the main attraction lies 15 km north: the Todra Gorge, where the river has carved a dramatic canyon through the Atlas Mountains, narrowing to just 10 meters wide between 300-meter vertical limestone walls. It\'s Morocco\'s premier rock climbing destination and a breathtaking spectacle for all visitors. The palmery around Tinghir extends for 30 km along the Todra River, dotted with kasbahs and Amazigh villages.',
    population: 42044, elevation: 1342, climate: 'Semi-arid continental', bestTimeToVisit: 'March to May, September to November',
    latitude: 31.5147, longitude: -5.5327,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['gorge', 'oasis', 'climbing', 'kasbah', 'palmery', 'atlas'],
    attractionCount: 6, rating: 4.6, reviewCount: 2200,
  },
  {
    id: 'c19', name: 'Taghazout', slug: 'taghazout', regionId: 'r8', region: 'Souss-Massa',
    description: 'Morocco\'s surf capital — a laid-back fishing village turned world-class surf destination north of Agadir.',
    longDescription: 'Taghazout has transformed from a sleepy Amazigh fishing village into Morocco\'s premier surf destination. The stretch of coast around the village offers some of the best surf breaks in Africa: Anchor Point (a legendary right-hand point break), Killer Point, Hash Point, and Panoramas cater to all levels. The village retains its fishing heritage with brightly painted boats on the beach, while surf camps, yoga retreats, and vegetarian cafés have sprouted along the main road. The vibe is mellow and international, with perfect weather almost year-round.',
    population: 6000, elevation: 0, climate: 'Semi-arid, very sunny', bestTimeToVisit: 'October to March for surf; year-round for weather',
    latitude: 30.5441, longitude: -9.7087,
    heroImage: '/images/hero-surfing.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['surfing', 'beach', 'yoga', 'laid-back', 'fishing', 'waves'],
    attractionCount: 5, rating: 4.6, reviewCount: 3200,
  },
  {
    id: 'c20', name: 'Moulay Idriss Zerhoun', slug: 'moulay-idriss', regionId: 'r2', region: 'Fès-Meknès',
    description: 'Morocco\'s holiest town, the spiritual heart of the nation built around the tomb of its founding saint.',
    longDescription: 'Moulay Idriss Zerhoun cascades down two hills around the tomb of Moulay Idriss I, the great-grandson of Prophet Muhammad who brought Islam to Morocco in 789 AD. For centuries, five visits to this town was considered equivalent to one hajj to Mecca, and non-Muslims were forbidden from staying overnight until 2005. Today, the town offers a deeply spiritual atmosphere, stunning hilltop views over the surrounding olive groves and Volubilis ruins, and an authenticity that few Moroccan towns can match. The annual moussem (pilgrimage festival) in August attracts thousands of devotees.',
    population: 12000, elevation: 500, climate: 'Mediterranean continental', bestTimeToVisit: 'March to May, September to October',
    latitude: 34.0558, longitude: -5.5228,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['holy-city', 'spiritual', 'pilgrimage', 'authentic', 'hilltop', 'views'],
    attractionCount: 5, rating: 4.6, reviewCount: 900,
  },
  {
    id: 'c21', name: 'Al Hoceima', slug: 'al-hoceima', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'A Mediterranean gem with pristine beaches, a national park, and unspoiled Rif mountain scenery.',
    longDescription: 'Al Hoceima is one of Morocco\'s best-kept secrets: a small Mediterranean port town with crystal-clear water, uncrowded beaches, and the Al Hoceima National Park protecting marine and mountain ecosystems. The town sits in a natural amphitheater surrounded by the Rif Mountains, and its beaches — Quemado, Souani, Cala Iris — rank among the most beautiful in the country. The region\'s Amazigh culture is strong, and the seafood is exceptional.',
    population: 56716, elevation: 0, climate: 'Mediterranean', bestTimeToVisit: 'June to September',
    latitude: 35.2517, longitude: -3.9372,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'AHU',
    tags: ['mediterranean', 'beaches', 'nature', 'national-park', 'amazigh', 'seafood'],
    attractionCount: 7, rating: 4.5, reviewCount: 800,
  },
  {
    id: 'c22', name: 'Safi', slug: 'safi', regionId: 'r1', region: 'Marrakech-Safi',
    description: 'Morocco\'s pottery capital — an Atlantic port city famous for its colorful ceramics and sardine industry.',
    longDescription: 'Safi has been Morocco\'s ceramics capital for centuries. The Colline des Potiers (Potters\' Hill) is a living workshop where artisans produce the distinctive Safi pottery — bold geometric designs in blue, green, and yellow. The Portuguese fortress (Kechla) and the coastal Château de Mer provide historical gravitas, while the city\'s sardine canning industry makes it one of the world\'s largest sardine exporters.',
    population: 308508, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'April to October',
    latitude: 32.2994, longitude: -9.2372,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['pottery', 'ceramics', 'coastal', 'portuguese', 'crafts', 'industrial'],
    attractionCount: 8, rating: 4.0, reviewCount: 700,
  },
  {
    id: 'c23', name: 'Zagora', slug: 'zagora', regionId: 'r7', region: 'Drâa-Tafilalet',
    description: 'Where the famous sign reads "Timbuktu 52 Days" — gateway to the Draa Valley and desert camel treks.',
    longDescription: 'Zagora marks the beginning of the Saharan frontier. The famous roadside sign "Tombouctou 52 Jours" by camel caravan captures the town\'s historic role as a departure point for trans-Saharan trade. Today, Zagora is the gateway to Erg Chegaga — a more remote and less-visited dune field than Erg Chebbi — and the stunning Draa Valley, the longest river valley in Morocco, lined with date palms and kasbahs.',
    population: 36000, elevation: 700, climate: 'Hot desert', bestTimeToVisit: 'October to April',
    latitude: 30.3322, longitude: -5.8380,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['desert', 'draa-valley', 'camels', 'oasis', 'kasbahs', 'adventure'],
    attractionCount: 6, rating: 4.3, reviewCount: 1000,
  },
  {
    id: 'c24', name: 'Oujda', slug: 'oujda', regionId: 'r12', region: 'Oriental',
    description: 'Morocco\'s eastern frontier city — a multicultural crossroads near the Algerian border with unique Raï music heritage.',
    longDescription: 'Oujda, founded in 994 AD, is Morocco\'s easternmost major city, sitting just 15 km from the Algerian border. This gives it a unique cultural character blending Moroccan, Algerian, and French influences. The city is the birthplace of Raï music in Morocco and hosts the annual Raï Festival. The medina is compact and authentic, the nearby Saidia beach resort offers 14 km of Mediterranean sand, and the mountains of Beni Snassen provide hiking opportunities.',
    population: 494252, elevation: 470, climate: 'Semi-arid Mediterranean', bestTimeToVisit: 'April to June, September to November',
    latitude: 34.6814, longitude: -1.9086,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: 'OUD',
    tags: ['eastern', 'border', 'rai-music', 'multicultural', 'authentic'],
    attractionCount: 8, rating: 4.0, reviewCount: 600,
  },
  {
    id: 'c25', name: 'Midelt', slug: 'midelt', regionId: 'r7', region: 'Drâa-Tafilalet',
    description: 'The apple capital of Morocco, a mountain town between the Middle and High Atlas with spectacular geology.',
    longDescription: 'Midelt sits in a high valley at 1,500 meters between the Middle Atlas and High Atlas ranges. Known as the "Apple Capital" for its vast orchards, the town is also famous for its minerals — the nearby Ahouli mines produce world-class vanadinite crystals sought by collectors globally. Jebel Ayachi (3,737m) towers to the south, offering challenging trekking. Midelt serves as an ideal stopover between Fes and the Sahara.',
    population: 55304, elevation: 1500, climate: 'Semi-arid continental', bestTimeToVisit: 'April to October',
    latitude: 32.6802, longitude: -4.7340,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['mountains', 'apples', 'minerals', 'atlas', 'trekking', 'stopover'],
    attractionCount: 5, rating: 4.1, reviewCount: 500,
  },
  {
    id: 'c26', name: 'Azrou', slug: 'azrou', regionId: 'r2', region: 'Fès-Meknès',
    description: 'A Middle Atlas Amazigh town surrounded by cedar forests where Barbary macaques swing through the trees.',
    longDescription: 'Azrou ("The Rock" in Amazigh) is named after the large volcanic rock in its center. This small mountain town is the heartland of Middle Atlas Amazigh culture, known for its cedar woodworking, thick carpets, and the vast Cèdre Gouraud forest where troops of Barbary macaques — the only wild monkeys in Africa north of the Sahara — roam freely. The Tuesday souk is one of the most authentic in the region.',
    population: 54350, elevation: 1250, climate: 'Mediterranean mountain', bestTimeToVisit: 'April to October',
    latitude: 33.4341, longitude: -5.2210,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['mountains', 'cedar', 'monkeys', 'amazigh', 'nature', 'crafts'],
    attractionCount: 5, rating: 4.3, reviewCount: 700,
  },
  {
    id: 'c27', name: 'Sidi Ifni', slug: 'sidi-ifni', regionId: 'r9', region: 'Guelmim-Oued Noun',
    description: 'A faded Art Deco gem on the Atlantic coast with Spanish colonial architecture and dramatic Legzira beach nearby.',
    longDescription: 'Sidi Ifni was the last territory Spain returned to Morocco in 1969, and its Art Deco Spanish colonial architecture gives it a unique, time-capsule feel. The former Spanish consulate, cinema, and church dot the compact town center. The main draw is nearby Legzira Beach, famous for its massive natural red stone arches (one collapsed in 2016, but another remains standing). The town has a growing surf and digital nomad scene.',
    population: 20000, elevation: 0, climate: 'Semi-arid oceanic', bestTimeToVisit: 'April to November',
    latitude: 29.3797, longitude: -10.1727,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['coastal', 'art-deco', 'spanish', 'surf', 'legzira', 'remote'],
    attractionCount: 4, rating: 4.4, reviewCount: 600,
  },
  {
    id: 'c28', name: 'Kenitra', slug: 'kenitra', regionId: 'r4', region: 'Rabat-Salé-Kénitra',
    description: 'A modern Atlantic city and agricultural hub with nearby Mehdia beach and the Gharb plains.',
    longDescription: 'Kenitra (formerly Port Lyautey) is a modern, bustling city on the banks of the Sebou River, Morocco\'s largest river. While not a traditional tourist stop, it offers the excellent Mehdia Beach and the fascinating Mehdia Kasbah at the river mouth. The city is a transport hub well-connected by the new TGV high-speed train.',
    population: 431282, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'May to October',
    latitude: 34.2610, longitude: -6.5802,
    heroImage: '/images/hero-souk-lamps.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['modern', 'transport-hub', 'beach', 'river', 'agriculture'],
    attractionCount: 4, rating: 4.0, reviewCount: 400,
  },
  {
    id: 'c29', name: 'Tiznit', slug: 'tiznit', regionId: 'r8', region: 'Souss-Massa',
    description: 'The silver jewelry capital of Morocco, a walled town with authentic Amazigh souks and nearby Mirleft beach.',
    longDescription: 'Tiznit is renowned across Morocco for its silver jewelry — the town\'s jewelers\' souk is the finest in the country, where Amazigh artisans craft intricate fibulas, bracelets, and necklaces using techniques passed down for generations. The 19th-century city walls, complete with crenellations and gates, encircle a medina that sees very few tourists. The nearby beach town of Mirleft offers excellent surfing and stunning cliff-backed beaches.',
    population: 74699, elevation: 210, climate: 'Semi-arid', bestTimeToVisit: 'October to April',
    latitude: 29.6974, longitude: -9.7998,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['silver', 'jewelry', 'amazigh', 'walled-city', 'crafts', 'authentic'],
    attractionCount: 5, rating: 4.2, reviewCount: 500,
  },
  {
    id: 'c30', name: 'Oualidia', slug: 'oualidia', regionId: 'r5', region: 'Casablanca-Settat',
    description: 'Morocco\'s oyster capital — a serene lagoon town famous for fresh shellfish and safe swimming.',
    longDescription: 'Oualidia is a tiny coastal paradise centered around a stunning natural lagoon. The calm, warm waters of the lagoon make it one of the safest swimming spots on Morocco\'s wild Atlantic coast, and it\'s especially popular with families. But Oualidia\'s real claim to fame is its oysters — the Oualidia oyster parks produce Morocco\'s finest shellfish, farmed in the nutrient-rich lagoon waters. Several restaurants serve them fresh, right at the water\'s edge. The royal family has a summer palace here, testament to the town\'s exclusive appeal.',
    population: 5000, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'May to October',
    latitude: 32.7316, longitude: -9.0304,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['lagoon', 'oysters', 'seafood', 'swimming', 'peaceful', 'royal'],
    attractionCount: 3, rating: 4.6, reviewCount: 800,
  },
  {
    id: 'c31', name: 'Imlil', slug: 'imlil', regionId: 'r1', region: 'Marrakech-Safi',
    description: 'The gateway to Mount Toubkal, North Africa\'s highest peak, and the premier trekking base in the High Atlas Mountains.',
    longDescription: 'Imlil is a small Amazigh village nestled at 1,740 meters in the Imlil Valley, serving as the primary starting point for treks to Jebel Toubkal (4,167m), the highest mountain in North Africa. The village has grown from a handful of stone houses into a well-equipped trekking hub with guesthouses, mountain guides, and mule hire services, yet it retains its traditional character with terraced walnut groves and irrigated fields clinging to the valley slopes.\n\nThe surrounding High Atlas landscape is stunning at every season: almond blossoms carpet the valleys in spring, summer brings wildflower meadows, autumn turns the walnut trees golden, and winter caps the peaks with snow. Beyond the Toubkal ascent, the area offers numerous day hikes to Amazigh villages like Armed, Tachdirt, and the Azzaden Valley, where life continues much as it has for centuries. The Kasbah du Toubkal, a former feudal stronghold converted into a mountain lodge, is one of Morocco\'s most atmospheric places to stay.',
    population: 6000, elevation: 1740, climate: 'Mountain Mediterranean', bestTimeToVisit: 'April to June, September to October',
    latitude: 31.1361, longitude: -7.9194,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['trekking', 'mountains', 'toubkal', 'amazigh', 'hiking', 'adventure', 'atlas'],
    attractionCount: 7, rating: 4.7, reviewCount: 3100,
  },
  {
    id: 'c32', name: 'Larache', slug: 'larache', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'A charming Atlantic port town with Spanish colonial heritage, an ancient riverside kasbah, and the nearby ruins of Lixus.',
    longDescription: 'Larache is an underrated coastal town at the mouth of the Loukkos River, blending Moroccan and Spanish influences into a character entirely its own. The medina perches above the river and harbor, its whitewashed streets decorated with blue trim reminiscent of Andalusian villages. The 17th-century Kasbah de la Cigogne commands views over the Atlantic, and the Place de la Liberation — lined with Spanish-era cafes — is the social heart of the town.\n\nJust 4 km north lies Lixus, one of the most important archaeological sites in Morocco. This ancient Phoenician, Roman, and Berber settlement overlooks the Loukkos River and features a partially restored amphitheater, bathhouses, and mosaics. The beach at Ras R\'mel, a sandy spit across the river, is popular in summer. Larache is also the final resting place of French writer Jean Genet, who chose this unassuming town to be buried in its Catholic cemetery overlooking the sea.',
    population: 125008, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'May to October',
    latitude: 35.1932, longitude: -6.1562,
    heroImage: '/images/hero-souk-lamps.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['coastal', 'spanish', 'ruins', 'history', 'authentic', 'river'],
    attractionCount: 7, rating: 4.2, reviewCount: 650,
  },
  {
    id: 'c33', name: 'Khouribga', slug: 'khouribga', regionId: 'r6', region: 'Béni Mellal-Khénifra',
    description: 'The phosphate capital of Morocco, an industrial city surrounded by rich mining heritage and the gateway to the Oum Er-Rbia plateau.',
    longDescription: 'Khouribga sits atop one of the largest phosphate reserves in the world, making it central to Morocco\'s position as the world\'s leading phosphate exporter. The city grew rapidly in the 20th century around the mining operations of the OCP Group, and today it is a bustling commercial center with a population that has quadrupled since independence.\n\nWhile not a traditional tourist destination, Khouribga offers insight into Morocco\'s industrial backbone. The OCP Museum chronicles the history of phosphate mining and its impact on the region. The city\'s modern parks, the Grand Mosque, and the lively weekly souks provide a glimpse into everyday Moroccan life far from the tourist trail. The surrounding plateau landscape, with its scrubby hills and seasonal wildflowers, provides a stark contrast to the coastal and mountain scenery elsewhere in the country.',
    population: 196196, elevation: 790, climate: 'Semi-arid continental', bestTimeToVisit: 'March to May, October to November',
    latitude: 32.8811, longitude: -6.9063,
    heroImage: '/images/hero-desert.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['industrial', 'phosphate', 'mining', 'authentic', 'off-the-beaten-path'],
    attractionCount: 4, rating: 4.0, reviewCount: 250,
  },
  {
    id: 'c34', name: 'Settat', slug: 'settat', regionId: 'r5', region: 'Casablanca-Settat',
    description: 'A bustling agricultural hub in the Chaouia plains, known for its livestock markets and traditional Moroccan rural culture.',
    longDescription: 'Settat is the commercial center of the fertile Chaouia plain, one of Morocco\'s most important agricultural regions. Situated roughly 70 km south of Casablanca along the main highway, it serves as a market town for surrounding farming communities. The Kasbah Ismailia, built during the reign of Sultan Moulay Ismail in the 17th century, is a reminder of the town\'s strategic importance on the trade route between Marrakech and Fes.\n\nThe Thursday souk is a vibrant affair where farmers trade livestock, grain, and produce, offering visitors an authentic slice of rural Moroccan commerce. Hassan I University gives the city a youthful energy, while new development zones reflect its growing role as an overflow city for Casablanca. Settat is an honest, working Moroccan town that provides context for understanding the country beyond its tourist highlights.',
    population: 142250, elevation: 370, climate: 'Semi-arid Mediterranean', bestTimeToVisit: 'March to May, October to November',
    latitude: 33.0011, longitude: -7.6166,
    heroImage: '/images/hero-desert.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['agricultural', 'authentic', 'market', 'off-the-beaten-path', 'kasbah'],
    attractionCount: 3, rating: 4.0, reviewCount: 200,
  },
  {
    id: 'c35', name: 'Mohammedia', slug: 'mohammedia', regionId: 'r5', region: 'Casablanca-Settat',
    description: 'A seaside resort city between Casablanca and Rabat, popular with Moroccans for its beaches, golf courses, and flower festival.',
    longDescription: 'Mohammedia, formerly known as Fedala, is a pleasant coastal city wedged between Casablanca (25 km south) and Rabat. Long favored by Casablancais as a weekend beach escape, it offers a slower pace and cleaner shores than the metropolis. The city\'s wide sandy beaches stretch along the Atlantic, backed by a pleasant corniche lined with seafood restaurants and cafes.\n\nThe Royal Golf de Mohammedia, one of the oldest courses in Morocco, attracts golfers year-round. The annual flower festival (Fete des Fleurs) fills the streets with elaborate floats and floral displays each spring. The kasbah district retains some colonial-era architecture from the French protectorate period. Mohammedia also houses Morocco\'s main oil refinery, but the industrial zone is well separated from the tourist-friendly beachfront and city center.',
    population: 208612, elevation: 0, climate: 'Mediterranean oceanic', bestTimeToVisit: 'May to October',
    latitude: 33.6866, longitude: -7.3826,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['beach', 'resort', 'golf', 'coastal', 'flowers', 'relaxed'],
    attractionCount: 5, rating: 4.1, reviewCount: 750,
  },
  {
    id: 'c36', name: 'Fnideq', slug: 'fnideq', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'A Mediterranean border town near Ceuta with bustling markets and easy access to northern Morocco\'s finest beaches.',
    longDescription: 'Fnideq sits at the foot of the Rif Mountains on the Mediterranean coast, just a few kilometers from the Spanish enclave of Ceuta. For decades the town thrived on cross-border trade, and its markets remain among the liveliest in northern Morocco, packed with goods and attracting shoppers from across the region.\n\nThe town\'s Mediterranean beach is a broad sandy stretch popular with Moroccan families in summer. The surrounding coastline — stretching south toward M\'diq and Cabo Negro — is one of the most developed resort zones in the country. New infrastructure, including the highway connecting Tangier to Tetouan and beyond, has improved access significantly. For visitors, Fnideq offers an authentic Moroccan Mediterranean experience away from the more polished resort towns nearby.',
    population: 77343, elevation: 0, climate: 'Mediterranean', bestTimeToVisit: 'June to September',
    latitude: 35.8494, longitude: -5.3571,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['mediterranean', 'border', 'markets', 'beach', 'shopping'],
    attractionCount: 4, rating: 4.0, reviewCount: 350,
  },
  {
    id: 'c37', name: 'M\'diq', slug: 'mdiq', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'A popular Mediterranean resort town with a vibrant marina, seafood restaurants, and a lively summer festival scene.',
    longDescription: 'M\'diq (also spelled Mdiq) is one of Morocco\'s most popular Mediterranean beach resorts, occupying a sheltered bay between Ceuta and Tetouan. The town boasts a modern marina, Kabila, which has become a hub for sailing and water sports along the northern coast. The wide sandy beach stretches for several kilometers, backed by restaurants and promenades that fill with Moroccan vacationers from June through September.\n\nBeyond the beach scene, M\'diq retains vestiges of its fishing village past. The morning fish auction at the port is a colorful spectacle, and the seafood restaurants lining the harbor road serve some of the freshest catches on the Mediterranean coast. The annual M\'diq-Fnideq International Festival of Mediterranean Culture brings music, theater, and art to the waterfront each summer. The nearby hills offer coastal hiking with panoramic views of the sea and the Spanish enclave of Ceuta in the distance.',
    population: 56227, elevation: 0, climate: 'Mediterranean', bestTimeToVisit: 'June to September',
    latitude: 35.6850, longitude: -5.3220,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['mediterranean', 'resort', 'marina', 'beach', 'seafood', 'summer'],
    attractionCount: 5, rating: 4.2, reviewCount: 900,
  },
  {
    id: 'c38', name: 'Cabo Negro', slug: 'cabo-negro', regionId: 'r3', region: 'Tanger-Tétouan-Al Hoceïma',
    description: 'An upscale Mediterranean beach enclave between M\'diq and Tetouan, known for its pine-fringed coastline and golf course.',
    longDescription: 'Cabo Negro is a refined beach community on Morocco\'s Mediterranean coast, nestled between M\'diq and Tetouan. Unlike the more bustling resorts nearby, Cabo Negro has cultivated an exclusive atmosphere with its pine-shaded avenues, manicured Royal Golf Club, and private villas that attract Morocco\'s elite and well-heeled visitors.\n\nThe beach is one of the prettiest on the northern coast — a long crescent of golden sand framed by low forested hills that tumble down to the water\'s edge. The Royal Golf Cabo Negro, an 18-hole course designed among Mediterranean pines and eucalyptus, is one of the most scenic in the country. Summer brings a cosmopolitan crowd to the beach clubs and seafood restaurants, while the off-season offers peaceful coastal walks and the sound of waves lapping against empty shores. The proximity to Tetouan\'s UNESCO medina and Chefchaouen in the Rif Mountains makes Cabo Negro an ideal base for combining beach and culture.',
    population: 3500, elevation: 0, climate: 'Mediterranean', bestTimeToVisit: 'May to October',
    latitude: 35.6384, longitude: -5.2889,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['beach', 'golf', 'upscale', 'mediterranean', 'pine-forest', 'resort'],
    attractionCount: 3, rating: 4.3, reviewCount: 550,
  },
  {
    id: 'c39', name: 'Saidiia', slug: 'saidia', regionId: 'r12', region: 'Oriental',
    description: 'The Blue Pearl of the Mediterranean — Morocco\'s longest beach stretches 14 km along the Algerian border with a modern resort complex.',
    longDescription: 'Saidia, nicknamed "the Blue Pearl," sits at the far northeastern corner of Morocco, just 3 km from the Algerian border. Its main attraction is undeniable: a 14-kilometer unbroken stretch of golden sand beach, the longest in Morocco, lapped by the warm, calm waters of the Mediterranean. The Mediterrania Saidia resort complex, opened in 2009, added an 18-hole golf course, a large marina, luxury hotels, and aquapark facilities.\n\nDespite the modern resort infrastructure, Saidia retains a distinctly local character. The old town center buzzes with cafes and small restaurants, and the weekly souk draws farmers from across the Oriental region. The Moulouya River estuary, just west of town, is a protected wetland and birdwatching paradise where flamingos, herons, and migratory species gather. Saidia\'s remoteness from Morocco\'s main tourist circuits means it is primarily popular with Moroccan and Algerian vacationers, giving it an authentic summer holiday atmosphere.',
    population: 8000, elevation: 0, climate: 'Mediterranean', bestTimeToVisit: 'June to September',
    latitude: 35.0868, longitude: -2.2294,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['beach', 'mediterranean', 'resort', 'golf', 'marina', 'birds', 'longest-beach'],
    attractionCount: 5, rating: 4.3, reviewCount: 1100,
  },
  {
    id: 'c40', name: 'Beni Mellal', slug: 'beni-mellal', regionId: 'r6', region: 'Béni Mellal-Khénifra',
    description: 'A fertile Atlas foothill city surrounded by olive groves and waterfalls, gateway to the Bin el-Ouidane dam and Ouzoud Falls.',
    longDescription: 'Beni Mellal spreads across the fertile Tadla plain at the foot of the Middle Atlas Mountains, surrounded by vast olive groves and irrigated farmland. The city serves as the regional capital and a major agricultural market, but its real appeal for visitors lies in the stunning natural landscapes on its doorstep.\n\nThe Ain Asserdoun spring, emerging from a cave above the city, feeds gardens and cascades that have attracted picnickers for centuries. The ruined Kasbah de Ras el-Ain overlooks the city from a hilltop, offering panoramic views of the plain and mountains. Day trips from Beni Mellal include the spectacular Cascades d\'Ouzoud — Morocco\'s highest waterfall at 110 meters, home to Barbary macaques — and the turquoise Bin el-Ouidane reservoir, surrounded by red earth hills, which offers kayaking and fishing. The Afourer oasis, Imi n\'Ifri natural bridge, and the Cathedrale de Roches geological formations are all within an hour\'s drive.',
    population: 163286, elevation: 520, climate: 'Semi-arid Mediterranean', bestTimeToVisit: 'March to May, September to November',
    latitude: 32.3373, longitude: -6.3498,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['atlas', 'waterfalls', 'nature', 'olives', 'agriculture', 'dam', 'hiking'],
    attractionCount: 9, rating: 4.3, reviewCount: 950,
  },
  {
    id: 'c41', name: 'Taza', slug: 'taza', regionId: 'r2', region: 'Fès-Meknès',
    description: 'A historic hilltop citadel guarding the Taza Gap, with one of Morocco\'s oldest mosques and the spectacular Tazekka National Park.',
    longDescription: 'Taza occupies one of the most strategic positions in Morocco, commanding the Taza Gap — a narrow mountain pass between the Rif and Middle Atlas that has been the primary invasion route between eastern and western Morocco for millennia. The old town (Taza Haut) sits on a rocky plateau and contains one of the oldest mosques in the country, the 12th-century Grand Mosque built by the Almohads, which predates many of the famous mosques of Fes.\n\nThe Tazekka National Park, established in 1950 and expanded in 2004, protects cork oak and cedar forests just south of the city. Its highlights include the Friouato Caves — among the deepest in Africa at over 270 meters — the Ras el-Ma waterfall, and the volcanic Dayat Chiker lake that fills seasonally. The park offers excellent hiking through landscapes ranging from dense forest to dramatic limestone gorges. Taza is rarely visited by international tourists, making it one of the most authentic and rewarding detours in Morocco.',
    population: 148456, elevation: 510, climate: 'Mediterranean continental', bestTimeToVisit: 'March to May, September to November',
    latitude: 34.2100, longitude: -4.0100,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['historic', 'national-park', 'caves', 'hiking', 'authentic', 'mosque', 'citadel'],
    attractionCount: 8, rating: 4.2, reviewCount: 450,
  },
  {
    id: 'c42', name: 'Nador', slug: 'nador', regionId: 'r12', region: 'Oriental',
    description: 'A modern Mediterranean city on the Mar Chica lagoon, gateway to the Spanish enclave of Melilla and the Rif Mountains.',
    longDescription: 'Nador is the largest city in Morocco\'s eastern Rif region, spread along the shores of the Marchica lagoon (Mar Chica), one of the largest coastal lagoons in the Mediterranean. The city has grown rapidly from a small fishing village into a modern commercial center, fueled in part by remittances from a large diaspora in Europe, particularly the Netherlands and Belgium.\n\nThe Marchica lagoon is at the heart of an ambitious eco-tourism development project, with plans for marinas, golf courses, and sustainable resort communities. For now, the lagoon offers excellent birdwatching and calm-water swimming. Nearby Charrana and Kariat Arkmane beaches provide quieter Mediterranean shore experiences. The Spanish enclave of Melilla, just 13 km north, offers a fascinating day trip with its Modernist architecture and duty-free shopping. The Rif Mountains rise dramatically to the west, and the road to Al Hoceima is one of the most scenic coastal drives in North Africa.',
    population: 161726, elevation: 10, climate: 'Mediterranean', bestTimeToVisit: 'May to October',
    latitude: 35.1744, longitude: -2.9287,
    heroImage: '/images/card-beach.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: 'NDR',
    tags: ['mediterranean', 'lagoon', 'modern', 'rif', 'birds', 'beach'],
    attractionCount: 6, rating: 4.1, reviewCount: 700,
  },
  {
    id: 'c43', name: 'Errachidia', slug: 'errachidia', regionId: 'r7', region: 'Drâa-Tafilalet',
    description: 'A Saharan gateway city on the Ziz Valley, surrounded by palm-lined gorges and ancient ksour along the road to Merzouga.',
    longDescription: 'Errachidia (formerly Ksar es-Souk) is the administrative capital of the Draa-Tafilalet region and the main urban center on the route between Fes and the Saharan dunes of Merzouga. The city itself is a functional, modern Moroccan town built around a French Foreign Legion garrison, but its surroundings are spectacular.\n\nThe Ziz Gorge, north of the city, is a dramatic canyon where the river has carved through red limestone over millennia, creating a winding oasis lined with date palms and dotted with fortified ksour (mud-brick villages). The Tunnel du Légionnaire, blasted through rock by the French in the 1930s, marks the entrance to the gorge. South of the city, the Ziz Valley opens into the vast Tafilalet palm grove — the largest oasis in Morocco with over a million date palms. The Source Bleue de Meski, a natural spring feeding a blue pool shaded by palms, is a popular swimming stop. Errachidia is best experienced as a base for exploring the surrounding valleys, gorges, and the road south to the Sahara.',
    population: 92374, elevation: 1045, climate: 'Hot desert', bestTimeToVisit: 'October to April',
    latitude: 31.9314, longitude: -4.4267,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: 'ERH',
    tags: ['desert-gateway', 'oasis', 'gorge', 'palms', 'ziz-valley', 'sahara'],
    attractionCount: 7, rating: 4.1, reviewCount: 600,
  },
  {
    id: 'c44', name: 'Guelmim', slug: 'guelmim', regionId: 'r9', region: 'Guelmim-Oued Noun',
    description: 'The Gateway to the Sahara and historic camel market town where the settled north meets the nomadic south.',
    longDescription: 'Guelmim (also spelled Goulimine) has been called the "Gateway to the Sahara" for centuries, marking the traditional boundary between settled Morocco and the nomadic Saharan regions to the south. The city was historically famous for its Saturday camel market, where blue-robed Sahrawi nomads traded dromedaries, dates, and desert goods. While the camel market has diminished from its legendary proportions, it still takes place and remains an atmospheric window into Saharan trading culture.\n\nThe city is the capital of the Guelmim-Oued Noun region, and its position at the edge of the Anti-Atlas and the beginning of the Saharan hamada (stony desert) gives it a unique transitional character. The Plage Blanche (White Beach), accessible via a rough track southwest of the city, is a 40-km stretch of utterly deserted Atlantic coastline backed by sand cliffs — one of the most remote and spectacular beaches in Morocco. The Amtoudi agadir (fortified granary) and the Oasis of Tighmert are worthwhile day trips into a landscape that grows increasingly Saharan with every kilometer south.',
    population: 118318, elevation: 280, climate: 'Semi-arid to arid', bestTimeToVisit: 'October to April',
    latitude: 28.9833, longitude: -10.0500,
    heroImage: '/images/hero-marrakech.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: false, airportCode: null,
    tags: ['desert-gateway', 'camels', 'market', 'sahara', 'nomadic', 'remote'],
    attractionCount: 5, rating: 4.1, reviewCount: 400,
  },
  {
    id: 'c45', name: 'Sale', slug: 'sale', regionId: 'r4', region: 'Rabat-Salé-Kénitra',
    description: 'Rabat\'s twin city across the Bou Regreg river, once a notorious pirate republic and now home to authentic medina life.',
    longDescription: 'Sale sits on the north bank of the Bou Regreg river, directly opposite Rabat, and together they form a metropolitan area of over 2 million people. While Rabat draws the tourists, Sale rewards the curious traveler with a far more authentic and less-visited medina. In the 17th century, Sale was the base of the infamous Sale Rovers (or Barbary pirates), a republic of corsairs who terrorized Atlantic shipping and even raided as far as Iceland and the Americas.\n\nToday, the medina is a living, working quarter with none of the tourist polish of Marrakech or Fes. The Grand Mosque, the Medersa (theological school) with its intricate carved stucco, and the Marabout of Sidi Abdallah ben Hassoun are the main sights. The annual Wax Candle Festival (Moussem of Sidi Abdallah ben Hassoun), held on the eve of the Prophet\'s birthday, is one of Morocco\'s most colorful processions. The new Bouregreg Marina development along the river has added modern dining and leisure options, and the tramway connects Sale to Rabat in minutes.',
    population: 890403, elevation: 15, climate: 'Mediterranean oceanic', bestTimeToVisit: 'March to June, September to November',
    latitude: 34.0531, longitude: -6.7986,
    heroImage: '/images/hero-coastal.webp',
    galleryImages: [],
    isImperialCity: false, isCoastal: true, airportCode: null,
    tags: ['medina', 'history', 'pirates', 'authentic', 'river', 'crafts'],
    attractionCount: 8, rating: 4.2, reviewCount: 950,
  },
]

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

export function getCitiesByRegion(regionId: string): City[] {
  return cities.filter(c => c.regionId === regionId)
}

export function getFeaturedCities(): City[] {
  return cities.filter(c => c.rating >= 4.5).sort((a, b) => b.rating - a.rating)
}

export function searchCities(query: string): City[] {
  const q = query.toLowerCase()
  return cities.filter(c =>
    c.name.toLowerCase().includes(q) ||
    c.description.toLowerCase().includes(q) ||
    c.tags.some(t => t.includes(q)) ||
    c.region.toLowerCase().includes(q)
  )
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find(r => r.slug === slug)
}

// Distance calculation (Haversine)
export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return Math.round(R * c)
}

export function getNearbyCities(cityId: string, limit = 5): City[] {
  const city = cities.find(c => c.id === cityId)
  if (!city) return []
  return cities
    .filter(c => c.id !== cityId)
    .map(c => ({ ...c, distance: getDistance(city.latitude, city.longitude, c.latitude, c.longitude) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
}

export function getAllCities(): City[] {
  return [...cities].sort((a, b) => a.name.localeCompare(b.name))
}

export function getCitiesByTag(tag: string): City[] {
  const t = tag.toLowerCase()
  return cities.filter(c => c.tags.some(ct => ct.toLowerCase() === t))
}

export function getPopularCities(): City[] {
  return [...cities].sort((a, b) => b.rating - a.rating).slice(0, 10)
}

export function getCoastalCities(): City[] {
  return cities.filter(c => c.isCoastal)
}

export function getImperialCities(): City[] {
  return cities.filter(c => c.isImperialCity)
}

export function getCityCount(): number {
  return cities.length
}
