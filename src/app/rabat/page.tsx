import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Star,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Car,
  Camera,
  Compass,
  Heart,
  Eye,
  Sparkles,
  Mountain,
  Info,
  Lightbulb,
  Users,
  Globe,
  BookOpen,
  Leaf,
  Shield,
  Sun,
  Moon,
  Sunrise,
  Sunset,
  Calendar,
  Utensils,
  Bed,
  ShoppingBag,
  Landmark,
  Building,
  TreePine,
  Navigation,
  Music,
  Palette,
  Coffee,
  Footprints,
  Ticket,
  HandCoins,
  ThermometerSun,
  CloudSun,
  CircleDot,
  Map,
  Phone,
  MessageSquare,
  Train,
  Waves,
  Crown,
  GraduationCap,
  Theater,
  Bus,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Rabat Travel Guide 2025-2026 | Morocco\'s Imperial Capital | Top Attractions, Culture & More',
  description:
    'The ultimate Rabat travel guide. Explore Hassan Tower, Kasbah of the Udayas, Chellah necropolis, Mohammed V Mausoleum, and Morocco\'s political capital. Best restaurants, neighborhoods, the tramway, Al Boraq TGV, day trips, budget tips, and a complete itinerary for Morocco\'s dignified capital city.',
  keywords: [
    'Rabat travel guide',
    'Rabat Morocco',
    'Hassan Tower',
    'Kasbah of the Udayas',
    'Chellah Rabat',
    'Mohammed V Mausoleum',
    'Rabat Royal Palace',
    'Rabat medina',
    'Rabat restaurants',
    'Rabat day trips',
    'Al Boraq TGV Morocco',
    'Rabat tramway',
    'Bouregreg Marina',
    'Mohammed VI Museum Modern Art',
    'Rabat beaches',
    'Rabat neighborhoods',
    'best time to visit Rabat',
    'Rabat itinerary',
    'Rabat food guide',
    'Rabat UNESCO World Heritage',
    'Sale Morocco',
    'Andalusian Gardens Rabat',
    'Rabat budget guide',
    'Morocco capital city',
    'Rabat cultural capital',
  ],
  openGraph: {
    title: 'Rabat Travel Guide 2025-2026 | Morocco\'s Imperial Capital',
    description:
      'Everything you need for Rabat: Hassan Tower, Kasbah of the Udayas, Chellah, Royal Palace, museums, food, neighborhoods, the tramway, and a perfect itinerary through Morocco\'s elegant capital.',
    url: 'https://moroccoguide.com/rabat',
    type: 'article',
    images: [
      {
        url: '/images/hero-rabat.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Hassan Tower and Mohammed V Mausoleum in Rabat at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabat Travel Guide 2025-2026 | Morocco\'s Imperial Capital',
    description:
      'Complete guide to Rabat: Hassan Tower, Kasbah of the Udayas, Chellah, Royal Palace, museums, food, culture, tramway, Al Boraq TGV, and a full itinerary.',
    images: ['/images/hero-rabat.webp'],
  },
  alternates: {
    canonical: 'https://moroccoguide.com/rabat',
  },
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  { label: 'Population', value: '580,000', icon: Users },
  { label: 'Founded', value: '12th Century', icon: BookOpen },
  { label: 'Elevation', value: '75 meters', icon: Mountain },
  { label: 'Airport', value: 'RBA (Sale)', icon: Globe },
  { label: 'Language', value: 'Arabic, French', icon: MessageSquare },
  { label: 'Currency', value: 'Dirham (MAD)', icon: DollarSign },
  { label: 'Time Zone', value: 'GMT+1', icon: Clock },
  { label: 'Best Months', value: 'Mar-May, Sep-Nov', icon: Calendar },
];

/* =====================================================================
   DATA: ESSENTIAL TIPS
   ===================================================================== */

const essentialTips = [
  {
    icon: Info,
    title: 'Dress Code',
    description: 'Rabat is cosmopolitan and relatively liberal, but modest dress is appreciated in the medina and near mosques. Shoulders and knees covered is the safest approach. Swimwear is fine at beaches and hotel pools only.',
  },
  {
    icon: HandCoins,
    title: 'Tipping Culture',
    description: 'Tipping is expected and appreciated. Restaurant waiters: 10-15%. Hotel staff: 20-50 MAD/day. Tour guides: 100-200 MAD. Taxi drivers: round up to the nearest 5 MAD. Small tips for helpfulness are part of daily life.',
  },
  {
    icon: Globe,
    title: 'Connectivity',
    description: 'Buy a local SIM card at the airport from Maroc Telecom or Orange for about 30 MAD with data. Wi-Fi is widely available in hotels, cafes, and restaurants. Rabat has excellent 4G/5G coverage citywide.',
  },
  {
    icon: Crown,
    title: 'Royal Protocol',
    description: 'Rabat is the seat of the Moroccan monarchy. The Royal Palace grounds are off-limits. Photography of the palace exterior is fine from a respectful distance. Royal motorcades have right of way on all roads.',
  },
  {
    icon: Coffee,
    title: 'Cafe Culture',
    description: 'Rabat has a thriving cafe culture blending Moroccan tradition with French influence. Mint tea and espresso are equally popular. Cafe terraces along Avenue Mohammed V and in the Kasbah are perfect for people-watching.',
  },
  {
    icon: Calendar,
    title: 'Ramadan Awareness',
    description: 'During Ramadan, many restaurants close during daylight hours. Eating, drinking, or smoking in public during fasting hours is considered disrespectful. Evenings become festive with special foods and late-night activity.',
  },
];

/* =====================================================================
   DATA: TOP ATTRACTIONS
   ===================================================================== */

const attractions = [
  {
    name: 'Hassan Tower & Mohammed V Mausoleum',
    description:
      'The iconic symbol of Rabat and one of Morocco\'s most important landmarks. The Hassan Tower is the unfinished minaret of a mosque begun in 1199 by the Almohad Sultan Yacoub al-Mansour. Intended to be the tallest minaret in the world, construction halted at 44 meters when the sultan died in 1199. The 348 remaining columns of the never-completed prayer hall stand like silent sentinels across the vast esplanade. Adjacent stands the Mohammed V Mausoleum, a masterpiece of modern Alaouite architecture completed in 1971. Clad in white Italian marble with a glazed green-tiled roof, the mausoleum houses the tombs of King Mohammed V and his sons Hassan II and Prince Abdallah. Royal guards in red-and-white regalia stand at each entrance.',
    image: '/images/hero-rabat.webp',
    type: 'UNESCO Heritage',
    rating: 4.9,
    hours: 'Mausoleum: 9:00 AM - 6:00 PM daily; Esplanade: always open',
    price: 'Free',
    tip: 'Visit at golden hour when the sandstone tower glows amber and the white marble mausoleum catches the last light. Non-Muslims may enter the mausoleum and look down at the tombs from the gallery. Dress respectfully.',
  },
  {
    name: 'Kasbah of the Udayas',
    description:
      'A fortified 12th-century kasbah perched on a cliff at the mouth of the Bouregreg River, the Udayas is Rabat\'s most photogenic neighborhood. Pass through the monumental Almohad gate, Bab Oudaia, and enter a world of narrow, winding streets painted in blue and white that evoke the Greek islands or Chefchaouen. The kasbah was originally built as a ribat (fortified monastery) and later became a pirate stronghold. Today its peaceful lanes are lined with bougainvillea-draped houses, artisan workshops, and small cafes. At the kasbah\'s edge, a panoramic terrace overlooks the Atlantic Ocean, the Bouregreg River, and the city of Sale across the water.',
    image: '/images/hero-rabat.webp',
    type: 'Historic Kasbah',
    rating: 4.8,
    hours: 'Open 24 hours (best during daylight)',
    price: 'Free',
    tip: 'Come early morning for the best light on the blue-and-white streets. The cafe at the base of the kasbah overlooking the ocean is perfect for mint tea. Continue into the Andalusian Gardens directly below the kasbah walls.',
  },
  {
    name: 'Chellah Necropolis',
    description:
      'One of Morocco\'s most atmospheric archaeological sites, Chellah is a walled medieval necropolis built atop the ruins of the ancient Roman city of Sala Colonia. Enter through a magnificent Merenid gateway decorated with carved stone and find yourself in a lush garden where Roman columns, mosaic floors, and the remains of a forum mix with 14th-century Islamic tombs, a ruined mosque, and a minaret. The site is famous for its resident white storks, who nest atop the ancient minaret and ruined walls from spring through summer. Eels swim in the sacred pool near the mosque, where local women come to make wishes and offerings.',
    image: '/images/hero-rabat.webp',
    type: 'Roman Ruins & Necropolis',
    rating: 4.7,
    hours: '8:30 AM - 6:30 PM (summer) / 8:30 AM - 5:30 PM (winter)',
    price: '70 MAD',
    tip: 'Visit in spring when the storks are nesting and the gardens are in full bloom. Bring binoculars for birdwatching. The late afternoon light filtering through the ruins is magical for photography. Allow 1.5-2 hours.',
  },
  {
    name: 'Mohammed VI Museum of Modern and Contemporary Art',
    description:
      'Morocco\'s first major museum dedicated to modern and contemporary art, opened in 2014 in a striking purpose-built building near the Rabat Ville train station. The museum showcases Moroccan art from the 20th and 21st centuries across spacious, beautifully lit galleries. The permanent collection features works by Hassan El Glaoui, Ahmed Cherkaoui, Farid Belkahia, and other giants of Moroccan modernism. Rotating exhibitions bring international artists into dialogue with Moroccan themes. The building itself, designed by the late Karim Chakor, blends traditional Moroccan geometric forms with contemporary architecture.',
    image: '/images/hero-rabat.webp',
    type: 'Art Museum',
    rating: 4.6,
    hours: '10:00 AM - 6:00 PM (closed Tuesdays)',
    price: '40 MAD',
    tip: 'Allow 2 hours minimum. The temporary exhibitions are often world-class and change every few months. The museum shop has excellent art books and prints. Photography is permitted in most galleries without flash.',
  },
  {
    name: 'Rabat Royal Palace (Dar al-Makhzen)',
    description:
      'The primary residence of the King of Morocco and the seat of government, Dar al-Makhzen is an enormous palace complex spread across several hectares in the heart of Rabat. While the interior is strictly off-limits, the exterior is impressive: a vast mechouar (parade ground) flanked by elegant ceremonial buildings, the ornate main gate with its brass doors and zellige tilework guarded by mounted royal cavalry, and the surrounding gardens. The Friday prayer procession, when the King rides on horseback from the palace to the nearby mosque, is a spectacular ceremony that visitors can witness from the edges of the mechouar.',
    image: '/images/hero-rabat.webp',
    type: 'Royal Palace',
    rating: 4.4,
    hours: 'Exterior only; viewable 24 hours',
    price: 'Free (exterior)',
    tip: 'Do not attempt to enter or take close-up photos of guards. The best view is from the Place du Mechouar. If you are lucky enough to witness a royal ceremony, keep a respectful distance. The surrounding Touarga neighborhood is pleasant for walking.',
  },
  {
    name: 'Rabat Medina',
    description:
      'Rabat\'s medina is one of the most pleasant in Morocco: compact, manageable, and refreshingly free of the aggressive touts found in Marrakech or Fes. The medina was built in the 17th century by Andalusian refugees expelled from Spain and retains a distinctly Andalusian character with its whitewashed houses, iron balconies, and orderly grid-like layout. Rue des Consuls, the main commercial street, was historically where foreign consuls maintained their residences and is now lined with shops selling carpets, leather goods, jewelry, and traditional crafts at prices significantly lower than Marrakech or Fes.',
    image: '/images/hero-rabat.webp',
    type: 'Historic Quarter',
    rating: 4.5,
    hours: 'Shops: 9:00 AM - 7:00 PM (closed Friday midday)',
    price: 'Free',
    tip: 'Rue des Consuls is the best street for shopping. Prices are already reasonable but gentle haggling of 10-20% is expected. The medina is small enough to explore fully in 2-3 hours. Do not miss the carpet auction near Souk es-Sebat on Thursday mornings.',
  },
  {
    name: 'Andalusian Gardens',
    description:
      'Tucked below the walls of the Kasbah of the Udayas, the Andalusian Gardens are a serene oasis of manicured hedges, citrus trees, bougainvillea, date palms, and flowering plants arranged in the formal geometric style of traditional Andalusian-Moorish gardens. Created during the French Protectorate era by landscape architect Jean Claude Nicolas Forestier, the gardens offer shaded walkways, ornamental fountains, and benches where locals come to read and relax. The garden\'s lower terrace provides views across the Bouregreg River to Sale. It is one of the most peaceful spots in the entire city.',
    image: '/images/hero-rabat.webp',
    type: 'Historic Garden',
    rating: 4.5,
    hours: '8:00 AM - 6:30 PM daily',
    price: 'Free',
    tip: 'Combine with a visit to the Kasbah of the Udayas directly above. The gardens are at their most beautiful in spring when everything is in bloom. Bring a book and enjoy the tranquility.',
  },
  {
    name: 'Bouregreg Marina & Waterfront',
    description:
      'The Bouregreg Valley development project has transformed the riverfront between Rabat and Sale into a modern marina and waterfront promenade. The marina accommodates luxury yachts and pleasure boats, while the surrounding esplanade features restaurants, cafes, ice cream shops, and evening entertainment. A river boat service connects Rabat to Sale for just 5 MAD, offering beautiful views of the Kasbah of the Udayas from the water. The area comes alive in the evenings when Rabatis stroll along the waterfront, families picnic on the grass, and the lights of both cities reflect on the river.',
    image: '/images/hero-rabat.webp',
    type: 'Waterfront',
    rating: 4.3,
    hours: 'Open 24 hours; restaurants 11:00 AM - 11:00 PM',
    price: 'Free (boat to Sale: 5 MAD)',
    tip: 'Take the small boat across to Sale for an entirely different atmosphere. The waterfront is best enjoyed in the evening when the temperature drops and the promenade fills with local life. Several good seafood restaurants line the marina.',
  },
  {
    name: 'Rabat Zoo (Jardin Zoologique)',
    description:
      'One of the best zoos in Africa, Rabat\'s Jardin Zoologique was completely rebuilt in 2012 on a 50-hectare site in the Temara suburb. The zoo is organized by African ecosystems: Atlas Mountains, Sahara Desert, tropical forests, wetlands, and savannah. Animals include Atlas lions (the zoo is part of a breeding program for this critically endangered subspecies), elephants, giraffes, white rhinos, hippos, and hundreds of bird species. The grounds are beautifully landscaped with native plants, walking trails, picnic areas, and educational exhibits. It is genuinely world-class and a highlight for families.',
    image: '/images/hero-rabat.webp',
    type: 'Zoo & Wildlife',
    rating: 4.5,
    hours: '10:00 AM - 6:00 PM (closed Mondays in winter)',
    price: '60 MAD adults / 30 MAD children',
    tip: 'Allow 3-4 hours for a full visit. The Atlas lion enclosure is the star attraction. Visit on weekdays to avoid crowds. The on-site restaurant is decent. Bring a hat and sunscreen as shade is limited in some areas.',
  },
  {
    name: 'Rabat Beach (Plage de Rabat)',
    description:
      'Stretching south of the Kasbah of the Udayas along the Atlantic coast, Rabat\'s city beach is a long crescent of golden sand popular with surfers, joggers, and sunbathers. The beach is easily accessible from the city center and has basic facilities including sun loungers, umbrellas for rent, and beachfront cafes. The waves can be powerful and the currents strong, so swimming is safest in the areas monitored by lifeguards during summer. The adjacent corniche road is a popular evening promenade with views of the ocean and the lighthouse.',
    image: '/images/hero-rabat.webp',
    type: 'Beach',
    rating: 4.2,
    hours: 'Open 24 hours; lifeguards June-September',
    price: 'Free (lounger rental: 30-50 MAD)',
    tip: 'The beach is best for surfing and walking rather than calm swimming. Experienced surfers head to the break near the kasbah wall. For calmer waters, drive 20 minutes south to Temara or Skhirat beaches. Sunset from the beach is spectacular.',
  },
  {
    name: 'National Archaeological Museum',
    description:
      'Morocco\'s most important archaeological museum, housing artifacts spanning from prehistory through the Islamic period. The collection is particularly strong on Roman-era Morocco, with stunning bronze statues recovered from Volubilis including the famous Bust of Juba II and the Dog of Volubilis. Other highlights include Neolithic tools from across the Maghreb, Phoenician jewelry, and Islamic-era ceramics and manuscripts. The museum is modest in size but the quality of individual pieces is exceptional. A major renovation has updated the galleries with modern display cases and bilingual signage.',
    image: '/images/hero-rabat.webp',
    type: 'Museum',
    rating: 4.3,
    hours: '9:00 AM - 4:00 PM (closed Tuesdays)',
    price: '20 MAD',
    tip: 'Do not miss the Roman bronzes room, which alone justifies the visit. The Bust of Juba II is one of the finest ancient bronzes in the world. Allow 1-1.5 hours. Combine with a visit to the nearby Mohammed VI Museum of Modern Art.',
  },
  {
    name: 'Lalla Soukaina Mosque & Cathedral Saint-Pierre',
    description:
      'Two places of worship that together illustrate Rabat\'s religious tolerance. The modern Lalla Soukaina Mosque, with its elegant contemporary architecture and landscaped grounds, represents the new face of Moroccan religious building. Nearby, the Cathedral Saint-Pierre de Rabat, built in 1921 during the French Protectorate, is one of the few functioning Catholic cathedrals in Morocco. Its Art Deco facade and tranquil interior are a reminder of the French colonial period. Together they exemplify Morocco\'s tradition of religious coexistence and diversity.',
    image: '/images/hero-rabat.webp',
    type: 'Religious Heritage',
    rating: 4.1,
    hours: 'Mosque: exterior only for non-Muslims; Cathedral: 9:00 AM - 6:00 PM',
    price: 'Free',
    tip: 'The cathedral is a quiet refuge in the busy city center. Services are held in French on Sundays. The area around both buildings is pleasant for walking and shows Rabat\'s blend of Moroccan and colonial architecture.',
  },
];

/* =====================================================================
   DATA: KASBAH OF THE UDAYAS DEEP DIVE
   ===================================================================== */

const udayasHighlights = [
  {
    title: 'Bab Oudaia Gateway',
    description: 'The monumental Almohad gate at the kasbah entrance is one of the finest examples of 12th-century Almohad architecture in Morocco. The horseshoe arch is framed by carved stone bands featuring intertwined floral motifs and Kufic calligraphy. Step through and you enter the kasbah\'s main street, Rue Jamaa, lined with whitewashed and blue-painted houses.',
    icon: Landmark,
  },
  {
    title: 'Blue & White Streets',
    description: 'The kasbah\'s residential streets are painted in the distinctive blue-and-white color scheme that draws photographers from around the world. The tradition dates to the Andalusian refugees who settled here in the 17th century, bringing their Mediterranean aesthetic. Each doorway, window, and staircase offers a new composition of cobalt blue against whitewash.',
    icon: Camera,
  },
  {
    title: 'Ocean Viewpoint Cafe',
    description: 'At the far end of the kasbah, a small cafe sits on a terrace overlooking the Atlantic Ocean and the mouth of the Bouregreg River. Order a mint tea, watch the fishing boats, and enjoy one of the best views in Rabat. The terrace is also a popular spot for sunset, when the sky turns orange and pink over the ocean.',
    icon: Coffee,
  },
  {
    title: 'The Oudaias Museum',
    description: 'Housed in a 17th-century palace built by the Alaouite Sultan Moulay Ismail, this small museum displays traditional Moroccan jewelry, ceramics, textiles, musical instruments, and Qurans. The building itself, with its painted cedarwood ceilings and central courtyard, is as much an attraction as the collection. The museum provides insight into the material culture of traditional Rabat.',
    icon: Palette,
  },
  {
    title: 'Best Photo Spots',
    description: 'The most photographed spots in the kasbah are Rue Jamaa (the main blue-and-white street), the narrow side alleys where cats sleep on blue stairs, the view from the ocean terrace looking back at the kasbah walls, and the Andalusian Gardens below with the kasbah rising above. Early morning light between 7 and 9 AM is ideal.',
    icon: Eye,
  },
];

/* =====================================================================
   DATA: HASSAN TOWER DEEP DIVE
   ===================================================================== */

const hassanTowerFacts = [
  { label: 'Height', value: '44 meters (intended: 86 meters)', icon: Landmark },
  { label: 'Begun', value: '1195-1199 AD', icon: Calendar },
  { label: 'Dynasty', value: 'Almohad', icon: Crown },
  { label: 'Architect', value: 'Jabir (attributed)', icon: GraduationCap },
  { label: 'Columns', value: '348 remaining', icon: Building },
  { label: 'Sister Towers', value: 'Koutoubia (Marrakech), Giralda (Seville)', icon: Globe },
];

/* =====================================================================
   DATA: CHELLAH DEEP DIVE
   ===================================================================== */

const chellahHighlights = [
  {
    title: 'Merenid Gateway',
    description: 'The massive 14th-century entrance gate is one of the finest examples of Merenid architecture in Morocco. Carved stone decorations feature geometric and floral patterns with traces of the original polychrome paint still visible. Flanking octagonal towers add to the imposing presence.',
    icon: Landmark,
  },
  {
    title: 'Roman Sala Colonia',
    description: 'The oldest layer of Chellah dates to the 3rd century BC when Phoenicians established a trading post here. The Romans later built Sala Colonia, whose remains include a decumanus (main street), a forum, a triumphal arch, and fragmentary mosaic floors. Stone columns and carved capitals litter the gardens.',
    icon: BookOpen,
  },
  {
    title: 'Islamic Necropolis',
    description: 'The Merenid Sultan Abou al-Hassan built a royal necropolis here in the 14th century, including a mosque, a zaouia (religious school), and royal tombs. The ruins of the minaret, decorated with colorful zellige tilework, are the most recognizable feature and serve as the primary nesting site for the resident storks.',
    icon: Moon,
  },
  {
    title: 'Stork Colony',
    description: 'From February through August, dozens of white storks nest on the ruined walls and minaret of Chellah. The clacking of their bills echoes across the site. These large, graceful birds are considered good luck in Moroccan culture and are protected. The sight of storks nesting among medieval ruins is uniquely atmospheric.',
    icon: Leaf,
  },
  {
    title: 'Sacred Pool & Eels',
    description: 'Near the ruins of the mosque, a sacred pool is home to eels that locals believe possess baraka (blessing). Women visit the pool to make wishes, leaving hard-boiled eggs as offerings to the eels. This folk tradition blends pre-Islamic, Roman, and Muslim elements in a way that is uniquely Moroccan.',
    icon: Waves,
  },
];

/* =====================================================================
   DATA: WHERE TO EAT
   ===================================================================== */

const restaurants = [
  {
    name: 'Dar Zaki',
    cuisine: 'Traditional Moroccan',
    location: 'Medina',
    priceRange: '80-200 MAD',
    description: 'A beautifully restored riad in the medina serving some of Rabat\'s finest traditional cuisine. The tagines are exceptional, particularly the lamb with prunes and almonds. The pastilla (pigeon pie) is made fresh daily and is among the best in the country. The courtyard setting with zellige tilework and a central fountain creates a serene dining atmosphere. Reservations recommended for dinner.',
    mustTry: 'Lamb tagine with prunes, pastilla, couscous Friday special',
  },
  {
    name: 'Le Dhow',
    cuisine: 'Moroccan-French Fusion',
    location: 'Bouregreg Marina',
    priceRange: '150-400 MAD',
    description: 'A floating restaurant aboard a beautifully converted wooden dhow moored at the Bouregreg Marina. The setting is spectacular: dine on deck under the stars with views of the illuminated Kasbah of the Udayas and the Hassan Tower in the distance. The menu blends Moroccan flavors with French technique, featuring fresh seafood, grilled meats, and creative salads. The wine list includes excellent Moroccan and French selections. Perfect for a special evening.',
    mustTry: 'Grilled sea bass, seafood platter, dessert pastilla with milk',
  },
  {
    name: 'Cosmopolitan',
    cuisine: 'International & Moroccan',
    location: 'Agdal',
    priceRange: '100-300 MAD',
    description: 'A sophisticated restaurant in the Agdal neighborhood popular with Rabat\'s professional class and diplomats. The menu spans Moroccan classics, French bistro dishes, Italian pastas, and Asian-inspired plates, all executed with care and quality ingredients. The interior is sleek and modern, the service is polished, and the wine and cocktail list is one of the best in the city. Open for lunch and dinner.',
    mustTry: 'Tuna tartare, risotto with saffron, chocolate fondant',
  },
  {
    name: 'Dar Naji',
    cuisine: 'Traditional Moroccan',
    location: 'Near Hassan Tower',
    priceRange: '60-150 MAD',
    description: 'A popular local restaurant known for generous portions of authentic Moroccan food at honest prices. The grilled meats are the specialty: brochettes, kefta (minced meat), and mixed grill platters come sizzling from the charcoal grill with fresh salads, bread, and harissa. The atmosphere is no-frills and family-friendly. This is where Rabat families come for a reliable, satisfying meal without pretension.',
    mustTry: 'Mixed grill platter, kefta tagine with eggs, harira soup',
  },
  {
    name: 'Le Petit Beur',
    cuisine: 'Moroccan & Mediterranean',
    location: 'Avenue Mohammed V',
    priceRange: '70-180 MAD',
    description: 'A Rabat institution on the main boulevard, Le Petit Beur has been serving quality Moroccan and Mediterranean food since the 1990s. The interior evokes a classic French brasserie with Moroccan touches. Known for its excellent fish and seafood dishes, the restaurant also does superb tagines and couscous. The terrace seating on Avenue Mohammed V offers prime people-watching.',
    mustTry: 'Fish tagine, seafood pastilla, lemon meringue tart',
  },
  {
    name: 'Ty Potes',
    cuisine: 'Breton Creperie & Cafe',
    location: 'Agdal',
    priceRange: '40-120 MAD',
    description: 'A charming French-style creperie that has become a favorite brunch and lunch spot among Rabat\'s expat and diplomatic community. Sweet and savory crepes, galettes, fresh salads, and excellent coffee in a cozy, casual setting. A refreshing change of pace from tagine and couscous when you want something lighter.',
    mustTry: 'Galette complete (ham, cheese, egg), salted caramel crepe, fresh orange juice',
  },
];

/* =====================================================================
   DATA: WHERE TO STAY
   ===================================================================== */

const accommodations = [
  {
    name: 'Sofitel Rabat Jardin des Roses',
    type: 'Luxury Hotel',
    location: 'Souissi',
    priceRange: '2,000-5,000 MAD/night',
    description: 'Rabat\'s finest luxury hotel, set in 17 hectares of landscaped gardens in the prestigious Souissi diplomatic quarter. The hotel features 232 rooms, multiple restaurants including the acclaimed L\'Alcazar, an extensive spa, outdoor pools, tennis courts, and impeccable service. The grounds are spectacular, with rose gardens, palm-lined avenues, and peacocks roaming freely. Popular with visiting dignitaries and diplomats.',
    bestFor: 'Luxury travelers, business visitors, those wanting a resort experience in the capital',
  },
  {
    name: 'Villa Mandarine',
    type: 'Boutique Hotel',
    location: 'Souissi',
    priceRange: '1,200-3,000 MAD/night',
    description: 'An intimate boutique hotel set in a converted private villa surrounded by three hectares of citrus orchards. The 36 rooms blend traditional Moroccan design with contemporary luxury. The on-site restaurant is one of Rabat\'s best, serving refined Moroccan-French cuisine in the garden. The atmosphere is tranquil and discreet, attracting discerning travelers who prefer privacy over brand-name hotels.',
    bestFor: 'Couples, foodies, those seeking intimate boutique luxury',
  },
  {
    name: 'Riad Dar El Kebira',
    type: 'Traditional Riad',
    location: 'Medina',
    priceRange: '500-1,200 MAD/night',
    description: 'A lovingly restored traditional riad in the heart of Rabat\'s medina, offering an authentic Moroccan guesthouse experience without the tourist intensity of Marrakech or Fes. The riad features zellige tilework, carved stucco, painted cedarwood ceilings, and a central courtyard with a small plunge pool. Rooms are individually decorated, and the rooftop terrace offers views over the medina toward the ocean.',
    bestFor: 'Culture seekers, photographers, those wanting an authentic medina experience',
  },
  {
    name: 'Cantor Hotel Rabat Terminus',
    type: 'Mid-Range Hotel',
    location: 'City Center (near train station)',
    priceRange: '600-1,500 MAD/night',
    description: 'A renovated historic hotel near Rabat Ville train station with a blend of Art Deco heritage and modern comforts. The central location makes it ideal for visitors using the train network, with easy access to the medina, Hassan Tower, and Avenue Mohammed V. Rooms are contemporary and well-equipped, and the rooftop restaurant offers city views.',
    bestFor: 'Business travelers, train travelers, those wanting a central location',
  },
  {
    name: 'Youth Hostel (Auberge de Jeunesse)',
    type: 'Budget',
    location: 'Near medina',
    priceRange: '100-250 MAD/night',
    description: 'Rabat\'s youth hostel offers basic but clean dormitory and private rooms at budget prices. The location near the medina walls is convenient, and the common areas provide opportunities to meet fellow travelers. Facilities include shared bathrooms, a small kitchen, and a garden. It is not luxurious, but for backpackers it offers the best value accommodation in the capital.',
    bestFor: 'Backpackers, solo travelers, budget-conscious visitors',
  },
];

/* =====================================================================
   DATA: NEIGHBORHOODS
   ===================================================================== */

const neighborhoods = [
  {
    name: 'Kasbah of the Udayas',
    icon: Shield,
    character: 'Blue-and-white historic fortress',
    description:
      'The most atmospheric corner of Rabat, perched on a cliff overlooking the Atlantic and the Bouregreg River. Narrow streets painted in Chefchaouen-like blue and white, artisan workshops, a clifftop cafe with ocean views, and the serene Andalusian Gardens make this the top sight in the city. Traffic-free and peaceful, the kasbah feels like a village within the capital.',
    highlights: ['Bab Oudaia gate', 'Blue streets', 'Ocean viewpoint', 'Andalusian Gardens', 'Oudaias Museum'],
    bestFor: 'Photographers, history lovers, those seeking tranquility',
    stayHere: 'A few guesthouses operate within the kasbah walls, offering an unbeatable location with ocean views and total serenity.',
  },
  {
    name: 'Medina',
    icon: ShoppingBag,
    character: 'Orderly Andalusian-style old town',
    description:
      'Unlike the overwhelming medinas of Fes or Marrakech, Rabat\'s medina is manageable, pleasant, and hassle-free. Built by 17th-century Andalusian refugees, it has a more orderly grid layout than typical Moroccan medinas. Rue des Consuls is the main shopping street with carpets, leather, and jewelry at fair prices. The atmosphere is authentically local with very few tourist traps.',
    highlights: ['Rue des Consuls shopping', 'Thursday carpet auction', 'Local food stalls', 'Jewelry workshops', 'Textile shops'],
    bestFor: 'Shoppers, budget travelers, those wanting hassle-free medina experience',
    stayHere: 'Several traditional riads offer excellent value compared to Marrakech. Prices are 30-50% lower for comparable quality.',
  },
  {
    name: 'Hassan',
    icon: Landmark,
    character: 'Monument district and government quarter',
    description:
      'The neighborhood surrounding the Hassan Tower and Mohammed V Mausoleum is Rabat\'s monumental heart. Wide boulevards, government buildings, embassies, and the esplanade of the Hassan Tower dominate the area. It is impressive rather than intimate, with a grandeur befitting a national capital. The Parliament building and several ministry offices are located here.',
    highlights: ['Hassan Tower', 'Mohammed V Mausoleum', 'Parliament building', 'Government quarter', 'Wide boulevards'],
    bestFor: 'First-time visitors, history enthusiasts, architecture fans',
    stayHere: 'Several mid-range hotels are convenient to the Hassan Tower and the train station, ideal for visitors staying one or two nights.',
  },
  {
    name: 'Agdal',
    icon: Coffee,
    character: 'Modern, vibrant, youthful',
    description:
      'Agdal is Rabat\'s most dynamic modern neighborhood, centered around Avenue de France and the Agdal University campus. This is where Rabat\'s young professionals, students, and creative class gather in trendy cafes, international restaurants, bookshops, and boutiques. The neighborhood has a distinctly European feel with tree-lined streets, outdoor terraces, and a cosmopolitan energy that contrasts with the historic center.',
    highlights: ['Cafe culture', 'International restaurants', 'Boutique shopping', 'Nightlife', 'University atmosphere'],
    bestFor: 'Foodies, nightlife seekers, young travelers, digital nomads',
    stayHere: 'Modern apartments and small hotels offer comfortable, affordable stays in a lively neighborhood with excellent dining options.',
  },
  {
    name: 'Souissi',
    icon: TreePine,
    character: 'Upscale diplomatic quarter',
    description:
      'The most prestigious residential neighborhood in Rabat, Souissi is home to embassies, diplomatic residences, luxury hotels, and the sprawling gardens of the Sofitel. The streets are broad, tree-lined, and quiet, with high walls concealing elegant villas. The Royal Palace of Dar es-Salam and its golf course are located here. Souissi offers a completely different experience from the medina: spacious, green, and serene.',
    highlights: ['Sofitel Jardin des Roses', 'Embassy district', 'Royal golf course', 'Villa Mandarine', 'Peaceful gardens'],
    bestFor: 'Luxury travelers, diplomats, those seeking a quiet, upscale base',
    stayHere: 'The two luxury hotels here offer resort-like experiences with gardens and pools, a short taxi ride from the historic center.',
  },
  {
    name: 'Hay Riad',
    icon: Building,
    character: 'Modern business and shopping district',
    description:
      'Rabat\'s newest and most modern district, Hay Riad is home to the Mega Mall, corporate offices, the Rabat-Sale tramway terminus, and contemporary residential towers. While it lacks historic character, it offers modern shopping, international chain restaurants, a multiplex cinema, and easy transport connections. The neighborhood represents Rabat\'s forward-looking, developing identity.',
    highlights: ['Mega Mall', 'Corporate district', 'Tramway access', 'Modern dining', 'Cinema complex'],
    bestFor: 'Business travelers, shopping enthusiasts, families wanting modern amenities',
    stayHere: 'Chain hotels and serviced apartments cater to business travelers and longer stays.',
  },
];

/* =====================================================================
   DATA: GETTING AROUND
   ===================================================================== */

const transportOptions = [
  {
    name: 'Rabat-Sale Tramway',
    icon: Train,
    cost: '8 MAD per ride',
    description: 'Rabat\'s modern tramway system opened in 2011 and consists of two lines connecting key areas across Rabat and Sale. Line 1 runs from Hay Karima in Sale through the city center to Madinat Al Irfane. Line 2 connects Sale to Agdal and the hospital district. Trams run every 10-15 minutes from 6 AM to 10:30 PM. Rechargeable cards are available at stations. The tramway is clean, efficient, and the best way to get between Rabat and Sale without dealing with traffic.',
  },
  {
    name: 'Petit Taxis',
    icon: Car,
    cost: '10-30 MAD within city',
    description: 'Rabat\'s blue petit taxis are metered and inexpensive. A typical ride within the city center costs 10-20 MAD, while longer trips to Souissi or Hay Riad run 20-30 MAD. Always insist on the meter. At night, a 50% surcharge applies. Taxis hold a maximum of 3 passengers. Drivers are generally honest in Rabat, though some may try to negotiate a flat fare with tourists.',
  },
  {
    name: 'Al Boraq TGV (High-Speed Train)',
    icon: Navigation,
    cost: '149-329 MAD to Casablanca / 209-439 MAD to Tangier',
    description: 'Morocco\'s high-speed TGV train, Africa\'s first, connects Rabat to Casablanca in just 45 minutes and to Tangier in 1 hour 20 minutes. Trains depart from Rabat Agdal station, with multiple daily departures. First-class seating is comfortable with power outlets and Wi-Fi. The Al Boraq has transformed travel between Morocco\'s major northern cities and is a far superior experience to driving.',
  },
  {
    name: 'ONCF Regional Trains',
    icon: Train,
    cost: '30-100 MAD depending on destination',
    description: 'Regular ONCF trains connect Rabat Ville and Rabat Agdal stations to Casablanca (1 hour), Meknes (2.5 hours), Fes (3 hours), and Marrakech (4.5 hours). Departures are frequent, especially to Casablanca (roughly every 30 minutes). First-class is recommended for longer journeys. Rabat Ville station is centrally located near the medina and Avenue Mohammed V.',
  },
  {
    name: 'City Buses',
    icon: Bus,
    cost: '4-6 MAD',
    description: 'Rabat\'s city bus network covers most areas but can be crowded during rush hours. Routes connect the city center to suburban neighborhoods, the zoo, and beaches. For tourists, the tramway and petit taxis are more practical, but buses are the cheapest option for budget travelers. The main bus hub is near Bab El Had, at the entrance to the medina.',
  },
];

/* =====================================================================
   DATA: DAY TRIPS
   ===================================================================== */

const dayTrips = [
  {
    name: 'Sale',
    distance: 'Across the river (5 minutes by boat)',
    description: 'Rabat\'s twin city across the Bouregreg River has its own distinct character and history. Sale was once a notorious pirate republic, home to the Sale Rovers who terrorized Atlantic shipping in the 17th century. Today it is a conservative, deeply traditional city with a magnificent Grand Mosque, the Medersa of Abou al-Hassan (with exquisite zellige and carved stucco), bustling souks, and the colorful wax candle procession during the Mawlid festival. Take the 5 MAD river boat from Rabat for a charming crossing with views of the Udayas kasbah.',
    highlights: ['Medersa of Abou al-Hassan', 'Grand Mosque', 'Traditional souks', 'Pirate history', 'River boat crossing'],
  },
  {
    name: 'Kenitra',
    distance: '40 km north (30 minutes by train)',
    description: 'A medium-sized city north of Rabat with a pleasant Atlantic beach and the nearby Mehdia Kasbah, a 17th-century fortress overlooking the mouth of the Sebou River. Kenitra itself is not a major tourist destination, but the surrounding area offers the stunning Mehdia beach, the Sidi Boughaba nature reserve (a bird-watching paradise), and access to the cork oak forests of the Mamora. It makes a pleasant half-day escape for nature lovers.',
    highlights: ['Mehdia beach', 'Mehdia Kasbah', 'Sidi Boughaba lake', 'Mamora forest', 'Atlantic coastline'],
  },
  {
    name: 'Mehdia Beach',
    distance: '35 km north (40 minutes by car)',
    description: 'One of the best beaches near Rabat, Mehdia is a long stretch of golden sand backed by dunes and pine forests at the mouth of the Sebou River. Popular with Rabatis on summer weekends, the beach is quieter during the week. The waves are excellent for surfing, and the nearby Mehdia Kasbah provides a historic backdrop. Several seasonal restaurants serve fresh grilled fish and seafood at the water\'s edge.',
    highlights: ['Surfing', 'Golden sand beach', 'Mehdia Kasbah nearby', 'Fresh seafood', 'Pine forest walks'],
  },
  {
    name: 'Meknes & Volubilis',
    distance: '140 km east (1.5 hours by car or 2.5 hours by train)',
    description: 'The imperial city of Meknes and the Roman ruins of Volubilis make a spectacular day trip from Rabat. Meknes, built by the Alaouite Sultan Moulay Ismail as his Versailles, features the monumental Bab Mansour gate, vast granaries, the Heri es-Souani royal stables, and a charming medina. Nearby Volubilis is Morocco\'s best-preserved Roman city, with remarkably intact mosaics, a triumphal arch, and the Capitoline Temple. Start early and visit Volubilis first, then Meknes for lunch and afternoon exploration.',
    highlights: ['Bab Mansour gate', 'Volubilis Roman mosaics', 'Heri es-Souani', 'Meknes medina', 'Imperial history'],
  },
  {
    name: 'Casablanca',
    distance: '90 km south (45 minutes by Al Boraq TGV)',
    description: 'Morocco\'s largest city and economic powerhouse is easily accessible by high-speed train. The Hassan II Mosque, the third-largest mosque in the world with its 210-meter minaret rising above the Atlantic, is alone worth the trip. The mosque interior (one of the few in Morocco open to non-Muslims) features a retractable roof, heated floor, and room for 25,000 worshippers. Add the Art Deco heritage of the Ville Nouvelle, the Corniche waterfront, and the Morocco Mall for a full day.',
    highlights: ['Hassan II Mosque (interior tours)', 'Art Deco architecture', 'Corniche waterfront', 'Rick\'s Cafe', 'Morocco Mall'],
  },
];

/* =====================================================================
   DATA: CULTURE & ART SCENE
   ===================================================================== */

const culturalHighlights = [
  {
    name: 'Rabat Cultural Capital',
    description: 'Rabat was designated "African Capital of Culture" in 2014 and "Culture Capital of the Islamic World" in 2022, recognizing its growing status as a center for arts and creative expression. The city has invested heavily in cultural infrastructure, with new museums, galleries, theaters, and festivals transforming the capital into Morocco\'s most dynamic cultural hub.',
    icon: Globe,
  },
  {
    name: 'Mohammed VI Museum of Modern and Contemporary Art',
    description: 'Morocco\'s flagship contemporary art museum opened in 2014 and has quickly become one of the most important art institutions in Africa. The museum hosts world-class temporary exhibitions alongside its permanent collection of Moroccan modern art, and has exhibited works by Giacometti, Cesar, and other international figures alongside Moroccan masters.',
    icon: Palette,
  },
  {
    name: 'Grand Theatre de Rabat (Mohammed VI Theater)',
    description: 'Designed by the legendary architect Zaha Hadid, this stunning performance venue on the Bouregreg waterfront is one of the most architecturally significant buildings in Africa. The flowing, organic form of the building echoes the curves of the river. When completed, it will host opera, theater, dance, and concerts in a 2,050-seat main auditorium. Even before completion, the exterior is a major architectural landmark.',
    icon: Theater,
  },
  {
    name: 'L\'Boulevard Festival',
    description: 'Rabat\'s annual contemporary music festival brings together rock, hip-hop, electronic, and fusion artists from across Morocco and the Arab world. The festival has been instrumental in launching Moroccan alternative music careers and attracts tens of thousands of young Moroccans. It represents the vibrant, youthful energy of Rabat\'s cultural scene.',
    icon: Music,
  },
  {
    name: 'Mawazine Festival',
    description: 'One of the largest music festivals in the world by attendance, Mawazine (Rhythms of the World) takes place annually in Rabat and has featured global superstars including Rihanna, Elton John, Stevie Wonder, Mariah Carey, and many more. The festival spans multiple stages across the city and attracts over 2 million visitors across its run. Many concerts are free.',
    icon: Music,
  },
  {
    name: 'Street Art & Galleries',
    description: 'Rabat has a growing contemporary art scene with galleries concentrated in Agdal and the city center. The Marsam Art Gallery, Galerie Bab Rouah, and the Espace Expressions CDG host rotating exhibitions of Moroccan contemporary art. Street art murals have appeared across the city, particularly in the Oudayas kasbah area and along the Bouregreg waterfront.',
    icon: Palette,
  },
];

/* =====================================================================
   DATA: BEST TIME TO VISIT
   ===================================================================== */

const monthlyWeather = [
  { months: 'March - May', temp: '18-25C', rating: 5, icon: Sun, verdict: 'The ideal time to visit Rabat. Mild temperatures, gardens in bloom, and comfortable conditions for walking the city. The storks arrive at Chellah, and the Andalusian Gardens are at their most beautiful.' },
  { months: 'September - November', temp: '20-28C', rating: 5, icon: Leaf, verdict: 'Equally excellent. Summer heat has subsided, the Atlantic breeze returns, and autumn light bathes the city in warm tones. October is particularly pleasant with clear skies and moderate temperatures.' },
  { months: 'June', temp: '22-30C', rating: 4, icon: ThermometerSun, verdict: 'Warm but manageable, with the Atlantic breeze tempering the heat. Rabat is significantly cooler than inland cities like Marrakech and Fes during summer. Good beach weather begins.' },
  { months: 'December - February', temp: '10-18C', rating: 3, icon: CloudSun, verdict: 'Mild winter with occasional rain. Temperatures rarely drop below 8C. Rain can be heavy in January. Pack layers and a waterproof jacket. Fewer tourists and good hotel rates.' },
  { months: 'July - August', temp: '25-35C', rating: 3, icon: ThermometerSun, verdict: 'Hot but cooler than interior Morocco thanks to the Atlantic coast. Temperatures peak around 32-35C. The beach is popular and evenings are pleasant. Hotels fill with domestic tourists.' },
];

/* =====================================================================
   DATA: BUDGET GUIDE
   ===================================================================== */

const budgetBreakdown = [
  {
    category: 'Backpacker',
    dailyBudget: '250-400 MAD/day ($25-40)',
    icon: Footprints,
    details: [
      'Hostel dorm: 80-150 MAD/night',
      'Street food meals: 25-50 MAD/meal',
      'Tramway: 8 MAD/ride',
      'Free attractions: medina, Kasbah, beach, waterfront',
      'Paid attractions: 20-70 MAD each (be selective)',
    ],
  },
  {
    category: 'Mid-Range',
    dailyBudget: '700-1,200 MAD/day ($70-120)',
    icon: Heart,
    details: [
      'Riad double room: 400-800 MAD/night',
      'Restaurant meals: 80-200 MAD/meal',
      'Petit taxis: 10-30 MAD/ride',
      'All major attractions: 20-70 MAD each',
      'Al Boraq TGV day trip: 149-329 MAD return',
    ],
  },
  {
    category: 'Luxury',
    dailyBudget: '2,500-6,000+ MAD/day ($250-600+)',
    icon: Sparkles,
    details: [
      'Luxury hotel: 2,000-5,000+ MAD/night',
      'Fine dining: 300-800 MAD/meal',
      'Private driver: 600-1,200 MAD/day',
      'Private guided tours: 800-1,500 MAD',
      'Spa & hammam: 400-1,500 MAD',
    ],
  },
];

/* =====================================================================
   DATA: PRACTICAL INFO & FAQ
   ===================================================================== */

const faqItems = [
  {
    question: 'How many days do I need in Rabat?',
    answer: 'Two to three days is ideal for Rabat. One day covers the main sights (Hassan Tower, Kasbah of the Udayas, Chellah, medina), a second day allows for museums, the Bouregreg waterfront, and Sale. A third day enables a day trip to Casablanca or Meknes/Volubilis by train. Rabat also works well as a base for exploring northern Morocco by high-speed train.',
  },
  {
    question: 'Is Rabat safe for tourists?',
    answer: 'Rabat is one of the safest cities in Morocco for tourists. As the political capital, it has a strong security presence and is significantly less chaotic than Marrakech or Fes. Petty crime is relatively rare, and the medina is refreshingly free of aggressive touts. Exercise normal precautions with valuables and avoid unlit areas at night.',
  },
  {
    question: 'How do I get from Rabat airport to the city?',
    answer: 'Rabat-Sale Airport is about 10 km from the city center. A petit taxi to central Rabat costs approximately 150-200 MAD (negotiate before departure). Alternatively, take the airport shuttle bus (30 MAD) to Rabat Ville train station. There is no direct tramway connection to the airport, though you can combine a taxi to the nearest tram stop.',
  },
  {
    question: 'Is Rabat worth visiting compared to Marrakech or Fes?',
    answer: 'Absolutely, but for different reasons. Rabat offers a calmer, more dignified experience without the sensory overload of Marrakech or the labyrinthine intensity of Fes. It is ideal for travelers who appreciate history, culture, and contemporary art without the tourist circus. The Kasbah of the Udayas and Chellah alone justify a visit. Rabat also reveals the modern, cosmopolitan side of Morocco that tourists rarely see.',
  },
  {
    question: 'Can I visit the Royal Palace?',
    answer: 'The Royal Palace (Dar al-Makhzen) interior is strictly off-limits to visitors. You can view and photograph the impressive exterior, including the ornate main gate and the mechouar parade ground, from a respectful distance. The surrounding Touarga neighborhood is pleasant for walking.',
  },
  {
    question: 'What is the best way to get between Rabat and Casablanca?',
    answer: 'The Al Boraq TGV high-speed train is by far the best option, covering the distance in just 45 minutes. Trains depart from Rabat Agdal station multiple times daily. Regular ONCF trains take about 1 hour and depart from Rabat Ville station roughly every 30 minutes. Driving takes 1-1.5 hours depending on traffic and is not recommended when the train is so convenient.',
  },
  {
    question: 'Is the tramway safe and reliable?',
    answer: 'Yes, the Rabat-Sale tramway is clean, safe, modern, and reliable. It runs from approximately 6 AM to 10:30 PM with trams every 10-15 minutes. Purchase a rechargeable card at any station. The tramway is the best way to cross between Rabat and Sale and to reach areas like Agdal and the university district.',
  },
  {
    question: 'Where should I exchange money?',
    answer: 'Banks and official exchange bureaus offer the best rates. There are ATMs throughout the city, including at the airport, train stations, and along Avenue Mohammed V. Major credit cards are accepted at upscale hotels and restaurants, but the medina and smaller establishments are cash-only. Avoid street money changers.',
  },
];

/* =====================================================================
   DATA: 3-DAY ITINERARY
   ===================================================================== */

const itinerary = [
  {
    day: 'Day 1',
    title: 'Monuments & Medina',
    icon: Landmark,
    morning: {
      time: '9:00 AM - 12:30 PM',
      activities: [
        'Start at Hassan Tower and the Mohammed V Mausoleum for the city\'s most iconic sight',
        'Take time to walk among the 348 columns and photograph the tower from multiple angles',
        'Enter the mausoleum to see the royal tombs from the viewing gallery',
        'Walk south toward the Rabat medina, entering through Bab El Had',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Lunch at Dar Naji near the Hassan Tower for authentic grilled meats',
        'Explore Rue des Consuls in the medina for carpets, leather goods, and jewelry shopping',
        'Visit the Thursday carpet auction at Souk es-Sebat if timing aligns',
        'Walk through the medina to the Kasbah of the Udayas, the city\'s most photogenic area',
      ],
    },
    evening: {
      time: '5:30 PM - 9:30 PM',
      activities: [
        'Explore the blue-and-white streets of the Kasbah at golden hour',
        'Stop for mint tea at the clifftop cafe overlooking the Atlantic',
        'Wander down to the Andalusian Gardens before they close',
        'Dinner at Le Dhow floating restaurant on the Bouregreg Marina',
      ],
    },
  },
  {
    day: 'Day 2',
    title: 'Ruins, Museums & Culture',
    icon: Palette,
    morning: {
      time: '9:00 AM - 12:30 PM',
      activities: [
        'Open the morning at Chellah necropolis when it is quiet and atmospheric',
        'Explore the Roman Sala Colonia ruins, Merenid tombs, and stork nesting sites',
        'Allow 1.5-2 hours to fully appreciate this extraordinary layered site',
        'Taxi to the Mohammed VI Museum of Modern and Contemporary Art',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Spend 2 hours exploring Moroccan modern art at the Mohammed VI Museum',
        'Lunch at Le Petit Beur on Avenue Mohammed V',
        'Walk along Avenue Mohammed V past the Parliament building and Cathedral Saint-Pierre',
        'Visit the National Archaeological Museum to see the Roman bronzes from Volubilis',
      ],
    },
    evening: {
      time: '5:30 PM - 9:30 PM',
      activities: [
        'Take the tramway or boat across the river to Sale for sunset views of Rabat',
        'Explore the Sale medina and visit the Medersa of Abou al-Hassan if open',
        'Return to Rabat and stroll the Bouregreg waterfront promenade',
        'Dinner at Cosmopolitan in Agdal for international cuisine',
      ],
    },
  },
  {
    day: 'Day 3',
    title: 'Day Trip to Casablanca',
    icon: Globe,
    morning: {
      time: '8:00 AM - 12:30 PM',
      activities: [
        'Catch the morning Al Boraq TGV from Rabat Agdal to Casa Voyageurs (45 minutes)',
        'Take a taxi directly to the Hassan II Mosque for the morning tour (book ahead if possible)',
        'Marvel at the world\'s third-largest mosque with its retractable roof and ocean-edge setting',
        'Explore the stunning interior with its carved cedarwood, zellige, and painted ceilings',
      ],
    },
    afternoon: {
      time: '12:30 PM - 5:30 PM',
      activities: [
        'Lunch at a Corniche seafood restaurant overlooking the Atlantic',
        'Walk the Art Deco quarter in the Ville Nouvelle to see Casablanca\'s unique architecture',
        'Visit Rick\'s Cafe for a drink (inspired by the classic film, built in 2004)',
        'Browse the Morocco Mall or the Habous Quarter for souvenirs',
      ],
    },
    evening: {
      time: '5:30 PM - 9:00 PM',
      activities: [
        'Return to Rabat on the Al Boraq TGV (last departure around 9 PM)',
        'Enjoy a final dinner at Dar Zaki in the Rabat medina for traditional Moroccan cuisine',
        'Evening walk along the medina walls under the streetlights',
        'Reflect on three days in Morocco\'s most elegant capital city',
      ],
    },
  },
];

/* =====================================================================
   DATA: SAFETY TIPS
   ===================================================================== */

const safetyTips = [
  {
    icon: Shield,
    title: 'General Safety',
    tips: [
      'Rabat is one of the safest cities in Morocco. The strong security presence in the capital means crime rates are low and tourist-targeted crime is rare.',
      'The medina is calm and hassle-free compared to Marrakech or Fes. Shopkeepers are rarely aggressive.',
      'Exercise normal precautions: do not flash expensive jewelry or electronics, and keep valuables in your hotel safe.',
      'Walking at night in main streets and well-lit areas is generally safe. Avoid deserted streets after midnight.',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Awareness Points',
    tips: [
      'Taxi drivers may occasionally refuse to use the meter. Insist on it or agree on a price before departing.',
      'The beach can have strong currents. Swim only in lifeguard-monitored areas during summer months.',
      'Pickpocketing can occur in crowded tramways and buses. Keep bags zipped and phones in front pockets.',
      'Some unofficial guides may offer services near tourist sites. A polite "la, shukran" (no, thank you) is sufficient.',
    ],
  },
  {
    icon: Phone,
    title: 'Emergency Information',
    tips: [
      'Police: 19 (French and Arabic speaking)',
      'Tourist police can assist with language barriers and tourist-specific issues',
      'Ambulance / Fire: 15',
      'Pharmacies: marked with a green cross, some open 24 hours on rotation',
      'Your hotel reception is your best first resource for any issue, from lost items to medical referrals',
    ],
  },
];

/* =====================================================================
   DATA: RELATED PAGES
   ===================================================================== */

const relatedPages = [
  {
    href: '/cities',
    icon: MapPin,
    title: 'All Moroccan Cities',
    description: 'Discover every major destination across Morocco, from imperial cities to coastal gems.',
  },
  {
    href: '/chefchaouen',
    icon: Camera,
    title: 'Chefchaouen Guide',
    description: 'Morocco\'s famous Blue City in the Rif Mountains, a photographer\'s paradise.',
  },
  {
    href: '/train-travel',
    icon: Train,
    title: 'Train Travel in Morocco',
    description: 'Complete guide to ONCF and Al Boraq TGV trains connecting Morocco\'s major cities.',
  },
  {
    href: '/unesco',
    icon: Landmark,
    title: 'UNESCO Heritage Sites',
    description: 'Explore Morocco\'s UNESCO World Heritage Sites, including Rabat\'s historic medina and monuments.',
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function RabatGuidePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Rabat',
    alternateName: 'Morocco\'s Imperial Capital',
    description:
      'Rabat is the political capital of Morocco and a UNESCO World Heritage city. Home to the Hassan Tower, Kasbah of the Udayas, Chellah necropolis, and the Mohammed V Mausoleum, Rabat blends imperial grandeur with a relaxed Atlantic-coast atmosphere and a thriving contemporary art scene.',
    url: 'https://moroccoguide.com/rabat',
    touristType: ['Culture Enthusiasts', 'History Buffs', 'Art Lovers', 'Architecture Fans', 'Photographers'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.0209,
      longitude: -6.8416,
    },
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Hassan Tower' },
      { '@type': 'TouristAttraction', name: 'Kasbah of the Udayas' },
      { '@type': 'TouristAttraction', name: 'Chellah' },
      { '@type': 'TouristAttraction', name: 'Mohammed V Mausoleum' },
      { '@type': 'TouristAttraction', name: 'Mohammed VI Museum of Modern and Contemporary Art' },
      { '@type': 'TouristAttraction', name: 'Rabat Royal Palace' },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* =================================================================
          HERO SECTION
          ================================================================= */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-rabat.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/cities" className="hover:text-white transition-colors">Cities</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Rabat</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white">
              Rabat
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-[family-name:var(--font-display)] italic mb-4">
            Morocco&apos;s Imperial Capital &mdash; Where History Meets the Atlantic
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            The political heart of Morocco and a UNESCO World Heritage city. Rabat is an elegant capital
            where ancient monuments, blue-and-white kasbahs, Roman ruins, and a thriving contemporary
            art scene coexist with the rhythm of Atlantic waves and the calm of a city that knows its worth.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Crown className="w-3.5 h-3.5 mr-1.5" /> Royal Capital</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Landmark className="w-3.5 h-3.5 mr-1.5" /> UNESCO Heritage</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Palette className="w-3.5 h-3.5 mr-1.5" /> Cultural Hub</span>
            <span className="tag bg-white/15 text-white backdrop-blur-sm"><Waves className="w-3.5 h-3.5 mr-1.5" /> Atlantic Coast</span>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* =================================================================
          INTRODUCTION
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Imperial Capital: A City of Quiet Grandeur
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              While Marrakech dazzles and Fes overwhelms, Rabat seduces quietly. Morocco&apos;s political capital
              and seat of the monarchy since independence in 1956, Rabat is a city that rewards the curious
              traveler with layers of history stretching from Roman antiquity through Almohad imperial
              ambitions to a confident, contemporary identity as one of Africa&apos;s most cultured capitals.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              With a population of approximately 580,000, Rabat is intimate for a national capital. UNESCO
              inscribed the entire city as a World Heritage Site in 2012, recognizing the harmonious blend
              of historic and modern urban planning. The Hassan Tower, the Kasbah of the Udayas, and the
              Chellah necropolis anchor a city that also boasts Morocco&apos;s first museum of modern art,
              Africa&apos;s first high-speed railway, and a waterfront designed by some of the world&apos;s most
              renowned architects.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Rabat is the antidote to the tourist intensity of Morocco&apos;s more famous cities. The medina is
              hassle-free, the prices are honest, the cafes are unhurried, and the locals are genuinely
              welcoming. Whether you are spending two days exploring the capital or using it as a base for
              high-speed train excursions to Casablanca, Tangier, and Meknes, Rabat will surprise you
              with its quiet depth and understated elegance.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          QUICK FACTS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-4 text-center">
                  <FactIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          ESSENTIAL TIPS
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Rabat Essentials: Know Before You Go
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            These practical tips will help you navigate Morocco&apos;s capital like an experienced traveler.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {essentialTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <TipIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          TOP ATTRACTIONS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Camera className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top 12 Attractions in Rabat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From the unfinished grandeur of the Hassan Tower to the Roman ruins of Chellah, these are
            the experiences that define Morocco&apos;s capital city.
          </p>

          <div className="space-y-8">
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="card-moroccan overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
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
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-bold text-[var(--text-primary)] mb-3">
                      {attraction.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                      {attraction.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-4">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {attraction.hours}</span>
                      <span className="flex items-center gap-1"><Ticket className="w-3.5 h-3.5" /> {attraction.price}</span>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent-50)]">
                      <Lightbulb className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-semibold text-[var(--color-accent-dark)]">Tip:</span> {attraction.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          KASBAH OF THE UDAYAS DEEP DIVE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Kasbah of the Udayas: A Deep Dive
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat&apos;s most enchanting neighborhood deserves dedicated exploration. Here is what makes the
            Kasbah of the Udayas unforgettable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {udayasHighlights.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          HASSAN TOWER & MAUSOLEUM DEEP DIVE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Hassan Tower & Mohammed V Mausoleum
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            The twin icons of Rabat: an unfinished 12th-century minaret and a 20th-century marble mausoleum
            that together tell the story of Moroccan ambition across eight centuries.
          </p>

          <div className="card-moroccan p-6 lg:p-8 mb-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4">
              The Unfinished Masterpiece
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              In 1195, the Almohad Sultan Yacoub al-Mansour began construction of what was intended to be
              the largest mosque in the western Islamic world. The minaret, designed as the twin of the
              Koutoubia in Marrakech and the Giralda in Seville, was planned to reach 86 meters. But when
              al-Mansour died in 1199, construction ceased abruptly at 44 meters. The mosque was never
              completed, and the great Lisbon earthquake of 1755 destroyed much of what had been built,
              leaving only the tower and 348 stone columns standing across the vast esplanade.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              The tower is decorated on each face with a different pattern of interlaced arches, a hallmark
              of Almohad architecture. An internal ramp (rather than stairs) leads to the top, designed
              so the sultan could ride his horse to the summit. The tower has become the symbol of Rabat
              and appears on the Moroccan 200-dirham banknote.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {hassanTowerFacts.map((fact) => {
                const FactIcon = fact.icon;
                return (
                  <div key={fact.label} className="text-center p-3 rounded-lg bg-[var(--surface-muted)]">
                    <FactIcon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                    <p className="text-xs text-[var(--text-muted)] mb-1">{fact.label}</p>
                    <p className="text-xs font-semibold text-[var(--text-primary)]">{fact.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-moroccan p-6 lg:p-8">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-4">
              Mohammed V Mausoleum
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
              Adjacent to the Hassan Tower, the mausoleum was built between 1961 and 1971 to house the
              tomb of King Mohammed V, the revered leader who negotiated Moroccan independence from France
              in 1956. Designed by Vietnamese architect Vo Toan, the mausoleum is a masterwork of modern
              Moroccan craftsmanship. The exterior is clad in white Italian marble with a pyramidal roof
              of green glazed tiles. Inside, the walls are covered in hand-carved plaster and zellige
              tilework of extraordinary intricacy. The cedarwood ceiling is gilded with gold leaf.
            </p>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
              Non-Muslims are welcome to enter and view the tombs from a gallery that overlooks the central
              chamber where Mohammed V, Hassan II, and Prince Abdallah rest in white onyx sarcophagi.
              Royal guards in distinctive red-and-white uniforms stand at each entrance. The mausoleum
              is one of the few Islamic religious buildings in Morocco that non-Muslims can enter, and
              the level of craftsmanship inside is genuinely breathtaking.
            </p>
          </div>
        </div>
      </section>

      {/* =================================================================
          CHELLAH DEEP DIVE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Chellah: Where Rome Meets Medieval Morocco
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            A walled garden of ruins where Roman columns stand beside Merenid tombs and storks
            nest atop a crumbling minaret. Chellah is one of Morocco&apos;s most atmospheric sites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chellahHighlights.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-dark)] mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO EAT
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Utensils className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Eat in Rabat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From traditional riads to floating restaurants, Rabat&apos;s dining scene blends Moroccan
            tradition with French-influenced sophistication.
          </p>

          <div className="space-y-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-6 lg:p-8">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                        {restaurant.name}
                      </h3>
                      <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                        {restaurant.cuisine}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-3">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {restaurant.location}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {restaurant.priceRange}</span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                      {restaurant.description}
                    </p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent-50)]">
                      <Utensils className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[var(--text-secondary)]">
                        <span className="font-semibold text-[var(--color-accent-dark)]">Must try:</span> {restaurant.mustTry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          WHERE TO STAY
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Bed className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Where to Stay in Rabat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            From palatial luxury hotels to authentic medina riads and budget-friendly hostels.
          </p>

          <div className="space-y-6">
            {accommodations.map((hotel) => (
              <div key={hotel.name} className="card-moroccan p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                    {hotel.name}
                  </h3>
                  <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                    {hotel.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {hotel.location}</span>
                  <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {hotel.priceRange}</span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                  {hotel.description}
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                  <Users className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-semibold">Best for:</span> {hotel.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          NEIGHBORHOODS GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Neighborhoods Guide
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat has distinct neighborhoods, each with its own personality. Where you stay
            shapes your entire experience of the capital.
          </p>

          <div className="space-y-6">
            {neighborhoods.map((hood) => {
              const Icon = hood.icon;
              return (
                <div key={hood.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                          {hood.name}
                        </h3>
                        <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                          {hood.character}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                        {hood.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hood.highlights.map((h) => (
                          <span key={h} className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Users className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Best for:</span> {hood.bestFor}
                          </p>
                        </div>
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--surface-muted)]">
                          <Bed className="w-4 h-4 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-[var(--text-secondary)]">
                            <span className="font-semibold">Stay here:</span> {hood.stayHere}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          GETTING AROUND
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Navigation className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Getting Around Rabat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat is well-connected by modern tramway, affordable taxis, and Africa&apos;s first
            high-speed train network.
          </p>

          <div className="space-y-6">
            {transportOptions.map((transport) => {
              const TransportIcon = transport.icon;
              return (
                <div key={transport.name} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                      <TransportIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)]">
                          {transport.name}
                        </h3>
                        <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                          {transport.cost}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {transport.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          DAY TRIPS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day Trips from Rabat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat&apos;s central location and excellent train connections make it an ideal base for
            exploring northern Morocco.
          </p>

          <div className="space-y-6">
            {dayTrips.map((trip) => (
              <div key={trip.name} className="card-moroccan p-6 lg:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                    {trip.name}
                  </h3>
                  <span className="tag bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                    {trip.distance}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {trip.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {trip.highlights.map((h) => (
                    <span key={h} className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          CULTURE & ART SCENE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Palette className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Culture & Contemporary Art Scene
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat has emerged as Morocco&apos;s cultural capital, with world-class museums, Zaha Hadid
            architecture, and festivals that draw millions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalHighlights.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6 group">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <ItemIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BEST TIME TO VISIT
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Best Time to Visit Rabat
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat&apos;s Atlantic-coast location gives it milder weather than inland cities, making
            it pleasant to visit almost year-round.
          </p>

          <div className="space-y-4">
            {monthlyWeather.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.months} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent-dark)]">
                      <SeasonIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {season.months}
                        </h3>
                        <span className="tag bg-[var(--color-primary-50)] text-[var(--color-primary)]">
                          {season.temp}
                        </span>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${
                                i < season.rating
                                  ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
                                  : 'text-[var(--border-primary)]'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {season.verdict}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          BUDGET GUIDE
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <DollarSign className="w-6 h-6 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Budget Guide: What Does Rabat Cost?
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat offers excellent value compared to European capitals. Here is what to expect at
            every budget level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {budgetBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.category} className="card-moroccan p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[var(--color-accent-50)] text-[var(--color-accent-dark)] mb-4">
                    <TierIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-1">
                    {tier.category}
                  </h3>
                  <p className="text-sm font-semibold text-[var(--color-accent)] mb-4">
                    {tier.dailyBudget}
                  </p>
                  <div className="space-y-2">
                    {tier.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-muted)]">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          SAFETY TIPS
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Safety & Practical Information
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Rabat is one of the safest cities in Morocco. Here is what you need to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyTips.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SectionIcon className="w-6 h-6 text-[var(--color-primary)]" />
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {section.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] mt-1 flex-shrink-0" />
                        <span className="text-sm text-[var(--text-muted)] leading-relaxed">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          3-DAY ITINERARY
          ================================================================= */}
      <section className="py-12 md:py-16">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <Map className="w-6 h-6 text-[var(--color-secondary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              The Perfect 3-Day Rabat Itinerary
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Three days is the ideal amount of time to explore Rabat in depth, including a day trip
            to Casablanca by high-speed train.
          </p>

          <div className="space-y-8">
            {itinerary.map((day) => {
              const DayIcon = day.icon;
              return (
                <div key={day.day} className="card-moroccan p-6 lg:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary)] text-white">
                      <DayIcon className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-accent)]">{day.day}</p>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)]">
                        {day.title}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Morning */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sunrise className="w-4 h-4 text-[var(--color-accent)]" />
                        <h4 className="font-semibold text-[var(--text-primary)]">Morning</h4>
                        <span className="text-xs text-[var(--text-muted)]">{day.morning.time}</span>
                      </div>
                      <div className="space-y-2">
                        {day.morning.activities.map((activity, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Afternoon */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                        <h4 className="font-semibold text-[var(--text-primary)]">Afternoon</h4>
                        <span className="text-xs text-[var(--text-muted)]">{day.afternoon.time}</span>
                      </div>
                      <div className="space-y-2">
                        {day.afternoon.activities.map((activity, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Evening */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Moon className="w-4 h-4 text-[var(--color-accent)]" />
                        <h4 className="font-semibold text-[var(--text-primary)]">Evening</h4>
                        <span className="text-xs text-[var(--text-muted)]">{day.evening.time}</span>
                      </div>
                      <div className="space-y-2">
                        {day.evening.activities.map((activity, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CircleDot className="w-3 h-3 text-[var(--color-accent)] mt-1.5 flex-shrink-0" />
                            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =================================================================
          FAQ
          ================================================================= */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-6 h-6 text-[var(--color-primary)]" />
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl">
            Everything visitors commonly ask about traveling to Rabat.
          </p>

          <div className="space-y-4 max-w-3xl">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          RELATED PAGES
          ================================================================= */}
      <section className="py-20 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-[var(--text-secondary)]">
              Discover more destinations and experiences that pair perfectly with a Rabat visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-6 group flex flex-col items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-50)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-100)] transition-colors">
                  <link.icon className="w-5 h-5 text-[var(--color-accent-dark)]" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-secondary)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {link.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)]">
                  Explore
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          FINAL CTA
          ================================================================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-rabat.webp"
            alt="Rabat skyline with Hassan Tower and the Bouregreg River at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="container-morocco relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Discover Morocco&apos;s Elegant Capital
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Rabat is Morocco at its most refined. The golden glow of the Hassan Tower at sunset, the
              blue-and-white lanes of the Udayas kasbah, the storks circling above Roman ruins at Chellah,
              the hum of a modern tramway connecting ancient neighborhoods. This is a capital city that
              wears its history with grace and faces the future with confidence. Start planning your
              journey to Morocco&apos;s imperial capital today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-accent btn-lg rounded-full"
              >
                <Compass className="w-5 h-5" />
                Plan Your Rabat Trip
              </Link>
              <Link
                href="/cities"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                <Globe className="w-5 h-5" />
                Explore All Cities
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="zellige-border" />
    </>
  );
}
