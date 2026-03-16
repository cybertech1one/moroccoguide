import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Camera,
  Calendar,
  Users,
  FileText,
  Sparkles,
  Crown,
  Building,
  Mountain,
  Palmtree,
  GlassWater,
  Gem,
  BookOpen,
  Music,
  Sun,
  ThermometerSun,
  Plane,
  AlertTriangle,
  CheckCircle,
  Send,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Weddings & Celebrations in Morocco | Venues, Planning & Legal Guide',
  description:
    'Plan your dream wedding in Morocco. Discover stunning palace venues, traditional Moroccan wedding customs, legal requirements, top planners, and photography spots in Marrakech, Fes, and the Sahara.',
  keywords: [
    'morocco wedding',
    'marrakech wedding venue',
    'destination wedding morocco',
    'moroccan wedding traditions',
    'royal mansour wedding',
    'la mamounia wedding',
    'kasbah tamadot wedding',
    'morocco wedding planner',
    'morocco wedding legal requirements',
    'desert wedding morocco',
    'riad wedding fes',
    'morocco wedding cost',
    'moroccan henna night',
    'negafa morocco',
    'morocco honeymoon',
  ],
  openGraph: {
    title: 'Weddings & Celebrations in Morocco | Your Complete Guide',
    description:
      'Stunning venues, traditional customs, legal requirements, budget guides, and expert planners for your dream Moroccan wedding.',
    url: 'https://citytoursmorocco.com/weddings',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Stunning Moroccan palace venue set up for a wedding celebration',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wedding Venues and Services in Morocco',
  description:
    'Comprehensive guide to planning a wedding in Morocco, including top venues, traditional customs, legal requirements, and expert planners.',
  url: 'https://citytoursmorocco.com/weddings',
  numberOfItems: 15,
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'LocalBusiness', name: 'Royal Mansour Marrakech', address: { '@type': 'PostalAddress', streetAddress: 'Rue Abou Abbas El Sebti', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'LocalBusiness', name: 'La Mamounia', address: { '@type': 'PostalAddress', streetAddress: 'Avenue Bab Jdid', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 3, item: { '@type': 'LocalBusiness', name: 'Amanjena', address: { '@type': 'PostalAddress', streetAddress: 'Route de Ouarzazate, Km 12', addressLocality: 'Marrakech', addressCountry: 'MA' } } },
    { '@type': 'ListItem', position: 4, item: { '@type': 'LocalBusiness', name: 'Kasbah Tamadot', address: { '@type': 'PostalAddress', streetAddress: 'BP 67, Asni', addressLocality: 'High Atlas Mountains', addressCountry: 'MA' } } },
  ],
};

const weddingTraditions = [
  {
    day: 'Day 1-2',
    title: 'The Hammam Ceremony',
    description:
      'The bride visits the hammam (traditional bathhouse) with her closest female relatives and friends for a purification ritual. She is scrubbed with black soap, treated with ghassoul clay from the Atlas Mountains, and massaged with argan oil. This is a deeply symbolic cleansing before the new chapter of life begins. Traditional songs are sung and sweets are shared.',
  },
  {
    day: 'Day 3',
    title: 'The Henna Night (Laylat al-Henna)',
    description:
      'One of the most celebrated pre-wedding events. A professional henna artist (neqqasha) applies elaborate designs on the bride\'s hands and feet, using natural henna paste mixed with rose water, lemon, and essential oils. The designs can take 4-6 hours and symbolize fertility, prosperity, and protection. Female guests receive henna on their palms while music plays and tea is served.',
  },
  {
    day: 'Day 4',
    title: 'The Berber Ceremony (Amazigh Tradition)',
    description:
      'In many families, a traditional Berber blessing ceremony takes place before the main wedding. Elders recite prayers and blessings, the couple\'s hands are bound together with a white cloth, and dates, milk, and honey are shared as symbols of sweetness and abundance in the marriage. This intimate ceremony connects the couple to Morocco\'s ancient Amazigh heritage.',
  },
  {
    day: 'Day 5',
    title: 'The Negafa & Seven Dress Changes',
    description:
      'The Negafa is the traditional bridal dresser, a specialist who assists the bride through as many as seven outfit changes during the wedding celebration. Each dress represents a different region or tradition of Morocco: a white Fassi caftan, a green Marrakchi takchita, a gold Amazigh dress, and more. Each outfit change is accompanied by a grand entrance on the Amariya.',
  },
  {
    day: 'Day 6',
    title: 'The Amariya Throne Procession',
    description:
      'The bride and groom are carried through the celebration on the Amariya, an ornate wooden throne platform lifted by four men. This spectacular procession happens multiple times during the evening, typically with each outfit change. Traditional musicians play, guests ululate, and the couple is literally elevated above everyone as a symbol of their honored status.',
  },
  {
    day: 'Day 7',
    title: 'The Wedding Feast & Celebration',
    description:
      'The grand finale is a spectacular feast that can last until dawn. A multi-course banquet of Morocco\'s finest dishes: bastilla, lamb mechoui, tagines, couscous with seven vegetables, and an enormous display of Moroccan pastries. Live Andalusian or Gnaoua musicians perform, guests dance, and the celebration continues until the early hours.',
  },
];

const weddingVenues = [
  {
    name: 'Royal Mansour Marrakech',
    category: 'Palace',
    address: 'Rue Abou Abbas El Sebti, Marrakech 40000',
    description:
      'The ultimate luxury venue, owned by King Mohammed VI himself. Three ornate riads surround a vast courtyard with hand-carved stucco, zellige tilework, and fountains. The level of craftsmanship is unmatched anywhere in the world. Weddings here are legendary affairs of breathtaking opulence.',
    capacity: 'Up to 500 guests',
    priceRange: 'From 800,000 MAD',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600',
  },
  {
    name: 'La Mamounia',
    category: 'Palace',
    address: 'Avenue Bab Jdid, Marrakech 40040',
    description:
      'A legendary grand palace hotel since 1929, set in 17 acres of stunning gardens designed by the same landscape architect who designed Versailles\' gardens. Winston Churchill called it "the most beautiful place in the world." Weddings take place in the gardens, by the pool, or in the lavish ballroom.',
    capacity: 'Up to 600 guests',
    priceRange: 'From 600,000 MAD',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600',
  },
  {
    name: 'Amanjena',
    category: 'Palace',
    address: 'Route de Ouarzazate, Km 12, Marrakech',
    description:
      'The first Aman resort in Africa, inspired by the ancient Al-Badi palace. Rose-pink pavilions surround a serene central basin reflecting the Atlas Mountains. The minimalist Moorish architecture and lush olive groves create an atmosphere of refined tranquility. Perfect for intimate, ultra-luxury celebrations.',
    capacity: 'Up to 200 guests',
    priceRange: 'From 500,000 MAD',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=600',
  },
  {
    name: 'Selman Marrakech',
    category: 'Palace',
    address: 'Km 5 Route d\'Amizmiz, Marrakech',
    description:
      'A palatial estate famous for its purebred Arabian horses that roam the grounds. The 100-meter infinity pool with Atlas Mountain views, grand ballroom, and manicured gardens provide a cinematic backdrop. Combine your ceremony with a sunset horse parade for an unforgettable entrance.',
    capacity: 'Up to 400 guests',
    priceRange: 'From 450,000 MAD',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=600',
  },
  {
    name: 'Kasbah Tamadot',
    category: 'Kasbah',
    address: 'BP 67, Asni, High Atlas Mountains',
    description:
      'Sir Richard Branson\'s stunning retreat in the Atlas Mountains, perched above the Berber village of Asni. Panoramic mountain views, terraced gardens bursting with roses, and Berber-inspired luxury suites create a magical mountain wedding. The helicopter arrival over snow-capped peaks is extraordinary.',
    capacity: 'Up to 150 guests',
    priceRange: 'From 350,000 MAD',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=600',
  },
  {
    name: 'Kasbah Bab Ourika',
    category: 'Kasbah',
    address: 'Douar Larbaa Tighdouine, Ourika Valley',
    description:
      'A boutique kasbah perched on a hilltop overlooking the Ourika Valley with 360-degree views of the Atlas Mountains. Olive groves, herb gardens, and multiple terraces offer endless ceremony and reception settings. The mountain air and peaceful atmosphere are deeply romantic.',
    capacity: 'Up to 120 guests',
    priceRange: 'From 200,000 MAD',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600',
  },
  {
    name: 'Riad Fes',
    category: 'Riad',
    address: '5 Derb Ben Slimane, Zerbtana, Fes Medina',
    description:
      'The finest luxury riad in Fes, a masterpiece of Moroccan craftsmanship with three levels of galleries overlooking a marble courtyard. The rooftop terrace offers panoramic views of the Fes medina. Host your ceremony among centuries of artistry in the spiritual capital of Morocco.',
    capacity: 'Up to 100 guests',
    priceRange: 'From 250,000 MAD',
    image: 'https://images.unsplash.com/photo-1545041552-c7bf3e2daaee?q=80&w=600',
  },
  {
    name: 'El Fenn',
    category: 'Riad',
    address: '2 Derb Moulay Abdullah Ben Hezzian, Bab el Ksour, Marrakech',
    description:
      'A design-forward riad owned by Vanessa Branson, combining contemporary art with traditional Moroccan architecture. Three pools, multiple courtyards, and a spectacular rooftop with Koutoubia Mosque views. Ideal for creative, style-conscious couples who want a wedding with personality.',
    capacity: 'Up to 80 guests',
    priceRange: 'From 180,000 MAD',
    image: 'https://images.unsplash.com/photo-1548018560-c7196e91a1e2?q=80&w=600',
  },
  {
    name: 'Dar Ahlam',
    category: 'Riad',
    address: 'Douar Ahlam, Skoura, Ouarzazate Province',
    description:
      'A fairy-tale kasbah in the palm oasis of Skoura, operated as a "maison d\'hotes" with no fixed menus, schedules, or public spaces. Every experience is bespoke. Your wedding is designed entirely around your vision, from desert ceremonies to palmerie banquets. The most exclusive venue in Morocco.',
    capacity: 'Up to 60 guests',
    priceRange: 'From 400,000 MAD',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=600',
  },
  {
    name: 'Scarabeo Camp',
    category: 'Desert',
    address: 'Agafay Desert, Route de Fes, Km 40, Marrakech',
    description:
      'A stunning glamping site in the rocky Agafay Desert, just 40 minutes from Marrakech. White canvas tents dot the dramatic desert landscape with Atlas Mountain views. Exchange vows as the sun sets over the stone desert, then celebrate under a canopy of stars. Accessible yet wildly exotic.',
    capacity: 'Up to 100 guests',
    priceRange: 'From 150,000 MAD',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=600',
  },
  {
    name: 'Merzouga Luxury Camp',
    category: 'Desert',
    address: 'Erg Chebbi Dunes, Merzouga, Errachidia Province',
    description:
      'For the truly adventurous, a wedding atop the golden sand dunes of the Sahara. Luxury camps in Erg Chebbi offer private tented suites, gourmet dining under the stars, and a camel caravan arrival. The otherworldly setting of the dunes at sunset is the most dramatic wedding backdrop imaginable.',
    capacity: 'Up to 80 guests',
    priceRange: 'From 200,000 MAD',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600',
  },
  {
    name: 'Mazagan Beach Resort',
    category: 'Beach',
    address: 'Km 7, Route d\'Azemmour, El Jadida',
    description:
      'A five-star beachfront resort on the Atlantic coast with a vast beach, championship golf course, and multiple event spaces. The Moroccan-inspired architecture, ocean views, and professional event team make it ideal for larger celebrations. The beach ceremony at sunset is spectacular.',
    capacity: 'Up to 800 guests',
    priceRange: 'From 300,000 MAD',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=600',
  },
  {
    name: 'Sofitel Essaouira Mogador',
    category: 'Beach',
    address: 'Domaine Mogador, Boulevard Mohamed V, Essaouira',
    description:
      'A luxurious beachfront property where Atlantic waves meet Moorish architecture. The sprawling grounds include gardens, a thalassotherapy spa, golf course, and multiple terraces overlooking the ocean. The Essaouira wind adds drama to veils and fabrics. Ideal for bohemian beach weddings.',
    capacity: 'Up to 300 guests',
    priceRange: 'From 250,000 MAD',
    image: 'https://images.unsplash.com/photo-1560437091-4383266ac31b?q=80&w=600',
  },
  {
    name: 'Le Jardin Secret',
    category: 'Garden',
    address: '121 Rue Mouassine, Marrakech Medina',
    description:
      'A historic Islamic garden in the heart of the Marrakech medina, recently restored to its original splendor. Two distinct gardens (exotic and Islamic) with water channels, pavilions, and a tower with panoramic medina views. A hidden oasis for intimate garden ceremonies steeped in centuries of history.',
    capacity: 'Up to 120 guests',
    priceRange: 'From 200,000 MAD',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600',
  },
  {
    name: 'Beldi Country Club',
    category: 'Garden',
    address: 'Km 6, Route du Barrage, Marrakech',
    description:
      'A sprawling 17-acre garden estate on the outskirts of Marrakech with rose gardens, olive groves, multiple pools, and a traditional Berber tent. The organic farm-to-table kitchen produces exceptional wedding feasts. The lush, bohemian atmosphere attracts fashion-industry and creative couples from around the world.',
    capacity: 'Up to 250 guests',
    priceRange: 'From 200,000 MAD',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600',
  },
];

const planningTimeline = [
  { month: '12 months before', tasks: ['Set your budget and guest count', 'Research and visit venues', 'Hire a wedding planner (highly recommended for Morocco)', 'Begin legal document preparation'] },
  { month: '10 months before', tasks: ['Book your venue', 'Book photographer and videographer', 'Choose your wedding planner if not done', 'Start guest list and send save-the-dates'] },
  { month: '8 months before', tasks: ['Book caterer and florist (or confirm venue packages)', 'Choose entertainment and musicians', 'Begin dress shopping and Negafa consultation', 'Research and book guest accommodations'] },
  { month: '6 months before', tasks: ['Send formal invitations', 'Book hair, makeup, and henna artist', 'Arrange transport for guests (airport transfers, day-of transport)', 'Finalize menu and cake design'] },
  { month: '4 months before', tasks: ['Complete legal paperwork and apostille process', 'Final fittings for all outfits', 'Confirm all vendors and pay deposits', 'Plan rehearsal dinner and post-wedding brunch'] },
  { month: '2 months before', tasks: ['Final venue walkthrough', 'Confirm guest RSVPs and seating plan', 'Brief photographer on key shots and locations', 'Prepare welcome bags for guest hotel rooms'] },
  { month: '1 month before', tasks: ['Final vendor confirmations and timeline review', 'Complete all legal requirements at Moroccan consulate', 'Pack and ship any decor or personal items', 'Arrange travel insurance for all events'] },
  { month: 'Wedding week', tasks: ['Arrive 3-5 days early for final preparations', 'Venue decoration and setup', 'Rehearsal dinner', 'Hammam day and henna night', 'The big day: relax and enjoy'] },
];

const legalRequirements = [
  { title: 'Valid Passports', description: 'Both partners need valid passports with at least 6 months remaining. Bring original documents plus multiple certified copies.' },
  { title: 'Birth Certificates', description: 'Original birth certificates with apostille stamps. Must be translated into French or Arabic by a certified translator.' },
  { title: 'Certificate of No Impediment', description: 'A document from your home country confirming you are legally free to marry. In the US, this is typically an affidavit of single status from your embassy in Rabat.' },
  { title: 'Medical Certificate', description: 'Both partners need a medical certificate from a Moroccan doctor, including blood tests. This is typically arranged by your wedding planner and takes 1-2 days.' },
  { title: 'Adoul Ceremony', description: 'The civil marriage is conducted by two adouls (notaries) who register the marriage under Moroccan family law (Moudawana). This is the legally binding ceremony.' },
  { title: 'Apostille & Legalization', description: 'After the wedding, the Moroccan marriage certificate must be apostilled and legalized for recognition in your home country. Your planner or a legal service can handle this process.' },
];

const budgetTiers = [
  {
    tier: 'Intimate Celebration',
    guests: '20-40 guests',
    budget: '50,000 - 100,000 MAD',
    usd: '~$5,000 - $10,000',
    description: 'A beautiful, meaningful celebration in a charming riad or boutique venue with close family and friends.',
    includes: [
      'Boutique riad venue',
      'Traditional Moroccan catering',
      'Simple floral arrangements',
      'Local photographer (half day)',
      'Basic sound system and playlist',
      'Henna artist for bride',
    ],
  },
  {
    tier: 'Mid-Range Wedding',
    guests: '50-120 guests',
    budget: '150,000 - 300,000 MAD',
    usd: '~$15,000 - $30,000',
    description: 'A stunning celebration with professional planning, beautiful decor, live entertainment, and a premium venue.',
    includes: [
      'Upscale riad or boutique hotel',
      'Professional caterer with menu tasting',
      'Floral design and decor styling',
      'Professional photographer + videographer',
      'Live traditional musicians',
      'Negafa and 3-4 outfit changes',
      'Hair, makeup, and henna',
      'Guest transport coordination',
    ],
  },
  {
    tier: 'Luxury Celebration',
    guests: '100-500 guests',
    budget: '500,000+ MAD',
    usd: '~$50,000+',
    description: 'An extraordinary, no-expense-spared celebration at a world-class venue with every detail perfectly curated.',
    includes: [
      'Palace hotel or exclusive estate',
      'Celebrity chef or gourmet catering',
      'Luxury floral design by top florist',
      'International photographer + videographer',
      'Live band, DJ, and traditional ensemble',
      'Full Negafa with 7 outfit changes',
      'Full spa day for bridal party',
      'Luxury guest welcome packages',
      'Multi-day celebration events',
      'Bespoke decor and lighting design',
    ],
  },
];

const weddingPlanners = [
  {
    name: 'MAWAHIB Events',
    specialty: 'Luxury destination weddings',
    description:
      'Morocco\'s premier luxury wedding planning firm, known for producing some of the most spectacular celebrations in the country. Their team handles everything from legal paperwork to floral design with impeccable attention to detail. Based in Marrakech with a network across Morocco.',
    languages: 'English, French, Arabic',
  },
  {
    name: 'My Marrakech Wedding',
    specialty: 'International destination weddings',
    description:
      'Specializes in helping international couples navigate Moroccan wedding logistics. Excellent with legal requirements, guest accommodation coordination, and cultural bridging. Particularly strong with UK, US, and European couples.',
    languages: 'English, French, Arabic',
  },
  {
    name: 'Boutique Souk Weddings',
    specialty: 'Bohemian and creative weddings',
    description:
      'For couples who want something beyond the traditional luxury formula. Known for creative, design-forward celebrations incorporating Moroccan artisan craftsmanship, sustainable practices, and unexpected venues. Popular with fashion-industry and creative couples.',
    languages: 'English, French',
  },
  {
    name: 'Marrakech Event Design',
    specialty: 'Large-scale celebrations',
    description:
      'Expert at producing large weddings of 200-500+ guests with complex logistics. Their production capabilities include custom stage design, lighting, and multimedia. Frequently works with Moroccan and Gulf Arab families on multi-day celebrations.',
    languages: 'French, Arabic, English',
  },
  {
    name: 'MoroccanWedding.com',
    specialty: 'Traditional Moroccan weddings',
    description:
      'Focused on authentic traditional Moroccan weddings for both Moroccan and international couples. Deep knowledge of regional traditions, the best Negafas, and traditional musicians. Excellent for couples who want a culturally authentic celebration.',
    languages: 'Arabic, French, English',
  },
  {
    name: 'Atlas Weddings',
    specialty: 'Mountain and outdoor weddings',
    description:
      'Specializes in weddings outside Marrakech, particularly in the Atlas Mountains, Ourika Valley, and desert locations. Expert at managing the logistics of remote venues, including generators, portable kitchens, and guest transport on mountain roads.',
    languages: 'English, French, Berber',
  },
];

const photographySpots = [
  { name: 'Bahia Palace', location: 'Marrakech', description: 'Stunning zellige tilework, carved stucco, and painted cedar ceilings. The courtyard\'s geometric perfection is unmatched. Best in morning light.' },
  { name: 'Le Jardin Majorelle', location: 'Marrakech', description: 'The iconic cobalt blue walls and lush gardens create vivid, colorful backdrops. The contrast of blue against green is extraordinary on camera.' },
  { name: 'Ait Benhaddou', location: 'Ouarzazate', description: 'The UNESCO kasbah used in Gladiator and Game of Thrones. Dramatic earthen towers against clear skies. Golden hour turns the walls into amber.' },
  { name: 'Erg Chebbi Dunes', location: 'Merzouga', description: 'Endless golden sand dunes stretching to the horizon. Sunrise and sunset create dramatic shadows and warm tones. The most otherworldly backdrop in Morocco.' },
  { name: 'Fes Medina Rooftops', location: 'Fes', description: 'Panoramic views over the world\'s largest medieval city. The sea of whitewashed buildings with green-tiled minarets is an incredible urban landscape.' },
  { name: 'Chefchaouen Blue Streets', location: 'Chefchaouen', description: 'The famous blue-washed walls, colorful pots of flowers, and winding staircases create dreamy, romantic photographs in every direction.' },
  { name: 'Hassan II Mosque', location: 'Casablanca', description: 'Africa\'s largest mosque with a minaret visible from 30 miles. The oceanfront setting and intricate architecture are breathtaking at sunset.' },
  { name: 'Agafay Desert', location: 'Marrakech', description: 'A rocky lunar landscape just 40 minutes from Marrakech with Atlas Mountain views. Dramatic stone formations and golden light without the journey to the Sahara.' },
  { name: 'Essaouira Ramparts', location: 'Essaouira', description: 'Atlantic Ocean waves crashing against 18th-century Portuguese fortifications. Dramatic, windswept, and incredibly romantic. Best at golden hour.' },
  { name: 'Menara Gardens', location: 'Marrakech', description: 'The iconic reflecting pool with the Atlas Mountains mirrored in the water. A 12th-century garden that provides a timeless, serene backdrop for couple portraits.' },
];

const honeymoonAddons = [
  {
    icon: Palmtree,
    title: 'Sahara Desert Extension',
    duration: '2-3 nights',
    description:
      'Ride camels into the Erg Chebbi dunes, sleep in a luxury desert camp under a blanket of stars, and watch the sunrise paint the sand in shades of gold and pink. The ultimate post-wedding adventure.',
  },
  {
    icon: GlassWater,
    title: 'Atlantic Coast Escape',
    duration: '3-4 nights',
    description:
      'Unwind in bohemian Essaouira or the luxury beach resorts of El Jadida and Oualidia. Fresh seafood, ocean breezes, and laid-back medina wandering. The perfect decompression after wedding festivities.',
  },
  {
    icon: Mountain,
    title: 'Atlas Mountains Retreat',
    duration: '2-3 nights',
    description:
      'Retreat to a mountain kasbah in the Ourika Valley or Imlil. Scenic hikes through Berber villages, picnics by waterfalls, and evenings by the fire with Atlas views. Romance in the crisp mountain air.',
  },
];

const seasonalGuide = [
  {
    season: 'March - May (Spring)',
    icon: Sun,
    verdict: 'Ideal Season',
    color: 'bg-emerald-500',
    temperature: '20-28 C / 68-82 F',
    description: 'The most popular and arguably best season for a Moroccan wedding. Gardens are in full bloom with roses, jasmine, and bougainvillea providing natural decoration. Temperatures are warm but not oppressive. Long daylight hours give you spectacular golden-hour ceremonies. Outdoor events are comfortable day and night.',
    considerations: ['Peak wedding season -- book 12+ months in advance', 'Ramadan may overlap (check dates yearly)', 'Occasional spring rain, especially in April'],
  },
  {
    season: 'September - November (Autumn)',
    icon: Sun,
    verdict: 'Excellent',
    color: 'bg-emerald-500',
    temperature: '22-32 C / 72-90 F',
    description: 'The second-best season. September can still be warm, but October and November offer perfect conditions: warm days, cool evenings, and minimal rain. The date and fig harvests add seasonal flavor to catering. Hotels and venues offer slightly better rates than spring as it is considered shoulder season.',
    considerations: ['Early September can still be hot in Marrakech', 'Better venue availability than spring', 'Beautiful autumnal light for photography'],
  },
  {
    season: 'June - August (Summer)',
    icon: ThermometerSun,
    verdict: 'Hot but possible',
    color: 'bg-yellow-500',
    temperature: '30-45 C / 86-113 F',
    description: 'Marrakech and inland cities regularly exceed 40 C. Outdoor daytime events are uncomfortable. However, evening celebrations can be magical when temperatures drop. Beach venues in Essaouira and Agadir are significantly cooler. Desert weddings are not recommended in summer.',
    considerations: ['Limit outdoor events to after 6 PM', 'Coastal venues (Essaouira, Agadir) are 10-15 C cooler', 'Lower prices and better availability at many venues', 'Air conditioning is essential at indoor venues'],
  },
  {
    season: 'December - February (Winter)',
    icon: Mountain,
    verdict: 'Beautiful with planning',
    color: 'bg-blue-500',
    temperature: '12-20 C / 54-68 F',
    description: 'Morocco\'s winter is mild compared to Europe but evenings can be cool. The Atlas Mountains may have snow, providing dramatic backdrops. Marrakech is pleasant for daytime outdoor events. Rain is possible, so a covered backup venue is essential. Heating in venues should be confirmed.',
    considerations: ['Shorter daylight hours limit golden-hour timing', 'Rain contingency planning is essential', 'Lowest prices of the year at most venues', 'Snow-capped Atlas Mountains make stunning winter photography'],
  },
];

const guestInfoGuide = [
  {
    title: 'Getting There',
    icon: Plane,
    details: [
      'Direct flights from London to Marrakech take just 3.5 hours. Paris is 3 hours. New York is approximately 7 hours with multiple direct options.',
      'Budget airlines (Ryanair, EasyJet, Transavia) offer affordable direct flights to Marrakech and Agadir from many European cities.',
      'Recommend guests book 3-6 months ahead for best prices. Group booking codes may be available through certain airlines.',
      'Airport transfers should be pre-arranged for all guests. Include clear instructions in your wedding information pack.',
    ],
  },
  {
    title: 'What Guests Should Know',
    icon: BookOpen,
    details: [
      'Morocco is safe, welcoming, and modern. First-time visitors are often surprised by how friendly and hospitable the country is.',
      'No special vaccinations are required. Tap water should be avoided in favor of bottled water.',
      'Moroccan Dirham (MAD) is the local currency. ATMs are widely available. Credit cards accepted at most hotels and upscale restaurants.',
      'Dress code: Morocco is relatively liberal in tourist areas, but modest clothing (covering shoulders and knees) is respectful in public spaces and medinas.',
    ],
  },
  {
    title: 'Guest Accommodation Tips',
    icon: Building,
    details: [
      'Block-book rooms at your wedding venue or nearby hotels at a group rate. Most venues offer 10-20% off for wedding blocks.',
      'Mix accommodation options: luxury suites for close family, mid-range hotels for friends, and budget riads for cost-conscious guests.',
      'Include a list of 3-5 accommodation options at different price points in your wedding information pack.',
      'Riads in the medina offer the most authentic experience but can be hard to find. Provide clear directions or arrange guided transfers.',
    ],
  },
  {
    title: 'Welcome Pack Ideas',
    icon: Sparkles,
    details: [
      'Argan oil mini bottles and Moroccan rose water as welcome gifts',
      'Local snacks: dates, Moroccan cookies (kaab el ghzal), and mint tea bags',
      'A printed guide with emergency numbers, WiFi passwords, restaurant recommendations, and a basic Arabic/French phrase card',
      'A small map of the local area with key points marked',
      'Sunscreen and a reusable water bottle for the Moroccan climate',
    ],
  },
];

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-weddings.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Weddings</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4 text-pink-300" />
            Celebrations in Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Weddings &amp; Celebrations in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From opulent palace ceremonies to intimate riad celebrations and dramatic desert
            vows &mdash; Morocco is one of the world&apos;s most enchanting wedding destinations.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Why Get Married in Morocco */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Get Married in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco offers a combination that no other destination can match: the exotic
                grandeur of palatial venues with intricate Islamic architecture, the dramatic
                landscapes of the Sahara Desert and Atlas Mountains, world-class cuisine, and
                all at a fraction of the cost of comparable celebrations in Europe or North America.
              </p>
              <p>
                A Moroccan wedding is a feast for all the senses. Imagine exchanging vows in a
                centuries-old palace courtyard where every surface is adorned with hand-carved
                stucco and zellige tilework, dining under a canopy of stars in a rose-scented
                garden, and dancing to the hypnotic rhythms of Gnaoua musicians as lanterns
                flicker in the warm evening air.
              </p>
              <p>
                Morocco&apos;s legendary hospitality ensures your guests are treated like royalty.
                From airport pickup to farewell brunch, the warmth and generosity of Moroccan
                service elevates every moment. Add in easy accessibility from Europe (just a
                3-hour flight from London or Paris) and increasingly excellent direct connections
                from North America, and Morocco becomes the ideal destination wedding location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Moroccan Wedding */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Traditional Moroccan Wedding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A Moroccan wedding is not a single day but a week-long celebration. Each day has
            its own rituals, ceremonies, and meaning. Even modern celebrations incorporate these
            beautiful traditions.
          </p>
          <div className="space-y-4">
            {weddingTraditions.map((tradition) => (
              <div key={tradition.day} className="card-moroccan p-6 flex gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-xs text-center leading-tight">{tradition.day}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{tradition.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{tradition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top 15 Wedding Venues */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top 15 Wedding Venues in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From royal palaces to Sahara camps, these are Morocco&apos;s most spectacular
            wedding venues, each offering a completely different celebration experience.
          </p>

          {/* Featured venues - first 4 palaces */}
          <div className="space-y-8 mb-10">
            {weddingVenues.slice(0, 4).map((venue, index) => (
              <div
                key={venue.name}
                className={`card-moroccan overflow-hidden flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-2/5 relative h-64 md:h-auto">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--color-primary)] text-sm font-semibold">
                      {venue.category}
                    </span>
                  </div>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {venue.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-[var(--text-muted)] mb-3">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {venue.address}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {venue.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-semibold">
                      <Users className="w-3.5 h-3.5" /> {venue.capacity}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[var(--color-accent-dark)] font-semibold">
                      <DollarSign className="w-3.5 h-3.5" /> {venue.priceRange}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining venues in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingVenues.slice(4).map((venue) => (
              <div key={venue.name} className="card-moroccan overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[var(--color-primary)] text-sm font-semibold">
                      {venue.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{venue.name}</h3>
                  <p className="text-xs text-[var(--text-muted)] mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" />{venue.address}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3 line-clamp-3">
                    {venue.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--color-primary)] font-medium">
                      <Users className="w-3.5 h-3.5 inline mr-1" />{venue.capacity}
                    </span>
                    <span className="text-[var(--color-accent-dark)] font-medium">
                      {venue.priceRange}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            12-Month Planning Timeline
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A month-by-month countdown to help you plan every detail of your Moroccan wedding.
          </p>
          <div className="space-y-4">
            {planningTimeline.map((phase) => (
              <div key={phase.month} className="card-moroccan p-6 flex gap-5">
                <div className="flex-shrink-0 w-20">
                  <span className="inline-flex px-3 py-1.5 rounded-lg gradient-moroccan text-white text-xs font-bold text-center">
                    {phase.month}
                  </span>
                </div>
                <ul className="space-y-1.5 flex-1">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Legal Requirements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting legally married in Morocco requires specific documentation and procedures.
            We strongly recommend working with a wedding planner or legal service to navigate
            this process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalRequirements.map((req) => (
              <div key={req.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <FileText className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-2">{req.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wedding Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers incredible value at every budget level. These estimates cover venue,
            catering, decor, photography, entertainment, and coordination.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetTiers.map((tier) => (
              <div key={tier.tier} className="card-moroccan p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{tier.tier}</h3>
                <div className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-primary)] mb-1">
                  {tier.budget}
                </div>
                <div className="text-sm text-[var(--text-muted)] mb-1">{tier.usd}</div>
                <div className="text-xs text-[var(--text-muted)] mb-3">{tier.guests}</div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                <ul className="space-y-2 mt-auto">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Best Season for Your Wedding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s climate varies dramatically by season. Choosing the right time of year
            can make the difference between a comfortable celebration and a sweltering one.
          </p>

          <div className="space-y-6">
            {seasonalGuide.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <season.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{season.season}</h3>
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${season.color}`}>
                    {season.verdict}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] ml-auto">
                    <ThermometerSun className="w-3 h-3 inline mr-0.5" />{season.temperature}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {season.description}
                </p>
                <div className="space-y-1.5">
                  {season.considerations.map((c) => (
                    <div key={c} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <AlertTriangle className="w-3 h-3 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Information Guide */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Send className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            What to Tell Your Guests
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Many of your guests may never have visited Morocco. Include this information in your
            wedding communications to set expectations and build excitement.
          </p>

          <div className="space-y-6">
            {guestInfoGuide.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <h3 className="font-bold text-[var(--text-primary)] flex items-center gap-2 mb-4">
                  <section.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Planners */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Wedding Planners in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A destination wedding in Morocco is infinitely easier with a professional planner
            who knows the venues, vendors, and legal requirements inside out.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddingPlanners.map((planner) => (
              <div key={planner.name} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <Gem className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{planner.name}</h3>
                <div className="text-xs text-[var(--color-accent-dark)] font-medium mb-3">
                  {planner.specialty}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {planner.description}
                </p>
                <div className="text-xs text-[var(--text-muted)]">
                  <BookOpen className="w-3 h-3 inline mr-1" />
                  Languages: {planner.languages}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Spots */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            10 Stunning Photography Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers some of the most photogenic wedding backdrops on Earth. Plan a
            pre-wedding or day-after shoot at one of these iconic locations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photographySpots.map((spot, index) => (
              <div key={spot.name} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--color-primary)]">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{spot.name}</h3>
                    <span className="text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 inline mr-0.5" />{spot.location}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {spot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honeymoon Add-ons */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Honeymoon Add-ons
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Already in Morocco for your wedding? Extend your trip with one of these romantic
            post-wedding experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {honeymoonAddons.map((addon) => (
              <div key={addon.title} className="card-moroccan p-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-[var(--color-primary)]/10 mb-4">
                  <addon.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-[var(--text-primary)] mb-1">{addon.title}</h3>
                <div className="text-xs text-[var(--color-accent-dark)] font-medium mb-3">
                  {addon.duration}
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <Heart className="w-10 h-10 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Start Planning Your Moroccan Wedding
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Explore our destination guides, accommodation listings, and trip planning tools
            to begin your Moroccan wedding journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/honeymoon"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Heart className="w-4 h-4" /> Honeymoon Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
