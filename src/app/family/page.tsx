import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Baby,
  Shield,
  MapPin,
  Star,
  Sun,
  Waves,
  UtensilsCrossed,
  Camera,
  TreePine,
  DollarSign,
  Luggage,
  Clock,
  Heart,
  Users,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Footprints,
  ThermometerSun,
  Utensils,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Family Travel Morocco | Kid-Friendly Activities, Itineraries & Tips',
  description:
    'Plan the perfect family vacation in Morocco. Discover kid-friendly activities, family-friendly riads, safety tips, packing lists, and a 10-day itinerary for traveling with children.',
  keywords: [
    'morocco family travel',
    'morocco with kids',
    'family vacation morocco',
    'kid friendly morocco',
    'marrakech family',
    'agadir family beach',
    'morocco family itinerary',
    'morocco safe for families',
    'family riad morocco',
    'morocco activities children',
  ],
  openGraph: {
    title: 'Family Travel Morocco | Kid-Friendly Activities & Itineraries',
    description:
      'Plan the perfect family vacation in Morocco with kid-friendly activities, accommodations, and expert tips.',
    url: 'https://citytoursmorocco.com/family',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Family enjoying camel ride in Morocco',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAction',
  name: 'Family Travel in Morocco',
  description:
    'A comprehensive guide to family travel in Morocco, including kid-friendly activities, accommodations, safety tips, and itineraries.',
  url: 'https://citytoursmorocco.com/family',
  location: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const familyCities = [
  {
    name: 'Marrakech',
    description:
      'The vibrant Red City is endlessly exciting for kids. The Jemaa el-Fnaa square is a sensory playground of snake charmers, acrobats, and fresh orange juice stalls. The medina souks feel like an adventure treasure hunt, and the numerous gardens provide peaceful breaks.',
    highlights: ['Jemaa el-Fnaa entertainment', 'Majorelle Garden', 'Horse carriage rides', 'Medina treasure hunts'],
    ageRange: 'All ages',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Agadir',
    description:
      'Morocco\'s premier beach resort city is purpose-built for family holidays. The long sandy beach has gentle waves, the promenade is stroller-friendly, and the modern infrastructure means familiar comforts are readily available. Nearby attractions include Crocoparc and Paradise Valley.',
    highlights: ['Safe sandy beaches', 'Crocoparc Agadir', 'Paradise Valley', 'Modern resort infrastructure'],
    ageRange: 'All ages',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Essaouira',
    description:
      'The laid-back coastal town is a fantastic family destination. Kids love the fishing harbor, the beach is wide and walkable, the medina is compact and safe, and the overall pace is relaxed. Perfect for families who prefer a slower tempo.',
    highlights: ['Wide sandy beach', 'Compact safe medina', 'Fishing harbor', 'Windsurfing for teens'],
    ageRange: 'All ages',
    image: '/images/hero-coastal.webp',
  },
];

const familyActivities = [
  {
    icon: Sun,
    title: 'Camel Riding',
    description: 'Short camel rides in Marrakech palm groves or along the beach in Essaouira. Kids adore the experience and the camels are gentle and well-trained.',
    location: 'Marrakech, Essaouira, Merzouga',
    ageRange: '3+',
  },
  {
    icon: Waves,
    title: 'Beach Days',
    description: 'Agadir\'s long sandy beach has gentle waves perfect for little ones. Essaouira and Legzira offer more adventurous beach experiences for older kids.',
    location: 'Agadir, Essaouira, Legzira',
    ageRange: 'All ages',
  },
  {
    icon: UtensilsCrossed,
    title: 'Family Cooking Class',
    description: 'Kids love getting hands-on making bread, rolling couscous, and decorating Moroccan pastries. Many cooking schools offer child-specific classes.',
    location: 'Marrakech, Fes, Essaouira',
    ageRange: '5+',
  },
  {
    icon: Camera,
    title: 'Pottery Workshop',
    description: 'Work with local potters to shape and paint traditional Moroccan ceramics. Kids get to keep their creations as souvenirs.',
    location: 'Fes, Safi, Marrakech',
    ageRange: '4+',
  },
  {
    icon: TreePine,
    title: 'Crocoparc Agadir',
    description: 'A beautifully landscaped park with over 300 Nile crocodiles, plus a cactus garden, playground, and educational exhibits. One of Morocco\'s best family attractions.',
    location: 'Agadir',
    ageRange: 'All ages',
  },
  {
    icon: Waves,
    title: 'Ouzoud Waterfalls',
    description: 'Morocco\'s most spectacular waterfalls cascading 110 meters. Kids love spotting the Barbary macaques and the rainbow mist from the falls.',
    location: '2.5 hours from Marrakech',
    ageRange: '4+',
  },
  {
    icon: Star,
    title: 'Horse & Donkey Riding',
    description: 'Gentle pony rides in the Marrakech palm groves or donkey rides in mountain villages. A memorable experience for younger children.',
    location: 'Marrakech, Atlas Mountains',
    ageRange: '3+',
  },
  {
    icon: MapPin,
    title: 'ATV / Quad Biking',
    description: 'Older kids and teens love ATV tours through the palm groves outside Marrakech. Family-friendly tours have smaller quads for younger riders.',
    location: 'Marrakech, Merzouga',
    ageRange: '8+ (passenger), 16+ (driver)',
  },
  {
    icon: Waves,
    title: 'Boat Trip',
    description: 'Fishing boat excursions from Essaouira harbor or glass-bottom boat tours. Kids enjoy spotting marine life and learning about traditional fishing.',
    location: 'Essaouira, Agadir',
    ageRange: '3+',
  },
  {
    icon: MapPin,
    title: 'Souk Treasure Hunt',
    description: 'Turn a medina visit into an adventure by creating a scavenger hunt. Find specific spices, count colorful doors, spot a leather tannery, or locate the best orange juice.',
    location: 'Marrakech, Fes, Essaouira',
    ageRange: '5+',
  },
  {
    icon: Waves,
    title: 'Swimming Pool Riads',
    description: 'Many family-friendly riads have plunge pools or larger pools where kids can splash while parents relax on sun loungers with mint tea.',
    location: 'All major cities',
    ageRange: 'All ages',
  },
  {
    icon: TreePine,
    title: 'Jardin Majorelle',
    description: 'The iconic cobalt-blue garden in Marrakech is enchanting for all ages. Kids love the bright colors, exotic plants, koi ponds, and the small Berber museum.',
    location: 'Marrakech',
    ageRange: 'All ages',
  },
  {
    icon: MapPin,
    title: 'Morocco Mall',
    description: 'Casablanca\'s enormous mall has an indoor aquarium, ice rink, IMAX cinema, and adventure park. A great rainy-day option or a break from cultural sightseeing.',
    location: 'Casablanca',
    ageRange: 'All ages',
  },
  {
    icon: Star,
    title: 'Quad Biking (Older Kids)',
    description: 'Guided quad biking excursions through desert landscapes or along dried river beds near Marrakech. Teens especially love the adrenaline.',
    location: 'Marrakech, Merzouga, Agadir',
    ageRange: '12+',
  },
  {
    icon: Star,
    title: 'Desert Glamping',
    description: 'A night in a family-sized luxury tent in the Sahara is magical for children. Stargazing, sandboarding on small dunes, and campfire stories create lifelong memories.',
    location: 'Merzouga, M\'Hamid',
    ageRange: '4+',
  },
];

const accommodationTypes = [
  {
    type: 'Family Riads',
    description: 'Many riads offer family suites or interconnecting rooms around a central courtyard. Kids love the intimate atmosphere and rooftop breakfast.',
    priceRange: '800 - 3,000 MAD/night',
    bestFor: 'Families wanting authentic experience',
  },
  {
    type: 'Resort Hotels',
    description: 'International chains and Moroccan resort hotels in Marrakech and Agadir offer kids clubs, large pools, buffet dining, and familiar amenities.',
    priceRange: '1,500 - 6,000 MAD/night',
    bestFor: 'Families with young children wanting convenience',
  },
  {
    type: 'Beach Apartments',
    description: 'Self-catering apartments in Agadir or Essaouira give families independence and space. Kitchens allow for preparing familiar meals if needed.',
    priceRange: '500 - 2,000 MAD/night',
    bestFor: 'Longer stays, families on a budget',
  },
  {
    type: 'Mountain Lodges',
    description: 'Kasbah-style lodges in the Atlas Mountains offer pool, gardens, and nature activities in a peaceful setting away from city bustle.',
    priceRange: '800 - 4,000 MAD/night',
    bestFor: 'Active families who love nature',
  },
];

const safetyTips = [
  {
    icon: Shield,
    title: 'General Safety',
    tips: [
      'Morocco is generally very safe for families. Moroccans adore children and will often help and engage with your kids.',
      'Stick to well-lit, populated areas at night, especially in medinas.',
      'Hold hands with young children in busy souks to prevent them getting separated.',
      'Use child-carrier backpacks rather than strollers in medinas, where streets are narrow and uneven.',
    ],
  },
  {
    icon: Heart,
    title: 'Health & Hygiene',
    tips: [
      'Drink bottled water only. Most hotels and riads provide complimentary bottles.',
      'Carry hand sanitizer for use before street food snacking.',
      'Pack basic medications from home including children\'s Tylenol, rehydration salts, and anti-diarrhea medicine.',
      'Apply high-SPF sunscreen frequently. Morocco\'s sun is strong, especially in summer.',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Dining',
    tips: [
      'Moroccan food is generally mild and kid-friendly. Tagines, couscous, bread, and grilled meats are all hits with children.',
      'Fresh orange juice stands are everywhere and kids love them. They cost 4-5 MAD per glass.',
      'Avoid raw salads from street vendors if your children have sensitive stomachs.',
      'Most restaurants are family-friendly. Moroccans eat late, so dinner service typically begins at 7:30-8:00 PM.',
    ],
  },
];

const packingList = [
  'Lightweight, modest clothing (shoulders and knees covered for medina visits)',
  'Sun hats and high-SPF sunscreen',
  'Comfortable walking shoes (closed-toe for medinas)',
  'Reusable water bottles',
  'Snacks from home for picky eaters',
  'Baby carrier or child backpack (not strollers for medinas)',
  'Basic first-aid kit with children\'s medications',
  'Light layers for cool Atlas Mountain evenings',
  'Swimwear for pools, beaches, and hammam',
  'Portable charger and entertainment for long drives',
  'Zip-lock bags for souk treasures and wet swimwear',
  'Insect repellent (especially for desert and countryside)',
];

const itinerary = [
  { day: 1, title: 'Arrive in Marrakech', desc: 'Airport transfer to family riad. Gentle introduction to the medina with an evening walk to Jemaa el-Fnaa square for fresh orange juice and people-watching.' },
  { day: 2, title: 'Marrakech Adventures', desc: 'Morning visit to Jardin Majorelle. Afternoon family cooking class learning to make Moroccan bread and tagine. Evening horse carriage ride through the palm groves.' },
  { day: 3, title: 'Day Trip: Ouzoud Falls', desc: 'Full day excursion to the Ouzoud Waterfalls. Spot Barbary macaques, swim in natural pools, and enjoy a riverside tagine lunch. Return to Marrakech by evening.' },
  { day: 4, title: 'Atlas Mountains', desc: 'Drive to a mountain lodge in the Ourika Valley. Visit a Berber village, take a family hike, and meet local goats. Afternoon swimming at the lodge pool.' },
  { day: 5, title: 'Journey to Essaouira', desc: 'Scenic drive to Essaouira. Stop to see goats climbing argan trees. Arrive at your coastal riad. Afternoon beach time and explore the medina.' },
  { day: 6, title: 'Essaouira Fun', desc: 'Morning camel ride on the beach. Visit the fishing harbor and watch the catch come in. Afternoon pottery workshop. Seafood dinner at the port.' },
  { day: 7, title: 'Beach & Travel to Agadir', desc: 'Morning beach time in Essaouira. Afternoon transfer to Agadir. Check into a resort hotel. Kids enjoy the pool while parents relax.' },
  { day: 8, title: 'Agadir Beach Day', desc: 'Full beach day on Agadir\'s golden sand. Visit Crocoparc in the afternoon. Evening walk along the promenade with ice cream.' },
  { day: 9, title: 'Paradise Valley', desc: 'Day trip to Paradise Valley for natural swimming pools and waterfalls. Kids love climbing the rocks and swimming. Picnic lunch in the valley.' },
  { day: 10, title: 'Departure', desc: 'Last morning at the beach or pool. Transfer to Agadir airport or back to Marrakech for departure. Shopping for last-minute souvenirs.' },
];

const budgetTips = [
  { tip: 'Travel in shoulder season (March-May, September-November) for lower prices and pleasant weather.' },
  { tip: 'Book riads and guesthouses instead of international hotels. They are cheaper, more authentic, and often include breakfast.' },
  { tip: 'Eat at local restaurants rather than tourist-oriented ones. A family tagine with bread costs 60-100 MAD ($6-10).' },
  { tip: 'Use shared grands taxis or CTM buses between cities instead of private transfers.' },
  { tip: 'Negotiate riad prices directly for multi-night stays. Many offer 15-20% discounts for 3+ nights.' },
  { tip: 'Street food is safe and incredibly cheap. Moroccan msemen flatbread, freshly squeezed juices, and roasted corn make great affordable snacks.' },
  { tip: 'Free activities abound: medina walks, beach days, garden visits, and people-watching at main squares.' },
  { tip: 'Kids under 12 often stay free or at significant discount in most Moroccan accommodations.' },
];

const bestAgesToVisit = [
  {
    age: 'Under 2',
    verdict: 'Possible but demanding',
    color: 'bg-yellow-500',
    description: 'Morocco works with babies but requires extra planning. Stick to one or two bases (Agadir and Marrakech). Riads with courtyards are ideal as they are enclosed and safe. Pack everything you need as specialist baby supplies outside major cities are limited. Avoid summer heat entirely.',
    pros: ['Children under 2 fly free on most airlines', 'Moroccans absolutely adore babies and will help constantly', 'Many riads offer cots and high chairs on request'],
    cons: ['Medina cobblestones are stroller-impossible', 'Long driving distances between destinations', 'Limited baby-specific supplies in smaller towns'],
  },
  {
    age: '2 to 4',
    verdict: 'Good with the right approach',
    color: 'bg-blue-500',
    description: 'Toddlers love the sensory experiences: camels, colorful souks, beach sand, and fresh orange juice. Keep drives short, plan around nap times, and choose accommodations with pools. Agadir is the best base for this age group with its resort infrastructure and calm beach.',
    pros: ['Short camel rides are a huge hit at this age', 'Beach time in Agadir fills entire happy days', 'Moroccan food is naturally toddler-friendly'],
    cons: ['Heat management is critical in summer months', 'Child carriers are essential for medina visits', 'Evening cultural activities often run past bedtime'],
  },
  {
    age: '5 to 8',
    verdict: 'Excellent - a sweet spot',
    color: 'bg-emerald-500',
    description: 'This is one of the best age groups for Morocco. Children are old enough to walk through medinas, appreciate the visual spectacle, and participate in cooking classes, pottery workshops, and camel rides. They can handle longer drives with entertainment, and the country feels like one giant adventure playground.',
    pros: ['Old enough for cooking classes and workshops', 'Fascinated by storytellers and acrobats at Jemaa el-Fna', 'Can walk reasonable distances in medinas and on hikes'],
    cons: ['May struggle with midday heat in summer', 'Picky eaters may need familiar snack backup', 'Haggling in souks can overwhelm sensitive children'],
  },
  {
    age: '9 to 12',
    verdict: 'Outstanding',
    color: 'bg-emerald-500',
    description: 'The ideal age for Morocco. Tweens can appreciate the cultural richness, handle multi-day itineraries, participate in all activities including desert camping, and remember the experience for life. Give them their own 100 MAD budget to haggle in the souk and watch their confidence soar.',
    pros: ['Desert camping under the stars is transformative at this age', 'Old enough for quad biking, longer hikes, and water sports', 'Absorb history and culture like sponges'],
    cons: ['May need reliable WiFi for staying connected with friends', 'Hot weather tolerance varies', 'Some children find the intensity of Marrakech medina overwhelming'],
  },
  {
    age: '13 to 17',
    verdict: 'Exceptional',
    color: 'bg-emerald-500',
    description: 'Teens thrive in Morocco. Surfing in Taghazout, quad biking in the desert, photography tours through photogenic medinas, and the general exoticism of the country make it far more exciting than a conventional beach holiday. Many teens describe Morocco as their favorite family trip ever.',
    pros: ['Surfing, paragliding, and adventure sports are world-class', 'Instagram-worthy at every turn', 'The culture, food, and people create lasting perspective'],
    cons: ['Some teens may find modest dress requirements restrictive', 'Late Moroccan dinner times (8-9 PM) suit teens well actually', 'Need to establish WiFi expectations early'],
  },
];

const strollerFriendlyAreas = [
  {
    city: 'Agadir',
    rating: 5,
    areas: ['6 km beachfront promenade (fully paved)', 'Marina and port area', 'Souss Massa Boulevard', 'Modern shopping district (Talborjt)'],
    notes: 'By far the most stroller-friendly city in Morocco. Modern, flat, and purpose-built with wide sidewalks. The beachfront corniche is perfect for stroller walks at any time of day.',
  },
  {
    city: 'Rabat',
    rating: 4,
    areas: ['Bouregreg Marina and riverfront', 'Avenue Mohammed V (Ville Nouvelle)', 'Jardin d\'Essais botanical garden', 'Hassan Tower and Mausoleum esplanade'],
    notes: 'The capital is well-maintained with dropped curbs in the Ville Nouvelle. The new Bouregreg Marina waterfront development is excellent for strollers. The medina has some wider streets but is generally not stroller-friendly.',
  },
  {
    city: 'Casablanca',
    rating: 4,
    areas: ['Corniche beachfront promenade', 'Morocco Mall and Anfa Place surroundings', 'Hassan II Mosque esplanade', 'Parc de la Ligue Arabe'],
    notes: 'The modern areas of Casablanca are very stroller-accessible. The corniche, major malls, and park areas all work well. Avoid the old medina with a stroller; it is narrow and uneven.',
  },
  {
    city: 'Marrakech',
    rating: 2,
    areas: ['Majorelle Garden (paved paths)', 'Menara Gardens (flat grounds)', 'Gueliz modern district (wide streets)', 'Hivernage hotel district'],
    notes: 'The Ville Nouvelle and Gueliz are manageable. The medina is essentially impossible with a stroller: narrow alleys, cobblestones, steps, and motorcycles. Use a baby carrier for any medina visit.',
  },
  {
    city: 'Essaouira',
    rating: 2,
    areas: ['Beach (hard-packed sand near water line)', 'Avenue de l\'Istiqlal (main medina street)', 'Port and harbor area'],
    notes: 'The main avenue through the medina is wide enough for a stroller, but side streets are cobbled and narrow. The beach is flat but sandy. Best to bring a baby carrier for exploring the medina properly.',
  },
  {
    city: 'Chefchaouen',
    rating: 1,
    areas: ['Place Outa el-Hammam (main square only)'],
    notes: 'Built on a hillside with steps on virtually every street. The blue-painted medina is beautiful but entirely unsuitable for strollers. A baby carrier is absolutely essential here.',
  },
];

const childFriendlyRestaurants = [
  {
    name: 'Amal Women\'s Training Center',
    city: 'Marrakech',
    description: 'A social enterprise restaurant where women train in culinary arts. Excellent Moroccan buffet-style lunch at very fair prices. Spacious garden setting with room for children to move around. High chairs available.',
    priceRange: '80-120 MAD/person',
    kidFeatures: ['Garden seating', 'Buffet format (kids choose what they like)', 'High chairs', 'Patient, family-friendly staff'],
  },
  {
    name: 'Terrasse des Epices',
    city: 'Marrakech',
    description: 'Rooftop restaurant in the medina with panoramic views. The menu includes kid-friendly options like pasta and grilled chicken alongside traditional Moroccan dishes. Spacious terrace with cushioned seating.',
    priceRange: '100-200 MAD/person',
    kidFeatures: ['Open-air rooftop (kids love the views)', 'Western and Moroccan menu options', 'Generous portions easy to share', 'Fresh juice bar'],
  },
  {
    name: 'Cafe Clock',
    city: 'Fes & Marrakech',
    description: 'A cultural cafe with a relaxed vibe, famous for its camel burger (kids find this thrilling). Regular storytelling events, live music, and cooking workshops. A creative, welcoming space for families.',
    priceRange: '60-130 MAD/person',
    kidFeatures: ['Famous camel burger (conversation starter)', 'Storytelling events', 'Creative atmosphere', 'Western comfort food options'],
  },
  {
    name: 'La Sqala',
    city: 'Casablanca',
    description: 'Set inside the 18th-century fortifications of the old medina, this garden restaurant serves Moroccan breakfast, brunch, and lunch. The lush garden courtyard with birds and fountain is enchanting for children.',
    priceRange: '80-150 MAD/person',
    kidFeatures: ['Beautiful garden with birds', 'Moroccan breakfast spreads kids love', 'Relaxed atmosphere', 'Enclosed courtyard (safe for wandering toddlers)'],
  },
  {
    name: 'Pure Passion Restaurant',
    city: 'Agadir',
    description: 'Beachfront restaurant on the Agadir promenade with international and Moroccan cuisine. Pizza, pasta, and grilled meats alongside tagines. Direct beach access means kids can play between courses.',
    priceRange: '80-180 MAD/person',
    kidFeatures: ['Direct beach access', 'Pizza and pasta for picky eaters', 'Beachfront playground nearby', 'Ice cream available'],
  },
  {
    name: 'Dar Essalam',
    city: 'Marrakech',
    description: 'A legendary traditional restaurant that feels like entering a palace. Live Gnaoua music, belly dancers, and a multi-course Moroccan feast. Children are entranced by the spectacle. An unforgettable experience.',
    priceRange: '250-400 MAD/person',
    kidFeatures: ['Live music and entertainment', 'Stunning palatial decor', 'Multi-course feast format', 'Staff experienced with families'],
  },
  {
    name: 'Ocean Vagabond',
    city: 'Essaouira',
    description: 'A beachfront cafe-restaurant with a laid-back surf vibe. Fresh seafood, sandwiches, smoothies, and excellent coffee. Outdoor terrace overlooks the beach. Kids can play in the sand while you eat.',
    priceRange: '60-120 MAD/person',
    kidFeatures: ['Beach access from the terrace', 'Casual and relaxed', 'Smoothies and fresh juices', 'Surf-school vibe teens love'],
  },
  {
    name: 'Fish Market Restaurants',
    city: 'Essaouira',
    description: 'At the harbor, choose your fresh fish from the market stalls, then take it to one of the grill restaurants next door where they cook it for a small fee. Kids love choosing their own fish and watching it grilled.',
    priceRange: '40-80 MAD/person',
    kidFeatures: ['Interactive fish-choosing experience', 'Freshest seafood possible', 'Outdoor seating', 'Very affordable family meal'],
  },
];

export default function FamilyPage() {
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
              'url(/images/hero-family.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Family Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Baby className="w-4 h-4" />
            Family-Friendly Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Family Travel Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco is a land of wonder for children and parents alike. Discover why this
            magical kingdom is one of the best family destinations in the world.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Why Family-Friendly */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Perfect for Families
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Moroccans have a deep love for children. Families traveling with kids will find that
                their children open doors and create connections everywhere they go. Restaurant owners
                will prepare special dishes, riad hosts will organize impromptu games, and strangers
                in the medina will smile and wave at your little ones. It&apos;s a culture where
                children are celebrated and welcomed.
              </p>
              <p>
                The diversity of experiences in Morocco means that even the hardest-to-please family
                members will find something to love. Beach lovers head to Agadir&apos;s golden sands.
                Adventurers explore the Sahara desert. Nature enthusiasts hike the Atlas Mountains.
                Culture buffs wander the ancient medinas of Fes and Marrakech. And everyone loves
                the food &mdash; Moroccan cuisine is naturally kid-friendly, with bread, grilled
                meats, and mild tagines that even picky eaters enjoy.
              </p>
              <p>
                Morocco is also remarkably affordable for families. Accommodation, food, and activities
                cost a fraction of European prices, allowing you to enjoy luxury experiences without
                breaking the bank. A family of four can travel comfortably for $100-150 per day
                including accommodation, meals, and activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Family Planning Guide */}
      <section className="pb-8">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-5 border-l-4 border-[var(--color-primary)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Need hotels, itineraries, and budgets?</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                This page covers activities and experiences. For detailed trip planning with
                specific hotel recommendations, sample itineraries, and budget breakdowns,
                see our planning guide.
              </p>
            </div>
            <Link
              href="/family-guide"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors whitespace-nowrap"
            >
              <Users className="w-4 h-4" /> Family Planning Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Best Cities */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Cities for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These three destinations offer the best combination of safety, activities, and
            family-friendly infrastructure.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {familyCities.map((city) => (
              <div key={city.name} className="card-moroccan overflow-hidden">
                <div className="relative h-56">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[var(--color-green)]/90 text-white text-xs font-semibold">
                      {city.ageRange}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                    {city.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {city.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((h) => (
                      <span key={h} className="tag tag-primary">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Ages to Visit */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Best Ages to Visit Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every age works, but some are particularly magical. Here is an honest breakdown
            by age group to help you decide when to book.
          </p>

          <div className="space-y-6">
            {bestAgesToVisit.map((group) => (
              <div key={group.age} className="card-moroccan overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      Ages {group.age}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${group.color}`}>
                      {group.verdict}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {group.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-xs font-bold text-emerald-600 mb-2 flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5" /> Advantages
                      </h4>
                      <ul className="space-y-1.5">
                        {group.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-orange-600 mb-2 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> Considerations
                      </h4>
                      <ul className="space-y-1.5">
                        {group.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                            <AlertTriangle className="w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15 Family Activities */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            15 Amazing Family Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Handpicked experiences that kids of all ages will love.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {familyActivities.map((activity, index) => (
              <div key={activity.title} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-[var(--text-primary)] text-sm">{index + 1}. {activity.title}</h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{activity.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs text-[var(--color-secondary)] font-medium">
                        <MapPin className="w-3 h-3 inline mr-0.5" />{activity.location}
                      </span>
                      <span className="text-xs text-[var(--color-green)] font-medium">
                        Ages {activity.ageRange}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Family-Friendly Accommodation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationTypes.map((acc) => (
              <div key={acc.type} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{acc.type}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{acc.description}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="text-[var(--color-primary)] font-medium">
                    <DollarSign className="w-3.5 h-3.5 inline mr-0.5" />{acc.priceRange}
                  </span>
                  <span className="text-[var(--color-secondary)] font-medium">
                    <Users className="w-3.5 h-3.5 inline mr-0.5" />{acc.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-green)] mr-2" />
            Safety Tips with Kids
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyTips.map((section) => (
              <div key={section.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
                  <section.icon className="w-6 h-6 text-[var(--color-green)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stroller-Friendly Areas */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Footprints className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Stroller-Friendly Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest city-by-city assessment of stroller accessibility. The general rule: modern areas
            work, historic medinas do not. Pack a baby carrier alongside your stroller.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {strollerFriendlyAreas.map((city) => (
              <div key={city.city} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{city.city}</h3>
                  <div className="flex items-center gap-0.5 flex-shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < city.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-1.5 mb-3">
                  {city.areas.map((area) => (
                    <div key={area} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                      {area}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-primary)] pt-3">
                  {city.notes}
                </p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 border-l-4 border-[var(--color-primary)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-2">Stroller vs. Baby Carrier: The Morocco Rule</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Bring both if you can. Use the stroller for modern areas, promenades, airports, and resort
              grounds. Switch to a baby carrier (structured carriers like Ergobaby or Tula are ideal) for
              all medina visits, mountain excursions, and any historic site with cobblestones or steps. A
              lightweight, compact stroller that folds quickly is best for Morocco as you will frequently
              switch between surfaces. Strollers can be gate-checked on domestic flights within Morocco.
            </p>
          </div>
        </div>
      </section>

      {/* Child-Friendly Restaurants */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Child-Friendly Restaurants
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Restaurants tested and loved by families, with space for kids, menus that work for all
            ages, and welcoming staff who are genuinely happy to see children.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {childFriendlyRestaurants.map((restaurant) => (
              <div key={restaurant.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-[var(--text-primary)]">{restaurant.name}</h3>
                  <span className="tag-secondary text-xs flex-shrink-0">{restaurant.city}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{restaurant.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {restaurant.kidFeatures.map((feature) => (
                    <span key={feature} className="tag tag-primary text-xs">{feature}</span>
                  ))}
                </div>
                <div className="text-xs text-[var(--color-primary)] font-medium">
                  <DollarSign className="w-3 h-3 inline mr-0.5" />{restaurant.priceRange}
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-8 bg-[var(--surface-muted)]">
            <h3 className="font-bold text-[var(--text-primary)] mb-2">
              <UtensilsCrossed className="w-4 h-4 inline mr-1.5 text-[var(--color-accent)]" />
              General Dining Tips with Kids
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {[
                'Moroccans eat late. Lunch is 1-2 PM and dinner starts at 8-9 PM. Many restaurants open earlier for tourists.',
                'Almost every restaurant in Morocco is family-friendly. Children are universally welcome.',
                'Fresh orange juice (jus d\'orange) is available everywhere for 4-5 MAD per glass. Kids drink it by the gallon.',
                'Bread (khobz) is served with every meal and most children love it fresh from the oven.',
                'Avoid raw salads from street vendors for children with sensitive stomachs. Stick to cooked hot food.',
                'Tipping is customary: 10-15% at sit-down restaurants, 2-5 MAD for cafe orders.',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packing List */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-primary)] mr-2" />
            Family Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            Essential items for a comfortable family trip to Morocco.
          </p>
          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {packingList.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10-Day Itinerary */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Sample 10-Day Family Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A relaxed pace with plenty of variety. Marrakech, Atlas Mountains, Essaouira coast,
            and Agadir beaches.
          </p>
          <div className="space-y-4">
            {itinerary.map((day) => (
              <div key={day.day} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-moroccan flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Day {day.day}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{day.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Tips */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Tips for Families
          </h2>
          <p className="text-center text-[var(--text-secondary)] mb-8">
            How to make Morocco even more affordable for your family.
          </p>
          <div className="space-y-3">
            {budgetTips.map((item) => (
              <div key={item.tip} className="card-moroccan p-4 flex items-start gap-3">
                <DollarSign className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Heart className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Create Family Memories in Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Start planning your family adventure. Explore destinations, find family-friendly
            accommodations, and build the perfect itinerary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
