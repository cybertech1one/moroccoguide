import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wind,
  MapPin,
  Star,
  Waves,
  Clock,
  Users,
  Camera,
  ArrowRight,
  Music,
  Palette,
  UtensilsCrossed,
  Bed,
  Compass,
  Calendar,
  Sun,
  CloudSun,
  Landmark,
  Shield,
  Droplets,
  TreePalm,
  Footprints,
  Bus,
  Plane,
  Car,
  CheckCircle,
  Info,
  Sparkles,
  Globe,
  Sunrise,
  Sunset,
  Fish,
  ShoppingBag,
  Clapperboard,
  BookOpen,
  Heart,
  Mountain,
} from 'lucide-react';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Essaouira City Guide 2025 | Beaches, Gnawa Music, Surfing & Medina | Morocco',
  description:
    'Complete Essaouira travel guide. Explore the Wind City of Morocco with tips on beaches, surfing, kitesurfing, Gnawa music, art galleries, thuya wood crafts, argan oil cooperatives, seafood, riads, and day trips to Sidi Kaouki and Paradise Valley.',
  keywords: [
    'Essaouira travel guide',
    'Essaouira Morocco',
    'Essaouira beaches',
    'Essaouira surfing',
    'Essaouira kitesurfing',
    'Gnawa music Essaouira',
    'Gnawa Festival',
    'Essaouira medina',
    'Essaouira seafood',
    'Essaouira riads',
    'Essaouira art galleries',
    'thuya wood Essaouira',
    'argan oil Morocco',
    'Sidi Kaouki',
    'Essaouira Game of Thrones',
    'Astapor filming location',
    'Skala de la Ville',
    'Essaouira wind city',
    'Morocco Atlantic coast',
    'Essaouira day trips',
    'Paradise Valley Morocco',
    'Diabat ruins Morocco',
    'Essaouira itinerary',
    'Moulay Hassan square',
  ],
  openGraph: {
    title: 'Essaouira City Guide - Morocco\'s Wind City on the Atlantic',
    description:
      'Your complete guide to Essaouira: beaches, Gnawa music, surfing, art galleries, seafood grills, and the most relaxed medina in Morocco.',
    url: 'https://citytoursmorocco.com/essaouira-guide',
    images: [
      {
        url: '/images/hero-essaouira-ramparts.webp',
        width: 1200,
        height: 630,
        alt: 'Essaouira ramparts and Atlantic Ocean at golden hour',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/essaouira-guide' },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Essaouira',
  description:
    'Essaouira is a historic port city on Morocco\'s Atlantic coast known for its 18th-century medina, dramatic ramparts, world-class wind sports, Gnawa music heritage, and thriving arts scene.',
  url: 'https://citytoursmorocco.com/essaouira-guide',
  touristType: ['Beach tourism', 'Cultural tourism', 'Adventure tourism', 'Music tourism'],
  image: '/images/hero-essaouira-ramparts.webp',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.5085,
    longitude: -9.7595,
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
      { '@type': 'ListItem', position: 3, name: 'Essaouira Guide', item: 'https://citytoursmorocco.com/essaouira-guide' },
    ],
  },
};

/* ================================================================
   TOP ATTRACTIONS DATA
   ================================================================ */

const topAttractions = [
  {
    name: 'Skala de la Ville',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: '30-45 min',
    cost: 'Free',
    description:
      'The dramatic sea bastion stretching along the northern cliffs is Essaouira\'s most iconic landmark. Built in the 18th century by Portuguese and Genoese engineers for Sultan Mohammed III, the rampart is lined with a row of Spanish and European bronze cannons still pointing out to sea. The panoramic walkway offers sweeping views of the Atlantic, the Iles Purpuraires offshore, and the medina rooftops. At sunset the light turns the weathered stone walls a deep gold, making this the finest viewpoint in the city. Game of Thrones filmed key Astapor scenes here, and Orson Welles used the ramparts as a backdrop for his adaptation of Othello.',
  },
  {
    name: 'Skala du Port',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: '20-30 min',
    cost: '70 MAD',
    description:
      'The fortified harbor tower guards the entrance to Essaouira\'s working fishing port. Climb the circular stone staircase to the top for a commanding view of the port, the medina walls, and the open Atlantic. The tower houses a small collection of historical artifacts and old naval instruments. Below, the port itself is a sensory experience: fishermen mending nets, seagulls wheeling overhead, and the catch of the day being auctioned at the fish market. The Skala du Port appeared as a key location in Game of Thrones Season 3.',
  },
  {
    name: 'Essaouira Medina (UNESCO)',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: '2-4 hours',
    cost: 'Free',
    description:
      'Unlike the labyrinthine medinas of Fes or Marrakech, Essaouira\'s old city follows a remarkably logical grid pattern, designed in the 1760s by French architect Theodore Cornut for Sultan Mohammed III. The medina is a UNESCO World Heritage Site, recognized for its outstanding example of a late-18th-century fortified city built according to European military architecture principles blended with North African traditions. The result is a compact, walkable quarter of whitewashed buildings with blue shutters, broad straight streets, and a relaxed atmosphere where getting lost is pleasantly difficult.',
  },
  {
    name: 'The Mellah (Jewish Quarter)',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: '45-60 min',
    cost: 'Free',
    description:
      'Essaouira once had one of the largest Jewish communities in Morocco, and the Mellah preserves their legacy. At its peak in the 19th century, Jews made up nearly 40% of the city\'s population and were instrumental in making Essaouira Morocco\'s primary trading port with Europe. The quarter features distinctive architecture with exterior balconies (unusual in Moroccan medinas), the Slat Lkahal Synagogue (recently restored and open to visitors), and the Haim Pinto Synagogue. The adjacent Jewish cemetery outside the city walls is a haunting and beautiful space overlooking the ocean.',
  },
  {
    name: 'Essaouira Beach',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: 'Half day+',
    cost: 'Free',
    description:
      'The vast crescent of golden sand stretching south from the medina is one of Morocco\'s finest beaches. Extending for several kilometers toward the village of Diabat, the beach is wide enough that it never feels crowded, even in peak season. The constant Atlantic wind makes it a world-class destination for kitesurfing and windsurfing, though it can be too breezy for casual sunbathing on some days. Camel rides along the waterline at sunset are a quintessential Essaouira experience. Football matches spring up spontaneously in the late afternoon, and the beach doubles as a thoroughfare for horses, camels, and quad bikes.',
  },
  {
    name: 'The Fishing Port',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: '1-2 hours',
    cost: 'Free',
    description:
      'Essaouira\'s working harbor is one of the most atmospheric ports in all of Morocco. Hundreds of blue wooden fishing boats bob in the sheltered waters, while fishermen repair nets, paint hulls, and unload the day\'s catch. The boatbuilding yard, where traditional wooden trawlers are still constructed by hand using centuries-old techniques, is fascinating to watch. At the port entrance, rows of open-air seafood grills serve the freshest fish in Morocco at astonishingly low prices. Arrive around midday when the boats come in and the grills fire up for the full experience.',
  },
  {
    name: 'Place Moulay Hassan',
    image: '/images/hero-essaouira-ramparts.webp',
    duration: '30 min - 2 hours',
    cost: 'Free',
    description:
      'The main square of Essaouira is the social heart of the city, a broad, sun-drenched plaza connecting the medina to the port. Lined with cafes and restaurants with outdoor terraces, it is the place to sit with a mint tea and watch the world go by. Street musicians often perform here, especially in the evenings, and during the Gnawa Festival in June the square becomes the main concert venue. Unlike Marrakech\'s Jemaa el-Fnaa, Place Moulay Hassan maintains a relaxed, unhurried atmosphere where the hustle is minimal and the people-watching is exceptional.',
  },
];

/* ================================================================
   BEACH & WATER SPORTS DATA
   ================================================================ */

const waterSports = [
  {
    icon: Wind,
    name: 'Kitesurfing',
    season: 'April - September (strongest winds)',
    level: 'Beginner to Advanced',
    cost: '500-800 MAD for a 2-hour lesson',
    description:
      'Essaouira is one of the top kitesurfing destinations in Africa. The consistent Alizee trade winds blow from the north-northeast almost daily from spring through autumn, creating ideal conditions for both learning and advanced riding. The main kite beach is south of the medina toward Diabat, where the wide sandy expanse provides ample launch and landing space. Several professional schools offer IKO-certified instruction with high-quality equipment. Peak wind season runs from June through August when speeds regularly exceed 20 knots.',
    bestSpot: 'The beach south of the medina toward Diabat village',
  },
  {
    icon: Waves,
    name: 'Surfing',
    season: 'September - March (best swells)',
    level: 'Beginner to Intermediate',
    cost: '400-600 MAD for a 2-hour lesson with board',
    description:
      'While Essaouira\'s beach break is not the most powerful in Morocco, it is excellent for beginners and intermediates. The winter months bring consistent Atlantic swells, and the sandy bottom makes wipeouts forgiving. The main surf spot is directly in front of the medina, with additional breaks south toward Sidi Kaouki. For more experienced surfers, nearby Sidi Kaouki (25 km south) offers a reliable point break and reef breaks with larger, more consistent waves. Surf camps and board rentals are abundant along the beachfront.',
    bestSpot: 'Essaouira main beach (beginners), Sidi Kaouki (intermediate)',
  },
  {
    icon: Wind,
    name: 'Windsurfing',
    season: 'April - September',
    level: 'Beginner to Expert',
    cost: '450-700 MAD for a 2-hour lesson',
    description:
      'Essaouira earned its reputation as Morocco\'s "Wind City" largely through windsurfing. The bay provides a natural amphitheater of wind, with the Alizee trades funneling between the Iles Purpuraires and the mainland to create consistent, cross-shore conditions. The flat water inside the bay is perfect for freestyle and beginners, while advanced riders head further out for chop and wave riding. Essaouira hosted World Cup windsurfing events that put the city on the international map, and the tradition of wind sports excellence continues with world-class facilities and instructors.',
    bestSpot: 'The bay between the port and the main beach',
  },
  {
    icon: Footprints,
    name: 'Camel Rides on the Beach',
    season: 'Year-round',
    level: 'All ages and abilities',
    cost: '150-300 MAD for 1 hour',
    description:
      'A sunset camel ride along Essaouira\'s beach is one of the most memorable experiences in Morocco. Several operators station their camels at the southern end of the beach near the river mouth, offering rides ranging from 30 minutes to 2 hours. The longer rides head south toward Diabat and the ruins of Dar Sultan, the abandoned palace where Jimi Hendrix is said to have stayed in 1969. The golden-hour light on the Atlantic, the silhouette of the medina walls, and the rhythmic gait of the camel create a scene of extraordinary beauty.',
    bestSpot: 'Southern end of the beach, near the Oued Ksob river mouth',
  },
];

/* ================================================================
   GNAWA MUSIC SCENE DATA
   ================================================================ */

const gnawaMusicVenues = [
  {
    name: 'Gnaoua World Music Festival',
    type: 'Annual Festival',
    when: 'Late June (4 days)',
    description:
      'The crown jewel of Essaouira\'s cultural calendar and one of the most important music festivals in Africa. Founded in 1998, the Gnaoua Festival draws over 500,000 visitors annually for four days of free open-air concerts in Place Moulay Hassan and along the ramparts. The festival brings together Gnawa master musicians (maalems) with international jazz, blues, and world music artists for unique fusion performances. Past collaborators have included Pat Metheny, Marcus Miller, Damon Albarn, and Maceo Parker. The atmosphere is electric, with the entire medina transformed into a celebration of music, culture, and spiritual tradition.',
  },
  {
    name: 'Dar Gnaoua',
    type: 'Cultural Center & Live Music',
    when: 'Nightly performances',
    description:
      'This intimate cultural space in the heart of the medina is dedicated to preserving and promoting Gnawa music. Nightly performances by local maalems (master musicians) in a traditional setting allow visitors to experience Gnawa music up close, without the festival crowds. The center also hosts workshops where visitors can learn about the guembri (three-stringed bass lute), the qraqeb (metal castanets), and the spiritual significance of the Gnawa trance ceremony (lila). It is the best year-round venue for authentic Gnawa music in Essaouira.',
  },
  {
    name: 'Zaouia Gnawa Spaces',
    type: 'Traditional Sacred Spaces',
    when: 'Seasonal ceremonies',
    description:
      'The zaouias are traditional gathering spaces of the Gnawa brotherhoods scattered throughout the medina. These are where the authentic lila ceremonies take place -- all-night trance rituals involving music, dance, incense, and spirit possession that represent the core spiritual practice of the Gnawa tradition. Some zaouias occasionally open to respectful visitors during non-sacred performances. Ask at your riad or at Dar Gnaoua for information about upcoming events. Attending a genuine lila is one of the most powerful cultural experiences available in Morocco.',
  },
  {
    name: 'Cafe-Restaurants with Live Music',
    type: 'Informal Venues',
    when: 'Evenings, especially weekends',
    description:
      'Several cafes and restaurants around Place Moulay Hassan and in the medina feature live Gnawa and Moroccan music on weekend evenings. Taros Cafe on the square has a rooftop terrace with regular live performances and sunset views over the port. Le Patio on Rue Moulay Rachid hosts musicians in a courtyard setting. The music is often spontaneous -- a group of friends with instruments gathering at a cafe is a common Essaouira evening scene that reflects the city\'s deep musical identity.',
  },
];

/* ================================================================
   ART GALLERIES & THUYA WOOD DATA
   ================================================================ */

const artAndCrafts = [
  {
    name: 'Thuya Wood Workshops',
    icon: TreePalm,
    description:
      'Essaouira is the world center of thuya wood craftsmanship. The thuya tree (Tetraclinis articulata) grows only in the forests around Essaouira and a small area of Malta, making the wood genuinely rare. The gnarled burls of the thuya root produce a richly figured grain with a distinctive cedar-like fragrance that intensifies when polished. Artisans in the Skala de la Ville workshops shape this precious wood into jewelry boxes, chess sets, furniture, sculptures, and decorative objects of extraordinary beauty. Watching the craftsmen work with hand tools in their workshops is a highlight of any medina visit. The cooperative workshops along the rampart offer better prices than tourist-facing shops.',
  },
  {
    name: 'Art Galleries',
    icon: Palette,
    description:
      'Essaouira has earned the nickname "City of Artists" for good reason. The luminous Atlantic light, the relaxed atmosphere, and the affordable cost of living have attracted painters, sculptors, and mixed-media artists from Morocco and around the world for decades. The medina contains dozens of galleries ranging from the established Galerie Damgaard (which launched the careers of many notable Moroccan artists including the self-taught "Gnawa painters") to small independent studios in converted riad spaces. The Association Tilal des Arts Plastiques and the Espace Othello are also worth visiting. Art ranges from traditional Moroccan calligraphy and figurative painting to contemporary installations and street art.',
  },
  {
    name: 'Marquetry & Inlay Work',
    icon: Sparkles,
    description:
      'The most skilled thuya wood artisans practice the art of marquetry, inlaying contrasting woods, mother-of-pearl, ebony, lemonwood, and copper wire into the thuya surface to create geometric patterns of stunning complexity. A single large marquetry box can take weeks of painstaking work. The best pieces are genuine works of art and represent exceptional value compared to similar craftsmanship from European workshops. When purchasing, look for clean inlay lines, smooth surfaces, and a visible maker\'s mark. The Cooperative Artisanale des Marqueteurs on the Avenue de l\'Istiqlal is a reliable source for quality pieces at fixed prices.',
  },
  {
    name: 'Silver Jewelry',
    icon: Star,
    description:
      'Essaouira has a strong tradition of silver jewelry making, influenced by the city\'s historic Jewish community who were renowned silversmiths. Berber-style silver pieces -- fibulas, hand-of-Fatima pendants, chunky bracelets, and rings set with semi-precious stones -- are widely available in the medina. The Jewish silversmiths brought techniques from Andalusia that blended with Berber aesthetic traditions to create a distinctive Essaouira style. Prices are generally fair compared to Marrakech, and the quality of workmanship is high. Several workshops near the Mellah quarter continue the tradition.',
  },
];

/* ================================================================
   ARGAN OIL COOPERATIVES DATA
   ================================================================ */

const arganCooperatives = [
  {
    name: 'Cooperative Marjana',
    location: 'Route d\'Agadir, 30 min from Essaouira',
    description:
      'One of the most established women\'s cooperatives in the Essaouira region. Here you can watch the entire production process from cracking the argan nuts by hand to grinding the roasted kernels on traditional stone mills. The cooperative employs over 60 women from surrounding villages, providing economic independence and preserving traditional knowledge. Their culinary argan oil (made from roasted nuts, with a rich nutty flavor) and cosmetic oil (from raw nuts, lighter and used for skin and hair) are available for purchase at fair-trade prices significantly below what you would pay in a medina shop.',
  },
  {
    name: 'Cooperative Amal',
    location: 'On the road between Essaouira and Marrakech',
    description:
      'A smaller, more intimate cooperative that offers a particularly warm welcome and detailed explanation of the argan oil production process in multiple languages. The women here demonstrate each step and invite visitors to try cracking the notoriously hard argan nuts themselves -- a task that looks simple but requires considerable skill and strength. The cooperative also produces amlou, a delicious paste of argan oil, almonds, and honey that is the Moroccan equivalent of peanut butter and is excellent on bread or crepes. Purchases directly support the women and their families.',
  },
  {
    name: 'Cooperative Tighanimine',
    location: 'Tidzi village, 25 km east of Essaouira',
    description:
      'Winner of the UNESCO recognition for preserving argan oil production traditions. This fair-trade certified cooperative was one of the first to organize women in the argan industry and has become a model for social enterprise across Morocco. The setting in Tidzi village surrounded by argan forests is particularly picturesque, and the cooperative offers a more rural, authentic experience than roadside cooperatives. Their products include pure argan oil, argan-infused cosmetics, and traditional Berber skincare products. The quality is among the best you will find anywhere.',
  },
];

/* ================================================================
   FOOD GUIDE DATA
   ================================================================ */

const mustTryDishes = [
  {
    name: 'Grilled Sardines at the Port',
    price: '25-40 MAD per plate',
    description:
      'The quintessential Essaouira eating experience. At the row of open-air grills just inside the port entrance, choose your fish from the day\'s catch displayed on ice, and it will be grilled over charcoal right in front of you. Sardines are the star -- fat, fresh, and served with nothing more than a squeeze of lemon, a sprinkle of cumin, and warm bread. A plate of sardines with salad and bread costs a fraction of what you would pay at a medina restaurant and tastes infinitely better.',
  },
  {
    name: 'Seafood Tagine',
    price: '80-140 MAD',
    description:
      'Essaouira puts its own spin on the classic Moroccan tagine, replacing the typical lamb or chicken with fresh catches from the Atlantic. Fish tagine with chermoula (a marinade of cilantro, garlic, cumin, paprika, and preserved lemon) is the local specialty, slow-cooked in the conical clay pot until the fish flakes and the sauce reduces to a fragrant, thick gravy. Shrimp, calamari, and mixed seafood versions are also excellent. Every restaurant has its own recipe, but the best versions use the simplest, freshest ingredients.',
  },
  {
    name: 'Fresh Oysters',
    price: '60-100 MAD per dozen',
    description:
      'The oyster beds at Oualidia, south of Essaouira on the Atlantic coast, produce some of the finest oysters in Africa. Several Essaouira restaurants serve Oualidia oysters fresh daily, and they are remarkably affordable by international standards. Served simply with lemon wedges and a mignonette sauce, they are a revelation. The waters of the Oualidia lagoon create perfect conditions for oyster cultivation, and the resulting bivalves are plump, briny, and rival the quality of French oysters at a fraction of the price.',
  },
  {
    name: 'Amlou',
    price: '30-60 MAD per jar',
    description:
      'Essaouira\'s signature spread is a thick paste of locally produced argan oil, roasted almonds, and honey. Sometimes called "Moroccan peanut butter" (though it bears little resemblance), amlou is traditionally served at breakfast with warm msemen flatbread for dipping. The richness of the argan oil, the crunch of the almonds, and the sweetness of the honey create a flavor that is utterly addictive. Buy it at the argan cooperatives for the freshest quality, or enjoy it at any traditional breakfast in the medina.',
  },
  {
    name: 'Spiced Calamari',
    price: '50-90 MAD',
    description:
      'Tender rings of locally caught squid, coated in a spice mixture of cumin, paprika, and black pepper, then flash-fried until crispy. Served with harissa aioli or a simple lemon and salt accompaniment, the calamari at the port grills and in the medina restaurants is superb. The freshness of the squid, often caught the same morning, makes all the difference. This is a perfect accompaniment to a cold Casablanca beer on a warm evening.',
  },
  {
    name: 'Moroccan Fish Chermoula',
    price: '70-120 MAD',
    description:
      'Chermoula is the defining sauce of Essaouira cuisine, a pungent green paste of fresh cilantro, flat-leaf parsley, garlic, cumin, paprika, preserved lemon juice, and olive oil. Fish is marinated in chermoula for several hours, then baked, grilled, or fried. The result is deeply flavorful, herbaceous, and distinctly Moroccan. At the better restaurants, the chermoula is made fresh daily using hand-ground spices. Ask for it on fresh sea bream or sea bass for the best experience.',
  },
];

const topRestaurants = [
  {
    name: 'The Port Grills (Stalls 1-15)',
    cuisine: 'Seafood',
    price: '$',
    description: 'The freshest and cheapest seafood in Essaouira. Choose your fish from the display, agree on a price, and watch it grilled over charcoal. No ambiance to speak of, but the quality-to-price ratio is unbeatable. Stalls closer to the entrance tend to be more aggressive with touts; walk further in for a calmer experience.',
  },
  {
    name: 'La Table by Madada',
    cuisine: 'Modern Moroccan-French',
    price: '$$$',
    description: 'The finest dining in Essaouira, set in a beautifully restored riad with a rooftop terrace overlooking the medina. The menu blends French technique with Moroccan ingredients: think tagine-spiced duck breast, argan oil vinaigrette on local greens, and a spectacular seafood pastilla. Reservations essential for dinner.',
  },
  {
    name: 'Elizir',
    cuisine: 'Mediterranean-Moroccan Fusion',
    price: '$$',
    description: 'A stylish, intimate restaurant run by an Italian-Moroccan couple. The menu changes seasonally, built around the freshest available ingredients. The homemade pasta with chermoula and the grilled catch of the day are standouts. The wine list features an excellent selection of Moroccan wines. Lovely courtyard seating.',
  },
  {
    name: 'Taros Cafe',
    cuisine: 'International with Moroccan influences',
    price: '$$',
    description: 'The most popular social hub in Essaouira, occupying a prime corner of Place Moulay Hassan with a large rooftop terrace that offers panoramic sunset views over the port. Live music on weekends, a well-stocked bar, and a varied menu make it the default gathering place for locals and visitors alike.',
  },
  {
    name: 'Restaurant Les Alizees',
    cuisine: 'Traditional Moroccan seafood',
    price: '$$',
    description: 'A reliable medina stalwart known for its generous portions of traditional Moroccan seafood dishes. The fish tagine with olives and preserved lemon is excellent, and the mixed seafood platter is ideal for sharing. Simple decor, warm service, and honest cooking at fair prices.',
  },
  {
    name: 'Miyame',
    cuisine: 'Japanese-Moroccan Fusion',
    price: '$$',
    description: 'An unexpected and delightful combination: Japanese precision applied to Moroccan ingredients. Fresh sashimi from the morning catch, tempura vegetables from the local market, and creative maki rolls using local spices and argan oil. The minimalist interior is a welcome contrast to the ornate riad aesthetic.',
  },
];

/* ================================================================
   WHERE TO STAY DATA
   ================================================================ */

const accommodations = [
  {
    category: 'Riads (Traditional Guesthouses)',
    icon: Heart,
    properties: [
      {
        name: 'Riad Dar Maya',
        price: '800-1,500 MAD/night',
        description: 'A beautifully restored riad in the heart of the medina with ocean views from the rooftop terrace. Individually decorated rooms blend traditional zellige tilework with modern comfort. The breakfast, served on the terrace, is exceptional.',
      },
      {
        name: 'Dar Loulema',
        price: '600-1,200 MAD/night',
        description: 'A boutique riad with just five rooms, ensuring personal attention. The central courtyard features a small plunge pool and orange trees. Located on a quiet derb a few minutes walk from Place Moulay Hassan.',
      },
      {
        name: 'Riad Baladin',
        price: '500-1,000 MAD/night',
        description: 'Excellent value in the medina with a warm, family-run atmosphere. Rooms are simple but spotless, with traditional decor. The rooftop terrace has panoramic views of the medina and the sea.',
      },
    ],
  },
  {
    category: 'Beachfront Hotels',
    icon: Waves,
    properties: [
      {
        name: 'Sofitel Essaouira Mogador Golf & Spa',
        price: '2,500-5,000 MAD/night',
        description: 'The most luxurious option in Essaouira, located south of the medina with direct beach access, an 18-hole golf course designed by Gary Player, a full-service spa, and multiple restaurants. The architecture pays homage to Mogador\'s Portuguese heritage.',
      },
      {
        name: 'Hotel Atlas Essaouira',
        price: '1,200-2,500 MAD/night',
        description: 'A comfortable four-star option on the beach with a pool, ocean-view rooms, and a good restaurant. Walking distance to the medina but with the convenience of beachfront amenities.',
      },
      {
        name: 'Le Medina Essaouira Hotel Thalassa Sea & Spa',
        price: '1,800-3,500 MAD/night',
        description: 'A MGallery Collection property built into the medina walls with direct views over the Atlantic. The thalassotherapy spa uses seawater treatments. The location, straddling the medina and the ocean, is unbeatable.',
      },
    ],
  },
  {
    category: 'Hostels & Budget',
    icon: Users,
    properties: [
      {
        name: 'Essaouira Youth Hostel & Social Travel',
        price: '100-200 MAD/night (dorm), 300-500 MAD (private)',
        description: 'A well-run hostel in the medina with clean dorms, a communal kitchen, and a rooftop terrace. The social atmosphere makes it easy to find surf buddies or travel companions. Free walking tours organized weekly.',
      },
      {
        name: 'The Chill Art Hostel',
        price: '120-220 MAD/night (dorm), 350-550 MAD (private)',
        description: 'An artsy hostel decorated with work by local artists. Surfboard storage available. Regular communal dinners and a lively common area. Located near the beach entrance for easy surf access.',
      },
      {
        name: 'Dar Kenavo',
        price: '150-250 MAD/night (dorm), 400-600 MAD (private)',
        description: 'A French-Moroccan run guesthouse that straddles the line between hostel and budget riad. Cozy rooms with character, a lovely breakfast, and genuinely helpful hosts who go above and beyond to arrange activities and day trips.',
      },
    ],
  },
];

/* ================================================================
   DAY TRIPS DATA
   ================================================================ */

const dayTrips = [
  {
    name: 'Sidi Kaouki',
    distance: '25 km south (30 min drive)',
    icon: Waves,
    description:
      'A laid-back surf village that has retained its bohemian character despite growing popularity. The beach is wilder and less windy than Essaouira, with a reliable point break that draws surfers from around the world. The village has a handful of excellent surf camps, casual restaurants, and a timeless quality that Essaouira itself has begun to lose. The marabout (saint\'s shrine) of Sidi Kaouki sits on the rocks at the north end of the beach and is a photogenic landmark. Stay for lunch at one of the beachfront cafes serving fresh fish and Berber omelettes.',
    highlights: ['Consistent surf breaks for all levels', 'Marabout shrine on the rocks', 'Relaxed bohemian village atmosphere', 'Horseback riding along the beach'],
  },
  {
    name: 'Paradise Valley',
    distance: '80 km southeast (1.5 hours)',
    icon: Mountain,
    description:
      'A series of stunning natural rock pools and waterfalls hidden in a palm-lined canyon in the foothills of the Atlas Mountains. The turquoise pools, carved into smooth red rock over millennia, are surrounded by lush palm trees and oleander bushes, creating an oasis landscape that feels impossibly exotic. Swimming in the cool mountain water after the heat of the coast is blissful. Local Berber families operate small cafes along the pools serving mint tea and tagines. The valley gained fame when it was reportedly visited by Jimi Hendrix in the late 1960s, though the historical evidence is debated.',
    highlights: ['Natural turquoise rock pools for swimming', 'Cliff jumping at various heights', 'Palm-lined canyon scenery', 'Traditional Berber cafes along the pools'],
  },
  {
    name: 'The Argan Goat Trees',
    distance: '30-50 km on the road to Marrakech',
    icon: TreePalm,
    description:
      'One of Morocco\'s most surreal sights: goats perched in the branches of argan trees, munching on the fruit. The argan tree\'s fruit is irresistible to goats, who have learned to climb the gnarled branches to reach it. While some roadside "goat tree" displays are staged by locals hoping for tips from passing tourists, genuinely wild goat-in-tree sightings are still common along the road between Essaouira and Marrakech, particularly in the morning. The practice is part of the argan ecosystem: goats eat the fruit, digest the flesh, and excrete the hard argan nuts, which are then collected for oil production.',
    highlights: ['Goats naturally climbing argan trees', 'Photo opportunities along the road', 'Combined with argan cooperative visits', 'Best seen in the morning along the N8 highway'],
  },
  {
    name: 'Diabat & the Ruins of Dar Sultan',
    distance: '5 km south (walkable along the beach)',
    icon: Landmark,
    description:
      'A short walk along the beach south of Essaouira leads to the village of Diabat and the atmospheric ruins of Dar Sultan, an 18th-century palace built by Sultan Mohammed III that was abandoned when sand dunes began engulfing it. The crumbling walls rising from the dunes create a hauntingly photogenic scene, especially at sunset. Diabat is famous for its association with Jimi Hendrix, who visited in 1969 and reportedly considered buying land here. While the Hendrix connection is partly myth, the village retains a sleepy, creative atmosphere. The Borj el Berod watchtower nearby is another striking ruin worth photographing.',
    highlights: ['Ruins of Dar Sultan palace in the sand dunes', 'Jimi Hendrix cultural connection', 'Borj el Berod watchtower', 'Beautiful beach walk from the medina'],
  },
];

/* ================================================================
   GAME OF THRONES DATA
   ================================================================ */

const gotLocations = [
  {
    scene: 'Astapor and the Unsullied Army',
    season: 'Season 3',
    location: 'Skala de la Ville (sea bastion)',
    description:
      'The Skala de la Ville\'s ramparts and cannons served as the backdrop for the slave city of Astapor, where Daenerys Targaryen acquired her army of Unsullied soldiers. The iconic "Dracarys" scene, in which Daenerys commands her dragon to burn the slave master Kraznys mo Nakloz, was filmed on these very ramparts. The crenellated walls, weathered stone, and dramatic ocean backdrop required minimal set dressing to transform into the fictional Slaver\'s Bay city. Walking the ramparts, fans will recognize the exact angles and perspectives used in the show.',
  },
  {
    scene: 'Slaver\'s Bay Marketplace',
    season: 'Season 3',
    location: 'Medina streets and port area',
    description:
      'Several scenes depicting the marketplaces and streets of Astapor were filmed in Essaouira\'s medina alleyways and around the port. The grid-like layout of the medina, unusual for a Moroccan city, lent itself well to the production\'s needs. The blue and white color scheme of the buildings was digitally altered in post-production to create the sunbaked, sandy tones of Slaver\'s Bay. Keen-eyed fans will recognize certain archways and passages, particularly near the Skala du Port.',
  },
  {
    scene: 'The Walk of Punishment',
    season: 'Season 3, Episode 3',
    location: 'Skala du Port and surrounding walls',
    description:
      'The scenes depicting the "Walk of Punishment" in Astapor, where crucified slaves line the road as Daenerys and her retinue pass, used the fortified walls around the port area. The production team added wooden crosses and digital effects to transform the Portuguese-era fortifications into the brutal spectacle of Astapor. The episode is considered one of the pivotal moments in Daenerys\'s storyline, and Essaouira\'s dramatic stone architecture provided the perfect stage for the scene\'s moral weight.',
  },
];

/* ================================================================
   PRACTICAL TIPS DATA
   ================================================================ */

const practicalTips = [
  {
    icon: Wind,
    title: 'Pack for the Wind',
    description:
      'The wind is relentless, especially from April through September. Bring a windbreaker or light jacket even in summer. Scarves double as wind protection and sun shields. Avoid umbrellas, as they are useless in the Alizee gusts.',
  },
  {
    icon: Camera,
    title: 'Photography Golden Hours',
    description:
      'The best light for photography hits the ramparts and medina at sunrise and the hour before sunset. The fishing port is most photogenic mid-morning when boats return with the catch. Always ask permission before photographing people, especially fishermen at work.',
  },
  {
    icon: Shield,
    title: 'Safety & Hassle',
    description:
      'Essaouira is one of the safest cities in Morocco for travelers. The medina hassle factor is significantly lower than Marrakech or Fes. Touts exist near the port grills and at Moulay Hassan square, but a polite "la, shukran" (no, thank you) is sufficient. The beach is safe during daylight but avoid isolated stretches after dark.',
  },
  {
    icon: Globe,
    title: 'Languages',
    description:
      'Arabic and French are the primary languages. English is widely spoken in tourism-facing businesses. Many shopkeepers and riad owners speak Spanish, German, or Italian as well. Learning a few Arabic phrases (salam alaikum, shukran, bslama) earns genuine warmth from locals.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Bargaining',
    description:
      'Essaouira shops generally have more reasonable starting prices than Marrakech, and the bargaining culture is less aggressive. For thuya wood, argan oil, and silver, compare prices at the cooperatives before buying in the medina. Fixed-price shops exist and are clearly marked.',
  },
  {
    icon: Droplets,
    title: 'Water & Health',
    description:
      'Drink bottled water. The tap water is technically treated but can cause digestive issues for visitors. Pharmacies in the medina are well-stocked. The nearest hospital is in the new town (Ville Nouvelle). Travel insurance with medical evacuation coverage is always recommended.',
  },
];

/* ================================================================
   GETTING THERE & AROUND DATA
   ================================================================ */

const transportOptions = [
  {
    icon: Plane,
    method: 'By Air',
    description:
      'Essaouira-Mogador Airport (ESU) is located 16 km south of the city. Ryanair operates direct flights from several European cities including London Stansted, Paris Beauvais, and Brussels Charleroi, typically during the spring and summer season. Royal Air Maroc and domestic carriers operate limited connections to Casablanca. The airport is small but efficient. Taxis to the medina cost approximately 150-200 MAD (agree on the price before departing). A transfer through your riad is often the most convenient option.',
  },
  {
    icon: Bus,
    method: 'By Bus from Marrakech',
    description:
      'The most common way to reach Essaouira. CTM and Supratours operate comfortable, air-conditioned buses from Marrakech with multiple daily departures. The journey takes approximately 2.5-3 hours via the N8 highway through the scenic argan country. CTM buses depart from the Marrakech CTM station near Jemaa el-Fnaa, while Supratours buses leave from the Marrakech train station. Tickets cost approximately 80-100 MAD each way. Book in advance during peak season and holidays. The Essaouira bus station (Gare Routiere) is a 15-minute walk from the medina, or a short petit taxi ride.',
  },
  {
    icon: Car,
    method: 'By Rental Car or Private Transfer',
    description:
      'The drive from Marrakech takes approximately 2.5 hours on the well-maintained N8 highway, passing through the argan forests and the town of Chichaoua. The route is straightforward and scenic, with the argan goat trees often visible along the way. A private transfer from Marrakech costs approximately 600-1,000 MAD for the car (not per person). Within Essaouira, a car is unnecessary and often a hindrance, as the medina is entirely pedestrian and parking is limited. Leave your rental car at the secure parking lot near Bab Doukkala.',
  },
  {
    icon: Compass,
    method: 'Getting Around Essaouira',
    description:
      'Essaouira is a wonderfully walkable city. The medina is compact enough to cross in 15 minutes on foot, and the beach is just steps from the city walls. Blue petit taxis are available for trips beyond the medina, with short rides costing 7-15 MAD. For day trips to Sidi Kaouki or the argan cooperatives, you can hire a grand taxi (negotiate the price first, expect 200-400 MAD round trip) or book through your accommodation. Bicycle and scooter rentals are available near Bab Doukkala for exploring the coastal road.',
  },
];

/* ================================================================
   BEST TIME TO VISIT DATA
   ================================================================ */

const seasons = [
  {
    icon: Sun,
    season: 'Spring (March - May)',
    temp: '16-22 C',
    wind: 'Moderate',
    crowds: 'Low to Moderate',
    description:
      'The sweet spot for most visitors. Warm days, manageable wind, and the city is not yet at peak capacity. Wildflowers bloom in the countryside, and the argan trees are lush. Excellent for beach walks and sightseeing, though the water is still cool for swimming. The shoulder season means better riad rates and a more local atmosphere.',
  },
  {
    icon: Wind,
    season: 'Summer (June - August)',
    temp: '20-28 C',
    wind: 'Strong (Alizee trades)',
    crowds: 'High (peak for wind sports)',
    description:
      'The wind sport high season. The Alizee trade winds blow consistently and strongly, making Essaouira a mecca for kitesurfers and windsurfers. The Gnaoua World Music Festival in late June brings massive crowds and an incredible atmosphere. Temperatures are kept pleasant by the ocean breeze when the rest of Morocco swelters. Book accommodation well in advance for June and July.',
  },
  {
    icon: CloudSun,
    season: 'Autumn (September - November)',
    temp: '18-25 C',
    wind: 'Decreasing',
    crowds: 'Moderate',
    description:
      'Another excellent time to visit. The wind eases, the ocean is at its warmest for swimming, and the summer crowds thin out. September and October offer some of the best all-around conditions: warm enough for the beach, calm enough for comfortable sightseeing, and quiet enough to have the medina more to yourself. Surf conditions begin to improve as Atlantic swells build.',
  },
  {
    icon: Droplets,
    season: 'Winter (December - February)',
    temp: '10-18 C',
    wind: 'Variable',
    crowds: 'Low',
    description:
      'The quietest season, with the most authentic local atmosphere. Temperatures are mild by European winter standards but cool by Moroccan standards, and occasional rain is possible. The medina has a cozy, intimate character. Surf conditions are at their best with consistent Atlantic swells. Accommodation prices are at their lowest, and you will have many attractions largely to yourself. Pack layers for cool evenings.',
  },
];

/* ================================================================
   2-DAY ITINERARY DATA
   ================================================================ */

const itinerary = [
  {
    day: 'Day 1: Medina, Ramparts & Seafood',
    slots: [
      {
        time: '9:00 AM',
        activity: 'Breakfast at your riad',
        description: 'Start with a traditional Moroccan breakfast of msemen flatbread with amlou (argan, almond, and honey spread), fresh orange juice, and mint tea on the rooftop terrace.',
      },
      {
        time: '10:00 AM',
        activity: 'Skala de la Ville & Rampart Walk',
        description: 'Walk the full length of the sea bastion, admiring the cannons, the ocean views, and the Game of Thrones filming locations. Continue along the medina walls for panoramic views.',
      },
      {
        time: '11:00 AM',
        activity: 'Medina Exploration & Thuya Workshops',
        description: 'Wander the medina\'s grid-like streets, visiting the thuya wood workshops along the ramparts, browsing art galleries, and exploring the Mellah quarter and its restored synagogues.',
      },
      {
        time: '12:30 PM',
        activity: 'Lunch at the Port Grills',
        description: 'Head to the fishing port and choose your fish from the open-air stalls. Grilled sardines, prawns, calamari, and sea bream with bread, salad, and a cold drink for an unbeatable price.',
      },
      {
        time: '2:00 PM',
        activity: 'Fishing Port & Boatyard',
        description: 'Explore the working port, watching fishermen, net-menders, and traditional boatbuilders. Visit the Skala du Port for elevated views of the harbor and the city walls.',
      },
      {
        time: '3:30 PM',
        activity: 'Art Galleries & Shopping',
        description: 'Visit the Galerie Damgaard and independent studios. Browse for silver jewelry, argan oil products, and handcrafted thuya wood souvenirs. Prices are more reasonable than Marrakech.',
      },
      {
        time: '5:30 PM',
        activity: 'Sunset from the Ramparts',
        description: 'Return to the Skala de la Ville or find a spot on the city walls to watch the Atlantic sunset paint the sky. The golden light on the weathered stone is unforgettable.',
      },
      {
        time: '7:00 PM',
        activity: 'Dinner at La Table by Madada',
        description: 'Enjoy fine Moroccan-French cuisine on the rooftop terrace. Alternatively, head to Taros Cafe on Place Moulay Hassan for dinner with live Gnawa music on the rooftop.',
      },
    ],
  },
  {
    day: 'Day 2: Beach, Day Trip & Culture',
    slots: [
      {
        time: '8:30 AM',
        activity: 'Early Morning Beach Walk',
        description: 'Walk south along the beach toward Diabat before the wind picks up. The morning light on the water is spectacular, and the beach is nearly deserted at this hour.',
      },
      {
        time: '10:00 AM',
        activity: 'Argan Cooperative Visit',
        description: 'Drive 30 minutes to an argan cooperative to watch the traditional oil production process, sample amlou, and purchase high-quality argan products at fair-trade prices directly from the women who make them.',
      },
      {
        time: '12:00 PM',
        activity: 'Sidi Kaouki or Paradise Valley',
        description: 'Option A: Continue south to Sidi Kaouki for a surf lesson or a relaxed beach lunch. Option B: Head inland to Paradise Valley for swimming in the natural rock pools (allow more time for this option).',
      },
      {
        time: '3:00 PM',
        activity: 'Return to Essaouira, Water Sports',
        description: 'Back in Essaouira, try a kitesurfing or windsurfing lesson on the main beach, or take a camel ride along the waterline as the afternoon light softens.',
      },
      {
        time: '5:00 PM',
        activity: 'Place Moulay Hassan',
        description: 'Settle into a cafe terrace on the main square for mint tea and pastries. Watch the street musicians and the promenade of locals enjoying the evening air.',
      },
      {
        time: '6:30 PM',
        activity: 'Gnawa Music Experience',
        description: 'Visit Dar Gnaoua for a live performance of traditional Gnawa music, or check the schedule at Taros Cafe and other venues for evening concerts.',
      },
      {
        time: '8:00 PM',
        activity: 'Farewell Dinner',
        description: 'A final seafood dinner at Elizir or Restaurant Les Alizees, savoring the flavors of chermoula, fresh fish, and locally produced wine. Toast to Essaouira\'s timeless magic.',
      },
    ],
  },
];

/* ================================================================
   RELATED PAGES DATA
   ================================================================ */

const relatedPages = [
  {
    title: 'Beaches of Morocco',
    href: '/beaches',
    description: 'Explore all of Morocco\'s best coastal destinations.',
  },
  {
    title: 'Water Sports Guide',
    href: '/water-sports',
    description: 'Surfing, kitesurfing, and diving across Morocco.',
  },
  {
    title: 'Moroccan Music & Festivals',
    href: '/music',
    description: 'Gnawa, Andalusian, Berber, and contemporary music scenes.',
  },
  {
    title: 'Morocco Filming Locations',
    href: '/filming-locations',
    description: 'Game of Thrones, Gladiator, and Hollywood in Morocco.',
  },
  {
    title: 'Medina Navigation Guide',
    href: '/medina-guide',
    description: 'How to navigate Morocco\'s ancient walled cities.',
  },
  {
    title: 'Moroccan Cuisine Guide',
    href: '/cuisine',
    description: 'The complete guide to Morocco\'s world-class food scene.',
  },
  {
    title: 'Argan Oil Guide',
    href: '/argan-oil',
    description: 'Everything about Morocco\'s liquid gold.',
  },
  {
    title: 'Morocco Crafts & Souvenirs',
    href: '/crafts',
    description: 'What to buy and where to find the best artisan work.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function EssaouiraGuidePage() {
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
            src="/images/hero-essaouira-ramparts.webp"
            alt="Essaouira fortified ramparts overlooking the Atlantic Ocean at golden hour"
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
            <span className="text-white">Essaouira Guide</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Complete City Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Essaouira: Morocco&apos;s Wind City on the Atlantic
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A fortified port city where Atlantic breezes carry the sound of Gnawa music through
              whitewashed streets, world-class surfing meets fresh-grilled sardines, and the
              most relaxed medina in Morocco invites you to slow down and stay awhile.
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
              <Wind className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Wind City on the Atlantic
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Where Portuguese ramparts meet Gnawa rhythms, and the Atlantic wind shapes everything
              from the waves to the culture.
            </p>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Essaouira occupies a unique place in Morocco. Known historically as Mogador, this fortified
              Atlantic port city was designed in the 1760s by Sultan Mohammed III as Morocco&apos;s window
              to the world &mdash; a cosmopolitan trading hub where Berbers, Arabs, Jews, Europeans, and
              sub-Saharan Africans lived and traded side by side. That legacy of openness and cultural
              mixing persists today, giving Essaouira a character unlike any other Moroccan city: relaxed
              where Marrakech is frenetic, bohemian where Fes is scholarly, and coastal where the imperial
              cities are landlocked.
            </p>
            <p>
              The constant Atlantic wind is the defining feature of life in Essaouira. The Alizee trade
              winds blow from the north-northeast for much of the year, cooling the city when the rest
              of Morocco bakes in summer heat and creating world-class conditions for kitesurfing and
              windsurfing. The wind shapes the thuya trees into gnarled sculptures, drives the fishing
              boats in and out of the harbor, and gives the city its historic nickname: the &quot;Wind
              City of Africa.&quot;
            </p>
            <p>
              Yet Essaouira is far more than a wind sports destination. Its UNESCO-listed medina is the
              most approachable in Morocco, with a logical grid layout that makes navigation intuitive.
              Its Gnawa music tradition, rooted in the spiritual practices of sub-Saharan African
              descendants, has made it a globally significant cultural capital. Its art scene, centered
              on the luminous Atlantic light and the rare thuya wood, rivals cities many times its size.
              And its food, built on the freshest Atlantic seafood grilled over charcoal at the port,
              is among the best and most affordable in the country.
            </p>
            <p>
              Whether you come for the waves, the music, the art, or simply to escape the intensity of
              Marrakech (just 2.5 hours away), Essaouira has a way of extending your stay. Many visitors
              arrive planning a day trip and end up spending a week. Some never leave at all.
            </p>
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
              Top Attractions in Essaouira
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the dramatic ramparts to the bustling fishing port, these are the essential
              experiences that define the Wind City.
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
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/95 text-[var(--text-primary)] px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {attraction.duration}
                    </span>
                    <span className="bg-[var(--color-accent)]/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {attraction.cost}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                    {attraction.name}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beach & Water Sports ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Waves className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beach &amp; Water Sports
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Atlantic wind that defines Essaouira makes it one of Africa&apos;s premier
              destinations for wind-powered water sports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waterSports.map((sport) => {
              const Icon = sport.icon;
              return (
                <article key={sport.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {sport.name}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-full font-medium">
                          {sport.season}
                        </span>
                        <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-medium">
                          {sport.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                    {sport.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                    <span className="text-[var(--text-secondary)] font-medium">Best spot: {sport.bestSpot}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <ShoppingBag className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-[var(--text-secondary)] font-medium">{sport.cost}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gnawa Music Scene ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Music className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Gnawa Music Scene
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essaouira is the spiritual home of Gnawa music, a powerful tradition rooted in the
              experience of sub-Saharan Africans brought to Morocco centuries ago.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Understanding Gnawa Music
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Gnawa music is a rich spiritual tradition that blends sub-Saharan African rhythms,
                  Berber melodies, and Sufi Islamic devotional practices into a hypnotic, trance-inducing
                  art form. Its origins trace back to West African slaves and their descendants who were
                  brought to Morocco from the regions of modern-day Mali, Guinea, and Ghana. Over
                  centuries, they developed a unique musical and spiritual practice that syncretized
                  their African ancestral beliefs with Moroccan Islam.
                </p>
                <p>
                  The central instrument is the guembri (also spelled sintir or hajhuj), a three-stringed
                  bass lute with a body carved from a single log and covered in camel skin. The maalem
                  (master musician) plays the guembri while singing invocations that call upon spiritual
                  entities (mluk). The ensemble is completed by the metallic clacking of qraqeb (large
                  iron castanets) and communal chanting. In 2019, UNESCO inscribed Gnawa music on its
                  Representative List of the Intangible Cultural Heritage of Humanity, recognizing its
                  global significance.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {gnawaMusicVenues.map((venue) => (
              <article key={venue.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-medium">
                    {venue.type}
                  </span>
                  <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-full font-medium">
                    {venue.when}
                  </span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mt-3 mb-3">
                  {venue.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {venue.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Art Galleries & Thuya Wood ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Palette className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Art Galleries &amp; Thuya Wood Crafts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essaouira&apos;s thriving arts scene and its world-renowned thuya wood craftsmanship
              make it Morocco&apos;s creative capital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {artAndCrafts.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Argan Oil Cooperatives ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Droplets className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Argan Oil Cooperative Visits
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The Essaouira region is the heartland of the argan tree, and women&apos;s cooperatives
              offer a fascinating window into the production of Morocco&apos;s &quot;liquid gold.&quot;
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Why Visit a Cooperative?
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Argan oil is produced exclusively in southwest Morocco, in a UNESCO-designated
                  Biosphere Reserve centered on the Essaouira region. The argan tree (Argania spinosa)
                  has survived since the Tertiary period and is one of the oldest tree species on Earth.
                  The oil extracted from its nuts is used in cooking (culinary grade, with a rich, nutty
                  flavor) and in cosmetics (cosmetic grade, prized for its anti-aging and moisturizing
                  properties).
                </p>
                <p>
                  Women&apos;s cooperatives were established in the 1990s to ensure fair compensation
                  and working conditions for the women who traditionally produced argan oil. Visiting
                  a cooperative allows you to see the labor-intensive process firsthand: cracking the
                  incredibly hard nuts by hand, roasting the kernels for culinary oil, grinding them on
                  stone mills, and hand-pressing the paste to extract the precious oil. One liter of
                  argan oil requires the fruit of approximately 30 kilograms of argan nuts and about
                  15 hours of labor, which explains its premium price.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {arganCooperatives.map((coop) => (
              <article key={coop.name} className="card-moroccan p-6 md:p-8">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {coop.name}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{coop.location}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  {coop.description}
                </p>
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
              Food Guide: Essaouira&apos;s Best Eats
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From the legendary port grills to refined medina restaurants, Essaouira is one of
              Morocco&apos;s finest food cities, built on the freshest Atlantic seafood.
            </p>
          </div>

          {/* Must-Try Dishes */}
          <div className="mb-16">
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-8 text-center">
              Must-Try Dishes
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mustTryDishes.map((dish) => (
                <article key={dish.name} className="card-moroccan p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {dish.name}
                    </h4>
                    <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {dish.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Top Restaurants */}
          <div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-8 text-center">
              Top Restaurants
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRestaurants.map((restaurant) => (
                <article key={restaurant.name} className="card-moroccan p-6">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-medium">
                      {restaurant.cuisine}
                    </span>
                    <span className="text-sm font-bold text-[var(--color-gold)]">
                      {restaurant.price}
                    </span>
                  </div>
                  <h4 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mt-3 mb-3">
                    {restaurant.name}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {restaurant.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Where to Stay ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay in Essaouira
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From traditional riads in the medina to beachfront luxury and budget-friendly hostels,
              Essaouira offers excellent accommodation at every price point.
            </p>
          </div>

          <div className="space-y-12">
            {accommodations.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-[var(--color-accent)]/10">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.properties.map((property) => (
                      <article key={property.name} className="card-moroccan p-6">
                        <h4 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                          {property.name}
                        </h4>
                        <span className="inline-block text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-1 rounded-full font-medium mb-3">
                          {property.price}
                        </span>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {property.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Day Trips from Essaouira
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From surf villages and hidden waterfalls to goat-filled argan trees and crumbling
              palaces in the sand dunes.
            </p>
          </div>

          <div className="space-y-8">
            {dayTrips.map((trip) => {
              const Icon = trip.icon;
              return (
                <article key={trip.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0">
                      <div className="p-3 rounded-xl bg-[var(--color-accent)]/10">
                        <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {trip.name}
                        </h3>
                        <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-full font-medium">
                          {trip.distance}
                        </span>
                      </div>
                      <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                        {trip.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {trip.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Game of Thrones ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Clapperboard className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essaouira for Game of Thrones Fans
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essaouira became the slave city of Astapor in Season 3, home of the Unsullied and the
              stage for one of the most iconic scenes in television history.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {gotLocations.map((location) => (
              <article key={location.scene} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full font-medium">
                    {location.season}
                  </span>
                  <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full font-medium inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {location.location}
                  </span>
                </div>
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {location.scene}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {location.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/filming-locations"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors font-semibold"
            >
              Explore all Morocco filming locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Getting There & Around ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Bus className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting There &amp; Around
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              How to reach Essaouira and navigate the city once you arrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {transportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <article key={option.method} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {option.method}
                    </h3>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {option.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Practical Tips for Visiting Essaouira
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essential advice to make the most of your time in the Wind City.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {practicalTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <article key={tip.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {tip.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Time to Visit Essaouira
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Essaouira is a year-round destination, but each season offers a different experience.
              The Gnaoua Festival in June is the single biggest draw.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {seasons.map((season) => {
              const Icon = season.icon;
              return (
                <article key={season.season} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[var(--color-gold)]/10 shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-full font-medium">
                          {season.temp}
                        </span>
                        <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-medium">
                          Wind: {season.wind}
                        </span>
                        <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-1 rounded-full font-medium">
                          Crowds: {season.crowds}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {season.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-gold)]">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-[var(--color-gold)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    Gnaoua World Music Festival (Late June)
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    If your dates are flexible, plan your visit around the Gnaoua Festival. It is
                    the single most powerful cultural event in Essaouira and one of the most important
                    music festivals in Africa. Free concerts in Place Moulay Hassan, fusion performances
                    by international artists, and a citywide atmosphere of celebration make it an
                    extraordinary experience. Book accommodation at least 2-3 months in advance, as
                    the city fills completely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2-Day Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              2-Day Essaouira Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A carefully paced itinerary that covers the essential Essaouira experience without
              rushing. Adjust based on wind conditions and your interests.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {itinerary.map((day) => (
              <div key={day.day}>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                  <span className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10">
                    <Calendar className="w-5 h-5 text-[var(--color-accent)]" />
                  </span>
                  {day.day}
                </h3>
                <div className="space-y-4">
                  {day.slots.map((slot) => (
                    <div key={slot.time} className="card-moroccan p-5 flex gap-4">
                      <div className="shrink-0 w-20 text-center">
                        <span className="text-sm font-bold text-[var(--color-accent)]">
                          {slot.time}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[var(--text-primary)] mb-1">
                          {slot.activity}
                        </h4>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                          {slot.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Exploring Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into the topics that make Essaouira and Morocco unforgettable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:border-[var(--color-accent)] transition-colors"
              >
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] font-semibold">
                  Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
